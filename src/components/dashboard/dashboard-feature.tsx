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
    "2Sg7mNUhE5YPrcjzNPZTg4451r17cvh84RGktnRAxXTz1BkU1VxocBsjLb2cmYD45ayxjSwwzKexbGrXV5xZ51Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1XmQ4MMf4UodMF4bEZeXBFr1JVmvXzAFwAHcyihR6X189SCMnpJsx4Cd1R5vpKrRoRMJxQ869Y7hQ8NtL4ULhS",
  "key1": "2sYoyfhNmGkjHsrWZ7UE6SGqut516YPFJbeRH3qiy1KK34GdFU1rYw8kFisRWMjUSyaFaYbFWDP5xJ2fc1aN9Lni",
  "key2": "5SsJBmF18p3wzhtDcD3kAaGDEGCamYnfXjyVWMsayusf6p2MWzmPE23wy4TCavVMD9DwfBFTwDd5tEk4wNSwt9bs",
  "key3": "3LCPmQN6RbKH9jJiKq1pkcN41doELWmeTPcoUWEokRdsASQQnJy6c2SBawS7VizaFibioEkFqDBPqHzhGTNsNDLw",
  "key4": "4GXrXntcoW2WBLG6UXhfdhrokDkaEPtat78oQZWc9kpNPp66467yqPvikL5hk9DukuaHMG8xQPz2gw1sCpwAY9Ao",
  "key5": "3Zn4BWw12UMFPoehzswQCx8CiovWqp7Mk7kkr1FuGZHBUdCs75YSfF9CGKE2g7n4E1yuriMetMhNUxhQVg9cjkc3",
  "key6": "5rEngt3DUsFUndXQ2DD8LLGYaLJtcArSbTuhHb6DsrueBZtVaxrJ4h9GzwJ6HpVe6TkJm2g2BjHAJsSeuKuoLvB7",
  "key7": "2rJwxGQDi2nJnj53ssehP8YPaoDhjQWhoPYCMbsHLQ75iPvrokDcCziFiJQx97za6HpZmxpYCv3Axq4bK9RoaQ3A",
  "key8": "4TMAL6Y5aZQnteTLSj16ywdbkWWmD1BX39EAKEq4NJFLvQL5pTrYacgRwdBFN4w7MYAXHTDUJ6TXneYu3RjNiahg",
  "key9": "5e9yhDNFzHCK9dovrAn6PnGuPsRJm7PH8iScHK9Lfm8Vxznboq6TPEgT58BM6m9hN5F7nxkCYEckmz99Sykanz5t",
  "key10": "kcsDLdZge7B3qGHMBuYzGoL5mDwEYNASPbreBxgLvYwxsCgoK58HceqAxYp1SfgueYcNTcUUUqfVM2GsPtQiEAE",
  "key11": "4B1ieFgXL3qF17MnHXCmNou7P6H9r8FZz82oHeE2Y9UfsYPboJjtqDdFJbqJwDgCSfCeP5R6M2QTFqemcp2b74s4",
  "key12": "4ZucK8m3t9Pr9RqJtwpXy1q8LCgQQkz6Y49gT5Q4Xk2T1E1V3UPXaohv6pnk4yrQNgdBvL1VARJEhneaoK9KHdnD",
  "key13": "fAfxXNJ8FHPYSLT8q3e7MV7SydymzcfBdYcqEDEQmh8ZUkAD4LNJwAYW2Mede6y1nPsPpUX8rP1Vp3Tzqfw9eBD",
  "key14": "3MKTekaNQFaGrhhEnVXxDBNQ9Vt3TQ3tVB6YLgUs5LvCGXtz6CUAyXPSsKsdUacaxq1Ru2jMBagPifLjq3cegiEh",
  "key15": "3EZ1ukDoXqq9ZafiMjfr91qPRPDWb3iGG9dnkoyfc6XuQr2YzV5qE5XyWLJSL7Y4VVZwnMEq4BfEpboD2QrnfW99",
  "key16": "5y56RU8nNsr1y1rgw1FnxXJSZow16EaCLJcmGazwwPYAdY1HmYQyoeHDcRedxkcrP52dJPqBz7QzJGMwZcTfZ9Ln",
  "key17": "3axdHoXwg6c7h2SPvjZEQNh11TceZoJZCcDMMeHDngYm1Z5KQKM9VHcvgiQZnUVcLDUw8KFWGciUfwjJrgmAuB3m",
  "key18": "5Mx7Rrrn8FruDJ66zuXZa7kAyXcwNcHNRbn25KWuohCfd5PxpDZ3HRgUoRHFdyNfDdVFT9d4Enbna3772DkqvXiZ",
  "key19": "5Rmu3G1cEG2MWmRnqbXXaeqn1i1B8MXVE9RBe2qubDbFFGuFg2dJheu622c1Zm1XLrSkRreRxxXf3GmdWtcDUYWK",
  "key20": "61DsKjCfw6tGfohW4hfaVjboDQhTtjmwjihckWtb1N9dsKxn2b3T3vfrvUzVCvTsW1gfc6Hf3R4e5dKsZXkRMv35",
  "key21": "3ygLD3F9fcqNyEQB2Fr9rSo64PbJf46JGDuFv2ZVv1CfTBdtdszYrzn7k73ixMAHwoLJ1w7McRBdRKhuXevnEVnQ",
  "key22": "3LTi9GMY9guJrprv9HuwDJVHRSAdFJsCUsdXYn5TcxF5xkGabdU87ogUJGvF1PcfDtshpfAnNVNE2WiRyF7FKDsw",
  "key23": "5LDG3H6Y58aPzrfswSK3x1st9wKcxSnA2HuD1bvvGVrbAxKZk54khEBGA9tgZeHba83BVXoL3mKcNDJAoMyYouxs",
  "key24": "5P1ja8EPgd2La4em3DbkhftkBjw3pbqLVesGLZkXyjUj5Y3ggjDzgfwhNnmDQmKmj2V9iNwWkTpKF4k3FjZruJ63",
  "key25": "4snGKM3XokpJDD356Kxe7idUFKUQjqaYFaafYq54eeSyLQv2mMSH1zZwk5Z3ciuSWgfV98LasYze2FErGP493diL",
  "key26": "3YvZWqE7fSLqyNGEke4p7UrJwSszzFWG1ctxMS7Caerz5iGiXqkZNQXXmdYFFk35UGcJA96RJFiQjCbhTTf6z4HH",
  "key27": "kyqYKFKDqMMYUWDmfceCpYW1w6GTKQL6CQvx7ekEvVaMiaF2Fst2cz41TtCJrmHHRGrroKTAqCtk4nboUsePGc5",
  "key28": "3o6FDo6pHWguYug7VzAnXgiYBAXf7cDjW81PWBgwrm8UuWTfwvskXFxSBJ84ARjUZvfSteJzZTVJkpcWLsHeFBDz",
  "key29": "4djHYDy3q2aYXRomSZQNQ9oZyGvQxHm5FSWETMrV8DdwCd1zQ1d6DihWDSvRzfTAaUEinaFuuZyhdKqpLhYZZLwp",
  "key30": "4g4ybvoqh2EjTLpXcFimGqruqKWoX4XRMnehXQmfvMq4QrRAFwUz9XWaJpf5QVLWyLw2tVr5dn4EHP71ULDZ7FdL",
  "key31": "4mLApKb6noGErujKkGaQM4p9VWc73otmFQNahQ3Z4KTpUVvTFbP5VMZ9EemBo8tCXWAnHoGuEaNEtGfSpdgswNdK",
  "key32": "5jUiYeJZE6JN79FM1zyhTMYnFCQVv1PB6fmUSNBWn5boXU7zpZaNRrERuVrcEGNvtJ3JBn4rL3Py4HWfexMfYPh8",
  "key33": "cH5JN5mkUNhjtcFUrjwK9L3R4sG9EydSfEyVYEddwjFpFZtW7xZvXEGFLmH4TDcVXwYK59kFGfx6ZwKzgzjZdvX",
  "key34": "3Mg9nHi2dxzuH5nKHRmaKA8Dr2TgKrPWRSr5PJBobEbDMGCYeqof8UhWynoU5nhukyhh3dwA4zTPuk9pSTiGGsDV"
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
