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
    "2uVzrAPwFCdK1tBK55P5idhmA7jukvj9UodKHfXv54YDBV1xEMjNVBhrKMzG14fMPkkd8vhZ7AmaSDmyvxksHqg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363v9bWtncaosDBUU8KyqyaWS8M5mPr2shSHSxdUA5ZSmZUynoQUDWws5S8gMjyxy1G1i19ShmrV1MogpSCNCtxf",
  "key1": "2Frpd6eiJXMsvUgFE81ojdjcxXqhzySxYUpivfELkxE4i8wUjueSxY9rydY16aG1WiNpi5rXEUH73hBoWJyW4qBM",
  "key2": "3NifN9oTx1B4HuLEn2fg8CvyZTxR1oC4gt49Md1UjXTByH13nn3XTs9afyrNmYgzQxw9NNcmTx9CjN118DtfzErq",
  "key3": "3N8BFPUdSHK5EKtbDBvohEp8SKsEyWYV9Y4Jo8qBVxxFg2zVXSCY4y2XyMjydwJNnsGw3dcNuDygBLxuiZtfJKSZ",
  "key4": "UQ3tCvNmTZDxSt58ZHAw6ibL64KP5Tei7WEXAn7YZiVQXF6EdU9pFxDVM5yJs4p2qGHZ9MdS89EGeyahmLdkSwL",
  "key5": "LSD4Ptv7Ut722Gbtu71ivZ2wVaFcJ2KMR2BtrFWjnSJSC8wvHAz9vzEt526pSvxRZg5sCk3gD9MVtrjQnkzM7CD",
  "key6": "3cA39NjKspbrNMGzXPhtRPcZoJJpbLn5JGXeUvhxsLdvbFd48HW9ymCorEMDUK16NDh8VmAoTtYZ9ZwydeRy1Myg",
  "key7": "3VXKEwjnB2Q3Lj8ntRFZba6ycF84H8UgxSMC8TT5UDEsb4p2LuKMFZrRh6dviNFB55RFmhQUY65ZYYUHvD6ozo2V",
  "key8": "2p3cQsjdZeFYHxrodGhyPtX8sKTXwDj1Fq6covsnJEoCo979jEgQcuw6HBJ7h77euUysxuYWr1WKwdum5FAMcUpq",
  "key9": "4cVaa2NTrGAJNH8G39d6pMdUqmy33SZDuUzGbn8xHur7MDtxFwdvBfhnLyo2LSM1vvCP2dajPL9hxkQv9tJ7hpfk",
  "key10": "3AeTRs29AkfauNnQdaDyBkMkRyPqvFupu52CMv7XZpHpX4efWJWuYv1wm3bVhz7rzE8Qq8mMi8vee1FYzfcgSsWM",
  "key11": "5uJW6yyYxRNnPJpRd2o4b3cWm1FpXpp3E2wHH3Nq1NdMe4kXDYQRmyV7xKWUwecWsaG6h6U5UgQgKAZuov7GWBSg",
  "key12": "MeieYRaoHk72tZaw1WcxRhpWAz13aGzXZF9YE8hK3rXWLwhuTSEj8ywLVVv1PB82ACmD3fZL3bw6oeKLr1YCXSq",
  "key13": "SCY5LLKkS33WgijaK2B8ppSWV3SGD7aJVPRiGJcQBnWG1BYr199jiqRpvW8oXyXCziLy9Vr1nfqg4shfDNCcD1Y",
  "key14": "3HCK2huGZ7BESQR5ZZ7vtgFa1nyLHGg8mxgXSGBkusTkze5okfMbijXHzwixi5x5939zpAtTJ1d9crYnM7s3AYX1",
  "key15": "2MiVGdg52TYrD1F4TZ7dFJybYKR78MtXQ2s35c9uyUqxQDJuMiFA8bxMEcjW6BgdzeqbWjAbMMxtpFMwq7A14Eee",
  "key16": "2k1FxJP5AgoqKtpngD8oMNdAyPt2io8PXTniVr6mJmsPu1nQRkU9JKmSV7KSrkTcWVkpsfFF6crjVcqWU4mkLs9f",
  "key17": "euPco53gb2tCRChNNoRwTr6KPcbCbisHp5wun7tA79XzVbBbv2wBdKCtsQr4Bax5A1odtjKN6fRf6SHycb4Dqsh",
  "key18": "51NYWXtCXgiJeBMH4VADq6gnKjPgBHZCwGmNSt9n5ot38wVc9m595wQLPwrKVRhVd83LAfVvexq53owfWhpwpwqn",
  "key19": "EUjE6vx73pem7zduJod4enrqu5wbJm3dHkKGp5weR7kxP54f9SYg5jMFXM1J9HhPHe19YYh6gmx16GzUm7ASE8n",
  "key20": "5uS4PGQCHZMLaB1BTpKb3EfsJUAKQBp4CLuRCgNdP7jz2XdkETvf5Tq4Ks4nnT6zSpzUUJUzDJ7R9JnT8pPWZEGG",
  "key21": "35wQmw1kbPLDV9tNUKqyKCnTwhaeDURZTxRAjLXPwcRqmLXnqvnE1sGN5jc4sZpA3v8eBhDk42MEwF6wfcCoBMRE",
  "key22": "3MtVrsJ96E83cLCwHgxHNRtjRFz1ACcbzcazAA5z2vXJFWvthyoiiJF67c1SwgTuA4cXMupRs4LMztKF94VixWxa",
  "key23": "3R7iz5e6Jep544ZWy5jv9CF8XsyWTKXCRtAMG9jihc9jGKyEXFD8HP4hDyY162BH8VhQDvJmagoS8VYR1zU8Dspm",
  "key24": "41xa9oYXtqEkjBNSZhsTqEHrauxDhXh9n1Rrc9u5gr57dKZL6pmQmTNtriBwk96smqD4ojr6zm1HQk6WCJ97EUow",
  "key25": "4t9nW6C3BaQm5cDMd7ehvqmG8Scd3uz9eK2eRdv2ntJDgy8LqHMKFsZcX2L14yfKcLeBdQrcUjMjQmLu5VxxTDkG",
  "key26": "M1cZqQ61GETnUiL1STyFzp4HEiQqcGJXwdmp7v77ht8tYQQNuL5tun5owvKmJ85rWfT2eYarwYGLCgY1gyuopfC",
  "key27": "54ZbsTGmXsExZkjQwq7K8KYwgSRUQmep36iAhPXWWUM7i2P4QvQjHX1BxkKGvMGMMGVWS2PzTU7RykucARPgpU1E",
  "key28": "4QUZn2rHmQM13ch2KvZg3hoKeaeexitAZ9weu1gT7aSxqgVdXKuhszz7sB9k6V9e6iUXwyyLaAMfj5iqwPUE9kw2",
  "key29": "3qGjoLZoy7Mt6GQPQUH5LJmaXYyEhkZ2LTESUfLQAYZCRKhKGxDHfDQP2ngRgBZjo8zbr1VinKoV6gEsgF6QgMWS",
  "key30": "43HVWkwitoNWs1yPJkfr72LcNpn5tKGkUnxsqkjZF3jDXBc7ncJRN8fhoTneumhJZ2Kvnh3emr8QvXuGvR2NE1gL",
  "key31": "3Yovs3jVgLXnEKLNMWM3rrDQsvKzSyTjKhU9SBTMvHS7Vcb1SKfSdzvNbtRHXo3P8wVStANPS7D4UQLSnmkL4rTd",
  "key32": "3BU86Y3zcSt8UTMUedqkZ22r3sdx51TRxXGUo5w4PcYxbAyM8Tr3Ex2MVVXce2mKEfFdcuMhirWa1eRVvhj1tfsd",
  "key33": "PjPi4JaTqZWgfxSTcjeRCq5w3NUrri9uwgr5QPudkyVqF8HsnBfRhJkFDvsJdsYEYG4mjcBTUQG59wDmioYjWVM",
  "key34": "oY4bXxHAru41WKSrYsHUYUchrQvgiQTBbkNNyC6U8uDB8MkvBsrhahqHT8gfz1ZnbSwKkfGS3bfE2nVEsTQtVbY",
  "key35": "3ArRnfUX762sQcyNXPxsjRdpCrxcPYJySUnb6pm7vgqf3ebW88fUrbYb5jf4JXHZaQZ2yad5kS4kDRXh8b9axpKi",
  "key36": "z7uYbSn9ci8FUSkqJWTV6fsTpt8WcLvNhSRXm5FEyUc3txoPPW35Zrtzr9rQPefE5rgcBY8fwPsH3g2tAmKnhqr",
  "key37": "324vSUwKVCH5RsTpANMcyPZWP7rAnFzvjaBCNLZonnfpNYVGsXUZuzJYqP2ZRBwbP1CTcPWbPvG2iKPnqneV5HNo"
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
