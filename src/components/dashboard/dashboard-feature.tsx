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
    "2JRutf4E65tZVdYrEH22VK2aRJmHQuUCdqQa24L6WmeFuCFLmpEC2QBQENCZUPJumYf49KvvhHLiVuAMde6EmFdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59oYD2x9KrTPyyLUP3y4nxyZpa6UhtfjYsyQg99CV6B1xSFHzaF7QFUDoN2KeRgCVGHHKihNkzqvQ3YbZSgTNtdi",
  "key1": "2BrEJCPnDimroLWJrwhjhonLdgBt1DQRUwzxz8QxAzDoJP9XMkvHyR1kMLc4dgS6LgaomhzJdiMp8nCSWCJNdLUb",
  "key2": "5wCdEmSB5MdQDAkyq3thsVpSyJgfZ5dcpKZAHL8XUwGWakHAuTPD82hd4mdvoP7rTYA9NxzDPi7SLbgMkx17uNxG",
  "key3": "3Bzn8FdQpBxa1zZtQqvKdPAdZrEWXWPzqKqyTVYCQXZvqZ4t1X8kyypNxmomchSS8UNbyNm6mpwoBj1CrErKPeWY",
  "key4": "4QacUx2KgjzUXYjEaDwWxJJ59DrCECnRUXWsBwtivx6M9TWHxTnRoj1VP4fcfxPYfvQMy16HtYNv1QexaBTvJG7w",
  "key5": "4rij62embDrVsZi2AcAipzUJf1nhcaw3HvVWKxaKbrgyJZ5NKLke6s2fc5LCiQmNjGLg8UAEf7uaHYUepzuhVRa1",
  "key6": "4y7zWpY1qzjocFKwVmA2Ha23ateVTdKiinBRehSAoqXQbCfsS8A1CKsCJuYNbf7FeA5FW5knyKXP8iSxJZCUg5bm",
  "key7": "FexVtmBGisrNdQbwtjVvNotZxMCrMBWxv4YehpCNduJb1MJT5v5LNVGrbYDAi76pyTkEwqsfnrBMYMrQmp1psmk",
  "key8": "3i5bvcCB4yeJnQuZQ9DQK1gqPiS1EezejZpFo2VZgSqRB4kwBQz5D9Xr9uooizm3xu8k45nJXWq46rXKxnqPVhB4",
  "key9": "34LNkQXux9Cqx8YAicL8d5gBACa42VpTxsqFC5npWNYFdnGYnE8DXxb7cg9jH3gP939iLmwKyv6i2hoa1PXEoaGR",
  "key10": "3iroh3zFWBZ9ERS56N1SsGFFRFyDtjUmm6g4mdAqnaFYYGxDR1mxptMRGd19BoC89kMoJjPUgHexE5eVjQcewU5v",
  "key11": "37918EQgZCzpgT4WWoemL5nuZutkRHyvUF3TQNLYkhBLn4qi4KzTDSB17puKx16QZQGidnzjwgFkALYNcv4LLMGP",
  "key12": "aqZEw2m3tq7XL7vnaigyHo8b6egjytfS8AucAQzDZEj6zJXVQ6kcqJePqpEtHdLkpDF575W8Ga17ktux8waT7Qg",
  "key13": "5x3R7PtvNQUNfyM7UPJkUkPcPAdNtsUopMR2Q8wRH9dGTpSKxDWscnCiH16bWZje43EuVWk33GGETiFGXTmyXY2Y",
  "key14": "34N1GsnoA1ijjTL2U3xFn7iddtDfNMHGiYcEnnozECZLQykEri6BePLYTKKVfjHnbXU19fpQnqxaWgV65UCg5kAB",
  "key15": "57yaU4XgLv66xRdfV1C7aKXsgZpm7nvwdyEvqbHp5nQFw3R5uEhoWZj5PND1P6Mrof5ur3YQvChu5Ev4x1eYn6o5",
  "key16": "2wsgttBX7WRFSxUE54V2bik4efht4tF7ppKfbMNfTccSUTcD2yJRaoFJHdrMag4ZSrtjK2MV8bECecBB9x7KVWaH",
  "key17": "52N4r5nawLd5NevQLiyRvdkVusWFVYj4zYBrqmWpkrusXToHzHW7YU5d7MHWY2okDhBxtU3aeN1mR9dF6CmJ3fm4",
  "key18": "3fCGthrU98LeEtpmagTaiygnb6kpi2S2W2Ji5k6qBPvrwX3L8LRQCrp5JQawWNbNkauSENqibQ8mKL3LqDmjnhcr",
  "key19": "4mjJv51hS3iowtaBgSxHSSCqKzZ3GLiu6X4L859X1HBiUdGFJi4N2vYqX1knkx9nPetYzQjSb86pdUhcXcUcxxsU",
  "key20": "bjEusWvHe4reW3xLuY4oQG7KaAnG3j2BqHm8o5yhJRfubRjTs9dCfPGWohw66pXq2ptLbMcrVAXW8V9vP8isw9U",
  "key21": "2qmhgkYS3Qp8iw8RKV9HdcsyKLmc4511KoShVGz9oU8B14f5UEZnxu9JHj2wFE7D7dEGHzfNbLa1rEudNSkYv4pk",
  "key22": "3awyjJxHj3PEzn5PcnxayjUHLYfjveBueAKGwQswiQvAGusRnvewK94Gha3xdWvcNzk9wdg6LKPsGyBwtd1AgWxg",
  "key23": "tEtxSsMVubaAihLM2FEP8C87Fh6w6hEUXR3TkwRe4douAKtX8vZ4iM9z7TZBbcwx5fdSR6muJaKpMvsHDMpRKEX",
  "key24": "2sTf8HDU5zzw6HXp5Z3mhParqcVpKxwW6dfjUV84koSWwG2XcYjD4z5kUZRvBGUjuWUR54uMGXr117FL3Hx9Gcii"
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
