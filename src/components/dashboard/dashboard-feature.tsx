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
    "5dNYnDv1egh9huMdBMk24TW8goQoQNXPYj8F19Uh9XHH56QS6eLg2s82T7GzJT9MBzqCADHD7eqK4Dj5BJ1L7zm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdWeejJjzdRRpAcLPCd8EogUAVfWfUJZhDVfVVtcbEP2W1wPMmuE7PNhLXgXjKvZvErNigQNMERUoFzsLMoLSrE",
  "key1": "3YJ1KmMKbJBAjvz2xSYeTR2uB3PNveHyKkV5VZuDLXxaV3idptdr2dDDH1JMLdMr1swsArMWx2zWQb4vStojuBP9",
  "key2": "S11dCWFDFAANk5CPUwG5eSmMj7mjicD2eD8UzdP7QDRy9i2gHAZFLswUhvZCfPfe4FkMufDNzNNJbRwGC1agrzL",
  "key3": "5eoyeGNpJVoQgw4JxwKdU6khdg84xDK6WARkk5JczWnaWDbd1ZGUyp47xmtJJfZ1HkUieT5d5jwUFnAhfLUmRkba",
  "key4": "4RW8mQeApTW6RJ8JqAt5DU93PWCHHocGiWe69mbpMt4jKk1VJ5aMYe6BRuMMGogYJPT4KJmR6J42qd649gCyWWfb",
  "key5": "64WCNWooeHaJqHkzYP8tA9igbX7hW76uM4vgHHburz9KNGzjGiz7brbgnpQjtR5sp5Do7ygA5iWtho4LSHpALFQH",
  "key6": "4Qo4t3cwvF6B7tNvLCWBhcicaZEHs7EUpw9NMS4pfc18dP41vdiaE3zyJTjaDx7PkBAecQWBujDM9CEf2RXCtXWx",
  "key7": "2qjKJAQuMoUYqYXjbYPgJMnpG9BRmPhsDZLscFvA2EL7dEwvxoew8aMTBxu87diFGhspXSf6HQRbvvX1XBpR6oaT",
  "key8": "4nePxLHBdnEtQUqGjLcoNa9HW8qmvoRQq55HhuscXEUgtqTPmcVsu5u5pxyEPGhgqRXoGkGXeCa9JnsXst7fkv8e",
  "key9": "w79bqqvJQexiqass7HY6Uiq7VeHbkVfMnQ2PHdH3viC1ReQCis6vPtPcGHcNUMWmp9aSTXkusYXyM4aW93AASXJ",
  "key10": "5tu8pkrGdUFQ5mVE2ZMi8VAdZHsjyA7Le6hKAxC4mX499Wmjbzz4LdCUiPjq8pMmeoEahJns64EJ31DrNwTtn73o",
  "key11": "2AvQTvo9QK513EXxYhaU163opvvdo1bdPYUkCxxoQpxEtybRPPe6ZmYdRvQ6EDc7XRm54CmvReJyBcHhB1wLS13D",
  "key12": "5aVgQfE9RTqviyzDMLY5UGYB91G9p5466w1efGyWKkDfkdfizDCcxDVmfqpST43y9eN8DMU8LMsG3Cuvb3KryDNh",
  "key13": "3HktG85AXjDETRUykuqet463QUHnV46zd2h9xL48VeyD5J1SsULvSpeGQaWHPWnw8N8U7TxJF2bc1b1d4ha7Aud3",
  "key14": "CykYtdBFLMFajzLcukeLdtGpvTQ1kq8jtQLLy4596NjvUe3Fft5ZkyW6ov8hg1aLmf3FNr3Q7jjNusDdGtmk9mA",
  "key15": "3rTomf45KJiG1JNJfX6J2zdN2ezKKJtmasXvsnJSVZjssAq8xN6wzSWYTgnjpQWR72euLzNKFUz5kDFC3xeZKa4d",
  "key16": "397kuidzjbEDUon1uBsGbYXYH1SuJEH7fmRNAXRC629p3A5QD3sjjyVE7f3RYsNW6NEBjiKLRzNtzUDqceLnR2gp",
  "key17": "2PHPX6JfQDrgcQDvMJNmG5hSpMy9pZQsVM3cyzJx5MJ3ZUo9QVdRLBQzA19kc68SDEb8QNk7wnpFuVwwJ3VHVPvu",
  "key18": "32WQR9ns9We2A5hiZxJG3heEAbmExbXTvwtygS6wVQfFdwEmrj6JQp1eVjxteuDPjoTBhkEqHQePwZHn6EnSYZij",
  "key19": "4DChqoM68eztqkdGL8yvEhqP57Bn37oSuDLhyKAnmVfW7Q8djiLRmmnrrQeYtuohf7bHRPpA36FBox1aYWRFvYsX",
  "key20": "EWawd9y6XgyLWR4YQZbmgoi3Vcq9Qv2zbQQiuQQViTqp59shvUmrXmDAjG4Mzdb4sNv9MqYBAtvbfvYTB1pw3tb",
  "key21": "2iURVcsF8F5CguML5DMubV4qcFgcqatjSN6VXYd1YCxT7vh4bHPNEFaEEWQ1bnGwzy5zVbKXxiciFjojFbYYKn9c",
  "key22": "5jmaxhRwnL4xFRwSQfL5Vz5vJkdM9HyWQu2GC3vAs8JR81MfFpx37F4PBH4ghetR2Zzw8TrQsiY1rTcLvxFdMCEh",
  "key23": "3QrKhDyoyKxtJjxigyPq7iR5vKBuVXqo7T13pQePubpggdwBie2zuh2TBPAxyyfTGLUjGq45CfKLHEDN4A6ywd7a",
  "key24": "5vJqFqZZ73VDTN4srPVr3LSMW2bzZJFHB3LLRrKWhYG6ZDpBTjwB7UnTFLFxUMsWbxLqRfXgroDzSAzpeyht69X9",
  "key25": "48ChoG88335AfuDiyt22gBqBxoDKZzXaNhPbPAtud5ipaWZY5VsHPx9QHXeMT8hfgsJcYRkfhkMTEUDj43KchLnb",
  "key26": "5o7MHTNFwpiCazp8ULEXPAMpYBpfjZ2sSrmG4SHRXtDuBCfXyagr7xC3wMLA3VV4R2dyZ98riikgXMvm71DSf2gF",
  "key27": "2Cebzat1gsNzugwT4Xa8tUF4GEgziusHpwjnd7pc5kbkWzfUPpK1WTfhFjMeLT4S6b7tFmHbXyCUjbetbybVsjkM",
  "key28": "3vDLdTd8sJqu7nWaqezaRzxSQ34m5SWzkqM1xi1TS8ejsjNu1NiZNL5buhdDKpooxnWME1EWct4dP7rwBUPMurmZ",
  "key29": "52dcuVvtmSVtuEGxKQQCCJNo6YT291HuR6Pzzs9aEmVw3WA7gjxEAfBvoLfYqygLgH2wS2s3NKaaBvujRjJ2Qaxq",
  "key30": "559fAw4Tow4RUWS3iLhZwsw1rsRDaipwbDjgoQ2JaB2uBRzyiKeBU7XU2y1ztjN44T3n4fVfD3HQXeaHJXCRYqK3",
  "key31": "5t1NNXmRc5JL1Hi9FRTsfPhBan24dievBZcVNKTScNKLAssD8Ap3BrT1sSSp6z7L3pWGyAfKgUBdegmssJRxrMCV",
  "key32": "61aZWkJR3T51VtcnqF9KJ3MMzh6xGZsfetWZzFdZRhWCkSHiXLSd6TXX1j2QFRJht23ZbMfaxqLhhH4A2rcmkpMJ",
  "key33": "5ubLmVdept81VUkNKvgsE2hDEWHFigDkL1kBKp3en379bt1VKiVji4qvRixrQLfv1JPfzxCaJxYnugeZwzHbhYWw",
  "key34": "3mXc1XfRYfY8Z39JW37x5kEtZumMTzFmqF73vRfJcauUFbwFXqWrTxGupH3Cw4YUrMupCqnCL8T2bmv1Hagdgyik",
  "key35": "5w5Vckiw6pQPikD7QMowi9FFsNVfM4cyhWg1xMtfzpzzBz6diYLZxVvHS183vSLWmd8gJyxj3hPwPy4qhAEawJJM",
  "key36": "3QhKgaHELUkN3KGeA3367CawZsY4WMpj4g4fYMTJuhR8AKb53ekPZ6vPDHVBScNkeV2wreA67W36MCuS3wXSmmbf",
  "key37": "4kb9W9GP5uX6EWp4vVNcu4uPNvv1sAQyKC4pg6FFQr3AjsBbnc8QVji1AhDNoHZBHZZYp9i2rTJhd5GbjmmWjMRy",
  "key38": "VS2FnKUD3rGxXXTpj9HCVRkVztubWvCGuwZNhKn5UJpLYWHv1x94e5rTp4AYB7j3aC1tpEJnAvtK6eeya6V2cxK",
  "key39": "4PoxCbkQUCWK4zoetCDJHgcXsgSvVyLN3oBLRJSKRyckEAdezHcxVqEaADZv7FZActV8pRZJY9qZNVVEmxmasgWH",
  "key40": "2M899SrX9X7KxjeRjeoHHfV71MGHASv3iyjTZUK5cDXvmU4XhZZxDH1xVAXRaT7DoibhmRRugZ9oPazukBDqNCBZ",
  "key41": "354QdtxNH8iHvHmRLN5p7cBMQ6ru3j5Go5PcuZ1vwQYbfaawECCCjvB4kTbt8ooAEtjicf3VU3Fa51FxPTgPeb3F",
  "key42": "5LfyhaTETnQ4Xc3KxNnXfGFaYacLdg1goaLjzP4cHMtnJ3DwtgvtvyA9CME9kHuUjfBJwAf3aj1npz9ophkUTRr5",
  "key43": "2K3YSN8uLFWBDjDhpQDqJ9XsiAYu7F12qvC5TdpUj4dM1sVUtfsLKGyUyY8UMDTSd6JRKYJn7mmA9FPfu5p5qEhH",
  "key44": "5GXHscPSbnKpjfqb8QEC4yBT1ePX4ioA1PjphQLTgrSYnWcp4N9iEmY5t7whTngwa4XhCHXYaWiwQoPpN5sNGUvo"
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
