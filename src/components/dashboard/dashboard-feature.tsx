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
    "4jeBsYXp2seNTLQLFWZAMQ6JrBbSDVYKZHgPJ83bUx7Y6XpabV9o9HdFvpEHEKVSxrGe4WjrfQYUyrN7UgcD2VtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgYS2eJJuUbgnGxsJDte5KeRiFdicXAKFkD84Q1skYDnGhL8JpHDvia5ukRMpAtnkSDgmGjU4wWo8izXbPdim8k",
  "key1": "56ziiSt8i7x219bytd6YpZkmzDHXrQpM2XsQRuSMjnac4BMzXiGMCXaH7sW9do4bnt4jzFibKPUKVpBaFAxofGZj",
  "key2": "3NEve6F2e9sqFBoKyW8QCsiqF3Ydq72y2HHixVLyx4TxofTFhS46Awp69UqGjuHqDANpfznzRZ2mxicREAKTyT55",
  "key3": "3fTueB1q4qhUqinCfyC8MXKnbaqi8qag1QGV9TUBXjpt5rKjzpUVwCggDnC1rC2pUG5HXUaaPMN63js2QuER58aH",
  "key4": "qdYGPWsoJTvsHe98oFsQ6SeFmY8pdcLVmwJYyYsaCq9fky1RczfNBqvXzYpAjg6MEGNs7Sj6ra3KstnxHZt8zu3",
  "key5": "wBE83cjja6jPZi4NxXcA3SpgxyQJmZxUjkodAFQoULjFf7XE74V8uSeB2R6MPQehftjfRp8zpzUXeVSBJ6z7MCB",
  "key6": "KN2j515Btq9q6cejSZkACy1YMzttoDsCNEciQzyjjwfqUuWL1KE8RYaXrACizpxPnuqySEd7sxV43CGduYBYu8Y",
  "key7": "5f5D3AvwcFSSFhChHENihA12QZwgHSv48aon28Unfz3eYKNckbMpB4VRWpd29MPptCeiS922jndeD3tJ8Mjc7bAs",
  "key8": "KnU7FsE8CQJg5eYTNGhKY8PckgUy6U2GcN5sfbQRV4DqhYDJwidArXHk2x9YgFSpzMvNyfV6teUd8str6dnuNS5",
  "key9": "4EzhLbmgKXvEmfsjgKyRWw52Goa6NnBRACrKiZxEVSmZeiiiAKtEeM2TUftm9fYaguud4avU9rJaJ7jjT6rPVV5H",
  "key10": "u7BmrcqqaLsCYetdWomDYNxY22zjErtEy2LVrwQ5hEckBJ9MQuNci2eLC9SoLvaXmnC7Q6tfbZpypTB2SQD9WuK",
  "key11": "4jMiZQoF3SQEusPzuioUZ3aUFhxKLhWcqHZecUgyPJ5y22fco8pYeoUkHPbwwe1gtNET3VjsagRxxdTfP4jb3WTe",
  "key12": "5aT9nXPEaEgEidACMy4h8qvQLk5PZbc9SKMGrKrgxiJxFN1VsL9fpoQ3HTuZarsrUtdZT2whWR8Ch9fg7cE4g7yP",
  "key13": "TGSkRGMWFdnDNp8F4ibuDz7gM5URqfszmkgfJ5YiqU8yAfvZPns9zYrzQ84PNzLx9hLkVHabcepyomYZDkqmrxU",
  "key14": "hE4ojtjY7fs8oUhbYWeR6pBLmqQS78Ny7Rv34ZA9qWZjwQWVH1Yya4HHNcLb3eaXyYxo4ugg3Ak3j6fdWdnjSyU",
  "key15": "4zETE8fsoF8BumG7vZShxFURn8MjJB2ce2hL5gufC7JtdSZra7ge977JA9Rknhkg1geWcGxf5t3wyKfnbeqvpmCX",
  "key16": "3DxYroMp5N5419TgzN4GQjcUUTPTQkTRuXZkQTmBABZZvWt46LXrdaZTtyrejRsMtfnQtFhawQMupuWxst3txrNg",
  "key17": "3ffpyErPHzN9gqcntXrXKL1CgYV9B76Qkme33gwaPpJbsjyifqWCRhDc32rQgVHMyJthBC3nBEnnyw2motDsAgkc",
  "key18": "5VsUq5Cu2nMrkzK4e6sunwDzAHP7jvoJhiVF94PBYktsTVHJSJ9oxVJuGTxkWP5Vk4QCbVHTLDWTNE1dhcVfaqBm",
  "key19": "2dDqzKsf3kMftXVYFpNrgRrrxfKePuhtHNiYacAVnY3e22uxJqgzxEhbqKovSQmiYBQbJom4qQonEeGP2MoWFPRi",
  "key20": "2v6cdw4MkfQuNP2NZrBqzpfNcXNHvAA5pV9QpLozRLj6UqyYrEckBT63fpvuTAwC7jaYoeVd4z2X7akRDL7f9Tnm",
  "key21": "3S9NLMTc6iYvNErUpjBmNbkiYcKCee9bFSt2UYMFtXLGChP5yjN95VzfE73boeDhkNXZqw1rMupScp6pYkX7UMNs",
  "key22": "34vdocAr92ni1UDCP2zSc4xMtoo1mpumYn1DRvUNDGWzVJXu8SWwvswcgShyLGVYtEgQ8u7BBScG4T6a2C1WGo9S",
  "key23": "gHprADGitxu8KWkTijKLngEzXkXfkJP585uMZfaqCJJdrts4vmD1Q9Ehh5DgCdot5kYKgkLMTbQ3Y4znHFh3J4v",
  "key24": "gHCDDJsA9MVe7r7BBEbTDeNN5uS9Z56GLzCWwyyUzwpSMwU9g8v58rJRyfnfzxFpnm4p5QRkbQ3Awnvo5sLk1kT",
  "key25": "5x2wbaCVWMfmkSLUrdW973NQRdiQYz981w8pdJSQL6ba4UcxGifuLtYC8Xi2aTf1rg76YQLfPbf27pRB3F4zooz2",
  "key26": "33D3wjt48birHjZ5cqGpQLmHM1MhNdqnMcy648L21SrDHANFct6MhW2oGFPp56g4vB78ueY6LUEdebn84rMu8JGE",
  "key27": "3fDP6eUWtp9GX4KQTne2Mh97VLfE2CZfYUYZsSyws5iNSLjfFbc9LRLqKA4hhu7xzmTffPWLWhWEChpAA9sJhcSq",
  "key28": "3GdPb1NnLixLAAwJuThFNtTxcyLoTrGDZK8eKubPmWxr5JQnDXrrn1aHzjChgtbZF1YNNdWzBEFSKdjHqeobhGiS",
  "key29": "2MkBBaqRP4v8mscyuUYKi4rPqUAV4UvnRhaomwQxdvGResTnue6w5FENWd27FTUqF2wbHZLqgKdZcAvXhxF4HLcM",
  "key30": "417zvKR9v97XRmMPY1ce2TVYZz5LFVh1xL2Eb3B6vHJoRXWurbRVqRsK9VtPLTVULr7aiLUu8bavQJkw9DFqaDYL",
  "key31": "2E1r2bDtK6cKtqgQH5vvCYtfbLqRiAzpp56rXeetVGM2dHnSc2JT5y4XaPfo9AP61bz66Htqgtb5PAZ8xQf4RBkH",
  "key32": "3D3vokDMpB54G4CeTAQnjAQTeUe6kUTEaC5iyBsM5TrQvcdpRkU4tQnkMeqaPqSTPAopWeoah7emwc2E2aU8UeNA"
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
