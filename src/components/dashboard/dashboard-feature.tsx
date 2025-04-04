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
    "gtRCRDqf9ztu7AQ2HXdYRHpf33ndafej129atPdZDRymqS1EMWkrVWjArge7c5E7vBexJmqBWhesSLN1pjNMNEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALiuXzBpu4j35XyrCkWHs2RpbCPyzY7GyiFgeXqeGJvbnesiFJVebKYijgorwQQ28TeUxcYmo3kGAqdiJZvP2sP",
  "key1": "kCiRexRTnrRnExpWjtWhDDUrrq1tMqSYGQYkEejHtxkzsh44t6ZFBf5py2oxKj4TLWF99WRpwQsxoEioZHhXmZM",
  "key2": "5pEWD1tUvhpzVPA16A4tmcxZUDo6MaPbx4bXiqnWJoxtqNBj6fxRsjJF7LQ29CPCuHP311UEgGFknpVUFdyFZCBr",
  "key3": "58qwYqaBNQSxz6YV8GqaCRh6c87rMKSki3wAG9thhWLrGQ5XpB6BJ2rhgPKg39pKYr2Y72MqWPs1mYMcpqwYGju1",
  "key4": "3NYgdBUy3dzzd3SA6wEjEKSyHUoDYhMjUuASTjxYohvMnePNM1jBPFEUEkNzrRGFKYAvvupi31SqPrQZjSDQDe3f",
  "key5": "3tpqrmUyJDTtEeShpiN5U4GPHcbxaq3KsCmTZygWuM9dSX6FgHwPdggwrhRhpbbgTJetuPvQhYumtbXno3zMvPp",
  "key6": "4pWZ3DxHfmkzYEmhzLgHCtHP7wyXgYVarAJwzaw1zhEJeAtFzwMvfkwDJVdybfuGnkZadb7dYb4Xg4Bjj3VKD7Es",
  "key7": "64uW3TK32UUU7EKVkxuSwVAJoyJw5phkwCN393tbMX4T8V5gtHyiAWCQbp7vNmJSc4yrn3vRwsxXdbxvxnMiRM3s",
  "key8": "3pkjjvwkk6imiyMfKHQqvwERW9ot6SpuU1mhc5UihYzKRzBmcentJyThqtYXKh4JHvpRRVSSN9m1kj2H9TKH5qS9",
  "key9": "5PbuLgL4cYBfzniLoFKgGJWaeS2XUQq5DsA5TwCoUKngtiDxKpKGqAv9Pn8qMPnvSC6vypLAYAjD7UuUo96mqgTm",
  "key10": "4BVDaMAFhWwqyCMVtCaE6K2vJV4KpepxxsawTzhFSPK44HoAFKxrmRkYUhzVubgQ3y8iWV86TzgaVukzaU2wbs2u",
  "key11": "3dXtUcgQMX7Yaw4toFNMGhsJBLc8bKzFwAHgB7EDAkgAVMcFpkJVtovDg7BWJyUUgD6NLQCD3fS3M3Z1XJ4jyJRv",
  "key12": "3yMTcYCCpR9qvY15Fkd2NRcpdcS9oshPqRvkTksLiDUTXZAWaqPJcWZEhEgK9gbutjyTwuPhNoT9x7UnZx4S2Lxm",
  "key13": "4V77pdEk2oFhNcqsWQySToVestsAM5g9DC7jrG2XVWinXyyovmmFYCp4ThJd486oTHE3aqDvWVu2L6i3kvnBTTxb",
  "key14": "5nothJsbrTLafd6CephrxyC4uGZBHMvJ2T2zSYZpNtPjXsPnCP1GFMvpt5NG2XruQa1rEGCed6ra4CW3kHSZiMuh",
  "key15": "Bi5RhfF9ve1Nzh5F51VM5zwArDATYLsfxzpGSFmwohmujcud7FbbT4UJ9AB9s9m6i8Mm74hSSnPhQWd6F2fc2RZ",
  "key16": "38tXyJBKARQLJzGJwAX8JBWpKZQHdP7aaHXMH8uXDq18Gev6nGGh7AXagFuK8YHMnFCXEKVn841xCJzmVjBjw4XC",
  "key17": "5wxN8Q5kA63nHbXa7mHZTwYdk9CggwhYPDSKoFYdz5MShFkT63JbgmzNprsxMTDK71TDfcWebW2mLBwd5aA1EWms",
  "key18": "2EzXTLwE1MLX5jD8XLAqePQYrGHDYErxN1V3yCMrwmxpjn43XtbzGASxnKcnZPwQPYYrBPXmtAD2aSpvrJXVuAZS",
  "key19": "Fw7Tc8XRWaQyorXtwUcTCw8xkoYef2DcBJsbM1DooyuxrP6Wyve7G28jnZTpi8Ar3J4B8pakGEudFRjzcAF7qZK",
  "key20": "4X3TexWDzTrTPveX6dxFm2ipZHaWTybRSKiXHc8jXDK5UgtCHMVCdXX7sRqsMvUeTaKHzybVcnw8B4y3KgX98ukw",
  "key21": "4Ew2PnWDYyYJuWTxP3rwdE4cvfgPgcUrEXoWwicKUruBPzpE5BRsPDuHnzuCDiWTJx7Pxdarim8CU1qV3pjD2wzb",
  "key22": "43rAff4f6GDjzRD73ieuAXD7gMeE79HTPowGDP32eVDb2rBaMkdkqdGLwsaDo1itdVLSjkLkAwBwqWaPFDSJipUh",
  "key23": "3Vaxji9WsUojY68pNustEwNr26afN59KmPH1oVV7w9RwmCMeU48eRR7vEeYFmk2kyyMA8nWtV86e7FNjLC4rU5tk",
  "key24": "2NGnrcYDH2NFoXigQwRsusQ6WtEtAUK5Wp9HF6TAVhPGGMWk5sNHufJesbbwMBPXiEFVCwjFFRnqyYKE8Xi5duAr",
  "key25": "Qy6NT4ZhD4xqCduUR9Uwhe8HEAkoSKgwRFHxtKueWNSYKNdi3jE4pEWRGLE14o8XgEUPEmjBPU2qbAB6bCWtsxV",
  "key26": "pKq9zaBvgqvMetPfu8ox9w5bKeJ5nJi5TULsrK1ZJsYa8V7qRVj3NtkvZrob9VZFXuy2XFzaNiPCbrzJsi2fGiw",
  "key27": "1QfAsy5WxZqPR5gXNDuzgt6Tyu7okNPQMbFcpCQSaG7FEGe4t1RnRYDW8HB6H2vYXnEGYMgTCjPAdd2H6do6uC6",
  "key28": "4AejUAAMiztyWQZuKWxhcbwkiiaEeUpuMkkC6PNFkBxN73qTiNjJQXXtDTP7zynWe5UoWkPTnzvt6rH5JGFZueR8",
  "key29": "4bFxb95brfiuHXjPBKkhEEHnf4jeNm2Fr45ncCSmNjvrXPrjcAcqetYvPpeZUui4VG4scPVmsTz8wbgrARNMqE8h",
  "key30": "H8etJiFuxxL1HikKQFUme1ajsMViVauSCsMGuJwCktxcS3RXcC3xSKJYxBwkTJXgTZTne92r7djjfoYpgLHtypJ",
  "key31": "39Wyc2GWxTb5gBsTFsqoJbKcZ1FUyKMrcqwiGYwrPpdK1LGxKG3FknJtykg2CL69H9PQoDFA8o1F39bWqkHeu7Xe",
  "key32": "YUZhgYC6JACRT2ctwLwdZ5CiKJScw9VUKCjQqDkeqQerQftVxZYfZieXrdkDosUJq4h5F8veSPmuBDErN7bVoie",
  "key33": "25nXGcXdNYfszeHGevs1HCJ2aruPoU9WH1awVHsm5ucTbAgxXehB8cQfrnJhF9Ea6LePq8QQU4TH6aNGTbyf15UX",
  "key34": "BYksX1ub1JBtnpXY9vjuU7r3B4HdyzkzApDToTmYqpYDghZQeuPJ3gPUjdnZ5aXCEAD67TUKTc5KtA1FqourCSN",
  "key35": "41TmYpMrtgGwGydXAYe8HR29ULgzzEHERfXJKapR3xPGrfDFW5NFhBj4RChAnzTdJ317zfLbSR7wRUfZH2ZBBrXD",
  "key36": "4Gk7JdkAqPuc5buN57f5dpZSfAcsnhV45nDLuATQFhVv4Kz1jERzumNS41NhxakpartjdpKNZGFuUtGYoM96Emqw",
  "key37": "4csTkdw4wm5oCcqyzKTMYLUP9RsnYKZt9tdAiH2fQsYSZ4Yq1FTUTnHN4dr4ggRV3m2RTtCHzc5cG7yfSmww6Cdd",
  "key38": "4NoT5QXgWF8BF9MLaLrRY9J2UVkWngZBnYJ2YhzY7fewT7p6EFhigyEM3H37HjYDbZ8zvKYxrD2FE1z1SeWYbd7Z",
  "key39": "2zJNj7BcAkm9vVm28BPB3VudbWwK41pxurgmWu2E8tcNBZwATgGeKvAZKnXcP17494Hrjo4vwtU53Zx4dBY9mNZi",
  "key40": "UzUB7XohAvC9WAd1rY9GgAZANrrP1tCoX4xNMftARWnWGsLGqepBXX4DZMxnbQxrGy38WW9u2L5V6PmkfsJp4s2",
  "key41": "3gXC1M7nqpMgD2o7Bqu7Bk7PFjeE3uAtiJGwThFjKXDwNSiUxm1zktmELAhU5SoLbxo5mjQNwBL6SLNtHYH5fA8B",
  "key42": "3DVcY5osdkuDkoNtFscaSgPBe1MxVwr6nAS91ZHbZQF3D9cD8M5MpRkD2sMWnzk9i7hY8Tb4VpVESQ7ryW5yYL5U"
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
