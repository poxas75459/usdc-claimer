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
    "5bdgZZyqviwL4y1PuYA89NnYfeSMLfyfUxiFTtxtxn1hYLyKkkEskHYcHSS6CFeCn5k9qR5Z9ACr16D6MVPPMDNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhNFbcNn5XfB8bdn2Tk1z9Jbi91SFf8Gv6So4gucTQga4VCxyAs5VZw6KkuC8jambaSu8GVQpck8V4n22yfu9Nq",
  "key1": "3vDUD5KBoCDX1ZDsYSDk5jWfJeHCdmTxKeq2y9r6Ej4tF2fASSqwZ7QKn22BxNTd6eNcF8RYeeREmuT1BNKwsT19",
  "key2": "5q4mgLRpWBHBmkb28Wv2TEvRGMingM29ECqxm8Z9ZmDJWZCpyAmKBh96Ede4hWuCK5guxYZoaAYS9KBDc3xwipNb",
  "key3": "4FrtRYA3mwCCSw4eqaYnmtoGMMkwbe97BcFPzgYjyPtSE3Uf8SsSXXF3X7jeKXPrzbo64BwEfzvN7KET1UsLZGUq",
  "key4": "55YqXWpmYBaMKna8uJaCERw5NLXwrTCyirKkzJogbYGburSFk33cB4kVi5nPyWqZN8KrVG22bcVren4jenAZKhy4",
  "key5": "W7AmDYe9GpAQW5nkzBM5kyScCifPfjCs4L8aG33Xa8tYHuhx29xLYmf9rvJG36QVCngBY24CLxALiKpJXU2Yuz9",
  "key6": "uM1vc4RmbjSkUhiMhbkHraEs4d5C9v93m9ubt8EqmY16LGxegKA6mg8iVnMCxZ5j4zAYjnkAoKqsFP72LbvjHQT",
  "key7": "5X6DHBjFeP74u4jsf3Nrk8WMADTMRk2ThZijf7t19RX2AZNehDmNDqEErijfD1wGpbABnibfjJUYso2bz7iXnKCP",
  "key8": "2oZBic7yrSGEaJDKMRxTiuHBWhyPzPgrHVpn1F8RgvSATAPddgeN3QJyYTPZsqpdNQE7WbZFuBSQ7uLYqzuXv5ox",
  "key9": "2qvWupw5AURJuVxXdb71v8dRSAUgysDMvwAziqh4cQKyi34bLotU6zoADY18yywG5eDUjDg1hg6d9rZa7DgX7Vyg",
  "key10": "524ZvmZwsLEWCojjrSNY3qp44LQ2u9FRjRrdMhSv4YjYGr5cPLULsPvvrcnp8vsspyvSM3XpUoVKAT7D3kuLhh2U",
  "key11": "4ZXcsNHqVN66SbdNuABB6CvhmCfyPTd7LmoaEr1Wiku1QeQC41oXaDrPUFbRwareAuvtTi5z6yQK2o5MboK3De17",
  "key12": "4APdeYtUyKpt7GHwtKH6ANfeUjcRSUMxcGPdxsga69mCjrSgGRPcH9SFp1uZTh47fu9AwGvB2uqkcoZ6p7NhbDmq",
  "key13": "3ALDwHDfYcCbKt7oczBx4aPMZ1YWuQE6srK3351nhgKpkWZoVHZUcD8NkaGigSo1t25mJjABer8RkEadpJU3mrFN",
  "key14": "FqxGJrKpWJgci88TL8VrChXc3gB1kjSTWpcHDzeB8cH2ojgrMdz4uEpkbc33HyURa4fwPbfHoLLAh14huiy7oaB",
  "key15": "2qXC1MvKb5L1F6RWrxMvvxa6zwwDXsanjYWCVYFA3XzVkefkYa1pjbe1GbtsrDuELCgYhH9Na723XsBYT4EajoWX",
  "key16": "kvoNR85Fcz8SoYKcG9wysj89nKne735UmPSKW69VSmXyYGwAnCd7LEZ8YJkrSTz8Ps44xUfHBQ6MZcE3NkfoiPF",
  "key17": "KQF7uaTa5y47UqKesEBD3NePaYyKcXHWFBXht5UDfGew7yn4cxQj1RAWyRq8zm5AGZnBmbaPHrWy2Uy3KU1P6J7",
  "key18": "3L5KaDibvLx3kUfrx1BRKn33WTaxa2FvW5rB8rLY8r9QG6DASeGEkgcaf1ZJWw5c1aVrspon328GK496hkwZEKqk",
  "key19": "2hiJYgGEFJaT1DoCGTpEVTX91U5cN1uTAE1hVuCm6TcnCtV1PTWchrEaq84aHDGon6R3b7L75RdZqVLMN5UEBsUB",
  "key20": "2C4sZP6doXwv728JU2puo1edZ84pDjfAKJJjiU62FqKoX325fkCgCEPTHtMnJosPdcAb2uxgSq2DFScQGTgWbxMc",
  "key21": "44b8FAsJYg86qoWyobuXh5GLZxubyFAyJfuReSAKkSA7hFXqw611LyqvsWeGbiKEaTx9g7MxB7uUkY2Rw61VMjG3",
  "key22": "et6YwFr361d3hCXn9UcaDCdkWS2GAAcpqNnG9fAHRf82ddp29TyDSa6pp77yfGEq24yn2a7jmTqsLawpM5nbQRh",
  "key23": "3yDWJhpSJpHp4pVsr45U5VtfBuG9HhQVqm2hZaKWtxmoPV1Q8fiBMzURJMQX61zBdthQLpYCWRGMZfhjaqL25Gtz",
  "key24": "3GgweUB4myaZp9JuLSiQtq8UcXs2n1UrGGi54SX2ZmUCMUXzR1kLpEk9BtLoFCHHMWNJRPVKi9hAkfjfTGGshM3B",
  "key25": "5tKRHLj639m7RdwZC1ZBpgtkrvNnZBkL2M5LxR4vbvjNqWwkZwDjhaRTkHFfy2TnqTtbGE11SzTZW1GyYoA7twH4",
  "key26": "2V1m5y8vLeaZS6k3hbU9i1CAMxRfRvHXR7qyMnSQzUM55qAofj46K4mZnofWFDMVutFhhBWfvAr6LmvYQjAP78ZM",
  "key27": "3r3SSu7pN9p4Vzq9ee7gXX4viZGGSiHAqMdqWQZ9Qd8LSk1SwFHREAww2Dk4gxEsy3GtJS2noNrnSsawvHPnRdA2",
  "key28": "nyFeKZjWrcXZTGYVAtVLLLmtyLMnEQrFY93MMs15dVHMrdQec8B3iGHZQP9rvLcvyEyKck7ofvwRawVUACkkpA6",
  "key29": "4WtyMnj2DtXnrQDF6ShTMrFmJDr7EoSjSyuA2EcnzTjJwTL1i1gsQT2SR9ptUm4pQm5zdrpcp8NCWUgrqyN1h6mj",
  "key30": "4Ti6Zg7AC5e5ViBWZvxTMnbKraSyGNLk6E6FGjb6A9nTrq6YodzN21N8YL8RjmzC23bGXLg4JAbDhziHk5kCru9G",
  "key31": "4zm8fhomiPtebbSoVBcKs3pWSa3YdK5WtsZw1td1aKe21Cb9id9veWFkD87DqrAHANaAkEC8MYDj9irX9r7MURTW",
  "key32": "2b9NmJRhL47SANzf7s1Uxsbm8AAr3iXpcGU5HwTPD2vYNjsGTa5BrE9uSyD4a9FsgioR29s2MUDrWkNpppiDEGWQ",
  "key33": "5MgV9m9CwMJH25AgDsRDZY5umsM9qzDSmFZk1dqxv2pWLGirQPCacEcEVizeL2UufXv8wDrSTrFmtH1byEHEuJGS",
  "key34": "3mFmx5C1Ya9qN2L3YZoLnMXo7vK4DbWDQCuyVqaMwFZR6VNVJxcKuXPRV6amAewbCRnx1zQS5AERHtMEzY5uVuoW",
  "key35": "3xSVJBG1aWTCdadkp9a5pmF9NHX2w7See7F4C6txCVUTsiRTbRcJJmfXTxcuV3c4dFetrXWTrmKTiTJ4PWwopM74",
  "key36": "22njbyPYP3wB9XYZgXeyemwLLPsxeGx16sLKAU8Dd3uxc3iYDnhSggA4EreArqKQHud7hLYH67zxeEuHM512ko5x",
  "key37": "2kxNCRFSDb4HEveu9GW4bUUKSPB5EfAFSePLjQpfgVaCfrQ9x92ZZCLrfr74oehP7wRG1oSDB7vdpJdX8BnND8TW",
  "key38": "3TgFaWUEa3sGkPc24KiRB5KUEDKoFRYTVmhXEo4Bub9PVgMHTvMXDh3TusWhH1hH5USqtoywuEyd7gGGap2Ka2Vt",
  "key39": "5J9G7XsmyBMZ2zRZ79pQzeiEB9dyavc24bdWjLBToQ1HXCRSPkEaWaA73Lyed1ftKAoS7gDXrb3bTspuexpfkKiU",
  "key40": "1ZsGyCrRXZXVTtK2acLwNoFL8RA5yPVHu6i6BZvW6yY8yr6YGvVUmo8fD2q5ufkrYvNy45Ux8HdU8oomTw2A4BD",
  "key41": "47QMwWHdpYD9GooJwzD1mfkpUiKyF6TdgsBnaCqapvfhvEhBe6Am2cZHtn6rvm6vHovPxfFqRxdoZooFsiD3H39p",
  "key42": "YbwPzGMDGhTFHhkX5TCyJJHBWUrmG4VZBqnfcSmdcxdhUfcEaDBrQKK76ez9rmHCYDVHu1LNXib7Tvy5Fs2JJNo",
  "key43": "57houwh1yJDCFg7rAGgcs6fo7XA3auL3YRkVJmJpwb9zcr96bWCF62buF97v97FTqfG682BygGpqHYErhsp7qQdJ",
  "key44": "48mNjnWWvSQYp3j5kcUTvEVt5aE5vGSzpGFpxmngKqNB4gXBsk6mgBFSHz9rS28ddYG23h4XuSPzQZ3B7DERWAsd",
  "key45": "jjx9Ab1gNSNWvui9GwkSY4b8ByPQLvATHK7ikhanL88x7RkWtkJWWr353HC4mFGStbk9sjyvY6VmEuqicX6mg8d",
  "key46": "3m5WWTxDVG9RV3jvQNUoNgRtgpAeYPQTSXRnwxbzJQ1Xn5vZj7vawUa33s61gCNbbtvtMcdoJp4DCaY366KqmbB6"
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
