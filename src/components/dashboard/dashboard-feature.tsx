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
    "62gny82t2BKUZ9Gwwppw4PPcbKJGZkaxVkfT56rgJ1Q12cRxrWD4TVTfAy15oY7MsURGKRbMCtExxJENWebgHKPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCVxWZ9eJtgxycoFSN5A3umeJ2FASrwVXXvdtMVRA3PyhVbD3gZxAyhk3fEJ5fT3jDd1Wh77VA4YR62feEMGgsp",
  "key1": "5q1gGH26iCdFjwfVRgS5t7hGN7pdRCBticZtZrHFWdVFUUdBSAgfqGCAHuf2yMpFxYswrNf8Yg7VHnHtMW1tSHxE",
  "key2": "45LFVQJRVsyRczpPCzfJySRQJabSAevt9orsd4wZnuv43csfCDThS3k39853vzYJHfdtBaW6g7Q1W7XWu7MBVLNw",
  "key3": "5Vk61iQFe1tGfgij4jD2unHAMpDtq7vfhQFM7sLX7tABJt2a868qLgCdGdSEq5fmQkwRfmTgjy8J9QNJs1AvqUGM",
  "key4": "3e3J9nX2Fy8fs1Btg7un2FzahNveqJ425eqsnL1ZPWxdSV5BfVNZAvVfvg4pfmF5cPdVdZJbFjNw75zcimaDaSBj",
  "key5": "qZovQkAUQqwWDBnDuXiudafHrRMGuKCp9Q9nhFgM9g3v8wJRTWAHVAvyEn55qjebENtELj9mmcg6PjCWuP7n7Eq",
  "key6": "653dPCojtT8Z8DtGhYMkXeoadF53sZVrd1pvcovk4eEeGpYT3noKVSp2apoQ3Ee6pzEppbqRGUbB8TUMQsLj5DAR",
  "key7": "YbDjy7rbH5b1rAPbW1FSrZvLDSPm3YjqqXTHF4nuv5QKhWnw8V4aTjUGjeH6QowtYfhuvsokmJewGDzgZJ6TGQt",
  "key8": "3w9ueQgVJLeHU6Ycw6jPK2C3LDVQ1MLmXCEY3K49ecYG3kzUj3RJhVUvFfUiAP7XxDGfj6FcxuYWTCMJYh5DpUx5",
  "key9": "4mibMojNMFBxG6eCJMKReEDnMuw4KcAp3GPcGiKbo4wTXzuJkp8kiqh3mGBP94ULo5LFMST3crDmSrxaaKgeLMxs",
  "key10": "9mXdUsewiPLKVsdQWRqv9Kio9UG2X2VkKZUy31hCU4BGSXFcEYo84sixmrxAnJuivGnVfNYSn8kquZxucUrXXvC",
  "key11": "4ZGkvWRe1fJTfpnaen82ajBTwRaos2ZHrFeUSZhGRbcEFvMAmccifviuafMC7NTJVtL1xP56A4La4XnJVhQ9Rkio",
  "key12": "2oEt3fRhYiqmWtjyAiomdccF298Jn298ZYDBNwFpMTuE6njU9K1X377V42KtnXS8J6YZXWAnCftrDpKWmdWqWmCs",
  "key13": "QGqGJL4h25wbUU1DAzmciTSaBnHdDYV7aj5XDNyccHcj3Qtj8NN7Wczg9nBHdq7qFBVDJssQrRaC7gT4rQoX4Bv",
  "key14": "38t4VMv9MuGwNSJVNn22YvAy2RNP2CmJ4Jei85hnHiKtTTRrxGPQhRAopcu82LVYxEvJn9xL5s7cUt8kmbMkh8SS",
  "key15": "56EmfMWcRNcit9iziuP9iTLTPuSiEEMcBYDbEYhaGTRhju22etzDq8EEf2jGGM5GXYKzJ9QqgqTCntncdKKQc5AG",
  "key16": "3qWAj7DeuWFmXcCHwxxj5WAe7kAVUPc96xqBt1fua9LkXCetaqYLuWwC7VEeethTR1qrJ3GXxFJrFhQB6XLYA4fV",
  "key17": "2suiHfJuuN5X9ZN39yBuWCevemxwVcca7gAks2a2JCiTeMyVGwvZ3pJHEAXoQ5CPwhUCJxXCj2mFkjeZtAtZa4W7",
  "key18": "393kWDvUeKUgaotFLC5NM7VWF8rrUNVtA9YhHaFohYq2YX5RdkNx59UziWY5EZ6LHiwpbEgnGCMTghbUA4ArDcgo",
  "key19": "4DCvLxxHZYyd6QFjkB1ViAXK9E2JZrv9yaUNmNdtX7iGKxnTbCrzQLqQBarKNYX7g6kJxfChbKkRvh9DK8zHF4Ty",
  "key20": "3RAYuqUaHgUmZHoo45y65bxCXcmrkeyyjTwcY2FJyQ6RrRBiwz7JSfzMjtYxGp6yRjo7U7xeWiygy1iAGfUqqhqa",
  "key21": "VBaWkDTQTJJjB7ndKPJM3ABmfmpJNkRnzKKPYm4jRBBXarv6JZPkYJBcDiqjXe5o41ghz6owhHo3WaqWM8MYA39",
  "key22": "ZKP7MiPyGqs6dx2KkyuWY6bpJ9AWUB5WK4UfUcnwPAYZvsHwtoPP6PeikRLwyJhmWwyo3tuf1YMCGkuC3VRv6NN",
  "key23": "4HebGxXoo7Ms76Vyxj4EsoRhvWBiTKXTT5DkBw1FBqZvDP6Yx9wzdsgRLTBRgV9QrMvCMPc9CV1Pd5AvZeR7hx5a",
  "key24": "3wfxyBmZ7Zk7JvS8EQgQRVgQS633P6mUR7qn4P7zyULhaiENzonYwghfDKJ69tJmTXjnc6euQ5QSApJ91MkKsZC4",
  "key25": "52wq1wUmJn7B5WXvR3Ku7XucvXiWvyHeMLqZfi13kzsXo9nNSqpyG1GeayBR5WC35g1qrg9369oe5Yw3APWr4uD6",
  "key26": "41TTTEN17hjmvc6EuWJMySAswXLrkcQPPU8sX95dRzqdfqX15JBVQ1kqKGTKDBik8GAUK22y4rxdgtv6UvNCiDKz",
  "key27": "4Hy7LfxGqv7ym9qdEHS6wrucqVs2aFLUcEeZfF4AgvCDaiHbhGXF2h4qqGEWcHiQdVmkRcvUs8zNXMsuzAwHy87u",
  "key28": "2xT3asdVW5S8SZJyPXBRvZBMu5hZQFuL7WhdXEMNqXJweD956pRwoYeqvtLupc4znRrLHNVLLJ6Y8TgtCh61E5w6",
  "key29": "R6Uc4LUmHsiC1DwBZU6q63fGCcTaQSqtLLWgDWzc4rxwHcLLSHPxknvQMbtwTuTTZXC65d1XP8WnEJhq6kt8u1F",
  "key30": "2RM6eGsADzMyZm9qzeW7KQCEeeagST8P3iWyU5iteBaqHUPXdFe146nVGVJhaSiJxDZMktfxno9UiV3qa12uUYtU",
  "key31": "5twziWzavFnVegRjbu3T4ipWqKAEN4YTH12aSCPgf65eSyn1mBfxukN4LsGFqzRfzdUSkMBYBkQ5betZ2GppggqM",
  "key32": "4ULee2nw1KshVwh3TiXNAZdwg3W4ASTypVuWJ8yTvxU3HzFVDLUhaGCrG27PqaU1RQPiUsKDSSX5EyMAPBk2o2Pm",
  "key33": "3SPf2yU9N2gSFu9iufG7QXMXYf2e7nenNCcwFGYUha8ajtQz7mdvDbJG1n2PNe8ZxEvqDVaXZ86ovCykvUBpKDVL",
  "key34": "22MoW5knHb39U2w2PHTyb7GsoG2Hsk7bfeXsmthorAHhXSv1V4eSbVQogndDvYffvj91nUeTSPsk8EPkvmLiMhwS",
  "key35": "5mhaKknwuazaJHJYs5APgVDrYpDEZbnkpVPHRbuSpTXyUT8KXaGwSagtvBj3nf7H1A9VEufKsVwA5X6rpMSiJnSt",
  "key36": "4zUtYuFMb4gKrSMdsJn1m9oHSG2XrgTH1iXrUTgVpqPWEuAZxr4vjyN73MFLBPyRfc3X4sbKB5enGRJBsiHeGz7d"
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
