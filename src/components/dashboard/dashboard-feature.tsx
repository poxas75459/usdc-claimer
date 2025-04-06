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
    "5taYnNfuCUZVRpwFatRYBa6DxJnZ43W3X86NTEGuEGx4xzTUuQhgpD6qfMsFSy3pANVNXr2LtwqNXKvwQsVqJWjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6mFDn7CzTxR3Q4k1ABnmRvkpGsQxzAby3MpzdvXgaL5s7DjXg8bNEb9iobLY5PW1erogdQg1E2JyuYo2FvHxeL",
  "key1": "4zoRRBdrRLvzGYnS3Pvs561V4GxMawv8NfYT1MRq76E7zfwNaisc9dpZYtkhGFBjeU1kHbizthTEuUvutk7GcLca",
  "key2": "34RZJ8uDnAUMQzEDHKGDCG4cPe3e4AcpM5cQzFVPhtfmQhsjHkYhMMRQGGk99E8XNJYPF9NgLwcXaqq5yyEJWqwW",
  "key3": "3W4M7WQ8AAWhrsDzSPUQm5GmJmGDLq8Mv2oEmCcCwKcRPP5kdbqU8dcFG3usKHqZP2M5d14WLV4AawQQ2ZU4zvk5",
  "key4": "29HHn96wftvHF9x25HLjrPtizVFV6jCMPyRDyZ6fLLqJJUNhyuotu9qN18RNKL8pFJPjeE33svHQyD7RJa5SFn2d",
  "key5": "2iUCyWnNRVQrYZ7paUiz8ppiVKWwSF4yc1UZn1EBjocU9s33RyWAcqssSaDdE8Uo3sb7hCwyKXRTFDz4ddqCTqXe",
  "key6": "4MPJCErNBbkwcv3fG4gNZnm1ya4eFdJnb9cBg62yx45VMjmZtM8ymVFBRtAgF6dp1Rg8cceREEx78LHc3PxUNWaT",
  "key7": "5FxMPwucaUcsk2V7eth6xPapCVhyfB4XvkS8gudtueMToZf7wx7VaqyMoidgh4nwi9sHcjd4245883u9ow9gQKbX",
  "key8": "43Ti77HZBXBJbRTtVK5tSbbwyXdTTt1wbULhje1hWdYmrZsgZxcR93H77ETs3jjABCGB8SJUFxHzwFgYituD2Rmg",
  "key9": "3zGcoPAa9GWv4qiLJFVL71NGKDG3bYz3xycPzyF8p9ZfTi2hR3hcMZuCufLktWyxAsToSbdbYoP9oTCLdfn8ujXw",
  "key10": "2DoLP9jHJT6jHkGTjfoegTPadiopGjNB8gLA7GeeqyV1Yc5zUMDHjWAwchwgwzAp8gykA1CaiVdYeCzBVm3UX61U",
  "key11": "32bQMyyijGMHQQ7BgXLKBwC3DCSdCa4qC3gvPJUB4hmVQEduaZ1C77P9roKPSRygkW7XUUWyCAsN2jBHKFSQCAxN",
  "key12": "3BRv1NbgpijS2YmHVBj2MsqwV7GKELg6JWHbxwKasT5EzcWkVZ1CqWr13zfrH5uTGxraNS7KoqnQkXu6CHRcxFzH",
  "key13": "2bnPKuHFqURyDcsiEXjjCZcT2ezBawHjtt9Hk18Mss2M3Tp3PLyLFgk8pdL2VUU8PCeqRPEqcVGw1YGhg5dwuL35",
  "key14": "46qhJjL88DyNM8Cvj8aYHdx9Kf35kku2Kx54Mbw7Kn9L8n1UNeLTMiwBtPjHvwUQgJTMQD6xxRcjhg83FuCREhVi",
  "key15": "4zS9xJ8z4KhtNzYm97C39vznEFoXJbeZfLRiwb7593dKsZfPyzH2zXp3BZZGdA4vaydkCSm6tkR29CkXDGDBbVYy",
  "key16": "rKb9uiuWAjubYAoXkDvcNTvaJi8Hu2XAyuEpWZvkVTWbCUpuYW3R8MTQW1LaNztdr9VMofMGbinh6AXUhcAqMuA",
  "key17": "43GnsnNCSWvuzH6gPodKXg4xMhTHPDfxqCuUvJKUSQJjQzHhGvALGqJMS8AvoqmBZ3CcKtXJegnXQ3cA1WgKpBQs",
  "key18": "5iZXLB1dCMUFE1MLth7WKsgjdsBn7BbpJsvUDXZKCWaJ7ULY1LjuYqXizBQQjyWSA5Ehk99PhWTadUJSfLeJSgGu",
  "key19": "5DEPLcLCgS41gEKSBC2uorfgh5r7ssPbs71zcbyohLpLjWGG1mQsBMevLwHB71oj9ELdhZJxD8YvDMQ6c8ECRC9C",
  "key20": "5xNzhRUTkk8BwnmaYyx7PyRTwadWr4kpXchrrrRPoVskRNDdtn6CaYcqZZNgeP47628eMJ16trjg4owgevEuH1EL",
  "key21": "9swSR4Wzdhm33K8FNhDqXYMNhcMLY2UGwmoPVa9tpDNT5fEuz3g9fkH1i5VRbu3vWMHQa2Cdc4Mraheof4zPPAi",
  "key22": "5rH3HUhrZT6zisqBRBMEdTR5mReqNnMMvVpZmN4Q8dwQAXYCjHtsyTy3RgcwnYqnLPYovhLRzivaKwCNpdX81zAE",
  "key23": "2UtAM6jNQz3uczRZUxTVVhbezMDeu9CbK3iUvsnwFh5GkvVHbC7kL7EVRTBRpteWgH9qk3PBQCnvcfSgvKT6QPGb",
  "key24": "3CWirXS47HQuh5n99hg3KrN2ctSXnEgJiypdkxUWWJXod1XR4WMBkkcJm7CN3EsP5rhEQDR1SBXc6HhWMZWmAaPA",
  "key25": "2kEvCWVYEu9VYRVHGaCnozytAfV1drReQFULM2sjnpNiy6LFeUtcqahE9tWpMGmGsTcUx4aXzHmVK6rK2uerhjqc",
  "key26": "4YkCBsFzDHoMshK9vM7zMa43HxnsFJWMmaN9D2v5JrzPQswhSp8oq85wfPUgdXnBR1AWnJjYsuJL5jRQRxLptoPg",
  "key27": "KtzkLcQ2bXxR3U2q7ScSW5EyNa6goxavfdyk7qsWZSsCwi9kbADHdSQvibRzQLiEXao4cWP3h3rvdvGou5i4Efu",
  "key28": "N3HjW3AGKDrMzMDJCC5S4qjC4SELcKUjKuLaSJ1y18xe6Hh6H718TuMeuzHsTAVF9hdoXnuL1f8QSB3QuG9rQ4c",
  "key29": "5hGyofzznjE9MJX6WMfBb6otJ7ZiCqCLEJHwYxeTWGtpKK6VJjgBAQsYc4sJd57uNny1uqDXVimqzC4J7RqgM2b8",
  "key30": "3wpAaafdFVBCTQPea7JZeEmv3f4qDH7qnAS3QK5gtQRqoCdc3t5LSvqno1gQci3WWKg4t8xsVX9oDf3gyJkL1dGg",
  "key31": "2BS6hD18kDHkuDainwdR5w6tZkMsuXVTjKHAYErT5FWuVzKmeiBfX8EjznPRbUkTRzoNSi1HncqvUYuY189EPAmD",
  "key32": "2TEF8iMjTwVsjyX63zCvHn4WqFmwUQq2r9Y3hJhQgshcCSZ7cr7C3rsK1Ceha6p99vxZvRefYJfq4DB9pSfHnqBo",
  "key33": "3cpUnnCTiTbr7qizRbYmRG4BWhjym3rP7z8WSAfN9gYgnoRbCSFnkD84NbTgvs7L2VcyQmcZyJQwFsj5YPyH1A96",
  "key34": "45vErFTadUFKxBBdguGMkK2VTSD4wR45mczEQS4An56uBEBZSAo6LtYkacHjT9PoKbr1ZPGK53ZPTbx5khwZJgz3",
  "key35": "5mFKcaA44hNDFjsKjwr4AWwpbjbS6DYAma9jbYzW6CEPgEgF8oWDpExD5rubGmewXF4DUaoqSAa3s2iq9rw1qy6c",
  "key36": "EcnGjEfGwZ79pVaENb9Ur8sKtmiATDik4BC7pUBwtyMxovLuR7Yw5WAdsjt1BTV288KpPotgzw7X3xg7sB1o2u3",
  "key37": "67XxbiZ44EnZdHPmpBPeW6NJio87S6piVUmTxHDUiSiu9bAtgaNZMcou9jrb5bMjghRoQVoejzxmfKbHUQH3V1My",
  "key38": "2qdMJfkNuZQ28VnT1w57TSQtJ1g28kcQW9fLWob6VBe6eAAXEoaZWXxc6duE1ShPTv8j6xvd7rXTfpFTMMy6LPES",
  "key39": "3cAVT3uTJDesCFUN1b8fChDmg67GiXzxPLbh2AEC8NcomC25iRc7CpgfxZf42LnbtLCAMjA3buHwsuFUEKiG4zEx",
  "key40": "2B9MripXzTw6FG8yrMY3sjjFxVeRb663BbvrLxrjZpLNnP7ZeUawKzhPPf1kDuY8oA3rZsQYq1fai1zJkWhW9qSb",
  "key41": "51wVpeFKUvoA3JN7eTj8fNye4kUuJkDw6Csh3G2Fq1izwksp9sJUwwstLhYaLTMNv9qfGrjCCF2iJJ8iitVX73YZ",
  "key42": "nZNkbr8NVUSQaBChDHWz9RnwcgmuuXrNo4inW47d81DV5iRjW7pzWwwXM9M8mq4XkRwLfXzxWrejFBDGmsXK1N6",
  "key43": "2MDBUiBireWgGumfnZjjANRpPnqYFHNfofbCWzEbRmudWvzd4UqLTsaW3PGT24ZBKtrhCMkrDQmXeTJDofzveR9G"
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
