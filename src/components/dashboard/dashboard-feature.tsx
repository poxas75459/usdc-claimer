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
    "4DX2fvCW6gCpfQJY8WoXMDLZXH4cwfZmaNYW8Wc4Vdf6KN3yveQohRpw6cBwT5mtdPdzuUeYRnRNDm9EyVRi2Kpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPcW5Ed5YVm7yVj7wKZH6WA242F2ddFphWV55jwG2EfQaGw45cwJ21wdqLB7zvinLZAsn5AmPEmY1psKb7sP57n",
  "key1": "2iSdB4H2UqCZ1ycfSTUVwJBTxr83N7aXmiGEdWfh2zsmGEZst6q6Mg8vDXm7U4s57aX691PAxjG2Ek2ewNhp9tjP",
  "key2": "3KbSKNDazMFC8XLWCuSyNmYFtHTdvpF2WxBdaDkqMUCQ3pxwHwE7M9TXxqNhn1YEvXJGT2At4cNRZkLB9n7XwkGs",
  "key3": "3HzRbZ9UJig6dTsRyF5YaxaRRG9ZqThVGSJeEgxfU9mvHt9iscpmcjBBAJD1oGhk5HXYvRZS8nxcwaeqTLHBPgGR",
  "key4": "4fRGZ7BLCdrtUnrF3nHd7Ms1bpe7fVWjmcgzCpSSzxSUn1QrMg1RSg8sfyv7zJ4WUU5hT7nyq5vHYWubreLfDLyo",
  "key5": "3bkdDwY79YREVp7dCGXEB348eLb3VoM2bFFmx83MeEMAN6gBvpJuwiSfKz9925i1YgBENFSNNa1cDxfKiV8xFazC",
  "key6": "2cYQAKwTH1HVESL8PxJYxbd7k5br9j49ahsbGPrY1LKg2R6iHgYPnM5Roh65TGAay86NmcXV3EHdkYJroW1rvsmz",
  "key7": "5VcP4DsEP95c9QNnzrZ8KwBf6Sj5KV2eFRwZ9gk2K3YvW8XQxLmp9Nx9TsHBNmvPHGPPEsPMCo29Bw7W4eryoDVn",
  "key8": "2CcWgCnV1WkFooHUQ6SiTXVKP5qJDNV4LoaSd9VT9k1qMgCv5bEcrBJvSCGtvsKFQPUcG3xYrGBLySJTv4uNFmyp",
  "key9": "26Vwu69g73rPM6qYbSvXY2cLwYNCC2zgsTP3q6Tr9Vm33zvoufD8Y7NUCbTsjSaaNmF7o44jHvrkGBRVEhXycmxa",
  "key10": "4U5jCcSUFL3RChevPuZhGFEmyzjDZotdsNj9v7accikuoCoXAiAWBGu55SLpAsHU63LuhGSdsYpy9SSwpyoS8KY4",
  "key11": "5TnZWFnrboPfsFEucVtCYDotz9ktGDbShmuhCRgct7UteT2WRLQsdaXLmhEFQuRJt6sqHiG4egnPhwSwXbiX1Jin",
  "key12": "5jG9pPSRsEVo8ntoA8KdHqKXbhfyUzoepo2sWRfjJtp6p5fpT1HWGDSbZHroUYGwpj67tGvBd18yEnkkJcHUZ6Ty",
  "key13": "2zzHxrbqMBEQCxRurncDCJ8qehvQWsdrj6DdPWxtC7rjLRGNbkzjUNJpr6SWR7nyX1kTU12skVUvSEhpQMU6HmCP",
  "key14": "39mzYBjTv4YAZmtL1pWLk8KNQDwK9sMdumtauqskCZioKiFkHALWgcjGPSuM6BWtDN7sQ1HzXgozp8X1LHcNtF8M",
  "key15": "35yURLrzYSpjwaUQ7D5a3YUS3wjwpkWBpmH2sZBSrzm4kTk4XQjHbDnbnDXKejJ6XdQeRRyoh1ieWqmVsKGHKS8o",
  "key16": "3rLRuTLxAAPrNJpyyrS8motDvaEf8TTrbj6eB2d69PbGu12FMkaSkGfM2xNiaSQ9yryRtXJbg6YfpQ41ypn7xMDS",
  "key17": "5FCRk9KBCkrqRRF3aXXphTtCR6LQVB8Br4JjmCu8R8CrroHPTxJkDdkvVXFaATfVsQ58iCHVDMpKK1xcVe8UVKJ1",
  "key18": "45H1jsLViojHenJwgHTah4mAHrkYbLZQgveo514bQUG6QPgphupZ9s6VpG7zwrRQLX4ETmANTTvSdk8ZxQVkSCfQ",
  "key19": "5gJUojPFrVPEN2cZRbi93EpDSnhgc2ejTFgrhNCX1utjCcQeF7sJjNcX2LBKRt1U93V2E9R1kYjbUxCwcwuBhqKW",
  "key20": "2SaSWZscn7iyxR4nbzirLzDWeFUutKAcRXXnfYGjACyz8ydxNwMtevEJynMamhKrtzMpfytA7tEc6MYXcB5DuaBC",
  "key21": "QdTxR2Sx4AnzLnY9RSXRb8cu3ozyMXxypmyN2cVkmiy1JdkyTN8mGdzxDzBwcBi25TzunpcGfeES8YvfWjSkHw8",
  "key22": "4xnZxYvaezmJ9uY5KfAqhPDL439HZN44Ka71Eeomj2G96gjpzBZD39fomGN22KqMdukAb4iUPo4bRmEBXsUo4dck",
  "key23": "5hvsmGxs3LQea1MGxoKkrHL6NJ5p441pCNjdYsKU23Z9vFzEAaxHyoveKaCB2cZTRrE2593f8epuwAbrtYVP33cY",
  "key24": "4myPEk4pea1Egov2wncCVHdgP1gPkmYkSfEXx7qTDrTEJWU2d3vehRmFx4WLZEuiUNPLDnLdQnN8FSfc2boHczyu",
  "key25": "FANyX2Ss47M7TWW1DQcqDwVTP6RHBYyPwNMtYiyipbQrVBdFRcCUiBi4Jk5C89GVXszS67WgAmYToqp6bakMpN1",
  "key26": "2cjcYagxLRf1nYFESuWAJKuKKN3cxEHfDCByTbh8jre91tHMvCGz3YnapJfbzRzccbAYayJuAuwuJmjanX7AX4Bv",
  "key27": "2h8gAKBmzXkZ8oYiQUDUqHTbFmyMFa6SzWNf3bsVNMifDKaqHDG4XB79q9N84auSZPXfekZxfTEtTtjNmzUcKjEC",
  "key28": "5tS1jT3CdLJafieA27PdDqFytBvDueDKow7s2FMN4QKv2RdPfoTntfap68a8cdZHAhtmcQcffZNUVJcKqbuGQYwe",
  "key29": "65VV8D1pDZFeZRehyMLGLDd8W5J4RReeqGz4us9KtmuTivdLsbnEBVmUQmMk1UydTR85XvWvFEzYEEgaSLsGZPag",
  "key30": "4SrpJhtPPpUEDDmB5qPs2pVk7P5DsTwZ5VpvD6zLsJFqDoENV78wY5CteAHYSw13M1t7B2R82dmAjN26wXRU6atD",
  "key31": "M83Gai9E2CY7xDjV8zV2xaZ7iBZyzsWCWn6yQzscaH6tScTHVne9PKD71rV4aCJp8LK1KDNEdYy8VRs7A3iuA7Z",
  "key32": "3r5NoJitsXDuvu9MkkGVoHhov9Ywu8tKETH2YfDiYHiZr4srjGvHz6QZUiXTnrAAmpukF1WgwNTt6daZnVLZzG5x",
  "key33": "5XqpoKZSqLfk7LncbUQA9ChtJokAHgjfxkWkNFK4JpMdTyVS1uZS1ArY7ryGnLyCeDE6e6Jmy1kwuBY35qohzV4w",
  "key34": "53gJiRWtsXVwjhLxWti1AebzhoGS6rVc8zH2zJZgJa2Whr9s15jLJ16AE3DaEwmHRP1DM5cziFNm1G13wJrjA1o",
  "key35": "3xcrP6EtKCj8N98NPd7WTxQfrPG8DFiZYK5koNbN7hVm8oB5u2ARRo1JNKhQvbkwAx2pYzRWQViveLcw4yZJsFeJ",
  "key36": "zVior24WK6dtm9TrrG5p6XUaXDEDvCAiJKDS5mw2kRR8bfnUBL4sFK8uPhFssFxEnAcEiRYW8SDfq7Fhh21qvPV",
  "key37": "51kNoekLqu9Gw1Fepyn82iqKMz3GHFYefPkMF9n2GdK8UTWkcBfrVo1i7j6B99Wvk7hH8bW6Eej967TGKu9rM2Ua",
  "key38": "679o6HzNpoEdjqfHsesPgRgcbu3Bic8nkndsfY4PNH4ZAAc88r7bK1BRQH9jxqDJHvawM9xgBJxSibe8wYHHxQzt",
  "key39": "126bqnYcjjsEsNka2iYAoYVZVK8z6W1FMhCbzFY9Ki5VNX2r7sSWquNoYipCuA4RPCBHeiqY49bPGMFzPwXwNkPH",
  "key40": "Kvn6tJAqoHzSGkoSfjczAEkMZ9bavRfN3ztGcmYtFbHuAtvXkVhijyYqFgJJKeftTMjf6ywgJJKQsWD4mRVHiSA",
  "key41": "28JGXRpMoQWdSmoioCC566FDn2btEiohfzVLYFvp78Q4wvYALhEg7DD6DLaeLUy3ZfUfuEYm3wQ1T1RaSZiKAj2G",
  "key42": "3QBtZRYkEw9kc97NwxM5NWtzeUUkV64C1PQnUub99cV7JbaayEfBF99XzJCeUYFy7fMrgRP2ZgbUWjcAApVmbykX"
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
