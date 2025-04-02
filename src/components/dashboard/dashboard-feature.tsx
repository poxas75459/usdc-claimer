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
    "5adV5fUBM8qwdSkviMjzm37GCLS3wmM1Qnf7eNhbnqcGrXRGrJasXx2GUBwgmAccSUw7HXB2T199NGDzKMq1iTj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thCQZtr7S5Hn6CchSRZPyxXBUd4B1gMMQEBv8aSmLBSzFdqeA7AavAzyUXxsZhF1RHqNXg6ANLyZNsmEEUCTvD5",
  "key1": "5HnqZPXFr5u4K793CXWeMMmiSCR5PxMYZsfhGwsHSctu9tav2WjWcmcv4A74FpG8tbHK1BoAv86AdNXgkBBiZHfn",
  "key2": "3d3hEcPfUXZ3RLTNYo52gF2btQqmxkKox89fHDMm2m8Rr2zRztL3Ag464axkt8EAqAYfDUWuYimrN6472a8YSUbs",
  "key3": "4tu5EyRfrpmvcRmCvTQf6xz9bpYnhsHUrqgwSCbNx42hfKzApUgPjNyqzLpmiznSvSsqFJvid6yQKF6Z59B9wmPZ",
  "key4": "1VJPQ9GNofUFYhBtdhxF9q1dSnpLQrgpo6ovy2JHQSeWD5BfXdACXmBP8AQvsE3wzgc55A2eUaweGgHnZBhgRdn",
  "key5": "5EGWXr8v8sroyyn7mEa3cxt9KsactyEGK6nk3AHHEGvmoWNqnVG3hqDE3bKJpgYMAm2AWbAb34PuWEwzhDGDrnxK",
  "key6": "ToMvYKibdRHH1XyWWgBksNU7gMVT8xfPRegNCWzxqhvAiXuSKMnPF9JUqNCzWNt9WZior5HTK44QqaMEYsy9RgF",
  "key7": "5msFJA4mf32faqhXJoWu7Wc2SxXe4JczsXrcPxadPyhzxw8bUG3XdkYEYv21U9XT2gxKsk3eG4NQGKxdi3rcodhx",
  "key8": "5tNbSDbr3L97gYo2HC62zMZP5ZySAfqd6Q3SKhhC3BEiZkXYTWJeAztzyAAkgHsmkBdZyyELDVAviRpbBPGw4pQC",
  "key9": "5AFtCHoPxuSRguN9k145mwTsA2uuHkC64qprTHTuHeFAgfHhRCL838hSUufdNXY5ZzfUyUaWmodfJDNXfoxFA5C8",
  "key10": "4Vgvoo67sxdTduwFYKgV83j8NUBNAHcSA6AyQpe8tNXHPTxTMjGApL1FuVMrvnoDN9fawDwiEp5uJ1JmKFJQcWyU",
  "key11": "WyhA1jawAkqnrJdWHwbSFhfu6qSAGyw2kUhhZEws2Ppz566y54S1JUgeV8P1k2B5CQgybxEUF4q94wbVf3EF5AR",
  "key12": "2rKsMnqbdwYeQLLE1p1aCc4YQ8LVT283sK16gMqfHD86bkfbo6aJkmJ8XUT3fZvt2YZb4xUkSqBALcq8DnEqsyPu",
  "key13": "4JAVJZTnukidmzPqvL3K5BxS27Bj4L5c7qztMhmX1dY5pnM5dBpeV22tKDqiwSHVsQdM2axbKqeoo8bdLTtnWqfn",
  "key14": "4ARznpuYBxaaxxaCevsBWaaP9km9zrXnaXEFcrejfxU5oSb8ouv5w3XhjfZi9TYbiyThrnMbNsEfFxMbBCBpDCL4",
  "key15": "3zSnAYLnZvE9Zskx1MKHsQ8YeFa5AswinFcrRbXHdBJd4wJkC7NiMkXVr4bibKs57cYi7N9gbJkNtZpKwWngGFxC",
  "key16": "2RDRsMrvDo5Fby6widLn4c6MtUD7HZvwzpRRVkcMz7ggkL3L5nQSDYRBprDg9PCXedpmNs4nfTZNbgnXu6eBtZYb",
  "key17": "5wTDt6tnGVebWANmpfgCGsCHoEmyFwfiLHFXvHPySebf2qhspwvveR2k6W1FNeCMWBndg3mp4FHEPR2B5cfaTfjK",
  "key18": "59yZ4CkbhmpN4VxbyMLE37EjNfzVmLr8hqREUJqZ4pcCHFMEJYr3rRqwnTvodkb4ywS5pYpfbAkgMQdd3126wLTJ",
  "key19": "5qaUqVPh7RCwH27mKw3KAjYSupe9uVU8ER6sB5iNRQHfsfN13sjqZXbAXMHcNutBQtAHpcSzFzfRdCkokKLTNyQY",
  "key20": "3Pq4FHHDciX7zzw6kDDKiKT31ewr55APwLM6GVKk8W6dGbNY3FceAXm6djiDyHku4RetfKdWgDsHnxStDeAEyx1c",
  "key21": "pAQF3BsTtAz7NMymZYzY6sm5FHwgw5sgxjMoNHF7onY4qCQN5Z1YszGrYagepjkjfSBNnQRyhjpyGFELBJAAzdJ",
  "key22": "5ZDfqo4fTuH7ZC2avPzb6e5Dcs3DgTASC9B1smSHkusBgLFXFhVhviPsHuLDQa4w5NWx61Qm1vfaFTqxSPEzjqMq",
  "key23": "2jg7iBPUXHiCMHcGUFv8KfobkkcuNtQTv8kHhxPr6iNVpbiFoTRmM7agrWhe9YYqJuRVjxRTrdvrduZzQ51wtakS",
  "key24": "2aL1fXpqqiRjMmuaGaVnCruq8PvvNLVzHptVMPBLNPKSvdVqw2VeQV5fofsWE2fRX3vahFzDHMAyeTj4NiroZMzp",
  "key25": "5BCu41AddaewYZ2dBVr8Gar69eVevkcWeDbXjuXbKmK41TCQBEjFgXqpkRiqQ49eNk9RbxzjoqJw2JEnExT6tnBX",
  "key26": "2Joicv1JmC3NnHtCdyhaxJkpbFhG22kkwXpJ8gps9EKagQ1hGuLyfuxcHK3ydSKc21fS6uo6MKUSzZJ9JSTbvpym",
  "key27": "4Q43cZojcBbVgJ5cN4hDYapvJvgPS8mHsXezRtx4mT3v4PnCKLuBWHAQGUCByH4gnPMsD9XAthRXZwpNLUAy74v8",
  "key28": "4onsDTneD7DKgBqSQwB4eqidfrw2qeAS8asdSZvhyfHZUJRV9QvcKu2E1sjKo1Gyj75M3FKGt952wUzvUMVbN6K3",
  "key29": "5uJ7EJvD6R9zDcs3rPP74qAYVnR6Pzfd7yq6tE5GJrKNnhuNzRr8pGfefXwQSJK3KxBwnGfrrZ8JTNrzHauobwMR",
  "key30": "hGVywPEw4AgBFWmxUe3mFn1FoHKtqjSbvqq4HL67m49Rrcxru1s9BXWvWDYoXVMfmG4yBCnBTehzL98gUyrmffm"
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
