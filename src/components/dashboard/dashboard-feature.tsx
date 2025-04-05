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
    "3E46xQ5iJWgyXytyECFBHUb5v3zM6td8PBpdgqyaj1uQJgnBguczSuENqtkLCBuWsFpYdLwApHPVKoBsE3BCvbps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FVJAmBG41nwBMWcppYfZszyFFjrLAniX6jDQ9C1zL66Dovu2icaVW1h7uqcRgim1zaTqabexQsapdm3Zdo5saL",
  "key1": "27D7XoEHu8xudDbUt5A9TqxqwkVfHJE5xMhrSbXkC2dcrEJc7opPaR7DToVwtDjwgSyphXmjMYgDwjJFoV9kWmHL",
  "key2": "2tK5Mhf24bKHF2UG8knrYjoEVvgwj9xsio2jdQ1L5vX8CeBuerhy5kaKoxuuANgG1pzSAwmKAcwS6pCnueBtg1gC",
  "key3": "3XM2Kz7tfNz2dDnyK4zxJL89tkhxMkQjJYbBaTrmwkYLmJyFsobDnQSB6adUreh22xB7YRAdJRsB1JwwB1UEHbGf",
  "key4": "2aWUKu6F5BfYThCr5noCvjaq47XZ4npi3obtTjhKYob6GB7QTUBxbTHFfLm4hf534AD6xfYywPBFJecT7hHU7jei",
  "key5": "PwkYfKVu2dAXgW8Gcm3rskyvigdFsqLo4jfCetH9G5EhtS575LPpbzKq4ZUhEDQwUGZt7RFssrqycsvHjqV1McN",
  "key6": "2zPaH92JXgxyEmgg9qvAGZT585GLpvb1yWFfNm8xUNzEKoWiJuVwzMPCt1VCvq7ZhdVVCWHwGJpr8DjTbbt5rjRY",
  "key7": "3JupqWBiFA9BTMym1DotzVwrahp8dpFUpNrJQwsU943oDPFscMihKBGHxn3DtSHL5PpP5bd2txMFEx6SEP1dLme8",
  "key8": "og6YySiQs3Q1JkaHUfyEWDYBUiA2WojEozZ1HmTXQhzZQBEmmyrDhPXu2tfTBWZiTPDjBb9ijeHzeGphDuS3gnw",
  "key9": "3qiSgvhJDEiwtCj6Tc5Mg4g8riivTwn3rsN4NU5oLYUnnWDK6BtvFyr2JZXVMfBNEUsRBReN5GvxTF2UV1tj5oTs",
  "key10": "4aaFs9ziMqXyPgj1MJp3M6LFVgBFkoZ8huhrv441DaoWM7bPixmhBT9bgmLNyjGLDZL4jj2exFq8VjUqViKhJkJg",
  "key11": "3UHTrC711GKax3WHqMmMWrGyehyDozn9cCALTkmRsUpPnj3JChC5hAoqBcwC8uyBvBXmVB42zEwxnvLdXKCBXpcC",
  "key12": "58SKbsye58bcJwZtTd4TxRqEgbE3LzehwZP92bBA76xgaHiqyvtcaxYKd7KHKfz38iLBGZsMacagKdGn1stvbnhD",
  "key13": "4Fv6TSwPLwuQSHQuhiqDbDh8tnVbzYqGkio7QKb1dLstv8hgKaVvPMzXomYXyp37JSPr7kAtmyYJDgFTgdE5McWC",
  "key14": "4wGTCjfcX1xE3tgcq1ib3HjjxaoBEU8fEvs35kopa5z2SkGh2kXEFKT93QrN5uaY7LoBwuerh9M3ZB4t4SzMFRJx",
  "key15": "4TRnD6fLuhR2o28KsgYjVA3DRxJWxMWSrtNGmpsREfc7KG2azADnmpEKC88yPfPE4WVFDbtK4GMEbQaX4d5N6Q3S",
  "key16": "35jkqEZAJ84rkqysw5oJZimVfYWH25ywfrvSceyJ6As4A4j5SnVTKXT61pkeNgKKAn7XFteZYu4XmUDd4q564dw7",
  "key17": "4WvmAowupRcaU5t3Vzisu5V2Nyd2YbSFCV4n4wfBrEvAkvdjtPCh7iUD49rAm9ADRuWnP2gigZWSDzUnYb5KWBao",
  "key18": "5qeQv8dgmMN9cSVcmzETEdn471XTnywUDxEdHWfXJy5AWA8Y4cX4W3gHBbGouj2quB3sz2V9RRUsBjGoCBbzsnxF",
  "key19": "4YsDnWkEk3X5Vf3djwr3Eish3xDbnFZEPt6gaJAV2K36GhAJ3Pbi9v2Ui5xG7tvAFWSFwd2ntWfi5udey5wC7QUU",
  "key20": "2WZ5sCu97NuZoE3Xy4WAfv4rJjzdMDhGBzrKxjrmtiC3mo46pReVpXPMPJoJ65WU8CBVcwRegX6aS3dfRnvcxKMZ",
  "key21": "31sJQffRnd1fWQ218titModVBNhiS5ykAFiATuCHQYRTHAWuY2czwPGsYuYj2Hyh5Bbz614ka8uZUVR95xLgAaCQ",
  "key22": "2swX9QEA7qjBx4fstmWYtg1Nbxtr5NSttCgakF5o417UV6PPjCtVnDeuabdm3pzZThGnbhgC8iExsrqxsC1L2Gf6",
  "key23": "2eYXYyFjX9PhixBdWrmXxoyjCwP7TMxCNEzVFUwhMtXAoy9RwLMj4zor1QEgtpPSa1sfHZSLmkgQQ2SSpDRf9S7e",
  "key24": "2QeaC5aRbybp8yy3euRNRgVkbqZDj8DSTyyWicY9w1xWFrLiiv6qrmTnY5NFJoRiWbF6mnFEyKdaTLMCgaCSXhDq",
  "key25": "652pu3cvTvnCmymhnCTa4r2kyUsVPWo4d1sAJtuEjiKwAsLVRWCWnkRRm5RwqPB2G4jJN8ZTZjHu7KFpGjjRLFgn",
  "key26": "2jtf6w4Rx6kbCWc2AGP8p7aKc5mwUVGwCK6WGeEcUnF75RYbtj2E9sh4TgGVzUexVM3yhsqEziqMhhCHb6xzcN3V"
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
