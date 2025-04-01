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
    "eZRPUsaK2CX9k8uPqQVcPxFrryDbiPKAtKkG9qDkmCuVBCoAmaNu9BPSNkgopQESqNrbkWR6UdziaVknYmbVuUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWB6LkJoAzG72PXrMyB9C8iCSo3ytjST8L2vw8D4QUBH1suWeRafqYj4JD9Hzr4Ynye2D3h6T5UacfAvnUoA8Q6",
  "key1": "4DdenYiGUUCyyK3JdYxKEiJdgEqjSTaGKVbGMTqLk6kFHEvFmofn3s65rw2Jy7ikwRgaZWiPXWFqDwf8TcV1z2Db",
  "key2": "4pko94S2qnSpik8Cixss5b38fovSWSM4bw5MhvTDVBRrWk77gKdtFgXNfgVVUVC5FPnmDXKh35N8veD2JdFx7p85",
  "key3": "3nkmZi7ZNnsg85tGZdQc1Npfcn3w9CHrZEZ3Wr2M4o6sCN1oXfFypqRFu6CJ45g8Z4PFXwvRukakvHk8wS9BH44M",
  "key4": "65nh2V4ERymhyni9ZpZn9v4UQDU5GKRYLdNU2CPDB7DzzHZ7zDU7b8EzagitMrCTezhs5yjW8YTyHggi8ZVJ2wxk",
  "key5": "THM7MJARvGVE7W68CjZtEmKfywjx7WSht2J2gKh4vqajb8ecmZXJTquPqtZxc5NRYPf7WypmqZo42fKFHJXcxMA",
  "key6": "pdPQY4rDVUCTRcRBp94jymeMug8kah16MAEYdkkWfmWkos8m5dniFrH3AxXcf1BSHtmzrKyT8sEXfsR5HwH94ac",
  "key7": "3pG42CjZEgiApMEGf4oWUxErYQyfTgjMFPZUVJSYgQ2tLuR6HY3hJJ39XrrDYvLzyAq4qZS81R7Cvb2EFJbAVNsj",
  "key8": "2mzzfWt7jEZgbfL6xERywXFVXQU4gdxMDWFwxrQB8ZAfJ7sMJ1i5STmaP7yUiPDtmWzmewiNrPtvz4hqdxq8wdZ1",
  "key9": "3MEe1eEjbmW8A5Gh82AR5494PCbxMZ1xTHCV7B8cENH7rWjKqKxdhdFFcxhqHG2WzQH3tpJ5Bhddzs5FRRZG8woN",
  "key10": "5HAtJ5K75vBip98Q9LCKKqursv8nV7WQWJW9tmPLnj4CgsqYnpdBJMYC1mLSxw2DLCjhXDJY1bzDQ7KGftXWHW2u",
  "key11": "3NQvydEYi5zXxzEfkNi5Ky5cp2R3fxHihYqgo8LM5RmEfnuMpge2e3HNyVvzW5MxedFdmRr6ByFp2i2nFja8apCo",
  "key12": "3FrmDUf9HSfh2F6EXzApHMj8zKKBcM5YTRKRVq6dcLHwWy1jTpSwzFSckC3QZyUh9vamUxpJtQwEzTujHjfVfZQV",
  "key13": "5XknzPu1uWsUVHwbc54Fv52ymw8qQgRobXNFUjCpmSfFRTDLgDJXtf5inheKEXhMWMpHi9Ux77A1NoHHht8NQJdZ",
  "key14": "kszpCaabX1ccP74xY8pq93rjni2V9Bhd9cAvG3dXUPfHrBL441DvPjyJgfzmzji3h9sRiCvfsrQ5L83yHLdk1k7",
  "key15": "8LYN8LeLB2pYKCSiePwhTpqJuhj5jbGCBD9fWDfNEnXhFPvYj16yVkGddyUJh658FZcTC7exj9ktRjFCNS67a1w",
  "key16": "4rjKqzfBoGwSCftBYUrHAJnceo8wXchWHPcK6M2L4yA4fvsgrwxCuKMKT9hX2HzKPRSMmboGBopmZr77QR7UvquX",
  "key17": "5mujmywtEFLRsVVJbGwcE2r1gZB4HVp9gNDKi7Khp9mZqs6JMRTCy9AcbqttUXABEM5ztN5DvGp9BZw4AJzhRgqR",
  "key18": "MZ8d2KLjY1gWetPudLWFLctNmrv7ikV5Mt2d6He5qFpyronKaEHRYXHR5N5wy3j2LeN8mCubnm31vtL1UX3q2FA",
  "key19": "4DFptCPPE7uzdFSg6A2Zzrg4ayLnR3VpVWU9ZRqbLZQjhhrDBJVKjq9yvroS9BrxKRGMniqrdQf4KMRAkMsgu7jM",
  "key20": "3tdy12ypBkQDiVesbTwLNrkDnzogsYNFGi3gfdNewUZtAQETUNoX5Br6Kzco2zQ46sQ4BuntJj8qfQSoeiu9ouzh",
  "key21": "2QdLHJX5zKxcVjMsAmA1iJdKDq2W9jzch9TGXx5d35988TiBnLd18yCeetwCDw9dnKdE6XBjnoa9oZJgLuux831M",
  "key22": "4ayyMERWyVzrgAqsnFfHiznLQse1XZTzmS1EuwRh3zW8aSiVHNWugEopcssmDx4R1eG2eu2mYoM6YFzTtRsfsV7G",
  "key23": "2WEqWenjWK1iFwCxxozMu1ep7kY3oWvjBy4VF9iXJvgecxqoUk3cDZtYHh1yUwHwvXxtkW2tyiaRMezd3ci6k48z",
  "key24": "3rZ2NZGjVEw7kvi8Rv1ZsrbPuQJBeGxeDK3mvU6gz3hP1whAN1Rb86CFghhtf87qBKuwndXeukddRisjgWMcsDfd",
  "key25": "4SmxSq5HEWKx6iyv4JhUghp1U32dpZv7zE7eFmBHqEWcwrCSC7UjXL8UpkwtDb21MMuVj3kWXs5HtzM8z2zojrz2",
  "key26": "tXL6qZJ9UxDFdeMpPiKKFJg8KMsQYJk1HmheoLHF1mmzNvVxZm4YdhJ3PhD6Gvsr7wj14QsdMzBCqKLn8nEDMiB"
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
