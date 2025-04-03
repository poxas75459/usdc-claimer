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
    "2SCF6MT6hm8Lj7MMxtdi2N4gVpXR1mFRbDJF8WpSYPxiH69Ey6irBev1K6adbdfzuSqWFjXYcb8EjSrPCHSZFQ9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFgvoRUenFPhjhexrPHrZ6CQu14jHFE8JSAunbzuCs4ZX3VgwaapiiFNZccqrzSNfJ4y3sVwLYWc5Gxv1gjY7gn",
  "key1": "5ZGggUtxuFzkfUQK8tFio7xaWS8JkRv3QZw98xYA1WzY6i4pRDneiMG5f7iYNyPKEu4Wf2Ku5yAT7hhYRanX4kqm",
  "key2": "7sGYfuLpQbbNUUXZyiHEgbTWoC9YQvbWeP98xPLt2kqME7ExrcFzAaZcR6J86HjifiP2Kb5MvPkSj9C35Ss1gRx",
  "key3": "5jyNEX56tDxyb4hgJJ4QX8R4vFhxzhSFbm2iRqPv2P53LsDL3KFx829Po3xcv5hJAtvQGPDFMNZi2r2wsfkMNKuM",
  "key4": "3bb82W7iLzsP77QEAn1qSy4w2CcZAwLaut4QbQWdNabMyY279xp1ej28RtxiTg4hLHfmaPRq5BfywzMBaoEP4JzZ",
  "key5": "3HG9XNB3hXLfaSAcs471EzWsKPCDUVCNgiFEq3r6z6Xv1t2CsAiNQUvYjG4d9bLqynALBVDPGs5KwPh4jGw1NkN",
  "key6": "3zjGuwyJyib8gRXivzS4WdCKrGQDoYBrzMr3S7xeC2XovNFGMATNXiJ8j6J7GGNGd8E7N6Lv1T4dZvxjkPZ2EgCW",
  "key7": "5uMc4wxkUXccQLk493DtfkCEQHqCYfPFEoUjKbxqJCvTCTfqdgGP6gxec21o6nhyqkoahX8KZJ6jYPHDMXpnjuLP",
  "key8": "4CRUCYE5rNBQ7SjSTt2jq9pR81rUJBNtf2S1A9oPnR5iDfWGGqUR6fVgPMhdG8Exz8L4ihcpkeRqWmtasotfC6vB",
  "key9": "4K3PDapXuyafKzmwGeP5hyZ36hkDxN5RGrhhxx4aSj6qeddSwHWQfdB6btuDyq46c7dLpupHwHFyS6e5aD3ahU2Z",
  "key10": "2a9k6cdzDat1UxVVtY7PKaA2DXDhgp7cGWVZL752tSBwyr7Rk58HyQExhcZY2QpUcHMn91gcV7CyfeAB3UuehSQ9",
  "key11": "4eDNnM1nrErzTtjSNZtu4YiWzrqVhYGzYVY3RQmdcbjGw9K2KJEDG5JkuXK5PD5qK7HezZ74ioGgNqAmLHr8ahGE",
  "key12": "MuL4YgN59AzQU1DF2TtZnfvvLFDMoh7xN7BntPNPLHKmk3FTrUy6d9KYpToyBRdQTW2sH1PPPGptR96jJgS9ymP",
  "key13": "45E12oEergerasteHxrFRKJA73iYHyaCYgHTDfGewCVU8X81r5hVcrDi46z7qrAN92QrdmqxK5roAfip6YnSra8m",
  "key14": "5WskXEBaj4oGGk9rgLRnC9BbK16UgrVVnr4NYBs2ZTAL7vC4YztcvfvFLRbG1U941CjhE2nj3YvLJM1pdCgXYJMq",
  "key15": "3HhEyQ66W7bvcvSYT3shWbAH5YFxMAvyQLrXHtE6rMpG5wf9eKzFHBKWcyRsKiZ8TM8BT1G9i8oj7ysrVXq2M6nx",
  "key16": "5mtr18cLxRSN3f2FBvB1bh6w5F7v4TUswZffabUFzt7fjk2iKms8cLwk3T9gFszVPy9jV9NMB58DttdMKGsEd1QU",
  "key17": "Xicpy5DTtzEeV37Hgx3AwxS3SuU4toS7wCAPa3rgAbHC3NLEP3H5faU6NvSYPbV14ZR6wdzoLbdCA2wxAKBuTdr",
  "key18": "51DBcNhae7b6DH66achbjuEYEiAqVt9izfF8VRr6J6VuM4HzARCJicNbDFhGWrgVG61Y3hmuiSjB4zNcyiqjgkPB",
  "key19": "pH7zZFsmc9YLYEqF2Y6sXVYKJTWuxMRUDGRtqBPgShevSNanhQPcDghDsPLPgvNXRVHqGViZhz4E8YsQyERMn2G",
  "key20": "2zMzgWVW7GZbxcHdq36pWGmg6XDgaGxUi9hNsDoUEnwHpVpmUaudB7F891pT7EmXtqnAKiFBjcr3GuYpLMB8ahP3",
  "key21": "5z9mzHuRxazFv7UcSe5HV7gakdzh4ygPkbh1CTfN4jjDnUJiqqJvHmwfEUhvifRHPGkrS59SqgpsQFVJ4WzRBQZt",
  "key22": "2xR1JzUir95HCcNmFRwSzpJa8Gz9uvcDkm2vjEvb3MaFYNT7sxjYaP976fpBoYPFzDUNLCigb4c3632LH74GQhse",
  "key23": "5ZvNXPWFB43rh936SfZnEoXuUCWseuVCiKnxkX1NcQ1JNMaMFs8aKR8oNBMdbbL9r4tervXZtfaqskZRhqaWCJVa",
  "key24": "3p9oJu4TsknFc62ukdkFujLGzZzdCV6NeixdhyTxq9CmQnH2G74E9TCwJ3g6pPGcmVQ5aZhKBLANf9RwCPRtXGrk",
  "key25": "4QqgvNVc9jXXnwtrw3U7f2LcddnTZn4cNwWbCDPmNLBPhr9WXWXoGYKdvE3yM5zofPfAk2zJn9M8237FyjXd447n",
  "key26": "57TxVSzyY278Y4JWNwjSvvLa4U8mzjo9ord2sP1j6UQ5iMmfFa3DRpis78rtYEaak6NeVAu8Dh4ehn7XfSaHaZuQ",
  "key27": "3srzQBcFYpjX9NrWyavSMmiVdJy3uVPWM2Pdv73an7Tgrvzmpsf8ps14QhrJw8jKKBeuSMU4k6kKvSLeWHRVMYeB",
  "key28": "3hGvS9QDHt1VVNnQkQpqxV82Bt6simXvv3qQf5rk4Dn1zuF52cwGoDd57WcEGjUEJCV2zGgWghCyvMss11HkXy9y",
  "key29": "3uxvydM1wiVmCapb7PQtxjbgjPVJmfEmo8NAdbSiS7139Ss2spQRCCTGLqKD7xQ9gVKRVToSJkHNHBXy62hNyKcG",
  "key30": "5rSJpJGPc8LBpcSjzjJnC9nR4Q9Nc9RAYLGVdASbK9pXxuYXDEsqaDbDR7vDFDxnXayUZsDq2UJW8nbGoQgD8roC",
  "key31": "3akynrkPwsPKm5i2hGsmMvHXrvqHSiLTsxqGtDjjZBtwvDBDrauN3aeMQF8ADernnVheQKv8xE7gb9DXijnjB5Pm",
  "key32": "8MWga1CP73kVa7QXKxAhmRKX4Srj5sTHNUJypDuDskBKSttLGS7qmE6Wk7FwRQUxH5iihKUoUng4QAVStiU5vfQ",
  "key33": "5aeHSAsWpxRCxFBPyDedJAS6sBbJqb6ECVztjQHtLZNFWRirQq1B45Qa1Sb4tckwtgREPoH6fZaM92dR9iFkUjfU",
  "key34": "5UJ4a3idnV7Zpv8QGLr8dqEjpd5ytfjPMFoaNciAi5Nzj7Pe5NxdReEbfDMV1vXroJQTsPsoshmPJBpAJGTtVuT7",
  "key35": "4m7EL7uwYg99DYunhYRmBghCy3jZ3ok58kfqJkNZkDV8kVct1FscHbTXwv2d21LV11KifWSz75AWQPSAN4vDPAjP",
  "key36": "5s1XkHkez3mzgKZB4akpnbwWb74pYBTivnjpXGVHfWrEsXng87Dcv7bCDxTUWuaEMXDQD4agdXaEwPtwwx8aQX1L",
  "key37": "64axppKujPZ7pBLNrc5HYtLGMCzGtEHqKcDZwhitS5P8XZAnB8f19qV7Q2zPKB5nw6t3KtoPvkCF76GtmxcWhf2i",
  "key38": "5vSTcugb71iHvRouu5NvNgJVkYYiVveRvPLj3r4iDn7Bf8bLxqCNFEq69sfp3YDExotVoTUwHEcUWrFouKBRHPPj",
  "key39": "4G1jRwrTRZvrM6hmxj4NXCeSBXNUoX3DpmHUf2Fhqcng5nS8Fb8umEPtAxjwSM3bR2qc2YigEASGT7jXsoBWgKQL",
  "key40": "4VbaYkU7kBQE7QyhbUzqsQfN7QSdR43unvMoTtwAzGjaz4McpuS738BEGHrDQtHCRc3TxPuaVTuKLvav35Cxr1bQ",
  "key41": "3Eo9mhXvuDhvwHydzmtbtxY8QFHAUTzzcgRiBp4KsfqRVCjB1Fqm5b9K4mSx66Aqzv2k2AT6CFLYJPhhiX14PUWg"
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
