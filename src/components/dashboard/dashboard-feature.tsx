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
    "3Epnb8vKtCWt1GYKbq6S8Y5XwyWYzgxqy1ma5eLnYMEB8sFKxzkR9VYpAywnVvcaF7G7EmQYhx6QrmQfxQ7x3zzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KRxZ7L2xk62hVFocGBKYKoqcewtwbrhB5KfZUsRLEMmxeEExGHuSKHaAR6vED8K5iAzmJhL2tW7765TStEsHzYe",
  "key1": "3jBGKvpwzYZXwcXKr1dKuD3cDK5N2TVDHzRNYsYkK7NyPTRsSMfQdH5AAv6c25noyh1ov6jUydBeJPvvPwr7EipY",
  "key2": "3jfeYRHkPKscrZ1NNK5tkonEnK2SGo23fjUiyPdSMhYfwuvYrJ8UPJEgfUcP4cF8agTQepYWKskQTKUV3a4SnVdv",
  "key3": "4mjmtvqoYL51rfJqu4TN8wjrFbpJsNyCE6BaK2saVmGF2nCoNy9D4TqeKG7XUEa921ddTaGnSCxGoN62CwkEvD1N",
  "key4": "3DLFF8kPKALJuHWx7mA7fUmRD3gdPZtTRRK3uZZRrMcu6XqRj1KtBWWJ2MYnHC1rqR28xybkTE1sdHr6QVKdxkiY",
  "key5": "d5s2WxouxFrEUACs6Y5YQTFxXRh4kTdVsKSqLiq5bfb7m2gRiZnipNiJ3oZp4EVAQoNBbxHimLGGAAQYfWvnsGP",
  "key6": "4x1wnWGEi5kmctiqP2iTpNaxp61qfE9YS7HGe5JEJopP1JWzY5Ty4mZfKfwC8MkHHZRRVbwoY4TnXC19BvvJkTef",
  "key7": "4qBMyX4TVrhRugkLh44v8Ym8sW6i6Ts8iZvWHqZKJP8aEkZWccQvqJ2o7UmhXNA4STarCdS5hFTQsTMuYjhq9Rrj",
  "key8": "5qwQ7RpgQRQmb2pvy9iwm9wzJt6Uc4BHE1dd5iVJyTHwaNJUDxEvHQmDt7uZ3hUPF7xUJqDw6EWLhrwSjARyPBME",
  "key9": "3dowWcki8ZoUtUn1XUdjS5uD4SpDJEQXe47mqhWgap2XEFCNRnh9fx6b9xJxdYVvikP75FTGuj6tpMu26yyFo6Gp",
  "key10": "5K7qoC67RWeribsDHfqduNpC2s1dTMRsbo1n6Su5Y3aove3oFgCyYby6txZtWrYYTvPU4cfuChG3VcNhFmTkUq8R",
  "key11": "3WwqK9nMMpKrfqRzggy9yinXWHQDiJXYB1Qef9vNoUrJG5ZHwB2MZUEUE4vwD1qQEXdn5ECgsUaB5sULjF58Bf42",
  "key12": "apEnhissBMF8UDagBcQH9kNDiAj6JqKZKcobfhX6witi2qBEpSKfK2hmwSBKJe1udfFnNJ874kvkFnEBNbZaJNr",
  "key13": "4i7btXCvyhu857MEkPTkzFGgwENMqTiayPd3jXaWZa2p79vtDk9krhh83vxLvdQfh5CHtRbT8XL5jUToqPooquJm",
  "key14": "31aiqu7tk2ori83XHpN6yQKMwxGeMq76qNwxS7KRcoPhYFtybADgwpmx174pNaU6GDMTprUR9KBLjqcQPfYkH1Yb",
  "key15": "5t3xyuSeSMn8545eph5JsrtD7B2uPSsiZsTk3smSinRc7K46VuaNAK6qEUsK8dbCHKqLZvTMYfQMe2N13rd9J1sP",
  "key16": "DTTBZGkKBRxAHx7RGGgby1QgpVyY1FB1Kru3an1x9dRA4rAJjUGZEsRXSordQB1odiLk7pbQDWYZniMeWU9q5K6",
  "key17": "2tKZ81HvK6pkHwNojL7R2BfXq9YT5uUd1iwWgeRbnFw8TEXRNtEFZ8sFfY7nzqnE8tD9g92ZiYXriH7SctMkwsWh",
  "key18": "2s8GFHZx1KHsG9Jy8FwqHMT3bwx467Q8VLhR9oPHZnPzVnf3xhbFgoXwhFgvnZvVWeTYEe8jRHiEFkmDTgV73DGF",
  "key19": "26irm2s9JiUZ4BK7xhg3Nemth5N19kMBkAxSdDkj5twTijcw9ta5jCXyzQrEahpdBttmvxiXtuSrtUbCPaqUsAAR",
  "key20": "3zS98PA4fAzhFmCUDD7J83fGd47ebmMaTdP5aTDSwFDfn2f5j9vg7BvPmsMMSxftomQYR5uwj1ha7eHbpXRroeKT",
  "key21": "675gufXgwL5bUBF5MY5KChTTLLGiaRez8gCc15ZM9quenxxaUeZZeQSdjAXZTUqbF5bcxgmA8xSvr1ChGQ98qYqe",
  "key22": "5zq8dLs9pXUASjefH1QPGZF4jfiU5wyVHikDjAq6jihvmqqYJidE2TXATb9Lzc4bPDXPPeTdRL7jftiEq3D1d2t2",
  "key23": "4UojjEUtY9rXBSAeH9VaQ6jZE2FNRnBB7WbTZ438PvNMPZXdcEy6qMmZntU9aGx1ZcSkZQGCcZPPn4ermA4L6Qn1",
  "key24": "4YMa3kJCVeUdMw2H9KEnZyU2zNbYqLgV1xuj4AYJ2xZ8zsx2hnsr4tzGu4AUdJpVg7rGCkQZCXTks8ZntQzCbNan",
  "key25": "2aMTjri3LZdUXgyMwCLoWHWLvSf65M2m3HQW2BTAESJbbVZ6rKi7nzWduR8o93PDnDsz8nkLbR1kLijQNCuCgHeu",
  "key26": "3RAejpWg25XziCmAKi2kUmaAf4CnyyX5BBktVAQf3gdZk1JgRNFsQxMmGeTCa987NHnEzuNZmy5nt3GLHiEZXDhW",
  "key27": "47NaD144rQNVR2cjsHf9j3WZRWFEvSMGFR2Sf9dZEdcreK6KePCZybffebv8f1E9aBRfvQGWGLeVXbhAqQ8vVwtZ",
  "key28": "3ESJ1zP3ZRPYgjeVPPaKx24o5wqJCA1sZmTG3vtgCK72HpTzVefeqyJo75ub46vXT67KYXXfjvX1fEPhYDxA7NvQ",
  "key29": "3ugjAmAc7y3zP8tbb9cDQAjbD1LzE3HisgGvJZdDqxHKepbrwZEdnQuHfYToXMP357J3fi7MHCVDUZogTMUmjTtE",
  "key30": "5tWX8LtSdqR5PmdUiZVv9m6s7dn6JdZVkwTc3NoA7zL9oDrXgzDr1hBVk91VAExFLzUpuAKTXFMyht9YZYznmZA3",
  "key31": "5gJ456PUqxLmFy36s7hC3zWinSUbyrnXsQcGMVM3rAeD74K9RfeVgjzuECqQqFdTJ191JsihRnR1RcUGiMCruJxt",
  "key32": "39zbe92rfiZ7DReWzWPFa54mq6vz6Esvao7PKCW47JTquyQsX29xvDzRXve1u6SFuLNa2EBPr4Eyy6mZ6tZWKYur",
  "key33": "4dU1PebMuUpoUEMS3oGiAzdKnVxA9S9U25YhAfnVuLvDXUabZqdPLmNpH9YjYfh57Rfy869QQre3q1dzgGn9kBLc",
  "key34": "aF7r7HCbpgJPG6URWs8e7RWjqmJCvKSmr9weAxhvo7HxDo4zuy618y2GfoGcyjoNpwKUirNHAoEfFoxzVChZJov",
  "key35": "24fUfKxcDNqGHA4dhPSxPmRWdAvN5THExTroM5S7izocy4E5RLtsTLAdjBa9uPVm4ToAejBJrVMa1igiSd8by17N",
  "key36": "ivzTmzM1knZTypHkro2BLkhdmj6NgeeQu9YFGgdruHsZpfw4VB2gqvbeCotRtsFrCF8vJg6Pzbwsg1a3TGcJy8y",
  "key37": "3KkHRqDgXnA8qSASMBdnjAxXD6GXrJXv2rQeYBzE1j1djA3Mo4o4gLpcVycHtgmrSwD7BUxTZZtE6gR1yUHWSUrc",
  "key38": "sRvVvo19ambn6qNHMDGmVk27CdvYM9qGkJyptNFoVCBgvNkvCyXFbWfDQDj3pMK3dGFoajVyyMSx4vx6W4qaHbk"
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
