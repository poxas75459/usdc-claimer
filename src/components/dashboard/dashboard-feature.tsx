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
    "haUJ8MAqPMzLqLowBJmvQzQzMVc8BypKfSXwK3ei9PqSDoGbf1g5W9HiwpdLkkoyt6YBmUWjmZq4WEmHMdX8xqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WkNqNYbSWh6s4SGw7jD7wQCASA3NKbKpbtmUjh11N39EF5DLqQaZap5yzcBH1jtq47Aeg22A5vnaJ8TMgbMcANs",
  "key1": "2kCenZv3fq5KHsKrim1JZ3b9QjtrCMwzHrmxbpBK8rTcxLsH2ccN5xhGkKsC1fzj8zJu8rDveUU4e74gCq7iHewy",
  "key2": "5cX6q7ab8uVMJYSrsUN6fDPQpwBL2Va9gJMzc1wCmoZ5yAUZyAWJDaWzJ1UCt1ctfkSqtKqPdJ1T2FKVbQKS55Qf",
  "key3": "edRSsaiV4oJ4x8xvcBjhT5SfSoxGLaTgVjXv3DMu6kmhc17j3gnoyzCbk36uxLj3n75w8hCyRgxgJz76RxMzHmX",
  "key4": "NxXmmpHDcNNYieYH6PoujpLs8PTmk4awAGbQ2BYk6vwRXXbJGeUSrugHVdKhemdsyRHKvYS4HxVqPoSRhqN8uof",
  "key5": "56uTgwYXNVuyzmRAW4NQce2RtYyJuGnFjz3PdNi1vq4GgKAuJKkghdagPTwdCM62uo21UmDAdjXjATSJJn6ZYdzh",
  "key6": "4NT4jJRA1TBs4zhtot9GM2s3rTJ5R6rcUhfUzEopwuLeNFPBUGWR11wd6f5KqqzvqcezfFX2vyF4DKzh41AUTWQB",
  "key7": "5vfPzPWY4GF5N3cnmLAT9q3LXf6wsYq5P3TjNZkcnHYRY8sbPkTZ2Uqn2AAdkZXTRFrCNP2XifFHqtBWmsJegBZS",
  "key8": "2tVCsnjwbAooG6Zi5Z45gyS4Mc8FVeXDqT9Tg3zb7C8z3ehSJCAoGCsAGz7fbC11FPQjFGTv2roN74NChGxia4as",
  "key9": "65DDwRsaiUanVMv9CzcFz8E7qRE8CGSP2CNmeJZP8hb2BoxctyNHjZLUjj9majXyfGJLsvzk3vJHzLybzctwb1nw",
  "key10": "5QUP5rAVWfAKCUctmDsTAVaMiSMbYGXfbgzwJ2SJCAEYXdbwtp4pPcGgRmfCX1TkC6oJkqd2sqdeesG8fYVFb9N7",
  "key11": "4d6uCogTo7txk9nxQXK6wB7hpSA6v7341e2J6ECuPc4GH3saf8VYB25w8VfM7abBKVwFbyyj73TrwQvxPTR5xRHK",
  "key12": "h3PzfujrnT4Wd9StxDHALhaVkDYnQC3pMc2uuk42k2rTWTGvuMrB3cRtiz1m74D9nS93gzVFSwm7Y8F3hoXAcbC",
  "key13": "4rnxFcubab9iijkuhpjenYZNrot6WLVuBxPL9Fc9dAy9WBR6Lbx47KjVqtaW42evfTwTDUYui8mS8AzjB8AeGCLU",
  "key14": "2eb8sKV4U4PkauJH9LyaerWuoXau8vK3898UhqK2C4743GLUG4qQEGnNEqtPHKzYkdGiEk1S4B4vj7XtpcJf6RqK",
  "key15": "2wx8dz9STXJZPsmVc1TXfmHxhcehCZNJXpwH4upS18mLBGYns4nBB4pMUhkanjM3KC2t3grCv3piS5ftHGMeqx7p",
  "key16": "4g7Ung8H8shk9EeUpwQEc4CxtS7y91iAegMSVsJdzpphAAMtHP2Bd2ynBBeNobDTH94QbZxboUdaSK6J1Zi2ByC4",
  "key17": "3kb3Yj1sgNsi2xLQYMKfYsM84V8cXPMiLEV2nid9nMg1iKYhc51fPakQHZAaJecxMyyQTgtcubF2KyEpHwC41ziu",
  "key18": "3q3CWysdE3xtE7eoPcovdZ8XRb5snL8DzYya4GBppeAmAZ37CEpZf6nVLqXprwNbjMxVsEzdC1S5H7U1hmvVvrgy",
  "key19": "3sZawZRv8sAqTEtDVeyii14rf17SYUM56iYruiJ8SnqESHdvwMiyfBxm22F3zEcpVKRHk2WXGWRPmWzWx9WPwVaA",
  "key20": "5BYwRBrCn8qXPXcEbLiCqtQRfvMsF3Pbv7czG1L7UVyzP6wmAEuM82FbHYF9Pr7zQtnqrVESDShvTDHahJ2736UR",
  "key21": "PXABC5taFWBBmgW2qe9rbbjChmnaAtu3bhNFLV44FFCGbjuPuDWBvH2oSwTubfWFoxsue7yCzfyhUeXB86diuvk",
  "key22": "5YQCkfeyX63ccrC6fB2ji4Dr16UZCUWy27JKbyQ6Wfagx1AoKxv8L4NCgQxWmA8PKz5Jmg6ksVmL3BJ5mrMxT7Ur",
  "key23": "2iGje1YzmVcYFd39bKEuknhCjZN3pRjEQt7g98SLcXraTYwEDhQWS76xJtsJfLD5sbtcLj1wXWr8fmw6fRQA9C9V",
  "key24": "3FLgSMJXYX1vdMNPohEe5LBGBVvAGNbiJA6vzSB8uDoykPrGA7P94m3KBojFMGeFdDGVLQ4JMuZJrH5LV72iiRFo",
  "key25": "22CVrthrvSJTXxWQBiMFjcX1hCwN4stMaWjuAP45g5bCxiXL1GoAH9bF4AFckCUnpQ3Q5PVcWbQrJgWkAZYZR3YF",
  "key26": "4R4qmBG5DaPwaHQ3WhtKHCj977yoaLtpngYUoqsC3e1CJ661SnBXvtPJYbLcc4iNaAZR6BwNeKJ6whwGTyNqf9N9",
  "key27": "4NEXqGDpr3CNk95KP2K2iGgmGh9CfYeNAFJAom3o2bHwW1pT9L19H463g9SGEk9NRMMSh3L5U1UzBbLijAo3AJGR",
  "key28": "4PzWfskJL3mNdvp9divwTXZxrFByzyCsQ4DVQSnz1aKYJHQmUN314vJz6hGgLJo3r2e2uRTHx4S1Ega8Utopp6PF",
  "key29": "3AWuTwF87rTD8LbNzbMCLobDeypFjuLqg6MVEyjwPeS85B13nK22vnB98Y9mR1o93VmgMXkPF5h7f3fRrWaiz2sc",
  "key30": "337J4BnG4F2G5c62LVKfnXaqxZvog2t6kwhsuxJj64Azdja41tZnTw5MCjgSQA5YggfTk7tMjdrvw9q8MoqR8Fga",
  "key31": "7dnDbyj9k8cpBTZr7CvdvQq9aFsnifxJt4ujEfMeopmJRjvTUATB3LZgcxTs2CVz4xYfNYTYt17r8nXjjCWxqfR",
  "key32": "38G4XK4TyKgGKsDuVA1sd415rPnvsYXJpYpby7DrABY6nAMf7ZrqTk4MTJ9QY4K2GwFHsZQE6mgxh2LFtzmp7vCm",
  "key33": "3sR9sXsmdvrF6k6ov7TGodztM8Z8me8Q19SbN5JREnCAAjZPty7cCcpRh6LgfZSSayCotzcxUGJpGesKhXDGuQ5w",
  "key34": "4uU1rtfB51jXfNSM7YAPwjPQnBtVei2QWkRATqxvFZfqFRWsXUyjXiqEpJY8j8uM1BBj2aXsmHVF53TKEoi1Xguq",
  "key35": "57ymWYjm6Wr4JybXTr2XkZDi8MRt3TjTkbxTNr6nuQi9DPBCvdzYXHEYGU964UtqtvJXNqFV7jeF442Y1NLzCqvH",
  "key36": "5E1V8sJTTKScSjW6QspjzFPsCPZRcCgGinJnuFJb5txtNXiBZ4eCz6rruFDgzUoCnJGYfVCZhrhefq4FoYq49Qt5",
  "key37": "vwsaqrhKZVaB6dyWMZSvHZqqcvfDXQtiNgRdzo2K35HmxVRUrAHTSiJxEfkhip3LutHT1Svc7hWPr3GQxrr6XeV",
  "key38": "2xD1RGkY9Xq3ZYTvXew4BreUCh8H8DpePhz2QUybgUFq9jKjpd4o2HZLuJiChRZ6VfAcnNtihv7wGy2sTj5BLsbX",
  "key39": "5N4DADoj5YA4YW5nR8vLuZLUDAHaSnoD67m9iSKdLM3TcHx73pmz5tpDbsqYt5NmrDhis27GvR59huTt91w2wv11",
  "key40": "3HiAwrZ1oRNQDNdJcxi4cixy5CSpU31wTcq2qqC5ZxywE6S9NjzbiPokSv55NtrkHUqSH64FYEt675R1YEpyaVgv",
  "key41": "2wY2ZYZ7o6iZ1gBD5az9WYZnwG22gvFu8XkiaBnPshikBE8oHufmwcMRGsKb5grTcpaaXNwDhn6TnUVtGq3DQfkX",
  "key42": "29xeYgKH8pYAcnsra26hUyHSztRYbc1XihCsszqD8ujSvw1jZ3cPyBTSP87EY4jd9rMqwuJEYdwQR9sieV3cyWSe",
  "key43": "37BhZPikXZ2D3H5M3RfG1E9hTAXJ6d2grLq2b5yMi62UoUeX8fxrTG4sGG3bqigcaqAvmkc66TtDXEsXyP9B1irr",
  "key44": "4EBAqyL6Np8ncnLPT5FcnuQjXzfDn2kdupAcZe4WHgBRVLzTEXCDXbTsTSvSmVgowCFgRapmfZQ2iw64DgS5nYfm",
  "key45": "61zaoRXhvKQ7qcgoPsrsgBVcypm5d4bsH6vDebGCMTg86PtkG7yGwtZMqLvqxM6PRt5iqrGHSdUFZLuDykiEZui4",
  "key46": "NMLQMB87RzmLw2tSoFsBTGgVou7cbywjmkDZMcdcDJsdAYgmrc4JCDgyHcgpAp8qAcvdBvy15p1T6ooUscZvfbA"
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
