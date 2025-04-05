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
    "64NyUrHXQPfxUEpw2D2hfKWcb9fPoGHq6Lh1c4j23n9b9gqCjemwSeeDMzNvfCfaEdxzh97phkci9nZuDSrSUX6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmEYG4xHyyRATwH5wPPvh9rtZeSjCTz2DkTkPzoeKvm5bxYWH3sVRbHphY4UpCWuKTx6gQ4xoh322qTSwoHGCxa",
  "key1": "4kAjn61scVzBRLa1NH8BrfPsS7NZ2Mu3UfADMAHsGFTvpLFj5bTNkJeo7TyHkUmZKhdS4i9uTjo5EUucxyZ56mSX",
  "key2": "4e3nb5139zXKSMRmz35jJo9u9g22t8BsSB8kSvShM5E1obgqpq1f3oy3jPVdYWCfTXn2fYD4oxkGM3r16bE2iK4K",
  "key3": "4XJ2S1oWU4jcm1RqjnFFLPjn2fRoeDEqmCo2wpU8DutumePCkWqobiHAuKmPEpZZgYgguhfq2trPfdRu7TdZFPQp",
  "key4": "4CWfzVfAhLPMGj9nbKLkGraBwt7fNW3WfNPQw4XL24fqvxSnhB5cZTVv3PxsgmkeCsWQ4t65nCGRTiXc5X8sFHF9",
  "key5": "3g8eBfQJAH6CNC1pUTjw8tBe7SX5PfxZdUAmqswJWQewnvRaeWyurUZTNgtxhsLVyt4YbjFmGVFrcaGUsbNKQXWf",
  "key6": "4u4ap6YEkmFgn4crnExrLpaXg81NLwzJ1GQoYMgEbbSmJPX6kc3nypouEiApULFSzFwBLWZx4dgP8ddm54XjTtuq",
  "key7": "4JjMWJmi8Tbqn8nM51WHw3NuXKPaE6t6znF8NN1JRhEo37UcDAnVNmGctJw7DCrFxfomY8SCy6wbqV5WLwmWnFdr",
  "key8": "4efWBBRNWYaYrF1VMF43XgnGDxytuzriQe3wjGQZnpcwYJe8qitAar2mUtEfbc6pGCg67GUxf3GfFAH68nkfnKHP",
  "key9": "2XenBPnKBe4CTx5KX2wN9qHPJjymky3dGSn9shUvqtykpgX3JPUDn1kvdEbFxkmhvyBK3ggcHZRYqQSnX9HjtD96",
  "key10": "45mEofdjr7ftocjBJq5iGEFsVAUdzxc9R4J1gbzS4adkAbZSbBSyPV7vNgmdKg3a61HibVabhh1LWUqoqonhE6u8",
  "key11": "2JwA18kYenY7VE2u6Cys6TW7ZpWWjLD9fGZXaDuqGVCSypteBUtSExYBafVfjG1AwJE3Ymk5KduJtr4DChAiEBoG",
  "key12": "4YNUM27YrMsqQDz7CjiQsDK5UcTzoc8ZcFcjwZAZ5DdQZsz4Dw8oDQfYcxm1qwnQH8PFttGis2tKhakNUDL6SKCX",
  "key13": "Chis7zQ5GXB4gBrH8CceQMesxFLiSyS75BMGkyV95zmt7vXznZqC5KkLCdCmZwQteFydm5ar77YELUYySbSF7Vk",
  "key14": "YhTwaJN4rmdU9kuZiDtygXwkyFd6xGwvkAzJPbBpoU6mXqYQMSWd3JZGTWK2KkmrwMZ1vu4N3Bztie27974dJnK",
  "key15": "5SazzkZKMA3XT8BPZazkLDDVzDrFGUNoPshFTtdvqvfasukQA9P73VHZHmsS1wKef3FPXZKNDxTRGF55raVkJRVj",
  "key16": "2orx4PN7io3eBeF3orRudHsvEp3SbKgR9Ca7ry9xqoNchFGT9Ef7xAHDQZx9ESr6vb5WbdVahXd88d8YApwLHPQU",
  "key17": "3i6hPk9Fb1BWnpf32EQSiP9QeYydVzft5WFyx7UxDSrsS1Jm9TPR3mssbx6P7sscGnqBWpBFxtyAJStfqQhW3Vzt",
  "key18": "173nEGUTiFMAMWGUM5qt8PoXEmqKx3z53iUYECtkhED6sAhJ2BRoHxTNkAZbnbGez6nAJZsaVkhL3djhM6XuEyB",
  "key19": "3prXfJXhBxiEbHVuRCVw2uKstoxbsj9HPgiYH5nFFzYaH5paKNMVDZETySGTJo6aCX64jm3Z7zqtvHTmsai1Rtr4",
  "key20": "D77U5VZN8M6FQbXBDMjoFg8a8X8769Nc48NsaoGRFCmzrWWcKeQHtbQLqPpHBg22zVpZgp39ArYzCrr7RWv7C7E",
  "key21": "4Mgbw8BqmkxhVX9dzMxKZAxfCt7VT2pnLCq1LSGCfAGLLLESLVhq51j3DvoDg2JJz54p9Tc4rxUYuotFPM58jtE3",
  "key22": "4t5x9UJyhBSQNFMgjaNh7ZZtVxUV5PoTfzb53ytPGj6vuaAsr2epuLjVcwikNiQE2y2yLGBe2913gLrebyBGeyTd",
  "key23": "2Cu6V5gXAgEwAkK8FZM63Y67xWqwC27s3RAuLbYERGkxxJPQnS1nBduCfhgeV1xN6sN3PWdiXMnfHLuEm9xwu3Dd",
  "key24": "5fbSWh3jtzdKb4Rt7oHcFQARhjJb715vFzD6zAu84UqJbeHKK23TQNeVX6PzKn9QWR3XZmox8fSCt97bBqYWUWHH"
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
