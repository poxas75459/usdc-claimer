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
    "4XXavaVRcZuMEebjiVGz9BbvcaHAir8hYFTDRycJTXUYLgU6qTJfLrqL5sXX2ppvbCRx8Ey7UgxjxXNbApe1q36V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25amLkHJHGdoj83fqRuuu3qqsS5VnBhCww8hGq5eav7E7xjozMUeE9jvLmTSgXJKhifkc25xs3TEoQLPLL8NLWnT",
  "key1": "4pF6Coh6PV631W22sjcsXtctx5qLNbpmSfeYYa5EEKsioAM9gNbv3p23cBxhynN5pHs4dVQSg6FXK7wggb1NyyX4",
  "key2": "8sE83KUEFbemsb5HK9yzuRYiLjPdzjxAYzh4hhGBP99f8xMuLzaDCns3ybM4AodG63bTFYZDFYNV325wsTM1d6Q",
  "key3": "41YeMcbDSdHzhKfeLiWCRbTUpcW9aUchoHMUfnZjWgt3PFUYnnN3nT1VMfW8TidX8DrT6dbi9J78Wab4ocJHGYDZ",
  "key4": "5y6R8NWHrFQ1FBFLWNz4V2xh2v5ZDLdAvpZd4YxWad75BDfLUJyGmw8UnJR5ErEFyZs6dGyXokU38ktZViihJtvT",
  "key5": "4QMTvUiuxd4P6su8ua3bqgxXnShYThjHiQj3VSpzAgZpyevxTT6YH3us5DkXeWKVEJF6nBBGoAJkQBgvmUNuaL9q",
  "key6": "3d8iuynqRwpQVWeuWnih7YTbpQy33NAesrSNvF5DBh2h8bFQA1zHmtNHjRfN3Jq7PA5aAsctGRcqL3BDwGp2LtBp",
  "key7": "4bDpKKpr5qKhMHD3AMs3R1jEVZfFQqmy4JSNPzRN41hFsrF9iz2VNiALmP6BmWC6otv3K6XaM6qdXBh1HgvPR8uL",
  "key8": "A6TPc4jqRN5z59gRoB6jsk3ZpUXwzhmKUPmT5E5FGktGJrLwMQkGRzNdUQe21P9mjqahGJEzkkzn6QicDxE5V3o",
  "key9": "4w6XZ5PUpgsRmhNCW3yTNsaT3My9uDSrdBASADgikedbhvWKUrCam5MG65kp5Kqnry7BtMkWaUUBD5N9y8c737qn",
  "key10": "4mv6fwQfrkejPeHUfUS63JbnHUxsCtDv5W7sHXdFVS8hpexmRCGtcki2saPdwfNL45ZescruFPWqHWjZ4EPjQu3u",
  "key11": "3rY24SvDrPh3ccAhTq9VEMzUSRjdet6GUCrHjcq6PhaPDNm6EuaEg1mP2JVB6RQvxjexpysDR6p68etHi8CW7NLS",
  "key12": "3tHoYi8zNjToYfEXnwW4BXYm1bitjNLkFaD6PVSC4Xjx2X6HJHNfuybhB79botrF7Ejb5EvzpohVJiw6ySsSwEaY",
  "key13": "cg7QXGZeaJfSRvcDfZ4LLiCc6J6WcXukW7AzrkaRzYdsKQiab8xWnq9y5gZhpFPTDBz3dNFZQ1rZb9QUZUcbisj",
  "key14": "456z9XvDL7S7DtfeZAWeUGXVCoKGHmhRMERMJUt9Vt6kR2Lw8gXHfHE5AxbQiqySuqtRhZbRzTdryJP6rdvAeUUf",
  "key15": "2tsZL8yo1NnKSWswKtKgrwAPHQR5128PdzZqAToyXiBcvTjmYfzSrUGaJvryUTXTwBmWQb95vgfUCKmmJWh1Y6ST",
  "key16": "4MsDnVsVqE84o265k8xsXK5daoVsMWQsUYnNcfuFJZQyBi9NkxahPRyUr7nMaNBMmxckwRc2UaGE9nwQC4VFU2po",
  "key17": "2oec3GprWSJHwaeLnzTa7j8iwshpjAfw3BcyjcHFmw8FYprjKygzTKxB5sT2rFscqK1NMVanxDBMxvzHdDxW34hK",
  "key18": "2c4bwZZSafdg9zoNj8d8ERaomxmZki2bTWVasDq5tUSAjEgjEkJiU5UTNVJkX8MG9Sty7QTDxs82Bnu8RBw9yFoa",
  "key19": "2fUYBAYVgRzam1y4mQJdpyVBJ5zjs5eEuFk4PfwpS2HYhPTE7qpMah86WF66JPDuHxf3PWHTHSZ7u14bNLc69fCC",
  "key20": "WhQ43mGbncHGWUrmRdAAyJanpjZcDmeEHhGbXMyXadpLuBbsHaZsi4FMH4p4zkjpJqmLHaZpRDbMP56EXDtHWmP",
  "key21": "5pLMZ3EdRNZZeJAU13M6kd7F8UsNcq8WMzeTjLqSysBKLKmCCJAYbgpaf176Nwfw1sYmMHWQYdzweNPHqKXKsiTQ",
  "key22": "i6ADr1CicrxvvziTT9zXHmJ6h93onyF5aVr4UjRHBWaeHQ6T7VCPnj65WyfDQ4c8soxHE96wWu8d9Lc5CLyepPC",
  "key23": "3eU72qV3MoFRH9GM4BevSPUgyphqFDFwiLMZYy8PcBeaax2SaMR2hDfBrrAheHEx2M2R42N5ctMMg5Ha8gHYPjcY",
  "key24": "4Qc3XFSSnkLy2u44Mdkno1JCVW9gShQtvFxJfqHCetLZGFedqKhM196N1sECwPVbKS6gTKMx7EkKEMx2R7uVvach",
  "key25": "3m739tUhBmH1gr4spK7wuhHi2YeSxXSA8g6UFQSJPC1nbqWp7mZ34LXU1NLsFNLwvoDJwK8mXkpyEwqxaUBMryFZ",
  "key26": "3h69F4FrwJ9SJQhM9JD9m3irE4s82yCBBG8dr2xDFX5bjWh5DfLXu7iNKf2won4oVHDNqYLJgNuR6H2Rqz6UXAq6",
  "key27": "4at9Bn1C4RziF5xk8kjey7bX3HoFrkYfsGX1VxtpAC5hbZZbeNz2UWkfyAhecqxf6iPChuHdNpo8ZPuLLF34oepe",
  "key28": "4aMqN3MfAEkcoVr8U4aUNyeKCFyJ6EdWf6fjrGQCctMFHjEqbewJPji1sXWdbA83yTuk1WZsMCeFuCUUzPboJngC",
  "key29": "BbM2qGJV8CuWAdnryxDiz2tg8pGisH34s3xjgHahpv86HKYAxMHKBMNtpHTnDz5WLz97S9gG5HKPnE2RqWQnmyD",
  "key30": "5rvVWP3j1SQaiMDrfwQRGmhiqEjQQcR5eRmqsouqUSHJh53wtFhYYcH6eJQkrvt7usZVQuq86bsgLmwggiwWALMH",
  "key31": "5xCB6Ji38UUvcaFiuh5yR2znDrEz2J45rPSoUCJUjiHMb1ZCpYNfXcnr1DWiGKeGJyHmQvvbBBf57foQ4AG7vt9G",
  "key32": "4Zw6fiEcrNMe5oeiLQtJYAeMxEdvweshJRzwvqy6FH8oNXCmeJyPi9XTABmUC8CnDwMucGQVf3Dj9QooydiSce7F",
  "key33": "MWageNCWJ6vpUPfos6afmdgYAkR7BxcVjrX43BgGzx7LvxQ8exNeNUg4sZvj6EeSVekQVQzV167dx99nvg7AKx2",
  "key34": "5bBSpYv6BWLYczxjv8HrbcMVFpMvk4NZfk48rKzZXckuzcybnxWcRK7jpiwCprFsxpXHHWZVs4bjYrum43HJ5tN2",
  "key35": "2mHpC85LbqTcgvMvqWpbAu2dTxNWjmq4oKSHt5qv5hTwCprv1bWsxxh2ezsAqNJ9kLXYCushbtGBLoQNMRt1L2sx",
  "key36": "5o3biwD7RnG7EjVb3amEfkoEzcHcJEzkQqpDPr7GDWwXmKho5ZYiwKo2EubaFyPQ4wGdMdBFZYSPfiiXG7BL3R8X",
  "key37": "Wm95VCD8dwX9xrvaPVJoH1SXJVd3JLEfSg64ht2ASUV3uoUijsQrKgneWvdkPJXDLfg3p6PqgE1URdUmHZc3oSn"
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
