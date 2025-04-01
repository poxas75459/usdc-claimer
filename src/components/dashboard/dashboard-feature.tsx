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
    "2Bjz8bzFrKDjLEKMWTprcwJVQ3jyUsvvFWaHw7zNv12qnUkz1cA6SULk1KyVkPLi9yvPD5YmoHLR1Waz6s9Kp1Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWhLgHSfco1Z2ueHMaBmkmAVnuw7MN7rBM7QmxamHUjRy59BK8q46WnFS4GDbqwZ8hqcqFYo9TSaSKq8oPzQirA",
  "key1": "cT8J7SG73d3Gt3NYRdJQ92tRWypZfL1Fc6XWShtjxbXY84FHzZ7BjNG7riPuevKUVfDBKPeUCiogcz83xguwDXH",
  "key2": "WoQv5e54L6ZsYM5ZNJdA4oUw7uYm7hQWrTC22ViXbNWegVphGmAHRnCiA1isKC9mnkj74DBPU1KFYjZTmZtFFJy",
  "key3": "36LHcuyzaviu5VkgjCtP5ptJ7QezCnoDDmbF7Vd63sPRRh5W5iReSttTuv6bTtBWz7Xf4KT73sY1FKZbTT1j4A5R",
  "key4": "2So5v3cvoczx99MXzaJXzNJGwxq9DmdxnRG5bVrLUiwZvwkgDKy18twdtUAy3puFSfyBwprcv2Wyea8r1x5Rsj8x",
  "key5": "co7QyrD4b87Zxc2gCgGPtuxHcdBKo9MXMftbR5G2rCrnpfrBvgu92UGcuP44oMAQt49Ncdk1jewMgW9CkVcKMzP",
  "key6": "tZaTYH7jzjaDgMQveECLTKBxyfqPoHpCwwFjFwDMra5dyWqPqqLBaeSWhKLAMFksuwrj6Y5LHsQEpsZWLTuRPmf",
  "key7": "52zdRv9XeGoNF5McowH1U6jDfmgrQgQHyM4HQ4vPXJ1kH1tWWM7NpeXFDgKTBug1YDMYvQH3HYEKQ97zv9rFocNd",
  "key8": "Qg8sydnDDx8GBNpeesGXjCnEVZyXLr9goZ7NF17r8AaGz4zwxBT2woYFcUYpoJk4J8T7yQN2VCPhZv6QoNY7Go2",
  "key9": "4pVx94RC4otyeDmzubxETL2JNvCdSEJyDe2tiYmLkDh55pufTraf9bM2wtKgGV2ZwuXMRm67L2n4C236evYxEp3s",
  "key10": "37RcRECDb9j6mpMLks8BrP5dx36he6ajJNAvG6kFSi1qGaZrG8unjALboXmdbeSgU43SueGyeUjNE1uTHG7GPqds",
  "key11": "2ohUcwjc1MMcxwYaryhyYM4PbRq3gsz4P9HAonj9EUeF7RL1n1FXzBcwnTfqqWRmuV1Fw4CNkW9SNfmfj2xzHGTk",
  "key12": "2PYEoQssgCAXcG3KTTaAmerBfdysWjvzaAvWkbnVDYcH42j9ecE18MCQ3DN9s6mzEvsDyALCzw9MNKjtQpfRXGz4",
  "key13": "35diN7xDiVQdwhV6iqU8D48Pevq5vUxZ4EGhUz9YcYgstz2Fj2FDt2dNiubnBPu8ojXNPN68WWhGArJyms6n5aXy",
  "key14": "5vNbUghWcvXtBVFkVpoXMkM9Nym2BxVyNrTxrLjq2khZE2ZHD7j6oj9pS8STaMHEunRzpHzy8Jf14Bpd8JLvixmj",
  "key15": "4hhTJDtBmKxXprC8unECttsu8LfQzPWEwHv1LyGJvyBZEZ2xFLzxQ8U3jtvDH2ktzCNrLK21aeNq8R9co1JzFfKu",
  "key16": "3qeHZHYDj6gR8hX7hP5xyPKH3sPYSt28SEB1gp8528sugKF87Bp57bmhmyqL6r8VEC9xx86r5Z3nRRUz77FozCAE",
  "key17": "3Cg1hFaV6xE7KzWfoHjmoeHTpV69cTaKWgZnZ2CzU3uC3y5Str95y5pVb2ta5TKRaLFYzxj6WNCNCirQDKknf2MZ",
  "key18": "w5bbuwZC8CHgLP6pi2osefazJh74yqoRk4htHDkjpqDqzw8iDkHjkAi9ForLMZ9iqP7FzrLVaC12qPgpkku4aZH",
  "key19": "3wuasBxGsDvyQav7jwtC5BxJLo6y6rFqX8pDSZyypyGHfaJnCn4hJFw3hssagJNFTz7WNfNJgwGcEdDLcQHZHxLK",
  "key20": "3QoHNqZArin8hJdYbikCVABDrVxqnniLcGevimSGqswuda1YG9hk1swhie13dQphgJLXrKdJZpLM613SzmpF3LPc",
  "key21": "Rffv8jeuHDKejRiYaiJxApt3ioPzpG3AfX9KYNBJPcQPXM2T8o6HrB8ivwboqY4E4wvEmc1jpmajvMboLDfjWCt",
  "key22": "56fSybSuvNaRVyD1uxoVfM7jfabWTFfHvpm1TqYqNS46zYAcGNgimwNtMxdwJxcHLhjsTZtAqDAupEFCX1mYUmck",
  "key23": "5aYrU5PqAERzE6Kmre4gNtfBcPPRpJ8ACQvyfgW3jPtoWrkhSHoqxDrm9bqH1F4om8LjZnG23S8RB8m6KLpPjz2y",
  "key24": "4BgvAqYKY5unEnFgDv3Stm751JfQBUjAXhmhSFgu2r7AHnVDq8m9tuPXkMGewSSmwTs796ghs2spF3YzUaDGb92W",
  "key25": "3TVMGQ2wg6exByjcABVAUDr2uCTUWDVSE9KrNRbqp2S36m3J2wJXtBWYK8oefB1qKTJezNv2ot5cS1W2CUTaWuU2",
  "key26": "2SgcwLeXKPxmP2pU1m4TAZ3ddoynB4ETDc2AnvM4bGwpqhsogkSFcDNFttRb91FghbJZSnuspKu2C8mhwq7m2PmW",
  "key27": "3D1Gvk38DhGNAFAdCoBr92pc6HNXwjLgobd6BLztw7wabDBtbtKPZp58JTVs7n5vprDCbYfJfS4qTqafHvwwxiNb",
  "key28": "2Ntjm2kp5gHTDMWzmrcY31UU84vRX18y2xjzoqT6o6qrhCgpHSwvt7zXFf3osYE54k78CfoSxsDSb4aAokdECLry",
  "key29": "2s9UPwy4D3UQiELCE8rb88FHU6JBMi2229VMCCgh5MbdZCEy64sM6Gs6LszDkmxQPLXrmXtDz7Uy1nTg8cm1GgwK",
  "key30": "JvCdkTNSrSbHE45TfLGV3YmzbjQsCUeGHe8FDkTuqjYK53H6tiKKER2Hai8gHmP7bZDdLySoCYNuv7B2cyPqJK3",
  "key31": "3uJ5xS7f5sb7DE8Vsb5t4pRbYfGBi6k2MdQQNop6TbYs5ZFMJtTJwJRjtqgun7SHVUoxyGuSjXxxT95mR299Dc88",
  "key32": "4rqDxy8y8CZK2jcvGyaVvfZE8MNctjMnXPUSmSu8L9yaPrs4Tq8izfkuiW5KTMAB4au9Pbj6G3SNQ6TuTooiFF1z",
  "key33": "3CJFRWnaD35dabW4mYBkfg3XceeKjRCNa4me4VxKB9p7SC8LHSMpDBDMpX1Hy5AKzkUEiPjtyJYQ1YgADQ2N5zsj",
  "key34": "r1jhb5NfEimwQbFJ3nRbNyTotuwi3XS7Rjckv7V13JSM6tngd4DC6ExnLi1phazx5HRigaB9ohX69qXrxCffQWM",
  "key35": "51xesTiQBy45pAdm6G6ffkyJNpFt7vdh6T1Cn4ssjDby4dXGg7K3Sntc3AGfKhnywjcFGPa2BFgrXSoVq8GQopkF",
  "key36": "3967wMZvoUgDYLULsoFNBdVfUhYQcL3WvvmLuSV93mfge5dsSQa3jALQtfTNmVSfdf2yh6YSND7z6g4GFinmdvDh",
  "key37": "5baiJhCAKH6v7ToBPhmr24ZZdr8MDxThwAEdxhuYnajiYmSXPAUHsfu13SemfUNqniMo83zxKzmS51LQF5Ppxb7J",
  "key38": "3QktSm2E7s6dH4fch7vCtzppVQ3sLL9KUba5949SoSSuWkqZKmARA8pPW6tdgwh8WMSVP5r4zbhrFWDhLajF59sf",
  "key39": "5G1fRmkES7dXT66nhK7f5LKxUNRzPuAvz2aeumLcHVpdZ5QQaMre7af8XfdWwJU8oQuC7XfsFBJeP5bgbUTdqQkL",
  "key40": "5sYB9rWmc8DTPudW3jfmWQpGJg11uNwQBLkwGecMTe9PU3cMkYCi9YJ4smabRHDxPDuJYW4qVMdu7eFhh3zEb455",
  "key41": "66NSP4pixQQ4zWu8y3nrQc2rD9U7SM3ELeFuyJUDMKiVs8W379fvu25iUcxAR5tK82fibNniwRqivwsZFHa2xucF",
  "key42": "FK3DbiUv2V5zHNHof8FjvJD1MMdVFfYW3AgYfPNmEYuBEnB9JN9j1QEDTduUiXU8wrWKiiEE2GHqQoJYdWzZmLK",
  "key43": "HvNAq7K249GZ3fyUqXxs83QdVELXsAmBQE3wEecqW5ez6Aua1qT23W6swKTR7K13YDZc6eSVvnSFN3naHBarPM4",
  "key44": "49W69cYgFJWK6T5rmXMrvrbgir1JGS5gfa3oC86Ayvwj7JPxc8qyBP8UzXnTVU3wCtcHFkJtoWUpUHMCkSAep6od",
  "key45": "466ZoEfnFUt6k5hymcHdcM7RgEQ24RjvyTbCv7usEvHNtvyP3X6auTo9Q4Xu5ifRo7EiSEFKwSaFTgU2cCVSWLtk",
  "key46": "4iR92afKebZwFLb8WxMcDtFrdmeJ4vDwgysmekQ4jHiuY23kwThLW7sdBLZX4gL5NwMebnLNsbWzSCtwyG2kAhcH",
  "key47": "43V1PPLSdKV1mBK2Mi4CeZktiuSfHT12dngo3k11GSnJr92qvX5PrUmjoeDn3Sdt1ANZXbqYGDECWK2aJEM9aMto",
  "key48": "5Er1hTAKc8qRHRddFWxXEbFjEV1xKpRknXXJ7Xgvs8GrKyDiqR7Ke6CouhDyAh8ai31suovCMLkoZykoYaQYRGky"
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
