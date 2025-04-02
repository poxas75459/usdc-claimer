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
    "2RyaVehsPe1kmExRX4C5nQgPTWRHWB4xY5csp7CVWqiWAeUsYK1oyVy6NSkWCuLSK8pA3Eko37ScDKakrvzg5SDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24m1XTh1mY2m9fpUQvUGMtNpM1X4oH378HVBRZvCtSVv3vZ1iEpX8iJF2CkFWRkfWnQow4tK9fqV5HegFn8D6KxV",
  "key1": "2V7y7yee3xZJuEEo91YJsLVqrFqVRt8og2ua4zCQbzFwMBLypo1yUVBc9XWv88CeBvYuDAzGUxGmATThqCMp58bN",
  "key2": "2xfj45V4frZSw8cMFcTToJyAd3B9hPnLZNrkmNN3wLYQfV2Kxnxf14fxPSrAVk3Pzh2ZhMPM8aYnqytKBQY323yX",
  "key3": "53CX1tKoVpQbXY2V4ZxB4dhR22d951TFr1epEuQeAtpwBAwGA1AkCxr5gnS3F2n6h2QfbGTb4LGGKRdWnPxTkqBB",
  "key4": "24BXwHK25mjQU681e9o7hUkU823aVGUuHJ9yaNrmwc96y8iDE2N3yCE9nPDYC1vsjMw2LeK7dFemZHTujkdsnqfP",
  "key5": "2FTe2s2thdbQSz6yXBVqwyWLKLCBZ8NbjShYSgcoE4LBhv61PxDqN9o5upymuCnRfcD8BKT1m9khZZ6gpJronVLc",
  "key6": "5sAG2yTLhKE7R5c2nB5K5S4MckARbiaX9emcGJAeC5wLXByQoP8fAqWXzSvqJ1WmvDzBu44FmEwWRQHeu4o44eeq",
  "key7": "44nnXmr85eT66ZDVJbRMnuRHLFBeYtuAhbJfdi4o4frV5UrrvrtNfSJN27FRkCgXzin6VWqa5zJPRiWatw4d4FyC",
  "key8": "2RkuvK8fAgNtmCoZxMRNDzhRMFPpmytPhkH97wTqCtdSQpbcsyAPLkE3UZCKZ11LWo79CKCnwsACcbRPaLDFQqAs",
  "key9": "2p8Nmi1jvvMyg9EZVk8nTrBLVTub4DaFM3RUNVWL9swCvvKJs25spprxRcym5Usp1gnQCWCpiScJqpUf8M7FsMua",
  "key10": "2wnGWTniz3f13SZmLm7tS1WaL2pp6BuoxVpFetogxW4YSqeAjN6ua6Mz2ZEmHHXYVebaNBtx23Boi9LrdJ8Ssny9",
  "key11": "kz5dnJ33gSWQaPDToU5HVgjshF4V1DuVkRPebBahxLBHHJc4e3yLw7X96ZhYYpjejKgPkUvB2uPBoLvGghYt7bB",
  "key12": "3PMcGNkernPoDHPzyb65t7ZQyUQkyDgkuMwdyfqyzCfK8QoqFwwfEiYaXoN7deACVKeEhj6zBdgUrbzgf9tBK7Zy",
  "key13": "n69HNkPHNvwpGuhKd54qEc5XVNzYSSveNPLJs1ZnDdN1ipQHg4zFz9rBVjhy8axNXPjRWidtSVmAfmbGawXNE5a",
  "key14": "487fScoTWwDWNaKaj18Fth3aETBMa61cS1iHMU8new9AHGJd7QggHoSoMTFZ2Z1ZA6zkjhDkKYVZHMhxnmMYd3cn",
  "key15": "65hvq3X7cp7Q9MxWbyne9SJ8SVbXgWFeyHrbSnVuP8w6adnYTvtttzhStgLXUy9YCNfJkGfkSPyhkSC3wCyrxHoZ",
  "key16": "29Qknjytjaw24n7tyPQeP1gp6kAL5aBvprb2QG46YvdCNgDzUH5MyWGvnq4t1RryF35bcbmcr5v45nPF1dCgDpmd",
  "key17": "2HVi2qWuxuZWcAZ2pqgbpaopNh6vEoZmuBcSPdEe6bo5R8qfJuEu8SG7X2T8Je1rdrQ3Y9WJL9kowLSejQT2mW9v",
  "key18": "3UnJJWxVVK4rkjNnRnHx9SXWs3U9FShAo7WPHVGM7bY952kjbC9Lhdg5U37WAjqx6uZiwt729CeAba8mXDTWpgWK",
  "key19": "2KKpJwHhBsipAg7UU2sQ83HboJmEdFWUkud1YcJdTGK6hzUj1PWpXQ7jZJoKac1KhGkNEpV8xDSeUvERaYndGx6b",
  "key20": "4P7NPMeG1VorvwoYcZjncTbWQrAiVf6n18ACoVo2jSFuFbXScnBeAATRwmqU3ePVX9hTkZRfiBUgrNBRtaQ5Z65u",
  "key21": "3gj1F1yoxR8ggPzSodNx1xDAhwWrHUyXWKkWLrjm7cXmfXysbDe6U6Nequ2G2BA84UGi37YEU7HoKazy7DhSoYQ7",
  "key22": "2n2tt3hrUjY7U1cw9kPe1ko21BuLv4X3s6RNbxot71Hh5iae39U9vj7ppqo5aSM2xuLi2Z1nft53fqSa4LE5bR9D",
  "key23": "2tc2uVX7e6jFr5oSo7jjWcQrQJkU7mbZPiUmBcgtWgRXsNbeE6x39svBWo6bY648WdVV3jZC1fYNTXenn2955PqM",
  "key24": "2ikssScq4UXDFjSZCa1YWZ5V4XTTnpHf7jsyqwsPDAnWVpLiNDEVyDhvKCkbPs6TKPfkaLSxMbHTvxaUTvJ4qTKT",
  "key25": "Lqsjsmj3v9qGVmAfuzprF9NciLsNBby6GQU5XTWf2oUcohWSGrLeFnsWLXbrQyz2hhjShPG97XqKssn3yuZFqPu",
  "key26": "5NE6vnE4QCH8jFr5knWZtpceMuoNXwx9ggubDcMFMnFaV8TPfFEQqSZ5s82mJbyqcC2vVEY4vcRdf1NrHzUJe5uh",
  "key27": "ecfprTztJa5nUjfQ5xsMy99KEMAUM4SXSrDq7u3kQFE41y1yBREibm8ekLNgcuy5QdJ87FCKjneG9sxsiWZh2M3",
  "key28": "5kD6EivP6ynwCMXsGVcb2We9BCBiqnWPgK9wemb1vj6PhtUnE3icVczKuGXS1NRK9tuwY3RR1ARfM9SoE8LyPq5T",
  "key29": "3RHNXCgar36ougieaqnNwBvGUmycvhP8S2i9c2gqFZPXV23tpbfhow68JeJQv6ra7m2px4ZH9vwnzbvRi9jmM6gv",
  "key30": "3WBoBR7NayNBGsyKRpA3zFyTtJJiFj35ka8JMqGnJJKhwUQmnjJ7mthDNqeeCWyB6pD2pX6hqrfeErq6DFdnzPv2",
  "key31": "56HgmW3tH3bQtFGRB9YLHeZTyd91ERsKH6mE3vDXj5pzWwEh3yJbnvGMa81vUcxBFunTJ38LQ39i8TZaXex8pqVJ",
  "key32": "2MkP1q4cBD7e6QXKPPr8thndkMY152vRR37jSmRxPHCgyu9Wez736kQGy4R9rxKReX3Chsbm5GVyC89CXeG3tYHJ",
  "key33": "58us29jNwZ1MffKNLFi8yGMYiww5J6DURBJdEBFt6oJbbzkt51sgGpDKRh5hqVKtvdu9M7FoqVra436Maqe6Y6es",
  "key34": "4BUVDGzthJu9K4AT1skQWYdMqJfo1aBn9poqr4Jqr6Mzg2DUri1Co2dj4jX7FBxKvjRtc2wHBkKqHMLcaZKbgLzp",
  "key35": "5GkVB8jEtrPtRoQ8akNo1HXWzaSDpc1yv9aJtkXy6wCW9v22T7UuweLixCgVtaeJxL9wEsjAaw67UX6oacqEL6yb",
  "key36": "4CEQN6mMAnjHZthTG1o11JT8xHb49s2SupLRpapHPx3vsDk1akPfHcsfjKs44fHDe4pfRS9NSrpcJD8JVMmLSG4m",
  "key37": "3qJC7T63M3oFjD6DMxUfaRhFBz47c4LhfhtkT51psn3QweBDS4eNgqA7m9jcCxSVkhMjkYJHc5NLy73Zkv99Ydhf",
  "key38": "QY1dosKyiEyEh4ySgpy2PxSgGWXehB6KC1StYZGxWBBwajfUK9i9WiFoYzgzxb3a5fchotejxjJEb4Toc38w9nD"
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
