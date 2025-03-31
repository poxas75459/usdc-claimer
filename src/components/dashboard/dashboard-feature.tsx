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
    "4jBmASHzEsLj9Ls89TgmZ9DndCLNvQccH4AhDKVuKHbd5etW1k1BtGFNcEAaFYME9Fyx75tsxhwwGoud2z4UZjjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euGLGL2Hyf2Bs93cDGh79SCK2GZR7iEsjLMfu4fzrA1PP8D8Ud58qFV3hc85tnU7SjTVB73PpsJzE5KdnscoVjH",
  "key1": "3ozxY7AnASTFVrkf7sJ7RG2s3d4FkQu37N5UEnS6c2LyRGPuB9oCbMq2gKdQ4FiENGoh6w9U3Wx8hyxnbTS9hoT1",
  "key2": "5aJabGa86QhRy7Py82uf8UZVHFF8SsowUubjztiLLJiwnpem2i27uUwKsb3GPQ6UPyBpYC9NxuvizypUDfA9NpFX",
  "key3": "5tDhnYdXWB6MJUS1kJDHh2LLbWugHMGo17ZcmssJPNo3WDYwsm8YxDsfTix5cyM5dWX27x2FtPZuQTX94HBukzA7",
  "key4": "3SweQxmo3ow2kZAe1QwcuN8jjEciG3jpiaocq7SmT1ihR3CFJk5o1B1DERYWBtNCsPWrxstohXVndPDxcgAkXx6W",
  "key5": "5dvEMS3mX7AGEfhbWYC6F28tKuK46rq1i9e31uVxmAHM38zirDVqMRjwtm5zrFP2tRzMWJBuJR5Ati5otmzjcR8X",
  "key6": "54WFrrpQ3CNLWHjc2iUftSh3MroFLWnnMHfPfjkd2hpiG2fakLhTy5NhCGJcjm6S7Sp24xbQi9GSioKBYmk1bXeY",
  "key7": "32hskhF74xZhUin8PaZ2gQ5PK5v6a1n4XSNMVseDz4eRP8xUkfT6ccekfYuGxZMVf6JmqhM2JBZQf3q9rFvaPzw2",
  "key8": "3Bp7WpkgNS8CMR8SfbAoDrNAsUwyvteU5F5ZNSf8nYzYDrKvDwv1nK6GfYTn74ogX43km2B3u6XFkqy4At6sn9m4",
  "key9": "2Bhbaij5G28cTMciNWCfQqpr9tNaqkX1GGNW6XJxLYBxF3ePQRCtXrKMiS5h91FCk4Fygt3dtLaWYSEfbPGWrzVE",
  "key10": "2btG5HZsnCREse59y2yzoFoRdo2t4Fikavv4K9SvuNfGsv2KUC2S8ywSD9P9NGfzsybwG69sgNYbPpLqkKudabjG",
  "key11": "5kXyPHK44vTHq8hV5TTF4s3wM32keTxfT4Ge2XYaJfvszXRkP2tptGQTmZftrsHvVSPXKSTqSE6F5RkjCABF9eho",
  "key12": "5FTHXvR7HU552APiUvdTLGFWQWK4xypV2HARkW2BxETAPKNpftWALxnqCDEThGiHX1QDuMkqgCdsy8RxGDdR4coe",
  "key13": "4WChayYbTafZxKsCNoWTSB2FyqGFXV9v9DHQTfYBoZow4xtpm9P5aGWddjoqsFHSXRZcJfzrrnBXQiBfV8GjxKoC",
  "key14": "26Jux7cCZTL3CwBsvvb3U2mtjsQhF3QF54wqUmwJmoNF52RV41k3Tz596HrReGgLHUkKtQuNGHWqSduczUdFAV4S",
  "key15": "v3P8vDVkUDBgKjPfeM1GEKecqyqsx41mha5Uxepp3vW2TKsUmY7bKzqZVEEqsP5yDH5fKqE57bUJCCzKbn9fLNn",
  "key16": "4bRYZ8SMHpgc91pF23ZMqds2Rzou2VS1wkMeFoTWKiw8xAnZ1gv8qsvfkC7Eyns4mC8MGW1nV1GhsBGpcfBdWvUV",
  "key17": "2izrk6qcF31VditFuaD6zQs5oPBPjvx51nEypUmSPLSS5fMZfMnBUibPGbNhsykAcSeBu7pA5h4MpVGv5WfH1Yy3",
  "key18": "JW6rVXLX43nvUi773iKsSeZhatzFcigyoAvhHL4yKTfKpHbUXkG6SGPaeuLFA1PMKcXurFv4Jrf3JHXNCkv2hYo",
  "key19": "2avFhGi5VRbeUvoiCF1RbLJBHCyvQU7xDwxA284XWzCirdgfJhxcSdLvg5XK6PizkNjebsen2hhJvipb1AGNcmpq",
  "key20": "cnYHwBo2bf48Mz6ByJwhDSu35x7UHQ8GbcZTny5XhuRoBDnKsWxzUPgrVSvAjCT5qQXxPicP4x5raQ98yYd4o4E",
  "key21": "rFEcpcJ5addx53xcr6VfPSC9igDmqsjFptzniyeAJRFSeCXzc6NmJvzyZ1JjcV1Z61FZksWpskA3NsjMT8cffiZ",
  "key22": "4EZ5UWjcC8w2ow5giA3rM5GMfFCw4SbMDE7GK2TsVKoAH5ZBYJyoGvUW3qGewoHVQb7725LsFkniuEw8Xhkmre3B",
  "key23": "44YL5VyDKXPrskqowcQWPAQ2hd6fsR5XuTgdFqAkGBMaPgfqfRa6i97g39eAqw8jAxU2jC1uGA8nccTbWRVcThme",
  "key24": "3gSLP5WtiyWFB7rPLf18gG1vadWMAFJ29uuM6wstnuh9CW2XxgWRf8r3sDk2Ng3rj2yECfzfokn5UAXqLVXZRLds",
  "key25": "HE9txmuQroW1gHf9vhLtbX7wTfT4T44Q9tA39KQTsWaH3Su51JqkPgiMM1cSWGrmfnq8kndCFXDbvr9cubJgsfz",
  "key26": "4bX2nDeGkcT9oozWHerAyU66ckPeQTdwgDFUdi7dBktnnD8dJz7JokSxG5zWgrApSppc8uBbUA3TbPGRm6CeKPXN",
  "key27": "2KEnGLGXbsM3h43G1zgaDj7BxBxoqn7F93wC1eL2GDJPS3e1UMskhyZj1j9BY5RnhTciVTxPGbaP3fgu8rMoUDgi",
  "key28": "52xA9sA8NnVS3YCQMTVc528nt2Dbu4uvCMiFZTmZrCR7p9kUCUAufgJ2ZLTWPKaoWePdfqNAzgNXKZnWLBtRhPpN",
  "key29": "57u5wCSS3UaMNb1APPp4jyKMuu714AG2ozgHSRLjxAikfQQiq15qhGpn53A2GFmZmXyEqNziS1HBizRE5vPpWnSU",
  "key30": "5ZdbdfM8DSzkK2g41nwExpfJ2H3BLpYinjtNq13YuZ8An9BcAuDKNRqRNamhW9icVEf336FntmqicyNPQAiPrEw2",
  "key31": "2mKZ7iagZEfouEFm9bS3HsTSnNPHRfnuqcCGp8DJMEhNq1B3KUu2riEQds8skGzstLNUGB3xy17Wb1YoJQ1YCoyD",
  "key32": "4eMBWzXsxExWtTLAWQagQqoKjREuRySFWEdfzmrEBwaKnvZ95YSjsFpPvNKdCd9Hz4ZGQcbyeqN56ofTYarq1eyR",
  "key33": "4mRWwkFYkffNie7bwPaBSNZA6aMWF3p5WcgYHMyb5A8Lgpgv75Y6Xb9ffNH9GLxMxCTaKw91gaK2NLYbk59G7F3s",
  "key34": "uPCSjmdK3kVjPHQkX2tNDKqSVmzvmPVUYeHq1mLEHQqxhraFP4TwNL2mRHc1CR5mmPQALLfDYKGN2QJwmzuvR1i",
  "key35": "sGpanc5eYMpnaWNtyEtm4yMH5uEtFw6Tr1xeuVdbo3krsnxx2X3DXrCxksmdcvKWbSvBGhKYiyPoDwL8N9NbZxr",
  "key36": "4LJZgg6z6Pq4YyuPgoo4dnGwJF8zGeKHLAEa8P617muwwsrZhuvqxWf2pJcLrbgPzL3Hz44v1SCWnJZDZtAax9hF",
  "key37": "4pRCBqiLuiJUfHpEVq3qrSU5hw1tSxp8BfGZDMiYZjza2gaoedLcXTGxpnAuu4pLoLKnNXRWgRK49vUHh2nFWENp",
  "key38": "5hQDhxD46GZ9iu5i5UykuNDFDizHhpzsFgqmVoshAXuXq6gtwHa7NJ2XXnwNuonsyLcr8jHXD3oDQ76S3DqEqht",
  "key39": "3j67YBKyzwcmiqwRYHDNdGJZpbMcfwPz5ejhKn3JyXLhDt2eDmPbLsFRdATyPzGTpQb8Rqggcie4JuTTN6xeu8Ae",
  "key40": "36QR814t3TFyMXKSipyVSRWxsWsAS3BVLRCjtsbFVUkENU13NZYtTyCHV1DBNJ4hs6SyNMa6yiW8JPX2q9eJQPy4",
  "key41": "2dg9iJDrBFMQqKwDq2iw7USan4poPLq4RvZ2SqLgNwVRg9pmbem23K42Ec3VrMp3WKLqSkKCr5fEA8Lj5DaqcNs8",
  "key42": "5cQxKfnj4R2apQeEBZre2Wv5BQmzAT84yKVNwhJSwKArm2kAscFGuygcZ3AB2XxVssDWbCug6jcxQvFwCttXDC5i",
  "key43": "23AHCDywYMMncJ9NUTBgUWhfqNksBLP8dysAr1vL8itmAMXDbPQxsXVkQ21QNozpoaYp8FkRsnbaaxZjMvwkAMb9",
  "key44": "2hUQoKUDciC6j86cTKr5vyryB2CX1j7vAf6YGKaSQtqJ8zdNsCLbAGABarJP7JuSJpDpa9onfgdxXMhHBbEb9Ms1",
  "key45": "4NJdt9q8ZuJZZWVjsX7LcvtiTsUBKwXVnUZRU5WTzs2YLzMrAbVtpmMWsuEquW5163ymRxKwZf1eBU3tPLeu7G6n",
  "key46": "3gwVZmvVMAtaBUvqix8w3JthWueN94YuG3enkvSTmRwpfVHrpTTsXowaCwyv4wPuExBU5tfqaJzMmBeQ8BAfemzf",
  "key47": "RaPdXJwAu2EDTwsHNUF9pQzxf9nNsZX7qqe56aWV594Toa8obFe7AUcCdiypp59FwF5YUAfepXhKisvfw2PEWXD",
  "key48": "2bcu4wrMX8ExPyRsRUpaFyURnqchpEvZbNGL4ao4ZimDfwciDC21JkP3ovTLiB8ytAfzjehCjzTp3q6c1xtJnC6k",
  "key49": "2coKBateViRV9gEQwx2VWbTjgtDq9DKduyuziRdd6gzVJxUm64DKAty9S8sKgL6h17mFuJdfZLhw1rKiXsxmcgJW"
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
