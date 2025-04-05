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
    "64839Lf69rFrUbwRnwUKZ1sfuBwqwtVoi6tSzKJrfxFEpwCTzitMEzZ6gzVkRbVYa8i3pgLAdoYpKzWMAYGUnV9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ect23rKCxcPPq9R96TVzp5Qwo3xQ5SAK6jmdfk8xwmFhYZb5MAGfdiuiHqXzSeMq2LNeCu38zrE8TXP1ZMQa1MX",
  "key1": "2PtFmJV4pomwfFvVFATuHbdRME3d598fbvEK4hsaGqyo5r8wRv55RxQXrRqGUJWc39RhcVc3Fs8Zt7m6TJ5qaPfm",
  "key2": "21py5ETjbL6zM4ccvNeFwHaCPZTTPpLfLdoBSu65i8tioYT9JZ9bbbxptqc95MtKrbFUngZvmmq7njo17qLeK1YE",
  "key3": "4WNkhPvWLo1X8AHZx7pPzpuBw4XmWtJsL9HmByBBMqbmSszBod7sE9ijGFkqzdiSQZKFzNUaqZJhg6c8GWXQS9Gz",
  "key4": "4QLGjJTKCA5BaWLydrwBCXHmP6GxFMtmHvWGtNC7JJVk3ctiPL299kNdiDzzZxdEKx414LncvHY7B2ocMyiYf4By",
  "key5": "HPJJyMGVYuyaqUooCDGeNMGZZAHro5QEL8QfqhsncumaxGC4svP7JRDcQu9SMa9skRK8JfjMGoytjCGs73UgUxD",
  "key6": "3N4LBy3odXosqJCC7mdoXoDnLJ3RF7eg5TYNh3hFQEGxv1ktxNrzx9WuDSvnMi7ZDbeCEKRPcRzrbt1vvHJY54Vh",
  "key7": "2f3WwyJ7jB7SJsrLwJYesyu6y7yNrL98UVqxmbgkL7iLw5kVB4fa9Fe9KioVfNNJ2miu2KP6jJVhqSjkTQzdeN8q",
  "key8": "2hJmpbaB6Zjj6aofYWTXi9ECC2p6yMZ2vHBKndYn8aVQ6icdnGb6brQwGj56in4TuXEEC491iBBxzK3ZYBgJNTRe",
  "key9": "5VydmXwB52jzkaPrrwb6JmjtyWU5HtX7CBHjA1bQzvefyn6SbTTW7ZALkNAsbcUfgbgR8ZB5G5Skpty2bAA291HQ",
  "key10": "5Zt22aSJA36oLy5NpkjFQ8P6iKpVVmbsic96J2Scx4Kskr55mnp75fQ8DbH8Bq6697LXqWi9bzpqcaCU7La7Qy7R",
  "key11": "2LFmkMYMzCrqwcaf29SxsMGrdYBM7vGH4vbfcEBqFpvjaUVeSGsHJ3fizdD5nyj52MPSMJER5SsRk5ijCRHwZzu9",
  "key12": "3KcYfRmVWt9nKQ7ofxyH53LY23fhbav3oDd4FMYUJSmtpcmYiChTuxQx2paUgXB5fAruDJiKDEhDp3ztHSZumpq7",
  "key13": "TPZvSS1c31fgw3ELZ3ESP7XnVFn5PEHwt9SfrSRDgs4dJfgT1VkwqNV5RQSjcBqad9uhQyvJA3hk64K7rhuDskk",
  "key14": "oNtkHph9uMUC2JSSkvj78PL19Kj29x2RbtTdvjMafss6pWdTtEaApyhr7dt5R4ZooA3YEjDyTLo9yp46sKXecuH",
  "key15": "4RBYCjMYZfQ6v2SQJsGy6ZkY4pqwmDLMATTRFgPf4fsPvmTY5JGzoqJUbYsbzdjuyMfkVhxrs4B4jzk9TMi836ZD",
  "key16": "32PQDKNYk2xZEPrVKDSn7ifwVQX8pAwQrpZwt5PE1EBAfCErDdRd96cAXJPVQxLh9vpuytrEXMwLU3pvdPiA99Ve",
  "key17": "2avnfQfqEkZ345NgXFQSGMa1bae6cKbf98Fjas6tdVskCv2WmquMhR7huuUpMUpHHKsW26muRgMgaEtJGqsWcBtN",
  "key18": "4ZDHQAfMcC6p6t8oAbthYqE9MR5dETMdAsFchvtyhwQ6aWUtFy1ffsSHVnsc2cvz2rocNpdYAKp42ppmfsQjJQuL",
  "key19": "4jXhFSupwG53k2fyV2UGCSniGQG8S84qn1nqa1GeCiTHx5z8bdUs8BzkqhaoQ33Pb9yEMxu3Vru8SMPg9Nru5EHp",
  "key20": "4KXHvHqcJB83SNoPVBpZGsz9MqQhCJLfDoFUaVAK2SgSYiGXT3nWQRt4iXRMLxgq3gukuWw5cy2f6wHzAEVFhrGJ",
  "key21": "5PPHwo4CJjXjRkfxZim6K5RsyKKJEZuVqE7uwdj15b9Vk473oPMUYndoapmv2eBmFJ8g8yJNYYJS2D25RxoM7Wdh",
  "key22": "kkgAVZrSPEbc2FxSn67Yodmw6H6PxVLTktaotoeya8GSn9heeCNhnH4i9dZhqy1VxQg9tSfAURVDu98Hjxf7b35",
  "key23": "4c3HKbjM7xkwwYCjZZ2nxN2mUBCZvqcUcivPtJjdPSpaPa3s7UwLTxD3j5f2wmsHQTFQMHv3DcoGe3kGqzGeQkDP",
  "key24": "vKDVjc6mM1KFhiMcMo8YQzuoLHAHdA15y65GBeAA2HWggshANzoyCJjrbkZ2cB64J2tEdEbsuoi8hi8mKQb59Ky",
  "key25": "5QBMpvPfp2GtRYDSnKqohfpLBgHLT58VZ9DjbaaCgZoDTFuPiGWLNJd99bfcibG15P1LnykAuAx4UjHPexB3637P",
  "key26": "3zd5v3k1BgvYxiRG5aCaMnQCnNdj56hYfshvWHy5usRppJBUZB82VAcAXiXP1ZaBn9w5dum34zBE7SqJH6vyLZRy",
  "key27": "4ua3chdB8hJtnjYTp8zuykHCTPCk7LNdfMpSimySRJt5nxvjSkUjNnWb7iec7ZYhzaA7WgEvV6vxN4NAoXCqG5kZ",
  "key28": "5AeJ9rJfYwNqryeYdxrAxYBuK7QaZRafGShFm3nG5qrZv6AvApJxM9ncGj5BPonet62xxP2sfHfGJ93FPUuvzCKg",
  "key29": "5vHpiPb8pKZDJbF6c7YxKzJqbQESphKcQ5XijRYAtMwPuKzMkYSjfrrvKn9UHW9DoK6fPAfzQ3959UkNuJ177Lhh",
  "key30": "5TkELhTeaWeZxtZDSsej1dhgZ7gXmQAUgcP2aFxYLGY2TeMMQkewDMAyvLKZcdCPwnEu8tF34HNQs7m5waPqJB2",
  "key31": "qmAq7xzxE1jLQzp8iiZgDZRMkErpKy2CpwvXdCkQdtpQpTXqea8Emiw2PPKLazXvDPtEBFynDBPhqegNwDG734J",
  "key32": "5RPRAdmitcjPZP64WLzX7napehTS9yopf74Zio29engxswcQMA53U2xPRLFGiYKWYr4cXYkGS8sVsuiqcUKn2LCL",
  "key33": "4gFQB1UXJ3s41gzcGirWCddr6HQQAx6vE9rfAjFM1DUKh7Zw3JJZTeWqH3iD5EH3hYFdwW8Rw7Xuw52febF3HBdi"
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
