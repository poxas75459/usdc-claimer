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
    "hMRRUGQ2F1W7keA6pzBdZH3DzBrmmpzNw3VGFEbeMDm666BKPq5CKCEdUvUDAQcUrp2hpVQdGpgsLEp7uoPS46g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XV3bhCrN9T4XT61oX5by7JjVotaEG2EdjDMYA2f5FcM4hZpTMszG4schBehsWZ7NsssfxsXYf6rWWGZvcDfs19N",
  "key1": "5ZNd5neaDJb6PaX3eMc86G9DH6Bsrh4WicwhbL4k1rBPTDZd9Jc4dvZtXRDCVxakRijN2R8RYUaNVvc2cBHDuzo8",
  "key2": "3JsypUHXUXmHXvK18Bv1XHVVxvCKZwrNbN7TRjZysjVt6LSdsA4twKyvYnx6rL5hFtCJb3xyyCQpXqaGYyifb6VQ",
  "key3": "3iE5ZiCEfaztYTxBHNhRwpcAwGmmt8tuzzGuhNtDd9vunkYkPmikPenNgisoxWwEqQM2cKntndHX6PttNroiSd5b",
  "key4": "2bbWvtHhUiDGLmgMnZcMSopKnzrxe6814ShRZPEiz5sW7xZ85KP74iSo1EFNp2CW5kVs86nAEchFKRNo2p11WEKt",
  "key5": "3d45MGfe1Kuie6e21Wb4yzJjHrWVAdg3cUxCiekJxDb7wtcETLCW3F98wUMiT2mUZk8wDd3oV37iZFPM2Xfj8reX",
  "key6": "2YTYA4q79rdxuMwJjE44mr8CFzvcT4fgmfuWYhLX6osmRghMrJj1JkXcXW6Ksgy2egGudZCAHAktmayP4p3oSdsv",
  "key7": "uipaHofiiF7kZw2mLHc9iR3R6DGx2ZfxdCWP4282CPTHoVhQYLWTUScKbVx61AVPQShooSFAxkXNtayGi2GMe2r",
  "key8": "4647y1ibaMjKsKE3FUFP7x4qCy6UxgPxLaEZmzbbRqLyYZc86qM4sNaotjrjcuFG6fDurXCp9xaxSFbdVg8nXL5S",
  "key9": "pV3XqoQc2XX78aTAu7FJgTAsvRXB43jU75WRDWNAd47F7zn1td7zA5DXfaMQMHG5yoDgwrP1N27SfM4t1Cqff5A",
  "key10": "3tyMty82KGbkQFyr4rAZr4iJZuQNS8fdMb7ECUMRhM6QjhAHWVj4C9Z8mGS3mvvTbYrqKDzMUraUXcdosrZq7QfZ",
  "key11": "3UNbQ9GhAVoScvFi2CT25RPx36LpCvNzBcLfEhMS4xc9Ptt8GvPihLqSvRq8YJSrz86oDoTCToF2SWUgxsvsAqe5",
  "key12": "4bahJBc6a9mTspbgniMM345m4VcX4zFysQ5xC5KoQNfqppqUaxq9szQ9ki8vtxBFuufMwyGU1MKy41Fp3sC7hvAB",
  "key13": "5Lnc59qFBCT448Ce8HcYEF5ut78CXGFSPXqye5uu6MVo1XVuRCRrUhAzkZtspva1mk7kPsBjFNwHsp2yzDib6wcJ",
  "key14": "339feJhfGish2BnHu57thTXq31kKqCjoXz8ir1Pu2VC9FD86T3nWKp4MAJQWJY8kvEwQvjhEHWkmTFk5N9g9zVZ3",
  "key15": "5pGTiZQz1y6ZrKwnS7pJzojkb2zcBhF4oU3CFHsqcryoSjAVicAieWiHFXSCHJDm63r6GtES5RebPPWxLXrkRD1H",
  "key16": "6783T6KMZ79SVYs2c2JgqSuAVtrebWL6vDGZhJUXRZ44TwEhHPAqekVxzzw8voLJFJL9KAyvDWBGvkLdwLctHGi7",
  "key17": "3vjnQWWnG5FqdpsmYccdqA7LLuHveGLZMogJB8qtZb8LpgemGLM3YRW6JiFHGBHFnkqbwZnV1Cp3nRaWg1u6SSir",
  "key18": "3kmTn4VXvHVEsuVD8gAyLm7g46qjzcSvYq76YUQLZtD2ruHjUDim73uRqjCzjUEwmvPhwqCroe7AUnKewB18uPmk",
  "key19": "5GijjzrfKFdT5n8XniRnNv3Gj4tujxbdKvmZxpFf1XfHHKe4zDxQrQwtAC2h27wiR8TsUqifdtoKLigL2YaNaY2G",
  "key20": "26dE4SnTMqoJfM9foLgDco3VHgemoYCbznnQkZqGuau5bw3DcurH3WnnR8pwoYfEkCjBFXv8X3Rz9gJG2fNVTGT7",
  "key21": "4yY3PcawmCFUwtCsvDLjJ5njp4Wzou4FV5n4yQw1p1BJSa29sPbkHSvLNbzP7J1QqCKup8f36kp6oMjfwEjWt8aA",
  "key22": "ph3P72k2UZVDtSzGpmnQH1zQECHY3bFhZFCWD4MZpc1pt2o3XxTzcrYGx8TskNaXh6cGCGPheYDXXj4nBdrcCwE",
  "key23": "3Fc1dAYk89hwvW8gyhPfXiPzasZuSCFaWJDpGEN2xhSRbaB4JnqGqnt2Y2QEMKZpw9mQsn71wEvEjwECa1AfGwJV",
  "key24": "27WaWJinhtLL41wWL7TZrargA5D7GNYtSvQ1Enn1qkufRHvZP7ULkEH3YTcR8qFVBz3rTtnCHaH1HnrkRL66545x",
  "key25": "2xurgbUQR9JYNEtpCPdh9yk8uEZYMTh4xFzSBiwVM8MqaLag1GhiFQx5zBszUGPRwghcKnCAC1wsTjGpMqYGgsgf",
  "key26": "3NttGExzdLPnhHTef1bJkinnwDpCQxegvGpgXUdyjtuCpxp4sU4sMrYPMK6GcRYVTKSKKKpQj3x3KrG3J1jMrp4p",
  "key27": "5NYgxP9FQp9thtrR3GnzenS4D2AL4gDaTsX94mow4XbgEC4meZcUkB3MZQwnLuQXdh8aLXG2qy63vdP3eYCjcuQG",
  "key28": "2mWjFxW1REgkzw2ze3Yb1nhsXyGTAte4HS5poqSMArhpXVsdjKuWisK4Sp62btDXgBVzbMQTPmZeCzHYGQ4Gj9SA",
  "key29": "4GkHXhpZj7a7Dyji5g5NnUU44dtGKNkCdPCKvETqd6Z7kNMjEANBmiHehFznnTR8mBPZGT7c11xf8PBNRm4Ect7",
  "key30": "qyU49gAW8gJaJX1hU32Fm2g6EHmXWiyGKUdfJmYsAUWyFxHeom9hnNgjtti6V761ZbGZLQmafPnAMRuBkS2VoXe",
  "key31": "28nua85XF8TXbzPoVkSWKJ52X35WQ7ovsbCaAayt7eZnK1DxPTMG2reu2aRE1imQFkseY8hnzk7yeCdTEBnfWvWn",
  "key32": "5r6JtH3UncX8gqCh7hiSr4P82yn9SWFv66377CuBYdXDpWBYyY1S8acpHGrgqrpkb8v1yvnF1od9qnPrz1GA7dSS",
  "key33": "2xVQR75TYsQUudZkgfbppEqA8TEfJo42EePyq1zviHmcY51hfgUqtDAx57sgNWzwmaoiqxvBiBdqLp95gXmH2XiR",
  "key34": "xeRhy23BxEqfnAyb3yv8RSRpd6zFwTZHAAC185F14az4Re5TDpsqrHbeK6LrgdWRcYgMn6mZgnrXFzbKgSK6o9A",
  "key35": "TebxFJjsfLZqdE1wGagXKiQ9QRM1x8NgyaWAgrBuWAmE6uyMqSdWbQWoAuASr4MwACSEbXyrs7jrkp9bb29ZgKY",
  "key36": "3YF8RWE6XWMcRErgCoWF9sppasRA8fc68BFGPQYP4tU3EXiXPGPepJGAugNA3pjZAS68PMSYxV32dfhC2xdJmhqt",
  "key37": "2J8XUrriKXRWLga3qMksV93PJE76E979RSuA8HCunD5jjJcfbqEbS4MWaxA4h147nUUAus7qUAhVgkpcYFY84tgF",
  "key38": "23grnPXV77p8ZTdkkwsWheXSJSQmM5CpuV6cdEVkfoqPkWh7apXEyMWLwhiUtwN6SKbYmcnuf63Uwj94dFPcGSbz",
  "key39": "3zMgx86RTGRhkoG5vcGXrZ4NByDFTwxAL28gmGwbxtQ7yEdbhC7mbFPxVGuo91AUAt5KG3bij8AqQAytWUiqiqud",
  "key40": "2BayVHZAkMSj79bz8zuG1xeopjyMMixMDJFzFmwrxn6ARkFvLLGrfyvG8P2p72rrWQpMmfssjboEMiF1qxA9mr21",
  "key41": "ceuR4HsyTghv1wDzBHVeot9Y2pBdgdV8Sd892DKJuenrGwBKga72zWiuoKRvyDuLzaFq6DJbcgtLmPC9j5EfYrZ",
  "key42": "5G4cWC3joXZZvAE8waePKDYRAhDinohU8fSjwautMNURvxjd62DZmQ9hvFNfk5N3jCnxBFppK4UhtLT3BPGYh6BP",
  "key43": "5jFKafx3rnVw5CGxojxtB9WjLALD7vYPYCX9JUfE1oaLK3cU9AGueqcWgod79bh6HVbaVU5stYzCCdMkhXvZEhqW",
  "key44": "2CES9Wki8MyREuaeixFjH5Lv1NoyBPQFZDWA4NESipX25UYsYCZ3RuDjQT6xJtqjrv15PxtTsGXfq7KECWGr5BQ9",
  "key45": "7fe2EphMzjHUv1XPn1DBDoTA8a6P45BNxmdFDS3GnrGSVuG4akX5RywmpSS8vVXBUMKmBjXivEXTCcjnDe7vRif",
  "key46": "34cNyDnkq9q1Mk7Q4cq2MTKj9vp2Uq2sH79QCtjyPmL751RzRFYvVLDdcWLFRGqfx7cfxXr5yM1HBHTof39yZ7pF",
  "key47": "2GU8tokYAVJkUmdfhrjFwPdxAVF7yckQ2RnMiBCM9gMXUejNPSrfZhiYZWCuCEUd4UZ1hukDLnFhzopxCvtkGFAx",
  "key48": "27gfGTmQhYJoZmCu42cn17UEGEKMg2KdqEwhhVogrYjGQgs5CNWwWgdrdVEZF1Smb8hCoumB5PoqST4eGtRk3WE5"
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
