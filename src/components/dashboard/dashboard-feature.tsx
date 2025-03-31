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
    "4PHnX5dbt7aq7ALYyY4HxD93P5AL3FUbTc544Kd7Bej6zd95ryJep17N283XRu4J1Yct3VxstoeAQqLErqz74PsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6xipa7TcdoiSgwdfNX7UXGrGop5wGQwGVJA5tHkpkMBqU4bdGRefcF9ZAbrkjoVrN3hQibMS7fdcXMD22PCBj1",
  "key1": "siJXdVmQ7MPYxzDei951XQeg1dqergxuMMX75aY3ckHFYhE1utfFMu1W8PMwLok1m9DyqcihgrQFiZgjtomiuUx",
  "key2": "9XAfxUtsyh5asyYzJyuFDc1pSuQVPsLfsgFiNdY2ZBrpvzYdsmbsop2cNuzAyUxQzEFbMhrH8iKfHyDSc5mkeFR",
  "key3": "F9Em2GZGsyB6sX29hHRwC7QfYsHSWkeRdR4t7cK2j9YxVZJc8sDV5gBaJRqrUibE2C7udUQUU6PG4xT3GPkDYGK",
  "key4": "5zgeZRfUjo8cDtmZ2FFv23o5ESM1i6M3aUzhftzFE4DBpjzzfrYasRfAnXmnWnNBGGUaP4ibAwR6nLLTeScMr7wg",
  "key5": "41V8wywhYxEAoxrSm7dTrUFDsPEzwsYWHfwwaPayRHvD6zYh6W6JdVHcDc1mfYoRTffAwBnaLLAcSq15fjsUeeii",
  "key6": "WvzhxkcmuNT2jshyuq5ka94fSo8LUZ2u27d9SUD11osPxLHW3QDfQAtzsJLg9yMoiqQ6izM5nDvNDjuZrV6LQWZ",
  "key7": "4wYT6ASXrx1tgj1MLDykv8s5AaRF37fiTdBkwUUzA5aorSZQGvDTVBoMwXiWywuDW3ehkWLX7ZxovU55tQqTyVK9",
  "key8": "3Pr3FxgNNxHeLsdnQtDeATPbdAEgRGNwwAfYBTTzKGKF18Yji5kQNMW3R21NAKNiJQGksZnKUGcbAuTJMFxDVL6m",
  "key9": "3hLg3wz9bDWvRv8qrBQtXydFijj3LpbqNQLhra3ei8fiXJmu7VxVMZuuCYUb5x4pzYMHPsAhiwK2vaXUiaUevNCh",
  "key10": "2ZwxBxffksyW1sE6XHW2516kQ24wu5a3mNFAkuAC4HuSrgSBMdLed8GgT2pTjV8Rtqt2jvYUgX4o4hws7EkddZp4",
  "key11": "5ZPUubyTc9tLLhhavnwTJM6Dp11hyojp9aPxE99kCouxFajq5MumEmiV1NNxamPGwzLRtBxqQNx9nvasPedPkjvh",
  "key12": "4tgb6P83cJwzaXCzpKxRcUKDEYk8cwJKzP112auQGAC2ZqXJTBCSfbM5GvDnXQtDZvMk3p1kdAjzUJ4K5FNvjQ76",
  "key13": "EXjWc5vpfwoiwfZ3sZEh7fXzqBmRRidpVnTDwG3e4WLExjUvpKDtswBJFYT4N8rvMEBBDcxoRos8U78xALn4veg",
  "key14": "256RLS4JQkGjQSGHcBQMTypLuKvLB6Nk57xiZv76CGNu5go11zLLSiQApHHHdNQ3AmivPbinELxfaqJQ6JkR1pC7",
  "key15": "32Ey6CPTNEZoiwHQ4cX6hJWCjMj8wrQcWuvySjPutqenPBF4qmkofG3RCxuZ19GRUmRhHr96u8LjwGWHJn8qQ1cB",
  "key16": "3TtuFcsDqKezrRnzJNmk6FpzC4ysvz5buNpX8geYih2S3EJKxZGghEQoMmc5tZB7WipdLHcDSAtugWDJXwQ6wp3D",
  "key17": "3YtwjiWVkfCfiktJatGuytGp2PjgahTozQphPbecBqfSdDzmtAQdPqDcXRBi5ua2qbAiHVu8HppWTi6EJUuLp3fY",
  "key18": "HeJBBXoVdaMrzrzPehr15GGW5u4mpVmvKiDDNCZPiMHVhU91mosmQzKV6gwN3itPbTmddqc7oimUxvB3mce9Jes",
  "key19": "2VvegQ2x31qzupzA6DinDpF33SfWL9S83RQ9CXxHfx6bMvJ3zFt4nazjET4Sit6GdxZpmJvjyeAfGWR4Emra3LBS",
  "key20": "2BDxdGX6QWF2iWNXRwdxwjoF44wUzhroP8RSA8FoctsEfPuVpV8QAyR3sLXHz4dYpRbu5qbQMnLGzbW9vtMbTjyw",
  "key21": "3B2MckDsHsJhajiNbr3qztUpXMq6vPNyfyMqxdCvooHbzwCKt2qcGVnfCcKyWZyiuFzfPGAfMH9pBPDMbPbLWNrv",
  "key22": "2ikAidXn3S5kGY1xyRaZwvTEgiV9VvM1UrXdjTFgDdYkdmtby9CW2PPJcxEHTjCwWgyUQB8scVe8v8xCRV5hEGE2",
  "key23": "21NRuv4y1DB1BGx535UKW2DzhGhtKFwSqaSV4BgYvgNJRJZpWLsRnDocBW7zPmFgaVZqEbLZXkJ9mgTbJxxwktKC",
  "key24": "2UBq5aPFnbBXWTdtSqpNVpeaehKxBaHBqrdu3LAJE2UmqXYZURLi5NsVXmCaeXse2nRJNMCGZPk9MzGkAHdQ6Fqu",
  "key25": "3VMpg2z7GpEKV75KtKD9yrjFpJa1v4cLPpa2CNxmKMVdHCb8UK19umFUjS7RQvvY38wDNxjr3KwdTeSoGARxGrif",
  "key26": "3A5k4M56SnpTAYFnrtAP8sdY1NoqKNC1bLLRJWFeRXRi1hqgm6vwmxPZxC6bxoyPBYRWoAABHSCUxgg8DhJELLwf",
  "key27": "3vzfij6CQB7r6JbJQSGof4JF18KHLioxUhuPVJMLdocTxYWme8baa37MQtN4ExneuY9UoggPxydSasQ3DWyXhQ8p",
  "key28": "3bG7ez6LUouvSwjZYR3EK7Yz3XG9ir8L7oyqQ5GLPzqjveVbq6NjgPGeUVGUP2D6qKi6RVFwuXRnJtzZZnLvmZVG",
  "key29": "3c4gxxHRiGvuZKUabDmGJzPRnYfzRcKrDVNJDj59Q71sXoPLdDniUr7yxjPWBv1bX4JQau7dmkfBJz3LL7UXNMk9",
  "key30": "32udqzfCYuJzMNDnsyW6A5yx6setzhuReNvZDQZr5iPmRcR77SQ2oyq31YenJUshsTtPBeMCKuxGaciSMvHEDBF5",
  "key31": "3HC3CnG6CR4EnPe16b2BYBWUuPCC6G71FMnLA3oEjCPMYgbjAhAVUTa8RaDMR1GY2a7GDU6ULYbNs9g8UdMEUpxU",
  "key32": "WcXFFn7DeMFzTXk5iJHqLF77eYSqKffDgx56jcEp494VxqRYpLf5jUkPFsXNG9RXArVMSQFUkBVLgwsRQWfALSo",
  "key33": "yQ4fhZihA24h8dSFnvS5JMHykdhc8N5X3Zw2H54ETV4k8N9hgyamBmn6e2CA74dBvQkUeGN5nfbs3ygQ4KVtKvN",
  "key34": "2h61nzrdrm5RGYBzFhCvewMJTGjRRNLCkKZuMZ77PL6dT77kYxfnzBFwGT8ee4LjsxmUCymmnAJ6Jp4nK5ZmXeBJ",
  "key35": "3KE6sRW848Dh4VZLSAEcTE8H2hKdMuZp2J2SkzWPDTXp64tFvF6mJnURBTEWMBQicQiBS6BxsGBK7TXUwXvygVjS",
  "key36": "4toeMcAD6PRzqd9tWSzqq5xQXGEyHEotzUdtLWMpd7ETWgEzfqQUisnXAmezbmrfXA3BendjcguZnY8XbZn3ZBNB",
  "key37": "5jdoyF2brpBXNSD12FL7jsimQGLUo3bxww8ccUhYkb85k3sGCS8vi2RC7TsUAiVEP4PDWvQ7kpMqY71aJaDQ6hxX",
  "key38": "4vyrgJGrUcXVyi5yD9jPbM2z75s2EC5nMQKBTqHKk9iqhZSgcTiZv1cScnuCKnVSgxnEiiApN3Aaguz8FxpHGnZW",
  "key39": "5XHmKKU2u3ch4iKAueUdtHLh7KQsyUSshNJqk9cv1vxzs6T62rZkDQ31k15nTWdBfx4sUDnUfWKeQtQgjjuxAvNT",
  "key40": "3KNhXGC47CAeRkzivwR7yYZmQjbqy3GqQ4f5UBwj7sEXPTaLcQGKYpY9Ri9eLeuvHro4fgzjgnKjZeSbVVhTjR1h",
  "key41": "39MnAwfiS1EdRXuzdzvPdTGn39g33j7PeNJEdQP1C3fddhyKp1QeGH7nxekuDkfKvUH7eVNnk9yGCSSUW33onaZV",
  "key42": "4y2KyFcFFem3NKm3YAfj6q485EMVUztdbCAFtfCUVzgXvha9J9g74TUFMhKQ5wuThaSSJeSWTXH8CndAhGgesaQR",
  "key43": "5p48eJbJBvB5zyTkJK8Gx6YAD9moYuWeRY3xQTcaFF96HcRc7YEFYC7XSnWKkgH9PLCU1quFzNziQnB86xA5rzC8",
  "key44": "2wbFDC7WtGDSLyH3K5Eji373NTFyvZ8xcEJbTXNmR8wpXzESF3wuTopYYTNx1XLDFjhWYsGK1eRbZASGf91KX4zA"
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
