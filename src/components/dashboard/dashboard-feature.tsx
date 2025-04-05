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
    "5dPxZKHmJpPDmFjjXfKimr6MT31ptqAd5KoVpn9dkaGgrEK5nE3qo4jT6ixsBmacEmfvuHLPG9NoiCKghzgSthZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjRVE6bmTG8VWPmzb5Mn3uvzojmkVRi124CWq1Cskm7dvCXwypJUut2TQ5HYfNwnyvVnd97U2DBW1ocfzgMpZkg",
  "key1": "54m77v2yPc4CpV8rLsWFKhLL81Jxx8m17BQoFjizN3GNPovWyjkrrF3G5zDDydvwbbWthjxLu3Y4hWwgs5AVYQcH",
  "key2": "5MaqySKCPohV6Lqg6U2DtYmbz7AnsXS3bgXCRVjb5G4iJY1BHEPwtQoi1WC8o1ArLBCdqndUVk5Y1FvhYz9KUrjp",
  "key3": "3u13CnYnnn4swa1GrStra6mS6dLoUg3z5zKnVrCe8smhGn2ZFJK5jwGdQL53sKMEmGwjkdFZPc6yUYdvvU8yC8Fw",
  "key4": "3hBZweo8ZoqRjkosfokq8hqJtHPK5YhTXK5bHPaNVF99srr3asbcRbkoQmzygNfX7hHMMBREtcYijGeNTr8Q5jgN",
  "key5": "2dw6YFDMxGyyrwRhCBSsLx7tKVnBkPLNXEnrUDGbVzp6Z43d8gDRac8DG811G2ZcPvRms2WP5tHmvVFGht9DNAmp",
  "key6": "Z7x1vEnq13rhdoXtartbNREgnb8xjeDj48DhB81i9GuZhQU51QPk5BrCpttabU8VUYhGpBs68g5PCQQjH7kMdwr",
  "key7": "2BExjKK6yHw2mQCTZ8YrVdKWKxSVUyE1AwLQVHjJ6D8r3SG73NBafK3BjJ9PyuS3RYNXM3u2iYtLQ2gqWH3f8Qfv",
  "key8": "2kxn8sVLmsLS6r5WXAxyv48djmeTecCccui9GcEK6yQjGvBnPAb6RDK5EEawPQarLEHZ1NsX11qUe1S61QKKTCbp",
  "key9": "ScPEDbm8VkUR8hEzAvLvG8KLg9kk5DRL4sozcG4N4fYznr8nrd6MFTDkD4Vu2HGGDoZ3YMMrB6osE6fpDRZ1ZVP",
  "key10": "4L6VArE2D5Y84rcxVMzwux1CF1XFT1P9AfK1t12Ey2PM92HaFATiDKH1bEai9AaBwzaRuf1N14FDiBMAKWqjRxqh",
  "key11": "2vWw9yQC9DqV6PLejrEnsisRwNdB9UF3v43Tyv3B8zb3dg2qNu5UM4zsbcEjukBEJGuAv6fvYeaK2AD3LTVspviV",
  "key12": "2iiNLqBwzcRqpxrPGsJAtH97qvuYXUjhqZ6zDiKhBjS8N8gNe6NbDi5TgoNywaBDwwhETGMTD75cYGLGcf2id5vG",
  "key13": "2rArZfeegnRVQcLa2izYYzrMwHcJeQhSi1ttZ5mMCdBXhXa4WcAXt6qLcKRMeJGRodgMSeHMy6ENJK9hkoYJ5beQ",
  "key14": "5a2qJFsAX6WbPojRQR337NBdco3arbrumAkG98YW6SGPUV9brW9p2rcv1vv7m2ME38ZCEVcs3XFDsCsRZfN1cUAp",
  "key15": "2yZ7ZPrQAnSfTL7EcUpk6QUeqpEiJhgzDsZimV47yRdJB3Pt7pjhC4rDv58BsiGYw1e1kpCMuCV3bedvrjPVTqCq",
  "key16": "4i4C9c1NNXqvURGEhsot4KLiYANyH2VGhBpd2apDBYUKuR1n3YwKmTguyzF7D4WBWhjWmeA3HHLJPK6po2sNAPTA",
  "key17": "3zGE9RWdcXp3X8KjGqqK8rwJK1qP1Qqo8aYXWSreLijeoC6NPmZEg98Neknzpx2GGs1huFermxsjfKSfczBTXWu1",
  "key18": "5Nu9xeC6LUJfwtiVLEip2Ki5tsAywsFxxfHfA71kmDPxDQZhgyt1KvqhwpeYNfvtz1hXxc1jMAfDFz1KK4DinzQd",
  "key19": "2MVfKe2k8CoouKcve4rvotYtJYK51tRYC6np9ZCHHZ1VmgvZKUMZtVFuh1B7eVmmCx8LX43bxjij7YtnmdqkNLfN",
  "key20": "2KBdcaXGLTc1eofT9k1rYZ2WQkhYf8AhZG5s6PE1tqd9idjjwQoBVV9y9u9Q743P5V9dKnyj4zSWKbrCSDhPqwaR",
  "key21": "4Ma1cweeGNye5YAAeAUYFbZGFFLVrJuqQMa6LVhvg74nx8EztkexXhFLp25tPvZSk8DKa2NXCnJSGDnx6VNqhYQg",
  "key22": "cxbToGoP1uDecT3AKeootUW1ca28bdrr1RDthspNMEFwuVTpUAUPdNHmFzweUMTtoJoKAUGrGCvx2nGhZ1gFcMB",
  "key23": "N4sujoCGz1Y4Gqm6bUEXX1z8Kdr7usL7L7miHZBZJUE4y9hshdi9y7hjiuJ96FUZ6T6GGdvxTD59RXy95X3rgLX",
  "key24": "cwE3ZafFPxYnTtTxS6koLTn1GD54abGm47C9Q9vp8DfzaExQcMpZ2CU4bc94HwjczsjSx5U69R387AuXQLF5fhh",
  "key25": "46bt8gBiMU8JjxE9ijwTxaaR8zk5b45C7KCh1Gwq6ipoz8noVJ1UhSnMgPBVYjsfjxdnVrLuef9FWKE51dJy9VF4",
  "key26": "3DeVbL5mdip25bEi3gDTu7tHizSSxmGQRvPxom4YoS4NM5skuU59vdP4d7jb541dL8JAhpKbuEq8DTPoXMys11zB",
  "key27": "3jzN5ZHBDFKcCR4ZHkwiJ9ncyWLF86Qb4RDuACciMivNaxEUVT8SpK3DTP2o36D9wkg8ijrcmzpkT1XcoCoJ5Yj6",
  "key28": "4hK6HsFEzcCrSkH8SYdWX93DNXCwhR9qv7RgX2HQ9HFshnyZhkmjoS52ALHFRqBrq4rRFrKnxk1BQWuqeW98vxoG",
  "key29": "7w2Z7RetWZiHfKH4ePPX3MpvdB1eRo2Jpn6ii5SaEdmdWrqhEj9nnVfvoDyR5nR8hBTrrEp8VEVLP3Cg9Nqkxej",
  "key30": "ZMQgCwEDpV9KMVX1dDJB62Qrjku8TUXKgAjQtkxo9XqcoA3bCF3JFohZdgys3euVWw8SotozMitoEQzY6kGSUQA",
  "key31": "3D2B56N2UDnP3xAU9tuzBhYx1GriMyLiv6A7hWa3vhQ4hmi1UeHxHa6BiYVvWhqdiav4Ug1yBwjXeAymnVpQVd4b",
  "key32": "4SS4YZ3kmYGakf2ZyjCDjuRVzxQhUPBnhBGFySTH9Zo98gPQHi7sb1i6aKKAamp7cEYXQhZTjGZxPECahzM4AmA6"
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
