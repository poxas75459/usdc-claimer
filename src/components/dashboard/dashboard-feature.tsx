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
    "66DL62U7xUQY1MDdWJP1WDnyxWg2hsR3yeNye9MHmnZBegtdaJhQP2Sch1TyjKKecTUdM7HX8bY2ZGNMHE8ri6rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJizLWBRiPaF1swasZPNjk3CeWghGPeySzSfVTs33mCa4HLgD2Ga4AFGnahju6gVnsrp7AFgt57PKxWeHaXLWyU",
  "key1": "oFY9Gwxv4cNXeigVvBS3ThVWGUgQhP8m8VkEQ22Q7Am5nCj2v87Rk9N1dbn7qZmfsbEwzjGxK7zftYj1XL8LV4y",
  "key2": "sY1JUeiRiVhFguS53yai6Qp78u5Z3BvQU1491DPA2rFPYwAFi5DmyvQ9vBTMdaYfspWeuMNsCiihwBPAVBK3o2A",
  "key3": "q3CNQQtH4P4UiAa2hFCcrYE6Logfy6gVnpemLMu8eZdCvdTpDGSJd2HuuNuMNcBjA1Snh3ekVxQhU9KyhKrcgzR",
  "key4": "4E5CehbS2LnNp9eYqVXVsYoyYomDGgqERtLcGSWkikcvMB1xDMvqNKktp1C9o3BrqLrZvEm4NDmz5oGnSLe6mQXK",
  "key5": "2DcSFkMRLYCE1jvTAFz4j9FpEY3pusCM2jHhQpzksNEhcchApPZ4NBhnRYfmZ4Z2PbKJ2rkhFzrBRLzwXX5JzQ6i",
  "key6": "5eAGXQ4rqg8jReTr6kChSjFSoG2wGZJ7rbm4uNF1rLk1FbmsNr9kLQNoSy6qQkuwB73EMRigN7K84NJWBFg2oqdc",
  "key7": "33CEaGV7XNiDVDVr1vCPW9TqGjsmmuCNmhfqkWUKjNoTvkwHv89S7CkLcT53SUrX62Lc8aooC3y9pMLZji6nkjws",
  "key8": "5pLeYVAsD9smR4Z1M9vzYNDJCSGrvaq3iSBSbvgBrqiSXmsP3DsvgR2evXSGTcwRgZur9gV3qEfe7qv9eg2dPEsD",
  "key9": "35wq3EJUHzQ75pTKo77yJs7NmaxdJp2LbQ81FTW595xTknRyJjto9ijtZ9Y2H3tq7S1RU2XZWgbkoj8wn7FpMBmj",
  "key10": "5vzrCqktmi2wsXPMohyoVqnootNZ9t76BK72X2irP8LKX9C3G4tVWNhovD7NPC6RPNgjh7z3M2txcGpSoAiK9qBT",
  "key11": "3zL49T1buURkkgFvABSrtZKNygCJSTQM3sCV2cWLrX42Mf8ccMDUJL9nki7xpf9L7wDTYxRtzbkJ3uackSpE8FyK",
  "key12": "5w2rzbA1DkHoagwBmzWWg4SjhpHibXbT7Uwh4jDEy1ALmRDgDwC4ULv4kJhfjCyFx37Xao2KLvztYR9pNDBpYkRf",
  "key13": "J7M6NrfSzhS6CH8DkrQeJQR9Y1ww1n5pLtKpWzD4MsQqNFGJ3sgKtbhCb7N4vJpYvfncY3CHHoSVrCRJ1mhTJYz",
  "key14": "4ZQXqW6brJMN45X3GoSGMoqtXzLyGZGwHV3ZPttuizmjhvkqdoLBXZ7h8B2uh5Ckvg19RhkiCb7PbxS1WJtWTuyx",
  "key15": "4GU1W6GNa3eWKa4HLRJD1ZMeuddWqP1fcX6zFLsYp8gSw1VqDEr8YXkfrFN1E66kUUh4hxbDE6KGBTqzbW1YN6bR",
  "key16": "263hdB8MuDeeW2ArZuxKGrjwSDhDdo4NDu85q79T2oTzrsvjw46rvhPrNbP2yGBMoHzSShYRPnDH8jHLk3HWyXhc",
  "key17": "qRCCLaEErt2RZnfbCixbEAU6mZZuzsBnP6rYmF4k7R2n7WPiigvMBX7JTseXv5rMvhruddTNTq8pgZEE4tBFg5A",
  "key18": "4uXAJVA4veRLecbyhSfS6N9iAMC2qqYMUZxbcxSuKA649qUUJQtuoA2VzT7nAFX7xXrTTCuynaHAuGdxYCCr9uiL",
  "key19": "FhghUUeURnjPLexXU91kewzchwitLdBPGoMBpuGdhddxB11vBqJvghDJ3NVAoSdHd7D221jKRBwAXmaG4w5Bt7U",
  "key20": "6UXJ4ziDfDvmDbCnm78eb2ZUVFCsC1nfnbNvnR34SScr9JQYo8Rr7wWT5oyaGiLz9gc3sq1DbahnwVRNmzH7qZC",
  "key21": "3xzRowAcZAp1px3cw3SsheYHKZaFnKuvqZruSLMjrwNzWaLsnMNvq8oqcDeieP74A86r1r5KR5ucWGvKbae7c7UP",
  "key22": "2pYVMACR5Fg4U3w4LVjPBL7jK2e6CULpAy5VSAzz1nrbvDyZsjLQ7dcESiFGEaMJXEc8DcBP35u2F8Kg5hNF1xeo",
  "key23": "u3Gtuj47NokSU7M7ck3MR7JcvK3mPW1nnSs4cQV2WrehtiRhVpPemw4tnrUQUAvntYi1uecf8h8abuSbHNZxPnX",
  "key24": "3uAEqX7np8P6XcbAtC35AoTViGQ1GpbHY31ir9ajsv4jHASyfKyF3YLRniXnWQ2vPpFRAyBgAgYyFpreUr5WpwKi",
  "key25": "3aJwRPPVo7VphU4Gu2ME4Hij4mLAtbdKGZRRyuJF49jxd2wMSjRSp62Qf3jfbMWHzp2BKdyrnxfGAAJP8xyJzi4v",
  "key26": "3p33MneChdoC7Wk6YsJgFFnudERoYe6vHVYjuSb8qiQddnsTn2xWLjSgdsVYgiZ93U4UW8WALeQNCh1pR64azuPp",
  "key27": "3UviuFNQoQ8poR436r7bZbndxtyfCgCrNtsNW8ZvzPxRRUuLwvJffXm4EqmwvVJRHnWVUkGrRbFp9ZD8d5MB24jS",
  "key28": "4Ws5xRVtRjNfhxYReqTFQN1Fz9Y3p3e22vYzCj2CenfCr4J48AgddL64D2Axk9UcPkkojFCSon4BGbvgN3YTvu2u",
  "key29": "315woWGLLsM756Qe63P97BHq6S8JqfHBNfvfkktbcVXTatWpmZdyjc4gpSBHJNYpXbVVcz3HaoFQ8FopWY5zevzq",
  "key30": "2WQaQMV7Ft46RJY1t66w9nNWQfMm44kszesc2D2jdJ5RQzkDponNowHxm5zfcw5EkzEvVb6fYRCL8eKDeDUpM8Wp",
  "key31": "2H9wJEgUu2R65cuaSeB27Qh8oZ9FNPNDtgo5vNxjSK9ZD96XNDfPCxssrtdF1U2EPf44rgCYvMLVrgs6NF34e2cG",
  "key32": "35CskEfdKs9XKBuQyCAWCZj1YnBnXW7GAh1KQiP54pgfBroQoBf7j1MHz8nAgQb5MnqP3BL2bXfLubUDPZDeRG3c",
  "key33": "3LhSx97f3dGRTikxaXj7ng8XT6LQDG7zS8yoDYxMRbfSGtgioaX8TrV7jinTpm7JtP1ekskY2B9nygW9Ni3enuaa",
  "key34": "4KCyXexFnydDaDQZ8nnbdxpmZHHnNstHBtrf9yUXkynKaD4n11dtvwFXSkA7AnXTZZyxMvmrJ4oHq2odnqCbcry2",
  "key35": "4RdRqHT2seKufbg3pM75TchMwwgHc29hdk3aqKCoDBPXVYWf4dg6mbot55qVZjgM6dLSV27QYZJAfrEgepJD2CsR",
  "key36": "57K7dwHRS6a5gKbmtKDwUpFtsSJ3Ke1UFPAjWXNPFmUS2232kVeAbTjw9tP6qNQw8tixxnnXChS7KGtLbvsCDHEf",
  "key37": "5jDPCuiaexjEPqsVetwAWbohhE121F18piSMfkmKRmmAm4CVECbNHVmpdAoz4uPr27EMY94dBDz9KZGdtE8NEXv8",
  "key38": "4aAf9jue3jhTJeNfv14h4LHkwBWs6pk4Br19n13TACV9dkJfyjhd7W7mHpfqx2qAGfbt7TNMR3nThcz9ws3ZKKqe",
  "key39": "64hAo7kFV1cvHjH9dnzu9XKAUX4XH2exJHN3YH4PGsjbEkC2L6Yb6NYBGYXmzHtzhBhovgKHHjKu6vZZD9uVGwTW",
  "key40": "3t3yGqMURFTZjRrSEnXcwpzBrdtC1GgkcteWNmf5KdKrPcuX7ZmJFMuWir6Cn3Kk2SCTFszLHmnWV8kBAU5MVUjd",
  "key41": "4omdY99nNsqCzhQz7h4rQqVTUPzJQRQ1q6JJHugw4rPr327vEpdKbrBLnshmjZsjdpSaMJ744NcrBMTssUdA9zLg",
  "key42": "47cVhJNVzC2cBRLg7pVso6hZ3J6JdekejXJGkL5vNu7bXTU5enpLMJmQMEMA2eFs4MkjGNtnNpm2dgRK92oMvuSZ",
  "key43": "5NbgTsvB4Dmbb4X5wKAc8yrhEbHPJ5rfar7fm8UjDjSaHZkZ9hEKj9sEEkvTXwPRZN8hnxsAzaiR4esdKK8vicNv",
  "key44": "24V1XnrzsEMQuwyyWCeSkuHFtQM3K8kJtUaMxPB9foUsxoC38JzCHNApw8htGdciRpbmvzW8jgRZakXgQGCRpaoL",
  "key45": "RrVWyBakEieBMGmjkhZtfeRaBUsYu7EYfnqei3yHi8yNzpMRrkUebNBH75sBfqsM7QZ6NcLNLo6aQMhQvJBC7zW"
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
