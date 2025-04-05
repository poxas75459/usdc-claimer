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
    "5WyXyjc1JkDGHevLdtJJ8kNzhafNCVmjVf6fH6m9cRvKj2mEjUPtqxdZ5VMEBLX9pxoNemcxw6MdfPoQmfXPjEYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y69nUtsin2kjNC4APxFcn68ZjgHuX6S6y3oj87RZRrFmoQThsbqaUrE3utkqmRJeuE5n1eeUTB9npqjHFVdSh5q",
  "key1": "3MtZHN7AdWDYNkrRkPcfkn17utZjEm6bGmgUppxM1VTgTwc38zXAfXNTTg67frpKP4SZrh6AXwEkMjeF4jDVJs1Z",
  "key2": "xfqiw7TsHCo5m1q1XtJFXhnWocU3XFresLYtyhApkdfUkTLqyJkTTJTVGP4qL2xTVdbvWZn8ikdRpeMU8tDDNSH",
  "key3": "MRUJVwajsjKFjTUR2FvfJmxZVaHgEpBtHKDqayueXeGcgZpap94UwFJ9LVbZx68BVN14auf3S7vtdJVR3XaxFFn",
  "key4": "4vZqZsKbiC7ULbdTbG3o4YJt2VJencAzGxu9TASd1m29hR3BPXzDF3zRYwTZBAPKcGQTXKuxAtXpyRJpAXibAhya",
  "key5": "3Kmcr1oQ5rPB6FbKP27o5ZoPQ1h1ki8rbfNogy6oZTcroaj9iMUL4oZdwtGsTdiknJppYkxAmZYaPcF3v6yVFmGC",
  "key6": "5eyZGGYUHtnftKJMPqE5y78QFznuSf4et83ymcUEr2tcSfgsdgrN7xqsfv58nfbqMaJ6x1gifq7Q7nrVtWGNUfWT",
  "key7": "XX3eakqhXVTN1DNmzu71rksesAUQE2KZBkzYTXphSmCAp8XUDejXWCzSZZXbqc8ADLPQ25sg8s929GW99THkxan",
  "key8": "5WmMsEPXyEig2utZ7ahKbEMzoit4XQCun2f8JDb14Bn1m3gcLmTQpwzddKHEePDh4jqtUfLqceSWbt3b2pdYWWnQ",
  "key9": "5VCLopncUsCutEnime8ff9dq6BgtejwCQYmXSepm5vjxoXvu4SeXT7BkMigWs4UP7zjvN67rSBwyUNLj55dTL7tS",
  "key10": "3b8pKriw1EWZbM9hY79iwLphU3EA1EsTzBQE7CUzVVkk7NTsJ6K8kCxoFFaT7kCCnMQeoL7sWk11LhuDYZsc5Q85",
  "key11": "2KkokJjqTgDXuzDcPxAP3bhHDuwo7A2TSeK6F1bgUo3TzmRwxUcAzBAQ3JF2zNJLkFzj7B4xZWd5Bx8E5ULVhbek",
  "key12": "33uLbzvCkCKxSuLct1DGaP3vQnTp7eiCNXiJSLZQw6MKf8ar7Kd5aupoFh9sjiXFMAVzXa1uApyyNRYTAvkjFXfA",
  "key13": "2DvkFz6GttKNwDwzdfT5Ujs2g1tJGAGi7VzqVFNsq2aN6q1YnwbE9m7iE6h4CDPYtDbMwUQbBYs1AoTNBPD8sufw",
  "key14": "4exAp98mJyURox9BLYHzbuLPP9DsqqEBuhghVLGTZB98RgydMxmgvKSuZsp9FXBTwjAiCr4G6FVRWJcRQKu3Zszc",
  "key15": "4GsrVycRqhgNrtK6mpiaUGZzKjj5KyFb7y6oV9wyVLrLZhZEVLiUf5RfsyhLVGrioqsaZEvos1kcuZGF6LAY7djC",
  "key16": "t8eS35SBK2Ktpu1khNqCXTQJPRuRudvECxRjFsw43h9Jfx8bJo3tUghQefKH8GpWp3Prf55VoJ663ZUnDQW6Vy9",
  "key17": "3st64cPtueEqHxMnwKSGh1jTW6w1ycYgkTerDNcussG1B7bFamxmPdwncAZW7Z3smPbhWVBrfdvMxWL1Qh2TFy8Y",
  "key18": "2pHMoaNEZ2F7Dtsa31cD6xiE98fMtVBjNd73sE6bxzQJGcxZXBQqzcEyyHKscGm6G2AyQARZEq61TKjv6xLggEuB",
  "key19": "4X1YsHVU2gzT8hrpZUTTC2fnY8oYPGDMuidgbPnYt8mKiL4dCYFe2De2zcruMvtSjY1poDCucW9VkBq9P5EhzULi",
  "key20": "44k7yaDo5StbENLJCnwrfk2zSJhMhAX2ZdEFpyz65iFHt8tkksHqhEuag3cT4Z4pewfNgajM8AzTfRT2Y9wkKEuw",
  "key21": "4rV4f9AmNeJ9stjw9LMTL9xBDHRc4tFi9x6qkfBFyCqJtsWxUX6iorjQfVTNwEZRhdhcgqbw5d4rws7LLGb2dtKP",
  "key22": "2q3ArnYokwoBQUA6cL8uss3mAW7SeTUrgFXXuodiaJwpyS7vRcaxEzgoinwwcJeW2p3JYunUZD3yMc9BRiR4iW1Q",
  "key23": "2TrhoXZaqA7gCE3stWnTqbgd5bDicLrPjqYzccQSdTVkauckQrU7x2AMvGGehgmPY2Ykea2zyB52o412tdnvFCx7",
  "key24": "55Rku5RoYXEMKRQo8WEcSpWuGqnnPXmjLscyiHTbxXaWw6ymBjd8yXk6cixD7ukAu5XUErS8G3FuHSwFKT3f444y",
  "key25": "3L8qjcoo3rxHAu99jpEoHhTkKhqJ4ZfCCA2ucyeJf4zb6pcyqKYtYnEGy7tHYDWe7Yu3euYTDdbZV1eHFq54yi8W",
  "key26": "5GNQaRNceRHW5MweQCbo8L7MzgiUMBzs3V2u5vEW7JpN1ApoJsK1jgpgHZhTx1UcSrR77FBNwdyj7BP89DAWuahv",
  "key27": "21Xx7Htntzp4qfTUKFuzaEfM7PXbc7Kty4gZKGCJdSADLmQLfteVjqiHShyCbLYb1z3HmchrnunCsJJ6hoYxexiW",
  "key28": "2JMKHQAnDTEBuyHY5YwDfcLdpXE7YBoagLoFLw2gDomAoSkY1mxUwFru1R8jgjs2oT6hvLn9kbWQaGji18sZrJnx",
  "key29": "28vheNd6pvpyDtJz4E7vn8bCwp1i2WuyEmTxjNpUmqLdgq4xdPutKR7TP9hK5MhJPwqpdi1xUHARxJtfSQz8zyek",
  "key30": "2B7UFFyaBrNQnRfYyfZTHVCbsA4xjsmr4ohNqq5qWivanksiJ1WnmAptVSXS5R3pPR4KTC9PT7G6cRFDnfPAxeGn",
  "key31": "3ZEuDeciiBMrRHyvvTe6vxA6ph3GYpfueXSHeSPADmF43oJp7DMsfgWswnjtjW9T3oPN2BJ26DYs6w275TcUNxKS",
  "key32": "2msEaosDessTDYHZaarUeZRLjs3t4XfUFMCTpchxnEVveTJ1CPVJQDo5fJu6wf5HcqTFNUkkJGKqzj6VtRPMijJ7",
  "key33": "4BJQXjSAMKupLj9QyCTifkN2zc3xzHwnsnfeGEnBMzW4h7zvLkDLF2Fc1pGCUm2RptNVnj8TTn63TbSFV618MyNN",
  "key34": "492FUc3QXAH2NPeaEnYGx9PBieeE2XD4We5F4i31AM5G1D7eYvuD3aSbT8BFLo3dKdUrRabxMcFBCM9JRhLVRt4w",
  "key35": "NfJizMW5iysHDeZ89EjRNCVSeApfkfKchhBYyt8EfcXfnTz3bfPp59sPpQjL386nAjMZjmXLvsu8CaYueuWs99V",
  "key36": "284c6knTaAtJXrLj2T1oBH1Yx6i42iZuGkCArz1zRx19LscMgNpreeAxt4tnYFD3BhfFCiYi3v3yjyxHV7qwcLkF",
  "key37": "N1voVBizca63GB1qrTxEp6YrpEDEjptPbLinA2f9mYozBSNBQzk6QfXNxuXyG7pwt5QiwRmnK6sBpc4xfTHCXse",
  "key38": "2W1aCQ5WbrV99Nyj26MHr921Fzu96z5E3uiYGjsZY4kjhFPhAAxkYn41zvcSjUfQPAcmxMstXRZ5UzAqYXxmakG5",
  "key39": "5Ui71RbC2XLpnC54QY3YKseAtmvH4b1JdZzXUyeRLbHALEHbTw2rsDwUspq4nhnVHGeRM7yZz8J1gH7yfBqNbeV9"
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
