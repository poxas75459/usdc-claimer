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
    "3PhK12sEQw1rQHUzd3nqQGnbTjegfBTE3zZitvapjeUqjNq7qtSrGRSNeGXZumjzKvk59CM3oLtUF3LTzL48dDaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMK7hqeCqUdNq6GBjDMstTfpCsh9GMvnNB4gw5rPmA7ARsChmf3owwSNmGbJycH4njm33MoWG2t364CvKh3CsTd",
  "key1": "U8pq5ag1eBqiJGn7CM29D3LUPadneFmAGSTZcMR2ZnZDrTmbzTmXgrwqwT3WaBvLdpjBx4cXhJktjds89VSxUVC",
  "key2": "2kds4FD3ASs9HgD6A7H7ByxEZiCkaYYR31KkakSmUvPDDXdoNV13QFmusVdDRY5JiiGYfSVLrkVRBWqQz71ojA5c",
  "key3": "2g1d2NQo6nifjFjfTtjif5Ld9SDh596CiogBaB4KYbZGHnegzhNjUUL1CCcZP2wNTp4os9avXsvN8d1pewWPGUnJ",
  "key4": "5E7BmMnKUjUx6CVF1QFrCUn8S5UfergPyZa5FZuGzkqGF9qtm8pQZG2vUshwtNUts9uQHK7nKWeDH5g9SgWQpCTd",
  "key5": "4DNMyJT9SZDx1udPB4RF96aqZg2vZ362rdkYFnSKoh381YwhecjxnW8uWVNeThQDS4tz86tWn8f5e3tBvZgppRrm",
  "key6": "HfQZiW4wyzrtWWMaSndCyDoBP28Hjk7bf1brzVRdXQq46P2NjPjrxJrViG8bi9YdMCtSjXkYBuLtzFkq4arsXPy",
  "key7": "o9yEFLeakZtrtSLADwoBrZ4FGtSpAqtnRxxhKxM2t9Gh9zxZQeXq3d3iZ5Zm7YGeLTbi8zZmpGmcb6SaLEAbXVc",
  "key8": "3ReLGBRdksa1ZE2Z2xUiPYhP73snPQzs8xmPmNTFGY8UwZuBL58XJGJrwNth7nJfww8sAoaBvKKi6DixTBxMDVA2",
  "key9": "4v4qvDDcQAybAnb6fbbJ7GGGtMi32MvCNpqxgnmsJufiuoMDdHGdAUqixYYntSuihR4pHD4FZat3zYqLrhTHMBFY",
  "key10": "4k1LcMyN5iZSQxTzT7WA28zZd6WpUM9j4Sn6iGAaWLo6qMZQ1Nkq2o1HjN8Qm3HqSGZ5NsYXLKHDwp2hL6M1qAVQ",
  "key11": "44mJxPcrrXF1Axy3WHwfj3tUMWycMT4faaJDZVq3qjrLk5DUXiwnwZazbgWQZjputdcfLEMhQdEEiMVqHsiYvRS5",
  "key12": "2mSjF4LmDRaVFbGi3FLSjdm4F7faEvrqHTEBEY68BzmfvWTk3mHqAHqyoSgjmHFZeXTZphHehBhs5Edsnk4fymSM",
  "key13": "2WaLb6mZbN5Pxsqh6uXDhj4BZ78QKdMr89icJt8SxtyJr25k6CuRG9x8BqhuEreLK6dNwJvSDG9hBgYz1sRVAT3a",
  "key14": "2rT9MWVxyz3yjEReB9DwSD8a27MX1eGJZVK3zHb6bmuqbDynjS87r2LmisnLJCQzqYjuKNzL1bn5FnEZ7fDyPbqr",
  "key15": "32wmF9g3TyvCS4xLaSLPwe5tp4J937WESRNbVrKXrZoU1YcJcGdUUzoQ3MLYjBKfJ5x4mAG1MvDzhpAfPvnspQus",
  "key16": "2BYRwngsJexjYH6VjZJ1MvncPzq2TesmnSckGdgKtD4hNpb3v7r3YaAiRbQbKiQsbHoYBU5C8Uc9B4stbzZVrmdR",
  "key17": "3PXYc9fLrnM5mmJuoFQY7WWF1K5TEPtn1eM4PBAD4Z6DoP49xTtfRGHDtng8JA6oTwkPeavpWCr6seSxwLBhacXs",
  "key18": "2ixeqyD6yHipQL6XDGAKVyE7CtzTXBtVdrq83ZX4fgVvgh1Jx6Wwgby8bm186bZrCnQZ7xxEY2Lf95vZPXzZqL6u",
  "key19": "2rgzrxAX4hyF1XhgmBnHJ9ntkThhkvz1hSD35sntheiKguLJET2UCSZCECsgkXB3qmPZdnQyTpvKYaXq1C9xYmBy",
  "key20": "51hwnYoTSbKYbdwhRG35C5UwezPcL14aVGPqZZjPJUkoWkLJ4VrwdTNqGumQdv6NwjpCxm4qHfgmfmX3rxWWXGfu",
  "key21": "3KtpooGoZ1JQdacR6wEqzSXSZei6Ee62CVuQoAe4YfR2gSKuugt1Ky3nuCxgZkiEQgjZNFcFACVf1duChrshs7nP",
  "key22": "3ZR3UyiP9ZUm9QMy2Sjnv7j5ypX1EbFwtEevDTqce7nnhGt4SyP8pq9aTggkcGbVevhhxgAJL4qQwgZzmw7YjAQB",
  "key23": "5M1ka5MjzEmMyoZoAh4sRyU6oWr9z8Gnv7M2HZY217o3RicveANs9RfNErNHEjzphbAVWfAb2A6eA1rhpkCqJc3q",
  "key24": "3n8yq1yK2VUrz1Nccu2ZBgTyb1b3RRbspKqGmbMXkGx2kDvYg1gZsvKkvTns82k859jwRbZDJVcbGYv88vWgCUMC",
  "key25": "2ioyPFVagLiAdGNFmAVMRaxJTbznZ2yUnCWBDe9AtUQTB3D6BBg4mX6ES5QMG2LJLsyEGqC55sCaMzb6e6Y3xAjo",
  "key26": "3hFp99GDbyzwd1cPvNPjDoT3QLpSz34o9fADQqQPgTKygeAA4LR6naV2kXiTrVRTdHo6cvXzhAQvB8MoSyec29Pv",
  "key27": "4fc3PUakfCNVQ8PxAtWLduZBs3cC8E33dMh4Kdu8abFuMtiZ2DanD1XVHbYrwGhvBLEdwbWkaNMy8DpQoAyxt62q",
  "key28": "5HFfCUFipbUU1TwtUjaZGMjTkw1HLQXco4sxa7o3tHnrVoW8DDeqKZCG2Z8X9ZDnuJNbvsavh7B3UbBcMnXEUbox",
  "key29": "3yEasXNNc6PAMi9tTfhpTGTrfvqzDPDxVCMgFgYaYMMaofWMSDcAPCjzwGbvQGaiJXbyga8h63yhDcxykSbPUCkQ",
  "key30": "6NfJxP2gSbX3BNyvD2y8RmENSx4CDsAEDPUftKxBnhdMLaSVNycbXse33qmPzcoLx1wg7af23widBpkRDcASBHH",
  "key31": "2tE7P1aq7F2beTnCjfLpoRMjhwYNwx26koeQC8x5jMW6QrQFiSa8AP2dALa2eFwSKdArapnJ2BduDRFxpTNYVKD",
  "key32": "2zpuVmPVPvGJ4jUjEgmwh96eZjmhH2wTU2c1e1DEnaZHnLU5QA4nPA7uHZvBNK5cAEajeTihLXdXTc58xTvFAbY1",
  "key33": "2NPENfXC9fTJaj1yLhtby2oaWU2Dxe2YAdXt8xZuLJ5BvqDSqUc4Fqas1qEoLiUM3L892R4MMVDGFTqXBggDZcPs",
  "key34": "2ajNJBbQjkytbm22oZMWPtEjnXdYiRYACNXTox4h8D684Qoa97Bdm2WCdpQ8QBKobY8RUdsCf2g4f4vNzjAJkaVf",
  "key35": "cRmPjvSNt8QZjCMq6itaMRq59sfKAW5VdEJNgQj1NRcU53yBnuqcTZFvbHR6a8RzSBjDfLLBQtWpRwUSmT4TmoF",
  "key36": "4C5H4WAr8mCTr1Jfq9ZoT6KqV6ufuqZg3qPXPXiXFCG6U4co2xPQp489WuEkWN9zNrivnLzcHhjJr5n8DsScqfCB",
  "key37": "4UAGvrzz8TaDhhwDMkizjroR359bw1275L7kRzakLmZPCq6uzkDapmMVTQuNz2kJMX3Vabefuayw9kcbp5iZvj3f",
  "key38": "2w841skTobZrstRNTkbf7iVjsWiFDZVhdMrAu9UKnEKbBwufkLup68dzmXV19JzazbnAP4T8uwxyNeNBqh9ssiNP"
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
