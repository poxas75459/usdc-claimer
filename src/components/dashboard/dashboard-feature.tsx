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
    "3d9XU8LkdusQSQAmhrGvR5ravRYEsaiPe8CNoch3pgxTVtreY3okYEmspmPJFEK8tSFpZLfJQiFDViW1Msv8PzLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvaWKkqyM2D8ejrZZbydwVNqAcgz9FGkefNDfM6bGBD3aVocQSnnamPiyxaKteKd463Zcq66QRXwpQEqv2kGiRd",
  "key1": "5MWkr8kiNrESX22PcJQAhFJ8vqRSBpbQF6Xq9qQXdseV1HJGzo1jcii19VfWn5P3GCMVwD6K8TLMUzE8yaYi1Jje",
  "key2": "49P4EKcQboaXZaqTBaDyrAxaCS8Tkstmk4DeDjx6ijowid9uRkj7KfxaD8migdCgVZXvJor3Ad2AfbcuUeSwgume",
  "key3": "653hmvzuxpNUXwumBiyRXYXj5b6SKnLRQ69kGyneDYB23yqA7gWhbT2btEcafgDYRTGjK2eyrBz2a1oqwJuwTTNY",
  "key4": "2W1Ujc1mHuuNnmwx987URSNaiomdK2dPVS3Z9Edf5K3VUsUVDAVm3tw1UsfKAb6LjGWbGYJJRbCyik4RW68e2nZm",
  "key5": "26yAhAm5iTyfU8i51DKBJNZn9pc1vbrnTAa9wuPzGGRtzzy2ComoFUZDYPGhWNccpgHGuwoC5ZvuQbs1sF1SsFAe",
  "key6": "8XV3o8bhyjSJiPSpxQTn1cCwQR1EokZEZThQ5g86yXVqFtZJbiPD58W8oMwyjaoHv3tHCprzPgkc9iPCunvyWG4",
  "key7": "4qspxpHaTCVkT1BHKzJCmcYdbo2PQvVPTKSsmTVW65QVPFvhxi7K97K4csoZdc6cU7Dv9RZXLF4kBacgdshs1sC8",
  "key8": "25YS1bkMCoG6SVZ9xbZwjWhCECmFnUKUpibpAR7h1YpWjxmCzngcJUnMtPu3NMQbKzBzLJJWW6snwD9noeuSWXtD",
  "key9": "3fhg4GAWDbx5kdmfFeFgmsJQGWgnnPKZrSrnJJMJuGpnGx9uSZYtFWFSwdzgbpCkwJALzKZM4xPvE1kS74Lhi6K9",
  "key10": "HYEiiwPTWHJEGoiatT4CjS86x22H5ZEFv231K2GzRCj6nhoEzfqK3iBnVZ8bPq9TsnWpWVDYFexZcdeVsgbAWUZ",
  "key11": "s4x8MATzCNM2EQvM8dDJ3RDNHQQHqJM2pvXNFJNST5r2dP1d2CiTGGkY4TsY3F2M9cQPCbwirJL8tts6114HVpZ",
  "key12": "4pufcmNXpL45S5EymZJmFRa7quCY6RquuSBYQCf4FoRAD6vbw8Uz2h9HUcRixSHsdavTiDCgU5yrNxcX2FppMhUC",
  "key13": "NgQkPdLR61RWE8EfwDuUJMQvzjwbRkGithz3RUPgprxEDGWKSZdGb9ijkp7VgoG3XrbZGKzJmYppb56TvTaBU59",
  "key14": "3yEKid8gdopbrKzQkgu15cZV7z5XHyqgPLt2ADJuJ92rY2XZpVsoZgAskzKupwtmLBomRXeQ8YuKoUp5LfwsJMcV",
  "key15": "iy9VRr66T3AS56RhJz8K8Jyth1Y1ZMdAZaNojqF6t81TwQkRYKprKLEPyKFKzpTzuTHStxS7hbicmCtAHaWsP7b",
  "key16": "5oyCYa2K9PmHQyLGiXFjChB2pKntuuEi2uh7NSCebb2nyaf1TYbUcXxGDc9peUdhvVdjHpq8YmwNUJiaDqcUTSLK",
  "key17": "4goWUvhasNEa4ceekShGjp4gmN2eUb9FF5b4rip6SE2sxv5ZqZg4r2sSYY2ra2xKkueJoUcH6j3rygVgZM9t1WXg",
  "key18": "5XyzX1QqfKTmniE7gwqpTbYNb1u3QXEG6HDHKDm98k8bYLxYojeEXtFYihHPDzVasbiTxw9dGrTqk7HhcBNLikB2",
  "key19": "4F7Ys6JCNy444m2A7WxcsPZNHC6mKXfCWbkSxbU6Vjn1pShmp1MqLHK1xxTA1dapxvK9ygaPNPXTQHJY2XdP4p8m",
  "key20": "nEzYfiooUJ3cVe5kAyTYrqKTGUZXLuCtP8PQUXUrdvUu4GUNrd3oRRq6zjQaxMnK7PLmzJD9dxKjvQmha2MuWc5",
  "key21": "5wYTLqEP5f1BU4oKJLszkQL5KCofnFUCkkhtLDEf2YupHiqwmMwVK41yQnrGM71SyooUMH5UcznkAbUsXtrtXymj",
  "key22": "2v3oHHHxNLjgj6LbpTeWSBFJzVVLfNN39Jywe8pFBANP1NKBtWhpoUyhAhVBhuTS4vvX8d5VFAjqg5aT33yBQe4k",
  "key23": "HfwUrtVhjz95rMNCV3zcVhNGNG4GKwKHxTTDoAZyWpTpd2khKBimVKgNRXCRpNdLbjoDuSj6A4EZjHwfWXSJYV7",
  "key24": "45qGVFCBcps5GsQpdwxXU7A9bnKxYNYU75Mi9p5ji4hKQZcZio9X9ZGmbfJdGNah2chruaiqejBv1DeVqJcwbbdj",
  "key25": "3gDqwrW3r1hyBYuLpmiKnYo4PVmtFFUmM3zTK4DrfYJqYhorrD72WiSr6siRf5RyqTi2iu9t3xjwVsqGKhWhR4wt",
  "key26": "G6oGtpvQMfqF2JxH5W4x65qpwYHi5GAtjuThMKbWFaS4DjzofKxErgwxVRrQv6xhQCzF2Cfh9obaVJJSRu2yov5",
  "key27": "4ha7q4sZ33zc9gVit1JR2oTt8aqb55fsCiBr2ZPVU4tXNtRqPkciEEZxMoPDuXqVRk1hdbVBymPXzAtRRBfjfrvL",
  "key28": "4hNLATj4RrJpamaqjH8XYWcZ79Aer48AAqnbWjH2oyD4LPG76qqqcJ8XZ4GLoYmHeenzczk1cdqDejr64mYvDxZC",
  "key29": "gJzrjDmjdoQppSf9dj4KHY873MWEtvNW5FrqKkHr7474FsTM9rgqu5PKXP4Z1JQAC2ZY8PN96dXr6e6VybpbSBe"
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
