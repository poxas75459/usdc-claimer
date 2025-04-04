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
    "A4GWje7KLTv7gY5hh3wWnUzmRzAmQt7W1gjY5eAYz7METubnuB6AiATezWeP8zqNwqevcaGeQhy7f6aDVYKNpS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DsJWyWNgTxy5eS2ozhJ11CGgeqLb3Ks3scXSQFWXhECLuxQJjaCGPBgvKqbDVsxwcxxsVFWLF8aBCTqAmA9PUJD",
  "key1": "41gtDy1UVBUsNpqrj3kTWsa67So75z6UX5vhRY3QJ8BG8Gb129btFqavTHBFgNx2bxg2rvSfzo5mRxGt9kWEjpaV",
  "key2": "5LBG6efbid7cjSWjDU8nhd6dJUGS8CtLzpyogQeUAg2PtuSgdpnmyU2ULuhvowQbYjzMnrey6QrHtbk89YhvLSpi",
  "key3": "5aBvm4KWffjLgLqMbLBGwFXcpneRisnAiKp6zTUsMxptLN8CbMYEdFAVkcyDgktAyRhSDmGpkKsbXeMLYG9tsw8q",
  "key4": "2ZpyfwAujX9mqEbxHfrubLXMS6QGoFn8qmygntPV3wZAAwuXC5kRTc8d81zXD9hRmdjEurMJmHHxK2UVzwY8qbwT",
  "key5": "2ZVUGQ9f9iYWdwKngzb2XcpBcLhMG9LwgrVEUvcRWNWHp6G3HyRaLgPL8Q2ynynNYBbMiFjges4D9miJTShY2cwq",
  "key6": "4jZdC28mjwguFXBW6qHJhxVT2NujGYLwUQUw8gLnEBf8JFHquidXJZ1AL3iciNMrWrAjz85WGxMGifAGTKTDvEbk",
  "key7": "2yEfXwz9w71sCQmqxp5qe7ocJ3rUKxKiaLPnPBXEQ7RhL1CBrxu8Mkd4M4dHxLx95TMbX9rX7cV16xjW161VQ3UX",
  "key8": "3BcLnW4XS27WrmxRmseoTLaeWGXQeJpweA3UGz91bFNTdSAfMJSszPHeoMq3daJQmuqGQQkL34i3XPdPJeN17Vwi",
  "key9": "2vEM1wR5w3SWG9XyzZDJTrAdwvvcijfVRVHy7U44Ui5mALUCSFUakvFtrRJWx2FMLQc9Ng3nfv4Dh3ThLF8TBfDQ",
  "key10": "4HtoptHUSWu1ZorWdtfAuHgFVxQaKzUBuWs5R5Fe9nkg4bjbawcoP4u8KgXQmPm5M8JmRp5zVQE5txPtDsQ38zpj",
  "key11": "4TZaS7mkgUwpF1ER9AoWKjUnFdz2L9zxbTryyfQE8TTgAszUaZvTyZ7dzhoJ4tRigqsV8XGvw5HsvbD5n3m8B1aY",
  "key12": "5Wh7Nuxtrp3YZPTi9AkeTozsVCVFHWWfdNwTFdQA71PRk65DdMgnDSsmqgb5LkJMpWPeZQyRsf2KPJctBttfcYb9",
  "key13": "43vqN2ngRJY7KKg2t6mA2ZyDCiHnGdqPwj6hHdXbvA7Ksd34ARANxLMqZwFuybALYoFWoemZVc6ZbMXM1hP9tMAZ",
  "key14": "572w6NeDEbWi62UsEFWn36J11YeZQLkD8UBZ1JYxjiLu2iWakNS6agNwJ1u83bL2CdPJmzViK8ZsnboNzUJXoaWA",
  "key15": "4YhiCky38HcqT7wMSNoSF235g8ccRKdLVzrPPudvHeS24iitzm31BbtT1H7KrM1f51yKKNM1g49SwbN531UGTNwK",
  "key16": "5KqyUxj1PuspYwUemRWFmJJxJGmuoS9ZvinHPDK2kXJxwmGg9evGYnqvPvp48EeX7qhcaX5ecZB1Gjzos6uVeBm7",
  "key17": "5vjcuMhQt78qVzEcjkr5AXTcZkGEfodZMd3q8CkKHALBibqQATWHDcFbkVAiDVuZhhfPM6WgEfjhKesPoP3e6auV",
  "key18": "3pT5Pjrexf87aQyH2ungJV2ucKh77KEL96kTTQ5r6Jw6JCbNzBs4kevRAf2RgzYEqGE5sNLyxB2Xqs9H9Hwj61QR",
  "key19": "4LkeJT9168vtteEijBwTyzpLJSN1vSTL9SUa5TENdChKjUBfJQVzkVcLfRtmpndCDBrdLu5K9JxQg5STWBkM6g1T",
  "key20": "9v8ogUot5udDhscj1nYfG8GnZa3X6q66PoAb1cMaRLobECfSsrJ71n8oc6TbDcPrgzkRyMn1fgapx6wuNhgnDPz",
  "key21": "2U3zgyq99RPLHWB24yKqDkHhyFLVqAebJsg5cddwWKtYfmKMwje19QjJKsrtT874oGNyDVX2Z7kgfxGcy9m2xeW4",
  "key22": "3g6Txa3VyHvije8K7ZjJcFc4uvTCaoEgiik1WBJg1Neeaic7AEiDnCbzXWp3JaTBfAsTCiKGJvLuSdLgC4k5wo9y",
  "key23": "3kv753kLnMEAYkk992dfxPV6t2r1BGWoQVVxVF67ncYmKBfsD6LrhJa1J7PS7Ci5yDd5ptTDrPE6hDA2DagNNqjP",
  "key24": "3LSpto5TsehqoAWoHVKDmMYzGfzGryb3kMJZPtUtiZmQQTRZvYBNS3DABSAuNYPxrUtHSJ3P1fe4JZKTHqPUHeYi",
  "key25": "4m6onEU1DutFwv8QCxwvqQUVMtpcJvbXkoKHpgEPCdPwpJMQCtUDR4Sgxm1wsGtkekxpG4AmYPcGsUPfNwwTbbrZ",
  "key26": "2vrJtUEW18FMSxFjzzTwfi4Lr5YecPTbD2AMTRcxA5yuKbgRvD91zqBjXit2U8L4fWNLvMyomNGnogSQPQsdEBMr",
  "key27": "2JrFeAJX1KAh9LTDieiQQXo89wnxxMXiVL1FmD1yHi8DJPcfXQiawzdgUGiNVTgmx6gHdQ5tCiirNLcMjb7mygeU",
  "key28": "5kKpyz2YbT28cdbpfFyiwar4AqzR77kpp4zkyd7HNbJViehEEhakD8r5vkRfbDtGgCiWCo67JF9igixrGKLBdmJ5",
  "key29": "2PPnghdRYNojSYEZoubW11Bi2MFUnSugeWRm3gk9ioMARwzSpwDge3k5UHBpPmSwJBzmrhE7yRhpDJvgoegrbUnQ",
  "key30": "5m7tqWFFX2kY7tBLHKY39Hbcx6QCkE4NC5xBAcTwt4abzz2btzccq71pzjfJNcwzM4wFYqnLKpFRatTFjS8b2Hnm",
  "key31": "4TLeNQDSLDwC1xmU3zj856eHJ9qxZ5HKLV1V9Erk3GKYpGGohFuJacXRdpPwqzXKVH4VUAzqmgsfhwjzJ9i64Lh6",
  "key32": "4u4VQC9RCQCUKCbmwdGB3VxFDDKqCpZEjARU1yB7gVA2AgHdELWAj8ZFodpBTS2uCEgkHhZWzdxzq7jzM9ExbDoJ",
  "key33": "2e77zjUiTNS4eKowZ8YpaxbJ4d7pFjCgabMze1UuKKoSHCqbwdVHVSFjDQm6eVqCXU1xhBLzn27CUMuc8pY5fFaa",
  "key34": "4a2RntwsWEVbYHuPWNSxJPHKQuotYzkmCLvsVCHr42p4sR57EgxWUr8birYnBSQJec9HZX9jKSSMojZmBWrnQQnE",
  "key35": "iV8pc1jvRr5Bb3eQANpEBnMKMVDwcQ54TDjrhWVAEq7ufyzUXouUs3AyfWsN5tHoaV7QweA5GtCx1FMzQyFbZgL",
  "key36": "R5uoeLrvdDZFbmxeyiWxHUMyC5adMY29eL4UkD7ZTqctohN5NDNVJDy8Fkzh1hrQLjA739euCE1RV4ybbWYS7Kr",
  "key37": "5jVAB1XCaFxBoXUNcyJaQBqa29ARFgkaPbMrVJaPVCzVid1y3zLV7q4JDL2BF7R5Hj1FQM3kgp6R87zMuippCmaW",
  "key38": "CDEUnvQfHWCJe7yj9XLJpZJaD3VWWitCQKaHENXtZKfEcxPqhTDqkgs13H3XCq5covcHpSCPXnbZgvNsDviUN4z",
  "key39": "4fzkdh15BLpCnXCeyApvaVbdaKrfbYZfqS3U7fui2FUvdPQupFzZMwR92gXi9Wkchf2HQWrUNtsWFWMhABKQvqzo",
  "key40": "4jNxagba45WLRQXJyNQTCLx4P6DnPMLR9Z1a9PzvuByiEntvwNTcFbKMabRkdQjRHu5TomHxVuNTC81XfNJihj8B",
  "key41": "4EgdeXNR4qaqKbDjY3EK8BbtoNQ8TLFX23b3GAdMz35Vk8MxvBWPM5qTcsdMupb18z3dA2cNup66ZNwThRLMBsvu",
  "key42": "2YmTuSHhC5FXb2yPK2Smcp6XjDe33RFXpqyVxtEc8jq1xh8LtsovTy1XrgJYsHvHgemfUDM2TaFGD8ayWttP2hXj",
  "key43": "4rmqosRxRU9fF2R3u6SkMtSiQYnuMbLGj2HC9s22mymnK1EaHHMfigsdMiuQsa3Lvhf43icbH3PssgzuCn7KfH85",
  "key44": "3cbbVWu5w4HJfxsqcx8cYMftAeymjhSoASJGqKWVjZjB3pB8Bgh9KzLzR3uYTLKZATJMz3LLhyNqZQjQ1vubqFuM",
  "key45": "3qm9ZpGbPvkQH1ERCtQKLE4AtZ4itsjDXs9Kww67YDX8aLEKfuEXUxZ1dTjKFV3yaSTVqPA7SbSCXh1rpkfm8tuS",
  "key46": "5K3zoCkAN91FEeE9hUdLp3XF9Jd97sDtmomaBm556CiLETi4kuak5yqh9wM51KiEMJLPbtfL7RQd2sGXUbAceUWW",
  "key47": "36Np6TYPisGSPxYodx5MH7FhXz2XSyeyPXBewAVUVnQtXBjAE1CZCm8EFDpGQc3eFMyRwj9PAdrhi8WEZ4StPB7M",
  "key48": "2bcA7TwtiN7SFoyDSyWwCTTze4mn1QKiYpCWxVEARtwNCNQjgGCAfqQhoUTXWEMKsAtH7w8Wq7jeuYAH6Wy75qBv",
  "key49": "EbmHDnLnbHyneVUeEXySxsPbBwXPh3hM2FkvfSJBJiPd4g8PNeL9LwQ4DFxQect7AuFPPU7UziSaGBwZ9DZUJcJ"
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
