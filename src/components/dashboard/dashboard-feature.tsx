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
    "2nRxXpaJgugELdaYmD3ddd6ZkMnfWF1sv5JPmUwJyCvcekjRkeXCA82JzibnhZqKh5CAnizHWnDY4B5C9fam8nAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHeHhaXKtV8V2JxpZR4TZwBpKERiHemXgm23uWWaWTn1Ev2o5mLKny3sWmVWRDSVUosCxd8tBWZ6Wf4VW2CRz2P",
  "key1": "2DemXDj2PyJNuNSzHmahnrSGCFDR9XeuLWgSFwNC6Sq17knaYFNpKZbAPourJ4d8aHZbhYnZoBDeBzPJ4zV9xCi4",
  "key2": "5Rg4YK9FYogr2JRbJq6aR3H3rm7o9bCbev9Ghs6RWKwDJ7RQD5mA8kG9FQ2weTGL9L8aZZaNEX9b7heYFP5AECnw",
  "key3": "4V5zxCoq5QtPtiF2cXbi4BCwaV4MNJdtwtjkFEAkSvBRDt2dsGfsTB3DmtAtptJTrorGsaAZbPtXfk82UaBY1KG8",
  "key4": "46S419dzht6LJBWvxnWVWpN9tZJk17VXVzSHHL1KAEritxdhg3k4YLNpMQHgV1T2sMfH24qXdNS8DeoKsTYey3pj",
  "key5": "4KQg7wHtrnitpxtMeHmUKVHATWwoZoDC5Aiv69cHCduofopWJ3ZSaZkMEFdRAKVaDZfuj2GP2C5w9rBQJpMfrkxr",
  "key6": "5edVoPfdD7JVevch7eJbDtJsgpW8cHAt2fk8U5HwMBhGkoLUwGtcdLHexaQ1Nwr8pxcW27AfQ4TZzgZR98gKUFYF",
  "key7": "2K8sBRmhTGszG6aXgmQ4Uvew9TUcmSDNhey3h7M8hdbKKUyMPB83YRMQZQ9pB8REFgHAe9QdpgrWPMQuHSYE8XtV",
  "key8": "1YvTJbcq9v6vsb8234wADfgzUFmfG3U4vuzmbZ7v4wQERtzBe7Ln3XftrZ9wBtwRV75LP8F789NkopQ4WuqUvnd",
  "key9": "BoGpPTy2uuNqvCyh3FyRdY9ETtQyrsvfC6NKJssAHgDbA9LU4iFnFwE94e9R5saeFHG9MjKegMCapJx59eqGvJh",
  "key10": "3rgxX8qff2zCMpmv8o4xpF3mm9WCowRjsTbQ7YNnrVxJTH2XGhyMB8PhYfypyX3z2TBJMQf6SpQENs5CMBe1wDJ5",
  "key11": "2d5RisEkQYWj72SEATbCk3VCSVdd3nr9dAyCWksU9AZXMdcJnnAQAwY2bCXyqpFSNfkL3cnNJcqCbFYsgXBCrgXG",
  "key12": "3yEVXxyUij1BoEqqg7Ar5RqwWwFDopyuGDXc38qmYV8dpUGFM771ePvscjY9aig5cpuX2ocvVVu41ZXMibaHpagt",
  "key13": "4FZc3DS9rDY17i4SzwKoHLJe5qZnuxjQGxDRbdB8BipbdzDiNJH5xcnSpMpBupasEqUJ6eGqEubWaNgs9qmGZcZD",
  "key14": "2pEQUjyDPR1zLxLgk4DXydXJa71tRMCNbWeQg5YLnEN3a5x2dpBPfXe3d32RM4E8Xozfep2wuTsk1mT99GagxNGQ",
  "key15": "2wJw2JzWBHcN8EaB2cwSEXmxszmK5Gb8gzGYhf49635o3EzBRgHFMCLPtTYaQVcTm698ugbAppK3mfBbQ3QDyQVt",
  "key16": "4nv45NjS3rfci6ndd297iKKeNzpjEVg6VkEBsjNpkhAWGiVkpTdG33iZtS7Nz5Vtp6EhqfVz1C8u3ppBrmjx4BFY",
  "key17": "3MiWMDXuYBWPHRM9eBvXVvZVmTCP9haVNrg7RLtzzAtwR5CySyeRhtmnuNk7557dh7HZG17GRCC5fU5N6CmYyyXB",
  "key18": "3PBkuZ2u5M4Lu8HghJ4YBtEnvo1C82BArbGjTRQarmhJFR4psgU61Mj2vV4FJMcMA7q1XaQBw4KxEr4ezaUHGv4Z",
  "key19": "4393nDqALDBTEB1FxQWGe9NGixGyTQwBM5BiJauokusycYoVLEBoQHPEiJTnfnPwdtxsGnDJTwHeWmTri5nYzssf",
  "key20": "3bR6Eqs8LYnuUdzkXU7UsTQLY2BoebJLGN8JMEGRZxqwbZjUsvxScPBUtaptNW1KYaXvJ3mCC2EGsazS4U7EqCdE",
  "key21": "2gTsdRuo7k8yiJ4fcW7G1MnVu2u14sGJgPcJmAoLp7DpDJ5oHk4PZrM3QMGjQZVu3jMBbniadYU3R6aWnxSwad6k",
  "key22": "4pj2STmzKFSbzJXh6xvj1URvcRTFs1Wjmocvv78KaSafuktmQm98jKAk9eKSutE8RH97FhU3MnLMfddjFRJ3gxfc",
  "key23": "2Ap44GTZrGHipiSbdFx6iMX2vKoB9WymURyXUqWSUAYgZdqDwp7ML6BKEgTMwUoWieyZYfPsxauCGyW342jPGdst",
  "key24": "4WiDT1Uoq3RFysHh3AGTvpxfe89p8FPtZuzYR8Ny63JB8kYjUKjNnwM6Bvt1uB4ScZg6M2gHyDxaHZRvyjXLriW6",
  "key25": "2SUt9Qt1HNUu9MWpkGZwQGRQ8J892bgknDjc4VGngnjN4mZxGPfFeR2bc9aE6gSYV2bqtR4nMgUECpvkeDH7TfL2",
  "key26": "4CerEgAKEEtwwaAw3fHAjRLoUqifdRodjUiuL29ruXJCCQ7uLhqZafAuaSxg1dkjiThr5raDgykEw4BWJrzdDWA8",
  "key27": "3mySwL4stH247mokM3fcG6efa3BVhtuZ1yw3vk96fwuMtvb2t7esvU6bHQBHgowQa1q87fkzTx3Ep6w27AAbvdUC",
  "key28": "4kimhot6mFy9LvNMkpTY5ZsVSoDXKjwoDN7Y11TL63khiSDRXxTQ5hRFesL7C3Pn7bRAtbfN31mee1LUsdhp27P5",
  "key29": "5K29sa9hZHNSUdzXjtTrKpvsqu7pLcmm4USjiKJ8ru8HXHxEQq1Pcb2DEU6FSscSargVnnfeCTNjan7oP2AzBTxM",
  "key30": "2DF6LKoZTUe9oWhJSfpiadipcnpWK1ivHyUbLn89UgRKcWBpxB4SdgSKNqVNELwxXdfSFQkgGq8m9MdcWT1EUjUk",
  "key31": "2tJFpC41X9TpALujfMfLuXpo4KctK9MUioR429cpWRHhGfiZtU93cttyfP251DXLYPPHgx6kSk46E3v2SRTscnvk",
  "key32": "DG4wX4e4nSYkXcHwTMwe6W4XsnZfTvyR4ttBYkLhosCfgF2QZcrZAkFq2QAyJeGLtamDMcWXHvyMpgcUqNSrGEm",
  "key33": "5WVu5kVNTe3chQ1Mc14rwb352qfDd9ZmFuPtFjy1VkoiMHBkksuCTKncH3xoXm83jaxaUPccMTfFmsx1siZpKCXY",
  "key34": "5KjEmectKHsTZyP4W5vqrcC5x4cR4hCnBacGqg8kE3ej59P6XorcNibngLfehvcBHqoVDh6AU24E1LUcfpFuwKsk",
  "key35": "hMH58apy47ZZxAorh2LP78DyDVrT1MKndDAyVmAzGrSSH855CYbJihY4YxkGmCAdSoSoQLZztz3s8CygVLfBfT8",
  "key36": "5u8hU4gDb3Fu1qQcrNBp7dbSXxivFy4c3VdX7iuVBoimVoEuAdHLA6Ckxi9MMWJgf9AssU4HUgLC7XWtR4t5j1T7",
  "key37": "5fhMhWCtb7rU8BkB5mHYKygSdktAWSrfivDaVBoH2PTGbWy9LbCfQSbKdd2DS13gYr1D4DdXLhRoXSBB9Q9B4nNS",
  "key38": "iiJGmqR5TWZaJaYt1xYwdAMevha6vZ63LhD1U6aGAvLmoJDV5zsYYNUmSS2qJSrE9mcNFB155sgjP3DDdnwvDZs",
  "key39": "2j1oPPoWVnqhivKTdhJBi7VmNUSJeEbEG3KkDvBEEsi9RSd4SxFMQU3WqU9F5uQKM1RbfDHzhVniuuHcV1uMK9Jg"
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
