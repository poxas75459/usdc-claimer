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
    "5FcFHCibxnbTSDa9ogLDCSQnkXFzEwhrFVM6wgsieHPmZHritGX46AU9A5tNEW9c6FVtzFtaLDzvtt6rpet2kRBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXMQvAsMpfBcqRLHprBPcjTZbCHEHLKgFdNDFnyNtMpumUfVkNVwddb8QD9KbwUfMCyeHpXRtGJEtLhFVjj4SSp",
  "key1": "4smY69t15DRyzwTmsXppVjPA2fCFz3weYsodBbftcthPBwMCR7xq3BDb9eQJbnDGXhe3HgnDSnntb8ooy65pg2U",
  "key2": "B3DEnj9tqEv92u5fTfgppSKsgyY6HtBfk73AexaiYAaxG4DWQUi6XTh2t34cnPaX2bz9UaiE4J3Rfi5uAFq3Uqy",
  "key3": "2GXqqWLv9agtJtjWXEUnQyF6EpkA3QRu852LeWGA8jhffEQRx1VvD8VZQaveNVYLm779XRF9S7ojtzZ7zT57GEye",
  "key4": "549iAJtwoAf1fx65E5AUaFxR6YPPfDPSDMtL2yharADaMWFo6jaUnsqB2VRcRFxzu3iSrmkkksERT19VqBqAeBMj",
  "key5": "27ZqoY3aLqvYaHBu2f61Wje6tMqrj9f9o7K93wVtX9sF99FFcMFEm6nnvAidfkUoYoBHuz9K5PET5dXXhkFX5sQm",
  "key6": "5r1gai23NxAMDp4L4kx2nfqyt3U5JMawzBj3qURMMzn1hHrUk4saKNMMKMHYk9iuGf9cE8RwvMrwtAiJeWofCoAi",
  "key7": "49bEKhUqzUtcfHAaHev1EoScGMdit3fdLA6pAVGgRaz2cMZYqvfetx3LX8Erx1tMzrx5sTd7HE7vnkjjCiGpQPGj",
  "key8": "ErCdZUQrVgKb24zjdkWYuqjxss7VYFmJb27uWYKH7PfAuAsAXNM7nGuEJKB3iKJh9bCKED3NqkjuqkTRGfV5b1t",
  "key9": "4kD3sbDFqgVv93EvLep9CMzQ6oVbmMq17YSZn9LGvKEuVSed4KZ6ctGc2gZVBoFtkZo2V87yBzxZ55VogLCCKyku",
  "key10": "cPi6W2o5B9ahnLU47X1wZFgcH9CZybCLChfT7vAms7QRJCsYGiR9vLdSUsTg1Rpyw9eftis8Ky4eFH6W7i4FzBN",
  "key11": "HREExJsorT66q7WzChmXg3U3XyvDQiDVkgybV2Hjj3Kbo477GgQF5gEWatC2qxjP2yzqECZVyptsuRf8LjuNkWU",
  "key12": "37JDe3eSzi1Fdv3MYosZtymj2RoSy2nDbCnMugr4jim2wL7Mm7XAZYECjtR2EmLSS4rEitzeFURukkBZaUtZEC2N",
  "key13": "3e9gbKpSWpCKT4aMbuSTtS4x6taBJZUFGtZdVWhaBZZ1xZS7dHHxYSd5aLPLJK29dTscXah2X4giuoPZb4qhegrb",
  "key14": "28Cu6c7BULBY326C4pHcsUCRn6WkuS4V5p9cAmvj8ssmB7eDNTdLuLkckdtqa3Uk6rCMKZXQKHAZEEx1tohCkuks",
  "key15": "4t6os93inNwP54uDKSWbT47juCbM3CsC3ngP8SoYoBPPZkKKhppSToz9utkfzkMpz9gkaBkzpfu67FumKzXux8TB",
  "key16": "4hzSo7ptzic7oqNYN1hVubBQfvcfwTdoLP6CwvgRM32V8HRMkSLMzhR8naEhhYyJSfLamjshQoZPv5xyDW6fid4C",
  "key17": "4P4hAZyxMLw6qaGLyUaEAsByaS1gm9xJLX1asae6jwX64agSLEwfvgeQCmETh4NCN1PKthzpPUFd3agvPrjbGNuh",
  "key18": "5jeqs8CoPUFfbtRhYNc3hM7ECVzjEbu5Sm32RPwSZN35CZGnGdqe6QZ1CF7mbTCxmoHEtk1w33wJzPSfdsXoWsgb",
  "key19": "j7YBsj1PzJNGUF78Rsg9e6Z9kot6BPHKCJPTsnmZLSHLurY9rpJ6GQCKQELGW1n4XSJHu7UypagjMDBT1yBQ6ZE",
  "key20": "3E16WArDyhVXWBhC1Zhgyc1ewrLx6cQTtrRCPXSG6ctEoMNiNrqnvycFfeJ1SDtCJ1pv1hzdHgD6dNdcnPPTcU6T",
  "key21": "3pH1UEpGsYFeohXFF3CiTygAHwFdgacrWddYhY7NnHPW1Xc4CV1LGn4qt1EQtcjqkM4vNTuusmsHjqRAP3MMB4z1",
  "key22": "3dcWjUvFaT53ouXFBZk3mNJc9seR6MGNWyA8JmV8enzAxxUF5FKGD6YjS8n83BE1L1bJHtenZCjjgQAW1ei98Rg6",
  "key23": "5bQ17QuLLMDkejekycXPzqNCmfFC4xDmQTJ3eopTKVWDLPnLJ1EMWdEwiCcYeRmcEcB1J9Ny3dpHUj22WrFDLFY7",
  "key24": "3WdDNFnkdtkc9PGCH8wwBach5XgsemZ5t73C6tXYqC3Bvgovk9bA6xqTC1hMLXTy8sxSGnyGYZSEzp9zk9hCA8nH",
  "key25": "2ymPsmzmzgW3RHSok2Yp5DTckvdZYNrrRpxq4JDt2F7vukmFBUwVxNnfCtEw8cwJEftpLDmts472tj8592TfS85W",
  "key26": "3APHt4kYUW9nLBbLZsbhXmrPX7sYTrX2A7rQjdqvqtdg23395gHMMByduokVkXxUiS41SesBVort5smYnsgrgKod",
  "key27": "5GiauY1EjY2diQL1FnBwF6oDAsN6JDgGXZuCwPgQ9GL83UTyBbJxyYuSFzThzYT3A38DEuMGv3eV79Vj94cB9vMJ",
  "key28": "bYuSdcp9QkUjEUPoM1M6jzY83TcztmCHEfCGha8P43UujH76diE55KYCrHEGTZUT6BQoD8StyGAWfshUuKs78SE",
  "key29": "44rcaYy8yvo7QwKZAEfEcp9VywNzjma1jULZ6DnF6ugWokzWPPdgXRZZSNU2xVuGQAu269apDCMtq8TssNGgtPMw",
  "key30": "2j85mMFUhK5oSKQ7WrA1UQKjLZxp6V4qJmg6AqkrQTxwoZsJSm2vx1NufSQkDF8TtRhHVM52efLvAWuEHkXy9LY",
  "key31": "3gaptB5Sp1Vy5qjNMA3XBfy3U953izJTPJ7WMFV59BzNJPB6nAkt6ohPUTdUHnN3eugzaDAyHpvyyiw81zZzFVwx",
  "key32": "3mN2uCBRQ8nbc5UjmndTAPtMqKpuxUgmG9KbTQtGd1jFAN6EKqe8zL9UE7KQ2s4TXRsLZjcZDeDTP98B8VeW3K2S",
  "key33": "2BkEhSCasVakS4UYNyGBNhnBR1MosFoR5aMKFjgBGbq7Af91gqSm8Tcd8xJs5TDAExb13UCvQGXssWTgjc7dMd4c",
  "key34": "3fgNbVBAmHKpxAsJyEp7wQtQCnSJgMUbajpsd9sCnh8xnhnvzmXMnLHqBsn6yno4T9g3qWwyNfyPn7bnGNCoBUxi"
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
