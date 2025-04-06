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
    "2GHqDZb21TVBJt9vZADrQsqzQ7JdzjRcNhD9dQZNKpBZKDLfuxKXYeXbLuR36QsKa71rQEL3NDgpt5dp6d4sX3cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JzUoWLLfiTAGh2Lar5SfCJrxRGWYXVAegTKRuGV9HMKqK5PjK6tx6kWdodSgJCN5duP7ameWJh1syLHJHisgBR",
  "key1": "4fMTLkUshBDGXSyU5G2mdHxPy1jsStg3vzkMtaHK25x3godiY9zgr8z1bEEW4moA1Hcjxuq5CLTDLDguKfjgPrqx",
  "key2": "Hdk5RouN32NapPr8sgQuwrmVD43K371ASNqzeXEDg7ZaeTLxBsdsSr8GAELswRc6jnha6fLu8vPPtxEvEMA66hF",
  "key3": "2NMpsYygTPeDsXHKiZz4gQ9bHvCxCZ6NbKwa5HMsk1xfPAYQM7E8NooM3mhiPVXfFXQoQAp985oMJ6vTruPmABsL",
  "key4": "6hKYSxeCQWtPzaH3quXnTGQJ7BvhHmXiqaVeMbhNea6ChZdyAQUpdkpy3UVNRPE2kwSwTq9Z8L2jJLAQegEVmAb",
  "key5": "5YC7vfNshXfkdFt7zqVcW4iMaX1JLEZG5w1n9zkBdZuaPPZ6pESiEmqqLLrkf6c4jyw7B9CJBsQhyDp84RhYbxBH",
  "key6": "4oHEyr25HrFV4nVVkTHaHZVfi5tYUpiTrE3SkEwcTrbVDe6HBuztYPh3tm2bAaN9xTH66qofVZHJUaLFNevG63D4",
  "key7": "5n8xxTVB2VkDNy8qFnyBdsAEMxHnbLEoFGcHhuVMGSZDWdR3fXYWFAnk52J3ryENjd1e7jvfJWyQLusoRJgcsjE1",
  "key8": "33nCRM63jt3rToQ1GQKaYMD5Fzwnniu5GETFpiTNdUCiHJwWxAi4fomg9J1Fp2edZHSaQ3p9xZiVdn4EtbN4ogAn",
  "key9": "3MEMYXSWs6tZtngQLdnc1CDAn4gaB6DtYPLvmG5fujrasjKmnZK1N33LmnHYLjv8Ha3N7pNbBDxmM7h3WFrM6ah1",
  "key10": "2FzYxmDLEwgRC57fVFEMWeLJy3GdMJL31EzxiSWWCaj4MVkstK9R6ybvQyEPEbLkRPrTfaVBiB1ePaLN2a4P43gy",
  "key11": "3wXQfnnJ5khvqneHTDSNXPa4sHTS3jNA3EVVsi7QBTNukJhzY17gjCapredae3HRczyZjFiAG4hy8HXJeDdoXjGC",
  "key12": "3jsyPX1unkwinDBLrGs8xhxNnZ5PFb4NrTY8fXJAwkXp4rW8B2sv11r2Z5CR3ZwTPD61CPvEyo94Co9DjRPN4BNu",
  "key13": "gaDYS8GmeJt3mmy3qWXCdKMXEb7bD8kdRg5Vm2P6EwEhfDe4N85QtrdALPLXpvtcVJATW22kNwxWM5TaWvDb4XR",
  "key14": "2tAPtcsE7mqfLDoaHRb9R3eWjejVZusqw89cTbL36oY8cPxh83ZndxegTvTaMWQzmbtcgsrMB3mDXQ6GrBj48TuR",
  "key15": "5NhzWofhj2RTg8g9bM6crRsXHmwKhfmgE3w2WvoUCBwGSArdCTQfU3jcVuSVsNxSrzyfTghPNYry5JURybh8RWAo",
  "key16": "4NaTm1xazb3SEmV9tvEo4AZMcNm22JKD1wXxpfz6Pgn2Pn8NtNyM2bxrsepeFvFMeEvbtJZrsFj2E6g784bjZhcN",
  "key17": "2hX1DhuYGGXAWsggMMLxuNmCtmWBxc36xqZcLHMK25B5pooD9vZZN73aJBnKqrudbmQT42n1oapzC8R6SRiXmyGz",
  "key18": "5zcAW11ecAhfZZm86DSoJpXW6cRpNLHXH6o67rUXApoiisa9KSvYUpY85dBi39VEPGmBD7Y2CeRmmc6wVgbYSBu9",
  "key19": "31zEVjShiZPJfRvVN9XDChfaSBTUi1k9AzSPSPmzLfDBpv9XVcL7vnBBJ548uZFcof2xiqUWQhbF7AZRqW4dpLKo",
  "key20": "4rX6TYxdwm7NbkchpvVNMTJthrLYpUenmjiHBcd9mAS4SGzTjM5csAkqqwAktfNEYX3Fbos6QmH5PhFBM4cW1mks",
  "key21": "4brku8wsiHTmxxk1g4HuJ6a2AWVMJMKCZWWZPq7rM8khy1Y2b3N2jCrbhwZmczCvAMgXG3Sd8tbDgvmWankQ5zJz",
  "key22": "YtmAkKizs74XNf5fDyUhAG1mTbBJAa7rYueEZyc9owAus53veceG34mL6WGYH5KFtrdmFxphLmEjBJiS3AAMeNW",
  "key23": "4fK8hGnKH854MBTL8gkwTr4Am7BLnkpnMUibhDhBk79RHpFjvx9uPk9HrX647LZ8ozFU6GQkf53iWH55DqkFxPwi",
  "key24": "zRyyMVaGwXL9Kv8FY51rMPhHbT3gzuWBUAZwTJvcni4mJHTxSiKTCgHLYxCGFCn8LjwJ3DZCAaPy45z3gjxUw4x",
  "key25": "2GBv58dyQwcmNrei28c1fLen6LA9THp42qc68e6cNaEo7ue9eJfh24Gudh1CLTASxduasCDDfbGifDB47JtDQps6",
  "key26": "3NLyr3zt9zkcogJ2TgTiWUQ4yEW3XmKWHUcXdXNHTkwCbZwAneYzv43bKiySMhML8z9fNWRgNxfoHpcch7RGT46H",
  "key27": "5ekJD56ATYaww3QthSCvsPLSFeUTRfhd1zBK3RZsVBrLtyV4E3vr6iHiJc3WJHuZ5RAUSr1ME3LPZQ4Zz1obEhDm",
  "key28": "4CHfRvziJ3qZiWn5E4Ls2Q9KA4x7FD5ohx5hM3ggo6k3578UVEyHgymaBDThcU1pZbGY3AeLpPwWat3JSTN78TRJ",
  "key29": "3SP2QWC66Qpkfh7NJXmxj74tHnXXxVVvxqti8tRdUDq6gs7NZaoLwqkcC5gWo6k3reTNqRNJuSd1WapPfzPsBfof",
  "key30": "5mEisMDmnU5BbQpCGoj7YnWqY7kZ5Y5UFwzTf2GJBGksse9cs43LxmM673dsqZMuvP5dPcA4yTPHDCpGc8rhDd1F",
  "key31": "58asnPYhG59GZMomWapNjRQQPFF8ABYvcigNHTgrPrZKEHLGvNrwEU492TfS2WXamw9b6xY9ywN5pB2UcpVPctNn",
  "key32": "38fSZBwqcde3TSsuDEqweFMJZZGzxKDaF2dfgjSHrFfgyuNo5AMiuvRNixGciyTUqstA7TkxAhRuQdA5WBRPmtsL",
  "key33": "2xNiZjVAU5PWVMaR7TMr8UizeRJnDmqvjr4nm4HpskoqhyUyvjypENca5B8qtvben6JRPx6cPcLx8v8nxDEJoYnR",
  "key34": "2vLoBofw8v5EErxZvFAggqu3MQ8tbnb4sBmY3XCXPbgPnknqjWdQCL7hgTvpnSbox9ig3fXzRCcLphTq6EcgmfnR",
  "key35": "u4LQZGPpTFN445oEkJcrMjn6vWU8sBR5kQcVYe9qYANtBevDV23kYk6Y8eNg9CC9fvwYihZFwgntSA8U98ccd9U",
  "key36": "T2UDTb7J3NW3YrSEaadVHbvKbHuwZC557zagdab1k8Zw9X1KbN311AW96kbxij656VFMegi9oFtiGcP2jVHtHMA",
  "key37": "k5AXnkNa7ieoJJr1X3LTp7SB4ukmaY7x97zAjFXZ1xayZ6X3w8KMWFuRXbEdZrzpswtPg4WNWAgkcwYRxzMCyQb",
  "key38": "5SzCEpt5hXQstwtrQtsaVMirHEfFkScjBDe9ozA2WcMd9D6t6XWWzSqWbitRWNpSYTCfS1sHyFCQznXiKTvE7qhg",
  "key39": "GL5uoj1Rfc2RdXpPM8vLK5Ws1jYpGkB1wzmDbEibWqx3qPsLifKnaMFz3nih1pUXzu9B5V36zJfjQq6tDerbmiw",
  "key40": "2fvbbyuufnQQtZTuGNJPhtRDSu2GBnGXiJRPPefcF6W6SEi9GiUuPdiraiy4TawAvgRJfXHDGiHXfhm9sjhhfVsA"
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
