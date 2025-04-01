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
    "3xyS3mvmqiYu4rpXNKSpUASWfE8H69S8NrCa7LmEYHZfJiwRsZaGgZLTVpvstzrF1EUr5r4ENBmwMTyMSFeTSmjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujH26rbcU76XTU1N7HJiCG4PuMUY77VnYVimQUt96muUrZ82uY2pJ1MKPqXSCggjFpFxzjbZCbuezvL8KuBh6VG",
  "key1": "Ym3yeKPf9UgLv2UC7gwEWT5THYRuiaQkYJYyyZA8ZsuQBZNfFbDNKPWpxjc24BWqUizRsaoA6RYDQXyyKZySYnN",
  "key2": "3Ey2gUpsddiPyhqWzN1UtxisQTud7hbDMCxdfqXu9zgYd1JwzbnHtbe8p8PE4SiasxJ7mMuBJAKRe3m82o8zqDnk",
  "key3": "3UCTSv2gwbarjgMriq4FFFtUHyPfTcMrt8SwFQVa3gReDaj7d2kuyUaL21Jkug281S359hTnRWvo5nrYv9pHf5ak",
  "key4": "3EDCfUUUPDnEC4YrxKxb9NZQ8npMRcuTiaTzUGqvWeRwxDXY8YhhWTzrwLDmiBo1Qg62b5Rbag3JDGYAWbCwREzk",
  "key5": "5t4pzEw5XftXT2uSTSrHcgF79fDuwRBhWaCNCbJh7XNHv6jPGTibLphVZAKakbkknfYdaqK149YWYwPTdPHjFdxm",
  "key6": "51w8NjRVz4ECorUEnUtJCjSaJgm44eCrqBPLBJxmARQWmWfymKJD2vMiZFnkoEQ1ZWBRLd6nzoUKMA82RzzpryCS",
  "key7": "465AxTY1TKKnL6DDsfc8YTGGuPYyobBKyCZ44HseSosxRdjgvfV34kW7p4cQw5CasdKJtcSXodqba3WT9Yaxsjag",
  "key8": "MUG5fe1hssJaqvpu9M2MuWndxT4awsNZrVBQZ7xMJnVAHkHrWzeQZfYH2BaD5JwRnsfwksvfaQNNBtBVghC84Ca",
  "key9": "3BUmdJdYU2j1FLXvs1voNbzbs79JndxYKYMAp776wRRFJf9rMcUCkaAY1C9mzJsFuw39dLSQfxXwhKUuB6mcBJi2",
  "key10": "3ri7gSiFjWJZcerAKo25JorZCxkMAiHY7oPyeSdGebfcZyn9bsXTjaND94Pahjr8dHGvMv54yj8ktk9t2SvwQ2uL",
  "key11": "4e3aeDQ7pdMk82uEL2iWbSsVcKxfbkUEMq3eZvkeaXwN9gPBKVVPP5BTPCS2e2WDQ9mSYCBdkEhXNy89nWACDyYt",
  "key12": "3YR1JHetu1Gv3ApvCQGmkJyTPG7et2zgy45WSU9EyVpK1bnb4KA9Te9girQzFf5iJPwstJUJ2ydFVCmU1Lanc7WY",
  "key13": "TZAAQeK6mVVXfnGKDJk4tiuzoWd1dNLdEZu93x3TZxGDnusqQzmirDGuZiXzJa2GthhRswATQJcAg6Hdr8dhfhZ",
  "key14": "4SUzppe3PptjY7F2FsXfSm4HaR3q1bfemh2fNDNcrho7j3SJVBRt6SVYjGhfj5JX8zuyhUfzswjxtKuUu1Hoiiv3",
  "key15": "5N5eEDaTWfvWqXFueJ7gKGwefet6Fr3iRXssTgKiPAQS92o7tiTwmdrosMm6pcsdm7MYTNMJYxjKjNYFW8rifku4",
  "key16": "2HUgtwaNKYyj33X7x5ebUwnw5JY5GsnyevkygG8jpA2W1B7S7gxUDyNWijmD61Lkk17t7Uw2xeRLyFxBR6ZpKmfE",
  "key17": "21vddjGrHtCnvT5wHsgnVL6phKF8NW7jd6zh9gZg6RF6S37Zd9EVWJF29LnKDfvXkotM8FqCBJ69abnUGKtFQ2zy",
  "key18": "2Gp8HNkizF1rJx8vLfe1eGi4s4sFA2ym6iosVVpbYJG6Vdaag8FPL7grZ7otXTyiHmi2KaVmmUJMVcoCpcBGYtZt",
  "key19": "2JZRMXiMY2EUDgsjX8QSz1SEjJs7yQhKHktPMawa4qjsmt8UckqKmWMWnvDwtY4ck3LUSDvYzp5FrF1ZBhCAxuLA",
  "key20": "3wGVJEizyiZCPTNVdKZJPRYDUrycWPkhJAbVtHootuo5f67g4weBE6piUfCgzpDRpKLnqRbvhR19rhzG8k42wRdA",
  "key21": "4NyRpQm9aKEbugEk16VTHBZJy4Ep5zq1TbDnummihYQcRjGE8Q3Pz5kcvHPHAdSwhUG5WjZtzWgpD2yCGDDEgJBy",
  "key22": "398EsXVP3KNW7xkaHqPhUh2JraLDYsU8PJM4qwCVehh3X1LfEAqkLFeWWGE8NLGqHFs6hDp4ZfoF33V2QFW9NiTT",
  "key23": "5urzYmFppfpajWXNa8QktEDpuG9ve3AG78zcbdrvHpRCsnwa3wnnyDcW5RdkVN735w3QpwqPvvX8HLGMhuEhN8y9",
  "key24": "4qWZnDT36kq1xz6U7U6SXQw42PXocU9SWv3G73yPi5ZS7hX5dwatrt3ejKWRaabyoNV6pzaEZiKMmUzmFRCPv6Ht",
  "key25": "4Nbr1ZKi1qRFTG7FskbFKtZoSzpoXuB9zUEwoZDrksRgh6SZG63Kj77eJpjLPRmCocfNBwpWNURfZFQRHRgf5wqk",
  "key26": "2euu4eRZhADoJMVSMyjVipveWwvdWyAvHWgZvZyRRunZiuUbMnYrkxMs1Q8LzGZFAEjfcudcEwWjtiPHJHy3QZcU",
  "key27": "4VgTMEka9b4NRP9sPHd1Lw8CwukGzgL7JRHjJdF3D5KYNP1VnVcPjLxVmfFqaAWptShtcYvGpv3xiR47XJch3RX9",
  "key28": "4Qt8GDFFT3wdj56R9VrewU38fdrvYxbf4mHSFTCW3atJrbeSPM7U81oUm75SEFAqTs8FqAvixKAdKsQiu62Xf4Sj",
  "key29": "2cP2E8pdY4cWqkt3BwyKsFwTvqB9sE8fQM496xfkKriFmNPFRVCaXuD5fKRjabB6LdCjMYsuNvkKpkZuqeXzLHYk",
  "key30": "4BXFpea4croepGZUzvodgLSa4W2vRagTiKddnwfvdhKwwsbh1cighRrRT9zLox3f4PBMKBJpThknDoKGwCiLebNx",
  "key31": "2JjdHs3ygnWYsiW3nyDjng1i12ZSNeP1eySSGhk38Akk54bVwzydRX8NyCtjDbjRpQWWUTtDfb7sd7Riz2FZhuAH",
  "key32": "4ERPiGCnDzxBruvWrqjgMDW46dL69ZxCoJ32oGg6GYXLGLPsVM1VwWHg6B848mjrEvjjsFCZkkKeW7Xf7Jeo6BVd"
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
