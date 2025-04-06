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
    "3kytRJSQb5X66e6dMh2oyeuMKegTBQWNAe4hpwesAeYqMFzH7LpwrgjXM5noFyNGs3E9aJafzJUYosWnewZeGK3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Co9fuLtN32oMyx2U27LbxWSLPwMTBYjWn3pzNriXNwX8M8P9ZAVHztaczX7waE1Pev5XzJu37KcduXYLa5Yk7m",
  "key1": "2pmKSGrrcSp1LHvJ37BpzJBQWnAw5SC5wP3nQzCXZXFBejqHV6AYihy3aSUvFgoke9SaZNieiMiNZGEQP59QyLVW",
  "key2": "2mn22eQEZY4nfvGiWh8pPD45cd8RqvpKBm4uccz59f6MQRKHpoPWUzMLQ1up1cL7jEEjcd9VBiuZNPjfhpHLRBcG",
  "key3": "di5yDq4mwjX1mW67DRZFfm6i9CDkhE6uesS5Ej5FLqy5CQmRUBMkBtWV6JDCPpDyzcYyjZ89RxbV9Ls2kPsMb7j",
  "key4": "3k9Y66HZeNmjEwBcGeCXpGVCKvdrtiYGKVrXwTbuFsgJDjmd6Eo4xyMU7vYSDhCqcXxSGUpc4PBWjNRePWAvZrWb",
  "key5": "WF5Z5EpNkLSXwjDAraoQ6JL8LqSBrbGKecE3yFYGovzwGTtMa1ZXrJ6y3PvYUoMhd1PStRCKDD1qCYAGrfZ2mPh",
  "key6": "4uwS83r6GDrmamYpzAL8XdLJ8RZLFVH71UWVas1vKCF6bqbB4sojGCWzFLSmK9mZCVpjGhkWbPG3gQh4N9X9yDYf",
  "key7": "3qtHeXxTUmfNWG7L9JxkvDC9HmZvJdVYJ54qwFsuhnLcRgKixDxyYZJZWA1JR2qNbuKUXAWqppidS5F6MjgS73Fi",
  "key8": "2xodNQC3NZo8TLWp27jYPHqXcxYEBW1rTBMCKfx7XtArDDYxq6QWZSUzLFcRTBPqw91HkcX9nxxSYgv7NXEC1zv5",
  "key9": "3kooDojZ9DAbGbCgmxX8CHxwroPB5PipnPZVqVuvk9tXaBaJJkRDLnJ3Vbnv6UWcEs6C5hRYLb5sgWdgxjviq93F",
  "key10": "5u1zjRmcUTokYEazNFeftDLnHeAHHj9KE4bwkwmuHssaEuTQWJDpnQjYjforit1aMCMP9TRd46o1F98WAzpFtatx",
  "key11": "2XZz3Mo1nY8bQdXUPKX54wxBtWkE71jKdrxW85cLoEGd8o9gxVtxPRTRURi38xSdTkUYhFmT8QVh5RUzTY62E9q3",
  "key12": "4zRUL7UG7tcC8ZE58dHPoyPtPkVogLnXUWim9kJPyaQm8pYdc1cFZxqZmVdbz7bY6TTwXbtKKb395woueM9T4zpa",
  "key13": "1a9FxdHF9cKovhJ5GrqdDQViZfWpSx2FJk1BQ984FPip9TG2f8Tpv12X3idiyXxH8fDk2Kej5hmyPtjw1MYQrhg",
  "key14": "5abqUPWFXEchU6YUfbjQpEmhHPCF9iSxSuHcoZhfV7iMcM8ZAKueq3szfULggq3zsT91wuLXLny46trg3eLwMQoH",
  "key15": "5kr32YVbSMB595jTNEXh8ph31NHXfVKC7vBcKukYKEyBwQetuZ2cHK5ZrpasdtXcpmkrbLo2Ss3WLmKopcJGadsd",
  "key16": "2MR6K8A1kShV3tkx3NkKpJrc7dkqGp8ZoKPoYgbS45WfLgi8TjsKYu1jg4hS5NqZ9pCkm7rB4RwMXoj5cCgwYFwH",
  "key17": "4vgM6n1CWs7NbGsy8KYYqEzpRexiokXB1sCgUyjVkgHg4jQFdmK7Yvo5JvokR3Ef1BNk3kVXmiCjVjR2eCq8MDZX",
  "key18": "jXmV2keu7f4LXhVKYuPFYtGKwsjM531VXGZqK5coFtr2yKYPFuMPJv9ViMFmreedZ3R4hHDdMm4YtLJ5rU2Fq2Y",
  "key19": "5W33gt9LHnjXPMkB4oU7fW6fk64u1twXYM9E3wkfLkpzEt3qNXjSk6va1CFucUWTeDYffAR851XuJETTGzDySbYX",
  "key20": "36joPLMBUXa9NBS8VStWwswLRdZwCsjv7aYsumDnEHZ3XiaipT4atmeZJ6jardG314tPTz4kTCUfNhxDQtqmDTn8",
  "key21": "4ENPErmLMXsQSQ5GULnWm2e8BTWfKMHNkszpULCnU457qYdeaXeSzApU4vUHbV9puq4BiZRb5NWPue6HS6A8ZsSm",
  "key22": "35qKzQoqX4qW6HpHk1p2hyKr2ZaRaQhBt7EDG55BSFgFiybRViu48YUuAnxMivpFkD9niPhmW6BSaZKCc1ewvvXk",
  "key23": "5zooe81mvXDCbJMTa8rJd4uTv7RdG4qa7NBnrePvGnFvc875mCKyfBQ7NTqKLiBi2kmP8sxtNZrkFeqXjAX99ZJp",
  "key24": "4DkK5X7DXqkfgP54imXR4XQ5sJN1CwqXDNCZE8r7gaX79RRxhXk6S7vS4H2fgm8Y5uiDZfmQSPE8m1mYixGe3eqS",
  "key25": "3eYmDDdcJL8SAU8REJvFkZXHRPfmp8j2dM7yHPrmAvwYcNdnCWKKF9zKDn9t7NJLMgHEB1HwJi5Mj2EHCWMLow7C",
  "key26": "LkmJm3GMMy5uqK2Ed4D3amWY31yr7ySwZeuavsoD2JexnVb1tpnJzZyrvKPikZYx6qhPgDFwxpF7zTfWxh39nRx",
  "key27": "23fazN9duVKp3aUJiqFzBr9sdru5NqatcK1x85s6mKWNAUKT4abUPwxcnE5KDnCDxht9hZFxGcPzemZugEZBVcLx",
  "key28": "5V2PPkGeBTUWiNV5YvHBVbvrdFYKNK3RoLTnCip8CDUoSyPWGCwywBQxvaScEV27d5YGyg7zs7t3jYBoAHt1FFDF",
  "key29": "2VshjNgiLt9bLST8BLnMGsqu6Lfhywdv9FuKGzGz4M3FfUQthyntDPCyQ3rwNMWjrjBHZ67kGaFTWBtqMe4XUx1m",
  "key30": "5NnJRewJcJBiwpTbyh2xZwoKTudaqiSB8QPBsYWCr9ZgjpC9d9X5QAGqcCrebcEjUC7ybKShrtrXLSm66bG6WVaC",
  "key31": "BELtgc6dHtD2SmW4eYD7vLPH7SqoYbVGBAovftzoM6ut49CSZRT4FisvvFmhP1bE5rU7UBFR6DBqHDwmt447vaZ",
  "key32": "Yf7rT83axkyvfAZy76sPjad8fyQdTPm9xwvkzRnBMnVAzhuCApCTgPf2tzDFb3ZvmC9BcNuw92QMzAYn1ZJUxjo",
  "key33": "5rSx2xXi2U8whrQnzD66wdqZV3SEUQHSL9jyftfYY27nzHGaKXmeaHR9pLVgvSXLyJMwZzk9hAiu72SGqXPoXyNg",
  "key34": "2hnGUFaeEnZEnk3gJvxp52HcKyQtKbrFFN81KDYcwAm9seZXJLZv1z9mE683NHurCrHBAsBKvYr7k3GEceKnDLBM",
  "key35": "2koFLGX6cM28jcHRyQbjjkje5nrfTsMgkPeqpJUGWbBka15ehKTnFRPxM7mxAo5h5cJKYA8Dv78JoaS2JQGE3G4A",
  "key36": "36TF2nFqNVfipbiRY9LT3buciRhWzwESBRNGFMYzT223Ko2RnbuoFA1wyTd37x5JA86fTNn2tq5heMzvbR4wFqmf"
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
