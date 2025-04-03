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
    "2Qu7eLvqPKPqKeY9ymfYVvfXj9jt9WaiMxwU6Di2aG7vgRu6CTFtH1Q6k5bS5VCvs3KJTC5wnNiAr7NTyHKL8Jg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XY8ATGYnUArcLRp6pZHTM63M8Jk2TEU3cT9rrASso3igB2zVLeKkeLkKVdx1CwXAaFFoRvzDdQ87caz7VnUv7Eh",
  "key1": "3tDQrVsqCjWrs2JGwsxMTfjvdTJWxomVoLoAgk7uSqeVVJeh5ujtRDQU3oAAoZHi7QkNRjYBhMLjVDz3NPmfpMhR",
  "key2": "2ZBDRUmw8CThUqFQS8LVcSftyNa9tN4GQcwvt5crPxLLrX6RJiz2YpHxHhfz9WaNYq6kV5SbefFiDG8UBxpAz2GX",
  "key3": "nMpmaPoG5kTEoctaqTPccDW7vPxBAuMS7hBdrDWVyeXudcgukZ6J17Eer1jhi532LPYwR9n8RP2E5hMfmCAVgf4",
  "key4": "fb9KHP9ueekoviJTdUJdCLKezBpAMToqAPqABPnYjz5GnyAHJ6pKHaCyxktmXUSKBe8h6avLpmhgqV51kXzsHtW",
  "key5": "4YDzqYETsxSciuc2vw7Zjy8fK9u99w4WwtjsfwTsFedAhLgobQUeJ3DemtMTUhAg165qQuwoJEPMLnrC5fbi3CmE",
  "key6": "2D6bmqZiYneRas6CnxRFuUX6P7T2brbBvp8DZnm71m8QRzhVNmnjBiANrJBxWy2TtHPwDkrQt7Ybhb6kEADdDRGK",
  "key7": "3Qb7JMuQmq3CKCGWeiP67qfUhW7tA7AHJcG3iw2afiCSDMrkYxhT99BdaJpk3sUDYHPVU2ermQQoV1YzzKXujai4",
  "key8": "4EkJ2thcpaXsVgtHYYxr599uyc26WspDNKDngqkF8efd5SRXx6L9eFdpwrtSbes63hUT6sfJQKarKYyuJrPhALF3",
  "key9": "48Y1XpwbvYG3stUwaWcWBwQ1J7PqVAujTXUbHBR3TdT8ouutdHPJxksJMPtjkhJRWnMUeYubbm5RdrVUQSwwirZ4",
  "key10": "24hBJxBYDsxoGXCu8Wce6sfjt5uLFmRd1YFz2P1SKgQzBscCAnPxBXn3WKYKECUGwEuvBbQKFoCDYX5ry6NkPV7T",
  "key11": "5jbdFtxXQxdTeujpg2BzSmRCQfXKd8CfiooncFjPoTwe9ck3e9xVxkfAko4NuTr7GWwwKxCA75BFbjR7BAuMmdCn",
  "key12": "2SSFzxx2GNTMVnUx6ZtJ3wWPdy9LjkzKckeoBenkevsJT6ay3WHQLk8YqiBpLU5CD7mXez2Xi3g7ZjEE4kcTLvwG",
  "key13": "5djb1GV3v7BporMC1T99EWVnEj9QZxBCKZJSqvabCHusCiapsA2cCbpNyFiUkkxbDFdu4Y5PtivyPznXJysqRVCX",
  "key14": "X5SRbQpYntHQk7g8p2DUJxUAgy5h6svBzxj9HmuABXwud4ft7K8WcVhL1ChcPvDo4TfY5EyVvMRdJBwTKbZsLmR",
  "key15": "3stuMXsvWHWmvSoHJ1jpGQLkbvAkf4v3VyBj7GswV5rPRDrnfkyKDayJrxHNLcLnw84vjBKZZzbUuSaFJ7eaQLBn",
  "key16": "pmY3zhi3bjqzTVTptBPBaEWPY2kYzxXbsihe8Q4AU3Y4FLQ2gFwHsWG3kSHSdDV766Sw1Qnqri9WRm9AgApCdP7",
  "key17": "42sdbn9M6mEYbjdBzNMEU1HTvJ7mUEef8TLFBTd8QomYYugssJLbQYv6cbgNaSKhjNL829fsH3hTAevfFmyyJp64",
  "key18": "4sEazUvfxZrRAuMQ4nY8Ervcadq8TzWEWhCMthMtrwHt1yyXggWk9zwELjuU9D5Lq6DTs3iT2DjK4mdu65mYUzzu",
  "key19": "4Vp4kCGUt9PiZpDBHMtHAtfVhHeN3QboPkMyN2RiKdUdbJ5iBvS8VnzApSvTCttDpTE3AWGfnk5nYFZPDp6KvE84",
  "key20": "41hHu7g6odMEGj6EKYTausrs7USagQq7jxZHvFLmPCKbWYF38ASsX11jg5A4ouk2qKU5PGyEQUm2DCPxfvTcKpYX",
  "key21": "3kPqmyW2vQomkQUByy5rc9Ni3jcdb9z6ZdbutLPRdL5cvfbjvee4oEWZX4gKHdyCGEdTWzq42vYaGUbmSGYpM5iY",
  "key22": "2xumv8Q1aoXjkDRskcATTLJphSpySdX1kmFYJdMv4cuxS6PuqKY3giLV52JopQEFafcg29NXcG6c3aaavvuyr96X",
  "key23": "5L15evMVwjVFsuWgVpzHHnjrRKTjfimC46DSAkWfvKEoUuTagK9vFxiMGRKeMifc2243KR2wP8qroztZDTWY73rE",
  "key24": "3Qaw9eP7DLzvArP3pbJhEEeqTsVZyRrrGMiqQQcFYufs82CS5h54Au146nqX3Erb3bsKa6HfFUVPqRoAs1AgYAmA",
  "key25": "48wPp56txCGU264sgfCvKeji9y721hLqRSKD26sjzepENPiJbu1Je2Zrc34juHyd3nKWpJQkwwwZUVcecBhz1Drf",
  "key26": "4Eb5aqpLqPDMhQiZMVkknN5xTgHibV5TF5qBLvotfptp2ZpuyTSPNLYQVrPzTw29feCD1Rsh3zHTkg1NsXvRcyRm",
  "key27": "5NVNspYB3MHEcU26F8tWnyaYbyRPY4hQ2WU64gMEpyJpLZJtNfDf3Tc7uJZgeHRYi121ueb98QcgA17BMbJy9UA6",
  "key28": "3NZZbq8kRFmWUuz1MsB3CuedM6dk1p9TdCNU68mC7xSqwXqNvQ837RwaUkB4eTVM9KvyVvb8FkJew1y9PPovATcd",
  "key29": "tHR6aUxe675uTiUbZxs21BmC6k8MzXzKfnTj3F382Q2XEZ1bNr8ZoTzEevwMW5vFRN1DoUMfX4zXmvJ2Ua89Uyh",
  "key30": "3FmCw47EX6HsrBhXbXBU1qazMkRvFRbPNSV7TKR6As9cs6fjdZyCgSAjdnNxR36m1dfPhbp69vKsK5psbDSDZJSQ",
  "key31": "5J7mhsK5eninnQHg2uMMgoK4DTVitD9HEwX3mt6a7d4QvATPxyaLbHz3KXL7fGkGxd2WmHiC3uCFhUchRcN5cwgQ",
  "key32": "4jC1z5cSXMJagJirQB9Mtypb5gks7YG8tACzAvnWGvw8vjxLUuVHdCZYwiiz2p6EhteTj9prVz9Lj74y9LYHH2qn",
  "key33": "2jhNTizCHF1RPDonF8qb8SXdxZDo4G7n8cAW4xbpesyrPkwJvFaWFbxbybaCsVKVRtzMk5P6KvHASAvCSkconkCF",
  "key34": "5fhKdp8jXo2nCkL1XrAas3ZJj7q9ovMFjs8Tiitz4YDwtihtkaki2pyNNfcq4VWyZ1ykkhcPfKN8Qjw5foKBZMtj",
  "key35": "2KLbv23jgs6tyz5uR9pdjDja55AQRzdLp1XYwpteV2g82i1gg73cWxJ45XgfpBhMJu6M1QhKQe1VWuLdPz38xpw4",
  "key36": "2Ayfq9AYwkbqnL2HsCiRnPjtwmgXZ3aS47f6b7ERkQFto2nJcf8op2n6WmFNwdybhRwZLG57gMB1CdaCyzmaRZor",
  "key37": "4SBBfrQRJEuGaSFq335z458GNpzSVMgx8G6Ceb1Y8YaLWEnbMsWNk6JE84rvoAPyDNy3CfvyRz7J8AziZGAq4qJW",
  "key38": "4r8eoKwegqstR6J4aZMtSachNfmGjVpkhio1zMpbZoq7u2gXKZcR5H8zv6GCjUzQsdwSbQpc6oaqcMDrVNNavJMn"
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
