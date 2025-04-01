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
    "4XupbGjthH3bZnUk9jXH1Rot7FF8Zp3kEfutwnepoqEdn2jtcSbuj7dKoNgeHTsvbncVHVYiGcDF9rwzokmqW1Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5swHwT6FJ7VEeWyJznLHX3EhFr7kG2Z9Xj2GD6romFjNQM1DGGcQvT3ZTSyJybd4R2VpNRHy2hVARW1Hkjs3BBYJ",
  "key1": "4nHhZyoWCrzng7Xp8d6cGw3QkV8aFyg62vTeCsoZGmrnn9zDh76rNoDsYeFW8mcySQ6oa5h5ryTDyTZHSDfuKLBN",
  "key2": "387JQpFdVu7pYFpaHxHcjsRPQopN7ionqwsGHAetY2m1FraxgiX4jvsESQsQYSXtEhNVRaXpQfhtuNrLs7DWt8dE",
  "key3": "5b8WLM7PTqTGGcZ9jhFgsP9aeq8rvT3Y6kDApdWsazSvcuS9pVBKSb2roCDXCMcC2voJywUbLXvMQZhAt2Q8d15h",
  "key4": "uLkvBALhwYrhyEnKeFXfG12yftYWKrFQcmz9rWgQtn8z2NG4ByZDDQ21hk2SJBcL3rhxZDN8gqYVGoPG5MCTqeq",
  "key5": "4KboMrfjWdgirEWhwT17HesMuzFjYgFS63doF7n7ir4QjDUBtNtuV2v935BDck8Mmo7AnKHTBAGjYKuekQBWW5i7",
  "key6": "33bfayMNueTvNntZbJQG9hr44J8prUthYW7MiXutC2RPstixFcF2XN2JAJW5Up9P1GBHVjQ5LTSxmPNPfPpmxsft",
  "key7": "56vGw5UDfM8RANyT8V8n3PLm26Xoqat3ggQ3cgv5mkWTqPQRYoW2HcnSNVg8eurDGcF3e3yJEtSqjt3GqKxrzcWz",
  "key8": "4HnJKLhVUaMRHRykKKp7E8Cpaq1ArtGgfgZcnZvoV57XKdNPkpcKzsKuBdNo3zUUwhsFejjkZTZ931rDGHrUF3Vs",
  "key9": "3QFwgwCWU8b27eRLCcsW9hqsN9QkMb67JsLgvaLJppS31z6AssXamvZuVBiKcJmHaJipZ3UdMiimfygsLvLSLrYv",
  "key10": "5iDeF1cLN7Gy9qQbBrcdth7no8YqAYWdnmpBzAeob5jh4T8CKVk8ocqV69YkgMeWj6FAqhzNZh7ksrNQeaHPDQ3q",
  "key11": "4f53Zh2ZNaDSfNe1nq1WYjuXkQKRqq8ytKnXtCLttwwNtu3KdF89aErNuCb6WGdyUxM28e6JjBvM43ZnPag79nP7",
  "key12": "hYp9JCCNBcwkWSvbWaDEMdy3fNFkwdqLQqwhgNaffEXbtALeptwhx87EfhLiY4QinGZXDNuNVm6tVnTYttYABRR",
  "key13": "47UvgtwsKtHbhi5nsvhohUm8mizWgyofVMQyvaTx1s7CbnRKoqViAiW7Vc12tWtZ8TNC27qQHc1CN9x8G424JFmH",
  "key14": "56VHraUVSSow37FjY2ciD39ciprhsqfpKWqccGiV6GDUkbUMRWRxMxKbFxf2k5uPwvA8ei7EaUjDskaRgqfEeEyv",
  "key15": "5noLDexqBFF4j5Po1gq9u3qhU5mMxaKqnPvNMKytrPg5m2tgUTxqM7Djt7i2XXMYkqtTVUPSK8ethadyyG53pZ7t",
  "key16": "59FbYQMhaqMJTgS7d9aKy6u5i5C2hr8GQwVshqS2LihyaXSdVkZQya2mAdoeNxsLxuM5wMeJcDYsWoh9HMddHaYa",
  "key17": "5mmai7eycrc4ysMYghWTKdBNuUNuvJoNYifcT868BSS5TKTfNWtCk9X7S6EY56RU74zdgPVNXvzSCpbRsS8MdU46",
  "key18": "4GzZxLGe7naBBgBCNvadHyMFooKjRP9kPjP3EibEXram4CphLPRkv6rtc5kg6tczhfrKPRTyFh4RBFRmmSafvYRo",
  "key19": "3ruhtD2GhPxvUQbAuBdEnpY6BoTYuTXmiGvUSy8di6ujNhWnSzmtRdpZE1LZqokFvvBpNd1xNKJLHy6NQgyCgzYg",
  "key20": "4QBRNyBiMppKWXLei1kWidzd3dC1RGKv7bVEqwajKcu2zCwqJRfp2oCEFJukoy5DtAbGLnAsNrapCznEnQwBtXPh",
  "key21": "3cr4bgNEbxLqHXqR3DaCBeh7hcHRERKAfEJAp1C91ZZnvQ5kGvNMjzQkKVR9nMxEXzqSakCnQ3Vz7pmiNdw79XzJ",
  "key22": "4DwSUD6mtdEgnL7Mv2YuAjAptK17NvDKSbnV4UgSzaJDhH6Z1WVMQ3BkQKZhPJVt8FS1bpjqo5oRPgE128xF3TjT",
  "key23": "KBqgmNjfEk6b4P2uy13kF5s3zGHMyicaDjyb9dVXXPGngMXS5x1D3SdceFJwR9D3gns8dA2daZhBNs7Ph9t7RrT",
  "key24": "jV2NweVW7PxzsqNKdKDCsDLQxpQrLKQx8na6LyfcieeUhrjgGdPzatdU28jJNRX1B1JnXXypXdceKnoTpcHrqWr",
  "key25": "3Bj86uEyKfai8x5fvUG2L7EZFgxsCXVQPVUSW5vP2cPqGrgtxYHKW8pbVw8PyfVm2uJTzNzSqVpaBbrKghB49PMJ",
  "key26": "aemTQXVhrfAZncBB9T5hewhkurUGctAorgwMGBz6MdHBTXYqbmWYnqQhjQPa2sQjQQEKBaD7aurLhdxVpkwFuh5",
  "key27": "2zaAVvZoKxpnRPLtzVGzrRnvgTZ98uGQW9F52TeDLRwbxgNReLxEaiWrgop1GrqNQky8GbnoKWkStvGf34VV9Z5J",
  "key28": "HwFjqTr1GevY4DWh6U9sU4yWrfeoQjbCmqP8tjF3nE6bCYL31dC5AFkEFksS2iyQtnMrGcKbFkrRat7RMKUMJHE",
  "key29": "6kZBw8FSjPM4rCxSgBpntLbi69mH4pSbhLcgCi6YbR7TJF6bxSkMtHzqBnahq4iUEVcFVMZ9vBwyEmSkq3TNAT9"
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
