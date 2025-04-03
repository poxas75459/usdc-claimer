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
    "37qQWuLGUFC9HPpfjPfYsBUFKh76Y7DE4JDvPpLe44TShjxPWKqwmWt2ioUgmytT2nMUaRF6eXbCYVGoTGQ4ra2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55seQrzwVErNQbwDk8CoDh6k7ezdP6A32wsJ1Lc2c1hsp4GMn8QpeyFqyiJBC9XhiUvZpovKWxNjCaNDELtSzSgu",
  "key1": "3bTKwdPJ4Fft4npnB8oyKiosxnCVpb3L7WPgUsD6pVCBNXd3a2EuP45bnzhR1eUX9h1qruqeGxDnByTjUaPuZ4cG",
  "key2": "2VghYtLhZTDXFKdakFuKaSTKbJgv2xkZNUEvDbV2bgKkwzagUnvvJWqjNoDQNm2LPStaJYayG8pRHtu55xWH8kHg",
  "key3": "3ZJzWHgHTMhYCg5DhgT6QoYFxZrKdjbvQNm6jR8BDiDtPWYyvaKpHsewvCFxDMmoUfNeAvzA1morGVvodGSn5j54",
  "key4": "5D55Yw461XfJRxfX16ESNnAPfZv74TUTTHLLK7d2eNipCoLXVCHdrnLAdGDYdE8TGRU2yMedtnkPJQ8UWCM128Cc",
  "key5": "4eHLmaHXQUT7swFqVpx7wc4Ljd5FNqWe8eCbNHjYMoV8Hitg9yd9fJMamUYjRxej8J8N8Tjb9kF7ASYGQ3KhypjN",
  "key6": "2BPgS1i2cXozY1sQLsE78UVqTTXyQjvxBhRMNA7j1QvvRRieFNtZPUGciywgkynAzM77WVSiAdzajDwm6aTDKYBz",
  "key7": "hVFiUgk1mHbpqkAg5WxNhYq1869BNCc3sHBQQ4uaeKg1rQ58mbHaKk2qhN82RHN9nePK1VqLusS8xbdVPSVzrKE",
  "key8": "4ZekyhBzjKSLeSzCYyYLiyutMmH4QBNsmdvzW43Dv38RXeZbZ57LhtK75D5k6R8WszKsxUuatYxh8VSkNqEEDrJc",
  "key9": "2xh1Br63CEEx3GbKNv3bjWQuX8mFjqUT2Fthdgo2JpirtLwhJLwnZ5gxmPRu6YfCH7ffJYvN4ev7nzBkWoXcU9Wg",
  "key10": "4NtosqjscynHWoYdHz9UAr676XMxjjxipGQR8U4qyX8nR58iVwzvWL3K1hFegkTjqtBezdqevudLeGtfEfbc2mHR",
  "key11": "4gY8wRwbcgXomc1V8s8DdtJn6Uyns4eZnkQLpt69miVyPQR3CXZmydrDj9X3iGzcK6PJYL8xubG4g2H8RCiNHisj",
  "key12": "2q9E3pL9d37ve5jQsyfQ5JQE6nnR2KEy6NQCvmUWUbAiU4sWcqCv9Hh41o3tKUSVCU1kX2C9gE3nLNFGyVwQbk4w",
  "key13": "ZVwhg29YfK515nE8bnR9pWiA6NBuyU87eZtX5Uyzid7KJ4Mno7xgdvG71sJ4r94twjacVSgFHFGndy9Ar4Aza2X",
  "key14": "61dBcgeDM6wbH5kf1pxMVwXu6isN8EKVfJpJ7QJiKcT9MV92SZnZvJN6UMtaWo22oBugH1PAKYQ3LUr48A7UnLHv",
  "key15": "5im83ZZXfy2g5FwGhRAqnv9f2MCzdMM62qEy74JUJpMfXaANEFfmFrPqQvBKSZb6SVxRRu3oAu9wHExGFFvgJgee",
  "key16": "47ZZwQQcPmRm2a1m12kieN7g82Px38AmHL3HUhPMRvF9Rdat4YwBEoFXbcvXaummyE1eB4jSkk4Pr6rnPh3c1c1C",
  "key17": "3G2GopLMMxHkPgLARQUNYskB8Q82x33L4wZdn31YwMP91i3HkX6EaCARVu1C8BXEbq3qwChikaezX6hsv4AcJV2q",
  "key18": "3munoZ1BZCywiYjLk8i9fJAbPD37esT7S3KBe9MFVLgapZjkRe51m9xzQk1FCqmk2FpkHRRv6HJy5SKqttiaGQXc",
  "key19": "6741xhm56rwRiEbfKSGKqAuCsnLoTjWnGqUnKDy4JP8TMVCHJW3PHu6m8aENwD7ShoJG28CN8RTe8c7sUMZDdu85",
  "key20": "27XSDcceinUKovNxzvFkSNQBpadnqYps6VGXHDWBsGTiqNqnakad5Kaxk6PkvuvvVCjMwFotkDNB6rjsp9Bcs6V8",
  "key21": "4CsGVGwNTwoeHerD8R7GQTPqa9ZLJN7uuiQ5Nn8btBUPbZMRi84dCNKR4ykcoATMTV6cJKGyy5SbRSHXyJEMVRQY",
  "key22": "zTzaRQthZhFr9DKRHHy7gGtFdboBUWVTu17rUa6H5NQpdUVo6Hn42YETyrP1Ht9t8yqcL8ngKjBu3seKxUoj4RX",
  "key23": "48j5reyTv4yusW48PbzETCYZKyeeE1w9NXTEjjeFNyZV26pXiaBpxizwFmu9Z72c8rpXdvADarLK2rgXxdQ4Mpxf",
  "key24": "jjrBMh95abP6f1sSpMR5xgsbxsopU3oV18sRc92xd6zDHQxQupD3MBfSNi98Ge2ZVJhkhdLHjcSfMMV9MULv8fR"
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
