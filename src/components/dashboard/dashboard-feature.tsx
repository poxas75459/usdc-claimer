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
    "4xznkdQEwh2Q4ibWk1EtYZe5ddPYy82zWJosTBQZNAXRdfKVhMLQLiwLkxr7m1HXvjv1otr8iSYV1YYC84khgebE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzTEaeM6xxkwMvgX42xAWSrmxz2LhqNXyTBVefdb9pyu2HFTQe9cNg4gX5n8wYx2SQBjZHUcjm8YBqsEiLTRRrm",
  "key1": "2q1pDea7bEy1RYu8qViyJd63ZEXktrqBv42QaUSeq3ALiM8x9fZ3K12F5rVG1QTqV4c6fnXVKAo6gxPEhS6cSrrS",
  "key2": "4vust7bkRa2dVbj2oRbsdV7bb5hEmvxMHrYtJyGafexkJ9cTASoyGWRTB9YnVMBgQ2fY3wy9owA3nShb8jQFEpT4",
  "key3": "5agHkTAaC7qMtHbNDkw7sLkmVP8yQwW7QUFDGB2Xtn2DwmnUD8P285Q1KC59XcKugjoy2onsmgdBBYoUbx5aJnHT",
  "key4": "2BNrhqa9c6WcmjNNFMErGDAgPaHBcLV9PaDq4JQmvRieds9un4ifoHxMrTNisXpVqVveneG6GqiEuqHGv3qvke5b",
  "key5": "5Gg4u8kh9ESD978XtPedzstvuFE7QjkVokLGX7oticakQToMobKeizuL8cmadJXTcLHL7afEhgBLGV6tr2xjS7to",
  "key6": "5tSxB1NzHawWRgMTP7LMt2CXP8Un2Wtf7YbtT2BoDKrGrmQeescffmV6m74WKDeDwrVcm7Gnf7f7fBWQb8tyT2PM",
  "key7": "2GSx4fGidrLT6ZjJYEueAr7vR6p2HAJ7cPJFEG9W27m6n6uGjsZGNrMwDh73S9eFm7yqhxGMTsxworb8FJmohEk5",
  "key8": "31XM3hgm3V9td1knWV3MHHiFDahcXWRgDHKqXvPTWjN5X8kEovQeSJEHCyhyWVWUEnZXpAV6mzFGXDAYgLeSZeM3",
  "key9": "3Y67mfJbGLhUtUm9hEg2feiwh728GL8QCqqUKp6Rz1iNBp1vuB3rtAQdi3jZ9DE1gsWjLmeU65AunTZZFKwah6vA",
  "key10": "3nBGfpsGiJdn86MinLXDUR6nFyYU14PC7h2LHg96Hm9eCQaC3qJwx3WFM16teXnGq6z8vGswb2SQEs1Nr7XGzrvr",
  "key11": "4cpi7mpXWeaXraGoXxowoxGMe172VNR6S9rL4agvs6gKzR7eBpXk7VpJMfNgkqHPoqRy9sa8YEUMdquJisBomZbr",
  "key12": "VTmbPEcHcCUpuJNQD6L2PkiBJ65hbfMWeWnhq6S5xGZtfveS4vwCxm1sHV96EnFxBQE8JYMVRPnYUd3WLfma2Fn",
  "key13": "5jT7NqjSWN4agMhw5pVSCZfYVoRZULn3LCM9DD6NoC2DCDCddBVJkQwhVBERRJMKQhR4jJNZSHXFQgrVnmWXZdWg",
  "key14": "2iusbZ7GTzngr5p6umC8P8wEyHX1Gap3sCiUopR3tpM9DkDtBwo9vN4FnsWovibipWPnFfB1oJN2bQXKitJzW1Hi",
  "key15": "3VSuQd1GBuxYdYgZ9aNbHceDLJx222sSxKqTfpR5js3jKFDY5HQbLrStriq4rf4z64J6SNG8hgaHXZyGg4GgdtcJ",
  "key16": "466Wfb94y4TAyMJtdYKkBMQzWJ9bUjA5b51LyAfumqrKRzJ4T4jrcD5A4iFtCd8W6pyoBoKgXPmCEdVkMjBJqLmU",
  "key17": "44FCn2SCvhi9Wm2qA7cLbMQxnsGPvfmJX4MoU5P2bcYt5kcGGVZV4PM65qE3sQBFrLzz2z4An5NfXZhaLRaYAZr",
  "key18": "58xqKCgpYZJFe9ubPsAcm6QAXQ9VaqHSVujYJNhTLAgHL8YCAgrea2tiECGJZgruDoK2ogCigP7CJqrSeaqwyDP2",
  "key19": "3HiBFkUDys4juEkYQxubg6av5zARsDsyqWWnucSQcu4VNwXNCkC9MMp3PqsbuBQMvF4iXo5WawTu4A716TEhHCvQ",
  "key20": "2VFGZdTuTrrugXT6YtSjjcSuWdYCZ8odmvweuBrTpWHqtQ2uf1MwWC1XzkMWnoQpTP4dPMxPresv1t1hnzDHdgHL",
  "key21": "5TEZR7Vq9qhattSa59GE6ruADm81pWHsgN9XAvJ7YGD4gR2Cc88WyTNuyowD4erXFFqML8MTNjrXdHRS7XfUzTrQ",
  "key22": "TciKJps3Symky9QUfzPi8Deai8BmvobLZqgsgRskNenHpnrw2grru4gL7chNmGFyfnCXqTn9qs5PBHk8X9Ac9Mo",
  "key23": "2LmzBcwvEyYjgCTTmzG9nh7YJ9oHaFSWt3Cy1ULNGcep2rcyBQT3mt91iEPGCg7UdysxxBrYXZaBJDTHGm9RTocy",
  "key24": "4dH9w7zdbe37vhFa7pi5usX4X3yjgTT5GFJuXdYpLxGpFEz75zE3y5gg9dQDkPDSsFw3afWe953ApfSdhjfAvepD",
  "key25": "52QuKt4MQdCdBWoqvTRpK66ka9Vv6BNbTd88FX4dMipNgqu2oEomEEJwsY2szf4b9jW9XbDcpC3ZrQoyDyECjnWt",
  "key26": "3NPfKWUR4qbHVTksnuoTUXtxLmt8bMheypM3bdQwnoSPxoUy9pk3MqH6rg6U5hFM1basm2muhctcds7fxC8hKLQe",
  "key27": "5wYyAKNHPqQQPYcjPiMvcLn6tRNkEAaCDusdT7ncpJuEsaPs5YQ9b6QTxwgCXh2gC3yTFabATo5Pr92XECLvpurv",
  "key28": "25LcPPrq34U1us1UeYaAdd2ttPJ78tq7v1N7FdtDZVnRaq7XKuqaXfZGkeyBD2TKCrhr6cyFvW7mwcWAWEY6V17Q",
  "key29": "tYgHHeChCoNPUsxkMHHTZuagx1fC9BBve8XfVWsQqXbXXinyVCaTLZXVw7F8SukekYt5R373pyToke56BQotBB6",
  "key30": "3PaFGfQPb8dTkaeejhmgjGzfF1xQQ2zz11zJFhgz4ZU1U22Gqy2C8Kardp25jrupSg4NVfnbUqs1wxAsFoTwkDZv",
  "key31": "F89VMtNWJZPBA2oGs7WvV7k8YMxnF6UVhJN1CzqnRDQ7EbrfeoAnGKoWLMD9n5A5Ro8GNa2vdAY6zQ4vShdDeiA"
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
