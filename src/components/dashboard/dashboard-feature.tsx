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
    "2Vz1eZ1YaKEFdeXEsEH44EDvwqg5eZmD4rZYKb5qa4ZMFxqWxKG8MzL2Hsi7w6FpepQXiUHiwbqf9u8TN8m4HgZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33aeXKWw7jaUaywQ1Z54JQCuMk6NUiFuwZGM6GF3TyYZXqQ3L7JPUNCYEBccYmPn6YbU8GrKvfiiYq1kX1CKuUMT",
  "key1": "2DxaAeFUgk8PCvFEBN3hdkPT6rDYMtEQi8jectguijCibzS9E1j3vW3HhqrDQRaRba2RKAbE2Vmjj2vAvDXJm7sA",
  "key2": "67ndS5wp3UNJUR7X5XTmgVZJcRJ6k36eLjGXdDxoH1jJK1Zf2stjXAiHnPBJrBRJMShi3mESNabWzvAnKQuxdcan",
  "key3": "3npdKAiHwpkkMoyPDieudGPE1mgNvLnyXyYVdpSf7RctPZudkdHuFav3YMLufpKdikCyz11CvhdTerajBz2UUd2V",
  "key4": "4GM9S18h6xQshZFaAgWoBx3eEgXVavoH4pFz2wVGdqTVAmbBBuAEbRtZv4uZ5Rfn3hHN54wwzhhS2JCuRrLbEsDS",
  "key5": "343DQGbvKNzthyiQVpwrztAgKAxdUyjJhcBXfEYeZ9LaxM6ZXBpCQeKoji86VcetJjSdLcsCW46H2PDvBUZyD8Nk",
  "key6": "4DVND8MAVoKTNzBdKHiNRMkPYW4UNEaPQGa5qA8TdmrywAc7wnHZ6XHSGKA28Pw3sLbrjZ2S1osp2dLRUy9SvSPX",
  "key7": "2XHXjvQNnVdVSpyF8z2ZjjfqsrwrixQsfPbpusLccepFtiFJzGLJGp4zESL8xFT8qNa1jqYNf4Y6VWCUThpVKZbb",
  "key8": "2oGrbEVHHG38b1KEEz42suYs9QZ1EanmYhFChj5tdWh3mBPQgL6P9oJnAhCqw62S2QJ8mETrtBqR69pEy8yGbFef",
  "key9": "1aeq3wUxXEUmGpJoXVhfUxdh1UgpEWv8DTakLkcDabTULT4NLQ7rFo5WR4sRtSadGYdQcwfb83FRMZuh1Jf541L",
  "key10": "3uH1Pim8PixFRztGuDE4wnNURDxVpCY7VNviscBGBXJsfRuRra4CT13QRNyE37KMZutRd7BcUsMNUXZZRXUGSzyp",
  "key11": "2x88NuYQadfXf4crwkAHV16fC32v6phjFaH4Arv3Kpj2r1Xz4BFoJjvJG4cLNAsnAG2j4DfHDodhCJvh9X1sUMfo",
  "key12": "5Gxzj9xLLmeetEVtca3gxdd7ZH6AALoiB8cAnbdPMftNYCoMf8e32nzG4fEKBJwf75XkLEjbcMT7wMUX5FoPE9QQ",
  "key13": "2EDfYE3tVdQChQ587ZUhZQ8LE9TeNvopxfidN1h8dQWwNqQvkFeckXf7LJYe2959Meq4DHGKAHQ1SmU857nFmC2u",
  "key14": "4ie4T6qBiVMohuEYDRjR5NsXe5TCkbVHAJwRUVkceJf4g8XSsWJ39eGkALbvpcyoXsimB4f6t8pZhTmvPmsrC9jC",
  "key15": "4oCMWaSEsbpc9XecVkaKvcezTEqVhVpLtohEJDbnskSqsGoZVesHErmdNWuvL2KhmgF7jTiNbiCCHFkdHREL5stV",
  "key16": "48gqqrPe1kEwMyzbTzhCnLbXBBR16h6RG8KjQFuvbnU6xrgRhM9NarfgsFTBMXaEcSfJBzQqUu31HxackZ7hr6eN",
  "key17": "P2VW5znTwQPpnnzsaqujJsj9VheGBk61L4M6YQC2gWFFwK85rHtDGQdKNTgnjfBgiZPyFYBkVVmD8PcCfXympG5",
  "key18": "21r4Z9xbR7qhXeuwpLjHtBz32k4HZqRQqMy9rzwSUtkfdtce3x9D8uV1FK93ed2tvFHW48aHCBLpe5Y2fHCWDaAw",
  "key19": "4JAf4Xc2kqH4ksMCLP2gqgccyteUwihKY7oyUpCtnXUV8iudaVp2NrbgxQqu6kJsMZQTZGy6VWLKnfgBQyg2AXbG",
  "key20": "54D3tc3reG5LmxrQez4BPBMsa65d51Kqh7HnGNnzRxYvXcNjh6Z5ZXkdgPTATTNZLCLpM3zbBbaWar2x8oMKcqGt",
  "key21": "2DVDtjW24MWQGqtbFuWmK9yarxugSQ3GNqP4CTq1Hhg66fNGsysCtD2SuDDuUqZmtn4hX7WKnoTs7j4eRvBeH9yD",
  "key22": "5X5gDpFM6htnEyukJMehfVL5XJh5WE7qr6LGEcCytLuY4vDnLvvURuT3jEgHtjEZo7oszrZnbfwn8jVbivcab7vG",
  "key23": "3J81cZbTXbamh1Mo36nsprmSchcwQafFtBLD8jZdtz5WvHKDR8wJSWYpc7ewty1gUjQxqwUJ668UPu4rDQUJRBfr",
  "key24": "3W8mx2L4qkmY94pRtmBi1ra6G3wspBk5JMC26SQLhPkVgkgNUokqJnztipZ9gq5GcWSFTaUqNCPePHn68GWLDvKV",
  "key25": "4Y4Yh4R7fHRmoScamskH2k9bvtH75X9K41oTo4Xz2ZAEd9tfdFUaLwRBBpW4pFpEVFPxEbV4VxjLdMcHwDLpYwnP",
  "key26": "3CYCBwhjpECXWDBsfq66Que69oALswBNTQ3xTEKaYKJzfTLFVmwWp3gb8nRJ5Hc3BEGtk9UeoGj8Ni4nGPqMheoh",
  "key27": "3n593HeLrcvnt5CpFHRoWrni62LoDy3CSZgMhHtSpwPGdyGT56EbnbvWz5Jh3k5gUrezvgyy1iWfA3oi2365eWW",
  "key28": "DuSxGQdp5eSb3fCjk1SqYyJxu9Z8yv9Xo45o6o2xqZjKfTPMf6wxziRjuw1oeu4ncUMSVeQejAUhgqZLu7aT3aC",
  "key29": "2ZHEkDCSxrh6HWu57zRKHjRQAXzX9C8SyjMvEXpQMuC9vntrZDfYCHzrmiJVHMxJcUVZQ7Bm5gZGciZQLvLBnGg3",
  "key30": "35XxPaVUBxuFNfvjBwn4uHERL5SSPkjYPkEMjCzNNyCQhNHA4rpw3VZCH914NDuwrcuwMSCopKDdm6TUH2687mF9",
  "key31": "5xs3c1vJyEHbMpV61Dkadxy5VoJ8RbUb6WP3TnojEKCbkRB8gLE3HKoeaqH7X3Eqs2TYmW9Gw8fck1fZmNZK59fQ",
  "key32": "34CaZaRWxHRYeGbWix54mEign4jUWUZ6PJG2X7jhCDk5BygLsjWavCRBbN3zxZgUy4m8q4HvvdwBWVK4zDc9sowH",
  "key33": "2rgnTNDeKWgwte3m7H3Gc5G7CYoT9agpDVJvf75LHRMhKpqZ3fgW6wnjmZDNtKmp4LGERbNvuKiNfoMSJiqnRG3R",
  "key34": "3jTC1a5UpA6sEqUTjRYmweZ8RJyrm8pEHtzZrskMTtjBCvy6PKoWthgCzZav3rky5iASTD9882XDjpHNhHEDcuEw",
  "key35": "hF82MDwUtXDahxEiBYFd6YzbBUFp5zLjmBgZMP2NNTyro4K5UE9i4YKT8TdxeW53Yuj3UeK6xaqbCp6MUa1BA3N",
  "key36": "3stXFXSK2axYtj3qinJaUv5ytStWFoPhwhm4nE7VXYLSLNf5h5bJBwe4Br8Qo25NXuavVtkfoMsQny6ndf2ZGGtE",
  "key37": "5mkA6wY1Gwf7ZotuTZLRKd1uBqPrUeCZ3wid2TL2cjidvMLcDzmHoC2D36asYRpxvJytDteEsbb7nTT4VizmP5n9",
  "key38": "5x2YXha6KzwbReUQfLR3cPoAikmEwiEMeicP982LEdDDEXJ4ANnDB1SmuTtMxLhySDzfdsqir9VH63CsdZqCRFhW",
  "key39": "5byZAXooT32qgJDXW5qDpHGyhXaw4UDeE7QPqShZJkTFDJ1bS5aALvfF4J3n3N57E3LjcfHtWHuJsSwvDxExbX9j",
  "key40": "59CfX4cFrLrd1sDTPyvXyQsR4rZLacJoEe1NEPd3o2WtNZbXiKrWMLUUQeXgWH7GHiH6HTtFy6aU55vGjrg2L446",
  "key41": "24VK1FigUPv3gVV8HFvybhvXM2cRJMJhBqLThYu7SyAD7W7R3qtpjdYszooeGafrdh3Xgzu2iMUFhK7JwZbnnofD"
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
