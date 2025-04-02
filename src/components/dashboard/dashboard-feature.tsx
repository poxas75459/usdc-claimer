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
    "3TN2rB4QcQZdiKinYJ86rjyDuS4k6WAJwrJM2gqmmA931HTiRHcqBX4fiAxUHXtn1XVVYHYRQDcGD39SYthaM5Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCySBQsbHE4bVNqXabmmqPNwkCe7rRG6GJ5jFKGMjgiSWxVpQ77qKYVSrKvA1KDM6GCLQBDVQmmc7Th6Wrymf8s",
  "key1": "3U2bCv4pb12aHEqhgL7gz7V89gci8aNpho76sefb4LB3FKRkxyuwF6iLAL6fG9XDKC4XWGStg5zZEuRgFAd3vsPa",
  "key2": "3JwLagM9eumYLT5BrFCTqbViVYGF4SLdbPAs6cpAQTsjaQests6aibf3cbtrSHRhhgCYUqFswf9YoTTJUtH798oD",
  "key3": "4khDUw7BXdFX1KVniveC5y6o8DbGYyJk52yExW76ME8JoGyrpbasbxjT53LnCNeoYrn7MisAVUcwoe7e51YsLKY3",
  "key4": "5BPwg8dojUo8XCwEBPt4Lz8U61Cf9KoL8Q8Yoh43g3HEaq9o5R4D9LRxS7Xtf6kzfHpnvxwSga38Mo3ErcwP6eoh",
  "key5": "MsuiPZzo2DswDG22hYXezePd5KMRV727SnzigFgLcZcy3kxT9Tty6V6BYeEPs9VNVJD43hVAJkQG74HKF419TEU",
  "key6": "3YoyktG6Vz7CHqHWtF7cRPkgQy51Qk3Vu69rdzJQzEcwYPDysy7d8fdcbd7aF5yr9DfPZh5UcTeGPF4zyaJ2wZwD",
  "key7": "4utXvNVSZgZ1QZpetKUZRmM7DM2NnDPricA1LA6KdDGyYnQjFKC42PkgHyMWxtoABA2SrPEhpUCK2H4AzY2qN5L9",
  "key8": "3MCpE5Ldsz98TjotdfNkPDLaVtZLqw1v37CFtrJ2Wf2JrbWRVh4XCHi6yydoSjkrRbwawnxH4GpPkWkLUsmVzutB",
  "key9": "4PWy65yUhNpsTkc33nyZvguo1nwFD33J1ZS2UYdhge41sWXkcZNRNf8fdfohsy3mFRy5YMn2cM85PadEqJRLyYCE",
  "key10": "pioLoeRyaGF3LR6e3vU7KYaNhJSFqBsbNiMaWuvvSZBiYN2cXut9zsXdWinAL2rQrbowkMBANn63jkdc1srbHZP",
  "key11": "4TRwYGXP1NHx6w7FDAT2ADCzQF31pjtxo66LmfDsZABN1wPrNXduE6XUJ6c1Nw7SReHrFdgzLZ4utJCvvY7gGXhP",
  "key12": "CHxxcfhrMZgXyZhwiTF8d7LYvFx8wX2TdKGRqF8Z5rQxrArFu73BWgGd3jkSxwffnEQvkDk2fWpsc6eNsMh5aLh",
  "key13": "5i9duzLWJ5RBid9VpBKVnUCJk237apg3NDh1qp8Fo7oVLBXZagb896ji1iCX7GJBuKWUvQm6oEuLP13CZ7fKyLNo",
  "key14": "4nZ822nHisK52meZje4j61Ly564iK7VsNs7oqCPXAYtzD8QPgRe8NU1AJ1yLhFZfV6AMKHbVTzSAFNuc8VyzyVJU",
  "key15": "4zwrQKset4LXQxj7V4AQhP2YcVahCrP9KATwmctd6xJ6ttk6cBnkW7zrKfGnAKTCEwammDy9SCsUKAy6598CDBKx",
  "key16": "4JNJqLunhJfW6fQfo8veTGu2ujtBpzgRD2srTXHauDXB4GgzupHVxx3LNoQrW5aPBctHrPyvaAeZEM4BHd7ec3rY",
  "key17": "1N2FyQ4D9NfSXTshj5EmHCrVQWGmpHBcDLzJWmR8xaZiwv5uAqQ6jizN6rt9xk3ZHZtdhVttDbdZfuzWo2WDyFi",
  "key18": "5AW35yW4SuPBtuLgDMcSydjm6PN2WhtrdpyqRLCJMnqbMMGKoggBMgRRiP9t4LLFmidMtZC7QVHhf4y3PFBUFTAe",
  "key19": "3Ung9mLx4sHS8PMxsa31pSRjaWxhtwzc7uN9ozjYB6aEJovScu6UAF9bW7j9f3HoPiU2o9ftmS5DWYP1DjSFZY26",
  "key20": "2rDurCofAHPjhJpi1EiLbXLNcKoowhLJuLpWVw73ohrC6Ccr8KeNQ8CAq7hGMZT1QZRenf2wodvsrgqZhF8za9LT",
  "key21": "38SRbiP8KLuF5429peyMhKttcoZbxwQ7smnNkSTmRH6ec7sb89RNSiW7sKTC6MHrquQzMHo3uxz1P5GZbrJYYpzg",
  "key22": "54SQWg9THYSQC2ipVaJKPzuNLD3ghicnVxP4n1uhEyRNtsBUY8SAfYqtiUtwV7gTNRaW8STK1H9iGJCwyAr4h2eE",
  "key23": "296LrFxGV7oQgMYwNuHPY422pggfAF2tYBp3WbQPPWwdtwYUx7VXGyKKKf65m1RkhUdHUHycQXAmAV7B52uxsQcr",
  "key24": "3uTwXFBtQjeVntVqsdU2kFiQJrPJhq6tGuLqcUeHqDxguqkEcwsvZ2joUKVbEjXxm1zhEdc96ZXhuNU1dea9J9Qb",
  "key25": "2pFo2HF6wZXjSyXSyJgwa8cFzEryXtWAgVskYzDaqEMkMWEyTXAy7F28KF4g15BdvEmZQugEHX785hKME5hohW3o",
  "key26": "5zsgBjPAuZn9oPtbeX6KQyMrxsUPAgGc5bE8skqGFXkEE8jNqZLseKxDrVBWZLzCEA7PedLg1wCuEjhSdLChNBhu",
  "key27": "2xxBMMjCeYWKiHqp34T8fLP2DmciCVqBSES718H4cyP4rkw6fwhyxUhwSJ6wvuR2c6EhnzLaNLpBcZcHCT4MSeWy",
  "key28": "3WVt84tcjJ8pvVso3p3m3nTofLEMMEciscWorCSqd5PL8kzxWdZSQ4Auzfit7ARpuDeUHwJAJguoFYdfNXf8gUkP",
  "key29": "3WddxzbKBT4CNBbWCpU15fifXJegr4uJBDUL9U2vjSRd72JgpsSwtnXy6pzaugsba67mMVh4FBLaAwYppS5K61JN",
  "key30": "aja29RGTw9uYEm5yvRbTXGQvxxAJK4wSztUdXTRN9fhkmEqr3gdpS5Anj6hovWK8zyK5T5URJCZ9W7RcWfKb6HX",
  "key31": "38kbGbVLrVtG6Yd4xbC9ezpfXFL8cabHWQJor6MtXKw7oQYoMeJseor79qh72HBnQyciKqJDqugULX5bGVb4kk4S"
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
