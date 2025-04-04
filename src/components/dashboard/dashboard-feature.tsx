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
    "ZuhZHf48McW8Hu7N6MPGC8HALo8pTt1AeTs9N9tAeRmYwQW6mbwTBn4KMZL4qYDi2TsNoYANVJ6DDU7pqFsVrbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvJdRBdFW2s1ihawxetYRxp2JJ8HfzBcyf24QAgd8RER17oWxApxidUnuMdJip3dQEmDzVjfEtGjtwx35y4ZU8k",
  "key1": "3TQPptmeNud7sWkuo2UBJdkTMH8poDcbUJZkircvEej5iAkB1E5tWa7ioGVNdniQ7AjHDgsfdynEqb95B8FDYrAG",
  "key2": "LxVptKt1YW5f74vg6MzcyKtePTXDCYYrzDiaUf937zPrVGkjFNV5aaL7UAsBDoWDnvzc5efFSQ4nxA1iCUg38r5",
  "key3": "2yb6p4k5RQgbxsNrY3k2GDNcNnYizX5DFoRtq5Cnny6H3M9vQqk8swthNtYKNFwCcJaiAcPLZTatab4vSdXTRLZf",
  "key4": "5jb8Kg6qn6TyAVbcUwkn4DqrbP1KBD1vHeXVRx9gJYh3sGxyBAqPkjoNUtuety1oLxxzSZxQ1r4P2cwqSfsb9d3J",
  "key5": "41qhs1udi7j1JxWQypUkxZeaVBNxZnwDQcUNAEDc8xU1naDyn1o1tGNRFL77YcfmMXU5HgwjRM2V3V1pAQy3oeUo",
  "key6": "q3nt3HD3vuNj1Ti7Swqto4TDdoDovCSvFkN2vkC1MvHW5iektQLtDz9E5ZpYbedRb7oBccrWbCwMHLnW5BTmgLY",
  "key7": "598ZUwYwPdzky3LpbzU1SGtcHREUGyX42MZ4wZjUhbwHwJFffgMyerwaAeonU3U4ehb9XXocHkMbddo8JPnKLYzs",
  "key8": "3jt9HLPe6mFX38yEo9t2AcEAu3tfp7PAsUmrR27zxY82Q7BH6jFg1J2YAyJQSxCyicauuinVzaUp8meuhiPWfLHW",
  "key9": "2fZs34E6T9b1oVn9ajSEqdLCdQmwvDeBWWB2yoL8f1FMBcC39nJ2oqsJZsPw6aBwwN349nJmByv914YJfN2bjieh",
  "key10": "2Sc1ZAGuDsS61fLb7Pw7k7jPhEmnXQ3ogY7FWxR9a9XbqAvmtqxZwgKTCiaTkSJxiSivxdwxebwrGpqzS1RjjCW8",
  "key11": "51U3MXtW4xHAVAivtkvWqAZ5mAcuYZKpb3pn16SukmyKbMdSKGeWC8gAGcawrc3oVJF1YuEzhaEf5KHA6yRPtpQe",
  "key12": "cBweEURSo2kr4C2FMgQAy1KnrwFvigztGByChibhEJbsEwhnaMNWQdBDkvhfy5XysCtqWXVkUWqaqhrVV7TNE4W",
  "key13": "3brn8A4dXYPxz4XhgJ7drgotg1js4FA4masePgdtUyhVGvKMiatRK9iCicDTsUf7Y5XGawwjt53UnszfqKdCmB8N",
  "key14": "4H5hWWYAScrrfQfARhBjYd17ahYd7c3A6b9aiptLMh2wNPaFq5F6bWLJDK9NHjdQeUUKZpyyELiMQyW8Lp7YCFEx",
  "key15": "2ZNPzUMRbCHmyzmjqFa1v9RKWsL4343MZw2xrbMizVgWQ5BRzr8TqcZMUkLhVNQnFwi8z5vY9PFqQssckw94U9ii",
  "key16": "4KEVunryaErmt8C4skFVRzxHQ4V6S5hHgQz2cu5oCTZ8US9NT4a1JSd6LQQd4X4tp5wWrSWs4kRLjY93hKpwkEBp",
  "key17": "jsx9hvdRGDuwkRgaQ3qtnPuy7wXxcBX4RNZQgw4LprRm5tawA3YF1JhQf9cz2nWLd4v15SeH9gGfQHW7G4GSdGD",
  "key18": "2XFNp86Jjp75zTkXBHZNjLMvLnhTshetYJ13GxBjWfbRKFwzYPefSMK96RETVjDqVAbd5Q97e3ZWC4VnYJNwZqM9",
  "key19": "4KHKNChawMkqAsezGUJxpXY8hF5DdgDsoQHg3GAdhsSYpnJX2ZxdFGmo17Apirz2czoZ6BzD9vgYiNSGGqUK9Coa",
  "key20": "5tutPDzJ4q1RpN1n6GciNuVbrK8pZRT54tgAd83SZXRaGWVWdKY7xwnAm5je1mEPSxKnm69BNZ7mqPvYCrn4667D",
  "key21": "2qRLAq3ekNU3EVH8YKAZ3rLev2pB1tfzW8wkntDztetUMbvXS8yvBgLweT5gxcZVMyA8Go799b8fAo8kfDcorJhd",
  "key22": "2nqRGoY7KovHzVzf7esp1od6hjJLQ49F6tzZkx4B53cFts5WNY8nUnpN6pb5TpJEUDTVuZmTw2RKCJWJ6Tzctq2P",
  "key23": "5c2CCqU8LCeUDjzh2KCDCfMtuABLxsENEeuFsHnP6akYDAL5C1nxcbsXhis1bTvRzsgfjC7bFeFAssmYeTae2ji4",
  "key24": "3Bp29kA4uqK4YfKHRkvtRg75ixbWSfeAzBEBFSMKb8xhbB4kvbckKN6wmcLTaa6o7uBZ14btM7fMhKvv42zMf99s",
  "key25": "2H7m7aLrWBU6JYThDaxa6qRBsoTZugCSFeESgTkUwVGKdxGpUMQ2ctFWP7v6jXdQXihnWjW2KNQztMijHv3DK2BL",
  "key26": "4rBpdzUqS1o43vwpmfQx1YcDz3Q26YGdTcPirxsDQPeMCCapf3KhppCmtxAiRZykgEiKpwrcDkxVXwuWyd6j4cia",
  "key27": "626qJVmt6RgwoLKghxBMx9io4xQfkj9DWWEy5n7usaexoRSR3oDPLjEXfi5wytgmhvAWTDhvZNda9WvzgPKBLUTf",
  "key28": "29xPrjBu2PAo5sMbmBdrmGWd6peRkRH4Qv4DbFcBwdHpMVm76wgmYwzBSPYT7tkdtzLEto2QArujXdo2jBsPRZGt",
  "key29": "4RLVDfe77oTH6s6LPrC8h9rtxGYaR7vhtkUFk1fNY2XzzUZhKNPBeJrU3wFC1H6o943JYuPuE9QjtqJ3FT3xsC2C",
  "key30": "s1s6voDfQsk59g4BZoxNeyDGRuVcg2cMaZ968XTPGir95AYFpLYH8aEkaXNXLvWG1pNRJyNdHocZoNDXXb4BkPC",
  "key31": "65LtyYbYnuSDG7A5Yhu9Ta9A82TxS3mW7LdoQesuPjHfNXd3v5eDMKYmnpThSGpLbEaCjc7bP5qVkCMCQ5nk2NC9",
  "key32": "4smwsGRqbaEBo4eJZBhduqzhbJwvMbA8gVVu4gvpwHWEkusFBaZcqcuwkz4NFCweXEft61wqewEUTVNKivhYV7Jm",
  "key33": "3HBmSi1mCAx87fLrj22pAhqKJfBXtxnV9KjDdHNY7wcnr6Rs2pD1XDWEDqZmVGWoKXEv5YxMF3fvisG3oX2T44yh",
  "key34": "2TaiYc4CARVJcPhCq1dgzMJ57TdL6m9TJaEDsjpwaPtdJnQvszEMVXgdX5najX3ckpPaMTtYot4WtNS6jKRG8v7h",
  "key35": "5xhkpS1NUwemP4qo4Sbfg3ErbJU1tnCcThF2h1Bev9Jyf7W9wwPAxgdHkYUjt7yJMiQBw7cpRHnaXt2sSwcwX5mT",
  "key36": "53qvkGB5wyB5GRCoEfytuSt4U5zP4QbzELVvGxqXgFqTrgRoZLwjtV2NuDyPmkuxipM5NPURUDDSowxMN6pD8xmA",
  "key37": "2ZvXDYrhzRWM31Wfs18XZbBnQp592Dseo6dJYwKsnGeu9k1YvbecNJp6mLaKyUHuuwergpmzvW4wuNZJDhYKytYJ",
  "key38": "n3ZUfoK3z7u39t91su4gEfheasDNjt7P2AwwXXnHN3HBbnn4yg1LcA336Zuef5J8YSrsrfCtnm6ZcZLMJ3PTA86",
  "key39": "duPzwFm5RvcQaRi3Qp37RTnrh5BxE9WorqESsuMfTUDVJgGferXmLaBX1nMA3Bu5qx7meRrk2S6Es2UoY7KPTpG",
  "key40": "RxsdmX544kna6JH6jEKQxcXdJ4s9HNdLX5bTAhPJNmwPh5o2qs8sHhSUkXwNBkPZBAtVWjMD6hgsr1K871GiNoR",
  "key41": "2LxT1F2TjWEXkpFdXox9fwn1xee9nWXotSCq6dyyqBjsUC35aTDnDy1BAnDhFC4qCKsDtzxZdKJduhDGLiHdR5Yv",
  "key42": "5bvHAXQHDczSzrCba2VmWPEWVhCWSDNW6JRtvnZAvz2HnHXYozMCsEm9THAiEHjESUvxPeUiYvxh4KVuPgc3huyX",
  "key43": "CqGZutHoRkXaCqeEEdkWmBvNAPpe3aVHzmxBPBt2vNehY8siKFM3vtgrce215wPzYivJMgPU7TwAABSLKpRE6Fu"
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
