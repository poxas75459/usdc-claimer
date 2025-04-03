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
    "3kVyqu1kUASHCgQQHcP27srojx91XygsfcpvCPZBjGoh2huhoo6y6yyRWj1ZySv9oLcYQ1tTJiRP41ZFtoABpEqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5GcE8nqJBJJwFaRmrjUmDPhAhni2tBKtrKUg5RN5Bnm6WEhtxqZ5EqVHSf454ojcEkGp9GfRq3KfwAwKHpHeLu",
  "key1": "4dECAjgUzmdpgRvqNQ77qcxEZsjt2cdQJqgav3Eb3SoLLuCZNWjKtJzKhaJmTzQhp78XfQ2MxCjxUPt9GX7re1xP",
  "key2": "2PDaK4kR5JwxwpFaFpPj7LD18hd5hkkVWAGb2eZtZjcEMA8xzhJAvUZ6AYwbNVvcqDQ1hjrWM62gZPCp2MgWsf6A",
  "key3": "4Dn6smMaEFQNaBXRwcHrsjb48bjQs1AWcysJwvFns4qo1mP4ZhrJ6138tMxUXfScGiXRkztToQNtRuwKEj1rWS44",
  "key4": "5fygx4PCJjcVVwGLQWoxDoya7pYDFYQoN61EaSuN65LZ4e6jevsUmVaj2Lsjc7upfiJUk9qjnCSXctLTiCvMVx2S",
  "key5": "5A1AbN9TQsYj2M6i7gcYZLRWTufdrwKHvkhsS27cpBcXqrTszdu7HkBH382zSS635DmwVm93ikPE6Up7H4L8STo4",
  "key6": "3ocJ2JeXo5wFPdrbyvDk3C8bAqCK7UM2LtCH7uxX3yso3sW5ZaNcepC1tBRVD4GmCGariAKn21yYr2qsP5eaiKB3",
  "key7": "4mTY5j1BTza51CmjXUhb8PTAU6tbexQ5GUjjchDPv4fQ1pAiGUXBAQtqaEjXsWCWeoYkQuHNkjoxV1w1BcoWscUR",
  "key8": "4N6A93hfYoUb5J1yG8if7SxhB3PQwrhpX6L38oCfwtk53sJawNhgKNdcMHHCyMCAHLYu62U3bRSvno928PW7McT5",
  "key9": "5ionSzZzCbzXCRMmdLEcckzqms2tQXfwgZLYczSoeJvwUPcgupCLR73oGexvDP6oAK4WsAAqsTdx7scU2wKY5nfT",
  "key10": "2GKDuUPDqJXvAAeogLZ9bPZmFniYfp4TMNQG5bA66ozpmABuwXVwwszpxgdyaD3o2TX5FtSamXN3asvUB9ABtJjN",
  "key11": "3hVfRGKauVHtCdf7McmuDNLTQEwykmefG4zpB1J65YhaAj89PxXDnQVhWduzjr9kknthaP33utL7Pz772MkqDA6g",
  "key12": "4VKScGotGtZZGGk7iEEiRoXayp7kbmFtk5rBeCFFUZLEtgrQhdu2wVPsCzTELz7PLhuYyLdaweDmfxubUi2gccqy",
  "key13": "2rxSEYDtAYpXNzr3FXMa7gVMNM7Ku8PmCBt2bwyXpBxdhESKRDAYPb4gCHgnTqHebZntFgg24ugqSSKFV9Nu6eaA",
  "key14": "5t8KDz1CZ7Lxq2UP7PdqHw4e4WJNpT6NC4d1S9HURTRMKdtvVJbDmC9os6SZz7T8hqT56eFDHW1btQAUzi9Xshez",
  "key15": "39JVDoyrpbipoFTfBEWAZ2wPAHKveLQYJakA2fEnfKhY2bXtCgM9e5tQpkAsyfVhyf4KDQhwFweZZiVX7ZrHyX1Q",
  "key16": "3SSByVeqChuGwFUvLTAdzHtjztzeovNV9oMgSkvUemRFz3QKwA79msb4VGys9WF7dJFie6zKewZJHwV8mWUs1w2U",
  "key17": "2FyUEc8VZdz11b21s2MyU9Ff8zQSeod3nRLDpdAanr5KskJiCjfcYBK7fMRTDGrJVShzzBCn3ZqjaqibfboSVKvD",
  "key18": "4cyaqsdZd5yoaJsxq28HaypTzPX6gwFmttSEYMAGsh5voXuHDHtdLuY2mpMwsSUs1xKKRJRMXMgonXF6fh214kH8",
  "key19": "3rz6BMP5BD7MG6dfW63gYozJE2Po53xekpe6WganAPeCtR3nb1rV2uvd9wpZ78ZTA2hHHWt9mwdKUBw6SCvP43bZ",
  "key20": "3Urd1JDgoUfGzewnUX8niJ6firZD67Jm4ZohyPqwmdHThyRcc2T3X2XUsP9HA2ECTYGkbrLmhoZ6UEYzXW3jqHfG",
  "key21": "4xTYmbA8XTiF8PKBYmxiHBzcPqHP6h7So1Z6EcpXBW5o3qsJVcNifwU85V3SQyXQYBsbwFDvMjMAUQsch1q3sZG",
  "key22": "brxou1KfAXmLUfR4gnVa5XhujaoDHoah4M9MdPwfW9gWQvAzwKVeJWyodV5aTQvbiNzvC2PSfWECwdE7YXe4i9x",
  "key23": "64VWjKBxWGjFJJsDEPMABjKcmnnykmi88MayTUwsC7T83tMGV2oPaKXrUXS7BLwJA8rLwZ52EB8do7kyt2rMSnh7",
  "key24": "4CzC8N2nJzHNaVfw2Bbs2HMARdU85zRK2j8jXgFFb5vExyotnqVBGrb8c9VuAmg9kvgpx6dnQBMs6EKiwRCc8biK",
  "key25": "57C1aqqxyfvrcqq1QTJZmeFETi5ErbEdpRpJpN6aNVhFasmnKdKdDFoZnDuGwrNtLWW31mQ6Qm2Ww4NAuBa2Q6YJ",
  "key26": "4PHsYdCgTRUTPwnivJLnu9MHcGMrcsXMy2pGDSHLotv1Kibjb5xbpyNnAgbUg5FTL9adV1gf1z95WM6NHUdmwr9a",
  "key27": "2AagrcbYZRgdJXrLWAkgZCNfqkE9wjzZcpRSYEdjiTPCW9N5TaZPfryCnWatCnULRLKcQduQWwV6wxomh7QvyCDx",
  "key28": "4wm77Riq8v7BbbG8KLpLF8NBirniEshZujJFCdCzrz18wfDCwJsmQHqxBJsadPdMHnD8NmieJn9KeMhS4aCfT72g",
  "key29": "52FxKWFETY5LXSpuP1PX6ygcViyoKf3Ys6s2ZSbdBpdAwnp2qeYWV957pd4AfzbjQ2bhZY3SDN7oiTadsB6hrSfo",
  "key30": "27iRR8rApT1EDr4q8ySmfj7kwUy8cXueYqp3vSXTMnkSd5aNNjuNAx3VNktG6UwLDBvpxX6XBJ5ds6BpbJ9YULNj",
  "key31": "5F42MKQ3ijyrTugNhqYUZWTETHyXY5823PZotdHbVy9gQgF8e9RYhFWmuUGC3ZScZZn9J69pJ8DHSBBXDEgn8L4W",
  "key32": "zBcBkAAcsVS5E6qpV8aKQGPJ499ftH2MEWvoubAEL17D1aTAucy3qQKoufKYTtWJZKtZAoH7v38yzQK53QnnjQB",
  "key33": "4AA2tNP53Csnn749rCFjFZxfkoE3KSuwh8F38mXDSbUeKg4h77DSZKjF7DZZiegYwvzTsJjHrABDPqcbDM6Qfu35",
  "key34": "34BHwkH9vbBJ6R7PianVSavMbbEWimycabbdSEQqkTo6mPSsCYNXDPRfVV5ocpuwjnWrMehZ5vWaXGsktVNrD13c",
  "key35": "wsZo3uwq4vaJasWyeiMamVb4G4cmUkq5MvopWxQEwtDpqFdn3ZCwgdpBi4N5FtKyNuy5TV4C9PuYBAHTVwYQBXz",
  "key36": "zgpCJp7xbyRhteeMLjH9dTkD3Y1mmMNyz8dW3H3bNmqdrAMbK6NACbLYznpGtWooT9NHFsRTrQ2gZtuuex91hHr",
  "key37": "5f26AVzd74QirZoB7MR6rjqXqd7PGurjucDYQGvvRsdxC6vdCvJ7M59Szdc66Jp5nCdnUFu95N7mu25vGKBdwxXA",
  "key38": "44eVkJuxxk5WAQHvrDUzHZYZygGpiv4Vi99yyCPA86WqVPRnBNnGQF32amCMKi7LFECuPerQqpdnGyytX93C1Yiz",
  "key39": "5c9dvwx3nPALmS5K5swpDCnZ3doXqtp2dE5czE12HsX8DEjfETYm56JGG3dN8LowkKy6QNZbGS4XyWXNUesedLsZ",
  "key40": "45VLKsKMfogTJFUFVoTM4AVQiAJwwJYK45qCDtcj5hQYRwmYgoQzmoLtdi1aBux5YJbutSFr5Mqhv2YZyJbwv8DN",
  "key41": "4QrQHmHFFaqPGiydJjVRtEMbRpriYnscuYUUd8Rp8pV6grB2S8vvp6Q8m4m5dk4XHCDDTieKwUqr9D3faZ1f2QMk",
  "key42": "obacUaPgJaQv2fQ3T9wzF6SXS8twRuj3xJcQJKxmiNLYE7m8K8CKJ3TEvPmUADPfgnn3htHQqDukRg5NA9aVje9",
  "key43": "2WitZFW3crDKo5wvjXgsLYPwyWPjUvhjJr8J4yVrQGCFjDkvqbDeUtJZQ9j6Qhuk69s3c9cmot6VAK13ejWEvFFg"
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
