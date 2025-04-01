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
    "3BYQFifXFDazqEuWMdEE84bRoQi8Z3T82jfdiGFb2frPDjkHfVi4KYue2vAExoezcsvMU3rCwNNb8AApqdXPN9qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERns73cmQCdSNfZdyAbFxYmiP9FhDBNutSGp3pU9yfha4hXgTFXwwAVDRFqhiqqkxFCtfG2rfxpnJEjpgt5gpFb",
  "key1": "5sP7a2BQTDPfNmz1a8jrjyeo3Mh16kcsUQANkZV8MiLdJTs2NBv6hMxuqv4QcfrFT63pSRoMH5zQqXW3CtcuxUcF",
  "key2": "5ifFTec3bMewM1JQWPKtUxZ9ia37AFCNBnG1geFftxaWHUS7H6vvnAEssZcQpBgy4FueHyP9t8QYr5cW71avZv74",
  "key3": "63b8CcZaMWsmtVq31aqQVyYryqDBJGvD2Q3F4pmZQR5yoJJ9V4pdPZaMHDZBm3TQ7Wj1VCk7dfj4kmnJPhH3pvez",
  "key4": "2PVTDYg5czz33cr6EXeCK8wtXaErC346FTttiAAyEEcu6hLLrbkq7spaKBagSLFDehfs7xKSHohPz1rkhoNCTrE5",
  "key5": "4HHVAgr4RG2i6xxb9eJRAmNJTk9ZQ91QLMHQHCfPV26eFQ5RPeP5Kd4mRWrHM5bLCAEDqsuckNsdhnTV77gAztTx",
  "key6": "k8sN91HucMsy4jq3aG82GEdniBoNDXqZ2bthzn7BMmj8dCsghKDcqo7qo5EpdHzBd4qBN32ztQgPu5SpB1hdMsP",
  "key7": "8HKxLnvjij9t5pE3QRLLza5BA3CmGJP5zM7mCnVrihYxaP67W5PG3SaiPgTSkgfXRN4Yjr6VHZ99Au4bg6hWzZK",
  "key8": "2hwkCopbQhnwmFZLERuaKd6H4c7gpVBKPPL9MBuAhB23hKuup69hnCvb36XW8mtgVC8Uxg7vMCZgwEzFc2m9tPpk",
  "key9": "5F76KmXg2uVigtiPSB8J3FeHKBQKFJQtSJBJBheXckaJxjX2XGdgjBz3eZBHhjqriZYwWPRqipAsN8ngPzanS4hA",
  "key10": "66EMV8vGohNHUS5wGNegQPxVwAFZ4L4Wpxak5JUFB36Buc5pg4FfRm5fhih3S8bPhrW89nxqkwDYYLdonZpeKyJW",
  "key11": "4MoH1dm6Azy5jyLS6N1rbJsiTdgey4tDMqhejivzfymPuRhM8Q72mCFCFxrsmjAYerzM5QfNx3NdhtDge3EQEhLu",
  "key12": "52NdS97GaykUJ7HUL4ZisFWXT7kAvmLN4V6Ld8nys1bds2EH2CrZ2maLzrkfer5efeddAryqK8rAkPhTDmRAtYVq",
  "key13": "tUqnWCdGTUKydsp5dAw8qzRneCgr5XxSzFAcvoNbPtiVTtpp7U2x19MPpnRCcA2e4Pv51fy8qtjjagNMxuX9fBS",
  "key14": "3Die7ZdZm3KB21gRDCNbr9JfRqywAEhYqL7yDxTzKL9EQR8oxtgHeQvm7PdzmQLCwAnBFpjqEU8PUHKTFkCVhDQt",
  "key15": "2dumjQZ9Cscmsrp1gbhy6wxdPDcmBsCrgiZ1Ezh8c6rDqivBPVY94y8XTAX9rEEcTh9i3rswqEKdKaVj5zW6tW5A",
  "key16": "yS4Q3WdVZRYhdxBtsM4CofBCMf6j364G3RLwgzxh1miMCYsHn2CCTVfzT1xKuKC7HXrRmbS1HQxDbVAywrG9DL5",
  "key17": "3PKV8JxD8XJKEm7eNogC824fwUqEPt1jd3zb3ij6YPfTr44Boo2yfZnrbh4dw82tEN7HV638vkRZ6U19UD3ModKk",
  "key18": "5KdP3RN1KUG5NkQWrgp6agwoJroczCar5qbuENfq42NeHjTbFfHME8H4hd6xervCBKDkoLJp4sMJ5U9WyU4qqARe",
  "key19": "61NPyTM18wvKkim6SH3s1NvZcH2XfP7qPUmkxw1Q73eKYFP3Hax9Vh2HLnCvmHkTnxVYZU2PphNdqdHxaCZWSyDo",
  "key20": "Sr8kg7KzCUroo48ZTmWoVkruT5z2K8ciNEWj19B5WxqV7uwWEt5j9Njj9VfmJDxVomPdyL3fU1n1B5xeY4oSXkm",
  "key21": "cZAD6MuD5nsfJKeMhDbo2VdjyRZPtNvQf7pjWAzeEVurRLLz8NWh1YVhWfX8oAC6m5UkoF7JEZh9w3fmctqvU7E",
  "key22": "3JxkzcnMefwBo8WFiQk5zrGgXkEsmU99MCfJGrioPHfAQjdAk1cNETb121dibvENH7UU86TNRxfQzaGVRBjx3vdn",
  "key23": "HWBGp7zdMpeQVtZv5fbhh8CX96SJ836A4qNBaBmBmF4P6feYNwgu2ZNDskDq4NBcmmowGNkRKepMXxmf9Gc5yCh",
  "key24": "4wiN28a9dwSjQeVdp4Aiu2RsVYad8C7Xya4LiAWjLpDRdcatLrLiDEGGwnwmgBanbUjZcG9RSipW7RvbP3uLW2T3",
  "key25": "3Q96iXc9PWAC4FstiEjy5CqzANQcHvAjNL7GgHaBW3MWeLnFXy3cDchHBo3xmTSmsnL14QFzGGa7zqMRyfXLmJzr",
  "key26": "oB5NLg2iEHaKWa9g3tSGGtFDtCMPrRBCkw8Y43tz9rXfxPqXTn5AUBtGGVkqBwShjFFhNQDoPvPtpFGhX8ctf5u",
  "key27": "3sr9boodsog2QKmgeNHUmBo1J1CX1bveRSuzFYL6wuvwipVj44uLKKLSX7sWL86Hkx6f6FE8YQtBG4L8t9fSjAFk",
  "key28": "5LzZGcPwcLpZqPPZ1pBG1tdC1XLcy31MMUCwT7WVyum3Z24g9MorLb6tbVKZEr4nQycChk3EiRfk8nLYguL4bEaj",
  "key29": "1sLNzpZmGAXsyJq6uTUcPGahgTZjkQi1vuoRBfg88FV1693vSuhqK1pnoHEn8VPz7yqvgsdZBGsMcAP5aWS4NZu",
  "key30": "2kwRqiiwKNraZMsbMqn2B6eX2dDJzNqF1bMFg11MJKFPrNAwMBNJFeo8smdmPTEG8Ln13XQgSZojUzDarTACT1b4",
  "key31": "55bKxPxbFbAmzh2bQ5VHsfGU9o6JUT5pH3zXTe1xbx85evoS8Yw5finJPYRC5Z5ijzx7rRvJW527F8JUzD4rgnWZ",
  "key32": "4RvjfQrNMwMys8s9ShJgKvJvzcAJWEKQT8tWXgoJXcLULiu7aKJzFFfr7Pv3K4pWXubEJ82Ji4zzJecGBRnUKZbD"
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
