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
    "5uf7YJQV4Gb3yhBTGxCMS9bVQZcFZhNtm76TvGTAYdNs5Y5K465XW4MSKEf5o9ckGKLsYiuEWniAcUkVBiF5kfK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V32ii1aZUZ2gXjec9YAA1XYjxpoSXrgUq3nSwLFd9B6enJF87rk2iASp7Ty996SP218ZTcA9Jiefh9C5oAiFRw4",
  "key1": "4LUNd3neACdMtXL6M7x5pGUdFyAwj292uCaSPHH8Ke5M8NVuFLJd8fWhk4Bek6UBiYyjF15TMpMSxXSJJeGNn7kJ",
  "key2": "G5sPLUKQZrXoHSv56TKKQQN4JuTkEqQx7kUgwYDdQG7cCHB5tCYXMkRbmXTmpFc8t44MZj1dppKhAZyHfxN52wX",
  "key3": "3KCcU1gZs4zRcDfUyTYTnKB1osqrtWXg5cnwLrvyqvHPM1L1o9FZXXP4XVsfa9dmtnPQQbFgAJ2rKABowZDPKULZ",
  "key4": "3uDxua42FP1eFHYRn3GcvCdVJES7sGzJHYSDXUnxkrVd81XreMCQ7x39EGruE5LCtJNWBRBWUsdWdCzC4U1jMttS",
  "key5": "yHvLXuuDLTUZsRDoVLpZREHSoojGvVa6RwDMR3Eb8Bmhjq5oR2HVvyHai2KhTroH8ZRKkmE2tSrSjcY2sitnBk9",
  "key6": "4XPMpPqsQofuCh8RvLL3CxenvBBNMSN5Wb4L3ksqeBwR4iVHEAsSfYcsa1Pa2e4hw8eiRTqJtPPVikKCibcautdN",
  "key7": "3ftsR5h5f9VzWU7GSoQ3d96uDpsWG9TVb8KNdSkXVtpuDtp3UvnoVBjnL9pzwzXKP4mdNReccVUmRbDUyAyb6MwB",
  "key8": "3YEWkaHxenZaBzgy9wZ72gPcNdBgUJkwaV3xVpjnj96phNTvrNRKrnbZuRSkY2yY7Vmo258fu9kqRGFqVJjJzYaY",
  "key9": "47e2psxmj2S4ti8Zf8mbzEYWUoZ2z3JVowe61gQCA9M6bWvZAiHpWYRrG1xAVFwAQoa91o261u7GKG4KBGiHgazV",
  "key10": "39e1ANsFyUUmQkZyuMjY1EBCr3SAVnuVWR39NC8s9Pytz4yG9skMN99YwVMrKFmvViFmfxWmGBsV8WEiXhXSpJrp",
  "key11": "3oKaGUgojGwvBC5UbAdNdSgjrdym7oe3tLqQiE4D3Hog4AV72gZwUBt6Nj5pbFUBwsPNLdsuFdXt63p5iQP72dZs",
  "key12": "3LMZwna9Q32Y8u7FJauMr9Pqxvi5hBysNk5ba4Mu3NAWgqoZHuS4BGSmBhaQ3aKma69sskZLV1BHiyrKKR1PhZ61",
  "key13": "3vqxJejV7z9sFXuo84e2xd2N4q41kydK4MdcESGD7ACEy6BaJLWpoeTSisSrAZyktR94cz2oPpDVhX9SenXRDsQd",
  "key14": "4QQ8tMPJzw41keDKB2Qrj61Krz6fyLZBavVfTG6o8enrmYLCnph6UQbEPBnwqCYTrahqZ8FN8STpLuxoHrmP8zpP",
  "key15": "3Mt76pksDMHZiU4Gwt1YTYbozy1MTzD7DHzSgu85pud9Jo4Q6mfXPKCuJRswf4dWPWPDJ7YGmfaksNuqPFWzU9c1",
  "key16": "4a6HmJVkdiQqji2pUon6hytWDsQJowBBjULWDynrsfSEPHXRDPpoFVn2NLnkyyMvzCRtn5WaS8sD6o2NvLedufA7",
  "key17": "UTZZn3m1E4m7GSyhvJ7n1jzjT8U7q4nkeNdgAw6AztUzkGChucSJQWsuHHJmtq3bcKfJAi5XRVuxwF9fzcLpXmu",
  "key18": "5rS2htA17bR3u6oXWQqGVsrGb5eeSwhHRRULqEgWzsVp69hEWkEqrfn9qBKLGwdxVs45GW2QnatnKUPusJ6WKpWS",
  "key19": "46SXaAwh7F8d11z4WydNcdDYeU5TWFCA4jiQTsKfZsjoc5Kxzs5v8s2PNVVrQgT4bkDNA96nDwwwAmw16H4Q4CpU",
  "key20": "Rwnvo281GSHWeRQWuSxSWAKMHpYAT5rTwp4yW64gjfiveyiJRQaJVUdXUuULWm2pdLsCr44M6Ua6oeL4RudgAVh",
  "key21": "5Hx85zeQE7WGcT4WC7ByGywUqYshtzAdm99KHGahXqJj986RWNS4CyoGbtgfXTs9j1bgRPS6VkEmMc2M7mEudi3t",
  "key22": "3NGmAsXLq29R5M4NgwAReMHvpMr3kNFgmzfmoEassbnChSiJUefxEsXLSihcDv7Lx5WEtaV3E6YKwtp11aZZ9Nrx",
  "key23": "2c6fqNruh6TbM81VEqXBH2phmQGUi3Xtvdz8Mo4e25KUkcTu4UQ7QD8EJxTp4uiHGfJ8FhNLUoq9Y3tg3isKwt2q",
  "key24": "3xcEiN3vbhJLYAiKjXAVc3LnFJ8WTsV1YAk9AekKzb9aqz7bYKyHcPtM1hribd9mYQQBP4ZMd8nNBdJCmaYvyPRw",
  "key25": "RbvZQPukJNMrctVFwqygMEYiMtNGAwBtV5HzZeFVRUpqa3Zjv83TFETF325KvjF52gfCvVJ4N1qaKaJERYAimiZ",
  "key26": "3SAwT5WgnCufLzq9DieCpxYrzcX4dtXKuod3k8aQzshiso8Q4U14xcB3BJyZ9dswjfE2z85X5mN616akFS5ZUygE",
  "key27": "3M3oueQMZxUC3RV7a3cXeXYsgW6Xg68tpsSFgR2eYsDYP589kznu4rxsagvRtkP3tSCrWJbr2fw3qegTLxfmJFwb",
  "key28": "5m5gs1K3w8ZeKiFECMPQaQdwc6CqgHh41HGa3kZmDKG11EZ5up4S3TvVGNiDagsaBsAEoUqMYz8RsJ3Y5JD1PP3",
  "key29": "35QaMD83NHZrzsCmaQJgEzFsTVoKV4hv7khJBrSxxnT9Nx4dPMijGSUYLKw74MdaGJP7rvdD7Vkpe1Q9xHv6pZgG",
  "key30": "hXbkFnUf4G4cTxDjy8hHsW3V5LkKTK8fPGYaCDETRwwcT6QLcrFaHLpTvpNaehg8Zt5ZVcpj8ne1NrPYyXmbPDK",
  "key31": "2BkgzyS3A9ckK1JABDmSjLmobLCAMryEVfvU965thPw44sBNpG3pEpLVWjToFFrTWptLhHiP3zthZT6eHGYnyKgw"
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
