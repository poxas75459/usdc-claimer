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
    "3jWNgKoKfJHvm8MVgpjE5vvyjYDHc5Q8WWmunEU8AgpXb7aU5AG3TJYXgLyJxGuLrhyQTwYRMLtJiN5VKdEDLfSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhYeYycxg2zPKa8F4JKiMLgywSFYeu46vJU3gBc9usgoHkmuiucB5hSF6SQDgrW9NRayT68BorKf6XFiPKEWPUV",
  "key1": "oV3keQziHND3zKkUKmHM8XHXqe472zbHpQeZix8ooeHjuKui6zGteBmDWpjEvCPsLQfFLnpNruKhsLY6afNJtHe",
  "key2": "3kcXRKcwDFVE1914RgWpNiJ5sJcP6ste2RGkmLG4Ax7UvtN1BzLpo4xkc5bPRHvX4RZVr6PQMUtsvadxKZtavZW6",
  "key3": "bSCxdrhSti8wUrHwLfmrfCpzwRBEsA3XiKwBPFxdsPhESnEYhSGszLzQ9feawCR5zXHbeu9Lo54Q6UxdYAPDPEM",
  "key4": "3QS5z79ruG7dxzZsk14DFTCpc4tpYwYC3QStk4iDnLd77NaEeVu6Wh6EtTQnSH83Q5am8J2ZKPU6nzYxGxsUrFTu",
  "key5": "ywHpYzHeF33Wm9oMz8xo68hxXY9hKjoYFp3p58e9hZxHsphBPcrLgQZmQRhzio3YxhDjWHPU2Dp6GrKdtxzbAuK",
  "key6": "3qSjL52cSjkyX71r8tkhMwxm9ZNQwgr4pB5CnVKDum1uLRcPi1Cv5pxKuwh2CtJ18DL2TCP2FyC9CwqKTXstqdGj",
  "key7": "2XbovykXS7oURFcAYb6N6RmsTCU9C1S7cvGE9F494gzu2W3gUpCpeMck3P4MdbTaeJDR1DURDiHaUEy1qdHhHLu5",
  "key8": "4CN4MEvxvL89A3f9PgvUk6pQTtujx1jwAN4fgrBPtwMQTRtgo4ZN7iCwTb3MC3awgLnf6tLFHt54ZMRfAHDSGsaD",
  "key9": "22WmFUf5SVk7wMsVi8X2GGB3ok9BfcgbanBWKKS6ntvxTsFLTUTFp874nK7bSspZP4Y9MS8nr1rQ5ir833pErLxx",
  "key10": "2U1SySqDcLJSXB7gJ5Lc2jC3Srfa8FuY1vRGimX1gpQ5G5vRgAb77xkCnJ6WMnMTPwSu4adPmsn53PQNSCKLZCPJ",
  "key11": "292ue4p9XQGNXVamZbYkkkrUaSv9wE2KLcRJKJw9X6NzENYnEr2MLrnoJT35irBMJ9Kc3Y9wT4FQxU6mN9B1Ek4z",
  "key12": "4egdg8o5kPihBdQRE4z7phyEbJRQSjswPyoNvGhoetqJ1vV4tjDzCkY6N19BGGhRcCrTUcfQse3pCmHD8vkj1JWK",
  "key13": "4WE3SdDWr1KBAtTXXQkLtsiwECgmTGjGFuyEyZEVhGVmGB1Gp9AMNTYWqJuuTdujuzNa2h7iRFfs18JQoLaV7kxW",
  "key14": "5gTyK4zhCodrC5oBu4hHn27Xc7m5w3rNEem7V7L78AHEFe1jZJim1LhPtZ7RC7Yj9FXXjk3FZTSFy6gyXmCmvJZX",
  "key15": "2n9jPFvAnhi2mJs1ymJxSnVStQwVy1bKVjaV7Nbad6hgoHNj9iVqP1NBJEETAi6445BvTiSjUPMVJoxo8ovCDLEh",
  "key16": "B1b4Wt3DuicnncFUMvK3GWBSSEpd1x7gbxbF3SKsz9cxvFsYNUuxRRiZuva4CzeFc5xjb1t66c5LUv9mbLfyP7h",
  "key17": "5NwAYEawpMe5xFXNh4vZaK77rabSnDxNqEfNhRKgCeaGUDNJ4ikfMPg2GB7YqGeda3MjdjQCxh4KD3GosKFB2aSt",
  "key18": "2m2NFJNSpaSrnFkp4cKsdvEHJPg3aQ9oGsK5BNkkXLPhYqWhYpH9j6TenSHJD7V4fY2QuBCYtDsSZkGLMdj8bbv6",
  "key19": "3sfSUAM65xxiEXd6hbUGyYSKSfC2QTBpEG6MfSR5q8unec3UBdH17FjwyUC2euD8sKZs7LR4DMS2cQNUYrWyEcEL",
  "key20": "PjR2GpEqiwrhy9XbhMCBKQjNSWFSDDXwTMFqspBaajb3pS8w5aEFA8iPGZuMT2UKjTeJaGrxrVKjxVJK1K2UEMh",
  "key21": "25CzzcisiMmXWtC8giZgH86bTdn6dN62zPucB5mSEuNXXa7TgunctAF12kZxuXP7kLxEzMsR44dmc4yoQxW4FnH9",
  "key22": "22ykPDiNL76czuvX3thdmYjuqaMERT5eMqGy8zunf1HGZYwdDdYRyvZHvePqzvfPa5sGQytYTxQYVvHKkJyqD3dF",
  "key23": "2R6jDVDrXxTf3WVAoHRigNzEc1ss1iygV3nfVink27KJxZUAdq7SpfiH7fAk7n9AnU7yYRWaqRPc9Bk9Vjmny3kE",
  "key24": "3j2U87mszjYHHJzVpVFbiaQJZhaGwyGPQYqA2MA29YPnrPXLufdqu6JWCK9X2eRewbWhQvtqjYoLBjBkd7YQLvvH",
  "key25": "44JKHN4gUFyyWwpcwihezNhwEgQLbr43qLRhtP7DV43cjSpLHS2GpEB1GbJpmqCja4hB7LY1xTFKFQi98EZXJFBc",
  "key26": "KDp8rwRRWNtG7H7fHNwFbPE51y6iDkuwoLQQM76q5fYXaUSev4BN18LkDYS2KL1eUHyfEf1RJ9zXEfozs2zgjiY",
  "key27": "61WvjS2nX9uaFoiTv8UK7WDM2Mrw7H9v5bAqgTXbe2p4a9m6ymVF1qMAgpN5dZ3nBn5jqpWfXJ8BNXF65JayZexE",
  "key28": "67Pqkz48R753bj5D9kA59btnwE49cUA1REBGDpDi3XXWbB1xwb2iCrHieSeEUZvfdUtffDXNPxyMZa6os9MLznPV",
  "key29": "4mkatrYV4kYcXWpQaKwdDyms1rJ2yUngtJMxE116h44LGWeW2cHkYxXVsA3AXDiysV2xinUrMDdn5JXVPSMNLABv",
  "key30": "45QaVYKMwRtfjjQhaxb8A9EE6XAccCAMwHR1qvn7HDgQgxQSLQX48gz5rHR9RNkXCeq5Qvnkbi1u5ptmdFm9DyYo",
  "key31": "5Hx79xJcsnvwn3BYB23FhjbX7zXFm7bN6ESA5qdGLGHzRwX19J5oQkLnexUeMTMA6yaWnREXgwmhxmibHoUnzqHG",
  "key32": "NhpTmbE7xSTKx7eCtVndcExYxh7nbARWRWMuQsK4kDyWjHXTNdiybEwNaXycBaW39fqmK3shY5cjApsScDftcfR",
  "key33": "5oAb23ZieJXbGNkKApcSfzb2j1A3ekpghntfixYoVFAeHaVF5DXvYwWifrCkhSckS4ugQXTFEPgU8uYsXxTzSsKF"
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
