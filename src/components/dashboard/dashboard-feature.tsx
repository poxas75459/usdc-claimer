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
    "Kj7mwBRjGAxtwVPVVZXFKtDyFad6Lp5wJYFqzQEsivBZQTg5cfZ8kHCSdPbYSD5cdZ2CwqC289uUrD9UBmQbC39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hu9JfqPzA9epCDBwj2neeDjewCsYFLApkN33joyRaPJAunzmn1QLTH9fKSdHFTdKgWsjiohYU5fzfSxAQtoNB9F",
  "key1": "2rKbH7PeeKC92Zr9eE8TmMkDLppsJqu98zpixm2VFvGxRj2F7MR6Shw5rYve7Yh7GJ67C6MAS2g2XmZMqp9tAojw",
  "key2": "2A3DGkhnwzTGEwFHUuuEau1TkginCA2hkAqacVeFKcumgTXDPCk6uVr1FdFDpvk3za31e9FacV2UBNGso9ndb1yw",
  "key3": "HYD5PVbXUq7FKztVW2H6EQxH1UQuGDtm8iM6S2NpizbKUZyep3iKxyLuj1NnBXhoQVkdfbDEq3ngg7VtjHYGpWh",
  "key4": "3qWGJMXuSEswrAiae9ARaUnuZehdCeEMP9WkqE6XJrdG2q5vvu7qisYGMKj2DbcrmiEX4anhcz6V5tYVZN4bfgVJ",
  "key5": "4hmkhupS1UdGRjMq74esnZDaBcopBsXnJ4pYN4QzsMcAdyr8voMs6tjY4GaXavDDjBzZdUBxYwx3QE65QqMZyGMB",
  "key6": "vzVL84dYEKFC6DoPgqKFUsibntv5GSwoNLPKjEJgdnCHBzvrNurB9dtbAFReTbFu5GaJQVs5x8DfZZSbHtK6WUD",
  "key7": "43TmBpYwHqXKonYpkDm5A3MF7PyiV8AXVsuQA8Yu2w6nYVbCHpj6BJiWhnvuuZFdWce96bQNDJdjvo3vT5TNi9Bh",
  "key8": "5xC7QGFcLHpM938efjZRis6cTjSjjvMVMRq7eLT9wCLA3wMxEkTQFRyS96UJJegZsqrQqxBxcRLAiVPgvkC2owd3",
  "key9": "EcmdocTMEAxSESnyq47SwTwZtEK85txb1k9xyP84W85Pvmbh3Rk8rmeBvPuG3mm6Z9J7kjUkFhbeDshboP5PXu9",
  "key10": "5T18vGzd9iZukFY5NztV16ERhRngoMX1PohoWZrgfPW1Eg5zk5A3THqjQgZxLHWq2PtSYp1BJmMrDC3iqqey1Bpi",
  "key11": "3c37GmFMvnBSYHec2ftr37uUXwszYMvvGs3z7GDGUSzVB2uGArjvPSQhrMJ8kYkyjQYL3oXe8JMry35A3oXcwL8C",
  "key12": "5njRn14bb4c2cTuMFWnw31Q3J1ru48JicUeBZGFtEAW4eaa527ToHeuVefcRUaMp64dcR91rRVEKQvaeYqNu7S21",
  "key13": "53a3HbonLy5q6h7WAX5g9BR2ZfCniZNXiZP2axgBzgVLowEAQXNoNUfUrHHv4tHjifGqkAyrUcSiSMNdEqsF9uUZ",
  "key14": "3RaQxTJHQprfsDoKTb3JPzp3BjeZTS3SRqvKi1MRkcTx1FkRAZY33wDikkgTYcYPkgvKqNx9ZK8B5a8fm8sGUZS1",
  "key15": "aUjkmLX2NJ3AdNeyLdfMHjcPCQvi1Jmn14b268WF4Yks4smXZvqmYE75Q5EyQN5gqajV1LqbbLR2SzYXcJVQMG3",
  "key16": "36EVcuT1xG9VapDi8FEsr2reSFgKzahwuLC13D6W5xCg4ta5DrDjyyvGeXRpx3Js3Ya6rFo6xFdURv1taT5tAYpN",
  "key17": "3xqkGwMQ638rsk9WHpabsJu3bPp51iToMNA6e7zqez7NV6Sk4fAQMTX9CsErvEAg5RZqqYaHfWy8chJLW4RqGV9H",
  "key18": "5GEGgEXinHNScWN4xgcGX3truxvqKaF2QiApmxJD8mx5ceBNAXcBhqQCr9EXVDHj38Hf5RbXDz9FifVepn7FyMYF",
  "key19": "4viyfZgwz8trhFMAGiFvqrbbJVpq7g47E9EyUmGEnmdJVjrxjPG9d2EwMtSrkDWFZFrTFWDd4ms5t3WHV5cdQCoC",
  "key20": "4q6XKwUHWKnPLuA2MeprUPMbyNhmPugpXVD6F1EeuYKiwen43KJzot5A9spHh44RAEE5X8jcuiLFkMxoMaEktwFk",
  "key21": "4iGUeGzkcCgEv7jQCyaCqjr3CUB2rmADLyinwgRckPSTPaLo56JzDsP5i38j7mFE4RKni4sE4WaZFR7yQmmsRAWr",
  "key22": "4p8SWWStxUzKku1R31JcvFLTQkB3YkTR61kzY5gp6uLSkcdSJDotnugEpbvFxbbNTgwrQFduKXKxTtfj2XiTpL8c",
  "key23": "28qHRB4tKuczEven13T7cskZ9ebPxwJnG985RDCnkxBQyaFKg3XakfPxQLRyfNKsuEaJzdHDYtvwy2mJnfqMt5J8",
  "key24": "53NUE4gSxaJGervziN7qHBPqrS7YeFk9wkEMFWszSNayJbUgoziZnozV7zMmbDSihkKWRtCCpCdpUj6hUeutFwmd",
  "key25": "2vjLg1Fhn3oBbUxnP7EGLP8yjmnFzSWb2wWyyjTxuy7aYAJzaireq1maXEYqKUKKmhAw6riKybQgS887dwCvhVti",
  "key26": "4vkkKm8uknXxW6mQEcZdiydXupcAew8NHM7uF7RTsyazdasCm53M2KWkx4z8GEJDeVaVADguUzEhVShwYJa62aqw",
  "key27": "3Z9PXkDKsf9GLupZwHsPJtt2UG6ctirCncj2VazQ85USYW4tKREaydxGFqakC6svoE6TXG4PxVUMSiUtnbVs19sK",
  "key28": "CrqV4XvgHjvQp1RmiW3usJAk9sPCznq91HNvJcSFDWdGj6t9fBzPKpiHzRFjugg2MK8paTtUWHEmFruFH6ZUNJm",
  "key29": "3mjTxwiw1xmw2VNaAHkMqpj9a4xPzFPMvpPYJF2GogWqRVxUyGzzBzBmiNorgDDC2qpzAPPAYBmp1tkxT5UUrnck",
  "key30": "5f9imHiKUCg9oNMEjm4i5sCD5TmP6XvVuK72jq19urcHRAKgA1yTqUyy16kcb9kVBZSTTZPFLjLTFWNjtoRrmbEm",
  "key31": "5A5EQcKQPf1NVAm7pYWHkHbg9PQ82sC894Y977cqueWXBYNKT4JuBn3m36XNkUKoXqag3NoSyyFMRBsxCuLsktf2",
  "key32": "3vBsDhkxy5Li5q5h2sNjo9sKLCVmUMQsWT3ZSxHJfss8BSE1eBhMoUUYKZSzCL1KJous7hc6zmE5FyyakxojzH8H",
  "key33": "53gLjxTDNE6MaHfMd7U1szixDURo6uXnTBmGuHoCi2eHgwpAXHXPUTCLHDm7S3m4q7PUSch5SGbpPFSubUFFp3ES",
  "key34": "3qGNRetwzF115V74hrKTRjAqZFxse4YFVqr2AwdpdY2zFPypkQjCnVjJttbkVVSoNUVWFia8keCMiGAUYSvvouTK",
  "key35": "538jdtny9AdMrQEZfMnVGk8ggLedSeuLurUYQAXf2povsxLXxkQxwKyqpyVFufpTPKvN2Vi6NZvEQYQFSHEdV6Hr",
  "key36": "2DX7oeCwNQDEw8B5ZHDDdkaXuRxNM7ucRrSUjbpDc29nW4ACe3GVaLh6gqrZ3n8Wh73upYPsfvYTqoF1m5Dbt3ms",
  "key37": "3i3oXcEhhF8ugw7byD2oPNrUsxRsnJCEJySzNeVFURpAzg2DXL3d3QyFVi5JiDhuyCWxy9LNuLqN9DdhZ88tETgW",
  "key38": "4XoWZVKpQTKYVu4zemrdmEPkjHoKXJgEWJiqxdQJhqJkrk3YPvCh1wT44xsqVbkvQmgqwssqBJQth2zgPEPZmCYs",
  "key39": "3pdNsbN4yhdBPGFgMyVs88jyAKN3EFi6QN5KoCcG71MQSqGvggR9UuDCvF8fthDK4wpmkhKwg6frdr4XqhuBcWLM"
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
