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
    "5W5Guh9u8QAb6ufQ4NUCyKbF8cQHeEZuv4GKdFFnBWuYU7boVaFje4D22yzz7CLrGBefvs1zWtEVjqpCUPkowwax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EpfngCkk2uLmm2E3o9karhMNLb2LvKcuf4GLYcdxpho74V9fwbaTxZ9UFmpypKCaZWYPMVmYvJFqdjamvigVy5a",
  "key1": "4bwxv16D8oF8e4SeUct1ofPptB5PYd1cx4ypQXcyTXEYEoNMmiqo2L9TYTZJx93hW3DFiLcNyup2t5yWKLcuSnMT",
  "key2": "2Cef5Y5FuLQs2zTHy6cAZVC3LN4sFtkbRaf4RebwNpdbzo18YXKHBRKhPzWStVjtnB5vUWDBaHK5LdF29kqLFBiw",
  "key3": "23sEZcjBF6beWkmWbaTExvugkXYb9dPFBcCzG8W4utJzx4u2JWb6s6WWHDxKT1R1LqnS9r6kBzzTuFLd8aSa5EyE",
  "key4": "5NfdFV8vkByaTdxmv8faULTeuYQLC3d5QfiuHDzxgdfLnYvdVCXzCBd2m1WhPTr32AP1mivfxSPTZmWVTyVf8XoJ",
  "key5": "D8BVZeeGDEW7Q2QvjCvQ8X4FTRXoz7sXJdR7bHQUfSqhtwajLboPby1B6tx925jR3iUPXD6nRejyGv9jBJtuhTM",
  "key6": "4Ji3nUxYxc8s3TgKwzK4pAhwdPag6y9shcJz3roPbY9HAK9gqyfE6PGmPFSq7EJDwyL9EgPAJyhy2fxXZRURfbcx",
  "key7": "3kXdhb4miMtAJ85aDyU7FMYJryaKELCitA5tRxtGMySNAhhshw68S1gg78xmse3T7hACGuzvtudARfW2aCAwHg9V",
  "key8": "5uvnYhjkeTmnKXB11Du4u1trbK9ByZCaCsyXF3woCbgT4MT68vf1F1qtPP6dSWbwi8nmRiNKpLoLVBX9YHBDhku1",
  "key9": "5diw35EcxfVW6d161ksVwdmtLxpbDoW4jifyGnhf1i9FRT1EMctqFjHCRtavrLkhYCCaSeXmDSECgooUbSgSqrWd",
  "key10": "61fnXa3JzcKjfd8BqiZRiDqk45GYVEfMxeWamC1WDdGxd1WMTX8FR1PPvrCu7jd4nn3kbTKSRMzNh75m9QFA5aAE",
  "key11": "3sB1uNpcmNTR6vNRpwE8s5UPEPrVmFfZi7yMKjTVgrwCgwPUXvhy83jSVEk7qU6rGLSi2VU1DFUFZENzGjKxVnoa",
  "key12": "5y61noPhwfvyxdLShBvYJL72ZPJYnwf45izknbV5Jaau3t7WsZUFuY7yveVckTw1RCWi9fdw1iLtZL9LaEQDNJeh",
  "key13": "5DcW12xUY9B3K26MwJDg9ZyzH1PBGAj2ABh15BHv781SUbcep2jT6DYMyqVXRZJuEEhJxdSt9gwHSsLopvADMH6j",
  "key14": "35e5d4tYUhjByenxS7ihz9KkBW692qS2X8nm9FoJjMJQAkG3XpdpK6zTVtcc4aioAfnUXXFn5X1p4GTiGoqdpVxe",
  "key15": "578wvorovnewU7V3ifxmdPqMNVeSus6w6WH4c4kdNbftt9H5atUbFpgDGGbxazw58UyULNSEa1jkiyr66rSjEiud",
  "key16": "5WDo298sTJ4M2qhBDFEkrLTnWebSvUQs9kW5kKXHEPFwfSiSuLbxGxqrJvdKBV67tx52WoYnKLSuP3EM7WK76W3X",
  "key17": "4PRenr7ae55EXRs96b3o1fAkeYzD89wrWGsmgw1PiWzDfw8wTnV6F3rt63MFDJH4M2kDkgmBnwtsRdXiVxD1Gjie",
  "key18": "3fYzEUQbiK7AzdGP36jSHJzeod3yrFLbHp1f4uo6QPD4ATVoCBSohfqDz1cNWSpRxXZqj9oFzBAxbwjcYBSDKuYz",
  "key19": "4udCK91cUkSQfUpASgNjsZv8PzuFj8R7iD1Rc1JckHNy6grcisPYT2bievKdgwytdFje4hXx5g1aeENdHwLckRRv",
  "key20": "5KYtMs8ZWY3bL9bK23cAvNA9y4WZYUJDQaDjhX8nwGtc7mDuceMKtt8aCpZUYmSH2mB1WhMyhKtXhWymZW2qdRq8",
  "key21": "2uoWAdE4TvAGYkwfESTES79qKCnYzAuRPJExnj7Bvwpyh7Rhg6ZVznvLhrNnUvrgWyJXf7AZyHPs4q8R5iKhaQRF",
  "key22": "5KbBVoxw4HFUq2wAhsYCRoqhtvzJAn19g6WUQ4GftwHUNGN9RPhnaDCC4f9Qe67BkaFxrHjqPYhqjJTnf7iMF3qn",
  "key23": "5n2viGgPT5Lvbd7nMEBKpNH1ymGQxieC5ZdzjKVCcy6kuLdQLQr3Nkq49q9zoAR8rdoziMVTZyZphezLHZaELLdz",
  "key24": "xCDrpzde2nSLEQeBqkQKf4Gfzs2D9oV5xidh5TvhpQurgcZoEPqcwQMXFEffGGDbaaMLBoRoG4PYNLkJhbf2Gak",
  "key25": "uA82A3uzWfHgn8yYdReDDnFKhFssCKDBe9CUpaHRACGQQXCehtBBVDdnj94BPKhjXdj3fxkhXN9WJx3eXHzfAv7",
  "key26": "YWNgv2wykwn2KCKgy54YyABfFXakVH3NynBNGPuHbyhAqQ2SNMN4FH8G1DfjXbyZnSxNrkkW2CyAnpNDcCDGqdh",
  "key27": "hTgWHd3bvDN73iPiJdZUmNkW4DF4SzE93kh3G8pHh6YvKh6XibBYqKFTgt6Q782zprcV4qoBJYyUieCZWpKAh5Y",
  "key28": "4AW2mZkGZR7bw1nni9L7qF6vZudMUSFD98qnFK3nVDsWseeoQGxuKfCugW7AEYP3mzi48Sk9kUdDSHZqiEfqrKNj",
  "key29": "T8yzTxsDkauRtyxrnucsLT4MLxC2iGGVDTpiRpaU1ZVPN6U6j4EbdwHpWe8fJ7cUfycxWknAjeyUYFpwRErc57q",
  "key30": "557ujj2j299eSufRRaa6sRm1qXtfHp1pxMD3gTSUcMJWKn4HfraGTaWcxR8Mbw7qmNRokDCegw7K9YZG71zGgHgJ",
  "key31": "37yZLh2pxt5G9bhmm22yvDeSRpn8Xe8rAtd7fQZHzu4pVw1487dUxe3Ws4SxGiYfcUQL4K4itHkAGgmWHfF7Yp1t",
  "key32": "48xv94v6GZ1V2iPcUgnQif3mxy61GASm9XJaPgKyZc1gJBaV5DVgatbzreh9QpCUzWr5Ug7oobShRQdNhzRBRSyR",
  "key33": "4CeaBqScz4o1AuJNh1Pom2vQcdQKK4nSjLTwmmbHGjsSpGMSHTuisoSKvWg3KUkpN4jcDcgcPvFxr7WHoZCh36kr",
  "key34": "4MgkwCxnKfvkfQSj1KCHLXfthvKH41EMdbKzfcF2bcbnYorN9rXmuoAcCqtMysufGB6yDJDqJxWY9ouigMBC7GYo",
  "key35": "2BqowpqQhC7sekRihtJT5f1Rv4gEDTNXnmybVZPdMMofoNrvg5wESRuu6LkmnAjxnaR9Mnjey6AUMJNZiLM2G2dX",
  "key36": "3SwP54ghWAuj6ceCvrejKyDFvC63RR4ewngKtFHETYjUXxuPh9xWPyZmKedgSNhypxUcthjBBKwJjmLvWdAKn1du",
  "key37": "4qAxupBLL13UaYkHA4tesJBB9Qx8tpdjNtABN6qU3N1yS1Y9RpQFfipE8ZBBqHNmTnwBzwCoASf1PFyodi4WcXC6",
  "key38": "5h6WZ4pw6eJt5CdBfbDHS11z8dPd5gS2sYvySb584eFYyq7zd447UUMUvM77ckYbUByYfatY9cZwhSweNZgQtz5p",
  "key39": "51VkmdgFKMJ4QR9E1E5DBeUzJJDgvzTeMqpn9G1imqb7XEWDXFSB66NpN5KeaJdBB1UZn8HKHveFicDT3m155aiu"
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
