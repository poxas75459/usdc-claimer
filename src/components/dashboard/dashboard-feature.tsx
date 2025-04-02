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
    "25f7Aq2hv484FzgSAG1xEbF4oGvJsngZZ7NmWQuHn576HLL3wzpZx9RMYRBZpb5q6HYyCTB3qjkR3TVnWT5Ghy8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oALpg6PKf6wrAhhcVrA4F2Sp1gmNAwTptCcAWrJjC3ke2JGVAuJdNhTAWxSJQNXTSaC3dzxWjSycfiKTqBiFmcR",
  "key1": "czKK2iWnEoRYSH4gyAgENGYL3RE47abiL73UvgxXCP7f6BRcFdCE3LZo7ntNAKb1T1o3H6HDakkbpodmKLybu9p",
  "key2": "3WHZ2SRhibvE7riDNWKhjZdUtDSg3512Sz48ZDUdC2puQe2zANRwiWWY14mQzHsP1JBD5qKkkeuiaRxJRpDgHA2D",
  "key3": "4HaypVXKjtCdWSzPn2ANPBLZTciuPtpkobn9DebajY4Cub1WjrsZ67Vd9r1meAUevkwnSz77KnNZTRUCFAm1n8wJ",
  "key4": "EXure5HgqB36gNupYh7PgT7rNHuBstMBNib5NakbsE2ZiXpCCX8iZBuknKGfmJGPwFW33Uu3Q42DV1rAukkcKqb",
  "key5": "4N7yPtmGPV2aAYgxvws4yqSd6UxUz4xjmthe4LVDPQYhecNq5p9Y6KAC1oeHJ3Zo4y9dqGwRwT9LZ7Epgdj4vGV6",
  "key6": "5wccbqUNGnU3MpjJTXHcDhbNxZWH38UEhWGJxdWfenKqMicGrHhYqC6gvTv3haCBL39sctKG8X85PwFWfcpt7i1d",
  "key7": "4ZbadXgnxztRx8muKArJXiESroPqXMhb3eisKHaiEwPkuGhmvgBNjQ5NBtJVg2VuHuvrYcubemiECdmDmSnTaPDU",
  "key8": "ntPS8T6Snx8SyVLkePjxtvpQwB5x8RfuaL8iBVdk6utf7NbJrT7euXXYkS5fcG4jD9vdVoWBfj4y3cvFy13omqL",
  "key9": "4zYgUPSAL74bKk9DxezhgQucbgyGCvCAMc1reyUMrYt6BPiMSGYpFiHZKMVne2pT5wm5BHgrFLKkeHPTUwUDr2uz",
  "key10": "5fchgk7TESjWQAMHXTEPSSVK3T5BzRN7MhUgByFkzkNaxNmNzNXF6oD8GwQRLcnjMJ87fCGczVaeSJc5hjgwxH9m",
  "key11": "3mz9YTZWvbLkZdkjvGrDjGGr8StYZaqteuotHPjuTocthqn3yxybqE2nFa6VGFXgzwfuTPrsWNV8GMUBci5LaqxK",
  "key12": "3KR5rtXoXTDWstwSbUJkjZz9DjH3vcq5scm6M8fhmSXtXDVNDF8KoLi9qpjxDnUyTeQsPCUbSiRt2C6LojppwC58",
  "key13": "4YfYzXNw7VkcvijZQRgKxk3pPNeLkuhpfVg3bhpzKDLzdwe2r2KQ43VFGJZnkSzV56ZdAtT4zpasJmhTePYmMGtE",
  "key14": "37KjNiYpfW6xdeB36NCSQhNkKqDfoAiuegrZW6k7wMEQMV3216kW91Q8MNBg64AuPUH7984u533Dg1dh3ix2rSbX",
  "key15": "5TBt7ndGpCdLjeNh9bMgCRLdTd4C456vTaBQLSxmeLFPmEbMF3eX3PF6kd32ij5mo8u1au3sxfNdttPPgMVxD9N2",
  "key16": "4Xo7bC8u4tUDV54HWbjk8e5JzsDwzFGU7aWDWnPKcxuBAEoz5ijV8XT3dCNbW4hGAXy8d4mbAB4tUmscM6Lxf6Gj",
  "key17": "2sBdwcShZY8JiN3wgDvpFd2KdBAaUFRjxC4rhHnYba3yQHoTeRxYrmHxdgYXsV8E32kKQFJtu1kRZv8UqjQqwnGj",
  "key18": "4NYpdFT8Z4Bz7xFPcegA5VvmBhXzGnhWqefUaNVEb8vTUwc4jS4EF699czV7sErCRHwKwfxKt9id5SMqATTi6jF1",
  "key19": "4c7Kysx9ps4Pj8RkYGcxZVudF5HABQabDrJnUu3qm7omiBnxVFUJZyZDpvLctyGJY8pzYFKRoxobwLCvmZ67GeZL",
  "key20": "xvyo7LyNKVeTs5EX4GEWE8BKqsiujjmSv4RAGaC4PqJssXxv4sZzPgGjaHoWN8CCyAU66r1BE9NF33F73WC5HNV",
  "key21": "3RXCqjjujoWX77pLUJrV5FqHZAELUD3D5CoispuWojqCj9QvrsuhSQLvkhgufLctiawwa8p1fH6wdZyzioCv8Pmi",
  "key22": "2z7vAzAk95csLZUaz6NQhXK25LK3jvU2zd6AGXvbA75ZwoGKsMMAwDtQGVfV1eKodpoTyb8Sytxz3rR4YYPNScBb",
  "key23": "58k2pSTfV1CooHmdboxmkefU72fUrZDxLWyy3BnGp3xG916172YTgPft6rSMmtxGBsKHcgiRzh69j6xHgJebFhKD",
  "key24": "4oFccrmyX9vKBr1ZL8VybjHnW5P8LsdAmsBGDR3mbEm7WpqUoDbZA68LxNGyCN7J4gFHQo4upp5GqY5tWL2jVWn7",
  "key25": "3maMS2HPgE1H6bPnpVvDfWff5CeaLsQXBA7H3wHTVFUyDiWojJDoiDM6rY2T1cp4DhxTiiMmx1piG2eJUhQAFgCm",
  "key26": "3X92TPFBrnkwCxtA3s8pBSFned5Ldkn33YFs8zvTraUK8AdxjpaKL28nAsuUKQirF8ggLVCc3Aaruc2YT8jEPwZ8"
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
