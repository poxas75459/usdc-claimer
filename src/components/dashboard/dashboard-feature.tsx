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
    "4c6Xm6MK3tqAU4s9wuXADD2qyXM4vVz6CVb8WZv4ZW6iLTur9Rf1prXbSyb6ZYgaKk5FxDHMefrwCYADEZLcYT1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1usrKbzbBXRczQD5fZKBtUFwCuydRD3cXV5c1CUX9EEL54shkM3DtexSimn6UWQE8vrPG7W2f58ckpRKPSKERb",
  "key1": "5oxow4JZK6Ls1ULZ6wwgByoujJDkr4W8mrFUpD4VeJBfGQe9VWUBGMcNH2asEEjEKrLKieb7jRBuYKcyvKk1VGkk",
  "key2": "5Hfhb7m9nsPR9VKwCj1e1YjaTianLFZ1yH2gTFiEVbh2EdDeAuJiqikfUbks8mBNqiAo6kih7UQKxnL2PCgwuN8k",
  "key3": "2Cnmjvg6c2Rxsv2MUoMaVSodS4sLz2mTBznJ581oV6Pwi8kLf65oA29qxRA1mU8krUocmLhbqFwKSoW7kdG1Tf8R",
  "key4": "5iwR4H9YGsJDw1mRRE57BfBRdfFHsn5kWpeHiN6TP3RRd1PEHyyghKmJ6rRdXsggCyDntHyDSmvzDaaBaHfcq1gX",
  "key5": "qazQsAKkquKoN5gTJDBBiFBTngCCHJ2F1FuAvjcaNTe1sPwzCeHeHohjEnkMV8tQgWcFbcUqhfV6gtbJX1ESB2v",
  "key6": "GrWzATNhBUbEvhrx6t27pWEJyEdZeKLgrMZ8TjkfP4vKZVYsqFpqxHRQXEHhEUpAC3582LzTDZoyHSA2LECTyyj",
  "key7": "3iEZhhQrtu1vvCy7EMotzbQpE5CX5me5tXmfk79LQpc93SWD8f3aa3zVbvKwwLSzWr2Wm3N8ywQCjAJR4SW7vtCr",
  "key8": "ngpcfLiZqoqtaWp8dmTC5ZnXchxGwWc68J886TyDaEHUfqgCrfqRjBudwUzUdjiRwdCAU3FNqTFknBZdPr6itnN",
  "key9": "46FZKTFcdiZNPyVbRPJ9S1GV2fj2F66LsAyjgrzCAqidSKX1QULTnWykwNZxZYgiH7tdGrrFnSmDKyj1zBZqtFG1",
  "key10": "Kh3TdBfnjDkrj4VYtMroGYkUrtucZGz1z7UVe1GtD4TyWMo6mM1E3o6W1iof1qAJE7wm49GBwQjjdcGi9GRgEiH",
  "key11": "25fyg4HJ1Ed1N8UMTr3HLgFS2ReTaon32rEpQVF4uta6ei7YqTGF6QnHVkZU9gmTfSku5roDRTLh748sUooV7hr8",
  "key12": "27fHTgoKjesPPrnvWBjYBknJq2cPxfMRp44TTkqCP59qzdjELXjqS76N1f1eZscYCfJuouEMCJ8zF4xNdFaKpLL4",
  "key13": "5z5TfyK1vsqm5XPkqG8NLCfnzz5o9qrY2Tz5NRenZZXTqaXRxmjcs6UbCVd4kpoAFoKAtJGQyDxxxgy6bSMYzk1H",
  "key14": "5cTQudFAuLxdcWKxsieKkq6XUFnoKVGzjWWSXMLk8ukNg4AvpDrQE8q6ynduC9r1gaC4XmNTcQpuvaGeEe9dMrXK",
  "key15": "2LC6mFwQ2vpeq9oEi2FFaqfKPk4jeew3PNV31yKcngyebxatzfME3uNfYTgGq8EZwMWSnfZKkpex7hMYte9msNir",
  "key16": "2yzGxZZi1mB2guAAFrCMF3N1Gxo8yLQTe2TQ4Q4JdjZDLvd75Af5gRa8bFbuzNb84XcwFNaMPy3BNGLaAt8iUMUJ",
  "key17": "VgwPGsHZJRogXAVt27zQfm4v8FDCYwG4ymNSJGmahAMcyiJne6PdAzTuDE8ZXjWXvUP2PdRnNCWg3irRCeUU8o5",
  "key18": "2mudajFBgh2XCWwAjB8ULbx16zA3mX4Lh1AaTXMgB9XQhht5DMniW3D7aLPzVKBcnK7DV8zyicPbfhw68Wd74uND",
  "key19": "5kdt3vg4tpMmkGUPNtp2g9DE3ryZ9HSXL8e4FNYDbH4vwedS9M5qdBZSBbP3W14zaLbzfsJEryJNsQmDm1i5rzZt",
  "key20": "2oqihSP18da4SRX6FH8nEpiL6ReDvxfppWZYERcGU1818tMxEfdifJUq5pqNxtB8vHtuqiVCfeVdmmFdzvjVp7s5",
  "key21": "2SmZ79XjbRiAm36ZgKFE6ovtZDqZLDNhWSmiNtbCy9WFCF5eS2VsmptiETwhmvxm36aFUWPBjDVCzewnE5b8ysMZ",
  "key22": "33w23WFoWrpcgdZCCWggG2yKQJba3ZErVRia9aAj6A8YwLMZTWUAdvStaGw7EH1aYURngEDMQP6s6HzxNDwdTrDk",
  "key23": "4NRisbkRXietmNH78C9dLxptSC7dwW6UPsgHJBfftwAPE8GPBxmGixBa6pN6QdqJfVP7hpK7DjqHVg1UDudu9nb9",
  "key24": "GctduWXpBJk48zpguKEzezeNfGn92rZq5Mp9H6d4k2KZ364v6a2w5AeWYVh2PJCdRcTJQkFaPS9ptgtnKenz3QA",
  "key25": "3s5p9ctvRqYLfMfQ5rV7N4MA5NWPSfSxSPGeBwFqrtQbsBBdWi5KzyzqwrsLKdmBmRt6esDuQJRthA1hxur82Qkb",
  "key26": "q55oYTwjiZJd2h7kk1R24KyLLAn3MEr5nzM4fZJ1hQu269iZotmzT4e93v28sM8RjnEw5fo7gUvmYuiNiPEKPyG",
  "key27": "4gLCUNMDjT15hWau84Wk3LmCB1FwRUF5wNo3v8RTeGGVmLugkbtXthRXTutX9VTYGPFZ4u6pp1kUibEuuDZ1VxSj",
  "key28": "3E72Yzt5t8arz2B3oMNEkRjg2htPSQJnyPq8cA32eLTQuyeFFTvy4Y9gKk2qqKagDzD6CmY4d3bzmqgFH7UrGp5c",
  "key29": "331HQq518h2YQnSwy49x4vXhtGEpfhVQvCcmebsBZuMX2UbdEnboxcRzS42rHLwmoyS59ARmzfnqURko9sKQhTHj",
  "key30": "4qZK5DWB6qmjVajNqoUUmGVc1secq5DUygJ1acH9SG5JKgCY9nZURjmrY5UE56QxTrk3BmwxWRxQBPuxuPxZboE5",
  "key31": "3MSZmcDzkGwwDhwhe4Q6MYty4MQnsaGbdvk4HBuAkpkEkbtSmfZm3uwCJJp3sWifoQPjoQmVP4p3e81H953HE6CH"
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
