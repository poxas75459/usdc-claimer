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
    "5fQSui8VTfccVPTMqss1iTnDNrZCVZUgp8xMdisywimBGgtxHsLpX4TcFjxRFPjRqqYjqyNccbtDqHP1LBxor7gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2w9wrdg5cQcu2MgMzPxJPC6hRrWTqaotJvMp6pwukYuiu9GuckecDN94upM7VmdaNgKouy3U5EzGEu4TYNxQiD",
  "key1": "3vq9MaYeXCXoMPLs9AJFcotMYaQHNDX76oATsiFeJcbMf9fNz81etZCk78yt4z9DY7GwfybyYVruTspf4Fy12RrE",
  "key2": "32wrquTvKoBk7YtmhSQNLBdqAcCRBH7jt2wXqxE3683r4FJxrjvfbHNheyfKKW8YwidKvPUmh8bWSBhwSY3rZ4vT",
  "key3": "37pWBzLATmhsYksz4MERAMTaNjTqLYuiG2g6SAwnGYZqNTG5cbdxVAYAJTwV8TxUchDrR3Y8fm7n7NcnWVX1RFDu",
  "key4": "3zGxzRCrSaGcznGCjiTy9JAG6jSKkLd3vQhCXr4wsr7bRqVrQTW2PdUe3uk5EE7G8s96YdoWnyVLAArFhJtAst6R",
  "key5": "5u85B8MSxUfMvTYRSVp7mDFW2FtCiyjoQtigEPEmXhQQFHEoGFNbtxBKK3VPA5VdmkHcNd2uTkTmaaz1KZBn6aJc",
  "key6": "5CNUQVig8JRCEEin2irrSd7i1AVh58ZH9ZWREW7F7teLDtX2QiF62VqvdTgEnktf7ac7ky8wjR25Q3qdqkwgudng",
  "key7": "3NN47DDfM7YdsfToQD8Z7VempwsBfDeA6bGeGnEo5ptg8VBBm8PEmniCcBX12uWrV3rKFGCM8PXoozJcDGwE28rm",
  "key8": "5fmmgihoH35domqEbrfi9GzYE5UwdhmsUof7yz1TpFpWk4ahALSnmNU5jfizH84C25Ht5msYNU9koTSUy691CDGa",
  "key9": "4DDSQsbj3jf1GKfXuw9rqV74BXg7rxSYq8h2PYJ8pn4m2ZafwqJZhEkNwB6y8bSdAqyfJ5Z9zkRniogdtCnHCueY",
  "key10": "qHc7pbcZBFi483giTosv4RDRoPBWgwpgghnLBQrdrZpfy7ZCxGC5eDzPZtuD83EnkBrEeQv9cNdoURGLNh3s7KA",
  "key11": "4sqFe5enXT4dHxunboYnfFusdLg8DoJGruazJFLahD9bfFyzhUQPBddSeqMqDE2eiodUFtbTCp2UCXtS6xN4p4Jj",
  "key12": "2RLS4A6CDgkwNQDuigyTdbT5Pp8iiu4WNbeB3rBLMHiLtLoKjYjFkQT8R58L3ZpGT8H5gGbz5GrmVae6BRdWXjDU",
  "key13": "3pwGx87zu9jfyaMzEpqdz6CEj7B1ifub9noVYok3SzeUAc86ZyzgCL4qfbZDQRGjbuMPgwBXWRgSdHpvsf9jecYG",
  "key14": "5WQ87s4MhPTeiymDxyqvTtokF2NhbPq9fghFH4kkSEhaDBcZuywbjBb3zK5LvWEGVGHa63NbSEvDx8AWgzaqJceo",
  "key15": "3qP97hC3A8pnWFGX7BpjexmZKK7swFNdp9NPaJXdmoErYPvmcTvB1L3Td7zqk1xH253nYCbdr8guRCs4FMVR7Vaz",
  "key16": "5Lt4t1bgHdt1Sce3CfMzVkPRnKmy6RKDSJFt8MehpLE6yKWzxK9D9kbUG6wmLzWgGbSm6k1AGKQr1iVVJKwqXaJR",
  "key17": "63AQKAeJUCXNypUPSQ2kfRYsJTCoVrmtfFjw1RXThi3EtHVHNuMgjtCWyAjJb1nYfQhuV5FQGqzsLUHXLLvyAzy7",
  "key18": "3pvsEUq6tQDA4NfGsgurSj6a4CpVFm6w75FJs83vFKpufNtQuLy3gxXokgoE5AncBTPcktiZsFbxdpgkFEQ64ccZ",
  "key19": "36mKdzWdJ3G7C899HgzDDPTPzoxgJCtcV1MUjJDMnQemc5esvNLJSHgeSr6ePdhLuvZTWNZwxvTRjnFgAbrzwctN",
  "key20": "BDY5K1ZYeHZe8Vrn9TNGndADGfp693Mx49Rnb2CzSnKSTaUGn2gXXX241RXiPiPCDgATC9r3WXmhHWDbF7Guewa",
  "key21": "xYrN224DwM7Tu1htMhcK8tRa6hwwkhYgRmG6WD9auF1wYTnAPk6A2NkxeXdiAEvH8F1qPB1uPzxbchrhRyddYYj",
  "key22": "3mQ1maf4nheEoXj8szNPQB4MEvm8Lu6ZTb1qbf4cwQ5emUuhTzw34qgu78X6oUd3vUN2ue2MGXVBoyEzEmE9ih1a",
  "key23": "4Fe7ySQ2WHgbyyUtpMx36KHNrPPDEJJGXTAAAzXLq9gbExMvoD1biyzoLqephhQJP2y1uEAbU8onZoWPDXVFuNrF",
  "key24": "4H41RwZC7dPUqWHbwE6H8nJMPmRJqJ9bQf9r38VKMJz4ysxJrswN9KxFrV23gMNJBRZZEmt5symsioe1aKireUca",
  "key25": "3tuZJTfq8sqwpbCmPJoGQJVGYHCqZsnsp9cwx4ZwU1LputujZMEHmG4JiUo7Fz5PezoaRM8SpXFQacyCh9UhW2Bc",
  "key26": "5iCoiX5K6K6MhY1zfD6oJqoSUBjnukQCScopLT8zzitvxkuFVSVF92366pK7vX19v7Dr74X5Y8S5GWmh2fo2MpGX",
  "key27": "P79do2A7G1U96t1uWdaQEACSKzgyxtewYaf9bAsKZQuY1CRqXJ5Sdxp1TbWxyzA9TUbWPzwVSiy8Z75wogs8DBf",
  "key28": "4LGvNyHQ3TPFJzXMtujxwxDGu3rcUroMY4CDawaGwztphi9b64LzMaseTRwa2UD9b5wRT8ATp29fZZWWo4XPSc9U",
  "key29": "5pdcjcJNJsUpTBTVZrYVFD8A9NZfs85QLJcV5h6CdXc4BrirxybKNJpnZmK7BSFUwcWRkWp6jakuhKtXLAsCuqjC"
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
