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
    "34HjJ9KWsNeT2AaEtpwDTSiPirxiCfvuL3RkMrgfTLWy8eYwQXBKw8aJxL4dBhQAa85tSmVr2orH2vJzEzSrTWNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVXxXu95Bc2gzqLyxU2Px3BDtu827KiVpFQjnyDeGRhuAmQSJdAjH4RWfBPYCyoNmCivDebx9s2BrKhU3txLByG",
  "key1": "2ve92McWzvxe6KSQJjjGLwdHWQKfWpEAfKU1NJW4aZHXiQGqJPfh1vt5shfwj74XCs9oNjRkvh8Me2oqUuXxqavT",
  "key2": "4vsmipSj62GStJsLadxKnxMLBHaYDzaTSrGydN6f2CnTHN6pDYYTZHziHjY5vkzV1DHujp2a56Svjh4bmUhhrCGH",
  "key3": "2sm6mAj4NUdv8e6Djhe8EK6uSdwQT3zThQRatjdQ4jyc2oKGaSsNieSVRvvzcgFibNtzMM9tqz8JLRjDbCBu543B",
  "key4": "3Ef9jUy9MoQBFeBxM5uJVDaQ3jJUDUTF1voBUw71VS14rjkRuePFUKYXAvqziNynjMF3wWaAqaVCCmXEj4gd5Bvj",
  "key5": "5V5btUuixBgHnGS4bDQ6Ub2h888fjVNfRp3RfhTffYLTJcpz65te21CNh13WK2gVJMCRU8QtT6a3wfvT6yd8WHJq",
  "key6": "gDscRF7pXT9QFjTP4bfsfoR1mrrA5S2bvvemXhBBVJNe17RdsxUAbMkmAvPidvobBQisRC5tDCdhJyz4hPzzKpu",
  "key7": "CRVWmjkZFq8mixj3NCWHzK7M3TrB8NVXNRjipUUCmNZDGyK37AW7yTaTGmHLCPJbK5BsCtRE6ACrhDQd8jKqRjX",
  "key8": "3jVbvM8UrZw6oGSrYypPRYpm1zvKz2uLEpB5Fv8QvmHSKGpDEwFtwBEWYQetjMzMDin1GJ5rvoNbbGUCSiJe4P6K",
  "key9": "56gS8TinJEheFb2M9uwLNqWuSz7GQ5CrYJiZjGYpF4HdsLBVaWyNr5koaNMohQzVbrM1zKsd9obTR5fTgAp2v9j1",
  "key10": "66Dkh6tXdXSYYqzRWsUTnJHqFCKTQXJvXug9gJBw2crBtjKenSiYcSbVEADjckngTrGWt5XpbAqe7DKBgPWY28ds",
  "key11": "4yc6V4vgau9y2hD2xHkk95o8r18yWp3RDbUUEpua48DRqbWqUtHJx9XhCuDb5DfpjWcnbbpZCZMi1pHq988B5F45",
  "key12": "2V6mghZBVtCnuNjqzcYNSvzJ4VucjhweDFNcHVVLwLQQBhoz1Lw37XtdwJ3d6jRLbCeqcvheSpWj43NdFd1L1jAX",
  "key13": "2ipokH53MsaFeU1EDKuJFAHnjCcA6rPf1Ur4LuB474nVPuCGsCHYn9E4tMWwiAqaatJrZCdy5A7uXAQwqXZAyvNb",
  "key14": "26qG9ic8ta4mokrrVXExz2reffFKsAB27ggBBjGtQn3aQ1LKTNr7J96Y9W32uEuJ154GhQHCqY37KCquo25FbbBQ",
  "key15": "BCH9owssfA2fvQn3xX4nZzUEXMVa4cMxpWThE51RqrQ3NCkPai1jbxokhRje4zcDebPAwKQ7nhnwrsYAhtXjfgK",
  "key16": "3JY65dE6xE1a4UesTGAJSvrktwXmLBLAJk2SoUGDiEYz7YrmTE4gABTj2rY1NQayDuCCQ8YWhYQL1oHaoHTshSBk",
  "key17": "sJekdZVRiw8taeKZTmKPpCVjF1GTc33fr1P552H8QJtAVqvLG7qAQ51rEJb6KTJiZeFC1gvMadRgdSrro8GN88k",
  "key18": "5hAY23e2p8LxPPtAiPN3Nq2yBsyqXvvRHMHUZxVUvTFQ1jthwnFp3H8WF2sFa3vLJWkjy8QXovjBZ9YjqPpVUTrY",
  "key19": "4jQyZAN9s9e17vnZK4b1PmRyAXbAhamj1QCci9feYbAqwxLnbc68eBCMmgt8b7nYuNRst8gn5ywRqNMBj9Bo1HhX",
  "key20": "4T5EzaM6ZdNs8Yx885iRa4qPnDbR6UiWV2BcymQtBVGztyZxDqknx6aZVwhttC82GACDAGvcpjJhK6F39o7AtnD",
  "key21": "2GE3y6x7K4SpoPW87Y23QgsNPJhT9ZBqxMFyuAMhZ4TfkZwGXQ9HnwuYhU3YZJBGZDsYVqN2EpBXesb1QEHn5BU",
  "key22": "5H7E5TLdwqbSRSWatJfhTTEkUXqxJLAEyvHTK1dBgmiz5AYB9c3LsJApHBoN1nLX9QKy3KLkBkz5qfSvVf9zZqGb",
  "key23": "2oWb3DrE7AAsGFajzo84CVSTebVVEBqGhpLG3Fh7BLufZQKaRsxQ1eWvDGSdUXUK3aQaxYWK4iSwNat8n95GCh5d",
  "key24": "4N26XnNNG4X8kuzuMvG763YcMkUpiupGrvU9zHRpd5aTqmdVD3goaHkdALiv1HaDXRayu5y8P26PQQ2cbpZHT3Wp",
  "key25": "2gUy5G9jbxfchgBCKaVF2U1nY8TswRscNJff1jqWuH39fokSSLPcD2LnzsTQ6upjgucu1vE9YrZPMnfuGJvmdaza",
  "key26": "4AuLpArQNgS6SxQk398WNJ6X2dehgpNoj72kgj7KoFaamCNKMqXoReSW9XsaHKJnrhZxTNUB6t765TEd6X4VGSHw",
  "key27": "59G535Vq6qixi5uY3eEqGKWMps6RVBaZeywGMicHvHZZjguUsvsmr2UrKgqUS7ALNxdmu4xXdqEzqsob1EePLV5V",
  "key28": "2wMad7VKxtpQzYdTA4b8EGXzn1TgC4jfeauBZ5v8VH3Zgx5DASakQFFV26apM56QHXJxkXKGp3hUx6nEfgeqZLZ8",
  "key29": "2CK9xceGQgemLbhrr9kcKLKVx1XoshnoQbxFDzLzmCRKXxKb1Xz3nR7U7ikvG38muxP2SUgi4KGsNTv92Tv8gun9",
  "key30": "3rqpzWXzQ4EBMWa4AornYuABrm7C8KVKD8qTqarYq86b1QfrUCtaZa23oUkvoEqieEpnMr1GZSSaPbNnzrQKzBZ",
  "key31": "5D6UhPQcSXNafkfiQAXb2u6CWVfnxqoNh5WL2LnWrSXS2rL1b4Cfmc474tqRKLUbv7tdKPJiFUviF2W5qgXMQ8oo",
  "key32": "3eV3u7gsLNAYRLbHeQEvPzFxXASYZLyyeeR1eZqCEV76Vxg3kvjpdQLHT2Te46o4UBetZW1eMXi8LLinQyguxXKr",
  "key33": "211s5HZMfdkcJn8vKmd8zrBQrWVWDSXukr2YP5s4ZzRZnhuJYxC5CuHp7XBfPRUbrtZXYHmemWkgYr8FYREraUHy"
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
