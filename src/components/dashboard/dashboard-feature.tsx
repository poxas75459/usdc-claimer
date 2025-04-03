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
    "3pBwEkKhStiJYnh73CmDmFw4HK7bkExcKHDC7RSQ2zniWWaikpmzWhKV5kG331ZkKQHUmJGnmJ94GpVecMHNuQMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rJdLWnpHkcpY6HQkwc6cbfu934tVi75R9SU3NUD5e8YorPvnDTPncNLnEy4JJ44ZkRGzEuDufjkExsjk5Rwy3q",
  "key1": "5jXsqtPswyhafg9qV9uJFwAQSQfbZiXGDoeosTa3QiWcRuFuAySmG6dmb31v9Rvyr2qiuLcNt2DFcJfgHUvdY1LY",
  "key2": "3mu7w5hSh9CLSdpmhSsqaHW5bA3myCuxErotXgNSsCMw7uiPT9e5Fk3KYHhysW3KLQS87iwUQckdGTUmqiNcnBbH",
  "key3": "5QLEkyx3YHA15v7AKtYwTnUTrkfTKiix2NDizu4X9RdYQfXkZnoYC7g29N4h1ETvMdgPBdH4vdvUf3ETwhXbuTXo",
  "key4": "2mNry1GTLfxi5n1i4GNKuDCfgF4mVLAxXeghWU8c4SDW1PqHRnZgYCxYChqcXytWx1Wh6AvaRpGEWGtaT44eny1E",
  "key5": "4AHnYRN9xUVcfGqiRPFVNtmCyst5cmGF1Ebzz4iznYetZ6jfV7GNBfBhZiePpP4ex9kRhZSSSmPBqPB6Da4Mwrv5",
  "key6": "24kVuXLZYJW73CKiBaAUj8S77H4w3XswNCVrLGhdq3tvCupZFYPTmjF2BE1YB9Ci7LHKg35kELjryhxw3ZMMpk6r",
  "key7": "5U4fn3548SG2gLhA88G89ikaH6gVkunPy7NRVM6jURtfBsxnDjmRFsSS9pBLw7zpkVXRkQ4kN23Q7aNuwGFctMHU",
  "key8": "4n2YbchdX5UcfujjCWereHTtnKHVuW5g2Zgcgmmf4T3xJSgQFdLRuNfCjhjvq44Fn8PYQ6BkKsTM55by98GbZGFV",
  "key9": "2XpXJkmgHkLXgvLoutGKYCWPHYfAcX52UyJ8Wits9iLmgzMbNsisWUCocQ51nGbuPXoLKiHrETAJn3oK1UFE6pyG",
  "key10": "3fDC5H6x1Q3Mbu13ZxVUpubUBUfURKnm3yJYjgAvZnWtuGgCd2a34F3mbr2e6YzvPMLPBQBkeos19MELVvRYj2hN",
  "key11": "5kKCg8tUfQ42P2ThP68BjsPZqcLKe2U6QcWArVainXyUVDbDQ3ZfmEEAQMcmpMpDL1b2qHCGtiKk3xjv897frAmd",
  "key12": "2t4YUrauaNDDHMBb425j89ysv79o4D7DEoVo3n426MNgEprvRdkJYr9sTUEMtz2akeRFLR9jJT7WX1CeWHXQidnX",
  "key13": "h5BwZJ7zFyfUFbKNX1jaXeYVWmuYN1d6shjqCugt3K8uDZ8LtRHnSZqyW6HW3zNTDvxnqGNadLAtLfNPz53bBDm",
  "key14": "3g5tmJ6QYWC6Ds2zGRXifRQkU8ra2T4gZaRNHVw58isfXdnvwJBB791vuPWK5GgHAvDCSFUssWe87vzTRG9UShYF",
  "key15": "DfzuBX5VTxcQ4o9qkQo5Goq6wjZHi7oNqxNUpaNJ4CsDLJyvua38QwT2Vq8DtWeXYqS8XyFJkfGqj1x7X79F2BK",
  "key16": "2N7RYrWWbDkDm4PPHgm6XSjf9PvQR7vWQGbH5C9rpSevMChiJ2gu81r8LLDv8SuSGxM9ncXNxuq4pmbRRPPCU1Gc",
  "key17": "4hihArByhdUNbzeDdoePRHjfSMJ5QMyVpEjHq22Fsu36PnskST3ytkSPwgU94LXG5J4GUBdAuoQDmMsjA4k2kaTX",
  "key18": "2SEuH2NTv2TxipZfAuBym38vQMTbJBXE6PGTKgB7iP4JpP1YM9WpxpcxawHhRXpZkbeSUmEyybCjFo5YwDrNXQfy",
  "key19": "FRqZWxRVQsvnRVeh8so99rjCDEJw6Ke9vFxHi26BRm8TvK32DwMpFRrCgxFLzFyDh5CPTEnahyzgroio75vQrCZ",
  "key20": "WZ9yG1jhuvXdCuVcchNoWVCKRBA9tAyS71wAcB5kZwyccL5tZtz1WWDcUW2Cb75QFULZjgGcgsw2u8S7yreRrni",
  "key21": "5UyxLYeDqmsrBEj3Dtz66bWTUeppVCvc8JCatU7Nm6zeKbsjgqGUr9b6EbYwewPgSe1y9gUqc1jDXmmAyS4ospHX",
  "key22": "3CWmW88FYV7kFWAsfAEuAxau7g3TWp9vqEnutksMntVKXccfy9ToUErAvsL25LojedYMwJKkddiuHguUqLow8w9C",
  "key23": "5gSRBkYTdaURpUv6zSfS88LnhKkRTZAhbCfon1AyLwYharhrGxMcnJ9qSgjcjaCkxUyDXv21wXimsjEXEK95b2rF",
  "key24": "WSkPT962qUr6RsXKYtimRUncNybmktoUFornLVsNoh3g9EmWJi1E6NiyE6x2EzNpCV713xe9streXuXxqgdaG3N",
  "key25": "3dtAaJL8wTSyrjq8D47epkjhHeUCMakPJi6vRLcpmAuDC4LNYx23QkQLLnDYY5Ltx6RAWBC4h26oTDcE2rgLxG95",
  "key26": "51PMHdx45QUhefYtDB3XwF1BSCu6mWpaonDuY14NP5LifTYA5RbRj5Tor61S48tRUbor8NuzTHs8JMbBSjEYWKeA",
  "key27": "2NNAsDYNmufFzStvqKUs1FVKe7UQ4HfVA7eJVpEiRuYLW9EudFsuqRTAyMY9bstJjwe5Dy2q1pRdzW3syHSqWSr5",
  "key28": "3o7KsZgsZKyJQ7hJD3tSDSBqh9i57n7C9om96QhubsSLMb332JjqARq8peLeFcK7k9Wrd46CwKBQf6fjBZXpYUpr",
  "key29": "XCEAVXWkJQFvy4VN26wdeHqdSnn4JxufWRyRYjk7zcWUe38UJDvh9KjMputyLXwdCv4H3fqFWMZ7TxS29y94zdA",
  "key30": "2EayAEQGdPF33Y5mM3szu9hLUBnXL3ezvUSeLTxVD71FRTX3TrnQyfnZJAARdix48NDDvV53i7GALr2hwZPeT5yf",
  "key31": "4E2rcjwMrwi1KE36zUwdDx6DDqeDnogEtmtuqbVbxWYCGFg2GjjgynXZKfYsTmUcnn3TLcWZqR5UsbKtNzqgoUKy",
  "key32": "5imyFcCAuyzTU8qt7s1SHSauwDFk17a1AcNLU1AU5QnN5PDbmDzYjMtwbS4qAFR9SgUESTU8UiQWSJYvjQSZcMjo",
  "key33": "3ARFqgZDeZcFWC8Drqh1F6J1vNhUuFNefUZi96eGHwuc4wH9G3sifHzorAfvbtpZjofCkFH23Xpjas2emcWXwjjR",
  "key34": "3Fm98AR6UHVz3vHgZg7V76FggLbAG7522CRiXP29TarVoZ23CVro734ZChvd63HRvjrxxJGTwcSmxnBvL4DzbqnS",
  "key35": "43eoD5bBRpkSHzxA7T544jBXKPPhWRJ96Qce4V4bc3x3tw4bTUiLSgYTnNRBFf8hSrH8ndHo1VHkETdRqpcHScZ8",
  "key36": "4oPJEPZHdQwbpYjGyJ6v6TSFjs83jouNXhd6N4WDqEw72wApuaWnSCSSwRsPr6BPnMJ63DxxSXaWDmxNstsHomNQ"
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
