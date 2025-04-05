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
    "2DDaBPW3AMW1EW1vxGo9L6oP4xrc3y1wPX8zEQGNeHDTfkdykA2u787TshiFufUwNW3737zPgqs1V388P4RskRWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joAERdowVn3mks7HfDaBazqQ8zhhwpcXudir3PaFQpJdJxKM2ACNHdH2tTZR6GqcoiC7knTTvxu9qXrR2qR7D6r",
  "key1": "4L8HWvhePffAvsBwRJsU8MGW3eUCw3QREaxHqpq8PS1NUCKSPLMgF4P8x8fpeXYemSjxL5Cg66Eq7jU8WrZZj3kr",
  "key2": "51VCvcisL1SXrSZHdXnFU9xmfMtYAqAFwRz8fwwT4aL9QpbcBmoz8CVXPe4NXBPAD1Uke4UYcjLcv9VeTRqqYWhk",
  "key3": "F2o1BNi8SEtRVa4KfBNxNFwwQMn7LEJzU5aJNxdkpqfpaMaPqJoDKr1kXNnVGqfP13djvCBfzTDHo7aSzh7xAcj",
  "key4": "wr2uzAwrbjphkFciPMnxBbCwx67gNN9R19D2Bunzi9TrZZueS4TwTrDfxkDkgqngSUUFBbj4sgmzRvGojp3s6oe",
  "key5": "2TgD7ewVFb4u7E6srCfjtFNjvGwyVHF5pNgVmKri9ozLNohHmgE6fab7bMNvbWkShknhxk2Be5J2aA8KBaHSfSfW",
  "key6": "48XTqvp4EKyEhvsyGyStkuYy9AUgNHDQQzCo7PPeA9JwTfR1YXVSLt2bmZYPpv2LBBgWkAvthmedgC3abucJj6Uj",
  "key7": "rJS52FGXMWFwPHqYyoVyeRhWyWMyskGV9cSnLam8kVACScgZqzL2mW62NHU9ZKEPUVLnk6DEz6phyUpZfNmUDEn",
  "key8": "5siWPX3Rff2XFDRMWudcjLSPGhPbGGZPCMeMSxkekhnkSCc3q4Kmj8pmeTMNsyFTa4UoaN91aeCiGKBFDhd4yJAV",
  "key9": "62NhXvVbBvdZHesy4mR1F4KX8FVSibiwZPRkZqRzpEFF32ygnZXitojB8GL8s2WPu8bfM3L6V9TayVRXqPTbUnUw",
  "key10": "539ri3W8yDFTrRYD4BHG7rvBpmFRhDjMJk85wVWNV3ZvCZ6pQLnHDZR19z6PFKKCKj7z4Duz656jGQrBSxAHkWkW",
  "key11": "3f4voiwQdJNghRtT72BJbEHaixtCvNGWDkdTcMeTtq7uSPRz6dEokwEtjWu1yuieo1m7Xw6m3r6bjmdFXEZ64eDx",
  "key12": "5VWjo3sV8taNR75uvpQpu7NwKqteZk79nHpgA6Hig8zDuXVfibJSiunJhHXXjvFbQrvFDbEginmurnWbRoDdjbCL",
  "key13": "4D4UvakSghh9Q6vzeAH2TyDeDmM6TdX6dcNP6MUKpjB29BsR7UC532GqMdqu4ZaCZhQ8sJ6DBWkWfKQz5ozCNTqU",
  "key14": "5d5KN9bzEe7iqQRd8zdZPQimkuzzsJwVynqxMGo9mPvgNbbGyr3GTET35rWWKaaKoWuh3pMEBXF6TFHs8SgCz4FV",
  "key15": "272Gfeey4kNJpUtM969euzZ81tC8Fx6m4MbjNC7CF5FxSwxp2djZXtJV2yA9abEb2aCqqmqdDwdm4gNzDDCAsbPd",
  "key16": "3sPL2zqb4wKoBppNtBmv8FUTKxmvou2QCgdAkgujRiSfK4RTyx6EYnD1jCMePTeTjwAjSPFR7nzpH5B25cPYyBmJ",
  "key17": "2EnstN3UFVjpkyzLz26i13sU7e5HPKzDJK6BXiVTRyHiU2XgGyWfWPLaY9TGo553nS1rXDBcvdMfyrRDRqou82z",
  "key18": "3p7KXvYMxtWNUEcy8kC7P1oHzQ943jqu7ksjzPC5P8AFmCnKiJoszNtjr5ticPGPV1qUjVKcbdrVHZmQgbGsb9L",
  "key19": "24AzNJwioEuJdE84U3fgrTAEurMq1ooeFDjkzRaa87t674pANr3TNcNDt55CnNr8cYSxEg237V5JRZCkJA1usALq",
  "key20": "5SVDLReEv9wVv2dZEpzRixSHmsZMhD6SMuech8skqLsDZmUov13Mi598q97gYp2G1DBM6Zf5roNUouJpAfgMR3PG",
  "key21": "66V75fTriZ5hHJvLCB3cfxA4aMJrwYVLo34bRUeTgZrvALizsSRGhxDJ5nKFar3S1oXPRfWQvV2fofd9VdzMWNgN",
  "key22": "UfL3QzLYMiY1CNFJUY6Hofkysg4S1tWqm9bnBaBiAQGNAGwAWRqrjtqrtrS9ztcbr85PgtX19YkryeBwTUxqtfH",
  "key23": "4MgC8ugDig5cY8JKoMW2dtwhU3jPnbdh5JHQ1dt8tiDeyXxvedSPMq6BpKAZhw2zur5wiUgJsHYi9nefEKoT67N5",
  "key24": "3M8yUbLHnAhenL23nmYpTf1LnhBDPwdp9iSaJouicR1fZDPbyL2Kco3Fazdgq7BZUtcT8PTypiaGnJN241wkT3zN",
  "key25": "3tF4ViJFQHGGXhZJFSYw15uVi71138xRU9VuJ9fw6xrDMHB7YHf99Ban3QdGB8mJpvEL7wqn87U7VkosYKWT32pM",
  "key26": "4egEAKqLgXGcYAFVpQGRqTxsgzSvCLW7PmAzL2bqDrjVDuxkhK8ChYVuZu8ANwJPnMNyEH7m59E2aBNusyWZ6sfJ",
  "key27": "2cvG9QujybC5Umtngsb7MoerPLnat6To5aXQHXpApxeULDBJiL1Q6bEhiCjdd8VuccqLf5EN9WxU75tDWXdw6t4P",
  "key28": "QRmDUgm5oGQP8mWhbJg2wsfwyj7x9ZohA6EUMPUJni8GtYbwpMoFsg73pobqBYPrVApaicecv1Bdet5kFg4Hwy2",
  "key29": "5UrVsmjvpEDRBAtFrEV6JS7PpWVpFNvxsyxLyLjnr92BskbkqmNa6DFcEht86v3gQRbN75GgXE2qjKhreLnZXHrb",
  "key30": "5wgiGiK7ieWBKdPriuXxtQxDMkCWEi6PGCseb98pjjY3noy8WCm9wfnGVzVyTft61RYoD5ZUziWFY4KFBAA5FZKX",
  "key31": "A9RVNDEJs6WxFXpBPxKyiFdV5eqzvi1vxX2VEE6RraRFc2YjSuR4z9hF4BnLRwswMMz2rDWSgbF2gEpcWpj2CjV",
  "key32": "31yUJWyf65UyNuFwVZZVLeKHTocGXgc5w4ER9Gxv3WPRszQ5isbgMfQaTEPMSYmrcpHRCxuFcksy8hvDGFqcnSXs",
  "key33": "nWo8VCc2ELPP21yGMmGZY1mDfKrTraALeaoEu3Lnkdmr68jnPZyqotS4r1mQqdqJVbwy4nc7nYhdDiHXVufVgpx",
  "key34": "5CMVSLEYfGrsMfgj5QfZMKbvHtACfoMateQSimuox1RsNSnhH8mknXtARnq1aTzk52YfH9116QZUdg9pw6Uov5gk",
  "key35": "3MqvgQ4eUKH43zdeGZknx26zXwMYVLcYQyzkF7Ft8Yjmuj8w3Lb3ugdGDqCmY5Sfsw6LwnpFug2A6eWEweUZUhhf",
  "key36": "5bPD7LqwLq1xStVKKYGr4Nzoq9xxWaNVbPtp4FxKttg37UKGG6rBFTsEGJETfThvW84oUZaRGNSyg9DgEfDqUt96",
  "key37": "3ACKx6C8pjCsjFXCQLoG7Q7iXWju3fgk16SvX45zvrdQXgCGNSH2tn7Ptk9wwftNiUWaTHxKWye8PFwM9pPsQEwh",
  "key38": "4xwfBv2gZG2xjTwH6ENBcCMEf7Bibh7eexukta9vtySG3oLeeK42f4CmUmrHsraP6sm99PTR6o6kTivoCq4i2ZA6",
  "key39": "4FHQUrkWZkh9Xv3ZdxoHMjJZa4wc5vLprSXaRuJYfKn6EFE3aAW9JqzTbzbG4QiAo3z6EzUn1XznpPEHrwFiKkXy",
  "key40": "2UYAG4oeyqRjT4i2m1KnLs7rGEFwYiLzuPuXn8HGfnwouYwwQ3ZQoCuJhYAZ3FaDer4vujdBHB4iqkq3YakNmJjH",
  "key41": "299wdYNPc9mWviJGphg731oPrUd2inWw8v2cjoaZTPmc7iGdnMn2Bk8oXFRFQFVv3vUnPD6kmE4ftfo76jLEwGn6",
  "key42": "2jWwH6ytD6LjVkQAM6q2owqsRiaFfCpcvfth3GrvYjtUNHAJkc9VWxAiaC5R3F5ogG4kU6sKneLJci9Vxr8zC3qz",
  "key43": "3hpskUX6A92aQQDjiBFkint71SLQcgJcK6iN3iEqR1NBzehdFo9FhFasmeSZuLoTaStes89iM2bujrkVNzkT2sZV",
  "key44": "3vjzwR6u8gvSPBhDeYMgFGs2a8brdmma7jMkMbrBv4snFgrwZVjKVdVAvzS7u3zSGH2rptjk9oScf6wUH6KPAKsU",
  "key45": "3NsMCMG7NUB4SC8SkG6qkXmVAV8FaBbQADL45d2fh8xgGT2A7LveQdxmETWn28hTg4QeKLR4dPNKzpkY24WZdqFb"
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
