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
    "v6VfmhE8yK2JKLrdzH4VXsMD9MV9FfUTfdZNZ7TK8bCA3d7UmtZGP5sESkAnkMpSFghTwFitcu5Tr1zpT7pdpqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2roH7rn2NEYV583VPNqLyxjLmkwTXLtxTpa3ybDA8XiEzDMwmzyw9JRMgrj4ToXo1zYttGRN9VCXqR6ApQbyLCBV",
  "key1": "2kAkCFaHPRDtfkzuWAqMdg588J6hCymUMRJ2vnypsd4oRhM2CZ4xv5jewejXMPweV9H4Y5aRU57hU1hRCqrQbWjL",
  "key2": "3GuDDjPH5qF6DfGFD17FsyfAbTEV3pzQ7AqD4GbQDQ5Biiz77zjewWDWESm7bxvneYEer5QRfZemjSKXLBi5iS6Z",
  "key3": "24ZVUA2unpwPEPyhwa9X6ekP5Hdwv1xEJyacAnVRcMBQA1xs7tfjv9PCCgCK5f37gTA1Kugx5pmSrdcYLiyw4gyE",
  "key4": "2kUHuN6fEFSdi9BoEgLqsgkLGAuX813bqZRcVWw4gWxJCc3CTVrMHyqBuZMtwvovihE6mkhSKXVhrwbKJo1ekJuu",
  "key5": "2UUmS8hY2LDGJU1Bso4yixUHvVcGVS89UJE1o5gHYjt9Hc6NVcv1JTUtDyMseW6gzBE9ZXRe2r8Ya7X2x4QzKPvF",
  "key6": "2YMT7wJMtkczc5J8AYRL1NA5ePB6tVaddqxQhpvku4jwU1AjgcZ9AkSX6Gksn2EZfir1obdRng57vgFrkzGQz4Mk",
  "key7": "2ucB53vjwMsnLovoLpuhLBRcxzZmbRiD67a1XuebcDbBdSZiDgEU7HQEyZrs9L286CXHKSPYqyJPSGefC6zUbRpZ",
  "key8": "dVPwddGFNc5LBf8jFus3Qrm6LpsKZXE5dAYHu5gUusfWzmQcVm5akaokDF35P5UBtKg2FZN5dZDeitC3ipYsFtf",
  "key9": "4TEWqeuDP1B4Wuhk2yoJS9QHbQ16r6SfQqxHtV1j8WgcDzwcB4UfCdkofxXMmvemT5mxfp7JLP1EKYuW6tsRH81C",
  "key10": "3v8axHLQ4QdCi7rjHQcbT3RCLo1oWpRLjMcx26tTp4ZSbJtNQqHShoGZrxDkSYXw8VbcNtVipQ5f6rsVeu7WAHhe",
  "key11": "3taBiwUK9KyC5VMtdD4P9Ch1f7zbEB552vKByTvtdvj82vMsRzP8KYmyG2sTY2HiEnu3iqNi5MxhGzhnY1o1uLCn",
  "key12": "5YUsMnxunsGWNAcQwDKQEjGREAaYmMLMqgpMgvCKUXvVgeKUykrALKTtxxh49RR9izPrB6AYax6VHbhLKMcwji6C",
  "key13": "3AokbRRxknZCdooru5BGsfntfLnJMqmbH9wUsE7cjUkrKwoAzjpiJKjSfrJgzbXDkwgVN56DmvYrC55csZficX6P",
  "key14": "3jRZKxmPR58gLcmeqWqQM3qtbXEfQfJG2RWwW3NNmTByfYc5LpSE9ATjq6vBjxifgB67Yfc98SBwY7cNfjxX2tBb",
  "key15": "53LjfMfJxPchSzZhVmkVAPMH4DM1KrxEpSf2UKGL51WPY2QhaGUGJNEYF2BTZRUvh5QKM56irFLU8x1cjuUCr9uU",
  "key16": "4b7UC2LVMXnBtV62rjmQCB958hgLLxG1fbMFRdw4tuMk2jPFLXGqpexV8v6DcMgNrQ7E3wfk6EKA6kMGV8mc4q5t",
  "key17": "2V7pkuwTdn7vK7tedYuzNr8zDfDXjBgVd5UQSKp1jyeBh2ihrf35tCAi8qkWPRLFYM4HeFhKTswWA3sXCVwJcKf7",
  "key18": "3foZrLCGEUZDSrJpsTMb5v73AYsyVbCRyEPW7nXpfeQaFkhsJW8yN7fVC9ThjGjgMmSiVWfAbSVsJn1nqpAq8DSn",
  "key19": "3LdpbYvbP9dwaswC6ims95fSwZGMnQb4Ttxnm6wX3WqzaD3R8cfwsoodPduSPrUYDtrwRCYQxcFPvCvnwjspDZVb",
  "key20": "4K1P453Za9MhnZVzTsrnj1Uca8Perj1jntSH8FEg41wXiAvyjGPxe4JjqYtsJ56kdYxtzEiZrSGGMpePcY5o1iJz",
  "key21": "5FBD8WMwsDTzrGJCfJn4PJqpuGxCaubuLtC5t1M5m4ZuhonTCYMqhdWMNRtUB88f12odgevXFomTKMijV4rEYBUN",
  "key22": "M17Z92CvQX7WBU8ZvpTmczkuCcJZXwLCDoRvDzX232YjiA8TbmpgmJuvpR8R62qe8BY9ANL7uuggB9SsU1jgqoD",
  "key23": "5E3TzPhpyDVA7XQBvBq3DKi7gfzACYs3aEDGW89aabJsJo7sqevJdfd2TjN33mVf8YwMz8j8hcsNUhvqS2EHPdxB",
  "key24": "5vEtH4PUTkE25VCDmJnnqRyYfPFeyEnkTigQnnFerjxwHJoEFtRm6w7iJaQ4G1r7LxGfyGZBF8YtELBL4PV2h9zf",
  "key25": "4FKEeyiE5b3L8bt3nm3ptYMd3vWfjBKwz6YnUH3nYvQ8mDL5gJiRpKbezKZg1cb5FReQNZbMwGQyWGHLpaeM6f6a",
  "key26": "4yJvuhkjXuCJHgYqTJpUBir5ADCEb5iu2JTpHbydhfAjNThd6Abi126V9LgRfH3LMEwAkqgHAMQMvKJDoAJGJRKu",
  "key27": "3f2vYZfGzzxKdHJmvEYr38ALd37m63T1X5eYYG2wWmcTetaqs3QSQbumDgYgh1mnxqKc7PHZPvZDgQLKMQ8QctG",
  "key28": "24HeMyJ9S7vYCn9DmEeM4J4FrtfTRJ7L1XaTtYkVAmSoUSdukHbVP8cX6p8GAvK9ZcAdMLGDcLo2vPDtCC8SVbFG",
  "key29": "z4aQ5Hi5mNv3kxVun6ZJcAtwQBSDwFuAUFxFgweWPHLVvxTS1Lombems58RktQ4uWBWxpeBLKwsoAt6HBkKHznf",
  "key30": "PcmEdCBAFa7FVHejf9kmretM3WQkb3eRef16buvxCfTc15w4fe9bFkpP4cYV7jf2QyEQM6PeNUiAwwosiqygqmr",
  "key31": "2bbWgpRK9nsLubYYECihfAEHssUZoJ2V5eP4GRRh4gRD42L74DL4qgwCpgNJquCYdAxuQbdF39ZaT4gPEbA1pP2b",
  "key32": "2md7y9Cd2oGXiBJoBkEe64Zt93YPrwmj4V1scrcRwfqJEbjvnHLA8BNcyjdDGmsyvuSgxtJneEmJeRx3zpXUDp6f",
  "key33": "4Sqf8osddMR4aVsvmvB4CfxxymaqqWDesESedS4jqDLMPtmViCRtYHC7zsXwZ1Sxbs7btUaRdohemTnULnfq5nN9",
  "key34": "5R1RAXescYBSVT376TVZ9hm82Je4gyTFjBdQrmhXpoNQN9L1VKDskvTcC4Yf9sxiFgfL5tNML3xwCvjfvddZpm57",
  "key35": "63FYzanpJwD4LAjr15GY5HaBXYCPisue4wocyPxsaCEa8fwqnmqRxnhpd5FGiTesNyyaottei6HK3XwYmbnL7jRn",
  "key36": "CBmsfHh2VD6u5eCTUpFLtkUzTUz5SyEvPkgPhUtH5etFUS2XDwyJEUzQgJQMEbAuAmgpMzdR19SKtpFP4sUvwvR",
  "key37": "3422hW241PWCfqyNGYMDS51N3PW72dBm2Zg9ununAzjY5utZkYUEjRriV8SVMGXALofnYrJuQbQneeezzpngEa7r",
  "key38": "WZMfUxMw8a4VzUNt9QFw2gPn7KGcNvH75uvScR7xW3oEDFWzd96YZQfTGVXpxbJcwDkcGdQYnYKXy7Y6LJACk1N",
  "key39": "23vP64SQErgxRCCwrap3gu1agFffyXLCJLvD7tJiRd5pHGHRN2XksgG7Ami1KtCbPTcXybXit4dAHSRcYkGEA6sh",
  "key40": "2tFXaeYZopiiwqcicZ9WWUGgRust2BKjggjX9iGLKwhTn95mZw4qBxjjsksSaxkyaiQgU5dTfBqQcVeTWRFD5zSm",
  "key41": "eKvytxmZooUKV5pH9uXeqpbVG557W5S7ycT8nwwr6ASNppNk8gZSw3FGMXbQ8B7RsuBBKYpgLsfFN3NMCdaxYgF",
  "key42": "GF3the5mgP8haK2H6Crme1LSEYA5f46ZGFjc2J7mYDL244uJuws5aQZ8k9Akz1RzmykHM7dYwQVchUnPMfEVtNt",
  "key43": "2CeyB5Pb68wUfFdTYxgnLr6hRYu2xpqpPjYe36z7JcaTFWyRLJKUEKvDavYmy8qVAGNFMxEBJp5AL6wMhYY3LeGm",
  "key44": "5AUHQP6jxXwA2EBk7EQQJu4WWhfTkHfPkXg1nChun88BDpET3g3edTTdPEZbV19RLuEFyzK9MTH5NSQvKJb5cPJB",
  "key45": "3YSfNjiyV46NDy33iF76CLgJQLbGBtEDEuHA3pw1qhGGYexBTfpdiBbbQazmcBdTLe3tuoxtTpBRisHdLPTJewEX",
  "key46": "625AUVLQX8LTjt32LKbyBaws82WXjhrCNx92RCcQTSgpm8pmNsbFF1gTnmP4i2cy8EJVUbovEyrFraeyUChnVM62",
  "key47": "2QUkKf2Fk7a13xdi9gNBz9AoMx6bS3Qq1hUVoaSmK83ijkGDx59hJPtPQY4dLapjoF72LyvNe1Xf2C5GUKuK4gF6",
  "key48": "hyRzu8JikBvoye29UybAJaqABAi5nds9cdHDtFNRypKkamAVAaSnVAWvz2dC7bBQvJa9SaN6neSDfPTNxLRGcZR",
  "key49": "24h1Z25YdmgJt92SXbYa2j8qwQAzsZSSxvqJfWpDNUinPcvQC2DexjNghsy6n3m4nDi7PSS9nbwMk4tLMQK3Codd"
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
