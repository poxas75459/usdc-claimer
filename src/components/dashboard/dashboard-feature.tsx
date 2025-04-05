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
    "2uDC8V4hhcHSx2arAeDEGzPNvxqxGs4S4raTr5dZKff4TYaJp81jLAaycB24WDnW2tdukejqqa8Jw9pfqFW5rQqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSLWnEvjkeCX5NahFvN1XRHGodrCpnEEejseyH27kc6djuugwvGKm8YGdkcLEg9TW31apAw6NxhgcUi8dnmiukq",
  "key1": "3azKGoPqcqnFyowtWWvnsmKHT5a1DnbxBBwWvV2saZNfXoq6hKcUYWE7sVCPTngJmyXaUQngkDddUaBL25SXT7of",
  "key2": "4FbsFra9GMasGeah1kPh98hphdBGsuVcdthukMszXyhyandeFNStT4Wtq58baeyNSJ62EDcYtCqPQPdYbgjMDya8",
  "key3": "3yZzVBa5yjD2WRr6iLSkgadzKKykjo2VGA8J9Mw4QrpgCuJrzW8xiCsUqCHuppMQKm9yBajA5m4oFi9g8zr11LZc",
  "key4": "mbtbASPvcAX9j4xsmBP3VdbJCSYm2eVhMWmTjzB9iKgjjxSZDJYnxpuSCF3HzmiFpukt8M5vUhJP5zbNQGU7fXi",
  "key5": "jpD2Nzja8bGB131MbkoK96hsTGNxGtDauDkQruycBrE5XEXT2NfTDa4UT15qF97vVuzC9JNt56v8oScyjkaqoNn",
  "key6": "3xmZFqnDzfigJShtsneWUjFeubdN2dnCCTcqkscNmArQPnLMhNi7Av9rmEA5XsBhKVLMX1GZKw5SFsQiZ9cfojEt",
  "key7": "2zjouRpLz51tcjTgua1iswvJQX5j8nAEfaW5rNKt32Jhs2bYgsMpRGvJ6F3xzdpyBstZPCR6p2B4Aem9JGGk8MYw",
  "key8": "Xtiu77yaY8rhQVGYBFBMdKLCZVcDy4FNVx9PyxxMNxJfKm7sQ9NyWdLDgbf6Gt38LwqMnPyhb8meTfqx11Nhirc",
  "key9": "d7LSKUDDQNpA2kTZDjkX5xU9H4XMdxkFbwVUxvdw6qo9kS6MUJUcQcqPBEJWFJiPcqafdzHtPMFcsi6GwFjUQT9",
  "key10": "5K65xPdfWYjWho9EapSiJUCzu3gPp8ypsvuUqqEm5b8XoYQa1T7h7H1HGezGw3vxtYa1enVaYyzu4BQF8LFCJ2VX",
  "key11": "4mehTs9czbCSEFw2Rmvs38vcVBWkjkEQrronNVphkVtio2eW79tLbe7onZvuLTAQ4DJQc56LAKhiFzRpDmwgHRkv",
  "key12": "4Xd7umQkDDuS3CjoH3NwmcirBmProfYMXdfDHFL4Vc59zUMkEMpNi1hvRwnin22ak13AsNgRuRY8v5Kv9yuZxyhj",
  "key13": "4HzfhJuwimvW3HqSyXQy3LCzBf9Cs8douh3qr8FCGrmDxPZzUXF1NGFFFBJnpdhdDfYvrWEq6noj1vQhzApt3Teg",
  "key14": "4A3NbUtTnhkbguoG54g1H71AqDPvqvdifdsCR6xQu16fS9S14qFYQFDG2XT72MPXbUYoK4sqwvgUosMVwR2ZFZu8",
  "key15": "5EnhHRCP8pQXCQC4oEJg3fykathpDR1gqqL8BZPB1itqpZzisz6x4JWgueykWXguV7M2Dhbaj8z1ayY8Fh5uZQp",
  "key16": "41zm9sQWbH9o3NV18tR9ddnNrxuXhBAHh9492zh5gCrKsk4o7iEEdbeXppwHEYdUbxwAQ79wF9yBLFsLHfqc9Bj2",
  "key17": "4uF2cTpY5w88CaJyzdhR45xvHkQWZqcK1YEBWs369DQwXF6VjSk4pui4TVbk6EneHSHAUJTPHFNAfK9sgvper8ni",
  "key18": "2tSaJusgYA6E7gy8XuNRxfwourjRnvxKzE86M3sSzsyygnSuW934VtWF63v3TyQLq8Xh3fnFLJ5NdKybqNAhiCY7",
  "key19": "3AshYQ66RRUtZ4hLeh3UbhPdK6dUyyBjHSnpVd9kMwCTDt4Sxzp73PRYmh4jCeFf4XYwCLLXjGpaizjmH11uPgBf",
  "key20": "24rrMHUnEfB17nvZvQgEr8fWeF3RGBktCUKTexFTWE3yqcD74RZV8Un8SjdY72p4H2FcppecE7ZT1NJ112XdKE4e",
  "key21": "2xejEcZ7WAYQu1dJ8GGTTTZSbNP8N9sMdT6rxZkHxa7bz7hMc87wvEuAXFET3YawfUtPWFQXFH31XswWqTjcTYgh",
  "key22": "4qPp1vtqBAqWmeUVfWgmT3qP2gbz9sdZfPXQkWdGQnonfZ8TSCzwVynGq8AnY25Q9gbS3YZ3TG5FjLVRQ61mpmzp",
  "key23": "5Hek9n1Ct4NFfZ2EsGMf8Ae3HVM4KiBXA92qSDGaezXZ3kLXYmF5qzCkhVoS66bzdVDdbXiA7HAhoCV1iXgNDYyn",
  "key24": "5qkmJtYLmFg1SsxKHS1pwH4kt9D7XEP4VGgpwEeZ2xAZx8HVfvjGf69mhYGWEbKX8FNffaPBHSFSStaz3MZxoVxG",
  "key25": "4yLs5xXF3LJxfEDPzMk47mDnfKeUY8miqUkKMqUc6n6iq2GzgMNY15t5YGsjetQFfkK3nxGuadGBmVU5PuPLrjTp",
  "key26": "2zaZ1Zw1iuqmit9oQVTa8jz9UL6mvNer7eZ13vUSTKFqc3oYoiQyKLWq1bXNModSm6b8ryYLYoVH9jCS9Q3Yq3oz",
  "key27": "2hQJWYbhtiZJcwbRiQZ7mLdbw82vvNZMZieBAgpfaaqTVWAc6rXUmX2C4Qy3tNP4YnNufz1SLeDWvYvQArsm9keS",
  "key28": "5w29wiFnxWnZE7ZfoSzRv6bYMw4Jgc8g2jbhAG8zdGNuNrnx16d8DNjYrV61sDqgX8poJtuvqEjyhBKDp7AmV8Mh",
  "key29": "42iyPUncJaoXKYhhWdC8fs2Vv3AAawqXFAXDvPRYevcT93oNLXpj3mmoH6k9QCTwvKznFfrzKBpPXgGD37kxXb34",
  "key30": "5UWEztafJ7QwTffZL1dNXLa8ZV5opu5jQzmmbM23fFnhMEHdiEZ2ZrXGVVXKg9innSYBaYj7mZe6aRP6q4mDL9Qz",
  "key31": "2a3YzUXhnYeUfSoPvAbYyJV27BKKrDkr3oeASmU7mR6gYoKUTGZ5ZfJ7L17B5XYsWHhpNFLDGRckfAX85bRDboQq",
  "key32": "386GqDdWScaK1FtCQXT3ueiLiLRiTe4u7MeimZaSUSeZghrc2jWJjobh21nhkG5AZF1AoA2cicD8KTfWRfQXDBMV",
  "key33": "2zKghBZ6uAhFimA4qkUVAjwXxFGDjs18LTW3bMdJTkcJarPm6GhKdArMfeu7r4RAyM8D9AdKDSfHTuQNNeciWYJQ",
  "key34": "3UJgsDqEAmE8X3etBCCHeDYYDVMUHyympAaraxWomYDvhT5vohaT4NeniCYVM8YqViAGH86GHsvGTP9wnBSR1BCQ"
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
