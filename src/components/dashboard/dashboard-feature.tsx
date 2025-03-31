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
    "3aL2TPCz9F2t5QiWpA5kEnURCsL2ufvC5TY4ruyYe2Gs36kfmM6mfoZ2KKdq3vGeknt5ui5qAT96KY56KxKwswJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LH95wFjPSbBbS2288nUB6RKiGR55y1PxCmRFMp2mqtnK9Z4ER8FpDrwVgyQNqmpPsZvpfxtZMZic1UrTMGgDp95",
  "key1": "eQ2Nd8dzioZEC4Yr125HZzSBiigLEPuCR1uXHd38hk9NmYa7b9Dr8gKX3MPLo1usmVTAUD8mgUNn2D6L7eDrLFg",
  "key2": "4j8cYhVNVGPMnCq1v7jEfhjqUdykEWc2En3yW6sofU2ohPEy7mReEMs9DdkUbTu6Q3AkE3X4fxbwYrh764rPdjfH",
  "key3": "4HifgQJ4Q8oW4bEQbQNAt2ohX3xFcRD9jcxnm1aszhgqSkJEHJfBABWU5LBnvj4FhHFvgSxzKCP3MVr4ftEwRaym",
  "key4": "4oPunNPTbd2vwgC61BWCpmtNr4wRT2tBU5eSj8TGXjm8hVBh1QJu5hiAqHTcCKwaMVnuGfhfTgXusqNJpFGrCJsp",
  "key5": "4aCnqqhiivYBZbSk9k1Ek5hECGtjD4E36sAfE25WA4nT8XiAGma8divD9Nghg2faicRBG62PSbX1KLEkGHWxxPd1",
  "key6": "VRoWS1q3WxfrtJCb5qN2K3cJu6jxmFJ7rkAkw5NPMQRFxoLUQ7hGxgp6XECC8nvBeX1Y4LsiibK6fycxyDeYdX3",
  "key7": "4n6uYcdRDAB5gGHUSkyoRJZqkm7Hx1rbNoPaUADeriFNCnJvCHXhSe9YYyGYtT3n56zwoU65rxePr63MRwVeyPz7",
  "key8": "pmhrknyuLfXycwkmdWvKxbtg8Rn6faCEVr7MAXiUjJnk4E9TYaxG9VMibw5REtoJjScJSii8muCbj7KCkKdzqmx",
  "key9": "5AAZgM2SCRCC5Hkca6jkQucWUNXVwjkFrWuZj6orufqp6wdkRsUCLFFQpwh2UcAzijjR3CsxP39ZVkwD1Hr2qU8h",
  "key10": "4uuHJoNh4dfZP9NdxPm5Ya1cRJ9ZS1DjsnGUQoZSmFMYdw37JUvnvB9Q2EyAi7E9QarQTL5ZyBroNHD4djpmZU4z",
  "key11": "3kj858JEv474U8N7GoRRGZAzZVGSa6c1VtmsfmHYtnBEuJubnEEnoueoNKCgECgxh2rAeDhAvRExr1YSrebYubZ1",
  "key12": "4pMpzy9NeFPgH2Ve2AddC77gPJx7U3ReJ8iTTcSJijSxcc8uQsMxMQNuU2atedNVyg2iwT9JKX2a3Ay1QirBH8Ug",
  "key13": "4ZS4EoS1jS3DBNEcJo5ZeC8HQoUwjELnAx2U6svqv1LJk6vdoJp6f3yM3sqYaKUWykpxfHd1KzWVKBwW28MWXSmD",
  "key14": "35W1EDcyroSYeoDVJTPJKY41cHPwe2YxXqWstgH5bVK2wvXDVb4tf9aqz8JebWeEAUt4qMAPyA5tdCUHF7DJqFgG",
  "key15": "3FL5DEerbMAjpmwkCupoksYCjRVXpdKS1HzVNEgf2BAX6BUjrRit9Dk93regNpM52DoG4En1qDNTg6ucvmEi3NNc",
  "key16": "vPxEKy3TfbD8skvXZQDPffzHCaBY9oU6awvujTiM1ycWF4HtvQAmQkh9h7RdCmHqrEm3iNYYAbCgx9vChCoVKSE",
  "key17": "6FEuxaF2Q68xi85nUmBzStmoK4m6MrG4usfbziKB5rmcZ9MkqAsg2SJbSDfzd5KfLRCXzggC6uJUQTsgftwu14g",
  "key18": "3CxH6Jp4gb8XMeyHHi4THo6ZiuDDjUQ2iDMNHphTjTHdvjjncWdPAXzQ8DJBGGwBwMehmrFDbMZhm6Hhx3rd91va",
  "key19": "56vpu9aCyTtsWrgS52h1y38ems9Tmf9FwKW9At9iC6RTfEkpVz8PPfejU2eUV6fS7xxKM55TVZTxaBTsdZVNFfeq",
  "key20": "2SpYLgkiQdisYhzJBz7npCoHVAGkCAFtnQJgivhCM93qCqXFY6Q6pP4YVxj4xqUyM3THJqnqJSuH9h24M1WVQipE",
  "key21": "3nN9nDLMV9mF4RPKjjtiDnDv1fUeujYA8HVAh2irhw1bh58B6GrhNmGMGpU29HH5U9k1HXKvuUNwAwNUerss9yA1",
  "key22": "4yEXh8rgjDvMHi1SBspqdRXNBG2vnV6kEymmQQ3UkLGjDHZHqyp2skgPhQebarRu2psoNXGEMycqw7jhmXpb7QgA",
  "key23": "3kraGfy3g3bB5YnVd29NXzrYpqDfnsrCxXunGnXYbCMqG6gMHMjKsZt7VeKs4VqVsYDhhLT11bb42zdHhZq1Emte",
  "key24": "3ohQtHYF2mVWpyjPpztikrRUHYZfVpborM3YMaJyMFtmkDTPCWMagZzcC9TtK2KJ2oY6v4ayL9vC7RYZAGpSadhB",
  "key25": "2R5eDV9vsgXaGNCh6NfxEEHNuif8ZDopH8YdZajXrJZbDRgrJqthmLRRHCt9t7tN1G35qEjsCwzh25EAxgAo2tMi",
  "key26": "3wiGPKVbLTi5Ba7VxgiJrr1HLY7Bi6PVDEHJYxhzLTp6bMeUWeRp54SvmC6qwneYLYDwGebBAJDBnTMECA7ySJgu",
  "key27": "46tZhXVbHXqxacZnHL1eEmYbV1ztM3fo4VPWWRrYcGeQwhJsQQS2M8k8j2Mv7eAr2oX1SBSEtXxqqc4v231DfXL2",
  "key28": "3oLRCs2daGMbATu8QT84EqTc2w6XktR9uk1R9TMewqcWy6JUmZ8kxaWSh9YuhULHkgk2hyrfMZKUHThywgaSnR6K",
  "key29": "2M1VdqrqWLgB5PdQstnMQfx61DSfmTbnN1n4SiqFdpPQCuQPewxpLddjrtcw3rn8HWFpzaf6Rt8m7qy8H5jGar8g",
  "key30": "14dkP6bi2zDUZGj3zpXFrpc7ECMmn2y6Lcibham84fovM1kiN97HoAyWQpgopBwB7k2xq2sxUhJezwHLS4TMLQf",
  "key31": "4QvyhasLdRYANAUGt9j7UWYf6dkrmNAhmMAejEzCSEMh6LqzxQ7xWpLddRerAjSubYnY1heQ2hmvZdTRYr7xcDUJ",
  "key32": "MmswpwJFGVnaFSL47Q54gcKF5tuqJX15EP55Ln1AwQp3a1atJfb8d3okLrpdp9qkAkR5Cxkbd2jvjdWGmyVoDRZ",
  "key33": "48xQVDuFB1NPmk4kX3Ys4K7hiJJpDrbiRgxG1hk74pkoFTwnjw2Jd9ACVSr6naysTPfiyG3E2Uxafk3eLMxRTVXq",
  "key34": "VfDh46ZKHhu1Pf85KgqHZz1t7n3ipBQ4SczwehUYraZwvRNP2Kv1faECPezDD6w4bzcJVa7RhRp5oSNKnS5AgfE",
  "key35": "MkwgEN3ppgcB2CBDkLRZLaohrZestVxDCAwZtwb1Z7keEnjLh5HF1HHBR97fnoKUUZNwrXC98FTjrQ81cBt7Cu8",
  "key36": "kfdYxodAdQMTp3Nrf19jwmffjYYW5ZTj952H5y9h3kgAAsjkDvat4Zu6eLy9pyUM1yZgdem2LkMEJxgftqv8wd9",
  "key37": "3a1DK2jxaaUEQ3wZD5ME2Fo9SFE2PuzqZPy1LTQ4hjE4pkR3WYF2bMwS9wxqZrdkYBCfc6b5aZ4m1av978VBJuHq",
  "key38": "3LZRjruF575EyLvbHWvR62K8MaqFUiZTz7eonEoN6MEvn6CpZAtBy9HFpLeEHCouJMuPBg4jp5yCCX61r9uzrruN",
  "key39": "4U6okjhfEHVJcXVP4qd8ipX8kUESXo5HTDN6qwwW6W2ej3hDy3jqLVCFDPhoFb22rtu1mUYywVXf2kTcT66UXE9K",
  "key40": "JMg6YDFYBwqQfFoMnNbogtob7WEwxm98v15tKNDgL1axRbsvyyzYd8WmGeB7uoJh2ZfAh7sqbxLW4yWcuG3Q919",
  "key41": "WGBdFJNpfmAVQ7G8CgCysod5Yb6NHapN1gECzK3TpPeH4sw8767t3nMq44jR1ZqN2zacjK4o8jJJc5LLs4JpgL4",
  "key42": "62ZdsHQRTim2uEAE3DpMMqTjmhMXLAiCrmuFwYHX1NWq4V9xqpbD4fMzx6MVS8rj9aZmVhVPQJLn9YYYFuBhJ5HF",
  "key43": "3XLSsCk7Bv7XxbomVsVxmrUXGrwdj94zyAHA52iVMsoTFXFiidd6TV78nzMeNcThk7YS6XFHUotoc3dyyxRL51Z7",
  "key44": "65hoT99Y1KRm4RPfA2Vd3kw8eTvBYUzLXiTB8ddQVqLsTMveKHnKbMVr9sXndA4p5s7sHXLNQWDxqkUJ6bQxMQTA"
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
