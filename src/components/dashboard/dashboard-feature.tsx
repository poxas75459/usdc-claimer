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
    "3JXkjaQpGVWFmNQYXkLzKCKTqe79rAQSZrYjky3wBsXQPCRwuH75WYF5VePBpJzk1CR2kg1hDzStYsfgjLkqZGkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEc6f6TKt1JSGihmZJ7EoL2hziBWHuiJX2M28BhFDXKjtM6RQYj1i2zknkqLjjCcZKT8LpirHfCf4Yta3H9dfdb",
  "key1": "4BgXzfcrwb91KR38YbH6PMn9XCXBSdddfv1yJhULL4wRjQU6hGGu56Bp8EqqNTjUR5duXRg5dFWCo6L67zwTGyft",
  "key2": "2pBGfJ6b97m3aL1w2FV5G2BZTiMnNg4QHRTRrhqphE2Cu8t6pePtxvG3wv5YQtZgD981msKSPUQoQmwpb887wUBt",
  "key3": "LJazErp9Ynm7DJ8JRsBV55FjK8u1rnFsAMvFPWgYCDQV8hks2HmeGQMdnaEeJfKQKb66YGPjTuDK3tbm2spjqAZ",
  "key4": "ECaB3YHxWigZ6LZRHvSByimaAAmrxCrRR3XsdzQXULU2RqXoiivpwyv7VxKiE2zeReAkaaTsxo4hWf4dCEnWj4P",
  "key5": "25mkXFmLWyaej5CQvu9uNh9L7kJqBe4xXdZQSGPQMHwyHtmWzUrYizyUXevDVVYHwiHt7PRY8MoD6h4hNmsuYEJh",
  "key6": "4iy6CfkW4jv1SecPybd4h46UYPUxLrtrURJsCqW87DbkMMz5wfRmhQYXpRQHcX844qoyHZiyVZuj5jbewjorEt6g",
  "key7": "UtvVFny6JhJiQiSSPM6TWTcTkAKJFtwSDdQp6EiP11uj85jiiofzGSw3vAPCAieos8ETBqEaMnJSCWot3i3eSn9",
  "key8": "2YbzWVT2WNbQ3htsBuddE4weJPNmcMxCYTJ17Dxwh79oRKkP2NEZQEjG1mmyd8ybZnCRSn74uV8Mcxhy77E3sn23",
  "key9": "2kgiVeDe9k2uj3tpc9LfPKxCTzLg46T9MxA7qfhftvyhPtASuq9G24ni1mFbhBhkmXvisRud1uvekWdq2Fnb1c2G",
  "key10": "34bVXYRtCK1vtS6i9uoxmhSwUo4p4FaYJ5rCKJznRqtAMFCMdz8wkKE2UAuoW2oPuHCpkSLPZ2eyzysoz2w3yZ7x",
  "key11": "651rGzAaXrgLckeNrovr3XpWC5yQya4hdVsLRF3bJGMppsXPEFR9Hr2ArKnqahY3DPkda2XA53h8q2BjvUu7zqc3",
  "key12": "5cwgQv3nxac1K9rPEdVi822ed3Vt4xU8HxchFx77ujoznjLrqCqiWAGsZKLEK5RgcFSjuZFMHLMVpizjafzKw2gK",
  "key13": "CXkLGwLWnLHZaC3hc5aNvE62EB1FCCcdFHPeEM1F3rDkVVJX1xFTi7n1GCPtAZjBkSZZszNPHHeAndDJyXwNMue",
  "key14": "4KyxgBicU6FKza8nS1j54Y9rYwFkva3yjJjQKBGUcoE96gSzkeKXW9B3wububQpBeprzsRdh3nCieUMwEQ1fsewD",
  "key15": "2R632b4EmukCsAvXS3wJmTLGYLjEgub17t9TfPGivvtPmu8WwiApssBMo3CyKF2ckKBMuD8y9ovLB7dMkstzY7c",
  "key16": "3WpZM8a8HjKYDMcsuRgmuic8Yq3jt5fzdJa4yzbnRiVFJhohFeAazfSxY7TPTGHPYFJ5jQvHk11NAZ8f2dKXLvDP",
  "key17": "3nZx4zyVsWccfvk6ArSLG1bsiQ3aa2JDHchz8y2NjD7B4nQw9sU7VSKXpS7KakvMNCM22MUSDcJwMY66T9QXcGT2",
  "key18": "332YadJM7nqsEkXxNouQEx22KxRKRBo59EZMvpWeVvSP3r1bQc53uGdv3PhX13aMMxBCpqEtpnG64ibCFKQSAMho",
  "key19": "44TdzS9ZihRSbYZngQpTHEZa7CMBCPpTMueB7ce8LTcE5ErsP8aR623tKTo336MmGEu5xNgrQ76zdfNXQpAfaSqk",
  "key20": "3NwVAoc1ywLQDQZN637d9FUHAw7xg58SgmSvxtApofcQDVb8zuUQb9cRh8kvT6BvXGqiHqCzbd1nsekitrgKk53q",
  "key21": "WjZjMAgztnwmJyYksCP7RqYc4CVnV3fwSqrW2Rs3bZeB9F6ty9DP7wd8Q3Td8bgKLhMVrpvu9px8LTbY6uzesbP",
  "key22": "3Brv23ALprEDRpjntnuRizm5erUb1C1mnfqythrx4DcdK8N4hUCtp7RKtbx4BS3xat4R3KG98EM4xkrXTCb59oYi",
  "key23": "2nMSxNfTxgff9zzWwerWHz1RfJuynXZTwXFxjwQkMrCerw55Yqhc3dECTy2z2RcKG5bMYnYZsCHTqRnmXXRzuQWV",
  "key24": "4CHmg4MLYVssQDztn4UGUffSr1PAkZafYTpRoqvt47Yh8m8wz1dBuR83s987bB1FgRtTskeLgowVJxNqpL9ESsu",
  "key25": "oorocVzozMwepqjh21ft5SHswRcBe7kW3EXA6Ws8rprdiKy7cYks4BQgmn2tUFoqzbvQVDyPoJkfBuEo5MZa2XB",
  "key26": "48bgH7iTnvAfHeeXN17Vxy6rThhgcXyDbk6SQTTk4aEbWs48g87EBsE26f46PByBxHSygLn5mTQrMr4KC6odFEGy",
  "key27": "5wCPGXCjyXTQjw8fmCwT2RDwU8xCZdUW6UsGshH8MotnmijrvRqAffy7WB9NRbUV9fcvKoWaWXpE631ubJsXzf4A",
  "key28": "2WXpxuaUVBWxdrE1JSqDdLFSc9oh2kh3LQKWud7CaJAoqimZwDiXKyo8HUfmXsYDptF33h2P1MUGSCyPZZDQtaB5",
  "key29": "3TCBtQzsontWn9XDZm8ExDacmTBKRB9w8zbjjKpAiqASGSgB64My3XX2xxfr5HdJkGiwXCfhcsvQNqD6YMCEMbPy",
  "key30": "4QhVCMh8wXnFuaF6u63otsH5jVaWJ7QJtoPyb2w6PQvwdGrCkYp7jBz1h5KwmKMAd379Lx3GrZPcHTS3mU6M5e3v",
  "key31": "3pkmo37gFgLEPrUXPXX3etsy8QPetCH5Dh9AxyVjvy3hBwxTJ9YXBMyXwGVUA4gWtgtU7FQr36DZutvZEQx5Ay83",
  "key32": "QqFJ73aTk2QigMEkYf5pWzkFEiQzGhX8YY2zWdFWuP1PYNw8YZKTxpqhga29mnZj5RwWytTTJMen4odB5FPjXeQ",
  "key33": "gHd63sDcMwzXD2e1XavhNwxUhrNJZxfYiZUHbVgQUJNGAv8ZL9E4uQ3HPrz5SUHxJrY61eZXz9krKTX8e9szuKj"
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
