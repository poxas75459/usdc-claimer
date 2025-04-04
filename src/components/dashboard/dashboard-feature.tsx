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
    "2wwcGfoMK1WwUC1drPvBTFtEVW5EHmA3932gtnevRKxGxGBvgpgXWmCZioNGtGafmXS8wh6eKN266ZtkSQHcZWTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FB3JUMDoqkcDhkFUFHbPRezaQjztngUWbPhCBPbABBemYFB9UyjBtTobKnSEFWS8za7hMaow77k1TSsd6Q8df8e",
  "key1": "3r2odSwWvP7ZSjmTCAev6VuMhsnCfhfAjXF3SCekjrpC6wqDfgbm1BtMWfNdH5Z5D8vBzvCQEYHzx4bWxsp9ymn1",
  "key2": "2m4nZSiHYUxE7CpDr2jMYDJMtmNeDjsinteXzRwDCLWGoY2dT8dL3w4Z67TNcNj49T2EfDsNo2foGUBQhVHsM9L2",
  "key3": "7dsQxi1xF8HJhoQomtCb43FzXgvRENmvwje5MH12MNwD2Ns5PunjEJHwSr74ihmL4LfaWUmWVv6mciCqyrg8Ze3",
  "key4": "4QCDT67kyLCQPcGEC2k7MV9EG6C5KVKsHfBoqMhnqydFPj7YmdBpFiDCnMNx8Nvs3P7X6n1SAShN5WXmFXjqgnJ1",
  "key5": "2vdQgftyfLbsWDmxZKYXSZKKxZXzr4tgqA9dkEctVZnMRG72aSpnDE3rtZqfXw4cVKiCcKwfFsZd1aZmtwAxPGBg",
  "key6": "32ZDYmisR67MW4M7v9yXAmfESodqNVFLQbAhXCJkuFXcmy8FTrEGKo2zkVj4U4ytm1hrDsJ7eXwFe9ENySHyu5hj",
  "key7": "4fmqamZtdy3ezXQkat28TtVq17jsrYVtkZBXpwY5TiBJysFroU5UbZ1r78GqzXzKgHL3k4Jb7QAhuxBLPUFUgrB4",
  "key8": "4TysrXGRQNzqjsLSYMt5UN2mQax7GvdNq4ZDrj6ThLCBSsxUWkycGyMGEmkCeFgfYEYkmUM23r7xhVH5HHVv8BXF",
  "key9": "2eVjqpE4qNQdZUurZYDYfp3MHXTwGebAhSroUDVzvfRMh1GePK7mnxNiCv4sP7gzipcRoHTjSWsCYkx7wqwee65d",
  "key10": "3MN3xu8et5o1YM8brNo3gFfDKGNEouPLb8JZyxSTUNprSfVx828YR9L2VmqwoxoV7hbPvERhvFUP91nXQmffXRat",
  "key11": "2GWgjLnkr4hTTpKvHhwXHmabugZuajhKZXkPeTALNTUh3tnLDuNP2tUuHE6otDFfkhqrLDdbVcvatmCH1JgEhrUf",
  "key12": "SJGPsC93urhnW7X2W1BHM5U4KaqcoLZbBapATAytYEKCixEaq7QJoaSMswRQ1w8NfA5u8yE3yvfMai4o7teR5cS",
  "key13": "5zNuqcJ74nwWPjfFozLfWETAkdaGgWUv2h9gHpSDvqH6D16wWvMAzfepYPKDPv57igBSkgxyYBttd4WrVgNp3VoD",
  "key14": "2XJzzVmcnjcWKRdFJMdfHFA8V2fP3HucLWiHQ3ZxfAVUikc4JdnmQnUsCkan2p6CmTXH29mCDoA3NuK4khz46AP3",
  "key15": "3Pd3dvno2ybSgQmfxbmSmPPWVFs2oNkuoWjFWhV71eZTbLzJBz7hz5oAg84j3uxCm2yNhH1GwdZ8gmAaaJnVqMxj",
  "key16": "5BLHRRWmQpWmURk9KMjhXRKSMUMZLXfHGSVLbacz5NiH2svh62da3yUE3fVVFVxYjz4cn18MBHygVX5tPvJD42qw",
  "key17": "3c1do8yYyqkTRiWw4HuBrirCow7Jgt9n8ceumpDmg2j12ZzyWyiRMLiLaab3bCvxtK6YCuZPZ34KmWJZvkZHZFdy",
  "key18": "bURzpeC9eMzf7En5fLBVJmW1yuhm9t5QANT3rKG9f3sNr8UetfqMcecxcZxWKn4NDxhc4kyqv6P927MXf5WY5Vr",
  "key19": "4VxEFQVRv6WAACSKR8qNnNPDFR9MJQEY8dfFvGUra4TcQXwZiqGbnqwwimKG215aztdaq5t5EG5VmA4ZCM8iL2sG",
  "key20": "u9LCBruoV3fRoLsELbAbLgzmBJZ2mLcnWYbUwv97SWDYJAVLUWg9Z6Dfm2firjwmSvNVMPnuc27Cq5FG9ns16eb",
  "key21": "24q9VjravyM9AsGL9yhS5dsR62vRrZ9oQSiN8X88EPyJybi1feCYTJrx8jjt3Poa4Ey549KRH8e2W8HF21RZsbqm",
  "key22": "2KLE9ExR7y3nhMcyKLKiqLoNcj3ne3XjSjxx5ycBr9qhGxmq28bJw3mJHeqQtbkVv9sHhKcVjduDY7rS9mvtKtqc",
  "key23": "3VUKzMWjBHJpCwpsdXgpLYHWKmtofsYFSJkHJCGV7uuA86mM7oTMJMcRdZh9PnwR3L7NsEkVuZMB1tKx7iKE8rNm",
  "key24": "4ZUC6dTNGXanxitdex7uqsfqKZYAs44nzGFFuQVu6DuBgnrSbAtuFBpL7YfQ5AB43oieEtiefXaidQCppXpUEH17",
  "key25": "227JXhW86Ybp6F2eZCmcy1ZPtXVqKWukdy6i6zDUu5LzTTQ5mLsVidWmg629sSdbwhXrWcj2r9kSzjnoxDCcURTh",
  "key26": "fdgLGc5y4q74z6DVNfvk1L98N8gR3nWWz3Bsi29wSkd7mvGikd25UAHmMNhw9Q3HoGLgLz39x4Wyt43Qf3d5k6b",
  "key27": "3MDjHXVwwpv2vg5byosq2gYvGFDLDb7u2L83tfhxMd9mxbGEJ39edHd4mqz9QD3PBJquReLV1qfoiwtDkGuevXFp",
  "key28": "nu8gLMKLKtMLFA5pHSFihXkx7Nh3d5kXUF9XvfeTDjutPwVU6bmPigYExweU4gzL5Vr9ybyi22pjKfHAvrsbAMA",
  "key29": "4X1wFuBJYQgqKdeiNdsVmEqgpbcJsBEMAn179e96KTGaGwvq3Gwt8aW6Axk5k82asnfgwfDpWrt1f5hdaQ7uuayX",
  "key30": "3aHFiDCpvzY7tKgoDJ9SYqD4uUzgCLn24CMrcphrF8LCnj7GkfJfkPHXbUWqJHNqPfPF9Mo85ATxsJnGBViyNK6z",
  "key31": "4dammrvgqMQX8HwjLLmzhAWP7xwzD8U6RtTxMuqytjRBBCA95Ltum79pksogDXtLRJiD7UVpyDkvT6SnELyhX3BE",
  "key32": "2eVyZr1iQCQ8TagpkcqDVvkypKw3qU7zANr9cL3d1xWoi3k2G4ZxJn1LrrUC7uzmnYUiyw1EQC1nMquML6fwQwYW",
  "key33": "53wgKjZD3QA2Cnu4ShRCCkjytkH428oeHFQD2wJ5KgFtgNKu3pJP7rb2jPXKJ9ArWq7w4FK5hF24Pyq7Za8KBZW5",
  "key34": "qhPQ9w6ZXtvdKrF2TTonUTFssGzic4Y5nLz5rVPcdm4ts7NyoV27iQ29a1hSCFCSZbPNnDiQkHe495U6u8nnuyb",
  "key35": "51ArtW77jGuVXrLRPb9AW8b3bfbfntGL41RJrdJEDNNcCZrBpcimiuDhRQXEQriRUVdRe8aAkPCEEhSwxgv9bHnu",
  "key36": "6nm3V6FLFymrHFWiPjjrEEmbf5jDBV5GaGqZa1mxJqWLkBCs7hBZNXuq6SnFDzNkDZtqwowzZip8XftQiLrGsBL"
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
