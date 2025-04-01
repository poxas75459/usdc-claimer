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
    "5JtQCtPoT2oot5BnM9MmP3zKYLiQEqM4RxSLv1MnDzADVYUk2mYne1aUArmG8Xj3TT6PB89cEriRg6dNje4eCiNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QjvKFTkRanu2tEaaaZEk2HbhyiY874o49DBfx5MatDru7tekwXgguhhMv5qqfWMFpcvi96cthPQzmBPQU9WdSo",
  "key1": "42fLZcGLj9XFht3YtAWcjkyiTKjAYyJGKX7JcGHMvkDiD4Q91488guJWXoYupZAZNSNG9zQvUKRU6cB3CbJzWpQn",
  "key2": "4yt8GrkYwztXQ4ay53cJUMqqTxnvMaRFN3Jjiy3e2e8mkhE39tpuTuPR8gU1t5WcL9WCNdsWkppVUFZekZVZ7ZJ1",
  "key3": "gUtczWuPsS2BSfhZpVKmYJEndwvtZ4jFhARLdynUist51gQS12crLHupaJ64GNijwgBEQ9iaLRKg69aSEvvyeLX",
  "key4": "K84DPAE8AtqbfJpgMpyFKZHti4sE9U3tC5BK4utX7y1fuSsgsG6S6pS2dWPgkhhZa7EZ2qCxhSaRMSgYFxcsHgs",
  "key5": "5iGKynSAu8CChMSqAdfS73s7e2Kf9a8vgq7H6GsfEo7tbnReBWLeVfAVWAkTEr8hm1cuwqHThnnhLXFoYUpG9ozB",
  "key6": "5251cMo32M9tzJuLKnN4UuvUfEvo7pdckrCZzGQd5a84GBdDXsCJu9ZFmyMJTwgPUC1VBbX7D7hkvzG3K7oYVkgv",
  "key7": "56LAwUbp5jkMipTHjqMd7KijWrjL2sakeVXh6riZU9hFVRtmV9qMuD1LGc54QtZxBoCJ6vRWkv7rzToufyEQRxq1",
  "key8": "2PZsUDfCntC395tqaiZSBcMSgcydfac8vG52q7ggN1xuwx5CqwUj5odJL3kG8muzhHyRhEVh163KXHdbndBAAmnJ",
  "key9": "3jcp424Rs5tPXTPLmwqrWztrzgyvTeECiFkuUnFD8SaVakDgxw7NwwHnGN4mSaN3mKntN5Le9zJDsBQPF9CjLXEb",
  "key10": "EW6Qn1WtevDRDXQSnxYMTBHkNi6gpk1dGtYzGHqf3MjuEndggcGfTZkwefR5oFBL6n3fME1jnLzz5hj4vYWg9ZC",
  "key11": "2QvgtYU5g1Ev1RT8iey5aJqhpWEssaFPx2BtESs94aEbNNB2YggSQ6vvRiwB1B4mE49W2sPBwWNjBhQLM5CdKg5C",
  "key12": "4B1iGNhreCKJYdxwbdxYwvSwWYT9CT8Ac4Z7UsDsYxBZTPw4Locxk1P5eMwkdJbGPV43Yz1nBoUXNN4uAqsEg8gp",
  "key13": "3aWPmhvWgt4184XFX52v2996ejMPCFL4GNmJiLQWzMkjbMe4nkTD8NMjNXu4twBn2EwaTgDYpE7QJ9rfU8Vt6mVk",
  "key14": "D9yQHfCzQSkhmJg6vCCC4ra88zTp5xL8upWprocytWmqN6uLynmCD3DF1w4zYgYB8mLDoUD7155anaS4KDQH3mT",
  "key15": "5f9nNQQePXHDh58coMaKxgzHyVFsEviRMBtC5zSS4fhwD1ADp5TqwF7my6RwisC3Hs1qi6N8Zmw7ErhgqB3W4HMX",
  "key16": "3j31ghbiPy1qf13Xt1R9xEL1ptjMaQBwDpQcGeLCovk9MTsFWSQ79ToqKUQeeWFbpcp1cRfgCeve3h4AGfPuUWg4",
  "key17": "5Pt1D9BThtJF9LsorDZ4NevC3hFbZgNXtmWsUgMcF7SdA8VCbyseh2FPXDzY7ZviDtrYvJ91FxsB4xAard2otH7P",
  "key18": "3VrCLPPpxJkiCzZxNB2ByxpdoMAUjQB6G4RAn1iLAZaZwg8XFTpvxncErN4552aRMpTKeiUWSWjVHH2EQbLtvMDL",
  "key19": "5cBnCA1dk611WngbReNv35Djk4e7AP2d53WcgaDeFYMegY9ma1Gx1PoEaVKnGwfQhnhr7kz5ZVKVCXT7wE29rKPH",
  "key20": "445KNYko8VAD4ok5Pbks6VmsoUAZVq4Kgu2nKwp4KD1HsckfiXHstxA1v24e7vGmANssKME9t2LgJnVrkMX8LkTk",
  "key21": "1BBZ3WL6pj4T4SorBbw7P6obSKhwQsyjTMKU73PATDZuAzntBpcVdhiNaFMyv8rxEY6wxzwqVaGrTjzSLMN8dfo",
  "key22": "2TsSzSBkGtAe3c5xrx1ZuADri1ATGd5pENq2rBShHxhzPgyNV8rNu2VPBEUBjbaUq9gK8qfD2MW87rfybfDnjAJx",
  "key23": "BraCJFYF5z3oScskuGSYpbZTEZWHxM5ZcbVbQYxDWCVeu34XttwpXe9WuYkJjGE4Tvh8PnRr3tyRWWmEvuhcU8A",
  "key24": "44EmzEUKLVUpXdpZ76hZmFfjvU6hYceWNghmx7Citz3736HYZbhSF5GDTHa7kgaAS8gfoJz3H6rbW8EyF8CH9W7W",
  "key25": "f3HnPHwPPtyQPJikeVXBwxAVhDSsyXcCgSN1Q2LPCQGfXLmKxgUvcGzmMzh4cdmaQtq29hTPVdtTQxEQgqbG5X4",
  "key26": "112QQ68UPrZsQL4VcPqc88tEaxJSUQcQpg9Dj2cdMRrbSoSwY1hyS5xoZX7bZxQsMp2T7xDBVbiH2CD1Ukn65hM",
  "key27": "3eyysg4gPP6njvfU8StgcvAPsnRSz7HK3x98DsfBfUBx6gKFhNr3Jidwx89yJoHzLhJcbmE2JAZL1ygWy8tfYkNV",
  "key28": "4uwp9ArCx8QUyzrnhhwcvQcKTGSkme4nQtHRhczsHgt43ZV7DfhfWdB1u8dvbJNYHXJfAcjQxYg3P3WERhpdoer1",
  "key29": "5QrdsnDXvizARkeiCtDh4Fr5coVpXivuFS7LCQrQqf64NXVycuuZekgEb9yV9Sn7sP3iDfTMhvesP2Ms9jEW5oph",
  "key30": "41qdtM7WZcG4tgBF4dGj5TMVvb3iSx7ANHrXVwdkZBwpbwQVTspLS5mp9xnSmFnm1KJ31qvxkVZZCGZTGqPr9wWA",
  "key31": "3jLvfQ95Puu2p1kjMWZGHr66zvYBP9vVWGpf9PJ2tpMGYeU69H19LyvWfA3G3kSWCPJeaZLkhamTKqUSWZr5jgsg",
  "key32": "5tZ3cLbDWE9Qdt8bT3sLkfFAowFwFEFaUNHzN394dq7A8Tcsw7aGYG7F6hE4xePiGUSuoyPgMevpXCSYff9gVcMn",
  "key33": "3SMJNBrcCSn42fJ29XGDgm6FMtcYGj8riixbfhV3KGGANP3THcWrpWsvLLUVZRcrHoPSjRf97v1Z42xErSwS48fW",
  "key34": "5e32rZfa2BrHFf9ZYjJP16wMdKRvoxtzJGi4kJAhWjx5gMvtosL7D5zb2m9wtSLu4RX9uAeWKAvXiUhCaYkdPnAh",
  "key35": "49yohmMaN4TXaztAGMY3LpqnEzWpzD43NPvAyavgLtAzZSHGCL24czMj73dxaWy5fKbxHp571pEDmhXDq6ESRL3v"
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
