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
    "3Uph2PQNLVk7hZopDuV7kG71f3EA88hzZUEY4Ae6dV1RcxeBvAp3UL6TfRGHsrbJMB7YkaX713RYuy4UTzg9PGTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57T3otzct6vBYQY1E5qixnrstFsm9R9r3tWzveByzEYVCuyL3SQoWYNHJjaqY51KzYamvePBaKh4KZCDmUUYVNtW",
  "key1": "3hbg5tmiGo2xyGuGvQfMuZHK6WTyEzBnBvPej6pfuLGVn4X8oLPVBHHyLNvxZxRAFRxV6U2dykiVopTyjTVwfdTY",
  "key2": "4CuNvZDdRoHgzbF2vRc9tZGKvmXHkP1UYQbktfkFnNznQEfdFJaRGb1oUdsn5TqifiizGKp3WrtnuGyRFjhWiFuV",
  "key3": "2vxiJwn9c6vX5WgBYroFaJGk9FQWsotbY3D2qvaJKwoq9XGEDPTqcJGCuUbNX9zLx8P626J5Ei9rSuNMfsUtaqKf",
  "key4": "3c59g5FFy48xrhhhD7awxZnpxX1DGFiMNNzWfmpvqoePsexhzw9hG3fB7xRTZnm6AAy5NJg72scqFQ5hJowKBXuh",
  "key5": "ohR9ip7hxgN6P7kdd32hEaMnRCooz5iicksteBXbaCKXCSzBfzZpQCRBmUXCfwreBfL75GtWmyehkrWiMQH7ten",
  "key6": "4du3s1hMzDJYM4uvLPrSzQPVK8nCXTsR4AHQzzgUBTdnGRq3ZmGygevASX4T6ZBPvNm1cKx5gSjbJ6wou6DgAfGL",
  "key7": "ZVyHLd4kpr5YSo4uEJZ4qECCmKHRZaMysrUHrLeyUKGekrXhJgMueys7J1YYMEesB7C311d3rz7ArpX2RsDFbV1",
  "key8": "5CzffgXJYdXhCnRJ7PgUr6yv5pispjSiFcGk9hvWMtgaYKmx4mvrtCm7bLscUSTEBP6fpURpLfK7V6aZAQRC4gi2",
  "key9": "4NGNAfVVFDVtkLvZBcTh4BaYCqHzKojLe9renw9Ud2bt4kfgdyWLaxURH4gLnqWAfTcc1ANLiEJ8kWe8iUafy58n",
  "key10": "6orsCKHCLkBmCr3wGTNFPhYTUUX71o1SVo3dHzSgaUwxaLVzfJrMAMGwwYwP7mjR5mfsPfVACy2KZKGa6CjidjA",
  "key11": "YhG9JAZCXqp88amuAu6BjnYh89PvHeWSACTUTfuduZdunDhPZd2MCibsVghhczDCbGahWBdw7c25XEMwJqnkVha",
  "key12": "5hNLUEmURXrQ2BMXDqEV5MmkbgQ3w9TxScB38i2dqWTesDcaFsVeuVmde3qj2JWzZgaSe7B1KrtEUTwVrL455GEi",
  "key13": "SYLHsFKJyCcZr7YPh4jYSS69tRKjtWh111MoMaYDrhgTaCz1JAnuhc5kbuKFpGrhv9sheCAy9TFryPK8XGKghqL",
  "key14": "5RSwRVSWBk7SYuLUq4GtyGQwuVc86mY7ENvX7JxZvSvAtarhkk5KmnCPEYgZaK97vYiZ3APhbGhU2Zd7kTs16Ar6",
  "key15": "2bPHdfmKHXetp7768wupRH7mY3fNTM7CqLgDvKeCqn8s221oUnUnVbLSGyp3C7j444ZrdrSmeVmVXcaiJW2Rvhpg",
  "key16": "3Uqn1WXLjujuTUBNwXGxsft4oUGM44JiTciTr42SUtif5i2kjBY67FEFRsHT6xRJKi4CdhyZoXRC1qQEDxAFYXvQ",
  "key17": "4bSLGm6FbD4kc8hnMQ6pHbxJ9PjH3Ekc7NgF5fcCxGiYMJ7mvh2NbKuJ9RL6ypg4Wmp9sFzTWdW5soLsTrrekxGf",
  "key18": "4hdBtmHbX4FWvJYEZdDzoSRE1S4Hx6pLR9e8VkpkGkFJsr3auNFKeSKriTjL3onbKLvSrNc15S4iYmibDvxJPin3",
  "key19": "4bAf7dxrGCGL3ouGyUU8N5Vn8wiZkLdi6LsfgCx7z8V7gPSUeUMUaznGsnmhF5Vo2fEydjaXJJsm5v3rdB7UsZmR",
  "key20": "vDWWBTBq1f9s3JGnSaGmyQQrVj4z7jqiCifzePhH1CQebteBa8VraqRCXQEyM3LkQKMTcAaS6jK84wy4ETXVhCD",
  "key21": "NuW2g8bytucANkLbH8DuL1er6UZfLT5G4sQ1hVe7uN1K8E2q7hgTU9NxuocGYNTDC6mYFTo84usokorfnUBfuMf",
  "key22": "2HJXpUMJQ1zKHemGBo8DoNxxY6WxEo2r72Gb6rXhGycykuMaahkZZr1E3BDj3M3DGeaaKKf2KEhSGpdkLHdLqsXU",
  "key23": "x4xakcyqo867cpMpeRFghaf7eSfw2vRS73xVziLqKMhPgrMEDAt1juCBbR9RckpX7MNC75qERWi6yPrihiVBM7S",
  "key24": "2D8ohvfPToPKFadyhCxGnPKd1FAh498fJUBq6pWcxAwmbJGDRHBM8R9yY9AMznvLNccf9j48aUvhi8P8dhPemFpQ",
  "key25": "2AmgSbtFzQyn7c4UAhhKhW2DeGzWroBmWC2AQb2MgtjTrPjhL6gJe3vZgyVypS2tmcbc31DcqvqFGkKjrX5CnanJ",
  "key26": "244DVM3M8JyzwaKbcC3xVxanhjEe4tsqDBsGnVPV5nUcUxWsUa4KDA4C5wy6GdSFnLN2F34XM2VV4XhHG2T1Ncnv",
  "key27": "652wzYK86KSary1oSPEPPdRAgXKcFMhkqQNQJnq942DAkNseZgU3a7A2y9MtPSetT8eCTZ1nnrvouXGuhwYVbwF",
  "key28": "5cjJRmjtBrBD4PdXhnPn2v8FqwPQXFSA2eGJGQKmoSGMCw8B6vs6DzPec7vhgZKcvUw4AuBrU3bdWSD2XNRH7AmN",
  "key29": "3qaVKMmcFBWjjPsE7tfa1zPy2cf71cDjCLY4ioAqUZQVFJULfF1wgEowN9GDhWEh23fsRDxsUGjg67fqCCE4c8yc",
  "key30": "2VMBZvkfuDr3b93S65HmX7XTnRteuqCuu1CDosbVThPbjy1gFH89dLCKGucTGRBUDyuNxfd7iLfBzxKAYDphFpVp",
  "key31": "2eA1G2V29PTeYG1BG6VXy9xZ3gctwt23NLw4V9z68aiDh5vb4Xeh1qbPtVWb3KA26wSjyNWmPdjC7dDBbtgVJYpz",
  "key32": "5aZZx8iprcQmS7xvVcLrSzrw7y87Vy5DNmorp2SBXbCKXSVU9SNT2AzHpJgPz8X5jpg1Mqi3ZyC15W2wjySYc2Ug",
  "key33": "C5mCHFuf91N5D1wuBNQ3ywEVFX13of6yN7Xc2a2BtyfkAHgz8ZQCAn6EMABNpZ7FLPNgRaDM5X8hh5buLyFcMrT",
  "key34": "4oYXV6PTMdakPrdoCVnPYkih1anDSaDVbYXjzZ8f694oxzYZHkiGrDYcnLBLTHsahcqvUgDhxboJspcym7CeyvCw",
  "key35": "5SEU3wVt6xguSvXBt6hR3A3tMpjanmMywMWkk3vyMpK6DvrAmCd59vpnPKRgam8WrKH76f1DuowuLgokUjtT7YPF",
  "key36": "4ENMKf3TY7FZBiLUDKgwE1Tv9Lve13ZpVCZfp1urCAvNbpdnSVq6CfvL45Cdqd7s7Yf8Kw13q5cLHSgpEZVnf97y",
  "key37": "vYWn2sYAJaJhwuqNNjRBQHbXmBFRUX6HHwKub6PGfJpLA8b92N5xFDd3BWghpyX1JMFBbfMSYNZhxrdKbWg74Yj",
  "key38": "3JtcEsWq7PbHQ2KFs4Gm8PmViXzWiKYjqaa4EFb7z1PKJiBwKCALttBAuczftdPwTdSdUdF8Um7Ub625wt71igHo",
  "key39": "yZ6mYrtP6kqCixXGDmXp99R5PzC8JXCBgntQVNNRhp3ctfputpwmfq5govQRdneWaRtijqu7BQYqNts11sbbvPP"
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
