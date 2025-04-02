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
    "2XZMPnGbncHJ4bEnPcxKAbVYA7KCxhNtjoDH2dhASvrqBTVjn9bYdrcTqjzSqaLTZwvg8qgHPSPntP8FNi3nZt1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xXiNcC3DovawNWZWrirbrvXWqB5yweRZ53LSQMjrRD7hf8rC6wbfZ53dvnH4ekywApndJjHJu4a223rdhEguqsu",
  "key1": "4shMcZzi2Cv3C4SbmhdAhh7KVTFUMGaqJdG13NjF6KJSPqZrdiUUKSp1uGVD6SfvMHgVEh7i9JnBVSKf7VJpXF3g",
  "key2": "67A9DpBEnd3eew2KqvVu3uUq5nfda6RnSHsNimmQuv5Qr1Ufjay9uDTptWRRb4YXzkK7gHR9q7xAcAHVjwp2rdti",
  "key3": "9WrA96ni6GwmMuQTbF2Dm1pbNK4JGZD2sMFVnQewQi7qPoytw5zbihWeefEuTtdcq8M7cSbkBpbnuSA16BbK4cZ",
  "key4": "2qbFYNfiaY5LmCca9rK7bmQ6YQx1YUocEZeWhTCjfDQriCB1G3kygpamKoGjGqYksgVpaLH9DfhRup2kt5Ys5SPA",
  "key5": "3j9bLENgKxFQGvkt4qKwdNyhvK2XpymJwA97TnMZ2urdsFZjrEAz8Ws1a4MXU2C9wogDff8LjqdTjZWDqgWfAJ8X",
  "key6": "4Sur3iqzCuEsn9QXujBDQEzMZmdBG5EwzQKqaZtjGDDfvjtvCZ1crVmjo84Ktw7z8cwy9hcbchquSbBJBm4maD4r",
  "key7": "5XAexCZBwcELqDGhDzE8MsncVbztyCfrwLM8RidQosU7tNwj77Ph7EZ7nS1k2ixCLb2XFATos4wpVPdB8McP7Tp5",
  "key8": "2oecBfqrTsXLfZLBJQhv3j12kteHr4ucQZGgDxL1V9zy5grSSsg7aJykM1u78C4mR27gUUx2vY5jDYNvSCaY26ki",
  "key9": "pKeUB3eBN5SsR5DcLu5EPisSfScMpKQnUMMGSMBokV4qhP6iuwpfQw2WYWQgm2PoEGxGxHV7gNtasfWiQ5eKPge",
  "key10": "49NaF7m4jB8kKrmfKzn1PKoDVakbGgLTficNNazpi7dwC3ZMbnn15nSr9SxxuCbNatadbSHs4HaqF7XXgFPxnpk6",
  "key11": "36dYhzdCFC9eSzjk6Av34oXyNkPJptHWEdbFtTmPDduBkiJsEhsyQNwPK7bJPjaaAve3RcbQr83EXNMZF6yQVpfa",
  "key12": "62qNPZ9sTUT1SYgCZ9a2M2qS6JtCVLEuM7YDhPwatTT8xzPqQwUnotoo8g5GqJC11PREe44HtoA11rumBJqD7QhU",
  "key13": "jxv6xHTmXyeoRWwiovTeqskmNsgzYAZyjXYMLSQuVir6nPhNuKcKpERKgYW786XjGjnBtzKQ3kEfnWqBrByuKbj",
  "key14": "2BAMoMMu4Ukuk1mzaruoUPNoDBGpJwLNJLLfiDKJmGcCMk8c6ookW3FbykXvscib5BphWB3pcDdmsCFKbngh3mxK",
  "key15": "2rsNd1fzx64yJpdevt5Thbe6drEXHdtcaZn7D25UA4wR7bAoMhyHgoGJSEgz2tcxWZppEQD66cqowtgnBm3QozVC",
  "key16": "5hsPq1pGYkmSoRqegtkNPMWYvpfpdRbFyLhkDTq2K9MJB1YwBZuHKUy2j15Mtia7yPHE2B7RYFgSxqcADfZhU97n",
  "key17": "2dVB3xVGrgd7uSpcWGYvkuuknj67GYTUc5EabaE2SBNs9KJGGRTC2YdiJxAP8U9G7HHxiBZkB1KB6PhUrqXny9Xy",
  "key18": "izotkzCP8u4ekwMVMZD4BU5bLREVYZF9N1qBpASHkz7ybLCuvcnWvuLyiwW7hnyoiZpCDVdcBcQVhNgqnLhvPm7",
  "key19": "5NSkhWgS2XuNwi4cZrKWMg4iJQZTShE27KHt6E8rUFJToQxyyWhzZb9t8EVystQf7rq5VxkYtVyi3w7eLKXPYpaT",
  "key20": "WEGDW6RVEAxjmCjXFwBKF5V7hk3KXVLNpTcVdArm6hgxLQixbyPF6oaCkxp6Fbe4NSHevAEuXXd5EuBT62XBfG7",
  "key21": "2xQrNNemdUmQSKFrFUSPzADREWi681WwnR2T4RqcnwRWuZ4MtyKXq4LNNFVwYmemKPg1eaQ83GaXcVZ44aGouEhZ",
  "key22": "2qjckzrohGCdm28yt3traLEJvF2NucHWoARo9MbSErR3iqQrhE91nPsrE2hVpHvf24L3XNv6YFjnxf9g4X3gy63F",
  "key23": "C8Y1R6UvXZEuZM5M55wRsp9LCrtnE3x9rjhQ5z88JGBCaMPkUQDAzZFR2JJ6w3b28dCpQYxJd6RZwTfDdvubupv",
  "key24": "3haW97ReN9VPvY7GXr2gGAH9jzAdR4fepsoPbcH6VupmKYBeia3GTCFmEgURuoVUwXfbfaA5k95tyJo9UvTskQzy",
  "key25": "3o7jZeRf7G6T11ggFxAecj6kwYEzYvnxYafVRCCef1WgHJQzYcvb2fpkhqsxbU8YMTEK2nR1shzNXX3nkBsAA62R",
  "key26": "5NWdg8UfLVbR1Vy3cW9KzR7b6XpQbAr6rEkoUiaJJzU4yD5676zBCd7XDa1oNo3aWvQDvQQj8x6ig8vfdQ94ENeB",
  "key27": "41CNNN6mT2kkQmcB6jrMTqj2Fg2qEpJPdmfJ85yyj1jHC8esqorCvRBVBP4ZYjf85Zcfq1roYzifXbKmUvrGTnbW",
  "key28": "288wHLdtXB57vfyh8iaXoE9jwfbGceXgYCzqyqzqZK4vshgp6jkq1nJyatJyuhed6BQTMTpWZ1dq7LjRrmAh5dcM",
  "key29": "5LvPm9vgVRtFqsBvog2P21oUfrt9xyvzNYMoyrAv4dCZQKReNZrrZcqxnRqcZ6y9GgkqU1D6RyMEfW2HBgHqNYHC",
  "key30": "rtChGCVSKB8PKFMDQYqPvmMenXqZgCH3xQUukYsgzRkMs2RNnYR1SCv4xYZNc5wwv1WoT5oXRAne4S4VkkczdQa",
  "key31": "KMLGgr4HjduE493y3aSBu5pyhX7hhmqs5KHdiTn9RFZSVsRgwrD2iVbTRov8c8bDkf5N5vY8CfG5GNGnwK5aZFw",
  "key32": "48Xs9rbohZaKrCENwugNUEAozbJfmzVhaYEZ6AC1Ttm1sqvKSXso94a12cBgVht9NiUmFZmUd21vfDmNxPPGbPRv",
  "key33": "F2KiEVcbb4gc1heAVQiH5vKG7YyqECin57t1EFz3pkqnVLeebgGMaq38xX1FFJQ4VESt786EfhQC9qgBmvD34Mr",
  "key34": "3Df3B6NkvxDExHXWUHcpN8oHExwXZRstPinL8zt3rV2uXsQZHJF9Tzt17rLzfhbUkKmdtWaWut5r9Vfy2mxcQjp1",
  "key35": "2EvuRXPdn4h2nJWK49ghD3TU67SSRim3i5fGA2vYApjTPSGg2WgMQYygsUSz4qDzrzxScw8Rgpi3SwvF1LzgNjDu",
  "key36": "4bMvm1uteL6m4u2yUJJqZu6G17Vwo9mWHC2qmfyZQBHm4d6sVaz818FWAhUxUoJXS5hNBieRE5pJ9zVZiReJJUad",
  "key37": "4kaQPKvPeF2ZKzXGrQkraGc1yMzGxQsEhmYsgia8ubwSdy7CZ26gSfgrCpCjW25H6Gc4RRw8tRPC8Rp2QVaBHcDD",
  "key38": "u9yvMHcuPVq72crCSCAFAGTJPXEnCWU7qoAm5nKvkcDxiFqSiomVLhSAq9JJ83nWKfgoRqLsUK4GkovJjPghENN"
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
