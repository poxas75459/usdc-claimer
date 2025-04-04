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
    "4VDEE3qokAo3Amz7nyVav9b4QTiJN2LK8SxnZF7R9h5RrmpFTQHHMvSpWwatzG9sp4HPrd6pA8oY6z3PHMG4XVBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3hgeFekCrxvk1VfXXL4LtXr8evMjPnyuTzf2Fhsaj4aK73jRVuJv98TCLixKFiFcKM8waaC7Qmq1EfLsbsnoxc",
  "key1": "3vwPdMYZq22LGJxXHrVwBCpYTMu6GoHg7KcK5yBsH7dRzWvKiPD67fuQP5KDkPvhRQpecNdWPwPJNm1Lorh5f6vi",
  "key2": "56XJP2EqKBjgke81SaSAPKairv3BCWZ7hNjAjoMzbtQuxJLehXpcdjGNDDm4RgKPGR34sEqMshahFH374Ap1kmUK",
  "key3": "4jhEVfyzVqdjSbdyPHJUK3cEiFnXCbs736Jng8KjgTG1jhBsNdjmAk3u9DUE6J8pLaVbsVE3CNxrtPL84LqMivQC",
  "key4": "4b9ufBxYfGqsZnsQNK27wiD4jpwdA8pAuu5gR8begyS4GSJbL4cbRHWQZnFyZE17LhE7mf6GfQdKnSoEJrH8Eb5k",
  "key5": "5aKQk7rS5mttikkKes34Gx4mCQRfVdJVX5vkzrgj8ptYSg8iUEPRip4Jth71tJtmLC3kjDuj9ofpVhwBrreJ423L",
  "key6": "2MAoNBLzzd1pzKvdNwdzuDkDzJsygGTS397o2FPU4qcS6TceQKBNFWVpKknNPGGJR9zEAW4xM2TpU62KbWY9iJCk",
  "key7": "2pPsy7G7TnVbyhjsVmzLA6UZ8vRCts4VFw7sctUXAejTZmcCnWavhVpgQ7mwuK54VzkmKKysWAwZMzqfN5Du3ytB",
  "key8": "iSUhNukJVkXyZ4ZNqp36K4PNj3EMtMC56cgPiGP29UVAhVMRBVHbSg5zxeuy1nSCBZV3CiUHVJ9o3QyUhmgtQx7",
  "key9": "388jsAmytAMuo5kYE25dUcUHk6N6zyAfAdDartUGA2cwyytPbceaXEN7fSAr3FwVE4LQCsZ4Aot8wcgw7AoAjUMy",
  "key10": "2ifk1QkabTieYADSo4bKC2MdrAjEfRKQg7yTLjAnaCgKFs7ZiEWkP227kgrVA368u6cuYbreenADQxewQ7y4Yrb7",
  "key11": "vqzTYCRVMPRaYSebugFZp7zcw4hkyo1pEpmEqVGGAphXg7mxpSwPndBn9rP1b4BJWevyv91XNCwvGLCNcHdMg8r",
  "key12": "3DS8qo4oi1TRDzAv9nNzH3WHCCk61c7AyUGMThNvwyqAyksPtJ7rs3uP6h9YBXNJbLy5w2ukGKm5fZDi1h939mj2",
  "key13": "3QedvtgEnwuSWixoiGVr7HP3KfHhCHHkHsTGHxWSd26Uc3qqTs6FvvvupELytUruGoiuqBnwVMbRyPhSqFoWDGPT",
  "key14": "3LVZmrR9yjwDLusQC1h8gjadXCEGjFBDpUDD9KuWcx96Lx7A5epGjXUPB2BQepKkbSfzVhWUsQNM8skSAbruL8N2",
  "key15": "5sdWukdFVCxWjQmJcXdwKxWE5qdCnAfENfZy6no4YwqP1EsEtnP3ULYBS7v9sjLvcrAuotp9WEz7Na2siWUThB8H",
  "key16": "i2NSELhd5bUzH2wVz9MmBf7X4ggcaNceFriGKMLrWsRR985VYNzsYCKSCAyeds6ts8Xc9VDXLBdfiY1uYVFDYDS",
  "key17": "4VKMN8BhUQQUM7wkhTJUEQtJ7osx2QCeJ545h66p1qbA3eMR3BvSGNyhYwh81h2bsJrMWVS2N573KdC8XWdAyw9e",
  "key18": "2H31aUuW5rEWFdo8JcwJDa59fEj23p859nE6hjLoaSSAT8b27vfusysexd8trS1MMFpe7fZet5JLwN5Gxa6iUzag",
  "key19": "4PEb146dyQV2egmg1Nvar6dQpSBbD2QEsHCZ4xYgfYpK9WqdSZD2aqDuJZtWuYKgQEE66PxfY6WAdoPxAEukBQo",
  "key20": "3zm6cWXk6AqYrpEsft6oJGAGD8omUXXkjTbUE7eW6Sr8SGBXrht1RHdiFFmQbXWhtRMXuVeM65aNE9FidWbEc1e",
  "key21": "5HYCakg6aWNqFYHgurXueuaRQmEJMUtdPRmdQsdzwi76vpeNumLbMe9d9hVbwcdzhJLCPPYc8DR6USLoLDJ61xBv",
  "key22": "5VsN9XVoHou4uFfSz6xphYqq96AiupM2DVVuHQngmk8ncJgfJ3doNj5vyM2ciAvUUTM5avHUYEg4nx6zbEQXhNFw",
  "key23": "5EahXLtcGKQr4APGfsduGgzyo124QYGyjxM8tTfqTrgbByNdKFN1hC7kMR51Vr19pf27SJrh6NitTEbo15rAUeTr",
  "key24": "2LEppsoUzJ1omaujPt3xYHgua3bGraycXkV5HYJF1cBvwNKSfAoqDinSUefMBiE9K5ZqLxA21xD3vAwyaCEnLRHb",
  "key25": "5zEaouLhpktjW4y3xhDXEBNsGXVdwKPPrRErk2Si2eoGbnhkCTW3PSGCpmHoicshiD9Gn4dp7Dp69eMQyTZkVyUj",
  "key26": "W2m5sm29fgsHpPGeUCtsTQTdpytoPfckd4gtwbUBJ88V8qCxmCkmcck1Z3cMf7U3fTXXRgmVYmEPVmJ4NMYrAYE",
  "key27": "5ALn5zfCGev939p6NT2QMDZyQ4LMme2Bee1gf9wWCcuGG72Tk8gfmHWvV1hzYQJMee7Z2dXxfocgJgXcnjeURm5o",
  "key28": "4udr18ezxnL186SeU68ddUN7bWnTtABGX5CgFvnrNc7XV2uC5yAgzQNZJG5KKNQdKNNUuJqH14JfGpz8khwP5Hti",
  "key29": "3LShBDSjzqeUQgUyzyP9nB5nBTfdqemn299s1nwkNmHf16ki8MU9X8nXnAGGJMBePWqXXUbsNPpey5to8Le6T9Wy",
  "key30": "MMbxzdo1wGAgNVsMXXqpByLrfFUCTVvYtDk6ETzojUATe2jakVhxrbeKEheAAQERoPuhZx4n7FCgPnxaSsZrhpS",
  "key31": "3ZPkWUo5VqoznYYuR9nAi6dKf6NAWMBY5Ma2SfgYerD7ABnZhPbpQghKPPoN1anJog4rSVcr1usPLxoW7MGVndq5",
  "key32": "5YY4YcAnX7S6kYfAXVb7AoCVfpwmBXUsrpdVu2fSqhy3KfGjCYZUag9cSEzAYidjDmCQJk8CpN41vDSd8dn1Cn1s",
  "key33": "4zzQy3dSuXpBm7ZmRD25uqnJvQc85MPJ2zzAQPV8ADBUSTyJEBmBVoHBo6NsTqsbp74PqxZxGjrzGD32cRFHBbmc",
  "key34": "5tmQDuE5mggJ87JpmBrwDTadNcWMk61upyM15MMhAWh1FYUivPUqXsKGWKP82xWbhkyBzzjubyeAKdTCQ7bE3Hpa",
  "key35": "5xyoTWvWcwzED61xsLD8F6XHKoahDEifRqWEND7XqsqkEG3md5H4h4VA96XFuC7SFCQ4WKo5FVjyRnP1YMCm7mLP",
  "key36": "3o9Za3TaVhWJqH7c5sAtSKD91outc2cHydxr4saNku2Wy7zqqqv4hGZLKhR2iYoPchja4dp7TnsNNSMn4iNu1FuH",
  "key37": "2MfbbBBcesqte24T98uNsbUsvbpCwxpYPTw6EWSwN7ZuZAv73tzo83DoXFhyTXpWkq7rjQzwuuSaRZN3ZgwFS5KK",
  "key38": "2tCdvjuMd2Y9hjpuBBx9JZ1bH81DDtJHAzjHsiCY1Ecad4U6rFfmHVgzPXThAVf6bEkdPEYFUbvgVbLGoDHhXcxy",
  "key39": "44WzFheFSYTzQH85XWmosfDzbRiV9suwV9NPu27jU1C4jbLzrz85pFbWWxKCLnJPMvqGjRGetRdpgFKEPUBALdjP",
  "key40": "4dCXjsbN2sBLWCG7aazWRj2D7LdWtjG28BsaXu4D4GcjKoQNC9XYmrnnjUY6Yop3LhauhHG7sTgNzhjRb6yHCa3z",
  "key41": "5juKsTBoFZMkQENHrZkcccgiq7SDyReUr5h2nigseoYNeWGje6kbzRhUaHmSpNBuUv4r8ik1iFmoTS3pHS1bkC1m",
  "key42": "XKxNKnNZZApxubJazbn5YXXv5sA7rajn4mB5HXcBwbsTjjk6fqeuS9oPAedv1ZNviBXAUGNHA7nMzszXHwZmUPL",
  "key43": "34Hod17FaWzdhT57WkF31AW6nfsKgeFxAAjPh2eZET73iYfUsv4PgJVXbuFUDLhcMyHV9WTXFAW7xqM7ELAyiDGN",
  "key44": "5ZSbAMse4QMjyfmkxB1T4JaUA3aAGnpfMrLWaxHmZmoAXYG1KDvmtLsGCAiw6x2DnzhmfreYsraxYG7g23bCwMJW",
  "key45": "XWv8nqfjkr4sqDKQgRB6iPC4eNMrhbv9DTB5gTTaqTVKPkoQvWhb95NfgieHr1R43rNdGuFSPRr5cERjN6p29cC",
  "key46": "2qbp7vDbsrvuengpwMdzhoLrD1S1Nb5x7PqxbUTs5PqJPwWYH4iWoHJ3k2vCavo29yf4qXLFNMoY3ABRjbThEwqH"
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
