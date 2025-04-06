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
    "4AjTxtkRkpnjXzXxGfibL6gvRKNYvSsPR5k6mwcVtfMKm13YfJC4rdB88QRb25zhHqgXLkyeDmNruT4bnLHchHyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a165Zmt5SkVG18awRqH3KNq4T5NB2q13zyuS8JWPyNbePjckd37jogaXAxxsahuzgLhpcPs1WfmtjphKb3ijcuc",
  "key1": "29QoaZVQQje1H5AJ8Azq3CweZq3K7pAuf9T5Tjaq5cTB3w3FbqPv7ShBZTbAc6xvPt8cnDWu1XGh74UCDawShMA5",
  "key2": "2Tjr7YS1QFUsTgeCRbFygn2nB7soDBMrXeNig2wNQHJ64sgopzRLRt29VSYaWRLWy6JS4Sy2h2BDidUFXDWASgq8",
  "key3": "2QfDUhspm2oQrVH8TH6tzGUHtJdHkP3QdyfE52ZYPXTLT4njx1cdYwvtj2QxySdtvk6eo1QZj5KEibJtSvFudB16",
  "key4": "2sEFa51Qq2tw2ipgYTXxhWj8rhcYTCZHrmHe9WBuur6tWwdoNo2pRL847Txppp4YtH8dTh3y7qds2wY9fpaM82on",
  "key5": "397pJduiPX2KanbPocjoht6HJ5fa3LL6m3ge7Rhe7btmeTccy8F8wQKUzbdJnFphgDRLSR5q5sMjAiTFuj2JhGaC",
  "key6": "g9A1iJyJKZgCLL6zDksockc284a4pWP9ZKahaJUZ6VmVbBaBJDwAs8aStxTM1SuwosFDFd6FGS9CH4t31CTSWmq",
  "key7": "hDvXCU6k6LhH85UQ4uJXhTiWsWhYRkTgwrpBsH87TgWQCxmRvFvyesQrdmW6twXwjCZrU3kVbAfGRjsgejR9UdV",
  "key8": "2kp2JaZxKN7S5mspz1gCtLvYpdVT4ZTbR2nHcbYRXqTLaKXFCbVg1pknUUXv8sQBAzkxcPWWHQij9VDPUei5MgXS",
  "key9": "2tAX28ZFhh9ausvVBp3u7sc2njUBmVB7Wp43dgjGZ6VKvGSJgskTDKBsvZuun4TXsFJUhf5YvsARYtGe5e3xuMnD",
  "key10": "4De56HbNV34bXR4h6qgUTvhxMxhDoHm3VDngwGYNi1yLt2Y3XUyaq7C7E3PLH7kkv4gKtKJdYMsvFexvG6nMknRK",
  "key11": "2NCyHBg5Wf7vfxZ4bXQMRMwuTkB4kDwmY6dkrVcq6L5Aj2KxUhCippSasp9vsfauey5EyFRjdpD8k2yySqwupUn3",
  "key12": "28nBcrxkU9hH7gepn13C8DH5MLpjZhysTBNdc9oip5kPDg1mo98TdqPWzRF13tuhitatnL1TyLjHEckHFMNnVpcm",
  "key13": "DU6cDN18CFFtPr6ATD7RVwezXHajKDxqoy8Y7M6LrcJMKWQh8QkTY9rhbtP7QDX5rKcurftLDck7kNBoURUQCkG",
  "key14": "66k6Jeu3X3B8VyLH6ffTAB31mQtgzktschkhn7c1MM69AaR6XW7E9QCcr7JCjq4tMm11PzLgP61jpJnv9rc7usQA",
  "key15": "5D4DnWpYyfLrAvuYb4Qi1ewBDq18b4yvs8Yjq6RXnh33G5pbUFwcUbgL8xB8mgR8oxthaiR3PanRnXcwRr4DNx4U",
  "key16": "5JETNj5tDgGcwWjrUZ4ngJC1pMtcPhxF3TUCFFAkKpWKoWPXmafFd9hJUSYFTRv1XRbGVuW4d8SugmSt6KC4Tr9n",
  "key17": "2HRAgSHjzhH5vCHqe8kBKvCiE9bbQVxhMjXUEwGpyGQnCg5AF1f9X8zmd6e44BYa8ubNcz4yREtPGK1FwdATrT9j",
  "key18": "4svY4ziuwVwmy76mtyaDwgotvaSDr6xEi2Ue32UNaAii9L8BwNfksWje5D5Mk8h9q4ympnhFZc1boE429P1G219U",
  "key19": "5mHTTanGuKTEfFwsUnexHHdWUvTLHP9JB6NohNUMn7GUXPNbeSLGDHM7UNHnrG2vp51K48t8PsTZ5CiNMNWmi5ty",
  "key20": "5Anyb4pvaNq6T3atwzSfr5GUXtc8XsBGALNqxVX5hbojUJRUw4c1nA6BxgVi8ZAKFPi8f4SB7FHEAm6uLsqd4Bx6",
  "key21": "2ZxCxbfaiJswxTVvHfXACFNYpNPmxvQ4KPguxGFgRLN4L63wZobbtf8Zs5oASopvb1o6tSF9Kfm8FnmNJpLnRJPu",
  "key22": "4zRTPUZErk1JVEGxKQA8BVXwcxjkbkKNfVEzsuDFmoXN5J6acFPBPqfNuCuAAJGAVgU6MsbSmLGitBN2PXvajpHd",
  "key23": "5r9vWkKoYMRKURg5HHyoKQYQnWHrx3LNnpaces6cumsKCvyzVEwa1hNhY98h95qGeUPRnzss8LTnXrt4vAY17gqE",
  "key24": "Ks16WYz38WfB6Na4PaLaZVaSq2a43nTWSRgg5jfksR6G2aQWJ6dgVHACA4wM9heiCRcEqGDQ64CjFUAbPB1T71y",
  "key25": "4bmWjNHR5GUEQcdryDQMLf9rirCmppUiwzJAtMzkStwQySBNksKSrLgjQmF736bBxS4J4b1TPhRCsyriFuTxToFA",
  "key26": "2cFr7z31obFmcKDiU7QVdp2rsmuzampCkJp5mae6B7F2Ru5jKC5dov75STAxwC51GRdpwUEKfvY5Sv782ixq18o5",
  "key27": "4fLacKL4Q8WVwGmkrGTckEWW4E3SA6k41eQUHwJKb1YcQW3dthU6FYVDstP8h4XBvqToDb7GVaS9gbX6XiP3fEtW",
  "key28": "5ECKK4n7SrBDqyErHKG4VPrJQYW1Ez8J3XrZMPcR2sy3fBKsqmPNMzP9bNxQBHzAsNxZU5QvCHKA6zMZMWTSyCxh",
  "key29": "3BWMVAcfgeR8SW4wpfxEsxShnqNX5s8UuXRZTj6VDNyyvRTbGGX7hSbFuGqXKPedbp8aBfoB5taMusmwR9myuFEb",
  "key30": "2yHPrV8bFa9cuejuGB2MZex4D8XSHUrwLbiNcodTybtuS8VRgCahein1VTP8tKGYmHXkvEvtdG1cojUBJyjsM3rd",
  "key31": "4w8JVCpudEgzYkMhoXyKueu8fi7YzsYtjTKAc1yYgE6pnT4vpByp6xpGTVcrhoqYoL2HyqdTy9QJD1LiwVz4m8Qp",
  "key32": "4iYx7vkP1YUi7ffhYJ35aRHUUcmkxcSGMdt27yhnXmzNjsuYUVdRQP8LUoywNSxNh15zPEnern1rswxJbuspNLoU",
  "key33": "5PzRWA4KZzE7wuDp78E3g27qcGtQ2UCNejuGkt98xA2qMN8x73azXSThdmYJxuXxZnKd8krMin9advitDv88ZQgs",
  "key34": "5K5wNyi2PDNfjc54P7AZdSwtgUw3d5CLQgegoHr457ju2UgMwd5SWHmUNjyVkwMHdbvoStx9zYqGTq2vGYPm4PsY",
  "key35": "2aSdvi2B3k19ueG7TJ4SMwsm4NVaVzuciWZVKmm13bpgXnYj2uDCLMtGaVgCoKwMdHeer7jXW4ro4fLqeET2U3cE",
  "key36": "4aD62EHUvpfvEVLekbWW7u8Et6aD6dhDeNDAuMbX6syVQziR85ct8dzTGCfdb5AqtRVU3Zzywu6nTLrZ2eBS37xH",
  "key37": "4evaitcA1Vy9EaBNyFg52pJx2NorVLfJqrraApwVL2kNFadfNU4eJgzLzVtR8bnR8YZuX9bi8EBgSsg7qveEvvSr",
  "key38": "5vTJHJyvbrRxhGZqppkkADwz5uMJv684m56ZJy6VVkeZoosexJhVpFRvHtCmpFxXQcs5QAYSx178M4YoJakXmxRU",
  "key39": "4rGqNaHZevi5FmbZw5QXoYjTXLp5kenNKo973cSGQHULvyc2q3VnxqeM8uwSv61PA5ThtfFo39sFRqCCzAb4iwU6",
  "key40": "4Cr6Nm5wJGcUeERbBjhUFC7DiU1eK1hcqpaDsP7JEC3W72CWbR6qTMUmjgQb8BAaD1wVvvR6NZXWTj4EfhMNA7vj",
  "key41": "6k7QxCrKomzdkM9pQZ8ndKaDeQYaWWs5891Q71DDqx4Rox3xin8R98KCobCyDYbgvSAdaDSfmA5Lo1V472Dodn5",
  "key42": "Sc92qvYZFc2EcV1xZdZMtRW8TdAJMoHL6eQNmgsegaCQH3SJiVARYv9ZUfULppRR89mfNSeLgZq3oWce38Bvqjc",
  "key43": "QUy7tPfvk5aUove9ibcY2wJSffUdrQhQ8Fk6HEHLhwobuCdLRRQw1pLKLMc7sJJDogzs8nwnpC413djqBCJQxfS",
  "key44": "3KAsEZrAb5KCka5kMFygVuXTMCsfWJhG6PZ4nh4DsLuZydFbT1fWbb9vZbp31p1Q3HJ2wdBp4MC6fVK8hVY7DiSa"
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
