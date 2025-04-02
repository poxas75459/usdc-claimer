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
    "vHUi6oYKSrFAtzXSfFC2M92Zo3XVLATMWgFcysZFSxCwj7RXNbe4vPfFsexASD7qMpJmJDthGKqVt6Dh1PMCjPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQuE9BUgpDK9xYG8SA1ZrDJTqTX4WUAPNhP8zE96eyuimTDtN6yEpCRP7ytvmQSidnhPthQPDda2WaSX1zmMxr3",
  "key1": "5CeYJmeW57g6EwcrB7HktXqab2Swpet5eDpTUjf1kwKSuc8zX7druSa3i6M4JHyQeW6B51Nzep9WoFCYSswK5Rs1",
  "key2": "3DkTwgtCHJ7A7f4MKBFHjSTSWzQhV6mtmz9GG2qxDKS9zL1DFo2bHAZE3VdPFhT3CiVMBQKhs8oWXWehReJs7rTW",
  "key3": "66nJ7CRcfLzdEeeq92U2d8z8DwZqgHgqgb1ZkTGTbrJVV9S5cxiv3MLJHFFbeMkgRoaj3NzXuXVts1AFkqQN96N",
  "key4": "35zD5fcK1pewHNohh9pj57HvTzeUaaKYk9SnnZ5aktgq28m6XecARbUwsrzTUD2No8vitKP1rzYA4wAXSncXHZ28",
  "key5": "5yDwbiS1RCX1cRhsCrkB5xTttZGX8FYm5wKDj5C9bWNe6M8STz9dRcw1Yc2uQTLtSeqj1NHTxjCoaACTmfQFoJuF",
  "key6": "2yfJJaZNkqQ9Bg5X5pqhYjYLjFVTUMNe39fVnwsFnD9RCPVtFJytGH6VJZMSKrAXbUasLaa5S5GVFTjh58HpHSAm",
  "key7": "3ajXEMchXzESmn4gz2w8rCFanjZNB5E9Dt2jCcrzdDgYtAXhSnXmRhA54fZ1xyDZERdVwReZXXqLfEU73tRffrpV",
  "key8": "5APZ6uWiSHiUrw5oAVeHMrQ48GgQXACURyK6KAs6g4Mvf8jJiTEkvp41KD9q1et6gA6dVC6MVQVJ1hed22wysQhn",
  "key9": "4xiGHrUUvFAPtfKakx9tbfEzdPPByoCScVMtK9reV8y7GmjRxJCzZx5gSSNSjC93qXHaFNc7utrtjzNi4UpGAmtT",
  "key10": "uQunpQ1c3u3cHbaQH9LWP7imuzWhLV6CySk9S691iMRfTuiJjnhFf7ch1mrPSgSgfoVQFwh8WhuizmNDzoRiTjD",
  "key11": "5qpq75qTguTNgB6cDhxo2spJno8UFunLN3zS2Msy7QaDB9wJavsZpHCBCX5uByifGAZeWTVPrDrHSztr3cHSdPMw",
  "key12": "2U3DdFZ35uYCULpPWv7JgF1i9rGoFMGkyThxxLRqQhZVtZeaopjLbFYoftavYS5Ka93Zjin8H53WdG5eapfBDoti",
  "key13": "5zQftLye2KUXhf7HggPWpgmZpwhLYiCyS1bT3kpCS6c8bCueZHbZdDVFwZZwfxcWVSh96LhdmeZrgCoAehJKgJiM",
  "key14": "RtdP7HACvGSmTG8s4yyFVGLi3iMeb2xadhpJpXMpfjFWNMqRfnar9rYA29fkTJZfXEzjb31QTkWuQaonBE7yLz8",
  "key15": "3nBcqEXm7hLa8HBJ28PPHmVQuLWmdi7K8FBaNwgk7NpLh4LXZxEUViSD3n2TXBYvuHjjkwdJngLonTYvnVwdVosG",
  "key16": "127VHQJ3b9AcRox7Na4a44xkf62mJYbZWNcPEFuqoxU1UbXYWUQ2a93ZaMQFwqSczitT4ooqq9L6P3NKzoc15Saz",
  "key17": "62uMdEJ4uhAUDWv9T3YnYnrXi17wUXvV4hC5yCAYxZwrbYajVdv1bZWtr5EL2vQasrxaQrSfXJ4N6DyTxKFHRXvW",
  "key18": "24rna6atV2gs7ZjzQ2sjWGFAMcQkYTQB3f999aYDBzDBEasL31xriq5gpNbYChgMFPaBLP6qWC4X4yznyLGo8QgA",
  "key19": "5i1ZqvioSYzBj3tNts5xptWrmA1J2HnCm4aLRwL54m91438SZZNdsfK7AvMMVzuhYxn7ysCMQxdVWboc2sCQgPmX",
  "key20": "5uzhcg8GqGhpza2BRcKRQDk4wWZTyJuPVrxYnLzwnuMasPQyCRfjgVg8Ucem1nojqG9kbGYfeXwXwdtzf9o5QGsE",
  "key21": "2FZuKCtuSMVVHxTDR5mn1pjBF88uuZzGEu5GYBdAuQm5f9MBq7kcoAXSJH86RpSq14voagvZAj41WrZsCXuJASvc",
  "key22": "57qgUF4QKh84g4SrR3YLwx3vWa2MNLuBhaPJJff5q3pe3ZWPTsArZn7vjinFQnQnn8rSzFF387Ao4deFuRDgkpAs",
  "key23": "HaKau84twGGTefXN9wfpxLahtio3NZewzVrbDjdsz825BhzKfsd3Ka93dWwoWVs4RJg8qnxhNSVbhSviYZm3Naf",
  "key24": "5Bbu2NMfddZ987fquoCsCpC78twMVC3djGQzMkxGJGjvBnsqG4xtdHT1sYzz7TrDR8S6XiHVUYcW9fZrZdoKtnyF",
  "key25": "47HoE2BG48djrsrnBLEzvHurLfS2DEf9s9fApexFcMqrFXDAtKVguox59XgF3kNMNymkUtq2Xh5euFTerX3DFfmw",
  "key26": "pjx7y2xfWQzzT74KTg82Zzkzw89K3ubq2kvWtAUVYb4hJ85PaC2YyQHUYE8dVz3WC5sSUUSkb1bkuMi7p8CFEhW",
  "key27": "5TY6RdXtzTKAdfaT8eEyBjR2hWqHuc1bSjAcXUS4tnhEBGnGmqk9wfdFqgjrSYqCgwfb3PVzwAcg4DixSPndtH8Z",
  "key28": "2XY99YXuft5RP5nPWs5UZzUVniGLBD6fvnp28rMhv687u49Rsnig7AYzZ25BNqSjuRMTJUt3KaTgnC9AmKE9MSs4"
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
