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
    "4akyyxhtC78faEUQ8iZiwCn1HosEQfnsfmUfuLxmXJhhzKyxZwsBBVA2W9VwGJGENePwDZ4zT8G5e74nSX5NnbAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFYXo46evaKUNPoTsXwRbxXcDMUcJW54qVP1ZKGcCwHGvQ2s6o8juohorfumGpfKdwT2gxf71RJkAQp99u1xwyD",
  "key1": "4BtzFpZBAPZK2gxHGL6WcVZdQGnWphuxDrWWH31jqBGh7auMwZ1aPHbcpHa2aUD75V7nXzmC4ZV8GMpsPG27M6pz",
  "key2": "4VQ9A4PxQtnYGxVNKsY1FcMLokDokfg6kj9yPBn6BUJ2rxKtVSyhdmu9uAT81iqoGsfczRh9qTK7wW4PXbhGv3G2",
  "key3": "5xCzCXavATGzPb8xM4A3T8r4J2XH3PxaeXSvnZqavPyn4962xuKg64X2wEuBRa4qjXKG5b4nMLLZtZ8khnZxPWe9",
  "key4": "RRXjRfPP8amxBzYCZr37hwri5D31P4iJSDKk7zdFgr52tiZWHcXLDcWmcixBKPcHbmYxfFfhzNFZAGFqfsqy3wy",
  "key5": "UbaHvGBXrSqzwwpLcGjaL4P1TLgNuefFcKTWsi4cVEnw5gu69HgxfptijzNu9myWDmANkrzyKDbF1gWCJaxdzUD",
  "key6": "4KRCNBcUTE9tuFjfSfEXBroosANr3xQjz9scTZ2jVSwh31VhyrdKV14NKsWdNjVzwMxWtMUS1h3xW9AfJWaC1W1D",
  "key7": "dMRsZo6GazBxARQ4aMKGAQvn1TZ3NzkqYjRSxCJzRZWzQijeVE2hgB8mJfZo5XQhemMLMW7jy7Dg5uMXGN4NpsA",
  "key8": "5SRy6NDNLePVmvLsn5hUdmRE4i8ecZAVXDvfTUXK4gysrqdHKTtbtYrtfQvTWdLtUZQoQQ9r4z5K39HLnWH4K4L4",
  "key9": "5Dj1h3B91jMwedyiSE8FoMNTyU9y6Y2SS94fvrju3aVza8mYAA34z1eikV1y9YyqNGhVCVQDri5uVj8Wi7VhcAaf",
  "key10": "2cmFTMEvqRxB7WNJfARsYehG9eAuXNmrEmCpupv3rRhLk34tiMWf9mfCBpJJ2X63siuoFjJXoEcSSyz5BAKtbigr",
  "key11": "4Naec4m95xVKdtXiipKjvAsSXMa9Sgpbvr7sWcZfrngEj4T8r9RNqrD3akpVnHvWFCtJYXe7W7jKDkznoX8JrD6Q",
  "key12": "2PcXBnV4M982K7cPvtvwQqVe9z2AFqhT9GofKw3iPSTFwtswKShFVX9V5nSXED38dp3aFTwLq6aNnvZxgVhMEerc",
  "key13": "k3Z3QSVEQ5jbQHqUGYMoXMUVeb7DFQtUjVex7X5ZMAQT1tfEgFTG1tgYurT7iXVC9tQ6jpCxS8jYd8Zjr1iUa2r",
  "key14": "4h5pX4enWartNwnh22d9z2Mnzsg6M76cfCToZq7hqCpgRxhpQ5vfoNKgxoEUX7JA2A4cYhqGaDSdicW4t2JucNJ8",
  "key15": "5zQtxJp8HpVUcu5PXydDpRnS6xVsAtteFwZZVLbb8rw3VmdAHCPHK3Y7aVVbqfX4cBtAcDDXZnmYVatafUi4iUYa",
  "key16": "TT72NXdcXPm6VAvH15enimZWTHRHBD4WmdVxF3uDLMwX9gEoior1QfQVb2SgiE4vGpKYoa1Xp6WBAb8RjHHD9ft",
  "key17": "3HjhwnbEmqtajcUNqf2H9w71JNnQhkbLYBmGJwrup1NHRu8tbtbxZeTjbgn93G3hzCQdQZxv9TTc8cUA1baoaPEH",
  "key18": "5UA4bQeixGyTymrkim2K9Mp4o3C46863ZuEH9qjkXqiiEREA7GnKzuHhJJ2DRAae9VQYAQDaFbwEvbyZn83UzcEV",
  "key19": "2xgf2sfuAz2qVP4JNjghb4ok6kVGhqDE6JyAci1FLhx4BSjLCscPJ7yT3UyZ2QyUpASuZ8We6ddHUDRwFjUk8LyR",
  "key20": "3pUGRhnzdfXyTnK7TvQQJng7dgpdXgV99NRi5kcqEwCAN4ZX9d5xS1bmNn8MritfupA6W62mpGctzMsw4xTD9rNF",
  "key21": "5TxidfKAbyp88caPUpi85wDD1bfqLMeEWZRyKDxJ7gToQfMMHK7Ms1eMUJYbRh77HwJDz1tkYpfVCPBQ7AUYLZ8",
  "key22": "28v3kS17YKKmUVNJmSx3RX8mTv33jspREDbN6RoAMfSSJkhNCxNoPqpivtfC23Q4d1aBBoG3xxSR8LFiz83VsKjU",
  "key23": "3CYLwuVxsvvTBpbcRiE2iD9htKJz7338Hc2HSNBZ4LNmNk8pdPYZmno89dmmBMnAjxDpuVgamwKwf4on9e79Y6xN",
  "key24": "3vSVQKa165dnybe12WjLdaNUvLdELmvqUv6gPckHgg2ABCRzzCNtAm6RdWAQ3SiuX8mFzjCDCHEQbT42eU6Z7k7f",
  "key25": "3dYg812rrSavQtze82gzHLFX3URo1fbynKmFwMwPnjGpweipUi8mcu8p3FLkJvBPapgmddciLXwBR7QDzwivvWA9",
  "key26": "A82uYvAq5vA99a9pZ9k3zT49eGPArR4EhMRjtS3oWej2hAsD31qVRPCg4zdc5KhddvRK4JA6yTZdQPPCJz5sPrV",
  "key27": "3F6ePmhiFRVAC1kPvogGY8xRP83F79y5tHd18v3E6X52F123ceUTPp5DAZYPCNJpVcGGj9Y3Be6mQjfBE4HjYagf",
  "key28": "W9MjekGacrVSHEfWrnyaz7mADfp5ziGmsun9gpxoxdQDHstzbB6DkSLuZf861RvKwDz633g31LsGGRmuoQZbGW3",
  "key29": "2B7CQxqJKiycba7XZH8zyBRNyNb4u1mTezqk9g7MRtEBw7TR95UjzKRA9ibf7cTjkXgsCM3LkURdL3oJvxfEyWRo",
  "key30": "3T34ujuFRN2TnT73eGwe8D9YiVmoaUHDR4J72RHAgsEkAKLYoq4Yh4fY85osxNQPHaUVwKJhj5hm77Q6q9VqQ9wW",
  "key31": "v3wK8aLYhm3xeAo8dvMDzYqwjwJe4Q9QeaWxFL26sRR9s8psswDcHRmBwHGawyd8rEWKAqu98RwG1o4hnsHopS4",
  "key32": "W5JDkhH6owVP8U5XmbpNq3imS54KCQqjc5szjdL1BN3g7jkU72Qws2eWT199dUCbdDybgNUct8J7MtbNaSH9Lig",
  "key33": "77n6vXuxBePPdjaZDPo6zFHHkTNVVpUS3sE9mt4wm5NQR5eWrat3h3mHbGRQu8d3i9dBXyUmF2CV4ThGKTgSh5f"
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
