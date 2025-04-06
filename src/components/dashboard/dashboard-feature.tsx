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
    "2V4YQN58gQnbmLccpJCEdhcFGpPfa8MCHTTXbiJneMa5cfdbMUmg4jNiF8EDQ3BFgziQL7txzBFvftPHVNzn5ax5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MumzdXaPVXxTK8Sz25ZDLDABnAYyZareXpjXmXQ7HHZ5F3de8MoQM2Egaz1C7ViSDqd7ZgWjPsGkhiLGz1bMufr",
  "key1": "3CA9ckTrCZCTT6oQ3TuM3NEG9zNHBESYe41c4eXUs2y84jNcC8TzRsXyaWKe9yAghoSwWvcF98SvsxQJnpCUWjhJ",
  "key2": "4QeBRYTLBWtCjaiWTuDsvuUMqg8gRpbMh6Z6h25sS3jDjNJaTZDHhd2z3zgAGYa24popQ9SxFXR915xJzSc89f2Q",
  "key3": "5XcVD4iHcGmHhCLDGWG6Lk1mazwkgmPkdEB46cQs69qEhKA8vBwhfS8cdQBxtbCv3DYMziUAeTuNhN687mMhuK4a",
  "key4": "22tEuUeWVMJgcPFk289w73UthxGBTiRSU7d1PpCrvJdmCcfFDy39qNYkP4u6EmLu9w473rJXDCtZVPzLGeYK55Hn",
  "key5": "2WR2souQXh3UnTUrZX194qv67yvTvLrfCmTXvnnxtaBF7cp1JYxeotPewqxm1Wzk6piv4hvstmwvZdtjGxJKjY5Z",
  "key6": "65WiS4DGNmjmdGA3L1KWev4UaNEr4uzKRtnTmz5hiChb8VscPFwfA5as3KsZos85p1v6oP4HpS2k1xg2gC7wfhhq",
  "key7": "33xQWcj2BpfEqcsgBq11bBc6FcDtUAeCFwsrgHG9ZuXQoTfyvEvFmvr3sz2REtL2L8NFCtThibKxaroQMkXoAGX8",
  "key8": "2fLpca1nfyBh1MdYPSf6oy45wWTieNFERNJfzJf8vzq13RXg1XWQVWre4GYyDQ6i4NMZN7ftMjxePoGhhJrRPcnC",
  "key9": "4jG4fSwUJqdKrEMnMzTEbtaLZ1LLRMPs9gyqs7NksbQh2MsNQtSHrchvaoTU4PEVL22NXq1nG4ocPHPBEz1yLxak",
  "key10": "3bB9FtqKbv7vrTV4LJ6r58gBDbYnCMDojaoRNSt7pfy28hfyBqznrkSepGbLvAkEEeH1xAoTozDKD4sccgprkRi6",
  "key11": "4ctKwprT43wrfkQJdkccqwpHmM4orDo1yXRQmLBopBdgdJNnmuSK6WxMQwvSxi6pkwi9Uv6CE79iyWda1kA8gQyw",
  "key12": "4Wknp52GNnjBgQzspykXWTxCccu6TqY4xJZkyxVtg3JPeMXMVFF6KgRtHYmEBmqCzXyJk1PPdufXiRvDoF4Hx1Aw",
  "key13": "pesLgozDVENb5HySt6jQYLGrx85UpNhZzeUr67JSSJov46ximxxcJDUCQ4D55L9mzMAzJq6soYwCjjRzcdDtabt",
  "key14": "GhdTeb2xEBEf4tfPFKsLeDuJg9b6rJuU7RQG6iexYRBiz3yqcqpzAj31RGxHyjXM5Wx9pBRNEiNtkEV4BZpGQUF",
  "key15": "5DSBk5fPxxkhuLK3tgSsGy7s6qhsLr2A9yzhVKKVTo15cq3W14uwytA4v5d2DAQ4bG3eTfFE36nYV9WtfXhMXqLc",
  "key16": "2L2hUwE2PAXJBwxQsanDbSSELpMu4FtTEQTbadXzB6sS3fvSBisVqBpzrm8xvqDXiCJwGbyGu8CvgQuMCHGwEv9T",
  "key17": "3ciACYfQQSeWEnU4zaZzvVY679bmeFJrdVh29SZnyxoVv4ikfEv7asMR18NbSNaa73jzGURwEEjGVukK5eJSDMfW",
  "key18": "2zdymBigzcv3vkqxtmGZwLuvXq3EYVoYoMdSHENkux7AvQkkkXxBRZwtrcPMWcG1QkkUQAsa1uBLmzj7vSYFsRfW",
  "key19": "37w9tJ1b5TWDES4iY4LUjCcsaFoLV3UbMee5uJpazaG2oDUwGmNbXUHgmgS36itr1quFifx7J2AgGBcigHKAANfJ",
  "key20": "2bWJYjrzovdFsfXd7G3X7vAQpyXZNZiyMF9PjTN4EnD4sJC6yEJcJRm5Gx4sLBhSp3fJGYy4px57G7UeaBDYYQfk",
  "key21": "3BTKQHTQoo5TFtDuAPQCjWpXwttwAx4HH82tKqevmcWRVPKW8LhktPhqaLGKtRJnG46hRxYCn7ooZoYHss1uabFb",
  "key22": "37tf2SXXmLyQFgRTNXWfoC6nTnKhphR6rNk6r9SmxqfPFiHir1RWvPoYdHK1c4UNX4gcK4vQD7RW14Hn62AE6MGC",
  "key23": "51KykTuPuFDJW8iEUNz4KTYsAg9RrPmaUXsVzmGSt6vNLpd4Jxc8d9E4YSJgom5hRHszkuvsbePwmzVngadHY6dd",
  "key24": "34gXVp3Fj6xeuYvPZCnv2pXyvUSkdPeVNhdXhn2mPrTm7vRrAzN9eMyV6Mffs5CHUjux5Ap5tNt5ANinCqyY3nLk",
  "key25": "PR86REwQxqinFbdxUDm3ZvyVRVVJcaVhXtSsgLTj5TCC8NmGX7qk7bmrjtQYVKGgF1sB9XuDdBju53AGFNSFgH8",
  "key26": "5zkeKjZf9KSpioYKqYxPiQ6A8FNUW6hmgpvpXkCFrXjVrYydpW4nWujr8uhKuD3rCFofFMCC9MnbtZ9TsrhoYDrm",
  "key27": "2LAJEWbCXZ4KKxobyqX6xmCJkJ1uZ3LN6mqvxfAVTn9iPEFBKc9qkZVN41jQfqXcjVckNt1eYwsH9yfJBmuMM7po",
  "key28": "KkexUC99YgDLSY68beT6gtNJizMxk4HARJ4yrT3UpN2oRv8JR1sXHmmDD4kuprGtWDjP3gHYau7Kfm8v6CCyVWN",
  "key29": "4umtYvU5Ae1ntsfjH6TpAfvkSh4qyh1muCsKZiYynD92qwGhVb6hgLFR1esdefH2MnggS1uvH3ngXCFY56y7Ugc4",
  "key30": "2jQjen1ZN25BS45QjvhBfppQZSfcqoe5moCqPSE8UwGFQCf2c239jV8cnPVt6xvs2T6DANNW3Lym1Z59Y4iD3aSR",
  "key31": "A3qBHrftBgWzyWmLQ51gNpvuK9zxojcNJs5hMh2GUYbUZTvSFHKYMZp8HF7H4FLYG4buxnAB5Ba6vfR7W4dL7nn",
  "key32": "2iLbmiUBwioXm3aTsMmPvFYVS22XNyn9ERZwuJSqFb5RsPVzp7rRaPbqFN6EpLysnCYGvWDNUXCkoGsBDfeELiiL",
  "key33": "3hbyAFT6SCT6dZZCGYVdXyqED7rwbockuwjondzPMKtRfFsobxYt6KngbsN6LPJJ93EgtiwHRxsC94WmDkswVcn3",
  "key34": "4SDaDGaR3HM7MSU3jsMs4bXGJWnsaTjqtTSi5AJZfZg5hbYQFPUyQcnLx1pjNnaacDAUuVNZ3juzQRJfLkJM9UZk",
  "key35": "5AXQTnvAgueNVrKoWCJPTrnhE1VydbaHMXYeenPnknMEGeAVD9QKnTz4ESHCtaL5vybBjPvVoGAMpPjBMUjgcBsq",
  "key36": "63Xoc7SSAiY9pU2fzck3YA6HFp6zDSyPQH2t2RPLkRyczpp83PQMRSfP1wTni34sT7gyQkmx9FtsXhzy7ymEMPyP",
  "key37": "2ynMnr11fbhv4RqZ6ciQwbaJfcatpT76ZVH6LsXrVWB2rzaqZNph6uYUeVfMtReU7NFoRwXicNq8asQ2SHHLczSu",
  "key38": "2g6wfhK3DswCS4fvAsSgZGdh2DcGHL7CfsZfSz5FgaFYA9iFAh7HACTveEHpz3igZ4gDBFRWuhoJC1voT2yBap2B",
  "key39": "2ZxNAZw1uGMbmS3XR2YnMSH8MPsckpofbrjFFUpqBpwkRD6qg77Vjc8rHJgg9kUFFpHbXjDNuar1JTLA1nXNaNcu",
  "key40": "yzJZkSKDdZzDt7z5CLug9XNsTPXCKiewb5ByBdrpTViyvxTZFzVD8z98qHu7zxxhKibxYKTLmFQVRWcromi5oNj",
  "key41": "5mfb5zjgE2m4KoZZk3oqYm4VgJbLp36GfxMSr3kUnRADuEHmK791xY8zUr4jdfz1A4qJkdKuTDMVyt5A4furqQXb"
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
