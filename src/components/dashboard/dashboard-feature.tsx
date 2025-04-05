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
    "46kcmXduGcN7UU2zWYfDVPNFPdDp7a9F14GAQnKQQYUpzvUwC3TEzERhLv5JGAqhcQDLXaLKqfFJSYwFhT3G8ASt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKMiPFXXR4z92Arc5ECEo8hbnf95qDNn16HsDb6s6iXycKaMyBGVAEQbCSfHsKEDjty3E6t3xtf5xYVxKiFwwzU",
  "key1": "UvfCBkcoWnSMR3RSFqtSxwg2SyTCZ8PGkFQwwdboxQjPm4vfCdaH713T7ktkhWdQ8yGzYSSUcS1csi3H1u6raBc",
  "key2": "FL115GYm99nENSDSBTFc2WFCVenap6BqoPpnzqN4bjFeCoEX3J59ixgjzKJN5zENsHfuaScU1KDhtf5qEv6V6xb",
  "key3": "3dfCpgB4xmmEGC5HrXZQQuP6UhkV2TR4e9PrcbiEDwAkvHGfgBzUHek1drZT5CPD1RKx6ZxZ5FMwZ6t9eksVSnXM",
  "key4": "5XS1b62RGNU9ZaENNpQR1qDtSJdPxp7T19FsjLUNDuKFvJ3vXbrfzDzL72GQt2Ub3kukxKsxbMZtpMT5PeFRRZJK",
  "key5": "Cufjxchj1S3ESyyBFs7gyv5FkPwwDyHXEDrsQ2LyJvuPGoRmqgcp7MvqjNnwKpmpmR3jDDiHyaPk4WHknp93kc8",
  "key6": "5av3aCoQ8rdsH4RCmQDtLsDYbJvnDj8Pb9UXQUJJ7s4yLa26p2nCBxa99H6rv8FBJjrw77rX1ZSPGNJAYF1NDX9t",
  "key7": "gpvuLM4wyFTho4ot9J8RYd8BKDTLbDL68dbJgyhdwy1ZKLWy6mhHPBjwAQRkRuDnPUFCmmLKoQnkwKpf7xW1XG3",
  "key8": "5MywyzfvnVKtMpYRAqyJgSd39TwZ37EGrne9GFUwojTMzFP3SRAVyM1jkW5S5uyVmkpbfmoB8FLkZZspncKjZbvc",
  "key9": "5z3hVWJBf6Mrzo7nUwrjkt4R5cXSY6mNH2hV9MN5wvvf9eYPJXee3fhnsBxfSszLZX2gk4CSmSCm1c5n1BFX15yV",
  "key10": "BGuB7uXd9rKVUcfcqA8TA3V9ShL3Po9fQi21u7ffUNRcyKiGnwCuhJL8RVjJFi2vfib9zFprydtaPoim1RMZKkw",
  "key11": "5wFvVuExwDsjnK2deCxN6tgcft8b9sBZoaeCdt2aBezwixmGmeMMMBPAzPBcxaY6FuS9Q3ADm85b9BCKrBKiNQnV",
  "key12": "2P6GX2iqh5Y1k1hX78jmDsib4yc616pHyD3r4yAJFT1RJ72nBXWay1Sfgwt2J1bzFd2XSzFNZUi4wVDr6AqTpB9T",
  "key13": "bNjMFgNRyiSjxZJp2CPhT5JHttygTH6UeuFefPrFK6a4skQtB82hCDFyTYvPRGJ66YD6VksHKFodfrsnKaByd4j",
  "key14": "2B275R4KJwN9AfyiSbWRQevsTueE5azJyeMGYgK7qMiaTPD5LBrV86kSbc9SKLjvfWAigKnS1WwfUrKUy9zFx3nv",
  "key15": "gyAF3ubqTwrGsPgW8kTJCDrLaX796en9JZYi7gmNYyEZN6iKXNgt7Bp4Xrafc3Tb4yS8vSnXAnFkdsAQzqqa1cH",
  "key16": "AhhyXeEy7SbDMGRvL1QDYJuX5wvGae4Pei77TQuAiZEfsuc7AKJPPkSnkFkJ7akR8QhUbd8FNMtEX9t47RK9ZfS",
  "key17": "2bHTYsRdLH4vBy5pczvVCL2ZXwWAVgRWCh7ACNc2QWv7Td7mtLk9Gaq3AKpvkZqHVefq4YTqhMiLiLTeYfrogXqo",
  "key18": "4FxcohwuhL9BusRv3d4STYxdoqKznBjSivoGbsHhyeJEMBUUynEGiVwTfNqbp9bAq7hhjy5UkvhEE7kzYpQzNc1g",
  "key19": "25ttq7CfwfpsQFMGn6Lc8NLceH5TdQp4DtT87hdAs38X2FM7ZCfEXHPWSn7kEgBtNHxuKueorYj1YjhAdzf8XArV",
  "key20": "3gbz5wajsgrjSv3GxpvuA3tbhzXQkD3V3MvyMzLJ9QJU1jLab8Tw5Rhxj4NPzCCu6eK6GD6LbEvaLwbPjCGkr9tW",
  "key21": "3KBFuKVTfikwyHrRyocSj8ZpdbScNXnL2rjb2VapxQtsks9p9kryFge7TA8BSBfAShFYsu5uiK1Rw99Y9jij94GC",
  "key22": "berFiQhuL2fMredKTThU5Lo3zhvTyKYR55fichah188qFNWYdc7BgmqDMfjApM8YzsiUb1BKcVxj8M6kdLm9XnJ",
  "key23": "2fFuzpjotLgTKmHp7YUBBvf9ydNyCLEpCmS9jUFBCtd7YXeKdx9QM284p2E4fLC6a8ZeJDgvFgwDzY2TVhzV4qph",
  "key24": "3hkw6J7tB4GX1u3Eytehkftvhtwn2weTBsQZrjXKWsyCww5bEQhycfW2khch8eaYP7mategJ7eUKbnWsXz8qzifb",
  "key25": "4v2pxTV1S7VQ5Ah7nVKkwWH1Y1acZAxTUuYX4PagqjTjY6d6FxN14CWUvTop42yvCz367ooWuuJhD2nXXUmwpsqd",
  "key26": "5FKkw46zBSmtuF15r9BLA5aBafbyRcocymtqz1XByZRG7qzuj4DuRHuuFsuTmr2YWu8iu3Ljipb81fnu8YBSvHcH",
  "key27": "2BnNgaHsQAosAxjm6mHbbeU3CTqVUjvpeNd9E3PLSENrAphDCk9F3xtt1V71twomoWDjYmHqQXkBd9ymr76bUtMe",
  "key28": "VbwHgVyDH31wnnWszGeARUUqSdCt8RhKFpNNDULKgrVFG6aVXBMuRGNHQhbrkZSUATRpetEq4zoGJarY65jeAr3",
  "key29": "5ik4ZtAhdYPeWGnTGmmiVtF1JNAu9cqMsbUG6Ae3YwCeHy9FnG9FFkRNhaD3JwDfrDfNY12GJs4Jq8tCUrDZem6w",
  "key30": "4o6PuH23UkpbjrLf9jY8xBT1zqket96Hqbx8YoacedWxMEJVyjCG1ay9rSeeseravyjm4b9mvTx1yUtJqnQDepTg",
  "key31": "36DaEdGeNo3bWxWrRGJgj6dvzCzQikaoyj9FtLTWYSfedEpuonfoV32hXy6QMpyFEa3Qz3zAejMko55pwq7JMq3v",
  "key32": "2o7mhhEG6ui3nstPdwD9CaTHtpYZ13yJTuTUWiuwNd3cfmAL9HEWrUcbnn7opnPJ4cx95cNpfwb6RqWxG9cXB4Qf",
  "key33": "4wvGF55fMRLNG9Gx51oGgFJTH71SZ4rcgxBRdwnTxQbSiVfEndqxXT2jsobHFWv5XTP8dNa9eYP1FESmgHiY2u95",
  "key34": "ECNx8duDcxvzJ5PMvfoFqg1pkJAc7qMfQUre2Tvu2axmXFr5t2AM8qKMrjm76wh6jLGMjuQMPYebfhnZv2ve3A5",
  "key35": "2nFGUZw3c5C6ZPyPsufPsPJnjaMSFbMDuY12bA48nTm9BtVQA1esveuVgnMaKdJude1nrQacSRtBS6HYs6LquHwW",
  "key36": "4nW35NFTTbxUDF3Cv74R4hxkyZ3pQogDFkrZ3r8PQYLCg1sMz1o7M2EJqDC2LivLMFQUmkTRpM2ibCn19A8t6kuG",
  "key37": "5hZb8a6gxohMnVJRkq6WrCSujazfNLSq7ckwV3pdjSWY12ug4bY6xhmQGXtuuyPuUVTiF7mdrCWR8LEG3fhjjZde",
  "key38": "wqZ5UqqW63aRAvkpMBTno6RhqfaKCThUq1tm3euhGb8gLJHGNGbv7M9CUFhYf4bxAvJuYrg9qzGQfUZCap7DXJ2",
  "key39": "3Xp6ugXn5SqXVCrw9SeiRT7aVgpPVFDgoSpfgDWmZgLWFMq71TVVFJWcZKz31HEMkV86dZZjCJx6g6XkbUkFKt7i",
  "key40": "5jdNzE9WqAX12rFMUADfHjQWVBYJWqrBL1D8MMejAGioSyczRBBHhd852ki6B7DCgYXqzkVegCWowkSBJHjuYxho",
  "key41": "5YSCWG57Ncs6c83MPRzLpENVNf4un5xFxN3Qj3BLviHgp9pt6KC2cdiNfv1ieXdVU2FPpcm32bms8ff6xXrCwZDb",
  "key42": "2PHB48rTJFN2pQBpmwpyWHUiJrmsR13WkKCpA3g1ca5z5fLzauNDfkvCNzuge6h9kh6PM3c29BZ35Q7hb8qCjSa5",
  "key43": "498bsKRCUasm6W1iKS1zRAkYqgYuam5KWhrKoEnAxsS5haRtDbR9J32yDwcoDueTLsUnmG6eu5AmaobnHAg47JH",
  "key44": "3wrNYPAJEULbziBfMkrR84ENSgNrjhjvV6WCGq8rHxvugpfvzXs9LsGex7EvS2Zn1pxujQbh9MjpDZ8VJyDd1oxL",
  "key45": "3C3FfGBPdjrs846h4ARWmCUQRQeLVqaczhDGH6cVFh367g9e55vsCf4mKurpj1yZtWf9M6xVra9hMufH62KM8g2n"
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
