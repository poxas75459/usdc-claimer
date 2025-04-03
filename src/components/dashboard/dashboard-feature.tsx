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
    "4Zor2oQG6utaXvsVJKaRHXbiT9JYXE4CjByEdUYNzuLoqjFsWQpkHtoLPfSKR4cm7xQJxwQMEEEJgaWXy871AbAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67onhu2GxyBsmzYNLZ2oGRcVhcMyu4GKeXrXBy4kifGyaxLVHqqEmvCTzxpq2xmT73aELeUStaypm3Eusmdr13AS",
  "key1": "8Mperr1j6QzyrT3JamLh4YMwqUD7aFNC1Qf4Tu8Wyh8idM6miUkhEhVo46tUy1GyhVtGJpdQEvsWR47hS1h67Km",
  "key2": "4ETYmSzeu8rvSwhPoaYWSATidKm7paxLouTaM3Az3Qk2ap5rS5r4ATypGKo8dPTgXxMfEPhBprrT8GNojURtQLxH",
  "key3": "2GWWs5PTUo5ecJez6th7dCUdcEWTFM7rxspzf7ijNbUJwp1ib8S5ghWNSxcc4bahbw2dp5V8R1LhruF4DPdCo6dJ",
  "key4": "4M7sDeGz7vAauHjbcPKmhyrqebrsMwcFBLdL9UmSg2bHkHP8tZi6wm7py2dZFEQ2Cpnq9Lmwe1vKf8vkUHfCZeYh",
  "key5": "4X2bKPWm7vrhuquhzLHaDctUYTd39uP33jAkgNr5YrSvQq2ZFakhUEEdRz11eyr8C2dgXtREdjvZbZnZdgyWqvAX",
  "key6": "5HRdoNET6q3BHtSUU3jhtdRd58QepbDrrS61YKBuLGdJvADEk5yzfvGrNgLXCXidGYWz4aJ9RgLwNGRJGNt5j9Dt",
  "key7": "b633AbYtAR4vbge446ewst6puty3GKJEPdrjePDEwfM8yjyn3H5WkvzXoPPLF5WFcpXypRsT5HhhuyMJQ5q8W4S",
  "key8": "662Vt4zY324CT1Sj9BTqGR1Ueim7BAVWBbfQFkR3ct612X7WfpM8zfCcLQ49uCN5QXRjknGyDc1Qa1VFyM2XaY3H",
  "key9": "3pLWcou1MMt6hAXttxgcEC6m75qtdgspRxmL4TyaTP9esYpmYUksnmEWaDE1WgvCBDJbV6SaHwZgUKYr5nSZreSA",
  "key10": "fKiDFt5rfdBqbw8SewAmViXW7wb2i9YNbC5Yi845XsyNTJtnwH9DrSvqm4MSTjc7J8QE1CLHXDmFuYYm6VY1pym",
  "key11": "47DE6cWroNFMwuAwc9B1Th3LbHQrKL4WGKd31kBa1skgQJqn9ETxQXFT1FXK9v1FFzrdgezvNxnR2xLLJiEvLdri",
  "key12": "3yLsPQFSDZmoTythYRmabAkDeCwHToNy5t4rtuuByA2E9XSgeRd8VtqT466TfsYdcxHTmDuxs14CtFdhwf3d1XM1",
  "key13": "qtgLG9a7YuEzVT4wcuuJpJrzg2PBjaSPNUBmXQTGcBq5jVSgGSMW8PQfFaDAkMW1Yeec7SuiS97tkd8gLAobGBB",
  "key14": "2T47YzrguHQRUhLCNsE5c4x4xNEbSdkEa1qhu7foaVb72t8nTJ14MmFavjjKbkbpzveEeHo6SdjDhY5it4r7wfib",
  "key15": "25bErhDtae5UDQxAvjtWwxFo42eAryMEk22Neyf7X6WMoDDphhXm1A46UUsnKb9L6jeu5mTimfqB4WAxrhiLSbCr",
  "key16": "292wqJrY3NGJaEs8ekq2mBN7sXrNEtmbCUBnTEhJS89V9rZRniMV16ozEdyGk8gLcmTkeWHbsEufN3RH1JP4RRL9",
  "key17": "2MkiFxiYYdJ3FDJ8F8zdc8i8wiBsSu3xBZf3TSQTmeYFZkiE3wKdnPgGidFGcMrAnHwBiVhy7jMxRG48U5Kb8S9c",
  "key18": "2rDTeomRanStReFRwFrA5ChPb7JrS1K3F2ndX6hgpJcantXDEtGqPJaHW56wXgcbGdKaX9e4p8HqxqMT5Dj8vzJe",
  "key19": "GAoV88Funj9fSpy8UYjDMy8q4AF7wNnXoxYhAchLWeH1N9matMNhdYberUmz8WwotpKFvGxRHK5ZH87wGWvmZo4",
  "key20": "U4uopuTeCGxKttqD57nahUtRBv6Nfaj9jubLyNoVz3HU3i546pfeZp6m644TtTRaWZmMrbfLuuGxSqfweDYGkKE",
  "key21": "3WZfd6ZYwSyGrDLWEZCHkghBxtxbt9NFawEEhoHBPUuRCMVuQYJUSoVnw4rCs2xksMjH7246SCiVT4WWooEMRe5s",
  "key22": "5PceNPcMsjckgHe39wn5pgD29Fu3H2S2LeesHwFqW2ceqTaNtQsc8T9PCbN8uVztybB7j3EFY83rvsWxegmEZVjY",
  "key23": "VonzmzasZNuuPncPbquPB2y26stoHftqTzNRqGEo5eYC15cZfAHNjpJCzKEYjLtn6dvfCWgr4bpNr6D8ZLxpJxJ",
  "key24": "3XB3vNSBFaUpPoW5tH27bm6g4ebwvEy9xYPQn5YNmZt4GfBUmiVbhmmxseYouqisY7GbZXgjqQLzBDvq8Q7shRzX",
  "key25": "rMtZaB76Jp6G1BK2QBYQUAHyxuSea9ohJ16zeZ9cqzrbjyLAtq1TrkJiBYrNN1DniNhStUkbH3JR9jS2oAhM6i1",
  "key26": "3mUTFo3kBQBBkr2n6UAp5f14AQVXe6GAJDv7SXzyAFBSWJNfDB6avLxvVWT3arJSuDpRTuV68pngJZ8Psqso6jqW",
  "key27": "3fXfRDtHyzLGB11DzgvTRvs6CtfbLMBpNe69WPwANaG6VkL7Lg5JBc4y8pXymwVwPmh5Bq49btxFRV15HJ8ChphJ",
  "key28": "DTj9TwR7awtPQofVnknGkoAMigdFz27rLgqmVdCq69G6tS1Dmb2aqxdM2LjAwxN3X1NpfSYtX7DDzWX3vixhaKt",
  "key29": "4BwSmFxpeWv6mAYLea2QZzmwVvfBRTH8Zvqg6dRoPjqSY11CjDPMJ4MXrqod34u4vPh4FeFcim3JarABoqAGcxFV",
  "key30": "5nbhm938Aiy1AeLh8PaajfnRuqpRSkoEY5ArfV2yVtv2XYdF5BcKKdV3L36584hBuB8N6u3hVrkXfwj8k6iZ4CYs",
  "key31": "48PSekL5WmXbg8TwSphwgHr1b8wEoXxEiWkNeq6gKAzVBSMmeZiJ1x5YRFeU8HwhWYu9HcF2nVgwQ7QrbwtU8q4G",
  "key32": "4DzXzuwBpdbZUN9Z76UmGrJNFDSmjgVcjBeaGXtNF9pHWJcVh9TCdcGQSiYRQG1xQiU2mJiLBr9nSWXPSoGP9sNi",
  "key33": "3oRe757doW1UBfC97vY3ZqymHPLxbf2mGaE68SG52o22ayx1S4c5htuuzbHDxvzfPfHCS7FNoA6BqvSomj2Yh5C5",
  "key34": "3yRMePc3TDPShxpmsSNegPBFzwuFQs8PwPXmku4Xj3ngjvqiXCSDubJFpcoAy4DAfb7VEx5ViHtAv1VUMEpygGvK",
  "key35": "5tiFZD6pAEDwhsjgR3qR5vZPNhLDn18Gb3NgTcxRdT1FWG6PFQvR9vQWCmfC3ko14jyjKrqM8bCqT4tQktSbK3Ru",
  "key36": "2xDtXfxLg9A8gDAA7utWG55zFeb1AvfEGSkCSTJUdyxs2fXdqufccMcGEt5DRGdE53hXdfywmSnRhnusa8Fc3KjG",
  "key37": "2jAPARTXfCQ5n4DMR8efUvSqoSQEx1rRRejiekybdeeJrVGKkssK8zzWHbYhb9BgYF6Qbqh1SSh6pC9YQB9LRM4X",
  "key38": "eaEXtTnM2BGQpk7PTGwLjYix2xiZpRv2Qd8v5kZj3GEPw4CoVppo41fywhz77cLjADQvDj1DHuaZQzbDaRPh7gN",
  "key39": "2avXvptjdztCXg67HYyn16r4mNEXyEnHQJnP7KT1tRFtU4yynfFKfpkt3VScD11mGhSWHmuvg31h1tXhruUGm9cE",
  "key40": "5i5kd1iADB7FbZpr5sqa9bUk599bMVpAjsa1GF3gVoiYLuvG5Q9XDNdKbBnCvfkRitBrJiaRnZzmk9Ujr8A2Pxry",
  "key41": "2iv9bvkd9oxcf8TdHhxN9FujjgpjLLaLh1bYEPLFZy3ey1jMKdsUDigGa66tYkB6RcfAnde8cS9SbkNZA86CrrCC",
  "key42": "r6c7QJATtA7p8qBaz53WZRPuAAhAofcHYWCKoGge4wwXc9TVGfaj9imYVQZk6cWPF5nB2jtMUQLH48jBUENvvBZ"
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
