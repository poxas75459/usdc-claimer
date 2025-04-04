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
    "4H2BBQqhRKamdi4P8hoyPYBsEuZ3iZtLNfCn4EcLnNQrjRMhaHpkBhS6aDwFcXtHNexAZ2gx3RVuqM7GvvMBFW3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GocazumdeW4ML3hsYPpdsvmosvcSMnPFvDPhbxv4ovX1Ko7EGJeQzn9dV9aiSnYXmZg7EVM63caozUrnJgxdjA2",
  "key1": "64kBwFvV5tQD85RCFE3AEYdyCxRuRFUjnoc3NEvCSwjSdjXvhK9PgcXRpKA65QjdkfBFNtsbmZioJCqy3pMidric",
  "key2": "ytQDTMaN5puDdBmS8x2go2ZN9gNUES4DxF5y6UPSmZEiADUVy6KRfGEzRTdJKejxp4qiSkpbT1qRv2YkLwWVG8g",
  "key3": "R2BPDFxkMAKWXdTSTJi296ZrHRogPE6hXwnGWfLHZCj96nxxUY33y5nJ6dxxwNCuVHDUbvKhEeGTkL4UZo3VzY6",
  "key4": "4tRWpKaJFh5L5FpAJDruprvXd8afz6yUKdCf9SS87YY4jxcdQpCy4c7wENexjfr6ZNut1wNJxcdjrSNBVSKv8nb4",
  "key5": "518YVgzCaho38zEEmb9VzVjts7zSD6hztNX5CeTGhnfMy9gXbesfhuNDqMKY59fFbDPrKGkddirHDHeFMpdDpFBz",
  "key6": "JSNEeAzXbCP8FuCku5yoZjKpz6fcVVi1yZDYGvHfvc1kg8FW9NJuBbnrZid3VU2ZhafTGYpDNyZZZtCnExXa6br",
  "key7": "2c7i87Tk3LDPbvSvimAGoqKkKxMLwTcNvqHjnTLMweCGH1dvCHc2BrhKEPuPbxYZUzMJvaQfBXReBTF15LNZnYJs",
  "key8": "2VLMxkMWh5fXaXdMc3t7taWL39Z9j62UtyBvksXC1XxgN3KWAnCT2cVLpRV7dvWYrcUAgu4mHpvGt4u3fGd4A1a9",
  "key9": "4oDiBMsDRMfodEufruKQQn2auE1GKJhWHP1cHFaWkkqU5ZiBntKfnaAjnHPxuDMWGdhD8H4adNVb9JhN2Yy2TUJ1",
  "key10": "4NCYeLzvYwpAZktRjtEVBrV4yqCSt9BRxBvkxPkFfMgo3ZuLcpbi1KCBsQJ9BHdHWM9ZHuQJS8QXVJY1295Ruiiz",
  "key11": "5ZX6yDwEwbFZz9N25tWVB5n6Jem94X87TMF3kn4bxboXtYMq1iyS7PY96uVFMYUgLG1YF18wNM25PjMRgHuq498m",
  "key12": "hBL7mcTbRrwZMgGfD92XRFVPVfkt2rPq36UDv2v9w1Ae8DTm2qJAtkHs4DMGZopFhaHAkSkBTkWTqT57C4pUN1A",
  "key13": "5nQGUsywUu4nGEZ3prcEnG84abtaSQuNAhbhcMQuHFfp33ynTbCr61b1KTnGDM9iNJb4VivMiSN87ggyfuvfEwmd",
  "key14": "4sRhkXLsnz3t841DXV2PykorcwRGNvbAzS89nvNYJNhQhuKdv4AFcYz1XbNXuEcvsdHRgTaG4GfysSC68Tfc5Z3X",
  "key15": "2Kb3zhLfkQuxmjR7R2zxFPY4kixnk5dFPTfPg4Yakcr3uboiq1MR1wUM4Jj8WAnyJfVmQHY7Pd7oRQUQ4Cv3RX21",
  "key16": "4pq8hLhJHtLAEe2BjLLeVCc5MmTQyyUWUeousLMVx3pXEqqfhKf96FFSM1WDMDsi85eTekgtxLhEz5SrJCbd2x9w",
  "key17": "2FmK8h8ww2hKd23Y4UatKRQQ8B9BG4CgcRgB6SCm9XjugenfJSdHD4r3RtjQ3TgxLDoRbh4oypmJtoNKExdJxtMb",
  "key18": "3pWQpj4k6jmJgC44pYLT9gTYkonNmMoGRS5MnB3FNiaBG4PCt3KhRMuHH3PPcteakx3w2istZvg5kAoDhGJ1iWF6",
  "key19": "2X2cxSs8FZ5yvQoB6QVnkDesBGCAXUQTiGaSHXR6h6sj7sXstX3d4RpBUNUC25uHujW5HMPCCVndnfuamaMx1Q3F",
  "key20": "3tW3RtQixi6pkuoD9JjSte8suKyPpwxME1dsTDJuwMmgtHC1ozPtDqMaY7ubTCvbEsMp9auw1ZtydmQeMzV9hWNb",
  "key21": "E5KYkirPi9BzVWbhZtFWbrxSVGHEMgeHouxDAsffh7ZjjgGDn7qxg3XfHBuZwsHbyq1zc2BsFm5b3Zk4JLf8cVB",
  "key22": "37vHuCBkdsHqEJ7dSaXCS1mrshv2p3dRtg3FqkkVEyR48jTxG185hmPAJzVLgzL6Few6FQ8o9JzK81niDeBaccfE",
  "key23": "2rJ3G9zs2z6fsTeu9NQ7V3RFVaaFBZX2zyXCfNe7zGzmYDcXxQ1Dn7fESwGgoXeP6q9XHJc6TuFmWC744edrkTXj",
  "key24": "5Fw8YD2zL542ougRnVLSxrVn2j4NpTamwGA3GiCq3VnWJnBSUTZtHC22qKjNhgdro7mYngg6FrrBoXGC9ELUdoN6",
  "key25": "57WgkaifY9Yqa91LDSZ5EQZ2e39pEg13hLMoRBfUkfm1mqHpScd335obsxr7AoutwSUquctDp216t1dvwJ1kBoNK",
  "key26": "54xiK9Cwxevd6MsuiPPTnNW4sbS6ygbRuAPuVWiEFPxVT3KLAJnJBxXNDwh2dxJcZvonmV9tVAAkkZSCLXjEGi5v",
  "key27": "3GekMpvDVQsaWQeQkxUQJd6ERordkk5KEFnc2F6NZHC5AcqNhE96zpuw3U8BGCHMCLtGq7KzDHkgcJcvxbdyTd7W",
  "key28": "22KvNK3mqcEjtDRgXxMrQdYQvc5amt7S6P5HV77hZFsKWjk9BQqb7ffRK9AxDVbQaYF5RY2epRGkyphnKnwEFxjc",
  "key29": "3Qo6GdizdyCvpZC4b1YxBYU84KMaSBA51Bhvmy1nYQntKUXELm7k1KyuRv2KcZ29bDfEAtv2kBUbeeJwqPrc6u7D"
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
