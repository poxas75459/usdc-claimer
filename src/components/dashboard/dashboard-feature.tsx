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
    "2pQrpmTiQJG1xv1m1vJZHMrfmbLzTwQLmXuXF2WzMruaHoHcSxSVBwrqsQYaKXPWW5ks8EsEXoR1dyi9sj4zQ4U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qwDwBtmNK6AyoAMrGZUA8L5zaaxLLLW7x5rFQ5xFjcKaVbo5MsX7GCQWGuQTv32pngp9a67zjoRRbCbX1Tng3G",
  "key1": "2yHmxWGSqsaesf5NW8Q64KVgodUPDxXnxhqrByrpkV5FgaGoskbT58hwrXgq6Ya2r7fLy1pcrKBVGgLt8KmXS8pa",
  "key2": "5oRmdReUZfiKbdtJfXnoP5vi5XDwSdtQY8njkHZBBetxkkVdtKt3cVXWkN4h1b9oiTxByP9ndvnzBvrhDdggLtZK",
  "key3": "mcKnX9no6Drz6QVJ3UE5RtXC6KHuiohQCgV3uVSJEkzcvY4NnxXuHvKjrUGGCc5Xxv3MMC3yNECp6Xy9dNG8DgE",
  "key4": "5aU6AnEAVU5eEiP33oxmDWFT8HzgDGUajFa965R5hMt7pAANEzuyz2fJyfN3E7kda4ZkrpgusMU8kH65QkTyogPu",
  "key5": "4KwksNznxd5ErdYJiPe9DeBodhW31i4oWkjK1kTqTTPEsqQoarFCnjbTgEj64sRHA132cpb56iswMCUc5DxQ6ufz",
  "key6": "3qNSnPQqXwBuzF9opRmPXfhQsP4ptjQBHQJ1FRcZ6AT2R5GJPRD5bHkQoqAWajjhGhETPd2tNWmV37tDgpR6sGje",
  "key7": "mJ5HV55LqH1LwaHNwBUTPfQNZBjFGHWmoj1763c2AuCoDZuXCwV2VJCF93PkZmLC6ZYcyR5Kt8bi3sr5s2AuLbx",
  "key8": "7unPZ98CefUs6uVeeFcjVR8RAPnDR8McbdpyC1pGiSxKQLUJ8d5hfqVVijy6yunsS2YZCiqe3jjsCH4XM47ePU1",
  "key9": "PodBpi5QFF1p7Jt3BRoisCBsgvCqTXKVZbZefXQ7QUCyUGQvfcAHDxQ5pshoc7Lng2bTmXzjkg9Fp3MYgog68DR",
  "key10": "2XiN5CoeHE9gkWEuQY3pf8gRqM54vPjzQhzXEmNPD2XoDvCr3reyZ4ekY2FdkcT7yZeWkAGL7U9cfWaL7HhZZanV",
  "key11": "dPaceDpV9Wuku71QUExMbsKy5XDympsp2ZAtaR6Rx5j9YeZQunfng9sj9RAehrFQTE2tyiN39yeqxqQFfJLLKQF",
  "key12": "2QoPr1Nq9rqc7e5XbAQSXPpWjn8JrXNthVDBSm8ZdBmEN2ZKAkAgcAhzCoK89v4MW5HEQqZZYdpqBNABYJG7ak3E",
  "key13": "wbZV51RPseE69vMuXPzqFinowyTUagZtUiHMBHB9gBKuDdjiQJL3yBWUeecHWGTjMtJoVCE5ChZ2QyHFHDu7fMp",
  "key14": "5eawAPTB6b52vL8EfHCsWrLMobhaHssEq1tkth5aEhJirZQCPw2oot6RAUyTQ5auFBuRX8H5AVZ4GScdJX4pY3KN",
  "key15": "33qHyk2Lited5cP1Ln8WBGXiFevtYfB62aAyXWV8VkPEYftMgaDeYhpKNpMgiw79yLRAacXYTVYHcB7XL4Nof7uv",
  "key16": "2vUGZb2JvK224FdKK9fAzbAkzHeum8zECLS9MoYNHMyd4bX2Mk6327qnR485a6E2rG8MdrksjJHTwjvVqgDdXJhh",
  "key17": "yY2DEH96dac72bVrVWHn2pGwefcoe9XmVenkzSN4bNgCVX1ZzqJBbvvxBjCvLf6doao1kYd5kSVmUqVQKmCthWr",
  "key18": "mmYk7ocit47Yxaz4UGqotaLsjJKjTAvsVsfY13K7fpREQSKgJsFbF8en9pxATwASJon3M9TnneHWC6hbkxucwU1",
  "key19": "SWoVrAa1xZQwYnvdUyMvzPH5dkfqjtdNojtgW1BK85vTGxxFgZKrm3DVqw2CyHTrkLbCpEviz32Em7TkYnGu4pe",
  "key20": "47FSBUNugRUkhThgt6nfhN3SkSDaBZtbpbW5FzCYdGokNkPACgcmYcDTDn99PXyTkq3mYPTt7pTJYNHH6ivKSjws",
  "key21": "5NMtgf5GFq7UxtyWvbF8qJLi3dncBQr9iTtPUY3kc74pYkcakCFvRAetYLo5HNwhWTHoLg1TfvSFkmCrY6ptGMaw",
  "key22": "5DJky3VN9rQr8YWgXkD34xKFoywSne5tiS4ux5KwkJUoxouTN26uDRnpj4AWMAHkRQPHPLgZR7riGCtZYeFnvLKa",
  "key23": "QgpnYx9BTpD51ZGxrLkYByVLfwWtVhsjN9x57wp2tgbddcemX3q1aGsJ4TQ2dkc6czFNXUfKaLiJdBC5sr57GL6",
  "key24": "3cUFR5p9o8hvDCVFEya86xUdUFjx14fmkkG1NyBcYM5ymfGdiJYiAdR97ZPzRGuyaAQxjVV4feaZA39zV3dQJYS3",
  "key25": "4meAJ1gLEHUk2wNh8cDXVxXMpSFuLXeLUzPRo7bzneDjvj339YxdRuJCzmatgYqogi8QyqieegJvf4iV7FHjddmJ"
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
