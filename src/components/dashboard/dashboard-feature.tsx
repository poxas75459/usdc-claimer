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
    "2YZ9nwee3Bn441FKuLWRTTudhnkyaL1pteifDkjUoCusBXMVo4jGGR4KD47w85ggBvCC3t4KQD252sMDoPc4NrS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztqwoe8BFMdSJbMT2gc2VPVh5YiCSH37iCExFeMaM9MR2tJbEq4Ltp6pB8yYD7A1xdfVm4YeZ9Jp2DWpva3dNAx",
  "key1": "4HGzoWo7WikfEkQK33vmnkPy5wiiASsVcKV1GS5kDwxUCKgDR7b73GgAyzGA1zUtCmxm1uQgZbpuEL5VEZyzfGa8",
  "key2": "5ff9pK2XzR8aihjEzhaSsaWXqZ4U1sfen8R5osbyJx83HbXBgbx9euYDJdKHn5DtsjPVf2NpFHoauZMGuMpsy9QW",
  "key3": "2DcKnQHkuXqokp1eFVr9utWVaBWZA68FKFi8Cbxwu3DG3q8tK7qy6rC7z2jpVbXCD8RPJcqD143vXqvBNZiwfG9r",
  "key4": "28nrKzY9M9bmcEqboZx8vrjFtQAiYMWrm6Q2dEejrkUA9BhQJRqooXZQ74veX92SVb4cMJ8zVZSbLdXwbfy91zaj",
  "key5": "4VgQcCsSHiw3kJNnCLwJycZdt3Tj2m4ReppFded6xt7ayEvmyKz7SrxXHMGGQfvDsSK2MPF6FxtTADtXLR1gSh3w",
  "key6": "DEx6bpgrcq2NHvXdQJfcsYULCgruay9VJUyzQhXr4u8Wb2cE4kJVUBJ5hnmikdwhPaNix3Yycth1xz8UzZiHj86",
  "key7": "2wRbJGMLA518QURC7bUCnApZ332bayVD3zAMSUECUAoLpjAu5tZExAnhXBv3Q8F2EQp3cehyVYgL4FaMmEnyTVz",
  "key8": "4SmF2TbzywCKBAw5bc8vQrtWy5u1jzjmgeYiFF1BHKE4Fp9CAjbTCfWJoF15jY4NU8zWr37ApKc72rVuHrYg57Er",
  "key9": "2Ka2KZY6euqEts6bPitAEDR635BJNTWTLyTLuj9rTybymxSnLcf4cqU4dUWZJK9QAn9ha8by5i5t6rqppFRYqDyV",
  "key10": "w3S8ek8CL7JaDDFTB3FYoWqgX2ENRJHmCUFFF178atNfyYkJfi64RUuB9dCkJqhgudRB2f9kuKfxYGLx854jSbo",
  "key11": "4sRDULdCdxN249AFk9pLCBTefM6JTCRpvNEDvFormLLJZTjRHexVkwek3oFHL3BscwyzWkgF9teDcqnnko3NX9N9",
  "key12": "2pZsSpHQwY4YfbXKvhN8dgHipQuSrDsCPKQybmVw927qDsY3yRsa8uArASypBBcWTTmTxaNm7EDjMVRh2RZZ2wm1",
  "key13": "2mrjVV2rkAR6aEMyV6SBKBGzhVJLX4MqYGhDiYDtcRzYomAKsCmPXqWLjWBge3v7XtZ3rAmWSVx9hiKDiAsk2ujQ",
  "key14": "4NDYgbb8zd18cnSrT8tS2Xcw9Pzi6cDAsBUeBBkYY1GDfjnBajikxHKenVRdctJmVynFJZ3TBfGSzwXAVuC5fiFo",
  "key15": "7VCviSHTWRqbjVwQB6W9fcTC3tUP5JomrNnYMd1HXyLNT3WuBstsP2T5xoKdJje13tFUEFdKbELgMn5t4kNJeAJ",
  "key16": "5Ty8J8RRJZsWBbmC78xD2K76oQK4tRu7BKBseSpqdxxc7ep9suR4nzQmiAPCLraGWUDUaGuJDWTMxt2TUQZPm63",
  "key17": "23XvEDj8JuME4xPavjM5Gs6PRCwKtgwq4K66orFgEa61EQqCYo8mwpMWJE1FwV8vabF4vvGC78p46XXsHxXL1fCZ",
  "key18": "4hC3sxndQucqfvpUtj5aTamabqKmgUWboWXCugj3viwxz9fMi66pPtLBGoDe21apmfF4cFwifjH4bJAxNBmkPBhc",
  "key19": "5dR6njM6uysAWZdsdDnsEDeifzQekgKmjmu7dSNdnRbuBZaPhD8qetos4oMeW2zQwhHpoVJ8XB5kd5wBhd3qS6HM",
  "key20": "GscxmsykNxQEQ2jAqiAd1Ro1ECPtsp1JEXKiY9LQdC5Xc3WNZ8G77sQMBgaz6nY8XCcLe5tmoUjYmNdsM3G8KJR",
  "key21": "2Rsfmf5DY6MEyA7gB6GWp1k2XwqH66ixXDmiuiMtVb6APdxfs8tQMpANvQSypsoSeEiDzJx2x5VP9GPEkFFGTete",
  "key22": "UnNSM8pqGfVmKwEGQLwXt5T7y5ZnsJ3ktBP4C5mmX9gVei5mq3BaAfX3btEXATsydBfCJ5sC9BoM2DXJuopiSSr",
  "key23": "2dJGsHLLRCPdX9rp5DvwQUP9eWpo2X52EBHS4Ps4V7GhvWJJxoSrVHKJdPSEAeUb3NUe4BUgavCSrJ6WAvUWBkUL",
  "key24": "3wDpptp3QR5NkcpqMMxmWSvScY4Cp2qSpKaLp8cGvvhEda5crXuaTgmAJH6k7RcBRj2vzsVN19R2hM4kU3BxpsP2",
  "key25": "3ZT1NcGkKFGTeQXFrVRVRnEFfmk76gAFGE6Vxa1ggh1nf5rZRg5wPG43w2vLqxx5SFfjSApdMXb5hdLUdz6TNufa",
  "key26": "3JG1z7unwF5cXMH8R336N6n6eShKKMT8FANw9nPkREPvvJBq7awVjKAFriDhX28PR9Do1NeiBeYEC64wR3i5ZvwP",
  "key27": "5dg5MbgTUHwH6h2eJauox7sfDuwYGJGRyFQwgTPS97rLVhCpe2cx97TrH7XU2aqgQx8YFtCC3UzUzuRfQRMHJZDv",
  "key28": "a4EUvESAzXc6icTqjDYMgUWNdSGTGJUmjsXuJLXo42ZyyqmTY6nGE3pSVWKmE7nDzEeSmwWZFALX66BgrVnBKJr",
  "key29": "5m9GwRz1aiGD8b742cN79WHgsNYmTJfkseYqRJMVddJX8gdcPVzynaHP93gKKf8nMS8EUsVqzepF1GPNN1RyatUR",
  "key30": "3tzZATiBXyHFYrszCAfcVT7CsjBRh85zrbr2APuJJBjD6G37jhMceiKYHJUjWTZFKCt6mTUPJZWpyrHYfaymSZFZ",
  "key31": "3MDVg2H2o5G8vU7nnixuZ1DD5y4BHaevEiZfeNqVw2iD2Dt7XyA6wte7GLN8tzX1uHkJfFfSouGqB5LoKwWvX4Xv",
  "key32": "5Za27Lg1tKE2X3gEfCv6AMjf1ED5ynNzZYXRZnVcQheqQZqEEksZhbxvPxiWAB5zq4nLY69u9Lw2Z8opLFqvFrW3",
  "key33": "5bk8fpJ1ucvgxgdTrr7HPFoZoN7NaPknRWLyJEnyNy34jPxwU3jsPrT4TzWAMqKZ86uHXhZ6XdG3shoSgLiEUfUf",
  "key34": "4aMc6ygnVBjd5pq5kQV3CBWZ9r8ogZtcj7YyuuhBfVcKrmE2teV9rZA4rBZuG7HRUuQnFSDMRjVXazPimjq8vTPP",
  "key35": "5oi75jbqPBM6j2dPCJVdKs2oV8tNAqxweV4NZWjUudn4xBSGip5W9dawNYnJ73yh7DhWFgDsXa741hcMDQANyXu9",
  "key36": "2uuGfAZM16AWqfLuLuRWiB6Usfhny1HPyTqrym36JNJBbfwrXEw1mQRYKFLj3xP5A1BVYLtW2cwPchrBFws8qA5g"
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
