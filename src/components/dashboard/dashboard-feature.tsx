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
    "5c4DzpJHrj8BKAPwLtiA5t2XGaHroA5DLk8WQxJ77m14Jo9qgChaxVwvWhvYbzSbVAqayakAkNr3Wvik4gZZMmFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVTqwYFPZB1B8rY5HGeaTQjH22AbV4mz5AETP12k7C6JUzoZKrs8SfaELQeV6oY3G3dTDQiKjLmd5MFZe4rJYB9",
  "key1": "tqSw9bJskhD74L2g8ddfCSppBzHfkzT79yKFiSnToDEHo8rkNez7EwwcTM6Xz2xUkeDuwiWwXq2GUu1orELf6yk",
  "key2": "2QHnwz8aUGaYDiCQSaZ3dvm7NRxPnVRuZEg6mC1dZcToJ7gpX1VJEdQrStUWsR466gGwR1iLPErAo2ix759Vs3fY",
  "key3": "3GHmakyt7e4SaPS33HLYPES1Gv4KX86bFjApBpk8hGtV9XJC7FvdwZ9yWRvchtVQUPnh3pMtRMaQ2KgYGDpRuXKk",
  "key4": "2ogr813sZN6dWpaB8SXZWUyHVkoK6d5ZYWhBbCUzEqCFHGEjxhFiuh6HmusWEXmXAdd2KjhmAPdY3mE4Q6xTG9VC",
  "key5": "48vpDSAaVtuRV7oxxomyyCLAgjYUK1kJ1EVES2jz1eUNVsCQEZ2yPeh9BdEs7uhcDoz4mc7X1ELcrd6wbd9QHAw2",
  "key6": "hm8NMt4o7s3pYF3vdqKBo7aYWL3MQGMxA5SVZhVteuAMKwcpUNijr5CpqKbJ7vjBZGP9NcryL4tMVXMymYF88bo",
  "key7": "4tYfar8qh9MB4XNMSPbx7UeWrHt2U3wV6JbNQfqmbZ64EwJJ3qs3FJAwMMRC1DCBHg5b2nJYPuGzBw8sDHoN7zZ4",
  "key8": "3WtdQsatRKu4qMGp6Yi5nzm3PsaiVQ8EqE4vHAGMDPxpFNfQTWge68WEPBhc2oZyqFnJFNkdMHpqmCh5qx5gpYyq",
  "key9": "26x2wJPGvKTWcmZ2cG7ivHRftBQLzedPL8hXMNFyXM4nybyF7AZUqw4FxnMEfCTRQ6B3YMHD38FR9u2UmiUF2bY4",
  "key10": "5JvKUbDHpKGmg4nyw2yP4YtCpYhpVhn8HWaszegyJHVS299KyBkKindig3N3bfqNgTxNuLsQ6wGxLnYKTY6bCRGD",
  "key11": "drAcX9JvUAi57voCYh1JkweUMEw78x5wvVMZDGMeNGx4q8DtT3wTZgfKuSXsQk7iMTiirZd7EArgQGpefP75abw",
  "key12": "TTaTdGX7NvgfqQdXe6yt5GBP49bLUXzLtfLpAiTE5W8ChCthZvLdT2ipQsyXieDhsXPAPRWZyhyQwAERdxF3vSM",
  "key13": "SMwzosZdLTpSjzgoGJ2QzdVBZQ1Kj5PGUbACS4VxU833XhQyhTTn1zufLhAQfHFp4jHcoLZbNyMsTCiSVG2oJwy",
  "key14": "UMvo5uNB8yae1vQENqbYT5bn9HaZh2hEi6kcLKUVZPN9YWJ8vUuyhB1KRXbbY6bMbAFhjMgRBnmdVWDHZX15XvZ",
  "key15": "5KiZ9zQbNJJoCynCJu2S8cjpRdL7GsZdDL3Do6FrWmYjekFwiUDw8RD3Ssu1aMDZ3poCSuA5iPoLH8ycjYtw14Nm",
  "key16": "5qTMHQSKyWDE4fhgKpLB484ZVxpg3U61zumx1KvQ8xeKNaf9sMoVErdf6k7VRh3APCDavWaLBWvgB6cWuUs5StsR",
  "key17": "5sruUTb7Lz3WwEwRMvxDpAknct7KuSBuVTYtCmNCbS2GjKQzhq21QY1oXso1ULVEN23uLfAuBSqfi4YspYbmQJWx",
  "key18": "5ZyEvuCHeiWtgcciXh4LBpYvSvkzx2Tst94ikKxTTfnDEjrUtFyrqqkGtyTaAy1MjiD5AGmVDWZ2TauqUfPeKPC1",
  "key19": "4HB1F8Euq7oYbYArd7Z4FKPk3HxeMVwWSuYuMtJqAkCCkcJdf4DXmCooMPiGTG82PqRj9K6tzvWom2ac8LLUu9MS",
  "key20": "wiKWQPrek2TjCfPUmMCcxB95qHsKMngvNBA92AKRGo8GCwJTkht5E64bNxSnoK46dxQAYB6325rs7nW1cJ4yu2Y",
  "key21": "DmoY9TxkvDAcaesfRCJaAUgsxzbnLBd7itSJv92Kp2fo7ugkW8Ah7P3rvKU2v6SXUjVwEW4DGchc6wMsSD8b24J",
  "key22": "5p32GKYPLaQXjq15F7GmZ7y5bZkjmNKDnGu5QdTCpqNKH8NhnXTunWMqrZCJ8btLWi2WNjNmVTPr7Af6UAw2ipfi",
  "key23": "2uYJKD3DaF8QS2VgJVQdbHTXiZrksv6z5QH94tKKCoPm5ugpCJsxLFSPMJFMJubefZz74nkNUjeSASCmJFeHwm7G",
  "key24": "9PPHe3XQ53bVPJRfXAKKVxGjee8DfR9ctaMcqV3pFQ73tHq8dH2AWhPZbJhAAomYDJwJ3hzQfFfdRWBdjYbGV6P",
  "key25": "5HiHimnoTJbmNgyriCn2yG5DLP5JEpZc3W4fJG9U1nFcH9MprUoUowUrTC6q9ukDSdWuxF76TfNkSXrk6NCX6mgA",
  "key26": "3D1Nk2wapPeYYQ79cBQdY1WK8oThMpiUvQnNxr6Si2ivxQrszMiA2LGUo4Qd5hW99BFotHiDBjpX6Fsa2uzNLiDB"
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
