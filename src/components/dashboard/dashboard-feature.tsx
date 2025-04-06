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
    "3JNi7quDmVwKJHBZ5cJW8Nfcgk6dV7wGWSLckQ4aAjKjJ2jqoDD3cvvQxzHh6LXXwcpu1expCN7KSZySR6EpPKRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1S8Mc7QofXG9uuXPtqHnHPUdLgUXA6boHFAc13g2rqozJmvqPPJAkKN4tDeBpU2de2EsYBdpvFjooAW92daRJB",
  "key1": "5DnWJCowUkKMWhiiq5H1EKdH5Cm2HQpe2s2UNLd6kZ1fgdLesRGxc1nCwZvXQPapWXqApMKeftBnvKsYiWXvkhmi",
  "key2": "33FSHcNabNsUfaCS2qX1Di4AMTFGmBETARMZNC3inJcCYrXjh4asUgUgJBw6m83SVreTMJLZCA4KNHnDH46mpVix",
  "key3": "39iMzCpU7XUUtWUztoN2g99Wk54SbVjudnhqZuHA3ZsC5EFWNHoTACvEFj8arTHoVk5brhRWrXimUocj2zdgvFS5",
  "key4": "5MjbCkRK8w7KULpJsMdhq57WXEbDoDuNYS1x61CtCSWAdMsdf248K12mhh2se6JWJBqbDfcWfxfPko5DVZt4hDtb",
  "key5": "3mBn3ZszfdVJjWS77sz34dCvV2swpAxftqWYZqdpu8BkrsV5sk5Kjh3bsueU4aUXizdnizWqWVDctYdKbMMw6NXY",
  "key6": "3MbpiFaiJuAtHS7GLsJZ5VoxZfrw9HSvvasU274jdUBNnKodmsJEvV6nTiLMrJwf25DEwdz9qv2uBsYqQQuQgeYf",
  "key7": "omQiVZwQnvDmqYDeh5UkkEAr2rFpGQEMRxtvvQWZLrzgyMCcRzgqzxRU82VXymR7Hw61LFTyJKhpywi4b1g7m6y",
  "key8": "iqjUkBde9K8vcBCY2SqGu8cxv3z3CMj5UTF8aiGG885uJiTXpcKHckaDsPe1L9ZZhk1pqh1X3jHUMotHyZ1dUij",
  "key9": "47yNApVfta3Wu77wsm2zkqumUhHYcbtS6z3q52BC4CywkteoWuyd5vHZ43gS79dJwXtqVs6NMGm944SujzpsobxJ",
  "key10": "2n2i3sVJ3yvpEN91i9YJsqoqAfMWsqyNfpQ1U1vPufXGCjnUKkiCEc1MxwU8YyU9hcxsMmabsuqzCGPnGmEgnSf5",
  "key11": "22dcvWRUUBE2vMBPwD6wYuMvEmkHcDHDQYso8xZauaHr9SN9EfWcHV4rGpSB3juFrKjpkHabrtuSYK3454ULYoFd",
  "key12": "5X6GYb7SsBTTRATiBThWi212NgmVdejk1keHREscRCi49cS9Xp9WuRGwyLBp9UqtDT2xMmFQ4vZ24igKwaGJsJTZ",
  "key13": "gqqNfeUyfKMGSGn2Ad4srsiPipQMNdTqjfskKYw6j3aCjBr9cyyEKM2uNrDYsnJoNdZAMrbdUfot873ZzuU8TKf",
  "key14": "5Afdczu2nocQn9GjF4cbkDFvh3xuRYXo8JGxdA36JeTLPQ6vSmsyasesHmR3UKwdqAFbs5cLGyHF7z7vPaZ2UoQT",
  "key15": "4ZZr3gDCw8eyb1aB1KvbF3ZJyHjYFAn4HoNNrtmzAyaHcrzhkRAkUv7rrjHWZJ62LLZdEZSECByP4CKXmjrGiE2a",
  "key16": "Tq2xQp2Dha9gTkkXM4Ut8hhMyWep1ixxtW6a1dq66bGYa9M6aYvqjcvSmCfnuPevJe4MKxCZopZZvBpLhG2VqUB",
  "key17": "673iQbPrBDKPMoC5eMz4J1o491N4cM8mJMzzxeS3KSQCkXA8i49cBmdJccfnjHTeKuQJyg7Kp88mBHfqASDJftc7",
  "key18": "Bfzx9jXDpRUv1TL8WEe1yYXPButTZ4fpZNZDjJ2jL8kSGsYjwsU7Sd5cvtNZxV4YCFvVHfKpMBXzvEdkQGUtiVa",
  "key19": "3JgV1RzL5MihiJoiBt3MxSYJK4xWYSwNchHjpzMuPTbmd3zhCoCcGbagFEkKRa4ssGzeRMd49gmjUnAuMuawSMsv",
  "key20": "SoeWrkvJRmx9zApHVptbehFn8WsUQiaKm2JCXFpoJtfD9YPg8emr7Mku1z9xU4ArdGoMgbsCyinvm5AqzsZ5wc8",
  "key21": "2wCWJoPLEtCheS4KNATTU76tt5YFykKyd3gbHE9jA4srvSaqE2aqkWFZJDqTmeGT9NScSSkM4tTjLvRJ6iemox8P",
  "key22": "31fLGdSQGsWTMLe1um5UNfGQJysBco1yqzKWhB81zC7n8HjtCgBKRFENPXpcgFqvbmVtsFqpEjMkqf2GCEaaGVWK",
  "key23": "5FwzGNeenCNt4WwKRaAYaxVRQ4NhQyMW4faopPzybXDhMrgyEBs73yiMoCBE5hnhFZjcGFkmQEusNV3pUuAX7fmV",
  "key24": "4hZ21i3fGoM2UkaLJx33C2SNDz8ghQkYWo1f8qw9LW9gtHizP3gjzGsrRXvFKAceozpGyKqQo1Fo3jRmRsavi8cE",
  "key25": "29iMQbggP6RwS2MGXeiSk6ut9SAocQ7a9JcAmrBDDLeHNwDDELFUpXzYJAJCST83rqzVdduhfTXXwYMPV4NPXGer",
  "key26": "hEJ4NHACNDAGptRZ27oZKLux2CEdSPzbdnSzLV2SSSKnKh25YS9C2xURexdR12ha1jjb3QoFJaJe6vczdvnt3zX",
  "key27": "64M3bm1axqPq5Yf73SDGuXJfZLT1rqruiatWMNt1YH5aCs8Ktmx8J32nQhbVfX7nGzBuLNdhgUZKRhxBiMZfm9c3",
  "key28": "4CMf8YzvXJrc4rfjHBBL1j5MYD6rUuuUTtCWyVzTRQT7Bm2zGU3TAFhkqejEaGyHBgFsc8RUyiqXBZ2ZwtDnyS4t"
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
