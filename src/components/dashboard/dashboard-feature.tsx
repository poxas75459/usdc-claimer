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
    "3183zbRVYYn3XARvC1jfTbD7xuRLEJCHpC7dETqtUkPvdDpy91iBX4HoFvz1mikBsZcYR9EHBVTWZ83KMrS6CiAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZUFYZfhhePci88njLgpfomhEFsVMaKeL3oRRuXn6KF6JVHrEeH117dKPMhtQVc1wiuRF3UEGqUp6unWepnyNzC",
  "key1": "4wWS5bDZoatEywTzJYFuQ7tKYQ2e7h7KVRjPD5GZx8cLaYSLtk2FGozGiF4Y4QPYXpoYgoU5vUFdZsz9a8UMYoVy",
  "key2": "4nvmvTYxUhCwafM1EJeXoDNZZ7nxCG933v1PrAoT231Vcu61iyQ77NF4PBBphqsuPt2Br7K2HKErnT63GknRuMGS",
  "key3": "43mXEY4ccJK1LzGYL5QFU7VLjwZEjrdgHQH3cq2pgeosp6Sc2USvY9nH4seiDxrz7m5ofwaRSFeyejE5uNEjgwjw",
  "key4": "ebvHTrfX2SPoG1oPBcbbTmW4CYz7C1wz1XmPg89gA13xh76EjkrxhbjnKNAccTZrkyftdcKQihvvYvta6iixui9",
  "key5": "3rgqcWjGBJawTv2Fi9vakCe2MBwcDBhcbtZsmPM7cXGXt3L6ydxCwdiWWTxd3CStfSN5ffdF91j6FwM2DLMZH3bP",
  "key6": "3s8xiZfAiQ7ss5oUmCriLyhCnanor5chbA6v1BQJYZ3EZWDdCT6bwPv48nLrcfk26brZr45QCcfZNdAGB1ZJuqL6",
  "key7": "2VcxpKb1MRJzphhCFXwfQwmFEgjUSMkbHP1XUGWYv4jxJcidy2RLgb9t6j5cmnHrSVpn8YkFyTcnyqohcQ5bN1GX",
  "key8": "43k1e6HF4qHBBq4gYUVKMMhnsk9hYgLC7oWHShebBvta4PfZzkTKvVjMmJS8Xoy9j64EdmdSJT8JUQyMEaLVmpDw",
  "key9": "4MBbSw8FswkPzv1UYk9f13VVuoqfAaUTnD9gcT3hHpUSkdiMp6MBiXSb7ewim5ijh8BTFFNi9oZ3KeEBCPzg1bte",
  "key10": "cC7caZNu9HsSUvqFFKfiVSfWFirbEqafVjXUNApD8CEXFtpt2hRp3rn7UtbP8HMcgCpYkc5bnEc964iVijxfEuY",
  "key11": "3Pzzu61yR2oTZF7zPuxcd43x84C8t59RevvkYx3btyhM3gMTnQJL2S74Hf5Zr2Mtkr5hLBrPFmBZDgPDkTBzpbwg",
  "key12": "bs7rLVpRrBwR57ZmKbLF5qqmD3XQDrBC3otVh1JYMQbwCqf4AgfkiRKkmESTENRtQYoprihUxVPbMYCNPXs8JxA",
  "key13": "GGTDuM5Nz2qmSLx9EXY6z5ZqoWWJwPp1TUkkVd7EPgQHvZJe3p26odZ3o5R1DHAHNZbEMdpzh1NcEx2whk5yyby",
  "key14": "2c9cH9q5zYKLteYJxMfkHizAbrM9w1xAqvUqaG1GPfYnBVt4ezt3rgq2wTwQ2ZwvMn6vsYA1a9cWkhzZZb8t1kV1",
  "key15": "3XuxMpPPkcAfLNK6zrfWHUXDX3JUywbbmHC2DpXvJN97Lqd3QKnUxMJ7YcSnqPPtRpniqB9xHfj3VDJJ7eJuXQWi",
  "key16": "48gnm9QmrkVK8NdmSDj9VQjiDpwsqiiLiGDXqiiYENA6Z9x7S5iemwTHZho46jCLhqPbJ149D7L3Sdd32k6eeMaq",
  "key17": "3xoyxuswmZ2L6vNaztbgzExU1rsurUftLo6M7Hq78PnMoNkaUarA7Ba35qfyPYxEF4ncjcYEmmHZ4S9nGTEzJWVr",
  "key18": "419zmr7spYdJd6fp81n9NVQQKS52ziK6GP9ZjQ8NcUTb3VDd2dySVnBkgQZQ6S61NbmnXmgvgkWm1LDpkrqPtWfN",
  "key19": "5eqp4kUcmDMVQCsExfbtDULhhCZR8GXxNevDBt4DjkEeSWXNAGN8FZvLpieKUcuMEPFhMVzc3u2hxwfx3vDauMG9",
  "key20": "4Wf2A2zSeaLsDixBqZvgEmZ5ad7T5JMEbuWBiHu4s1kJnzaeT7YTheyLUDMgqw6dSZQvP52pKTNyd9oerVVRvLf5",
  "key21": "57heQVU68uDgZrATpyP695JvVGDDKHBPFuf67QJySnd9ScUQfdAH1AmnfwVKPS7Y1uiJDLhiBfCyErJ8UA3g3seK",
  "key22": "5nqQx5wsWBAKb9tmXfdon6VHETENo5139Yzp6Tdj8rDK1oan2zzYfDRasnmJBNEhUq1TK2sw8zdKPvmGBrMPYtHw",
  "key23": "3d1PFuyoT7mX5LuB1WXDTXFV5bGnzNNjZDt5KWU4utinHMSnwgo5hWwVZbjbYHDCCts7os35gNBGbLB5LaBBPkwH",
  "key24": "5EYgcuzF6MVdrFMe5xcU1MJn7qi29fwxzxMgj7osar7Z3WZ12yGyAFySYuzYUZgcEeBfGNXGyxHof8u1qZXbhnsq",
  "key25": "3WKKHkbG2znZ4UkXUJDKWXquhcjLrrLGCYseHhEunKhNiZEySfMGKC6ETfLXQSWJ5V91ouEY4wqzaNUAVjtCfSwG",
  "key26": "3X8Fy6qohDchtCj7VEQ97hRATDbJ4fQL643oXK96mypskbL6obvR1gKcFozxbfGvGx57pPzapVo8qZSJmMbEzsG8",
  "key27": "3QpDbFHMYf8rPyr7qwkaohp78roxmBTS8rAiBgmJ9ACqwnbcFfFGeRDhek1w3YQbJtNBR7EnNG2fStpXeV4HGfxw",
  "key28": "4EYMzmuh5AQ9NVj9SiH8mSj7B8ZECugNr4no8tvHrNNXocAC4YDKd8GCzariFbUzhkqEN5dDajnSyGisF7TnLcVJ",
  "key29": "3vNPAUAe2byjZQKAtjgqnPuJx8hiT6W2ieSoAbKUtqKw8LyEipUJcsfNHSJnoTYBpijbkEcNqSwjYdVmjait788T",
  "key30": "4gfm9obXMsekwuthdpVnMBhEQPxrk5FJnhjFvdEKE5MzBXHMMkDBmkq8u8N5rNKyTuEDtBQinLPMRKYFR8nv7R9z",
  "key31": "58psZVbRnGUhVfthuBBag6AFQtDHnUc3hC72rj613UCo6fcmxWoVFC7vHaGmiBLyQomGAMGLJB6fCDCwgKVhxJyJ",
  "key32": "5hPK7U1aKrfDckjFhBVNsqyPhARnVKFKhd2o3nw3NRB1p7qbsqXKjdd2YpJGaGWtygJbHUqHwt4X7GBqQ9Tdhwiq",
  "key33": "3JSFDs31KCupLMCbpHzcz5kF1HdzXPrVj6XgpCwjuEwH5LkJvRMVZwtPNnvRidq3XzBvizNNSkAyKFux2Rxp6ckE",
  "key34": "65vrZXyPdoWpFpvtZBGAfwKgizCH98AgUGCLnqaovMkL1fuqVPTkXkDWMAya9cBTTv8FbwosKGGhoDanUfeRQzsC",
  "key35": "4WLytUZ2VXmr2wHjbyQBzitMcNp4MDiWSVKS1Hd5TaUi2TuVmQufKVY2MmZGDkz45xFG4QsYTkfpD6tauaZunSUe",
  "key36": "3z5xN5Nv8KVL4nx1SEsfKqNkYFE29yE7kUFzgj54mKta75Tzmc5AXYURcao5PQxvPUah2NbG5it2mohn7GGyiuf6",
  "key37": "3MW7AE83ca8n6vRwv7wZKKAntGXU1deRhZ31PSwPDr9uWktSN4SiV5Ge3vmK1tPjAKoo4Wvxy5oxPchDhZfsEJCX",
  "key38": "3qd1bk2GTeGXK7ioxSYGaQNWr3upBxCqcnbkrfi7hhSm2UDYcQxCg7Fyd8De1kZkeHXS2QMc8S9C1kW99ZCCfoBb",
  "key39": "2b6Qzw5KnxHhJ1yENtPwZHaiXRAYajgkChGfrs8c4WYizbx1x4XvZLjampDWjbMkLwZk9EzMhJtYKuGMAUZaUWGY",
  "key40": "41sTuu5nzRUqWkyrqXj5kmJQPi6BUaV2Yz7dSv3qgpK8GrQRZvS5YiPzFT26jg3qV2cjtachkTZqQ7P7UtXRSXzQ",
  "key41": "5DsF5kbYEaAhdm1chpJcY75NWvt3b2BVN5rqsnCMeDLfgNau4yXQUUhsddj5Z9Td91irrwJqE7YBtmzqyGwz4BBF",
  "key42": "3s38Y1EME49BdjFxUZrsxwKGhMja6fnRDCNTG8Mihk7nBdsTDAv9Rb1atB5JmdbCVbngNrvVANx7hVSGvcK51r6t",
  "key43": "5m8CjjEwVpv9sTLKYyVfxo8wQSsNMPGbdZp5Gx4aBEKATkFT9GGxXam6a3VCSehpkkBTxquSichYehD5NWz4g43E",
  "key44": "4FZKPkvS6jF49EgH9RzAfTeVHJ61rbqN48M8GGbFVWAQzfb9ZkJzF3f8eRvEZesnQP3ztXJgNLF1Ljua8bDXcdUT",
  "key45": "2tWWxhtb2Tk9dSrG9UcRCvmEUAubK6rAzHKCFFnvF5BezYvzPGmzGW6U45vVrCPR6qy3E6zuQ9LCoPdqmdVXn8Ui",
  "key46": "5PF29QEAEqq8k7T3FX4JvxMYhmptRwvHZjp8oB3Fh37KbZdVSfGtC3ZnpQ9V6Rx3Q6deRtv2hERvfWcqhHoa7t8J",
  "key47": "5r7afXHvmfFBDskkpJYYGMTwA1ZbAL7PPNQvZ73pwG23Pm9HfvyJ74KEJKoKv1R2naYMsMFzxMQmXDJSaSanBfrw",
  "key48": "46Bi3qinwouDdwUeCdqNqvhDqVQPrYU3qGM1CKrk6mCojmeu8LzHwPXJ4B6a5zrgvvxSswZqQog3usYvx4CrQau5"
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
