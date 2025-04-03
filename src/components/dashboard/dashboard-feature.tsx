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
    "2hFLhHTddiTM4PEyLPFv8GtG1QB9KUaLFbg62bKBG4SY7BF1oZeTXotA5X2rAKSqAjKqL3khBsx5iSVFbsBEGzTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvKmArgG1yGt5YPoPapPLbyfRLooHARNFVEwsMaXiGyExUsaBXpCMdxG6o2X6igZgQXyVM8v3aaJ9Py62U9TiQZ",
  "key1": "2qcXU7pbWDRkdPaFGiYau8qNpJRifQ1YG57CuX5jtrMKREbHp2BffNm8cuNV6996jQRPNJ9SVTdtZXG4S1mtvEgW",
  "key2": "29dMQBbTKJUtWSkr1bWsUmN5t97VBejTVFjeoDe4dgeVNqKmJWHzSVetMdnrcQmjycQgFavCaXv9s4DbSihXCV9b",
  "key3": "5HHuLyo5uZoCvT3XAs4oh533KgRoF9JVNmwKpH7YbQi5cjHBswPJD86ToscDcsHU93tzAmsNNnELb12ditvWFL2r",
  "key4": "5ff1ZhEiTkn2bbsnqE1Q6ttxEFXCFNSPs7erntut3wvHGU2KTUN415jEjGmwbs3fMCWe2E4qs4RtaumedMf5bPGX",
  "key5": "4asQre72cDAjuwyP8qiqTKmcRPaoWwaJBwKPeURRRKfbHdVReKhC63h2N6QtRief3zmsMfk3onsFGArz9UidXZsP",
  "key6": "51xepAUkyT9H73Dazs6SiX9tMwDjqy42o8WTZsNQfG87j8uNBbwFJoiWGg35LxTHg4yjct2pdtot1YswN9VmCnDi",
  "key7": "3HRE9e87cnVdw322RuEvpPPQeivajzBydqbP4M1pD7A3DtfoPJ5BsgP52DT3HjzBwpju6MwRKToxqPKUkeSobfMY",
  "key8": "Xzqf3JjunUScJstfeLXpc4Y33zQwSbfMsTYq1WxTCrSMbmuRM64Sux8qpAWK9HmR5XZvo2m9UxhVeLM44Mv99VN",
  "key9": "3qgv5HYAZVXcVN2LJ5C7bGJrbPYNyoU1UMtTA8wPVzZwegn8etvaF42nVtPcgEXP49YkxVMqpqbHPYi3ryuKmAua",
  "key10": "21XXakrzRdJBPJSFDrbRw63pqpp5NPTaQP2MaYSRuERkrDKFtJn3L1j5FYPQ2rYZ895VPPHEjgBtqCHzY1iwQRfC",
  "key11": "54sJrqBxTeeV5XzKHeSXj1m6c7t1baoCRxEMHZfYT1HUC9FcjSpEN5w5Ey4U9WJr43UqsgoHNxQ5o9wA19imM7pr",
  "key12": "UUxEnGDSmPrMW1NvdATYJybjZuUx7i757EBQ17mUhX3BEiSUNwMrB8T7rcUduun7GP6tSitP86i1M3Kwe8rBn3H",
  "key13": "t44wySRXNiUQ6ituQ2no9ghMb3GcLoxTnB4uJRm3Rptfs3TmA4fV7XbMThb6CfBmNYDmsdguFjUTn2uPJCyfEda",
  "key14": "2gbMck1KsBCkMgUh74K9DXuF71krdxNkXBYNNLGtdrM44uE6gh1NpUJozZSpLZffqnJcGSVYcTemc155bbbH7Thg",
  "key15": "PV7VvRNzwx94XD1peZvgeVstY8fxEUoWpB4KGYR8e7PSWod1x6gto43hAgz6HRKTRNos9RkKXphvzT15d8YPqVg",
  "key16": "2eTbrBXazqVN4KKiQjPgKXPo3DgqynsNciYDjP7mBdbZXX1M85GV5hnKhVKLDGy1mVjdSdS8VnDxpUmyge9UQWxL",
  "key17": "2Lu2d9VAjUX2z9NgbEa9DDZnMHbYr1G3hbvym7jfVyUbwQQv9m7ToJBB1nhfpHpV848GMkJzT8PipiaJw88TRnhR",
  "key18": "4bCJkvyfYyoX4ev6ZK7JuR4GctdsF242SoXQPCqXvyx4xGLhprSsQZerWdFbhu1Cwbcyneev6mQv4Ba411t5zzfb",
  "key19": "5iZ1v75fUkhLrGVKFzT6rcd4GAm4tkrV7AfbHWZdnr6RioXKdFLmQYgPxaYknvdt4bfyaxpVF9vzZZbbfzhVDhFp",
  "key20": "516HMuA4RrWJHRAzTFjrRFTT7ywBjLbQqeHzRdLarZwd3wJHxYSL9HVyGQc6Mn2LhTsstcDwV8Rv46TRmi7qi3q4",
  "key21": "63jugC5hxSPQ46hakkfaqRjVWzvReSSxEFGPKbwGqsWu1egPwQRDkur9MWWWoL8GiXsrbgqaRLi5AqBNujzuFCwJ",
  "key22": "4U42XDtnDfYso5EkfNcSk3LKXhvLgHEWrbxy4vy6FMWbW3kezcuxH554xuVDd6cwKTQ2WN9WPtSn7yrmpRNxR1qU",
  "key23": "3XmkLhRqQrYCw7p3sF8JmUJPCkjMkfkrWBxQSxdPkhjJf8TagvWYtDwygF44Rw8Bb1gdYALKeSexdqUFmoU9hfUB",
  "key24": "29c5i1FhGLAid2Uov8V2ts3U7ehJDUNfhxP3HQG7rWxhg3ZrhLHi2Y84aFxaSaAW2q5ssRmqsBqFVNCQU8gr6sw6",
  "key25": "2UYQG3KPW2g34bpXcW4eCkh5PAoqA3q2SZKkyNQbS3DXefiRwGshBiycTFNnm56LN2u2EUuxPDejmP1UmWJKovKF",
  "key26": "527tnXPxwjpSQqLLFvGPPhNgiZi1xqXiWiuVqWSX6nBz4HZkJEFabq5i7KjSRJgcqhj15ZLPC7kB9v7xLsEWTvh",
  "key27": "4sD8ZXa6Y1ysynfzvmFRXL19wTHzwFf1GxwnRU2JzpjkZ2Vgk3nMxoKWEmUgg9Fjv6jf7R9VuYFDACEZs6mKfB1K",
  "key28": "TA6BRz5zKkYVBTJtZKw9sAZ7PCdFwzFUbaq4uNg4o8tNjq2GskjRFpzF2AZYWtxBfEKdBo9ypfdc6wRrbTPhdMo",
  "key29": "KwkyG4hvNjpRCfZvuKj1HskYhmDwSRvswqPAtYKuoch7M5bCFTiaZsT4Vkp3Jc68HiFTmYbhCNJp2x3PDs6GfkT",
  "key30": "2CGdvUJr5QvbwrcGfZTWDo1ECenAHYQP5L8Yr2HWXGEX5R17SEJrygUofh97rdDfuUB3Jmrdf1UR7PBwmhg8zwaW",
  "key31": "2g2hc2qMiBaf8QCVbeXWe1wdjxpJ2FSdzJYhDXMfuG6Gw5upkEYKCPewoRAQUggLLpwzuqPN85znBb1vVXWaP6bw",
  "key32": "3LuZrNZxDYe6Au7AZJP5jXuUs55XZG3YWMTAFvzL75nC9WdT3Ugh4DwdFrpeckzvK6yPMF7d59rs8ZKWpaQBEJMV",
  "key33": "5hvq9HU4EW8mGSFdEG2aFVUcU9hHvqXBseCpYH31xiX3fvukUF2NUtrFvP4o3mA1wvvjTJv4ucj6txtTVRFAfV7S",
  "key34": "4wAJ8YzQR8DZpmyfrDTwLz8Mm5iu6BurmknUEykbfAr3P8FPc5JJTUFccGAe5XNLjH61r2hkhudVSaTHM6wVGjBC",
  "key35": "xg6qXsuFuF12guUXeFSQpVG94sjau22xkeCmEuTPNQC4bFjy4atv67o549UM4ixyxt8X7ViRTQSrVWHK2wESfcj",
  "key36": "tPtH8TMLwFaTQ7WEu7Ajef2ix3To5u3s945rWfK1B68MBYoE47hqqr3tdiS6CDHuewbzhVTBuoosHW1wp6J67wq",
  "key37": "dvTm4Hv8ehKVUd7d23hXsHqrSYztaokhwZNxnShj1VYe34y5sJrgygjpamhVVQ42RcAG2cSk8FBcXdiUDhfcJQJ",
  "key38": "4qctX5zPWod6Tq1xgKQ63WndoQx7XiJTt3YS8jAxFiUeACXXsxNfADD82WisLrK1fiwnsETvV176QoPHzyThwJC5",
  "key39": "4MBRL9nEYyUEgjKpwAMw1RgVK8kdzi48mPg9QvUmJyckQmddrRKcjyQinxowXBVzEugd6MD9rjqU2L6mwFwxk9yK",
  "key40": "cEoRCGcTrSVFg6WsgEwXuBV4aiMomSNcEprLreqA1j6wuZpz1FtFo7fc46iHd6qbcYibwnePV6ZL7bR8tBcZpu3",
  "key41": "2tQugHTMYjoBxZFKoy2gWS6HXt1XWZz4rCKVaA9oM9fBU4t6TzgTuPJE7fsgfsvVd2XBxmeA6THq99TB2hW71zkJ",
  "key42": "3vjkeeqHwB6jpNjwzJTNP6QbZo9ERGxnqm7VL3k4JkCcZ4t4BvgE9j9qHtoVGwncc7354ygi9sGbbxiuxdHgzTaA",
  "key43": "43Y2TasvQTnr2JnYuKxEpUfjWUD7jMngNzwVoNUSEY6T4ugPrUeHN1sv3SRSybFQiwXWAACgGKduCoydop6RVH5m",
  "key44": "vftu7cvjpeEPzEivVfyBahmUq7kUFtYVCRtDHrtRJVqZq5gEgcoxDrRxxeMZcMx5JFQoTFiJUHeMEr6mzN63sg8"
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
