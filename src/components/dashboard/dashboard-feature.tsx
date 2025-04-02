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
    "3UVipYjJJDzg82umkocbMJawbHA9Qip8JJi73ABNy7EcNPAyDxmDiEqb6jLMnnysjcgwGQ5gcz64PxQD3UGDChwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xU1mwvV8QNoZmvmwijTkycJjvf1Yd9PRdXuU7a9YYwntfTUDoAzZT78e77V7288tM6JhdyR62Dvc3iVP72MKVgg",
  "key1": "4iAmwFkmFcagQyT7rEH18rs9jkgdBaEtLb2N3JU6ifc55E1daMWKwvvnmzwAdh64he4zjQ9kfooJpVa34VSxKg48",
  "key2": "2c9jNCdi5BC2rQYWL3KrrhvmqmEy2k3gvkVSZ1A2PjHnogQAirB8mEoxeuzQKzBwiawtUnFhj5LWy2MCqxFbuSY",
  "key3": "2fts1G9EaCda29mjmC4fJBT6HiXQaJvgziTbLFJDbmTQ2dfrMz53m8r1DM1eRKpWLLTeqB4QYuYUrDjPaqTnK3kk",
  "key4": "2DWkryr6VKucaYxHRXQCXsPDRwLAAakZhDWruNM9JfE3bjBZC6Q6DmWPXQgKQTX13RPVYgYXtkd7Ucemhsx7ptUZ",
  "key5": "5EPDUPcogK77fTrbHMpbQ36ZtszCeJFPUYwbWUhMut7DpL5eq18ZE1UjH66JdsGKjqgr7f68nASbga6KurM8RNxW",
  "key6": "2SrT1vJaaw7YbRvhD6664SNPu4Cm86TVUZApNoNNZ6mDuHbZJSWxRmJdib5gQkihCTZer94ksNCgR2JgsQCZLCE6",
  "key7": "5rMuLMHcXF5TJZq5gXuG9PnR2g1Ej36DDkAhMx5fNMZNQEoEMhp5epF8n45SKgx7zoeWG1B7GkoCGJcnXY35VgrP",
  "key8": "2F8godQzNw8kmpwjLFpkNrH28oxbyocnJpgZwFehtYF6mSnUJqLpu7ijA5hgDm2ig9EQ4uFSDVnJTEoqaAV8YhLr",
  "key9": "33WgT1CXzvBYqoX8MfyCMwuZ9okMw3RUj8c5ghoF1JohRqVft8mev5yVeZZoaG3drXiAuZ7JVQw2seDZs1LRJ4Zp",
  "key10": "2Yio38BdTH3V79AauXsG3UZRo95GTVfEWrbNrQv3H6rLCPVaxaHWecNhBvcF2zVoeda18gNd3PGSd8i3kPnWBiHX",
  "key11": "NqM6aEC7Aku1HEUJBUCCQLEDZzi4f6t3owahKC7aSf8LD1tc24f4kNfJjaMwkdQA6EqDkhDW8iFC6q3LfTmUrLX",
  "key12": "66qAa3qWfW2aQc3C7GUbGchjspsNJCXkRGr5KaxDU2RyQ6xFk4DB2APG7WS151uBW76hFbYYZmZC42tE5r4qVwGK",
  "key13": "2qgNALke3TxNFChtChLTnD7kRt8MMtWdYoaVtWfoNB3aW9wAgsHhpov3AN7BAPM229pqJeH94jpwPCbZ1mrJvz32",
  "key14": "48E7WzPmMcmXyXyE13G95YvPuk9r3UH29reGjRatGEHtUUg7emiX9Cuon1mAvixgGzikrZDua29myNzVbP3qPRBV",
  "key15": "5Yji1aLnjbLnVpiNdGJvbUJRRhjRk8vS7qj7FoZ4RVG3rGyv4qztG9mDudSCkTrhYWZjPfVhiDu4JXEofW4dCh95",
  "key16": "53SSP5borW51qr59KP5VCJ1o6Pvf8hYPCM7VqHktN8t2GnxjupH2UYc7Ua6DopaN1zDpH4Ky1A9iS7D5Wg5u7JNm",
  "key17": "qvZFJKpFJNfFcU2YjZUeCL6sK3t5cU3tpJsNaLC75Hv67j9A4u8WZzEiN9mirpFGCeZCcrexsEbUU4MpLChcAN4",
  "key18": "31Vuzcr4vrDNcEmhtDBjCi57wDBwWc6VYW5mnk9mwjnCXpHnYWbEcVGiE4z66wHwfxGwfsk6qYtL1YGFdxyTPyt1",
  "key19": "4JHVbc28b65HHxWvus8qbNQ3mLbMEQGK6SUbVixQXfFVgvME3CeMaP2Kn8eBmSzAc4b4qn9W2ZkAvtNqW5vQ2HLn",
  "key20": "5ykeRittzQZ8GT2u89o1g6NAYDnNstjcCq7rhYWX89jt9VqdvZc1zbM6k9VECJJhSqXtNmbCMknDDcVcBs3A3skC",
  "key21": "1ANayevB1JEzTLyFdJW3YUDHWYCHxDsN1Hwd6ugrJsVq2juJ6DYMeS1FKRQCZHHHqz1gJsEjcU3GnnZaGFYoMnR",
  "key22": "2vm2LH3MShrPf7bZkwE3J4J3Hgr7j49yFeYUNTN8f6HDvJ6bKetG9VhHZKXFkeUp9aV27w1ksRDRUUCoCd9N74GQ",
  "key23": "5ymxK2fnPqhubbuow5V3fyf3DWtJUjzUyS8qHGWBEYPb2t3rFLDADGcQaLEwz1dsDsSwUhZqh7KPn5aZiTA37ppu",
  "key24": "3oj5PqDmZqKhz2SftiSjfsyNNeeg3kF6yXhrBdTP9GFQNxGxqxCRsPzcnZ91rsV8YxpDgcRUgw2pAqDFUzvwoTET"
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
