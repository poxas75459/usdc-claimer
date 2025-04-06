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
    "46HYouDrK3PZier3R4rW4EByCJXVDuVXugAdMkBNWSKtb32zp53BHf3wnFM1jmTtbBWxqQa6MPpnpiaJBxC3Za9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JiuwKw2mbn6oubS5wztWrHmScJJG5s7sr5hGCc6iWJo1REPren8hPWjgDUPkDGAc7ChG9rqLoKQqsC1zTfMeTkd",
  "key1": "2ZwMp4JmdRzm95jV5dH6wyVUDUhMbkshSiGf6zzuQe4GGi7rSkUhdZ6GDHmMRkVHsYCbQwiWUj5VGNSVu7HU27LX",
  "key2": "58ffky23q28KrvWaXXKE55EhEAoxfuG4ynouiWKB1AAzwNB5ebmehFEX3JYJ2XuMc8m3o2uKqNZVUz3MCNWjzvRm",
  "key3": "SwJXpZ9V7Ld8L7sP2ZSbFxLUviocSdE28tBgt4ytwbMJQTfyoQo8ktgvwvvUGJzHZGDsRqmEzbuUER6HSyV9oGG",
  "key4": "vwQX5Wjg8LMViN8nTS8QLc83mkTzMxjwrDLC7kseSANZNCtNkDV1dqFamjA4vYnjEMoGhPPvpQGb4XDohJcf5UX",
  "key5": "3U9MdiLXUHAw6KV6aCxheSVuSdhmCgq2hbzWXAypJ6rHMdurjjfCFsoZwtSfhjGGBJTs7daRqTYwP32p8LEzkYqs",
  "key6": "3a7rxP27QmsBY1k8hWAoVYa5SMQajgMKnoBzxGggP4iEo3WiHG6X5TUo9k3b2Jdq13gNANyvKpEZBKbmKZFT6okS",
  "key7": "4uEdPBXDMotKGjio9uZYMGTx89LgsS4DAjQh57xuoWx6fzhoGfz6yX9fy5BkwDRwSq64n8UiDgG6PuewNZXhzZ2m",
  "key8": "5AvaJkgL8bbtapxxvKPNBove1yHpu9xzHocG7wqTGZX7rSV33DwwRyL9uJw7b8fB7TdKRk7oPmgUgzWmn8jHA4CX",
  "key9": "En7fwZHC22E9EPmJDuVC2AsKb3jLxgiw71iYov9p8bvFXoxs7gN4zBtzo9b2ybV3K6wYb6knyfXnQEpBP3qsxp2",
  "key10": "4SHJh8g2UF3Caxqa9dcQXXyz2FaWWwHufdGDcXafjg7681mjA55yeauzYLfrVoKKTTBVKKrw94458CeS39EQqwty",
  "key11": "Bh1Qhfn48NSTVncfsYCYWNDKj2zh7viAzh4fLs3Jb5GbEumdbTCsCSRdULb6FbuQubTDXEcqQ7uGYsr56TvsCRW",
  "key12": "3THAYgtsFG1Nio6Pma7TJ34uJWD5k3yLpJxufjTD5sVCqAfhYwhuYLd9SvgcsMnzmBHgKPor5w1z5eAZj7o9Dpc3",
  "key13": "46Y9iubSiekpzYgiBXPP6PL4bmN5aJsSv3TUWXgwn92SdjioUsLJABe7xvsdJzvuaZpXv83GL3QhqNaUucCNFfkt",
  "key14": "65pAZZ7WJG3jWAMjjMjcnVMYNw6o8Mecy7qLyGKvbXBAMc4Xz5afbQF14k8QY4DZXhK4v1k7UeSzofzK4QvMRHqy",
  "key15": "3LBasuP4EqtvSVcwrnYEpxYVpkp8Sm7xCv1h4A1Abkx4TUG66XjDTAFWpE7JWFkjWou2HRRivGCfvzunAkmvZAEg",
  "key16": "2fgtupPGCR3riFiCWavDsiTMAVP1hgV4K6ZFArE5MhgD6V2bWfxwMzTsxHH4jqMbNfx77HQGqd1z8GP5zicf1NHg",
  "key17": "2PrdBs6JMveGwVEjb8wjgeq71WU97bESivA7titXbLc6ENnwJd8RkxS6TDAVaXQHb95zvX3siBepqEmpqmzMN7TT",
  "key18": "4R9nMQicMaEbs7uhJvDoUG35g3Yx52CYFZfb7dmzyKaCUfY2EXmztsbcMb8VFGogP89huk9b5LckdnbZmirHxxWK",
  "key19": "19pmctsErAseB3R2YvRrm2tN8rgdtjYKH8zvXK18gTgVJbujPKhfLFP612hFeaZACqBFiKNaxHirYH6hmdGtqTw",
  "key20": "4K9aAptYppkWDNgouXGDB8PnsidHzAcCwVn3mmDzVkbjZVHytR31byFseWKGXpWes5JS3iHDZwusmsFuRsL7d4oU",
  "key21": "3LFneY2BuRxtyTJqz1hVSi7rRshqe4LaQhPuBMT8ntecEGv8zman1tBxeos2W5PZqMztmxtKwAqaxUcqmfpnDM86",
  "key22": "5dXEHK12WWXPPSS1s2Zhke8qyAkG3wiquQ1hdhPAe2DJDip21CwJjaXuuv69UEEt5HSp5Bi9C9qzAeC5qbMJ9ath",
  "key23": "4pd5AaTNKxrEMVzVYpDjhBqWnbiMN5pqKcYRszeAqNGdn4Twx68APEqdTnvyCVghhYrE52e4HXZbhDxbMrEqMcnS",
  "key24": "3tHYJ43LFeckbkQQBhsymVJAUaSNmAXdj5hUzEJErAfncXiKfb5B4icaNBT8y3D2LyxxsH6Jip6c9AVi6Fh4quyb",
  "key25": "3MKFRSzDSd7VV9VtAbW2EcEnfnZebF5KsBW4ihRP1HKcXF1HG5199yDdHU22DndN5QniB8o18rVXeB4hmhb1RYXL",
  "key26": "2LSuPZjocx8qvwnXxTX8dCpZHeCz2Cxtr9bN1jygD2YSpsdFxED2hL9XxUxKh9RpiFMsjcE5amYERrnqK6tS6JZG",
  "key27": "3JbUZffAgh8BsYDKx457hp2j8ix3qYaSAQM3Q8BEJFGUtWE7PDdxnNoqLwGiQzYoMrtTtMrN12Som3w8RxziLeZ1",
  "key28": "2Cow2cZ4EkRz7ohEWrqEsTUomx6p9qomzWaoWe69Qzp5HPBJG93zwuLzfrpazsW1v5QEhEYVKEbjn2BmsgbNwKkp",
  "key29": "2rzhPzeqwQSAYwXPURuigkZkdTVKnASJP6sGab1pMzVnVzZQmLLcL1X6Lhaa5LjYVAh86NFfpbT8WEW5g2cnFQGs",
  "key30": "5g6rExhnWcLuyYXW6PPhEJFKGxPxXzLtw9D77TyDRUZ6rzrzAXeq674X8DK9C353V2dYVMKGHXrhq4zCpnErEqE7"
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
