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
    "41QmLrgA6Z3Q6skoqEZ7F4hSPurTBJ9aVvHLktXCLDL5wvfPYsqudJYU1ixVRoz1qiwPevkR5UAXdXjGPJCtuG65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgpV67m6kmFo8bx8B34W6tckPfsYaj3ytY75wSmHyz4WHsyytCcfwGJ5159N7zezjJ8PbLiqm1vNhNbQyhSza1M",
  "key1": "cABApc48ZwnU8fWSFGGbF9AwkyMQtvofLy3ivqXdiBcVGSg9gypMXF5QUjCFaYMRH9pLkW4wDMYrnUQCmBHqp3s",
  "key2": "3RVyVPLXuHwdmbhvYsak3LSN7oZJvCQrjg5f7qn9u4KLPh5L7LqUueosxupihinziikLtnJAwqoKtDwWgoUAhCZL",
  "key3": "5AVCrZ3MVZcKWwW3htDM8zsAzjLJNA4yHWKrw4TbHcJfzuZsQ5niDkgeuyJfDckxoxdpZHQE32FfGAL2WJzLbKQj",
  "key4": "5AWLYHcZcZhtaDmfmAum2SVCjkXZL6NYpCyi8SXeVQRsS4mSHe4tmKEywHaC6qMsvsJ11cQannDNiZB7rfdGcgt",
  "key5": "54y4Bo3PH8UebPUnvTar2GQ2ZyiwgpxC9Dg3dvzYnuFjWSkNFEwr3SUHTDxbReuAK7uGchvgFxDMWQcCLanuWniv",
  "key6": "vp2wuek1CDaB1QnkHmeZy5NzpgBv5xRnQuwDDPBgei1Va8pFZhzfi2JgVodNviDhNmZAwRndrNZuf4fhup1yEcg",
  "key7": "32gFuEtwsvBz5MN2Q31AsteWxmcUtdCiRMkoUojXAoa8eeP9S4gjYvLd5F2k6svEDD24BV4gnxdLu3poKExcyKQR",
  "key8": "N7phH2HNxPaUqbsf1gWSN2tCNny4X1qqP8UoSqFh5bLPtzkMi3QZyYBbMd4cMdxt4VwjekXSNyK7qSZRAuMMR3p",
  "key9": "2hRBBFVko5Z2Ko8GxKjVR8VgxxH1GHZDKo5Sb2bYuWCs7FdAevBGSmdDWe9RonicuLrQ3iUbZkbDRCtYzevJYTAS",
  "key10": "4JZ1bVGdmRoySJC4Li9XCWqLD9LnWDm3cURAgjAtUgwGnvmMb1Qm7diZBnhLSkeYpFNewTXXv64r5DYuGTLGSWUr",
  "key11": "ujp6Z9qv6oUdYr38VJffobrvDRexFtv6sDy7pf9iiWNsok1FuSf3Gg4WggsW6P89zMyyxcr885qDb73srYRSqr8",
  "key12": "59ssCcPTVeFZKiRxUeYNDAjEL1k1KUGoscEWR7stEwt24Hud6occ5UEA9yQkbbktLRJWEc1gnKQUG5fbT5MaZsZA",
  "key13": "3MJB2pQeSuNNWYWjhXYChQ1FqAf6R8ZA1Xmv8iJufzfy9b4QjBHRJMrnZCn2pnhpm2JN7zca1L2pKVdSjWBGCmZX",
  "key14": "3WxVfhp1YcGEVZ7EfYhBf9RtqnhTYMnRd16GXApwsEnqqtbZjxxnxTz77GSVuGyyKUEVAYUpQXtFWTerKBviQt6n",
  "key15": "2iURnPULZFtdiKLXmG7G4sXKgy2YUKYgGgdJhkSaUBXWWyNewCdmpqt6gYqxHNvnaUmfy1KdXLphkcjxCtcfR1Fu",
  "key16": "2ATLEjbD7GargdthqaicDgKtkuJoy9qa3PTFXPJNmEt6B6kJn15XzZ9MUDScXNMUwfWGPZ7GBgqmmGocjM5mCs3o",
  "key17": "2PBL1VLjFgVVnA9ENoYT8T92BJgYa1rxjyYEsoUcYACyPxV6k39Nj4yXaozmuUn8frBBBaUtpWkKDLYFteHLxcbt",
  "key18": "3SokbLBveKA4NwjMoVGDWrTg8AFvLoYG5cULxomBYv8nsAvwLe1Ea4U25yKww3iKbomM4Vq6AzAkKeScdR6T47iy",
  "key19": "3aNY4aDAtAasmLSEMpjs7gFKuTZQh9xex2Z14Wi7wHzyVZ7yCyJWRYwYv3yK5ZSjrajZrc7H2igBvZHMUekHYTQW",
  "key20": "6S7MGBxtkECtUn3pGsAXCAUGizHiVPjRNxJGFAWBxiitHu5yskgBCphqQkfsyLvF9fPKQzj9puTgpBe14Mesxfq",
  "key21": "5YffJQPaf7eGP2XqSfAd3H33Cdg3Cnd64FmDQTNyMbxKBk2g96nHhtz1YMxUKqWZFYUq6W8BJdcrJNPpTP5WxPQm",
  "key22": "3G1ncCXMdnKUAPtjTQJnSfAsZyQ9ZgmeUVXSq94TpEdu1Kds3qZsZwyRvRsJztjAGTFA7ExGZvoTf7ACSwbKFGwG",
  "key23": "5gAE6XsyJjJv26NrD5TNdxY25WpGgGPHePEe9oZDWY4xKq1EbC2cN7vgHJDsVF9ShKE7dBEjM1h6brmmqqnfbwLi",
  "key24": "2dJgtf7C6wyoTh8hi1brvorYbwPQr8ZgAHjNwSV5mLa9V6wjmhtopst6iKTakW9yS2D2MYTeLLYFUWzPHtW8adTL",
  "key25": "3WKEcRNsJxUdtjx18AYNE4F3F1NqfshSQeiRTC7aRfmmkjYmncKTw2ZQoSeTxXgrZuRotJJTq8HtXFqvEanT5e8J",
  "key26": "45dRd88SphtbwoMnWGi1xWGMjNPU5qtDfn8MdxgAujM2vPsFZhYadzRoJR7uk6xbYw393KH9trt3hu7HXKz8BGr5",
  "key27": "5Mwk1KhHmksq4ZFraMWBiMfUWBJb61DTvSke9yLY5epAodPY2ZypKcSzYKNE84cRrP7KbCoTj2kDp89E42DWNPrG",
  "key28": "2q4geHiSLtn7MVvun84RS2N7SiXkrC9dKfhGBp7K4SMc8uaUf6vCBy7bd5CFGGdMpjHu5ZrNz812cGQNwbn61dLt",
  "key29": "3yjQiYGVik1fXNu73ExV5jnsDXHkdhdiErzXKszCcVDmkgNbQ4Fn2YXeqKwXGhQcz3Lnxvp9HcbVccRDabT2VF8a",
  "key30": "2tYs6SATthTQQW7RwcsTyuKFGeHe1EZ4V7eaAhXetBzh8bNX51Fkz2Fy1fWFnCQgNicJV2KwXAgKQ6ThZxZyjLCQ",
  "key31": "iXmoNX2KfgY9iiTtdBmiJ6ti1AYv9Q86empwtfLKePY1n6gsSpRM3ouXmuuFFHcQWorgUpHF4JLLwASN4D5LFWd",
  "key32": "5tRJC4cSpirjoqHxkKwSA6a4B26JikiifSF2LjrYw1NapLSAmva7xD9fFYvfFYNn8uR2tgAFSpfxvU7P8U884NvB",
  "key33": "5mFs31niBdZNcDKvKFBtbDoAvSWaiFot6X9oFsg6Lz7PHZ37B8JSFujqLR7htdmzfhgFTQWpPGaS8uHVnLbR6viA",
  "key34": "BxbezrDy6wv339Kc2CkizLWkhhP99YS49QcMZbHJ8q76rJZ1LWQzHhi4ecFN7zhBZE55n63k8hHpeumjjbsuvgX",
  "key35": "5DasJVBC2mZjYFcu5tQo6KaxVMhYwaxr22UfKvZf1tqkoSZTQoeZGpJVgKvYNP8g5usvm8K9yLr8qDSL3VTuh5HS",
  "key36": "2A35tdYx5sZRAPfuhGuF91oYz9JxSRcxwGRRkumAZxnzqsMiAyoWgzqPo8LwMG8KjBBE5ePqD78xkbpdBNUZZKf3",
  "key37": "2MEy4sG1AYsn9XUfb6C2GXcrXjmSn6wBfc7Km6K1S3N6RW8CWGpcbf4na7CnJLoYnYr4yTJdrnFVyurEmRsJgwWn",
  "key38": "3G3VptvaoHdnXFfv479SGEMfm4XPA1CUhsG22Rw3c6PHVdMGRkV3DEFLHGkxZPH9FGvbLWLG7PieUuHqk7KXUWmj",
  "key39": "2MebqaURFm76AF5rjeMvbhwbyzfWbLSHgnYRMhBGXcJV8RKTHp65G9Kb46Sgu4SDgSuEtVpjXnyn1tv8tM4YES8C",
  "key40": "52r5eFyuMG69SaN9xDmCjfWp5fannh3DeXzYCLsRiNLMa8gLJTYA97z3oG4fAgUPdsEWfjSiW63D9DASUwTiAvRo",
  "key41": "3E6rftd8Ecf6by2QC2LcJipUgAeuGeuEBD5uP88C2MZQ5jDRHXLMnZMaADw3ksoYvRX6UjyEeqWtRwPeguU7e2Ku",
  "key42": "5feoLkwsBoWLgKhMY8rTaXXZZyh5z56i54FHk2Mzy7tBXYgdLNnJ6FT6QyHjqfxhsi7zkbcA7QrVgKCBeoP2RhYx",
  "key43": "4N63pzMGSTRiesM3A64khWDtWTk7GiBtUuMFDkUULEjwEja3CWHAU6MjdCv5p6k1okfHHiuMmpPSdbqGWfVDrYFm",
  "key44": "2uuui1wWVycesAnLgmtUjQkpRjoQwMY2wxXB1Np1W8zJmRAZyoMf8JY1oxgXCqmhxruVH3PkEgPAhYW4xqRfHHNe",
  "key45": "RuV95Zea5h5BAkWpj2GuL9XiY4G1DPFvra3k1pvuo2unxqcE2SsVWTHpM5zvwC7j4KAcDKEf6g4vti1Y7AnF7Dt"
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
