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
    "66ihkQ6Jg1wBF5iVdRfkZ3Jj9B7sunMGsvGPwN1PBDJtJ7UEnXHc8b9Yrubc8kpp5YkrHtvWJQRxo9u4YkPQDRMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGCxK6FQLfBRX1a3XoCyLoaiyqoPArVASepGYMBkhFP8o6pTpzd21ee4xfCaMW5ubWZZboDM5FZur5AtLqVks1B",
  "key1": "59unjMqw4rFZi92QbjsjBrnRbHmc2th54u4YL4Fo6cQkHqEqCWdcwuk1fPxeTLb7a7FHfPnwJwnCQvm8ojTzNoC7",
  "key2": "2TdN9jFfoeBJwQUsm2a4K43R2PGLu7BjVaerC32o1Z2DLXLJrXDqa6cTFUhssxM8AABTzSKerFrfhnhWJTyk2Ka8",
  "key3": "65CfeAdfQCSjFrUocbt2SWJtxEMUdyMQQVyQhaLoSSSVkJiPRhUFXRpw8fWXPkwQL1CXVuQgkmiaeWVhVMEW1aKV",
  "key4": "3iSJqcmaY2ctTXvyUsvYZb13mwbpYi6Bvy4qCnUrtLyrTH5onx52Ma3XhVskYr9etYaDzDFrCktWN8pPH5EtgHGs",
  "key5": "4mj2qi63By7n9S5WSjyniMvoh3oLiUKQ8ebsEkQbczwWogijonMjgWd8uD4UGL82VM4tL5AmbKSAkVvSXf8j5eKe",
  "key6": "7oZ2WSmZShUNzZfZfXKWJm4eKW8b9JgBv4pJ9AFWwm6CzWuzG7ZuwvijUzX8V6h1XqdoGkmijRCFQJztto4qFHS",
  "key7": "647nf1bdDdbnjbU9MnkRUm1GspLFxf7UNJLBGk5HK3tUgEySR8bMZLUKPavec3xjB74gr23fuKAoAxx6nPgr1Dwo",
  "key8": "2uWcQv6NNAVDhQcuEX2fBP4pArCkYfoH6TxoyD4XXUYveXmzmsc8z1Q9h3eHRaQ62ttuqcw4nJmt4ARrL5gcFQMT",
  "key9": "4fKh2VGgZCHqioSZyNbHWZz9KRXqfJ42TxKFdmBeAfMKibYho7otmQXaQXKNBiYZVZqkjPu9Mx6xaXwNCmsstH8v",
  "key10": "3TqCUpi2khwvKXgUPMKVNGyQimmnajtFfVwRzguQwDS49tH5JwRsiDwW1LLxzAYNtGyZnTeoQwvbM8B4JMQoXuhX",
  "key11": "4771nP7L8HHwMLCD71G9SkgxcQHE3j2T2zN48gSRohyq1mBSJNuaKdVxVizivebgdW4K3m1PPJu7EYvptzPbmcz8",
  "key12": "4LaXahCpcJeQrsNd27cwF5ptXKDmtbiGPtzpw7VQAH6b7LpNVaTtN8NwYAm8zqMyP1SqcKD4UzhdRjxV43zkvEA7",
  "key13": "2BYnBAijHp8KaKsoSzyhRiB1ySGraN6kzwEauo6JVnYS2HHKXMfLwWu1TP55pY85PUBLDdMfSdZvUiGmf4n7LoBb",
  "key14": "5QjtibCu86dnuuCoCKk4RFr4FX4wXGFCuLkXWxRthSyq2DCt5sUoYZXBZnpGj4s3STY1Pn2xwLeMMNQtkhmLcjT4",
  "key15": "35cMfUJK3hWzyx7ny1fJHQX7SzLMVTKUUTUU7rfGyzKByZRMk9vShqj31dW1vjuTxCFwyFd6dxiiDwD1DgBPFLwA",
  "key16": "5xepvTGgaZu8nbzyFLLG9XezJVVX6TJUkihVn4CBCtNTAzpGqeeWK6dySgRBRYuYk4j61B74uPvdqXZn1hCU2x2e",
  "key17": "5XoDxi2bow6DeN6avTeRWHfjEzQnJ6H6fr8cYoA47pDDvevnwTHPAiMHa233V719YBbq47dyT5aDNuaFNN1EXh8M",
  "key18": "5RmBqGtknitnTUzRaSnDfyQDFUoAKuH7KSsc7dPNLEFbHpbdT5LtZU8tpECHmAmujnirYMvewewDtkgoDCcRkFka",
  "key19": "5WauZAncaguJQa5bvXTuvr6HbsmGvg3MJqAe3snZu6KVzw3jd1p5HVz4SkCxyRy2SdspVf9JU6y8YASR9a79Vc7M",
  "key20": "3zUJSvLenfTaxLokvNDcnxPA5PvPBX7oBfU6wscpwK7FugAx2XpDwELgD95KUCksViX9oCuJ4vNNsVEsxFsokY45",
  "key21": "4R7Dj4rgMX2dg2ZJnZr9hQpYYtSQbERmNrmxcLY9JfHGuGzwg7doQ13puytmLzcJNLV9pEJjYQSAYRRQ7pWM86iU",
  "key22": "5AJMc44vdLoP36vNuPVtinV2KBNYK8yJQRGDppx83prwMDgWU8R8Af3wg1EMBakSSHQ9ZSqeYt3tRkqZS11R4yqi",
  "key23": "4KZP2bxkt5eC8BA7uHoi7ZUkdzhAZ3hfJJthWxxYnySQmbhYWUxTvWVCpyX5YdEpLotTzYh4ALt3xvjpCbdmtP34",
  "key24": "2pTAsM1gbN3TcVfENUFpthqtFFjWTdd3DWHLsH4Ca4RLH4PLa2rm3t6DV7hxCgrU1psFKhRfJtybjNRwvZcFiUzG",
  "key25": "2JLt6yPSkteeLVZdgmEm6ce6pyvvTNCJ5ETWaXiMeLgkvtHnatB34nzqBTmVRAfQMzENoRaAADM1Svfuf9xeGCPg",
  "key26": "5z9TA5zm2EL7eRhjsLyebSm4PoFyfufmUTYiMzXffJBsnUgx5atn86nCUHGJve36FfF1MECbjQgLLKzJ5wYQstUb",
  "key27": "641vHvEaoZL5p7QqzS1jmRqgti4aVYiuyAaf7UpxM5hjiqMwTdRbABSkfSnibNwrGwG72WtMUrbPMuQRnz9RkRfG",
  "key28": "4qQQYjBPsrFXcwWPgtb2mP8NcXHH3LYVgCvM3oy6PFf9PWfiCUtxUjLgM1DBsv5NeT1MikGr5vHSJL9iZru1vFnd",
  "key29": "4DUR295sECKYejz8zJ89U4pQ7uCvqmYhKJ5pVUDmsdi89D1HSFo4wi2CW8TrNUkY8RtUGD6wm5Dc5ECYLhqsAtPD",
  "key30": "2D4iUPNvFPrnYoVHvMCdTwrtQCTpr1DYSB2cry57AdCRAZfsFJuDSpSuG321sZzc9ZHbY78SujSYtGdGZTX2h3c",
  "key31": "552xGFMsw7HPBvMuALLugCenruHrpQ2HKK6yqmEkk9exvLX3zJUyC5SgftYuxG3pATHAAH97dVCqs32BYJTAuJjW",
  "key32": "4KCpvuNxc2T5r5soGb3Tyn8avAeNhzEX9W2KZyFm6XgxKktmvVXpFNGviDRBwuRns44YAorDuGDVyXybTCiM5VXb",
  "key33": "2o1tbxxKZgfootdD8Ux16G2uDMPcfaoe7epbtrxZL7bgGvZom3o7tRB6WKxyrCJHvyezKGGPt9vxm8JDKUtvZ5k4",
  "key34": "3j6zgdnUKm1SGMUrq1SbQ65bURemEzc6oSofK1fSn7LCwwxZ27njVB1khevLuyrah3M81qNUsynSXbV3hgZb7GMs",
  "key35": "4qYoEft3xPPUja55L9UFAXKSGaqaSdMBpKYRNiwkyKZBuSYrjbbQMZCpPeixpTzeVUH26xBG3b5uwkMD3ThA1JKs",
  "key36": "4W4k5RmnKXgrHWH8QTjpTxfbgm8YjiUm3b6D573ELQuR6vck756Ux6chxY94xL5iDQYZZ6sva8pjXe5xoET4uie7",
  "key37": "N7gMS8eKrpZ69vonddiXNozNYLaDxqjtj1javH1vH5soSf1a7T31TrT4L8G6KFrHdZfnrkW4iPkoGyX3KoU8PL2",
  "key38": "5fCX8o7yziPHPvDqtYczDWKSyVdyDXSwNJhB3U4BCwFNmXeGcNXDUmtbBCHUJVsMyQrrn3sHaP4VWNViqujLN6PK",
  "key39": "3kEzyaBaAKuf8qGfFf1HVdBC5SbkbNT256MwTSphSsB1ZX4gorF5kkijdjtyPpAUNNzrnGQAys7irnajqaj3n8Hq",
  "key40": "5Et5XeU6eF1xy9pi41vhLFRbDJzvnLq7DJVmFyXgGVFJMJ9U4LMHDbVpzoAXA5SVs1JEybuoL3xEgpRch9uAJrU3",
  "key41": "4Rkg5ToAEgSw5ntpM9rfoxrjPkm1k9G5eW6BcJgxu7MPZDnhAUk2LBJhsujQNFL12uggnQRZBdCTWq4mWdfo3oFa",
  "key42": "2w7WwA64QipGmMZH3Zwh1rPXWiTCUroafFbsZuWo6j7DqfEwq55ZtgmrZdEFU1UVbjp7yFnYEi2cBUooEmhfzyr4"
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
