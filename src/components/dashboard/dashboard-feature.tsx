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
    "5HKLUSyjvaGgRKCCQP1gfUbnskmd2WGxWjhfrxPFBQrkpoGdfDWwPyBgG5QXW7xxdv3wPYpsu4H2nBdqgp3qPtdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bY76CGPBHiU2KNeHdEouJnb5iwDXd7k8ziPpTA67esM77wAuSiu9GhRqWEUFtBQ1y5wze3AF1EnJxAp1ubzyBuZ",
  "key1": "58xoko4zvCnc5AzUY1Ezin7higE5He9CFBukW6neV4hfDFtGo4mZtoU55LpkqjGHygWxFf3Xmj1kxHofvdVALj32",
  "key2": "2QsP4aWGxa9hNUvAZdk83u286QRVXhSLuvF52v7Vhe8JVhjMT9btknB1uQu2TNipG9xFLbCeGVsWP8v8kxD78ZqE",
  "key3": "2D15ToTy2LjXJSHnWKb7TXhMXpfYUrDWvqX8ggr1kvRYYeZMH2YuBbh6EWC6FvFacwZiWr755f2KxZxE6GpYHknQ",
  "key4": "3NQDbnrGWLwxuPtWyFmfSbV7PD7thnuUnbukMHY9RFcur54FPuXvjWYWUzFMJY9hGJht6E9AeGWs9TNC35extth6",
  "key5": "2BF4qpgQY2U7cf6QWiLg4vddKVHz9T33RWVRnjHd8Y8xxpit8zjn7EsvntzNjJN3GBJ22UoDJapondAjTCPPB9az",
  "key6": "63nFzx9NYnvSfzncA2irr9vH7F9P5aZ4tPrhoFqvB5qbRtWGZNvqGYrkp6e4FNwAmhJbHWRojVCwZ2PQweWEqg2p",
  "key7": "4j7nRHP8UgSYH31XNJcq1R8s9C3LyjQZojwbDWUwW5f5sFcRdwj7JxS2u47iuDrYM29ebufsmibMCfrj5DbSS83f",
  "key8": "5wLfzGo4TkshiUTLvm9b61nfFMsfXDyKBNHgcDYLxi4GiVNS8DHGmQ4Ak7FXpughr7sKEgpux2TUdFGAncpoTC8y",
  "key9": "4Sf9QX5eZCeHc1VZ7kDnog1sxDjMbrVv8wvGriKkQuBrk32KVpMkBNzrSruVfKVW2zrsqWsGJXmYuCcTWvbR8GG2",
  "key10": "5tpEcvrnxAhQfKtyYX79BBVNrZwkZ7wizuWuETNC1itn9VrB1WbfGuiT2CAGQ349EnUUJWskaaBjX3XgPwuCuQpj",
  "key11": "8yt8WDNvHMs2waPHn9gc3DJw9EFu4VPowC6cWqSoFkom8oddGBX1BnGYn3omxP6XThWVxLYG89B5gUXUaiUbG14",
  "key12": "517kGSjsaL3ztZqXyt57WWzpEByouPXaijYmE2EQFKQRymz1H2W98yZTvDe9qGFKhyq1QJRKXoU7Yw3qgBqCaFht",
  "key13": "5YLjxsw2gDLosNhpjfouEx5U1XY9cJehD7GTC4tnXYKXkcL9ZfqELAtCxPuYM3FKWxSSckVdRwNaJsPEtqYibGDp",
  "key14": "2sVkinAFwGfTGCsG4HbF6TtvUzHWzgfQoQ4aTLLVh6jWJWHDFZrhiPAtMnKNdseHbPAfKwQNvaJ5NvxcAr2gLy7o",
  "key15": "2H8GGySqmXx2bn4vPbJzJYA9D6y3rsVnD6fqJoMfizRhRrqxTDtDvKSZkWmz5vyXhsoiUGvT6vxVZoCoibbcmmBN",
  "key16": "2XruaHh7wVjswu6LvRnZ9eMLTFFa8i9Yy4fC4HpFR2Yt6mZ68XUnUAzdkbLwp8xuCKQukvS7BoP9L7jfeKsjogZJ",
  "key17": "FajVQ3FnzB3f8XLhAMk1vbP8xjN3eXa2E8zmRVbkxHFYP8AQSTczdAvBHG3orPN8F6gU85RQTqhs2k1d5SjG9AS",
  "key18": "22UFhe4Lob33irLfV2XVcfFL7oKH3wTxXbAXAhutkgroCL2c2nEzJGu3efFPftZbQ7ogxnMzp5MN14uuAd34zeJ9",
  "key19": "46uSQQ3T82zLtRzx1eaumWyzBk4vKe1deExCJYMymos4WiCHSyXduM8Le2hezAjSaW8JECbunNhYV5qKfbZJETJr",
  "key20": "4mX6UDGuuL5qu5BzophgdB4AGbVYdU4QvNJyU5SLeg8atWS4iNsffASLrCF3Zxhub8V6D7bLiviHaVL3z6Wfe7Z7",
  "key21": "2iRz86k2CwYzMHFwwZEeFCzum3wfTVP8VzzP8k8skhmRjcoU3aBosgSDPjnGUQE4WsCZ65LQXSfEnbayxLSN27v6",
  "key22": "42c6NuRWAsoLkC6yu4nbBpgtuE5oimLxtBHNjpKz5fdNmUy1ycLQGpCU1FSwHuuVbrvF1AZ4SUHhcTAEDcHkq5Ah",
  "key23": "5JJvhe4DEwnFcqaDrNKj58DcVTnLoWkSNB3axjJcsMC3AgrA9bDW9kZWus63gzLGBiRg2byYfAiaTgR1F5864UCy",
  "key24": "5yEH28uQ6u6vpY6yaRmM9JBWCt8eGE7UnSwrea7UKzqRbLphwRsHMLhDLnEcyx1WFW1foHkr5X7our2GNRbHxpj2",
  "key25": "4C79Rcb3PCepBbe6X6x1soYc1rEndTQpZWx5uK89Suo4V9czY97wooS6BFg69cACSLd8gya4hYKjDBR1Gb1EpKvF",
  "key26": "jDJacfamZHZxj9jXX9Q3v4MsmzFtKvpNZvVe6aqmxNxNJzfXoCVSQz72an6uvT5Ft6xhDgqTBTdEWBd4qxhQb3H",
  "key27": "2EJWbg9dz4EE5onoje9WdXsHQosqkwito11PMQ7wkFm21srAPpg7RfJuoqwdyNtQWX1cemwL3G2JpYXvpejZA49R",
  "key28": "ioHCrYdAgraDtX1PaJzqj85yW5nhQAMyTyw6R3AKTbJ6cFjuhna5KUfiXDpVXJz7AY8bsBi2DXjGDvv6upgwrbm",
  "key29": "4DRzdyZyjXRKCeJHUKM8rzfm27ozb6uamgV5aCXknem1s9KzGkCEK5hPt7URqQ9fL4N1k5yPJXaTmQLX4qLBRNWu",
  "key30": "3oAiNPdzn7PPQo7mh7D5usdVWYwqXtZ6fypm8u1bRiudKkaTNcnREwda5GmhX3MXQwue47J9ihm3F26uWzjWWGNu",
  "key31": "4YDHb74BKPP6YzAPXENg1LMyzvFqrACCFHNRkyaP8Tb9vBRsT33P7AA788Vij2tXnPWHNCHUttLWkGwDcjcyB3Bp",
  "key32": "2bPcq2yrPA2jPRDAvbCjrMvJk838PD4qgucGExzt19XpFcKjQdHtDbfyHh7Qhhr1q6TTUsMDqayjUyUK73VaKnDt",
  "key33": "4jrWMCGD7wCHcC7aW8t6HpZHwo4hXxS1RFGVSXCcqixHmtMKZSzjPq8UHvEe6pgHVYqBZ4e8c6ZZ6nQtTxvm6Xy4"
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
