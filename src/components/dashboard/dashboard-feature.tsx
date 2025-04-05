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
    "3p6D2yReLfNxvXJhWZssZDh1QToLjKwsBR77FCyHnQ8gyNg9Nf5MaPZSUfAAEhJ4PYyC9fVJCgGXFBtwFK7eqjnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFsSTji7WBKU3a3UEAjw841dttMtMyK1ZLQPSHG4gnnuGneeiFUszwe3zaSH473FmUbURoFuGJw6hQg7BHKF3hP",
  "key1": "RrMj8fAk3x86rTerH89N9Sgy86GnUowb7dBJrJNCZxD32aeofyKdCnRKWvpajL5s2FtboTDLmzTfMYrNFxJn4Ei",
  "key2": "35XNT8fBu8ZguCoAozuFvWGcnpkPCq1HUE6hfXvpDSMoBJYs9v7DVWzWXwxCGZNA1B6ew2BqLTPLAThsQZUd5Um4",
  "key3": "2YXJFzrWmWVQfMY6AUpRJSSS76PKdNrRQUdCt4Wsu3QiwHUz4d6xQV56PPdEGcCkpYVzZ4EwuvEWmEwnBu1hPvmr",
  "key4": "2219ZLW111rwHLn4woQMN2QoXFoP6YZSHZETUKnnFxDtBxfC2YXKsVi9jQ3BmSakxEgkyMKWpujnPFsoEw6Qyaqp",
  "key5": "ygRz4ihXsFA8KSBfQpzKvZhiPZmjwkfomfTRrkSx4qYmdJ5mS3RGpsR4dN9Pf6U7eYs4BRqmbswEKFn5LM2SvMf",
  "key6": "3tyV6ADoNiUgJ3ffCGuahDKBHczxPKdexNsUNU9ninBzSK41R49L3GaDw5fyT7LLjfkubJpPwSTNJThdGXgfoaBt",
  "key7": "4gJ8fvnvcDXSzNTYMEJ9VqZhJ4Ls9Qg3yp4nZzDVR9WpQu9Jot3f2uw4UAj3YXpzfgcBZ58sQvFizUEvs1Y4gdk2",
  "key8": "3JDd5gLRE1h7mhEiYWoH62EWko31rrbJfcFUompwTkYto8SeQYumNuNhXUwR7fdWY22q9nbDsK59Y3KEMBsvrhJn",
  "key9": "2DvGiSsFqC1a2VrnqtHRVyXcRYW6whMyCdENfiy3wMZTQioVTEauyJ9nkRKi455PJueaUyp2uqEJXoXcCtBAuKCa",
  "key10": "4hqXzQ9cFnmAMchnGDr7p2uH2PyAx9XyUzi4SsNbCNN3zRyLChr9AptpnzHmMM5btbkym948xedkoXp7F3ikjBYo",
  "key11": "4P2g7pUBz14HBEw3v8HZUdB8DSowfp3sPb5K7Zq6jDX8AJGVcVCxN3z93jnHsEbG7QVbteJmiCqF2UEdpcLN6gGt",
  "key12": "3RXgivMcspfAzzp2mYAFc3JRRJQPsiKinyf17UZ4YbubDKzfTQaGaEVUhBWD3AvBNbarVfuBBdjSP8mq5rtoXeyG",
  "key13": "PfSgrHVBZNkQxmmKvF7x21chYAotnN6aqsxiy1nKdjc5KqWPDVDRvEu3qifgE4KMjkuJ6qb1DQyUvgrVPVsmA7A",
  "key14": "2Q2jiqT7ATRyA9dwCRSZe8nVy2dKD434qdusrrVTJS8bkhL9pjMWiwEyf9qzhCbZ77KFjAg4aNuWaJDeNxbWGD4Q",
  "key15": "4tMx48k4hHubcLbWZHpoMHTJVRg3cDbVCx5H59m86rtJM7FyxHezDRTbXANpp2J1i8gsiy38jwsT2nprDYBcKMCw",
  "key16": "EioWaM6AAAVj6eQN73B8wJWwwwpXryYJaL9xcPT1BodVXnfzj4BWhHzKGKDqTCWYcmEok2L7UGA8bycU5k4YRxq",
  "key17": "5JMwSqWNwUUqKna152AQLVGGPVi81afJ4Vp89uU4sKVCdKPRguMgpKidGyHAamAgEnsRKLmec5hpuqo7wP5nNT9a",
  "key18": "5XAJAP5ev2GEfeQRsaUPhVSprXwsB8haueGu47JbWxEs8KFJ9XDFgHEenoUsvzHm2NnAGsyW4GXMWEN9JYzCc8tt",
  "key19": "2g8No7msKpZ7VoaQtXdEMiKXeBmZBK96yeMNKK5ZXiXFUs1Wxycutbhxok1NSrnbocQmFhpB9SMS4q3tEgho4uHC",
  "key20": "4EvNvakzQPcLffNPW9WZ2GedYxukDLcCjJsF5BkfTbqMzL7sSueYAas5PfXut6FhRVzkkCGpRS8NhQtGHiS1J8Mo",
  "key21": "JkQ4SwHMMZR4boW9zDMXPgEsG9snC6y7XUySUj7KQiCQHTNg3aF2gLHYe1HYTsFBgRg1JF3B7S19o22nrXhZcTR",
  "key22": "4o6xbzJCarzP4xjuEXbs9JDJEmjva3sYrgmNWa8T88xLvNVfcjUBLdSfycGHsisiRs5ig9S7kqpfB54jjEM2CoJ7",
  "key23": "2N9M3VG41KQWqvEhFMB9asPChtCat5LC31BzY2KSqrAZAE9GkKQgcaP1BNfzp3JTpkiwDCxnTCUUovVkedhC1wDM",
  "key24": "Ejxh12DW4vro7CoPvzrsiU9E358wdaXecWLDpphKhoEuAbbUsej4F78byKHgikkhHE2Fh2rNbh9XEVnKjqo5aK6",
  "key25": "4dNXYELTwwCEkk8tsobkNfscMiv8VisDoXs6PgmcfXZKQsrZ6PDKdjB6hF6bcDNRty3LBMzsxwezYbBTzFSsnKSm",
  "key26": "2ime9R1CTbNLHH3FRLzCCtBwCZjx79ayHL7U5L8pH9uekgKiy6QPQcvBJCH4nwbmT5E3HhZoKxD6Nx3s8GyRupwZ",
  "key27": "2cU8ZyNpi81RD6WB9zAkkZAVpHpTwwKC2WQcUaQaiUiywAhCAMVUXSQ2CG62NhuiFACGVTAVrT2xwqS6BEYtYkoz"
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
