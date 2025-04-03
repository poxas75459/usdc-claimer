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
    "5VdUe4qcSjEyomGGWQx1R4A6z2s6E1NAvJwTu314R5GCddFdKV3tVkwDXoKMRLc2MEK5HNrouUXiWc3Z2nSCr1UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1UYMD3fhG4H2xTP2GWk1JWDRmpZ6Rwgs4aMGF9n9V2eivwgwGCLonsbZZjQoNExadoa8ZtySpmSYyRiNwLudix",
  "key1": "4jw6QMDhSuGHXNZVhMuPDs42bVxCQpFsJgCVpe9DaXuCEZhqf4v2edrDS9vRSmEKHpMjgQxsigia4ynzSVaVSBN2",
  "key2": "4HAC2nt78gppaMrQx9AvTicqGCubqkMnTXNoeG9HT41CmMgaFjz8JvynxPzut5kWUpYQyHXZuKphoa1ZM9MhCHDT",
  "key3": "4dwDmCfeBDw1pzLk5Y5zFxmiVDZm5ZUdrHyoNCEHTCjEVzfsJ7CkHCivBgjogzcUCE5NJvcDmJe4DbxcDMyGLEd4",
  "key4": "396iE6KwggiVQxJjqNxpnxrgheYo8pLvu2SnZtanc5yw8Tga2R7SXkBDMybCD1w9a8amZ9dovmzLNk3DhM1PH51u",
  "key5": "3wKMQtKC8CmxmqqFR9dZJ1GEcMHKXztGJsHM7sLpZH2zzJRgQYDd2GgVffc27cbxjB9mJeYbAK2NuC2T3QPucYEx",
  "key6": "5ZxBTP56w7ec7zuwXjbWxtjsStmjHRs88FTypJfR93jd9QAKNezMe2KnGv89dGuHJUsxFnfGK6jistxhWNLeJJuu",
  "key7": "47f7ngncjqypTw2ZJ55KMKmxyGAdbdSW7A2NfYR1TeJRY63ZubzLnzq7Hb5PfytDbLDerAy8HCHBDQc1FqpdjiJu",
  "key8": "2zKohDtBFeaqNPn61j7ULcxJLazFVv4PMXABvMZBRaFFGZ6i18TZFxWtyaPDijSwqhsZZGhmhtYqgUecG9nGCCjg",
  "key9": "gPMdUTkBGkRifF8jStX4zdnAUY2Mdxyv6FC69Wxm8AHvZpxbWXUWQiKjSoYJZg7j3j8A7uiBTPnQuDBc1SGNDem",
  "key10": "2aKhTsuhfnjp6SyJdBtNA12XCyAntzgn4YAJ1u4hBQLEFMY4k8C7W8xnXKsHqf1wJsyCoPCAy7KxfBTmRXmy6pog",
  "key11": "5cqEq1LuuvC5RLfvs1LjvGViRn3RGPsxHsCLpRKoksu39z5hqq4nh3KkRLWe6U1zqr7kSPXm2W9jjmaNAq6THBja",
  "key12": "2N7HrnPUnyPeHfRz42P8qBx2PYGP4VxrEDt675JFFSiJ6FENvQjUP5fc4BK7GoJHFvhfWaN6e3381DLN5XN6yjv5",
  "key13": "4VLZW2Dyn2B5LJDDUm2kiA1L1iZTCwC2622dxKPEq2p4Aqb7c98aw6QGbcxgTdmyQhZ9zUrtGRrasrdudM3i8AZk",
  "key14": "48gfwR7Wnw9qtmCTVg2wfS4TPdSt8ag71vZNnPqs7793jimVFQfe3ivPYCP4yf26AryA95phpXEMfCXci1MXLZwP",
  "key15": "5wKtpVb7aDqgm6C3W4BvokzxUgbzrtf5PT1W3kWQFP552cdgpr3ETbUAi6g51VczCVLXRU7gy3mCzji4U7EmiaZd",
  "key16": "23pTGBQRPaE7gnvbFfEVweBajzhT8qzRgVj7nxTuCSKSd6ZThGprARra2BDUnSsAyJnyFCnagHtgqSdpZYiXqS75",
  "key17": "259nq2npSw7mC5aEZ2zYhb9N775QHXdbUrnHSs2mUqefDhhR5vXHcSNbrzdcu5R4tTtfC6Zi1YQp1gYNWjtzry2r",
  "key18": "asqj9JLWJrbuye8jrvsMDnqrM8ssQBUTLX9GM2JguQnhBECknQxE5NSsYbNDvAsemtSaQaxShSKDC8dwVxjzWGs",
  "key19": "2ahUo65dtjmHPk2SeuRKr8cUmLDpTVpPx8jN897SPyHmeeDJduqwpRaxsJQgWvEn3XBHDdqGoiVHP3f1dAavah1f",
  "key20": "Ybq83rvUxgRnZu2D1sRgzviMaudSMKyqGJ3o4GZ5nJFmmcmjzQUcex3599VLawVPZ4xRNQejQPtwkkukJmYr4JW",
  "key21": "3QG2M9vUHAAcqAMwKdK6xJoUfNbnRksQNHqKv92y5xcqutVi9Ahzmz5hP1w8GoqVF3TnnpUZUVeoCmZNhKpsEuNr",
  "key22": "2i42Xumso19FVwZp7i1m4fbiAT4opFLw3L6grcMM3GHkD8zdgLnAizudLWZfhzfdiSbv7s2VNzMEDaLhabj2DeBj",
  "key23": "kuMPYjATHey4GimCrMp6VhjhysBv4v3Vdsx6F4XPnabUHv7mRBm68V42sCFgn8zPmfSzkXqJUgtB7i6jK37txud",
  "key24": "4PmEK6aE2fAujcPKpRpmzJdrj1GxCCyr7M97yDnYYEqVKW3zj92jnxyqVzbUE9CPxAhTR9E7KW4th4J5TK3fW6YG",
  "key25": "52nECGMPZx5uJtZ2evm2HjZvLDucxTt9fKABLjUGZzEeNzdqyHoBkTP6Zfk3vAcTPgAVmXF9SHSjpi9BQd3GafK6",
  "key26": "3mEgyYDajumm3CFxtaKvRmfJZZhwwhDxWrF8BoWataeXWh1avBPgBj5WKpotqyP2crTcViZcUFhkwgrkd5CDc8mv",
  "key27": "4giDukiE79wNVRyRW8Gk9CmR8Xitn8P8xQ8izcwqe7adTSb3cHmT9vBcsfffPywocLZqQbhjAfVWpg5STVbP2iUN",
  "key28": "23P1bQUaXWdEeVCuBJVyNknZYJAJ5ckzGzrJ3fdF1fiNCYfkfucBbNAzXnFLHKySvowKCCq2BGrWk3Gnvh5spEu6",
  "key29": "2BaNzJb1U3Lip66eYPwpfqfDsZTjTBnuZYavvPVGZKBSxMqpVnoNDKFM4vVsnQCibDLpnCFRvJ3kCKppmcm1hFk",
  "key30": "5xFhtAMxSjGwKUPGSjcoEWKPLWVbpLAAzMU61YLeJVqDnLwc2dgWG9TonTfL3hTptnhGALGggFBjSweZsysVda4d",
  "key31": "5Na7JEEvNKwgTyyv1NX1KbZFDmoJr4aqqTtjxBfwvktvQZWwwCUNkzd5i4JAsXKQqMRZaStLM9UGcyNgjjBLhb76",
  "key32": "622qRCTNCQB6VspKqpEUmAzpEPwevQL3QubsDNxVbpBofZ18qNpJhoN3GjyDQp1SC6gEhACbFAvb7RC5n8Vycaqo",
  "key33": "5B5DmsRt9xhddmJQdCD76ZEBP2B4VimnVt5EpzEkg8JQjsLjCTniRFgas5w7QcYHkc2zpT4yX1ZRACZLVVwUgvnd"
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
