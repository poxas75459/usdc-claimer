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
    "4rBuwrXkfWGwzdcnJWz9x6K6Z1WVwL5G1SQ1yo8SVindMNMDPSFXNhdLwizFUznevL9irUfQAvbLRWE9afd5bstZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCCdfKnAUN8XcFBvA4EVenKhB1mxuFG5rHUPs7MCc8VzuAwrgkMA3gZNgk2mEtcCTW2JMuQcHBD6emDP5g77JXx",
  "key1": "4aFVcEiPtV7AuteMnYmzuDoYfE69HZtWNvbUXDGehKWk5qgRYQvLQS8CSM7bXSvd38HgMbGZZnWyoq1RhsdhL9pN",
  "key2": "66NUNFzBd4sfXt5PcJXMNtqMoQu8Ta6PHEHH1w5wcNcXGRQwpMcXMJTAYCVhxgBVqe1sbHEM6XvxWD3PtKYNBBnM",
  "key3": "En71ejhzw4AwVMXKMs9bTtHBqznV95ssrkZEYdjweGigQ3Kspteunixq2pb3BeTNVKUxHCwngSTDGTjKFoVAyeG",
  "key4": "37z1rWkBox4Tyn96VsFQSdvMe6Jzo4WR4BmazthgRYSPwVGnuRF8gMCPzpkW4tuN2mC7gv6cFXMTChVLv4vA57uU",
  "key5": "3PFc3MEDQoieNNwB7wihRPfaara2s7xT6BEFvr6WhLJZaj24fF7gAp48bUzJK8k1BTq71pB4kUrnN9sEhxD9PoDn",
  "key6": "qvvEmyJQH2SuiuXppQCqXTdsjC89na3Uy87Xyms3FPJuw2Mj9FgySVFXySngu3btvJmpw9h7STU6DRcyhQCWnHM",
  "key7": "ceyMUJKzkhjb1hZDtR9JsA6jxxBYiLzSoSqa1AAk1wFMB9JADyqA1eFAafD6rHDbob6dabcYyef8zB4pYoXQ8zh",
  "key8": "5objaiznjvfSp86QA6rzKNmiwQTqMUBecEbC5PxtqF6ypiXrku25bbNK7Ne63KqbNQdD7vKHSVqjaQtv9GWSTJvv",
  "key9": "4DTfKckJXQ13NXnirCtMqmyxL4gVDorggNJccP1qgKAMoZKmguyVvRQRZ2NcFRJ9p5qridojVNcu8PNbucuCLD6m",
  "key10": "ZUpt4WVmcr96X9YTUjGk179QJ6jcM3f4EFihDzrbzMMXKKvR3CfJ2NBiDVkcxCwW5Dy8NTwX1qaZvvmZ6tVvB6r",
  "key11": "NmcRjcApMBDut8kdG9V5LLGvZgD7fQwJ5Jxo4xvKyLgrFZ5hkKryoZLw8UbL119zsgC639sHEAXXmzTtoRp9T1Y",
  "key12": "61jMyXRog3gJQMHTVEzThkFJXSuaMG77jc7mu5Z3MQrofNGHdGyrH9eCToHT2iGmR7RtJfKN853cDagR9XBgfkNY",
  "key13": "5vL2HTLTZEhWSfCGjkGAaXAtNtk1XCRuxZi7spjgYLkxXXgfKT6TRk8sSvz4gXELCimJKz6iF1X3j1oNQeyWbanV",
  "key14": "3USZ537zs2wzvDY3xbiSewpxDwJ7mv64SVxtTcriUPzCwodcVnPHCNTYqnFV39sCHzvtfTs6CSNW5TECd3rhquaK",
  "key15": "2csr1uZ6BpmWWTR6383qsDetNiTxTRcify85zQH5RFf4Tsen2E2rt1eCJVcxcHvM63tr3CBKGU6w7zPxBGiX7ztU",
  "key16": "5pNBheCBjNJwoFGkcp7KeJwGXW7agXjBeHrXDGL7tvyvyyup7xoWWxbhri2biDuUw5n11pgdazijE6KoxUBXjoBT",
  "key17": "5Sv16KzXUMfaj4GUCRtEVhkKUAAizE3QWHmTY8jioLWmxRhauofxKQDg37eYctAHriDqEkRnPCD8ZABEV7LaKQCD",
  "key18": "4AEV4HK34ohTCUraFxKnsHF4cMnTyHVNgC9X1TA7KMj9SAD4qLmgwP85v8UKohnYWTTeh5qiA7p4Sq6sv4hanaC6",
  "key19": "2NvMDFBxMnkbP6DLFqYePSjhvR87NvJZJMTeTYf9RhqaNy8JVAYCxFn22XvxtTqw8ZphqorVXisBQ8bdsCgFej37",
  "key20": "4jqV9xvwfZZeAEbigw7N4nai7yeMtG5aY19Qi8o5oaSJhzQHg5q3HYuakhec3n55ogDhoQaJVUANMV1Q1Jhzrep2",
  "key21": "3m9sAJKGhVX5enGRsoCnbeUz3Q3nWZL8BWzaTHzcRF3SSYmLrtLNy3d74uxfy3MN46Zzdh2xcQA4b5QNdS1XK3TR",
  "key22": "vsKcXVVXWRnJtBFtvcSuZjSJfPrF7NQYuGkkDGeqZH5MUUx1cpp5mwvzTs7LKPw2fiZXmnKBATkYb3xDVSnT7ku",
  "key23": "5JUJnAeBixKXPgz8uY1CXwSrpYbj2zpkxYLsQ7hAQvKBRiDGB6mV5GNsK33VXnVxvmef4V4VLHEd4e2FZjif9Dtp",
  "key24": "XqCHMhMHFeFmmigtLrYp2wTTteSNRymsj5GYfz4mhn26nXbfP4qTs7DJxhCRbTNokQ44Gth18zktQzyYEuy55zN",
  "key25": "BCaHKQzhSQz8gUEmYz6qkM4UkWJuZoUP2wLYnw6NaToKdYdHuvMLXBRBS73vT8DtmP9F9WZM6qAEbDfEVU9Xj5G",
  "key26": "4cphPzJ9oEjxowD8SQSbthMpdxipbQmhHDGk1qerMePunVTBjBVeVEnkJDA7mPmHayHA9frP2RDdBuxewCZYMB4r",
  "key27": "9GBKRW8z88y3qu5nmsLDzp2izPiYTE7wV5UBMfZ6dAjkQDWdauNYanXkjNTcJi9Zuy2Rtb9Ry85yppRCgkQEMQB",
  "key28": "2W6CRKB5by9hjQM8rQvUGZcEuE9EJwkm5f2oaSeWVXuDQN7gHWS2cH9CfeeN1H9sTmXFd97yuDY1cVp1yrEB3irX",
  "key29": "2fpUXLJ1fN98FfHcdHtLy2YhTKLXvE82L5dsbCEkegyfPFVDaaFS3dfMi4RM6718AJrH7b8Ucn85iXXajgyN24Z4",
  "key30": "2qj5KfSvm9LTJaDUjw8jSjy4muLdJRHcpawu1CMmupA8Q9dfgvhg641icUtmiuzQrQJ2VoJ4FKphP4Fxgs73ys8Z",
  "key31": "2KkgkTtoNU57G2MJTpoEEAJWFttaYLdPpctLs2LjJe2a5pX9WKK9ouPtUjo7eEUg8s319kgKNTfpCjjsj5Qq3ZMX",
  "key32": "2RCts4EVdpYjzWwjYzeKmeMCroyAjtT5sicHzGNWYL6MS9GW7PYas8AmUQyXBRspGX2SGCRwq7aw98HDbAzi9QvW",
  "key33": "4wuttuP1mxrGW5wzzh94Vb9WJ46rWJTX9wznR3ES4TUCm5ESXAPRFBA56QKzLFzH6AurqhGbboEk2aX7aUsrMzUt",
  "key34": "2gLaU9udfPw1GxKtzca7tMV9FbnvDLQQgyygzdLB22mWcxi82B5CEZKRtug4YPFNTc1c5FdaEvbygjQcVzfuFdM",
  "key35": "2bTjmfhsUXV2jZQuU72C1RH4YQWm595NREpfoRHqXTKGqZqU63dMLHyZ2JryUA8aL6NVshLcDi46pauuvdzurbGi",
  "key36": "51CVfZvkBPz1rNYKSxfjwv3w1YGyHyosBsxDKjubfK2aSxyU3XFrj5JmpPAUHVSno4uovjVn3pkvmcbyR4iueDNx",
  "key37": "4BiKuyG8SnR5TjYNkJYh8b7GDt1RErjHTWDVTAyzs4VjKed5KrFJpKEyoaUYSrqmpK79QSdWkv3DLRdrH8UxxqZQ",
  "key38": "1mQPYvhJkM89Y6pX1Jewnimv1X7hMaXizgQ4XH3kgUX3kmcpB1SwL6Wx2auWYCiaM8y8pjbxyoKf4g8jyRnkrSp",
  "key39": "2aeiciHpy4c8abcBzsAMSKdBV7Y61hsmmiaP4Su8ZhWEXYmijPG9fsbtWYt2s3SAnGpBYnCbVC13SPyBE6YvjwKP",
  "key40": "32JKoUnDBSRkmewdxBPy2aFhE1cQ5Q7khMHiAc11jWdoceTzzF1LDpALDRhvvG13uK7uecMDu92AmB8HUi66fmiP",
  "key41": "5etV2qHv1LRC5ZdzPriQhHsdMpFjXTpPcKDLRtRFEQRDoHHBYnNcMaNTLkYMLHRWBApVP2Ced5jCZURg9yUXv56X",
  "key42": "3Hx8KdGjkR4v3smKkFqiqXvXihoScPhR9EHgiGxtWUiwGnBbjhJuCygDQqiARc1aGGmXsAcmLLTQsK6hCrBokPmU",
  "key43": "5eSAisEYCzXAdxLacVYvPcqV3eQgen4BAzFArr79YrNiMH8G4ebfiDrANzpdeDMv6et6iUsVhjE3FYUeU4Jkh9rG",
  "key44": "4PFnNTSS4jXRfH3gBdNRnJskv9YEoesyCZrgPG1mkBZY9YfmaQ69pyNtec8nTijLxviD9it7f8mZfKRsYW7m69tX"
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
