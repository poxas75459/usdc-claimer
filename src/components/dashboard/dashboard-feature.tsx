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
    "TEJD8rxocKcmbX4SnbAFAHmfBzdv9FQsSxSi1SLKknbQ3JhBBWedPu4oYjq5UjR7xF1zTpugQaAz41LvZG5cnXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVRY8a7SqjGQ6FvkAhVeokYQEZtWAvkV8Pu58MpNu99rP2ZvF2TCEwYs4qBaMk9WAUsB9HmqjF2uAuyK7pvf5Ac",
  "key1": "55FdgkW8hai13ZeDjzxUhsLKnE91vDGMQHnJ7AFKHKHJ4mUjRTTmz61MnSo7SMfVyD3MY6uVkvegTPDmRTCw3s4z",
  "key2": "5Tq3Jpc73GJVdJtGZLEjCMPVSDZ94wXwErAA1isqhXT5UGoyhW83bZLEUdG3gBsjgmYW6J3wLVX49fztk1jL1jg7",
  "key3": "2B6axi9EebhsfQo7TzorTagbJbGT6o1ttFSmpNqsTDUcs2p2W2VYuWQA9VSLaEp9HRJ4vUA6N846K5AwRifMRsac",
  "key4": "iF9NN5qdJQkPUMu57WLNoxj59gP7HUcf4uyx9EKpt8DcLs4L53MxN1tLhPV9NNqm7wQ1SsDbacUESeh4ejPzcw3",
  "key5": "4iXGfqr1H2AWjyfgGkMNEMZcCTrNa3ag1XiC5FDXqvvykgUorTkU1co22DPTxQrww8ksh6Nze9sBFwQdm7bd8gx5",
  "key6": "4rUUujDKSeB5WjbZB7E8rNQ2HuWZxBGrLjroHz2JMKdbxpjNMmKXwChhRBRaF1EyDhbbUiBqBnaCj24HfdpMrHWt",
  "key7": "4gBuDAgAMcSv77hTaf52J199zpRMCrbrUNyTfwCSsaGMY8Az8jFFszGv7gyLe4YQLCMUoE6JzhrGnXBaW7q1yFYs",
  "key8": "3Z3szEZFZGaHCYX5yqR936PTsrLfDVWvS1yuML8VZ3HE6XzxLwr3vXSeCHP44cYRksJnWAwJ5Phjy8ec5DWEc6AG",
  "key9": "3KyHJnB9Tt2MaRD1XUGYFXauZwWA9GFTKHptwVHQLH9azSzzbUnej9WszdAudxNAjSgHGSVDC5HgkxvaBpGJHq2G",
  "key10": "3RgQvHqzkeKAEQdemJbgB6V3oxFpgd8vVfPv8uKFSmDgorC9ZeJ4b1bsb1ANGgBe5u1d1MNr9rykTjkXBw6NJo19",
  "key11": "2Y73fV4E3xYrZT4vwnBbepMkcUn4nJUroybNsGZhAQCfZvkiA4pDiU6YoBFYXRuwDm22gy7aZ7dVojQqi6AGHfYT",
  "key12": "5zujUu4jdLsaF4XJmNH2Y81Fd3R6qLtS2sGfBu9hBoA9SPgP3oBwWs68TWahZK6hG2RoDubinPo5BNs93BvFa9jL",
  "key13": "2R1mB4rqhi48uHyvMBKTHfQHEqmJtQFdC8MpYsbXVmqS3U3VgSBWq3nksPpYh27bJ7MAZR7iiokFv6DUMrrthPL",
  "key14": "2EyDM4wfh13Aq76fwCyzM2TUyCLYr4u8v3DYyGZFd7C1hC6VUMqzTB96LCtSJgzSmGCbrvUKjDZDxqadhZ8GKXhZ",
  "key15": "5ckRjbiaH6eoGpXqiAjWqCg27Y1XCstsv4fKfVuHzig9VykhGcj38QJDRBxjTZRVqbw1UH7tNneHLkgFPKDs5ZfN",
  "key16": "2HJRDtG8A55Nw6aGLh91TC7kdyst5dgVFCaYXk89ZpWbEa2Fuz2JUEpSsq8kAW6pKZZVvN2jFN9z2HdQZ8CorWg5",
  "key17": "4AZHssSi32AXor2hB1msRSQPqvxXyznvPXfsdZM4rjnN3rtk9adgGRiJQr32g9HGdR8ACs5iZkKayc2deUSPcj2t",
  "key18": "4QzgzJhAnHNp3oJk8yidzuhU6BbC4osWdE1n2zHVaWb3CcCXj3SpsnoE1WJSdVHhb8AeQhswhrLZFcqW3PF7ei53",
  "key19": "2LHJugrxSuzxmgRPuwyr3LE82pLPEqqEpdrZQtGA3U3GpCXuEXXaLqEqrVpauhJvoRT8ZfxQ6bKS2iLPWY4gprM1",
  "key20": "9iVWMXwWo7E9pAQUy19Ym7ynfuWBMAMzGLm2FExbExnQSpZUb2LZjfqQkD3G9pWi4LuJoVrLjza7L9GoduiB3hC",
  "key21": "3GeFGznetT2wezgjQjLDoopMDNNmSUjyC5Jrt1AR6XA6viBbNduPU9SzJZW1g4JrddsNwbSArXuuZvbEaHF5NyT6",
  "key22": "28wi6WNztbr8xdJXd3JR8LPuURXnj28SMVEDAfqfhsKc5Dsp5V6kaMvoB5mCqrBeVCJJsu31gMziyQazH5iFdL47",
  "key23": "Rpdx8EVumseMLyMCE9XTrgoky6wy21hfJPRj2o4kDLkZYRtex8wmjzziKRS8UkV9ANqBKJ4SXMt2P9zQrp8DDKV",
  "key24": "dT36xGTtuQUF98kKB1g2avWjs5V57mNqtZRr4m1tRuGbGfdRX7XDX5pu736cQtZLvfAYE9Gxc8ntKEXRirEzGEG",
  "key25": "4GM3LgKJXY1jQC17NDLQGemduEggLyHYVTjpzfmcBrcZU6dhVYe2nukiDeaSihT5Zkw6A7ckYZBUUpvXgz4XKRMy",
  "key26": "2jdE1WvAgr2gshaXBSqERigVudpEexwVLf2eg642NnYLBiGViKi7sFVcnoEm9mBMaMEcED5GAtLDzV6drhdSzSJC",
  "key27": "5AvybhPEKMo9Uac9cMgcFCF8wqFv2bsFsUXomq5CzZmXhF6a8VyxadP6Fk62VjiGxLWAQe2xtrWo9c51xcYZKJLx",
  "key28": "3s8fXmdKnnqRQdBrQ8HRkfDQGwzAzVEih8GwvLfi5s9zMnsYik3Qnbq1Mee369dhFsiBtfz3G1ZhaUDDMR1v8BKA",
  "key29": "3FBvHrsHf2ygHtiPUrLSsAZd4eq2Ey2CFDbiYuw6y4fQjLi5bcnxQcQYeGgTw95aJifacsBwqwVcXT5TtESeArmW",
  "key30": "61iFFDXCj5EpibiatfEywvRjrExbCXxnNBnKf6aRL73MS7jkHyQ2fCn5svR9Geof3HXGLoeYbFUU7qpzcS6DNT4T",
  "key31": "3dafCMLuRKdusYJUkisRQzKHhQVWXRBrWEyTYzUSaXTxetaXD9rXDA8vWhAmX12ou1MF1nx2Co2Ae2eeXyodc9dZ",
  "key32": "3bSEoPG7VMdjww26uHujvsVtgUQDu6r54EDoQS6HNwiThSgwpbXjGTtWUSVm1pevEtLXFLebUBJy9bNLwqr1uJ6k",
  "key33": "B3HiJHDsdYUm5hA5yii2ipy3bPLS5NhS1P6XEF8Ag68KqC93824B9CzcYr2zeRiAUNT3mZiHTD3qMuQQynSj1uF",
  "key34": "32b2WSpBBARJpBq2cQihhRFJSLjopkmVpbFt5qWCGGcjudvD48kKbgbhfnvfXQ5fEnRwS9xGmtSwqJurp5RyAsB5",
  "key35": "3XD2x5D4P14Jwj45Yp5rVpUD1Z8xuWwobrymSd8xRrH82gYgUro8Avxg9NkZCkybDxGNUfexGZkBbiHpcTRNTVuL",
  "key36": "2dQw4qzBNHACoYZkxzWJxb3qAHzYZrvTao87mpKbCiZ4dPXb8iUXBGho6vZdc3KygCQeWDDudM1qcaw8TmKhLQdC",
  "key37": "ofam37YLXyzk4aCeEVUtZWc6ELceGEwH9r7tdXBDdqfJf7xk3wDPx7BAX54Mk2KRS3hkSJE6QW3d3LwVGYcw7Hc"
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
