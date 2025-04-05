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
    "4R12wWMSBTw2jQ2x42Vy4Htd6dkTrN8jTTRrA65uq7xgPjjWXYdDSEeuFp9c7t8qeahZF62dyhk2MPtNMBh3HdE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4df8urjXWxDmebvcd93RAvcyy8DaZEPjekB49KTpuk8zBE7ueTxnDP8SWUqJGPgjYnzUjoMNEzDHE7ndmEMVcbG4",
  "key1": "2AxBJaaghznezyygr58oXrf7qFGB9w2WDG8M9poZttDWSBqDf5UktfqsKHGfpo2nbTquQYWFddD43vKGrxpsR5Fr",
  "key2": "2byesHn1YBskCVGjvjTssX2mBqezNUj24C5PcVGrm2fTFQMKSaj5Y6N4q8Av7x8Hd2R5gfHgGVRrf8u1H2es8rTb",
  "key3": "2mif87MpGp9RsHf6uqgiehcaovu14XGeDGqZRKurWszaTNV3FbZZPwwzeFyfDSFKpy14dapwqoZcPe6KXnHBVjnj",
  "key4": "335xf5uF49J74Q6q8kVNdyUT7FQvQBBgzkqsy5H2eDWDaAzkBJLrBC9DNtpfu5gkNKQ6Y57ZA7ovvrKadkLSLhja",
  "key5": "4MvTEnrgkyMYwHbUzw8CBLtPCTXtrdBas6vo3Vvi9Y4jyPbJGmQhacRZkg3MMd55Ci6B9V49HqVstq5XXGqc8fcL",
  "key6": "DvoprZn3creRvThNRkuFS1yRcN2xouY7F8hM4h8HdStrYk1sUUbkrjFk6sfhsfu3zpv2HWGfKdBb9rBHg8qAFu9",
  "key7": "3MvGJCyKGqabRS8uA5K5mD9NqLE3sjPLrSFh2WvW28kQbaiA7fw2DozYjsonp5a4ByPA8yz2fEYRzHQhBVBNnUeU",
  "key8": "5R7JDGX7PDDM24RtfCRumTStf1sNTdJ1KitmZPLeB5nRtbP9muGtoyhvHKJTvELrXhNmsn9NoMGVHvrDbsjhXhYR",
  "key9": "5gprw2uD99z4tgRKUhwP8P7VoanLfVCXx3uFiqUvohM3vAREfh6JxSQfHbQEb1uKWxTsg6sYcjaepHujXupTP82B",
  "key10": "iqibx1QWS5x2uGhUAcmbK3zhbhNdJ5uQfHKrZxZnWvmLNsg6ZtWQTiLbxQvP4PeX8jggatsYeDFGbcWpVQNS8wL",
  "key11": "3ziR9XyZ19to7UgJoJL9TKQ4FYgdL1sjMy4Qbs3TdsAd8zxJcJvhBSnK6vuj1bdFo6fD7VPvaFcmLoVMX4VRzLRn",
  "key12": "2dBe6EHa6VuMmH2pSFfkHcFRXYZU7mULq5GctePUJe4MC8q3YfJdeadVVM9Ad7czb6TAvYD98Ww4957gqfQJNxc3",
  "key13": "c7asDYrM9oHKgCXREFaheT8XCqhL8YNSNUB9XD4ceGCtiUP1vWctJTHHLd12XvnqCk8TqJDLaR33Fgnej11v2hT",
  "key14": "39WcKdzkumBnPQGc9Bs15kk9FgxzbSAb45GfqCrbzGZVCXZ8gxhwin9nFE1vynXAjtVUUuX8AJsCL4vjT71xAB4y",
  "key15": "3yGLtdV6tro3bLdfDwhtg7eA2UPNMvkMGjjixMqo2ozFrHrhZheqkntk39g7Z7a4BREMTWZvBPXH6295RnTJCyzf",
  "key16": "4ih3DYnH7p9JwuLLefCv53JjKqxcR3AuEPo7L2qWjF5BZ5jYxtwdcg9iEx4FiomTWCBRjStdSp21Q5mCydjGFaJU",
  "key17": "34jmBNggXmJD1yFsje6tdNeMtPuhBFJdjwxumCtZJY2HkHqdKs1L3qYatdCsvJN6BBsQS2Yznrd6tvKch5g5QvYG",
  "key18": "2Km23m9vUFZwrL5pgkyaQKYXNFwn1mqtK4Jr84AsX96HkgUSoHyHW6fkGAnZc8Gco6TbiDaBoL3Xd8g8TDuBopjN",
  "key19": "2iwqNLtS8kREi8CSqpakvMWRQ8KHEN19MLs7gbMBRPBeWUJHQs54MCpAwENqXPAopFjoFbsyxNzGDqCXNwKygP6q",
  "key20": "5CdsKoXHpQxGioCEH7N5kLZajtqbJ9Mb3BRNDCkVgMp11pASBMigSSG4ScnkDqkBbh1PhTnnZdks5BDHUDKyReJU",
  "key21": "G2bfk8SbPAnAxuLBM7CGktsWWx3rrGWByACoX9qDUqPPsbHJiEnKisEzgAjC64Db5JUQ2Cez487APmxvJrAV8ow",
  "key22": "Pnx6mrYq5HWnrod2fSuX37xeb1ae3ewLeeKoa8SmAvD3Y9kuqBpuVatMn3ocjQMMA7vHV8KA1Mgzv7mtGEHNwyb",
  "key23": "wrzFFGmyVtcHtAUX67Qxo5KBaX7VzNYmjnC9aCdAmXkUUne8ftUGvKw4j2KRWWqjPi8GHj419XCbDEegLqWAVbE",
  "key24": "48UfWv5hpTfqKKn4baHpBSdN68f881Zwjs9VSkbVYWkLiF7ELc6WoH2PPWsHvvMgZj9DpfHf1C9jjNswDDaEfpNb"
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
