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
    "23a9TucE4ZrccuG5Fa7MbbgL1fgjyyKNz9WTH3pj7Rj5pnDrYvAHh7BT3WUP1tnZFA75SFpuSgyUbPqva2rfEBo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqzym9zPXGiKD12E6WiXZUbkpEATEJ82T6JwDLQ6VwrpCc4mEcyoxFJ1DtEc2SfjFxY8jX75Dd3odxMRSMCpEai",
  "key1": "28Vkyf4VLexkoXbwfYGExCxjhmnNyG6HAzef2mRds2L37JfpC2ifyXEE5FLAA3pR1VurCLxhBy1cucdmuCkkewzq",
  "key2": "4E2egdEJYsmjmhmA9EZY67icTPDNsyvVVtgpKy3Y7uoVhUwfe1yMiKxadgYjMeCXfQ244yVCzuiSXLZ2K9L2L1US",
  "key3": "a8D4w7AJs6rYsMpdiJbmJd3fzdHkxNaXGzfAFbR7pz8tXL1pkBQfGHuiHcvfWufDcHmwvL2qv41m7ZQ2QVvANCU",
  "key4": "4uEvhyPvZDf94FzF8gGWLTsVhRNG6FL68ia89hQuaHEpMuipyn4mV1VkumsR16QFh2rsAX4bfTaPDrg863y2Lnbn",
  "key5": "3t1G5ZDPWuBk2XLm7L9HC3AzqCvGAdtuJL6Z15Sdckj6br5bV2otjr3Mdc73v3t8MKcTGGtgZX81GzvX4skc2yWC",
  "key6": "3r23MeKr3Ps1K5rdJWt9jcsGUMSysVcs94SwUVZHW7vMGhBG1PZXzszx5gjfghs2TGDzTQ1B788WBjrM29qHRaEN",
  "key7": "2YK4m9f1nGXceEnBcwGWqsyDEyDDnGEqWGjd52drJnU2RRnYm2i6KUKFPpYVZE5DrvDUamuf94TcvUbAFGi62yTz",
  "key8": "3ocvKi4pRiwViYntJNcb2bkHbS5znTFi9mSRMhmpTMYetgQr72K6aW1mbJYSaHPFvo5CRb3epJG1bXRXCJXnCw8N",
  "key9": "ZivnWfn1anCfHcZjSGim44mWxwcngNtAD4jWh6A3DMGTHcSKJ2HMcvptbhk3FxB3rHNMbBzz7cK5PxZyyHuXiVB",
  "key10": "36uWWpvnQUkuT1kZTef5ie5UvmCv11mHKug5GcPf7nradFfNC6aQhT9XMFsXsFPagXwhzvH1wUBYyH2zbUpFrUdt",
  "key11": "5X8kA2sCK6M7DpADY4zeDNan1paWAUVRbz2gWzLKEgAFDPYUPcqFxU556nhcuuKAcNFNf15EoEEQXrQgZT843wFo",
  "key12": "3TE8uL66BDwmXh8UbgzgG4iPt43roJ63N7xbZC98nuuXnHBiRBMe6E2VyaV7nY9aXXorswDUb1EaCAfnEf8cRiVL",
  "key13": "dF1bHMGM5T71boPwmRV2ggWdmuebRVdgzzFCUKgx5mJDbckcrpBwCKv4HGZaQJQuDsWVBbjrQMCJQbLguUsHtk6",
  "key14": "thuoB9KNkusnGwJAi4deNXGhBLqQNnJkxqhpzXfwcNXv56vyGpAAMgJPBEHrvvRLSdh2cVBXjfxAyNtGQNTyKXb",
  "key15": "4zSXD98Qm3nnnUK4w6p4bKuc2YFTUwxpeRYk1iWqxPXQwUyxpbmHJcDLCLwGbeZBkFf8Cc8xP6dQPfrBrNCJK71a",
  "key16": "3YZT84nqtEeA8jWszekeqK2hhQGXxRAnQwViFR2ssc9LtCZdhiRVFr6xcj32p17KqMnkaUaEREnvcpvq4wDVdDei",
  "key17": "2q5jaxfikcJgoYYSyhtiJtxBsLRKYz444iBhVLXJJ96sRnU4uuByThaXhdT8MvT8Jejq9W1BjGvaKN4D5eUP1bLG",
  "key18": "gMnLevGxUsCNKtS9ue6U3FKtZ1ypZ2NgkXBNVLkwCN2wCDWhU1XCfz8GQ8eT5UgBAMAk74BZrkNeqNM8AH7VLMY",
  "key19": "5VGMpuM8oi3yQcCw1Pnr3Gxm28o6DqtbjmpR7QRPCL85wRnpWpSD9xvPxkyncjRbsns92oji6xjHAC13eutFVoMm",
  "key20": "2qZppJ7b1JmBK3NCcoAqHKyG7hYt5F7M2iNBxt8jWz74gcjQLK753sgNzTjk7HLCYXJ4oUDtWdWH7BSRHiwDZQLx",
  "key21": "42vfM6dXQLSVFinLtjaGibwJRm7P6r3TPr2sURVt7JL5Xc9UpY3eF9jh3DXh481JtzB91ofDRB7pKXYU4Mo2kCLQ",
  "key22": "129TCzy7163fkQ3Dym54RPMVYSCZGGMzSoFL925i2Y2a3khi9RKf3pVRaP3k61YSbFwKxev9bM32g19KdAt8petn",
  "key23": "2Rt5pechHWB3HfPHpeZXsfuRdoayR2RrUFLfNsUGAMQwqFZe5qCu5jGwmuNLApUCdFNT3PabvP1bJyzYX95Z1W3K",
  "key24": "8s3VHg5ZQLBnsez2CE2ur71DYPcqqLoqMLwcx67UV3SN8tBSMT6FHXhnvVZM4TCnVkVNCDqMF3k4w6Q5w27MAnh",
  "key25": "3WJzji6cQHs3azJCtCRLTZ6cSSiEFSqxK8mDBs4anfJYv1rhnzqKWTEEz3eTTzYN4EMteU9Am7FC4hMs1dV9pdoB"
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
