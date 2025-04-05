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
    "5eeJth73eJGgN2JSCw1sBZsPDBzdCxoQQkAPjyX9NqVfoKTDCXi9NqeAr812Jt8WyziJqwqdzYseLNY94e2nKNjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcE9a5KVmJXyLqs9jcysbPYdnR5mMkXTc7n4jbzGBM9DdQJXYnGVaamzva5X86211LwJLiRQdT5z2aQAbLj4roB",
  "key1": "yC1CE4ru7TftXFcy5V69tTJeQReodvEeyBMxKQm4Uueob2TeGcLA1Jp9fQGJ5E78gDND1APEtGYtheBXX4pEG2w",
  "key2": "4C2b3E5qxzByDorM88js2hioaJwyxnunREPv3NRN669QrjvQFiJx2z3uAwEp32z8xdCoDQudyb7u3gYGSYjfbaqQ",
  "key3": "eooozAKobATveUHnvb4FZxcWYKXMnWDoGYFczw63LY632uCeFe5RyL8D6WufykW6tT81kofykN6wnyvhjQNhA54",
  "key4": "329Y6x5vEVLTsLjjnR4BGBYKi9JSDDwKBA49bifBkFd7GFPyTNwhj5gFSda39qNKGBjGqmcZAsbNXNkP5Hqadeeo",
  "key5": "3a3RHWGg88nEdVB5dZDLpHyjEXNKAPpXG4JWnLJ6jcyW3P9nu3r5w2xcWmS35ujTmJtHhpoA3WrheBjebbpPYKa1",
  "key6": "J9ZCBKPHmLdCD6J3pVYf3etZRFcPKtJ7hdkWTYZU8GT9FQVZzexuuAQuNZAGisgZ4xySKDAChHmQYMrpnE4CqbD",
  "key7": "43M2nx83pUyZXEjxgpyCTh32qj1icckgRyQXLi4kk4awJqE6roqHMbcaLmDnMPTd6q9NGKqbKLdLyhZ9CeaSdRZi",
  "key8": "5uvmL642ihzyJkKijaMDYGdG5bDV2JjiRjie47zXk9JurNZfk7N8CyQxzyBUvUYz7KgGtemzZmVyVScEcPVyTF7W",
  "key9": "3CG3pbnpvDQh2pQxaATjRzKFDhEj5YqAuMwF1DqNohgrJwdT3A7DigEfWtBz1fff6veLHt79YEmNCq8TYvE9Xwr4",
  "key10": "4wbj2VX2R1wwkDd5c686ShD9FaULU186qFGvVSHRa2e31xHiEB34H9Yn3zXcKcKh7Q6JCwocbzob5TCdwEFPnRV2",
  "key11": "2JpRVQXmbThr6E8FvYsttucpR4BQ5md3NvPqr17gbZbfTFDdWhTQceg6Jo9x8qr9sE1AJZJCSocYpJiCoLsLDH4z",
  "key12": "2PZ6jVgdqdHVUdVBNDGGes2bvxW5A8j1E3abR5NWkutpbjH1uYu8SewBYaNaMxCo7WMU6HGy1e6A7mYGXtYGbk9M",
  "key13": "3qenPyygMJEDmPoaeqwc7twNPdir2zG4LaBenhkNZPBxjhQraTUiLkmLUdhqYv9juC2nvrzwms6TnxBbsbxBFkZt",
  "key14": "66EsLUDySgTKfGRDFeCjCHYht4ywjNZ5xNTrRMRUAAaeAD4vwoW4M5b7UvuxcmiYfM3dcTAzQCG2pEcVT1ei341K",
  "key15": "3zSiwux57KhZBFyk5v1dxi1mKJeCMBtuLbYBQwMdSui6Xb2J3EWfz6S6Eg9jpWMtow7y5Lo3jMoBgJDzbfoHx8x1",
  "key16": "55661LZKhXjf878X4pDALygb5k1ruf4Z4nra7JKkiDWvghAWU9eDg8Sg32ayS6ZTQZeq9h3JGVUPyeQ6YKeZwqPu",
  "key17": "127xhPSb1SrAToczjJc3g1NMzBTt779pH87kVhH8KHQd182wmqjv9PCXDHUwbXJccu76aZ7AH6XttUjLveFQuCLv",
  "key18": "47yCzqVwgvLTj8rnxH4pggrZ7PnrkVfe8NL6YzvE25WzZNo3u8xWgR1r3bkpuMf9tWvTM4CvZdV4RdSvodNJwXRC",
  "key19": "5DBe6mELoV6T84LunqstNeRB4UZwiGwrzifivZGdbLpC124qGkERdoEy3tTxUxmRBkdvwRv9d7ucv8gFv4tKeoaH",
  "key20": "3tkbn4cgKSbnVozcsscaVzJRtXKQfTSVQ7sTaUF6JZQwzj4hPQvFa5HYFdWVqHsqKpzmJ8F942KNnYNhkyuqaxJ4",
  "key21": "RKAakSHr1G9sR5o5XxQq52ozKidFwee1xMpEQpBpk78F9T7nzWJy7YX62nLNGHTdVRHKomQHy2k4VYC7Ji1fmGr",
  "key22": "2YbQnYbyKWEdcGjNNwVw6Kamc8QVrQ5hxdnfQYomWcaoSBjmcBWNag9aTCu9c558uk87QunzzWDGUN8QQusH5Gx5",
  "key23": "55azfgM15sJ6gjQ44DxN56jVRCuygkKKWXtWQxoX9C8gPLSmtjh9X42kCo7uySbuMhiCDqhSP2dFqVaMjYr7pJZM",
  "key24": "GBa59sJ9fDe3Kb9yhnHqA2B7jhuQjHjT3wAK5xVTXFds6Hvzj7CDUHfhpyi7j7ioSZKrNHZoquekga2DSxYJZiz",
  "key25": "4xkGY543Nhan9Y6fn44ucSebsokv5gdWdGMCdnnUMtFxer7gD4aBar8nSHsmUUTb8zFkYL9sP8gkGaUD8g8KrzUS",
  "key26": "5sepanDCGiiJ4bAnNSe81ZSSbwgfAonV6THgBpaGTr5miPZg6mmTDPet8ZNinwP4pYF26mzy1GKSDufuDo2dUFGC",
  "key27": "5t1kMfWdG8Ub8w5peMXE61vAnaEJYXaese2cJQXffKzcPEFNPVUtpnZXbnTcjyuyAMaLT9RmVPVaJTbAskPjDW91"
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
