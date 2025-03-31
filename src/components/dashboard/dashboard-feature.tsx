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
    "4E3F8vPYJnGhiEFmgcYJ8wcRbtXAiU77kLdDNCtE73bonLUi4vXvQQB8eRhGYCNGjRgrs57iYkgZaavLw6JwBZfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3G9BZTnKhoKsPHjEbj6GyTUR8vugm6di7aAesXCddPViU8ax8pCRSRuD9wrbzDNQtEXH8ZyUBpj2xEpmzggkms",
  "key1": "2hDa9jgwLTYhrnMo9LRqc1eYrsgdQaQtzxh6F2PviM1r9j75aLZW2iub84PwWqBfGMrQaCnJGFWtavfDmq9R7kEw",
  "key2": "5pZajxYfH5L2rYQCH77BH4ECWkzrAo4QvbV7EwXS7JMCDFrPHgYGMhXs9FuAz8MbqRV9DC8GoM9roh71W5jF8Sab",
  "key3": "3ik33Sd8BinuRdKrruivuR4VwGJKnkSuGFG4vt4Mn5HcG3eiuwJqiN2aJeM6QDUJEwXWD2d2s5pimUgYErnPvGQ",
  "key4": "23Dmg8iNPmw5PBD11MMpVsojLGQeXd1eKV32T76CXowZEV39GN3fSkego8B15F67DdeAH3veE6LGV9Wc2Df8KKHy",
  "key5": "3bf3xfmN1VDpukaLdwGNRkxhQRimtxbkgJeoAACgKPFxjBN9361SmA87SW2erjpvy25A3fYXkwcdJ78sZD5xeUt4",
  "key6": "128b9aaVupy1X7bnCwUx4TJxhMgkqzsvgy9JERa2Nec65yiRJsLv8dRtNnbGZpWJ9JbTLDY3YRBGPMSp5iq38azS",
  "key7": "3V8XXqSfCqfSK5FrRHP8SyPHJt4x4P8nAHYXnFjVKdC4fQhTDYZKzC6tZQMFzq7LsFVyga1Q29W5Js6fZhMhHGdw",
  "key8": "oqoE8hPCDTfJBBJcnsHZLbFZJVXqF7LrT11NQXmJeZSYW5ceKjjAE1t4Y38S9B4kztCG9yyC81M3uaKFFjWNq94",
  "key9": "aRN62Ggzv8Jkmn8EqKH8CzQARrt6QByJqC3DW9J6e6yz2RCjN9e7YWCiVwLxmZ8fGavvHCY8euehhGe6ddQHXH1",
  "key10": "7uvEjorcYDQwJQWgvF8ebRFzxUA8kz28eCFdERUBWX3Q5jpqU9sftFzmYyr4n8vPdZdiknPLvbFqzq4XTmG7xR9",
  "key11": "44ywW2ERZAer3fDuZiF9snjiqKru5JYGVF2TF8xSMBWudan6mHDGLWJp2H5P2tGRE3n9bBE4qntceSYpwjmYqyL2",
  "key12": "4XYoj18CCBLL1phjLH6ZqizhxoE5u4WbbnrMury2mHv4tshX3YveDgtxPMtFmdoMAoqXTvBi1VVAMkhttywuEFCo",
  "key13": "63AcNMF5qPtSqwEJc3KNdwj33T4AkXdomcgqEmoua3SpLbQ2KqLJihu6GNYJcN12P8KZoQ1UeyPP9fxfXw5KLbQj",
  "key14": "A8GDqGXGhrgeaVhEJxuzBSFvvU6WxyWNCpp7apvRK7q9XhQ7ZCbPNbKTNNZBifxAN7suu679DJ5mgmMjy1wQXgT",
  "key15": "4dZWwMC1qsAwMui4PMQzYfH4Hn2bTFzJcniVvPEDV94SZraZJGYMs1uiGgUtQYM5VT68W8qyXcKYDsUq6x5MmLqj",
  "key16": "5ZGKCtCboEM2Tpoxx2Q3J7soZt8zgRdJKrwmCq3fLJMkZTRyRa8WdjNusF81Yt3FPf6js5i7J2PigGjbfqQZgx37",
  "key17": "2G9SftYfm7mZyzcP3FCouTnv2F8SJvUSFoKrkJqxwrDofg6NW6Nbj6aWAfv3qwJs1GqDHmRdWdhDV55PfWuKUimi",
  "key18": "2u1ehHSVKWP4FYgqjrBeL3gQig8EDwMKT1vJBNAfBAtsQewtQ9yMijKS1R8YvW5j1eKm6N5wZk1YnD9X28GtPMD4",
  "key19": "akT6on1mp18QoBwrtJdsffTFHahSniAeF4JpqH3WSRAonYawc4U4VAUZ53bRftbS9RhWhauKmoLymcUSnG9UEHE",
  "key20": "3wzKPHG4NytytxduvdYkbZfx9J4tWNjggBRQn638xi1eVTWweuSwWUihCg2WAhGc2CUCSMhMBpmqh4mW6NESQ3UK",
  "key21": "5vZiFX8X1P9JfqAkCDFNHtYE69NpcqQ9Lvd15gGXqA5Qz7j9zsdTngoKhTEskzEXCcNr328N6M6EPEixVr6dXjz6",
  "key22": "2tJ1HRJT1gpQkN4sYCzHCsubvEstZg1TLZJ9tKFxDDynRspM1HTBGD88syqbhCH4SouTmkYrWGki7spMParpP9dW",
  "key23": "29y7ei88YxcSbUJyqeji1gSSvxnvvcAG2nmF1FmUwgtkLH8TPbNz64xQcEGQGTRegbqQkHULz3u8EpDMAvsDiMv3",
  "key24": "2CfXmvqBrrkEHnq8B5AchrL4rXVQArDZxbxEH1vsFrHkJp2oKJb8synGxHpMK8egCntJFDTK56jzEfy4wmx2aX5D",
  "key25": "4RHkD1e9L9VHek6rpv8QELK5KznFxoLAgtWuUM7fDEMYtMCywCB3QJGmXAbkQvLwNfX8htyJVpoCmahDEr8xAykj",
  "key26": "KMSKcQsM5WHe1bb9VoDqELwa6V47H7er23TkD7DiunVVmSByvJYzm8rn1xbMXgq5DkM2CnStm6JaJcqqQMx73t9",
  "key27": "51DFZu3Hc4pqbQ7YDNGwAEPpbvbVXRHVUbPxdA4zAs7vwcMZr54FRYE7iFGY4gseBzVeZheCZ74qj3wvX22QTQo",
  "key28": "4KS7fdja9mcnfsA9ErpzRrUEi3cukwug4Jzzs9pZCpuwK5EeKjegtz1qp3zL7FwHGKq1ng2AbWg9Esi1vuW53xE9",
  "key29": "4eMGdfBHqqQyj44d5nhLopb8EtWW7XC7RpyMJo8gXFAXsDMLWXRWHUaNhwd72a7UGQ5QyR7bXijxYHejmifHgTN3",
  "key30": "3Jt3xXYhZQagTnJrNU1HaxV3pEUm5wbBFAsZimWaTBdSZe4nSkfMgfyFQ331tbgaPF5fkBQdmgMwjZd9pAHR1Kgk",
  "key31": "62aieVfQoYJP6c4bRNek3kcxMgeUtCAjnFPrAzMPRpZZaZnK99VDBx2kQkU8ftD7vVo4oW7g8KEpeyqMg6AZGyAK",
  "key32": "oUxJzoSyC5B3ofWQeUEwHdWhbhjthB3zGg7jz774qWpAQdWzZzwh3V39sCR2A1xsVeNWuqYP7vLdBfqKGkC5URJ",
  "key33": "5LGekywaSNXjFjHpahNiTgMDb44hybhkf3RdF41hLdGEibVhiUzeVXNjrUaU26AwBGPPXASqAzXL4wSTYksCxUjR",
  "key34": "5cwuWLq9aS2vNmaGGrwmWCtFZRf2hUtAHddYiTDepYgU4rgRukBBdzmt6CRnz1YGMD4QdfxWp3Gf2Se5rACv9gy2",
  "key35": "UUyXM2Sw8ku5YEkQW5YBmob2BA3fbc7EeqB94avHJrM7NrZJGrtWqcrZF7a9McRKZUhBUeXFmc8fXSBfQK9ZXTS",
  "key36": "pogLHv3mKTRbQ4Qv4VY2vp2MSDjGjPkQu7N2Chm6K6Fr2cowrviZ7kceq2Nioe5nAgUsvJ3iSiuc6qH2ABBaZdn"
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
