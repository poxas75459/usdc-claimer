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
    "4vuk2ynkoiJ3dof4gkCNMvxLDFLZoqsB1RAA7Cu1Kjb3HvqLxX3EPHJDbVk4eRwbxhtT6k1VKJzca5JKYVYFjeT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bG61dNimPdBdEjtUqA5ADZV5DYekQ798riHjtwJ3aaGJL2Wv4myNz6DvogJvEUStssrAEP3HmesYgn33uFhkAVh",
  "key1": "4ccc5pPnH7LgMnBjMnyCUXTJmLP73sUKmidDoT5WGdkrw7PgBH4ATzPUREiyLFgPo8bCNjGT9B7hQTVKGeXyJhmz",
  "key2": "47Tom9Dxfptm375m9ezGL9qJFpbKAePguYzMC3rX6UNEMNte6WKhsMVAuexMWYq1LXJLCAVXqpgHx1xBPnVRDWZS",
  "key3": "2cUN9Y8rfGsPk7g2PtvKD1Us1ejC6X6mGPbXcsyVrVhd71dcWQkS8ceAmtcFoPWhV9Gu3c4WwWCzmnLNqowADRKQ",
  "key4": "45QPwbA3zDY8GWbzJn9o7qjML9KaKLrKAvz1w1G1R9EY2YMsryVGkSypxxMjkp1X4uCQ7W81MruzXrYjbrB83kUL",
  "key5": "3V9u1uvdN2XLjwV7b7PNEgyZGXbXWsqe8bTgfk1euitVcAugyRuW1DSAnQSXbb8AtsXxTLbHaJx8CpxLi4UKgB4Q",
  "key6": "2uFuYaUZ2xwgFf2RHe9gq7mrQqkb8X21pgr5WGLQsYoEJbg2HB4tq6u8NLLXG54NP7ot3nuAmRajDyJo6teBBxT2",
  "key7": "5tcAoj4Z1DhTemqn8xvrZbe48SpWfHrzTeunYGW9XDJQbErtwkrBTCg1F92nj59vmh5zdmnbyEkw81GZZ5wQK2DA",
  "key8": "5qt7xpp7b3komSKodjgjHMKnhammRrJ6N1NdQ3oPpXzeoPQ59yVjiHT37YkN9JjNrpbKc4SxqSsDzgFPEhghmuxa",
  "key9": "5yNepxVX7zqE7LBZ6tMgfkt7uiUKkyzTgUCPHsLm8LeJRRQjCKZ3rpLHjzqnrsXLBEpiRwgw5mD8CZWV2F3d2Q5P",
  "key10": "3BRKNFuWGNdNRWjyetnwWSSxGcrpkuAZqpVpqUf56yvTbJJSjCTJywcW7ptgfnzckeZKB2B59jYkB6qhYM6GQnu3",
  "key11": "3esEeewaFvkHTb9RMBdzgvkmH8TAYNYZwAA2VnKpQtu2V7WYhXXUDtLAzL7wnTokX14FdSBtm992RGn185uB8YpB",
  "key12": "2rGfDyag1E58xvoDcduX2EHVNuuTKCHN1LzfCJPvNayakH2tLnGCV6Ss8vP9v5bvtrAw6Cs2comz1PrJ8QZ3DRw1",
  "key13": "CkmayojECA94CUR8JCq4kZGJ9T8S5BZSht6ZWue6FKr3wbeW6MVwXBNt5LktmXoWDxfdiekhsZAqfpiJF31QbgG",
  "key14": "2oKjqmZKxa1Px2ia61mKMRAGL3wANx5nLWN8YGg4BUqSuBVwmgyJ7etcn6eny9n7k6Bz6WwZhQUjxoQje1Ahno5G",
  "key15": "5grSELooM194fipFsH8D6LXKUG6K54aY2ig2TR5KN7Je6w1S47DZfRgNDWNEkPc6ZbMZ2ws1oQAfo95xGMHgBXAU",
  "key16": "SdNv9bUdTBFiXAoqUndGxP6ZrGSE6spyfAne8H1cyTBiRHrR5aRJYvrUiwhLXuU2wAgeQyeHQzXPtN6Dxa8Hsy1",
  "key17": "3tAzg9r6zTH5HSNWsJtJvZu6ah7HvNda3dQ3Xmrxd36YP4u57L5imjBMMLgYK3NkUVBfTR2RhDV5e1Wdxva4NYQV",
  "key18": "t9AxipuHSoQ8onrBUBydu1GGxJcAVgKt8M32mvPaWpLhs4pFC98LsiXK6pFy3vg74QqEL9nCWUu6XZ9S7LxmoUw",
  "key19": "5jHiUrP6ZvQgVLE87hK3TrKDhXcy73eJ2EJMWnVkgNjpHdwzDPa98eyeLA6io54C2MYTkS58TTAXg24K2sLnPebf",
  "key20": "3bhoaUMHZktNdKH9vpmW9EmqHKMrzCqXMHXKpzw3rohgAi1FKosmAEtdh2b39MccxZDMj7cu69bMJ4XvEi1hKM7F",
  "key21": "3gWypQTrMJGEJBk3MNja8wwdvw9F6KiKUNVeNW62vDZuDPG1abwf1wZ7nAa3SkA727TuB4cVe7ctkoHMHdPWzAh3",
  "key22": "otbuieskLg74J7cLvYBhpr6PmSDYsXhMJ15zbLxhZnXo7beao7sEjjkxH2HH4N2EVjHZU8zPW3keFErRF26jeYF",
  "key23": "5oPDsLfBRkrrXQxtAE3FBYDdiNi1Q6erqrsnrs7yMeiGGb62CoE5Joq2atMTTXYhp5oSYUvpTSf6A42UE2Gaax3q",
  "key24": "5skHnBHgtyAZLFrJpqAyp3Lb9MNMFj6hciyJL7sJkBN8omJ5gncoVB4vGGtL8P6owptCdYYxcs5GNUPt8CcY1bVN",
  "key25": "4DgJmFkS6N68CpWtYhTXZ1LtrqPS3BW6gdVK7PrfuBqwUmFD5F33grZc7sNAKeMyAtEisTGLkK5a7mpRft6f9tyd",
  "key26": "2ECjpwSmo7SP6AzKB6f1qDEEZtUNFhceuhYsuHG2fzhFSBb449edbn4Q7QFJLzzQnzzCcyzDc3y1obwXaf9heBLK",
  "key27": "4c55ne2ZBqLXHh3D3PyiQtZLm53XSHgepo4WwhqjspKrPC1KEo54Gf2nnNX3pkrvYozMhHtTN7Xd2a8ma4PmQhnv",
  "key28": "5NMqv98MzooRLNiD5zmQWTbrMJNEFDHSKwYrgVKmQ8XVHbypcnmraEy4DgrkfUPYQ25uZatwTJd8nZXxnsLPqS91",
  "key29": "zv9WVERsYeNE8i6vj8CJq1EYVKofBaVqPVxyXMUZTs55i2X7jL39bwQCNBtFrxWeovuXbKYfiF4GHwQp2ggXsfS",
  "key30": "4UeDXb3dG4hzxswLexzc1poJKMkSTke73cPy1iajnBUwfyHGNTitVWjSMC4RFwCzSsLB9jwDob8412yN9zEjzdhM",
  "key31": "4Mk5MFDAk7WbiwYictsfiAjrCh1cWdXPfF5N37kZzG64Kt7418EkRyxqZyYjixYPRqdKhfHKBoNpthyWgxfqET9",
  "key32": "3B3t1XgkvsuWkUTHubqLMaCZ3hEWHKCSYEHaCB4iRKtgqSULmW9JkgdNTdeJP9inqEejmk7Rt18cESSeyifyv7VS"
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
