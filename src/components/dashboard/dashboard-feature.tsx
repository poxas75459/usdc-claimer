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
    "3V1tGqsUeXdvSquuD3XRabNj6JkM1AAGLtwU5A2xZ5WJ1YsFGPZv4zx8CUaeh6ZQEH8NUiDG8XRhq2CErDTQV4Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdtkWvzecjpH8wML7B8si6CapJ1VKY6G49oeq7HPWeJD4sE5h1NU9BSzfuoVftwJH1C55kpnhak3JoN6Dwd8s5g",
  "key1": "fcEbSCG3VTc4qp7YNUTD6BQwihrpATUpK8hy8oSZBMvnvVwkF1gescUgYMk5maYhnc476N9HRfxPSMhycxqKVy1",
  "key2": "2NqucVAja3vn4SmYzSF2ZAacLMr9YUCsh5jhCdjDsuG1J32rnKEkHH5SJotV5R5bfDBGTxkvvnRptBpzyQPavJoz",
  "key3": "4q5MDW1Ehf3Sq7wxcCP4UZXnDwdrdHHM3pddZgcvLfLMPcDtgchFGu7jpGffdzGTQxZPYoNFKVBbKAHJp578N1Fy",
  "key4": "E5gQL1Fnx7rXZAdVBSfiHvZh7MeMosLt6i3YZdu2iQSfBpTCdYSZXyAdmbjjyoMhfoWLZHvpA7F7BdYD5XKuFvb",
  "key5": "MsR3MNjf8fDC4Gk6yhKEYJLFWgDPVdVpcKeH5VegmURXRMpM6kr2gwxiexNERoEtKnPswTf2uqccp7VABJ9gqem",
  "key6": "28c1Xin6383ZfEnFuHek59aKt1BK2LCSz3jzu7qPSTYRTjxFGSNmCtAEAL7YESyjQQJpMH4pNyiH8wnek8TcXP6t",
  "key7": "5Nb8oxMaWD7dTM4DHy8YGrPmxdgLgWXWETAxyzuyTi6w5WGuXAbkDT3ELmvtrH7RteETtbzgUwWox7zBtZtjtsN8",
  "key8": "3w3aQ2pQL7CimbXzyPrmimyqGxzdtwLpjWUTCwu7WiCxMcKFSY3bFVcuAuRHiirpVxsrhmFeCirZPKvSptL3KkZG",
  "key9": "4LAWFjGrkkzfPtGfuZrbr4kxq41WwVqdKnW1x4UYbLzVK18ogYyqRMbjjL7k2Pgz4abqubHWYxNesfCnEFbSPiRp",
  "key10": "2KPG3AFMTesTPwu6eNXZYRNCkUgRQ6bSUNjYkBi8gQcTtKY3Lyy3fPDuFWZ6k2oNPWZ8CmqbPG7j6i9LfhhptPAF",
  "key11": "2GDP2rshLokTsCNf5gFj7VRWc2aoqRcVYdorGifbycrhRnFmYiWVCZxG5aphWe5SYvTbFKAemF3mdRh888K5WaLh",
  "key12": "kgybzjLHJUnAmCrwDHtkFgfh62zvxnFXwRs9k6wH8oeYgSEMS4Huy8qbxW71bd4PptsTJG7bHG8FSXdfHCiLtka",
  "key13": "2F3uad2x11FNxiHdtVbKezXNFzfxLoEV8WFU179ZxMzWkdydJiRDnSpfpsEi8eyneormK6i4c72AAsZtmFTdfaYV",
  "key14": "2BibkUdLA76ytYfPnU96MBq81x6LLE5tNTsKmjtYuAQkXamq1UH7ZJYvqKux3wmxvAa31FpdULD2s5JVjC575Cgk",
  "key15": "3KuN1Bv5yDzAbzgdQ7csNqZCaJd4SZjVoxugH9axqHTnAVLB7W1uGyfrqdLK4REavprY73hjQEMx9uRm7FxesuZG",
  "key16": "5gS83gYSUxf5gSSSRP7Cqw4n6bzihA1wXkoR4GFxmxdA9Cd1Exy9Kf2J5gwr6z6B2pNFQtn4weFNQqEkJUpEX3cq",
  "key17": "5jrTQ7vfqVo54jXbnQgS1HUKYkZCq16bFZ3XQACRpxe5G2nwYigeRvLRsT5AnEfXhGR3EuKBnd1NkforK7AxEWVb",
  "key18": "56U1siuhpAm9iouyA318FaUQ7ud6kNhaC4gq4WNh9MBV7ikegEmtMWSfJCda8hpWvAk3PDmPbjP5vH5XEeVQvQoM",
  "key19": "5nUyrENWEcGm72ZE6Aw5byVEEGwYPDb9bJR6JpUZzgNYSXbQM8riDVVSKwhNUwRj48xzJpNitYB59GWRkV5euu3n",
  "key20": "bQJRryxfUX1t4hhuTvps9Z8unFYLxYXxrANCwUh6YxuWR2AGU75EqFqKDGwFJ6NqL7Ui58us7sAVoCbxrjLNyWP",
  "key21": "2f5VbMsansh8xp47PR5jXzr7tLuXf9GoPrnNdqRRB8W3DwdNn17Qu1Q6LFyiQM84yg4xFGWzoM5EHAkLuqsXrpDr",
  "key22": "4xJZzEthiaVPanFTb71i5PyqTsmbJLUikdEBf1cz6S16aRtBDmWXgAsQ8vovgDYcUMGRJv4synFTdpDfx4HaQYjY",
  "key23": "5AVV99nxh15gZg5JuAbeadvArEBB1RxL3U2D9kPhY1wAD8t6GyH7XpjSdng5syX8AGPCgjYpzVNXSrAkY7tG1THD",
  "key24": "4JLpE1Eh7b9S5UvQsc8dpRfkfZpkmxHB2ZcwUPhS7VQxSVCaboCyXirru5bg32TVNeZ46Q3rb4GttYXUXMSYiCra",
  "key25": "3tZHVqanqHHCYCRy6iPhPjbaMEAPLuorMe5Fq2JhMiN8KbYgeQAGvxAZtn7E2h5bFfVpnXxwxJGbeDPzQuWHorof",
  "key26": "518TcxLq8kcw6zqADex3iJ7UJzTS3FjtcZXtNnnipUp4wF8keMKgoHMzcogS1se4fZ8AbcLN9rPLbEcaTfEnmFHK",
  "key27": "3VduB8rLSxWkUY3sj7zjC3LwVpKLdhr5VZrWLM78pKAaUhzpeYQbdVrx8Bpyf1UumwojKcQSDYtmLRJ91gV9qUeb",
  "key28": "5YFtuQcnxexJ6Hkwgz3DsVdRVjj1rPeML2vWMFnYq5qsFs8eeyN9DWrN3ZMm9yWAtzoDGerArHCLnBAhw5PBBDr9",
  "key29": "5mr388WyGEBzaBpAQzRqAuEikvQdHrZxaZUr5FmpQJCr2hxYhwfBbMTx739Vie9eXnSkParq8MhAP2QGRUGrSgG5",
  "key30": "9EAsrsLZq92dt55YwidDh8qTkfoCw4MKNSPxguLQMLVPgitFLhY4s8zyV6L3TSpez2LHutwDAtcbB4VfsN7PQ69",
  "key31": "5uaP1Gnt835insAgjERWAxTTGY2iEqpULhbvS9c2BZLfqTLKtboCi3LGEyFrL12gzDTYykX2nGruBFwRKMpTiyao",
  "key32": "4CR6wComzACJKQWDyBB6Xy5vcJxMxN3c7Xm2CbvWhKLStZ9RcJqZQjN8HGSG4DNwvMvWi2Ayg1w8GnaSFV3p75eP",
  "key33": "5CdWN9oRncYNJMVzAMTMUhVWfZGJNTrpJ9cHykVMPRcyJT4RTayTAa3cWEfrcFMeVmvBN2EmREd2wUmPPPK8GX8C",
  "key34": "rZAwdkT5ZU67iWfy1orGGtLZp8PMDc496yUnUkCYQLxRNHCHrfFJo6MEHUhggTAVsMTHasqW2PiJJRVhviUs9Fy",
  "key35": "ertWVbnjxdFzfYUHp4WdvbuaPu1To7wkaEi825XbCgR6Are2pfiFMEQ6nfHgU7uP3cqudzPBpz7PotinEtXHTZF",
  "key36": "2i5ujyuw9DUHXFGjy7nmvqQo5X1WWyYcFzwFXeAvjVNNji34JZy6MSe2zanbiFQx7eme8fmGUes17gy8bEHtqLhX",
  "key37": "2HxfCqvttiFM7nvw4j1Bu76PfJS1fMJgMCWAyyZP8y9Mb4ktHhaRU7zNDZxPWNCGLqkfuEQERhCzMSPqNgax7unn",
  "key38": "2dd1N4ebv8Su3mCUEU5kP8U6Q1kjsuCJXyQrprvTEHo99V2rVzKWQKH8Nv5Hx1VaqJFizseRXy7t4DYzdKwGpDiH",
  "key39": "2YafuVSrMP7cCN7wdekVFhw3rBDtp1nVn1CZEqRo7FSyqMjv6DDvPFqG8amxQL9fAQUSvqUbAuMsxdFa6JEuZfaB",
  "key40": "5jU2fhGmgVexrfdh5fmRo4RikfyCAvCTuT1fwid2Goad4U9GXjpUrcJYbn4rRkb4uMvdgXmr9UdUrN1jAadZAiVu",
  "key41": "3nowf9xnkjjjiPQRbYbcGFfLyofhNxez9nue7JZf5E3rBtqahUJqouULm4Sr9NpGVdGRZpcdo2WG3fS3e4rcqHqE",
  "key42": "2pcvbCYsS5GC3xr5RBc4WcLXDYoADnzngpA8C8qVLZ7zgFHjATvxSmfo6iJx7kz3xrSGnE3eTAt8bjirgZ3dprDb",
  "key43": "gfNgwunjP47Kn3cqMe74KSHy2XdDy7ix9pB49TfNAMFaDR3QRuTXaTaKYW3n9qjHy6FvPo9DBr3ZRqa5tok1NmT",
  "key44": "2aSEiLJmD5PjUkVrQKu6XpbbfLAcZprXbCjywJPjfyeR12Aifk6RjmLZnnqjoodHjRjeoKHwouvJevHaTP5hr5q",
  "key45": "3Qd8vnLUdj7HRFGhgqibPiwSN2hSo6kYYsNhevB5Dj5dYHdaxSWd7WCoa4soGGqK7LrG9g2PdGrAnA52boWoGCeQ",
  "key46": "ozC4fe1rHPtGq4pZHc7QEonHDgVBQW65e4ayLo4MjZDWGnMmEEpKcjc4nfyNJgdBPPgtbZyuvj8PxfG2JAhgPFA",
  "key47": "2WczcFiL9M5wQ2YvjeT67xeno9JstVLUB8PV1C9cZ1bhLT95n9UQTsDRLyYG1W72jjFAm8whYY37ntB2kedE6M7t",
  "key48": "4NGujuCwSMD7Se68HM5CLSkhJTLxG2zKC9hqdVyTjPrTQPvX4eA26Juvxv5nxsfp1UA4DRz5vzF1jMKyEuermDPF"
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
