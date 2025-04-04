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
    "w2CQQVpANBW6VkmrgZFC6pZWTFQsbuxtj8ZsEZvsSt4NJFE8dLqjTCha456vf5mGkxWbSJrb4WNpRstL6Zu82ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pq313CxePJ9VkigniybCeeX2s9TAuASbi6UoYHc51goeU8yvusyaTPuvyq5VC7tdZPx3D9uWyREJc2phxXkbid",
  "key1": "qbk8uhYvrxciBD88wmixYo6ECjXiz1UzYz3nxKyWRdLjWKXqYEtTmiQ2aqC1Ac41Cii65TNCWcKLfJHBWWQyZo9",
  "key2": "3iHnxx2zxvo6Q4h5ea9eyNvT4wtCK9uQKX2jYSSgoCGug5drPVF952zpmRA9ZUzfRw25XuRSTmYQiefQXUG46KY",
  "key3": "rXkUGveJqy7UnsYq2mrQMG8UnAHUuB1SXkYPXVD24My8G5eWkwte3ndbFyrKVwjniTBF4beCJGbTRvZKLZWqbNZ",
  "key4": "442YGDsyfkhmmoo5Dm3Sj99JMRN4MnpJBjgj6gxdAR3YBEM2sitXHUyYVcQj8cuLNKXFJwu4H8vuwSAoRsmK7ncJ",
  "key5": "3YamxThAnRP6kRQrC35jmRrHCah17pcPuT1QbXRSUPgVwYG2fkpnrQbsP5NG6kQyQaSuWRH6pVrLTCvMSxpQqJa6",
  "key6": "3zNkApPJPXCiHqhbqiCxt7tkjQJKeZ1thoKuDVXiUt4BTb7d66YGA5f5pSqg1txWPSyMk4EBMh5ciHpv6AbrwmEX",
  "key7": "2MVopGsmEF5bMJsxQcXqtyBPy83jDVDGaaVr1gwx27tZbm9pgcPAUAJvLVkdzsxryc8mVDrmam5TcBhFgYu6tu64",
  "key8": "2nEzJrPhLVApeEAhjum2aCitp49DFjUxSzW4eLTphVXPhzj77Uf8s2WueUHKD5BovHcVTyTCh4uXqu7R3dvP6adT",
  "key9": "3DTy4xceTwa42UpdVveLa8mp22f72x3p7rHoUJC9gsm7GkmXAy5xTmmxLAWZHh5AKrxuxwLqUm2ozqC417pMy9ma",
  "key10": "2JwbZShMU1Mek94ZHK3JP1vejjkbkvvwRZYSXjPA5i8MHrAyFUSd2Lk4kjuUncpMkQfCegFVYAvdpu6zRLZStWKr",
  "key11": "3VeuNUqfxjEnc57qNSqoimZBm6f5NtVR141V22Kp53coyJEWBrv5KxP4F3Ji8xnPE8n2FqBirtSZh7cBgrMR6PJj",
  "key12": "5PBx5ZtU3qPSPA174faaNsydZja3bXiZRTcyx3hG2EH9A4FiSanGA9pJPPP2dzTj9qRAzDgWSDGatMqUHLpxDV1H",
  "key13": "yyuFA8RWpj2AwQ1fs2qJYW8C25GVkmDEJFUhuBYCuCzJc7Ku2fFTqeu5CVwgzbKSCeSXNyWquTYARPm221YVAup",
  "key14": "53FAKMQKqCjurDhqYJZm2o6xBnx1LJGDYaqvLYamNKriCWaE7fyb77zWDbSXqnMh2yo1j4aGc9t6e7RVqamsTT1n",
  "key15": "3zENes3X5XqJsrxAFrdnaQYENH7S48A9PWALyGCC2UTKLs28SijZfW14Yr4XyxYbj9URxedKpiu4hrt9ttrahk9F",
  "key16": "3B8i3s1cTs3wJPnxGEvBGYRQzEqiVxfjnawfEPQxShXjk5HTxtC1Cs9QCfJvwBhr3i5BPGjqwSG6tMh18utcrTYE",
  "key17": "UkKxb9k1EmGa2icVmSe7QHunZkwJjx1ktVsHiv3aMM1QeknQamed2e5L1cZurNXoDyHH2bWfFuvvbLw9tfA8m1P",
  "key18": "xgrhGPEGRnmxLRtxUG7XWH4uQig8YEakEMsd1RiQvKoyGiNX6qz7c514SaU3upMoHg6ViiBrMZWbn1Chx6rSbCC",
  "key19": "2CRUEArMNC5Y3edXke1iuHTXRyEpKWz5CtxBbfnUKzGXgPNLNwTSvd3svpDiKgnCoAshtGT9tK1bE5Q6KoyCRDdQ",
  "key20": "2yKk68aE89LXCihwPSqvXbiwwvkb2DwSB7poJhdKXC2fSZYKtDroyh1JHN5shXwWrG2eRp8L9MCxekdE33pRPZiy",
  "key21": "2n8avREUBU6BW6khuigdYf1vu4fUpwhSVvv6rVTDaRsnay2gMSg4uoHp4GVp4z4ze996nj7SKPEwirr7ehHx5gk4",
  "key22": "3gxkxpfCDQB3X5nKhp75k1ZmGrfnTvBc23eVemm8r6uzeQNhEn4KG2jehAggpxPXeihdPU8nrR4pA23QAqZ4ddkM",
  "key23": "hemH97KE2puUNhU7oR5eVGy69wJ9PVWmnH9Qpv4hhCZUwUJ6PpFNJxEP7GBe7mnRb8g6LK4VT4uNnFeWoZSjXuQ",
  "key24": "3eG4CNSEkxC7UcYUd9mS12Bp3zbSXvEge28L9J6NL2EXFbGtNp9fGzUGx5sRM8k7Qa75GYEztgHn1uL8WZZkj1Nq",
  "key25": "38ZhXAg6GDtqi5qKB9W5SHWwxQz9Y2TmL3CLCDJ45tbXG44x7Kd6vWwmn7fdFb6z2GkAVizW7NQq3W5PAV8hUKxF",
  "key26": "5M8v5dUUZ7pztsHTxGUCpyibjmn7CLadrtom2BpoZnjtwDT3FQKPLoimf84LfJTSZtiasg56Eecf2kEfJM9wjm6V",
  "key27": "5uYUpPbcM2GtQmgLY1nw1kYhy3ipy1Kew3YScrVkb4BSN5PA44n1i9ZMg9JPmZkjaf8qKX84ciJwD2Wv4MzBv6Lv",
  "key28": "5k3xMrDvqUeEzJE2qRpaHYp414b5BwEKr98Te1BML2FmZz4aJmsgao3oWrhvH3vBxjQ8z3qRdquKHGztLikQYL9t"
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
