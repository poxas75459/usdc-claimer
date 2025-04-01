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
    "5RtCkx5PPZCjWUkG6irc6LRuRy7VCePkSHPDmt5b6rc7Qq1EK5JPMHtQ7hA4AGZYxjasuw6ZWuxVnLFDvL1Md2i6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUMUz8r5RSu29buPfjQX64AmHpdyM5yjnZo1BUGb17x9sa6Tbt55US3WPFJMJW7B4BK6V1MUdsGs9PRPZHHa46L",
  "key1": "4PEyrimTCSSxyorPns9PgxQfbApEhMLHvB6NmDuLn7M7VwfwC7aULZGDyRzFtkdG7qhpyH1TqoN2ha13HFiqtCGR",
  "key2": "DRhNkjxvKsYWPSUZk4eQxTWCccM8pA8ZnFvxNS2DKL5v5Es51d4XwhaENXo8ug7tskxVcz2zQ2XVqYgdMXxkkZP",
  "key3": "iXrmzUiaDrZrfgMkvG2N41ZTnUnTWNQr7P7EWbQVq5tJRaDvAZMMihrmpchpa3zPP51UkRUaFz6pzKzfNeP6xCr",
  "key4": "B85w9pGBmYUgWi8bPCMBaAKqNTBMoWz43h9nGBW9JYmu9g8g4MWCY6hgnVYf14XfsUMngNoLWbBzzZmiSDqfpjA",
  "key5": "5NbNfaeZ5itmejpkbgk1B7SuAoY3Mz1cNqca5LLrzcTZGnKnqYr9Nkx4wUSCcoCVYGd2D1mxec4GgMf5zXN3khrz",
  "key6": "4TSLe7gv7aeUeZD37W9LmVXmSQwcm4Jp83uJT2pNNLTydA3yn6EWWPoHiU11fXaFQFJ58atQPc8ScveVLMStYWqj",
  "key7": "3z4QRNWq1bURGUvUAR2GFrQLw5QqivbgkX2qd5VXDsezherbPPX6dvvvKTKaW4DHp1mGKqjFsv3Em7FmrY1qZNAM",
  "key8": "7vLT1HB6pbLujVfJKkG5bdkco8ZkUVXf9q56cT1z4TGhhDLXedvDwtHvCNvZhFtZ2FhpEUbMy5ftvvpgEuZ14wu",
  "key9": "49SZzqT5o749fmmTysSNCVmJZRZDySRvnr2BCP3qFfY4Kjh4G6XkXRC3JHtUduTRi7cJYW5LZFtRFVCSWnbFZJTb",
  "key10": "4umfTy5SaLYzLDAKA3tF2YmuDfbsCGBVQ4eBQCqAf7Mmh8FLBwiWgx9omWfaVk6NY1YUH59KmirHZVXR9ssmEfrP",
  "key11": "58fiVaE8FUfPeNPor56tP3xLsmkAaTmg4dBrxC1GiGkMkHLe1ZSJKYudbLh6uHVpHfPwVLF11MwyBvXPSUMezzk9",
  "key12": "3xRMpQnLTiPkNjMhiMgbmwPoXLKcQyaDbY9pGktKSbVrzbDEgVAtUS3zJ4kxEC6xzesNkTwaKGn7mrAfkpetfJGa",
  "key13": "4Hb5VMG8HhnC1WP55UwumPgJaDU57fb5DER4393E71P84XRHZXUjrgAxzETG9MmZXXFqUmCRwduekiSRPNdwjvc5",
  "key14": "128ZEEsEK3pQhuFX2ZHRYyZAczVfoPzM8vFzN7V8zRVxV1hQPZuztBW9RkR1saE2CD3XBKht6S6zPGF49xZ1hfgU",
  "key15": "5GwghzkMoTFRedUEJtTPQmWMrp9vXAuBTiSjMFL9rQMiVNdgqr7FeCWoTnNGGy6Jk46UA5FAHugVLy6136VumZ3G",
  "key16": "5jrHbicsFKbbay23J1PcUPKf8Sf6UUzy4dU2cCXBaFhsoyK1K2S3NVT8xUi8h9hRkw34BLQck7KEYBMhiGNiaGiQ",
  "key17": "3YnBL1NYg74rx3uv8FQHLQh55R7jki4E9FngZX3ZYpfwZdxD2JQEmid2HMWczgEatE3mhGxbXd8vCiKsAjLmoEm2",
  "key18": "4RufYHKhHGfF5nNkDfX3w28Vnmu6mQEgJUE2Mj3tiyNb9ys8AapeiRiucV4AAiHh2jxB6GL6LUka4MhsbxygsAdB",
  "key19": "5wvdnqNNzFRZVVUsKx2kBkKuJxDin1DYgUsoKSMcS8iQR5kPviiwoUxLmdaaAJaKJoGaGkGe6nb9m3MVYVSLEWUX",
  "key20": "2n22FmekD6unDdeBQ9stuM4osTwkQNKwuqyzSYjvEL8ngbLGmtgmtH1zK9CXt1RQFsUdD3Kzqceu65oUjPtpUPri",
  "key21": "5jbfpYFRTQs9wKsJbLmsMp2TcP7jYqsnfG2X65aEvsBYHV8VyXMcdab2T7ZhoyA36ApGDiEd58pcioqrc3m4yG4t",
  "key22": "4gSZm2JJA2DdR8V7DELgPSi3cu7vgpYvw7BqECxmTdVG9YuqHJZiAvoxFdgDgjsgufmXJSAZ3odDDyiBgVA5VKGJ",
  "key23": "4faMv28pGtehCcwAH9eMBdXwJMwDnooTnhYY6CwewVTccADxSc2hRTZpUCzd6zodpQWwL1o6XZSkAkoGZk56B2ib",
  "key24": "yvzSv84PUHrQnBHRErsCjtATaXu1u9idvgbNFMy6YF1YjMjL6UxGoY5gf7uisHmNmgkLnu9QdzQ6feLjGTnuDaX",
  "key25": "5ogjD59tHkmy3uSt3D4Z5GbevS47WZ9X9kThezaRswAzb9ypG7HV7rSwTH2yu1QaMA4CcNW81NW75ZzNnx9VLmSz",
  "key26": "5E9JnXqz2m7ngMPvgk6GKi2MKotA6KnXFoecuczeCDjqRwYxgdrccySnsKxqhpebbSW4XYVPF4FmKKMPaDGFymVf",
  "key27": "5vZHrYeaukwxvv9SV4GmfZVwusMVbRE58BPiym1RuYxXeLTynW1mvtWkMi23aREvQmof8Cf3jXxkxn6XpybCAFgE",
  "key28": "5JQKyQvVDYiEA2hjGUjinknUYwsdkCTiM2qazGLjSeRxg8Eipdw2PVSbE7FHhYj5Q7WEAFZnpfVvSvEgd3yFm3iC",
  "key29": "5mfYvLtCofoxTbKDGpttEN9TUas2SvxFDGFyEgu8PsLLpmctY6h5W2DpyqnSTvFPpGfYoG2miHHW1Va8VwoqGcis",
  "key30": "2oYELZzHmPAK9N58jNPLnd942KRBBtZkAzVP3f5vxUDyTQhEAtrBUnuMRfUtf5QerRhJGQxeh4TqG2WtvBtqNcyL"
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
