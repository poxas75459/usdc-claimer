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
    "5zi2besPsBd1XAngauAp6GekXwzepdHJ8DEyNC2Sqifh7gTYVvr8vwcye4wbSL9LjoCF4tCyFKxmBYf3jCCzVFVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCnMhSwAM7ty4PLVL7PfNdk6FKfAWcenv6wiaBSxSud476jWtCFUqrnCFbha5GFxvmyTim2PJjzmnYxWQBFgvrs",
  "key1": "2G91AUArcwtQmpXzfFE3eXGzDHbuy3iKZGoy4sFXYExzaR9hi8CnwYSS1qUADfBBxdw5ePCk2Xn3RYM7spCyXtsV",
  "key2": "2tWueprGxGGy7bY2vmWsVUYMfik3giMukwekyauCtVzQN153Ne6V3Y1GNZF7mhKHhPU2e2vgyTDCTZXou9zxk4wo",
  "key3": "5gVQtfokNS3QzCbSQ9ZUTA8eU2TT5Ymx14kRH7DiHL4TxtvDCY4xAPSjD1pwda2GBkWutTNeSiR7P4eMJ5XJU5Nd",
  "key4": "4Ef6KoBKsgfEX9P4yLR5QXhTFUUNeH1CEDoQU9s6FxXLYnZsxsKAv83FNDaLhdTXdnSCnu76mUmavuij9Lcrn6iN",
  "key5": "29mzBnisurHkNcGT8fskkhYRNdQ8ErWKZTEb4UATowjyem9vbJkTR9mjJ6u2kN3BsBSegY9TYm2frJ7j3FfPNeAv",
  "key6": "NT2hHLocAomYWgrv9ZetNjAao3SMfa7AATUaFH5TGJhXDnAZ5bbzCQTnBkb7ciEYpj5EwywQBR4f6Wdt4HcZ4nD",
  "key7": "5DeqU54MABZZ4oMMuFKfrF6H7zxu1NsAxvrkdGJVG9577SKZFZt35NAexVXEPge8gMhsWfwcah34kCQRr7GGDcbQ",
  "key8": "3gcDmNesBZbv6qXByE1uvRYUGcULLpcpBfbGgS2S38RSeMQEwArvhv7Yp5Qq7NxTiRq6BCd4BbegB8BnHCCDQiAQ",
  "key9": "2gBYQApzcUeUpaVCzS47zAAx2vpox1rB4r3gLN75DVWCqBCNt5bmxqo4XKtcNHB6HZK4cxx7PZgLWLbAESBcbAej",
  "key10": "2jv9hnK13xZp6RiU3hGXhSjBBCV7rchA99udQY3o6hGb4z3D15wKFqgQrEpzmM7Wr8vZCXqff24XgArsFd1HezvT",
  "key11": "4uHjUG6g2yyHuMmT2RCv4k7VaNHE2hBYTZ62zSEaRxntvLiBDNyNCVkasKd17biXBBMjNJrpak1DSbVYmmohtnZF",
  "key12": "38WmnUFF4kSPvMobGjXYwbuz6RFF75tFLSeXwxKYxDYjSeh8eSYWT8fRdkvkPiMfQjQDteL1q5qybjEE4gB6ERcC",
  "key13": "44aE8tg69YP94WqRKqsmFh9uUv23ynZNgoa2uWEW3SaBLigoDDFeVaRD5TuF48eh6agucg2n85iTHKnHdXvmm5Ve",
  "key14": "auNJvHTWQLJViV4pTbjdEuwi5qCCQav8hpAb2ZPwwxQwpnC8f4tNbZL4ESNTBZVhnr1tdrNTT8Y4oj751Rkdxfw",
  "key15": "4aZ8utMnXPqRyWFwB6cbwpkcBkneMwbp7Y1oPFgCAD5HjXimudHsfiiTbyXPJYV3XcjSqCLA3XydvkxoytNG3TrM",
  "key16": "3bdPPCtcNoYHoPxdojGycvZEQjvhzKHdmRLcfegYsEbxEki7qesUoU6o1Zp4Gae2jwuAykZU4FGeV5morpqmnUzE",
  "key17": "63PUcZB3EprLTfR6RgtoC5odTF4eGMBQ6DG3ZQcepAt3uXE7ufonFCR6sAvWMtm9thXRph8VktVVTEAk24Mymsuc",
  "key18": "3y9ZjcssBVFwQo5GzwkQU8pyXhkGDgqEytfybWuQ9ncapuvemSMa52yGJ7VzL875y3T8Z4SMspwtejX5YMkA1RLz",
  "key19": "4Uadd2o2gTYwHfAxT47WbkX5Xny4bCHVmi85S2WioWqBym8PbMsn6cS1fs42Tym28aCJ6ehV8DTsC6M1u3cgZ9px",
  "key20": "4soPKyhUzJmCgpQqaezcrDX6v6JcqAR8t8fXSZGxGqKV99pQhnHNux6MP3nNykSJ8u8ULjzJ4df9pRXZm7aHy9XJ",
  "key21": "5Xhj1vminvjRhoSCN742rqeZ7TzG4R1qEnAGEMoJKtPVkQ74Fi5QZ37Ah4a2qnppxc4LdRaiGEZCok5CibwG9g6Y",
  "key22": "oaAwXRvqGd4DQ9XVChh2S6rxpXPYgQBtLeZnQnYgULJDjja8r5TQ4Ngqwrt6htgVQyA6VinZL2kaHjZ2zP6QPtW",
  "key23": "5ej6BdQ4SwVbHvFH8hN17upcydQVJ6mnjnVienhhYiMt5ER5YujtPKcecBtkzbLzE6Hrfe9ybPKaLLkv2He1T7Ht",
  "key24": "4q4ZQdpVq3GBqXe1JkGmiRcDfex7TB8W12gCumbsTZt1KYwSTYDcgttgSBestzzvn9gDZQELhn7cfBy6dxoZrRhV",
  "key25": "WVP3snph4acAo3VLf8cTVdWFKh7FBAE5csFyBPeo5vxRG2V3dUiRbQpvRfupqziB9JLNiWUThV53NYr63QCpn8P",
  "key26": "Xzaa2vo5AJdusXjWSteCaueo1YwajvRxtYbdzSf5uXLPzfLNbGXgPztS5oBP6mbnvJE9WjUpstemfuvzHG77uqP",
  "key27": "2veq7mZeuM5NJ1z6fC9SY4TYmcG1fqjb7xmx5TDSRXd9eoF3aJ4CRLDTQBM5VXDY5R46gvEqdbfCfH6bbhATwQnD",
  "key28": "2AzkT1wViWZugfco7RYiuvSoNAsdm7YM1xXTJ2L3X3th6NnzdNsPMb79ewjNT89ADzSKB9ZzFoogLW7DjSa2qE64",
  "key29": "3DQh1ZWm1SntWzLiwdmFeR5rGw6S933xz49q87JoCPpyDwbGHT3QewQ7yZ7eEWwZ2UmhJmLJmXVC8kVUuDtMePqB",
  "key30": "wHquX6nrTPNnc586JVi3NgnBhxRMppfhvTXjmDKwMwvuS1PQP6k5pQ3RBkXNAaqhoJF4zEhZwYrRa4m4qRnWDS5",
  "key31": "53XCkN2uqsZ3Y19V81WDiSaMcowtJBcALGCQpqSJjyMaCEt2w3FmNiqE94EttB7wENTaR4RVLhWerWaJSo9qyzRN",
  "key32": "5S1SpskkwAxGF3BYtdrjbokpDxAUzWxQog7nCkJ8Kq1jJQ2e9xmSTrcb6QtsNuSJ7wURssjJEBPsex3oMLuzYuij",
  "key33": "5ma8wxfY6hbZgW1tEeqDyjG4xK2PsxT7HwfXGVfg8TDAdbbN4U2Q4TUXVX6gqiYnEqgKFbq4r3daqPf6Az52CDoK",
  "key34": "2KK8Q6hkdpMSYgAcHqNF5XavMGjFJDMgEhx3Kjp5qZYPyYv27Dv7N2CYdZnztZPHAQj18qDcrhcTiYptjBZD5kCF",
  "key35": "3KB47G3JCuTw6DnFTy5fNffNdhD6Gh7BP593fJyzqS91VUh9zLxbPd9fKvRjwd6TBf4XiE722cqTP22hz3mcL4qi",
  "key36": "21zwDX6CRzCNaKLhcaJPvmcyMxC2LgWG3SSuXQ8J9oy82v1Qu1UWXGU7tBMw13HPf2WXwzFMXuZrAiD9coyGsuXM",
  "key37": "2dW4NYg2MjPkNrSck6EvZphCn5A2BrruUsdLCD9iJcVXM7Ac4J9QFjmN14v5eqsB7c8nZxzoNTAVBHh3cVjaWQNy",
  "key38": "nrexiykNyfZitaetSqJoabf8z8C69528kDXQ6P1msb9dZJhpjuFUpy3Xr5j8fEZc4GyvfaaFLcqSHPDcFrgQ5eQ",
  "key39": "Z5Ekdh3wLLbcA9pkiDXbHM7QKLNwnRcqbmpBVW2cys7BRqFw8pwM3S8Ruad5A6Bni4no1cmhPiAibb98NPNux3V"
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
