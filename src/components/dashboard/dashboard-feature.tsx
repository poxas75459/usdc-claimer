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
    "3NVGLF29X4h28gQm3Po8n2AZ44NBbWtTje8G9nLu1GffU6sPXwGmnRVAyd4zgtfunwR1416TeiZQoJJNV4E5rgVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Me82ZfszJmjt5gZp2jdbMLUgpmfA99oXmcfoqLjdmogHyGncB5p2F9XwwFgtiMwzsUET7NVASHLaSreSm28nUaA",
  "key1": "3djbEW4NJpf32MYaHiEuwu3wgXJBMsEPJEjjKLDjSrEKnHyMWBFHVbFfMH5xMpqzGMZWARGCtuwGhjQjNqtqicDb",
  "key2": "4oRujm1GU4GySyca8fZjG1pAZWsqboqWkBjNpj6H7bZBztcGyD1xQo6cqu5Jrg8jo5rmR35ZydoveftkpKAT1KgZ",
  "key3": "2i6ddR6SGYmNzcfNPqXA1NtpgCY2WYQets4qd1kJFVu31rjCZYkSnykE9VDHu3eoPr3mcZBvw18pyvm17RZEC4rL",
  "key4": "3crygLMrbN8Hx7DLuKNNdizH54DpAmoeDgLYdiTG8qKLMbrPp2sVJrn2qehA5Fm3yxrD3EoHu6KhPfhTdPYFKh8y",
  "key5": "27k4qLqKjCDNQPvxGogyV9X7jS2gcoseCVyRJuTfpPHPPubWQD5mfyHKtQST4BxeTdVQs1nE4FnLQAyGJxnDXaEn",
  "key6": "3obHvkCcBvd38Tr2MTk613wBwhhoUy81FeBP5jucyi8iRKpqe4M8uyHUTeWv6twhkAJrCqwmNKPr5s1bqLW9FNWd",
  "key7": "2EVo5qG2tUukCcjRkiDnvU1MknwvW64ZX32Mk5WT8uom3UB8mENx82s6UNcLQ6GnXhpHTg7Jvh2Rp2tZGBghauxh",
  "key8": "3HopM52avjdB88neD5ZQguAZtBPKvfSRc6oNQbDMPW1hGxr3sirGGSQvbZks7YqkwyubvGj6DrZqb2Qv1qonVNsJ",
  "key9": "NKQGR8wkzSXkBbF67Vx4sjWi1KdfE5YCRUatoD5xpG4AXwpU5hrQBjjGA6mdTRZHmrr64N7j2j1PaK2ptQdUwMV",
  "key10": "2qCxC7f2UMWhiidHWnxv1iZDqYhJBdiBVHdiGRQQ7aeL2oipZ2gBYmtBAGQuJKdJ15Q6ArGsG9krb3UuHSiBg1rK",
  "key11": "4coBjdJKRBCdXwVon3HfxspWLJ8YTN3FaibV7zbGcG35pBm1haiseZHm6YwQzAa8aZjWSegu541LVbzddcQfjkQi",
  "key12": "5E1fhfTxwqLAJCNocJP5mJ9JjHMrj7R4MNp496LbgF53rhifPbkNFWoCKwMm4Bp1KwtgRbHK1T5r7qiXtxqW75Cm",
  "key13": "3x5AAjoYQukqL47FCo9mUhN8qH5qsb7xNiEnCerGmYrZSYV9fhisVCdiVJ9o14WPENjEr2bntmHh71JZqWXNRQbH",
  "key14": "4vPxrjx5Tqk64nUcLFWVikbd5t2Sga1hxRfWUyNvQ662NAEB3aDgxgBYtzyejhEnKk9AQV65x4DGEEuxVYwhME92",
  "key15": "4az9sNY1GMw2HgeHN9cNA4VrG4EWzxBTReBXcXyLeobirkmTgeDpwxswNeh1cFrEkda47s5jodZNUSRi7XrP4G1b",
  "key16": "4M7YKPRwFDeZiuTuW4u53iTXGKPwhcpbZLpWhFfnPuMqWL7BVj1vNsTHZYa4dLDJ7qSQXinaFcKhgrnn9MsDRGCr",
  "key17": "5VGcM9e8FHMt91UJrme4i67EyunwnrVLUAJt4nYgE8sD9dR1Vqxq9XW6nw8jREif9WQHGGSu3Rx1LoVNBnzaWsa7",
  "key18": "4z5u2ZLqPVLr8NDWt5fNx4dwYiYksDJvRJus6xeGqUPiRgPajHCGAW6Mse6QvoGYEdjQq7vezyKAaDhiVsV75Ze9",
  "key19": "AYmu7BXSRbYJpixqy4PWCti94GTWR5DYGfggqDr1jo2mtkSG7AQBbXe6PDNQrcxihF81F8CkdW6teMNQyeabajx",
  "key20": "3HGfCC2noLtTbozFTjdcvaNRpNimYw9ub6X4j7Y2yWV93sPLMaKu7gtD2DuwZE4U9zNvQkb8Toq5WCSkU4xnrgMS",
  "key21": "4jsBkG7RHhd4RFkFyAqEv8JVFrbRWGL1xhW1VHHHiDu6SiHHE3aBvHZ1XgYUoGqb9BVYfay9AsjX4Ech6adJqvBo",
  "key22": "3hMp7VLZGfwtschfbxJXHPV4n2EPPuMjtmGHMjRfV4yJHceiLMx39X9ygpaMfPsxp3S5PTRkohgryK1SvBxiA4iT",
  "key23": "2Loktgj4syDPTfkkKWKXYWvmupHpjoAvZiSRwDkByYDMqCGvnNC2YxodasRm7eaPwVGoGfmAgvJQdFENBUQBCHrb",
  "key24": "2znr7k3Gr4dGnhs9Zm4YB2reUkg3KyQpYTqc1KWtyNPK41xyMaDXuLzjL8QvpizD2NpJ7YHPDhF3G95GYTFvFD8b",
  "key25": "5bS2nYeRk5uckBVQ2W6ZRi9wp8YMauBAdHeLQXaHoygm8ps5FKyTYDU14qRrbjaAYoRWxYnHmM9jg5JdyYsV3Fgx",
  "key26": "2vrNsjK5RHwHoief2MhPPMk6ANjDqQg6fr2qiDQfwjyVJSRZhy5DVFDCYmx5sn5yd52wwBf7gSYDzTygVo5bQA5L",
  "key27": "2Z4ALfDpis7zjGi5k6G9KXFPfTMpaPnpc6tQPiawxpbxrVtzfE4dqJD5ag1qWiLMyCbhqCHavnDLHKcM9jiiUz2H",
  "key28": "3xuKU7fBNLACW7CFfd42wWvdWCcUfYRVs33NexHb2JtSGfB2jKu2YK8CS44WuJugLjJeDz2Be4QqLtE88Gg5Z5gT",
  "key29": "3unbMhWG8tBkaMTEdW2Dwm6CS8JD3m8mXpGVooyzV6ZmaTHm7y9dHPrHoiMyw1CcUyAMwJHYLoiVSL7faCkbb2Fx",
  "key30": "3nRv9AxFjWotxNPkDfpZDBr4UAXcfEucWXgnoohZUTp3S6dbE5PDCNK9YnSTevH1Wswhi4KkuMJNT6mutpxr2MX9",
  "key31": "3qVaFcgv34gerdiBS5YWfHwXYUmeAkyk14a6jTtrYi2atjdDqz3bZ2MVPtKfVLxxXtmmEHKk2G75riH5YDMpwhHf",
  "key32": "5GyYtAEvuDJBnd6PVKcYzNyLtonVwY9eswQKHd3np9fkud13UPqxnxG8Ztj3EFcMbVHXiTh58y3Htje9qArnBnun",
  "key33": "5kYGPFEJKd7pjYRpRnZGApCej94yRGNezbChamkF7Zspys29oYFc78VFKnKFVwsYzWMLfZT3GuRLaztbgcMmmSWb",
  "key34": "5gCSTmygmcfe5JdQYT5wee75FrqRLsd4WNeDabrdjpfTZmu4oqEumZePWeQyc1viXZM5Gw73fDwFW8Z4yLc3vUF4",
  "key35": "47q3aMZfwuqUCxAXkp9EWC8uyxo8K5M9ucKNLZHg7fy17Hfkn2UQXcYE9CMMTq1FXs8asq4Y9AVs9gTd2D72Dynk",
  "key36": "5uGZJ4Mee5C1g5bmxPhxfvQyjimgfCUoPqneaB9yRXSEfWVD3WqhiF75gQNBYuEZ5UMcESaADmY3uig4cXjQUq5W",
  "key37": "5usZSYP54gsgc1Rz9AWjLqVY19RuvkFS2Qc94H4F2X9ZHBaZR4J22HuRibwfmSNvRtyEy19R7RDoznZvoyVUrPFW",
  "key38": "2AoxCwnqzCxiLFNkJfJ8UDDpXHHhEpArFXKvg5DD1ff3XHVqwChb16SJvWw7tAXWZgUDsXDPgmqwcyfmYpaS8PwN",
  "key39": "4jYJjtVYTVhBo21ETbjYSMrLasjMHq71ZLKoJHxGPVHwhgn7QkD93YRgk2YNy43YnXnX34yiyWdAK4SUHYF6ef7p",
  "key40": "5VpQUN3ktFFK3u7o3EDrmv9gcfirLKJXCHAeW7hpCHDRjgHPmd4k6YpJb3ERr2FNqg1t9y7SutGmRi3uwEZZSM4d",
  "key41": "4FrhSwZjjGKi6WCxZhGiiWvSqpqUSQn4Y2ej5hcLiire9kzNEEfgQoQCfA5uxuF8DQ8edYvuireeNviD7u9W3aYV",
  "key42": "4GmVpyiH8GWV4BEHN2ccuGKXuSMpbtesfLHaxKEnNQRTYZrwNvRjiwaxCRRsG1MVrQVYCUyrxKVTrWfdYXRLrKen",
  "key43": "5vQSjFoooCufe3An7RgfQT2tTnnvXUNW5qHgM815VmUruedFC3p4QxWs9u9Pcj3xe8KsrHpyxr5fbNXQ1mjBwRtA"
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
