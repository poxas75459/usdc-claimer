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
    "3tFopJcyvwSwDNtmfUQudf3pGe2DAsrsy2frL1fBPn6BC6Dz2nU5QYTtTSJq9Q9rjmZwLUN49PSG5AXmSgdCAVzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5H3W9kESvqfYiogtVtu8wcnGF15V2NDSDTpDA7vXzKGqHfAVYuYDVZkhn9nU8NUZixJqcfDMhB3bHkzN7J4C98",
  "key1": "27i8BkBeD1u7Ek8CKLYRZzK4nkrcNNvSUc4ttkoyQujRTBmen8DyovKwJ6SBzigoJDPoxAdirQxXozTQNvtKJCXz",
  "key2": "3YrwoCqgzVNv6zEa9pCt87cSsD2vv4GfhzXsSAAvu7qSmkqdKzBbSyEGqm3h8Xi2wVmKP5edFiohEEHx3As6Tqdw",
  "key3": "3TGYQrFKNzB3fJWjxZ5fU1fgbxP3hECd41RzzZrvJUm93YBGYRTCR3BYHChuDr8UQSu26EJxHAKa238Z3ttPvZ5W",
  "key4": "65FN8cUPBQc5XzeiYyH692KBPcpkHeCYMD6LccSrnNgP7ve65pWFAAxtoFBpabyUPqPALNCATTi5ozqsrcsst9vh",
  "key5": "4hBBeF7wnFHoCoA14JGL3NjD3kRAADoGXuM11QfHTtJ15A3Zq9yKhV8ud4F7zvKcUetBpH5L1ejW5za8BAAxgfqR",
  "key6": "cuZmZPA4Ypi53vPwSQKVXann9P7D283B2ky6MUJsGSC2jaD8uStoQhfgcPFjHqC8EruwTUBvj5nePKxChQzUVDD",
  "key7": "JDAzzfFnrW2MmFumSaTNSx6S61Cr3cvivBtJcVU72jvbkecpqavqoLA8TRePY952nbwoiMN2sUMZue65iVJGQCg",
  "key8": "gLUUMVDJY1vVH8UTKxP7FJ8vgPb6V6gY6fA5pGBsue33qMZH9bpL1dZu2i9HeJ6LsTcsRLBqvCJaVMVB9Bbvyge",
  "key9": "4H6FDbo5JGUYrhBRiVk81B4YRquZ9fg8gQ9Sj6Ax3NM76dHFPpyGFyAenkcUpeDqCG6oPBhvXL4RxFeU3VgFjxQz",
  "key10": "4YMGGQxWKbUkoQZLwiKzSVfXBrW3ZLTYYHtN5f7rQ23k4u85ne52ePBAMF9pSTXGnMuq1286QfdqQx6vJdpAq2jk",
  "key11": "BWXLLG5r1mnCtjvYmqtEoG24m9k3mSXw5skdr8nAyHGDzT6JNVw4HcHNwtnA19x47hWTs9kLLK7jiwX9ctK72db",
  "key12": "3VNC1VZDshDr3bxzyBs4ygJR8n9Yi6F5NcAFRxEVmqUddCkuGXwohRstCuakdtmh9gPWUTMPgfqJjuhZwqvJg3GR",
  "key13": "DzbacUjKnTKZV1ijQz76jdsuxqGCm6zdPg1nJ1ro2iyH6wEvyiLEk6u5j8iY1gPfN9QYTSfujNw8AWb3WZGgZyk",
  "key14": "32E9Hqfvt38Cve8t3Wt1uNp2EFzaQYcnto8ZSpN74dStq12E8ZX1TPPe2wGDmoJrZwnt4qg6URmFB34aKgG5C6dc",
  "key15": "5mc4ez4MoLYvuphNQab2RyYgW91LZSCRVt3cAw8SdvCNnZ9Z5TMAwUKx2W5YizyRsaEZZA4GKB9D3vS3NXswSnPw",
  "key16": "4dzwC8sg7JmSFo4wdJz5Sb6p2eKDNZc4z6UHktkLaNbtGXgYpc4v5Yp1dwZkmbzwDjAA4pwvbGLS4Yc82TbWfW75",
  "key17": "2iDn1GzmRhuP2CujftwVbhyGmHKVwXYFeeDnWd5wCaSqBZCjDEnYxT4xSm42NxpZDiR2gQUZPHbmiUvhS6feTdPn",
  "key18": "5w4RQJgNFw3pxjRQKCjgYd7rSm6mDX1mewnK9xVK9w98K1ma8Y7Zue793G3eyCaCLyzxfxKvkXnNqCiuVQD5Cwfi",
  "key19": "5XCNYNDNAz1HCWjrVkGa1pKug6yH9wu5aV4XsLwBumwQwLvfBkuUEZ3AMviQCpmXfH5nnnmX65KSqjEk4E6zHD8Q",
  "key20": "5W84QmA7QjuPXNCZV4Q2vZr4DBNLXnCBxifVbzZzVYnWhDzami9k59H1vSLNSvT5jns6QDubbwdUqZ9QfPpLNvCi",
  "key21": "457SwDUQeNQLPbxKcPpj2RtdgFkfQmQNxKp8gJQioBtD7N31UCnPvBKg57NqMZ55wdHU1WziYp8TXfZi8hRdsTvQ",
  "key22": "5EdUUVSdYgXQfQWNye8VV4NqokBUc3UxBmgxNT4o2Ujc2AT1RS54orjAtmbad5kzpcnMXx5vkAVXQyWoJX6RUtJR",
  "key23": "2mfUjNPUkhVwDAc2wobjjn7ymssGRGqyzrgC1kkccm4rDy1krRw7CJRGH2rLJtbZaFoHFk7ze1U4HM3UUtnsxdhC",
  "key24": "4VxThzH4k4niei1JTg8WSVjQQpx8YE6cb1Hk1uSCzxf1EutLf5SdVEDk74c9xF3UAg779m5h37JqFQxXgq6BVgyj",
  "key25": "vFCaBpbouh4GuSq96pCUxwgomdz35zop2SNUwCM4VcwJXHQFetCcA6B59Psdow4BdoqVzJWseWh1pgaR3J8d5ZK",
  "key26": "5QGYegUnmzzemgxawVu1AYqiRhtfWtNAmbUVC9LpeAF7wvQCaowPJigqPcJoAdHKJ5zJ5b8dMoqzAcRq5CRU7ryN",
  "key27": "orNMLrF9MpYuiVaoAruhCtF57b7WYwjRodJzqWs3a5F6gVS1mxc5cBfkyrHz2cQYzunTgboUnc3JjVJeqo6yLRj",
  "key28": "5cWD1MJ3jSXvBheKqJoEWnDTp2Vbj5QcTKuHFe5PPe2eyUdRQzwFB6Ts764JXPo7GuAfJzgRQU2J66ypyPJbNhEG",
  "key29": "2r4gSuTsu2CQF5FNCw2dFNwJd2HC5bUoFciR1WT86mQX23krkvHtMzTJBwLz343aymqvmd5viY7fKp9XqgdAUfEf"
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
