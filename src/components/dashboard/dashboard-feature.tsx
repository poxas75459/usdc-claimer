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
    "2gyCdEaMUbdDwVG8hX9QHBmm89jzapFSeadoRDFNSLfrwe6reMbxEVXj2oRiGDtBvjqcCMRFTgvmMhoAX99BobFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPPrxX583mt8kYiZS5H98hacFuBNwAaByJG7bxUrczm1QC2JTYhenHXJ89ZQj7ngGyKqnKLpgCq7vAvaL9qiwRn",
  "key1": "2SauH112JtU5tmbSoynn8yQitXkCc5tw3JXkdpFr8yniSTLvTDypPPU78jVq3Q5pwA9KNRRoWVscPXC8TwbhBLCN",
  "key2": "2ABf3vAzRdbNS7u98bXgXMQLnQBD1cQhRQEMTjw46wURBPH9ZieT6fDLtMerh92xC1qLJfn1HE6VUzeuxHu23Tb9",
  "key3": "27W67cG8GN2aCPymoAr7bj5bykpey1kCvrfCwinpfk8AEy3jDuFxC8QbFQgSRw7AifhprJCaStqmHKDgyD4Q1nAU",
  "key4": "5q8BbsgRvk3EAp8ciDSoYjf1GNMiqeZT5XhWvP5SK6C3GJVSysxw8CLuch1mTrnA3b4uPyz8WBSioebUNL8993yV",
  "key5": "dr8XcpEYmGaLSL5PKQCadCWJmC3M4ppyqq5BzydXvjhHfZuHV6zChdh7N2PFzPYPMUeiKCX9QPypLpbA3jJr4r2",
  "key6": "2HdnPJ4eCZXxn2aR8bzZFEppwAjMkcLjPjdhSqHeFNjSXGqUWotXEbj4r8HpszQpVEXzLzSRHVKCGknsGkofeW6x",
  "key7": "4b8euV7Z1HkUiowUEtRs974PdsZj7A9YXJqghVtQbzZ2MPuC9ZCSus4g1VyfFzLpNQcfSWnaZmKEo11tcu2tzgu1",
  "key8": "5pTrJyek7xLtxAcn9HKx3jK96nFsiHEakkoxR8MkvaiqVo99F9ctGMkvmaQrVvygmJiXKniRYLujDkUBu4DMSxUV",
  "key9": "2vf4oBvsJFEQsq7GqPEt6hN1V84gZsbMXTkPqmZFRFt1iZfigGFRNqQQEhcPReSRTQ4aFwSoUzFXYtm4YNXLnbBN",
  "key10": "3sYWC7bKURtMuaA6VP4RjS7n8qDBexDvMi1FRwCf3pPh5gEBHD8Ch7UFMTgw1XGKK3QN5Wc1u9ZsSMQUMWiKUTGN",
  "key11": "4tnZ5waCeBkZatJaESyffJHVUPKt3yxRAKXPHh5kYxtN5UaaS7j6PuZJ29B8KxvhvtH7xpbjFAZsXF1amF7b2LK2",
  "key12": "35mFEJg8nLb2H28bh5WfKqV22V8wXLnUfw2qHQKy66hn6tWidUqBVtvdxGQziS4tZpNYp4i8jnvQGTMEWwuK5tJx",
  "key13": "2oznw4RvN3D8ejrezB1CXsbrNjxrUgPRXe2rCCjNvq1HQboHeK67usc32ADYM4WPcqSdsjFAZaYyz6NRRUN5sBte",
  "key14": "rPbGgTT6GdcVCQNKWRkWHX1zSDBqkyMGCTMLYhDpWejDxV5qrvs6sBy2W6eGdddiAp4eq6NJsYy1qakq7CTYPNv",
  "key15": "5cjXW4d7GSGyfCmkdioqN6rfTNSzGSR6ug858ZcmfMT5fQnUDVkHMmZnQgFFrVx3ksYofNcysyJGR6hSGnVh3Kwr",
  "key16": "4hCkUfHTruQnBDrrtZaj6kHQqR9NUCvRfVDbHHqUtmfC2tT56RZK9Ajr7guj482qkBcoirMTwimKrsSY834odNAJ",
  "key17": "4sPBknpAQVcN84LBMpQWikmphC9qF2GWhwEJusHayVVXHsjbJBaU8opiPai7EDLgGwEqLNuxpiKiLVKAob4oFo1T",
  "key18": "5ahA6fLEEnJCqR5UeK4bEHoCsDF8SKi7frnDkrQpT6nPSiPQF28doowEHNQ6isws8T4SySqKq3FjLQac8pELLHgt",
  "key19": "KXvzXkVobuj58visv4etX8PfBWpr3aGNYFzXNa1532SWb79c7zXMMrFShsKyAsUiabTV4uzwEbM5YKvjunPLUnb",
  "key20": "5nJFm28Dx7PrvjmRUmbVuZVGQLKrcRaCvCJ3DGteTCKYdeSszRvWdYQd5Ld5ZSPNLnacKDJbR7CcLmCsKE66jPyn",
  "key21": "3jrRKCnLCtFJpySMCFWeMzbnqqY75SsktLkekjkgWYy6TE9Fs6byt6J7iXxNuFRXhc9j8kdfwfriqmoiz3SLLwAk",
  "key22": "3KoCRHtaoUyszo1E67iWDPu5HyaJcJr1sHDE6Zg2n2zQfJMevFm7mwRxfo1DNUuGEreoKeuLF6FMcZRMA9LcUH8y",
  "key23": "3zbo5iUPkPxSroCHobJsSsgzVFEHnDC9Hp6K4db827KkMh9jkhnjUBaracjsafQxhb4szb7DKEWvEVuYe8a4Z7Er",
  "key24": "2VRrT3Z2bPjQhEXS7PqnonvoNAGrxbacomq472Ei5gbC2DGQBZhMQpbCbHvfyuuNQQ9oEuHCLx6C1i1qf1D2wGU5",
  "key25": "48U1LHbHGL1pVEuDYvjJzi4ZCUAGfvoHn3zAof1SRzb5KNFvxdsCvvVAiyKketBucd8hYyy87R1K8zfSnyEPSSHh",
  "key26": "kTmjHFWeoQUJgyzAg5EisM7tmeVRQACpnWvKgcQU6CdDEgGDec7GtSjBqjb9M62gFQNq8UyfsnJSYFqrkexLehy",
  "key27": "4mVqbRTW3HpSBopXcy2KMrh9C7yCeKz4gvEEgvYTHSgrfQvAMndsNHC2sPTSAgUPE1sZZTLVYxRy26BKobZJNHrJ",
  "key28": "3H73TaATWEv83nEvYUoETUajYFR4HEdssppGDGcQ7BDDr5jYZPDwaL2fejSS3eyhESu2UpzMguiQBvnUDqbMBK2C",
  "key29": "5RPatNsTGRjKQ9SCMUBRX3UZQ4QZ9Tb7LQpNAbiqpfAiHczkFzZ4Wb3RfBSeaspdk38XpQGHBpGGhhPosUcVJyXM",
  "key30": "3EALtRCinYUAbWC5L2uJfcWPio1tS71pCCHth8WvXj8MJfqiHTdg8CZvz4GDkQ25QkSkStaogiduA94M8MxPKnBG",
  "key31": "5FHMfKic8ZY4933RtMV5xD2Kb3f1svLFPDSEoR8ngZvWcGNJhHaeuC8P9yHsNcBiQk2mMLanTdyCQHMQfe61UQoU",
  "key32": "28pEZRYoF1GaKZ3eqAL1M2yamvBtuyYC3TMk3v2uAuk1ES9uwWgyvZdE5oKHbSDLHNcn7rEX5Eir7b8UFUXY3BWc",
  "key33": "4FjqQ4DgFroYr24wTChQ67DbCq3vnbiiqbdXLMxRsfVYKZ9k2mDzw16eZobfepDu7bQ5mT6E7F5z1oFVdAVKokkd",
  "key34": "2hUkAwhFr185BTY21ikCFRsrdyQBs7E7ZvEoYhGX1BEDKWCRH6dQ4WQcEb62mEu6cQxNVw64n9vNfaHFCXZeyZtn",
  "key35": "4dQWiKV9FBBM5D87Yk41c9S1QrXRF1q6RJkg6zbmdfx5TuPZCBa63JBcdvxBXRuUMcNW1FTnhfTSAqq27wAnrNn3",
  "key36": "ARbHqDqx9V8nkmjT7xAVff7WS6YHFZGn11WmDz1sLUAxEDm62NYW5Y79RzuZFZ48mNsZUicUhHQKnkbj8rYyb51",
  "key37": "34RT9Vf62mUFfhqN2h8YH4PhPBnuJgXYpW1QjYtZCMUsbCxeaUsJD1iR3SvQmULXKEm8k4TT7UbpQfjm3DPY599i",
  "key38": "s2gyJxu12aJeBACBvBqg6LQ6M4XCcT1MCs5BzsFkn1uQNTQzbGa9EnRX3qh8HS1zaZtgJsL5dHXTMyrSN3RzNd5",
  "key39": "2gC5eMzs2obxZs3jHzRDUgiRYjC5jsH6MnzskFFrPTmscr5VW36PUJVUCzfbuLgJHgDKK962DyU2VUtqg2nrTPAF",
  "key40": "5d5UucP6A7GKCuE5rPmTvbJvwEjPEgp7K72sK1pp7723dJULcpJAA2fddpmm17Jc5LVjijKnBtePA1gs6dyuBpvt",
  "key41": "dGgHfUMrg3fc1oAD8oh4xEfmkG2sU1NsMWYN6HGyLsAEqUVJKwGP7Njtb5BkcSZrVcDYcVE9ozrWwMD7DPGwydf",
  "key42": "2rHn514WSnARJrUko99Y3noXRTNUKvig7reEd3MEGvzBJu1FCbYviLRbZZDq373uoHSsD6rzRr1BWrchQGdnKZ5c",
  "key43": "62Jqd4bfUwoWN9QULudkb2FtgXqmpeTKbUZRHqVEUwToyUWYFSnTnNkHNm4PbABcf3pcG9w1ACMokuFcdMoqFpbF"
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
