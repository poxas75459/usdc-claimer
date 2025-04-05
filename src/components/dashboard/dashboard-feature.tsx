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
    "4LDQVCPDi1orWeD1XhhQifzMgGJf7LzWgFtQPRBhcynja8P777fKZGejPGWH9w7KdHr5aEJWRrvcmpncfAZ97u3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dcWK1LVwt54By1FERu45eiUbimWi6SSuHCrFaVLNp9NJmS3hCfq1TVA976qE4rfMwbCQnK5rbGwDXvxKdZV7LxY",
  "key1": "4xPPc1gyLWro5wc1SWmhRyJcKJ2DbfwJq9Uovpx7BPm27gAMj34Cgqx9rNFeS3F6oGT5dVmFHnovZBQy2HstGU21",
  "key2": "4xNGNm69z4o8w6iN4EbsYCTzmiWitkuqyEKffRgHJm8xH5gGUDhY3ZNmUaQoaXFg14HaFkGCe9w51ysaFEnPqnTa",
  "key3": "rSuxiA3oSseLoE3HE3fTzhBTNE26KaNmDVo6xMrfZiQqqwdgkwzpdyoSBLkydPrJb447dMJMn496bh9WqGBoGyV",
  "key4": "3CZRqWHrdRURJGmKWG3EYkTf5PDQasJwRc5BjXMmhYcGfx7dzvgVDonS425ihugwaxmTP5vxoRYG93NrgFniX7Gp",
  "key5": "2wqbyxWiN3GZsxzi7TpafqVfXbh7DksrWEiqCe2MNNXCa56m86Eh9Fy4RxTUQMxhffS3thDgydxawZLyducLtgCu",
  "key6": "2CvycRgNRNF4BudCSiQE1uLHDf88EqahhFHTfHc5MRTBrcRZcFLgfg6sdLESQKAYhF8FNpbCBrQ2H4JARknLnwjQ",
  "key7": "5U984esCrcom6RrQVQxbTkEUK8AX6kLFk2f3ockiJwe4F2Ftx4YH7jaJXAD7uL8nhG3NqSfcni9gf52UkEpu8qdE",
  "key8": "5DVShoXkNQr9Pq1QvMva9LgY73Ahjqahxzz7Jj8cQqkYmGUu4iuJRh5gzBkRwLSxve2avavHcQDgQX4S8MF3oJaV",
  "key9": "5SWX98TgV2AJb365YoiMHZPDxKA3qGp4DuguZyMuDW8EritHPtnsSckm9CQ8q9WU8mg5SSFgxXDUQff45shM1TGV",
  "key10": "4jHkkJ1nDtVY7dnFFhQGcK6ACmJju7ZYjgnCpCkochAM39mnf5jjTEkAFxc5Nms43d7UkJnk32uVwqher5ahJcqz",
  "key11": "5NBQhdPL2viE9YpiRY8jk6sqLA68Cp1ahwfW7A3kDCuT8iechmM5tqPAG25TWy23WX9n1UoVRuhAEjNa3KdJwZ7A",
  "key12": "3ezrvKGDRByTtVqkEpLqFNerTuFBCnABxWeYPhJw3J4y3RydyPWXCDj7osz39WPqqRgDX2Lu2VyTWoxk4U73JeeF",
  "key13": "5NeqqqrTfQ87BYxyLFyp8H7tY8YraMpt6cuasHJzErMpw76gtWubAodtFwC3m9JjNei35iwY35ykSXLG118YHmia",
  "key14": "Dwph6Et9LYg3nuUuxJv3NXPqHqJecdLMQLhrw29gUuZUbKsKDH4A17PYjhAsE7q3gtqwyQXvdQqbMp8aMrtvjT1",
  "key15": "36dzB72qZKE79yjNBmtGtyUDwinVbdfRDfdPX13aezTKohKK6iw5Y2QfcZ5dvebfpHfrECc9ChogwerFAz84HYYa",
  "key16": "5KqscpqYv2QhQM2ULcybUunM8zjKqXMCD7RZGdFtiQdSJfE4uwxzX5yn4PdnDWMWZzGAVDCkWYSs6b3icnTFQXkQ",
  "key17": "FMgdg2GYZaqTxennkDAWQH5VsYnJLYcWubbMsSVY9JgVue7Ajgi8qTRQsNsHTKWZFLgtkaDxABpsiZEVb4LhFAE",
  "key18": "2dTCA9ADQ7yjpb19LfXq4bBdiqqdMWqQP8h4CULfMZxuBbvRRjCAextm8XAViWC12qRt9U4ndGcc43xNh6Et6TsA",
  "key19": "2wyVkoHfiuVBh5oLpREzTjkR2kq2BQnzSqYwf2hBmEAQBCpEzV7pDkJ6pVRyTQeW2Bhi3qVCfR41eYX867A8re5E",
  "key20": "c37yW2HUvjeKTyxsui5JKGVQssv1zaw5KcHgWTKPFQGqYVdFXqYfpNARzb7KVJxQ9C6yvD2PoUqiG1eLwQabge9",
  "key21": "45HSrc5TppXPUs5TgdVpsajMgcd5o2tywqX7Z1CLRuQbwa311AdYXr96zXyurHoB3tDCdam922oDD8jRRxSei7dN",
  "key22": "owvsRBLfnMLxAkAL5w7qbkib3czGB3PbjCWupYGzZaXLB5yjqN8gYUwTXxanJwgiAbrh8ZxiWxe1R5bTTK34E2J",
  "key23": "2N3XqK5ycfP7bRWVp1JHAJctFA86azkjVnAKV4CPnDT4jekZ3qmVR4FRd56UjQuaJVsfcoZtevQp8m92fusmu5hu",
  "key24": "2KE1u1j14Low7AJ4e5bJEwq6QFL2RPLRCcox5sN6ZbtQzi4Bzh9PYhsZUwyZ64u8Uvc5qyJBH5U7jctnavkdSw2e",
  "key25": "3Eo25hLuDhVdqyhgtCvkiWbCf23gyi5MkX8XaNqa4TktgY1Rgq5a2ThHo7Yb6nMPu68sQJqkc7d74EmRwu7DCzLj",
  "key26": "5dfUYs6btTsZLoNnzn1jY7CJQpjYBFt6BWEBPFfhveJ99bMmLPaBgUomG6hapShuzXbT1bT4AVdoVYksJLMaguWM",
  "key27": "5Z2iZZa6VihDAC2s6iiTsWizScmkjXmHtauicv4ThjJrqmt17M4DoJuvvbNymmVYJ9jY3pmQgH9cSLPr1m6ngPeo",
  "key28": "4Cu1eJjqCii4t3QYdR67mpdcKwpyf5oVW8YYiTgWKga5fhKE6qvvpwcUS2jbqmonHmoMoySnHt3wcbqqzuTcjrLg",
  "key29": "3imopMAhSsBaykibvtkP7L9cvHqY7mxpjL3ehNe8drG4zGAhY4y5ePqn1UKM7T2qAiy8zo8RdiQ6jyRM8qQQw3mC",
  "key30": "4Z7cvbLuZUYiwa6izYTcgdQvw2VhNyhtXNc12mh4P7A6HQ2icAKnFn4QM5Gx31xCG8mWPsy6bpUNAyM3KjoikULP",
  "key31": "4KrFZeBBDrYUVdh7xaxzCAzHMqtcyMhxrRwj9bHrpmYAzoyBVvxHEth1E6VZKuWPSdgtZV99z2SkhJTPxmVNuoez",
  "key32": "2YqUqYJeEuv8koN6erFkZGntricpraWuA4rjvLuqZGhqJXVdLFNzCzVJTRrvMBCZjGhLzLy7thKrc1Gc51anFsF9",
  "key33": "5BWFC69Av3HfJ4MQQ7C272AutsxMAqk1ssrBdS8vbqU2wRk27DA9SupwyZPAKZXDGQtaE4rZBWkhnQEiDEnAZjDb",
  "key34": "4jK5cfAfZRRMxb1UccX9inYpRxFgh1TKrFzz2iw7XmdCQvb8vasDnLF5tH8B7u1ar62iStwYzPKRjm3VZggZnEWU",
  "key35": "4ZPPTBi6C22KGCTMR5L7gqim7RfdhsMhfgsaJxjqrJTNDZRPWMZmyGRxwb6PotmQxGRqyoD7AejS5jFot2shXq7A",
  "key36": "4tXJcYXr8bNZVohaLn57Xma6dcufXaVx7zCHSGs9mbUJDH8Sk8mNLMVhVMZ6L4kjoXXbRFqUPn5kQckyy7HYVKox",
  "key37": "5JMBmJ55rVrioTj9jxVTYsDEhiVsJjrCPPmXNMgej1U7LGHE3XbG7Hp1ie2cta9aMZfCFK6kjc1EJ2YTyk1zEwov",
  "key38": "4EZh5Z3eG1XUPNYi62DXq4VqbpH7GNJf579mwWD6c2KY87y3j9Fx3e4sagMPXo7feTwKwXgoYhDf8eTqYGWH8yAj",
  "key39": "n7aAD2NYSHKtuDJL1vdbS2bDZKT2SnnYCMXCnUcfYkgn9UaS6vCyw6rwmnEVB87uXpHnec79dmLk2ysNiwPhp31",
  "key40": "35xkX2opiRJAP9qdQ9jTGpPjpemTdKKQ6eRvHcS93PQyWL4rRyoq4jBuGmf66f2shhG7uw7WA2GBgnU229zZKKDY",
  "key41": "2Fqtg9k9UrzYNb2jjUPUBFFz54QVBquagbq4KYwpmMz8JdYYnj8sepRrD4LYYJ3GYwKeAc7ebqw4op1WNs8HaQy9",
  "key42": "QFD713DXUmDrqJaRKcjykdbXrUGeNut71utnrkQ3ykQUSNPvLxonaAeUeKWrAo3JdV8STZKajkBtLBfJUAFiwUr",
  "key43": "5i7pG5zfmAgcLarQzuAMwxNeqeXFCMCxNoo5skBXB7cXXArpmh4JJQoeTat9MdifrsgbHas9mghoU7gTr4cMkntd",
  "key44": "gGXHuWTtaRaEivsW9m7SrwLP61dC3AAS7wF8S94tgM5EdoHZ4AyjcsZ5EJb3HDCpwMChhz9UqPrgyGv4waH7gat",
  "key45": "5zjjZDies7qvJPGb7K7XRcBwAhCsDbUa2UgT54jxc9YsrjsmQCckv7fpb5cRhVLFHVrLTjxrTS8ysYXnNVkHqWQo",
  "key46": "J8j55FRYPkUigMWGTvmg6XQdA8usM5zGHjUYb2yyMZSogu6BKcuZQyrBUgNL2Te9kjXChZzzB45Co1dx64W6Yfc",
  "key47": "39JZY1siDyznQonz1FuKRTeV9hGs9ezt12gRb2c578wCGWmNrMz6JYtVTq9kGJnKzK7q8nKsChTyuT2xNEFpvR1E"
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
