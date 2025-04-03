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
    "5jXVGFHTmBCS8rqWHst5kStA6H3Do7Gd6yVXDpQDsfKwsHDKkk1zWxrTL7MySciaEh8UqCCjxPRsy4PtVb1f7fwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvCjs8JeApPwh1mYrWWQE6wk47CdzBZj3j1923AyPQAv8hMgxE1wrN59P2p4dATTY7LUmxvn3b5wPAtBScmA46y",
  "key1": "2iiiuPEwnkhEFypXfPRchib3tMA1AAs4zk125NkbzRarL9f9wdrEQAcPQeJ12cuM73WWBeGz1PH8r46HkDcCzrQ1",
  "key2": "2q91GvdA8s8r1QwtrdUWaRo8ignqdrejom9uDa8HXZDdNHzUVZpxjTUytxFYB8MNJPRtyFCxaXoZLXuf6Ss1fmVs",
  "key3": "2DRZ5hLf4ogjpWEYzkkW8wz9atPLxck98mQvZPtbSy3o7B825DEC7qFYjAvmvfYu8mKzBzwx5GWSNatxqLZXhiwZ",
  "key4": "2uVei9xYcAEJi19jCZvjTKLH2cx1NwoJVXTrvJJxmkLJXad1kFwCcbrG8TXnTHs6EYAcMeNqTSvrAd9bjc7cXBA5",
  "key5": "27LsNCZNoPMZL2B6cjiiXBUS8oUmaVZv3Azch2h1uJdkpfC8Qg7SZLW5eF14GzcpAZuDAQBrDpfr4adDUeffAzyP",
  "key6": "Hh3PDfedZcesvXP3CBhTgguupUhDRAHy1zXY4DjhmGyokQ2ymeh5EPEkdqY2NL9pM7kR5c1pwxac6AdtZx73mvc",
  "key7": "5mJUHByvGVCeNmQNzwAphhFHi4BmjW2S4KpE3XKrd76CLdJ5mhVBSSPiyQHMkXfMudP5WuRKVjRGny9oBjK5AUiP",
  "key8": "godu9Ya4L1aVXhomYWApZ23ZWznz6uiV9b7gSoRyFkRDVMNjAeVMmMzQWUm1mbzQV3y2rLjLtxD7xRfCr9FLaou",
  "key9": "ePWgNYB8HNyUEJNUyHAF46zBSUgR969sF85uDUTHYqEQKfUD23pCwDuLoNDSfMBWyH8PCFLxQqCQRTfZVC9NasN",
  "key10": "2EhasYp7r1EZfLEQdGmsLpDmg7hYajyt9N4Nn9GDokV4Lx5Xxsr6JQtchTP1e48evodrFijrqzcBDmiHW5Reg51W",
  "key11": "376FFDRCDn7ceoCbtBRU7kou5s3bgbNCfLyfgisML2HAQs2pJ7M4LMYRqmuYGpwMKL58YQ8H4A2ZWPyyTuEfZRam",
  "key12": "41aTHSHVZoZeM2sD1SwpFWTYRR5nhPWhX7qDGTVS3vxSKfMYL5uRce4FFFayojorLBim9iqWKPLXuxYE55KsQ7ZA",
  "key13": "2Aw1YHn9sHfWBk2JzYfZiZWg7LoU1aSGm57qWF7YgbkXQLnBXqmU2kRQqM9vCvthJsVBrcWPUDQ6JuMBKwLmyJtW",
  "key14": "MyttVopQEc5NbYcjrL77syh5KMpLNAQjWvDkBqZTvDofGpN4SY9hqLUWTzLGsDTAXgtwZUtU41KnAddL3mjqkpE",
  "key15": "22QQLeSKJk85cM2WfW8Rtgbai1EW4hhrYhk6tEoRveBTUHaMM4EvyJrT6ToDar3NahAVxu5nnUrtWnLQaYZYQ1Uy",
  "key16": "3E9zKer9G9QndXaxSsDvh1bG4Nz2WRzmNDPr7nYTekvCqe6twVWGw6U5AEwTsS95ekuNmFfdApBiL4t3e2CLvHMj",
  "key17": "4N53iqZnacUgm4HbXhMqJSvRVaxifBdkFfT4hbFEeY7nzaP6mR5qhi9F6yAfU3ztwrBESppvF3ex1tzRwAKvg3XZ",
  "key18": "5aFQrz2aMqej5u7dRysFs5uuoSMYrsGK4Mu9ZMRk91exh6d2oeBg7RQ6QQ1t7Bezqjq3Bx95esG9oGwsQsvQc4y4",
  "key19": "4c196imQeCjmWYkHSmfrcv8uULtBote9REAQDGKpRgeKtU1KZUB7GmFMvhcjejsucopzSLzzimW8R7MNp1vBJeEv",
  "key20": "5iZeY4AJwVrfX7CN2Ef9um7Nt6D8uWcRLUvQH3gv7UVV8cfSfi953ThRQuvcKhuJ9kd2DpxeavMTEQzHGc5K7M2N",
  "key21": "4FiQUDrZ8LQo3m89eBWHS7cegFr2Sejt6RUWwt94eaLkFx2z83YhAkXAmsgHvcJ7CbjzJcr9NRQFEvGh1H7p28Gv",
  "key22": "3WctEFBZGJvxFhZzXJL3gWQkzxR6LnBGnkHLYETZVvDP6TqgDCtVJn6o8eSNj2ydc54tG2v5SQmAy2QhyR5Gf2Qi",
  "key23": "2NhwQJNv3JceQQ9LLwe1XAFdRhAPEkePAL6mVHvo3j6dRrZGWjxWMkj5otxJQusZL9xpPk3zsCrUKry1LXX2TDvU",
  "key24": "4AEx3phwWFFcnJR2uBJ51c6tSwKDrVpnXAajqdRMaJGQuZ71Tadyc72FtjCvjzMJx2Qu4MZa6KPrdykZNaneZnRp",
  "key25": "314nnWcpLySruD7i9npmrNxnaysKvEHyCE9NuTHXQv4LtoKYU5wN5Wsf8DahKh829nC7wL9SZQSJ5ufDkphUSR8p",
  "key26": "3spcHc2GACpzxfrNSmWS8DxzhkWF8TFiZw6bf9zbeioHXf6NxgUjcncUHCyjKjetvPuBK6pGFK541155DCGWSEN6",
  "key27": "2QYLzwsiUzoCnu9QFaZmVk28YcqgvUASsed1oZTGxispYdvkGZK9kEsVAwGrXEcxFZyTrZcdmby7CTmfQASaGkpH",
  "key28": "5JoEFrGnu9CS2PXVJhfgzafqAsjZkid16bcaT2vrnMwpoYir7cKk2UjGZWrHn6Fp5rCQkQ94ffJEvTFd4pScKXze",
  "key29": "4dp9k57xHriTrY8tjrBjVoCr9GKYPBMD9wABv1Lu9ahM3PZF2bqitAyaL8EVBiRU2296NqBdwYp5ZxMHnPmZNnUs",
  "key30": "3rpdUhDEqkcofLvsYKUVejzi3UmsCnAoSyVHNhBKxsJVZ8g67vaMTcMstRYqAa4TTj4G4rRid1jF3Ezs6HQNbZaM",
  "key31": "2MvZzPgFGJD5qKdUZZrE9K3NtarJUYZjfTXrKDcpXjAPM7e76HjAo98hth8Zys2EPBmJbhWVbP96HqXvdhSsMM9Q",
  "key32": "jm9BF6zLwtLSJ6oyuF6ywo7dgWw5XkJgs5VLCj6VDbWhy2WAcvRuSWFtp9w5Jnywcg2tLcHGdoZYeBLntAuEVFe",
  "key33": "45qKuHQkkr9YgnWmEjrNUSdpbcF3kpVWcAEKrVMvukxfHvEt3pQBDHPSujpQ68o7Z5Y2NpFpo6EFytrkjYorcte8",
  "key34": "4vUEec47cfGoRhCFhqr7anhQjjDmdeU8tgsyvtRhB2wy4C1tMQGYBeYBsMfherBgswg92FfxXkDPZe4hDcSxxopW",
  "key35": "3fac1UYMyCXS21G2z1KWTZsT81Ys7by7cKzESconurcDnm8cTobpWt6UrxeixwdTts315KQcKhVW7JcvuHQZTXmv",
  "key36": "4xSt5FygNunVBcikkzKs5PynHxRw5QXWhCkWYqJBo4gQaFkkGHqHkmMcsGfTmqbvYfsA7FRHm9YtH8D7FCesqRXB",
  "key37": "2QMuhiV2SEcj6oGUTVRGGRj4FYwRiKbXQvDXZZJcmC67pURL5yo14qHrH37ynNSSEJziAgaHmroyWr1XBiyZV18W",
  "key38": "4QUJRiduFknnQ2a1aW6M8E5z6qSArzGX4bLgPbvUq2RpvtVkyVGwauuUTMUHxPp8zRe3V4vd1TsMYxyPaidvSjWn",
  "key39": "5XobZP2gCtsdnKPDcgbDEggaPptAAv2cyGVsWhmBWiL49kG6MQma2PC4kEg2HGsN3oorDmzNbiAsUFTjjbjHj4wV",
  "key40": "4dhyGKTT5MR9rCq59Z47mfLFXo9gKU4u6rRcyae1pdMjKR7NBqD4i5fvy7kLyPYx58o3YZJMiLgkjZaNgkttq2T1",
  "key41": "3SsU5w9q2pT3NEBBPN9nwcihQzz2Rq8HiyXfQr3Bozktxwin3CLMPBxSTzaTyDqCU7FGqW25ugyigVHQZPCdCHwg",
  "key42": "4yewodUhtNhkRUSZdGKoZ8JFuLXTDfCFEQ3R5YegvMsFmwHXTsEeTJnZewby2zxGVTCW6rvur7c4nXhewBGg1DY4",
  "key43": "hd3s21U4g4TbBosnA9Drt5sNk3rjqPosFhy9VM3qnxfsCDFF4HdEaaYvLhqvmCFoBzvJk8sG5XYDUC9neLQ76kk",
  "key44": "22UEZW5xsLK17f9MDLe34EXv31tQ2jyLstVxXBd1QAM2gbYkaDFkd8BXQX2KsxUqoBhbYWrJG1Qn9i63MR6ka7aQ",
  "key45": "1tVhnJhpGo1MsWSjYLyEt557XFYTVXqmvS8yGZfdUz5YLf3HRNCzU3672udS5j7pKv1baNK9X6HfAVpyDdHi25h",
  "key46": "PpnRVRZtZWukoVXpXgWMbYa43F7FVJ198bn3WEBmtEdKYt71F4K3ooEXVxsXzpdFdNP17BUeyfxtpwNDqW5KD9M"
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
