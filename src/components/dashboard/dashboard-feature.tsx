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
    "UpUveeEgFCNRjTF97HVPseBLDGErWqat9fxdRMw7wCPH96Ud9AYSASp2nNqB8GwvfqjL7Ab5pyPjfRQQxHnZLBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6uaDfTvid9ynfggwNDPi51nt2P1adRzD5qu4PQCfCrvxqdn72qKfpWwr9bqMswKzzNpjUGsuDY7b2jMLdgUi7N",
  "key1": "5UqMgvDppyBzwt1S8ButgYoRDD1WNxJLLeakCpN4SevGiJCw8vMUZjYGwDRnRqw22TnMJvU4eBb4KcbEdgNbFGsJ",
  "key2": "jBDXNL4cEjX6XNWKLcYSAbj9u4BJzdvX5EjVipCvQAyJ44zreiDhM5i6vboo6uxquNv61dDnUMCj5h997F4Qwq5",
  "key3": "3JAJhHFsb5HKyeMZXsXFCn6RSmF8rReSCJPzagTtn3XyFuWrJXtmanqgtwMvrvuNABjmid9ibTtDLHdFaTZRbsFY",
  "key4": "2qRiux9CvneS2KXDV1hRAxFbPuFm6cbsANatMY9CyABwfvwudPHgUtW7Nakc18TPVzBeYZgSuQTKdwi2Q5sJeL1m",
  "key5": "3ivhHj1ZriuSeT29VJMEY9pJ2k4nDrivDTa9SESMXznJfswqnxhnBi3tMVPsMnMovFDjcaPQcy23pJi3HsmPML9e",
  "key6": "WgMMAq4sddVF1wS2MKT51UQAGmQLyJzBRXHA8SiZ6G4WyGNYgtEaMnStPCqN2mRPkvkNw8MksQz9VBzGanrHYZk",
  "key7": "32ybfccCLi2UwChSbvEpMC95UnwmvCLpkv6QrEYpAR1zBExQciWF5h89Rwdwo7vT9touu62EV5CxciE5gLbsMTy",
  "key8": "48rd2KE4pNK3X8PsoPC92AxpjgA9aoXByqpaPz8kYbGTdUNYWzy9x1MKNfFSfuvzSSeCDgtNaaRtovmAXCFcqJic",
  "key9": "yaWs1DRipV3onsrK391D5pchKVcPYmuAEmf5LAQNSRvPQvgjt5w95ozery41qgxtDkVLMTGD41KVM3kVc7LAF7o",
  "key10": "3NDkzjTzpUUr2rBJdZLaoL69Q5vFdMVe2YLhL273hGU8v9qezraTLiNGnmGQsKLLhENFuQ9vK5ZDqjtgW1dJHHy",
  "key11": "vFhUAKKGTx5XQsJ44xqLKYEHmJo9zSY7ptZ3oRtzPokx2cUnhbfT2d3v9JK1XtUDXXbTXAPqhcpz9jZnbcTbz5w",
  "key12": "53K4vikBF4svzXtV5B9V1FUVJLdLiV5PHZSW9uWG6TY3dVf3LLwEz8qXujQfeLqr98i7ksR4ZwRevJAEx5xQ22e2",
  "key13": "dc5F9GaLM2JhgfaKazjE29qjHEgUQt78hU5tsFEftcEzQZozTrcgZ2yR7ezV7tJ4dBprGJceuNhdCV6ztSAdQwj",
  "key14": "3kzhh8G3a7k7HfmjFLjmNHnvMnisw4zHwLkUFxHCJeTsE54HSL3HeqyGoLSCuEBp7xH8Vkq9wrGP2T6G1bow2Lqa",
  "key15": "Jhj3X5VxUqqkv7PoJx67HUnwrMPcfvLodwyFRhD764Ne3TFcj1vFpZxUPWZpBP7RNazfD7Y7zZxo3VvrsPX2RNL",
  "key16": "2et2GJ2kdbqKivnDujYCn8YdgWG9mPqMQTse7Ee2bkFSit7kBFpXuVHha3vktZrxTjJupvhgP5Eifnk3ajWbCHs9",
  "key17": "2WejtSKvr3TyxX5uuWBr8VxAeB9gUFeHFiTfJ2DgdLN6RfM2KPVdJALdu9DKT6g6qQQ5gQM9bHSvPuGSGy2jAgum",
  "key18": "4mjPKTdDDWuMng9489arDmMaDnVrgiGNEnw8oFtTkSdpAvS1u3SreXNUtzACbUt8g2KcHd4GxqhLnk4aoTZpzD9K",
  "key19": "2jsvvpowtMtDHL5xQ1r42s9knybc45vXFppvpdengbigno28uG9xZrzHnCJEhR6SsqEtyS4oNqco7Q6r3g5RbBcF",
  "key20": "3Vi2XNUbaatayqaY62xCKh59nKtR5mafNeaH43vBVgBNjfqqQfFvaFDquKF84LTEh5MhVYeZeNSi6VKw6oAdX5zN",
  "key21": "3NnZyLutLMzJF3MXsgfXVDNZcEL4MPAidTPinUt5y66iZSHafxAKLknyQ6yvcn7m9B1fA3onDLCD2RojtJtW2gw2",
  "key22": "LqiiAz7GNdArqmjZFHYWnPPojjtfzvRneayT1RMRvDKqAZSH4gSn1c4hAwgtySn8pKPA1WTz1MzoYqMzYTLLra8",
  "key23": "5VpCsCDv6Riy6mGLfdEGHofK7iZjMMsDR3gQbTnnSJcaMfJG1Xhc2G5cvbydAr9MGoPak6C9cgyQmdc2br1vjXam",
  "key24": "4dyQhnvFM65KUU485hfQJWsnmnmH6e8eaWFK1Fq7HZQpQnip6pJ2AmkGQQaEaQg7bPRGWpgLsmRBwjxFumbNedca",
  "key25": "34U2mPLcTAvSBN8gdi9grK85vT5stntPtmZHtdzrWaYSXiCxTtV7CstFmmNdnozpqu5arhd6tTPomiHk8Hv4LaLR",
  "key26": "29aKULvM2ydk1kiE6fgDK3ZFApTSEm1Evq2oyF8MkdcuQHSxtDC93PFHvcFjA5QHtitiSM66rZx7mE8zdxoVZPSQ",
  "key27": "4KhViNyqMkXPo3mBsM6xMQNnD4FZVFYDjQa8285t4XGfNeHNYZVENXgnx7ZMYEEpjR971HLH7GYcfTcRRkuvoFjh",
  "key28": "43Eoskw7CANUvUSkcJxh14YcaVpVLkN9rbeWpxuhQocXXuaZnH7F9CD2NgMNEKwPL5QUXW6CJwEcLYw54vR94GZ2",
  "key29": "3uqGMmCPkQj8N3jsh2CdS1VAks3urGNFVnusA6kuDgujydmgyeMmRxbqJDzn9wu4jRK14jsCbmHgNf3czayqKHyq",
  "key30": "3hdQi9dbBLD1zvcHznLfHShNgEKHpAXXAS5KgSFb1prkpsjArJi66Qf9r4v3DpdR8byBLyJ9Xcyp6ACRZN5mXrqf",
  "key31": "38VQMvyGkNAQ6sTcEoLoWqjAP24QZNfr6rhhLFdLzsZPp1V6PevZS1vVxY9uiHWw6cNtMsZhVMiJNzQCfpo9eMMc",
  "key32": "XqFBzJqX5c27B8b49x1HmuEedzsKvmpeyNnruE14HtK1SHgxMvV6mVVVQ7ALB58S2S1pAEpDHBysoSbqTxo1Kyc",
  "key33": "4phsgUtYu8CAmLg8t1CUh4T7qc6DoWCLkv62devECYyMazbn3RtXdbVJkFTeh881P9NszHa89vZY9zgA1EcuQMcD",
  "key34": "3yKvSaaVMT4bG7i4LwShP5dDwjTT9h5Fwiu3JCZ9i8ndRYG6gzTMc4tfHx8YnKEX1W4jAfEzY7aQ486BP5HeFNcU",
  "key35": "4gpehag3AM3ZBQDdEJmsJfzwWkJp6p4bRWicPqJBXoUqyRXPcc9oihFsMaUpCXY3i6vJmwzwh7s9LqtpTKPphzCq",
  "key36": "cWGv9HxDnrS8Wc3gATZQpaC3Q6Q4wJzw5ZKRKJ4wtVAhWRN133xYwbFvba9h6dq52rrgZXaJXUKrBExwC6nhSDF",
  "key37": "58yTZeHWxDNEDvishveTKuG7UPfdLXZj3xcEBJfYiUVStPZaNG7BZRyktc7jHXWUi8PCVZviQTY5Ehn9F7MzZjDY",
  "key38": "25rd5uUbHqGdUKDfN7AVMVBMAuTEfCkkkHFHpJsmMaHVA1E7eYYVDR4BcnrzRzDyxJ4LEtqoxSBDyBom43Wg6P8b"
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
