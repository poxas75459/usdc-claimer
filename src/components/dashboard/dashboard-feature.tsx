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
    "32fddqCeC2mb1LZjEXD8eL6cUXyMDbjAuBBZns5re1ApErJW5KpYbb3RMsdZANviYmN2w1NDrDx86mCt39HdzENG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwN6XBQSvXzT1DQR38XKEpE9ARMA3a1TDh7sTHcxxobVnKuSnsMHYgVpnmo1S4cEsmWcZyqdrKRZVzdKtstpin",
  "key1": "Tpzu2AUevL3VqJTFWLriuG9pVRacZmNRkmRYssCeYBxkWwXcSgosuwygosQemdqxq5qaT2fAKQ4mvdZDz1o47QR",
  "key2": "4Lx3LqzPL9HUfzHdvYftLBaxC3Q6ME6An1DKjCSeprfpdSfZowMQQ5A1ZL3WSpM1pRp6TDX8F6eQZdw44w99PZMx",
  "key3": "56h5RDgFtZe5mfn4HRmfk14R8xWJjyfEWA7tCmESUvGqGFGB1AYH1AsrUFNDBnGum9LojhnFo7WZjxup8jVpMHDL",
  "key4": "4RqFtE26RFAKGuLTQzszVStxPFVRhjGgDa7fQ5KRL86fFAmt2Y4CWUGaPkNm4kmh3yLsZpw6BtfLyoasZt5suhos",
  "key5": "3kzktFpdJ9iVLqgdG5Zj4J275U4vxhW3ZkKhHZugZM7f52TWTSe1KxhwFeNgakQGG9zAc14GQ8MRkKYGVbZZJsWL",
  "key6": "ApPtwZaUxVyYxCS6qRdssFfXpS74k4hVjLUWPoWTvb5Q2muqjWPThMrK52rt8qPdQ1GMcSNSHGLvh8vP6MC5dsS",
  "key7": "64ebdTvtB4fs7oitGMMKveq4V33iU1xYG6chvVY3ZuKtNpq7pgFBrPUV4tW97FiGjzufyaBken6N4spcLig19LAy",
  "key8": "3Er9gx5hkkPN8v6Z9JHSLxekSi4eVb6H5cbqtNe63qzPPL7ctRFD8SHmB4TypN81KZQpHVJhvYHqH2BxnD8H8Czw",
  "key9": "5KWNu3erm5kTZzsmoi9sguHXDN3fP6fb3MDTnvikFFC2PjVCwjejqNNdFkkZVRwmrSixbDh1xBDvmQYbskbUy4U6",
  "key10": "5B64T9mB6zYGRVbHHojmMfhMyRLD8AHXiMcX8kXgNt5JhE3k7nLtbL1gmGFiL8n2xxUXCgY3Gy2Sy95h8uGeF2gf",
  "key11": "CD1y2aAqyiXYuoti9JN8eLsnWkKAnzQvAU4GcFxV1WbXQATs1ghbFMbVTFAjaztQvy7y57szoTSVoLVSi826DSd",
  "key12": "2YfSk6buH9pdebD68PZeEywhzTAfMoa1jPuwLg8o9pHGoPXxWExJ833aRVvNZs8NxbvcVsG3DseZoAA5qwybHhHW",
  "key13": "4HQuBymuNNa4BPDHpFZRBe4k5sKsbHZF7CBhXjJJ42pgUWN8NSwadL6ni544bhMsGXrN9PVdphzoL3uRNrNj7bn5",
  "key14": "324UFikh7Y3pFYMvLA7XKrnRkj7ftWcB9TnYiMfL1nCZjUXe63krCt8vp4buwGWZrkpy5XVc41mHhDhjJ7KHtvDK",
  "key15": "2waBjXPJiALMBPU5NTSAArzxHRM7QbV3h15YMMurzsEiW1n4BLvuMT7TiBZfP4oEhcAYp95n4V5Aa1u7SeSfLx5b",
  "key16": "JrorUbsmbA524PQiHDd6bFYF8H3AgWwwQfY25ixANLKPEkjqtBw4yFddUiZPPAsuChJ5CoCtbooXUS4wYnuBJbr",
  "key17": "4MbgjTzc6J7VAZpPF9nYAMKeewKsKrYmd3N4BbhxtdL32D6313RU6GMaNmwmB9SkBPgiLpqb8wGcyVAkcgrGMaPo",
  "key18": "4fAJMoev7mesWJi6Asx63UyNZHTg9LrbEUcNAqcbj32g2xVfy2QgJ2KGrnMVHs9R7tbFZq22wfRzHnsrxZMn9aqQ",
  "key19": "38rLk54ZUU3oFEKusvF2X3L4AQiNTbmE982QTPw5dy8pWm1MFDT64wd8f1Y4sTbroZ5F1nteShb7EfLL6epniKGr",
  "key20": "4e9nUHWpK8ampjsL7BK9P23aF1RPpwzgU3KntY4diiMPnu7ZGJhQ73wRfcAXKRE1gqQDLPp9n9hTKdpEHZb1bY2M",
  "key21": "2ZLoQKzWgmADiYoCmkBr7dGeuZknK9pvFme1UDMAVp8Bh7BmnwTHjmfc1oKinpZqmVSXe1xBamVByNnG75vHyPAC",
  "key22": "36RF94NQ64PLbsFD3jCbPYyKo6o8tc9Xjk5adNZKgA4nHSfDWhrPmrApCTgKSSCC7WCSUNwWJ9MfgaRUdGxmeJwd",
  "key23": "hTh2LqYq1yf7fJjLwpCxpRcJQqV5KpPN5VFWJPkGeXV5K4ukcU7TDFW3JXc9gLrw3QfxzsM4n1Wg2C8J3VaEwJu",
  "key24": "2e8LW15vPigzzhPWQUHPAchmfskiz52Hp5ckeGVvdeJWMrbFMT291ba43RZwrdWQ22oy9i2TjSiHXAU6k4bVXxr4",
  "key25": "tyFxYFFiJKqMcnR6meVE9uiNPdRc8mo7yaAmjwJZsWyyKuG9jo9byLyPY9r6hr14RfxLxWfCCGBZ4GekzR5CqSX",
  "key26": "5rUhnkRRHGeMU3mTkM8bkZz2yRyiWRuBcVfptM21DjmjbAoSGTooEdZhmARx1SgaJLcx5J8HKfvwrMvJU3MS5Tcq",
  "key27": "4SMLRzuaLVph6MjzqaCCCZm92HiSJJmaGg8jwNRmyiWeiUGMA54BeWFMh2uHPGynUZb4FeAcbpgNMNbTAkzoART2",
  "key28": "2AdPnPr4bLnmhBmNU29rpkRF3xprf5qDxtgcSXe4cNajkpUAz6UTAvDT7B5cvEQoG549ST1Hkv6U2J86QrXKTrYg",
  "key29": "2JxhpFjBKg5atVH7Gbr3cQxSpZu2szVDQmVzqKwzS31vqEzNsPJojBKPFd1WZzCKEAUrmifCD7BAHDUAnHWtmy9w",
  "key30": "sTa6NpwysEvmGYQ1Butx6rD4MAtgLXT2vQCc3t28hoNfsK4kPexCDA6a3299Lp5XpDXXbu91fsjzy9Pjv3dd63d",
  "key31": "5JtiEbZAoqX3f7r9h11UobHsXm1bACkW44ckV12NAAFaihNv5ArgB9oqK2t2JFrVz7BVucHR3kg7jXiDVmxmABAe",
  "key32": "3kKVUbzyhMNxv8TBokpjFJsX3vyPc1Kb2uQFiKa5VvsGss8PYNhmmDujHWPZdeoJMqBGNPLsurPqyCu8ju8JQA2g",
  "key33": "67VA5kARL7oBKFEpK7qmLRmAmFUfJszs9wb5vAUyUQMXUEcwrJY8bxasPzMmN2LXnBmTtwbDzJDwismfWPkdHmZQ",
  "key34": "4731S1dx1aRySeeYt7Y7svjeHP6qmwNxAPXiXcUnjav6NHQiTm7WEiAKVyHqeWoAhno3p2LN4vohDj47ajyV6XaG",
  "key35": "627d4GnByGANjiE2jbDWbiNXd7phQ8FkkCW1zBt1u4PEHHrrqVYDwebpG8Y8uj6Vxeota8YC2mujaBcdByMGcuEM",
  "key36": "ZGHqgzaiNexBx61LGt312deK3ayx6vQysv34y1jLNvniWkK6Y65oMwBnsCkq7b7zExc9jo6bok2AfVkM4CLNAUy",
  "key37": "3XH9EQkTZLh8EbEP9Mc8Dxs2cqsNHLfVEJtVXcEJTwSee112eMeLcpEitDeG2QynHLSavttGWrtkCr9JnbjcMV59",
  "key38": "3tRbwp7jCu4CfZ9CqJxjTemnvKQTdzp5jN5FCQKhG3KgQKgswap3J3H5fcGTwuHpEgC7KA6UAQHMNHu8mV84jeMW",
  "key39": "iS33RGNKRzYEDUAVPeXiXVyAjsgxdMrStN3A6rQ5bJwLBSEzHzRgj6Lw7afSLQT3DYrfo5G8vt3U3J1LiUvdZnj",
  "key40": "2PpBRFnCvRGTDbczpfM74Qiw7C2TxyfsSyKDX1BCS1WV4j1L4h8ySF2uTBZMqTGNh4ErxsFZto4PvpY8wC1hk4fC",
  "key41": "2mc4BRxdDbbYkKH6PRKBxxdPXmaFT3siDrNapTqQwfa1Pmb42YtYXE7Yaj96WwwjJeUM6YqqcYeKg48jyMGvY3yx",
  "key42": "43dZ25NCB5k9gP1fLeqie1dAq2F1GgbKcoFWkX2nSiJPmgjToVtrLExsQGZE56EowEUgD7hGQkKGGH7KG6DvWUcn",
  "key43": "4oRHA6CPL8arGpi3Yqc6Eq2wX3QDkRKLFFbS4yB7vs4Nfq9NpUDT125qhVkpESjhxqJzxMSZo8LBhizyCJZuoxVd",
  "key44": "5aBPJHnPoVUXjM7DDaT81QHHp57Ps1UWjpXgQUhf1UbwrxJoYHaeuAAWBE4LA2q19x6nhg3hWzQPPEW1pENsYHLE",
  "key45": "2rSrmhyECxh37LWy8CZBaD5cyPBCWKMkejU2zEwjsaKimVrwghj2s4jfqZo287cx3ciEor1vorZxSV1i9Tp3aSAv",
  "key46": "3aYsLe7YB3Ngyrn8jDn7zAyqvXYMdMCuBRRzLixbKJfzeoDWiYd8W7KztWgQtuoQVp2NMpZtAE8xLezzyHXmnhYu"
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
