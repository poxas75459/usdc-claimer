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
    "5dVEQJVKVTZ8ZpCEcg9FSxskfFPPfeJEMoyQmbbYJdXhfPEfNPUNPrpxjnHG4e313uPdHrfKUiAotqeBPhKRfKMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nnrYk7vSBLf8syCj9NGpEewhfht13EEmXi8ypCaHEKcmUTHeut8BPKHG59thcNdEdKBBRc46QrevJeszBvEsibv",
  "key1": "2MHnVVhzBky3LM9UVDP6NLgnNjpXHuMSbsdytb7oNniNkKP92Jz14c6XNUaZ4A5oEGM8va5scXot8fw7c8V7CK1m",
  "key2": "4AntaPvXJwnWa7jTvLKMvX9ggQm3a7c3fVbsfpTitVk8gpCgB2P3T4L5UKLKWM8WQJ87jVvg6HEG1UgPjUdmG5qE",
  "key3": "f8xmNGvMqUibVisWawQT8EU5xAc2kVgaioHJYno58yng1tfKbNu57yoFaBPWeDTsX9wHg3xXz1gJjeqf1dLmLui",
  "key4": "5Eg2aW7CdHccJf6Z4RyPRX2i9jnohLn4zEvbadpbwP9acRrE872spMyi94ekfSbUrQaqYDQjhZCcm8H6pBorCGJv",
  "key5": "3akwpreA15bfajHLPFKsqMcSFy2RaFLxgpRgq2vaeZ4kGtMmE7MRfkWooe1MLakHvxVHdhAzvRJfvxnhEnukHW5k",
  "key6": "b19BzJ6wsXFsvpdamDqM552wnCfWfxAmso81ZecaHydt7cHZQLGVa4rWbzoRGz1c8Us9zm93ekiuCnEKbKRyCLc",
  "key7": "524JWGDwJozTPkxJMbMacbe5B23R97m5CpPhsei4JymF1pa4DVbPyVzpZtBFXjcm4QDWLL6hZidtiLFgBQcMsZ5c",
  "key8": "sytP1YzMvpep4XmWxWQyjUKSGatiMB43p3Fd1AMEskyADuQG5dz81KfDQPCsr9tcEwZwebJ1LCA3vNUsDkCxWbS",
  "key9": "4VL5K9UxynG5uteicoHB9KUixnhjmHpPqf3JQVKKH44a7GpVVSm1JZY5UcLbhP6V7WBg3wt5t613TDHMRTTQCRCc",
  "key10": "eBQcVMz9igCj1HsmeHPvKNTsbuyfaHf9umTfsq6kBonoYwMXJ6VxsoajMKnWHu8wN2TY8MxyxQ8qhgzxbUK5JR9",
  "key11": "4B1fGwX4DDrF3oGfncFxLw7bc7YcNwupuyVksfTZdo3m1V1hSzEv3H9dat7cEqYYUTFRwzthSWXLfKz7fRyK2AJV",
  "key12": "kfMKPUTs48CDAP3SrJSZDUcrGrKXxmSeYe1mSGoXGbxVU7WMkUYTur6zoAuXiBWaSNWA3u39M3xFz1FYQ4ZeBFv",
  "key13": "fwJAQ8HvaMKaVU9SLzmWe7J5tsnLRUunkc16U1sPCP3Cary93FUz1G9xLq34dBRHjGKR8v8x9uQn9AmQxQVwHMZ",
  "key14": "4xjczNT3drvwee74S3dyvGEafHYJQS6XDyxH1Rapf6aDDuT9bM3uPpXq1KvZqKSZ6jMVt9bmXwJJCNum4ekSiq6Z",
  "key15": "57FwFByzmSSQcEoiHotuPaxodk2m3RM5bEfv7f6UBq9PreWMAJWJkvEiuekTG44vMnw8BQDKUbVFpPNvULd68Nvw",
  "key16": "5SE2x3seqhV83jCU6daGjNGrq98NZFT8Sye5y2fHhVAtJ1JHC2ZNEHtCCyFCHSDWjXJrM3hySaAx8rcqLdzCon89",
  "key17": "3LxcwqgY8SigMpdsKjjM3tgcPETuTGh28m7ZbZ3xZsasYqAi11yGzK5c4H6aSMg1gTLv6Zi1u15caFZGfdZqFsM2",
  "key18": "5Jby9vBnhc67cZpzA6tNJwDrF11c95K1KxXFpgrpNUb3NDZfzWiYv3RG6inz5o54EzkZZV17ZahV2P4Q3sCkdWZo",
  "key19": "2df8fq85qT4veD5sxSJSH6FGdR2LBzKFEHqRqwxXP8JHqG2g8h5TJChjH6tNUDx8UptBAHFKVDo57jDrAR3gtU5g",
  "key20": "56C8CAH9arHbxT2wxuF4AKP84YRdEMdogAypmRfkXUZLNMw3MuGqg8K5UMy5ucEgsCooK5y74goxb8Qt6sAxvDpK",
  "key21": "5nsGz8JeT1eTwUDHD4Ae69XkAm2wcNKxNXyJTtP6N32knDQLNWKtrLyAXs3njfJbGGX9eEHHUGPVwdDYuszXYz7Y",
  "key22": "2NXCsshcu5JaE2M9mnMPCTjmMF7S47kDUeAEsarwGMoGaF3QPDrKSJXH2QmUTT2itrrDMYxJBCMXM1bWX76cPhx5",
  "key23": "3MNRau4Gf7SKJCJdbWff75X6Aefqwb7md7Whk94oGk62FkJVNcMJV99mGzkjCYPyFMTAwdjVCGHvsMSzGGgSscL1",
  "key24": "3hiKdpNSGbRKudSoNKa1kZchtYMecXhc7yNHGvmxQub96Jc5Te6xX3N3sRHMMLY6hYk6FGmaXnJv95R4onAg4hJn",
  "key25": "5UJ7bxqTMNjXE5eR1YhkrwyNjiGxZTzPpFMQgPXK9BT1u2zDCshmwPUUq2CJnWGggnMreNpVqoPFGw6RNQyUaM81",
  "key26": "Prkgkncabg6RQJyYm3DUsmRq9wZ6n3BHUAByZAvSDd4CpMd1jbfWPH6b2SMTQiBgGSpezTWjmjnjax3tujNSGrD",
  "key27": "2AKeq5XrNrBkqM7xb2jLu5YJ27uRuyFCn97VTcsjdNhzBqkLxb4MTvP3jtjVr6q2YD6wSmYSoAxM3n1PqbgZan6T",
  "key28": "4THDukDo6MaJF9U9uuzFfkkRdtEqib5zXH3tKiQd7ijugQmyneamUA9pbk9SvM9sg2cMbMexmraL226yjjnTM9EE",
  "key29": "DSEXAATLirukV1cisHJ5qZL3PZWZLStcDuFVAAXAySvgBSiSXoJcrxbhrd6K9yY3nNXQiVPFxKVygpif8tXC3DR",
  "key30": "56WJozYu2JYd5fciNzZH6dANMREZmfqmZbJugmzQ7d4Eef27a2TN6ob1joxyEdhYrTHeSbTCyCHDmu1EmAdWQDr6",
  "key31": "5y99jfS7WrZzqvR14tfU9CVYba3NuNTqFDfBiP7AFd8aiPWpsYhG1qZ9xXerM3Y2wHEure3xo48CbdfJmwNUQjWM",
  "key32": "5HG8JPdEP5vsUX3jJHbzzJm2Ub2yyggSYpvnCnAfbtj2M977wRp7xEF3Gr4QibvsgQVzNHJrCpJfw8mxSqUAnh7B",
  "key33": "2brGqGpwR7RjVCioyFAiMBVdsVeW8dc18AmZATJWpfUaiCDVCQvfwzaoF71HVLKwy8ZqphQcsoEZZyUhuQ5gbXWJ",
  "key34": "5XZ6qdaVsHQcU5Cgby7XiGp7qpXvaPPGgBjyasjyC3sagozSdgyct91ruBU85yk9RDj4RoeVXYEaqvhV1Vc8Jv4Z",
  "key35": "4PJJgWqAqx6mFD4UpFcfckvW53ZffEcH6nAH8b6sgujBc9KdKLJjLmn5iCrQd12bXpYNjm2wGnug54xD4XzUUD5S",
  "key36": "4opq5WRMVCUF4du8281DMfWqoouPW1P4afjb3toaEAAG7pWcbRoiYMw1JWGcqAHwkSby1NGSUQXGSbsctiSFq5Je",
  "key37": "3E7qrMjCGhTahnPe3idXUymHEvbnDV9wnDPy4EfERDvjcaMES9skCQxQreb86zTCtMNiRPu7m5QAJ6TcmHoqvFBC",
  "key38": "2K3tJ5iPwf5xvYvfUAKDo9BhL9BGraE8BG3D8wXsrN4NEkuSccnoXg5d3WPz2uti4jLkL735dvVHbmEv9r4oX4vr",
  "key39": "2UzAw3PvWrbuh2hmnfzkSGwcT1Q4KfySZ6FBB1Mh7ysZwW8ASXj6tpH5TzRMmCXC5HbAyY7PdQNeADGkcUbApNM7",
  "key40": "47Uto19TM69XMhczQJDUHtRmieYYNePajMzNnhesXQfBBcoRuCqtadFwCP6YofpifUB7xgVeeWX66axVBUchtBeq",
  "key41": "5ZQiBDLdQtjYXmrapVQBccTS285i1fSRmeaQ3sLm5VEz1t5UbAL5o3EiD9xnwZiGVsT9pBoEDXH8QB1Eie153eHs",
  "key42": "9r8vmGpx8dee6sX5cBVXdAUuLDDchRaeHVfREU4KjMdXHhhjKhnSDp2xYSDfB7EwFWBHHts5Cwa4CcJwHEU4xRe",
  "key43": "31MSScMTmXHV82far6kQKjPhq6k3PUq28WnFLGcFxje6Z86T4s4wx87PUWqrCr5qoLhb2GUpw4ch7VbgRiwVXXvy"
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
