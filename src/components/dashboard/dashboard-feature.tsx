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
    "38peeFJRnkxH4yLXeGWUZkQnChYgtneN2dxkqpKE7AkXXtM2gQug9uqnfZ2H8YyhnjiD4Q6hqrdXXKYdmTFvER2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvWpepw48wwPTWFeKKN4vLWh5b9CVjXvMAgHMvzW1NJBGpjo7eo1Lw9UFVec9Pj5MmgRRCs9CAgHiXE5WWinhJm",
  "key1": "585ikZxtQZecoyeZ5xHKVsrypfppc9wUL7XgPJYxVLPKe4ZfqTNXocYhkkgQUcvGTifgXj86576jLihLTJpNXoz3",
  "key2": "3DucCtnqA7X2isfPAftfSVxkwqEFXh4aVUKTJfaRScSALt4GZ1KwmdWhiT9hqHzpLe3A1ij218MM7zDkoqFwrHTM",
  "key3": "42PiAcJqxvuWKpdYw5pnB5Uo3aRXqyoRfuKCrFhu3rF6tb7f3hQGka7aXFiqZU3t9qAmg2orKd9otkeUtpqjTnV4",
  "key4": "5NL48PzvXhtpdKw27P8ptEjCaChckkxjCcqorabZsdBPZ3MRgxbpivS95Lu6EXK6MkKpu7FBGSEWPxpdooTCYhfd",
  "key5": "QF3AwNtzvVVpXk7ooaZAnDSArBE2wzwZz1dDmTPr12NtnNdFrBdrRyck5tCvw8Qms4fCe91vHq2gc5xz5YEiDFn",
  "key6": "yQ55MYhSFVaTwJ8iPXexuU18tcbKcL6cBFaah26bEuLxTBiDUnMcsnaYgyhu679rQZxWmhzKkQpDSZrH4GqeFW6",
  "key7": "61f2HHKexmieszGiieQ8T7tpMLyWgFhF3ocHQpzy96p2gqEGuHB1iMSMn69BxaU5RRgKFfRFTtSZFzMaQ5vVTvZp",
  "key8": "5WJogVU2KTTGmkvfpmBdSyKHg1FHLkEAGGbS8yJqLayWaRsND1tvFWEd67hxdegXy3SyxMJhSMDYxGXRa58nJtcr",
  "key9": "3cVYCRxASY9xK5m3MrccuQ3S7GFtdRgqpjZeA73N4HVHsQPAHmMkpZgWE5uuiLcAQ2ehV7xAcMvQp9yHoWZvHhEW",
  "key10": "3AJ8yRDKvJXmG4YJEtEdyxSX1voVYeGP3hoUic4bZJfNMExRRgWsJSEhzyKcVuPvgED7KNHta3tAXNRoYvtPic3k",
  "key11": "4LELAzGi6G1Sffa9jt7qL5BdTSPZiv5wrrxvfEaKnoJrdwEKpgZq1GdHdwvz7v889R5uMCWiJbWHza6PivDd3Dxj",
  "key12": "28avNs7j7HxYXVYJNVREcKp7EKLw2afrJn7FVH1Scx1HbdocJmzJSuYEpSiQUCyby1ydccAhdzrHfZ8poRBVAfB5",
  "key13": "2B5XayYv4N5cq7QUKxsU1CGUucD3Z9DDWpP4TBnqjTfrqdRCrEWu37X1C63Vb7knxkndLnHqPdZDLMtxZDCAa4i8",
  "key14": "2E4Xp2iPUJ7pyQHT3MFyCxWAmihUKk4kyYb48eSANpuCUAbWv8XsutgMSooMpzj8XVJyaARnJSxpBE2xTnro3hD2",
  "key15": "2b1rkXDaFBGhzAqVGQQgFtXuXcerhBuA8NL17u6nQkW8VmD3VbdaV1jqHKCWnoo6bUV9cNNPmXsVLJG9eEXbmuuV",
  "key16": "3MEfkYAbGXMM25S8X6qPDj7vWf9YtmptzDvUUMxcrxrAZtDZS9xv8NxcDdj82uoZXuATC7YDq7gGmsUf55Zt8Wz8",
  "key17": "54UdSAqkAhmiCRNfN6bwwo59rWcfoy1UPrTKU5CSnvvQ76wCUv5Pn5RSMAWfjawx4Gx6KJpeQNApTwDW9rKgwtxj",
  "key18": "4hzuJGo1hMQxSuxnqh2ufqESEg81jXmbSWJiBuREGey9A29SAoLnYvTmffh1JujpWG5m4FKJT33Pc8kV6WaHTkuJ",
  "key19": "5fHLUM2X43NdAHkoECtMQrKD4JiRbrTae3s53GbM16rYBZco5rX3gsdChATVmWXfQbQYSGEZvJatSYtZSwmyrmAp",
  "key20": "59od5u1r5VJwZst1TDhfvc3cPG4mYsewGUyngiduAFzSnVjET5SXHt9mwcqTTtsqHK5H4DshS9DjRVkixy9biLYS",
  "key21": "2rotaxi9W3h7hCoswtRybTjvuHK8vH4E6LcR96nnNrhNkUGVPzpAaKqhX8QYY6Ep83FEqjTVqf8FJWybfUdRgXRL",
  "key22": "3YiGbZmHnxnBsQpp43gVAyNcddHMae3N5doGEUgNvqq81FFw5hXrPEMf7WDxzMGczpt1diUm3wkXq7THhTUiL3rz",
  "key23": "K7ebY3XChsEKCzzyDfaezPLReCqZSuJbnVkX7M4FAK4FJ5s1ut8UoNQHup5qn8eJQJ1DMTYNrd3xarVJb14jJem",
  "key24": "4TaQ9mL2mEfs35PpoWSbPJd5rLrfKpKqzJyML5gpYTysUSUBX1P9hEKUTChPXci5ESVYCX7z5TTcqdvUFejG594U",
  "key25": "5GubKuwtJaWfLTmwCRTR9DJspzW1m3kz5GAjARM5RhLUbQcW9c7VZ6mcu2HwfAuVEYcFktULCabFWkMB6LHcfSHh"
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
