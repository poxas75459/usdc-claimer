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
    "55WQcRMNFCzf1zT8eTKtFNm6UU2eMhT7tbUmVkwmGARmRGdDQeUwshFeAyFF2VFEM31F8StAXVY1otQVoX69S5P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i78b7EiBYVj9qsDfXxGeFMZp1dbfAZMjVKtyKTk4opbVkqBv8pSw2qxZ6NNULM6vdsH1Vkbm5ZUVszoyES1rU55",
  "key1": "5RhFRzL6Zew9k2Vw4FFy8yga4nektHrX7E4cJetk2rqHL5tFHhCLJnwCr8ALKpoGxSn7nbaSUR4MhbQ5BWUPT96F",
  "key2": "VFuwq2WCN2QWyfrTpC3r4oYFueLHV8cQ9kQUJHJefdnQDWVTZpJkKHEoDvjinCyrXD68WXBQdsVx3dMurAHednu",
  "key3": "3G2hB3t5Af9g35hUxHRoeUDr9NBQCRcF64ZUCoYGdE443ZrYRNxDZX4oMifzPRuYCFzzACsBAKVZ1DwtGMR83fkY",
  "key4": "27DYvHeLfv2gUEmfYPsGoNPnD24awPuKrNcrBdsVzv8F8e5BbpNAjeDj7sViMoL3NGAHDfHeaUnmLHezw5dWLUsH",
  "key5": "3HUiRUeBKAoRgdcJA2bW6UV9PceVQRccaBfbSDd5nLGcMebfdZtTR8NdeYUgEs6hBhiG3FN4Dx3qzdMEJ14twQLg",
  "key6": "5C8FaW31sAxPcurGfjzsnozonb6t25D4N4bGmUvCytuCcFyhLRB8UmGSuUGSGGgL4tqmx38Y7CTYrwRU7HcKiNmF",
  "key7": "4arSAJM1MRt1ye7Q78439GyLAezHnm6Dbtz6sLKPcXYNnBhxAX5ZH56UjKpvcg7YFCAAmLFBNihkXT4562GyYCYe",
  "key8": "4m23NpSfQFcS4Jjj2jc1fPFSLFo59XyoPCyjieiPGfjLrQiMU6ppXtSDMMQ4fGHDi8coHaxUdW1hjwTCEwaJ5DCx",
  "key9": "5boXwG73fNpgKGWRE68ey5JqUZuts6WtikXStrRMQekmjDr2hfBTvnEnkuEmiaQtSZPzUKMJ2hGm2fYFPHr13Bve",
  "key10": "41Ra5mtRHojUXyNogwbmkW9ZvbxYais2tgWvHP1Wnbrt1BognmzQwkSQELknSJbZK3vTZMioqnWkHsvvpC93C3YK",
  "key11": "2grxr74xQ1Qt3BGHxuL7VugtWb79AotVUtQBkcapP1oEWjM5oi8Lffqzc62pgR2LLvVRd2Tq3GtfUCnqHRuPDdeS",
  "key12": "5XFczRaUSacCX9hdaWCenpc5YbegJ695Eyxmfsh9sfNYQDeNhgw3Bosw962fCksEVvtKkwgaMV1t5ZQYnU65TKHy",
  "key13": "5rviQX66Q1DFscZB4EbFjVghZiAGTXwNyAVCC6nkKC12JoKUEwsgbCLJuFmUL8ByUZLNcQ21TZYQ2N9YqZfNDgWc",
  "key14": "2cxvXWkA8XbsAxJSa3sis16aMgWve1K56Wqd9oBW5wbTYKaqJHE83u29HHwuQMukUSeudhzXAvofdthWUxsV5Sse",
  "key15": "5mG3jSPCvwwXGwW1tHPumNcCPh34C8JohdURqQMTy79zcmsUcac6hQfCBg65LTs8Abj3xMcGyQqFYLKTFhmTyaNn",
  "key16": "2W58FN1jqnSHjnVe1RLmZxYAHqXG3Mr7in2hzCZdyhReXLr24E3qLXJb7jRgJt3zWhz1HZFXknXmvKTVhshQSgfe",
  "key17": "5boqYLqGw3aqFNAJNJm1rC3hHsbPQY9BjHDYwg7dMswo1QQsFs3zZ9ApDexR8r1W2gPH5HCuD1DVgTLJGy3gHM5k",
  "key18": "4fT3E1WKjvuYCn3FXFf9zfxTUVhkWwEfez73pQu9PxRvbxaFZM5BC6Z4f3ethrj5gaZftAMmPvC4gsvPT7Za6fGx",
  "key19": "2w13F8qRNxsXiaXmUGsHuFmAUe7iMY7KFBG2JDyoes3cfyDok9KT8aFkikj8kWac4cU3xjWoEVf2sCmaYhwkzaEx",
  "key20": "D2aGWUih6puwY48VazTZjGr9fLqntoFm188nrX6fpsyFP7bd8vdxq22grz5T1gRjdZSqRQxP93Enj2CezUBxNfg",
  "key21": "4Hbfot6ASqbfjyvVPLVZ5SVPaeVg7TJ6keJnRThVC6NfYmciTN1P8A48ppyNZvtjwgGFzt339b4WoVWfB994Kokp",
  "key22": "3ToeFohqjeURJoHuqCvhEVmvhjYRLVopmq99RcdTqzoF9eryEZcsFnZjyGs2qC14kWaXXQ5S1yQwQ9tiSNh1bnwN",
  "key23": "2Y5mgBGhy7B5pbb8mewpsmmqmFMnR7ocYd1392bZyWdRoxkAn6umJWPEThUkCzYzidiCRs8kWtmsk8dpCowEGvL2",
  "key24": "1BRzWv5cmPM92eh9jiJi2n7CPxpAXfEQJSKT3A6t4QAqEqMf2qDUMcjTdM1u3QXeWDja36Mo9uou5SNteTzS1cc",
  "key25": "5GtKLLu7CnGtaeap7SvGWTqKsE2psBwWZQXxWKD98Z5GjM78Cz2yGpbjBWuF6WVBtxkdxBk3uuyT9x3mgg64RJwn",
  "key26": "64grEHvxqiGCKKkAmHgqQVrmJTkQz2QeyddD34nSevcrfw15mM8G9RFqd9KbjrxdmXoefjSrm3NG9iFX7hvd4DK6",
  "key27": "4HJSv3NPZp7cd9YV5QxrfUDtH9N1bX8UTkrivvVCKRR9DP66f7HkBMWpPpiw8hB4tbkFmcD2Z3hwf4VJrr2ZSrvD",
  "key28": "2ctYDRpx4VAoJmtqCwqGZZ4DQtFfd9YVCPLF5reqLg5QBWfuwMQv7yvFE6J8Kc2LXENuFTRKtofHP6XpPAsose6r",
  "key29": "4UJ2Ntuy2vPZKc2wSHaHZCVbksr4Q5tPPUZ321yeSyRRwhE4kLHngXdBZYTGZ6BgwhWu1QoJhFazRcgG2EsRqwQP",
  "key30": "JXBod5rJmvTRaWHRRmv7s9Y1LyUguGNXnqfPfxxcs9PmatdZbUnCuj2Wh1YhmCQbsNhG61ieSyjZqimnwg6kL7W",
  "key31": "29nrKFdADpkU9A9W6Ln78zkNzYbj1rQcBwCDUCgH7Zwf5WQ11vxGM2CJoeXbKZQZssTP8S6A3unmSokxCmfy9zKr",
  "key32": "2C8djXntCfuuV9QkWxGARDMGCCaMbt18TH2fjrC8ah19eRZNDXTsiLSNf85HVcZD44YyeYdp3k5j8i18b9NvHFMi",
  "key33": "2u1z28SsVyB1St1Wy9pZdxkgD723LCugDaQyMuMpqDcXpoyzrSCtYNSi8sC5RHF1UBtWz8nTwjcjqUE4JzxmGCof",
  "key34": "mQDEPp4kJEHTB5Hr2qrxgm8Ua5SshtrgjzgVKwSTjS2gSrLE6hDhRAdw8MaCcExdWqvbBy3V3e3NgXuAMsAtHN2",
  "key35": "5Cmx8BLUx5CJijCdQxZA5crXiwtw2FT3s1Ha8YAwBXtnTfMpVSEmidBnceCPgBVLKQ4FrumtehNWNwcyPcLEQvrh",
  "key36": "2Cd858NJJSpzZZYEHJFVi1F55Gzyw9256cbJaLYnv6YVpxVk9wYe1M85LYaVExgk6KFHmGeCPTFYsVRb1MhmmeaT",
  "key37": "4iKmPXxiotYWuT36FH82TnjALnT7pYWSqNqRRzuw786x5YXYha15VYk95atMPEA12XSkp4kijWUk8jfULxQDm8PY",
  "key38": "2Qze6W1oV9Y7TNHdFoVSCRFQphtEQJAfqpCHxdzajuWwWtkpT5VbTrfAkBWL6hg7Y7bXzRSQm7EGmKeaQRH18PKF",
  "key39": "4L2M5ydw6uNkeaL9zfAiA3W6239eYW3vh57g31rBAyXStFhZZPyzUNJcKfJQBAPUzAUdRbTXmnppx8J1aPCpMGsE"
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
