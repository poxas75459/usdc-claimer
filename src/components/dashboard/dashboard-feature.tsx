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
    "4BJwjSdrnBeUw8apx3SyCmKAnxF8Bc3VgUzPbzN7MZFX3niZCkmXs438JNggmLcnUJhvo21kBDEgJ3mbYGrCqYYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53B7PzTz69RHSLKN4meGhma7yi7bB4m6aXzjXqB24XyTEoy6643kexA96AcQtJ7qf2rLEQ13KW8EghLFahNzA7rJ",
  "key1": "H9FBtT8EUsZGtKwnkMPoTE8Gt1DtQzcgYsikttCexmYFMEMEvm4UyiR14C3P8mE37a1p44reaijpVkdRpFCG6Pv",
  "key2": "4NQUjGPTLteUt7bbLTMHjcLmHQHG1CBv5UhyWX1Nphwd6eTmub6ifoVxth9xjboqDymC5mHZ6dcL3GswYaaWfSJm",
  "key3": "32YERoWkvuAvhrfL99aAxJknXHRcVFeji7dS5zBmXcY9TYNbZ6GoWhkBt3Ere19cKygr8CDeyUoyaBGXZSVxNRSM",
  "key4": "4b46WKnxM7ziHYSAV5MLg3rPiUE3TLmoSP14v4BNrDWLECM6uar2sRtHCstiyVK3d4vi9gzMusPsHRz5MaNZoeXn",
  "key5": "4kF2twq1cchNL6PHXxhS8ZCp8huEc7sQZR9VZAj9XcsTtbpJn53kyj4PhM6egZp8XEfazHR1rz5XN62m7hFUB5LC",
  "key6": "5ksPc6a686xZwmqiFBKbZqYFSkULVuXp95CN9rQkpgh3b4kWVb1dQDxDW3R7ZNir7Zx8GVFU7APjZyFry7dY2xhP",
  "key7": "2fRNssFegVFNnuxxCqQZqna8UDjWVc2kADpfrgHX4APBZcCkYTBmrCuoVRCyJwrxXT7QausnE8bSrEkvoCPfpAp4",
  "key8": "3Ba7FVjs81qQ242LA4R11PwcCS8n7vmQ6BFr2vWTx6Wx9ggqnCmpAjprX7oBUV2ELqQWPP2aNv91UUDgTnztp3eZ",
  "key9": "aZnDxvCCVSgo8KQwV2xgSDBp9kt48hmns1hG4KN1k5M7eUvLqpN1qCBJ2UZsSg9PBpR1jWze5FCfSzSuTHoARKU",
  "key10": "21RgBBjwvCxEAN1F1xMgFeES1dFrf78rgDFK8B8ofQoV4PardYZ3JBqZ1P1icxnSw5gSmVYANZybqRSijrdnvAJA",
  "key11": "5jiYXvZ3kiv2jGxVWfnBX94ZEztAL8cwMeYFY23YbZSDqLFHaH8vHFvDGU8TqJ7Qbio9FwMbT7pTXTU9GGnGEjTP",
  "key12": "2dvFBDYFrWJr5MVaS3b2mgD3UrEpihfLChGUP8NEcLiYvbqWLUEuMwJtTq1Rw9NPC4hUystsFCYELC9Dx5zYQSix",
  "key13": "24N42rH21C6q8H8vro8vS86Ussj6Z1vRKsFNVk64NFgCZvpzDSykLUHVc3p15DgAyn2eiX5mJqpoxfgC9Y3froHD",
  "key14": "3vBhX73KHLxaxbfbpEiY67BX3RAc8ShAm44SqjhQqAZyF9V1pdgeSapFdyT9Nm2AU9FBdCTmtoe5TH5WNqybfAMa",
  "key15": "dbmZMh2jzjv8W8diuTb9uJr216byTVJJCF8BRwL2pGDhn8my1JFgwmkz9z21xufkQSzFdmbZvGSRXxN6nJZUrmx",
  "key16": "3Dk1rPdLXiTbPbKMzQf6nDdVNZV2EbDfbY5BsCPPJcm3uLrzxGaH7uAVEuSJZQZRUCzaEm8CZ2ya49ELhDDrKJ2T",
  "key17": "4dK5CKz24YbC7EMbkuEV67xhfS6QSMCm5JxiQRvdcGvZDfqLksNCxpK27mGwsYH1St8sZK32qi4Ppy2nY68koEML",
  "key18": "5qadHASmDB2RFjnWFNqQajDgQuadwmSGFJppR7H3Gj4j9vaNCuswbW8RWZxAiD21pSUuypLWSBBoKQbhnckYu4r5",
  "key19": "5XxMQHA1aC2jU5dqtRUG6zXfaxn238sVdfZyGSnxdDdU981mTdgyz7iJ5fEcPxE4Pgzm9aFcJts8CHkmUiERokDG",
  "key20": "3hHUCwt2WbbCZQtKPJXVavbwKWpTLEXst1fbqUCuEGRrM4WaZLU8xj491EXCyuPugSSuaBMmMTUPVrxtv1ooj9Nb",
  "key21": "4RpRRCjUfKpn65QvjJnC596pGbm8T7DyqqzJWiDHysdCr3XcZpYrVy6ofKCc8jEokAVGKwpvAFeFR6yHzJMspEUn",
  "key22": "2vMj2CK4g72JhptH4ynyBUw6XEHQmuz8J6vPKvBychWLdVXWDXSf9AUUdC9STv5tuxFvVfH7gGdiujmzyep9nFXA",
  "key23": "4BsDSBRGUtU7FTxkEtK7S4vcYCCB4GgjxZ3EnrSPXpB1DE6oQm9oXL2CCGKzXroQQBqdt2pZDjicJqG4MVhDjXvs",
  "key24": "3NhFZCEhV7CeD26tWiP6GnunrvWo9jWV1Pobw6QVHkr5NfhA78VPiLeX5WQeE2hW4pVdjKqAhqB6pHWHdtquxuDe",
  "key25": "2oYSWYhM465T4TfhvyFJs79yeptEiDmV2aurHqDHHe8wqnVPGkoDrPDpGvMDEVJ51WBGuWQGE8tBCbYHyZoxx1AV",
  "key26": "3pWnf8cNzTNHEd5TjuZ3iQghXFLk1ETfUNcenSF5hnSp4REMuDkePBxfCYw4R1B826VXiWNP1BfbzTkibz38VGde"
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
