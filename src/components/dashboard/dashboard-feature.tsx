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
    "5PSiQvSE6FuZG29H2jR3KKezVghkSAKsFo3Shtsvbn7YHZLyKLnJ11WB9s2VgLGnR2QZ9AjQssHAJmBvoA2mnz7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49R6oStFzWTppQ2r7fqJqcZRLA2ErszBJSvHKVRuY9RwP5BTB8iMVTcrDJxK9zjwtR2rGUBe3pNe17DLyhcMb2rg",
  "key1": "3NFvMa6p6ZZfSWhi3GusEuXBHpmj5Fv7J2C3oYyNnZQggEomCAk8L2fKwkrJR8L6NFxsMGo1HZ9L1gcyDoqGuW5u",
  "key2": "39oEC9LfSBCoRRKp61cNXzkW1CNw2qtgvg5shFvce8Kt5wGpsmwKtXHhHLWdc1esU1qxCEnnpZzWPejvMApviA3K",
  "key3": "4mMraYo8QW3N9mXTDf34xWZTHjbVVpwHSj8aF3iRVwbRZobqWzpBdncjVDm7Qvc7PaqV6K1hj9d2YofPKUeEosUt",
  "key4": "4o1kpzzgCQQzXz3WH2aH4yUFEHtBF1oVe1jBY6meqJk8qG4dRdjFgR8jLfPkT8T4N8csD9YFLERay33igTe9WtBt",
  "key5": "5cSBmxFL9CXUAfSCA2LK3oq4hzQunwgf1wG4q8wStdiighFiq6w5qv9qUAosVpHMqrdLRTGjPhvySPTjkdMqJgNq",
  "key6": "JbZC4rYDq2Zb6cGcCMUPdy6ych6EvrqPkbkjC39cRDWZgkWfvc8tDFhPT8U7mHtgsVvaotvY2EDdFXKFBFxaEzf",
  "key7": "zewhyZsMsqNYgyZ2ge1bNEdbdCFRPzMWRAW3AWtkRHFTHeZ1WexqMG4vs7HADLpUmmpJ4HEyqH8qNkFzNBoG7j1",
  "key8": "52XRsSthghtVLXHKa3wc99Pu9bbe39zBRs22PYP6YfwNXuSFCnkaFxzm2ujXydDmNi5eerKxevnSVMZoEfke14fa",
  "key9": "61CuBH51evn8DLGMEY5ZvHbafSdLW64JbQRfnYJ9DDjprDh7djFQYx4aUCopX2vGTn2sztm9tYGweaJ3J6HtYHs5",
  "key10": "3Bbqqxqp2m1tkS5aEK5HGsQTS5e9UzkvXTe1K6C8pnJ3tRUsafXtYqLbrLE79kvyGKPNjTzPzxcJMVX7z4999iRw",
  "key11": "4CYEj6cnW44JX9wKwXGzSYQGnCoDUpTq8qAnbiCQDTMyRWtf2CRdCbKU3ZdY9NBKw7m6WEYdCETERwFdPT3y8jim",
  "key12": "4h1Dwb5VWYRty8uUEKiWzcpYVJUguwbHK8Ponx1f6FsuyjdoPM9qZg4oCaBc869eaMhYehpRXn5xyrfSQB2vKPCy",
  "key13": "5HdhD4TpLuDHXV47wDDXjsnrZkZFm6U47t41gdZL34ouV9avHiM69AAXZcvsxdjLUnqR4mmyjQBT2PDtw7BsD3dz",
  "key14": "2WKuUkjTTr6vZDqSpktPvgRb4Y3rgTnq6JhQRjnawJ8RrrBuL6xQLHL63B5R1RfiVtJ7AFJyrZWEgiEJbnwUQtTM",
  "key15": "jXsrgPf3EnmNuUaXQZqCzkyacjmHSVLFHeYgW1wtWTFwvBqkqXgeTu7p4GCYd2nZ7kZcdh6SsAzeZ4bnrgTEgKg",
  "key16": "3bdeXfkocWp7PXSyTW4MyreAk5RDCUC2NSHESTgTU3j9Q2cQpkLY59Xv2G1EfYxBGTL5asYocW7GU4xhEKWmnXZi",
  "key17": "3kFvZGT39GKTeyRcEgR6qBxcdPQZMzkdZoNDfyUS9CAoJ7qXCSPceZaU4nZUU5QvbmaUL14MfHmw87sVKdSM2NSb",
  "key18": "28SXr23T1PKvMpiDLPzuhtF3DRGBiXh7wmMFRsAbEhTTQLdnnNPY88tM2aeksZo5kaMbMaxaoDH18mHthbLf9kpW",
  "key19": "5RTiaFHypKDgsSvCSYvG7je3Q87eWDung8LL4S5GDBACCFsPFYmUMRrJQG9dLhXt6ZezEbhY8J5G9rmaFKoZtfAS",
  "key20": "9tyLDx3AK7FNEpqymVY7ZUbXFn4gdEbKCsrB3SbWAC4weaa9bpZJTNFWRt3k1QSxaLPUQjVBTNZ36F3sF2C8yrN",
  "key21": "21w2ru6y3Qc1rhWWRN3bS2HpZsDTt3JJ97TZyDRCbUMYbaCXEZqS9jg8Wct3zyy5UxqR6hy6ASsMwM1QvEYDSJzE",
  "key22": "KMyAQTVsnEpztBRZWj9siB4M6LpDXVu47Ndk8ALJKYvGg6jsydNSfpq3jwNCTvabbCyiNp2XQM6Rqf9bkygH74n",
  "key23": "66ucsvBiqpdePh5dPcy7WVs31G88ZNGdz5sjch7N6W6CudCPtWW6ahXrpCSW6msVaqSmTe68mrnUR9apBnnuFVYm",
  "key24": "4LUnRBUVURQBiSeYcc21vRUapWomwgb68FGgQsp8Y8zpepMCc5KfhufiEPQRn97o2PgLQwwRLQPgZW9h1cy996W8",
  "key25": "2WAbrq9vtgxVRNWgAKsfHxm7DgtVrHTALHjA4tJSzVw6DqxtXmP2FsFnopRg5Zz7yWe37F989c7zvt8DoyTN3Xtw",
  "key26": "5RqyMNkhcjkECFy6uTZTjCnHpwvi3VtVuacrMPqbcmsqXCAN3UtXR22noVoYKHbkjjSSeLv6CG1rBWetkKYnXxa3",
  "key27": "4TyTYWtnRvJkiWE4pTwQCju7NoXMyWHHqHjXbnbX6XThW6kCSrZxLo1cEfZCYEeZYXd2SJp8JxyD7JgA9wbUNQa4",
  "key28": "3ddnAFboTjP16mj2VgRuu6ogC7MZ3xoo1weJpQ7PyzT9mvFXDdjLqMmmp43X6e9pw4DgKn7ngjXjKWHM23gbKKTS",
  "key29": "2aTqv73sQGwDK9rAURYCyxCkUmqTcdBvpDQWoXbv1tLQkAr5sc4k45RMZfCsLBeT3SmUXbH74ykoxrWWy8g4VYgv",
  "key30": "4r7kwXTWoHz5inHUEL4VuPR3SFkj2stJmX7xanPBoHhPdH3wyNhcFY7SXcLUYyWcQ7sj6GubR8Cxgoe1AsQfSVg1",
  "key31": "3sUNNewQxNGu7nj3vuZfCJrumyiNwDU4tfdfAsfbSWdmg8t3a7DEE3sYMTzqNvgSDTvwvpm27kY1jjAkZN3VDeXG"
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
