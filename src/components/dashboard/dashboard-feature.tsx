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
    "5GGdoBVQBVExvWQ2c7QdHUBWsqZq7xJdNNPEc8GPWoFMFrKvHaG7L7dxM3ck6tPReuuUG8ENhbEe9ihY1Ajtey1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KT8phsnL1ipKgfy6ty1VZfpvWrzxqn92x726bKCgNZNAuWCpbs7SQY7cxB9P25UZDfgRzqFuUKPHo4uYpEq4SJi",
  "key1": "Mz1k4n4mk8udAAsgPCzN8YX8UExUhvY9gQzywqqFfpHnTUx3ecWnekCCJbKZN1BsgEbwZNCpdyuyocD8mQJKn4E",
  "key2": "yCYdQRacgdtB6CjH6hzA7ovwjG4A8kJgJE8QmB44RggQGB1GrJNPBPmDLaQt7GoTksZHwTY7xn7FkEqCVEkriWf",
  "key3": "BEQXSFMatfjm6sotoRWaVuu1CA8bvwwvNSY8eh1YrzasopyvVsBof8rAaCPaEhW1AQKsPjMi1a2zcL1mefamSrt",
  "key4": "3xgWUsnAMpBGtMg1hnu7BoTfARW9xtJXSogVrErmoQDkYxLAGLED4BGqSmGQN6ggmDbg5Co1hrP5FwkR2nR9EHwQ",
  "key5": "kMQhWy7kJ4y5UZcHPUf5AwZtM7pv6WVcRo1CBvFVqZNnVhgrkBt2dA8VY6ip5CWDW8grLV55dLzKutRMB3wKpnx",
  "key6": "4ZWwHCLoYK5eMcLBaswvGv3HyRT3ks1qe8yVDxkEhFNmpTufwMuWfL8fCqEGZGco9bVRQKqUS8De1zqD4Stky6uu",
  "key7": "WLLyRiQBhfxccg3WKBLPhYXqTxqx8ixfpsW4tMrWovwQkJ7Q9j3CtYY9ma7td2Ang7QxXEVqRCqNDzEmnvqQhDW",
  "key8": "5sn6UvL9zEAxjcRBUjZKFnpP3c3GfQUju58QpJg2iaMdNzEMbo6WHBwpHZJ3ZaU771NGrpmtgGS5E6Z8iUVDsGpD",
  "key9": "5LjqYCZ1RKb2AxREExzscWaG2mhAqPxQ39zMRDiDigB6MCxMgmYAuo3e2wcoVZPjn8NmH7YErpexhTJrtb9D8o7u",
  "key10": "3qn2XUr6z4RSDxUXMsEUno7UZbRHYLcuFBnRTjeXRU3vGUbtUGkPwLewm36sGeTRNGiogh5etotWB8ATJtPQhMQc",
  "key11": "5ygJy1aLstkbM9xTGfarys5KWZi48KfQzocLXhEyuNUBK2Pbovxqjh1ZgfwzEaWsRHEenCxkfcgAdEUSmoiY9VSR",
  "key12": "ip58TFUkwvz5RvPtzrpNGm5ARY6843WdttGwTFqjEDeqVVh2wvwJKmvzvE5GycxU8zpxxxhVVSC9KQYuGPE8QMX",
  "key13": "5G7qhuhDNvuVJVXnARVA9PKfwWG2vMVX4TqRRzxeFGUp9sCQ56feuAmyaiDeuBzkCjYkrTwtm5TSgEuoE6tSHCJT",
  "key14": "5E2RHezpL5zHa8cqtDKBkQ5TrLgDuhCB3QubNpsiRP1qT1DxUYAvGnuAxXENwbGPSFKRyFDiBdYEwgagGg4UBLgo",
  "key15": "cotvQeACA6hM2WASTbdBaLnFhDGbxSRh1ereLcEeCr7XQy6gZtEU2Bx3ZK4C4kB8tFMeVYi7w91Gsu5jgPpCqLm",
  "key16": "46ruree9bh38rcnfTFmwkidDFBhxUZxcWP7AEZc7HSaf6GRaGp5UVaTceCB8sKGdYz1fTqeDe2wgkzF699qS4RNf",
  "key17": "2i3YwnzqCcmpj72opdJME7CD8sxXotKNFwG3LQWFNYUqneGdiU9eg3NYLVFj5W53ePgYEscqTtk36XjLUmB3aRzm",
  "key18": "Lyedf1ysuXjAHAcUXcTAQyeYyASBAbKK6EKnTDGDMECPc313ja3wcdFxNcQqYcfuLKshW2w25tMyYGyv2YGodgh",
  "key19": "2qGkDU6aMWXPqoiEFttmBGy5fgWt4FFrnaESqcQ2itMsxNNHRxjzRbZShAVjwn2YRD8JwY8PLtvk7bov5nhP583r",
  "key20": "e8Sx4FZvrJ6poWW2fPQPUZWNHs1u1VGefkTXVTn5RKxvt8hH92TS9LmVRkKq16q6v8bigaUqkExFakSZur985oL",
  "key21": "2HLAe5grcxykyo7uFmhoLLq5LgHfnk4VVxbYo1zB7MVqXs9EFmyYSTxi5dmPVkQAzxhwkesB2hRiz5zhKKSkc5NS",
  "key22": "BDgNzAf2pqz7M7HMKBUCW62hrXzNxQgNbJqVpAxU7d95CBi9vBveKi4ygncvVjxyGRLozzHUKfVievxsnU75NWu",
  "key23": "Q4KuyogdE7zcmPVsJpM82yJ7MQohDgLdw5jzw9LphZ3A31FP3tkyctPfD9W9TutR9W3dKByw416RcF8V19Feuwt",
  "key24": "2mQvEBEw7P6REmvcwpEAxvpscMZXSj1Kyz32S3b1P19UqKte9Tzp38piNk1gM3UNsSfKyjEfNBJUbuZ2u5x8czSx",
  "key25": "2ZCXvLvjMNsUYVEXPGwbAqZzNjA8rRPqSz1i48QXm6dCHpmoHr9KknAz4Nmh4FTTRSi4vRkVfduG8WJtRRvDRcjc",
  "key26": "ubaX6KJSY6Asvy2hsAbQLkP9JpkKUipgraCWH7A1eWtx9KvzKQK1Vdh3ztMtkC2nU8bdfTLmsbwjwAR35kWbnj7",
  "key27": "yEkVYeYizgkQoSB2xGHFCmRzdWEyaV61bAiweccixvSs8ZrHetyzotmUTTmD8hKPHf9gjJsv4xkxoW9GA9jYBby",
  "key28": "2buiuD8RiAPDWbAFx7mVZb3NUuSnBEjiEJ41TUHCnKDXCscTMHhrm5aWqdiiz928zALxvwm4it8k4k3JT5BVx9ad",
  "key29": "58dxrgkyqNJivrL8WE8EqACab4JKXKj5zZYTJFpjG5cpWe6Rdnh3QgaTsFXwpSzxEMki2Y6XjAWG74sqhsiFHxY4",
  "key30": "41vLYrVuqPsS4NoMe5PyShrTPnnD3oTdpd4ohZYnXuGZ1FLN8Kq8v1gi7UvyeVjGFXGMyyGW3T3rTLh5LzHTB1s5",
  "key31": "58MWUi1kGiaGzDM8qtGwg1DAzyhv8DnLnKnymy38aZJri7Dhi3uWY2hn4ZYKZTcLy33TDFbT6xyo6uVdQAvGf11R",
  "key32": "4LSwwUZ2NpF5LUiPu6LUK7uwt794PbgBKgwLE3XPFEeL3FEjVXuarp9jQri7un6iSLcSFQUyBBxghJDS6N2FU6L9"
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
