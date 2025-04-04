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
    "3sXfWTRZP5v2tyTNdXJXKvTrVhfGt56jNk6SVcHGxeSSpTWrzZ6eQd7xGdj1Fci35QVwiRukMZJDgCziy9XaqTm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7CTzwxFFvPfjwGMbK3QTQAKVPfek7gYTh5ZnHQ7CSj2cL6n7zN6M7e2bkU3DwSgn9HYrd8mp9UNmtZRHCWPYwZY",
  "key1": "3u1DBTjoVworo3FTs5mEH6Bfno3K2JotLDEh1Se4F2896yMG8v5HnRS7feofStq4GtjuhuVZf4mFLLH38mge7J4A",
  "key2": "5zQstBnTddAwo8PBcZuFkALvzek3uDmKrhibY4TTiiwQ6jNqG9JW92UqUHz8EhdJvuHxMC19WBv2w36sTRKhq899",
  "key3": "Vfgj6QLULBtPSxB4gEthySYuogV9MPSKEitBhinPfYEZHP8dvQwYKVBwPLyaTr388mp58W25gjocc49CxZPzGer",
  "key4": "2hZc4VTHwZZmPxeCHKyJdNwBu8wrvsiZvMovmH2DACUkcmGWPcUJBwNmhbU2pRt9FXTaUPf11q2pYV8oAonmPvgm",
  "key5": "47dQoYpWWKPdizpwrFMq9sZx8Q4cyMzCU7DM2YHVpnvWXgvBjbNdYHLSNNQAV7vTbK7feF1ogoXc186xsv2jWqNX",
  "key6": "32kzBskLk815d9kyPQqhi5VUdv9ZeZucLjunpbXs3Y6JgXTMJEBjjLG2QNiWTKb8RAMTjY2j6He3a8iVE12Y9i3P",
  "key7": "4UahnutKV8cbBnUAF26pq3uRXjjx2ALtu7QDEYmnr1Vh1hhLnLW5U3Q9AJxYiwEqgQcQ7d8oJzvwdchJwncHgKnM",
  "key8": "3JtgtmCyGhhz4sTcarEUno5BpeyqL5desbVx21qBQedgoe3oxvdT72GSCfopDw7k4r63Web3Uc1ev23R5cUvw3Mx",
  "key9": "43u4a3PARfcAUtJpzhHovysnufgtUYGoDGsP6Nrsxv6mfMzVx7EUNprXm4hQK2giQw5KnVRHaiPQoZc8fmUQSwYL",
  "key10": "27FBnnX1d891hQSdAkS6zHZL96n6SAi3Jj79PfJseenGkcCiwWrmrS1xGGGoMBoeGs2PCFHGE1wnKwUxd42X2C8r",
  "key11": "5JdaweThVUDMyUZKVP5yFutHSXw9idUAP9s9r7yMvYh4XAbW1r7zDfyWsh9S9VYmUHm7qcFRHwwp7Mj8pYSRisS7",
  "key12": "5F6zKbGpZ1aBWF8cK1MZAtG2Zyewi8V4DVVo2GApDzDvX4avcisgySnSTyaRj7aohL5n4SvfJZoG2EUP19gEeC4d",
  "key13": "3jYRB6L9m2gzjCNfesj34ZQrJ1Vg3YtTZ5k233FwS65T1ddXcX96gDkAnSS9DnBS7j85ewTFzVhNTFzd65NwFofN",
  "key14": "2JQAmb7UbYTTdXHbuQD2YtmpwFKGNetUZGopiR46xvWv787VTDP9M9feJ5hGrcmryxbh24epRDgEKfTxcwLRp1nP",
  "key15": "2xvEpjVPY9MJbkK2AjQwU9mjz9Du4ptqUKB2s4FjbrfPQPkmNkg2CCT8YtNrL1LjagfMqmrKd2se7w8RQdTSdbMG",
  "key16": "64D1nbSRyTaXGjX7Ze7ouE4tHvcPs86kD2LxBaXZVKn96UYDNG5wtPp1wvy8KUWufNNspndYAAnwDZ418dn3AVXF",
  "key17": "QWVao5UKd14qDR9kT8j8FrXvHNn8BgEXksN1nn5ZZyhFi9TfYCoSyp1EozP941dRPUuHyFRuNwWGKanpfKXTmXd",
  "key18": "2FGHKX7cGKyMbD366gDdZSwpojHmvVUiD2TZWTcQRHwhRmb73UEXVY9W93eVPmV7Dtcsz54STLSzE4bPN3oVQFeV",
  "key19": "4KhhvhFv2hdUaF6Ww8u4PDZENuDtTuPNsLtJgkURb5mDEtb4pzmK5Ki2sMa4BbNWSBiTGEZ9SqzEQSyCRdEwj69G",
  "key20": "ZXbDy91M1HefLcPZjdbRMKHuABpGpnFCcLBrM4rcWTnA8itKH66jocrA1ocXFbhtijG6LVeDkFEkhGvcX9tE2Y5",
  "key21": "4jVu3XAZHTn9Nz54R56gtJDGknuv8WGfHxgNkv4TYDkttRcbEXfd7SHpfSZAb8aGKhhA43ZizFgfyUqGGbSfmYe9",
  "key22": "4QKpgHqZ1j24Afaw3RThv7ouZArB7bH4oNr3gD4SsuQxNai4c3BqkmsDiuXScWSPB4nATt5hxXNEzkU7VpesLDTj",
  "key23": "31TuTEFx39An8sgiKGeDYXzDD5kv6KQkULCXBkRCdPZ6CnL3i6VD7gLcn1rKuX4XSod63qU3fCDu7YLVpzCrjVk8",
  "key24": "5JP78kKWC9gsZHeLQnWxkhALnjVsRsxLFnNbkrcvqSZGqFf8i6Wp38aBXNijMuonw4p8pheKEGD94SHBqpuE4jNS",
  "key25": "2paxqSVbRr1WoZufPmTPfuZv1aJeG6LyYPfxybgjzcFdAsBs5iPDAZR45S9ZMh1MfUYX1sbRm4jwGsADYAq8ByU6",
  "key26": "Zw4HCTeeRck5vyUuQ4oJiNrivnENudCgnv1GGSrTGLdbuXbW9J5Df1eJwVXYK1rnaYHwMBgqaK49V2KPvVmkFsa",
  "key27": "4WLLYRjWDfJce9QcrPfZs5HSM4QxWSwpEmzsYfedh4B4XabDqdysjan8nSTcKwG72tzqz8xg5yk7Hy5gK1a84rbp",
  "key28": "3WVTysycFgSqx2ngVH1kUKGhneAF5dwbNcWYwiyDtyCW8RftNSCnV3anGEMoFtrYfXof2tHnwc3ggBYbHX4MLLf2",
  "key29": "5aaPRxWjHA6cvpcX8sPBf5xrUCmJdfvaaN5FfmxtKVRJgQ7k8wUkjPpk7S3P79Dve7mPPHSwwgCoXXVbka9Lprxw",
  "key30": "34gGye9NitAUeYUBVfvvvEwn35CM1WbAzcaa6jAfTpM83GEbkM4orjaTcLZCf41ESHwVnDJWZpwAUrB4QkCxXYiK",
  "key31": "YLtjwaVRsdiT24vkuBG1PWa9xvgVi6B7uyrd3uoykvxUfoWLjm8yTevGj1PXGwQFd7mMgwTsThSH9StdFwL3mgR",
  "key32": "2T343yeGxa1SSEr7iAhuK4pqasNSED9SKNW4bzmm2Riktnv8qagrPT7zPvLy7adeKesUBXuVUPkkBkboS8PixTfb",
  "key33": "3NP2nCbHtGwCGTuCtYpRAVDVjxiAeajhkVbcUjY92qVnrp3157yVXAxgQhYH9L3477EG3UnAcXytRnskxFUS4jia",
  "key34": "5cXzC4f9UFQX2KHmvLk7HcCdNBTRPnJnumNRbv98mfiTw1uH1FW8YEzdmfDnL9tpFrLg65oV2vDtBKVoN6fjXx4C",
  "key35": "41VUM7e2FhJAf7gensbXjMEoBobPt835fbik17XXLNuv8YFgxtFWDoVyRRXaSTWXdWsj2QVM7iTXXbEZ8v5LQ5j7",
  "key36": "2LPRxsfELGPGBGh7cAjYWacBrPcivEsNSji1g8Mr6Fc7NKCWpEok4uWKNy6vnhaNRT459e3GW1mMCSsgxPNso6Q6",
  "key37": "4rc53oNjD4FRocLYn6qeELV6fsjD81ZFw28kTFywJWPtVQZqdhzwCNfAs8MzK2pF15YgyVDrMsoxSaC2t6HBjCER",
  "key38": "63aLYDwcvHoWJDau8CbVp3LtvQxf6xTcU7w4fnPYXeiDFN7uX72fV6wUu2E6fHsoWGZttkJ9VCmstXy1wb4A1bKv",
  "key39": "2rrdRAeEGg8sTnMtiGARC3YQwCeZhoXxXUWte6isA6M9MBzchRBoy4g24PAsk4ovKBqQpdkKiU25iQoNxvF3T9ew"
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
