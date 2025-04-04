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
    "41q5LA9CidPVpnuXoWNdVSP3ATVN7nSbCUMN314bTXhW6ooKkPM5xRhENZ4eA8naoRUsKCb4wbZPgTfbLGFA8H5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crFcff2NHC3qWsY6howfrhUnw2wDutWaht1Tj9nu9ZSCVoZsjXFEQ5RbFmgmcqVTy1eimcSFsh9LEMUfd4aGaE1",
  "key1": "5sEPoFoqAYYdLfSSPvGt39qV1erWkTEhBGRCzzEKhZvHMDHmbBSwGLWJ5Udyh6kcQcXYn4E2yxneR7j4AGepEJbG",
  "key2": "5Zsb9rveEfz8wAK8kA5U5WdXSr3Xyjj8Jm7q25HLCsg7QeF6Auxd1qzd1qkHR2aTpZQQPTNXYEuox7BTtZwqy3t3",
  "key3": "23rXzYfGVaqDyxXn9xtjynzys3ToCbg1LtMMqx9CdUZmyC5SL5WWFoQc6GarkwPDEsVz8DWGBP2KJcSBMQM9zU5H",
  "key4": "3uShnWUUshgcmZWEPu1ejL3ncQ93MrVAJ3RbABiqejGznb56GAwiPbZf5U8uPYjbLWEdcUxV6UWYzKx2YQF5F9w8",
  "key5": "eqMB3Sxxk9gqPvjKKh3SAA8No2Vn7mX6uBHHmHEqfrvrvQcYbohvgq7e6qpNPcBjEEE3BueHYpphUsNVXnyebPt",
  "key6": "5vM9uEWT3B4e6ra7W6o3tQDA9bEaN4U5T6CVmRZts59rPvVrikJLP3Qj8giBUKKFa1oSWrvS3e6azjetwvws2Hfc",
  "key7": "4yKMVX1tWoL32XpRNZfZ5qLPJ48Qiq5awniq4SA2rN7RWyrj9cdQXBaciGhb7cHhSZrBPjqzKGrSQLxP8L2DVEGA",
  "key8": "4vCGvigkcndqGZ1nXeVkLC9Az13SJv236fZNujwC3edbvdnMfm9UarDHthJM9dVd3dKqo2jiL5oGPAj9WVXhSpHK",
  "key9": "4TxM331XKiusoiH6rq9qEyvPVpXQtCgEYR7AyGVL8C3ha8ELV68eb64GMR88z6kLtRdL9ovfW8E29VKPsmzWuH4F",
  "key10": "3vXGjmhsvz5gZVmWXNb6o2eSXfGETco5WGkX7mhKSaSRzVR5yqYitg8MDYBymXDcUaXGDhZKrWrHuZjFPND9ynZv",
  "key11": "4W5rF922LFp1g7AtUEg7PPtgZeS5sVMbMRpn4NEzWXGxMuJYfskzqNN482hhSaFcpao9oNFiP1rPp4n5bEq5L8MR",
  "key12": "2ieSkEH4L5Zy2FT4zaN2k8UaBGYNsKgLojASN8vRnUDvauEFpSmAhqNtyCnCTiEKPEkaiWH9mBcuooMe3WR9EsK8",
  "key13": "5irUxQqXpf1Lzg1NCbQeBEqmVgxbbE3khCfuUyAi7eRhQqrn1tjFJRCWqEt1oTBdAoBULRZmRTvty9L54py19z4C",
  "key14": "5tipNSpus5ipZ8sxHDoaiiGE7D4t3tue57QgYi5ojNzJ661FZ6fYdZowpL7gYsn8GFJ9ZqJS5kHXFKNSvNNRFsES",
  "key15": "3ShamUPQ5ZKQ2npBasbkYsz1tAJRugpwjjYeUx19rW8yKeEE7DtgSVnupeet5vBZXFeNF6bgkhbti6j1ZEa29oCS",
  "key16": "4v5aRqNsTZ5Ww18NU7sDNJuSDMC1Fqa1Gim4FvMqjpQcp7x1MmCrKVXdfcoWAn5P3DD6615UaV7Fjq8eshojppxp",
  "key17": "kPoHJFdGipRMr4SE8mdRzADvGtHZjYaK913onxf3JpaBdGnhzAEvnnXt8JN3TXuYVKYHE25ueEBMgwRLNbRNBF5",
  "key18": "4upj5zBDadyqkkKVEJjk29NmN2XprQXeJKAwLdKLwKrz5qZCxL8a8yE13mSacxBJG2ANyiQYeeoK1g6yoiM3Su6S",
  "key19": "4vd13YJC7vPyD31TEL7tn9hsrGJZVuKTmd5QPmMza5J99tZJFWDTXs9Whs15bLsfQSbBU8uB91VdePAz6MYGvDPV",
  "key20": "5HVQ6msz7uV7d2QfBkmtnmsDpuYUiyWE3rRmWzKugd57maj2ZLKNM2UP8WCkjKB3U6UaLaQAMRLyjdgz9aEAYNrs",
  "key21": "2wL84NSnbRwMUVQCCmT9saxwG1E2DuKvtLHCgXEWW5jNnvBGpE486TrGFM5ymUZ7dJdBoPkLQtWQcLdRQeWY6xPX",
  "key22": "5NofyMBwfLdV4b3gT1HAfexgc2T97syEgzeCPU7FiEtJDdYc4fBjqFRUWfSxUwHdnoTAHhZkbdwVfiWYdLjQRpjL",
  "key23": "36HQRixi1hGXPPzZ6YEWyjnR2ZNhgPRZSwFdZPZCLMfXkXdFgv5Hcf3SgvTUAc871jJZutjRykELyx9ZqYo5ae6r",
  "key24": "2rDzWPLe6h54LMJJQBhw8piK3H8CqJPvqv6mNoZy52BNHQfmTChCk44CwSjoGqMXLtW1gPSJ1FftEu6vtVX6fz1g",
  "key25": "5JUhymViDULo72t2mLFFstLAzHznE5e1A4eMq4ka1AAMf6AyLjdpqksCcvFdApP7ZdDE2JzWG7xEdkwN68YcD7rS",
  "key26": "9MV8qhqjPRZKdtUy9Bhooy6YG97YjXLsFP6bJLzHpjJkTzUe5seBiVuUjq9tqN7dbkWPiP1NpF8AGKN71sTUaLY",
  "key27": "x7ArQVT69i3VEMJEK6u1rYHKxySKy86kFhSRcba8vASGMB4HG6i7hpiCd4NqKrSR7y31zn9LYtKDzAAx3Ea8tUQ",
  "key28": "3ZrNAZNLbnJEEhsrbRja1epRiNKUR9ufgeL7BqrfzctWBFNvcH9iSpewCREMChUuqYaJc58K1MVXXyhpyTPWC7oS",
  "key29": "3vErPaGhoZK4A8cWufF3nUNsedJGnQ9Vb9cfBbYG1d78xdUCkQQrLVTbYKSqatQj58DgxpXohjMmZ7d1guShwXFj",
  "key30": "hgDTPg2ZYYEcELkP7vszucBL3hzoJ58Sg9n6Z3WmQXxaXdmf6nm5gGLhsbtfAJrZfQCzgD3R7awa25XbQJioD3T",
  "key31": "3gkFJ4WN8xSuVSJow4EJf9J9kJa4NtH7V3EZEoh9DBj3f1QQRAAji7mubVhqdJhA5gXZ6z9wKoLDRM8WC4kLvk2c"
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
