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
    "4Ztrpk6ddfMVubYi5pMtK7oYmAGLs2CpTw86wEHBKeUNUu1dAxSpZV19ortKSE9wecp7hnWNw2RdpXxBxAsR2mbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MSw9ys7FWxQ37SvyAt7wvJbUAafnkzPz32WgDJXGeKQhKNE9wuK2X4ViQ98iRUKicKv7XdRGTFRhMryFrrQAhAB",
  "key1": "4yvTqebU2w1TMuP638tbmiLm9qZjuLp13HG7e9QW9ZEijoNxqhXyYbMfhbBNrExiR2ionT9xhYMY4Ki5qCbMUErj",
  "key2": "2Q7CJXcruXjP4LyaeLwC1BnxRq1KsP4fTDY4a84t6aqjQYCtDF3FzVy8Awsc8Y9BKyuot51fLMgCnPJya8coSSY7",
  "key3": "5GVuDaUQDXcAQobWRfrS7ka1LQjNWPJfCR1mjpWnzMLB3BzWiJ7V8HbrFrwfqqRQo8jN7PiSwnxhrHAv5WE9RCui",
  "key4": "2MEWjKhA2sxshidaNU5iXRpfaxBCG6pwHG69LTrMYPhMT4Wzd1vkFbfpQ3ZcxLKsobCEtwt1g4oXy5UrFskWEPB4",
  "key5": "21KQf3RfwmJ5iJjw92jWBYRvnZqhDFxCrer9YKkbq58jvJA9S4nxsFTofkx82ULXcb8qiortGCquxY1ww8PPprmo",
  "key6": "ZHGoLC7s2j5B8K4v6QsrQkVqKvZhKG7Vb549Wu8VRmBMjzWDzr1Jo6riw4QhWjXgEYExaBaDwZ9gnjkJLrn7APr",
  "key7": "4wF8RwziFXjFMJq5sTkoc81w2aL772qddg2UY5RbPzRXUjBvJiBdj81RWbwYWf736dzgmr9nKKYhhnzjUcDxHU59",
  "key8": "4AJsMrYUr3pQEXvUTP9uoD3Wemc8seH12S6AJmX5uweJBoDAHPwi97XWACBXe9wTiVrfzfgW9CdjBV4rtNLt6eyc",
  "key9": "659asbgTEyq2D2xKS5oAyZmgANdGrNrRHzxQb5ec32BVzjWpzdsmpXW4xg64L6TuTRbhgCkLrEXYFLsWcWTkqVt",
  "key10": "tmRZPJv9wSavnouh2uXiy9vJA6BcaGi8hsqx9jxTukTF5mesGG4sGqLVXsmFJwmncG7HMijTV8xKumSeGEPaBSM",
  "key11": "xhWxwK1EYTE9vwfjJnRqJr1QZ5M5ciPvqVYBQ58weiieW6V1gP1wpy64F8UkNLcbRH796rfFdcYAi88cdG3vFNM",
  "key12": "QNsby79MM1BkPnsCT5qvPdzcG1fqvRFwfNaL5fHEVRAqLB2TqdPiZeZf4PDjbi4PEMwHMaaeyQBAuahnWBeqU1D",
  "key13": "43de9sxwr6RY9XYviDeBiyZR6oFtew45hfbVQKVVH8DvgfK5AjDyDDpB6HXoMciCr8yJvb4rK5empx9kbeXiDSdH",
  "key14": "5K1cw37jpSNWNMhV8ZmakdgimBSrqodZmPGMpkR5FQgXrh61wgxqf94jzUDrkgzGkByrLJm8ChghncYQU9wiZYgn",
  "key15": "hNP656kdTWDVvRuqnvgSHRZT3TVvT8f5cS2XzZQ2TG64g6guzr17RhZTgabhRuVGUM8vzWsSvRz9VG7zip4YJwt",
  "key16": "2tB29JVgYXHTTwgm8rRGgCFCJqG48hUysBQbMReMtcBRSG7MJ3Nz8j2DyCRcgVcwVeP93P92v2KQdnZvACFLkQrN",
  "key17": "2ArzgGtowJLvofWuukLaBRX5mrNZi13cBiyrxTPLfP8L9SMRAy687TSqCvb4WZ6PyHf43VRCvkwRiDbLFEhRnavj",
  "key18": "4SoDvDWnucRkzCQqw4owWtgmTKSgdUw9qyXZrhYVUWJiC8Xko8r4mxHvJWW5XkwpdwndNjnJ8vQjkH2QZQfEw8M7",
  "key19": "2SXYEJdVtaJYViSspr8QGPTA8Y9V49xeVGuAHtpoo5qRnXvK1QoCVvWxgTnUCtGW6dYAH6NgrY46W1WYjhugPmSC",
  "key20": "3T1o6NRodvDcEjcM3eNnCQTerLnkZmsJt1AzWTBEX7yzUc4APDEAx2zgJbaNURdmTx6fUXpdTxBTcH6dk1SPEo73",
  "key21": "2mudoKWyR8kUSrVYFK16WnsFrABPjEp8Fko3ftBwizV8YZ5XPT6TJjPohx5UycZS1qUGzcoUcSmnhrGa9BGp6YHm",
  "key22": "3zFAKmMHjcJYDFTYwx6m9mFFjMAkUpd2DY87dvAkrBvQCAu9MV2Xg7zvZb2VF3LnVfT2sdK2RBo3hTQ7zZH7aRJ2",
  "key23": "5vQnesAaEkhY52xdrAykLnpXGH5JHn5Kw1gYYJbQALTHYsi7WagRyWX9GzX3F4CBukXmwZBzkB1dD2K9WWqbdnh2",
  "key24": "2wjxySRaC5RQyhvXzs2mhs6MJ4doCDW4WQdKaVpP3J2fijJC4ACFUDYiPVSmq1M2JB2JirsvjS6owvBaZyWdhWnC",
  "key25": "5vVkyX7deXrGBsvqno8KzDAM5kZGw7wC6DPb4brQWNyJtMqyBUNevCxqvUCNmVjvwCJnJU5n1p7FBax2CPpMhLPM",
  "key26": "65UwAcBkZDMTaxBoVpX1yhszLk8YZva8VDEDtBUmC2zwyHs1tuZ3ZCQsaSQcCfpACgJmHEVxZoR9KqGa8Yj8HzMj",
  "key27": "5MtVCkNdNUxQ19a9ChUCrb5Qhwb9z7VB3HPJ14CYrcfw8vqQ9gcA4X6DPmgEb1yGmfows7cscjXigpXuYSqdEWWC",
  "key28": "4dva7RkcnJbeXf63My7SaR3jAJUhdvw9Li76ejJB14gUz4foyfq79oukaat6JWLkSAKLKhoYcbEJKSSwzZ9NGX2C",
  "key29": "577XAGYZXbkaV8gVXTpBxTwoQdt4rMQ2FkpU6B6Q41Q7XCtbXPzjsoy5koc69BthTGoyP33xGidxUSadocp71vvT",
  "key30": "gzSCpd4EcCrLgMCbbuJn6HhPxEw6gSw4mtvYCGwesKEJsigKRNTRP3p31BoDbHiQV55zcm1Ve3pnpmTrWBTniBR",
  "key31": "5osMcfTJjdedV7ahkGbMxPG6QQCgJwDHbcSW3nDDrhLPYK6Z34DdxVLBBuh3ZEbHuZVJ43GkH8MjCEuqTuS6zeBg",
  "key32": "5gPoDUjRRednWY1MKHbBW6CwrGBrj92G4iVNTve92i8Yqo979tGuz5c4vK4WpFi3gRYdFqvwimiagqpaAvuQTAqN",
  "key33": "1Ajkh4ULTe8t7JMLA6PEWwTqEqvwxhziXLwx1EpqPxDMjq9EkouaJjgKc9tQeBc33b5xou7SXhoFr3Vtd6UY5vX",
  "key34": "5znVQMGcogsGjRmbvkGbXMUBJdf2v74BVZFVdXXhKcsowHCfVbQDzJTBfy7rzxVKN5BU3VaqyAwwkeDbGJFDbjF6",
  "key35": "4sitsR3apSVfdKomNG5FwjPYx1ZuZMzsfdQLgSTCNBjF9bmfoW8c3jLobwibufKaMCkR88Z534gx7Em9WVFt5b5q",
  "key36": "374g6uaR9ARZMj3Z2WBKyeYZRoAMKUVWbSaqw1wpRCf4xbxX63X3yuwJYn4nwbnH3x1K3V9VYKBMgZf6pD8R4mat",
  "key37": "5WPqtYwgcMDKTu2WEuTxhFmQB9yQCWi2WiW5bzjDEgFEcfzUsvmDz1bWUzhYUftt3Zk93LdJD9iccxwX5zDCY4HZ",
  "key38": "5ecD6iT2k3PEEy98BDB24WQKbShVmN5R4MhxN3bhktwDuGpEBudsdETRaJ6dkWwTJD6QTvU5Y5JmaitLrUTehJzv",
  "key39": "3j3443YLqYjHHy9yDvFAo9P1c82fb6Ba1B5E6jq2Fdz1WdrViHpYThFDtgW8ioVUcn7tVJPJEKLa6gqX1TTQCL7d",
  "key40": "5DdQv4VnLWYtC9kA1sTJfcSJJgU1hQB6uEDA39tM7BmhM2diFXJA21oYp88S5eGrpE1hauVWHQN8nFG9sbq96QTm"
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
