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
    "eKB9CjRoSEAMtrjY2J7P2BPEMAcJre9k9aATT2uSHJCBhzuzoCYirNK6jGCwb1QkfCjgSHHhnAqeLkAwPAcNi5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4vtjFAoYmjFW6UbuVNcjku3hrzKqjKgkQTc7eDSE1CGtqdHAd7dHUieQV3FaCjcnw7SkJSXMaytpnJLDCaUccx",
  "key1": "3dNjbRNJArsAa8DjVBKp8kyKHy3V5NUpHhkCPnVgLTUnM8h1uJwp21fKg7qpzi3sXya4cdApsPhFCWjH8JmZahE6",
  "key2": "5jMwBzpsjmqrLNwwumVjPD2CWJW75yG8rrQodphsZxJhUDHgRhJLHUbXQhFccotQnyFJU3ut5zMgegRh1zx5XNuS",
  "key3": "31ntJTJLLHQAGF6kZGMFsjunwwNWYXRsk3jvMjh9odquTmEBdubiDTPJJdYEpxWsDJ2ZufHwZtf5XXY2r2Fg1xxr",
  "key4": "65PxsJEciCkuNQksUXYubC1SF6VgNQQhTH3GxP63Nxo8EvExUaKVLGGajwYfnGmV4rs1T3LMQuWTxVxBc7qqZ3ur",
  "key5": "4vZiT4M6QopnGeMXkpTbKXu5VMRwFUA1ZCE4xRUH2ncMCmBVoqpSPoYXjZZvMfjeNo5iLS6toZ27xKvQvCTdDKHE",
  "key6": "5T7KvnFT6qztErBJ7uEv2GLQomjoJkiHw7o1svivEeXZeXUzL2DcFXP6kdq4Je8GEePi7gtUPpwaJd6bib8dNrM5",
  "key7": "MW5PGpduaCNXtyKzgp7MG1WadNxzUrb3WyWY4pynwrfyg5oU5rZNNrPo82DU6khVCsvkXeokhVGGR5XpHXEJyg9",
  "key8": "5kULN6b2h5dUD1AkgCMZZNZkDg8LNP69W2ZcxSieBA2bKNDffDxMou5nEGMnWNMo6J9nuDi4vbcsAyHjDgNnYNNX",
  "key9": "5UFkHHbWFsEa3XvgWpnrnrpPiQMzNbycWByN6JEKswRf8mqu5v86prTqu3iZxrG6L6DPT7rjaSZdNmKLd52bhdtH",
  "key10": "3Rcugm3M3b3Fqy964qLQoJLgXz6Egt41DTroymDjHz3JQanAd5f2cTFsQWpn8HnmrtewHWawPc4oBB2j6V5hkFVo",
  "key11": "3bMiDsYCm3X7ANDj5pzcsEWcVn3qs2hQJxokLH2jzTPTx3upFzkF34RaVLSqDJQQNRfSJGPgw9B2DtnYGbnr3n3t",
  "key12": "4SEtv5w7uEHedBRVScRLVKBXx53g5fRPdtYWQnrvCfvrkdm6xcrtEmjaAWxi1wn7w9tSf5NsyDJDZswGxCyCc5bx",
  "key13": "5aLP1oDMNCRz9WeUSQmer2RFqMwb92LBTkninS9e4DzeeNUqKQvQV9sFpWw6NkuQyLmUSxB8ToSZNJ9coPoPn9pj",
  "key14": "4JrSvPBxxDzM8akiw5sYXFmMQ4NfsAWjd3wiCTN4UCxVag2DkAv4Uci5wDej23wQi7btxbLo7vn92HDobdH5As9M",
  "key15": "3cxtXwegjmTLf6wZaRYbdESxkHQ3kL8rw4eEYB2rMTnWsu1gcSKcgH8ZhEFB77XruhyY8gDsDbPHc67oUyLzHjd3",
  "key16": "vJtkiLsnNWpaj1rtA1gXLiFg5nCkNxGTFHHAMC2j5ZNYQR1ytsLzTUFtNmZ1cZwGBxJ6RjtAdiUPcBLpNXZoh57",
  "key17": "65z8bMbZ552DZhW2q9MHVrkKtqEaAHM8r8EJCz4vSvGcfd2xrDHmWi3Rthz8Nk1D1xcxWiEEPZR8W8VNWfBp6d1B",
  "key18": "4KCZbnMgoKaFwCECrCXCRi9mDJYd7f8PYjsdN2rPupo144Zk6b4pXBrUm8zxUdWwpnbugmESXQnYyyhWDoyKAsi3",
  "key19": "JjnAxWqDTQHnUbcnL9N9TMt4mfRCpsHvL5jejSEgr3ZPqcnzHfSjbSNXKBavg5MBte2d3xM5E8um2EpmmhVyX43",
  "key20": "3jbKgsjHzUSYU2eZnbsfiVABEr7ZWLUNMbwtf5mjE4UJHRSdTyJ8YEuTV9axdvRRpnpcYsbbK8JSvteQLUmSVUNZ",
  "key21": "5dFqtZMW57wndorT8tbr692JVJZ98zG1LsQmcGiTavRcgm9eJ82vwj6FDJQviQZyFcStSjXwrKhkoVrAaL7QbJb4",
  "key22": "2MSozPS845mNyAZHKuTcJLw3ms7qfaQaCjqJvqKyUk2LLzMqvit6PcujSMBKcuEv8nWzajKAhpSJobkCpxY7xSed",
  "key23": "4iZSAa1LJXzs3SkJ1zSHuz31u7AJcYvi17GaT7j4JsuemybEDHcZFUFdrXM5AB34YRfkyAHkN5rraW2zcjjEg3M3",
  "key24": "QymsAyxWwojLQePhdmW4iwB4C2UqXVurtCcp9WuWgwLXH8b7rLipwZSRgVVtSmqCVSuf47utEmo8FDEMyBXxCt3",
  "key25": "4siKrtEZs2HbjCCkYYiygc9Q1F9J16ppbJxp9uF8EQL9ZCX3AqJ7ySxWbF12TVrmK8cR5a9W7a5tadF7XLUH1kbe",
  "key26": "3hLp7XNLTZ9kGagfsFhfcLzAwb71B7PWqvnYAfkviPMWjpV9to79Hnz3fZQkknoRTc9JM4AtA9ahMzbPtfzSnXVn"
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
