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
    "3JM9AcX2Dvz12MPREahypWNSwgXUhTweBWx2WtrmwEo6hi55J3Zp3ypx5eGYmbmGYJv8WMVoUVozBf5Ad3toM3jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bcJXkNgpFim4ycdD8EMu9XQqYUmW6GyTgW7PTFMWLUiNYA8cSARhVGnyyVx4iP1K7vdGFNQUdGSQExLUPTdTEwd",
  "key1": "3wiRssuJf47UmvRANawq1RwBcabTo3PTDuQHAHZzb6ELBh8BGWm9hDtvKWx5c8L8ZjvfcSrrsBfBmK9XRqwo4trJ",
  "key2": "3JxVHcsRWrML3CtjYcEghhaWRzpCrTnNGmoz4kKDw8wZvKKRDqqvLY9zmwcNYgkpwERfqQQ5PrgF8NGWBtUWKsxd",
  "key3": "6j1EGDQmjoejparToq2QdYkCcgPZrQy6rMd9fbeH23ur6Q78ipfnh4mYNQUvNWpJM9dx3whqH43uiigZR8UorqC",
  "key4": "33H4P6gourgwXtsSmr5rscQteAUsmiZbqxHXWb3VH9gHtFCzCzhyrbHApWnDRbC5hgZMedFeHcLxewYNdL4bwsM6",
  "key5": "251bf7AzJdy1VsQX4QPyTS3QgxJfzrb8rCMFnjL28Yunu9pciAWiNmnQG85nGKh6amWUZx2SBQFVeovG9EMg5KVY",
  "key6": "31kcqBT5LwRUd8tC2PEjhLnRAnwR3bVSqmzzRwxHYD9VrmkzzJCBRvvjMmsKTCKuQfMT4fRmFZxE8iadeASXAGZ4",
  "key7": "3xuWkA9adm7Tmf15Hwbd629NYnPn3dpYA1xcAFusPKHuLoziniVRypQXcswevczpgE7oiVLHbknjg784HSmZf85T",
  "key8": "4PkwDnpXRnHdvEzhZKhjZjx1GkSyytPSaqFVizpJmePfLUzi5Mqfqk6V7cFi9aS3cpTdMxUBoE55MNkDTagLVPSG",
  "key9": "1WKvUt9y9LZSRwsh9KySAxhE4Zb9Rt1eGSdtw23Y8aRoaafP6vmLTGKMv3XufxYfrpkDZbSBZ52Nzhsg7Xzfp7Z",
  "key10": "Gcn4Nd1jh8ngTa8iZX4GNbJSPhXmtrAbyjB1wL3Gvjc8pBHSxgLhKDstvTYDSxTXgpXpnVfGE4BXWVHkN94FtWo",
  "key11": "5dqxMF5ZeN4KzGraed6ms8NrDCRF8ofeuP7GHPCHXbB3xK6fGYoyy4CJCtj6s6Z9v3GvNL7urvmrmWsLkvKCxWTP",
  "key12": "5GPD9JGA8WLZjBGu8vpDyzN4DSyfbExqR8tPazM4ezJo9neRLGPrgWtdLZtDxR4v2TFLPhFk8qv7JfTLoz1hXg2F",
  "key13": "5aVDGq45YKJabRAb7moXyAfj6w6Cauf6yVeNqNghybanRaU1Hra6nA6jXyeEArN6Mqw9RVpMpPCrbaoGyWQvw4EA",
  "key14": "2RAyvoGgKUx1B4NNoThgkn976Ls2bbWVkbYwZjWxNQspp152XSmwkrNCA4qLyKT6vgqaKJpCsJibRqwqp7iuDCmL",
  "key15": "2qpR3fVc5LYbbJXxKQo2exgwLSdn25E9LvaKsDeqrnDx1QaFvwNDqM4TaXu1FscYn5ScU6d1zTyowkXyUBj33BZf",
  "key16": "3QUzFWP2FyCiadyuFP4p5DDKNDT3EFGBbwuLWHrGgTGn7TZkya9amFccSshqGrDwp174yMxr2UP7Z3TJMKptd3d9",
  "key17": "5P9aqBQ1mi9xqM2d2dcVPbcWopgzSipn8rCAC5YkHuvMi2JSh1nGmmzGNcVvRuYDRbh14A5bJLRV8XkkPjy2jJrZ",
  "key18": "5P7igLua1Gv8uABqqcsGFyvh3ZFRPwmdhV46cVmbLgFap14c9MHViKtVyGYLhBGe6trhowU4brrB25ZEPyXSWJdh",
  "key19": "2bqs5AabsD343giEoyDa1TAxPTXgijJBNjM2gFHfnyUoEQmYWxv9aUSgTZicBfCJDM1fjYEnYuXg73XXvQu3d44p",
  "key20": "TatuSDjKVLBFtftjF4Z7aJFE5RtbeUnAsQuyRpBgib1TRjTUrTJjYNQB1MMnqmTPdZqMcdhHXrXkF1wNhD5ZoSL",
  "key21": "2wRNnP3fciiquesDHSM7bpK67ZFtqwEmbu83tm8VawVRvGoYGkHaTwCQTo3R1CNqquxMRpcEmwp6bxs3zfahKyed",
  "key22": "4hkSpP7HrXodsQjSYom4H7qroWyqcC7CD6TT6psD6o9F9BMGaJ3PPb4z2vkTD18FDnssmHajwV9RsPyqyJujNbf4",
  "key23": "22sKp1dFWqU587ZMqMLYSwqoVAenndMw76Pksca3VNqm6NFFJpFWUTsNWLR6w4iJXhBrPf8YVSxDNRxLoJE5yTGB",
  "key24": "3CxR4XpTfAumq6XoY7x9aPjzVW52pXwsSGgGvK84frwdD2U9ooZUn3pwxRqxk8YMdV6CmK9CsqGhuLzrbMf2JBWP"
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
