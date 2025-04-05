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
    "2wdYXc1TQVBf2sy139SWTe2i3j2imYgTJZ8EpceiJ8qp7R9sdREnza5XcSAXtyBwFn1iJn2Jhf8jhsyCHjuhfjTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwFeBrtuuxQR6oyr8nwNeGgBtUQrZzzjvYcGnMHYo55skV14r7Hzbs1dUwbnW5qjTtLF5pDEyJsFjyL5kKv4cyw",
  "key1": "FuUdc1XF6eEHPR28o6woZjhM6VtjvHryyCnPsxd4dAhnysZ9fgXJ6c72iiXutpG2p2geqrkCsetJXTdXtfZ6Vvx",
  "key2": "453AjaH2Szh6XKyoPnB2oK9PTogPwkp8jbfzBBLem3kUYGSVGbRe46Jr89TtK8soN5JgRFNPTpviVu4piKXneCnG",
  "key3": "67q6LCdMuwmufonnSxLT5USDVyxwym2151nPhAMYdevkF8CaW7pi3WqbYX6y5DkAeuT1R2UkU7uGGJZ5WZRNRqDj",
  "key4": "Dy4Q75TDwX2RQpcRiwWi5abCKYeuAnMFWf1gmQkr8trYqrkMNfDCd44TRE5saZRJhd6HaVCohNLWoypUZv112zi",
  "key5": "471gKRdakUKwJCfiDemAWUTdUHkoGknVT5QrcHfwL2wBgMxvzxfvQVK8QSqkEPwds3WGup9VS2L2rAZ18fR2Xhxk",
  "key6": "5e8F8PKmuSaoycZ6GNGbA67haZAQaA2GPDTsxHzFMdnsxc6DbaPyPFvvpBTGtGeN2woUCeWYkkEgYA4imEdyjYPw",
  "key7": "2pZXsVh6Lugr4FZ88rhkw8ztw9ZJMtxwG4NKZzEpSar8QJFpJ2dTs983M2rmJarnonL8zqo3bA8qBVaY9GrHbMW5",
  "key8": "2bRWfTMeRvATN9WWxcW5vN6CmRDTfsmRXSfuGBFUWod6ESe4cBSkbRTgWHckK5zxCZ88iZWWnajU1biYNm2ZXCeR",
  "key9": "XNmxwcyKJzNhV9kp5yxMg6EKaM17xEsuuxYsYpSCyXGZ7Dp2inLcrUtaUyWY1EH9urRgCbUDcm2A1y1JD3JCgmD",
  "key10": "4FHY7M1iQyS4q1JPVDVgRUzVg57WM9HtsVRMQTs3dwuCUNoCTHsAwuo9Y85ScBMRizqJrno4M44ux99Mr1FnH7Li",
  "key11": "5L3Dw5v3xgWsPNE9nSysXpku9moWkHdXuATceKSawKQ3MVBcAkeapAZygYKunduuxWNRCrSHPivoGsvAC3Lvzz3y",
  "key12": "1P6REjduuyg66B2X9cgJDNRDXucxgRwiTfSaRbz6tJC2W1FnYZruWnYoa28Eondeiqv5pZQRv4bWREW5H1MQqRp",
  "key13": "2qzvmMe4Nn3V9DzgegcT88krrRjzbkfg4S4QKXHTzoYyQXV8UK3Ai6hWKfpPJbNEvUrESi4vvahmFSNJD7o17JLr",
  "key14": "8cgjWCcu4e68oSndFdkscmK65nrhdmbstyg187mS3LpigKB1gQi4WkZQKu68hSCgLqHoV5aCJGyhFuh4wbKJKTa",
  "key15": "Z9fvGBSu4PxT59CWfJnAv2KgthXmVmmZdnAGsgD2GyApWFTAXRwpVXqtwLq2HAL5skUaRCigWWtmS1sWw1YWXVU",
  "key16": "899KPxMzBDtQEhMYyUGqwjijiBTRTRdBmM6oXfaJaRoTsUDjzWox71NkFaQ2KYg3DU9MiovGowSdyTxTimmwmmj",
  "key17": "3ytGjcPNmS2hSUK5PLVwckLJvR7c497oJw4Yd5Tj4p7x2PoawHgfxsYJgRqqvTZWgq6jrKY48Vy3JtNh6WKk6xvW",
  "key18": "64mV5m94rH3CFf1dZN6XqrncBQYM6PcGKGim5qin2TMALM4UzMZbrcqgDF1ZJTSWaWB5wcVFrzvThFcsNjMPSYVe",
  "key19": "4X1a2WP9nTZn9WrLp7XrKWSw6y3k1iH67b5hPeA2thUcXzRdAKzJQuQJictNEGp8fBG8HS13vy4USPttHbbvreia",
  "key20": "5ayfNg3jueBuWiMM852oSdsXrLkXwNYbpz7QXUatcuVJzxxdZmHUJXRJmY1CvH6uZmU27pA3CWHBq345Tx3NsRuA",
  "key21": "4Fpb9BqeaDZJj6jpdiUNpBk55tRjHrPAfytGsLDLpdJ4dRvShq1bhyszrpe7M2PnvW2dJZc1d18TD5LJfaKoXBdP",
  "key22": "1RLjn7gB4B5yQe51czFrUJHeAQ9BRGYmsdxQZDbZVKusYhd3p66HTeEMnxEcBvDwE6i744LVZZP48ts1PWdfAxq",
  "key23": "4n3AxubVLyB44pPopFJpAdKgWutquU2zCBrBHVafgpJ8jF1hVqpf7oFZopHxoxdq5T3DVaz62c6upLFUjA6b54Z9",
  "key24": "5uujBA4fCCesu1D4p1H3Q8fK6QRXa727pLaBjiujWZAMBDgeQKce3LFcNrx7pPoT1ByrBdVKyMpHUVVGJxWfXtwZ",
  "key25": "uK8ThsYYJ18nFiH4cKhQLphbBnHFEYzMfYxQGUNDrTU9izRSnSFvEy3kDsuW2f8YjqbC3REovJ7V7sk44tQzssS",
  "key26": "3ZW7wyKNjaJd9szKmRPeKwfhoJQDKqk29mHotH3BbNL46v4ZSVG7U9aEUHXCbgidWVbKVRSif8xHrWB5qhtJxnC3",
  "key27": "4uytSfiNoqKkBAA3e3KA434hqJBio2GBDV6SFECgT5szcK1TSnsr8g2JWKr1mQburzezn6VxztZNk2EEwczLUDVV",
  "key28": "3GZ5JpgnGSuE2kzaiVszyxb2Zx6odothJtereggYRmqqWoDhFrEX8hTMZyauhW78r11djJegMPXHJNQxAJD3eUQX",
  "key29": "5DmG9eXPkrvxDHf47g3m7671MXorJQdiqJUkEgcyw7X5yGqDKLALZL39GSzbWypbX2nGDnj2F3JKvAYcNCmHcTqi",
  "key30": "2DAX7WxnrCckFmvAXJJLPjf6Xy2d1JmD9bCCVGsfQhg2kMcVikQTrS1yadWcNPvfapqXinmeUg9u9uJbTcvPqTJS",
  "key31": "3KbRjdPEBGVZUoLCYAYo9uJH6aiXgVSgfDPND2qnJYNws2Zzufd71sLa7TRq8Nz62YVMiEdGTVkrGkwuKqmsj9Fb",
  "key32": "47sUvNEqnHnH2dbH4F3JjotwJUW6oGC2Sy9Ymt18t9prjT9hbHdS8eUG2CejvCAVMSE96mtSsAZqUfQqyeeeazjM",
  "key33": "2DAmnbW6vgC4pDRgz5k2wRQ6Q6AoUvXpuEdCnvVSnXZdhzF5tCBt42GotTy4Cn4336Df8bRh7fhN7w48igbVrYJp",
  "key34": "4MQWFo78Bf5itQmdjxjzXw85FqHJCK8JzFfnTzqmPbcUU9cZWijYpAF9kjkPw3LBPZWMbfzz6ba7gudT7SmNzwPT",
  "key35": "3wjhvPMCv2BNZm9gL4rViQVUpSo5nyLWoBJ6NF99a2Xki3j3WTTidqY5XrNXoUTpRJVccLha4GxSqHrAXqPmVFU2",
  "key36": "tGbs7yYSBzB5dp1oi5Hmqi7bqbQz19Hqnkhj2Wk5yA1swWGJq9hvVauS1fKWRcjuA5DCi5hCw6ZoMVyqr1TXCiT",
  "key37": "47G41Fxi38mQLC7xUwvdPmtsM8DJ2QLeqQJUaj1zY32xrd1YB4mEMGxZMuwfY9PSc4avtoqsp8kWYwsP98Fw83w3",
  "key38": "zwEH1vE8eHeUA8j1QaFrHUQM53GuBk8bWrWeSiTHjaG75TXVxcBEjeLDDopEgBdPeN3iyk64DNVr7EQuqwADRyH",
  "key39": "2bNNfUR6iZm7vrit3RNRC3PDrjykpTPZB7e2MDTv75WVQUoYW1Ye9JXeL7uNtNvgUTnd23ohCTYMiJANfNeaj5dZ",
  "key40": "2P2sJNnDZJRNy67NKtPHL9BKs1qSjbVPNYA5ka6YWvMPAU5xYprxJViMEoAZHWdbG2YJ7zDSCwUirFLeuRRKS9HF",
  "key41": "4HoNeY4kavTJLfpaA3dT247Vn9c1A9grGU8gYbBkmfZ4xe1CvLCs9GPPW2V7s3v1RiNnonWiZSEo3qeCfcjdJWub",
  "key42": "rm4sYeUBFZP5AadTFMZK9JS2QaFv2y57q8QFPB1Yh9kS9szTi6iCSkr5f39puThUaucC87beoUYviMTicaMKtzF",
  "key43": "5vT43UPWgfJbt6gBmM8Gdh1mn4o9CDfyFSNEj9NGmCbN89829ofMDugxbCb8wV1skQeNuNq2FfqUdwtCeA2gq2oy",
  "key44": "5q5YL9MTUwjwMYyTx6nzmiGLNHk89ZruxFXAXko5UwYaWLyY1bQWP4HtUojmyMXbEtTBTH5w7uLJVuMwL9hJrdtS",
  "key45": "nULxhXii8ndn1cEgahhyxdS9tmWbrxe7JQYc4FfySvy6xNiGMpTTzMpLw7BfXBEx1UBGzj56hm2zDzzrpbHHSix",
  "key46": "4BTw9BUzMuHWufu9vcu6bt7nLhEk9aAuFVmo5HkoJSAS8N9KS689ac2S73EXGrSL8AxbXJDSynFPnniEqT9Z2tbC",
  "key47": "3XtdBB7wD7bmMXRm9pmwYMCUj2SLepLuLvkKBbcfJ423QNZhGh7QMv3hu4guZPyzXXsXmcJn7gPc62Kgs5GrvajL",
  "key48": "43YKVD2ALSXiH4THLbz2JvPQf3EJFHBM78SL6ATTg1YG7TMawUbBgu3vgMAiw7HK1BRA2ZmYmukUcPHreFxLnPbt"
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
