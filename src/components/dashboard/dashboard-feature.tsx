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
    "43vcxUfLfXSKyAoihrzMGwokf5ebu7gFrHYNgQbXQ4xrbaBD7bXU6MXm4MEx8PrfPHw25JQHnk4Wuqkz132izCrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hHx2M8muzgEHAsjfumNkvSRhe5QGMhUCFrAL5pfU967N8QZbTnwJvSEhXXDPixxFWRXTSWzCHEEJdNMUKm1N2y",
  "key1": "4MPfh7U7pRbXAcAV9gAD78iW3XoowyV4fLGM1YrJVP9EAjCvvDfAxst9x1y35vaz2Uf5Q1Kg5ruUE7658URtsQbs",
  "key2": "366CXnv8y6PyRj7bScj4PNAjz5VrUFn57PXbvFH3PHLqEPrtVCneTrG8kanPvk63rFHcK2MBiXBpJvk93FKEkkmQ",
  "key3": "3cEf5ssbbFT71R9tmqbK9eveGLi8Xfj1dNEGPoHPmmgjEgiU2Uu2d6sxA9fr9o8omAYatM6kXKTgpUYx6R79Nbt3",
  "key4": "2LsodepKyko9pQSbxo3V3KvejqfEwgXgFxb1VwMZnhQATEuP4bgSLNrY6WKQyoyzd4fXsUnAF6S4dCpt8q4j389R",
  "key5": "53hctf21hH8Dz1AoJFPrcsJUKKaZaPnZoPeLC7j1YsCadyqvj49UaGZ84h3aydwZy3VWwdPeKqewXGCCS5yYow2t",
  "key6": "RcHLJBkKrgQSHjAUPNtaq5grj57jwZ1gXQFhzAqBdcaSLiJgL4pP9cKwcbaebqQdc5W7xyDSwVyqs9c9TrEtGke",
  "key7": "tuebyqd1C6gqRuYdYB3aVXUv9b9SA3LoZUrbPargPTAGce9GcvvMzxMhceXd3TZmdPcjUeVDQoAzU7uZJZFtMaC",
  "key8": "4WNqXiNTCQDCR8EhvvUJZ7MfFUfrPx6tBWT5tQTbPGHLFSvq1Q37CwCUAfocGS45LbKmNZAV5usQmWXtgJX1AFUX",
  "key9": "5pd6DaKEXVneRQxyau9UmzX6RgTPtSxPAuLgHnDWHFrENSRg5H1JzRHNvAKaRL2W2QT9QC9R4UiHdidgsUx4NSPG",
  "key10": "2TtKiTrBsxsswj311HK2uTASdLj8t3YEHAY9hbgdYdQCpgerTCTLvZwYaaY8PR1D5kuaASXcTTYtY4jGmPMxgMoR",
  "key11": "5TgHS3QxPD6idGuGQMYAFnxYpeQwKmfNCYbmSEbZvrkwLsb1J9f9mKJuvt4C1ewURBPcMwSHj6CK6xY7NzzhmSCa",
  "key12": "3vuDTqX7qUUgWWgdqJybDjKLfza9ApJfU5ryZg38PcQ3qiNAzLXkeWoJUmVkToTkhqyQ5fsM7zPYLYet7JgeDQ99",
  "key13": "5CsointuwoYQQUbhkwU2Q8zfUFoK94sXGdwRVGLtAZ9tQYVJRqYo5E11DQ6XiXeKVLg8YfmmpJ7GQj8JcR5tju2M",
  "key14": "64apR2Det9qgz42gULh3JJCcDEYhD5vMnqkPbMukXCU3VYXg6xTRP9U3uVKDFQJKMtthwUNUx9bHLBdc6VTtqCAj",
  "key15": "2vQb3NZZ5m61rVBKaMGzLzrJrQCNCQPL5bzkVQ37oHq4cQqrh9R99iDgLDWk9Y36N1aJ48cS3VJh8J3woEDpHrNw",
  "key16": "3yb2nEFr33ogaRCqugoJG6DJKkZffNRLdAsgJUP48PjqcbJ8hm9BRp8YwFDFT7BEqCEMcebdReu86BtsoA21ysa5",
  "key17": "65yBsddpmSK133KajVTpCgdi2GuwomD5dXs7e8hoL22Niqnx2LYyHbf5qqM1wmhQaZEbiRkJiBwXhKydXVrvnUED",
  "key18": "5AvCgdM8JCMv6gnuvn3VaoygMJ17p98NjECtsgjPW45kfpg7MzS5eXgJciLxmEMNHjJ41Xz2K2Hox5AgkBgAm7zD",
  "key19": "2a2SUhaReEK27N4sH1EKtp4CFYHTAatf9crc2beKmVMNt9UZWEPF8UoBEhvDfnCcsBzERChAtd75wMFyq5QbEj14",
  "key20": "553rivLdJ8tx2T9bdKds7Cex6pvh85JGVbcXzsubrXQ1Gn5G7smoRh31uX71ZcEhEZsjkUG6BdkpooNCw7E7Eg7W",
  "key21": "57Ud7RnSZoZbHr2jZ7MPWZmhphKxW4UHfKHCMAkwbHEYb6z2KGZQ8jQsLoXob8qkL8vkxt54XJBLqn7tZKUYcDQD",
  "key22": "3uPudMQo1nUPo1uUp5FTKcvWxjwSttza6HagnJm3fNNVyHiLbcenmdn1LGg9wrYFH9MyKxBzF9iMey2jJGxNjEPU",
  "key23": "37Rs2ZUqPEwQz61D2M2kmJwGCB73iEQ7VRzZwsrC4uM5iyuWNDrarzX7mZ2bcmX7Dhjt1BZmZKnXh4TPK4A5D9gu",
  "key24": "5P8kTQgiMgTvHSoAUfVckxhRerqn8vBmogtBjMiKAuX7HCUzQd4uCQdTZj5ebTBMENKHcCLqERppSKVmX4G4JDNq",
  "key25": "5Rkd2VUSAaJ4XCuVvpUnMpoS13jjGZrcc3AQBetasMr7GgqfXaRNEJWxJnJqD2wtyfnHAQa8gJqeHee9mcEy57Pr",
  "key26": "2ZEHksnMAiSz92mBGjPZfvQ3GiEcYxE8PeEq2Az8WoMpAPzeXhPcKhKYxkPt8QuSsoYBfVFKXUW3WjixmcEUF6AY",
  "key27": "4DvD8pj4K3EntmSYTPmLibHLCUjEkVKKutFrDcJdZHa8exArHZnU3mx9inaY8KG2QQdSJUQUVyKE9tRGsQPxrHM5",
  "key28": "43jTSgg9xLmwbeVM9Rd55BPZan6NYeyo6YBLc2FfaQpmHiVfu4vx8CTBWjVCk8zykzoXtVB4Rd8h1nZzK5osVvsS",
  "key29": "2xtsrp7utzvbQLeyfaSfWyPzzBPp5cagZpocpM1m9sdWqLM5jJN1TZUL1yZ1rdStaBbsANKG6WMFCCNq2Fz6ktjb",
  "key30": "2JVsHrvUeML8FEAxefBaFozP1fGeyb6rATHqqASsNNCBhm83w5jqCMj8A26mbmUUxn5nxbL6ciyd7moY5f3AHwc2",
  "key31": "3ZyhoRUjF844oB5czNrncGQMsc3m8FzdspMwxsiUw2TNHsyDU5FBk9VqpqSEJqL8U4mLjRiu5TeVHkgixai9SvoD",
  "key32": "5cCqZc3ikjfKrpNGUo5oNM1V4jFc6zuRf5mWWFVuWCAhiVWhZgoPVLYkdDgWvKpjwvVxVqkQSEkZKrsQrZQXwuQy",
  "key33": "3644ZzQwFn9NcbwsicENWEBPWPvVwfBQFCzwAQ58QmwrhrBw8hRavYaFqi8jvnaNs1ncVCeD28fC1yWb1p6H8UsS",
  "key34": "Ty1ztm8TMJXsqrp1w6uog4d1EeVUMccNWGHshjbhWyy9j5ngZnHkwPW9vFH3NsLiE6xsQuGGgGhQKfmdKmWWoza",
  "key35": "5Y4BP5TMZtaJL32LcRtAYwyBchboWy8zG111gP4QZ23d1k6wZkTEWT9cMRzAsHBKjhhoiJMj5XQtotmjQMHz6Q8K",
  "key36": "5Zi397WGxW1t7V87wxezfUNYXMkZJ9tp2tgSFht394Bi64vJkoVTkrX76TX6ntJg3SUZA3gd3vJGQbjd2SHnXpNi",
  "key37": "4itq6ZBvAyQnjktvhku1zy6AnTuK32qe3c8ocTYEb1KzUbMkpkf3ct8y8ATP2JrPFkTaRACJsUKVNsmtFcUkpqKV",
  "key38": "4rXD33cGBxnoLSPj6ZyvD8ty7KJyfsMUFHuSxsuxKZcKCNnvr4amMvD6fkMKoSVT4AneDTTtc6aa2AjCrwvvwbrH",
  "key39": "3CALYuFSQYtwHSdbbejyMC6NuZNmj1VRV2e4R7Sa2JYKkYicuxLyoYdk6agRThqqT5ez4xSWothQqC4d5D38iB5g",
  "key40": "5ZhJ5ZGmuXHGoRnNuPqYDTHtW4pipqK63hxdHrAoeoDGQLvQiaJ9joAcjzEWs6yLNwao9LH5NtjAUf2jK6ZXF2zD",
  "key41": "AHnabsPudhQWW9yHunwmdXUSGhtUUeFRvL61TWxyN8vTbV64tx4LuhLNYxNXGUYhW8dgjWM3g1SactB9bijzQPY",
  "key42": "4WYHuNFC1sUrL2dUgX9sjDsHE9Z8mDzmKX5rc2XLnpc9PLBq2LHX58VakPosp49kuVSonYdbVEVduZPJ7bk1TytN",
  "key43": "2SHKcBBkgs67RB7DLqVjedcJQQ1WXP6xx7z7ki89wo4wTvufps5F36Y98CdAY27v4yzkNsYyo1JNiDetnf7joUWF",
  "key44": "5x7pjggF1PveHyzPFQLjgXqyywpUN5Kj7k5VvdQ9tqAFWwDLh832Fsnnk4AiU4VF8ym5Gg4pXPeKVvL2NpHna9jR"
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
