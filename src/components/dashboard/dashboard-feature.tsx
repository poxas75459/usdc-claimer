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
    "5AjL4TtbBeSi6hYFVbTU8iaYDSbKmEmecucoz6daZ9Ydym33i9ybBNDTqax5esu9L2wygJka4zdh9xq17DKcBaZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYf8mzFVPTxe95rJT4EU37Ua7fDmwYnSkqe4Q1uyQhJ8S43xBaF1o3P4psx5Faa9hbNi3q1UPKB4zPGhGG3PHJz",
  "key1": "2sqDGHojDkwTEAgpTQKyfrsPsMMCg8TtAXP4UDg6qV9PbADRFDw5Na4XemZ21ZKLw7yMLHNaBiagZNM71tQjaara",
  "key2": "efhvFntcb2u6whucTKj4QMvmEcqiBrjnAGfigi7SRn6aribt2cATj8HczSBYmfo51fAyYSvaADMNe2fnmVc3yTx",
  "key3": "2xr3jooKfBSmnvbMAnWJz4MqT1J5EmJdaUrXmPCt52zgDvjBWc9GAmT4sMPNSB4UQeqLZ1ZZdtLCT5G3zi65eXwZ",
  "key4": "521hFgEKqNHzmrxkJneEskGb8XbY16YL3iQ2e6qwC3smpxLvd7YSrjkxufU1payvPKVfj1h67wecB6hWcXP4ESiF",
  "key5": "3grFhr8ckYpgkPJWX44DgRnYiZMgQZajzLbVDh4dftUnhHuWVPvaJs8DmahKaQ8yHfwfCe1bdDti5jc5Vv4kTJ6L",
  "key6": "cPatLNmQkvV7VWbYU932GJPPLDDZJR6CzKtYLbmNBYsTFDAvmTR55hwJmLjdJKyEwudnnQcA7jqDPsqjsw8LaLa",
  "key7": "5fBvEvL7g6AE2AfYpumVb1qpzpEDhCYULLou5orMCzDhjJPbhE3yE5tMaKYHqNsbcZ2uoLWb64TEoyNmSZdgMxBK",
  "key8": "4eCBs9i5WRKqAuje9Wuve3DNeJRELw7cqJDu7UmkW3xEnNTdFUs8rZ3yQ8bmaP3apPLUyJzMjXbbSk16LADxQpmo",
  "key9": "5uw9ai7HG7ETnxT9VKg9oUmTYX3FFYwtVbYbmmsJ59AYFu2Hfen6p4aKNDWDCBMPNRmMhN4HBH1iEb6jRgibiCr9",
  "key10": "62qKqb32KFmtAJTPwcCFHMBcErqFTxzPVUMjKjms8By3qRzFWQ8g2ekxckF7nH8gtibRHLzSYikY6e6YhJSNMeoc",
  "key11": "5oQYmahShZGtTHpFTyq3JKpJb9j36nSDWPsUDyLr5MjK6PUuvd4wYY322N32r2rrebDugASss3Xm42fYWhFor5MH",
  "key12": "iad795Fvt2y5d16nPgeHKn3VQUcc9xFHY9LcS9JNeFw9FCgkDDUrENoSzrqr4sB8LQtfc5EHzRRGi4nvjjEfz37",
  "key13": "63j9noqkdHmjxKRSKGhZRhAy2CGuo5muc6M2D8CMrmTjNYn6JjzE4zjfEEC9Vjec5ysEqAsnEiaJMYFK8RBX4qqc",
  "key14": "5NZnadb9nZatWDRhWLqXtz7tzq3HAh4ojHJQeK2B7BK9CzaooXPh6mS5zXBwxRt4TWWMKpftR5exZCkcVURhsuia",
  "key15": "4oLW5hCMCJz5kEgaB7U7eMsvjEWjRcxR8uYk41gvZjyqGZLv6NxwQNR4GP5gk27ifG5zVZXjbGB2bsQe9YqYWR41",
  "key16": "3CXCdaF53HPvqJgxsWkWRxHPEJkbrUSURh4dsgPkpQA85akZWXTnURqhN88aASFfNFxjwM9DXchf6S4QAv1DTN66",
  "key17": "3mWWJRbaXJC2GuRTUY9QGAFVg8gVnJmPnvKt2s9ZUR3bY3i3Z14AosU2RaUn2cGZ4NHMtAq6QMonr16Xk5tBXR39",
  "key18": "5DdQwEcmptrWDfBinWk5sYeV4meQZ9me4fzA4XAZiTME91z6UG5rdbfzKaRC9neTQEQN9etdTBwDefPr4mMUEPSd",
  "key19": "521QnXfvNasN9JixtxgCieHuqUVjwW5BMTC7dHithquxxT7S2wBK8Qht93LqzW82Rzgo85xmY41du7sT7CFY7xP8",
  "key20": "55MYgrrmq3qgToxbjVX4FWSKhKwNfXpdrcEdLiPSGsXgmih379Sf96hvpYnF1VndVSqh3i5vTrokJmWE16XE3zX5",
  "key21": "4wmyf9diuRVxJsotyvanEecCU9Km5ZWy2mCkBVtV6bATZ1LzXsVZKSYmWKo6JN8ETnvmA4GaPXtjz4N9FNcZ8uv2",
  "key22": "4GX4EnH6NHMikrJazPreSvFiYuVzyhyNbhgEXBzwa91fsDXbjf8SuiwNe4J8RaWbXThFGxaJ3uKK6WUFBy9LW1b5",
  "key23": "4hNYCNCw8Q5cVJEsNnh3PECGdKioHexcAAmEUGgtc42f57Lm9xV2DzuYy2svJvodbTAtNC3pgZmucjzNnZjiUZWb",
  "key24": "3bP9J9TFg6fQiGyFgBYvoTKRMZefvScfs1GwwSzCwJk1rm3FkbC6gwjYGQNzHmstRaBvMJQZm1Rg5HeaNAXuxm3U",
  "key25": "3iHzHfzVfcyTkJJptCvAnv7HTjwA5nD7dYkhUd8eV8vS9BmfxtnYCd1VTBTpHR2xsT7YkmnGRpc4PhNUG2QTc3q2",
  "key26": "5YRKxY6VVNa2vpt6vg46rsp4JQ5QPk1emUj8L33xjuuKunZCqyJN4ay6ZR6mKgq7CjYNmcdAc4sG7KbB3uumEFcf",
  "key27": "2pbKttH2u7K5MFu6V66YtbhUWvAptLKFf8GTmiGJBBDFWEv3qa2UALZVMp4aJKxYMUSQMaju96o92syoS3skuown",
  "key28": "r4nXHs9UNR4NETjBd1yPaNtvweUnZDUkwZXSWvK2NS7xk7Sor1jjAdHRrqJmpCKKpHo64JLnkRT6NEQTFTw8haj",
  "key29": "5xhE25yxqoUyvMdoKM7FgHZTFh2odHFMT96vPtEdHMrFgfQwnBV29tZP6QPTEHJzKa32BKyMqYJuThfwV2VhzzRF",
  "key30": "3CW6qy5HoiAMFFdiRD6wY86GV7mi7ft8iFfZYEkyP5c2tjMS6TtiE9eNZHvKWdwHCF5WhWEcd28gUvTnFzmFwWjc",
  "key31": "3uGoxQ2cP7yjKJ1zvJhDxWfJAEMjFiqwJfkEV7cwtiVHbnk6BxwbXEWqEqYCamAadX4g1WTPfRKx6NHZoursxwiE",
  "key32": "4zo8a6t2fT2bBcAWgXT2Jq56PzpysdPBUuMauU2MNAApNKMsN8s8ok32XqbfM7krhTWFqycSQ8BZKWDGYmqupzqV",
  "key33": "w4aCzvqfovjFT35c89bXA1sqfi7WkJegsZqMSZjjeH6UhDKeFYbLkhJJviaS7S5q2uMFjLfeAGD9HF8CZ9rJSiC",
  "key34": "2BX8nvBCWjVL16F8Y1VZrwCBbt5nxKNVNqi3gqrFY92rjN954qainap2QfVG4mp7DRtRphmjfKr1wQGJbDuNifKx",
  "key35": "4bGpz18Pukci7yHVe7huSVSNhMMx5yVcJB9vixqHk1VWtoHdT88WTmfeU7JSaRFwUVb5VTmFScspneULFuU37e2u",
  "key36": "543EkhGKrFjGYFaYtkmHVGJe8oBg3zvjkxYmmkNumPq3PX2rC4si1f7G5QuSZBFp6JovMAYwwwL8xVzQkc3BEyWc",
  "key37": "4bUrMiJK2J1n5Tz3RM5F8n8XVJfPoYsw8GBoic23gCTyf2H9mVFTmPZGSijVhmex4k7iEAZok3Box1UBVDwC6YDL",
  "key38": "7gPXHF4gwcoXaY3VmxE6U7fCYpGpU9Qg7wfb4g1bweWSB3owjPDQVxBCDMQ9ejyDR5uyRT6d7mV6jQgseGJtc25",
  "key39": "38hB26FahK3JJui8rj61hAvbznbW3LjpiSWmtLR428L7sRLsvoySVvN9WGSBRuRpzsKjfwihcshW5cXcvXRkUQLn",
  "key40": "5DPtRwX38nYmXjTWxPngZt4JxUD9RGU9yHyiz3sYFBsLsTPfCFEWEmctUBjPMuQFCxhSnY3Rrsp2StGzWyRF1wnz"
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
