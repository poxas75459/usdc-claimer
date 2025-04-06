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
    "2bcfzpAkxH1Z2MEbZezg29XKd6MNfx4LRf2hSvmrZHb6SQYTURSGw3WvnsshkefqK1co36cSTFVjRUksq8dfgxsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuP6w5Nmbvc7e6LBsBs4LUnbTuVkqNLmitWLXuhnKmZWXFfBsYiyr31MzHr8yQc5BY5xYiabJMTPfWSkw9rcvBe",
  "key1": "ANPPcaoLEMst2p2YPXqh3FzfKrewXRRgkZm4GjNhenjAdKgvgoBYhs8WMbPWKxWiJmtAeTDC431585WMeymKpsX",
  "key2": "3G4EqCUnULpvo91KY1JgUrdQuzbaC2dioN4Y11QRzVu87URpHsx3QodJbZ2ZGk6cEh4nv9HuLY5eiHsLFf8Sp96q",
  "key3": "4J1NwszpatEPV97WZZvWeLaHto5cp5pA6HtSdBtZzXqEHiuqpCmnvJ3FDqwY9GHbN1JYUBDmkG6afwqZJpBSbkKP",
  "key4": "4ZL4AyNBafgjH9Sfke4uGCRrEAh1YEdTL53zMFkWRSJDAV9fa3kADLU6JEgZXhCZnoYZxeF66Wuy53Frh19WBeZT",
  "key5": "2QBBwJTL57YvK61KaCgNMJMZTTco5BuDbzDQTZoNqn3MZMv6yCYPwiPfMf4qJy25wbRLmqkZq1weWRXmHZHCKE37",
  "key6": "4VirzBHTzUq7nrooZH2TyLrL13a8N5nCNYksjiVdmtL7Zzan4EnYXR8bBr59Q5UzB3t7s7gqFkeHdZm8gUFQBxjX",
  "key7": "cP9FzSMuA3zN1nvVuik4sMga22aRgL5r9vfo4qgFdZPgshQ69JBzSp3H11tgkGnLMTcEnvub4NtFWAt9xCpFvK9",
  "key8": "3sKWMJQfFzgrpP3m26xUhYgoxhcvhvqwNyJd5YWwNRFHTG5yveva9k4BgstvjDwpyysDq3Ckd28tP3wv4PnGSeNo",
  "key9": "p8abin4ewJecCrvFqdD4ScStJ6EYswgE9MbQwKWRTDqEu49PRxHqbSMRs9F6RRE7uG3Rj7NeEh7gD3pBidx9yDV",
  "key10": "249NXEfZCYPkTE5MpydwKu5QVwsRnaR53y2CasGAbnVSCgiDPD3YMGvjaFTCoL88CcQ7cN7kUfpLegsgm53ZShNv",
  "key11": "4ZyvKnvsaJhUcjFSQYVqwVkHPKGy96VL8oMpDQXDBYuBRi9qyjuxCcHA81YQdZ32HRHbB3Jd5xd9ZP1hitKgoQnZ",
  "key12": "2WDkCedqSFQYSEx43SMxZ9A3UmJVyCN5KTqLFGJwpEMZaF4yoRQkFiYXaEhTeYNsLvVmqdYZckPtWynD6PZ4utFu",
  "key13": "5mGcmCgbzaDbQtpmNmc61YzyijTUkfUe6heDgRLtYcmReu1YEKMrExqxYJynjyEAP4eAjZ2tu8aVRztxganpiwea",
  "key14": "YSXXQFpfrPHvVWJxE5XC7yU23otA6g6tjr3r9QtcVJEgkFenMgZDY3UBnEQXUvg3ZKnUzsHbnCfA8W9CYg9zCPE",
  "key15": "3TuRCN3pqLs4WujWmzeiqe9735yqiytyJyfZqtdJ9jt9wUFDS5wg4dG1Ayuy719DqdXDZXc4sWQzGQXnpdEjs723",
  "key16": "35pjcuDih3CfqCXskfiLmWiVhydU5q1w3tdYghaiwtm5MqFY7vKeAxMUDP8CajgFR6kczxTtEAev94bYEnA8Yu6L",
  "key17": "3HPQe8CD2XpD23GfW5Cnf7dkKB5sjYgJcFCsaP4cC8LGydBKsAetfmaUDrhafJBVBxmvKk7tBLjmVLNyT94kEoxK",
  "key18": "5ynWT47ARbCPJBYBdgK6TKsJjP1q3HfWEy8Qt44A7mQUWkywmLKs5pSqb8GuPubgH4yVPK8FHLS9M9hfeUPPfaYg",
  "key19": "2xoxW6Yy9Swq2SRxAN7vqgFauCb9YdjfNs9L6WpwGBotU7NnHzZWerkiiRSUE4w44c82BEMQa51E7RG1cJynA1Wu",
  "key20": "U1TVBF1usV1E1Bj2CZhKZnLV6KKCGfinRfWM67sJYwAZ25cRNmdNcMfjeGJjexHRk5EDo7mTAx3e6jZ9o5ig6rL",
  "key21": "4hC59AH1YY8XLKt4cGXet9BTWhSSVtV44x284cZKZAdcHDpozWF6d3etQf2dbfTQTc7vb84CBrDZs295U4VABTRQ",
  "key22": "5Rbr9C3tv6eDLsyKxPXHhJsbuihPSDBqfg5jGtoqKGKcLFdPomKECePZeP7QwY1xrmdYcqAzuCU8wV3VmaUa5a4X",
  "key23": "4fhnGvKh9gQ9Sfouz2rdN1Jce4dZ9Qep2nVHqUn839JG3ixe9VPkikuuDp2DjxyvzVpw1cesMxZhv2gJkYbQuKNn",
  "key24": "3GMAfrMqL33KGFETX12hs4mW857t8nr3FfsYLdpuqmdLeMysTXUWkLdnLSoiWf6C5141djX8RLmb75dhEoqGk7ht",
  "key25": "4AdPN2QdXxwaC5ANLc7caS3jm3b4v8kh1h1uVVcxmQNZjEWmgEKX9P9oUhhkvHdTyFcNrS25gMR9h9u3YSuHGuv6",
  "key26": "4p1SaS2YrTccpD8amLjvos1ZgVe6L8eZNu3CrJzHLNNY78F1iWR8VReYTju4fSU8Rt7L5v5ZbpixyiM5sKRQMtiV",
  "key27": "2Xw5MqAxP7hdNpscB45WyCwjSDGexc5RJzduxrY8juupxfDCGmtc8FsWee1mj4HoSAZgfn2Wf15VqSnYMmyZd62K"
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
