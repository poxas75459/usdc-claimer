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
    "2zZJskdjspKAXjuhLB2Dy6EVtipKJ56bSVri3eAN7kJVKRQgPp91ye2wPrtMHk7dk3S5dLm3xcwoihztFyP5mfhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5FLK5A66wfdwwmBBS2tEicKU5LoHbWwyqcPQ6qTEUPnxQJyeghWDUCTs9XBTE24HQEeEmh1wbTJu1kjSKc6iGk",
  "key1": "4ZWcrRacG36twDWzmTfZwhfghkdtiqFobycdQsVSKuRS1AW2yY4NyU2t5Tq7atVKZRpMGPunuo65ostti2rY7EAd",
  "key2": "2fo5FU7zysgpR3gdJQSq22R2DkmVG5qsk2RHwvJmcdP2wjcKMSFjjXFhmVBtN52dhdes5PDDhkCdDmrsHS6DN9TQ",
  "key3": "4BsqKbDrjNsSXkPqWy3HrWJm1Ghmf3QUQdx2Awj7TcfsJ8SHXHxTn8mK8zthRm7i4gHMVumPR81MpUpHLGpvkiVx",
  "key4": "3BmWktaaEgipjK5XvooAHJaYth8FPjrvMkyrDttyiiag2KnngRk47y96o1DNkFu95NSBDMHo4sqyvcKuBkFFd8UE",
  "key5": "4ZfXddUJ32Si6V3a36q9YGcKuXtmXmkE6aNXsS4zkGj5vTtsbbEP5oWV3CSJu6RUGtfGNAUUNpRVgGKnZN58qojy",
  "key6": "2BiygFH3UibCjh3kQVb9kkxzAssUPVQpsh5aLTdnJy9m1X6h3g3Qqev1HmsupSxJZCRNgsHbyjKtrKxNRdstgMsA",
  "key7": "2GVxZVLVUkKULQNNHkh3TyGCMqKPMo5aTBQH87AXBjZhSuPCiYxjhW7aETHrt8wumoYfj9nNA4cJV4F4xBJdLKVQ",
  "key8": "AHfkom12baJTRsHywomm4eAtghgtxDNMymoy6XnaPC9Mpw6dgAysi83PqjRNNLwQTAJSwa7faUTpPCGbCygxgaU",
  "key9": "QoF2g3MxZa8QjuEHM6ABrzwuKYnWjgE1iTBKoqMxPNWoEaaDWXggX8naHTD1GA9LMii3i48X79mX8wehdJHEUEc",
  "key10": "4BYmyiYMs5WrY6o3EHbc7L1KQaGV1AG3Bvhrdmjha1hbma9fawXNwLcC8TtR7LrwoXbGTJgmwda771fJvT7nnaYR",
  "key11": "3U38xdFde4MUHBqDXQTohV7611dioSKaR6FNeeSJxKLv4tLsGfENBprhuzCxxEyUSxLA5wHnEgEvYtj4avGJaUws",
  "key12": "64jecCSaEbqyWyCvYrjiM2coF4GiKjxMxu7EbuELGYUh8ovuU4HsXpjyxd9qFph7vkvEe5rZ8TLSdPsdPQGMJurU",
  "key13": "2HdH3p43ygHhN4Ps7kUgx563AA8Gs2T9sSzubsuE8sqMZMyCnx9ouYoXJPHz2tJ2ktq8xBLpbmMsprAz7R2ABL9g",
  "key14": "561Uqh9fYemEuihFFTkrbXyPRgcNaqGcbMJSPWwd23hiwqTQihF1DW27dasEfUXa9EHCJQh6Ug5AzoF3PNjXiy3o",
  "key15": "52qypaFeXkn89p3Hprem81ghA3YyJTKiWR7BVkUY86Qru54zADkwz2jV9kY7uSujrFVKyJZDrsQtsjHHKjukHauc",
  "key16": "3Vu3GvuHpqhsb76r2byhg6Z8iFCnG3x3ERnLUv1qPphcCfmUacqRoSUPFppez7m7zuQ4mQLVJPpk2tSzdb4WMyhe",
  "key17": "24y5svhbdReCYiGBGxm2DzbHDT34y9ocLepAuhx17HfhRsjjx2gV31zo2gzs9cfB7GdKPBV5ZWYxGVuE7KAPMXBY",
  "key18": "4HD3EEkV8wVG4UDHpvGrYEDrNGA2LYpdGunkxVjfjg6nBi7Hk5bXMbLyX4GJYWuxm4uuGWbNNHybG4rQL35jRBo2",
  "key19": "W9Hbk5Q49nG7jy7L4wTr9qU38DGCJ8VZwDp1uxG835m99HYiYC3sfV8xYoGAcJ6DGdLimQoKFFzivGPTiT6NZic",
  "key20": "9GvztG6vyMvr5ChweceAC1R5Zf6MiseBCZemY6K8bMRu1LgQDQhN5TdrX3NX4JkpLe7BKPoiMYxRC1KTXD7A9Qu",
  "key21": "4Fk7TYjVyY2gwGZfxZsXpar4hR7rrhiYPnEJ4BPnDP6ZTCeEfNeKv6ph9DXn3kx2eqVatNnwHoR9wQnQvrcAU7VU",
  "key22": "2HQXaFkRwncFX196SHLV5Jzx462xhCAZ7XhbDAqyLge7XKHKBNZmCNCKhEBQ4RUaXkiWrBFwts16ECRAtPsUMLgn",
  "key23": "3e84DjnQLkbSmFpUQWSBdwVKpTsix31mmVgjq9Dy5yEDAQ72NjwSffZjN8v2Ny2QRyP7gF4jx5J8fL8jhhfzWorG",
  "key24": "4vJcJQ74s5VAcEtzBhtaKgjeNDE5RzBDXHJQBfob7vtBubxkZvjJFZj3MQvfr6wGumMkS1ufj5Q2B5aznuzF16Ws",
  "key25": "4sHjydDxghBwzCHKCe5gwnkQpd64bAYGEefbtPfWKMrYuzZwjZ4DLtP3Z2XymkiREKThbY5aRTo8uD1draDCiPcn",
  "key26": "3kKtVaNyPqKAAk1eYNrvTbyZNn7qLzTF6ZX8DtAzLj4Gf18iXNsotr64brZCvXL8dW2ri82r3Cqa6UZE2KVZfLuT",
  "key27": "3gbPJEA4fMhi8nB2tK5Z8NdzCx55TbJzoKY1xXSvUXKXJbzLAKsBdVbkRn7GmBPD3qgVcKe6cTUXrdVtwFNKeiB5",
  "key28": "3K1qEtEai973Gd6xMx6dCW8eJAXV9W8tx8PoBjAhKraTgnodeajR7F4SKzGSof32MtLemWVCHrHZcBkBttdtGZb7",
  "key29": "4KC8fFEyAaE8y9iwHB2kArFSxDK7kiXfuTHGcCTcWisSE1qVLJfbxevgBdMPtXGbbLyig2PnVfMrSv3M2mxKLoi1",
  "key30": "3aVqnEYkoUya6c1X9E4k8oP6AiaFnUNX2b6QDoqy6PzPK8fk6nTuCuyVs3KnMSvDbDbL2U9z797AEoZ8Gc9Q1WVG",
  "key31": "3rE4G1dquM81xMpTGzfHE5xLTicFMh452dUjxvj6UHmWjz8nKLPJSpe8ggEMgiQzMaECkwMjMw25X1oybtAowkLq",
  "key32": "2hjbUtpP77magUKwYZYq9Fi6n7Nixb8xweqCPr8jjj2XR8G4MywAAcSUF2f8HQLeLSZA4doyU2AbdDkEANAhmCke",
  "key33": "33MbDAB1c7rt7QRz3kpJMP61BjZFtka8XRkaHLh1qheVf9fBqpbzySushKiFurMyTHR9c6E1eS7jcCoLgebXtyPW",
  "key34": "AVSMR5mR17ujUvEenXskMCteCbtpTdcbMEarjmBoBMubTXh492QFJrDZnjtn7DsijHUSAyrF3KSLwqnFdCgh2bn",
  "key35": "5nzg5cthTxxHMhZ7Tcr5nBPidcUg2pkqQrn68oZmi8PJ68xQvr6MAz75tbWBwj75cBRJyWjQcs4dStVf3cWevRX2",
  "key36": "iohV9MxYJJ6KFhsLmKsQwNjkznkQEFEf8gzGfVtA9QVdL3U2v7AQYTAWvByngYfsMWhm3DzGCrPvqwhB4DmfVEJ",
  "key37": "3VrZ7et1iHhju5o22eEjce4fS9Q4hF7Qjj3eKDAS6TaxrgzHtRYYLunFNA4P1XK3oL5augBT1Uhes8Lvs6P4rT4L",
  "key38": "66G6tDDu52mpXf6b5WQuY3qYrN6ecKtTqvz16oCx6hqPgRjXSoxM1M9VvJRJoWAn57a7yDoLrwos7urXepGrD74s",
  "key39": "5CcBLUV2GCpnZJGpwwvWot4GbRxTi9xETfJusvNbJ7esKimLCFfm5pqddn2pvMfWjDTXFwDX7YNRgmKT84EACTEM"
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
