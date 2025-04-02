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
    "5qyWEw9hu7NW7wpkTekjZFY8pcNLsqrmHz2GPtxmZ4zBXKBVyYQMzrbG84wLCsHV13rWU2fafvtfYd3JkVC1uw25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZyZ9fXapCA8SMseod4bR3YYDrsN7fTBRbES1vaK7Zgtzt87RffjWcs4kUCBCwwXuypJ76DLsC5kf7taoa6cfXvD",
  "key1": "3TjNRiTDx8e5kBBFJs84TysytxVZX2q7KBHPr8bKGSEcfkxyji5ynvgYSVJfVh8mmqC4TkixmXfw19Nu8aoBW4bZ",
  "key2": "4DGx17NyL7HZbwZa9YcBC5T1DbCzgBY4ogf4WfoqFTgM4ebnLRmYaAe3o6dZYn7wD5G2YaoK9iWh8pwpun86VMQR",
  "key3": "5iNAigHmoGZ4fgCJYsCG1wPPKBXqrfNXAKTrVFk4TF2ziHKBkHs2KqbeFMEp1m9cwX22TRQVdKCp94EUSZ4zUzVa",
  "key4": "3iTEe1FpNqNnHgRoHFogRXoHLptHF5uBEPjnwz9QTDUmMzm9ux8zaz5WknVQ1gRBWaHdVGf7aBwwDN6v77Js8LDq",
  "key5": "4W5vfjGNL4TXvvWeGZ3o8EQDZ8kjdf7M3QgUnfFFFi5p1LfFG1chCb5GxL14mhq3NF5vE3d75o7MgTKa8NnS8CyX",
  "key6": "3SJmzeK68kpccofw5DuazGdNNRLYePeRdb8JVRER7H5jyjKZCGwNQFD7eNPK3UcjK2xPBU744PVBM86Y1TkdH1pK",
  "key7": "36c4s8tWcSUby6LdaUywNptvrvbSMjzeqV74QX6xuV81WJ4dzDJkup3h42vXWnRpKpNipDUho81HcRygRmJym4qG",
  "key8": "4hoFRKCJ7GwwBrvHKpRiDaT9kt1A93oy5Bz9MPPH2FHKcWZ9d2mCfwREaynVA696nDZYseDKJFadakrPajTdNpGP",
  "key9": "2TUXvHFT2PEpaoppDNmMHJ8mv7ZwvEzzepZMfJiaQ9FLYqMpeuGxRSj1kS7AfCPcu9LeAu9KwVF5QPB6UwCMCvqG",
  "key10": "5avy6htPxZXVpDmM3V3r5N8gm4XPFjooUwFG2xH4gckNPJuzLU33nPDY4wTvz9DLzzHBg9158ns4eVsVcqL3bo2w",
  "key11": "3tGw37512y8WELCRDAxQpEsj3ZL1EAiLESoxhRhGy7GiKoddQDsrQBbRpTxh9fTXBZqpMjEZ7nbkLSH66irzpDhn",
  "key12": "5FoXVYRb7hYPjRVo8vu9CBkV5wdS2bjX8FZwbfuDyuVeAAAenh2QPd4MZge7F9mZGrQza5svHkFzkM6CetM5MX8p",
  "key13": "3ZfWSisPXm93jLm7BEgNwpBXtuVWVxwG9qdroA4RnqvmrecVPuyyikChZaqE5Y5rhn3NFxP6v1dXUdWcfJrPJmT3",
  "key14": "4Yi4YvT2eby45FRLhjsWoMJYYTdhCmmUaZGM158HT56SnLsWcgkH76NmDjx7ew73Vb33ziGcvvv17AdJZwjTrsf2",
  "key15": "3t1y5oLXLEZoieh2cWH77LwSfx8pgzQqShbQApn3fic1pRHWEcX3kRKYS8o4zN219k9zGM8TUDpxRBK2QuJtSf7s",
  "key16": "4s8pn4NocN6M3PEPhnJE3apwgvAyrDrfPse18kSi77zuB7MaPjdLb1HGbe3hQ4v1JXkS2sx8ir9K787fX2srxGJK",
  "key17": "5yMzx26uFqf49fz7Di476bd26rxNqBeGuqsp3rzc6phLVVwQwxkLdTx8SiBx3Ns5E4W9uhAKfsTXzXX4SBgLfdjB",
  "key18": "4Se9ZJZdtKdREwNe1EofTPTypvXFLpkGK13z8FinZLKv4WdWoBTyQQxtnkMYYfPgLFSW8Pq8n2HuWBMNemLjwS3g",
  "key19": "2zuqZTGgu8qdycBT4rYXTtaVNe96ocabQZyY8A1wCitp7wz8pwdVq5Z7wHWGAoACj5xDHZbRJY4yv9ddwLdzFpCv",
  "key20": "29BMT6CFEgbD7yboHdL1NitHriN3JD3HXVDbEEqKyi88weY2YQDTbLFCEa7PPaWzGPEG7HercsPRzoebLYRuZazM",
  "key21": "2h8VdJvbZxDhfpviB5jJNdWEHvMVZ7R9ZMUfWLtxp47tc4Pv4UUnfqSjSC81HJos8bKHknnjAWRRXHwBcGa4UxPi",
  "key22": "3cKAcpvdMseYkzVybW4KxbzsxD6xcyLDXqirBUQY2CSMeK7brcrHvN9ngtwMk52AsQo9Kc9vHQ1ZsbVhFqHAKhNR",
  "key23": "3CPh4mVuQVipRYej7brS1BkFmWiAxbXzHQYjKkgqZQdUHjLJjKJ4sxfC36Gb9z2E7kawCAxzDDiTW1ub42w33KS6",
  "key24": "4oda4kpymTxaeGweYrD3anXv5JKbmESbNgoTqeVUEybXuLSgTcuVGx8ttBMyzLr2vBHgJW6Nu23nxWoW5KimEe5W",
  "key25": "4PyJFM7rhg9sFzFGaoM7N8jZ1onbWDecR1VDEovSGWskt4MPXQganuZJHcB1fyjXm4zTivWzvfvVNmvk5frhv8sn",
  "key26": "4mjcjZnaGYHYaoFYyA1cDU28hpUzdTbCKNuvYhpBxLMEunehwqvk6wyfrbkRLDdZoNYKyuWr8fgSQxog9ZDfXEEG",
  "key27": "3jCwrqYavAN2Q1zCd8jhq8CmeBcfwdXL8P1hnwRg6DWBCG4MrhQY7uEp18v7mkVjE3tmZXKNq3w7YePsUrhVu13M",
  "key28": "2seoxRrN2dGSoKTjsPNfxdjF6cBM57koEZZ6Y9QFfpARZZ7k5xDUmxc2etiuafT5Hj9kcLLKrAgqPvWG2qwJRtEa",
  "key29": "YwsToQrbtKdJLgoVuDUdUJjHM7ToUmDwCypoBsgrwTNXTDeCzB45SCCN4Yotau25wM2XWNdjZrbpUCgzDuSgCFE",
  "key30": "3EA2JyYNkNiZUMx6VY9eHPDG8mDJsVfiursZbd5sZvfHh4Pws8bEtKXmjDKa7NTveyngcSK8cujSZiZXGp9iogjA",
  "key31": "3ZW6pZWhYPsbmnFUYRPhZfG6hYLUnQ4Kqahhz6q7kxUFxW3do71sJfGYE8K7E7YUC2T985TGBi6oek8Bbdq2gxcx",
  "key32": "7EzJFuoFbLnjw368Tn6ufDu58vYXazL84cA1HstNmoMxwtMxhpjLuvFrCbNVJyKBahB52mArAxDXB2WVUBkFwQk",
  "key33": "4K89ejXxhLYydoHgubFy4J5VQ2ECqHFN5jV4Gv27H2t4eVU8QJyjJH4hpeTm1RKZ4ekApGUMDUCdgE3dHSwZWqiY",
  "key34": "53LWSH2dzqJXjaREuE86AfzEHsGr1FqNBKLUstCPCAFJX2jFxDYDb8jch9iDcdA9cMYdcVitBDn4gGdPyC8ccg7a",
  "key35": "5PWF2aSoLAw7PD8HS527WFEjC6j2vZpDBiRoBpRE4kGxK8Xixy5o56uwbD6Z1AuzK9gn9szc3BQvxASVD7H8yMGV",
  "key36": "4Dyiuwfr1Z4XFngwRzVaPXgQn4Wt2kPshxtj8144wtxSqwGPhmEmdryVKe5JDmvwzQhTnrMkxyHW4QXparZAGv14"
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
