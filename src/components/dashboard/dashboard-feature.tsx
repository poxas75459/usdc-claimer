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
    "3hNT2CJhkXgWdaHZno3kWLcK1wJhnwagPWnq8Siw9pcBS8qUzu5Uyu7ksN4mYdxTLMZx2t4zMbYcrpjxaGKjfxwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HJTpDgSVEyZ7d2qiE7wnsAdXogdKWmMqkAV8F6rFseYomNpdJ9dnVCTJFSjNQnzdAGDFzp3zf4qq7Pa2SBgDQA",
  "key1": "4f9vnmPrdNFLsUQFTA2x26CqdsF27Qq3xXcCYp1QyTtiiiJcEu4qBQYqwD3adNUXXJ8eWZVC41JVnDxps3jMA6aa",
  "key2": "5QipggBA2AWWcaTZc7UhiTBavk6rdTHmXc9MvBpNJFNFHwYr5TsW3NF4fnsH3CsY5v71FTFAuA3GgF9TN52FLBup",
  "key3": "jYQuaqPM2veGeR3iPW3jEFqadAENF1RvTbFL3ZHq63ACakL1odeUmN7NmPmfbCpnJcZS9ocsGjPgp5brSRqgnyr",
  "key4": "3ZohN1cxFRvMnokitUfZd6Nc7JuN1kccxcsWYAHXB127wjKwxVxc9uPnUqEEsN4imRDzFV4d2cBYTxHeCCFvpzWW",
  "key5": "3LLnyHuF3mrMmr31sjaTKkQrtTGi7expYZGp68gxX5s5RopMmrxDM3yDniZfGccma7mZmPds9nKPSTM4xMWqUxBW",
  "key6": "4bBYNfwWCe32DFoJpVR9DQkW3FUB99gN8q4XtNxtsZF3w88PV1bthEGK1vLozYEA47or6TkUu6vsaNRhToJRxRsY",
  "key7": "2wkYJrisDf46Uot81sqwmKiZG88vNL9H6GxPxioRXZR9irj9BhXsHJQ2eyubvo1jspgQtniXPEGxWaUAMNBhvHmN",
  "key8": "LpiJSVGyWAWTdMcnSSiZ68sMbr8X6dn6kiSE8MoGTBj3YmMHZwJKFN8guP5pAJPPtHsynGDvoNb8LR5mrXN8Y4D",
  "key9": "2RCSdLLhdVoWt3QiycKoMfu2U42u3c2wUaB4qmqrF3oHEzrfg6fBK5vF1WbmwN6oU892jZ7sxFLqsPNJnP4Eyr47",
  "key10": "5DtV5MT4hXofpahQqgWHpZnfm5zSXE78mYYSSMLU3SowMPmJSp4cWpYKh4RU6UrhCjbx3cNHBL5h5yb5KVfPsHdy",
  "key11": "4m16MYfTR1hCYKQpEjTgfi32GAk9u8n4QR3p6vyt2kYstpNNJKbi3kKAFjjFx6Mqst2fimKxDpy77uDLfkNJyQF9",
  "key12": "3bgphfrE2aVbqRSJU4jvQoyj6M6P4wHpUfKJ39oWgJomxsQpSJAxUw7x2yd6aXmN4NBwAvnqsQKHk6rQwmS3MfVt",
  "key13": "5cgK1X8rmVdDHXLjEBnhnASHWwvTetZXmPLZmQ4BPEQPpDJdGH7SqcGqmBmvEFoNrFb4RrehLDJHFmgUc7e6s2PP",
  "key14": "k9vebrLmiDDGQmenipPzhjeoAXL7afwGPZFRCYbgMhxZKZKrpgoCvPrFHv9RGZRzAWRkHAuKT5fepLw8AWmuYkn",
  "key15": "4PrV7q2qe96qmVndFpS5vfK876LXerdxUTHxCYgBgJFC7Bkmp24bE1jkcvYi8hfbnL1t2wuBQhHEHwz1fhJ1BbUP",
  "key16": "43EeBXPsZF9cVyDE2jY6tEvVWHRiSeXkK7MCRjfBqKN2fbi3p1yuo6CRMdypoD1s4gwm752spEV2xJp6S4JTuf4u",
  "key17": "4HPsFJrV8jGSdBLWYXLYGkdKSWD5RNGfEoPZU1nMZKCcZY1UzPkShfmbQW6vHExHFDwNKcMcnmWLVHYHFmzo2mmZ",
  "key18": "4fBQr4gejkQNh6igCiwoiJTbgCru8jUdo4yJshCQGb6319C3Mh3ZDcMJgTsuvchY7BitUniohMHna2VcK2TeTqLY",
  "key19": "3hvV5Fze6x7Xn1Baj2HSmXCCNX9dMQ1ecZSRwfJtgMoih3fKs6XxLyWgzAHGgFMhDW9xPnMYeYg4mYK8HZccxdbo",
  "key20": "46wLobtPXUr98hmzBjdNA4ZCspQozDviMWugRMPbbF3uNhWs8YJrvEy9XsXcoGoXJoxHq5B4WUSjNpAmE2py1N1g",
  "key21": "xYNk3tt3kmnRAEYru8AJefGWLvbKgdE59L9YNRvpvhGoA6CmGJEde3yK4YcTyfLL8wCupGu2q5fjaLt9QbVDTCG",
  "key22": "3g8m9uvHEUmBVQHGPsu9hZzkfRVKoi8poB6hFatkBVwsLJ4nqsnxTkKeZKLo4cfhvBF6csYSQmH1dnmVPz4KE3m8",
  "key23": "Vi9kJXHm47wSPuBmD1VTfwR2qGx6AV5SfxWBLRWjkiaXy2TPMYo9ZnnEMDDQzimSqKnpvtrkgMBAZpqERG7YCd4",
  "key24": "3bpkt5ud8mZPQmmPaWS4gsaizV6mKBxRmYmFtNZYCApehVGvBdCgKWtDwW8ZZEzmRzWAXfuqPB8MfEEYpDdts8Xg",
  "key25": "5NLbUSW3JiKJChywT28vimqYLSGyhEW1wsVD7EqtJrmWhoypyU7KqUL8LoDraa8FbAX22DD8XECX2tUXbAk52dFF",
  "key26": "4Ehpv5QLfDCVAH5KizSXGMccTd2Ez4pUVkEFAJnGEs24rWLgcWMf2eu5Aa8qPZ9SkdDYZDNYJCg7jSjZ6DGcvWxK",
  "key27": "NPBwYXKn7Mo3aZ5YbNmDbxBxQXCpxRoaLQZgGGWSNzfUzsL647bfFohkcLK9cTry3vPTQnQB8sixQRoxJYSRDLn",
  "key28": "2CEK4rJ7J7bRLyjvfRD7k3A7FhARgYUrwVbLdJK28rSViPHmTNNtHuLp5Wm4JhgGfXvqBb5oKwtZj3vFhybD4Z8s",
  "key29": "gbjXWaKTKqq2ucqv69ft58877HMJmSRwGB2Kwi1G3NTrzBgw3qCJdX2HfCuNV8HPiPy6pjsTY8TYkKo3A8uttL3",
  "key30": "1EGh9gGe6E16y1sdyT3LuGpg122Cb45EFrCLEShmrpER9scjtjGWkYezzwiCYxeR6TqQp8T1fxRk8FbzhphnzAd",
  "key31": "1bfERaa2NnMw35Nx3P4UsyMDjd6yTGkLSkxJzwrd1cY1BwFPHkVtkLXrMcEjWy4kQwzKAYhkWToderXsXxdyi9Z",
  "key32": "2fyrm9Jmj2MfBNVRdC1j8rRgbdy6D17Rc6nZhyJvTjpLLFLsZWirwMTPu5V9Gnqs11iq3ZBD4jUeUTHe7qcpg2vG",
  "key33": "21XpKE4SMSdna2RgKnJffgPgDSWUnQVfH5tTyMEzWsLVdDxGycfYbK2dUtGmoY66pJpopn7nr2WG2DjfH65FxidS",
  "key34": "64GJosDKep8RF64n5C1o6YGihMYKh7HjJ8HpW6i1inDttKqF77D6jeyqU4YRjCgFfQNV4N7fU6Ch5daFUg7Pps9o",
  "key35": "4b3nKUTfCpdPQT4jMQK6p4KFXtmSRBWwkPDVsbNzxfnCYn5dGQ957WrFt7E15unFVGrPLbwWcBy44C3rE5ASPgWq",
  "key36": "hdXYxBbJHqpDPeC3q9SerGxmX33ZVuNHYqnCAjiP3e1L5r8gzDALvqC8JV4M3PKpR4wpWjcTwSxi941C5X6V3EJ",
  "key37": "3qVKGsvNG6jKYoRqBpaYatHChRskgc3piPTzBx8eewxcSUyhxk5KXLhhsACzMKjTffvWriZdgynVh7mmiitPY8Yi",
  "key38": "3pk7xHXQ3W8FyqScWgRQQ3511zaTtoDzyxPJR4Rhtr9uWFMw9GkmyhA9iKe4baimapCq5fsuUABw9cSR5eJZg2MA",
  "key39": "36GUkoU8JJibACHhbpLBEQEPdTvsWt2DfLtKEhcN4jUjdWNAEbPfkzpNfuYkrwYs5i83dVo5QCxUWLUBpog5H7nz",
  "key40": "2QfLGqckULUsCDBmreeqKpP1SwJ1ikTEjQdya4sy7eCGTRw9K7per983USvFRQAqZN8KyAEya4HxbXUXWqBHciPF",
  "key41": "3NdtFwwJpi4sLuuS5MBsyFgRgoTnrKDX7ppPR2P991WX6cBaWRpo9uXZBu8SegEthT889tEuJ2EXf1t5HUpb3i2E",
  "key42": "Tf1HQsqXuN2Cc9MKR6Np6CQnm4TjcdJvp72C33xcWxeK78hJN93HtuJwEkuvMaVD6f5c8upw5xbEasJiLDroava",
  "key43": "5DHPQ9CuBnkrPeSUvjSuamTPPJjaCg8v2x8u8ANEfirHVMx94dfPVzFjCPXz2fTMLHPtnSF17Ba5XnwXj4BUy1PE"
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
