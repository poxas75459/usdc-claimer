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
    "51vnHMtfedZfzxF1biPK54i1M7oPFw8xAxvViVPHrEpDVHfwkdaumyAYd4XGHGL7dAZ3qKPAW5WZEPiYCXmimZUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tr76EgHgobuFUboajx5qiY2Q9iWzybMCsNZUK9m8PjokSFiH5EkoPrpfLVBnct4C3M3kcahT7HQdg8eZBUFRTB",
  "key1": "F96hu7XXAx4y4se5HHGC3H3xLn8jk8f1gGrmPabd4wQYieMRwCbEK6kpMfMqbjsAxVGtUHLFNoxririeuy8Uu3N",
  "key2": "41Xh4EQ2CgeHTFPYhVxtCgDKfZ9R9PrYmrfeNkqbtEuJy22udPfGMpMJ3rHY2AjpCDUGtPajuuUAT1WuTm3nNytE",
  "key3": "2oNFqhZ1WLw86KtKRFvK1Y3YwdbLcVny7JKyRvxPr3iHJd88b5q3WhutmZ27oGxztyxPh5VTBaY42RRy5FRzsKFc",
  "key4": "2x2vcarwsFhauigxqDEU9LVmMGaZksj2mZ2x2bKLST1kNJGoCfGMWBiGHiUPvryPdDhw8pD3D6W2zaV27KuE3ntV",
  "key5": "4EZMtcmNDetZ8i4UL6kY1pgdsSRJ5B1yN4y5mNCtCDJuoxMmyjCRGfqnVnXkiJQ58THtGd22kDc1DgCYy1BPKRu5",
  "key6": "La5pH1hBoyTnAG7q5qGXRGim6trj34K2B1kJZJu7bLpEc9PsJ4a71FUuvRyiu7XMQSwmiEkXQpewBzi1sbCH5ky",
  "key7": "5XDMeeiFQca9tp6qNhDFTbJ6fGVASjV62JBimHenZgWhVqaXoa9acNHKZRFgFDLJUYdHvfpnQiNJ3ZpCJooV5z2g",
  "key8": "22mqBsSYKsbqMnQLsti1rwynFF2d9LDcdD7MuQ3oLcsaBzxmz6PccUU24VWbhZNEYC2kUJwVcUv5jAhNGbJv8Gux",
  "key9": "5VbqLJVXZNdBZB5BCVd6hXkChTuowv9YyYQ6rXVPLyqPHUFM9vsLZX5i5AvrycFgWQqDzKKYSExKkR6VgZcbDTWw",
  "key10": "3QEgJJRJR2w9TWTyd4M69gbSGodREHFD9iG6GoyjojV1zc39TYCbeueVQNEbdrfALEFAz7hreMVxSSR5SmBBYnKb",
  "key11": "512bEXmsL6az5vtT1DiY2oUgMigZC3rEC7HaAzChoXR4mE7xcsHnAmPL9QyiNxPpzzutNEnEPbKvaXLuLHg7uo54",
  "key12": "2gAfefRAfycwdLUdHejTecZN6EhpAFgtazJ612QDCYyDhqfTAsPpC2KUPhjvp3SdSrNGfnFQhxSsboQg52h8aEV9",
  "key13": "5HFAA3zFxN2KE9xU19R829oiwxeysyc6yXXJ9f9gXLve7D26XrP85y4iHzf3a7LdYKk1X9Bafu4AuwUE15xhpQCm",
  "key14": "oP651s9hKpSfqc5Sn89prwKoeN9A5561xbvYD5MAsp918GG5WEgLHwVevczG1UX7PTjUSLHLGKeb7fQJuoJW5UD",
  "key15": "RB5R2nEjW3YtsBmmVZiD7dQHpiU7cswqMo4oiBKqDGDVgriwBZwNE2byCWGmafCBBYFawoDD4sFZsTFG7eDvGZV",
  "key16": "4uuw9MpKxmLEHQbdMsnKyxyGwSqYeorxv3R9KE8EcXbANMpC2SPkeWQkdpRB9xS7xoqaWGyLWApivus5DBQ6R4dK",
  "key17": "pFg8dvTZa7HfC4EoxyQhcpsELZGNyytpeBPUuCaaJjAWvFvtNSRJyDVfqNFJZSndvpaFF8AsvZDW8YfgMmi7yPE",
  "key18": "2QkfnV8Uc5VHcmXW2EQtDYjYr8xnB6T6RaVfxQxixjEWfi18pJHWwjpBWhFKEYHLEWJX814yeSPrUmt7wbZqQhzK",
  "key19": "imHyEqGY2UdKwkdSLTqFePuqB2PYb3gGuSmPA8gPLQpxQur5oDmsQMoiSYaKtGrcw1SZbsFSAoR7GpxHiLn8it9",
  "key20": "2UgKFhkVyZYo6XLdUfnGSSrvp5TEshibLMMvDAVkRnKNfKohNmy27Sfi7ExFeHB9pkAmhdbE7JdS6iPbTnhdXUXm",
  "key21": "4SrSZb8aJsBUEnVWQAG87W82VXVMpDJdNDN1JB1t239LhQycFysG5eQmgacvnYLkqyUFg9n6hKTbpuNjGGVQ14hC",
  "key22": "5ApaiSp49Q2yhYwF22e5mVQ99opNFz3MDrsEvhhUm27uU7qDPAzxBY8ysoztY7CMthEp3LqmCGw2DXbi8qf6Jfua",
  "key23": "5H11fjpSTK7ACTX8iuaxuBAs81Uk8gr9ytLwgcXw1dvvNh8ZDmsMTaxjCi3xDftrzYZ7Tc2JrJxMsYpC8SE2T1wJ",
  "key24": "SGEUau6VmnZyrcXdwSKL1wgQjFwVHPrVEMiaztpMpfxJWJ2bsVC5QJF1dVidY6mWrvnTthR8BnudV3twb1mLgoY",
  "key25": "dat7Cbt5Tas5XMM7ijDY1Dqnh4HgnfbDRL3PgcXwtDLAwqDmJinmYeUrr2uKoDnNwUpqQWAYBEBzBfAU4khTzPD",
  "key26": "5PrHGxA6GaK3Ue8QntT9oAEzfXqqyfftbLWfUCBDL4R64bk8MPXZpsb9czM7V377SkNyHADdg4U2hdk3SrzDYAnX",
  "key27": "6GGFo46GpSVKLMQzSoaCuAFwDnArunCekGnMmGGHjwDZBynwD9qn8cjUKDisMsKAebbobPi3tene4PbvcgG2gYh",
  "key28": "5rpat6YxvVKR8U4oqJQ9M69o8ubyrSAJ5VkNHcJtCEjypduLEi8KAasqczDEyaWwkbVe6zmjmUexaAv3qvqPUdP8",
  "key29": "2S2yJ39kYeAsDyZ4UdceyZMkjxTWCk1ySL7NneoYdnYCVatWYoYW9borkS5Q9XyZUaLhhAeeA4cTDeZFq7Z5kttD",
  "key30": "3JuRUthQSryZX4hfF1kZiLP4CGkKfEdZ1KKkehj8J26HayYCcknrmfmpDKhrgp6b6fKFZ7e8D9VRb13gueUfm422",
  "key31": "3DgGggpfT1yhF5BHGKFjUDCPvFrpgXVppYQjNeQmMhe7K8yKkCjxQax59yixr2bBhAVNjg7GAwxPQcZcxb1ZALUC",
  "key32": "5KbiYUo1UFPi6RKvJUptXPMLfW3hvFM7WDVpHEWJkRvgBRTiZHBgiEjMghvvNBaVFJCEFwaar6uYTtGePgsyozX6",
  "key33": "5q5GfaCtktAQPJSiQTjMkT6mmfCky4NcFvtYDgpcZJJ1E6jfeF331jsfTfvTauHHU7m8TLCR73fuqq5nuRNTywXj",
  "key34": "2zJGN1NQmoEa2p8RmjS2ZG4QY5Y8fNVCU5sPEuGaNNwVxEe8hs4fjjyXubF7edZMZDYzKQZFqWrJbRSfd3k6NbKM"
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
