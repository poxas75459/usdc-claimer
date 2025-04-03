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
    "3PQw4Qb9T67D91n8MJEGhggvpGhCqu362EapNwa1KHCbeFgn627W7hHadWNM2xE9jDFGmHpN2hTy1Nmm3VyGCP6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sKN9EFizxoaNQesAFp7sioVDhXzc2DGZUHE8SATZtPoHJHap22xQG2652enwazBvkSXQ8MztsQ5mzsqMxkCrNrW",
  "key1": "2VQoKwaZGTqk3aNrssG9v98WGpNWhuiMznLYy3ctoJzSQrTWurekPHcyhcKiNtmcdYHQHrqjMsqR8JGwziUYpvp",
  "key2": "2eV8KEDkD9AjDju9vcNE7xFbVYoBfqiSLrHJSzQ5qBtyuTBuNirZGFrwCe1NiPds3kCtZc1mm68PfWaiw5cYW42x",
  "key3": "4rugaSjqrSyfqNJYYGwkKEr2SE3Kvjo1gpXobuTAyDMt36sce4au7JpgCVKgY6rWaZcoZ4omuph27Stu81aDmrwi",
  "key4": "TZfBf7KwoLQaoKpe29TM26VYXYuGG9tdSyULCijDf8wQVEZL32m3dbCuBJZHCxfvY7sRL1HgEpafxmajkd5M77u",
  "key5": "4drujmd3vjyerAbDnBztHKZiinbwbFBpLXjgDtqsCA4As2fRFo4RBv3YXk7jhRUSa91fW9muqbkpCNNmiYuEYEdy",
  "key6": "31N8kcn1hq8jwoyTenyTeyuXVJLBVDwcmAGZZpU7dCEA6NPDFEYUR6c6QQdRZH3YA6zomxo5qg8kSSMFCgZ673CZ",
  "key7": "2EqM6mWPB2n3d1pkG8WHwMpzDXi3rrtiRiRc8pmRNNvTY1TS9yMjuJK1BK3LVcdBvMttmxAejYgpmYzXjbHcfwJq",
  "key8": "5Vi1S2auZgEg9Ut9HEcnBGoZj417NSgfgxj9st5AvZpXrZ3XtFPucbZvNvLkdwQp91EVD5XoL5U1Vn9zi8PNMozX",
  "key9": "37djNnphCdmfKbV2PDbwYwAmtGMaVLZMRJs6rZCZ1b5xoAHckWABstv7sxGE1Q6mKYJL1pvc5ZwEbWeTh4x3bxB8",
  "key10": "2RBUXLb2pGu2cwjjxvGwWaCt5rXVPckDCsStwUsPJ1HTveijrd8tBoBgGn4xFBuoYTYkUa1Hc9PoqkgojPfYT2LA",
  "key11": "eFAPCwRq7mEX3riU2phUQSKHVcbTekmoLWjg2kAgniJb3P2ZT8PZjoE8TkGoagSkzQBWXxwy6PJZE3RVzmfK4kw",
  "key12": "hFaBeKqEyaNy9zuAqVFtjZ7aYeTPNyvpsRFmveB19cCMi4cfMvouxTGu9jPEJSAtMK1KGQK4gzPxmn8ucedYHPu",
  "key13": "4TXpUkJL3R5xpW5CXmN9D5LBhzkAArLzYxZMNRUqd8JeimXtEKZDcBaM4iAwA1552qna54oYa1jkdtchBW9qcCEN",
  "key14": "3i6st6jwq6esntmDzC1m9kYnjE3yzL14PpUAmi459qN8mAyfiZarzR81BSADqbiYSpDn5fmSfqhKP3kgGdxRMxAg",
  "key15": "4Za4pRnPf9sMczEiyKJmsKk3XoZKXEo1Sf5cVLEvjzsHwhHDUcxynSuH5A4e3Hz4BvFZoEP3TB5miAjbDh5Zy2Ei",
  "key16": "55deQWS4dwFbJMVYfCjKTFPgyGepkAFokK4DCkJCj4sVLbubWop9bq7dtYAseUf1iSFw3TPeLEMvWNPPAqWmqiqP",
  "key17": "7LSTdbiNF9XvyaZeHa8pMDmzVw48hmSmmauS8BRzmijjKTUrYbTr19tRjUANKB5DDLADw8dCUEVCHD1apbbhzmk",
  "key18": "3qnVF9iBHa5A44CPCyr8u46pa3TsmyCKy2ydXm6M6NftdnHpbZ3FwNJd7rokxjMJ84qmeJDc9JUAWmBQQdFdPnNt",
  "key19": "28adAC5Z97hSFJ2PBGvGDK8TSYoANW5ijmknMjoFGoevpt2ESBqJKXmb91RC57PbdpnYgJ914TV2Wo6fPPVuAuGb",
  "key20": "2qWgDkto5g3Z9ewu3zixa5zxtHaXk9VCJMpPdrF7gYgHH1gSTGCUtzbWtzQ8CPWSNpJLoaobxvUEexiMBEx7tkmi",
  "key21": "jqb3SstpcHTXWyhmBbCZH9jaGDwDjAkohnDyN2ZJZc3115iuvY2E2Zs6GT97Lo53Eq3ZpQ6yPFffotqhjdUDCtC",
  "key22": "5qirzKJRvd5DUzM3ziutw2cw5eJVaQ9AcuGQ92JoVhyMhEqPTfQU8dfP5g1rvSJdWB1uggfTmrMd53KoqqvRWFNw",
  "key23": "5wBwCPEUau2gtUvXy7vSBkEFJS1RCUcVugvZSn7WHZdDawMmuqjo2kdpwxEY688Vsvo8qCFjZ884jeHqFQnzSHLD",
  "key24": "mQxrGjCdN6SzbbEjceWmE5sk1K58XV1nKTYPaDs7UBBewgQQcnYcQnjsD4qPKTW4f1zvxbRKqwnqen21o8AFYQc",
  "key25": "5geZx2pTWNrPJekCGJRx882iRkDpfrC2iZt7k3wPAw5r8SqNcqhXJnmA12tndHoR35mdcdNW8fSjtSdYuAy3JGsG",
  "key26": "2PQRqVtTgeCRUG4AB6bpAUckY4EyQYxK9q1zNCmmDquc39ZHtmhLwnTZxsUMbKtrCefT5e2tht82VRyRhkrdMwco",
  "key27": "3U4h3M2KUXjDYGLwV81ecfWwxBy8ejbKBvabNmXUEXtgXezp6xsFRPYyrBFrFy27NziTkkHSJt1smebAhQs2cYhF",
  "key28": "2hJDc6fwuQ7TPSvj5bpCYP6FpTXm7xJGFvLhQjwZmBmD7uo7nHRd6u9Vt5qxURN3tm1gTC7qpzMAjonqy3Ekn7aL",
  "key29": "379JtdTvMG1ZGsfL5GmymQA7n7KxSQWSfstewfGDgVep4cMmuh8A9TEvk6R9HxwVgzcCYJwJcpjgWXo7qEE58Yqf",
  "key30": "raQc1xJ8pp6zeK6RvZqXhBvWBxoFEAq5J7Hj2rASK4LDbtSGxdMJuswXyJEogbwRa59JEBoFBks4hY9PrKuZwgR",
  "key31": "uT6V8RKm35kvGZFnktotxYkC2vnoXqqdzEgepsUEAXq3Tuutdf9sLGifSKcFvzzFuui7ctcr2J9UUfTPEf6DcE8",
  "key32": "2htP7LwQRVHVvPAG3pBBEJaRcA3jf5bwtB9MqEZ2Wenc3jAr2a3j7THGGGEUq1vBu8s5A6TnGygQWd9SzJKNXtFA",
  "key33": "4NTYs5T4Nyzthp5298cUsCMndnUF8LxPvNczZNwg6pK9rrxLssh7N8jBKzyv6dMeY5FNTDyQ6tcTzBGn1kbftHdn",
  "key34": "2R8ym5K2UxAyeN8SSakn7siJ8apBoRCfUqg1ZQDNq3Z3GqAhXRgLm9E6AknmAfXkYGsTyEJ2kkJqi7dfdkZdGNBT",
  "key35": "3ggxzsvxZzpnGqD36qjVVkH5QxNZa51kydDJSUjsbWVgoCckhiqRGAxL599hFomUeWzFSmnWgKJihumaXYNYrZd4",
  "key36": "4tAGd3HDrAVbdzVX9gXXcR4nH426hDpuk3PFj1J31t8bgJq3Y1zFJ5szT2tDdquxNQNq9peXWYd6d1MwQGbHctQJ",
  "key37": "4UAJmbskwfCo3VULaYp4htHRbQ6rBrtp6G1RmBJsnh7LrVLCMSqaypYzWVd3wMxdyyEqBpNy1sKz8KD6q6RNvFHb",
  "key38": "4foWiX3WRmsDe52bPESrgrrchPMe9gAdzU7XNRgC9Z1wrtpFDtaY4KGSdAiSVukemrghDRYAkFvvxN6BMuA7RiDF",
  "key39": "2vDgSbEfCrUDhUkGjd9TGbGDGTz1gNwnnB4ouF9GLbfLZZsa6AhvZXgoTmfpVncvstLsnU9vtx3b9U3pzL6cmVv8",
  "key40": "5wjr9Zw3az2sQKGGA96ECQrZtgrc3oQtvU8n96HTS9UCJj3iRC6TCdXV9HSnQuijZoMhBAQtV9EQrUwTCCkYJJCS",
  "key41": "4vFVzoZvYBbV6ZJZ7UaYa4xcuGikyx2zyd2aniQiFQk5dFwnezjuKQHVfaJPH9wtQFsexDUQxmiXA4xbkjnegMSv",
  "key42": "RHkcnygBDXmLDbbniTBJ5ebCtufidzCx5h9JT9PxAxJXF43NCM5WiNS2Ju3XXxq8kyBb7ZTh4KJiREZH4SFgayT",
  "key43": "2zMvxBJ1V2oVbHiEBnzK1shux4nz2bBQTCQfsXUCBEhjT31G1vnL26BiskskhamKcSgBUN7Ra5Fhzud7TMB5wbvR"
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
