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
    "KR9srbjrX42ZMprbtsbreZJo2pj1qpGcwmrVxQeF657FmVWgGhD9t2wpaU2Pvah8knC6fJpf87bWrScxaR1dKC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eW8nSW7UNX2ESpAnMobrWsFpTnKYFrL9Rfu2rSppnUATN1j3gheMRFt1HAiLbP7jUmepPwty1M14Cj8GcBpV5v",
  "key1": "ZnxMJQc9eBb9eEJRbkaxrvXrScyjmUuDtyD33Eeaup6xSFCXXpgd8HQ79CQpQQDYgVxVtigzdEyyoGTQP5g781u",
  "key2": "2brvP6aaxjEhQo9FKB2UKHUNuV97CmBBuPh9eWfB4p4HZ7FbaRC8tYCcy4bTGjykSqExCMvSR7XpogKRNRtv8syC",
  "key3": "TjW4qix2Zs37qJqMphXB9uTMVML4KXpHrPNt6ua8H3BSozHKyFbPuG4vaSkYZvjiavQbvggJmXewTVJJDvMdL67",
  "key4": "46HefhxBvrWMaHM89LZ969qCRzEK9tbk3RpLvPCMoc388f9RvGu8tgD2GzUoUmoVWErxXyBzXwxPchV6grXR2aq7",
  "key5": "QNui2MxAXb4bKVeVPUbApatWERTM9iJ715kuNWQpPw5NC12yVEGqLqEJ8WKyqRaX4g1x8fqNGqVohKoXTtpeXYv",
  "key6": "4PKHy2fs3jXAbdQwn6DBfsXd3JLYJa7Kitu2Q1KaWXqmPy7wZZkKFNKYRmMXkvK83E8tp5QozNjm5MkioBqqcAra",
  "key7": "5MoTWPvsy822dZ2f9MgqRjBRSVReeUf4RisZjRBjgiCGDyps5QSmKPXZtvjGdgwtoRXthfUaBwmXgekSa5hpDZLf",
  "key8": "633NPBcQBtvqER3XcGcxRBpW1B1pW5N1M5TZLJHTcUGJj1UZbaqucBn2dzHju3cctQ6CMGTKHQh3x2HiytfqJGAc",
  "key9": "2MLHn333UyjX9S1hayZk2pZBFnFs4LHBLbDjCiTQSsytTi8yTT6XDVdm3tHUyy16YgWgT1kvPV29PsLMXjLeeaX6",
  "key10": "5PA8EumiBmfvxQKBDpnqSDM9N4js9pZoJc8Xo1mHeZaobx2Mo16zde7WA2kDB7ubJLGW6rAXEdV4yG9eK4PvsDBq",
  "key11": "3Dk6FRqT9n7ZQpo7dQXgzqd1jWnwzyQvbpvZ22iMsGtjs2VkD6ccr17jEXgFmqWf6TxEFQ76Yb93JkKEPSNE64Ly",
  "key12": "34KKzasEXzsajgiMdtvHprJyCgYnfUiCZjBk6hdJinp268ihgXEnfUY9Q7Qp1jdxeyi3fbG6sKqDicmxF84KsbyR",
  "key13": "2hsMam9kdzmLgZFM4tApBX9qZDJnUAzz8Zt4vov4qpXPLkx9Twr9HeHqV1qyJDQCPJUz3Uv6ELLcv7KB34TBiqym",
  "key14": "oTSZ9j1HtLYbhBTT1RrgE2w2yBngjpiuWSMwKfYmEBgNf4msDJCeem48XGLnDTLZSJ8BvNAuiGeUDzhXL47VKBv",
  "key15": "2ehqd5dF9E4fSeiSumeqAtDRN15BusfPd7F5CL6uoceBPq3U9zk6HB3QLXBfDDv6tfJswhWBeFWgnLgj8uVvikZ7",
  "key16": "5t7rqK9KTvsSzt7oAFUasNQyCVXEGxuDMd4zH8bDXPbswvYqr4k1Edroo3wTR2QJ47rf9PQLbLex5wGMyFZs6dCF",
  "key17": "565y5rigDS5awRGoZ8WuRNxMk93jJ2cruAgP3URNxRVpLu6xyRz7RuX4bCzXAMrUhaAApYgWQzhwKtMuZ7uXn4ax",
  "key18": "28xADq1dDvG4WeZPVSk45wHJeReiGNBpjatF83De178n9NzgKwGr4MNUvKEdyV85ThyeLZJAfG1y7WrFgwspmf8D",
  "key19": "66pwUyhFGQLEVhvhkDEWgCc4wHRW1MizquuqKxueyXk2GLPqiWvkti96VUr4ofqVgngv1AgSnTbm9H8UX6u89dP9",
  "key20": "4M4UBrSpaxvcknDdXCeytXuujZeVcYJHHcmChgsWYQADHphW3GzdRKAEJaC2zBzWNPkbi5nPwFswcfzC1iCCUJXw",
  "key21": "657uiNv6j9u4wkCo254tfQYBbdBoB3amwYpkP6wqg1x1rpJBWZy5uZf5Ct6rKTJpWEX3bKB1BTS6tCkhhSBjpaSD",
  "key22": "3jKVTNHeZ5jLxAku36VPRFNxCpMUQSpp6crKUoN5c3oA5FtkZpQRkA3vRo3NyQm4yuqi8hgNrv3xA3kQkyW96qfL",
  "key23": "3Zeko23cH3D19kPL23LSjUBUPXAt4kCocREQCjeTAMNvjLQfQ8A8bmDPbjUEbWfcSN8Bf9qR7VLQvjtxfw9AXUg9",
  "key24": "2C6BD1oWzVy8qqmjN3J1rrsxQH4rhoaZcc5q4DYCV8aBKtsHviCiuCPQW2LBx1YjgdyoZ1n9sj2hoK2DBoL14EWm"
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
