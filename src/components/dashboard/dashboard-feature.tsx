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
    "4xdGbgSjZfctpaxNB1MSSmtZBTDjimCjYpy9Rt7dCRuihx9ac78Tpp5oCb36pkLrXD7PnDiB7EDuT9RdmXg5pkjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627Bw6bjk8CQjY2EU2MGcisZt8Zo6hcEZXqzzfc4b1VxfHtjhppK3U4CRuTCF5k8d5WQmHFXCNmbExh5uTMUoZ2Y",
  "key1": "3jGyvrG3f5QiCyfCqQbu9DWuriSAG6VBZY1HnsFDrrip57554BbMKjyRw255KwQuhY8oEViLP699HzunUfjgwNGV",
  "key2": "4pp6uGCQogPHbGegNSwkYcQrTysJT3HQSTA4VYXH8j8uef7mouDC92Lwcf6eKcY73sYt9dsA6zXEhnoDq36oDkQY",
  "key3": "2jZGLizRbnqpKiKV1w754jdS3XCFdYgE3pBhSShe3mbfaUz7mXCiwLrCMfzcLdiNjMwaT8Tq5gzLX4CMmBFWhv5r",
  "key4": "5VDEe15UjPgxZoDbV3T5hGr6kbrCZFyrAg25nfFanNdc9u8KVJZZgi3ZcK3iaZTB6nh6GqHSD2HXKqtRRNqrRmQw",
  "key5": "3Wy9tLHz3FkykC9JZQm9msseSUEJRBahdufeNjDZiniXcmvL1Ca99H6dfxPQBQ9Y1XLLALAm2ANSqwSLmnbbAqbC",
  "key6": "2YmPyaCJRm6wvEqkxEx9jgWSMsAA6RwhBUJYwYiXQ2LoWjGARNgAJFBz8ohPiqwQ3x6fPkTEHdRLBBjbYwg8FPaa",
  "key7": "5jJLHn2zssu62VRhVMSWfNrnhKgqxsu2yJ3KZy8a1AjUPzsgAo9akHt1BbuUDp6dfLCAWdwCP9SGfQcG9zrSZ6SX",
  "key8": "4taxkQDtd1HBhMrgGMVi8LFuHTUczmkEBwnrxFrbUp8CADcas9AQ2UArNyySvV8TLbCHsqYHQW7x9sijmGu1YXCB",
  "key9": "2v4cfjYgEr1EbMyxa3xeb8hsrHyQSAiKs5jjFe4KZuTxePN3pmb9USbGQ9ARuaHRGQLywFJQETfwZSvfNQqCBnqs",
  "key10": "ZnY1mRqv3H75LVaJ291DBH27pwVykuBPkqv9PzsVi6ELM4fAypAfnTgLDiTKc53h9J7GQBcuwCGoREdoSSnj4N6",
  "key11": "42HqNT7zdp2gNTgYVLYsfmq8PrGHWqHaLakBQseQx4vFMsLayfy1V2Qjy2oCNSDwnU73EgbrUexBq31CbkFbPiyn",
  "key12": "wZ86gnPym7aDixPcikcrq2FJr8vbYsDth8FFQG2xdrnX5MtPgNhJZLPxdbuwcLqJi95WMUXLE78rGP8QUtQhhde",
  "key13": "QevWpHfkUNdwWKF8VMjYa3wZeG796t9tYGURsCoDmrtEAPzDgXHJHUJgtGUS2a3utjmZZcHW38T1EEzhPUrkJQL",
  "key14": "29jLEP5JrFLiptKmSCDL7wgVf7b8mJMJKe1rKfHjoY4iReHb3EayF6mRKDrUo3ypTSEK1bMZcuKrkCqxKunKJToT",
  "key15": "4nc3x95cj5i6kcBQ7NEL74ETtQN11U3fMRHv24pRWEnTSsKFJCopVE42eBnhipeWmjSkHmTZEiW6PeBmju1pxN4P",
  "key16": "9QqJ7UBmp8CcVP6NNokKKu2n4eZTc2Accj8YWSEtaetXaQBHQVfViMyyts5QfGyzLvNTmZUmw3s8vYecaaUqjzm",
  "key17": "6jNcKW3NBHA8cH1zUtVaEhEDULJfjtVGT3PjwC8scP3jFnJvhscort83by4LBEzYypFWw2mKeK9ZNjSvcN3RWwz",
  "key18": "5oDbeaSgBorvi4CeAVUitovHoXnTxSGbpaQXTrxtmUsW9bTLmWwTgxVtuZ7ThgZrBbr2GR2KA2V7Y7qrg1vt2zPg",
  "key19": "M66Su546Nkk8su6tbYJg3q4f5SXSg2ua6uthpVc9CnFm24NDfHtKYuomtDirFJMbekCZjhgGxE8hDjAjupdCPVR",
  "key20": "2deEeWovmH7jQXpHpHBruorS7f1jDApyNHr3DfrarLpuzmrUheeQ4ZVViztztJBnrvsaQPi8WbN6kzvPwBB44GS4",
  "key21": "mZkiGnopXZUWo3JZXvMxzv4SQf8XvZDwWkvYcZeSzY2up2rDnx3n9v2SNzv32T45UkH65dBD5txBFhzr4ArpFbs",
  "key22": "GQXuJUPxUrsEgjxik35wpdPzs5HzrZ89fphiawa76HdM27683YHe9EG48yiwgTdgSGCs2ZQKhccLcKEWBk69TnS",
  "key23": "5kKCzQKyCSWmpE7jeeRLG93ggkwD6sJ2WvDdXjDQ7EJkJfxqrtGryHTg1e3bwJShNqijVwvynBNCf6epW6wnetgG",
  "key24": "5dHpiYAcBHhMPvfuVgTD7EbYEAAJFaX4qFfDpiGMPXGGjn3y4DJZLDeNYgb75Zh5pnK9KL87rz43hPDbG6ojfDAH",
  "key25": "5nnhPdy272f7n4Ayb8RKRBz88TfpkzdJwez4EWV6m2JiXLonjExor6V1HUtfsMeA7fPRKVZ2UKAeuGYEbJynnf4U",
  "key26": "2CsXjCVfRpuUV3Kno1d57aCPeQxh9wzpokauSB73uUgPPknPq8j2r56Sb5uxzFS6MCyo8iwtPEexT7PTk9fsv8H9",
  "key27": "2AbmsB9MyMgPQjy5YiU4JuW2maJMujBFvYN3oYWmEKWHmNwt91gsjd2uPuy2k7fGsaSoG5FSNzKcqoU4Lwf2iE3y",
  "key28": "4jByzy1UgHaqhLeh5takvgjdc6DQcqqVKAu5pJeeG5LL3jAxmqdv6aCx6ZAKqBxMt4bTosXcqLJvxb8WCTwtPiHF",
  "key29": "TveyKpqqL9dT1gJav14Gi8Mt4xcrPisRHAuQcCCnGn6C2BWMVhTesiAs6HGJjBivNJcwEpUh55kQWiNqp8JhNhs",
  "key30": "5xVkXmZKYHwvXBZfaCoXVNxd5VrBueoQsSug4UQRKGTrvdSjrgQXspwL8bVBchxmR7kpng2VS7ut2YmPk8NuLkdm",
  "key31": "4TB8orq45JU2ipL1AH3BqY2LBYVwK8XinBgf6zHmGAPdkrUoxGuJJZ7wZDU9zxAxtRkVDnMfF2ohNdnaDmQkNkQf",
  "key32": "435A9PGEbQqf51mmLWnF1QrGU1pNAG7XZFSnDeCvWSh7a6YdoqH6hfiYQRQ31A8kRLEAoD2pTwgKPwDxVSPiUw44",
  "key33": "31bnZEXCxTNduF825EVLwpEPXCaa98bLNuhA9ehVA6bc6zxJmUgZyRGWrwKGDpQ28e3uQiHcQMU5ZcgwFVpz9wkJ",
  "key34": "4mWujZiukCXKRnQKY6cdvZFc4oQr1z6gVFt2y4bh4pDToipoyDX7hmusDwibjqEsEJn3xjXYonxHRURuN3pfcnmM",
  "key35": "wJWgzhnyMkYDjA5WNeGZqRYTPRTsqxDbeEp96JcYsRWRekzawFEU5bf2FNjtvmX5sD7u7jZ7nx937g2azxmNyo2",
  "key36": "4wyWHkmW1Rft556QDcy7qSWyKER7ACXYymbszTsWsPYdKUKyJBaLbuhWWwTwmuAWJdvVum5b5S9vtU8bc2j9fVmJ"
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
