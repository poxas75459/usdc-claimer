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
    "4dJfxfddiUSiFqQUK9yCbKBkhjqME3sCrfuTTu5eAPDJkssK1iJZ4nfhFcqZ5zqeLZb9SZqeGvtCf5hK4aDEdQSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QekmfnDrJEar8XEL5N6kUpy8HCbX18zQuqciSzqbWvpKNxWRVUfCm5EczLLCcC3ZqTnpTvBPZmybeHgaGTTEnQ",
  "key1": "vNhMNazwyirL4LP6aRiAzbJXiMB4G5YB6c3QfryvpdhAtBUnxyLagKKpwCmgrJwAJzcJin9yimPbQtbJ4GF68Aw",
  "key2": "3CgGGLk4aGQQ4JguKjttZe9hUaEkPJwqfkoEjs5TCzfeyG2PLvakLcw4DwPvK2cZ9tG3gA46MQ8k9PFwuCzcB9n3",
  "key3": "4AQNUkgVubqspYi8wpje7gVmTvmBuQ2K1GES9xVs1yLx7ph6CDprVUsp6cL9UTsDPg4bm3wdrxeeC3LxDA9MufeQ",
  "key4": "4fp8yb3YzqWoRPw9m8E66Qd4mRAY5Xda1L2fj1s5tnBk1N9h81fbvELEbzpLLuHhQMGXCL9wFx1hBSKWi49WaniC",
  "key5": "2c3td9nUEUyccmZ7f6xXYxiogLEpoBpKwx7W5K6CuMV1jMtwJpPqiSmk5mGfQMTckU4nKpppyY1tsCEGfiGsK55e",
  "key6": "5hGJSPym6BWzudy1FnLkwczqLXtohbBmwvmtB9TYDSQJHR7v7XMHfaeJDkGoeUgan4JXDSDNHfVseASkmsDEinXY",
  "key7": "aTReDxrFdwR14Lkn2gLCsU8cVU2RhpN8VFa993b729ym7yEL9EtoSGDXzQaqCdN2kUtbyKeerDKdRutmVEh6zyS",
  "key8": "29XEHKgZWjWDR7kvxteDcWhKygAyw2rt5Fx78M7PfcHtkwPzm6iN593mH1kfceupPZGJA7tGpzsrU5EZma5ubujn",
  "key9": "5P4NsMF7RQp1sFKu4ed5ESoyxGgKcKe8FJ8z7wESgtQxDCFREE91o7ZUooZo768KsLTLwUvvngNKpdtHbqJrstsL",
  "key10": "3LGSeLM2tbCAHGnKCHeZ3JVBGn54FK9kc74xMDoNVss3wAujJUr6z8kd12oK27JwPgmJsV4QCpCmnd8CMpFMzU83",
  "key11": "2TVgUS1MjquahCq6Yzf274bhurF5mYACHwDYuvyaUovfzrYEB3FcBd2JLrWfjdXfjnvU99rxnwpyy53Yqzoqv2gm",
  "key12": "jFzpuP8rtxGdJ6omww7eX75bUdRQhoSuuRsVKuqj1KrurEbUwrqiPhShUiGJGxnaKLvVMKiHBP5qQ64FAdn9Fn3",
  "key13": "3JHSPe8iUZHqkpGPTfquErbFJjc5id85Ls2XnNK9kVr46d1Ypyh7QCUghJG6wGxJJA6fs84XJewzUSmoeqFhYd6m",
  "key14": "2tHBcevgoFDcPUNkmesq4tBR2HYgzTe6AB9zvpvu6wNhj89m5SVnnE6BnLNa6efVaLPv9hRnWWx5r1cvsgw6P2rR",
  "key15": "4hWv5QyfBqNoa3nyufwGsg26ZZGnShqVMzDb5UtpJxfHDvRe6wjSMsvkvfwVpsT9NK8boJnMA9QyfTRFsBfVHk7K",
  "key16": "2iTnJZCqSQ7q4L8GnbmujwEccQAcqAFLdkkcTcnT8GK8qgXuJHkU9XUEByrpUMbr8MkaqUUEXxFoXHQFAoLTDVNF",
  "key17": "5EGaqgKLffBs83LsBvahrDwuALzw8DAHjyb7yqmfehzZK1b1j2CUBsxLnM2488rZui8QDtzrqP5L5Wq3PCUGzqpd",
  "key18": "4JPPRJVChzc2Nd8n2NfXHZ9Lg92oiMEH9PWkqFdwWhwvFGf4ZWsk955tp5tGNueUYs7FELeLMo6awvZLTUF7QFdr",
  "key19": "373avUvtpEY3c5RNXAoTpdviLKgD9ZrcayLoPHNgML4DPsqkLumdsCY622D9p9inXpj9r2T6TLmbr5kusUBgib2f",
  "key20": "3NAozhf7pkmECqmErzUqbSGJ9dU5bJrE8makeRas17PBsuEpKKUtvshLduEucLfDUnV6eQPUWLFG1anCHRAxv47f",
  "key21": "4pEZ3DhyfibgY8rbuCV6bEojGVzBKaswgH3XQa9VhzvASHfTapTGfUzPBh29BsQ8RdjoJaq5P1zwbSo3XdXBjHHP",
  "key22": "3e9kZjgVHrzTHfBVwUTt9q3qZTYMzeYyEphhcchc8bNDHXvLtuQZLsso5WUi4XycQbrqpLqLVLNr9F6BCAa1ESu1",
  "key23": "XiCxnA9VL968DvvuRydNzk2zake69irngJZDUJS4jomN7ujjoJrCxUvxvHZNg4hZLpJJzkWpCKVhzChd9Mr7GFa",
  "key24": "XiEPn7Ai7tBpjEpnprSm18iNd8ziozkuJf8o6i1oL8D1bU3kk5xJHSsMVTQXQVTieingZve6eSro7K6nWKBwtrb",
  "key25": "3HeM2eNab4B9mpthZ9Zztax44DnvkLngCxhgs76B65dRpLnhLxM4c76bgvusxYbPmFTuWa8Lng2uymEdq7hK6VFZ",
  "key26": "xwrXdMqyuwCTGm6BzXw9ip7WmsJ9KaZ4U3v1K5GDru5NWHnYmXKqMQB8DKs3VssVamBapXsbEC4q8TsretaqWGv",
  "key27": "66ZgWHZXUbidvnjGGBAF4xQDyPiJKsGR6trJQ8JeuNTqcho17RALAvQsAQ3jQ5E9aAixLnsfdoxVKbrbV6C6rfku",
  "key28": "345bfeiRmYyyWVtbuiF9vbSQTtAUxXcNXP9bdHkqwnVBkoNnnv1DBhc5W3EDKLoqe5aZu2FmAx2MomUH9xBHxRG3",
  "key29": "5o3y7eyPdAfv6AfSuPWptNAXHKSk2zPMucZ3tdx1eVmtPdZNi4aLMq2ra8VuT8b6AuyLt8g8YB86b4B2SHK3v8zs",
  "key30": "4LLpwoUoxt6ndLJWnTXKNuhuupMp94UKgzUgtVKEUv4tMon7CudkLFPa21f9eJFWsRZXnEkB75zBycReaQBq8r38",
  "key31": "31CjeadVvBKU1VTGV8KK1yoJJUgV7AqmpefDJW4mipH2z1yBk3SkVD4MG4ReVXmUqz12BGnS8ozRwzoYAqFRk9yJ"
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
