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
    "5fDs8vsJWS8orFa1N7AhEozc3Jh6ZNQHnq4i6oTjN2uYwthTtj18fnYz3jJHEznKWXxsV5deDxyT2c1S1G8rYsRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdfCxsgtWYjepRV7eZgF8uFSZTCeAffJ5DrqaaXNdwPqCUrHnMy3gDPtgi9sMVRZbH6Qut2WqCzMnpfKCexYohL",
  "key1": "dBQNx2huT1Hct91ERiL3jzaBBauL9mJqwSJupLRieFvTzDT7hNEAcQQzPvtzwnH3pqaNW3SzAmb4ED9sgyddQEP",
  "key2": "2j2tJu2gRSL36Nmh54i3fMzyyAPCbNhZY5z279FWiufu88YvFhgyVk2STKu6bsdrzxSxigMVVioawmyoTQx6dnBG",
  "key3": "2VJ62aAkYXx42wfibNmrFJbERSpBDjPZeoZutjqjkt2eFW16Sh14CUordxAqJeN82YkSUzxJDbRCSsfjtQnarEPa",
  "key4": "4CftYby94kieSPk8JVsFMzLTdWrSkP38vLLsQZzgcGaeKevF8fZhYuR363tkcRyVWniZZKGmCQmrta7rVFZyi7PZ",
  "key5": "4NtFgcxiysExJcjMKKYqTtGp2zDZv39xf5x5JdsirGYbfdCodehXwgBM8ZvV5AANRHtaRUJ5KHja3WEKiVL3vEZG",
  "key6": "M2KZeCpbTgHCd8JNyU1buELsKFbyTM3xebiLdExdU7LJDwoFAGtqbMT9mBayw9KoW3pghiAFdaMfoDrXRgq7tpb",
  "key7": "LAUMHQUdcRPJwRZAKFV9bXfLHwXPyN9BryrjAu3FRBVT7YZnr3qBUfewwe6b9HH1HNkCXgwDKgbgnonb2t7q6SY",
  "key8": "4XYfjqbFDMXnB2x3DoHngs6HQhJ7WSodC6NrENvxdEkC9CB1oXWUQ2CuXJZF5Xpwr2DoAPzSMoayJnP7EopT67hm",
  "key9": "2qtM6FKZ68nw6DuDEJaJViyjYF5YpdhvAjaeqpXD4e4fETNFHL5mo5b8vpGeoiKBz5USkW5q9aBoBuKJybYWqoqC",
  "key10": "27xdYFAeLTekjvhQepQgvWM3Ae731dBXEnJSSaiA5kKrJLvzWSkib4PJM2u8sAimeiUePsJNFo1vkwjwM9FiQTLy",
  "key11": "5efo1crr6YyyDM3X2QwqvJA9u3jyxMee8VEDH7YqkGbVBNw9tpvXXbnMS2MZpEfU7EzZcRXT79AT2tdJio7K3nL3",
  "key12": "5jZVmr2BLzjiPhu5knudnAprPB7oRkYqVHg5tmFned7jDSKyXsUfXqtLq2BDGg3RxjKz8ZzwbmiXFNv3NcBERkPq",
  "key13": "4MGebCdRAX2ivCcmwrn6sRrmVFYQhgCg3zMTSfFJ5DStvzTw4nE4Pte67QFpjkAa8JwvUUxQwG2JrENEn313hF3H",
  "key14": "4MpPrFFChwxRk5KEZYBZVmvy6Gymh4JRNSyuJ7EcUzxZtmF36tBz2FtqEJ7NnQH3RM4RwshWk6roRRvWf3tnz6H9",
  "key15": "4AVDpfEFLrUh8Ua4oPsriBSjUU6AgeQej71hfcAdmEQW66NEJNBJMakZ89Wmy2oC8J4iUVYLFWkq5XARrhXdsF85",
  "key16": "22AGnbXgkNFd5BCEZaNJqyJ69H581HfZr2E3K662WRnMN3UnqLEg1m6iFkZqYqKfzsnEzkxxSj9CUsv12eNLreQZ",
  "key17": "3njFSeVCGcF3u7s9CT7scvrmSQruZ52jd8YiA4viUwuFEtThbjegbpd6SfGy56sYoJfoFcnvfRdwpiaL46JtxKtp",
  "key18": "46TFR3AGcFzt1RnqEvuTXt84J88LQZjHHRykvbncKUJR7Luceq6nYt7S4SQnXNhzZVTaAbvyhaVfmrRUxUs1Ktu3",
  "key19": "4omzPeWTnys4vRdxq8RxJju1pj9VEYcTpxQ6kqTMZMM5ximYJjC3eiTY5bsNkbS3NdUqrgTayoT7GmxFxP75Sqh5",
  "key20": "3pA6Tm9gZsUkNerRajhnZLrCq6Yyg65aFGFsXZsnixtts8cSLdRBcSrhsJbRDqfZ6sKkZyVFeqdpjEHDDJbtKzgk",
  "key21": "QiuUwhk7BGWKVyQB7pKnQ2kKRHk3hswAgRJfznpXSoYbbEegWUBNr4ZMiFXpA1pVjiVTRD8ov6RostyoGishYR9",
  "key22": "2e8bJKhHxjjWoT1J1stBRY1onmZaKJB9mndeePxCr7fC9DL1sXBkMfiv3KVvgcy3npotuhjE5oAJAWj9PPcN58Ug",
  "key23": "3KnKNcHgMqKaMetPhob26fAMTtopXZWZYqFuguwL4YMVDhB3YGHjTm1h9xGKEDStbEEzSC4qMnRxyJeehW75GfCB",
  "key24": "2AumnGJdz7MF2nEbkHpUBgPUkJ6kwQPSwyDZZu66DLwN2N7iZeqatv1Q8ajqxwAtsBqkVzzmVHmVYGbRJyBmyiBq",
  "key25": "2EU6UREPDaXA11GwZfAuBXbsF7sU8WmtCDoUnfvKBN5SvE1VUbBKfrafkME5EHu38v9ZEaghScCtyjBHMNw1zdev",
  "key26": "m2x9wwoQ9YbVNnDLdetNGJErQjoJuX8gd1nFzyGXsUeMC24zi3tYVGc51QgPDVeiH4Gxv87a8zMJYHMSCeEehW3",
  "key27": "4PaeYqMRKrHAxgFmQpcLhzMCzMaMb1AAa9kg4ZANq3eHa5AD9deAtckwN7ZyEGFGyRryzhEHQxqn5447ymhZWF72",
  "key28": "45VhK8pDjxiECrc6VkdPZgd9AxoaXnJqJ6grLbibAAAFK4syopqU2vTKB1d4uEpVcv8e8uSNw7ecxA2rSBSuc3AK",
  "key29": "34TjQrTbBFBpn6H2twWHuPELiijjgqj215mikGNbAeP3qrQEZGNCPErVkSX3C8tDTDWoyUER3ajABMCFCHMqodej",
  "key30": "4reWQWM5fFjEmjydAu5JbC14dVVewbfCC6epZDciXpn6W4a6N3jhhpPRi26tGvMpMWidoYdedswwjWFRSiq9jUMN",
  "key31": "5wQBdzuuqURfWvrrHiJRu7gQkGUmr12LCAgtHyJwM4rpgZ1o9WxPLnRqGjVZPc8ip6ZftWhVRZqYVYp6mJPFHtrq",
  "key32": "2urycoPvsC5Y4DjCAByTFbcFm8umi8AqhChwTqB2BAQUXYXeGuSkMwmxJ27baJpbFtN6SzCRmio9PG8EtBcunkg5",
  "key33": "26CSiuHtWSt4dMGvkgXt1oeK9BZjztaHVbeN5snkKDHtcVmb2WVgeYVBSRHVdD9qwh4sY6zkMu6hL3nzSSRD8P2x",
  "key34": "5ntHv1GvR9oy5B1dmHXXQiUJ8wkKno8VERoo9m3qroGXe4REL111CgxMcBn4VcKjMBQyiMHDZBE8jwb8VxXstACT"
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
