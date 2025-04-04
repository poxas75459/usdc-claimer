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
    "2UFaXTBRDvuH5jXSWWSvgN7rVJxyQ5ixekoJuoTH2Hkve6hKgwtmGXFFQ8H9pkzm4CekUsT5DeCDAB89z98TYKn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yb6YkvbK8c273QDeNs6Q4fC8U9CxHhqH98cp1iXiMdaqbj4meFQC8eVLL8rWpe8DArpzWQbcyo6qgvgTopBAZ6r",
  "key1": "EYfYGGvPhDyMod9gCZQmoUzDcbxEWSVmAiJuLuVy5GNx5Y7Q3BHYH17XJsqvUjWtza8bP3R1xNPFkgK6NVf6VZ3",
  "key2": "3TmbuvLodSKVD6NWHsHVdHeDGfyWhGoXRudySbeDN1SCavRc52VbjBgDzhxhGodHXf2LSEHF9hs1MSyJadx9Px8t",
  "key3": "22ivoK4KTzGjS7ydpZenLfo3bCchRoSP6hGXSRN9p17aFFRYz6pxfQiQRza2tddXXmwM1JEY7Bj2FqT4pDUXMWQD",
  "key4": "5PgVW3dRX1HR7WQiFoAruP59Tk9RBD77AaZhhUrUbERhSmKXpX5DtHaA7uoNEixqQFhoVJcWMGC55kqTz9CKZhou",
  "key5": "39t7RGcfx7KiEfBmUTL2o7VZD6A4Kfxcb8MezEQ4jF69XRmjXRYeGw9drzPCWCmpvq7fhJBU6YLm7TrZnnjjcBx2",
  "key6": "4bFvAej5837bCa7vt7DLwBHsMkpD47xkZMAZDnQfQ1hLE3QfPAiwn7LJ3R7DzJFCy9vtrDcNomyZJ5t8NjSRfDqb",
  "key7": "3sFLWeZMSQASpdqBLksqHpwhk7hmtGsR2SgqbMyf8N7mJGuC1NMRt8oaFDxQVidtHdLAVLmKthjiyMj6NnRmXnKg",
  "key8": "4Q2YDKFLcHuJ8NEx5YVJ5Vfq3FyYAWQaetxZT88kqMihcDuozXSH2Cqzturwgmqegx1mtstpagZComysj4ThbyN7",
  "key9": "38hDTtpwk97pamVVUmG1kg2yUbuJpBRq58dkBHvNSoM3qoks5qeMPsD1FRt3fVqgz38APnsrND85CW49KHRjc3Ah",
  "key10": "uphZjEPQd1tAPk5dxka1oVbaacQ1LhSEymwBf39rSbnr7fqpgLJeVgN4CFdUzoteySBqBmECeGp3QN5yszdvJSa",
  "key11": "5tqohvqvhM7w97R1TwfRDFgWG3ME6WAxMYAPRJdsGHoXXintzH4BpaJDVvXaN8bWmv9oszeTZM38h5PCY6ThSmkb",
  "key12": "3JJmbPdAWkV8Ydu7R6g7kj5qtAGUmHfJ1TmSvqxxgQ9hV28vDHMDStnUJtJJPunwPMfnJb2GpMptf6YqmpRLzaEU",
  "key13": "4QHRJ8aspq2x8dhTeLXqTJ9zzqFXjS4cvUgfWHBAzrdb4ZogJvTCz1Bg34jHh2mmA4aithxpvNbjVHmehU4g1Zw5",
  "key14": "fWc7GRxBr3axWYCfpXkGurfwNVuA7Ebj7v3wMu3F4GH72Pug2Jnj3uV4sBvSnihkbCkPkmoLSpxW4ftwdndespJ",
  "key15": "pUKaKhdR66GCKw53Gy9W5maQw4fPBQG5zq6XWspdiyF1TTgikFEgyUAnCRWQ4NErKe1yeaXJoPDPKuVgPjQDGsH",
  "key16": "2GdqRGYHXgbQ7w3VSToZ1wVCPrrXKuLsW4h1UF1x2BE1JsoXhYuDXKeuSGbK7paNREc6JY67JuMa4xAaWnZBQqoF",
  "key17": "5HBF6vXGGc4DVJW9DTtpKemP95XvpTHoCUKgSKHy3Nhvb98iA8RVTC9TMLJF1pNZZGHDi2B3fkaziQDEGm31nwTL",
  "key18": "2k98QrchksFPFsNuo9mR52eqZpXxPWS5RKetAtihooecJs4v1j3y5DnNkfLqLKVpygJgXCNJVjcXb4S7jrmBAjHh",
  "key19": "5TzNDfbTHn7gAkXDxztx7MLerzddnuYT2ec2xVwTZUxUsfviwEoT4cCvTJc9zHQNBVojK1PwQqY4nq7D7tTUAPab",
  "key20": "2wA2u2CrJsBrAuhnMBV5se3dvouPn69Rsy9AxCHy5QxHStbiJrihd4QgGN6vt5EDFNCoAEAVrM58RVFaefsUVYmj",
  "key21": "5JYHcEvQxrPYQDSBMhw5fekdirWHbh1CVsXKpitZQAz7Ek4ztSjiUkBcEUqLfDiuyW56N4Fwot5ovxSsRvQAydPi",
  "key22": "3AeUoCVQuEb8iQWZdkuQTEytyHzqLXFECJtrZofW6FcAWCF9ytyRqniwRtbW8utbMwaddsWt5tvpJwTWDgzU7Z5e",
  "key23": "2SvnxfSXFA2JYCyyu948LZdgJR6ZPKchuCu8CUuxQdDRuc8PJZigqatQ6yujJ6se5DEL4bsHtMTtdGsQXX1BFiFj",
  "key24": "2fvn8BUCp6BbzZjFQdM2J6AHKznHNTn2dfJnkASV9KxjxsTzpfJnhxMWTm41itbJdqnvCMtcQd538hUALgGQe5FL",
  "key25": "2vhN2XyckjFojeojgGkz2sMw2LHTYKPvh9USTMsDc2PPd97ncZZbpzZo9ZJqbiDC2XPvTiHsQoc7jWFUVshB2DoC",
  "key26": "5HJSdMAUnKACeMGFhBK23E63prZmog6ho4WcKrh2Ygg6MHyUjBjPonaeuie4LsBt4SoFNCNnuwPgGPu5ReRGr1Po",
  "key27": "juhLP1JfCJSvSmGgxSvbthvc88qjQK4XtVTVycE3kbbdsgbYp1agimGHm9Y1MRA4CbckrDdvDhTjrVGhNu9hYGt",
  "key28": "Duta1pEYPigfQ634AjoaRmtye3pmQTiuYicnNrtBVVFeQmczkMYNtRZ7nWYvLThMMccRqh3BFrsk11DzZVBWjkV",
  "key29": "3njree3cwnFmmT7FqZmxJ2Lw8w32z8VZqcNtLcBTiAs4je7CGqrF4czrUJeiyg3Bffg5Zy4GtXMPfXWCC6BuKoRN",
  "key30": "1TL9Ra7iFRKmuTqekqUt5X2zftFcdMSnbzYZ1pjXpuD71oNAK5AAYdZ63PcG822wzkpZ6yEeb6NrcRSVD7eNZS3",
  "key31": "5MehpcxikzM8VeZA5t4wqY3TAhQ8mJrgox3n4N8VrAptnsAZ5z61MoY2g7RR85epUaR84n3FgUp5bx74gya5pTbG",
  "key32": "3b7ixEPLjgBStXSCEDeZRVn95e3RiL4BQGFpKKkp8aFD3WrXJ1SsLG3e1Gzh2Ywi2fnGwLZ1CA59ZRVu1e9YCK6z",
  "key33": "4tUwJRRYFKTecEBKJzNP8gonk9dDtDYLrhX9ysMr2g1GcX7ddLBSntC3WzTeZbk8GmBChoLzbsocCHkP7xWGqeVp",
  "key34": "hXGBSa2b7gVA3wTzNjxtnuduLLa2XVhJB4t6X55b3imWEnNya6CYGyzUY9rJjTAqgt5ru2T7V9EFugJ81YdkGie",
  "key35": "RKFLUa3ZuUoC8JnxZ4qGMJBUWuxvNac4PPHWoBAsjGzvaS8EwRTXRZFYB4cAZQ8rLQULFBYorZk8Z25NvmAyASK",
  "key36": "27cgd9nnpWLEQSPpWRc2vjHDjNQacKi4vTLeXU3oQhP4aSYwbRgZozhgtMwoEzZURBRxzzHpHe7q6NLXnXQCQ6nP",
  "key37": "5gSfCraw3nCnZXcvxdfy3n35ePVGBCJy3VrzWJp9nKBCn66UJvj2SWL6phcUTEjvi5Nccp9ahoH3D3QithTYvCo3",
  "key38": "3a6tugng6o673naF1d2qeSCRvydzVCgeNRfgTSFx3F4KxboUs6Lh7svthzqZtGzcT4LGCthrcrCgGofKS3QWyty8",
  "key39": "3Sm41mQh1LeWhpCB1CR1pXN4VVPsh5uhAQz88M88vuqmzZawv77XPhEwqDHE4dWnFncq4RDfFUaQeFmGf57Gq68g",
  "key40": "3ADk2A97bTzr1PyWZbeSVMyoqhapLALjdNag1oRwGN7xhJQ4abAowea67seZJqrarCMDSf8S5opmofHVRs9idhKv",
  "key41": "2o9yaCcvKmTrR52hteWmb1DQpVVqP2a8jkoXWurSFRTQJRPx16Tu3KeZHxigPBAppR6yZpbrrTVYSfRu9BCUeQNX",
  "key42": "t9sEhsKfeyEaMw7YqPUy5getqHG9R9WBY2rEuNAGCfpiKrvsUbQXiYUUXBvGRG5NygqLXKchkUCBLBXPdzHHWJN"
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
