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
    "4WcH1fAYjrKKAK81WPGSM9spHox7GbEa6ZtvhzSUGGFpyep9kGa6LrDPdjDZLRWknGd9UJbpcVN44rExaBcbMPfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCsHKjkUMhguabTCrUtRLze23KJeoHTYamauURXvB2zXBbJ9uqxVPf4U6oaFv2cFvVsj6wqgnLR4ecFFRNGJURC",
  "key1": "5HN4W3uFZo8PE9rQxqhTL2hbHmYEhai4Y6Vvxum9qbipfsVPwBRRSZH4RRJ23mcFjKrxaLS45emNiSk2oFU2gcAo",
  "key2": "2meHkiNvs7SJMys4t8K6pv8FsCGM7kKi4JEyt4VNd8sVsKZoY4SaDihUBzXqNSLGJKWuHfk8q3Um712A1U5BwBie",
  "key3": "qHgivbiuULYMQ7SyikA2FKJUNzaM7BbczMujcvMf9zFLDnnWMnz4oQneSzLaC5YzHN8QcLour8imKT2Dw5fz58e",
  "key4": "4ReLYkfGEzPz1gKiMDZpNgkqXgXXfU5xKatuoFpAxyoVw7Ny7CfGfUzUVxtVXFwNj6zNeNtjpdwwQ5RCfKuPY8tP",
  "key5": "5bwfF1BSG2JWj4CFYCo4Nw3aZzC23N5FBaB12LL7GJC1erkGZ1GUUtkWVfXzVMnC8Ays9PD6boX1vdK8Boz4bQ3",
  "key6": "3grR6p2TsuvLcCi4fFeAxNRo8YMQtVvifJVyFXHrFmvPL8TmoNqyx4HxpceqJJquFedk7J3jBWRUUfwNfD5vMsrY",
  "key7": "5EiqTVm5P13yhjBz7MqH5GUDbgxdLLiFUJiMspLZPhim3WLYh4fHaVce81kUeVZoqW1BPB7R5VD2gASLBwhxCc8C",
  "key8": "5Qz9gCZ5T5RFtJ46g9qh8BtJsr3brSVbE1v8XwS1yD3Si72E94juDjjFohnQAELLBaANs4AS3gXGncXkzA8JNDuh",
  "key9": "5yz8NBaC6K4bNRhRpp5Xik8LQmAZrQfVanrAhsuZrxZDRmuPbBDonygo1F1wiLgiRT5rgcNBk8AZ5CamFDWynct8",
  "key10": "33wj5RfAfRffZMZMq872nKEzrEwmWio5dSi4rVpUsR9tXmQQv2i8mDc4oYereKDSuWY9mP4oSVQ9JFfjbKs2m7Pw",
  "key11": "32qNjro4fCegeUNm335C9DG1bvnLbLAD1Wrkh75r8knhPqc9ExyiLXWcsMYZ9vTXABemNDsWyBtsW7RKF4HddLRR",
  "key12": "5ZBFwLqb3MfnsJ27qJk1LUSV6NAfMvLPVP1XhAhwDHc6J48p29WwMMz448Ugn5RsYs4AKxwqiHPhyqpnMKK3b11X",
  "key13": "4bzPr8tamt3Q3Prx1uJZHWMBsXYMYS2hJXLV37C1bcstcY478zYpPF9TwZTJz93LNFeGmfUWCJyJwVh3FWSvLzhh",
  "key14": "326QuA7RpNWjkTMhkespoNGmes3TCrfnbLiaCSMv7hrmRTjjZeEXjAcZ2tqpzkAG2ACjpAFDArcPi8bLzPcAREv4",
  "key15": "ycnEcwKQ2tzFkTYcyLGG5nGsSCh8NR1KjQNguLXPdT7hUgW9YAvK2UKmnd4BH2wuyVXU8gc9bnqLMFNg6R5nQjD",
  "key16": "5LVDzEdYCvneaTJSb8sthzg3Pc13Gwx4NrZepBbVaRbE4S3ZgkuEzTRV2c4sDxeaJfb46JqrfkZ6qxohEBeXWXaF",
  "key17": "3MfZoR7SrkJhBuB9RGxCrWZg27PkmpKzWaXjpd9evdS3UoyUeKtwS6yQxhLVMbrU5GqVdJTNnv2CT1uqWdHycaCQ",
  "key18": "8eA4bkcC7bNPswArx7VQ3huLSSoCBnTsznTFRGmW7hhr1brcihGeeGkJuB5BFkMhjdQ4LxB5aXjo9s7Ew6RVrVA",
  "key19": "23KGN4ZqKwWDCY3hyFkbjSdA3oqjyw7vkjXoxmd814LgU85aYWfGNSnNjBHaMN8hVNh2kuk6v7PvFW8feygSwd94",
  "key20": "wWanw1hKCR2kHJzxvtWoUwpH2sTPAzh2hpuzg5Dt8BnEwH4vTjKB5FxgxHf7j6Ha78wwWqaS3CRCgTHmTJgcExG",
  "key21": "4sUnjfY9XuxVhdCLTS4fzoVPtwmXXHdEE2fhvFKdAFddgsqPigYcTPEsUxQgJhwbqXN21DvD7Az4dLmoKHYB4hMX",
  "key22": "5EsmkETPSixMAfT1FfFaSmmMfcBgYftyUeQRfUs6k4ZV2wE7QvJA5sFF61d5iL9oidWy4BseS5BzMQczJTbAtf2Y",
  "key23": "4GPBTCYAPZjPfh4fqdASsPurxeyCxMYDYTzQ7Sdk4nAwVSczAastfEwUMig9dLdjTCXQmFDQhqBLtw8rMbbAEYB6",
  "key24": "3PGy9GmAQkYM5PaAF1VuqFdeH5pYCCBXEFPYg9GsHPSVpftg2xL96tQA9CU4KxbusLoLQb2usTsugasLRsnug5ck",
  "key25": "4f4oGRLCJixFaWgeyBJ6d61nj3YfmgSfZ5hnEEPEaW6fHfnHGTBsDjcuPvPgGjMxC91TF7G1hVjRwEXHTjccfBzQ",
  "key26": "4bo84G9WmS3Jn6GrFst7wvc1hwaHikL68QXPkHNxEFLkFECFpKKuQrus4NHvQnq8r7Vehvzb2C7kqEKMs3Fkyo3o",
  "key27": "2gfjL9ZuuPhtkWfKw7tH2ZtYCvJnj9PwsEN6KV2X4uKW2E2VxJshJ2qVfoaV4LH89BqJqwdLLXJnAuJ9aoEtoEs9",
  "key28": "5k9fr3tRDh4rJWCuWnzxXUmVBDHquNeHwBtji4pGD6uGCXXHsNVfxRjxGpKM3aPweMoYvUi1bk3zSMviUugjnWgs",
  "key29": "3wQjNKiVDABp4wph1xzdWKn3sBpnhXd7DVPxAfG5w6E77TxFpJU8dWVPiFWsfarpCnsy97r7CoC3n32PcNcY9dEG",
  "key30": "672s6VYZ2UHNxRu21LX2K4SzKjGQHczjBVq8KdqAzMycXW4HHio6KsFuCd6JcgbcijPr1jxw5TnTPKAZ6HxuWBny",
  "key31": "5pQ3Pqj54S3cw69CKEVzqbu7n8gasfWTsrcVk4tPYqTyYDpdoyUhF9dy1cqYeUBmJiZo14KwFodjZqyLnpyRXWzB"
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
