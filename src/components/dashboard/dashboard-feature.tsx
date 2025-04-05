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
    "4z4diXzttwPxVKqyz3C6ms9kTVg6uDNJpErq3pxWeBnkHDrpaNtGB93vTGVAhedss2byP2UzvwYtkGuHnKRXrHG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XArBbDxLm3PiZbk9DKGtTUeQGA4ypaHw9wCDp1ijqzPfvh3cbW58VvhLpP37Y15v5a8aay2Wsd4EpxbBUujyZZp",
  "key1": "KQBzq9cgw1GphCBWzFVKqEizjvxZ41wP6jyPWv1fyW7AszBXsuUCux1VLhK3VEKgMQkwmZdXkA9NmoCvNnHy5Cj",
  "key2": "35qd5SqdtRCVMsZJWci3cqs9NPYom6nR8vD3vXeS2mRbH8aeko3cUzvgDKQrvkyyYsShXxu7iYq9a9ZCuUrCUZGx",
  "key3": "46tUMfwV3EFUNn6AjFFiECVmqTmXFYAhooYGPj2s9g4z7wRwvm8hM8xnvJc9uBARVuCDcSZj3uCbhgrgaXbLfazK",
  "key4": "5ogqRVhDm36yRVCGTMnwquRhPsX2gtYNqpAb7bjunDfQ6ogUCnbyPdtP6qQ4UgmwTeqzzAQpUDx3b6PmivEfNnTv",
  "key5": "5C6mV7ATzfJ5uXvqT31DT3oBPVcgF6sFBq1NvwNy2nEcPApuePoHEbBRjd55FNMxn7D7WUo8JMxtKCKfprauXZ6E",
  "key6": "t7FjsfmvYkunxdVHsAnzKwrSA7SY7TD3ttexKsuwyHZa2fLkSQ5sKAUe9TzawjXL7jMnX6FdcUjga2oB8FQnUBA",
  "key7": "5HGxzTDCbLhwNPAd693CTzzDtsFMG4N5iZ6H7o9Ks43TfUrZZu84BRZkUsP6u4S6Sedo8ugZD1A2Yegvs4fmkSuX",
  "key8": "5LaGtCgw6qoQogqPgJqH3nWgx6khZdiNsNGvcecKJmBzRx9Vhz8jHsKu3fgaKxSSmb2rrNMiF2aTUynz4AUdEWPm",
  "key9": "4bLULBwmbeXpdKQShmth4bMt4CEPnHNnhDQBjBUMyAL65PNRpdhsHYLR7SSEMxU7AcrgG5UhxCwBLbJac94PU5MY",
  "key10": "5hvfAMZhWsVzSQkQj1VuFdiZwU5g29ANRn7XjvrnTc5eWWnDk2zZ7mm4ttzExaSbQyoWLYSMTAzZZRfY58E3WzZY",
  "key11": "3H2gGdZj9LtQWp4VqdzMAN4ZzcHXrYm1VuiFCfvDEnWrH3T1mDg25wuANykige1bXq4zFZHBUucxWgS8rJFtFKp9",
  "key12": "5Fq38yCXmX4cGBfgnRv5zD4fErdUzSaGKdPWwgGaTU9jrFzBGzoSyuiUbucpvUUXip87zz9GduoRsdm2NGeBjf4r",
  "key13": "3xFeUms15CjAVUPCHsthfr6tXifzQEfx4cWi4JtRPUPTuHuChcUAbaq7hmg5bKHaaLhj5ZaB4npnV6dKwQ26Mb8d",
  "key14": "3H2AKDjmRYRViBzSjDXwVgzgwHAYBt7Pp7Szf6W4yGzL8oar4LdjFxX2QDqhSBhsLeJcrTsHm8e9dLxe3ZKEwcXU",
  "key15": "2eZBTPZdNpE2VSh2cA62du24h5d3eAmJFyTmMnCfb2fx4JCn4qNcbVaB7CVPLwHrW31Z8cyDFsAHR752Hmh32ZXY",
  "key16": "25FCUkaV6wZHsCPEfqgGCypHyh74USc6AcH32P21LeWjqKoC4kHq9DUa72nvsVep6BpnenrD7T9pQFdGfRiZNXE8",
  "key17": "2uC2N3VFxqXLoksA2saSLy2EjwL1paGqNpBBMmFo8vr29bJPTryjw1YeMimBJykEKQWHhU6uzsnsNW4E72AkJnzk",
  "key18": "REYzcSiTsh7SuTUE4evPz2JUaGQM69GeRGX7cH3BmmeLj17RKqGsxQH6FGkg2zWzawPyNznmuTcc15tyUnEkUbL",
  "key19": "5pGz6SUDjWLVifZnfoP6anu7v7bGVceQKc8adSFQ95v4MoFPfTjN6R4A9T4Pk3VfGi8Quv4JWURZz8na1GXynj4n",
  "key20": "KPMt9BDDQNhBCsjdcBF3NGh46PemoGDBkg6atMKmVSj5GZfngh23ixDttEiJv3ir9Gc9eQhAVW4r4pFGu7xCj76",
  "key21": "4L7GbodsTicdiuz6b8vtiXzgfiz4GUUfxJRgwS4jf6SR7Hv1xQ591yL2H6LWDD7GqUaePQDedHLg9MbjvGZfRGzA",
  "key22": "21Sazz4KsVhroaLEJxDxPSDt3umTKtL8bV6TcAWBUZtjjJtXtwSLYzaSyQV9jibdQ5V8DaQErMKBgFzQrVhnR4nQ",
  "key23": "2WYArywdDjPGQQm7qCzGXJqmaTQjai9pADE7oh9rR57fHuei6QcTABQ9kb8ktEbRXoi7tEGD7ojrbwZoc8LbDMu2",
  "key24": "3hW7nbRD9Sp8pBQK83Z2ivwQBKiS5GMhJHmXr1REjjj9Fwy5m2QZUTNuiY5xH3tVejBhBZJBHjFMHWi6ksQRLP76",
  "key25": "653wyPuKxwagTRF7bN4QEE3bMxCtmy5awgRsv3W4WfH94Mk5ZraAEK8YTZ9zzabXCPJbnmKRn5zQ2PF78M8d4VLq",
  "key26": "Ek1Pa7WqRxYV7RUGQkeazdtu3SJVMzUdVb7DPdVoYsDLHsPhJ5FAeyMgkrR8KRiiakV3uZ6CLXXKxrU71DENpGS",
  "key27": "2SRfAQeAA63Whr2dqjfirdsW8r8Sf6w25Qu7B5DeAw41mwhnjHp8xrFQpQCw42FgbPGVSNCDXAqsd6iE4otNvY12",
  "key28": "24fG91YcrRfvZ1XTcRuhJVeqzinwFmtKhDFuGHCwTcrqD6ZC9YA3k1PV16L8Fr6Fp3NzWE89fcxLPcj3htJR5Rpn",
  "key29": "5HmsNED7w4DVui7taTecB8oDX54XxCYajZg9iNi5NL4j2Rd8uxfrNMCni7BsYFSfaEfhBucThYN84eQJSR61YbGA",
  "key30": "3mknbVACiqDmKXaQY4JawSffNDdeGWtQg2NCvcadtSWSbZ5gShGg3knDo23bQMeRMS4NSzikx76JNKfoGXfST2Uq",
  "key31": "5uBaQfLRSJLahFDSBxqh4LixpW8gfwUWkmt2hMv78gH5u6NxwiWf3zwGXhHx22XG96VRBkDXJxY2PE4NbbQut1CZ",
  "key32": "5fcUB5Yb6iFKYeaRNu8UAmei3Tb5Ji6evPsE36XBAT1dVgUcMFy8tUyydeuZXR3Hh7otXpj3RvdoxY4ep4XfWBbf",
  "key33": "3fH3S9EtepJa3sxaFBZ7HN21Hw5RLByy2u2yy5g9hm33VQBjxkPHhQDVUgzKYtAn1MCA1Uwe3PRhsT1hxkvQdeu7",
  "key34": "2XpkhtVyEoVU2SVKnCqND1YZqs9B44GsYvMFeQf6nAFfL9e3b3duYd84fHjynzbUsxcAff8zxuoJxqGQeocfQCgb",
  "key35": "31XAq3RjZALmVix4zSpu7ZrJ1ff3Aa1e819udFKHDFoJRAWj2eELBn8ZRCvgZsiv2hi9zxnE7YbKUot7BEzogcKX",
  "key36": "qD46NPBHf14dwfuzW8J1dcv1DFtmqjRNw1r8SwRct2Uiae6gRWbycjUa7uRa8j4EqTfDrVSd8FSUGbfA1odmmxm",
  "key37": "2WsuzTKQjAZtsjp3fKLKfazer5uh5ZgXEgGo182ofB4mi85xb1Pf6VhWnzhV41rHa3zfj5rctubmWzxJbEeuZNC4",
  "key38": "zpjdCJaXPhNsg2CPEDRMBcstWPHrig4HDD5vovhUaD5FCNSYMAdWM3ers5LaKeKDH9j2jZRq5WaWmKVwPEh9YvM",
  "key39": "41ogm99UDhT6rfAmmS2i1s3FTXiom7bZNVGqn67zRcfPPogDKVZN22zcJ5tdre7htur4VRqyHNkLgntgwfrYgFXU",
  "key40": "5UcXNsE7NPw3RrspjLME9272BBLvNikXyZrK3KXGR5MZRq1xkvLFW7WTM9C1RXTMYCvobiaxzbehUzB73v3Neziv"
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
