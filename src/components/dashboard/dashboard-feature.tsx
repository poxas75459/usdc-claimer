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
    "3Yezd5CGNJMgJ4WSu4kJH3JBccpj4vXrZTGGPEEBHiEhQm1RpkoPLmYRuwX6GgGHN9Dnn8kxQ2dmJFAxQg9JZ1D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63o1MdxyxRmXKg7XpL3X65yYBatrF7iQTiKiBcXiDY4ryuaN8ST7WFgUgd38h2cQ4GnZpoggACH9enCvVm4n6rD5",
  "key1": "67dKeuouYsJWcwhBQwjJZM8YsFKftJVMjsxamRNvNpsQ2uVEZy1GUu5FnB9utz5D66ierWwb838ZBQYev1DH6wQ9",
  "key2": "4yfH9Db3S6rtXat9qWUn4AR9s9KcS7JRiMkUunQkHosE3KGAR4ZQqyMhPYQ8hskozqynuBciuHB76hBA1ZbEEqxk",
  "key3": "2iBCobFzW1pb5AEhNGhqrzUxAkwgAT9P6gi1nRBJB4UPmZfwdwk8bXFNdmK8B6553yc9Ryryjb4aHxCYNUswjUfJ",
  "key4": "3GZsvycHTAU584ABmrvvd3J5MbERgpXsMXHhbntgfDsruj7SZYJRDyKtCuBSuZtF8qs9rqz6NCSh5sAkJuo9QRcC",
  "key5": "2Tb4uRmJmUUYvbzz1DPccME8sdPBHdTfHL4z1Nxy3V4NLJxBRjjAB27TM4z6TpHxUWfKKutpdw2CPE92RP72E7TA",
  "key6": "2vXF4qswp36hH2vJQdAGZoQh9kNZFdxei2ZmYQfTvYMbGpFZDJSaqncvuenPC8xGsz3eF1tjCReDT4E4gE58UMU7",
  "key7": "4xzqh9LopXvPUcgZSiw2BF93PRhCZpbRk1JX2gWsXhu2YkpuE8L5hs8vbhYzStBmxKiWJ7SRocAqKqKbbp9WSBNE",
  "key8": "4NbSqGVNuYggMVzKXmXHNw7qGcz7584pwMpUuXPXHi2UNDvieS5AtLpAC2iKVrmd3E8eJDDmuAbeUNPZAaRaWLk5",
  "key9": "67Qvgnxmgn5dFtm7rZEbgZ7UYts2w8XytYHH7GxLZBbeTMQWyeT91oh1U2gHSZFC3pgWjdakGfhVCoKmbrhEkKuf",
  "key10": "NjxUZSB4WRyc1VgDc8JqSj67D3Jr8ZvnJCM2DhN8rGyXyb6e9d7HRbHfs2niWCdoECeZVWb27kkjLpkvQr7EPKX",
  "key11": "jQZiJsAH4pAczHf7Xi5uaqAYY3zga5kMCVJpdwadX7LuGsU6Xtp93oKmzsKxrpSQabNMVd1iVVrqcv7ZE8eFNah",
  "key12": "3DqZb2GSkKX5mqiYf8SnVno26RmyXZFcJxxYi7CngsWoGZ1eGtjh9LZ8JbUZtVA3kWpTwg6NnMUBX6S8rgFKkwv7",
  "key13": "5H1QpiNxe3BdAKxwA5YMeVuvgRvt28xrYtcv57tTx597v3PbVvFCmc6na5QfBKs32sdzPe3MVvHjWr8JnZvvEVx8",
  "key14": "56uJ1rvc4GTaJnDEofkYFY1eK1zSYnYmf2RPxFMXKo659vjArxG6EbMqbAaFMFxnAjRaw4xE5kxWa1qFxjV5PqsK",
  "key15": "5A1ZU4zUFxD523bX85FJAm6JBBZ213bhr52L1rJVVhAPKC8CQ3bcLU1N9vg37AMeEFDgr8wzSbKoCVUeMNZwbGBw",
  "key16": "5YzLhTMS3QAhnX5uVH5Z3bbzMa44ow399XvuV3tBAJJRE5jaDsaA7UuEb1omKj54hw1g4GFJ3gJW2zktiAgR2pMB",
  "key17": "439JnYd7Feau4rPzmS6p7qADJU2g7GVax1id2LWN35HHwj34N6exs7dFtpe2hx56wZFrn9sGRwqwcHQmirYk4wRH",
  "key18": "3ArEN8rCnrofSRixR4x8KHjoMSpZLjkc1YfEnGh5AhwXivAf5z48PszBQeVxPqstD5Ec4FBFuAnB8rjhTbq6LcFU",
  "key19": "QB2TjyiDX8Lho5ujH9vnD7SDtHD5ZjbUWZhhT5omzrwibQQcH3M6W9d9j8HsD3hk3phVKPsGhkkZTXsnfvefwzF",
  "key20": "2ofcephweReJbWENdwzbfdaVPyY3UNZw4Wdh4nD2buvomnzRSdwbzkuNq8n5U6aWsyazv8pTSygnYRcUT182upk8",
  "key21": "5D8jEA4RhZycwxQ3tzpTPqsWvCRriHsUuot6modDRmPUDDGjxmvDGbv4xRRhTzQhsDvgJFFcPAwFZ68G5knPDrdF",
  "key22": "43ZiwQFbztYzZb9pM7ZpovKv9GSQEvthDvzeANJ3sikHi5fa9pvRBFytFTe9RPSzBeK4H1hmk2UD1zuLajkciQh3",
  "key23": "62KY3V8ogtgA9PVyWUQ1eJ2PKRNeS5KVXzP8oYUAercTsm5AoZVsTYAob9ZpyZF5CLFh7fjHFoWzmQ5uU4eNjKzB",
  "key24": "4nEzE9KdWq76DLE9xNpXJJgCgcgwr8x1zACbApBnCzraBye8jqVt2hUvEypF2jUfeBJK2ciJ81J1XFdnPPBJFeS6",
  "key25": "2NDdkNt1QavaYR54Q6ZmBSuKiN5GrYy5pvUkVWUXNzB9JqeTME772p8Ck3fvofSKEQSzNHzYXPMJi3BUPEGFKe9i"
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
