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
    "4vceLSSLWyHGMy7EyH9R9rEVfbS7Rm3RFbhbCKmcRTLnfKXKPCvJLJCbj3utZyoCyZQCZiTATDRcoFyqiBoV6GkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5modCP9RMo1p77FRfKcwGVNQpRYejKeewc1wUVqPPQrqt3cepTFbHXvQr6FnTWaC3ckwJafvcAH7aucmHbyjbCTZ",
  "key1": "2jPQwPP43ucCo7bnPLQdKTKNnZxwyZk4jiwUqbdU7gRzmFmssC2txCFLFZVppGFdzuLdhChXWPycA61jiw6U82Tx",
  "key2": "62KgQYZQfDTk29cw2yBSVJBeavYs8ov51M39p76p5zjX9phggJ7sAk7Dgk2FEaebP11otqve6vGFdv2UPco4eKA9",
  "key3": "CezvEUq5pQV9APfn8Lat5DogKY7a7WTbtssnRWpDbvpt8UTQ2coBCF6pf1WmKjWeM2M9bPA5pJMGeUiLjfCyEhQ",
  "key4": "44WdYhVnZzWjYoNQJzK1aFevQ3y4sf3f1Z9458g1QwX8SL6yUTxe4pv2t4y9taPd4CLvnX4ynBpsYc7KQhY4Sh6x",
  "key5": "32WGQQTkrEyWrueoGZR3Qr6EE44Tbc5qovH8MBTDxU2b3C2nN2bAMjQTw7K7kZcMS9uQTPUYXskUuKSH8zkNhjHD",
  "key6": "3sELAwx3NEEyp8s28PFeYd7sjF41zRhw8tStPSqJNimZnhj8MS97gASNBqkidWyP2PKuoZLcrfJkZ9bsqayhUW1S",
  "key7": "128YQ6HfQidn6yiPRPST5FSTQca9yBb9VcgAeEsiuCPL9wU8m8utrEjY4k349wSXmnKSuNy6r1EyioK18LibA67X",
  "key8": "4Si7nf2cwj4hefygtbP7zSYEUq4higWaLwyi2Z6oa8VMpWmA5N8UNA7mQivKuuZvU5eit77DZ269QFE8GM3NNXt3",
  "key9": "469xNtmE4rQGfoRQoRUWCRyaYe3qgT2orr1a5UzQXzP7tUwpgHSk7WJVe2nGd5iwEiNo51CTrWwy8e1vzzwEmDNr",
  "key10": "UiqUxpycQ4ZzXjxk899FNpQEeyHai6wmZQ6DiVw834HmrnBLtyySYYm3m5B5a6L4FqHxR9iD42R6Jv7y4AQWvT3",
  "key11": "5hFRa4UJrcAgv9Gkf26x2G5jduaSsta11JiXcLmD4dbWoZARqNAJV2nmwu6QarC5H572NprCqZUoV99uHQyY6dYt",
  "key12": "2YTsm7Nzk9QNCsfL98BNmZ5Fx278yGCAQukeR2GePHNUJWy1g78cCFQnrwwa3S6FcrqRCrLwPhCq1wwmf8rV7tB6",
  "key13": "5vT65f1PHHU7LJqYVjqCdY8Ab2wSCSyAASwep1XHddsJWypPQZr6ABacYo62JeaGiV8aRkJpRkTAjNdZB6gQU8jG",
  "key14": "EDGTcvUViEZwenLPXhcTt5WSDmJcbC3TTxfeiZyEeNdwfpPPhLDaD92JBXgGBCSHeKbbhHfCgns4GpX7QEGm6R2",
  "key15": "rziycdTDcnLLePtqrDJeQScwhxC7nDMJMWsd4Pu7WiRv3hn8bmyJEkCAMKd4FL4iBuqoyfUMyijEXyuvmAXFEGo",
  "key16": "4AQCMW1z3BqGwtNfuD73iyq7eeWarD93tXG9Wndvg35hdu7Fa47Up6AaiGeCuFjvJnJtTgdVExgUpBwprfdQMFhq",
  "key17": "4jDbFq22UQWcmc1p21HiTEHcAkJFwb2PBa9SsCrx9G9TeCQNSev46kuh4ByKb7smXQ52ECr8veozxJGrfdiXdj34",
  "key18": "2rJJaCwcmNzASeBN4PxiyUVRiD3FsSc9tt6ck9X1SZohdMx2FDL6wqHx2tXKrC8eHemaQ4bS8NHmWjxDfsSZNRBg",
  "key19": "4YvLmHRmV4DW4aeTgxtRaFGoGs9DrDGrz3etuCK6ZMqNSUMMYra4VFGVsbHxNc2JBhYh6v2q85Mdkqn5erGFfB4V",
  "key20": "4sCih47TPWtoQuPpRBVLfHjSmfUjPjsEDX32g3wBz5jfbFXrkCYbJx88W1hTFEYbzs8nHWvCTRGgXRoqn9Do8LJb",
  "key21": "54bbtLCxJw4qPoqyEvFMMbKWJi6fsZYKDTj8AbgyJymZFAZdVNeWjnXqJ6dWk43NyZqnFHAxPWTvwy9dcegG9uWX",
  "key22": "3L3ezdDPnsLL7ejJgSWebkS5L7JkiU6Wb8xjxcZ6WWuVR6ce6agY4NnzjjdUv3TEB9dCmB1Hr5kMD52JFfUe2irG",
  "key23": "4mjzRTq9cpGc1Kt4qMiqQjYisXaoESFtHaArp3QRiCZzwSZcN1Xp4yJGuPAGNmReQk4u8WNUhPEump4CCV8c7uDk",
  "key24": "4aGEEGmFzqrGwwwNs3tQdBKjz5GLg7QpFK6NQA8DZJgbd1RCki6BsxfCdcpUg2EVFG5PNEbsCeV9tLUARtkBhLFC",
  "key25": "3xrAndsXWXPpAcoacK43u1cxqyBqBBec8NR23HCtXT9DZXbSyeD2CHLEZZwjCwwKZEwLR5g4BJq2HSHwEzKPk3H8",
  "key26": "5JpRadMiq6rvSt7odeyk5K3q7dWKsen2Uv9rwfxKQhVR4KZ7f6uv5R9qb7jGY4pUqEn4Rd4KVo7UEku3P1ee6VTE",
  "key27": "2FazSzUnBivZNqdDgF5WV6scDkQcmgzdCQmxyRmwqshHamWs7cYnMa2K3qBCeQAxjBmFf29cHnE79Jg4KFrw2TAf",
  "key28": "xpinb3ZgPauppe9bJnmbuSDbFZGDW9DDAvtiybhf59AGbKASNdRVQZtLcTnhUwRmx76WV21SYX9zWWrwf3CEJ2F",
  "key29": "28aRqe9NDHEGZbkpBaeW9LjeTHWSqindqLTktdrGTmB2cKmsxazLmYLm2dsP15LYokByoNJ51tW6fK1Hm7EULugb",
  "key30": "47Xk3rxYGKer9RpS6i7Rv1zETVGx42W9oA2FfD3fx8NfYdgWyaVvs6FzHbzwT5zHA1551kLG1WyVbaUkFKigTKYg",
  "key31": "4oRtvHun243kFtdWG73Kw2chzcW7YD3tyow4NbPFx4xDiFCMWAKrCwMa7Mzz9i1tyymCW7StitGgBHbThHtXD54r"
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
