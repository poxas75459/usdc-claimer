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
    "61FbjTmVwRY1NYd8VibUmWCLsaaNhMRP6sN9AjpbyU66FnukXT8LCEfoYUnQxhM79DmDeT9zmrr5nFUMLRSs7KL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3maAsXoDoyR4uMZXHbRQgRnVtH6Bz8oWAzeAvkEJ4xM2FVuKpSCeqt17azt3LD5fKDSvkPpzbCLxwpRs9bS8Xufd",
  "key1": "3MZLUsiqzNr92YDYxPe7Xa4PSwrUQFav9rbJFQZoL17VATyCFPpwSutw8revzUpXvcF4LNSeVZFvrQ22cDBQqAQs",
  "key2": "NnYVA2SiBnhu9hr7S7gZithDYQBy6uNJhdDmcfpKyKbmXGGEuQmySsGhPXG3BmUtjyuFymaNGGXR6NVdZ1mKMpA",
  "key3": "4EfFJGUiAtQkf4rrCEoFnAibTd7ffBMDmnHVfjW3c44E8Kv72EWG2wR2MYQ4A2ktL73aVnZWNE8UsHZWRyfswVxh",
  "key4": "5PQr9aQDteE1kFqZGLTuU44JFa7syAkN5onoc3RYJndm57QgFXesdnPUhfVifGa32oPvULyVNpisnBBaLWDAoQuP",
  "key5": "4s6WA2dWUF1az5B3WeXBi4MeLWrEXkBbi15ZcjXuz2HgueaMbk6SKobEhcxfAcbY9w2gSaxEWwyGPfpxxhsDCphy",
  "key6": "4i999yDmYXnuuUJHGkuV6aDdmHvAAz9PEmaoTWPKRRwyT2n7VeH2RH89ZbUknMJKmPbeRefFHyaMatFGCrFT1jAU",
  "key7": "2Nsx6nLV5QD8r2M816ZQ58SKzCa6UL2P628FbjEG1MqEMWD3Ti1ns4DFo3FnRfyzLYQKYLSYVziMsCdZpSxX8e4V",
  "key8": "5fjyKHgneiYN5pWYJHiByBieF8UdgipCvAvTgoAX5VWxkBTPMp74LxGLzkQcYKQ42soGY1U6kyhFc6JjuSdeR2jy",
  "key9": "2zaBAtZD7dkaajaLadKYVaaBYRzEQWB1NAjYT1LfTzzA6uywNMujtu6i8jj9kxdgxj7L7NMMzQzgnE3GVQYW3XaK",
  "key10": "5Zgs9BktCvkTNhd6JfQ1LcE2aYWUWea7Xe1RJgHg1ekBjdGCUhTnjzyphSErzTudRfGW2UyLfpVM28J7fwPSgvwL",
  "key11": "4su7Vt4JVn6no78QfrZjr5p59f7W43V4GJT9be38qXMvciU6Nye3s8iPjvvZgPjnrMCZWWvzxBXnfVVCLT15dLvL",
  "key12": "3uqGJPVjSadXN52xdaB5bjDh7K4gVsKtyCuuBuZGFcmTAwG4mBPEVwvwatBCuHPBg36Td4coBRB49E6cWxcyikJP",
  "key13": "57jJ4YvN8H1kpsBazF7waJ2MXE1t4Sub52kzEHRwmLq7UaikS6gnB8fMduUhJB7HpJq7nLeMRKvDH4mdf6VrGMs9",
  "key14": "66HVZCbJBFGzzEtFGXjiGB68S4FjBzRQHsXfuuifdz5rrFdRpqydCiJakWiTzcgrPZQ4zAg44SthyL5WMVRKzaHY",
  "key15": "3wf41AHFzkc7xHyF8tH59QpFgw9P9gHVJGfv2ZWdCnZWE8JsU44Vze6o9kkXkk5SvuDKZZ5aHGTX4SMdfKrPB3yD",
  "key16": "4GUqzfYg6E26xCL5R1ME8LZPefWZr4K45vanx1WC33HtuSyRVi4MXjrTs4329KUBuL2uEzNiMww2JDyHTrKbN3RN",
  "key17": "5zTztLcREP8eX9GBMoQNJVy66AccaU4P5cg3jr3SzSiiR61wTmkcEFLFLDQMX17qxWiMEnPCRT4odGrLwdp9jwEG",
  "key18": "3yMsRcj7X3AueK2rkQ2PyV7vWnFfFDKpkMQwuqnkKFKkiRCQY8T5bvBUu9WfYgrxSevze4Zk4pqyJy52wGTdmZRg",
  "key19": "2dNoAHXWXEgGEXkdFmHaYAFucbqK1LNxy5gpQV8fYACPpJqLVwJTzNxrwYkEMSF1RZCbxEpCujC9uKUHrQfz2EPm",
  "key20": "4JY4Va75xt99ptoBN7fdAuMWv5kXe1zkduRsPZ78Dow7vFpJ2tviwbTaHfT2ezJXERjeFmWffHpTTd6WgJxar9zC",
  "key21": "2seG4wEmPnYv421PtzhvzwGJTAELFmAEPW3R8fepfW9Sku52WwRRwk9CeJRpFbZVJqtzUK3e2EyL5s9dZ3a2PNo6",
  "key22": "4Sf8EXQkdZtNAFyxtr31NEtwESGezCN14qhB4YXJYMrrcXuVqvZhK7hdb8FRdnGHmSvjTWeucpUG5FjwNNHLPva7",
  "key23": "3EitVkKJ3JA3pu3pin8YHQFtvWqXQcHpjvgGHA6mau5E5uw6ymXazQkKJnjH6yifhPmcoYX5hGJBCR2CFAa2KeaW",
  "key24": "5MiNMRAWGUbhgdbfwk3YTcXN9E35DBK9Km1kX8tP1hiCi23r6pkf1pXa6KU59s4Z6mSe5UxfG5QDbYT7mCh3c484",
  "key25": "4RHTB4Fy6jmbrQi4KxRrz6h8WToWjLaSjV9F8PXQkcevrza47a83GrByA9RZ8ucAkR81xAREdHxgseY2m3nBpjuV",
  "key26": "5aiVEcKyocfdyFZgR49PLwoasTzhx9uWZM35ytyU3RqujgUs61JYxTi7qsd9a2inhxNE4qxzn9giBF6HXamX4suB"
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
