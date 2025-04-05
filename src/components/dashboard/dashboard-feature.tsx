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
    "36odjZkqvrfpPu6m3oNvrpRYnJB9xUHGKz79u1BSML37wm3rwvPVHpXPwvc46cw5euhihTYdgziRxw5A1saizB46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKv5cvykJSbH7D4FVaKQhGF7WMw2ezbvnX2nkMFTbAVii7cRJkoAuzTLqS3up6thn9eMgRxd9ytJ12PViAsRzwi",
  "key1": "2BKJ8CtEBwGyZF1JwNvDcpByH1xa27FcHSuPvRSxFfV4EYj4BHqfmKaKMo6oKQ89jaHY2SKWHzxnMAkwT4PqEYPN",
  "key2": "4nvJJkwDpbDpB8R7qNrUtwhiX6rVEs8e29iKfyptWVRrtZj6jizM6C4k8oz3fkFMuC7kpyJ41Dua2e2ZDDEGnuTQ",
  "key3": "nQS8hXNoPVWU6WpUcbWBEFE6X7SG2oJBZjNqvnGAt9ovkzncu1Jpxtp6WJEoyXWK9eaEGPxL3KYAp47Z4AhXbUc",
  "key4": "4u4AbPDdb5de2U3jL6t6CpJbUCaqD5HUmoUu6m82fHYGeuXYyHtGDJHs8jkXRXh7gtr1uojboS7FDv15fHVWqNFa",
  "key5": "23swx93tnyyP7hMQYbBhqbc6y6HRhUX2CYaYRq5FrCZqyPsofqVHGgTzLhxTsoXgWAUNKLJWDYAwZm28ksjGNRGW",
  "key6": "3393YMM2D2QG4bytLMNFooEVmYgKX8WMx2A8vSfzLJmVYU3WwzmFwNfEtJSabp6M8S898Yzq7ArUhuDLD1REUZJQ",
  "key7": "4Avnvob5PNMTmNugNkHuThLHcHamLaXhYE1WiK99PEhPDmiUsKRxm4p9SwgyvbAA2uEnzfCE5c4R1Qt2CEddvWVq",
  "key8": "4iyiFxp9WDd9EwR7UhQxb5cUf7qNaEjHXwDH2osUfaMpea2ykqiZPtP5iQRz3HoTWZaGt8bMYLRyXS3Vj7xNV8yM",
  "key9": "eHfdRVQEpRzHew4GBRQzzNzLuMXoD2xRnFxhgZAgoaa7BqH1K3yCmkSL5Hp4n2gMGnTr8HXEjYZSoxLkkihbm8T",
  "key10": "5Ttx9fa1N3B1hFKjckeCZArFYUb3pQCxvMFgsLy9jfGhkS87Kpt6Y5ehVaEhZNhuX3i9ZoWxRHM762ZePypv4j78",
  "key11": "3UrgS3XK4GfBSNCup5hodt7gUGebaZvy49KKxNvDpXVseJKZqen1Nz7HEnQeKSxDMCNHDJCvpTpaeth8Ea3dS9i",
  "key12": "5B3XzcZ2qiqswxeBB1z6M49PKB9CFKjxtTaGX3WvhnES9hfbJnsLMZRh9bYTRGrkTNpSAkXhVrbBnqDcdzZr43YY",
  "key13": "2ZjHBK7VxWhJG3dHtnfWsWvQXoJ973fxHkf2FPK1AKtk7gm6JgvWhEocg9BuzKyek3et5KCV5eDQBfctP9XSxooJ",
  "key14": "4bgoAK11pcpY9d5XAzBEaq46rcqiv5bgMhjJv5Ztj6NRbn3xNyfB7AbsHjPE1cBmFuTSbWpuo7oRuq3dZJu6DvCR",
  "key15": "5ecvVXh3YdMhruKnQQz5RkVpimD7NqwfbewM3qGqXvUvMDwgPMcHBX5SsM6tVkqaAz6LQnMbj8SLBouWBSen8i8z",
  "key16": "3KohSPKnaxyycN1xs1WJHc9esZCzHevqoFz4SA42uBtByfLcVcNNZthnDPbA3xHEUTknLDVVVasKF16wvfvfM2GJ",
  "key17": "4UABLAm1R44tHcxKecVdHFnknZUKwQGGJSd2jp5ZW8ZbmzutU98bQ5WByozhukGMj8TwBn2nbkcoq49aNdWQFArS",
  "key18": "5Y6fBDsMj77KoF2eKkPjT5rTt6VPo3HCTxBJM1cbZpNhszcByCFa3xGstX1Leu1e4uAyyzdCCLt1sqhoWTqoCAQL",
  "key19": "32EduZNnx2PnUK91ycyH5wre315NSSfuXHyszBAe1WJLhAhu62JAHEvAuHW9R2MvFqnJSW6QkwdXzpMo7six32eA",
  "key20": "25zsHSdzDojAgN6rE9NJekqDrL2jTXo1knEp6FtngwSCsC41wq1Tm46fYtb6UFrMrQPpGwPh5GrdWhDgPwdmBvLf",
  "key21": "QtnEM9QwSiq7SFC3ccawKhjsWaYCLuCMU1T4oo84ExDCfWyVxQLGm6yYwU3JjK9vw1LEUso4z7N65nv4KSqqWGa",
  "key22": "28p5CbkKAr3m639uXD9tr8kCkEVYSqKtkZfNUwXhLSfAcgtyeXfCyG44yAnb5RQ9UbrQicmMgy85CAqKBNJkqbxs",
  "key23": "2P9vzN4SZSe5VChgeRRd6fN61LZigfnHeDEPcYQJKUJETUAnSLoqYMogTfLFG3modTLy93eWSatGogamactre64h",
  "key24": "4oFYfR7ykwhMvYjKFuWr7KAxDzjDtu2F6B9vquaWSukRbducuNzjybRBiYQAXS6oENLnJ6kj2pEcUsKYLFZQKgZq",
  "key25": "dFNAmBTGWsozTGw8jfNVRjftNG1VjynniLdtoKYtrr5vmmAkMut8a13V2RS4dL2AjvmrYWhzsEquoqbYm1pviEC",
  "key26": "2SLDe3xVdJNhdTdx4gdb2RvPUNYs5eP9wb826hftkGqenNX3QJB3dRt47Nr4HwEiXL3JJfNgJtrGLAvLjfAFuw7M",
  "key27": "4jyX7UbSsVBPmUo8hyCmJu4JhDoSWUaJycRnDofiVGkp16RsQ6LRHhch1Dui1xvHhmmkpAZ7jBJT8yyF7EFhwZ5M",
  "key28": "2xMaxsTSYSskXJVZsmbBp1nx3u5RbSdFwTVH1Gndg9mMTRxuVHNDwpd2JQ8VR9y3qiVAmCUy6Vu2Z2nvKoEy47SE",
  "key29": "uRHSetc1YBJmEEjPDiqX2864Bez8p9aszGAV6gq38bYcVDE6hG73opnN9zQJuUuduwcn6Kc7ECbCT2Ri557qdC6",
  "key30": "3npzNhGVLGAJV1w6BeSkAhHiadrbnyktyB8aqXbwojLx5UXrA6uqeSxN3SGXNwB1C5AM41sxNm6XfxEaQ6tmZJeS",
  "key31": "hj5wXq5eJSUWpnNS2iWVV8RdRGiQatxnjHhN2sFyneJrJ4Ubc7pdFBEq5LnJcuGHr3FxWDFS9NdksM8mAnyB4pW",
  "key32": "4rmKxv4AnAS1mJFDP4cUDH9e74KZtXWoimULz6Xik1F1PYy5keQ2M5ycKHrwAvoZW1GWSaniquUZmB2pb8MQQE3j",
  "key33": "qQWJxNtvQ61TdNZ9oAQeujimrikVedSJTwW88UCafnCiMRtbCqFKbfB4xkBLeje5i2gwL3vPzFNq1X4EqC6gTV1",
  "key34": "4ryUa6ZehzH84ESEUPdZztyXhrq3egJnZobNpUYjcuLEseCXMjjUK5Kk8WWwv5XgZs7tPZC7rEZPKd2eGnbCcegT",
  "key35": "5tBgTq3Ugv6BUoeXaB1Lk2kUXJJ6uvUW4nkW83hufJTFRDJkzGiCbQJVW7RXFXAmCXbYH9yZ8Q1HeZw2dTCyUW35",
  "key36": "4jk3DHv3TPrkrfCmmfS6DLqpojPHuCbXKTHDPQp9JgpvM98pk47VLafJKGWGteQKS2gh9FRbTgiNbfFMKt3KhifC",
  "key37": "2gvuHEhQ4biHGYLgjxZZUEu5MSyP9NGLeFejMVCBUkFnd4Yap4ddqChxWFYQTpAYqJAcGnbRgWUA61ibZkRKtwjW",
  "key38": "4jcmKLxVuPT1B1xey6rRw3RDMdkenvd6e4ayQqf65ryqD1ugn2mHoaUfvvUiKBYTuYopi8qbSjLCGEkRg4Fdrqun",
  "key39": "gQ3751GCLS4LJYcny2v8guYMtrf8RHNfA5Ky8X6gyP25DZHAY1ew6hugVUTc4cgX4JBWChrdHzN8Ar9y7NLLBzU",
  "key40": "3FVHa8jzUEWedXxxnprwQSjc6V7jcnncC64wvprvZs3NQ5P97T9vWHsiTQi9YouzpLEJcF2P79rvfL8T8ut1wgCk",
  "key41": "5LNZeR2ckd4t6HHvhnfwqXP41uXbrq5Xmu6W4BNFECUyh479fvL8VRnhXC98QxTUzAGfEn1FbEAWD47HyNRarNVt",
  "key42": "5A4JXYLxdw5S8D2pDHB1ziDiRChsdtJYbknacHbWnEU7EP4LGNvY7xM7gaMpc7gFnpfdJQ79FQ1vPM4TNGMY3CAn",
  "key43": "5mhHZzwByGqEGLRq2gG3sZ5Ufqb31CKBCVjVN4t5fVDyX9beuALiFS6VHr23Ks1UKrXhXYnyTFThpPnoGjtgt2GH"
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
