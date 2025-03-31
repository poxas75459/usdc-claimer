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
    "B3M4wDxbNKCsdrUgeWX6s2r8CssVmJ5F7mj2DjNmUsBQoXP4ELuc4S7jEudCYe7yJrUfe3Aa143yybPsx491qZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEXpd33iqGhGXQFQFL2a1YS76ADf6djdbQ6vgsSxzLHtNtf9XcqUUsiJvLJVnrhiUgrdNJWLBiSFPn6mPAGANqt",
  "key1": "3CsMDzkDFJ2zKdYP3P5FZgjRxQJ2soitPCp5GRumia1DA6iNtiWX3BPc2guCjiwPaSTizhHCeAYjM6TzGEp7WKFR",
  "key2": "24kM31G8LpqHFJAxSEy2aPVTukP1BgQwH1tX3fPh5D4uAyvcFTFprw7HatDBJxSu4FkpSc53cWmrepmFHbbx9fwU",
  "key3": "2SpB8WDM6jaJsmnRJN1owNyLVsRijQ9sxD41fQWRx54ZBWvBQhVP7hs1XosRQwN9Yfr5L7inAdCCYaGN5shfF8b2",
  "key4": "55ThXvBNsReZv5cJYpV4UtAY87xnyY15aND1dRyt2f86PifVtwRdyNEuuErdH8qZnnEqtoWBUushNahUNo9m7Xsj",
  "key5": "4bA6m5HS5qVUFoESyJr6C4wCSMAHCk5UsveeUvbc6TJTUAtb4JY6h9Bofo4mbumHeUHPcPaZAc5EpoFoaRrhcpLi",
  "key6": "41F9pLs3Lu3Jzhp85tFSH1SjCdYVHHatTCy8PsJMHreTuvJdFxvXuzDvveSoYaeoRA2vepsqiFfYiYFnoE7Y6iQG",
  "key7": "2HFhucSfJ434PzFwkq8RcChZsK3GqpEcLt1Z55djUs5ybVUALdwG2q4QZNL5q9dF7h6wZR9dFrdEpLsxqgERBANV",
  "key8": "3CakxvUCEz58bTPZFUsBT5f8WzmK5CukibwmNBrgQWjphsaZv5LmvBuWozjyEkMrAkcN2s1z6vVUPiSD86vyTkQs",
  "key9": "3nFY3u61TrjQrrCdtCiKfkjB2WtqT4nfyyPzk5H9UuQr2zT9kK7fUor5otBDHjzTULHaBqXthBDJqtB698FtHEy3",
  "key10": "2yCVxBdfiXb6roLjK9V74PM4krcZ6RziJtfnVMFH46Lt3edKtV59XcNGhLVnSQwVTSFbrPQEkKsXVwNprQJ4bCiB",
  "key11": "4GsYsyiDmcd1iBvA7wiQFnEM4vyRCHn58gHwTteeLaZY7X1dTJGxW91uDmCSaAxyRBxJzbtWU54wW1KKfcC6wTaU",
  "key12": "26vGsWN1PcJQUgGqdejEkKzq2BSpBAnTSSKyX82hvAQnn22kZGutWmZSfQhTT18qiacejTzctw6KDavN2CiVxqV1",
  "key13": "4kgNC2Pdoq69PvGKefD24r6YU5ZoURKoMEcyoqZzwm2wyLcL3Bb3683hxaGb2NSCBqttJswQbXMpX1TrAz8sAr4N",
  "key14": "315KCffau8mHbkxuW31hh4YxWVKDbcVDkVQ5L4GHuPufmmnBbguj6zs3nknyV7iQsRxH38tYQkcXZhvcKFVcXnys",
  "key15": "3n9482RjSJdMRWsYhsdfcT6dDaFUJghAfToC7ZYiHLoc2HR9A8u6SJUhhCHfdYxMv6SS6SWdyGvjMhe1gt3sdd5t",
  "key16": "5GKC1zwD19Z1uPGeGxZiMj8tuF46DYJEGZittTDwYLJvzFAsjg6CxmdMyn8HcRXcm8CgjHSmjRiszKL27boMeTrs",
  "key17": "4RsReedCHiTqSErHgnhZeThRd3dghRTiasKepiGS7xY2ihZDVvDP2B12XWToMDutJ3mQSEdK1rL79L8qWbpAutzF",
  "key18": "61685vgpKPY8WkJny15uUecLf3kQpaTy4dqD2ekMCcW2RYoBcXbebgh48YdCcbWTay3jcTKGSimPVZKMonf7q94G",
  "key19": "3bVaEVQ4afLmneVEce8FjYWR4GX9nQCAY2QspjoLdTDTjATtDj8cfbLzUREwDaa4bEopmGk9s52q9T9Mxa5xexvz",
  "key20": "4LY2XZrnqSNR8hy1v2xQx5swwzmv8mYBP5ZaNUiWncuejbkgmgiuSMeSXRHxaRP2aA2mqQzAAszq9xwV6CdSyiHu",
  "key21": "SWkaEW9o7NZiBSkqKEc5cGJrY4VkJnasoBDVhrFiSCy25LtY5oJ6d7j5S5eNWAv8u9JwW8FKV53MfSWmXki2seA",
  "key22": "3CfkkZLDJUKqYv3FM3aRv4Di57s5LijnfFo4kNaoe3GX4g4E73E3kh5WC3o8cPbDqpheAnRD8UwjFvsZN8HDLpvZ",
  "key23": "4LbUip2C7ngS9F2KQYpxEkhrgQ3kQ3tzSb3kjgvdCMnoEgLnBVY4qKWamtPgMAgfiSudwric1Yq5VQn3YDZFTCgE",
  "key24": "5ymsC3tKPj3vpDWrrXzbQXsH1yNmo7fNYKHj57m4emVqDZZ32HuxZZ8PGzs8Luh9qz9DTkhUXc3ey9ERZ11mZ3Yx",
  "key25": "dEsrAx3T9dRnEYniG35kveXP9SvzbgMm1NRvYCepECphfwu9tZKDasyfp8vjkCftSUvkSJT7qnrFNch1wWQxpwx",
  "key26": "3MbqfA4DBXdB3oA6qPafu1xPPfYa6qQnuZqT3CrrM1YP6MBTACd5VTSR7DGBFpXE7G5p6vHg8BRzMq4zcfmVrVBu",
  "key27": "29sxmkARFTuaVtaqBRyUj9obkj465FYfSdwrDHbCRuueHWQ2y4McyFL8yP2daDr84ZCQ3f8mvejzrVT7yvKT2y8c",
  "key28": "4f6sY1D9bZ9f31T2TGdxp5Rfzt3cKYKyiwKbzKDYStKGY5WvgBFBMzvg6MVGUQszZ4qxca57hXxT3kpTAN9AJVjQ",
  "key29": "4322UubDMQ5kqvhr8wfaxN45jPCFg8JSC7ihB6T2i75fSMznzVDLASi4ozSU7RmHtBEwyJ8nRwRA9a3ES6bk8RMg",
  "key30": "3E8C83a7VTNoLF9zyZ9s3EEmNqrnQcVgExQH9eNb5AHLGDdRpG9pyg2WMDGKvATsYFCYduzqi1iS7ftztDA5835A",
  "key31": "2pJ9oZF3yKfR6GwwFWp8TgejENapVA2LCSdv6VEEKShpd45chuc6zV1eDN1KvFBQCuqkFjdEuGJDU4TSDuMLNNQ8",
  "key32": "4xYYqC8QFy6Zf3t9BZpGPrVHGquw8KG7nxn67KCRXpfUE6xRmQ4MF6Lqiubusdr1AFgLDBWuxuoJEMSBnJRy6Sde",
  "key33": "3w2juMeVD9xKPvEpk4fNrpnjXACMiyB3qvb8zNG5F6SdiYCJarjSi5sbHRobBAAc7J8aYPjS8qPwYWkuTDLhrVrj",
  "key34": "5eFAWjJCMwbvv9cbEr7wmEsdr42Coh4BsW5qSmE5BjEBUWf1fkA81Bft9Nr6i8cgrmQjtrUsJy1xbRtRaia1LUzp",
  "key35": "2bDyeP6rZ17YLQxyYDtBEvea7GMh2UjetidXuX5qtHMNFW3qBwNDushqAEijCcxtugVZsfJaMqyGqtLGDGyxtnCm",
  "key36": "3A5fZsACLhoCJWMXiPYqSdWBop2HvZPnL2UC6dRAGVhXsd626CFcXpw78ptMcieLpaox4nsrr8Sr9iWePqpk8U84",
  "key37": "3aZXbjmjfC4PF2FaqKoc28vB9GXzQk9ApL4hfeP3ByTB755P9tHUe8BqXL9AypF7Nc9TFXYMbfHuuximQU31Ycyx",
  "key38": "X3KT32fFsMXw763Ezp4nGStGSgbHbkMnDsf8GURFSR4BSxYZMzR3xp6CgZhtx8xci2agDSmmtEVcYkAMeko9qFZ"
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
