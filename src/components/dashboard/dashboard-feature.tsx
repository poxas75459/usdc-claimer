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
    "9oPm4PacSN9ELURbtP8Tcxo8dvhd9yc9CRCBo1eD1fQSpWTZcVwhu9jbV8QdFQg64rHDtFJRbPSqnamQorbRg2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVn7yeH1uEhGuwkHMY8svscjveB6KUCQX85PiQpX9WVNZnh1QAPkdPPFhzMv5D4acqiNcADmEih1DtthrNVGDYg",
  "key1": "4rK3CV6uaiDv3wxRdU13WCQXsJkbmiti51NdDDNcKzegHb8aMF8wYwaTfHgsoFCQp3WeMFPdzhA97UE3Pamf5J3M",
  "key2": "4ekXXzhdZ6y9pKqVRLSgf712KeED8vPn3pyzLqdHr96pzMJciSrMZrYYYntGLaApB8oxZLg9HVTwyFFrYum6c868",
  "key3": "2gPBdf42e5jbVbBz54dUWLEARrsWLoA4Wt61bavzbBwxnC6EhS1fshteTMEGd3PkM2FowK1GoU8z4kwdbSLkMg1M",
  "key4": "61dJWtbjKp9FZ53nZptYd2gfWwC1Q3D6oHTfT1QN8CBsUxymXms7PFrL8ycFnVfGeTbuRHBnGLRXNFrvPAJkVbkc",
  "key5": "5ChDcsFYuDWnmfD6eVz3fkyfd5JViDrchmU93uxQdUakvukM8hNdwRjCw7G4QAYmGLTxhjfNFwrRVG2DZaVheo8S",
  "key6": "4Jgs7zPWXFcFpFR8GJWfoV7YdKua3Yu3ZsrxWgagiQXDo6NoiEFsMtzPyrVbyDoWpD8a9ANorX4sX4iQE9F4LY8H",
  "key7": "2xG8fMCQKwbAtnxPuWZ233MAVamoRqqtYEjzg2yqHWyg3gH1onN6CPRBFLLgcb8Uh2aUoABd6Gw5FGekTX2p3mvF",
  "key8": "gXg5TUJ7DRn7odhRKF4FM49fKY8x77dzug6VxehdhkMYFAgsXauE6qVRMaYy4rk5JubG73K32tpP1zARdESA1hz",
  "key9": "zrZxehGugVEn21QipHs7GCn4tej5u6CsJvd1YPaECVwezyqXDAvLPGQxcwvsLM9AN16foXwmBDoMHjwMsX4jV28",
  "key10": "4KuB8eeXCGYhTDZuaM1BkDiTvesPbwqzdhbA4U7r7ykpZpPU7WRLuUutnrXahVYzFVKsZ8uFschbeJZbMnaxiFyf",
  "key11": "5Q8y4aV54SZbsRnGRktpXzSKYNCs3P7bxaXR6y74bvXip1mkoGYDUfx7GBGn5FXY3t9aF5TUzqVDxvkrDQxEBWaQ",
  "key12": "izhcZT5DTnfNF8ojSsp1Qty57p4ArMyXRJJRGtDYcR3QSBnPpavzoNDCjS8PaghbA2J8y56SPfQ6qpp8cYwTDoW",
  "key13": "5ZEY66RRStr2SR8cE9K2jPkS4aWbcnbn9Pq4VzwR1GFsf8NaCzVuXkfjYP8jEMhUYtC2esh7XA12eJ7Jqwj4G3zc",
  "key14": "5DZ9n4XjNoZsQMBRQB3LC6wBNL2ybFQH8QAiEerj424Bh45grpJpEJCt92TyqycfqEQUtHcED3YkNDXi8c4wmU5q",
  "key15": "3aK57LUvVJJ8JYi4gp7zbfYCNywms4GCXJRRGfnNWv9BZ59FSpY5LxU4zD8xWEMMf5Kd32ij7Cs5bkf58cakVZPe",
  "key16": "33KNtsWiqNMx4ETR2biaFdiVyZGtzxTijxPxB7xBhcKpFT4NAGuAedz6Qvzvz1GEjFH4j4rFR6Z3NFQFTbykxF1g",
  "key17": "3t7qDZXkYcAjtXDttM7muceSkXEEnf8E98Muc8ECX8vfaWYxfQsT6zwZxA7FTxDRjANP1uW71nHyWUC9m4Qyhib2",
  "key18": "4MVHSg2hPTaHCZ39A9DuZyxvLVh5CUUZhvP79fumjocPe6VJPbKkgSckpVcJrF9AH3PdVTQaVoLLHihhSfGPhNiw",
  "key19": "5AF4rRn1GYaW74p7uWHpjk6jVQftxAEMF8BLehLaZhku88zrGtvCebub9ou5MomXjMLZJ2PyTTz4p8QhJv7Rwg8F",
  "key20": "2NbS62662Ew9CWPR7zf522cwJqFpdvKQLtXqwf6dzVw8mD8X4v2vfAq9FjJ2Q1ZkAL8nLzv7ds1M7kDsmAfnm7bt",
  "key21": "29KcecKc1nPBTDMVxSHVentHfCay8HqVUAox2C7ZfSMCkE4AD5CuXB9ess6gCbL2yA3Uef565nJEtH9oueoNVxbj",
  "key22": "2J8pTKTK98qq6eSFENVDiUh6Ns51rNGF5oictKVYS2kNc8esPNkGhHQ4xYysddgq6FxG6t8CFGFcX5jGgn1z6Kbw",
  "key23": "4hvCPEXHgudLdBNmJ8RsRVMpav6hUkd48U2JEGUWF6gzXfw9VJgAU8fnpn7G3bekcstDQGfoLGRmD7qM6UU2ewSG",
  "key24": "VKxB2Gu94wyMUxndPPxroj75k6RwnvgnN535yZfVuqMtC34iPYPVfNasUjXePC9dG7LVmA9L6dHNyS2GVbdkwGb",
  "key25": "2vQmiTfNKuTVtKVuqTDjGb74S7WK6D2StEisdG1NHGj4nLPhKTLkGubTXCLA1FrCDU2Q5PQwsuHF4CpmBFuC3sCx",
  "key26": "2TNjY16GZfKC9gFRnWnsqJWTcKGa5VJcYSxfo8vymqy6TAP4zfr6UtTrhMda2g9K3RPq8mMaYD4YYc6mwyZ1yz35",
  "key27": "5G46kqmUmTt5NjcK1HVrGGgDVtHVDCQYfvEuXDY4iJTTTxpWfrtw9ch9Wu9rEzCsPnLBbXd1ybtNUgXJxzFN6s6T",
  "key28": "3UipY4ypvN3UZkWP7sn1uWQU11M9ytobxSZEsgCPy7WtQ1CWRBPbfyURvJ955e5LBZSV3HtYQuQ26WoFzEzwEH91",
  "key29": "4DWy2hpT6ZnQWFqXhJeom9xv7Jf3kbLZa8EvNy8aNGtCRu5jrvk9QHFwJp6AD2xy55gM5nHAdD1aMZWzHGpWpQQD"
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
