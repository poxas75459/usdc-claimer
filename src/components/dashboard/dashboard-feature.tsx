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
    "2t9y6ae2fvotEX28ECG5uLGxkvfksEVPzDYcMo11fVC89UMU6kquXX3tqcTH6GhDXkfBt9KiQtBqspTR2wqJiVVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZKktBfppKKXAcm1ZC3ssMPXo8PyKaiUXXCJrNztjLtTwV3Jj4virDeBvdR1fxcwZDPrwH5pwGMbrEtRm8PcJefE",
  "key1": "56rY2WestbKw1ZdhcQBo8TW8aLiXjUpn4cEGe2t3t1kKmYknBnS4oqGjkAmLvMXVyEMhsPYMjVvf44zaCqqrhMwK",
  "key2": "3EHUqfRgpBKTuutScZ9VmoVVUR9MqKSpWnh7xFk4ipZKa82j1osNafjom1kRWgh4iAepSDQQ7rCnoh2Z2jmsdtQA",
  "key3": "A2t3m1yHzBpK24Wj2pQFTzaeWSXdJV2GGGZsk3vtQ5tEqfDkyA9t4aUrzRWonPh1neW4doDrCAhgcDeu3Aphw9e",
  "key4": "5qvDWjnJP9euTBAXrgBYHyvTDjiHP6k7sSAdBy1haz35e4YGn2mHMy49KhFCB8JfVVDoFYrue2EUbq8rxoKHJUbQ",
  "key5": "GDbUPY8rqQqgnZxb5eRhLTxBwTpbtGqHYBnBJVindoBHoQ6HdG5QkHDJdNYVuQrTuGyDm3s8J7tMAjg9XH5dCU4",
  "key6": "3RZ9j1ESYm6JMYRwSP58Ttzu9byqVZ7xDo3CyHAuxeYYCNhze9pnanAafx9fhBV6bfhdLkry9AWKLC3LfgjURWrg",
  "key7": "44madz6LtDhFVGns3nfDjehNNiVnQiQ8yhjD5YWTmq6aJg7AzRPfih3QFbajMn3t849Fx4u3anvotGNhcPxxDk5s",
  "key8": "563D7rxMEQHabzdivyGH79SakULZSLEYRAD8RyKhENnhFtwzvVBpjyQDxZjHRdn45go1wa2iotNqvrWnW7uupKSP",
  "key9": "3qvVqwYM2WNocPMqMk9SAbghHaGMb1N3y3V2wkpEqXetCkChnxmfm7khg5QiruT4Gf5kZHHXKsznAryh7zaT8F3Q",
  "key10": "2NujHBQQQMUXUmJ12S4rxS8HPr8Wuo5WFRAD6ytsxSL7T9E8CtHBRYhMMZ3W2DKa8ZTvunYaSZPP4p3y3D8eDrPh",
  "key11": "2D89zPpsmNy3amW7PA3cw5WEseTWS5wXMXABpefdBKs2dSs1EfTyLoERmfBgWvPUvBU2cgP3uyUYdGSEgWFwJA1b",
  "key12": "4uhC5M8DnaixPKLdQrntL6zd1fHXzC4u3yS4buewYd4LtEBomPh17pQXLGuoTjRtzX2ZSSdQadTzDr1jXmKxswAG",
  "key13": "2v92iQAH7x3C5zNgmKi31mwMXfC5Q1xxj1dGyRn5nkmaTR9JJ8BkzEmKt7wmFbuLcPKCZDgLNPbhdbWjF8rgaFmk",
  "key14": "2t9uZijEUbp2sLncnDp2mWE7B6mrMvGCk2o8VEGeU7TzH4rnPdAjijudcZt83kTFPRjYRhTyebQ1wnK85AL6PD2S",
  "key15": "umdM3MRHsp9Pa7wpaX5ftypD5aMozGjTzEUCrDkrNEvhoP3r2JYFSPZxRytLwKVERNn991wse1NJUbs18jdebbn",
  "key16": "XQsEL8tUGiU8Mx1d2zxodpBPTW1sGjyzPtKCQWTqieEojrPacncTs3bZVpWvSG2tvhBCU7Epn469fhBSJWupPiq",
  "key17": "5erwyPFKPgM8ZRvvb1pUUhi97vKAcGaaeskYx22SRUdkAZL5Chua4kJ7vuJ1PRSpB5cm5NaWmHLofGe5yjwT1ZAx",
  "key18": "5DGPKxzeZWUHHKSfZFeTwizcXxfsd2UQKoXk7G2qGuisXx2SRZ55GtqMcmFxVvhzUkQmVcGgTc29X6fjAeNpMDUW",
  "key19": "5s3mRkmv5ob8oq6zAp5f5friHnZrJvdfyD2jaCLD7bM47RGc5cTstxzZPNDf6a9LBd41gNSPrTXhkUayZRbNq1SD",
  "key20": "9seqeP148HS3TBg7os3BCVQEE9Ubpf25GQL4tMmfoeqoa51sq8RfLqLQ6D5HSYKiVw4aeMxXUwW7GusUbBjensq",
  "key21": "TXwQrA4QmuLY7TRf8LY6Wh57ZpoCz9Lo2SsJB3TaBqkxTgMod7h9mc9miMQAiyDoTxMDviX3NFa8paARgtpCeFN",
  "key22": "5w7Q6csixcKNWJQepKRiDSQ7Koags97YZtmwXsbHvkpBY4ctRZoVcbyf6t8R1rVmieprsmq1v8CyyyHN8yr7PEjq",
  "key23": "2DdXEn3EhKqcgq3WtGTgREdveUwzTj3oUSdBwf211bFq21zx2Eg5ZXsVbugxBeRSStYgCNGFQebUVJJDxEewiyYC",
  "key24": "4UFYAV1ZZ4ofzoCjQ81E46uEg1nGmLsdLUKaDgcfstQjYdeehcsZ3f6brh5z8393Vx9bbDGiAKyuT8DpYs2hyPD5",
  "key25": "3KPjwbsbSGoq11Cv8g6fY9xRPHn7oynzrmbGuMhWvBTrxGED4tHiJyBFsjbjbfVb4x6GaNTUHPWN7GZZQh1p9Fhw",
  "key26": "2aVVnyKZ3GWVhsWdvbAvc5hUu8HADBJVCFUyW2HjsCS1F2LjFCVkevrFkdSyojm5Pe9GDGHDUpkMvPrvKtH7aG5V",
  "key27": "4emxoTVSLNYZ6cBqnC7R7U2ChX3MXHuxrQPYfVC2XR4gS353PrVTJAkgX51xMp5gBKpbGRzVgfD9z62VT6c8Z5EB",
  "key28": "xL3NNezDuWnHekwrzyqFt4wcvCkcDR1rLo5knHkvq9ex1q2AxpxqUQCDDDztGhiVmj8ccaeg7t1wh9bx4ftVbzs",
  "key29": "5qWz55LDy9DkZJqRjyp3koURM45aENHGWQ2j2Ft2FyL5gDiZtrexFHi345oZSUTzC5Nf2aPHGpKB2S8LTdGZWWJu",
  "key30": "osYUWNeZBmjKzp1yP4Ky2PMFuJTs8fSQRBKUeMeDitww9oYNSUvq97AAzG8o7fJ1jZPeHaZ5gFcrVZeBCuZTSmN",
  "key31": "2NNhQxsXRgeM6VFprmPokV6gWzauB8KgciHHm8xP5VWdQqWnCyNCyprvrnS9X7YHnT5p1nYMqRHeLCrbZd4U1T4U",
  "key32": "2EhBbWPSsqDqAwgYVv8PiYvkSYWmiFVHC1hiHgCWKh9R8GBqHDB9BjJUoi3V18668yofUcq5dYvrFzdYT6xrid1v",
  "key33": "2Ugy5jqAaF47dJTsUs12nfS9fs2ErUb3z4ZZzhZFBfhNtaQy2TuS4154ir2mKBkU8XkynFQnc1iAkUDTaxcyenrz",
  "key34": "63Wr9Z69di6RwQUNdreQc17GxRXubWCCLf81TksevZ8QRFwC62v2jGNPNAhq1UFJqvs9JVe7owsAu7xmj7MWGhHe",
  "key35": "3iTyis4WkC4db1Qr1QppiAoNNbc2eR1J86ASEgVxKdd7wrBKq67tv4YtL3RSbz15gLYQP5HWJaA5xB5QHatN9whD",
  "key36": "5VsAQQpaSM3epbStGDxu2QY2eNPYpWRSTP2MVT7chs3x1KYe12wN91ThiemMh5FzpfjPAC8JSZ1nY2K39peBWoVj",
  "key37": "3BXVfum6beJH5aM3pyQcVPAvLGUEPZZNHTH93xiuLAoXzAmfLLB2DTSofH8BCrkMadd3RRFeLWvoeDCtJbWpKYg3",
  "key38": "5kGEVGLJrSLjxUKuQk7MnEeqoQeHBMWG4HeLcYSyNX7pasCuapr8bCjmvsS1vBRa3gyJr22FjKbe8htRrEaW5M8K",
  "key39": "28ehbinAeBCV4AgwNoLqof4qH3YKo5DkqfH1A4VCpqcjAmmQ2tmt2vVgigLGG6xbxn6eX4244fReiXdLkUUFfRyW",
  "key40": "5VLTaAaCkX32tAxEseYVkX5yHCabbfdvjJJDhvWoG6kHhjLhCoRXuAeNxQCZRvw1Ncj8z9eEZsJrjBNTfXxYZcD2"
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
