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
    "2j4jmRvrcyaoABF6LgohPSGwiWdsBZABjSe2Cqw2j9FjcaYRmKoaWpYKU3Bko6DKQ1xjVKQMr9BMaoswLde7mtE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nqbVU1NyhrqmiVmXpqVLJ8o3fGianjriwbGd6mxHsrMdPkn4pmeeND6JJ1W6zLgDEmRwagnrhmcdfQsAhBCq5sK",
  "key1": "4ce9bhW8msd8cK8HZ7Kafco9SaXYhKZrMT75KPMNaFiEFvHhCE6s2PeCMwaJXHGAk8Xo3KNwE1iox4PNYrb8wV3R",
  "key2": "3AZfj8Z7mdKtFjG4sYCWA2NzDP5nPSM5cMJohqfrtFjP8azZAMB9W5PkRNAbZXis4nHBz1J8ZnswvF8kbYUDmstm",
  "key3": "5FhufovCm6heYz9XWPmg8u6Ms5kAwoc6VVLbjSifkAhtRst3Xo26p7kyNRMMdnPGPQd6LsZxz61EcZNQbnL8VqDJ",
  "key4": "3Y9NGLLVuiCAhhy1mL85rFy8KAYSKYqyy15ZSSopWtnTuqGeUebTTfT7mVN13gY6TvVQrhEh1bLGeek7S3SfUNae",
  "key5": "2FamD6PrRQ8irybdoBqony4hDTeVW24bDzqZz3BW2ouQy9gPQNQNT3w6zkamr1AiG42SUD7KXTHktoeN8r6yr1or",
  "key6": "2hePn9ohW7FZ39v5joQcbMjVM3utuM2aMDe4otNdMugtwccZHbSyLAJ8mo1hByhPyS5EvQG4hwnQATYebpnTfszz",
  "key7": "5g6mn4HG5QcvToa68LYh3n8Vc4gXLBie97dfjgoqy2A9MCpovAQRBBizKAmWbawpxX34TJtefrCeeFTfaX7Pxy7t",
  "key8": "5zepuVLHaLyBe2zjYeDU3bvDyyn5UrZkVRMN1mQRAq5iaL7d5gJSKBjywWbantddrz2JBfcQtjifUQufiQtMwVZh",
  "key9": "4rsaSN9WxH5Y5rtLuZowLCvzd8DsKrejvkZeMpVmcwyaZGc2ykh4ZzLjugoqi8bJreEsyDjyMKm6Y6dExv1XzLjY",
  "key10": "27fFGorbgmb55UQgJiYJyKpe3VMiT6NriXvukN2ioidr6A8VFTauiSmANkga29HuWSojALUt7gj4CKn4z4T4RQ1h",
  "key11": "2oapUdAhfhvpFU1KU4aL4QzcQg1mNcNbRahP3f274axvjcnwzptTCf3CobDYoxEKnXj7mwV1SfWaEasMcStSB7fT",
  "key12": "3Hru3aYdYbQvCJC22hxmg9Z3emiyqjpYoRx28XhpBJQVdU4UjA1tWAet6zKMdrf3nPU6z8YhB9W8tysNjxLRgHmu",
  "key13": "3hY2kaMo6Cs5tp7YoHzQjszfWzsmCEQDuptorvt1SMHs1tHJKCn1ZvAxJTqq6T2LMgPEUcXNZBHMbG7ZXPnTc3Bs",
  "key14": "3BhzRtiX6AvSS66U1YQ5F9NSZDP4fWEY124vut9qaGGzYwtM5AMDNxo6kMEMWhWzXBE9aJVm8DfVMeCszE12bFxi",
  "key15": "4BqJBLnUag7TpF5fzrkMsTf8yHbuuLYtKRXYUtKMT9DPZ7Zij7aNEVpzVVT1EvQjsLGM1jRoX9LrQSxueZsPgjLf",
  "key16": "3LUr5wrY5PRXih28rBCknwbA8VBvfLB9w4JLFtygFXFK9XUNqb3HmhH429LU2ZaPRAP9VRuQXPc7nEM5N92QCP4B",
  "key17": "3k1iDVVRDofoYQswMvGoWnnoVcuF1kNBTF5bSeEubTF32oCyujT75qvSW1p3Z6mhG2tTvhBnBAbujxMLZsV7PWNm",
  "key18": "36zDMdA5RdwZk8YFX4nHwNU5G2R7XvAJ6wxficvB1accb6eDJxnbQ5NBzDMahgfdfWGKQ3vUvX5bmDNMDxUV8bS6",
  "key19": "5FDX2ftk2VNmB2hZ78RH6CgQt6ZxmDYTRtDv2zQ8fPAQ2bJfubCDRE4EBTtaRpXNRa4MGTVk5o1qMTsvH6vnQu9k",
  "key20": "37tHhQPUdXSXxz6YdeidyEyYGWbcJVYs3ebCdhQanRsRKRN4MDn5mM8zgU5zgGPr7y3NxL9ZAZfnTTfu2vZRrERC",
  "key21": "2G1F8fyxxM8MR76zFZ3X1FfAVphDVZCSyzejM6TaQozNam51fvWvDDwpFySW2MEnzNiw7JkPmys92CoJBZukJtdo",
  "key22": "2kZ4npgczs4smo7teuyuU2jQb7zHYTFCxghc8KaVoBeKNi3E5ugzuddcyWaPizei2JsKVyg6WcN1KcZJ4nRspGM8",
  "key23": "4hXardUW9daGjZ1xCgSHbH7sKGmRJpWsdpevWSu2m8CgfoSgW1gpLCFGv2fdVMZ5gq5y3Efc6rWYJ1aFpjveP33f",
  "key24": "AJST8opwPhm478mGShr4w5fGs2NNcfx4miNwW1QG9ogHPZUMfMURHrCEBcEYpWughaFK9ATwA8LvVAG9f54gfeA",
  "key25": "4UAUM4eJpd88qvffiPCCvv4qy4HZr9EWWnAVce8Tvpph177oxC2kY6i7r7rjRkfoUQHLPP8afM8LHfvJ6DFBgvK",
  "key26": "ABMDRxPqvJoBtv4sULexbkRBa1acXnqNP7QuBvbvk5F8bzZNbcrWDE74jWg374UkqXCpsQYbHPD5XKDCDkCB9M2",
  "key27": "5hbg3LmLc2argTivCQJ9FqBrSprYjZddYCcaBd3717ah7KhsyFW1EtFES7rGd9Dep372RKkrPwPZ4vP2kg4LjutR",
  "key28": "2Hxgh6gxK4TMJcarWvWQXCVeSpC2xqKFV4x2CqUB1HTWZSH5q6VFNn54QEQTeCXaT94vhTuyYe9SeHZ3ZxEZA6KK",
  "key29": "5XGP11Z63bQ6VcyGaKVQQuwkZfLdDxSYvuBLUowmH3j1sSih5Rh9t1rotxwnHi1H9YzBjC7fZLcnBFQp6DYrjd41",
  "key30": "mHArgygwBpgwFVzGJX6qfonB3BLVnv9ax4z75CsqJNQ714Lz4AoxYEEPCM7JJG4dzxHmwKyhqRq1fp8iKcJZBLe",
  "key31": "3u6aXKzS18rfnficUhy3uSEbgfg4zKhwgX64vy3V5eXZEfxMdUDEG3sYrHboYHrjeg9YfeGFYGTmPEy4khuDZxPH",
  "key32": "JY6aZgHK2sNPNgHPk5LapfQZtkGNpMMi1HTovFzj1qfMufe6xn6rnzGrVh5sQFGemMUktR74vkahS65pyqAjPJr",
  "key33": "q2VJ5DfKLLSfE7ty3uhkLWxetQj3psMFhC5eByNZmQtSF84CJLBiwE1vXpCasH17zK3HGNedkq7xrq6MgU9Sn9V",
  "key34": "5NEKxMcnhQ1gXqUPJFMHX5ecqVKQyPkTbeppnhSeS7dMHnVzd2r1wxvqgQKQVwNvZ1UQXccwT5Sq1rEpoUB7bxsm",
  "key35": "rLNvgXQP36JUh4SmKm17z4KhAHncHCS6RHZhGbnaNsDYCPGAptYQbt3RJZDcSrtGofUqkVapJc2EeB9pxkU4NRm",
  "key36": "55SZpmnPgePdthtC1NK56EGRPvMnuXENhRQLbTgMipq62AnjSF7js5A2mPKFGvU3MsCg3qkkGY4qfNRuduQx161N",
  "key37": "4Ad5uFNQkQq6PB5VR6SiuWs74dPDjD92XFbrTSjngz2MWWKxdkaPUQ1Fdtsg2j5dpYeoBYajtiDhofcdHYRUmNbD",
  "key38": "3GuyXybMsRFB6gCRQTs7bRvPHQdMUpsxavQWTjgcLCx6WQ32hn5VjFmahhvDa3Jq4i3pB6RHnvQ1AyhjQvQZJtUf",
  "key39": "5gp66HR66XAmEcb5mPotFegnsaPhQzy7rjXeC8eqmHwyoxrh7PGEU5Y2JW8nT5qu4U2bt5KP9v8vCLx5FFfftuuV",
  "key40": "5pFFqfx2Q1oecnHfAhNmyhxvhAUWigs6tfk7pG14BZKnqP8wSvzRgqAwxymdDy918HZiocBeqEMTCXS4ynFx2Kzi",
  "key41": "4MKRkguVYkpNh9UQyz3Fb31yxPnk1F3jjGAXJNefZNRyd5JX8qHWY7TC4XUGqGzZy4uyD1y9CyxjtCMJ3bLyJBfw",
  "key42": "4npELW6F5sQRs36Z9S6MTSHK2CZW7L89zKfGqNAXvDxNV98bQhau55J2m5XDbf4kGjJc87NPnapFSAeJ6diYKpE4",
  "key43": "5g3Coo7RqvSEKuxCWZbWQXVryPhUzUpkvoiQHSqwCmPsTH2Vtn3K9vnus22tgXHxv8TrM1JRS8bnFJ8amSx5R3ut",
  "key44": "5g8WFTAq8T2CC9cowrzysWmca92hhDmjUExKXCL1wYBL24XwfzBUnaYxnjNF1rhhoEzTSyED2ANGTySFqNCPYzLM",
  "key45": "33P5znbcQx7ny7Ch4KNrjagzpVRKDaoXiEYmm5gzCVaXZaSAJJni5Ggm7ed52DqYKycusdKTSQZcS6MhE3XLKCSu",
  "key46": "2FFLKqnNrz24WjW9Ds6NGxUGNmmmJ1NyDLysqN3RgFcpXe45wPx2DkrVMrGr56BNzJigryQfwWvPdnsPi9BHk7Nk",
  "key47": "3SmTb8aS3SPNmWdYgMFVfhqZcgShKvRRoVDM3aLTnH2ApZMQNqmzYaH1nf36usTGR3WeXUiGm5YXwwq8nHTkP1oR",
  "key48": "46CQbQ9DMszZNhTyiM6sRrRuLaPhdwbCNhVQzsWfwv7YpzbHUcHKNW7gVzHkGiydHQ2dtJLNTEAByUjVZ2C3jPXt"
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
