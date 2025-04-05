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
    "3kxo1LiXYZCWoPiFrbGs6tL56ZHuseWpsZTz8tz1g5JwenGCVq2zhQPhx133TXGZnkg4s5SKM7dLbewfaT6Yde47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VteMhfpbvM7p17pnxdWcdGvXYaUcxw9qCjHKBcsn3dfKZYbAJyRUCGFYjGZTAUWFU2GTJqeQkDMatDVy3jGy66C",
  "key1": "2qbqXwgHLDJtPjerzacWMvo4h3gcAbtoautUx7PEMHNjMnEv1WaTnDzN9xvbPrd2g3dyDRDSZ32Sgtm43WtxpFTm",
  "key2": "2nv7gAWJeiH9XxPjWVRCKEQ2nT9MHnrsxmtrMxmRg4A2xVCBn1bF8sxUqNZncyYgMF4fyRyEjHSneyhuEWT5zL7o",
  "key3": "2dZinpNAB8EYBWZhzY9zZaYeZ3QhVRSRzW8iZMzQiXyC7Uks7urxwDNmRHe952gA5tsJEs2SF5Mpw14RkXmH6Ds7",
  "key4": "67jPaHfDASRrg3NZ6WDAyiwNpYLQLSh7YTaW2EHA2MY4SjL9yrbx68B8fPFUHZRp2JaWqkeZsBFz5uLbk83VB1MR",
  "key5": "5Gi3W4dsz11JGJpRX2ukatGNCaF7gC5DYq4tADEYPvVjk1SFeRUHzdCnqSRTkCNzgGb3g6of9FNMXFhh1U7nWCoD",
  "key6": "4dkEhYTias1wunmyLbYF6a9pYY46QYTjGzEAtrwPbUrtpFwEcAgq9Qb13JgacfSoydy5YbXqE2Z6mkoDZUHkBq36",
  "key7": "5tHFcydCpcTWffaM4vNg2yH72Z2gGbER26Yc6J4NjCawzznvAUvLh7bMgyRHkBTuy1hU4abfck22r7CBspqkrt8h",
  "key8": "2mcTwged24c4AGA86jLwVANBhP1CkrWGocNPNhAtHg7mcDcMxBskSS1SyEgyfNsLNsrvjZ6jH3D7AK9kTjs8H5ub",
  "key9": "2iKpJTPS4bomRr1LBb6TR4qPiL8AbrBZyQzXX7adRrBykLVH1oDmbRZm6ESp83ToUjSGTSSMYjme9eqQiqFakSi3",
  "key10": "UU8RE6ZZ8523wvcn7vB8F9eTyb92MDFq7gHn9rRy59vHSVqk2ShLQQfAsbrtGyaTCnLnHH97iB7MitdVqMDEE1m",
  "key11": "4JKq5szeKMZJC9bKTtCMdDfiFYpGscZMZVZW2vHgV5LDKkToez7R4YMB7j9Nb2t4SBvo8fdNaNqU9VRLqjy8rTQ5",
  "key12": "5AFH42veUmGN14U5k8frtxepfsQYrB4WUuxpFsn7EB3nKHLZTTU4ypewQfiCDTY5ZW7RghyMKdwiqFap3JstEaqQ",
  "key13": "2UWgG8n4xPyR18vuvS5N6ep8mwUogEJad9o5n6wfVdYvmThoRAUQHnwPfVA7CUhmiHXnWc3tRN84rfe6yMV7PT6M",
  "key14": "cb6hxusmvsjTuXh8y2AyHKPNfCCHp7uTmHv362G1FZb3VYKmyQJsSXVMHyA4xzJnpQv67vCn4ZhprwXcFSCsoAL",
  "key15": "3p79XVLrrxPiR3sJyqQ7mToAQecB8tFafw8RmYkoCFWCUReJ52RNWuXNzgjYvmtis6WxZEVaJZ1JtuF694GxBsX2",
  "key16": "3w2MAtmSi9mjJSgLmmBubR2yjtd6vk15ffLtjLhDWeS37xffcf9TCyDrjgDKmSd33HGP6MccYJmhAiLKNn64GJwB",
  "key17": "rv84ATNA3Pjc8DmzdSF9qRQ9Y4XAdH1Jyz2ZXirHCndj8R4Y97zSBLRZ3diZBLemjwcXid3yqejQpfoXbHCcQMc",
  "key18": "5i9xWuHuLyzgNhubkP65mFgwK6k3PDm3d1BETYSkC3PHoddhdTQrZkWzE6XyVqSem2TGT61yrD4wUqWh9Rnp5ixG",
  "key19": "5AyBjJ1qEnaZvCc4TfQuMhmxuRA9QNL6QcDihpV3p3UL7R3SftTQFgJnb6YigUvS4FoocV7Ya4NLZiJbtwhUMngs",
  "key20": "59QZ9RAaWEPcCe7NKuWShKs7mzZvXDymBNDZ1M3JGmAuqoRNMH7KqtciMC8AvKYWGBqMeDni7HTfH8oC38FXXTCM",
  "key21": "3CgF4Z8ngfMGehxMWWbgAncbxseSDcGneVkc34wrYxhVLVf9unWdLWZC8pF5hJExbPdENdxj7E1TsDqx4cBmsYc3",
  "key22": "jopo9LMm1qHdhjAc5383ztHJ8qYuPcBwWWCbSDm3EjJeoq1N5XBreZG8avFfHn1V4iAHJEm8Jwrc6nZ4GSs4eQg",
  "key23": "2Ji8ndEqaf8txBxT2VMBtxUXuMEo6AVbeUPLZZQU7dL4LCff4XbdsWwDEzzs6mm8mzNMV2UwBbFxZy5qN2i7QiLZ",
  "key24": "2v97SpuE4XJ8zZiFBQN6EocMgudCbwviXFvCdAbwE6AVfeDRDy586LRD1oHPMF6duX6PnJK9A4ioSmbbrD51zWKi",
  "key25": "49dJewXS4P552YhLgoDAzgSSoteitTKF1QwsPhjADJibcnx5qYPahjydpc275wEek6JeNcsQnAQrhH6AjpQoEQPC",
  "key26": "38Fai8H6c27crDM7LyPZd49dQSx6Awpur16iV9Kycyynn6f36ufEifNypf4wcv6CGuQR4DbZCTqCDxRHHX5nfmhj",
  "key27": "5ejDLF37xLp1vzRrWwP4FYSXWg2XFkAuTc1LzKUMWSy8QmVXT12z676LWbXnBpRgZPRrdz61TeP6HYZRPKyu1hBz",
  "key28": "3MoUUAZnmEEF4xETVfsCsKCEdoVAc3BHtrGJCmyuCrKwwtGd4HDxQULCkaNnAznZcWU8gUPzmhznMTvdoSEzuqtC",
  "key29": "yurLyLLE7eaDiKUojm2wLdyqivq8dWd8y9QEz5ng3AQ6EobU4i83wdfuAnJXshXuFkvWX129Y8xYSnbiGR5uPcE",
  "key30": "4CddXV2NBzK4Hsimk4WoGv3ARqY1qNXAy5qfEeryWpkTKUiyThRBjmi4UKpA7bp6CJDKeVo9NfBkn2cVpKkz93UM",
  "key31": "2286SXGsKs2fYP31CvfxEwD2Z6xt8rxitCTsvokoyez1vDKjzxidPcFEX9wznEgoVfe9z8KHED3T6GJVRJnVt1Cx",
  "key32": "4zJVR9g6FifnvW5sP5hzU3uwuz5zcyRc149zNBk79vchk1fo4MCigXrpmaENo38HUPuyo6L2pNUYUKRxmP87Fr4k",
  "key33": "SMxv3MfSb23LfUxyXHhuKbWS3t4WXcqogLkpgS6LgBVoHcaM6v8u9j6pxjLUdyCqiPFyJXwEBSHDft5pwyJjg72",
  "key34": "65vrGkCvjQ51GjqkUtmDb4CowqShYSUgkqt1S1hEghXTUzJT8pRWxSsxgyRAcF4t1T4gtsx2Qr1zdyM8ChUWVVv5",
  "key35": "3bU4SMLtsZiq2wxncGfKQ8YDqkuf3MW2vnRqmCFKQUN9bc9Hgr7z2zFjPnGf35J6pNvLR48TxCPxj1DBYs9M2H4k",
  "key36": "418yG248DeFRxGNoY5t2ztrVe1zMxXtVXuPEWaA8CzEU1dd4TsCRy9nJjGstZRsogkpkMtWTzq4nGkSGgn1y5ryG",
  "key37": "2kM158jXE1Ca1aE4VAvuerNp83367VnjzjRqtMhvsAEPzEiptMrAtfXqVxygoS3Kjh78CeAgJt6np2PQRJebZkB",
  "key38": "3PMBAyact9jqqN6yA2gC21hyzPe5osXs8ngqgnZPRxcrMxXTHavmbda4ahqpdVMMEXLt2H6YF47zJ1pcm5Ge5w2i",
  "key39": "3XG5SPL38nfxa1WjaKdgRfMgEYKkkvK1xJY9LZnSHWHuB7gEY11yUrgKGBQYyPmQk9bAyWeFXHcxsmfLHKQdbY65",
  "key40": "3WDSngSpFUzhWHcWX1MEonjFVuT4kYrxp6Vcb5R9D2kD5WFnpLfYJyDvoiPFb3Uh9PqBBVVd79zDXAfRNZ4cofQW",
  "key41": "e9rvL21gKhxD9qWfzu6K21GTwPUHv7eDnPaxELLRDSKMZEjWWpiJyytPE1UY8CVA6AqpnGL56UXchSBqBBWBEmM",
  "key42": "3qMMq98nXjqRL9Gie6E9c2nHXEV1B3i9GLtNKYTdVL4tyc2mPtWiA45G91tmFczWLmAKY49A6ghRPPN7E89bGvR7",
  "key43": "4y2S9FMpnG5aEUMR2dYND1u54vRfcAKaTC8mTVjyuaqVHjSUoP11GLGQZtUnNR1FnSnp7a7LBxPmTk9sXcCKKwCL",
  "key44": "4HcBMo9Jk1bdg6DPy8UxJf9LcYG3seS3RzxcezYZKAzfM32GSDgXA2MuTu5R4gBvksUZyu5g15QDKt2AGBmexADg",
  "key45": "5D3ENNWJLrLJiS7Rjkg49BCnRY6mR24yZGhf6EFM7qsZ4F6EFuT3ebRUNkubfEXaa6PKkRHd3q9Ugr7Bk5HYSano"
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
