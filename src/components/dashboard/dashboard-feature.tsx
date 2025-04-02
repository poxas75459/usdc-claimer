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
    "3kcAbiniHsjcDZdCZvJ73xdfAHAR8W4aP2nJetG8gSfRpqgyBShrZ2EoKGK8ZoJdY4W7GZ9i62b9dvpMLjrRKSBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtpXe4vg2ieNLyEYqi4oo9hAaLVQnWYsGk7VkdqMYVDkyU1CZNNgh2wwXnjooTRq2kjrbcRsLVX1CCHUmCwJLxy",
  "key1": "5vxcR7tDCYVB9a4urTG3DgtieNGQch2GDyUPhWYPdYm8Up2f1rLYwMJKq1QdGSxsMbSjoTtXahqEkhQJj4hdLJyu",
  "key2": "5vBpkwacSoSGW5k2qDRYxTcqBueVXEXs3otZ6nGbVVLYkx6icYJ6Yhn36kvscEAvFbLQ4eCG2sQmpxMPRWNgAoz7",
  "key3": "4WiyQTWYur2zK6Jwy62aZFUGFYgyGTQCuK5k24FoVLemhn7D1xcGSisGr627L4reQisBmLg2KD5E1hsTqkcaRDzA",
  "key4": "3PinoJX69xRpPtucTgh93gQNvYis5BdctZBTipZjeyi3F9pL55HwSi6sYuRTo29m9wtqQEygPiyx2MHafGZJwkhF",
  "key5": "3DGhkzeimiX1xa8icLzBZoMfYYtmRBNBVmwRpnqEh6eHPWV3CdPJ5xvLQjjYby4ke2hVtDQqMGPW6CLrahmCzX9s",
  "key6": "4TexEZ2YdrakAYGPbRdSDi2QFMfq4sW5wQpS4vRHxxSzgayuCXMfFcM1HLrwDJZev33MfiSEcLDZyDSXxKbieGnp",
  "key7": "2U3mbt5XVQNkpA8MAG6NaKHj7zG4Zco3oBhU8sKR19aCkr7RVMoT8ZxxHT6MsmtVhAFDf32jBFRL8ekyhK9Wdikw",
  "key8": "5MuvoCfLGShJ87WUJZpT1oTsih4gKf1egPTooV99TgAsECMeqbQugw33mqnbgGqT6FJg4ch9Upa9HSiztL87N1Jx",
  "key9": "4oK1HsTyJ9VhZsvFJ7ADBy5CAJQscnixmXXjvTz5dP1J3Ca4Tu1VSJy9K8ceZZ9NVoxRTrYpbjDD8xqezUTkGFW8",
  "key10": "4Zfaezmnm3L2UNk7RvERbigctu5ZkNRUsVodvujCRt2n9NVBSpHeYsgQ3SYFmSiLqtX1UkhYi3x7NzzxFmyRSsrv",
  "key11": "56mi4F55K9Qr8fAzqPzW1q7ZEDEPqfNoo3LNtErDtjkA2VkbvSMiS4hCBucmL7VinHzJURjMrPF1zWzhDHzcJJto",
  "key12": "5gM45dUUpmG4NwWehsVQFNBFcwN1E1XYW8jCZ4WHgR3JRKfP9GJTYpVNgrYg5AMJQbCBeEdbAQmaJ37f6RTna7kV",
  "key13": "5RuuoEEMQHBTW92XKwivxhZmSuCAiGZUhmW8TvooVfssFdaKzUtS1XFiiNAMAAboQpgX8g2hWhRkAXvwwJwbrTAi",
  "key14": "2u2c145WxuKG4bUcpNToxPtCQfFnGhMj7REHdunzvBxbaEUb3778dRchsw34JNHmqJeiMUK26uLfiqymWsEHbGGw",
  "key15": "34SPBSd82vz4uHyokKSeJrnjfLdiCFNTc9QzCKEsDDd2XbmMURcQ2cu2eezmE5ZxpV85XHzroLNu1kfvMoyye3Rq",
  "key16": "2mAKPcdgcGiySkUmvwXP3hKvgfHMm6k2ur2QfvvVGRn1Qth5U4d5bnbJ2rFJ1kyuCuf3k34bZCtK4gQd77twy2JT",
  "key17": "4wVmK8BrTR7c5UEvjdeaybwyGejxEGg2hs52cL6v7rfwsfjvqN7vR6srWUYAv6MmT8qbgXf7hWvqWvFdN94MkcFC",
  "key18": "5ESQM8VftFnSQNzCKu4sTqN8mS4AP3CVE77XDRkEJeP81kUMKUxUGA1fogT6YJvpUrSz7LLGJZYJpWdBXTF7QiFy",
  "key19": "5cfw46W4koYBmcAPxqYJfyWVhYE2iQ5oCQ5B3gbnwLqMDJY6GLaA2SK26xmDAYqP8LgtmbYGzaMB1cFJusxqdexr",
  "key20": "RZDVVGHcgcr1HWhy3EmpZjmShh3qHBZj3c1JUpKQ45aru5F7N16JAAwEcWgbZP6A83zYbB5q8svSgm53AsNNijE",
  "key21": "o2V3kh7rCpvNpDH861f4PGdiivooEtKPeU4yhdx5CSufWFuyqho5yRRaxjeKKa7rqB8MZbmDpypSu2pxNmG763N",
  "key22": "6LHqzJXihgDoqKUV384wwpwQ2KLJiMLQ4KUD8BtYWYNkwfUt9rWqzxi34bCNeW7gPHvHfhE8SQT4TGp1oPML2e7",
  "key23": "5sLCUxS7sLJBLKNayQoBtNy3DMGPKaiis2rSjMByjaNST8FCx8jLQ6Nu1VHPKuZBaEYhpMPrfgMxdjumBXfGrZkS",
  "key24": "3HbtxbLja3NkKdxVTjumzszvY5D2rkECUw8qczEkjSWetYARnDPa4fvhnHBgTRPJQhcsZxgtjzBLrQfztimB4iUq",
  "key25": "5drbcqVm5GaXFCkYMZv3Tm3K1QoUTmEkNzxM5JMdJW1dkupXi8hmLDqKagrCCanRDuCMU8HGzRLjAf4NGX36U8Rz",
  "key26": "3EuYK4wdbUMvEkMdL1efgK3x5XBktcDtrB4svoYn8tsDjfASkDHGdaB7Ee4StK46SQw3DGsd5GtUgKjuUETEPiCD",
  "key27": "5fT2egi7bwPqJWAKSPtkWc2oPJHyZBVisinVtbwHVSH3dV9xadXTtrasii6cwXewHfxZuvGsT9g16RY73e4AuzYX",
  "key28": "EfXqB1GbTAzgZd3jVD7rAQye9Wd3ZtAxBy7v6LG4zamtQATT8kz7HdA7fgjw94572iP2WdX5M9CH5Zta8MQdFdN",
  "key29": "2cd3MEBCMqpTqLooS76SmJm3YRnXMVvKXZVHod4dBgr37oDfMwQWA4oMijKnkewHKN48pEAeRf8NkddKBFZ6jnfg",
  "key30": "Xeig8NJoyNENVZyuit4K2y3cUVaheGJHZhuKoqDuWG62JghCbWo8wvTF456pRfcKGdxyDeMu18YK41jiqatiui7",
  "key31": "25Nan8Vw8MuV1LNibQ258NysXXMZPC7CVnK1tfwEdQBDKJ2HwhPNuhfYbRBiB8o2D2hdNSum9HPskg2EPpanYjfy",
  "key32": "oyUHNvf9T2yqa3WFqQcs7UNmCG7tmR2QP3QsTAvagiXHAYeHtqWnYmBQ1j1Gq2v2uqCnrZ5bPHuew9BDqMqMCuX",
  "key33": "e9N2NqZdRs9F3exXVbE9nxMNaiMp8D4Hn2w3kpgoPQcqfM2JsMQt19tsNv9B6H6b2fTExFuJnqE46Rz6uQV6yvo",
  "key34": "4ZwGc6e8WZCpsCsfLHaspWJRdbjyk39wdYRJgtSxKoefhgBsZSKMZafTCWRo2XaSoMk98pfSKakvbRwVeT6LW8vc"
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
