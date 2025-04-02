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
    "33nAzBRbWoQcuc8jTPbimKfiGPKxYknZbgnYWSzoLnBuXjB9ryxFxpj53cQpqmWyDu9K2kKZX3T9tQzNwUiTE2FG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKoSryQ296tZFUwKGGUdsoSQZhYMMbi9YBp4CBVYDAkUnz426GBTyqamNdr7HmPHFc7tXdw5zRDRtL1AKumx8hU",
  "key1": "2MGscZgqYBLntWtGLMUdXtsJq1B9vEmMNQiroM9YZKivzbgXhQz1icxcHL1EwL96FTNHgkvK8xyqvYVpvLvvpPza",
  "key2": "5LLYckUEEJ2aaXqFrS7tpx87DJf2wyGiz2msrX728vXRE3KZ2e1N1mWVMn8UKVznXBzLA39QW9tbYkWSR4vAQtmG",
  "key3": "z3usdiAVy42pp3cGMjMGG85V1bSevzjAigrPsCtTfarNheZJMTFrFwrzndAKuhqwWGNk4oxrCcEFR5MFQQTgkN6",
  "key4": "2SGv1HGw1EBoQu7vEEimmWVk3YsBF2E2Ff9atCCQyD6tujupRhFRM9JNjbXX9bExYND99CvwYaSCLmBmjaAKm1HZ",
  "key5": "3NM8go6HucumPKco7ngqLzt4pDqzZtTjsG14QNXdeXy6Yh7TbBiS8msCHQzip27ED3L1yd7maoj3FuEaScsAQiac",
  "key6": "AZ4ho29gseWtvN1nMzXYEDDaLFdtuMAEc3nuAUm2pZcRTbqSc9z6yr9ApfEfUXRpVhHTtHmwpHc3pyKeFKix4U5",
  "key7": "5BqT2NAig35UkctnpSpnwysMFp5v33LBcrce322hBoR78Z9WVs1VMCNS6Sn8d5vXKj6ukgfaKwxPin8B1Tf1Levs",
  "key8": "3HM95gRhibt3KedJuNMEDoVi5FGg6RQwZeMopZPn3e1EukrYY4oh1cXd5zUSsMBKyowT76k9ELU47PMDDhkNU7B8",
  "key9": "4EeDt6WCLQsyR5T6hjjbgE7LQVnwtkhmum4zacU49Y7tDfQh4QkyYmPEYxLGwUyLpRqVssYajCqLsT8SB29zw2GK",
  "key10": "JVH2Rt3PGJivCW4ahudH32mJAvf868UuooH8kPuV8gYkcrwtinUGqPWGqn6kyKmYjwyVckW5pbJ9B89yfTi9AEs",
  "key11": "4fmiYG6w3vYYz1TCSCUDK49dyzq1dnNsQ7Fry4mhnpjbKmrjzEhAb3HJNVqdymsD9n534aguHYWpw31di8e93uc",
  "key12": "5FNseztBxMTDGSmvBkdLzgoQfCxx4Yu9MeircFNc84Wt23kAyVXWXBr2t3E9wmewNoiRLz3hesLPVPPsdQsJujpE",
  "key13": "2r91n7GnVxc4eGhXDqbuLrFfCBk9Wn3mLk1qXUPQbkxQSEcwm4pbH4mXQR2LxPS4NyX8DGUDV9tsVSmntaaZ7MjM",
  "key14": "5tmQKr3FxwQ5Rx2oJ9x57wwXhJCxWzG4PvYaABdqzqSa2Neh6GcWED817n66dT2SQf8K4KBwjrsmKm3uCejaUsn1",
  "key15": "4G1PXDesQso7ZctFimiNn3rBugesneaRLfuXzFuSQEbHw4wYv4p9zviUJaiHwvH2XqichweWDeuJj6RQ6vLRDSB8",
  "key16": "2rJN2NJqbqoyQT92uJyk64FrrbNrzSzAdaG33rWAg3jv5a5MSimwqDMJxTx4Lwv2omH1QKezQDUdHjcuSSRmBe1Y",
  "key17": "5chpxWDhLzeDUYfPVzL6muEpMUBX1rhysXJoFVG7YX4g8tUHg4VUR4w6fWSeqQ7b4c5DLXBsEo4XwmZ6yyHGfhgf",
  "key18": "465PnfHyGrd7KWcKADqvc8JCM6tjuLpvxKtcTpCMCa2RrgVgbxNpm2XrkM8V8uk7wpcQcz3g5LHHVEbriToM5kNh",
  "key19": "5pPAbiLeg8K4U4Ai5DaWmoRNrk2H9ckKj7LFYdiKBvxagVwdrJLMVN4f689hTqgKr4xRqoPc483YB3t3MSSuag6v",
  "key20": "4qhJ4rLMqwyaMD75mbpN8i9oR3noX5jG8fiSwwNzrm24u6pusrpevatVTtKqyk2iV6Jye6XHrzfgoGqB6WUz8H5v",
  "key21": "5fK5dnFWnyMp3QTgZatzS8EeeuSH3KS6HtGdU4vGZeVn3cj6XBwiNE6ua7NPjoobj7YQure2hovBCFntbgTaT1oP",
  "key22": "23m9bdEpUnFi3yNjaDBEjgfjkxkt5pDvDuK63bJwgR1FdUuWtWmzz7UFkc93GojD6esCdgyfseLKWkm8qKpZCQ4W",
  "key23": "3Vvw2tbxdM61eW4cKsBjqi4JgJN9SiACyjMmvBEg45RXQo7Nv3axaJH6NpAaEwtJXgr423V6Xq47VdnFFMZxxbeC",
  "key24": "2WnjFvTiXhkyqaUVRLiTFDcwr1ZYBRanqS2MPgJhKeLEDJCF6pjNTxRnDR2AS9grFe2ErCHNzoUPaud2mJYKpxPE",
  "key25": "5WpyLnd9FmPYvkrXT5wLfRHkwdKFKoVH9Qp9mSBY16oCBxoKut2opodFKJzkurbzuCH8W3M311P1NwBwnqLADDt5",
  "key26": "376hMTt77Fax1L3FKEFCXpSGTr1wBkC1RbnyfjoyUTCCRHH3fPZVjpohYmwNtn4watzFV54ouFHTpfgVbHRMHP86",
  "key27": "4eqp9n5jQZAFSCU3YM4iLtX61yeYkkVq6roNCeKFaK1P7JMd9cqsDGK6fYVocv1soDUk6UoeTo3HDPVEf91AXmDz",
  "key28": "2LXwk4Up38zfNNWvGVYbVT5HnAebmt6qYi3fyzYXgct8yruQa1KGfYnWkETNDTqenVM8GNQGzM52W6ZfGFLR1nCS",
  "key29": "4hEKn5gfxT5qZKH156WhAvtytdSNKVvR89aWFPCuDheJxvosuGTKAG2RYGiMS7yRa3WFUpfGJJ7A23NZJazafQKa",
  "key30": "4C5btQN491Cku3JAZNbodXgXxkLRTsE1PJ4ymzgTAbZqP8ohedyrJWeQofFqTaL6CzXkN96pxBSQXBTq3mC5A9YX",
  "key31": "2LE4LnhArmn5dNvcFrhayks8qUPXDYiB1bF4MwhmzfQUCbXy5e3A5gff5iuAzpdvQBKfvBu9JQ2YPg5GKVy8sijX",
  "key32": "3RURT8VP6CGVeti9Q3yGU4rWTDmzetTmkfGNCpwFrsUME6Qi3iELB6qDoAnu3PiCXEZwJq1RZdBWYU38d61PiHT6"
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
