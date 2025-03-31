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
    "4FkrUsa95J6aPvg3Spp1XhGdxPqJeRjPGqNLSxB57FeiSVYhrKCRtk5hE71G7KaAmZwysEkjF3sgYMgNj9vEV93Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59V7HE73N6tMA1E3oaAD7zw83pRYAtb6cosLSpWtchc8yL8xFvWGLnX2APrNHXy6mRHRcZs4QhG3GXujU4ARrguw",
  "key1": "5G8zkmCUBKCyb5cFdcBQHFAUYisY1ief4YsBLarQMu9foHU886UxmCQaKsEnzci8aY5W6HdYVJPtAJiRaWCtZVBk",
  "key2": "4HBMBEhjCyvJgftJWRin4w8zvNyu5G7NSFwYgA1GTrEpLrCFKTtg5dWQtp9CtK8j5KkVn8RztUQofVhGNxHjEaA6",
  "key3": "3tFkVMcJmJa2aiK2mTkdyGyp8tEKiiBy4ucS4xmoNXF4nEtyqHwT7fzbGykRQtHsh7F6JjWW9XeGBX5E2QoG8DWe",
  "key4": "2YA6eqAfZtXyfZQEycedRQ4MsfnXAYKL3bupizJWQDgBQ5ikh9MPPLzMRVKVpX24U1gxv9ZezZhYZnMMc5dK7oFa",
  "key5": "mHw7dW7mdLndxEcNqHp2mxi2prYYg6aYZPx5ntBbyCL6gKYLfhcsx87a5yjjxAug1Ze5NYCc1ZZP9qhcPL1Xvxx",
  "key6": "5ewCjKGBjug7FZpDnMnGQwsN6FNnnnRiu2yiFam94xLs5aEPTz3hPq8a2ar75hpGtwznbeAAcnB3LknKzXbXgmiK",
  "key7": "37fBx9c2Chws9rDzAqRQ2fBqDa1t91kJkKHPzUbXs6UbCxSr1VgAie8vi9p86FtZK4LCXL3VoUGH2RDSdHTKTST8",
  "key8": "57jYgcn3fYyMkzVonZFzvBYLJhJA4mTWUV4ZAn5tzvXZWYwVQoPaZRu7LJ8x95MGFfkNDhmmJT27b3nuKKyBBar",
  "key9": "4qfeCHmdTEMTEkbCeiGPsoe2LerRYTj5ta1BMc44acuvodayNK9tLan23f6ZtxJMX8ih9Hd9HwHsXrN6rwJ2vrha",
  "key10": "2kyQz5AH9tPqdHjA6xW5grJxPbsw4H3k1qV2BtjpPtkakGNJwPjwGXTaK2VcK3VV5Z2526TTkFesSeut2mBteiH6",
  "key11": "2yqvQLTxKxeozK2TuwmfpjVCv9q2pcytPmcpvLfyR4vveQ8Ka1QMZbtu9S25qZKsNgLi7DVv5wPtoG1j7eCdsHLs",
  "key12": "1AfoVY52tKesRzjis7ESSsyksr753YsWXft78wmuMq9eNiS7AJ1FBUc3BEjeS959CyTKUCysYUnPMevG5LyNbt5",
  "key13": "54opDhzZhLtz4TC5nBrR99u2zyKd6dDhZDZfXbCSMUF1v6okC1ekvWYyzVqmA3expcoDLyvpoifDRB1QQk5JakwJ",
  "key14": "358XJhJ8PPMdkoJ4Jmja5XS862V79zbARkx2fBGxJEpfSko8PiDt7kiREMBxy13iu9mzR4GCq6Wt1LfdEv32GSfn",
  "key15": "2TNvQuqgxFkaTfe9dxnoaNH83cG9TLuG9bEUH8NfYXTYkX5CsTMtmNeY4hta2KiaZFNGMsZ2ddSLSg9giU54KpEK",
  "key16": "C5i5sppUpyEaRipTmaeBCvqJER4dpLKnoshSS6QNoyRcKcYunSVnvP2eym6SPPiFXQR51UiP5vCjxn2AGvYm617",
  "key17": "21jt8YK4F412jhBV7t6zBuUv1amFWGgwzpAaHsYuxQoQYcLNtn2gSu19XRD2vVCzUrWwutLARoyGnyGJuDrmCaVs",
  "key18": "65wDEi9bdYNRNygk8oJPNFxejrXZqMTwZuh8Fx4rHvTomWjqFUWUEScTPbvicwHzCoxxnyz6SbYV6hWbamUu7B72",
  "key19": "3Tmx2jY5C29DCu4Rn4cv36TbGJ3tHz1D4KgMRE9TUUYEuXnczxgRs8MzjFqndbZuAocroLqmKGL5N5mpvEWLU78x",
  "key20": "2jpCbYmfFbFkqJERRnhZe51Hj6MGn51y45erNTCuiY6u1AtcDucMp7onzaP5MkEyUpAx9iGvh1ii3xfCDSpw4Mt5",
  "key21": "av916eVc6RDtKEBTKmG1JzQkcHLZiwcWNR2ZFBiNeVZpUKgWeGkkSpNn3DAR1HoMUKQ3o6ZtVaM4wTi639n1r5X",
  "key22": "pbVUKsCWj1ynmsKKs9tXGppqGn8zGzYEYM9W4StVNpibSVBGQyKQ4c5yjaeQG6zekwrw6wgdyZJecfgQkqvugbG",
  "key23": "2QYPB38ZMuHCWhcu9jyHg71YhqnqUNYMSM3oeTbgqddwia6fhVSqTCCgYQc49iqpFVRZfLNR9RKk3Ljn8Ydo5Lt4",
  "key24": "MNGkgbJ7aaxxJv8o79G2BXdHhEze39bbcgwLXkmtiusyjxgpZwhYitmnAjQEcu843CULTyptmXjXrfyKwWJTvKs",
  "key25": "3US5gwDkycSf7huXKfUeJSCSRfg2esLZez76sZVSbLRDp5kT9NngPSsiHguNFvZ6yqFujKG5pxqxhuaiNKg9RpYR",
  "key26": "3Z8m6UepyyBj1iy5PKypkEM8hwEDRTw5PwDNuS4T6CTbzg6rKMpigaSfFtAdksxsGvVsXCv8C29qgGVi6denFjND",
  "key27": "2y17hcp1LUs77qLjmJiXfNzcZUiW8BBXUT6m7YCp99hoJ8T69AUxKGiFhZopmVXKNo2YLmed3t4Q8YP4tjJhByQS",
  "key28": "5yyZhHKenGUyMA3H9HS6nJfXPioiaY2m1Pad5uMY1uCg5EQNG7SFKh18CswHZDj6GVbc4m6h77UopunNswwcRjhZ",
  "key29": "5L68FqhwH8csqZBuBsoF1afFP55raB5J515gHPwQGqNoQow6YLbJKGAmd9Bmp8wZdatB6WqEJmDzTGHf2G1Q7Zco",
  "key30": "jqXtJpMAvrfkwAjJbaaYioTTNS2fdo1ymMNkcPqXDyrmG55joarg7uzYuwFTxXR71LQuCtk43CWMvobFtkeY2pQ",
  "key31": "3qSNq1UCz2AENXDugiSafiM6SoCo5iEihtj1FVxBiiwAbNfrPgRzobcti3xZuA5e73h6Z3x7Ddefc1XrT4VUWTjS",
  "key32": "98xfLkXqZhiiqnNDMPWuTmFex2wXEHjcjtbriF4B4R1ieZAwxC48UJduiXkZMxiwNXKLWyh4ZV794giV9b9jccr",
  "key33": "5H2ku3u1C16KsKZMuXyWh5wi58TPRXKdNVzNfm7jQbkLWcWxSoNza5PmWTDpE6X72vzCAZ8WGHqhqUg6pzKgUoip",
  "key34": "5VswAk1SoNyKjSguFfXWdgdBj7gCnZ8Viv4Riyvx4Uq77AHajVSCHJbxhMPshqkrqdxyRiyYsVcoj7XvobEwr3FR",
  "key35": "3MbC5otLtgrHBNpyb8EG7XatuhyAgp6WUMojhmYZTBGM3ib6uhaKYdzPHzPz9jkvVne4N5naNNdZDfL9HEoZxjec",
  "key36": "4M6MXjbNGW3FgBR2yLDy1sSKQgX2NhD7PUeVnax9SDPBryoJJk7DkC1B1k7woETb4yV3HHk7oxvgdzCXDRTvBCAP",
  "key37": "4UCREQV1RhSSz6GEC6RWjSA11rk5rCZzEQnbCYXB9wspsGaTX2mmxFEhPssXV8Q4HQBuBDB1kfwTvbXnunEpghqN",
  "key38": "aJ2NS1sFDF9BPpmzt31h5TEsDtAajpfUjj7nsV8RcQGTv85TQvd5Kf54JtEV1VgEYM9zGZGoc6WBK3zYnmk8tS5",
  "key39": "gbxGXfybWcVY8PjzBfX28XseWMmi1aPHqALCKCmhSwiKU5MZpVJ7F2bTb6JLm2kgJMa6F8MRMTzthsnAkPqE69n",
  "key40": "4nPGhuGBWCm5UfVRdobkvfP24rw2ygX67ngFrZTEeTBsyg5KexxxE38tkHPzL6eSGVdbyp3PsS8LfP5o2jRja1iz",
  "key41": "4YdP5oTW3wh6VWXhqxhVTQUTaeBV545a54iH8wpBaRiG2sbaYtibtPT2vnNty6NHQFCjHeBomHaqzg9cGEy9yiq9",
  "key42": "54ZqKtxgUCSSGGfwhd6rh6r2zsYwHaUPRJs89ddaNR7wE3Esd6zV2w1LQsfdUeRmudaM4M9xiv2qfw7twXB5RrGH",
  "key43": "2AMjeo8kvo37Hhejcx8AjmiVFvDnoXJHoqjzJhSD4kPsnpty3g27bk4nk2TASAc56p81bNcoXioRanPmUB4Gg95",
  "key44": "3aQ1hhMVfWTSjWghoxShWExrAcamgMxLeLYj3FBoVLgDNidvDiU1s6ZsezWohGZq3JKiXxKQAikvBRKB59TQZQUm",
  "key45": "JTvN7ERN8Stz7xYu4z1scnP8sGDE4oqYM29QYyUrdcMSdqgKp75H5XNdGnXnA7CCp3YLaZhi7fUfUKNP1rgoSYz",
  "key46": "4FgaNWqUq6Nhqib1MDT1mmXenpeEcmuc4o8AXgdrQKSZi6wqUm1V47UVVGAJB2kFtocRATG4BsUm5dKhXumctogi",
  "key47": "2Ld4YwyyWuKvjCyMDLV26F96iyS4LE4eLyA1Fm2P1saCWKyUHCwGYSoMhE6gYQuAy5kdYSBNXUEqpphSpLGKcjQB",
  "key48": "4GZ9mG2NqhheXkJ5aj4hEnkMuBvJYagP6g6CjWxb7FrM2ysHae3LsveYVa6DbmPH4d6BtUMPGCtTJxymNab3JmUP",
  "key49": "3yVq2QHuPVjxRFJaN8Xa5Z9QejVPCVzqgKgA4gsV6TqVypeEkt2M3ZHGhqRC1WuJNfRP1o8KuX5vHywApHD2MdbC"
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
