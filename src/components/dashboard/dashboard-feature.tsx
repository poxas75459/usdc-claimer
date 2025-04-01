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
    "25kw9b17nno2bcDykoXAfDcAZuCQ2panT6uSzRj6oUWekLBqSF27pEnQp7AMMBthxdm4xoL1Usex8AH87bDqDMit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hccMwHzbqEZNRm6ah1vDkMTk2XMCo3kHNgKjFr4AT2JAchCDKc7peiihXQfmERPZ3H1F4wS2PhaFMMaqEegtWCw",
  "key1": "452baMYZm7Rbckk5ZPcjo8cBWNGuuinb1YDV5Q8huy4T4udsKUixE8CtHtJy6xLGEbszU1RQXuX1dJmfbMj4hMx9",
  "key2": "2xRKeJpgsNTkHqj3AN7pDPyZgazeeaoPJrvh9nTXqvJBo3Gr5SEzkk7yBDv2HxkpL1NW7mFsQbJizaYy9tm9cwdo",
  "key3": "5jd6K8K3nNENBzaWmycGR7zQbHrXeVtVhnQbtvhMp2ANdEC4eHFfisqpdjnugirKUfkrctv9hCNRs4cJJrz4TDFS",
  "key4": "3Wo7orEgzgTYWnaBSDEmjDBwrUZuxMMQKMAbUv67sw6DAgVPSUYm7ZrvYyEhubxxE6Y9XdpxPfMsdYtQ2dUG8ab9",
  "key5": "2qgPPEspESdkXEE4qhuejmLFSZCzff1MMbABsCt4APx5xyHnbE6k93VNacxX4MpgHwUf6dFJCCxLKzGnb1SLvt4S",
  "key6": "tLF3wdw9QhMkk6nNvdD6DyAYftGJh9EC58goBN8agV4QLgzb1Mg6fkNBnuNJThZVPqcMXUPQ8sv1ybx4xxNYt8f",
  "key7": "5GD8WSAFEVticqKFSJzDodEdvb7eDVxHZFVzM1CgCrzVZDeMDLcaHzbxodnGGU4mwtwhnab4fv3sC8zhCieHk44s",
  "key8": "ZogDqKMZaDpiWiQ8WkswqnseetfHgFKpUgi7JohUbfjLCtt95k4fRPfrCBBhsMSmUzRWq5xnLpbGgjxxwfnQckh",
  "key9": "3hTWBhwW551ZCjx3u9Eg3esDzFU9fYrCdRQbpTrQZiFx8wfK2BdmsFcP3LYL2nGVmWWrGU649xjcSx94rwqT7Vmz",
  "key10": "5iFNXWGqZeCMrDHw7RZEowN2PrhjnWeca8sGGzmMW4jGs3K4dBGHhcBLnTCYjvkt4LzTm5h1L12wi8hGzHRGkSK8",
  "key11": "3F3gMfB7xiyeiM4dfvHsZpv1XS9JcHswGyve1d2GyvjApfWzpD7pZ3R1d6F1HuMnGquvsa6z1iN1PnZRnQgwyfwM",
  "key12": "ieGFyiGUyEVMbDtS8dgyvRNJKKqwK4oYzYLc3iwAarGTmgkRA4ji1mEQSXPALdKu57d2sUV3R2EtatcF4fDZgZy",
  "key13": "3EhBgyfy3r4qngCFCyZaG3etbqo7Ek3Ges8Po27fLBZE2wE51FLmoKWUheQahYH5H7kQXcrEyUUBa441wxNbH8QT",
  "key14": "2h6omSFMjwBrvqNg3cRWZxK5DdXVoRht8NZmJ9UrCax9z7wfpHFmwndU6AYyKJ6cyu1EzqU9VRrTpHzCkJ45owiP",
  "key15": "4gLcrAnamPbhvn9z6fgLimBSAtmtig74VGAnfGZU6QAZvZ21JUV7ri8v5W8ky7oPHbvezLPeVeimxhh7T5vCjNeq",
  "key16": "24eEFZo4kJ4wf222cKLCiPcykNt2Ue5pi1SzQh19eA6Bo4x4pfAGHdkBZvWsdD6CKzEchNaJaDhLTTSvYDK9iUw7",
  "key17": "2usSFG6cE6UsRi6PULUxEa7nq7kyEtMo4tJdVLF4558TjcyycMijkNyS4grgGUM4RjPJzN27V3RE4JZzLWnMgbAg",
  "key18": "5aB1d5oTWPHK6CyjkBsaTtzgtMucRt1jaVzVuAdA4Yy6Gmxnb5kYJMcoA7AnpFrmin15BG55k3fSYzR4G7Smwy1n",
  "key19": "3dujiQAbLiLe3msCgEkW68tF9M9kLDoRwvfHNEDkneTvU6ujzKbRGTwRnsp9ar11bskXLwb8ob8j1HrLpuzB8hWq",
  "key20": "4sJpym61Wc85LLw4WkHvyFH7v2rcwKWDw7qys5saSyr5bChpWQDdnGJJ3vGoYD8QV7A8T5az3eTnaqTzAAtVyftp",
  "key21": "4UkTne58kuhuL68KTFA2rMZ3XLmVHLpdZR2jFV8gBGysKmqhxp9Q8LabCcRt5jcouTDaxvsTYvSz8xtqahwnK1RG",
  "key22": "FdWSxoKeJEUZ73rrqPLZdfkpkYkdUManVrYejrM7xQ6oLLYXMR9RF1EorhM3VYxcQbvwd9KsASHwJ7VeT4xrr9b",
  "key23": "2jiVZgGhxYHMMd2aeUyttMWe4nrNPsVaK5SX5mvis1EeogdpHR7nct9k2uucyE9yfcEkCknS5xfmHYaFem9Qwbf3",
  "key24": "yJNos7yzycoXT5kBLP1K5JwsBujvE5Y3HcffZgxhx16uo6zuBavUUHZoQPcG1x8RYJ1RthorDysPmxh4Ve6jke3",
  "key25": "6ESm9GubngyA4bqkvA5PPkHgKrZdg6Qvx98UWktJBMCBw5baSJu9DAW8BM4ZTfsiYeK6xeL2toxEnFUw6HHWmMP"
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
