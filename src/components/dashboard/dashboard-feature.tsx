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
    "4juW1fCjoVjCsNiWibnEJ7pGiHEnxFEQhW9AYrxgQtaahum5BTtkLgdN1baUfveA9tviWeJjjG8P28bgX4tb7gTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ChfBTixgogF7kvFpVe3Vg3kjstc51zF9Drq65VQCJ7Vn6Apgtvaskxo2m3Y8xfL5rBYMqqhaXUFeTXrH5xytwm8",
  "key1": "2e7Dk9MQFR6TptTZqZ9tZUc1biCTuRvNjyjPf87GVsQfD31XyzE4bpqf69wEXZZTR7JBrAr3HQFkQnkypxzEV4P2",
  "key2": "Y4yEiMMW2PurkF2asFCHZMJ2NTEXEJs7ZSfcAWW6ACcXAUwqhRG9UsDgpQh1faXdyeDsqQDVNZ6sfeawTiZLWes",
  "key3": "5p9EbesdnnkmQYrWNL239KPF6F9YEx2DgnBDy3HFVfgpQP8xs79rdGGvJ8TTo7zNYxbU5BMxbDZBv76jzyPpbcKF",
  "key4": "2Ft33tnowUw9AVfn9jYz9Q5YgaNHrjxMCKjKhYJ3xDtqZFEwdEAAwM5SW5t2qRRN8b7rUJwULKnoygc6eBjNs2mj",
  "key5": "5hzWmM4fHejy8mFJDKget4uJoaXQ1a3yFrQkmAH9TgmtVWaAn5pRViQQjSZjVLzUwGC3dn8RVPRVi4vBFbfVeLXf",
  "key6": "64MjCPRPpfNqJLtvLrNSsobHfWcuk9QWJMR23bZ52zkMCD6FTt8DKUoAYH6P85opxnEpiJAe4k9nWeTZtFavect2",
  "key7": "43t3qBKHjCMdgJFXApgoWoyYRy7CFvHmGSgti8HLfhYWQXHoSHPP9w91AVJM5k9hwY1GxFJffMKMBQmoDPHcJiTo",
  "key8": "5tY4c6AVhgd1bmGvfg1LwFW2kUt8eqS8xTkfFyyoi7WCNLh12azLpiCDLYfJZnPZzRasMGcuJVg2rtQX8gRh42KA",
  "key9": "SvVDv5fRRt7zD4FHBt6ZXou3FBAudgHyp7BrRemMGJZPmzoVDyDG6DmSXgMv2J478VGfgWpUTHyWxY3USDDB7Eo",
  "key10": "v59QWjtf9iE6jgTF8tDjeX7pYx18ZrVgKV4GtasSVo915y7XmLUUqVSxyqNYyZUibNxVnhtxiD9Bs3Bc9ARXnsp",
  "key11": "3fY7Y36sYHztyVqozcSD62TjuyLTAhmQSofNLsgQkoaD8BE63rxTWwprofV6btb1zfXe9QipiBk9mCgb6ZEB2gRD",
  "key12": "56o91HMw4FA5zyxYrPa8dfPwgTEmfbtWHnyaVa94WMGiEGLhCo3fZmude1nD6YY1nfovmYicX2VdjKri3SpWnXSF",
  "key13": "5QgsKJyXAA9FTyQD6BtbBBYQAqFnpTo67MEyNxV6yrh2UHTcotCTqjbBzAPGcKv4bQzTvU23idzpZg2BBTkib2cK",
  "key14": "pfnzbWfuibvhxbQUQ7p6JS7E7aySmuADEzXbmUnVGMiL5v7kwo7SiMMfahKC61rXznRhhPczc1QCj66RA65Qr59",
  "key15": "4bWq3A2t5afdV5UsWV8eXYRiPEtU5TBLtwpwQL6oXGi5bSQMdfxsELtBShhqH5SSCpWyjCbP7cRfPSbDyRgrSACx",
  "key16": "2noUoPgptBk3uzZxu4Cbnd9JJ1NkZUMUuw1yGMWFvVBabx9uhhMNyVYW5SSD2D1QgpCn7eAHAJPXqpoksyoBzNMe",
  "key17": "2Ugk7yx3HAitxC3pHfzesoQjojukerSyQuvMtkyQRfuB2J5LvdGwWAAjQ3NoXs9Yfa9TacjR5mmwVBhjQQfhJiYP",
  "key18": "4uCj43QBwgGLGtbPNgzcf1Vy1sJtev9QjBEEZhVY8VquFp3VLhnkqyWAcMiUxNua11rGPuvSZFSk4no5X99snaNj",
  "key19": "s6Yd16rnZzFptAqUeXSyff2kR7sj7eTNWjc66UXeJ1jWmvZ9Nd45wQbh1hxdTRYNkEAjgTrKA5kB2PJ7xobGS5e",
  "key20": "259mkVPJbrJTPLQvtBMfAY6UN1vXKAuttRwrEFidicg3rfzb1qeotc1M8L1DefQDYejsEQL4JTsGMpY3XQPdfqFj",
  "key21": "274VKiyphLqqWGicw4Mx8pfw52oHE2o2wXHnLnAmRrkX44JrrUcrbbB1RwGL2wWhDAR6YazbE1WbyUAN7vCzsUw6",
  "key22": "5awZsodfWBHhQhRgprvb3767hXQsKqsaqMeqg1aakLdKFpcZyFjzjnUhsNE7SW4pvNPF7uChhCBykUFAFestPWQh",
  "key23": "4BR6w6JaSfHtv15kJDcPHrUsXv3KKFVM9ceSiLQuawU14SYLKniosBW7Zre7p4t5vzQSkS8z1hXkH3bZw3ccW3Pk",
  "key24": "3JuMCgtZ4iLzwMoi5FVVpDuYrsCZYcLZnjP5yyUyq8MCikBHBMe8Ehh4CXFF5DknQJn3PMbN1UvMGh99UA8pdcGA",
  "key25": "YXfKKNofmuu33W4KLXsQJKridTHqhmABvcxbjpQXucBYxrGKm9hYrd5QUxgwcvpQjLJrUUChUaihMYbbrfKwbAA",
  "key26": "4z9pLjHFhye28uVpm7p7ipqjZNjUxe8rHg25bbWAgxo95kedY28psqBJvAXis59QfRKvFv2SpgB2k5LkZ2JzfXLe",
  "key27": "5FBe6p4w7uQNKcoRkvhiGfmzhS6RzaGQMhwnzTPryaUPRG1feovUbeAPdPo8DHNWR5DCsi1xK8xVTbftEvy4PZ9N",
  "key28": "2z3hXdqSsPUrzVBHJ2MyN1YEX1Dhudw4vwe2R9uGXFxwPcgWsq4MawjXnwTJY2hLViq8DjB26AybC8kuHF3pkVdq",
  "key29": "4P3UAiKUPtCEs832gJqvzEQYmFG3YFfEZcfEBALGWZyko3dnBcg41gcSsfDTCQnD9dSjrjNjWWws4Vi4S1gYjzGX",
  "key30": "2zU5ASUiY2hpi2rurSgLKY54fB9sfbJFPtmEbPmCfjfecbx4JzeLpP9tzQmHASK3ifrAn4F5MHXPKrpcmH3WJa72",
  "key31": "46Mr72EQpCTGGBgPXQzEHHMENk5zujWdjXQ7ETA6D5SskjL1abRcRPXCLTQ5Rxjc4ybVkHPV3jrGpi46WP4LJmNk",
  "key32": "4grpvcHq7i21EYeZrddJujtgoKupaw8XfP9wmC2BoJTAFjU4R8dZXZQbSPxUwtWgFzUUJ5iAFRXPNDr5MehFYjBC",
  "key33": "3qij2Uvuhx9FAH3p5MNo3WLKpaeEa2r2fqSRE9hNCTXk4YsCvucMRKqCLWuD3woyjvz7zo9eLW5LNvdg1AULhYLK",
  "key34": "4v6CGDpLjSLcVwWu3wTMQpXd7vYX7JCv3fNSbqxwDWrk1AFNXEDRPjesnaV5T9kbYYENVYoxENNd6WsCsFtML7Ak",
  "key35": "4JcdLaVSok3atX2Lqhh6T2pYLybYRKbGuJYUzxZDPRbXu8Q7yg1aE72z9ZpHojmM2kF7wDk8yYwVmGdqPSoR6eQW",
  "key36": "4HzSgsMYQyFNjiy5AYzCaPbx14kKuEjX2WZTTFUsoRk51dcsgTTFsa9DGUHiW8y4r25wwWqFXKz139YtRsgu2tDb",
  "key37": "5cEeFtoojQ4K1vSnj1kvYvt9tZ3S6U1hV4x1Ed4swqxjMcyoehboKmivagmLLF7CU5FvYHLKjYFFWS9ytvtvgsmb",
  "key38": "4sadeoQmvWoH4NrmPbiYqzhJM6EFNZhEe8AUz7iSJXyRzaoLW6UhomDe4u5Lok3XfzCJcrhxVdtRWEBFGzn6hHUi",
  "key39": "3tAdRMHwDQbkHVuaKd6TnRR2FT31wxoT1n5RGCtinmHbYPkav6SoJPuMjkmBPDoviDvBZA7TnnThA1GjRhrGsizw",
  "key40": "5G2krGFCpef8sVXqPHuTCenvguJwjR1a9s1eJGfo6bPrFrzhuuEosbjRqswfFgsGYvuK6cqi58XQVQM7iNmHMrYE",
  "key41": "3o4YhS9dGWJmuBxrTQtJwmLweet812QnPNainEG1dZ8g7fAydDQPDXtzAFtcRTiquEX6sygfwQJEGi3iRQWiPj4e",
  "key42": "3wSSKU6Yk1ip4qmq1DPG18qf6ErWsZs5wnkKZHTJJz46pvxNbQ59dHNQG2VTR55cxK1oPNxJ2vPZjTTVkTrV72Fn",
  "key43": "4DybK8Cf4c4GKjMLFYRdCNLytdqJsWTUHJxmefrex5ovDCWPWTdh7eHLHXxqjEWHb5DHTtoBxKFpqT41oebH5AQR",
  "key44": "3jMbUABXF3mVVY3HdXXiTdKRkLLGT7sSP5FgcFwMZVwRf3LMYuyrf55S1dLxaYh5BYKwJvFJe276MLKfrMoNoq6v",
  "key45": "5Suq8YyWbfg983JgRcmYYCQWHreyXmzuzK44CwSioqBYez1vNzQ2hzp24kYyfa91rmttZyg4ZvvfYxrSybFLyAPp",
  "key46": "3sDaPT99pVCYLvJfDBSzWhJXDXDPwEzFKrXsK3dkSCtGVnxQeCXhJQNnmBM6mHcvLcbY1nKWJuSGessaH5Vmqt2C"
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
