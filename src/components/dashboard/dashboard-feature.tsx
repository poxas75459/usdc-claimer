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
    "35v9W7EYHyeP9uKyEgMgZUvmhjQWgrzVvYEtHq8qEdaySLqvrvWKgMMsz8nCfTcgjwTznLn31QRQogBm9gZ6TR2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMB3QRrMSdxnrS1yWzkLDGuWw4HCzrf4nNtLAbkJFbUEgkMZJibsCgVL5baihm3fTtAXJQ94SpPw2uUggdFa1ve",
  "key1": "3s5NYjwHCMoKG6Aby4GNfyfg7r8YJDkifWejdMQWsjoroXPLMjkb7MPo51kzqsWCnYYLwhStuUMc8fhqK4KpPPjP",
  "key2": "5dcjjrLNJNGsF5VonGJxPcWwyh9WrDdieFsDdRxauwGKnSaLzAP6pVMcMWcZwbRrjR3RbkeyRRtZkrQkCfKMW8da",
  "key3": "2pDf5LLpRNddtHdUJTH8BXG9Seq1PjnG6GktiEPmbchaNB476eidfxMvHBXok7sxiTomrrxVeQHqy6XfpTmNjVSp",
  "key4": "2unyzyodMYWpbhGxGUGDPDUqwVr3rCKBTZ4pyRenAxbkafMQenTVYR7M1CCv8WdGXePyBxZfBwwaDq2BvDcsej4V",
  "key5": "ftaHDWkN893DuFmuVh6GYCZJfqtuprXD1qT76qndHpWTVqLWs5KPHBN5ErV7sF3MuRS6yTiRoUeJZpyk59hxTKM",
  "key6": "3WBduPrHqg2u2uwmGepmoJ1pxXcyY8GhR1fvbH3TQJKDLysYqUYPovyzk3QZ2TmBsVAB4andsYEgtQoHp9y2PC6d",
  "key7": "29NNLfDWF9U14NuxGPeVguX554Gc8Rcs24ryUnUToncSpbzfJkBz1r8RW54j6s6FkmjG17s99DjYDUvPrQicM5nn",
  "key8": "3qG2cD3bnVDwB28FQhDrovUFQkYZSHJmXmqU5uKNkvdftEjEUiZzvKqz3auEpjdmiSAsEGN4ZCewtF86tDQuZP1g",
  "key9": "Zp9XBouGizoNdT2bH8mLhbkDAT1iLkHHDht5dcGynPxNCJUS7mNQinhjMishGeBuQk7mhW85bsTHmsGiLm6a9pA",
  "key10": "4SrPZnCk5LCdjJj6LgzwH7QBz15jr6BFzJF3RBCPjNhhUFeLK5P3ezFK99YXgT5Lb3TNadThqpAnXf5JhD9KtERg",
  "key11": "42B7Wm51KkXrSzEg976JBAWBdL2CMU3MRZygRHa82kBS83URFT332xssVF7wU2DzsUwriWDGu1KfNmZNZyf1Spir",
  "key12": "4Zsqdz79hoS72mzhpeV9nKTYLf74TV3n2kDDfrnoDwE3hG5uZ1CarMVgh4Xbovnv3qgQaegb5FTiqokWnnusPSzT",
  "key13": "3yY8QE3erb1iZys3DPF69Q9Tv8o88sRamzwmeiKBp4KNY3kqBQ8Scmmdx7ziELbh7eBNF3JRVZUXftt9F5BAQP8M",
  "key14": "4rYyXgm1so3y9vdpTUE2tK8usKXyAtnTJk5HpjVy7Cu3szsK3oon4oaqEExD2muGvdZyPtodoKECaJY9DdxQir7u",
  "key15": "4MMbZENhk3mD7gUUR8H1cAgGjjhs7JQMBHPucf8VnDHGUbn3zEH2VLFSY1KRcKw4i1fXRitrArCYqz8rxErgJe7U",
  "key16": "4qABAvtjHkpTBqKNN7E8BGMNpmggg4LBRwnUQZDkKYvzCdpcdMxMosvbXsews7Hv1yeivKY9ozWK7QSjCABoaFc",
  "key17": "4ocbzUaD92QKDwY86b314AwQcY4jXy6j5oedtXuiMc543p5FBJ3BfYv89Z8oE9SGw7xmUCydoFd8VyYkc8C1cKDh",
  "key18": "5MzyP3oVC3mkaGd7jjCU6jaayE8Pd2mmA19QrwBUwKPbZME3WiA8jkwYnd1K2nuB7mEu4HKck2Zb9ArXsgGBwzsX",
  "key19": "5KbvpoNiyEeTi1eHJyqbRERE2QvFdKMhw5V2tU6RCrXWvKzUhGHjTcxqLjdhnrXyqVdMQDYD4aEhPVVhA1vPQh8z",
  "key20": "3U5wginsqGypm1BXj8wRJ5bDCFPaoHpVh18LjpZAV5Mem12SfGq9UFMjwfX34sXftvabfxJxX1T2zobQCWUYSCti",
  "key21": "CCNnTAYJT94gh91DJZK8yGPGh7iBnTCrM5GWk3eLXjckt7Gagdr7q1FKwnirM1KWnkbgPbwTJt5kCZxCd4eF73k",
  "key22": "4rRf6PVCtipmWPzenMd4niqVC2DQJwy9WpfyuxnDpJHTTXtKjej4XudSjJzuPqVTLCYEnbtheAf6Be6aba8TGmVE",
  "key23": "2y66mEfhWpD2qLPmebCVQ7LrTtKz2ewUdSHtzHZT7dLrUKxdEkEYgh94gjFciVuzWHjaAdJasmQ9nLjh4TrgDNex",
  "key24": "2CvZx8FrCFMSMmzPtutanjuFQ1a6xocftSPTK34Fs4zjfhmonTHMYSQ7pJhVwPyLai6USuA1ThbFud3L1Yasg9TJ"
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
