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
    "4FB8uzD2Fjhv5XPZ3pVxDBnyzyuCCxS6VA6W1idL6dP5XN3ZYPV88Hr5dK8GNQMbMtc26Wsn63ojLpa2KrtAPiq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNUYi9p3B87wEKnrbesdUymh27s7JNxoXAihe8qoxnDxoUJDxEc1a5S7FQGtgFY6mjZA3o3bo1pnM3utVpBSgPK",
  "key1": "2tLK3GESgwZPUAryAZAX6vh12sNyz4aZEDK79EAxwrDPKUNE1yZP2gvNLT5iTqfAGpyX1YchN6Cc1oJkGoez6JMM",
  "key2": "kaeV6f6Pp7eqJvwFYMLUNzpii1nWtEYU2PSqHsj9YdF1Xk16B2fhbrUyKd7duVXAG7mNvNycqnCqTzaQ1f9x9ud",
  "key3": "3ocMqPR69UUGCEJuEZw1cvCxxG5pECrhkmWmBGhCj4ah2HyWVk4VdP9aZdf29jrUhmMZpDKfyPJMYUQPmt8gGmBs",
  "key4": "2CQH63PZmA1US6J1XdUDN7YE5HPbUBDCY5j49CdPSFKmbfFWZ4TXsaZ5wTQzMJhvxnsxrLjVVuUPSARKaD3kYZLe",
  "key5": "4DF3z7Yovd6nbHWJ4Zd3A6VoJLHXboLanFMyiv8jSpjCinBBm5cseH157NcN6TeYiJkKuYamRxQChtXjeRhEGh49",
  "key6": "65dF7y1o2getZzrRcqJts54tZVtDNHdtNmDz6tYKNjahtrPC2itmUs9N1zocYFCupLsgQJ1oVB8YEZ1Tmxj28x4m",
  "key7": "46HXLSAoLxKEoaHnFgTtJqLi8Tki3xvr6BPRH7xPSN7nLxxzKAVTARnU4idyFHgdxard4dn7mQYt8vN9bVA7m4tt",
  "key8": "SfkDLWeVjmv9ej4wM5MtjB1PpnjWXzUKYs7thbT9wKWLRWXnbwuCTozd26NiuKjxPybjecLP8LEANtdFAfiwv37",
  "key9": "4qcC51iBDhwHrS5mHN9maQoNKUWZPqReurN6sD51cJHS5hRBR259DM8siU3CrRsTsY1qtEWcPVEN1bUjVHG5SQyQ",
  "key10": "3e3RyEFPBhTxGaZRCjE2tYknAAg4DkaPxDzSYMyh6dbnRtTa33RcS2o8jRTzb7G63okTc6Fdu7e2VUSbECzoJgP9",
  "key11": "4Hx8iKhnv76NBGbmRDVfxYbZR6RXvgXVKVBTncnv8mb6pcJwuKiCaFwRggsujrDNsV6UoBCj47Z4aNEmDChW5y7C",
  "key12": "5coDt57nYyWSLd1wgBHdmA85hzMkBMTGZtpeVLyVMt3GghJBJzPhyP5jzpVkpwHY5XGvBbecxZoXnsf24Z4Bzrso",
  "key13": "5qSbTY7kVDHXL1XSiFoafZUB9mBkTDV2cQUqo1enLZxjW6kzG4oDR2SufZNtqEsqyUfDyiXW56t7rWYYktD6VuAs",
  "key14": "3Tic8PTRZfjbB7e2Lye257mQhzUigL9jrJZKeMkUMfL6uxozWY7Vbvi78SB3UHCg6ZuTeG7D3mLxR7Cv6xcUmeTA",
  "key15": "GqPGUQEEsFHL3GKWDBr8KwYFY7q6pyCzx78AQ4aGbx3FrLG7PeEUTCSeAoG8mndNp1Dev5rWH8x7QNvWxLQgSua",
  "key16": "5zSKzhSwqo3hNKkg9KJCEiPzyHzpAjUtdpVDNL2Em7sLuGehuBgtMcG2rb8uX7asjV7jKxEJrTmQwoJMDmTa9Pcq",
  "key17": "JcYWubdiVbhhVnuLwvn7eDizJJNgd6W17fTgHHKWm6cHSxereHovNqJBfHYhRVHe4qYJZiWZbxHRhwfqdwdaiKd",
  "key18": "BcLURUcSofNF8eZDnCKcVgFkffpycpc5VrkGaS2Uq8AXK1wea6DDfMCvSiYcyMMWuRKzuTkUhFUF58bHkZakvT8",
  "key19": "5oNdobdRd6xaWxqiAB6cwU7bDLkJ6vEXeEadr8geXbMK7YxL363fCgs6RNjJbwfkLKDw3qhf8nQ7KhRYuNK5aCD2",
  "key20": "31JdNmP5dfsWVKqyWZHtBrj518nhryecJ8EC7AtiRgnMcnhupe6mz5jzcXx2Lx3PwM1MPLtwZ8EskVBzcuq1B9DH",
  "key21": "5uedP4rFtwbsFHFDZTGBy118KVeiuLhCRrfH2fnWpUGJPVx2qPMxVWkSeTSKb4hoDN8QPAbPDC9pepdnkB3iEx4v",
  "key22": "4VQdjWaz7Rjd5qXVT63wvTXo8AJyw4RMrKq8DYZij9UsWXX9yrnghZvwgo1zMN2WUhAnseiZmkims8t2k41P7ZJM",
  "key23": "xJDRCYRcMz96NfsEfwE4XMgLQ33jahJaafxSSuFAD2sD2qvgsADELqSPFmUMGw99iugDgKKg9eWH2joh1Lqgj1z",
  "key24": "3h7kACSAx1DtW8aVFmPt7PAJh1gXoRKCwDvncLfV7VdSawJmN9CMHfYsD2eM9xbqF1HMsYwRA6pvy9d4FCapQoUH",
  "key25": "5mxZ6qw6sSPy15VYaGJQzWXNVUKWh36rKS88b1LnaacxQvYPaz4n9ziYmp3bGvjvxkngPgAXim6jjjo5SuymhMUH",
  "key26": "2pyUfoHXXJZkryCQp9ZuPdBzEa786KWcRJWreomZBksUH1CLuB5F171RVJJ99dDStqSki3KjuwYtGYDmNvWfDunV",
  "key27": "2xM1fSqCiH3QT5VLwPBN49nPKodQEiBZFtMuKb1QSGGoYuZC4ZWRiDUeD4B19kmEWg3htwSdxT5RmQQY6tm4hgvr",
  "key28": "4PoZPnS7Dpddx3Wiq8aufXp1Ho8y1qrizD2pS8h9z49azverUvtovAbch6NZvYMPkQYYXU8GYaHqy5ofug7wRbLo"
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
