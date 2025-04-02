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
    "31ab5wTmdf4YTQgtEjKjJDM3JhzTvAy8UJJGazRdjjzvA9iiFQBqMmu8PStgYuznXe7X7e6QyB14GRnnbhZ1kacZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CE5KbzYKRZ2CP6xXkin58trndDhLeHiTm6j9PRojXYNHEhXe9tKYooCxJBE5gB5SRYvnceaNuMcjFKEY63nTqQB",
  "key1": "3jmK2FA48nWSqrAe28vq431FuViGvXYph3SLQXnXt7rh65LiCAtLGwD3VrqL7gNjRaTA3R4oAHGFvzW7oZra8mr1",
  "key2": "3K14kDYAtd3BFdkQWoXNGavgZcSMVwqyPnqd1NwSRwxusBcnUNL8248KpFkuqqjvVVeZp4dcUVASgiXmPQ5D4hFz",
  "key3": "5yryREnPU9W7cKEwvaikSfcP8fXHJ2zoAYqg1awXvP52ZJ9rHVQ4MYUoLsgX7L91vTJcy2x1Ubz2w7d75VW9o13n",
  "key4": "5ksiFFtneeWzjoKFE8f7xJx1Vnimg6h8Ct3gToPxRQ384qdHVSsjxxHyLFv2kDMATtCixVnguExudNftWgFXkXF1",
  "key5": "28Y8mtCXQzsjNhjr9d2WFJvgVw3bxmSK6H1vYp1Z6xHoddbUq7DCuvW5ijeiaRWSJL7SWX5ywE1nsvqgDK7cYeFy",
  "key6": "2egFJHu41zXfumtnNJpG41jxy2m2MMpmCfGcV3JrRgPExjdcW8QYF31WE2hUs6Fz2eYk7LhNFQtCdBEHMsyL96r8",
  "key7": "5e4qq8Y934a2MVEYYpv1qkoEodSzD9Xo4n426DT8FneCDGGVwUpJxgVCh2C1NRWVbPfjMwwBnsfeZLdguBPSKaXw",
  "key8": "2hiH8yeCzSo4uSWSWPM1bDj2y9XY44XbhVe2P1Jgjuo49NQMkPZTNEzRDicBgMxywEPuLLvu2vuv29wXry8WQ4LM",
  "key9": "ufCxoY2cMUoRAFn6dBfqGos32FfsUds8c7tRnrdnjzSCMJKyWpKL5vQXJp4btFKK3uB2rYz246UwGF3Q4gwqWwQ",
  "key10": "PvMZ3WkR2U2e5zTnYhP8izoU5tCW3xdvT5k5vut7pjb85cc2jGHYXVJAtxPSFteV4YBhy2aqL14q7r5fg6Cm4VA",
  "key11": "44jz5TGEagHyjoSwMYNDvGyQjFwrRarC2FTNvTY3AwbksscJ4T6qhv5iXWo4STmnB8SsWr2kqGdPxbiNBgFjBK12",
  "key12": "2fyX2bQXjPVW5HF37vuoVsc9HNyDrTkLgNAmkdEbz9oWjSEzrK6Hireix35JTa7ge9KdCrmH8Gomy5zoMfgLX4uA",
  "key13": "2oArsWS2U7xghJmShKABEBnm7EA5abJKBFkDFzUAbWdnYnYi64t9T8Ws78C9UX1Z1jMJD22BpuS3EsSkwqiQLMXs",
  "key14": "2Mj47nTwqmXL8aomEGq81EZFv7z1tM6u3hMmornKxTznbZsXCrpg5VcsQB6X92rBPrqY7NfiE56Y2mxh99TQtaMK",
  "key15": "21B25MGeDQoR3hvevUGvcyfQwJn9Q2NpH2QDWB8uKB7MS6Vd4eL9c9qjvNUVoR19wyx6LzDAE8xN2k86UzWF1Tzu",
  "key16": "9kpkAti5x6cXZQb4R7RRD37xvLag67ZwnsK6iL6nf4cvZjhVwGeR1C77cVQV4r4PKFDnFTTVWMURe48U2pXmmer",
  "key17": "61sCUzUb4aLXBcrAhR96eLKxrWUSCC5dt4XHPuXmHGhtepfrTAyyaeLRFNThm5YcVZGzaS58NvjNuvxJN9g6SxPs",
  "key18": "2oC64CL8ssPjthVAFgPVVL3vsdh73r7SXuiFG2h8mB11ucfhuZuCLC36ekTBgnuTsRBCMXhDZZqW4bJnLUVpZETk",
  "key19": "25KrPhLrLNGtFuLULSc927fXZqqTMxBXvV1Uj54SV1VPyn1RcKUiWFFGNkmxfD3Ms4nx7tBTV6vjnwh641URU1nh",
  "key20": "5wcmd7VHAgANKPAhCJB8WtGwb54NnZRcpkaQbM74Bke6QLPpNLXAJLscBBArzCJ8aKxjwQcape4PhhZoTUXKo2tw",
  "key21": "zbdU7vYXdqnJZTvpb498Jyg4rvRdfydw3DgBS5Jdy9Pgjsn5ChbWD2Ys8QpesZAoEXAL1Q86nAH71jpr8e7D3wg",
  "key22": "BmnHrjqJhhVGbYYvohz5ikxnELLdzCTdRE7ayhsjyb8cLW77xiUDpUDSere1eGuVoamQExNZ6he5ZKzDbRGeyuH",
  "key23": "5u4ygpzsxz9oqbLspeZCfWFGrQu1U6hKgUgvDJkp6WBARDmWvE4UViHS7Wtiz7xZxHLW7YuQ7qKb1XAAcPRhtVrk",
  "key24": "3tL2sSyRSEU5Y5J3y2r85PFo6YU9AW2qVEbb3mkS2xgUKPyxrPvYzZe4TUq3odrxZZDdfQhvi4S6huyKzaMciLXi",
  "key25": "2ENgkxbopd4Za1KyYvN6noAPyMj8C1Yaw6WRQNrFYHJwJLRkVdw8YMx1UARbQMqskNu37ggJtNQdHT9zsHpChFgs",
  "key26": "5pYVLBm15Wgd2ETzk8honoVRqXA2WMWiYGJbH3wRZGs2Q9tRDBhLfj7tdLk9GFKaFib2dHexp64PgyYRpWrMEWN1",
  "key27": "4mYRo7hBjFmQUjeTK6rsSxJwqUapiRnmxR6qqAAMcs4H9TDdHgHXChM7bdekBwKCei3WiEkfPtnRRsHsKNr3ggw9",
  "key28": "65kPNcoFENNPmiyWz23htB6W9WGYXix4eRMk4QadvANdpmFWbmuAqVqF6nsgtaJk8Ht1uYzZTr7uNjWMr79SYfz7",
  "key29": "2VsvPegRfQXtAfgzMmBoNGpL31T56fwhnEFAAvDkC9zCkwZh8REcasxx2acCieyyGWvQs627DV7rp5EUxRhZneG6",
  "key30": "4yXDrPF4Bwgth2hSbgSqcLg9uahgGQLMAZhTXbnLRDiHLSvtxDngSDw7oMhGKboEMW9LQ5KVhFTDfbxG21L9A3an",
  "key31": "2oQ7UCpusq6rEvt3ctEjo79L3CaqyNVizCn8QyDcdYfsmqLgp4j6576dZboBF8j3nFPg3FcYk8oNtSH7JYdTRFSv",
  "key32": "246uZPZc4PMNi1NGw6UScCF5GXFX3ky2zizj3YMJ5RQkVBTocJWx8TqeVvvUW5Dof7mLV1nt3k5ejcJ9cGsNF82Q",
  "key33": "4srwNBkcHmthz21viYmzLK6inDjLqRWyUpkX6s35fwPXcVZXqtJgVUgv5Mhrgmer1mXmL6EJ66k3TftTe8eaLg78",
  "key34": "4AaNphZ9KYYFRonNLyfcwnh9LAGTBRez9t7Rat9nXdrYKLvGYMASR8HJVHPvreE9zev4ds71Sr6Z8hsoernX6vPB",
  "key35": "2SZLo9hTsw2krc1ZMueWzN3x9FUcqYXfy36eMEzPznRTxvv8A8mAbB6i77sdJNQqfZtaEvjLpUk8r9ovrGGfAynH",
  "key36": "mN8gPuqEHD9S2zy5kAEjrLPKu7fmHoYTB6cM8aLoEuVgoFny6Py6YeM9jCXE6MzDTMbMSmE74DAmMgCLrCgwb7d",
  "key37": "4Bufwo6s7BdhFSHtH6tWCfCwAUMNGndH5Ycnp7ouQDojTgZ3RPa8YhPJaKEW4hHmbiPakfZMCi7zSfdeZmshQrY9",
  "key38": "xAEob8hFbwBuTZiYCfSD45LbPuY8enL8wj1yiPCToxGGcjC11Y4dBn7aPPoMeQKcYK5wkNL2ejzUKMeNLgMu4ia",
  "key39": "4ZNWUJFpK3VBnvCKv1ZtRo6Fhxw5oKbjHrq2qLuheJDt6bPtqPVcYiJ9QRUkQNmhEimswMCRmc9hXXYda7DGfj9C",
  "key40": "2Js4c1PtdqB9vEpGgkoy15a1J25HRLjgkT1vHg6PJLr6r1AARfc8DFiBaNJokYgk5nAc5mRx4YwwxfcZJ8dXNff3",
  "key41": "3sfmEse1iSwQB5NftFRn5niQGHBS99tHdqHsKe75huHzztRJGhJSvBLyPbgVwHumtKwc4e8DVHcDXAxKkbkFAR3T",
  "key42": "5nmdTAJuc8nMPYmEXsPDrUVRMc4rrnG38Mziae9tGxPwB84tg4KJrTNmqmQiKEBwVf8n1aZqyeKW89egti2L4KpF",
  "key43": "AzozfrYirqF5Ewqg7L2vn9mqbpsDbrrfFCKyoZwgFdgm7kmUPLVqcrm5HJWWkJyJeo2Ykg77BBok4pTyniucKrK",
  "key44": "sLEnaF85dmr4uZahJVzdfib6aJKzsyAMFZW1udo4yFV7xUxQ9ijyy8cWKiE8orCqxbsDEhRN8uUjVg5CfhPHZfC",
  "key45": "3a6ns6B2J3YoZLyGWRV9mHDXrL2pmk9VnDXKsgiC9synxKt2F1d1vwtT992d1ZPfdpdVCaEqRLz8Tj7M836qSdez",
  "key46": "3f16zzwwbr9ZAvuKooxEsg3dMiGC9QSV1KdPVu44FsFairFN9PqNh4XpWYiCpdMSW37Dp9h1W5yzsiz32Vtq6BhK",
  "key47": "3mwuoMEUsACfk3TS62hE7rMBcBcQkcHg9yVmFfSAJMJtKHyESfQaBc3uLzNqd1DeohuZkma2ACzqijmAByDirBV3",
  "key48": "2BbL7fuA7PjphPGbJ1QucKJfXT3HgFtieoEZYxNPifcJyi8DJuGS34yCJd3xutSF7wWXMiQP4S7gUPSePsTp6Px5"
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
