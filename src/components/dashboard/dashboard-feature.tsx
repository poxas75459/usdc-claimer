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
    "XtKCAGhpT77sjzN778akxYdmCLDhaDU94LP89XpMwaruz9QEExeXgFpTTSkW2vtCJjox41nBAETqGSUjm3m8GGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wxNvn8VH32dfupBGiadNQUYz8BAEsAKjQqmXHfBaUkZYHUn1HprNtfTduRfcjzHHJS5eRnb2MNDDKpqbFiLXgSL",
  "key1": "fzRDJk33RN39X6uX4qqUdHf2SKxqz3g5MWcmJZXNx7PYLEFLjKNpW4d5RfHzMM3rdc424egMhYSFtSPzUMehuTK",
  "key2": "2TFX4cHrFv8VeAYffgXVwP1w2uKuco4BCmsK6H5gQKPNviPPNG1nvJyKRbtMBrJfxk7c8rKz9Hzh1EQxVhc8wNXz",
  "key3": "38wtPf4pBHozYg5pvgxAbiGQcdVa3SKLxT9aMVgU8514Vbe6G9UPPjExySAzoaQgpyqbc1PpokNACGbSx737Wd2R",
  "key4": "5EsvtYBw1YRXYozERof1rDEPk4XYYqxWTcBrDvpdaLpmwzcPbcKaCoDBt2zWk2L3Kdi2hsWrnwpeMEuVcRfw65fF",
  "key5": "cSWruHJ9K1a6p9HkuAKX9UzsAT9QoqFrJCWtpAYHuf9huggzPtsFeKWsKQqfTDrYXdLSJBL72gbGz5eQnYAezpK",
  "key6": "4VB6s44QjWPvYj6uhhv8BJ5sM5h9rVw1qJZcdQXfazWDHeSgeMEfC4DDPY37DXLkaSuNaF76YMeyqmw2Mqem5oD8",
  "key7": "3PYBb5rQrVgVE3FTZpmtQFntYbuoFbxuKaimKTA9ZTHp6RcpYkmKAScQXay4VFhtHRHHwP7GkZwcW8AU54HcgdA",
  "key8": "5eLeuy1xZ7pQiMhvSgiLXzGU4Ryy2zAhBydSCPuggGt53AmTWFCFFSX1uniZzBH1vd5as7bmZYpSL6o9QK73FXLb",
  "key9": "myHhZY7Z3Db2V91rvHyg58Aftg8ejg2dhrivprXZegecrgFPgw64ufTVcKZKpiMaYEVJDkctoPgbjoboikTrGPa",
  "key10": "2wVYQsxDqMi7f6pGbKVtFmYdEDXyR89uJk3ZBx2WJqcrtXv1xkNnT2Y4Jx922iFZHZ8sCgMSjqUnBfwbFkCFkeFE",
  "key11": "3GJGWwoE4RvTuNVkeQ3gs88nSsweMVDpDxNzxn5bFmhJEjQ4wDdEGA24T5hR4wzjvPiMHDCqgkXZR3F6eux1QGHe",
  "key12": "yHkstsK2g5YgYo5M5N7nLtRJ4cxMZricme4TrV2BQ8GJgYQv1mfvYCUwDjtL876JaCoXL4GSg16fPFLhyxueh24",
  "key13": "5hRRsEHAwwcoi3kSUyTfsHdhVjxtQzrADkXWgve8noNrgeQ71KzXJ5GvpMX1u8pKA8JPktbsHEN9EBbELd7HUnym",
  "key14": "5JMDnrkPpgzq83CNtyWFpRoSkmg4i6gmCSwtDpXSjez6AEXdBq8727WGwHBdwbcNozbQHevbMSicViFEbsqzg2dh",
  "key15": "4HME5nfZYwtM9tgouphunQ8XmF4n6Ax9dCtagT87GPSDqim1d3TCG6nQ3uWUJTrRPpaQ3HgQCyz8idZTvtegEB6f",
  "key16": "bRTNdmtpnWtHHJu91t5rXChB46rY737mbm3U3YEZ9yRa65hoSqaTXffwSzGfwaYJViDWSUdFofTg3i1AqSEU6Ab",
  "key17": "5kfgVPvSqXGWQ4KTNA2GF8PnDb8o72FjtX21xRRWZawWT3PLsL168hoiqFbg9hSDdQ3TsK7WW7d2yrvPpUbbbNvp",
  "key18": "2cnjLhMm3n3zcRak9eeb8oWoci2zCg5mXyRgduZD59eMJXwx2PfPaggYCCbhUeKctz92EJyyjN9SiZh7g1J5sxbR",
  "key19": "3fnpMBwxvUg9TYcMvqCBoNjdMzaAM3XCBUGjNt8anUnq8BY4uUUNeVmhE11Hv8zNTCUSAtt9zmeUqgeR6RobfKdJ",
  "key20": "ZgJ5ZPGHQchGhRierbXh8g5Dte9cf68dbUKbmKr66PaZ3zc2RR1yyvoQi6etqFRLUVFFhJuNmZctvBbCswvxJbN",
  "key21": "2RBvJswjB9uzGcK8WHEhV6szntMFEuEtQgGRXLdQ2ymoDbXXDTESSvwUycRKp85ajfcZiTcqozvco62cing79GAX",
  "key22": "622Je46JQhmRXn8KPiVWFTmuchfQE8A8qJkM8fYxNTRiAhJCTuuWVHcfLYM48wwjhyixzf62TqhvRV3syPH4Kt9H",
  "key23": "RvqoN8jYSfjVspLUKqpeyER4HRSSR4YQu4UKq9SNM9KXmNjSoRypSoVutxugy7hYDymtYd4hLASPPoySSDaRWee",
  "key24": "2TR4bcSQ5kcm5oTsBBCdTZXosYjJj45dbDMXP66ZHCxdHSajABgACZi1X2PoHHWkWj1pXV9a3y9wbSPFju2fMFT6",
  "key25": "29Rj95jvThv9heZuZTnZRPFJ1Xnc7iqHRffCBDV5HTX9WfcLyfzLBdXcYwgHBjeprdFFvsFTCnU1z4Xd4Cj1Jg4S",
  "key26": "3ansTvCBPmiHZAkJp2LGfWefLoVgccS6DwUDinHeu1Wsg2Zv9eLQKUDDwZcH7W6L6SzAxEEgxt4BBBFjrrgQsJpF",
  "key27": "5PAh5h8G5cvdTzBUzj5Sm8gXRKPvUqdbAVb2VK13ddTiQRxWzERTxWAsnz6wnBhC5np9bY2oghcAcaVs81DojLo7",
  "key28": "3CELkVRmhJar4pGPU4w3D99MuLAMgsRSmPoTZm1gS1aPUyYpj7QB5FHdMRdrhMcQmfePUuqSxc3eNwQoTSR8tqz6",
  "key29": "2132xHzw37sWSfnHSZLnFpXdZwoHj2uypgFXe7seNcruqwjoZQKBAMysEUMDiUqzcX4aEBx3HzYnUfmEtuDYmFFE",
  "key30": "5jNvDuSzc6nqursJQwxQ1Ki7zZUjTKtB4vMYztDJ9yBXG5oqzWU73knPjefp1WLjm6LDKeL2cPNt2K6E651RTrSw",
  "key31": "4YopRyn9kdRaGD26qpZw45trYBpHWw7crhe6pVndX8DmMqfgBDJpgPyZYAB3JMkY8A168zhdfo5xt9NCCh7vRXaZ",
  "key32": "wQEznjhm1uxpV1cdsd1avTVujqtmnRFbMjEfuv59D1ysFSRTYw5zMjUjrxgzhSmeirNtkpg1Hw3TmyPfWEQBJXw",
  "key33": "5dGYWJMcXv7yy7YgmUKKoMj5RVdKrCY5pjjmsHQJHV9QZDFSQSAsCKvHw7ybmVAn62RX4zWCmZh8PaVWi4ZMxeBd",
  "key34": "4TsnEbQpn8CvRRGNT5SHE1b2WETKCLHA8z4R3WdVHF4FV3VzaqYdnKmPh4bC7Nch8zF95fcVmWLXNbAxgiUG4GTe",
  "key35": "2inH8buwyBia6vK5TqzJL8yucovrZAtpvNH56MohUks4vnfCccuzBB6V8HqmgjSVcxYXRFETX6aVzj9poW4gE6Tm",
  "key36": "2ArnAEjXx4SbJ4JKuRBWbyTfp36nCM5nFHg3w2U9LGij1GEyqj2FPm6g6YMNAhVGrJLo6Az7vaXvGrEqdoMFcJGH",
  "key37": "MA1hgYHs4SgXrkZT6UCDrMKcYbGJ5ehKe4xbJ55cFTJcQHtHpphyGSd21C5PwM63oKwxxsuDqX85dVPdCxyWUGU",
  "key38": "2BsmXdohZXYSRyT9xVaAhuVVrcfrRLn9FaEiDuU1APMakhneA5uWZ59XjQQwLPoG8iMz5iAJPzogW8hqPeMZDTqT",
  "key39": "3i5VUrAQohjpssUtajt6yrktTazKUEoFqnfR6YzJs17QaAqvp2gNem6RTsDixtuosw3Cms8kPnSCv1PoyNNbM71g",
  "key40": "5BRXEFvG7kjbeNcsJQA3fSVfWLnXinXt49pbk95gqANV7TV8yCJ13rwsYsUWkPj44RA2jSbYUcANygC3Ea4Ebw4j",
  "key41": "2gb65btaLCuEwYQ8KKBpz6uR3yaB416rDNrynDY29x7FPU5UqzQ2v3Xsu9fUhHGijCMgxMtoMXJJS5TCdDwU5w8z",
  "key42": "ib381f6kNvW7KAyR7ahLm4TYD73MboYfNTVdbLW8r7RxxwbxnfZDpzUXsPnNzGAiuRyqRFudusAmN1pwUz3HEeU",
  "key43": "2ByEKz31gCfX1PzxvXEWVEjhSVFXpwSSpqECFFfGuAJcn711kg2e7sAnHXF6f7YnyL5X4btUfUQRWHXA1DaWShSo",
  "key44": "5UNa7g7Xucd8QjAoz2bVvBhM7PeB4mn85vps5wcDzhFHb1eqF86BBJPtFZQBHTyMYyCE8jWBNAH7K2Ys2LT3ANws",
  "key45": "5Jc5dyYFL39aB1fXqQ3ArUfuDLfkSxbbjFuMGHicRZ4HrfBfPpbMJojAfiSz7NGtLmQddQfhQTWpjoNNPs93MgCZ",
  "key46": "2vbYs713aoPUkTup8PfRp93kbq1GRzHKoy32SaJBvGSjJQLWfAY8B1c3b9pzLjkSAt18RuZUY9S7kDkVRnYdAkCP",
  "key47": "MCiRbHBNdLNXgHCh8dkhfJTy2FSRDa9wYrcnGEjZ7CW2PDBUqiSWKp1fxtbov3BdT8rMxMo7hzADnRtv6VNKfW5"
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
