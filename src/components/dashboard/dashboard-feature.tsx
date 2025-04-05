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
    "1FmnMqJKFiRY7ga6tQD5VEgKspA1nZbUCdKrH1W12nGa7rVMf8iD4upU7p3FiXHvvwBsAZmqrTeQ5pKKKFJeAH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EeNKPLU4wJ9oFgjRFZv6ZgcoayftXncM9QjmyhCqSZyKjpkZAMrwrYYmy1ts2AQz7WvBynzrvmpevnbi83ZZiyf",
  "key1": "2e8esYTUiNCyS47rGHoDFdoWLVnj6qevpp8LEv2yB16gdEH7z36aTJVQS61CE7rcRCceLHPV1HZJiSH2iawWFn4d",
  "key2": "4mr8CeSggH3exXLeSbtsLvhHYfzXE8x6WXNuRYS54cbyhaYgoPcTPigMRsKAEv2JrmkgJ7J1v1GbsKQzLJqEcEMr",
  "key3": "4FjhKjCmt8EtZjVF5Q7qAmg7pycSssZ4oYwEH8d3kf5LbmisSkwa9ifGvE7xFxvN5u12ii9dqaiHn3Fr8FUcsqUx",
  "key4": "3sGp2WTDE84KbtB5JMqCD1Foiz4PMw7pCEbnZhjuY3stySg3LXgg2rWupsq7ABDUWgbWU9Xesh1ghYER3Yrxk7Lq",
  "key5": "3798TYQAEqVbaGMwXtE6TRuNd3rUa64DVY8S5Vd646mRtENh8cUavHRrJooC1rrzjCVDw4ypdZheZiCUXWR2vbzD",
  "key6": "2yHhMJDgGuFMkpDZTnpAtZai7VqgopTmF6QneeJ5GNrVc7WAKYGYjMrYD4hb5xGendZf6JABDF9thqjgkMDsYjPj",
  "key7": "5wSUop5tsWtBrfsqHxf8kwoPoL7o6tQsJG6zDXyZo4uG2d6WMhy7Li1k9T599zHVSadniMNc1d1vufkUGJDkKYq8",
  "key8": "5yQ8U8YQTDjMe8NptFm8y2svxAmqZLdSXnLHpsCG8eDZqm1JURFMJdwbchzcBtqVS8XSUtM9upTwEVnQsVmuYthj",
  "key9": "3fB3aerR5AsBVrifZ1rzm4RTSTn3tsUZ1XHMvuYYH1DJqyCK6sWZcNVn2kWSEgtuj5cCcoyYnpJfrBDqmQ1gJn42",
  "key10": "CRkpCoBzQCs1bCrxMTyz9ETNhp1QNnr9chupUEyAjCdNHQ3H5fKuEpxHJDBhAHGx44uJ6t9r2rA3bQRCEZvsTH3",
  "key11": "4LPcbHpWtbxEoNJEsZuBqec4QjG8mFngEJ6ftk3GwnaJJ3uR5fk6CfCt7nmsPAeZVwVSzEUqUdLA6Py69LExaUSH",
  "key12": "5Ckohv5JoYiqtPCS1bcfFcvV29921YPQX6KTjaR9pTNdsncRFsAJeYR1oqMzehBrsekoYaehrTVEvWMSsX3tkmRS",
  "key13": "2V7GaL5a1KmamcLfL7Ger3i4TAZEmfrL6xAqJx7uvyAYLJ8yTapCX9n2KvMT7MxQa8v73aN6T8TGmLnPSX5825dj",
  "key14": "5rzaAN1mM3wJSBbeDLc7V1XaCh6y9s8ZWEd2fKCAbQrhP2LP9xhqfMfSWwPRRF1wgCAfYNEiJrPD89rcZjuPVpAb",
  "key15": "2Pem14YWnZ34K9D5L4vVrtaSieFsnE8FFFTeXFb61AEd1KgmWzA6SyAfJRpCRBsZs2xZVg5yaCVMTWHvLNH8FXmz",
  "key16": "5QZmx9YXCXfNyCefxj49XqB6iUSbUujQwARmN8SQYqo1YxiqJdhqjMw1YSR2pDGkrsi7VXVDd9SaVyXSMZr3faWh",
  "key17": "TA13kKhYvM4mGE2Trrqe4MfykuwgyNbsFxRGicLsKnefCRaitXZcQbv8p1erG9bKCFSzuF9qe3AgyHxAzdAdTtE",
  "key18": "55xdKoWPRoMWJeW6K8Nrx9qCTZnTQhBoqpoT6Wq7w4KDuLNbJa5bhwM46uqBEb4EhJk8R44E4j7sUt5Dd8GrCiYz",
  "key19": "61q2eYxwhHfnUZHSkMyPJJXLrfA8EPJi76qf7yvmA9Spy7EpS9DgS1erZPJCyzPAeUCEoUUefdMwLbPmNx8nzvrv",
  "key20": "5JHMhTH1S2vQLTS5md4htUmY2CDj2npouJMZxxM2tu6JWp1ph41LXZg3jDnSMBtbdyz6Gsb4CPU7v35kij1NZuo2",
  "key21": "4d36BRweVrSRPahZdxyCtoCW6p6SRy7GazsvSo6aFfagn17LBm651tweNE6moUCgpyux3okX5YY8FTgAv3VdypbW",
  "key22": "4zhwZMbQ6rAry89ayLinyN3d7Qhd6FB6i6cHaKFfVBbW2MKrekcAMwzMHw7iTPCMAkWhjtJtix8HsxfYDMZYqWMt",
  "key23": "2Qyo6nKjgLhhKgo8jhWBHsFmDqo2364qxhps6fh7kXoS5PMyGhtK4pS285oMyLSQ85YRX4CwVnWqBoJb9XsFpjWF",
  "key24": "415XnjMcBVaMCfv4BnQCFoSqRwzg4W2do6gJPj7YiAdwiunaJbgeoEkJe85uQBxNY5ep28Es9LQa7FyWEwX6Qw74",
  "key25": "4cnbTodxnWAKgrGrGHGjaNstu3FfDh8CsbnjW9SAkmMGei5fWyuCmunfU66EAehD3GfBH8S7MzuLnxu1GjGveQgW",
  "key26": "3SY6Dy8M2tDhbA6Kg7C3pvHutjZKsDR4fAiV8dmoVrnvuQbWMB8ucMmhPWMqBnXL7LXxSjELQw2nXBmNDNXFxqcD",
  "key27": "41Q1qEc7VfxLYTJExbNecb6xPv8XT8PpyboQUvvv8y3zD4vT3AVseWS67B9D4xhZip8UVBq6Ebd6mi85NAaMwcPh",
  "key28": "F96bYQzg8c3Swhypp11Pwtfpgeb5KkeQrRn7qEdvo8Pt1qNL7zDXA9KX9QBGsj5ZY8qcFmrKby1oc6Y2ksFT4sn",
  "key29": "cPicXus4YxgLEhVohVruG85ryjydKhCXsjBtQgPWrwpuG9SSzz4c8EA2Tm6WaU1nfH1oJLEYMuZAZBMXehPoR5D",
  "key30": "36iCq7JKTbKxoaytNqEvtHM8bZo77i4k81ii3JcFNqbWnNeWJ888rAZtCGZDptMa3g64z6R6eAT83XBmGJC9JBDE",
  "key31": "4PepamaAhriegYWGo2dtZzyjNF58EywwUUr2CESxxwwZPmhoGddJjPFMhd3K1Gfy3p2nWUrzftPnMxhvbxch8EpQ"
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
