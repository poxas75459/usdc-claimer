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
    "41qg2H9VuWP3gxSQeC9dF7iKBqhKVRJUp733ZmdKKY9Bbo6pC88CEcDJBV3DF2W1yumZr1z4UJXDr1HxneN5U1cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VSTEyNyj81kAdT31RwsMWPpRFgzGkwuRPQiR6tE49rVrPPHJ4XdicJV5r28tuWs4eAaisJ9VKk8i85LJSPLP3G",
  "key1": "398REWDd6h2LTGSwCx1eDpXH2XVrZhLfoSidVKoHDVr7jcLLXR8bj7sFApkixToya5NEbwAosykpe2HpVQn1K3ah",
  "key2": "32fH6gKuESnRKJTDpDc9p54hvrxvCzAZtAtPWhQeyRjMb6qSY6jvr7a6BU4tphx8VC9SgCCfuu4J9cmMjADWwEHN",
  "key3": "3rLzjqvLy6jQGxzT5zfdUCccBKRiB72LAnEezezyXzyXLjZMb3MfaTYcFH2SC217nZe72rA3sEZKQs86tfmyiZpA",
  "key4": "4YoLKjzMT5fGFfoUCfzxTSH6yMn3wbS1FAhL5xBsQ598rbEDUMS7WEGcDVVyxpgHT4ByyUrggdeMF6sHxfVvzkC8",
  "key5": "5KRD9PBd1KMeB4Hkdmzhu5LJcrbpqo2qhgoAoquA6CePKNkWH6r1MLmFGGaajaWvcFsDvfGMCdDda894pihZu7gn",
  "key6": "2bznAxMJuKHaTEMYc7f5KNqHfYfdH8KzsZdtbf7CuFh6jP2koAx9zKULLPd2JQZz2FnG75dFwf5qEb8n4Sv4UeFZ",
  "key7": "5kumgEtC3QnLLp9qcpefQ26XWnNMYSyraUzRKzj5yM9DhZw3oBuz1rZoBWWVevu1uQ6h6d84s8rEUnzLwcqa3hiU",
  "key8": "25Z3XgmGnp3xaHrz5DmiZuLougKVgL4xr5qHUsvuuxuyQzVrpWMYQcDNfxa897FNXHy7nEHyvBN4K6y8wfHLzSk7",
  "key9": "4S6NntKKyfJocidt6HYzbc6sKVepftwJ8thRAX3kee4gLFCdwNw4BUHUgSiCcDRjLT2dsaKjRe6ek3aPFRrAna9Y",
  "key10": "3RfFLNm1MDLYAD2MavG2VcuESiHCPrPmafgnW1ji1SJuHBHrjUbc6YDDkjwnmKJbm2cqEBnjj7HGJVZAmAmb9ywQ",
  "key11": "5x4iDX4VvkHMHDupnnjhbCcGDmd3yBAQQRGRZvPz3HHVvC1Hgd1Zjx2rt2Miuw5ukd5nRvu7kfyHzuwqxsge6zJr",
  "key12": "5tg9u1noh73gcTFukfn3TfZV2zVwGRR5QEbpDT2t9QUQbjXJ5hZPwLdNuCLXLtSj4jriVTbjdon547BCxzPSVQ11",
  "key13": "2MKvUZGdvQ5U8N7sy3JVLYbFemhCuMzra2YgYxNjPsdWNfCp7a4FZXQNgeoxkQEYu2zmLo5TJ1EC3gNWn229MeWa",
  "key14": "3HJPKb5ucFYjMN4zAJhANM3trKqwuyG8mt6q6vXdUyMknA5rVWXbsa31D2vkhWSwyvbNHm5oDVAxGMbj8Rrk4ZMq",
  "key15": "3wdttjanXReZw3PojwtAD1eyJHxauabWfpr1oNt2hwoxYCKxqENaFK5KbWXKnKL147eYjxGTD5g4czT3R8nZ5mBe",
  "key16": "3ZMPVEHNshxZt9L2H3wfUdLLejTQPu15cHgxszvBGFi2kVfXi3shTAjgrqrYwbyZWvnzJbAEu6b2z6YYKrSj59Lm",
  "key17": "2Fcx4xZUiBoYJemKakXhGL7Qv9hQnAx4MrxBJkNRzzu4vaWdrAG99bQMBaYDeNqZ3dD36P8GXdk7K6A3q9HUKnsS",
  "key18": "2eAxSyDmoTnGivgL9a2xvqQq2URsv8vKtxV7ieB6MHxwCXAdvDYdqDDv2sXQSYJWmAaXaoN7yNLexj8CpUskEQnx",
  "key19": "3LLUgtyK88kiNyp4XxNQxDzTRbGyjMSDfM6uCfSHFrhGew4L2aAoYPQnCzZEiWaoW1oF6yNqEtRXoCgjk8gNpFWo",
  "key20": "4R9dEH5Nh1yxa9ZxPxt8GtBDhbWnrfYsbQsv5APLYtCTcMydzfgzQ4FLki7FHNJnTTeLaqTLXwNdjuBQNBgMMKfm",
  "key21": "66ZprTGYDwWTZEBaTHfhSb3N1aeD3NVYkDxmTq8CoRzBXqEcLwN86RQffMhNsnKybusT3Ng7xyQQcTaoX4H9YSX3",
  "key22": "3MXBkRixBrfsZxZpLoKiScCivH2sUhsQ9gL9F5QzVmRfS71TAyZPNkVtUEYdzbyxyTULmBy79KjfcVtMRditGNAQ",
  "key23": "54ZsgkJ3Z1PjY4mNhthghSHpdHtWjxsUQ6eYRuYjGhjg7oqTCDyEEy3UunQhGhefW2Yvovo5y1r3tzgRYMBu8ikh",
  "key24": "u5nZvp6LNYSqnY5FatWk2D7UA6kqc7myt37K3KBD6GvJqBTyyzcsq1s7NAjqn78zVpRF4DdYeGeV3zGy9pfEGHs",
  "key25": "3xZodBuFkKhYh7nJBzcov8NacgFxyNetTtwQDMd1CFqcpxjZkcKLYQLsSNCYbzq7FB8cWU3cAqySGeDDu5wTLi8u",
  "key26": "U8iGx11Ps5t72TeNv4E1ghxvXn61E2N7ArpsUTUB93yC2touCMN7vZA39wxAKDnC6GMZNuzT6SVdPCPyFr7Q7Y6",
  "key27": "55eCWBEz8vdifENDEGGCvdkdbFZGCEH4iwUjEL5p2S2ng45iVoVvoh4bgwM5hAFH1RToqgkHA7GzP7ryUQ8a2Gjs",
  "key28": "4cWJyHoiD14kQFUdjsQGY1NMUwVeGRofYSsJCQhEJr3GZqMvQGRKvBkgU8bVwazwVcSGjmxsMczfifuKre3AxePz",
  "key29": "2or5x1pX6ZCSgFoGkQ955Qeu3okLbK6ZQ38czbUxNJaFQZJJiPNQe1AymobLPjEkgiafES6yEm7G3TGmAPfLyPUX",
  "key30": "4CFNcYV3N7uhiYw8U2d4bNRhfzXFw5r7zMX5NoQ3KeqWS2PKnG8EPg5FFTFoVNUDFzJhssxPXQGYdKKtYcqhiGA3",
  "key31": "22Vgq2Lqy4MeCaZrBQ9nu7DD8R9FXdkqQHCBENm9ejN6iLNyBjxbMoBoyXQLAD3UY6Kb2tsnDpaf8yEetk3CdDWN",
  "key32": "3p8LyNYgrPoWAsRNRktfEPaTGhW7GVJJJcVV9ex4e1oac7swedVGhwwEjKvqWV2Ej1DUX1FxfL7FDyiaYGXuo26t",
  "key33": "4idd4XZ7queH3LZMtYLihpc1mcZwyFGJ8Fnp77HPkPa34PA8dPmxTABTigUsUyafEvngFFzyv8dPZruBgJWum4qY",
  "key34": "S8LXjvuMHvC1BdFX5QzaTndDeymVwh8gFG2k1TaQghGGFuV2vjwwJAETAPSAeDgMewQcEfoKNrbjYySfK14obR7",
  "key35": "4P1KeRExZ42RdMqCjL8GtoLEcREJ63JTkR9C3MW649xZr5fcD9eTigghXn5jsvC8EgRfayzmLwz5idHwukFfePoD",
  "key36": "4mpjecBYq5GfzTNmvaM8Vu7SjpDL4E2NQWAYC6BtLh2htraanqN9KRA1HsDYSjxM3QoJre69HvrZwgb6Lu4E8EWD",
  "key37": "5fWoV1wVL94AtixQifb9Li3BNHmLSb4nGVeR1BYj5cu92vmiCxQHwmY2byWcMdCJyzmeGyHtDGoqgKgKvnzc1svt",
  "key38": "5tvQH2vqDEfjwGfuEcUHTCQgCii9KLVHyNXnBozBYYPU43GY6Tgvub8gF3dBtnpvJAAUcsgENkk7DNQ2M78AngNG",
  "key39": "6R3ubaQia3nSjwFFEuX7BYCqEf3qonfMAqH2258RngLLGS35BmNXjGo9WTymx6siW3uSz5fWrdYAR8CbxGwWv3J",
  "key40": "5yc9NbvgdnoN5H7VVXRwnfWY5obWDZPWGSsU5dfMy2bvCWYDnFSnKPG9yDSYcmVbihVvdZEDKf8jHPiAvZYvgNr",
  "key41": "2GHmthqmSVt9Kq2PyQxCKraFYK5d2JEcn8G2WNH3CmhTzXsRAqsoowyJx5WdQYc1H7JRJ1w67gU2pd36j1YNA4Bw",
  "key42": "5Ua4DyUefqiM7X8i4jXoRzTzcfykX3FwUBoZzoiMoTX2V5pCyxX821QkoejxqamqmK7SAsP2Q6Up7Jcsnt1x8fAe"
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
