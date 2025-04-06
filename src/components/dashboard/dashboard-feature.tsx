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
    "9q6dkndd343MjuG7B9Zi4G9aVkBi6N4BzMZGAQ1qVU81z6bJL8AsfzKLLKb7ANHweNfSbuSPgWDBBDDodDAV84o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QCwtDC9rcdw6GWT2kL9UizzjMZRQ4GnzAmdqAoGobFEWtrF167udjWXqtnTx3dvruUgy5smGE2sw2qfsXpKSaL",
  "key1": "3MDw7wUXtqNwVyhavxJJTFndQbtaFuD5MfBQHM9YbAtZjJdLojJFoeyB334pkMBFTQ5a125DfFa5TcqqP9Ew4mRm",
  "key2": "rXqXqhRYpsTYTy9xenjS2X8BtjVjXQGmVSPtmB3PiT1YBQrG9bt1redsUvLwhjcn69aRXjdSQU4Sknmdyb4LC56",
  "key3": "3D6iKsaR7khGcnupcDqRCQkHvDRv27EBJMrdsdToCeuawrBrdXNM92zV8Cub4SUG4tp7WJZzC5Ja6HyVJbvp9KEK",
  "key4": "52pn8rQwPJeDoUPpgZEvFqJptjJE8iRu6oqDuVLQfShUaDE1zsyggs8fLPswqokcLpgwtEzd1rSMf3WnHcyCo14Y",
  "key5": "5tEgf6s4f6aXdKf7CmxJYSeMoLR2ieB1HaX1kRHdks1d3qaWna8ecE5Uxj4XnDapmAjvuLGEmYbT4YskpwhGRUgD",
  "key6": "2BTKheypgMhU9FtcCXkxHjUEh9Hy3pT6vbCWeT5WpPa9zGE8XRiwW9gDs4J7MYPpLTx3nUi3daZpx5nNiVRsHAW8",
  "key7": "4QteZsorewAuVZL2RV9tHK4RSZ2d67fGRFxGy3z2Qz4B8hGcCZy43sXKcAgMZ3ef4pceyopd5irMhar5LmwGM6XP",
  "key8": "ojd4YcvDfPy1uReMaKcatpZipmzjWBLHUQLwY1HmngWoPgYDP5yWKHsGTDs4iYxMTpDWHzRAnGAzkNc1EVbKt26",
  "key9": "3jLqm4Wp7Fn7HYkDqEm9vkAbRhnniAbGVxMUGWzeAxsnFuLJAJTd62EJa9Ygkt5snmF8R5fLKrpThf9gqP2Gmykg",
  "key10": "4SzTpudZfuAYHYbhNMDt3r6PnTzDBTDkZURbnCZK9qs7HgjXSWb6SY1UYFoxQUxs5jPSkrfF1s78JyMum7XaSKcE",
  "key11": "5LWAMDChEBmjrXHaFEQmjE6u1gs1andbNvBKt4r7VaWU33ubPyz9CKe3khMBYVZkZqAvWSFJaf3jbpT7L8k5U6xV",
  "key12": "5WF4XW5ZrTDMSzzx2YNp8GYrTKUFLTTebu3xuopEWumVB2XZP2QPfxLzmkAq5WMi2Wwsauv31sPkbaSb1bi9vE1k",
  "key13": "QtmGMJQoYSb3jEzefz5tqPPsdqzgzhpNjnqt5ip3mKndwdEahykQSDMJaLQTejwZhAyXAJp6nWxirmsSZ3btoW2",
  "key14": "5r5ACfcCLBg1j7nx5ZrpyHpTBU9djSyRTUA6UccFwAu45p2dF7ZbojmNdy8Jmy8cEz9y9xjmk2AzBMkpkPeXt13w",
  "key15": "2kXBtJD7jMvRTngLbtpcDfGmN4bH4WviacMThvV8baqYEeqjp8ECCxk2mKBJ8FS878kP5ESshpr61AQSGEUU3XVk",
  "key16": "2ix24nsg4mWAWqpn1iRisfdJ8Er3ZMeVcRfSXUvaYhEkEWAnZe2QhBtNufqufjFy6c7FKS4aA3SQ8CaG6JHCUEXq",
  "key17": "rjR1naqPih9DpDtzHnryLP6yE1CKjLuW6FXhFY5TbwPpLPAXf839VCu7jmdckJ9q11Hz55Mbn3142PEnpLLHnqU",
  "key18": "3pm1U4679qVdzpLKsUTN65xC1p6tQi5FSKHD6VSBFcos8cbmg2eujQsUSY5PcArHG5ts3AScwY5s8wPcsGuLcDW4",
  "key19": "3oT7TqMWMmujtfrXXQrx17uaDSUp2XamzYJhCqT1PwwYPHRnUHZKo7KvwM1iibZqoSw6Xaz8q25XmiuL5hjYBRXa",
  "key20": "Ker3U81am6ia57gfNjJychCTmizwyF49eBXNc682qy4z4UmWKKUs3vywbcRRnHDwuxbnh6Qc5qf1uHUBjawH2CA",
  "key21": "7FcSFcnpcnHFpCnzM9dyvaWyci3G2ppLK6VhKrftJyMyexEMZB1TbVW7H7L3Uxx1GYzULZ5rakfGmYxXcPzaZ6C",
  "key22": "4G1p2F3ETCq95rc1xgCJAedd7UcvaesS4BVBwWfEEzzKBoJyZXwg4CM6skXSwSey8cXSLXNHH5UJtotpYbzSAofz",
  "key23": "4x4xhSmZSKtTonNCGk3RgzVQkKPmMWTLik26rNZASr8KKwSJXKv4qK3csnFutG5TKSjUpqeRRU2rAJaWFWDCmNmD",
  "key24": "4J5S8jxT1RQH2gkePQ9wBueRkPVQzvp4u9MxheDQggWdtMNpEfdmWhmQFBpBYfE96ECFkf413kLADDi2xxwPyx9e",
  "key25": "3x5X6aw3dXkghd99Vxo2TAvYCFcRJa5PtS6YhQcKGWA7w1PEd1Pdwp7Uwtg5Gv9pnSMXjYDBzG7ZQAfWYSsZ4d7a",
  "key26": "5QE31m1A2NknLeYNsBjTCcZpq6QhVkUaDNUUzPi2pMWaeDqbW8n4KbbpAuHyArYZWVE62yEXDnoTvSGHGJ99XAhH",
  "key27": "3ojg7TRH1ksf8KfCehS1uKjcAjsHNUfjPUfbyUToBAacoSU6GECy9dW7aPe7criYBoASEZt2V5uYuM6qZ1E88kjt",
  "key28": "24tTPZg4WqoLCzoX5zZwpn2ShUPGBcdwovDpYzhoGBEvgTA3VcbX2o7Hf7t98HvJktW5SMVDMWJsGxkr5aEWuKb3",
  "key29": "2NdaW6DEUPGarJDx9GU1FPxiHWBzXPF1JyCUTo7ezPqBv6zEEQhHpvbsDQnTYhyjPSAVxNF7511hj7yZghKCRSSE",
  "key30": "5V6grZwmx1BcxdaCaUKnpF8fYQKSEJ6JdLsco3t2uCRE6MCHYbmVvkcJtgXyNUnRyQV5Jo3YK4LhBjBEwKKNM5Lb"
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
