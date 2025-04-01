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
    "2cB1QNm2EqRB8cLtiASUeMNvgvioHXNd4Rw8948okfsYnsmrvnypxrDM2rciTVWek9PhVBd6rbyQm4GKoUNafSs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29nefwDPurfjzwwJMTe9V8LQjGbyXygZ1MsAPCAtaBk6snkDxMKyVMqzFcJThtJZG5QUodwKJXZCwXu22CY9bVBf",
  "key1": "5N9cYGQMzSTzgKtAu1YgqTd4EcocdR9gKeANvy2ftuhgjnUAsUo9HWn15sc71V7uzpUPq6oej3oux9EEWwk6qV5j",
  "key2": "4mNzp6m3qjYcxw7qByYByDGkkwgEeXo2fXsbC6zo52T2jFxyoskNyoBbW72ex2suWm8yJP3yaCb2pP3fm3YP287F",
  "key3": "3HdcxQesvqzhqyNewE3jkS35UAnfYzK5VuqcT94tg3AbzTp3x1w9cwv33sxJKuKrAVAYPt9SSY4T8Nhk98t1C9rp",
  "key4": "3Kebkj36HEG1LKfiAA1Pa7JbcZ48Wb8rBWkabN2Ay8mLr4sxCLeoT1yaVc9UZW8JwPzj2kk1BMuFyKsqLxMcUDbb",
  "key5": "NwKgkh1d6mgvPiWmgvkX8hujPrsMiLQV5ypNyGQE9oWdk3bFx6L9pdjtu5CzufyF1wAoT1yjEEJDd4Yd5ZZ29kh",
  "key6": "2UqPdCCZWgiyXRatJQWTcep27QBdkYNk5DV8FHDndj6GxjwT5vq5DHKQ5dkcretGpnb65yZUKhAYcGJ9GYUtQKMS",
  "key7": "4CkxY19TrnzK3FBCM94r1XVHrBrkMZJpPfYcAFimnniKrP1CkoNnhjpLJBLeoRNeiNc5SzQPaLsDbqRLFb9DdzXJ",
  "key8": "5QjkVQySodDfqoyR2LDCtUVLAudZyJmaQBMtpaxXDAMAajhuyHbRjDoGkLiXTbFKvd1zTfxZyhTuTHj66JppXpoJ",
  "key9": "5iDUku6XapXHYgzifgoRuXhcNDUKJ2fxSp5TxUpcFcTdQrc8rQqf9YiPde2m6EqYdFMY9EapCkRpBdiq8Ab6DDQg",
  "key10": "3F12bYSvi46F6WK9kzd8V8KvBpDWinhuPGYm64Vbq1y18vv2sYFJr1FbXx1Dfx3sj1zGoQKhSviLqpQiZeqPbzgg",
  "key11": "2yx7m88yKtSVEY4vaTLAGsp1SFwMoHLdmFRJMGf1gttRKsTTVVyXdwKq74Gxc9AtgV14igxnC7KNbmC7WRURi4Yp",
  "key12": "2tkxA5naACt2ey2iZ9NBnzCRoZvJea2ZjnnbYno2jpibx1edqGvUivEvSbxRnUxiam6L2rNs7yfJ2td2xtMWFd5N",
  "key13": "3cjjAAog6pvp1EqMCW3e6HnQkdXftGX6qnXroRnpsbK7n8jETUT9St29r9LgacpcghrdJd28WNszoKDN4DoWJyeP",
  "key14": "38XHfFJ9wiija6mtxpc19Biji6DzCjcEB7hnzNfaTNm3iNm2wiYKexyeCa34xjH7QfWDjJQHSZ1DETZgeZwYZLe9",
  "key15": "dg92fi4CJ5i1tNoXES2LJ5wguTESsxy8PBmuQkiaM1dPaH6XnRURrhHGVi5TMCPca6NEH47nNEPwT9epuELBkjX",
  "key16": "xAmCMDzXWATCErF1mbUUtHmY5JNj6JKH2tA6gbuzJEB6x1C1jA2a2ThWTnT4GDAX4bBwJwTsehkkNniasUeYm6H",
  "key17": "5Wy6hw2heCb8ZEJbXSApJ5Su7QVWVM3eL68DLUnBtRpJPyjRtHpXZwc9htY6GJn5uhyAwa2umf13mdpVfAnoWRmK",
  "key18": "tJET8geyXkcAdEBvApMT4MM5nL4RNAmo3RdoP4dAxkUzPMnWABGLnf9oxvbPtabAMEBnhADb9p3cMn3fajV6BzS",
  "key19": "4kCRvuUzQc7MJ6fEPz9ijPsXWwPi46xSWtrGwa6LCV8kEi7kvxzuXn7HawnFYDbDgQECwfsh7NXFZdz5f8GkyHSk",
  "key20": "3TzeGYLigWkn9kEeDjajNp2S8vAEZGysyPJYxiuZGvumQDZ9phey65fjoqs8ooT9z2pyXqrhhc2N1m2q7G2xqHJJ",
  "key21": "3bCaZ9i33KnBqMQm8KD4ykPG8JTRAxw89s54f9WzvPS7xidaonWv3QWnkiTMN8Trbt4N8uzHJPXYvnzzBipu1cnD",
  "key22": "vPCCoJBnJA2mF5Vz78BUZCm188TncYRYweSeorBXALf4K77eRYFGdeZP7FDeYpEcqZmnJ6EiXTFZKuad45hfHuR",
  "key23": "56nqy7YiQzLbueGbd9ybif5WaLqV7SdRjLcK5HaGAopx7nv5zdLNQiSXoNPx5L79CrQ3iMy3s1mfpprnHLr5ftkw",
  "key24": "3rL8nsm89aLjPEm8mEMMmncsT1fqfuNv4wCzhv7KwgUcLiEkPxVLtyincMoUGUpMWx2Mz7WkSMHtVfS9DPxM7kYF",
  "key25": "42huUaoo5Wjcaep73SCePao3G9tfAWDkzkvpCoekguRx7HV1EnuCbJJBoAUaQcD4HTcSE4ZBGpp3zeP75nwvpeXV"
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
