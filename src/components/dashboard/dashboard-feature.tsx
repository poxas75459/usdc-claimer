/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "43iXkJdFg51k2eGQadqmCamjbNfExMDaKa5pStM7Exe5jPWjqctv57UyUPa5JxprGf61ASjiYnWsYTpuccUEcGLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3pCBD8NYQheXUVZdM9nh5JrrZPmGaeZ3AfFb7K5h6Fh2sr4bVuhZhNTb77SoLGXMFDCx9H5p5YFepHuxVA7Met",
  "key1": "3jitY5g33VaMNxoRyQbuiQf2h6BrU9wywuPxbc9SexTtyad2tyk853UW2TE5At3Q87iCeS1VvWRMh6kAEHCDLSLC",
  "key2": "5Cb896yaCxJqgurwb12oj9FTpwBF7Tf97a1Pojp9gDDEyXrBmKDCk571anHNH8YDtGPVKjHHknVgfTXJneuq9Xau",
  "key3": "k3ciR4AHmKH9w2FGSe2nx8KcXzZL9Gywk1xzPFWHpNVfkbaBhiwnQZkARPLyEhvExtRpy7AoHZDXQYqPKcEHZTQ",
  "key4": "4RCxhz5vVADWW4tbSZn3f6VVkSnY3YKvCN8r18FBejG7iJzv6XMwyRLZwG58qewo71Kf3ZdYFACT4n87Q52D7Wqc",
  "key5": "4KT5RDp8bvb6foeiYLBezKpx1Eg4Tmyqt8tVLYQXhQ29BKe4j15WfC76GYPX8oj32LNHLuMnYjZcYazyDQyj9jfw",
  "key6": "3aXYtYRY3669VbQgXrnYBxoR8hzykWXYAwVmWDBAa3jbGroPQgzkbmPFfjq36HFmyFfnXNPQtLynrMYkgwFzxBga",
  "key7": "5Hf2PMubYx3Td4ECQF1Sv32xmdSMAVmNGhqm9cU9Lf2ch1WSoZ69qGT6dsjy4zfLgJsLWM1c76sa8FoNB4pTo26P",
  "key8": "mifqS6qNTBousbdAF7gZ2HwVSRwFyjJse1yi56wq2F1RwBEa7uC8cQahLfFkPzhPFYKBVSy8Y1UtKbevu4YmFQL",
  "key9": "2bK2bHw9pX6eR5YLhy1nummHLCS4HirSydYXWXasFVg639ZNrUxK5PBbs5Sb7t8t19XWRc6SUNrVDpgUu52Q6163",
  "key10": "5ahRnPGqBFh3ZSdxAieiQFBRJPNJeUHxvYQdJ2ycFtiGBBsZMXxUC6A7GWUZKj6AAngyPWNdc91TS4ApvnQuM31q",
  "key11": "5TtHMLXTpHbV8sCLAeY1KRhDzYfsq8k3euTfQbhA5onGE7PNDLDMn6ojxyjY9fxsYzAxNVJsutQeBBRk7GrpsZez",
  "key12": "3sakJCyHSALRpBVMjwfCj1FV6MweJozdi36fLyndayZroGgkETLJUdW6N5B36s7kVuT1SLR5a8TfAxmiBGGXFQgn",
  "key13": "4iedvtDMniBijxSxWquQ4QFxmMABvJp8SYRwegxGLv2ZFgrKX16Wz5WewWtthDPCNDZ4CsixG3ouQ5zsGjTKJvV3",
  "key14": "XpaTceXSknVqYajHU9imMhp6LBVv4y1eiStTpmdLo3YURDpXHjp81Rqh3jDPGZtQ3atkSpZk2Ta3jD1MJWzCmga",
  "key15": "4MuoNAAFZzGkKMQtdDec8VRKZDpPsV8FNfLk8iP1igctLagChid8EsRDBQTndyCTugyovz1epvbz6hfiNX93kPoo",
  "key16": "2bou6vB2jXCHEM2hkeHFWZVVUUrgBYbC2PYvvfppfi8jvKBRrc79reiJvQpdfoJ8HVVBjU236RbAv5Xd2wwCDJyS",
  "key17": "3QicyGRbVGVQDrL85w3ehP2jFJrtZ74RYQ4KD9U5p17wHehAyHdHKi6gPZAUPFpo1wwAoPmrVdXCaGyiygnMmneY",
  "key18": "3hq8BFSpwn623HjjbgxK4GcS4kTjWFZbqaW7mKKp71tFBRDng8EXAP2wLL32chL6GbFWgq8b7fg4QtL34sskqCrA",
  "key19": "22nCsvWrh1mNMANMBjuBjQaUt2LAfHpF835NLBWSAyCrtjpKkpyKHtEeX8jXsyq6tYtmq58ZUnDpdpF7vHpW9WnJ",
  "key20": "5j9mez2a2gkNF2cbg91j7Zob4DAUJGmoPsZHvpJhQNkd2M8Zxii421zDHKQAxaYnsCcQBgi8rS3nGBn5rPXLtB2u",
  "key21": "3c3BJSYuRPqDNTi2W45vryjaDAf9mhDRYma1Zz7QW7YAc9M4HuZAUZQyhEu9Xmm89R8TsEeHjvduobAJhxcEWLkV",
  "key22": "5g5ou6mhDbYLB8tX5Q9JV5nEZyY4HZG4aooy6Ei9NvJM5S6dvYhRRnVXDx3StSvtJTzFidyk2ERAVsWPHtPk6MS2",
  "key23": "4pS79HPSk4SPEAaU62wakKA3vW9PDPFQkY9wd4FtCtR93EVhkjiWpC8tMfckYaDy9aaG7bPBCZ5XXdm3XzazUqj2",
  "key24": "98fVfQyh9MEawFjvhbaiScvXaCHkejgf31UixDRdUrUh2NccrA8HkbGm5Lvjm4rButQcbgMqYKv2hSZY8vqm5wt",
  "key25": "5sdcSQkVmi541EwfrtTq35M49iJPFPnx2qn6RKncCCQbrM3MrNfEB3FsBRkCCVa7PnDo7Leu9yWot1KZY2dWAHf3",
  "key26": "5PiSMof8mmgmBaWKzxT4tiA8uN7NHXzrwWwPcPrj7ficdxfpF7DbtrMZVBDkeUYsbrMTDAV3GDLvR7razFkDwU4y",
  "key27": "a5MeNYj1PJekDqivD394SjYfVKE3GvRzMgTZ7ZCLb7i7hr8rTC8eQFRSxVaVoeuZmkn3owFPZUf2hUwKtaZr9Yh",
  "key28": "ME3CdZvz5GXai1WbpfpK1pYk25nTuLA2DPVELTnsDgYSM1zPMwQd26kc7oYt834LQ3VrTmnqWYvC2orysLtTqLn",
  "key29": "KkfZAV1PRLzbE4cTX8UKmWTFLUubUSLKffemRjGP4e4qiXTgGFzJUb72BEQxLpPTVuoq5FA5v2NhWQYvSktFJBo",
  "key30": "49QGwtU7XZa785uRXno1fbzxkijetadK2XXgi5fCHUaDpcBTSVWBMASF9P5SYcVwrad8mpyG6q4QfGMYnmrcYMtJ",
  "key31": "4n6eG5v6RQRPo3kUEhoDFzcSnPe5RaF7EEQaNsjvgkaJuQ9YZsvj7xbby2bQsowqpjQzFXDzERVLEmjBC79Yh16H",
  "key32": "21E34zApcUWeEsAvzRrJgtpm9RkFWYm1d4KF4FL4dsWGRavbfAXQRyEuvdXHTcgJsRr9rtfY6ePn6SN5NEbxMpe7",
  "key33": "33QVF8cwXy5uVvNW9chZi9c3mPYqfWspjr6zqKdW4weL7kwEfRJfyRVhknNYnv8U1xj4Ls3EHSY2EtyZQfdvq1hC",
  "key34": "5Q5KHvDFtn17LoSAV2vph8NMR4zk88xLX1tXn9i9pTFh27XJY8YZ4AUNVTx1vTGS9gQRLZMjkURDNnt6KK5G7B8p"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
