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
    "PiKXnekZrsaZLPGCRpzns47GcMpwHQJQCLSYSycwwZat9FaoCCMJfernHqKSSooCg4DPCHVLq7RniWS8meJktTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcZPYGmxBVRCLy36X9Cj7EhauTrvrtFFG3vpHK8r5iNX9CC6ztDtfxTMkxjfM3rhQFf9RNgC8Kii2YdVVg1qNXh",
  "key1": "5JzsUd9Fj3YEyugaNtPeJUcgx7nsksis7gmSx91SXmrFng9tNrzSLUsJJR47fvZZC26t28xdDT2fm9TwSgKsSaeT",
  "key2": "5MyrKHg6e92HWjQf2QL2aUfaD5pt2SJYPcrkgeycfhVCW9LRFPtHSRkNEh1V6Q9RHrLc3Yp6W1ybxTn8Kq5Kovbw",
  "key3": "2HEeh7njdGdZu7FXtj9mugePvNFHCBq2GyfgW5yqcfvx2EQFNqLYSCwEMMFfNLEhurhh7JUptxMPXpUVaydxAWrp",
  "key4": "oHEH7QNqLyTiy4kdtUXiYivBqLWQdhh2qRZUkmdimVuu1m9VzMpjjoskrYmHryjuoXdXYGy7r3755hSjjqQXdCa",
  "key5": "31qEirz5ARJPuPoxXFfEczi78CdAt1g6w7XZdq53r9fW6T1LNHyrBwPGTedjfaKEXYmig9XpGyzzVaJnNccDvygb",
  "key6": "3EBEqVjZ1nSSKKWwDWcZ9juSMc4Hn4nqBbv3weiXpbzqVkGtRwfdyuV7YDNHCu2Dkq51kMs4dWVZ7H2VMD4DTp5F",
  "key7": "4JVh9EKwNxEEHCCAz1xRyNWp6VrzbMVAqrhXgKDRSZhfF7yWUsvZAdDj4FP55HPjV3JscZNvkwyW2eyBhRaNeAi1",
  "key8": "2hG61XRjDgtZG14czQSgK5oztzPf3dNJ2r3abcHV2kjam867V7Qum9v39FgwrXUDrkbva2rbmHpbS7FroVi1imDw",
  "key9": "2EspCJ2mS5DYaqxD995mQhygZjSG11va9eeHzdFRsbCknejeK1Tykjr7dAJFLFQ2PweZy9TmDyPsqqN29PJsmczs",
  "key10": "3oPjMzE1F3Y1cuZH5NPk6QEFxMM45jDmR7df4GUeoF9wRp9d2gKo15ZmADVv32YnajW3Q97DJodwuUsCrSjfcWir",
  "key11": "2xFEdcodRiRFVupZH7WXJZZCWVyapqopy4h8jxqvyGXQxwifFzS36VjAwXW1TLSQ269ytvjmGa6oAUsQpfSXNy97",
  "key12": "vdQrFcuMfVNqQwSTFatWjCrLCFddULoJSNpkFL5maqEpwsWZbBSKepBnUgPsa2MkuaynzcgcDJnqyzQnojhcGxC",
  "key13": "2nSAu2LwgGyjFxyDp2QBMTKZgPc875dkDPNvfKE2SZkmxRFxppvGavSAyjCM47inAkon7c4ffVffaELxBPx14Wjy",
  "key14": "4WD8BSwB8r9RZFfzDGPxehWw2DiqnisQXNnEcjcL6vGDxjBkV3yh9bz8kPm66C8wa5V8L448JHrKTeA6c6wLP4aL",
  "key15": "2M655S67oTuUYZdSX69Fb4VRvGD2c27rooK3TSWPB1enhu6LEUnbB628kMQSiAkk7PMTTK3h5C7dehmrX5WppjJY",
  "key16": "2UD13o4oJuRQAfVuEf7haeBYLydFRCHFb5csUwBGft3djbFDKz238jEFd8TK3ioHWc4xu7e2WTW8RCC5ctkbLWjD",
  "key17": "23u8dWVHvEJwucdK7CKurDTueEAq6GP63pPYgvnjLqsygd7P39teghpuvN7Br1skoz86PGGQPQdwk6bz86oJiLC8",
  "key18": "2R1jBBqTJ9VvLFsENTwNFnrCpXHgyaPGqvPoMkUBZSgtSHuFksZXWVumzsF71WLbzsBvbi163NSkp2kJ64nhpbNy",
  "key19": "3n8f2YMVnKtD3SGZfvnAkWK8FYruf9273QptyDpodjE5N87JPsCgf9ThaXerRSrXvhFRStjkgQK7ZHjTeTZnoTKN",
  "key20": "4P8QmYNDSCJGDqdCbCzcwfsCZVDS4rjijCdpwsP2vKne5Nyov6NhmbFykujbKaaPWCEMnc1wHnmRSJWEzhLKmBTo",
  "key21": "64x7Rto5CWdANoumWszygiUopUMWdSdPoZBBgG5ebZXoLrBSjJcwoLixurxeid1tkXjUKWJVrom9ZfBvwE6LV7en",
  "key22": "3E1uByM7pqymah9iDFyjYXsEL1KysAWhXVPRNa8ZxtiARBiSnKiBiFndTDuP2sbkgC3UvT4gQ9djD9XimZQoizVX",
  "key23": "MJQ54CgMRhTifK23TioWU3Y5BDWxJiQEAxUGfG7dWSiDj1vzbBSyiGVNzif96yZqQJe33UQXmakw7dcJXHK27Rw",
  "key24": "4iKMx7bt8KvbRCQHjMf9cszyqWE2mDNKi3PDBmgbcmxMzGComLSrS4f9zRaPLT6ZygxKg2vKQUxz3CfzeKA75yWP",
  "key25": "3qMzQg7kEufA3DCtV63pgujUk4ephEDX3z65z2KwHqBJQJqJofhbouUcavznqbhtqR5tnTqsjNBkTqRcVyYViQ3f",
  "key26": "2g2sbhcsyEH4u69FtFTWyEA91zcgDdKcPw5RHPUDgDB49kbEcXFEui785RTvDsf6exeknEf3zWGmdx8cw8M8m2Eq",
  "key27": "3ZMoe1sJ35pAtAJWKzV5yDKb1Zu1yycWocE6NUswrU7P14Q94aDhFkAKzKXRY5E3u3ZhdYpEvqsWe2diApK8CvAF",
  "key28": "2kXpMxgZwcEi5NwcTsqZAH4M7rocaPY4d3HZYVJjd4uWfVHJN7bNDWV9P9quDSTuUnCobCSeQ9orunW7BbNmkBs6",
  "key29": "3TahtHWWP7MNg6mbcdQCoer8KwS5BMaaaUQaj47rPkhoVEQyHpymVMPArPV2Qx9kKmiKG32TjZekBrq1esbsXsb",
  "key30": "c8FY77393rvNPfjzDntpSVXtH2G1mpSCRMbf2Ygj8pncGGFh7BErVvwCrCJdDqhvrB6wC7hmGvQGshteanFMsrd",
  "key31": "3JVtXgiruLpEZzCb9ZQBqi79jmHPqtWSoBgDkzsSsGBZ3A6subAUxrp2KfXBH2hmduSZueE2DnSBqqDEVj9cP8NJ",
  "key32": "4xjTW4uFMyikbZaC3SzCKbspVbfFqRn9PgPqmbDwJRhsMbzwZ9pVtdHZK5McfPZcNjDQoYeHaCrG3uhPfEkf5Xu2",
  "key33": "5WTfgigGoNDdCjbP53HmsCpcMT4wknhU73XtJPREYeJpPQ2YfuXfeNeoqUzhu1SJNpsXmxGEgP5JCZptD3bbARRr",
  "key34": "jfhuVgsAUGS1GkfKyF5eQhjkVGrZDT4sKmD1bVoMkp1r3uJ3U7YSK4WaCe1n7uAx4KVJvswYNcJM2hpMyKEK9hd",
  "key35": "5Q5ZeRatKFtnHp1ks2LEFuzQtCBnRzy3xYkWMvDLXs2tnDmb3YKGt2yGyeQPErNG3kKW1uxABTyPBfsGv5yPdVWv",
  "key36": "5NwW4kyoLbP9Kic35UVE5tkCda1wu8Hf2wTYTE98xjEeio6vbZhtqLMvP4Q1gjpAZ1kZmCQYGjhRQ3FyUGhfaX3H",
  "key37": "3q1DeYYXFfW7X5UPyJ8n6ijbYz3bnZAfVQNRdiizaaWv4pBBpQJ89NwQgBqcnFgAvvAR5KQJExyehDaf9TwGcptL",
  "key38": "uebW2m3bNjDnvYK65sJs3NdinBjuDpobBY52LEyp8SgvMSqByHaCNrMo6FoUP2Ue7wfYB69p2W1Btodr3p5Gohb",
  "key39": "5FiBtqtf3aCMox5aA2RzeH9DN52WmRif2vovPpmx5gogEGpkGUz9aUyoN4DkCvZoRuUN4yAEL5tG7Kjchief5DgK",
  "key40": "2u7sGZJhaZsPDtAdsY8DvKDrGYeKy2YKSiQypKoFxrSZ8cUMdW84mhRdE7vm6fwNR7VppZoTmdMxZyUV6Qs7c1md",
  "key41": "3Zj6zSrNV8tVBJNmjBtsdjkoNQxqegaqLVVrVuN45PYGQSaebQZxMqbFz8a467mbdSyvzJ5bqamVbcWH1S7r7U5p",
  "key42": "3g3xQ5iYPkk14DJWcJyfYJu5XDeRfMd9h2Rc7QFkcBRxppRrKtTm2XdNQHvCUPN1zvZ6HrmSaEkCcBTMWumyCWBW",
  "key43": "2KsZyJiJLE4v6dg8TSd42cHceXm3FQHRpULapw3Bz7QDSUp97GBb5Y25idFLq7uG3pcBhtESaDCNcvFVWKtVbeqb"
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
