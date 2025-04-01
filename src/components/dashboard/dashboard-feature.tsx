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
    "2qVCSpjQsK8vE8QWWFoZqcZUYBhXosQJ16kXiRtWFWHXPdUbkwR2V89p77B9mES45sJESG3HVGuMuCcpK3L2FDvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugbfxnnHLcpKU4uCG3dHXmavy7xmEboLkDhCjNKgpWXBFVPSmTpfXh3xzv6C2m15rVdfwKCbD7kWnUk8Dt7iqwd",
  "key1": "5r4EZkqQzoZ8VmkNznjBzM6zHqV5BuaaaamvuiJQwkMuLcct1aoMH96kZoFqDLHz3UFpbLzQeTThySJVeQtriTE9",
  "key2": "4sL7qUQuJx4zApjH9TutzDH56DczKf2EZVLqJEA2sUn8BVeezkSBGVsE7P7468yUrnDPDiCja9MY3yk8jGcfdLBq",
  "key3": "3z3MNspuu7C1hQD8oqECjcZAtvm6yyQVn51Y8CzTN9HnxxEKzAzios7fnfy3GsfGQ4kQk2aNpYQczV7ZfNsrBPwj",
  "key4": "2shgekFLRZ24HGCbXLQ3GJ6GKwsu2gvKaekLmNgzNaLYm92AtdZpr7zESbmpHd84jorM7afBpWPjGe6JXWiJeqA3",
  "key5": "2kHM53YePHrKWftvCAssAeFDbosHczo8uSt9uVo8gpW62VbUYjix5EstHhCAs7MBLaA38VJQdfG6UFUPwumQngXL",
  "key6": "5sskuAFH95WeUEL6tvJLewRxDst7Fw7mE8HyFy7PFEi6cLWWQmK3A5UXp6si3jtibagwXiPANM4KMj8oigAY4FQF",
  "key7": "2h4NeRd9vrskPFdBdub7qJxP2KzfcNsVLrQFAvHwNW26Lzix5NpEwtv2t1cR3DDAdnXx3MutwJJ5h9vY9JWPVKpW",
  "key8": "3LqXhEe9r6aZzJynjFYXDjDtyEAvqtswTUEEiWaqeCd6ifVw136KNEwmyMn3CmYtFe78Mpz81eoSJfAipjCShwxg",
  "key9": "5STkgpQPMJkSGugXVcZcD4YG5ktRk9YMWLN7tmS3vBtqiery9FLVeanip5QCKbBZfBnUDG27xwMQqtXHbrWYg8YB",
  "key10": "4hRcGoReJUbzMdJ611MoHLJ9XwsBoDAHL53mnusM4hko8JDt9wTt57U3tmG8EX7wXzWZMcbNRKzxykKkxqxjMWEi",
  "key11": "4R4XeCtk2qe5Fjyqj4H9fBjfGQ6Jtg2vvfw5kd83bBGBcUayTNcNrUDtw5b5EausbYc7Aphg4mw447jBjEyubA1N",
  "key12": "2jzdg1KKmFSam2XptJseYZuqketfqga3fxVZZcg3FUCc6gwb5TBLMpUGSYyyxznxVcUX3CPp88J2VRLbBtp9UgQw",
  "key13": "3N97qpVSwQXBkBHRrNQFvsQEkw6s17SJhaKxBY1HCd8wQtcWB6GLLvFBsszXPXngDTsuW1S6YqYVMBYt41i7j54z",
  "key14": "4UPrYoLSsVUZMCjaE8YuJEBa3SWFyikzixA84FXcero3o6eLqMWnTNPvrv54WYbwQWTsBNLvbHtqcjrX3CWHYM6y",
  "key15": "5RTmeHFBfFavFbTehcNCGJRNNytHnWURP2tVAmJVXQ1rNxo5djbRDvp8hgoecjDre7XBP9Qtn4QTX2wQWLfYfU5n",
  "key16": "4D9YXxA2YRi7FamRpxpLrb1Qo8dPrURcEacFkK76k5tmkFVK7XirM1i828LQAymRZY3E3bPverTPhzyMSNwNMHu4",
  "key17": "5SdXYGq8o3PoYGb7SG8ZrGhcGZoPKUQjwGqxB5ProQSLMvPDrYUt9JUk28SctZJ9fqAzFZ3ptihkRb3uKejBofGa",
  "key18": "4cuAKURDtxMsc7YScUBETmssDnnc9d2kLFYKdf1JxbAXHVLKDMfVnT5YqGoSVxW5H6CBo1cEjpn16QARMM1bHbvY",
  "key19": "uvGJLfDYygmhK777MTNmLBE44asvhMVpzkawMMDvwjgAjf6ts8W1GjotBcKRewAFCjzevSigE3ZSq5BAPgf6ntu",
  "key20": "hr6PpNDpnG4SZempMVdoWj3xw1ZNgdHdoCKsKMu7Jh4BAobbfMyd2KtXXMxyzouhEJbE5pyn1BHeRTYSTviUVb3",
  "key21": "2n49avXKYnudVhGuhibb6Ff3jUGFTvE5VV4DKa15qN5VmhNqusgKCRz9H7fBSV6h3v6szrvmNuj9W6LMqHrVWDyk",
  "key22": "3t4essiG1mKv8sivcQwE1hWyhg2AQKo6cK5uorNewjsAV7s6VN3RDCEtkRUUBPCnECFn9PBEV6RfndvUn9KWE9Xd",
  "key23": "kdrMxQcmdenLoVjWDefmWPDgkNg7LdqVk7SzrXWcBsDMahjvoTnLwpgyGSbFFohDBw7dUe6TyTTN1gpE9YsxxhJ",
  "key24": "4UX2Lj6REDL21B6SsCvGoF6Er3mcdfVaQ8TD9JP5RTVY8XhMeAZdimkyHeLgz4UpC7j6TZ9T9iQbAAx3fUvQCfCx"
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
