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
    "4jEwJwwMSGv129LpFiwe6xnvHMGBYkAio5BhvZjViaqDkfTU1PYJbjjrtWXNetB7WEmwNTkviCwDnSRWDrHWfP92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdvcCHkwuXrNaDv1XRtD1aryEs3U1JFmA89jpfY7nio9gn7MKaaPVovRLow6XW1BAwDoNPhVLKHokHscSTdMgBx",
  "key1": "54ujp4y6AGQ82urvZyFry1wQ22XMurLo7ju2AWkdZy8anudzywyeqZAK2591ZswUqJHT4PB7fPaskcGiQuhqKMDU",
  "key2": "nURu7y9aLbWHKa3d9BTg1JTVC4gEuQTzeyLgdvjSnrkrYXuWURUHhDAdGdvunt7K7s5U6KJbQtn3ULhFYz8dAaM",
  "key3": "oByW6CqGNrquoUKoM2AWsExZnELSprhuS3PFpwiaMqVxZFhPEB1bBQAwQQgw5nivAAb88k4mstG4zdXZEDy5yo6",
  "key4": "8G8q3a4qpjhXfautsCs8QKNTbLuM15BsJhT9xxmUpCKEYvWb6q6KJf6eZSLQ43stPAaqyyjj47Z1WbUn7TBdVdE",
  "key5": "46CdwRf2LjP1UZHg4RW9e83y86eLZCwAMvGGCgvL9PNcHBssgrYBjT3ML7mrQ6Xn7FTthD7JDmHesZTMFRirA1EH",
  "key6": "38TaK9B4AxMiq52cA9yM3MDJRkLctT5928kMHU2cSo5CG4QHGKmX3cbRUGoqeSC6YH1QJKFaoKokesPgHsutjjov",
  "key7": "FMn1a65EkqgFWJKYQervaJtx3k5nX5CtAgSeXDoRVesoFzWZ1vqju7Yx7Fx6xggqaRQdpwyrABZwqnPoqJu9g1N",
  "key8": "2BBCookQmTHvLnU1zHjHbqBDQ4M3T9uFFye8VmExA6xTxkPKHsGXcJ19MerQ54w9dhmjMhB7H9WRW7kQpPxw4jAC",
  "key9": "3iyM43DpRjRDeui4tZ5qxdumGzFkFUU7Gzs4Hq3vsLQkcM32S5mRPJ6di3kW8QqnSCysr2W2zen5nFrShhZH9cKC",
  "key10": "352RsnP4NmZuZVjFopBQpM6jR8h7NuBn6x7SXEH22VnGZYRxFgt66huvQyDoGo44QKywbcXftqdABJamVNET7B4d",
  "key11": "uvSRUzeRK7WHPCYk7K9iPpnWePPLL1EjQQny6eLpq7Q29twkTvGP8SBxheS6VuTkoLrNBYt35eQBwmnQM6rxu2h",
  "key12": "2ZCtskAcqJy1CvT6HHdQHatt8xgX7BFZoeDiH8ZSMpauyHbVnU3sVbTqEifkENrZLNUz1bFEZA4pUPwFJeyvqmq1",
  "key13": "2mg7amypqCesGyXxZdbvbGCaKT3xw4rRCBZd7wf16WQRnN87mGuGkJBDyoAfPF5BGypcYJMZzoD4M3bFHeRB8Gjy",
  "key14": "3z2nEDDNcU7gUdk3aEywfdYuXKWyWZ1BnYYEAiPGXbiRaTfwS4nhbPs3bLMXonnqff9ohE2KGCUdwBWB3nj9LPGE",
  "key15": "jdh9ympELBBrKZZuWBTN493u2cwjwDvehFyMyE8wFbmv5BVUHaf9sBidK16vKX9e4dEmQyePSoPKaztuTLSXjKV",
  "key16": "JpyST5viL4efPPrjQidYBgyamiNUBPJp4X9Zh2i4MLkRkb5fqAizAA6eQJqsVGCi21LNaistBaWhGBsWZZKGTDZ",
  "key17": "32PxaekWM1xjacnJ9ZdUUmw8tj5KU6a3PuqsEP6WVKpADULwBB7Btgyvkh4azET3hkAMm5PBNdBKZ2ivfAS8JFFZ",
  "key18": "3Wi2cMCaZJYqhbaRXk9SbmQcerB1rZtybLojHhFxnEoZkZNSQrtx3PNdcokpnkcPTKcKqHFqUTSRVM26kRAVoMpp",
  "key19": "3PYub3FjDFVAtgp8epQqRViNqkMyqy65XjxYaLEYyR8Xo2aLhcexUNBKTbgABDZf5yP3jssJzGq5iQnw2QKGcJRp",
  "key20": "4tFxayLhiSkDo7eyB6TGMgnzLfi8722UVTLmvaYu5jJR6FZyjdpfEoMohk1PhTHVGjozKWABX5vPgj63THJofFqS",
  "key21": "3uZPvfyAe6R8q3KKnRZgmCM8ZUVwb5pxXTTThVY81Km3bzQGTcECtoxf78Lp93YKYyuPR7HNg7p441GY1CKAnCfa",
  "key22": "4gAYq99JYPUQT56RbL6kksY3uByrQLX3UM76n9Z4UHuz1pxHfSJ6zjyyFdgx2TH8BiUS7otSGVhebpfceux6ondt",
  "key23": "4VzjSvFADSXvKtQaBEvVLv3XNDJUQzApphvtUg9wZZiWKVs3p2xs2Pk66JeWvbmb76QZ9AkcvucGbGns2xTtAF8Z",
  "key24": "yAABdLqn2Hzoxfxp62y8QdVxrJmpxd6NKUjKH3bzLLAhSrFNjFfmjVrjRgZRnPWEsPh9kY7C4CTSyZoo56T2rvC",
  "key25": "3fu4gJ9fdnptr19xC4gxnUabVBpgymNTQLGma17qx1Cz16dAQRVNA6K612Kx19RsS3jKXdVzrSa9Qi3UYr6cYrUj",
  "key26": "RJQds7kdxDFsdG7tq92MWd6n4ty9B5LaL4s6GgQtt9s6Pbey3yFb8ECZpt2ut2j7ePsK8sMPbTor1FCnKZEuiad",
  "key27": "2FWVh7YndtN9oxVxDKkCCZfjzhf8FrsoPPLqdQB1ithW57V5d1m7QAvTQJz6yyswrR5p8Ns5fCFY6aEqR77Ro47j",
  "key28": "5ChMwAYb7SZqiANV8Rarxz1u7BrkFGVb3BpsC1WZSwX4vTr8qsGqcBYZR53n4HQzRM8jBWkrvUW96uVjVm6hVDY",
  "key29": "C1pWq4ubMp2NdZ3s5fjjkJYT1txxkbSHxDivXX4vJ3rpG8hCuEk3bKY4VeWQmCtjNcFqjfVqpBAtpFwoGa6ShvK",
  "key30": "25JZe5u7PGaJzQjvY62To4mbwCRHVKoD4CSijDAVxmz9Qofe264AajCm25eEt8eaHNvuZuYga8x5aHVRx69xmVwc",
  "key31": "2WsN5ee2HShiAWDBAiTfD5KUa78yTbPSZsKBB1QtiWRN1U5KH6ujzYk3sDJRcqkfu4zBvDudmU7q7vDYfAa9KMk7",
  "key32": "uvnTTYDmbSAuPfgc1DGMv69cpyi6tbETZUD2gJq3UdwvjifWKLpGsLaKcq62VTotL4EGuKwt7UJsgqH37AA32SF",
  "key33": "4UxvjbH1eexycZwgkB34ni9SmxAd3eeWYpwHJeKpJ3gULdt7rp6KJTti3Wg7HYQY193pxXZzFGXvZb1cfwoe6EB4"
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
