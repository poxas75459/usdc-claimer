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
    "2EBZL4QtM69XpXdPUwfzKyPGcvgRXGZmYGg7CqAoDNDsS7qUBiZhhCKTSQaPhhRGKqZS34AjTkrX4KMzMNnfwoNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8Wts7igrBJ5UTiu4LCCbkzhkc2XnUebEx93rLpdQppYp2EiZNhfKDLEVs7cKkpgmrBVompUi2HtsueW6oVizdE",
  "key1": "65buusGdUmRZiyzD9PtWZMva3ZYkCTxpvywTU12tcnqF1Z5d99ejEoR9gsL7mEtE3tC9UNQcsZeoT9ToffQ8LM2C",
  "key2": "2xPR3ijEJBxwhaK3GdTG1XrT8qHC5nLb4WjowuqUHhAao8DhdXokfg1JU45Ssb3xMEtR1jJrYVdfdrRHvNG2fHmR",
  "key3": "2Y4C2vTHzRqq6oDUKTNQBELQvV2DLUtyGRL4TKrXyNHF6tUAsiJacNGCLjeaU5TQVXzrjo6iaLhCr4cbaKyfB9zD",
  "key4": "562yd4D5gkgtwKSN7E3Rt9CSg5NtNcnRRqW2HWkXYTgaCr6NMZPvB7ZaVeXuekeMncGfeMAwvJ7RCbSotESxmnop",
  "key5": "2ae9eDjRtK1z7KB7J6Rif1NcQmww4UqbKYxKvT9kyrcqkoBJDWsFbRS7aiJ9a5oViWfnBoGLKdy249dUZsU2ouLY",
  "key6": "LpJAxbN8NnsNEpHWgh25vVsyhyJMcmVVNJ5AYcaoCbr4tago6YZn5B2DPH3uRHCfNoQe4sDbTe2BvhVxDYf9wV5",
  "key7": "eucGHvjcAHm3aXhFnfVJsfAfQCx3gBajHTdsYhKfcgbefTbM7pufyEseriygH3CfqbByhWK3eFQwxwFyYsu7jMK",
  "key8": "214q3Rz83b7j8MeufhpTyR8DWRJar9HzYftFbsvcJQyUzFf4U5eq9WV1UZRQZQDdTmgfSYmiUroRaTPaf6CeexvZ",
  "key9": "372xfcg5sWjB4Um5vJBYM1ya49fzMDE4f9LpFEQAgwqfoMz2Jo44kaKc2G6wwwdmzigpXE4ZPSMqLBbdPYEWrp7N",
  "key10": "4f11kRPemh9LXostAKFr4aMS1cUDDZJy2BU7NGVBcWTJjq7GuLH5XzpC5L8mrs6rBE8n4CeCK1dnMEK9ivSRsoeA",
  "key11": "BY3nzijgDAxvghxyQxGdoVxjCHrqmwJiffd9vV4vN5c21dqWAR6DpTRaUiWsjtbchXCYjwpoxbCTbnV8Juj6dSg",
  "key12": "2j7CHy6rxEASBwrnyJHLd4wFpGjKB7bB2enwE6dSnFMXziTYiyUi5xWJZGt1mwPBqQbW1Q6sPCJ7ZTwFXKfRfc65",
  "key13": "5nqgXRDTrAEk7AAj1pgF6nJT2dn4iMASWTtEMeQkAZHFuCMnRvJBeVVGj3vAMAADKyMVTP9pudgj1afsEQPPF7zq",
  "key14": "5EX8Yz9XUjVeUQueLFdc1heC6ueW5pDjRDHFaPMpBVQSBMjXSfik4hyuDsaPFofbz4ojkQ1wdg22r7AWDrnLVaPX",
  "key15": "2fXErHTEkmBJs2H87HDBGCBqSxEBNN1UvSyKUKSe2PKWaHfe75T9GoMoqV8cBPtt7nvb828E3mLH8zsw4aSJfdjb",
  "key16": "34E5Y7Pu3aAAgdmifquVzusbx1K1pTCWmQ4ST6vnRUtdw88Us9C7ezH1hef88ygGbkTBz58UcHXiJVckvhzEGfdL",
  "key17": "4mQgQzSNC6WV9zc2KbhLSkAd5ZYzcEAHJwv51GQF78Fxu83XoTN6GZCQJuDwHfdrBAvwMJU6Nghkje49da3fuVkE",
  "key18": "4NXKnGfzGrJXz6bx9efYGm7h853vGe7FAnQ15KGh5qq3PLSyUwK3ZraoLV5gApoi8gwZ9o6658xFxpotGrQb4muN",
  "key19": "2nTaMM2Tc67Aos7RPf7HRc73Gkt5omkmAQFBcRDjmdgrRwJrcwf5ZnSi17QNMWJFjejge3eDK6Z3HiuDGeUFym5E",
  "key20": "4B2GQBXANdcvEJzeRmpomJMMstKyD6tEh1DFF6pmdZwLVZwFcQhkwwJxthhjKkJ3A2ppCVbpiV7K5BtKH8zPwC3d",
  "key21": "3TPaeEcRbogvcSsBoJBGbPdEbzk68oazRALYnraZQd3r5zDpuHUmfBdW926HXHy2pMDCYJpma1sGndnujadZhKCL",
  "key22": "64x5WUuzcKyrnkAYgfxk4g2KqzJdCL6kezE3DS87umrPRNZbFJcJpGsnBhViXQbVPSTQGL5FpDWEPVGF5HdkMQH6",
  "key23": "3kavBHvJ3fMSkm4XBDiyAddmQaHh8uW2yiC8yHsy355xd89QaxgHk8PQwq3tCNrupb8Ufp8jpR1fpVNez6nRhHm6",
  "key24": "5FdenEnfsQ8rfSU3wyrBdGfjq3CGv2TQ7YxePpRxSWvN9uRGCn7oEL5FU545mgGoD8LNafMWseRwyhkZz7qZo42G",
  "key25": "2XZDw3wPbYjHzW1uBYqytmkbRYpftLiwSZEVWDTQMoYsNKhrxc7carvbjcMUUPPxVeB1SRhNs5QV7w25zi9LkiWf",
  "key26": "4H9eCFGiViZsJZSWAfkd3iVzSURsh5MmSmQ8JWH8yiHsiQfgiudwWUzQsex3cTnk4R4Zz83itDWEKX4xmrUJEpXZ",
  "key27": "3Roe9NP7n7w4ezimv7ENKGLdQe8wL6CsZZyxGDXyxnsXz9uT6FC3koSEhrAwDkrAcBLVDi7oaEDYpFxtCHtJj1Xk",
  "key28": "Gx4tMx6PmZKcRU1VexRgJLS2NeAXseE5ES9eHM2wviRu6EcfqiqbavBwVGk7aPJNSKJ8feW1br2rJXTCTtEGXos",
  "key29": "3TZHjgR8b8Cz3b2hrL7ioeoXKkywnxMLV5iXksZsnSqLKpaEiRNxEU8UHXtHBJxgSCfzCd4iBEacDHL632kDTBWG",
  "key30": "H3g6HFgyMFdPKQadS2ryndTsJw3iDYLLqmwwJzJYWsqSwHrRtKPJKRk9hjUmdXoyUDS1mbmVb38rgsFMvpqXFb9",
  "key31": "RQUA69495dNtGo5Y1bsp9McHWsvq5ufLCLkaDGCZ4i5QDvskH61b1ftEXPcUKWZWYdfK5ELbijGtVd2MbbfFdds",
  "key32": "5sYfEThMhEEiz6utSBTVVJADRFUXedgMMc8dwgjuJvzf4vJ74d6yTKqs7tEPM8fN5JNMG9HjVhjbpGwSLvDy93hr",
  "key33": "3StPJHDhZkwUaYQU4NZAgcsdDPsfbHcBaHBArMGhYHmbm95rzafShy26UtRDQLfLA1bG7vAxC1SE8giuj3Yqhxdt",
  "key34": "2qpowhVKEhYVFHSQzF6s2cvAugVHv7a14hdjuHUssvLXo9urMpw41hizduy6LMH8wpjyCf6aHhrrLNeBKxRVHjWJ"
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
