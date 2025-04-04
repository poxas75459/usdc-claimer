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
    "57TzWP3DamQ66cECj4RFfhf3WvSBnrHD8q4sea8KbKPfC3oLmxDwwT7eSm7tKCk4PZUuScN1dqFAT1hNQxVtjzKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a91Rfx12vU7KkuXKHB4rYA77wz8H8oxoF8USfp9qzpcyWNEo3sVNbbZXLzT5KEGf156f6NWAWmvJKAKNiHGk3Uj",
  "key1": "3GYRQr5NJW3casn3QYmQEN64pkg6vcLF62DDhVnEMDx6jNVgFeowxgrSL7aspNjqWCo4oJHGAjEcjaL3TxETocBb",
  "key2": "5SqxsyJeK9ZiGwr5PcL62LG8VQQAJLdLRzqe9qnBoWMkTZZyjEcmsCCPZi3khFMg2PsgoNFNwXMizsGNMy3m8ZBC",
  "key3": "3w2UKdNnL1M3pAF74ZUk7gMga19HwLtW37gRecqnKm6dtbR1nW27vupg9X9EhYnF99zFBjHo9jXVTbaGH1Mu7kbh",
  "key4": "3bJNouZaWXzqaKJdJ1tCtXx9z1D9Y8Wirj9XQQNEBAKfxwrLPP1qKCA4WZQqzHcypnLTTTSJ7Vejm76vPUALuccB",
  "key5": "3BgiSJB46GQXdEv91rASbtayp3HimSJFumoji4CpeZAWnKdKgR2JBazyN3fyK3dwx4CQLdbuAfUVhWyYuqfXPFJ4",
  "key6": "2UiGxCJcuHA53utR18RhV6YCW6B3qM2WV92MLnQvyze2F4oBLMxogwDajWBdUXHyDP188d6dCKbSsPeAXXNX8338",
  "key7": "YezCpa3MmmJXcJuwvcrRsiGxw355o1EgTgzMGMtLgeqdDoEP7BU6UPj8BJpXesYr9J12PbLs31Wai7qyJ7jQF58",
  "key8": "5FTnrmVkVHy8CnVfMHSCY4rSP62vWHwX4mYjuYCaZfYddh7YVbJpAEXY9nahdcKN7XrrmzrViEu2rWSnF9nod5kz",
  "key9": "5uEuANhH4q2FN9rQ4RXMGvKNah6MJ1RPBW9b7mrw7M2yBSrYdeEYcDXQPWRCFhc8ahytRkUbTXvzSS7VdwF7xW4j",
  "key10": "4XPMiG8a5C741Vy8Ya9ppDBm9vL9GjNsNnQ49w8nuwpMrbuFhqHzHm7XD1Bgj91yFxy54BSvZ5q95VSkTATyF49s",
  "key11": "57m6DTgkeXnLvUZyNf1Te8CfocZkk7nJkJfGToRuE8T5QFkt39sLnFk8ipk5vtDui4niPNAFnqRPiitL9jUjAKgd",
  "key12": "3xuH8gXSJGF2yX5t28CXSEuXHtQEm5B4FLZKoM5xSvJmA5PHwQc1mwgiue8FBchtQcC11czTqMZsYKbo23ZXWTGh",
  "key13": "5CzsaUzs4tAkzVQ6AH1VaQ2GthZqEXdgSiJ1e1idpidU8xQ7MDRNmDYvEWgXcVYjHJQb6m8Mz1ohkCT2dQiBrN3y",
  "key14": "4ZTzAoty4rYy5eZjkbZLCdZBX8AcX7aXo1igZEVFHyUi7U5Wwnj5tKKvh8VDij8YevWbAbJLPChKGkMThJvMeFKZ",
  "key15": "vprDwoUnWmbyGeGiY3ddoaGg44pY4isGniuS7A1yUipuztSGGwYGrcNigyPYokbEqHBFFw5dk7iRYwbZE6NAXPq",
  "key16": "2hyqxMFJFivbvadAw19fwQs22yrFxNAhXTFZW6dx6cyiWGeqwonubcsuZZJ11HQuwaXjrv6p6brZ2sLkJHqvLJag",
  "key17": "3BMqTLeVVw8RbQ8VV2rzHjutXsqGoBvbNwwh5mcCGHKTAhWv4Qy8PXwgwaNexZFsrZDqYfjiGLKUrXaugeKAGPsN",
  "key18": "2U2dBxnpZm3GigkE3TaEaVnF7GLtaakza2VoWa3G2xCQWXVKeeKVYF4rCC631okFkqyDjb3hsVGgy9MEdssscHPA",
  "key19": "5ZNcfk6rCvXWoU3Wpyu3Rs9oQWPDZ2vNyBstJvasdvHX85HSk9AxiTqAJ2cSSGMUXtd958AzxeziF6FxRXv68bkU",
  "key20": "2St38fBSGXvzcc69PmdopzhdEtTgS2YshxMLLCkGtttbvvB9NZ7q8PLwK1tcoT3wsYLRqkJToLmbCkLznxsycuDB",
  "key21": "efJ87Bi5DaCqyCNKeyzZayq8m4z8zd5GRNuTSDL3WorkwkqEBG9BtenS8PTU8ud55nrAGJANfEBYTnVCoynaJmk",
  "key22": "4HWkDzcXb8xNo2wgiDmBK4XesPDgoX4nZbWAUzSRAvmUjY3pxZX2rGeUVqb5dvBP8mRzTrTvTFHbQVKvqEy25EEL",
  "key23": "45zaKmiuC4i2QungrReZQixBeQwKwAXTWvWDSWZRT5M9HQKPPGEjeJxkvB2L3VAJpARNSYK15mP6VB4of1okDofz",
  "key24": "5oygkZzUsRVgWRMmjvD9rzn7L3aDz1RZzdCngVs9gKMe5BE4g1cESDrLAoZT6nRddGs5nnApRtS2ZwTdFra4gh3T",
  "key25": "3efrwpMP5jM35N2mqqHPjhZWLjqHRxH6hSKa9XV3KbAhVbdeYp6FPhCxNFeNV2S9ovMHUdopK6eey3UEqPSL5j3E",
  "key26": "2ESPvTra1EomJmd4mPgxkP9Wdn3RGWLi4xaZKJrc57XqowgEESvTFESEGSUJLJwwcxXje6hKpUYEZJURSz7nZuBt",
  "key27": "cNT6o7xUCL9nTmTe6jayDgXVuMJfFMEwHUATjVZT9HgYczJ8FmYC5HeccJgvHcLb3gDSbqkfbSeCYWd8cPyX5cX",
  "key28": "5XLrmW7z2F7Zr2AT9b89xihYobpt65kELW2BBbrmp5B81XUuqyHJCxe7t46M8rAX3htKNZ4yJ8PHhkgZCyoXRHhp",
  "key29": "5Zo8gAhZgsKddf3h1p1nvMNgTrdv4rjARpp1bHgbr4LrF9dhsjMdZYXbb9hTeNEjZbs7bQqgsVSkQ9vWHSn56ptG",
  "key30": "4sbj4kiwgKzSyeV6bg9K4Hb242Yjvw1ffpbALXKMtEnCFqQWCRkBNLwDoXFZL2K62MXFrpHbbETw3LnHwhXcNQxE",
  "key31": "3e3y5ab64ooHr7kVAfJ7zqVeJ36q7QZvaxYtiT5P141CVQWeCG8QT58b5JJe21ZuAKRcefbEjZuAS6b4rQZj2Vk6",
  "key32": "2YdPoJHZRq9yGmAXe8BJczxd17BSe2bpTQbeagsdHyzJEqkMyepHVsi9xKCV5Q8C4hjK8jyijAUEeHeg7TV6Hi3u",
  "key33": "4DpS8ufKJYAw847Yh24wWZHw3P7Rsxo32W7ckrCFzuB1jJYAbFYJF6bupoCXmbTaAk9gWUxXiV1UD1fcJcgod7rU",
  "key34": "3i2Bcq1T63pKszREzyAgLHhBkX6REqpfgmeoEKQ9i1DrAqmzPgRE3Z8oqeQX12AWYdUMCaXcbjC1cnQzW4RFEux8",
  "key35": "3KQedGxvP68M1n7m6perNd5746mhQYBFreFEMXB3RjH2hp5mGwQj3ATZ6gDR8pNSDfrznZ1jTPyjZNGpA9gTYR69",
  "key36": "3HPrZAeVbeTDgUMNQFcqNpDpfWjqdR9DM1WWoXwdTiUDeVg463cMTea8k1upkdU35iLmALkFtrARZCbobrq7X1Rk",
  "key37": "27w5zPW87XbZ2TYTZ6Wh4LP9KkfYALxVFMCktFE26QKgTri2n96aiqR84gFSbevaXPezB5vP5PNvFsH8nQWHz1cb",
  "key38": "2LpWEecceMeUZxzJbDUbbfJPtGvQ6Vkd1WaDMxisGFivCdWtY73jDjsSWEkcLbAcPSJoG4rCnAPfZrkr7NpwwdkA",
  "key39": "AZn1L4eqUzNAe6jGmGgvHGV8RqnLifmXocihD1nydfDkUR6L1irQgLf5HJ1AC3BZVLFjAo1KWY2RGaWgzPT1mAr",
  "key40": "3Ai1FvTrYZHDJJcM7nR8kL6sYatzUzHTkFSrBPrbwh9C1gECdhNh7v8FCxiBvN348Mz97En1fmD87eLfTBQ6GivB"
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
