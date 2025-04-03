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
    "2zcQkFX9zCcLrXz8ZjQNFJiqxm9nco1FrTWZcVgmKj5S7CBjAFq5Uh5iuEiXCu5hbsbnaGPbaZagVQZJ1Hb26tMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35daaxJR77yyUfEXXg44M7seM51hAmS1SDzbMKkp1pp5avgbMcZLMBFtVNXHXdTF9wHWP7HCogaMj7HUpzoyfBW4",
  "key1": "2WtTmb2da42g87PGTTwaAxe6RVHfu1MbRVXUW2T2AQf64TQFV4iZ9G6gYTEFptK6bDQcbNyhvmBVWPhT7HE45cJt",
  "key2": "3vh3jqgE3juLNMP8ig2fXjogCryakSRJsmpRm2PzUMUmcST41VN7bMdDUFEw2t8ddpuDvAz6wX8HM9Gg6wo19w3L",
  "key3": "5cF1au9ucKK2Yxa4dwQAK3zcwtvEtyjDXtJwpjAmKuxM45QT12pt1Qv1MW8mSZX3uc4YWmCKdNAXaD9UJ1rSXXeF",
  "key4": "59u7ZsAVqA4f3xmCigto65HMgGtYNbVgZXimhCByJV7HBUgxCkBMdQNMLqu4Kb94opMT3Vqcfa3PLkjn3gKGM4Fc",
  "key5": "NcDtFUzf7o9HqhftfcGNN5yPQ6LMKURa9H5PBA7pi6kvVwGPxN5DDG2PPATweQmFjDHqjRxYCPEQFGhSMLNPG5Y",
  "key6": "2AwWk1w9ogPYJYQfM8umHGpuesAT9ytrTWLeGtRZekcNmAwitEPtTiHScfsAqAuigLZyjhP5E9Z8qNG8Vw6p7MRt",
  "key7": "3L6TEjC7Z77uChus3ufA7gHBsE18rUsciRW3XLiuHRrdjUCxrpFT5pYafr3UKqebveULkVH6zLfXms8mzifWmJEu",
  "key8": "4sqWSc7S6GMpMPohSP7Gi6S6SFr6RXSP4XLuVX4APVypLWcAZsYJqUzXyqLd7mjzX7KYzvUZw2rMf8Zx42K1mBnn",
  "key9": "4gmWbhs6Q181mS7httx7Jvg2MfYNr8j6ZTrrDT6icqr995VuuqS96QGmxfxcucEgU22WSyifzqpkH84B1xgsqwFg",
  "key10": "3ApbwDPLKJjoH5bikQ3qaekfKqF9fkB7d8At8x1oajJee3anVAfsHegwukUkC4rMS8jUtWb6caZGwG5YuJCMY7Ak",
  "key11": "3U95MNyU8LL67vC2mxSZyoYUP8aq5eY3SNHhJyH9vqkwxG1ZDKEH6HC8cYAWeAWXNPA2GNfT54n4ebfdMQx8ixGe",
  "key12": "5VrsLEmMBeqzEmWYLNE7XFfGvCWhHP8GHGpmZ17ftjzSwr1PaBJ1uite4UdqKp1bmTpZZmNs9uCyJwAzCMSYpXHn",
  "key13": "P2voZGSbx8tJZGNe8kTN8gCoMFPwd6ePjTYZSg8fF6TzyetM3xcb7xoEgAKUatT6ZtkvQpM8v3HZbCgxeVTDdGL",
  "key14": "PUiGEvR3PptJhNzJDkTPMWEHJtfhq6URziRucJwyghcCL3uL2q7tiL7J74CMEm6B3n63DXs7rb58engs7tLEQ4c",
  "key15": "5Atf7y3fA5mvW7xiqHbeumWETrCFq5UkYKJogxiCWZjR9iTxGnUqPwJHpmxqCXApQvxmmDW3SMNmq8AFvwG2kxcw",
  "key16": "3Bde6q5bLHv4CzXyHsDf5A3HYwvnVHKrMdhtpZmDpTbGrXU5Utd69AxWJQLyxwi6oR3WEgwCNYHRVFfcd2ukfjuZ",
  "key17": "59z1C9JvCdc3N9qH5hKo3vkpQR7kDQUwStCcyG5PPw4MshPjhcexHZrW4EUC5iVzZKZ46XohNfzNdwjtTbu3PaK",
  "key18": "3F6HRJ6uayzv91CWkHduj1bd81Thje49HT4a6WF6aXQ1Tcsue7nXE9kvscuZRwGx5PyS8hfmThDEZT5xAd74K1Mj",
  "key19": "2aSfo24NrEyCwwrdtqLmMSZDwPAFKVtCqRKLzVxmVhtDjxyTR9pxCEr5WESuMBZW3jwEfnjrNML5zzXuxAaCya3D",
  "key20": "2mtcbDWq8wPLrLpACto3aM4vnUWFGUdxPV6WkRWcT6kZj6FzL6PMjqmGr4Gna4o5rQfSZqvXkv1WWf7cuvA6oWui",
  "key21": "29Kbk8vvvWPm55BorN3Ddd4A47FkC53Lj3rbxr8vnF4NmAGQJ6LMfvDRAFyRDF6ya3CMWUkRVrMQi48mTYaZLw8d",
  "key22": "62xSEXADu6nXE3R6u9aTuJBqVhLkPVnQBNQGVKVqET9Gpo7KG1VAMfJ6oJDTZJG1AqUL9NKB9jKVhBLV1XnxLbZG",
  "key23": "3FayUf17zRhTN21jeqz2SyioBjw8rBmhSjzvwBvubLYag2c2cacW7s9p4y51FEq332AkjHoJnNDQiYWBJhtSskhN",
  "key24": "3isf2ohiT1aCZXN8yXU8tVmbVkNgjzPtrCcW4Npenyip5n6sMpFVYpiGeFj8Brdftq1jKSQooynqVmqWL8To7eGW",
  "key25": "5HbmGVUj3yY8yvEztprgHX12gcNyPJVzqEriM1MajuA3TP5MEqt24EEGtDyGMftT1nNH5Znb4jE8sbiNUiWy7BRd",
  "key26": "4jqgWaxj4SWCTeyS93gJSbekec8VfLKyHtVuGvLAHpSvXB5X6xLV64nFZoMKRuhFkKdvqj1YqgR7ti93JvC7j9Kx",
  "key27": "3V7FT1Wnp3o2NHKshZ2dYXLeWcHVTjbC5hNBLdSnnc7K3PmKtgT9MEfTngSKTB5dK6YyvJDBbQ3wBXhCmGDfgTmX",
  "key28": "45iYpde1SPJDBqcEnoYUmr6KrJcwmLsZShFEFUu8qXKdPC5FpaiQvgNatViQHZBmsGSEGShYP3Tzf1AY175Q8wqr",
  "key29": "5WmH1yPfZsmUuCCpMcWb57e93p6GPqRYb9EHiBKuWyvjGtmZ8JxZGiaCyzgaZUUEPjYZicG3FHyqCs4tn1g9NuDy",
  "key30": "ok99NqZBcKBkHoy3jmiED7RfQmH32Yow9ShvWFaAi13QVZTW4cL7aGnhNkncLJ65UXaiuCNvCVf9qb17JomuFs4",
  "key31": "4BHKUUhsBZ3oiSEH2MxooRi4SQbSFciVfjadzvSFRk8rzXGRBqXYPnZwFR4MWZmq1DN6mG5Cj3rWys6H8W6ezqoD",
  "key32": "5itYonnvbM5ss4NSYuJKFNx8fJ3hPj1gwwACJxsdNwMgG9TS9eqjYSXigXFcNYzhCfasbGYjaSCgZYSfouX659fR",
  "key33": "57PgqaWJzNJA7WEj7f6oviwtfZZk6YHbe1VVv59h9Cu737sYg5paVX5gPXGFJRXTQ6W6BKijyoqp3EACtbbUGjAs",
  "key34": "3kqgyC5mZiGFVotaVGHYjUzaQ7iqnxt6d4EbU8c3yziLwmaqw2tbCDWV1unjhuAiuBPYcERtChrc5p34vjuK4sfc",
  "key35": "2FE7B9Vq2hp2bgKMx24wJ1Zvu7HMRCXPCDZDnEdWfRHykKoVy7gZKvGViWYgdDLkKmuMHbUGdLeWzuqP3UdcekKd",
  "key36": "59ofmxoLvAVduD7TTsKYbK7XbJmnL5aK5ZvuanjoDsMz8NcGw7edgBnV7ZFVTduQJ659rfTdYwDVKa9HvrU6NM8R",
  "key37": "3G7ahfW79Egg3Zuf5xZtQTRPo3VXEuKt1H2xXnfNJ9oSThtKksbadHe2KVuYBu3C2CCNArhbSqs9MeWoGT6xMb6Y",
  "key38": "3GP5DMJZvFVJBVLSKudG2keJRves1erzw9bKcuipoGCMP8NdDzizLgKor5HgNXLwmhDcRPcQLL59UA1yu2rCMzqF",
  "key39": "3DV7CjEbSUFAQ1sW9EGKbD4Ym8aQvJM3DaHKz2Lhmz1vaAYpywN5y6rLsmGtwwXkkPENBNQy5oyX5oc7vbm44GBj",
  "key40": "3mpeE1NixFfXLjzYa1978EM4pKAemXs4K5RhXTuupPZnmc4ztCxZwL4jaWf59TMEr8KbxAjJRpn7FmsqPsVz8HJy",
  "key41": "3yGktcf6yQrMY7wqvxkDyT8tg2m78EJnTcdsgz7zBxRr7cnv36F5VU5wQ9XXiFjKyGDurX9VLSc5FJLtEx3mUcKp",
  "key42": "3t2mHVEE8oBEMEf9qRf3DZbA1LNYsnvsaeRCP1CM6otSnfdxZxPnKfD7AMFrtMX3HZkzcMBxftksKLAXzY9MYutv",
  "key43": "rKArZHXSqKWVDL9QGEVgzCuRKwiBwQQKMiXQr7MUbm2F7tbxVaPJD5akDDCDPw4XkBZkyhmASkxsJYZwPKLqURW",
  "key44": "GhJQndE9GK4NYKA2SQjcxytHBgidty2k1wbAZHp2iWMucj7Cz7Ms7aQHE6TYBFM9X1FdkVDyFaxCoVD5Anpdnus",
  "key45": "bTkQPx5aNnXdZ4nVP2eogorJ1piQw9hpudmWG7CZngcvZRWZ5pfstNXrwP7wpheDUs7GgzfVeRiAdvLVjuuHNiq"
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
