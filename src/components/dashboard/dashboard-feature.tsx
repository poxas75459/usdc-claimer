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
    "56JqFgB1Zuzy43aRzbB5NU636madKR4eEPz29e6dwaJ1vySeXCLN94rxjGMPyrBJECFAtPDdNWffNARDGu4egTja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBfwXZr17mP4CGyxVqwhemaat9dyxdjBu7g13WjoNnZ1wX51K7eAM7s6FTRP5HN4ZCriXjqDMEwmJvhP4NazaUy",
  "key1": "EjE1g21WeUDssYTj93JvE69Hcke1j8kP9pCvdkKzxqtuvnVdWHpuk6xfV71PcXkRpNHJrVzH2VGm44c21PUfvWd",
  "key2": "27gyFYN4Xhyyvi8eD3AGyhoZddK92vZGtW8ThqC8erXY1mjM5jKMqYkUks7517iq7expxEX8Q7zAY6bpWVfsywfJ",
  "key3": "4G6tWig3yHGi2PuYNBHmoAqQ44QYpAhQFBvRJS3JQdosnnhnQgzfhgMd8JHUURBGhjVH5ULAUech9UjymCqLdMyf",
  "key4": "4cpHRESn47Vc7WJX4AZvErZYfzitHreoxEkrieU766Wz4kZsHy6U9CvghGFpRjE43L7JBdqFUSqkpNmcY6EDBiRt",
  "key5": "2BYTaKnKHjZz4hWLX2AcK1rDWVZvsrN1VfpNCPDLDQRUAYMgefdNHDRwkrn9ppFRzikiAZazGSgAWAGJ6wZxmyz",
  "key6": "3BUnBj7932jsj5nthfGwCPhMkcaPig1BFtotu3VDm4CU8SuoLgNLkb6rcbPtubWB3oRairv178nrpdxkgVq6CZSy",
  "key7": "Dm8RWvycbX5cQBEDZq1X2jhcjPFXiCYedS9ZJehRLVxFyKRL2Vu5zmZyVU3bwFKHxdaYETXVK3xLE3m5JUT72GV",
  "key8": "oJuSrsxQm1pfAmB6t2Ekw5DDgD8scz1cTKimsiKiYC2GZSKhpGWDnTHfAgWvyK4CqjfyJmEmyP7QUQjrsYYhGE1",
  "key9": "p1diYyNGWnXfYcn1xJGyNHifx3KtfJdT6q4xxxaZzGuooMoTKV6YqjPWYWa1sYaYrxBCbuxHZQoYaquRgMMSbje",
  "key10": "2GQRkfa6TRRhrNqRD9hKQsdNJqM9VUz89G3wPzHv6Lk9HGL5CZwCcQsLd9za7qtWEy2ja5aNgC84PXiRQ5WdDbyq",
  "key11": "4CWYaGeoRyRbye8U3sCJeHJuJXDEJNNap75QjmYUVwetgqbrnbrEB8oLzbh4QuQE47RhSPYQGT5G7261y5i1WgUT",
  "key12": "2ZwW8BbFNN265eLTxqx8y9NGyzFFYvpT9oNrhqNANgGCUKfedZ6Z9XdpR2rhZWRwUqXsUT8UaGgCjg134BmeqzcZ",
  "key13": "HpnRxVZi9KHNyME2tpJ3uHYQKvvvAXeND2aARJWkA6HnpSHWZSkfQiiGYZc7pzgiVPauH55bigikM9Pqz9aMuw6",
  "key14": "42yk5g8DhYdKYtawgMkgbJbUG91Kf2G6qmQRXEM34ZLzRqARrJq3MCyryvdFLX816XM7ANQUZ4Ch6C4MFFs9YnME",
  "key15": "5cydZw1EyRBDkhiXxYs2QP9rN6fU8UBXq3Te6kAQYx3uqZb3zEshz7Nd8K94vS7YoZLAJU6iJXGp449yJHRTTzdL",
  "key16": "5o1DfpWseWrwxk1X8kzdjDinnYpBJ5J9bU3dV9Robga6B9dxUDDuSUysRdpujxK6YxNs69KzrVsCd8ejFGxc9C9K",
  "key17": "frJYXZ9YTxBAnEZUPpeT4J4ro3z8dYNeJB3tUkmLp2kQTAVn4bwtxvzecoWqBYq54dbQwNoie8TcjU8Q31cDNvp",
  "key18": "65gATWFx23FgdB3V1PoVTxJHDTbrCfsbyTsCmYP6eKq7gsFou96QQPFq1fxas5NYWVRBS63gWDh7TxVTsfupf4fC",
  "key19": "5sXFv2fBvgdFCtrZ8eA9oWeh4x7MPR1SYHbD5ziiDAe62UNZ4cBt36quzEELZG49L599kSqTpNPfQqfq5iemoQ5m",
  "key20": "5gQzybgQYKR4fs2F7RkVXqz6BSivpHEF8YDCizwzY1WzEPsHsfL5dwhk4CgbPCeALTPCvHpRWqBdFbkZMXXEZjwP",
  "key21": "4qop4kF5EB9P6qWc1qNHFpNWGwPHdik2g4wxK6vtfgoiBFrWjP6mXfA1apUnsuqbMesgDRJ5DaKGo86bT8umPXSL",
  "key22": "bUPWiZYgk4TuxoUS6r7o78szTRXHvpf2B2XJjxRm3J7K7n738hqC2XiH6KvNQFkizN8Ek9jtpiHXPg5AYpG19r8",
  "key23": "3DPyS5JR2emgCdHxPefCZvJhqNo9CGYAeBv1RcZGiTjRk4eULprwEVqVYb5GnQPj2nU6UKLEiwHCfmF6fVTYB9Kp",
  "key24": "5tPWGM8Fvzr4uCuGSv4em4ca4ZLDXUothYeJ3r3szw4D1FPQhUmLqx3hSdQFTAC1SWY5PBZuhXHBWEY7L9kNEKDY",
  "key25": "2fuaBFShYV5bBL8GJY2dPuz7wdxXVue42LxcWUKPavLcyo9yj2PXcX8EdkKM7QR5hcSKRDjikjJdHyo4PP8pbes4",
  "key26": "66pQt1s5GWV1dF8Hj927JohorD9AtxZ4pkDXoSgJ88nowniuV24rwM1XKEzzCdZoXjanzyuchdQ1aEELZy7jTHMY",
  "key27": "2A7oucA8LpZzcUeyhMqEB9G9AoPxnhse7qr6TaN6ZMzBcwKLNu4Y7wPnYeQnkv8apdDUQpuyeDcyWpey1QvWK1uN",
  "key28": "2hj1JqXQQChhZVv96HpFCzxhnEJ49fhA1bj1ireFeHzq8G2T9MNSxQxfwhJpqrBBPn6NRCp2CqdMRPf8qgQBai8N",
  "key29": "3CiVDdSP7dR3jNA4hRvqP8S1bGzHsdNvZWfMJs9wujoFtWU6KUxpkpgqx2bhArH5XuqYSwaTZKN1RgaUp1hPkLKB"
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
