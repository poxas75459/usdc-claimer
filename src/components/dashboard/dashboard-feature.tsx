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
    "5fAWS6iYWDxQjWb1dF3EhtWSVe85nnEsUSHcT2Dgg6RJs2zKvy7oMPMAJ1zJgoBadPkGbm4wKM9XK6UoU6rv4ouC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qj2FEpgVYHi7gFaf5HyWdJ5QeLZTQfdbYCEEPiUTvY66pwfw86B35PARAqZCPJwuHZSSjjNhDwooe8fBVUCVdin",
  "key1": "32mewHr6xhWa3C1ujDGfxbUU28Ht8RrJ9TA1TkNfJTWtRPiDUSrnZ2CzHhemfw29zHJdUVjkoin9KxJ77CW8jLCH",
  "key2": "2h8DUqTKfAiByUYopwPgLgTG6Pd3jRVHkDvKAT5gc4A6ADYat8Cj8nGxr711NfpZKjddCrB39QYBzMQrQywzNhHc",
  "key3": "3MY4mTB3Gkupmm3tbP4W8KUSZpdri8oWXt3wGoxNAtVrMZGsM3i38xTUyw9mPsyPC7Ehyrz7G8NbQ9Jpfwh8jPHs",
  "key4": "58w6AvX5tkLzMsbBL3yszLPL4YWmFgUYenJdfGnyZMcGu5muxTGAZftZRhpY1XhvJn4hgrzpMFsktCcD2R7Z5Vig",
  "key5": "45i1wpZ4Pk5L1TYRtsutW97d1WmyxKJ9Eua1an9Y9Eky6UkZsaG1qhRcmAXXhWbPPRpcMSqxfQKm8x4qWUThxxWj",
  "key6": "5v4E1jh33yFVEbBDNvFHKPUqQJVaZs5Jphom7VTJaSb7DpRT8gX9GFUQuLXfAdpwpAWnDG3bPAQL3U2hbMutxLiP",
  "key7": "3Ui3oWkMBh3szTdFg4xX1156zidohHeGgWD7zAD15S56iLGyKeL2igGQpC594PjW5gBCdBYJrphxNpTzA4fhj5Qh",
  "key8": "FWNUJgbMCRZjQCXt3vNHJDbKhbkoMCaaXPN4Wcw4rpzEFYpi9ypaqghRa2gyC3FjuG1zUmMB7VujYQ1vENiuguR",
  "key9": "2rKdVc4xzFsNMFnaq2esUQ5x5ajkmEa4sPAH8vfPVTeqFiDdF4DTMxCzUqa1kEgZB1Fx7PtfPLy3QyKjjNSBBK3v",
  "key10": "5RfU2MPsbfiQqjv9qmheb8h9vtzrgHcKHH9gPfBnorX4VMCycMNMbbYZbrwNrukosHXiwpZC1ntWMYYQajVreu5R",
  "key11": "63nwurZaaA5SB6B4nSc6LKGwZrdNdcEejKFC2LdRQogpcJA6nt2Ewxr1uszFvEmuifuaZage5RwBxQ1vPLXM8fd",
  "key12": "2oCw4T1ExBt8dBYyhiwjz6os6qx2FVUw4Xdhjr357vq43uSYsEejNzb3vRQAPB6BjGiivuB3K4SHNtiJQmVLWU1w",
  "key13": "3U3Z1YomcQt2tYcJvrdF1iZTbu5Gwn2fgNRvv3yVawBaLvnHjtJBbsHZhJ3UQd9JSwMa6J5nvRCVCKbZVWTxwtzs",
  "key14": "2CKghU38atfXqSujiqeYzYyBctPLeK5nTNNDHYPvZh6tDhPqGStgPdxfuj35ce2n4XTCabHzt6qvZattxu3xamoG",
  "key15": "1234XM3khrbJHvZ58th8XSYZoad3svJDeB3iLqKCv4WEyt7KN64zPvMGtRAHLrYNEGNh9U7DAq7WhRudZdtwjNej",
  "key16": "4bXNzb1iRmgEyyPMkCmmijkPrtGQmJVjHojJ9P25iqTqkhMTt1PEJPnZ45g1RdvzjjDAHqnTmi2MK4MCZSXyZBbi",
  "key17": "pRxyTaNuwbtNbEb5tNKqwn4JsdLXCyv6SpwGzSpjbafijWrHaz2JthWFhQj3EUZkyKbgtijqNzwa1shZK1xTbDS",
  "key18": "ANaAQG3onATTfd6pHcnM9G9nMx2rmFJ9hRDqCmr7aHroQws7TjEHjR8JwytZweHUtCgg5qbKURnezT4y2A7w7FF",
  "key19": "58RaDy9WGiVy4KPUmQADpdcaMckqVXbXsgkHiPqXLF8sBxwdJXoduU3KeK9BxC2BU49z7GnNeGQJpJPeQWVMaMiq",
  "key20": "2Qxb4X8pUeiG7KZNjRvqveAJEC3z9GmAno5CgGSWqFTBDzWwvyqYEkubE9H4gb8KkH56zZBNM7mRenG8bpfRUdZA",
  "key21": "MyEmmiWJtygV88UwoGgd6CEmthGmj5inG5xWh7mrytVRzTLXkaLJPVp5ow5jSCvXo4nmCd9h4r3DSY9mWpiLReF",
  "key22": "53D6kAhYfYx9XgTURRRqAk42ATM7FH5x5hdmFNrbn4d7EZJPAAWzBvynB2N4NrRwNDA3DP97CypSujAVehXog8i2",
  "key23": "Le9PqPgQq38CJ9MpRThpRZHF2FD13vdmvrXXD61o9HrjGtGjUDR5dcjMEHD4drwxrdQYiFZ9FBfzmn2CGpuZnMB",
  "key24": "RSqgAvxxVVEdFBGE28nbvWKgP13W7pZNW5G18KHvKL3v18128xDAL8JHvKogB1vzjgYPq3rWrEdQ9qLfbwk2anV",
  "key25": "xfT5HqvYZVDtXsYLq3J8PvmcWsnHLJn3XAKaVLr5zDZ3a24tur1D69aTcAeUS3FyZ1ZuNS3JwyyvpR4XCLghdCq",
  "key26": "5qsBgZR4wbWeRpa72yoNcarKbLHVeL3QjcvppNjrGaLPk5QPxTAi1JKmzJoux7gmrbxQzPzxvc4kCmJnqjVx7AoR",
  "key27": "1RToko7yWrGFMBmJK5jgPHxheuSpiexR8ho1rs9AvJk2zXbK3Q5TCMQz4M4QdrBQT5PtwV5CHdVdrUyWwr1KviW",
  "key28": "6xzxtJtjA2uRSUqqTeAUmyo8tbgx5diHq4oiGgSs9uXspuo4rn7MCukbQioG2AEezBYT6Cajg3mcpRzVXymQd3x",
  "key29": "4iqWsbvrJ67DGZhQaLwYSQVv4ZxhVD5xTFFrkoZDEajmT3MFvYzV513QPiZayH2oVYTFCspDbxLFFfKBDKnWSmZN",
  "key30": "2JmdaPtuM123PCRdyxvQYh983R9KQenp22BFgjaKAfdnJhhNXi1oCFQcgNtgSfpoKkCzXdS4q3D8NMQe77AaasjH",
  "key31": "2kkNdYhTrvNE9HDuaWr8NQh1XNPBW5YdHtrMBPrntDLN6W6oi17wPyttf87jSHskYi1GRA6671BnUdY4nk9rYV7U",
  "key32": "tv5tFnRh7RVRwYfTs825cqY5QELXU5GLhgbqFy9CMVwj7mdCDoXWeKFUMsSVPGA73ibH7WZSGQrhea9NSAyKuAi",
  "key33": "66dpstUozoTD2XsfmmgQEbMhZBeMntnJvDzMysCVvSBusKE5Ubuv9hiE38jWcyMo6pmKuhogbyzYQyA4u4vHg4gD",
  "key34": "2nQ2ddur7ywarrESMgp7YTpAD8PknoSKaAZz86xkVkkKsdaBjAezbcCWkL1C5V8MZHN4j9dPwgUu4xBMattYCk6h",
  "key35": "3VafyuQoqSaMmTtQbFZXLsc51uZfZF1DLKM8HipLkyfSxYHTBZqZhepiBsSZrD4iR9MzXhvTLjTqDYEnNXwayB2x",
  "key36": "5kFLiwzuZjjiHDWTYFqkQ9f4AEzWVPHrcpDQV5ymRQztDHPhg7Kt3KkozjAVitESbUgDSxpad6zbuJn4fsdDd7ag",
  "key37": "WwMJ4XtpKuqoT3tZBezb64bAcsKYeZvKJXUJfPwTMd6zduFZZFYp2ycRq4AjNYpmK5i73MSf7x1nmdo6aJSw1oc",
  "key38": "2EjzfwM9wZEv6xqj14MyHYadbJykzBhxXacDnjTCAH6hE1qMv3nMGvHf9qMet6WjpKSwi1V7nANTy3SePB6i4oLw"
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
