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
    "ganQP5C3LWwvo1GBFfjVTTb82FLCpDuFoe4bJojw6Z9gVg2CrBzbHSSh8on7x4zzSErhn4pNHZ3T8NX9ZWKgGSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29962mstJ1rznSmQcRCwRkqrgwBmkB399fhmVLgAYs27T16adRceb7iMsjy2mYQoihnbNTFEWnGH6tSKkCrWqRmc",
  "key1": "2MaYxfGNKRHnBwhtmU6m9YgwAYuAQzQJCjruj1ihWyVJ4ZpgRFCP9hSzvrYuidkaiP3yGgd9t7Jyb82B9Jgo2tP4",
  "key2": "37uUBcrMFVLxpEY7jjgEz5EHRQP9B285ExUv6Zh2pjKFA1TgwtVHzB9tJAdYrfY5KpRGmE4Nj8ksnEn6ASVMV3sU",
  "key3": "26xjGG1KaghS1xp3nHwJBo2u4GdtF5cxyDXmRFF76pK4pTufnHvWLMhCU96zoU5b7nkB4PHFag6AWamXfA7HxZgp",
  "key4": "3eY1A15CpuXp539mmSTaG8k5t8C8AVTP6mc7dhikc84KeDFXMhGoMPxmqqDayzndqfQo1wAzKoiayA1qjBiT3KbX",
  "key5": "2fuq1gXbYq3uDnEgmboMv6ot9ot3bFamwCQM8FQhoXPpf7cPRphMittZmdkPKHGtFcTxxsAFXyiBSwhzzaTuosE3",
  "key6": "3WT57W6tBSc8bgwNr6MGuppgPQqe2zVg7sZpGRTLe7t1Kh8o1YCjQH1nnJPzVGC44ZxkXT6K1KPQMeqYeTxnfkrz",
  "key7": "5Pqfkkw13agM8xDXQiZLyy3AbQiYpSmJ2LVUpuxAsWpWNWRjSyLt8LLHp1CAofTJiBLH8hMSZte5vdkZxaBMyHDn",
  "key8": "2HnKAULKAqXnnBQsWvYabpgF5B54HhYg9vK5uT6H7JccbjvBf3CLSqYoq94AySFPoGvhXfYJ3wN7BRR2DEBeRAB7",
  "key9": "DLBrwEaXjWaxX5ujwPxVNwDW4Ze4TXn59jnM2pYf1aC6SvucbG7VK6VzLsBjNTkXLX2cxWEe74qBktFyxLNgdvs",
  "key10": "4n5NcnQfkmWhiXgpkBCVoJkxnhYkWJ55hbZdYoFsKHm1yaVmxAA5d9A98sBjpeEFg45mi2R8URRw77EVZUF6Bi7K",
  "key11": "2btAG5j2Nf1FyngFUDRrSSwivoVXFPo4kL1EyFN7gt2cZ8mRgJHg9WPkBMeyizB3cJqzfxv2b33afjPUvoyCg2UP",
  "key12": "5eYrJi5e5qqLxHsDAoHWmDcgyQK6164khdGJstwLWWqEtX3LRxr8qu1H4nG2t9ps9gWX1FPpo1iGtVdpfVsBoKKg",
  "key13": "5JJWfaBjW4ZjksHfUobqWxz78ukJmv2RuLbzgAZWWK5wB68DChNRJmUwpJyRWg7JdTxBHLMYUMAEsCC3x1fuTVg5",
  "key14": "65LRsmAefDLLij74MQwtTd77Syk7K3iaJymBxHKsyh94vHrL6EEbDNfjLUeub46nbGEERJEKZT5XHyzMP5nvoepa",
  "key15": "5RSFxzyZWBD9txrR5q8Bc32YDCwmMmarBtoGB1wNkhA7eZeBbpybPCaEnwPLdXamhcdBapHbN7d6oms8h4YDeJz",
  "key16": "2MB5y1ogj8m9pyTARnYRofkPvww6FMFYQwWunnKmvwq6AJWCVz1fCbyt7rCm115fzkTXfS4oqQ3avfZF16P5uDZP",
  "key17": "4z9prSH66SWCP8XoRFMXTEYZnYgSneg3sR3phmpCuoivaqgnoyH7TVS1fuF9TMEu8zPzanZGWSKKuq7sao1z1Sro",
  "key18": "65xinQpatQ9vbYcVGzYvio1CbRU54YzGgi3M6yD1jbXC8CetKxi3sbvAj7a7fXrKwufbckY3SFSLLJEcFTkBBWig",
  "key19": "4FiPP9ysKQie45dvBZH8vQ9vuSG9Y9doQqsLcxoYiUXWEkiBVBNu7KuJgSoAusSqrTewceRwUfZ9tBaFyL4PWMc5",
  "key20": "26bYJHCbUqLC2WLGULMfLmPv9113a1gFKwJ1k6vuddpYa15Axaec7YxKhPY5EBiDrngVkv3b4PaF1iCXh6Z5FR86",
  "key21": "4FKKScUEXRoMmQhDu6yinGxtthnm5oXtrinL9nJqwxbRwGTe5N4T5faQXpxyHodwTWZhvoUo9t6ZkPyg9uMAhwJT",
  "key22": "4y17FtSfKnjwMiFhiMUmFFbMgruKkCbwYiMkjQ6c1ZYufz3EKdhEtX2sMWdpuy8R7ybC1smDsgVDpnqnDqyw17Xz",
  "key23": "4k6fgvxu7Y3u6HWFrp8o38HLJWXySLpa3K44CV3paUva4iXtirEu19g7JZbzVPLYmZs11fam2xVQk4tPkWFAMK6",
  "key24": "3T6B6Tv9DM72WbfZ69jrgPbcsH5CAtw1RUXfk7G4k74XZPdHvNmk5zzCwEquxBDMSzgpbNVtHUKEyeaMJqX2mW2L",
  "key25": "5ZarQpTMQCjH7vrADdUntDfWoBt9XZ95bDFB6DDFbNH5eTF7qH4pYPsHySYKe5rnNzqmSGA7tUubwZo6jAMpB7NT",
  "key26": "Y6m1URjNnRiShqeUUWHCsjfXAPK9fn4Y3LgZpHoPeZ73HsG9cyrNwqMtQjDf2q88GEKrYuYh42Xe2UeB376AQRM",
  "key27": "5qj9rfevjaTS1JKqXCGgQJwRsxqEWLqsGX8tnFry413dDropRfWCpMavuTkDPiw1iNoayUbxbmWUj385zZQ4mWMN",
  "key28": "2PEMdhqXW7FfPWvjF2fSTF43F11whGGwEpW7FghiQrxhogEzapziJbypMa3iysunCT3szbJBmDnba19JDVCEBcCC",
  "key29": "4TUALjGFPEgPbp7grRR2sAqrVdagtiK36hQno329cUvme8qsPxGxAiHjPxRncFXAuj4PjZH1QmuBRg1Nv2RVpW5Z",
  "key30": "4xWyhFJeFjThQLrrRCVjMLSSAsGyqbtgBbRxCzvtHhVWtSpMb9u4R7pPwv1PfxdqS5MWgengu4YnsHBqE1E1fqQt",
  "key31": "3cJVAW2Tpwhg7rM9GLi67pQ4XDZaeTecuyL4N9XaFPLSu6cCHAa2a7Qb5DmWk73TjjisDJB6iqsxi2bcgC51rQ7Z",
  "key32": "5s2i1p8xn86qiwzyKiVpMNsACEc7PUMFfRkv1S4ebe6UGYHXHrgr8MThQYWP61Wwv9Zugi4rhUxsUBfnAJiaRv6p",
  "key33": "53gDTvfX51XWZpM8Qn9HPz97Fo59yVjMW8DiARLT3JkuSR3sxvtMDVhLm6y9VnkmJvHAQTh1sDaHPgk9bwm4wUge",
  "key34": "67RHckdifhPYoAZDspX9cnWbvQWy67brg4R3XeEthg7JqRyJrXpMEfSdhuGjGsbMAJYTnJnxKKpwj4naJr6wixUQ",
  "key35": "3fDkaocrhuzEe2use3m1J7xkV8yXfRNVRXgBZgTJL6BZVACSScX73NNQLXLosguWtTHZvbtNivmFAqWqvANnhVVf",
  "key36": "4Gg6QMtwunRhGeLm6ScWvKi5zFDrhD2RMWTgZy8ZTkgRwErHnoBKZ7wvGVSFhxw1JBfEuTAEwquYhopmvF4Qnhbn",
  "key37": "4swjRtk144xWEuVMLNyGYykNk2GG6K7wBhKw8m5R7AYhdi4f7SrKCaRnEKDEM7yJiT7TUVVK26a27kEXd6P96YxY",
  "key38": "4cQRUaNnCXnrP11c9fg7T6TEKCzxBk2BW5WjXKH8PhCKaqwTdNnVhtCkfQnavVNTW2LMRz3v99yQzF1WXD9UJajw",
  "key39": "4Lx1PitBagD4daq7EQieN26DdTUkbfAPpq9xmAVfjWxHxqamrjaaJe6tqb3BXZaejD7gQFhwCWud3S6j6fRLPwMD",
  "key40": "2CeDqoh9V8DqkhVY9yTwJgAGDep1gNh3nAQoby57RNbX88zMK1mMBNXsSoQVYpsVx86ggnmW9gREM9g6sVkb4CxE"
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
