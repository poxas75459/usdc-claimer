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
    "2draMQZahYWUrbuGzJ4Uxn8h4FJ8aCRfxjJGLkx7TL9yE9Y68VUaG1Y8yaJrmxPGSyFMQfcnwotdZjXNG8fziotV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WB2vHEfqs1GtDcUK68wbQMVqPoRVLpKFRoAzjmFt2Z2aG7ir53CWqdKst3mVrYuYg2RsMJYFmouVspd1w7oDxhN",
  "key1": "5DLpMV6HrSzkHm2VYh893gR6y9gGTb9g3GeYKdsyNESY14BvSmY7GPhTqqXG5kbtZMhu4d4AXkXoRK8J7YPERXZi",
  "key2": "3HfSHdDgtjDctiMKCH5J8agZGTPdM9dtVauU4Zi9XEta2W5Be85D3nUJUv7vxLeigUQHqx7kBMNLJorpkBp73zH8",
  "key3": "4gPi6iRdQr7ka3v3DdLk592up4oBW7YxXJMJ1T4ti2kdyfY82nphNuYoKg7H9qekt95HQDG7jYywEksH8uJfDBKm",
  "key4": "5vDTX9tdG1TwH2sLFYrv7YemQeFY452ZrqGoeskCdkzFktN1WeVjVoXyeCxtap5GTeUdi9pp1KDpYXS8e8fT9tPi",
  "key5": "3XmmPbz7yHyYtPfk1GGbdka63oFucjE9CoicjnY8c1vh8javEaZtZB9XTj5h82ZkHKRuZyncBfNnG85Ltm8AvpNR",
  "key6": "YkQetwZTfDCSTYEVPS1d7cEkRTdwrRjGSmxq8owr27mswVRRcgihgwWX1j4gn21a6RFQaqW93pnswRhnxZXWUqy",
  "key7": "aFTBrxACJEmrtfhLDxkeDqutMJQgPvJ8LWNY2GH9DXwrNwrqs7pYL8cU58AxbA5WFaq4GNMN9uXuGCVUHi7c52Q",
  "key8": "GJcnER1LE4CkrNb4rNCSqxxTWpGp8JW1eAZCCTFvrW1aib3easCaiV1CBGnncj7QCxNgirDpdvK45JGTjuRWsac",
  "key9": "aJfV1Jk4oEsV2xLPGR5n3seM7i88dAbWi3S2UCfxmDdaCuNaZR6DvXCkst2GskDYhRge9tzHAunwYWAp8cH5DQv",
  "key10": "37Ku6sNhrTc5BU7zs987WnVf5qL1MhgQYftWqny3FpCJU93ipRJE2DFTM34QZRkWjY7X2tgZemX2mk7MFWXPfNth",
  "key11": "4hkBFUqxcxGfynXpYxM92uxsfiupwYwQyghNCXmtzNimBCsDUhwMqvmt92goouooQHyQVDZboVBGeSbNqCoJt6x7",
  "key12": "3xoncK7zbrhaHWadNzHsGxL7bos8YuW6JQu1VczK9s9VcffopAey2CoWrQkfcz1EciU2SzeQFvkqBiJyRcHgUnxD",
  "key13": "4VmcYn4yA6Gt3KPQqNhNnaGnKEKjVx5AUcjVZ4dK8GEmp2nrg93o58NvmvbYrqStwtLmFPJYDjEQYLFzNgXfELU4",
  "key14": "5eTo16Gb9xsC2ovZfhvGtZF4a7nyJfFXx8YK2QuWrTVwFYMM8P1eHYB89m476ivGsnKAwvGr4U6v8s3QvPjXwiqp",
  "key15": "3aGjwizeMoRHgqdc3pPjkoDfSjxjH47CfTF9BnigZwEykB2KGApRQyMefEoPx2sVzHvJUK441ZXT1m5bArSjxdk6",
  "key16": "3wcaPgwUckYdF5g7M5wP1W6cFL5v26kpN2XfLpg953CSYHNiUkG2v3Xz72Dg6wz5Da3PCgXVyDXFUoL1E2sKytzd",
  "key17": "4RVHVFMr7DH9uLiUkTBezj2Joi9UiKTwAz2WaSXMadh7WxW6b9xF7aDMQ3FDyqjwgqiZw7Er64UXUL1MioCuWkdu",
  "key18": "4pGL8b2yS5KVfkojwaUDBCV7Do7BPvkrkkycy2o5fV2UrhiUBMymjpRMY555vp5iuynxzF6jGDZEa168moUYG2Nf",
  "key19": "4B5pcutad7rNwEGNfVR5iE8UMvvDUxjuHJbtfhp2TQKHx7wRfgA4TvZLUdwNdXuPspAXYWHnpvPSpc8UfdZB23FZ",
  "key20": "3r8kAANjN1ZQcTo98mWFZiwPUJtajSbrJbDp8ho3QTm2cB3VtGhYBAp5sJ5NZnVb1wuSso42Wb2h7wwRbq5kiN4j",
  "key21": "5mRBsmy4VSovMh54vSGngRwdK2dbLAKmRGKXWXCZVM21XDCcZfiT2kM52SqYckeW1XYum82FLH2AmbKTM4JbNVEE",
  "key22": "2XLxKjfaH8PVCEpzvgfwoxyd6K2vMGASJXbkmeLMn46tDkqnt9E3iXTh7dEYCnMGLoapxBe1ar2E7kAs72podmog",
  "key23": "GFBNo54oXYwWidJ2ijyJQnnVZFtQLnWX2cZezw4WeYyHp5a3m6riWH7xM4vnXcf3quAfYQ6oXoLwgLiCo6CZHj8",
  "key24": "5SS5EfAjr5PyrNBAwrusNvRvCbnNpHtU28XKdJKopBNdG2MXu1GU3K4y8Qm6Kq9ubQ6sxuxgEx2T6JFrMVT2e6R7",
  "key25": "65Phre74Eryd3taUp1wBrf5B5aTCrQmzk4NC58GsSnqWMdXRopwCL84ARnUvzcZWwNZGQ3RB2yw3VVf7SvUpGfnm",
  "key26": "3DyKzGb9G2R5KY4Sa9BxCF8ewZ2JCnvbhrETRKxj9NFvNWYMuDz2E3afjdjYEcsSUiYe1hhmY1AeJpuyg1ZkEoa5",
  "key27": "5qwnW8JqFuPUznpbHgMt3ckrrByS3Wnrv6fFBVF4r6yUnXFQUEAFpAgj4e9i1bQ21ykePkkbY9W94xDo79CfEkeR",
  "key28": "3zqjqq11gc3gM3yZ7nvM1Sma4GDk2oegmZyCUhSp5ZpXLBsduNgW1avspP92CHXX56GGKLPbGKwwa3h1yL7Ee9T5",
  "key29": "2tKdwH7GGBQ4PZNVA4wNUMvKpQXeRYuRkHQcYKU8tuJTRHC39Khn8pXGAYWt3jGqWqX6jWAN25cRG5KDRChXrXWR"
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
