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
    "b8NoRpjMjmcQEUwu31eub4KDTgGSUj4RRf3AHB3QhqsobgjujwQaFBonYzgyeiamyC6UgDoUMUCKi76ZZBcFFXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLwkJwt1eJhGrmxp1PEMf6K1198d6EGDJhUXKTjKGFTVvY27PVvPE5vGVwMxg9d2obG5GB98ZEFAaSfXXKDGcrs",
  "key1": "4LdsrwkhrtvBt2ymX3eDPyjpQw4Q5uV5VDRRhJaVpdRKwZ9nfyFPHBHmpV2UJmrw25miFgFwYQ3aPVoyo3GkeZC1",
  "key2": "3knJxfCbMDwUjtbe4Rs6TPi23PmRr5kmppXxZfeumCJ25W3AjCmn6SP73fYCmhZt3jQGe8AZB7jUf37UYyYQETyz",
  "key3": "3Yb426pmchcvjbsuxrsmxTC14on5hKt67rtWsrHSdtzhkss3iHNq87ffWNpzhRFBFUqST4syyrLrSxNAXFd5jyiS",
  "key4": "58r5n7aEEkMZUW3CKYvjG5ZoD9qoeqJ7n26BXDKxTfj16TzM12v3eUEzaWVWyGP6XE194hz2qpqspZZACNU7mTjs",
  "key5": "5TPx2wYjVfe7UJYvxWZp8wjP3k9HgPN6PWj3UAcN7uox3Vfnmge6zUiayB2ZUq1Q9tGjoyxzH5KaUvpkJ3ouAsUX",
  "key6": "4PXQrJMjyMSTVe9GMExzUzw2aRAG8ByP6UeoKYZMvc38qnmUoH2DXpweLisTaYVFEVNi6ZmNmHT12w1B1R9a2GZD",
  "key7": "2QuGNmg6jFGBBzqp9Ssi9RNjQavgnB4SD9b9mMCUnhHephsranHtBME73hX4joyLBLvJsXd3KaHGraNXbN9mDrpt",
  "key8": "5GnMkt53WPdEshVR7FqMq9gye81CDGbXkCLAwb5QAyVCragDUry7oWbUK8yAzL3Z4vpL6FGdCKnbgBEEKGkrddqi",
  "key9": "3MgsCaSDHLzGS9dufW2Pjxh6ZJKibp4HDhd4cdDxvBX9SUPf6VnEN2KHNbezR2sGkxaNzoT12Gy1vCg3CbJnXv8k",
  "key10": "AgvT3ZnJV6rYHPiJE8fdBQgbJ3PH16LWKsRX6XwUtUrn3t1axqrNFT79CUF2fHngWL2bffczCT3eMtVoJttAuQs",
  "key11": "4thdy3TabTFoovZACowWbN3yLPALnTfUZPek7f2Pyi4NkFr5uGZoDHASop6hD36n3xLMZbPDLtEunBaEgwowCet6",
  "key12": "5AuG7wkp1JXKhW6htJGot9CJBEPhBt25sRF41VYN6e4tbzRdgQWqGZ7vEep4XcFQeASKEnpzSc5vgtFVmvQWE26U",
  "key13": "2iGaLysFArXXgrgT2B4QuWU15EBR4kiTNs9cJP5tqzY4U2CjNtMgbp3uPGNoUevy6YaWMiX3LBn1Hni7TkGNUz17",
  "key14": "47q7xewz52x7B4dwxyEwQ7Apygm6VTmSTBvCB98Lfsdv894hXLqJPbwjCAyrUJTMbNFfo56SUZoi1ydcKe3aEMXs",
  "key15": "3UyLHS7LSFXyAyPS7L5Ho8ssru1JqirfMrsZ4XUkxjRac6fvGYgAn59AQewSFmXqbv5smvhY8noUAJfsFDpkvvEX",
  "key16": "TxJXrwttVjsKK9ZaVnrdkN8d1hP6E6zzn3t1yF7PFbquYw8ULJQWm72mxHUc9ameELSZtjjinY9wxdanuHwPmQE",
  "key17": "5cdsP6QT4JKpN1ioWvyAGSXRpPmhFffcpuEHY2BrTUJPzdzMhEYjPH1Hpw36QgqGXpHdr7F22AzWfzZdFhkqMG2b",
  "key18": "2fYKbdpEP6LZnHiPXiQuT6wBBy2EAXqbMWTB3ricLw5TxXnekJ32YEn3GrifGpFwDH44kf1proxshjGGDLiugc6e",
  "key19": "5VbzPSyF5dySbQkFPcK75i7o5AGoJrJPHJ9UcuTzC14s8b4KFdq5CtRCQNobyi1an3Fwy6gR9CKmsXML2kv7KgKb",
  "key20": "1HgBdPct2WzNP6ASf3nj3S1hcVwTcHShD5s2STr7Hy1E9w1HnW7qYnHSwiEWCU87DzVbjiNtVrUD7qyAh712aNs",
  "key21": "5pth67fgbQRun5qmKs2FsBtY9QrAjw8HK7K7KGYgDR4S6VZ8KR6RaV3w6ENxe5vSx2JavXw17EmmyKHTSk7NhEhy",
  "key22": "4F22742P2WV4hmMbKXzpexH4YrvKwCYUVyEKgzKcqV7V5dti4xSa5zJVDHPGUuL6JZuJqCPGnuxNMdiVpGiqGSC5",
  "key23": "5ydZyguXZqyQbkBFRenvnMEN45nRReNBDpqqNXRdWawUwzEhcvqA698So6xc7BPjkxSuACF3PTVvaAe1BeLpQpVh",
  "key24": "J1P2hsQzpPjvZ1AEvqtnHsKNzw3wryquZjUVuegdZZj3rddmX2fvGrKm3nz2XgQwhsrssVj8boz2uMPJKdTth8F",
  "key25": "M325dQD5NC8CzBmJBytverBnDf2aEkRG5friPMJ7CK7QBo3T4Aw7L1hGze8zN8fsBvf7UJxMonGMb96pNj8m6hP",
  "key26": "21g9ciojKhaTNPp6UvWkYfrahCNzy9ksRvv9NeTLh9AKWnHmSwmvxiMqWZoMAK8mwhAZWqoEwuNeMCHpHksq1BSL",
  "key27": "3FTcNFXYK6LRT3xaN9XXqh5aLLwVtZqWdosN8WaZt3FchgkFxzAPpWUZrJibcQqAciG53nqZYagZqcvWkLByBqny",
  "key28": "2fjw5PND4BE5fcYRw4zA99rcQZV9azc3QxKfs7kJFjVxqJSLunQkE7DpiXEaRgYihTcpMcpU5n7eZWnYY5iZEhgW",
  "key29": "3ZUMM1ASkcZnbDEbmQ6hLKB1hxfTw5XD5HD4NSziEYTBuFq4G2sZXvh51fR8mQmoEvYJsZ23abWwVWKmewYtHSRE",
  "key30": "2eFoAax4PsPXeGRRxQWPYXYVVNLbgPdfjWqdAVcGAN2iRfde5WXdT2afFFzCxfjJyM7jF5yPBZi66Ud4giByeMRr",
  "key31": "51RHER4V2UQXJQBzomF3s6sV7jQeYFaLqw9h4NbJU3PL9mX8mN2XtthYNoUXHTJeAHXCmdQuPjNdsCPnQkqQnoju",
  "key32": "3aMfHWdCEJaScSiaoBDUsFxHr1jXhSUSxT6GDrJLUULQMdg56eWERTyFDPmMYPUZQwWbnbi7K1WkqynghXFLWe2B",
  "key33": "9em5ASG6NiBagJatrqKdtS7vjNWoYhi2RtkYNHDFWcgsJHdQsqe8huEaGX1WKrEKV24yoc61D3b6vx8Whj4D2iW",
  "key34": "52uDTA9EkEqwKrJzfEEDuQQF7sA9XzBW7enuxtn2msmMrBAewrMmbTaosMJhsQ8spQq6h4v69u79iARhVWGoAa4X",
  "key35": "5jDF8B54TGXHZsqjtE2NUn4uSKRJr1kWcQMinGcrbdtCJ3gJuvKrRypLTQxPa2M2twcwoqTV6nwL7wGuqNr6fBTF",
  "key36": "2gSr5avXjR7hsMc61gvkJYCo8GFUjiBccq13eAKcBD2fUPDkQYxXtNU3d9rYRE3RaDe7SW1XcefWu5WHiN8n9Rpy",
  "key37": "5hJthWechohTa3QNsNkLPssGg4PtDZm7Zebwk1eAtBcaHD1fVu7e542hj51SaSU7NaCa4gzbMnz8MSbSZYpmCjf1",
  "key38": "5JPTBP2YcnmkANb5AEKouHNQHqWg3YkTTeVZUX2hYmaxs8fsXSEuMQwhPwQL3M36LxtWTQgnMCVdZKoEs9CX5k5e"
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
