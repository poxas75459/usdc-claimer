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
    "BRdg7Hgmy9QMje7ruAs1mu2r7fSn5C6xroVtsLgkpK1Cke68rdkcwFtp4CR1mqvCjQyxS4p1FqMzS7oiVjU3wX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w58eE7w2kRJ6SNVSy3qaErpkFGdFeTwVsDy7C6NYRk3oBmEvkKEQabLUtFsnPQFSkVxLhor2MRDqJsh3MTuSahp",
  "key1": "5NL6R7S6UsUVNRepCoVZLQKrAebX5oNBPLxKX7te3BPGndzPeSucc7Pzmn2pKEZXDuyRJRdWjs8N5qjvZnAN8zkU",
  "key2": "2fiSe8iLvQWSsMTrVQeSf3NCzwkBPrE8eDJPWRM3QMS9tTePre4w6vRA8fbRc9kXkkFbeqFrHNU7vd7XG2hY9DyD",
  "key3": "b6nCLJMbFQ6zabFdVo3PpJYhk3b4HcteAfnf52UvygSQzKcsiMUuV52E13wo5UhpCDPTvCvQnzRFjfic13xeii7",
  "key4": "3YU5G5hg2kJ9VD7YtB8XNfubZ4DTwcyrBuQ2RsNnfPA6LfwqN9NAZHRGwRK57vSUz5MYYQU4yViv9JJx427do8gs",
  "key5": "2oGBHAzpYug8idwS6SdShrThPPyh8dfHfiZsLk2VoMpFve4MXYBAUynYKih8kZRcjeSTD62YtYDQiM35YCUQ4XW9",
  "key6": "4Ghutz6gWTbf2CU9uCYE6zRHS9n9kVLJ7o2eowRYY9Y4rFF7QoySXfoZHDWeTUQ9fFaKc95TLbKSnqFVzJ6TPzWv",
  "key7": "5wXtADHwAKszfAaniFSm3bW9XP3W1A1a2KEvLqxK6D7Anyd7DEXG2uD9q2ziA5zaJJaAMb9cnqdDU2RvBW5nkzuj",
  "key8": "3Ah2uKEMCBM64oEnC81M2adbg7yLYZ3u6WNDiRxnWNh5qCrZxjvNrUHPUsnCL78F3FkTcjfmepLabQn8yjVWouGn",
  "key9": "2TbmdawuSu4s79EnvK4S2tXh4yMSVTXC2RbGWk3GUydEieuFrefKwvPydi3Qi58LQd2rGAyiX6r3MjSXTArPWEkk",
  "key10": "3ACVZzewrTpqYADWdnfah71KXBXc2NwvRoPdftbwZTU9ToWTf23nH9KSFwUPsBcZ9T2a7CwdxWgMBGAa2hvgdmzK",
  "key11": "2ZaXgV3WZogiqrLrphbA3P7MnTqhtBzxte84uEmLvgw3rvjre9MYW7p8crqKNeyvLg9wsBFsiuPLxF7GcemrSNAn",
  "key12": "5JSJbt8hJuFJWbKXpoyFMGhafvE6yXBWEeohWMWbBjUinPsxVrQwVRViPMaZ8qRNKm3M98EKnuVczsrxmuyZ2p5j",
  "key13": "3X1ptvFxXiH6MyqHEPuhHmE6TXBaQuKshpF4KXCyQQk1TuUnpyKnaDntPnoBvRCwZKUZXzq5aohwc1upeD3ozcmQ",
  "key14": "5bmP7vBpGEi8a3cx1QrvSCqopUJhE1SJJrbGfMLHjzEMSgJv6zVUnEjnjcdHnW5oCg1wHpXw4uwj83W5GbGBhVjK",
  "key15": "3TW7DwWDpsLcKHA56JdSciKpcQHJ92jgzCKyFwzxigD1Lc6WeqXLryDow2u5Sz3S2t4CoYjJ2tdxzBvYTJZvR2Z9",
  "key16": "54toRpopS3eQDiZ6gxvyR7Z7sm3pvKY2sNpEZKYvkqqcGPwRx2nDc1Grfawd7cvC4FYGk9xnaZZuJwZsm4mBKX7k",
  "key17": "2fSaZP3wfCu31YVfN2QbYKbCVYAX2J3mMtxTapSKeBt3F57aUMaE4hEozuxEakFqv8E7JLzL495Vuw7jVdU7X6y7",
  "key18": "FVbZKtwmg3kHn7SCCB8X2hFLRNfS9FHiBk1ods4xsT4RRTeWK7PCo4bJPofKFK4UFRbiHw5MQQFN6B2cseCKsrY",
  "key19": "5h24xudSroMshHryWQQQ74YsA1irSHyVM4aX7VWik1r3sbrw7nt82XZuAmeu3mCi77LQNGW6e8ReC4Geoe1GAobF",
  "key20": "2M4KYEfyuAGsGDKqR2yz3bxetiCJp6iySS8AP6TXWUphNKaHgiRjLunF8KZvginPDKSvE86uibaT5JKJuP1yRkdg",
  "key21": "5hMLC94QK8WKw9eopxECsSEg2SmHDFqAB4S8rCbQYgNXkcGS6vYAnpdCJvis3R1YUfeUr7KAcB1X2o2sRSkB7QpX",
  "key22": "E9wv47jJAt7fs2eHMPuYJfQVXcAEbcXtXhbQf7CoqHxsB5UYbfNN2aCUZqFU5snHbbg9A9QdbmcfCy9DCpkJtFF",
  "key23": "vo6csmLYGsaAq1i6FeWD18gb5HvhaenncJUzWZTdvjAnCJp1bPPoNHYMkHeoVHpWTWwnFweToWSjqMGoxhbCUAk",
  "key24": "wZh8oYSrJr13ibLPu9BVor7mBWP7YJaGpBDBKZbW4XDwQfCB195BfPfeuUYZPaYij5Xh5r4P1HBT1zn262hWyMt",
  "key25": "2j7GY8CVRBJ3fTA6dkGiUcMH1S4zERXjSuPvGocP94fX5zAzSpS4TsUQfJ1L4QZ83o4M9XZKYvfASexusqs9ADik",
  "key26": "3UqKnHCv6X7NZhea8jkvPofTbai7Dt5WTSPQwwb9j4bBRVPqnNgDycF9YkXCmcU1J3t3w2SxMTTQrsZ7DUUMmYMf",
  "key27": "5L5DB8EhfKf5iGEqTavP853AdHMd4QzcqXCwvRbMZBEdUN8YWfF2PTKgRFB1h1t3ZMDDknfv1f8wabbd7rPL66hT"
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
