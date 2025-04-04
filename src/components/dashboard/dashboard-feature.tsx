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
    "389e5xuMvqic6SvmNxnsRKarQrtmjADtrqfLViRPpJUwoUDdE64Jf4un2dUEqfHR69ckFv2hstnxkCeRYsrmsbmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6NiExYrwoyQvXTBQsVT2TXQRBx2uvQeiKExAhDVuQYiATnLNRAyMgfxBHy4gvqYhNwkwJUWAhkMeoCnmvp7Nzw",
  "key1": "2MKoGWaUDrifDPnBZUsx7Nu9Ljvf9ZLyZczb7azSwEFBiT3J95drFUFrTxPw1w1P6zcbYCMWNbMxR6ZahBdbTiQE",
  "key2": "3V22owRY4udbZUtvGihMekkYYWn8JfwmcSUc9yQWn3fJTjYPGmagukpDtzAvuMcWZ6y44ntyT26KhMohtJuHLHB3",
  "key3": "njF37bpA5oQDJPX7JdtwSctVHE7AKd7wGQXDYonCu6a36nXuc2b8qnxgaZyFx8UrfJsJFvEVPno1wdJS7duoHko",
  "key4": "3Rd7zMJ1rYCWURpVyBjZzmj7VwQZZpnxQr8oduEWf8BKaaqddQaC2FR5voHdNwGvAZzUSPiZVimYFY5qpmy5Bwfm",
  "key5": "5SVr3EuuxPjkR3FairZApMYitQQazZJzXMMAPwzopkvcAvYXmGsG35gkcwAeeGTbhpuoZcDGdBfTDc2NJxgfYHdh",
  "key6": "5ZRpPUWYrixu742A7cj5Nife9naK3SbmasUuGdgJH3Ws1jQ8MnHjbnMebE6poW4pLM5F2XqiUvxewtCtCDmvXf5e",
  "key7": "3yN4GnVWo6BGWyn49LZ7GZSsS4iocQBrhvoyYzue14SWicA2JgsxD45VREEgZdn5bNgpR29NhMMtNw73Sy9bXokk",
  "key8": "3gomxsLoosMhhBck8fqTmLzGG5L6CecHLmGQqq8jzFoy254zRjmVtJdRico3PUT4kHgwqy1H7MD7B1kde71PG6Xq",
  "key9": "5s83aiwZP1SBNQtMeP2od2GQM8EvKah8CXq64muFo5McSVanssVMziRfYvgov8pFPwWvyciNCJoXPk8xAxPFYTME",
  "key10": "2LmxKX991MsQJM9qTafkDPb74cwpCSjFppbkx6daJunNM4rehJvBUdMcxweyMtLNs2F7u2D4S111UxEF8CbkMRXE",
  "key11": "67drVcQMgu3SjT49tcdP3e6p7SnmuVBHFaSYLuSBf6FgTdK2fUNt5Y2g1gtVto1h5TehvmadL23eiVjLEkdUVQGE",
  "key12": "3Mth9Mi9eZRFJQuDUDvvKRsYMjvQdKwsbMFFGTenxGmezazRZp8ZNHT8Ls4wAk5GCxZPjBvP6V2E8FrPeUV9WqM2",
  "key13": "24wLAWQyQ7ZSeDTM7MwC2BNigCCz5mhZ1cJ4kZRiz9vjVMjbxGmcWQcHLYmLBuPsqqqxEwKEPvGJbuNA3sSHEys3",
  "key14": "2fMvdi3u9WKoV1kj68SmoEmRRq7sczedc5fed4Rowz2ksdvaTsVHNpNkX1kFFCJLUjVdKczdCLQAg8an7k2uxYNB",
  "key15": "4pVsyZTpdWmzv21Kg8BGe6qKqPzrA8Rpi3Fst9yyGQj4KTVsSunbKaGsDfHcEDobF7rvdyWozzymd3Qt9ZW3G9ot",
  "key16": "2XogTYXmC1HGjp92UKdCPVvYvhf9NrVqohkEeAERCRa5qr7Vwcw9XZepoyBDpraLqsrtUxGJzYZFyeiqchbkKQZn",
  "key17": "2M4SAvi22KRgXCviB7r713ngLMNHeMGgRcakJ1mRu8Q1CzurtBBXdGDG7fomyfdWPUPhruq5H8PJWvrPGVuax4KN",
  "key18": "ovmw2wZJdtFfSoHTkg2mYYRvKq9yc6M88x1mDFgvnGVmgTvkRj3uwKGPWeGzt4Yw4xX4qshg3zKdNVbBMcLNBYM",
  "key19": "5y4piX9zgLoCdpL2LPJokhJ9SXDtSEF35bC99PqVi5Ar4gS2zyGWptT3VuHUnWuKpQ4LtGoD4f1Qfhbv4VwYVXZj",
  "key20": "uPtH4AHu5tRadEz31u5kk1j86yeS6nbpkHQhPYd16gUsVCzqVGe4Vojc3TisTNneyXLbfAcEGmWpW5fcFoB4hQH",
  "key21": "42wwJWmdLABKc6ppDCxU7DewR3WMkD7BJ8bt5rYAUxZRK3SepqXRWEbaby6HYsFwm7V4XcRBXQr2dKUMKyZ9xGKp",
  "key22": "UTKFsezdy8nC5A256fBbvVYsKzqrWF71Wp1Xrm2pEyZzMh5Zrg4kCT56Mf2YRHn53XC6sL5u539jm5J66c9nCXU",
  "key23": "4vXDa4N6TGTtWjrCKn9g6miV7oNxUhSnV4ZRFehSVXeRfjxCCUwNGdKUYNtqoxVYA7292ehQPEergAhFgnSPSDG1",
  "key24": "2eL9xjazTCZX12XhbH6QrLPD7Gnr6EDgfB7ggn7Sq7znHKft7ktR5oLnYRBqtzqUdRrwsNE2vjwZm6AiCd6p4MtH",
  "key25": "25MxMJpMz7W3DVn95raP7APRYDXBzbdXKweMBMmyX8Y5ZgzuBcbFJyqaBQZU5midh9apGPQknzHLHBHzb8k1mdvL",
  "key26": "dj7njQpZ3SA7UqeqoJ6kvi4UDHHygWXqdbCP3qG8TrhCiGt2GLAa7xmnrnXSd5fus7koq2SXM6movqKeopLji8C",
  "key27": "3u1SoGAVb9emN9KRq7YTAZGCffNuSjxruAw9BNjAjXnztcvpscCZ3gADfcanXiapRqd2DcbMTq2izoeGXsXeq2cR",
  "key28": "yFyAZVMoKofzdEP72UKqdDhRsW6fhuYwyTEgXwAea8AQVig36qZdM2WQkTUaq24E6hT7SaLcyjDGx7Uyk5JQMCb",
  "key29": "3gJS9qpYTgRiCw38Mbh77P8b7AE7SbyLbUnMpnqdhKKXoxDa87tcxXcFAtguQ1BqKBzRskBHoHbdYJnn1n2MCK6q",
  "key30": "3HrFERD6qKd3aWAPKBVNUhab686bKsZNWCoUU12sKQc6vrCKPmsT43AiUEfN1ySt7D6HfwSKTzdqztTHDVBSphun",
  "key31": "5rkywbT7EtMjhHSXTUN2m3YD7NY4a8G1HkjF16joMdan7jdixzu9RkqGXbQYhNPs3vpvN3ugB1JupY4xwrwx6pKz",
  "key32": "4tpKUeowxck4k5E6s1T9gTq8RqTQMVmg97kR8tSHPCKBCHU4rtxFh84z6bebs1tTS1aVzx3Pn6nk5ijtDfqAMWzm",
  "key33": "4SwKFUY94gjv9hYUjrGZ82ENCGTyNeDGXRtnEwpRuNUHhyWLdjZDDG2iAaw3bmHPD52aQ5iHGM4g1Qat8Rc5TAcY"
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
