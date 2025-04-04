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
    "3PJF9e4rNSvtyuEah1v8bdsJz2GjzgtKqNsAu9ixbzEaBtewoRe475qJz4XavhbiNBvfSs3Hh8z2PiSuRYWSzgSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDjD6WeATJDBdtwJbKXnH9KzZXjfDbrP17atFuvvA79FZ3rBTwYP8gAFJAxrzm8JD11aqVUrybSqY2rrFJ2CkcM",
  "key1": "3A7dFtMRdVrHb68aYRZgV6phorNXZbhp86egKbrUMKUtevTvE4NXaog49WiCdUue8P5n4JgTEQgHhLLi6h7FAgcw",
  "key2": "2iSstgnrFZNssnJRJZMHJLP1K6qAP1dsjSHnmEcQnULCcCCCrNyLHSbpmdwFgm2UWMVYtF9iwZkMp87zF2PmeH3d",
  "key3": "3gzAgzCmk9DxCWkE285MTdLBwQiBzbL5JPrLZgGyETH5dANV4ar17JEqcVw4a4KP4WTbzhZ2eDti33oWtHaYvEjS",
  "key4": "4dRQ1kZ9Z5vH5JkN4XVnjJoggZF97i9mLVDBFtPH3zxA6GRUu6SDi7sBFfHkAfCmsEnj5oUm2ZRdnFQVKFXMmzKV",
  "key5": "4cG4BLBPqgg6CD2JDpvLLnyck4fbSQFFAYWQvKfDdyjKnDGVBgQ1CzZJ9etNTQzRdMgnjho4cbvhy19oNnhwSxNA",
  "key6": "4nseEwZDLhWhNfxnyN8zAAtdHbx6U1QP5U16PrEG6resW8cQ44yCdDRfupD7ohSnK2WfX8K8AE3JpCbEq5wZDD5D",
  "key7": "4oQwC2CQM85uZPJBrJqwvMW2UQoKG6B8UUnsfNSc23TEEY6nh7ZBVCGwzgju8nN9DBfEo5Wqwn4HFJiBRLePpVeN",
  "key8": "CSAxV8WQdAnijmhjFPjCfkA7ZCnrgUT8eKsAgLJHgi1bSFF2SuiXQUgZMxedYQbZBFsmgGn6xRDGcGMog7zDSag",
  "key9": "28xWxFpRsvpovCuPfyxt9bdFTcLPsBuEfgvKp1fn9ioh1bwKNgFrfEU1Hga6kqbJsnynT43mZbzztEC6jjCGpmxd",
  "key10": "4PkyyPCtDPRkFsvinC8Uz7xhoMvo6JtMqwLCDusZEKfjyQJpaYZXZNDEnRB2MDXYUzQyGMLpFKeAGgUQnrtmHCh",
  "key11": "5z97kZC8sT8pwsmUyaGDuqM8eTTsW7my6Q6gmQeK492JVC3rMReBcMPgXAbcYsSNzjiFdqpYtTuPfpYyv2gEsc5x",
  "key12": "2TEY3dARHHeC2C1jyzwHBk4Joy11wEZ2RSciw4cSuEfMvjb7DK5JCwhWcnFWU87rh6KVMEtNJieDzhVagPiRnRSS",
  "key13": "3TiNi8xxN9ykgefjL3corJAK6R1gU855ZNF7zTbZJS286Q4WqHCmmqdq45vHZkCUHaEm4DQvDJwY1s34uAAbDnuV",
  "key14": "FrMJJHW2GghULZgLWH3T8RC55dQwV671CmGQ1eJe47cu6ihFPuBSPodKvLRhA9goW94JVzmy3bFmFbm1yQTSgmz",
  "key15": "2WcQh6P82sPWr1W5YJ93VhoWcNfpsTiHxM3uCphUTeU6sbH1uKnYcpkCGtk6QAmvE4T6wWWrBkiiZjCo6Ehtzgi3",
  "key16": "4rMiMPQzgPoGZ6QveiHWnhHjugfzXcckxQQxqGPK4ohpnA5zvhGjCm89WTLyU2ZNbjUVeWtTvMYWsizcZvvVc2wp",
  "key17": "42mzy6roydeG3VrJiTiWxS4Nr3HzEqs2Yh5cGo92saQFp98m64nUDcYQRhdEK3qwaNnNTCtMdoyZZ2nuqK5hR62w",
  "key18": "4amC834cKBiF34CpCSwikXUs7vuZG4L7wPWqEr64cZ7NfDikaNNMnEN5Q2KEZkNGEHcabrEszBwDKQyBEwy1qFCV",
  "key19": "21Rd9G2VP668ZYUKkC6R8aWHnrPhboHfWSMLgaFZf5Jmo8N3D5ZnFmhBZ8XAFPYfpxzQfvf8Hy5DK6u2Nnmhyr3G",
  "key20": "4PNV8YG3uFBYbhvDMyrGtEggXinwRcDTCTmrxyVEwSyMSaLg3gP56yTFNiZa81EScCdc6VcJRPPKxm4KormrgFGJ",
  "key21": "27Yng5zMDeMJFjBRo5gUxF5Fcrs1kHwfgS7vzSH5iaK1TEoS83SfVMBdcY4Dym7dPgL7EfpoUfM1DcSeT13wP1Lb",
  "key22": "5TTtsAfR6sNivkaZPX4s7aMt72KVdyMFkx8ADafqSE3JRoC4miQ1nXvgnBSHxh6Pbvu9H5X7nT6GVbqtLN63JkG",
  "key23": "4BKuYGLVsFqXqR4WNQZCCKjcceQUF2xSzM2SYvm7dgB2T7obsJGbbRoSQGitvj5h2FgbM92ACAhAB1wXkLpXRBKG",
  "key24": "uSrwtyg66MoqV8KdNuqdCURrpzK3SG8tf1LReDWQRfFNo8f8XANMQBGDSfXKKttkZHhv6zkqQZSN8EDUdzcNaU5",
  "key25": "4g8toEbtTxmCUVAkDoq4Pkz986hKkhPy4YseD7SnxKmUBcAesLnixtcVUhiP9dhipuxdQinotfeSmNGAZBpaVsXR",
  "key26": "2eQAfWLrCdstRhFyoUvuivTzs95o39RyT2M9Ui4B1QSEUti3pFcFmEZEh96SuWxoC9sLCBxgV3aG58Fia4481xC",
  "key27": "akDHyqBiUGTgJ47xQ6A6QwfHRSdNAvZhBr9ZF4pwNgQfrzsMdu97yVMNcuaRTgX5Qv1eDdcgTtQ1NTbp7aRmfqp",
  "key28": "4QVXUr8RMgLD7jqZRjDueKZhWh3muu7WXiVvWUiagSNf4aAzGEoJhHz7p1vytWyRHrsfvmgooRBMT1Ht8eGoRSK1",
  "key29": "3BM2CR5RTQ3voinGtVVGDc8vvWDgXxCMg24eLZp2aAJAaF1ZYCUpVsQhiqNPXCd1vfXjaEcKStJyu8UdaWMjEt6P",
  "key30": "2wWk8U5y7YU2umvT1u824DxeXCg97Lb6iypXhyeTNvenGgyKCv2CLTFupTa3gVHk9VmmvKtTbPyQw9Bmwxk9MRgt",
  "key31": "4vEcdAwjskXX15ikNft4Hxvx9JcXn2hsgbKwtAS3awMALMs9KQ8RRRL9NSJcv9xhk7Lt1Y6YmQ9xbjgeAmYjTwc3",
  "key32": "5BPQcfzC3CcDSPo8EEJNWanUnQyBLmqf4qrNMqvHHdDKqt5S39vdmga2RQu1oMtP6EUmv3soWGMYcgfFRGNCYXyQ",
  "key33": "K6vr3cz5mqJG9jT3GLTdX4xGBQbbsnpG8JcXHR5UinJgQrgTR16utQzRPfmYn15ueZrwfSCbyFL6aijBmfCuN7E",
  "key34": "bVaxejVufurq9cxvWjSgEP9r31FfRyUw96MuPXfcgdEvJFPfMPZRmx3b94eEpJgwCromDaJexYPpwQbKfRYhpSK",
  "key35": "5Un5iY7BoPqdkkCkhUw6tXe6PrTgzcWrsBSmu2sNyWQdyqZ7BuB34BpjsjoeKp8AhbCUCJAVgpeUnTWUEwtruyN7",
  "key36": "5ShhonzHFEi7gFw9qaeQhaC8ExC4m63J3KZVnHE5mfJoJj9xsWhcUAJEjAbGZMhpZwDY9YFaeusAS7QPwsQ8847t",
  "key37": "5vk3vBYbud9fHb2m75nBq1yMaXMvPsVYUeeMJWNkzhcMf2EdjucMLMqDSfccaKf5cFj3TiFmSFJWgsTLQtFXMoF8",
  "key38": "3F9QcNicu3PnL1B9CFbGaWwBSWFfjws7SfrvVnoqUpcSXuY89vdr7LQBgVX1aARAnLXqELjtHmA4P6YubmF62RZx",
  "key39": "3aZ1i8vkLLqjmFPsHhFtKAv6TUMKzaasDEjriLNHDGjCm7faiXotRTwxT7yvQRb27yFWhnq4WNdofahex92Q1Hdh",
  "key40": "dHvNNYwRJCVPe4B11ZVncrW9mSzGP82obL757SgJ1pT3ihyJu4kZ6u2yfmpUf5hzz69ut3NXmKquMXENJPjF4wT",
  "key41": "3dW4fEHd8jbewefAHSLsoWvhCMaC9UeDHVRnDVGfDrrzC3pkGLD6qZ35t4vQB1LoLHFC5uc7QAVJYbTsh87MW2CU",
  "key42": "5izQotAGw5DmBgyq2unKajt7JUy1jgAJa9VKAvR5CHXe8hi6n99t9YFeNiVCF5gnn82VS7paNwaxhsoLc3EGMaSt",
  "key43": "3WEEoL3aZ8nkdAhFYMVdT4VWoc7BNAo2hQmQq7XS5WXiSpteyEHqXkPQW1sqk66D195qhqBxqiHur24eioBG3kat",
  "key44": "UkkvQQRSLVq2Vtkcuq33W1rXit9XidLsbH8kHhCpyVWHLm4iKvZ77afi2VXTFGJwp7ugeTtcyaXCwgkF7p7x2mS",
  "key45": "2Yo4AprYRnPUA4XWjXaS5V54Dtd7jgUaWY4uAY8Ax6Eri92iXh6WwnSjyj72Eb5UeYyMHNs95Pbw6R377FAxg4EN",
  "key46": "4P2ZS6QaqJ4rgJ2rGMmyYuzjNYouViwcoB37k6EfXT5bts32bkcjqKmRZt5jGMgQK5QKmmmRz1qdyM6yGpQbufVF",
  "key47": "LGHffw1TYyxQJCA5Reo74Z1CxmgkfH94tWg6pzP1LCgKf7FSD2isicv2PAWjqzAi9X98qbQA3MBdh3jjhMc2zJq"
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
