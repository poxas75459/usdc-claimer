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
    "4MfpJZUizkWcgpbc7ACHc6T5H2WSMpGTRNHYppoWBJtLRFCDEqZxpFM48s2K61b1ikNUPHeDNGfJDy5rEn8D5Tjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPFj6V3aSSuTKKBq8TGScihBo7fQmvyCfdW8kcnw4dqKTfw5u7G4GuiTZVsU6sTjWZixd7UoURkjFMdgfTbqKhA",
  "key1": "ZZpC3N5LZUEkkMXdNVBoHvEc1p3BySHyTKrTu2MoYvcAzZxeke6wsVEwPYgsC2XLLJwesK8dzTrcwahVom5AN36",
  "key2": "2cX5A4ao8P2Y9i4zfFVcsjaZxdmUiVsKZYu81367619Gx1bEfjn241LFauyVUmfytYnHdGeLLJVXGucQtdWvQQur",
  "key3": "2v385bppL6pwMMqFriuvZhAB9pc1bk3yraekBvy4ryoLzL9vVYPbFwoaggehB2FC3D98bBQxmtrBxxzabVJ9oXKM",
  "key4": "3KhquP5DRkAyNJvGiLZc59RMPv8Ei19Xh9WLbZHJvqi267CaTFA6jCxJMsCoWDP9rFiDvfkjdEwV1UQ4iw3TyxiA",
  "key5": "3fJxH9jFMRx1YyTRNheAjVYJqd3yWzSKQ5FoacJ21SEkdE94sc7FDNvLY1ZcxwoFNs9yuV6QZe1mCstkwVGR2vhx",
  "key6": "3oqHECuui6Bj25Y2YmFQRoq8kHfykhiBm4Venn2SQ5DsMogWkKYPNzceCpxgzh7pmVzvMf5zUYCFjLzysAbPq9pU",
  "key7": "4uV1FS2G9FFBHg78t8HnFnVdjVbwcn8evdKHPXJSzXP5bmeWbtNVg2tiGARMYx6EnnqtFkCAPjneuDdyx4CfQQum",
  "key8": "4f6w37vEodwAFkLUbsbEPdQiHndSFdp2awDk8YWVDFbpBcFZ51WseHJ7BEPANfAb7F6M8gtCqxC16ZyRGnrw5wgi",
  "key9": "5E7s17L98v36JUP6DMTREum3uM462YB8UsUPKUpKoBTZmHQW2sHBzmau12kUV4vWSTLsar7HzHeoWHCvC88zP3o4",
  "key10": "gVLCGvtHPuTHcudV43YuRR6HxCHGxQKS9WUE172mTXbciP3VprqASsuZmyohLZfyKvjukEqgXL2KntUH6rjJoWe",
  "key11": "PfQnnMFCoDqA68RhAkv163TuwFEorDyRWizLgb14HEVByJXZeSzpAvT6DLBEtwnDSYePKaRUaDqginzbsW9NUjj",
  "key12": "3wHaTJqjyiiXKSL7xorm95RR3JPpimD2BZVA79eh7gLzKExQt8EfSUhN5hMxpf7c9e8wxCwSFBxq3jBp4ZxQWip5",
  "key13": "527DbaP2VQoPEJj8wzqQPsnXQ1gEUuvX84Vq29G4iBHCf7TsizSYvbUvhr4m6hA5NiAP9ujUXJVkE82oHnVN5r88",
  "key14": "4amjsFCazz4PgVQnGdVgQoWGe6SyJKFoafdHQF4g6Ni9fjLjuevqCF4yVwJApsd2QSCaTCStE5z2MbHsAjCZ3WMw",
  "key15": "4VwFN3ZS7HXAVVASWY9JjEg1NuGApKsn8Snkqmqip9u5VeH6Ze8b5Tn83ekrb2jbxRwQtStV6WmTrCBzhAjojtpg",
  "key16": "nURMHdHAapgwkpbNezCWYuAaUQq37r7Xc6FSWaViGxGBF737AHXAcmuYC23gsFCJQKUKa2nk7bw78JPhnKU6DHx",
  "key17": "5QPLo6oqjXXRmsWQasy583HetiudFAyVRWDxz6Ks1nZkAYY67t8SQynuYCx2kMQVgiLTFYk8FoFrgRNwMrR3J4Y",
  "key18": "5tNsNifJ1QENhD4GCuQxDTnyiJA97N6UquxcpUVGKo4CPLqtmMrTCgKMPWhLoYKNCqddSkWyeZVRpjEAQthBb5yH",
  "key19": "4czPh4xAkRXPiKeFeXtxxfxpyBPHUAiKD6b5kpqbcRLv7b5kiyHAdA64yjH5kMp1gQNWYKE7tjRZLuvER118sro6",
  "key20": "4JgjYVC3HaCNb2aMMnEJfL8d6w1xtCKUABq5zLaaBGpRp9thZMRpLkmabdeS1ZtNMU3g548nbbyfaqrYR3tRpqC2",
  "key21": "3aWi2ZdK8xGUnghNtxsvDPRYAiadzsXMTMxGW5d7EZCtDuqCbMmZvVLQPLakeoxDUHuV9ySENdG3qfL3dc8t4KUZ",
  "key22": "64TcYEuGtGkPiEqTACVeFPoF5P99fNEqyqSrUYDrtaUdY3sa8JbQKqfLkeBXjoBxf4D5mmCLXSe2oEsWNpyX7Z4P",
  "key23": "4TjMUPiVCEsKFCJv9Kj2nZ2MrTVYQreCuZj6kg3kUeTzTdhaKUnchMpiGkWjQbSwMUbSnpcc71JrmssjDXeYPW98",
  "key24": "tK6Sb1awHXY39hKbEHzXFfYe8ECgU27omQap7zWeVi2FugBWtn5yfKLGFYFTqpdCxzAEnnoLNyb3wPhp9zdpfmS",
  "key25": "3gots8SrB91LaN5bwCjK6wGwJui84heSiKzGRH4xQhXtdUsWpNh7aSVsWyXgE4BqBgYFcZxHdpxqbywJsqUxJGkd",
  "key26": "52JBjZ6rfS976b38jjPzeMYSLhXuphKSd456QAzmaNcXKcWhMSaJN6LYbUeLdBUDy9krTUoTHo2yp9SUZLfWTwdn",
  "key27": "5BSwrcsN8xVMUPD6pnYohLcvBPSi9nM7okgekeg5FgADVVhpxSncpbJpPvb2doqKdconu39jzEZi8ndQrgpz4RMq",
  "key28": "3cji4q9XWHbXkZSDhGabBZqbajTe2KphrwKE95ANfXFSr5uVDrH1PYum2bvbYapo8QhgepoYTKPfrm4Yiy9HsD93",
  "key29": "2ofgvELpdge8KwgegXg6Wj86vEh8nAUASShAVJ5VkTnnGFLgRb4pQ5QaCRdJ6KmH5smFQcBfGrj7caLDjQd24Nme",
  "key30": "A2sXqtMvJsYnFE38k7mjnqunnRcgo99Jxoz5nw8vfj2pAPy1Cqg5UjQbxoixr6xWzbW3WpcsS4vMYAVzMQGKH51",
  "key31": "3YzBFmufPDkHj9PwVnvWaGWBHmxyyuXDjTC3YdsDBHkQhkkWyxHG5Jyfbz51WTXgkfc9Sq6kgGMmVZvyLRbsQWg9",
  "key32": "2emfWK1nAhyqD9UwXNMFeKrbUmoPTCQccwHVKXVBeBMsEj7woK9mLzNjr85McpAvzXe6s5ELor82iPvQ6wV5wVap",
  "key33": "5Fso3qmZkSjEE83eK1rSH2H98hFsYVaZC5LE7wP87jWXANL2iQLRZxGAoV5gUCe5rUHRvcmUoBhjXuu78nHDCSVG",
  "key34": "2Djw8FP9ejgNMnbknq53uGhE5LmqWpmiAo16Q4Eg4oBAFweEtLgdrnjZdJkec8mUux7jtkUA5B53oTEodgdEQNeQ",
  "key35": "5A6HGUHCmSrgsvhfxzHQJDeVLJenHJC7cWj8TBYcnKAvVKwJ2otHfWDXUgjddAs1PJ4X4GwmvebATx5wWkv7CyL",
  "key36": "5jhkt9Nhn1VscqmW3SGuzfyUZJAiek5aommPZffxzKWaXqiaPmfSChdn2RkeHjT7F4hZJ6acoUfgTpHFq4rQMUpx"
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
