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
    "345dywLz6YEE5NtFCMPhQtfonBrD6q2oQHgL76MhNJMGQJK1SYuwqpeNe1BYcajGzkMfYEWugnU9ss4Ppun1df5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vK8aHexq6bfaoGB6oNe19H1udw16TRnc8Conrc7r1fGxGQweMqGF3s7k4YHFabgjcmLcXBPwQsGC2Rgx5x2uwU",
  "key1": "4VY6ZayUWTSmi8G9AT6SWexECpm4KzX54wqkgLtewJPdLH8gdRnpRVzfUK9sjffWzU94MeUTGTWVhNMxFSv7PfCa",
  "key2": "2cDJpZKhQAk9D3KYxEmYosAJUs8bwNXi1yu3Zt3kHj92byaDaWpPzxoNReG7B2HuxRuo9fVR2mhuzdqnhxQQU1z2",
  "key3": "HtfD21QCnujiMuNPAVrAioGyTSNEshmiNtgdYtDhZ6777WFBGsmRF4G3ZNxSusRGBUiyZAaLQz8vuNxwCrsqeWd",
  "key4": "FaJw5rQSE3KSkdtC3DLsbB73bAgHKcWy6JFXRwwPeY678cyDaXic6eYpFumg1JVhTactcPWQo7pT23bYx88c3ck",
  "key5": "376VtDagcmLuYDLsXYR1HJxw6YyQEu6eKuTXDr28BDjNVuXM6xFgVyLuPFExUXu9fqvPyaW8zUVbATsQW8Yabkts",
  "key6": "4CQyiv1VibQ4PUv5aSFKxgYzKe96hfZFQajBKAuENsNcNSNhQNnocvswL3oKFSsExhd3ksiraaDXt8unjcUuNnKY",
  "key7": "4KEWHgNKKzdLbX23wUP6b2jty9fQpJMu2ncqvdTss8qWhfEVpNmoi6yP8j5yHAvEgPKTcgqx611BDqe23c5T813Q",
  "key8": "4FV82QHTwYmXGrTzzp6hUFSc8mQjRCJETtDWg594zLfa1K6LbK3anHSab2etUBgS2aQ3a99KnXuQjcqtR4Tzs4Q4",
  "key9": "3hA3gjRZkZmjQ7s3CdSucuEXvb3djMmg4apLsDyPNWj3pjBebvcjaCgcBHkcCiEjj4QC3iGMypGt73fqPanRDtfz",
  "key10": "57aJuHo1Ep2LjWU9LRFAVDzb4XPrUJUJRJYAdti8K8rj7YFhJj6BxrSxSvZmwurhRGQ4vdzhnpkHSJGyPDha6Xkg",
  "key11": "43HzFhi3kWyZDFqcmAoTK6kCs65jvkSAimM9Fv3bg7HqtajJAgCMCJXNKu9Q5qXU9hrjttd1Q58cKxTccE5frhjb",
  "key12": "5ahh1QPhAnpWg62cwHPJAjjzYnnEny26jVzNE7cziL9n8EpHHGDmciBCd9YPjzyKuzqHh7v8G3V3HSaBG5QdW3MP",
  "key13": "3neDsKhjj2NcdUG9UrVnYw92d7ybbmeyaA6yD1jJXxqSKtGD73FqsEK1sE1rFR87EqoioWqVfauie5bunebdTMbK",
  "key14": "2YgEZVytwZ3qtcEfjhTNzk6Afx39TwmuPxNKUTqRrQmNUCaUMggXrUoTH9Jt2SSkb1rmdMZXR4HLSyV1QMRoeVbM",
  "key15": "PuB6vytHASNKBM93r8UCpwnPyHGsLc6KB4Xn8YLQMgcZd9ebN6RC716RoxQf4bdusThY15Yp7tDzCahoAjodgP5",
  "key16": "2nEM1v9nckdwjaBL7QWpHALXCQARcwaAiGyoLgSQsvmmhnyf7ArAhsXvySMJ3Nwssb79YyivxNXSe3jAxKM8Kmnd",
  "key17": "2FiWRDiqigrpEpTFFaCmJX39HWB8S5jxANh8WoJD8uAuBJ1aFMVQA4iToUa1B1RtdRaKZ3wHG7hG7CETsYFrz6ij",
  "key18": "Zexr1FkeZvzC1zZgSVfUqqLss99pSPi3LAEQazP9D76Nn3U7mR42ncK2xUcyoeHjyo5A2zqPBm6C2S4GK8B4Gez",
  "key19": "3rEQ6BLtjTEjkKj6MqhzqNdXAXsemo5hRfAD6Y4NFkYycuLDDUqXtzv7T6zsNxkYTNxNpSqqaHacv6nqi47yf1TS",
  "key20": "37wTgt9XjHCsWz6jWaPoV9QhK44YtJzUhGaWaFwrE8c8XrQsT1PpXamBuQQCFQungvudcjCuEoAyFpw4SAbTwpcm",
  "key21": "4VV81YsZgVbo649xyojFEES8nntNtUpy34aNNM8i5p4BV9LmaacQhvMS2zXoNFBViB5tzQkKq9Y6kWhKvw6fyUz5",
  "key22": "3bpitXSQjVZbXe6KFxW3cfTbsLBuXpjrr6zqygPxyG8inFQ8nSvAcBcTVEn8ZrLjwYxvM2iqjUWpCE6qVJSZscth",
  "key23": "3podASJFK9rmn8rX2ENsQTykU7vTTyuNSm9DkGRVkdm369LQje57i9jBVnCGC53vbbs5kvCn9d9scBChzVzUh8oD",
  "key24": "4Q3avnaJL5jaMbSNqh6oovfMb3YM5HNV3F2HuSPaghEaiUd1sKoGty2mfYdAAwZv47SaQcu88uMCnNKhXctp3YaW",
  "key25": "4ZWA8pscYYx2hmuufLGrytXnrqKHhm8UoheJugyvPXgJZUfh2WvNohLQQ13MGAFJhJ7Q3hKFU7CuKuygVVW8s4Zg",
  "key26": "3PQwUDGrQNBe56tJa4mD3Zenw5h78nsfuhUWXsJeUH9cXUfK1e4zG9JqhEgssjipcyJkfEhGXVyfbbRjyRa3X2CF",
  "key27": "ADgfbS1ERQUj6cACgCZXamp7HZDhtwSnGZ3rcej4g5kW46yK2MVtap3yNmEHzhBPbaRTBi5ft5ZqzP88CUyvxVK",
  "key28": "256GuZQDT5EkkMtcN7gFnpwfGVFbN8AEpW16J1Vr4UGhJ5CDd3MfSkTby7n12Ke8Y8M3zL1ueDLVZKRNns5Cbj4r",
  "key29": "5zHbuQoFmL3XnU56g7PnXrdyQPaZwmjxwpZJQ6ZHqtUuieXu5Mocfe1vT765ccfQ3abdbqRoNvuQVuYW4fWDbpew",
  "key30": "3wm1jXesPCcjUwR9e7PBejnp1ZzP6vT9JCFba8xSgBUsDiSJtS3eW4T9FbWrBfLHK76gFm3NTqUTqauFeuGj2ZhT",
  "key31": "4XHou5aQqjPdd6j5SDduFR2gGxLmjPCxuobct7jUU5HkozkwREPZVLEDKSTSaWLHtsQoXuNTbv6X7eeeLhG5iJGA",
  "key32": "5itdbSSDBmUJUbbGFMY7DEP4jtw7ybsdVwXRmiMNu6AbB2C8v4GqechoE8cJRzPLyv96WtqiHuLA72W9tisRY3bY"
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
