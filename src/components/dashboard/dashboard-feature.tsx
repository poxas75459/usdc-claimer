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
    "5Jz7ag5ZqqRkEosKWpJuR8ZNses72D5MYo3xChYxhHgwE9EPnnFrDavLuS94fyArhAPgcVrzyzunYAV3D8nPaY5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nb65rRhHwyo9n2QJjxNJyfkpjTiKsb2x5Cc47wDF9ZjYuYMKGg693KxTv6qESPD4NC2s1bA2b4r3PMaieQ4wvNS",
  "key1": "26dvivpG6oyzU98w82kBsxrqVrE3j5inZ8rtgXQPtuXbPA6X1AdezBFfxQE9BtNuTpidwxX8PLLxtDisD7Hf1GPZ",
  "key2": "5Lvj2djfSqxTpHEBWqL357thpKjQYuVQg4W4VbxwQm3r4EVxhRzfJVRJKfusZbsDrvDoX8Yy8CLVnst8mifqBTQi",
  "key3": "2XicKgvhkBwgYVRcKMxetssBcux65qwZQfjfdmaeWc7Sx32vuhsx2K4dUCKVodj4QMCTkZBMzTP4Rwv9XLjSqFTp",
  "key4": "3MwXGLBNqBMasYWyD9n95TnmEyBNLfoFz5CSpUqTzJ2zBXYf97H1q3znHgVFuWTa6buE48dqzMroUa1MVjio5QGh",
  "key5": "p5iALe5g541CZPPvvdCc3qQnvB4Dw3EEo8Eh9VtXhWYgyTca4M6kr75CA5u9JtZXyXkmakW5Zmj8G5PvdVkkhf4",
  "key6": "3esVPBRNEKpR4gW5cPW7TbinvQMB7P1rrkh5rMEQyWtdegn13tCeuKzFMJAfKJEGQzBLQzxWXqo1PkcPd8h2Jxao",
  "key7": "3CaPUQE2yyCRfqDJ7ez7JiAZTzpaGeKncqXZ5nDfigcnvcP2XmrmnkB3kSdKJTBtP7fqRkuqAMpSdcUKALmZ8vFr",
  "key8": "4KyZsHWiD84grEB9CPbRqz33cVxZiJwbJ5DTPCL2UDijSUtujedKsuiegvM4vfpmraAyG34NNoSsoWYE7bsHyKz9",
  "key9": "3EHdtXQzinVhFDpC3LiqeBvHuRjkWtaw4WpCv5tfSBWfwgDrsKiS73BP2g2njfvSkJfbg7Phhe9sPTT8JD9T83sr",
  "key10": "2Zv8V8Xp2b76DPFjvEBsarMnDHynvJ7QLT9yAfyBcHhdFQezU5YJh8x2DGqm7EecBfKXFQ3gZ2ukJh2FEcxoLfiL",
  "key11": "zdiNjraM5hhJD2CUtvZyMLTgeyyihJ9uecvQGRUPHFh6R6237zXBgLi7MNnJfzKAj8EoyhkubDDah6aniGUizPT",
  "key12": "zWz3Za7m6knPokJQWbf7aVMe4oSKLKZ3GhKZyo6RATkUbSVYr3qiCpqXG6jhYdpNsro5R8J3e2du9Z9RjmZ2QpD",
  "key13": "GcGayXQdNpznHQBCMMRPPKdr2QCvwP1HgFsZ1ZYf6Q94NiR6bAtRaj4RgJVzqs7wcHduxApi79dNYxQNpaTAvXY",
  "key14": "2WD6GEW2hXjHpkRGHJr4sJJ3FWCuNGWpuBkSMin1c1DYNFBfEGYo59crZWu5kfGrJgS3aqt7yeeY3bN4T9AgHC6p",
  "key15": "xAgc8frKLmDZZ6KS4YuDTyNkUo8sW2zp6iAT6Q9jk51phAL5Ee7nTBaPQ9Ez427PSQX63Cgqzk4Bfoa2XX2DGLp",
  "key16": "3tcpWpsf7dDnBMWCbCjPxiYiuppyef3g3CZK6DzYsaezdgQgmpnKQi3VEduRpnFYYSLph83Ra6HovVB35s7oWQUS",
  "key17": "67ZEin1F19nfx8dKB3ZqKHa3swAmkKD88ahK8dixLXMrKyNKvEFWW8Ar7Qqa44LuVv7XpRoaSBwBG3uHQ3VgyFG1",
  "key18": "5oUpuobWr5GnpdaAbByTJincvpF5FebGEwEpUemsUkGBt5LvWmrdzemF3asKP83VEWeZNiNyJHRNzHv1Cj95fvhG",
  "key19": "2pTRYbQVVXjJRQEDGrDFge8ZKUhFA2FBzPu6AZ53n9e6NMWeXxaFP6zHDsPDGkNgR4vZ4KjHX5D3DwERdR6DLu4x",
  "key20": "2SkbyH3jDkgXqJrPWuKVV3bSKtyroBdhhbNRHQyWcv5S5kwtHVWbsfb2HiMZf1RBXj5s58T8DQxxjqjf46YAkwTx",
  "key21": "2RMNUMn2cnRSi7z84Y5vALm2hwjpp1Z8tqwQtUg7tVfuZFQXp87YhiXX85WkrSUV2i1UAa5eeeE8Bv1ZoDfRVV1i",
  "key22": "49Agzbf242ftiNrbbjmfstPXSmbbTMf1u4Ek3uKsQjdHrtjECyp6xZL5YazAB6Qihx7sjHJvUk6sbXrKCLfE5jpo",
  "key23": "NjbZmc2jhpSB1vAsmadPeNpFpZTwxkQrULQ13CXoqu51zXbEbfxDxPQsagQSh5vBNtgV8px1JV15nq4Dkh2XwGw",
  "key24": "5YEp6Mh3iVok15hR11P95SuBTd9h2iCPqpf16zjyTWtSqPy3LyR1sjNpL99nWMY2b8vgAempvAexq8bVzTgniffe",
  "key25": "5uvRToQd7NdeXCC741Sr79xxfdEjxEDEfwM5Xq5SnAKAFnGnWbaK7qA9L88vUNkWtLszU4qV4NgFUhi62Ufay3G4",
  "key26": "4p5s2zmBBSFJmf65KTKupoGXqSc9XPeSCPXAokkUq9Qb2kagPc9wbBKMQsSurm5s4y2hggVmReBAstZw2gk9oa6F",
  "key27": "3DLTdgXbqtkihnupKXQy5qRgFLvpjiKsFNPvhF1PTeEKU6Ps9cY87k1JqWHwLkMmUbUWqv8zNJGRdbBbVrYkv5LV",
  "key28": "3RfXgrRyRDCxUHPfYTWCLYKDoMDAW2cg7yn2rF4x3YSG5yrZdHzT6wYCcJSz3jFEzxg2g5Qg4kKUffGhuinwPiwR",
  "key29": "61ZqqMpXnevUsHVqrumGXafZEKrszSCUR6jSvUkfucQc15q85Xy1gJU7PrJXWSTcSZK1UV4dEtSenVB9b3qp5Fc3",
  "key30": "2uwpkTNJ7vTSdQSX7caKcGpiUE4Z6pigdxpJbSbKxnBK18YBAesVd7mCxh4t3tq29K324kNBwTrVSYktN6QcBSoA",
  "key31": "5B4RdgstGvAAjZcaGmAKB9LmvM1iFo4RYFaKczsbJfsNm5MET2fBBuvbcSWo9iUhY2M6gALpfusMMsnMGm2FCNTk",
  "key32": "48GPA4AWdbVD3LwuYyKHBJzQ3d1RUx2XhCMUVdHDfyGFt5pX1TPKTXnr2VAzavcoEuRkzA5Q83XwzG9fheBrcPY5",
  "key33": "4mh1V2CejAyQLgJZQEdUuWASdK499vHSjgfER6aY3Lxejr9ExmJZrGmQoTDVrVEcdWrpAVnvSNUjHhTis7wYypGr",
  "key34": "26L7Cxac1gXas9aUd9B4VyqoGbymojNReV3tUTFa9q5MvHjJkRqvbwin9HXVGHymv7iwiSnjitRTVwQXTaRZYyCz",
  "key35": "2N2dUeAbtpVNy5xpkgw5Ud7j6XfjXuwgJeBKN4j7GYpYpuWPSY9nAbYqXoNmPBtzDZ5wS9ZFRUAispcuqNuKk34G",
  "key36": "5DknLk5E8QAVGVAh43ejeZc4wiVZQs3EQEpdFUGZ6kgqoq8ZA5sDg6Wxx2xKyKMzREpxY9jgTDcRKRRXWFQQK2co",
  "key37": "xR3ubHMZHLDnTJQmDVLogtH4bHhxuXT9dVMm9ocQRR4KpQrcTD6uuK6v8REABBAe83QmqTUMgvvwFECULxAHYXn",
  "key38": "57XTD4ws1SVxgLfuHRABCYm2sucq8mUFcxFFCkNwN6GebeUWYaM8iRzoiWkC4jTUYv4yw6avqpe3pv1iW89HZszR",
  "key39": "4sCpbFRreewtFwRW5dchez6redmeYfAYhrJMwr5AzpDzps4wvt5JBFPcCe5gGeVEWUtuxYTBi5Z3bTxLGuNBb8sb",
  "key40": "2KMhtqJZug6jMqUV5VaaA26smqX556GpGaZuhF9zRNuNHSrdgHzHm3xFJ9athsUfNnaMWkay3iocSgu8JPGUw4fB"
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
