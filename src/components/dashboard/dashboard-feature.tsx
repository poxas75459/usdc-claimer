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
    "4Xn4L8UYWC5f4hYtgGtq9irGGZFx1jbC93s2pru9u698WQXeARuP2D4zW31NJGCH8utfaxEDq9Lmugu1AA2uVYBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpWHizxUiiSyxqzBmxT5Bx3mH1Z5JBrad457yhF9vmfEyhkrpnvQDaCZCbLMuULBsGpmd9WdW9MHEnPeLXsdSDN",
  "key1": "4g8ZQQb2BL7q2aEeYjo1Ru3MUzV2hxdWZoio4sr4pjC1La13qHU8ZjJ4U7U1XRMiNvfD4iWUxCiy4JG8KL8oB9j3",
  "key2": "2QPJdxKHSXSnnAQnoP89a8yFPzvAGwNmB81gE7rspPKU3SvLwpyVMgXSCqVWRScqK41rHpc5C3behKGBk539NXbQ",
  "key3": "3cutwL7e1dtH6QQNsHfJ34TwUAWdeYJP9V8TvzBmCSbPcyGhh5A6KWfZ68Up7nqa2VotTf85t5UqcegCA1qvm2rM",
  "key4": "2g9xcLPnBZN8A7jDqzf8jPRSXguuCefKjanFBp9ZZEbC3Nemi6vnrh2aHqe93u4XYqcXAgebXeXYyvFWbfyYhZyr",
  "key5": "2tyxFamxrtbeKApEBaMe4xZspbhutREDvtNnGvgSBPZexqmMNAiLzwakjSNBrS6m8fz8QsGqatFUEKjgSR4awtpj",
  "key6": "5cFv8UMXnJ4pjSFBqBEnFiSZQjbwVp8Xy4srVmG8L8XHKJy6Uw1bxvmUc6nNz9JJtoqUk2YvTwePV2dxH1qm3vCC",
  "key7": "2Ymh3cfgjVLZwe9yQ2MPL67hDjuoTkYEpvxqiT5rSw1hX9rzA4eKHuyWmo1GVWoZESc82aECywYKTBWPV6PhY9Ri",
  "key8": "5FMYgiGzWxs4sR75ZwMe77C8AtYg4uCwkpP427ohvxftNfErSYt1sWBfG532SKg819rf18HTmL8Z1RPCHXVfmJmz",
  "key9": "4CBDxwV434V7STm41iGFqYWmTA5kq58DR2Mt8hsmrtZNKufdfaRFxEfypQNb8jVdwBvE9wbtLtG1dvZahZ4h2qk",
  "key10": "2xyXYwPZSqgKsWHUfZsrYorRf4QFMviDJs5xmJzGvVuRsDDsGnwCavN7cQYy6rpeSdwPbW9hEEVGjELvhaeAeWj5",
  "key11": "3yn5cxot28dco2kx9E5U6nHZWVcF4w2oiNihENniyvywtT2MRVbaGxHfejDqkHgHdhstwQ7wBgPYc4PFGAqgJocy",
  "key12": "2RrK9fd1bwW1jY6YhR1KDp4KPfec7mHQa2NKDHKDgRG11z1dzzQgGQakjXL4aKh31VYRDJrtwyEr1mfCxwCaVq94",
  "key13": "3aB3WdEyu3yNuAHSNcr42STJXPmDmKvKTCydvtwRb58Q9v1CNmA5934iQt6UhY92KMAQQbB5sjzhf3TJe7ve9Ap7",
  "key14": "3XX6dPxbqMgvJKRFrrRt7iztdVJDQ7Ke5FNhfAaNc7YhqitLSeRSymbxopLMVS6oobfNR47re3cQTcssQ9Ca2ZfF",
  "key15": "4SMuXqe4BLaq8F6maQZJ62v8ukBCUur5eWypzKUFomS6FdsHq16cTPsWFUTne44aZboXqrqpbbaA5RsUqEbpRrV",
  "key16": "eUBcMBCytof57jwekicB9gzcgRABTgb1EvK6V585K6tyhnoRPaRViHoMC5Bk5TS1hdH7pZo6DpeSMM1rsBqUAXH",
  "key17": "RNRfPfGFiXwTsWbF2AjsYA5dsmRM8Txj2Nokfe6sqeDw86sYBBQ9d11P6rE5CmKAuoz66kRbpy3AhEYrtqf38Ey",
  "key18": "3NHB6imkYqQhGYeboTdPEnTReszEoyoAuY5iE2vJkpSDbcq3cyZSeua2QQJootV1ZkhBruxwKJmSuRf3j26ihMAY",
  "key19": "4WbY19U7uhsek1rcG4nrvwkd2Z4nRmu67fpkdB7XLeRU3ZmLvoC3foYYp6WdA6wYMsDpVMqJZJcyiWboWvXb1ML1",
  "key20": "3oig4BbTJYHGz7kTJaMn3UncyrZFkUWDhCdJGZ4QxjpyQcRzP6Wz3duq8SNSc1712KVc1Z699cJrpmSeNKaTJLad",
  "key21": "2nyJWSWdJbZPBX97DMjVXFdPTF4nBxejVCmf1BNEBr9VTQG6rBUibmf5r6zfG7ELBBa5yGr3Yo5GMUF5HSG5B6fu",
  "key22": "2hWmUw3GSrCtQuyRu3QeAZFBsCZQVvPfM4ij3M52LdPXLZ1iPmBA8cxKj2rdQFeLLiPmZX5AkDvjhWRrA7kgRdCz",
  "key23": "5NMSzVY2rEao4ae7mTEyHegUHjy4wEfKswT42turNRFgZwRrQqXanR1LwN4Wur2wmET5Pmwj7f7K2T6vHz8AXRPA",
  "key24": "3HdVDntfMKZBrKoXPzxTPC6EL1kFP4D6T3cJiuULzuER56sdgVvLmeZANEMhE8nXGiUVPfdZJmfwoBCwLbn4Ahie",
  "key25": "3JFjh433raK7PANVcKEi4SoyCJ87i4NSyyzMzRkoiq82MxPugpf42SknRXJYgb2RgHxFdjNdJnf1M8tSrdhfS86V",
  "key26": "2j6mYvLZ9fFG669JwB3pJ2QBVnsqcpdAos9JAFTaQy2RBXeqmhFPBSVv3XsNqHanahK1Ko2p62H1bK2wH7C72K5E"
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
