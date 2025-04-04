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
    "5Pdd6aEhz75JXxryJwAb8Ytx5Ego5azwsHZ7udFcYMJKCuqee75AA4xLhvW33mqhvvKD4gUvpQsSN8oZ9shnhnms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdW2GmjSHWvYXx3z6gBBz4cR19jccc5KFeimbLHS6JATyziq4EBXApVKdJTFvAGFvjZFpG5dxypCP5svmVZQCMu",
  "key1": "5X5y6FJkX5kuGHSw72HeCE6KqQvQxSQCqLqShDmyXsUaXqbdAXcojfbyA89Z7LXo2JHF4otAME1jwonACnX1MULn",
  "key2": "5hRq1JZqiFDtFy3pJ6Cen1zMtBzpepwmavDk9KYJwM2k5QMmopRrBFuU6BFXtqX1xaxKQ3ExEbs5t4Kqqp5yYJF4",
  "key3": "CwzJhrxQxzJPPLbr1rCUzCCZf4PzBr7KkKxH5oy49Ue58qhi4JFo5PebKcfSJFZ94FxcCkm9UupAC6p8Zqtb9eL",
  "key4": "5Lwh1ch2t6X2y2P7hDz5v5SkASHKnyLQe812nJqyq7EXW2HFvLkELWksbwJTeDH3FqVq81FkWbnVwW193nuCTsHi",
  "key5": "4e8B1sCGSAxqpBDRX4MBhywdJFsTvvhGtDDG7BaFkVPavgjgs16iKwxTB1GcqhwQXVFR7GRL7fvXLAr9aDcc1kck",
  "key6": "4CbBU4sCiBk2ZdK1e8n9tdjNqEJDA6rWxfJsdoUvyBhneS3SEYcqZJ2SyiSES3UDreGDTU9NuKNHGHR4rLCjfR6m",
  "key7": "3AwrYwvAZag6EL5BotPJzWX96HVRjGu1dMxRidic3wxH3S2rwqEDQMnxgxmmYHEEEffVuozKkrgPgqbnkeLmEJAM",
  "key8": "4qZ4iV4MUtRKjXp9C7V5dMfhRm6V1eq2nVKWbC4QjZaYky3118VpXQiq7L1LoJrUeJQS3vB2hAXaRootKup8VcAg",
  "key9": "4hwDHarxzwe8jTtYuQfFN3CgMuFy2WhSZBcFKekdzkCWSTTcQMhX98Q5xAReHrRSDqgRMDzScX4K5Vb6BrBeeLuv",
  "key10": "5VcSWpoC3Y6hsHDYDzzfgtc1mdeuyZgsD9oRY4i91JnSnBCD3Cz17yDoqCPGmP1C4Cnz8yk1kXd98ckpgWX8U8oz",
  "key11": "2jN8YdmJMwcDvqmhwumxgdVS6red4Y39kRau1jz7ixPMoywiLi9jBog1LdZedLNKUXBi5zL6PmAV3xEyktJAeavF",
  "key12": "36dtEh7FQ1nzznUx6DtnA1zRxp1H3pSp8WDY6WJqoThpeByXkbEKUPbmV1JK688FSyx4iiehPSsmfeERPkFZvihJ",
  "key13": "3CkFU6hmugrhrjSQMHaqeNvjqPvhnao5syfJp8Qb9VigjKek41qZYkFUuLpp2ijSjEMkhdBvBBCiZX7b5kJYbVaP",
  "key14": "3gzPQy4g84NvWqtUrDvgXAuzsEN3c2WTp841sPbugicC29LSuqMRpKXp7MWyV6QyF4KauVi9LjHeNxKVsQpTT6H4",
  "key15": "4QfxRiSKpPixG1PAxTUQ7s2f66VczZPqFEoS8JYVYFywdQmF7LC6yzttGxPXLcAfaJFpPfNpuXPWtVf2Y5UrpLoW",
  "key16": "22hqmBcioTwmdtRrGEHnhsTfGM1hLSauhEGZznf2gurgcTkGgH56to6qCL5RrKQbNFHR9L1pMMWBdm9byqN1YJVi",
  "key17": "5PDndyvB6wyoniB4Kohduh3BppH3pfmLJ6mkhZ9eTJi3C3aSYJgVu6vZuNrSLbUiL7LYHEDpWVYBpc9G1vZbe9BY",
  "key18": "fwpUhAaR1n4NG5GZBuNgron4xTRMA2XDiHX5SYDQJQKuv8d4kUpTjaS4UMhuKRaM8Yzo9tYJsdsSmpwQaULLgWy",
  "key19": "2jxm1VEKFCs2wDERhpzub3iKTDXzfjoYtzUECmRbMd1XwfadE8fWRFGmUhhZ4eQ3yTgb7LQawzn9dNLTSfCrxxkp",
  "key20": "3KQwKqtjC5o13Re1ZQ3Wd1xYGtixmYprg6bwxVRtM5dS8439rc4NzSi6bVnp4KvtZ8zGP4yTzyXKU9TK44YMMvVo",
  "key21": "2miMcG3atAPHVFJuMCfVTH7DtxXrDuqDzKZ3962Vw6e14KFCJvsNABDfWN861Akay2B7ALF6jzymGaAG2ChwJLiM",
  "key22": "3WCpxKCncKAXN5k8rvtEfNfDmVMFV4iHHa6GA4gbJoEBiVizGEigjDmH22iS7QkExmwAqXaFKzmaYEXydFg7fF37",
  "key23": "3N3YpxmDRHDDGj1PkDh4p7ENfbmV1aWYBGaBF4d12yEpKXDoPSppN2BXPEaL9Kjiu2uaVdekvvckrWPS1MLtDmdV",
  "key24": "32z32EVye98iXPNvMknPHxpE6gdsF4ahKCdQg8gWEjtu3yGcDWEMSuZnjYhcpMiBZagsK9Ge9dFnsvxRevNdFBeC",
  "key25": "3aTMsUUKveEzg52CAaZH98s1wZvkicLypriBoEueWduqtRVXhsoKunCpjaoyWNswe8kg4Q5BX4oFG7KYKrE12iiS",
  "key26": "5uWeRFaNrrkL4xNeBuebJXnxf3Nf139PQ678SDZ9Kj1QCnX3nyNBPFLdr6ikHs1VuhppBw7LcSWnMtw5WLQmvu87",
  "key27": "3hkbbYXuTuoTxQcQUm8vWAoeWiMgV3iBPWaDFa7tu1Y1bHtr3FFDSi5Vb7Ces773AR6Csa4gcaupBGUxRvJzy7Y6",
  "key28": "jF2oB3GALLopxtdVmNfhHdQbV21ZfsyLqgheYnhabnj75X154rySbwBhAzVyhxfFArzUK4agxthHrQYmAcPdn2S",
  "key29": "2V8ni2WyoMdf33AjwLBmqpaTxc4Je71gGEZ4LSn7w7c1AqswFojpEe6EELJGtHTamm3CkC5J5feQGA6c4tN3Shim"
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
