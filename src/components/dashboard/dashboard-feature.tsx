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
    "2PMnjq49xuztyan5yHoURsMayFU6DMgsLnZAgxYxGTZpLUFtboysRCeTzSyHhTpvFHWCJuxsnDbgzYmNZETsqRR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtjvpTwVuHWSRgwBmwyWsTe3DngbyBQQ8ETUqiJVBVaaV5uLvSNWcVweJccMHkqkMFuMv1wobxJr2h8pRB7kL7N",
  "key1": "5XUUo2XpTELQPDD6YVYMqBKnoXd2kwtx9AZ2DywuNpy8CkALu1Nwq3r8MdSkSf2f88ym8rvJ51sJc2Pm4ir1M2fF",
  "key2": "4iNdNNSKMmkPp9ZDN1W36tXWxANRrnkfmQLvCoca9hTwFrCXTwHHXhxobKC3y38s3Eyj6PGnQknvaBsjACjvUxUe",
  "key3": "3WRNWeNctegBLeJJHydkAth7sZnbjJSLEPHNKgNw7ZeVkNaWCBBAWNoyxCJW2ycS6EF4USNrCwosAz6cD35YAADu",
  "key4": "PT3z7KC7hXQJ6Ao6Hawn1Bfihfutag8pz6hYwjUmNiEpcp3YpLrBb6rnSjoKGCMNnBd7pJNJE9AScxdTLDWTHTG",
  "key5": "2LQQZCBhD5Lebt9BA4MKGcrNMxZPyDrJYUduWqmfV8wMEdZCtF2UJPAAVZ3rg9ZkPTkubHUoPKDc4SAgnb7GUVdv",
  "key6": "3ujhpKAoxS3FDM1fwm4DJGhktmQtNPsUTURZc2GuehNWBRMHGoaXFQarScQftw7VmdFBaGJxwXzrpnomUDQ8WJFU",
  "key7": "2hGDznMMs7UJZWLTTkuifQ8FxTU4UUJRyAZZxXRxU7VjnxZXvQU5cd3hypSQUqc8ZLMNyK5sP8jENev9CGghnhFE",
  "key8": "4MagoCBYoLqQ9tJpcP3GkpNVAvv8HvEjJaQ8xe7g5S9NVqkuDh12QtZaNcL1bfZAKL4Mv92GFHYqxD74BpYEQRR6",
  "key9": "5dvR2yhRn9NKK2X81RVkZEzAJUYbKCCH4QxKgN5jnZw4MNSDXACLLZDgGJgThnGwy5bpYczWQBdA8oC953ESX7J4",
  "key10": "3vemUPRUnhMKwku5cZjqj4Asm6RGj4hTojEd59n31LLcoSRxgV95BpJAexdY8Te7XbQSnBr8shSUFFwoqQM6LEKU",
  "key11": "3SXUkPtNTxuDteCEdJyjrUVEUu9tDnfLEw47BopkVT74dPgVeWDvFjCVXJNDcqbQQryvKmS9MFvcusLVB1yjEXzh",
  "key12": "4Lc764vpc2ZrFVNYV8cNAVojSE4jknnyW2TMUPScyCyUtFPasJfyr1MkgXU86AZrjyT2d5PD4omAng1sasswCHfQ",
  "key13": "2HnE2A4PiNwWmKWm15y1AhnEumJ1tx2ZpJsFMNvGkmc6esx4UBgaro5GSSNEurKiy1BWjZrgQqworr9vuqVPHpEP",
  "key14": "sekrzbEXw1Rh161RJmLQNFkX1kZ2cuum1fRrUWRKp6t8kdYbdZM5KhLe52oxGDBC5fBceQFiY4NGa868GGE7WuN",
  "key15": "3SRXe6YATtKA46uPT3Y2JqRzkHTSaFfa2CENUjncQmX8BiNnsaADcDh4cY5cVZzw2x8k36mLLU6HUUdyjfH1MUdA",
  "key16": "31tQH4uCREGVoF5KzJW3GihvqrQGsELzv4R1jzMLebqTT3B7vVy93WcL1hwWuGxmyA1XV55tu6rW3XQhQbvjycD1",
  "key17": "ze2q4HsGFAFEwWH9SwahrXsprDtyVAaEMZCb1KjSoDDAc47Mjncr7KvbbFkEq2Jt8tPk3AYMQfTWDS9VJykmVCc",
  "key18": "SFFEgtJJhLgneoZJXRGVsLCvPqNBbPkj5kW22efY2JwJrhM7YW3oQSE9YD7RFY5umUPG9UAfbBwYSLRWvEFPqZM",
  "key19": "2PG7LDyFoKoCTNfedHeEbXhhr7cmfzQtDAQJjtTg1C8RQyac9DKWZuFg3nzYBThawvrs97FWhK15JsrmXqJsjUwM",
  "key20": "3dWHQTD2kptpsfgupmzNL4rxqMmL4oo21Kn5SJdm1sp7QHoL8JTx2YMSFRnu8aUSf9WC8pvWyrcmD4dSvzzdUSnt",
  "key21": "5gFgLc82mj2XmLzEgoQeKHzZgPD1b5V9U9VGXYMAz98wZmYB3KG1Jk2tfVJCvY81pn8WqbKGdBjCPKWDQFUcZNRx",
  "key22": "zfzYUQ61r7UqDUbRDsb3P7bsdffXBDN8J2K1qJugfzzMwPLrtNC82yKTmQiQzyfeLgg5cTNkgxFj7r3VY1z6cpZ",
  "key23": "a3RUfYLaWEvxTXCtj62HCXuB2L7vkmSc9MQfu75Gr46py2RBtYopbtJjUDZm6mwfRcDCmM9dZJBBYSVyPCAz5Xv",
  "key24": "5T9ChSZkE4oocX3R7nf6uZR3Wt8ni2gc6JN45GXr7KSvtJziQkznk8HF3fdQ5wtUEQHHDtagu8VUNLsUStG2Ezyd",
  "key25": "3NkqdNfsmxtCb7bgJQnKw522a4Hc4caqMxnmT5YbnHPizwqbja413v72SUBaVP3AfVEe34DBQn2ybuZEaKCT3xT5",
  "key26": "2ayE9kmQtBDb5TVRaGyjkPHHq8GyZ8EkD8TQ38AJyTdy5JH1D3L2yyrdNUud9CPogsbjiPwqRy3E8xqZNzyD7GFX",
  "key27": "JBSDQCHELLeoS7WsY1rcLnGXZGzgBfopHjuAmou2NcmqcoJVD5DHQhTNcJfiW8yBEM6RU1bcbcg66NPAQJGeyj6",
  "key28": "4H9uGJG7B5ig3ZUqTWdCFXtTMxi5BqosmMVLzDT8CVDVJRM44kTNoK8vjkYjmRXcMZvgcBvVYKBqig9445puUjoN"
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
