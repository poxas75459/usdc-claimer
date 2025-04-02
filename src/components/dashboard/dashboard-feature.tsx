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
    "2C4bGMopt2SX6AKLDEccemeLTp2DS52BhKK9SSidYKCE3gdLhPjgFvo2sLrv9tKsbpbf9ydifS25QKGWDYbtyPVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP5wN3md4b1w8ZHTjQiJYsoy3yMJjg241xHJVgvo4xbcfaVh6Kc4NpHxQvNUdvfLkYvzQJRngn9nsU8ykQc8D6d",
  "key1": "QKuSXFcLmKFETji5E5Vt7Bqpx823Ri8RJhYczeMEheVwaY7RXBwTJLi3kEY8HnYtyh9gF6mSvHLsfLJmRdj8nE1",
  "key2": "5uVWchoiEWERrQZYAon1WSQ5FhjTKjnS1YhtULDrCy6i3rGoWkqf1AoqTyoRkx5giy6xzPzHmzwisnPNXRRvti62",
  "key3": "5kHNRTkWeiLm6yghxdpYD9vx82ATd5yAVCJ11AceMDmhejJaczhHd7MEQhJEPb12Wq3bkvNnpawDXTUD6AiHUCn5",
  "key4": "5G2JyZz69nHLWqLxJbshFe9A2XFAVhVW1BxTqVTVyVYQuxeuBt3R6sDK6QFoccgPxsDZ1Hx7fdBkUf8UWtkyEWf7",
  "key5": "3oj89BVKk91igVL25cHqpAkvymy2iVaTytTexgTGqG5kKDs4VNYuSji6sdoNSs6F5ufptqUBMEcy1QgviMFEHaKQ",
  "key6": "3ZsBtiq4am1ja4gSVJGyNJ9Vr789P54ECN2gUQtjBoRA7nMtPzCGa4Tpq1WANrSX46aoUQ5uU3AVjp77KRyKNoLH",
  "key7": "4zr3TnSUqLoeEmuCbtKqfPpNTQzuyovrWsLVrvUTjWAKPyaCN46o9x63YVmtWNxzgENqkR38sV5LxQAQuetxnXEr",
  "key8": "5onzA5yVVeK73R16NA4Aqoanwc1eNdW8iy6oMFjVSyrN7yz8YAnEr6u1XyLRRSkXe9wyGWaKyhbbyECv7SpFE7k5",
  "key9": "JmfeH3NjBZWxs9fTT89tswgbxXWwnininjv71KAbNBw3ez1u1AGP83Zkz3FZ7Bm5qFik334BkdoaaFW3qEr4ehb",
  "key10": "CAdgsHzxp42Mrrh8NFrBK7kS3U36SNLXsCrhLDZELBjRhVYxQGvUMgDhNWkTgUiXEXaYMKJAbKrTdBqszdTiHYE",
  "key11": "2EPChAUYQJ6dKrW2R6vqSLeZvgBJ3vvw8TTzjfTTPAnzXXCLZTTTtQZRygCDxb3ayNTuF2Bgr1KNQKMUCouSLAuj",
  "key12": "ehqiHoWic2Pv883h1YUzBoKPQuZwUjiZv2mfZPM3AJkB2WEnSLSXN87EWpPFSJ5CEFriWsK2353K4AXL5JA17yF",
  "key13": "2nn2XVpK5XdJS3i2PJTwCW356WLWyzRat9mbX4jWZ1xSjvFiaXatpKBJuPQdWXg64VgEGNJjejtBv5kRV6fzJQmN",
  "key14": "2mzTKnFbxp4oogSP3rbcm91tJEETwdzBEKcEizavXAbSZsEYFhV9ctRDs9r5pG6Z7PsSiLWctDe9jSbWVPFRaszF",
  "key15": "2KWcUHrMG6NA9iwMTj1hPuE3mDB5fSEzYPytmRUksmv98Vcc4qbMFdWvfYwnV7qdwcVvaexWPf22vWbetdWf5BRe",
  "key16": "41cGwufof2uqxsekVRFVLHfWh1MQ8Zqe3qoBt9nLRzR31MkvCAiCssb6jTFDWXzGBX5we82jBw8FzaHyK1gvgvde",
  "key17": "44ET6tXiremPWQLTpNRXDuRHoYoWSZaNJFnpa5RCWNneprx2QgYQ2UeZF8J8uuMas8nm4NPi9yP8a5ovA5qUcrom",
  "key18": "bMcBxHA7g3BNSkKkUWXmbysn6anfuJYT9P7QhuNfXnpAZhc56zVi5qtUV4SGtnsiN3b2R1EMJUBekSw71QtEpt1",
  "key19": "5ScswzULrVKYfCN6rtBGhS3wGtPFyJkfLFnWnaXKCbXfRJ226csZbC9VtYf783aqDtka4qZdGnoWrDrkm2WwBuqw",
  "key20": "i71Lu5Er3dpsyKfVVwgtkmUbXAJe5kqZyXaPRGDG6CCawz7v86V4bbWtPcRnFfNxSzDhRAUQpFGNJwFRpX3GEQ2",
  "key21": "a73X17jfjN3BzCzDo2WRaMTM5zes6jEPRhMGR4fcdBRns53Lq2959Fm4AuXPuhbdtgcRb8JpbRhTgryVgxbJ3eG",
  "key22": "5qqfHoK7Tp49LRbfvFh22cB5UuQfwLVmM8xPoRDEQnX69FrD5zuPnUZMghvDJuDHE38fEghuEDAknFETFqsNHFd3",
  "key23": "xoXFziaZanz8UHWtdFsmvka5fqTKK5W4E6irZamfT7LPvmPEBPMrK2aCSmoRuCzerTg6e74cfPFkWvjYSL9YU4m",
  "key24": "KSdAHtFTdgHW4ApjTdNSUKBQMBcpknjwdK7ihVKRY3z5RQc3dKpz8NyW49zssaD4Yg3BJGofacoUhXVkb5Ajc1b",
  "key25": "3AMQDsMEL2q5tNADBi7upUHxDS4ng6Eqi51kPMDiwdqJuFZP64x6t3tSU3FKzMgw7nUxdicpnVKVmfyvDWVvxGug",
  "key26": "3rVWxwwwH8m8ckvLKgUJHwQAyskyqQov7bjTBzHcU7YGRatEMNSW5nM9HR1jMdxzm1XLwV8pkXj4wxYgYSKP2JD5",
  "key27": "2BJtti7WDeuvj4JMb9CHMsNw2sK7qeof5zswd8pTmuU9ZCwdZcNS7LswmgzJ7MmpsWZdKmcPD5kMQkxkN5qgrVbk",
  "key28": "5Q9oefBcs88GYesgh8CawNDozbgvwtF7rCRqcwhi4319ogS38jbqnSxYxX9rAEDKrefMQU1QbSwDTPPAvBHeNg9q",
  "key29": "MNC3VLMMvNYFCsnkEoDE7BVLG2uH8TtAsUkZs2dncfA5X8Nw516ahqsTdBZU8KWR4XndpEDCLF4JCmUXmmocGtM",
  "key30": "38EzKmyBcHBrGpga6F4Ckr1vVTdiKMaKM9gGJqpRZmsp22qMoMvZUZxiZ8PjK9tLeJ4w2v6dCHkHCFZk1Q2fXbaa",
  "key31": "2K1sRKoFFYZdi95W6zhNzvUA5NuNjwK2pB9RrqnNY2tGR4BhUanXX6iSPS6qAQroMzaBWGGGHMEBgzE6rgTDitft",
  "key32": "25FPszmciMpGsCQfy24dw1wfnjJxsuLFaiG2NSPXQWzLw1cBiLYeBMZ9E7gvGrGPKtBe1AUpbbDP2vvbLPyKhuUB",
  "key33": "36MXnDxYZws9ngjC5K39jKqNvM2icLXma59mKwBeuPAmANJmZV942JSQNWYkeT7VPydjq9NP3uQ45Utwt7kjKxhb",
  "key34": "9wBwkPCsTecGW6LMXUi8X6Yzb1JxmsyCy7PpvoE3jhbyAY5trrf1wAMS9uSb4yTVkgp2tjEc3uS95zRRCXw3xJ5",
  "key35": "5DikogGJ5u2TgVVVFkw7PaK8xzYpRTWwMFxSfVScdXGiwY4JZ5Vu2jkcn8ZLQheSQapsstqtfyvNaokhN6yAE3rq",
  "key36": "5khu6tuQWM8dGuT7qsvwQouoktVYPDHAiDVwkEebmTXUwRxYWCYZ5Hqm5bDqJFAkb5HZS88rGr6qUPUazZXDZvDq",
  "key37": "4gGZBYcGYfveUFfbJiDJBWi3wxvTRKpJctHAETaDNap3V5NrhYYQLciywJYbB2U4GXz1nAmQYVZXdj5cYxnwZ4Ju",
  "key38": "4dqN4CDPUTskgA5WiedGTSHm43EYvaBg48VMwwDGQqQkBZCm6ccLWyA94UzS6MpBdmW8rt2kvpBx5zfFXGZ8Tk8W",
  "key39": "5wZM6yFh5KngiwjrjLEMNLvzitj75TpjE72dHGvciXiP6HHLqviDreEq3Lt8BCc8pHDnKLw4wziZWm6LXQb6BzTH",
  "key40": "5Y8uxrAUj1n1eXiHsQdKJcPKfFUmq1LL1tnEch2qPX8uEMmwxYYarymcXPvb69cJHVdap3tHW952qiw8qtBWYeBS",
  "key41": "GcvqiajCaAuU7WPGKYY9VQV7QRH4iurGnDUbYWACLg4SJME17vxuthnSYgh8By4uW56y5Ak5Jkde9vrQzdtPKej",
  "key42": "27piBxv5jCuKcpwNv1jV1B7QBXYNGmabusU4eqUkmF6h1f13TTBQSY3rXyu6yKUh6m8GBN9DCM38HPnodDErYtCY",
  "key43": "5KiSY9vEUQjskghLb3bPxZyTxfmDgQ2KqWr4gMUCG15aNoeSCnHMvraWtuyVmuPStaFSnTTPwwkpoRHx3R5eCVXL",
  "key44": "5dSQfXg4Tiw3KinJKeineNuZzj1nCgHPjeniST5LymmX87vEsknn7aUBJK1p2cGdvGrH9V1pVqZH2u9r6URNSJSw"
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
