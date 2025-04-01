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
    "2dEDvnVAD8BM1fPsQCSrTT7nckM7jQt1oET6vdK7525726KqT5E4SmvG2knv7yJjZCrwqRLzmAhwERGEaFGpvggo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d99Neg5DkFLGBnnrip2eabS2U2iLqqzD1Wr2mMpK3X31BiuTJ8v9paTPjoUHoHAG4vey4x9pC6cPaDuDj59w6cj",
  "key1": "2FsoRvirgEkrBwEhCsybFKuYw2ouD7qaCE99z4ptRyvGJqJ5wQ6WxSN8Z4MrqCS6CyjAf1PMgAwyWHSqHkrRkgS5",
  "key2": "4khbQGL7YuCruEbuWZsqnCK3e4y1EmPpWeKzgCDeYLnWCtq1fvWacmphZkdmr4EyhhVdGk68gFPi2BdvM1pPn3e8",
  "key3": "4P46mTVrFak6iUQNurSjXUdJJ1QoWExTMH54XjUxXy15YtLCbPEXi3J5uugj59ST5Zw1CdScWYiuCLktB9oQh422",
  "key4": "65JbVkW7hL1s3eQpXEiUDS8Zfp5r3JZxP5tQiXABUt8oTrDDrBVoG5z3tYcnq4y2svNKK9nf6cmaA2tJvQKpnhVY",
  "key5": "3s8dG9YA7XkZN2Hza384q7jYnnhuxVxWt4eMU429XxbLzyEK4KmpZjinQjyL79LWNiCnV65Q9kskdqrXEDRqEbw8",
  "key6": "1XjunSPceY5ubsnHLkatDcZVp1nmXExNvaEi6WeeVgr79zeJQu2WCFxvXAm6QS5r7VEiEsneWkxYR4MNYhEDGFf",
  "key7": "3ioXTVzSeqDM7RrHxobc2PZVKMo2xECzfVJhvNYmdmfTPCxbatn6vta9kSbmvpUDXnaKfzHpTCDBdXeHFTWQV7RX",
  "key8": "39acDDJDEF9tM9zAXHHnQJBdB7HaXX7uHdjrEWBcUmBf7Lw9N9L6h6ykSguRqsxphXPQ1nJaBC4naCaeXgMpKpkh",
  "key9": "DGYxfnEn1yfjLqCfj16VMDVBHz7efkP8SAtASJHsfLrUscHsXeXQ6MZZaDuS69vwKci4StU47mid2RHgUyjHtW2",
  "key10": "5ZGTAnWCoMr4vN29BgUFs3M4dyVjvRxyKXQSr9xgLLaQSVo6Jes5RJrZvKc9JLp89NCCV3hjV7AyBSBeJ2XCgfr7",
  "key11": "3rb5SkJ7hx1XQAzAnL4BAFt4PZFjKjxciFv2tgqsfwB6C6JN3PQ6CideHDfP3k72ZnKnANEZ6t2ATS64e57gwgw2",
  "key12": "3gBWrYMBJxeGW3chTArmULpmT5TuBMEfryi98kKHz9Z3pppEBeZuCNYUiUoQLs3yN8NTncgihBLNeDQVL8g5AULy",
  "key13": "5X336HZPNKmLgEDkhS7iWD4UDWWJe8oWuiKhD2tr1ok2PoZt6LGP426JQnxBUsg3CVtL8VpEzUc4mV6oe41Nuiqc",
  "key14": "J17JKzTGPftDYq5pFcRwGhYSypFr1p4vuYJ97uxC1bQCefKcT7NH4x5L7Syyfv2pMS2T4A3L3DPHV6mV4dYRVPa",
  "key15": "5r6dZAVAqAsgUhLqK1vuLuBpPZ5tpeoc7UwikMfdhHhQ9ZDyisWLJXWaLpaSKd6sBcA5HEBHsNjFJZtSQgUnDWHJ",
  "key16": "2vSwVmzto5Fx6JXrrdo7yYbFwbTBcnkfwyqA4t7zhfFgNyqvymB2BSgiZ7AM78eAjxetCrAtUavUMXeq3nRHwJvw",
  "key17": "3izsPdLwoTANh3TqGxvmPgSw61HXWcGx9kBrGpFDv6EY1J7tuuE5JkNKKf6dGAcY2bhzhfY5JgpDKDg1czxaRCj9",
  "key18": "4chYzTx1YwRvCNceqfPvYy6yVieWCRkrf5cjniRSQkdEQMtnZM53twwPgnksZVnWDSN3wBLGt8QvSsxRgBz2L5PT",
  "key19": "25GBCt5dLVox4dNxF1eNfU8EVgzTMnYjdVNfK9hTmmttxbW6aqZWbQXiZ6FXhmqP1ARmMdEQzo55EfjsVSdmPqaS",
  "key20": "5WE3VNZMjPqt95H7SqfG8eBm7hmMNGeA7wKnz9QiFdNbi244XfFq4K4ggf4nLmVDZaCZhuX6HbxkNLj1DYhMkp7z",
  "key21": "2CYzwdGUNFbDJdtMgxbCwUX5o3L7n1oxDnAyhsUEq9bHJQ83t81MmdnYvXsTfnv3s8HJayq2CrxkfVwpWvqf6uU1",
  "key22": "2qLqihU1mbB3uK8ARMmuY6wT66vmvnwDYYpmY2d9zG9nKVqr4L4Ukj5fPFSKrYXXWt3J23yJJsTsDp5CcFEMoutW",
  "key23": "4SswgGYWcWwPU5qTEUwCjF2FBRrtwtvMVTa9uXnLGRAq5FW6n2Am8tNZyiwHRb25U7znm99dfkDKCWhbiFySQMYS",
  "key24": "53DnT9wZpKh6nRA25Az75auEjHptc5ewpkzrAQ5AZKk3VKXBnMr1rf9XECYX16pbXPbyqJHBmYgtXRtYbYQYtNfR",
  "key25": "9chzXRXBuSE8EyMkcSqPf3ZdXfgYjJasvEjW2brf7mXthvH8Ug3MUTBXuuF5SG77FWAC4HQVXxjofNXWRcLoXPe",
  "key26": "5AjduMTWB5boqz32xZuf3ys9YR9aUCrzo7aHUxmDBDzy3CbjeBwDitgAAAdJYgPGLAmg6teKFih2gCfYvJ6AQ4xV",
  "key27": "5A9gwv6tCjfhtLBq979HeXefWJXviF9xDGLW6DSmohHd1Rad9H8rh3Uh5GwLbMQAjsfPH7qRf9tGkkPrZQP89JuL",
  "key28": "61NMhMChjNwN3EcrmTZ579fLXGspwbmBzeQ5oNFBSgymhLp4e5EYqcEsXnkv9kxX1bJ6pn8nFJMtfDuPwjU9fkgq",
  "key29": "43Me5CEDnGvkr8HuJCgAHsfaup8TsL29j48ChXqoyEiabs511P6a9XeFbtUQauhzoj5ifB13g4P4YPWuVoiub8Sp",
  "key30": "j6wRDwkYMmRLsc3WkFhZuVVPizf99jUdw2Auowe91ce2Re3MbHMXnu58qqYmNMq8LdcgPnmnZVFydSq5THchqjG",
  "key31": "5utVR5S21uvyHAGKxaYcd9wJYxF9ymZ1ExXwMqzhv4sW2D846yzJAzSCkgRT5NB9Pbmy96NSDugLQ3aTzHkBdHKJ",
  "key32": "4N4texAdWWbWUJubg1kFa7x7pLpZ4GQgV1K4LyLzdUucpGChfZ3VcdQCLhckZrRrPKaaecMD3vjBpZfP3mKFEJgH",
  "key33": "3rnSPMALAmuN6Tm5VLK4Y3RRyADk2ZVUZm3W8r2nUqUJXkQjrVXADzj619frNFWF9stjQ2D9zNcfF5tZD4iAuL2i",
  "key34": "2QSfRmtAnfVfqXpdYUrG1XtqsZ6hemh4mjdH41ANwC8jb8Nrcucm3Bz4nXr6eVSzaX5qak2SWuH2iVfCry6XjxPB",
  "key35": "5pefFZBUEtCZ9TPTxRWZVpMXFQuemDsVn3f5fAdYCK5y5Bf46YgpC93UAXXFFgMzYYpS5M7DJxzk5YU7UtCLtUKn",
  "key36": "4m7ofQaoXU5s2RjvZ7QCg1499EaC94zBTFBWs8AtMogVhBJqZhC52ZiiCjnVHEDnVRJXwETGZQqr66VKJZ3tHhT9",
  "key37": "3sCBWS6LDPMKz5nUBxWxzp412HUGwEpNr6RPCpA2p2ztqHXSx7vtEo1vDAzWrcj4zHL2MWNFbS44tRfjtbFXM6X1",
  "key38": "Bnkxn4tNWEDUtVRHf93CaUBf9Mgb9AGGh9hyDxqcfN11QPVHRVCUzXpBu9ewqDumAangE9GfhEqgyHbxLjL8TMf",
  "key39": "2YKWpo5pV9cd6kKWS6yR4GuuZciGF4jkGuyvznAmgJghQkQtkKRxgQx8AfXrQspRbtPTjDdkptSqZL2n9nsPFpmG",
  "key40": "4B8RiqmuCfzPuUKbz9suCowYqkVdZaybypqdxxjbYQMzNZBrMvWL6Emhg2BMFC1GjKm9ZRTsiZi2dhcSi6XbWzX4",
  "key41": "2L6RDu18S6hV1SFm4JUK25MrqGHGmMUnug7qnVLjcCxXDJyHLTKyAsGV6xJDAacPPNRwkQP63erRKQaG7ZAH3TQs",
  "key42": "3myXrjPeaFXHfb8RZ9JHjHe4bcjoL6koVGZyx5bB1n8oNvPgL914vXHCntxD4QeYxCypq98NUSFgthBcnkp8GKRZ",
  "key43": "2wZqpntaJJL4hEd7jxHw6QuZDYSm4EP9U3VRNXuj6D38jzayb7RNm2qnHYUEENNUhReBkw8YcVe6SkvsKdz184Yq",
  "key44": "2NfEzf8hBM18Tt9VG7r37DJ2NUnBSn7AWoKtgBq6Stw3SiqVmEY5vrbcLd1TojQyVazPfeCkamNzc98MtftwQsX6",
  "key45": "5bN38jM3ME9dy2xFXBoE3QoHXsg7SU3wbkspmGGsZzCXb7Mgv5yQ3CR1pUKMbwGqTonquAoKgCtpADZRUJrfRKsj",
  "key46": "3rSBKaMBnzpQDK6KaC5p3bRvdjzJMZYBkPhj6VDPuMid1TjZFrKLrW1RJV6RWhUaExBswtZKTJK4hHxH1nieA8bu"
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
