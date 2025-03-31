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
    "5WoMvXdbbhEYjFwrQuUvPsdYm98virg8Ue6YLT3js4kWnu34uaGfBM19dS3Gozho13vcSp6anoaEL8tFwZpxkvBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQ7nxDNRk6XMVt3z8oooQC3DXqYvtqyu3NJFSNjoCCQEpmtZke1bckvoWVfsJkKtJWzmSvwHuxLYn99Bi6ruMgi",
  "key1": "62rXgdV2v65ED3ZR93PZhrh3pUwVF3iyJH13vzQNihpnokkRMdngktooUGcroaiXfZu9xQ2PedGGYSFEjeCCb8UW",
  "key2": "9BdCwfqoGA27HzpQ8Y1rTr8yrbZvenREyVksdTbVz8sz6mPT67qi6vUyh44nQLVf8UAV2HmgsKYwNXGDhWSSpTD",
  "key3": "3HA4fM19MwLAVZE7ueKmBgCAdUXPqGE9SoRtH8dVUidYp9qTDQFbbPY6Mye6WCDZUT4esgTLttGyZZXYD9a1SPYR",
  "key4": "5HbXwD1YtxuobRx4QY6er6raHrCwoGJjdLcy6Wo5ahEknc6VVNGDZ7b9husv5TQp1h8aQGWnYvSxHvDnDeXSfj7y",
  "key5": "huFbKwDuGzSPvXfZFofFAc7f4EShn9hFkDQVDBwqiAKppwm5mVg4eLDaYEQUgHn6cb34gR1BuS2MG3jwuhoxb14",
  "key6": "5SVePL29b1Q1JCdL7CSePxim9LnBYzqs5Cwp85WcSZWCmyKJ9APHJFYpb1QiWvVEdCRyj7VTKLv8ARWPJfPsVyHT",
  "key7": "hHwjws5chX8o7L837EpwaxJhQ9RoSsUDzTYoH66bEkvzuxXPnyWJ7mk1K5LACUaxTBVRF2EwuUq1GtEWDhk3Q23",
  "key8": "5D1CB5guZEWMZxaVfJwqwcDvgN734E2mhNvyvrmr9Vujw1SdxBP1F8XUmYBBYT2eQ4aqmcRgSuJdYG39szy9EKoh",
  "key9": "4rgyLZFuJG6VonDCuLw6QMaD4iCdVth6y59DWzo8SUxUT8riGwSfhQDrJhG5xBY2aSpAGHWHSshPt7TvEUyvgMef",
  "key10": "3ea6gsr7AiXEPFD7DQYi2FXDiBUwwTfaGgD745tyy7At1NEe7Z3338J6GAWJNJhBnF6FsVJ7ZC8vsFvK4991iLAc",
  "key11": "2oxRVhCnW9uFYeKtRdfonBiczktX91PeuexEEEzo2N9vRjXjjKnmqFpPk9LYBiXYiDWEHXRLLQgf788meUYbZ1BS",
  "key12": "2RxjuhFBRZBMihQhP5srpUWLzNvFzn8ENG9GrXRDxMdNRWwhn2uARaq9fcXi73VREcw3YcKhAtnBiuqRMKFp9UNw",
  "key13": "5a6mYb6rPEoJFu3BwVFHHiEq1Bn6a3UStN6jcCrTUXDGNsuRmT2MpN76dhe9B9aYvruvtcWDoC9g8h2cBRvueRJU",
  "key14": "3Ta27Ak5w6BNEuL5mQgitk2fxBScfnFErtdW7C9k3rFfgbGUtdAscYfpgYzPJmmtHweo6zFQ6YcyRaEc6N6M7vup",
  "key15": "5XSqTAsFZbV3F1qWaReDKnydENrzYbsqLnLcjEUTVRZYQNGmziCDDR5Qrt78wsQAZgchJR5aveT2fjEFXeaYgr2g",
  "key16": "5GoBanpqFxZsTvK9QvRSgi19Jg19W2iwyvYcKBY2Y598Q9ytN6rqWApNpvfRhScChUMCHHUr9Mi2w4h5fDZ6LC8R",
  "key17": "5trxiRyv8nuqw5xt5R27yc3B4DKBDbPhzBCTRZytdxaZ4BaaWAZVDfVHV3Mvd3RA3ZzdiCKW7LiDSn73GhdpxN76",
  "key18": "2NPsG74oiNRuhFo3UN6Rv7YCPWL1HYQYwsVEUWszKntvwxmMG9b1iEVwthnZBKv3UUVKwy3hj7vBvMp6jTAmCfWd",
  "key19": "5AoinaU619jM5D591ekukAFjpmb1bjVWhMNy9EBQZWtzUAPXtCRSJ8r6KCvT1qrcEYu8YxT8NPb4gJe1em1oqXQK",
  "key20": "2ZGky2m5tq2V6ZuYWRWFRHWpiMnEqTsDCz1Q1Q28kvz3zqoBCU3VUKiXEWwmdr2EXKauVu7cq9okG5gzw7ekBF76",
  "key21": "3rqK37N3TcCBXKGRUS3GWEHvGiHCQ8MP4py1j7pHq4vGTivz3zMMoyBeX7aax3BRNyRfK7Cmvvn6BJGX6ML2E4XG",
  "key22": "5Ywz9MEjVsuipVNa2Z9psXBkXM56gU5zi59uvADNfcZXnCS3X3XSKZKJhRW6jRMKmgiA9uKnrEV4HpojpCDfAkqa",
  "key23": "65sBXnyzYAXaLSGYMZ9hY1YNvos5jFecnjZpq1TyRQ5aWRJqjfPCy56U7Jw1Pjy1iBLBSuXwa4XqSXv6FvrZHzED",
  "key24": "3RzgD2m9eQtQhyymLXcNMrRTVgofbcV3Zk1sFzNBt4A9zEnnL2JorB26R4t34FNAnNva6foeTWTbAe3XFgaUS16S"
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
