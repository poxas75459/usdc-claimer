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
    "5Y6tJ789Yrp4sP1he7sSYjaPBef5hNn7DAvRGZKhqV5kEvCb2ffwS9wUfjRRZDrfzNM6dnsiv5TAZaDkJYkyhicY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyGbsuEwBjrBSKdhHZshYRLzEzuNPqkgd1mt9speVzXZrgm25yEm9sj5hm4DKzzZEzPWMSgvg2vz8bWnVfXwDWQ",
  "key1": "4MVJ1xNSPTss2VVmDYkoAvVPCvCVr1aJdypscRnoF1FxjHZFYz5DF2xh4VoPX48KhXpVBoQKbogcKsyyr1Zqq7n9",
  "key2": "4vHL5VMfC1npaqSgBy1uaBT8f6ao9HZVV1bM9gCdq1jyNzAsTHqkvxMM9T5iwKdBsJ2gvQBcmGJPindoqVCYd6nB",
  "key3": "5me5WBQAvj1YNHjp1a4N3ukTgXqFh42buhAoJcX7maG7CvSYBTRhJ8qp8n8ujYUqvbWQKSe9A2nsQDjTDgi5X9Gf",
  "key4": "5eNDrqpT36nLddyfaB7LwkvLHemKF9niyMa9r2NbNeMXSaATQFWHSdNu6RseEkXupe1Wb464FGpKs3rcMkCDiV5M",
  "key5": "5AeAi8yHhWVP5aqRKgQfNjijzgFKYM48yQS6JEhSTSgySEz6s19bQzToGk1pMyVgbqfGFQ2vWKXoqZgKPzTbfHT",
  "key6": "2Kn1DM2Cu8A9kkb4aRLVDf7x1HUH85LFr3GnHSJuaqGdHaSz7A3SVJiCM6zzDJWoM4WGwDKdxfQo2XZpYTSpMTbm",
  "key7": "5i17VPcdZhi5Rvfyci8Wv4WuJ4X4LmjiyJxyyeQB7kh9C8pdVD5ngZ5JWbF8FoKfPRFB2s5LfLdNAXzVajXJDEbZ",
  "key8": "2MeJ9CkYg4KUTopy5wAFkUZMgF8y7d6kgQtZuMZFCHgL7iV4BSKVHSs1XVXxr6orTrScmk6cuVy2kRQszbpReLyc",
  "key9": "37gkonFHvvjc2D8ZYMAh32uieaZBGhZ8YRZT7V4iQ2wAsVTyMrmN1ZvVdyC918BKhu3ZWE19ZjyZ5TtaSr7FgUZB",
  "key10": "2SaAvhjLxb49s373e55yBkBNKDQ6X7Q8Wxu2cLCYxSJBTSUwiap4gQTobTyDBgpqLrXjYVSQXAVDenF9ivuXD3SX",
  "key11": "55yW1iEijDiykwChT8HK8acSPtpDDtffjCsYPuvyvJ2UD6cV8YAAVxQ5ymiyvQc2Cf3hiNCB7RYsjMznxNsnpUos",
  "key12": "4YhPZ1kcEUen7vEjnJgQUjFzriWAsiuiMrvVLmredoDtEVtD1zVBmcCzVSwuxBzM9PArAv1Q9A27guTWQCfsBXBe",
  "key13": "3nteXEyxNbmMViTc57qQDYkLAp5a1SEZ4FsF4q9ubjmzMg5VZhRL2kQXLPYs3wwmhY656yY2k9DpwRBbteVs2hEH",
  "key14": "3odbU9UsDdhszPNBaxHqmorxteMBdc3WumY3BFtAsFtHKVH8ZzHGRar7eMs2r2Ab4sy9xtAxHQTAxEqdo8na3k1h",
  "key15": "2bFDRqhiSoPwn6qG4752GHLFQ844qMbNJtY4m7SFUW7MwQrGCKJue9oxiSZJCyUydo4kfmSXJJ3jex7Lzs72iCwJ",
  "key16": "3hYd4y8EZ6k3gArQebaxJJbLjNQ81qt5mcUEa2tSdNgXyBv3FzSPeXZGDAfQEcnhWxkBVENoJVScS5uE9AjwsJ5o",
  "key17": "4VUrudMDrcU9UnxymWN61htiRgfYtBzhewDrZgvv1FNwmYDt6wP23hrMEHFSJc3S1hU52GyV9kKkpoAefJsYnrj6",
  "key18": "P93NtzX17W64xpXRV2QDhNbfibnuo36QKp6w58KBJHo5JdSQQYkEuZ2hhghbgkFfAqnCHPk3aVXmeLvMhpaV2TY",
  "key19": "2gAEQ7kbiF12D2XjUtPovdfBmsQMjB4KSBHgiAbYFS99UFiLK82LLNm51QfVYw2kxmkb1NZoVmQifHpNpuen6qUh",
  "key20": "eWqiiWjMuNGvJSmoU2fSTh3piXHEjDdcuv52HTBzkafC9yyWmoqUEHvbyiirq6hDZAkpKWK3ZQjUy1gs42rZtar",
  "key21": "5qJfqN4ZqW3SDadpsMZXntrbsDHmKFcNPT9eQdf3GUSu6xuoohkmnXvGYN5QiW5eRoaMLujWLNWa8Jy9k9wGdhMK",
  "key22": "5ppfdTadGt6q42gx3wPVrynzXGjMsJyA9sXT8nRJ4hhNa7at8veMCSN7TGUqycsDxN8k9MGTSRyz6iukNvbokXV",
  "key23": "5w6ZMhPnWhKFSmAfK6udxtXf9Eh44tjux7EKC6vWArdc5RR1wQFJGLE7nGpDRNoBTnEZXBdZ9epuhxDiRdyHcxD4",
  "key24": "4CNzhuPKvxZZVu3RewUHbBkdtp1ACfdUaHpSu2TFbkmjiJSd6Ba1VQhiyVoZZSTQGYReySmENN6zePrU3E4crTr7",
  "key25": "5mozgJ5qDk7GRKJR7cBFkMNgqn5mpMsWni23FdYXB7L9WMPNWqT3PeFRHwBbPU4kJKAe1HLDNEny3G8pZnZGu9jZ",
  "key26": "26aBBiXQDqBJEPMqKcMkqAbAJt4U5a6KggDjqj4h2irLYRJxQWExCYULrJzySBoVd3F2px2bNoWtNa9DDjtJdNSv",
  "key27": "2k1WPikE2RH2M1EmTcSCyZ37DBrNDZnLR8XMSSeAvvtpBEMpa79X8iFWHegC6TYYp2Q4ygCLkmCMLVwAFE7xQnW4",
  "key28": "pgAEjSfRT3C7cZuSW6emEFKmQ5nQdJLcCH1KKHNpJzQoinmETcNkFTkzQfE6ZBVP6tHksX2f9ND89xAMwEaVFdL",
  "key29": "24uKGRbUgGqFgchtqBtZparmEePangpcfVxo9h7cd4pCb7R4FibcqRH4tNHBrwUShqRfmjsEAx99RjKiPJLMJvr6",
  "key30": "5P4mShtEPQ3LeH8adY3wXRmkAtNufVGW4xx7kfh98WmUQenrbKHo2FczQKgd53Pdu5RY4DHPwiD8yGJSfaP6Pabw",
  "key31": "4VyaSvrJAYFFKfFx1nGsSbN8ZXncGxxbwkFVawpuumY2KGGGRio516kKfEHsFy4sqDYksbnddR3RT1nJ9cihue2j",
  "key32": "35jWw9t2rx88qNiu82WaFYdhEQMdPmJ9JyNDjrzyk6hziMrGNsWooasRh2k18m3WBJChZnSTg4dmEMU9keZ8DDQP",
  "key33": "2itpAaCpmXgtUy8FoPTi8EDRPBNsxEfyemR7kWfaBsyFoMiYWaT6c6kgkypHEv79JW9vQhqWGpNmjriKfRCWxcE7",
  "key34": "5PuJtnXp2i3jX5r73XUye2bSE7enMDbMCtx88paLYVahCFHNk8jLDKfLuGgB1aWdZSNns2wadC4U8jmGhEuwmpvf",
  "key35": "5m6pTBiRjvM85AR5PtgKvFL6oMowLo8SZunrZXXDQJrtrMuT4rUfDet8VFEd1GUaB8niNxARGukRvNFdfUppUHcu",
  "key36": "a8LmqHn9NAHb76yyvhmWP4Zbv5iREVC8t7t5Uh2Qd29DKFUCEBZzNwRN7DFbohMvwtnhWJFAEp1dS3jrzTGZ6NP",
  "key37": "mwevHBZk86ed7zN4R8Ha942asrD5Jyf8svKhYcvbB2ekHovmmWxMRxTndkKATFJaPRQWcRwZQ11i878nSQKBmYw",
  "key38": "5p5bEDrLFB83eonCceGqwEF2NcAPQ3VyMbtSzGg3pVd5zUarzSR82etuMKd8wpe2AmAgd17kAB2KT7iqjewAaCwW",
  "key39": "44Hs3hBp8bnRh4dyVDrgpYCUvWE44WNZaPhUit8MuNtqcswFhzXWUWVrRogcU761uBaYPTj6iKdXp4auNtk3QPnr",
  "key40": "ZAvceD8yCtzMGhD9yBwGs6oTE1mqf4NwnzR74SJ5NrkdoG9MxbbQRW41T95STLNFhCxnPNT91eKyfVydksRFxbD",
  "key41": "4e9kM4NdZZ3Y9L7cRt2netTEiqGfKC7g9DdcxAMmgrkfLbXGHxLgo3rscJ9E2mMXk3z7Y7ypQrMDPBwtoFgCACw6",
  "key42": "3jB5jerBfaW1puJBDTCg5vqWHbr1f8v9LuF5MJmmP8CSsadGkCiujwfnFa5kDraAKgYduxxwiSkKPPGyrB3UDJ12",
  "key43": "326d5Xk82b4mJJDJ1GLAeKHKE15TgnSJTnH8QfhDVbmssy4kXEHa4zEgb3gYuK2sXG5hpHgmDjfLMbD8wBWHt4LP",
  "key44": "3WzggjyfMRUEFE4gnnSmRvbjdHdbrYEYLsFw8Vc9eZ4pzCWhi5JZKmmwar15b5gJZQJNfK4fusUBGL1ZH7vQCdRL"
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
