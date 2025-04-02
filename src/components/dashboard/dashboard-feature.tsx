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
    "5qYkdvy1fw4AaFz4fo5T45Vgq5j6AQdaGrwNqdCrE1cGVweY65nPUnV2Cr7SWT8Gbm2jAY8cBicwzhTzH8cBJUtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pEdqxnrAx78nBumxyFePyRL6anCSQcwgDxv3Y7hsjccuPKEr2Tv2YEqoVyFYjRPLP6jM3VuTPWqVT3rFRkdvfg",
  "key1": "3n4LpLc6rAQQQSYwC3Xo7mRjNsCASCPcsjkpdGLMnix2bkf8ELGF1uChYrYd8tL7N9yRtpB2nA6ngg4eqMWCP2LH",
  "key2": "3tHsDWCvKfw7GZFAuba4UKh54zD4NtsHpyxHP8RJwsfKoZ4qZvhWGTwwUX2z332KuwDRxomkTNBTsxFZGAyaL8JE",
  "key3": "N9ce1oH9xo4jqw19mUN69YxfUCRiLNvnbAqowm6jCC5jpLRrDuSDHLtP8NgsU56o7XVtikggyc9uQVeeJEkQdgw",
  "key4": "61diWmGJYsBY3vMPJCkhmKSRdFNm5f5Qqo5uDU4ZaYoMquPUe9hqfKz1X4Q17f1vnQ4ZHonEbHA2fJGb2iLkfcia",
  "key5": "4PWmLi2gdRM5cMXGbZ4keBuhQpFKvmtWq9DwZZnURe8zVfwaNM8s3Lwx8KXYMAQhCiyfmqZqbknwYKbFCSJYx9Tj",
  "key6": "2emwzt8nE5TxbfKDocoFdTfmtpt1uTRkwtHEkd2ucGUwsHM3GXtgM8a7tcdmQH3PTZXf3aiFXmThNXui44exMEyq",
  "key7": "5A28RnWpt7QnhV3W7KZsrbasriJUN3bPAt7xAHtv9S66E53yAckXSormkTKiCNZk1WA3ATZjP8AciX7DmxiCWSyL",
  "key8": "4smKdxgyCBFryjFmrBC4Q9CLx36epaTrxbaMhZVAezxTaiqZphUs5gCVccUUcaFaXzZ5U8UAosRWfHZCwJgJdzhB",
  "key9": "3WXMgPJZenKL2RJgXc47x6tC7KFYTcvM9bW3oxn8riGHDA9VyCDFtkY99fGjKtXW9SmcgRaoCTmuAiAcRpTSSh4s",
  "key10": "5M9SeGRqRGotqL1ooEM4jRAvswFWzMjonnNaYJuU5Q71eMUjAVh4qieJyiSWx3AeMvf4puGG9pV7xfiGTK4zVeRH",
  "key11": "5tHDQazWAFJHXWHsqT89bMFNaxXX3wAXT1JaVjGJijRLXdbMNt9mzLjSutc7zeSPpNaW4STfPThYkWBTuipBod2",
  "key12": "2rX4pHTxUzu8np44Dt35wMvT5mtijrWi4FC2w1W9uB4upqsEVvws8cBoC4VvpJ4bdCr2gEHqJrwpAumvkmPCzpM1",
  "key13": "4pdZx1P8BeuX5gHJwJZkkYs758nnbNNBS1nU1Hesg9z2NL1w19b4UzA65D65JeFPEhS8zYf4F6LvKDfZyrBpf6fn",
  "key14": "4FNpraPoE6mmCKT5thSAevLPK3GRrm29FpkvmNWcRxPBjH7fcqiiTqKqyLJMBFZ2XE2dVtpRXQSaYzUTUGDGADbd",
  "key15": "5UUxzkQWmbfN22giEKmEbykp7tdKzw6eRZuaQB4yQgw37WKDMxNBmeMqLCwqXgUBNoP8H7bLaBTcW5rTD8qexV14",
  "key16": "23GZHKBXQascvwNDsR2XLbmW7ZNqghy6iSEFDvktkdDndsgMybfpZfU7ZULvGyPHtoNG7jxgZ2Ui1qxAhXTrfdwh",
  "key17": "2rRquCyQEsTNjDvwrGv4rJbvgiQKZMoYKocHqJPyRtNcL9ENRXkiEtBcHexPUd1p51GRwHad6CyNrTLUfAkc2z3d",
  "key18": "3cFQHqQgtpW23MtibVKHpSnmnMpFdgw6ShvNaJdHDTWfoiji6UHCjshLjcu9b27JekSS4NBwmSuAzUVeLWR57j9t",
  "key19": "4BuCLaM92di1Nh9mri2S5D8kn8EYzh1wbhjKihKQVH8ZyvbAzNAVGhQqZVfsYm4B9Hwx3mCjaFNP4Ze9NX7UpYva",
  "key20": "2QYMsSiSKeYne7jtLzU4gYw1DGCE3vitJ6msX2BVKBA4JJVskZjNHJwqUNS8mFoS5Y6uunZ1k2vN4dc6noQGFNWV",
  "key21": "2Jc3jzJ3cjaVfMVGV6tmnxUEAeF69Ki4tVeFjrTnxddsjZuJPLMF9WC8FwxMvFomrcDNuWpVHE6PTnj6mJpobfqC",
  "key22": "3uT2GwJZkFyuNHbDFjfBC31Sk5QD8aJdZRSosekQKL4hf2A2HZMrqfCPQV3Sm9x5UP6xpd7jVjKzDpocsAP1Q46o",
  "key23": "2q4wRxZptymbZ1VYHYcdAn81eB7XjVQCA5fDBibdhRdS5ghHXy2iSL8AnDLiqGx5mdVDCuJSHeyTCAM8VFgWTEY6",
  "key24": "5s94S4jiyPdWhAufw2DgeU7NpN4zSHLTzcimGRvhRUfD7cji9mBA2Gxof8XK5irYMvxw1sdLpeozUdEkxEnUmCiA",
  "key25": "9ZUxDHtGgYKq8B9ooDxzJ6v31Uy6bxaevTMn8vhuNjSGyDzMefMqGfsn4Jm3p6dv6TBdrsHcXgcCszbx5mgyUkE",
  "key26": "yQVNqCWEQW5qpoGf35oTos1ttpbKvR2BGAEUBDs78bEYu44h8A9NrjV4vDQur3yKrJq92vG7GyTee2Gsrk9RZYd",
  "key27": "296v7CXTSDRHSu1joYXC8V5aAPXtJRaaReFYYHDE818eDR6r34JG2v9Z6E8BBQLApFvEboCAVBwoQE8rnwcRRWzR",
  "key28": "2V62keJ563WftV4FHHA1k7LST5qq61ybdCywhXQXFHJ1PSRUcj6LrT8Nn6916bCbcpzBxvZ5WmrqoPezLkFaxts8",
  "key29": "4QeqRfYkRjLnUFRWtxwPohHzK9zuM9cUGsutJ75xfYZWQTEz8ydjjFdNPqEWXkvTXPPmREQjXpSg74wQH5QZ7avD",
  "key30": "3xhwjuD85q5ZqNAruR14B1p447TyvsHQeh8VYffqwY5Cs3sPXq65LUcEffamqBgyEPu88HLLieNM2QgYTeTdFvAg",
  "key31": "zXzsLBGcqBp7hkK8YcaCGyrRRTxP6p83vShmyZKR4gMaAno6TB79WBgrNptAJS3v4LYqJBy7ogcjModKxhTZTHr"
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
