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
    "2pNZwYSn9ytwS8kYLN3XCD1PEXcq49DhqdAiz64EevdQuMSvzsu4GjP1mf3h1CKtS5N5ew7KV72PWaKB5eSmVxao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quwPfW1aeJsvf8u4GSdB5tZKB32uTHdzndWFxpG69UxWWrrxznHJP6RgriSiuiE1BiCMGSxxkSxu7DYnAqLLBxV",
  "key1": "5H31j9CyuBkaZ4LTNQGQo4LRu8BvqCK7cNhnuUJsRgKtqCXG3cXMh6USAKzjokWiGzTjpxMXJvrq28F4c2CYFtjK",
  "key2": "F97PDmoaVzYNFXzsr5Zy47Kg4Q4MfANJnXtjfhAToMHsqrstbXAAdHGATwbjhuMswHnAB8KAsGNRVdu21swZSHe",
  "key3": "5dTnpocKedAX7xZyFte9NxtBr8mssFGSwnb111ZfcbugFH8rXBHn5euEEmRZhTh18xWeCukoFjqMeMhRoCWS84NB",
  "key4": "4f66AXXsGz4RptDqEZLLjp9p6isZagSfu3HJFfwmCKfdojqo1DaruH3zGDQdZ3MjJkn7ZG9NsZ2Pg6b4AQ7sZ6oS",
  "key5": "2mR16hoM3S5JbAvKYAwiDoEsmv5jWNeUeXQWMToXwame4aoYodtKeugxx95wfJeKE8nW7oqz8NmCs7L5YxjLQvY8",
  "key6": "4KETynbVs3pfgD1YieN5z7xXoWysJ7JcDagqoTUy5ickPy7J1kaeKTvRuebZvqgRubpDqY3bAcFWVa3ngvQyG9qC",
  "key7": "5Bmwzxu9BsTA53hrtZg6V4jfmB8mTShZ233avE3hyfjbxwyrSDmJMDJwQvS1LciQnhaeSdPYKZLDXmamuMrqbDRb",
  "key8": "XuoVYzYjCzEVsSJUpidzZ8QgVEZpPFjheVSEoCfDeU2j7gWxgRooo97dVJn5e57RRhwPoPUKMM59wtM8XgksCco",
  "key9": "2TPrz5UpqeR4vCtDU1Evqxk5k3p8UZGcP1w8mbYYPrN6hi7cTwxEYJjynYtPw2UEmuzqfbBeXQVBRxgXxUcfSQeT",
  "key10": "5cJNJ8WHt1HuvcWc9oq4n6Yu8rLwraqtt87TcrTNNiZfsxCEwPT3szKuMjn8B2RK26GCmPiXK98EXxVGRKK2UY7F",
  "key11": "37qTsi5L8begLQspEyd5tHWvifK5PVTn4emN249aKvpbcSG3xVdJhED3Vrab8jvkQqyaoGpGmemTE7Pd2fhT9vJV",
  "key12": "3Bw4aHZeu7xeLATR6b7CgsxqzbDPPyn5din87LCAJz9EX2oWEP2pUq2fBv5UQJZCiyoPkZXdz3vMCc9VAfuc4Mrk",
  "key13": "4dxT3oKD9M5YXaM4nFPN8pqssoBZzcSAbgY5MUnEokZ6weZc1k9fQKkSwGYjEqPapVkY3ipZZz29oFnesFbx2ifA",
  "key14": "5gPaP4eqCC5AcxBMLA2DKQ5g6CnzUazUkvWRkiyHwzAfDcQPSHK5GLbt8rA6Fo8BG3yHgpJ5VYcLphWQXAFsdSYu",
  "key15": "2KXTqeFEoBPSZMFL7SXs61z3vQawVBDTCvX8sEJh1T2ushAVBvxJix8eKQuwYPJVgVrGud2Brwi5CjcH7wvddcB9",
  "key16": "5NWr3ecTMw2qvqhTKb3tQWmce8eRhtQM7zhjrtRncTLwmiqX6fioEypWQF2xBMEHQo31PzF3LdDDTxoi8Hgiddsj",
  "key17": "2sBo3mASfqixf6G4BwusX83NKrx2ZTTEzCvZXxwYfz1BYrMGcC2GFvnYBfQUS6VWKduohqV47H3UBnQnZpxDK86i",
  "key18": "5VK7boLUBRHqrBekGn9B5ovhnobjZ9szDEhZUqLiTUdrM2gi8QQGXXARmYwoXGcGFhoV7SdPDqNtifkNeheKYNTg",
  "key19": "3WFCZ9vXDNV1XXhx7S7pbte4KphWKdNUU1EinPjfacqmguN1vbwZYmFq1fG4RnbuzZScxmWGU1ndqphpdgxe6wnz",
  "key20": "25bgtx2W2FHnAxwbTmNtxQxPMPYAwuFxvYerhAGcDKzcUgj4mrgRUpTtPpm11ikrhRk8k4t1U4YMefvQ4hiasKzT",
  "key21": "4zMhPN9h28fKsZgvDG8JwQ2RidN12TCbWLWrFHDdg9KdAvtCFe4pdBMuuSP2fb2SUGqYEc8sQ9fsYtvcvu4Kumzp",
  "key22": "5TcUpyBSak6RmGtvVpqzZZxpGP5yizuoxRr8anouSFXPeQPfA1a23iNowq1Z9Nxzw5tyxbMncqq7ty2fawcCvPPi",
  "key23": "63SMQNntAfdyNTWk1HTk8XuBeVN1R3Xqqq8xXLL39GfjuFdtpM7tCJvou2hkTVDimMYLvvbUN7iZro8KNKS83nAa",
  "key24": "S5iRQrxkpTwLkJBfM53j1XovX6g7wPCWpR2DbJP5QBt6CjRnB2655uYoW35jbEriYt28XnoGnPYuWmHqXf76J5T",
  "key25": "5nWjgjh7pY2fmcRt6Q59iNoH6YmCttRCmCVtcWfxWhcZR4cdzYu39f9JXgBfLm4rRzTF41TYGuCFDzhEiDamENu4",
  "key26": "5c41NYpM21J54MNkDo4Fc982bkp36dvEvWnM3jyzpawTMeNuiBhgae4bzGhduqwvoXv5FgvBSV7ZrHewhg3HXqeV",
  "key27": "39uw49v4DH3SohqDpcD7QQNFnn8sDh2Hdh7QT4XsJuWVCvAUv9MRAWqEPUcfJZeu9F4bnKbnytgPnfV6w5vbmhph",
  "key28": "2188SrmU4ja896N9KJDfAS2iaeAdeCcdSKVxRv9Yu29KUZppimaJRywgqokqDeBs5kPc2mvEQ1NLc5UCDb3sj8a1",
  "key29": "33oz1hrwCT9RAeHsVewnZPpNDKM4VpTGGbT7qJN9uB422zfWhBGidHhFdnvdvfyHfU6XQheA94zie7Lh15u4Xba4",
  "key30": "HDfE9zAtrst5Xdj1LYQFMBCPNa5VBBvsPv1dLKM6tBg3wzxbQX7aNjyBLyKaKasVnreaWn9MoCvqC2R7SHzatmA",
  "key31": "2CWD1C4uEp2TpxoRbQX2kQKV55tXoU8VANQPozaLp6rphxyZD4v4eR4oY7N4V6SnArckt5qJC9xShRSXimbxub5k",
  "key32": "2NhbdVLgYAvTBtU62SMVdbPQtkjNriaCoZMca1TikaXc53VwusGZt1FHP2c3FjF16VJQm7hmYMVAEZ4Dpi83meSq",
  "key33": "5bgygTwQQqED11PCvbScWVoz46BKpfu2bUPZjhEfcgT1cqnCLSKhcVeHseA1LJW9e9E4CVw4K4BJQUXWHSECE141",
  "key34": "42NY9pkFmfX9pWm2g2KRakvPKzkhGQgMckGzgPRP8YqHgAR1MvHNrdKv4GapSCGnpHSrqffHzUBTyEwpW9nsarFe",
  "key35": "Vy2G5dEk9L8hqSTQzERi3eewS74RNzbd4ouUbMzLw9f4kMDCQhrQenLuPWX4mMWPJe32gvtoZo7iPxqG29KtjUL",
  "key36": "8f4cK3qaukJMu4t2zz9XgEcH8nAXKbaob1Qr3wVBXNb7Pe3d1SVWu4hnrekQNEhcfMUkYGeeFXXcUU1doCmvtv9",
  "key37": "aP1ZFZEh6ASE43vYm5NQXH3rpHMrGjLJjddC22LDSJTJrtTJzizcGb76XVwkoe2cGjbEBAXwArKiXoGCBdv5pzy",
  "key38": "3XqnCefUPweDExvgPaNdXe6e2PnUQsmGpcSihvtFdnAFepijTcuT6NbsBqJmGFRQ4K3RhCJkENb2B9Pw24agANgx",
  "key39": "2tpe9MPgD89Z7cpvQmiveSPsK4iUZbEyHZSezmMzaPd8X2JyXyonHdZjsRUELYyUeK1To8pfKUTwctBFjM5U672U",
  "key40": "3kMcRVU9jfwmC6wp4wYDRzr1N5vF9VFkJgcu82Go6MUFi6Tw1AGUM3TtiSgQawZVAfPsdtPRDP3hFcb4fqkLTRpJ",
  "key41": "2DvLeMDQ7PbWn5L5zjnuYctaZFWnBvqw4fQFjMthztgVcfZbtmhafG8AFwCUgbeaU71u5WLvtcjmLaaZEh5FPDfi",
  "key42": "3haGdbi4xzf1EzC716UPqLmWWUWDyTEib7f9HvEeH2NWJGvba9Q6jtQ5LpjQDvfGAzgDy1ithqG6WSnHoVXM1K3z",
  "key43": "3uoTaHZEW1AteqhdsSSWYGc1yZUeZKdPKU2XChTxn4AibHYmW5hMo1ttt7PXRnD3UdDzWrvSi2G3wKsnTB6JfXsZ",
  "key44": "2sjJddRrSKgHYxRRXTUXXWEGdhRdh7AmwFW7UtLPiCTGyUxvAX2k8CK8UVnqtXbY1cuTGdbdWboDWFn5Powxp3mC",
  "key45": "5Sfyt8kPLqNpzQTYBH7qfkZm4HCvCzLMgTLiRkmtJ6QfDRhG6HRmDaEqLe59ZJmfro3uVjK5KnnQRdrAyUdoxbwA",
  "key46": "5xp33LkcCchmB5DGVwtsGXFAe2FpzpZCLvbEyuJ2VGKykUZ7htA6isg4B4zYHAYcemzq1S5tVzpAmhZjhk6PZSHx",
  "key47": "2PyyYUTktNWiG83bSizHNZrR2WGGxY8ixxdQzeMAf8F3GdoVuB8C631Dggg9LP4R16CDq1d3j1kkJ3EoP3uereHH"
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
