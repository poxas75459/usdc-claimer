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
    "48isrdQ59rg1XPFEanvqQg5S8zazRSgmFmonDPqy3z3jLAeRL1qrpW8vEabUq3zfmRmUqbZy4kkPXs9BCJnduwXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDcHEuyD422PrM3xMQNczLhS6E9pCe3LDNdgfLaDEj5vumGBPTaMzuzcr8DBPzCpBqBydVdjcNaY72r21RXRvd4",
  "key1": "2CM8snGcfJ3VsmnbXJhLoGUUecF4NThaXUVdhv5WXLCKYkVZuayMpPpkmN73jN7T78cAxJjmHHaVNhg2njttrrnt",
  "key2": "dSqXXKmeSYN2hdQr8rSFVAjQcm7MxXMqZnXpeu9NU5Tv33nDdVeHuNmHQ8N9qkEm6qHhqsEY3cfuVCZKHmz8vHu",
  "key3": "2ARDQfXmszuJiwvNdNrbyBMwF4Y5bBFjfMMpfVK7EV3dwciekif7VVnANBbgaho7oUTjN7s3ST2QwxqwYdC5fXZe",
  "key4": "2D2PNABHHgsoZPh5o94ThSLPKxRZjaNGz1fVPxNFKTVUbE9ocEjwxkwVrkGBxSWdRGpAQHLKbspsxdN8tMbkkqxn",
  "key5": "4Mb3uVv1kYRWpJpLyPMBeH6WkQhRwdxVmJyiGNiXwmpqVvtj4Vecrb9gsbP3QADWBX5Q3Mc9W5pBsP1CAw6VPh5f",
  "key6": "5K3aAp6DmBDC4GJJY3x9WACTr1kiFXnkghJRRVVbWtsdE4qXsDaBgGdpibcqyGb3n3LwRgzmo5MNLVDsAumwRdN7",
  "key7": "zX2HxiBn9p1TsCXqygFqpSBJCXbZx8DQ9a3kvyVS4ctzeCCJLbyZmMw1p7y8BeEG37FugckggCgLBywPBXrdqM3",
  "key8": "3xdsUmv8f84M8dh93m45K926dt68aEv2RjsSpKzRBfxDaRRVn7QXbijj53xPAzDRppfiW63VBwwPC7WbJ29aNRUc",
  "key9": "3EWaij1APePPfvDi83NQRveJpts7tGZrYTu7fCxHrs9q68MgNLXWx4biq4WmjWoepKVEo1n4gp5781ey6DXLWBWJ",
  "key10": "5SfaHGbh3utEdH9UGGYpb2B1neUpKzBywkvhNTZK5f66P7Ck5KfCwCvRMmsv2wdx2nxrJbTZZu4AsTVQg2xwV61",
  "key11": "5AqwyGk5pS699J6RN4TSqH1rYhpyanv9SbgzQqrUpHKU6xMgXgtQBKeDDQwLEAooyCKMUCaXmQpvikEzn4uAkw8q",
  "key12": "2Ritc3EBdC121pYJztFgTNzyt2ktfd6KTKUq4LSrSjsdBM96Hu5Ji3q2Rd2SFwZvrgQSzM4uKMLFFAgVQkvDJft",
  "key13": "5gkAATxEcKprwGZAPPVh15eBaRjsiXKfvGvb9gDM5nnFr87F3duSq44jzTVTAL2WVDbVJGzRLSGT8frC2RgysSbp",
  "key14": "2c9WY2bkVtvKAiBuojDUYLH9LG2yAqm9JtSmJ4ShNTHBMKcJgVf9pSgLx8wYKtK9gBSTv1NwRDM2HMc6vevmteAJ",
  "key15": "6iHHU6s7c36YFeESkLrkkVppa4gVXnF43oJ7VchcVcmSzwKGLJUnJgGwaLZD84Qzae7r8zGHmpeAjeWyL2gZpop",
  "key16": "4yeMprsVsT3zw3NJu1S3hVdiDkySzXsrrHYf1hbCqZfjjjdzVnKP3A3gHo8W965uqYyN3a7dDY7QfSZ4ALtxxHLJ",
  "key17": "2ovN8qyJEFwcP5XMvHWHB8RFYZ7HB5jUiqJ1ByMXo1yCd6vvXrgdXiUDkFNk6FzAz4vCsSTX68ZLYgNnQ6DRJMaP",
  "key18": "2oQqeCV1MWoTuTacK8x8vt8ui9wPJ77ri1hTbwpxz5JLVd2Krt6DSM7icm1mpZumojwtYMa376QUXg6UMRUJyGir",
  "key19": "Q8sqSYztaEiMjWopU6HBy8xbXCitbJo2EjnkydVpnT2DNqJFtzScJbNmrhAuMy8FaFP6jeDV75FKC2h32LU1hXK",
  "key20": "3n7RYS1dPAT6LyxZgPJQ9qo6aTTwzUbqnEdRaJQMiv4kWZ2V4ABwWih2oipWmEzwxZxmb7E7Ndzus1sorHSVh5DW",
  "key21": "GsSvrAc19STHo91CK3PE19myBQDhKXpENYMnt5K2jvBbpPkZr45EgHqRwZsHfoNuUFaAzSBfAaeSLyBkPSSwx4w",
  "key22": "3udh2LczfKBAZ7KFXLJjNQgdp3jPjxT56J1DjA9PAUQaGhNUJuz9QkmVw5rkgUe9omncVNgBPM4uRpuUQwJZv1Xr",
  "key23": "4qz19BM4xzWSztt6TZkygPvpENjsBPKBE7dfw5XJTYAxwYkBo8y8MnyjYASQGmKFSvinkK2nd81V3myPCDoMnqzk",
  "key24": "5NK6kGLWPzV6qyBsJJ3v82agAT8zGZPszP3Z26H2UaXTT93PqxJsJgUUdXUkZn9abGoLigE2h5eEfqLanfAG6kV2"
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
