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
    "5M4mnvpx4dwcUyxRNp355hfpyBP48kUUYrZJ5HH4KeuY7byr5SMzniWXkU2X2uGU44Gmv7Z22QmjF4AW43dQqQ3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZwxnEN6m7cGx911uRt5FLfxuge5XfwsSoN9j4wgnAhd1braTFZTA8PZ5QHspyEzJ7Ya5ry5pC547AhHzi2PiEU",
  "key1": "ezjiEEqvTvkbhipMcv9FjDYXfUEVXvzL8korgq8q5jdoWVqEccxSuiWFd3yhqx8B1Dsxm9CBb5Roz7HhBsjUzZ7",
  "key2": "21GmweaV9p18bksR1LrCAMCf9V8VwnRuLyjEAYyDqBya5RhNHmQtci75AscxwfZqMh4DkEXRcQ75tsRCTLZheJtU",
  "key3": "61obcJYori9craLqgq8QSo4ukaX68aC6Rbw7Z3tZaPRAWwtK39jSfFCBmLQqs23vfHevrC2yxVSzbCbfyY8SW2t",
  "key4": "4BVXdxJRtaTQzLxq4NCtkre3G2UYVCi44FvSqXGXFKiwRvLLacvTDTpYFvfC86v84QwL2Fgr9pFCgWAJTKXEzdxG",
  "key5": "3co1ZA1R2qum6YtfA49MXu3cK8UHWeY8GKZEyZV2WiDo9YD7DABC95tLcXhX6gjhBJ3fUgpRq4tcH3Jqp4RPdxGd",
  "key6": "23ayupKRH4vgVBibPKtuFgK9awg1t2XoRqUtuXLxJzHZzLv2gYPHsVhxE3jGd163EmZN77KXtVucJmSucfBGRx1a",
  "key7": "2sW31CoVLhyJxW9hUCLaZ1Hy7jB7hjVV5xwLemN5KvzPcfPBaZtzTVX8qJBEGwEjSMxo5F2kr7eGKTUPx3xueJPd",
  "key8": "4iSrtYkFSAQZPojtyEoeAANJmt1xwzDZM7vT7phvmaZyS4wA3B39Fe3ZiWKxHn8fYpsTQkk1YamYRL4gyWBRNu1E",
  "key9": "44bSSUmsYPFNPUppqN7VLoZdSqpnnEsHbuZVosTsjcGC6Mr8M77buujdj3nihJz8hLdfv7a3Z2k6YcapofyTAXbt",
  "key10": "49jQDq5aoEhszR7sfELsrVW28jx3xf6F8d2TeK4faY9sqg7sB6bd2hzAqPacwpEGJmEHTxCxysxPo4RfpPnD9nmL",
  "key11": "3zjFVPH74pNt6Hijucm83ufxL7JuTacCseUHzoFxKMk7TZq1BG4sqenZPBFqkyALwpfACKWt7zaJ8U8QMC4PnX1N",
  "key12": "eBkxaNJa2KT4SzTUWjToJQyNSfVudzvE9Gid32popat3T6mXihu6qmuDuS2yqFdpzXTZh5AS2QWT77EqMpwAAmu",
  "key13": "5nRZtora6zYxcFC9Ki5TsvZxLKeq35gEDioEcwtrxePGg6hZ4aApyFP67bnDtkh19HqPP4XCjN5Wg7J3ckAemQYN",
  "key14": "5g4ZkqWQJezqabCtgvYWt29P8jPbNaG1B4uy4nGGCWL56JhbRjSV65gWrRrJJCGZCWxByFa1iVrc9s6xog7wp42C",
  "key15": "45HDeYMZLbYQbMkWpzKuRwvvaAzYxAfWjTiZSJB9FKQwaQ5oBH8Jhb9N3KSBuoxTcUxCD3C2KzyeMkjQ1H1GTxNf",
  "key16": "ijfscbAvpbYWwz78U6hLLCUGRkCeoXvxCNtmrqALTiHscKy4cdD7dpBc8YHnXHBL3j1U7hnmppMRh1NfrGmvn5d",
  "key17": "26f8DrZRLS3as15CMFyNYB6jYFbX14x44oFZTjoutnRG62gWAm47BFbhSHjP5H59SudpDJNqMS5t6NpuM4Gvy3hr",
  "key18": "EiQJ2pJQmrKenUUq99wfqfTKv7cZ9AiQW4KGWteomBYXZaG2oowmCoXKCYyDYGMzjrjJtUSMybLHHWpKA3G6DJM",
  "key19": "5Moc8Tr15iUrGHKMXNTKVYWNrjCkpC44vsvM6C38TQMTxyQFSB8QbbX5T8bJAQMeJmTp6GhBefAaWdjc6dUwiAcg",
  "key20": "J6g6315QFbEg8YXM6kGg7oukasWDFkTefX999zkhQdNEmue27y8nDWJ9ForvYnzKp8zfcMgktHBT2pGJThyFr2E",
  "key21": "4tz76xKCB163nG64he24ygCnzfP1Cy4f3wX3cb8EE9b7NXLKfsxHo84mor47yTKvL5GxFxhqioq9Nh7gjNTG5fjW",
  "key22": "4Xb8NHLhcquX7SxYTYqjyjugEqizC3wNPEKAJui1N4VyK2GYKeyPyxuyprAj5dTBo4YULL5medPNECAQDMSi51YZ",
  "key23": "2HNsqPgsSvim9v5JFK7JEpwUtoJ9KMVU7ZynzpbNBbejn3H3Vh6Dpp9BtPytEWU4GzmZ1PweofGVP762aXCZZeLq",
  "key24": "WhXcKEgGZJr5yTnQcZRJTeyP2ai5ppiwwLzTbVTmGtzqUzLe2PWurdJ6wkW3jt2Hd4G6sP186igztPiy7oJbtX7",
  "key25": "4TvY5e81hNrEN3H4jkZjQm27Fzm4YiuiXNfSzPBWXxGpbaqoqFve3BacqyD48GtgihA4RQPyRd2RthsFgQcZub7F",
  "key26": "4ZmS85zoXgJyZSd4ebhz71PQah1v2bafhjbYtGzAvmUKkixk6pJbuYkaU15F6FHH5WcYkmg7aYrJpCFNxLWbfoPQ",
  "key27": "4bnRck1pAKX12Gc2WbnXayqrMMZUc558YVaJ2CWUxNypzFNFt8xK6bVWitkGXLFxQ96nokTJK7oy43Tpm6vfwCBx",
  "key28": "34gR43DdmK3crm6wHAPH5BVhuM6VYsLYTCuYYkJsy3u2cU745Wx6NjsX2xHuPRLVkt1h6j7FYCsER5vqKQofqSns",
  "key29": "4bUBvq6vp4XK31cWcgEcuEZkXKPTngzMbfZnmoQFNRaFomfuivEARxybYDyvAJGEKmkuohsRLn6MXsdrZDXzoXPw",
  "key30": "zfcKxYXgUQS3yH5agMDQik7eGKoPmrcvLb4NNh6ppp5GoSakfsUjppxjozSTgB9JubM1BUMG9AXXRbEWXmtBM4g",
  "key31": "WZUQHcybJwH2YUiY5SmY7XFsYxyVZMLF9u5BQntvbyyjDPQE8pgpJd2jbGbG4QADNw8w6ojWA2SJfzDVfNV6SpR"
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
