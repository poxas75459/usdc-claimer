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
    "kvrFb6EpmPkUm6nCFb7BYKJ439RfDySMX5JPAVACdJs4a9934inZyaKffbxa96hvh4kaDiZjr6MsDbusukGcnSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVnfwhxZ5KtiTaMKGLL14vpQowS1rQCPNDu8Dh69MJJD5Y9aHmNQhoDQqCB7QV2c5hEESotwSFX2kRmNWs6bhH8",
  "key1": "3kkn3Nj9NGdy8EmcfsSyE1bbfXkMj51JGnwJUjC46FWJB4tCVFNxkhHRqnZnac2851k8pTfScSidAwKcwC5wcc2a",
  "key2": "2NfA12VowpB4h2twtfgGawwErihuqysEfpfjSFjCouFpr8fK8Griqe84qx893936nYDbTisL82pqhqNbGiH44AxF",
  "key3": "5JD8aQWTyzcd9yTC2Cm2gKtwN9ZW7cf3fRRmEze4QBpdPiMHmHZzGeh4VqPAidDtcXNDdXtWeufzC7D44zkfuaDh",
  "key4": "22bxeojYM8j2UjUeyQr34uRddjM4F51N1aZ8KnudCGNGafqP8BPU8Shp957dyxh9sWMW3eUo5fQmzrwEmwx2GBHZ",
  "key5": "2KPNtuVUjy7bbjxZbfT4VC74FvZE9QiUJQ7uJciFx6wvagjSYSnzrAs3cQ3Rdvm2MJHEomDEjjcvJLmjzSkQWHTs",
  "key6": "4WBjgtfvYrbUVfARURC1gRBBnGjmYcKRXKqRz51b3hUfGWLGxjeU81egCu67BALDAinZt5nbSHw3HH77evJY86DJ",
  "key7": "AvSt5Kpyx3QN7BNyarVDPdG7TLhupw7G6u9JXKgL8XsKnzrdvhQu3vDj6WjwswBiEhf61W3XJnQbU5py6TYGYdk",
  "key8": "521o3uRXraD6NiJbCVJrmf1YqzqQerqkvnBwSJfiPBBskwwxWHkhpvFzPYc18TdE68y7gjac8Xp712j8gajKe7aj",
  "key9": "4HazsMFWFY5oy4v2AEuxEQstymktCdsYoQ4CXMxAtp4bYDSDBTr4NcL5rmcgttumJYeGUyuqdYAMp8VbcJJcaWer",
  "key10": "3wBQ8pkDJ6B74SLLiSEkuLpb6qg1wV1DwYgReMemoByXwSg5zT9bVGkjaqwikepTGxVSqY78av8D7XAFCw9Kmfbb",
  "key11": "bY2TQT89SE9DwuhiSS19PTAVaiGGfs1xtLQndrvUxyt21yxUa3H2kTZxf3PndwaeDMCrwysUyecNJfDkHmNdUxk",
  "key12": "3TFhTBm9cWy286qwBTbBdqgaL8KBHAkVbiEt1HV17PjRuHvRvEMWHWaZwDsFgXRZRmNnso1oj2sNK6FUYGcbiVde",
  "key13": "2KLzBvY6mev3YovvLSSBfHR5kxmsLqT3563coyWorgcNcR3j41pADcg1dGfrAHP5b1LV6y8HqQnWS3EmQQBbH3Ks",
  "key14": "4ZaftriNawayZj7Z814QbEQRuLj4uxzTHkxcmAYAv2EZnJGCQZuJv4LPBA3gj2wL8DdHpYBZnburQPDozrhaA9j6",
  "key15": "26jgZw5gPQCXNwwtV4X85zNHsQpZD9Na6K7ddhQDqUGMX3Ey9DrTqzprhG72pTL5owvyd2QAvE1WnpmCe1sqLGVF",
  "key16": "3fXEhUThfk1FcFczxYRPZKMEvgfhUSWsJ9rpNxM4JSMPqe3TZRbmrd9iyRbRZ4dugNoseFQMXfbfmWsrTXCFvPas",
  "key17": "27VZBSBJVrZKKaUDDtxgJrRfnQMVHam4XsD2NrbTsQQBCBiTB98jgXv5BRaaFc7wAZZ4ePVeFB3CkJK8EhGK76dq",
  "key18": "5vjNoAAhHjnAtEaNDvk6NYMCHAtHo2Xu25vse3QaQZfnVXNDkrPnzzDsnnNvDFx6uPVvn91yf6CgNSwBzED9iZv",
  "key19": "XbLHxYmhTu77aBRtFPgteLzKX8YWoTLxF6aBzcmD5LqSqKDEoE2RMPYTSpFNkTVD8dR7sUyFHF22MrPjW4ksbEJ",
  "key20": "4KMcmpK6m6vyWHy3nxdrVLphjavYLpyuSsyKYsEWZnmg9NYL586D1hof4wi84AjnsxomHc3t9qM7rgFuvpDbj1Gj",
  "key21": "63riX98AW3at4LFTthmz22wCNjqKBdQ8x6oAFoYf64JV28nWY1phZ9gvuqU8xmA7sL7xQ2SL2eMzdPsxwPuPM4o4",
  "key22": "xyeVR8RodbMmdc7zfCp9BX9rRH231En2RhNmw6bzsckjkuD7TL4rAnoJ24e8SASFTc1ejweDoDUTYmW5pLcV2Wp",
  "key23": "ti65R6rXFgJveDdERGkVTpPqWSrBjFEj7yDysPTjvKcbMAtWexh5sqkT3SRUKddDQj5VAEWhRQEnXGhyftabvpa",
  "key24": "YUMS97p14yMUxmVh6PZLa1mZWJnNb1MXuj3wAaXoCip6h9hk5FgBkxJBghj9f3nEo4CPV1n1Tq4DDVCVZyxC2ba",
  "key25": "4E6j18xZzHFimXE7bAB6LoAEJvdm74HeCiYmZPShNkygP1yr1uhivSUFsdjQweSoj14247cspVuFaXDQCZWwd8ty",
  "key26": "gmysfQEPr7XyJnxrWweoWMeuyyw3XH4K8mmi487q6c4EXV6i85MqCybM7crsGnMdVeDgjfAZaeuhimvVyS2AjEJ",
  "key27": "2uRTrykc2UE2JRYribmd9hqxzerMwVcVwLJNedjCrFYktR4N6Kqw8aVcwVBEvogLZTem5YGWTjebM7Nc6QRgmist",
  "key28": "4XvxXUpvtdBGSqCayi8Ap6tmbyr34BCu4Rb2mea87nvifaAESVn3GRiTYCW4G3PMbETC1cpFnmNwYYjcQ2hLhDdx",
  "key29": "4CatrbSj6D91CGoxsCtEUvNHFvcQA5RVpurYLHGDvLV5PrfyUYrZvDsREiCzMNfX3ezfJCjSL4vxa4ZXyahVnGCz",
  "key30": "3qXVJf3hvmHmRhus4cPBDqAYUG6ALa3uCvaH3TrhbKwdfSkktNHsZUTVvcdDfgYQH1gC6Fts9CbVYkUMpBeTudcH",
  "key31": "EN4XgduneYgAQhjGeKriwobQ1kaJfxX68gxNjWYfhepL6nnNkNK2tjVZb2R8KpgiQc3ALzYBNwRRaEnsv9WZwpZ",
  "key32": "1i5hgQi9NRczLaTrw1mRYs6xUgWiajCa2YAwxpEg9SEeJfn9rsk9Kf3B9JEbD82KDfCeUrFvVh18jAvC2D7ifX5",
  "key33": "cDG2x8FcKyLTsVABrdFoABTmbc8qUmkt9S1baVY6Mvg6kuYsJ3AnodPPcZ5xushsBUwT5GsPx6RBjzEEs5q4HUD",
  "key34": "4UVhj6vr7vUMBDV59zuqzJZuzFbEf4rZajm8NFydkSofZRbRBBaJEx9RpVXh2EF2LRarMaAemCbny7xsAsTd3P2H",
  "key35": "Lgw2r5yMeRmXLNQDBiueF4NxiE4Fuy3YCxeQEu8WhdwmKVE2zzBVVpJD7VkePh52kt8Bjy6LdN1meCnQvrpgAKt",
  "key36": "3ZZGMdw5Z7GrCYut3UUmDihMbYv4atpxNbZGneHSn9B5EDgTCsRCHeUy8yS1s9ArA1kiW6EqsfNML4PmRzgYfQvD",
  "key37": "5UknuZ8ySN8Bp82hb7AHtTrNxA8rUcejhZLR5aJR85rpaMPUz19Mf5NG56X9CjTM3rYWLa2Has6mvHhLkvFM5jnn",
  "key38": "5Su6dkxpviyyjATneG1utZTEw7M9crLmMaNgfvrnUFMb2Rkwxr2mhvo3SRD59XwRaeEeF8quXvouQASjXUfRLFHJ",
  "key39": "5XUMouo8pQkd58d4B2hWqaApjmbCHFT5fUAExFctCopGxB84hWbWMDzC2UXohCEfJdjVYNRMUsPnZvLwdY5KKwoE",
  "key40": "4SL3MAwchoELLJfXkpKr8Yy5arSjK6Nn2QU8CHqJFrEDZ5r4ymQFNrZzSjqcRdfR54esN3YihBsoqDiyDUYoVLPJ",
  "key41": "5SjAQgNu8W9wgNDJKqFnVCXT35hFrzj3Jy2QcSfm7gYhnKhrzgAS7UwpDxZ5ocDWFbF24HkzhMJ9iGqjGJxaFKhy",
  "key42": "3sjrvMkL4uoCWMCujkN8PLFU2RGWF2ic2fQq5JP1UMnnBSEtGJsVSzPs6uJRucbRhaDXZmKifjoe9HwEj5UmFJNb",
  "key43": "22idL1o1o7faaFfJ172vkRSY4uskCvDnNBiAPkgfxHsgDmMN3mnKHVN5DwUDrs5VcuHLnzy9LPQEb7pv2pXDBc67"
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
