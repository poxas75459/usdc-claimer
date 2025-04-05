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
    "2LmyQ2bo6zfN2SGJEtmZ7oH5sQxMFJZtiqQwNGNLav5NDQwyto52YWq1yzkVoQ7NpxCS2XHFyV7G8Vk9iwPV3Q9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45a4ZcVH65Ayu5h3y7QMv37hoMsHA6jYV9cUtqPhCyjCXT275ZBg7CQSxQjZVr3nnPayAxXyn59t1AxZVwogveSm",
  "key1": "57kE8fmSGq4rYiiydNJ8DgLEFfXfsTEEAk5ERCPU2Hu5P52HMqfKmFdDdSDyfKCp2w3cpa43NRVrCdVxVyEFcV91",
  "key2": "3DnHGvQJ11SRBgZt6jxmMmwpHDCnQoTUY43czm4DaJjUt43m4staJREY3z4yWRk4De3YDdLq9XWUVGXnhYiEk4tn",
  "key3": "4R8sNjJf7DLTo4sbpCV2fBMHYimroa6NpBsYUUerL6fKinGoz5BDutfLhyRmzkcSARQsuF2hsY3GSkfoTZ9KRbsh",
  "key4": "3PR25LbJ7WU5P6XydeU41K8QdJbjGAvdyvu1T9QUmrJk99cTR2qwMo3x8woXM3nr1UrFE8TyDiuZ1sJyP28vh9CT",
  "key5": "2froh4VbgykF892BrEVVoC3fub9DzuKNN2cH8iHKbPs9mUqN8YHuo7Ci6eFuRNZD3YnZEwtY5f28F7fueAjhoNx9",
  "key6": "3QSJ2QqWdchnCPRPAPwCYeFtbco117kVz2UQGQmwfGs6PoQ3XTDoBKZvEQxWGNZCfGoYS6YHk3D1i7kTGzfS4Mg8",
  "key7": "JQ3b7L6btjiJN3KoWJCRPSzsCpJLgZUwZf2tc8iXQ42fcP78r5XBqfc8KucZWLXKcL8KzcgJ69DNybCPSyFS8CK",
  "key8": "5erjkTTY2HEGWV7vT66Mu5MFFffHzwAfB9XSCd7vfP7FUYjksYpQ7j96XJPNHBCFYxVSaSUqVL8LuMnQwN3ekgWN",
  "key9": "371FsrhFAbHuuccwkkDTxrLoaYR2gwXteH6fQ8jqtPvYwQ7Zc7g4wh2w3J8QUSF5XJ9KN3x1jwL62to2Q42zV6xh",
  "key10": "3z52s2shRZ2HgWDzzLaSBSDC9xuy59vPSum2frrvYUNgSa5NnQeq9DcHEbNJg9fQqSszCDraVYKeJ6hYonm8UpGy",
  "key11": "4p55DRD5or75XRZhqczpJMk9xTAbYKrxGad4gSg96fK7eRbEQ4ckBQevjfNvZnyCTovfgokyd1Wbk3Tv5KT2wiLS",
  "key12": "4o6UemDrNnPHd3ULeuFJWb7mYZk7TpikfHbyzT37P6wvgZa64WB9MJL5tcTJ7D6Ta44p832c43bAxEtXMASCXTCX",
  "key13": "2VzBxEghYqtnndNqS5qBZXoFLDVZZdj52P7o5vQwgp1MrueEc99syFpB5znKT8fBGaCssjQsjgaLWMWBLVejmL5p",
  "key14": "4gATut6Ha1AkZjAbANMBC5vv1wfthwDXxBw1Uk4enPCtcTnMEBgNj1HfRiyUQ4BE1yvFQ9j6EAXBpkGf8tnEZkMQ",
  "key15": "q4q9cnm2GpYdJHgB87UnxMkGeSVyjqZNFL59DY6UdfwWdbHyTjJDm6yNzDLueEijvSdiyvajEEWoGfKYBYbZ37E",
  "key16": "4GkQ6uWoFBTxc6i33TByXTA9tCar4SFPyGSWHbxiwZggBuQzxFrSAB686ZykqQPXG1QXGp5RXszwJHgxXUMv2LrA",
  "key17": "FwKUSQop1qQu8WRVoeHtSoUkYCy9nWS79HbtwVRsjPn5zx9H1SPZWYwUVax7BZhAThYpCkWJyQb5TQ4PvDRPGFn",
  "key18": "4ctqq76qWMQ32PhHuUbVQfRa8eYox4qQ4m9qcScMfaV97wnJCb7aHao6enzVNnEUe1afBvtf4LVPx2VZVjCNuZof",
  "key19": "1SkDPDQXJn1SpcJsq4Lse2ZuekJAJEn6sXhhwrHcGZrY5SAXC75am31tQhfrYC6Lmwvgo2A6X5E1NqAaxHCCGuE",
  "key20": "2ta1mgwG3e3XorW4tbp23sc2eLb31yUXLN3gyEGy1684jHqNoWfNpFzT8AGw3N4NBLn6J9qzdq2BMA3oTPaAuWJK",
  "key21": "2L2iP3mhnN6Lh8yX77W7v9xcUDTMJk5vE3Yu4oiPs7gZ2v4dsdJYaoN62mY3P9CooTNnFSPb5rE8k37yQqxaarHz",
  "key22": "yy3Rhaoxz1PxJ55pm26TBbi4N8VNvBJHjPBJDsTHZPVm8Vdi9qN8vqBxE9CJk9vF2pv76mCDpaCr7C2UXTDxzmS",
  "key23": "5ayi36Bc5umfKH1Ya2zJwZsuS2r1X3DvjnpV5sVtZRdf7jHFR8SyCHGidSW9qFwM9487cGHcNQKsv8rqHkZZxFjf",
  "key24": "5u2zcVTKMKuxwnivH1sxnZZ561ccb8YoZyFNhSRXJdcnpzmfhZVmrA6s6qXN41C1hUAgfRq7pzxS7zc3dUXL1PF7",
  "key25": "BQB5rxbqBCVzn6RjrYbcy1D5zaJDnmcTcE8fPwKN1kmTmYsTd5pVT9TTzYDjck2E7knwegRbpsU2KH2k6vNAQBd",
  "key26": "G27z49A4G4D718nnTRbZVkf9QsMGWDXxwp1PrbBj67n74hiZqGDWmzQM4otiZbKNc4PEXPe9BfrgQBhhDxuqRLU",
  "key27": "5evqfKSvJGPh6M6r9XLXNkNicrxjgbqxDTxMkSaBhJcJURgWwxT9Wyhiqiaiqdr3fjLb9woAcZwZv2aW1bYi6rh5",
  "key28": "4iJGMB3JsY24vwNLXPDTwdCMmbFAEMHBrYxVjSR5gzJhzXJJ7XC4RGcEVKoMQcgdD6XRGqZvtMhkZTrquT3DZY66",
  "key29": "44dFiTTYkkNRAM9nLyN6Q7gq7UQALK41GEvewijRrZmTSsJuSCvXDvuxAurjkBD3ngGfYT6iogvSbpnMyETPcgHy",
  "key30": "nmJjPBMafi4jqFcnQSmVjr2etk1qHNHP9DTG1wEygftgU7XJvq21pDjup4K1s24Xcm9wUHZNtpMYqVGCvQHzUgo",
  "key31": "T4vTBpAXy12wkeaAuzMkVN9ygYnxsSFqxPbjoro7vdsizE9ubRi1T6VZqUEpiVz94XyNGSNKrYedgqdspJuuy9z",
  "key32": "gfXxGQPo4hbqCYV78da63e641UJfgGkAADr8DtQQVv43i4vD2qwrsji2ULHTUaF6NpSo4k3YEytKcMJKMPZgApa",
  "key33": "3hspc6mnEyYX63nJAieWqC2pEW1nWsxLaWJYvaj2Jtnj3DmLnWS5t5PrXrfBeD9EwXWhiMW1cRmAbbRyRGckcuUJ",
  "key34": "bC12zrkRNFx2ii3SL7t8KfTeRZqaZZ2CXVxrThCg7vxGbb6emTXe5CeZ5hAVVhiBAW6B7i4Ak62mvAQXrJQeXJm",
  "key35": "5QtBnDMX3SAfAGgArwWDy3H1ELn5HRUMAbYz78nGHpMfXXYU6mHN3pzXZm8byeGszPLcDqVxs4gRYw4rtN2KMDbr",
  "key36": "51z1Q8PdMvuBvLCHRYNAPY23pGC1fe4wmbRqVKj6sTN53WN5kM8JyBEHgYrKXNDkoXfrpSais6QvtUtUK2RxsK1x",
  "key37": "K1CL6iUUbn3B7SvUtHhYy4GVUrBfmrefwUiPzHWrswFjvh4Rt7ZKoaghRivJqULG7Y2o2prPWM9t1ssaYSQfZQU"
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
