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
    "5h83FjDpFfVit39tkg1369GhBwzTcjMmTDsbgWqTsQ67prmTzd17TbfHXzzdyjM565B89HB1z5chVKHBBKYFM3sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjmR9EjacucziJsznAmoimAtVyoEY4TtbUNdDLNDGvDNecD1z1PCTANDUCZd7FmTVWCazLqxnC3QFWGWZGLDE8D",
  "key1": "3KhEvMce3cyfVkjh9MapfvUJ9Wu7SvusQUnpr9i2xAqkAeaLeojhNMC18FtJWsC21HEuB4fS5gpje2KEJNQj1rjC",
  "key2": "612FcQNDbdhEMdnngtzSAugQGv1xUij4sP6D3LLJu52Mq7XHvWyFfwrEE93R5S9347iUy3M6Wt38EXv6YjdLATqT",
  "key3": "2rA964AP2bCCkR3zJ4c5L7E9a1LabCsFPsfD38WSYAhE1hLkHJ6kPjpQuwP2yukjgeSWUAHRrbjfuThXbV5HemZh",
  "key4": "4F51hra6ARMQAxnLipRRYqEtV1P6fb9ccxrr9xNjM4hnDB5tpQ99uwFPwPUNWzB5HL5bqKEvqxh5EVdFS7SpyAh6",
  "key5": "5u9nbjrautHwuXqxegj6XXHsLyWLkfenXT3H8sEEWRibxHwiWWoX42RgdPp8whAUZhkM9betwqmd7MtynV6qXfbm",
  "key6": "67BdNUuG55XFnjyqjJsEWnkvNSde9LjJoGzWCpZKFm4h1VDRLRyNNtuA2oNgb9xjFMbVFes6dB37sokQC9zwMEUj",
  "key7": "4Fuw9EZ6BKVtLypa9FgvsCsvTh82hm7Ti7eRYDJH53x7EtJ9o6jY35DxVpUcrCSaeMMtfDTHhLYqwmWWzorsg6uP",
  "key8": "3VazpyidZHiXoSt9JaFSDAt4EuWAr994cdSzauiNw2btWu9Q6q9355RMpue8owogh1k8oH69dDdEDLHT9NB8dFFg",
  "key9": "4u76zEseEfvpXEqF3t993kay2A54PuGZp5tLNzLJ997ekMXtLQyHRqy1svABLqrcszDddoSHUUsDnaJUG7oYiwUb",
  "key10": "5ZZGRpS8spn8H4643dnHYTPpmFTUHkJnJJ6ie4Amp96V5Wkh3c3udMmY7SoBGQiK3a8LzibtZugSisFZsxYmchPM",
  "key11": "3vBU1rVbabNT89FLh1Lmz8qFjA3dr3YY7BCBMnjTSHx8b26paHHj7SttreRBK3fM6ZTT1vFx6TwuFwg3BLaJnrvj",
  "key12": "3GmHxmfX1Jtb1ALkn3mtxCt5L9FBSfBqhYHkgZ464Aad4YsPpQwDy5UGAbyexibuYSUfWhQBCJYe8NHkJkpRbM2G",
  "key13": "3QgCjDnt3ePfAZLwEvCWhYmXeHGE4ZGBUWfH7XvSs1rr44gsTrC2E7YRtHK2zM66taeL7XcPWpH1s77Djtr8i22i",
  "key14": "3fNxKP3VjxNcji7hJbGQ6Yd1N3uyMpTNgSGiZWVkec2XtwTDtU9K2Jgz7b5brcHu3JpjgLxA3315wMK4REcgEoCy",
  "key15": "4YYWvZRTQrreHAhRarUicvaRyM8Qme2bgTPwVyEPEtKBAkdpWxibxBzen2iCSM6D8h1FDvPMFRn5FYnZb3FszCh4",
  "key16": "2bjF9YZ6tLQx4BeaQjJ7xbcBHeTJ6MQsTNGgEriNDJjRGimFisFPyA4zVto7UMt773Z5kxLKfxSjJEyzgvvqmAGy",
  "key17": "5AyUCX7vfKG4xo1JxaGwx1PicCKCkVSEpHoP6xRzm9zqgijU7zzUkrKXXhpb3Wgj8yKBfj9ibhhv3mAvhcTrKJkH",
  "key18": "5pHBKbY81Yusdcb5hyCYDUGdBeinCiP4TXoQz6SbxCDy34X6K1qnMSRgZAktwrViJn7qXsxDbp7WESBrPsK5jdcK",
  "key19": "5DPgsV6baBaM34tLoF1rPcutsLADAYgBYj9pS7ptEopcVZC14sui2KDoYWCNoewNZimRW26DS6jmZhweewVr9Ngh",
  "key20": "29zxgZWJpiAP1gUKVQ4Tap5L2iEMTBwdwiBJPwpnY8AedB711povLx2dxZb3KFHrS2MX7NfTvCMzz9mhLG1uX949",
  "key21": "2HmhVSJP6G584xwrNWaE22TqNNQzVHCTZeBjC5uW2FD5JxZEMDc5nA6W1YJcbsT4cvyKM35tW5iLRKqquLzgpoCQ",
  "key22": "4vGJ6mBzm2wBAnkGEw1TqyJaBDtoeV3hAwsxFrPH3Ntnv9boM6LupJxPrmFodBGWTCYN2HowA3fLj6zs9a5Tq9KF",
  "key23": "mbRezK4CSg8cadY2tTG6yiy7oV9iBbTMRSPR2vKhETYfgPQDTbbY7b6ua9sDMk21Cm2yM1CeRqN8MJ5E82LRpNL",
  "key24": "4DAJTAiPACBjZVoyYJ2s3ufdC9gkrstG2yMoFFjth44n3WN6JvGpQbYb7uJw3sf1GWTCbM3AgEkzLMrx5W6DwRLr",
  "key25": "4wDEeDZKv5YvszV23PrkoTM7bR4SD5UTQDqCBndHL295hnsHc93V8L97VeKFrHfB6BM89ZuDCGxS4bwSFuTswU9j",
  "key26": "545dxNX33xLHvEySKKsugavzoBVLApgc4n9Qvyw2puqiXRPEiRDuRkUgcX2TXF6aVzuRcahk4EC5yQ6kKH7u8Snx",
  "key27": "cYMmmJmzemi2Kie3CGu1tHr6A5WcdY3wGwZoWaN8KNvbBntUE8Cs5WLpVnVWKDEmQZS6dRTcQtGAVxt3u4p9Grr",
  "key28": "2AMr38j31drQ1tB11TtyYDVhxwo4NU5b43tdHwjyqgenNPyFnjfBSLu9etHfzrevuJHnCW9wG2vFZtm6vTpSHVCt",
  "key29": "3a9v4WDCreXbt1bAT3dUffxCbMPebwgWy5auU5HiE3yuqJ3CULfHG3uaT4xFQoEQt2afpnGL345VCARAa43ZQPKb",
  "key30": "3qmQuiJyhJRrwTyiA7cENGZaS2deszVArXhaqGsqsZqML1FTREdCDgc1bgpKX9jhoQu4yzMg11GXk7JpmddyohT8",
  "key31": "4LBSthxXsZXFiMm6Khy9M44n7jGZszjVwAu66Z4iA3aHxHNPFx5VmiCvkF9x4Eb7secYQkQL2u5oHw4xMfTEShNJ",
  "key32": "2JMCVTeUzE2U8N5AN4YmUgoaBbrUaZyC1PFwi4ddmcDXGnbvsedHfxHiFweiCcJ5zqseirCxKpYu7jwajjsit2Bx",
  "key33": "2a1dq8p1CT75XyeB2qyRSH8SAVBnYmrCLtTPqXGqHskccDuczo1nujsaqdTe46Zh2WNexrB92jMHVmE3Xny4wwMf",
  "key34": "46oUJqLzFEY5Qr5F2WSDKZEhmRFu7skBgdd96tZVwEqWKWZUtDxeUi3BzDnHdDZD1qBquD5ASS8g9W9gWDuVHbpw",
  "key35": "2MxETAV7wBXW73yUPKgTTuLZADzX2Vk2v7gHU8uE31QWkGPMcL5dNLx3S9ztPL4eAnUNg9aYr8NrGAk7f1SV5LPP",
  "key36": "woDV2akjaiVwzmdQJT3XLyCUHNibhAjcp6gLWUXVkrLSqLAvWpt1EvsNBaW4buPpkj9FC3x7hKjF38jBB2cs1hw",
  "key37": "5heMrBdRRhYPDgtiLL9FRnD6EYEFWXqCtsAN5ke8LAgkaaWHhH1w4XAJoT64FT8MEtR9ZMFeiyS77WfSoTwfYaNo",
  "key38": "4N4PeMgcykjcPjjrTWkE3NggZeqXdhhaiSaeJiH7ifKSV8yyGXKoavqWDLb7ExPpWsxTBG4iDfcSzJTf2PHghhe2",
  "key39": "46Hgf6GcRqwVoiGyH5MRpC1ZNCU9Fixuruj9CbB1G5UoFMBWisUHijxBpfwFrkejCpwMdddJEDWf9xduv8TsmUEJ",
  "key40": "31mLJ1G2vRmv2L4eCVugj6ty2VDY89NWJeouWyu2MMnU5fF7utmdEbc5ernUNzYtZyuKfEWrEjBopPPfVyN3xLrz",
  "key41": "4gbkBpy3mzW8zfEQxk7QqPRk3wrttvnUB1Yy77wm9Z2DCCKcVFmJuYQESG8YSinDFWehKojeCsekDxA7e1HrZDYY",
  "key42": "8XoE6xoVnDWrgXYFafDdpkgCHwthV2svPyLjegPMo55cGc8gQAtCyMgXWqigZUxyQeNuhsayXxRgg1iRTbd5Lm2",
  "key43": "35VXu6t8qYEpDiA88RNdFKjW35oBvAc8LKoBwPosRNST33rKYnxygBFtNG6Qm47byav1LdC3L96xQZfsCUXSsJzv",
  "key44": "31nnJJ1mMwKq5H8gCX8VfB6CqreANXBz2iiUPYMqGKri4cZgufh3WmihBeq9extEbTWs8zMNpYx53uQGVRTE5fFW",
  "key45": "4Khn7X8CQDZKjvpt8gK63VgavMTFZSmJ3h5BFpKXaLuC3YChgUJ2pBFxbyCYMJpbScVE3Jx3WutgdioSDF4M94iT",
  "key46": "2r8T1Q3VWScbwfukDUsMQ4w1F1Sf5Z84ribMwe36B8deiXNNVsPvH3RznFVoBWi9jnPzGvbtHrXg6GPwDYbCHGBP"
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
