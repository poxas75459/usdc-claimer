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
    "4wbtH8kt7BqMzDVQmJtZh28V9dNT6oCxcnLM9ghLdKsyB4CwmQV1dHLn2XWQstg6gdUbPy1RfJViJGH7daBNhBVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247mvRc4tjGie5PUUXRavWrUsVT1J5AHNVPgzzy3Eq64tg7EoCQqLyAniieKn79VuvjkYZb8rr4m62DfRti4xTgN",
  "key1": "3nzeqiZrqfdG7V3hKcB1sZ2ygafxoQbquhzh79dFyvwLxEC3tcAjP9mZWRKWLifCAE6LkuBENMEerfuXEG2D3eAQ",
  "key2": "3Yz5Hb9YPW2kfRXC3EmKTebkspomP7nVxYJfT9DmiognommftL8wM4QoWYjvKDvZa8KhQBC7qXs7KSYvpnh3v1LG",
  "key3": "kKwihpCNkAddBhkQHZZFWJK7z7ssjSF5Rh2HTgk9bFTDG2cKdY2fQN1Qg57847sX9iQff978cd9ue3eBFr9ae6e",
  "key4": "4Hz84gNMzrG8YudkijidYSoMTmr9cnhm9Y6gJTXQrSK14JYTqbZNBd845eL5vFt8gRiiiVvd6v1M18JvNWDLWvN1",
  "key5": "2yBmWFjj3prfra2K6cJD8HAo4vn8D3sG5qsuij6vXNEPG3VAaRwseG4i4qNsQwaxrnkwEudTsp93scNsYkbb6Hu7",
  "key6": "53oDybN35FhaCc5xnaAar3ydjPAJgZvzoQvQ8K4rFuxn5oDhVtx8JMcafW8QtTbSiEE6wwtKpPuvb2Ma7HrT76a7",
  "key7": "3LykxseLgKWb3SDQjH9Fg1rQmEcMLpYybT9kmgKGt4pWhQyaixx1yid8uBEpSUf8dNQxrZVK3Eug2WRu9BUVZSyp",
  "key8": "2czYd4bDzTYBH15nNMmU8ff2k89A3qj1hxZUHkGYT7h63jHim238r6WwCpjHh621mga8jAzBCTvWW8w3tJiWmfxL",
  "key9": "26ArUcSYd7A4oqzWQXNi1BZokuH57MNuNPP2J4GhVYQ3SPLeNjLEzm63Wq3Vhw4bqjwGVLZmytgVUURcunjfMHtf",
  "key10": "1xNtXpCmFrGhcD9MTQWwSzLtwhvWGMcF88ynjqbma2fNyh8azq3wg2bHCJo4dRqj3135YNqn6dRemxTX2GKWrxS",
  "key11": "5ZyGDUpnT7xF85YECPTHMfAL1ioTGNQersMgaoiZ2HZ7A4avHF1iT6rJC14ccqLcuNYA6vs2dhGKJ2xqZuNimxFm",
  "key12": "4TZamSuh1AdjLBwQa5ieFYLhSEUNsVSahtShjnzNF9xDjKYm2tK2GxZMCoopMEKE8hwDLnqHX8z38k4yGLpcJB2M",
  "key13": "37e6UqMVXaX9K8EMBjWrFZr1CaM9kbkNT6ZmqAYuqjej7VKik6GQGhBB3eD2rHzAThuNdY9ebAPRFWLhxCpAa8MK",
  "key14": "39St5mWpJKWSz4WCzhDLiXa1GqqRwmzCBAGexH2rssFAsBa2Yu7shjgFjfxGBgzKZakaQ174LTj7TS1HzL3b65EP",
  "key15": "4LVZC931gpx7dbTt6tuFKzNrte1CrnYCg8LCSPjDwNfD7PcPZRUfJaHDUTBq85a4STXFjwBoycW9EPmKWF2uduhy",
  "key16": "3EWHr6sT1mcNSHrwzrTtZFqNFZ1Kk7GFrJedNR2kK1sSTFJ8au1YJmszkmcQNijguBFn5681xPnbwM9kkQGL1Sqg",
  "key17": "2qCViG2qFYDhgMPP15LE86uBL6M4FoT3urPsDE2x43GNtPeoKNa9JJJC1aTZjPfsGw9y4yAsLShQTNYYqYNECGPj",
  "key18": "3JztmW2NoeAtNfEU5v8gctUZ3Xkau9Zpaf6MhAg1GciPMbH5uy7dEAPGrRnLpc1jbJwZzhT43m9gME5xkKk57KGm",
  "key19": "2RE6rM1piN4cFG9ie326ZCWscBktupFj61q2228rCegoKaYg8Q2r6dTafwv2kvdFzwGoE2uptPeeTt94DJNzFuBq",
  "key20": "2Wn4zof8bmMAND5nAmyJLoCqwbVEABfj9G5YrFLe1WoxYCWCk6MVdEaoqPgudVh655YezoEtZLuZPVnPY21une1U",
  "key21": "4bbsMLmca72t1dkh7dGVmAc6fN9LzaGaNfzsr4ZeFshpiqKWuqWcirU2ZVsEcHKSnniELzcEqrzm8Pa4wz75Wpze",
  "key22": "3djVoVpHbomi4QETfNDkSRSts666yRMDVAMEoHhmhSvEs2VHyaZskahGUpNoPfSbm5Bs1ABGacahXQTcfkHQnMbx",
  "key23": "3BkKXhwhzLVRniQmwtnaMBiBdcwJKn2c5tMsUSohAHoJ3XHD77rwQe3ZLQuuC1TsGuZrzD3SCpsMgPw3NsAntvM5",
  "key24": "2Y8U998dgQoF5MHS9h1e3cF1e3LKMQZo1ByG9TKQdYvTw6PXguRCZV4dRGBc39TdfmVrC17XreXip43pmRdTNeu3",
  "key25": "4KTpEDBV9sH2SVrZyKN3Pt13AGrKenTd5B8aQuo12WkWh3xq8jpDjhgE29VaJNCiUUSgHCHAPjH71MUY3QyuUgLW"
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
