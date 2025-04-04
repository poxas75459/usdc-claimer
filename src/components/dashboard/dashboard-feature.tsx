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
    "2aZMskKdtttxuabY4J8iz998u73f6SzPnutT4dKt815n8oKCXigmShC1LgGMZNSanYb2xeBM6co5TuzeMpWTcDr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CRi9ofnMA9bDLpzieEnPr7JUpb6dbm3ztuqMqv234SrUW91tEUZTA3KfhUjdhPNxkFpsueQPPgXaWyfNPNctENF",
  "key1": "SRLWEQEnoiVknV7Ky8SvxMNUJUZ4ZGCZYz1PvXHCsdogWLzbSPhMpCgPwh2WCumazueg6GxaugFDn6GbpLPbijB",
  "key2": "jfYVkzmJr6fXGUfrAd3Zsr72wwYETq3LkaQEXQTsW3boucFhAv814PT1F6JE2ePF1YprgbVczmYH1mEYQnmbc7Z",
  "key3": "4EvWMq5bRcTufdhmG2qKjXBDKS62KS2WzUn8N3kdkVSAdDifvLvRULjZdasTt8PqmE9eoo15ZxKTVxtgA8SkUg1W",
  "key4": "Z9RkLsGpjN4YPhXAxszYu9bXBJN7AvXcvNnekhX4cG1aQEa3cr5rWm9xyLKpoPdtiaBTHQAajKVbDeD6tCLww1P",
  "key5": "3ceD1C1rZo1pnxpTeowzzaFAgiVAw2TBNaAxWV3cCnwY4TyHdafETF9Mpth12TsdkGASGFGR9bSGXQTJUaRzPqoD",
  "key6": "56jowzQHp5jFGUskvnVDNTtMJiBeTcFYv167vvXiTrLfw2qLvj1uw62AZyVUMnpnKXBCbYEZ5BfSkogaPKukPARh",
  "key7": "23Lgr227cSSpmcijU1XF1GDHuweBtbptCiojNzeE8azxHMeLgCq8JFvrTev7P474B6AMXcTz2komj2mpNRY5vHsX",
  "key8": "5UMHbgxDq4mzXKkWBwbhhgjaCNEBpn5CPJsG2heqNL8mJbUi4dRv4p5gMvinweF85PFfNY7ZP52zW1CJ33YAntVs",
  "key9": "4xmyMSCC6zgAbLhAoZVSisdifyQju6qimaRHdtLQpTUGRsEgKhJRcycM2NKBk7GiFMBfrEUUwUzdTWrJ59UbMZHn",
  "key10": "3MNmd4hCy6RZt3uD2rCL68wGgnPCRot8c8bnMqFYGfNc2uKvoNoduikkKrEaZpwtwNNKLKhXDf5iteFeEGQvfuQN",
  "key11": "5qCRd1Yvqn9Psjotixniv96hgzPo6nAmN8Yves4g4Q99y4B3ovH4GfK1PidwZT4ART7yubkQZYGDCtFFVU7dtkAt",
  "key12": "45qWFTAA6hNqgkcbgdPpVedRDs7Xsmd324bBQpJdntSv8qkYs9tDBc7wZqUBvpqZUwz8LuHemTtwi3HjkWehmS8",
  "key13": "VqahoRU2ieN2JCVgVSCzqcPeuxhEmd54F64ZwVY1LKrmgHtKZK8KMuXMfN1RtYiZTs6bWPjKEgojRnJUTPhdTnA",
  "key14": "34vZraTCarNwCnMETvhkeLBKqaoVmm25Y6LuNZFYxDxYGG5axWN114Qi2r8XzNskGLwMfG4fUMhAt4Kss8pUiUyb",
  "key15": "4is2bMpx3QSaSHss9Dh5PhHQctvF7HizmCCdnMw999n7Nbwp4uPRTd475mEtBfDii8Fo4mK2uuuATEopRfZQqLFb",
  "key16": "2Leeuz5A4z7hUigNL41WbZ8ga5C8dmJmEC9hG6Gpn8o7bz6NStwQZKQTyx1C8MVYRC2Gx2RjwSjChKUi2gjjVMHN",
  "key17": "3HytADEaaMT7vu1TYiFBUuq5KXrxRweiKewJAeE6qT1og7CCxauNVaF5FQyiEguvuSw83vZvuTs1UrdqEugBBe3C",
  "key18": "5FzPwNsgu1NF6tq7kiePp5KGZDE672NczzVXpeQ1ic6qbqSZbUBqvyp7vnmQof5DR8Fhw84U31SFCxHMkyY2mRhH",
  "key19": "67KvxWdpxGGggvT4wN7RGx8TynipHLChbgckDKZLWfuB8KtwHGRnpxaXuHWw4XeCC3osSw3pBiqu6yEKyJHiYKSa",
  "key20": "2DJghiNJuGAbJ1N5M2LUisuDzyNQGKKwL8WMA88M5hKUkyFuWBcPLbjsQGFcVi6Q45jjBaJggg2taWLAQcg1C4tY",
  "key21": "Cy1K1fJ58FKCk3M4CfjMDj12hgBE4xepFdiCR7yDW7EZqM83KFweiM2bnG4ciVaY5gSsMiLwSYFXSbp4Y3TMnm3",
  "key22": "57hf1Ax7RXJbFqx1KahxP1PmDMYwSfc81Qj1zQJBhETRWxPJiSMsnnBcxo3geEAbu3Pjd8sg5NLKLn3sw7DbAwwr",
  "key23": "JT5hciA3tidiXkDtMToEH6kFLDcVWec9sxsLyduavzscDXA5XSNtUgTkLQu5TJqoKRBGg5J3gtyRjwhTHFqipaH",
  "key24": "58sDGPw8SqjovoBQesNE8T9Xbv6D4vPgL48MFA8eK9JcNfmVuXqv8uF6suUGAqYL78u8H8nfXDJMHn3K7fGCtGsJ",
  "key25": "5X5zWBKDjQMRe4YQxasiFjPkUSz2NauEZi5uUTFNY7Dz3VMjQhwqJjNTqLEt1zyok2FzvoNfWcuLVeeJ9ZzQPHzS",
  "key26": "64GvtwnZpWACNKD4hDh2FTTjFt5XwXN2wUp9nPPSQNhw9LgCr5rKVvhAc34kQPPdiBwAAHcvnDcxvr53G2pZwS1W",
  "key27": "2d4sa2nJyQzqA7aN3AzZwC6UbQCG4WU76zX4mXiLTJMJpCrG64yFaGfeXEMz36QMjaHBHNsgw9ajZvoTmPN3buvR",
  "key28": "3hrHiXPShtYR3yPfCRD5auG9wHAGV238RaPPnWdU2nbKedKbNvEXuxBQuaWJeicUm3xLy63rBN72okxdaSD4d9bi",
  "key29": "Kvwjd2etM2SGg9oinphGyrBpWsbjAqDXGHfHDxLp5Mgx5fAgLaVpMiw1iDkaUGDHG9mHjNM9tU9WkSPaZDVVMia",
  "key30": "5ssxF4tqEJ3xw3kj1uZmYUhbdCK7QnYPjcJecbaJwe6rrWPmwsMgbf9JoAzgBKMGs7V7mRue6pVL8yhWPictuUXE",
  "key31": "2msAGPYhzSJ9y97diSkTCCYoHUP67UmutnThBNV4jKxpipnrGfMFid29PeTGEBKUpJTCYiHgEsFW3EH5Q52Peeyh",
  "key32": "5KgZtLdKk1VSmuYmqtLaFjDefwBUN6j29TrXrYxPMCyXLcGqLkcMKxZ6MoUj9NzeAMvXv62U2XiB7GMegD3rrtvc",
  "key33": "3XfS4kicHwYpPv6Ug2SRtWRvfyqB4FrHTozLb2s2NjAvd15eH5kW2ik8uC5Xp4hv1a4sg6R35wnoATVM1Y99eBLw",
  "key34": "57bp1JRCttNYHKg5oZ5rng4Q66BdZrNaHsKDCxF5RgZbFYHKG9uGdDS474CoNkP8b9zns8vNZZr7BGhESysPfULW",
  "key35": "4rxCXw695um5GEfemfuwt9mYA2ZKwZyWo2tN1evXsaaTxs7bhPJSdM5XS6LpCkJaRGvVyVv8YsMma6AU2rgQ6Cgp",
  "key36": "rYUTfHSHMsR55EXEy4R86ucJyyWSapvfwoiB2JaLXWkMjwsGf8mHWRquJ7Q2N9sa1DpTsbcGjvAuNjBvc6huYKD",
  "key37": "52bp7LVxu97QZmXu5KWmQ19Y6PAhLYt4nfosreMyPfe1ovbfnyQtKSR1Bekmqrcdhtw461gLpNh8U5mFWwTozSva",
  "key38": "5Qq2qQu64uFD5nqTy1bDTcUWTzGS348P7H9EwDmzjJsFXBHALqLXBDgrn9pW4YURhdGTLUge21jouko6MhDzfzCr",
  "key39": "61orN14focm92UNPHhspejbH7A2mGv15wWCTZc5Mawb3qzQKKGGJNbQuB3dTXmmG2MhYHPa7CHGWiFZLnfJkjhQk",
  "key40": "3KY7H9hzou4Bi5dTjnsjVytxkXHDFePLhEq634rRTUeYmQSPyXdjKeYRDCRaY8NEeXZjyfAnd5h6ufhzP9GJLSVK",
  "key41": "3nN5TThgsV81Trp1JGU7BQkyrZMDrrZiUKobTEdMkxuNChtCq8gwAQSC2UjtVj1ahgaudmeKGVxC1hByUKSTo1cY",
  "key42": "2tsKjEJD5sembBBm81Y7FLRmEzKbSkkoQLX58FMPj1vR6GCHtQoE2QvepAaY8TEZeA7E35N6sYa5e8Cp8DVmEojc",
  "key43": "2EcAoQwiG4ZMFFUWhhJQ1jSwv2JFDBY7KPrhLsYudvgH98C6wZ7gz1tDHyn1HGmAnPCa4RyqjPWgaHY5msTLysyV",
  "key44": "2hQaS3uUkAbjnR7tK4taHJEbkUsfi2BCR3xUnzKCeH9GnXeXpH6AL1BrCi7DFpAgu6Z4vjSwD7WoKQuz4Byg4uCr",
  "key45": "vRBAHjryzsYAoroC6piDympYGywPHfffqeQUtEmUi1r1U57Gnq8fPBAYDhAYhBuV3QzzJcuBwxqLdxK7KJWDZBh",
  "key46": "2ezgW7ebXyi9umew8jWLhRf1CpfLPyaJJjzhQyxQg1fbBTBQnL9TpTPj9qVrZnVFQq6EmTUhEZsjiDa3hS6DVzKv",
  "key47": "66kH6L9UXTwDMeeHGiA8B4GWbXpvmey1ypwKpejdS2BBR34Zm59betinqTsRVU1R6CtWjgMndrvWbHeEY4vzWzD4"
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
