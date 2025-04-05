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
    "2f8FoN3weK9xgmVqrcVzVmkaW1zZdp5yxNGqABMVUkfKv6zWFCvyjK4tRmefYhKdpCowYPUxtoUsqjDm4KVqzXCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NECtZveU8ENfsFNKDvVmzuYAL4mFnVHvus49LqnbRwEhuJxTEfjzon6BrHYpB1wMogAChVkzEtv5eYTPExjxhdB",
  "key1": "31wacULRUJrpiw3aC7ptENYtbgADfGexfDQLft7JwBCzj3kiRNw6MkY77qC2pLgNCkDvsmDk2z1DnwvsnHrL5iNp",
  "key2": "3dySUNtuKdC2BSn3UrN3ibSuKRoGFhvwxbd99rUpzmiixBNJgQULVbjvkLU99xx4nZ2tiGeSJf876aQ9JQpPoxZk",
  "key3": "5AEUMGiaeQQ7xLfvDhZ12H8PSXDri5TrXgqaRrE4CyqzC2yEbLvcaY4M1jP56386UZ5tzHcke7YfemBWbPZmqaAA",
  "key4": "33CwJFrwHycu2TiqJk5ZeAK99wKhfzXR1aqPax1if8w5R56gG2ohDpBbQJsAxLsJFvPpoQTdmJ2vM965sUmP7T2F",
  "key5": "vBGty5Bt7WoxZAscD8DHeuurT4JT762BTETn7nJZsvgBE6BKKd4djKQf4Wd7zY65FqXRt6ecdFwnVUYE5CSTLzZ",
  "key6": "243WxPLnbBa5djbBciYcpDKGoTVswYF7qFqPUKr6XbyefzV4BwhnpYrjCiyPrX35c5aDB1DdFzYgZggesGGy339n",
  "key7": "5QtVnymKfq6XtpE86P9v61WS6ANvy68ULLKnt4HTPDrk9bht5tqJKS2wcC7efRft9W2gMmqBDYXdHGwmDEoB6SMS",
  "key8": "5XFq1fxkNm11iHKcnedhhkeLVm5YEmsA8EdopTg2RjHk1HPACb2MS5oyyjFNSjCfWhZqKWL3ycb9hTP686khybN1",
  "key9": "3dcMac9L1nA1CuVvFfgEfe18ZbGP6agS39XdMrLya8JWokBQTvLHrdJytju9PWcR8KyYVAxH2LmSDTvRu4uVmPev",
  "key10": "5KCp1HsCc9rKaRGC8xWw3uCLN3CDsG6cdDPAUVPCuGVT9z5yCBtz495GTiHUWi4ZCFAD1CZJc3uAkXipCPcA2NbX",
  "key11": "21wqiyVqhYxyzR6Hw2Wy5zPmCSZrbjytiJoo915duEHV21nFX82wqea5413pf5FmF15pqgxhbanFQ3P7yomHLMBP",
  "key12": "3jgea3vMmxNZDvisfibC3sfzLL7H3kKQF3BiDHBvdmvNDm2CjWtaxDvwm92mg74MfCyESSLnkAdepDNifdf9scNJ",
  "key13": "BpVHcMJiRpt5XcNurgKrXRWj6sbtHmrwiW5fzcCDz9ychzihiQwKt6cTY2PfsRVZ8RXkRrRPgpYLaQ8PDmC1Bfn",
  "key14": "3NFDeU4o9rE2kssBugrJ8P79qBzBZTSScNSptS3BkZASNk7ekYxPA4Wzfxk59kKv74XfKuuGbXG4dKUur5KeuZ3v",
  "key15": "5bmpyiFV9sj4uKTW1qXKLcz1GcxQLN2TPJR1BTUnkU9c1Npvu9oWpGagbkNEe57FYTViYjL3H8C4psWKwA9aQbeS",
  "key16": "d1H3mp4vvjJEPqjVQoBfRsjz5cZxsnUDBHrUiyhKuUqHTmortPkb84zMesaDTnvGoKRG8xzz9SrhLoBY1EfTCN2",
  "key17": "25hUEDb6KBBp6XM6JpahBodYhouHqqWkVBPzV5N62Q5FrMnfgGHe7UZLPPSzyX8s6PEvq8STP7HduedFmJZNJi8N",
  "key18": "36m4Nfw5EcBBs8KE8KfMwt4sJfU6gJRQEMtGGGHXLwKoVZgNcjDAxxTPTrfkUmRhn8nTae9f15Z2g5eNDRGTjnrx",
  "key19": "4iAFNuw9Y1hCbEMoLtdVt1w7f4SyXVKbiYmcZ1ASNKiAXK3KujW63x51Gsd2y3WL4BhAR71ouzZQubxTU3c5oCYq",
  "key20": "cJBs9PEh7L75NK9mhhWVSDtKesMJrh5wbXfx9KehSeqo7UvniLTE5Acx5KBfp9KDntGFY5aENKZvGni1y4H6zwk",
  "key21": "2Nus6gL4SktGaHxxf9C4pCaKgAJR2D2yG3hFVfkfVnvdFKDhBVwGRhKtH2SkVA94TNmi9T9CDMgiAKfV2mHsXyWZ",
  "key22": "8ggoWhC6YS8vNy46PMDmPeRWnbevMuMEUxjdFPb8R2eua2S6yWXLMFdsb2MQbhsrbShj4swoA1p2zh68oVtqzb3",
  "key23": "4yaJMSdJ7SQRMRcaBUh6waGLWzri68Nhab5zuzmyWqQX8qwFyB18xi9mBANNSN51Y19Q5KVMPFZTmB8SwyEpqQ1M",
  "key24": "2WBCHwjnxNNHCaVxfzaT6FfBNGsmzpPH1xveyHYs3butNFn8RftLm9hEWVcCvScXLBHcUdv3ngH8pZnvgSYnFdKd",
  "key25": "53CmeN4GUWAzoy6AmuEZs4tpFVkRePDMWbuMYnvExHqJDBt9nTbshcqhLcVkuGrF3uSnMkxbiqKS9yo3GpNaz1pp",
  "key26": "2uUNUsH4VqjFg3NdWh97CPHsnuXhmvVLUwD8mdqkdHh9CRy8Ln5NYQA53fBF1qWKg5TiH49vih5UwUPTzYoXVAYt",
  "key27": "2fw8PtX9L5mF1dpHifLw3gTTykdsUgvq9zhssbB3fZvLZjck7gWoPBbYQK1a9kVCSyngdBEmsyKbGVEoMVf2XLEq"
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
