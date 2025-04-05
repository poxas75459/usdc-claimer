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
    "2LZG1VC5zGEf48NSpMTCJso7zNfFaCjp8uA2uAeThFc3xVwnhXUPSSCcBWr3145CTUXaTusGawF4jgN3979LfHdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9kDDWDCZXdjdx8jfP5zg6BHJV87rCKHS9hzf3LTKQzEfmnr25AGa4MMKhYPQMfo9moajQTnYjmrBgBekTWAgvF",
  "key1": "4de9HAjrcYRsEooJA7MtoJU88s6bbi36T6UxXmP3kedyQtVGm7dYQvTVK8LRMdt6fFWCTG6kjsvUsMqZHD9x7dwf",
  "key2": "RLRLza12uJnUTqduzM2hKwcXtG2oKbTqvjGHU7WEwqgE1eCHVrKcjtv94kcLwsDXEmh2KvjKfbHPMVM68oJ8rLy",
  "key3": "2Pe92iCTYWjskuHEkfFTKfTF1wm5bQd7oGMnmTPe1JH9fBKP5SUTt21Cvikb2HkS2pbsdWsuuwhHPC4XHJhEjwoN",
  "key4": "4prWB4xBU9Nizdwnz6UXiS7qz4aykHSP18wMzEWtjegmvH5m9bKaT8r4rinfMGUDbgx1WgndWmHCtJDPc9KQWMx5",
  "key5": "1yMJwpEb8iuT9hLfn2fYa8DhrghPtxLRuWv1xHNt9NspKM1Efcbv5MA1p4oLbx9f7NMDKvUAzhBtaMTyKUqP3v3",
  "key6": "4QC8CmwuFFxZSvpLvUxs632K4K6sJ8TU24RWRKrmYm9Q74NjWhQ17CB1QrbcgzEnV8RM4ACNNLCV5SAMxvqjSJjd",
  "key7": "458u5Tch6Ar5JReHAfk4PcdFdxTzgsECHCV32y6vjJsXgxMSzu4Px189pGrrrv9gHdpxpgCLkfXMQogGSPcYbFX7",
  "key8": "5TJX69vXkJMw1C987JNS8RENArLyPth7xgSxi4LWpTVtr6jkUpnvrJzWArB7pJihtzGm1K2M7SM6naAG7o5zM7oo",
  "key9": "2w7mVr4QxM3sxXpC1f5RDfZ2gynUiyFnwDQFrUV7Xn7a3Se6Mo189VkzWHGUpc3m5cTnCdCQwZETjMBNbrL5Rwok",
  "key10": "KCidRxJM82Vwy6NJEA96pmZuZmuBEBC9XpQkuonKYy4on9Fibae4zVkCMj5Tr25ynJa9GPfRj71eYUjs3pxDSFQ",
  "key11": "2Q3QP6ZHoHoJ8AwDHNrhBhjJ653RdwtQ9M3XkqxRZ6aLdy6kgBXieqm52bVvnDcTRnUwfCGWAtosM67qwUbGv4nm",
  "key12": "2kKxjzgKZS86o7cAd3d8RCJgWPX1gHHCxSnRheYZcRuf4FqamP3yVJfrJunEraB45amNYemB7hPveqZ2kDJ9QEkv",
  "key13": "2FFaz8phoNYrhppqmW9QqTzyoyGcoNuASHWE8sbyVwA368e15UAon1hRzharemBpjqVU4RryKKQZDiGahfRCn1Hi",
  "key14": "9XHRGm79zcnHDiPy6YecoqQ6k5UqpPRP1L97FDqCxKPDVsZAPK6ETKpQdbAaCTm6wBT26GTCZ1Km1v6ZPauDHgh",
  "key15": "5F8ZdHYCVN5q4Kaacb6jW5wyq6fKkeX9uX3RNnVgStxiXoVX1RktxDF8q5ATbUvidc3QdpTJ7WhVu4kwE4FFJJxh",
  "key16": "3kT4Zdi9xdKdRUxWLNkgLtsYRQpu9DoSmvNCZSZdj22UyugT9HK14k9vVixCyDiUQo8snBGGscSnQPPwd4WRP7ad",
  "key17": "4HinUtZJAEmnsKRo5q1RNanCTow8DbgLEEsdgr6MRkcCBo2DR8jPCK5hPi6ePxf8mhgvQA7hqd9HhP5HYDKzNbo1",
  "key18": "2LjqoEUctfM8tk3VHUkDqyr6Yx5sDDwpXTrseiXSsLRnDghd5kn7zvUCvsbS57fpdFNQVZZnk5UTanpp2XoMWaHu",
  "key19": "3qTskZoiLriYqHiy1TScCGyfi4ds98MnwBmZbrrFSAV2smxFYUC1p1yArcV658Aq1VXVugM3V323CxkakmPPUB8P",
  "key20": "4i57ePFeGQLixxKYe7rAkCiJsBe8uzVQeESdFPQAkf4yXDB7w3FyxQWRU4mrCjXkSRyb7MTHnpbLYDPC24MGf5jJ",
  "key21": "64uNFejMhpTQzp7sEwuamKpAbRj3WHgZ3sxGDPuTvbixVxojxowhbsUBsVUFzXv7BB9HHj1w1CMJwb3c9PbLDyGR",
  "key22": "2yrzLeLYNZ4iotVgSSntc2ZpuaBJauAdXibu7LaUkMjSCbbMfSXKNAweWMUEHMWbUfUZL92T8SRCpjXpXmLmW61g",
  "key23": "5S1K1tHb1xSeYEWCRpWeCLRAYR3FrJdxYgw1dpaDdqqH5jwF5h2vta6Y2UShvrbFPjGsEW9u2VhzU22KsLtFWvev",
  "key24": "4wzZRAQNY1DR6B3JJ6uwVW2EdqQKrVE6jWDjV5KXiKfv12uqr7GShhzcycqTtSRCMV3dhLMvWDdG7fxj1xu8g7Ju",
  "key25": "4bkbE9TxWNikFwZi1JDEd5uxayoFCDu3EXnQNqsAFttecfhexz2tdwEX37gXY4EVQxtLdo7R7Swepf1MM7oJehzH",
  "key26": "hhsTc7fKtFG7HXXNzA8Tu8RaqnmT3i96E8o5SGoRmqrcuS8ZzPy23Nm1rWa7e79cGEPtfisMuPEbxWNn4rRJ7yQ",
  "key27": "59UBnG7Lma3A9GaamJSPhEstLgRiDJGZ7WFAER5Ljid6GLxvdAE7KhvYjGBftwyFFotdk1XKejQciJXGQydU7ULf",
  "key28": "gvZqRr2aBh1kbPcWNA4cDfJ1soFpviBxEVEQPGmZmascbLaYS9V3WHUJ5mFqkcCQuAvxLsniFCVzt5SdqUAuV3T",
  "key29": "5kg4wuyEZNqCgTy15cpHTm1xNdneJPWJ1VqGby2ijPTZvA86pbBJweW56FwNEWZAmkg6mCWMzWsd2MUATSavpWcR",
  "key30": "5A8x1PSJpFEDStnKaki1PxYKPefNX8PCpYUcWTuDcY6G2ghN8djrNYwyVa5Qyn37j1jQao3jtsYqHa7znLmczmGf",
  "key31": "v7zsunkxHWaAArSdySWsdMs7yux7kTcii1ctQirrjcj7F1Dz4wYndhMAjZ6meu2CkMMjnJDkQ7ozJ8vhjNifAt3",
  "key32": "5FQUot8gdkVwJzARvjUBq6KmqTdNmeTkJZqkqxhsFv5aXoNihVbjQmPQWqFtTjYEKPDBEAFPMNYWn89EaqF4DTZW",
  "key33": "5jnudcvYL6SC4bumwYkJJLdTU21csrdhbhpjiS1S7GiDYCPZ3gsETdSbbdMcVyQn9hmgaU8XkU1GpX4UXDKRdDTJ",
  "key34": "3SB72XD52Hazk319wzhcdvP8YPR3RxwbMymzagYA1YWZXwNHrBSSiXaBFJQGxoQ8NwqBUGP1acx2J2swaJvuXm7m",
  "key35": "3KVjy8eCxuY7RyvhZyaZ2yziSfhXwq5MqLrevpuramxkhxTm9CsnJkKJupDWHycouh2FgpvtX78ZosAN52thf86f",
  "key36": "Z9XJeMagfsLWLN6Umeumgvk9NVR9c6hEPsLRrfcfTqN8wEaxgY1y6a6ytaPekWFPw1j3LNfpTRpMtiiUJDM3gWx",
  "key37": "4Yyb7VsbhaNUAgaJU82cJNTjXgdh3Psm5ZLRmDYRzFLHJW6RmwYm3WZFpN3GHjq6mxwgvfnumadozyKMiaLddMEF",
  "key38": "QfmUA59pkzJxaNR2jC4pmBSj8NRHDtDQog9UEsv65wpSuvDXfKLuAw7GeFroLWRNhgM9VdU8EX6NJHY4A62uR7a",
  "key39": "2Gt3BssyvZrCrNm3BGZ1ttRbUvicMJVeEtdynmUjJY1VEavDZ7ygWSg4BknXUfeyuqNJGaJ7CryGfDtaDz9mBJUt",
  "key40": "4eyNSVpkomWzj5g2zXjF46GsTiFkHT5cEXXhR74LN7HokbBu3kMzY8TcWtJzbG7MdqvD8CFK2mTMRLXdHbxWB6sg",
  "key41": "4VRqPGNk5kpgXudND1EoPKUWnYiP2b5myQSMPUMSCTH9BUZwyK4nKQgTtSAigHCUBiFLSr2ujiRPHcbxTiqE3Vhy",
  "key42": "2eVdc2DKcqzGX5pVAZBfnWM6Xg6dHmxpCP68p8nLiGnQYcYCKTRbmWv1shz76by5CFQD5cFq81CvhVL6s5AkDxM",
  "key43": "5HjAhcPm86EKob3qng8se8b2FD93qed6XwS3dUz7rdr5445joa95g4n4VQuC1mck3oAPxsTDZARe9VDju2YGR9Vx",
  "key44": "4RFnnHbeY2gYMnSRX8BgptMSTFZiTN6DnrCQ6nxbUaoiS1UyXVZoVWvAQZdAALav5SdZiP4xNqiBgK5We3cM8uJn",
  "key45": "5JD9Nu8ErFDYAFwuC3K9v7XoYf5DHB6ixWy256SJfTJ34bLMvt2fnqtTPBXe6LbdqAEBpyPbM1b5XxJkyFWFtxUA",
  "key46": "39Zx6zrUXwBZDAdmsnJdmofffPBZYNM2bKNcVKcYTuHHm9Ko5zgtfbPJLmhwkGszXPgBLJhGPDLJh5WPn5omUvak",
  "key47": "4fVgL441wRceXCoDxyxCGv1sBShSJKWzc5jFVekifd6pRgbgUVW9FZ3rqBvd89n7uX8uyAHj9uySy35t6oxxhoBd",
  "key48": "3Jz26Hi1iewhaPYzpj5ZydaC9KpBGXmyqkf6n2ds9W9k84FeJbuAoLwbTchDVqh3dD75zq76U1Ve3kKWsAtNBj5f",
  "key49": "2yxu2rG4tUyX64XA2cG4dEoeMWoDdqWMASwmAPbbs2aCiuQjnLmE8BeaJgqESk8mgzNwqFcFH2YjxQsZpJHiB7s1"
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
