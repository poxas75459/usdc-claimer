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
    "4EtGvffi2W3Gfg9RToJfEq3pUAh1Hg6UbnJR61UEyMRohX8dvMhgWbgq9XtVxbCfCmfLBzPsLPjZiFiz6kcAhAPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkML5Tsk4y51kzaMsNRDZpSjuSyE7L88xWxh3iwVhtc1rsAhcmfipnEY5MYMjtWSomkCEpG9rpPXwckyAgLbzZM",
  "key1": "271Jy5Mp5tJHm8Gv5vZ1dpeEBJacZcwL3RJac9Bc4xu9oZ1abWcCewYkQ3psZ3zJV4D2iipLvgZLgn839tveeABB",
  "key2": "mBnKZw2s5emDmB4t9TJ7K9fgnWSRwvmHvdagpQ8ZExbd3ucpmbcqQXCueG73RpwVkmhCZhkxSnRjDbb1ZBw8KFK",
  "key3": "5pNiRbLRXfFFmCXg5Fv3nMih6HiSQP3y8WbxB6GhgjzYXg5WfKk62H46MUk5GzyjN15wmGkhp2tsdGirsuQpaZ7b",
  "key4": "5UKEtJfymvLLYmG186cLb9nqsETcQm4Am5u7nYmkdFdhzdAHMs2NTyPhvUBqpCSVNk2tFLis4pmLRGmVf4S23QpT",
  "key5": "2H8sDYXVHFrWDyQZd31f4AJmPYK99AShVeAKfe4QkrkVP3wkCG4YtSu9RdVA32qnoLyy7CpbXK2c1snRpdR1eX34",
  "key6": "3663Vhpww1eKf1qLswQCDxyZCm7DmASDRZN93JL2pjk9WnsLRxBvn1Xwffuy61eTwWL67F9csdL8vK5WPSTdTCPj",
  "key7": "67W5QwZNd5C5Pj9m1bzGWdGPNDwng4z1giTKJpd7gF2CDPovqudZF4QKaxKQ7nL3b1rHnEBeHdXnVmjHXEAgKv3N",
  "key8": "3Nr6wWdiivqJq734dwaFmX2JFT9SKqfnGkpFD1MG6pYxRAMKpTDd9NGqbvhb1bzgEzExGuR9daB62kbG5fujiqnk",
  "key9": "5h7RDpJw458LkHqVaYfLZo64v1XEfQTVDzbGLKuKWH3rtTJEqGoVZcLEtsd7MEVBJKu5ry27U29SNW3CANiqauUP",
  "key10": "59HPcuiN9TggEkj5YqWAawFi7Y2fwmQjL1hBF8oXovZkj2GYSxAvSjrS2NSTPVHGwUdNiB5whpjszXqFXa37xUYM",
  "key11": "1YRRsPTQRR4jVEUAkDa3drvK4wpeYDzwwuY86AgAP5VgNgtGYzBFop5VrJEbp6oLie8rRYrGdH9N9xBtgKha4Ne",
  "key12": "tHqC7wKUeNTMoEemSzMrC9pq3CMaG2jCPG1BTeYR8zNjxxjjV4B5o6NeQkChCSnfV1DphU4YhQFiQ6ovbN2gHLD",
  "key13": "1zJyU8wLp5BaC6qG7Zh2vL4uaZzsphwAk81EQ9F1BiadXqhpmemMZrUvDr9gZy8843ZAwmiJqLa5GY8LdoftBpg",
  "key14": "2iDtwA1bCprG5rmsJhYfrYFrHTgmGJh3peoDZcY8V97sNbEWc8ToPry3MbJKWaoDJHZK7XSwfnDrxKficrErbucg",
  "key15": "4E5XnfsZCwLFESqNgBjnmogH8bG3asQ32hD2uxx9gdrV4Hnfe2Gau6R82NebkNjj4EsE1sVLyApvSsttYrBPHkwU",
  "key16": "35vuvU5ZanV4pEewteEm1ynA6oAASAArry2VzQxPpN5Qd7rA3BkRKHd2VaZSo3eTGU1NuVBqyvgcji7QrDkBS3b2",
  "key17": "3524SLNfgeWDYLwSuY7yJXLf1ku8svFQJ3Jm17koAaR742X1YForUUPFBfG7T6ejjCX3VQtuyeeUYuAoQ8MJj9fw",
  "key18": "UDNHQYTQXbSMJwwUCQUv3dCUoADKhg2HoSBqVT3mPFR15bVYRDNsawdrm1G5eYXc59wNh2RyWUAihGhsBLpshzt",
  "key19": "CrwxB8AWw1XbBLjSsBpNvvRxKoriSgWgTCGTk7mxpJ9fJtpnou95mt8bkx3rYHopEWYrWeUoCsLf8WpAGH373Vf",
  "key20": "4YFGXeRjQY2y49FGCBMB5pg3w8HuWNrVNPWpWQJkbgLTNFBydGqFRomJpHaVLsQVeShtnmZjKmjignCoTtFqDFhR",
  "key21": "n8iw3MmPfAVjYyT3PtWCERHm2RfMNivHrXm3UoAgBcoX1LJBPn7FD8FdMAniQcv9GwxwM9DHgtfKSAXCj9U7nQG",
  "key22": "4qXPKD5kPkBTap4a9AEJeU29NHtrKz5QdsbY2hcTRTenn9mooWXY3LRWwpwwTMYTEEWPCTkCcduPYsuDT5ApwRuP",
  "key23": "2ryBTe563M3TMixK7oLqZWNYBQ86P4xZFaEMZ6aaYYvfm3XydeU15DEscJALdaKGsdxVBoJEedhxCKLFsGsDBFRF",
  "key24": "3AdfamkLenh75pviQx3Hm9o5H3aFv9J2JYxs57daE9xjQYKxX61BVRdKDaqUaMQ7p25Xn5Spqkz6TeRhHkhM8Czb",
  "key25": "fJRrEhTPmq24owrY7yUcuyjhkqUt6U2H14wba7KiEa5i31DXoPUTFvYMRysLk4u6S9bYidtnpQCbKRGmHwC2f9B",
  "key26": "3JhvcWA6z3dLgHpBWLUwqSMBYsLzTfFa2KbFqzJTPEKs5EM6C2CAzQEf8XoKNAxGsiKjgdxp4TK9avb399bLxfPt"
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
