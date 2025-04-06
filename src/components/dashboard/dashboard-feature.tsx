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
    "3tP6vAB7jDdr8R7BGeUz9eqNiaQJ8xh8UW6i8372dLH7XJE3GkpZwmYyKEi5g6qRpWBmdGWHwZGqGCyKTmthMcf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ur68gowQkYB3CQRhAx46jfe73L4ixEo7sDtjcUMByRZGzos76nij6UkrhWpbYQS3wXDdkiVG6wgnGTcBhBPCs2",
  "key1": "33AMcm9rjMJopTPiQrot6c6NMQWekfmirhzAFBHDPS2rg6xWN67Pv4ooa1Gf5SLsLi7r2sfBpPSFDvMt5sZWFTm7",
  "key2": "4FXr4YhB1gJUhZJzmW1rWLDxEEabw4CbMpDqNFstCNqPeyEz28gbanFF1CQTHKEQx5Qk7W1q5CQGTjbXpRuVnH8s",
  "key3": "utG66ARSKzoqhLeRrSByhVSf1qZ5D6HM1kjYbQbmgs1tUA2nqSZfHn8ezgPQsFsMH77SKNJo4gDAjQ2LPx9J1ww",
  "key4": "368aaWhxvvgdR8AgXUi71F8zYfviUbv5sX32FiiTHqW4zxAeJ2wiNnuEadP1B5EF7o78wYpgcDsJtyW3bKYg2LUj",
  "key5": "2go63c2NhcoA9NpNFq56Q516bmfxoHkPdbAbNePRwmm2T1dh3mDhSkzjhvUaBBeVJfnZHAw7FZFE5TnKSuc8QCnm",
  "key6": "4Udak7D9SJUHhktVRCL5FrKXMxqHvHKDQ4PU2YN3dTEs2SMyukSR583CWxtcXTiyTY2Am9wKQs9riEPgegQnEBxN",
  "key7": "3YemQps1WDQah3WH8NDigyq5cdNu9TpapsG7GZC5HAzk89oz34SZipWCc9RFHy3AQe4wYthr1jN2PnHgeMuWg8gm",
  "key8": "5TKFjB8NWFkxFYUqxUn9Dwbm7oyvzDWEYS958yZH6S42nywnw1xXcbZ44G6hrWhAR561hFY7xyLp8LHiFu5yJYEM",
  "key9": "5uuq9jmFCaW4cTPpwcrTrWz5oiunuPbJSn4qjugPau8DvqysfFddoYAVQHvbfQ9dqcXrePRsTL1hF7fLw3ddsXho",
  "key10": "5CkyPcb6sZvvgUgtTfxxcQg26sN6kVs4rWquoAeQAJC1MuwXc2qLfqhfoSY13Qx11xycAyQvK4H17AAj1tVn8icN",
  "key11": "3iKnfUa28oyb3J4WKenG5Jr9KRJ8YK2GyNsr42FCsYj5psz9iCk8fqLGnhb2TrYa9k2Vucz9XZDtjgqe1nHcm6W7",
  "key12": "3K4hNCfCpsWF5ZSDYDBJuWDWMeibuW1xAtjUUzyaFdXLFxs5piQTeSEw1QtJbhwgu2Sjx3KwtqSsbQ8KQM8bwxoP",
  "key13": "Ht5i5vMRxygbVVDUA9ET4MBpxyTqR7dtggsjNcxT8YxnHWUxFpwoTD9tB3B3RBGPDQms6XX1esXWUwFqzrLqei9",
  "key14": "ycySE3sWkYyj6JABP2ALLUhDKug8MrWMYDUb4n9SPrx1nix1xtEnDVnUGYXqDhfNufZHRYQpMYxMBcpPiGw7oMn",
  "key15": "4T19YWRbk2HYiFLYpdKBW7ncgghBeNKR36M9ncWQexs9MU74TTX9p9ToCXzrQeSd8aCVMqC3yfG1tmtip3EfLqdY",
  "key16": "3UJvp9HjrvmpQcQuEA4MK6i2P7Tr5SdUA48sdYdfLswzFY4pWYZB9KEDVAtxL9dRfjUe4yae4gQgGeGbHR4RqRvp",
  "key17": "65yfdQEikpNXMX49noX3v7aKTd45oEhdz4LMuMvKCbCFkwCrGThc89Fc7SBLwPbsXsPxWEY7RbtBk4NBzTXeShu",
  "key18": "4oarHLg7KWfpJX1HV8XLFjBjFD2dLytwk8P5udU4URFZFva8QeufNC4V2ZwzsfKucw5BupvY2kNCc7jEcTLgnQbL",
  "key19": "36Ty9dxoGGMM9Uax42zDrQGT1N39kMjjCbCxhEpnKTXMZP4ewfKjW6yFC4dzrGoXsfqsi1ZHk7jrQoqz9gGX7GTC",
  "key20": "3HSqGYyDuJUWD14PyCphSQq177Dy1uADT6KJnHdaaCxd7Y3vhNSChYepVwQeD8xjScWBi2AGPZMsys5zPZPiAm17",
  "key21": "5pE36hRPbyn7j6jTgdVWMZUfx4agG9bYcBbzt2Q1gPnVL4KW8KnKbR51Pyu22Cw5xxVcAVbbF46YAPS7WPiUS8Gj",
  "key22": "3WYb51JZmcmkupeNn826oZ757LCkndejksiAhw5EoGxfmyenaUjP1GUNdKpnCKiWa2j4ctdn1utwYsmuyqHK9nbW",
  "key23": "3gigDBqi6b2VrWA6wU31BsoKyUZPhVXGF5J1FZh8Vaeb2jfuRbgDoEUdk1VfJQPoFjkZqEesscAgUCzWm7CSks9p",
  "key24": "3hZyy4yTtBoZjoUjDq1GBU8XsXE3iMGNMfpqJZz8uYNJYYdLGHY2UsnB6Y9w1HwMcCvrv89TaJAmqRufrvD5Ejfi",
  "key25": "5je2Txd7tWBkfJGkzD1TWDkhjdPj6x17HwAqbXWTrPNnUwFeSd8bEUUhdRbUWDX2784MkjxxiMntM9tEQCNbfHSC",
  "key26": "5zZv3qyASWQTQBUQFjeE4wkNrXzwi98ymy4p2iNkhsA2grSuEN4RnnBxCc1dDM55yLyJ1THHgjpddwsa8nm6PWmu",
  "key27": "2qSnKBqHxSRKM9NpbdMonEUVvzkUvnQCRjhEp6RzPEjn2ex8bdV16qCbSngkSWVENF3Mk3VvBdQVYyX5SbZh5KGS",
  "key28": "4CTR3VWDMyqUwGKtGLiBLC3pbgYrGfoXqmicBh4ok9zBtfYWn4vQZqtmWMmEdDvS9FxeKmQV2c7jijexaCC5c463",
  "key29": "kcP3t24ikpx5gc4ViHNuJFVUrTA1MtSkgnUoKqvpYCU89gNAh6uxKVXpAkChAUhgVFxeMNaqgHNsTFfTJVVeYU5",
  "key30": "2zXtefMka6PdgYsACBMtpq1TB12iB7FU6t1dxJ3tGjFFaoGQEuPzmqi5pKbn5HeoXqu5ZjV9uCPEXZ1UB8JYQVjX",
  "key31": "4oxRdwGk7DC59dMa5MmYfdZ54cP8w8ZKf5TruCyLeqckdRxmhrdfgjRnfC4chYptN33G26TKqPC97A9PuKi5Rk6B"
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
