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
    "36CsyDpr6E4qpd61cMPEbZfsjzXCcmz7EERhiwX4wm7t7WcboobvXGAEwNShPKaV9VvZpTCBDBycBA91441DHccG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AGspYkdbutNTNNLXRFHwp1c1QvDdKkfvr7dvUHBjnTt7K7ny9iRSeE4bt8KPdEZ4QvLRtSeLL4JtcfSMqXryeo",
  "key1": "49ALVwj471SoN3HgUoYefDxiPrueMgG4QzdwocKoJ4wcgrGrnaJ8Ao46hN1KKbYbGwgoY3LvwKVKccM8kf3EgUSJ",
  "key2": "4jnrqEf9Zt8KdMDUdbUYF76YhU27xZCeTBtjUwaZgA3J3u52qy4okuztpn38BDSjGB9vZ4V1EXEpsZciasqf55Cj",
  "key3": "2sgN27w1oDm9qfSGa81TyQvd3umy2jpUMdjU2GuecbsbeKeFUWDTKPH48iWnxBa6UghdP8cPAynPCV18kB2Ljfhp",
  "key4": "2qRZHt8XukREr4NKgfAkJoiGAmRVsZzpJxf51DngCvCADMZKQqUWZf2YmdnoRgo981SBU7qe7rC9dR3Jg1CfnDzQ",
  "key5": "5Lw52UFwkPdhGSVeEqqZuQh1twS9KDyDXvgjUZGQEn6dVzDo1PW4BMLbffQmwSx3SffTaLMine9VtbDziKHc5191",
  "key6": "2wgsUfqun1DUNCogEZ9DmW4oVzm8nkazy4f1Ca62jiei124FKCjadYyeZRKi8G8r1RWJ7J1DJQUYHiA9DhQ92cjn",
  "key7": "4SL45B1yEWdCcUeNFFXyj2oTw2CooaMKkz9scHmD6opmMWPczjviUE6LZCbbVYBEx6bMg6vFZgbVWiZazRG19EUj",
  "key8": "5maZRGiXYiWEfBCLQW5YwQJcnZ5rjYCJ36h1yX8xRyhBTVAVUiTJbBB14Ziuaj4n5kbfNLewfGAC6PgQexD99NgU",
  "key9": "8Ch7Xq1Q5JLnkyT32B2hbhVocXf8u9PnLdEJjyXgBdDTKBMQpXRJTszeXqjVpEuQgFCgi4BpCPASFBvAUYE241y",
  "key10": "39ugY459xrhJQVvDfgEMWoGfeGLp4fGSC6dzD5u33NfyYUQVsP8dm5ssbkm9TqGLkY7DbBNuLYmSZdB3FhT8kmUs",
  "key11": "2zJninemY57xwTMM888jZhGZjcgwCRMLz8yoZJS6VXKCYVSK7MtVrfWH9qap9SRGwkmiLD824yqL1XGaWcWKeMuG",
  "key12": "2nSCt3jEX4QG2isWLf2i8s8egJxxYa2tZHWgXhHDZgsZ3kXyhGe1VNAonPMiSSBDg3Pewbt8jUuQfewc3MsWjE5Z",
  "key13": "6G8ZA1BrUtz4hEJ7QQ3vd145SANnZYxAMbN4W4i8XxGCAPEGWb3TY9L2yAmrv9VSj2KDP7X7QnWySujh48jVan8",
  "key14": "657hgaT7viNrjU8cUWd7TadLsHSe7JtCoSiN8AtS11eCsxMJq9WToDa1mHdYrNTF4YFH2TJCLKXKbJQarTvYDQsc",
  "key15": "4nrfgYaTnHajk1CoNk4EuuxafdHS1aCnqicp2dwcfpKKV76XLWDW5K9MZifJdCYeV5ZeUzyKo9DnpipYyfjw8Ros",
  "key16": "3nMCpUviAKERvQR9KHGYje5ASSskc5ZG8otsqxEcZFcnKVazQC7xCwhyZBkgHLUakeeATcF5EueQVsnUsirKfTm9",
  "key17": "2y3n6pC38o6HxUnECrPzb7qATfwDHhEP3j8SUG3uqsFVZU2e26a9595xZbX7exV9BpKR2P9dAeoFR3fTFkJc8d44",
  "key18": "4nWsiJAfzGBU8ADK31bnapwWKutLrGrJjcRKRQifWfXRQ5ViEkBEuGepqsuM4XfGwUKXBR9GpBMGjNWzGMHucvyT",
  "key19": "24VFhADQTrqm5D7K2zKcH9DbjbBfYeCAiwb1d37kcqcDeqv6eXhPwVsw4aJ9ANZudabsT6SNeUPXu22skq8pBDLH",
  "key20": "4njekwiwZimeQVimb8kKwfX6DmHiHgSLYwYvcbffPRvwvFUyCgHx2YyBbvrWCAPm9xQgX6bnwowbWUFtnhuw6Z9o",
  "key21": "2MV6qzsgzrB67kofts1hBpc6nM9atxgvRKfVkBLxi88JyRFmuNDJaDu4RgvjYBXwzhiuJDUH9QdaJcj4JMuUaksV",
  "key22": "4CV7CLkEzpepZBegaF6i417Wsnyy9NTtfbiXvGqyFEnbZMmAKF5m2eeXZD1MaGkXgqQhD74L7MrdB9RhhmJk4x95",
  "key23": "3G4KxQw7xLkV5YxbR1BcXi81x4HSjCeTAsg8TqfgDEgJKm2fVZV7E88usSh9KKzFEbCaPgooTmQP7Xc7ZLoudh9C",
  "key24": "24Ez3mcEEK9ZsMTYPhxmpZh8WKWrdXuXFT6csnHHJ5vmRvMw3GBwiDfjtDtZVsmdsVru2EQ3fzUcybL8XBWyscsU",
  "key25": "pVqXWVpz2kwDorVRa7NamexetohhJRcuxgMN6Es5Ab6egRwYTKVRXsDxyKy7VANEWz88JT7EcJsRJeF6M63C7yP",
  "key26": "66vVgdWBdNfGo5qj7HNZ7Mnu9c4cREq9JbWHAP2DMbuSrfSAT6bWfYkYJhHcon1Lf6ezfJfTBasnSBE3Ks8MmVoD",
  "key27": "55VQ6h2MvnTKsBYFniaaRce2kodpot1jSCjMfGMv6DRExEQHm9CgABq7dsN7cDGQZKwUzobRf9BoFsnDKKfjhuiV",
  "key28": "3ThwfsRSHkMxKpyW2QC5sA8Vm2Yxwz5P3iGubtaXDuiUncMpKiuSy8gKpPJcaK2ue2aEPhcyR8PmTYw43jJY5sWd",
  "key29": "2dLQSxK7McLRAHWqwfnhqgZqhmTf4YGvMUMd4wiQybAU3qpUZdB7hZkJu5EWQwZvGh7h8cCS5MrS8V8wm5Fuvnz4",
  "key30": "4eUULx5Hu5h4WMKmR5on1JnJLpWtivhnkP1XaCbE5Gw8ADaFBdh6evGUB3pLUXqiYTSDYsae22pDwFah4bBAoDpg",
  "key31": "HVHf5uHq8Ez4LRrBjznqPZVX1dzhN2b2jFWKHq1vU2UkxXFvgi6ntDaozbceQm5S9ZAqLmj3NxmAFQ67gvjwWxJ",
  "key32": "2hdAgHixpToQUKYyqCwcYjqBqKpnJaAHJmjeA1me1Z3wZ4S6RPhyPuZcDEDPoASQL7ejK44JZSFd3L8vGk14GbSL",
  "key33": "5WeQFS88m5Cm6WyV4NT8vGuYkPRDxTR6auQcaAiTU3cx14JkPT4FKduDyQs7JcHKogNwkTH3PYZEwv223EZRMebH",
  "key34": "5mVPg8yUadQz3uTYajq6nSNDbAs3GCv2rALkxyeHWHjsfc9tERibGrFbAP8Ar4XeHhcXyySjRMAFxnL5di5DDF6p",
  "key35": "2TAXiYg8YaZR6egA6yF8FHApfC5nY711jvY8H67EhtAK3sfw5MxZ6DPfSgXLu2eDNXJoNfpfkGZeYJdk9BwUaJzP",
  "key36": "2fZ4deHSjkePH5xJ1AKU56rQhuPKRJvvtoLANUPCfmX8HoZkkxN26LwEqiGJbqWvaZSfncjf2nvjJdnWST62XwZt",
  "key37": "5THBAnPVVYBavDxvTMvM6ZEZdWLA8RgG6MKMSZmuyDPr71hU5RLkabn4HVm2tMKPqprRLXKiCxEVrAMd1XzT61Mj",
  "key38": "bqx4kiBRTULmVtdDSuGwoi8uFHiKQ5a4bybq7FqbnakRMbJLBZame3ZuiAdg5L5XTi2mirKJrkDWPUmPKX3VVfh",
  "key39": "5nWBQcrTVQ2Si6wwsaUj2SXqbtePXGvfhPSfeD5qYBMPhdxj8JUcDCHoa7yXESS9NqBpdoTo9yULQoJt8396MwSe",
  "key40": "2y4i1Pq1icvANWLujinki7hPcwCqkL2AyshpRCHvu3gmy32ZCcGk5LXvPe9Jt4UdsQemqtrTVjYwPDEJVCZhEAwa",
  "key41": "2sowdsGjMUkwfUjzACqXZ7KLekVrts2Vhy1QLHzMxzLQvyCbaEv4CMxkW5MHNvtQAfxzazivnsxY6bTRZznCcA7F",
  "key42": "63CuL4auXQQx552bDm8c3FRS8epUS8ohstjAPkxZwc63JnJYNJMZ8FA6tKMBxzXGzuCFdDN3nuHUvvn1qquvWaxT",
  "key43": "398mz4HERYQo8piuHrpfVmNTEJDr115Tcc5rZd3791XPxC66YemGmvV5qnFqS4c96d8uctDTdLA19mZ4j37fZBYh",
  "key44": "vRQ7K4NxMhQca6YjSrigXTndYCoSLsefGEtERwN8pmGURKbRM3MhrapWt14mCg4CaqNmW2Z3Erc3RCre3cdc4x1",
  "key45": "4hn6nKyfqLdmrtZg59VniPqNw31hB77Ewin77iB9GHakdabJ4hUWWi7K5XMYGrL2FoyUTBujU9VA79zg5jMtXfRQ"
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
