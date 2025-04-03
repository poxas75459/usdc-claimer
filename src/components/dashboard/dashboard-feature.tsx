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
    "2fFBebqVgegvMfqiTG3MzXVx1XDUvDTNjCmiiqM5iCjVmkQjdUanpdaTSRYqcjArYfh5gSqE8aKxPcL6yQTwgxdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvaMBaDo9hWcdFLv4CNGARtdge5ro1TeY6cdkQg2QzJ2nLLmBvQE8AzVNWHa21eow5qwHgLkPyx2rr4wiTjrCzw",
  "key1": "5Ui2jZQdL496Jq3XgmdudZXfAyRyc4S3wyguGBbn5nFZPkQCFE81Z5j4qZJzq6K74YXPd1caCh8RDYt9AB8ghKYH",
  "key2": "3cYWoaPT72vtSBVG5hUbowFEL9HX8MdLjdicqrzCkS3Wsz2EdUhoUeCiyNiPtsAV8cqYpiphs2RWuewcW5NZcWXq",
  "key3": "5nk4RKCHeTcFg21eXHtCRp15CDQ97WhohVMTZMbkGovcSSKuCBo1j4iMDYdVYqnNagh5cGbUqcZhFP6JqkyWyB5J",
  "key4": "ZZLGRSuuYXGBURgkZvLRdb2DDgTZwxf5BZbNBCPQoW1iHJdm7Sfv26uYzfqU7rbYmZafLL6R9dPb5jZo38SWj8B",
  "key5": "7nwsdf2PFrAfxsLkEgm7PcRp5KzuPDGvAhKbyQQrDNcHyigHNseKTrcskckBjjAZU7J6pZFNnvPNH1Y3CvTo8JF",
  "key6": "2CLhyG2SMXqkxRhkigwpj954FAwaaYkQ8unV8dhJxKqwJPFaRLebG8dF1VkJ145eKxYdFrCM6WHanTgH5qbDsuA5",
  "key7": "3PxDhgy53whEuxWfrRZQBrvykfHkH88geWmxccnx8QHSbxGY4vjrKeAgpHPiYuA29c5tT6aPBcXrb7Bj8FmbvwRf",
  "key8": "3AvDfsuSYxGrB3Z9arFacngNq88SzHBUSEpfNavPmPU4456BX8FZVo6yYa7poxpZ4rpiWxQ17yY86XpaqSdZZ7CR",
  "key9": "246H82efffUuTBgEUg1KEESo15gzaAj1ukrT495LWVKw4uxZ26pT6a2oxVQdNJdFi8RHuNKh83Grw27XyAWHeUyF",
  "key10": "y5gUUFKvzVcXzwEiTGmEdrQkzoSsJPrREkCsMzChd7QnwuN6JbiCEQ2W32yXRGUuyZGbjGzcpXiAdeStYuZJ8it",
  "key11": "4aXpZdgJ85JqrM3YBYCbwvHBYtQ81XSFrDrpReqNqPbktSCMx5Vhe1KpMDUda4gGVuefcEfrGbEpKneaFAAFeyxh",
  "key12": "5WD2XHbkU6zDMBZEekdLbCckztshk15AM7eDaeMQetjU21BzPPu5vzJmwyMxKxWh7Cz2hxQJb7yyxdPJSM1MQAKS",
  "key13": "5TykWtp4E83zxCiADUuKU25ANvGUJE74kPcBrore5Dc4v275azStfGMbcDYFHptJgWUTrJK7kcdBJTdkjgsh1vQF",
  "key14": "5Ue3k9fdU7tHQJbmEBBj1T41DVykJuagxXb4VyARgDqYjLvqgQsYYbu47b9HN8C1ZdS3h19qgNJMJyh8H7YQro8a",
  "key15": "5D6pCTbK336R3g23FPShoYQbvHbK3kCcJkZJTDfbTHCrfQiYestV3Wg9NnBu7ZBWMLpFrCSbjFYodvXfLVLQLJN",
  "key16": "4tEdjb4csdGp68zvBWNFj7SpNvya568PGoCafPBEc8ZPzau7eNbejNGSwmYga2GDyf4UvLjrc9ACQfghhNvVbmm7",
  "key17": "dnwrUnJuChAtBTgyTuzBrWJRMd5z6gdj8mpLfjHSNoChtjWXr8YDMJR57CLgPt7e1fMtqWMjnjToFDHXE7NhPuq",
  "key18": "3qdWaVsj5rLt5enka5p85NXyeJnNmmP7fqzPEEtzwgLXc2jaR4ibhRwPh2pXQ2WDzxGso5FNbpXUDZudmfqPeYoy",
  "key19": "3Fq2PC5pF19aEpR7Dpt43fSP6Bn1DzGhGyAi4Cb9yum8W6jF6M5umM2RhepV56h6vZvyitiUjqqCFvmKa8HCmBTn",
  "key20": "2JNwWkgfRHGNCNMYqZzUcJ2v8UwSGxzr4K3hGz77YzNmxVvRmD9HxpWSq3uhjYCb3f7HniicqQ8GtQbnvQ3bLnwQ",
  "key21": "3QNhiWd57b1TnaeyQDCNHgASaQvdSTa4ZfgrhnxP4d3Apt9RosTpwX4NcZ6ZegSukXMu3WxEHduk1ySPNV8hmimh",
  "key22": "Bd4VTbz8UynyVyCjQ61SCPKWE8tQNVCKW4HwCkoJvqYDH1rWPau6n9zBY1ECX7k6y5iBTvzVS9N7CCUaPFiq1Bg",
  "key23": "RagWyPfft2xqdHxUhwFpDphj7z5W6BcaTAT8TH1g48HyNubTLPy1fdncwJEypg994PbkcWUcmCT3Ksw7VBGDgrz",
  "key24": "2irrNTJvdCTNoqry3RZhQvRTBLAp35RviniKbW11aFUm9LvKyCWvqiy9QMffqCyXg4wkP7dLQJesghW36pFbV1i7",
  "key25": "ZpaXDKLR84PHhpAwMrHsfFFdc9cquhr9M4kWacK6tYWviAZvKXeC4Y8sZD9Ej2mCeHFPma4yHKycv9KcEENZxUd",
  "key26": "4AAQPkYJETFA2XJU12ZxTCkZnUqT5SXBbXqHE31wsrEacT7ZiMmYwmCDGqs7WzrYqZ5pk2e3haxTEmw2gcoRZiie",
  "key27": "3dUs9ThH56nfPPWvYPbrTfR6ASRg3darUbAPckhHLytHTgiPw6NKc37XnK3bzywCTXkMmrjZAKER3aRPfXZUicH3",
  "key28": "4JaYYeaty6fRMDcDxXa2cWLnscpa2iNJKuCekap9xZ6tSwqSUPpojWnern6Rfmw3HECU4XGsgkJRQaqPywkCim2b",
  "key29": "2GLurwAjPdagHnmMwsaCGz6RnEbFGrL4Xf7NYpiyDbfWKoJv5Wtg4fgf2Y1i4f6RyPs7uupoPJX4vnrE41u5ymUA",
  "key30": "5UmnJQUeVXJwA26huAPiJQn4JwbdFXkV6fk47j8AqZQ1EWHUPnVx8VWVYmzfeReWdKzvgAjT1yY2aCFMq1WEC94R",
  "key31": "4sYSc9gc24T4bdRkAwZgw2DZ35t1x4RbHbT9cYoKRYqcm1MRYaMvdhqSVJAA72BhXkkBLrHzQqYZzCzncYCrzd8L",
  "key32": "4YUGhkuqdCT2DdVZKbFrcCnnwc1p2GPXF4Ch6SzrdX2Nk7dSv2716MDkpUYbw5gSK39uz4EcGvuBKYC2qeVfsux6",
  "key33": "3NxpHG5KJCbfdgvYX73B4L6ALsRQEJWfPV4LgZM18cKhbfurrLgB2MY2qe9wo2ahzgwf7ZnqBcS1jZwz9SLkb36g",
  "key34": "5DK8EcgxGRttoPN1yGezTNFbeoWja256S7D1xq3gJBowyRkgmjfba1SFbWrqmf6e7qHsn3EBdaL4Y6k2uudbnqGj",
  "key35": "hhufoQedgctfkx6f4hSh2qAkVMDGWiJUvGFx867dUczbZddLWxkKUmcwY5J8kQX5TG5DFViuUqNvYn3pibAv55k",
  "key36": "4waB6TcZDjL7Q2twjv19esWngrDDnJ4BUMBtqR8KkapMyhz86rMvv3yoDfHAHy7mXro39euBFcdcppt6xMfEMuVC",
  "key37": "3hd6EcR2PBk6iVS23a7ncNPorPp38BjcWxGC7E8dpi5DkteBYU4cq1KrHhk22JMbR9h3WPDWMexfaTdDcgYz2rPw",
  "key38": "4dBb1M2cmQiZ4PbWtzA6HBieKyomM5gMa3Hjj88NScwKtMVNuoa5GBTWMfb8567FhqFXfL9ngo9tYA493f7F6L7r",
  "key39": "BDfCra9XakUDajUSmok8uwXG1QeBeqtHhbct9r38fiZ5WgbqdSCPeSBbZtSWE82x4AkmYtKY8ayzPngvNbnLTSQ",
  "key40": "sTaHDZTY1UpCCL4Fk81tnpqxrtsAxdU3MEm9eW5wh7rv4YAfbwNBninAgmG1q4bYbqDwLdvdoYytERuYa9SKWgN",
  "key41": "EFgRgxu8ZvXtT3ML7mG8xtge3yLeG7VzDJ9ZfCknLKuAxr9oEMqJcygWLyyzs5G4yJ9x9eJXr5WtqEhNLesWFFa",
  "key42": "33HvAnv3Rza1dk9gUbsc11uoHp5Zs8XAs7eiEVLDBBtR5RF1wx8eB2rf85v4Kescxxk5fD8RAtqY3Lgd4BXJpCYW",
  "key43": "5kFDLbvNWFB8tojeshzD9e7xzkecDHQEr7hVJtbK6ew87HGQziXQfd7RLBdRxck6V8cARavAS5r5Npy39tn395sE",
  "key44": "3MkmY3zE3bVjX6jsns1wb8359LFc5D9HqJsQHgPiezH81B5jkE8t6AwmJvZmTUwGEgEpihrt33EwZAgKfPDu8paR",
  "key45": "m6VWWHNRrz5gCazBTSeGzzWMTUz8iYRtv1Wykzjq4ru8KMg9Bcmg5YWEjgRtEY95xRGhQGDACFy9jCXbnDapYoX",
  "key46": "4w8oSgUQWL1zoLhPXzPeQZ8XER5T1wSr3oJhexuLuVepqx478niro7Y2MjfwJeoc1Cmnzdk72HiSNqfohnr5WMWa",
  "key47": "5Lf3ZeJ42wVnzqf7sSTbW9g421Su7JVRfNK7nrstJhbKvSQLZxiHWMu7MJSe83GYjY1eP5x6f3XLFaZH5NapcsYj"
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
