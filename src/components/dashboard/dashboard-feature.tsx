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
    "3ihvemewZz1QngNMVDFSEaVdpKZLTrGizd9iXCoZetgJuRAPrZdm1oU86mmp1aH5cnwugFgdJQxk29LUK4BzaRe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fzn4tD8AjWzHAfMXxM1h1YnK8eBUGMZrpLH7vuvHegVhERAmNhE9HRJw3D1wTyRgHPrU48cyj6bRNzxa5pxSJii",
  "key1": "2EBjUkQUKWcFSR3z6iNZXrmZmeRmEyfYy3Krmp7EJJJRzb2GyrJAiEmrtfh7gxPymMyQBoCtCFV3NcdTHF2Nfegt",
  "key2": "2DuseAWsc32iVx4KiZWwRPBdze1dmQ2rpK976uoD8LNhyPHWY1ppxCUm6x8B4k2YkzE3ej7bALsjrqXtYHrSAK9J",
  "key3": "5sphXtD1cb53tweFaQ3FaNveAnPdVy6whchXeP3tqdo5fLucCiP7U1wV2GwFDC7HVdyTwSp3po8aRRzagc7avyec",
  "key4": "5aCB8qnb96xwffEj4dXJxivps9GnyVP49Bz6bDmZotA9HppXwAohG12gyeNNFpCFAGzBkTogKVcn34Zq6qEQQLeq",
  "key5": "4q9Gve3RttXYr2MYZ2HarZr6Y6Aqd1HvcyMcCfhMwg1QAoBL2hNvQxPDdCcqzGVSPdYD1bUTt3FrwubvQX1TGc7s",
  "key6": "4NBqedcjTYKehp2hVfVcXtcqn73pZNAeyxmVEe5sCC8aeUgPkNanPHJ7geTqiARHZU4RmK6xYbsFsh6ZjTZkaLEV",
  "key7": "3TMtSX7Cm84Do3vdEK2JmxNzjW39CrD544CpF18EAmdwF6aE4YUo3Yt3HGm4aAX4ympjtoWd4F8pHTUfSuXAZbh7",
  "key8": "4SdWw7ND65jMLKFaykGoixBXEpEAmUrRaA4wnczzy7F8P4kCoAZhpLQVFhUkP9ryn1cWFTvg3GoN7Lc8dpmESfU7",
  "key9": "4w1e4FaHTuB7KceVrFpaoWYStPkwrNrbe2t7qdahvG6x8i9nMysVezuXCZmT4h1AgiqxKDvf6gmoVSBGmS4hgmX",
  "key10": "4hnQwG96sL4pkGXm8Upqe1AbtCy8p4UTioLoBKdES5jK3KQ38wh8PmnuKnyLfpREkBJpAdriQeW4k96N35TV2wR6",
  "key11": "5G6UCGPzpAPbydXkLBfpvAit1eABNpixpyaDr7QnV5Jcmh8KdpZp3A9BwB4HDitPaG9WzoYT7TMk5TEgxLQD923v",
  "key12": "542fUzHrHXWMRVzi94p3fodBKrNrLsEhMhc1urhTjgUJGKMjG16VqdAc6WyLDi22u1uZPiZRPPmzmZnpS3Q2RpXH",
  "key13": "2g29fmUTxxsRqxh5CjFUNSgCY3RZesEKiLeGK9Bv3fsiC7EeH7SaPwe7BHJa9CKapibgFgFpYSb36bUv8gZXCZW",
  "key14": "Zye5WztKYLq26GkRCjjEhLGWZtrTLSZgCc4y6EjRKay5PB8UJAAxFSfwD83CZSfZchSQvCbviktprgKQ2tSQ6da",
  "key15": "U4wpD2r1eahcYbR1caJsWHgbTYdYp3jdFhU3qeFsJJuQDmb4ZtzJ7WCdspXKwEiEBRiEuVWDS5TDds7hfsXAvZS",
  "key16": "2pkEBLubXs8iAuppetVoMwgMb75U7rY2Tvy2RyUNnWY9rzNy6QoonW92yp5DvPXs7vpdSgdJdopajj8Jsur96MND",
  "key17": "4DvumqMedLnNtHSe7u6THipTT2vbuELr55YjyHQdySpjQefYPwUEhdXTwS13Q86B45vs9BdeYjZ4pG2tyWUN1jEL",
  "key18": "4M1fsbizaAjZachmKQ4wmyzzPP9E1xp67i9XWoqZ2WfdCXPvwc1joU5z1hee3c7ege3sHQnVYDjiCvmvcEAuE4cr",
  "key19": "2muFe2LpuF4pqwzbaHvPR6dCFTn6crawodkQLfEJih8MuPkY8HWqTwtoGbFom2RnmyN5VCv8ZLQzYGdssWiJUXYq",
  "key20": "pDKhJNw7ByfUUtHSEhHMbkCnHn33ic3jMLPdND55EAj7cBKakMgy76n57pLdvwDCVjCeRsZwytsqg6NMtxw4k2C",
  "key21": "64ECy5GpbV7PMjfi86viWJiJkUPtrxUSUQ3cMtUCLN3hT5rhNjSsPkXvVhBf8t4NddtjwFS5hNHH6BVtvsgHgqnm",
  "key22": "2GFr5igVyHAKHmyj4XvPEsibzRd1beVMVzPPgaJyHEBLdjVX1Y22jorVxFWcGUzkbXVQs3h6BDUZEh5Ai7ATFSUn",
  "key23": "Uq7WEgqNzuraV21FVjVc1LnCiD9pbQWjZz6rNfzPzJY75H2ukoa98ixctcQytHgZQmD1nBX9ebg5et9aLHsCC9Q",
  "key24": "3ZUoBvqJwXAMzaD2ggzQnGopXddu7q5nNXXiA2rCfLD8TFtqVm6WSyw2urGMrHwfU52x45gbMC3M7Pt7upoEjkz2",
  "key25": "5n5rgpbe6S7orRMaBqsH2rn5V523kDsb6Vtq3SkmPepiz7hQpGNFW8YGE8F133n8fKY6ddnpMNGNc5QVgWBZmG4B",
  "key26": "4GzUnMDRb5mZwW7GpqVnzfVUdLqL68F6kivXqhZxbSQPF8EVnw2YSMfNWkNVyBzJh8u1pGiaetiGdeUBHozpXRRX",
  "key27": "44s7KsaxGEeLo74ATaj4FEQpxkHmhxNTZR8WoVLfgijJ9zYUA6aAovwJecU8cxjSp7vmqwEGqscmTzp8LDAty3UW",
  "key28": "4nPuo9jmk6MYo8MArHQjWcXbpQ2yXopU8kbTSR3FbNBncSQrUYWScw2AUHu7j8UpD9zW76L9cDvTkXQ1RJ5AtsfH",
  "key29": "3SwApEchzS13NEAr1paS3FFsTehRe7pqtNS5tWGpFKUfFVc7ndW2MZ1PNak3iWW7iq6fLJ8tMNP3xq8nDSLUkAsn",
  "key30": "QUJjr7zWhRfz5ExB9ZoRrPo3J52PqvA4NyDdytUy2YSSimNLsVDoSsiA2ahPGxCXjLwzfYXNA2eZFyD8ZK1426R",
  "key31": "3CDeKsu2dVetQ3A8EArRVFmsiVp1vmpfrmzkxBtYW1fDeL1f5SBQAdxb572JeH8FvYcwTJ29QX2tkoLuAJusPEmX",
  "key32": "5dXL4ryf5s7ZSvh6dwqug5eRnEqyBrM4Z1y5cB7F23MfXc4LtAvTBcrFKPUhtk9hkv92hR8z2ncVimTsBFdqCtWN",
  "key33": "3tcS6DX7pbDimrcKSpnkoEai2xnVwsJbgRBFm9Xh9AHmmoatxC3F49hA4LLZibLegibvvRCDqdgsWdbxnvgo9KBq",
  "key34": "3zqaM3E5RbrdWWS41kEWDP6geQ7LoYBsY3LA12VBAvwmYpzy72ThRwnhcEK2S9bFK8zPWV8jDojKdgEbZ9L7LH4T",
  "key35": "2xXEQQH1gTU8fDgBu2nADDZN8e69v8Kjmem59dy8u44HrDmuuKfTU3ACw8CaaMhnzQoUxdiUXgNPbrKYMru3qGzP",
  "key36": "27NkBUCeuRxLFSdnfmYT3FvmGEndCD5NyBciQUQpWTQv75yG1sJzEz7rFHYkesxh3XZdMmmSHazLnPAcdG5VFaqj",
  "key37": "4uG9BSdpS1UQRbiL7SJUCAav8bdQf9zS8258tMmwEzxBqY3Bs5EVqWFhyxKquTzscpGtpzbLuV2SxqkWHij6kYmc",
  "key38": "3wemRPyLTSsmPY8vni6dDSUK6q4aqUajnyro2cj1fxY23EjymcrNhU3pwjZHPWHCRTfZp5Mb31oLHfDessF7YSa5",
  "key39": "2TqjpkXRqW82A2SBnLXG4gQpWStitmmpjQJtPX3Wwj1ENMAtB2mMynnYMZweaVLWoW3iSTWCCjNkhs62kGFPmBXy",
  "key40": "5okbr7BoqZ9iQxSMmKLLKgMwn2GWvVdgS1FqBhnuCeQAjY6PFc5A31ypnveRsX4P8upbTmaM5MWQkbqTf5o1oJsy",
  "key41": "2MWnB4fsqbQpeV8BLbJ4r8igHdgKz2i885urRnjuaW2xvDTbXfDE6aSb6Yvp3Pz6GucoRxLuQw9oDCgyQ3nfHQY5",
  "key42": "2mXYxjRrRMyj7v54KePoX8aMrzJZnq3ubnxG5GWueQhdNQeYDfspjcRG9c8kK8zBvKZzxPYd9u4S3jAJeiQPKtkk",
  "key43": "Cy5DomWiSY3HVDRZDaTpxdq9myDPpTdhb7sPRXA5JFxgVVdPZ4WXr6R4VNhT8zVd9SRA7GnwZ6PRaDqVeEuJ1dd",
  "key44": "4jK3J8bVjiA2k2mjCoZUzXH5TRFo4J5bt8rmRczPyrgqwBq4wwsvGtm8AGF8224tyzPQQhMDDpqY5ECxPs5YCRyt",
  "key45": "5ko1WuVUF7MYiBbeKD7PhwfR4Em2eN61HssQtHF1kpNNs341pQXJnhMoMpeCKqbtKXtnKKN3keLju8tDpaPAWfHS",
  "key46": "5rVQ9FeTVpU55HY3adLUjRcLjVkHkZQPuKFRoyELZNiMFN6tKvQ6az3pjwefHw6z1x1EoyUX4AGtSmr3E5dkBuLr"
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
