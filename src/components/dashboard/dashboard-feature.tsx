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
    "5mopRs5daKLabbaezEEjT88xU6yiYQcqtYo3Eqg1EP59GoRceP9nrqokCGvagqH6qKSDCvHg6VeeQft6VFWGSgMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f43NbqxuUwTUYaUbWVggNXmnxmrsWMjw17FPSeAKKV1QeLJLMHqqUReUJu9gnuhmYeMvC9WW5DDccRCmzXH9K5s",
  "key1": "SgockLCQHSWigkN2uJnq3TrQjwavLvr75Sry6AxzXmXqSFswcgvHU3b8EzuMiE2CVzcL7gRzyzHQE3gMvAgvBDQ",
  "key2": "51mmNk4d5fFXQ6LFwW61r2TVStsnXTrnSsj9w248nkE9sdAjiG3vgXZppPt2QAoTqBeVytp2vvZASMfGq1JtoASq",
  "key3": "HTjZ6FnYSATyPYXFhZUjhFqcteuKWzBaW2rMVHQCX2QThN4EVnFkXSAotRups9kosEjgYx1rV4qk2h2YxVJhZEQ",
  "key4": "2WHDk2ngMgVKK57eBMdBGY4AM9oczJkVdoJDJo31wMjXLU9fwmf2HaXysk5zVSiZ5rWzMsgnGxEbxvFQ859YkV3k",
  "key5": "2xAEbSzbec71Xc1NmMBDv8K9qURWazqYYoE9JwHdXKRHvZkZf53qmykcNMfeCvSAyCyaJ4qYNTH9adhp2p4Kbcdv",
  "key6": "3eZ3GwgQPRXT1jKXTt41N2r6NvfEvJkj6oNbJrdNhG5CTBtQ9VEiEKzNwnYw835x9eTshpHMLB4e7WtT58pwDzZj",
  "key7": "5MMT2D7wRidzr33MuZnjgCXszu1JRqL6PpgYoeXe1oMbnninYdd2jaFXSvfmFZnPqPTTRAsM8UJd85oa6LuzXMVe",
  "key8": "J4aTeKf4J5utK4JVSoie88Q5mx8LYD7QcWmKFJrMFiEGXCtXHvafk1DyVXdiABJHNforn1hVnmfbYiPGR3XqsXE",
  "key9": "2ouGb2Lfa8enAV5hYE7zvq64nASAWBG66uJ51Em2LuLUiKVvQqzAFRLBBc6dVfEncS4ghSZtw1e1B9SAoTAcY1XF",
  "key10": "43MtYeGG9xC5g7agGXYySjn71pm3nQd371MJD91XUsrxcaKs5bDavcUe64TVubkZpg58nwo2NJd267phdgRReich",
  "key11": "2pj5XwMqq8APTNytUPZoeTVn21MYjTbjCdbMyEvPWskkcrZoMo6YtXV9Vk5VADuze6Ytk9mtQztL1Gk5nqv6rVCd",
  "key12": "2quL3gLFKE2zJ546hyusxYbV69xTYPDvhAyFSsiKuUwEy5jJDE4xyjrQECRNHbMT7vdf53nd3SCGmMLf7y7p4DP6",
  "key13": "3PPD9VRkygtQixm9me5Bg3fnK1KNpJC8B7Ftu8sw3oWdUHFsnT8C8ps37VW8BPnCUqxjkFtkFsyWog2P4Bh5JRKW",
  "key14": "5BotjtghV4uupkGyu2LCE9vueictbjX2xh6xN4s6EsASR8BQPyR4dHPggfajLh3uNivcXJP3zbCcUj82A9C1Hr2M",
  "key15": "26Huew17PL28J7uz7vRNGtYZtfmrxo6Lf6eYdfV6SEuXxYdZW6w1nN8Bn6Ftw3vdbJ1oSRUFcUffJAQi21uzLky2",
  "key16": "2wnaFLo8vchikGWZDwA9gYkjzY6bwEq1vv2jX946at5DZ298eQGjqAfY5j5QELrk7URUVsVP9jvJhjPJSP24Ac7M",
  "key17": "2M2Q2PvFeVgCCPbyv3wPPiKTKuEavPi4HAV3tXmubWQ2GmFkDMNW6dy5rMtiH17Te7PgyGiRSbzs9WJ6UbSSDjnb",
  "key18": "2shdEHCsd1qVn3NxdrP4yGgUKt2hsqKfTjmTnzFuzY9GdUFQUrtp9eBYR3CZq7r717iPGRavQCEQxWY1a27yPGMu",
  "key19": "5pPXBdF6C62RYvcWhsqEfGRdJKKNA7kNibKqnBPDJqXAUY32kXoctVFaeXSGx9c7h3K4yVrf9GvbYpjsbLcfQf2Q",
  "key20": "21iwD114NLVtdVSgyFPTuJUReT9JVQFjY6hRTffwGMyzcqHwrP7FTdXRtPCsQSWcPMcXmCUEXb3QfpejCkYSKH9p",
  "key21": "2AHaMn7vHkVYvvjuK2zNKQ8oBe2AcetVpufByq9SyhcpgS53Yt8pt9nZfUuxypXZK3fN43KQhkJTXkWdEgadHUWU",
  "key22": "3QtkyYQhqXSLBAdkp3UKmFfTcjWciVvWYDd1HFtZKNFRLPmZbYGosEqxeTteb4DoR7XiUjRSv7ZxTESPcJANc6Ww",
  "key23": "5CE84F4bJxaC8Nb22ny6hGcUvLhygraVXYGA7X8eGyuNYuvRFGEjX9mX5xMR3LuGX9bc1v6ZKZhf3PnhC8QqQYJZ",
  "key24": "4wwuYofwx39Bp7G6oeZQPcJKESQUuxs6eu6aR5bC9jB5rvX3wTFjhHYwXVzDp2K3xBwHK14Hd4T727iNP3YuraMY",
  "key25": "42mZpdhTqi6L8RDK1h8RzLJbxxoHhKHfNokzuBavciuPpg2t3p6VnJqTfoRAcAKNh81Ju1SfL7wU67xjad5HCihF",
  "key26": "21doZQcQa8UNJXitwiRQAhpyYPegmv2QFP9P3LqTBkJbS3qxEZ2cJ8r3vA5SJZ7WUwD8X3dLnitaFo9wxDfuoowF",
  "key27": "4cgpD7zPygcWZ3sevnNGWk6KAJZPamH4enejU4d6kwFZVSYNHdz2BRKW5grmg3r3Nt555qBoTkRSmGmz5yeCYk3p",
  "key28": "2UYQedeDUtRao1CRVfLj1gc36CmKTdVwyWwRscsCUPEwmga72xu2qUGUNu7FMCpB7HH6YtJxC3k4b9FVaNJ4upCJ",
  "key29": "22xaTK48UGGeEkpVtnTvCJABaAqQPQ6VNohCg5UeExpfCVEZd8xmQoQabzRpsmDAFQ93sLo8cro64udwNMRohyVR",
  "key30": "2JvzuwXN6Ns9vraYZouLyA3RvsedXhn1g88T2bSxtxCB1HH9SL5X1T6HqyyGh9RJYzhqnYmA4DX8QM8vnQtgkLVQ",
  "key31": "5oruu5PPLkm4mknczx6bZi8NsTfmrArLW8dGjRW3YDuoXViEYD7pxeezKBk1N7WzT3c4f26g8VYDE3NV99B6g4BP",
  "key32": "29gbcBNHNdfpMDhBs7hLDtgf1BvEJ4vqSpmsVNzPQD6pZtzCEBQQt7WPSLnnXkZf1EVxvoUcuJArtorahXfbPAa1",
  "key33": "HjQTLL4bo3tsrTeYrNAKPbutm7YmsiRfWS9th44sqmT4Bd7JS1gywKq4YzvS36viysmEf6c4cuY7zACbu84ZB9a",
  "key34": "xtsZ2NmyJHVu6ZkZ2mivJsqGkYkN1WSMCbaq7pfJ7cbJLyra9Sf6g6mtw4QTovwsoWpBSrSvp6bcifLLELJuYds",
  "key35": "5Ns565n4u28PLfaSHvD5WT6C1HQM7kKNG2nfYtEj6EjLqesDbN87ztqtBJ556RgrqZjmdXbiTee3WZgdikpjHDNT",
  "key36": "47hgFakvCLuAWkLGeARsAq1VSqABf1bMBLpocGDUjM8vB23uKTn2XoM8xLh499UE3cBLZQUo6NarVe71gTJnGPNh",
  "key37": "3EtS1fAGaDZPWR9gdnRKLYoTMZw9N2P2EJNUfFhLHJNYJaTP1xKvwJkLzq6xCc2SdKysaYYXoTdyqocyu368GvnN",
  "key38": "5YAoVUGa3YDXtfYbVPhvXRp52MkDKyADPCfWhHp2e6mwwmzhaDyQoWeJLYgwhJPkq2dti5uPkW6Les1V6M1JnEVH",
  "key39": "475bS2swKWYKyZ5rXSyiwqYJ8T6bvHk8WGWbxrsDNnLgQWjcYTkUa4V4RvdhFyR3LYwGeA1bCVnX3TGJaWuiMG9o",
  "key40": "msGGrpAufQ3Jr7ZAjjXYaHBiJRmHmsMqD4nygqUgmNBn2wXYNdWeQvnUkLTX3AH234m9ZkiVtwk1Psv7LKCrePU",
  "key41": "4QuuT1QM59YMb97XSu7yrgCJDE1EKYEVK7aPkgMqM95cJyZcVpBcbwaexbZ1MpwieDBegsN6f1xMAff8ZrJDohFr"
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
