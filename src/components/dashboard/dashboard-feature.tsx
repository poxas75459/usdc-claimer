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
    "38P8URs5C1kRMziqxDG5mqs6LjXynhmuufuV7tskEJtUqzTHCTqqbLFadQk6KBXg2pNYBk9fac3cy58G9xcxHRMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZ9jbmTdWAgE2SmzyZqRL2sgM1e57zSFgb78JRsT4cMJxz7R73p69ZbKLnrDKT6fr4bbeDVck1FmM9yUbX7QRqS",
  "key1": "4wzJbvKzpkhGnkKoQNuuSsktJaAfX7aLMcvqP1Fdi47ncUpxndBNc2oVnvZDZNJTo1ToV4RQvHLTNCm74SWSu7ji",
  "key2": "5WWCeAb9CEt5H9acky3qVhA49Wx54agW8vENUXZtQoThuFguSqj9thLjGEc8UQiS8HSavRKGAioxY6XS2yjHBMrT",
  "key3": "zbBAMvw75YamyQtrea7SA2PFWjF7nnuTwLhptpPqQcyciHwJGbVFkZ6TRJqBYTHGbJKnC2F5fQTs9smR3ivFsc5",
  "key4": "mG1XPGku25jEGygzc5W8o57BWifzhDSthK1KsWawtqdvWzJ7HF71AUxsg3X64QAGK3u1J6ecXdENgD3VndYLcU6",
  "key5": "5xNjA5NguokwvemyyBpzDmKEHhBCrqeH43SvowtqYrauKBBj57wFmWJbCFdCgZpuuxbKvHpY6cqN8Ee7Ct4AZhnQ",
  "key6": "32HQB9Dn2GGsNhgugVLh3qUNfpnpU1utY7yU7SavN8jtMKYv7MpMB4JvyzKTUpRxoqsEX9HMXRS56Z1WAXcBD82H",
  "key7": "4MfZZk1p5dRTAUwnHBYPvVCSneGDEjdtKoFrURog5649qGB3enC5WG69a2LKQ6CwY8SSNiutsr2s77cCJvwXh41x",
  "key8": "3dNfzMDjJjzr1fAQfTqibTi3msRQzTTo3rzVLSX2nZMKmVT64pNveRaUMhRJBvC5P8fEntS6dNEymiXSLHucSaPF",
  "key9": "2T3v9EfXbCHGUrM6d52GptQNjVJH9a3uoeveXNH8uG9MhFp8xGCXpjc6iJsLqrTMhdnk7Kh4SG8nQszmrCR4spbY",
  "key10": "kZfPEkVAVYxq5K7uZYDadnLcG2krwS3nS6bnj2882XSW8yhH5hbxmWg3XvrLEJ6AfBHjx6TKUKb19wjyeJ9oEEB",
  "key11": "4ciuTegExHxFNXVu93CmCaTuZgJUbKY695BPPf9hwv2pKhq6DFqs3vPqyKiHRcUdcz1cERFTHxZw7oUT6ppXwNi2",
  "key12": "4n6NacCVRzxtoBJwxiZznPgtxiQeDXFg9fzNwgePCfkxcDQPn6VzMQVSzVNTK2UYBiEYKPRoWvYRPQZU1iwXcNDn",
  "key13": "2GCQk9ayvFHBNPc5bWZJDpEzn7gLaJxrkVHZ1LhAAj7y7F8CDtEBDRCjcN6MCN1Up9R3gsbnRAVKdha8iUVJpkvh",
  "key14": "2xqBC91bfjBz8zGZT1srqGpd4oRaUhzSyfkFx5NHRARYHXSa8wFvAhwxp8WLDCsAxyFD5AbQBqstwnN6m4JxT4nx",
  "key15": "5Xj9xvZzkeXVKPqXpwHRPnwrEQJvQTx7XULr8aF1RYRXAyfZX9Ko2aTfV5QuW8fEU9SuHLSJGxfPLsQEkVCYDquF",
  "key16": "4ufSqpcuTA9F4Q1ufgM5ce3Fwc3DYig9iemLEPcaFu5GzcGgyPnErWnWw4rWymq7huc3tF1Ap6ttQgC91eVkno7f",
  "key17": "2m5cs32XrH8wmFKmVjZwY4eNZMYyrj5AH8o32N54Loqznb6MCv1GHvGMqQGzGavHYE3UAA5JdMR72jYc76zmwggg",
  "key18": "5Ur66ujb27PhqijMqcwzUXvvuSKG1YpNtctbEGhJQYT4JZvxFhDMV5AR7SFjWMYJPXXgMqQFyh2XkogHwSNc4RkH",
  "key19": "2V1o2QfE6KGHTefuCi2BKgEntWBWrC8k3iNxnYNJYK2K86aoriZzE6eFQUKddH7vwx4LxA4SyCVjJEpvgK5am4SC",
  "key20": "UZjraTrUhDMBvzZZ93AvBUgMmNSREqdj24QK5MZ8enuvSGXAaF8rNgoRKhCEyVEWx5TL9ucLgx64B1xFJHGf8vr",
  "key21": "4yt9BfLEzig4m3P3yxnHBmMaQsSpAu9ofMz7VL8hmVm4JFVof5aoZqLUvJsCyQT6x8qdDihFfcGYbvSwyjwym2nq",
  "key22": "4RDzC1pf9CxHbbD8NSoqKPfnJfZqeNiDQeETP4kNtPoVboozcKTDMBk8wyuuX9djc7234EWGGzPtJqjGXGu4CmGE",
  "key23": "4ARpfvMXz2dWuqKscQr8RwFkW5M2Y8jEy7kwvPU8btdmaKoQCuPo7vFXq4uxbm2bnQNWYjs6S9TTGRL4Qt6LErWj",
  "key24": "5EicTiJQqi5cmtJsCmZstRLWsehmxHyp3wowk5MWyMDUgVh72qDJ1V4XiRwiZZNxYViSQGN9q5XJ2SLRk27T5FUq",
  "key25": "GsbGeQq1TPFE2c8tsaUmp2PPcAqWGAHUHC6Xs5yHesHw48JZ4oKq2rT3ktjNnXm66x5tv9cpTkCPHGqnfeKoJKp",
  "key26": "3ajt4kErakEGtjNPw7d6H5XyK7rZggHfFf5bzkPKUHDAuEyoFXH1dAMf3cMyLpoLiJtasN8pUYXvXJzkQmnWsCw8",
  "key27": "2wx9zhFpEWhS2ACK5A2YxQTDS7xTnwQig97zcom7KVJVLymbBoA3qiQHBwFUV56DAe8pnyyLuNqX1XZvtsmGgMxx",
  "key28": "5xpaEa4WkoiRgE7mCDUvmMhNCwi1Mw1mNGndVTcFyV92mqB8CFHqBaMFTRw7cufp9NEVZQGWy1hLUtBGCuUtGVdS",
  "key29": "TrqeFPMpbnUQWJAxL9CD2RQXXQcS328gU8mXs4XeZXeK7BRDbGTDtAd8PPmUMUBRfe9RbPyD64AR8pygo3YA7Pp",
  "key30": "NFs2dbuBv5GCKC4gL93jTTmpAs8ss6ovUJNZrUy3o9qd1rfnWG6kJDUnDg1bMJc9TsiRLvPsoVHtrz5E8poMmNy",
  "key31": "2JWdS7B3CXfQ6MdxbneowGQJ7ZMNiMG298E6JmB6pCAzTTCsEbiB3Prs4y8VmJr8yxAFsDVefhoQBHVR91u4MZ8F",
  "key32": "41mLAxsp5QVqVnFmBAwKqf9pGM8njvqWehvjUmjfzGJPp3zA5d3qj5RuZBgRV8BsJMha9A7jZJwMTkDh6QPoZ9dL",
  "key33": "4vccp3zr1tQUnv7dmLe9XkLPt8kyNdNQbkCHKBPGwpy1qgYpNpW5Xxu7rkhF4p8vSSwa9FQFJsSh5b8nAQysgfvp",
  "key34": "jZYMXYRHU1JVoVEXMfbu8H1eu2JodnzMiALfymmuDrJyuMtrYniM29JzpxD2LPxZUnYbF7qaN3Tja6LpDSyfzPY",
  "key35": "3tdogNdd97FwywHsFcSAuvyR8dXm3RgFYZU4PT9UZBtnBDFmAmseXwHqM1gNVfFK58TTFvH47KKNq6Qq8HgRmP6a",
  "key36": "osUoiXygdcRMCy2atSJqzCHfxi26ekCsc89pZsfr5Mv274FhBoY8pwwsxZdiMYpxeb3Gqka9oTiwXHCZXMnmeA6",
  "key37": "4juEGuRqeRp8fW8NK33CyJDucTBuGFrMustoxfybHT7aSxkkXgwsSgZtiFaKton7QgpBWqSTZVuj971UEM98PEXE",
  "key38": "8XcEkTZtoMXCbDmHxaQrENjP6VzDfLBjXVutZgspYcEJmz1VzzXo8QYMpeQRfrjDS3To2GgUAF1ELJxiqTvE779",
  "key39": "4bmJwLZVGfDddsiN2oceJ9YkMqx1QhN7nr3C44Eve3JoRicYsFWa3ucTyNrVwtmA1ZouWPSbrCffYcgZsqfk9NEA"
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
