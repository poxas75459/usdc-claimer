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
    "2AqkyG8zdUbzA5sF9AHT6d48KXPRZCDYVbrsDAX7vV7a99whPXxvYmQzk7Nt9NAKzFNpp9FofqKGLqxGm1T6ijMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kF1i7w81uwXBQiMBJyzus1idZJvRfi1vnJs7LgB71fWxiPVBQfcx1tvgbixBoFS2fY8jhq3jRESfKQGusmXqmJP",
  "key1": "4tTDQTYPyUf2mwuDCFSiyi3KwM8LKNKSu56JH89hDFTWE2HnMqhTYje49RTysQfwzB58VtMUKH48SMpJwsZAL8aR",
  "key2": "2QrgMSsMpaH7bU8pEb4QCNXTx4fS58KTyZG9obFn4AVa8wWL9FhPu2BCs1TQFz1To8VFs4Yr65tQVfwM7yucLApA",
  "key3": "2Zq5CD4qxoteNmkSe8ZUDtPohap1juiSicNwhT49hkcAcgsgq5Qm7u5hNeixvZkUnoF4fviKSi4E2mKE3kmkZskP",
  "key4": "57CagivsfKQGEGbK3ndNhcs8MD7VUU3XPNF2vmqPEfyY3ogBdaRmRzSGjX3Y8EjF7CWWudRuYZncm7PU9BBasScv",
  "key5": "48BpEfNDYVwsmq1sCt28TB3shagMEiPs6ctAM2jt3nCavLbn5UQLRMVs6QbCBwTFSjFFT6Zg1XUFgUcGqwN8TGcF",
  "key6": "4jbhHJzxoKJJtNnu5Q5DZxeV9kZRmRWQ312wDKCKB9YFqtUXgQD515NTa1Kgen9gZ4P4QTx4vrAM41wVu8XBMHBL",
  "key7": "2F1FUcqKfBmyYtXBNyZ8YcmGx7Tva6dcZSTG6V72U831Rj4aCBVvTwSMvDfZufT1yB2TwcVTi3R8CXc6XmvDhySA",
  "key8": "4diLgjhgdZxLoaYWPzaMG5h2kVVvgRDbxux4G3rZDok6pz5C5ToW9xhsSTn5WtnYTPbZYPYW8BuTAYt41hgBUchR",
  "key9": "4V6op9Es7Txq4bWPAyywdnFSETfM6PhFke1Ck898bgD5heA3MyrRN7CfkQiAF3hCF3bTn1WHnMqBh6Yuujkm2tnx",
  "key10": "24VHg8w1M5ZbVxbLmCkZgbcUWuC9SkqobiqDEeftsY5HEqB2149jMqfXpRmgcjgavZLBm8n9wG6eNYf24NoJvths",
  "key11": "5pxDTy7ftAckp7ehjMocUJKDvHTbFhyKYDzvVj9TdAAGKm6JFupu2m9LCQ5Q9Kw59HHmQQYKvX1PU1bHY6gJFHAZ",
  "key12": "2y1nF2Ud29kq32Mh142Vr8GP3tBeGFWcnchac3waKU4AR2fJf3Tq4Hb3AadsVX4PgEfoJeBf1axVE72J23iG8MxR",
  "key13": "voR1a9fK94B7XED5G9dmChPeqSa5G9axEgtwuuqp3CRaQVbRwk8Fm795aYeFDgh8Mvm1hedzbM4W3rp2xhPaNQs",
  "key14": "2TRQQyLExhbYJsTxm34pWVoTKBa4edV4C6nc5TKuB1Rcaza4M6sz7fLMuD4HjkM2vt2TKKVQu6urhBRhBNDmjq9B",
  "key15": "2rGqfhkRnfCqzGtNo2aPxHarmeCWTuCQxzm9c62np4FW8eEG3WMqZMrRDng6BnCEcXtKP2fBRcDfUPJugn1Mg8bp",
  "key16": "3F8uLzUUEDDsWWaQdefSC1zCXkPUzkRPYXsh7nsgLe8S3snTxFnBRSP97Fnz7D9b1FftmH8vNBNK3hqGC3rGnLHs",
  "key17": "U7FEcc6vwZPQ5s28igGMuoQU5fwCm972ZhkEWpkNJ7LfFJ6ZoS8DeJGHa8VcZSYN9A1TXa3WgEL2dctFCSafuV4",
  "key18": "3ZrnSGtUbkxpYSzCLaqXdkNCo73peAeFwW5EfogiHAMRy9cRKdGbYRaA1QZ7VcyHixKu28KUgK5BU6jyEMYEGRTJ",
  "key19": "2VgCvzzzmQ7VfCcyiyGeK13QqfoN61XFCmq6vQPUfgr7TxfoVq2FwMtmNQHNtbaTscpHsh1ogsVMcgiAMXCZhTSE",
  "key20": "5iRsqAUmWrFZ7sr3CmE7SYkRWcfmyHJbfUDDnL3hyg8avkteuxGuneCjZghmxWJfmhoSqjrUwDtVhJ8y6mtKMEXm",
  "key21": "ysrniW4GBGoK2NrMRoJs8LEyQJ1CK3ixv1rHBi84ypBiLhGnAfsdB2TA2X1BTD5sruh2cQkXEEBni11LLtYCYGx",
  "key22": "259e7DvfZ4QrZBjiFKP2UttMhBikMN9YqN1nccD7ptX5YQNCrvEVCK52TTMm5oAg6ptYnoQbCwyVFSztBZufwEpr",
  "key23": "5y8rV9M8yJgoKJJNzrngJYTgNrcgH98aGVQSVH4xGPkKZDHcRLqQHvQzKD8H9dHAHJjvEpUDPh6Ha43E6Joen3TL",
  "key24": "5nJcTRwiUSXQWvZ1MS44RWokbJy3eB85FxAtVjhf9dDrtHnAKQtw6hXFujJbK4idbm77VyQKUbV2ZWmcuYE136mN",
  "key25": "njrtJr8MUvQPj8CLgzvYBnxVtfMRekivf8zhsFyk5q2nCmCTtMbkChTzAFAF48mvN6MuYA1hUzY8tmXirQ2gomD",
  "key26": "5HF6XCH6JjJvWz6UHnVdN1q1PQAeAUKzkizxPmGr4EDgLov1VG8PfUrvJomHZzFUnXkXnXBHppzd6Ha7J36i7yj"
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
