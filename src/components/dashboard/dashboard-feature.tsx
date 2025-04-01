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
    "HiPBJ1GmpF2J5CsV1q6bK73dTiPCKZp3dPH4kkTvzg6eefkiZNTojyWMwwHzSwy8HRtVfvsLKkR9tkoppow6iDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtQ6Z17Bfw6F9AkBo1aaKbfUjddEqfXDNAwpyP49LNcQgTikE9uyxbfRtvt4VW6oS34p1N4hjh7nz8u61o9cRPr",
  "key1": "3V91uz6K9TordqDb5cLjtP7yxs8AQVYXVWje8kwzE52u9w5r8CCa9ZkB2n8AE2i4aEhkHZ8BHgxBLG6UFE2XBV5p",
  "key2": "33CKADx2AaGQBqLGzdQYuUPxmrgALsgyscPtmon7HLzDKkqUcfSnapmVdfbBCQFMvwVSLEPbr7e9jJP3mfzeDYcq",
  "key3": "2QJDcHumYCPF3PE6NcKjdCHDcvcuGaxYR754ABRU4ThwjJRYmjAXNVEWVX9FTBUkgnZrFtFGHPuU76GrDeHn5web",
  "key4": "TyYcLnDUm7GXaMCYy5dtrPZwG8PKcjP22RLyGnidyRULssMXDy4zBQnohRozmrusm2tLcAKi9BWwpCdBjEkLLe4",
  "key5": "x1GzZ3R4RpUkpQv8r2MnbsSb4RtvpSjG6FcSkM91wJu1CAwpwvVyKGuVd5NMvVE8tVYiWwtuR48nEQ6JGEB9o8i",
  "key6": "3rtiExadyAMobcbwr7iPQkXmxK7D6rf2dXAoxXj71w1VwK2gzHQbqVg76AsLGZvtZR2bLpgtJ3u4Lf5YX84sDToc",
  "key7": "2Kt8zagHvNUZzdrm3zrNEVxiah7TgqbrjAVpDXmh6YzPfAZwuJH75ykCTxUjH4KXjvnRePWepj2XEfhwjov8Zvkd",
  "key8": "3LTWwNGFcpe9h1uAbkr2yvqP8vzgJiNrsK7ExAAkM69gpaQd3Wc9PCTTvNfyE16bxtfkuFsv8m3k2LbJXsvNBcd8",
  "key9": "4eSbt6TLbMmxUwMu7iCjWQw1yaab6PSkU3CgHYXhyC1DcNQL6g9AUqPMjxLHsZ7zPEev1s24DZ4Ge7Wo3YFUauxU",
  "key10": "3qa9uSaMW7VMTtRyFmtwMKsX7C6BRQVaUy8kH3CR4TCCZU1ZT3p4NkeD4K52ooa5RFWAcUEyK7D3ffs4v8ESMHgf",
  "key11": "2jSNfWKVv3Mtu5C6ChrMq1U7iy6yiUqNLY2R6prgj1ZSu2pNAYWU9oNsaQUwRjP9dx4x9UNdqUr8scPzxX9KLZnh",
  "key12": "5foFQFvF86fuBkSFb3V6cKkppBTN7tbZBwTN5QzXdeMb7gM7e5M46GWt1DxJDxVnofVoYTW9oAS5C1rhhQuaE3Pp",
  "key13": "3vVzxGJWq6kia6uCis1rcoJQbt8oU3i89hJJGVsACiWQGy8mCntWZdAdvN6h26NymFpWARbxpAJifCeLJNde7Mh7",
  "key14": "3vMCGvRum1oieG5sCoCQMg7WR9tdLwW5x68RjpZujBs4bkZhnUp8NotK14X2iuCpNZVf22gcvaZkXdSQ7k4FhEeT",
  "key15": "341tLnjnMGZLoikc1BLdCqo1jCNQDok4TrNkNq52FDr2wYc985F1hV8aPTMBNLXZTiYxKEiGSuupreA6fw9cMD7L",
  "key16": "64Ea8L5yCASyCTH3A5Ly6NmUe9xUQT48ZiLhmzZBFjUd6rFMBAq31gcSSb4xYGAfsc7j4UMUEveDsQXUU2DbrNws",
  "key17": "2bgNywdk4wSJjrH9DE8ufXn6w7fnRJGzJXksiBpZWFckP32uBAT7QiibmTCB86ekQTfSd2ujgndRfwTZbg1NYX7y",
  "key18": "wCaS2wxZCV4fWb6cvzwfdDSVj5eRk9JF4RypGjwU1BGdhtPX8kuEwWLXGbmVpL6RhCXpn8QcMndZbXFVVguH8eu",
  "key19": "3MEKSwRnPuP4Ngj5TUErycsk4JS5s2drwT7y2cQ3QwRfLy66ELXQRw3EhtGZzXT6iFWZBRrQmncT8K8PFqzU7o8r",
  "key20": "3BoUKKMoJ54Rz6PFmeVDeUUVMsHH3kWxquKrTmHvBxWxSNF5KLSGJasEg6QdGXCNAy8arxgWw9uhD2gtwqt2RBqN",
  "key21": "2mH8vQ5X9yUMTk24WjhwW9Pr3CzXw1b5MTBanY3buUtdWTcJ7FvDu7a7LETJU8Nrf2DWXGyPwAsaPkeZjbUPuj74",
  "key22": "67jX1yAx7GkXF9GAzd6vMp3mMfD7ao3UfERLo8CcEVr4v8E51HnYZr2FYvwpqsrxnAtaDL6QFNbnEwtSyUnnhbRa",
  "key23": "2iCBqsFwaxnRsKkiqThs5F7cmZmALX1XzViqQHLSonTooFiWYD8aioJMxEw3Mt95ShCBcTsE2A8qNKw8BQmLkFUs",
  "key24": "5aF5gKt4VX3TpPNb7viHexkxoWSUoDdsRkgnbkV2fWtNMKiJvN21JprzeUwnZDeNew3urvz3xfTYaxePQD2VbZUT"
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
