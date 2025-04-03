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
    "RPaMJ7oUmFYKSS7WixhFA4KL5vLKJjUVe9yKkmfHxSpMhd89uXFkB1SkuyNmfR1ifSf7cipNYSMpR3s8cCniAtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ECXvGncuSQURr97iaFiM8BtshmNcnrErzHCWjaqtciZtNthZjpCc1T6cUdAfAJUeVEd3LREbUxiehzraprTsVo",
  "key1": "dGvcxpBcxDr3seTrzdZRacJLXFiuqpVwEZJpVX4HiMMQA6NhzS2Rn75jFZhrPJkQa2h4soBaLBtJyRz8RmLUuAc",
  "key2": "639ZDC5ERsA2zgDknqaVdwUCukixRnKZ3Ho6gCjmUdM76Dq8thQELrPJjVweG9GUb5XeQtZpAaYwrmbEVF3AP3DT",
  "key3": "23MxXHQGMjmZBspJeAgJhq2aMNz8wNNMSaT6NP5TmwJ8sa5boDn1SnqapwHCM5LVK1PfPWFzVM33gyonBaRea3pY",
  "key4": "3YfyQdCj5WU9TivaVpCTV2Dg9ubYikBAouhYB6SxviND2tyghpS32xXwZL4VUaFY64hGzVjjmy8RaG8ehMG7M2Un",
  "key5": "5SSQ7thfikjYrVsku1n3DwfLecmo6VmTvwGy6Tn4TBLGkAsuf3hnmA2hmGJXZMPGouBxn39PrF7WGsgiD8CLWXMD",
  "key6": "2Y1yVLnEkeWiEV8exHUHDB5NLCD6HB66tSD4qC2zcLRyHeBMrbPqNcQ6LpbqeCpZcSFsJMxsAQ2RDsnyUrTZr2ey",
  "key7": "dTCFMprwDQr3wZHcKqqmY6MowoYyArUFy8NFJJKmagThBr3UwWXksSDiQ4Vqo328X7qUMtV1y2knX2eBW9HgWeZ",
  "key8": "3U1HApNfc1ttcf4tpKE5ktf41nu7RXNmaFPjRiKipBv5TjgxaNctBhV8DH26eAggcxuAm5yAhNkgCLHNXrkdkjTc",
  "key9": "37SDUZuG8U9V4DDKmLmfdoxJci9R8XEeSSuFu9JC1aUq2KUvGk58nYwJhyg7FznpPRGYT8MqmredSQ4rYAVL2zaG",
  "key10": "5TuwhXz3NH3asWPP6AWPjnbNGHbSPFPh3A9Q7uCkFm9XP18GdFG3PRyXZmFpKbnNzdnTpSuA4Lu4BMjxkbvES5md",
  "key11": "2LGhFWHStFeAgX3cscBSCmvseajzMoRzz6AFym24w7Gi6CAMC9L9C9byFDu5xaKjhbtDJDUZgATqWoU8umr4JxGV",
  "key12": "5TBpu8ibGsUY5Y5eetagBcFHL3rqJGcrLdnT4ocZgZ6c1idNbd6pyahp4tWA1EahPfT3fPBc4spULqdndqo37Lji",
  "key13": "3jmicdrbEfNZw88rPvPtQBMadxfJ5FgHKhKpbhPcNa6geDyLgezRMsUhepskFCaQgYB2DWksUv7UkQpDGKroQh7m",
  "key14": "5MN9rrfVz8HzECXXeTaMuhjRt1J7ohwHBGMK3AL11dtqqh8D1ogvxp9xesUsDtXyVq8E7yYeDqSuURbWQfTZq44",
  "key15": "Es5AnSykppVS9rD7QKACHsvBYtdh8MyYu29T6bSCDnXWKeXKAj3K275uB9YQDZQzmj3YgPU6jLR77XhGV8MB5uT",
  "key16": "5F2jKBqBZPdq3xqeurqtU6r9Qtxx4R7BSvDwF2V14MmqFuZFmaaLNiCP7A2jMXBBKPS9NVzKR3WxPfCdHu5QHzs9",
  "key17": "ThvUsZMKWJTSCBcjY4MqzXivux9jeAWGoc4yrCH3LS2cF7SGGfBoeSkGXHnipwzPAu4dfP5bik4wd2W8YNE8DhQ",
  "key18": "2auuApmiLoYK2TatEdKD5XhvHCy5n7udsNo3TMz14QNubBpDdAMPyBTJ9BFUQfJVRJDj6GL29giLBEp34psMvDuj",
  "key19": "265H27WbXQxJdn8GCyqQYXbphrxdsp2S4nTtqKajqoL9RDwWfuQwzNV2ByfriyiojpdQRd8KDWmymTsV6YBDnrf5",
  "key20": "5Tg9s5cpFBZDcDSvqu8RAZxtrKoB1gXw6AmEtdwW6BWX4vAdoUX6yaPCxT6oFBZQDXLZ8SKjg4f3ZJuYPaUdkTbh",
  "key21": "5xXAyUGD5BFjYNhUPvBr2YLRrUoZqHugScW8mMtUSwBB7qzSFbuhK48x4NTFVaukygx8rmncTcQzUUiRjQgAT4KU",
  "key22": "32MtfKmJTW8RDieytcsLT5VdzFBpmjrpUQG25mmUvuHmLDSkvFm8TFBAUiuRtfUaSv5R4FZzmBYUcXb8V5ASfxDo",
  "key23": "61ir62dYm82CYhUS6V5XtjkanZwUQw4mgPmywtdwZjAVzb2yaWyjmmctSsUT2eWiZ3F2Sjq3xNN8Lub4a1vnzDui",
  "key24": "3xd6QRn3TNPUGyp2svasgH4nhnjGvr6eRWu32TBV5qAqYeronpcj6HUuW9kiLxcJR4yorUm6Mp2g1eFThUGAVuXA",
  "key25": "Br4XooPWtpnCsMJTXBbbQ22d2YNJRC5hAb1pySoANcB2vQMtVG2gWJBhkEB1tkD9v8bzvmcTRDW2hRe5JXCLq6v",
  "key26": "4Ukj9rxBGYf9ymAJ2y6ZjuzoNAWppmX12FKkZbwqajDXZiBi2f843Mohvf1TKyR2PpktRLyftzwmgo8orPQ6T9CQ",
  "key27": "DK9wzqQCcNMPqHnorDrjYDgZZB1QKyWhAwEPWit4zpBhV6a7fowD76pUgutEbZSCpzXSMJT3DYaLSoYS89xLiBe",
  "key28": "5SL7z8TG3tFzaJPnhHEUH4CFy7y9aUGpzF38gLEJ3wmwYhS1Q5p9VenNSvJRncHY41g6wVbqYQFTYHZHMGG7XB6d",
  "key29": "5h2bPywetTavsJ2ZtLbNmfdf3D14Tg9Q4aT1Ed4dw8aHwdWkiFDnEaEoEEeZe7Hto411MV7gB18et9NSxZek3fP7",
  "key30": "5GuuAW8ZP5eHVf6eDercs1AN36orZH8gkZLWXArkrUjKKdPFQkRm7nuagq2ngb4QusEHfiPYykVGvg4WYRGNbfHa",
  "key31": "39AmBkUxUWp2BYDTtuc6HvqFkrYPiU5xChxFbgyosHePRqz5HTHcu7wSXL8tx7kuD92se727Hebp5FP1EprQFrDM",
  "key32": "cux1qgyhduE6uKaMuGpjukx1gM6ASdqAdtDMgwWWDUbDyybizYaC7gvgsU3Wz6Sd44WC6Ao9jKVzkXWF85ArbAT",
  "key33": "5J4jbzdBEHR7dB3fibJfruehiHaWqe6fdGgUpA99zw5AN8zJkkgGgsYgFYSnzHyxQtWtjwdV7MDhSwgVcb6r4psj",
  "key34": "3QPDTYqK12HwkfYrAgM3nLnYCVWZ62xbgVNStk14pez9ehmyaKCd7u33ru8r29nfWXp5QBo5i54Q5kbQmL7iXvJQ",
  "key35": "4bCCuoKnGecgDRsPTLE8JjEiFohFzwwYbchsxLZYYiBrShkRQ6FQirJRyL52QMXWpizCa3i7dJHZCD1asQpyDbLH",
  "key36": "cwwj2LTFXjf4axbNkAQ4JZnit4WJXDHHpwyf9tUyPS5PKekBxQbwNxUyPpovNt8T32XEXiH86roFe6T2DEG21fj",
  "key37": "srRwFmw8LCJnU1MHTyXwBstbtZHtsLA1H5BdqqC9L5otXu6vRNSyvb6fqESmE5HFXsdz2VbFFy95SUV2ynM5r8f",
  "key38": "4evJtfGpprDsASWxRGXnBcWZ4U27ejv559tMy93vx3QuTatXA4DQTkRXS8Qks1BYrSGx9ZvVw6X9JTFUk2hNynus",
  "key39": "2F3b4RsvkXSPnLrLYwSUm7UDxktwcXbP1YLLftdzWgERCo9tkE9Ai6ThAd2vJw3rgHWwJuQ7Q9nQvT1UoSWZmpYJ",
  "key40": "51gW1pvBDt8cTBkVb1Gufy5tKeJH1cunv69HXPLRXiCgJkFiwJMGfHoZ8cyVJE424J4FGuwU8BmWELMgBGcHtULw",
  "key41": "5XRNtzZwvChcBQdqUdMeNDH346gm4bXqvH15saErmhUqLUhvnwpXT5tCpEqzGC86SKhsAYsDhYyVV112zU3XrZM2",
  "key42": "5tJs17B7NR9q2Zeaa4YzDQA5G3NUUJD7sZrYrKL4AmYhhjXoJA7sVHvbH1ZWu4GzLPxqX5BpGToS7YP5gmET5CAg",
  "key43": "5tsn4QYinAJYjvjkNFxr7UQ3PzyRonc63jPVUXCe4Myrnx5tWaf4Xz9Tkh76zrf1PX5FGHSNt9ppbuoQGL7bnC1c",
  "key44": "5nDngsJYPYNWJQdeR6JA9TGRk7uvHAszfMX7eTLkpVSzHGU5BDJC9Y9hekW7NJyq87Y4UQv33ZvwRa1KWSzBM4pA",
  "key45": "4QAVv37q7JyaBVjS2qtacyJ7pchBPpa46Wo2jUmkrqx6wjx97VrnmSLXERhmxHLKTLfizCSYNjyT5Zp8EXv7zikj"
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
