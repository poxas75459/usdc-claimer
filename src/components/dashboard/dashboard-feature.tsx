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
    "4yxmiSVh3WmM22gMHe6qbUX3sKDsMU2fGewTgUNH24JoYVsZYR1mKCMq7D3boQw8x1dviaG4g7HJUeUZ4zSfZrjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52fS693w1rp3p2gTLvaZamPwhLuvXJ5Wqq27VHCoCUSshjXHoWfGa5bWBaBHgHRPMTvSQNWpsQ3bCr9GijpY6LX1",
  "key1": "MXrx5sJD4AmHCAHD2C9Lb9FHmcF3KNLZ9KQNfvveYrRCc2x2prPY5zBXZkpZsGTrDJP1KeZLNosTQnSEtw7cmoX",
  "key2": "5SgwPR8czvuuCmGwfD86eqvdFWzznJDQ9ZsPFbJsGeMFLcX5JhfHxC1wiA2WZj97hkwj3GVkht7hVST3nt6yufQ9",
  "key3": "36gP6yuraED6kBd7z1TyCDSagBgdTciGqzycxtDipvcLqTR4PgBi357DccnnPNbKxDeaULh2oGPsLjrGPHK8zK5m",
  "key4": "5urFJpP67er1P85vcu5f1vYCCFsoLPSkEY7tXtemdbWG2nGBorBfmoVdWmsNyv71CNKzgrQPotgSCRLQZLhnq9ag",
  "key5": "54jFihPLNbPuwGu3fRM2Y5tNijc544xPo8nahSRRe5mYmHbrGhTkTwZrtjxXbeCmB877BMrtVNPoMVa5LFSSJVj5",
  "key6": "22NPEstRcsrRNyewjDtzjY63gGohEYaBC9ajSCRXuZiXVvXT4Dvan48UECs5WVDeaRU7TkuxrCypWGhFSeTdzqiA",
  "key7": "aTQ6xCsu4cZ88bLAxKTz3c2xhTm2tiDd3LdpAyNWRBinhMx3iymuZrKNHgjpQ2nxQLHiiwhjxsnSo2nQ3QH3Zdi",
  "key8": "28nkBThCPjpSFq72zY4ZXZXsNn7yr832HeWRdufNC7GHtXfwhT7mXCToGPCAcsM4aSSr9YRZTJNDatt3zdEKeEVd",
  "key9": "3K361erxbVVnJC1Jx26VDYRuHfBHcP7YSDp51C4tTjYA3YNp6T1p1Xct5JBT4FEdtdd33HcBchcq3bVY7M8pnaHU",
  "key10": "4UDmkdDd5DvcnpQGyfnXZjXqkqWuHGLw34huw4hWPLqW9XgkWCVdoYj4uEuCeTV71saSzUqdxEt6msuU7Nza7bQZ",
  "key11": "4QrjG6DvuDFcS2RzTjP2LQvQqDvvUcY2JY6xnxCta4T2Z5wDVjHAE7pERRHg5Ma3vMwDv5AqFpHDAeM14z4xeLGB",
  "key12": "vDVKti5F1S3cFyuMZa8qcRCDKnjRUm9w4nSVgj3KcTTCX4RrSPfYKzugwcqHh8PVJ3dz6gQ1Aq3Ngu2ekzKpEdk",
  "key13": "21McSX7Qb1Wh6vJdBhvbXL7wiDXAR7QJqPc6YErF4BK5q8iHHhBWD7Sg6TYg3SaeVFqaPfqLuf81PNZZ41pPN5wM",
  "key14": "3p7U4RVXDACXUeG1ieebpwLZF3byghXxLaMqtUJTk7qDuZhzvWrsyqQunFaaH2JyVrrgK55fQw6PUX48E8E5PiXY",
  "key15": "3CBj3BsERosE6yHtXHvUKBxibdHDjhE62U4nfRSyKtQtm49VcLf8js2y43YxxtqEmJRwDfzxftCua968aa7MdGCF",
  "key16": "34A1fyebaDUPeCmoViRPpjL5vB4kfPudcTGPbJUAMozMDQA9gB4e4oHumURYKGfCM3q7V5kuLjbu7Rko5tavPA8a",
  "key17": "22UYB4xyTr8cbBUgzQpQGmjvmC4PRjA1XqFiEyh7kWtGLtyNSAFg882U6ALzmzE23CBDwEK59cRyxwPxjcniBXKG",
  "key18": "62ZWX22BCuyvNMQi4MisDgxyJ2dSfu6T5nKfPVGFSwFUmG9hguDBoKWHp5Hko4f9zprYofue6eMQhffmUoD4tiHH",
  "key19": "25Xhe4Xt25RFFTGeHSLJCt4esKpW9vMWmJ94Hi5ZHb1jSUmPhx1KzLq2DT8A4gqMAvfFMEXpHvxGAU6s5UfviMXt",
  "key20": "RZJ1X6EMyEemirgGtgAPAgFdgmvwR9BAZ8FVftRohnmdoGkw3bUWF4L4CZHp3UcWtE81ayiRj4aCf7q9uawv5t9",
  "key21": "ykySXdMDvjDfQHtFiVpGGJy97RpoYoCan5cCLyFj8x29JqzDpYvWi2syymXY1HrymuBDWA88giTkQQr774GQmvA",
  "key22": "2qwQQjgpM5fiNzZ9mqKPkVjkxZ1D4qZtQcTMHGzTZMbEtaCkntgxyCaFbQ2LRU1zcpQRtnBLg8dMj1ESbbSoECH3",
  "key23": "5RCaw1eNc4cGmo1KEge7xVZxcFrSwDDr91vhv1xaiYRwrp4k3pDZdUyHiD3GHABLMegNmhqGVGAcGjNetMS7oUEG",
  "key24": "4AmwULQAUkLWtJzAnefCyFk2o47bN6qEzHWZtgRdyrEB1Ez4VpvBAPSmqUMtpYvotBY35eGs65KNxmj9t3zAgcoC",
  "key25": "4x3Mq2naHrNoiHd27o2n7Hpf23rPqvaFRf7f8AjApSHNfytRg1vY6gLukZoyHsono22egZoignKUJh5By3TWR6Z2"
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
