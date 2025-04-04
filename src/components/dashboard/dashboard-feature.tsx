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
    "5bdd5KkthscPfAPSHXs58N8ceT1sz6JgKB8wE6GmtT6QsgEEKG8tbCiQuUb8X6hEEpLabEXkyo7sMkg3uqfABoQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bcjr9Z89cJyYTa7zkCj6t4cGu7raer1cXNm2nm4axPAb8MAxHSiTthmuHxGVnREgzsZBEYfhXoeMinfqFmj2WwM",
  "key1": "3Q31zPAsx2LVLSpAG876v98aFaAbvdv5QhnuPQieWAAbYPDEmT2DZvLg5yBSAvtoActck67pgp3wt2FtefRDf7cA",
  "key2": "46wqsyg7b91b1cr2J2qwuXPG8AuGNh4HxKPt5eMSHpaAYvai4ynCgBaYCZeErw7KmwEdurgffv7piCv2o8bxKc1K",
  "key3": "2m9fSfuGZ4MMunRpcTKZ7ztYQdShofQ27Fp7MdWzCyv5rT5uRJE5bTPJvFonvmvxUAeUmiSeuFSChWa1D8VPZsTd",
  "key4": "52G4FvCtjNQCuzGak2wyyuxFFxdDsHt3PskyhjMz4FkxxeJoaUBZYWhHejCosGyVuZ3REryypg6mN2DPSuKafNji",
  "key5": "2XR1heRiwDcYZFqnLRFAyhhDyFF4qW1fqsNPSzXzLX1H7zDqpCHzxFRW4wEJzMpmSNM6dqRe3sjqYtuLoXxJjFbC",
  "key6": "PbWNfuvaUe4dYkuabJLiywB1VzRubsux37b2ZiDibp9psiQzZox3zebKx4YcrF7M7iSw3NL7irsZsaQrdKxxqGL",
  "key7": "5mLJdd4FJkmcWwPFLB9rJpvoYygvm4d5knZGMD9VXNEeTmfQzTPqPDokonsgUGNK21We8YwLY9L2Y634NeHjVkoc",
  "key8": "4hgnAR3vDN5zybAYZFwmBiUDF7SffKn13RM15m2haJi3r8SfqapDxtoRiCibb5b8udwk6iJkNBhVMbWBMNSkYM7v",
  "key9": "2wNPypesYxvWbsrq4apUVmirvYQDF8DqyS3hZMG8u5ZuMDUhVRsss3qkDoAPVN7AYK8MhMCPDrd69EAghZy5gdxR",
  "key10": "2wHRhoLmnyp1fQ7VnCEjPcxpuH7rmWNfSM34ke6Bc4EUyeg5gfdB56y92bgEDRqmZZzTBRE6D5XnAg1TPJUJiho2",
  "key11": "49Wh4zc2Exi71uR274KKqWoSg9jZGGugkaq4Uj3U7ETY6tA4C3nUAkaL2Y5sAdYwEijBND81g9k1FpV2iycS7Y9f",
  "key12": "3Pvc1s6FT7TxKskVswHDGxc5CADTSMPQrBCxM5obfJQnGFqLp8fQm22ig8fLsQdx8sRbnMyqvV1PJZLY6fb8ac8Z",
  "key13": "4f1EusiiYG4sH1YFZN9ymzCWxeJvaqXaWBwsHmhJhsUa8mmbJjKkKfHSMrkbM8JoXTRTVP1d7VfQZVfahv3T8tS2",
  "key14": "4FEH7caJnypxoMDEVhzjBuxmFHgkeDMMeKXPGFa4XCRzdQG5u6BMjJc9noHLChCzQgXp8o9y8ezTkxZ2VbbdKmKd",
  "key15": "3EwdLXJ7vBJirgQGBPYZq2mxVs3qGA9AsK3DyvY27JuotT7d97NAeBQ3ST58Qrghn9E7GVSyXYxEMxXZHSzT3g9P",
  "key16": "22EhE9P9B4roXSqbhuRTAhBJjGoz4WFwR61m1jPC1S9EurGZbmCZ1jXkp9qGpfffw2gm5nfj2NRV1Yf1WmJRfLDZ",
  "key17": "34Ch6L8qQegPHoMVi5NH6Pu1ALZuA9RfGFBeKGua4YpRykdR63HqXLx2bjyHB7SaQUB2qK3GXLp9GB9f2gw2VYuL",
  "key18": "3XcdDjgC4yyhmnLmSyFz2dHsMNsfUDGMWAweAbqmqMDFenkUXbYVYzdPJpr95NNzCB6it1EmVt5Zzps2Hr44EtT3",
  "key19": "J6qR5yiBR4Bdx97EewrkAfGsbKk49R72DcBLCA4sH1byZVTaKThtFLHvLi2iB46KjmYBCNpGTjJTEQfyCMHy9ZK",
  "key20": "267DdCzx1Xhmy3fbeLUWMcbwj2GNcGU3GkvznYFktRp6D9WPEQDMycNB1rnGkstveTdPEQaB9zjxcSRmS58frb2F",
  "key21": "j98wEqAaQfmm4owL4dBvVAm3acwaZekfv4Ks6ZReVDVP2jHwB1aPivaz6qURkCpKWVYRLXMtQXKfmH8qtDoKQDQ",
  "key22": "2NXNWV68XBCc3ipLRCcFPH4BaAumbfxeQvhpZTWmPzmSZHhiiMRpx8rTLgivXkcyQGUzsXPNjFo7FkGCTqrgDfpS",
  "key23": "4Zi1rXeYZcvpfFWSfmSqfwpbWbtHRtc4immSiHVcDYg6FXA9uJ8P79khEaj5WLXn9pJnQJ53Dmn8sdRUz6R4FHC6",
  "key24": "KY2FmYu6nWUWLwwVZ7wbDdypm4XH4tURCjeui47L2ymMAdrR4JyTYnDHYQvwFC5s8vyVbsuzcqJCnFZ8hYj1Zez",
  "key25": "5ErJqNPwGybe5WPiYeHVZQLb66XkQFbk7hs7f1x8SukjCTnJkCEgaGjdT9PUmFQ94HtvBU2AqHb3SmsLNngk7ZCb",
  "key26": "5W9QD7eEUAVnEZeApu8izcJ2ZFTFHyDmvcMpepLMtehyugtkG5h94SApF9yFDPC63dQapkJroXnbKiBCLN5Seuc5",
  "key27": "1yGv5yf5sKgNJNcF5H9pqKwEQ3vKpozBd7jCUouBHJyPUYEJDMnTsNMk8taRjyhCfTfnHYRon7fUQUrY1fKT86n",
  "key28": "3FvRN5tnuBC3QcdpLz3gDszUiiE4K7h3UaYCpL5DdxaRByxX2s66UjLDJxYfqU58LPeryWrabMU3KXP3Wyep3PSU",
  "key29": "3p9DyVXvDfyVJhbzQukzt7sJJbZLm75aksxxkBk2wzxCWaugG47UF7FFxfDk5rX8fCaUheFQMgKbPm62deLjGkmz",
  "key30": "2yXYKeEP1KzducLQZx7Cx2d3JVFZbbNYsav3JX9AtQnj5wHLpZVqhKud4v3e7zUQE23ppoyCHybKxDaWBUcMTmep",
  "key31": "5wtA7etSCYSEXcRCGTwomMPz15WvUEv7rE1A4rc1PKGMV5HBkpeBC7k6ZGb4mdTMDXDBdF9HFvXFk4trnLfewwFf",
  "key32": "1Tm9xnhtV4Nhke9q1mbXJQoW5joQ3zfGfgWsctV8f4DwRe3tujFikAbAkkmuPWKbakMJRPrxhcQFkvkTWRd9iGn",
  "key33": "24g9QmHisCbYaWFRpTV14C5dTvX2H8dzvUFqQakh9ZxhuQh4G5d2fQEGezCbc1T6K87ccK3gABXZaD6cR4aPGzPo",
  "key34": "2x2fSmQhL3rJ7wAPGJh9iWYL4robV3Lfzi4YyRP49wFukWuRFCQfd1Vyzc7uPhABLQpyM5x22tB6EFNky21udanu",
  "key35": "3RYj7yJrinAPv58yyjQyQfT8o11uFMyzoLaPmVkZEXbE7aMb7AQG24BRdwxxcSeficU9E7SeKY4QvqYYkeBwU17m",
  "key36": "43A3k2JWv1zTCy7FBxGZFLEBoTn1giuPLRvSBKGHdgrab5fo7Jyw8wVgEnnj9kJVBfRjpLyBjKygkWKgxPJs43Ew",
  "key37": "5EkWZHhJ4bGEriU8jDNkQdw9SbZxhCKaidgoJE5xMS9ZzPHbRDiw3Xnqr1Vj8NHkuGUKisVdXvSb8JZWqNW3dpYp",
  "key38": "4XiPtgUDmnuhyQ3wvNt1wkReBoFUvt8aXcyrxwwXc5xUUUqWtmhwWvdVaMeD7kkAxspVTkED4q396vpN9HQNzbvB",
  "key39": "dXMUeRHJ1oZ96Hg7CLhEbUP6fFsDjNpvNf2utxngGB97jpXKkC4R7aHvtPnKNiFJkT5Y5RBeCk4TYYLmmAFB1X9"
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
