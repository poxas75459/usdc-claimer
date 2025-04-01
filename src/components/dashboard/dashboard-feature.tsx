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
    "3ZpiwttqtHNxyJq7ooBrWi2cvU7SDF3gJ74K9rKG3wgTT99nwBhZiUcQicob7sbweJda7fDPazKfaKKqVB3g27BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BLdbRBNtREE3Az8s4p4hyXrCwhbSVYJyCzL4r1ZPiChw6mjDTpkPx7mvU4Gx6QvvBEGuF876HjvBGHt7tszbE5",
  "key1": "jkGQakf6xss5Y5gGNSkLYQm8wJWRe7nA2MV8GNjEVxY5qT7HAiq7SHQp4dc9oBZ1EBPDzWu8mu7y2wFiFkK9Dzz",
  "key2": "4zPkwrba5ayeeK8BPQodAv5RyepMkLHctbBU7hKoWM9mg7sft39MrduadrYd761TUtcXsXsb4rU4Bw5WMGSnB7BP",
  "key3": "54C9fKAg1TrhA56KWW6bXpVPz4UFbNYrD9tr6TSWEEcqasy3mqZpHiQ2MPjWTN8bC47uRB5hSRQg7qeFBMcJtfZ8",
  "key4": "5nrVicvgub6iPKiGFq8aAtcE1s8t8Z9avzNJ959upGFuTRJMWnyfcfadANryi6sSEebvuq8UxjYPRqPnouHEuAsV",
  "key5": "4XosbwEXwSS43UYuBjxXETvcknDyFB1ZCJLSTHJTgPJtjGDzoThXq3VFbAMyesBQExBtajqsAcgQTDyJCpfyG54K",
  "key6": "56k1B4MKzoZNYZxbAePWJKdHs3zv22BzEoFzLPFrjKhpUW8UJvDRM1ToML3JuRL7v2VkwFBEcPezkHkXNcr4kvfJ",
  "key7": "5PoDZ13oLqhkVxWxrxN2fMTPLsj5MnQHrEV7cpi5CNDsgjAxkp81cpvwN1TY4KegyaSa5tW8hvgpVDKri7cpw2fk",
  "key8": "32vnTbanua1GhzAcY1j5jzhYFcmLU3uNve8ninA9nv7LFk8JP9qjvEuV6fEwiEKC7sQwKH9QezGFY6Um3ZBVnEZE",
  "key9": "eE7yVLkCRkR9nFKDwR7nby6t3BEjnrwXvpW22yNGZF7YTRAGHgjrt3517KrhT8aTadp7X3aQp6DxQ2F2NPoFgW3",
  "key10": "Eb1DuL3mwUAKffXQHpJF8DhJ1WJtpZws8xmXfnTQxRjCW2gUGkh5en4mE9mN6DHcwVD1DZNijgJJ9vNYdWBXnFe",
  "key11": "VMmdxq7b51ttwxNT9qNkWcMGt2JFtL4hX1RFhahTenQav39sKSr4tfWcvan9S6UaN8QFQuEQLrMHwYh5C9iz5gZ",
  "key12": "eAz1xxRFpJAMhW3gxyGhBJRtwVKXM7nP8MufJAtcnAjaYV9GrQ5yyq7zGrMGh4zh6DivynFvzpvEPtYkVd1LhC3",
  "key13": "4c1ErtXXikkCf3qtYEa5sNVbTimh1L8pXxvHhSPKGp1v63Bzwe3xXNbx1kkkCFUX3qrzLwTmuKCusgiviyw4RaTE",
  "key14": "re8LJMvXF6Ua3SFNGLYjcayyAhL4EYDGVj46sWnK2H1dSbyPxe3d7eWfjVoWJ3AcHqBjxP3uezxMvNRmUUCFU7b",
  "key15": "4X7WDtfRzmVZmWgVw6xxiYtz9jXeLrhJpN1SBW8eY4H1ghS3YkkX6SGuKwZq7r3UEAjJip3xHG6EhBDnQqVUZN2e",
  "key16": "4JvvtKXTWzjKprGnfo9jh2eG69dwso7Xv2jSS9gcEEGVyVfmcFqwBgcA2wh6N21cjdE3wrptsvDC87KSRETa3BeQ",
  "key17": "441c59BRRv5mAkNnEugNyEz3TkeEqdrdqiX5kfS1qL78Ndwu2EJhB8PUtZx5CtHycyugqQHMoVcrQUT8M1BuUt2p",
  "key18": "n2MXZqpsUFyZ4NhyfmQzWGseXJNAd6kx7pWX7hAUWzNt1SL2eZ59Cixt8wvnXPB8kZyAeMsnZESfLrc44BE29bS",
  "key19": "5XSvVZTwyUsJuxPSvdjgy1SCkM6QMLD4wg6ViuGAWK3JoW77ramdJ5Kct1jNKrHqT8aPN65BXk63AU6HdXnucRPF",
  "key20": "4HrfaRtneFRrN8DRFKcTXdZaqYLHjvGamBBxWnWvLVCwkncJSf23kMLDkhgY7GoLHJJVvKjHbDNN9cGGL9ySFTer",
  "key21": "4ZxS7ebXhkAEtxS51fkWpSpqDXD9UazcMJEk93cQrim2NwZ4eVfNXPd4ztgvcJM5PDatk8irF1L2wCa4QuomK1Ce",
  "key22": "2poYoBLxt3ZyUkAttEGWc8Z2S8PjLKUJPuaQJNQXzxk3PgibNX92ucNBZCMua7WyV21s2YgE1Q21hYcQVFZ5baoo",
  "key23": "ujWP8LCGhwk1Cy7B7Pkwkg9KDGxsokzUoLsF9hBQPuQ42beykc5MAsfKmaoNTKLeJCmHYJk4sikJgPVkdvBSacG",
  "key24": "NQbESokYENQPShkqddBqyznugrMuA6VwvBHJDa28w9vEuAq74ZF5LbgkNwfaCD2xZQgKEUaSnReozeHc8DmX146",
  "key25": "5jvd6NHT7dNyfdyGMQFS1QTWjNWCsWLdEc8vajL2tk53fSXg5t8eYScNiuTRXLotGybL7jnbq3QsYayM5eTRmaXH",
  "key26": "2s9uQn9c5fLgVhf96WPvbn7vhfv1MKPNJjL4qgCYkQgRop8fZBpDVks4hQZHigzAzavQbGZQny36oUt2fqSDekRb",
  "key27": "5bZQQa2VLunJRpfdaci7Wsf4SjLGrnvvfamj5HS7ActMSgAZp1RJQspxuYX57472oMzj7yaDwqgXYpAqW5zYFtj7",
  "key28": "5BzaEtDF3wM6E29ZBDBmnYErFGPFtfWH63fQwxfveJhj9pd6ESAvGNkrza7JfyhYRnzU6qnKvBECGf2B8y5Vpyyn",
  "key29": "YjAE4jjGbZ43tALjf1gZxjXXLDaDuYQ5MScDVQ8jUZRjZkkrgTuiDN9ajtbtxBiktKLq8MfNUZf6y6mMikXes9f",
  "key30": "3EejqA2HhDmRD4y5tD26pqxXw5nMVsb8MLdse9DowQQ6wYuMiaeeEqphk5cvT8oAcvJovGtvrxR4Z6EgdDqtkkk",
  "key31": "29wn8XKsYVG97H9vW9RVK6EGpvyKfmzoVGgy8z2dHYwfqwP7hjeen3UreaKdJS3MvsEi3tuF9iLGLSU3yHoKYbiW",
  "key32": "5Wdmt1PxzmFNgoZMih2zYsK2DTP7sKTCjXfAM7SWux7g1vvDuMqtBTdjLY87EWKpQgpm54m3Sr99RSPHCpwo61on",
  "key33": "59fXKibvoPPyYAo6UJtqzU9jByKnoabMdUmKajT7x2oFui7BVptKPpeqyd2DcmG993ykVWa3FWscJQ5stm2FkRPh"
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
