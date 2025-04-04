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
    "5HEok4zF8MHntTvdgY6sa234L6rk1H1PkhuvHugossFAxsfMLGoZJRXw6xbUXNPZmEAt6sFmzEQBeS6qJdgonwe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDfw77UCk9kVTc7uau2roQodQ8MeERPpb3kPgySqELQHbWtC2KT1j1DD3stMWtGHnC8JkLb6pZBFdoSRRpMqfes",
  "key1": "3SxBE8CUqdLvbbwRj7dPPgm4GkQwREzEPxsayNXGspEqy72h6uLHoC7F6PmbEQ17t638iL9aLuZyUNCg4bWersGn",
  "key2": "2AhdSu1ttQawx1Qws7EySZ75bMFcwrdNEHqcRB4DLaX8jZJQAoLmsKb7mJY8vCcACPrV63buPsgtfZxLSSDGnKyJ",
  "key3": "2kNfeYAEm1ZJSZpXEg7TK8HroZPbRNYtQF1votGvsLscmEADmCpHswUu53f9j5s7eNvEtZFB2uaxvQP7BDk19uHc",
  "key4": "3RoszJbVbzJ7BVXmTBzuUbgFG35fRSKU88hZwW9vb2zeXgBZHuojxjaVVF72rx1HMTTAGRS9SsJK5cNk4CWuoSDu",
  "key5": "2JP8ahHRJ6oVcDwZJ82BsJFbkLLqJRd8iwBJL9B9Ssj7GaMnX21cvd7SdYB3n8dGtsrfpY8BH93Xo2JYTpdpwi7q",
  "key6": "2V8RcEySX2C2atc39kRfxoQiwSjczq85drUVK5DBxAGvcYAsWKmvBdkvCqxPudDpMGbekhc1DRfar857evTv4wj9",
  "key7": "5rAuYcKxVX5TzLRBLZFsadmFjzJQyu43SnyURS7DwfPWUA8xjhoj4zDThLo4nJSFiRWe8Cjqpwo8FnxRBnBmJ7qi",
  "key8": "3kmWsMTgB3b4wsaTretBdbMXMadJQTyUC4PzbvR8SyBwKzcbXkXbwrHtrQPSY8mWKKSnWvnAZ5ddUNcfNpyfYFaq",
  "key9": "3GXAqLfCanfcBT7H6cye78EQj68aq81qvBETYQm9BfpigJpZ2kHiGLctb16HUqZYEBhjEe36BcUHAxPnuDC2QvAZ",
  "key10": "aQshMsAyYFkticpHschbVVgGULi7PijGKnyoiLMXPEsrR8ZcTzQ9VA4rH9JYPrxUbbpeMuZvaJV2B3JbzX7ZCPz",
  "key11": "252PvzJbuBR64x5bpqYyzucW8Y3qsMMZLVVNK2Kixyc2NWmqMK8p1kRjGiFp11M3adLXmNNXnPeYGgNQXQQxpj96",
  "key12": "4HhSe9rHHSasc2MK1AaZ3ct4G2H11qj2arLto4A2Z6urT9RUHv1aBKrqqr5xKaVw235ftt7skKy1omc8dvqW8jZp",
  "key13": "656CAVLaYUL7tPZVWbaWrtEjwWBzmZe29eeQwNR2o8xvTAm1vBAYX97w3vmRmcubsVeS1Kux7p9dhxLW4cYfqUBi",
  "key14": "3mCWdMhKfwuJWD8hgfsA79E3o4ULNRoWQf6pffBv9WK5LGKef5ca2sTo1Qhs65BoqpzM1LxynwDXnwPv866e3c7U",
  "key15": "5LLNzYYbhVqsKA2k5Jr1Ee5Yewu7Kh5rk3xnEeoSEbAbAgenwnHdxaD8o2krhWYaTwd68ap7FVuD9K2B9GTqg25L",
  "key16": "4SrKdFX7SyY1M2wcw36yTqqg1vCs6K7f4yam19evQ6QgPDDYfM6ezqraiqcxMoGS4h44ZAi2ybzaRWGuAfbGVEwa",
  "key17": "2CqvAehUq1qUMWMgctY9DLUuCksiGA1CdjWHtj6LWiD9H5khEPRfsdPFHsc4cxfjqmwDFdKehdHwm5MZJyoTDgw8",
  "key18": "2DGwWrF9mNk5AM3RsvbLqoheTf6YFqSQ7RFF22A6LtP76RwKdGExDs3oveFKKFF5dbai63cC2bAGh1L55uknE11M",
  "key19": "4wPhCDudxQcA98RgJyEi5ifJJ2zoNAxGRwjWpvrL8psu7mngamkbt4Ga7mSaV9LgDeRwdNCNoP7bZVQa7omoGySH",
  "key20": "4rpHqP8hDaE8X6HcAuL1mYLpmNZZTpmJTFzqEPoERppHsDJoZ5TH9YCFK5bpD6jTd8KpfsyFDwLxhfHqbjbteGDE",
  "key21": "5wDQMPp62FXEvaxMsA7cQZeaHs7LjH1n69zX26GFjevyCT9XepnvbJW8yhUzU8uAqotUw4khR9q7UKge1Db8MHxX",
  "key22": "5Mcdvt5YKXK7Den3xkqyxs9a85FSUz2RFghtaefgoXuBCS2g9SQUXnuHPL1r96nWDkrCtbmwtMjPfXhUwWN8jKCK",
  "key23": "4rb4Neaxh6PHby31hQznNFijyVe1iU65MTCgB3e67P7PkvXUF1uDce8wjqLLKW8gsExNt6GTR1g2bSrEE8vcRLSK",
  "key24": "3bLAMJRnbyVWiDvpSLSaDSozcr7uDvxLmyHoBCjFoTPjtSK1d8qkcQWodUsStj6nVSNV1ncXkMS9QwmNNY37R78G",
  "key25": "4KAcggBa95s6EyB6MejEJjWqVMCn2V4j8TQuceHphm82kDKPomxVTdkBF6444RWpVkvQsuiuDHbXoHuUADEprbb2",
  "key26": "35rT3B6AiNyaWVGyJEbvYfFx9kW2mHtQYv9zNbv99C77z6wPTWQ28EPKk3J8tcP1Z6GazizfcpWxP4vzX7A2Dkh3",
  "key27": "2kR2VDCMmNJyDMnkK4mARFWeRkx5ttmCLLNCdaWFNgoQn8BfjQkwe6k4t8uNmovByiRAPy9et4i5c6vXvQxSizLz",
  "key28": "5qEanxF53dXucPVyCFX6Hp7d1Z85PvBHvfmx1p2XvYsecJYJhD1bRnUiSFAyDnY6EGwk4J1wz2Lcvd9avCMrQHt5",
  "key29": "4RJ73KHzfzYDGTi9ojQa3URWetiV1AsFyGYLfwiXiP6cSKJGpJxPnwPkRD9qmwvLWQuuncGSLyMYnD67pWK1Bruv",
  "key30": "3SJom4HQM4nGbJKX8VjfVGB3zuZSigJVeAXNocyd4963HMduWvbc8F2aKd8SGh3V6997ujpFX3fYjfv5yF3hTgxq",
  "key31": "596HyLrbuUpvesoPXFFbH6vXfn8siGqnvwbdFK6erJMHgZ3kEu5noi11HCPFiSkgXavzUjy7fM7YvfK7icEtBuzL",
  "key32": "3BLQrcHhkkyDEL7RaFUedpJ4YD1Z98Dbbdo5ZDmSMpkT9nwEyaUdcTKBSHCUzRpzcJmAxHJdtQ7wSvyV4SsP6uxx",
  "key33": "58Au1FrLBk22SdFPUKRy3sWVs7xiQ6yUsFExjbrt5f6MRX4G8adaBVjeahWsKo3eeqU1S3BA33ZJxe5NHeAkanaR",
  "key34": "2AtvTWtT3oetYPfW6hSMWtvaUxeVeaTsWM8mikKcyBQF9AEYUnEYQveCHSGTNW9CoyrNG9mZmumHmwxPcVEBKNHq",
  "key35": "3cdoHMbpKaXd1NHzs9197EXvccu3FMXt7tbdZwqZc9W7N7hS66FjswHg61wvgCyrAZs5KTpcCrCiaMKTksPqSg3W",
  "key36": "37gKb32hiY37ZoKzxZP1eTiKLAFsLHniLx1E7Qywc8j9DL9ksZm5ZondKoa5nXRk6NGGL3SA5Z61wfvWGg1aa79b",
  "key37": "5D4rVuZwYYA97r84so1fKVGByhNHRCnnh6M1F3jeYzBEwqED9Vb64urN5bBidmESd3DJipReU2XQ1UmSrsLADumn",
  "key38": "3CP9TG1nwrpewKFNyDsntN93ECTFcAq75YKcTczsaQUNVS2MnRA5TziD65LJ463wH8YW7zykhDVUsZtWKzhgqwT3",
  "key39": "j5wkGBzaLw5MWvNYx7yGi7EAA1CUatA12AHveuyao6h6VnenwArpJG5Bv6de7oT7Ta3T49Gwjy7G3Zp9XaK2mf2",
  "key40": "ZjipDhH8Exn2fqcSgx5hMRoQhw1kt6xuD7rrHGd4wscNh9NiKZZTF8uxpyKuGNmppyP8fjWRda5U4BGJakVtc4L",
  "key41": "tLdmmZEZmeebT5bdAX5L4vkM8fHujX7SRT3wpgiBHngVMAWAhuMeDjqTGz5E94JJixNbLpqeVympUBMF5jHB6dr"
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
