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
    "4UcN7XxMQnsR3y9sXy3ZfU1UrwHY1vCk5zEiqviCukKk1isdRdue8eKNbdSLHuJqF8Vk6GxyozxuNFdbmGcP3KFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmMFciXRXiUedfFj9qTjF6dT96M33rGGUHsnzqRdpTHseMYceuKeDYL3aenrKs1hvybwBwhEm1Hrpg3YzB97ExZ",
  "key1": "4Twb5iLGbVRhfiDSXwQMkSscD74vT7eDNFnB7dXHKy1xPEviigUj4wMJy9ZHQnjgTvRcmzE5u5iPEHvQ93u6hgoY",
  "key2": "geobBVstKWQqQjusQ7L5gffjXWYZbwyJE1cTjcvqu4vxMsP4caYAstEHTjmugkmdYgBJXknuYJieqBYa5mDv7su",
  "key3": "hZ8ooCiAocg2Zw5NizNJu3U4kmn6ToGg44Haf4BgztCt7yxVRMPYZXgLujQizSCFATbQkUmsMFMYjHoZczi4ncz",
  "key4": "5WPtVRDED4CgEZEwQNwwBYxDWS9U2P1T2pM93VdYH7iZT2h6fmRLcwDUQ6cRbVoFYLnedLqQs9KrWhkURzHEwSfr",
  "key5": "45Hc4KSsALyKL6Z4YNV2i5ALcVPaokVKSd3pPiHaCMDhfYmtK8CHoTucr22JgzNniyw5Yczq1qDiSCCjthMdRN66",
  "key6": "3b1SaLgifqLqEpVy12z3mjWsPpZKptNk81vxC5P8Ur6tUCRqERrdd1Ct3mNpdxHbdeyL1WsAbG6PfmL2qhUw3PQt",
  "key7": "3eePqBdZsPfRZzCL41nxZZKn7jskjDJ1aNAKf7mFE4ASHZUihPFTQZLCeitdDGqXWo1CubMYmyXLjqLc6qL2iHsF",
  "key8": "4DGeo5rkDzEGaUNTto6kHNBRY8G196uMwxHizbUW24YoRZUru1c6uXyGoJ7oLPgiFAeoL8u4R4MGwaF1ZvU4kqfv",
  "key9": "5BktEDVrPAh1XBeHjKmrVQyqCCpK3Zd2Qc7fptRJ2LYYzVsa3kK1eNetzdun2DnNxoMwC9tGGqRpnmAT4SDCXWXu",
  "key10": "2ZbQcNJbfs61NCDoNsKSbZTJfkejX6WjEs8qzsj9paWnrxXyfWXCuJmYS3ZNVZQUtqKo7D98fG8vTaprxTZhxkaZ",
  "key11": "5sACsGVnuxM1Unxcqq1nwnwCy12c2okA3CVyVWc3URkP7q5tmvA6cPp5MsmpPT1PmJt4MgnjSNVBTtz4oj2MSNa3",
  "key12": "3FATUXZ8JbyA9Wi3ibK8jNnNcu59izLZxDdYBCj67bvs8z2xmFELFtKdyGsuykndStVjzwmg4rVRXztKg4nRjB9V",
  "key13": "DLiwndH5FT9NMtQeLdyD4WW3FN283WfQRt8HkbzczKqtxi5wYJ94ofQrjr3MJeyq9d9Xrrpwivkr3ob3muB32AC",
  "key14": "2RD4EcGLn15YrUUpPjvSjjpSfSZTwtN9u46bwyUZyqCWguMdQNKBgBgwU3dT5anronXrcQycT6Wf324pcvxDgFEm",
  "key15": "4gZLpwzeFm2d8qN5KemK6zA1Noknzgq1Q5tDMCCP1HcQApPssyW6dtgKt37a6HeFqAW1GjAx6VavzZ9TgQJ1zLGP",
  "key16": "eHVgCTHjwk7K5LX4jNw56v4vYqM93AZRomXow8TVJToXZqBxRCZA2rZhBxPKVwSKtMDyooQp1zLgrhT7cpT3NQR",
  "key17": "2wgFPGrLjMQvRYJgzZrhWrPBQJTnbpR1x1jZDKhp12Qy4YPtjKSHTxvYqJeo2nAdPkY8GJDzGownK6u8Sk7ZB6w7",
  "key18": "na8uCziAYJjQyxFaWN1FgMP77ybMPBoRaC3jaJ4mPVPXvaXTeFR4Beekuf8ncaXXhyErBMLZ6uGdwH3Y43idMvo",
  "key19": "31Qn7iZbPEvC43dNxBDuvRhf1gMSc2m9BWTd4TXZJA93A1rj5RY2x7Kresdy6jj8raq46QcU3WiH3jJQkbYdUeqJ",
  "key20": "2KpoXaJVnAJgbAWrN3Ht6xXbtMUNbkpQsy2azUZd4g3NLSfVjET44FBnnDBRd2TdENkZj6fxL14puZPoL2osqZgT",
  "key21": "4tXNEWpta4XYfvK1ndn858uywXqXi7Lm9Rz5mPSMrULHfFp851mm11dA1TuoxBUaLKd285RGfqntnJPDg6njd18S",
  "key22": "3sx9VZffiVVX6LjnLkZUH8BRbwqjkXjCr49dFfpFWDuuhSGRF9iFbEebTVNcit5ygvbWb8KhNHTGsVSr4suYxFKu",
  "key23": "2uVBykE2xMobof2YtAuzNEttULyC2h9x8wgfxAhTfYazSA3QwpHHoRTfbwri3g1bi5ywHTm3uq7PpVMNqaSZKaDE",
  "key24": "4gVv1toDAtVG5kg1goaPuMh8HdB96hvRmynEGoaTmeggBvPtp4ckhL6EHrv28SwbGWyVkkmJZffty3Rkfboh7dhQ",
  "key25": "CptvN4jJ2uG46FN6jPAVXkHjuVrQ18GPJD57bhm2wQJL7pwspMfdeepNFiFgsRzdaz4ExKWNGAZaqvhRiLbbRxb",
  "key26": "2chEhM3iFiKbPhrpWWXdrwbMsdm5NqzTY57KHusiJjwfqrAFFNnFgpxCCCwBMFYC1UhJYmueDaPn4MBeMtbuBTDd",
  "key27": "2SCtKgxEkGWDVg4whW318aJLx61W8BvnRnkv7negbbKchqejVN3e1RRREoDmwYvPWhXEQ2Vg9jMGxYe5xVf1csRt",
  "key28": "5TcN16FuqG6iG9wXHSG1qxzrTnLrA8Y2raP1WYZyfNoxrB35r24xFhqPiL2wi4TmFo9ahVYVuRtzEEppvRPWR2Hg",
  "key29": "4LQTYjpnLymCHmxQCNiqNRWbE3Rb4BgFs7dkUwX9KeD85HrpGE3JkQhCJdXWbMNoGLon3cCow67QRT31HW9WXUPR",
  "key30": "5azmWez1JTPxVwvVyn3o7Hh26uLB8XqBPecgFBWf8hoUPD8LYJZ6cFswitzww1P4rahHhzzU6FuWBeUGsub1eS4r",
  "key31": "3kKjj8Ay6uvT1Dn6RuVVjHkDv3mCS4GyXo8CYod5ABEWwXGUB1mRHbPRD3UvLHEDdhM1crQUAnLr29uZwskFvXLn",
  "key32": "LMSyjt4sgFEHZ8dC8bxBHFtvXGLDinHNyCKHxzi7Vay3ZfQjFrxMedVs5MZgYC5PJyJSbVcya5gVqfXFa3dDcyq",
  "key33": "5CHednGGkXdrU23DfQHA94FWj7G8YyUbuAiA4yGhDT3eCFrAwHBveBEAoqWkWiL2FJPkedU7EdDZ3kKQHfxkG4bf",
  "key34": "kfe2nKSbRzGZ2fofgoNWWvgKdGvgvdRcQAwh6Rh92ANmrAVjeUDu9stSbxx7jWnW6wbxXH2rjujDCKB1MW2Tfii",
  "key35": "2UzeE7otB49EaXrdkMs4Um2jUNdNzGao5NwbMcGRVaiHtWaazkkQGQeyEzz8Q7axpS8SA6efX7kcSTGnc3D9mrw4",
  "key36": "3p7kAuScMmdfdm8bMovGLnZuzph2CKhWvAYC8mWaeeUAziGCga9T9KdEzqhKKzDh81umk3VQpNAQngk2sYKA7tXT",
  "key37": "BtucZaGi69em7GZb6y1zpQ6CS1BgwhRdm5Qsc8pi6gb2fvPoL9xn95BhSd918DnsMYpbcUtoENXmmWomurH8nG6",
  "key38": "4n5yN8qnedGyATg7qwCJbKyGjyb9CgPZTouLsXHYcbQDL9SMACo5sUsZrr7BzKpfNoe5Eu7j7kb5RfEAqxQEHyH4",
  "key39": "vSB3sU5ukS9Jtd2nkiy1hQzkKdnWALCJyKprN1rW9pqR19NKBs5KAvGHeGea9vfz8Yo1n9oQjz316qb6FUcA8Vd",
  "key40": "273LSfZZbwTeEtM6mVbffGwg2MMpXRZpe1rDw2yi5NULNgYer9QrfvnkX5KyBjFduBDYiPeabKnK75VuGYUT2bNr",
  "key41": "JF1pFkTiHavYzyBP2kB5vb4ePo2TWcs98u9mRfkyPCaooTDktTuPGWyshzTMyQo1hdKJqsQra85MpSc8xzhbAdz",
  "key42": "4QavUWHkhmUAuREUjrDMjrZgzzdh33UjA7mpNd9nZ8GiKjzHNDnBHDQXnvBnNMJ8cQQG7Kw13CoWmqCwnvh5GkB8",
  "key43": "5Z9gkdnphWn1RvbF8qWBeG1Tg694uwvTQtjcTsgzAqEeN2DxuqPYEUZTCLSqZxohRa6Uk1mZmDT7hAcsEarXx2sP",
  "key44": "4JwBVfMN3uJZQbexVeegRKXzAAzoMYvcCTW6xtzfvcnsfmiAAp4pPrW8EX2bdtv3pBBWGX1ggyDFXHFuTKVEtkb4",
  "key45": "5MwP7Pcd7EaU1cX6tudij7U6zvBkMfAUGL7LfJFeqi2aAF1Pc1puJm1F4UXM7TPk8PjjRipYS4gfft7EZTHsJPqc",
  "key46": "5WLotx2KTCjvW2sCU8WTrUBVtetLEkA3JQfu4Yf9oEcV3woHR21desDxeanfhfxtzd7NnYRjSGnBsGgKadB2FY1V"
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
