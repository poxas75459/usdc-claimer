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
    "2pw1v4BzXqbE17h1Fiq73YueSmTzeXzjixexjauKGPY7CUSjryKaTU4CzivmViKhV3qs3dGFaPPk7jsGawT2A6ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWA8bhY6vCTJL5FLemxWiXBEpetitZES8AmxgU62iaxjjTrH8dTKQyqgxuDrf6pGu9ziDhnDf1GD8ThDuZcfTYZ",
  "key1": "2ojvTQHEaCHA258vXMcFi7mt6GEc4vTa87bweGiANf4spFT9rMcpXqqRzKuRQF73ZUCgBaN7i1eCSVRDnRK7APab",
  "key2": "5pqx9NHFY3Jee6HN7tu14yjUFnuSBb4Emmq79tdAWSNivsNdHCEePmAr6sEicBnhPMT2gEecmMY8ppUQWbwdrJzC",
  "key3": "4CrtV7zwmni2W14DtUuMDDRykDg8CBu7xxUPy4QThHFzqJaChS6LTWitwF6J8sHsaxfs6QgBCsx1zmLLpRAEd98T",
  "key4": "WG7wgBpacjd3Hq3Nv7eAPhRxUDEUR3tEZQpAqFjZhi9zR9vQvDTx61nWcUhGHUv9Sz9rA1cGe6PCAiuRmDuAqys",
  "key5": "4ZRZ6oaPCoJSubk4gZRejU4jBx31SXxg4wvLgFKuK1AqLp5noWJBj6G3acii3CUDoW5CrPGKioDBDcDwbWA82qc7",
  "key6": "3xYnRpqvmEww6Y6MmYJYqrHWUYhNx3BtDS4oYuu1zCBEcnnFz5Uvn2HSbed7dijmFevsoEa4SZn72FZ4U7M7cm6r",
  "key7": "5Hfy4KGAnqT5nHujQvWbd7LSfauFzvVBPRNNJ9fnzv6paaP3NXho2rH9cMdRZVVD8sNF3gCB2TQ3kwfPuXYJThD4",
  "key8": "WspnL4pe3Y1tqubNnp2w95mfhmcyGyKZ8bb6MW1k8UFvqGtmnVazgpotiDLJiEEpuXEgxrUDjEf9CHCYPApYTAB",
  "key9": "3FE84iHqYARM3TCwMRC1wWCbp5Q3riiu6SqgrHw3TnoMThrs3sRaNgQQuZfZNyR2v8vYc7mHky5e2brpfVkPTJTa",
  "key10": "LZvYEfedodEoUwamfxGLtpbmi9UKGRNyNgyq9Bf6cWD5xLUQMJqW3gYYuiv3HpGcxaokmNExbwJGHq1ajGdqKCU",
  "key11": "xyptuiRJP3GwWHauKLZ3r7CRHrySzdV8xqcTR4Z7wLAMsE8LHjcDLDqMmU9B7VPUqiqvCDiG1sdU5tQUH9n8qU5",
  "key12": "DtqqsWkFdTtfm9LzNRUWqZ2nUc8dDVBBjjYUJEeUYJKe4tBXZmYiMeLTuBhzmxVp6bLvxJCCwxxGGA5w3L8uNtE",
  "key13": "2CZTTPcQkfKdJzvVnAjcosrsvSmBTHW7yNVYhgPtBJsxBW4kwsKZQXg9R6fcWhXpqAGSscNJGiob6TGLwM2Z37HA",
  "key14": "3ym4QLy3iKMiyXksjcBCvuAsUEVFTzHnuqS42XZDquhVZU9yUwhBkVN938PJDN41zBsDCe3E3HyLbgiAuM3vBcif",
  "key15": "4oHhi9nsM21tA4xqmZipwNUtg7xFBFDZ8nGQRgxQpaBXdYUhZXCQgCKbZUvDrF3PLG94qG6Mdsu5QnQTtAx9GnVp",
  "key16": "37B61bzRgYoid6LwVcjX68TvuobzECueebvRQio5NuAS3MDUsb3BpoquhMjVKwiw1cNBMxrfA93gTvuo1Y44rZ6Z",
  "key17": "3jHTp731mNFUzveJYRPJdNAHmWwVPJ9ZSC61yMzEvTdPPXWwbQfa1oKNaixFKt2y3rgJWJYgnLEKHh6cYUSJeend",
  "key18": "5i2TEkCzwsuKJpi6Fy1Sv7eTnGqM7hM5ABsZ6JCgST9xKuAPXg21oo2Pr6S6prGRVsqxdpteWfbCCx8eYoUvjs1F",
  "key19": "3Z7vXoXrjByu7jnTrfHDW7XhVyLnHQZg6mVnBXZrrJVN3L5hCaVimctfNK9GxQG1apzjkm7FqJ2AajGSCXGmfrZb",
  "key20": "66bw35dcj45WT1EbHgfFnkVvKkdZK4omJyWtEKb2pT5g6m27gcDb7PazNSjj1gSgNRwwn8FsGwYAWnf4LRZHMSoL",
  "key21": "5er4C9KxwPGgvTzoXhnFqaA3ukTSHk6njZpbL3NdbGhFGoDR4cYQ176iFKR9FzLZbEquqXsN6GnRGecMWirh2zWm",
  "key22": "4trC7GvfjPek4GFtm6hKUBEeJXyM4zq2r6C7NPNpc4FPr1YXZ1HwK6pSFo4AtD1c6VYvQLuFpsRiKRcvuZxn7KmC",
  "key23": "2rbTmsNJLXGsAMVyZChAaakgEkbnWdcMUeSr1Xra79Q22abSN325gyHvTCSRnPmkZ1HwwJ9chpzwPT6CvFBzeEM1",
  "key24": "4oN2Kp7Kjq3Z6cz5o9R4ZeK61dgTeTbyVgyfEpCWzXGHuB1WMBhRr8HUFXLUbea7z99JrfDH9ax3qoEsTtsDYzd7",
  "key25": "ePpxWLaAg1MQmg7mRthUw67dy7foKGkjbmvcWjVY5sDUqLs7cTN1GQNx4Qreodwv6yj2j6Z2kZcrY7doMGaXbyU",
  "key26": "3KP3NN89BnEnk9cqhDRfYusRU7iagPCigfFoS42fTuoX7NFaFkd58csHH5CMmEQjWPzn7LjzDHSofVRzdoLsGAmy",
  "key27": "64rEDyvJVsTtLoKuknHayPrnMUHHHUtiMudtSLsWx3zQMesVbHgTmiMeQxEtDfhxCWATT9As52xDsCkm2sUfdjYu",
  "key28": "3qn6gq2pixcBRooYoLXQeQcVH9bjRQWhwrGegYgquH7smFEZe4Mw15uUsDfc2RdfEvo2PqbpHmCQmSvyaJrHc8se",
  "key29": "4HKoZaPWbMZ7BxV3i6Y5jxnSk5597TcA99tV3mxHAjFpdg86GGsuWB6oQwBG23TKofyqveJezDe9M1ENwUVRWC7q",
  "key30": "4sxjz85PT6iVZFqLmKhTKGxbFDffv36CA661dMRw2UU5YJD2mDz1u1ZaRTWiBKAMX6vdkgwbha4yZFYgYeBvdBto",
  "key31": "2Sbo6uppdarxJMXGfDWU4hASTGqQYDdtaVK1RAhRsogBrV24MyfA9WtxqiUAt6o3V9RPFcoDhdPGv7xZQtP2p5V9",
  "key32": "4wRdXWsF66TV8mHaexNjpTJciq37pwSUB37TLEEBaRXRnHqcDsm11pPA5tTRTy9CUcrcSWXpEWpTrMtUMnPux13m"
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
