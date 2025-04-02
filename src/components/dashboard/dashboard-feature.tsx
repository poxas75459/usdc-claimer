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
    "QdcNRgn456GYRCLTKDaQakYGaNoaz75gwsxkqNHSWc5krqe1MQsvuPYUYjjoBXE3fjHFkzum3EMyULBHYifgNCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCCJbB7eAzGk1wvUhiZ41NAD4XQqViWxvsgRR6FskbCwVmcdN8bH9vQcfNDzXhPoejeax2mVrYLufBnDXC894Mg",
  "key1": "3riA4rQRb9i8UBedP6nL22a1mMXu7rDYwvE2pKXwzrrhRBhYbtQBtRZNFsZFaEte6CS3EBdmr1oba4NaQ12TFrUS",
  "key2": "3mdBufCJYLPrvzJv4wznnPnQnxFps6bxjEb66HhZc9LXS61CjubS4TXrwtgFDR6tDncKYiu1chmhdiuPGxPhMgAq",
  "key3": "HLtoaFDaobYGBVCRqVrWkjxpunA57yUqhw53db1CgbgK6NjThFPLhsfRPZ7kz99CUCi9zohWahKg5vNyY4fSwMz",
  "key4": "3p6XoDguzNJWudNvebAJHpUNwCPRbDavN1xtnMnAALxTshJUG3b1rvuLTJSkp84UpuPLvhiRW8EvVgC8EgjpkJ83",
  "key5": "3uSL1qcEMohHELQj8d3QbLPiWSktPn4AfiRVib7fgBP1nJbCG9mwnbFC6BkoJRAqFViGHkTenY8NPuM2ErFf3sdR",
  "key6": "3GC2VroavrETdBZNZeB6SfQLQKKfc3zLon5MWwqa99VZNGu9kxxCKYfGigU4JpTieeN992e8x3RjbYk1KVbPTmno",
  "key7": "dG6ceUCSQ3ehc1mv2rF61uToMQc1fqot8bjegcWrc52Uj59wypCRMhonkubBzJ6dfv51R8QNf26byLPXpNmErkh",
  "key8": "FraBK5V6qGAVpSG2ms4hEtcwxGYD8yNjN6w992iLHKUGZubaMSBA5wEsciFAF9avTHRi99WWESGqAQoqyHodGbi",
  "key9": "55ZkCj331FQuJTStEGrbv6dBn74HpaBy95tMeLHErh72XLLfZ1Ns1BnPNq3w615Ck67XRoNxkoG6yMi6VTUonur9",
  "key10": "45HxsHvJGgdSWFFzqXDdcsrBfkCo7Wxypyxsg4ErM3BJjX3dwqJwX3jDdVNTSXXQQTe6RvyJ3ugYVZAvyocChntX",
  "key11": "4bVt3k26oXmki8TkobA827EHB2ppYbFCXdCXxVKMXMcmqx6mQG4p8Qgf7Apqiki2eM72jL8ggu9mjFi8qnJJX5Ze",
  "key12": "5JKrgZyysW26VNZxduCFGZ5SeF815xxkz4mXgxb6pqPkhNnGedPSL5Gq1sTWRY5WNnERpgxPwvSB86BNxTf5r7n2",
  "key13": "5MUgMeq8RqBWjQivfqrM7rBAcUa7zijzoeRVpFoBn3yQSSKwJziNjn69UaZS3XnP3AUw9zNx3KtE9ppAcyLBMSWB",
  "key14": "52zjHzMnSdfPELZcSGQtDn4dTBguswBHYZAG4aqpXscPPUMBFmDF2SBqKKsshNdB2UVcTD7ahboWyKJh15fybjh9",
  "key15": "3VGQNeJc4jBqmwYsoVMn6419mXfHbXfKjgDUG4Ds9hDhNfzsS5UNGG8bwxbKQDj4x93pKdjJR5PNySudXDenUP5k",
  "key16": "5GtYpprK5HCiJ5AkHDGZVpngjTnSo9HWE54aCPdh6mDYvGnar5WMdLVZ9UnkumiwSEaN6UgyouC3qAZwFa6iWZVe",
  "key17": "5MVxyhoW42jWmT3ouEHPNgdJHMyKxXbHw6wrBsw8gvfrpiAQJowUQG3uhjsdtHtg4EsMKPtohXaeWmAmzrMyAgFj",
  "key18": "TVxs3JFJqUuNRYSHaLYgM7sxZXdsi28H3qtXFMeoimtKDPmDqV2hUwNNHwtZ9MdA4MVJZZu2xZ6y9pbvF1ZSQZL",
  "key19": "3DCJcgmMicT96zEeWtcap4HuRPLcDaR5fJzgcAJvfbwjYvKPMNPakkKCupSvizYLXH6Eqs2WpHtgF2YhLRjE8DcP",
  "key20": "3p9iJ6WWDT7nbdRUgW3crusZjb5qYKPmwzUTirUdLgBY1eiwBBdD2Z1iB3EvNuoxTJfksKyECk1BRmJTQaQEMpSb",
  "key21": "4pwdScEXje3sW2RpPhHt1hwBGtxoUaqHuGD4jQSTpupnL7djAbW5RbEL8C4jXhLfBQ6iFQDmveZW5w9i1jLaeHp9",
  "key22": "4wbh9rXTnkqc7AhJ3GKACwujk7PbpqcjazLLvy1hwtwLS2p2TpNmfAoWSja69bxzTR85A53xUPiEKxZenMDLYKZN",
  "key23": "D1jVYtVinRRfbosacEcNewtkn2fwUqBycLyotjNTEcKaNMJXWiazTzNSMigW7PcudiiYMEGxLn9b32dyVgJFhaY",
  "key24": "5As2XgPLsjWScepDiVo3cWt3apxbxs2KTydrrCDqLcxNr88SnspEY6yUthj5QUNcincNWHKLdmcP1vE83CUnngtJ",
  "key25": "65pTcgkvBd532YMiRDrgJxjwGGKdo48f8eNj1tzY9ebZS4WVEhrGCZ5F5FtgpustMeQDVeTQYYXJmqDgsY3Kiym5",
  "key26": "xDhj923PoDpScjRU22UQQ1629p5aoWuc6LgPQDxWXYNLxjvRmdb4cr3xx3NYKeELqiZayaVP4AcX1hZEuQaiMwf",
  "key27": "pZ74UNczxJ2iA98eBQfHbPLcNT4P1GYSL12Va2GqW4YEyuAGTXySmqnmDVLKgQT1c2fPDyHLm85jgrAcJWx1ky2",
  "key28": "QbVQ1yZUsNEC6D5ZJXbwh5SRw9wmZ6yu4syjMmxYzNL3Ahm5P274oDvVW13BKo4Trf9WjvanQQDDBZLSRRLt2Ef",
  "key29": "4Qw2WT7b3mT6a3EVW3ML9UgRjyYvdBoSm2gUUaVuPREEHJnVVXhQMwL2eTYH9mkuBRtc7n5hDoT9bNqzG3sC8mrv",
  "key30": "sJZXC7k32Kb2JNsPKvAmkoPqzJoAuVJoV4LMjtavoEYLGtwhKxbog5SYrCxKaseHZ4mEzVgV18nFXSN4LHVtXxv",
  "key31": "3W83awiscT6Ppr3nU5HhVwWBpUYDfrLv9SGt1kmzvuACjL6Kq5VLhwej9uqto18StDN1goLdH8MrkKjfhnbZHrJ8",
  "key32": "4ZeMGEG3vS2HG5rykEJtxPZ4H6LFmDmfZGkv82p75m1eeSx5ssjKeNNwe4LoNJ711hnZtTLRDJxnjzp7shZyhcCx",
  "key33": "7yM9PpX7q78ijfef6fhP1d4kn4PujkAr2yGQzfkpWdFf5m1Jc9cGT3uzyUbtLPMTfaFw5YyJ8wggRc5xhRRSVVy",
  "key34": "5JTCzVcvLk7a8s3nQF5p4246TPEHMquYW6uRPt4WeQqtN1ygh1ETwNw74KeLg8WSYtLp46NfeWnYcDpPXuQSvqbS",
  "key35": "3ekbvAAALfCmWDbdWu5DT491kHX8v7vp5wz1Qhwd7UU9WcVBPYqGzDvvzrTyEPxL5Q6U2cb8XbPRL8pJYdjGm5Ez",
  "key36": "5BVjFjCKuDTvRanzDqkLha3xEshCfMYQ1LxXpkbyGpW1oTAupwVdegdgN9nU5YfRqzs2BMeMfPpfQqUL1ZnFrs5J",
  "key37": "3S2fRiTM1cXGFf282QrN4xJXdViD7uAtzsm6qNfKCAfKZUS2CQTvoXQi1fBWZeSPBm6685USNjM34sgRX3iTgrtp"
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
