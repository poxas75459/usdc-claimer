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
    "2aNMntZ1a5f2N76QMMbY4uMW84aESCsswyEyZd5egXZTyLf7YTSRRFonpX64cQ2TL1cthMbqUmzfKARnXppSeTz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNs84WW8umdqtHHWGJ15qkj5GFQmiHvgs9STifig9WBoUV8BAtmxWurgXTR9YvPQNuLaYVVf2MZU8yVEUB5qzYy",
  "key1": "5ZNpDht9deTGi1LFAbToVtpH5pQ1Leu2C6uFJjuTtmSduh4fkUAZd9Qcdod1PR4m34SjdUzKmBj9U91G6zFYYEbE",
  "key2": "4SQbikWfTdYNaGYDocxy8RZS3ghxUGtJRJ9akMtQjMsG2wMbFmzRUdAjYYe9JMpcdZ5MpYc1Hdx7hXRQvjMsoL8v",
  "key3": "4C1Jzjfz3gsaZ9s2QMWePb8EgFKbKJkzVJXKEVqEnmyQ1FoRAJDvvRC18ahhSgD2QRW6YAY4uYEGCFkgbJoDewzj",
  "key4": "2ZErjUjCTSvmKopyAPZoSqqYdKL1JyMqiBYCcGL4za4JS4JeQGrM8ZTcRJ4gsVULk7NrBDfVqS2hK1Bu6yPyWpM3",
  "key5": "3AvjAVwpLjgGYADx1taKEcCvntvZ3aADU9bNC1bSMHWAHWK3CFkhxmWRYkpFCXSoUaWzbrhE5Wz8LxKd7gaMmG4p",
  "key6": "2J9LxJAjhG774PWFoz6o1FkBvsHQwamaRGuUT6jvKMn6z6YQ1y4GcQQDk8jZfea9tgHwd2v8xv63SwchwvdS358D",
  "key7": "4uwN9iSM4WntJsmPq6iLaqC4TF8A1sjQWanM8xNqK4dh2BUSAyERDNvyZ3XteLraJL4E3VGZTnFVeWXEeuPFowfh",
  "key8": "J6Ra89rtydVyvj4kzaGq22XDkSWnL5zafeAgvr3J51pKo8EJ4c6APwtE56ByEn3u8oCRgGuBkvAgjoTKReqP1uG",
  "key9": "2pVJtEpT7PFVFtdxMLbRhoCU5SMVr4sK9WvMWrrTnxMBLGcoEjfmp45TDq4rnKxeRTqxJDrBCxqhtN48G2HwUkLx",
  "key10": "62WnbNckECmDNbFa9NDkbPUutTWdfoTVdBpEp9XsF5A4YKNzszYHx3jGEqsfyYYnhBgJF7pZBrsovPNBQnnXTedW",
  "key11": "3Vtd7HGu7EzYMQ4RXfcnZLFh6tURPamFRx6bLSzfaLPfVotiwQbBohS8hwvhFhY2MJZV5YMPXaGCkVQ85Thc8kvr",
  "key12": "37sEZgLFvFAWtnkiVGFoBPV58BqxM9xrHD537TEMS6RGbEQzLqgQHG6cR1zKFsPVKrr2WyLtuVGgTVtaTHkN6L1P",
  "key13": "FSjtDRxFsjhZtKBLeENoCVF2NyddXNHiG2B5CJ8kjwYZVeZik4Acw3k4LhX3WKfX2pRa5oPy11zM8P7V9Sb1jGV",
  "key14": "4XkZ8V1LNSCLwU3vf8cxmYoHqdkTsmTq7ZZcMSqKmmTqTBxi2r6BMMbsZVVjRDW64PzxVwLdR4gi9oZtraq3KegS",
  "key15": "3fZ5nRxHm9hApL9AEnoEjugX7sSVp4SYTEvxHzoA3RR8aZfBiA4WQpZXrzhMMcRDRJBDcsqrPHWbPEQNxyLADj1n",
  "key16": "5JKpmovZyrBu3ke5VUaviHjYRzrCsdQx8ne31zb3ST24rDhFy13S15NGAsNmoPgRYiRAqpUG7NZbuLJssjfrcY8s",
  "key17": "x2yLuxXC9vaVGtffKuT88Pue2rimwYx261XirBsepS1CtN4ruYrHSrCFDnanenuZPgrHH528cbZYkjYjWnSRPKz",
  "key18": "59E3sMWoZ66eBm9a5r9HFjkmM8YvMRyskXaAg1i7WE3Rtttcd7HK5buaooqa24S4uvypGsEo7uEdCYaDYdQn2mdg",
  "key19": "3SPq9GtKbHHSFK1EMEc1RbDdSzidynm8cgLUPWfjXpaMzBgZBqYacuKi7LzSD14hyANH7NwnGhSwH6rYcrPRE1fZ",
  "key20": "5KJsVjng6WWRMe47jRZpPyAZgnkQ4VL1BtRubj7k9YjyAJoBDy8TLJgFBNBqCLcR33dKysXRYe5UmqAzCEVci1Sp",
  "key21": "246Y1kfvCRB5sj38cdBYnjHcYWQSYaVbC3i1fJ4ApyNmyZqCKsUHuGhCiS4goAkW3qAq6TTXvfeaf8J3yBfRdUvs",
  "key22": "5GzDZ4QNbJRvuLwLL8CahibUSa3s5ytiY9xKaDmTNTVXMHiNBr4SYyjtEoY7wy6iiTvG4JNhZAt6iHQ2uofzTkpC",
  "key23": "wUUKeLYBbb9Suub86Pyvhp3mRFGrcnu868FH74gGnKj6JcgFsNDPKFFF2awmC9E4Ps5UWE53ZTbn1gkA8GcmZne",
  "key24": "mWi7n5R93HcmQhJreYYUnath7WZKb25V9EzZE5Qo7D1uwsYBGana31obZ69kZEKzSwTYN9DpoBvBq9BWEdqwW9e",
  "key25": "2cK23auMvJ1ryYPN7vJraaVYRiePsqeuhW57ZF1XeF3TV5EWeqRpjPbPCgP1HjNpXwXi4xtSHbRZNDTetx6KGpu2",
  "key26": "5LnMohB1MuUTJ9sP7rZJtxXA3GmV6ADEdgjvnrkV8P37nH2MbmSUoC4kLJ22QRQQLGmX6ZJDLM5CTYpeaP9g57BR",
  "key27": "51oB7hN8moLchmebmWZ4cRNmmsFVpzMtiZ7jP4eaassJgxhRnWuMezp8odVGSHezciS5Md4XyDKKhDuCrVTpCJVt",
  "key28": "4QzQam5vqkWYVSCLP7p96eLNGmM4wdNorZnF6wFjtQqWp5YUg4iEeu9iwrXnktry1ZpyDBA1XAhnTRr1HeKGgsnn",
  "key29": "4S2QqjfJTF3sLVRhsmRw2FgyA4QZDsXzM4TuwMQCuKDYWsXiV7cvekviAUAzTxm9QCeceBkpS9Y9oE7GgeVvCXJ7",
  "key30": "2BJte7k35716AkuFmMF9Qje4f4SBq3iDvT1SM4aS5iH7XuBh58odc7Kc39svbXvWFMAsBdP3on9PxfjKxyGGhFKo",
  "key31": "5jinneEdaCZ46uwz6APTWG7voh9k5FJ4xqKjcfCG6g11kDXUfYDQ8eB8ytYsQCPvckEdnd65gzuWDwACmnLPX4qs",
  "key32": "5qziS47zyJkuGzHEU85WgTSGD4w7x4hzD9hLc8AaWZzicGNo1FphneUah4jJA6jeXZFxxx49nqQ8tyAS7rvVT4hq",
  "key33": "T6TBA8Y4s4MtEw2sJrdewFFVL3J6CG9AG84z1LiETq8296WJBgvhTHkv7noFKrtxEKEsgixZiNwHzWjjtLHUb78",
  "key34": "4NHZdxWo4fAoLWK7abcGU46CXQr8vzxMEW9ospUdgenjGop5CrNzQFiXRbKtJK26Una9cUd1ZV7ai2213ed3XUZM",
  "key35": "2Nc2Jj4F6xtBzTNBoAFbGe3Yr8BfTxEtRJTxxijprmu4UFgqT2yNLXesc4A7QCQLntGBPJJ78pXZoLZYM5xi8Lth",
  "key36": "HQwYdvFrT4325KTWyAcBbd7QDLjW5yhXyR8aTamKnbUkFZ9JamVXQAVWGBsvJsyud658ezdMDCVxaEWQS9dtkT2",
  "key37": "cqGMuqsVsuRVMcwg6M68PBuFg5VGrKQriWPaN1acj28iAXhDEA8H1ZqEzFsXvmyMUb8kRvLZ7G7wqdsWQVFgja1",
  "key38": "5M8UnpSdxALvZasvdWDtgKzVyLq7P9podgov4DbWNuCYUBFUn3qBP6gDitg6xgbggRC9rPvc1w4j2tGM6LohGQv9",
  "key39": "2urmUEn4XbQGfck26BiskhBJSiWFTBJSaAaGFbkjUVQ65Z3mh8sjvFi6xp3aRBrK9Vm5UfwxR75mfumLEdwkjhjd",
  "key40": "zRyFh4X23s6uYz9D1faiKPUbjuiF49QcLskHpskV7eyX83Sy63LgoKFJmLt6L1iF8LWpCdCSMMNprCJLbgWqZH6"
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
