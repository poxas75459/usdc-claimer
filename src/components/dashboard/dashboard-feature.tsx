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
    "2ro7Y3ww4o6VDPEMJnqZqJah7GeerhJPWpXtUpeS7YRXNP3xa7KkXmQXQgjCXgPGq6pW3Hep5c2zwScfZjtkPo9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oLoTuetxgMH9mXVp5EuuoaiS9aMDAZxvtwjM61KxuCPvanJzoQXstj7oitJGVqf5SApE1nqTt9DddbxsWRRhZ2",
  "key1": "FURJp3QoYsWk23aKENxyQcMqqYa8o424GaBAiHWd5vXaR6dDYEuMcBTpLAqV7iCE5GKxrP3VncthRGRW262XHyH",
  "key2": "2cfFWnQzNpPkbAhycbZYxStGVfe5WoRFy7KbpJnSrK6ogjgZCXoQUvvBrzuvfDBJSuCb4syE6Q9w9UzA1x1BL4gr",
  "key3": "4cQYg2ewNiEaj884J1SDjf3DnmrQnRpWWu8ofsVmrfcektChj2qMePaisuGpNYKSbeZ6z4jEyQfeoEqDftiuupDm",
  "key4": "XpyUgJjWQgxaPQDtdL4bQmfKiy69w1RVJWoMmaLefjio3Y35NpfbjTv1gtpPTtLA6HFGhHKw2xLgxuuL2tAcdhs",
  "key5": "3pDSnp4AtJKdhRmupjUhcBE4scDgQHnoycztQxmXKAxARFgwaH5FmYR3XViXumt9pa5YjJrgKgNf3WX89gJmNU86",
  "key6": "58jwDeiUm7yS1DtvopzDWMwV4G11HG4UMHajtQ6D9aae34tkxnKbQRvm7FTJ4xB7vaYKkNnBYKPWyB2RoYiW8fdx",
  "key7": "3bNC23mAhDEu38VauZJ7adbwj7VimijzdaGfQARQiqDjNL1NHYtVAWfaPEzaehQeVQ9ew9JG9C3PDFdsFoqyCqVQ",
  "key8": "VNGJhZMQJebECjkAZteP1qqdrkftTKemBrFRvGBJbJYrgj8eSVnFzdiDo9f1eCdxYDNjRmMVdZetrBj12AuDjiL",
  "key9": "3rXHszP8b5wEyna1f3ZBC7A9WbYFjfZcDJQRx6DSdQykeurodiXhqLxVA9DvGXa4vJF9mVpP4Zo8wQyTCundCBdB",
  "key10": "4J7EwKzkn72QazHQmPVMtEszhSEeN3EJpoLs5XJ67PZoccfKhoQPoUh6rxxMxtuAyAUt9w1faV8DtfcPtFXpuxnr",
  "key11": "YrGTH5QvFCj3tF9JoQTF5QNhPnE7PmJt8LYZ6zQUsSuFDwRmV53qvj24q6ZK4yYPMavWPMYogELYDmmUgDacBS6",
  "key12": "59xVvYBNCQeDdD6wvMsXZqYKC5XKb3DoxLM2yF6ZpSiq4xUyM1ywPXMJ6KwNHufEPm95MhfN39n5F7e8kHeWB2Mr",
  "key13": "2sp5Sc4yntHKKSYby9VTR1Y1P93Fj42yRocjCczGxof43AZAWazLrNbzr39atXLt1pjX92ntmz13SDtjko1xodG2",
  "key14": "2v6Bbkobtv8N6AqKRnhSs5EjnDU5tBPdrGAB364ZJgoqXbwS2AVewQZp2tApHY9wwidxfmhApnTKDHBwgWcGASrL",
  "key15": "56ocUkzunu1zop3V6kZ8LLbhhTp2Ek1hQP6Fxc7fkqgjiFAi7nyQ35XtxCs4CFwmEbWpSiokUVg5dztYJkvPHihp",
  "key16": "d4pfAeuPBQyR2ZUzrQi7MfLGJs2fk6tyqz7AUd786Hp6JebvhQfFmYyLgDchv1UHbVm5cJs9NrxGW3f3cM3M6ny",
  "key17": "4185vmPNDtW2shLSugBM82QNtHZrjL6RqJqxbzT6SpEb5NeWgcva5az8JHqgcccJUkraroCTRSy3h9tsw3Ax1VP1",
  "key18": "THQtFz1w185TnbSuEd1PWEJrmjjPe55SSPvyA4GwWg4oQuRYpkFRFVxTXaobNci1ssxWDXj6GEq9AjEGhjXWaBE",
  "key19": "5Fxhs5FDdQeeAWkXzyVQPppqBQcv38tfCvq2XrRh7hQJXhnsMA9ChVrJqBvHHxJgvSz8oQKeD5XsodppgZNtHALL",
  "key20": "4vDa6MTmmjKjY4fVCfwFYZQjYZHSkT2DiPVLytgkZVN8moe8vUk29jhWZVpvRggw5Zm62o4SRCXMNzTjQVZAkusQ",
  "key21": "4Ysh5pk1m2ukfUtXLHi1hPbepCcE4NUB4BDb3feEhuUcF5Aw9jubecS8WXi7cDEppfZKmFzCzqMPWXzs6ynY8HRG",
  "key22": "5u3bZb7EtGkWJYK4hXfErw7T71N4h9rCjSucbFYaXWEiZhX4qkFGWBK4dh4PvjpZfEQo8US5k4MYU6mTqB3i4L89",
  "key23": "5zpRYv4LyX7LqJ6QzVFNYvJbGrdM97pfCbZFEnTEHWcvRZLYJjoKJ7dsmM3wVutYG4vmG7MgSSHC5eLQuQLMGV3x",
  "key24": "5kTdbzQXpDUdFPDaND5t6gyJzLUCfrCMuNbit4cmYXgLkGFfqFZRwXWQZ7VD42eSRwUkbZ3DePLnKb5cgtcdVcYC",
  "key25": "34DnNxL5DAYUnq6trqmfc311LpPMhr33EZGX4LXjxu7fbNbqwNPCkrsTETZLhFVwTrVsRitwj5GkkpBJ9YbjXPPZ",
  "key26": "2j5EJNhmBTATT36z42c5MMf444W5MBD21TqEjJXLHZaidmmD3Rn1eK3N4ZpSheKVxhtPsjiHeBkJPGwYPfhNp7rf",
  "key27": "5FojDkXVFdCMJdGbh24XbFvkTe74G3EUVXpCTpCcnf2ySmDJEC7pUDqNXLMiUUoXwJC9wqTqVffdr2tgQVwLZCam",
  "key28": "53jXf26MDp4BsssVgZbGPNidN6nDQy7RgcEVNZHVdx9zacmXxBMAyHXrGHygcwDSTVQnu1iKrLQAodYx2FgRUVMp",
  "key29": "4MJmTvjFd1GASPggmvgwLDWCeenaFdRukjKCh3yMJ92AXR9hw8MNV1dZucX2QCByFKQNYv5m76eW57yxeJaFPZUS",
  "key30": "2pmR5fFUXQvr9d5NDy7eaQAyufX4dWPHQP3qvVoXZF6yAaXJ6Uc3zq6nUUVgqqPCeYwXrVAAAJpvq6Wn4xypqJ7u",
  "key31": "2R2XKLFkq8JCCy7o7Dm1kzt3eXrbBZVxD5CWVQakLLRcL6HQACfd6mRyxKJwDFADhAm117yBgLvmuvT2bVNfjevJ",
  "key32": "EWLmeyY5guKtMTy38DPpWUvHZjQ7bTToeuCKDSZiAyTEGPFk3GUZiEDhz2EJTKpYmZE1xMYFAPApuFSGjzikidk",
  "key33": "3RvyvoNe6aEWKHCYZpm8E4fNrszDEPN18mU2vr9vBKbvtw9E2y3EZ6bPTLC34gzVadmnFHZMgARW42b8xRQa12Nk",
  "key34": "34wqaTYz7LAuJf4Zhshugp4aj8zbk7rFqYB8718dag1ntAn364CiUPqmQ2s5twhGRtp4PUfndrDQVtWz5MUdfDxB",
  "key35": "3MUYqxC23HiEFfxYf7XCVEF2fTAEJaH6tGzdJ53vH9HYYhGe9rfPFfWVgrAbkMDqmuvM8pWpdqWNurL8GUHLDDLH",
  "key36": "5AJ6Y1PsNv1N7FbJ5PoLiraMyVoknAtdwA5DSDJcJWc2nDpbjVZntoPCnzYHsroP4smMUDi8QU9xwVahTTPxhrw2",
  "key37": "5ojzkgkXQQ8QZghD64z2CVXquKTdHnErq25RdXFM9mURjGckHSsrkeKMZNfazvwhvjQSLGWUk4UwSuUMPwgjnUAL",
  "key38": "5RBNT3pD5AE7Tqvu7HchSkk5whEBgGG4o1ACxZ4aW2tUfxB6xvXPo79wkD82cS1eKrucshDm24ELZnRmMEb2qTrv",
  "key39": "2KFRLAqSpXEvYitRtjgEPBRFPyybgMbPLSfvKK9J28Us1vvmktMnPbQZNYVycFCRrw2eqohhzfptiX9etuJYVVwq",
  "key40": "4B27uhNAPM1KDQjbpbWY5zEto7aiygx4vBezthvtkYqbJb9G8yB73XaboqJ6j53tiz733CHpCkvTEnsApMjvULDt",
  "key41": "5o8Rd8GXxBq2xRLZau2Hiu2TMZse3sUTviKkB1U9vo4TUHeD5fto1Fpqma6Ui5THJEtxo38qs45WMa65JcByeiUg",
  "key42": "595UZBsFevbPk5bxjPfNqCV2NyBb7RHDL3PBDXnuq3FpphZGLSJShdSn7NJ8XmH7QGt4up6DqJFsCE9THmEyBNp2",
  "key43": "5CSUgub6puMMJ1vAvpsm9GNtYCyHTLkcL3iQr81sT13C5mKfy3DagjRSLuxHHdLz6Gbg2yzgvo9eUFwXcdme3ZGW",
  "key44": "2uuJkC13BcXF6LaWA6h3NdSp1gq72iDQoFa2azgfCRCmTPvZNzD9HcNWxXgB4bTsfkryWSiSq3MBeuyveTsAvgu3",
  "key45": "2HjbxEjW6efJjwaSqoC7xWdADR7vhPdUCvL2dk9Qo4VSdaq5f4yFnJUHU7MKHNoD9uqemD5B7UDTMVdVTdyrrdeD",
  "key46": "cMjsKR5BZeCu61v5NUMTdego2dLVJ5BNoMfY8kmDM7gwPuaX7d6sWEc5aH6Xvn64pcRMfcRHbJuMqf7DnjQHcqS",
  "key47": "w213pnMWp5XD9zsNzVMkfZYS1Z5iiGSG9LNc5RfUeaW2ivkCiN4kZu2TynzVEHrKucsRUK6azSRmLcgKzRAcEjc"
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
