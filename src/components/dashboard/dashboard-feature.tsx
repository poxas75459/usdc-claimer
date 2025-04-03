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
    "2ZiCmyhffcHyUcvCiGEy4ZEvYsvAJVKxZDZ6qWP9fiSab1EPQr9xcaUHLac2M4tbqff46di2vvK75wJ7ZX1F6wyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZUQW4qvmfRpwcAZRsdmBBTW2CcPA558PCHURQhX55yo2MMpwJh5BGx6FRDHFY2VnftFxG5MW21UTWHGfjreMa6",
  "key1": "8NyE1K7RtYoDQN1TBerZeHs2PykfyRKisVoAQ3B2reSqKuEogXMFoMRReagTN8K92DspLMYfSThabqF42f6Hcpn",
  "key2": "4cvFX1G4Gu3VfPAhZ1PiDibbmQXYyewHXARb6hfRNwXTSN64d5zfVEwxVBsHm9q5EtJ6xaZ8yGUK1CdchhXpPwk3",
  "key3": "5Wc1hA888hyqVSHdrnb6SU7uR8EpzjdXC88eTfxP3mteGLRFAu7nVY6ByJQtcv5g2zCSw9CgKRWJCzzmWPQ1EkB7",
  "key4": "2xkW3AsFJsPw6hSLiqVUroKULM8BwhbHYtpjKSHwVAfBXUGoh9rh63axWeXsmm2cZTdsrF8DAMeXM2EcYDELHFZ5",
  "key5": "2sNKeXWhJo387N8BJbHrBY9rGMihxmxRiGA1Yy5PUZuSvPa8UTNCKHxymuAnHnGS8LFo6kZr9de1cWWPSN92nDEe",
  "key6": "v3LjpQijpQoNp12bTfd8e8ivGfYjHyN8h5pYcEU28GXZfGqV3xSp9VFFsYEgaEAhhs4aj4nhpCTAjhidppHz99s",
  "key7": "2w6A6jqaPaSFEKvfSXKkh2Zj2cJG9n3CQAo9WdtvFkaoy8eAotcF1FfsS5fnoeQFirBd6hQbehHcZvGM2U1HVVDX",
  "key8": "2gqvxKP1yHuDdBUkSGGdRiTwuFDd95bgFzTmSWXqohxa2KWMvVpDWtiMT1tRRzPPujhygqDMazS7n8uY5chB8skC",
  "key9": "QP19wTqRibRiys7rtirCog8JDBxX2P1a94SC3CUBNonpQY681RPzYPFwmGufaGLA1utPissUHT8BQADSrYs9P24",
  "key10": "KnnKYArQg2VVujE27Ydx4o6Gw28bfH4tD6kYDGCtwj5CSAuQGQ7XAqzrS9pNHhXYWrzaNidqz4XD42VmB3eJEcM",
  "key11": "QjN1UF3GtooZXzNCFQXd6cvxd3JGnMmbrXfj6RyMSt81QoVkXsho7vCgpXjTt1UQ9JLPdhutWLbQngWDE7Gvoe3",
  "key12": "2pjtDUCVU6bdYMJEBGNZJ8L7LaDPhL1KxtGJrQdcZ4UeCxtfbATw9CQDqX8KRacVNxV9qRYnXMAyQLQ5ffByAr3k",
  "key13": "5Gk3vMrD3xDBrmcgaH52w9xKVjrDUUo7GxyUjucEA6bEhrBVFBc24L5wbsw7phqgZ1rFRPcMpXKKuWfTVBSsFQgm",
  "key14": "5dbfLdDMGnqD4px9XG52754wd4EvXJyxrbGVbFMgpDEzfqsH78dip9Jsgr6Q67Vi2EXaLt7Dzz2Jn8QDENYGPgwQ",
  "key15": "99TiDEBjUTKrfWPL6GJWr13T3cu4K6usMX81RthizXCTc7xSdeKL4e9tUnoGsKsZM4pZN1q9eQWuBz5unxL2bNM",
  "key16": "4ZuoA9HB7NkonqzZMqdGhYirg4BNJrSEctK2nWWK7EvQTzujuw17pnC2V7dBRUYj2ngjHHovKSByHm8RxaKwcWiQ",
  "key17": "47TvS3gmkXnAxAi1EBW7k59dvZNsGrfSgYybUjYWxBSKrkxNbqdGcRBaMxtdLTVv8RsVL4jngc4T2LC9AJn2UbfG",
  "key18": "61t12Ah6MZVRNRh8VXqNNsDG9gGhq5Zr43BJHDqyoBHbJcbdYYwJtVoauVzhfv48Tq7q5CFFLBdmgnLPHUQqDdvb",
  "key19": "AjpNZVeiXxWJVbSrBmHhkEwj3JMDEhdawZynfPbsN1M7zwY6gaYw1opSk6QcqrTYWfSp93DCj447ErXn7qftKKx",
  "key20": "2j5t1Kr4G21TX51TD5HnHM3Upq21P9T411oSkAE8iStMgcYPUsRVpHaJyGhNDB1rjgQc9K8zFABLhZL7uTW9FJGh",
  "key21": "3d1Mcw4RjzYq6wN5JwEYqQRZqxQc51LUhDWYKVmnad54URjfppuMSeERmkWGcZ7SKpNyujSyTtXnNkwLwPoPP1Gp",
  "key22": "55Pzzd4fkNM9BwDnLnc5kjeosbH8wMVqrQFejx7YfWqocD6yeRz4X4i7hmF8rk8dMvPPMyv5HmJzBZNBjQHXUrr8",
  "key23": "4J2M8QWtCXT4zMq1dQneatW77aAejUL2GPWCcJTMLYKDJAJ7rx4AGd3gBqmCFn4dUsX5ay9TJ8J8LgbT44RwzhQg",
  "key24": "3AHHPX1LiQMTDyW4XmBcriWYpaqxfHcGjfgwRPnuiiPa9sUBoTHWgBAmMHLtLTGtXP86qTFHxboV25y9kZMNMrb7",
  "key25": "5TbPyvadCdh3mbovdnqyZKhW4ZsZM7GmKQ4PmbwuvtpJVsZ265Svvai1tP4nqf1edGyb6e4MBKfjAbKKyM2NS3WB",
  "key26": "2GP4MvZSeKWKxufUb1xSCPTJciGbntLapqdQZEc7qX1pqY9AWWWqMesxGRqNLUvHBppEWrmjUL3ynpFnAqJKzkvT",
  "key27": "5NEVmbmNhZGfDaNfoKfDfsApzNYNJq2jeNjcVTxFGZfc6qXCCGwbXFPpd1pdFGPgnYT7yiKxZyx1n5bt5d5kQdep",
  "key28": "3mZBjqtKQwUnetFGz3SETCPFnTA4CwnHsMpsU91R82yf1awDYqsi32fMSmKn7U7GLGqHKMgBwRgJ8wdWsyhqCjZZ",
  "key29": "3wSoNjW2QDmwLqbXAJ6v6v14MeC3Y5hftZRqy83CXQH47i8JkayXBuNV4HDV6zN93dgNvbGo4di6AwZDDVAt6vxE",
  "key30": "58QAQnQ1tfPP3LNmdyizRz4gaZe2DBFn1qGQJodS3cXY4ZjkHaLLRH1BcZMvxsb1AKyYb5LT7s9FUabbbxCpp17N",
  "key31": "4KkDv9yAfhGwNhPFTsNv6x6v5dLo5vAanK7QnKEcHaeQrbbL7Abejm7VkGtjtLGMsfQf3QKeeV4auwoTwsumFHvn",
  "key32": "63PreWbBf25wS5PDFnxMEbMtagHTtZXEwuoj1Jze9nygZrNHrNV8Edcq1DcapSSvyVp8VBm5yfM8LK4zEjYtVP73",
  "key33": "mEvuka3j3Ci1x9kQJ9BYFaT3xjGagsqGMsdeHfa9Szh18GfGhq8vjwp4agGRon6NC9B43S6Zk3eyemKCLpietMh",
  "key34": "1aPe3kAkGmCCqJsdHigAhWyEHtJAierVryWXdwP3kFXrLLwycndEypT8nV7E7yu6ApTybo8TRcRAaVkL2jXzgWd",
  "key35": "373a5UZKRUnMdsBdSEeosQN6dk12hLHtVBd39xQ9RaErxvEZgSoKQjGBwL4B22oL8HV9BA52shSBn2946pt3hhMq",
  "key36": "4BeKwFW7hbYcRwBfbcp8S5gWyp5bp4v39rPWRv8zoom9G62uYni5JUdMvZnKYQGH5cNGaFCMAFepGBxUsFAXLjoB",
  "key37": "3HSt3JsSy2oXZQB4qXNLAvZ1zYXqhpRbBX5w9oqHM5B8i3MvaKe21VPPN8RDnZUGAB9ZBMdt3MN5RULcZjKw8sbg",
  "key38": "45sWJrumMri73HQMpShMviMNsKpbVc32JWbLALzUWi5Rv9nWTgyALPxuXScfQiZb73pB86JZfVer8rLMHHD6zaPf",
  "key39": "3bsjpa4woV2DKF2XNfyRuXTpV6nvcv15yJwtF2EjkvSgiAUF6qVaQbEPDtpgjQBTuTSYfR7Rb2Dh3biNkzU7Rzyb",
  "key40": "Ff41Ef9Bt4H1cGaESa3RL6USvaajXi6KxbThRwtYFrp79Zb5GQJUdivhEsDYyCD7ecPGR9RKKYgf99qGrxJ9PwJ",
  "key41": "288x2Fkb2zyuYhenhDRfhBzcpGp21R7rCUPTsof3uj98dteP5CQdZetoFzAWSBcy8msiL5u26zusTvF7oh2phxjZ",
  "key42": "2vzuGibPgEeeT2kkxRt2FtKhMrXkSMgckua11WicgW1d566PETwsaueYTQUd16wDH9nRKLH6izUNtvprGjAb7Uri",
  "key43": "34fcdme8qJd9dd5ojoDXijt6fa5wLEED1BMyQCgNBMXWV26PSDUNMSArRQW16jvHXXdEWfm2LEYaW4ge4Bjc9nhW",
  "key44": "3aEExikRnuAANBcDdgNYFMbU5SomKEnQKbPLhVUrgE4qyTyLQfTFYMZe77t3Cb7wzC5zoJXguuD7hT59SvQfdj44",
  "key45": "5RPk3CrESvgaMCzdu67HccHB32MMhEb4SiDy4C6axnczyRXSvT6G5Ks58nMuJTTG7ugcVbSULhDekWkuLdoTu8Mo",
  "key46": "4wMdVvARdSXEs6vaTSyfHvRCnwmShM7QePsx4UNVoDMPnLa4GrmXvLaCsvbX341y3LnxsEPo8R2KDVBC6eaPeFvU",
  "key47": "44qdgVdtJwgSiECiqPMRDGSbn51A89vAmgmJ9kTeXE5KgX7Pxhq4sjqsVTAaKc2aCAwWYhuqUSaQDggx4Na9DeBV"
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
