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
    "uB1hNj2yztzJGcU42uXVmSPMXqYLksjhaPYsmyfjNDNy7hj4bFBMnKaSyV3WTSMMgWiUAk6eqPz3QwUbne9Hoh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrTbSZ1vtTK7786yic7M8jM7aiqvvTUu58RFnEG8Ctiu8w7TWQzAP6Kay4dUAzi54B51c6WkNy4xHr414dWV1tQ",
  "key1": "4Ar3EH7Cuph2LXUHpa2v5T3BaRbjc7fGkbQ3HBdvCNVx5YheBxHj4To1ZjJGrYpapXUTi4VrjYrFyWopAatmP4A3",
  "key2": "JsJ1MQBfRiU7awobtcYAL9K1V19ZRN2KjhBXaCubn2uTCjLiPssXVzY9ubRxgyo7gfabPi1f8rBHV7Fd9iWpdJt",
  "key3": "2xbrhSA8mw7bNonHT7H7JgCSEU8egaYnMUmsMYcDD7ciBAxhp21uMraA4s6WWnMzhFfqELkYAfcoCc6QDn1rXxjn",
  "key4": "4oRf7sKuMJN7Ev2qtt9oqavLyi1AWBZ41qdT57PRv2p4bR81yWEMQ3MxucywkYjQWW1vAkrSRCdwwL3FWNSxG8oy",
  "key5": "2RS5M62Wri7sT88jtCoBmiVHw4P4nUCzhfxL2Frsf7sD7ftvQhqjaaMArgm5sT1cbdMwyjaQE4bf4mAh8jJmHPqd",
  "key6": "5SFQChvhs9F5wPvrGeAJSkZCrJruwyKXrwdsKpXF3jvsBpLuqet62Fk6RVqZ76p1bQCeXaahrYqJNCLwckWNxfJJ",
  "key7": "5D858manKnxp2wQx4LvRqXZAXw1EZC6hpv7wYbHtejK17igRsqHqjugzLy9uvns8WeP7crckBdVTdhEwFZZukeRf",
  "key8": "5ffV97tpykHqhhsCJjqtmX6wfk2JBT14KmJF9wWsPorJXz1fVEJrfytn4bgZE9Ne9nRQoUwv5xwnm8pv4fukYpgx",
  "key9": "2iBAehBMQvahnqWP6BcSrh7pzxfApd7euYmowEfgbugWccKZo6ju837ARQBYGgiY3KpbhDB33Qne4wjKiLH1dmYY",
  "key10": "2rWv3H5asqqDsN7Fp58pTfoegQ4gJFa57hQKRLWDbbtz527RLcXLF3JGDgNLZCcfmEhXE1uBuUjewdZGTGQdbc7k",
  "key11": "qXoDMySiXZVSPFALxBkushC9NV3RWZHRcvhq2bFmP7uYowRLBhuX1nUmsiHra6B8ufxpkbjrC7mpeDnvjLbGomL",
  "key12": "3wmYfkcS4UeK2aApDKo7KDoVMeFgJRsE8oPAhLHm9jyvTFcr5d5VZpmqkhReQVikyXkcpdjhQ71virGFXV8enEyB",
  "key13": "3NVq2ZvNjwYyaWcrWDi7gT7vZX6eU9bf2qRYLdnMjLxrRD3n7PBccqd2wFtU29YL48itwRXEc1U2PQs5rT7gAXVq",
  "key14": "29MbGN13Pg1pUUezJqtynTJXjDcRBcdoEtkTETFiFyiVDew1E1zPF3qU2zmcW67B8seU6TQZxvAn15JVYQ2gPQbZ",
  "key15": "3BygprAYjyhwHo5r9RY4CnbWZegWY8bx6CznUcDPgA951LuUqcd5tAXK7nRydJM2V5puWtt6JURMQhFRKLv1rxur",
  "key16": "CEFVcLFRn7PGdVjJir5US5mckAiGJPxmJiuduHFQn4bQL5MWNyo9oHVmRtr4Pq6mwR5HP18bwJjjjZvbNSVQiTZ",
  "key17": "62eLrS1YqUucF7DrthK9ZqdyR8tRe9cqSmpkEv84UWj8cumfmwrDfF7cZ4USfFjEsq7epGXxKeKYS4goC8eLfW1s",
  "key18": "41SVp8EuN3ju4mD4rzdrrwYJX8wXehmfCr79Zy3iCfDuyEmF8hmzQ8Vd5TcmwgqB8Bweynvi4aMm5mYBA9zLMQe5",
  "key19": "ReS7bAv4Jv42UW4q4c76Kmt3wSdoZaaR5ZBV5h3WhyFExpUdFsWxZPwgdjZ81coHQPpFFiWwXGX1c1cDdKtZUk6",
  "key20": "vUp3nNr2ZBJd9qjndvPo6DNoSfB8L2yVRUwaxZ5857s3HE7Q9EhCrWPS3JYXtu8XJYEBU5AXMgkoggxYkJfn81f",
  "key21": "2JtpWjPNjbeXxo7Q4Sv2TWyJ9gWhwhEPHUBofX5gvo5L3WpZesDZDwXZgmQrRtKGXqGUSqb4y7bPoVpw9rBDhxDZ",
  "key22": "2w2AA4AnDbrF1tqM3NkJQDMjRTnmFu1chCymPt6VXtLbdwPQKgEtvGh8y7ppBqxzKZC2hDKjTzZbSLWmRCUPzLsf",
  "key23": "237PAVxR2kak1qTri8WWrQFqn58sjYmgybzctjeDvmEwrD9ayjKEdFv4qWT9qSFR4psbo8wRQyswCXFEgG6aizvd",
  "key24": "CqJZSroteJwbnc8ReGFTvRR1KPRjZqJoRax6mdMET37aRn4bfsqeDTU8CT17QX4e7k4oz83R7EJZqHRT3iGkym7",
  "key25": "2FFrFybdyQW63KZciDKWY7KLvgPNne72GvfK4uumT75HGfTprJjvHkjVGhGX243k3ebTEAcyd15fBqz6dDt4XvRd",
  "key26": "sexd6HZ5y63LHuSL4MNZ6S2LGCVmuqLG6Ee9itUzESVYTwSws4bfA3HQ5xiveCYaLXegnmw9qQEj5p1cK5KkHik",
  "key27": "3Z5BBHPNSiQzrrZ4ChuKL6WGY4YgRt7DsX9kqhtu4BbSbkpme1uwUCogkiQwjjioAYPfQq6ipfBD72KV41XmAKt5",
  "key28": "4vR6TCcC8rgufUzpUCPbAPYtTdyPV5Zhn8hU3ypbGS5URcoUSjf54WhdavFkKWAPL6M1BCsfxTLQC73ADJfwFcFg",
  "key29": "4Cq8NxBkbqyNaZdvd54zqEKWnxzoPUEZtmYB8HS2m4c6p9bswkNQxD7vdPbndTErZw3KeK1hMtuFBMsFDAGr2PLy",
  "key30": "h9VrwW8GpnW3XD4ZcM2xJHEHxhQKPozD3XhbFLEr6n7bNF9573wdYfViimvkUZUWtFmtUEBsjKgp5qHCEuyFgyp",
  "key31": "23xgcvZcbLATy7sSeeFL1QnMCUiixkgFHYpLexk7589KoVzpmHSif4Pw6utLYgNZL5hQA6ZmfJzV8GXCucZpw3D9",
  "key32": "552g7yYHT8vhHmYLctrwRWbLrng5o2Y6Kss9UREkR4mRMpQbjvv43PZuHswkkA8TKDXMAcZepbcBwGD43nda9tjW",
  "key33": "3EbrggvaNpHAJMyj7JaAjxuyBXtDj9U1BrJjUqM7XgD63eg4n7DXgjftmmTmKuAFuyrcTehBp9nNVZV5B9fFsGAj",
  "key34": "5RdERujmNGUoDDmzuhh1X4i1C6LD2B3euWZkKQXrCbetE4THVG1DQjNyVrxsHDRHVXKb56GtF1beA5ocfaqUL43R",
  "key35": "3PdxcnLMdsR5jTEPNQt27XZMdimwQGju46GkZwwanefUmc9U4S8uxLf65eUEYdbuY5qB9jobfBUf7dyh8XBQgxB9",
  "key36": "3ie28TCBUYFcgSczFZxVPM9J1Dw2XJT36AVcqScW7Gv9fasMz3Xazo4S5T5ewjDXPadBug5HvpFPDAX3eiQiMJC2",
  "key37": "235N4XYA3zyLhbKgLcaPCgcgxkcqQ6GvJzqf5519JfHSyTm1PBXU29ZtdbbAQ13PyPqyHr7Jv47HuGBkj1sS2XhJ",
  "key38": "3s9zLAYjYaPGZMxeDtoboz5JfEjS3Reg8FCjR1cp52KxWKKWAfwqcEVSY1AT4i1sHue3VcN87VdE2QJ1g2LvLpP7",
  "key39": "3d4ZfR6oHM6DJpCjr6Qsh1VHQbFxP6nX7B86nWAZRYoRbkJcNLpkQ8LbDPee1AokMv3pSsoNDauAarMfN5q1AQ9h",
  "key40": "2HHc1s6MbW5yXmYtyDud2vNi635tpmZWGt38FCbPheUEu6ZdPPMSPMNseXHFGhNDSQnvwTVgYMR7HfXGEHo7B294",
  "key41": "2T4n1QL7rRkdwyaPKcVJXdf6TeRiUSbQtXyjjrbtMWZsdqS7scB6ZqZNd3y2Rv18vC7k4P1kP2UcDJexTDrCDqb2",
  "key42": "5wexq39mq7LKa16P657zXaSDms4EeZthpEaqeG25morixqQC5Mmhf7syjURTGAsX1DHbn3J34MEY5gmhvMNpuoYu",
  "key43": "5v3ZPxUhjWdCEv8f9yum8wyApQGeNgeTmhcrDJTPoHF8arj9FtVNWoWn9keKX2txKdzTUQp69fXvbX7waBWwQND9",
  "key44": "3gG1kV8hwaMN9vE6LqC9KSyGrJ56FaCGxZNAa2E7xdt9hyN7u6dBA2CTp6wjaqixZws3BcGUvwJMi9VLok8ABvtR",
  "key45": "46H626mU3cmedtx1zZubMoCozVV9HZ9asJgafpnEbdmZzGwgJda2QtcB5ZoQJGdisAriM5irDZdwgw4mN7qeo1Cd",
  "key46": "4We7mRaELipZVuPrGYbPe1SGsZ9ix6BYgKPeyHYUByyGQPd5ME5aaSiETjCAqAyEWk9U13eCxwJDFYaXyauMXe3M"
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
