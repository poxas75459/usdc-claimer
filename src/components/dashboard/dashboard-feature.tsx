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
    "5JCCVS91eakupZQiEj7djczFJHBJeTB77Q3YkpMM81m4qNUdfh5pBneFxLijQWMknPtRWGy3vbAPyYY9tao5RiEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UB54nTwiQphkGhnYBb7WGbkZWSpNnfreBWjGhi21rYYv4LacYzDG1e5zck9Km5dWsJuA2G4kk23FHcJDNx8u8Uc",
  "key1": "H2zF2BDL1HbXV159Ta8wZcWjyB9GcQ2V8aMbCnFC9whe6MTvJo51DYSPedA9WNhhDcPWT7pKTmesf4JjNbm8Anf",
  "key2": "2aHEARh8SjuRUsTAHeJ19fWfMPxfrgHxw3u6eDnuFoedYYyp3586HpTqrpUqdn7gPRt23R9k7jxwk9Phsq81KMBE",
  "key3": "4yPRi8o3eMMsoATL1anjsGRcXXFW8ajYF3N2voT5BHKYPrjD2gSCLYPaM4xqDY489N8jYd7x3enidnJzawHrkxzA",
  "key4": "qLzPhT9mW7g7KeSGrXYBNUyMMtVSijUpiwky2CFb3SemUx618P6AoQF9fmq4UAaNciDJyhchoKhEXa6nxxTimcK",
  "key5": "3y8F1VBEzxKVwX6kB3Ys6HHkWGJemRUrxUgEquE72Pn6qGqLowXFEUJ8aMUzDdWvQctjbvaQ7S4T8Mf7SybX54Ue",
  "key6": "F6Hdof7h4Vq7HYFnNdd2ttrPzitpuMna5A97VQJwntZiTmKDbqYskwqKPR89xiFnPiP4MXRuJHapVzHzHESeVZJ",
  "key7": "3LGb13ZKCjNQshL1fanKQBS3i6QnUXmnk3hxrEHwmmyg6JUdButxw4Dbiaf9tE922QUsTzZYbyWofJfr1Aiuqa3o",
  "key8": "iN9jaVcTrXmTqSv3wzRKXsrre418WGLHUKqKBaSUtdeRCSn6EuNRMXAiZmVrNnfgQLejNdLBYQMz69DQFLzLaPW",
  "key9": "26xr1vXqMKdw5AxiTnVNRobYYiUoZFtWxCPNSkkWk6ryhK7tWRmXJRu67vg1QXwSwNyhPs5GFgU3pLNhgZHETkb2",
  "key10": "53bv9KvusNoUkNBqznS68SDmYQ95wcSFj31hvt9WUMWYHFihkaoH4rhN9kmoZDJ4VKeguqcaLqzN5eQCpsKJ5vjE",
  "key11": "3iBgWLJVWtEY8jCn9EAT6JCnKW21Rt3GHFrfJsy5cXkV2fPfxenNajcuCftMyna7jAHaptdtXzXrRMSqmuHGYpTV",
  "key12": "2XDQmFbqRyfVhGE6uPjWM2tz45U6Smxcdx2doJME3HRYEtcPaPJkgHedxMb7kKwK8NrZysM9K9jqyFuPTn4ughuS",
  "key13": "3265RdjJ2voBvFozazcqzRMDwsZmwvMmZpBERahq5Nz4gmS6WvTL8ykAxPmSsWj6VV3QDW61TibqynzGnaPuBTG9",
  "key14": "3j45711BhCdKbP8n8f4Qhh8wphgeF2YDvzAUWcpHoGv6LgYkChZAmXdSCS1BTytTxSa1KwwSFkELcz5fx6BdCuUA",
  "key15": "57WvBsKgvFLiPQdDJzQxVPh46XKSuZxHmewQziZUbpNWDhsbkGeAjPFe5v7neoF8KnrY3xxysJXZpDN6y7q8dKPa",
  "key16": "cN7WMKF5qJrftEMbmf9xzt9AFXuiTxqB1mRKPjBH2SXkFdqVBMmrQQffmi6CfWJG1v4HozCkVrANRkb5XNhbxaf",
  "key17": "7mMg3Jgxa6jDibztWcPF76eyfKeGSqM61syppEW1w6HwuGd2Da9X5jhaVp4xM2CN5hkDHZT5Km6nhF3TtnwFBNM",
  "key18": "2x2xDcn7wRfTK1ozVofUY8WxPCC9XqYCJfpu6ivLK2XmtrEGE3SrJA4wxPTQ2NuNcLvXAewoeSX4vKwmJxjEdUm4",
  "key19": "wVwDSB4gSwtUAcqbLcdu5JvKH6y1ATcFUscJPptsfDYutYgDFWH323vUzywdLypdjTpfqtgG4dRqnRpHTNB7H8b",
  "key20": "rrvRCkcCZar7vvBEdd47deTSqGAxBsBJ4S7sMJB6jFPYFquyepESPDTrFkc24gn84GuVuQW2sVothyQLqP1rWhy",
  "key21": "48ZBCkxTvNkQ1QzuM5inHM9YHamftJo17Cq2Hhsck24cs9mFHXDxEqGe9U7T6aDaN14Z81Y6QkBT8ZaqKMzcXihL",
  "key22": "4emdv8Y8F41Hi7yBv2sX1LQW9r5R52RfnoeBLXpPMEMxUVfXajUvgzjTuuYBrvT7xUop9nAPCC4esztQiHV5cVsN",
  "key23": "LnxjW6izg5Ncc3WN4UGPmFpbHvnYLta3mnKpb9okkJZubhgbX53qqxr19Lvb7okGPPWRSvw1gakiNcTV4jqedaP",
  "key24": "7F4B1EZeYXBzA1RCuBqeNsSAZ3stgSKb3PonXRsooxoLViSgLHwFSLJinqWQgtVQSQkpwkke7gG5E5Bq5fGKZ3b",
  "key25": "5LgmetEe9DrdNHZd6AmJTbzLzPamJpVvq8us4PswuCChdKdhnZm77LtPXBRq8rULjHpCPK2bvw6yz7BgqNgVXy94"
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
