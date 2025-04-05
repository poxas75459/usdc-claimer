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
    "5uzBBcJcFk1SAsJ9giBNqjeffh61VFv98Lxgx2SErXzGHrBh45Suxh5Mnw6X6ift6dtYwsbPqT2T15yefbANxWWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZdQaTFndKrm3U43gdjsnABShmhVsegzLeTs7X5GtwCUoNnhgASMehXeeJJxYtNVeSjgCpkFDtGqAP5NRhwSjUA",
  "key1": "5Lvk1KaHKAe82E5qRexEfC28ZnYNycJAAW9krTvAtBR8PnBg9Rr6qw7JuMY56hCqQ64ERF1EbGgdRXGvT3Wqgdcd",
  "key2": "3NK9U6afHQvxYjnXqoXcAjqTCA3JoaoGSWq18ndWr54td46FGVR5xQLdkibVEJAYxrcq5d5cvA8jsxPqNrH7c6nq",
  "key3": "2qzK9X1pgQmxdSECFaY3D6UJ7CD9rus7FcZWCwBnj2R9Q9XcHLxqeHcng3dNnUTcWyUa4M5o79wrj7AH5WyAwxnH",
  "key4": "HdmDtR9ULA52qxggCr4zzbWowZQjJYgVsPtAZqAaUuCEsZBohVkPURcYro5zLbMA1xmac6QfwLjd1UbQ3qdUJRC",
  "key5": "5HMpw49gN7XAhdJi2ViPWZuh2xQrFCq7qN5LBnBBjZkWnNDifzU2XZGr2KTzQAXHoTu1nkBt9EPBc3k8ThScYgz4",
  "key6": "C2wycJrQZYBGuSbKfEA3KWSWSboa1inEAhZYaEiZBuz7u6PWAMuM4nrYiW2mDdCLSff7ceeYwPEZqVejhedXXSj",
  "key7": "5kWFEYuCoJPW9Bnoz5Qd2gaKqnVSNJBQwcPt5SrrMeKnRcg8DMw1UGPUg5nH6iZgRjdPVtXkGVb1HJifVmyZMzUs",
  "key8": "2xsJPmy93XZbh7hDzd2k66kCGwpb5nycfM7UJU1Au2GVxGd8TcJQwrygCwSbMwd8x3HHrPak9oMmk7ziCU8CqjBC",
  "key9": "5fe2kWpEsfENmfXXmwv5EZKRxC4XzGvzN4hDJxYKj9KzsMTBRdZ3Btgirr2NRTqjmKocfu6Wa3GAXndd5Sz1617k",
  "key10": "4AwzJxhpKZqQtWyw4AyBePqXtyyCKvMK3y9tR3reSiuvK7M5zr4EsFVCk5hrpyZenjyqQ5RN5MCNnLXc2M9FMF1g",
  "key11": "5DJvBkCuJb1oPodcJvjvQh9jLALeLRuCDDz6gEJSAbS5SKochqGGRXtgGYKVfh6U1U5WK1bdH95afwSBN8iQbt8D",
  "key12": "2Kcs3Wx2R8V4Pt5DZZ5pgMscqHh6GtnWWSERazHa14Hzz8D1wp8AodY9fNHrsEpxETMdq9GsyGzUgGiTE6ycrFVU",
  "key13": "53xri6S2FJmbVXKaihz3VPx855h6SoputTfpHx6kahFmG1K2BN31GUDPtVrJ9wRvNUNodnfRtbdaPTwJpgFqEaW5",
  "key14": "55mfupqjTvJVG74kJFWuMmzdm2DeFQDcTJLY9vu1b8SHNaLjnhjyPZhxX7U1ksbxnKE8xpezvRTVTnXB97MeXUu2",
  "key15": "2P6kxXP9jnVvsEeQf8CaGaKJa2gcYpKFTVBNtP3TMRTrMneXBhyf8wrUeC1HXpGRnXDCrN9ttkvWwL68AZvC7QHg",
  "key16": "x7jasfipBBfRRvfD9T4g88o1epdwnqjRVZ4raYG5KtMPRZGP3Z1P42WoQwv1r3X2CjKAfqtBZ9kJaBBaCystNGN",
  "key17": "3kmeeGJDSvjpTmM7bFL3ikiHaHPCRQsnuZMZsGRAmBgRgR1ChTDo7AkfvhXXpzHwKPwzt2RApPPaFbY9eqrzyapJ",
  "key18": "3fwxUtUjoCtYjmxdXP7v6bji2ZPubtWXmfApWKbTmuxDyc9iiyMWnL2jPAqz6Reobug86ucFd9dj3qnu94gArQhw",
  "key19": "4zX98RtANZzLb1nrDdkGKZbbYESv7Pg2P4durnaiVCwt7iEBwxE7ym7guPDirZH9d9KQ7Na5RkL479TfUfC7WU38",
  "key20": "3zz56G1cfxZHv8eWCf35wV8zWPfaB9tuBSvvxux4WXjPXahwavBLdCZNA42r5CTwCJaFvJ8EagQHn37vg9Z5pdhW",
  "key21": "5R5pAw1fT23J1VQMifAVFTiSejW2yKR3UrZpPo17H3vT8LyEHgcqchkwbby3jZT47g6SDEK3f1CDNK5EqQs83LvE",
  "key22": "Mq95RMT3nskbe2927mBLFovsfCR8NkKq5KS2HY3xGtmwsYnusehkE5ShK9B143pMCKMYyQuSsbEU7QMmiAbf7C5",
  "key23": "2NQn73tJ8tixaFUFifuLSTTb3yzZ3KuDNwfPrp67JuHEFDCK3QcHn76hfU6VApi9Cjwhs3LS3ew4EfP8XJi5jmxa",
  "key24": "3sGe5DmSDuyxo5w2ndi2m3hzUVC7Hty65AoFmGWc9pKnroqBdcCCvv48AJVwsE1RsgSuTYrZWTeA3AK6aKgBMzmg",
  "key25": "2tS9wqy2tWFuGZZK5QiyHK7rWuFDdb2NygtKBGadLDSMPcR3YHvVFBWWKqCuwrweZjyZhog1CscmKRZMr2FMR4nz",
  "key26": "5zsMBFkikpwYW5zWZ3ERpsPaUwAjuuWMt8WY6KyvSL2pmRbyN2d4GQAdBUSngHb5KvyyLvJw3y1NomgjZ1Ra5JD4",
  "key27": "NZA2yRUW8Ae1NhzA1mRWGV5wXoPUNXcF4UaeJbPePGy2ixfMZ9u3EzLN8gN8LhpbcxRDYfnfpShaoJP9DyS7P3U",
  "key28": "31DFc5SaXWPGKC1vN9SKPkptS7u8Lgv2a6G6P99CT4FYRUrEUfQ7yEdYfrHogQpJ1mLuiWJZhWRKtBUvAu8MsK8E",
  "key29": "P4K9cBKyb4x5WPkyueQ7ncNmUpuAbMfHF8qzhMg3BiSTabR2Lst1fWYYBzp5edS9z3hZEa191ExDes4z9bPmC7L",
  "key30": "44u9uGS5Be6efENtTnsDSq7xNhcyb6q28Pf9QkCfZ3j5evK2M4FnWqpBDrjU7opaCAFHSEqncCrCC7isAkLRPVUz",
  "key31": "BHzzDf7oZFbVEJfm2c21gnpCqeWMQWjyZMYs8YNPekSS2rUnhJ1o9x9N6waeE38cXx2Bihk4m2GQQfWtn15KuWE",
  "key32": "eYaNstNLHKbZ4cZjUweEhCxFxjbbW3RJZLVQPV1Xnt6d1EKBuNjjEdukUWKMWcQqDeAJMDvvHghdMuJ3JTuAGGq",
  "key33": "2uSLapv956R5S2Wjw44egT36a5U1B7KBpk15Kkq1ULVabBdZawMmD63vfrE9EEKFYPWmDt2XJ84BvrUr4FpWJM5b",
  "key34": "3ANk4NStTVYyEadyvwjoEviJSocYPoRT7V9Pxzk2KfGUUXoXrmGyKXgJXGDnE76cRKHsmWxmXQV2zd4KGqMJnZ5p",
  "key35": "62HUXAmzLL3T5b4Tf7NiBwYXEz5XtJ1oKbPvJthWSd1k9ErSpTZPpmSYYQcPVKH667taKt81guaGzzzRy8hRr9UQ"
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
