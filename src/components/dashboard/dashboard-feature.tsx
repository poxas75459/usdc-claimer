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
    "5CafAquDSpSUtPJEvetxkZkB8Jp5KUfWBsrP3yoTiRpRqjgF8vVYarFL4DgYiCYaxAdScm3ccr1ezWcovhKgP3JG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDQSgRr9ywe5SpBMfwuUCVrA5fmYu4YuHVw3mrSouWKixG8TEujdRH1B8MJSXWYbrB7Yu7BJARb5noTmperQhre",
  "key1": "2y5yemAb2JMdsJK98NuW64pdz7E52QfKaV1JwV5MhBKEDDWkAb1G7QCJ26GmDDCoefiv8RHdzYBnT2LeurW753bM",
  "key2": "2z1PR8W5JMi2Ei34bnCEaJkUyixmVRarL7ZTPCF3scgnxHEKrvK2pULKAqZns2gHKzdoG16d71BRuF6SdvGVngWE",
  "key3": "2DjgMa6HrAM5tvkkTFcneBW1zzqGiRxBnKWMaj3tn122wi99cqA8YTanHWN9kGgNiJER5j4WXLVaH7reCbkvvaN1",
  "key4": "75uZQPLJHcKtgf9fcf5KsRfjSgWDfPRyVvbjYkxfmBzwuJCHDRiD9tpFE3D5LqrEFoL9SycFRA4Ep7FiVoRTe7q",
  "key5": "4YmFY4Y2cWTk9THmZgazcSwsA7DYErfTMG74t4XVVxsgrpYCwiouwunHzdEUmXKWBQPuUSAiPJYHBv2qDYyQC538",
  "key6": "5tZfRnmBBT2GHu1wYug4uDpKdDv3sTgK439T7pChJ1KDSPKkbQ6TQovjoLwYSiuJL6BvDRzBajdQqh8QY3fB9WyN",
  "key7": "2epLGzBQpeYyCdiB4fxWghoHacbiQ7gLxd5B664KjcveuGrRV1umV6kewaQBM3vZAhbYd5KXXnzW9bHLFCdzUC2H",
  "key8": "3kpLa8hnjP6ZRu8KZRGvAjoJu2PiJkuq9jL7jduSCMR3R9UuikHrxrUuo5yQPqbGAE9jW7ZDuoPoEJq1A1YXv32F",
  "key9": "4pnuvJcPK5jMDtYH4DZaUVDvvKuJ9xeqBEeA5wFYCwgEQv936hrNd7CJJpKA9cFwqWmjmcQWuPididt1jFNoZy3s",
  "key10": "5BwW1AYxYWdzAEaR8KW2K9z5UKRCF5Yra8mLFQUTFFdHaER6RukP6bdDnpMhmXWVLWbELB8v4EC2q4BhahSyTtcT",
  "key11": "4SNH3dodfx8t1U7XfKozcdjHmf8GTnHZDfPurrJX1NP3tNRofQDoGNsTvPqYSASDsb261YLkfxvhNK6iyWGy16g8",
  "key12": "55KnyYQr35SDH5uDJ4vMrvTCA5U9C6KEkBsjDe73YzhCM3Mmx8ibvhKgs71aKJSV8ESf6RTocVsa7PDuBQQai8Xi",
  "key13": "cW5dNNdNYvHwCMCd9L7EjdjktBpVhtWqRVtYN5ByfHWQeBkML3JBWgySDQuoMgcMajqwsPmrsSEXLK6J9ZUe1Zn",
  "key14": "8vWj9rDV2F1JciXVKsk3fkKQ31zrBrsBjhAJxuUTGeUvUfVvTbe2VYAtcKGncxV4kcVpsp44uVAmdxz2nmDrMAp",
  "key15": "2zPTFwgr84bwaFbHg2Ho9k9iwTBpsGbKVSBU9MhDsgYUWHHwLc6xQBq6mHR1ZJCPA3xqx3sZykKzZFRiNsDmS5Dq",
  "key16": "5cr8eZvixEmARZVTkW9mc4HWBBZKNjYs1SHr9KunA7UcnzLGdm9ngjqG1Eg8Eg1JJUNiuFCXmAYuoq3WZm4P2nny",
  "key17": "2cmimrcfUbbcSrjbpT4E2C6Q4HYFswsuff9dTjhYMZt6LMP1Jrthkpv5DMNujXGdpRMkt8tmXTYWda5tUQGybQeJ",
  "key18": "5ZyMStC6EPfXc2i4hX7NpBonHS1KoZvrxmw9YDsLwon2Ga4evLN4oWHGMhK9jxU8dR1t48iN8zsPtY5k8tqYYu9Z",
  "key19": "2K5NguMnQrg2iW6yWBGocuQCMPaghDUb1YkU5XtFperbrEUSZRP2zqnkP74U4hGqmzYy3s5ovQWY1RHTZwxjZc4u",
  "key20": "3cmEqggsQjFe5ka92nvQBbRHrthA8R3KPorDGZQuQK2rHDM8Qo1pscYZZJ75woK6dSmwfaZdgGHi2SSSA2pVjXnm",
  "key21": "2EBin9E27Z15jnC3UgW6uUj4KbGnmiC4tutouk5CwG5YVqrwfnF1WYNonCSVCtAk7YrdxxRwbmuQrWnVPvyjwQx2",
  "key22": "3wzrKg5y5aQcdJgDnR4xrXtDK8ygaAVtnn1Fdng7AMPKuBiJTnEwGoRfyijrWop2TgehdGukWXZV69tqVbgYQZt",
  "key23": "2NffDuw9FZtngZvekywdp4796r6dXjuAK8hJzekfc7i9Hw7tveZUJCpch6TjfUfDHK5WBPLcRcoSQpr41o224Y5c",
  "key24": "4pEqypq3WSMoSW9R5s45wePhpL7YkXTz8QrJWqAhHaNF9akkk5puKSnHAvpBY4Ld7npBZS4J6DFsr52Qr1rUYrRf",
  "key25": "5L1QNsqjicSHsZuhyVtuRctqoVQaVdsZafNaMAWejeiH9SJFGUeW14LneP4QUFctXrBVcBkSyZQPU24Je2gMUfPH",
  "key26": "tf27truDmpMQQwNbxwx5KnY2hwdHPhoCQnb8onLTZ88Anwn6PAW19jJoSgxsw53mxE75Uej6AVjtj8GwYMngwoS"
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
