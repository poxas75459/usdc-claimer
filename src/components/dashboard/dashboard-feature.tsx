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
    "nQg3kQWMvW4KhW343iy7wiw2wz7UQBCZgwDFrXgZiiu22hbLGqB4WgiZ2Aei8f3Fs1wS6VU76aF5uTYNY42NM1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWoL1Pk2YcNG6bJdwKmTHuoFLKNWTQL3F5HutsXPj6mTByfd35TCJYAHEmXiLH6DSU9Fcvx1on4ADNa39dDQjJp",
  "key1": "3sDgoJqeFD4DZ4ETLLDcZQ4aPZqNfjc1Exhj5StVFA8JirAKP2N5M7g7EYYK13uR8V58qf1xxfWWByBQ1PcTaRYP",
  "key2": "3WnsmzCABEkvK43gQFQjaBfAXJ5AncUu7s5BFygZUFFXrMEmmbukhXLJaDZtzfq9SRo6PkhvUfpoztzQm1bBihKa",
  "key3": "97SqC5tcr1TCTNph8vuKkBE8w6UHjnnDSdggD5HevWBWNRMfjsmaf3Gd9TAuieorRK54TwrmGsUHekBv7jwBRDj",
  "key4": "2j7FSPfuri4TUyjR6PkoJ1DLSE9Bp5jskAKKTtZ9FJU3BNAxaP5ug8PFS69gRPxHKZVzheLufF3kzUa6BMyi3jA5",
  "key5": "3JGJ88My3NqjfMvNDTMNBaYxUv5F6HoAocSZipYSVRJcA3ZJjyZwoB2XdG5K6AgaqfLPjAxRndjsPnXP7M5nGUXe",
  "key6": "2eh2g4y5DEpSbYew2X8s4zPShb9JcysszHq2JJX5TfSXxHUYmSQsN1Lk7wxhwG5TZP8UyoWLusHUbCmAxVEHySk",
  "key7": "4WnfzZiMcD7zNaJQcaS3gCYgpmHyhXp4VGe95xHomyTj756ktdpEDjTgd8H3u8hF3CXFr49pru6DqMJ1uznVoGoK",
  "key8": "3ATsSQU8tNGWavR5Q4iNvgN63G52MX8znEEvMMyDQG5ojeveDFBQLGQiiiJ4PYeHaYnr9PEW8Av8yGYapc73pqR3",
  "key9": "dWuRL2EZ4cXpj1T8zjf3kTa6RWMuMgRx1h62Gf3e8UJ4UYcKtfP9p4YWaVbwbQ6Nrjjz3mJMGZCbaoZkaXufFS1",
  "key10": "6C96Nm7NdnDpZoYa93m2Ck7ivgsefLvwXtryXniLk1QXwXQsiSykCNtcYbSrwdacgguaQJmtjjMo8wsnJzFYoHW",
  "key11": "MKcNgTJEyCtDJu94UTqmwQxLZh1PSfK7MEsYr72qVJYsShrWs4siJaM4WmAj8TMNPkvHazpcP6JRoGVC5r9NvBV",
  "key12": "51ocSDFWKGqidQiXgL4EQGjBGGJnqY3VJw9wdTuQ4HTL6CYR1EA5z6KoRZoFmoCcy8ropC79ToLgLQtW19CDs7iq",
  "key13": "V6GXVJHA1f1XomUpB8EPssgEhrn4SDepMoxN5WWpywkmrQ8GU4s5pGVYgAHxvktmBGU45S1CSDNZ3xKhHD7siCe",
  "key14": "2Gc7yGPTswXQLGjPbUAUrkCwiKnjEWiMMrAAqXJm2PNzjUZFxpramXPiJySWQ6EQPbD32UGUgiZUYBAqzkY9YMqJ",
  "key15": "264PkfJDSNmdSULC7wKk9hUnij2nMHSsXaidbjkKcf7rRrbCD2noLs6HDm5w5kcz4D3yuoSFTRegqMP1WXGuRDeq",
  "key16": "4YwcwkR5bGzvGxa5yJZNnLYCeGnSN6GWYS81KahYuHjPqpGnT34WRPCRMQKafXiFPmhHyj5tibkXGLSqDnzQyWZt",
  "key17": "5oFhLmDey6dc9XNSYH8G5d6LYddTMCpK37Ycamy9o95y22ykkzzwSGbwjrBHes1yL5f8sT9yoTiFJR6X6SBsnCES",
  "key18": "3wrJvkq5nGk5H4hnywukb7P24ApS67tr4fkqx3G9qa7LWaWxpWvWqK2Erud4iWkLFcvQow3yDNQjVHEGNenojB3h",
  "key19": "2qEbMtGgH9xKXVgBXSdqG8i1qi6LFQtj6ZYAj3cSwenUWRt7oGTkQCdZGbuzzrzRkgBscxiCgYdMWRQ3nZBjCLVq",
  "key20": "2s2TBKQji9t7iMRYToL4GwEm3RCzpcxiUSs7TD7P25hjc7FxcJ23H6YBX8TKxC1bdVfno8XDkfW3xyKHuHJt3VWt",
  "key21": "DL51EBW5P8vNxDDwPjXq7Y5crmu9PYAbZeYNZDERi5v4gtHuP92XWkNGxoAi4anKpP2KTpLMZvRxY1q4AQ9UB52",
  "key22": "4ym3aPnjmEiXzHY7aaB1o6UYSWomPJ5JJFEsfcZoY8mdhWTDUV9x3maTuafpwmrW1W1g2PhQDeVrmDqX4yyXQyD6",
  "key23": "3zw61nuxJrzA7ptsgSP94xK7NoJLBeiMHKA8fJ6sRB9JvCgdDB3rmBbdF6nvVV92isWybWjN1A4xgWD4aDtugQAb",
  "key24": "5h9SpWKpzzBwFjkVbNiWsEiUjQEkcFtesBdSNH3NcWSHX8NfXwVW1RJdqz8q8MvzgedzW59WFo1AFz4yGEUPTB31",
  "key25": "3B7HMxXqiQ9csDc4FX54WuA1xsgZDV59YsoervcBt6EHK1B5Yji7hJ3P4L9UcpUJPK84U2nWiwQoxeSJCasEaXyZ",
  "key26": "9UTyZXYAJMCZ4XSktCzac6YU5yay7DLEVZELH3P6BmGxMV6MrAdTGNyLTYHvycgd5mrmnCeDdMAwWAJBKp4rT3F",
  "key27": "4tsnLeLpBGpmP8xuVRJqsp4C9h2svZ2y4rcUL13JpXauXfEfSnhmTwit7mH6dLxwshm2SKnboUTzeGTSzhuTwqhW",
  "key28": "DSvkTvk3Yy5EzZTCyCUzs9YG8suhpY2Kf7roHZ3qSxuD9bFwgtNjbtem6s96LqmAeNtjXiUM2w5RV1jQWHGAs55",
  "key29": "aM6X2kwvsUFQjGZNNQBHSLJMUFqG7fWpT1mhR5P3ohC2N26fZ2pCcm6GwLNpPptSer5RVr8qZUhWdnBSGaok3iX",
  "key30": "2AoxBuSu6n792sKaDWLMCi49VkjnnZsPFVzBurWPuG28Si4A89xiYLbsSH95uPckePYsfR1CuHC7m9r1TKn2fmTv",
  "key31": "BJAfN98BEnYtmncmVCxvvArUR1t5E9qNfuvWFGCtRNr7KSbicQ1v1HRiw3r6B86eNzRobEBJtUjC416ZUTgMnGj",
  "key32": "3Z21rCCh7xKkrtjdkynUW7kXcMbJQGCv3UYzSvXHQvq44TWsMxoLtnn3ndjJHUhL2QVrsTiDaULxUbWUxaLXgbyf",
  "key33": "2EEkH4CEhN6hGCTVPNi5wRA2hLanfZYikLtnbNShmMkx5Bh6CUf6zcnLXT9FPaLpVM85jh5vzSRrrzgePj154mqj",
  "key34": "B31HN6Ms7tjv7s2pjGsZsBcvxj6zMTyKpGYREAnY4v2YnuEVudLvGrZzyTFiDbo8jnNSbGpHXwEqzYrY4k7ud8v",
  "key35": "3q3o8RrJWxWaZxD8ebznGasjQJ1kYwhx1jNrJWCYHKr7aiiJYRnjt4ubUJkdDsorEyEJLQCoFEqmNHsQoNsYQJkC",
  "key36": "2ajXzkpdAmLhn8Ldes4iCBGeUJUWdf3eHj32PJ7QTSPSMDwcQznA6DuappiMYrMdgKokP1kznV7dy2j4JrcSvdNQ",
  "key37": "3iJVBGJKwjoFo4vQeYd2G6vRGNze3mKdacrQbhuWnx958NY7MopoPPXJHatYmio5LkFhweJWYKs19mGHfSnWEiGk",
  "key38": "3BMSDFuFb557Bp5mpDLWFG86Gja6TdzD6RBgS964VL1MahM6VWG75tUxtFmeWf5pCaRf2rZQeRL8uKBkie5dwxif",
  "key39": "3k8PeJLs2uQ3kEuhP1ubFoVz9KKZ2Mh5JMRtyjByXCAf8zbtxra3DP7wk2YuRAufij1orPB91nPa7Wnj9Dc813xa",
  "key40": "4CLNMtURbs2aFXz4hUpaq73cthdLgAScGVxqKFwaSxVWycxX61vsP2gzNfQhopU4Xa2fJby7QUPpcyK8djv9qJWo"
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
