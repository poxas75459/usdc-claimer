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
    "44biSjMTE6MQikqyrHv9sYJWWmVkgYHSc2sF1Go8gYJAqD945JywoJju7Mwdt3bFAsX6DLfjmcf9VWggeN6LLoiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCkQ2c8MK8zR7GX2c4f6u4k8RruFhGGkwv5kZW4RUb8S6dqtsnFm3is4f3PFyw9a1mboc4yWMr8LDdn8kSAsNL4",
  "key1": "3DFBFLeyegdjWi4C5TweR24aXMYr5ffycpVqfcfcVtuaauxXnpzaUAT3RVEQJ8AQyiJZrbB5wzddmLfKoLndxZwv",
  "key2": "2LYeiLLpE65FPqgUCh1MiatY77QSid8xCgowySnxLJjVueB7qnHnP1mA9Hscm1cgriBq4Fac87qK8G6B4tYr6C5t",
  "key3": "vaC8mCeKq9gww9DkvWLj23Sb7xGXJ6ZwHfayD9SWwh51USCxVY2x13QXCuBtNtTn6jwsYz5dNyCBKkfLeEr1KZD",
  "key4": "5CYeZwigKzzob4ZeUQw5dkRWCfWhQYN5vMPpmi5C3L9d2Q6dzheyyJaCrEQDGozghpgg7qLmeJ9oKB5MXRM7CWEa",
  "key5": "aNeaVLiBASkbNmXTkQxBqyfiL6v56i3UA1Jp2KijqxAioorq3xncRKhkJBp2MovyYMTn8NtruYVss3HPSjyuk6h",
  "key6": "5b6axwKkDJiDsoShCfVi8ntD72RABf1QkX8MbBYmvCoUhyE4oxyzCiMrhEinrpFrp6Fygabtgxt2KLCwcRbiNMpY",
  "key7": "47kmoZ2U9v7sdynBRiLBEamYQnZTkKjLgDcrmxUDAAUWou4m7r2wy3XuD1dwGATawyX217fregcPZ575WwEMh6Ls",
  "key8": "5hthQT1tPebSCXq9h4miyvMyekEbEdDmezMLoHc7K9p29fT8FYtj7EXkNj2b1cBoByeTQifgzwMskP3K8fBh5rQK",
  "key9": "3i9LZ8Na8V6L7DN4Yk7kbx5qCR7y7Dg9gsTQokGmsFZJVDMPiKeNZM8SouTEXHxHa6QhkeXENJf2mxDM8iP7CRtk",
  "key10": "5XoEZuSiVNwVdw8PAys5yutioFBnXNWrZ9gE9mSPDUVJbhLJ2bQBYtJm2nFhshVfHspVN9QTW13x7tXwbMtsqhSw",
  "key11": "JMDmoFx3sFaC68FXV94SZaz5dWUs7bSs2UF1Roxr4n3ofMkVeJAxsaMMq8VbFezSnDcQcGYncs54S2ifLErcwNe",
  "key12": "5CHj5Qgpvu2uf68EPFLpsGovwxEn2GtFgyMyLxdktSbgmSUfCpkf1CeJ5jD4Du9t67gdNGQUhFSSgPgZZEVUyr6C",
  "key13": "4H9AP3Z36cbrgWEkNQbDXKLtGtNBEsw5JBiq8zJgKzCn1k5cEQNwjWJHRWkJZnXKFMK728L9vdviGuiGTywpfK4D",
  "key14": "xRfCLktyqXk7iPPLkSnQdMuaHQye3DYz1jjsaeBQHkyTnZzDixQ5TNVah8LJ8SdnqZ3oxmZRNdM4AXXRpaaDdMD",
  "key15": "4myV2WK1pUZkVbUd6SfMq7TkuhVU9JjWgHphg9zL7XZPXYX2Y4i6nomgdPgw69xi6apZ5eKvqWUU6DULWogW4Kt3",
  "key16": "4ogbRexJaY8YgTHgstm4sPmd5PanXdmbMqVLds8yREj6CRTMTtVL1sLeZHoh56g3wQbZXAEKVZu1EuJ8ESMu5Toy",
  "key17": "48aVLYZRNV65ULPUY5UFkj1c523Urxr6oMhnuyoDKH48jLvj4SsLUgqKXyKVjvweZbywpEaM4z1VVCG8Whf7PzXZ",
  "key18": "2ZbTr1gSAWrjXV1PAzhtVtMkX7gMkCGsuPKoRPSVbtz6mVYMo35CHHnff7j9gJqgFaGziwuFsJc4Mhv5BkFSMUAC",
  "key19": "3JtAodYFieTkJ3siQYDGC3xQMELgoNPLyzcH6hoaBaeiHiQKrCQCCHsDU6Q5J6v7xUNJj5yxQ6gDQR2H9LyMFBhd",
  "key20": "3kzuN2rvs7ZHTx255A7N5xGwKZGNB71f2wAyoNLRRnAdcKKcr9vSVjuZfJq1KwuuW3SdE2ov9A46PE6XfAEmrkyw",
  "key21": "8GwoDWo9pZWnoEgvWG4ZHVqz1RsxbVrYXJMU95qubcrU2WuD7xGYetRRB8QbHmvdPGJvLpS5U3jnePz5U6jZyRF",
  "key22": "3i9ezJtwuJggNnGxeJDzTsEQxqYiX9c1g81HHvLeJrifHS1QwaF5xU6ZDweGLRaC7JLW1kGe1NEVFrRXHGJE73an",
  "key23": "5YLDq7HNuFUi7syLDU3TqiMNzfzksi8FJVp2EDX39EVYFMfCUDQ4sC7CQKbiX75rvqtUKmLkiZjBWoDS9R2cesdT",
  "key24": "3CPTn6FF7nYZMXMLjv1aSF4iQaiDmH9XLNktJuTTXkWgdzdbS4pY1rVY3S46rnLFLzbkbRcZ3zHGC1qnb9GhrFPL",
  "key25": "2zykSvEJCPEhmMsT6G2qW7yS2hhNb2fjPpwGcwwsZJX41tooeHUZqZhfMFgQ5hsyvBX5ZRu4HEnWX4du9Qho1wZM",
  "key26": "5k52FBqo2npxRjeDXPphnpw8HBeRLi75ukjGc232URUe49eDhynehk42Mjqz61Z2qNDRbb4hm1LQmgBzPB2Eyrar",
  "key27": "3nzZQXmTrqQ4CS2U1rU9qi1z9rMJ96TrQEBksXVJ8qPogz6BqVjY7jyETuPNgYWsDsgzHHMTHGqyBWf3AsGurEeK",
  "key28": "3pLJxphcu5QiF9FAd2UtwipcXmPewYSeZwQ64nb8Fd5wdZxs6YXeAbEGiRV3P39uekXntacB9UfD5e9wwxygKLo1"
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
