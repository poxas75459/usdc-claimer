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
    "3C5sgxPUJHYCXe1MkAv6cVGcsJfqebp77LjCUQxaAgLdDKhKN3BZJ1XoZSXUiwhuLSEFrj4Ri8T3RHvgpuE8cYVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACcDuCix4XqUetoKyEMVwdcteiB4gGdJyHdZ1DQba7pEnDwue9Lb8eumr9LRc6Lwy3xUi2wnEiTXDEt4sdEhdNg",
  "key1": "Rmhn2L8gdFdVaHKAfH2jwyKaSepmvrmuyYbfunnJ22GBanL1iS9rno5RfpgXaKAk1sVjwdCuUBFs9d9iggmDEET",
  "key2": "2Ez7GPRrPzTiS916XGDDunBrqJ2iHSCAHbnrUcn6i6EAju6HDX1uhdGzTyoEi3brirGshsXmt5UijWRXVbgYc7Dt",
  "key3": "2BBuXQP9k5TwSwVChZWPFP76y5wKRQUEH73fMAKnZtmAoUTX7oGCiRjabCsdDr333A8j4JDsxfxrydmx6R45rQDv",
  "key4": "479jqexN7LK58mzEzLfdUUdUfcnUxqFzkExP7EB15nhsibaCsUZFUdX7Jpjp5YjVMiyEdi7V2PdCUStq9iFEdaM",
  "key5": "47SVTGMbrF2yPaVEboEX3o9oTgVXd8WYpDMYubNmTN3MrWQFszMtoX5xubtpUVN8SQXBMrb3aPzhxH6LZ3x3n66x",
  "key6": "3GqZ2BvRKKcyzDPRKZrHDJzZL1mRrCYiYNtS8bBJPNATbQpmFGiQZVSEYdmJsfUd2oWE5BincCXnkcjut7qfjVVP",
  "key7": "5j5aTepQaBbz5CYt1f3K9gxDZDPhKz1XaVb4PFWo3N3DL284PCxMMGXmoRduA3w4ZmajbwsviufiGEyyK7bPRdj5",
  "key8": "2Uwc2RJfMZyUCXkoR81Nq6SqdufsWJx6eUQQz46A1599yS87pS5G84JFTijokAqpAuWZFC5CdKdqVdKkb4Web1aW",
  "key9": "KQTWNR7ktgvJzxDfpoNTaS9zQgzpJZUHGf4Vbt9ByocgWJhCGLwTw2mVhV5VciH3F6XwtSJNjKpSpFTPBemcAR2",
  "key10": "2Qm8PiFSyohRnvBP29eFqf4Y9C2keWr5ne7aJKrYQvfNfvjkyPaeaFhJZGvX49pzmfEdg72Qv1my8tVfBCtPXa7Y",
  "key11": "3EcXKrnyQ9G22FDXdSn62RvJ2tMribk3XrVQR4hA63FmAvX2dncX9wgS6XfthFsCN7mRs8ZyzUm9anzkJbnySTPr",
  "key12": "5wDhbDi2vAVhbFswtec3wyvY65cZapRLTpU83TGJC2gGSyHQCzjt1AH8faBQCc1WvKg3x5GSRqGDNyPmRaiv8pEo",
  "key13": "4azk1xaMaFX6zL2HgzwfK8G5smWeUL4bUh4ED1qp7XyNm3wKEVHQyt6a74PT3TU8aFb8GHwLfnPsnkgB558URNV",
  "key14": "2VLquwhLeYbMTLo4srZ9NE3Jhcd9Bd5Bv5hcBEruCiZDSZ3x194bfNFy8gRHuNiAfGBfwFzWTUgwm3YTb6ch3uMd",
  "key15": "2dQHUTvwPEicNRXefxvc9SUYUN2MKB4vCoUYJoigu7XjEogoU3Z8u4E9hQEVXfFo798h2wMTHogmKaZgjbmghVdv",
  "key16": "2ZUnfBej6JR1M258TAkAL89K9C77jAZq15YX1b9wWJeFANXU5bWPtkncAiid1fHrgH8viFYv6Q7Nv8wwQxR5u5eN",
  "key17": "5EpsKXoax9x9xY6VpCXZCQtzyJUQGWxHQECfFLwrC4UDFUoQqeeBDVE5EiRUrMKDkhcSkzAW262Xrh4LU89chpdt",
  "key18": "254ugTRBAvApsYbwj2urpfmS3jG4faTAaHBW5pTsnyPHz5PUmoCsuGZYeqh8VGo9US3NMyHHYnCbMrpSnyh1ymga",
  "key19": "49UT7ydsCuWqVdkqz3GpBEaXVjf2SdxAKYmBuL7vKGtpnzBy9zefmevX5vWZHv5FSvuqXVxPpDQPN4vLQCimYvPt",
  "key20": "2vQrm36hZxw8NdMKV8c1bgES7EiQRdw46w9EwqUEWSmczVgXj7GAceyZcQ7jqGjA2W3PFUsV3cHt4PPWiLZTf5xM",
  "key21": "3gjYFaVwxcE3qa99i7UWVnuGYtS3pGGcgLThvHxqFMm19XGddBpqoXKzW8fZNNrYAYp2z4ayFUgbkso8QHrtHKji",
  "key22": "3MKc7oL7TddKVT9D6ctXEoTZckbWmSdj1jv9WeSnZLRtm85nxjFs9p5GX8yU6KjoGjafsrcWPBbQbt4Bz92oCgnL",
  "key23": "36VoxJGoH6CgRB46TFsgHrr7gXxAc1cuCAFzXmBcHF5wMgCiKU4cZNFiSv3S2ZBsGUd1FQeHUVHbMH6TgktvBQYi",
  "key24": "43GuRzv65A4shv7kUc5WzMM9uxpDKTBehoWYxeT14E9hcVBSzZT9pE5UexaZPX58yxGNp7VFCR6rU3kdxMMhy2J6",
  "key25": "55x5H9E4AFofoNSr2vAkovEGC7T8VZpYzF3khVMczMZww7nxb9rax3fBZwxTfhvbPkgEMezXj4HeqAAkbR9BoouM",
  "key26": "4p3BWdUwnGdSZeLv29mUWDJndkPDEGJ7TaYwzKrNqyVXpZhjaa3CNWYrBZshPZ8BY9LNLiLVw3WeuCCwrW8Wq5VF",
  "key27": "4y9Bmr6ApFFMaKxbQfJLjai4yFzdpE13CfdNzTQ649oi1aCLrTUMpc6haBeJ73LUnNykEaRq28ihTP9ofuApaPcW",
  "key28": "3BXBpSXStEEAkAFXFSTeKM3AtHUUVnW95qostTYV5oNLNgaVyo4geaeUje8UsZ1q53Zdo4uixhPogntKADDz9d2S",
  "key29": "5U2CbvXum3gvoyA619pKR6rQKBFVV36zCiQkmVrG57jpUKzp5ZHn8AVWj4UD82ZVLGdLxLDan9jUMBecXh7iHdNk",
  "key30": "3MvBUnoNwMf9EmSBU9ZoRNE3gNrAxoFb8cUrXPrfFF9PMtujb7WUpQVeFtigCQWSHDc5kZphf64o644xLVjLxjtx",
  "key31": "2b2jshd1bJfKso53EarKX3VFjdP518AePZ1hCw84wm7HLRpZ39nXHuquuwqbuVPiLDjBgt5PGMD2GRdXcrxyMJJY",
  "key32": "521e5nv8XDsznytt6mqvBL46f4BLhYxUW9fD5zXgjKwxtRbNKWBCJwMnmtDQj32Kb7F3HTWdhvmpmE42L5hufVcU",
  "key33": "3E5H6Jo6NA9Y96MpPZ8qhkgPf3pg6vmhgDHzAejE6CXxhBhLJdNxrBAdUfCqQUD5jansAaSqdLxSEZm4NyFmkDDQ",
  "key34": "28hRsQatpXhcZcQ5qQ6RqvP1MjN8ppne76hRw8YbavssieKfsXyeJUfLZUuAKXUfQfJcwkXKcQ6JpgT7cmTG6CBG",
  "key35": "4AovPjZoAF3EhswHwfAUZ4G8u4RW9Yrr79P94hPAUNgydedaKKWvjiXnaNGD1YX8DvKcoMNwprKKqY9WLJitHZB9",
  "key36": "4KcccoZzE3TjSqSEkAoiNi9asiHwXmGaCkw27hEFLZewAg5AiBh2P5ayT2y3EakT6m9RXaZMMtGwqweRFo1hSSTp",
  "key37": "iTofCjn5o9Evu3aYMGwQkVozDDkJ8gcUJ6rdTr63PPFcHmxjHo8DAU1tpjPxsxdDbPCRMZ44wutq3qHADUhEKQB",
  "key38": "5Zt8urh451Ka722L5R3myvmhyce8w4NyTe8vJXbGgR5nBWDYNMJ8qtcL8r98jRNHCdEASTUWZ1t1SDzYuTZ1S4J4",
  "key39": "4pwoV9SPaWG1qN6Zbpp5WLqn2GaNokCxVaErxyzWrazMZRSjXM6kRW4kyrvCHmfbKXicQ2KhX5bJv5aUfS2p757U",
  "key40": "d6mKLaPPU3hKi2YJ5pqZKb4dU8yQ7jvYeCie5MHaMDtbgXA3Fi6ryw27xRSs3aCNVQW7rsng9k1u31fYMxz6Xo3",
  "key41": "4vyU3emGWNKffyRdhGLeWEX8avrYdJQVJmW4B2rUfEigsYXhbyqjLGk7w8HNSaXz7irLupx6pdXsWMUh7Edf5vs2",
  "key42": "ECYCFochdokUH4RbDMWRyPpR8SvBwo3SdFyPiZrpwffiWWdSQhVR6Bv8v2iEDc7zVkvjudUx98RhoA9sbsePVzi",
  "key43": "4qk6z8kVrbLHmatqRdnAq7GK24PUzP3nzynsWk2vL6WiTL9gZuYWpCyYVGjScL13XuPkNvZosDSvd6BaoW5Na3Se",
  "key44": "23Ziio7sBVeT2bkTPUZ6Thrsewd4ybJ3pCNFo8ZwXwbP6eLPTnWW7yXDzVRseoJzsQoiU1pjWMX4Y2d4q6TD5Hwv",
  "key45": "299E53tfR7PUoKxagc5FNJgwFTVLU4y78tCTs1oemksfJCFNBtqyUVjpv1Dywdt1MHnAXDMDoEdJKyVENQo2UayZ",
  "key46": "2eYxt9C6CBPChD3Qxy5S5j5Ez1UjfbLnndwuW4ZaCUtPafHBBYAKkkgixtSjHeinGXHm1xcn9uvBUfJ9aPNmDBUf",
  "key47": "5ggTBvcd42uPEwU5M456c8JJcrkDq67vebLXxBomHtTEY6V2uGF46vCKHFDSV8k8bmdjVTwGCGcXUj79Ag57ScPS",
  "key48": "4oYeM7fHNAeCMFbiLEGPjQitySPhVEr84fpyUXZwNZwopaA3Fm6egSG1frVkDeerNs3G2Lzw21uiji9HB57mgFFB"
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
