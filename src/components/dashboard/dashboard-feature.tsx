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
    "3Vou3SHzeoJNbHj4uBCj8Tr9WPpa2tbgKhTEWeGaqb2523izAD1s8kCY8rPJ5q9wVpb8NXWv6ASRXX26tt4feb4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654V3S2wv4g9RLjP6rhgAPNwMGAtqwodCZZ58i8jWCsB2KC4FVYYWkix4Wu5MXx7aPdkSDWTe4P4v6DbPZh1tcKk",
  "key1": "XE8hgoibVemVAzNnLukA9jNnCG4FsTtX6Wp3AeS3M3Zz9RTYzvoFACD383SHwzRTzWK251xvaNzAMz1eECjM4u4",
  "key2": "5HAsLto4BQagZfi4YJPjA6dJrqppwXC7pgx7hL5jRaeDqRWJZzUBpMyZ6aTJvrchA9ciqt8bKdQAzZ85eAgNbifd",
  "key3": "4aMsYSnKEyM9hnAyih1kPR2ys8G49Er97H9DLtzMyEhBAJo9F9dUhVVBh2XjL6WNbayBuGLNGLZ9xdEZzx1r3Fom",
  "key4": "CEczVe6L4RmiLJmUyYsFiC9hBaiDPtcUx33TVqJ2F5bhNWGvbjo6gwM9Xakd13PLqSE3Hr6VsNHiPeVpZmLCrmq",
  "key5": "aFPbAXzD8mqh4wspYT8MkSGvchBQJyJ4mJ1hRXRS1585PCeZfPV5teZwFtGfzjgH82cWxSjgHnwUDmKdgGkbYUj",
  "key6": "2asscN8yVXP9xF2pNChng7trphVVH5t2Q5uPgqmoetgz9gcNWa6sUWfSKUJY4iW9Ab3jSqCCExT28s3GftU7udn2",
  "key7": "5ecbPnxvBQtwRXjznka1qnBeA9QG4ndbFWJ7gdWgg1iz3X16tTJELZXGEks6CAzHLi7avk57oN12NL8FE85WwTut",
  "key8": "4G8GKXXsRmiSbQBEqu3xcjtXQv5YAtcXqFZvRrGgpNeQ6NY2pPEpB8nAzB9EUPyNm2PdtGqjy5knz6G3XgmRQivE",
  "key9": "5uWc46d9USXwCgdtfjismiumbPSDLq39bjHT1K5NspajnmtGEkaq5iPQfCmkdXd2eAQdrmWmP8uQF8mAEcCwGyFQ",
  "key10": "5QKkyKH1K2EBhbdsMpbukkZwpLDbJ6Qg9Nh5d8W8NAdB3zJvNee4jBcCCbUz2sTT46N183kfYXZaSPWxcrW5Wh3R",
  "key11": "4XsSzznjNrNaacjgdakyDzNarqpby81DQ1HwVTbcowkYTTDQn65PxAR6e5Ke8qDAjd9WCuYY4qehwNAP29toXCNA",
  "key12": "5UZjkUTTahaUpPcuy4ArACgzWZG2z8TdqZz5u93zLA9X7eC1o5jV7vUdE3f7RxD4xG6PfrUTwJiVCA748v94ntPU",
  "key13": "64Jqcda9cwEYe6EUW24yHaZJSCCFmup4qiVWdARE2B3CyjKEejP7fMDtAtbBm5JgTisaMthGSCpo7yJTUYsHaXoS",
  "key14": "28QF8VaLuQhEDyFqBQ5Vfh1vmcWY4uWzfo2yMVxNkp5o254ekduFmwhGQ3LGFz2wnzW7M2uDuHR4LQsW7uj58yhy",
  "key15": "5Xo2hbCDRMH57Wqpb4mPcFfmr9mjFmXnhdAovvocukio8C69SBXeQHXUhGxXurXdT38qoAgVcmbMDRYgRAUUxa8i",
  "key16": "2sSAhy2zt4aN1vUjgCCyZMmp46ibPArEwWJ1BpDePM5sVipAPzLvDoDasD3MGrHq2RG3TjY529c3Z5WfHZ7sTJCK",
  "key17": "4dLMPtDnzbpXwYnz1rusKtV711P5fK3CdZX1dmGFGi9aAFbbuMLwP1icHhsECEe6HU1HUG79XEn81awtY3h3LrE7",
  "key18": "4Fo2SHA7N7ZfkW71JTu1izCfKUJmn5pNQ4QrxqSLU5dXSPe6Gvh2bW6Hp3shq9EuF3EQin5nFoZFk8QorkFg9kX4",
  "key19": "418rnurGanSz4x3z2mg7kDkfcVekAn7cC25AU7MC6UVDTpNQNqsTWRcK1fM1dZZxQd2Epy1WrZLx5zugDHeemczj",
  "key20": "ELMfFQS9xopYzsBGG4mDFp7746iZqzWDdDF5THSQqogJY9f1KJXM6HSkUxrLXvY7mj46CghpHwfwM13ds9u3gkP",
  "key21": "j2SPVBGiGRsiVVVLRRWg6h5tW8tzSAXqb187vAUgNfHmAMyk1UGgJXQe8Moc11TTSKFyGnWv39WwjfcCdiR4SmT",
  "key22": "4urjJBdfLvkF5afwoJh2qjiQcqykW8W4St9r7Ba1vDJBtNuMervs6BGD2GTSQCqDeap8KC2LGnvU4SdrWjs76fH4",
  "key23": "AU1mA7debRgdRYMCskKTpo4ce3PjB3rRrJRGFNTJken1pySoZGfew3D6x3AUpZ2XVncke9x4yLHqxCP9KxSadK1",
  "key24": "4n8KyXcir2zVDGXDpQLM4tXPuWZFKRqEMTvA56MyBXSGUoky3iZGXVS3bSPmXNrZ1VMkYT5cDYHgjGTR22x8TrCD",
  "key25": "xci66SLmAtuJ8aGV9BTMHwbpp1HWVa7ZWqCgakRdfj23VW35ie6ckyddHVrmWhbVyNZYbEMSCGrLUPvgco8rvKR",
  "key26": "QvPMxDyB3RR3KuahSprgAMKmhkVPXeQN9mPkpG4nMpH327ArrXR3ZjQ5JF4XC1rVVEXF1zDQH1QRBmEdaz9mhik",
  "key27": "5JTbzyk7F4XvKHJBDjevUdDy6595jCQmcX6eHJZkoGSJcYCaUbWwKhism8M59SApBegbWZURPLPZHgDVy1ACoJE6",
  "key28": "3YwJPyzsrJLwtcskZXAUHaaxHofoDBuJ3fCnZFLVvem4KGAT3hUuHf8jsBZaDgwg9fNjFZwM6ckD9eWqE9XWhq96",
  "key29": "3LdLbbah4BsQX6vKz1oh4fP23GZKqqrFaLy9ptWbc4yWDWFQUhff4X4f9Z1bRZC8bdgv44zNJG5MV8QckeDYyRkx",
  "key30": "5jh6dtMwJ29WNY8b3tyDwe71hhjdoboZxhrCMm6J3iMThHWNwHjeEsXN8XPtFbHScWWzLoyRyAJhaDxup38FFfMu",
  "key31": "41qtKB5pq47j89dDQjMvECzzKL5Vuwcde5m2isNR5UhPUVbPMMaefdqasj5JCCPpu5o19CBemnVn15PivM3yXySt",
  "key32": "4Hc35EWD6jdEM2KFri1Ari6HTs4dcMmKARPPcz6mMwg9xCHqCdXP6YYMXKq5TE9DNXi2zomRHL2gTEPFxQmhK8nA"
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
