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
    "JgCXHWJ4LUPmb6SqaFvrpaBkk9Eo68WVQe48RxJsrsc5YZAFhRumNK44btma7QfLNoUs73i15J8SDVqhr3PuY7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VMHE6DM4m5kumGW9ccKBRWv9u4GtfUgyvPqS8XGnouHd7UKE9pZ2qi6BJDD5jgf9Yq6tai8Ycpc2VQKSSHfvXHN",
  "key1": "5DEZGoWBweNxPNrpKCwtBpxPkiKgdU1csNzP5gfqxHPKrx8be4rwwArEpVpZtVHVGrBdpQdWAFqRZF8y7uQSJMAt",
  "key2": "2EvFYra9MyGJENJGRWvR5dkNMqhmSdumeKBetAcDcFToeMZvD6X6HvWYw8vPgrQFSuvSkYpLoK1fLLxUpKMtfLGg",
  "key3": "4qzXa2BEoRdw1tuHTCj7dScmbAKffz7em8pqoN31pcg2LiTRaxKJ2HmLTFdk8H4BkJbvFBjqckDKhknTdhfJo9Ac",
  "key4": "2tY5jkiaz2TH779AUB4BKi4kX3u5Zr9LT7Ekyj8T4WN9N3v8fFh4hFHi4jrysMxZUG832S9SGbu3zJ9HfuwatLen",
  "key5": "43xUAPzpZg95Kbq2M5VyvnVZbJfJYzGZtkaVZCafFZUncZZf4a3nrecxu1bbFG3hFv8zCxQ4wy3PujUFcnoeyNXE",
  "key6": "5NtEvnVqZi93D9ozX2wLaGYBWSjwc7rjaW6Y18eN8HSrB4eYsGwSmRSjJV5sHPsZTmebJhrDNuxyJsVjuWzgynEV",
  "key7": "4sw3K981rwsokrFq3vurvMg1Rgs1GpjTVnQYgt75L9qBwcxbZ3VudXvU2Rbi6nPEiq572BqWUYpyYpy8J612S9D8",
  "key8": "QZRgNuV8WEFqWWbyQgLjkbc6f7YLLZw9x6tyPdHFPQrj9C7UP3jTLdKqJdSsxQQ95WM6JcbJAqR5p5wAiGav32x",
  "key9": "4sF6zWk94Sw95pv5pSEYoVureijWvQx7v3rT4PakmbU8DPFTvQq3KL9itbehpGwo9xD4emb3w5M755zrodyxdwYb",
  "key10": "GgNqMpscjT6Sv7BMe5Ty9aJwpDnVr2WamGiWN4bJ1t1L7S627i8mQzdeEPmWGkxq9LmZSobwvAmca33TQjveB75",
  "key11": "4EEqVj596nyjmgCpRw5mdn9aZhWUhnwaWGFnjpCHxR4i38nEGNhDsMz5Mom5rqdhFd1eCsPn65eCA2Pn3PX3bZPR",
  "key12": "24NWyn8YMiBQvkvGLkS7HLSPbrukKNSLTiKn61e1rM7t2bw1a1K7esfhp9tKGBSoba7oaDdJ54qMp3Jo4RhqPmym",
  "key13": "5rjdL3SFRY9sNWkTaNXyEm9PEg87WSfyTrTE6h56bht5RKLjEAAo4jcYYBhToXHQnCo1sUtKZmSemrhGFE1sVAJq",
  "key14": "5amqwzDoNBHqSqL8sHjfKL7jmT25JZ5Ckw5WnAT6b7fzdqPQtmC2SQfYRKqgZPMCahUeXznebAZtybnDiNpBqN96",
  "key15": "4iqu4PSQM7sdhFEDxRejvVtvnjn1Fi6dYa5VpQLH6qg84dtfbgzDnGy3Z3Dk4Z77ZYxtKouZ8JMRzJfqKYAvzoC1",
  "key16": "2yB1LZKd2FeQ4sVAPCBiAJiEtjqwZDz2CxUZaMPfpjhnprz8sCBpJQTNcvnJVhruSVZttSKfro38m6eekNi9dk19",
  "key17": "oshaL1wQvPbWuZDL6HxXvimPGifnbKjnxdRHsXkr98cBCu8DUrJkdt5AywU8TVF2i8iVNLKGKhbBMT9ovDn73rP",
  "key18": "3WVn6ppe8JEAjVMfjo3ferviPxLe2LrfhdAgPnVpLL56mfgw74PFdvMcto266Z5S4AM2U7WSs111TukNRFL9xVch",
  "key19": "2dGxM9toyNCbjxE55HXfAWevmmceEq8ZExgzdYXpviydeNoB3AUaqJMcVYwe5SwR48NTfFG4pEG8EUWgPJAVojrs",
  "key20": "41qSPh6mafYdHBsuLz8uuamRrsaP6Yj5bfBHvoWz7XNf9Ts3NUBAjs9yGegBJtpEfqCz76fZqgGWgpN5GhyvV5iw",
  "key21": "3KB5em8BDNF4caMvwiZgEYH3iDrgfE8LE8e7p9mSSebjCYKBB22NYvEiFeiauCA4VA73gyekjGg8fqGss6LxBZxM",
  "key22": "3MTHdaF1kFZ7cMphYxGK4fA9M6J7DwA7LQ9HoU7s4eEBU74o1GuaBnZg2p4sbLrLTTveKvuAikg1MbEdh84RwhL9",
  "key23": "24ij1oFH8AwSKZdZftnUBCPNwrMKCpVWgznwNMioSwD87AwTz41eTJpaSdA4LnK7u75QSqJLbvZCg5xhbD2EChBh",
  "key24": "2BJ45SYBQLiTije8Q9hsPxvig33EnRK9agjcAbyLFeRZ3ishSsTdpqD1Zc6QsFnb8j98AN8nCG5YsSpiWH4CpaSt",
  "key25": "3TZepDhqtYXQnMaMi3TXuP6zU9ux4YHMAGYYzBTBXQzGYSSMdyPxEX1a9RjVaDt3aGNWm5dsKXoMg64M2MjTXsCS",
  "key26": "brDnSiUT2e2eEx4C4FEP2RhX2upoGYTLzytoLc4hgE8uGx3j7wduP7xTzFuurcsTiDUZnmxSQdAqrVk5xN2Zid2",
  "key27": "VDK1tksjgn1h7Cj3voU82F2UTenPNKaqcZEMg29dL93AsUN9EC4S7X7AvDCtfWCRPK1x56MMa8GAftCUvgEwDLU",
  "key28": "4S7MCMGPsyY2BknYJ5gKpXPYTkRJaQE44TQTe8Q2MxoTXcXFUQq8KCkaaNUDhzKsciCJzR7dQuyX5QnqMmMbUthc",
  "key29": "2myoLH8PRhxzGCVFxgoA7uCfJseeLfUHpiTemQiNHgJ9wTHB2Yc8wHHd3QFFsL75jvLAC4UZJLJ2AgnN5ZZhCYvn",
  "key30": "2hJxPMgduRqAQVbcdR4Gb1i2Ughd3i9HbSasbQyunWLk5umm5AdWb7t9F9ymzcN6BwZWJjGCyXDHyNK1U2MSmtWx",
  "key31": "3BGnAtJB92B73HDzUiXT2XsjGToJs4rSxQYSuHQe1k2nPsmsa5Yr5WpTfWETV1NxGuUJ8hPV6ShtmenuQzcUW4QN",
  "key32": "3hocgFWR14rMFgfCbq6BC9Z95rrSZCoY8SxBRuuUXRaXLE3vr2w1Tnu5rfXvNaUfKbHd3WgYUJqSoPU6XmN3Ea5A",
  "key33": "4mPSc9HKbAaRtugYcfdRMA9JGQs9NBLxRQsCb33dauE7nLz58xhWTHW6HJxdNmEmSJLJvAjM2113icFfgkmQbjhU",
  "key34": "2yqDjZY9U2x5ckQ29ebi6BAg8GXPKBaFgvgjQkFrHbSau8LBekjFbdV7a2gGdK6H97VEFZ5JazUNyEZ6npphLNAw",
  "key35": "5Av8fZ3RZeBnfjeNEawzY3Wo1jvh2bSfkwpfADXvriDsjA13mD7vShqxDp7eNZDZGiptyBVefKet8PuAQAA1McV5"
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
