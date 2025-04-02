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
    "vVr3U33Po4uSp9CGZffu3f78AGeuPxMPLAn22yqzJaQgVC92tmTQJSLGceDV1aDpaDREiy6pzTnadpZqPe5nAhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yy1VVQG5ehvzrt62phkNMZzDextEuHAEUTD9TqubiheDJnt2sYSnBkWBxsQur5usRwssosy2uAZqXZSJrYSFXQg",
  "key1": "4KAbxeBUuV9eKAx7CpEYF8DT3Tj4dLPmRji4Ncqr5U1HsYFSVG3bLdtXEjN7VsjfQP9voBdexburzDwiCjEgQPmK",
  "key2": "2puajzA1tEn7iT4e2dMoNRGjHwa6HgGz9JUqTkDQvLymYdxx5BLKnN5evHqwU5tVsLscjQ6MbVANjJ1GgjniQong",
  "key3": "598oHDBxzhPnTRyW6o8LES7kQPES4UdX2XnJJPYwKf7nmzCsRi1FyHojDuLKN6MsXSeroE1R9C9Mf9537GUkK67Q",
  "key4": "67j3ivY95nycUifKo4Zg5iHP2MxRfsSn3aHh9msxCzLkfJ62b3wrEdREnHc6nNJviihdvVS33L4V21QLT1DYZu5y",
  "key5": "2AxxyZd7S8AEGX4uBnAAatnwM2uC7AAfd7SrEmJR6DGGaugNmLMCfki9CYV63chGBXGUXr2j6tLqstUYLZ4ESJhH",
  "key6": "2BANMwEY8Piu98CBTHwBUepYV5YkdC4QfdjZgkVVFY2G7z6C8b6EFxy2iax7wsN1v19JVAjh5X6KdxwDqRBupvSA",
  "key7": "2LeV9CvwhJPmKQbaKSc7ituDC1NAaqT4oLp3jZKL6SyPxHrYxWCVn5tAMffTXeXWJTwrDJvZkRG3c2AxGA3rhFf6",
  "key8": "xxRmFpW6DKxpk2aeXLCNEmMEdmhkfYcyi4PPDHpV4ykzcaAwmpZzhhyE2o19BaM2nj6kF4ujUYrSauCCQHrmZAg",
  "key9": "4N1rrZNn1Se6wihXzeLMoGG82rBY8C11WjP9LfgNJB49MSBCScwtih1YAt6QtsGr6nUhYEcuDtKtnx1KJjyR1CtV",
  "key10": "XUzVyDsgcScQnqLrdQFvdzhgLKoGpvz1uZrS4Cj5c5HCAXqY8tDRUfdZXMc5co8uqvt2SCqG46uCBxaN69YnrCy",
  "key11": "5uw6r32UXirV5az8B28VV3dWJGyGjeH7zREdQTeAZBx81YA6pcwseJcok4DJ8cepKmc9peE7aLV36SrteG3m6iYZ",
  "key12": "5ov4aSbeuTZJn1matjCDNUooJ83PMasFXQMpoVWZcghnud5C4JrZj7ULNrEkujfAwjjd5H5fQmmhyfhEmbpELZdf",
  "key13": "oYuwGtSH6Qpiopc6NzLRefaf6Vg2WrJvdVy9RWTK6g4wbHhnURtoE5MjQVVRZAmXjjp3ZU6BNdVWb33uWVb72JK",
  "key14": "5d6Nm3gm7kfotXpsPhGe2K8LbUk4D49DyFdXbztFRAohB7uht1AAGU49PYcFFv1cTAfKqWWhEVZTS74wqFR37uqx",
  "key15": "4EwUKsTKSt5cLfzcQyPitgU1rabMorFGncURwNtz311Q72CisevJJgqKntV7Kwyg86uo3YBRyYAZCw3eQy6RKyVw",
  "key16": "2tU75EfUYngVybMPpvBqzYrMrDvqTy2mWp69zgiidibPFEbFkJfa4ymtNazSfW4VWKyAXNx4pc3RSvNr3CcTiy1z",
  "key17": "35gg68FoFphBAzRkY6fFTZdxTLJmC31KKHhT1VFQk9ujcgCSH4dXUe6NyUNtoyUesinF7oSj7TDm8aduE5xfhbbu",
  "key18": "3bRKGpHJxGUyRKu4iSw9PuqgJvShm9hBmhE4oA75gbXGF1gquSkUeFGfBJXF6dTrfBcxCxTYNqDRooKD2YgDqXVz",
  "key19": "2bLGZHM5mwUsMkU9WkWe4KezwsRPoJU9X9U3cHhqkoYCL9YzfAtfVv56yXV2Gc4GRW1QTTjFmmphVYvZpgUK7HYY",
  "key20": "QAVHLTRWT1W3rgC3cmMokAgN6WyGPXu1gn8FyhDQmhC4KLhGikkSdUK3QgYXRUqUFhQ62fpcX1DYQUKXCmoKrdv",
  "key21": "4NVWeghktxKsT2izvmLXBHwfbnCsXJhA8UwRHjkLHKjWA1xgVy2DqdoY4hSBxGcGkKn3zTMjwWea6XDCDYCdzVRF",
  "key22": "27sMUa3citapbnursYk9LQurYb1mk1nWyXT8ybcvXwEUdJ7yJWutKEWDtQs9PvBMJpjizebAgsbwhhJzbS8QXAEk",
  "key23": "35VLEKkAXZWUNE2SJNbkKYtpoDAa6io27cEAmxvU8j1TqZMGrXojb3WAUfMGk4YAhFGLdyjLDiy8HjagM25jtiTw",
  "key24": "58EVen7W8dAo94xKBV4PA44B4ZxMLiqwWhQDAYpL9ShRFNbVbjxmyMU2aWnLW1Ho1JeT6iah2J4uXWa4LZGoDFSw",
  "key25": "2SMrnACqxTgoUJk6SXJBduFe9hMC1NeJNzbNQRxYQjaVVeSJJd3PyqWaVTUAwRE3JkgKsCPtjPSYzm13kcVvrbYq",
  "key26": "5gVJNrC2kbQiXAjqGxLXVKBcFhNMqiMBggjyvdf6PonUz9Fd81VfoHm5HBix647yyrDXDavVnHos66xr98AeMN84",
  "key27": "ZTSFHk3X9Rhv23R85g8yQqn14TzjEPmrmjUroxhPJdm1MwkMmwMWrKc2tHQ21dJNLyyZKZWFvtUqWce1Y4WbTg1",
  "key28": "4rMHw5ZXqmSPtNMnrVL3ttV8iJTQKfDCEWshePkfRzxyZxThN3xGWKokxZUV93DeRnhL41hKJMogWibVDm9a6hLR"
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
