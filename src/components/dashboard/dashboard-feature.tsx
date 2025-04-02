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
    "5bJcssaNqvgGnKgK8Xwq8Y85EidKbC8gq12dc5vHg2zXD681b1FF1jWbctxyr3de7ZPmiQ97QyPna22q6vG7BSuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCsQGb7itT5L8msvwSaHefEKHEbK68SiDzPMmVL8NQxsrCJvMviZYgwNebdujDup9TgKkF8dZauwFUX9BbwYcRD",
  "key1": "4YBGTZKmX2U4Lb1qgw5HoMegdtw74mRNzQnfVibvMsYFRxifreJvpVtsHydnuHiWRhk4AnfpjyWRkUYoktSc1E3V",
  "key2": "2udiNYjPp7yoZa769YJw7ou3qfWNn79erEU3QdxkCXCDF7q3SdHUwSVvi3CiBQZ3xZJEaz7XykcdQ1R62LzELn5S",
  "key3": "2m5Kzw7pDLWztC5gb3NsqG1fbqqFEU5qFRSyYSw6do38RuHtv78BLu46pxgng3hJBapYsTvv3cEZYEAWBMRKtEDk",
  "key4": "3i3uNbi5LrV4ijsbYheeCu8unsZCR141SMtBYVyfYU8CYjL7oe4LoxMyyMxT9XeR8mJ4sYkvxLYZ5kbTaJJWfH5Z",
  "key5": "3QPp8mRaPigmLxBGos5ZfchUzxBEnSWD7gBks5wHJdbHvWfsafvrTt78wT24Sj1vBPY6SUbNHz2uHHsnJCM92LCQ",
  "key6": "3KpDaKEF7jKJrsg4xWwwzBQvrBWwyNaYEbk2L5z35coQ9FsyMk2AH7tvxHFMXJfnunNbXUaieNSeYidyFT9Atb8Q",
  "key7": "5xBHAyjCEG6VRoMmKfRcAHy5NH8sekqii773tEybHALudsNVRQbpEDFxSp9L5Y1gCMZZxdqbnhrr6D3936cojagR",
  "key8": "56ei9mwYpGTdsJtqdcib9rfhu28JNYuvWTraBMtVJkcZA3XFG4HEcMZXnDoyga8LoX1yPA4ZW7fFkU5bGCRXcCrM",
  "key9": "29T1epmE2bm6BYMPnczTfroDqCcNTTL9j74eRcsQrTohC5ViXEb4X55aiv9XHAMirLY6UwdXXATuMqisLkVncbHZ",
  "key10": "25Wd92xxtoVuGL1Xf8vqq2fv1RyPTDRpNdyo7s18YVCZKBGZWPrkqWwimuSwNPqg3Xe6SBZcpd5oZkmboaMA4rWc",
  "key11": "3cx2sbARseVKb5dkw1z3zLU1sruNPVd7bzYU2SsmifHeHrQqYEzKCg6choXhUjcTNjYSU6SpGUagPCqjgC6BrU5Q",
  "key12": "36yhhgahX2nwKgtC5vSrX4izV7JzRybfysUEKTr5vQPg1vpSkxTRXJPmz6RgwKps1UcpeT7HVBD7XysnHzYhnjAh",
  "key13": "5xRoA6EEuBMacePYM4bssR2Ln9cx9RJrojQCurAPvA5kZtteyGiQp3oz3Fk7AUjJZcoz351BRZs3kBPNuy55P2Bz",
  "key14": "4fMPXb3hbWKidbwV3CMMD3GGPeZhj73P2GfdYTDDjnDKfD9F8wumgtmNWopQptQNLiLpCNm3cmrupRLQHMC6Y2dP",
  "key15": "26mxxVXfwZX4STrzcCnfNhvxnji8FcKKnM2sBTbmnWtKthTHHQkysjDeGSxwCPFjg9nDMs1a4ewh7KBHCB9YXqKs",
  "key16": "2rKE6DzT9f9U1r59TnaTeEZUtrGwVi831B7DvpkkFnRuPYcdGhwg7KRAWS6VBhtwvbEKJvuQWpBU4p6MsWuKAJHW",
  "key17": "2EewqBwBmAHxCj9x179nMzi5yx81rNZY3MRYX2dydoze8wbtSQqjn48HMTLVdib5Dg49ZLxEK3MKJKeKzbPK6CDq",
  "key18": "wdVCfLxe28JPDj9KwPPEAYTuiHb7zFbkH6MAqzzxgBnxmQKCRyNWsRjgDREL7WdKswVRi4jcGePrY2uHPiEbjsr",
  "key19": "3kLKiaNZ4vR5vFe5VQPzv9v4Ggpcob472CLbYrZoUtjzMaFQvoFYntVZbdEtfLbe8MLsxjGYQTKZkG569YYcBAai",
  "key20": "3YQXYvRdPASNXVFoMZui1dFMGgP8mvniF74fRjT1eK16eYnFQFvG4idKHGVeguhMGar3WbV2bGzHmRyDEWTiEzqj",
  "key21": "mJ3Yr3dbcu8RyPevVPSs7zvEkD8NGRfbnzHRoacj3DUQCCuvpgsgRhJdBxm2ApNa49GRsQmpTAuZEyniTEGUjDX",
  "key22": "9NmawkdkoxtaTpCvxWgrXxDQTTPZqZUXe2XmfnsMh9UuVVM4sfvfbJA3rbg5VnFMixKtQbSeqjmao8FTg1bQBM1",
  "key23": "sZVMKsuGrJeBugcNXrXeBCHxzzYkErWQ9fjdjuRjtTPjy3AcgwFVEzVWpqzC4gxQgeCJjVYo7CwF1T6tHuNX6J4",
  "key24": "28aeEqQi6AJ39NvqJ5WJgxzXZbthx1NZQQbVFFYzmeGgq8DYs28dxQbs1xhNLmH5eBVrPm2s53dbXjwA65DRQANE",
  "key25": "2iaaeQVpabjA7ZzL8RxazTGG13EwgEPKApLxJJud9Ka2Q25EJxFauKbd3bWNd8Et9L2mT9FSuPiGi2cjw2WHgu6h",
  "key26": "4YrfewqQKy9nNtyfFJZ3ak8aWEjvBRY6TzRqS7pMyRvmqJqSxNt838PGdxK4YDGn6xEHYPA4HNdhj1a7MLXo8am8",
  "key27": "5UfrroLiQg2EXjX5eH8SvKwLtEsFD88vrsunnY4UhyubBz1BHJ4VJYNDXkpG2nLzwPXNiX5uw935WHvQtsho3SDY",
  "key28": "5dDevdWPMR9Zj1AwkqCwGuy2vt4sxfAaZf4KmbTeoQviy1yy9xJXC8ckvawM8j5V5biagdAXcPGUUpcPh7Ndpd7D",
  "key29": "3RFxV6z74qCbLY9xkuc73K2owA6YX1aCykh5GiPe7tpqgCrSSPRsxKQaRCZPrDg9XW8LVTXJ41Wognfq1vf8NX5v",
  "key30": "5Hthp75e62p13bw6Caz6A8SxUUrKRAy4F6dNPFxAou1vLrinb46k5n93v4AthFbqswxfDPddCpAXQH915RKqJ2WK",
  "key31": "4y6Ui9FsewTWjjeAxax5oUzWJbei9bDdpy6ncFMSBpwt8nnDbt2JPy3QgDGPizri3Cn2BUwEkYy5bmsKJNDHanAC",
  "key32": "5J84yUqeGJA3XYmJuBANvGwukAFFPG3tiTATXR62EZHoMoV6E9jA7k9EuKpLAAeWn7y4B2nBgCzENDMQuhZwHNkM",
  "key33": "38ZADKNUpy86mK5NFjqwz95z7z5WiZ9HM8RWJgV7dkf2JTrhnZtNbQHBWn4vXStfLbpe7nBE666XYqd4s2Rg7kSo",
  "key34": "3Xo6t5TMaSneEJfo5ge7jd5ZGuhZKd1uqPFyyuEtJEEov2LXqXFkxZYxVnz4KftvwZ8LwkouJvh1DZ3noGmqrS3m",
  "key35": "c6S34ajjnAR9Vc2fLuZHeK2MtoMcnPvtFxXZTW1R4SL5QC1fpwu5zENUfsYhhoD7e1CcVh8Mctc6jmhpJnpmWA8",
  "key36": "4Ay8EEsyPii31dhxX7EKP4JriPWZZ2Tohbf1SKAGxK5C14y2HyRfvupoZCNeF1u936NwTQuKEBsdsChM4GCGztdt",
  "key37": "46wixjSBjCRCd8JSS7s1KzCwg1tnnbjyDWP61iRisJDa1vajZHdKf9MQoataGwdpwxBHj2QfQJHQ752e5wREar3k",
  "key38": "21HaCkHRfprHTacWHcWPUi9sZTgKgTgmwsTbft4xWVvCyw6tA23iEoCbd9T2vZHknt3rdSx61KsgHHt3h7tyC8j4",
  "key39": "5BphbvES6RoyBSQUpN6b6LXPi6t1M5EbLNb3wBVnStkLsmPvrKadSMFVzhojr96qGSEzdqUri4sAmxBQ3AdNYUJU",
  "key40": "4yN9qX5w74A4zuUaHrtEfW7JYBDMkmaaRh9rj782BgZLVopRgDYy5rVDkscyFx2BEgL7KS1mLmkeX4kYwWXxAqQs",
  "key41": "4sjF2CpX3rjUV45jAc9qn2vssjHz4NbFQaGRCP92P68x8LVE52wYrSazxghTRqhGYFTvJhr2V4G9b8FZx9X7ss38",
  "key42": "4z8RcHsbmckjFrkURifGWTakqRXk3gWA9aJRyEyMEFaGUNFqdvGDn5vTux3hrKhsW5vgEBaeED3C6FPBcgcRAqSD"
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
