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
    "3ad1C5maqdvkZi6stttNtrcxwAg8stDQnZjDnF8fRudS2fh5gdNUvwvN7tj9GAjNCxNtcoJf9mqYY2z6q1DrUE4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ns1dW5gYaiMXw5Zzy8b5PKCJArzRpVxYRTCdWepa5L3y7pF1rDYjPvZEbMf6fTzZABbvKLF6rfgUiDHLJVXXaFx",
  "key1": "4gj8346XCWsQku3fGMGzcwgxqS3MMnDUnQTRc98uKUVT1TimebznCnGJSXcETsRVd1kCjdFTxGKUDaWGeEpzqHG6",
  "key2": "PtTRtD1YXxW4sut29ZVsekv1LimmkfSmnr5twEHrcwP3kDWR2SMMvjQQnqAgtqYNjQZ4t4iRLwi5pMqohmJTBzJ",
  "key3": "3qe9wPsc7dbj6EqHCQWu55Ve2VbJyTTEAJZ5qcwf8Y2Ny3TnUpf8VdgmR1FABfop8kBhPjQhqfAZBoRjQ2t1kGov",
  "key4": "4rtc5vzXeCxkjvsdaVkRDFdrMTFuwi2GRrTHCsb4WneVaZZ7pacEHTbg7mDWvJ2HFhXK6CQTL2e742wj8pUt1Mk7",
  "key5": "5U4XiN2FVcXC8ZnLQ4vtPM2YLqkn8kPVaRvgu7nVYKid9gTFhm6AmnfRi64QrEKBargwRaXQW4w8ZEToU9gmBgKG",
  "key6": "9b1kzDNeViUixXX5hrJv5wQUTfrMCg11dsvCT51pHx3if7BLVAWNa1isZoeX8t4uKFBFpu3Y5cNXgcntP3t97q6",
  "key7": "613zKWfJ3b7QNnz4BXQdJ8RuBRSa3cf3jQTb2Hm62RG6xBDY5S3Q6DmEoq6gzRenMiKStSX4t7bhPB1kHqYArukg",
  "key8": "nFtrYem2UtsmLd85aSe1o3SCZFFJUCFyQeV6RPhvKF3PFZfbFamTnMSbFR7wC8pGRGMkdmRajWHosrygWyat6Zo",
  "key9": "2zHJHqRsUjHwScBLprCJdSKc5AMVkikTiR3Y9SJ9mqAC9fTw8cB1WXzk1AfPbQNnWEYPL3U65MnNY7NqpZcq5rFz",
  "key10": "4UVMR9hSvCtikxPi8w1ep9dV1RW5Pj7UBZMGrSdTnodrxi71iP2AGe71HnvSRrZ8qxbskn5zfcuVFHBDSxMjb2Z5",
  "key11": "42pbDtHPts6h6JRRb7TMCgtSbRQ2Y3U757APcKbzgcfVDmzs7HVTVPzjmkhHvKhRddC5umJzw6Vup3x7Msgft9Wm",
  "key12": "2wwPnUY9Yjtu1pHediJyusxs41xvaFokujzL6pcSgY5cdGotNDDwcPJbquFBBzqJgertivtXC5wae6qyKgoxgxtg",
  "key13": "2ivj9maQ52ZtF353yqVpvjT4LmVkcrc3iizgy4B51tpCM2joMhR6f71BVVNwW257XnD6GtnoyxryBHpZX3GvQ5kW",
  "key14": "2nsmfgE2Jwk3MaCW4KGoVEYCyTj1nK4h3nq7171VV1kkJEcQzv5e1xwL5FyqREa3nVEw7auryZibVG6JUJSq1Uzf",
  "key15": "44PbkLUnQkmg2jmmrDyurfP2Fu2AT3R1uMcXC725kYutFq46vPxiaY7wJWnijcPkgiktfpwEezwYKRL8MaC5FC8g",
  "key16": "2p6jaKg8xW9vQmLuomJEekSy1kC3qULoL4k8nAnwxEXzzWJLEm86rnwA7C6tSiVUGDYBtyPJPVMQBgXDQps9nJ2L",
  "key17": "4Gm92QDJCUYh5BHv1ihDAy52DsG7JpcPAYApYSiEqnX2nTUWQtCnmC6NkJq7UTVvbc1zYUdDchzY58hSEANnWbmw",
  "key18": "mjcGWZm7PjWFfZ1nq2xLqcR47WHphTjk9dSKfuMwVoEm29fsLPG2pmWP8BAkiLq5GUgXbRzdGhCgSjoEv6gikFB",
  "key19": "4FUGpDVaKXG7Hvw3hoLydVJSkXZUQdseDi1gWzdqCKWaBtdwnUpV6q4NQMwhpK4h8GxyDi7ezfpvyHwdk2YNsxwt",
  "key20": "3iotdDzqFn2QT5pR4ZxvNFZH6mNPKFk1btvhKETfNmFVZdFLEwxMXdeWtfPkg4T5MmT3zwpwQEnR7xAt8ybJMx9g",
  "key21": "5aarneVP9QLhe8C2zfYLug85dSQCrJJQqrEo9zUWVhEuh82qDjKA1fgdoBj66sbpLshqs52VVioppjfoN3LYk7t4",
  "key22": "2FhYRCkeMjiTXMy2VcQkR17DMjYwu6PkmdwKmvWpK3s3sHyvp8P2LeCDKD6e58XPLa2QuMhbCXYxh7wCBNt1oq5T",
  "key23": "4vkkZkvPY5PbAoRSoivPJ7L5jLrLpzK2oSTArbMTyaFGRFk2SGPvhuy7YFoqFFbybR58fPg3E3b41mah6EYDkHdd",
  "key24": "3dLBUvtfrznG4SgrbFckr75dZ5mMtTBWX7iVZgoF5FFAB4UcvVeqQdnX2gNHAvJKG2Gzc3WHLEmWR9tN8d9EXmfF",
  "key25": "FHN5qQ3DWXf1o5Rsz9vQmvHvV6qADRfvbJtJgB9hfJhqhmCFnCT5yaDwg6mB58izdLKdChrdoCYqTdXUshc3BLQ",
  "key26": "BZsrcBqRqAyfCxhjEL3UowGa7SUPrDTeVBegywx23qHmgatgebC6vTQKu8ZB7be6NdNrw5PMZpowk3xHN6Rb332",
  "key27": "5fjBfMQzrrvkqrTVWNDPWDJ7DTf6qu8Ngt1q5svV9waF1zQdMXcyNdw5quLTWi8xZCMDuNGQSTQVsBPfhXVZzRWp",
  "key28": "64DnHpCu9Xsn3dHWpZSUVFjzxZeXE1S5LHhRnRbbXKr1kY8nt9waqQRVi1fVtHvz17T2agWyqzUUrxMNwercnKok",
  "key29": "4X2V85RUgKe9Y82H4cWXXHHj44nC6bGLoGhKiDFm3hTPhkvTrL1fRt6eU8x7DyQoYTvdkMrJBzq86WCvcRXGZ1sD",
  "key30": "3ZgSqoib5ZBDwNtgYdNjQpgqYKp3mL5ZJ5Ao4mQUpdg1nwyGcMb4U1WsL7cWjoRE4zy1zFmHnca2No4z1c3DfWTD",
  "key31": "s46t2e8qSreR89EuHmRNkunjaySVJ4EqkGW3ZgZACnEBoBkt5F3W9cxgsoxasVrFukuyrP27LBYKixEi14bnvfu",
  "key32": "3DbFWyNpMk7A2EojUEyJY5u3Vy9XF89NuUXZVrFfxN8uaRhtVQj61Bg5B7bpMDtwiKnwSySLtTGerQRZ437U5WFk"
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
