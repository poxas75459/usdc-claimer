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
    "31QXkqVnfa9vAqrKft19XmNVbWThmXvYuSoQTgQCBiTA98UsF2aWZBmKsK8zMaeAk9PSvyFhgD21ybVr1J2LGjMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWx7YNQiXUgQCUN8Jt3BCTqkvTQ4RcvJ69eJENpvXTsr6mBXkXhweD5xMWbahFdVcxKSboXMeqdWjfjUoob2sRj",
  "key1": "3QGpxeivby3gB3no1E81MgxY6KsZQpwmsVUoL4nFBLwnvi51atiGLxALZkAM64A8g7xBb3ki4WVYzmPCCs7uYFX8",
  "key2": "4bLaUVHTbEmdE6KJwvijYch5aGhrw2VZjBe6fByGgxWW2nnTgmevnn2MDWyHhqWwzJsemCk7RnzbUXDhYkbFcrbw",
  "key3": "3rM4qiQkt93UUYkxYY8s3ajSVHQN4psqcdk8hH3iQRUp1UygsffkG3XkAfqKvYMdtxKg8rjtt7wsLFZec3kWP3Hy",
  "key4": "4LdDhzc5JynPMt8NScQLJx2kc9fQvFgYyNxpuTaEWvLdd5vCpGKkpmVfRB19ZRJNerWxTV6XEuu8HqdC4npMZJrZ",
  "key5": "3QAjX4jJy8Jpaxw56x4U56n3H9dcUNj3jC1Tv1qsxMGUdkedz8E5gj4Cm2DTi2t6SfdgsuMBivu5HsReFw9b3MGJ",
  "key6": "5dPNQRT6GNqvD2RKrrdFB1zQQySc5SbyVMXapLo2EtZCdMkZ7hzzzxHLPEuZarpJxjyaor2dPknvoj2vBy6F95A6",
  "key7": "669jGknBVXDeDmKDirTfkhbXTmkHrYRNEBGG8vxKSyq1whoEYPzjjfLPxaxEgqZrUQpCkPK2Nd4LMZBB5Bd44Tce",
  "key8": "4vzH6QXNpwQqxgBAnUmt8wG2NmB6X7wQQaQVwagRPF1M9TGTjUnupVCVaovNyRu7zdgD3oto2PaVxb2wQXj75icp",
  "key9": "qnJqjnZ6PdWxUNo4H9E7CuvnFLXTQaCykKuzcXnkkSkC1ioEr1PJ657dZyRmQ97hnRCnEv7nmQZm9CvVygXGq6Y",
  "key10": "5L2NHycth3YpeSv5hJGoD16zWDvZVEFkYdY3t5EMyFt5YVtgeyhPk4hceEaNoNEbeqEoUA5zCsHrbQh9aYoUNSqy",
  "key11": "DcqQzzmnz7rbgubTDFoD1CzjoSxGcX7fGrZXvrmYGmeh2LUZoc1cUdQ7RG4hv7vpexXxejdTDdX3wy1E8iTEQEx",
  "key12": "4SMPXVCQ9qUQx6bqVbYPmzBjjFMfYg1AQYeYysRACn88HkKcjMPzuikBW3QfHWW8E9yNw35nJA5rooyBV87hgABm",
  "key13": "5MMr4FSjrFjbgM7WbfYoqTzcRMmVFcAksiu5QYHRRuw6eAD9ZUhi1WJJUth8ZGWnTCmqcWzbmgvCijtw8dk3sqyE",
  "key14": "568esKjNCiK5bUs4RfStEGRUzSbxgNiR6v1i2An2rcvJ8fSBoHHHuKDAgmZXBDVEGonzPtvH7TcEWzCSCbc8fRNf",
  "key15": "mJZjinXa1SsQySwSbHoC3pvJXZEsqGJfPbcSUafLTAvj1fP7tTpTDAiwLXDa22P4ooqekSaw4bM39zYrfMVoBiF",
  "key16": "56sNriMhUUPh9Jx2S8nvCXfshJemvc5nFjpGkmZhkihFU3Kn3oe5tKtEEpaQqzWVPgkgEXvvDrY57rcB44wKr4vK",
  "key17": "3CSc6nynQaNrLaYRNBwrQy4ZAbxbU2nxw9YqXDJgDSokYBzw7zA4vxJ2eLUAh8CHiFzS9aS7orMApu3DqCQY7eH",
  "key18": "26NyKQCJcC1wG3GEt34VrjJd8N5Tkw1Pwazy6p6euuERm2sDX42dJrweFr9yRXv7om2driJVoPmwgf41eiid5DYd",
  "key19": "2qz9QRKf5yKshs7H5GwCVYkh9Q88RCWEUdd5iNoc8HNHbwsxZxA9Dw6JriZ1SKTTZ9nN8WrDqoURvhGMq2LPuu9J",
  "key20": "2dWqhDqAvT7GiC1f3AzF1bu2J9qMK6N7PpKwUhcTEvWhr1yboKHa4PrYMd5QdmdQMF5t4QVmhRJ77z7ZVVicajGV",
  "key21": "t15FgFmoJFJSZdPUkvF7VBPru5wf2kQLLpVZq86qciye4E4kX6YAnH2Xoxqurik61WW4iY3WnKRkrVmvMFpG4GM",
  "key22": "oNL9qaQTyrZW8My5rYo5GbMytQ9F6F5MnZ3Bo54oWjsVmU5rMPUi77qDLxgFQiwMpfq33C1eLJMYpEw18vTZBQi",
  "key23": "5riD75aeh19ocUh5MCkBvwuUajWCSxySyPKtJCCQzpRcCmBRDobjnReV378ouj1Qo71MaKqD1HDsmwbFKH4VEEVG",
  "key24": "292cK5wcTWSqnbdECMdhvprvH1wGwfTfLHmQLTHUGrnQoumFS4HzSfzuNE62vpGn9Q8NWxXtScMpevVM9S5Wad74",
  "key25": "2LM1wp9CanVeo6PX7iAZeRB6RHeGHor6ikzz8Q6DkA6V6nVVEznYoiRLyCDhw8a9bPXPQAcGZR5587zZJCQFc5BG",
  "key26": "4gWC9XMsz6grc9sVapPziCjt4SHCtBLq2MGkW1HjFBqoTNT9qTgWVbnsWmJ1GyQCutbNArPaGRnpwLvy3ZoxJd67",
  "key27": "5deKDx5NfVesB9j4VE1XBJH6sabjW8R3rr5a44K8zokjLEbE7okZaMpCDk4FvmmHTTVUzMqy4o698KkQbEBxthMW",
  "key28": "hLVncbDWUaevq4nhJ4KQz7B7CjTCQKE9hcXwerbqaFCd9iBMU72mY1nHYS81sNEMt3axVYUvEzLomtYzuj4Fpji",
  "key29": "3w27Wv45j7iFywxgkWmkfpuP1WsdXWbGukSgNuFEPbbsDjMoEVJe3YcEEJqf3Not3BsgEUg2P7d8vDVCk97v5EnQ",
  "key30": "vPr548JkzZ9Y5GSRto1jDf3DhsEjmrPQpLRN1kxQgPLbNdATHGGZLqVeWhvniyRHQ4mMAg98cuQvzPaJGDwbivw",
  "key31": "4vtBKHY6F4irjncSfJkfsBvgeEMw5yJzuBR1vhhRewLQVbF6ZaR9RBtiFCET6ZxNeauTCMpZ61c3KtZZB1CyJhaq",
  "key32": "2gEtm26LqmuBVspWDVxGLVAwnBoksGsWo3ZZ8NvAB8taNuvGJMEaordhmoKnEGZAVxBCja1ywfNqfY9jUfffDwqM",
  "key33": "3JXokEmmebQJf3qkAwwMmkAFdqCYrZbtmX2ys7RLZkXA9C22Yw6yzAngCDnEdEZkgZzHgdikAeu6HfN3VAefNpRJ",
  "key34": "2HauaZHaBPem36bkZ8FUDhEcjbKR84xpyLWZ1yhQzDeEX7izGcaFT24NeFUEogn3SFumGErnKFMZt7px7dLGdj7c",
  "key35": "3tvhCAp1fK4S68X8dqFNASdXazcTxhJGz4jamcRTyzeBwc6PpqocTTSEXvnDGkBnL6YQpcrg12JqjiuzGuaMqUHd",
  "key36": "3bJXnSq4SDkFtk8hynKDDLx95DB7SHy35KigBWdqxzE76b3S9UmBqeV7ia3iCVPvpaLL39jE6P2n6zs3TNrCB171",
  "key37": "vsjVuA8E6E6Td6SFTwLyc4d1xbef4aojd9SjB6Z8H9fVSxVDMFpt3zBYbu2t93VpigzSFWKMuRt2wLF8ZV9T68X",
  "key38": "ACT4ckuTH8KC4jPffsXEhoo5EvPZPt6aFFasmxxGQ5run466Mo3J5Eqh4TQbZQd9QXuG2avnxub6R57pPqXrMqn",
  "key39": "4rK4yK4Rgij47pci1Lm5w9MqbednLBm82wBbRgLRMTEM2bCMTyUF7xapRPKSeKC49Q2REQwpzzjs5TVqgbudvt41",
  "key40": "Xubza71uNTaVLy2gaEFtaNS3UaZ11hQ3rQsUzRDQPcFZYHs21tHDD1mcfsewbPczxyQt6DZcyGMxbrsdr6H7JmS",
  "key41": "3mT8zDwyMEufgwPSXAzWkowkHYEsMbY4PN4KkauR98J9B625iTafxMcxwcUFSA3hUQeeDiEv5ncksXogJSz1Etdh",
  "key42": "kW4ZTPL2FHcf1jsqZGWx1PKfz5nCVSDtcsGs78aY2a1qT4Dnk84jEoEmmnKzTvhh54AJ1GiHUeJtdSZUs2D6Bbn",
  "key43": "4mwyUgnqu3JKLm9TvNvtu4dYC8QFAHBcKkRXyiXiqrDWD2M1yzWqsnNgZyo7vSAmtm1cNisNku82LrZXeEVhFNRx"
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
