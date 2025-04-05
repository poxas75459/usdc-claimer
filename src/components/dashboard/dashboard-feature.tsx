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
    "2Snzshxhu7UjjYzWZVUpzsb3U1zSU75oyVzfgi5FJC9pLXjPUrwsbWqTHAgw9FeQngvaRFWDZ7m7FL5PNRwyYh2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrLhQzzztDMRuJefxSEJQk8LZ2NN26z6zP8YxbhAFQ7qBz93AFh42UQso4VV9jWy61o5frSYa8roa93MMr1Y9Ro",
  "key1": "636hN4oaQjpxPNwQJYFSYj7vKQk6KcHosbk5fXJDoyjDuEAQNBrbhnfJ8ACr6j4VRNhkWq3oYc8yqDLWU859zFYG",
  "key2": "RrcAd5LiwVCTWVmHgQSobqhErfGZzgExMpFPHBuGNeka5ciaZPC1wNgXLqQuPxbdQKRn7KCDUHq1Pw5f7Cgd2v1",
  "key3": "2EtAqXYgXAT73Esceiez2ugaqGLWhizgMjvzCnPJ14YZS3nqmpAmD8ZYH3LkTRZVE5Y3FRkSmGVFnYxjrf7KHDsZ",
  "key4": "2Xmqd9aL971FrRN5Y2d3reYHjBe4rsr6XMRq5h2Up9bieRe9X64hFnhsamGPYK7nFtcdZ8zXdgfcwqmiPUgbFFqH",
  "key5": "5V5L6cAQgFqEFPGRpEfTrcdGjFB8XsF7cY9MgZci5QE1UL9X8XZJsGc9cF8MUpZf8b3Nu3yADEYLJV1hgf9fW7Ro",
  "key6": "SWky2yM9W7cZxfZLAuHUg76WggCSDrcdXEoVKFbCbv5H98a9oHi2ehsogR3Z6woS3mwsiWEJ1vhPCsFhbej3QF1",
  "key7": "42e5WwBavdLHZpxrWyVr4yngb71FgZKHbJ4edHEZZkYC15bxnhsbu98zHBNGos5JRUnWVKX3d2GajCrJq7kGbn5H",
  "key8": "2rFRgedsRtvPW4mzXP77cXie1LipAzWQrfbWb6FS2Yi6SNbJrNSW72jBAQYt2FWQp4B6zN13byDuHMX9qQVR64Sc",
  "key9": "qUVTWMKZQgtTWhjATFPNdFjfHqCmAAi3ChsHarX3o1t4ArDC8hwvuShEGX5nN21m9y7XrFYwDmYwzXcfnfVX2iJ",
  "key10": "2jRBM5wzBREjRZdCP7swfztvccnwBikPZHadpy6aVvH1edzq9R8PxM3LM5FyNUDyPLDfSvEbfKDwoc75iFegzUBf",
  "key11": "667rUV1piB2z394uHugxgBzQYr2HEhv5pB2cA6dP5A8NJuQScb5ckTMeYB7P1zjAhCLkNv5sPcDWXDCKPze5eJ5L",
  "key12": "3cZEiN2nfx2DTp52ovZ4Cm1yvc7KHqfceEQ4NMdamYFdqxz1FBHU5sXEkJa2gjzEy7d15NNGMwxUE6RrRo9MBDRo",
  "key13": "5Y3GgL9ChpL2ZcShmX3tnjL3D1WtmzHx8HJpQ3vdssaxfJ7eS7AiV2ESwQLSduaYwLKLonXEAfk8NeUKeHHSxSM5",
  "key14": "2vQrLQeyqpZhaEiUM5FKxJs2TAfNsFVTPj1KNZD6nipPAdk7Z2NTv5rBza7kxEtkQjDnsMPwdeU84TRhWWLTFN2M",
  "key15": "4frzhiNmGdWhyTv2rqWHihFLAzMvaXibf1oNPB2zkz5gZzxe2Wfw4rHuVpTogG6qiEtWJFVbddPguewgABbad1NR",
  "key16": "3JKLTmZP2hsrMy5zHx3cmd8wvh2f7vGNFgy2BLCoYCjdAY8kjEX43z8HUjbPEUSy5zq3eu1Fn88MDkiqzFD2CXKU",
  "key17": "LU1Ut4YNuMdcYDALarKB3YHALw3jXnwGF24dFK4rZt6XGNqBZHqFA6YiyQwHXvUQU7SJwbon5suSq6DkoKhmzM9",
  "key18": "2gszpouvk7kXpCKHc9ChRPcHN4SNdzxX5D9Hiedi9rcQUGLkCZhjTLphEvadjMFJdnLyJdJZBZc1gCmiubima2Sm",
  "key19": "5b14CQbgcX8UGhmaiACt48t6Cg89kR16wQroAvmqZBRWMeQjSXDoeFQECngr3UCMuyLtsW1ErH7xPKLbV34dYdBB",
  "key20": "oQAgrcpfsmLQcQUskUvUwMvcLrjKVuYyo7wWs2eqA1JQgKfEaoMWFXD5VCuBzRu5R22M1HCnnfm1MhvDejqYLQJ",
  "key21": "2tRzqa67juAzvVp5RkAtJzRs2ry151s5GxEwcyjj7WW4qmLHPyhV4AeT9k1JefJHq5yp8zg5z4ruopoQ8wYtmdsx",
  "key22": "3PNFSncszEyouh6FfkcagHGkigVycsZAcZgcrT52kPgvE3FwuhRQuvYSwMrs2tPQSTib8z9gJtr8h7EXxmoCQx6B",
  "key23": "SC9QMVkZD4k8bxQ3cryL2NHQL3ZXvjwL3bmKSMk1rwNC2gqLbavVWvE7xaNUftQwmYtauXG9zSnPiCPw5VYdtWR",
  "key24": "422WVGsYWuAdWw213FVqX1a5aSaqWfTGaqdmBkDH9cXi38JSvheA9wvrSmDU2ajoWE54qPPVtQEkFXayWfXGkspZ",
  "key25": "3k4H8M3zYxWKUeRW8ZmKfDN9H3L2jERBnR5KjdX7GqB6cKGuAjj8rF1EuWtt8FhVZuZJeMSvJHa4ADAFH29Sb2R3",
  "key26": "2PYwJj4VCueSC2hCnDNiKKS33xJoWXohkbQfQcMcwK7Ax5mfu62Yc4nUcFdCGUxu4BHJxPQUYeDLi9HkwtXLzKyx",
  "key27": "4jenmocCcJz8zWPwZcg9kTFVuWAoDRoXBrmbGCG3LiYJcConVvg2kaVgb6q3fmAK2jv4LESVG53ffonJ7ETxGLRh",
  "key28": "52H7YHU3e4wf9xDstxECWaq3hSdV8bX1ctRhL3KEwdztKYEsKtwq84yXya78Rb3s3NnFKgdK6uEYBwQ7zxdL1zbE",
  "key29": "4M4wNDR4pXR1VCLbJXy4v2ZuAYzLpFgjRBuZEgQRv7C37PV7XPqPNXVaAxQ7nazFugd9nBzeL7WeD5cHHDW1o3gp",
  "key30": "5Fc1WmqFBub2dfmTS31ikWPx6iWR7sXmiFLLBrhh7Dxspcq7ZTK2K4Cd2dEDaq362ESktrpXDdYX94VgsqFMFKME",
  "key31": "2Dwc7ZYGQ3MgGE7w3hyQcoTcq6Mu6rJxWrSckZzYjb3i1vQ2eb648jz4253zx6FG1mGdygRu9qboGnGgKf97SsSn",
  "key32": "7Vk2UWhcgXub3EYnQN1gekU9kAejo2kayN378BhGWsWdHcgcPvvScpfRhd4kH2PoxTqyBnngeafwfhz9tYHaroN",
  "key33": "s6TueFt1voK7nEjBZpNnSHzhc3h2URXZ7ubfq6rYypTJW2fo4uoHLSXu3WxXrmcfa5S2yMJGibAKf74jhduZM5A",
  "key34": "5seMxP1Bbn6r4ES1U5CVdeD1PUAL6qxFndcczqGGEVRx2AaaN4dV8UTAmjGmo9BND4Ezo6bb5Szn4wUbJzxEvvFy",
  "key35": "4EdvgedT5aYu6NtfeB4uxJKvK4xYPQh6SrwAaSKbmV7zWPKDpYSJVDk2wWNzkdHWyPEuYtkXcQtUDSoTpMwHSS4w",
  "key36": "4ZDGfuf7vSSThrU8TjRon4p7TKYsZrf65i5mY5V5JkppezatdHJEwcPCvY36HWnNw9PU2stMG6N6x6Lk4tTQiUvy",
  "key37": "3tNjXTwE9mDbcx7KkXfnS32eQsunVxVrMr3bwqVF3schQLYyA8MooMxWNrAoWnXTSsCgPBUsroBp9K9Ji82EiNpn",
  "key38": "2pW5oyupDKDU1oX6kGNiXUMouvRTgCuLmNZjEaJdjwda8KJGk3PZCJ867QD2jMPEbqPTk5kYHsq4xDe94FUGpPnR",
  "key39": "Ht4Acd35btRTLGfrtrAswqxjKpzoFZnSN9pVeNvdkctPqhZBcyiHzbvHRiGwmqAN9odhHLJG5rN5GJh3NtGviw5",
  "key40": "4MTMqzYSUaJitsPo9erexmxkCVzBWWHsTNXrC74CoRgQYc3bc89dG8wD6Vvte6faieYEXMo2azoLxRwHbtFGuSqg",
  "key41": "vk5CwuaLJMVnMCVipd8yZ8hcFyzQGSRW4XsMHcjF56AzwTZ8VD8MXJDpD19QXrcskZSGM5v8WhTbzULf9Rw2JGN",
  "key42": "3agCv9Qth5hWBq59YcSbnysZseFB3i76h18kTNQtS1yGiDpwuybdzzMMt7zhPLh4Acw1YdUNhz2yyWoujmfUQ9zr",
  "key43": "52HX99hHFP6j8gANVFPGMsb98F33yBkMRvTWs4fwS74Ff8U2PaR8ZBCi8nJv5Zdxf4ddSDDFMnMiYwc4G7j78MWM",
  "key44": "3n8vctJp7Gv4Gkdd8tKcEyKmeSr1XYobJEHHiLyZ7MSALtSosme5Ly4koyYdRW7SeWagEqnyzR62QKDJXY9PEGS7",
  "key45": "4SF5nkvzBgXMiKBgA7Aa1v8K4hMn2HezszCmBPzt8gwH851CnYkpttqcZGSmuarHPLwCBHwbSNnVRLztu15qZW9d",
  "key46": "2jAJXaZBUauuUWaJoCEwS1Zshh7tdr6wCWjqf9JZGYC523ioyrajkz5BQ4N3hWTLw4tDrq88Rv2rS55UyZYu7Dyr",
  "key47": "5Kq1v1GJHTh65NTXPDYq1rdTLWe3bc4q1yxabCaHMM7ebYUCzj5U1NncKa8apVAdugeFbMo8b7yFme2qVmDFzQK3",
  "key48": "RJ3UoenwLBtQxyfxrmnb5y44FyMBD3ELLMatU3Nsci33ecAuGbhrje9wjDozh5nMK62mHY4KFMBBJndXQfQFRNs",
  "key49": "4XkXDEVPULAuYoeM7nq7CBfLrJQ9WBkaroK2xHAtq35PxAWZFYaf4NCBCnzUyh8mfbmz2CcVWEUSg6dw4YuaLHnz"
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
