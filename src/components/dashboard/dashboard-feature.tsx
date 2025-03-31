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
    "31P4kh2CD4u97me2nijgvR61Et5J8h3roV2EhyW9JeS426B72qBoo1rdbS4pLhBmtm4QtFDmLerVriP1piNTycug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5ENYqBLWuT1jwds94jV1vJ7tDLCZGaZpniJySHE4zSAxMLHzjKb3zjJTHsdboXV3oLJyteEHmWcLzHhzp4Bn9p",
  "key1": "4GLSgRP1btazA3ThbzWupHFE7tRquFX2dVM9y9nAmwNptMAR6eJoswtiSQT5GpwACztQVoU9ubKxkyXSphJbXKSL",
  "key2": "2BZ5t5opfFLQ9EQDBvc2SmYN6VfbLPnmurQRs2pzVQu5HFyjKw4rZjG8aPUn8dY5CyW2RKDBUCB8tn3cymzTcRLF",
  "key3": "2koB2N3KvUA46MpNAriBHN3xrtfAmiWXqufv67Um8tQDDRUsddKf61VQZzDCuY1W6X11CGfBX8Z1qxoztsLqLMGM",
  "key4": "3h5jUYS44WbDb7n8ixx9xK81g92eDc2Z6jXxbFsNW8X7ex7iis5eqbc8RdJpLLUZC24GpTm1S3vsMPo1Wx2boHmD",
  "key5": "44v4MHbTsUZWRweV9w6srm4KzKPx85PFym99RvqqrteWy18sCGKQHafVcj1S4TXCoran8tFEPR3kHUCYmnYLMFT9",
  "key6": "4GSjfgWDjmH2ZNH52y3n92P6EqViFZoe29X56488XA6wnT6Mfa6DTApjHpTVFerpi98nc9ZgRecWcE3BRc9dCwXj",
  "key7": "5eUZc8bGoxaiqDV1oPbSSuBUggpmm118niEpFJhWYWKs5Y2rWRZatSxUYmc1EX7qmzDJGkDYmk2a4Ah2CynAnGf8",
  "key8": "3Uk1Nb9ejVhSr3HqUaTXPdddAWkxhLwf5ue2g35DBa2NWEXC3p7oBh5ioH1bQtosDfL3aZcdy15ydWKq5yhyo98X",
  "key9": "3DSk3q3veQMY8VApW3h7hgMGN1GWdDZtuQQMsv54agz3ohxFKXbhpyerkWPHAp8qC5jZcMQ9EMBnrdKN9BiJCYog",
  "key10": "5E1AQrtyeBd6CumRoQbyQSpsEUsvqodqpyKGGu79zHhuYQbmKWaH9XHtwvYhcxgSx5Wjy57atwP4Mgpctgzmpv6u",
  "key11": "3xMNpNmtzTnYG7dLkEk52uCCPR7C82zXm9zm3C3YcAJoXMrcRckNfeUeRdfux2Jh5fMRb1E6hNXCmfZRxCzePzcD",
  "key12": "34VCFTvfi2114SZXKJEA7qvr1jeVWXs6Yr5P4eZ85JocLVFkU4quivigNeSH8XxZKrneEvtqrVt7MPnCpux1jYSr",
  "key13": "so8qL6wcoWLfUL99cDWxpyNvdQTcVxTdDLQ7aJePhTjkrff9gyXVkt9HCFPw6CFhg3SMm3U3M3gcm27Ax4GkawQ",
  "key14": "54nVmN72eZyqFpFK7TpDiabWHNRegmpZtUaYahuYf1au2wLjiR8yDSWPEonDske6KqYVEPQjV66jFL7P2kmnbwdH",
  "key15": "aEXCfsGPVTtLqor9AYrDfbFVmmam55F1yxzUYaENHLViJmoVKUAHTucHKRqPanQ5LPbj2owv9QYQiN9DNso5c2D",
  "key16": "5KBdrWevutbAW6eemz4a5B3GmAg2wnxyD7bjTtXHaUVS1PBx3F9ywa7NJReVZcK52akwGsgM485U4TTW1jvUN9Ta",
  "key17": "ES92A4pz9vW4c83TTXsGx3m7RRPMMDY5br8jB9yW69JG5ke38aT7nS2cBDMsU9TQdPLGg6bqAV8PU1iHcuD9uEo",
  "key18": "3pttVqu5vaMQyNMbsAr8PxTih2fti9JQAaA1vioUoDB1gHdaUegC6SKqoSToGrk1aSTPFeosG6xEy57BRYtnrARS",
  "key19": "3kPWSaPZLkVGDHWXjT9PYbpSgjXnvfRrBRX6JkzLf1JRLC7xCYzGoqjP6mrXjKts3KhwGDQdbN5Qe5DqR8kkUAGF",
  "key20": "TqExdZFnF5ZAzD9QqKUibVX9Z93qVYFhK9xYvbLYykeTrdCG7vAfSCoSGFGA9bCo4t5RGoH6mgs1YZZ5BNVE9e1",
  "key21": "2f3Qab1QxrxB7ynU8wn1D6DUgH9HnAJL2EWCqLUHDoWVqHr61J5Pb2ZGQuPbCuJMPbzVj6DiXgtDCaTQ7ckqgaU3",
  "key22": "2Ufy9uf8RwCYfYD4BKjhv7sy9WixJuXheS7Cn9xrTJjN3KsH4TCcgpqYchDdX2upWpsfpVZdFU8u5gab6JsXjN7w",
  "key23": "2KyQyxmZgsAF2tQ3e35ceW6qcSvEQyBBm664xYg9yJpVNiacUPVrPQdxWpjNzbKD52Cym39LPueS1UT7V4FYbzgh",
  "key24": "3KqemFgzWqBwYGRt9MR6miBG5CBv1iiEbSkTB9KFqAfV4c9QzZBoY1Laq6CGh8qDPH4V2nzL8MY9XfFqfwk1LVhV",
  "key25": "JUYDffdGF8hqRH7rjm1VmSVSqHghyqsKmxG17m2E4WdsRrRd3WVQGEaaPNPjHDVzMcd79S43uMuwtXu6o8nEMqa",
  "key26": "4gX3YXM6JWS1TgEtXF4QJPg2cRatnBE7BjtfGDmLEHxSCbbnCJQEAT6BLcw5DvbAvCgqt3cudRQ39RznHUTuB8gk",
  "key27": "3DvwfoQbGcqRg49fvvvSu4pP3x5HWHHqVcxQX94oH55xTFffPaySZYLct4kKsDhrCxxLvpAYPju3A8DvXFquJAD1",
  "key28": "5FHy5SMPc61jp8ME4KpHpcF1ffA1rEx2QTWBjBmVucYxSmCEDCvB8CPpPh75gkbpvs3FemGg4bHcRYsYeCx16CEV",
  "key29": "XJoDsRGai1cLF3yadoE6weESSDw5kLNCcunudQHhZPaZoEJGCNP77TDRzNFtSGeeNTzbSc3rcdAXC1pHU6976aZ",
  "key30": "62xCGfuQk6DtPCH24wtzoT7vKb2ZSi54fyNoCCEHAGPBzocY36A2db4PzyB8tj96k2ZhjqyKT8N943U6D7NZJv4u",
  "key31": "j1h9DyJES6u6R8N84WwETqZhpDLCegdYpYHTm8mCi3DW6JrobS1WgtCd6V7iDHNKE5bFA7UbecC99pSPqtuno78",
  "key32": "3yYqNV9G1LkVeU5NgUqQYpYPuyn2sonU3hJFwSEW1uWoUGahgTcxeTwaFCporxqfKuY16i6XBrHfrC9nmzcDx2JH",
  "key33": "32iXu3XyyJCv1tJBhJhSxmHKCSQNvUhVVhAqESmAUqsKLmm4hLio1iLcsPt1h4LwnfMXXLW6qADmupzyTDQGLu1C",
  "key34": "5NyFCSFDRrg93ihyddm4AbGBiMn4uF4AY5JeeeodWJfaQUNtkcSuyz2aHRiXiw7DPZkTUMYtruhVwSbmhsHBrAym",
  "key35": "gfyi8zg3ahYrhWmpYu8DncjqMPrZTb6qzumycedzBmwdtFdkBj2zQLLAthnXyQzTPTbms2SJNTv36dniEwRkbwU",
  "key36": "4aLUAEUKipur6EBhZkbUBV1RmZhZaPP3jVHL2rtd7B2gdxPsU9xkYZiVNNJVuzZFbkz8iTnRMgHxk4ita4un2wuk",
  "key37": "2W3UmKKnrHNQHMzjwx2mC16q1EvrbhxVqsFHjovXkvLmz5LJVQrtzyVCpj7XNw2gXNso7WvELhVVZwobHhT2dPKT",
  "key38": "RwhQaMSpNwkcDRXeCrU7iB821muHHttuGvLJU2e28mv6igKeKwB3b2agsHoSo5CTmgrmDwSDS2NiGysnxF64SbL",
  "key39": "4iMdPqN1AjqPPTfp7CYDvfrseEv3GzhYVb5uU4SV5YRFmp9LXPsnRwrMEzLzaAqU3XAKs1VaqVpqoRGsQGiEbvRS",
  "key40": "2L6RioUNWX88oNQ8Nqod5qHYYJKJitJVMsebaq3TWMp8HuDHFuech3b9TVkTH3HynXBy1J5dFwDMoheFm3AVKRz1",
  "key41": "xcwN96nzgvSfJarX8v4wq24GoS3zTAmW5nUcFap2q4kqK4m9CmzL2DfnYs5vzSNhiG6c7HaXoS9omMKebthkLj6",
  "key42": "3a8ZoaAnhn7hELexQQ2ExLcVi1bBz9okwzdfYKgi4VgW91Boz7koRjEQCLBPqhvjSE1FuN1xNt9Zb62YfkohtP5P",
  "key43": "7ELzkUCg8JWnqyNof2cHwybQvPBtTtTsHWjYJWNXi4jfDFo3edJ6QBBoynyc886WKwt7pfV8WvD74n5UykvXdkY",
  "key44": "ugmyNsr8NX3e5CR8rWu6gWYGKoJ4aoCv4R4WRYR8xqx3wyEAKSJiG79gD45y8efkPscidJSKNMQcYBkmVozrnJp",
  "key45": "3TsVSXsqJifdZDGyNJGw2Mz1aNDizqYSDqSjo6G1eX51ysU68WnDxSK6A9EUtiyjsvgrrjCREmq9vTfYUhEJAuDK"
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
