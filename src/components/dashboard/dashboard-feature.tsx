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
    "52Mb3Xqocwrg83SdbUz2vNmiTuYDoLFhfua3HDtM7xMGiwZTJF4xWLm99XA6X1og6o4WDSQ53b56xumCkh1niWE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfVXwh5qZqXvayhTzeibDT7pj3aMaXoqn1EN6dcYKweFZmNQk2MGo3rgBKniW1Nj1uCmHTNxZtBZtQjmGSvsWKb",
  "key1": "5aVmqpDoHhPXeYAxA8KHV4DTczS6YW4on7xD7zwZmTQ7eTYZ2X4EMtJAy1TEumB2iAshtrZn8E8YBtYut8E6F43v",
  "key2": "57Pjy8fes7hhfWsd9eR7svQGM8CrGnhHmkaWjzfkF1Gtp4jfKiBYmRShokHUiiWr3Jbeti7w3FjAbkjEQfrmmkQR",
  "key3": "4tUJJshoxZxvk5KgibZbag7ABcvyi6Mw3XNJrwnwwH8eESk1TPRr9GNbryzBZJVmes2Ene2v2dV5Pt5sHTKmHw9g",
  "key4": "5CsFiGnbpM82456wPhDBSrMPp32fqb8DXfcQUQzw9qfin3Sjg5cKzibdTXSstxLMxw62njv1n3nMMGDSjJqwcZGK",
  "key5": "4GNxNyzNsA5pA33SpTy7NLMxt7WBptSJDaF5WYNf28CapKRUimX37pBmYCQDtxqbb2tda66v63EnQt3MyiYQH7if",
  "key6": "5wr9Pr6YCYcaqGWDpPtYmDfbEA4hW6aN7AJb49wxHwuSjskYsmB58sQ1L3HxYxKLEiofEKzGTTBwb8r7ECGbQX11",
  "key7": "3xENDkt9ikC5zccqWnxVYpJMLnDQT5mxmuQUfbX67k9GwKhJgL1Rt4xhBbokiWKTiTsrDa4qFYSwkGZRjdwiYiKd",
  "key8": "5yr6EwZevxAEthq29jowdqi2BBJZx92TnmswUhYbxEdcYTBHDmqj2U64WWZLwn6skxK4BmvZtJWbJ84SxvL5LtfN",
  "key9": "3nn8YqC71FhknELvRkPoTWTMNUVZeLaqtAMdPiW6d9oYD5yb27H3vDXp6tNTHwrM5yrqmJ3Fg8mqgNSYZzzZVe3B",
  "key10": "3NAeCUoXCMWFNvdgfkn5hizRqLAgdNdPuSDynF69Ztei63765J9s5VnWHcL2uTQ8Abkh5wcmjHZMpkCns6HYLmj",
  "key11": "5uQfQUMA1pioonPkscj2UqYPHKi8bV8K3U9TQt7XVYskkhzsyjchFMy6CuhvZcTJ3WwAwVP1TXPc91ixecKhbjGc",
  "key12": "5HNHhCz5fRq9L9Gog9HvW3pPNbNHnVDwR3rxBeLe8boD6n97HYYYBR7YmTfZK5C8TiWwM3zjNaskfQ6EfThHbE4G",
  "key13": "5E5kydNZBmiPJvtTzTZBoimqpn4zTua7DZ2DAorwgfS5Vh1QxB9wSfngWmPxZCNrcmydsvUWLddMyf3dhBAJwLMj",
  "key14": "3oowANNNftGehjwwEwtSFK18AjW8CEtG4h2YRkQZrchypzS7FvYi1N7YsMoWDYnSdQCFRYanXuhaymi9c7GbNf4K",
  "key15": "944c3oqW8X8XV6N1nN1k3saPFEgpPMPTvbVKDBqJwmpBH7qzzkvr159CLoqpiXHqdyXY2WQNQ753eGqSMnNSgfw",
  "key16": "5uEbsgwMcvxUKoKhUBeTNi5eahDNuRFkZLkVELKAcAH7cD4CFBZs9PYS9kE37Q1wUZDLZyipsEkTksFk6nFaEaAb",
  "key17": "gguHoAMNVF4rkKT1dEKiZzJN2MzVKG5ifWhdmQLPoSDHg6WYcYLT4aeHJ2aorCKtCfNa1ghShjDhS3w9tXjroXf",
  "key18": "3G9yUcdP1ENZjc5uj7VNTjMm1DAScVgDwrzGBv6h1Sc1KVJfhqGX6K7hfHNJCQ3kkbFw7yF5ybbKME1wcYCpsTqp",
  "key19": "5w3vFxTsVNLC3Q7ocSGcZXUPsXhxTXcM5qUyabkRT1mAZyFVsD62ZTfnvDwbWoUL1e69RzeDdCemS2JstyHYYhJo",
  "key20": "4J65R3EdnDjbPFbBGrBw8P2jEXmghnnBTVD54d9dm5cBDxEguYVWef1n58yz13fGY7nfhNJZ52MVwyRfoStB9dkH",
  "key21": "dt4Wnh1RiypzKxQVAPg5SGnBsCeoi1LmLdWnzrMBdettXsaXnSzM7weeerFdgPL42zEzAvApgHWon2Xm3X24HNY",
  "key22": "2uejeBT2RAh2CQwpjRtS5XyJMvnjT762QC7ZGYiiakp8kZm5Eag2Acz63YEEZfHn886diqcBez346GmaNzkzaJKN",
  "key23": "3a4APakLQu7heR4aqaDZo5pXM4fcfS9Serxyq9aGato81tCEjqZKuJsxQhjg7C3UR3XHFrzg32BWYeUfexZ3DJRN",
  "key24": "3RfJF3Q1hxCgySSs1CttxiBcK7FG2chvyroF9sm8yJ3uVpvTfwbNVWCUzHw5VaU2vDzuSePvHCukLkGFAsX88Ap3",
  "key25": "5am3pm2AzdGPZUoaooMTijoM3rN1zxGb5vvanztinA84QtsKSE4sbvE6Wweym239ZGuuBmmueyQptLiyMwwNKnqw",
  "key26": "2mx8rBeeiEa7Lnjw3LU1XnkusyFEthMXmv2ivK2t6SBJPF15isZFv7K5uUz5Ek42NLiVc7cVRw6BpPyXLxmYNE8W",
  "key27": "2UVu1LVLM9Uib96BBxgZ7kfmiVNcSVXqBh4UY2HBHPkuVQc8Bc8A43gbtTYBKyqgNUwhtGimCPjgqbcTmhijt9HP",
  "key28": "3Sp4tML64vS1CuWnY7vE1irNWP8uQCoddH8YpZDGDu6aNE4axvLRWnz3qwtEbdcB9QwCBjvjyBg8MJprPyq1nVUh",
  "key29": "drVxxJxhRtCM3Fdaaw7Yx769GuQBEA1Bjbi338XjigPYTJm6kjXQRY3so14vy887LEyqKnnGGg2Ve9kakjqDXvx",
  "key30": "3JjK7SUh1Ati9XBFY2Ujp6AsJ8fyzr5ZFbNHUxrYSBeZTqJpgqpkACtPMsHH3iDRkNB8ZYSyz15CuZhXvZH74WxX",
  "key31": "DCBwTG9UDuDNUfx5j5xARtTsM5RFoq4joJbX72qzcGATDdSFLKGpwEShT1Ymi8HBLPtEAeJPELzRfXgVZC86KMo",
  "key32": "2EThhQ4VAAtRc2UERMmktcc1mE7gEkrAbqf1fFzbFksUjTGVkpWp4CPMGPDzUfTYwarGEqxWymbHEsrjDPGZnm64",
  "key33": "2XG8LR9x8ine8CcdjVTN8ix4gc1AubG91ZWe9LTKmgXAVkaxFBp7XN7zbKQkhb6KdvnMxJSGQBseg4Qtz1xMbbzG",
  "key34": "42XSmDtDU8YPGD5zzkhUPdfJ6g9mL6sG7LwiLLZADw8oyCAATw3QkJXT9PzrLxMuYfQjUb7oRhNqnFd3vQhWTuT9",
  "key35": "2u5kJrv2B7Zf9EGcHmDaNrvT3PMcwHSKy1etDJao7aUhSTmGPLGXGipdGoLU8KxrGxd6GBrZvvka79w4picTmUHd",
  "key36": "4oMzCRXq337PJDMZqV9C9R65sqeuMceDRyGLkZoDGDHJjAKTho6xTywo9ve9jAZBKDAKJ1vK1pdfDMHa7KCk8rD9",
  "key37": "2JTwij1GtZNK2Jz144LW9Pao57cR4zCYNzFkempEDPE9BcjNcy5g19hA2eebkqXpUWjzaNyHC5xtFGkU8yERgwgN",
  "key38": "4BLbARkbRiFETi3jiVzALCR8soKYkwZJsdQpP7yMaDFwh77wekRCbqi4ynmicoc9PXcvAStSphfNJtw1fUNLLkox",
  "key39": "5FTcfY9b96HL7DPZxqZYugRXkJN9s4C9161SDm9ndb6pebJ72Sx9LBnBGiF813ZyhaczNfaXS6J9U48czkyCVSKr",
  "key40": "HRXkFcrgM4U4CWBrzt6k7SB8LsV7PwBDwx4fkf5sFDnNuH5VAWLHj1jorLZ6dWtfZMvqtfQfFw7bBmAqjZbqh37",
  "key41": "57JS1ndMfWsN3ijBJgF4a9FBqiZu9tQd7o1kavn6AydKn6QEFvcCcgQnwadioHgRD8TFBNe9AmnSfiVyEzSMJjvt",
  "key42": "5juhmVKtkfWdSVefPiMuDaLJeqdWZWSWZ5jRsgE2SdGtrEwKzE46yJAJFMxduded5CeXuW3ZffhxQ8iePzuv6uhW"
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
