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
    "2MhCYo2LwcXYsNEqypDiT7PsuyKuikSdvjrdhte9uFMGFJVN8b9jvctYbxt2jhVtu6VVfzCbrTbK8wV1qjcCGrTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aiikMhiFJisxv1iFnwwjW2y1L5MnosyFmSRzNnrkChf1tm2daqmih88tMUUWMZJqBo2yyDy8q7HrtbdeWp3Y4x",
  "key1": "3dNWoo8htTMfiA9o7VRjuDzNzgu4SKWmiPNj3CpwCCQZtQbPUuQrQFC3g4WhjeLfxGT6w2qcR9RRkRLQraxiEpAM",
  "key2": "3CXUMsurHXzBNprTg42Ac1NTkPHmqKpgZovbbMZssUZeLSYoq7JrBKBFkBA17E4wjpGyu1gkLFVG95ogjE9rSkLQ",
  "key3": "3GpViJkKo1Cxo2wiKrVrptFvotb8Ru1v3GuyiPMmWZG3jrXCyqjGSHH1XrYnYEq6sjPmExen6qqQWpzQNsQRQ6PK",
  "key4": "5ewFfeN6eNjUUZ6ZpGQdRS3xmKsrEAvAnL9ttj7sCEHvrBMNekwHkZ9jA5zZh3LAHk2AYYpa5oDQEyBWXGV7qucL",
  "key5": "5jLb1esaobwS3YokEHWNUfm3RqqTxZBc3rx8c3A5eeoPdyynAsK4HHgNLwq5rd32MSzA6PrqqfgpeJ8nYAaXStmp",
  "key6": "12oZsJTy4s9bBxnjnTwwQtVNT2dxhtrYqNdGkshfne6C4m6XGgPC58uMf7dBzLwJZmB7suxfgcNem7auuDgNDGL",
  "key7": "3u4cEfuFXeqfiPJEWbn4bzJWMcQzZ9Ee8USupzMUtbaPuGpRr5zZvnP7nK7MPrVSv21rD7SC6yYtF5zXCB8N9uVR",
  "key8": "27iL1uC2VJ7WxctRmZ2yVoE6mPLMoQyGx3zMVfz6FdNnPrdEV8ircNKAciZW8z27J8jeHtXxJ8VhAdDrRi1xRi7J",
  "key9": "TGZ1X9kVQGjzSM4Er7quvWYzWoGFozNaQMg19xSLBSA21eQ9uoCaieGbX2hRoLboMybqjaZAvi8u68RKdEXbxtP",
  "key10": "4ftx6Ucs5bpsDPY8uZRquvEmPzoKhDchdVipPN5ttYUrmhMXb455VtwJWMpijPKW6owQ6ishs5pgGgw6zjrHYPKV",
  "key11": "4eB34eqEFxTQrx9prQb9W6Sz4RWkT3eLG6RTaz8KwdUJszu96i6aaiVzSXRvU1fH2hpJHpKHh6yM5Dxy1t2x9dtc",
  "key12": "KNFQUV52rSnnYYEBqrYMYdg8McmR8fFcLD5QBeZSz629njkcYSEde8k4sJYFWQ2AzgrMM7fFhAadac8MrkvCwtu",
  "key13": "5emZDs4Vi1H1rzuUiv8m1Sy43Md7oQSX3oVRdrF4sPagDVDLfANhmqUC5oM91UNserd4R2Ucq51hpCitUJKQEydP",
  "key14": "5Wf9VWh2RwSuctf2Gfww7oWQ6cwGcRcJz4exAQEbggRawwbpyCfdRHfKFGJ6C5oMvyyAVbsPd3EX2iuvCLVeSN15",
  "key15": "3VoJkRxh9dHBQiPSe4MNPs6x6pMV7YZVcuxXtr9kGhmP9GRWU5DmDwAF6Wx81tQ2zxtVrmMndHajAHEnxzSgpg7P",
  "key16": "5BqHp3qcdk2znMcbZ1H17sQGxTHKcLLL2pTyzK7pc59aPLKB77xt16NhfpMpsmVjHLUycpdV1BnA92nzdbE7jJy2",
  "key17": "4nMiT49qbhsrJ7uQzWkjSvHFUX6a3LcFiy4aqocBNKPR5warEmPM42T4smeSFMixhkPKkYzvkVnyNyRkor1B4XMq",
  "key18": "2DuzYbHkftYYy72nHNoZUWYrvDrbWBTCdZaaqPfXTiELjxPcLCXWC5tMJ7rwFwcn84Kmn3MqhwJ4jsciFfdiaMgs",
  "key19": "5GX2AAW5xpEzMXS6enVnqnZdwBS2d8oWYBhXVKANf3n96qaq2xfJ8jsRQ3wiFBuRinhG5vJoMjtXsgND4dGQb7o1",
  "key20": "akiy3DWB9Cvza824fjtJvxkRZ9QYcyJ8MCJ76YARBNJnrZ2Nccy7GHPcqYjqz5hGYREsFaoTj9iB8G89xvxoaQt",
  "key21": "25ahr8xGnvgR6rc2Haeun5zkpqtdBRcuhfTkZFqDL9FRMbQvuUeCdvFkr3dMHwLTY24GGQebKDECru8e6TaxuEuo",
  "key22": "9FYnbrf1NUdGe7HLgM3RYTBwFmhAt5FjUS2x6w5ugPaVLrYg4CrLCERHJFsDLaEMoXHobW9qmc2S25WXjFk2dDT",
  "key23": "5Be8cxAJjWKmh147VVvjmsdyowf1DpsWZgbekpvbDR6uSKFcPQdAajcc3SKzgHf47RFjxxwxZrGNWu1t5Y1ek7ct",
  "key24": "4LyzeDkSFHFGy57RvQVVUgXuatkEibkb1aYAUumTfUULrQUjomWwP6c8GDgeSbvqNnWEqdCbFMRfJr4gsFQkh7wY",
  "key25": "3CzUumjxHB7hsSeirpXNdhDjWV9vECFRew1y4FBsGYx1wfVXs6uw4LGN3qqTXNiV43QWWb6GELoJYNr9x7Zchnyu",
  "key26": "2hj5mirpD49Do5SmdvbKQab5tevCG7FNbkb7vCPkiKLc29kCU3MAuBMQcoTLQDaBKCfTkEgHDjo1yyKUUSTnb2u1",
  "key27": "528rjzK3g1jcnkVytxHK1PFp6C1WdUPF9SZ7Ghph16BksB4WUqzRNU95mEHcYdLFY7MEQDsS3SMmdPmNNeJc6Tt4",
  "key28": "551m6dBk8vFo7bKFMb7bNABvf7XG6oSMwi1SVUYe4ZLvK7L3B6oR1ymckuT8LroQqiv3DGQdWr9CLgYcaCgPmrQa",
  "key29": "2W4vdLZzKzMzxzDNrfgphTm1YBe9ckGodTdZsv1x28ojJVyAxw8BQDB3mHmgnpqUoyd6sR99b2PEPx3ro87kg7M7",
  "key30": "3zmXvjunqMwD9Rz5B7VnNPDboefbbnLGpc2HMgbqui1W2NwWMw2UUouw5acx25Gx9x9mVka1y7syYLnehK2NKotg",
  "key31": "3dR3m4TzrhnQfVtQVZqGMCWxgro7nsiEqhusR7PR77F2RCikFnEURVWoD437Zy1FjpBvzEcbjZgmoq12SatC1YbF",
  "key32": "538dmFZ1moTdNL9MDhxpKsPDuXzy7e23GUXurKFXMVhfCuACKQ7qXD9mHLsfJWbFULAYj6USbYKaEfNVpvYq7y9q",
  "key33": "2gJ9GRjEoE4GTmAtf76KdNrT3Mt6xdUrc4qDPMabLAYzxz4htM3HkbwRgKmQNPnmK2WSzKRkFHbj7qZATWYSrYtL",
  "key34": "2uqUZQEsJEcNJrtiGVGDn15XazmuMfGyNyxj569zr8Hp37BqZ3qKbiKGqpfCPTVaaXo682L8Uzyk9CaacHoKVTc7",
  "key35": "CrtXAdwdbxPE9ntRskgLTws2LGGXrDJZ6CtyST67ErWLFUoAM77Twg7AzXMtjX7EQHFNFTz65D98Fs4DRMSPpZH",
  "key36": "ipe6qmfFGB9QWcMERYUzqJzXmeYuV9EgLypDVkEDdaSFrMBv33UtCErYWF29B9wXQeBZvvhctxopyevmzdiHbBE",
  "key37": "4Qr8SVee1o9Vqwcvh7VEtVMHgS1seR7twMbkeYskhvNS6JMD3rR17o7McZBvYk44AKXcSthFA6z5vGS66rziUzBX",
  "key38": "33CyBXbe4fEzfLP2B9ioH9eqUD6n8vznbpWzLzHh1fQSghr6FiCUrJnp84hGz6SRuJFXu9aXTjRy8xSM4vfuhV9T",
  "key39": "4MgeGmftJzPzD98PEH7wvwvykcFGKftocAxwb5AVPVdUEpmdVwER7aM9EfQWY5jKMP4NQFLvPjVrHQzfyPHu5FFo",
  "key40": "5DDdXZGtHfZELu6tA36XZEKVtwiariTVYqmigDKnGKxybGbFZFbCD8zRH3NBUYrnJ8gj49q2JNHBsU5W2Soi3Bho",
  "key41": "CjsRPRs5GUf2kyZHn4uWCJDaioMQmts44uSYakjR3LViqpTrheuDczVTJz6a1bu2XdYNzV1hMD7MwwwVn95TuXc",
  "key42": "4UbMZfBiZR3CbZprQK7ifZKwNnwdNB2RcCxpbj5TUxKXgWP63mob72k5Yruj5G38bwdEt1cGCtQNph4RJ33i29wX",
  "key43": "43nNx4oS6wcm3ctK6CYv2NgbnMh7hJsTcRmtDWdbQT5iX36ifhd1gyD7sNcdE8zZqVXNUgFnx2Zky5T7Y9C1TuyL",
  "key44": "yeMX6vvkshnZ2trjzk9wCTG7ffGAChcXUeRUfkQuw4C3gUYR21oFah3TbbLS2cJdtyYYnZehtNNvFAVQ8NK25cn",
  "key45": "58MFA1DJdLd4FW97qjt72u2T1AgxcqhQxEwjQuCLvy5Tbwqz5TNF2Az3eK9vjy8P2HFhhNrXAway9Aj5DAtCd1jt"
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
