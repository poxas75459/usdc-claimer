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
    "vJsUj6LnCf45ycs22DHoGEQKwpBFpy36vJYqkHoXApjxBYLWt4kKdFtSkiVBGJ1nsC8bZYd6VMgN4qMPuM9jyAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Uh1Ls39Ny1HM4rVtMjMstiHj5Yorj52F4qBeCAQYcidm4hewCkEmExxiEd1ZjQuzygP2RcWhg5Hei578E3JTvR",
  "key1": "2WJJUqF7sHuPqR8pSkxDPuNZ3sK77qyESN9jmb6yfANnHf2M7H1gkzbcfSEdxH7bjTbzbjsuZC6tiG6ZZFsTdeh8",
  "key2": "4SVS83snSxKp1buomDpLV4P97z87GBJJnFB2q77Ro4mPqHh9fbhKRT8cDhsRZXpdMX6HZfFLBmZwQwPD3drR9Ja8",
  "key3": "64vuqKwTLSD6tzRtVusydShH2tr9FqhxEmdZUoo3aSw3E3vkZFXmjyMdgi8xuMXdR8BnL8y1yeUE9v9KZef3dzMq",
  "key4": "65n2ZYFPaJEHdYp1ciXn5DTPFxvfZvD1RKfuftEc2ch6mCNY8PEAThKsNbmwdgqwbNrhQnz1FKBDuYNRiAi84nN7",
  "key5": "4uLTJNZFkZg3FYrp7UGcR7Pz7Dv7k3XP8f1BkwKgG9uDfdGXLeDPgX5yvbPr5GrDUewaovT6BEJn9EH1D1pJfhAE",
  "key6": "4571KePHRFgoRGwekFMjHA2Rq2eXu2GZaVYwPs9chaGt72TaT92fZSNmAyUuErRNPsMKdMFgdvWWWoJwPWwfWcUP",
  "key7": "4qKJ4wdnHZRVy33FJXXrmTtv8i6NjKeHQHfnipHnKcEKRXJXcdNABb64WGG773KPBDNVHhsR8ojYa2amb7KwsPoX",
  "key8": "2PdZmEeHaJCyXraDAmX61LcjtwHYt8v8j2HFDziVcSy1VGxXUcfPWqNg4446GDtyoue2UQgJgnYDd8EYYidipRbf",
  "key9": "2ubQ19FyLUy5BuVJNkTqadk6WHDoxpG6Ws1QG2sfB7cV7W4atBkhRQqxh4YycqqnGWQ7cdhRqBsuU6Y4ygTqzHGE",
  "key10": "meZFQt7U6bo7bB8ivANcWCC8wXYbWWJpTUztKk5rBVAt69CNmgw8gFiMZq4zKeUvxJb4FtwzMFP6PwKPEBKJZ8h",
  "key11": "kSRakrWg3ymZWBjm9PewQskYhhcB78CYnwn4E47Z1aQ6Z96bzbYi5W2TnY8JPBGbiJktn3woUTUDndF8V7djMNC",
  "key12": "Hn3KuAFwm3CnXiXG7coTPQQMWMHsrtaq7Y5bb5AAQ8jMov9QgwmoAqBLKy4XBp7KZYaFPCrFn5Ff1QB2vfwFpV8",
  "key13": "c44dKPaDD4VLLw9sSKtp5jEo9LjAnkwikUMWrTiBH7ThwCFudf635mYPTLLVHoaiV6NALDqbDm6coc4NaAhNgWL",
  "key14": "5Tzrc5mp7TZ4otP62hcPEeQXdHvpxxKtjVpA3SfFHu4jKHAAUoboU9tQkZqYSNHqqYDAvrEZ2UmKooRs3LpzxJdi",
  "key15": "34tytWAjRPifn54xTagrvMwVR59v4W5nMF7bGQQN98Yqfp8786dSsQPRuraPpiW4yk532gBVn6YzfFvgVNYzpFin",
  "key16": "5MUoyBgEh393BkoY5fJ3aLVSZjK7jfWxJEySEmNeSP1NMJf34SMrbw75dJeg4NqzYjXxZ51u4CVQvARFskfahmkk",
  "key17": "4GxA5W5QSMEdt4L3kC88uH4ipDyeVWCcRnNX9fsufKvpvuaFLBu1HSN6ugEMxs9Zp87gFHHmH9U1frJfnz6FRT8Z",
  "key18": "67dvbStZ5yURy8pWRZRhctPvgPky7rr6zt1eDeKEkCH38Xs6WoxzNLsNDLAn3cdPej3P73q7X682fSLgaNYQfE8V",
  "key19": "uqimSVfSGZYGVGzYYBxxAwDaFASmt2DGKdaLz1crEvch3YRwzb6rMrDfA4yA9bEx3gZheiXteQKxYBNEfthreZ8",
  "key20": "3ueTJLbMmvEA1G3zmwNgKcojzyYDhQafs6ftkqqbWXYra8X8ZPa51AmWT25hMnu4NBYkL2MJc69jfarxhMt7Dtvn",
  "key21": "2h3uNgv9pMBCnq7ZFNYY5JNZc5fX4aE4uabd1T9g7wBWRarkE6J1xiE5CNARS9eqZwVzS3ZEc2eBGwf9DDoKACQe",
  "key22": "2xnczeBQfasYq3TZQHwnSWCByFikfms2zgzxv72wFFZhr9m3D1pjDHpqyR2G2SMMbBjYRjKvyeL9DLqwaFmjSQ4h",
  "key23": "5SktAnB4UhjTWRM1zvwgSfPexf1Ls5GQwtdYqLRDn69Nttfckb4VYhdi7khSejK1G6Putw3kEoQhFRJa6BseCJLY",
  "key24": "3Nm5y2QD6Ts36PswZdVT8GezKVorAuKaYxu9m5kYJyB6t1At62cE41gaM4S5VEUUjJXusR1i9i4KkfqVNXqL5ukD",
  "key25": "5mmJj3Rnbdp2GdHNx8CbySD61tuCLMfYXSUp6hZGzXUKVSyjAG3dbpNxhPQKWQ6iy5DzTMUM1GztjST2fDYSrLXL",
  "key26": "jqTj4ZtcoSvHR9ARrNqc2vxNHPN34tv2cnFMrFnYLz4A5h4rzRAZCmEzp1nxpWo4niy8bVVEWf8EGqihiP2CGe9",
  "key27": "3yw7X3xRvmjDo8GJ4PZwkLYeaXriuEyfqwZg9ojYkSv8nMamnhzPqhaFwxwwK96kBm9EwaevCMxHmN6uu8GqwR59",
  "key28": "4yYhuMSBvuY7qkR19kBXMJMfWaTgMJ883oFpKPnPRcP6k2HTQ6RG1PSAsCJLmg5qaEzqw4JE84pUme96bWYsMrfu",
  "key29": "2Knp2tJhzEZbC2ZukctGuBJMc3aqc8FncJLv3d9fngK4qnsdtq37bfYcvKyvNutVYNCh3f5BVS2dMqhVPqPrkR6g",
  "key30": "4DWaR8iTL9sapTHakeAQToYDHNU4UTaxDKuMjq4tJZveLCf1Y1jkAxXjChEND8yytga3o8N64Dd4kAtEMJtw83Pw",
  "key31": "9tqbgYfoKLW1gdqDPJr1GBYvQ5CRDDK6YMZqjnYL2NnciEtoR3AYfGBmfiXQMRXTrWTUaN8sei9jFqPzJPJaeFY",
  "key32": "45HtZVT4UCi4cUgF7Thtz6CHPb9LxADG9fGgMrjsErn1gMdRs1E8yiPMAtFqJSNrnRt4cMy3c27cM6FBA2Uki2EV"
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
