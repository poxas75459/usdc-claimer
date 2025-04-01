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
    "5MQrsFH4JDXB3wWoD5zLTLqGDfrLjqk6WhmHFZHNXt5PE6hwNqn9nhrNcdXdg6WfvsL98D6ZfdL48FmztRBQ1XJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "416BWSJL6LFMzxpcjfr5ipsmxTfpm3CDy89GkZkTfufAop6FxJdAREm7qbvVhBQEz5LC2SdfjFAn1aqKjduxc35L",
  "key1": "2Fvt9TXRwvL8QydNx4APt24FZnDaX4UEL5BiD3qZnU81iaqKoCkUs8h3NhqCYH5MineFzC3LeRf7Yqk6PSJQFmUz",
  "key2": "3szhj4xANBiadN3JnSzjdYP4qmGKiBvbGXynfmg1sL6WQCwTBm8STfVYEn4nvuPkzqriD6E5yMWnPN81NwoKCsbp",
  "key3": "4pMBU2U3wJfwvM43vUhoRy7qDvgrEShKspNPU5hqvBsYesyRkMke4TXNaMbQPdN9cZrndYDxqW5eTwZTr3G2ufkd",
  "key4": "2U5f7Mw2XZNSUAiDn3VrNmvWPsC4iiJp5tXSfQJS6wZobPoTb71JtAkhak1g9HCfQ6c1co6ZnkSQN2yjkMDXkpCj",
  "key5": "C12TYqBEhe1vU3esqGWUqs7UkRwiyHimKXpGqek9y1F6nCNGwiCKvRe2HQZ7hWykjTY1QyaSWiTD2gHVp1F8Yvu",
  "key6": "9hrtS4YS8usWLc39vpyoBPzciDRTFA5N6mGuNSfDcbeYkyMo55e374nudgrWz6Wa2wfLLWbTGV4uUffL2j1VC8P",
  "key7": "RjfJAh33i1zQHWzae5i2V6UF9Djkc73AiPcLEjH5nbf59tZLEGjpEq9k5jam5LJnWtYu1JvezfT2rpuKdrGJVQs",
  "key8": "3g3DX3SwyfNKuaNYHxY2ATh65HSCjTkiWnqwutQWchDr6otybEwPbKQbyUfAb59iFQFkmD8fapxUVR1SDfpwwUSJ",
  "key9": "3stCApLEJ6XPuZgb25K4Rxe9qXk5vKmnuQeF1zeZLsCMoBR8oe8Dqn6eN4V6Cczn5afsToPbYaaETu5H5surWmZm",
  "key10": "4qCXGoQjpX5DusLqKXjgfRVC5iLWgPQk7TkvLqjyK5YfLbYLsgvQvMNpizYAbBvSXNgUSqPG6tsVPaAV2y5A8txR",
  "key11": "22dRqafJm8pRJFGQ5zuLRpjfokU5715HeocR5JBjxoZymJs5TKUJQ4uWuwkHUuP9CE4xQWDxzwVrhVdQSFPGdBza",
  "key12": "52L5tuug9GqckPW8aTGpvTgxQtHciWZfbCDM5XjVTw2pVH7BPLxoX47a7vEBocCV77347hL97jjYd7EaSqwvo7uC",
  "key13": "7WLu86LYkGjQkWnpyu8WyZKcPSEqPKz52X186j4r56FtM5J9KXGeL4JkG3zjMefsV5gc9ShUSfVN6yX6bzKWLUd",
  "key14": "98VgBm9KGxvBT3Pkgs82mH8e6Qx1wPweGDa1qM4eHwejc51H93KWqmHK4kNERzss6YodWe5xneoF69g1XB5Cpia",
  "key15": "4Mj8y1uW2sTVN347tNbHkjdipWqAC9R4m8cXnFg2SC3dkQQCGnDeebwBmsW1MJAbDWHXQux3YZUJiTCJMKQwQnsF",
  "key16": "43dDqXvnDJPCB4TdkCfCAVmqiPnwVraWPmop2ghKfpMAGtSfTzMCTpqgH52PYSnAzowGqYY5A4hvYuuKQYsNy7BJ",
  "key17": "5JDAKrWtRGGm7FqFKgXAPSogPFnbaf1pR6UraECMs2oTqBX5819zafi3vwV7eBR14kt5eg6f25UmR3zdLYzoDoqE",
  "key18": "5P85twktEetXrp3zZUTB5xS7dDkWQpm6nssTDDQwJqAmDAbsmVSUrceDdwPjRsUdEvmtvusEuxCfJsCP4tKBH1p",
  "key19": "5nVj7h9M4GP2KmV2fFjW7hARcrMc8DH4SiofgMkcYkJ2REsvWVRzqGunnWcwMgLpxvpy14h7VEA2cHGeoU6zT3yg",
  "key20": "2ocrtqyuqL224JmA1qeMS49EMPLPsBXHzVYue8iRzST7Vexc1XWL5K5ePPeK2m77CyBbKidRpxkVrE3nGwxvJEz5",
  "key21": "2tcKxYQWaw21h6smYCQgryYL3ZBaHqT1EgyrzzH7sUbx2Th2uRo3ENh75E3Dmy3ZwgY8PgA4NSBev8CV9qh4XnA2",
  "key22": "24tAN4kgZ6QVuRqqhAthtsiv59c5W78rnHpRAqbwx8RhE6fAN53R9u3XjF1Mo8UmAKUbYY4Qba4LcEesE41TBi2H",
  "key23": "dMtVjRVePTpR9e4eJw2CDrdBVgVdk4yQ1uiZd33jqjMcw6Faie8pySPBnse34v21Gp86cJCY67SbLh1zWyN4KHz",
  "key24": "3E8rnVqvBmYL9DPmFH61mZN4ChjkER749KwRMbSFSg33B8UD2GccET5oPK1kHFWXKSrR4iN71P3kxUdLxKzXfRAZ",
  "key25": "baRGaqsmew3HVTQop1q2mHD76gdPwMdARdVTq8KWzhmiFf5eseM7MsERfuLmFr7LKobinH3j9scrSZKTd2E5WYM",
  "key26": "5QFd7bGXxxkpzm6eUPZ3Kgranp3GudHuoezdmHDdEEEmAbNk9apWhGsvmn4Fw3LzQtvsbUSyEyDWTuqs4wurDvc2",
  "key27": "3ZG4Hx2owRfwY1KggnMqHh8GKcmeWYear1fPELtR6g9YBRrtYVDCZbGdzDzPD9emxhM526Ns46eUacn69SzxhmFu",
  "key28": "3wftaSTttEmbVH12ZChbLWxdbTw1jMEtK4nB8QHSuw3QGZiLsSCiCGRynGFhMosoBgLBEQ8eVGwHdTTjt1zRiXc2",
  "key29": "Q561MQPvKo5VYMfL8VF8NwdBCA6UDqKYVSydffUvCbz9z4onbwRoYbFxG9b8TnHqjvAVzGdVKPGfWfojGoBWP3h",
  "key30": "22rXx7rgHZfjtKixFZJdnCEjPTUCh7MhD5YnYwnEWSJzMh1MgJkZifPRzZNoo8ohFdE4hAGx3ThvNS41dVEJXS7v",
  "key31": "5CKPMQzHM6hyRkUeAReppEewonwpM3BUmnqejn9wYaJwDf1PCTmQcmAfvnmHLiDQsCDLL9Y7ktu812GbJeZPwJgc",
  "key32": "2hZdrzx5qu7Hwk21Wt2Fit85nSToUV9H2niDsERKK53oEaWc5mqBrqhs4D4KY9UrUEkwDMycAHFoGJUMPotbB9av",
  "key33": "66GHjUgvrEKebiErZ1KPaDaGhSXgyQN3AaCddzG1VeMPUAbf8n9mxjjdNtNPxreQYnNrkbqXiu1ucFgC9TVrqZdS",
  "key34": "49ojFjP78dGMYQX5ZxqwvXhze5oW6bZxc6D5n7VaB5NmZF7y7W2AucT2zxZfonpHUgGaAsFJAaCXMSZuysrKKCN3"
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
