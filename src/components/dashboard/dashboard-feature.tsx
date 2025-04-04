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
    "jPjuHNYJxeDfXRnWYAW2MBACaYVnDznSAGpHSnZn4pge35TpLYHaUSVh1LgTdehvGTZpDhKtFzcSvujYMLMA19k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWmW6yj5z98zt2J8YPBmrb2LcMmMQmGFjqJd3PQt2aTWMvMXscZkPi2f6w6vtnej1njTJiUYAGmHC5FwbgoseK5",
  "key1": "5EkoMYpKoiCJRj6Ga3hyL7LKKC81eUPopdDdg6nrQunAP9hePMGwCH5AhtK1XwGHWXwiU6o1tuzwHFxBJoDmPRks",
  "key2": "45tv3VBmd1KHbjTrYB2jjtwtsQ75Zw4YesRqBsQ6vrxdvqpWeQ3bqh6syk8RqstqpL2AWXQkdJc9dPiRgUtKojQ1",
  "key3": "v4EkiNPjkJsepb2s8QRXqkRJFjwpy2w4KtfL3V1b1UETsQTy2kVEwmXwBTX33nUvjjsPSXUcx3TagV77Hfr22Cp",
  "key4": "5MK8YJ1FN353sp9vuc9U8DHHYxFQmEiGWuj8B11V81AGVGTnzfeov2Ad3NWL58vVUXU8rina9cdDJEHH6ShrJFSj",
  "key5": "i2gDfFP9RAnST16Y9YdUqjNJ8q6uiw2nUu7EHegaPK5WAqtEfrxNjB2EHehVt3yxqjHUKWLYmixyaq9QvkcXT2z",
  "key6": "2qW6PK6MHX4pFyj6yo1KEbqbhCJqg4sdaBiHvqaCUtBNFhdLRKfMCchxo67M9htJTYBQdFBsSXEEH93WKrPsw1Gr",
  "key7": "4A8T77TaiCmVPrjm4ZkkceV6RpCMCdQ9EEjnqU1SqvwhomSURsX6rXY77gQB8oybafyoWy8vmoMrfLvopSCCFabX",
  "key8": "fpRVSbzY32CZpMTYQX9CGg4rFNjMT5bSqiBpo5d2vLVGsxmqMBqxGUWkPwRfkKKikefKEGt7waLJJQppfPzk34T",
  "key9": "3wYMCm88oB6fPWWnnGy6tDVcK5wHAy6jWJqfptD52muQFs6VLac5X2XxXXDLsiovA2iq6SqfhHM1p5X9NRFwYYyj",
  "key10": "K8bc3rtvvamCk1PffVDJ8fsbN2CdbCc4a2gBQBzQrt37Q1GLHrBGRQw9XoQPXixCEVZTjqVHdj6TRVFz5q4oiMA",
  "key11": "dTKimPb8hjTCxbwTGWibNPu7kAdKkZbLyh4w7cEbvc7hdjSMrQC4cgWxrofHhNYdyd7o3kNjvWt4TDwVeVttAY9",
  "key12": "3tsexEjr6dgCW97LZ34HtGefTNkEw92op98XLkSAFAfoCxHuruGi6sJfXeZuakcUrdkHNeghEeh8DhNpNwaYeRDi",
  "key13": "38hM341Tf2VdgAHaymrbsN89P1V3wSMJf2Cr4jgU8QXj1Kah5LGk6j3VtNSN25dFWeBp9fqen9gufAMCw4QoJKPx",
  "key14": "5FByX9Yq74q6diERPyzqoEjF2UGp7uytG3G5gSD7wRFUcMUk3nTwrfqDyn1STgDftFevi118QfX8ZCudcvUGy7T5",
  "key15": "kU2CKQYAW39Lmkwk2qy6PH4gvACeJHGMjCpoVPCd4u4HWoVFNtzrjJLzFjzjpV7U5omPNmaqwYf8i4pucoKZbij",
  "key16": "5qBusMEn21TW1p9bzjPYaVTGLu5LBB6NfeGeMHAda6EHqkm9YYPJTr2vKvT3DB78kwu1PzyKGhehNZ3Ae7EcC95W",
  "key17": "5JYUwTNasVfDiuhi7jwpi74ErfWxk3oJh8u6MtyPEkuTosev9stDWtwvo9H4eAcerA3PmEVNo7Zn9KQNJhw5gsYS",
  "key18": "3WNSh898FtfvNEML3PoTRHcjHxZE7aVLbQy7LxGYL17CoNoJDyW31UiX8kjYcq8XKqyNxWoHkSd9VdKD9BM45fNU",
  "key19": "3DMF7WTwMtgMoxmL1EFTiwsZTS95wko3wr939NWjYe4YCYd1giMdXR68SGCFb7bviz1ZDLH9f9kmg39Q8QPu7UTy",
  "key20": "pTiSjevNyo9zgXTMkbYKGMFPVJynHzNWNrxW16UqCk3zKktW4RHrizrdDcXmLj3tpNKEcDdcwFGogVKZYhH275y",
  "key21": "4inTjEDdsYxHLwB277eQHuLinoFfi126YU1XBL8QeyuHNu49dHHShAZoM9WtGu1YsmjSJiW2CEEYhG4paeNnD2qZ",
  "key22": "2mZmL4hEe4DQzPvaobwxFeuaaKEeiWaMRDDD6VxNvQ3xuXxS7iWH2vqoKybb5WcCDCeTtTrH4MyWeZFe39U8JGu8",
  "key23": "5SWeCsfjbR8yH3UMHF6tj7UE4vd9vQoud2BdXu7Vc9Uk1PAF7SyEPPdogC2Mf9YQR61BDZKJGJGuiC6cBvH3LSH8",
  "key24": "58L6XnewuPMwpYZapLjeVMbkr33WXrFMHGmysimiKQ6YdBDFpXHtYSnsbp72Fv89jCnLWEMovK9BnTR5gde3nKLY",
  "key25": "QL5Sc9K3YEZsbGrqtECLZ18srMoAZin4GowKQhp3KNvM1aEXTpmFLGQtnuRAFjgLWnHQVn7B6Z5bCp7DoQ7zRwH",
  "key26": "GGL3zRSqoKgWsBKJvEQnKM5ZqvuCy9N5PWFHCYgM1FmB38JgF5uTv1sUckFcAUdsswH7a3ReUTsot3M2fXjKitY",
  "key27": "5S5VpKQyfPwcVR4icoZL8vbLxdNQMrqZm7QjLCHEsZLZeyPpFFsuUL7smzGYPrnufZcwrUfqT7JsV7e5gQnCZhgj",
  "key28": "3NTZ2Ur3v57byRauzijtqFcjpN7EMaLeCL1xRcUiiDup44d3ct8DiGLXuMgYq9npY2FV8CGCfV9iP1eKy7SRNKuw",
  "key29": "5FCEXxZmFKK4TZoNhyGgu3qB334M6VLrMQqMir9u5WcHNYSRER46qofN5ACni2BviotiMz12FacDbHQAtoVpEHoR",
  "key30": "4k4aYxoVSqKiooe1NvAYd2sqcT6jDTV7MKMz9LV64qA49M6fu4321LLxPWTuornt3dhQfSq38yrqpCt44hpZvLEX"
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
