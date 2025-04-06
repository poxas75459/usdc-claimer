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
    "B8HosbJrpb9AefUGFVYoi4FwAhjgNe7bs1SHF7JJhkoRx7T3oSjjTfib87rqax2zFa11r4Yrbgu8UFzHFghv9py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udWM1YdP9RZ87tzLCnQ8oVPGDMbnYDdgk5VNMvTNLsMYc7H3whKqR1mTRx862D1fPzNogKzwYjsRafZkBs3meot",
  "key1": "2kUZTzxgmE7eRmbrrevacwZGwrc6frAjhGp2mpo9g8cSWeeFVYDNjTURv9uAUzzxdPwM5UYkWZbGmJhy6e3RGMDx",
  "key2": "4YNukCitxc9X32ZpNBMtF6JnoGzkpuhB17cPhhF9zoWk6eNus1WpvKDFaUxxXSjg8S4wZAtGTGbksLtwPnuspbaL",
  "key3": "P5dXEtD7zoPrT2VCdoAQYQWGhsMw9Q45VArZ9us4mDpNRC3Sw3A3qnhUVYAKFeqRNVPDpcANSAnJ55mZ5SyoeQr",
  "key4": "2txQcMKQLKyE1VS6UV3qMbPWpRGRo2EuS3dG75yi6aUAYPmTH3U83i286xyX6xnjRjJhD5KmpWMPv9t3KTiKToyp",
  "key5": "4Ah6vizDFtRVb9HkgPeozHWWTcaoNxPbVKEZuQPrG16qNpYmQiuR29zVVKi6QWq4cT25FMfT3fucBABbbzgDBQzv",
  "key6": "8LHiproP5josYtTdBPKaqy6WiV6rfoRfivpMCTSQsWJA2tZr5MCdHfy2fhf6AhrGMwZE8NanVcmn3TBt9YDgUQi",
  "key7": "5xs2Aoxr1Y4D9JseHn6bFwLM9JSbocFYtyCnzVHfKBQmGXFZPxFzQyUkty5RTes5vGVnuzsVFHt71qbGr1Mcrchk",
  "key8": "3FGPzwGPENv3BFGArbRgd9XL4JKFze42ahnpERotZK1ibRq5MU51Q8CUpJ3eCt3iRdJyaoZBUCsXr9HPCvcNYqFH",
  "key9": "5jyFgn6gU418iuFCQ3sr9gR9rFfRazRykPVMun5LSXMsS7YC2j2KFp7EWsBukSUV2BXVezchG6spJekhsuUqvzLJ",
  "key10": "4NjMsa3gdi5BrDoFc6MRaEzzvvcqdSJDLA5H1wR9Q8es4XFDAeu3eoPFugR1mo8s7ww5mdQAJvHkgH7F3U7z6LXP",
  "key11": "2LtMxg18zNm9fodwHbMoQ1Sw1tsgNaW6jkka4L5SNVJqb34GmthpYXkQrH8wbi8UZAvY7WyT8fPkMN4AnP9MLm2c",
  "key12": "eajV6F3p4Wt7f3XUYe1BDLP8eNv2Rp5iJCrHiJgiQCEEKsNY9f4xgLrRMT85XwezdSEUyphcfYGuXmvVMpnwogS",
  "key13": "25ACbvaJKR7s73r6HkjtxmQBbvt7LYufe9EcNqt48ErgtMEpkPnw2hpV8rxjrtfbJ32q42CLTXob9yJ42KAGJo5k",
  "key14": "4HJ6tXvE9L3CzQ91gwhUV3YJEzDjFVtfyTVhxDVNJ8o815t5RP6jw6EKh7P2PzvSv1chR5nmdehfey8SqJYRLEiL",
  "key15": "4vEhCGb3QMSbMNwqwN1MAhckCSiFU7zsF7GEQLjwzuSxh69Ep2bNifFtTrhdBGKcVgg8S6kxVB5w3M5SSQSNSsXo",
  "key16": "4d6x1FNfiwBFZXf8yVFrL2CoZKPqYPgfpZ4gBRGKJXdk4ZkvpC5RuD1qskK2csgyHSMDE93VVU7SjAHahSWX8rpC",
  "key17": "3JAxwKWWzKVMUGTFjPp7YdtxNtfN8rAr2WNKT2jkqhHHbYdQY3DLRaFSzbmmFa4KYe1DmqMHygzzisZezqpMSEpC",
  "key18": "2pCS1oxDqWSA4XmvcpNXTPVsiha5XJuppsh1TDjnqviXoQrZEkzHo9ELBsmwdjswi4YMbkaFiiKbfH3tPEc2fEE9",
  "key19": "3wBNknAHxRdSA2twUx3caWsjcsDZvR4jzGTuwqnYCbR79FfStaygogcYwBDgAA2yZVKYLxpsYoePQGptYh1iLkjY",
  "key20": "2DW451Cud2LcV9PwaxNp1P13B5AEtCSdhELkBXnRdeNSSC5tEP7w5nJUG8avnWpWDLESFWAA5mjwxaJaBSbRUAgK",
  "key21": "4XGWJLytsNRDfQry2duhXL9uqo7ePh8UDUJrHBuYkVzXumnZYAwvV6kTEwW11rxYro93TSWe7kkyzAwQwLC5DxzN",
  "key22": "4Z6Vmmt2wWpfFsLEqiiNRRoexnmAHTFf6MrxstZSU13AK3Pk1PAP2vQwe6KYECHjAG5ejWYE3sn9Sej99HvP7Ewr",
  "key23": "5Wu5SW3CnS4RcuAtC1SFJZKcLpbd2q4BycsT6BMghjrURe8STFiwB25uzQ7qt1xyH8h7TJYdQkp7GtLo1Wk69R5p",
  "key24": "4DK23wpBkAQwwfxurvp6EDdSkce5WMhMqTXD3m8nJ2uATTPWCKZtNkM1UxSrwWnURjBYPhGWgJvzCk4rYL6JCcqz",
  "key25": "2xP3jjsjK2kZ4Axe3mruZ1o2ix4SbbF8Px3PzDEUNfjUXnZwaudzwZX4zBVuuuYbn5hyaC2feDvr2Bspc3U2akgN",
  "key26": "2ChW922SQdpqTQuWo9ZN8csH9oprgu5RUE3MRQWubaiTepfJ5ypLxjaRftpQEVqRK6gnfx8RNBjFFSWRTtanwQe5",
  "key27": "2yXCjxDSXVUeAutxzrQW5eDAWcVXsgV7hyCjPgug8wy7taobPfrEDvnaJ5hDwN524fqdvFK1qTCCBUmWV5yVpWeW",
  "key28": "3WpSPPZTpNTKnDNygFTCrZSSCFk4UTpRne38KZirBQ722zVaUf5nSMsdawEo96ybuH4vgL6fcBBytahsryBsyCDi",
  "key29": "YB9mXAciJat3zTKXCmqZmY96BwHUZpKFWdL7pvzFGxEHXvhD9qTSbiVbRTkTHA7MsmeeMDR8BHJhyuGfEGcPidH",
  "key30": "3JsE8FTmrFgLxULtqj2JRMgu4G5GJHnF8Cu8DuPxTHLW5V9ZrDV9tjw1dGeafaMacxGHqABunbnxyDdxfRb9rhAA",
  "key31": "5DGDEFdNLxn9hijBS8boujgg2CWCaXTFGqsSSZWqGcUAJLfe3w4Chxz3MEb7VsNd5f1bx4ixZW4nsRSsSbS5sdrU",
  "key32": "4tA8oPYSBNW9om168WFyweQdFYycMuKMZczZU6LCmD3w8SiwFyZPrMwaYsSwn4R9nwPjnwoYc5UziaEhNVj6oqGj"
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
