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
    "37kM6ykbHbfwv1JJnGBzzWY3G55kT7QVUSe8B2FLFDrGkKfATCjhegPbtg36fxEoztZBzrMuD6EeHVQoa4DFukDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2qJdCz7S3HsTAkZ3hB9vQ59X3N8AHq2k861rvbTceyNQHMPxV3C3L3FuWwwbkKtMcwNSMkQpuFgg6UQ9kM8EyL",
  "key1": "4P8TZSRhUD7zBsjdWFSc84euKhtd1NQwEcCofPL78RuUVvikLSaVtpEARbY3FMWv4iFsDH5pctBvHBgRyagksfYR",
  "key2": "rGpEWsMs3bP8ynvmaQRscamDWeeYxmPhqn5z8AcE75e3wkscC2XAax3GYo6R1TMV16Cwnub3oGT8ABMx7UuozuU",
  "key3": "5The6n9kj9D9UdHguhg5ZYkEDvDf5ZgareQpa4a9efJjLk4zYXveDBu82XJBwTNHogH4NDDsrXE5AL5wkAsPnYah",
  "key4": "2YabfWXKaF4QKh5C5NXyGYXREEnp4dqxDr3ctgtFgiHusUhrgrG9V13vzVtMbiJmcjkN4qUT23ExbqAf1zhhuMGQ",
  "key5": "48nb4bnkMGxYTScCsufszqos5RM77LBzWov2haaFv4CtV1PmRk7f6CCxkfcxe1ht9TA7zUqvbx48u2fhfELBnXpX",
  "key6": "4wz657PXC1UyxutZGXdFnAqXz2HNWvEQ3HK17QVRdg5voDABhyhD9J82VoQ24QCVhapMysCgaczFreZjKCU2KQWY",
  "key7": "uEaU2ym1x4BFF2HmS2exX1rUJfN17DKw9SkpREZAu6Hcn4oCiLhaRKRj2f3oo1KL3TR6UrB7FXUs4uWXUTsNUvb",
  "key8": "2NCDUN7GaiMUMtBcMbutR9fv8ZDdwkMYPVMwQgpBe2JE3iaykrkXBRNLjZ8vZjH28gNNDuyy6v334qj2CHB4bELr",
  "key9": "4L8bgjBbwqaVojpmqcTUY2qtE51yQ876NLC5xsRPLUqcWfZqvbZ1KbEw5yXGLXEBgH4SB6xPrPBQRS3S8FDU9Z99",
  "key10": "5JFaoiXX2FuhzU5uWP9BpUecusjENgYRs11TH5zC1KdU5P8UYKLsiFNc1QGvPa74tZ9swkTAB5NgZqEpwmmP5zPo",
  "key11": "fARCAW1XmzuKB62Em9n92XpUx4mDCdLyXzSDfH3RLaPhYrdrqNybGn17HtmoQ8dDYYLXpCux28NYMa7ZeXgMZgV",
  "key12": "N7uKgdtBmFFnULm1wVgjL2TKGRHYBXBKaxJtjTpRR3jZvFnMZo4r2JkspVjVtd478gEyA6RbXrNzAAV7W82AaLn",
  "key13": "4xZR71GXfvDPLcwsjY3dh2xfhPpiwbLmr3PpsXYXRj1FvLZkR8jsH2PDTPKaeuuFSghM8X5trQpjFVP5VsFxj1Me",
  "key14": "L2mVZUKcQkjJ8pUk6mf3MPxn3eG9JfjoCtnoTRLSeYGgpvtXRMtrNURS14EYqZSRkEniD6yinnvky6qeC6NcLvA",
  "key15": "3nrL1vrcomdVjeFpYWntasSSGdsbg2xHXtAyunfUNwb89VpsWmzt7W4faux5VohqkBgPx5eKFi3oRiBwCHstmiZZ",
  "key16": "cFCcQsJS9xxST8ojimPfSnn3AmMgJS1B4MpAAXECoYRXC716pgewuabx815fh1dAv8rVKx5fKEF5Gkc6xfUjsxK",
  "key17": "2EsoK81G5AKoDf9tq6uUvmF2t8J5nM29spAAyfxSfLVZHU3pxRRfNPWDUKTG77cbttijRbyN1b7XC5xSjnUxFTxd",
  "key18": "PZDLr1yzyK4t9c1CBsJ5NRNkb2ckGzC3j7MiHVjyGyrxMRxrQUH4QM3BSHBr6hbbvG165C3TvmHUGwKR4JReafr",
  "key19": "65wcQAGiMTggLoMsdHNdpyCqtBmTbFroMVZfwDEXPTdTqUfHZoJmMfmHWZvJJQ427dCQR8DuuJhu3wvxDAbH3cxR",
  "key20": "win6rpUkNeP5YoXk8tf3gYRfG1ZduooiL5w5JnzRmKZuiHPQTKPyu3CwjLm9HXN7AGTWj4V7wVfuPWuZxCESNaK",
  "key21": "4jj5JQjMK5m5Z7BQWj9iMZxEWRQZzDvBWVjhJm9GpPbSZGSKRpPGAibkdzvgqLfvszRgXEoTUsvefSPwXRASzbyS",
  "key22": "WVd1EyB29AkffCf5YiEvg3ayeuYXUmmMyKdKGC7Y5KNWeywmfYaagbPArAUjUGhpeFBfkN8h3AZq3buvH5LTaBz",
  "key23": "29SFzL3yPt97eHbNtRPYwHbee2zvXoPhAPacms7kzs3hGv4cMeqw5ozEE8fZ7kWDmVbewnHhXZC3gnjw1p9YCd4Q",
  "key24": "3dfU7o7atLEJV1zu1trkJ9v7Upx8FkoWmHk76xgSritx9Bfbqf264FrN1SHrUoDA7BZ5xZQedtGTSQHvZqcfQqwj",
  "key25": "XYjWiybyubxp6uqo591yiZnyq2vUqbnxtKFtT24TxKoPKx3jocZEaUMP48ahwF5wfQ7pqesMbN3pUCjritjwPox",
  "key26": "3MxynSiLDvgdWXcVRRQ2pzaor11V1t6gNuhjNMj3NcJnWGxQ2vcmU2Bkk2yJBKiCVw1ytmxFmktimwiUiQMX9R44",
  "key27": "6iLUwfi4aDSDB9CEttMgiavVmUyCEK4RhWszjDdrRWPE6fxoALxc8hLrQCNEbfQFZCWk37k9d22U9C29ypTbdLp"
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
