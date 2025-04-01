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
    "5Yu9SKtP6KC5GcCg5KR9E2H3HdGnvbvxhhk6f9fVyjeawdJFSjLnYm4ypaqsLcrusoYKfmnfCEvnreyQL4PbjHrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJf13oxkMR4x9hpyRsqANuYS6vhk9Dt98jScN9DZ7xViv9ExYDaXSc1sdeFZhceMxkLNy6QQWsHssf9EExi9X1e",
  "key1": "5vkr2UaydD7riJ3WnkM8o3wPiJFwYuEA3XnVPvRSbrWp7ZZzbBQDW9VbTgx23uy83ZmRGBH6a6yySVoMea4HvdD3",
  "key2": "25KB2LCt7SvDDZxa8YvCfqeXARLdZzbibc17DZg292CJ2riYk1bpc2HQeZtWZCdjzoyvUKKnH6Yi7XcJYmhHXkQA",
  "key3": "gC4B2qvj6veq9CoMFxk1TeFpFBCKCFb9mmr93hKLHT2i1eYp1AnBTn7Wpi2QnGzjYE6H4HHwbinwt293GP93k7r",
  "key4": "46b8pL9h9tRXhPWvCU73V9hMd7L5gfWwAF6wacoFA8KxGK4R2ksrmE9RZ46fWJCViQWxyQ6yYGPXC7jwPWtKRGTM",
  "key5": "2nNe8NGBfPcjSeErUXndyD6UdEhRqaNhV9LBU7ZtZ96JBqyCfQUVg4uscK92AqcMwawwTvDcS8rDVEKYfB3QAaHU",
  "key6": "5xSWZKRQeNqStUtkJ1c9DnwWTKJYWt3AdVW7VJZukf6KfcD7fQzsfnwbSfkzb1piKjGbXvCXJLBfe8Sr5WQnqxe9",
  "key7": "5pF6rUim9vSKAKSZT2imesZPWRJBn2HH7gWhkvkgfURo6gQNHrPbTTtFKSFdF5QvFmY7TM52r5LZaJ2Dj92hDsFR",
  "key8": "wREXHetwzSDNV1kzian1MkZKpky5WyRWw6i9Ewkkv2tCNMzaKZdy9JbsrwF5Lgk1tCcPQFVBAsayynoP1Vt3rAU",
  "key9": "5rjsjU1uRgnugxxWarYZuj6PpBk2rK1qWhaF19LnXuvLhK5zCk7gkxfXBSoH34zHZWNZWqaPik5xQLmbMevQz944",
  "key10": "Hq5Xv35nVq7jY6GwY3fQnHbV4JdgeceMC9drL9FCincSyiW3TUxDWpFA1ofPvabEzDmeaNtEABhCUddqe3ehd9V",
  "key11": "5iUtY5apdFC7bfra7BcCBmCDhwoVx9yAcjeBk5uUA5v9qZeYYqo1g5Lv5LwYcneb7C5dbj85cpALdkWQqR4SQ25A",
  "key12": "25kv95V6fRzGpqm8UnyKbPZzabDyi8e5tofHoVJX48PH9kk2HamBVPE7NuvtGSxhb4EonvcQNpHyng452R5gZeWX",
  "key13": "3i9eYSHsSSpWZJWfV8Sage4GeQmvmX8SEi7biCEvgs7V5tjRzzxXJaPo2PCzpo8qQ41b2gwMuhKr7TxG6o2DEdrb",
  "key14": "3auZCCCRVMs6sxtSj2t1H9TydmsSYdyoK4aBfh9qJ66nnwndpYsrTT8FcxGTHJSr3xjx54TQ987AXbCdMznyZ2Lj",
  "key15": "4vxNorXRWABsTCri5cmP6BbnJxuGJ5iXJo5ijbD9qFQuqTChSS4KnijsgEpMQ4FMb9dbCWtpwYu4JEPw9eQZNtT5",
  "key16": "3fCGrSebYT7kHyHvmFLpx5ByKFgANFRxwU5nDn66FydLX67qDBuFWgPxmS5zpG94oa7Dmz87pN3xJMG1g5L8KbZG",
  "key17": "36E3NezZKq4HLsRfKhRdMWiq4b9romAoKkjcVeFZBmUSf18STeNMvot1PaFefNdJAnSCqcoZ6RE1FAdvXqaPmZK",
  "key18": "47EhEjifknbqtfKRRc5dMZWQyq5r6cCYbnr8wQuHnLgEMFA4kbn4xSAvvF491QwiUiQwdx949rLPbbbvs6usNgNo",
  "key19": "2VtUuDL7HvukaJAf1Bohz9nAJ7KVZ1WbdcXuRrK8RnpQYiARwrfTZNwG1j2pmKaiKWi3sUTEtFx8SXkJo1Ue46dK",
  "key20": "3gvq4W2vndsJoPw3d3Eaz4YEdVzhx1aE76KLxAErc8qWdy7MuXRftAHkPF1mry2eT7aGMaqU88ZcShi8Gd4ZHv1L",
  "key21": "2D7CzgV3RgytLiDRPhQvQarrnNJAc8y1ko2aZV92pNwr2ycAfmdB9m351bUWfPjnTzwrgvVukKugQ3TLw9wgHqje",
  "key22": "4ndpKGxtYjA8xoC64JhVTMGM7BqNL8YvkHb75Q2y9nW8oWqJFV2fjK81nXdBExNj9Ru65D1EbMnJ5vAPAeNSMaSC",
  "key23": "2pAJDqJTLtsqYrj2uVRSeNyWLug8H3yuRaE6UeKy7t28xazWAFae4F1xwVSnNaBFDLDSVrerUoh332qbxZHUMSuj",
  "key24": "2qVCq4byKXEa961gFTjgUEwy4FxXPJqS2yenj4yeEvQvRrrRJcLu4t71CFyWFGU7QkUFY8FUGJBC2AKtxcQDW5YT",
  "key25": "3EbnXtj2b9iyUQxtC3a79wsocEFh7z7m4AQuzV2Qt9iacaQencvjDXEXTr2BPQWpAkVZ1XZxBUFeyFWrZw4GxQBV",
  "key26": "2dbfeHpJMXwWfJG7LdLH8AzvL68pFnvjGwwfx6BSbZmWiCo8mCtxnsuZUEP2x62c1ySsTzH1GNsfKEhLCPnAUKft",
  "key27": "5QzumDdCCSf6TBdFuXaMXhe4me6bNNYjhYUBVxmhn2FDa6sg8mVMVcEuWvg9agJVFhaBwPVzVDaey8QSqs1CSa9L",
  "key28": "5ysaU5PNYHT4hcBgzNNDRLdeYSF1P6vXGab4wWyxPkUrBhVGjbn3sJ8UUau9d1WnTWowuAWNgMeZnJYwJRf6cxA8",
  "key29": "3dH4hH9xgMN9Eh7Vdh1264uUgLQdZt8eqMkvpChuhjzJ8mBakvNGYPvpvKWXPBJWjZ5hTqPiHtP6dgZwJ82xPXAD",
  "key30": "5gnYNTVEoRt3tEeq7sHEPbHyWc4UmXbYZzzBSCBzuYZTpHXpY5ZMi2fhMp67V36XdQA9e97pfpzGjddi9XrWzuMK",
  "key31": "4uhXKDg2in7Wj9jpRDsfXj8EnjVfmft3pXbiVKHtpe8MZSMh7UhS7rB2vRvTbLm8cPSC752GKsPuovxRvfJaSAkT",
  "key32": "23phwEGEnbyHdmqnMJ5dmZWvmyucu5VzFdLf8pSkrvb5uaUQ9PFNLBRFPC3HyWiPEd2YLejULNfwtoNvfi3zkMiZ",
  "key33": "4UAE3AcE5mrFnycQD13vFA8Q6FJEFbZZAmhAVzkTzXyBGum4RAH8SmdWB6rFHXRmy7UwG3JbA4Fsyp6AB7hXhZCf",
  "key34": "5VSM6bqKHbsRgeUHbpysZxQjYaqiKkYJyvSWHGdN3BspCN8WaH3wM1Ps54cdnS7g3m4HoLwC5U13HJqaJRqmwSFL",
  "key35": "37m4CDqp22GnzwqaHw2R7eYQz9HxBSHzGLFe3aajg8NaMhM7wMou5joQQjsMzNYdPLMAsGSL7tE8jZX2BbkH5SAa"
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
