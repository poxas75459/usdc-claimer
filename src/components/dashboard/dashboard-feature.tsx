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
    "3KofMVnBqUJV7JZo8zBs2LfuBURnWowBsqtDFo15cJdGmD5Z6CTS89otx8wu4rCztsbB732R64bMLt3bAHpYXixe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpkaDGj1kxLT1hhXS7rr4FiT6E62XjrAxCqfg9hMzPxYPwPzzU2k48sordEGeaFTZeKzyvmpFLjQj82itsZ7w8q",
  "key1": "4My18Nqa6obrYajrL7wGeeHeP6foeuyVt424c2ribXwAryusUTK73VKxysV8R9hhLJ1CXG8PmqNYaF5Cw8Fs8hrx",
  "key2": "5ikQcdG7qWcKtgU1rVXHTbVfE1v71HHynLHMhBR3MgJEoKVX98MSrbeNxpWhYrdWr6qj2btPZo3tps6jkmfsoapo",
  "key3": "n7ZbTpLznJL8QxxgAFifF3N9AbYG1mk5g3kdqtKWvryVeM3sxXgENvW1F6vgvLStmEx5qDExwfzSRbH5uW5SUGp",
  "key4": "v9uEbEiyLfKzzTwKKVikH3WyhjbBndxytUbTuoJ8d8LATJ9EMzmAzuK6bbhkZ9NVM1zcXNj1KKae2qoHhw8YBJH",
  "key5": "3qQc1Vxpnsxim95HN4HQvbjcdeWE27TXdbE4KDnAN71y3EW9DW7gjKit85svQWPmLiGCNqbTVnmf7pSNWAYBTNqs",
  "key6": "ncMkC8bCcTnAPJ5NVpjmB23awyyyXmboLzDsG1iM9mzgM7KYaGSuqMvz5W8twf5D6iJfjp648q7sN5xx6XfVfBb",
  "key7": "Z9NkiBKgYARJQ99Dwk113fydVJzRMXH46TkWv4tzp1qQK2Uh4gzd6ERHrSXf5gBJuzjaiaZKeXoXAVN9bE7uBr2",
  "key8": "377pFLUPS1iWaEUTesyYV3aJ7A49Gxa5HiwviUf2RxJY4bB8SMWcmw359Yvi5bx99gKzxtU954G6M55bcPyr44dr",
  "key9": "3ZitsygAPZy6m7V4Qsuyt1YXTQA6acShZptTrhx4jkUNxQFVPWvdzuCj4e2MSaCpAvoteYa9yXTZDu55DgbcRiAc",
  "key10": "5rTBQ6SscT6WpGAv6J7RcFgiqoZdvsVmZYBTPh87Zwnu5aiL9RY84LSa8ekT8ayricmxcxJUEbzzap5kjBGZjg1y",
  "key11": "3TtYiwus1jL2WgCBayxXaHvfJBTrUTeihbiqsMA8sAL9Fo8AaSfZhvGoa8KYer9rUVttxCMaN7L96obX1mDnVAzy",
  "key12": "teR5jwKQYFsdC4sSvJhJVDzPnjn3pPonwUiWurtKVTRHYKTAZNmDy8eH1pK7aeXCPHSDiKJ5uNjnCQmuk4KMrSf",
  "key13": "kWYpMkYtUxMYLwPjotBqEDtC4CbNzt2yFjDrKQs6EpTTGXxF9jLb4PgqYyFo4HSgjVLbHGiYxvMv61eq55CVi81",
  "key14": "4NsynJwi5r84ijiyZ7UwXqLPvo3giDuocVJz9eARhpXu5pGpNepnW9iqENnvHzwuKZsHkQfmuuVMkVhhcjhFN7qY",
  "key15": "44K8B8dBHVW9vNPKUEo5TCC8ADHC5zJ2c5vmN48godHswxZiEDDLnzxkgp83WJ43Ch53e7Vf4cEBr3DBo4uxGQHk",
  "key16": "gWPvYYSLDzHx7dukhZRtF7bv4KD9Rw8p5DeBjoaVKUvmoxEko3qZgsj3VYEAgexxtrbdRispoqScrKwFZ6Lyv55",
  "key17": "5WTQS8TvseVPQGvqRSE226VstA6g98E8F7qHAbZs9hUKamAp4isVMPSBfVvZMnaW5e82Tp7QdGdJebR3gAToz8Hy",
  "key18": "5B4tAZdmffh6ZCuTAuFootDZH98vJ5cnU3HxLzYs1cfrugfkvVVpsBa79Qo4QyDzrqFzYFicZgrKKKZe21wj2KPL",
  "key19": "66DLnvfaRu2nnkf7WQnpNsYSaXEKks5wDMpP8EGoovrePk9EsPN358AofS2q7q6nhESmaJdX8KJoXH2Y2LbnkmCB",
  "key20": "61WQEpKTBYKXZXd72wbvDZncNBFRRBjxHq2oYiF19bo6q3REmhBDaMKUpNLLf4WEAQmB5KrFn3RvizrzhRZmxpam",
  "key21": "3RrnZx6L99xFjGBVuVyMPG5usfS9Zzq3qdEKNWQss2GbxrSPqDzk3kCRMqyDkcSWSXtXBdboTtq6gCeYBMrvf6PR",
  "key22": "3kht64bTSMserWr2XA8HwE2wVXnXDrKYFphaZk5dq3fodoRfdD2FsFGUU44eZN4YZmzAE71uLhaav4CGRku9LkVj",
  "key23": "23mopUaTpZH75qZ4vmVdgrik9aL4kgJSjtswmsjr3F73Zp2TiN3qFKL2QHWtRfCkRZYhr87Cx4ztBJhuDWEp4Peq",
  "key24": "dietkyesrBF9aPKTVJB4HmSZnBQpbyWgQxsFWN8r7oC7J1yF4xQCzuhPf5fVTxWbsyK6t6JFhwV6arvtpSQ8XHt",
  "key25": "3KHCnrk1RVf1JH2DGgkfH8NpSzn4kuUeP9xHxoFLEe2HsRWv2u5ew1f22P9T1MKkfUmrZBHDGPQqKorevR2qSAqG",
  "key26": "32dXDSGNTKtqni9tvUUZvyeruyrTgCtUa53zj3YXxhfYUWEB4i1fPdistUJqrqDejidng77Dc49G71Y3Et2mDYYS",
  "key27": "4q4yQf9VPpipUDdjdsig8LhtdVcBtCrM3Gkv3sTRCnHrQZjRkW8WY5PmjK5yrgfvBdT21MX49h78kExSvCX1supv",
  "key28": "anmp4zWbgNRoHsZ6NYf12NWYr3S7AZzXuHTmysfi4ec8MDRQFMBNfLQrq3HiLdgFxJeeuRrj3qxLoeDcD6zVnqj",
  "key29": "3F7JiKGPdss18pf8re69qk7WCc6Ssg5cNPApPUgrvJ77vviXcYwsPakq8229qj6r9cKnuKvGodpiVgTkKsHUHYLH",
  "key30": "4aiTrpqVCdCPzpmjh8bAZ3y595ahKszuz5QtWAzHXqfBHXEGht8dNuBhg6kRBCVp5Gv79R9tXmya41as82K5yC4n",
  "key31": "Lhh6eWhw5JfmqEEaLYnfvEHJEzrsAe6TcBPwYECYG9ti7LtrEAcVMAg7dfU3HDR2aQftr3iqLzkVW9oHZ5MJyoC",
  "key32": "4Pics7XhfYDSXZqMxi3EMRVtGMtLsg11BMR5a1D36xbxKWLqKJ3MhrPFej2KR549GkM1Z3nTYbFxZ11jf8o8UVPQ",
  "key33": "4c4MeWdQRQGtveEw9fXi3Dy3AvH6DGe4ebgFadXm8b4WVzbsYYEfRQ2EWyt89mQoGPmb4pSMpFqiu7pMscoe8cjC",
  "key34": "3F2BCaAhvVfz78kg2kujnXLJnXse4p6RzGoPBiJrhKYe3EkjyyReJzvSHYA3zLZ9TvkJ81RKXrPnZfXU5JAnMxJu"
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
