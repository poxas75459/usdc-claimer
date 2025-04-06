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
    "2E39y7YTc7BR95ZKZpy7kCKumUtNTDgJ2yGDJnb16Q86DiuB9wNXMfaGRJC3nw1K1QHrUQWdB4Mstdc1SnFFs3UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7qoRR5HwxeVTspmZqie3kxHTedL2K2MwTo3E3wv6U8T896kdB1G5KAnjeSx6nkKYZ6k1bvjpmEkv9YLXqF5fMN",
  "key1": "3tQCf2RqWhn75TYNYNuojey4UTmw2Bu2bjrZBebs6KrrjkA3M7rYg88ETMnm4pp57ZNHpzLTZH3nnqu8cpVsLa4k",
  "key2": "M7msLsnvWd7bzRA4ubRin5nyD4JRsiwcSkjCJbmntR6YdiDfZRuqMgAqJqaWnK9dKgsNuCmqqXHn2X2xTKjuRFe",
  "key3": "3EqbNKb9DMdE21x3U2tcArmfeoRRjksFPuFJf1XkidxS8DdTKQwn4fSbja95msWXb6Pt32KCGkweyE1vaEYmBaa7",
  "key4": "3LLTFNPxSMAKWBdLgUt9NMMjQDDDzKoYTQEjwrA63eYmXxH83Sy6Zc7cTf6dfQBEiCcEzP9GefNEr5ropLqp2HFq",
  "key5": "3iRzmfYsrcRfmfUcrbCfF7RinzAZVU5nBv2g8TeNQrKgngb1GWAB8HT4634GuYmf6skqPxG44E7zHrqEL3pGLQv8",
  "key6": "5wfrqsmnKrWatPnfQWcLZz72YiqbXBiDdf2aJcFKnZojFe3kME5WLiBk3vT2DDV8BXT8aRYgVjPAGjd7fmR1wbEa",
  "key7": "4y6xR9mEEQUKBu2PqZTuE4EUGS4UjtTCGaegEeiJLrywG6RKDykjdtMgxEvYvPr56CGi4KLJ2m8NjUNDT4YWDuCn",
  "key8": "3AXE2Cfuu8ibJErcmcmimGVVif2vc6nTEW48fgbZVq6SnBFUySDdar2Ki1tnan7Mvyumg9QXNYFZYd3Jn9NT675o",
  "key9": "32L4g6VhJgx4nbfazpJF4VyvLtaXKM4PnpNKX3goBvVywmMsFAwdkcKBRVopd5mHitZKmLWeD9qpfoTtF5aLvoaj",
  "key10": "5MGNHheNDUDHRWRmhceVJM47qqocC8HWY3bQGabB46s93TZRzXCwk7WFUpgHUcynsXhVjZRiqmtsk7TnyCLAvAny",
  "key11": "3VYabUesjbpeVCuJyiqKHJq7Tb1L7MdsrVwkd6CVZZJgp352DEDh895va4tuicdcXehdR7rfKnyyz4Dw7Pf21tBN",
  "key12": "3M53YMdFCUejnHYojeGxNvvyvN6698QsXBXKFzdpQnp8QPvj8LHqWmo7PxkGrAaeVD7taXowU37sVhddByMiaHoQ",
  "key13": "2WunfiEMbV9Ly4QeNmAtRA63p5hJVB7ZypLWYoL6yMb1fciimJPLU3jXjNhB2FbnrP5uYUCdBdjYfQ115Uqeu48h",
  "key14": "4NoDbEj2RcAvuvEF9CA1tFHGwKGvi45a9yMGVcpUvU3emCkL6fXyADagG5WM67jSdFFuCDGrMFhr8xQsMiHFLTvf",
  "key15": "5GiwdCy39SLxUuKJKcNKUbsu1bnDgqzE52SZtAKCY2G8nBbW8c5P3ZNnr6ZTFzqQfSt4Bdf7nVGiEgbqUYAnaZ1W",
  "key16": "3afnYNcW7GNznVBWk4e2ePu9PDUbGXXFCpPooesuiKgTEXd4e8k7R7vWjKdJDyGVRBrYMWqS8LYGtqKHXXgqay2x",
  "key17": "4nwDRxZJ5PdBFcYBbLLLvBradx6R4oXD5LiNkXKTFS8h6qqo6jxiEgMf9dLmQNwLAJvytsDCHC4464ftKFBezmf4",
  "key18": "z3wZdXuHheMzKNCUTAVpUwquPHCeviYCNGSUJmPL9iy5gW6rFdbGZmZCv97rjRSJTpFgTgvZzAcPR8fg1rrHmXw",
  "key19": "28sHbQQEoj9EXTq2L2GLAHfoioVKBTW2jRLeKMKQTPLs4LiLgaJJJ9ZV7Y1YCZsTAtQxzh14x42ckbrwAbGpMdX9",
  "key20": "QtVHqEZNVCahk7kzaV6dJ26PXZvEB37sQRoS1jWJE2ZGfxBnxSyAL62ZZ51cjKBPkGC1iAk7fZRk1QLKUDYMkpS",
  "key21": "4FjjhoMyrc2VwKBNrfzRkv39BSd855ajb1fGVHu8k3gNttaet5voignqE6PewPxgE7L1XDzZQ8hr8Uzaj8kEfsJT",
  "key22": "4nN4UCv1F3fZSMXdopWyJyyxZ7oUc2zvpqiV7KxZx1WeuoqrZ19PPnNuzqbLhu3qZZrpjukR3XQwePUSU5gSNUMQ",
  "key23": "PkdqnNdU1oEqH5rGzyLGuFh5gTP7BZx14TncCAnBRrh9v4o3hJXrJqkEXMdNACH2DM2zeJEA3uTyCqv1Gf3vVyh",
  "key24": "5gbjmw6uN2yYmuBvsYMnkystzSRPLmR2Y14EJsw7PDf93Fjit1yqm7aUCEFtsTob4HGDuBbHM8LMJysdjVZToavt",
  "key25": "2iWMvDJxyKRfgqTwCzLCKJ3ABuUucScxYAVqRgFxpTYBvmYQAqHnsEY8pXyFTjWmo2yttecia64dWdGfSoWjGLRK",
  "key26": "5ZsbXu455vQWtpkL52krH65ioEeUT8UTdgBjEYVMrqMDuH8MgqD6hQawhd24UkKVenkJ5zbWHSMxvqgFNqAaShGw",
  "key27": "5yfyrup5SBa6ofUFGSeVK4kpsEn2GLLyk8LeTAqzCRT89g9eWv7YAXk5dQ7bDs21Pgj7Y5NZqQByAUuhZGgx5Hjt",
  "key28": "3cFvpxXP6xx4uE1Tr62dL3WywcpixXWiVscC1xj2ysKMEKPFDbnDZ7LXFVSCUdamjBZC1GZknrSdJWVZBoFueqVP",
  "key29": "525ZjZmHBpU5vA7pMSuWuSkgMGaneRGyYNktiB3jvesuRGWxvjwJ7hF5v4QJnK3hhBVixFMF9kcwVHEkCT2sPwMA",
  "key30": "4t3fbLJ4iifZ1nk1XoPZmzUYqhfRWxGN3FXNPDZUzXmJLwfc9rwf4MGkcBjAgfGs1d6fJHfEa8Bpo2cgP1V81iJi",
  "key31": "4zZPWqhv9GJtxmCG6MiS9kzjsqYvPkCK2uC75DV7kafPFwTue6fpNukWFZ8wWv26y36Pkd1SvZUwk7f9LjvVPieU",
  "key32": "UrqEyn8x3jtcUH2spmcGpaSaFjfNi7qkXfxCDLnXVYqtRgEyRsqggNs6V1ybNRmVuRNk1WD1C4LU6tzmpiCNmBW"
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
