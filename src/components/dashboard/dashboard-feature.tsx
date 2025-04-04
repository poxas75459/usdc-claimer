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
    "2GqdeDsJHGb6Ja6X79nrxdvY2LSicNEpqN82dbYCBg68tCc5MmQ7iWy62SZnEd2biedVLq1BfncBY8gWDwJrpTPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NntaGg9z48xvN3HB1sFR6EiGNJ5HZfe8z64gUUzCvxEBDKvwnzwTB6iE2w1f39r3dxxQ7bCwGCEr9RZRTdSxyqN",
  "key1": "4etAAWpnofQJNKcps2gdBDZdkhtnQ7e3ECcXuoL7T2wR8hR1DiaPMebQ26CZ3DAS9prhWFdPC4GQPstxkQHr7FYK",
  "key2": "526GWNqZHSPRhMqtyHvHs1oaD97fCzU7o5chMUvyk8x3JMXynovYojdyoikXDdcxPuTFhv37NNvQAouLNfwd8XDo",
  "key3": "Pwu5LzkcgRw9b9qiz6Tr2bGRpzFDW2vB595GwuMJdh1irFfYtibheDmnEcMX6qBSqkZKyyP5SSXBPV2mLKZQtFq",
  "key4": "65M9AELrTpMHTWmNrc5RZBq5qWABLLRx7QaddScukXM2PvnVpDuC64aMp2jPceHK21v91ai12U2cJbWME3McLLGq",
  "key5": "4VmZ9CSLYQajBpm8JQKHm8kht9ckoBt2yGbyBvAwsHtgCeZTV8UWu3UXf6m8Apzdu9s3xiaAPohUmhfxhNUrwnWV",
  "key6": "yzuNsCRW5FceTdqJ6Kckn7eSk9L3NjiVt8pv84TVSMY6DyT5cJgvbHhmsKMxp6wey1HMvvGyiCr8WykFFbuHkqh",
  "key7": "2PC9wMf548rbgEKmEGk5Vwz6qQeWesJhg4Tr3i4F6YZUMvfp9LsXmZQBW9N5G7DL8nHzMUPwHnW9Nr1bbtEj8oPb",
  "key8": "d2MSJmMkW9XnuCz6b7KNDa1tEzP3CV8xYs97B7kNHv5atxcUcTLAHDYV5oCWKMLcbgeicLXRUXvCERE6M32u3g2",
  "key9": "5JVK2aFCqKNdiYMWSGXJaFCQzr5dsftrzAHa5YLoyVPMCsaLp1q35rkCTDBmR4YWKh8gqdcWtfkvxSmFBE4n7GyJ",
  "key10": "32M6a53xgnuKC3o9WJYtrZMw1CfmL9G2cV4broXkPNDbFz4GHrub7nEAKD2XajpghUpKxGXfFHZRVr5z9X8An58T",
  "key11": "2JZPXF59spC8AWHHTPE1QohxkK8h9DjJBtvgVi89XiEuQdhZeMbSKsfYjdmMYRvJH4M2VEsuDLkL6XsK8AhAgv5f",
  "key12": "GuAcFqLHt7NCHrTEjNy5qkPgdr5ui3iABwgfqt6Y5S64BUG28s9uQ6NimZVokouV7Rqo3GxYy8g9GmYJUH9qe7X",
  "key13": "3Riqj6AfX4iEEjwVPZ7nrnq1zuinkar6eSbiXXQ1d15uMyUKjDx3Mh6uQeGkWWJaqUBYna5kyE39rqcesHTr9gnE",
  "key14": "2FJfLdSLbE4eP4vmpBH8T8EBgHtmFoFNQxrspvNXupoxsvsVjHHW6dRep7GRTSPeHyGpmVZaghHzEGqthKkWhm3D",
  "key15": "6AMZSyzfHEnS1eS42RS8FVQvmNpHBJgTt3x9cggbnkt4PkyACRYkrwfZuLLFrujvNJ53TVCsCo7zCn5UnGCghHi",
  "key16": "4U75a6Ek9ZEgycXqv5VcXwJU2ZRWeWrCDGHGw5GhxgUp5FmZeUuM48Us9ueUBQTysxMA6joLDqAZKMV3eaMmjTqo",
  "key17": "5LKvXvfSAoCthAbLYg3cntAdbUgxCdD3sw653RwJXxV6gQCevud2BVHq7NREbkTmHSGpMg3gL5izwuESHYAnCr4i",
  "key18": "CY46ytBn5qD6QLmEricMb9hFaUVdSWQYoAERLrNHEz4Lv38uzz1EheTAQnvkfU6gAAEsUd7ep2j983u1vZDHLxW",
  "key19": "3X66xwRD9Dc8qBuTKrnG9QmGpA8CJYvWLnjeapwa4SXEchRbputZ88bSC5tvuxftgRihL4qBi3pJ9dj2smnzgnpS",
  "key20": "2L57vUUBaGFfpvEnx4tGpkbyG4Jh55ZBREHM841kb6t12z3ySc5sN1t34QEmKK7tFGvS1Ae8jFucVrE2dWHiEb84",
  "key21": "3TX3vuc1iz4cjjLdgRCh2G2n2zLFR77BXTycHo8Sop7Xyp13ki1uSfhfV6tmFK2H1e7Z3Wj6qe4B2oiXLCiZ8cDk",
  "key22": "V8NHn3q6yVaLx2Avt81pZXKhcdpD2nm96Nsh6JkEV1jEw2kmbG7B3R96zoxDqpKWWg9Ue9XRaMf1hbQPr6jVkW5",
  "key23": "2hghB6awmr7pr8934oEiWi8VykD4PtoYa9kpnrF8Amg9oRPitexKjnAV1cdC2nzViMJtuz4nJeQtrZfQXLTz3Gxd",
  "key24": "8qqF61VB9QwFy5va5snqqYqW4d1V7g9CyB47KWT424746fNPDdAacijWfvMy2c7vdpDAsa5vZSXmibTvZnnBDgh",
  "key25": "3Pu2xWZePFn9F7qdCZiqH98S2zNWRxY5h1c4VFp9pmDPJPkky82Z37zrvCunuvaWYPtuz2yJf1wTrr34uf4FjLY3",
  "key26": "2YErvYRmYs42Ls4ryNMqkungYZuNyxKLaomm2gQCoE9ZDN1HJWrzPdCrLxiJVV5cqqaE4qKVrabYt8ndzDNMDPFS",
  "key27": "37KxbPhrvBZdQCUiZzUoMkg49jLzjmCUrVwZSNzT2AYF8qzQcRpUXzGovavEaEWkm1tRwXuYsth1XQSj1F2oFmjJ",
  "key28": "AQzhFsPiyVoZr4kWowRtzmzc92iR91KX69Gk44UfM49mfdaSGXU9cgsjUBXSzjFnTQk68k1N8CXeKQi8kvw3omK",
  "key29": "5RgkFxNJrsAGQinsRRtwpCThQHjbzW3TSu9ken56ap1ELekmLnARMEML6ENho6n5SXRqZxijQjWbjmq1oMNb8RG",
  "key30": "3hNxxURi4HAo11pU7A36oX4guQpE43arMQpQQYzjN66By1WF1eTFL9FtYe1T3zeCy8neb6dvKBTwUbuBXcjqkaRN",
  "key31": "FZevLnRBDDJn6pDszx5WeLVEHBzaw3FgXFAr28WoAoye9MGJfMtPNubkDiga3rHN3NysBuWip1VRMNdZKeRr5M6",
  "key32": "4xwgnrjiLdbb6Hayz2fmQErgnqxH7X2if7bv5H1SFPrGb74EPu44TyTvv18KCijr48JQaBGAr17PVyx48zjPzWmB"
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
