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
    "3sQS87Ax5JFtUKdafR4aJR2o9AWf2ZVRGFYgSnctG9ywGCmJZnLgWPsy72ghXNZQAjpkNWCUHDyx4JCt3fZbbJNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzU3yuVyPUgXy3fQQQFKAzXkrbuLFDHGAqbgs44Muj9nVemxpcWATT2mqovwED2Pej1wvNV7QhzurkUg48XSrkV",
  "key1": "2zmbC8n2okNxCSCFmADjUXeLSmMmPJSBshvGoTKnDboAeg1BGsyAQQ4LMqycixAqbT2mivKDGyvoTDykScpn3Bj4",
  "key2": "4aVwYp9zbLNgD3p5epYDnTAAbbvcu3hrQFEgdqsepfRG5aaE91i47GB6TCDhvnQUiZVWmrKJB2ER8qCszVDcCjvA",
  "key3": "QvJZHvjCNVvbap369DCxZ9cEJeFMhQZJB29pKQSk9Z8EYbkjDu6wcSbcUCBbMKtHFYPBNKLqCX58NesyVjo9sK6",
  "key4": "Xj4EccYWattYg8LQfuyaGhpkHjZjVNajPpgm7hbnpLoaQsZ6ua8yCja9ewhJzsGysDfygvtXzVUTAVdf3hTTzJc",
  "key5": "5yjjCG1Fe2Gch2RMyNoKkdyzUrGQ7kNPMoKAHazX1FJ3PD4x2ndx9zhVJJnXsAZBCx1fiVufqYU6R9Rr5A6WkjwJ",
  "key6": "5XmzvRvQ9KnXtv2bkBjHva5iy2ftHsBvaQbhNbFdz55asYCufbzDww6j7mLvySKok1RYXRKZWWugsMkUqtmeXhbL",
  "key7": "4ToxFvxpLwfAZGhHKpeZC5YU9CFqZQi1AP4QkdYHQNFAkf5VoLubgSqsQve9GzoVTYDRT2PwNCrVtEKQQm2Fx9cn",
  "key8": "5kibbKpJnADnmyKx9QEzsXJNKBan8p9GbFUWi8JXgaGSBrZy2MNCEekU2x6kV1zP2oxekxnkv1eehYaoUf2NyxMr",
  "key9": "5rchHe7D5JdA4HUbSJCQt5v9CXX98iqUg9DxRA5SgfNcX6nh9NCriucABh7k3cF8a4QgrrWR8G8MeR2uciEKrjc",
  "key10": "4KHkzjDNBMpaZSm6Jys4Ghh7xCnVUYo4hQsipBP4aZHi4Veq63QYf9spQbtwx7cJdcmtiRT7qZKAXxbFujf7qupK",
  "key11": "4MNw9Ah25k8uygKnwB7SvBnZ9YJ9JiFGZHq7DbtYfPK6D1YiaorfP5j6HdHqxy1vLjk9zdgsdAv3L9GjYkwj38Db",
  "key12": "3oGzHSJhpPq8bk2sn1tV4TePJ2FuF1cy2tGiYp3xfPjXjyZe2g1Cb64Dnxqbnr3aGtCtc9LhTSMzd1Gxgpa8SCMx",
  "key13": "3BtMRdMEia2GDMxk8gQGqNUqX8mZcd9XDLjQFcCC7doAL9YkQVeX39q4FwuV6ENxqMEfifURk3tNA7qgjh8GUH2w",
  "key14": "47vjhgESErqAZDSsVAHQJRDLxCrPpf4evhwJWzB44DWBxvT19LCn6X7HPWRKB9fKKQuAX4S9uYeZq213ApcminJa",
  "key15": "GoELLrqSkmHtqRsvN7c2TTeCCqB81N66oGbr5CAiTNAyXnd2PXoBtU2QC3VVdLm4qM9zaY98Pi1WFNift6Gw6Z3",
  "key16": "3J6oWf6zDL3yFAr7LA3odU93sS7HHjzkisepSqZJHwABvMvzRvAy7TCqshxWY7wvcZuz58gmdfvnaEi99chQBDVk",
  "key17": "2jE3SCvUKbGKJTtU73cDeGuAmFG6iV4xDE3fa5vefMYSTWsBeA4NrRvAs55ViyqrkMh4VsGSf7WqpjxrJN3rt28h",
  "key18": "55A2ZZXSbY4CFLJFXddZ3ih5f3v7jhqs59cEHWrp6QA9VxfN5qHdWHPxRnXFp8TAyAv2N4fETiGuqA7tiakf2yHk",
  "key19": "4queN3jnEcbrAFeexBsLVrEguAoKYBwjS5udmRT4ddegopfMWrCcqRC3foYebCQTiZ1eQ4bTBust2uQjAxSSfnfN",
  "key20": "5mdXiuxwgdkFTptFKturCHmgCzuGF1Ua67hcUhJWP2wZSuZTFTJqoQjuhdwZkC1MWqxzsihGC7K9NDuDDMrKTdsA",
  "key21": "Y5hoBMBqojXLpXABWAZP8WbgATLTBkfN1dFeyzkHAfBF6DskYUZLf6nMoQJFux2zcMT1nQ5cy4rgXKTrsYxkxit",
  "key22": "2baEuSxCNT217gUvjRtgzmM3vGauiDHXdcRxUwMLeCUBUHrhAnnC3mwY9cb9qvhyJgn5uEpdWqMe32M27VfkYq6y",
  "key23": "3GJvBYNN9PWQPYoZJqhYKNFW7HQNYJu1794noRSdAKQaBj19J5x4mWvoPs1GsgVV4kACAwhBFyR1HyurPS33k8HB",
  "key24": "oR4dPkKy3FiJ1VpKCt84tdUiBWQEX4A2Crwovsy9S4wVcYSme8QWmNKSwXGhDh45RsbasVd7hgsbHCaQBsxatVa"
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
