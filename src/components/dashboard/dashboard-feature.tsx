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
    "3aehc2bWXow8bgsHj3LQRr2qhJZeYjuMxErU2qu8hxsfTTC1HngUW8kr23FmWMAt2iTEKHus41sc5QQxaNARdEmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWGzYGLzgQYfW6a4Ub3CicitwTde24fgDsE9SMe8bmwmcfsghg6gaTLgdwaKfNbCKy75wgVeVAokkE9cJHXFVR7",
  "key1": "5PbpzGg6Gut7w4zpzsykQmwdU1unVZMvWRNerXGwGX9b3z6aKBcbMpnmV13FACYpbGEYeChW7D5zugBdXxcCfwFw",
  "key2": "G2NYNLa7VyYBWPijAx52q93coFsEnEyqJd8sR7jFHunU7ndJdM2mGhSHh32BrkpCodh4nYdtudXLWVBC9m9vbQU",
  "key3": "4cSwSYFwdHEpXx5NGikoc9h6hyYyZr22DaNr2d9NB9a5nMrecAGuVwA77jAe6oMaWRz733wzxk9vkoMr3zprqrj4",
  "key4": "4G4aMzoAWZEipWkqukJu9jtjZxDeYkBiCbC6DDhj7GB7wfKGSeHjAps8ymsx84eeyykyCaHcJvZUjJLANuFMcC2t",
  "key5": "2BD5U5kry8EFJrnPtXbMSNn8wn53Q1jw8K5TGsCpQ4SCDY8Vyn9v1wJouEVqgeD2YE7NtqNSJJkmEmuHD8aT3454",
  "key6": "2iCUxuR8czFKQ3QeHrJC2YruQ3VaCxMjGuHiQynVrrLwF3j5g4xXmfoThgT13yMCCSMunjpkaT34RhZpN9XoS6no",
  "key7": "5XXNz7ygA2FDU293XeMkf5AAWwSdXPpPXctkjvobTheBoatp3vPKUGef1mRy6XmnqoSgyCxd6J4921g2EN2NT1uS",
  "key8": "3nquFdnbY7HwpcThtmUy567fHWWBChzzgEzrSdpJnYCgJiRdjNCBzJZymNSR21RLj2rzgpq6iet7EFZGjGh625Vz",
  "key9": "v2FURnZZE6fvdcvavRF5HP3PkrHKVjoLXqANqvEbMcJkUY7nwkkkZP1qM8z1KyHTKHryhRj8gz8pueoJppqxfLA",
  "key10": "3VfpjUdkVA4NH2ix5WoMWmkt5mdJ1vtHLuoaJ5t4RLjkuVid7KewcjV1RxtPZEYM3cryEA97LC7dM5tfyYfQTKQv",
  "key11": "2psEDKvF9tpZduSoHDaBjHLvh27TekWYPcnt3jXTqgqXx89PxQev6pjowjrs7GPNie1mmgHFTw3j8iTtsxdi8RsR",
  "key12": "4xYUXwiE3rRBPkeFccTNAJrZaPDn4RSVY9Fz9rgboHjvRPZZGi2EKeyXpN1pSWhiyj3wdFYqpejFmM3vQcmWp3Hj",
  "key13": "3W56LwN8HbcufTxzgSx6BDbeXUMKQrdrcLhRrY6omjEiHXqXjeGpuMVr8uT1Ygf52Bx4oUUJc8MKWew2mky8LWxS",
  "key14": "4V6VHaG158d3g4AKznuv8Ks7YjNHv4V3Z1j6VaeCzqvADk2FQeVk5cea13gWGb3YZASVK1XrEHjgRtLHa3CN9mNi",
  "key15": "3ghpDHvdF1eovK7nHbS6kbReCPdKynUMdtuBx38xE1YwWWVCihfNFj8gWzzMY13D5DCFbMXoG9w2P6pM2zNJEonA",
  "key16": "2iuQBh4Yco6TbQwk8KBYu872E3SGYvRjm7X21ENhAXyrjpZZHU4rYhmwuV4DrsksD6nY5mnNYPgNXSao7UUTdJ8b",
  "key17": "3cuWtgRUYufTMdWxWXCMSKDMGGnKNDF5mbeMFTmq8pYykMoCFu3h9PudquQg3TkNWPBbb915fJF8EW8YsRxwcEqB",
  "key18": "4vsP6esKvA9bTCEPvFVpoEFywJAvCF75KRUiMndMfmUCtiPbkXFuWDQmoXUhAfq35FAYdKJX1r83fapkEveyxPBK",
  "key19": "2NJBfFh93vreSQnpHfdL1nMNTF88z17CA85xaspQ4egnqz9iaLVqqJs6sv8obvar5aYTZUM5uHQVLWx7MGAzM9sj",
  "key20": "34YiYrdsVUX6R7XFkLmva4BCSYP6QcnuGQo9TvM2w1Q43Qi2rUB3AJn88GpYkFVgRAMsq7YedUQ2kiaioTWCwxZq",
  "key21": "bYhjx1FmPXmBvSMbkSeMWfzpLRjX3gQxTVUcZyw9sndKwXJRDNKFYaybTuYff3UmNHQv9UmP3mUU2uFhGXqF5wZ",
  "key22": "46VokNJ7voNgstaXqXqKqBBGAeAtSoUVk2u6GxWeTXrWN21ZYS2BKpNt9tgimbV286uh6MQL3DWXjXr6GorKQmxx",
  "key23": "qS1MsRyFEQgy6z6ryen6fAHoMWnwn9Z8iUpMGXVfnUFfz5yCXzwzjSzn9v7eXk58ffzY6AFsuSMNL6mqFXMHtv2",
  "key24": "4WqPdda1VkpgEKxFGNAMoAwS3zAqPt9qr7PDbtCkthjymQNWY6QKLG3oWw5iMvLUEYmG2ecN5Fnt6DZapmbAuE62",
  "key25": "opGrRFmaZHggiEyaifkz7Zqd8tXsv4BAkViBKxB5hZ8f2zfgAVWkbAguaFHEwyiGW2iGusDMsZBtZcNc6XeFr7K",
  "key26": "4QDNZBtbyQeTkp5hqrkzt2fkfc4dckxseNcmNAuA8hjkHXrLTfeytJuNed6km5BECFJcMywGfGR7dDvdNJxAnJRs",
  "key27": "2n4boNafMVgEVg7kauzFdqHrtgJGnLEa1cMA9Pyui7Sdpd6bdVtKDTrPwhk4vFcAqW4qsgq1C8ndHHRMxeTTGg3K",
  "key28": "3BDTVY2VeeozyAH5EoZvhQmuwpGeS5KDmwobHDMrgtQn2XQNvCpMAhvJaAjSzKAxoj5pziYeyMMoWCP1znHfEFS7",
  "key29": "3bqM7buTQFF4xx6ZhJU3q3hg9qm83VfoMhbfrQT7LCuxH5DyVm2oFBrLToJhyYh4DjhNeHxx3cKt391Z6Ey6DizP",
  "key30": "54qiTKetdpVpCrxqrsuTkAkC6PrTMmin8H2EEBVHopdSqMdViP8TJCSqd67W6XYwU2xqubgzVQ9E84VoxiBVieYT",
  "key31": "5DjNtXf5zr5jp7yV2izfzp33JHb16tkVpRUiavSFan4Ao3TKr9CkSZFpUzNxgJKjHaY4X12wWmFrHcH87W61CXwm",
  "key32": "3SZJSd39HHyMSFmGLfPtoyXdwwoEEW87PTjxnxieXGeg53PEpGY7N9VuDJAWKuKeLSDor9Ed2zf8zUs1cYgERssu"
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
