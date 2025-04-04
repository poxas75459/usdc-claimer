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
    "3sS2bqYFWyWpzrFBu4fH23FkScyyCvirac1vG8mBtxaSpqiZc5zHaSAaKyyR18BUtmJdPawiEKbZgqw9TN91avEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iu123ZifLCXnV5HUpakogtYRmMhPdaCuWpcDni4vMVV9puvwfycy1MASASyGuxxzrpoxAbvKUBMUP4rqd4cQWyA",
  "key1": "25Gn2hMCAu9LZy6ri4zW7rf1UEDnyRqqRaDHgyboXVenbR6KtTnBUjR88UyGsdRXcGFPBo6xy6RRd9Y9ohx48Loh",
  "key2": "4tbPSKTctzwDzpF389paKvTSog2SyDw2P7MqQyRrMvxEygVEZQHbUr59XVhkBG5dBFeDfkpLSim3KGQbgVhAUtxz",
  "key3": "282111EBRN55VZR67DUg9mZom6nrxmhYZJkUyLGJha6ZXULx9R3va7LqSVEfr1FPeDTHjxjczskQAehUaiZSwcoq",
  "key4": "2zmcg7z7L9SRVm5jHwmmfA6XSeACcHsVcFwNdTtC5PPhmG4oRHGgfuUBQVmw9g39bym7YwpgVeXLCSTBCQVYYMBm",
  "key5": "5TGuCz1th4NJv3WA8GVXYWKwQuKjEuZgbgKYFNRAch2rD1gHbLm1mJD2PvUpgUEZgo7FyRraNgQCyuQWMULDyG34",
  "key6": "ie4eMHZYRkjtyy8Uy3rQ9gtKvkjEn5me4oCf882tSs98kkHp5jZpoLYhXCppbnkB2rzb41pFbLCNCnmRCPbYJZR",
  "key7": "2xs5dCp9y2BczaELmUUqTdgLVdqSo4YwY4pUcT5drS6BMKTJ74N98oQBN9coXv2s6LXh4pSMGLvweEJkzVBgX4q1",
  "key8": "3WZxpeR7NH9VW7oBzRMXAGRpTDjreMqDYgG9FXu7itdX2DmMHpo6v14gXy66DCSeFQsLmC89uqgJSwoQRgFjCoP8",
  "key9": "5iUbttL3XJggA5tmfxb8DMztsqaUJVF4RgGqgLCBGwumtzxLhSAv5PE4em2fsjXbV8B1RkYs2v7eMfnRxaCMrPjL",
  "key10": "rCbUfAB1S442hLwp6CxxtXrn6kuzKMt2yf3MzqEZYLipo1WCjo13BtS4imKB7Dwf3YtUcvh4rXZgTK2DNoQhy9G",
  "key11": "2CjQ9Ri6E44rmt7vPN3DbKnc5AeGWTCiQMvo4pG61R8rVbGoFGDWFETeRMT1X1gBWMenqXyXTE8s5wSpFP2jc4tr",
  "key12": "boyEG2FwcEaoq6WdLQ9n7DVaaoKRTHfX1SNhqCm59GnVNLat1pmsurXeCGW7uV8abmGPCdCsT5yNbQy9wLZdFod",
  "key13": "5T5rvoxPfLxsmZSctn4EncJSHSnxWnvDSw2a1tqdzyvmuZEXZNRZ2ZueKVh3LybMPcDe2B78fRp68MsMackRBfGK",
  "key14": "g9mGqMCHyb2Zv3xqrkcBy1Lv52YhYgScz8hfwrjuxyqnrgi62vG98e7pfMUagbpdWvM48ZnE3rfqi2GjcKcsuaY",
  "key15": "5XH6L3g1XYhkv5wsShrwV9cMx3khGvLTvo9M7wHucdKcnHz88ALJBnQB8h97gX8ksQrmY3CPvXRyq8oxFL2LEY89",
  "key16": "5q5G91n4T6cmLRBoP1HPY8T9qa5jx8oxHddh3ks53pcqK4E9u12e8d25VN1fZd2EtYjssrDnivBszpNrMcAAo9ib",
  "key17": "qa6gSuwiWnFmTPmNgEKotR2YW9dL1cAVkFEMFGy6aVUASoK28zrZEjCWVoHmzN5TaFvLckxCtRZ5futXDhwfBLf",
  "key18": "4kCUqcoQ5axNjYSDzHdnePn3cDys6pEdKMVZVSf9qFA28NbwZWaPf865AaDXTdv4UDY7W15v5N2f1Hq7pReZDFgG",
  "key19": "2JNU6hFLDP5JgdwhnDUszRp2TU4DxGGmSSBUDCzXGRw5reqayvdRiKx2aYgrS6BRGZLNdS12qKBTizddVpfTVgUD",
  "key20": "2nACZHNt11FNZMQnKCsfg63Mqkno1RawPuWFxq1LXWH91FohdhQBJKX62Hpm3tSwUEFeEupt3PKHFnUoX3s5D3dj",
  "key21": "4arwryBFxVDcNCHtSUfus4XtRFXw6G93URPYvftgFr23CnX1kAp5Jq8Kji13ARRfmr8zHyFZ96HJ1fogzh3TAnd3",
  "key22": "54wxMANXrHHVGjtCnRLbYjeiH2RCxekRJUmZGCVTHEufVv9FgMA4DLoEmxHjsymVgyaZAZPoW2KX5UeJo2xb6QPv",
  "key23": "3ZRrKSZtfoRLzaT6AQHYVDfF8tc8C8CpLCFc8bAbntbkaok1N7gSdcFQhFr2o2NhjLUV2teBxWA2VRJvwfeZ7dyr",
  "key24": "3VX4GAhXBKyY1qaSSbxmc8DARcAT76DQ4jXf6XMwZKWZdj54zBPARGskLsWNxTGhGFZATGUDMjFvbq6a9WTAtBMb",
  "key25": "4tGaecg7te74NNu8Cdp3RPRaWc5EhbqPkJjCcZ8Y5BAoXiu1uAc3iCL9urf5YDseYaHxSYCmnDKtiojY2EpCVHm5",
  "key26": "3R3p9AbV8v8MbwWTxYb6fgdQZMxbEstRzX1CHt4YDfXr1JPrjuWtgVeMbooqjNX6o9w5c3udW8MRBh2mj2uTojHK",
  "key27": "5fazi8u63UptzQiQwoJjMJBHbvvHwobNRqsphrccPPj65erz6N2QgWD4dwLJdLdKiWQ3iESgNGUoq7x4GqwfUdES"
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
