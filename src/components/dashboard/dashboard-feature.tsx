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
    "3HEhW6ZFd7KyZSUoVXJ113JPbRnG4TwhH9oR5DU6AKi3ojXJR2ggq3UEkpryaVqGVLtaCHPiSyVLSpX2cb7hVy7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294H8APZEdtDUiTWaX7uNcokZUw8yHRwTwE3ocYiezQtu4ht4bkjgENJn63Rudwq3HCniwQCXmye9u5yo5y8N5uR",
  "key1": "29W44GNeiQPBRnrr886gJzgD9whwm2AnLV1qk9CzZBeFxGiBFtNFkeEMb19ucmxgWc8pqC2PrJwKghvXve8Au7VR",
  "key2": "38ubaxjvN4cDybKPdWX2qKZT11T2feuZQ8vE29xn7ZPwSEvw2Kn3HWELj8uXjZ3N1XtDpUp91NxKYNbygSogBrFP",
  "key3": "2t5hdyyTjLJEL7kcur4sp2aHwQhHGKE7E8zeKrFL7377EC7JkEESdw9rrDsLod6nKwFN2Y3W1gNwgVExD5jM6H3H",
  "key4": "5LdvQrpg8qiDAZArHpQFd7TPew1dvPsM4RnqRLYcKmuqUMpSsuPFnNaPFEk7e8ffzf44K2s5PNU9UqEULGaDr1jq",
  "key5": "qV7kifQSNMG7B6uWBUa8oPfX12q2ayEu1pj8Z2r7wtgzwKDuuBcc1KdArCHdxHTq496wAxhuK55uYPs7MizuP2t",
  "key6": "4PgaPuYf277hLuZAavdSsDE4GmQcvSvaEXT51BcJ1q5FfoLRcFePsRxoaddbzGhVphX4rg2EpyCcTZbFRbrXZbtn",
  "key7": "3tutchjYUpT6DyTG8L9xmdSWHe4Z9BhrbyufXyvdvYV6Kj5segcFRNEhHBmpqaQDcNRVtJbpXeF3oGYRJ8MP4aSF",
  "key8": "5ofEcwCWQfgNTqM83SneZroPRg8W9FGaAipDXdXccydxFYYX1CNavXGtwGeXAhy6nkZanBzMkBNBBZFrNeEaBJvB",
  "key9": "2Nre9fHBrvsStfJkpyuRNKnSt3AhBCqHhRX6JRKtkr1HxogmBgGuBg5TPCZ8dqRBzCCE2SZ3Baq5qye3ytKbBSaP",
  "key10": "5Scm8MVZsJ2yYx1ocwyeqnPuzfcPvjy2JYWmQwGBuYhnmqNdKtCdwBofqtA1ymEjvXQChsS7TcLFuQpPXQRwqG8X",
  "key11": "Gyj9oyCWwdKYzy1qsZSDxMoatcYARCFqM6xvj9haSKxV2EKmtF836JZUPmdhoXYPnuN5dnLvQZzmHPqTx2gne15",
  "key12": "3a8ojwuLiEmekoAHeAKBQYaAeNAtFVvajCwyoaeaJnVWK7TFoEK57keHLHKzgJ7enMssZ6aWWrLKoLLsmhbpvEYs",
  "key13": "3vbaonfYpGaW61CzZFcTNGZAyUh7YvQDJVwpWqNFbZTVTi6PKsxyhAUEMbycTWxGdXiQYHqs7DzFfa28HCkbrxb7",
  "key14": "5FnVg5LfszR2VyJYKXcknMSBGSUS9SXCBPVuPFxh2Da6rFdJ1r4nE2M9vXVwGWuvLj8Wi8j9hX69F4jSthsGnPSb",
  "key15": "5WbDiKBSeW1oHMYe5kqvK9dyL8H9jtxeo1TUDr6i9ttx6rdS9NG9epBydtpjx3DVGPXjGKBnhByjy8f38GfemnPK",
  "key16": "5uefDYgudHtRR5apdarNrz6FPjAMAz7Vq7sruj3mQWD163HKRT6TxXxQBCNZjuELmzhKhQaoa98yBSkdj2S5ZdqW",
  "key17": "rAV44mGD6KgXNNJ5b8V86Bb9umaTs3HA5oERWv5rxV273iNiQiAnWDzaVz3Z3p6DP8Sasgna5BS9r3o6Pxrmw7B",
  "key18": "5RK3k72JWZD5nDHsBo9bP8HtRwom66ps1xS4dD2m9CRSg3Rpy2UVbJ3UmTYdKkXnQMMjGDZkCT5bAkWEiLha3Lh9",
  "key19": "TDXzoTr1RE5rgcu1tFS5C5dKPC34d9Nb84kDj2qvLtCtNgzrwu2AAhCqUenaSu5VHBiH4oraT6phqSWtqjRVKQ7",
  "key20": "wLKj6qRzJKrzcsivL1vM4u99t7KF6Pmae7cTHWgbmYbTjH2EQ4L7cp6shq984YLEUwCzAKJLRnwZiVRaYMt3vQB",
  "key21": "4ds22oxsrDSAWr2e6zwGku1g1tjvRZEWEm9ukEJen4u2EVhr7m8W1tdrp2gefTyp5Xyeyg99BEeDPxjyEeyHXniH",
  "key22": "wPDSTB2NxWTcrkwAJ8MYFLPWtMELfUYHUt97zPYP4cF8gLZ3hJZVNWfXszbQt6zodEy8ernjRVSHDSLXXF2312d",
  "key23": "5N1G4pD5jCRCPWeVpWxKJAvoPGVG3L9uK5Yjdx9Ut7FQftzxqDDodd86jRTxUp1RpXHzEySp2J1PHBoYSWE9JFDy",
  "key24": "4upKrcb7p2DdAQA7CFqkLevJKRSp8EomsGUL1UNDzwMDpfR8s8W27TfR8zhzKXisT9ZH5KJygMCAipMR6J19L1ch",
  "key25": "4w41nwoLxqWH4moVJV5kWgVeFJqoQwzMWm7RdSyNr2tMpPyfHav3eurwovm7E7X5aNm5T8FhYtR6GGm4hVkUcvmi",
  "key26": "4izzZzGPwGzYTuyEtjLAqaeVvZ163otL92FueTQtHRnby371pLeUDYrugZu1xnWGzPkkn7QSYNR4VttYMej6Gm9W",
  "key27": "9Hmwoq1Pp4LAABYSM9eqVHTfKX5GbLrUVMan3gH2hNP6Dsm7zgBfkcTbsadNmDmm16FiNBijRggRMiWnL763vAF",
  "key28": "26ZLBJPhjcvwk59RbCHNr7VNWvyCh8XUWe6Gx3uXAqgAKsYTaxvcELdzjEGbLnKhauxtemM5j8PAXuckyUCa84Pn"
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
