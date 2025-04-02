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
    "33gh2UxD2k2p6GN4pAunUb5UZVEeZSN79N2p5UgrB1BnjHqHv4wA7fMtYguo5VXkAokzfqwTpUMR8ehaAx8eitBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593cDFQZYCP1osZLYcAeUxA4mvtECFhnjC4ZiCq4AmGehVPEd7eySKSvL5cKyC678QME3x6SvixWe6DY8YGfuaW",
  "key1": "dpVx2SJgzS5DHPnBWQZvtBygrJAwot4JtvGexEDCoJMV42oLCtrMDg3W9MhC31QCKPiAtfUzM8vfoNvufQ7tbFU",
  "key2": "5u7ea4r1yhWqJiYQoWyhpPyAEBe7MYqUshTmCQyZaAELRuiAzLKJUhkqpsWmprCCddBGBLzKQCnh9Kvkh4i7tH29",
  "key3": "38LtgqbD9LyMPiEtUoN1Qd4VxhKciLJXbLVgSJjQsFTTgcoHFBsoB6jLCL3i8dzozFWBmYoftnsp55wMnrDwtZAj",
  "key4": "3mfXQNAKkt7WnRKzVQck2XXwZJ7bkWiBXzjxMU67mB29S45NAaoU5NkCBudgn95EpeuL8VtoT2dK7GtANTAmNsun",
  "key5": "TmYUxEv1i1mNdVwnZc2A1KEaQAEUgiWbipRUiQGwqVs6LyWPHk26BAwbxueHjxcZfSLuwkmaoKmeFsP6ZsoKCH7",
  "key6": "4KAMopDUXoma8ijHYJodziWNrfmjCz5Ah4ZVGirskCtPRRyPWHuA3QFq15J9Ctq2p6nbkMUxbJZUF8pkZpQogBoP",
  "key7": "euXd5Ai4pvekGg4dKrxkv7fjuyJrzRPKxMZW8KgsTLcHgHGfxXwHLPVtvmD7W5TTxP8eU3s3QNQpa2jFcKUzvJ4",
  "key8": "5MtfsanQQH3RGuhNaSLcChMtnn65suzSW9pXqVUGniQKnxPgdyXEDvVTtaSAfAS4nZazDE5HbmVCVZmRbzabghP1",
  "key9": "3c6GsG1NdRHmMUdBoSCE3rHTgsmCPK1GwQNDsK2RFfFEvoRzmS3J6CQxbGopWaD2JyeFkb5dMpqDUnsAFopgez2W",
  "key10": "XdX4phYXT2PQEyAhipFynikBH3CncLWioqDKA8dmdwkp3KDrG564rmz8sCLxB7Sgt3uUHBAHBUMZHDJsqbgCpDL",
  "key11": "4tNfiKdX8pPjbEdPSjkHjHXrZsHu6cos6qvMgsiX9pvoD6Q1s5LrUj1mV9SJdzuiswBWpsLbHywXHYsmvyKiu2Tq",
  "key12": "38i8FATTfYZc5wM29fdS4Vfbrh4ivzps8zzvtYeCZkhLbbmQcbV8cicweXoWPH8T98iqvAQD2JVbxyAfgWtvgoCm",
  "key13": "3kPuwxCRBYwdcqeebCRtdop48RAEP57UP2WHQkkGACtsPuqeBeM4ncB2pDqFvaNytQoy6rNuMhn5NzDaRM57HteD",
  "key14": "DvSberQ2tWYVKbGx69wPPmTUb8R4Hu4uprRpRMrEFz71BkjQUFhvscFkqt2HJSnUWwXjt9FeVwSwje46GzCtGEw",
  "key15": "zg9oBQNvMsELwo8CGWQTGS8EH25yqAM9UD658bJHe6VZAUAyDtfc8TjgwmoyPVFSBkPM1RzXLYgEyu7y5Dn7txa",
  "key16": "492twHMVnfkNB53V9wkHRW7GqFXmu97xNK9pgtXwznirzGcEnrdiuBNbY8atzmKJHAwMbUhasSdWhACi7hNXdYux",
  "key17": "4wDnhMmC2iktCsayoqzyxMa6FpRmKCxm9K77o1hRQS8vVJKRxM8qzVAnnCwyo99FTnqVfwy7XC4L5d342atyYMdr",
  "key18": "s41JpVTqvtX9tCb3aQ5BK43UPc7DyjGq1EZryN9koEnWDcrYzKhv2TuYKuFFxXLo4qFWa6HXySJwYWLqJCqZx9S",
  "key19": "3sdcrz8eP7tXc3vX6r5WyjV7292qtRrNbQycPyr7s8D67GyR542tTiYzaTK2cyid7qhJZ9fZAppAKresu4AeZL3r",
  "key20": "3E6QVJYevSug165MFUAXmYdXDm8gMjTaaBiUywVFFcvio2q5pu5MArwRUEs5Zxa2FkyaYVE4sPYgA3mrGt8tJC5A",
  "key21": "3AZDdqEUJodFdejAZr8wJ4SgK1GSi3Hs9SJbcwmzkdm85yZGEt7hZgGVzdQfSfojLKYrKF5nWis7eEoqJFiZAhC3",
  "key22": "3S2sB1WCi2NtLBA1HC4F8UANqgGp9WyMjNJvMWcsqmabDbkGhYu5NhthSjvKeB1WrnLrpqCCVb9YRz9T2RZidttH",
  "key23": "55k1o2KKds7DSRWR4kpzuJuzdpWX7sKZbtE8Xqcwo3kBnjMQAighS4kYEjwMZofR8FGwQodjpyNFfpMktUhRsH7a",
  "key24": "SWzeG7yDAFSNcgepMEx8tormsMoJKJSNmCC1SQNk44713RwMYNTV7oX2Fc2J8uFYy5vTEHfWpYDsfuGL9hvjUbo",
  "key25": "4muBJDT5z4AXEuVe73bbbzf5ruzM9xCHTqkpsykqvzgbVk1eTuCYY8YvqRM7w2iWxvtYPomkAREnEuWj95aMmAoW",
  "key26": "4JN59KpExYL3bzGvDDHNruZGMySF5eJB67cKHPSEwC6wzXNquJBL9WMr98buEhytRydD4E73hyA3fxcd8c99TVmT",
  "key27": "45QeNWLf5AWHkQK2ViHcfVrg3EFdHADkWCQ6Y7ShCvPuDPhD9NtaWo9nsM1a2akbuwGpYmCHNFNzsvX3iaLvMH2L",
  "key28": "63jFCw3ft3cVcpem1hwtjtYv4JT74MfiBC64GZrm5R4ibw56sWz8LffwZV1tixucL3xKUg9nzoFcJn1gUc7mWTFd",
  "key29": "3PXWcY6HZniokpVL4L51WKKkZqKKYwKicB95suQwrs4i8E5r85Tpx9c4QFdRUZ7ZwNSATGoN5qZsCi23wjG1XqpB",
  "key30": "3tCJdyT6XNoH1ZLqzg1tVd2Mx162w2jApxjR5jsD5wNRd4a6SCVC2EHrfuGncU9nYfLQpGorw63JakJCtDTJo94V",
  "key31": "3pXioqjkj23pPBLjZ4ZGoqicqgm74GevEJrX2sA1G6yeJqG9yANUbQCwL92Ww2e2nmEimx55DGimqa4Ca9j9DFvx",
  "key32": "5WYEfHvXtHE1xHrM8rCSfW9dkSn8WAueVU7sRZXeaycLw5jgr87zkwCBK5cneuZAPvzFWwr511xnoYL62ErBzmkr",
  "key33": "A7yDYmvoqowXwn9jHmGKVv7ao3cG3crQbpQHDmPtqaF4MkBAUtjF2ChUQG2Gnh3VNvAZnodxUTUx3LvyJnuRnPK",
  "key34": "2k22CxrhmoRH2EbuayU6gjwpzayTh4wr5nbUVWejK1AjqGKfy5gpRRhCtRaBAKUUQp1c4qFjo3F8PuexL2n3CLJ4",
  "key35": "5Y1UUymssKYDbZvTDC1McB7cc6SoKrB9SSPcF9tZiYA4TNh3AtDryGkpvemjupgpYV5MDdz6i7UFbWYzQ1XcMLRm",
  "key36": "4kcgVSgfyFC4AHURZmexHaxqWRwgjHFhL4T7kURCdqHVv8bzFJ2VzZfwiYGutLPYPpkcFr3CPddBJAndmnLpYvWo",
  "key37": "317ZBSs8gz1wbL7u6yrbGhXsjGqkRbLV8Sv2EBzDKxkA86NokbA6wRgYF1Jv55fyMacYsdBjoCbeRQVA7gEy4BXz",
  "key38": "UQJFonuLBpsoGFRLXjcrP1pxpKpGCA75z2dY19UTE25PVPqehN5BCQfqYDhjbgGLm6YER1DZS6Y7qfiFUtfoDCm"
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
