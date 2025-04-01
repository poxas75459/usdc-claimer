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
    "2e4T9hunMnUGX6FiAgH7jCzmMwDUGocLKeTJTzgVnhr1VHMK2HQu7no54mQog8raLDP2ZvEyENzWJhRkNvW4yYgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsRh9PfSj574fSk1EBs8oCR8jftmxmWpDBLtHaxtqAD3srD4ReFYeQa5dh13munWQiGGgyeojGFB3ie1SFPUauf",
  "key1": "2F73TGQQ2XJz9KCdZVrhTdYkFzir8h7nDe6xENrdDPP9YdmtT5PdCvipABkGTHALq4ruPTUdghLN4VsNTWzD82vo",
  "key2": "5d2Z2ws3n1tQX8ZMoR5nMUUfmBGMJSrvbazfX7BC56uMTYf9vTMgddJpGimZ8AY91tYknWZF9LmMQNrGCcwxWNPK",
  "key3": "31f7JeKkCYVVyyMRiaSTsPUyUmsLi4QgsfrFWAtSwUtzJjQVUE2g47e25dRuv7etoMRS9qUjsmVtMC7s4GSjjSCC",
  "key4": "5W8rvQ7EuktMuErYKNqSPNcPy5BMzh2Dxrp43TqTXvfWiQXc3aLCyqenhjZVzT2AeVZUZK3ESAJz1PnxvcsE7dnk",
  "key5": "3GM4kNQnoRquSjzaVpzqaPzwU5UD5oMmmAv77s2n8VJCTWHWCzCM2q34mpKxt7fut283TftABvXWg8Q9WYvN25B6",
  "key6": "5xQ5gUbRi8nLcKHSmANTu65DzTYAx4XY7KwHpssTVWNkf9gXvPivVvbbmma3Xkm5A5peyLwPPX1yZVxWs1qjGEgq",
  "key7": "58PzELrB5pQHw9JsGXxjS8zAD8FQDHyXDTswho3shLRxnXk33eTs1oNyRcQostMEe7gPXT8VbFjMRJePvTpaLbhi",
  "key8": "3fENuWMRQKecNNPgwnFceiskvoy8TyMEXASmWwc1erJAshrfD6XAYmmejr2Ptcty5ZCWJZsdeCT939hq6yGVcs1a",
  "key9": "3xTwQgj7XBZtnMHg1Nr22cgZ1kai6cCULKpT4dDs4j5K97ed4cQFMGp2P4g4wRsTkC85hNBtGYZwJt5Aq9mFKgqY",
  "key10": "4m3KMAvtzemVa5gLc7RzzgV8Ee7YsSqZNKmPif3AKBh3f6FCwMTN9Jg6xk9yF1FUuVYF22o42x1ULn29xoynYWhP",
  "key11": "NFAUFeHuK7BayodPj8D3iWzGrZHfY9qdX8D2R9qg9djSiTGc7EWWcRgS4ihfNTF4iYdp4ZNWgnhDyMMf9xRfie5",
  "key12": "38BR8AJQ3AjJfbcK62jbrzofh1NZLtMwMmyKTGNjjs9ixZ8YG61i7sThAuqJuWgUdnzjDiei8fWibXvgqmTgDXoq",
  "key13": "3HSKpYGrF7aS6br3DqZw4mQLXf4eXrpPzhKZm78CJVTftdDc5ympXYuXDxSnxB5f9ce8zGjPv7Rbzy9LBYFnoYEm",
  "key14": "sxnQTfvqbcZPreqmMCoaZn7NRbhiDRY2gXtgBa8nTozs2u9FKrAC53JeST9bWTkXJW94DjMTVg64W1Sw5x5pfm2",
  "key15": "3Pp4h1kpCn6aFB4PMwjtKVRS1dcRyvf3H4jfCRasExyPdWbX5xPZVjxdVL7FKv8WdJUfgkZVSLgNViqRGbPwEtYX",
  "key16": "5b5MRd8YoBTdgcJHD7ZMpPiWNSKjUevJCBNwT6sF9xtymm2kWMcvzRZX3m717yKqoJ8ogY3cWcDQowXeHX7HdvAV",
  "key17": "5z5VB3T7Q78zPyYDEkDcjzjG1Z4C5tyR9CUniBRE3RdUJqN9P564SdL91kWjSDyubR9SB2FQAZzgH3Z7raCWtZ6D",
  "key18": "647iK6wqonzrCcNtbJNLfXaoMNBKJXdE1j9qmhNBQiRzZiPXm4BzPRA72ryBTABX3xKrob1tKsM87UejnEaEdfnL",
  "key19": "1katJZPH8G3xnaMFjRCE83vLkJsPDo3tLr5dJuuW26XaKRCPHU7DT5NqAFKk68n8XBj7C6j7DaHKUr47EVUU9kz",
  "key20": "3DbN4KozZn27x7h4LxuTBHNcaedBjxDQXB2enf2DAdGSLUpiRZPkG3UBWwLuLHfeaZyS4h9jx7bSAQ8yB47Mjjgv",
  "key21": "522v81vmAQEmpdDyBdMAjbkdrNpBdAPb4XNjzamxSSqK9cyVsoYzt4XKYvrmYRjFRfoJtd8KnsPpSr9U59yWUPhH",
  "key22": "3JYbk46htzzRfuKHietaA1dtTnsba4wQMGau2EieQNYGtYFwnzyiaGyxNvzHpTPcpBUgytWhHgEpwGRUDMi9DTTr",
  "key23": "64MQRKtHxihJncS3JFYafqdrSKZaF8xJHjz1Z9D5RQurbyYSCWLevGjspViisLbBuxkkWoXNrLaJMMg7T1NcFCS2",
  "key24": "3AN2swkP4taE7L7MsHq425KjxGVguPrSuFV5vDkWAHp4A86wLE9q1ykZo8EECzKKfJotyBqP8t5BM74YaV5hmaht",
  "key25": "5YiogaoW9eKHfUErCDzhNoxA1EsQipmauHTiCgQrt3EhYDQzjwF9FK3XasGFCabjUvKg8gpnyxdL7CGYTuzkscmZ"
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
