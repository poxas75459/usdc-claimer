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
    "7L32kEa4qkboCmdc1XHgMYx6Rzaex9Skp95THu2aoEHmJ4bjUykrU5i49fdmyoKrpgaMyPSZZdm2F73o6ifjYWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o19k8kkxdx1MK657CiYmN4cxD7aHChf2CmerBMFysEp3vLi3wvYXQVFimWYSrcnA4bpegH5YZrTNF9Bz8P7j62n",
  "key1": "2s5cRdmJyJBoq7XMjENjGtmU6L76DZ8RCKgieSC2uAgUM5bhsFSRqj4ddktw7e8pkggNEHfG3Ea9uj5Y8gZK3gaJ",
  "key2": "36vkLKATWiCSDhbJN464JB5mu2T7nyJP7nngQs7dAyLKVDs9XUkPMoK1wUgKWE7SSLt7Vqj55mTH3C62wd4EWx5j",
  "key3": "5k6rLje9MmJNL4gUWFkvFLTgeXgUmV9bAzFZfvqV7VZHDeWKUasdT1sHJoepo4atGp9b551jqukzaJY6uZapd8js",
  "key4": "inVP5vALF6B1BNoK7W6Fjq4ZjZozDP2aJPgvRtfRRTGse6s33T7pjLhhYFsV3APqDMkczCfBNSP7cM5fxJwBH4p",
  "key5": "53KuMkBqwer7LmhDbf3Fc5UQi8Lpa3iMiniDwMtARmLKm9jfTGhboXEvxYQD4d8ss9YC2wXRMH2QcLAqLjN92Se9",
  "key6": "3C3UFtLfmozX8T4cbLSR9nPvp3JbbgCZaQeEbjNaZkESJ8nGp2vYWeDE47MkSfV1NmFmArSy4oA1boxQ1JuW8EFo",
  "key7": "3GBKdt4sPUWLo7KdVssauGunickyGAC5ZCj1kW6XCTMgbptnpm3xSCwULmiUq3m4AE1gveom1DYCDTfzymwTDT2i",
  "key8": "geTKeJdcP3xBXCo2SjmwXvZrjeEBSdEWRJynf9ZH1p9sGRWMFnXhW3nYyBU5wx1aoMM8g1Ss7SqUiFVNuCxzqYR",
  "key9": "4GLcCiJxiHEDo5Gu7S1xuBs9KrKgbr8ZzF98EuYkzmEJXVhksCWhtD8CUXbssivFXrDqCUXQdeMpDzsDR6S2Td4X",
  "key10": "yewG7ovQdhNrjNciaLuvZ8V1Uz6zEQjNnEQUSEBiTNdrD15mFvr89DQ3tMLPbZsagQcXaEdtX7n4BUvdZHQSxMc",
  "key11": "5LTGFrcEQKcCNd6BnLS5C75z2B67v4WqzZLUwfXC5EGxbSKEUZXRjCp4qnQdRDXPSp9ai8V31C3t86xQwDC93nfc",
  "key12": "2AQqAPRiDYFuEcQUr2YjwWmc2sCbC7iRnneHq3eX86hCo5wLD4S1R6sEDbd8Lf4kBBi4dcie4NYrAm1eocSPRsyy",
  "key13": "dR3ebugSU4ce4RqgwuHvWerbNr73kYiMb9KYcEyzWwDZJe8ZrTRVnLiTX4x2pU3cXqp4cxWzWQyYhQUpLiW8coe",
  "key14": "5XhQrSbboqKVQJbBSKQECnyupuqeBESVge1gvoJRCX6LiSpjVFkBBw2LdfUsfujPDqZEHusoxnKqUjffMyuW3bgi",
  "key15": "52AejPnk5YqkihjGTYjotai1GxtBsqQuPuAYbsWjxVJ6n3Ke7hxJ5fMQbS4DqfBRF4mPvuNfCwb4bbSir6dPBdo2",
  "key16": "2E8UMN9E11U2H5oV2Pya9SEqkWUdLRyDYUeVBmEb5KPVow1ZtiDMmRHxhKPxYJMpfBXYV7uUPpVA63uS5Eh1JxkS",
  "key17": "541oKyDx3QtEWt3myyYDGgbNryxaZoGDu7SBzZMuYB3EybCuMR6kAtmDcjduLkJwovwRsBKJzMeRpVkBYNHC9P8E",
  "key18": "2j5kk7kkmPTX2KvfECcFttbf1qAveGRp895Bsf8uJiF9K5pPDzQa8JD1nxH3qUgSZdhGcjTBPL5uZ6RFaZcL8pZ6",
  "key19": "KtQGn4nUj5Gb8GuWj4396p6RQbaeUNTync87qePp6xmWaqt3FxPvWaG25FHjkdLwho66x39uPAR4QAWknvj8aXu",
  "key20": "odHUyiWTh6Xze97pXCMviyt6KMTvuRFaTaZaVHNAdd1TEQdDiFU494oVkdH6hU6gRjCr8Ny7m1e9u5YwrxfcTd7",
  "key21": "2TMeFtN4EvvyScistUCLSUGAcmRWTUCtVUCeezfM6gJNyd5Qq114PNqj3LfAemraG2UwtPL7aY9Bd7ms2Ey2jK8b",
  "key22": "5iGbdi6jqRreHZ8f4RCkvYEFeyPhJs3hxdJjJ2C3e5UF5uZRjrFZNS7EFEA5CHgYXCKi5whUm9Nzqt1fxJmaNpkZ",
  "key23": "5cdvBzBCpjDn3fDVfNnM5fEby4P6hmvKdugo8Mw6xuxkhN8pXq6Tv2MGiHRVHHvgvprr8ECCc1NLPXsxtqRcfYUN",
  "key24": "2mjudv38Uco94y6K9S551gKFRhXBHJKyKUxh1YwFVEsfv4mQNY2ct2FGiQNtHGpmEZx2yQTdZNFZXXYdxEvFSMoH",
  "key25": "CvjTdCLcezvfQJmJYfzLC9c29LnE3GgjpeQVBAhU426sVLPp3Qft1nYAkUQdVKaYuDsnE6gXKJ9Qu6gF53vAbdJ",
  "key26": "3xquf44yTPP6UKDo2pZ4EZzbEkA2LqJ9JpTY67tR5SVnvVPVj5XbX4LDbaBNZGaHnmhFMvjg2wAuez1xy1gWjJQE",
  "key27": "2fKwB4t9PDMuEpX8xjPkTXJskUtYnts6396AKZPtz9AZDCT3b7k8bJLtU838VZ9LW5i8X5vFfEUQw9eQnycZBEWw",
  "key28": "AwmGRK6re1NiZPhGJv7igeUNuijDSCvcmVG81RJ95Gyy5p4FprYoebmPsmTcANJU3QTGKwGRuAwr2bEJdoMMrUJ",
  "key29": "5tjB98X5Gh2oAH3bNMgVgEBwiAMve4NqE73CMWw4uLQymbeqppLkZ8Ak1zHNp3re2kM5tyZC1nDTz1zJKWCLXoGp",
  "key30": "wkgD4avH2USyxTj1MKNDrUZQfXkdDGQ4KAVxg2wgKSttPzwu8g9xXW5AiGSh5Mg2z7dmJSDZXHWbdr29Ju2a6YM",
  "key31": "jjC3hCiA89YShRYMPdFDzciEVihHKx8sNREwbBf7ErmQ1NHfcs481mc2HbN7iy669eprjjwAGp1Qr8P2Qo2jC3j",
  "key32": "Yy9Lckyawc5N4PUvC9u48VmQ8c2Q3Lx9NsFn89frTUz4egFSG3eGpJjNHWqbXz5iq9z9JnZWhaAmK94KbPpcbBG",
  "key33": "49zP67hSafVKSb3VZtUM2BevkKBqNJPndGuWp7sQdSJGk9epTHQhn6wWfGDDUM6ZDWUcsij5RLi2bNU4YGxQgbrC"
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
