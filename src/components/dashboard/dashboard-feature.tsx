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
    "5wZVYu2HZDfvqtViRBzyL4FBWBgk11SuU7HaGSPMr8ezXx5S4ksYhZS3oDMt3ZQu4MEaDsCc6T8UjNaxWLNXMN5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sepKQcxtJzfea1z2dyAzWVTe9WYSKkM6Hmr1onRMfAcA2EvkYvFuj4FnWpZ6nP5DfWL8ENZzKS3iDkMzMssYUmR",
  "key1": "65vhY9bUS8H2pi9yyiwo2rgGzFpPbQmfqH7SqpPyujmjVNfDHHS9CZ51WyB8vsSwyGvDpfKgAhMmdSPGsWeML5A3",
  "key2": "5PgrYVe2nXLEbvMWZNUss98eG8DgHCvp1fNipeHbrA9F9w5n4mPfAFdAddXbpyB9Fh6p3TD8GtYR47ptgUpM87Nj",
  "key3": "3hBfdeqF7bk12obV3n42xYNLrCwDvHttygtAh2rqXiKDstyQLW1tbXFz4ZtFUmywi8PKPwvsLgXgVXa7MmhMeMSS",
  "key4": "4mYwsbUykrEiPEvgRyhk5Z5SBRJBFc1RpMZ7YJ7iAFER2pVEF1GdK7HJJRvWMfAafphdTiXhwSVAt9Tg17DqPXdK",
  "key5": "3BnjwrfEgzbK6yK5BWgfCE6jikxTpVNumK4zrvc4RQfX6sSKMX4QGNsF2sBxA4uhU5V6pPZvZAvfBPYYEhULsJDv",
  "key6": "BGw5uiBN97jy3WRouskAjvtepHzu268bC2W2sK64kvJxeqSVykHA6zWTErfqAdjfQaGBxMMZUyUYAtFJyNceTPt",
  "key7": "4VSSrQKFRw6wuqGyZcRRjpoNUA6MX1QdcwPLbLNpyrSTZJYyXVRXo2tgSXEQSEyin6iKtYaPoeZ8dNEPuPE3md7A",
  "key8": "41Ut2KK9p7H9JHumenuxrNt98VLVA8a3ugmFJogxxEDPmy62vb4YwhV7V8CDjAX7Z1Qi1My2PyNY8d5h3bLELXLT",
  "key9": "3T5mqvS4QRJ1pCiwFbS6Pmypu35UAoLXp9qwHRSktqSYhnDhTHUsXRLitaVV9teLDDtDHuDJUZeZu4YYRFNUbfZt",
  "key10": "2hhoPSMP1HXMChbPJgVKK3pAU5FwuEb1i9GMKWTQNSp6fwgFGgzPRydiAyfQvZU28D14igf1xEGgjHVX1ZNW8joA",
  "key11": "64RNfVtK4Mub6xsNQWRX1uq5sj2UMwaf8ioXmXcNvMUG4G56dvHpYcf5beBWorm8fbwb7811i5eZw5Lwd7MAfV2C",
  "key12": "49uvfrbJVHD65r8txiPgLjoByWF6cxXwg2mj5NPdj3LBEo1WPzViAMCLQ4Dqto3iqv667bvWdtkKUDVaSFohnZxC",
  "key13": "2qNguWzZaQx2VfNvwLcCKFsQvckcjsnA9aQvyGbzGr3idoQsF7CwF8JZBz3UdciYHHKZXwjphgD358HtfecCuPDH",
  "key14": "BExVkaF6LjTRUKT3ypTwcwCpbuxAEc3BHVe3sv3BhF7ofHwh1fhR21h2wiZ3jkZihyXHiikiDN4KwmHqYWXrQdN",
  "key15": "5cGzjuX3Gep9HE3KRZeeFraCx68zwhGwKfi4uJNhacDAJymiFXFLzcfT8DCU6YiiS1Q5uwWqwMpRnR4KGtfsD33T",
  "key16": "35xK3nEQ3bhpZ4WKavgGL2HN2HEYpxaEV83ke7V6khxRqCpsVjYJp3fMQVeQoX1jUDsktcKJj5a38PtJ3z9Ao7cY",
  "key17": "pZybsA762YDdynY5KDgFEFQzhmvDNh6icSwnzk4hsqq7MbeQuuQJ4WoebUA5b4yCH8JjCRvh7vCdehfx67yRz6o",
  "key18": "3coaMbpSs9ocutKdjFG3z6oLg2BKMwQNCLcGeh1S43o3erEXz7er4EW6xrP5kXYe1gH3GmUtx9aGtjNbCX8WWRay",
  "key19": "4CnvEvgr71AgJQkeYr136rMP6ScXyrrXiYquaLyWMBgnpStq8EU8eN1SZz4Dvk8vrQttdNpUwFujRngvDLXQs1mb",
  "key20": "uUnuvLY9kFKZHzJSZrk6BK7etiTwSZbZVMoKJrdexnNawbNhyhXxhYgS2AaHtEGeJxKySuQjJdEwLBDcRzPtazN",
  "key21": "5FTEw8QxpkkwCwx8Ua7t8rE6ALsxzzFpQBpR9iMTV5gkqL4j3FJH4s6ANqbxqRwGFgGr2VXpCBeoWQM1XAAHUAHn",
  "key22": "286f65QnFedz5vQ1jucTkPMhP8FBRM7VN92VsrEipBfm4my2AD4N97FAhZELBp5WyWSoPPMBcXPeEuPEaMkYZmbV",
  "key23": "4VVxNipbP8WdSACFfdcFYQnmnUSwzGvbqzEiQxfsM3uNDMUcY9aLG4q8cgDz7mAfsDqKs6fMSu5hn6QQ2zrrphpg",
  "key24": "2MXdKaREUVGTYSbE7jFubZ9PC9nEov9RnKKTikVSAQrCE1uH6qVxfK49m5toeykfozmXZhvVopDe1beKBSG6HcNC",
  "key25": "2YDeaNnDruoZX62hKKtRaG2kHy2ETzaizZLWGqSfwdwFj72DiEcsWZUQZ7niaGBtUWfFxiTjNPuSutKaD4RRgq56",
  "key26": "5m9HLbaPiySSUHrstWbqdzjZJDdGbYZ5qNY37QtWtxnCLF19zJNZqUz347RwERMDcBG2FCoVW3vuv2ynvEa1AhSa",
  "key27": "2p1W4QBswbGgqQCKMjdmrK3iSc3jkWL8Q7v637QkHyxmkkrYKe9iEgAJkPbRPmF4qfnDeYVmgYgCwRv2L16on88r",
  "key28": "4p6HvDXZTyReaS7Y3k7FtcZ73zshSM6YD198Mo3gAMrb4go6JASpiPVMRLXXXZ3nezBX8xSEuweBW3kgjn97N6qo",
  "key29": "2WmBUoRreVb8f9ow7YepGvo2cFtkiDdbyjBM6DbRCUBBWvV22jijDBz4e9qhXmsU2z4i44vqGDCWAnddvFmg6nXJ",
  "key30": "5m7VJh1fU9psNXRu377yLFYHcbZ3Wj9D9ToKPHTEit3udPM89buzRDnGr9AK4bnPnfRGqBbUcsYzutS1DH2goE5j",
  "key31": "4YV48Yfd6imb1Th9TzgBtz6iohCSYRFtxt6tjmg7vD7wRsju5PSuJSEZm54Y2Ks4K1qsNkUkNpZ8dmycGboarVuH",
  "key32": "RJk7GPhPo5JEvazaJj9JMpnhgLzqLXRHrd4GaWuwhzD7tsd63Qzb6Z1vHCuq6cvTU9hED2WqQjD3ggKPyeiGk3R",
  "key33": "21xTYVbvrrFaa1ZaHWBuenS32vfVL8MuYLErtPtJKzAQsN1R5tcLBiFnLVqpXE3fjaZPHhWibeBUank8WdHwuYyL",
  "key34": "2Jyc65g9rqzx5Ra4q9tMdBzYKNm3RPUMqEdMNCtFXBfYk27UBDTkNamh2XD4J9QyuNbvFaGENhpDjGbCYvMFvVap",
  "key35": "2xnTYVmioV2n2CykfaqDD97uw2HrNxQYBwwwrVdFreyUPgt8wFMQ7N8rHSXgGJJ1CjVJqkyCwCuEMN64be2wZ8M2",
  "key36": "5CRd5TNATh2fhmUKy7am1CKa9wpKXiZeGzA5pYA4xi4Xi4MjZ3eeGmNGfFnETghpYDuFLY3PfKAe5iHjfzNQ8o12",
  "key37": "2TMKEpYxcdtFQTzYqf6p1HboYCr3nEECgm4fYUX5prLq7UrbZmiFUsDMPGQKU15WPtEY2yzSTktSkTjhA4oXEgkM",
  "key38": "5GPwm313u7E8wLj8tUphaDpoKtBQQmMdBoafkgqBY2hcwFnrfLXoyTZhtqzrnG856TA5EoZMxz9xq216hhRW3rsf",
  "key39": "2ur63xJb7jqES7Qc98J9mSBj4DisErwFK9tVZHE4u7gtrNVGf4EgqQbXWc6SPxGBszYAkDCMo3ykg8egNUpA7gRi",
  "key40": "aZBiKf83VrgGGjBfTJSAEQ8TPgse8TjyWEQ2owKxSc5z2N4eLaFTjFPoVfD557MrBUuQQ19nDZEXLeLLozHyNNh",
  "key41": "2eVYxUhR2GQECxfjtJKYjSLmxkbuPfkKmCRbzAie4qTwci32gAm2NNK8B5ThBk46PozfPM6Gd1SSSNdRBGnpzqEq",
  "key42": "3MEqaf5NDXPBk9zeyjgsXBmPSZfMSnfWZbaCySxptzjrgyfaisXYzrTiiwZaCAywZPWWY7Sn8tHDw8QK89vwpEc8",
  "key43": "HUuJ1o4fpEzFehmCqgp93855PcV7KQHSanjqfRGzU9iALQabykfaSZiAUPpN6k9zVk9kNSum9WHpYnA2uoVYmhC"
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
