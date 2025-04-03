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
    "3tH4u43ddhwpDqTXY1xPkkGGL5oPhZ1y7hryi5xKYSuvWNLJ3SvMnecDJKokMZgHgZtbXD6wexrMJXidQbUvW48c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xUySqcaWtSLVVtkbLaJoQkG6zRSAaSUDErMF3KDHX3UDChuQP5ukzjAB1WMg7XbCjH8QXU3gowBnPwxo4PagiA",
  "key1": "634ye6revKn7Z9YrvvhiYfJiHQf4r9WLRKDvFo8xD8UbBjwsqQ7yZxqUWv7smpUV8iQEFMh2Rjt9kp9g4VZsa5k1",
  "key2": "3fAo1YzV4ZujXxj77quhowqubqSkur7Pf4afcSLo95P2cG2ekPNTZjTk17jvLa26BxxXDZga5r67JXCzjnitp7FZ",
  "key3": "uUzHuiuW4ycAW129BeEkMfjQKZ7CyZazr3NNjbYu8pB5fTRQpt8tq8LhWV7j6hwPn29QybboMcn6YP4vaifKCru",
  "key4": "4ZeBz6hhvvxHViF792fuR3tSPe6M15LR7T9qfDV31G5isUGTTUzA3GZ7QeVKdAQ7yYBCLkWejerxSSQCCRjNV3zW",
  "key5": "32xJExvgrBycoPwtyJxHFuL7xvF3gvTaeYC4VaRT3GVNNFxm6k3R3q4aUxPCyM5BWwyPHsBsHcTeH5bNQqkRBmqm",
  "key6": "2JUdsLkaigQ1VC7hNN3zdLUycHyRiTGXxq56epxehbHvFc6xN7rPrd6hmxZJBTBq8BA1fug6sgfGeAdHMcwcpUoA",
  "key7": "zwm4FogEGt7WH3rSjBGiHiNNMDDExYWtRNsvdLYeeEwCkSfGxAXB9AxK9kUXBMuDkzbkpxrY8jBCZ3dG6Fcoo9c",
  "key8": "4JsbH92KFZqZWdix8wm76u18jZgm8Mx4KsToohEhYJMFAc7Bei5H784c95qto6JrjXPmgHdJ8Azv91nnx3wEzd8L",
  "key9": "62WkvN375E2GtiZgo7oS5bwyodjZsTk2GMbpugcpgi6K39rU9t9oC2YGFtN8H2QBYh98yp25JfuHAWoFXbwDoS18",
  "key10": "5B7Mb7LUEL5Ts4hXoK4yUMh1srAZHnjsb9eAGhA2MzqVrc7N8NzJgFCsiQQs8BnvP6qGso586cTv69b2QH1YauHE",
  "key11": "4wHLQc4TdZFBNhwfyNMAY4H5YJ2mWou2XFLyP3vH9UNzbM6qk1DsEeY65dYWAjAiTpe8zanvJk839ECaMM8Mbdf7",
  "key12": "2RYsiu3A1QTnLX1jEoTLjkKCVYv8Ayri7ooUoLgjeYa6xrihx4UE1LGvM5Nxr3dJrpV2L4eHtevQFvkyLHkutBqG",
  "key13": "2EsExoBK1zMgD4oJsKspzUQBWQuTr9PteWcTckjwJeC9WCHjteKrhJnQb16gnFDj81eu6PD4fab6yLFR87fEPD5J",
  "key14": "1C1z6HnK2hjRsFEhwnVZ1yXwU1KCkDy7ueuhA1NxQRKTk8VojbqXV4F7TYkBwmY4MGjd6GirCtrFEbQcMsx2zfh",
  "key15": "fcBbExCwpqLBM7xec7zWFY79wgA7kS8JBryViLi54pSMdfcGLgbrAxJiNXgXmRsyX4u6X9mHCq3CePPTb6hyEPS",
  "key16": "2WExoc7avGuLxmF5zCBRagg4ai7rBRRBa7Ny8t9Mf5AkeWvm2GFzAyuDmBvyKrvWQFbyaUHtdvjgkBHiERqFd8Se",
  "key17": "Nk1WsRFMfLaEACWyuNSDeiZyknn5SN86m7m4QKVGJ4Bgykzn8RypVWnKYNNhz7XGC3f4VeYWYaTYZ5cXpTkesNw",
  "key18": "2qgTr8DFtcLPyt74E9yw6ZTzRJV5yDNiLY2jQMH7VU3QnPizwhqRSB5a9Koqniuo1j7dhKbrL6VG2sh8qcz529Jh",
  "key19": "3DwGQKvsM4rjFc1gYhxXTpVqHUcKiF5hMeYJ3be7Y1ZoqEdqjSq6LQzcSJvtNqBjVzHoLvAPZ84s5dvpwD59ahTp",
  "key20": "28SoEPfgAmf18QVB6o6fxe2Ew9T2fVrJ4EEpo4hG7qRoLgzm2gmoLtd646qftxexBGXWas3vX8iH6W2U9YokBtid",
  "key21": "4KFF1Lj7FXMLVeXGDxNYcWHywtz14AkTmKc5e8HRJC6vEzQcPRrNKS6DVw8aYCeeUA1M5FiNZehMwXmQBUhEFAFR",
  "key22": "3ReAosxgzEQo1ZwjSbG3VZzVqoeRFaUbK1Qd2yJ5ABNspm6ztJEAqpiEpdYp5J1gxePbrDJhp7ZNPkV3z9RbXSHA",
  "key23": "4RUohr1Xo5pr1zKVV7EPAmWKJAnbJv6XZEVU9M2HHwf1HRNhzHvcaFnn2m8H8FfuY4qxgh7TfMYuKA5u7YZruXSN",
  "key24": "66ojhSqc1katpKX3VRUdeGbHc6KUbCwM2VUAsg3Let3x55j9SRh2997yA57XZ5h1QtLDvz6ek9quCuNH2H18MA8F",
  "key25": "2VCZtnePMG1bpz3CtwjqbK69LcVhMLkBTdKdb8kQqrgnBSCCLctBxLWSQN4TXDmAWNRvfih1Kw6yMUbNdwb55TGd",
  "key26": "crti9ykn5XcRNEFb1L1hd9qkUoVR76yBz6r29B8xcB5T2vVMXbgxHekurc64APHPVx6cuqdULyrn2UvAy15AZf6",
  "key27": "619ZkNnmBikKdFXDzFsCKh1zHE32XkqQeUAnRJcAturyBEXhcxpeb5KV2saP9x5ib84XBwT4Dqkk2yc2m5JEhsvL",
  "key28": "29UGMGHQYdQrAkFtpQ8DCSbBZysZnghWxU6Nf3vRw5J3eKBkFuqB3aHkrEk5o6F41kjjrZk8mKUXMnYwni2nGvk2",
  "key29": "XBKwaAZHREks4NP1vR2eDN6p1FwGSiE7NZHvgR6Feyb7GHeKRkyX2W9dbWTQfkCPJTGRjZFWNQNxAVM3ksoBKEP",
  "key30": "YhXh22bRpBpZmGpEXL3vBvKSsyTGapBXqiA5TViTyskUm8RaYRtQcy7qUQL77YdjKGXw1zF2euKDHm7PKW6j6Tj",
  "key31": "5fLEtamkmNeCBkrDtxn9iaZ1AposT4X3Am28MVpxdmkH1T4pEvMQ57b1h7TJNi4GLUg3wKtQdpYC1hxUcZMST5fP",
  "key32": "5jGsZRG7Sd2SpetFgZSECfzC8dBzrEaHRCGyPqZJTNMvX4HHvuoTnLecZU5VXct91D7FjuprgBV5bWdb49a1TepS",
  "key33": "128cBXtsnd7P3YnePy4WtoHkQrUNRgRqBFrsmibqdQUhvd5UTG6aJLG5C1Z2bcveVdFsUhrf7nULNZA9UjrMvdwo",
  "key34": "28QMq2wC2qKbWPNNbC8eeRGVGh9uzJQeSqYamyiMgSH744HmFVDQ5uS87J7pZvvvCUs3u11QnM5vQaajjjWtvL9L",
  "key35": "21qU92NCHg7vgkuUooSU8epGxA6PbKhG8DAKfC9aA7ZQWSGmSoBMHVkNHN2XBHBXu8mbpfqqDdqPWMN41HPMZrqk",
  "key36": "42MLrrpSCuSVa8LtmFUrUSAaoYgntY3tLiupKE9QJ1WEGLrPtDQLmpjgDJvU26gw9SczNG3xP5bP2LuJaabiWn1s",
  "key37": "41oKSfWXfhdwL4K5F3DRie85yJsP53oTeXsL8e6yySHQEbn9tNmRpAFBd9XpqeADYgM3jc8ewWk2ZQLRduwoBfhA",
  "key38": "5jgJygTQuRefs5bk4wrDHXPUpwnqcVnDg1pXFUs7YSnHPj2XwNnUwtbZW7YNCz633ZStB77deT2YQFRYYkLMzFaX",
  "key39": "2QxVaFEjTi29Lh6h7xRBm5z2NKgqXtVVQHxpoFA9da1YXA5s1SoQfytmGbVntu9TMgpgRQh2rcq9dcA2FKqPcxFJ",
  "key40": "3THqjjHeeqP5x9aMnbVxreNYpCZm3S6zFczKdiKTzeKViVEnsuBUiz8RvdeppqPYK5QXARgCR1CbP3a6RQ6sMXZv",
  "key41": "9ci8B8Psj8PAGChV19JPoG2iHVtekXGWnz52x9Mo1wiHaaYJiaueQkELkVtuRHpM2pYF7NgoRXuDvPsKzRXK2aJ",
  "key42": "4nsRjwiwP1yMdPBKLgqFcahj4DRRCeeLegqhPoKkZMViCDnZsPbwgRfn8hZWKxvi71SN9mMvxSEkUMTbiyR4tfTK",
  "key43": "4jFR7aV2gdRp8uK1C8qXcxwBPoPgLDR4PjUXifzeXnTsJZMR83UEXEodmhSnhZfnvT8sUgSiStdcwbfYH4UcBqdw",
  "key44": "2w5sqniSU37VECKASnmebpBaa13GPe9FahtgKRJV2Nqhkh5AmPaEMeAeRDnMnAZFghmGipM2ER728cqSZLExNEsM",
  "key45": "4uETZ8HDUsizshDLBxPaFEBuxxwBfDxWSwnaHe846VS1reAnD3BSnE6k3rLe8dShvsMXHauDLZTLowARPGA7NNK1",
  "key46": "3HPLwn2SXSHR8GBMcrEXf4gpUacrkj5YL3FPaGQ9XPYoatGgFdQmztHzcbr9dUKpNxj9Lw5iRpapnSwQeXP5EwrJ",
  "key47": "2FaSKHdZrsV7fy9VETJYkQoszApmaGZiefA1S235SQPvLdEgr1ZBwhgVSeey1HsyU4qqkP74h1iaUpsYkPrcHU7S"
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
