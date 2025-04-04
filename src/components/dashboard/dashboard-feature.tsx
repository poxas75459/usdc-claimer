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
    "7ZmBvwGAEQYqtVfPryyvcAwxyGkWKYHZqkF7k4A52n6KjdG1srJ48GEBeZmoMR1JA41hXVfRWEna2yy6BUCbSZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tK8GHGabL6Q7DW5XJa9XcAqB5Toqjrkt3Mv6UAadCUeR7hwzECh7Qc4ogBe4GbeJNrsRiv8fUoDTFPF98pWhNL9",
  "key1": "5jBr8TPogWcKFNVeMJRmwThF83kivsbuX23huwaeDw71vmn4pp5de3Xrpf4hyzBBuFrfpqTd1AYbwDxoeYyKn4Bv",
  "key2": "5KsZCWymjCk24FTENJ5ytVx6zWrrPZJmVyzWYKQKbRKESRv46LJgiJA2Y8HuXWPMboq18oy2CCmiJHAr94mGhAqv",
  "key3": "5jKfxsawy6Wg9AXfPec7Gtj9uxeHYFmpbcs9HiKF4DS1548jx111rv5KhaUVKftSjoBkrRhhaKmR8sbn3np6MJA4",
  "key4": "3qitrn1185LW8BPjhjJvaRnBHoxUZ8rGdFS5ujyvspigc14ekisAwLofkqq1EoQf44bzdRHturXs7MDWyU6byCMt",
  "key5": "4DxyxNzFQ2Xtzh2kDi636bfFZB7a95y2n1Ain1uecT6VfkM6BppLQ55F4ixnXKVp13bMjTikN77FPFDoBXUVCPFe",
  "key6": "5Jdv9xJ92yNUJf7DuAfRivvn1BLkQt4JWgqzHZqPSGhwmmp3xuqFk4KDfmNTTZ1rEYjDLvsvgYJBdK6uyZqELdkf",
  "key7": "2rmPVsKA45ghJ2bByvG6fGXrG7m6mLESZSuemAaWzywuXJqkozYpVrr1SCrQBzYLue2KwVBqags3DPEp6HzVVVvg",
  "key8": "31ZWZeDpBnCskwaj8XfDGjGoQ9FM3HLg84hDVpJcYSDoz8WZ6MgimSwD896vR9R1HV76CkMpCMvrMhwsemGjZT54",
  "key9": "DJCxg4kKuaTtRg9177yzBN1N5eQfp4oyMDqsbkdzbNRRfRYLNwMutmW8P5DJhz7SHE7wyCRPE9BbKtp2hsxuVZp",
  "key10": "5f7QFFFciGX9xz8pVwwVHjDSZrafqdNWX9mwNfkTcaeV8eYsrTgDLSkmA5LyUb9sX35vUmVV95eXf416uqfLF8yG",
  "key11": "56CePepypAtXgeHAG1kxCM7DZASerCoB8jjTiVYJNZCqxENZik23CdroZhCcGSRv2W4QJbWqn21AzR94Sp9qx8XL",
  "key12": "Heyx7N4kJ4afkraneTCaZVaS3NZJrRArL6eoP22pKwJQC7Ht5w5s7WeB9taKRQGQ7uYNapAuFZaiXWnTtjGjjpz",
  "key13": "57DV5b258wR7nrfq6W7HhcHBFy6quKgyeuQe3otpPAkDTgaKRbw3AKSbJYxekW2pECJcyLa69ttKivJpZ2BcSTxo",
  "key14": "5HJLgaed4QJ7o56bMGUqmYM1oimjPZCeM44621QcrUPV4xXZKbvGvAFMZnWrZ7NCN6tF4uu9eBxedmpCNEQP62Hb",
  "key15": "zSQcGawvMPSXJAZXuvd3H5xK5QzxTbLbBaPxvZ9EKcyokoXHGwpbhjs4zfuxRrCxV5YAeKJjG1ewNC3v9tpU6zf",
  "key16": "Q2khQ8CywUvR4xAMyJrAWd7c5PM1JDQWKoznwVmkXscakZWw7g9PJhpUzeytShUNBw56rHQtU31EzZpKbLAyV4Y",
  "key17": "5xazt3RJEGvepkRiAJCG6hZbzaJQgydTHp5PnUuGD2TUP7PBWAVEHMXu9fmaTepiKmLQTJj93sor6W6fcUkphfAs",
  "key18": "4zFWvEx1eLjqusbCzGq6eRPxKDVc9CRKdNcRi6oc2AF7z2VZip4JiagaFxHqWc26QbYce9bPokp2NqcwmkyfVVyM",
  "key19": "2tkwJX3ZPGatwUgFbU9RMUhWCnQPTmhh6S5K61NChNHDbETKLiiwyeZfs5x9LJ5QctWWLK19ZtamYcruPiNF8iKK",
  "key20": "5qabqqN5MVMhQqFpVH9REkzKgNVT2w6pPsLDoCcKaEN4SEksRrb7w9m73bHAuL7kCFRpUE5vi1tVdMAD3FSkQNHp",
  "key21": "5Qe3ptyi2qZ1d4NHvjmQuvgUhWYUgeaZ3BqsYzF8FrwFtfxQ4BDGazvVgLBbXujUT3xrkhfMgNoistpwGQCqAQYA",
  "key22": "4pe7CVeuRsHMm31LGmtJJ4Bd76JMy4ttULZSHBCJc6GrMHyJyykVGWzU7VVxactpUfi1Wx8aTKUAXvAwm34mavcQ",
  "key23": "3znsZSSHaqejV6TwksPZGvj6jecgVA2x1KvRQnGEedUwWUwv8RXA38dNqA4iEAg9k72Am9VHxkTXi3khKJF5U5iq",
  "key24": "4qhYQqK2J4D6JL7te65YsGZxfSyDArfStsWjyJxoo5JwsJsA7U7pdrsbW9cLAuTr6r9BBKwGnhiHNbZj3x8LX8Gc",
  "key25": "4zcrHWuhRUXkkQtQTSAi3viuEtQpUCU88rD9uPyqpzpnrC8J7WsgWGkU1QKNnxXYJvL36pLtHGuWZSdxxuy1UFF5",
  "key26": "2LobFxFdA6ZDd7M2fsvwG7zkpXfguZjr1BUrBWWikzqyvUGDKn9uGtjX8vVESt3m64NeUs11wNnn7rn3DNWVL5dN",
  "key27": "2JTZ9B2D2rApQGAYxXEQ4kdDz43jPjPoxQf9oebcirmzMrovETcMk7BzSRg3i4qTeEP4BFJzXNyZKjh16nMZmBRS",
  "key28": "3v4xgDrwjGku5X414mAMC8G9aPcvUC5AD1QdQkJY3dUWXBybF4mH7BGqgc65WLruU2HyjXsrT5QuGj7oNaBEd3mo",
  "key29": "yRtPyWMSbfVuhoU5mT2YkmmUi4ndBz72iw96eXESw2BpMKtJSB31otqsv4WfgWGhxzHyiVu5HYnvUwsfioCyiDf",
  "key30": "PWeeU47PKvBahtE4FCNoDbd2YRisTBfVn9hX9q8wQVmrMttSkSvRXkia7fCi3bzu6fWe3Pnnuj6vPhLWwi8F1ee",
  "key31": "bZZT9Mv59UUq6qj6x1WgMXm6tre5H8ppuYz51tYCRLca9wtEZYYwSNquBvWF1r9iBYo3q4XSrSjFQhvKWUbRQTA",
  "key32": "3eCBLJEVyJtjUDknJC8xphodbp52TWn3knjMJ5MUstxFGttcGsGcXbwoBjgwHz7B5VjEihhxS7TkegVpLtoj3rvJ"
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
