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
    "3aasY4QEUdUQBrYsgpjyRpAgn9u7qJqR4egr4aoTBauorzKibKiL33ya7hrS7S8BSoBgDD86vzY4DTaeMshYypSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWRxkp12wcF3meqKUiJnS8bYkVnW2WMqzPWdx9AhY2MSwsMDJa8u5tajt4jyeWVJnbohtytqL9RagqKfUus5GjS",
  "key1": "2wR2W6GaXTNYJBTdpj6F7sZVNZQtQy5XbAsuTb7xopCf1czQiFjhC5FqUvzcG1TadZDPMCtCnC2w37i3Rre2buWH",
  "key2": "kGVphrbZ5Py5A2sYWWCEtNeS48LEtQ8fxgUWhjKJccJoeRmHJFrPBaAbgzidF5akp8gXimr3tGZnNdLAn92d5Wu",
  "key3": "4JLNmtYApqtJkN2nQcZEJr39XvL9bLhThMtY5bPZ7rsf7bWMszxbfZN3Do1V4ofmeB68Wtrn3NHrVdib72Mm1No9",
  "key4": "3tCUGGxhGJ84WtKPFQiMRg9tnFTa5BhUs2q9MnS4PaBEHtCsUQ5mipoqGcmkNXw9ZrAWCtLvtmKbsqyzwVxc1hQQ",
  "key5": "3mYu8Z3g7gvSZNqo5enFLDdbrHZGMoWJDdmcDZLFN6iAfAwz5FSCaCqEi5PjmqD1XiSn8biZSyf5gKhb2mtmXPLj",
  "key6": "54UhKdABuKBQo8DxvHCuWqGueGSU7nLhhQnjoDHHwSuQ3MCwfGWy7kwX7S96EDHovoWqj5z3D4c4P5hMZGgSfF4V",
  "key7": "3b5vscG8iTL9ZGdRk5if3AAb1U8dv2MPCfrvbgvTWMoDxXUhWrRNCT2gcFs7SZsTmu74g1FUk5zKicRAvhUTE6BQ",
  "key8": "4sr7xDsLTBeKA7E5Li9zy18rr9fQDCJcK6fRMSU35dj7CmEfbgh8eDmyyc6qY3dxsCGhFCY5DbRzykXtu88PwHLA",
  "key9": "2vedgv3G6KGVwKH93Lubg6BVEgdApr3pGAkiGHHhWvBCdWab5Rxwn5rh7xL1R4Dy95FyAa5G7NQRVFhMAFFqzAcg",
  "key10": "61QSK4dbsoKLwhwNKdsTdonGvrVrk7QNvHDyxzpcoK7JSX2NRjcAvBgHUxh7HTH6H8GQn2rdGM578kxRsxoKxJgx",
  "key11": "38ryVfWSn4UPVek3Azv3YFivL5a163ZahLPqAA3RfvqwPzsA4U4fymuPi5U4CuL8q7YMfs9U95NM4EZoPDFYY9wR",
  "key12": "2qoRxRtbiWnM3eQg5JoDgmjmv9Njbk8HNyaKNkPjo7dvfAr75JCmtenKAB5vbbX6bSttEaYRV7MNasCoJonwmJPw",
  "key13": "3Wkr67qtxaRz5f69V7TdPQxqBuscbibpscUc9Ciya67b75HWuEbp8SkvgzjTSCSEvQ7xigDenPgRafUnth7ANzRj",
  "key14": "3jGSFS3TJXjtQLwR5qPgmc4pTBfqEMPgfFCixqTfP4XnpibmTNM42b31kHvcmMiwYQDg9GnVBbHfoRNSwzqAfq7v",
  "key15": "2kfKvqpD3rYKWJjtHQ2n96sLqSpBrvKHxERYSHKjWUQPAtQgFEPyGWVX2RExuY5ddDm4AeZzgVhCjwpgfBtoDmnm",
  "key16": "5HSUAKRTFb4biMvE2b6GdZhEAS72h8JfdTE2QJQNYCpmo25HLyjQmnQPx8npeQSDDmHw38vJ3AzJffzbyGGYgtTX",
  "key17": "44Hphk6pNENwZr2KUYZQ4hvVbwuPhJDMxBZKydMh1yMg3n7DwwHnHkL7Sixi3PM6r37PyAVnYwwC7NJ2RqdDgsmk",
  "key18": "5GC5BSgDyaiHCr82vkE3NvDMrXbsgda8257vHFkyV6zqA8yXfEFXqrQ6cYXe5mbALLqB6e9QYumhtAUeXH2UWKrC",
  "key19": "BYM6skCVNLxUWkiZ98WmcGeybe1f7RdJxRx4Wy6DstcwibsZ593vcmaJeLnxwL9Bmfnphr4YzJWNnbpQpDi5HB5",
  "key20": "2nQFVY1zUAqd5C8BrzwsgVQUmAiSAJ9vysH7E3wK2uWA1Trf4XUFrAcrMjT8M91EcRuEdDFfvhmMwcEfkoyVkpCd",
  "key21": "wCZfHCbV7nyFnSPuLnHbQXc8h8j8j2pqRAEUEGDmmqUiJYruLjCPtHsisCJFoqZzV5CRJuhYgCa72PZ6VPEy2AT",
  "key22": "5NwEA65Mq9ncuzu6Yt1p4RkmBhD4yn8ZFASJvvdAZ3pjdx8U42LD4e6Hgc2fp11ZGYBmcchL1yuyaR3JcnxrHx7r",
  "key23": "26ZPw45fFsFSER6rHFLxTh8w58pAccW9ngYBeMqqFwjaAdGqY9GaJiFQk3G18E7W9LvYNS8BLuAMoXffdMX8gx3b",
  "key24": "2FGv6Vz6Fg7enN6k5Zk99wgXRX5dry8XPmPoHX8e6Gi7uT9nSdEKygN8CXg8SJhfm2w14XDnnPKd7qZtZJUUoJBm",
  "key25": "45gHse2K4j6HMw9nHzChHZbxVfepz8pG3tJxwBrSPvwGDhidEB3Tto7mY1FEExxTWf2QrUce27hqJpfvUCQ3eipN",
  "key26": "5dTK3jtURhrtPwRV1nvU3UXpoD3pHR5XATzqsvrwoWYrfPGP3EYJGu7nod17H3PHGebw5qr2QrxQX3NVa1RTwtL",
  "key27": "3FLgrN9n3pE9ixUEC3dsxarVDFoXyVxMfBmWVjPZCYWMQdh6WEEek8iYuEtQzPWW11pbJyapJThFeGSXwmsJ4LHb",
  "key28": "2HmVwxgtFNdX5QvX9DdFucqCRzx37VeoYPXkE2hxS45xx6HzVL1csjRiTmDNXzn6GxJWYAhu6Y7qNY5Jy7o5gyBq",
  "key29": "4psAJoye3tXZJ2PjEfCWzF9rqEe5kwyyooZik8kg52khRtzcPXEwhKU7MqkNiothrRh2g8KeFTcxwW1pHhceSqkW",
  "key30": "4sqaqWYKuJqqUgWXKxHcFat6m14LJhcYfMEytNhhapBMA1eK3DKewNWdYrx5TVJ3otDeWgzVZMi7Lvr2fviKA4zK",
  "key31": "ND7qz3PSod3YjnS1HuK9iMXz1Nj2SWD6Vqmo7G6oEK1DMRTfo5PABJALACGNkyUMVurK4oocDEbTD2LJCDUGXDN",
  "key32": "2sJwLvbyNcUwLyjsxHGybKETZnQtQhkYsAgTXoSHQ9kG35wqZ9xgSDHxKfNgiLMcSEfqFFMrE7UE3vFq7nLxu9wy",
  "key33": "4u3XXKo7ZdRqNWDpXvsiWCYrupsEexCmta7iqs6zqtcbfh4yV5UtWFBYeQMkEqi4YecW1nKvTb7C6ES2UGxCKkwx",
  "key34": "ytCQMNUMtu1u5k1YkPvTHyHEkdMTqVa9NGccyMRSqyJQFAerTvmYjj7uCuWAFWWQ5mHWDhfE8AiPDKNPw18DNK1",
  "key35": "2zZxgLhbujn76PU7S819SYTFimqrRurERhVsNSuYs1AkxnLXw3unPFRH5HotuqVyB36ZXDf4nHsLYCjdrXrNVuek",
  "key36": "3f3rw1L18UVtoGDPecuArdtwh1i9JKHAveUJ13VSh6rW2tDKMS12PSUd78oh5x6iEi8EwpSebJ1aCxEMDoSsuUar",
  "key37": "3YcWHgKweA14C9fqu3oCVxSuuztPTJriu5QGPFzFUUbUpzNMFbgxxzq5YEY5n1JTy3G8z2hTrskpbBwtDGB9RV2r"
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
