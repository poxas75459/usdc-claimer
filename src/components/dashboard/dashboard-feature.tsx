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
    "4PVNe4qyu2gPhMA9PT1fMkHJ7MCabKekZ9QgxwKLd6bH6W3n641ejhXSUf7kCiCVgzAmFLjeQtmWYUAsaXD5vH3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQ72aLWu1B16cBhN7iCsXXJRF7k1VxJEKq3Bk7SvNAeaRDBMdPQP4K194oSNbCdM8NVUVaGL9sLxNs4pYEu5JBN",
  "key1": "5M4RjaP48b54TSsS9zK1BEASGMHqDbFKcz1yBnK4xSqKuHX6zNSBmfvzfgQdQdv9tKNi3wfSJCWxUp1ghddiSTR5",
  "key2": "65QF48NkDBGbPQw5b9HffFPWuZVzkQKqdG4YrMotwUdBVPJHwk7AL5k9F9Uo5DUk4if41ZCSPfqjcnsVrmrDVYNc",
  "key3": "4XKUUuSWyxFJYqp2DnegeA1KR1UnP7mqnf42rQVAp3RTqi3XRyNBsM8y1P7R7kn5NKxtRwQRWZxJBt6uc3bVVshp",
  "key4": "2aLPYsWoApVvez7sTJtqo8JHYVPBPKhdMSWcV9BiYr7o7MEpqb5PkvVWp9EwKdumaeSuEV7Sx31hgHVbrvpu4Cxj",
  "key5": "3HVuyxHEHF8J3itfEr1cy7ZJn7sQqXwxe5uGQntdFTDgpZeo15N7AjReH3Hbe3pqF7tCorqXhHRdZhBeVWit4BN5",
  "key6": "ZwtM9saLSWvwQe1f7sXDuXXMTyfCoPnixRubj2xEu5MCLvGsPrYiftyUv6r4QQYTjRJ3q3CmuPaeRsexFcnw5Zi",
  "key7": "3aSWQZEARcaoPJiSRiQT5fEzVUSZP2kiiD8wUNwtuTzjeY6iNUkKhpytngajQHbHW5aghiBRjAzpKvv9pRuCjaJa",
  "key8": "3FfkL6ir3HghaTfcbUzkHCw1Fxtkr7e8mwAGERVgeoTtYw8W8MwNPde815E2HQZU8dCfufBFy9GXN9GVpczek8nG",
  "key9": "kvzwcSFaWgJwMsLMrLjLnNGdhd8GTvrBKhWLnESxDncrCX5HW33yX1XSo73qzoZGSt1CBXNCALj3Wr3xrBuTQcT",
  "key10": "5RBh5ruL7yx73HJ6fmSwprSExMRnz81uQMV4wTVWtT1RMfegB2mXTVgbZUUqbWiiAKf41oX5vQaNucoHn7PcYU9v",
  "key11": "55LiJpr78DFPtZtaLQtTLVadVArYk6fEz5fQkXhnAvpGAd25G7j82biABiHRyZK4HbDSvd5MKUp1ucgXNkvz6fz8",
  "key12": "5UUk9iMaHPSLQg1Hi2mhfQka38WwWBBZ81ZWok1qZSCSY82YyAG3rrLKsxq36aJHQjsm6FQA9MdQS9kiWrAcwCwn",
  "key13": "4bhuPxe6SwsoCG3LvrVrsm2SK3Zx3FMimMRcVyg5enhoXc5LHWYs8Tgievff2ZMYCbMmsLBegv1Mnwh5B5v7xW1R",
  "key14": "ApQS4L5Xhym36iRhSrQbsb7n1wT2c7QGJuQM421P1WA6yUcvPHtpYX9CCj2wQXVuq4vpRxQefb2KYbjKR6qDwjV",
  "key15": "hcNDNZ7MECE6673QiYE3jjcirzRCJFZnV7t71E8cKH5xZ9G2wqAg1z5jsRS5ivRJN3R4vvUWZWEF8AaTTwfiKZT",
  "key16": "2pmPzAS6RmRapZ6fEF9ndSHNGmiHUDyuCY5LkkqCqjYK1YEMJhcCTp6Wy4MEocBEmuXSBvByHzAPccicvhyhjPQN",
  "key17": "4K8MH1G3ddJC3xcsDaxMrvTZoPy95RGKr2YS2YbXwCaeRruna4VfXKorcUasXcJ9y618Bkvt7Ee77r9hAYaDKz8M",
  "key18": "5NRWJaxG1PTSap8WDWgou6qGJYqQ3R4ge2mLPRNXcdJE2Byc3zjTG7BFPX5Z8nYXAAr2oidpfQjUHC8iPvMX3Wsy",
  "key19": "53emaqUf3Y8YbjgBD4yhYfJKif7eXTChHFn8CSspNUBLyA5fn66zhQrcsExEgFA7s1AH7GvBFnH1bummBBfU5rMA",
  "key20": "3JV3V1bwkTSvozXCviqf9TeSSrncnPkAhuDLoy4U2TczqYJdB4nXYuc6ohQwCJXzxyAQpo58Fm4946hc7vmqKU7U",
  "key21": "4hdvkPcHim4mLxVTKh7SCFv2AJe78eCWbD1o22UxXnYcz8FR57sh5f6Gx1pzrW9itffaJ4oJ3F37tmEgs7tE1rMA",
  "key22": "2pUL92hXRJBNmGPejUtiWujiH8aw6vx25aaoyvNQivNehpxcQj3NHqeHtGD3oHhRfkPUurx4YYoq2eemQ4s77tjM",
  "key23": "2Fi84Yzqq7rn6T62EBRgcyQfPbayR8TXdz72gvd9iwPH9egbaAc1a8xQMJq1ZZ8TJx39fCcQ54ZqagNB4nshZ5Wb",
  "key24": "2aTxHDPoRfWJW8N9kB4gotuREUpRRHnFevD1GoreaFymbwEzZbx14C4WrmcyC3xEBmH4vEUS24NdC8DTLe8mRLLf"
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
