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
    "439KTzHieazgfjt4ifVaUCkgEVQFm2VZ7B5Tpft2oWskTnRqLG7f46E1BvoCNnnDRfgbzzr12s4u4qtLG3efnE7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxQGf1R4iF8KLG8QQaf6VNzxgk7sJVpFPe3qvnAJ2xqhAcbrN4vDrMnttdkNLxdUypf1i5RDcaA4YBqdG3ftaMH",
  "key1": "2xN3MrYjXW7qNxywXd337c3wTJhGtYywfkU3GwCpKbbssu1FEDUiuYAW71tLrS1CnwRxLod7yfgJVNgqkNc6zsP6",
  "key2": "TSoEPCKu657h8Y28MUU5YZoq5P8Az5MigZTaDZJJAE5d95U1kqhqeq7TdASjhp1ATP6nwsEk3U1YT3H74qVJfh6",
  "key3": "62bnonjFXiz18NxqX3pTL7MarEEWbK4KVGrAwYukxPqa7g9sEeHg4CJioUhwRR9GnsvrQxtu8N18jouXTMt5x1nE",
  "key4": "4a1bBbnihnmpLwaEzwL8aW4GZRLWxhKjuvSEGNfA4CDzkXZme6F45VRqjNuuENZG9ZvMGZKiD6ExP1rcip3GHRn1",
  "key5": "4r62WqVSPrDaoHvRzwboAs5VERAqNySgvgPKuTxDmjMryPAyoy1KPgRZS9jKT7dj6Z1QmDx4x2kHcxuzoxeP7AnQ",
  "key6": "43t9aP1KwRxoYcRzmkEHEYj3J2wz6DRYWeKFufwpHLvR8kGFck1JrgT7nvTbYPDfKNTe45at8DKhbdsZU2DPhUwv",
  "key7": "5Lo2bvB7E4WsUpDi9HTE8LCkvmBUi1B1FFTbT8CvTnKW5Vzy5o62XQAJ9xo8ZhbqN1S1s62LBfeM9i9Yh4ES78Pg",
  "key8": "3KiuNWqEAHTYEtYRM17YNZdAvoNDbAjgQxPkrGsKv2hzcCdHQPmdcUNDNtVawoAmGj3umSgfb8DtVVMTs5zjgdME",
  "key9": "2itC87ghUbNp5DBaWZrvLpnG6qPfNjXEh1r8LE6weRRCvpGftjKzN6WBcXTMB2bUzS4fmpqa9GuvvoyXEpcsFKx5",
  "key10": "4etnMoipzQi4jhf5i9YwqeiqgwsRXtXJowRu7nQbUNfacppWLDnDNbJRQw95NvcTU6bxS48Dj3PDpzGQx38XceUP",
  "key11": "3NKHBPEDvpHKz2c7GBtz2MmTZ1NnJRU6wskUxCJuJidZJyPbWYwCHXCsYDQExhRs8QmkSbrYKoC8NKxTcFYZSCzm",
  "key12": "2BB1r7W2g1DzRwVLGXkoVnJNkdhnDfDWn4ygj45ezEJnUyQgfPXpTznekaK26NQepr5QfQmg7g8LQzoBbjgQ42Nk",
  "key13": "4B1AYzByideDTSwFv6URgATZHrjJ8iJ5zmCEG17wcNqYusBMoqiNWJnoTGLKpP1qYvaGWGSM3LLuGdGzg7YF24MW",
  "key14": "3YAfjxMvSKUXWhaJTL3iNNxCa4DrcnFvXge2CvN5DXrwbi7DYy7jxUA35d4mkbtwqkMeNRyizqRwUafC3eYdzj7G",
  "key15": "2K5yo55ZzAQqmbmFnLCn8dENrMhWkdF8TbYtTW1q56qbfDLJWFoQbPGob2QDgULq3A48K7sat4ABXihB4ZhgC8rQ",
  "key16": "5Xg15cpmJzyHuG7Smh7tacd8tXxjGHHpY8vk7Cg5KBFDRxVuyc8KTeLVfTrPPUzXuDWsrr5Sf69KyvpFufRNDTPd",
  "key17": "4dHe8tS44EUCZ3ievRt8TbH3muYi1MZGFbxL1Wwg3URtYK9GcByPEXi8a4CRWtPmJZ6bE3itVGcKHyyVqr6xMccQ",
  "key18": "5uGYCaxwF6wupWDAgH8W7m4Ggz5Qn9uQYJZEzPkgfib2KUSroCraQMx2sP7t5PJFKXoEkTwa1symc55KZdAjQF7U",
  "key19": "2sNzrYoxPXMM3xHo8eWboL65UbEx4Hj7D4KqoTtfdvHXHhnHsbSqhbL9RNy4nvDTZHoJNe9XM2gVqQCeLeUjULoM",
  "key20": "5qbhjHyfbfgewQvfTwkBLcD2vGHGEKdrnSXChSEBHsW2L4dTkA5HCfmZRfWM4HcgzTiYuB3fn1HGN7Y6ZcvqcKgL",
  "key21": "5WkQASnYdmGfAWd6XNZN8iJowLRtob9cUd4FKoDgSCZXhNTacnDzqVEby7SNCfuE2up6ysARZZryBbY8nqWm8MUT",
  "key22": "5yYb6co6QoCYwpCumY8UcGmQWHePtoF67Kn92GHSN9eMvFDx6cBi3omR9WW3PiEeW1nzoKqLxcHzFiXtgd8tisBS",
  "key23": "5vV8k62AQnmAkYG2aEsEUKwk5hZRCgY8eWPUmCWXKqNdAFt7nrrzrwfvquJqwxEabCWT816dTSvsz2iuKqYU9crg",
  "key24": "2zGaeVsZqUYycrJxDwHDTPqGsMzXBHMUob5q7hKYXKQXJRYjPfErY4nQ4Nv5aBMU2pctkCrKSXFjZ4L8pjNyAUuX",
  "key25": "3jfhoJX2jWFpcLb1tW7eqwG4cfj8He2TdRSjmBijghHhE4CerhRNrgbvKvPWsNho9uZJs9mZjLFpwurAbwbdnrmB",
  "key26": "5vWMNZ2ZJREtX3euQmsAgNeDX7k6zGAR18wQ8iXrz6kajTEehPJ38vFUzhEiy5J1BJkwxgnaTM71e9ZCVfd86mqS",
  "key27": "4wrmeh4YFx5N5M7QhsRGvfj89jGzjttdHYnzgNmz9gZTw2gGpQW21EyJLhKrUsbvnL2ZbVkeH78U6hDjsVK9zGH",
  "key28": "41mPue1bfaxjNMJaqaxdh9HALcQA7txx3svVDrwagJU5Goa7EXg41mbfGnKjwNoq3JcTE1fmxZzN2ddiDXfdFQX1",
  "key29": "3qsdjeReHYTDJmFifmXMvU4mFpE6Ss7PRS3Svhp3Daj79waDebUJVhtF6pKk5Mk8Y1Wotgfm9tv3GbdyCqhRXDUL",
  "key30": "5u5E6C3LN7LmpvLAsqoaYGd2yJeMiMp3kyXwYL5faxmCqqkJHkrfkb65Ffd2MU5ESnTyRbu1a2o8HyHWj5Y9PvMo",
  "key31": "ZicnyoyfEwM3oN6pcv713me5cGzayokDaind39rkkexUCDUE2E24E3Prz9gSQGy6cacRbvAhwh19Mb41DDk2xqS",
  "key32": "fSXvWzzvS6hEKYK5KLmVPZ78b3c3z2FGRaKQSZHscXoLRF7SYNJAnJWsx79ELMkVKyPrRUQwhz6hXfgP5ShPR1r",
  "key33": "4f1ngSukEb3JESo7Vk35xMzSGzQ7NgAgBZjfBhJRnctsmCXPe1xyaRqtZBBcuX1wCJiecCxrVVErQ1yhofQhcJdM",
  "key34": "2Wjy6XdKFDsbeZzVx2AQS3yBcxFhR7Tt3Tt7ugfgtRXRNHAuVyxPgtQ6JHBeC9UDyXk22Ygt9136QHv5YCFJ5P3o",
  "key35": "39oAP6FDPGDbKNWou94FAntnvq9BfDq6R8NYNK9Pqu8hG2yBCgsGDtSXHTVWnSMnMktaucqkfzWcd26VaPz7K3sj",
  "key36": "8zVsh7ZkVTcK1ZbWNZLQDYn6uppSdBTyqtVP3HFeG4upZnZAt395mNeiWhJBhcqUPH4HXmqUEZR2BJfZZ52RJyn",
  "key37": "3sF7iL25fuUNHaX67Maau7yKUPZeA2QUJDJtzQiqfVq4hAE9YY1bC15YGhUknTPozKJdkKQ8GqtLmshs932uPgPC",
  "key38": "2UA67CY4YUc6z2HK85m2SUceAwSgHmWstV6e2uBjfNKEs7FBEQR5BDgXzEAARC7P8eREpCpR3C4pVZoqhN6gHEpr",
  "key39": "32HFyiZabG36z3Dv5uVJT4pwPiUBGiTAS7fEhX5QgWtyK4JaYak4qRH2yPFKx2qemRCV1w4AP9pvUnNezC5R2SAd"
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
