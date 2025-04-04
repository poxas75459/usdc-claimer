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
    "4SnAXrrzcxPS8LeMw7J9tFoPWhY4uGJCEqrfoCeWSYqT9aqaegyiDnyCjCjAGm8vL32AVHzkS8DCKnbogqjc1iKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCAxKXVj9BB5MDh28mJCkB9ChvTwavXtRLLSTZSBNAW3GBuLeiCpdgEMVZAbeEuF3PxLEHXx8CPQhZt7iq1fJKT",
  "key1": "uUyznQ64gJdM9vYyeu1z1U85YteFeoXqZo6BJymk4Y6FJGy16AW7oHPiUbZisPFxs4w679woD2co9WVU7sP2XbB",
  "key2": "8d3Ncz6WA1syvoVMTSZn3XfL7SCyHbdPiEg3t4BWKHXeWTsRUGkqYdLRHpGtZTrerLqLhpaEmCZsYsfHj99dvNz",
  "key3": "2HU4mNJ6neMEBXLNC9WEMErk5qyMXbQZp9GZCaFpuTDHaEC8K5qcMMtYLYNGk2MWTdC6UsDksgccuzfKaTdo5DJu",
  "key4": "3XMFMfemATTcMzko5s9fg9JqHpKyCNsP1srHMNNWk5u3yGpWotwVsziCtoeeVt49Q5vUYx86t1VUT56imxbvD7Ua",
  "key5": "2opQXgFRtTh4PCQ8adrbrTfkLDGDWNmJxxxm35x9J4oBTJXLZBwKSQ2MSD76h43MFgN7ge6S2nctZr1RtAyqnqQJ",
  "key6": "3vfRnvHnXTuwpoCfxkBp1qhCAhVasLXrn87fbcw1v7ZXhznxazGRfvuyEcZRH7MJMGhwMUCpiEjVy8DNXxt5UYKZ",
  "key7": "35TwuPtVp82PJRAD7Tb9NvAbAp76GFrtHJ1nWrx16BDBTWVBm5xwaPtQnsKLEHcRDz9iamrdbkUQGZWAoCp1YKAh",
  "key8": "3hv97A1GbGzhwnEe59XXhbKbTmze9SiSLAB76YiHFaGrRN4nFquNrtFScCtwks85UnwxmdKDczQCBDQ96DUfgCX9",
  "key9": "51HDKqaxT7iMkKDCoRwbVhhiJJhdSmR8Lq6eUV6ctyrv1hoKHR7ej5xtCF47iaASZScg8TEE5knsuDrjyWcvSt74",
  "key10": "28XWjQBEohrZFBi3ps1Pmr4BTJkB8DrgsgzpeAj27TDTtAEqjPZHMg8pPcRFEvKNaLChoBEWLMYVtPwQx1aUeDj1",
  "key11": "5iJDy1Yr79U523QEwhqatcynW5TQ3TehsktjLLSZNx9uWJc9iHeQPHfAYjSBtdAjeP7qgocub7U3TtMrnAALmz2U",
  "key12": "4Q6CVm18GoxiSFypaYrBRX7jhB5dqdGWZysmPFN3j9ADZ4cB2Q6nknx1EWjpBnnznNgUcmEBcj8XwJBEAFsP8tjo",
  "key13": "5EB3uBviwx82uUoao9PHbYDMKLWWjWJKenGjEq93MxqGVTSHcDbfoptzCnLrfem6Ayx19338CwRABMxgv63uEYeY",
  "key14": "5TwfetEsCqBtxDJ7GGKEJFo67pxePsuSmHw8yQYWg7S2WNd1a6J1RDBd4Mnc4nmzKhPzKbBzp9gPV218iibi29r9",
  "key15": "21mmNKFLVviHku3as5GBBayjJHRLVUdGTmWCE7W7taLoNajGDyiuF5MeCMEvjH3sjnfzaQamf7mwfZH6ZJxHhi93",
  "key16": "2EogMCuFgvRxWcYpH8wQEsaAecBi1wm1KCya8eHXnEBN9kv6uashanuPooy8aqWk4PLpWaXWWadMYjr6HXR5cmJD",
  "key17": "2otZmicjGsJBY4DdTFAKNK5KhQMQmEeoMiZYptske2oL6UxusMPjBjHL7Ycn4MR6vcnQvyicMqFrfR8Tz5pkmwfo",
  "key18": "3Pbw44UPp8KJFBTgavrdNcKmwfNWVsZzzaxbSQKWyd1tYbwq5x4z991c1zuJ5E3LczsjPkFNiujzoL9TAJLbfa9Q",
  "key19": "8Ack1jf3B31wUEtNRj3yeZSthBojKLXA3Gdn54q3nMJaDw7AikxpDUqZfPavz1H1ALYQGi1i3jtQK34rEZqbrN3",
  "key20": "5CofQVEdTVh7wtAxRs6yJ9xeRSnmGqTQscVKGxQmmCe7czK6K51eBckyZnJkcwhQcRWG276w6dPNhogg1VZqRkgP",
  "key21": "5V8Vf9dAkLfqjhXAmWXqG1vpsrK58fH1CP548dUJWtZiD3kU6K6dMAY3XJwQxoRC77eWLNCFxK2JvkM3L5SE7UtB",
  "key22": "3WcpRaxu1Lj6xUMFFSdB2Ew242DBCjQmQ8MBQmWK2n5fKYAaFAYBvRBkfeunDUkjWePSv23SEph36NRf9f7HSkTZ",
  "key23": "FyHncxKPMG75Pt5MKc9GDoNTMQ6yUgsmaqQHQXjguZ1pGGGvaviGKRed6xtS8Eu97Ptu4nayyyra2q84XATbh4r",
  "key24": "3YeKh6NancUhkAKXerzFJH7nSKMs6QYiBEesEtFH2ZyonAh6PN7jGTmKg1DWDMrakCx6iFkixE5m6ctkDsLGu2tP"
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
