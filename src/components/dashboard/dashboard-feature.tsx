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
    "xy3kTEi2E31uJnjycv8g2u89Wn7kv9KKL93sZAYpDgbD8n75AAji3NevCL92fcajmiMndkLEm2VpppKa7aGzw5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZnn8nBsUC3xoLPHmbKk2WDewAnzjHgkCaanjBmeKh2pf87ttcTPu23v9yEBzs7yEQwBz6oW63oi7x49te4oCZY",
  "key1": "212PLC4Dxaztyy6h2bsyZfqVaysuSeESHBT8VjYjLqn7mdPX86b94YAJjMdF8DqSfgeJXfJW4o2SyJ5TTRXvAA8f",
  "key2": "5mZLKkArnaVVbq5GVA9F4dXzVqYqQF9dxBwzViPjzXEECVTsn2V9QBcs8rBmV9dNtCTfgxUWacwq332j7wKdoLpA",
  "key3": "5xPfDxg7Px1daJNPofj8jsLncC3UUmyb7eqGoq7dMBuFASY5gLQr8zEje5cyNnHUW15UkZqMy5A64Y4Bp7athZg6",
  "key4": "2dpPxTZ6QytcUiTJUoEiXCTRzRa8tBdehYWNv8e4cikM29RyCqQzFTeyB8gpP7k21oG1EPYjvepcgpQWbzaLtRD7",
  "key5": "534wG2T7Jz98aesteBc5K8r9tHaa8dL5RFLu326TC5EXXZG2KbmVPNuLgQ4tApyHe63H32H92xd1MMQZHnzHBqAX",
  "key6": "3A9JXEJ9NMC2D98avyFGujsf8GdtM4MGaEUTsChbeJUfsLDTV7Kse7UHwUbc4Y9BEP2TbXBUZsqPLSqU1Jy6wyQw",
  "key7": "63znMKtpFPotAGo86orupNk8JszFHRwRH3FbZrX9sm1GZHMTGRtVPn8UMxNXkBaKchX5QCsaZsMw3sS5Kku6ybc9",
  "key8": "WZJkFHz3EWaMKnPmfizA3Rzv8ESaNB1A3PMhX5znkkhtP2BUhbDzMgysdRaWVpr7ky2W2Y5JosMevEY437NkKqE",
  "key9": "3C9tRFkDBEURy3dJDEaYPce61HfYvK4mcezJbH1PY8CujpS1spxUuHSvCHHrV8o24trzt8yCHsGEDukkfwUvTBzN",
  "key10": "2XDKuZiZ4QgA4hCTqvXMC7D7oTiD9CubHmn9yofCvnijrBhmteX7zSCy2hLftZdr9gni94UegBgD9Nj6cumhwSZz",
  "key11": "5znwvC9GRE3FiaLKnUAgpMJAxrtind6ag3uZPLu8RPMiL64Bvhrz6n2qmxmibQh5VXTKAbTDmjY3eM35Z9vWXXDG",
  "key12": "3pApbzyvcnJD3BHXVjgyUSchc4fD5QanQSaWHeCb12NFGzD32Z41qSU4kovSuRuuLyPzZyu8Z2ka2BYr1HnMtn4s",
  "key13": "3vQWk4CSovijGLHNeVDy8tkZJPTLiwhFoeR6HxmbRipghNM6khQ6N8YshrohhP5vcoLVzDRPgQLrFzzoqswE5Rff",
  "key14": "tbmka1xqrZbDz2TWA4SgKHpZ72tqZXGmitnyEsiaUcsncZqu8d58sM1CqZHKj3RaZHFRbdngRpD3sXdXBCo7C5k",
  "key15": "NXLBMvp69QVpmX7EYzmiSTskVwVikCvXYDvfD2VzLi82T3qh2kuY7eVz1oR33vP9cDQFa8WkvXKLsMKbcVDhRpJ",
  "key16": "54TJvWnPhWm7FwYwSrBA3i3fdJ1QUr5DYupsVSFoShCCi4nYCNmDiBXgmhjSMvAeWko4Bjsx1FMqcdR9FPbsKjcY",
  "key17": "2CFyLvabsAUM3ZVqVtypvAvCffeRWNUhcnCd9S6vXyK3euZoSAxedNXKY5x5Nqb4p9UKuPPZMjaYbA9tDi8WMXa8",
  "key18": "3iUoH4GGkH7hZuQSUKxnuEmDzzfJYei5RzGisZAmtdEgwCbw6HbjmMoqR1ps1ZVccTgBu58AuewfX7EBjuq4LZ8z",
  "key19": "5zgboXq9dvYY1wJF3UfB44xfvTxBqcKnea8a1HnXM3J1MaCPbnTGMrWNkM2AFPJUZ4xfSAmJXnWEZWmUWCwer7w3",
  "key20": "T11ixzGQ1tEmKywjihW4V7CtoPwfmfKf2R2VC6fDAjhByzg2Vpq6PfgjcZoeKbgoQRgQMi5zDRp9CAN1ABuSC6E",
  "key21": "3KcR9yafAuffgmTeHadEC3gWJF8Wopv2fJxjA9jV48MWXRxBQnYWBEv8Pc5rAXrvkLMAoWrGuNK9j6sSNVdCqAr5",
  "key22": "47GW88gSYdkSZVqCihcKqsjDBqqW1haJPAeNEZPpPJocKLziUc2qENc1vmA8XMxaCrGTnwYbcqouJfmp2sRnPt6U",
  "key23": "3JYM5f9E8oPwSBpUNgEeWVjxGwFkF41WcCCU5ytwNgpGaQCSWmyP6Nvua25TEwwWeEyUcgWpxa4R6MGMKxiF2BAt",
  "key24": "m9VcmkTQYzsU4gYt7zKjxHRjHVDYchv6JsYWSWB89BkgufhjT7zEb8forLHrMYcf6TgXFsoFU8KGjqH6kTyGgm3",
  "key25": "3G3pUfkiYwETjoYJ9CD5xG1tqkc2DUGGWkoSKsgUZ2Cp4dXzewh8TjRobiPmaU8NkVzpxjLnjfYyCXHP25foczga",
  "key26": "58R2mMFfxxAmf8TXKsmBFS7Lo15GaDsT7X3HgcM62es5rkJEBR1kt2jpBf26ABEXxeC7TGhXrDQcsbcScRLLDTqC",
  "key27": "4TxBeBxjb2EPPXanFAdcgFYeF1kRP18fDQRNdV1gti7iyCCdSAVv5TePiJd4DMhApG2mtPP2wXsBhRo8F12yyBP5"
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
