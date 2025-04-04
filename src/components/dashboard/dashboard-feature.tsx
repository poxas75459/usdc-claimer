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
    "3antPtdHqvJpfCXXriLQEypJVt7uNtxwHneVvt1LqbKDw2wQf6PDPFFz2iLNdiT8LRFjdXvPiSMqrsiiPzSKhLH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWKxDASScSkH1qwoDNDMK4wGYjHWqaJjGVH6PzjfDJQQdn5JeucfEH4d8RTXZD7yB2Y9HHkK5YFNQySPAUkCVbk",
  "key1": "5KSHigZdw3n5MN7pHoR5ApUHSMnjn62jE6AER6Nwc98ACVUfFwbLhWHxjoXE5B25t6zny1P3XTJ3QQoVxmkZgp3z",
  "key2": "3VsuhtkFmDd9H5McH8GMweC69G5SDVNWSjjbG9hhWscWnJRc93VsvoaxmmcnKTZ67R44rCDnFNfNSirwXtGHeSWt",
  "key3": "43KpvGpBheQUCPGTdvfiopGSaVizN5XnBA6DeFLD7gzq94kN9tScroRhVQBnzECyLYX1iccGYuYHEsiDtvSrnvkA",
  "key4": "6AUA6Ny2PXbLC2ZCpbnsVma75prkRqPuCF8KH7Q8JJrnGc8xtve1StBmBEv79q2niPnVh2GBx6regoVDtoArXeR",
  "key5": "4ca8BZ1e8FN1ULDsWN1X83abAhYa3CGPRToEKY2bp9HxEzqPHUGD6Jkib1DrJQycGi4kdsSM25tGwzgcTkpTvCoe",
  "key6": "53pBFuG3oLgC5BmzYfU7jgQe7LqDx4GVferEA7QTxt4UTfTaFaSnZEpy48WohdQKk68JwJs7SkpY8pmsV331Zth9",
  "key7": "3dWjVeW82TWUyhrmwQEizYxRdgEnPoCoz7t6Tzc3aGGrfUe4RBAHc4nzLMdWnKrt27hy4u9mQn6Zj4UZ9xjfPLYV",
  "key8": "4DTRPLsp45XZRTYJh7PEBueuqvFx98P3NZxFirpKXVYN4hn3gEgmRDVEV4rpFXfXdL2raaaLGSmcUQf33uVBuRw5",
  "key9": "4JDqcbvD8tRnZGURKW3bCVamJTksf83qcoL2rMkWTnDTWcchydz6cXyM5qJ46mFdkD7FVRdMDadBC6ReMd849RUd",
  "key10": "38WVMinFHx7CYEvWqxfbyHHsD8QY4fVNcY8kNg3EfuSbFwwevD96mo9mJuSCnw9v9jiBPrkeqnLYTc1MNF5LEWp5",
  "key11": "2G2Z3PmQreC8cnhM2bWxf14sJfy3nQ36spt4UciXJg345otdvNsnQM28wqhvHcpTMFapuwaqvWwij7WnVM3uKRNP",
  "key12": "3fGSb4675zu9bTH8P1YvRs6iRsUgB1ixfWNb6wFuUZ3d1egLkRHZjCDvosCcmHcqoTeZPQPfyDeHiCS5qmD1LxMn",
  "key13": "5do4jYTLy8Z3se2WS5FvSsa12uNbUk4TdLfmwdgyKHW2DoxAZ5qCnmRMRLCPqa1iGPsgMG6bGcQmEyX2Ni9AiXCK",
  "key14": "NCGA8CQ6Z3BgnWmX3F316fzeU1kkGzbjGGrEeAf8cmfpKvdKF4Gi5xg8Xz1c2MrAfWegE4QTnhbPDRdwGQJ83x4",
  "key15": "5VteKcUSJHHEjH4tny1PLi7y8KB2jxc9Mn47witWkMD1RTfczWNE4wCke2xzxPVomK7Eksr4Y1dk1Y8CJbYGfzTz",
  "key16": "4vBKQbD9rDL6hdT8aB9Vnr3Gpnf4WnZF3eYaqi3K7ATzcHjDvinnz4Y5yqBRSBhUuYJ9S9izbzpGdq3EB7d5UPGF",
  "key17": "4qbptFjrxtpqFqW7k5ZxSpGK98Eg9KZay9eZrf2LpzhAAiy4zRpMtBCxG3WoEJb6hMMdYceGzMmUdo3ttWswRZX",
  "key18": "2vUiXBLn2gapUqcw5EUr5BGCpEUo4SQq2qhPpmHP9tQqZF2RYFrCPAzAP7Ar1crQ1bwdCbYstW6UNeJESwyCtNE3",
  "key19": "4jeig3nsuME1mM6Z2ErYddC9bSkXeom7TugACeyhgPQU8fWbCtpbLhJPikiKWF8b44X3XgHXiXxijDN1tyZ4VrXH",
  "key20": "3TbzJiHUTAFp5iz8Sy9NR96tGhcdZrDgDfA5hrjFuEfANC6RVqWT9mAi87GYWVdPrFxkSyehVHn6owgfKbuwuGaK",
  "key21": "52EEgBbCvEif5ZJsSxqvcjckUK59cjJBB2PaYHPnGMrAoeKJgLXtCeviHGNBtuN5HF56cVWYafSrfnQaLM6JUpDb",
  "key22": "dWGdkxq2SciHkT2u5qfKsFCwBGSf8czas88FuFb8qcRWjc8yivSEMVNp4pqcTAamTm8xywtrZ95G9H65DYB5Rpw",
  "key23": "3barQCwxinXjH9DyqUrxE9hQ3TjHc7bZVzumRqHz38dFTsgouQTYfHGmgvyHRkyQ3H5dG99ZybEi3KjHaU6pruU6",
  "key24": "48jEid1XbJAsMkq4UcYkv8C4JtgPLMSNPXPibFSPv4B19xogpwnCgyX5doPYWdGZ7fCeXjbxmo7hJCbb9Qsdhoxz",
  "key25": "3ivtNVB9bVMb1ukAe5F2KzgfU4Li3c44j5sRrzqkxWn3rQZzQPVFiyZXKKu7BKM6NfM7cxg1dbsFQRp1KrhkVB7N",
  "key26": "38p8vB9Rp4VwZv5dJZSE8PdGVr5ZqP7zbWYsNeWt3vQn34BvDeeyBP7YrwLXKxMK5SsjNQxNLvURWj8TRe8w5EHu",
  "key27": "39H9RHFyHGdKT4kYERhdM2Gmk2p8zwoqWCafSL6JpsB6SAMn1bV3rmtRwoodmahT4zeRhHMrHTYw1c4Gg2rJHv36",
  "key28": "5Bb75NLDoNU57v2upBQyAHiseQ9HUueUCpDLyjMC9CjnFbxRA9SYLcZoPBWV24rSm4yimZ1hVdg7CxoioUbTC5Wt",
  "key29": "4v49W65eq8ox6uNhLiwzSDVd9eepsXDH9hZ12FYTkkPjKPkuqdR2B9Ev6XQBUjbwyFBa7N9eqo62HBQYoRDhKvMn",
  "key30": "29N8SLvZYrRVEivmennUwNsJFw9Dew4C9t8mEKp4AHjCCoTHTvRT354EYJF5RDWrEDok2KNR5eHJrc1SqWrrieYb",
  "key31": "cbdBP3aEmtgdko8ZcYBZmLjDfW2WvZ1akn2ri5FPFYDiPcffkRWKJMgmJ295P3Gctk2BNwc9ZtysNeZ8i2izwVH",
  "key32": "2dH2mAEhRR7hLS74B4YLzmUMBobQuh8QvMBj29k9MR1EHXuxRf8LoE7SgoQz4YrFPFkzQAQq7hjDmVgSP78MbY16",
  "key33": "461GBwtqxLh9sasktmmGgfEkek8RQVVK5c4HxFbSZxMs6wK654u8UdZbyoemFJi7PN1YQLw56aqrAWuyXFm3D2Jp",
  "key34": "oUSc3yPeb7R2JWNkyUJjS3KKc5bENayAshzQBL4F8Mm5J4M4BeHNm7JFVrxZpU5tvcCWUBYozP77voo4AGwY8A2",
  "key35": "yFagtGyTVnW4djusP9FvDneG1dq5LkQVSrjERXTJkXNWJM1cDAKtHfYYAw1XhzjPvUBmRcgLY2ErSZzqTxJeh1q",
  "key36": "aHT2UBBw6yARiwssoSphvoS5TJNLmJkpvPaxvgPHBNdvN5PgXWjsxyMSnTZTEMxWnv7hp2ELwHsofXD8XUxoZD2",
  "key37": "BxfxwGHiLtJvSJZP85QLzdqomcMf9sC6fyXbjFZnMzDyEaKigcN5qoqPmHbcBGp7BFbq5zHeWz5gGjS3P4JTnWc",
  "key38": "2keEvdfCU1gnZoMS23jxsLYUPmYzJXVnVm99BHZD9XD17hShCxpFCnTbizoawsyDybHVWtb85hd4i8RqDkcM11EW",
  "key39": "5CGDbYrxR3ymYdHYCNSc5D6U6Wod26QFj2GR4Sb6G8dcNA5ZHYmJAcDXaHyPX5MQHvRqZqxk5CRHdqd2hjS5G7Gt",
  "key40": "4mb5XP9KZ4xqeGhLHiAKJgZ4WeqeNSQt2taeiiyCVTvSDGK1Mwrg5TF55M9P3xM79g7RVXtXtsX3JdVMyvPWq268",
  "key41": "4x3FzjREVF5SP4aAxjLZotpfHudxL4DdtJ98agCyKqt1Uct2DzB8L6ShFj6eCtyPf2Vk8TUuZstffydD2DgSeoGy",
  "key42": "4SQGELPBgCu7AWkaddeWXedSrgicwZYn7kFuFmv3Dye6WRjPJ6n56HeNVupS1Zh7sae5nkL2AmULrdcHjEfhvToU",
  "key43": "jGUYnWfgJtPqnBV6wLazAGMivfu96zTCqY1iEYjJ2HoZHsoqFNX528mei6JdpYEkctYYrJ6R7aBcKZWVXJd2ZFK",
  "key44": "4mvq87nakRqQJifDbuSk4E7kxmQGvH1NnusYtwU8WPro4SMrmUf9xr29ddNCBXHqLcUwY4wq9LvG62hAcpnPfbvC",
  "key45": "3w6a3BQUPU9NM4saKr3t8yu6f8D9CjaHgU1zuqyZguFdCkaqALduqXmJKNhjJC4DR1HrDKcZkwCfdXjpZrTtiXRt"
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
