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
    "pMuqjjFrpHUwSWU11SXpzZxBGytSgUy6EnBPCkhWRros7XEeDBj7HcF55jcJApMc84GvMANGKpydRrfDwKg2Qsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acCdX4bwwXdZUPWxmm7irZyNm4ZwFNtb3Wcqe8efbD8oV1oaxQTjB7KioqUL1XoCLzmGAgQzPpeqh1k2c1quPR7",
  "key1": "4GwXdjgaNnLncRYDvee3yZZsSwUHy93s2QDyWvoBXsTbZka5BHMAF1Yz8bY9H3geTDkYQ6yt9s7PDz6HymMdXzGs",
  "key2": "616qJtUDn69en52LwhLhY2XBgTAsBFgCAGc48XfshWTDPMTwTFHAAV3MmcYSjrufGZPkeEriD1qctvhQvbno5iZb",
  "key3": "4RVAqeb74pbBzxoemG7eFjKnKk1dxDrYWMRhTMnXcPCBeim8oMEk7gENxCwm5zaqwsjiDXwwgxMNk3qNkwLvkFw4",
  "key4": "4daSiYGsdqHvL4fC5MRMUi84w2XjAzbHJbidKBXGXJiqP1fbSSUgykAToDntUfnVAYJ8a1oYhvzQKcCuBXeKHSCo",
  "key5": "z7fdNxAxpqe7FxzUJjT5AFG8KNTHZCWnoHrP1vLP3KgZkpLkwUqV8qq6FcpcCKeaCweZFX5K83uPhSs9WRnvNpR",
  "key6": "31jBHRUFNbKMHm5dd8yj5i9mkLJUjqZviQPR9RkGywTHAGL6y44o5BCQpbXUVvKvbBCxGU1ApTQMVFGtqWH2D2eQ",
  "key7": "3erMCqcU4S8P1rYHHbs2SCHcTB3YVQd8UDsr2cvyCjDwDjuXSqGjg3LfZZ3fWjGvnbJk1oi5Fu4H6FTm29wsWFPc",
  "key8": "2EpicwRzUSorwtQtuoggFrQ9UdJdjyfYqh1XGmXjRK1ysiUsDkUipkuP6nXeprvYNteLWu4pgPxykTuwQoh4Xx98",
  "key9": "3Jf5u8BrN5Dqy4JbL9BW2hFsTs4pFLgZjYXJbm29rJw49TcRrosC7PMrQaoHTgrKpkkUkN1i1cfwG6dUmCQwdbkV",
  "key10": "5hUtU2qeP2jZMmy1rJpsepwgCoPv2ep8tVM8KF3hNwGo1ghBcd8CPBAM6PpfqKCrAQZcXpq2ApKJbSmR8vuF7fLD",
  "key11": "66EcHU8zy6tmP1YyPtZF2aNCfitybrJcGrpaWd8xQJvVjPKMCjUQeS1NDLmAWPHzsGu9Q9p5Y1BUjDmbxfmWQb1X",
  "key12": "4DW66nJsFwEvp7mdaAPxfxSH5WSnizSASPC11NrTqX17evYgQmffFiHEEZ4fntxmi58YZMmdSaPnZGsXg45mU1rz",
  "key13": "xV6bcA7jWUsLkJoB1ZAdmCs14B3EzQ1XXhyDHsijaNumZuJv91VXu5TodrZ8ghQPdMdynLx5otcHBtRjgfr1ngH",
  "key14": "5btbVjUoAy2cAaV4WpwmGoqvkHzzfn71zPEWYX1NVJooCcTj3JP9y7xkfknK55NU1wbpnRS5rbVQYcEcqzvXofaw",
  "key15": "5xWQTfSe3jUTx6caMp1UtZdRPYqmdLHJP9LJ7Kz3sq1bHQ42FH8FzhFt2TMDhqiTaE2urnwqYpdAJ4sMrHQL8CDb",
  "key16": "ibPncjrfjz3BnhQk8cumSQzZQiCdPDDpDZWvQZwkDGXGjd9z2zU4gDkrLzmxHcM7MDC3RetrSkkxiyji8VqPnRK",
  "key17": "33Pw85TKKMofj4ZxDJwuTKKD2GW7vEMtXnp1EfeSnDWiyvEikKwkLNNyU5D7P3Z4ASjegxfo4eugDLFAkEtKDx5i",
  "key18": "2ZXzztJrETFis2cjPWVhGK65Hv3TbW6nfBxWweFye7mSqJTUwEGVn2RfLcZXZibAtUCk6eoHQu1hB8uHDFPspF7t",
  "key19": "34qNvTEf5TtNY9H9cR7oHJDsHmFsmKdfaScxNUhcmwq7rAbnqWALSVCeF1LYEicrAsUnLtRdJqZdpbbExSuLu6Hg",
  "key20": "23db1uEJUtzB8DFEJNU96E9tDSrfAZ8NXF77xdFftxwEBRewtH33SJkw7ejv6yDDJbpA4ug4aSdfFMJas8Y5DQU9",
  "key21": "4BvJ4bZw4DJTZtPfyq4teUhrfDy1SwBAnMR9YUxXw5xDaoa6kCJUbNZRDGgXxC3g39pB9MrF3bYaV4xpzt9v2TmL",
  "key22": "3HKBo4vxicCDg1pwCmWonFQc6nCRaUsj2MDp2RQgqPut37BorYMPKtNSLM8LFo5iZugWASWYYpJQLSsqavtqo25Q",
  "key23": "VqbSunNjz1pGLgttFtimRPHjefBU7yd6aPXkPSXcuoC7sp8pErM4dUCJ6ZLLy6Ng4h4vBwfZn1fcYigfUebNcJQ",
  "key24": "3oYwxzWh4MZfBEbFfYiWDo2efGXXTLThrJehm86nN4ndN7yDVV3WBm9yvLZztH8hKkZnWNBSCKDn6mTdnnu4aGXA",
  "key25": "2v5v4vwfTk5AZVEoK63BbwZyf6poX47MzsV9XewdTpm1nLXVS7HGzzzNAeaknEPs4pSY9s4D5U2pHw2G7Fxucv4m",
  "key26": "126ffRyGWw5qCqnd2k8YRNqSnBP4jTHuiCHYP4qEu2HKDQYVXnHvKL6i17FmgJoydknEU9QnruZeNWhM2RyTc9Pa",
  "key27": "3RMbPA3G8ZJ2aEvwhuJEMXztRSgCP1JRfjwcTyiepRGo1D5rcmNwj8RqUTXn4tivNs6LcvgiczHswYCHYAnjav4s",
  "key28": "7BuZ6bxGcNxEpStuCGWjD2Lrga8zu3tybN4pc9R11twoPw2Dz38uWFcF7BZFYQdsKJWQ3BKBiFmMALJ5WptiVEN",
  "key29": "61zDTDpUH2QHwhSs5WSBXS52uKTh1RvwsDkyz6xfUhVD2Yc8ZdZw4PCyGXTBz1WoRqzSvEYLk8UkMyth9HfJ1yzG",
  "key30": "5nnmgbCftcnxM2Mz3TjeWUXARynUPFUnsxpRtjyudLMCoLAFkMZCzqGCfH6CQXeBMGtx1WEt7XkeoWTt23VBLHhk",
  "key31": "2bLo5qU8VuhhQqtGzDxHz2sXE3BMe3TcKDtaaTVmpAFUNJVXwkFsezWpHLWzGdAXLReyLrPMfhobJmYrz9eX9xVE",
  "key32": "4tPiwfan9edgmq6mBEmhtD6h6N5K23HW9bQB8zNWxYjvuHFjuaaCEkf3eS61ukqKTham9in4ZxA14CamQFCUmSrb",
  "key33": "4zERk1m9zXtx9kNa5c2Sjt7B9dk9Pu1BNfL7FXoP4pb5uZMEyzLu1qVYheSojdW6zETQmqNqDeSN1i3x8hRZ4QQk",
  "key34": "Px1HA7XDqHQX7YyaRc4Q3mvsQYZ6LvZC8SCk93jpwSf7nasyMjY8mzt8H5L1fp9ECCUY78eDmM6k2BNdkTmUF7D"
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
