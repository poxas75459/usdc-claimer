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
    "5fBe8hSnexgiXySRFigHxYfYFN4P5efK7QKwcAXZ8w9fe8wUVg8yvFC1AgTuzFhYafqoiqSEw1e7M5X1wjjSW5oF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XVcjUPbauBcHu5ZnNxkEVGPV3yvWgRhTChXwSoaxp2V7BvTdzEqWcDMtmhcNHr68LZpAvY6mQQwAanYkTvTLHY",
  "key1": "MyogFk8at8vLtpN6KWYtsgJjDesLjGbq81VVFUneYNjomnY7N2FjecYVztUjeGVKhZZBg1ggCT5fHSwAWjiT1Nu",
  "key2": "3o3Hjd6Yct4ugLWqMULhhWf942mvXyMVThqQZMYjwYJ5U24BoYwuQcVjGWdDKte2kmcVjzoEc7WMgLBbwPR2VqUq",
  "key3": "mDhsPkW4opwieXpKj8uc7GkhwpYp5Bj764chxgJopVDbyXtpLjkt9bnQHRkpepSXjiYK56K1mPb9qQQZULmrKbB",
  "key4": "3WJEBa2r4qKgTmz1i8kWfdusxq4LxLL3iC5L9YZuTjPUYmVFmGYqHvyTLyPzjhEBkabtRQeqCMDQRUSCFGXtmPpj",
  "key5": "2V5dP1NirDGtFwpMSBD3CH2Xe4hHbr1fkWMGHH2VAEY1To5RAGpVzNc7YGXe1apc71Lge9gB9mG4EkEjSKeaQT8u",
  "key6": "5NsDc7CNbjcjhLiKR3red9oPeqZRpFmDC8FDQPixy44nYwnmkDbA9mqNsVAB4Fud3q4Cr4roPW8torjqJ5DfqRWQ",
  "key7": "2XHdUY8PhynmE1xfYsga1aBpVuEmYZGhCc3nZpcJBa477egPPUj25vYZZyb8oKtwVFzfHyGHgKpfJh7hkvtc5urp",
  "key8": "41xc88fpRZCyMHv1NQLZ5JuLpp5jwLCADEVK9ptk5VVdBXtvDmdXfnwGywv2UewYHqPgcJ8qgsqK5kduPpsUXzZQ",
  "key9": "2TboZa8qdHCZ89FzwhEgEodK7YqtznGuSJGF8MSiahnyFFH2Hzv8J1rD5rSWLg5ffM39awxpGybvEbRj3MyDt2FP",
  "key10": "2icyMB64ryMjxjHJisgSCLfvzDU9P1jHGz3gT1Wo3TU15UoJheAyNyeUQwQydC3C591Zr7tsJeWBAaKZEhmxr2mA",
  "key11": "2c8PNSbAP2LtpNVcZQ5njYoHCR8Z3Ta2pnPshDuCa5QM7bdxh5ADuna9MH2j3y8nGygbMWfxcX5FqyW3r4qAAop",
  "key12": "4KyM9WA4HhTDDW68Aa7L7kYGfjVCJsvkggvtWhnhbfFyi8PTvd8Gw1pbsNMLvRUM1Yu5c6ZWyzFgvcRoD3xDXZE1",
  "key13": "4v5ZFUzmjz6tWR9bwMd4mFCKpDErnDdaLuDQVmQQdNVVsTSXhzb1C9A1y1KC54QpuCjCUJTMFgQz8VdWdx6bLGeg",
  "key14": "5irz1GQbFwSzPRjumGU64wNmUoqWNTeh5vdCb2TkriPQ4NHg8pQzs87RPMTUQAFxYdfAiAjvG8Rtm9g7cMg7axh3",
  "key15": "25CKexfFvPmR5CQVjna5J1xDM6q7yvENcRx1mntdCuDusk2MG5J3QKnZWQ2icYLiXxugt2Px4CPpsqu4X6K4rRS9",
  "key16": "4MJbnBskozmaBhJ3PDQrdL8KpWd6D8bMxRS4Z9JuAyWskgEPiMjhxmBzQTXJ2ToeSB8ftTsNWDmymU89hnKvRz18",
  "key17": "4fiwmkPqouwo3YNefRijnG8dyd1nauUNvL1T133ZMCyCC4N64Df4969xhZWkMr5AENVgyJ9g8c9JoiT4CELv1T4n",
  "key18": "62JaHY3rWZevuPCPCSSzKb4KeyYDgEfPLG5kJBxonKqBEAjsqCfcKBY5UF9CHs9fwWd1nMpqogqtPYN7xvrds4Mr",
  "key19": "2uo4aGiR5B6U4fLzanZBzXcB9BhgQoqfGwnqvcrvAx4KA13XgUQt6rkP7wN6HjmDUfSWmXWGEvWmZmJL2s1DXbW3",
  "key20": "4H36LnrVrp2Apzsz9HxZH27QGkaHLCvXWm5yeSMSCh7ZAc3MuXP7qcHwz6L6K1QsbtjrM76oTjHdJHxPLe8D4Wnj",
  "key21": "kQXiuDBXd3j9KCjgwvPid8JHHVh29afSv2d7QxAo2JTqqvRA3xKR71DwBxrwdzjPhv7Dy8i1NQZyAQZvWoDbAfe",
  "key22": "yEr3gK7t5g7K371KJSN7LJz6mJyE7c4UsS3LgGLUEu8iJ5VFoAnD2Wk1iYrA2wN9sRrWr1E6TbvGmPN8ZeWRuuu",
  "key23": "2omLE8kLXB2gRq76W59uDxUF3TZt8JwQRkEMnhzov3Ab53EPgYJZZo6aeERuXbodGDin1M9S6izSNbgnooVciu3A",
  "key24": "3kEkx5yhYvCjykMDSgYgAxTDPzv4mHNc2sNDJYBpgUYRsNAgM1SmjXrFmVncFZ5PJsC8PHfqSsaGzMxCWKJabeyH",
  "key25": "2E8zZGDWgjHHzCCaNVgh86HwX6KCPG4S4AxN6ivXv55MfVerLTZimzrnGskbxqAKG5fg8iw3UK8NiP2cwZsQq44u",
  "key26": "D54Yr96hZJvkJSuEvQhP2GQ5KTG5vQ4jjpoYtmC5hXBYZ724Rq85Gm7CpY2rxz9rdonrfbyE9pYn9R4dPmZUkWb",
  "key27": "4L3ApYyUj3gf3EAMeFxQddKJK2EZ4jxA9KZeRPKZAP3X94JznmNLHMfPPBUrBQ8KEmNeXnkG3nj28YhK7PACeaQ5",
  "key28": "q1VyXKeTS2AsjuvVmqCWF8eQ2UQ3qZMZoJCVfSBxDeNQjaQfJFwifa6jammZLQvwHpJ1DYoS8NESSj7NUQ7v1Rz",
  "key29": "5evVRXH1XNdKiUXmAqtAnRrjLJx64NQr6r54FchQkdeJbrAN3Tr9Eyfvan8v5khac7XVkRnEMyzPSUmo3TzfJwK4"
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
