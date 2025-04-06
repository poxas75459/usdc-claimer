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
    "2NqsRP5mrDukpskN5mdVjKQnnBQR9s5YHJfEeER3RLd5hoEJ4nrE2dvdpZUkGc7XHd9H1hCgXuMpbXmKkKmurvYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3DXQYRNjgQunqphsJXCNAsohjyK8mu5QiyYX2J7MBeM4vjMEu7eUrxggbpvgpC1Pgz6hi9Wyx91tmdc2Jnm5b1",
  "key1": "3CtVAESzEqKwaAdjcRRdTJLbXpWvLi66oSsyenRNcGurUfHyEVoYQgzd9vFE9Cr9fNN4doCFa1pqSkLFGtsVeBmD",
  "key2": "5yCBiWsmrrHTMvV13iRUJbKJJH2GMJ7phjCk1utPo18EPGh8PsFMR3rDFcoVnTy2donn1N3ubLrgQRoDoxSH9UT2",
  "key3": "uaCib4htuibNySxCJC4YQ7dzanDiriu46KJDFkNK1nnW6G5dDaBGM63CSXDFFRh6pXHCACGxU2779JczFm6aDBr",
  "key4": "5LRerVTXWBTjLMTiCrTM9bVC4mt6WQwQLWBNgsnZ4JEFPshzzoN1Kct9LJwd7iqiqwn7jBJikyToVpBFnxHwHe8n",
  "key5": "4JS4M3eATKAhfPeJyy3MDQbmnqMQ7ABP3NXjbt6m795HnHkB24tPpoKyGExYERHegwAaHcyNbZYeAmAD4YGimeB3",
  "key6": "3LmA1ZmdyuQDn81TqXQRmp8YhwJfwnWWC9KckZvkKQ3QKWjx8KRvQnaaZVyMTzsExYDK9BydFSaHZzkJeNaYMirW",
  "key7": "MZW8ZEpYNXnSoLqAXn4WFm8yKckUajReMp64Ardoc1cYmAcTP4k9MesM7cPbaKBA2xVsgn8MYGtGXLH6NmVxH2o",
  "key8": "5eiWFXRg8hLKVX4v7w47K8NjXYArQ46Tzadnxw3CJSCM8YbqhQ2ZAzeoPK8Q6S98QQMjVAwmbEG7pifnqzPR2r9p",
  "key9": "2BN5jHmEcrstHLGVZK7QckPztqhwzqFtLf63ss6ggmsDDEbqstQsN1GLQr8jQM1rCD8GNXSsHqjmhJWQtkZsALub",
  "key10": "zpsPZsx4Mwdbzu2dtCJ8JT84DgX2U674FpxyU6hUousBijkmRG3GnLpxsMXNQRWNNJ3oKWpWbUQUvP59nT9UziU",
  "key11": "5s1cgNGVCaLnofqaEpT7vuRH2fDwsZn5eTjuGwUZUSDBajmYrEJj9JVBJb4XJHzFiW5E4WUTMhr4XcpNn4RNxGae",
  "key12": "5iMks2cYbesHrXMwkvVqpsz7xVpWA3NcPgFFsZPhVUwFtoow9D6T7beyXJJdBW27knp4m2FJcS1yVXUaZQGraGYa",
  "key13": "5JPBNne53b6rukZCrHyoBbw4pP9h1UYwZ6B9MYQbgXTNEXoNLuVWMzhbK9Ajy1VJ2yGMn8evTSJFxBc3JqMqN5Zr",
  "key14": "2owrGTqDAywCmS2HtPrFGWHyZUBdP4Mwa219dWerNpTyE4MBkyZRTtknwKnVZ71qf4dDCSRRUpMnQpCaoCZxF5s2",
  "key15": "64CBKRsi5CBuuDCCrg6wZPHZYqMdtHjYUZfZ7n6zWQNdHhKebJrkBGor3BQQTpWhGAkeECgiRsryHRp54QQgX4oF",
  "key16": "3Nuvmx9TutYUe9YuyrSkMt5VzRNjCSepxZ2t5CTwJsrZohr2Y7w5yBrWFDfBB9dtZheWmV3R3yjEoTmjQwR3Saa",
  "key17": "2Cc6tktUkaB1Sv3RB9m8TfAUYytmsbF6W4Fyd8iLVhAAEGB1NLW2y14iSjNmsqPkkPM7shpJSGHTxGRT3iCLqKFU",
  "key18": "KSkdcotvjr2M9YY6HNWtANvbm1Vnt1rpc7vbwAh1T7jd3EUkLaQocUa3ftvVBRm8iJcpGCm9UiNUAqB28W8pwmm",
  "key19": "2RKuRXZsjRCA5MrotUxACS9PbuaFWgHsLaCLKhhhmqngdyYCuwFz4BUDNPJXfd7PeAN3fZpGM59Zd23VHRxVo6ka",
  "key20": "23WpgoDhxuJ88eKQb25328yXi8sZTwXQViEH6zA9UsByq7DtpBFoLcoLHV2tpcWN2ymxxunzjaG7bxM71RiGX59q",
  "key21": "5ktH8keoAxXSeu4meHXNxEU594zThzbs7mbLTiqdMkyTn8ByYpsoPLbyC5CXzeRq9B1BzX4PEZzUVdDJwKfjtaPa",
  "key22": "4MRNFgKoPYGJvmxe8FN6TnrHt8AHhR8eV4ejq2LTCKNq984tuJwqwP45cxDPTrmqfd3ZowKAHGV92v5qkpZwvnM3",
  "key23": "5MrtPca5EBAdG4zWhD6eLMFNb38gSqegogymrus23Q2nGHP9d8oozKrfbgLNypGk4GzDBe1Vrt5FuaMbWKGzU95X",
  "key24": "3MVpaxJoPdKpVD3UhBAy196VTTwu5wESqEhGzviHrzBBAQH8Dp9zjrJnaxZPK69DVhzfPFZhW6nPpW3sh967a9Aa",
  "key25": "5NuG9MNku3FD14VzXDKoiVhoZduQherWVnvcDgMhfC25Xgc44cjK9hcXd3ocnjysDBGSopeUrwu5Ya7uvx7BkZ4v",
  "key26": "NuYS4p3mDdqvGVAo1x7gqzUFKnotxsEYQEVYtC8hkAP4ri1LM2SPnePHoRBto2UJtGpa3QbTPKGm4cc7JwbYd8E",
  "key27": "3VHNZH6oMttcyaqHt5utbbNM5SdSB8mfpEGFpGomLtgqp5XqigzE4U68gafpaoguBEZCuFYmdKFfdUWGVoi2cB7Z",
  "key28": "2HsQtgTZ8yj6zb5SFc66e6nxwrDnJqL3mguKMevB85GKvbTz67RUutzJw5MoQEmpYzfKG8cAJLdVUU6X8jPHQ8fN",
  "key29": "KHNuynPX8hQuYJTMotimjPAuGmRGJ1ANpTZCGuWXtVQmpzR2NbHty8QSZnfmyF4H5dhVgC34TaETo6nuYSzzs1r",
  "key30": "3RudBjAcxdjhSgVCHzTzQDXjGRfwE8PJjXdwTztNEvHSzLS966TWzhwyGeauB3kLc1KLARkHpBnaK1NGVos5c6xx",
  "key31": "32Xauy7rtZfBBqTJjfbPKGUR778EJuVkgsxhvrK2aLWMrqvNfjMkVLe1HfFL6jiDfKEGoLzrSh6Vcftskt8odLHy",
  "key32": "2CC69tMokhRWDgugSsnQHGhXKGBqQ2EFn8P22YU5J6QeBtiChc89U5maKkXqJj7iZHG7mctU2vhreSySXZY3rbdx",
  "key33": "4YesfjMZZ71wF4WPt3tGBpnREV4voUkM5qebk8f7w2WzoJ8AiKmP5tgiBTM6C2MmjN7m5vkrvqQ1F8jBGaRaH54P",
  "key34": "2pNu5iF2psjJRuC2UnkprmPN84PMfsmSoZHeG3RVhaJuB1iWoE7bQ8sweddQAwuXuumxh59jSxVU3gDC8vxn4zx4",
  "key35": "2U29nCkVKiPuWSFq7TWhAHqNJ1UWJV6bereboj695r1qNCziyeCcFGGj2rToQb1fbd6GnwGGwSwgc49imhqJH9XY",
  "key36": "5MhgK4fRdzrvFj5RhtYWndbQAjsMSBUzhZGtHZdBFHNT4p1HESYwsCmhU5JTVfTjKs1k1a5TxJQersJ7rwNEAx5Q",
  "key37": "37ereeJokyojQxsDN4KfEwtfEiCPPdneHTs9UDf3StMcJeFz9PwNF7sPqXGJVZyxAXoVUuyAedWMjAeeCurt1vKk",
  "key38": "2a6rcMx2Hcw1khKvUy5M7hGe3rsp5BnJtB1nxaTb2ur5NL3CA7a2ejsQFWfJjqhqmoi5tGgZ9RanJfC77Yia79Qw",
  "key39": "4UoafCzozG3vYn3RrZhYz2gUVnvsWgdn46Uv718xxhwmn8AL8CD4dv7whuSzkHuNyc2ncA3mAMtBcNsc2UqHgTTG",
  "key40": "534Q272FUzRVotBebK8vySX4A6vx4BwSnjSFnZKt2KMLKfPqqB3iD6tHxUesqzdQtNwPHwMnSDKa1NHFaNV3Qr8w",
  "key41": "2ReEdHgvsLRBw5ozxfrxGNSGptCXDqXmjb84Nas19REnsVLtREtBghiqbXSYtmVigBdtnGacrgC8iUzPjkXXGP4T",
  "key42": "g7WarmcMjDW2rh1kjRRngMF5yPkPdEBGQS5mG1J7MhQeXng49Tni1DdZyn77HBoEWF1QzJF2EKxFxF54Gq31TrN",
  "key43": "2tUmxVMKgCGqbZR94w5zHbEpDGm9VkbTaeymPJb7E4NUZpciApc4om4YV83rT6GFPyo4DXqnABZvhhN2dVNYqE7Q",
  "key44": "iGETAoRFf4cLkStMyPFgdNcvdjwbZLRENcsh5BdAQX9GdTRJXbftzTFg7BLM2c6711HUyTVhZCe8PA28CAFtbeM"
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
