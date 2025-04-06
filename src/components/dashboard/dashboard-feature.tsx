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
    "53p6cwfnKTApzb29WNMiyPZhae9soDVTQpmoS4Dg8QgFuFv7WiLu9eyBKaCK5S3cGRCjjPkvTNpbtGUY5V5Si2Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bbhov9JvmvutyPL7bSFmSrDJzQYfYgzAxm7kpX3shAVtLJt9317EtkQXtAju62v5Muv84XRbtS2eSnw21nqbzj7",
  "key1": "ZMU934vJjd25N464DVpmaKVHasoWLf1kuwvnae3qruo1SUbLoBe5Y6Q1LaMoEeimnyw1dL2pptV1eUs6HALoM4Z",
  "key2": "5KSYGznGCQSnXkeXEhaHmM5NqFn2aiGoJAETYjAyu3MnzFW9tQTTHxfCWAurooUegyHcWgkBaC8QjjYnJVyuWET7",
  "key3": "46WZqaHZxJomQFbRKPheGUvqsCDvH4NnRWeMx7peTzE2Zi6VW5SRDEKJnJMJfH9nFaNPfXRNq9mtgdMSe47b9AFn",
  "key4": "5Hz7JnCbk1QhkVUGoALrm67k4Lk4pLGaJVQzskaZT9Gi7B6Q76sESgWvvdCx61iRj8dA3ZTKGa9xhhVgizAXjacP",
  "key5": "37guVwGtukAmSRP2Y6W8s8WQwhw6WUxYyzpv2CoekUJ8UjDRdJp1pptQCb9G1ZFd3TzfztihPfnkp7HNVG6pVptc",
  "key6": "4boLrbHhx1FCBYXLyebZpAxLZXyi25Pg3CioTnqPm8emtd13QrPvJ6LFRchqFAGhxZbkAC7LFk9i7SdLvaQMoJKi",
  "key7": "4uccMCAM7yZQubtX7isCi9i3FgQnm3nBxPtXuRjQAa54nFonSSYiX4WUDongn2t6137XZwcJtPDzdVFCicu2TvuF",
  "key8": "U5gxXZUCiJZ8aoZzwYa8N8KBXMv7rimqmYkuNceJrcskjZw9VQYRWTUQjoY1NqA3rGJ6mkcXvTvxC6m853bvJs3",
  "key9": "4SxvEbmHqFdwMWGLLxosVTanNN1ZLtgEmF36BRX22sUbwynNWhGFqWBYx9JWnxk5fx84Kdu7hMebuMYY7S2r4Yew",
  "key10": "66jnSMrfELuRhzmLXtZv3K6aaaduPnDsCEstA3Hm68edCsorEyMDFzTgVC99NpFbWo9teWDroKwXwTQ59FmSQNru",
  "key11": "2ZFXbhg37Wi4FDCtrV2S9GgXqfYZi1wPwd9MJwzzbqYmJyiZr1GGA34mZmfzJ3EexQQ1drnY2FGUKhAqd5B17aVi",
  "key12": "5NgZBkgQEasqRJQye2tpnPPeS5KB5nvv5MnaHk4XahPyuQ9cYp6Xq5iirtYJcfB5pZdMNxrry45U9J8sAxBcKffw",
  "key13": "3zMmxPGdSi3hKzQtPZqqGxxwCeW7NcXt7hargFfnsMeRyCjskMebnZqcXTfd2gWrUt8MgQNztLKNpnN8S86Coas1",
  "key14": "gfKPERrn3vBf9wT5khcmfMgJZPki62Z7jp96zhospoFmfrpkLrikHZ1WWNbcGTtMJAtPtm5monusm6U7k4XWHhW",
  "key15": "3jhGMSKjPqJccuByukdGwU3JBjUBrWDE75bc8kS58Ju4BySyWgH1vGby56bUgPPJXhq62DtSZPggSiR62DCrzWhH",
  "key16": "2QUSLFp8AavkYEJogvEsbRpv7HMTHxWfE9vf1wEBLGa4ZnJ8Jev9hitaZBbbPbDFoELycTTnHSf1e9XS8Qb2c1yP",
  "key17": "5WCh9BNoJ1joYx2TrKKZG2Xn9ABQVy37akpjUbkFTPuEGtgWZnu6N7sGPTA6JLyJyZMm2NWVyMboLqJeBsNnkat5",
  "key18": "2stQsCFcvho6gbAedPyBbK3vo78Sj8c77pv16PaZdJviYoTF8Chs6P119RqM17iMErJquAPzWQ9FCEYiBFR7Fkhx",
  "key19": "49VCRhyE9fj8nP6jFV45X6EUFKhjvQVdm6Ke4MNSo8PUgbZuihzjNvLAYyEbEf5vEi2Pj7fiweYSiGLCe2qeXvWK",
  "key20": "4329xmwoVgHTwKHLJe4hBQgrs85mNo7PMnQvJZmYta5UttcgtK1eiAbTvB9kPeuTfRhGucTf2QVBMxuLhmghSXry",
  "key21": "3aDwqmcq32xHo5DHyoc9faPurWiRh6hyT6saTNYURewaBjYG5YGrA9zhG3JrfK94PgWWdbmtRgY7rCpBFf4DQaHT",
  "key22": "3rCVTAJBrf8miRg3L2By31hekrtURyK66BapktBva85KuGYNoo9ZAjutvnRR6joGEePxELyJmGqoW8YywPx4bZ58",
  "key23": "2RzfmKDTwLmzW8BPDkQLAKe73mXeRGXjJWsHr9u4HwJ7PTYBSJC6J1gi2daGAEEfPAvqcwopwRyGvUBU5fH1hJdr",
  "key24": "2XZBdmR9ijUmZFxzb7PmjKQpiRdawi3Hfxz4ArAYHfF9vZPSNkjx9tLQz6vnd7B2B4ZDvcYHutrAAFUGSXFS78ey",
  "key25": "4N2fwgY3stbzorbagWnBf9fcdPDDh3rfHoNumNF7ovS4TzPgqPF4jGfVy658VAodNsPKWtFgDTYCKzV2bnWytpFS",
  "key26": "475PwPqYFhBdTzpQbFMJUVDyP4RLjDER6VPHpCRNQ9C4nwCaYyo9zj2oxBgixiMEsF4o8yB42vUkaZDJs9yFNXsQ",
  "key27": "2JPSkAM2gk9qs3A2RXuPt8JeefVG2emHpDSsBig9pAW1xKVapFAvGTZbks87jMGYartuVWYScfDmpWcCeccfNByn",
  "key28": "2W2jurNGQAsLHwdZC9MnsRn92UGZUBKsUduojizvfrNaGzJkgkFBzhpBLp8g92QXvSZsq2FsDK1sQ8KjwC6wbhiY",
  "key29": "5nJbPvDbk1jCusRY9FEREv2z7vWjnamzvkZmA1tMCnBYgu9zqVmouT1VQUvYTgMejcwjisW8HsZYP4zpLDK5BAoY",
  "key30": "4HJ2rrz4qFbQgGCTJUPybyo6Kg1EKeXcc6hgLPPjY8qtuVs7HzDewj8LLUPeW6jpkkBqLbjvMUNVkFHzQiHo8BNd",
  "key31": "3iP7oc2SfEc6T644tJFoSZFvDoBAroGAAFCi8gVxCipLyX5sNZjp12ZUPDd1Yt3yFqXw8bM8pdAZxGoa3VciLgfx",
  "key32": "5ULT92DzK5XGWcm3e8ULY2joC2G9DYMazR5CUMFJbu7hnvmHEY1iePCVTyZYx3ujaw3MuvFafrLzZMeqjPGy7iZg",
  "key33": "29fxhc1zEb3rUEzWpM7HmDYT53S41BQhL4VBAKRsWmNeeqaZ1ojDtbMaCrEQdwSjVNZauy3BAr3u3CGGdTAFrwWB",
  "key34": "L9SVxwoUetu1VvPCBHmJjD5VNCNVmZ3r7yV59X1ZW9GffECPBHTa41orPNX2TL8ccVyCxVceTuCjB68km3iqjAP",
  "key35": "BKg52hAL6Yb3pKLdPiGRaYPN3RLJ1ogr4ZPahyUwdcC3QjYFcbBEZwhz3Le1spapBmsxyZU9Nx8BGAPBd87hync",
  "key36": "4jmxZZHwz3Ab9ZtPQWNtPAEexxRtgPuZitzXWPR1AnJ7LuXn7JceXNSJtMkt9zjaG5tu6hnbFPxzo22taTUZq2o4",
  "key37": "5qGqkG5Kfq7SBAhP3Zf5BESsnE4xj3W9E43N39XUv8c4gTCu8ahHJRLKtfNHi6gXFws8cht6bZenXXkTA6VWerQU",
  "key38": "2FK3RTjpT5Yq7TYdTURvEqUUh43StQEeFxFjRDKMumiFRiadXis5vPcf732r8HWgghgPcKZRrEJf5uspHKF2fgnX",
  "key39": "3zfGvh9iF8BnHc5UPLwSUwiZXnXC1LfPr2ciQtKBywgpmQvghkToVc5BzEAk8mVNRwQWKc6RVTnP2EVG5sLkdYrb",
  "key40": "3aaDZQtzBCLtutgkHDuRJW1kWdSVxkYhZZvZX2wFdYCfNCucVxPcLhz2j3BaNgeuz3BpzRu9TsBQ6BoquqjqN6bH",
  "key41": "4oPGDUfshquQ2bCv9LGvEGmUtXFvNdQrFfNRYu1TyNVmGfrS1rVAPqRM7H4ZaXh6dMahmhcSeVNyTbqJ3XH8XJ9U",
  "key42": "5QdXmbM4L2wTMnGo3ve5XFknb5vB1QBKBvvAhfpshvF2GZYiqp5SXv9xCGAtvqW6MbmiB4zkb6842NLY5u9DZFf3",
  "key43": "4x2GEng3dkkxSkvA8pbCx5PMPJURDzYoSaMTPbRALQXLxajARyWcJdsZrCmx5FxEoJQG96EdityPj1praiRMw8wc",
  "key44": "5Sy8w9SSn9X9hhAG1dCP8r2Mmvnccbfu2QsoG17EAZd1ENrrezUkpLZ8d9StH8HLo9BK7VKt5HbXHGXbHz3LhEZM",
  "key45": "37mVGbH88zCBq9zJqY5BM2TwCiN18NF61EiUdNr6qaLSSsCXNDsZrxgVx7tinDrJqnJjSNCrGtd5gcqPANapotHo",
  "key46": "4eSNZ4FswHhHZs9m7eiHAqtLofot7ktRp1sF9wxJg2wdwtuDorWziVxbcnGjuyam8b2cXnGwBBgiK3FsFxkudvKm"
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
