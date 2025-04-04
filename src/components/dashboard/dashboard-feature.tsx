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
    "2XvsTRHcABeqGuP4CWjMLY6hQvwJQeQM3Bi59TDXKhko3YZGnAUbDYmD2v4koMQdqE5i5BTnmcc5RrNGE2Bscjjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HYTmMGZBVCLSUouaAXhgTnx299Tq1yzJ1PuykYNcaNwDE6H2JPwkhKye5WyE6azWFFzv5XZ6G4ifS9jL7ypQ7pQ",
  "key1": "5a7sDpqJSBRMTTkdJ5cRLYUgr1J9vktUfK5DMqBwoFrBu1taMTVRyGQN8UwZxBCXHV6V5DxvocbF244AB5NY5JwB",
  "key2": "yTpTWzSSFDd7fkH67Fxnbv5htBZ8Bw5Rq9UX8UBRmBbijwtjDhadePYLDYx6549ezi6MVFoWaRPqLbTRsu7WNkT",
  "key3": "4LE1ye39J9EYTDhi8zT52iF6n9xc8v3pExUpmZ3oGysNuLmaHEgVDABz69nVBGd8TzkyCX5ctTfjq33ohyob91re",
  "key4": "4oeuDwwQEV77mLPKrAzisoVKeDmkvkRorBVRVZaTyL4bzkE3mBEMeMw8eEohPtnu6A9W53evBAELirvQ5T6XCEZw",
  "key5": "3ryE5j7iJBKaxkhSeB3jVrUdecsfSu6mUq4wuy3vLA1oaBVftvsNKgDapjSiRRx6ohHmzQG8hkxwJ8rxMZKdRXAJ",
  "key6": "4etsBvEbkuz8dn6Yo1ndXwnPv12nrKehYSTn8MZFk5S9UPZFh6LWrzc1B51mkBKf11H6vNdU2FV3EzQhLgGK49LZ",
  "key7": "5Yzacm2sU5XCVQGmktf54FkR63vGTvq27jLAzrD7VXP7av14H5yQoTJcpfN92QwBbHGY5fvZwRguWYZqj65EyDqX",
  "key8": "2Lw796HE1WwD9E3szZhwsjvtCru68ryDiwDAi1DAkPsU1ExCdHy97yspmDCBqMHi71mabLyBZ3Gasrf1eWiytXwv",
  "key9": "5VZqf748CccNz9ps4tmhq2h5ALbbKGCwwf35UWFY8UeLocCVGVW7PeBhSRFd1KfarXDdUJeBneikmCyeVdV1T4NJ",
  "key10": "5bCkovfsUZaZtvPwMqts1ys1Gpcd2ZwGpTx5mwaFkkxzz4mzUaMGKYGm9Ythjf8AjkgqaWACfzUDzRKrFMwadtUb",
  "key11": "pxPUQKFjHh67WbviDSvCxcgJysqkHsCry2u1NLWLpumEHQMHgKtnFMthcTHq59rLjmLo5i3W94UnQcpvJ3Eh2Db",
  "key12": "3MauK99nKxhiABfCg14ZBQkuTBGRGGX94SdR1Bz22zXXkLTLrRSxaJc2EaUKSEjJxFNdpgCQKjv6bGHoWNDvbeE",
  "key13": "3zBs2xqgQtfCSK2AWqVEGFVtja6dQJjqvnq5m6abU3jdC85bNgjfWF8UJBVJ2SmPRZFgvAKsbXN5d1nm9Q9rQVfs",
  "key14": "4JmSxjJMwX4xJ65gjCNdWkhbjZFxLYR9ShhD1BMCJVyjc8GbTTdnHsgSexBW21W8wz353GHHdpvkroAK5ZiCQW82",
  "key15": "3KZe2CyP69iswwqd7y8MCTKjnpGijc6CVdvqKgqw9BvoWbRAmbTXBszgoTKhAsTqH3rxsog3zpACCDkmHpXdKxtE",
  "key16": "5GGKzmKYNebgi2bjWjREyTbxsvKqqL6q4P3yW1L6iKh68isV6gzUoxwn5e7i8hRudXxgMFCH4yReMb1rtECfeHgu",
  "key17": "5Lxj2hR7wFTuhEiinjfem8oMseVAH1D6SCRznHQ26XycZUDj2GYYNq36TmyeJLm6YDCFQ5L4gSLJGE3etF1N1pcZ",
  "key18": "22wK5A1iSwthGmoatVK9QA9zAtboo2ShHXYoCuBwdduQSecsfWwV1YxoUduwuunKMYtcAqbHoCDGvSaMK1byndfC",
  "key19": "5K9u5y4w7XKZZmAvgdP7rVSoGJBgD8fb76w2nSzTLhCeFg5QKda98mTAVYTofGyk1tBkeKMh3DaJDHwkWHKnp7F7",
  "key20": "qdtqRMhry2SYKKs85FivhcQHsw26howvFzARgDGnWnAbZRmTUnFV6mYNe5krZfsYM9f3osnVH3fNViFAqHHaa2a",
  "key21": "BWGPC556Lo7bQpyRMYJgnp1DouYAzfyZhFLJkqdaNeE6Ujn4XZCfAWAW4TbtnwWHVMZA32rEf1cAQ4DMkz85pro",
  "key22": "3y4kwErfRFTF5jpkRE6FkvwrkA3yS4YJb7WPxnBQJR21sXwbstWqXrF4uufiUuN4J8EoNihdXgAM3ZzKHTFTcybS",
  "key23": "4KBXYY7jEK2ihMkPps3MyBZpHoRpqnnqv9nffZmrnQsmBGmDDMPxYwropzDFwQTqdQkXKq2pZQ4veMzpinYqEhx7",
  "key24": "8j1cnKMKwnbWbZ6UinDbxaNKj5nKsmVBmt6hEjekP7ZfngrrbWvNnwugiJ1oNUWUAmNdF1Q8Y3tq78Gy6yquey1"
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
