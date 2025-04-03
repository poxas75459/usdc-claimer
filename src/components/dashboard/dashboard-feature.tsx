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
    "4KQxNhZQbDJyn9Hv9Mon6XXU5urgdk7P8mdNbncWsx9h43B9yrgR3Py7XKZyeEjKEip9sqAvXoNBCPq4A8NehWhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTQTvSNtqak3fFw8gMvoSWV2VQ8C5wcXCWhe8H3K6nzBoAWohGTSsAUGnhHkzMN7hk3FnvfjtZuq7wLBHebANbz",
  "key1": "2TyAHVL3xqqBQfj7ueR8mSSiakAdhE2YWc6wbYGrbJP424Wv27aQ1oZ31XJme1Qy5rjsYBz5U8pbJqSYJW5nBc1Z",
  "key2": "5rT1DvGcF1peFsYeWaR2FJC6PRVMSQpqwwr2yuih6zCqo9znSB6C7eAXwDXm1N6YVXSundH23a7zEL2JivKGcSgt",
  "key3": "57twYJq48JifawLnQQBb9oNfDSWR6BdFZibE18BVMtLXHB87D17gcTXCP2MHCmt3b15JoMvGBt73M3uuL2YxXoRh",
  "key4": "2s65CUKGJ8Q6wS6n1szjyKdzuoHRrW1DuXvkJHcKSRxtuDc4iVsT3feM5tpsnQZMyLKHt2SqmywzHTthVZZx5cYY",
  "key5": "4ddPVwiAzdbSQbPSXisWww2Qmodp7i68wjy6Nt8wkJTUReFacTMXyAv5QGzUG27Ejfsaj4toFrugYMLr5QK3Qptm",
  "key6": "ApQbie8oAdJKYmsFuKGQ4sU764yLKZaCZNMBjnzDoHQ1r7hSbTCXCzpccRebAwtaqmvVi2h57KeQsmvtGQdYJKU",
  "key7": "mKA2YtDrw4PPsY81CXBigyAaYYFkfthczZMCeMW1DxY9VAJUWEJu4MFhe5mJZYUuAk1cSGwhphYB9FpPYcXprTq",
  "key8": "3jMeiU9FXjPMSGAG2M4iDD6vC5vXRKywqMGsFbdgjCi5DNJ9scybUkTStCUfH44iRHeoPbRNRobyhzBPWy9r8nYn",
  "key9": "3mHd8R3c5FdwvYDTpXVi1f9WWSE1pgwDSRNr55K67VPA4rNMJJfqDLZQm8w7Ff64gVWSwYXXA9FsoDzpGUhwRpsw",
  "key10": "2tQijPYvbzCCu6xLjJ7z8NrmxMNxE6FnDN8bkXx3NgHGyG37p2yd4GFwpWv73v9oy1j9TNKfjpGcUow2NoMpJcC",
  "key11": "2i9KmLc2fLHnaYcfPK8pTy3Qqm2cVyYMfgN8SNaycjsVURKFtdxjcvySArAtGqeHhu17qU3GMiKpPZBGyWdNpBPY",
  "key12": "5ptCJqZABvhcp6t8fWkd9yokoQTDFo4ZUG74yTcNfNyWz8XYcr7qW2t6Q4vN7LLPHunyACjLjQAmmAhfhvqs2Nkm",
  "key13": "5WdMATC1RVKw6fYhC9KbfMBrKohdBBWoWsQUubfgBiCYkrQSmSC2Xn3EGqALuH1Vm674rtRkQ4VGPUL8ybNsM7e7",
  "key14": "xbxdk3MbmyhhieeVRoNha6nx5t8A2YmsAGd4mjvhs9cEVWoZ5LwqUBUV7aZha5SJ9mYPRP989GE7WRuk4Jru6ui",
  "key15": "4Fa3mYTUvoUNpdLxiBERAfbEDBHhv8Wuyhgh3N1QeVWWKMk7Z1sFD3w3V4KyrndqYGKfAc3Z42XmpgMnhistZ1dT",
  "key16": "2vsQGPpNAFX4ab4r4GmYyurS4niji2Th3mVDReBJt5onL3NrrN2wA95GF7yE8RHXsFeCoXbGZNoHRVkgeM1X8zaR",
  "key17": "5wpw6gQFuAjFUj8nMxMKDPt27CwWJahtHV7wnVbqsnt5vW73V6BLvcwJ2CFezEiCPJ2a55SuJRDZdDFVAFGDQHXt",
  "key18": "2nD9qux22tfrH699UVGhNDk9u445oyXCsmGtck3xaaceBQE9z1kBYstvBm84hR2JHuLgLtQHa73PLD2hQehcntUK",
  "key19": "564Un1AykgfLWXkRqBL8eti4FpTWqh9ZWzbp3mYtqrPuhgC1zFReEphfDXxccDmWmeyYBnRcJn9AWQzNheosMZ3M",
  "key20": "5YvwwzAVaWSY4smwYEbTiJe3oKYbDN18fe5DRfvoXFX3QnXX9ds821YEoNmWXcfWGhSBmR5ANESkj1UmAZVyrc6G",
  "key21": "2xFSfjkJzoM2XpDvtYVNEx8aVaZmuA1NRQvfuuToHVg9KdU7FYgVDDGZSBcWXjgEsPqn6GU5Bt63GSBu2AYiSmC4",
  "key22": "3C42tErFP9SLojB31FAPSdux2kpBjuFVWfJkbcJBoXV9ecyQAurn8FaTqpkuvTrL56xNmZZEnnVYjm3zfmfSycwf",
  "key23": "4mcu7LRwUdFbW24MRP5Zgwk9bwmv4QPeyCCGjqV2Bpdv2c8CPkP8VfhREH3EhM3DqSYLQd7mRnkKQwKcVswZcEbM",
  "key24": "2iZMYsPhz2dSf5AqooA4D3FfVTrHLh42RGHmVv5QiH11KMYNxfWJUH8f9w3RXnCB1UELUSGx8S9X9HdBdkxPSbUa",
  "key25": "qnAcEvgpKPC76uUuW6rZzCykdWRXomQLLEzhx6EdqDTV63vXoLkByPkvfSe5hi9Y4KtZZ6VwLgXprkg7b6zvUMr",
  "key26": "2uwHcjSFw1fHye8ZRP8tLohjihA78Te8S8bjdUuoMa2zx7D6KNwEacmmRdxuVUBt4NHBrQrCX4UpHKkjGPVDqy1Y",
  "key27": "qYMwr5zdrdJ6x1ppTLKaRDBqRW7hNhGsWJVCcrzJwLFUdS6SDXjuqxR7yJ6SP7BfuDWr1pQwF2F8WLfsvLYZobQ",
  "key28": "36ZAK5hjDnJAQbeT9PKZVNVa9xu2Bp9JN5inJwei3fnPTBskwjMffXyAVtUWp3iGTtT6Bq9S7rNRjuiWRFWwiXLZ"
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
