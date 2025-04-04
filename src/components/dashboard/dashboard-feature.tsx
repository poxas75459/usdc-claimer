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
    "3ppUUYQDUHsSW2xWAUzrxYTWodpsncFpMt1RmiMy4QXgSHQ1AMiY1Y4Cebu3LgX6T99KicrTEz1eg5c959butAGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQfRF7gZt3ZvqETykmtHZWiJnahHJbAFeP1wdg1H3E1M6fNrCB9bL3zk1GT3jHfRp4zhkCb4fcanrhWDgiTLgp2",
  "key1": "2CX6tvF3DkkQD6ykdBHyF53yGDj4YKwHyeL5fQUp6JDNej6FNhxHvBuGG6vvWQFsRFP71qrMzC6Q3TDj9B5xGZeh",
  "key2": "4YAKHuKeiiXqNeWNpBY8hMWR96xEiV7y57Lf7AaWHrF3BViVHrJ5xc5Rtbbtz3eoThTGCy5Uyxbxs2VU5RBMeNdh",
  "key3": "4TZAyCkkHTairbg4QgDu2vsiYzg3PAvMyAN2FExxFGFge28eyEvR4G5dvWi1CQZmuA6ad6DLk2ZWLSyVZYHGqCCw",
  "key4": "2k1QR7iPHG7Rq24M1sGmHqa454Xn9QxL6bs8yQeyNLSq8P1ehH1kFNYCuaC5RDm5xHuVa1XG1DfmbPGAWW7ZBnxG",
  "key5": "2uyNdRVAnJHKmsbNYbm7tYySScMNBp9PQENdFdkw3nKkJMgkx5MSQmgWGGhqwGEtaF2Knrr7VP37N1Udc159icMZ",
  "key6": "3ufZ1p36aH3Z8VavwCohobxk9rkcXxXUh3fMseNhTvWJPpRzDxJLFS71nhFaqRJQPschHgypSgyPaSDSoDRgydH7",
  "key7": "dy5s6RDpjHYCd7g9rofhHcc9dMHhCCVqAjcVPt7UBGUT1UwbMZDdp9UWchYERMTCPsvTV3z9E1xzrZ2fvbJruT3",
  "key8": "2HL56Sh9CmhmxoauCZdSF3R1NKYTbF72g7gx5jsfBQ2bnfAZSXTVsVkevozqEjasynbdKRu254d3gpFzDE5cxEyg",
  "key9": "4sX7QPyMceGykKgnudhDc7V2XuAdALc6yEra6zPQFwEdnGrMpbCJcN9RQ14R7g68H8kGeWS5GufgoPqQRyTbLaLd",
  "key10": "32nDT8EDW8AnBNJLoMEzKP924LtykMw4Nm1gymAMFJtbKh8HRb52Ljq1sqmWKotgPEeLRf5fT757HGRPqAVaVS32",
  "key11": "3H3JBGewQzrrPWLt3Qj41vfM83sMkQUHnsovNLpLLZNqJggwftWQufndSMNj2eDwhdEJ93prbtzLVT8WVRaYUJwU",
  "key12": "2LRxQ9hnR4MrRtXLuJGVbEeLXADw3aTZgQdmBWAoTKfMDJMZoGkrstwa7phkXY1mdNA5isw7MMX9JTw7NRQSPEaJ",
  "key13": "4om9oX7DwMHkxXdC5bwBn9zttLJydJGLkibMpoq5Sc8z6WRbKu1pVATBSVWMNxMAgCoNWjYvxQxXhfzQzgBowguw",
  "key14": "5Q1REFeBF754sDkshaR4kXiuCZXZfDukv8y6q7xn4PSarXRsopN1YhrK29pSHZCRiT9qUvaET6JU3tJgZeHBrEsg",
  "key15": "FWPTEVvyvBn5WUyvnG5jfJsGRevAEUXyztyuiLAkzNg6hYc7pfC3kYDZdg32Ma9QC83XBRouTiWZTdecbLhUtTy",
  "key16": "M8vZ7FHRo59vPLsXUiQBQD9m9JFPEoQsXPcemPjogpyoBRXxyHk7EyYbxgaGr5dUpFqGqupP41CRDPW9Wj9Tsxn",
  "key17": "5cYsSEvqPZktgT3Fpgcvd88ipoFmmRL2FXFXLx3i8yN1fJTA3RFD7m9H5wmGedFKznFA2APuYf6hxcniC7ZmtYgS",
  "key18": "3ZGdkjJc1sC4cW25z3bU9YkdLt18oQQqJU6nCtz3KjD1Zq88ufTEwaAqhBSSMzbu2kw3NtWmvVCsdsRLdCYggsG9",
  "key19": "XvmzVNrkzLzvVp7jLJc73QkLWYTJdPeZhcZVNW7CbtQmmAADxceoTp6d16j5wtMDzt7WgsN7QAzwDrYjGyX3EhP",
  "key20": "2sBxZdbnoc3QaKdqZHgkMYeEUqXqiBKoXYSCZATJRvt7MEYTci532ErLssiLcQv7vPnjcAN6k4hVc7T7doNoeMQ5",
  "key21": "5VQtaHzj9x2DJWKnkuJttgxoZuDHwqtN29zQrX29bHiU6ufAcTNToXBisUbUYbF3SSkipih5W4tfZjKn8mVnn5NV",
  "key22": "2sWQBhBRJ7Uv3hrVVKMhn7UxKPEXRYQAWkdsRajKYh1X4mkwwmETeZK49A3AQiLPQR8Rpwycuf596v5iBwRwkXce",
  "key23": "1z5oyuzHsfDeh3QsqGHjLXPmT3mrfBCKXvBMsazGXhCRwiwcuyMR6tfDo9JmPki1fP47Ey58PRnCYDPFGwpwJPF",
  "key24": "2jqnjyhkMkZ3S4Gx8Pdh7bznrKTsTDmiHEGM7UhEEQrtVLFpjerE2cHWD7NfZaVR3EW4xiBiDUtFggvZMDFs1A1x",
  "key25": "3ukPtLFic11jd5aMiGYdjXsn6DH1tFqRiDp1bqyfDVXybd2v6TwiLxYZoDRViDEzhHUYaQiCsBspmycJYcZGtgTt",
  "key26": "5EVWZGcBUpHDopSJoj2inyH9FtGExnoED3AwSbvWFdkxi1B43TqRtBs97vSB5ieqLkpgF1GRLVEyyYCoiLpu2S8x"
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
