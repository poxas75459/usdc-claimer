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
    "pDVWBDyUuf8edZabRB2bvxssPKwVNbNnjvjKanUJ8rSwLaHUwQqfAM5xarEinqDdC5cG7Dv1dTsxc6yzDJxCoYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTasbZfg9hQRzJtupCNRYRRCVFAcUSpdrffFAefnu7GLymgrJ6rWeEVo5A6xJm5RXTY1yci44aqYgBhxQhxLUzZ",
  "key1": "2NhV8xoFrVWXAMHEbXw6JJG3gwxStgaQXY1WS3cxwU5tBNNUmjn9qapoZxjuu8fg3KFCJHGZRgGYXDvt2JAU8mwt",
  "key2": "5gnoERNDPj3tr256Asp9rQKyeD9JJS1QRbyNuYYaDM2qUdn6ZkzsUfrEU4Yq57sXwT7cEUBPWCsLDqJBe6fucADa",
  "key3": "ynLwmqNvQJELfhPSmvGANoBGieas8GVEhtKL4jnVCxLQvm2td8TpvBaxzmrmC9piWiiy3o21SC4vRVHNAGghiTy",
  "key4": "2HKBgMAHof8SKeEb19y8ugV8FtnJyhhvQ7yF79io2s99RxFr7nzbibAwgdLZx6UdxEHw9hMBPW7ihF8L3Wf6chNo",
  "key5": "5SYLG9TLcLuMPudUYmYzPZLyZgchVQBA3Xi3WSpaRDcH5Mec5pqyrUYj3KChP1rSF7o396wmvVdX62KD2YMHX7jC",
  "key6": "4xAaymawFagaF7hBZfhut3Jr4xJT98ze2pc7vtAV94eRrAN8RzGDKyfeq8SrUrLEC9EAzUtpGZw35a2ZdKVc9idu",
  "key7": "4Hr8RgtzfVy3LT4eG1bPsdtgWK8DZd6xkQCfbPJ8qXL3FtsczLup7TFYKxWBrM2UywzaN32yzuS4HskkTtsdkmr3",
  "key8": "vgpmjhw3CNbsezBqtLCDGt7qJaQoxtDuQu2gnXVUmLQE2wTTs6nScp1e4HAHixsoCTBzD9S9TzMCffDMQ4oN3u1",
  "key9": "5vqSqBGMk74dA716mcA346SeUZ1J1FCVC7VcfPdHngCHXScdBS36r3CvyMyDVBc7TruGPkEkLphwShA9dMKhzWV4",
  "key10": "4zWiHm2VzEYpb59bG8KRpXNcYLmHPjXXc4deBFJGCbyK3hFbJnQm3FT7DKJJ7FrBw3N8MVkNaXZG3iPNRedPZF7S",
  "key11": "4cPUFnt5WWQamkvvHQKtEPNJ6fLLnSnVkrKxM2DvBhVDZqY14WzbwF998YA3Lcddp5t7ZMp8ueuT42Xp6ygBnJ1s",
  "key12": "5XJRZqrkinyteJYBxA5MbxFCCWQ9aHodNeowSAVinfHGPMYTyQZV3jjZpTG5uhg8rtZiuwzAkJLQfEbaDvqWS4Ry",
  "key13": "3nqsizGp8agaprYEzAZoWiW4HaLv8aejf2Cre6dceVMdCvGqiSUoMG5Tq3TAEwdKKv6r8mQamkt3FkRpTmbe3wUk",
  "key14": "41kJWy2rNRWxctSfpTyveTYYdULbNx9VFusydCuubebUUpmzDYtuLoMCrRSKsLPfb9owvMTCHqUvZosGmabBMDbM",
  "key15": "5po3Lz16njRtEzp5KMgSapuKwp5i8v8qgv2WxFzsPhzgyV9crVTDeRaoFGo5nqMrGbjMJgSKcPyz7thdEesP6Ci2",
  "key16": "22MP6a1xSLPBZNmpddiMhWZSxAHFvg7as3w594XxwQMmYCoAHppKvLEQ61m3f91X3gkCRsmyhGtyJfEHJo8H8MD6",
  "key17": "4PudXwx6T7gSS35bEuvRYLNn1tbjYMPhwaYWfRCK59zjRJKaFrdMGgydhnE1KS7AxUR6aNVZES5D1s1NjMMxpC4J",
  "key18": "4aT2EPxamZEQsi2sjLjBd6c98mGTzAzFJR5hPH7Vi59aqaSpwcn44XuHwgs1RW9caiQ2tfEGfkpcqBFP7bzrFov4",
  "key19": "5WpbPQ1jSGNz7aKiqQNWnB21g8Lu3kvLw2Av7x455U4oxFKY2akdL2GoU7kJ2gNamkvawzaHucb2Bd53yhQhtRdy",
  "key20": "Ri3szgqv2zZRcuZEsrize9gEVQGzW7LBbmRLHBctXiL48iaQKLZqBcfYvtXU4NzKxteUAkZEGCtwKffPFhqsi6M",
  "key21": "2axjRhJY6KdpsFfFVqbQpu3BNh1rtUsdgjHoLKCxYVxsY3erJjreQUi7BRZz7zBQDT9BVdbsswZf3inyd8HAkjpx",
  "key22": "3AGxn4DF5Yo2U6dNc56eca3wSZcy9Kmma2YYF8AddhCJgNGMs9D2CSjvs67eqCNg7NMumnHeXyr64t11sVvbWXoL",
  "key23": "37BaLZnWqGrX34grVhVNsC8k33XSd88FGqtZFUN4vsiP4JRMYKDKVV3nuBjG9JF177Rbgx8FXkt8n8fYyfPpDykU",
  "key24": "McrKbGgrw2imzq8ZRs53vN1cnrZLxswd9X4dZEFjpMGAQwcd8w62WdVfNV2oAhYhLSLYXp2bz93JteAPc43CjXy",
  "key25": "5NC6KQX5tEVFsKjtSoPMHGgrjvQV1v7saLQ5Lh7RJZ6uc5FuKHY7u3afzR4ew2oZ4XCEGB3tFjVNbWWVEayyEvG1",
  "key26": "vSr8LkAQwbth7r2RFwb3innxXc4h9CBqfBGVtt5xrMDJdfTcoXnLjy9KPG8dWpQurz6o7SeySLuTuKrSeWMkAee",
  "key27": "5pB81v8WPBMfEWsPWg5UQdk9Xamj4MvUteJrCRejhhwo4MoHfwZLppbErxXBH8Gq2NBS1LXtNAHnCFhpkAR7KCGe",
  "key28": "2jxexPmZomUo1uNE61HvD8nbSCsEWcjBgLVTimMU8ktuyuSKWDJDf7Qdvw2t2rAkX8ea39946vnLnNidWcd9rVHL",
  "key29": "2j2Tupyy3QD67TXKq45xgnwoXuLzyuH7RCjdoyNudwimUo9M522sdYaB1AcXHTMqBsHQNmq4syXaTKSWjLHv1Hrf",
  "key30": "kxTWpaGhxo7bQPv89RZL85qABG9EDuB3FJ89w9oMZRKPkBTr57FV5E521EFnwWzHJBLLb4mVVGXzb4nWvWBdBqd",
  "key31": "cHSgxfZHBtEREvrjHHn7GzZqZZZmwoHGnhRCxT2BMfcDK1a8MxGGodiMLqbCFfvGEURiPVHCfznuYg9TxWCHkxc",
  "key32": "3mLEisQVfMeCL3bvJrdH6SLxKtTdxPkvvE69xGyPh7xAs6JNhG2spAfQHu6NzRfFJy1yQbTiJt7Q2N1R8fncxQyk",
  "key33": "2nvGGeMXGZDuJBXBWUK3GmSLMhhimd9qWUpbTCfKVmmHvU7aUH2mVWbbnAbT6h28tP7HFdqdSR84Z6j7XkcnDXje",
  "key34": "3X3xdZ9MVy98mZHNBNV4du6YU21qSSQQL17sTNYiivYw31ex6uWnwaDqhKooqWGNvCe2Sx5Ky6NX14eKbDeH2i8K",
  "key35": "3CscEMt2Jds7uT8avSTrTfC4bFar5UDSWm89Yh87CgirDLHDD6T8jZ2ZB4Rn8M7oLhQKCihRpSb7MLbGdnL8XLxr",
  "key36": "5JwcxwzSCubjwGiU2j5PWwbdEuWWUuiMRqmzzyBCnFnCPYMQ1rNrCsL1QuU5HkbjKgXQtP7xiNR4yTaKxDdpfRUV",
  "key37": "2qYBcobDVMDCPfeS8QHUNFU9YP49MZN5NBCe4tFv1iL79rHNnpqJvSDGGQ973GAPQVvDJoqo5MY3NkAYmmkQEM37",
  "key38": "YFKCLrNpyUCz3VE9WPoPtwC1dHKBp4Ua5DiZ18UFe3znwdeddjZxTrU5c4UPLRTzfV6MeBzBsTS12KkSdZsDian",
  "key39": "24cyAHz61LK1d6wy25vLodxfVZtpTX1Craod3V6MPYfiXyTAuGvsfU2xchzBXAPnJqubGb71rLHwT1d14bsPkaby",
  "key40": "3j1YfgAJTJFyQBL64q1UYZa4ZZ5prCwmMnS7CYocwAydbsDcXkQubTxSbq7jGFyBAEpN6jgjLRb7T8fGDWrXtTbw",
  "key41": "3fPwjsrwBZcosyq87j6mGsxD9YiYBFmmA99q9hhPPzhxQTVmVjnhh1ZMKFW86yYqmSLqPYab47inWig6QqratX8V",
  "key42": "3x1GZXJfrNcxyCd2by91yFeWoDLwWxFw5vUS9BcCb7WQH8WdCmSqbk6cQBPPmjJq6F71Dr3DULt1XP6zUWKGuLMU",
  "key43": "CFemypKJm8HGbaPECjYevTaS8BZCSRMuEt1Gtvv8e9ut353SNWLZoXtRxFR3y7SxvMHyt6tXbawG1ts6LSqwg6L",
  "key44": "5Pj5Go4eiYZjBPBY6nbv6yBo7zyThSCvKKi87iTpvJYrXRKkmLz4o5NwSC5psuxXPxVpwrsoanheoN7G9hWKgD83",
  "key45": "5Qam5r3i6izXwQXQ93QGxFbK11fUNgPQK38wuvXneCve4R1fSNXAKjUhoNABEbmdhxmvbS9GDYesNcg3hPEQ5Zp",
  "key46": "3kePTHCh13SLwSC5mJG9VdwHpbRnzoKsvQCiUmAMs1sq1t1mqpoCytX7igeUtcypHDbggBYKukcpGHZLQHWFf9rF"
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
