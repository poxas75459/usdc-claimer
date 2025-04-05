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
    "43qDNPZiVuJA8HDiPk1dVXvfBs9mnnQjxUFBJLtB8xMoa26Akss3KjzCh2jsr1XUyDHafHELnV4fgtYe2abHt3vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55z26bf8aZq2mxJCCG39Vqu2ZPnfBzvCeRbXhuTs6P76oXQNL6S6X2HSCeLdby36zBL84RrbL4TzVtRavW4BAqvc",
  "key1": "5LKif2Gftd7GDgxBKjBL5icCEnjLRJwkDCnLrppRFgWV3wFRyBsFiwrjDQszHcuEWTb6cRSMccXd2Nj5KJ7xD6Mp",
  "key2": "3eox9ks7TnvTkC8DgC6qLRCCb4yc3Jei3eWqq4eh6EgsVWezuUpsAPmEKdx27pSeJAnKmiRfRqVSGdFZGGhzwghV",
  "key3": "5t765xqPwz4TeZSBiksoMzVkgtHwifcMQcx7Dhzs3WxvtqKdvZCCAxCZ2tRcHeEnK246vHVu89awSt8usJNKpc3t",
  "key4": "53znVPVgZ3RTPeqF7zGv91WgCLn9KKuPQuBtwYmGeVhGH8x6Mtmq9tJV2MahKC3ZpEXDPwzRA53PfNPwKJGFgoSB",
  "key5": "5kEe76aba4yroaZSPPHLEkoZ59Tgj6CwcMCWszMQ8J55HenLGwTsgM4CEUC8bKpe5EdoTFbxrRpnUo6ZEKvyBmm3",
  "key6": "34xwLFZZBgzc8ycemxigrwjr3HiTL3qoM1zqYR7yyZRf5LBsCzvh44x4YA4zoYK7TPXAzsAtxn4F6PMFUpepLUHJ",
  "key7": "61KnoH27CgxDLnPjaqx6eXK4NfWEXSZNxuKXk8V5GXEYLsW7jaFsxqNRpmwTAPAoYHHdREQWsmB3JPwnJoPtPVeT",
  "key8": "27v6KzwaVFJTjNGNMr2rR4uAGp7SkYrziLtfuEwgNYD9WFfxp9UuU2wScq64SAyJPQSk12bqbbbMxdfThE9HG3ix",
  "key9": "2i4tjfZdrKPetFqcHtMha6dwWazoCBrEYQhHFePydE8Di7to2AmizQX3Q4G7KkQRKNq3R2SVd1jyN4HszWHngJ3a",
  "key10": "5gGtroXCwqYDdduLnmwNH4XHjYmsL2fukGCLHUxLgYXf18EWpZpbLVLEJbBf8ZAcw9UsCTcBSa3SHZa83ZgdNW1M",
  "key11": "5o81XLmWBkRKxUMv6mpYpFeirEkNUX5X9EWm3B46XxXJBbYVHC6nPT6KoHADYXkB48dNas4WZyUW4o4ZfEvopHrs",
  "key12": "2ywiPgXW9bsArz4oWw5C7LY7bC41RuwLqTtEBTGAS45Wdv2Vobmoth6aqfW9cjHigWDPEmxFspgmgD7BH9J24iwc",
  "key13": "21NFUqDRmFNTJRgMeAffioQFhSnBhKbNmSvaxABHVB8K1TxjZhXPDtzU3qWcZAnsD35SoRQLgBETwgk6owGK4wr6",
  "key14": "5oxYio2AfST1L24zVSSZBi3PXpB1cSx7vKLQt6xNx8ZfKSbLkLyYssVvkidrUEGKzU7fYmCgnCV7jKvxTMCcHgJF",
  "key15": "2ietDDN3R7wnxYaE24E83pH8ETRCxEpKmGBxjARxurDM4UegWsKBykHvBC3LsPjdsufG8ZBkJg5KQsebxzeggmph",
  "key16": "5nmbnG2axdRgtNMvXEUrTHe3LFSSC7S3x7LwX5KA5Ne2jLheTgshxoMfjiEihkfSz2bfmh7brFEP4pYMCct35zgn",
  "key17": "3KNuRDqELSzaGvguXsVWPSapBt5Gd7fnqXNRvWLTHiXdYMgrR4LYCnP5hdPNpMzuCbXbTosV9cAKvZ66V2BDxiaV",
  "key18": "2ukHvf72MwoC9u4XQFg8MtAo21TXtfDk5C8H66VQfwGRc4AMCKuN1pUNPP73bRh8gioxyFUpBTdxQtCz2BqMimia",
  "key19": "4cJy8asQBg8851aEhqdUAuxTZtW5PE3CfrSqFifNY6Ha8dPNah7wFCN7DwtiJCtAxwJowxLirmqUUGPZqirnZoPC",
  "key20": "4rbUAX3mS8Yf7GBBW1ePfsBKV4FwBUwcJ77YsMZbgXzs9kbFHeNQQRmmdfqAoPRgpd7M3DWzMVmeZtniHJNwQpGi",
  "key21": "2eptoTskLeMeFLk1YZVcJ9KNbceEBxah4ZVSahN8nzdwJ2wEvpqaocdJt839v9YQN3yx919YZGch55eJnCtmbcQU",
  "key22": "5KaA1CKMw2J5M1jWs11nVdZDbcpAEWT2LPxMjrFvtKKYgmoPTTcqEgAXngZdwEEaiQ3xmE5dd3ULLZogcZ3jH5r9",
  "key23": "4Pp6z2nmF8FnaUcXM5mS4AZM9Cz5iuBfwqXGPsmZx9vfr2weBJP1m8mhPSuE4xDqw3Nh4q7zznHGeiG5YjpezCfD",
  "key24": "3WNFemKJV9xVpqXpMiNWekp39F5nAABd8cmmjQ4K3927RSK99FLakAFQw79fj2gTZLT3TtwHQBsDoMj3HFq54v7R",
  "key25": "4kvXRn6WpbxjJu81gE2aHbNBbKUhpA1gvsgNTeKQpurjAyqvzsNbES1zkPJEUwjLQUofy7g3y9nryBjjNqFGiHYZ",
  "key26": "2jtgkvW88F2aL88VpdaeEEJDcUG2H4DzSVhQWTS6uUvmEXGnqLyXB7ZmAZcf7cQ5Sna4WLEW3b6tUvprNNKvrEom",
  "key27": "3gecvEeVdsiSxhuYdTnF7gUytc3E4PAFxZRRNQ8UYmqNabkhmZQv8MDyxYHHNF8rKSFy9C7xgs1PF8qJi8P6J4pN",
  "key28": "ARpSwxYzz7fuGJ8tk474ZQQoMf1sJNCPAw7tXN2SiikzY8zotLeV13GefeRJSYyGEvoCwEFDdkLVbinnsMDnZLe",
  "key29": "4aoKAunCn5CuEHSqfnr73stJRSJA4rhZCRrDdanWEQZ8DntLfun64FJbYBkBQiPP9sfPvvjfLdicNBgF6BRtnHNE",
  "key30": "3qMA1vsRR79yVbreFcQjcy2Xruk5LS89S2F1HeACr3vynXkXf9vkVmKtsNTRquUbX1TXf77YHH4Kt49bqzWANhh4"
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
