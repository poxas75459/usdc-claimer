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
    "3394BsoVnrsZ7w2uAZ1nLHRok2Bqd8EsPGgSzXoZ8RuH7fyT5HmHWXa1DD4omHLc5SLK4kf9cussjeCDDk8MrMBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSbGazfbqgVp3kk71pFVGkonA8PVRB4NvjDHZSjZw1ggs1RyfszFZ8z6PcQPWn86SbHYp878yfkoXBNWYgiQpw",
  "key1": "fRLCtp3rASy7B2jZuEth9CB69yjiAGd2SHZsByB996WUrPNu4tZuyHVDLy6mw4jt9yVYsuKLoB6BnMH8PFd7h4m",
  "key2": "5nA48DXpjzZXn4ienBmcXe5X5k3DuUfD7pY6mBjbV1MZ6be4bT4qeR21SESp2Bx9TfsQUUrvkSoFBvkeQ4a6rfby",
  "key3": "3hktamVFMKF9iA6iH2HqAVdQH8376UPbz5xqfiyZ8JuyEjwkHz79SjVw2dPL7cwX8aHJsvdek4HdpgJPMB2Nv6pk",
  "key4": "61Gp6agWrNmxtZd2bGBepVGK9Dd9x4Ry1Tauf6oV4y3dfcvCGZRkYPgkFAUYcikC5Ssa5ete5vCqE5dxkvrosz6E",
  "key5": "2aZxoVYQQFiqUo68MchK2uini6StmZt6byA1BzPC2UbkA4QNP8WRMsphV1HKWgoaVPwMdMm6MytNQ2t93J22ZPLo",
  "key6": "2Zv3BbNwjviTu4MMMHd8i8MY98524t5zvmB3a9ks53KGUDSrfPepZ4S79e9j57nta79fv7q8w9DAwk75SHwzMbjQ",
  "key7": "4DCLtw2tps3nmNNNn5rxw7V7mpDkZQaxLVRP9yVioaEBqx5hVJxgCsSmiPWWnB5XN1FmEKp9JwUCC4QbG8kqADcv",
  "key8": "UsmWqf2Wwfjimk3185ssjz4D9WVJDAyvxzth3Womr8oB3u8JktSuJS5brdkXQQYdJtkxQttGjdBgDPJPhmXmXtq",
  "key9": "5dv2rJ98zaH1mVUN21A9tQHi5Q814iFGpguA6XEYQGNtrUGDoYGzh5f4DqY5Y7iwdsyjrFEsB7o3U3RNQr4RHWGo",
  "key10": "dweuPjdCYsTsnay3Ky3FpfZd6kFQ6QDNhRC5RCkybygoAKnKNqq5xTa2mQHdTcnJ3YuQoJET1n5UhZPFYXcvv3G",
  "key11": "ASaqRGAvh6nhW1H534M4bXHEbd49NeqvhAN28CGN9zZq6UnHvAEzN7BtBboGA3R68EAQchG2KVS8a8FyWXaDdAQ",
  "key12": "5txgxuSzfwZrsZUaynWj5NYe1T8hTmFsLSSW2Rgkzft6fobkqW1B2RD4F42fup5UJSHYRrGSDjJDa27Zd4WGmtN6",
  "key13": "5hmDUb8eEcnbr492KmaXAYEg5qPrJLRKmEb3758Yu9KT3xbR7AoCpM8o3PFupxLguyijFHB1Sk6GBVVcVhziACdm",
  "key14": "4DGyvebkZ3r7qmpniPpAFHjEwWMT1VHLNTv3uabiF1Fdkj7gge7UcJV5KmMxcBiAeFrfKoanYCEaR7EiG3atLnE8",
  "key15": "5xeYSKJV9FxSFBpCc1TKRZhc4pAfoWGEJC9H1Fr6zSA1CHhsMDwPSoteEqD7zBEdmZNYrkuNbaD73WM5srjGYodE",
  "key16": "33rAaPJE1sZrkrEkk42PXPgSANwfJ8rdqnQ8RmDNsroCFym6sXd1nHAGCdUfeg1yZX6mn3RnfP2gh8CK5gUR3KaR",
  "key17": "3gPyjFJvLJadT2riEsgSEmx3VD4m8XmXTXz7PUzuaXw9MuGGmFYpcUhhRrdh4yhrqkGMc2UbDXTcjYo6sA7g1FwW",
  "key18": "5e67uJfE5QWaKpHPH7AHa9NdcEq6Dwr1gEEc9XaNAmiCSpNsvNUqvnxNu9q8WAbYEny4bAHVcW9RbJRSqyfKg3FJ",
  "key19": "cDLsDjJKahxMCGEeAQrsRcdAM59BAeqB79S6S3CJ3WXm1iJsNgP5wX7AdS9Tjm7jntwggqvRhCzvYHhTZHxdL2B",
  "key20": "5wJLMvPK2NtsddTSt3npmHbn8FELyfTMW26u6LW8oupD7GKsc8vnL9zxz1JSXxdYEy7Xc4adLGHEZBbnFpMYQAYe",
  "key21": "3UVcEMQ5HZe689o1u6ZhSqMgFmnBAEjN5xwKCfiVG6ngYcB2VSgNSMqD75VX7Fkfwfz5KS7ASYHcnT3Dyx2vPi22",
  "key22": "2cuBDzeTpZyWytAhM3YVMAkmZWddnkqtod2zAHzd8Cuv8Arn1yvbDHS9W3G9YEPRLvHg1sEuGmRdMunnjh4hz9Kp",
  "key23": "2eEaEMNvcpZKZh3exVJxiq3y7YZA2EyeDj3Anydj4wa1ES9QW1XgyfnhAqEBjgkfwSTEKR7EgdHQUN9vyg77pZsM",
  "key24": "5LxWbG4DweV6M9kxtpxmVpDhhuJiyqznRNUvuMXRbiwvVtubs9gvCzuqRXa6xWVGYx4rjWF3HKSxpmAVNGGcJRLx",
  "key25": "51XYyvEEXf9M8v71k6zCGkHLbJtX73871MfQFDq2e9xTK7hCeKQ7kLkLGwxC6ncmkKWsAjNHwWAeGgtJrk4b7NKk",
  "key26": "3hUB82fJR2zMJ1Po5m5CY5qwcGnLG6A1RVptqMHgRASSW2NueAbHxzD5iH7pShVKNV46EnzsfxodxpBM8ekrjwm8",
  "key27": "hYySkgCLFCeaQupeRceG84M8ZaD1UUSMUpWVBf2VBwGGKaFMhQmrZbhaTEkXW9Rvxt2R4kqY5pL185zMi99KMZ8",
  "key28": "3DLkkSgQNB8N6dbJbyD9GqGWChBuCjUTaTaSkTvYgj6QPHutfFFtZxPEyzZyzk1A5YKU913rJncsGPzXdnKCS8HR",
  "key29": "h6hkLYztiAt3Nys72RNAp4WC8ZKdPaK24CYNg2FqKgH8WdrYqPnXCHUPaKydWTub1oCYTTYE97b93HyLaXKwRsQ",
  "key30": "2yqZBpM9hjBAH79roC9CuC9Dq9GWmwnryJ6ry7fDGAL9dQLhkja5eLrP5oRJgbuEN1twDwBzZLy6EhcbR7vYWyx2",
  "key31": "2SwZsB6QSpvqek5ZnvCMwgeDDT4pPqiwQRDV8KkMr2EF1z4vqScdtvC4j3TTbSbEYPdHAjP2T9oQdauKQskJoyvf",
  "key32": "5PUmMt1LoVHT7Tk5Xij4ZAgxm3ZKxgAfk2PeSomN57iKYGy5XqNvKKWYYDazG8ekuMjgsEbdysuJBJQHrJpym5Ca",
  "key33": "49yxJ5644KR8Act5YSznR9ExfWmGjgs3jDLk1848CARgsAw12CqCw6XwEj5ZLvmRf5XtFwqaUsd3ajtMAKDkwtVD",
  "key34": "5DKdKs1ZGxewJ6LwPz6yLurECCvMRKcyunUWjoCzGMRsxP4XcRjtZxViybiSDqRiayWW6L16cjBTU8SnqUXxeKtC",
  "key35": "5nn8PjYJrJcgbAJQa71N49F6aK5Q4ZFM4UPNpEcQMvJnGSsm2Cthq7zog626XdKjBWhczGxA3UM3CEAXBCumHwJQ",
  "key36": "5g7bZVNds4rg34Q3WoeXz83VSaP8FcUEQUUv1xmDvFdXMRS4dxY7DjwRXKFWjVQQEz6E5AKsf5vqMYtPPs1Jep2X",
  "key37": "5tU4EuF4FzuiioaWLPgPqdTJPj1ALcKRFa8vWqr2H7cMUzt3HpsjHDf4JS3R4zTa33t5KGa9D7RZ47j7e4abPJQy",
  "key38": "mM31fgoQShxcMx6UNZ5osU5qe9ehu8o4nM9VJM76GaCyVZviqs6SFzNK2MJTHfkmbDr9iuz5Rd7m9sXgWJwTPNZ",
  "key39": "e5SWrnKGcknbNshVeYzp6HG3gqdUEFH5TbsQzTVqTq8UaEy6KJnPAL5Nbozbix6kYAg8mvdxLXigzYeoQexGGkx",
  "key40": "5oszXbgoDgT8A8v9nb1N5Bkt4wSqjkoWMjaf9ieihiRk1xuEufbZ3xGumEYrqLgDmd1TZsD3wHW8iL9WbiB6hstd",
  "key41": "5bkJxFur5MszApMQisoCs5emzf7exVCeTpb4Mw5aRwJSxmyje4G9go7LygMWR4s5pMgZdScJdzKe766fT8AuVzjd",
  "key42": "32kVgKWygdwEN6ApCgCvu1NYihzFd4AjqKaiUngnpDU4GEWjsrZ7a4mhpLaU1adY7czWnQSLysWoNewhDDrXSpKw"
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
