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
    "3v3fkKGKBr27SF86b1wPbhJgAMc8LNtthr9jvVJnnpq5wEYSwxAXZKMM3fjjXYXQwEURW8q3L8BhNaU2DQdtvzzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXDcy65zL7UXGu2TBMsvcjTVMZbvjpqR3YHBrCBpdp4SUJfqwauQr4wTh2M5P9BKZLZdp67eBW4CdU2Eh7tiRFS",
  "key1": "3XkZQMWXtSy2JySG8yuq5CLsisTTjDgUd8TLtBPwXLqjJi3xwrGRqtp1XsLf9NQVkmjA8WCn8nQUhFmSUtJRfwrE",
  "key2": "5YgQeUfE1Nu9Cv4HxGXruwDzR3cQwEbRWMZgbc3zkkg39kCRaNbmMTriBRG7QYzDhsyPSCJhRKepWT5K84YegFzs",
  "key3": "2SS8zrNsj85HXvYHuP8C6wr86tA64koSFCE5mr7YWZ2FY72PtoaSbSzhWaLLmdTg2uUbPadphDCT1x2AppegCHWs",
  "key4": "2P5JDXt48uXXixq95wLYP5cEd2FFreHzvtA1ZcErJpTQbJcRoNjr2PG49a4cCjTEFWdtgJvopJsH5CHiHDLo1Uuw",
  "key5": "3Wxc3EFeuRwTxXJqoc2hN3DqDmEcr32tYkMMDrmTpLYf7qKrWZCC7KwdLNZemxaatTuiRfc75dUd5NeLMDkUtAzi",
  "key6": "JxH5mExfeDv3CgZBpWQZYEj8TMQj8LwUQ27LXhgrNpoqeESdjY4LtVi6A5FfREVz3kiVJfKCNEmr5BZsTyXqLrW",
  "key7": "5MK4x876KtFNUuamcB66WyTaYp5aaWocLT2rww3Xdj8K5vZFgR57LY4rHJEMXwq7AaeJumANg2MympxJKNzPKYi2",
  "key8": "25zKJkX8roGm7hsBhKarjLnUzZGfF2sRntnNfvoqwXmj8DHSrJrdej5wGs56u2syoWM42DcA7sjnF6W83rXE4zK5",
  "key9": "31ezfLDmLksJ63CaXL1ZcZtzGTKLYBDoUEedpB5qmMCmT2gk7CfAnvgzeVPgrXwqY8Legt8jUDTZiYvdDUTGVG1f",
  "key10": "38yJkFNaBkHc1AZQYF5AkxZ4e4eK9DaYtLdC4oScKsjYwf5ftiy7FPwt1vQJTiGn7xvPhT48ot4DMmbxHeQcDE6e",
  "key11": "57CP34nMLwtURH1fiNcCTCeg7M4LHzdaTqZVVQBjCjTYmh7rTDRgUbHfHw6pvjDSH9mvJ2PMrq3Th2wXGEFRuRqF",
  "key12": "5sa1NaPxENeX44ac6uxTZYKdnbyVP2TjcDDFjkH867Xq1bbpw4gRV44k1S9NPJCB6SEzD5kLzLKQv9K7aw73Ymh1",
  "key13": "267Po6Lg51K3dfjoDiAn1oYMUtBWtTzuS3Vjg2Aiyv48wLRrNZDqC2PGtxH57UHBBBGihdCwqQmo9ARAqMJPHhA5",
  "key14": "3P65TXMUEVMi7fqqNYXErBuXCthi6f1Hog5MEq9vzPzz5y3xGgTuMMwPDdmRwjiu6oT1yjnZwTkHqpvsTGMzHjip",
  "key15": "3QWR5AczNPxt3pPkZtWrwMSuVHyThA4q1fQbmyupktfppnjEHtNnynGkahGvHjEzCdSghvTxWN3YAD4TGdH6dsL3",
  "key16": "5v9UveADfafbjWjoQFAbEpWUozZLdcQF5Dso3N2gWvM8ehPGVXQW3CZmTLyocJCRAUvgvVFjX2J4Mcx3T9tHEhnf",
  "key17": "2U2JAdUwFrDpToUfgv59K6a3CHFqTBVnbKdp6hqELrHZ8AbyckRfsFPSbrkiF4xBjdFvMgyLYnSZK4UW5BaP1dvn",
  "key18": "r1N3TsCDxGJrDw8qkVVj1kuhcE5ZJXZg8Lb9NjawMHtpx4866SUJsGJBexU5P5NHEXs2pqfvZ981ayPW4XzcWUs",
  "key19": "28DpjVVqUA61bEryb34ee73QR6UCJLdVS4D6JDd6n3h7z7M8XSq3ux2kvS1yfbzhrqKbRHeemSy2dZgPpeCxMwbU",
  "key20": "LzqFy69E6Zbso17b2H4mXL5AkUir6q1EKakEXkwf6GEv5aYH2mZEdGutzrxy5m4C1DJFPqqEHhf6g4PMCG2FAnh",
  "key21": "5zKuxnJ8j6y9iY16w11DPkKbduCMvEgkeJqYiTfuHj18J92LZkjrHR3DqW9B4WC5tw2GLnbaosnpptMc7WHQN9cE",
  "key22": "3e2Jr2FAVz2esH4R7X2zam4K5DEV7YPdrwqWAvS8jCubzZZFHuUfmySTRGzFMUuokQZTm4569ih82vXUe2TY4wAi",
  "key23": "4RTq75koUVhMT8KnMqxebstAu98Y9aKVDJvqyf2L6t3Zura8zH5RKEWHcbFrwqCkbDPt8ytnzzHxGACTKDmSkgkF",
  "key24": "5oHtTjrmcJrprAbgVhF8EpqU63ksEqkerCPEcU5MCEH2MYM546iFsSEeNrXysRxz5ZPUa2Ccejdgkrhk5KdAChrv",
  "key25": "64eCRjEE1egs7cjeCeTziQBj59vVf8FvnLMoEtmVefQXYvKYcohohBRNcdYTmR9mYybKm3tSbiThofXZuhjqV12A",
  "key26": "U4tHBQsc49NkSrj9Gz3HBthx2Uo1vzAYLEatvms3Wbi3AZUUVT4Hgknp4T1B8cSdtSt77CG5nyRqj7QVSDmMWTV",
  "key27": "5N5iG6fFvZgdtqiWtaSYHgbbxDAdCSq2MX57UXasymtaLLrdAgdQFPHeauzy7M2jZpSCyADyPttM8eFtAQsT8PnG",
  "key28": "e1rcF7R7wf26DtPSULLVbfTQ7di1nNHxxt4acdgQrPE2mvDUWoTziyo9NfnbxKanapWz8KmrCzH4nwMucYDMRqg"
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
