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
    "3pvzwqHmNcsAaHQWbBf9qZrrcGUusQsAbsmEsJuFGWUxibPynRaeCuRJgPfhb7hRTvTvGfadD4haJ9d9oPk9QwkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UEjAfSgjUvhTWRm31kCuQ3HBbU1XHeU8uErumskT6wmHpFGP1SX82SjAvQGq9Tc3qzidzmP5j3jqKmEttumQFuL",
  "key1": "3b2Bm2iQkKLZfkgKrvXYYgxUX8pZeLbDq84rZdkNYRD9xguRdqn2qRvtN2bAXXZBAySuiXWysvbHXeUAGVXeGZg8",
  "key2": "3UWy7N8Xc4jJdNJ1LijA8Lnx61khyseYLwjfe9Hts8YQJJWqkvztCDDUBJjWGUdxFoyq9dUPBpQBhwo9EZho4Pki",
  "key3": "5NE2CCJFRg5387LLySNTXpVnUAGer8iq95m75Q9jXc51K1fLL1a83S3NLn4KkEnJUjSEnx28dLPxJ5XbmmAzsros",
  "key4": "bY5a2DBHmLFzy4NXKvH4JdW15jG84DyL2fREik2rA3C3yeiiPTPQuVXme9cH1KxFecMwep6QH9wQnsbQJgi9kfw",
  "key5": "5dxTDdthdw1oQYgAh4PRYACTTX3dm5zVxjiQA77PK6TsEgLfrNhioS7tCFutgirXf57estaGEw4dHhRS9zYPu1fb",
  "key6": "3udPRVNH6Dexh1hCepRcXTCwMckuB2VAQdUL7X4KciVw4YUo8i1GAvvmnCj2ZQ2xc2KSSLCNhdUsfxZJkUEQyae",
  "key7": "2SNHQHY6sZqdR8L7fLQj8BmFZP8fkVWW47ujrwTL5tpBu9wrJNwX6PnP7CAk599unDRJw8a7BeAcfBe2wejBmn2o",
  "key8": "5fenPPp454BFK2cdCwV3kMzhWwjf833p2j7cb37dmADWwzUweazAZUwaAbaCHjPt6vVpjN8eNSjJkYCD7xRxBRji",
  "key9": "YDGNtUedgtoUncqPQq5LGzznMuNNBFC9R69Rbi8MCjp1FJunQzevDdKWzAdyLxHQsQfrWsMTTqaagXUUbMSZJ1U",
  "key10": "4pinr3Tvc1J5AQBKPQXVDW75bVA57VBR6QyfC4g4BCXLW659UyuMqGbZRyD491RVawY93Jv3K5xmihY7uXnFiDrP",
  "key11": "3vFByvtghkqvpT1kQnsAvxZcQHY8iNLxQ5ZUidbeUUcEs4amHQZVH79BTM1SEbWtoJwkSvAZ8XjxEpP3TV7kWze4",
  "key12": "tR3BDSL1JsXfAU9sVQDRWxoVvH4ysQa1tYFirgmzbGq7ynwucfqxUwqYEaTyQnn5R6xsZ4StHhhaMRAXMgMyd6W",
  "key13": "2nvR52Gp78KJ8jLFzYiG8oktTVtLjS1tEZbDJHJWScqxZxW3PVu33M8HU1DBgHDZf4cFZb7uiiTNdq2VX23MUkWE",
  "key14": "5Wawxypdwe2g9gJb6VsML4CsDUZ1v6vs1Y9FG8smPyBKnxXjmD7HJ1VjAZg8qhugSR3zK2TxFJAHmvprocjrndmN",
  "key15": "5MUbJAQuX1Z6EwoqLuaTq7LaFEpGD1Q82LniXuqinTfvqtU4XDnrNY7ogfx3i7u9sCMdYNCFN4zCTTexLUUjKSit",
  "key16": "4M1v9fyEFQAFCKidRy8ibxuTd4ycb8Yir3xxpwUw9NcCngY2GGYZJRJGu46gCsNjkb2mHWJ1Y48isyivCyrKgwn8",
  "key17": "4NcMTH4WhsGwEaUumjAxJ9PRof4DvPJ6BcDjEgQvCdwpmcGaZbYJyPxSuLMPPD3Ugu5Y311yhTBbAXPEtie8XnfY",
  "key18": "4eZUicenbPbCoxFhT52frx2MoSKBgzxwWgq1hSreVzcyS8j1ydNhY9qxkmpfSB3w3AQLkvxN7xdQ1HnB9H7DZRSk",
  "key19": "4fZE2DEyeKoXkbdxvv8pi1YhpV4DViuK4WADV2WddYFxNMvz7noAHfADRufJth2Y6ivrbjduhtJe5izERY7vibo4",
  "key20": "3Ui5Vfs9zwurwnuZQrgoQf4Hb11gySKaq1czh9bumwxqHziZKNdk7Z3Wsd37wjk9VJEVF6Dc7Esavequs1GHtp77",
  "key21": "45QBRkdjdxqmRHvS7z5hXSvz41LP3gUHeDTnGoUak6nkMiBBMdjrTqAjW6C92QX1fnwFm1erjnZaBW7xKva9PHpk",
  "key22": "4jcCSej9AtXTc4fNT3ntMSbKW4w5oa8D4ae7x9g44tHHrYqFubdm4UFPwvPvmBAK6MXC4AAbGXaTsr91hSg5sAzj",
  "key23": "5xtvCHfGUyFUzsKyBnHBRe2r2zFkyAK5z9s8TDsCq8yDE52KthbzJsPYR6o9949MyQkqnsHAAGFuW2KQtCNorKnD",
  "key24": "3CkuZdzmtoj7uZ6J33ZL1PjFNHnE6JQ1mmzr7BcnrjHEaX658GaX8jr6kzGDdVuuVovyDZ4UANJC2tBNdV6xPqMB",
  "key25": "4p88uVbstjhu6E1v5VkfqF8ijJT8ozcJLwUwAJcDU7vwn7iuD2bvjtuXmsn4pY8ePgDpS1wt9MJCjR1LThFEcEAn",
  "key26": "5ZkNhyU4D6PMjqwgL6XYFpkAcaVZ7e4Ta7FcMJaakUDLKgUAwMoGPwxsCGJy4oFu84GmWgCdZfFRAE6L78ZsDqke",
  "key27": "6L8wW1iq5aKbufGaMvYbgyEpGLoC1B6M97fbWmC4cqdg5HyxnuccodAJfiJLJbsnE3zjykiXhnYzoCFprQVfsBg",
  "key28": "2n8KAjYcaPy3LKg15AQtEjv7i9W8BeKh9fKQREnwNfQG5qiueHJBKLtJR1PhzSh9qLXhip7ZPp2eg2NUemtKeQ6n",
  "key29": "cySSvh4utkhxj13PyhUmsSum8QAeDu9XYFdhmPdWHedBbqrJd8MfPG28eewMT85fEYg9sfXhyYinoDtq17RuEP3",
  "key30": "57yLME3NBPy6H55WyVz3VnNhGC2TAUPgZ2kVZbVRNVMqKZpXva1ytEe2DQCxxVypJ4kkSEzDGV5Kpo2JYzyHfoMe"
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
