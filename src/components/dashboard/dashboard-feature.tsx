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
    "5oweaHsc5iJbZrgsEhukQFX9k2DD8ouuFvrtib7HJXkCfX8E7ZYoy34GachmX7RNH4ybUxLxqHpurdrH1vih9Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BS7f1NjeBVKdy2VakAPk1qgWjLswdiqwQ5UFtkmhnREBQ96pT74UiiVAf2JaMUSDzqyrkKhyYeJhbTEzjVqoTNw",
  "key1": "42Cg584Bae7XKGBe2xjvxKEJGekvLu6LqY9Yyfd4FcCjJ69XxCGa3CGo5NhEDmszydfzsDYS5FirVtXM2xqnabDn",
  "key2": "3JpZnDstsE5zfQ3cWoAFgnbjm2KUiadnRofEz2YhbV3d4zU2tBbpkqjty5WJLWvH12vfbqBG6rwZWi7cWd1jKSEq",
  "key3": "3HUYBX5LKCfsw5fD1FueBZ8tXZfj5ncYVbKiuEYSF8rfPnWBV24CT39KHdcsB17UdGrtTjthF9u54Y72sRT2g6X4",
  "key4": "3FxruDZf42xZRBx4FGPmMaAPjrzUpjtWMyZeiZpymwGU3zHBiwdjWvd13Rs4wk4Vah5NVhQm4VvrYZmMeSevc4wH",
  "key5": "57BGeAxpPNt8dKXtjdm1tahSAatGM9mYB4oFCtJyDzbBGoTPWQx1sz1g5ztfuvaLUzScdk1bwHV5wM4ZwD2QLWff",
  "key6": "UccqMQHbSpKFBQsQGfQdf8mX5ak8Gx2YLCAAs9FNyaAo9jMcmva2hMRtbJWJ9SuTYRvcxGAhSZxh1B3a8YeDNVk",
  "key7": "61N2W7VHe3RkbfEwKyVoKZjdNsKDSX8aS4j838k4e9ygovNBvg6anMpAUkFKNZp3JRtMbtNnoPN58wczWKsA1qG2",
  "key8": "3FG2gDc5MGSSaxYpeTyMc1FbcWHzjbLsWZXiQERvuXoxWxQxco3i3575noKDxnXPMZ6g9a7oN9j66rDCJDUTimXW",
  "key9": "65yAtyxRtDuHNkJZbQBdm63CptEoW65dnF4F8XTYaCvbHaP9ph137P4ovi4yr4stsrD1GaitnF8ce6g2erXo8KPF",
  "key10": "4ga97vkQyrthC2HrnFAmX5ESdniBoNSwfKXA9jk3G55TQ4KyKnNUADz32GiBVfx7vY7j93M6azDLykEMhYLKBxQs",
  "key11": "2P1tn5dThQfHuEwcbJDZTByuLhX6moLeVpW7t3TNSyCgVFDBRTkTMCUsXBTaKHJHZvBpoq5VK7JiqhZV4TvPtkb",
  "key12": "4yUm5iDQJYy2w9RP96VKEBgYqmMEP6EMgLnNYjTf3qr8RpGBPgceFxKA2dhcS77nTh8zxf8mGmBhDTHGoALSdQqi",
  "key13": "4axN7L2QtqS4AtCqjhm8MKnZyUzqXqHe6NiWfGhpK9DsqL4RyvXwvjBnbg3hdN8wc1VcESzYW7MZzooSsqVadCyx",
  "key14": "29AgGyTHhBtCM3cnBCkbCrtZg9B2fcR1iyrsQdZp4ZrBd5hToj9qE8pMVcfMxnYSYsMhJMcUoMwnnDcge6iv9zHd",
  "key15": "2ME5kQvSpLi8dkdU645sKY6hd2BpB9Et3wGwZBGgni7P6G9av4JzpGrwzMr5D6aH16mwu2HqwTHMvw68wDozCcDi",
  "key16": "4SDGckoYjgDsHBPU6YDgg2FryZB5td1sXEPDHNpXFfZw1fQjGyNKyy6yoMqfbdsWgkJ2cd2a3wFtQiLfV7ypDenW",
  "key17": "4Aq4235o9F5aaFPA9P68QNjVG8X5Zohhqt9hFtMan2Bsro8ka13B1nYAWjNDC2Pj7D5dPHYpz1ovKZWuRL9SQq7V",
  "key18": "2baTT8TeUjJXwP2DgrUmub91zzVgvofitQYY6Ud2iF76y2wVzPRkTYzSNL5r1xFeRupHKPwvDEUV76vbfJQx4zpy",
  "key19": "PJe9Q6ffvQNMnJawxknS2tKwF2vBqZrJJih7ztvdrfgaeqfvQpms928G2WKPh6JSN8LtThyotLyYpJFmLirFfcG",
  "key20": "G95aw1RWc459Rj1rrUWYNx4gBR9aRAwKK9e5LSp9LReu4KRHpqFPpsNLTn5gxnJbZiNN2J8QciDJJ8MEmo8iymt",
  "key21": "4Td9bwetT2E1KDZwNYkRDf9Kn9yWz2MeCd5PopaRWVZcpWP4AqdrcN4ehm7yQNVfP99uAEXbzeQUn5CjSCGWJ7bS",
  "key22": "35UFJFXE2ZsnE7U7HmJo2cQbZsAQHwMcc6d3hC4uPWbBuFiCswKnE5VWzcQB2zxd5CEJXmxuMBpDJWWqGXbuhQb2",
  "key23": "3zRWsaMWx9MVZAWzALrZ1y8rSHUcMxSPW3RYKXDz9NsW5sbvpkd4oE5WBAwAdyy2qN4ysY6udinWmjuv23AB6PHr",
  "key24": "3BAo5eqjCmg2soZnT9JQcLsGWYJuhpUGxP8FFu6Do2iADgP4KTK45Vvm7zsAizX7Zv7Z3ngJuxY5gQSbGBvcjPE4",
  "key25": "2jxSB4aqcWNmSz1eNkBMCbJMQzLXmXmCKQaY1hiGWD2PmvT8S74Ufb3gAYDo5n2RqKBNmiUddrgi78y3eTwZbeBv",
  "key26": "eoByBe2rh9BZkuvxQ3WXhjtTaMw6YDKidCnCHxegbex8ova7Lwxj7UKJ1cFsqF5kjf7Kc34LCdVDWM52uTpYjBL"
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
