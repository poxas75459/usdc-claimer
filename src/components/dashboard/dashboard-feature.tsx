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
    "2ibYmjJGidcM2sSgUfogi3qevzsApiizJHAuGEm4tArX4J169fd36cp9hbDsu3j1MvCcvnuW3Bb8DN55if11zKbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4ZRikYE7DEpFsbXozZx1rxJDc4SRaKhvKqHdaeM5JCVxx4HxEbWC4cHnYmZQ5VLwJpysosqMQhLwzycVNxwT9Y",
  "key1": "2R36f8q6ThzLxyz2Yh4hMQwMg67GShDHK6L4CCahETnKvxdZvCDW8dbbKcqbqVHj8aYbsSfsKm9WzUR6PcSavQ4Y",
  "key2": "5fMVw2ddrDDs2i8wEVBuHehsj64GeLzxLwJV8oMdsXpHwF2UwpfTyuVbGzfV2hJiRkYPA1do1DAcLxaQAc4GaG24",
  "key3": "5FpiHt3DzGE8uCPes2vJkNFoHtKfLybYcM8H9VJbxwnr4Quy4KUGoU5aihczVmV6Ms71FvnsjzN66DgkBHayFh51",
  "key4": "2LUVvwE6geRPB9hAX8hmaQb3C9tuuVoweSEYkcF15qwjd8TKitCTUPEVmWPFeFm4FNNU7kgRMDvPebx8nMP65AKe",
  "key5": "4CAocuLDXepsvxtwv8TerTamZyFesVv94LNkPTuWPcabPC7vYcagmNif6miGWe5YimjZ2ZHSMJXAve7nt91atdfK",
  "key6": "21ZgSLpS7f3QXGgnqAM3sdZ2W3fa3xZ2PMHjxrb7Y2zX7wRM7DMbwmjD8b9frPF8MmLN9KsmEipusPbDu1rNWhvH",
  "key7": "64sw8VVV4YQ9Rz7yviZtaCtHMQDdJxCaFDZ1wB8SSYFopTmjDr7YfM9Vq9vdNZkp2yqBLHc6gQEtCNqcS6HTFyG5",
  "key8": "2gBVMgbnLQF9iENGqDYy1aZWwRrdQuwjz84DfihYCbaWaeMLcRx62havRzvDwBdBGgSKWpmLBVbxatHFhn85ueE2",
  "key9": "YqBnW3ncgZss9GaQL3rV5MTLzjAL2jbAskEgV4wLDbuCYmDB2Yuv2tMJEr1jqxwytsehzV3GUjc2e7Qzzfc7h8y",
  "key10": "4K2GL4kd4CpKdCmMttivFuoe6oik3ARoND25Hr99WchyYeR3fnsEA3yLbCZWmYugnqWFKdC265okBbXnyjjuYkcC",
  "key11": "42QTg6V9pWCLpqxm41RSX5xVTmkW1h8DYjUmzycmZtF6EGr1ftVgsZvuQQgf2JmgU9PuVxVHj6wSzZV5Bn3KHhXy",
  "key12": "2C7u9KbcBqJTFfWpHdYt3gvK7bwV2D7g7HYEPhwyC9A5zcLB9SAgEJ6VNRPDrJKgjjfevPFor7m3wTuYLTfpvecR",
  "key13": "V9KxzEMyyNsgj2QjH6jaP3uuLM4rA5Q4KZfsTiotuDj5XTKiVBuNdCwxwEsNNKYgeCYc2LHaPJdRLiE9Y6fv4Cb",
  "key14": "x57b98oP4XycSLHVY2FXnZKVtF4Ag2esCgm6z1Vr4qA8ceNMJtWxx27wuJArMZtz5RGusWHXqByJRs3SMBA48yU",
  "key15": "3omFxhTQN4HbsZ3z5KKL2xJyepA4ZZGbu9ks3prYAs3FLmpmx2gVpeZYkN9iwvbfuFY2GnNeqx8X1F9nh1bRQd7e",
  "key16": "2c99PurMCWu41upHTJd6hgNkNSsi4Ph4dEdQbwiWnMTjkwp7fKf8vvPNYrMWbrbQdm8wmYMKuETAkNi1zDoxD2si",
  "key17": "49j8vFK5cVNtZxHDxWV1tLmLvSko7qM5yrZn5F21vJYNWf5gBHvrfHXURzNuMesQtnAwKbDDk51U4W8C1RXdTyLJ",
  "key18": "bkjCAhzdL7sJM3Z3CmoEibL8en7CUFcjFXtyewSnrnZmahG3uQisEBp9sv2JrTNSXegorMhTe95sSBgTP8wvWgT",
  "key19": "3BYvTSNSJW3kKx7ex87D5L8Uv575VEgTG4WdfkeCz8RLGgC1AFZTXZZUBE1VckFAUFPQHw9kpojANDYV4d4dCh4D",
  "key20": "3DKXgQhvQ9TVBZHQ3Mk1bxFuPtMYGZkqYAvumTrPPEtE57t167WX6xzuF6759cT5XBhv7iv8mFc4aYH4vNvS7pSc",
  "key21": "2dkkSM3fYcqpXRdEAhbrAougZuAxUkabVUd9SXhDAS6ANjbgW8H5DK47kkYbFNqF7ViioL6cpSe31n74E685ciKX",
  "key22": "5wDKS4DwjyQKtNhqL4dvyxSV9yjCeMpEsackXFcPSCFXyovZXQB8SUBfp4pq2Xgtj5HAgaeNk99zvcJk7JqjVpq7",
  "key23": "5AQEB95HgZNooQu8NgcmvuVYgd6QtfvNrnoeGesonrniRJ6PwGEtUndMM6MXJ4mdih4ckzv6ePUc1bQsY3PUjdKj",
  "key24": "4zy2ScfAkxyXnbNfxRPSpeM1XboRjoxpoDREnUFAtDUHR8NyCtTVPTWbJpH1xmdFbUQcvEAjCKVFyqcCHMXNfbu",
  "key25": "V2b2BWgCWtpUy4fD7HNYVnqkNtY29tuMYGSKBCmpUxy5DGWy6Jcn7Qd65qwSATm8cj1PgyuWP7BHkdug51uJ71y",
  "key26": "2eqVXnayFJ94dsQhdeeSt28u7w3E4aBWFR6miDipCjbmguqKvUV5dgrDrQsKsNZSeTQYmaFqsDqG6w9F83PJXdvD",
  "key27": "M74k9r7PtywUDPjuaowPXL81mEdqhb7SwkmXRiuyULbCv22XwL3zsUH5dXapZQ3cVziGjbh87hoek6kxv27C9ji",
  "key28": "5kwara1NicyYYhGs8M9UfKuj8xVWusFKhW2QQhLHDCdeDo5SrUkZVVXzTqfHp7m68jjZgb45rTkUDUx4CH8CU4GC",
  "key29": "2aA9aYbpxMJbGzjBViQpJ3jiSbXVU4ibn9xjYNEvreR37sz2gVW7s1M3J81ufBaBtf5EtPTg5vfvdhKhQp4vu61e",
  "key30": "4ACoMzYa4ZqF6E5CwQJzaVKpZLcmwxRtUD5vYv335nFJ7dBacs2PuHg7yeWDNSrpyVX8JEaPywJ7i8CL5ZMykwAD",
  "key31": "2914ySgKR6ayo4G8vosKy8zeCAg1KGZt6PFq5LfNrfirYSzqxASSVZzAeNWegERdaMuwUMA56MNPQPwMxW6hneTt",
  "key32": "qZmE8kDeLhTijoQLPiiuwdE1ZD3P298woAoGdLFpRJYyQdVNKRGF7JPkyFyquPxsgcLKmhrFSetKP9WXif29gYK",
  "key33": "39rv1Hny5pfNTWAnkeSkcQgHKAuT6voAR5i1vJTJ4tsK5FE6UKNQgPSJNAtJ2KexcfUNtPpPNkShAnQ2aeVTCnsR",
  "key34": "3KojNNKJ2A9Q4DpQcX6KCisAmPVgLq2XewHNHr4Ni1cuphHYPttQWLa1xyHv4AM2S6GpxGuRA7VZN4D5HSqzfyJ5",
  "key35": "42gFprws5YjfCFvEye2A1nGNxquNircYc3PMx3NaNQjebDCn4buLtqhczRSGiJLiUDs4ndFhLD6dWrCp1yYAgyEv",
  "key36": "4vBqgmXwrrBTbz1gA9AmukuHa7CSS4o6pwAWoezSaog9QWkx5M6ftJHVruUL8dBk81jJ6WqNkYZHNDHbPS6r4SX4",
  "key37": "4cihJVQdAao6dVByizooemDgoP6DgngmZxDyBSRYWD1W4ppKLPiw8xz5iW5GZAt9T5Bo5Ryi1sBMKqwnYpbYHPdc",
  "key38": "35XPuxNqkSzv796iuFMzXskH2E4diEDxkgoB696dFSzGLikdPLPUT8gj9d2tPJnS6nxQpgTXSuR1Jp5TuodeHn7D",
  "key39": "2k3s3WGA1HrfKmkHiY4XFaFkxCHgydmCvAGC1CAtKwsk9pqMPNKsHRTrvcHtkhXeQkcHyKt91RCakzKsNZT9GDkW",
  "key40": "65nRyJF7rK6CLBqcTuRhacA7HN4qbYVWPrn8W6Whnx9owb2AgvnFAtyV199EbUjY1NygLNsi5nysfUdS6szAhm5e",
  "key41": "2DmNZG2ThCD4dKJ7Uts9ez2KSa22DR6qwtctvyftiQ9FRDMD2exzo9MsWeQLLd5QP94GXMdjX111PoCaF2fGjksp",
  "key42": "4ipkZvPqeyRt9p19fkS8ZCBWVsz8V1XG7ZVZNot83sk4h4tSqewxZmBDpy1Mhf8J7ZMfzUiE5dyDkZFpYgkn9yHf",
  "key43": "2zhci6iWZrhMVWusf4fQXxEVsXBPgV8UrNN1eq3nd2XVC6o3zQz3DpukAwQFV1N5sHWidVzUMJ4avACJpMQEm14H",
  "key44": "5Bt6pkhYnF28p6oSsNbmDp1H8BkjBGGjxZwiWQZoJBtTMnCVXSBUUWoK6s7C1c5VFGV5Shgp8GX2ZF4sRUwGAseT",
  "key45": "3pRHp9SrQNKGHFYVSqtQg6FUWgU4hL961N6jpaGP1U5J9gPBsTG4DnUhQS5HiCty6SDu4GEauDSLF4jsKRjU2d6B",
  "key46": "3pU3rwmbB6s1PxSftswRwPR2nY7cai4CRxMqBins3Lctv4jNrfsNJJ85HQxJGPw8gMmR95b2ZhBuSVc5nSi4TDX1",
  "key47": "2v9jjXmFc5yBcwPELeaoHEKwzreoz4UwwjbL5ogCgoRra3nmTgh59kSCWJ8FFYz1px7nqkvme54UCU13TJucy29x",
  "key48": "6nK9f4uDo5q35wGqk3jwPHQ2TJG1qppdnz2adRtmcCgbZBVWjQTN2UUYDxJnGPbRfVDzNnD6x8pB2ZznAoBUjFd",
  "key49": "3Zn1UXzFjnnvQDSH6MEYssGa7dvSiMuWRiEHmmdm1XifhkUQSZ2iza1piQeZJLdvhPBKVFNbBTeMVv1Aj9Sq1hgN"
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
