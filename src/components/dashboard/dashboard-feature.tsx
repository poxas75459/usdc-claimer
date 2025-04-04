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
    "2TbHad8hH9ancEVRDvimdpXz2mQztiXynuKVwuLHDt8vFVD5KL2go4H1rYr5636qegbcRhjxa2kT8dxeejK6GC9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhKz15gfVh9qewyR1yjG1MWgSz6975gqQUUJhLDaoCKgKhhHvQzFHnpE48Aakv2aqZ7hhB3TFdXaMxhsnGy5p1T",
  "key1": "3zaYMUyuFt2QkxkGJjpYe6vWSosBxoY73Tksa2AmMwFe1PR9nkk2Ye9vmrN8JvP18ZcvwKPq6jJr7MfpNSi9V1VW",
  "key2": "zfkJPni3ZnrNNN1YhyB1dc9Df1GGsxCsnRdGYaATo231ygw9i6jiFFsEgka9UcSkKRJopjUnJyxLeKuNUkmJS4V",
  "key3": "2hPjwX5P6GZhPJbWaU8mL4QurjRZG1ckJDAnCwx7XAyvNDEn1FXYzdjg6DyPABQX4kCY1cJmzbcG33maCHopAkQu",
  "key4": "jw4vvVnNC9GCLoXayqiysbwEgzaPr8wjod2VfZWshHrqAmxg58S8C7UxCDFQCypzcKwDbcnjL24u7QNsTdTcsPS",
  "key5": "35288AduXdXeQeom4e6wjHaDHv8EhtmPSMFetP9kq883waNMEHP7LC7dXV6GCCE91Xs4obh5EpmM1yu7TpjegY2G",
  "key6": "5dwjohoRGTd5hrDs4YTcJGYxKLLZ4dFug9jGLuDTrLUjCQxKC6zrEpt1kmn7nsAimx5o7jBjQ3UmEDjdu4iqGZag",
  "key7": "3ZgCBSo6XfPAVKgf3gcUHg2zsamwZH7X12vtudaUK4jRGUm24piNXf3xsCVyAPRidPgMwrhvzHQ9ZpkcNtzo7SeX",
  "key8": "4JmeKagDzemXzn2hPWh75dfZ2YZLXJCtkEYpvGtbPtRbpJhKP2hYLEwWNSKGL2cW4zPVKxz3ARehxD6TXD9voYS2",
  "key9": "VDPEWb9S12QJFJJJTBShrjKrLqwjzwimdtHMo5o7zJ9oN1y4rU7JgsPEcrddtFxkzPJawVKoEGMPnGBffsYV4ks",
  "key10": "582XdaLA8bsPZkUeTppTnpbeakfFE9UZaYCjbj9eBPgnQg3LAoCQGHwmfRotB7XDdZn9hZHsPJ98NaZSUb6a1Err",
  "key11": "5EBkK6SDNc2byBRvCRsrVvwV7pqcEbN7gqmW9HwP5SCyX8xdLR3eJmU6XXt9YiG7SCnsn2w6yCMvQd8MM8Xst3b1",
  "key12": "2GFp4pDpRKvpSkCjhSurTaP3p3ett7meCNscdbyShDcXQwdZoTi4RvD3rm7V2M5M3qHxFggfw6bJ7ivPDBpS2Agu",
  "key13": "48hAzWyQpG5jxLEnCJwU6ALuBVAj47yftJ2u34snHWkSZLDsrjQ1T4pcE4jSFMKZMM7me9E7u6v7T9T8pvfyjduv",
  "key14": "5SskCVeY1SQ1Ht4pEj4v7SURvikr6YaB9hQBb2PWj3Fz1Msbj5qzQs2i9WEYFyvefLEGSw8YbVmJLZEJyX4qxuQT",
  "key15": "2Fqd9U3dW6YmgyTkVEHwywmyHP82yro8g1xdFupyPvfAL6BrCsze2LWE3Skua14stinK3Tf32wNUYPw5jCPN6vSf",
  "key16": "32yyadzHru5e1KSrGQWFSeYjN1g1uNuP4GEdybUikJA9WDN2g1763LHM3kyyBi9QoC7YJvAvzbsdUdZjsjTJU4du",
  "key17": "4Bz4aW7xppMgAMbdjrfkRykyvuzheUeVxaALThLsmnUZp83V1h5Z1Uqxi6cUZUTkNPNpgk4HorL9yMEyzYQEDMfD",
  "key18": "2i96jbHhx2tJaJdKqfxMJuoqN5c2M94tKVhDxmadEoi5vGD1kUeTMVihxQ2T4RVbZB4PmxQzvxVvQVk59RnqAcUx",
  "key19": "ArjR6kdPZ9efvvemSfmhAnF1ea4FFMt7n3uubyW6pbZWXPXRLDoJdzmCbGZxorVjJBhiEJhwM4zHVop7gwcCpV4",
  "key20": "5M3LhiaCpQPiCfzhQEv3ZN4QSx6cGMLtx59A3VCsRVY94ETfp8RnyF2MTHfkAsBR9zZvhaZqJbtkuwEEbDEXbEDr",
  "key21": "22oyNtZyPmCiXoZCkZkCZeNBgrGGUS4mJKUuhRjkixVT7YUgg6Pb4TFkFY1XZoevsmb1nGVcjZi5gqkkdK5msKbw",
  "key22": "3Phpz34ayhQYirFHT7TuZJhx6Pkxf4b1V43cceKAzkG6Bw61EHDuEF3h6tCRf3yhB9dgVtdjesm8a9qctWcfkjiZ",
  "key23": "3jWWeyNRUnt9XAaenHi61yqBYjgscc5fsTNBNmcMTDH6Tqnh91edc8Fy17rvSioujC6uDtyg7Bynu5EBHzm7XhUy",
  "key24": "4FqBaG4pjYEJ3pFuCD4GCgdnjDLzySs24jFxGEGFoFS4QbVj3rjPHu2zK3JNdHJWzwsAEwb5wq1UZ7rWQFfj15b5",
  "key25": "2tn5F2fNNYLpTftUC1b6TVVxhWoxuDdhwgNANjbtWLR1j2ZigdzVCMAZpgNkpwb92E3aybxMP3X4bUE59hMhpwiu",
  "key26": "2Wud1WLsHtRZER3peErq4qkLqG52DsV7P2iYJnZrbvzkuBJhhWGztM293eLNFp7msNJL5rQML1GcqPWY6aZZtXjG",
  "key27": "rsEAazKEumzFJ4fTvFGj9YV48QfgRjnSufM8dv8Xcs98w6xKeoYYycfVGzLpWE4K7RHEjmLrdG13EUvVSiYAUQi",
  "key28": "3QdZV1JbLE17vboaWwMtoEHUgXofZs3rJbtYWuUc3zM9i3XiujTE2LRWmf3PTP7C2XGxjpY6iysBDCUJbNb6URKY",
  "key29": "3L1wSbrKLDYEbuc2a3qR8tsBCe4ht673qwg2jtbzoUAh4hJqbWQmaVeUw7Ui7YinNUnoZeygMH2d7ri4BooW2e9Y",
  "key30": "12FTVyQnsXi8qVfZNygV35WFiHmBsqF3JUjPyED2QZbevRbzDWVfBqj9kwCtTFUKpSdxKBE89XZDisXeNrWBs2W",
  "key31": "5fM6TVhopRXqYpGKt5xTicRc8P3RerTrfKYBnrwT2GVRSunUoaoojyyU6SSq23M3JdWpNZTTA2xTCYcwZ4YEgL24",
  "key32": "3viZS7s8p9ovachuVDUyq3tfMCibPwNQuxygihBdfFGgSvVwdnQiWzuJiXTyXXmgUmKMPcXWAPFJ6xtbXfBwrxQP",
  "key33": "4jmcH2MKPhpqdKyNXyBo6wMA7YqiKma78ffkL4z9bUiuHRuBGeG3bgABmCSvReTvXd8TGmFz3pvT9ah9gZ6ADRcg",
  "key34": "MUkSmds8YaqaG9Ykn8Gp98Mh3H5vjiDQUpb6N4sPAJ3oRr6ApVDhDvZEZWQxktbo41GDo1vmUZcFTraJVVBt3GH",
  "key35": "5DEajYQGJvv8duXYx4KPfpskAxwHARzWMKftNpFToVAHLDPazA859Y7dFe8gae2G3DKXSyS2xEsv4yWTN96WoWsf",
  "key36": "4QEK5dZ2Jbgk2x7cgPSeUWBhkxVfMmdWHQfctsGdsknTmbcjSGz22oxAj2if7ayLtop7irBQRiKky8uZerf6sg3M",
  "key37": "23xGYU86hSSWbZN7mLEE3MZ8NpvTcKPEBnteead6gLBYdU9ipiuRKfxaB2PydfUySQ92dZmgc4vq6dswkdFXKB1J"
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
