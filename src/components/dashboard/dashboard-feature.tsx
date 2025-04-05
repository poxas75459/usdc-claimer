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
    "2pK8H1LGMzEYbj6jNuLpDtXXQcHQ5h5S3WhCkMuECpBwtcrxftSgmEcZX2BkigRaqbxC3iGrBZjXE7vJa8oANoQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BRaDcfrLGYTY5nFC9HBcrgeWnJgfav8F1TZR3HZUnXwZosaiVuBBRo9PjuDYR5yg7HocDCRZi51gbmfDe2HoSVc",
  "key1": "4RV2LMfD6Bk5bbipwxZ13CDCkC6CfePtrxjQbuM96KTGAMxjcFh3aLdxmHLuDaHMCMtULiRa1UBu8gDUcbm3Hv2k",
  "key2": "5PWmy7k1TMrCaSwxGeu1b539mqYQvL4xVnX7uicZCkZS3FxVcdwv8sNfK6M8CD8MLh5H4BpxAGLRWyTXPExVriyN",
  "key3": "4Y7P49FmaUbhzK8EhyB2T8jX34xq1NUsZL68bNQGZJEq3XThG5iAHAPeQMSxfPBmNzteMz98St7AKQHWss32BYnf",
  "key4": "Jpeoag5nedoKSnBDBCmpyBzgyzRyyrEXhSiLDyqJabApJciHg3WXJZNgVAWmZPj1pyaZdmbY9q2za8bMvwscX4E",
  "key5": "41g1G9bDAttLJxargef1Vh4svpQxRbCuuLk3ZAr9PcWNtkrrebmPgxYXP3NFSoAePBPiMZcgsUMCko2B6KaTiYV9",
  "key6": "5BhCpGiu97Rb6EC8Df6zVe88nktVoLvM5fgzCBT6hdjiXQQrhoGGN8BQfz2qhkB6VDxt7cNTFUcdQqgYHDw8GUKh",
  "key7": "4rm1ju7vRiKGA5ywqC6CcLeQqV2Nz29NzgGNLFu7iFGJpK7TDG9hTtNCx35M2HRa4T7tm5uf65BijhBXFxz4fYhJ",
  "key8": "2CbEisxUx2bU2SB426KbknPWSEavDDLVxuXcr1E7EvtS3efYZptmhV4GLryXeBqP314brKCn6yhTbBo3A6Hd7VAZ",
  "key9": "zcmDPhYphG4fd6nxxLpiECZSVaK7NEdiFgxAaS1Fc8Kc7T9uUVLD9KqKgsTeA9ue7NMPzrkrkqsNjFLCnnYtKLM",
  "key10": "2kHxaFDGrZ7RDPDtS8euFP1eSW6HJA7ZvBEhZbhmcFSjjLqQhj8RSjpJ9BsaCfoGodnKyUCDvp4muFivpXGVsRuU",
  "key11": "49hvzGRAQaJWDgHHtgXsaCruNw1jhWcPKueBHjR7bZ57U16NTaEEea1BjwQwfmPKog7pLt947dv6ioZbguUn6mWf",
  "key12": "4Xr6GjfoBW4yU8tCxTBgzjTcWQW9oqvT4DmsRmpYptPntUYiUnBwCTTXwyLqwSfGBaJzaMP6oJxbjyFr6DN77qD5",
  "key13": "duj8u1cHEKztYAeACcyF7EtLCZtw6mtqxoDxqepQHRhAuHs9ZaXLrYeMabSFgAKu7oASfEMeuJiY41uXXFJvHUn",
  "key14": "5C3jqfWzQdamvijxxDsDeJ3nREhc5gph8BGeHKfB2JjuNDHqpdvmQ5REctLsPsSpEy7n2BT9ojAJJED5qAB8hE7h",
  "key15": "5zxTehuiALNgZRrZaiA1BZEQVhMLShoDALCvC8KRVnS3wWY9kpisxZEKdsfR6JxQahjivu5YBi1ZRZGqZKFu8Lft",
  "key16": "5QRZKL54g7EcHrcUUNVzXWEzqVjKCdG9veu3JNCyABUdEe6CrJqD1UL1szWHAgFeq6M7io7FW45EGXYbMsr6muSc",
  "key17": "2BrULx4SSCNnYGPVJS7NHtu7nesrXy84U3y5KMfxoeNvn14S3K1GfTCgXyT4yhmenDr6XmVUWCxRqBbFKmraQSyC",
  "key18": "2kF1o8JXoDJT9Xfo8L32dMmnKVr8bkuCYA9SwieAEyCyMq5rNZPVARb6bGD6YdSDzDagNZLTRHLUp5KTHHREBcmG",
  "key19": "3VftgTs1iaFe3Jm72oGoh94nhUtgBNHaEGtgcCUMaXN8cvnXyYZubVZ2yGVAMfaWuicYeXaZXAUTok4Ezb6m5rkt",
  "key20": "3HD2sSVp9mNeRrSA6uduLWp8633j7ytx4FMFAVbfc4bUucwJnE6bxHvgWdH8D5eN1cWugTdzQEz6CmGWngB8JQ9G",
  "key21": "2rcdnNUXdLmxQe4rjCSt5xGSDnBGF5DqWFuDQZE49jZn1eX23eBhn6USt6W7oYvESadEzETLse1KVnaj6LWqW2HS",
  "key22": "2nqKbg9ApuRozGvQTb7RNS2bJoW6zetCdBY9S1kvKV5Dwq9bu5qmNs2MCCd6bE2rCJCtmCqVcy5db3fRaHDosumv",
  "key23": "dsXfdLQ3kPAbhtAPXmG5xGnV5wmDMuGixjzHnCqnDHvVyDjMZFDRAJ6rh7XwDuMCQ6z7zBAWbcBBjPkYKTQXbEv",
  "key24": "523Nc1tV1Md8Y1cLwSX19dQp5qee8nk6CuPSkpCWjz5w3v8x5iaCDHpi9nXLAd8HJbXjGLP6L1pqD9CAto38Y9pz",
  "key25": "3p9heBEBH2B1t5uurfUkAgEQsNMsHgbSL9y1N1GZ2LdztSAPfzMtaibiixr3MbsgWG1rgVyumqUAqJ5oMVuc8SG5",
  "key26": "4NnbjMjUfeyzGdvZBqsriWDfVQokPJQ89Qg7YdPSFaYYgQVifUpJX3Eb9PWW1CfvJz8nVymEAZ1qts8KMWFU4Yk8",
  "key27": "4nxfu24GG84Ts3FokZCNHWzvAYYFnhZsCCPKndKFFft5T3Ch7tUyYcspr7dLht3MiUyg3maJC3EKYBTbGGWmDmkN",
  "key28": "2DewhyGREnSq9A8uMFQpdJqyWsBQJe5tbABWH2kQsN2AVGhPZvtHDkyotd8ccNeUxd4VxxpVTuxwJkuo3gLYECRn",
  "key29": "a2fHapo1SSv9LRXgEe9LSQQYAn82rndD2fxKATFYXf2whgAQ99sGjgFCEbeiupebEWKGJ62Qybq8xNHwZyMRs16",
  "key30": "hCVEDT5i7zS7Q1JP9NgnYCHsuH3HnSksbP1u4wWqPF1mAYJ365M6wq2oqD9GpnAZG4daEBhJdFLhXfMzbpabDa2",
  "key31": "4pXwwwrHUjCUNc5etdAq6vbLTgCQhSNDKyrTSi8CFXiuAYVmVS4zRDa4SgJSzGHtL4vDRYAqQ51BqZ4KQge5m3ij",
  "key32": "49txnuVdEEryPVuqa521hLa9ui4dn1HTBYebHBhEpzGz214vvvSnp26xxRpoBygFudL8K1mrBQ8x1uLvLbqnF14m"
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
