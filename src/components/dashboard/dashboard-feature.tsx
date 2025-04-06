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
    "326Xpjw2fM7vzCPt8vCNDuBXwuMF2kpegaZMK2NUor2zkEpUx2TXk7nFu6VFEMUPxxh5iFr7HP5eRRdQxKsHUvup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njJiaMJ87yK45WkNDBkUkw4VeXcLyqVDcrcwCGTNcmXM6h27ajr4nemPc8jRvGk5jMiuZuTVLCxP9vEcMye48ge",
  "key1": "4wm7aiavv2GrAg79thoG9XigGtBVp3NGVZFX2k24qQveQEQ7WA3FB7HhaZemcPGUzZCQoAvdgCznvSW6axZeR3Pj",
  "key2": "4zAiUZt3Bj63b1jE9NB4bhr8vP7NokzSPnuZTTG4cDv8C19vQHraFi7Rhx7MhPQh88UH73X7K39JU2XecgvbRMV5",
  "key3": "2EYNsQ98ZPixLbRfDzqNEd6C1kiktcyiV1UhAMdxxh5qZDv7Lb7mhzdLH7DcmwPfrYNxHmpSw8yE97sKN2E77uk9",
  "key4": "5wUTKZc1xMkZtrssXGQQDYkhxE5JdsjqhH2bEkcAQu2uqG4oeNmtRqscLCrDTyETJVbME1BYQLcLVifKKScEYRiu",
  "key5": "3neLnYFUacXh2rtmFe9nMuphqPuFmeJF84XRA3aWFgEADHLxUC3F4pWrk3BYmUXi7fPutnHhEMG2Jh5BKsUEeafL",
  "key6": "5Hzj8HFQXgufBgXk9qD4ac8fZMyE6VeY3SFZFLzRTFpUrzxHcYDfRWMzxQFjMQeNwvUykFvzV1suxYGHzpi3btEX",
  "key7": "5s2epFxj1BBDSpwmHEx5qZWnG6fXFVQ4MW8R3f7iTYQz6Cn2K14oWtZ8CP98nMz5DLojegDpPb1amfa16dE1QpTe",
  "key8": "3HhzFDAGeCB9mybPuaDyRGXCw8NMvWK7Y8pLRFVWhSQ4VaEpoC2NVaSFYjM6Hjr3Meygx1Nwpdo6dmrf38nJWP5G",
  "key9": "59K3fAvtoai3Z3ncpenw9n7nnBJdBqScdYJcdWj998MGQBTiyhf2FBn9hQD1buCtsth17nCF3zSUsjXdsWXkH5m7",
  "key10": "5yfVVGW5dM7BWtFmGvfL4JADJt9Beo1AzdyhWEdhhKan411xg1Ks7u9jvhJta3xuwLxbqv3mTNknc338tSzmbNKy",
  "key11": "2q6BHiwSfR7UYy4uWM7ffSQNtuVu5MFrGaZhZhf1636Zo9N9dkLLgDqhq4DC1BhPaNiStd6Aj3C3HL1K3mXyMCPP",
  "key12": "58Hu8Bz81CNaRVNmZx493FYXZiP2SdPDKPLYJ1dxjBoziUsYbvM2K1sG8ccmn8eVuF1mPQ5iLHoJGC9vYg3JArnV",
  "key13": "142tQJGHsiwd8RVTFt1ihDK43fuvqx5otL5jRtxVAQPQrsB9XLTRjvLWfapmMTRtqbCthmroe3Z2dgR5ivqfbYv",
  "key14": "617dmxJ6yqBugwYjG6a1MFmh2FDFgzUaDXEsAHjHCgTSeKXz5LTXFGXnaCGe4brZDr7nmv6981VjAvLw1QXo2gwX",
  "key15": "2Trdndyu1zTWPQNgTnePHLJrEUC9Rqy6oSxANXX81RqLoUmHsYzkWccq35ZRdS1RPcdEtMgDBsiFmDzsfBJX7YfX",
  "key16": "3SkC32DLSJ6c5pC7s9qYi934SbdBhwmu1CvLK21qx9n9gqnSUnZfF44Cv9aDMzUjYnCQFUuKJPPXjvxjhYB93VGA",
  "key17": "4gdVb11nGztuDsByYEbpCZz395jjRs33m3UsQYaM8gVh746ix1qZYndrmkBCfjoQnKCn6ZeNkuS31pEeYh2U3b8d",
  "key18": "42rMmKRiGMV5D4YGLq2rf7WkBNecfCunRMZeWYWFXPHwh1rhvAgYLbDwDqdoUEA58CGLWca6fMHJ1pHGLRNrr1X3",
  "key19": "3xAD8m1qKY6jukGLbnU4mUU2fJ8hjdGLeo5X1G1acqoQreKFR6ppasWFGhU1KmepnGCDKfupFGDW49dWX26REWnQ",
  "key20": "22bQQPiWBYDRii5yaneWmEYp5pTEfkfYnrJWjhYvZGQXZaMCrfAVYga3bYiVr1zFyV7v2UeaZkMj3kTTS2TDLFjg",
  "key21": "36pNhqwCFiRof4mGJsatzkYvBHUmGRx6ZdLSiBhPjqiR4M3BKAo7yxG8e6uLWWWDu25LjqcNKPC6t8TbKQpNHJqw",
  "key22": "26H4JZS2bgnZudL47TxRf7zAnRPYrH5KRXsHEdMMm8FHdpdcyVCbjF16agSZTE5VFmYYUaPbZVmTjbSMkZWCfZom",
  "key23": "33SxMD4kbWJbgtwzYwTD7VVxyBrmhDL8764EmWmKM7q7ntcbDxpZc5XZYne4U8oPDX3F5AgE1EDjxAEoghitxiqt",
  "key24": "vfDmvw1A2wYU9e99FxQHfVco3toiBkph89JtnRG1nLYXZKQR1THuAjYhdjN84AkfmWm5i6RpXpZLDgt9LB1m7ya",
  "key25": "oC6btgZaX89vCTfFLG1X2su4iEjrUZSU4gnvaS5riwNZZCscg1XLRYRHYDPve6QD3ED8RgTCNpSY81vR1CgBtra",
  "key26": "2reaw8VK1A1kKP4Fn1YFiMpDbMRgK2DJHiJpsnaCtr6DQFnkQE4hN2t4Mt95wBJJkav8omjhxNwtSrST7bQvepGV",
  "key27": "56K2youHYs4nRjK3LMYL3ePT155BQDFPD1DL7U8i3MViekEHGbh9P3yCBrC4j1MJyVkoSc2DQkjN6Dx4ZHAbeoyd",
  "key28": "2swMRm6w3QaQRia3gjbHhcui13JiWU4WqwcG7rXxvxKY75kyX9kTb11prvRKQp7kopdMXrrMWwEzfQhoRwWCXoCv",
  "key29": "21pSETA8deyFXLgePq2gpbpxwHEsBKaSecXX5DorSBa8pwMPb6dUr4zofJjcu5nycLSbyyLsKSexx2SBHUxAU8RP",
  "key30": "5QiwMZDRnwedqcEF87MYqU62wnchbzaeq3v2gyPPwTfTuMHij4njmeVfQXmV4LeoQCWh7a8sW6MCQP7fwF3VsYhM",
  "key31": "5mqMvNomutuvoaniVSzB1hHBevSG8CB9rcsvx7KYPb3rGjs1QmdQMbCKpoNbEYGJQKWsSXcBb5bg7qFQsEK5MKPp",
  "key32": "3rXrR3o4eksJRCJmdnxcejwKKekHg4nYdXZJKbUpdD3gHKg9pVCEALAJrx2coZ7rhpnkwcGreDxV2pHZfhHXgLfL",
  "key33": "66xSv7FYSZ7pEzic3jyrDs53ReZv42F2at3hotv9WKNoj8FB8SmG6v2vkN8CGtE7w8U81znbskggQdxBhKux9pBK",
  "key34": "3KbPrZBMPBXmJ3Zd49EU7mR1AJLnRpDi75F3vRPa6yB16jhhFALLWe8VTTxi5gAHNAr56Q2mMZwuHkhXLwErP61j",
  "key35": "4EZNryfHJTL9i7Bcb8GviUEVdHtMuonPNzXCuHNVa7qGLvFJmr5wR7sZrub6sLprTD3TAYmxdYFeXtT78Zt6P8DH",
  "key36": "4sisdeaKd9EhVpi8TjXNaBET3X2CrpRZxtks9hU84XM22W6dj2ZfWYFoCgRkhBWAfGcRF8LqTmxWCY96MF9xLYE5",
  "key37": "2wLZPvq7wgeopCRyRDm8bcxW87R1k3gtB8MU9pUdK8ypp6MQJKY3GGT3pz1kAURmADtZA8Re8BFEJ9X8PbSVFYvK",
  "key38": "3TKvyABYusrCtGHPgQwzS3ERmgWAnyWDT3xV4iqGmaHEW5NrVZETJyESRsjviBpTcjVg6t6gPAbyvPLMgQnQJUVg",
  "key39": "KpccVevGXWpreR5rW6Ee3mrKrUsKh1cmkwFFjeVisiZeAfsGAsE4CrMP1B5dkb5XV4fqRKr7WfTae2QFwGQBWxQ"
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
