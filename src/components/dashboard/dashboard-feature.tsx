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
    "uaYTfQKGEYkRmjAaNzvsZJnPiUoxJzEEeuwe6MkvXCQoKe7WjvXBNC7g4BLSHtDPD8EHfY6rr9rgp8Bna37dRE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9zYJLbZ8wVbGZkzXK94hCxUAEsgBiGCt6ehEVwjHBEAJgQGZ971mNoRHFgwGb718PpuBaSGZPXX1PH3FtMhb2t",
  "key1": "52TgDKFrt5XGH95fs94GURUKczioux3KfZ7d9qVHd4bYqAKZaB63RvFeRaBiPE4qwBFBzhJHunUf8hgsMJL6xaN",
  "key2": "67bv8hh29eMwtj6HCRfMw5WHcV2Waty14tJxrbKZjFrQxK242P7QbRLZfzKbUpYimFKaNbmaJiVPhUC6AQeQ3dZQ",
  "key3": "48ByUpGMfzq6xSSy9Fyrc3tYRQsm9ZsTjyfoufy57GZCyjaDcgR67GGwFVatQmG5newuPgW3UafEr1rPMko1ammT",
  "key4": "3eJ1zwC1oJHPPzNCnbCSKZZPefPoTwJ813qgxacCK4xHU8hvFfoxhe9DBKrjgXxacELbatgbSnwgLopot8Cp5Uvj",
  "key5": "eeDnVtNuXVj4FttMRBQjiHCLHGKNdwqeEKDu1BCRLmGK3N584KT7LcwuKCCeZCrCN24LDDoKtjeSTf8mqTLbwvD",
  "key6": "59dzts3NVhMmc4hPeG28pE9bMPx4Hen36n4hDBSCmvxqw2s2YeoWUwi2N7PLKM3SQ6mr94fg5x5TTVGWjxuHMBHn",
  "key7": "5kZ6JUh54Y9z1RZsBjzDyfiqFkn2crcBQDggqTCboeBRVvEcAECV9pAMXogmryUGr6RM9aUoW9v9quGVTRsWTK5t",
  "key8": "48RbxtUcAGgzVUgWBQTCWcfBkWMBKpBSTow2srkZrrqKa2JKBgjFCy3WT7SdB2U2t5A6bc7uLY3yg8o9hBW26WG8",
  "key9": "4QECA5TiR4Eiwpzv4PxVfXsBg8Yw2BM5aji6YiG9SWxbSFEGUKVQkjqzyUyttSYoqHNPn9xXYsqJZvBL49GAbAhf",
  "key10": "4GScsEBSvkx4z69yoZ2YqWAea29dpwkMXQuFNn4ar514h3R2pw41iC8baMhmZXSGAfrSW3eKS9aMWJ86djgsH7BJ",
  "key11": "4FvNdvzp1jGYSvAKrV1ehg1uuDv1f4fMekCEQ5o5uTaLwK2pb6hMiskmuUMXZxa7GxzsLP5G6d3KRxsLrfiARJaD",
  "key12": "57wSf56TAq9VNEeSPSXanresYcEgqP2ot5YQuHvb6thfmYwEDQWgHKVEvQY4xWsqYqM64RVyB5qiHr6LLMA1pBtb",
  "key13": "4FsUCSoX9Zo2vqYn6GTeB59sZ9TRcdvJkkVZQxq5jL11Y6qWL4tyFE7RmNt1y9LWiCyvaUswq5Lwyor21KGUSQtB",
  "key14": "3P3MwfvqmyszXWKZdPDKA237jhsdbNr71B8NVpcxdvJGGt8oy2nLVmvZ24Xfe3YUxSYN9pwTMhfd1anm2nw7e3s1",
  "key15": "gv6EgDshVBvA6FpckK2wGa71hbKomkCLJtpFEkZMPhpYS2BFxnAFga18inZZKAiWQPpQYRUgRmZiDVWUwr8NEY3",
  "key16": "3T93qyXMZohSJz9SZFfjWWCKhK6Vep66CuL79pumrqA3Kcn4jp6iTNWjxZP89xFEkCL6ArWcyketmZteuUTMP7XN",
  "key17": "4zi8ojkLuWHzDND71KwCR2t2PMbhdf6ojnaoBazc3eEyF3Fiiqyk2ifQkew99tz9j6q7DD5oCkUL9fwaoEVEDDeH",
  "key18": "5GZsD6aJb4nS4AREwjEm3C7jm1z6Xggrwv8B1wcm2K8zBYNjhLcc1jNA3FAsXuj8dSfqRKHcLeVqTShDDSHqqDP8",
  "key19": "3UeGy9a9usTK5gnh1Ar3grBVpd4b4HWYR2yP4rgJTbbSydYf5QaV72vRnPGcxWEvZMDu8EWtnZbGeg2RSww6TJHi",
  "key20": "oSUUd9TBdFZtWo2zGbUfJkn5cNQwmx7oSDz2fbg577FtDQiELVJCca7HywgQJjFGo4sy7eyRtfspRAFYMc6PBgv",
  "key21": "3S1pwrV83AYHis47Gb4QxfQjbvKr2QbEbdbyeFCJ5hCWDdxd2jtBQgr1TCkwsbVRnP4N9wbX5EZR5XuxG4ixHv45",
  "key22": "5h4RjMfEEvdYYjddnhL4L3mS21eZD8vkEZRVcdn2CZn134bTpUMRzjSj2rhg5d1S6fNCa7NVX17yF2QT1f22qZZZ",
  "key23": "3aLGxpY3Q77jDxpj6FBRxCXry9JUKhfqVd3otA3655qoTQd6jFJeFLqyVh9QdJt2593pjkVUC2ZL8qMGX84Bdas2",
  "key24": "3en7iWnPvASj1FxavMCqZiLkxkmyAFdMoYdHbxySAd4BvkkGVBXzj66JjTxp6baXWxCV1HgChJ1tX17d7gUgLJM5",
  "key25": "5D8YsxRhrR7QpXTrz5Xk9yiizaSzq2B3UCR2YpbfcPD1KqnEgyC8V8ECoQ8yWFDmzTnHtWkL6c7y7eX1gznJcn8V",
  "key26": "8NbDQqCjUWrpnPps6s2dfFZpKcPw3ntGK6eC1cSkFTFoCZ6Di2yqbLXwqrqk9XEtM96Ek24UYad1SoLPU7BTES9",
  "key27": "3GM8VJjiUAkWcVcatCDPm6Bv3uergqKTAUETYssq3tpgNdaHRLoGzssSwy5jSc8dg7c1k8YXDUQAE2j7pfARXFWZ",
  "key28": "5eNaqjtv5upXYNjH4bxV4czwmJqVC4UpEbfeijDojGH9GQshWGy378Zo16iVYRAdsbkGgsSMaTDNvFGjfKyJFyUi",
  "key29": "3nScDSdG9j8WbBMoMWocbh15jTcdgWf8jfGcuxBEUe35ufb6tbpXXtcoHG72MLYYDPyATj6mUE73yzNWifAq384b",
  "key30": "2kvGpHP6PyWjYjyvGcmngAsuhWXD8TyYe3kTCZuTSub2PVUk4MmHPcrYaFCuxVpK1QHSVQ3tyW2ju2ZcBRyG3iZB",
  "key31": "324HefgeVfPtVyXJkEjZotpWfhGvqu7sXAmPecuimksJnYmG6uFhJR4ttteuUissMtHbXVxKEBQyWbJ1vrdXKLwg",
  "key32": "4mQgJBdxqCg5QbhZGEwhHVJVvdvcnFuzMZ9FimbYVR3ENgVwdHokZkoTUedPruPdsF2rsMbLY5FWnweZSo7EqZeP",
  "key33": "3xdUmX9bBhmNBSzsy6aQsk9S1eA3QgKJK7EutXUsQz5veKERafkjzRjgiS4Btas9wSzQGb99TPh96NgZkbfcLKfs",
  "key34": "2auQM7KypeSwpPtF1NG79EwJH2FEc7UWjUtjJFow1fadZu2tq8n6tX6X2RrU1MuVSWbYRbSdA4SnbCNPwUwT2LeX",
  "key35": "2x5RMrsaPYnZCercCZ9Bfcmb1qdJv2SxeHSSroxUoqBbhyCE73H1bb61VDKDRAm5brsgxk6YzNtfsrvERKUopiSY",
  "key36": "4dqsjpRvBCgJ55DE2a9uqhuixfQWGpdq6aLLwVzdMipdogMkbtpym9xLRocU8JeTjKxLQvTBmLqYm55fUn47pvew",
  "key37": "3GP9cvgxp1UiWVFHkR1hCgh5CCQwLDNbHwvNFvE33oSmeKERQZ6moEBF5BFM6Rp1AbQf2ZcyEafHXqacxHLKg68a",
  "key38": "UGoyhHyA4v2xkdxcgb8TSfts9CtzGghFYWUVwmiLAWRnV26aRGff3EKzt3YdMtosKwBM9DEVp3V5kQayi8tZsHM",
  "key39": "4Q3JzNdMbycinWUxWKZ32sS6Svn6uPGtiBSxBdCbTrJgh9THZwXGEg7R1dsFupCJX2idDrR5kSbAjWEEDLpN8USg",
  "key40": "5mJSXF34qvBoZBaNvG7DZQiK5ozeQNs1jVjdMZg7p4wTw4XShEoE6YqJheQXn6NUbf4Qt41BJ6bksfDwLXeB3Uzf",
  "key41": "LQrDWkFeXAw1K6LsVJHHUDJD1czWiS67DhEmN7dSrB4SuRt8P788YYj7iyttkPJjfQHwsHGsQC57DDYcBMmAiex",
  "key42": "2vguYGkj6TZYwrZXr7hFDRCcNpKnhnpcuWLBBgASmEUP2BqfWqVQ9K4phzcH928aPpTiVYEvj5RVYFdfZV5MQb4x",
  "key43": "39DSsqxHGj5bKNLYBkfq486WRvrsWtrAyhb8F1GwaL7TTKCAT1ookXEPruRz6qgyQYPp6v3Kj6nVMGbk1sQZqNqA",
  "key44": "5xsiaipxbMa8Xoqvnsof3txY4VhkvDpdfGVU4HR8f4enC3gAZ4kD5S6pzSiCX8nvQTq1JEBmgXVgp813s36BcN8s",
  "key45": "3cwwGtpTEupS8PuvJJ6eurcZnYXUKUBoLCaYY3AfF4Qs64LAEzBKMwFECNaSCpKS59bXRM9MHLvsS9FpU8AT59RR",
  "key46": "FQFX51nCtH23U7XQmQqDXmWbYjx7Ec5RorNxtwUAvJEWwenqLPD583TxkZDXLT142YHubDSPHJATBRkPnbd2zYh",
  "key47": "2qrnqZqBXTHan4phzEkFExU3ktnjAgQUQ4JxGDPyZYDeE2RLHrRudmyehmLifRqZvPsu1TEdHhQKXv3tWFRXvUqv",
  "key48": "2bM6MSbzoQapg9dYTbQd9UHLFEDSP95HaHYo5rv7FHytPYHpwNgxZj2S7XLDH1Wx3ozqQuRCppcZKbW9ksRe2EaS"
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
