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
    "4dpQbreZxa5GPQ5CjWSCG4WyvH7XJhdrLZ7ABa2xXeFWWXuuusYA11uNubVoKMeNubt5QbBxqoWS36kfewoHGRoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5zjQ2azMpvgtRVDY6PWHascMbn3FZvoBPPw2jrVAYA5kp7AEKHdrYUCqg3mmmipxTueyxKdKMrgvkPNTA7PruA",
  "key1": "3MLkWqnhTK7E7iFBAKAF6uanxWfThchQ8mEvndenECkqqXsjNUNdiDEUB5LPxtnDvCZah4Un9pswvTfnSp1mmVCA",
  "key2": "4xD8p8GHs9N7XRpDKyET7T7dAidvvtPF813m7rTe6SF1wsHcTXkHM7idhjvrKRBUT7oJx7tcivezBipj67Yze3VQ",
  "key3": "4uMQDvK6Lkz8P5TwcvkEQ6NSyDkGECHj88FBGh2ZJ3kEYSTUFCRbFShWTsVddnZ2KQoknQ4eZqy3bAjX1R2vD8Kp",
  "key4": "5QLDkxNxzVQbLCE6oJZdKEBm69Efb19YszStHUa41Vyw82W5em15S34bFwkzaS3wTiAx17cYXgcsUpiNAKmHYKo9",
  "key5": "kKyv73fP6YRjScK2DaEpHnqx3m8j2osoKBARUr9UQcuvVpPqbtSsHpx9o1arUkjMccSKTnjdjTNPhEaKdjpWdQQ",
  "key6": "cscZSmdARbBhkc1R5uwsgzBa9Jmn16EDKxuobPLkJMDaWrt7iQqLQf3qZ9Ak5qVTpm9grfg2Q62SoLnL6ucVTtP",
  "key7": "T1rTqNNCVvHDiHMkV2zd884PSa97WweAcfhqZgeNTXDqpX4sKh73rfndrWosDzJdbuZQNCnqZap4rveaX31rSgL",
  "key8": "5rykhpeaftRj9RA41ALpLNABZAXwUa7qfTvExnV1AVsTRUYrBqWURsBiCabZ6QPyQw26M1pjYnzSxqfNKTRfvJL2",
  "key9": "4ShkqgstAxBxKuW6tP1Jop5MRwcJvZD764hjs6BG9ZdM2Vwx7AkmRrdBxjQKTw8PMYtPnvCC81Ck4BDZh6RZRiVJ",
  "key10": "3vxaj2pQpXit2zABs5zgz3LeXy4dF2shdNkqBmV2TN3BNkootyF1HZMcTU5vbf41rvj1Q6N3nd6Jg9nyoL54MHZU",
  "key11": "2hFKt5SffeKEHGTjLQUU5PNCJSK93qttzxu6UVPE2xKCMS6VUNM7y9CPhgNJGXdkQ3EJNTf8a7Un34ByEMnqee1u",
  "key12": "5gdZaTwXDXs1pV2zCswNgB19KnfESX5sW6bGft1s13YjRrNUuNQK18NzDxZu85MApyN9C9AJUrnRYWMeP1VphEzZ",
  "key13": "5ZzHSqeK9v4yL4wi1HcWp1sv5Q3asde4tXWo22ofgQkuUat9bJy7WgLdHxrFFTwBBYny6p1RBugqzMqEVtrbBPDU",
  "key14": "3sd9mpXd7y8rmXMv4JqDs1W3BCT7DwRThvQ4tzBfEPoyfTNaTLFpDJZMk7H71Hpg1JDPxnPu2XGa46X9Yf6HDxov",
  "key15": "5pXhb1eVZYMrh2Y7igxJQqmhUYE7JEcHM1Gd7uwV9QdxvVoeU7g3tk7V9FgDHHUSDhDLf9P1xC1yMPe92yp5UFrH",
  "key16": "3xVVHoZrHZq9GCjt23kZuwiuXRLDjowcigSGnWKWXFEs1DCX68H6artpr9CYgpzpbsp8ctobgYRgp8Rf99Z1pUNE",
  "key17": "4SwxnwZ5URA2PkSTCJGB4BSi4LPpgS9iUnx2x14rz4sXwreaqH2coozBJKXgKC3Cb5MqhpctoDam7vSP8b8LH8vt",
  "key18": "62hBbmeFvBrZkNXGgKJREe7CWQFtAHp8jik26mqnfMRTQY5jZxTccgNwTWunszCtrjnoj15qsMWvA4XAtTRaL3yp",
  "key19": "2QxebL5BqCGPGRLMShuapHF24boxUfCrMaLz73qdFgeZtRbiHNsE1rCuAuNPNhexdJG3GXocAQ1iS8W81mZUWwCS",
  "key20": "3xoM5wSPxS7vrox3P4bPEzYnAkx1BdnXTYAj1dXdnLBb2DmLfLsffhKEo9jagqLNceLQJNb6zBAyD3JLYTXvEDtx",
  "key21": "3h2Gf4CqrF68AhuZmFbybTVUDj9esdTVZVswwMYQ13RLPg3e7YDQ3cX3gbwx3yMD9C99f7AG16VHpCSoJQnZFmhB",
  "key22": "5SxLoxHy5XFbdWnzjAQpPDUGkA9DC4aSqPGapmjQu4NurjnYka5YRjVSHqRFXmqBiqwkzra9AXhavTGMKifXpYsU",
  "key23": "4FQz91jFyfVuevNe8eLmoCp7HHUXdKvVWXTXJwXF2LZCM6uez4NMbqqFGErKFGbbSZjXQ1etYwR1d9RGDr87gaBj",
  "key24": "GQay1sQfo6auuEiAkwmjtcB3MeB74AvDMTJTrjnNp5v3aCPeztNohacu8HKepCAoekgENfddZK3MrrhevZrYqwc",
  "key25": "4rWdoUxYoss6C9cskhDqTWLhUo4pu6QxfmSJNodFESpqSKv8mMvbLEHVu6ttMfAY9kk67tWHjrKPqUrMLe1vL9W2",
  "key26": "66fiAvEJ9LwbZDyVHQXw9doMFaeahGwaPtoqmpv25gSqGV5csLqpEvfUmH4TqgaGtLh9dmjTUPGzd7UG9HBZgotD",
  "key27": "4TT3iNo395mrw2jKiMbSMihZQGhEfkGQThy2vrZ1vXPwREqMzRGTGtKV7aUhDWxHSwoVCKjUrx6epBM3haGUCFpU",
  "key28": "5PHCi9x5RvHdJj4XqoZXj3hVKhvcm5LD2tKMoZSPUVVmJRTgvE8crXbYVyrXqSxDJevUogzeja8zpH4kqQc8NmjB",
  "key29": "2RmqdQE1f9A3cewLnSpTcLV12TL6GfePPMXY6e3npfZqLKAmRzKT8wP8ySEJmRiPmfxELHLoWQv9rk896KCRgtd9",
  "key30": "2gXZWKuYaaBm8vfaDQvzScH6nuhFTtCLnPjSxrpHjYWoo6cYwYn227bZ1LzKZXcKHs1n4UK8w2nti3BiB8v8mhF9",
  "key31": "66sJpza1mTCNXkq4szgx7iPEAGwdgV2ZqULHH8iyBCrfaA2PrrTaKo2XAhWYMLykrHYLDLga5YRQEuYaAhdpRTdk",
  "key32": "3ntZjGnPN6ku2HFaPbnyyJkWjDYzL8r2yYZXecuD5xQriAQJBev2STZjvhS4rdfmjkcr5Z5pGEBh2E9RiuTf3qA1",
  "key33": "2gAt5CyLNeFa1UZMDS556EE9xhjgM5RYfJSApyDjPPcGJ1fVwP2ZJpz2XqZki7SGSun9RDxkBQLa5Nzz4bykCQRs",
  "key34": "5PvVaAjcUzPbEgS6SFkKF4pjuw6dhkb4Q5Qq59ZM2CkDsdHPejQkzfXxFWG1wyC162dzXFgG6NobSoPguWAZoBf6",
  "key35": "4hGu4b78Tef2LLkrw698pPQrVLh4Ckeq4koMa1e4Zd5PHoZbrVUoi1bi4yYnrFHCdU7pF1YwPHyuStpuK5NjSyHS",
  "key36": "3K4mypVKETrAHu8ejc7yyPskSCnxMSTLHLM2xiAFxmcHUhHFf28RTfSKXkaHcuFzZvcBqQdMSeBt2gNdgAeCh29a",
  "key37": "3PCmWfeUkYQEwnxJKXth6ERpPpph73WTZsibjXMhHfFVbMghoPZdNy7P69qwsA6k9T9Q2xF862dGBypyY6R2umvP",
  "key38": "3KEX5ShoHTgfZsB3FDNPY4bK4wqXdQQN1w73wdfEyZeLoRkEuXyNhEZX3RjxCsZaLVuMwXG4YU9Hbs2LCSZpRpHj",
  "key39": "AvUMk87EyVZiZb98Y8dEXZF1MgP5Gp4WvfpLRWQG8DNDBhrVqrBE97bGXn8vHagSiebCbZ35PFK8sBpQFJK3fMW",
  "key40": "2moKAw9avbsCgj6cXU67qhPReTuncGpfcRaLpcGERynjtpgioXm6USfNsgSDoKwWLJFt2YvFmvzbCv1rBA5LJsmA",
  "key41": "4zyK2NVNsjS5AaEzYWsgz9ypDWTfQvMTifTbw9VNEF6G2smr2tFEzAxshZBqFYGS2RLvQWnhGJtYiyyyQrLQLhwu",
  "key42": "4EhhFCbLNpNbTGbpbnvbyw3s5qfM6fcLtdQG5tjGUToxTeM2QdzHLavpBvu9s8MV4d4Ke4awb7G4MrL3SYFmm78h"
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
