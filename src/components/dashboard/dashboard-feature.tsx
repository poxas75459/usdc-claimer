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
    "47mxFiL3Q5seBREezSCrUJ4evtbDLmD3nhnbNgF6JRDsrgh5UtwQFqMHowRC5kaFk1QKZ4VpPG5gqwgQzATkBAW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZ1gk7f65zBuMZHoqMUTK93JqdjdfsJDxFuH3YcSU6Mab2YjGCd54ExgdTAYoqNXxMLkV5KVG5ZjzzFcRv7qVnQ",
  "key1": "3hY7r85tRUYJTNUTTiHstGea4NktenvFX8K9T7foZ3Dvc9rnSimCzkceitpAViBee8mgmayhzX9uosASf7JY4Cyi",
  "key2": "4hAjqqDWG3X86iSNmM7zyvWVSZw2CNEBcGykDBUB9c3zC2Gjpmh13Z5ioQhnoyKxzsjABB7cZm46fBKyKAh2aCsR",
  "key3": "4tzR5PBkLwCPcxGqrLDEwzgf1DbCNXBK8uwUKhswkFrx8i8wepDPTzHt3xVVhokEaA4T1i67EwtBi8g4yfR9aqrF",
  "key4": "65XE5iFczoJ7jRKeMoxoSGa4R6kEMCAYu1XxGvaBsjMTqsajtieDJz5EendPaaBha6CVhyWZGrUczQd6yGuUTzsY",
  "key5": "4ZBoaPfvJg9jzUWDGhwqv4XPCmjGyj4zdQDG8AHUHB4x8ZxkULLzdexXZswmwVgQuEyS6nHBWAV5madvn77GNXHC",
  "key6": "35jZoHeQbAaHfWZy9VnCU13wjVyr2tafNP9rXhHL6Vi1aMN1CETWDNUCkFbfuNith1Xb7YLPPHVW6Y3oix3kJ9oM",
  "key7": "4XJPth6pCrZvqJviATZQHMCpmrnMwFDiN6XEnuHy3ZPDhot61XqCJmfhszFF8YC5dKrtrHVxMqTeYe4oKg7DTfyr",
  "key8": "4MbtZW8jVnDXNEq3dR8sDxgVRKMHRqDPReurTPoLCiSDqKQirRByduJLpAuZNhLDMN5fVeqKqJtQYby137qJN4uN",
  "key9": "2Dm9Ex8LQZJG6smdRx8KGqYws5Wc9w2fCCsy3mHhLoRCYBfzzpVK2xGYeF8RZdwT7LFn8Nk3PtNWT32BoZtNPren",
  "key10": "5hV4AJwKC8UhdPgzmbGcNR3bjNwiGc8iQ38hKYjSBqgR2CE7pSHSLPjpCNAwiSgpYHuK9Av41iLnbbX9p4MW75zv",
  "key11": "5zztazgsVsVKBSiTYCCjQWcYuo6roFc5zWiy8FgKHh8m5BQAGFNMmKiEqiaiGEqfUdvQnrWdsVTX55QqVeLqJbn7",
  "key12": "29wJzgwcrRijqZq5sZMyVNzWo9c54yTAAEhJPv2ZWtXZpzMpXVwcoN9yied3MAqXqwW3xoVh1hceJCvN7bpgQWHy",
  "key13": "3gQZ9PYpwn36n4ERFtAj2nSCbnxQh6Q3eQd4hUfEFHVbKf2q4MWh3E6DJ4jB3pJE4TBks7sdcE5dzs7o3wfejimH",
  "key14": "x4yLP5fTMQdUxztyxcTLvDh8SBupoSmnQBXj8HtRoZ8Mx4FsNQzB8nKoWiPA9YLZyt3wpfhEwmoZsVctqou29pG",
  "key15": "HYWUzZZ4hYTRA8WZxocgKWSAizhTP7g2trZ6pR1HDcPJAbLVaZ35bnBvympB68EQzM593Rgsa4aWjbduDbQapg9",
  "key16": "4tp69ECxED4rqT7UprPNFMSwTnmmakH75n4gQdq336UFvioGRJ5DwYtMsUNMM39UDXKiBk4ZznYXAmTHzeR3tJrf",
  "key17": "3BxEZS6gFAshsSkm6JxNtuYu8Zv8uMyJhHizb2NtgVxNsKBjSm8w9Br8w6X1hdeEknVLZeoytWdGtKbpLQvFaeQn",
  "key18": "3DaequdvcW4JX4JyED68u4Vq89JAqR19Qqv6kwBnTaR4DhnAruaEJHx5m87SsuSWGNNzwbSgNRa2xzru7SRU9w1H",
  "key19": "5KUB13TbMp5qcHgUf6K488zFviWo6LXxKfwyUJETNA865nWAgrnVB6DVdaE14iq8bJs6xu4aNbaCW7FAteqikgZC",
  "key20": "eDCxvtpu5V5YVfNtDU5cCQAAkpeaJNRdb1n7cGMphkq7WZ2nYxhk79H7vecf4FxL5zJn85wxTkNoYRecnfpDeME",
  "key21": "5VXJaAAjPYNVX8DBzeiMDZV8ayVSznvSt3Eg5SaoJxXCNoPj8gkaZEsPMavrDDwyGXyw8KWEunZ8hAy3Texe7n6Y",
  "key22": "5SRZ2JayTADs6KnEKa1L6J2FL1D89FNUEh7no31JGxmX3F4VwvwPcM1rVS8hk8vWKJRP1t2rsn7xoGz4KuACxSNd",
  "key23": "31EbseXUREcznLeFEp1eKmb9qckcKgyRQe4cS8XSEJeM2UoBAssjHmgNJJC9TrHEhAd8ojvefVMomsrkbzDSAqCE",
  "key24": "KdcvZZEMLyg7TfTHpqPyBei3Ugo7J5iMzqiZwn8dUsPW8RtKLYZawT5wtwDsbjhL8rXi73MMCdACzHFPVzVg1gm",
  "key25": "2adQDwHsyF4gKJaodpii7WfpLwVfGPuKbcpD5xZ8Pv3F2BCLMnXScr1HBJGwF4hRYUb6mvir95CTqa4Ph9ESBTDW",
  "key26": "2T5gaBnLewACYc27sgBGJMa52ghkRdiAz1QrPBE4imUBmagQajUPs9XDTgHNRmVh8R3iiZs3gZXsdmSwqw3j3adU",
  "key27": "3E4pgkJP9m8PfXzdNGju4wAGBDRE15VbhBksi51EcMht8Nmm1qT6WTAmXNWCrT6QGyFsywThJBvqw3QQTfQPvA11",
  "key28": "59CLQoC8su4DzTpMAPo1GgKCLP4JpLVH5ChKCZpuhVMdah7T8VpNdrj3EUF4hiJ3xjCbqnxiCvDW2cf4vzGAhSwa",
  "key29": "NLVC6CH3HS29dPu5yTBEyYLefA3fpox4hGfcdmtQjtqa9RkzbZQSQTLpGioD2zDygJ291dJbzCVb5joraECQw4P",
  "key30": "5XWBkNRgKeQBxYEp5BfbmQsdQr9X7rD7q2mPZi6FiryqEYmhG5QPLzGgqBr6ix49biDSKWKjm4nESCuXJRhZzTQN",
  "key31": "3qWNNvevDDvgGbcfoLhMnTNTFYhaVMm9QjnxD4FwedtwB7vVcA7p3W26mbiBiimJ2f5L4VDRShWsJKjaj3QgWuWi",
  "key32": "5Ga9ntQwPNW9DNYzGoRhdDrDhPeS9zqCf5mAuy5Qo3wnvsSiDECkEx5VYhMvJHToqgh4pNA6miEvaociScmrGMCQ",
  "key33": "2VbvaKd1BHsuTypSTpkg5d9cJXWRxpHygfcjZc2FxbHaKHjxgkX1UvHhB3EWuyYMryM8Bqd4V5WwMN87tpuLViut"
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
