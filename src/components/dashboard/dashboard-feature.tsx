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
    "4BkQGCC6ZoG9Qi2b1CwjFVJJUw67MmFftFr9Yk4gSVL9s4KYxxNXhwnLMmjbgeLufdvNFbxkucwmPr1uLdRWeQiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HV3DZ9fDGxNfEbrH8osSEVA3qg1HUvcGnPUdNmPzS5wgY2MDKmkX6NDdyqAhkCvyvBsEHhayBZoQu6bfGwF5Kgo",
  "key1": "RZsXtdwtyak5gYHLqMhLDC9j5u7Mex9GCGFYci7bAKeZoHEfpWGpSBdrTJ3rveEd3nUVQhyJYhuuFSxJQVaQ8hF",
  "key2": "4sQkd5cRpkRLVJMRqPjKtmtcusbCBzwG69XNC6v3J2bfnBJuXiYyfVWFgxqvZBofS1RRW1FVM1PK1KZhd6R4UgjC",
  "key3": "5RuVBY2jRRzevFmK6amgBoPKg1yQiiASc6S5MW2sz7VBUHG1maLJGT3DApUv6WhzJCBGqBVAEZKMkynVt1EMe1BY",
  "key4": "5yXKfpoeye6bdwSFbFtAxjVKnxdXHTE9i6HLmWESU89cSidbXNqBf5rAR8rADoE5fJAN7ZYvRWaF9MFszDYujsXw",
  "key5": "DCXpneyUFmTeijnZn1dXPvmYCaJvr2861tLKGRUzZyELoAWQyPL4igUxyJG9iZGy9z8JWR5MbB1qUUgTAtJPeMK",
  "key6": "23Vf1TVefToeVihPDqMm3m9qDrnueNG6NcymbHt1d4fyzTv4XhQcpLiEBPdFVWkWk5xj1n8zikgoMCLND5aXvXVu",
  "key7": "5thvbd3EmM2XtCsxuyQWizBB2CA6BvqYbZSTQMr3dzmQu1vVuVv8n7krsYFHUqiBrwxzuhcYNyBgZnRtiq8mQwby",
  "key8": "4WocKftydBMrHVqkHGPrjuehozoyvXi5S8Vdv4ACvCABUH6Wh5RtnYko4PaZTB2WCsbvQsiYFpV9pzy6Ss99Svf4",
  "key9": "2SJ4ZPxaNWLmUR3qTy7QcGQSRmrbLAJjmXmLVX8JNTUcqqetvTAgE8TzAjM2Bk7XpYbT7oA1AMNTReQyPvhrJKtT",
  "key10": "3M8X5YZBn9DKTjd9vd6bqXpQBPqNddsoXqFeHh3PdtsbhThvDG2T2CDUNFWosaekjLRL4tP8PpUhuR73JdYCHtBo",
  "key11": "58xMtJgMKNhc5wBKZ2SUncJy3s8GSztHSzi8RoJHCLYF9ZS9vUpRR8VwRDqW6MtixkNBsUFsQ6DkmKXrBdDTLSAV",
  "key12": "54W1rx9eCBBX6YRcj64HD3STn56fiPAqYEgPYUfRj422D5gprtjU7CY5hM4jdQM5iXuFWvFUqhFSTsX16hkXEy7S",
  "key13": "5FtE55XZyxP3UE6pBe54pqeCGXSnfxJdozhjqzbMYU9uZfmcMywHBJSR3oHpzwXgyY2WQu7dDLxHfxTim5vPZd4k",
  "key14": "2XE4iADcW3WpFyk8J6G1puQkCC6gJS3CGgVxqPCNhB9MzNBa7oeXe3ohGxwxCCVJ6S7aNgYw48iVTAi223ezJAEK",
  "key15": "xZX9hVvU8WTBrQ1bFbNG4LwjoVakwVpnKb3sTWKgMCMjDt1Qv8C9u8QPq2ScEYoQMxTKHQZnJ6srwgUuMZQhDuT",
  "key16": "65hVvnS1PsjFEtGrcWSnFN77jt6VJ2gnbjd9UsKZQWduZJK6GavisPBonQ8CMU31GBtGzmBSP9MbtCEQV1KV7W8H",
  "key17": "5yDcswzPTKRP35i21xYmu7nZZGbPPZ8rQpswjxcqGvpiXwLktCHCRuSSGy9qTteZ5TMdckKuuTqkhfexBGHPhhsz",
  "key18": "5tNj2jT3gFcaGtvjzNzPJH6fy3mmnot5WFvoyvWmdfwsYgxDAozqaPuv8Vc7Tba2tVNeM3QSjYC5o6QRbpZaea9X",
  "key19": "3KNSe6CEPeqJUe8n1G29Xge347dmAnBQMsX27cyRavfPj9eTtYvjMV3i9uakSPjVBc96z3rq7Hv8nQzs24ToKcxy",
  "key20": "4mopeBRW4Ha8mEvP9Qfem1LS545vBCgzvcSPKqTJ9yaDdBviJZ5Lq5nkqtbhMbhkmAFiAEwihRVmyq225t6zs7Xb",
  "key21": "5AGMTxoizTeTJmHPb5AxrHcAnbZseNnaYhRfrWPayPJp1XTtPhd1TfcQeN22xfifiToh6i4Dn31qJhnJv7rsPY1S",
  "key22": "D823ZkJsa3K1SxXHCLEvgGLv4VxZs9xSKwoCi8kYma9L28LqwnxpAiNZYTTpjFqgU43SXFLUqQtkzVA9UG3NVwV",
  "key23": "3iVQhcNE4B6fM6JvmwwQPNBtgr2S6eRiNqJHDB8BAnUcXqM8VU2fVcgThCcguE5n1VdZYHzwq8jxw6h8c5ENmFcj",
  "key24": "4QukBfPhm2bhED3j7sTzvcMwHm1njg57NiFfRMAcCSFPSkeLeHSVBtx9ATQmaZ2aW5zaS4MjjkU1s6NYLPRuGSTW",
  "key25": "yaCGmc9weSmm1xQyc4CeLH5QjpNdi97AY8NsuV14EqibN5G8nyKb4g1yEb8zEFZYQmB4WoURQCJhWfcS7Um5LNX",
  "key26": "3L4SvebEFdQoG9ikFmn4373a48bKNRCTYzFTsxEkvBFMxX47uf2MMWvJYBhpSiCftWynHiMmuWkM4S17bvsk9SAr",
  "key27": "5ZqpURmM2rT1msmufy8sfxqmqk7vceovFCytrt9Qu6k8UaqxxAgx6ZEPe4ntR2EKigmmTJnTcqy2ommbq4HMCHTa",
  "key28": "4DtvmCbqXqBtgRk8qynUmok5zHkFHkE451xhNwAquswyfrJQhbJAxdCQKxLxdoCrRNo5iXB6Pfi5jBezoZTub6cc",
  "key29": "4kjYujeBuZc6S6hGuhkqfbDqcXgEdmQHfKbrA4MwQ8V8q8JtcTQTXDgzWwAhNkbgHidy9KdQusnmy6XrKon2RCHD",
  "key30": "5uibFP18FuGvNPRcHe64VVjrkzY5zaFhG8cmr2qpim4x8GTUwy1RhXHAHKbW4Bg52zDnNiDT3NkehgNvFUeg36TJ",
  "key31": "3heWdvw3usxX4uUy9vk9pzc7RkPHimSiQMdbeGSLUyvDYxvcrjdkx8SyjVbuoGzD3ffeNAvTYQzfC4t7YEeBq6Fv",
  "key32": "4ATaNL9AXm5ZJ72antvdpbT3DygMYxbQjLCodtzX7mx5z3sSmSsrmWGYBqJEgEc9Cr8kpWvfrZzS1GLobxEQdcNh",
  "key33": "2hijjuXP3NdxwfxnJjXBG2DRgeFHituzznHJC1MwBa9osZBZK15xecg4P1SLXQ4vLPZz7nJevndXDD1RWYKK5xHC"
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
