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
    "3dWrm2c6hexKEwZntpsdsKZ9S5KZzVkVC1zMfPFwL75z8rJUf9GVfsCjJZUCBmUTPCoeSvHT99i3ssroQQTFwMbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjKyYWGxSuZmpwcgbvfF5qcas9GjBMTLxfuhRyVod24KufqEJSFwgYgFQp24WQwMZ3NG9vsRVtxQ9FQfnMbcg2e",
  "key1": "NKSZkPqpWNf5tWaMZMJebmHuiKhqbByRJFBYR6iuPv7cJx99wWt9ULZM3xcZ9dpPNVmDtpWDGcaXLTpn41xM2mQ",
  "key2": "4scjJf9uFND2PHT6fA4myuXF8bpf63jKnman1ZQymHNfN2j5iHZ6GEcPzNp6YMfVMfyHyTKiPdP1BS64H1Cwt6V4",
  "key3": "3rCWMDd2EmEsjK6d2BXdCJ2s9vQGZkXiaE1YGaJqZCRsEUh9dpzRKpH7A5aCBWqFmzzuZtwGEuEFvKjNjYB1GMWu",
  "key4": "bRQxMr7Wic4no5yoBpnPYMTRGdo23zu7WKqiJr3r7wsxUzJNhHLst2RjS1bX8KZ5SLGSM1Hs8R5efXF1dbSvJK2",
  "key5": "5PguL4H6AJSU2Ri2t3fr1t3aaLsyDSnJ3ipFm5U9PLjhiXC4rEL52A8A5XJdxfwNAxxjHqEQkHngskP4qEYWasVk",
  "key6": "5w6spcdVZmtef73bcrmEb8eJZKyH31B4vRSmEahtjgqMT4Q4RM2bCid5VKVKtVCfT3byjUJMmc3ajo5dDDiQ1keY",
  "key7": "5pguybSJeUmEoxPUhTnAfeUh1ZkQv6uJEW15nFWJcFJ1eRuqnnj6hZ6w52h6UURuLbZN7mcnsgYMZG22cfUF7mZg",
  "key8": "4pHHvaUmM5Z1FUV2buJKNq6WtukXZCJvYDHgorjxd2M73X89GuhUE1CKmahJy7HoiPp25rqUSgU3sHcRVEj5DVXD",
  "key9": "m5fRcHp8xhZWafWgGg2yLREikrKkmPs2LMtLrggmchM9Cj1XP4ggW2R7aoe7KCAqgFUiSEthciiwTf13qsnQkL4",
  "key10": "3tsrCJxW7GSjgivdXTwCvMMshj3Tp8jmX1rmbtHR9CVztYVWbGPqzx3JxzJNdssrgdgZrbwV7a3G5V4hT1z1Kr2s",
  "key11": "3vFThCJpksNf4Tqd4fGTcz4wwBKVgXfZY8ELgQVutdrkv9KD1F1TXHc9sGoUMNmocnkjUxm3x168tRfEA5gEtFV9",
  "key12": "V3BRLTW3doXywd4gCKL3a64mMknJ6sbx4BMKchvN6kNqbiS1XnLk3R5DDvKKqwZkPYhUbMY61q3X2iM6p5U6bmf",
  "key13": "3xCKorpKcrbqJJH7J4TcGp6YB4CYA8jDSeqsYzLE7Yg1b2F3EXu7WnqReFipHaZ6kQkPuG9yYmhZKvibkuu8k7KH",
  "key14": "4FHePaTB2ja24gjnFBo6i1zCppujqgtNxrPiQ77y8v3Sf15ADaQLMFWP9yXY4Y3p46N7qTbZcKs4o5BipZjxLXsM",
  "key15": "2vPFeLwQch7SEZp1xScRrrDE7LaMU5DNSX5TNCY5ZH8yJKQ6bzcW6GPbhHiWhDCMNLoFvvwTLe4aGmaPzfJfDHLP",
  "key16": "33Gn8GTAjVrR1bZRdtUs5hLKuBWKuJq1Bda2MkFTrfjcVfSvctzZVoF4y12Y2TnSubyXQGYnb9UePPtLwwf5XYCA",
  "key17": "4S8K5w2FLzMBvFaSH33SrRt6QDGHcxdr2wkE2RfhwYyNqLHS63q6PLLzTXLASC2Pg5GCu2xZE8FNoq9G8csLXdZH",
  "key18": "4seYkJ7JuE8Y9bhmH7kqWDp29YV289N5bJHs8X7QVQ3HCx3LkyY3hC61q8soUcKMwYyWFZ4aadK39acvCRi83cMH",
  "key19": "4msUBBYz9mSL8L6FcVEXRuiCnaB95Y3DLXx7Q1NBRrDQZezpEaqnJN9yUiud44y3i1fZFzUXcqLsz7iY1rKHRbr8",
  "key20": "3GvQwYE4gkHDnDhHrwhtKaJvxUsTR44kbP1mCYpT2zx83MoBdoHxBXGwXhpGk8kYopwHkiXNj1DrkLA4bcSczz2s",
  "key21": "3j41WeWAeVpE7JebvAxJ8eowJXGPo68ZoRaNGsWFv8ZFyM4EbVvTFPkmj3gNHxziaEsHi6wfg14RM5tHdMkvjuxh",
  "key22": "4HQ3z7NvrGvGrxquTfgLshQAMaG4QqAmN5d8MYSLcezfyHX83QvayDV7UL6YVZuSRiLESdYgENtpCx4CLrzmHudB",
  "key23": "4NzStjfBLSYxefVX4H3zNdc5cnMMJsteYNrjV7ypqSMyTmV2L1wamo25FNknPDUV7mj158U3kYRG7hMXatqov9v7",
  "key24": "2xiF5pssGCXPugsnaBXaWSjpwqu3qJRY7NnMvvTB17E9RsXZzYLEb7BNby49jM3tUZ8p1woM8izBdkQfpY4j4Ke7",
  "key25": "3PjWcpLoqvQdc6KEfBirBTqBwsUaYa7hUjQL6ThGkfLNvHQWH9kHykNqWwPzSySWp6xcd46f1ZjTh8EsHwJcXW7T",
  "key26": "5iknBe12GR1B4bsYWkWsKMtv13poHSR6X7ie8ghQKe129nycwndPb23P6TcXHdVg5e4aKxvxSZRQ4DZVNyCy8QqD",
  "key27": "3LgNWWnmocNmsjDyny93ZcnpAqxud9mDHgD2kZNZt7aNpGCHtDW2UPhz4Pu1pWaSEd7hvF9QCxNc5k6Yi4nLAuLL",
  "key28": "4iuAPdP4Y4P2SCsgqgrPnAAHLhehZ4tfg8vucoRtPsMVtCfUf1mAK9SnheajSpkbo4E8EhHghT8nN4CWktuXaY7C",
  "key29": "3sywxgjKDA3yG6wjUeVAg7GSkJP5MnwDTSAgpv5BD3Yuys1o9WWPEvr94iXzunDNsXtFRJcQXLDvPa46fQ21eDYL",
  "key30": "2bDyrjRKpNnRT2LSZHuzN2DphUL8DS3nA6PzVCsGKU9k2H6xpuf3PkEjQikbwiYJ89YHWuuTtW8DEKRLZrmGmVuV",
  "key31": "vfWuttgk2LJAh1W4vBzN6Ao8a4LwLdTKyBZEyLKbjabgFHXtRUFNNasqLe9M6HckhdDAatpwU5euX99SA2YUZ1W",
  "key32": "36LHiQyFRVaTiLYS9zyBz6fbD3sUMUciR8AsbnNfEyM8d16xUFTbWA4s8FWN8cvoy5xb9gDi2TgDdGJvGKiNk2V3",
  "key33": "Gmr2jYWKL62Di1uFh3opD9dGsPwgVTWaxKLsvweewXs34zY4cSvzWHMJhwdrnoWyDNSL6EoML8PHv49JEEsocFU",
  "key34": "ZChzjRKr38vmq43PeV2xnr8BYgpx3DrUhZ3f6JB83cTX3yx34gmzbbx7toi9KfSwnLmc8UHkCHYi6qdfT7Yktck",
  "key35": "BymuzAhS2vHqfFpVWexZEgsHauB8cJLhLeZD54BTYoZTafEsDuzQ21mr7HmnHT8mzSPJ9M9wPS6fuuV27XbZga5",
  "key36": "5ijXU7hDQtKpkN51hgc6ebTUVrQjhNqDhRmg7NXMDo6oJ3nkosmAqYy19powAfDG2VpsisoTf6oUaY2biuFAuQw9",
  "key37": "2xjNuAhjgmu3UKdDfLcG1biBzCFmZNKqHzK4yhfPUUAdBoihnnH743QCgPGKxjPqL1bFtdAH6k3Uf5KBvb7L89Kj"
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
