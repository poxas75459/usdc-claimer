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
    "2kMKM8UVBp6o54Zex34ffgaJuEp8pQz3tcTLTCNhm3cBp13wkHYJu4RVyYSQ2UvH528xsmmAGuN71G74p5VH59ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3LQV2yHzhGb5K47zwQrrRwfZ75o1G91dcrkjb312pMY9jJXYh8KgdB9vRTQn515R9NXMCyhWwHkRCcKDDBLPAM",
  "key1": "5kr78ngnnbrnfRLYf1KbF7PMCHZWh4PHMpMZVTUFisQ1VpECsBn2F76DtTveDrmvBEEQmP8GyMda3faX4V5hcQEZ",
  "key2": "3UWjCn4rGu14Wt2FpKBfJ1UWeSJjEfHbDw37JdcVnF16FrnGXc4QxKxh63hwwnQhjHhQYMmdrU4kMwLEDP3NJc2H",
  "key3": "2n1qrbXHsetpFnvmsuMst3d6PbcLZNrsvpbfm2W8MdVuZvkvjSAMr6Xm5nFuepnGKWLP6BcLYmowJ5EKstJpkcW",
  "key4": "3ckDnd1RgEVw65wJJyAmyuUirEdRYeztBTwPTtkj4Tieu2rbdEgQ1QvvLstpxhNtbJKZmLXpWkx4sj3fveqMLiBt",
  "key5": "3berfj9TBqJSdd8ajGCRw8S97n1CBsWQLd6juNNZ9R65EiDMEVvtuksAcLCu5RuY8ZLojS4kGbWrCGKfwaYaEa8u",
  "key6": "2hddKs4khZtfp9ySiqcvkWHfBqQFAvj5QnhLTK7SGCvBXurwWhATZWHbUCx1pLTrTKMAePYefJPu8jnJ4HpTLBis",
  "key7": "3anTYEoRejZSGd6ve8vomCchsDg3S83w9TAEQDwoCeHciujpvgwKpRMDhpXTrQcNTCNzmMj7ADSFj7LpeYTgGHid",
  "key8": "3DSkrSyPbkpoLi5aFqqCeaTWEwkeaidkbniPkHGeuWk1SzjZWcY8JRLXFQVpvoahPFZBaruR7dtS6MXngnM8wFkE",
  "key9": "4byziPiiZfd1FdU534PfbZUjrYvvSzBenKSZEtuRfzcKibYqom6s4Z5MZh2Z5hq7vayEKqGiys7zw9f6777Nyd8",
  "key10": "gRiRCxEjkAiDuYGFR4FQYJBRkirG1EpcryANEm4FVbqS5NhZGoKvhkyR5ZnXcg7k5wFcSSuuQ4NMKt2wThj1a2d",
  "key11": "4oR5b8pgX5Q353f5at2RVVMou93F7bhoseiHU4zhaNwY2jSa7srA7CAj2NWooaGGv5HA3AKmitbV1gm2M8J2EWpm",
  "key12": "5sCBD8WZ5yKWkyHqvRtQjdBjecuwnY7yCNFZqPDCeT69sPvS7XsEH6y2dYLDnK1LERkRvGJ4eeKGbmb9fBRQK2WH",
  "key13": "3pNtZszaYNfF9oPfkt3cn1bD5GWuLSG43scYBZrEUjoifEJMrhzuRzQwESUzGPSgKMCtUztPuYryYbaYogSdTEM9",
  "key14": "4i3MDBPbeRUVoP25XbhxbZs4TSQkBMdkcwJwEDvNUf1JAEMtfMANXSeCr1wfTnVDRzszZpGfvNVwrxsLACYiGADi",
  "key15": "4BL4nBUVXP6NvvV9M54NgN2JS2qEVoCKgGxcBvqnEhjvoDd14F3ByPc9uJ1BwMYyp22WdJrZgYRLNUKBRgCHhWW6",
  "key16": "4TMmfnu6SKJ74YrCZNqKmroU5RMYxEwUMnuUpqBPFnNfHyf6QA1d2x9RVsfzWVqhnEXU5axiFiMFeHdvpZLjWmt9",
  "key17": "8xSEoxVVuTXfnr8P2VSio9peFCTzn6o2oMEdn74KLc584XyrwWTixgX211ZKetdvhjs2LjsBQBFLJScVNnA7Y4q",
  "key18": "54tQRfXPnXzrRcbRAUX9KzY7gmcCqFWeLZhUSYrc9ELjUsreFxxPJqpsjrox7zNNaK5h8Fwdf6iJHtTKQYuvBhER",
  "key19": "225W4Uwt57tMJr9i6RD5zLAK5yLYhVpyRYHWGr8rH9ygCwKWcb1jLujmcMtvxoHtSx2qX5gBpQy9cS6M3LLGT3g9",
  "key20": "3Yuoi1nPBN9u3DqQF1nbEvU1YR95kf1YsDFiVfKoCBsv1icAfmiSr822orWCLspawvx6cGuqc8A93qd176jmPHsp",
  "key21": "2HtwhGcppeAEiUsfNJEFrAjTHvBLLBHj6771X9TeMEbqApkFFwTH7z26RVBLqktNU6btPoxExPtzNxYH159TrnX4",
  "key22": "5K9gzd6uAsjgqFRameLECtHjFHncwsq34iX4fnBseSZ289Driht72FkY8Kz35LxpCycYDYwHJX3eczQDRpbA1XYU",
  "key23": "2fwAFWgRgd6tvVY3uQFm486Qntavge8tonnMWoqzqQguYa3Tj4ubrsYos2JkNChXfHtm8o9nMi2QtCegFiyWVQr9",
  "key24": "5NiGd42KMtX9hQwqHqbyRx5n4AbVfqnS3hLJrsQxkxtZZfHKJGaSPEhV1aYJ1SMBibXgCxKGLWT66wYhtFFgLRFQ"
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
