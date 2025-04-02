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
    "5L5BZa2asKtNnTN3RGr6EiJpmisbm85K5PMBFHLir9nyASMF9wxkBSvoW38BvYQxLMMNBM46UHtgrAuN1utZFfbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtszcsXTq9N8E6jtkVyTWhmtuvhtyeiAtuBkUp6FHFr23eF3C4SGgyLJgHR7VLTbMyiimUkh7VRbnx3pLNnGEy1",
  "key1": "2WPxFLGWPd9Sg5eUoK3DWZ5EF1bZdYXyv4PbrfctNkkUHW9CkF9NieAL23MvSRgxc4Y3hd8eDGjm9hG1i7tcijnx",
  "key2": "5YAHsYZQsUhVL7aEfZf45bxkU4sgJ2Xjkc1Sy8afebMMTvAk5xPoP34kW7tzME8a1yGouvGv8kH5RfhjwWc72m9f",
  "key3": "iK3GRknEX6NtQFtZwhuRNququf8nebJRBodK6uahTw7vzi1j9TqGB9DfoBJF1xCJeG8ip5uHKXoDv4HegAVgyEW",
  "key4": "pTUMWvjLEYL9QPBxDdgizNKsafJiTfeyzPEuttyToT96QJ3AYeGKv9jEC6Lka22NYY77aKKkwhoAbtR9ADZr4yG",
  "key5": "3ZJXsvNL5RhsGtcK6hYcE85WEyBAmDH598xQ8gn6WK6kfN3EkKXphQbRDtQBJB8Lqx3LvzPanYoxS2TemVVRvGDV",
  "key6": "66RAV5wEYLEc9zHzgaxVqan4TQCQD5Jo75vFnx1do25znFiBCyMZkGk8BtPwtANeB39qf1XWQAqzFe6N4HGVhFcM",
  "key7": "4nT9d6yfNgCTdvjuLthQh9M7uNLuXtSgcdr8Bt2CcDhwkmMdGJB3wSSRLiFwvU26MUsvAVNynrrYsgeXVPoboJw2",
  "key8": "2ucAbguPRhopJZiihxif7ETyFbJmFhiPdmgMkpH4nuLwJjAbjVV4Trfx1fHBMsupmGa6J1UuHFUn2WShM12rEQYY",
  "key9": "454Mj9f4kufLcKUjnviZ2nMUfKSySzxUDecfmvZ8yfQKNLH2Ccte4uG86N2X3yk9TNftMRDKEBNzEX5gBUn11wsP",
  "key10": "4QAPMGGQgv19VnJuPV1VRk76wbuM8HYwx79BFdgc95PQvSmE9m1p7N9nb29s83eBFF7YyaNew1KuCk9UhA44QDUt",
  "key11": "44w7VvKWuLmWZyWKG9M3fDnyyw25GR6bRxPqGyW6ChLnH7qmHcayrUnvjtVyNFkNZLsQ5EVEzVYsjDpMvkwCrRck",
  "key12": "5ZE3NFEggHfQnxkA5CmAEVWGMmBBkffPaKKh55uWSpb4X69pLsc31XYCXzW3Gk8MrQQv4CkpJqRtA75gQR5L76t7",
  "key13": "5QqiFNFncewCxpAs86DPTfAw2GCmn8hfNmgZQYnfpJfv8YCuNoB4VMieq9SxavTbpzGPFgaTfCcGnXVbYThjtmSj",
  "key14": "55eqkPdcej2EJ4EeeHNWNaryXsqgycpqobPsRYyecr7WE4Tgbqc9UaZYkheAW19ub5vSYVi3ZzhLSuNs259g1HSy",
  "key15": "3r8sz9SfGfFqnbGSjTtMhaxoNDXvhDCzBehpSx4TRF6zGRXDcxGjgDtu12CHCXU7B7NALxrm7qmuwNy2CqvfeTUB",
  "key16": "5vEV1iQtSMLyvLyMVzHSenGe8ZZMJPrzt1EP4HUPVJsUuZGT39zaCwfExJpMskeYimXjBEQgbanL6u8kxCz9nvh9",
  "key17": "4Bb41mvcuwiKiCY47dTWaqsjLa7Zv4CzqFT7f5TJvi2d4sS641VkSbx9ukZ3Sv2ciq4fS24jjSoqyx9iALWWxpqb",
  "key18": "4T2tDNDL1geTibGbCifRua3kFzrin1UeX35vxLQ4Laigd2qSft8gQCy3eBfcrDJq4YYAihFwNeztnvqJkF8rS2MT",
  "key19": "5UgbfSQ2VzaAgzQd4J6uBxBb2gShbucJm63XrT2iQvsqeFHyFqLMsWb2QPBiWat2xdqTAJQ2P1sYZLS3MwNNLWDf",
  "key20": "4Sr4yt4VNHbLZNvNkkP69p2FT6xjzjtCpPGucMVZFyfTsZn1F6U1yeagcADXe9kHSDwDMeJquUKKDZPbDrSyqYAr",
  "key21": "3KCuegQqWh2mZc1ZqekzhaVcoSymvk5hPQ7LBAQBFf9SHtGPtkGGR7gHMEAeWLFHCkBhG1ZGG17Rq4bKTVY139CH",
  "key22": "5g5TXpc6RiJ3KMHMVggj9pPsR7M4xiMY6uGihWRCTcJUBG8pAtXFktKHbgZLpDsqBDyS8KQYt8ME8oZ1qPUzQPWx",
  "key23": "5Cu7NJcvfks73M2NkXkXbCsXLSWmxpaoaPCJWxtrwVsLT7aZCwsvY3UCsagcHcDP8aLocEg3PDcoXwgGspTVrJRM",
  "key24": "66GHafzapDiWajsKsKZEXS22rHTENc1bMcopHtDQBDKt9A3fp8TMoMYULCNjTADEScSAxGoAYGod4MLNA1yrsbwq",
  "key25": "4fHSAod143zsfNwq3Eoj6rcuwN3mVgPtYD2PLgdcbHnMQ1twX1xdGfqF32oJiWNyG9LuLVF7shYrUTBbKMtpcYHp",
  "key26": "5kR2jWfSmdsYAjsHU7ecwDF1zHFEDEeAmM1V689cb8jV1y8m8HVW2fKUucLn1eaHgiT9vL1pHEMe9kJgGbbpPjvd",
  "key27": "9ZR2ytZztx66q7czuA9TLcd8C85hgaVNsK2hy1D9vQkGEK3zktP326yVjZ2MAuVUZyTt7PrRwvHFXWu39GUKbME",
  "key28": "2SJo1sM9M7V3mXAjGSybQALWWMMxKAccU36ZU1XtZLFoNgeKpPounNmQpUP6jaoNicAUTXSmYfmW2SXYJhn2CKKW",
  "key29": "3RJCDd34bH2bt8Lsao1TaDPa8E4A9VF6KtrZtPpjmunqVV57jUdpNPeTZLCvsdn6C6G8tjF5So99aKnP2NHc4ttc",
  "key30": "29Jodp9oB5syG1U27556DJHVYJHM6dmiEC1Lst49dN4kSSjUZZz82dsNfsADQZdBvdy1y4rR6QCfZxXWCVB6RUaF",
  "key31": "3kqY1yKHmkC6dybR47mHFSjSNWT59vPdmbzLrS6Ue8P61to2iS68PDsxWqbboFAeFjQ9UQgWMYB8KPRHuV7SikVe",
  "key32": "5wFsmnidQGQZiu3DPwn93rPBwVEGcx76HY2hUDgCVK6cr9kWrXRqbZZT9Y57w8o8LfmWj9wUHoyVGBvxumVZAHsi",
  "key33": "3seUGASUvycoUKZe7F6XsGJdwzeWZFzRKFqxiA7ZPiubRbzR4NHiS2cSUAgQmXMipSnJT2aoja1X7AsNbbuWAAMr",
  "key34": "2uJ3N8fHjudvk35F3qvQMNxR1xELT8F97YVYgmAvKgFYYBAEkiZvMjqTZK8cBHfDVWAaqefArFMQw1u8wZtcBqKY",
  "key35": "fwNwFedGMMPH4AeZeW5gDBy4LPN4S4vS75f559PdvFG2iZ5FHbcAM7q1MQvBDBWq3MpuDpzKufABHKXCevQh4Au"
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
