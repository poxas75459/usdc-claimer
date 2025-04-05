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
    "5mNGDi7JdSaHJSScRc59hpWSLeG2fwVeT2a8qspiBvouTLMaZqJDGMuDyWYzNFJ586TsnfAUTspc4p287XJ5zZ4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxsTPeYb3eMwcnuJMSWXHTE6eCciPthCeHbuwXmqRJZ2CtPpmrZaNeb9dskUaC9Qbs6p5n6yjvXSsFZd5TkTcti",
  "key1": "3KjCP8s3y6fXDUTQ59pbW1T2LBuTUxx2PDGa3pveL6skWX8hhZGvTrqrqiRSj62dz6eFTrjVMfWWE8kqAJArrMs4",
  "key2": "4J7MFngBZ6Ys9szj678aDEMdufgnjA1MqBS4JM8P2tufFarJhCkxJGZupBAm4m5QDW9DkyG3XaDuzWHtNkmL1jgz",
  "key3": "5wJCdRBfxxKfZ1au5jY3frdqJYzfQrAWjpgbwL8RSzEAQZSsp2U81PKzFczXF5qEcsxxdNuoX7qhKpUdPhHBzFE8",
  "key4": "4QnVv86J55uxXZqRi7sRadwtW5Usa8hxpxW2nLGWxj4sTTsdfPA9LkzYTEfTpAGGgqgmpidXGhd8nFo2DupGT6H8",
  "key5": "3awoK6CS2V5ouXHTpNYYF2wCiNyhpNZGypSN2R737bY5cCzuvYhywrorUnJ67wzzctvBDrTtrQJVv93HjQ54vso6",
  "key6": "5LfzSN2zHghg3sHAMxaiuQ7iAUVio7W1iTzcRywE4egMcfYyVTD5c26WBXdo2fUrDbTCeddwSvNHzr3W88PsNn97",
  "key7": "5YGoAMSXGf6Vr1D2brvWqSFwR7Yc7ehXj4ga87VLMX9ahxB3HKo1Fx6229eKx5P2epNvvxqWkvQPqr2QcRMTfrQN",
  "key8": "MCkduMN5ic5A8LXdPoi1YgHNs3BYSDgXh6o1thFYa7tvMkMRJ9DEoZ7L5ZKofbBjpD9ReQFDVQkefpaEQj2NfVU",
  "key9": "5pTFhCAoM8Zw7gDNzkDsX9bCvtkAzNckWKdN2TVtjyZSprQbzj7WTcTWbRqm3jNizYxJissHxs29R98LRvuoSkho",
  "key10": "4JEuxnZu4WD1x9r1XoCg9MqCTyGTm2JCQdtXueVG1WWMfKiz9WpYdhsedqAiscdrL6YyjQNiaWBf92J64tS2ceeH",
  "key11": "8X4LPuqW72GQvTF6QUc3asGxBjyuiDCJPJxoSum6DT5KSXXg2HiqogTN3vupq1r7fXbub5xXVCQso2vEAAQa3d4",
  "key12": "4JktcLVszqfGHDj9LDFoSqi9zcpGzHrPcScgDpHv5oKikQdUN2MijsWkjvfRdJ3WjpdMXkSjppcBFGvR2zw73h4w",
  "key13": "65yGNYBtwqq7f44JX5uvWGG2F42GS5YMotc1W4in7i2vedHfBajd3v353q7H4ZZFLmwX928fhZiXXcwWJquyxjb6",
  "key14": "55ZQidBobjeHVR7XZUvR5iQqTrqb72oQhCrkqv5Kggs38X8rsso5TUt67bP3DPsawhi1GrvWFqYDwsqfUWqmLhEs",
  "key15": "3AXYsC8hUArECL5isvUYdxFjo9GhhD38ENxNoqY9MJhPzpD7fZdfeyxSVVU4ZGQN6FASzxxFyR3BvRe4SmXtCdBU",
  "key16": "a7UHRsN8bCoHdTofuEfs7C9WPvz7grifB2S4zzUdxh5K5EWKxwPKquyDZCxkBrELJQUcfwSJrjrE43XY9kRaaFn",
  "key17": "3ykym2ad9qQT4QKrKq4kHiymNjfMPMpEA22E7xQrjR3TrHFND4EJhP6KVEnAGeD8oTYQrb7E2eQ6YCnsYCy6rVSh",
  "key18": "2Hm2P4qL5tNXL9Tb1pWYhCnCBb7rPx89ecMZDNQPFjMECG65uxRCyCBVqin7NQfYp1Eaev18F7JHHdC2c98rHXGc",
  "key19": "4BuCgmn8xMKsik3godnmm3skfLTM5ryWYbb39fdPbj2Kz6fmHe8AsXKVQx5GAZ5XhuYpsX4Cm6d3jgwPWrdSJ6G6",
  "key20": "2RzeZskiCFizE8yiWksp7BR1kGHdnQxuaqPxnSFsFFarKX8j8h5C6omDwBRQ8y7Etgxr9sWscXPBzc3VcjEU2DE6",
  "key21": "GD4XkLnR628Yu2aoDeHYxHx5y1A4L8NbCVnHTKnN1hYXLZTEfmZ7xfvvPdnvL4x4LBDCJfv15i9WQTciPYPbqG3",
  "key22": "3btMHaTKCFWevTWEjNF8bybKx9dcBFLc6GNZLKR3SK6M51zzL62NRWpQiSByczDAeEQF8JpFhbnfJVyvVo31PSJ3",
  "key23": "26QHmkT6mzM2n6phWNjkfJwbnq6W3gyNPBfVcaxm9FPYCaDQsf3ELqmxxyKaeQaw3bMaKiaLVR81kykMAWEvp8kk",
  "key24": "62Sib4AQ8TVhb8Xq2yVZpJqsZcHNDHfp3tsgHF65F3GrijuoJau2MWbU2x9TzbV9g6Hb7PQiFhCoXNBMnisNpqGc",
  "key25": "3AmFawbi6zBvCxFSovAP7rGsC52CVKbBbgiLefLsLjEf6QBo2vy71qscoV7vCVVXjVZVHPUezwFYZJiJe8cTCa3i",
  "key26": "3wFAcJpBcXd5WNr9dEkMLCuyTNSziZiUpx8mBV9eECLW3vLjeEazaSBtSfszQMftc3hQUt3ZeW8oB4EuCRi1tSDJ",
  "key27": "3PwBkrCtL6jGNgTJzuFrkTTXyYrCaq1jXCKCcZJdack4qxZbtGWpUrYYfeSF1hhvLYQ9RVyJKxsV7hpoYhhMtotT",
  "key28": "Wuoyay8yXbMpgfnQDAKJrns8qfRcVzKR1TgfkqxnXVeYFPKfNKTkw1fJsJHTUgHr9yDmoxF218wNEEaBJrQC4eN",
  "key29": "5fx2ej81vHtMTPYwTeTo7JoScdnXMiZP6orDJj8qiKW15WF9iGxzuPxy8HjniXYHDiK9x9kXsd6m2J6Rp4e3PrW5",
  "key30": "tn4zRzWFVjZYVuWz9Ao1qt4MbBpAeNTxn3bTGMFSYxKVtC24bSUbevYcfh42CEELGBdrQ9JsMSc5CwPJ9mJSAuS",
  "key31": "3D7i4JYtvNLYEJgG67EGzvAiAQDrrMk2rGRBUWHT8SJGXpKrnjGSWoN9DxZvqGzZhjHKPy2r3y2pZqVHq1qSPJi7",
  "key32": "5gKDdmSKDjRYiVtw8gyeqDUM8kBMtsUYLAidffYgNz8kHsvU4Hr2eLcJGVRpkMVBpbpaSXLkiGtQCqTwvP1NK84V",
  "key33": "3LmxYvsYoaoo5gFc7mjJiZ8q5TXCh7QDARGW4khpNpf7XQs15Q5TGi5HUxnjrwFWJvo46dTMCmJTutPnmn1kE9ig",
  "key34": "5tczcmEn5yNs9ZcUZAjLoctB6u2RvsQxCkJ2k1njRqrL4VqfyZwtUTMwYJz3bwjL7gYbs3mfp4HrqMMhEAs36Rnm",
  "key35": "3TrhExQwczYDWXE9Qx48JALEsqz42PG3m5RXo4BQ6Dct5DVhRFBtiFb6gp6ASoJfmuB3fAquXpGDuJpzu5SmA8Sm",
  "key36": "397VPXBipjehN9bgjmWMyA4DnmceHrCRooXu39VDTM8RUxbK1hUWoz74uJwWijgV3NUxJvEde4zdAmkz6XZczQQe",
  "key37": "4vdtzMDg68FjcpyxAW3JVta7fciRUCKm8XNUfwpPKGegSDUCCjPM8u4NHLeX6HAEAccinnCa9cXxxscxSgvskpJK",
  "key38": "578cQ6uADcP8vZtmqrQegWwhiWoX4FdJdZKPsBfb7is1Zu1dh1yyDrM7ZxSACN5UZ5niyPGK9iPzSmXq3VKkyinN",
  "key39": "4Hy763SWZnGm74WpxHex8u6EaVwuV6FzStM1HSKNPfKwbeT9gggh4cPpCwLCuN5MKS1AiCqf71VzuE3tgAEMdZAP",
  "key40": "5GHmNVmKMg2SsNqu6LHCTqkGWNiDsarkgLeXD546C3emWpqHD2c7TDComPS8K6GPSRbe8ppXu87gHUi7gK1Zkqim",
  "key41": "V64ikNUT7kyxFhHwYcXt3hJhJS1Bg89sQrBUp7PfaBWMnS68HDYFBHVa6PYQBLdTtKgeiEiAWNrZXzPRaRRPQAv"
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
