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
    "4JMe5meVakBjUYxYE4A72gWiKWN4R8gZxydn1HXzRMWQQ93edgYaFyNeCy1EJPZdVEd6pFyUdrmGjJZTE7T23Ke8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QrxjTpcepksuZMc9wRSs3KQ1W9VQFdinyQ21T9rCwPRF1kAKMVkvepd7LKAuMjwk1ighcGixEcMsPzvh5JF7Jq7",
  "key1": "4oTvfum54YuFbEBSoG48oTEAzKerEAzfwieWSK6YHKfoMqzrrZspDZyCF8woCEgxuGFtG8EDZKuwX8aKAr5q7CBz",
  "key2": "4GtnMj6iSXfPhRc4eo8CoVwURWwYbVNMr8xfWiCkJZWFKWJmZQzr8aTreuhZANj2su3vkdkfMGZEMT1ppyjF5HYh",
  "key3": "2S4K1KXddaCzVrBfKE1LtQTQBNmybdvvrkk39iF8qfYv33T16rJF5Mx3XTdbkrtxwGtf1k7AriVqooUPMXwxDwxt",
  "key4": "3WFkMC2jXNkwHc6Z924XSFKyUF5ZphNQhxcD23hfgS1YkrFvhFRh4SeYiS1x3J7UToT69UcQjhcFqh37GMs1HxVa",
  "key5": "3UbWGksgShJBU8yXrQCZzBnSaGTN8wR3a55p58Rex1ExskJtcjKMUnYeW5N4uo1n3DRagLB3Zh1c57qLQwspaLQh",
  "key6": "5ttdMwmZjsw3gJyTteej2eFwccg2Xi7FuR1WPTtSvVNvcFTejUVCCDnER4gfEXbyCqFu9c4HHexEEexpt2YFEt13",
  "key7": "2F9YfxQ5Fa3YG3c5iMfp9DKtt8USXLc4RYqGfwMHU2fduXKeokx3xDpfsvAgH6rGn1wi8iKifM9cKjUKAx8zJkhz",
  "key8": "4DuHT8HJ5qgtbn5qCberzyKXyhfwGgAkDP2eeJ5KBBwryYMDQXqK1C2fF3UDEYchntRFxPzG5LELaWpPRhnBG5nF",
  "key9": "4HBVadVHdDSuBvEU4C1SaEafWHPysebn7jefX72iMdmrjE3bTb1JSKQbcQFSM2gHRdPhkfxSL4scbU6y8otgrnCx",
  "key10": "3BvfM451z7UMzQhr7PXQGn1rw1Cxmg4iiR2EaKRhPDk1sGYsfPyK92JxGHZYKAJ125YwFHz4NMNhF3sWarZVAefY",
  "key11": "537bAKBiccTviw5zkfbe9fL7ztbB5vTm2TaFxeEQcRnTsvjdLcWnmgtQHimkEd9o7ZPpYtJMzYF6vRDYMaGQQGbv",
  "key12": "3GUG6bPz4nhKUTBp3auvCHRt8USrVwdYzhbQBHnfXY13CtSkEwJUGiQqv5rXzyXRjCJTYXEUwfyGYWvb5J1aErsi",
  "key13": "5J5AWxqixdPyf9DwEEAra31HgSCRzeZUN29Ugsf41iVGyHoRCMp9UHB9VDyHL4q2hjcc52oEvNhM2vpzwhAWnhVu",
  "key14": "4xiixL4ZooLU8aTQpAd6AvWtGi1NfqfCWsddhiiBq6bW8WzAn86gyYpv66LrbPYXxCdmtthWt3epQA7YJBE7dxbM",
  "key15": "5Za6Zomad7TGSZbWS1SbjRgFgc1brgfKrjJifC9dEMXJwdm5hRE7hjDARpupgihH4UjMHVCH28sBrtTYSNtVbrob",
  "key16": "rf7S61rDKT3861qoKZLFx85abhjVcBnXX18UXXpWqb86faeW3hRz2UH6Trfp4sq1EBeZ3f3ssDKGEHr3fwhRgFj",
  "key17": "3EUEjKDMecCEbmm3v6GtAPWeKBfN6x47cQtLxtUQSFoKEmaSwVSJ4CchSyRqjKo6TKdECV2XNrafqYfuA8LtiKLE",
  "key18": "259nxi7m13cQxGLHByfyTwSj1nRsXkczcLpCZMiooaZcf1gQvofjw4ozh25Ph81q6EA1M7xTSawqDe8JcDKCACkv",
  "key19": "3TBbfyvyYBf3zdyHuUnqr2PsiRwu873BVmamjrjeUcVRKnH2Mdn83abPjH7rXhanMS1EaBNJCtJUCz6kAykjTNaj",
  "key20": "Gq3EQCYNh84bgVXcZoQtpCQi998m2j7hyjp32jMUhaqKsFWCjR1K8mpthkTxQfWRPh3jBgKznETxmkr3TGuT9hi",
  "key21": "2PwRZedMBqPFvybPSnA7hTxnqEWvqCudbN1kh3p7jXPW2DFkFZZ4M3Q5Gm5m7XcGYNp6nD82ijwfTjFWCnyBLf2n",
  "key22": "5i2NUMUAsiU48D4MnnT7du6DM4eH8VbRjHPhEg3gwVfiYFFQs3d2DJpPi2NLYNJDR5n6BH5nSWVboWfCzdHZ3EWC",
  "key23": "2qVLV8WwVhtysqmEFnTw9m4oXrQ1rx43mePyLgs5jvRvo4Jhq2agUxXRBNseuPYpn3W6i662haP2RNGBLsxWWYgH",
  "key24": "4SMEnHXdnZn1Tkj25uMJ169bvPdTuxXZprW6dXT1hPSgVKppHy6osH3GmHCbj7rU9vXXW1qEMf4kyE59HkzNLqVB",
  "key25": "3BuHVNtJkzGxYiQLNJZ9QMCGZCpfWpiCp2t2UDBqTUYeJW5gjFTPbjUKjZRrB5EGnP97fyJuFzQkqkB42sg558Ho",
  "key26": "hoVsPBaqZrac3iZE5UP6dQ4oiRNP813guEMu9UGPQ4MDozhW3Q94bQ7KfodjSV18sCvkjj7G4BdEGHGdN98Gu5M",
  "key27": "3BxbB3xUFZYkaqSxxbWK5uaVsDvGGA7AdkbM5XJDofcLuJVzYcGVn3zBGHLQEd6uxELeY8BKL1f9d35epNfzujjE",
  "key28": "5VxXeunvfKrBHWygSJzut8rHVLf1CNYcRVvorwQoNXeX8FyAX3oaKAPwpdqxowsWJzbpGiwKbMPzB2TuXSgDLFP4",
  "key29": "4yFWHdxmMbySbGVyXTJ3js98re7iJ16zeSQXGrcSYz1ztkKgTSCu7qTbHmVBp9JwMck8dQsmdUv9a49p6YEsW7xN",
  "key30": "58kDieGZLpfsscBsK99NMpG2Yobwe3dUKmPxwAEMJEF6Eejt3kYBsw8vjYuQmTj9iggXbzHN6QEnYfVTFNuEnRy7",
  "key31": "ShCvv8qCqErBZWM1gZwtDLa9sE5fsHBSypRU4WFx17xWVMwKyi6LoyDMGECSPzoA5YkkF2iB7UYCVLnZxRrXyww",
  "key32": "3sJw6AgG6rxQFanwQTstHUKXXYLaPzNDUkNkS7V8bzkPW9bDYcbXfFW4ZwYpjvPyEVg156j7aRHaL4ZMuTaYNhZB",
  "key33": "5Ja7fe64mXtzWDWTwbcFMat7hEynsEqFtyBxPHPtCKidyGMpggADDG7BpmRHRutQNoyRPaBsvGrQd7oKB9ontvgN"
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
