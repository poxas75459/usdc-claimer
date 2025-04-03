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
    "aDzjCWvvQUrLaGNXJgiJzkXQcA6qAGAc8mJGN8qpcaAsWXx2npPyjRpo7RhRKaD7btPasRAQgzaM9AfqUNzXQjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jT4nS6oCuD3yZJ5aDBEfvzRRkJGXAT4jascFjYw2SK9hh4hcq2PA2M2mM8bHB97c2XPFtBwhjwiNcgitZ6GdVzN",
  "key1": "37a4pw2iMQmcQL4W7YqCBLN3LyLoyTCk3ywwqH5r3P5bTHg7NEDg4MwohfJMA2SGoPsyqQdn8cEJMHQbjzgTTaXF",
  "key2": "PHohFrUbMKzHarB9XS68snv2L6qfSMXrSCe8XCbi8skHZokHhwG4QFwnkxJNRcAGyuGHTur8nVitDnS8tfaqfCs",
  "key3": "4VK6nQfrGSXAiDKoDh5LjzkmjornT9iuuz3wwcuSTL3wamuvb5zV1mNYosiwc4y9W7cKf94HiSdcAsc4wVkEbeXo",
  "key4": "2rLTLjbZWeo6kcVHhm1dWBwuFbGcb3kr6fe25dRoeUEWk1CjqpqF35QXZ9bbhDrXHkDBCiw6E5uCfRTtS3fJckZY",
  "key5": "5M4Ef5Z7LE1BxW6r9j5tWBHu759PVtdbQBgaXeYegvfu25PbvgJwgSnGLKuJxdLo37xgX9vCJrDFsEytY4WAoht",
  "key6": "5gWarqZ6p43UvDtrjvX6y3gXnjBtuq1yywZZeryuwcGWRvXygQ8Um7QqmXELf4BCBoRyaiedPzyUKPbC13EW7WjL",
  "key7": "4XSYSKfvo2JwBo8YohQTPDG6zP5cZFjerbN5zV5qNj2PjZrvVfEAZN8usAGjNTeeHNgQGUNUT4h2yk3MQY5gEdeU",
  "key8": "616z4rZpPBpQusCXYXDaZtNe9AEYHo4gViCyK8gF29XhdfWNFL3sQ5bB8KQJHsq1hDJXdXjqo3iPMjcggRj5iy54",
  "key9": "3T1GPaoWw5GAmVvJihbHo9AT8AYBaqV1Mqh8Fag1WgZ23HG767xBECnX8jFrsEBZF3t88a1abJ3MpgkrS2WePAam",
  "key10": "mKE8bHBjCmLrUPpoMohi3GtbaSxnC1i2p655VLMYfMafi96cJ4myxu9gBg8wHR5vpdrwyuKPVapRivtCBqTSAK5",
  "key11": "4cunk5DwT4jo9oU5jGDc35jr5K7jAQ4R9CXWrW8FnUtcC1HrV5P7VgeBxkXcGrZjbR5GV8Tvr8WtSKWWco8Z1WiF",
  "key12": "kGRPLWS6Qh6VTPj7YknfL6ka8Q2K7EjsUCtFqp84xzQyXPXQM8ng8b1SBiQHR7CaWP34PiTNH65z1TJBmzdjUu8",
  "key13": "Hnwuh839y4tpdesaZKrKS3Ds9R73LYyMfd484kpYd1icdjRSR6otiJyzgbnpPikKK8K1gsxtKYWJ9U3zc1mN9yF",
  "key14": "2JtWZzyEJ3E6cEtBgFvRvuwSuprKxAdNwRxW7remUgBczQs7BRci3pMFXbKWaYck83uXEuTQv58nN9XqbuX5TkUr",
  "key15": "4wqJnstwDo8q6uE9B2mZpwK2KxNCaxfw73LSafnWwDuZ25A1WPxQz3vg4aezpJjFqwmuqPvSJQx1nvt8cRuTwh4z",
  "key16": "2MnM9SRLRWJ7EMKSBTwxhJ9j7CcMo3T4kiHE52xHdMqNymKT3Z93561Szrqm6GU7LUqmcLMdmW8NGRXEULQ6h46q",
  "key17": "2pm4XzTbPZLetwqUzUo8MXHbDpuvddUhJjf2AAftSiSZf1Nko3XnmHBe5FQRogE86CXWg2H1E4KYvPweieoCUvSf",
  "key18": "2pKyKJu7DPXHcq4jAizdKzKbnvHnLMWXQvNC9MxQHut97xRjUW2WXS1U9v8jPRNQbdWkbj4fGP3YFLodcCkmwzuH",
  "key19": "4aS4YCsKC6bBPpcw96WpnjpmYL62kPWD5ucusJV7yzTTC8hgLs2AV6CPsJ5XKPD6rGivoL8ZcAkSArLz4Crw1AVq",
  "key20": "36gC5Pbh62e4MqwCdZg4YEewASCnZubimurJajyJAy3UeZ29RBekY5Z8zLCkedr7SAevnK2tr5UzNJTgR1aECpwn",
  "key21": "PVqenrpKK3c7frjd57i7QxZjCu2AS7CTM7YGhTWoGxspxbFhEHaq3RDoW448oKa6btA4QXT6yfbwRJEVxxfd6sU",
  "key22": "SRnRH1ZbFWgLqfTtdCt48KkaG9g4Amxpr7xvBQLzCvXftx8bpKjs7JZSMZbupBbj1frrHWFWT3FvABbfr3F8Qn6",
  "key23": "3fLssWHgBuSFu4BGrNPgFECzy6Yqyg56Hi7g66RK1tx9KyWdEstN2iv6yRC2wPR6hwGhoMWKiehvWiPEfKcEUnYb",
  "key24": "4KvW31HknqyXt5WxohkZ8Z4cY6Q98HPKPGs7Xmrsp8h6WzcyGYcSj2Zus7fepwXzyd5XxrTxtsNKhhMEPdUqzuGE",
  "key25": "5zDCMxJpi3bAbPMqrg3vW8cSFALFwo4hy9qJ4gjV7pzWUqXVNp2oormnMEz1CfxkuHTB9agnDRCoyzgJCSyKXBW1"
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
