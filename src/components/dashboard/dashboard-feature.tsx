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
    "2CtXnsMWGqV8qokjjKLJbg7hBiDEjTLveDaY5GaFdK55Qz8yNoPUzLzAyGQW8L1dAASRks6N9YrmM97eQBX2WGqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBukJUP83BxHz6UTNayUZCT3FCN6yLgrusbvJ5ep624XW2uwum7JWMKVadwkFBo2y2xL5hPn3rVpH6GwsUWFGuA",
  "key1": "WET6bAbPpjzUwFhJCYLAh1jym5jZmKv7u9WrNMFgGFLQPFP5nUzbaGXcjXTnX6Epi2MyVqtyT15DR6emrfWwZqF",
  "key2": "49kqpVSykxW2L2Lnyp1VzgHwPRYH34dvKX3caNqnWUBKkgYJ6BatPpp9pqPvSSiFqPaPjEmHEUwr7L8b1xLfjDRD",
  "key3": "3wVuuinufsn1vT5JqZjEWAinEC7tfL1tktVH1hYYCmvVazua2ShgNoMTUjTZCesbzs8yt16sjNRomgHM749Upyzz",
  "key4": "3LmqLGXGKbB6WdZ3gex2Ad6VCB9xbmCxPdMFVGa4bgqwojvVsSoEPJt7x54Jr6yV8cuEHxBsTD8rKrDfw8EzSqeF",
  "key5": "4VSnEdGLeW7eDDJzQJ9nKpzGjjxUUhGD8en2P2yhsdxro9eXRhB82ygMJy3kwp59R3nBREbxZ2EpQa9aiHAVoeqJ",
  "key6": "5DCFmWuzFKrRZ8k2TJLc9d6mZfKFN5ASB8fCrmaPpvT3qjx2Tf3FADVHV5JEqr6rJBvj2M5DmgKvzKQyCBWyhMVa",
  "key7": "kAz7iH4SXqQDHpcnsj2dm838YNfisz4YKoFBc79U36dLRoDr3PQDCypS4KmeubAUNHw8KuaMQ7y5fUXvPMFJv5E",
  "key8": "PXVxZyS6TesstvbKzCQFgzbcx4LhP4Qk8Zt4ukwLjXG61EA7ERm1k2qynLNtu5Gxhdgdj5ffqujRxWRVqrxZFjK",
  "key9": "4BQnaB5Tn5NPeSojkwgH3mhZwwH7nJY7EiqCHfQBiiQuqcngynAdm6QVkmA9doqJiwhniARVeeFJ5XaiMsWp4LL9",
  "key10": "3i2deQefzPNiVkGnvLWBgsg7VTHxsvTb5k2CXxPyubiHT8vNpeBPof6mmnFn5jnbne3Tn9W5SqryxHr8insFVsEw",
  "key11": "87bHh9C6zceLEz9k9rZEz18gFcXERKCeAQEccfkbNofxK96DL2hEjfRhihzpRTYbqBJWSsNoB5NwbMKGrYqaEVa",
  "key12": "4gR758vi7LebUgqsLfLjhASZgooFmF58QETKftQLLS3JBSBrXNsKMhbhphZp8QfUoLhUpmKY9NxtmH5yZfy1mSye",
  "key13": "3r5mLt9qEdVUjui63dK5r1fYavg69Ajt9RnpRWDEyAAdndQvgRZY24So9mHecpcvZfGcMnFxx71dg2rD3jeLvPXb",
  "key14": "3zL5bn26ycxKqWDxm4K9jGC8LfEYJ6TYT9ZGHaLrKTmggvD9rhFgxtTrFdppXLAZaU4SccsUAjLnxwCFdQKzQfkc",
  "key15": "3fGgC3Fgz6K8oCsLRQbjrBj2pzDTpckSRez2NmkaK3Uuq2ThYNxBgRr9ZP6LmJZrsoGFcCrT2xLq4VFWXMgT2MiE",
  "key16": "2x299d7G2abzLAJPY8QY3HtR4EJcGhM6bpgjN2tE5SsmyHqmcSXf1iiqCRhw3LYqnvgaBHHzUVQKCX7poESEXo9g",
  "key17": "2YHTs4F7xScDCth4b9dyQT9c5NQevY5AUPsNPhqrYuAcKVHhEEWbR6vGMhuauRYb72VhU8WHHaW5VL6QW99q6Ydb",
  "key18": "5Hj4vQMg3pba7j5GofTkmBrWP5ahtBLss8eLtJf5BgVTgW2GofSfqRF9Mmn4KBeU3new7CjrrQUAFc6QPA9rSPcm",
  "key19": "ZvNiwN4ekhZo1mEczkkjBhxwJPKtK4nitt8eHi8Ye18QdEGexgFnKwxGuu5FezKoB1iaA8u5tZtRr2V2bsBbWX8",
  "key20": "4Vds2LtZyty8mJYKSSZxXBpNQycx4a4mZPXj3p5jcdXdrZMxuXq6v48HhwcNB6c7q7diDearoSg8vXKLW4j5uXmW",
  "key21": "2oa26Ni1u6dBFkBdaPJSs9NRGSohrYZDdEn2WJp75dmmzeG8Goa3kwUHhnjdSTi7v2NPkWRRgkb3ELbYTbcxuVEQ",
  "key22": "6sSZT3q6MsbkZuhzhT81wW1NW6KL5ppLijdL7gtbDg141kSYn2tKzGhGK8XKUMMDPJTpw5CpMaDdaKyi2AoPUUw",
  "key23": "2dCE2Z5wVo2bpcjFaJbUkUdJFa1JYooGQ1CAdMwFtcTDtp22Y8BmFYBve4K4sqtT8AcEVEA9ajmrTzDkY3UPHP62",
  "key24": "tewVg1hzE25afKwfm6LnubF77iMYTUNWentHFPvPHwYWKKBdtpAXFgUntWnKLD3eVQWkagRCEv4AuqxdnyHzd1x",
  "key25": "2SL5iXnF2fFiwqRDFgGYCMke1zWH46wWQQ9TQG6sFUnA4QuT1HGhrQXhEbNUF4iMTi2DdU4eWMEdcHsGJZA7F6Nt",
  "key26": "4S1P7i7anEge1r4MiwsBYedYxLARQ5acMZiabMko3AFvYn7eDBVYDHXfGKGVmg4iPzkQ5krnRA9gY2z3dABNZkLT",
  "key27": "RsBVPaP4QGB4xbxk612GLh2kGitycH1v7HzqkAEogiMEawYu7SHmrKSYj12nXeebqHuTtwdcrdyn9oy52Eu3JiN",
  "key28": "jcMZyidyerxt6Fu1mGyjcckojiMwthYeGdbTAb7UY3nAzjsGpipMLPZjm26gyci6myU3LHsfMRJXPWWu3fcYAC5",
  "key29": "5qNnEVbCKq8yUFAcTMkh2Wy8YAbPAdRaAGibxoVciDYDUeGV81YJv4PGxybKw6utPxx3dMoh17DrfBw8PJKqVUD7",
  "key30": "5U7ftvwzbvwJGuEsohXn1XKszJzR6GV8Z4faEsEJaVDFoWL4ZZTnUbcosmVhccVHCBDW7Fsc24175vhhwmvWaAET",
  "key31": "J5RexoaF7dWJagRiTkvKyN1SyicjdUuzUAQx3iwSie9met7sm739btxn4upZ7wao65TvWpW7M3v7NtqbBkF4uHm"
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
