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
    "2fSPDsNUZc4mxLYX9KWtt25v5xzVFiUP1YSbcXq3cc8L2HvgYZSRz1yid8fDvv1GCjFTSoz22eSkAw5n91S5ekDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgPrsdj6VtMi7o6YAkYD8yLHuKdaBnhdUguLbLTpkDP56FcoPNHNAZiDLJPwYowkmHQLtQw5R7qMypX2woPca3G",
  "key1": "2V9Uwefb4bPzgohjpZnuysP3sHE1oAbwxEK6E2sG45Sn4y9wcLRewEuXyEJDyj4DZw9DTJEsc8vesbqy96cDDeiB",
  "key2": "5xNm1m5BHv273B2agKSjE2zpATJsS3C3bRQdSyBfLZMx647hHjiNAWsbS5UVLjT9Ad7UdCTsGART33t92Ho18Ejg",
  "key3": "3VrLcgvRQZcwjBtTCBjGNxp5Ye56a6tLkKke9PyibN4iBBMjz7HnbdQaEPgQ342hULJYxRevFqCShAaAbuumRAnu",
  "key4": "2vwBibjhfJf9qNmtSt7KhWq8xfTECoGqYqhk4vmxYuiYqGXudjuSggsShZsW32VHTdE4vwNLc47Z7f3Rhy5s7WkD",
  "key5": "43cR9H1pfS1QCY732RpsP5PLLwi6QnkcUzRppHvfX2bH3n8siwAxxcE3ERFx6ZaHzsYkSLg1e28dRzR4XiaADBgX",
  "key6": "52miket1hDRUKhXuXS8RkpkWxqdzf49UQqR15FuhbHEGbV91rR3PEvgTQywkqGawQPuMvqToQ1E3umGeaJAw8nYy",
  "key7": "4UGDzXp3Be9bqNGncMJkW9tPg7rMVquEGQDgfXa5w9FE1D1YX6rVihzvATevmsBvfCZTPQWPVyL8joTT5yLkgcdd",
  "key8": "KA4bmfpevdbMi4MB5xQicAuvLDrrv8vwLyWA5nCu12vgYFFsar17KagEYsZ5aQipRVUfAxv2hEsUzt1pVGQQoGT",
  "key9": "5TKDQKFdM64mtQLtEKhsRJ3WbwitDsJ5Zw7CCmJyPFnyNckeneohqnhC1CqraECzPiyjTNJcB5PEVmL1FB1TB1KA",
  "key10": "4TWhQYPYz2ijmYxxMkfbxA5G5ony79dZvQV59dFghR4VvwoFKfVQUjsqvuy4wPAqZy1Kkj6zFwngRt1SaoRkmqHp",
  "key11": "3zBvsxNX9QeKuKy2JxUpGxajZ6gpW6JAyvYa6o6eKHgVsZdQ6FfvfqjXFU2PsFYoVyGbaRWkVoVpLcXuQXq216Rb",
  "key12": "32mBeqti72gtz3LfLC8ozVu4JdFsyKJx7k7dr7NDZk85x23ojFb1SfJv5k7bQJ8DbKbsrZCNgCYBM7VY2gaDXkJB",
  "key13": "5X3dtzvci74ZCqwjdDPpG4apBYSvCooWcDKGeopyxczbRMBkkFXGKatbLrYA4X1U4KF6ffsxnSLcft9yDJ9fHTea",
  "key14": "3cB3g7pF8eBKFu7SSCVTbm46qBigQA9Sk6gpC7We5g3Ygftubjrd2QsCrbFMZjmuWxU1Faa7btaMC8Rev59Do8ev",
  "key15": "5tTSMevBMy6LeFpveTEi7D9mcbcLXWFzAVwzpgX56a5QeBonbYXNftRDP79BPqKJj9vMb64zkwBPsiG1RNGaySkV",
  "key16": "4yHK8zBDekh77AyFKSjRkpqYsjurKDUieajqFkgJnXNacoDw6KPAWxi4ohoVNdDiGf5pubiY9bZWsJxmmCpF8Shd",
  "key17": "bTN6KqBAAiuxjtuR7zgwrbJquS5jnjo9MzQW2pTzWmcf9BfX1xhPmqKXAsiPzmN23Zc7oKZGrdwoWD1SUsCKcBH",
  "key18": "3NG7Ai1ygqiHEii9416irNqcae7uR3d8pc2meSsuegsH3zrdfYM5MzNUCB72rFdjuwTjf66zGxV8bKZdbye3zEAR",
  "key19": "5dqYZqNRWtFUCCppUSa1wNT7jajNXkBDrLHMsbx82M4pDiEygZvBvtprAqhNN18toEMwmz1U5FCqNGWy5qGBChQN",
  "key20": "2Fvn12NpawkfFVwPRL15odDdgZo9HVVspV4fgFfkpfaV6nzpzixBpeD8UB95y7mYhsRgHbpKjrZNbhs2FuJzLLuD",
  "key21": "LHDaibv9cEkRPssce7PGnWA7yXq1ezDY7yR7tPvy7k1g2nRSXodVEXswLEjPxwnh4ZVHKKwzEvCQpLWbovLtyu1",
  "key22": "2ecXfFCQkSjWJtkS2CbMvYQspnLWfvtVYhUQXuu79R6NZ1R3zDGqP6889GVHqZZ1da1SNsNjkic8qxB4oje55ksb",
  "key23": "3hx2Kd5jqHd6gegzzdUPfSLykMnZdcSzRt1y5QawkQNXEMiscnqutyCBBhX5SU8bcUv4GnCyRZt5rZkdhpoupom8",
  "key24": "38kRvvUCAs4BRQqNSyFqbCToURSEQkn6jcFZDJPwMaC4BVZuDZcMkjPf8mPJVCFdUX5hrHP9qbbWxprxR9hMhRGL",
  "key25": "5fHS3AqMe8c1Ctie81e6wFoDBw1qRqWATNKFBdB1cbqFTyBH9ZgNc27nCs4FZy6sYbd1WcGqJcFgsRj8k97Ak7Z1",
  "key26": "2kyD6D4DM4bPc6B8q9sV9vrfkRqdUkMfTTmVL8nnRcT5UTroByuDhgLLgTvpUdxesTESjX2uiFPtvz9dsxy4NNxY",
  "key27": "4UQu6dwdn68XxiBECFjzqemvaLwf437CBooy2PHSnxRU2ZvPXzC8eDNzSsyTjSBNKmEF16dSvdvJavYKf6nM9Cwy",
  "key28": "4d4bCXpBP5Skcc7b2Gc6bXgYE86hA71HEgLUQjWk5myx173rAkFLoayJ1AyQr1CJ4UrkkQtPfGPP68yALgwk2JNa",
  "key29": "orSsVb3DufAKgThwZZxv26ZVtgNNVALoiHixtE1XanvAkhEADqe8u3tqtUUgbSnnbitBSJjsuhD15mj9wUFtULp",
  "key30": "Hxe7zZDjZ1MVzhJ4Atwe8vmGYsYYuTRToZaJNS1vNBArea5ZDJYHURUhxURTk5aPHUD9fjvevqyReCYmKzwt3xq",
  "key31": "5UWS8PkPqf1By2eCDdBfhz3U3aDqmeFv5KfbYSntZMquR3u1sXs9tiP3tucxKg7SUBRq6v9VZWsVk3yvQcw8ssWf"
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
