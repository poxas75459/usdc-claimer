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
    "ijL4Sdq6pZKdLm8vbwN5yimo3WDnyzCffUkGiuRQoHDwtUxXnKaziTHxRZd5PT85dikyLMeWmR79HtNogbZFzro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TjN7riT1ECfY3rNb7GvSzXDDcJJXABAV9PVrQwZH9CpigQgz3qEvDFCmf9LUceTykpPCz2rGYvkToMHLgrN5vE4",
  "key1": "61j1mHvZ4DVqQNjSBs9Vwyrkwzo5zjU3r77dsTrEGmwjaPBtcFSVq7RAw9mmzgJTLBEkTV3xM3V9qwhDjrsM4aLr",
  "key2": "2kgNr2tvxvQMBxbvqB6pVTDTyMFKZrAJFveffvosBuybu2zFKuQvzc5bJg2vzcGUJmWCdeBCKUbcDzx6CwjeZHCq",
  "key3": "4Aa7UnQv3UvMp1R2XKhvzivMEQVaw1GR3KLQkfm83Az3xpFggRzMqNWKKjLuFPxePs1LTdXrxJ53ESWSf8cKJYxq",
  "key4": "DoCVEpmVY8vjGhZAGGvSWoP7g6tKY8TWJCySNnk4o84QEafkWznzfGW8abN1fwuTSFQHp4WJBDZGSF8yLdCbmgE",
  "key5": "cfSF2kDdkro8Q2iJetafCC8insT71yofrnnqLfPXgPhXVYnqc6XkU9nkTMaxc9FFCkL2ntm5V9DseS9fDUX7suj",
  "key6": "4na9hc2xTXjW3NooHVQWZjSj1defNhwf22v3giuVEkhwJemb74GEjjBK7XHwRjmVK3ZWKiztvTs11jK16b6vEBgy",
  "key7": "3eR7XRtterCFAAgammeMg5adbCwm1XygUemJZ5897oHFku2jFBgXFTXTau9MHgdVyJB5UXSP5vgR8CU3nuoRAC7s",
  "key8": "3akoqfRfGNdNE8RLb6PK318wazgxPgh8Sb4yLxHEQ8jckKKLhcFdBZ9my3hPPqywd4w6AzobVK5aQZsn1RuFXyeW",
  "key9": "5CMDzicvDGQYQno3CsZDx9sGEhZ2A9un3uyckwAbnQHHcXjseygSoDft6V85iZXhFL9CokZZcoKZwUyBDcZz3zjK",
  "key10": "2JmuqiRDYBQFrfbyQcwzmSRbvksZmQL2uMdH88Sw1gXjUzP1FsYG2EVrgu7L1SCmFPEqSK6KkDUDeoByop6xuzdn",
  "key11": "3ot4JdngwjuWszRnx3aMKKEbJkqGnoeivFk3NGr8es8rtPuYxEPzZP8dwh8iMBjqqbd1sT8UXrA3LcpE8azsZqPs",
  "key12": "3puVouhghzwfhtaJJB2pW4sKfkMB2RczcanaEgy7f1CKo6zsoQTD2B6RwYUsBg79jcBJwwDcFFsjhHk2F44Gj4Fn",
  "key13": "4bawdkHTdCrBXBBjf6375hNQBNgWwafV54ftkNnmaHAK32EdUPZTpR7UijucxEEduwSHvuWN2p6y2RCdXz4m7BWz",
  "key14": "47JNaPUEgFqHY9oD4Hp7DPb7JiuiVojS36g8JQTcJPmizHGsXjKXwNjXSxRjs4qMjhbueRBnNwWb3GHAvwNHtxxN",
  "key15": "563oAUN6chqhHjo3rn5oeD22YnUU9Qf1Y1RJjcwdc4t7yd6E5yZM1RBHgZMNmE1JuVXhaSYws4pQBajAcjDSiufn",
  "key16": "4d8Kyr1yXkqt3RotZ4Uus15uYHMYoZ7Hz7ws4WL84CSM8b32Cbu6jbC7ck9VkPBsLwumGWEUD8hsbbyxSmMH2G2m",
  "key17": "XAcV1GED6onxVFPoLjzzN98jqphmq7rz1gUeZ4gb46SQ3Me5vR5D4nB4GRmzSeEVhH2T8BMNCa8QiQmMEqmDmqk",
  "key18": "7eUnNJBPzDPuCBMp9K3E42Go1SwpfCQuJzvN1pf8bGrwcBQrvEh4HwkcVZPMJrdQ4b66Ye5vXJjiZPhXhvBbSYn",
  "key19": "27jQHAw2Cgch6MD7ZUDFFsBRbkFJbeSQ24cq1qgQ2n5ekydQZcnEc1xTTjf9W5fDWYRiVkFVQTqxvMq4jimaEAHz",
  "key20": "3P4KXDEjo9JoyJo5T64iGSjWekFR3NcqMKEXEC6v1yAdp3TuFeRFDh6wFHUwrJevUAeJYwmoYnHGTyBhwJWk9Xk8",
  "key21": "z8BZ7yLa3j8vZPhRPEKdkbJnQz4vm9a6WpwVAuXBMuvy7YQdaSxiG65nGScrxeEWmW4YorqyLXZRPD5sWv2BxyK",
  "key22": "5fBT1XHz3KpX9vzJ6q8ezxffft79XhcdH7EdTVBr7knZgTifFVerR8zcyDuxXPhk4bbczdNdbB2j9cZkFYcmEwyA",
  "key23": "5FK4Mz8QqSVZNZQ1k5AN8CtWPU9mRXbdQLiScYTuVWcvsjYfvndtL93Q7jj4rZcBS6LPEsRKdTac1A27zBDWZLQK",
  "key24": "mF4rmyNi1BJiWsvyeZpX1Bk5CesiCURH7bxo1q1awRtLP4zhP3NceH8jNvr79nPjfzLQCoH4SJ1r44xXNAdSTEx",
  "key25": "4nSBaBswieSV7YWi1oJkr9xHR9p7vLVrGnUDVjzhNEjaVyhcqJvNnW6j3gvTK1MiNnmy4Wsn3wJ174vNYvwWVUQ2",
  "key26": "37p5nv4ifjcxB2D8PnB4FSwHzEEJKaDNovYdmobHjSuHxHnubef1D2WvM48cCTtMVV888r4zTYcGe9QEtuWcJJFr",
  "key27": "22WFmLbN9pAMbAS7wYv77jxBmKHC9AQSvCH5ae74LjsMJwKhT68MRC42hkekRBhTiXqPHHA4dKw2j6NcC8MDVQ77",
  "key28": "id9HpySEz5nGRzWKzBQqj8CsyS7KBfuv2TnL4bvy1KM6Q7eHnjR34yBCqJUyUaoD8t2L3UQR3Y6F5iuV6MsuXtt",
  "key29": "L6XoEh1MLJ1ZPJ9a7Pwd4kfm9aXYGhSeWWrRzxxmTcTVKFRZZUbip6joNFzRYG4wnnauaRY32vAJHbm1Pk2MFG3",
  "key30": "UjAqyiQnkVaQiXXM1Uf6mGu1EH9RiGmQSZ6tPC5r8qP7ExycsPL9RCybka4BzyEsWwHWNNKuYNCQxxWpfrsAkZE",
  "key31": "4oXHzsbEoiLLejLu5UNk1wo5YBK1F4Hkhb7aE4FsQ8kCcS3gUMbZfmCEX9P3zVd6ErRGEAc8GRPbsRGXFccujF9Y",
  "key32": "2KqpdHGtuTSySsnx7q4xxG8wNbFWFtk81tZPqooYDHYuuUqdMC4tXuPiotVxNv6XxLU3QHVjaR8k5WFLQEQ3g98J",
  "key33": "2FKVB93CNyvhLnTYXrGeDidZx271diXzpxWb9f3hJj9XVNE671LhRVcfUax3cae2xk6kybzFCTNNmNstncFRxakw",
  "key34": "mp2b93jBMSQd7tp8BCt75EABvgAsY8k1sjm4KndxRfis4PakEW268b2oxphztN1jFotcksZbYyFVK9BnLiWLBCt"
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
