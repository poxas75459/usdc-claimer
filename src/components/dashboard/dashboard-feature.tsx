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
    "3i8asjJHwVt5t3y9NSJ37toFx9ppddue7cvkjaqZ8BdRaYLW75P8CZpPkjPj2BBdrskGsdfNsjGchAixLyEDn7Yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7vLpgN8Hm1jYQeQpMkRRTW49HeDAUjKLBeb6sN9CMGCvUWAmDKgMcZXXJQvRnuNEEL5V6MBk4afMMiq2XkKM3q",
  "key1": "5s48GftDrJfhUJszbizq3gfJF1YzXhjdno96sFpNdjWve28AGpV24EEZjf82xW3zCeKXQf2EdaBXC1pqCenJNWi8",
  "key2": "RYgfnwKuc44sNqLov4n1j52BMLE8v6t6WVcNLkQ1fy2VK3uWsuSxPceFy2N3p4CJy9gCqQdN3EEQUrA7TwckZTz",
  "key3": "2fostGBnbdFj4xbMEby2pGEjFa8oHBcdieN5pgy5MRAt6F7F6PipDup34BPfvMsS7EWGBZCiQ9cRi7NuzY6zzUE5",
  "key4": "5RtDcY73z91ig5nDZdUupYT4oaAA58URxdt8vc4KSeAdszjVzXMJLjhd6xpxXqTcBQC8n1rm2BPNZ6sNGte5vkiD",
  "key5": "kvnwVUHoBwxbgZVotUm6tD8GXDzEhpETUt2LnRuN2U4Ltdo6M8UVTQ1sYqWP6PJ2GjQtPdjnyrQiZ3msBDZFNJP",
  "key6": "5NfjczF4rxjnPczvjFK4Ajqtm4NhLaMMbdnzQWHHntyBJW6euJ5Ab7Boehru9HM8ntXcpbFwZuix53BeMcGTVvk9",
  "key7": "5r2V5HFGXNhPaWjPAzsCggqGAeNjGwTG1HnZuSjcYBXU6zmkPYGzgcAEQV5eK9ZH6cjfqFbEto6q6Jxnc3to11LA",
  "key8": "5j4hhP5nBTCmvyeAXboRHiQSBnfG1irgz4Qz6VKcda1kTRuEkVetLxuidvff5TBxaFLmnGygHtff1F5kEfCgbnCX",
  "key9": "TsFyKkji94V4weUoATpHUyT7E8D5R4fXbepvx8KF8dXA4imPGNwZYmDQuzzTqP95GnCWHpmyTJSxd86CABcW5LY",
  "key10": "3AdwvADJahgA83bAp8UAu8xoxDKSphLg6cW2hDfV5Aw2eagPfS4Kf9iUnJoShEe5WfA8cLun1tdYzvB33AcEtiRB",
  "key11": "5SHmbweoVAHzY8HGtriZZT61ct7DThMVQX5zTpe9ZqHM4TcECCdXNjFxXzfjTUjh4EVcx3fFFmdEQHzPHXQRoZvg",
  "key12": "42QT4A34oGnPjMmHkLGrvs9fJnJHAPTEQVvgupdHYveGVz4fgkBRPtLuipn5r5Ae43kgD7sdAWTGFpsFwZFsPMZx",
  "key13": "22q9PEfZ1f6smAq74AJFpkfFkzSTMcrAYaM2JQzc7VD4mzwUVsYcG8vAeQPFd1rmay8SdetrHWfbjLHFdrhkmS8Q",
  "key14": "2sNbyytK2hyab19fvK5eeAeTX7kdrue9nQ4NrrdTSvnztd1xConNW3CDsTfvrpk1CYiUR8hRXusaiidoqQB4S6Cn",
  "key15": "4BS5417QEWHjf6phAMrq2ASufPDBZ7kRpiy3LFBgd57zbB79mcZ8i1Vm8k5hvdnfdUjncnGTkUrzfjYc1XMQYXnC",
  "key16": "5B8cd84rpKBJMRadXvpZFRZ6yHFeT4EQE3D5phFeCoFf1bZhiSPhQ4KztDk6gtCSRGGmG8QN7e5o1n9isRDmYQYb",
  "key17": "5K99GvchAgZFNbiQX3eSAtVcCyTKmWaeiXtyvucWa1pRLN1gnAnbE7uhVHX7xXiHcyLAJaPYU9Ub9a3tAxSbQV8F",
  "key18": "2jChN7EpPxmrpJx9mcYW889QTFAgNDeoDkQSkM8CqooRG4GPXM9baX6VDGnnW4pz2n1s1C51qjEpypWY9votrRKN",
  "key19": "55smmR4XQ48nFFCCP9K6wqP2xknZmWWPSb9XhtFtcMQFmSH8UjTnrJN9svzeUrpUpXQrPYAKCRFdgG4RqK211gby",
  "key20": "2eUCyqo5rH3bgwdxxQdYrKT8axUTR3JrKRKKwiXdgVjJJT54vKnpEVobv1ZLtApDzaxuoYZ9VEcPDwg6vnpdHN5y",
  "key21": "5qzA1GkLHwcgZ5mNgjm6GBxYGN4wS3JKoX3HBjUmgrzjQDtaUz9CMwWSXV88QMbQWsMLTgpyVdue25NB2qArjFQr",
  "key22": "5PJBRoWwkXnTo3gfkUyYH35w86eE7kcfhpYqrnGgXqqfTdvxueen6Bgwj9K8St5pSC8sdMFBi4WqVtfx31o2768n",
  "key23": "5mKWfEHiZNc8BVvmHLRG5nifeXGcs77mn9x68VPGsdq2TJf43j1Y2mCXfcgJVULpqQWHURoYrqroeXQcJkLmH2pV",
  "key24": "JrSjzerVvLPjnv3m41qR3Km3RXP5YwfNnqipjAHLGrHmBefyZmGWb4vas9VskGBiAaes7pTG7HnnnqqhLDwTCaz",
  "key25": "SsADJqhzVx4G8vbM9uprrLeAYoubBfC9EmEoDWYQ7LtzyUiLcMADwXUjJguPquUAofQJ6Nz3kLrcVud6h791JbZ",
  "key26": "hkznvcFNNXoqHRxHVwYU87J4TGDDabnZxenqoxcAFRJcLysp3Kk1F6wVseG9dgya5CcHz2DFS1ZK9NqPvwVZo6S",
  "key27": "2MaCUPBGTxyExQ36ESe9X1g2KNZi1Fji2azh3jC2rGf7fJjpW6F1voaLcim8jU29hP7Fuqvqij2ozhoUNBwwJhoW",
  "key28": "2nKM8C8GtMVUwNTxNymL2yZ2bf8v5AwWSEuQmwTNbUvmwPUnbEpyJpD3n8xkecWEBQ17ccub779feoeRjsrViyLA",
  "key29": "5pL594aoT5DfHsdcCEJ8VZTv99fmi4rot9EfpV1owznu9X5U1LVT4iUr7cTaC5ehjnfZtBLW3KjkEQ2yHtts5s9u",
  "key30": "5XvMNSRBH2Gdf3LqjDeb4XzkqkhJtzMns4b9YdrdFFDWvuQDuTEMu1WtF4LU6tMp5EUjAJdW2ooEX3Qduedv3iyu",
  "key31": "2c6YEakEgmBa7AQv4YyGmaFUYJeRP4U5tKmSgwcrv9sBpBPXwr44DbaCukPnx2BuhReR8F69diZTYLy9jWFkMS2v",
  "key32": "2HMUGZGhMawqnDFYrwdpLTrbLdYFDMRVjPVUMB4L879AsAJRN5eZFo6v6qPD8mapfyNicnmYSDAFsGQD84KXcchp",
  "key33": "2XQ7s7XYkkHuec5SgvaWLJy55T8HbYtUtkCW5VUvXGGao8QhDms164SLRPHhpcY6cdq8jvwyo7J8cxNWhCqJSSQ4",
  "key34": "3HTffA78MjsJLG4Ed3gpyvFETJDTg7pvmdYtmriZ4BfLJ6RDpvXQ7vVToR81vDaBpEMUAi8y4dJPhzU8ugPGRxHs"
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
