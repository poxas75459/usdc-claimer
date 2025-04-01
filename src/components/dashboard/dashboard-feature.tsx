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
    "3dzknrgjEznX5Fgjajm4GnrfwNJY5Tw9AM7dw6AWMpdWsdESiL6dYHwcbt6mvreMcS9DCrFCvKNi2KcyYxE9Myxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2gRFTJGEeszhwpuRmk1dLVJpU3H3qd2Px2gNtSA1WMxDiGGceenQDAVWqCQBij7TdFHvRcumEeiCQunco1hSzv",
  "key1": "3g4eyRhGNu9oCuyQ48to5ahnCc6719H19XY95UGiyKGgNxjbzKHn76gboLo5E8VXJr9i3yGwrQnkytGQJAhJ4RyR",
  "key2": "3xCKY1RmQbQVHLFB4DQFbBKE3XVyU4KM4wG4AZerrX9VYT74f88yeofwnfwgR36Ph1heyx1WqHm8PppMwp8j2KwE",
  "key3": "5vNWb1uVcebSzuRnY6se4Mt9usirYDzz51knRPXDSLVWSRTy5wnaBejEHYTGAuVrRCxqCBazJa1cxwaXDDY8tDmn",
  "key4": "FxDNNFKDjJiuxdNrmj2NipuJP74squ63ngynmPEuXHibyxUFfgH479qhQ6KfAFCRMkzbJFv2EtNBHKki7pAN1i4",
  "key5": "5VP4Et1knMAs9ArDbyzTMQmNxHrAsPaZ6Wi8dBCk7GenbVXPQFFPPmsrBo6qjTwcf15SLzxz9iWnAZABYWkRvAgD",
  "key6": "pnY8w5QCkaEdT1RjWn9nyunC77oF84PbRNbVPVGyhCcBDSVf5GFzfevykncPKpyB4qz6EmNeNYr25PujH6rz11u",
  "key7": "yVSVLBkyS5SWtBBFo1NNGrCFHLd8pwwhEzNTtN4vCQ3GHwoGdQ4raKkPzCivdh2rBtygFYbyHCTEHdpsMJnoznU",
  "key8": "4Xkcq92FtcM3dx3HGNS1pNaAHQg8UkBE7JMyGShgYuYc4MjhgwpcaW25PUT7tiwy8Bbrt7DDEJVJpevbUcfrr3wQ",
  "key9": "3z2RoiFkqkPuQmMcEEDJFH8mgTurDgzJLDD2PJJS9pnL1ZwmyxdJxhvVJ6ws4uj7cCYFJR4hswLqrB5PdPNq9UM5",
  "key10": "3irSwPaCWnEwFnjqjbmis9YBFW6V46KR2vsUxBg79F2UTUQd5HjMjZq4xBJo6NoPiMQvtfKVcL2nAKDifaVabQ4A",
  "key11": "EdhoVW9qBKKaoepAcbGF5SZ7aKV5MkQFcrsqCbph41vknhZdErRTtGUayPZ9dmSxf7GhbozSaDMCS72GGgbXuVj",
  "key12": "3xz93pM8ny3VRcfhvuyxQifiwevx7mQiTMBbdiSEFSgYC7wwuNP28cnkhnQWu45TsEWxRQ6UrUQhYBYK5QEWqRX6",
  "key13": "4pQno3AYUjPXu8L5Tyq33QdwALH6VhPhdGKzs1rR5LVRJYrEKEeqpuZEuecPQGGeVnKC7rCoNrR5LQZQqrcczeRR",
  "key14": "2ZWsQNWQtzVnonYt2SzejUwwN76aFgzr9Q8NzYziJuHtnVbzqfwQRZayPX9jNacF2671eZbLHkNaRa3zccBeDhRE",
  "key15": "2G9kgKv5GqZQaiG4qBZFDvqu4gXjxBRekG8U8mu4kngKPDfrkBEJZnqTQabiTpdCUiWwdDVMmz5LGG3jz4n1sJbU",
  "key16": "65qSVxLdXVyuKomoban3rrTvx3KQE8PAXJRt2kAJE3SREvwQLMcsVdWo2d5vwZ5JK21PFHpfULkL78J6X3ezgFz3",
  "key17": "3EGo3uSteEGPkGNSDmAPVYKA2ndWqt4kw21Cb32CRzpQJcdepbs58AfuVicUYtbM5LhSayqcJwX2FKUyWSDcuUjG",
  "key18": "4xM8a3T6dxwq4kGULVsyTEq59UUtdWiMEkKz3iqee79mtQ28Lh7hbUJ9yUQeKGrsa5hKdA6yVnVkS8sr7JEWEfEJ",
  "key19": "4XpwaaYeXLhVpDDLZvVYgrZ5Htm9Ba3Tdd1iVKz6ThHjPfm9zG24fZe82U1C985L8KoZgN5qpMKutdifkwVc4Xc8",
  "key20": "3ey5a6UgBMa6jZ37x6PUnYsKgaRhHBdu4vSM9ur3G8fmJwEjqYPyjC6fQRK1xFCw41nTvGfMWNLAijaVzm91a7vp",
  "key21": "4QTnFJCvdUpyiGokYRforQx9ywB8gVnGoAKGbiNKhhH3sf3JP8it8DaWBihSfozyhE2Pr9EZmJ2n3qrjX5M3N72y",
  "key22": "2BSgkagG77zQNDBwATuqCubbZfBYUhARcGJpE5AWPKbVxv6oSuXhzEVahtPY2xWE7oGhjAX7f15cnq7wbjHffeFY",
  "key23": "37g5nAY89jt7iJ1raXwuN19B1oEGYBMg4VtfJbRENkDyeYu7tPYq7n7GuhZp13wKJkWCMLjnbhV4N88USqxn61Ay",
  "key24": "3mP6UPmX5z3jLcvdfnp6P7Ufjs2E4RToSPdGXR3CDquX59kQTmYnA1yyHxRt6ZE6yk7oXWREzhmAZRSj3XaREVPU",
  "key25": "4oK16Fes496i9jrok2oCJYcq8eNfUqFsCcpd1scaiz8ZsU96chBW2dcLHov2YPzgZQ8gJ2sMFoarHS8RPSEH7Qoq",
  "key26": "3DmTe3hMEJwMEJoRMRyvBW6KZE4mwa1hmpeQANUAs4pmxuzTXD3faZdRTkW39WLy9e7GFb3emLHwDZvoQDi7MwS9"
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
