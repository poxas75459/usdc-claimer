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
    "2xxrxzsqFhk1hqtS5JKfKRwDrgzmDPmRmDWQwkFxFjx2h5YUDysB4wEwPAc1xyBxcCmj8VsfSxrkkKwHdyLAVQms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261woSznhBNAa8KW9Ejc9312AcrqDroDZkyPZKfP6qch6A76jnwAvRzmArmnEYq4wuN6Lcq8QRLHjNW2RYjnJaLW",
  "key1": "382MBZH6HVzf79z5D8kjzdaFPaqKQn6yeUSRQhsnLHF1iduoyGCMmGorXuedJDezvyHKhbmkeMESpNSgtbjGcCkP",
  "key2": "4U2JJuyfFT9AGJcZZAy6jswwGQ8HAdaxqo3vr4v2aAr6jxrDMYaEQJPJRorvzPVvkEmb1vVtb9PVig655vFcLgrR",
  "key3": "5HBukKamjAokwZ5tDJqQM9YSbVmTzt5kJ4wNNppY3JQPCkxgtKJKC6YifrfWKchDMX3RzPMyRsuLfcMaUq56Z6Va",
  "key4": "2qFEicFxLsGpx47wxQQrSYY6PFuC7Dmo2Ty7WaYTnxqpYFDkLyk8yjT5vw96R8uci98Kri5Mb5sijoohsWAgeouH",
  "key5": "5791PYjJ3zKtuE8airHAruvAR2Cug1eswLbQBJYMHzEGKzYWQS6o48AVBYxWgiU7Yo63yw83YHRH1NskBXaa136p",
  "key6": "5L2ti5zxWXqwP3TQb1SV5VU7QtHspM78modPWseVT1mSJve4R2Qesw8vsu7fUpmjwxtcsePd3kqn4yyj37SSmCPc",
  "key7": "nzyRzNf1GP2UtSpk6JEqcYRKfjsrTE6fc9ynmVDu2dRiWyYosmeJ2VfvDGgtbXwsCStKZGKsyeDcVkbNu86NiGY",
  "key8": "44cNt2DcwWeB9FRb7TQa67DG7QhFboD9q2dALH7FoaScQiBFEE5b5T1rskHD7rofAWWSfXLBT5cKd8KM3WTGMXE",
  "key9": "FKe7TEbAyzfh22D56LowsdNtdi63DZfc5WEAZca3cJT9Bpz7qAaMhVDeK9XWBU1UMfBNkVFtuWX6bkhmTFMKnGj",
  "key10": "54k1YzE1UwBRi5J8iUGPraz9hoiSJBxp8KPDWUP1HSkVJECAh3S63wDjUbb6CWe9kCTnAgnKNLGMqzxjDJKjDgEo",
  "key11": "4AgejtE9LzwRZf1nRxtUopNi45vSm5qi9X1hTZ6nuDcbvPGnZtXYnCpsm5gHRdmCMBUpJBnfGx4QjXZMsq9x2dtn",
  "key12": "3zCE6pLhhbWbfTXWoPLU2rhXuPhzRHD2FJ3UJrhuJEg851KguY3f5J3cNFZv5Mi3NKrZXbWdsg3VpmMfXTGhm26L",
  "key13": "4CMds4rCdJ5SavqU6eamkfoYvQ2MMadBwuVrL7oadY29w3J8Gvvqu6d1zwqfsE6Pe7D1a6zCjxD8b9Vb1ksknG8D",
  "key14": "58S9ed9154kUt9q9TKASuW3dhArKhPZL6sMetXjx5f9s9uN8wyUd5ZGHc57ad6fB8PaD9fMUV6F6xh1R9fvGrbvB",
  "key15": "4f12vfFcub4ihvt2H3cujzAnHSFP4LbGRsV6Q1K4NdKTXu7i6ToT2Up9bSyVu3YddCZdCxu7P9sWYnd48AZGXTcY",
  "key16": "398pntyT5zVzBBNr8AFEVCCXk9oWEnE73venYtBhdRmgPnoWr6EvHf48iJYujDnm2E4Vd7YesLoT2JqRXScpda7F",
  "key17": "yYiRmG2u8NfwWNGRqM3JvGbNy9yG1qMPnG8im6YAmPzmTUnFbUu2TST28T97m2ndeiMfPWJw3iiSZoiXgqyptfW",
  "key18": "2vi5t2yBE1Z8vdj1Svtq2jgngquiDAvehP1dLbfZyHhgR7Yf2Go8p6hhmtTS3Ro3W5f63EKpKYWwx6NqzgTh1az4",
  "key19": "3cn654crd1TQdpC35tDDRHrdhpJ63QF4vFP5vb9t71NrWAptonWJc5TvS2G7DKQuD8rJNJRPLZWyF9C3kYcWq1MP",
  "key20": "4i2ZyqG1ZvTj7xwPiaNXNCmM23jJV9MVgqUFePXiTJ3U23cAWW3DoH3Anp3MsPi5jzwqvExaB8cEEEEEZfgAU2PN",
  "key21": "3XpVP4GEGy1MCuUhGSgBwuPxRMmgZrMBd9PkGQz2VxgRvGYcmuQDNyQqgsRLm4F5dWXE4APN6gfkgHq2nESJvnTs",
  "key22": "3XFhYFckNXoXwxoGF9zxJ51jYNdV1qB8gP8QB2KSbKe5am2xeuVX4sR4xpvHSbKCPR6cHMCYFG8hmPo4LV46QBZ2",
  "key23": "3a22TxitzQFt3TdcLwkaYt71oY1rk4HCmbJg9SnhnN2qE2Ay6HjNYxkMZNQqncqkqQyHjT53StYrUqDNHgAB4Fnq",
  "key24": "3ngHCHhwnyaAVNycm33zXQUG2tQqyPpVMm95r5qdJBfdgdJsQ7j6Ves5jp2FJYGbcAYDXn792EhRX2jZZ95HDHAa"
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
