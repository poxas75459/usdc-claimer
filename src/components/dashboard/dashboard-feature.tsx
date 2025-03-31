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
    "uKSrLeLnNcxzAzsVMEhzFuPvTE9ek7sFQzpT8d3zKWyTPn6rR6y4WRuErJndhHocfFgdAo8YvVE6yf5Pdq5pFzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2neE6fwDF2jB8XCMYsvp74APPn7T2NdTWuKvS1yQF2Di5mcAkuhKwEG4hDtcgK3DFzx9NB6MUq3Z7NnL6vqUS1LC",
  "key1": "3n74ZcscPMqWrjrpGEeN2DY6NvL5yTtsNAs1YSRhaYx9n2LyQWK8w2o8TRbpWfcgrd1fcSwbn1vPqtHT5YZ2zMR6",
  "key2": "Wmy4Motu3vVCJQ3TnCrHTSZiFBPF4zuQ3QBLNZmSHo3stSrMmGNBwarFZ35srMSsL6vToxE5XPMhHuLKrwQiVcf",
  "key3": "4mwCvJqzXPi3cwaMKKXZZK8Z2juxrcSepHpq6enJCZfavp6TsYnhKdNCJTSDRdioqFj4wSfbJfFHrR8brc9gec8D",
  "key4": "23QGN84K5B8b4o2JG3Ny9k1B5R1p9u2KdjXxTmp1XvBc8CCqwU87MfJm7F11DexCgDzVmxCjHDRXkFgVksv9tja6",
  "key5": "afShCSGi2sZ2TkSqqshv4W8uDdBcR3mj5C5ykimKR8DWEQyiotyfdPgiqV9tBDDKq5E4LkkzXWAN7T8ZSqzmyok",
  "key6": "psdbZrjWu5u8uNNPEFWL19B7vMMVNSMusqjnP4jkgrNr4XSWGWuLiwrasjDdweK3Rnu4vUGqw4efRSLiYAYvfKR",
  "key7": "ta8oeCeR3G7eboi8BaXP7zrNhGk4g1wGFBmNrY8veAtDpKpN2Be8mkPaj3tFcoNDvzzuCiM27td9xP9MzDM1QNS",
  "key8": "2qQ3N3wvNrKSVwE1BE6NWjmJSS9N3aUAZ7EKm5a9W7nNRByEPnmsusdMLtgxu3zd4YhM73q4QYEjQjC1Pi4aDft8",
  "key9": "3E1Lrrz2ZKs259K6AkAhYtKoq86T9AA4EovuCBTCJA6voi9LQjWKtAFekLFfWVj7GVdi5RrMvX7Di3PU7bGRwoBp",
  "key10": "4yut1u1EQcRAmsBKTxQ7vchdJyBNpJ5cb2d5pTPbWTffiWLD766GcXXWHizwbcrFcXSLvMWXYJ9cpKk8MDBMqrTy",
  "key11": "3se8uqbguUhfoJq5GPaBvk9okeNjrmeTzfaxyZNWAKhRfCJnpy3JDxXaupf3Mn7H7dqYfSkWSYmuhctXQ73ty2z3",
  "key12": "4JQFFayMXT2QeNmgctQWkDgR6TWfT3CtUHmZ68TRMrVNzUYVkc8D4by5ao5LocpDsRpbwkJK4Qij7BzVhmj1Cy9R",
  "key13": "3qPj1DZge5B33zetZjuaYxY38dDmx32zgW7TvkrGNVDiu5LdfPUUhNLuBN8wpR3qvw8UxPihXiV4gwrAR6dfy7kX",
  "key14": "5qJPB7B123wHymSVrXim9wpnYdi43MnM2utZFznvpvD1ppZkbtwtXXRr2nC7y4urLtGZ7GRB7AKC2SBKHFKBSneg",
  "key15": "3j9GMwmhEyvbr7FCDzsKyP5Ms746csga5WbLJwH941yhMrt4csQffZQnZpTb8nepGX5VZ4EqKn4aipnDTy5QLEGs",
  "key16": "5hbYRnqzWkzQQqFekGLk7cRxVWbshhMwLsGx3aoTRLAP2sEcvsiMgDqoxka9qiqgsBbe8xXZGKcY2sBvUQWU14Nx",
  "key17": "21be388ycVJTJgAUctdRFjZNZFomyfQy9BFNs6ApMCmQ9kL1EZY1qQyQ9HG9thBW7fTYPLr1Dmvr9YfDLveBPcVF",
  "key18": "3y7NWrTrFDkuajh8BZNkRze8sw6AacVWoSeSd7s4Uf7o76ZTweVUJChH7rkEdcAdceZceSeVRwbSgpcGX3p3FywM",
  "key19": "uuKaXBhTkusiSvxM6Tpicf2J1aRAs9RmfNYzci9C51rCULfkSwtqU7n9v81rGjXFixeup9j6gVEKhFQswba482S",
  "key20": "2NsPR1vMzB9icst6YpswL48zhUBCcMEtfFVshdEiBJgfpEGaiCPUfnnVdL3muw7Z23nMPcVoFc59TZkjPcPtAcoZ",
  "key21": "22S1kmrUyUghZhkdvQsKGwr3MVmDKaHGg59bTXVrLo72VgzqZgf3Snb6NnjbMf5N6fkZN7mrVyDsQjtx4rPGM9y7",
  "key22": "5ZpdFpCfX5JTGuHy6ZPSFHakUMGn2arH7yraPsEhE19thyXgx5Ph94FQyAtDWQhzS3JAkLaBpy9Y1L1rQbYpzugM",
  "key23": "4ywoGvVjYTF5Sr6hbnyfjBRVYsx4rYKt9V5YSKnh3vj18ynMYMgBLMaySKvqT2k7mceGVZDRrLeTLyqSQJ22Jj2B",
  "key24": "2eP6BEY7gcLudbvAqsaxciKGTx4tLqsSdPk2ARgb6eZA21qrQtW7vGRTawYsRpLCP4maup1AgFXX2oB2zsZ3Vhrs",
  "key25": "5E8WKe1sPQ6QBToVguZEJnE6fpenUxHWiiT6f9nBFgHk2NsaoB9zt822CjsDZ4zXFW6gpauNAA8EaQCWyXLNzAPU",
  "key26": "HbyxTb9RFdDhhkcB8w1nBs95TRddB5stJGLNHoVECcTyUZTaas6SKjDvzmsCGjU2r4C8HetTPBjNMX51V7HQNbj",
  "key27": "3rxinPtHsuvtiexM33yUpFR3unna4DYH2ws8n6P8sv1XgabiVAEK316aLVfEypph9jyp8ha46xD4GxvKSsNSqwaD",
  "key28": "21EoUyPptXVD6mmNWxuS4RiYN2hd7aG4WB3p9cDEWPmaR3MuRGzjWfvXJRD25t2rgYgUrf4qqmfMxEdAompVY74h",
  "key29": "67hV83RnRyzpV9aTwiuZ5JJfmbSiwdLwjsFvHEBG2oaQeAqxS8Yr27miiXDCWJzsK8qMCbZpr7r2xqvJ91re9ts8",
  "key30": "4SSAqgFFe26jBo4zvvCcwkpq3baDz5ySUqbY7wYqZD5bTfU22XY1gLZqAfxdM7tUa5maM9vqLPFKECj6yckowE3Z",
  "key31": "58aiudXCt2oJ9ATb3YiUYtAP34h3EF332S97DM8e9yiMc1eaCoPBEtGUkVRQ73FYVComuVKqA94AtKQ3Wpv2RTBF",
  "key32": "5vk5J2f8XeGvassPWrBVTPP6NCv4vWeWp7tgcQY9RvK37sPcCsgyb3tDnmfg41vHSBZm54PttfpuNtELqbL7QqQU",
  "key33": "3i6S4mAUbpmtDcia7TEzJFXJYxa6vp7tS9GoypK9JuHjmfH6ux5Q6y7bQGHLtM6yGASXFo3nQidpF7Sfz2GN54eG",
  "key34": "2aL9rfct8qsPMm7r5ZouW3X9WGnFnqgT7PDxjwQUMcocsjDcAywaTocGZyXBzejAFj6uSwrXG7taVHCmARP4gjeJ",
  "key35": "q2xtYXSyLLy6oRs2xpHRBLnEdp2F7LuT6feFjcYK1vABY59HG1UQGJveirBnAPEaCUJMezJwDNdEpacsdkEjm6u",
  "key36": "5G3DQVpb7yE6D6W5pxtBghg9hsokzVXsTV3hW97vKoePy3YU38fw28nC2Kg6svTxvfURmus5cBRNzFwcLtyfgJAG",
  "key37": "3N1qabpSrMTg8wt49iCTiEtxJfcdcRqSvhpELmNJSGNfBvzrxLfTcrYgk8LEMjNrXKPCka39VUSURXDKqHo4fLpc",
  "key38": "2BfASSGNP2u4b4FHGZTfAqHgTexH3JAQKqJDzrHrCUC2fQXvGy2WPeE8z8EVPAwqFe41pkLgDGn8Ep3kS82jdx7a",
  "key39": "2cZdWiDQDHMXtaJWskuuecFfpdt2sgdcGtTKEMGqK2XAU2eL2EhoVWE4VgHCSfcNCb7joC3hLAxSyWJhhTMJTSwe",
  "key40": "2M2gtoco8ywLtLJQ6pr1e9YNqkqtPn5cCZMCWpUFZFu868S7yTjSW7n12otQgry3fERzsMkeaxthh2n3d8cYbNZJ",
  "key41": "5bskuu7FE1D62fSCVQzmSFJ3oCdNeWTbD64LWV5JQ3WsdKNoH52zh5Gcm65S8XQMSt8qhRsEC8KXGhbrVWPb7ACf",
  "key42": "4DLnkEFCbCAfZEZsLgVdpK3srdp7QY2EA2pmeSwDKnVwDpNNUdzU4ZFTgmS35GdX7BHfieBNoA2pjosvV9JYyfi8",
  "key43": "qfWbdtJzY83J83B9GoF2xCwh4Wuk4Gkm3Rrb6x1jgoafocFTg4RFoNstEyJYwpEqtghgvqftmiYHqE1fCLVeG1d",
  "key44": "W7HF6WGvm28oQMXCf1cxaQFotMPSRhga9rWBcGdgiX9jz7d5aXxX3wCiAHNrj49jt5U6Tq9LXzqPHkW2dUHZbGa",
  "key45": "bWZ1N1mZLTrJcw6NYdteE9Urw6GV8NQM7ZN1oGpKeRQcLQgWNBGpHx6tQmK8mPDZcM9ShziymUM6XFnh8NkXa1L",
  "key46": "4vscxqfWFjUDPzoy9rgqHvcSZQPrhPnUhz5i8istT3JXucKmqeVdt26CenC2adYDrFoaVWjX6kKypCMdeCpdXVK8",
  "key47": "FRpKGeH72YXiMcrVBFSRdXRCZNyboraxC8USHUKyxYf2ScvqK9E3A13Jha4KKKTznSh8sE6iYFzKN1pGrCmtPA7"
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
