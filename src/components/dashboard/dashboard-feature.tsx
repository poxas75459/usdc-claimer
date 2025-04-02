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
    "5vAGVeju3avrgr2D7M3CKtUGkdm1G9qQZjzAxUMkbhHLK8ZbGWcRZtk7ikBpSaBgeimKuym1j6FXwqw6NBfqzQSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLyfhTHtWs4t8PJf9TM7G8ZqHgkLsAwfmitBNTkYX2ugYSxZdicRFCsdovDrQcsNrUHxPSUKFqyCmvLboZDAUDS",
  "key1": "4f4BxbBcpipE3tyHyfmz5V3BstfrqmmrHDfVQpfC3E5coCR2dfyTuvYVFGVZC57dRkejYiyDWpFLU7Br7JumPVV2",
  "key2": "28iTAGqodK2UutnFJat41MCUew3qzuVRdU4rGxntUUfAxvsLWDphG1mQ3mtYxjSF2VtpQca1DMoAQ8nDSZ7FCYsQ",
  "key3": "33Dv4udRVKSxdfM3EkXvwg6oHPHcno26sgbzLG6Q2AecuKJEbUGReazwmDp8zQoeQev45Kh2JJhtMstniNxy6YJY",
  "key4": "4Qi3GQdpkZwvXPZiZWmMewYyfvUVmtLmg1pnsBrpS39EEbdjjA8DR2e8htddNNsLht7dEgZn6YTA7GiAUP8hGCTt",
  "key5": "4WFE8VRA4uUjawS7jxm3TxMS52s1jHbRtqHQMHn6pKgJ1gbYH76CAk11bmzQoJfLgRxpZdREFxsrPgxf34uuLh1V",
  "key6": "5kv9yebKGXL2qDS9Wpt6czoMhToFYeN8Y1319gCQq2crwQdLfXU2bxp4P7AJLGJzRCLbxDMc2yU35zWT7FcSXsAP",
  "key7": "4akAUp6Y58LJxyVjmUZHNjmDfPSN6MGvxv99NkAosRdoEhDbxcsidsiKxzC5DNatpEnEXFAYodrokyLZufGgonRz",
  "key8": "2T8z8zeUfVtwyMvTG6RWxtmbvKYCsnXgMXxxfwyamjRJLLUhpJm47pnBszQUeb8Z2N3D3WWMyfwBZnC2ZAVKS1sC",
  "key9": "3zzEyLHmaFp8hVRkJa8pMzs3rJ7iSeaioRvmucP2ceJG5mezW1v3TQ87yGs7tsVrVZZJ53nQfvj2YQTsQpjBqroW",
  "key10": "XyrVJjV2pCj36txkpNjrMUA8uPDVCDsvTB8qzsN6BZBXt6ySaW7aucSVbF5mDi67zmGc9irswy15qKarvuTwa15",
  "key11": "29v3DEfmvJmzeEi4T4xfd9h81ojuvAkuMEMvQnrMmrEkQmEag4DhNSWEBB8RjarDyAhfChDnE5DWP4h2mHo18ucE",
  "key12": "5yUJviShJ9HvXDpZkZvoZk3gbub5xpEdXcYHPdDquxbvFLgzasbhLanFdP4h8Rh3ZkaB4FNL3gHj7R56TrnANyJB",
  "key13": "M81MomhKBntSdSqy8kmEvANiuKFqeCH8dDY4VpycGNaCphXqLascLBRRCeFSJMLYEGvtFoRkguG6Vd347KDBNPH",
  "key14": "49SBpLmiKd7VGgn158G3ya86U8L4LAhPCuUpYMEhGvghvDYRCpZTDkkAxJJVXqnNWTgCmGkXg9nhLParLii8fLf9",
  "key15": "Pxe37vrr7cL5kziEjWQ7JkUe3YVuETgmM7QcngmC2bviU1A9WSGED6WeEQMKMPkdyfSpb8QjJQDNX6tXQMVBa2G",
  "key16": "4osgfLoZZhXpR4DwsCF98n6dbo1ABoc1dRzTc3MAnveiAgjvm9MpLaKVQTi1pSoavC1n6ZaiwdmVFq7LQtevtPUn",
  "key17": "66JgZLRXtuqZTftqaekvoLpr5a13XXYaMUjhRJv59pS2r97HpAz8Sg8qP8qwDHYneg1rzjqaN7pQE9LziPWRUCdo",
  "key18": "jxJoKiZQwMamAPHQx3dJ9S6N52mYWPPASmi3DiRUPdnXdVdprN4v5z3DQs1fHXUGcVCpCBmnM4d1uUihtbBLiYw",
  "key19": "UYpznLgkUQxt56R6CwL7MCwgxeHDG2T1ToxESiKYxMPDco6BmcrUH8mWjfZGkoeGP67AS4UzKCiH5V3sfWtQq76",
  "key20": "4gmqqDEK84ikvL68yHbLMufGKn9kiMz1s1ypvptbPKxwkRYLpjVLT2SGAMpRN73z7a52ApvY2gy8FQBbDi4Z1MPd",
  "key21": "3v9uoBoc9Xt2dBsfL4u5Mobjao1wmQoKCTNjTqNEMaxPjrN5o9xeLftDVhMmakpdqLTyBPkB5YSsZ4qJDXp96G44",
  "key22": "2RVPmi4YALap9HL2rGWHx5UdALVpzv2H5aN7kmgZSejKSqAvNetBT3UJKtzY4nFwt8cREpFYn1Kg7TEg6gmZ8zZj",
  "key23": "34K3ysUxLCyjWLr2uzJmdTDxdv8QuKbJcYRZQqpGYqCdgmuDQdLkvfB86sm3y4nfcRV8WQDCzHpcp8Wn47CRFNnX",
  "key24": "2yryzLwo4JcnmatEnQ3b9rr5X1EZZcvMdVZiVBs8jjMRnvdsGV3C4ior3LHzwxRLT5f4BWwowUGy4uy8CbybkrcE",
  "key25": "4tf8VKNwdgp7C9cvjLDFK5d8kw1T7ZN1BdL9Caw9Zc7DdjR4xTJpNiqbULexH2xZN81kQCNw3X4F65a99BREk4uz",
  "key26": "42AbbwYUisytfEDKGMANpaJWGhUsumXoesg17NfWV2dkx76hmWh37XyUEhouGm41RgVVgsSkpyRPmBc3xNJyeHAm",
  "key27": "5VL8uhVMNtgXCbmvT5NZ8HuioxfRGQyJeaxiGvDd7ZD6BsJ1ia9TbE9pbur2No8beDZhVVDf8un6mFznthwyHtMk",
  "key28": "PYCiw1ojducy1DZdrMp5XTG7JgNFbRNsmjzPMw5L2hXxq32EGpqKXgUh82RnZSa76KNcA6UmNv4GBGQHpYjJ4Ur",
  "key29": "DRJtuhoKBLLBat4gcUAuopJJQmqWRpAdKYbRNji26xFDvTBEaTtgpZTQv1dEjTG1jLWaDm2ZWqzk7z1xwZB5PMA",
  "key30": "5XcXEC7owBAvoVadfUAWigRxK8cJzEeGroex4dW88rgYPYyw1rq5KT4YuSdXtbqbQjFHUq87ZG84fYA2MQ37w3yd",
  "key31": "2dPg5BMszbiQjXrabSwXf8dSg9Fi5kYuDdV2SV3wnBLJ6gCnjH3eodGPTdjvcSQJrGtiuJFU2q5iW51tkZCQvQZo",
  "key32": "5ypLH9tFzZhznqg6KqmSZHEvU4qLaZ6SxsG4dng2ikF9CXnDsoY1mgTJFRjqbCo6ZSoBwviHeT1f6epKJ19MNytB",
  "key33": "42FERrjVUJDQcwpaD87c1cZXVvzEbpQoWYusn8MbTNcTzA2uYt7Dahs9GndeXd7Ko5K8P9K6yBRufeBNgKgK12Jt",
  "key34": "2y74jfqKYGhZuiNY9ynwkd6eztLtCMnwoT2KQr4UkuNbPXes3A3LDAj1Q1NaEQyUatyipb4V3okShT9vPzw6nh5H",
  "key35": "5vgfeSDStFFEppsBqj5cYUdMFQsHkuuN9Ed3nbKxskwbSTwfStEf7B6nTFCnVtbm8JoVqaKaoVn4hkPDxtfMvWyD",
  "key36": "5epfvrmGNMtqK9bcs3hHndUYTXwnCJ9mBNMRGUpdF3famGEs1K6usZD1VSu7az84wjfHkHdB7wjoB5o9b7RST4ai",
  "key37": "5CmKxcTegJD2N84dgaMXwqgirwcpqWGovGQJSDtAxpG2DMtgs7J7h94CRF9f6gU4LEoGcrY3Q7JfBFD7xNGhSSZ",
  "key38": "3TfN9etRe6oecX64yvbAdoqGrMKHAqwTcXDhrgZpkUYZqRwCwXY4kEVRZyjWxUcbjCe38nkR4cHEyy4DRWu8JS2F",
  "key39": "27MuvZSDppwdP3BMKrrErSXC1nXkcnNCRdzWTE1tB72VCFzb3K9goD1ZBgxCuSfmxMrWnoamh5FMvmxV5MynCof6",
  "key40": "276GbCmBVWPoPqD1dpSY8KUsetENF8yvcGJ2LtVkuEykeT9ausaNS57qtSwgV6QRJWnW61WAC7XTcB1g2rudCuKP",
  "key41": "2PHgYZDWUA4TxFa57WgyWGzFwAPBFZixGgow8dWVmvHrvhkx2LEHpKkQfhYYi2GdR5AmAuikAj67pDGxCxiPUrR",
  "key42": "fp7rSGK418wYN3gUqngdpnGR1LmVuk9XRK3x4NrfLET1ZatMWjEazjRovRCjSAPpMHzAKFXKwr77eo4YGnqf3rR",
  "key43": "2CxpD6Ei3aNK8yVKVVPaiaX2VuHMRo8AQfuVNpyFDwyjmvsQdynKsk1GqnxdjiLnEmCQt3Ma5aAb87S8m9M9vPCY",
  "key44": "3FjFhXZvcND2oYtkDU6z7FBU3mb5S222AM2dcUFskDadpprWhBiMzKFJB1SQiJ9Ua3TFjxHxhjy8MZjr8PSMLqhn",
  "key45": "5vAZz67g9ySfEQN1ZxbubV1syB2Lntw6WhVCStewT35XfFyML812GXKfLSyTWXoFtzuV9gwp7LFykreJhvmDzjmJ",
  "key46": "5t7uDzYBSdAdEW29hkQHYV73VTAQ2zP72oVn6Tyxd4QJKg8teW8j2wSaSv5ExyCJvjxQRF18yWq9VSo6CXPToYyE",
  "key47": "5yhgujjZCBe1Aqm7JAEPcd35VwbPFnPqpSRXvHYP1vgqJWHgeq7H9uY73KdE4uhRLa4KYEqVbyNfacRcsb8agivb",
  "key48": "2zD9noj7GZmnyVoW6sdWJGzkBx3QaMCpZ186fyJ7a11yMRBDyGNaNbs2T2TrjD8of1iGCwdG8U51hCrXRGzusFJj"
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
