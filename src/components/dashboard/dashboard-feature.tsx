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
    "5HmLFWYbWrDvH6EX8xrD1mSG2mdzjo1GCPo6PV6CNpyDNQ4x3DYHcyBEvDoes5gdw7wi6vGBS9yhakorgtYyL9bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zc4zWJBjvnkKu5gexGNz2Q3VT5PpweBbJyPbYb4eHm9wzQVM22Zv9oktjWcXC1a5XwPXS6kNVn3wp9dww6PFXZw",
  "key1": "42QYwWiFbW6R6p8n7NGd36XCRjLDPxHbYjyUCWsMqbsaenUqnTzjMRpj7cjnhQijZxHN8AWABAhG1Y3MJoiza8Qh",
  "key2": "RMmeyuWrTnfWyQkxVDJG5ifrzzf7dTPaw9VzqM44rQotXUYsgeXQ731zLUwYatU3GXr25oV7mvXsMQyX6Putvai",
  "key3": "5JAK3po89kq8oqRU6XQD1xJEjncaNyJkhw3Njuh8giV8MvKqKqY6HmSPGZ1T4D8oLHPkk8AVM3KcrNNpCFdiRPD4",
  "key4": "58HAX2UySQ6EQoiza9NWVgHfdeq9UcjAu6xMtP6M9p2E6tz3rro2AtK26CyEq9B97Pc3BFQf5ucPocPhdwH6xP32",
  "key5": "2kKxSPyW7J6UGv2uHLN27sskx49YqBpfJDCohzc2nR6KhH3V2APGBHbRQt82t72f7adw9kS6Tun7iSq7NWB3KYAo",
  "key6": "KPzxDZDFW325DP7xoqiJ3pcZZnQc8w5Jywv5eRtBfLwsggH6YeSaQU4E1AXEr6in4QcPeAtLcHsvJWaQ1jHdBtZ",
  "key7": "2zwAZvva5oxdzk6iGgtrSYCzi583MifKFLe5WYFqpgr6LoJpgfGZpd3cFfRBCpbhc6tU56ULZPC5iYjKuwvVrw5E",
  "key8": "8jM72yiX97rSuRZgLncPHwi7VaC1TZ1boyYd35LjkGRSoi6H4SLNktDrynLK4u7Gzgz2RhJtvgCy8jMy5EngMzV",
  "key9": "2AjdX8ehb2jxCu6EHHog6XomFhBuvpCDm8v7LbuFw6dxrcYxyGHREuvgg8ZWbpTK1FpLVVcH6q1N7Ld64AMgfpuq",
  "key10": "2yx53W3bczfBzYtfdqttuH5xNSKmCaUts4AzcCQpxaxGyzkrEEEkuKwWomSM1BDoAfRARvr5kyX6ToLK3h87TB1H",
  "key11": "3r1vwSnaChYJ8d4Gsf7Fk5ALyVq33mYhYNBzSjCNCGPo4vuMK553E9ULPEGNJww5GM9LLDz5LZ6921SXDnxRGXxS",
  "key12": "UsYdEPqpuEXwMErR5NU5LzaEF9sbD1Rktow8fP4Lev7agoPrBkyV6b9kpyw8yBngiGdFyYCAreoVX4xJP89wbSG",
  "key13": "4MaxyTqMUMtykeHvRvsoAzfYkASF6hZKGuhteLxqPrv5hMGj3nzUAaHT1cmHV4QgVY6ydBJZtNKpZMEK9qaVK5QR",
  "key14": "4Q8WdeP99aTezkPvdL3niM3DNExJi5QVpwkzUwhyu8i11TpnzcYDuk5SpGMYjuUvhY6hozfnaPEjBSwFbKxEeDLa",
  "key15": "4XmRd1ukPyMRMFnzT9vJo19nSNEhTQdc9wwNdiRZBMffV6PZ8baw67DfUDdVjqDKqkoe1PKFB2rSBpcCrskSA2V4",
  "key16": "2Z3ahbfMcznVRyAkYhr2TUUj3urfj8QACPj9fsfk7g6jmkUFEfXhKkiFfwtTc2fdDGKcri8n33HxSCwmPVRYPBEX",
  "key17": "3EiGhRnfiXfxVJiootF6W9yG55YnCohSCcw4T5AFxCzeBGpiL2rSgcNYG2JPQLg75bKkBKSTsiYWRmLFKUm6vo2z",
  "key18": "3xhzwyM1xT2tAU8T2PbDXwWXThjcAS8jUYEnTTAWXneSgswEiS6YfsAtbEhc8bxY2YVnXLGiZwaq6mmLKocDtnkR",
  "key19": "2Rf78YWGn6mANDiFfKC2BSabrow7UmzMszyBqWy5tHK2WkhK3XMcnfAnqR6YAYW69GVy3UVsKSgh4WpgB1MSZ9Ge",
  "key20": "3Kny59RSqSV6VVcYqy7xUzDaQVvdN5C7rRZRL1ZocLdCqrBt4e1M3ed1XsQQUpsnUtbHc5NFUeBZrF9LaTEWxaGi",
  "key21": "3s2WBFy9iSwoCJBJq7eQeraBUqncnEuKEZT4PMfmtaemSmxLRKSgTWTJmEeB6APcWsjVoj3JbpEN6cPR8YKUft18",
  "key22": "378oxpN97LqFpsvKijuN5BAuSrMEChnzb1XBDPoW4HcvqJMDce4w3t3SLPwrYeUvDJRNfx1dAUHUw65BrfkXh8gL",
  "key23": "4UayJYnskWy99EcF8iWsVhWpLT4Md6zcrDqigpNDD6oR9SewT65Z327cieQvmVdkwDF3HJFzBRrQcmxKiGWcJktL",
  "key24": "26GfES4dzYDe62Lmf8ipN3CigdB6gDQiM2AtNozHGfqvNv1vrupZ3HRMWimTFfJo1dLXo3jxoWQ7QHT3YHZspmxb",
  "key25": "2dBQaaWh1pv4SGL99FmRLiHoMGmdSp5TR9MdBpreTb4waCzaX95gsn215uTJbYySkNcwDb9zLoikPLjLCFqyNsPm"
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
