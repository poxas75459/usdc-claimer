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
    "3AKVUmyzCickkJRnzUDkup2cHyFNPPw4nfQTtcquEUfXhV29GM6dxwDaa1Wt2kBBUD8SjVZsSbwU3JpsiAoxp6DD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNaAmXyRsNLRU5NoctBv952CDixQT3ZrK6a1U6BE9qWmMHjQAYZb9fPQLWL5u81eLZvE3WFMr7N8MfVKyh2Az8L",
  "key1": "3zmejyQt1nmX2Exmy6MnffWXWy1kt2G5i8mHq5SuKX32sh2XiN7zFHdFxVR1J1DcgQTChVQh2stVxdWs4xvVVz5t",
  "key2": "5JWduwJBcQRgzHg4hvApd2xuimKfPHhxb5UKRCv9ERTUgSTEhDj1tSuEieo5NeNnjuQUbGTiSvVU6mcFJtYqCJHp",
  "key3": "61PupTpFrKm2rGGDGCdkXmzuEvK8KH4szMVyURACeusJht6GgqMKbtJ67gE3fMJUdHXDmLAqUcJB32dnwANgfhWR",
  "key4": "59dCS9jQaB87KQbjvwck8d1pWykZNhC4Hr7xbZdZDBmmgXHHCK9etbU7CsaZZvmfbYCwgXiagvPFgAnE6vfikGAN",
  "key5": "4iX3x7TqPVrYZj9GQmPLQ3gynPFZBrNW1siLwgRGb5TafGetWVrjHSg8xKQwoeBY1emQemt3MuneAETcmxP2RKm5",
  "key6": "5Emtu9GVVe2YtzTH6yQ7gPpibQxWDSACz4eYFZPpLUpGtLuQs5ajqZrzAuLgRYVZnhmzxvt1EFrQ9B4GXuH7psfY",
  "key7": "2DU14fB4ZuLL4759cfRgJ67YrseYq8FtJe6zqiy3D3PQSHhSf35Pm7Nj7BF8Mv1ZkR7UTapdC4HbQNxN7mcpktt3",
  "key8": "5pKoXwdT3KRpC3mQRR8ZFFeqpMtXBL1LTzzRHeuXAc5qZ7jZanErfBxfbRqiphEtTAaF3q5rNM8T1FdCuAeeG4gu",
  "key9": "4BAhhwXRg1h6ouaDRsqdbGV48oRBKz9X5oKaSHppyw5cUPkuPuQjLECYWT5KTzcsMcXziqYF66PzNs8TVghoeBiG",
  "key10": "65HzndDoAqeovBGfcXR7S2u5eZ4XGzTdDXmrcLF8FoAVgyCQGUmnRCkMMwkgVNRfJrsXoYpEB3zLdNB9bGBa8s2x",
  "key11": "4LwYdU65AbJHV9jY3L2dwfXrEN4jbwQ7oR2nBRWYUycLLttz5NCsxj4Mg4PYRz8GDvKpiHVj3FGmThemPdYVpoSB",
  "key12": "4svkurn5tCdTvzBgtAM2pSXSR9e8ccxsZfKADtFGENRBrzhNTkMfYJGQNSzfKAE3pVjpr2hSkVWN43cy1pzLZmRc",
  "key13": "4jbx63MnhipWVAyNrcyWcrcp1m3mDeEDTmUrx6e8ftx3nCSRvY9BRjecTLgKRmSUynqPLpn3y5s21DkaPWV8eyTT",
  "key14": "4DJ5ue9x12Vux3YoeKLAQJ34MG9dZrnd2AZLMkEj2AFp6BraLYzzsDBqym7CpPbSrKpTGnkp7z1o3PrazNTTFfzr",
  "key15": "5Fm49AYGBNzAiPU2V6RAAxihBku3omAzAGc5NNJHKJqhiB4uG6sinxnyCys6N2vddGiepnXueBkSKYWEvDSg6daf",
  "key16": "5mQEuT3W89ZP5aPMgq36RVZPMUGivNJ89qfFAUuU4Vzj8kR6eBLwLUHKjzQ9vdREBDSpkjGTro7cHBxZ8Ap9sG2f",
  "key17": "2zuaMXsjThEpAeAT4CuRPUbqYzuPMtxcS4hnG1NvNX9PYKdnfzfHd5xw2Km1tN5nyPdKGYMdJmD7z7dPLGrtcea9",
  "key18": "j7WUDer1Qn6cdzK3ieqC3Zcybr9U1w6r2Smdu6skKqML3y2Gjtsma2kQXZCxCC6fqYkGw7LyqZEynpaiM12e7By",
  "key19": "THBUoL3NGyyzZStQpboKcZcosnwbMUqCk5zskCEN967XfjUi5oQ7aecaNwcoagoPEZdWVP4e9DEyJvTZE7EDhPc",
  "key20": "S9YxPVzW8DAh1vP9yDeZ1KBmbF3jNMVHj2xJtBL5jCRsVZWVhaJ4Qv12dJtbLUGdKqceb6s9BYMz34MtEtnUhgY",
  "key21": "2UYFoyiuvJvg8D2orX88AagMukvdZGssYkwye56snoKxohccgK2KjKstquQVX5VSBvfvgmXE7FGWh9GR4vEPyJwk",
  "key22": "5ws4wYRqt1QAWaWpqrNfxtHyTGga53nXB34sAh9xY9VFuYDaLZkKbx2io9PATWt4GP6B5P8P3gHMi2D5SH4qokiD",
  "key23": "2AV7Zdo31AmomZCyEkYmDin5dbmF5SBqgzK3qvPQXMGL8m9YYy1npVTCjPzwxbmcBXAZErwa9TLxVFRXnGb1Qo91",
  "key24": "3DeY2Vghm4SXLb7CuAYfKM4cc6Yyt6GcL1SNDTsB36uq4by6C8rR5Y9g2K6NoHgcY3C2hf3v6mVR7LCGVQSUgeLm",
  "key25": "3GjUYEXVffoWa1eduoo2xRiKMJB14RoK7p1tS1UKKqja4WGwjaABZ9kSApLvbzAjBtvCrXx3FKvXgopY9L8KUB4W",
  "key26": "4q21wXKbH4KB6i17xaG5Yhkaw3HwHhfzzjHLEiQ6BxRUZ7xgnvZ3PrasS9tEUX9xtuZ2iy6T9PVrvUdEeBV7Cmym",
  "key27": "3MGxZsP9PuNfXHUCyherwaK6DWj4osThRrVVk2NjDyYGBArMt4jckoTGFHKaCUMKovRt4AsSV28NphLc9PXgSMW3",
  "key28": "4ZnDFqAFzmHZxwdRaj25QvuQJM395TaodbH4PhWMGoe3hi4yDvSe8NbnKwEW2vZssf97BD6zwneCwFJ6UFoEpVs5",
  "key29": "21SPdqW3j9xwSbGb8AE3X9una7a6fQsJT4Y6oWLrujDhs7M5UfdPzaeDKeWdeB9pQzSYPZLv3APmp8UUrtXxjZCf",
  "key30": "xEQ89sswsU5zGbL1VYHUtBp72FAwH9GBTvfXtXNF8Q4Raq6R7EWmUkitbEQoEJZdLkDahymsBUk2xFXnBsu6GPh",
  "key31": "55uNUkcFj6NXvbJqmYsaGT6c93HNmNA5hPsdrEVB3YSeB8wfPNRf7keaUWwtrxgpqcDriksee9CGDkUC4PFUvRua",
  "key32": "4526gkVb4z6ZaKqvy3akVMjZvEt3WjTdHnmxefprQYPZWfZGEGmzraDgcWxus4t1ieCBgbHs4Fz3p2uDrXYZ9oGk",
  "key33": "2wDgfFE9NGhosoLjgr2CgHUGURJxUfCMq3VFxcQbW5H9LAgQ9s2Fv6tBUKd8c5KiA7MPZjGoa9LePRJoFyfLCgG"
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
