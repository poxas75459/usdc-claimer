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
    "29UZArkVaBggcdarxcR7rygQysZRQerSpkPxQT5Mm5VRTbRpnqqxTh64zzoLKfSvnwULNhDC6RraUrPJpAAxQunE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59MaTrKXnPrfSzEuKxL4iX2KFqoDpK1ypN54J8ZB4LCf2z1kQBtBGWVDRXZ63hEoKuowwfg2fGjnER7HzUpAhWce",
  "key1": "4PquuwFor2p8nqpGFGCK8UwKbzHiowvjyng3nmreCPGJQDW49ZbZ9AbFcxdeFkQQU2BBrSPNKvsLVRRdBsRK8DSm",
  "key2": "5pYo7WeJnXY9qLRukpktoKwKLYQuDtD525r2GUyp2r4Sf5Re8PeWtkpqkyhEjqsGUVR3QuUTkBva6Vu13EvYM6rw",
  "key3": "2cH7JVEr5iEwcZYMfGyQMCKtFxzveobB5HxD3XnbS76nXoenxJNEsASUdDSEbs6gofW14AH99zfwZuo5c7WKGAQ5",
  "key4": "3BJXZxerVvWkcqdtDjD3WKna5yyuYydXyAJDg8xe1bsptRbg1ti87rBwdNZmV26ZrnBiyHNCQgDtvkB4CgNbfR7u",
  "key5": "4ptm4RmMgivsthDBbQcZT8mnfMfehthZR9dZ1P1qUmtEcVGdokXCA4F6JFrfrtcktHdtwEiMoSmHZ7bUZADp8UJ7",
  "key6": "4Fj1uqtP5p9fuEfJMuWH5AQAgbPcbgbh7vsHuJRF1SPMExGMANV8jJUS16p3a9gD8GttCxDCWSgjh88g6UjNcaF5",
  "key7": "4QitgR5oRK2vgdntREu6KjxdxuuzEPuT76asY6j9ZPPWC22bxrUHJ87MjSjdZQLUQN2Df8xtT5vHgko7o8VGjmRA",
  "key8": "nGHn2DzXwfcnJR7Era7WcJ2qceijbvTgWRDn93wAAw4RF528ofQEsm1Mj8j8qvMdf7CFWkuTV4xmMT5Xz2rFg3k",
  "key9": "42Mt5gPPJvPN1anBwVjByhwjz7YaoS2aUwUYUKoYzP39rcggBTLwrmm8qycuA79psurSrKNouqmbXrFAZV68YPa6",
  "key10": "2yNnsTKFSNT65wzBD7PbWBij3iopraSiwp389NmkeN6haqm3UyMHRdEV68f61r3PA5ATCrXkwu97LE5US3shpZTf",
  "key11": "3VyNzkvRnkWdyajACM5CzgJ7gsmsST8146mWMsW5SAkxR3YHYvTjxQs3YtQWkZ2D8UEuGThGuPb4xd8vPbKMKnSY",
  "key12": "4oRpvpN8SNoNV6FFFtDPi6eRWKmK3vQpRWeU6xekvS4CyH9Whgnoejs7L5DB92WuF9GAhQUHh6hawRRuT5Ni2WdX",
  "key13": "4ekYMzbE7VYC8GyUuuXJ1ytSzgbR585hHWTxbGc29yMq5AS8ffzGk8c9Fqv7eiL4bXfehz91fTWw69UvPvXqd2ZQ",
  "key14": "67Jq67bPBM8wBsZTw4gaebuWAcrc8SdnaqFmDnkPt2JiSPf7VwKy2TBXZ6SD9VXDDsqy511KeNXcCTYUcdyhQnu1",
  "key15": "4EZba54rU51kXXT1Mwcaj23b9esSpm81qDtchWPKsVVUXEvP5Tgjo2MFRhyMMhzUsKM41EN5o4DNkGzfuQU8rTD2",
  "key16": "5cKJzxY6agbiu8YCbA2rGhqCZFSivkKRBe4zx3oxrS93qruWfsu18b2YjJQY3PGpZbmyvyKgtZKPzjD271LgeU6A",
  "key17": "53jMaHLraB26keK6oqdrBqo9XfFNMR2zFuxHHnuVZyFv3E28mS5kDooErTcMLKMsnhT8C94X6uURrVmWx74uYZYP",
  "key18": "2Empci8uwXKddoJox1F9ubJyJKpAMmG5tfibXKYi7iHqcrm3og2tY2wD6Uvun7n9VK69jy28rrnztQa4hmV1P3JU",
  "key19": "3whPtvVCFaEQXWWGapDYKVJ8GZwhiNK9hZY6zBqR76jBA1TM2TQi7gMZXujV5kQiegUUMKw81VKMyNjd3VKxpNjx",
  "key20": "3yaChkeHZP2KC1iZ8sD4FPVrLN8EthuCRr2ZePBsp7rwvV9QqdHjcThjoDUadzSrFW7gk851oojLhxTEZwUgvQDb",
  "key21": "5LtAK3U9vmGVznRt4ZzH5paZ4JRg4M17c2Waf7krF4eczMeEMWQmLYunZCfWfd7i6vsPpP1JxtSutDBiup3rdBkE",
  "key22": "5ZrYR8aq5ujqLFgZp9eWhtRsze7bev1cTEbW2ywFAY8giMGT68EaGweJsXJrYbzWWFQrhSc8tFcEgQi4gT1uJmBT",
  "key23": "3cYWmKWAC7VJe6o8RwJaLGvQnyZoFTEhjZuCQGfGjAaTfWgFcZabV7qArQFi1Fhfq228vN9U8kLgTjRGcXqKHWJ7",
  "key24": "2op48h86v3FjVtNs6v68Jc1cFvKKrKKy5CeQzfCX33PbwTHs5MURM8RnYijDEMD7QYVjyxyCkQFqs2K8dhL6WwoL",
  "key25": "RqQN9uuo8qHb1d2u4cx2NNiAdoW2HFi8twRQgS8SZzeB7kRmDco8s1G8hbrrkWbB5CUBsqgzAJ2PUqsofTKqQkQ",
  "key26": "5EfjuaC45p7seKby2EKVC4fq9PyWH8r8zpwEWvT3Ysm1489btCG6KWhX7oKqZth7z8j9SjC7vbzqzfTroGoNHJiF",
  "key27": "4cJPm584xBcq3UjT5WnWnNQ5RbN7AwtmVLHBKuxCWdBm1aw2p7wZnnmzbhGE2A1f74rsQ1upR27X1wcSYVAq8jWJ"
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
