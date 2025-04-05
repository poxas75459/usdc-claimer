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
    "4KCfahT7b67LoC3cBe9kqDstbhSUJ35ymxWKoJqnAKxm3fUgqdL5tg59QdHybFwqdfB7GZks7GN1549uEuurHyq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62752eJohu4UDFAkYcqKY15cghojSa3vzL4fnThRY8e128RMzeCUb1YbBsJUVAkTmtz4GtNNPYHrh2dMEiDoc3QL",
  "key1": "2edqo3LZzwRx2rhUhU7VXgXEefVbzit5JkuuTYquJJJYDunzUeYc3ZaZMZqs5GsikZBqZkU8pmixViuZiMLrewxP",
  "key2": "4munn1KPxcAziseJoXDkuYqx24RqkpZ2jCtWfyVFbmroHR8pe2N1DfQAA2Gys1hswnY7MD3rN1SFjfY9kLzoCPoj",
  "key3": "2zHiXNrumPPtuwxXDKUDLZZGXEk98WUgrnz3NYmgY8DZDvGJb46SQMys5xiDJgAnwRPb2xt8D9JbEE7Ynoq6eQK1",
  "key4": "ffPjtJEtmbt5SqKXDxfBkHaw4oR1yy1LpYcqqzn79GBRcRpgudiWzvmXt7L3U5zkH97wWxaHYGsCt5CD62A5jtT",
  "key5": "4Gbe1UN2fvNne58mcFHf9S8VXrpoZ7wRJ7DwSmKffPh991wjwkF5x7xBLD2iEnCo9ksAEkAgq3722xrT5P9AFKH6",
  "key6": "61ETVkiDZdASr5iaACraAunEJbHf7b7yQ5yCLF7kXoKRn1cE7g3cZwj42FaWngL8tL3KtxTKEs8s8JT5CXqSDnJV",
  "key7": "2kwz6XqBCVL4zb83q5wKwDsiWUdhrmz4tAvcwnzwa21LnJDfvBqm8x8wHFEP9Dok3vxEfA6N3X7GYsdYUGM1KHBN",
  "key8": "5fGTBcbxDSbwEifbpxKtUb9LSbm3MkJMnarDsvdZTqVkKxSURFzqiay86jwk5mzZbg4mmRH19kKw8qfNJRdRmiib",
  "key9": "5qFMLEh4pveU8hB5n88C8BEsoNBUnuW2RjpQrukyX8M5kv3co2PaWDXTyeG2hDPNJ8XZs9ewNgcyoCu88VXm81uq",
  "key10": "4qq5TE4nL6QdzdqZVTovgGQs6u7cYfmHWm9tQuaNh48sBgKoV2cfKdkcQzFu1vwN6f5Rg4PHdxx1dJzR8NKJPqYK",
  "key11": "j2hskk9SqaH4TLa7MpHC8Cw2WCt6o5VvEEvrRXzXDuXBtnZcrYmLzdTNPP3JXspmzoC1Ax9SRFgjs3dpPmRvdb6",
  "key12": "5Cpz9t5AfUSXkxAsFVseLiTxEZ7NvMtnr19qacdk1PDjvW332KBi3jDvtZ84bTWGgkHahTcxP6CDD8TuEuiTjvW",
  "key13": "4PjwY7TGkwhVuN5EmktbLJoP7hpJk4ET6twUm35PoYBsCRcQdEkZHroSBDtgw46VuCf3W3CFRG1ADe2YcctLkw3E",
  "key14": "2ZzGhnvNjgThQ6VDePbP5p6S6NcmqigfK3JFWgicpvL9TvcYM8QbDSMTUBa45s4jEfZ9VRwAWhT1mH8fKt59qS7K",
  "key15": "3uvzse8Dkn7XVFumwrVgTfA7MVWRt7zfxAaUPJCS18E5HEzEPGQCqbsKU1QTLd1zBamrnCQxjbfq1FofRDsAGiBx",
  "key16": "3zUFr9toccZW7Jtts2rwLiJpJnCNpdLYbShtrXVgQf1VAEE5a4QjYhwfQryZdPbLjZbQtSgngSxtN9p8Zt8LjidS",
  "key17": "5LyQNmVtjFaXG4eqgCCZr13Ne8yzgA2xM7rxjzSxaDbDE9AoUwehPbptfcxKmSGqwT9bpWMWL6vXLqKtKRn7ZemG",
  "key18": "25Zh3pGxsZ8hmvejUrkL5LAVnHUJgq26BQtBu6yYPBZz5cnPDKjtvo9uoFGvd2iDzBAJsboSiuQT9dgy5KC6GHdr",
  "key19": "65FqBUtuvvCpBogXSf45FaZ8HivLHGdZ72b2PashMFaC3hTbuj5A2vF3xbYzKGx4sdjbsCqS5aantRYsrXUSpMko",
  "key20": "5W8RtrJG63C678FWAvDQP1CVLkVF5ZFdmHD6appbGj5SbLKveeUn6j4HUdhQq8sGtPMCADUZiPtUoNgHLqBEoRq",
  "key21": "4WionThbAqaiReRpYiZ5BTpjqfoDi5YWgChvLJsXx9KQsHQy9SeSRe4Nievi2PgH4oLFW456KUwgpPxNnmvE9iVk",
  "key22": "5gpfZuBqJ5jWiBnX4XEP6Kt88PpPed4y8CxQjgsZqKSvtUPXJgCRGXY2W2ivLCBgozKacKwByeBuwEXtuyySAfxn",
  "key23": "4EVgFsxqQjDNatxgaUqAye7GGX6DiAMGowTwWeDjY5hwVMjEhDskWHWst7APPNVoSb2XW5hpg1KbempNbyYyyyY",
  "key24": "5m9gmoxB1D6Pecd6nmaakCRNnnaGSirko2xeKazp8zpCYzAHxofou9sCnxGgmNiWgqYYacEzMqNB7VqrRAAtPQ7M",
  "key25": "47PRw8ZwXTjkYtFPt478n9ARvWJwmKwN1zs9QBwz5GMwb8wPTCCPrg5AnRSMUdJiLXDL8bwPE4NtUJ2Aa6qM7jX3",
  "key26": "unHUMG4BoqgMQQgETRabDv5JMBFc4JPVhBZufv3Z1LLsMckWN7tWDvbLnvdkrWqxQtbPrgjffE7Xo1tPTTU8iXy",
  "key27": "5PFzpdvTPvYjp222CK2TV5436TKYSdyg3D96D2ScGiofDiXeB1M3cEhfwqGnUoJAKvMbrimL3ez8yvVSqVwyfYyN"
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
