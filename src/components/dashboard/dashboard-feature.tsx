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
    "Z1pyb73jEhWSQ79fMW33vFSDEcnFnE4uvJT3qcpkx33nWDjCvNGnFXzXYbTBvz8BM5W8f5xgqvwdFgy7FdE8hQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNgGnwHBwHSoiWS28Trc9d4N2MkqFnYer4BsS7aMgH5huZR6NuP4WT7Ap3pm78QLtM6aKXNZMy6hfGGNdLmUbN8",
  "key1": "2BebHavwcSBxZoCxAnMgmTXFwEvg2kAYFSZMjpU52kAVoTkXSmQj6PhurdTPWPzYyroZh1cxwYKv5SVEqE1uwbmc",
  "key2": "jfUrV7CJTNtgUARAZVo3w2Mp9k3wVsyCb9EnrQMDpT5CB1wtx7NuAAH1e23HPZa31Pa4CqDnB7aKAhXXr6PTjc2",
  "key3": "3Lt9TWCqvMLsGSfQ5sQWyHREVwFhadiAhv1iaDRRG55LqWxD8fEe1yJhCBdR82EavKjjvgptsAVurAtR9Ls48b4Z",
  "key4": "5mGq268awMhxkFNmtXo7funWAonGfHCv7dyG2YJwXgdM9xt7hYD78DNeAoJYko5kzcW7AuAvmhgLo4Ro6DbWxWAP",
  "key5": "fqvyQ9zNAvF27djtyiJDNLPCRqtvob1MvwKSU9CvVs5NgJ4EYpw4RD3BFE9Hu5j9SwSwwS2whCGwoAShPVKzF7G",
  "key6": "5fZvmqJo9gF3x3d5AjxyV3XcT9EqCGAqmeawzz1jfQgv2PY7qRTQrCMXkgjT5B3MvXp41a6nBMSC1ftduekhqTdt",
  "key7": "T7ZRWcDL62LepN3wozV4fXEjvzFFb63SvEVvxRCz3ciKcaBUxiuvgrUAZU3m2xW5BgGa43Sf7Ygf2f6oTqK7Wiy",
  "key8": "6gaZqDwNsVY3wsv5nSN34xbsVRjjHmbVdEjNJGrPoU5qFbTaJkXTqmbBE9EwmnBtpqBYbs1PiRxKYMaB2SFXMv3",
  "key9": "5HwuPybVYiYsxtrQRttEgSHbi1VNEbncCTvNCJPNenuVaPfgidSHXM8RYZyW4oDwS1Do6Rv4u6A7KtsSNPWTPj4i",
  "key10": "2i2SnwvN4y21Ud7DJkKiMTXB2wVvKQRLoZskepfirwmC3KB7rhZamkHXsw9QLacEreXPFwLtMVwD1LsZ4oEGjjNM",
  "key11": "5GkDyb3cYegv5LnwR1wPXvukaTzdxCj27mBAHP74o1reKAfNerBLAbY3YA9mGC3ZTL4moNNuouh8hvjeJyqQ6Aqj",
  "key12": "2X9uhzHteJCncDkNZv6WvWqxDPU8BWqyjEuHHL1PoCZvHhCocE19GMDYC1CSAdcRpQUnxCTKAu4gafoDFDSoTAoY",
  "key13": "aerEPppqeXkJz7Nw5MWAXKDoXR1eGu4uJNLh713xkKUxh97hCdfXWDqzkj2nbSR5d8jkdrBozHHMSrNb2daQQu9",
  "key14": "2RKHb63ucFwQQKMHwQcmuhuYx6x6P8xWhx2DXZ3hgLjjbz6JtRz56nVyZG8LKZi6VS6ArLA7B3zPYRnNBU3EYYab",
  "key15": "jxv1bfqscjMkV9BYPc7JrEAcm4xY2tYqnDG11jyRS3ThR3hpBzKXAFXDfgjJuh8rq1jdePAKjuPyYGipfQyaQr3",
  "key16": "2sbNLPmnj2uFqcQA4spbmcMYf846c1VRq81ovfibXZxMM1hVVrZYeZ5hw6JXcn8FxjxYLd7K9EdZFJStafuCHyjU",
  "key17": "5FKfFnUsFHaSNX9cN1qnn75Qq8E6VTK3GPhi4iMfotebrQ77cWgqs2t8uZ1SCmfeSy1bQv58Lxo3TXaGnpCiQ2zj",
  "key18": "y9HScd4JhBtbneJ4dgsAF1Tc8tEcWgvQ85rPhFq3qnBiNWT3FBGucs7Ejjp63R6D2MtftqdwJw5VkpfQ6DReZiv",
  "key19": "2TZNHeNnewHcFU8CPcADuFQSm9CMXX1BTVnmottJ4dqj6FV2o4z4M18o35MhqzqpNSDRMa4aJEsuGRm4aeKW7xmX",
  "key20": "4sZn36syxqiq8b18XWoYsh526tGeFC77NsU9BUNLvkPXTfkTLowHkQodKgrViFme2QwkGY2sFB6oVynqqn6M1d14",
  "key21": "3z7RS1xLiE6D7amfb5ZJZg3o3vq3caX9gpfhpsYKcCnGpVHAXtyGWTztW3q8HyaZeyXv7wfCgDr9ArjyhFy3EBgd",
  "key22": "4VoQTmCSEu31XCfHudeghz3aE4ZMmA4kRT8eJavbE8DpoWFbxxSSt5Nb9LWKvzWRvmJfv53zinjpC7F3PB7XiDiP",
  "key23": "2YbHEUeb5a6h4zC4WJYbCqUgfvxDojE4T4PBodFoCyHWerAFBAZDKm1qni7GL6qyZj5o5dVZ8xEMsQHK3Ang74du",
  "key24": "4kocyHzKZwbVsgmzEXrWbh9wRp6nVZNkLCu716og5mAPdRYge2f9PGk1XfsngMTgXiV1P5T7cH2BMeFqT626FX7",
  "key25": "4zb2C87hCcLuj6NAFufGcHAde3Yv6CFbnd1TR3aDqSYUdKPcFyStxrcXvAVg8P5SHcf7a7CnesQovZaLAXQXHftN",
  "key26": "63SXfw5XPWs2nXnbgkSRggH2qc3cANCngmqRaAQiKzJL43GNE1bRxRYsMhubgdH46iDTJgYGpKSgRVJStCUWSvuA",
  "key27": "VPbXmSPmQoqwL8HWbQv1bGE2KDZdwxPzW8PcWLjbvkGrnpGpDj4LgzvnkeYMKEw5nKuQSWP2d37k8F3WzUSEQi8",
  "key28": "2g374bimapkgdsZHCTcp4ALRbz3mi3fnRsWZwxCJD5GphmA5sGZWDQWo83zs3NxVx7Rd7Phzk4ZuXd57kTPuE9La"
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
