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
    "36fh71qDj8VgQCypsL5xDRKGcKpQ4XewENzT9KyJ8NvTZeLHQw9H8NPVnyjaSjaoT3Trtkvop42kVvXo13nYRi8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxLYJwMR9fKjY8Two2Fw4TpgcG8Ftjb5yedu4KknUf1CYWWrwEdxbstVzrbFb8MsZ7uyY2FkqxoqoFaUBfCs5ZD",
  "key1": "3sN45746afZpk1eQD2BmRRwvWomgdF1LLKgEVjV2AuHbKEeZH3V4hd1zCVhJF3S6MkSqMtNL2QXP4khBYZdBrPA8",
  "key2": "Ddvzi1SotRVUGkm94mR1u3tqW154CQUZAuZ6wtNMhVMCEjMSGSXfSFy2AixZBXHWBYSCkbtZo3yNYLvWyWs4AXY",
  "key3": "5GsnSVWaZMRxgnvhRPUyQQzanuAPBVYRyd3gF2q7pHr3sGLr5nepJDSkp9Xen7t1F7BNKR1pqFPNbXvZBVCnvtxU",
  "key4": "5cn46DQieB73CRySHd8JameMhw2wMnWkUGmV43oBXZFmVME1m5TA5oLqqVLiffeMookeCUCLAadvRmiTnE1DtzJm",
  "key5": "XdEHt42pyAhXSYFPz3mxrrBZ4KWQTVZajYWRGFJ2R7b8bxoRmjQAzthhaCR8e12PQZuCMVCfkCaTrDXQu5Rkoi8",
  "key6": "2WSjveAihxBjExksLJdf6Pi1na1mfW7djFrvvyHrA7H84jEzaw6FEKQsLJB1Hq4gVDTegixN8JoAmLPCNtZhmqeu",
  "key7": "SBT1a7gUQwh4vKtgv6RkZt3m4N4aGdbg9uRdR6GFmtajgMvqJzREuWg8SsiSAkNFuLm4gSBtL3ahkrbavdRyKke",
  "key8": "2to9kDN3WPwAoK2syruFcP7qFC5HK9hTaan2zNtdcdRcWfjbJoH7reBT5zsw7vQ1E32QVkrtJeSQs2vdp8KHWNjW",
  "key9": "4ZvUJeZzgyQnNMVn8W2njDNr78Y2mCwZ1SsjKJFRKwKetstKasDfmNWmwvUxNYRC3rp8u5N3w4BEeUT5pyXQRyjy",
  "key10": "RdDHTFgREzAwZPiJHpebHUGPS4dZRWZG5BS13Rrc4hCzwao3o1xTvjeYefCCwFjDh6QSW4oikJt34EsAdUPQiPb",
  "key11": "iucdYLTu5G5KRzByTgx3XSdhjmp1HyuR5hetF74NdWHJzo9hWauEwwK3BE9A26HUf9vL7fAGAVGXBK3oBrYL6mt",
  "key12": "4QRbL6PmSyb1AJdqGpdkioU3FJGxGyCLuAfLfCrf92oUGtjprsSN7UNRJgVhB6wpoi3afns48gfxx3KuXkqXYEcc",
  "key13": "3SMiTPccqnPoAX1dRYkYuRbsXvbYD9zGMqaKk6e3ECVqfNuDN97N4V5JP8BV8xArJu4ErSCxUweMmPW6zJt1nRA3",
  "key14": "v1GZgKwgmy2i9fAWuRkX9Hok3KWoF2khCjX8DpAYy9P1ceiShE5qc8wqqtdhJ6fAnpPmE9KbbXag63Pw565MuSC",
  "key15": "5S3nrjr81KPu8zuYMTmomrhQp51VQ2SakjV4PCZ8C6Ysi319PDyvksAr6Y9N5vAP57gLJtDTWBzhzvHdiXJz6FAG",
  "key16": "5zDVYkF8d5dCZzhbd6kePSakPczPsTyeoPb69pPipspku6bdAiYdW6ybwbx8zeXtvLZr69TgcLLLdz4gUXFUX9gd",
  "key17": "3LWdaTGJppyT8jiuRFCXyWfDZgqfSq3y16YdHyxMtTVifceiS784riRgEMJvYhmf9CagiXTmqaHTfNpp56rYYpqx",
  "key18": "BzLi8GPqTHs7vf9nrcbdtj8kbwRSUagjJJWZSaRKyF7zZB4aSjtpkqGctQ9wuvzCesrx49SHAW42LE71nZ672Pu",
  "key19": "5fFfrXqd7qENqGX6dB52AqB2tFxwyy4v9oqtTMozbf82JeotG6BCFAG5MnyDmJXzKCkS6sAm2obHkbNdzxdZuWTW",
  "key20": "53bZvZMwcKVoxHx5C3aCaR9fkBtfEpbUyUK6kkNBSBu2d3SC2XKKpUe1u1mmhjQbsrJ2HyDXQfpfCUAxERC6FaFd",
  "key21": "39Gmj5f9pnp4u7AH3GrRUkgQMiAJXTWHDBXQ2gRWi11ehgLpXXeZuKV7uv67eAa1bSwUaNCYv6W691QbRjk2Fi6V",
  "key22": "2MKZEjQ9kZvvGAyUCWWZdg5Jy2aCSCQwGu4yy3L6YFxMbsKNU39jiztEeyh2T6LcxtgYXeJMvFbemakkuUmPXgUC",
  "key23": "3HG4rHrWvsVdyxF3pNLSGVKQZAX7RFW1ukZCXVf1vUuweWkzJg2gdifJ9CbhqcpPqTd9WGmpbBEY3Xyn5bxBERDi",
  "key24": "38Kc9MXYjTtJZiHxn2FqxEKQYzwqMLqjmaXE81V75DZCLzdqXFxGzQh1ATLu5ygfDVhmxm1wyJYVZzkwjtz3JWdn",
  "key25": "5NnoA1dLUpyb6nqixQC9jJZhC6iVF6wnYDtAQzpLcXQW35DVjHYQJuWJqAKRMhLhN5Tvtn4Z9MgBgEocZCA851je",
  "key26": "5BSjZmbXiw3GQRFxzsC5H6kbP3EES6dH5ck7GJeUEmSgwxsGSwcG5JBo1owMWmHE9Gz3UZ2ut9iPPj3ofKe3EjpJ"
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
