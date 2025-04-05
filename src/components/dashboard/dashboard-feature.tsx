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
    "3JpSHTwhmoyUFwWpuu8GkwvvTEHPuQXwDBuZX5ouwLABYCkXwdThg1dTMUf5gjPK7xYJjR15wdZb9EWnbSTZTr2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v932c1wR4QJcWyto4jnj69Ra6sGvWpZxRvH9r79rFexaVr2uq12ZgLnjsvcDdC6b2ShZ4n8X5nqyCCitaJthg5e",
  "key1": "4ACZwN9XxDvN2x8BfgkqKVu97yaKauqU6dQ9S5V8zoqqCTk16MoQTYfzjj3i1QJaHzjohUJorYELiJLSnkvMK4Fz",
  "key2": "54vrWTTNmucn76CDFZE4C23vSUfrypKz7c41GK2vRk8D9QcPTptwpAzP3P4pUyboHS2ddY9VqbYujQhRyZsQjJSW",
  "key3": "3Xkup6KGrU5NXfXnDj7kFKD7grXU2j4RnPN2aGHUtPBK5E13MWShgJUZizhtfn9GqFFvdB1NAxYMoXw27n2WoThv",
  "key4": "5z1qeGZCVjWQ483Xbo6fKFt6uYpinPDW8sRZPmYw8WB7gRyMuw3D6do3x5HHTZv7A4L8NyTiMXCv2xY5gFogR2G6",
  "key5": "3De42KqLTHahogpKM3HeQTLcDs9JdsAJhJHDcFNsmjF1oLRHctCia7Fb6qDQNranqQJ3NBeHPo9SYfPQ6yT2CJJZ",
  "key6": "41GKn4hP345RAuVtPZjSkKCCdDreNchuExCch8KAmAVhGyyZYhxLqAqKTGj37HbKRknCTH69feCmHB8ByTx8Zzzq",
  "key7": "5HJmey3RZrprqAJGBYkT9YYat2ucKqAzjtQc48r2avXqRP5Ae4zarLYrX9ziqDs2xMdbxV1GHpWks2UXbNTPnyFk",
  "key8": "W2GmEdMgMN6aop4YSeANYMeRvpzSMTL31oEUE5k6p6UbfZQM6bz7SwxSrFHQR6zVUULkVTvrAfbwRkeFqQVm5CB",
  "key9": "3H65YPRaFKLjq2eGGyT2YdZ67D4rseetQZCj5Hx6axdxmZE5XpfQ2uQt8t6r5RX2QzgbzSHVaMboSDGxzMBok1tM",
  "key10": "2snVRZJ8eTrdLS2dRhvjj7QNXTjBDV9F3fBbfkDgyFXbL2mjzyJ2FekgU2XVFMKLaayXeuzK712QmSLvDv8k6VkY",
  "key11": "4K1aLciCk1meKz4oPNvLYK1QhChJtTPeGRmpBzp1uwWyd45J1WwkYNYF3cZuoHMjPoT3fMhHGMH7dtaV5DeWSY7W",
  "key12": "58GSRs6AQ9MNFxdGyMvhbA81tRfs42uu1Yogv6X4H7CGboHHfmbW8nnL2GU6BCjXZYgmqbeTrzEuZa7B82ueJ18i",
  "key13": "31yZGh81TLL3aZMqK5GihCnpZtmDscP2WizknH6hvwgjRsdrYQi5oNuqbZ3NjupJqZMhESEoe5ivSuzKKxBZaaD1",
  "key14": "PXKH9xL3SKkjfLQ5kANz7ir1MCAD6jpMmHV158otG7tqcwYESyqn17hMQx4C6xW43Mo67pSzZFE3RWWFdtjixBc",
  "key15": "X7JfQscb2njmKiHHfLqVNxHnQcEX5u8rskhMgZcQP6joKKN7B9eu66yKS4ottA8ZNVfJk44n4BfPmh2KYXK9Zu5",
  "key16": "3CceFuhfq9bTRjKTywP47S6qQvEUpSYmTSLDkuuN6Um19ZCF8wrSuUzDaB7pWcqch56L45VThqem9sakUwn1choF",
  "key17": "5zbN8km63HS2bq6woZX9RfdBWHb9EdfHrM9UjcnFUJqAcW6hw8HrgjMhQC8oXSV3HDUUDrSAWjaptN3efn4kXacp",
  "key18": "3wrVp6m8hfc8uCpWKZkvWHG2xsWyh2mz1yJcad1N7M7mrYZCmHvDoD7VjJe5TN8EdbogeJNpmXoRpnhQyYuF516V",
  "key19": "3isSUp1dSVFL43qkWTCaxww2MeMwLmCaUoMEXtmo6egV8UssiABV6Q2gEmPTiiD25nCtFGUubwGqVFofww8j94ev",
  "key20": "66utYrvaUWKyftTfcKxZ6BEAEYncBbZ2ki5YgMxcsqVvBSLhaQ6xKoscVKZzCRem4Gm94zs8DBWiGzsJawPHom9G",
  "key21": "5tUvvhPL4y5PT4EYsEtoA7JhMnXBNTB4iQACvaMSrapWzwoRS2vLcWA8T4hje4pU1GXyViVWBJgPbjvoJL8H59qj",
  "key22": "4MX82r4oPCQf7fUdyFTU8ZvNdgeQ1scbJfrmAUVkrt16bXnXaX3UkE7kWQ1nvEg6jMYRrmvAhXGHfAvqVSrUbPEA",
  "key23": "3jee93XHdsfnWyRrmqqD8TKFBjpxAcbuzwKTH4Uu8v2ZRNvnZVC4cXUgFoYKDSvDf7qCss6VDiHnaPuyJbT35xLE",
  "key24": "3Kb3ZVECRG5Ty3hs7uQJgWRrcMivwd9HugUWGMKjCvbtrgFyYcQwYbyTkzGkaVndUSS7vUhMY6eLRB6rEKv1Uca9",
  "key25": "3yAqjMefFNySp8pWnNUvCdibQcTuo5gnLSvYwr3yb6PKYLY3R46VVqo75JT3Shmz91Mj5FjXvvuQjiVoFtLAA279",
  "key26": "23Hfhv1MU67jjZC4QmX8qMswZbzG8q1R39jEu9GdGWbU3TqoGjEydrisZWNoV7seq5i6ydh3vK4V9rNe2yGp17tv",
  "key27": "2NFsVgZdz3G3jGfhns9mWcAwxiqE6irwEwdBveuT1BXAHhpFsJQYxb6K5L73ofQkw4bREvG7sA2bmzVDB5TQseLM",
  "key28": "1g4iFhA4ETmXzB3dpMJnwLjXnMgnCjEkRDqZ4nwYav4UkwKxgVp5vWhk2yuSLGeKAfATQ7dK2mKX5Tpi8sUBXNg",
  "key29": "34Hi8g4maVM5XpnieH32skZcisDaDHVW6fqCWvwmhjcqLHRH2c11dxQWq6eEcwhj1RJwBTJLRNQqbz6KzMZQs3SQ",
  "key30": "2XueBQ7W6Wfm6BKRSV8EcfL3N5ujE1jhHkATmCpYt4PZ9CPQfnq8aHfDbwGohsrVYeMQN9MhFTa7yFMy53dpDWb",
  "key31": "2G6eYgH2sjv6Jays3YYWS95YF9DZUdg4ZaLidNcXofbE1xhY9gsLNQojCKMnxQWwyb5U67EopmYxN7d7QC3GuCR8",
  "key32": "aaxUtB2uFQfHi4TNhdgbsj6sXQvXgxNPdfsdYHd2NB8NKdBKrJ63uCJq5guXzYP5R39G6vBn5hJbaTy8LYmfAtu",
  "key33": "5j1W95GuJRVUq7mYUKTyH717PvFe1vodNx7f46kbQwUehE1pAvYoDydEWdDx5eq86VJ8RFBadCw5K3q5k7UFvPht",
  "key34": "qHNsgFiBpimAXhAzhuLZ2A4DU9RNcnok2DBfuwzJt3BtWA4FpLc4cFJTUxZkzDWoDoodp6eceDRjo9cPy9ZerZA",
  "key35": "2uGTtu9E67xQ1pKkr2WdhPc45mvou1ThP7D5AUoUKYynFE4QQ3vCX9keMenKBivhb53ZqhRJWn8gAB196Ku6MkkY",
  "key36": "3sgFeCdKvFSVqxfZGC5KGeK7AC5aHMhMn2NpBuQunBuBJaCiALhTEwL8CQboEZ3F35jm2hZVgRjTy1PLSMuhb3kH",
  "key37": "4D5ihytSATbZ2ew3S7d5Cjt2LvsoswY3mJX3ymPUzyLNfQ6V6BDNQ2WhbBaYMZtXuNLo2MSAnKrNH9LkNsMWioDM",
  "key38": "3oWweWL3c7C8pok9NoB7qFbqGK8xsEFXxhhLEz5RNdJfR5JByB56WG5eA7KwDazGhEqzus3QZeok2M1XSBnygSze",
  "key39": "4ExvUK6SRaQbTgWPjXJAkFVgH2mseSd35bQV9fN4BsWFLhU4osifp9yaqf3yTMz3yHZczBgTiYuvRYKNsPERFHtR",
  "key40": "5wrA42yDFA4nwGwcVf2rV4eTE454UXYRCCbuDGbKf7qSBTmZrithvr66wj3Jo8eLRCdv8adbjc1Jd4oEEGX2r8z2",
  "key41": "4M8usNLZuoKNeQJ81TxdMFyeWujnXZwtesKJStniPnffobGgLmNXQpzu3aesmu7p9f15oB1TgdazDGfnuzfe5Qms",
  "key42": "4TGoKL4pQnUSjvpFEWXjxe6Ufm3YGZsJ4nhbKMNKbA7Lb2ncPJXjNXAgSybQf5AGMEXmxzFM77ysMS5qysdSyaKb",
  "key43": "2nduTabvDtcJ2C8NzLq78nPgrcXECRCEYhSHPnfLaf3SyJiV2mW8XfJjMbBbWQKmfwFbrGmpp24Ag5AkuWywpu2j",
  "key44": "49picbKaAAxYqH1qnBj7HdAEooT7LWeD6NftqRQ2Tu16DoRijPKGUP6iVJGYbT9gSANZiAnZa5EUqC9DGv1fpeCL",
  "key45": "yg1CibA5WddjMn7xxfggJthNwoM3bgCuGTRo1a24Ky1Z5YUquFEzWBaw4byT2ewymqGDNke7iqwcTXuViCcfhPm",
  "key46": "55dAr8k6Mg6MWBRkwjgwqAKvSp2dzjey5exTD8Xx5PJhfi3hpN7kvyALxAyCkYEMobK4gEinneNEwLzNM9TwdWsA",
  "key47": "2JX3onApZsDJB4DmbyjgvfiRdGodJJFdPvdyB6w3EBpTpQNj3xMEYqfLt5YHujcon4cWU6ZmM7h4ewrpg3WRbR8D",
  "key48": "CsNSZr1uFMcvMB8gyUYvChzvNjrssALhZwEX2z7gtmdUYhEnxZFctyp8n1jj8gSe2qXHyXT7MhDTSB184PwhzH9"
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
