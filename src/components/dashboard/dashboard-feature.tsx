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
    "fWzfWG36uMPRCc6UEDEdufSFft83wbNp9hy1TKTgv6Nr3BsU9cUpeGnXvMPm5b6uh15tzz23G9NgRdRkQ9V2JnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNx4gXmv8JaMjD32EenPrJBptbwew3DDWLXqjnPas6sroB2xPEBGS9rmJjge2Rg7ksfMtCyqoLavg3bX4dMyCVj",
  "key1": "2aCWNnLJXuQ3hYfqx9WvJBScXQxGzW864V71L5knNz6Ezib8LWQQ3NFrayfMV8CKpsKrDTYCy9bZ6FQQgyijtYnK",
  "key2": "3XRyuRmwnPq4nvF9ftPJbZFLq3eXvhiZrAYnUYE2QmtRBGHfxqrjZK3bFNESvTHuHGgkK7dqcgH3rGxfWtjJJzQv",
  "key3": "dGY6ZwfZAHoMkeEUhUoZCp7Hn792PPjaBSLxy3AYmpUzY8EwGNM5EfuU8D7u5V24ZNRZtTCYuscwmYfLwMrUzwf",
  "key4": "2amnecsTYbJckW8dmdE7HCfYK5PdS4YiuWzT2LUv9MojsGBMVi9FfPg899Ev7apQkj7hdhEsAcQEvm6UzcnCPyvF",
  "key5": "3JwBBAdaenmjJy2q5TyDh7dY7xbCJFpPm2fJ9HtjmFAJCAhAAQZLntR5ptpvL7sdJAAnMqcK66pFxRMyJuWoDRnT",
  "key6": "3zbwtBSQxbBxZqRTkbzAvfJUn6ofqJp19t5Eu9MFjZ96JSNSBvcx9RdNZHN5a7bqPKxwhAA5npJhvjDh9mPQoWYp",
  "key7": "4kPL3xMAyipZ3YYoC6sLgkvyPVFNSQ3simZunxjtc4R2oUpfx56rooQtQUzfeVVm1iBu1BqZaunAvmh2nGufGvgH",
  "key8": "5kFveJQRs9N8MjdJ1FCmedJLUUBa6jhdRo9G3gKdKvWbRDnDJJgs3fRibeT51Sq44WU9wNa4JKanG9K3mAuKyw2i",
  "key9": "uw5DnpTTfe5xPn8PpeHjEgt1MYHi9mLLMfrUYcQBukWTB8jJ6QecJM8pRtfoLa2gWrD53MjzYewtXSkuYDqCPqe",
  "key10": "8sp9s6e9En1HiV4E12ALrQLEbmQgQbRoGx1hoeo6WrubBmeSjiTJt4ib1wj7qg4biWo3hW56JyxWG1nPNDPHLWN",
  "key11": "5xdczcgUqdt4FuNtWZjQnTqyT4eqQTzhft7MCH1ZK25LXsRqYQXdh23DEH4kUkAuL81WDu6dD1Zj9cnmxXAk8TcB",
  "key12": "4SkGtsZzoUed9fGmdTu1NrRth47sv2R4KbVVnf8si7Wemcm4XKvotDydyGz7kF5U4LWKsuFGR6Wx6bBNp821kUeJ",
  "key13": "K4FJycNu8YXHsGcLpzbwmy4gpJXpxgMuM4vF3R7N7A2ZD4DwshcRKraGdiLbQUPQ1jAudtCxMPCt1YFTKKgear1",
  "key14": "5zZ4BnUNqSGSmK7twMeo8vwP4DgcpHvDL9eL7xS4XiWGuy2exRKZUrMS7j9cz5uSVEXdfinLrtAYC9pKhDwkZ3Kv",
  "key15": "z4qdUVqV7vHbDZHPxwV81nzZY593yS5rS2L1VWBygSzd5NFYvmtwwUVeMCbX7sMnMxfWkSHkTngrVXHrgFNcgzJ",
  "key16": "jqh4jpSzadz3HxagiGiB9zFgYVo3NdVb8dTaTYQX8gCxCiZ7cBMtSLkkXYA2yHWBK5eS8gbMEzxZHud5U8vZj5J",
  "key17": "3sAR3wU3cFuqdPb9rLUM5zdtZZePMkSDzdRZLc9ZrvwU7SKZkLQRtcZ68P6yt2izri5RQ3kBMTMVS5QnQVUoDXPV",
  "key18": "3B7kDMvywRnHcy4DscarsgZaWdVxkykLk1RskRsNmHgnYUmc3vj5jorat9MvwkvLZQiC2cbVchh362e76wfDo1JH",
  "key19": "4SsiDXmp6EkYwcUo6RsTLZEJi8bTCpshbfhGdZGxAMEiZwjGWBJUbZraMWQfxkoPZv2bjai9yXp3iuSSxJWHk545",
  "key20": "qK8Ux1TV58U7F2qESQeK8AbYnzS4EQswqVGYykfFwZ79dz6kjFqaqqQV65aimUZ4Cqr7TZLagdfnXMwPKZxw2pn",
  "key21": "4NfxRknyFS7dgY4pBfvj7wBafdsm51agbpoA7VEnSmbPU9PHkmhXGzgUBr9e52GHf8pQcw9D8BbugZDLznavYNby",
  "key22": "8vzW81U4DfB2FGVZ1xToVMtKFxXBzhQ4zsQizpF5CVd1Yqvbn82qKUESAk22gdCXJxCwYRgXz8RD6CHHNuXuyjM",
  "key23": "bKmB3E9gsN5qsHB8R2UsB5ZpUMzDQ3B2v5f5r4JPkEuQ15rxxhFWmJaGxSTVfmbTNn923yomH8LKcoNuofp1rD9",
  "key24": "128zopPXyC9uC7kdM3CgXME8WS9eSzUWhYsqsDPdG8daGYx6zDJ3Axrw7zxsFHMra9r6QpktJcyAHfje1JtJyXEf",
  "key25": "31Byvc4xwWc7uH9D5AqUkfzrd7BZhYAcmew9Ntup5kCsZR4TiJjmzRsnEZ9JgsyzsPXfhFpETgsFhdiqGtMzCgPj",
  "key26": "4ioRN2DQFe3iw6SQXho26VujzAi3GyKBH7PGfWr6TmHCLLGSq1UZunnxdGygoykrnXbmKbYyqzBgqQjM94KBghpb"
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
