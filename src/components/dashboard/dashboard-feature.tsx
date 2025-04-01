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
    "2fPvxzqLb73mE8akYSnzJNrXmZgCVhyzK5RTLCW1e8Pyko4CgJFyDxsbV6GPvRFyLXKE8o9KhynQV3TGR2jjHmRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYwFi6Ax1WhqNyp4Qm2pUnGAsZ3GtitPeHGCCe5GVsWwRYAJ6tYdg6SGEKAisSUBfokcS1aXgtinwFdUYQ6aeo5",
  "key1": "5GJq1pDayAm7C2gnoDrnsEJaRsupkPCbhrPfwRwZKmCszPX8iaWcWdDvv8cwzcABY9Bm9FR7tTu6duMYFLWJPzo9",
  "key2": "4Z7FyKPmwvzMV9j7CpuPpVSrCneUEXMVRkVuWnG51GzhsSRzTCZPyxMWpdrxgKh6V7QhVQvDmXKTuCPbcDhCH4s4",
  "key3": "2974WTZtdMHiFyu4CiMZB1QdD94nABoUsacjj45NP5946LucQEZtgjLKs6DxUAxwjCVpXfi1oZNpXXJVBx7AfSJr",
  "key4": "4EJ2qAEeWjcxJMXeo94kcgjGHdCMPkhUvo4xW43nAgWEvAm5sqEvjHNwaMjK9ijn3eTrKShaQVyF3vJ1x7QdSpGg",
  "key5": "2Pd1k3aDDYQEwbsHas2MgHqUr6fAWsiUGJKGrzPGu5Gibp4s5r4dL3nsG4KsGYyjtvxDqjvTkTvZLNPmvz8NHDLj",
  "key6": "4Y3uFtMuBemZAmT2moMvV4vxBoQ3L85J78pDuhsSSFbA6dQXLrkGFqVsUrucnUr12TUmmmmZmqafyQKZUwpPjEqJ",
  "key7": "5iyxx3CRM8gkrGiRHCSUso1C6Xds78NAq7jEuzAjhpC8grvdFG3CugEmKZgDsNQt38rNHEoP1QNX6sH29V1K5Uer",
  "key8": "5xzuZLsPw27618A9aLJnRPEWUWKyeJX8c4HFUr1ZczS3FkZHYTS6GEajtWyg1Ao3b7czoAhYyiFxg86NPZjr6uRd",
  "key9": "22k6V3zjcy9myRFnBjxPdR4AFGUPdNGrSTocUqfaPov38Y3Rkzcx26d1dAZDJanv2TvwWr1KS8ipsfSzkVAKxw7L",
  "key10": "2uM26UfYgxndRki926FKLRpH99yEfzyBnZBMh64RK86y8FpczTnJvdxvCjwsF75U1hJsVMGxfdE2ta7WTUXad4BG",
  "key11": "4WCFKkH8KtBM63GcnDF87ySNYmJGvhiKkRLbm6vHh5CaxPxooFzY1J3FYNGRupaZXt6rC6tn64khNe3u9UtC5fgw",
  "key12": "48H3SbCqiJp68Lx1i7nVLDv2nbNSbrSbhL8nRYXHyC1U7XmqbUtE3REjNJuc1YVvcedPi7DdjjWGKxG7t7AXi7SR",
  "key13": "4sYeHvnH4xvgZpUBjtQ6AELPh49iPG4Vuj5pG4vmkY5yfBYACpwUUqfsmN9NVQrhNGLcHVabk55WaQ3TM5NArmKV",
  "key14": "44GBQQCHSuDRdvmk7L2UywfHJ8oJKam3nd8PuDE6pu7v9iBcqa3MUFnR54J5zLzxC4kyjsfHydp3unimJR2LKPxM",
  "key15": "3yhvhfKCYVu9pZAv6EKaU4CjBnisP5XW2JWe9ojQB3qjHTMyBK6Le5Epgv5dKjYD1GTg1346ZVxtqbyoGFKKrRHk",
  "key16": "4dYh1HFwazbVZWqZdG2rUyUZ6oaePb1q5pKn4nxg7oVyGWoM9K3zZ1caTqz6LSQkSZowCbHohWyAAkuJSrFSXwce",
  "key17": "2YMBte9dkfH7ubRXmNa3mXEfSMicTzqYu7EmsuR69MssmY3Sy2atwcFcpBHFqpDmLqVNhxrRe98oZMvoqAC14KtM",
  "key18": "2VkapJpGLdT8ryWEo3VNsWiXC2KrTnZxSaJ3N4x5tiUGrJzZ2ZcjsSxQHnuYBsAnCgzm5TRsVTznc8WVWNshG7Ar",
  "key19": "2BRLPooW593wPp9a8dfhLtoNevFzESqf2GTgVU3ytP3RuVzyeWoSaRPmef9UXpP9XXdmsJwfyqRsEcgpZcYvaycH",
  "key20": "2jLUaiGbdFmE54hrb69gpsPDcnKFtxbJgNzwFxZtVYxjaKrJYa8ByYVSesqAGHv4u3my8GyocSwrrZ5dgpVV24Xb",
  "key21": "5acA1BpydDn6jj94orgsS5Uqsuwnrbm1SMG7UrSwxDBhChnrVg219oxMR2MRLmLNqQsxdP2yQPNC44PDyETebVVH",
  "key22": "5WYWeVnhxfWbTfsteV5FuFrqn62rZRLg7uFZR3V8qRSZ1bYy96NCFShV9gcSg6gB1ARvTcqguTKwqpUQ64VRXFKT",
  "key23": "4J9k74UDperUJd4JrVEhm7Axp5nEKVtGrmc28oyRWzKgtRyag84sFZYpFTWQAh3cr92PrtsRcHa9TSWHJqG9opAE",
  "key24": "umrT1M2iQyWYx2txHE7njijwUSXKHpAdQD61Lo3jparWEPXySfjYWsxj5DebvqXmKpT2BoC4KVYxs2di2PCtVby",
  "key25": "3XzGeHC77EffvuvgqdqF6vTJqPME4EaagSnxzbvfWEPTGB3uSVEfCPVdK2DbgNTUBp2T7Js31cCERUdpwiE76kPT",
  "key26": "3KRack1mFybYgV1ZBWFeSQZkTZuvY221GqNbhYTixJJg7DsiBkfbQZ2FayF4tGgrfUGqPgeGGMKXJfL2Nw89mFqE",
  "key27": "58TTVHzFAKCJUuTDry3XzZ5Gp5ppXDGTvfxP1mVQLP8EcTb3e1W7UttCbEWyTTSdPPEda6S9ypk7sy8zpoRdVAwe",
  "key28": "pPYaWcsPPrg7L1kC5uQdNAz8buecczVa3Hx1SJfyPjMsttnqEw7dAADrNm6VnaaCQdvoCtQutKWP9TUd96XqPk2",
  "key29": "35nzQsvu9scf3UMMQgB2gMWzvbcJca69dc9k8dvJ5KYLkGp6VcXErGRfyz9FNruCEH3rAz25rG3iabsjjMd3d59R",
  "key30": "38zLi9GkPvs3cuTBtX5UfVPoBkFxeeKG4mWMSWWbgN6LAjSAMnja84PbMvuLJcaGs62aUZBuXYQucb7vsTLPdVso",
  "key31": "5yUH9ZsqV2yTLBh5pcix4NSdtoD7RKh94p3k3JVBNZpHBKRBgmQojffZc1igyuPiCq2xLNwkX5UjhQA5cXYRdaex",
  "key32": "WZ5Rsd2dQAW1Qo2RZeRiv6rhgthRHGsSbFtoyhDaNUVKpgyVr8fTC2Mdrvhwq1nNo15uZjaf5UkLQBjNvjrcY36",
  "key33": "3ZByEiLUshuwMGEKL27RttiV1q2N9pP6yaE6yf7kkm1ogCMdKwv7dsCVwrtfKMCCJQRC9mCCoqqMEdYqTmMH87qQ",
  "key34": "3N6jJTk2KCzduXZ57kGaczEE3hQrxjM5RktzwLS2Z5YFqSsWCWWYvsjgLznsdDKU2u2fonEHXvNrddqX5M2m7ELw",
  "key35": "35ynGx2r5VRAmNsUiUUaT51tSubwk115Y4RutA2Jc5zoKmNGogVB3PboX5559rVeqkdXbiiqpcVLwE6qzvnTDDxv",
  "key36": "4zL1nb9cCVJU3m4b5dpHzLdi72Kivz7xHxJRr4DwiehLYJe2fKTep36jDYyoH7fjHxXs8zhjnP67PHk9UXrTo2Un",
  "key37": "57dpWpyVzSAQPYeRpj7hVSfifufQxgWVDBoRYTSWGsA3jUC4oJG2WFdazunrPUZacokVm6LxvyuPgi16j4DsxieH",
  "key38": "679G7ocm9zRzM4NiGLbx2GbXD5whSWrgdHanehteRD7bkjfpJwtSKHk8oMt96Mc3wsJaX2H14xbsBZJqNVwcvi6c",
  "key39": "2NsaKmaq3wQrqiVgRgZhJQozFpQzTs4EzAA8Cmj8B4qkuhFMKSfwBuDVmb2JYFkzhzkqnFNKmr6WKY3RiL2Z3aFX",
  "key40": "4xMvnnFWcrK6V1mgFXB7ooMX3wRShFWJX5itbxfYQ3jgH4KmKinoUB9B5LAiAsvGFRkZ8z7He3TZ5oyRG1bvTss7",
  "key41": "4ZzQqKfftMhM8s81xibiXS3jVbkEGpoJ5HvcpQPYeBgmUextbAPoMXpaVubzyyjwcuta2YeDgBu46M7sPjYvk48Y"
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
