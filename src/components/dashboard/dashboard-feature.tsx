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
    "KPNj1Bwwe2tdbMy4qQv6FFG5vVbA53DYX8H9ik2qycxTy9EwnJvwetS4CCmsUt3zubhaGAzyKGNwKBeNsmaX9KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YV6rfZsdZaJVEM1mAmgjtwdvq5dxDU2rmZxD7REEc9cNHL5H2M15mJST9A1Yz9AaK9GndgA6RbU6hQ2Xc4tGnY4",
  "key1": "5jUpzzdieTCqxmJ6qiyrw8WFoTrzxgkyc8Wys8cL2VRGcL5jg63jFq7WJnmdKKsHCooaQezt3WgkrTyYuLNgbyfv",
  "key2": "5HjVnUSsbk8nLxxqyGmC2miVYpLbm6uPBc1kGNoXYiHkQirvWdyEsNXEbSbS3DWsdm5aobML56tnBGgVr1HLaj9n",
  "key3": "3igGvQjCSyYYu7XCJd4yUYE3L2MxeSkdcLVuxqQDFhLQTSAgUqmv551Nmdc9g8BsytMW1Q9EgFcZvLwyducWsSM5",
  "key4": "37dQpsCaRi4drBdp6i9yWUUcgEYHhQrujuFSxvoXH2TXJtAfvrUzDtz6Ni4tzQfEsjpuz2iKnoK7otX8thTskuh5",
  "key5": "2zhxjwZ8RSFjKwxjAm8b218AiZE1mU2vynE2D1XBquETRLxa4rJAfk3KDfmZ2V33K7bXFE4TR9LFn7ax5CKXn5Hf",
  "key6": "4oZgXwoTWx8xSUcXe3ktyfP8HPHAaxkBV1UTaPMALTE7EJ5M3M2JbQxhWBbx3zujE63vxjyXrSu5hWYq7Co3yjp1",
  "key7": "2BShy2jUSPau2eh4NYBsteV65Cdtbe5DE2sJqC9fqhsEJYG9NZ5P8iwAbvCTd9Lb2Q8x6vH34Cpd637VaeZuGk1W",
  "key8": "ASxihHijuBzwpbr7SMqdC1ba13urSzG767SVg3zvK1JXn7bVsjd5uoQV8V78Hq6QNU3N8W5YqqTGecZq58gPa9A",
  "key9": "4J1RTvKdzeWWDFeEfwn6My3a9tAtBFSzS4j48MvfGrf44EgYTcJ7SZf5SsCYLwGEWxVMsDezg6L8TPJTujnbHktb",
  "key10": "4qYjinXTJ4oYFoQu1gzYPKfGMtg8h9JkursfkUAcReHs7ACE8AGb5XYoBzK6vSdRncJKbKdRx22K5es9KQ7nagVx",
  "key11": "iC16MzqEeXjBq2hwEhAv5Fm2ru8JpYbyJk4BTU9sjopLGLxKLyomiAHZhwnFDvbjTpeSBdSRMNVhLCJpVTx6Cjw",
  "key12": "5FLuLN3khYUZJJEKtEEVgNmQmLtUHbMWo3pfhhQjZjV6Cztx54zt411KSF6Z9gr1nZyu8iSxehqQwLvXgze4ZziS",
  "key13": "GKB6RcJey3JSFXcTBRvqKaNSQezeaWFEP81MYbjFNDJQMahZo49iRDQvmKTAVP4d3NZ6FbvBqgpuU65ggCGVoDg",
  "key14": "5CWDhcKy1cWZcQU1Fpmpur2pE4bcKruDR1U82Gp1YiLxaxvSLb9onYvXWn8kYjKNt4wowa7g65qcMnY62aPpXhn4",
  "key15": "33VUP9Gv2DJezRJheYXAB239rDva6gMFmEsyQbL6u4MdasHKjUGRFMBa5NCm7V9KMwF2TY1GjL3TeB2BNPMhuCqB",
  "key16": "44UzMtkb1FjT14cpm4Cf1LajfvF1T75JjaKNyCkHcB2Npu7CwwVBYa6tTjyzECou1kAK17ivE3skaV5u5DQ6Mgm1",
  "key17": "33Wp469z8oJAfkMhFRfzEYPdqSRk6EDu1AnvQaqVKsfstPYXaFW7eszFJ61ySSPdPqtt2DtFXnhfFKJGQRGdqWBb",
  "key18": "2tSgGUS5kGyAsCXoSwHdQXvurCriZdQqRfPFaENyW9QBULufkgmUPs9oqW2YRMDaShC88H771rdFRisHM68rXj77",
  "key19": "2w4XrDRGHTQuveEnZuGkgz3t1H928Noob6383iL8Vt37tphWonpwkTPrv6WmmsR26ssiss4sbRPt4egkfSvLb2Du",
  "key20": "366hkVgF9uxJGzt3sBsoWUkz7WLLkp4b9TzLyDJMAzVMRk1jefJDLsW3pqKrgGdH9HKxawHMSxfeQm227Aro6f12",
  "key21": "3TiCHR3BoCsF33Nv8aqFxyL4ymcXmphs6bZA4HwGp24gP59vGDNCKfpc49u8AvFm6iuPvZWq8fXBp14WA7E4yACC",
  "key22": "2X1cSLYtZgoCqWqFjgxiGALaUq4wftQR1uw9yDbpWaa3eFiDB99Na1BY9eynKJgBJKyAYxcvptKFopLCY8NSFFHy",
  "key23": "2sP8LF1o69hASLBPEGbG9hbhy2Zj26FrTKTdh1bMmX2bGejaVmwozwxbqdAZxJ1XmyUbZy5oXYa4dK7fun7AucYZ",
  "key24": "25sLG143vjtBoCpjrFb4Dde7ewPEcipLEp2QTjmN8A8JBxBdw9cQu7KBC4JzmaAGQcvX6m8fBJJwAdDjHiNjZeWn",
  "key25": "njLK1QQ6ZsV6shcjpnWJ8mPxvWm49fb8e5MkdB51n6xfLdT6VcHrKmU2pJXJj8PvwYq57DNwkfdG7aWphSeqdRR",
  "key26": "4SHkaRj34CJb7Y8AVRws5qxYLFrGFcaWGL5ECtT7uZ9TVcckzm8q8UbBFntbUsR7niQ3C3SNLXFteqn9Ceg5XLQd",
  "key27": "guAJESNs5NJrZjQicXcpWUJ4jPGiiES4SmRMscEw35aPUwFSFeE6S8RfeV9dfEq9a14Qgr7SLbPg4N7NZx3GQXb",
  "key28": "3WB1DcgjXQFgTNn24emngwhBouTU68yCmgMrLM7gpyhrHRuLjAZfjqa35nDkmai6zREYpcwuszZkMSSgoeY6xdzp",
  "key29": "4VFSKh2CeNDAadwfRHmWQmDKoSMPVPsYTxjN36535dRBnxisYorXRUwvHtovT6GQEUkbvbEGUxVHXkCGyZRTfKcX",
  "key30": "34cY1iW56w6wKczUZixK22WpmChPfLX8NidQUY34PtizCKKBiJetZ591RP1bwbHbdKvh4YA1fJqDsf7KH7Sw8i8g"
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
