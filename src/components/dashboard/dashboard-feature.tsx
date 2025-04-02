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
    "zFdib677CFoYJQdqVBjK7YR9yBVrE8ZFsd3XvVDS311RcbMHPehDuVThbKQm794v5nWSS9yCUq7rSppdg6SWxzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pi5itiC52kPNqRKtZvdgR4x6CyUs18GPnLk8HHGBWBxFX6zCDQLK1EPnTcHsbQ6diJNKBtBtpF8pXGSYU51f59",
  "key1": "2vo19VSSCdZ6YWsEZHdE3YDAkkjG7C1eDW5JgEPcTCC7DhuGkJFjjXtsiwc4ZapdzV9yd63hXDWXsw1nr83KFvsE",
  "key2": "rUtMPT6pHvLtTWinrdqFGjWS2Qf4LUUF4yhebQAWfTd86znZCZGKNtE58Rb63QmA5kB6Mdk9b3rLDWQTLAKApjL",
  "key3": "3Q51Wa22RHZ2hoMZ8H8GUXYVpPXYNr1mGdyDio6zah2DBMicyN2xgmYLhPrhVapgFSoLHZpAWnNyUebVPRYP24ik",
  "key4": "66DeW45DrnC1zScDKpN66KLuNebSWr5xx5oH379Hi5Vft297gQ6g3hidwXjNiC7PjtFdbCCRWudi4p7pWWrBtMDp",
  "key5": "5cRoiv2o6AgJYfAsB4WBJQ6YB2B3ckaHvHNHUF2ubr9WoPLVTiUny6VtwoG5NTzxifUFyKVmXXG9gX8m9ZSk4xE3",
  "key6": "3247xZ9qZZKLyAinJHMRs4QGZqz98skoMPzruqM6ot7U3HZhgUgNhGpGN3Hmih8HjntX9LTMSCJxMxQpVxDA8JSh",
  "key7": "3HsSFMguHmMAActHLEDHRJGCbLFwYnwphHCGR4ciqC6nFASy5EE8GhCQMopn1LHCny1aVXAppW73LPKgTzFaNWvj",
  "key8": "4CpkJtiLA5WzcwU5TPki8ZJP4TRf81Cwnov5ApDGJ4KPYwCWtr7yKE1XkzBDhQCjaHhtMiTPCSZaCKnMqCcik3TK",
  "key9": "egbAUFdR5jMuGLiCYiftCYmGPA2M49NePhFiumvqe7CeBPFtKpwsprUqKBRen957SNP8VSkcfvVvWQExE1XSaEG",
  "key10": "26S3YS5BTcmic7Du5J1veB77evvQQn1ZWKbHFLBsYzVnb5cVv9opXZpA6x8Tpe4uxBfZFtNcHWwsTDzLxg7ePXP5",
  "key11": "4f3Ege3TWL6jrvhtafB8j4p77bAPGfNKeSBnSQEFVGzroYX22kWV6SZPytNu9qMDDdGtV8z4VCk4R3PpfNjnFNGJ",
  "key12": "4f1dePK83KKBtbXrLeLaF3Y1NevKzZ3NoEMqwLGHTUjsVHERToK7a272HU7D2FPaXo3pk2Y8543Tz9yFYiU8onfj",
  "key13": "5f5eoVKn3bJC1VZg44Q37JTMprouteKVE5ZrLFYoNJkoLexpaEYzb4Ws4NoYinisANRNK68xfCRzgbCMrCFbuXL",
  "key14": "4vu247X64DkVkoyhPqEdwhvyDKxN2xPSBJ1DJPcPhb1mBs1rr2JpHTTpB5oh23aauyy6epGLSFaxWkwyvJ6nRAGH",
  "key15": "2XYq81dxUuDa1dHPfij5hJEMEoHo8nnHszYRRLnYu98mHcstz27o3cpin3iWrj2gHRm5fEZYfBpCajm8miXVLGkF",
  "key16": "51ZxN8AxF9AhoKsqj5HPHajfFckLt1wXe1KfFgR34WWToZHP57tN7puDRu7J3jUo956iJJLk2vSGWQr2YP3LbKJW",
  "key17": "4ien5yr6VouonUPEpyZG2jQDht268D1cwuZdhzyMn2eRPnMdvm21vQbCn5agDC8R3eH7LMBrknM34m293uShQTxR",
  "key18": "3Rxtc6PuTyYgQFDKc8SUiRd3aWD2ynG7Cq3pSGW6jYpSLF2c6U4F9vdzcvPEszPtgxRPdEfzd4YqaAuz2XpKoagL",
  "key19": "d1tUfgjGHshj8AW83yTf69NcDMygGF6a2rnWGcXraspV9yueXYqbmM6FVCrcJZm15ct6WW7wANLdbesMvC4mNvg",
  "key20": "4GdVr3rHTLM7ZDijJNHn6WMNn7rmzDAwhu9z1VgJCLb9cjJJGfgPEPK1Tj4STkW89jZeR1kA9KsPbRaBWzLjwvL9",
  "key21": "5wjGTdovPWXUJAFTqHpbYJxZxaFwNMcE1hQYab6ZnfE62dFBKpmDNwyDkGiLbBbP6uPQmfL7WYAdRNmF5PDMg5M6",
  "key22": "3SA1jqzqH2gVN6Rz3WKNkjSyHAZSRtT29qK22DVuWo7dH6JsVCsFy3yZxUD9yLWbnqzfg4EJQ1WTPj3GFp2DqNhe",
  "key23": "34opzgNQoZo9rgmyAS8ek28orF1Y2rMFVsag4Y7ZejJRzCpi3BCcx6X7HGUmrZsx1f3Xjvk7Xq78B36h1uhGNY2z",
  "key24": "5wUGwgJdN2yKxKDA2qk5EVNSLStmnJgVMmS8atcDcut158ynYeuoTuSH1JykPs9M6TvZPK1p5EAH1mKyVvgkYD9N",
  "key25": "3TDss1RQ2GDQZQ2sayifUKkfqdkQNqNFWGqANcqdETMC2sDS2rzute91CKg6a4ZUKZbLHZ68sD1YdLBbj8uZLMsw",
  "key26": "3NvzY6xAx1PRhWWjMGKVg59BDxbUveVL7mjHjQGGZKXiHi4GZqSHLy5obfjpEFxcMpLmwCcHmA3GRRnY2y95AwS2",
  "key27": "51suyUonTHpsWzHpYqfUmAB4YZczPiq6cTnov3fJXY2UJnYqCzbBHQobzDsKeASt7s92AP7CcGDn3zkDDr6x6QnB",
  "key28": "3ghPsGbW3tgrgZLBJfgdxwq498Gr8x7D9fUB62fmvDS2Whde4SADsu18DgU9ymNDR7Uxn48R645sVeg6miduy8mm",
  "key29": "2ZrvsDuMbiUf4aUpXo2okEe4ssFdnSw6fBkRXNZz4hJTQ5jEufioZ3KhF7EyBAgFGh2yYiD35oxaCNA1CdJjheBk",
  "key30": "21GZDe35SnvBLWSvXnvidwPzGmmA1aucYA8VDF7egjoNgtmJjJBwVYBcGh6DLujc2ycg4er4gyEvwPQAVucYdJox",
  "key31": "5fqxhFmPKQrgBmN9JUZGv59Cg9eQrhbewKczsW9oRUsA7pwZzQdsqFdMytiQkF7spkX5oAUs1q33jqmMK3uoVXr4",
  "key32": "5qufQ4mHmHNUiAoShsxT7jbhuXv8TrJ4nEs8QC4LTgUJzCLi54CHqxxKNBZGG5YCqyNNuHmdAwiRmdQvBdWdLdTa",
  "key33": "2ReNLyVzmTTgVoHSJKumWWaKGy1DWuV4MHzYXVjFXbJmfoHSg79gPwQ5exsuKVn2RsBFsTgyg6DB6uxCoh8CfyM",
  "key34": "2fWj8MYZdQqjY38TaoVDemhUtJgWz2vV1BuXMjaDSCuK19J6FQtYUueX9ztuyKSKAuhCASdUZWkaaWXz6z5KiXKS",
  "key35": "i8pADbohBfw9EnBUvoMiWU3Sm57mULFYro3aWY57v1A4enN6UgDWJUpinFEXvR4bhKPfUhrwUwQfmWSQ65e5hJs",
  "key36": "xfr9uFrTgjfqXc88XjKfDgk9BDhwnZXrQW15fGo3hqypAUDfUZjkDXJAZMHS5QhifofkoqxMvwJfmcKNf1PkMoW",
  "key37": "2BVPf7vymR6K5uF2rfy17QaMePu42FazqP9AvoYU5RP2Un49ZknsaSbi3mHmos47EmkhR8LNKZHK7jBsCbrfJyKv",
  "key38": "3rVoR5U28E4s2JgiYk83QC5v35dwvZ3mdFtYcCGdtwr8XDxw8MAYys1fRC5XsZdXv4kDvLGtwwekCY2hSSJRftsj",
  "key39": "3i4JD1aKXzLKeLwUDtVWgDZS8AVmr4FEk62bJ8MFb3nks67nn5CK6ig7c4DsAEuZqQH1FikAQBCPDWJWsmBhbRPg",
  "key40": "XvFrzpinLzcdwcNJAyFGRWfRdsDZoGgcGxWUeTbr93JGu5AC9hcXYsVyeQo4eAz1CckU88TARwVxEBGrRswU3wi",
  "key41": "4cYBKpgmPmtp2dkNRAbJ3X5gYSkSamKWzyFaZd9zoPZHwCK4oPrqbwAuZ4FQh2ZWe4m4hoouNUxUY2xjeengr9Tt"
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
