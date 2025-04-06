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
    "554i5xuQMd5oVNbhi6ocMAgoyPwkyzfF7PkS8X9nxCoqNiKNpBZbghB1yCAsiaWvcps2FQTmpLyJFnCoXXvaArKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QupQAd5nyDNQGCLC67C2FoAqmnS6opPkXwYWyHJqTNiNA7TMH3qjv8djXejeSmhdNALebk319LkhBNTV73Taeoc",
  "key1": "5motwkDXzQ4gw1ho7L9SR8LeX7Z3uDhtLBz4NTC4FaStYkAUrt8UCXGYmJqpecegESixHJMfMXxFi6i9FhLDbv28",
  "key2": "EADkUWHLSFpUhzbWtbdWhXdTTzVtskCTcPUDtYaC41rFYrjW6ahri8TqoV5fAoRF7FPartX4Riu7L2aJwtruHGR",
  "key3": "5dmAZntrz7z7rLg338enTd4tvgchvW43np2JiqK1BDJRRKatp8uHtfJjw65wswFKMHqdBEHbtei5ynsWw4BuKtUc",
  "key4": "jFVSDEKAkuuGnTiASvN7VaWDxgzehiy7RxVFwgLpvYNuW43cCpmCcgegiRFgAs92Vo16suvsT7JGp1qDhDfeC1e",
  "key5": "5d3kE4TvC8R5TB7wheB1ob9DCGuk6zRm6u4u2ahrjETrRBX3xJvXfWFoisx8RmgxCUwDCMh76ka6SaSTG88Y67VF",
  "key6": "nZJqtz9nNY5b4eSjCMiDiUWQgXfyBPnVFPYvXZ4uxJRcYeVJYJHjAyzktArMURpsaoDHmZWTPbtN5c22Z28HPtF",
  "key7": "5NRB3KpYxysKrANVGAMqMjjU2FZ4hKY5LkwSBkE7ztHUg3K864QaVXQsu7Q1Zo3Jyuc7XB5BzH178WB2RAaFMFe5",
  "key8": "2DPQxwpt97C5cbRxSBkHHq9Y7jk92vUz4iHdBqQD7fSKHK6S4ijaXBVR7J4sn43ZkCJeDxFw9W5o8uxZKtUPgKhX",
  "key9": "4qsKHzWFhU2NYUuTmdoN56vuPT5iVofvUZiKTzakqCRfdrQFpAkU4rBKL531vMjxZKLUocghzR5w9uHYFQ66iJH8",
  "key10": "2UByqVGts3rpMtVRWVX5BkMbBbwQ3gudeqdVj8HSau6PXTFbNFmMGzJV8wxcK7FwwedHvgLHwDahLyLu625Uy1s",
  "key11": "4L2gZAJtHHVz4iF7csGtgdMzr2BzqsbDXmExv4qv4cMyhizFWWzQKHVjxkRRQWYgRrPfJ8cGq2bpzWAXNZTvfrpL",
  "key12": "31ZjH44bmUXt5hQ7raEuabZAkvwLUKtaYP5RVVmyoXvawA6aUfcwZrQfiABJSQ9wbGYezBeURU58xP8THD95tv7W",
  "key13": "gjpdd2qJtBDPvuPxTfoCDZ5Ce83BqxDiLT9EmbKTHj5sHoRupx6MeQWUN6YgGP61XY5DiGFixrBdryNJQpXqHz1",
  "key14": "2oYP1gnTCVL8Vs8EwGjskH3YvfyGUwagtLvnoBst7UQQJcq2sgVqG1rnGZGDNfnr5wVtRzLWXj62vrTXmj7Pi8XS",
  "key15": "3uCgPP5TKy9sXM9NpMsHkX2CAGWKxparzSiEiqMA3MX8Y6v4UsHc5gvxYH8gVRBqJ3Zrp1rGHsxAWvRy9M1gwqrP",
  "key16": "2qVPS3F3q6tH8KD32j6TPf8rTdBhqiSvu6EaGQjJ6SjbMC4W8kXE2vPZfhpKfKrDrrytBtJFYYe5ZETp3D1T5fLi",
  "key17": "36cbQspN3or8ckkuEduwteJFik66AsXYz5LtFQDjdwVFn9vRX4AYpnYQiX7G7HANYH59DWSPm2k2JF5ggfzXGofY",
  "key18": "66aJYTKQxtrztpDKrZfsWi7FNSGpVs56adneaJA1yH4dsCf8twTNbPvPw4Vg2JoGxFbHFFXLDYRQuhs8eUSbKcd",
  "key19": "XPzzKA6VqCQabFMMoF6Y2jhzF5D1spsyCrqdqhCHByG1c23Kp7ES1cA6VBt7Huq1JwkCXtZEuVJGkZHF5iXfivC",
  "key20": "4Q5HDJAhVgf5z32Yy7Pwu7FsAV9AQZdaJiiLKSFYbaFZ7fsHZ6Dewy5pS8HyMBs1ppPAHjxGcGjwbxEQsCnBz9Yu",
  "key21": "hJwvDqZsmkQZZk1NRkCmJd1rNHstAorrLysDmDccvYHYbqiDSeF2LAoSGGjQdpc7GCEwwLpagiMAcwbCeThMbkQ",
  "key22": "kgNK2GzgshtmEAVZaKcLYim3PcCbEA6vy3Fy1pRVz61YgKYS2QAYfTvtpDAMojiUeZN2Pes4vQag4Z8dDgb9KeA",
  "key23": "3bRPW77s7UzGJFV1QqDjJmyMEzNJnrGQ9b8K9468GnWGnkkWVRye9BA2Am1HMUoYFyzqamoHGRci3t1Fom3Leoa1",
  "key24": "3r9EoRj7z5jGeqrnsGbyQhbmsVzUHoyfA2YQzpX3tcWxjSkLVbgJ2iqj3YSqfnLHdVLkDYi8HeHXbYoTwQscoYC1"
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
