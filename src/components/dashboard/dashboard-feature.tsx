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
    "3JBMXCdwqeS7esqmQUEvmvn3Btg1MwvK3Zf3uAAuhpYnkL7M4hKxiXmaXFqU429yke1aXsPJBFJCCYj8PooS5Kh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VpNMapLiXKTZZWgvNTAswosWq6VFNQmK1DiB9eJA5MXnkoSMhbt1NNQb4fRw7m61fv3DoVWVcc9EZHLqx5oFEh7",
  "key1": "4aV1iQxST2hVpYGCYgWSzdxoqB7JS9C8H6kdhM4PdfLx77pSvkuwU4ourGBWBVM23cuiL6MsdYEdxzv6ahV7Rvro",
  "key2": "3dnWFbHAthrHAkx4FFy4KmvitHwFi3AqRfhJtQV8Pp7ZCiZ5VbDbnBf4n4ec7DS2w6xvqjUxoAvbR4bubynUVZti",
  "key3": "puVkhB9g9YqXbFkL8UMETABmYps5ZGXZPNqRuLsRHkDkfwGR9BuQwyMVwTFji5tASERppk5SZZswJo6vFtGpgCo",
  "key4": "5UnUuHnKbrxz1Uwsf4aEmnKoGfFwtD2cnjX2Q1YAiA9SCD3BMAtHA3EwNgh41TxzSPj3X6qYiij5xxMfjta2hoSz",
  "key5": "29DX4EEHBs3cebGfCaFwp5AV8miVrWDXns6TETCkwyAtRTLafyuZrcCa2Q9bSG2LKh3NipXV4Qt58KWYV5ZZjPaW",
  "key6": "2VUtKGNxymU3EQoDEvM5eZv51akx5wMh98PQwHqrbFrxUMkxDq3u5SZTuk4h9cgvoecWoXJ2w6FZ2aUVmQr22RxU",
  "key7": "3ZoKrYMDuvjbtej2oFnxvb7is79RTxKwVtxEXKeTLydvYWzZn5EEwEuP4W8GfaRAqzar1a9dky5RkX3bru9XDwvd",
  "key8": "2BzsePmevo5Lx2rDNNcsnaBeCVNyzGp1ppifw1ysHH2y33mRbDZMA7NpKQfcvSft7ZNuSk3jezFLoHzb9snPsisE",
  "key9": "5WN3QvWCJGJWj2LtWUHRxuxuF4jkXotzbu6YpN2pQApPKreKbBdrvB6o1d64F1d38cKkE87MGczKuTKLTmQLETXR",
  "key10": "3H6TujAYPUTwfV5EahqnhsXAV52tpgYoUrE7kx2KzfJEmqHxnrW6PS7VKPg7HVigucScSL3CBU5sKfXXuY16vxL3",
  "key11": "5WGWmBbQ7c9fj5AjWdo7neGMRvCNawpLzzpNRDiboXnaVPmcxmEMwnfXBJtMwkaioz5jhgkUxmbvq9Q5iTH5cwdp",
  "key12": "63svhECA7WiMAXtDiheCC4Bt2Pz1bmgbNMvk2Pa6JBodHNpUevPhtJYYFe6XBkP9oWfWAHNcWPnf84jUikHECcF",
  "key13": "3sEJhkTBpT5YYHr39Vf3RcpH3yanDMBowSECqJcUjvG9HjgbacwRuDvrVmN3S4nYYZNP3wRZNLd31hBJ6qon5Xkz",
  "key14": "oWxxQdvqmsvjrDnowS5bL9RVaQyJ5eX1bhbUwqAZnWEZfYBAqXRjFyFw4kj6hSv85L42zCVtqCjq2oER5Jm9syp",
  "key15": "3FNXKYCpGfEE8tBuS42x5Neb16k813oRhyBrWvk6Y7to8a55VtmtJJ99gquzZq2voachycRTo7SwCYQvSi399fi8",
  "key16": "5FDZN2uzojtes6xq2AeoFBHno6NZMLditQggM8DCDzgnsbyPwAvnbQN2VtM2yQjM4vmme8vDaXPX2gVHACGecAsx",
  "key17": "2PkV4wWkso5vqPbTmTxZJUNHaBaB8va4Fp5FoaAdPhwDvkBcQYNKdKn5xdzCkNdQFGyUp7U3nHDXQe9Lk4HpxQZ7",
  "key18": "3jwxEbu6CugcGygNKsWfXazN5UmUqbK26rdHymJYHemT2RnpTmHKoJ77PvdRcfR49Laznaa9R43nPX1nou13L3XM",
  "key19": "5uguwgbFxb5RgzozGUjbeQFKh4JeoyaC8rEV8i86Kjsi767sFgZGL3SNyRC4DVrSKEQ3kMBoUNYVAHuwuF5A3yXD",
  "key20": "3Jh1Np3Bp9AJgy5cs4tECTgnMizihGjjuqFFDo2VevrCMYzsziHg32iybwRCFHs5YC1rins912j8puT6A45f5pad",
  "key21": "4C1rqvnk5twoEo13NGFm7HcSbikAT6q34JVok7NaEN86zWTyquSRxXxJ7wwbxdvwu3DweJhTGBEnmYZeSkwaEWMT",
  "key22": "5823MVLieCPVaPNXNmnQ36NNtYvv3ptMZgsejRrMBNboKiAVsmFaJmi5bNjS6cYBtGpyPeRn1EzvkbpUqPGNy3W1",
  "key23": "2VLNd4GmAmaJYadRJsVXvhdb7iDJKmoVcjhLiXn8bPk5ZN5bVxmAh4g8rSx6y2HsUt9oJY1f8YVyx8XYtT9yCtGH",
  "key24": "9ViLoqVta1dibyG3XPqiayhVdvQ8qjUFU4PDBRnvhkqN28tBs1z6SQJPp1URQ7Abz3M4h96jqAyFy9sBUr3gDSs",
  "key25": "5pYxuyxiRdkswoBbE2yPuXmsLRsMd6dfavBLC4dXCF5RD5ZGvzEzxbQaTPXtCGLi52xAKkDhMihVfk2KAM87ygDJ",
  "key26": "2WNtuc7jp3Mr9m9CgZc6AV5YXoZStMJkrRgWTr4k8Zs2wCqSJgqcvUgQSxUJLM9RnybowL1VsNqjRkk8YRFzqsyp",
  "key27": "5aPu13uqTtv1aNwtdxdhKwBEYvXA3Gxmg19b1t5KYirg62EFzCZuDpS7ARZ5Tj1TCLwZkHdXfBFkCbvUMpNboCGc",
  "key28": "3fYTS5vKVU8q2wKdrGFEcoXjkMNbVFN1JqJ39zwSu272eya7VGKqt8C9hnaf3JXGuVqNQ1DWxFtyHb6PBWvyuid5",
  "key29": "5MTX83nQ7qs939fczYL6gxnPph5wzDKTDjLuQusWor91LhcBVcJSCg8d2Xn74aB2SfxW23PpeR3TbkBYg85HG8Zk",
  "key30": "21mDAarHY361tD2cxnmbFXyZEzXgEYWVuczk1B9HT366Yj6wXRKV3S95cBusF1BZzB32fcdYsQF7PyH1df5YAEcX",
  "key31": "2vSPS4yKCvyuzabpUcZAbpep2ozHW7PoagGyUhbeCD8eWw41bLtNAipnntESbRE1qszaFR2QQ7eEJgzV4zaqUNjK",
  "key32": "mj7BoVKRW1wXwZE2aXAgwXTKeLXrMHj9toUw6yFbkQMLsYctLiY9FXoafUvWo8kfdeQaKD4Gr4hgRmqjQM4EqLD",
  "key33": "4dnPPdHFX3scX52JJxMqHoL1N3TyVrq4gkBhZ4k6zE6FKRMtuDj1jS7bbSNAyU7xuRzA9NZwZr4ekJRnUezwuhhi",
  "key34": "4fju8d6up4YBpFKQ9Br66cX76ZjqFM7vC5kHDbkcQzQWD33aPJgGfQFW1JCZqcz928itdsD72aKhDoe9A8pnUMxe",
  "key35": "4ZSsKuGqYkxherx2ztT94bgUkYgAqitrGoSU64n21BkfFwdMY1cdGPN3Uc9Y7u9V3vsKto6DYfKoHAN7UFzjtGPj",
  "key36": "3VTLcf1pUziQ3D4VDTBthkDwNUpXt819FgdjZCFHzxhukWudSvQ4KBDqsc65wF62JRJbACG3KACxVN5Hh9ksHqYM",
  "key37": "5xgfeZBVpcZzcZmLCNALo2CuqeMzxWWQkLyhBwVTKNXNci1E4jjPvCHXQr1CYQYxFYHHYM6f4KathLhv2c7Fgpn9",
  "key38": "3mXoFsnvdp64vQzttBaM8tCv6FNMq9hDeL1LgvB6bfp4piMXbEn6JXG3iFwaA752isTLVc5BhqrcE4rfAvD3AN77",
  "key39": "3EW8UsGHfBFQ3JjeXDi4qKeBvzdkPVy3G7hwWjSDQ7CWk65pHP8P5YQqf8tCEpqrD5VeiGwD49iXU3Ce5G5T8VA2",
  "key40": "2iFcLBz6qp3zpHcfNtsAz3DrvM2wTeBh11vzUadtMThnXDwWvUkka3SwRMbMQ1TiBJXH894g6ZmrxKrVdk71gBHd",
  "key41": "3eKrNKngMTrkzCdDfK4YiJXQSaNw4P71em4wxNZCJijYa5ne3We1srxHBuWc3DECM38RA1bkEELrZDNdo8bAxqPQ",
  "key42": "4xXy7EDfaqYUtDe8tsRS2LVNdpqZBTdJsAk1hKLvKHLDU58ptUVLJ7gdWBf5k9A6sAmr4QmnVRyoXUtbWZ2aRZuW",
  "key43": "3JD6WqzAQHfyyPxP3i9ztVyC9tPiXVgkLLEnxCcNGvuGcGCwwLM4GNijCUZ61nv1j9t2hZwT5v3oFaWT8s8iM64e",
  "key44": "5v1DgRZzvCrEUr6PC4XVq3rCDqTybGfw3gFCE7NzaRrD4s7B9CSH67v2DEbpoNHR5Zr9twXwMizVtzBa638xo76q",
  "key45": "2aim2iEexWto7qLaFPj1E3twmMrTKPSKXVNK6H62fvtrAQc6i2n3Lz17jXdymzNf5j4J72uvZjCQgA6DgmJyxziW",
  "key46": "42J83WKTLnb4aEDKsSuVRBeEHmQz4Kkx8zfWq48onPaYTyFpvVkKpgiLUEsvtuu8sERvbpd5hz6LgvJUsv9nTkoz"
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
