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
    "2mxkNmz2sX34ZbDQUM6SZGHQpo3e4ksoQpUymM7yFwLcmu4XcVhDCnbsuPSKCfFvdYJt8ohhzUPKAW4s2sk7rgKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xoVjXPTzPwZuakRrQRRvnTPMv9LEwfEXAamzHyHDDntHH31o6kfqJmLZzDMuEPEs6wGYkQ4MXuNWQLf79jpZwQp",
  "key1": "3udgSAVxKmjkKF8hHTD2CwmGCNLHLf81szybgZNiPrJLdXoe8MKqYFfj8bw4inotw14nXeyXi6uAzrcQr3TXipMS",
  "key2": "3tVfMHQadU3yxcJGy7YYERugmSkh4GDVM7qg9QeZMH27xuXd2X5o9PS3pYohJn9owwQVmiUatiADP2pHrdg9VrCc",
  "key3": "3tzCVYHg53iwX2QSC1qpMocruE5NPeK5Fijgj1ZnwcLxuaKBwUDywpX81uhMo2dmPGu3ohjCjebZD6qq2i5PCoR6",
  "key4": "4C7EXWe4hhoQYnaSWoofW2NnQFf4NaR2YnEhdx29xwdQQHUpyhmmd81LorL2AV2ezvNYGVS8ZeTLSvgbsNhLMnDi",
  "key5": "KU9F6tXgpCc1LZNXttRStLZa7GYRxe2Tnxsq49E5e3wBbszTtz2Jq6XfDkp3Tj3okcbL6QznFHB4GrvPyq1BTYC",
  "key6": "2TPLftT6mngDZuvVaduNR5vEWHUStqM5ncptrkwkupyYo6QpHZjTosvEYnGWnMxG4MUrWMiRbP7gnYMM7P2cLTZC",
  "key7": "uQH77CC8HixftbxfzGY2mdS9SvFw8ntusmHwxSkeMr65o1NL3tFVxSQxRQdoJCpvoze36mRnKtLt4SdX1XcsiNG",
  "key8": "4TF3S3zgNKDFckRdLsnCRAfn2agihXt25DqgAwcUsfaE66QzgQBj7v8EEBEFanMmo9U45gSJnrWhCFoa7z2ZuTiX",
  "key9": "2Kec8nuiFqwPJqmpLeem3aYYU43fhKkaNzXAuSQSQbHg5CcVc7fTo26HZdkoSMaLjWMfy72zNnTtZTE6F3aorbtt",
  "key10": "msVRyGWx5WoDixbFyCPo6w8m4CmZWWMgYwWb7jNRWSVExwVC5gbbrLWQMesCkM4w553HiGpKqtHGF4Ac2NCJjEZ",
  "key11": "4p1gm2Rsk6m115fHiDgYFuGJRA5nxjZAQqrYGRsCych1rjVX5wpb4XXbNYRrM5nEbWQBz7DHjtPdPHYXpWVqEcvH",
  "key12": "2gcZ2r9mJ4LrAvX4EnupuftMHqBGrFH7Ms8acNFfiTphGamQPpuUkCFKWUvjdan2389W75k4KymgGshnNN2rwmtW",
  "key13": "2tGa6oFkDWk8BxtbiJYFZDopFZGk31AHzEjcavYxBM4Dc8AEFQrG2yEdUe34oqjdqJbgYJEKNd7r1rxrGyb2xnAi",
  "key14": "3fiuRJwmy1LA2sqGex5xYtzRJaF2Xn8mBpjEapZF7U71aLSti5cgkTCM16wggiKAgzcuEDbYV4tNqLJ1ZjPnUsEz",
  "key15": "2RVetHrBCpUmQMD5ifbGTgyST3ftpK4bKwSSiNJ4FabyfTgciEAfhB8kLqjdhBKtrR6c8MST4KrwNxktfbangEto",
  "key16": "29qiuVNMJq4cu2nfiuDBgTE3EPXNCzqm4EWFWpQuwcUJaap9sRCiF8G4XaxWgvztfwDY8Y1fDcSgVo1UkXgPdkPU",
  "key17": "4TP9nifhG6iE93T7KyrVWWhk7z21mSn3hpoJxkTHwmqakre4aG3RFtmyqoLQe6rSLSBkKFnKQ9FJ7jyCECLcUh6h",
  "key18": "LmPJUJciaT2xen4oRCD6Ua8RUkNBUzmfnZXtcjcozjvdLmWAUZoii2PV695Eg3ef4nHpiUFPiwbZ1GybwsK2Q1a",
  "key19": "5UG6mSbcLMTGiYTyaG65N5hXJQ4d3BoGorqXbvV75L53571e7FY3bjkpXWJPZMmnNJoZngUiQM1vGV7TPHBUZw1S",
  "key20": "4sR4iUjfafExtfQY8kecmgpnAuhaVqZfdJ8cAmKQ4H2nsZXXLpfJouJN3CY3cnb3KDVr2W85p93mFXtPhbmtFpDq",
  "key21": "2PJEdVmF9wuH4MBr56TEwyJQ3NnhGkesomSAz7r9PHAH2dYSAYEHgZai8EdfgHwwtU3QSnRExkpvjXDcc8ut5CJX",
  "key22": "5VC7ugPWYeVhf3DHU1mBLgdMTFXRGJdLoZrbG3ZBi5FZFEEUAAtUnMTJfr5aFXwQwbmPXdJWCt2dVqT7MBtV9QPd",
  "key23": "3c5zRDyCvjKy4difcQ9q3eZZNYLyVbeWqn5zFKKzGGyvzq6ucHQSsdnkHoe1FTU2XqjNDfXykrevvSUDGqe2veX1",
  "key24": "2AwEHPzd9MFZ8u1JtQ2LqciqimcCdQtzV3DXfrRvopGtArNJ9Vw2vFxn3e7cwU9bmEjzREsGuMyaqpShcsepaMfS",
  "key25": "4jHqNyuRFsi9ZKy4d8yqJ5xSChAMJDoAbsJ6pS51bKE6h1QSH9k8JjpWWoVkjMt8ShQncZRYS2HR46wtQbWkFZYX",
  "key26": "UH2TFX7K9wPAch3xtFuvh481JRDTacNHZZpEcb6jx67rrUXzjnkN3CBbD9fzaXqTpE3o8L3xjzJsQoaCMgmRrZS",
  "key27": "2Hq9KUpZg2dYVWmQBU15fBjJdvzcguqXCFABPSx5oRwuP8zpFcgwHdET7Pqn6xGLzw1sxosfbrghFsg4hUmffd6s",
  "key28": "28wvYkiU43Msicz5WJ5ki4aMJDDraoDt9ShuCB3DokvpUrxuhrbTY9zFwf6KW4ibVwLLz8VfAyt7m5gEfL6y82xQ",
  "key29": "637FH2UqeCVzugBwu2eenC5q15eK5mR6YohyZwTb4wEvcmAxiUJ9xQjeX1KZneGeAMMWTKJJ8GRjb53DPQEo5oPj",
  "key30": "53t21M6sYHiyoWPreJx8tAindTSWimeXdVyFNkAMzMsUsj8FQhAefajFhyG3VGjgECx3zy3fdY3TVW7AWc7T7kpv",
  "key31": "2FQNqjKSH7tLY8FQWKcH6fh5MEy5c1dEfcdDRxof43LoKCdLQDg3ACUkBj4hzn3WruVXdSgDqJSssVoeBusaTxAn",
  "key32": "vjqgXnEqtVsNWeyXsEsab2uCSiczBTAxjtbLpAscX5avb7Kwf5CjeUpfvLDBtjeF5twWTRMf7K7q9hfJgJb3fUr"
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
