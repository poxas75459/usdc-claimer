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
    "rde8VRK2PqxQzpaJKGRDdtFL1NjHPnxc5WwWEvz7uQp3iBE8JCYj2ii6vFQKZXPdvfCLBSrX31jY52o9cNPAwNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCQikvcv38kcFjmwqDCMGu7Vqn1mwWu1b2JrMyxjq1917PihWNNfNyUucMr2SjQYBhT8vokfVPCitTAZLixLsfE",
  "key1": "47iyXVknCR43RJA2BoCPtmJDkkBaDsNjqCcfB9i2MCQewicRSsavH1tWAZcVFEvUX6J6F15kh5FgPp7DsMA3PA6E",
  "key2": "4L3F5Uz6cL921saH88iMsHDEGaz9cbso12d6WMHvmmXDRTFntdMrh73RaXat4XWjXDiS9Dhje7aWuCPcCYCHrxV2",
  "key3": "sSExyqB4jxF2XwNhQdNYyBftmU2t7NsmgyPcPgh1UUa2Y18nnNrX86m6YazEoL1oggSPyhKQdZFzJjMRnV9QE3R",
  "key4": "2NM17DQcRqiq8Xs6fyiUzYtEx9So4sNSBwqaYEzQAAiJDYuTWB7aKbwggf5krRdn61aoQQ5az4V8dUuZUDesdroH",
  "key5": "2ogU1rG9Seeg1YToxMPhCbxLTxLxsvfyySJWnd9MGmcYNUyyfat4Wcmo8Q67J1oMmxjYn3c9RtDiX2j2W5roKqXg",
  "key6": "5NJJwTE8Ybq83Rsir3yWK5ri9ikU5fLhtEK9gftWYqDpUwspVkEZJUnPtjBPMMbHdGhgF9im6xF9YCAAKGLK9h6M",
  "key7": "4btPU3WxiiMPkSe18i6eRMYNSvur8Y22xyphUjagiZbuS3mHMfTbWBZtigapgG1sjoRcCPchkkxWVHLKoGP7WEJK",
  "key8": "45wYj279RvH3kzhLn2RGkjX3qyGgiYMX57CNKcfwwnBNC6Dzq5DtioFt3jGUg2PiCpuWPXSJQPTez5ZGVPdemdiG",
  "key9": "5XtBkyQntgMMqVes1eYXoUub4FbNjAhJpygXY96SSRR2ruwUbJzbodgQ5metfoXNet7gX5gd3MbohKaHwzVkab8G",
  "key10": "27hfmDQmxhhc3T3qTgmtTyzAneaj1dVnqbo8HaubUL4NoiozANBdPCuDJu72dEsU1YUoW5wTVkn63aNUy9NeqcL4",
  "key11": "59kB8hhqXw3cqeY9F4W3H8WCc3Zi2gL3VTZ87zNskgh9rMN3nAmCBjAnnGdTNLsmvKKjxbyH7niatF3c7GkECZdN",
  "key12": "44icqmNFoW6RsMhS2UWFBzCjwFx2EnwVU4DAiEai6ZKRyWQvr9k2KyNqizrneh19TeonVDPXvWBRJaTQ4DMfmSuT",
  "key13": "3MfQ7VXwdEFRM8qyJ37Rz5YfDKZUWQwcxYRuUQaX4a9UdhbPBXJAFk4AmQrJghTEp9opviXBb2wKhRKUfeeyErBD",
  "key14": "2qAFkSxoL5Rt56nghH1ji9iazuvcMgT5zkpDTrFSYiDJvY9m8GBL2ZQWL84RCW1PqFXfEntNtsm5atD1LPmFtUyV",
  "key15": "2kniVAX2vabYt7JgYo9rh7nyDCis9fTyovUnjpW3m94pAfkcimxz6eiL5wR95t4todvP6criQAbztgvKAiQ47Hp3",
  "key16": "2WvVh66bxvW3dBhETiVqMf8y95To595fx9jrwhbsDgpXNtCvSEzwMKQEuf6puQv39bc9bv978WD4A8NhtPRxm6bz",
  "key17": "5JddZ4Y45EqjtWePnzNRcXS4YVvFJxbBxA7DwJ5GcrnGDshjE1g3trZ8RjUmTJQE5zSMQS8rPwbF9neRjKN2aEqn",
  "key18": "5WUQBDU3E3s85uyiVF6s3aNzuAtJaRom2ZkwRHXRJnZJXeyk4xatcZ78q1C2Eyy5beFKMtw489tjJrBepRFsHyxp",
  "key19": "3sxd5bHazfC6ViAkbJkJFjo4qosfy9Pmsv9Gb44Gh12hvBUZcEcYNHfMQEPpA3wE997zry3Ae7RPiRg6rizqe7oa",
  "key20": "ev9PaVvuFfbZHgLWzasLTzowtUc3pYhM53Y9P3LaBNWnPqcqnRnQpCUY4AS1YGxZ9fy8pXeVx6QN8dm26kx4poA",
  "key21": "27BwjGZGefUajCpcZFUMSXvqsRWAc2xMDb9yUUSR94Jcmov23XFFtHpQE8F2zYRAhF7DSfe5qWAkv9aoPPx6nBQa",
  "key22": "47W5q4qJxezwJSXdAXkVtWk5sYuPvevRGp6wcRcGirk6wChrRAjwd7gjJuspGYmuy8PyB33FTxNAQGMPpcUWo33e",
  "key23": "9oPqyPXoUtyeudmGY7mQaaPAPAYZVkDShysMz5HYZ2wvY7tpDZVRb7cGNsHSeV5A2T6aGv4bj9bCQhq8YatxW3L",
  "key24": "5QxJWFhZLps9LTR4iqFgCPKoKrfv58EyydrnoC3R1F9116FbEevzx7RHkhiiRfxRu6BtgiR3kvBz4MZtKM9YSpFN",
  "key25": "574byohmPGNJoHjKwpYAEVCUkPYBVZfLAW7SioEJxyeofV51jM7EVU5vP2twwzbHViobuxds9C73DNC6SfqziBKe",
  "key26": "ySvJLuKPo4sqGd9AzjoGG9tfr4sgCd6cybcov7AjZpLM7VwcRacT59HSYmrK9euvvfQBEArNJUY4D2LXmRpZJ7J",
  "key27": "3RL8RgdjLN6fShqugmnsjVw8EuzKKLM2ih5dLL9U9WfTrD5Ejgz5KRtbHmzkHTFWsxvfE7mKhwBQDTA4fH8GQiat",
  "key28": "3QfQipheTxJxBhAGsnQobmoXx2BJZzUGay2yfh6XRtamy81EXPnV9f5BQTaJTMNR1RHnVCCAznUhXabU5DdnHjuQ",
  "key29": "5q5s1uD13gKxKopknkXidjpct9cTDWMjxz5thgQ6MUxeQUuKxrS3RruK6VUGeAVTFyDWFqgqAPQpejK5cNmsxBU8",
  "key30": "2Kvx32P36xLWGQtDRcBCVCGhoqnLaSjonDG9RHEhsDAZXf95zU4sUnjo9PqziD3TwrF41oUrbLD7Yz5Rg9Baq9Q5",
  "key31": "4iTNDuL2mP3GQZGTPQa4bHTxACEzJZVVCxqwpjgVq7Kf5aLw6GD1w2qggTU1suPKqwAi4Syn7U8SmNWMTfQjg6jg",
  "key32": "4PS3ydHtPWvWtMrPnF2iPhZDhWaduDhQVnaj2gtC2SrTvxvFnBrqBEpRWLotaPjAcGPGoDC3HJyUBbzzriXt8hgK",
  "key33": "5ZFqzqEX81dhYhTDiFi2ZBrLZMQTWiiuBgSh8moZimmfzQi7JMmFb7j1kVF5DrvPdsRiMfgDji3F49mAaeSJTK1k",
  "key34": "5LRzGc3x3mzmVUmEzK5gVFZ8vMSSM8hTERsh6xE316VnjWgibVseCusHfz9gQad1j4LA1mRLSS7dSDF9tjBmD6dJ",
  "key35": "2jBweivDAj3933oWfQZVueTMPvuFqzp61XX1Y57LegzPsXNCRbQUQgmpXpzpVVTLak6Z7JPgViGMcUAd4GD2fedM",
  "key36": "4AEp1bh6sMjKpSpzt7fyuwcUZJdUbW43Gs1qunqZMeF4LkMnubujymuh1BZTUAZnnKuT2ztShamsna4abTLTnjQm",
  "key37": "5UtbnHkEHskyRFYfbSJpnjVkdBwK9vkFWExa59ZTM8L893wD2Mujnke6SPXuSAmY9mfxjxbW1HENRn2JDYrzUH8n",
  "key38": "58eHjgNR4S4VxQDxBYcuYocUY6Pz2zzYG8TgdSsbiYTpxeD91bUAHk3Lh8m3LA9aDkn6bqzuKWAGiNU3EPp6XMxz",
  "key39": "4Ak3oTEcsNPSEhw35ZnEBCKsbXsTZL8TeXqr5FJutUMWJ8vx873aRbhmTmXvgPFVntYufZnHFSTa5pLsRQNkwUTh",
  "key40": "5LHYeA7iH9BLx636cveKPsNvMzuL9FWQT5tWPTPbD4keEWXmQ3BngaSPz5HwqzjjdMSft71ENzebMBg1Zwa43LU3",
  "key41": "EoSfMwesb3F9Ls7epwy1RUksGwcU9wsw2RX9BscCneshupScaYSwPFEY5oD2FRLazHW49sQYD7qNchoMoRRSudA",
  "key42": "53PYuaGEA4WX5U9ZYnsPyPEAcvwn9Wki3721KFGaLMKkiud941HTPNshvH8xtbLYta9SsusWdvWisgMxXQH3YkBY",
  "key43": "55S1jRkmGAeyZkQrS3qT4nZBZpRHpqSb9WRpPKB623ux5djbhRagerJQiBBAAxge6VWhn3X1kcJRJfoe4oVT8bDE",
  "key44": "GPP8VxragdnoJWEonsjbF8nb9PXFgohpFq6VgVdh2TUJNa5jxDdFqYtkz5fPzcNfuWr2Ve2YFzwfsUd2ja8v6ND",
  "key45": "39H8wtVPmwy32fJohSvazKh9JDeAy61eyLeRRqUvYNstJ62YUApy7hSNc4hjUWU1d64hjSNvZSs4L96FtYeNGCcy",
  "key46": "41KuNFZEGiwjFFRqKBC3uJeGgY7Vvdhaw7Wr7WACt7eYcjUXhZRirLu7xaFk3VVeFQQpMP5RDseFBNSN3WZwuefc",
  "key47": "2GA6n9js7wHE3EvwhduGmjUhzPCDx7bHJHUUFvJEmo4BGrvdpNjnZ6KSz6N5ViKtJeo8PojYRU9jsSdscGy2zMzj",
  "key48": "3jE5yRsC9hi8DaPJeTtAFqBaVm3pmsQU223zSrcDv6yiqGReHVTE4NQvQv79v9CEAx8UmNb1DN3BYrEAZR9MBH9G"
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
