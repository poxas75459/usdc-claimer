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
    "3DwhVkVe5cPXHwg5WN7rYymcsX2R73swN3c6RaPALjEPiZyoJRARN54rWpo3KD6hmv8P794An17xy8SVNZxyUz81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHjcedNoYLA7qiHsZ67TyozkpeghQQ99FARJdfdkZPKqMafFxjxXFdtC8CLZvH81HJKNcyRUTu7wpzYxDgqPLV2",
  "key1": "TaJGghGERJJjrRZ1AVGviAEC1ZypTJmQUXNATJZoJ7Z5sxoueqo2A1zNU6zBb4Kq43f9yCLWFNSPP7FWyuZ616P",
  "key2": "5uRUXDZ6EuWGTqW15HTrKHN1uPrWBLY6j2PCrUdhn73ZoMxntJzVt2Us6ZN3pu7grtTqdms9x6chufkm1MB3Wcja",
  "key3": "545froUVKyr255qaFczo6pXNEbbPEon3ZTmAtN7PXcLuCnRuCj1yPtDJQCN81Q6KNEFbPpXJZQG4G1192foj1jo3",
  "key4": "5xg8ubNdnFF62d1mRoJJQTaHNpummAdNUGr93GHiexN3vs2BrPAKcTqtiintqgqVMpkbCtVQXRQXUMHoqps1Si8Z",
  "key5": "5py123kCngZCtFhGaxH2qYCBWSc69iK4aYnPKf2j6gcHjTWvcXAADZe7Jf26q8bBA2W4LgG8yocCsbv2qc6xtBRx",
  "key6": "2CJJJrS3WR7wqKga4UeeBcGZJXp4pmwxzcPRMWNcApkHqKTLgJjstpZMUBEosFyBigWYoMu59mQ3FyJqyiMNUFrg",
  "key7": "36yd8dE7vWHTwzv8K9iCy5cv6bpUwQDth3eb4vbFP5K5xLyUsctn1cZfho9yAduWMSw57gSGEv86ZGHS9ghR476M",
  "key8": "4gkPf98YvRcQRGKGj3uA53GuNLK29tQumiweX78Quq6KCT4QLgQ5fe9MCZPwjU6HLnPP5kSgQqjtxDVaHXb6HYmz",
  "key9": "3VduYnneRNMucaS4kWSJm1wNuZXNZrbNtpA9BkTHg7NooVtyKgBFuwgUYu1Xs3Gkqk5EHNyNs2SMSuL8ovZ6tQ6M",
  "key10": "3vu6iDLhgPyX9nEKK3CnFBKPDqA8eUF4XBvZQahnmHafdZ3uNxDGtH8NWya2BXPN6Qqe89WTsk5QHCkwqNz18dNg",
  "key11": "GeDv8bKpbzvgNwo5r65aca91VnB3yne6hseECA17fTShztwsXxBubFnve5NnpEozf1SvUnWtsRagx1KxgSoDxB6",
  "key12": "5UZzt7szSwu1HgnTyH9eCAX1NmBJ4B6cjqQMVc1w9CS5UpKuLA4R6Sqv392QfXYn7tGZjim6RefKJF9rK1tqRy8p",
  "key13": "5rwuoCDKAjovr2nXmapdcLEPxYfjhGuLgN6LwEA38Det9d5GuF7K6tCjGko1otQqz4MFKdPJgryqYCSEcz2UoTq2",
  "key14": "2Ze4amxAgwTdEUg8h8J1m6km1LTGmLe3Cy4MfLbTawm1rTMpgMZhSbW1Est9NARsbbwvaWBHpuLmxRD3mTftrYEW",
  "key15": "35mTEsusHsYL9wBTgcdWdZ54kaJZyuuKM21kBWkEPwg8HrZM8WyFwNkRsCUwjj5GoiSuisE335XKRz3szRbtVtE1",
  "key16": "5LNnFrjHWebPxjr78Jq2dKKcYDDPMZVSCGSfx1HtCujiE74G1nxwp7amsPA79RY58tWqAqX7gMeKqpL6w9m2uCKx",
  "key17": "28cnBNhGwug6mt9McXhLGuJpXvL9brxszXwVwhnaQHPms7jpELFXzH1BPr9BRmu7qz96RTS7ictqvNvER9mFN9Xm",
  "key18": "479byV1vMPGYY4eo9eaZNt4aJPjucXzVB4CS3GKdnSRxUaJmBWvaCyRAF5nYrWGkevFqpmZMGwzBq23kAEGH2RNU",
  "key19": "3vte3FQzAL3S54kMseC1x4CBQbQv48CmSgWurARakG2FnyiwVbTx7axAmHgqtdr6rm9QLx88Xw1A76qF7MFCjitg",
  "key20": "kSAAzGSMSJmrZt9xiZN62acANmFkHGoR6fMpB2XhMo1oDcgZSbukNMnn4sfsRPV3EKE2Y32ssKnFxGrWTgw9j5C",
  "key21": "3NGF6btgTsTKQc99qv45ZmAGRvrdvh4zsnN98CV5VXbS54VPYFSxDdzczUd1ASnnSpFeyZGiUHHKwee44SdVCCRe",
  "key22": "5tqTxiVB8NQdUuH8sxBX398zUVBFCEvTs8vQJUh2cpKdcV8UhVkC1WdFCeNUJ4HdW1M6pG5xAyRJMntr2ka1Ytd",
  "key23": "5y2RReR8czTkxYuKn88tbYeTWXh691f3JtdgnAXHzQw7LzasW8B9EF1YiNsacZ4HNK7MQXhJrmTFgDnN2szFNsGL",
  "key24": "36nvCYqt31ykJarqWKwuaqVX99cqnwVm7v8JDuqwmws5nRLZiUubuE24uh1VYdhwfPRKLdudNWvvnXM12aQGTiJU",
  "key25": "2DRaPsFTMYoD6sSajnCYNQgoiqX4ww7jNdrFQoFjtyPXc24NxGjXP5qEpWw9gkHDdPEgpRNE2PBs9fQRDG6v1yZa",
  "key26": "4FK1t4R3DyxYPLQZnXGULqaKnEMU8U3shBuK51R3F7Yg92S6kaHfyLHMiguCL9ezUAMx5j5o1QhtCVgkDU94e4o"
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
