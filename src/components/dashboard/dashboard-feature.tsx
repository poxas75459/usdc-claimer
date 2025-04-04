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
    "5WEJpFuCQtnwSezbB7GwXGxk1j1KFU9bXsnsaCaiw3vJtzNzPqfeKEuZGimHY2gePmCy5rih3v1RxwqEtvGLqVPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTrsQe6hhMQ7BXMC9o5SCsRZ8UUR3nZk5v1NcbgwafwH8Pr1uccBRgKZh42BtCEGwRkwPYbtzq7nNNNkEDnFuu8",
  "key1": "4GURguvwTkNDVWrMSP1HZQocEZ9GinBYhy9VayS1JbtvwHAu7zzFwtBVdQTL9QZ9GV5KX3AUJRrg4iNCKXyCa2Zi",
  "key2": "3PsAjymzM6NV7R1KagCCMs1zB7PFhHUYciNKoMGkuHeVhqqyRUU3wzC3yMPEP2H1gWD39Ef4RZB2BPK1ssit7XTz",
  "key3": "65PA9adUM6wHZcF6MqTjcbL31EP19Pu7q5Z8rn78kwDXpffx8V3NhwEcEtJSrho8dqXwG4w1HSgwBW6qRtNg4kmd",
  "key4": "5mwNepq8JJFFinamZ5oohF6hppci3kzbvfVioiTv8896tSh9AsU9yRr9DXECrz7YXBG2WNPJNkLcoSCjSCYB9Bjj",
  "key5": "5c47zKwFqAC6JYvYhYpdfuvZgRw3a9epv74DF9NKc9qCTAC5cHNJzcrs6qugTcvSzLYHTpWtQkizhpSgUmZsabiv",
  "key6": "57UnQGB2NkG59wYkNMb47pNapHx896Vnc8SEMpuG5dgwwEPVZK2ReYZvQaY33E4XfbSATZxezKee9gPTssajCySu",
  "key7": "66duZGPtkwSG8jLZL8Jzianj2AoaCzRo2bQvCDx7aLwj3j4r27MKJijgJ1BxuQ1VA4c65FbTF24vj47knnfP3a9i",
  "key8": "5JJ4Sz1rrjGbQHjVfAeAHUAby1GprjvyFNjmogFQknzyujEgvjqcSseGXX2TMn5UrgpVTg1yonWx9orKirbtenuG",
  "key9": "3h7S7MhaCfLaC9hXe5XVud2Dit8H4YRPdmNA7rcSAsRGqf7APKhMoUu2TW8z1WUfDXt8vcBFAdECPbvYyeQBiUQr",
  "key10": "z2xVTpZwiTurqFoKvPRgL5J1jiPzByGqKFcHSdqyH6A7zDqdqKAQXAjSXm17a2aEdw2beCGeFoAPtCd8cGc6hwy",
  "key11": "r6ofTHzMiw5K5FE1JGPqG6YPkntty8uiTpCqAfzjwTHY5NPEKcn2fkpXJL5qZpVuVy2LXXyhAFBY4Hv4bj27p4w",
  "key12": "PRfMTxnp352tNschNDiCTw3ARNM1pKG9rtEWwoP3tKuAk6hzuMzbSBnQBP5muqL5vVRsdVqoJKpzcfRKQR9o8MQ",
  "key13": "4k3Ve1uEzroXGVYBD7UiL4L6C3YPeHbFwhWbJSMpucvbvWbdvefwAk8xPqM58ukNygnsvNZvFYKD1qr7WUXexqU",
  "key14": "5rZovDZGPyS1JDSLUUky2tVL2tFe81r2keYnUR8HHq5GXxqFgfqf2CVV7BtBs5y6L8ftexeKXTrChgrerHbxYgUo",
  "key15": "4hmW2eoEguqBYDqxVkXAnA8fKGhnXqcL7WTkfZ3MdGyV7j8gFPp4ySJSX3EVRi6B36FgPiZzBmtky8g67fxM3coQ",
  "key16": "4v4cmFFX4AGBq2nYstmLxDWPdmgrVA6pU4ddiQe2MGGDLjNYr893pNyPSUgXpedVVMDwpJhquPeMTEF3ZKMrPSpv",
  "key17": "VPMqLVgvpFEviMVKMnGpBGhifTKJ7zTuduikqQowFhoy2wnYwk3v8V5SJRyUN2pZJNLP3Pw1gAvk6fdrry24Lzj",
  "key18": "5A3M4tHU5fEyGNg5yEam6nagLTzh5Fbn561uMK94qFsmkdGVVPzraGhU75cpJZRRwpFZ3kM1WQpoRC3aqmbpmFPM",
  "key19": "433ZvqAQHzJvuVnNc11LynnxYs7ZsSspprLmcdCcNQ8zyDg3czmmhfxGEQEs3QGaiRiVPcMfKhXNAsH9RAbVg1GZ",
  "key20": "2F8bAf2U1jUVoFuKGUVCbszzsqBGJBi55edtKgeCHj4Bdtf3CXkQk2ZBUK75RwmR8gGTigqyxdeSe63PMRpWFTgi",
  "key21": "34u4RobHKhkqGW37o8DtYdrk8W24G9d7txjVXKA8b3UXSDjWTinuTz99kf8BwjtgvhNSuR5Az1DbU5kdrpa2CYZU",
  "key22": "5duGmBMfdxVgLXmyCSbnhL1yBpZtyKPKaQxi5DwZdtztcPu9AyfLtPFSZezti7SL2RbWB4HqzbDUmFJNpSKtaPRY",
  "key23": "5GHDarQEVc4cqGCruhLnTtmutxrP6qWsTEa8oj5SCJxJ6a14XtFjiYhy8c7t5xMrhYRGKAPhEYADEeYUbv9PtULC",
  "key24": "2p4Fd9HNdSYPbZk4ByUq5sxGAJkA8D6adtu6j11uXEQWHMLwmrzmzCwrFH5b614PjqfunfH9ejrjXTrHTS2qSxyc",
  "key25": "3JqFvs449BaDodtN4WCLJSGYSxvGqqNnD3cHru8Jm1Bad21MY1KGacuX9DB49nMMQMwNXSuPv6bZfJ2rgy24tWig",
  "key26": "32aUvs4jf9qHQ3UrWe1Az2CnregUG3JLQb7FWv7Kf1TFVYnA29Ny3AbSPgkAoNSsSLLksbdq5nWc9R4vEFEdHLGf",
  "key27": "2mzj7qsUGghGmoF1VatX3VeYvQG7LGZNyr6vkAaAc86K3UPSufzFLgR6gr4q4cD6B7hdenC3b1z8TFKBj6kDbwhr",
  "key28": "5pd4rea9GjiPkz58kZSfHFw57cYN9ZXycqsGqPdb464un9K283ysVcmVwFteivCJuQwraxw7QpJmHEszJSRFiBab",
  "key29": "3teeEBBEJCibkU28BWwj2KT38hVkrvxemUjDsU5HyD9HxXVSyAjRHhwnpVESDNhXt3Thku6HyB2DAHHYJNL4ajLK",
  "key30": "eMpXokxjmCMNE3T1a8PbRAA2azreUTgd6aW7XQNSUUuYV7bKheixVH2XUrpzrgpyXBHaueEmGRsXeKTJQGK1qnK",
  "key31": "2m4st75ne3YgS5WViSTrwmbWYvqftj54fcPgDzcp58NYWc5r959Gz3gFr2FgE2MuSGj3ExuoLABGnqXKpmsR9jsy",
  "key32": "M9qTG7NMzFr2XFamibvQNHx7vVPKBCiD5V8zFhZeD8aYrnGUxyGdwM3tvUpQLUDry9ckUPtb9LSVQsXPyQsoEPu",
  "key33": "3na59hS4oGftvMpoZMZw76CBMqXKGzgZrU4ycV5n92T9gbqi6essaTFhpCjJ2TJ2GysKzgFoquTfp3bhwpEERhLj",
  "key34": "46TUB1rJXuTLAmYS8pjvDhLqbVkTiUr3sPGruw2JU5mp8EBjAiz1DUFJKKv6nBq2kT8cZSHbiq9cudauvnbrm1x9",
  "key35": "3GqUnt51i8veH7YNrvCUpBUrvvsWa6ZR3C8idLiWY4dNtz1kxxs7NvpxgiC6W9xBisCRCZYF2K7n8ipjEwTvPj9c",
  "key36": "2gmLLtteJ8R4WsQdNZpfAoMCm5QwCQTCNE6hzpqdVdM99JY1dktXFA6aAHuuxYn2yq6QN1oZUHHqQs9TyV3rHKHz",
  "key37": "QnRFpbjDAKUoguDeXhtc41QHYt6BLQ612kf4JngFTeF6Ghhzrh8rAza83f5NAm25Ji1SLanRDrK2nL8AV2LohyC",
  "key38": "4Mfyw7fnwDb56nBCr2Tv6xD4JXkHYK4YBtqPSGBz459FacPobJZfThszzCkDdw8KRFBwPw1rRqvLAggYfzo8XJV6",
  "key39": "2Qybbd3kwwnbDakMPmqqcMADuygdBc2NBqt2smy7mbbdaiFu3PhMuqgbnNgDAG5YxuNJ5JtVf7UEwbt815zJk97E",
  "key40": "emSjtTbhcDRtL7ZjhCL8fTUkynfjbjkM4gFw5uJan7U3Nx3bFJH6jMPiLa4o6h4s3YK14Uc44yQvxznM1u6xEe9",
  "key41": "3c4XidUDxeGfHe3oxKr5uPvBiBEBjN7GvVwVevKYyKV1YipoQwZpVnK6dchASZkze4DmQWQYBFjFQwCZoVmJNcjW",
  "key42": "4Um1Cb29i92tinon5ZoDQZwXKuP3GcdQzEm3fBxLm9Tq8Rond4rQLgng9xpUqLzkb52RH4aQP7iHvktYNeydq2mp",
  "key43": "3EJungDC9A1CarYmcLTt6y8SApHwk2jCMmW9rnh44F6JRDYGEt7ai5cStzJWbpGErz8scihzWJs67r1Pu1WsfuAu",
  "key44": "3FYAGnaNY2rRfgDNgXgcGcWv7mqgAc7gx3i9qYv72RjiPKyHx2FoDQFjaxLvQf212Zpwguq5rRGfcP7JNLMzGGdP"
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
