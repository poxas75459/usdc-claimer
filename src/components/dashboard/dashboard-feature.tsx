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
    "43RGbr8n1Z5E2xVpmWdFkfgQDDkb1fYGxrSagDd3QjGnZSE14NckdHqBj7WtfjpUBTLCgTLgLbNirK5a2fXkziM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vBEvfRYeTLeVnGpPLkMJT4A9p1JLh4PKRjSv1GVW5sqJJ3bzizSP1tfWVq2m1hBXdD2PznDXhu1Zszm93dAVMb",
  "key1": "t9XTEpmEwZCSuEm845wzPTzKf5egXSECbNC6jQcfn7vtsQbDqzhU1T7x6rASqAVie8yqeTfbpkx5V9e9pyUyagH",
  "key2": "66XpK6UvWmfwajQnTZm7Ta42Pc7suvH7rEaXEAqSyprjogsSsYDM1ERYrq8JibipgHQwCHttM1FVLMRVv1QB9qtn",
  "key3": "5NdZWsnNt1aA9SyEhdfyEqTGEtSVBWiXZNMRZ9hyCXZmQRh4u2heZtao7cySXbQFeQAoGU8oMiy4Wgt5C14Hvr9v",
  "key4": "xsBgomKDikKSyJgbTvfpLyA8tdM1zreinSXH8ZHgqoqmqvLyyGnMjmuwMr8TbaCXkFeGg5XK9qsSpSd4rhK2mkk",
  "key5": "2QX6wKEFgeJGyWkGEpaFHjGV6ExoNFukCNSYg9Mj3DQCW4cPZqHNQzJwjEFHaKu16VMiamjpuLCdvNArBeyGKUfp",
  "key6": "2Zd9jND1XojdvaiQLsskpMT9akLdNdJLMnEUU4TxXFPvCFuGKTkkRJUaTQCA256157h1yDXS18DmXPhysgXF64nJ",
  "key7": "39RRhBV1nR5N3aSEBABXg29Fj2GrhuzDbFZAC18Sbqt98gXpkstLpxyAt4iHzXG7cpTwEqWomuHNKJCxWmqnL7Yo",
  "key8": "3FJeizLn4afCeYaaCpykWpKu1DDqNqdoM2xqBQEhGK7FG9h5hUUPRn69h9LpLcBe3GBVBRLCxFLBFJHZL8afoY7Z",
  "key9": "E42yT5DqpJa8pij8JHQTErPUDDseg1iqY639AEX413s5uxPLaXexAz7knyd1NRe7jxVeMQM1MqhSCAKJwPoEfAB",
  "key10": "3RqhGDkSNxMw89TkqbQ4aL31TgHzf5tAKFi6QRpKSoBrzaMzbq1uMiZomWVLUz3ts7xdSthiojjQo38GXmSZ1Ybn",
  "key11": "5qYkvSeAxeZSdcCHPgf2PyzjRbMoxghjss5Vh5ZtcLNtNrKC73sPotgppNKUrsKKHMYAeEPVfgTDhSg7YzqjBiaj",
  "key12": "GVL9B1yvQ8VU6tNmya45tm9TtpVsaQ778f3kcaV61YwmBm8uaJPceAtrwaeC9r2ri2gkPMVYWta4MKjeB3C98cZ",
  "key13": "3Ei2MvomvSA6jn5oChzdy9KWqSdoW3wWp8Y79gjqSmsAvVhGzGQyMxUL5TxYhjSiert23G5TgtJPsdL1DQtJYrZC",
  "key14": "KusxH264icZKqkxUpWtquqEkCKiZnoek2wLebGa22ZT7zTCXfZvPcNcubVHzJRHWbJiNeHuFeEn1uMJLv6opPQd",
  "key15": "3CV99XmVaKb7LffWPhQ54KAmoyywv5H8UuFJXoLZ7oo3uVhPuqfCoDmntgtQCTeVTtcW23La2owMAmQnvaTLzS3g",
  "key16": "4S1JBxX3UGmvd42EsSrcMcLxBZyU2jDoLWt66rCedtEb288Zf2kCVPkDndhPcaRPsXHE2qBLZEJDvuoNstFAA2hR",
  "key17": "2RX7KbArKDoH7srhDmuJms5351AtzskDEahCwJEnQdqnBzbVebfi5PaWqZeCwVF3ka9U6dQVcT6vDmoSDZ8WsXWz",
  "key18": "2KvvTekLf7tRf9NUfisAw15oUWTtbCx679BVpR4Xho3YWF5h17Z3F9NwVA1Yttjs6G5oiuUhCAV3Zc72V5isybts",
  "key19": "67SadeUVRTB2jee8y5DzwKRLi89gwd1L8jGkMMnCKxZ5UWE6XBgtxmRW91BQE663yjBfHtK14UenyYj8Y4UWxCRE",
  "key20": "3rKtFD1TDzGaM3bM2pUrQrDBTAiJa9Qdc5asgkuPtQEBUeLj8ygJuzKs41habkbwzq3VWhXqFWjaGkvxUTJRgUk2",
  "key21": "3B1khVbfJtTtrZ1MG9azuTpLqxDm9oddkRqQuHff3YbFqedDMGDn8PL2bafSBP1MHVJR8cUSL1oH9XSaw2GmDzQ1",
  "key22": "4m1HEvEQHPBuWKUh9jxTNrzvTmurafHNQxv8QTHxzcW7455wYvmH2jjMfhi7GGEUWQ1JkuRiQ5nFe2D97Bcmqkm8",
  "key23": "2313hEPF1ZB747C7gJVAkzkZ4gPAGmEVbgXWFdW194Lr9wQ8DPeU47zSbcuzocEZWcvBYWNo6FtwzX2CUKwuXe1q",
  "key24": "3u7iQR3njtA9MPDWeURz5Psk7R2mWGspeo1XYpazZY1sM4fprcw5aAch5qaZeCzVnQVCgSVrCEfXVdHUU775Prws",
  "key25": "2jq24jBoQ9ehEN3wEif8bgHimGrGsEAmVHdBJSU2ahbJJaD5kiVgWZYPDH5BDs4MekeiPHk8C4rUf6PYzY8c3ZBp",
  "key26": "4EQrqEpCznfPWoRdVzKAvxtb6G2v92BVHSNE5ZS8fz5Rozeois6RgwXrMGaX5mZKg3B3uRjQiq1Kgw8ARu7jyFXF",
  "key27": "3HQPLSHAx8v8CfuTKcpK2X6PvDgt5gCKrhLAhxmRJJ6EkscARjPLuuqyoq214SdG8MEGMfUR6sfiYVzTKhYfWUtC",
  "key28": "YvofXqrtRHoD7yxCaFkrrDGqS5P6Jiq9oyUH1vaKKh2GU2SmcRfnRCSnZ8EfwiuVT1kV7KrKxjhgGzQZe1wqo5b",
  "key29": "3NFBEMcxNFoAv2C4Qv3wtoD743DeCps7ArsUcGPNvcZYgL1jhdCu5sZiLdu5xa3upGatRYnYpC22SZq96DNGLtkw",
  "key30": "43YEFcgKAX3PuWDjwNqmUkj9jHvQhaVjQ1Fuwhq23WRzuPUvx8Jg7b514s2aor9Jdva6KfNwHgHHpqdpjoXQsDTh",
  "key31": "2taHkVu3cPAgBFDzKD9m77B89tCepEwe1w9KKAiPg7PKfeXHg3A5D3nQABbJw9HUqA7czrLTUY32YD3oFurwNGjR",
  "key32": "3DVq5gDLTzhvjKq9p9rnMC6NdciGUosQJh2GJ8ieytEr1adumiQAiVm6FhaCuyy9dhdUK9RxLqt9GfNUfzBzwuFE",
  "key33": "4heBVd1yojNrLFD4WvRmYxLtk2RqZXChbd3CkX9EkqLh4ogGkn1bhWS1VEULRcUnwiA5TXkJwxw5gSpZjQ4vxug6",
  "key34": "uoKKJwHgAP3xuyLVEgpJczmjiMn7p5Ka4HYAKTkjrMsKUccmKqybPd85isLWXGEs52E95SCnbjHvLMMobGaGgVt",
  "key35": "5xwKJGhvRZRkYwDUvz2L9Hh9VGUh56n9xbpejEVJWKeSdBQaKzCGigriX2xetDFFu2HCi2dYV4Q4XsBdLqjrUS14",
  "key36": "4ZfmHkGDCct89JQqxfFFkzHmxCkaLpttDF4LmnPfX9Kf3eDgdVbthMcCSpvE9WmSWBYU8vry9xdRUFdLm7sUEMk1",
  "key37": "4pF6pEiu4SAyNYe8Y8P2GPCYEFP4C7j9wmbh545wfoPHBYqK47LZjCfxqbKmxUcLzC3PBSj65Uyfm7fg6gong7ab",
  "key38": "2ax6iAp8AEWf9xvProMKd2UkcgLjrocdhp36hyZefyPxQoA8bxBP8BsYRpe7LNTBnrJvHh9dEK5NkNGFoza6wZKs",
  "key39": "4JEeNEHZyjwd6cf9x4S2RxKU4TCi9vGRmWwaTtcgN5mB941uJfgDoTJdJqLt4iGn9G4G7MHNPxxUVbMPnjpFmtBi",
  "key40": "2S8jz6Wxbj5DbQpomHAuhQ7ZK1yj851SF3VmKZ6ptdVRNGcznQgG6ASNL5EgBBEQVHEBrDzFw9EA24aM8jAvjyR7",
  "key41": "4cvcZf7TxrkYtaCUb144eHg9th6WbiqSMTUi2qZNr5y61CFg2ktVfcu4sBYfq9fqpTJdWHFKoJYf3mv2eRM3Pnw5",
  "key42": "gkjAHncJ2S1YeNG8h6PBN5HmpALL5FV48aa4XpeTh9mXzbHdD9woforaoBWCV3MmrgsCkj9UYHwVsvn3s9dzRkn",
  "key43": "2c1dSmC3Qk3913Vm7jFM1ZvMSjbsgPvGwNwA13u4yVNZZPmt6HQwWyhBeC6LJ7myKyR6VepMgPs3HZ1pV63nBLbG",
  "key44": "4hGEPXVYLmQRVNXxJDr3sNjy247Z7vsAUWWntLUfMcjnBFsBiFXV3KHcKkfHHmqiNMssbh519TGqcUxFMT3u9dho",
  "key45": "33oZ3ks4es2ch98gaTkbkEuwVcwgiQnh7e4q7V8M8KexE7P23YVBSHuNsxYrnfEj9vR2jJPoxuxv31WopDVovJb1",
  "key46": "dM3hoaXGy4Wf5CX4MVtmttJ2CnJRFFAWSCTF43N985PSc9t8wxhQfsgqmJsiCG12YcRACsE3E7uCSkQswuHDRXg",
  "key47": "44RLBkW3UZ3gW14sFu8CKMUJJkJiGyJzxKZhZiyLn5g8D9zmJngxcrNvQfFVeMmqWse24tsC4kYCMTcUJyeNjqxU",
  "key48": "2q2emrgmgkg5ZMoxmAkXfhW8dQ73vRsFdvrnMkMtfrDJKgC2XJBuZqBbxXJWscC6dWbq7dLB9UhyiAyDLidYEsba"
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
