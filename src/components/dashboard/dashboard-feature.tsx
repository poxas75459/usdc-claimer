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
    "5S9it2hvSRVBRemBNTy6TXDe7BWKSefWpgXNTEbfS9KBodoxoSBZUZQ98UARphS7C1o7Axs5tdD1e97qQfAwgFnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCCYMX4DKCmr5WHb1zcgVdMwwUSzBiu3HeVn8JdtmiFjAUQxNejKCc2JhFLpueC8jujw5qXYd6c5Qqi8hde5KwW",
  "key1": "5NkET1KgjdeMYQvbUdksLxyPxbRJmiyGH3FcbWP8XkbBN63KT7gcpP6tNb6KmnqTqfQiKWHsMXn2qkfWjivgyD9K",
  "key2": "fGoy2ZGSchTEXFs1NdCU3F4mdQYsuku5mnme3pqGPM9qxgozALAvTPNdoLeanfuBjpxpqzfJaNUZHQ6d3J2KTcJ",
  "key3": "KfRmr8u3WY4bKSyz5sfhfVyoB25mxeMvkFvf3umjttkUU58Nmp8ihw3Po9GCnRNUU9z9rrMJ3gDF7gzzVugNdjg",
  "key4": "4wXwwPiXoiLEmF6NzTGWWkCgPZKdXJ9KPCMeZHabDtuEQoXYx23cCoR5xcntJq9f5sLDEX11ePyeNC9QXJQZhUwB",
  "key5": "3wq9vF5fZFiEP9rzbxLvDKErXg6RXbLPsXaxAvJSTgvswXPuy5jhgzyLTYkrEYAWTrAaTw3PWM1eyz3iM4Tyh7au",
  "key6": "ja6FpVEwQFetCqcj2FuVdi4Cqv1mdA2ND2xFmP97Nr8QbdD9PxMm88Y5p26SUzx2aCneGYspckxn9kkQ2RKszMD",
  "key7": "5uahxU239fzfvZUsNjqLaMvSE1fXKU7FYEmRhtSN8KHceC1SBcUqAMY4E7UvVATz83abY5nw7cGxXJSmBAgthjd2",
  "key8": "28Z5UaFsgdcbbLah5NShKdga8cdBfZ5Uv3ADQPEtRmCqe9FohK2NQG6kDRYGSwfT1BusRf2FwgzT1spheUEoQQLq",
  "key9": "4mamAti13To4YhqUTQUwQMhtov2AFC5AkJ83373tCNNFTyZ5hWvVL4c9tWoaHRKCRrbKx7xnM9c36ruCU3yuxCd7",
  "key10": "38friHKeie11qvvqy9bGP5t17nc5gae6sBAdWPsaAxqc4TeDCkgkCxN5zC5p8RiYCaVgdZwz4JZ356vZg9iBu4ZS",
  "key11": "43UKCHw8EqicMTeMj3BWKscBvdJdZ6prkKr79anUnNPXCenTKcLjsmncjBSR8nYZ3UZwwvPMBgceV2mcukmPTNB",
  "key12": "NYCkZH3XPQezFErX7Txtpxi4iijAHeeLv5HWeraJyoHP9hUU2u8jq5RXj1trZHHcRgQJ1sqKiuAiu7qZauNjJXo",
  "key13": "5WfgV5SwhPR3QQefbFQto3RaWL7mGPvYapaa88YLdbw9B15xK6jBARCMXQkNanxQRuvb3X3oYPHcdrwapyu2Qvwz",
  "key14": "4kyCwNtwDTmYDm4VdoWeZZdftgcbWdsUdYkVogSa4Yt27oPuFfxU93pCXh83rdZRDqAHhhCEtFSdbePmG8Cjzzdf",
  "key15": "2NGP1aHPKS3eveJyy6qZX9E4hgqgPdXfx9EKiEjCCsmoGuq8vkSpLNNPtmSEE8TV7krqJWiMAMjUqSSuVxjjSAin",
  "key16": "4fM8BwxgqSUdSvU67xER76Sa5Sw9mRzCg3Vx4BPbcLUmsJ1FocjTGw93adBUHq2gznhfjbrZ63ouTXiY5SgopDzr",
  "key17": "3DPSzWBKW31TZdJwbRFXUiicAq76fBU6GjneEZsUMc2JK29inpEAFrr7Y5MNijvRLwPNA1GHSc65WqRpK4TrXD42",
  "key18": "HGaW3ihTV2Y9C7qS4TkNBaaukw6vLneRdxMNVC4m7P3TpvhN8oFdtY9QEvXY5UePgsR6k26mkYYppuRv3CymUXU",
  "key19": "4da3DN48kvdzQBhTEdzDiQnyneSPHPBhPPBMPsPYtPowd2X1nRFo1t15hrPvA8SutRjxpj2XBAMkq5kKpZ5QiTHb",
  "key20": "2MD4nJfUJS6f6xiBPQEa39dbjMMPhMJ4Vb81LvKewqpPt2H2dB7QQyU8AEKJ37wZWYcaTVE9KGXzwAAaEWdLBQPC",
  "key21": "9sD2aZmPNj6wWeT5tWtbZqF8Dgcymh1RJ15raEtr4Fx7KmRXp14v5vKvca5DJxXUc8haZorXZj472VrooagEK52",
  "key22": "22bz4DdRkMW3Dsh4vz7ahvoxvmWNonKqVCFtnY4YZ9yxZ9koyxCufAdruHnEKY8HrnmhiSMUz6NoWNHvuWAZsabT",
  "key23": "5eKW2BHDxdH9JgHvUKMvLRN7qrGoKRhCehxJSB5oSJwDCwtJ2GhmxfWQwqjPHL97TqBtubMv7Cw7urc4UC8tzo8y",
  "key24": "3196QRS4sgJ2Jg5oWxwN8RBbvLKv55RRDERRQAZdkrNfEfZNMbD75WHxhBJctZHapRb3jJCMoNnGAyYJybsK5Vof",
  "key25": "2DCLdD4hqzMqmMKZLSqKevc39MtgfC4Zt6e7bGfbZVWDuJePkoxGNnR5zYSCFrGUZxP6AsnQvSxFHf4bphPnKPzG",
  "key26": "2SN6PpYqsknmp3jJvTUiCe4ERYvTfMspCT4BFcSDy73GgMQEtDHs1wnqymeTzEmgfZ4riMsX3X1Krx1eNguMzptp",
  "key27": "CAdfkpeqmXQ3sprJUMJm8ktTspUze46MvZaQVjAZ1L3riAJn4M2Jugr5rqdRfAQgs4kE1FcKb5m1T4WW3KibxfS",
  "key28": "5zxYhsrE4zuEtSScPxmYB28kJihETM8iiMRVXkopTQY2NuXS5hKppScm8E9pEFFN5AERj4gYV8bp88M7DJkdsxSj",
  "key29": "5z4brnwHFdf16MNkBiSpaq7WDFmGrZbRxzdmniQMYo5BFroru5qVWNGYbhp5y8YPpXhZq2LpAD84BimMKjKW62xL",
  "key30": "59XfkuZpUCiqXLGtAD4XSmSkMjmTZH6gtXzKRNFvwq6Cuqa1yQf5MJXDRkMgk1gEHnC8oXvgL7vsZR1MaeuCy2tk",
  "key31": "4hAtmD1cXAWZAj6rYC1W72E3N5ffczy5qnhZCDxYJwdJH18z3ewLbiRv6CNtxxfEQaGV7vgJFGUhkUqRAvRLcrK",
  "key32": "5dgH5mB2LeLtxRJKw2BaRNvM6h4YKomnSdhSqua3vYyfhBWaTmvjPttCgB5a4ZUwTiuhbuoaGFc6PFTcdaXbiXQc",
  "key33": "5QADsa6bNHR9uwRTu2LX6SJuqY4aawN7VDYhrm3KwtSFW83Q4d94hhRggqckPdhea3kV4P3kv1kGEFvLE2WMqNxn",
  "key34": "5pGYBbh9L6LHMhjoHavv4Us6rTuTZMamDgJcbUEsmyKjjFqEzzMkFveeXYud5WXUH9Bth2XjxrjJMujzHyJHsy6p"
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
