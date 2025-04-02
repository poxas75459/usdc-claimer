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
    "SAJWEPVirsQNo35UUWWMGMMEkc9Qh8xrJGjHwAiX6HvT2vsxXd5RfivmoMeC8zaimaYPGPLryMTWPi16sgwyu5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vt2B1G2e9FvU3iNstd9RdD9B3B3Xim7jGcZ4pKdgbPEfRTZsr3XfTtdts2gcY9PM1foCerPK83BVWPawaXRmp9z",
  "key1": "3uMibbLJ6rDsnxZvuXxJHWpHNv8bz8xGQTqn3jkQD1mzxn5zLjBaPkgkoGFeK2JC6iFfFCF5oqiaEaAEY1tqhEPQ",
  "key2": "54GWFnUX9DU4zFzb2bYFMPgozMqX236k8B8JEki1xG8PGK57wGjBsDGtGGiodPYkQN6nPVmBkuw8HBtyUZh5HGeo",
  "key3": "5csggK5NTW6N57yEp9temKAudyRLJ21MYhuZw9iB8G1qNwX2QWWNhvdT7spHYpHXivXCN9Jxve4o18oD5ejpetKb",
  "key4": "47qUnD7kAkqwKg6Hf1wQgJoDz7tAy8UpXtBTikqz487sNxYmAqpTDhxEa4cjC7UuK2PvQtXEVHk4GZhwNRxGJDb9",
  "key5": "3fUz5q7BJ2G6R5Z4gSJ4ZUPm5mfS9rwtvQ6VnG3AKpKZDKQxedfSmj2YsakyH9dgeD91JszrRstztBAhiULP7Crj",
  "key6": "23VdHKdXNb7bsEp4P1MExT7n89MZxVrJ5hGib6MCwTpiXz1DzLTnmUSdTxXeJfowiqvVGw4khoAiHCJTa3cVv8uw",
  "key7": "2WrZUXNGGJVQnRJmDHHzXBpkF8m3TxUfaAyHU9qd8Gohxquj4p4D2jg9uFTiQDAgo5587jfJJP12sZrCWgd3gMkX",
  "key8": "3yhVB6kwRiFcYUU2uYcmdrzsSedmLkCfACPtnVfj6AyCHJ4WePSxrTkXmJAcdmsFCmcVuGnG2JG1MZ7SbxG3g32C",
  "key9": "53ULjaDkTkka6QHLen3nuG1Uvphb8E5SyMnE4fw5skRG9NvdEFPr73bG3CqDEvXaA6XSFmEH6kqEdFWuPr8kvZ7k",
  "key10": "2eRv4gAx7EPFUvSa1KJ8hkY3HUQevKmxKZDKLNgtQTyKm9aD4ELEGveorn92e8Xs3AitFz2usLztYuxWDYsMTCdy",
  "key11": "3FqP5P4wnJChgovSoiEsXzuZhU5HeRVoM7ch1HuMBr5re5G8TtUtGYSYZGCs7jaY47m1g3Mzz5qzML8kinVWB69G",
  "key12": "37e7KF6r46uABnu3MiDAHya4ERLxyPiCAhDsr2noKNLHnrVvLjXp3N2QAkKCD7sPohx7m3Z6bQbCDd1f1Qe6masa",
  "key13": "g5JvLVTxm7LcurKf5PC9cYaWkcqC7XH6GfxXUMULEd4KMeKY6m5WLnsNzH2A877wyKvoTmSNkHa3zMkL27S9kLM",
  "key14": "31UmP1Ym3g3b1uc3F9Z7RcnvuMY2rXdyFKbTpZLtcyjgSh3oicAQRDuSCvP2w47GgyD2JjwkShXPUqisaKEeTEFk",
  "key15": "3yf2u7jY8hSWqpGJW5eKBmNMD5sW45bXxzKqENHqz8dFfxzszSpmE3z65siSx5C12gWpR336FycyuAWMycb2oyiJ",
  "key16": "5tCCDHpgKH2P3RKDVxxGrZUCNFtvvNozSEVjAVMgaWtt5ERUh91h25CyDfgCaZJMrDNMFNwUMT61ZrpbgzL9hE1f",
  "key17": "Dgzn1ZGQYLxMmN7x5e5CatMyk5hrVzBxqPFUEtaaVvCkPY25yDQZjfQMQA8xrFmQn6RRJ7fH5kVJiEN3wTvGkNR",
  "key18": "3MSGzZkJSizWcRD7B6fBbVd4tdaEvHSBGmeXK8R8KbFUf7FDxKu9SM6ikMrquU62Fwe6m7Z3Q43p5tQpmb84Q5Pa",
  "key19": "3dieTbwLR41SNcq4EZvhCWL6fpqhegjV9YrZqNQtrMN7qu4Ft75xq75qydu9enH43dxn1fdWpR9p9YvCHB74rCfE",
  "key20": "L5ggmReSNpM2CX6cKxYMvdye8zR99Rv4xQBaX1bM5U1n7ncaVizWuBtsM3e7LdZByRLcJiHwHLqkkdiHAWUNBPX",
  "key21": "4zrJYWbj61SeuWc2ZFy8JibGrjqVxM9nfJtiAEZK6UC7Sgy4L7MFUe2LPTTtBkMwXd2AUFMgqSqRSmo2wUK95bFE",
  "key22": "2ZixDteMCgHr8SfWjZ9PuJUCX91bwbCySE7ecrsAo7ChDx4Th3ZZnG3Mt8iWvuU3zadL9ubbvxPBuodTVdWAx7Du",
  "key23": "4W6KAWTwUEFvqLXY4rsEQwPfFCT68qhRaRPqynjX5v42EfEXy8SPtnDM9TRe4tv52bFshch7v9TA7G2wYuD27JDR",
  "key24": "4P7iyZyUQiNoARYtQdi96Mtd15cXSuVm9a3sgS4Vs6owFH6YnzkKxvTPPx46zo9kPKX2AvQ7GALoTjaXrKMPSoam"
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
