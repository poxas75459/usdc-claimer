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
    "5kM14945QC4yRzHoAYHk8F2PxBmS5i2NVqR9ytvBoG9Qs7MPW4CLUPmjkhhFrB9rsXVJZ2jJP4H8vZ6n7pL5HQ1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ySmjqdnvFrCqzFLkfbxHtV7K71WgzMwBysvJKuN2cDtk2mxBkd7TFTBX6piwPJ8z6HmHrhXn4m3iuwaUeQ744x",
  "key1": "5EZNtd6jC1CsNwo3roktyb7BCjgB4z4nMNgo6s34UxSfHptP5yrGrc5hNgg2Z1NGT5X5nQrzsfLxbq2W68Q8u1n9",
  "key2": "4hmz4FwTUW7UHJFRwQhbazwGFmQpYjQXWwEQU6VVReuq7MjCMAtSkWsVNd2TsVEufwi8WjkonNFSCR8UmhcqXgDr",
  "key3": "o8KTVKG2nCcVgVpU5qo8avs2bNUnPJb6Rjzrhpf6YMXPHUBffWEgVx8RZPTHYzNPwtd3HjwMAXCxjzqshn9T6Bm",
  "key4": "83sUWiWrN5qQCiExekAReSBWN9AikeH1oGqkxxccWRnvadvGb8M7FTehNo8MQqZ5Zupo9Uq6EH8h27bKinbqPVD",
  "key5": "4UzUDZCk7P93Pe2bNoMoCyX3WSBNULjmZqHe4pJiqDDS5nFAypZ9Lwi7BaMCZ9fXSrXm8tMzVm5NeEVD27crM9qP",
  "key6": "5n5ZbCQmQqUgtdQNbpG5jq3PjXa9Ae3k5yRt53VN6MwUZmGuPF2xVSZFAf4VAjMAsfJv4UGdGxk2mE9a3m6bqXnP",
  "key7": "5Du8Mw8A62bn9e76QavX8J1JV9CTZBuKzAufPkkxf5wWJPHCPv4LTsmwE67ce5bRKQfjmGvNsVh4jJZHEQFuAPXM",
  "key8": "3BZBtoJWXQRFYLMmpPUvEADHadtVN5NQ949i1ALecxFohxbs454MyMUbGR4jySr7wq2H8Rd3vo369GzJQ6zmCWV7",
  "key9": "5KsyGXV9HbSgfHEkEgLVdhRVextgxRxYABsgJ36wsLw4gQKxBy1CWu4mkiL8J4ca7YvewsFqTF7C9DK45gNY2fm6",
  "key10": "3r8jgF1Y5oTZLcLgvJZ9qnEzTb6faRVewGNYCkxrdEc5ENjHjeB2ah1CjAQdnVC3aJnAgMyPUc4jDpXp9MexVkZw",
  "key11": "5FQimSpPSFYGhoiVUdBuEuKaEaaRbqiwnLGxeaT1hzjFSsLAabHEPyoAEBxwJtte3mEyuz7ca5cvTPS5zPCCj73E",
  "key12": "783G8XE7feFYbrNRSdVQPZ5GMHRSvFPPmTG67SyEUGKBYY1ZVhavswSZhk5uAwVUdz3yY3AEaXi3AXFyeoymDyw",
  "key13": "uWMZYPGgQfy7oLrfumaKgrcXPnGm9CYduS2W1jVGBevpZuWX1qUJkL8a25ZXtAXAMgsYvre76gFH5WE4Nn2KQsK",
  "key14": "37KipYR7TinVw6r3wp33VE5bPPqG1nEeLnff8rJ1tcA4sjdUbUa2vG1hKzhyAoy6axEksAhBm9JP38LtqFrWC18G",
  "key15": "5Mo8aoXdQRExHJUytuiT4pJMZN648TRuvk4NFhUBcuRCdxdDAAyqmv6WT1XnQsKbZPt8XfZhQMomLpsT1w5naKpW",
  "key16": "5KYFgsGf4oYDs7shwLoYYvBQiRr7KtnFaM41zm5DRcnqxheCh3NAKLfY5sLDXovzeGT22Qg5cWRaMMhQ5xKKUwFC",
  "key17": "214yM9fkLe6FJ66U3KYhAYbqbhz1pLdRw5Ji76PM9ZCiNDYYwQqef423V7PkKpRrGFbgrqw2dPf2REtVEZ56CVhS",
  "key18": "282XPzACit7fF4BQ5LrR8yeyRxqrsvW6mRqnRk1zLyP3oTiweGxkJHxfCj7sPFoJRLTgWEJLiJQVnEYLA2VayhjE",
  "key19": "2zFasDzY8dFcKJ8SVxfAhDKAPFLfb1r2gJtHT8AVQHCN3fapHjre2Lg44TraPieQyxPS9su7gzb6117cWY2PrCwF",
  "key20": "EmeA57WxA4j4YfndcT4AjPCawJ4GmGgP6fykVRuDzC2GXzLwrP3TTA7sy59Fq9LGwwysm2Lg9nwZP1Dh5VWj2DE",
  "key21": "5RFZPb1hiQHsSVkwhs6MWu5Y3EPPS5c4W8HsBApMwNwVbijbrdfqKrzTHWm8DvZAoRVf1rikcvzw42YHhkLHqXsi",
  "key22": "5HTVkqJ4tXhvTPPJLpi9x44c1N7Hk8gg5YuU3XVyLwfkKfruNSJqkhUEtxzpkjA6cwJo5skiUieodgtqdCatk6ar",
  "key23": "4AKoLPHLDpfT2yho1GP91Pg5DCaERmkHDCMqhHaGCE725QLeffxVF6yR4LLUm6v1LzkqfJvQoEUQAwLPA6zavQv",
  "key24": "31wpuKasCfy6uj5CjKWwcq5cDP1njvKqZUe1EXtrCJ4mj76LSew9yXSNL94Pm7wWi9XbEXh7xcaCQqaG2tkwNVHZ",
  "key25": "2afAQgqnczGBfRg7o69mS9d9Jp5gGnZYdGNmYuyTqqDQ2qLy7F2XiPgquM1uEDnHzWspiYDLPKqbiGwEsQaJuyUm",
  "key26": "2c3D9xvJjXxwCXeDwdtQD4C6hfUujtpZgFHaKe9VHF4TcGW6AByz11WtVyy1418cnZNnKFUd83668hyw6fiQxNt2",
  "key27": "24L8e1yqc83U2r6xJ9BzNQBXLU9kVLuMmGJ42ou2m9NiZxvrQ9PdkvLWzvcTPXp19jaRignGVStreTxRjb5Q6KCD",
  "key28": "4MCfRSYJdb4RBpcjGYcc7nTUHFtxVrKvmJsbtdCtBhZXGTSMtGiV1rXyb8Z4GB1ZpSCoB7rLqKLNvVTQ2TTFvetP",
  "key29": "5skaBVtAuGo1iSDX3TpcsDjDYS3RKe97JwNSA3Khq7NEmJvbLGHUBjAAmXPWNJDDZp8teAqs5wYz9FumWvrB5pes",
  "key30": "2ZtQdPFow22QXn4PUnEek2w8cBmKQ9bs7mr5fi2qKjBd7eaW6gnLRa6AbaNu2kp1UXw2xQzE5um293Vhx1tPdLfk",
  "key31": "Q9xta75HzhWbpktCw1FMn63ejhrgaZXmvyB3g7qRpqNRz5RwaU8furHrVdcKDQNroEYARTknywoJm3FAsgufvBL",
  "key32": "SFRpbJrqHWwNJc7VJTH1y8iHCJ9kW3bgdaEqwGQRMym523MuWANA8LvpP6VoQ2tX76CcNFZKoTHT19nLtV8seaF",
  "key33": "2htvHpKRH8keAWWLdjLU3fgG38QcGbRdiGZtt64K7TMvSUDpBqb8rGEhqtV5B7oE1EjjgmwCErEgwdURTFMaHCcL",
  "key34": "2kc9V4i3NfvDHvdLPReCE33shjBDHcjJdjvfzktQKY28wpTt7d2HNNDtVZfQyQ4FxqJExP2m2Y1BugEgAyzwX8pj",
  "key35": "4iZju6DfDar61DqRKytFsEhTG3F43TMggi8guJXCQKWMeyL7PFEymwDPzDVnbJMh2CWS2wEf9xVrSmvdqfQNvQ9t",
  "key36": "3zZHW4M2gkqLHSbsRYUhdMVbgc7bq7QwiWCWiWdqH5c47hjnfVeEFaqmDK6ULJS8ePX9gz3ASZH7aeNxQyqyw279",
  "key37": "35QBBJtXC5e1qeQdZVK36gUpfYtJUN55x1Y6PMU637YkmPwQ9KXaeYXXkjzcQvMbYutgmsVKrwcFKfzjKiFmZkzG",
  "key38": "4v5nSUEiUkHZqAMnt5w1xqUduSpb85Aj6qXQ5RRyiCgVKwEkTWm7TqGs5X1JvuyMJycC2fbaXmh9KaX98FrhxkHN",
  "key39": "3NaSWPmhZyv2dy7F6J7a5fyE9N13QhoZDfLRTyVZ8x8gTNHvxmCBv4SLfLUi8QoBu5rhZiHxyBg8Zfwkvcrrrrzg"
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
