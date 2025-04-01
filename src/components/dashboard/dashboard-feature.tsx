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
    "65RQ3JsaYwucQ1L9kirtYG1i9PEyjPkjpjNMMDtroEYUkmJwi9VN7SUyhqYMGRWbygZfjUMtigEpyTTXatcXbbwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrzgvGh27yQhPQdjNE3yvkJanbuL9Yq6d4AQvmNv8Pud2VW6xK6hkpP4ezNzJDq3iXbXsnHbWUhpWLX14v5BHu8",
  "key1": "1x47huiH6a9SmA1qaPQyT68z3HDv8iWnQcgwMTZVuoSTig6ZDPcu5zC8t53dBFb37cGFFU1rf8GjF4PeafSG3wL",
  "key2": "Txzszd5hAkqP3DyUQAddcor2h7CHS7r7277q4g37VR84kkVDqdzjsnzpbewr4n9nxSvPDzbsuue2EL8DUrrByws",
  "key3": "2LCDtwoFfnPbhs72gnj1kGjYaE9SgcUzvVUhxL1iGUpTMh6g6AuPeAPqxYE648MdYzSjiP9SmTCpPsVAorX426tr",
  "key4": "3vifh2cgRcAhBVZL1i2v9ej3jmT88qEVxEgQRFbw1ro2fCNWeKdtgnFDhu7RBMyEcFqBVSN21aPtBzeW9LCY3rvf",
  "key5": "3AvkHE48jd8Tw4RpS2WWUwqqvSQPNVWT7jx7CkfKpaxpQ5ZdhdwsGyM8TuKzgKCS5huiWGy7ZLtwztcUFCg2r3MT",
  "key6": "2yhWaXvAuyuTjoou8x8wzr9tSQ7S6suNCGU88tfwLZy54DrZKk5ENT3J71x5xv5oymfVmNsp9fi7omyB6nXygU8u",
  "key7": "2dA4YJrWELSvqPPQmG7ViBEXmgCqCQ1kXnTiPaVq2CifyPtwztAnXiWJNbGwu7dJGHBhVYkjmYhGWZXyxnvpfP8Z",
  "key8": "4gmzAKkzw39o8iGMzzj8S7deCLsCxzLXXLL6DEuMciNN6qtsLWE9Gtn7SUtG1bTpixCX9b1XSwLHVe6KhzShSybv",
  "key9": "RE7DgkfgaDogjsURnNHFiig4Hje9V68xbq4KnCSWyCoHNeEwNC7hVU61WUpLc47vr12Ck16n1Mah9BHGFP8ZqV4",
  "key10": "gYHyUqM42G2aDHBH6SMQCnWeTq5EizGPntBGXyNFCV62EPsxLi1TtKQYgohrqNv1iWE8SY98scRZCdaXLE4Bveo",
  "key11": "43U5eDKPFwvzmt7EN3GYh3ZDSBaHPeYZcZVr2ESBdi45dsiH3TdvCE1urg4yp6NGiJPywoM6D3WnreiHdBCvV7we",
  "key12": "3BAC5BKHe8gKEAWYcmNkUNBUnK1cVxsVeKGKN7yqurLwEAHsr2iHRZacex9kTn3VNDzWeYZdR4XPezTW1KJxovgJ",
  "key13": "4TXEMtczbgm8oDNJmpJFYFYjgkWYSfGCwaHyeFqSC43rrgHwK3vVC1xM1H5pND1yt1dtxkUtaXCGMfYRqpJpssTL",
  "key14": "5CDU2v4TRf8ZHriB5M6vzpnY5NGpLfMhUPeWpjNfE5J27GVstiU337kC978S242qjUfkHMbm36du1uhBvewbNZ4J",
  "key15": "3LrPXDw8sYHbmrvajCvw9ifcoYxnfCMR1GLYTfiCj6a43B2ZSRLDHLgQQT8LpjeSmfu5iYo4pdJbfmYsc3MAqHJU",
  "key16": "5fNLynPobZNgvF6Foux9w7rcrvDfB9BxJ2UBnySKaNfk8mMHxrHdLHDoVbzyHByU2p9oQq6KbYFRYfRnvV2sHA88",
  "key17": "2kTJPE1VTAEgwvqeXHA6TyQ4sxVWeunyUVjfphE7pmLigzSw6tPFiGPSRgZvyx7sUZ6PjZh7uc8HRBnJqeq59oEr",
  "key18": "5HrDtMiwQsVCgYUsHG2G6dvCX8PqVprsQ3BdjRxmA38V95YpE7LdD4hy5S3z9msLodHUHFfoJ7HsLaUCh53vkfrY",
  "key19": "3peWR6eZp1kQdgyjwD5qrvWFrY9sCUtoRcCWp7fEtGGMiJZRt1rR3staMY3NkTbfFMXoUExZCwXBNPwUKNmxpV1r",
  "key20": "2eobUbMmxjDCLaMrWUn9w9fodJG53Rbz41NvC21ZfMLc1pQGWiBeySifsGicRvfpGNkLz2TDtp1xKAEvFDfjBwS1",
  "key21": "5K73LpGBUhuzx71fKDLM4HxEeWeWNV68MgfhkZciHC5Z4kw9y1sJh3qHZuvnumRp5g6SmyPoLHpwQmRmY2PkMYpR",
  "key22": "4UuiQownMdHa89rcSMAysBdNVDG7i9hTxLZbZUrnfZ32VyZFZCJneqQw1nXNSqXHn8j3pSZTvswwTDcWm9hHj5eC",
  "key23": "35vnRrwCSPTp7HbYV3z5rpC8xK1A7YU2JC7riJ4XCwWAmwQsE9WFha9uGuxS2RsvJd4aJSvgaxnrRj19PBEFFJjx",
  "key24": "63qNnPSWgQyRZ7d5t74uQpFQoKhV7bfnvwTNNxFuYggDReQ7QqMZcRW1E9ZMZUBubfJFEdTn5eZMkkm6yjg5q291",
  "key25": "5hmY11fjXtWCALwhR6WQ2QESAvYtoC3kvrkuhTCRPuZyQ8GGu4ejP15Hh4bURSEV1TuEsXFyPTrBmSgYsXHbUEMp",
  "key26": "3iCF2xUSGgzYjWMQdysc3MWuUz2yeSoHGmeVLFLVDaafVqyZepqeijGKZ9RSQA3HWh4ECcpFpdbprvaJnTmEQ96C",
  "key27": "2fSyGHhTBHAK3HFDWDw3r52yLjFh7MBTJnD92qeJwRseSrSRKH56dfcstLc7ph6fyMiFbUzPmuzmWo7N4wDMju1g",
  "key28": "56BwPTnYstNBBoZeAW4cr6YkEPtWG6ehXWpQPxqz7GgQigvDhUt9WV3WaSfBogtJyasnaxKpoUoJDuAJfh6PDHJA",
  "key29": "3LBCnczHTEHB1qMoohuN7JYVKhchqrDFczAD5RiQJajWSxRvqCTRKhwk5gacGBwpDii38G8BC1ngyhnaK7Ppcf6s",
  "key30": "54RhzdzCqxjvGuNBuHacbHbyUSMkfM4h9E1DCFsvshddycxWexUyJq4AJcvAyMzGibsfoy7Qnxnfx6xdtWQcsRF9",
  "key31": "3nEnFiz8VB98ZkkswtTy5wTXBqDdwXwcWmMbNVpAfac6pr4WJLCMxvkPzmRk2BuSTBzkjcCwC6EVq1d1dbWJpyTs",
  "key32": "2evWzKDTgH1vNx9C3qTrybxqRmWozzj6nkHphYM1XyhfYv8ut6gFcqPGiFwG4kNLdxxPkvB9mu3qmNmNpUPXJt7n",
  "key33": "51WWTNy8Yb8VQ56yNkFxLuo8GnBM3NA6e6LMvCpyAoXPi7yXGFjZajbstiA3soyfKo6N9QTz2tvJ8FMPs1oBtckJ",
  "key34": "4NkNbMUyjzYjKTCMEF948DoG2NpNAMo42tLTv54sixiVBSpjCMvtvk5S6y2j8arBuZPrfhmWKD4HzZL7fmJSesmp",
  "key35": "2Tvkj3DwHygYzxkfTmrKFQ2nAWFbSn5tfzMtQEfMdb3wptmH51N6nGWmJXYFzRgWesmr5MhqYjejkbeRTGqPujCx",
  "key36": "3NSi6GosWXJf441kLnTuee421YUNQDtW3d9RXqUc9ubzrgQqT9147uEEiaU82JWf1sPdJe3FiDTGEJtAodBX9Upw",
  "key37": "2EdaWVm6nZUFmg8276pjW6HdLUdqkUSKwPLnCTa6LekrsQ32LhjH8nRzb958s1HBfpDhkMsCeGcjFPdcKe3GHNmE",
  "key38": "3FYB1q2sjNt7KV13fgLxkVQve5cj4dwYLqJkQoNLpuoPFqVBJ1cYuLvaZrZeaVmDbfy7YH25M1kRayYY56EhHj2e",
  "key39": "332LftvYmP6v7xfSHrQjgxTkqTqNcy63VQqAB9GzSEiii71Rc4T8HyDNMCxzQ2rNTpC5tVEuCU5CJsuwZstKeV1R",
  "key40": "yqYb8fZRhXAtFScW6M5fN4uryS1KLokrfGcuq51SjZyYMHSnvUBrnUz9Nmh6vga52EDSWxpwNZB39FdNqpWqgvs",
  "key41": "Arqp5AQGsPExWfa5FDiZ1tZhSURR5ggPR4roHYPcCvBEsB6F5i3axCpVNMSH6HoqtiS7JQsXLbEGJT8B9jmDGf5",
  "key42": "4o5t3DMF6oGpvK6HH6nKyp2mJDvQwDdjHWyChQjtRWVegh1NbNcRwM3ooTP31q3BVvPwmwhkCRzoi4JE6ZWtSkwQ",
  "key43": "3Bj6b82si5zqvh6pKssSQNw5tr5YKPAthUhGRD3j3gXDt26DFFh4nuQbapHBg9P3oUHYJGe1acEyvHvVQUitGEjA"
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
