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
    "5TMLUVn7m3YVThxAE3aAdKLAiRxRPhjqK1nARTbW6F3ptGtn9HyEHq3cky9akqNXUCMetK4v3ggrr4EndoLR7deJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VJW5LCDkk8VJG8oNpSzsoX6KpnaH8Wr7jYPzittHsVgduseqkf2xvgk2fBAutGjzj4Ra6zYWVnPvQfAEWCUmPj",
  "key1": "5bEMP2caz93uUcH8oSUGrtR64rZkmWL3SC7UsoKuihJq7mQT8V7GcA3pyBsDdcL4rjzUCjo6WvgAt8yqzZVwoLzj",
  "key2": "3V4MtArzXShU57T33K3N3Pj3P79uUqLkL1as4jynjX4fchr1R4xD2DriTGdwnDgaEgZCHGADEzpwNYP8LbiueEqd",
  "key3": "5TEgvuk5ujc1EzidrEVfVi3fVkTGearEFMxNEs29PB3Cuhu7PbdcRmw1cg1gJstTGtHtTVJxW6ZLrZPTETQtEqaj",
  "key4": "3HLKPLqHGHdBfVZiGqambpXkvpYtLfnxpfXMBoP7M85pS7GCjFEGRC6qLK2bVgqEnvTycGJ3ZwQ2HBoBr5LENRz6",
  "key5": "WRPLUk4iDTdTMffRheqgQc8KTTNKFQPBQR9oQ84t8vHovWumEayjWJQZrtqyp8FqJfvCcZPdzFFB2uJN9ZCZrmi",
  "key6": "2RnH8GbpwhwKGnXrcewnkdJGq12CNKFQH6jchggmCdCktGra6nwvW6eVDHUSaoqRNdmNPoUAyikjgiXN6vT87C56",
  "key7": "4tZBwjgVhc7rLd2ihBv7duUNAuDRACWCx9W1z55s6NkkjS5NgiRSmUWJ2JMKFHKvkJA9dC8ZJKKjnbkqLms5Henm",
  "key8": "4A4GFcCQKTHB39s7RvKiih8y4kJ8tk3WESBpJnQ5K11eBn1itkYGGZdmpvjTkesfp7k6jp31JrfZEMPRro44TE4a",
  "key9": "372RYj5HqS8LnSetnjWXoYJUuDfLwH17tNynEBvTqmvzzNmZrcRaagopAwroHkTPB7fAzHXVhMqUSZ3feQKaHWbM",
  "key10": "481A4xBUUC3Z6hzYJ15HFGtun1ZQM5cDJCedSoUkRh8ftAVQMyvaM6Pprdh7cAQwSvPXDEWX37X4veAND1C6GYtq",
  "key11": "4posaNAxtowFiv44bDApoh2EDK3qJbpV8WXgzV96Xr2y8odL4wUb2spFRdDQ5PacKrCCTEZwV6WHviUSkN8RBCrj",
  "key12": "LE9MW6ZyWbqLjtAnQzCCPFnrejpU1JiQm68QRq2kYGJwtjqZt4YqPtuLf5uf3KjHu6wHMHQmYe4XD4X24usWSSZ",
  "key13": "mTN3kNrhSQdrF93PYtqYGjyZJh4L8Ff2EXdDDo1eBS6hbJsnzMXZJJ4o52FfcdfdNAq9BfwoohsSSVBSw51RJTW",
  "key14": "2TjuvkZtyDZY1Vi91vYESYRcG5YFMCAFkrbt5bvEXyMWxDATByWDzhYokg4p7BgtjF9D4wpUAEfZXna6136bfBYe",
  "key15": "42bCmQuYTuCBdxbE9diosk27CC9ExDJV3ML4YhiyhbrNtmPEdphpEKmLRP9EgtNzXpdYUQUSY6DdttZ6vDnu5FT2",
  "key16": "4DtoPsMCfFkfqKMb7BrWhawdtZ4nZFLYoXmLGxvmyC3J4FoMF5TjQRa4Uozt2HspBXdgaMzQhYx1HCsbRsjty8TV",
  "key17": "2dX2zd2Mjrf7M1jNYH7TgnGLKuvqhixncthpnDnxUz2y2n1Qs7yWJLR6oybb43YKCqSWCuCtFiShTQntzxpNdmPk",
  "key18": "5EeNWA5v5LfJzoQVddAt2EmsBnjS1xu1cDgs6h6tUhLMZFG5LETu1HapzoMjmVN1qdrkuLCuKJQVZs6idE9TWSD",
  "key19": "52NWh1BWQa8zRyoC1e8Q3dNtRRuhA231kRkPg9Bt3sM5CdBPNSjnXMZuedgtpnAJhAN2oc52qoi23oovraXMSM8p",
  "key20": "4Hp6HMHs5T4paxr3wcS9MG9fWQRDeKHxXakZSb3DZkQpRg9eFrYu7zbRcRrmE9uYPzvdsyvc7PMBzDNcH6sUFbsT",
  "key21": "4pwjVr6g4Syg9GWZxi4fnw4axFGDkBNmLNcneDSgn6KqKFRqkZ3jX1NfmwLgMWUHkVzVhP4tHmVTDNZHS79eMrrx",
  "key22": "2CKP44Xfn3kTePodficiXDcNmE6epMB8Ntko2eP3vouUsWHjEp9TWqbmnu9xF4UNGCZKaGzVn9WTio2RJ2x5tBVi",
  "key23": "4hXDRztwyjN2q6ATWmDUH9nmWcde363vDKFRthxK75FTjXXc84RpZycy5neBTS4QCa8xiib6PWMSd2kSQ2QBofuV",
  "key24": "3Pe8aEqi6mqDnDLc1gNQS4dH8XQDSdF4hnnQAgsQ2imqdqvSHPF8TKYKG4FNVGgxrP6yw6dHVqbYkHt3ZNASH5cF",
  "key25": "4f9gFBqiMybinX1yPDJ8YYLJ4eVrTWJwbnTMqscTVwGsWjbxmAm29CCKSsJBqLBCrM6p1seVGvuSc1jmvQAZL769",
  "key26": "5cFrcexCsPVmL2u3bTUqxJFRkM6uSyrsDYvVEmM7rCwMsgLyMQWRX8LAawnT9z9tUNt5GEYuo8n8SmeGhH8KXUju",
  "key27": "pndGMPStE7jgqkXaYGnr5uALZWwiXML3HHJ8BxNF3Vu7vRb1eoS338LP6SP16wthtwRBuGWsEqJFEdQA6Jxsj5s",
  "key28": "kgAv6oqspnqGt5HPScuVrrEcXk8UqMbmj6iqxQCHg1PWDS73dswCjQSVNW4GpT88EQv36SXaBQU6ooEWRr5vzgj",
  "key29": "4S4xHFr7R4iD5MUQvdneKqzwRmyBdcPcpYyNS8ugZTjm3MWxKL3YRgJzS4eJPkPQHHb92BshJ9PB7iRb4cW9n5HF",
  "key30": "4czuoAYgaBCz48qTheENppExXPiyf2Zun7JQ8w9zpEbppaXa9znhCfzJWgre6x8MetguP7NRtxbedXxDBJojgAKh"
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
