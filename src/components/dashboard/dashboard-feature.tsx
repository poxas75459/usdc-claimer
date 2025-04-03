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
    "41SEXrsniRaUM45CGBQPYpofwW2LPoz8S6599zSxzKWxpekpqKJv3NjuUAnrftzo49yG6No5bwaAdovtXX4BAvtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydsvPJgx87ZrhWnhNd1cfi4YHk4XQPRA1mg4G5zewzTM314JbzhuyCwvygmYW3F5KF5TDnYpArHnfu5Rf3NBGyf",
  "key1": "3J9rn4qEM7Z4y85qS5NEudXyUQYUpEoRiffEqHMscr3EaLRjr3btuhuEjvkt4zB2gg5GGLWdiVMUrousPHpRbjnB",
  "key2": "56ASa3KrKaWwQUhiyooyD62AkWaYjurcEtfHBjgBsEiyRqCmcn1gGcWE3FYpB6b2ZCmo27sF4an76j55BtfWW2Rk",
  "key3": "3P7HxJr7CqwLVMdHQYhbCcmNRzr2FmMhjnxvZygSdVem9a64XvNoAhGfyV7c32UkrRzKgV6K8A3XA8a5Zp8HMen3",
  "key4": "4u27e8DFYcUavna4SQTHpFEKeZ15L7zudSQrwiSVbyjTUXBksCZh3XDacpV67kAyVHJcSqfosW6tyz5BL2VQKMTk",
  "key5": "4JDTMVcudeApTPgqVmGJDWyRiQpMxX6WYS2wGwoNxbkGsRMTZ7JokUghYZAz1Lai6MyiNFKT4P9Gja61P37XyPYj",
  "key6": "3qAixowVQQW9aiJo4HSkGTA98RUiJiQodNhbhyZSSSJaD4WSbFBZ5b8V5zyg6uR526ZH9k8QmrFinDaQhDjF8erp",
  "key7": "2KVWKX2YS2M6d4EM8nFLSrvWmDMoZoBUJe69nDJvvjcmkNVgKiAeN1i2WWZ1xaC8KfEsquShcavWiCWN5SiHbrEU",
  "key8": "QFxvZZkYSYpHXWY7ZeA66FDb4beGEcH5CiFKegaUE6ZmRREACgL1ohaQMU6e89ZWdQhH4g7ik5S7WBnpTUMrF5d",
  "key9": "53uD1CmtwNZCMwiyHhffz5Wokv3Vj7gSBeasPgzAoqvM52ByTEWcCqnZoJXtsf7Sc3dDWfzjo8xdbTKEgvwhTQkU",
  "key10": "2TLyjKPuELPDtnzG4tYNVcY8VXTPEbrQUhyqi1W9UapyuJL2QSL2U8NfstLjsnj1r1H4BcAxHzbur1DUfBHzrj8Q",
  "key11": "4a7mc36AAsi8B6ZFp3WSqx2dNshFnc6TyR4Tx48tzp8hhGc3Qzx4PY62Gtqfc8vFYf77A3Rid8j8mvf4ryZJrfMp",
  "key12": "26BJdxk8QMGa2bpn8gHSGq3Qho9NcoCQVXA7ABXG9gvBHPH3NNLtysfDncqgMaFxKeSS4MdNjQrbauaqCzqxpvKJ",
  "key13": "4LS21fWpL7zaYiLV2fbwQEEzroGRC6qDyrxFoQwdh2zTBAVC6qc6vfdvUaX354mdfhSC6epceB9kBzLVhLxS2aaD",
  "key14": "4qZTwEZLCkzVAMWj2whX18o4SDLTb9DTWzEh1d1heanr3DZZSLG7HJc77RfRuwpfL7auzXTxNkqcN3NbNmru5nTk",
  "key15": "5RBXai1A9MKdj2G7HVUMHdN5eZkuxhjdfX2AUY5bwevBMcNCaRZEpBTmTWYvinc521L32uw3bQAvXsbRBpihmK1n",
  "key16": "4EGjhmvxaTRqNvKd51Wu4oY4rUVpaxjvt8vGAo2iLSRr1AuDg7jcUfcrp4M8wa4J3rbqZtkYeVWwLX7y1BNWNFGg",
  "key17": "229TQ3HA5rXKRu81qTVfLDWYcADJGB8mWpmAUqMadJBKX9ULmNtKvQBgJ1HbzdDYGZSg7FJ4Y7rdbEAWstuZ3zWt",
  "key18": "7ez9KHadkCRqv8tPgfUDtdmAT792g6hR2ndgtqzrLUF6YzTARsBYeYzUKZrk1XvUmMHV9vjrg1EcGDALXopaose",
  "key19": "29kYkDyZVcEQoWyidCrpHx1QPit47yQd8CS9ckT9VtsH9PaSKz2jaxxUQg7yis9Nqop47iTrcJsm78h8iPRJGZtV",
  "key20": "4ADqK8TyGGiX14AhYXvjGGUqhjtjqxWKEqXMPGKzc2DQEaJfkSotbJ1iMTVRR8WcK4yCfAZJXLyvJs5XzoQPShio",
  "key21": "3YzsekFPszKPEu3okPTTFE2DJwvJShWgXGRhKedJxe1o5ahfwCjoEH4rhdGNafWaXJx3BAL6YoB11qZ3BdJjSUH1",
  "key22": "5odXvKZuT4zGiQTc2FZwkEnySMbVNL5zT1CVYJLBf8brdHPLUQdnCQSECCtgx3RgXZsncSmNqCUbZjRRnUQsVTrt",
  "key23": "5gmXLWieEfHsZ6H8Wi3ZKNc2eesweLByUWEURB2Qwcu5nTPo8abQUnQWgGYUZRqNpBBTfcvgvcLGwfwUPz8c6RHV",
  "key24": "2UaDmyTGrLmy54NfdV9NgrHLAKBbiM2Dj2w5sDRgracuXvM99QVrcExwyCXUMM2EAZpxuMW2H3uHdG5t1VbYVJPV",
  "key25": "22huJgNqmN5BpdhW3vAVUmRkcm1er7rftKiGGmBxUmL4xGzHokP5DSGLH1DQ37Ne5XL4UgSZsY5XrxNf1Lc34Q1Y",
  "key26": "2XyuXMtw8GBM2SjQgGvBr5vnSiNjhVmFYQjoApJRJY679nb5Z7KvBkHkwnaEJdLU5mQfGgdZxeiUUi5aPnhrTaZT",
  "key27": "4aLmC6giX6CL3kLJCcA6smSkstR7BsyYXNFFteqvc1PeCAGqgpFzBncUvYioBR9DrChX3YJDuY5d3oWspcLAPh4B",
  "key28": "3XAHExdosgLmQUh33dgRLuenaLoUVtP6jhY59nnnuPpttYhR6GTTbVn7PRTLuW26FwnXXXEz7EkWarzcdbqLgcft",
  "key29": "4WWrHmzf4q1QxFxkWfY5U5EQBKBCWLAGfC5q7ahwwCpu7H777xypucRRgsXVhAjFDNSa8bGM8eFrqiQQcyQoj6zK",
  "key30": "5ywRcjgscTJSsa3HJevK8Us4ZVTntw2SWtLtJYCi49esa5x1ZTtyvwDjm5YPXYzaV3o3raxSRo7JfHDdG5AXibtQ",
  "key31": "2VBdyzGg8VP9c3cmGpB8QkhPrR3C7aaUeTGeYoNdK83BfBtQPTnfDNGjvkBkbc51DrUGhiwbwQsxjvqH9uFY1USY",
  "key32": "29LtVfv5TAqnJtKae7iVheNZb2tzm85gmiDUHd8y4cBazMNtfVHyFBo1qbavBZjCm9FTtmmDXaPph9tsNqqTdv21",
  "key33": "5adEeVCrRq5eGKdLAZzQBMEJVqwzj5WFBnBoBEoU5UuQp619o9NXFj8JLLBSBTsAB1tQe3YKXbnaUPciDvEsuiqv",
  "key34": "7CHkywKtozGk2RTM9Wj9AFJFLmFxA98gxx8pzBHy3Tp6MERmwZG8HBteErN4HASpspTeQEchw2eSqZicwL5gCgb",
  "key35": "24bJg11gKNXDWZ6Fqz1SLmFvxfA3q9wjY6EfqmHuj99WiBp8PFwrUfCpYk5cHhAe76cNHJDn91qLngMAF7x6FEuQ",
  "key36": "33sjqFAoZAqA36ShgPoTfndRPSJk9js8jaNma97sqsh9DaJdrcEENRi2j2FcFvSWyQs8VhZPMhMrwY9Qk5DEAZcW",
  "key37": "3GFJKg5quE9ddTpNarq3fQgy3mKVGNEeV6W9sCgtz3LHHoDfP1t9ed4RqvxowDM5y9KeV2GFNoAPsBDnCenD1CZR",
  "key38": "vcYRHNUqd9dndTA8PS4LYqCP7KrEVvLYFNNaRzQH7RhubskFz6zpQitDFyA2vQmUa39uTu1WcimHPvqM36wNvk5",
  "key39": "4PkPBoNTGoksjAXaWZ9G541gxQyKWARjJfSn7riXvNsNBQ9uZQE4qxZ8SQ5HRcsFYYv6agVPMAWuPMMJLENAE4bK",
  "key40": "3tcZZU3UrfEFxkR9e61wWKhpQkNdmGRJQXZbUpAbPL1z7qNY7hEh6y42ZMRT53wqoeUq1NKvvrNC6GbgqMdPBPCa",
  "key41": "3wAsa2YY4hSQwrQSsc7MnmsTcDN7RVJtKyiVa6NDdzeDVJAuhigFJyUkSLyBTC1UUHSkP53Y4Cg3mNYqJ6WUhgd4",
  "key42": "4zv7JTQjuuCr7XawM25uUtdjsxN3Fq9kxrFc49Y5iUJWcDmKB24uejhZi16NQeR7LcSG6d2kW4i22VWi7AGmnGNo",
  "key43": "GCCv2ZF5Ag9qLjhPVCfFEruVehm6C1RoQdeVrUoXb4vTEqBWvSoRqhUxD9yQ1J3iVwVaoqKyKipMbwQBSBC5GdX",
  "key44": "uFY4hVLRMoSmS2zMfwoFEfnK27zTnKZzERZEco4DbAC1AVjVj5bmEAkkxHLjKrYbTA3cBvPPJdML45RGCygzhYH",
  "key45": "4JqtB4KjGHnuXNkHu5bzk8enzuGYCG9DPxDNm1EK9y33jj1sJzzFS3SyGqk93NrU3kokCjaLQGGDf6xU9EdrU4iV",
  "key46": "51m3drd7ntkmjkc1kGcPTmmn496iNPism6pi9t5TWu86m3Vyf81vTAYCucpeLNpgrmTMDycSn35iJEoPZQ8HEuMG"
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
