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
    "2GNeUymJo6uAtDJyVnBDuTB7HWE9ZD6h8n5CPC8mDgDXDAHFCi2JMjDABR533sCrMCJprqtBULPh48yoA2PNd2nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqNJsu7tp4JtrmuTztBtt6ZFFw4rysx9xQMhGMQ7iqm72LZsVKwDzE9tVnh2JT6dqAZGUSrmTxmdFMjjZc3DR5M",
  "key1": "4hhVGYe1q7pcrNo1oDeXBLNyh1ozvgheanmguTpipfsqkamVmt6sV9VhwKAw4vjSpnDgrho1SJinqQsr6q4r5NF2",
  "key2": "4aXwsAPphGg7GQMrk8jKDoYpQsfKWFqBZFieJkGjHiqYo5TdPrfY1qHP6YH3RHjgEixS91g9BwRpa8stpffxd8GR",
  "key3": "3qdmgsaAKPdjkHmuk6uZDb9JanXS4ohQ7fADmikS5Sou2faJCidTzxQP89Gd3biWz73iUZH8T4Snpzt3NJW8rMDx",
  "key4": "2vWNMe3G5B7qgC2XTxQ5J22iaYDaKM85UnhhaWYc2A47JAoP2GKsTSQUYNdfaxsoGmcp3AMpWVq7YYpxTSyrssR4",
  "key5": "5VNgVpk5X5cjoeC4wqpUWwiwgyjTmy4s1AKWpaNaMcpTfWc59GfGFb46TvcxYdpSuSHQTSvU4V41d53hDCH2ck7V",
  "key6": "66KaHi8CNw7WMi1PyyYEfWzLXkP7MMsvEk6vHoBfWnS7eKZdQFZn4qHHG58w1mQzpxdNBSubiC89ZEcpaNwN2f1L",
  "key7": "5ki6wrkb1WWvYrsjNGXrm5YdbaLbL7Feh87dYdtok16T6mGnJ5wbLsFARm3741wqvf7MJA3tcUmLGeBw61T2wWyj",
  "key8": "4k1ADGtjvSjxrhQa6X9ndktx7ZFi9JdJyuHdMLYm1iesDVTapnGVrah7fEt8AZorfLNJLiwKRZcnZy8mjzUVo1WK",
  "key9": "2ig69KvxXSD9RSfAvqJ8gg9ykKSvfH3YL6gp9dN7iipnxkhQJQepXSmu3SZC232vtgQ4vNETrD2TbF9M6MP9NuV2",
  "key10": "4n2bvLMMZdtMoPGhrFuaaaJwwGS98FSFLDNQqUKApzNNaMe4hiDBYy8tWqgAeTeFgrHEzVGtHGjbveSa2jk8aJLv",
  "key11": "3gPsokoaKVS3EXST8CrkmYw8q5vAdHPzGjkVimjfV1qyxS3y7sckqZTcNufQ3RukqCfRc64qPAHNr9gATXa4nwdC",
  "key12": "2UCa7jEbXwEJAnrFie5bYeuqzoCDPmEoACwECqSAGS7mn7AWgcqzTAPDWtWdrQsMSHUQHokgCnb4pXo7Kw6rFypp",
  "key13": "Ldue3fhGpRGWscjPyWBxXZo8nWW4pBoJc3LPVBHYzGHAHfPsmXVNEw54dp1Kv8QoW3xHY4UwsJVjC2xb1rsA29U",
  "key14": "4xqjMMQC4eJchqD6PvG9KZfbNWB1huNiYpFBB3TQs1vyefLvjgQ1nH4cAs4DXEfFGEmoqb1BQytpayN3m4aFck7o",
  "key15": "3fewDcLgmTLSjwmPgzMLKHNVBqh6cG7Tanby5GqgshS2rnFDA9Mnq395FM8968cLpoy8Ee5vVDFeatELDdmHLWu7",
  "key16": "4dwmp54SY5SVbcLieEPRhbSnrj2bUD4vhzm5vi4rq2fMkAP5FLdPDCgJoSC2VHsMBDyP8zZToxMdMCDzgLd9zmew",
  "key17": "5PWqaghue4qhwKoTjjbe3fPb72jVqxe6AqMBCeww1Qkpc2G3nUJ1dc2aAjxVeps5XF6PknTDujFE1bCcVhdJ8rRj",
  "key18": "XxucLvpJbKhc4x4qnCnTEKu29CyFH99UWSUC6hsn97TSbq6vcNy2Ek7VaZdtk2ZKPJ7UiAZTeFmo2yvwxS9J5yG",
  "key19": "Afd3YRvB6bR2hJDqV8X7P5bSuc9cmLotePYtSNiJ1uPdvwTmN6X1G1LHJZFFKyJBUUd3HfQ9yZfQM1283tDtmXD",
  "key20": "5RyByFfDHcXa11wtkb6pMqSdbZcnHumnHLWyW4f5KmPRJ5cjYEAVU7mWsE7UazoSKFCdhrqXDz5GZQkXkhYkkYtu",
  "key21": "4Wq27pz3MNWPALQ4kHXEwhsczjPHUnF9ZctK7v9VPSN9mjhcai3156bAfrncsKkf7YSyqtxrq4FPLM5UiGmDjJLE",
  "key22": "59kgRNQFjyAi5HTNStp3chwqLUZaTZhaaKFP4JEZ1C2uTNxAt2vocXeULyHvwujoskpa2pycXqviH8NrkevSXmS4",
  "key23": "3cbCzUek8kLJ9UHdnUegTKR2o7NkW1qe5GGZH7BRB3zpc3FxZ2uES3ZG5gkP6QT4hSEZFqAxrZPVyRtz2JfmUBwD",
  "key24": "2EhdQ2311G4SPzvGtmVihWAYdGLaUE2M9NJJN1v1cEiLtyDKg9PKb6GAeEgVtTqzBjQVnDpqeZ6s2iHnjZYF2hw8",
  "key25": "4HWrwMxH7WLyaRShPqNxGnnGHBxwmjY49XydphkLSUT7TSskKzsuAXUFvd5RBfahGa2M9d7h7db1KXksXdGVUoMA",
  "key26": "4qULxF5PJAj1N5y4YHcMwQL67uxoubWkXXQaYU9nBwX9UXXCQfQov57BYrsRqob6cN19L8PkXpNyMU8kj6toUgJY",
  "key27": "44ZSRGtZ21Cxy63RL4Vve7S4UzGACKgyEEeUw7SyxyhSRo7vzHW9Zkna8Rzzc3S9Z574724wea9MHXZh43EuLWWw",
  "key28": "3tQJofgpigHcTzh2Ne1SRP2gQSBKAExKSKuizxtjzfEXS1Yu4iExiL3Xgdvj8SBwxncwifSx4BYpGSF9aNdvdowM",
  "key29": "47dk1ScbeywyAX14z7jq6ubcWvaZ8Lwb2xqftiQ9wHxxvCEgkHQt6XQvCR2LV8UUqWYBHs1mTPKaqbj5ji1AfLzc",
  "key30": "4RPFX5J3uLjULm15qhRPqewtgvjPc7epSSExfwkzNLr65evubBryVRaZ9eGRGKQ2KYi4Hd3VJoWkkuqPvughSnbx",
  "key31": "cM8MLC9sVa5rf6rJZYChdG5kYj7EgHZx8R7WXB56abXfY48vMFf51VFwrTjXo6AQzwFZMDNiXfxL9XJgppqaw1K",
  "key32": "5PpzKp9RSGAko5VyuzjatXHC8WVZCDDigPUkdD34sQ44WmkwyrAMCBEtEN1aBdTNibiPWkTisTUKQNgoqLGxmcs1",
  "key33": "4GpMnNaeWB5gsxBfcxccyvwSTYKgYLc3ivypfSYFyTeycu7y2PAbY6hay5mdsEXPb52eUDEJBLCVLRTZ47QvhpLf",
  "key34": "5xEcp9CFdovxKUxSEkM594QV3WoXZtx9BybuctN7aBH9Mc7QdFQUvG3uJ2DRM65HZxtsTPVEungtE8Hf11UbphVN",
  "key35": "5dgx3ACroQobDax6KwZfRyD5Jk1fRsMJiJ7WpLHV6jvY86pMPzbfpAw5VdRcEMSrHtMo7E8E8jjYMBXWgDfPi5dK"
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
