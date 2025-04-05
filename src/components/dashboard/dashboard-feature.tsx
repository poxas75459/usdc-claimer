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
    "3ZRSuK3DVZN5Y2AkVCjgmsARJfbDWqmaFC2AuwCSsJaabRiw88NH5iQqcCYzTjsmbrrgfGEezJQayDoZmAkfEUCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKofNfv55r7UVX1xaq2Lghx9QXqVVA88Ek6DN29AaybtkVcF58s5p2SQPWPA8VWYdiPfDbxP5VRCY1JKJTC4qAb",
  "key1": "5VHm8h5QNMz4Dv8aQnGgTtMrApGuXMHQDidicp3AXESUVXenwPG2Ryc1mzgy2NNALzMoKp12RN2sso4Kmy5QWRUZ",
  "key2": "2qeEY9B9wCFsQh7dnxheBGfBsX84hcqh8pqP3FMJ4fCTbEcMzKX6WpFxSBaUXZcg4m8kFUz3Y5rYaRBBA53mVPRk",
  "key3": "5jhwmarP2v7uJbzkYYbxKCcMtu7dUxfLmssnYCz3PZYiXQLJroygBe43QWJdD485Cng1YNmJFtj13eGFiV1r9p2j",
  "key4": "828itUWXh1UUR6b6KyJ9ScCbwopvpTaSsZ34Xqh9gBi9Msjq9H5y3BDP8kPNApyAzijEKsMVz8hMA4FxqfeWnVw",
  "key5": "4PtUDHzuAUbjyURPQhm4yQuvzdNaanw3rK99bFXbmxarnfLBFznkYAPcEvqnb9jZv16yMP6vxssMCKK7PiXkAG7u",
  "key6": "2bayMqnYbTdFm6mE9fQuMJ4B8WmDvAtS3zrAzcHrRToTdBavVSWFYgpQyZmbUf14YChmYUnjPXuM9jCPppay3pkX",
  "key7": "4mZowW9PRNMGKrqUW5sKHEj1mX2JxZ5TtcZv9ciCswBPHrZWD1ED8RrJxEthZRTtNRNFcGC7VceqpLknuw8TgYy3",
  "key8": "3zrpr8ThuF9uUhqxWnbGmra7TwdfbiK2TftGWh2uVQsB7gvSBnJ337a5kjHQz6EyA8abcaWvtnx8PsKNWpLeuSrB",
  "key9": "4xiVkpRnSvGQn7r1mX4DKHxHJjJ2YPUrWDBjmSbz7BA4pjBDxJ81n7HyUR1d5oiQppjF1EkEJcyvtyznBEmmWJAM",
  "key10": "49Ph6nztmkguxaeSoxgPhCapG55fKYbWkDaCgupvNeYjuXKSax4JATCgVkEXHcVBneC2KBKsfK7DMs6Rs1as3fDp",
  "key11": "3APazoJngh8yVxhWGgS5PW3bmx5dYpZKzPUtQgm87bz9YxRuUksX4jhWiaWRnvGP3k4nsjgvgZYtqNUYHyD2hQ1",
  "key12": "4WFJyiHpz1zq7bWeJJecPsWKEuAyg1VZetA8h2m221KbD8BBd8mzhggB73ZMAMXjuPTgzQzuViYrLNVxwpyqGzqR",
  "key13": "3kS3gAid5JXn9RjZKd9y1NXrNLRm975fLt5j7jyyLLg96GtRSBZqWqK43vdzEqzB1ewKeMvzaEUGjgRPfcaCPiAD",
  "key14": "rbKWMHxewh1k3LS5bMJ7jW18DqwrKCDX8jCt44qw9LunvqtdzQjrdeT7vAk7ndRcbv3PQ3JuP93Acdi1yvYxMGG",
  "key15": "c6SC6URt9vqgfwkauL16V9hYGfSJjoDi3EZEUY6co8oXcohsgT828uTeYtUrNBnTJPKhmsXz1EhcCh4tMZg57hg",
  "key16": "5CNvrTjmWmjGD22dJ21FhVKMkXYGXU9hzifhnMEuRHbUKpn75XsRawjREeGLQtEodkbMXgLpKLHmzGJrgAoub9oB",
  "key17": "4b75itUieY7eTQdUBmzSv8yaVXARrtcarD6BheaGihmCL3JZbw6aQbDpNKcDdDqECNzqGQSEuwCBeQbj3qgakuLi",
  "key18": "2p5zWyLNbEwzq2etUdPnfTzZ7iUMkroTphR2CCPKgAYPACvbTHufRqtN2DJEV62kcMULupyUxLRqjbmyBSa3mbzv",
  "key19": "egeeQ2NHH9GsYApeanpt4DrqPdPBDyFExCaP2FM89ZWfSQ3RZg5M1eTWAMSDDEVLf68ZDCK2diHFZoLuGUEmB57",
  "key20": "j7xNpnQkYeCrpjFwbaXbZ1MjCAZyaeBvfuUWaziBfbtUa9qUNPuSe2D2QLsTAmkikUXKTwWLPGEYMAC9Rr6R9X2",
  "key21": "4NHGe8s7sp43CNfiB14tRvpySPP4PLKzdpksXAzBjY3J1KUtKoKvrxPu1KMkDGWMqaGLwhyGbkJCcJPoXykd4WWV",
  "key22": "24FxFveYEBQht37KgAzk1zfgYJZuqFnq6PsKcRpDUVg3WkTfxGB597hyn1PgArsEkdEs8LZ1tvG9KrJfhgXNv8PZ",
  "key23": "34GCZ1XA4jjW85S3jitq7pCdkpWfnx5SeLUzTMc2GafXtDrKHmCZ5GqSCSALvLeeb3xyih1R7dSwkzhP9GFGs6s1",
  "key24": "3uKUpvGcKJDQvYhWH59McVFiZtt62tu6d7FUbzt45K97CWV9pp9VfaFSbjpNu1cuuZ2KA35wA4b1QnctMy23bD7",
  "key25": "rBhbDTT6Qua9ZQQpmtdnDSWn6cZrixYC5DfotJ9y3GtJtz11yNYXBqr6uZ9kQrN7zo87MHmDkzxh2dKhTjwM2Yz",
  "key26": "2o3QB6AUC28yW1NCDTXCMrAECKBkxvhEEbn47K2jWNt3RjSt2o7qgogoyXnrmH8yFyNuR1LDYcNYVANYjsHBKVxz",
  "key27": "3Nf6UnA53a3v4mEAADQRXAcbi9DvGzwsbR9WiAdVSsjyyspw78Zo3D884b6bfnQzRhzLKYwa3ERdn9Rwi6vJvDAS",
  "key28": "2KfvPo9QC9WFsiad7krvMhHJrNTHC1zaKoSsxq5sKCyVeKY6H3cPMFyLisg1ebbALpB5Rre7zeyy43EZBv1k7YyT",
  "key29": "4jMbca3wymi6nJoEZFC7f6EDp2Nmn6TpwMK2rCTpWpoNd29AZVXnZ32pEn1o7tscNJSSXJguLRJmeJNrEo53hyVQ",
  "key30": "3w5b8zSs2wcvAgUmD6EUzYazyVNabM5Ro1f3c16ALV4szz2NgdAegHHq7nMuPWqvdsArXS2EYFhwLurHkKbMWtxW",
  "key31": "4TK8xsUR4vyGP1whHBu4rTQ1Fc4219gbE7pnqCG3ffrVZUU2nCwmwxc7pcVNTcpbkaDgsnGve8BFCZtNbNYwcTKH",
  "key32": "4QaxAM7xwXifDw9VuEiVoDrfPmc3Gp1eXob3LWNB2jQ8XCJ7azzdBNdiuR4zpHJEVfSFdMEhEqXmT2Q7KZeoGBKX",
  "key33": "3MyasMVUmqg4ig5atFCVJ3sHf6va5ejKfk8KbyXkoGtjXxZotd2MvvyZb3hU6wFtpUrCSyiBdSijgJai9uCaq3AV",
  "key34": "5rp8KF22o1gpnqx4gT4r92yq2BhsCz9oJ6fYZQQXcieggXX6wajUEj7DC12JUGssaY7bB7qcjtjkPVZTjJgj8GnF"
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
