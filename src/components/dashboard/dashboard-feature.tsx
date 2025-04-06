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
    "4V1EZYFefShLrUTy1RfYz4QQRH2jZa1NSe42ePkAz4raNYZi4cA8tYnNJQ4Qw1yhxLGMLG7HZ7uP64pzijdxKWRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghGt5szizMgxMbpNiWy4pWrjuRAeeNg8kEe2e8fQnEvUC6jbXryJYEnYHJpEPmu2fbdHhQuJSkkGaM2bZdH9SEk",
  "key1": "UDgg2MiMq8QiX7VLt81hzcgmUK4QrHGG7tNYM43PneNQXQNRvFdh1PJPwDFu2BrHj2wPNHBDBvofREBm5ap6Gwv",
  "key2": "2LgAMq2Ez5gg2icgVC9diMLRnS6xysZjt8SMhHAa6UZu6xke8USgrZeAREQ7We5QzpNbdTnnsd9r69Fxev123UD2",
  "key3": "5tYGLbTX2Qc4BhMUo9cM9oMb5XxHQsjcGLAbSgEFm66SYHPTWzKH3gqCVPZz6wHcjAA8yg1RPyTYbGaBdp77s9uE",
  "key4": "qBfAnYpBonnV54JFi1NBw8XCejXPtSdSjq7QhZHM2eQCUoGjrf7i7LecdQbmm39NALmEJ41L1PiWWpoJhTzwphF",
  "key5": "3ixCLQchj6ahMHhu5tiojSGtxron65wBLC5SJ8d9DAAL7ZTNenAQhCSgof8frNhdR8b1wKNUFNBNcz3tsgsCMUjG",
  "key6": "4xEjNcrKfB6tuRnr1W6UhAetvt6i6eyZi7UmZo7qV17nQ5X9aqu9a6kbapfjWEZpn1ERBNWsUsNYngR6nPVEEzBm",
  "key7": "3jh5JgESWpmPmfBr26R5Zas6EeHhDevnMQkG7WaQEG9G3sH8e5yAApFHipozxTSUvZ69KrAGhAHCiDvJLgpfPdZC",
  "key8": "sKn1PYrGzieyZKVXEEBAQMbAvNkQmbNnFVLRCuS64GEyKg7BTSKqbhET6Nua8uHLzp8ymzwz3VP4BTNmjsdXvfn",
  "key9": "44WV5ZaoZ1XqjHcNmWBCqhSx9Sv1piSFm7MH8bkKW6jTGyZvYntUNCc5ee6nb9TgrZvtFemKhD6wLNpUeMzQMYSM",
  "key10": "cefrdVPh2zpY7DKn3prp7bEKapZmuU8DNo725Gw5m7wZtK2r6eYD85m7GDjn7sC1a85kMfAZdcVNXvPcyw7ZU7i",
  "key11": "37mML2KgdyMM6CfCJRfS3gUREhWG5n4mZmG9kCmnUSQLxFJRCJnTCVjH69uY7RpNhmizuQyHYyDJkxZu7q952FFy",
  "key12": "4bkqiJ2RwGunzjMn3qF6c3vYv6HBiA1xgtL58QtWzfU5uCnSnwx3mB83AqoEx3MrCaHkxXSpmdDUwpRmwo1UT1PC",
  "key13": "td8MWxLqtnt8TNEHc8PbtfQHFiJozwjdDEyBbHzdiMghZzJhyaZVMKfM5k4xkpQaS15Bx9ibzi3L929iLPHCFL3",
  "key14": "2Knc7BefM9jAPfhMmQhCykvyLDzAEAKCfxMsLsVKpRWZm1MzhFRDHdpatvDKpqqGB2T8Ji4TmwpS6WY4iqGgAqPF",
  "key15": "4wmGLvRGNoVgHBActGkUZAqioehhYX2HdZF4uigfZ2cJ3ofMXni6Pmm9SMSasPxLaHQWTwhNgQBcabiZENeHAh3g",
  "key16": "5S3qvH1gBUGd6dWoVkWFiLiCQ2N6h94GsKVBP45cRNbv8z5ZssaEQfCHboqNsDajvwWz2FEXHP4VswvtnkzTC1PS",
  "key17": "4jFd3off4Ldi3owM9eLwbzYJAvWeczKiHkfUie8D93u1eGVEjJhG14AMYb3mv41yKLRdimU1ryhJDvTB3LWk3RJ5",
  "key18": "2v8miPtj2HSryBWSrfMTw6GuWGuvbpwbNMo8FZeTMaG81vQ9FubdcMnbdfcDMHdCkyXLw17bbKB7bQBAw25Rd7aT",
  "key19": "5NvFts1dFFDsSo2J2598QnwLFTG4N4krsDbg2RQWYuX1NtsC45zVhipmH2PuNz5JbSkSByyEVj2Bt8yre3HeknJH",
  "key20": "5qQLxYpxb44EnBxrSkGQDFsQpPWHceT8rRXLFEApGhstYiZ6S7VzoVoggkUJJdFDcYx51dG8dDRmjhLdr2g4H6LZ",
  "key21": "3noJN8wsV3TfiwvxXC267Ar5J5DEvy18caMPZvm89kW1pAccEALwSVsvr28iX5sEeNgYnAQhBXdcPDT6uzK1hHXw",
  "key22": "5G9mcbSXKRJ1UUkzQnj7RABTP3uxjW74pasXwqQwoGPXx828sXFaEahqKDdG6ncu1UTM6eJm76QptzkE48MEuyBE",
  "key23": "3qv4fzUMqDNT2qhsPkboJ4T7HvHdnY37Hdn67HtW1XKC6tXSDbeLbRtaEEYJ53RhcsvwQh1x6xaZvNie7JQd5WVp",
  "key24": "5NBgHazMnJfRYXL8487bFSEwpCSPYU6LmJksNhzd1NWKkiMNDJ4ke8puDZ6WAcXWMApeXhSi9cKm1weRKBpXfmmT",
  "key25": "3go55fCLhKmur7nT3EnTW8eMsVF9VikNfHRhZ4v2QqAtGXfX8NNr8ygojecgC6KeWY3nj5tbrNbiQmYqF5DdXabv",
  "key26": "3XF42QEw585YbTZmMd8xQNJxeScKjSBTwV8egJfEvHaJJd73tx5yzTxGy3aYaXatcoRiVegcd9sNnyJsk34kPowa",
  "key27": "Ax86EaMoyNW12rLWHbccfs2VLrpLWMu3a9ZMneh8yd5abvgVdhWcJ1ieZKomDdGT6mtQDzMbQsHm2nhqWgsuFsE",
  "key28": "4shttMe7BVswmVXtcSafviL4D7eFDhGMjRWJwKdNpBxD6vDYHa46u65s1daAxiYDwb5EktpaYsJWSQigKYLWnqsf",
  "key29": "e9ie2GuWVDn15zuGq2f2rKyvidkVtvEnzue1poDNWLd9mSE4khCA1AUqEMVf197NbWRtkhP3P1ZQ2qn5acKJywN",
  "key30": "2MaXvyNSCCuaatnzx7Uc6MRVX2zQjUXYa7rFJ4pFRDDGL9v6rHBSNHkd4qrcXhAMn7tForSWkzSDJM1mALx6ju3U",
  "key31": "2UJz3r8hX4HUpeh2daeTYee5voutwAQJEUz8DHVXG4cZUebfBiLzQenQhWSochanMgTCrabivL1tyhyFpNEo9jLt"
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
