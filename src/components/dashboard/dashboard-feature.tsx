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
    "TdseVnohsZnjQMtVctvsDCFcrpmpQVsnCRGKJbwjLbdA6y64p1Kr34AYRFiWxnRkFBoYwzCm6E3MM8gohp9fJCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5nnaueq73UtFFha33PFVtbPujHBwUFzjgsK4is1JodWZKri4VuMyRF4uCoHVPUaXRdiYMHJSojeYbn7UVxwTcq",
  "key1": "2HXicgHSsEdsyqt9xCr7KYbZKR2vkeEwsMEt17RTysGmoFkUTHwjgEUk1HKLpfFrhrpJ8Tqz2r4rUKE7SdC2PRLq",
  "key2": "5bT4dNxdxysKDAchWg1vTijcgvVzSZAcDuvqjabqzsqQfmNvFAYudUv6mpP28HEqYhp1avFDZSQn8H7a7FDbvzBG",
  "key3": "ZGpVZyDrzZbpKnEdgPn6k7nxQJPrkJ4PDPnmraYRZrtqii5J16jq5SxABcitWX36R9UpGfaQw5MVEFfCpmranHw",
  "key4": "2dUmHGcqzmk2Gv9TbcUiFEXbdqJ8g9yR8xqHjz3HYHDhptZBpYffTn5gymXb3ojdjF9gaPzNjjbB3guRYhrpC5rS",
  "key5": "3iGUhca4WbhCnpSwrDyhkToBJJ5AKuQBMf6Z5QFtasnw3JtaCnehBnWgr71VBqKCymbNHhUi9RANQTdKDyjB3Vy5",
  "key6": "4XkrW1AQGYMhxwdYGiEHSrAvfzpi1DdL3A5wpsn38aca7nJJDPqZ2BNu89e8VeMwoCu8fw3RqwxXKhVntNS5X622",
  "key7": "2Rd34BG3sf2EHRomjkskNHrMzG2ny5qtvpp581UwM6xMUycG5gBsvYPi6CqNn5UEWWGe5QEWrBquFYUEMvNKYjA",
  "key8": "32D6errs2shXvL74tizabW4NFimFKBcnrAJ3YnvjKPyH4NkH4Tdcj7ciPm6AweYVVrdu5BB1SMWyUPvFD5J4Ki6b",
  "key9": "3PuvG63cu2KVjeTKc1R33S3tHYaPN4NTGMgjE6RTeyj9tjr61vfZnXUwCJC2NK94VeSvTDVoJ2iagYJSYYAXBo58",
  "key10": "5zHLCvbjg2FeCz4YZq7UiXd6ewHT8u15yQkGa8iG3QnCENBokuGvYargG2BqZxLdDcVgE6eRLV6TuUQh86q5wdcB",
  "key11": "5hPU1sRdCVqA2MyRVn3RqVMG7uCRTNNeh8brnYDhpAY7zth85K1u8pFBw6jAE99PZCsAJHbfY7zETdPxuEGVHC89",
  "key12": "5pCiH79FyvgvD5TT42zpkNqs2rD3miFdxT5pDEJHT6g7yvMvDRavnfPCHFxDXoeWC2mTGHTYeWgDotHd69V7FJvG",
  "key13": "35RKRn1waA76ov2SawWpDTuQUUke2NNzMrvuwgfECgdkHsR7qS2u1BVY8dqBnsoAh9zWVHV81fZjhNVmo2kK3hQY",
  "key14": "3ZQySoMDJ2cLt3Wg6RA5bAncjREQRyPQBfedqvk8jHMZv5BUBCn8nBJwzseHqmFTxEMqwKxFY3dy6PXrc3X3gBPM",
  "key15": "Aq8ZchgAKVYnq283xUjxFsg3XiwxdWn8PvzT16qY7eQ1x9TKcZJk6i8ptyEdfzSSkzU3XdsBL5r6A97Zkg8oTzK",
  "key16": "2B2GbX3k1LPbaf36HCQcfASnSAVtLmBhwBzAUojezbMyvJCqBKpFRvXHR15GM6e7kpAUmjV319MMJYgu64yp8xsf",
  "key17": "4U4hYP93dLPea5SZJRcQiGtKB6tdxH8DefJ6QS4rafoD8ysMWYfPNu7b5qc9GbDHZznKo634s6aiFvCaiTGEpDUK",
  "key18": "kDVWyY4FSmzxPnnnaVfxbvhxSyod5zaGyw3zJKokctZmUrF8CkQBBqE8fbKBuRjK6BhZPfzezYuvKaNXXEym4GG",
  "key19": "9cwN3RhM1H8L1qAQEokHR9qzkpiFUZxwL8qhvL7ZG6kPafTgUbtg7qohr1MqUiG9yCWfhUbTAGrDoPtEG2KZ1FJ",
  "key20": "4QWVZHCvMHm48VyCoSYs2tpDUoxvRfTAeYcXuAokwYAniG3qe17NqnQNg3dDLF7E2o3Q8oEFyUJWyVKZTCmWqiNn",
  "key21": "3WpU7qXw7nq4SFFWwR2vhPeswLU838MZq6UKcFgc5KWJi9QqcwTVXzcTYeVh5BCTHxMuUrWGU9Lrm8kCNF4fTABF",
  "key22": "3Pzb2uroYRYKXHWGgHGizSxyF12sE8H51VEyVEqh28K8Kqibf2sNxxSGnCyy9KUPXkpCXv7u3khwQwoL1QFwxsTY",
  "key23": "Lmhov4vvzKCJAv8ybL5coc1uJwjNBACjmxVCv8JkpSJ3HpWtdJayCkSASyV6jUD1fnCShyXDR9oa2Ka2eH8q1yb",
  "key24": "5SZyp9x8XR4cQzPi4jxWZsFVLEBGFAe5WzSiMETyeyGPQg3voqRTH4RttiVowLrREhz7ydWcVsDpMmYL32SvfvLq",
  "key25": "2LfgtcgTr56qCGiiZfV6xoyrL1Lak4QvgBd7gTSHZnhH3xQrYqsUBdT3VnHLNLpnWVRAB7cLTKpuzF9PGJonCaG9",
  "key26": "4tVWjVXCVRByf1ztvMcmw9GQD2M7mnPPtVEMLV2aPQMTtvjBGeZybYGdviQV2Ae7WKq5qhqw5itGeVvt1r7eVxCJ",
  "key27": "2NYgmTtJB426KPkJun7tfmsXZf9TKN7kCyTg1L2Zga8fhrYkPgMNPZKrKaWqDcpvytJ6b6XApuWTu4wqiZqGHCos",
  "key28": "7gtCAtHa73QWS7K7kBE5hqLPE4QSULqPjquvTyBESJcorNBEZGPkwtmg7MzhSkfB2sFCkRD1HwWR1GqYXxMHvNv",
  "key29": "5VDjvNwTmqoEWbmEVuGLaug25Edr8FnKMijyg9CMFZqicZxitgKStoV2fzpSkmuVnewWmnj2EGmqoh9ZCCCgL6fY",
  "key30": "45LuJbLAtsNzZ2bfF7HdFPRpisrWyd1ZzUC2soCmK4jitxT3GWGqJnEaZaq1aHtHHaNxMuTn9URNw5C5d1MGaS8j",
  "key31": "TippFBPhZQQzAo3BeGsYiXuQvq8FMj5BYqLjFkZnhCqCV7h2TmpSzbHArqhYDKK9wdL2tBJiFKDErDaa2YPBnDy",
  "key32": "4UQsgA58RiUbezX25HyQAzCnHniTZ2okbUAq6LgG64BKH2b25WV8Ch3FAy9aakm2NGtTvDyZVTi8nsfRiNEdnE9f",
  "key33": "1kyA3ZTHFirZ2KLtsX1r8zaA1tWSwqNyZsi41wnA5ZfTzLEpTtfXbP4mKDaQdDdCXs3s28ijrPi1iG4tmRhK3Rv",
  "key34": "2ydkoducsRc65eH9jaK4SDKKUxKEUuoAi5YpUDfVEKRQDSPeBQE4CXNmUkQ1Udi3giVJfw74UamPGkX4eLYyeNNe",
  "key35": "tVQrcBKT5eproe8hZEncSCTaLVVUFq26mKzUvrj97R5NwdsqMDffuYQDiG12mnBMdNFXchbnSWQ4DWAsGofvmvV",
  "key36": "aMwiTDxdZrdrqm6SZVdb5J4e4nzjLqCpwffToQDLyggDtTasjTJcpMLFoFXwCoNBuV2QHZWkyC28MDJ6u8SgHGv",
  "key37": "i3xKpemk6nZMV7KtJbW4JGR4A45HS4MeVHcVMnoQL5qwvYqUcVyaUEbGyfDa3AevzdFA37G1SeHNpeUvnhvZDoP",
  "key38": "2rxgoZfmDesP1HGNL2y4o61t12FZqoGZQW1JwhEVUuuhgjZzyj7x5RpaJ1Y5gbiVczqQyXgmaR9Xctq3tyGmGCs2"
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
