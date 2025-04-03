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
    "5eZR9Z4bFgFMWsb6vLDTEM1yfYaZpYrzZSqt4tWzfobZTK5UGCxqEVMTJh2evgvg5kHckTE5EXZbMELbdVfZE3Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BdFU9rD7Y3CzavzwoB62AJ1JwySGLcVbtgbvTiTwNkghpdstKiR86YrhZWfJuVwejEnkYvqgDBJYWUL4g79Ucy",
  "key1": "38KCauRZqcSheQDaSVNHTx3mH9jf7eAwPNf8BKXujSpbPQD6JDT5kGh4FQ62BHiigJmyhnK84AyhGM8uXG1MLoHd",
  "key2": "3CgcFQ2yUnmYksCqz8ggatM5gPFyEXH6Tnw7Xmj6f7824WyHLx7QZrBZqfiLmiFL5ooPKdM6RTaq9fFtMPDdF386",
  "key3": "p1N6FzkSdfekYZkZbyTWjyHqjhwdNCK1F9Xo5rc67XxtNsA3cnzHJEB9ft8wnVAby9T978JFQ5BL8toCopwAvRM",
  "key4": "3t8FzrpLXVpRkeoLJiCifH46G16ymaWdiGspz1idrhDEXc3oMHiZhoF5xoFYJWCgsr9ZbX1XFHDG8thxK7ScRKfD",
  "key5": "49K7Ahs3KNQQ3ufyifFhc9VdwMt5pBDVCndPNXLPFpqLy3Rh3kFGqp4mUp3wmNEAwUX5kvVGEGrbyLWLG1binyec",
  "key6": "2yrz2mKRHxbhETeMWFTWcThkMGA6uh7UeECtShPT8sSj21XkJQdjDND6zaPV3CMvPCEeELFY7ijV5cZEEhgzM92U",
  "key7": "2ELbu48rTTp1doPndkmpd6xaDgzUeyAdTLcpD6SjCrxBwoRJ2hwg2UweGmi1c4xQ29W6u5uuutUAq8hzFHAUW9bp",
  "key8": "3e5wBRTZpyUi782QuiGSsaG8jD4HJbkq7CL2vRSiXHyTHwPcz9RA6gqgLqmvSTrp8amuXPmh3vWocc5HtkGqx4gR",
  "key9": "56H8iTEeaqvEnth6mFg1wocF5MDJfp9uSFXo1BXq8FJkhVheAtkZz2isXHZMjpXf37KgomHCQhyLfK5y7QZSXQsd",
  "key10": "5oAYD859mVJRsB2PzdZLYm9TF3wBA8U9UAPD7LLn3w9JhryPFnrcmPysA43PdwvQarwCftZh4NYisxyXQf8RKhvV",
  "key11": "4LAw6rdhZxDKqtCVLcjeTio6i3pEZXcxa1j7ZSNvc5dgr3QcaYth5t31Q59LagJ8x9xKHRPXfut2pV4NYYsD8jsp",
  "key12": "4hYuWRUYVmtxecjpqKEUY4ifNrw3ivanzxsdvN3SWogCtCZV1uJbLhziyNtSsz2Z1AoUiCQkEV9RhaaKuk4kUfma",
  "key13": "3MtLLDgsMurdhHvLyGeyNa25rTup3fgYRRRqVNMSU1KGp25yej3MWaN29E4K9aLtyj383aqhTYABTVTHyymaj6ci",
  "key14": "66nBoLCEZX9AbLcPnnpo48WgstcnYUFkMNM6m7BBpbPqG1V4iRWtMQEBsXA3YvqxWrfPWnMTWKkqW6Mrc84RCnM2",
  "key15": "4vjdUij6PU74qchF37JXXgxUTdqsQP1G2cD9dTwKVm9HfCWE7ru9ndJYZa8VXHNCKw9J1u9rCXgyrvRpXwb9Qacy",
  "key16": "2NRFobbhsiGeq5AKpJ2xo9ar547FnTK2Bp2WrJbHAqnFhTRPbYFXbPc2yeh4omexodjy4nfCzjKmEzFaN8Tf99s9",
  "key17": "3n2N51tz9Huwimjtie37YAqwdPYRhTd5QV3Brr2MozZP4Bnhdg8m36v51oGL5aXt95SmvgBAM1d9BLfAtBCjJyM3",
  "key18": "7HtBP4nTkG58whWBEbNT45fAJRpvFe2em6AAHwoRrJ72AY1ovTqfwdLhPHXykjjcGsXWecZThVBzYaYRfMGmwGn",
  "key19": "4dg6WRy7gSeJCYpcxWQU6iPARFHmaZFCFexsWbT3gdHiaMtkzoh7KeQu7N6MsB9b1VoqFQaGyQwfqQRtqPC55RAw",
  "key20": "57hrYFpeWqCisLwC83NGJocZxr48Bwxmu6KmtJLhX1sdZaw2Fa4Lo7bngTk6HqgmUAfp5RRjGUEUKGaNwpaqFGwa",
  "key21": "4237ozgGQnhASoQ69AoqtWrfQvUzZ2KWQZBpxDbQLbv2bZHjZ7pKZJ2W5SttpPSfANJZj3k4ZXG9XsWg7cVfzB2c",
  "key22": "2zHr7CSCWVrWzaJ1D4TGwohdCcoMJqUeM4T2p2wgvbZgnNckkHCBiztDghgzWqzeNSLMnY3CKiCs1MU3sqtj8dbP",
  "key23": "5wFJa5dUk7pqJqXmpW3w4gmKZUB677Ry1jhzVMcrkL89WfA1T4gmgNBxv7HgzNwazCZ2rfnMbzzchCbVFapBFPVz",
  "key24": "2ChjLEjsEioxWrp5bcK2WUYjnk2EaymFWWEjMspix7dA6TRt4Jr2q6usiDKhYitMPvw91biS9NsZPMF8jBGdAqm5",
  "key25": "46nhnWbdcYN4cUw4U3VEzzjfgX65xYWBkT33ioiy2LZ1Y2vJaKFSXyTFjv5xC5AxVM8Dy9H6jDK2tRCMGNcPexNm",
  "key26": "TsjWarxnAXuhhbRpUTGWQopHYVHfsFyJ4C1q8WeruvAU6DjJ7rbYWtTfzc7WrNJFS2aVpoUFEGVKSoY5h22FSjF",
  "key27": "ikKH1Tstf1nVWVCRbwCHcCbKeLNsLhP3cdK1GFX1XsnnVCCxTJAv9D86ybqhgwfuknAdhjYRyj9qHzjssSJJ4DS",
  "key28": "rdXZh6KXsUTBQQKTwrTDekEan1tdYfYwV1ComYuJYGWCkn7MUy9fbLLhcnfnos7bpZoJsi9MrnF5JGwPqm7384F",
  "key29": "Q2WRCtxw6SSkqKqKg3dAKbD91bFyZ778Gtc2AmFVG1ganDQzUqPc5MhHbAooBPnaqoVqeP7atKTyU1jCMwXNEUR",
  "key30": "4ev4HZPGHXLsJZYqaarX47zU3yJptw76DUQQiU7e8vjYDoKrJNM3Sr3C1rAUzHLCkDr3x75CuQ3frR6GEDsvTZdB",
  "key31": "5DBHaNay5fyJgi4gVmPaA5vVFvoxki28H5Kbf9YDc4TgjeY3TD2YAvLHgkaAbMCCFoA46TK1XCA86Ry115hpjFp2",
  "key32": "Nvpozh8yQcKm9Q2w4AeSDWyi7b7Emk9iivsysjSkpdo8wrNSioD2CZABTbgdbWRvuYNnreD614SekRMtkX8ARp4",
  "key33": "7hvKYamFav27dD66bZbqWC82VUAe4rtQMAHsVpFwZdkE7jT2RuTGtWyiBSKvWRk4yMuXhoVoHwwUsJWALy7YYRz",
  "key34": "91NT25FxW8AcpfPQNfy99zUURMaKQxQ97BLUmPsvKcHinAF91mwB7iYz5noudfa5Y7H56tiFztWAm3YWCJq766n",
  "key35": "54QTJxTDq7taHZ5XfsTQNys556YhDMwX3J2HbvhNzeV2NfUBv7dtzeuFzRcoMnfPzFx5V6xkwewgzwfZiFtCu81U",
  "key36": "LGPcjcseLFKDDXAgkFKbvTyWqB1ELYGDcnS9ZPDGqk51TVjkbQuWVeywpvDyg6Yu4gN8oHTsm68uC1AjwRgRea6",
  "key37": "5kABEbkiBVpVPzfMhccd7PbeT2iCr2JxczU9AmP5Y6XaWKdYFAtnYd4JPJPbdNcNepuRcbLsrVeGoZxpWQBXnL2g",
  "key38": "2PJgdA3pjWp3Ptfs7rwsaHviTrNW7Zv4s4SsDqeQkistBdfdWM8Y2aBtGWhbuiGddmcW5R9eV4FW6qLWv1NVaSn5",
  "key39": "5e3o49ZzAdcK9P9j7CMu8BdMC1egHfVGAHumkKW51UgQrHvc1FUKQhxK1ic7NAc9XsTF8qvwf8TGCFK6kKTkLCSh",
  "key40": "3euxKGya5pNbjv2UVPRHNehGWpSHTGuxoKVNU25kzDb8cUqVaehhsXghkGGzWuYpJkpjRyyWdpjpJBfaagfQx8v8",
  "key41": "2CjdfHauzrxBEVzLNuNVfvYh27xAWX3dqxRTjiGH4en52Bh6wg2CTtSgbwtzURira9q71MK8qZWmrPdF4ZiZx6fz",
  "key42": "2m68ric6JhBX1MHVfPCfwsbHMN9zL6rgQar8EnzzMFXcbfrbne4EfEj1yMSkCNCvodLhhx7JV4fJmB4bHs2JbgVj",
  "key43": "5NJAh1Hmg6kZZ7JpWHfpPnrdVKVFQgi8Jx5yH6oGHBqc3sqKosrmTdaum4NDf87QAwfcW7gaTjfRmNVj5KggJ2yH",
  "key44": "4Q9TjsaLUJBJvboLbVdz9CuLaJAA4HLxLqGrfAa7ja6WKgT7DQvrzMHRRKHnWkUuTNfvDbPFDe2joGDdQnEQuSXf",
  "key45": "3MZEg3FZLEr7AvSy1Rh5pxNizTVsTTwu2gYsX9c5ANnPggeRg23v551HTTq6oGpE3zNCkWPqJgE5B3DSurEHFvRX",
  "key46": "G1U1BxbrKtGrXQShqfkdks8eMS6PXcde95p5aAHaGFXceUbo7tWULjQZwSA2mx7SRjuNxBiv6LdTh6gfBhQGYmJ",
  "key47": "nBu96Vw6x6rJVvLy31HiyZauznQSGavibdEbUGySzVdVnGjD5AZnzEsEvcNtixJXSwUU6HSJoL7TxjYPqSQKcjA"
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
