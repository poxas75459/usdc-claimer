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
    "5ERYPzkNe9tLAFHNJtr3ikVdUs6NgxA18BqbAbLerEH3Tk6HSSxEgzjtnp5GX82JUfM6gWDPbAAYiaGgvCMrDt4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbMaCx7TnBLAu4FM1YCWu5AnY4LHKCDCSNoE4KWVF7MHtN9HxosRgERCeB3d41gXc7kKMmaaBNkE39ugUK6J2Uw",
  "key1": "4KGLFsZHuj8zCjCErXNEbyjB8955q9WxrfVCxNkRKn2qsG7nzSYLqDkBEXAwZvrJRUzzhE252ZcwWXxJPrKYKm3p",
  "key2": "gqEDsXhrMg3TLefXd6RQgnajREYBbz4kdE3yixfy1kYwGXCCvxcvVd5Uvoyo7aYqWby7h5H955bgCUcEHNdTpgm",
  "key3": "4GdRCVk4FC1oQwd92naA9H22DGnVtPyPakxGU1HSs7ui7oajB91xUhhPCFZedQr2WQAs7V2Yqo1zQMwWLZp6LA9g",
  "key4": "EaduHWk3aH7Dz8kMye9DkTciSLsqSPpHhgPQG85EWWi7RvjYLKGpmp8A1oKcFV8o3DmEjPEConrXHfzB29xrdNZ",
  "key5": "4CwA3fdGNrWBgsnj1pws91JovDTukLgrQ5PsfV8p6zdgYyCxHpqXKYr5Fz1YKi36ARNozJ7nAnUKbWAYa4j61dgX",
  "key6": "28TFrMvra6ts6kXEAu34QaVEPR4CHuNkah7pEKJfwuQmB6g3nS2ZEQsRg3UryB657sf9P3FhYP83hRMESAXoTwbw",
  "key7": "4n2fD5C4k2FVwP14PVUZQLLv4KVRw1yi3G6e8a16J54J96coBeV7MsMSthrmUEffqrz83oHBHJpzyE6BHv2wVCE1",
  "key8": "tDC6ef3VF1sS3ASKtEnpiZcWdbRJHb9AkmTcPRuCXy852f54F6eippeArWpdPbmDN2ebouDBH6JVVAatdoaD3KA",
  "key9": "WNwi92EoEhPoT5pbTbsuKjLNkxNEsK6oeXYe9ejyzoS7D2Vixqz7ZVUcSuCLRJzDzhXU42nzbRSV9SVEcbDi8Mr",
  "key10": "4iXAf2D94A51WFDPLjrqWDV4PfLvSKofRLqmZwK5VNDjJEDedULC3zFyhLL1bnghwj4osoKVBz9Sfsr23U9PjMfh",
  "key11": "2LVosE27ZGhjXvwTomq2fdm7YGAFnGdesPqT81E2J6auWVyH5ADpvpySnz141hAuu277Hc8cdF5JjABKQXzM8KAL",
  "key12": "5ng7vux8MknuVQJzUt1RiaRHdiWNCUbtd7vkRyQBWUmeUZgVHTEB29rUdWotgURnLQvFexzE2SBhxFGawjuVfCDe",
  "key13": "4bHgmdXYz1R3DFpztmo9J7pEYEhXp8eXC5CeESfkHqxm6Cq1RuVQGfeDBrAvzoMZBfDv4vjqZZVxwK8Bif8dBN6m",
  "key14": "5JQqpndLpwSeTCNvk1GQCYvSHPm2jgC26nPkQMUFPTBjGPR3YpcpYBjT9V7yaXft6HDiiwdk6iq22XzX2fbUqxwX",
  "key15": "5BXXCDUVVzdgXpaWR2c8WGeWHBsDrq13HyFV6rZKrVNxQquF4Jggp9S9bU4oqUoZw5rVWr1S2AsghmjxNGDcPCPN",
  "key16": "3SbBLXF4iaKsrBJ5UjTpwTWUGLZEKxbacpjZimHp96BdZkEFvShM55N7QXvXXJPBr4LUrn1FBuGaZnQqEoQc4aqK",
  "key17": "2b6GuZBknrjPPHmqHbjSzE4YzRKRTDYBPDfz39Y442zdjVbsk1yDEwShmhbWkBkBJ8iKHFy7x9ZD1pxJCNqDX74d",
  "key18": "3smKQz8S718g8jqFQwoMgDCcwnUjHkRSiy65eU65ccpAT7sy3ECDgoV6naUJAo1Re7eaKto8tvfnC9VVSxzcftzb",
  "key19": "JQritVbkdwx92qEDtZhH71jrGw7WyrEqd4zE6aq3wcjtbhj1SBuzQrztSA8omRLN8NZ2MqyffoEEcwtUCQwf2rr",
  "key20": "MVCtwewz8rKYJ1VTFtrEhE3j76cACn5y2nVD5GWk4SvZdGrgBqKTJqSfSKPbnopVEyUTFNcJth5vJ6BLGXnBzLD",
  "key21": "3wVECtwDdtZLVQz6jDaEYBEcFtjPvygvdMKkpi912FCn2ajQDPXA9izFwiBiof81z8NCj8MhvrFGJF96jhYPXTQT",
  "key22": "4ApcsGVybovSA9zJGXA1fXdZC43UkdNAi7N3fzodKuom5B7N3b9d9ZiH5wW8ZdThKNoC9y2SRp7ZAdwrvQYMCVgA",
  "key23": "5i1vYiNqwiKkjugWrkCdDvEWGyjXGPxKyb7wa9LPtBcZXy9x9FbrqeHHYKCPP637tBcJL6YVhkaEUUie3XArjant",
  "key24": "3MKJtW33soBuideMdn43pDTcsdWQtkyHGszexibN3Ufj75j5EAGVkZiKQFuBxfnY6SNVTY5u9btd5C1gBwav8nPo",
  "key25": "2ttqYmQkWqyjRyDKgEMnhSapKzDE3Y8gv8exQgeTnjvwA6wrzJpHGVV4xyFaNhTpP8q7YL9DxeNXSP61vZ3pTzeA",
  "key26": "41Ea9Zac7jDezvA55rqM1zz7rqyDm9CERHtQXkgvGGycmTSZkVcGKx1gS5tyGZt7fTYc5PKxGuUBRzQkMPc5jDTj",
  "key27": "3fZuPnv1DUoWQbV36LxAzWdpHgrK7HaKGMuqyJPATwe8UWTTUVzyNZsHesCk5unLqv18ae4bx15hYgmWabRvnhTx",
  "key28": "46sb7a61eUwy2A4KEeGAT64NocCRqehqbme1Gb19qbS78zoHh8bZQgxtCF5YVuNTW2jaEsJk7V6WWmqpCDPKxT8J"
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
