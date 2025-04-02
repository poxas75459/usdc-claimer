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
    "2Qh7Ng96RhfjmuBQYvTPcEBYnLAdYMGK4aJTRaQy6EYcnr9zi8k7hPjsum1mH14mLMFrgx3pGMLQDEg9cWwhaTH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q26LCHHcxV7WL6PVF9Sb4ycbWTfNjeesVJjrPkYaVaJsmx7mTaVXxT8YSRbETGP2vQ7ZbFpiHcNJD5obRq8QbDe",
  "key1": "gqCqAJ2LT4RVmPtntSuw1ZN3EK971e7VLHaVisHXzCVYNZHr4EmR1NzRQW5eViuv2bbX6rZ6zD1giBjeVT7B1vu",
  "key2": "3sN8RUHW9KUvk3jd5n7hBWXNdGoCk5713pyw5Z7KeBG6NZh2sQBJnMzLv5AUP1ucCFMg1QWxp7aroYEQcBM7pNa5",
  "key3": "FkGJxUPwcDJzpkqWewrefzrTKgiHaUFSRYUAAe3ZKJtnMZpLADBi7RjpQzM5itNvrSJpXYMKGSsYai9wRhrgJDL",
  "key4": "35sSzR6hSfGBrnVbhhwdZvP8mTYHGaAftUjnXMG57UDhaMWTvCX6jhPdC3LWtbxpXxbJNfchj1SFFBfMRRwH87fS",
  "key5": "2y3DRraKxvuCbzCkDVjkGeYxijH8Y5eNFT1DMAjjwxuGAshmBGn7f6K4ztGREaJFfvgjBAx8ocC1SeaQTmzgfiP4",
  "key6": "5m97eJSMkDsYSvq16w7X3MYYy42M6uMN4xWhQG6wUq2mpRf2Y1rf8JEYdEaadt29oyaam97gnfDWUP6CFfxyjJZG",
  "key7": "4Sk76Lmwx9usa1D1mVopE2SBPexrpaptTLfs9dZSk3oEF3c8yuZYd87DVkSXrdQbgg9B9JNtfzZJKP2oxx3N8zga",
  "key8": "3duzVXQYUinc6RvdBnfS4kXXnsuw4jTgXNajJEWXsDfQyN2nB2hnozMEVEb4KmbG9zmBqakTGPm61bCVxaDusx3D",
  "key9": "4kWhvMtt9PyWHTyEYSDgjHevMb8tHVX3JA6Wp3bWiKzu8ayjUjoh9nWxyv4dsqtms6Wm8847Fof9NnVNGoGXcaH7",
  "key10": "2MFaaSwuxsKL8thMajgqCwbAhiR1LWE6TNLRv17P3Rz7KMw7PHn66YNRRZjF7ZA18hhGU3ggnKLC9mQpB6UDDRRu",
  "key11": "5gCA6JWrbNsr12ZPTugKRFRFenYThDU1Aroai43bE8rir24SkyK1rEETxdq9TgpbTyiYqB97t8ECb4R6jgpeJHN3",
  "key12": "4W1GKktD2JgERU8DSF9odPvy6rCK5HkTb6R98KSbMEEGp3u7j3uAga1HGyn8TAQbj8LEqWdWMfUZQwepCmJXx99m",
  "key13": "Xw8VxK8fzrYf3tfdN277yWibkpChvBHHEvRnVFqVLFidoceQHSrXFEgX2WY8vByvWoycZ4dWWcoHMYjM1Ppd44T",
  "key14": "iwHgpv1kQbEsSSbWK6kg9jTjo4y3ywXKoPCpcPdc2jFzbiPYVPZxCjoocXEr3bQLaGYWo6SdzzTBQeqPtvy8w8e",
  "key15": "3RxPrn43FjCzd3Fu7T1XV3mMoFX43kk2cyX49EtFX6E1XyADZbhGuPoUqnci5g4mGSAEfc4SBmsR63ehGrmAjnT9",
  "key16": "wUohPWmmSFneGWR1c8FHdYQRf3MbWPWARCvrhj2i5M81x6Q2n677wViv8kLU5NXwErqzpcZcE3rvUkiEws1cfVp",
  "key17": "2nNGBjjrLnUKwcX6YJb93AfN219quDdU3VHaopXGC3VUSxnHzEuqSmZgtjb7p8GFKSsek9zMrYxGgfQc73npnkG1",
  "key18": "2TYSNhqkHBh399nuWCDbvcJeyMM2rqVbWm8Ld7bb3z2LmYDeUiovx3fRA8UNsrbcokXvNFnEKQcHBspYZNDMvAKU",
  "key19": "2cwXu5gcTZt4Njo94s57wCRxXygWTdH9VVpffYBCp9UKvvLNBomaofRAr3fFCL4HyoPeLMe8hVZmBXeCvKuAfihm",
  "key20": "2FZehjxApb4Ak2nDh2buqBjbsbesCWdsv2gxthyTeQFkiLsGbK3qo4pDrJ7Sn5qCb4aySwhoRPj8q38SR48R3gyZ",
  "key21": "3eDJijkkAB7G1Nb5MTG8gJDeQYpuu2JfZLKzA4N9nQ4hNFtt6mTU5akuvVj7MT8hPqyiStpqxVdS2pDCyLPokq6V",
  "key22": "2y3Ygtxns2642XDfzJp6SR7A7Bkg7L42etP5ZeRgnh8qv9vAECCAL7Sd7apLYtEbXggPN6CySruZKVHiTAbLmonf",
  "key23": "3Gp81kYqGVLvHkcwpByGofXHiHHiRNSpQx3bLboNNMvRzLMHmbbYYq3S11dXZn66NrkSEK9jcaffhpTA3haKTnrV",
  "key24": "G6F2Hugj88j8brFC8c5dTEjCTVZcTyXPPvcXyr7DaLzYhrCVFBCbeZeo7i38qRRGNixzBz7RbzCvG8CFLCpxg6D",
  "key25": "4Y53simHshewqKcVpEpCyLTYrexnQvnwoNFs6QfpYqSHVz1M2BbT8KUcpe55f9HuavBYUUsihEresKDEJh5RHq6K",
  "key26": "2ZrDVKKjCLVBPmbwU5zgUd7WJ5tfAFsTMzSNnDBK8erh2tcHZFg4HiDNFF1rz8gN2TaTu7PycDfQWEFkS2qQk8xw",
  "key27": "2UeNHEUcZQLoUydowgibanTyv3orPsQQdgDAnmovAHvU7QjwdeTySjfgvzfwQWRHsCU5PxPbWJee4Zg7g7XwNsTX",
  "key28": "3XkA1xN6t3WoMVE7DMxrKuen5ztL1rgQFVDxi4VTnHzhPTzrurjfFKw4J3QzMNBmeXkZDF85sKowN7xsNW3Jm3GH",
  "key29": "5FFsaPtjf7pcCfZ3CtFSmoRrZxFq2kbEe5KA6wae7H1EfXrxX4qrskpASvzgkz6yN9zF6jSwgySbzFG2rhozrXau",
  "key30": "3Ri1WcjLG5mxfGUkU3xwo5yF1k759VxW1BcCWWHsU9CFxSgFaoHgJQKZnuCH3z9ZUB8T1PS3mFouLkZn34fwujjC",
  "key31": "cEHkYd6GVSY1g5U8d2UoHCkG8gtH5fJDe3fExxMkzF2nU711PC5P93jBtGE6JcuZiNfiDs9euJSqRYjQp853ypt",
  "key32": "2yyoU2AgFyFe8v9vYqvP5LyDzykzos3aUuQSEb1rf8fQ6PMuSzPAWwp3wDhaibQcq9rsv92s6yM9BC4AgxtVrDwH",
  "key33": "4qYzwxTEzzpnuMLKP1NPxG2xUohWaSrLmgwDVMZsFLa1TtJbuSA4n7bZ8Ew5R7sukBpwM8C3EkCic2CVUchu5FBr",
  "key34": "2pUUZ1Q7YbrFw4BekWnUVgotFvTL4ttmB2tFfTvyS6FNv2YFD26xNXWcMJJwTTnB5a4Z6eohYPcZnRuhHHHBHToL",
  "key35": "qVYdDdw4MTEy8r9pbvakLqP4wxkyeAATHoyvautYxR8wZuMaE1d3rWmtfKbMS1iCEJxAxzRrAy58ah1RHcx4Qr6",
  "key36": "5hkDGESsQZksJ33sazNJoX9orTpfmZdndtypD9RYTwj3zBRmK6af5d2QA2BzpEPxsYCgvEhzctPAhx6GiP1anv8M",
  "key37": "3XHFNhDiJ68kESpo8e7Gb26XMGi1pW8shdYjiwwzobdyNRfiAkEyLvtCKw2wR8kJL2q8MgVwVjXQFNTgmVwNW6Hb",
  "key38": "4RpzP1FaqrSTYmvwqYQPNv8AYMFfvrdZba9vBFQhwjxNz9iJ719EVC2o3Z7YbX4VCkoq8N3Z2WUQ2MZDVaoWSLPG",
  "key39": "hAXS6BgsRPECYk6bnVsH8pv7neFbhjhGLmfNzs827NzR1rsc4WXvoX2JhVHK7kZMD3LgdbA63zXS1nGKdtdLepA",
  "key40": "3c3TbNx7pDy6BNK7yJjsn9D3iz28MpcamNXGuWiB4bVjWxNj4yYvqETckaYz7qBfwuEQC2C3BBiTaLTq4UzrMZYP",
  "key41": "Pd8QFSbakc4zRWcTbe4xiUbQdU2dPDbX7P8JHTpxca3mcBDcYCRQKjb259mqv4KGUtFuGvP5ww7okXg4DV1yo6R",
  "key42": "65AbYcF27G7oZ1CCBa9xNutLkeEVTAuoGw73EVvSrUUdrktLZ3ERhtJn17bPaL8wQRJFfekBShRiLMzhefbKBjng",
  "key43": "3ymARrsKkfxAWT3YanH4Pv6finhsoVYDHR2qLgL4mZZDX6EvpCjVmTTe3q9yReEBftgQDnQrFMwF1oouBikSq6Fm",
  "key44": "67Bab37RNeNZkAqu9J9zneStVcSLYLcKd8M9miXo31HKTVrpf9aPN812MxaGtcejjhUfeFThL2X5CTcKMN1f3ohZ",
  "key45": "HRXUPomsqZpdr5dj2cc1jyYHnVfNpv8dyaYDWMyrMUJMHpEDDqdKTjLRnNxQuEG9S89skyCNSw1y9PZWKbmgbcc",
  "key46": "2ETDnvn78ZXuvexTJdanBomP3HEnRADvGMLc4J6tABSvoo8GqJDxm2ZdWJcDZWgDuRDZxHu58M3PK52JgWcwFCTf",
  "key47": "4A4PAHraqUWP3HHYjBCJrKpUTYHVhRT7FpKUNHnhxQLaDD42B38Nm7UacBx1WcUyp3XdfHSsrUHQXFWCUNwyB5Ei",
  "key48": "67SpFd98ARXs8ghqBk3FzwHH3jU8sYWN65HJ2GEKFAU3V6CiziiMGr9wV2e7NKcyrQVoLvPNa9KGk1qHmDgGnB69"
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
