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
    "3oP96f9YHXbAM1oyMyrRnWFpCWrAmEAYZEXQTgMVEtptzBevYWL1wZJ6eajBS93wfwV5NavDLoHQvb8ahQhBfLN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFq1bCfqbiZGGev7FPXj22NLMREfBXut2MW8Z9AG857sHUqhcE4fMV6hqnwykDW2AjZEFuWCGDCYb7htnvoQcCo",
  "key1": "4GN8KkNmWrQbjFPKpcayhDZFLkmiW7uu6bQ12vnJGmKWcBXzxQXE5s7GbUJTgWYXjbJqqvej5u3f8gjc4HVqSbVL",
  "key2": "3Wu9Eb5AAwEaTvYcNMyhycz814ttqirx4LQ74APgZTWDnLSEa1vRN3WLpTMCHD6o9xPcv6ZhVJ4nNQYBSo92L2nz",
  "key3": "4VDVhexybjHdrWauZjwGe8dDr8ayoK4aXSU7VzuJzBcMRcXrSFpu6fbfiJBrhGZyuwh8uqEmXewgiWzHPeSFX1AA",
  "key4": "5GDqdc97t5ATyLiFSecxSyYAhhS5cpV4iJaDUqLYfqoBY2JuLDDkb5wuy3QHY3L89G1J14CngAL1Pb2xwoKBwwwn",
  "key5": "5bjuegMevNGhH7EgyqGqWAxEL5jyoV2SS6bEjZaBPqPvroaZZbdkMpUZ4MY3kknotxn6aJ5AyPG7SDCdXjYLSDe2",
  "key6": "59wU74PWMFrV2VYgAvR7XwvB8XZQvEptVMvfHn3khww4GfrnMsBHuDbKo54xFZMYr56JxdxFqgUTP7TAQtegS5d4",
  "key7": "J9ZztpkFxejm3EerNheomCSB8no2EDqg4Vnvw65GGi8JrZ22xYRepQhMnYL79UeeJX5wvzeDscDqSELRx5qrfnp",
  "key8": "3Pw9HmfGKHQJJkfFFVq4xbRTND8VYq9VGsGKVsrQyMrxz4AJj8zeoPKkZTurvahZHww78eUdQu9FwVyhA3R8KW6X",
  "key9": "sGg4zs9mWKE9WtjV86AwWWk5PLc6686xoDdNnPqD7BmxfvEhMFnHx5sgcnB2K8DWYcHGtFpkbDjXJMdjAqVsAAy",
  "key10": "2tq2Pm6jcBqE9VkzNwF7nXeqqr9xnjDMvQwjtVBA4cAHx1w8v9HBgeDM859ijwGNZ67fYVHefqHVDUSqYKKZqJ13",
  "key11": "3tnnz3qGndUQfB6d18mZGdcYrU3dp6kBrk5MjuVEScnxv4NuVgQ4yiL1Rs9YRnPKd1LPsTCoqnXQLPWdY3gZ7itT",
  "key12": "6HLKgoEHvSubrLeojxxPkgFzjVkzGzzVWHC8xCi8eQmisHSdQ55oAvBw9gpn5kEkzWHToTf4bd52eSgvDkNQB8e",
  "key13": "ZK6cbx4EcFq3cXBfBZqunt9N9SGcfiuWn6DDqGZNyKsCxKixfxhjm1FBrTMumZQ1QodgzZpcb7s2A5Vu5PMcxgn",
  "key14": "2vffQNPZ2HbRXDBjJc6mN7nz3EkZFLTDNni7MXjMDRw14czBkYEKrBmkb3DcYGcboV358NPE48R4SxHKJqVRLtfu",
  "key15": "dWyqJFMa7LgfsVFLu1dSTpVe2fRthAP3aZL3ijwAvhRhKWt7XnpW6iPR7avpUJGNNibeAsJkLMgW6DfGdXUG8iR",
  "key16": "tGbDviTJW5p3P3PdoSdUbE5aqikPSjgWW7jS6jaEhK5p23BRpL9QciGExWE8A54jW9hbV7MjKM1igCzbJhC5Js7",
  "key17": "96fDpBDjJ1sijvJeYtrMjd62e2xZXQcVC15TcgoRDLRiDd5TSTEdFTyXw8HjaA3Wz37ACnwedPgc4VAfeTPsVCx",
  "key18": "JeeEG7N6r2Y8GpMN9hxgN2AUeKRW7NFCjANbtUm3MmcbZ6YHP7jTUbwuu6fU3wELrM6eD58c58y1DHUUcfKzo7k",
  "key19": "3cAyezKmtuM7GXBgDt6f9Zt5a3PfP8qKAcRtEmSKRYfmyEmkPq8hyvM4hehtzp6PDmXHY6V1oQE9durafc1Ncxgj",
  "key20": "2b2hCkvL4dminFNErpbFYhb8ydtnGZLBmFPtE1tGVwSbAd7LPe1s39LnX2gy8CxxgBHaBxAzTLPhMh8ZJjmWYHF5",
  "key21": "2o3SZXFozY1y2oFQcK96a6T7xMUngeqeeNqVsnwfwTmzkp4M8qnP8xPK5EZnUoCdCesQY9FqJwJcVyq4Vm6H5fc2",
  "key22": "4c1CmvQNuj2WZXZYyR12wwGNEzBRNmY8HnJPC7D8v9fen2BVNRvCuScgQHNJ895U7z7Aq7rebRw4WenBEgAsbYu7",
  "key23": "3xLzsbwJD5tZ5eqbcPes1Q7WXrLp8rJS2fsetqBzwBWvhRFHi6ti7D8HjY4KZgX6JmGSEm2dUu91bJU1uWGcusyi",
  "key24": "28tAoYJvcGjJELsgFZWz2BnbCrJPFVsEsFMzyhUs9M5xU3n9LhJd57gY8vb8qak5CPYJAHVBpipUjXFSrRUmX5pq"
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
