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
    "dAqrD6ExpYzWR5E4R5ZB5zRoRpySgcW9n1UYWrFmwMfux9nxugMeppJL9V7AhEC3AnceZfJaFrfVXLe8X9TwkYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZenyBN83KRknhXG9tWQbqhrG4jwJJzzEtC3LqdUCz8GaJze8njCE8Kix1m5aJcjCQBEQKTjLZdNjjK2Ro7UYCUU",
  "key1": "48SjKkqj87mms7sLW99x29vgfG4F5pAJac7hRkCokuSL9cB1biYXPPEYsWZRa3BAdPfXjARfzzm3EPpgDfaVj5XX",
  "key2": "3AoTHFA1EM1LhATGRj627YPbou2kX1LorHdJWS9XhH8zM1ZkGcQksc5R2opVcknFRMDFeCDJkDfW1Xm8nUmpcxTZ",
  "key3": "4rK3TnD1FQ7XcNbbR6DM55SyYWnmd7qHqoT6exmdAykbQRU9quNYoAUrRZwFMWRBDutP2x3pbe9t8eSVfeiYzomh",
  "key4": "4Q7MNCUb66JNiDFLFGRwdDUUaNph4WVwfieZG7KrxGESrZURsN8RHbNv6bnGkbhMLwBqUXnZc4mK92DBnHbgk1C7",
  "key5": "5r7XVpbUmF6QuK3GtjVjwDHPQvG9nPjSHm7NCA9qNNNFRQcjMsZdieqrsoPZkHdAMfXwEYrcoDaHW2V4zTPpZrH4",
  "key6": "3ovTSoxPQRji93XgbnjfPfxaTAx7akCngMCpd56xzgaxgrhrTCZi9Zi2CMrfd6BReFriBZ3ca9zQmpKTx32B5Sj6",
  "key7": "5RkFCnWkDVKUKd9pi8SsiYk2wXLrJioeQLXA5Y3cKqCAT25JeuUMLjea5yAaS5dHTWvDZZ2YSgBqL4jZjx9mzyfu",
  "key8": "2eCgvg1BUWWubWcXdGFx2g8vLnprHFqQSptsRVfNZCZ1QnvYbtTm23uqQDkWeB8whaR886hTY9f7hxtesMcxfman",
  "key9": "2j5dVxndsBzSK618Jk9jBfDiRwRCNffyNP8SPRiWQfTa1cDoEQWqPEDkj9tCnJ7zfGcdZPGBQqRM62ctC9qtP9Lt",
  "key10": "5VxRyBr1LGjD7bKCWzL1tEtqw4YcU8brg3vBHgRiLZRAuj9mPb9DSm5QHkdCuaPEm8hekEL9phMQH4MqjGWNVVTC",
  "key11": "4wM4P3MaR628gYd5EJQkYD5zRPfbqxwgek3PRxSLEDaAAYX5WR4Rqjx2w9X8sgs91N2x1acbhyMGXqEE8jTCJdE8",
  "key12": "4xiaksqFCwKjbJvdRxKWdmGVFbBJQLganrrpX6gPbnyFW1NyYzf8bsXXAyX6LRqRpAVCifv6F4dkb1YPp5MmTKYG",
  "key13": "4XiDcNn7kjWttfcZXjaDDBSyfUgoei5HXqam3KQxMUMAn7ixD6mcP7WZ54qeZp69zekMog26BA9KX2j9FhG5STVb",
  "key14": "TuXKMDykf79sVg5gCNnun6oGDzGu4RHGTkhrpy9kkscn1Q3DzfDKvDiFSUpmQz4vN6cqyqYWuzaXPBnZmL2cE3d",
  "key15": "3Deaw8JhB1APsK1kZcHVQm6moAAarR1L341mvwC2J9y5ibDZkiaUjS4kSpEZRAmuBEjqzByk2KU34T2jkrprFqPv",
  "key16": "4L2hvFcp2YtfHfBYC52VtunoCwkWSweAVyG7oFBN62iJXZBcW1bdbQYZuG2qvRGCqoox3mQyJjW3dG2XXpTqGRa8",
  "key17": "3X3DCQyxEQf4u44Xjyru59WSaZZWAbQ5tHBzPzCKtSmjxzhnnwvHT8new7CTj842GvS8PUPyACYWopjxLxvY1Hsm",
  "key18": "4wbqY1ycQPBbWk3NDtUqSSBeoiNpbs1GS7NVBBe1zX7HhzJn6aCG6SwJbd7MQhem4NcuZfjsGp2TpSsuTnZLPLxm",
  "key19": "44aZpZxU1zjeN3UfZMUmutLAJ3DfoM6Srs9rw7mSdH9MT8mzHnuA3v6A9M11VBFKMJLQnGLzQTSiBHgaouYwvzEp",
  "key20": "4te8LPScDj6m3xFjDiR59MvQoNzkMrj5yUBzqoeeWeK3SR3AEantrunKQKLsdCogC7pu15rH3WA87TYSR4yAFwv9",
  "key21": "5yJ66yEey4z3NmCwSAJiwBN69LLfsDmivSztKsk72RgxTVQG6F2DUt5kjL8cS2uT6efSLPiD9cfQgQj26rm2vpoK",
  "key22": "4vBJddoastpAgbzA79JwWpddjQt9DJBNKsN4ZxykdYUfsZ7ARZpFrBaKLu3dhyHXDWCMzSRuqLHKcNr6VzMg4THx",
  "key23": "3VrRzCKNSzKD1mgK3Z8DeHFiSjjnYBWjsEeMADnJMU3HjmLyzkef4npnATfEBVoMpGb7onaNPQbam7jmzh2A62Pk",
  "key24": "4vSN633LnWQ7rkaemKQJVRhitnDJPnx7RSf1FefazK2PndktBeDvdv21BRC7NYWb7atUCc4eZxdi1kgXuuVvHMKX",
  "key25": "2Tjz8R4XkM6zLPjv6faP66BU7Nbi33AMvcJUUPw1V96j9ds24XAAFJe9pyMA3LczA8yWuBFU5Gbipq5W6TedqGRh",
  "key26": "3pE8sZTwXjfx4TBD7BtD92Pnhs2gv3nTe381ZYiFHV1TbgdGy9iWvWELneMj5awdWj1A5kYqv7UiEAsvA6e7yVJ1",
  "key27": "U23U4otyJKkWnndFksbTNaGGN7JPwY6P7ZdeGSt1pLT8ugCEVthjysMbYkgnYede5U5fv1PVgjfxurzY4mdkz3a",
  "key28": "5bqpnfz7mesSqtQPv7ajag3fmUyVVCAea1HqFCy6Rub9F8QAEFumxWz2vsCdGbaAe9JWEfaBtJPrTovVC6vj582z",
  "key29": "4WBiXsB7wnhhzs5TCY8eeRiZF7E1jLEnwdoLbjFQJ5wYSgJhFnthMD5FjDjX7v1fdyVTUY7NzrQQ7y6eE75SAaY2"
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
