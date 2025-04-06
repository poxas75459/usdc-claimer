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
    "3Tiwzt9BJ2FWY7vWsJsZ99H2Uj9Y6Pk2qYY1V9V1aAnuwy4NNetGVHYrqDtYGWxVWRrRGn1oLnLZqR2YEqGv8jFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8fS4sdANyRr5E51Dy7Ajqodg1uc1wgfLR4NPUvcaakvENPoKgGB7wuL9iiXCjgssHjuQBZ3EEeGn8V3sP3wS9g",
  "key1": "4WEaYykP7mPWXJxLWF5UqtrsbnqhW8Cgse2TA8ec63wWnC5EmH1r8QjjUQz9BPxuTu27oL7ZfkcAJSM3M4CbFyz3",
  "key2": "44D9GMdwof6EPUMyk2rGAtLyJVKgmjPPczeEpXB89NCs7mV1DK3cPhPm3BpB1HJyERfviy3BVm1VR78rovUYJGga",
  "key3": "4EARbofkPGEgwXanxMFjpuCEh5Tu6U5nzmkHyKN3gagDmvTetEKgPNfqJaXcorwWJXiVzNDX6KmYYmvJhB8Npo9Z",
  "key4": "3sexpxaDCkiCS3JanNPBTYHCFwo9bbchXYAxX3EVGuVaQKc3DDK8M1Gjn2tp82QkqyJJfxzEeYMFGwY1Da9aUkpN",
  "key5": "rk85gYi6GRk9qs6YaKmr6oP1TyyaMpKUY2bDshHhvyb29YsDab5gfUNGjouTzhdeRpbeb8PEncQYRSfefVLW5T9",
  "key6": "9vJRPpmsSFc1xNKL99j1CFrLhJAVWfaVarmaFgGjoCmxnSN4G7YcRNLK87Fg6wYYe99Bcc88jVeYGAR7fNqRK6C",
  "key7": "5dzTNTzRtUNLxYjvcPELDKZzL7NuktCdF1yogQ7aLU8puApcyRfHXaaJ8BqwFAdvGrsnjSG4CeRybH2Yaa3NY89y",
  "key8": "4fA363avUTnG4Ve5NwQQYg92JqykbXwu5etATd4icLRhYaQgD46eCFGHm373znXz6SfrfVB489BRjMNNuM2SsCvg",
  "key9": "kQ5iNYW7SVSjVfdkxT43TamDZcotWsDavLYh8h6eT52Q346xPC925Va8jAfU6x9sfinJdr7x6NU4aksezcHmUNx",
  "key10": "5wNhDSSThvw5kriSYcHahVvQAH5MyHN3iiVV6EghbU73PLjn4k2zGbXX6An4GMNLHKYFNhqyjHzdiJXBbgj57DBY",
  "key11": "3jo4dAJjNjhN4KwCQSU8dq1oNDEWgKWknd4aQnJyN73ryeEBrtJRy1YQPBmfp22SEJdV4EBX8gDyktQTG8xeVmjF",
  "key12": "5f8zawCTvmxPrdAG4LajpByL9pDnhS6ESa3W4Y1PLHa7RqZsa4qEC9N4aw68nLKisMLQtkriMFAbbYvA1pu9DPkt",
  "key13": "5Cg8b88ybpUqMFLqQZfNUBhDktwgffqiykER1w3AyuspWxK67uccDyEixyxfZUqb5R6ftqQMvy1CnRWP7qacguEE",
  "key14": "V5p9syiwE3RyadTMwfwmBveTLRcWFSe7y9acbNmYJDD2QzyfXHJ9Nzd2pcKpHehzavXFmdCQ6uAYVQYXux8szND",
  "key15": "4A8oNux1xyRzZBBLBfyK7iDoJDjJgnKWZL4kykfmQpoDcs9YnQd7XaJ1as7dXZvATNGqLscT39BkuuBVnPAmuNnu",
  "key16": "MQ5yv8zgFbKZh9eukPpjebhYfUzTcPvEmXbn14duPUCyMD1EZtMJMR4q7Rh8YLZRmcYhLimDGYSZR9e14tWNare",
  "key17": "5MWvG521qAxMFCJmj4G5h26AJ4y2RirUGLsZ5kgBj8ap1m1GDTMqyobW5eqHnVinr36Rt3eQaZkWNRZao6ju61Kg",
  "key18": "5MDtN8joepMpCQaGgjiNqQXLysiNpZiwmV1ee7XEGzAkpAntUQM5N9UGr5jcpShKZpgA3JmbyryEcoogpkkadzzq",
  "key19": "fPnZgQJqTfjpnbbPB9tDSfF6AXGMpvNeBeYKyXB9wQ83pnLXTRvr6VWvP7gDHTWqnh18sRR3QAjjfLkQNeHp1z1",
  "key20": "1D4foY3iDhR12Kw1v6HzxtG8FAFuQyTWbpRDaDtmgoDQoLfUN72T6wQFNKsUDqagE5Dqoc3XPywAofoBRAAyfY4",
  "key21": "4yzccUxyid3HTjtJ1S2RUCWvZ74beZjQzuN9ZTEqyebUwiYDvtai7g5vwUZy214E2WRB3fHfT5jsM7aitUKzbV1D",
  "key22": "2p7aiR4bBFgymfCTrw7ANr5cpduhfk9UWmMES24D6zBpt1jun8ypLP5hdtdaFhiGnA7ptTiPEBnvqyb8ckTaEvg8",
  "key23": "62wbBAFeHMGLSpwA8t6iZUrwcxz5e2zSZSrmWLCC11pUd8aXacDqdByi9bFa8niuFyKepxZduvF87fxHQptGzLVZ",
  "key24": "65Hggnm5jKeuyGT3iJRCSt7uoxwBJPmqpEnieFrGjCaTBgkQeYFmUm3dK59DUHKAcLHXDR3v3gyFbsMYbUYyP9qh"
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
