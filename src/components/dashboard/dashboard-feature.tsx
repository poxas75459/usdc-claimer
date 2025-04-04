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
    "2c7pmbFM7LBjGpe5GQjr7gUUo2Ug46gXKgB4viEd1TVoCt1GxjjBPhu34kMYLyFkJsh1J3bUGgWKFjug6RRhFtmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYHTE1Hajs2QBcbAeoqX78R8QaszGZ75Gpesvp3FTBna5pN9rMmFDuVTmsTs9TFbNzWXSRWMFQXozhn2ki4GAe8",
  "key1": "4dRqRGFgSErq7hyJNLBYoywKHEhf1UH8PZRYE4icjgFdRMoGgHARA3jH2QrKHwfs1gyLDxdFhmedUT4iAcecJtHB",
  "key2": "3k89BUmEFrzG2SPo2MsFsYeQijyMNPDvWLPc8dn7r4QjCkkwAFmbVfDm5AJVww5pUGoA6qqFShD31KkExYikTFdz",
  "key3": "24yKMY7fGcnA9sHdiQjoA4kUDaY4mH9BxuPVEYHZSsvT7ciLcPnvECN7aWqN97aiyV8ErkfRL7PyuiNtZ1U5sZxE",
  "key4": "2FWxLpkbJDoi8s2XucuHsPBn3ZzxoGTtH43soFs3YG1rVganT7AkdEAL8oB8znjnNdDJ3N6tFZA9kesJYdXjoeTk",
  "key5": "4GLJyvMzKicgCYniANRvLJjLy1mtm8DfBgsaWno8FJPP4Gwz1GKPDcewAbxkv8PMzYSjJkWAbRKb3UKZvnyA5gbn",
  "key6": "3bJQxNyTZYKY2fJTqz9cwrD8up82TbexrDTkJ3rERyyfSKhNNkiPYjgQJuiwuUfsjisKXYRijS7pvkm1nQWZBki9",
  "key7": "5bKU14rF9JPom5kCUQM4UfWsX3R4s89cZ12Tj2Sa8y9XuU9u2iuJMFoeDLPfrNYTM9KKinaT9Lexkkw1LPMaMpac",
  "key8": "42DMpd4WCoeEJUXerMNsxHsGKcV8tX9yPJRNLFwSuR8FwpSa7Htc3J6ijXwdmN7pVgWmwN5N8YDjQ7swUgGDXXcM",
  "key9": "3T5yyhkg7LNCBQpVtwkiVtrJ9MzHHRBxpNVfWjC21CKHf7o5MWyxGhYNaB32W8VPu1JFoAZKTduzpfeCw2S2T9WL",
  "key10": "bHVL1DnJ4cL1rEnhPb8Cc1byrwoZkcSTmkoHWVQZRZTh8QsKJzcuBLgLBuQAHcSYdhRhMSphWrAmfG3WEBFD697",
  "key11": "4HqsUvcG6bTnwjWCzGEktho3idTBVEvPDNDwEG4RZ4J6nLDwPKMkEBe1DgoamrafUATSNbeaZhZjj2eYVMHRW8xx",
  "key12": "EbjJ6x8u7CXPYUfnBoKkpbC4UwK23FLqFLdRvVxeNQoyamNfweSt5pLua1UnXvjr5QEeVZ4YTZZ8AQyM5165yS9",
  "key13": "5WYcS8emFx3vSmuzBMPTLePSkPfqgydqAx2wJsNXURXTPtxVpHqTZGrdMUmWDb23D81YGmEAuB79u5yhMkBB9iCb",
  "key14": "5DDQn9sicuo2q1UNvUXSrH2S5oTX4wVVRmKupaaHCTxUm2iU3WwLGoMfFHfKpFe1U65v8drAQSJtthJzr6C5dU54",
  "key15": "4w3HXLAzZD1PWHAszo9wXtQp3suDX5rGeJBCgumcB7F2BfjgnzzCATz8zuHSrmKPFNpDr1cQXHjmTPwUanUhBCfD",
  "key16": "5s2LFpiAbSBk5sZumS6WcJVshiwzgVGDXwmbRBkdE7SGqqCh5ykNqVSBVnKxFmWGdpHvxVqetx7SUCzJUMWxsvZp",
  "key17": "2xqDQgjVhruwU4mdRSSeLs3P5AVx341hSgie5cPKJiNooU2kctnETW9BtiH15RZN6QL6RjgqiSRP4DkGQxotjVgc",
  "key18": "5kxb4QUgwFd8FYhRdNWyfM1ZCRm8DsuL24KzQYoF3Ei472L8PCdgr7oxhDbcQvA9CcGzprxCiwYgMrvGYstUBUew",
  "key19": "5AzFhcmQ7xcW2YFzjLYwunebcteUQtSF7LbrDuockwvL5WMXWnQHJHwgWJzNGHPSdPNyr586bveuZe7TpSvmcE9b",
  "key20": "4Q39TEydPm2CuF8E2dhhRou7WpJ8x9nkGPns1o5b4V3fF5Rk5Xuz1LcHjVxGpGFuhfoDpDjfemTcFzCkSqbBmQiA",
  "key21": "5zPbi5ih3GJiaNv9xVvYsT1okyPrcHM1YKUyAwKWfVh7HGpXAKESdb7WUNLpEV2xdEa12D7npLwRyASHoxPtB7Gr",
  "key22": "iAV7y2pVW3aAAQkhK4D1TAtaMnfS4ufdA8CWGRDS3d7G6T66MhijqAFgh19MpvweC7EX74HeNbLg8gNNucytH8K",
  "key23": "5Yv8qrEoFqM9EtXdUgwn6gdh5i3Ap8Hn9JcFdYq1AfrHvscK59dqKn8tporHGrCgBAiioAdGouSAVHQDaUkASEo3",
  "key24": "5NYT5b8BYV3nNnDGC7dDkspa84stREu9t4TrvmNSF5Y8su1xPcEPXebgejvxioEsWg1bUhGE7vDkXWu8GJs13r94",
  "key25": "2aB2RhR17kRNkiV9rVAKjbpALvLj6DBexyH5udTLxj19dRmUHTF3crqpJnoXkrYSUMXmDT9tGMUDN5EyhBqrBUr",
  "key26": "n654pWADX9fi959AcMguL4XjgNzoS1K4jm7bCgFmCydUHYdKc7Us7vhPHAtbXD27xTvBS8k4bznTxLQr23gEhZH",
  "key27": "5gAfrPdvDXchWEd4NmDccc5US2MZMfoBgxr57aUtWnCs87tvWR6TsgvezKSakA5X57uVAJQhTUQRG5fF6ByGuc5c",
  "key28": "DjUxMpUamZqDR9U16ess4PGYxAzW3Hik86E3GeGkcGGn7daezQBjyGyh1L4yCtHnCvnjDhf9PpxVkgz55DwqzHe",
  "key29": "wirHL4uPiYQTPfk1HnbWubPUFYwXiPPZzrueUYiYkaRngYmpUvgRXoUEeXwqZdGwrryVxpyQAg1oR4JRMMUJCdN",
  "key30": "hMFopBc6ufhVVSfkfCD6DBsy662aeSGZVdmqMsHduKYVqEepGHzJzod9n9nh4QfoiSmb19Tgni8FtHtYnPkPpJR",
  "key31": "4V22zARFLGCjpgcEJ5t2xZhfJ2uuReH5TdHL1nLk9T2TPakurPHbqWgprkrciz66sB7cAduQoH6enovRMxNRYLEn",
  "key32": "3CwSXTYQ5zvpcq4Pi8xZFnhcuXmBnbQgsrfFHPx34En6hHCDv7XDeHrVy4uoqLKVrokrNBYxftU3GZfMqopnJA2c",
  "key33": "3BnxApQVxNXLWi6CuMErFEuezMabeTfgfBXVypaFkGf24SUivoFXRwfj2fz5FP6FALanwJe64L4MWbDaxML9y515",
  "key34": "Rpw9LprdpnhLywz9ZzeaConvLEBpLUe7svZ5bHK43SKSAonqQ8Tc4RrPne2MVEAKYNyrPtB7V7i6KmQ2RgLcB32",
  "key35": "DE4H5rHDGsUppfBWGPD8t49eTFbjmhRF8nkFjiLqPUHSRvGVLbG2bUZnG8z4dMVxcn79f8VtWG7XSaPcxEQhfSF",
  "key36": "PCtSCkoieXWUqjAmAuDXp8Yc1hR5YFmSspLTtNxAfYAMTr2Va5eWiacoMz31WBp9dbuHP7s7Bjv63J4fUXH9iNo"
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
