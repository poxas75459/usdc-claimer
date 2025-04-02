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
    "26izz7MRCc75URUNvYvdZ534X2DHDegxEaMMwuJHWAbn83QZYUtUfbtHpkrn4997dELpXuLKS1pVQf4PH28EQsK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24RPUMvBi9PcBuLhW9rpTMXDUPQujJB3UaHZ9RsPqjyKQG5BGwaj33t4aXDoHahSksMwr2iZ1XikFa9K4oz83ebh",
  "key1": "248jJ6dPnEJ76jbEfbBMSHta2ovLDTgAs3w96XjXitgeL6eeCnreYWdL5YYDD9YoCdLuRzdye7MFjE5HdKjpwa8b",
  "key2": "4QReAhgJre7P1NejGNUAK9xZpwWDqP3QA66cZb1XVrCr6kdDayhcbtntRNnULCugUiHBVGRkoCWTeU7Vjw1Me56t",
  "key3": "3pw5hpgKF5QrkkeoQX6QqBhBgpzo3CChPmdaoPSu9sqDNHsfwHPqQhaGDczaMEK6U7qrRN5TjezgFoe69tF5ayeM",
  "key4": "3cPfVfvXfCU7St8Fa6gioQZ5UoiGpoExoSFzhcK3LpR7vx7jL9uW6V6ycM7rFEDXqSPeRez6onjDPDypzZetsyhn",
  "key5": "4Z2DjYviqpCTbLox9r4wXQiwYemWujAAhdUtjkR4DNtHSVs3eA2W23wgGevR8NjRB4QHyuH516TfUUk5noEf96HH",
  "key6": "yTDj2NTorsKANrSf3AM6Rjvxj3F6ZxrLSw9WUdg9ywCua8wqRjbNu7E1AvXwHrVuJ4wcxAJR3EGnxmPgem2Gyeq",
  "key7": "57qEa2Zr5VsNRXSXPTEkwqiZzvdwif1vNHnpWXfwmypcK8UH3Knuccza4BXNArF78n5pd76Z2YaCqre4yy7UppvP",
  "key8": "3ienhGE4WJGc3Gdn8dSm9dEqg7FpHhqs8CJe1AENJmAAoVu5UsmhcftiXL2NvUFL2eaUmVZtJLWRJwvUZvxJAHvb",
  "key9": "5mdG2888QXrt89teFrKsRiAQC7G6c2WLyTC1q9NWy4AUD1gF7aWyBH964JHAvwtDyUPrXDvm2adcD6Y48pEV5pEe",
  "key10": "bhw1BWhs6vtg4aA2PXmXtbUX3w7t3bJCe5YZM9ZREyETYV8wThfXU8QUabx4qpHWBZeTySEnWLY8Qax5S8cLkoK",
  "key11": "46Kx3mV9i372RCeFEwc3TwkiMbLQVJdHibmZced4QvNAPeXxbJSBpv7NZM3b4FeaVvsBUbJ3c8gk1AxtJnrauqho",
  "key12": "5FRPFuWQXEwqw5thQjd4kA8mWKcHYg97aq6rtkyoZ5G4FcpJTmEReifjRrCXWQpBkT79EjpjJ7JDTKfZ6dEY9P41",
  "key13": "YAoNTT2JKFXZJjakWGRF3gQDWhquVBEZQSCp5Apjznxv766TnszwC53KS9CjkVByHa5Ve1ji2ouEZhb9RFCudvh",
  "key14": "2pwc59yATsj5e7Nz7PpqjzMMy3sWP5zWvu8W1c3DgmMrdZDj26n1SFdgNbHznqtzfsuoqXVMF1gfEbYDvXcB7v6w",
  "key15": "2WzPBM4Rc98rVs7P4mR3fsYr6zmmmARaA3oDGx9h8VytaqvG3m9hbJoBCYJCnrkW6MPCjDg4HyFpzqwd7NbtSS6L",
  "key16": "4W2UcJDipDg6eGEaAaPQvBtUfp7rXUfBCHBvkPbPoMX5rtyVuVPXfKpb5sVZRd7TULzUCPN9H8YC2boarKpgphT6",
  "key17": "2h1GuWESn1kooK2xDLZbkBo9aou5fw1T4Ck5LgAhukCTUo9SUN6VEGnEh3dop4D8z88fi1ifwbUc885NW9HhtKx1",
  "key18": "2fyVyrFV4gNvwi7rexQCbaAW3bkbBj1euWNFySkDYXzXy4jaAxj4wKwaQHTceVkRK4FNoAaXvhq72TJuCAEAhqYW",
  "key19": "2xixwi9YPVReLRruirS9Z3iq8svUyBcSifg7Hq8wJTXLWk3KANagNv6QqqnCXqxbuFnzozbU7XU74Lp3n12DjWiC",
  "key20": "3C2azkRDHx6cRUcxLaED1tpirSwVqQDGMQ34vghkCp7BFyCnZ9p7J1FLhiVL1pnGPWARMq4AMg9hnTJYpwXU7Sz6",
  "key21": "4HZA9ncDy2ZE86WsUqGrDay9tu8Jwny8zZMrfH34kVWNRuPi3TF7Dqw2HfgPCXWaRG91Eh5jjFW9HAwjLzSQdkRu",
  "key22": "2YKfGc4XxoXKweu7GjbvEt6iWM1o6n8ramn5GjWTgvj8SyqwaF7V47PzTbXm25nZfYUv57N4CJYtUnQpETSnrSuy",
  "key23": "57pag2hT12CewMZvXEs6agsUyauNUuPQVxzLXzTTv9xRNrPKGUukZEgM5GEiUhE2C7Qw5iw5gBHD7rUvSbZ56kaT",
  "key24": "5CZ8MuNz5ZCNXWHzc7j3UcDqFX22turYdC36vQEYBUFNjp9dd4ZCMAJeXWJJ9W2J2ZcxrPBavAG2kgvMRPxUJ1xb",
  "key25": "5ygZQ5FTiUSapDoSmK7bXDjsWqC4FA6rTYXFCRBAsPiYqbPbrPi9S91tgFx3qRJoQdww4CQba27jHtZ3LkfzJGTt",
  "key26": "24GMM9pFcxH547xyTXaCMEeSaV53vv5eFW1WNrmG39VGWYZ1R9n8coXjBwPYRbAufz3k6v4VGMWhpr8XcnHmULFB"
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
