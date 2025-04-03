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
    "max2FmxtqBYyojKYBtJkE4ncVeQp4FQwsw5hLZ13Px2py5f6oywn1t9Lht24K6jhqP9sZ6ujnFCTbbxGdzuAByu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhkgfqZtdSUgjABwXe99TRWSth6KZyEFqygbjUNSzLvhR2zLfjr7PcbjLckFFowpRgEVoKfc8fbv5KUepce1mEE",
  "key1": "3d6aQM8RfTVFVNE8tJC3XZsTDSi5sg7YWHVNYQcRW4HzvG2b1dbXJBYFjs1gncQFsBUM5piETdzTDFCD19pvkMtw",
  "key2": "547CkdZ24TFcKkmbETakEVUAGekCM495UQzWm9kCjLoxFvCPShFDxZR3iCs6xyZVDqXyjXAGMTh7d7w9gAh5dPpf",
  "key3": "4VKmDyL3DrXPM578tmXNHHqmz3QQLSWi8F5qWb2ZmbVFCYWutt3EiHw7mruA9pSsA6J2Ekt158iwubfbtTDHjX5a",
  "key4": "2kavcrpkzaFBBygVwRVhX6TzkHAAT7nPgWYdbkiXqYWj4kcCs8RrCuKS8EDwoLyX38YVj7vqDsY2xei2QVyNwZdH",
  "key5": "5sNiUM5cM78a8bpB9uQndA3GFWLF6nkxnRpU1syvGSyzk44FdLy6n4YoNph73EsonXkdCYHYKiqy78TbCQGLJCxe",
  "key6": "285AKFbVYCpvK3y8CkJNnwx8vKmMPxetEu1bpoAqzZXpRqbJX4bEAkaLBBu1qs4aykUwtN5oWNxJAtvHgsuocWrx",
  "key7": "mXHWc44gdsDxnKTqheJ4DatG6rC8hEZexzoUYMJjaTSJjA4MaGLAARTN42XekQhTGdTkxg9zjVehW3SAzqRQgak",
  "key8": "5JyvkpcipWJUh9ySvvxPhZ3vDU9uikYPRQURV7DXrEUsp6RS1S8L4AhzGfSGNUwiNkdQHd8pStTX92EfgtcAgud7",
  "key9": "5sHXg9HJNfYaoDzTBj9LhkKdi4xdWksSEG6wRQH1hUtPn3Y36Tw6w5CJf3tdYfdQ7rVDEn3KfYjveniHsQvnLMHV",
  "key10": "3FqKcfxhyfvV91SdwYLPY7FM9BAM4nBh1VbGXuXg7TmmSPoktMeoEzYinJjC9eoFtk5sPjyRmsnBEEcFc68WqSQd",
  "key11": "4669LYfLc2eC4FShuHYnCPg2gFfhpf8TimVECE3tSFys7KBbzmJizDXyTmmHd7TYsJPngLdN3gFLD4s7ohpAZ2ZF",
  "key12": "579pv5ewjhECYHbTDDnBnVtYyUxR9QgCgguYe4L5g9gvy2beDpAhrL8WoTw29VMyhr4Au9Cuzh2UAjkw385AxmPz",
  "key13": "2cRZvEhh88STvrmp4ynjcRibzibSm3LXJN5d2yzD3UgLbzsSFdQ6auimjmFWXJh9yQhbAXVxYn6Bu1TFzknCXYiF",
  "key14": "3Ut1AdxuZsvm7ZWW9yZhgjRV37uKyh6cC26V8tguwTeUgD1AB8dxRvRVBXqKcNdqydkymPpLpQDk1nY9BUntnikE",
  "key15": "4toEg6GbBzj3r31Wd4M5ikdytt2Vyd3gYFRMrmuJhLdY7jQiTybXwJHpWS32jhmK52J8w6jQerHX5WyfDjkqVzrc",
  "key16": "5cJYrGZ6c8ktvy1F4NvN6SfWdXP5fhvjhjCSTRbWGdMkaxuKyYAbAPsZyXmmhfnCMw1xDJ3qmGmwzFGLjn2BxWiy",
  "key17": "4R7DHvCxsoo2cc63Q25cAnjFwVkeN8vd7LSBYSqNWMANwuCxDdm3se4h2FgKgQUcbyF76otc6dHwoGeUNguD5aic",
  "key18": "48GJUDbqMRD7xsfKpaQT4APVGkWebe5USZZuorn3tThfpY8aLzNEcJoXgfw4FkpzDbQEhoNyWmJVdpub7HrJBaQY",
  "key19": "3QkAJiLxfZKuU6vKdj9rwRZieEdxB6zPtJijXcs42zgiH2gMbkNuqHvqneNoc5H3ieoxt9Cp68b9E6LXzvRS7K7U",
  "key20": "334vQSTap6zmQkr4TfSfMW3oJHnf1WyP7xoE2zeFKgdW9jwTBiNoKmLrUPGwHpNFnEaFtBEsWbjRgSDMwmFXHSnY",
  "key21": "2V8HibKwsjvTky3f2vF5xeXqj4joW15vBqbCjRpuQbHM8iGmVS2MQtAdKpUX2y21RKPxYSshRA8Unvfm8wCwy2eW",
  "key22": "5Ctngj1NueEEzuyijzVX4bc3QN2txDdMFDMzFXqfP5AgKzMLZsyGUEg2XRBWZ8rsQjQV2FvvAv7sSecZoUyJBHFB",
  "key23": "2Y91YA2ys3ViMvfX8LFhp247w4stYkr7cEr3N9BD94yXha917vmKKfX5Wyogm4Tt6y1h3ALcAVYt2b19dSPRkETf",
  "key24": "61Fzn8guVnrT4avPogjSLvHvGhcLyYn3VTYCLpMyvz73ubcsaN8D7asteawB1xQTWRsS8JtQgHPHrK7QntaMmpkx",
  "key25": "5MyNTsBNsG5ukTbhuATs2wnZEkBA1CrkFNaUsEqTGQnDvKaiManY7QCG4gieUGhz3P8usiAWK8CNNQS5mdXg3vCt",
  "key26": "55psMr4r3LC6ygrJjbmwtbWD1zRFGmPgoq1EBXUEj5gV8shKLTAwqxntSjMcQ7vnMbXp2FkVSZUVCJqLAvVyk3i9",
  "key27": "3fzj4hLNN2M7KcHB1g1JLtKykq5N73g3hEosVKTyPDM9caeMN2MDtnoi8wAXgteqQ33ZE6R4b7sjNkQdR8pcU7iA",
  "key28": "4BGMr2Qwj3T3xrD77cmsWvTJ4VtLMQC6bt1LXukWgVERMQSrh2VWAf8kE36a5ft3yHhK3gjkCfVj5JG3TzESDd9e",
  "key29": "2equ8pNxRiKHKTaovk37Hp6YUu9NPpZ7Lw1XiF798yPAyTDL5g8YGKNyEzLCDgxg861KncjQPLkAAA61zSoHRQvT",
  "key30": "5KooRDQm13vhy9agq5m8oArWWgNu7FGveYcSCUNLRWQVB9zepmUi2CnHP9FWy1WzxwzjJwC231ogs8pk2meTMxH2",
  "key31": "4nnkcfpbDioFkLUy7129yf8zVumpVzhu4HUzSNHrYtiCMz3qNFX19ZggH1HZQkRJ5hMJP3BvB5ge69jZ294LWZuj",
  "key32": "29gwaaoKK4SCeY6NhGk561o5rJaLEVZY5gpJA74Pk63jGts1iHev5fDntpotCHioF5L4Py6AkaAK6J1Ga3dALx5q",
  "key33": "3kCRx3L5vCkqHMbvV2ZWyK7rMbrr3f6EmG9zhvrVxvDLvWeEoJzADS34rtePMF6LGog7ey7Q1hT7iZoeSpxhesYY",
  "key34": "4uxpU2EdfokmTbkhFJbp76s8DxC674yK4gV7H8Q5b6H7Q8Uc3UbMx7T9Bk2L4pg3FNAVaYpS1LnTYzMLYbSzXCpq",
  "key35": "3ytP6jB8AsVthyg8HP2t6ZjaFnaapwpk5T1XqoEXoFBvqW699q6kmUsywzx7nmLu9H7X7VqhhuX6257w4zNbfdmt",
  "key36": "5UtGsG8BYHRwzxdbUVTwwUe7YhiYgrYsnjVXAHrWXFZJibNmXdAGTEeaP7WFtuaNqXxHhhH4hgkCVwAEyRVNQhVg",
  "key37": "4vRZFonqGyaAomariVDZYYjAbxbwwVsA5TVWv7Q1DfHZhWHiu3ffkB1aeHqUfmiMavGimZnzoWg7yYRCrqJL8QLY",
  "key38": "5VCH37Sw3GHY37B2U8b96MmB7yfXE4od2jW4SLk8AWGT4YEamtGNTPNpBSauFJeoCPdDYDzrB5hPHEGte3bj1644",
  "key39": "3emyN61rrFQsq7Y8WAB1axVDJ3rHMuYVGMZvuvpaRmusjRbhmscfZvzkN85mN7gu3KmnKTU4EJLJM9dXRGNNb5qZ",
  "key40": "2U3mxSPoehwxwcpB5xix36P4qie5KhEuKzacqryKJCPjbZg7MXkPpLQi5jA6KFXc831idzrWcToAjCnbb1njedUP",
  "key41": "4TGzc2HnWUiCtxugfrCRTWkmfGHqhsSXeKLn3zjDtkU12XnAisgUMkHQsFdUJ9FbJhPwzcVu1hz91UE3v2WmyMuz",
  "key42": "2PUvDrovHaFwfrCSMJ69pKo655Dnyj2e12UTxaoLRjTWNn8WHoADBTerQgKTthd6XWPNJ3JTSvuNwG6sYKHhwFY7",
  "key43": "3LurvZfC1qwDZhoFGcZPU51W57vJFA6GAhu5RTCVYZYG6RrGmivsVvjRoNP9Rox5tJ1gXbbUYmjfYLokuVGdT7QK",
  "key44": "5cHHu9uaa1WPo91FGtb4nDZWyREBsKwUUjwjztNnU2Y8SbSmo2LQATRMzfzuUMhiHLYEEzXx3JCFseScMwpc3A8L",
  "key45": "53FEkNL49PpVAD5VCqwRLT82pXRQjCGyf3xXeUkS8DA5hrjKbYkmcsHYkWkwWoBWDhycYUsZXMCxPtowWtTGFvvd",
  "key46": "VSaNP44c6cfvvaLJQs4uqrENQVj2Bc21h1NLierNdiUxVpDMJfCxYgEYRUhCG5KBLLrTp7A61VAquntywc79AjL",
  "key47": "rku7Xii5NetyQm9LrFkVSsayJSyFSWFEZrPNxfkRLneaCSbYGFK4xPDaxw2ex85pwhTt4GDNyWsRrijnQzYtJYA",
  "key48": "3QkLUcugLthN9A8HHNoUCinq2XcGWLPdxeV5ku6FaZePbK9Pnp1orWkubHkWUe59rCB8wFPDaj8EfM5JP3zAs9MK"
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
