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
    "3udNGp9PCLonm8QK3utDktypxjwbLUJ5FNX7PoSytEzbhGpWCiDbA7p2K8USSVCLCJrmKNKPFKS1ZnLr5JeuDAPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmKPAfEVzVrq6fzRZ3cEdvBqc23h4RrFWxzypvCyG9YmS9Z2XYMHRnT8DYsBTV1tjoGB4oDsVLC83MXSqmBSqBA",
  "key1": "36CgEd1QYswtM5YD1etV7NVuJipYby1fmB6efCkBwcQiAGf5KkoCuvJPBmV9UPPRzKZRuwBVqfoUbSZ54YLCRZxd",
  "key2": "2gi3QB4RWWJZhPTySNeCKsU4VaF6ugRxmAicXKNWjkQFpuENBeW2wQiNE3U8c6FzwQFhhKXNiY6JWuwpk7AFpsgS",
  "key3": "2hk2D4sY6mzjmV3ZaADJjZ8KNbtwfR7kyjMgjWyMrUiY22si2rLT2rZzvxmqMd4B1wzs4rjKuJxCsvM8LYyAKQ2g",
  "key4": "5cmyRwDw1wbPasoQ2m9mGgp8WXboG47qeKn2jU9cv7FDsdmjUX1YoYzTmMQTiBTCiWKgCaGp78rWZE8Y2jiSALCr",
  "key5": "52WeoTaGTwYUq6ZX3giwUGuzsk9Y8mMFPdx9zSuntAHeAKcV67A5aWkdeETf55SDEkn1SgAPCUjU7jAY2deegdHL",
  "key6": "3EK8gGZ5CKoay5tf3568REn3q48CURPNCMFWa9cd9mGcFuLoaGULSaatX4agsg5nQnEU9gEhyF6qMXjpUpW8p8Fa",
  "key7": "bExRmVGJV4cxHYCPwdqhnFLoyFMtBM5V843B6LZLHJSTtpksXxYHpHC5Gh7LQxHcoMk51iwiW5H8UPdEoDkijCL",
  "key8": "5HKH2DDPaDNq3e3MR5F1YdRbSLuNjtpyZY3FPiBrqhD4hPSgavqXZbQQCSPS72HT3vbirW6DuaDqtyxx7Tu1NNbd",
  "key9": "3mF2w85mypTirYHMsjE3kBZXky35U7wHcJ4XF6XFGeaUe8z1CDGDdutEV2C27Rv2fr52cwddXwbRxPCRb5gQJECN",
  "key10": "2QtK91QWT5kGffXjfSoA9kQCB4wWUrEf2iK8NkprbdzZ6NbJZEWwE3oK4xxzw6oo6tLXsfC1oYKEFsYQvXPHy1ty",
  "key11": "Gd9tWrMVkRj5kFZSwh3RZi27SJCYp4S9wXY3ttf4uXcDHBpUDiVHodVEkwGTMoVs1EE9NLVY9bQNJee3xZxe8NF",
  "key12": "2SrBvVGAkSQgBBe3qtgebne6zjYuYskuHXcsznCgZ6bxk7uCxp68KwyJTWcoEYf1j7a1eEoVjPZoMMjiG8u24ZtX",
  "key13": "4kyuLAzY2kwhmUTs5gb2QC7sXtSeCE23MtZ7bYztmrJwd8QypHdL5yLG36c8Z8S9Ka9SVFU2nNA5SqcFUwm95xPi",
  "key14": "4zPckossfLL9Z3xx374ptnjWXikBmuj2wY1VqJUQUkGEPB84A6ACQm8BfDuz7doZqJztsz5WFN1Sk84GQUqgmZjE",
  "key15": "XFcZH4GVwf7GEMAviFxrUwW7jHLfFFKbF8FCDdEPsqjWm3WBf9gtVW86khs6Jqqem328vctLZLfL41JFDPovjMS",
  "key16": "5fFSfCxGwK7YCSL8TY7WkZVWVfMcbEuZ2vvCiKjferS9DXc1PnypjCxsPkxr4KwTvm3psYoR4DdeyZ1SevpLiW83",
  "key17": "3pSAASqv9iWMkt5w4r5rmyzEDtruGR1pXbxb5kuZ85yfCQ9aZaZ56QfN9Q4UJTs7TU7FtV9pxTGbWYZTTM4WHTnr",
  "key18": "4K7FzTX2EvuUkN2KzCUHj8db5w3D8R3x7sKw42EhduDZgAdnMGZLCdBHYbHfx7AsBiytCNpSRaBByogCwqRRY1Xu",
  "key19": "4xZzMTZbcMcrfbhEYbeYzheqT1yL7QJFuPArCgKBiS4zz75ZRs6RG7tfyviR4jasWqPFnhH1y3E18QbxizSF4hkT",
  "key20": "4jcUUBovdKKTWEfEcxXAX4WFpmLWEEJqtFBJGxLVRjVrsjkuq6RtcXmouSd4QEWkbogXaPGuAxsX4G5CGnRjWm6j",
  "key21": "5dQHwyVX4ZPysNoPPC1EecQ7FiYKPasou596dwXypdazE2ZKsy7qmgramVeD7khzhR8jmUasDRoUG1uDo8vbzdLH",
  "key22": "3vfAqx5Z1T22EM5fs2bkmQNLz19cKaJQEkZGUnwANyravXCNZ9QLJ5sdhvnehZJ3rExZxXdharNgBFgpEvFWh4Jh",
  "key23": "B4b5UqfBSTbYWy9pW1eUC2iNYtmmVQ8DX73N61WNfWQ87NsoxiQHBnQvfQ5zfPwj3aTwGLiyeu6pp52TDtB83VQ",
  "key24": "3GxsF2nbAn9wSKHUD8EKvuUHuLTHdsqYCQmhpoaGBTvXAtrX9Sfvn5HsqkJXWi5sWm4aXxixWS3njAMu6WttuiSp",
  "key25": "bWZwNCHiu8pQZjSocriq4nnias4hpx63TVfQay25gHwXWBvp4VR49dMfezMhoYXJDKf7kNEyectKBcsaJtMNF1A",
  "key26": "3mcg7GZnXptWiKDbwzoJ387ArX6tpS3i6a4kCkweJv1DcxQaDaaB1Mnm4mGFVNf2c2Ta3B5TcTjtbg95gEJCbJq3",
  "key27": "kDbS7ogjGm2YDEDpD41UdnMd4XXRLHZak1sEWEWHX2RjdXDN3Ru5fXXQpW6F47wYb3FWVJmzD8XcgRfEmJuFGT4",
  "key28": "54PHxEbZgKUp7ae6QJSCeEf6ABcPSGUNmoPiCwJdqaogETZcp4LwKf6FhwGxEdw9TZy5vpcPayezzKV5eeP7jsAH",
  "key29": "5yLNfYyJKsyyktFpy6xyJbVvfLguat7FQwn5TKZqmq9BR9NqTVBSdWqtJ6T3Z1CYBgA4FGj2XYqCjWv1hDkczgjg"
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
