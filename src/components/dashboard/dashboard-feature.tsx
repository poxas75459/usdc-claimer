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
    "4JHmttA4LpP1Tv5fgwdLbAuJfx8TtMCpcrYm9eRMNZzdE6PJXNGrZiY8D8E33H1hSHay1tWVH52AhSbDAw1FpWpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1uqoG4SaodiWUbhxbGDyQSUj92ecALssXBYDrHo4STyzjcCnThwTQerEUSsVWAiDnp7yQnK73GksGjPLtjZQwP",
  "key1": "gQ5GzcxnJQ3ZbjNr3EBRDSZSsKx8i4ucmMAFZYQFsLcNLUoXmmqoHwLXCA9Yo1hGSHfaTMeumHmyepWWma9YHPo",
  "key2": "frY7gMBCmgP1RtqB66pSYbcAsYt1BBBaENKBNsTyRYbMf2LRHubWYsL1d7kwy2n71iZEUomDVenrKHmNdyHVQQq",
  "key3": "5TLZE5Wn979KaaS5QwhZECTjyuQWWmrhvctgQgaNMLyqY5XCPUQHDo3CsGRTcQECTXaf89TM4GkY29GKdPb4UKfZ",
  "key4": "3rTumCMhdhASgekgTT5KsiYRP3fWjLAvzTfwbf3636cSQJT9Ca1JevkwsdpdC1mRqGQrZjYUDSxmmrrksPXbnWGZ",
  "key5": "51yfhHSf2bK9yD6yUbmKxo19MAWpLhVmhRVKmU3DZ86ucDjvxX1Qo1yL1hcty8xH2KjEaokvv8BwNtPyRUv8DY6x",
  "key6": "32uEK9w2yG2SCGf8Kxf5859WjDYUgZDDndjdDhXAtgyyAFo7NFe3NPJUzw4jNPCygJSCt64k2yuxEQjUbPLgrDBQ",
  "key7": "5GFWgn8RZfjk4Q6Gk62P131oLi48UBGehafYDPaWYr4yomU2bw9RGobcFnJ5deMWVatWXYje5UNGH9RLzWtsAVq",
  "key8": "44QFQU3rfpHtD7ei2QmMtVRWYc4buDJ1TsfDT4ByxxjKX5a5tNcie98gBKSYtCsdZaW7UsGyCf4wkmyKiQxwSAT1",
  "key9": "3J6sPQVSRya1oyBVV6fzt1g4cS2NgicRZoMMLphAna7Qv738rG77mF1hdFtHKFgesFuEQYnXE4BfHwHT8ka7Boqw",
  "key10": "27fMpKTcq79f5QPw4zseNJaBCxYrb8fBTcJpjVfSu1mLNu9RxN3cJ7r2Mi9EhW3XhtEJBb7Yg3r6ZnV198bAFArh",
  "key11": "4CVEPAH6MsKedXHKxkK9RJqnaAjdJRn5uGGHCoeBV5Gt8rhaCFcMTC4BunizRuAGeDWXGW9s3stvTfxsaBkbgsmH",
  "key12": "2WwF5cWkpLwu973DozhxVCDmL5gCYoS5LzwDGUQwo2cZxqaPEjrdmvcMbGuUHD5E59khpxqwf5qS2iU1CUxTuaRk",
  "key13": "5A3PzPSUMckYiitExRmHvsza3xXLfVsmw9Y9Njqd61UGbpBoMFcKJCCwJcrqz9zuBsNckjQ5swEWCcpgX5T7Ymwk",
  "key14": "63oarJkYjCKRr94Rar7rLsLqY4Apd1gXZ5o7iacphfc4cG4E8xoEwZ426nDva9VNfo4jVg21aixQt93mSWwWMNCe",
  "key15": "433epS7uCJDLFUg3BDSz1tksUdonYfr1fND9joXas82M4u71nx4XbqdNra89KJcqCBf1QSZpZ5gQTubTx2Szsh9d",
  "key16": "33FNQqoQUqSpeaDkWpaj12RMLK4vVTcrpx6X6oEkrqCTZ974Qbc24qWmb2Mrzz1YNLSQHtgq8rVfkSJwP68X9qGo",
  "key17": "676stBMXtbcT81QEZeqJEhWpCJKfUCJGdM541rNrz5JnjDmRP8EkfuWjDRVGyfVt9qEPsTpV8fYXmxug5nyQovMH",
  "key18": "5MnHUhEvhY6otY4oKFtQDXSeXMs4YJfAcPvUWZWovdhx9AAs9ukcKPx7z3n4A4WB5BEn2Wq71eNmDyG7YWy7mK55",
  "key19": "654d8Coa9pYQTrmobrSMy7T1A6oKwAjmzDEmPJAGSgPTPFYyCvre44jyiPL8NiWeZFeJYDQoTj4S9gdkNHG1Sqnj",
  "key20": "32i8DfkwHkSCyDzRDSzsqAdNY76aQieRdWz8r4o7enrQaReZ7gZ3ZvmqmaExKNqHhi7Fd3NJ1uGCXDM36NM8jGpd",
  "key21": "5MKKnmuY6oLNFMiWfjMHyaWV4b3YgpKwLfwoyy8AfK9vSqxUZ2cCoySTiPVhNe7bLpZUM6szBPykfg8brMwJycY4",
  "key22": "2jYqot6QuDZqHCcYWXVi8i4WnPnQuKeMVDBv8upjFmsRVjPwGFxnJW3XjG1hxwEbfgkjSrwyq92DFrrnMwb1QpEt",
  "key23": "67MFR2HGAyn2rNRyprKSXMaB5MhNC7Ep8Bca3vTZMLGF3g441vzEQMKSaRWwBjr2GL3bsd2c4pX2vJaeKmkLstGb",
  "key24": "39b98i9BKULYHrivkk2QtHgzVyqVk4Tnup3wStjK1asvddXRU7xyysjxUz69ZNR9CSB88WKeMudjNi2FkFJ2Q58C",
  "key25": "5sHzGcccN35xcydkevhyHyXyPtmeqAKMb1zsnuWMXko5qHWjQU6CNvMfU75ZucSLYeMHydQtz8kf3VyiNQ64TfXE",
  "key26": "5bVZiXGndhyZtKxGxgWyVXQWQCvBytiddMnUsp6kVJJopNEaZxmSJ7ocuRUtgNzogaWARHaXtCHAMf5A9D15SGpo",
  "key27": "3QxdCwarCnU8ZJqgtuyo2RyPfSWLthfRZNR4UZ7uAY2hQ1Nq1MFXszmn6N6yfpXPTTjSokH2LXPxb9MT5qwFavkP",
  "key28": "3YuuzkF3rszpfi4fwdbN1MreQfJgxs4RFGgdQfGPLAYKiwZwQC3JBcijYqGYbGUgnezQ9re8RoTxavT9emWgE1yb",
  "key29": "4V8UJ5Z1b3s4MB32YemBH1ZUuxMfFGQ9jchDY2zHYa8ShJbFfsYSaMA9MEyd51AGMRhtDre4zRbvSa3AJPVrWwpE",
  "key30": "5HAxv6r63XjhWJ8zy2JWn2RVRxm6opaz6dJ7RHn59yk8pd6tb32EtjCuxpZZwHVHtsji9SPS88N2o4mzuARUDYgr",
  "key31": "4DH6yf6b6YYqwertDeY91TePgu1TpyMmuJyuRxy5zCPt7niXa8JEG3UzbA999sd2QohiFFJ8izvqm92PprbHrq1q",
  "key32": "5wa5gYjvygvuqtqG3hCbxFXET2Krnc8d93gfyuizmTyGXq6xkose459hqAD8ek1ZjzGGKK7GnXqKj87R7jpJaCVg",
  "key33": "5eLmaRbfDKoLmUxr3MGE9ngxCQFpL4zH3CZkmZeVghB5YCGeEdpzRr2ArGXJpZtCrCFFPvdRrEoqt8cyaXjmVG1j",
  "key34": "2BLoqQqidz515gXCSL9P3cXa4NCLXXnoA9iHgDC7bhm5yDX2qdYicHTRxZUY6EfSESqrDQKPuveYXarYtB4V41A8",
  "key35": "rBJvyFA9TVQo862cgHTma6sDA4HvoFCxpfBcCu8cZkuVfKYHC5dBPd4idDUwVRLM3GtEvrsez2YWpajr4Yh1wFe",
  "key36": "m3XqZnW2WUFSgcAVCZGPS38mtUcqdehzH2uvi4hCz4Su7sWduFZzVN6cPAX5xuv6MicDWTMvBkS3LVbdMFuWuNH",
  "key37": "3qsFA8ttr9853kkHvYn64RMxDKaZizFcyoXkEiVvFma2FrAt3vCQk8mVNbkc2FtxJVJWB5gsNsDDMWgF2cszaFoh",
  "key38": "44MkDdfsjYQzJgTLwq7jyBvRujPNn8phCG6z7qKFkCy85QcbaFdGfjntukMooLVPKnGQGygNC6DsnrhTMxdDiQCv",
  "key39": "4uKfJZ5mwJidVwQKi8vJ3fRuUPwFXwQavy4dAPohDxmFN3RWpw7yu8wPwkht8JLBHZJ5vqiB1Be38eRek7Q2BopY",
  "key40": "4UJXEKLPfffRKp3TeQpxspL5HBuF1GkHusnE94P4TArtxAEhByD4kBmZ6tz97KZiuiFxPzGMbqU9HLYcZK4vWF3W",
  "key41": "3F75G7igcWhh6ACnPfTsZRm5cRm5WsziCxAG47exbXbYAELqGmzCjE3ApiEHz1WZEJuDPB7ZCMs6isRoE7iUZ5Vj",
  "key42": "KXB5AK26ewNK9xS39baZ4Ey98iZzriNeGEC5dCqiGauTddqfXX4bDMphfz1JS2kGkiFEwTPuZGkJTZEf6oKZcC7",
  "key43": "3FW8Q5pwRHp6cmH9CPA3Ci2CYUzQyBaEHx8aA6yQr8fWPf4fXnpo1V5t8dUxuNDX55xSdpTFaP4p1DkhJBFLFZCe",
  "key44": "3zqpNgMKHW83ycWypFJdB4VPuZKJwAe8cYXYQ2kUbj35Tkyu38zxkMcSKGFsaSjE6xdMnoz4DTKcc3fuqYYJhaLr",
  "key45": "gm8ykYqnkY8bRMzDbc2ovCUmjKH29nZ9SqcatG7MVjR9oJGhHHjPgmjcd69r6HcRakZuTHGQ3SHT4E3UVYce6cS",
  "key46": "61AhSYq5R5ENSsCLkRPr935TW32EfDCbqQ1Qb65VCpTGGJrMpuXLZZwxLAmS4D5vdvs3U1T7SrK6LSVNo2m3S91J"
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
