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
    "3GhbsWcQ6SWvDmtvfLAGoJsU8xWbKXaRyUQVFmgDeDwjWJmYKULb3jTe1csuuBnZcDCLuM7rL75dMXaMymujzGNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGpjbBZeQCvJxoR7TaPjNrDEhTBgRdHeqYXFQbA1B5ydLrsNCGaWe7YZXnb3dXkKndeAkwyMpR6eLH9zDisSdQN",
  "key1": "rjwVUc6rUfYvnz6RQgtJg5afw5RdnrsgfvjwZKJQY5qBRV1pehmVLbtqUZ4JUknPmYxSJSJSSfhjq62umnth7mU",
  "key2": "654tfTviQx9BPdbyx2xB9baioEAFyC4BVjLPKLgShkr3FqDhcdsrqUr85RsEhxGZpj5kQNSAVn8JuYxA3nnkJuxF",
  "key3": "5FV9FYMfsfG7BbNwwL8Wm26uZb5w2EzxkpHVrh9RVMGPRsv9JhJwuZ6ndCqBZ2RKb7Cft2MvaagEoKNtyjua23hc",
  "key4": "3W3KQ2KDsSQVe8G3R2qUDwDYca1fQdUdNu51YQVtFn758C5qddm7t2PZ1Uq7CLqoeWz5hPa2aNLFC55qD7KKBs2T",
  "key5": "rt7cQfmwbQXArQPAGZFcioozAa7mEfNHEzYJHGG3pGL2JuVvoK6KSokcUGneihN4WpeNtYvSnwLrkky3Ui4Dc9U",
  "key6": "32fuU5hBnjEpoFscz1k9ftYa9ACcnzzftJov5MgrTEcByoHzrGLdcmwQQmQpMWKpeCNXEcx7rB7dTzvv38CNUVEF",
  "key7": "3nw6rdg1Z96EhQUDXhgx7yYhg1PcTk9fVDtFC5wo8Q12Pj4ZCdociFNRinqPYtihhdW121LWZPRQqEeBwZeLFFaA",
  "key8": "5DpiC6iLfxTkAaEm5mUJuAW2hH67HiUKpZiTFMcMg9sGikz7wAsw25uinwTWUogk6yQ5Qt6yTXHuys69ByuQSFYi",
  "key9": "YWPkTeBQfVeav45qYBZab2cUyNBLynbN1KCc7TzVwN5W8jm9LooeRyU4jqM9z3a1JCTkGN9gukuQWEkLPdeAZFV",
  "key10": "3FsayouDjNPcTbngXP9BC7st95SHYNfjnaaAxvGRK4YcobK5K4Ymt1wjsKKs68Y5afHqZnvB2i8Ff1ix3syA2n2z",
  "key11": "4WGGNzjyuPjS3Xnh3GEqWxLdyZ9W5fnShzvuUNX4KC7eGLSAUPrZwBcYGC59GioN4zD2oJp51GpPXDDUB2QCPXmP",
  "key12": "3MfbmHRoU9DBF8zhQiafwGx2TwqVCqBDkPLhBMHVNEPabPhynwVgt45MUczm6wmgfKEhBH3xvSBsFVvv3iw6ssQ6",
  "key13": "4kavmT5ooD5rgZtrXXZGhYf2NeN3izSTm6bwXVPVwNrjfHB5AxiMHXwAZmWtkiZbtorAPiShCwJn5Mz62Jbpoh4B",
  "key14": "3mELBV85AtVBQE3QETvQkmdgscoDgEmbhZdXWwZPPSXTH24Xd4jCtejTKKpeYnK57BF5mtBCddQSasTaHrctxUFJ",
  "key15": "2wfha56DLQU8N2wFjftfiAGjhnQe77GjSExz15JBkdur7KEbgkyNyxEAGpnFrdZ6PEtbnKwxRn87qAXPiFeWXdKu",
  "key16": "3DyEZbiBnbVrNfeqi9LhUjJPMf2FtSDmDLiqN7VeQnSPvQUSZYLraScwdYteYBL4vJLdQoyy8JjBUgBxrAoYzccw",
  "key17": "5LbxiYNfdPsumeUjZ5ntrHY9zwUnAxRJetK6SbWNRuv3VYtSXvqDLzN7kC767W14H1rbbiXg16biyvi1yN9DRyH5",
  "key18": "CU4qzs2pysed1KfStMX5HwhozKXePZnVwkYg4dCsMbG6buT6nhiftAWAtztN7czfHvysB1QCfdZ3uKFAZAZ1zMf",
  "key19": "4355pXyxfLGfdsvKkEEKht5nkMK4w2VHQpUpMH3ygTBwdwzWQxigAYJaMRPM2WfdioL6dwnr7RvutPeLEoAH3cwu",
  "key20": "2MJYKokU52TpoLLfxw5UbPvmAu2SEHKYjphHAWg4Zv5VKdUWJ7h9DbsEJF3rgYJVPuB6tw8Huqd1WwCcsGEEXRJF",
  "key21": "3wPG1EXdcDCNmuJeVSNxeAr3k3eEk9UKCQXsFw8ZRkghELgtJnhTc65DJdtrjE67NAjGbUGDL4rgBzgQAkKDuwSV",
  "key22": "rAUKXPirCQTK2tRcohUZsL9qw9E39r9cAqb5JrhoPSWGPPixjU7DvXPUj2Y11bHBTgzkRKATvpnngUye45Giazn",
  "key23": "4n8v9YgexYP4SWduZkRxYwMv3pDSSHe6VyWigp9yxSxKUFbbZnR5jccWDEXkwtG3uwskBkiuMFf92oGXfhi8Vg6x",
  "key24": "7EKCKJfpS7rYi9qY4pAHeVaStK731azBjqgjFfCkzsR6RHrqJZz5urhffpzkZASpBJFPY61vFL1qKEHCnMfxpxQ",
  "key25": "64h87QNY7rH6tSFXM49qithEz7VJitdV6moEYH5er3ZrsBqnkYX9BejKgymVkASHzTvhcxXjB6ADbPS6L9vsmtWe",
  "key26": "24YoytXC189xGGgm7qMdfCDVMmdcjpuFhvLaM3kSM6GYVe6dvBNdGoSukZxob6Hiqts2LK75UTJzPBs9HmyFYfZZ",
  "key27": "4kNZgqVnX3P34dcwLXfsLwCPsPDKy1WNNExBfbWk8dGSE3fjqsEPAJ98DAgnBboBx7DnttkFRd5eTAUhimyhR3Ue",
  "key28": "3sYFJaFCUhHzS45CNqnDRwqMyEBCegXRYJie8vB4ouM2qvmejwehyJakTUHmzogHrVAGXgYPUWcyA6xwSvrpjWYL",
  "key29": "5HTjZjUTgMgWvJPfUkuGqaY78RETfYSREoGrPN2DpxJRZizxodMPirCLzQuKqvz7A1uxquH6SpgdsRVBLTpMymgT",
  "key30": "23eYR4uy3XcfY2ZnZi5TF9UZYMx8hSAn5N1Z4VW3WfSgPeM5fJjsJSqmM4T8f8PSG3TgQx5TdTQSYVRRpf7Qg1Y9",
  "key31": "2pLv5CtZPbwGBijNXSCXXq959eYayUwYGLdKVKrvUzRQEjEoen8k4DWZAWNw7AHGQ7Gz1obyL81dpKmW9HJeB9Z",
  "key32": "26HP6H1mhQgiyKxTmhRPM41MbZSR48AfzmQtpkqctUQRETHvFs2e6BNQDukpBiRgpYkYF2hPBzFhbnunnzzpCYzZ",
  "key33": "62K1YCjWdymAhKVvAFSHcMuoM3atLeLUx3bnYoukE1eYfgjyFW7Eg4rxjgeVpTkfwsaEXALFSCFq8inE4ssJJUNt",
  "key34": "5XqLAR2ZxC3zwnjssK5oKujwUC5FWn1x8eLrxARB2VrYoLjrfs9WXNHSzv1sfX3c2hpAn3xaxDYp6Bb6oW729XUx",
  "key35": "4ZixZx4DmM6b5vaSwzE9GDwTQaTj7qAbbVoAjpW3JWoe42gFiKfHCQExw4PdVyg9BaKWV7YYwxtzwcczekiVGHqB",
  "key36": "2tZfnvTtrU9rxy61dcPrpy4mDtUZBGQDYA71fRUbbz2bmprt9AaSx7ZYL8ZrPBzx8tHcRjUmYVquHn4UKj3w9woR",
  "key37": "56xdxyVRcavj2AaqYAp9YxtqKK7XvLVHiEmpkE8hQ4ZbPag21eECv6tbv97KVWKvBAuQLqVJr7UrUjPfnMeFuGcr",
  "key38": "4wj7gSQvV11h4xS6Mke1qdPcPo97rhJQ6xjRczjEeCaBXYG5HzePVY7ktjFMsVwsjz8RSwtpr6zwASJmneKfTmNx",
  "key39": "3wtrEdSr8tApMcz4TTh7Th9hoJYiRZLB7eEPUPBvqiQ3NoxKu6gpsHx4pqgcgHGjvnyP3E9WLP1o9MoXRbqP9Esd",
  "key40": "53qzAPBpEJWMRaYSKoSLUnS7MdPuTmGRKpJqJC2L3doTHPKzx1yTyrCUrJmGVXbLBJdNZSDq362PHY73JTe4YCQn",
  "key41": "soyKWpptiEpsZTtLwcdyq95EFjteNn7rYihqiadoi5dMpfUvEVS9xdsBSFxu9jSmnkZNpfSFqEzXthEwHdekbTe",
  "key42": "5ftNXffXh73tfSMRwTonLb8kumbucYt6BwB8gcMNQpprrckJqU1xtKuVk6YmDkDAcfLBVLQhBWLUTgxbeceBAeMM"
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
