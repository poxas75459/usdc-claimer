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
    "5QcGPAZpG63eBAe78szmxJkGAQNjRq6r4VYF99LgzskqCU7UP6jVvVntgS4d6EFLkHd9dkVq425KHSoEGubARwND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zfYPSQewzhVTLxAwAqBv2e3YHSrAqQhVnpRtrUwuamjvb8HXpjDPbvdNFFdvhJUJeRuFMyM4SKRnBQFe2UDF4sz",
  "key1": "4LHAbNkVVKjGsopdkcM7d1feq7fptccsn1LwxaNsBsSHbXYWkS38KbSxbVUACfUQKqZYQZdwzC7sgE6cZi9cLuDi",
  "key2": "5fypLh65hmYjRJFDDm3WG6yXUZq12nzcergAqFJLfadxdrJ4JycyYzU41QVT9ifMFg3ngzQ2KfRkLxUQKzsZsskw",
  "key3": "5ww1e3aWgwUBkbkNiVxunkFedYcunoBdpYsiUKYLoStwTWdhckPN7txUMuz6CUmryD8DU81vfvQNMPLkF4mMuceT",
  "key4": "2b3NMy8T3qnZ3qrZxyJUce6PfVkmHvB7SfuYa6pc98SJPbYY4qeC1d1LQuVM59PqBz8TP2WgMpprmYUorCkfazrd",
  "key5": "37Gj6hidNSwMatAGYV9Ns5FsRXq95m7z8Z2ngKG12qqRaUbLNf2YxaewQoXmGtPsVRMQgjggNjR7y1uvXvcTYwJn",
  "key6": "43v17wDBkPReRmVvFgBAH3cDU3NxSRTgHwcf8objM5SYNbyhh46825MwnGhywLxCWmebU7BnUhgt6rJt3kz1r2o3",
  "key7": "5z3a7ZotAiXd6yYs8X3uvrXhNtEBekLmUbcLHygkFax6FLeRMRYGvTaWBWd7SvZyL3ZqzLrbUCPCXbdSUzPFfo4m",
  "key8": "4421ZHoHjYjqabYTC2XAiJPxhGSaMsNDo9uWX5bQSY17cvW8g6Xfg5Z3WkZAVYKVyKs2cUmGoSpWyc36Kku6RwiU",
  "key9": "4WVKx29dzxKPE8bVWMUKftYrmherEqgDhYiMT1toYGj3bYRw9H8DtLgWLEc76TRP6PNibBMejzAhsTAjtH6yJwTi",
  "key10": "5UYj9jNRF9n8tzC5moh5ErouF6CMFbDGFGz5w8n9ubVRWzgsxdZXQwMM8BmmuxxRUUxS5Sc8PZEG5rzopNsqp4Af",
  "key11": "EXkDSC6FouJ4vnGMnfAsBSj1pAJ9RKFskqCGetjVtKrGnc2kZmxAGcHHhdepDHG1TnkUdEahjkrr8pw9R6kMmJc",
  "key12": "p4BvpHhDPkMxBDiZbpGTijuYa43QGhdDu9r1eDer3Tj6hESwexBv6nqrPhBssDqpeXDLKXvJ7m3zc46WMd33szn",
  "key13": "3AEWEnHufQevvT9K6k6vPfUfpDcQMCW3jn7hzsh8Tz7cCezuMcAm1VHpa11sSMwNwJAi2AGCvj8KrkQwycjAqMU3",
  "key14": "625pm9xkyRnFvYe8meaEcyyTanNdwBB1GtPTZaWLdFph6BRsJLGxyRbLWvj7yoc16fk8Sy5DpoZL3MSnrAxpAbCr",
  "key15": "QWiGXxqe6qEPNA9ivrHSJq2oxi3SYgEvbPHfbbD4KJtkvesom5Gk4exBwPcrwaD7kXRH3Z6JqgBAroW4ZdgzYSY",
  "key16": "3vn4rxKJasGTCTjTxEu8XPkseEfiAH9yXjEYVEavTSmffiq1uz9yNBCKQh15QSaa4uBRdPcoyvCgjQ1HF19CdECQ",
  "key17": "4XF5znTq2Qf2dGpgVQk64ps4WocFk1RRNrX2fqQ32QDyPLoBfs4NBfTLaxTczbcVcNZQtU8a7kKD2dUYH1JMgBa9",
  "key18": "4FhEdrX4LEL23ZTvzArWmpGMrgemcSBTbgtqaxf9F9g3mKcKfS7aAESGkdDB6xVLNqM6VauNAjGDcbsiL92w5oMJ",
  "key19": "2K9X5DcdFN4XBoJroujS2pDKy7tM5kBLFk4NZhZxZ656EupNz44CHLBKW3mCdhx646PJZjYusTHSNUKjS6jm9ebG",
  "key20": "5P5XpVBe4PDsiQSytiLk3QjRv22VzHi9wmfB8Kc77ffu9Hy1uS61V9Y8d9XBfKvaBE7zCTLV396T9bovJzV7qScf",
  "key21": "5Ui6cL45e8JzuKhL7H7MnkVviBNJSKJSGFw7DK7Kr3MxEU9j7WnW81NJudE8eUkD2rhYaAgj4jJGcpuLwXuCB8Ri",
  "key22": "TBXxboVkqwA3GdT6387y8j6oTgLaDNQCDqf7MgnoNmFf66RsDoGAFoWqj9m1mY9QksWM7R5pFBzLvUHtSqtkvE4",
  "key23": "BNR7HeAkJF65ta1We9EC22KGZ3VGzY6QscbxfhVs6TJeyko3kXtwwiCV6SkGjPHGG98AkCvmJCWzdj5wTFUf1v5",
  "key24": "43xSM27WALTegyuaVxpL2TPyD6Pi8SPjzx4gRFxqNGYcDz7iLnRyHjWvC4RKLDXGyNEnb3mkBr8rbsxmZUs3khEs",
  "key25": "JakjqMbEinrrcuXzxTmBS6AD3ea8vbXUEHkvNWqw2VMWqdx1hVgtavjWvR9DEVgnfDfCndUrFamNpn483VnE3U6",
  "key26": "2ihWZFCQ84hV9qEGH3c9zNq64SAv43E6pYcSMajtZUcVmNWz8aD5QepTBHVYhYyAbZASvoTsvkBR3DcvKG7EwfPu",
  "key27": "3Wi2HBKEtkfdsawzN5euMs1Nu4abbCNdhvdArtBqHRqWX6jMFPsHtt6xufo3w6r3319HvRFnSR1XrXAo2DGvYy3K"
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
