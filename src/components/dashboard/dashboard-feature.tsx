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
    "5etnLK3xZTFp9gPVZCvzHANH4a74YVTDNhBBVRfpsxDJNc6uwB7NCkcQLiDTpBdU1bonq7Ks4UVTj9f8PUaW6urb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ricnNsdA4XYxHBd7jFHPNU25YtSrV3iQd3sn57gGTrvmcvzAUnAjHH2uD7AGbuGZ5mvS2M3f2uKzGxdMeTnVwn",
  "key1": "4Vep8tR3Qrun8iuifjAPDu9HTP4UJoBnV2KdtWyUAW8oPswwK1EYbJgSiLTkzWJZjM7cq8xna4HorjK54iMBNN6X",
  "key2": "thCkk9wHrYUbDJKCy2WLLosrtsAVZ24PEmTG8R3Co74BuAs5pSFCDY8K2stShQV1qc2zGW37xponGbjpNai3n98",
  "key3": "3HNGHez9YTZRLpowQBtvnicTTaH4RPnjWZaofDTFm2XNC68o4d1dstQ8i7Tc9FJFFRPwQfbYsJx5PEeVnbVxGPu8",
  "key4": "3UUL9FXv7ng6Lwx2PfiniYPFWvwsxgFvgb9RfvcPuhguuRXQ2vWJZMcXRWkQrMaw9SU43JUjCHZYwnB4vgW4zj22",
  "key5": "47uzpyUVagqzFuENjayVdBCMbfM1vmSsqkscUkqAGsLqqtQWXGpwb7ra42S2MQ2pYZau3aeuMM8TZQWJdDn8pFnc",
  "key6": "51nN3T35w4Edk2zq89Ukr78ZUE4SXMFA1ruczjqKjtaWEPjJfHJsLuAwYVkF8xUm6Ty2iG2jkVw3hiZHWYmziher",
  "key7": "27RnuXBjZUzhWdSiFCQGToNK5Cty1FZNSD8hUpkywkXdKMhR6akgDaavKUf8tc5mr4gGvPgya9BRyVpPhpTaAyh9",
  "key8": "26ztKoeVnpSxzfNhUta9ckvymBJzggh4LpULYRtgAvZDSqNTzThuePrMTD7x2Km9eNPCsTS3CA9cSRB67iqq1TeC",
  "key9": "2U6YeAFB3xchPnLcEF9Fi2MUrkg7QCqyouw3JDjwXkcRxMpce8U4zE4RiokU6BWf2LeDPjqK5te111xybRpPZqFF",
  "key10": "62KhgyXXJd8SBxu8WMiRgX2UPDFUTNzAYpMJEvyudtS7aSjJrTsCSSd96tKmMHFejkqSCkiSNfsDghHfqLXeGM7F",
  "key11": "3ZNfNTimWtfmBCXsr96dr9UXj3wpptokYCEfZ9d5N5HLsM9jhdHVHTPM9D14GxPvHargnqgSEYJSCcFn8AYC6qxF",
  "key12": "3rWahszcynAqrYMrXqVvPv5WMbu1HPH9oQKqaUdnHQ5B33XKnqGigRZ4yYTSbFSidnCXx4uPxphGDLP6xkfhi2kT",
  "key13": "5UG7EB4CViiSnWSZsCm5GzN93iWJNMoGbhMnrFMb3ezoviP1seozxdG2ftxVE7bDmGeqaRDkAoiTrB3d1V2dXhpa",
  "key14": "34HpMaSKC16Ak5RGy69ehZ5ZUepoEd6rDnStuVCBdcszaTD1jDcrzpKBaux7669squpUfAUUtD7hd2XahBxqQY5g",
  "key15": "4qLRpR4y5MQDR3MVSjyjSGwVcmiTMRZuQNZ3fJ437PyG7ChdfL3FpsAVzoxVPyfdZwsdPxEfiMHY47ZKVxkiL5zz",
  "key16": "Yhuf3TFFsTFm3P4b2dyNe5r7JGc7gJUMZsxP4ap6sRWakr4GwGzEvG3P3EsFovJtH8NfGstAUcxqiKW2VvFyE6h",
  "key17": "4bEuJA5na2Vd7A23VbvQeHreWm4ddAhvGasC4deQuZeqv7ZWvE1iEVs7z5jVES8yCRLX7pB8H2iZavTXRWxYTnqv",
  "key18": "2zwz49S4cK3t8LebsLhnEEiJUQcYah8y7CX9AspkCPSYq5Tv1ThPmZ99awBei3weKR9yHUJZ7AeZXgPKekoxUu2B",
  "key19": "3BGBmsbrSZDCbDUHFKy2Y82Brg9gNBSBMDLBuh51f2b41Q2kF4RNNQNsEfiUBJc1aqRnYApkY3cFQBuFoHo5xMU2",
  "key20": "QzgbbVaxaGujsDTobhnwCCiVQapbsLWo7B2Yv6wFHBpjjxoc2GS63EtyQ6jaBcK1QUwXYSbGbokcPnMafEnjWWL",
  "key21": "5aN9UW1aQnpkDFqJxsdUBs8GPAsE3TQ5JCq3FgSxxk3xuF45xjNk6SMpuANQdN5hsq3QRn9SAg6gBL5qRK4MDPoS",
  "key22": "5P3NGD17m1CimcneKGRsM8Mrud8o5j8pR4Mx2AGwu92KchnKuKTsQGahrM7vXv4iC3oM6CevT2bcdpiEHReQ6zpG",
  "key23": "awq8Ftf5TYooUcGG95BLWG4KWgGSqEMKxz3w33PAukfQFF4VYMfbj1zLgtaXaG1vGtjNfdCZ81TYVHXNqQV97xi",
  "key24": "3j22rsT4dbtEMeQg1TzNMMq8p3bDFPhi1Q82vxCyKFvLbTHFBNLNRAuBHybnHd5mJZbScCSg7FWuCuyEFxgP7oXj",
  "key25": "3Q2Nm5ztFwMnNeXYrqboaZSwHQfR7w5QuF9ccZuWeydvek27UJuLSbZMWzk1yewPD9rKwD74yEaR9eEkNRnpnYHq",
  "key26": "4fFgx7vPHzaPsnnNGuYFD4Bz3ch9qmeranushvYnjR4Bw33fdRNJwjPTRYmD8Q7Yhp9kfbXTsZS4cV1SFDpijeRe",
  "key27": "5RZk2A879CNQsiDvEp1cuBLteghuhy2PiUgWdQQtajDU61ukAZJTFQSMupMPZyf5657w8GAXXLa2pMgThc74fnzm",
  "key28": "5qugDNMAnk9kXhf42daSJUR1fgq5wBmLdSHPQZka836tVsB8fU7tidp1kSCPntHGQVF4SgK3hN5oT9Wj17MUjq1S",
  "key29": "4E5a6ohTpKwc9xW1bgRS5Q2BYA7JnE11pVmaYFnnzUoCyEcY3ejcbiTyQptNtn74dqCmsoJXw8ZCqgcGR6WbHooe",
  "key30": "4iKX5X9xYqgMXdFb9vFHiK4zJbA6ZdPGxCRPsM6BzMNBKvuNY47nPn59pB73ei9oy2XKiG9NVLjeS3SZ7mb8jvtz",
  "key31": "4uPiH67cukhX2rE1GbudPQqpdzbaHBKwSAaxQzbQ79v62MoPXNc7ZCQLSSjo8G7foJ3EWuvQbaXLKcoVcjxuMdvg",
  "key32": "3poS1RUzkvUp5wUo6CfHjWmKtcCfdXCDFiQBTNQmvrwcLG9Wpi1V7gMPq49zJPL5gpC7v8ZTi5Su1fet8GSXcREg",
  "key33": "3B9CxhR3Hc1R1pLjkQy9DabbkU86f9mHmL88upDL5oKieQ3zxY4S6rVxq7tZpLf9v42Msy28GBBnFS62WEgYG2Ag",
  "key34": "2YCKQErkmdvAdmHkFYzSHNPLojNWHivNvauU5tA6CdvPEeGRuBT3KGQKQqm29g8ftJNGrEU9DiGLc2fbq4MnGpGG",
  "key35": "4LMpmC1jYZysyCBReXJNtEPKakyqPRaic2H9mVbSArJCWobrXTxCK1U8Uaw3maVcCt3Mxcb7RUJLXozy4PiNHTGd",
  "key36": "5cFxCh9WuicUjfSEhiDXxZLTNHSZnCefNEyYKU61QQMjkZ8od7282eKiujQmSJSAU2tHfwA7eXcwZGM3WxrdgKCi",
  "key37": "2aSrU4TRDLKNxvTT3ArNCtUBMfguqua7d87rqMpRgBbFLCH6P1hdkzMCEuxFwGJfbnSMB81kbd5RAvhaBaFBWYWS",
  "key38": "4r2gReFtLJKVRYKyaev7M3xu6nHz16GA3bK5SacVArmXktqyRz7mUdp2gwLZFg3ptpn5LUadfShqUoU5N4FWup85",
  "key39": "5WhjHwYYaghB5wAsbqDBwDDeprnsnVvguoEDm5BJAdjULVJd3U717B4AtiwMGDFdj148HjRvKqumwE6esSUvBezh"
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
