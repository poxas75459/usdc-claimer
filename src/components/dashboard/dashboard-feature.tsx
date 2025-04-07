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
    "3u2HJCh3MpKL2L4MoxQLCw9t1n2cCasgr2QS3BNeJpQGRMaxkV4qyK11EkSAcBkeK1XGAiRAL35rtauaYjLDWAMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRNCTwdp2tkMjjiPyVZkHDULPnRFknSQ4gduxt4128eXnWtCsXcLdyxokpbiW623KdVGZH4cLfxQbth8VCN5tK4",
  "key1": "3NzVi62TkhWsJ7risxUptmPMi9gvc51WYz7V9PHdTKgwJUA8XBW74khyYYBxfCDNjKzNxacggncWMxUeuPBvc47q",
  "key2": "LoLB2T2AtqUHa1TsVmoRr3Aeqw3HpiizXuAzG2Zj1tCaUq4adiPBXPu3zYcBX8DR3t85fQKYzssDBL9kknfEGHQ",
  "key3": "3DhjAWh8bD8zFths1QQfxZsuQpmhrJrR8Cs2ASDJf2uPUvNCiasr7NHDuknmgTCN7qLFVy2TSnfEFmrZ9QiXBLSY",
  "key4": "3e7gD5yzK7JPzX2oMwFNonVJncpp5ptezYdW8byNvNCX1TNNf8surmxkbiu3CFJHfEaxEUSDiByEoZuDHNTtcLyH",
  "key5": "2VxEFKGKWRxUsuccRUV6tLJGiftjzrCPofu3tkhgLAXL1LRg31FGehUBPsoqh2v5HGvbYmJrAKm61me5ySR1BEPL",
  "key6": "z38YDaw5rFTs2KqFo2Yc1d2DqRkSxqE8DR6ECwTNtPoC77rErUshFDHChJRtpqtgL1Dgnt3TfMUcNNwxsxBxyxZ",
  "key7": "5hNajGLEr5Qu7oUmziYq46paSygLukUqQeC2yBTu4Wkw8afNr3TkLziP1d28ny62WaXwecpSqacCmG9SP2WZGw4U",
  "key8": "4LpjM4CdjNdZidNrUfV6WmAg3VYy2t6nPfzFTeLC19BZwRy1NLouPorZeyH6n4go5sSfb7ipbU3GjtuN1TDq6GpL",
  "key9": "5g6aGzJbqf2B5sfzmBi8r18z9pP8uoAKWNxwWXXVMu6marVSsF4fjVa7NQ9D5yTK6BN8sq5gF9duHsmDuF8xSGes",
  "key10": "3fFjJy5BKpJiXZ5aDCF7rKi1JtyYyQVYFjjSQBRDrPHvXzim4QGikdh6Jcu17YmdvFk5oUDGeyhYH4k7hDYnawka",
  "key11": "3QpZCsVaVSJ64ZgZtsJrCVVqbSUbCC49Ljm5dwbCwEzJ8ZXfD7QdEzuwxfSMHZxmLAJoc2DcT6QPcbPvzatcGxjY",
  "key12": "4yQ18bhtABKk3r2fQUpoGzS3pdPukcSCXU6Sh2sprkRz615vgvA9WTVygYfZHnBkgm4yPivSXhycj8Fwt8bntMnz",
  "key13": "2wPYzksmKU3iSdPtF7Lbzp7tDoNb8BRPwJcRy67TUVVfvQbkPo3rn8pKszx2x3QK5gSXX8ebZgdBrJbi4YKz4EWT",
  "key14": "3FsQpJuXVNyv982ZzqLtRHQ2Mrd5DrShpituXEZ1KW2txPqPror16SoxZhGCbonuYX7zKBhLyauoiHGHFoqtaxoq",
  "key15": "2cEhzSAWVkdtPsQ3wGnUr9ExzjV2aQdpw1MeBaF3YXhwUkqAUHaGdkvRCKDMnnuJ6GppwGBaaTC5FNeqSUK7Lx9i",
  "key16": "4CYkPfZrMLhQUUwwvNEpbpdq3GXZ3STNX7Fv95mbLUU98QQC9q4K4Hj8VBJi9cwUHo8LXXhkJE72d4sZ2SjqyKcz",
  "key17": "5uL4KaRTrk1b5VXBguNZabgZKMpr4fUdKgAEh85ZNTUR6jcyowYrgy9uB2VycCwPgnqtoLEHM3EbRdibFCjKmUjr",
  "key18": "5yHxPm6SrRtdYUpM2KwAzmYB8RgRLwuReVMPBfaraJEhFmY8PGnFfPa8C2Z8dBFmsEtnCQUBni9z2mPXgANYvSLL",
  "key19": "52BAB9PraTCF2KFEz5SgaPxte1xY1TtUZJExBrwQ3Q9FxPtJ4Ewxajv2xFbvtYS6t9Vbu1o8uGVu7oXWgMVwfQpY",
  "key20": "FEYWCTamr8eNZam65Hi3qHEsM9YEHSK7v1rqMEwFff9EknUH9E7AZVoYH12SV8YmLHLaGWMLZzzGx8JifyGoBUD",
  "key21": "4VhrG9xUGX9nuyhR7TiFfbszPs43BPAWCic8w8yA5Hp2y9BMTpcTQ8nfUPZ3Zc43L7Bg587EqyzmmxYG6aNvo1tS",
  "key22": "4wLxsnzbVaNWjfgTJMSpcsHqn8aY73WysMepwpoJZfukacT588tbEPd2tx6ynuq4mB8UVGZ1QaoXMm9ULNGkUxmM",
  "key23": "5bj8FZiSA8yunjsAHYiN34PVLjDeoP62gupuzYNv2sHKwR8pjRZdX7HriMq57B9wN3CVk1Q69YtSff89tmN2LaUU",
  "key24": "59MiJokJooAURPTr7Uw2CZmrMKLJrz5DkgKa271h2NUQLjgGHv5QbwbW3qtSfUTetN8mfF7qhBbzF7pzZErDQu3C",
  "key25": "3LGddBLZTCDp1oNEpJ3ULuUbxKHBQFTPoqjgtJ1GYtZVh8fB3iH7bQ52fGdvSht4miKR6BacX89r4Pxmfw1fVoLP",
  "key26": "53NQ6BKA26LXa8yMiV3r9FVoPe3Rja8MkSk9ptRe2M745svRqP9mNY55S86s9XvTNVwTy5g6s4jh8fghgsRCEcey",
  "key27": "E6VTZ5NwfX5HdfVJp3QRDrrojorZ3KaLdyvjh2cnkaB49EPSjH5aYi6QJNN2A9c5D5uK3AuWiBq5RdVwWnnX5dp"
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
