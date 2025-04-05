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
    "5qt2znjcdBtSnGamGiExffGKY3TEoLnQEeZwDe9aZXgBHbXMpYxQzEJkgcJtZHL7TK4rz3YnSiyJU9ogEuDiWx5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYwgSznUHbdGydmpfcqb2sw6DGEV7i8oUgf4yMEk6CNnNLnsbkvGSju9MPZZ57VKqmC7tpcNNdbyqdaZKvnAtoc",
  "key1": "247dirKq8Z38s7xyJYHhBXcYqatBEh63HGdyU7grAoWtxTdguRTwg5o3EjowF8MRfJk9KEFP7H1rrHVPRXSftKFK",
  "key2": "2Z4BxjyjHoUkhxeDjSzcGGPDCVZFvGFvyNZ2X7sqgH8dzrvvx8e6eMfTNKfh1eo6XmXLxWtetFhKnnLsYiyBMi23",
  "key3": "zMg4664wMecjAmSU12iCP5VuTTRWUbmKsYqjjUxqXCYATa2A2RPuwdXvraCR22iw9A81mSLs5SfAEby2kpb9rdF",
  "key4": "2At2YjjuGFciYEGvVdKWEoVEvk3scBq8tNkceJxa3XQLNpZ38G7G1bbuPuDwtu3g6tEKfUjyXC4yxH9vzbUGYasJ",
  "key5": "DL3dkT4msa6wmArBHwKCSpt5rdkZLLPuWKQQW4k3SKgURV9pWr5x3sQf2PkpNRLKJWV4VVtV2ZuX3XT7ucFwLSP",
  "key6": "4LEoMjj625TFQbscnjYQpzYwroGBaD8SNNL9fkURx4CVP2SFrACe77vRZZuQ7Q3uyPfURhtMYsdiXS8xX7dCp7ya",
  "key7": "5JHG3vTa4agHWwf9VHWHsdi3DHDjdKT7J9Laq6WupJp82Gj3H7SpVa5dy1V1DUecDgmUoEN7GVAkXjE4DDFdJtgN",
  "key8": "4RzCuZF3yw6ovs9QA6hed1QtJ1mLNt1CxVTzPzqfGzfkzmBVMRyYaATEKzp3LFVGEr3JDsFNCDTLXAaLS3hV1ocg",
  "key9": "5w6dkvPAVPv4ZNRhXyct4WYAFKzezVXCtVVeGGvENm6pc7w3f71L8mZb4LkpGmWFsLiQfYR6xxaKJ442tQojxAeb",
  "key10": "3TxxNdzem7jPkrXNdk5KYzSP5Z223Awx24sQq7iMKUBxwgUXe5GAWUrWjb3oitEQaKG2SAaoTwRveNQsBVXmn7fU",
  "key11": "3V1kEvw3pGdE5EqacDgRvpRiaRm6ngaWuGihL5XQZjmQ6h7c2SRPeQ1iRJ4ZwdwVAqGZEByLgCJJgWhKyAHSsGYP",
  "key12": "TbkTrnnhn76AffdTpXcYFXsFFnKGkqSJVrwCUStnqZh3XJEe9EsTpQv3nZAheQdqoJ1q8EQLhQ25gEjrDML9mig",
  "key13": "5yXcZGdRa623Wb9uKDrZbLwCSeL9HQPD9iU4wXoj1aSkUTQMFwbbZYfSpjADa9z8gk2ZA1SKLLLs42Bza8nvWA4p",
  "key14": "3dq4uHXQ7hTXsgYmUXtDqSC4tCCSA7QV9BXSztcGbbQBUBtR9FQipngKLFFSLEvNJC8szFDgXrq7YC9K7wYXUGUU",
  "key15": "2wavyvKmTbUnXEf4yUWsEr4X8uqmiVNKzXmHuuvuddsLyk7UMjZR1UhsiQ4XhgWSgAWf3wm1uQECcMHBsbyFt6eW",
  "key16": "3e54PbMW76YCdYnqEFG76nBEzZje8MNH3LWGEXXhvryPJN7r2xhd8Y7aVsihKb2WGcvUeUww8aJfStnSkhb7qL97",
  "key17": "2tVaPUpmRGmkvhjAHdx3GjDE3TtvhXfr672tSLR4jWX6NNLBv7ospEbp7s2pJF4BUBXspa5FFZRq9hZie4Q1y3ao",
  "key18": "bb4JfbwgtCTMMtoLSrkZPzQckipZNwtLSAPxQxkR2PNiqfTz6R8AoyN93ygpVHd5dChbZcszQH7qJZqs5xsKC4K",
  "key19": "4MEAXaUxcv8LL533U1cZAPCNLSHKYwnTwoGLeZKYPC2cLK8sPNoz8huR18SDVqjQQEc2DaLF66HRQ3AYPSabmmkb",
  "key20": "4buDM8V1if1oRycte5B7fy8byq9dXAstYVTZPkazjUymTkKV5e6Be5MpVJUGCknNuY3HZUSy4reP6ZQ3eq57bLbg",
  "key21": "tpLvdBVkoU7bGEbThcYsEDULenyGfrtFR7PBvEvPJNGEbM2htwKEH5kvwT1fmsjQYVxatvcdc7r89jh3vLuy86n",
  "key22": "5pGKhJ4tbVNu6wdpArG88ohnhLsy3rcPPueZnEbTpE9mq517HeSbrMwsN7sKsmKKhesTg7as6NJYMzaaEeFDXGEE",
  "key23": "5P1bUFnazV6YefECzMBGGRHZiTLeWzMvBRbQFHikYGGxW9GgkrDn51fPLcfGHyh9em5HPP9mprEPn3nDGzSmh69p",
  "key24": "4bNjuz6w7YFBw6KfwmyC4N6C9yNcKuVVzpZ6FyoUaLCfNcAB14b43RST21Yw5Kyai3BKkUhMF8TCGjGiPQzPrT2i",
  "key25": "2cjWthDqEWtCGGQCv8LUGKELVM1GnMiuE1Ny2Ceh1d5c277byk3b9CZnfChqyREGYQMJjDiMUjgxwXtoeomSouzx"
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
