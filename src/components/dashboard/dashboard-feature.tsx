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
    "5pqJLUTuKnPP1PQTjYpJ3kMb8sg2B6x9mSmbeJAcSrDmPzyD6bpxdztE1aji5baP7KghjDM3ogrfwBua8E5vfUN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNoXRMyrnAuUa5mszuYSVxsg6P1M5qSVxXkP9CwXR1svQS884ye8GnFAWAGhf6PRoMZNPo99xEVpkiHAbL8sf9k",
  "key1": "2TWXmNY5txhaZx3TpAgau9bXpYq6vYRQ6D3g8EME828tVhf2G57JU37KZHGMkLqsbFB8S8RaucdELHAiFmVB8CDV",
  "key2": "2fUw1XAAEojdQPwPMtvcxJh3GPP3KnZM8JszSk3BnK9XQzmXv5piC2Pa8swEpaWTWwaUA7tgLjnDm3EizNNQutYp",
  "key3": "5cJhUPnFiixmx2Pf2GdvNUeRkjgLJPsfcjjdgqgrCygPLEksgfZujHuAT1cY3Kb7a47ZQYKgD7bvcb4ZfUgh1jAG",
  "key4": "39KNkeMqY6EGMYk2ZEmUhn4fXVR4fdMfBtk4KjcPr76aEpWNRHzXbMzg8uECuuWPuzxXujowbCjBcW9o6MzmpKPG",
  "key5": "3CZpk2VBm1CrgXEvDyMPhgSYpEAWU6mP1Yu21Z9jARvyyuWRCTY57GZK9jtNfVzkhAMeASFqqdhksRjPVMCAzYBP",
  "key6": "5WAs3b4i2PfXdnwQ5DuyzkUMz5znEJSig6GYRZKY5hjP8gbx2mwLkDfdZmwPevnpvm1YtYma9cZagppDgRvLvGqr",
  "key7": "26JVCNrGb7mVfyAnquBF3YHnjq1BFrRX9zQBhaE2ZATaaAMrZK7nxxmUqi2zNwta9G2e9nHUdBDjmvq6JYRUVrjD",
  "key8": "4sgjXjAJyFzWZav1jxwCq1zqntWRHNpwtFkEUyaLG9KrBVuUBVMWhwaidmbmRk7NcTc7ncjkKtvFGQ1ySpUg2B9t",
  "key9": "5CgHdws45qopqQGKnboFSwfA8opdmyxV2b7tkkypR9kSAw4RZuXYbDuzTMjbHto5pXxXHCu76ZvGG1mPDix24YDu",
  "key10": "hZUdk9THbvRv16BdMZqcEU16Fxu1Uh36Us5X5uCNMSSjSEwsdAKnfFEccDfYbZE5SZmF6EAXmGFebtRYySNCwCk",
  "key11": "P4HhHBEF1p5Pj18ZeCUsB4HyGuUMpyBTLyKYHVPHFrpBfQCPm1NVLMJw9A7cwDWbofqwDqzRcoMitSytNvntXWA",
  "key12": "4obk7LKXKonMcxWuvigTy18XbHXBMqybtkXMpCX7J3oAicMzfb9KVbDXJGUgYCJJD76DbhBr9gXBUbYptSM2eBWn",
  "key13": "2RX1YaoQewSu1E171uv3iS1v85aXjF8qVRhtBXZteFNkKgW92DDtSJsGwmUKLt94nqEvMNhNyzP7VFUu6HRTZEFf",
  "key14": "6ZuENDb1nc7bNAXwTVTfpyUvPKu8LPhUrfE66SL3kGL1K2Q5U9fxrnvbcUSuSSmi3N17jz47TqagiGxu1SmYren",
  "key15": "4KpTVERHs6SWZ6PkRfQpQzbKe7njGByjAkoehuxUtV9nytfCWmtTBenkySgypYiARA5efzKR9sATU1gpdxp7PWos",
  "key16": "4dmhQCAdxQgNnQkSL2iydVx52SUCMgkNtfeJhWpEDwAJfYxaiFgbQp1Y8RtdZBMGJJGH7Bs5DPj4vc3kQsGt4JGx",
  "key17": "45DCtRRPwpWSc893ZkcJ6jDdX4Szdsej6dbwR8KnT4GSMdBeKAqxByDbgrHsLYWGdCFPtJL9UYPFy9stqb7RPcNc",
  "key18": "3aouMjo2pc3mrB1U5JdpKZcifjBknzKYJRdAPR6VWfiqKAC7CSMSPfJtBo756JPhmDyYgkdZ54hX5NN6HP2F9wK8",
  "key19": "5CDcAZvE4hmJet4jA8BHu6QzKbCj3VTcWmgc33fz2tEDCUPqDuEx5V3FzgUkgsus4EMEDi6xnj4UUs4LcB4omEef",
  "key20": "28YhZRfRU9Gvvru89ys97g1WokKNcCkCNS4fEzb3SAo4hN9tUtMjhhGkNS2dptGTYkqPoBcBFwgQ1AXnXFbHUoJ9",
  "key21": "2JS1dAKFHAPdP1nnGWfRnBBqUKGyeghFKE2aB1aSt1rBiYrZKR68F3gvny2j2t1EadZHVetZeN2wLKkW2PUBwB1t",
  "key22": "3qEKkGQenbY6NpEJjmsnLTYSeMXMokxsR2TckYb1o6GyqjsPWjdZbDea5pU3cwrRvCyLxyj92ZfqXaz3zmtYF3Kq",
  "key23": "5GDrLkXE9gxK3AybFXoaXx3hhCe9VurQC7Xvm8mXw7QyqyXrHsG34tP4Ur1by1uGLVQEni928zkEwqitMeLa1yDh",
  "key24": "c5DjSjcd35Lb6ttx41JZhGcJ6yJyqFHwq4pNkiyjS8Y3E9SCw9kncuKVsabVXMsrJuxnu8SU5jxoiFYNJB9qvju",
  "key25": "hL5QmfyGXmv1YtKr4PxdHKKekRMHPsgmxsWTJm9Y49rerKSdB3PB4z7LgmF6htLfjvvGwzGj7VtWFBBjnHLqttU",
  "key26": "4w4JTWjKFdNtYEjRXcrkkBnEgM3pBpLtQFjibXxGHdHyVzwt3UT5DMXsC4aiqh9GBbMrPEbDzBXubxMEnu4Wrd6x",
  "key27": "396AsCXWze2WVnKm4sJhWQWAq1gEt1Zi51DES33jkC7QPiYxQhz5tVCTrhtNscQphWRXLVE85vqD6MBgmrzyJJLf"
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
