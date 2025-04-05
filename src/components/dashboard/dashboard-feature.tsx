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
    "3zHWv83pMo69KXc6YV9ssTyrquwQjzDQW32b2xmeX9LPB9EiXVrk1EsjL8ifaEP9WZEQAzRzFipiGkqxJi8kMZXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qNJvNry9sadUFy6FZ6xWgnaXNckVyZQkXZtfqHWHq2yCx3GPzq2gtoMW5GRm9vBaDsrrnpjqzWZsWjKqXwqes5",
  "key1": "dQsDLxzPytWWjv9SyV8ViRmasMTNCxa6vEtv3oLdfJhVe7TFgaiUroCCGTymbmpoZfyqxd9VCoUgWLeRybJD9Wq",
  "key2": "2TVzfKACXBe8pCj3Sse9khSS9Tc4UfF5g1J4qjpeQwpU3zV7WuHhStDNryWfrQBXTmpUWAYdT7gUs3R1LAxPpf6F",
  "key3": "3vSCyZXyhx65wXw9s8xBo5fD9ykCPmobdFbtioQcwA8HDbuxaoSyhpHQbTNAv3G3Kzs4eg136U2Qq3HNSkmTEXa4",
  "key4": "5nupzfFVkvRNmGwBEYZN6QwTYdLjHci2wv97jpavJAVvQMNWjqjukinuXMtGdQbVAx72s2sNa4ppBgxiz3X3Buek",
  "key5": "4HWpQh82HRsqu6a1jHd8mDmWhYM1BKX7qDLNnCDRQFi9fd42A5zmebznbGtAfsH8h9c94cjvWQvn7fiWLE4KrjUQ",
  "key6": "4x3iqwXekcuWc3HsrMW1sTU9oyAiQ7sZYzRAHREApH7ajo7DqRmwHbyTAe9TwYFeCxsC5b2PUcZKwSXPoDonu5aD",
  "key7": "3ZEAigRFyYqMnCgPPT9cTJryfSXwjokdvV7eLESaCFGE9P9NDxPkciQhJtFzLi11MLMYStaM3qbGvNH2mgBv1pue",
  "key8": "Dyd16jLKAcG8UzMgJ7bA8Ukyoz2LRGVnpGmmWyYZw2vgqAkbbictjDQqVpt8FbPXs9hUHzEE7WJosLsnMfH3ugM",
  "key9": "3coNjy3RgQJTWxVHA5puSFdfUieam2C5yYSHmtZQ2hTCppUen5dcQgYqojZFBFz9eu99ZGN8jhBKBT3QvvcDBDbY",
  "key10": "4FMqrvKu2doZwkyKLDwpDT1RdjGaAhu2MxGHcukAVVEFU4TmNn4FzhNSGyTJPxrwCA8vWEyxzoThTQ6UaRuziAUP",
  "key11": "5DtqFSeGKwKumpKRKLaFRKK4h89hwBw51P87BvbWs4NVM9aCujstdZPKdqqYJ8tzHVNocHEaG3w1JC1VRC3W2Dca",
  "key12": "4re3J6QtRfhNqMY3rBXRGqcZwg3wU5VuKKUjd72kDN2r9j4VXcVMPh7DwyDvsPKvqzBfyQBSouTfq2NKTJwDrTgo",
  "key13": "2GKtAVEN7ka6d2xhgP981fp7DPsTbWwmRSF3cSin2XLJmq2WBF3B5FyR5HY7sMUqW1ebTVrzWDrRXKh28Wg6fXE5",
  "key14": "bpPDcqZGuJPKLvZFceMNCbTA9yqL2zBFWjm5dn1UUkB5cCAgGdu3c2Pyr4v78ne2gXbuvhoVRBVd5Qp5apvGgVy",
  "key15": "2THVksBr4QFMFbWx2vry71tLDXmV7pZYPVaEWk5JpHfcwUWV4gF2wcERtU7HfqXKnf3gcwX2hoLRFjQFEYiPnqHz",
  "key16": "5FsWAVF6vnyoxp22vDub8G82UXVdPcNQwJ8ay6Wgo84ZsrgxN7bxmkB8iuh17sPtPKUyujQccZ4cFpkXpqHYD1VF",
  "key17": "37eebLTcDBtK7GxEb5MuoV7VTCtnunuYQTrzpjcHqGGypKMjsM6W86fjqp16LzkpBq3QjJje3AHXSVrZZvoD7CHM",
  "key18": "4aGVsqK9YQzkZyN1g5Lr6MaUHQ5HX241JwpigoHGvVp7Ly6KRzA6wBAgrJQsD5k51ETQVarLrUu2jdjFtFjbTHgp",
  "key19": "47JHN7QXbx7YWgqvK2juWgA48zangZJFD5KiY8kKSFRfTBVsECZSW4bd11hf2VfP3qTThMSc4WeBzWXmPWtoyy5Y",
  "key20": "fZvffwPrb81NRtjomnEYTYdi2XDZQhvvrRHgYnRDgRxUVAo1cpUobsWkN19hDKSvQFKiuADfbb2T47J2oLnxs6P",
  "key21": "3qonwF6pr4ALF3DUJ43HhyhQvZxghoeEM674W93GqotZMJogSq6q2bqANGyU3BCHJWkwoD2n2iUvDPNvBXLzgc5Q",
  "key22": "2tN8dU5XXPaYKsRcC5Q6jLKUyZcon27A4W27asQ2tavReTkzCmvr1wZQfJrwscY1xJHYGKgQHXVKvNyjueiYUT5c",
  "key23": "jMBovqnsVnvREMMxFbgGw4LCZrrmTzZQXfiH8mWpUnrSHEfWsAGoPRB12m7Phu4d1ybmgfXAQLQNqzMtU3qAmUt",
  "key24": "4GAQ2AkZeT6tu7TQDbJU2QboMDK3yQ1UgsweWkSgEcyEHGXFZ6qHQPfYYRNt9kcRMaiKcEkDELpCg8dcHQ1XMY1Z",
  "key25": "AkkqHMfNHARcBWkZKeqQLDRzTS7TnA8fdLxnQUL1Xahn4RNWmRkGG6cEyjnoy7VkQ1U9KUZk6Lser52txsCSC7R",
  "key26": "47KwcXU8SARLL58QBRdRCXBn8b1eWDxSmiwtocfmz9fjENWUbx2g3k6K6yrPRAFGFvwtNTW2s9sesSugYtneXGvX",
  "key27": "2Xgw6D86uFPEVnvFefsb8RDSv31HY9FhmfM6HiiTMQM2xHdGoWvb866xYH7uhGUMgWW6xqMjurYowA8unB8SnxwY",
  "key28": "26tnH1xifsGutA2aczQu9sbnBNQgVST4dGA22TuoZTXFv4fSNX6NwYimDUhzka6c1UAtAha66dMeKeTb6fgX8DAX",
  "key29": "51cajZauMzP5ZeZwa2DdZrVBpcWP7kaUreMuujFhPjjKMKvNusWzn4a2sWqY6i551xMjpgvnEFN2Jxf1HHNgDm7m",
  "key30": "4cxaWoveGYBX86e56ANrKnJyzdBKgjGo6Jx3eozUZAhkxCBLFXijQ6WACCqVjus65NT2JVV6GNRfZHvi1WiZYhnt",
  "key31": "rwrotrw5mWZiZEzDiqeuqySBgKhK2UjRfz9xmzuhmjm8oXQS85vFHen9kkgfSn66kv9T3BVZHg3cV9V7a42raYn",
  "key32": "z6rePcDANfGkAmrZanyzX2ghzrzriNw5oye7yz3UXqELJXXi1W5D9ptofYUdTi3QXHcaeq1xkr6FFpABWkMe1zH",
  "key33": "74HoKVr8E5TdK5J86UxebQnTjRXr3pgLM7PpnwtYVvwFTu7TJLmFX1ZVo3W7cZh4VQtbFXw8arak7VLH9RQ2Dmw",
  "key34": "NDvfb7rnXmXks18G42HULxTxWap6soLd88vTW7yYrQSZwGrBupCUZyUrYfV35FsseH28DcVfga1v3z8pssQDqbM"
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
