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
    "2oYL65eZPVnqdKNKoMazGBkqSM6bobyQwKbMeLyKxuVU4MUwf8Dyte3wiL51cM65ffRZtwn6UR9DkCgsuuF5mZAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhiJAc3HkQqTiZAdm23Z3gErhwpWWzsuYxwA2bqDSCsPPQrPJE5oJ4gtYSdA3KGnR7az6iSPAVrYGPqtydkoejb",
  "key1": "SDpzQdYtHwuXN7DqAwfMMuNkJ8smuCp9PB3KQjoCNngXE9a7B2xLw7vexeXioLcj2QKDpPrRYSFSSSVkxbo4nrr",
  "key2": "FzRmCFw2kaScKif719YvVnZXhCu2TBTS3CgBxCkhr68xTvFSNzdkanZVPLWHkaMqjze9j4yoppzELscme9Lryee",
  "key3": "5mvQW6bB2x92zfSWmEXZtJoKsfQxv3fLvTmRz6p9uTAft6ku323xwdzDy1yQdtbx6AinKfenZCPTZYgqUpzbgGoi",
  "key4": "2N3yhyvf7Bmx3q6yp1XmvFgy1tykkNnpnvCDqXVnHzvR3XqQ8Ny8rV2T39MMgLsu1iyTcsPJb2iJRu7CSHCYKNEw",
  "key5": "3NjuDvGE33wzsZypMCYvKmB7FMKgxpUaqLy1o3tmzT4dpPq9d3in3BDYBDgLGAzTwqyVb6MZGfF3FbN81mA73H6u",
  "key6": "4xLhdnScjZoehCqtcvVTVy5D3tzyPWtW73wbaHQ9uCtBE3QXikukYNkMBibxtjFRvQz5yvFxYGuuKFEqtKWBkStG",
  "key7": "35SzxYr8aDwKp17dADZSnHBSGbfzWWMKF8eNBGvQWYqcnMgYxHeLrbpaZJjwuKhpzKjokbUti2MfVU3ragNp8fsY",
  "key8": "ru2Ye6Djj8G1NCXDchzw54bZ2fWt7raY9jWpBbYJfPci8NkAZqjukVQ4bU2oKhZ6hq4NYKZjR8X5BWVHPfLHQVr",
  "key9": "5karTQi9BruML5WrLySQg5tXBti41Sw1iB76SE2KVRRjepxgG1JuLGmrisHyMQ1NR9yxRv7nWxbyvyiSsuH64yY2",
  "key10": "5CMZrXoqtHWN6JNGsfR5FUeEJQH3iuiPk1ndqAmRuxnG9fGNZjwfzF5LqPraLWkC1QsgCbf6Jn8R3a13NqPoxULC",
  "key11": "3Uq2NwBxtRWGpcWqUmDA4Dat4a1bPdfNyXtDXefm7CV2xP6t2qrbaZwgjwvbeNoTMmqn4Ra67xaqmUHupZMx6T67",
  "key12": "3MZVGwD58McPtqWR3seWaiQgEWG8aNGxsGNUSdiMvkzy9yAEJ3XsdG6ux3jv82KrZkQAprrFXNu6DadaUfDQkwSn",
  "key13": "4yBXKkUZVsgFpWxJoAqnbwXUHciCJ8Ybx734EMkJfHeR6QPYQGihB1PnL5gBpjAHEwYHZKdniPT5m22AAtUSZiXA",
  "key14": "3reYyazkioQTZqRuVzmUcvqcKBASsHJBNNWgNrr85RBh3x7uPWKJv8NaPbMMGjf9HNKfhfV5ogsfVqyZRqZHqTL8",
  "key15": "3QdmgGrtsdsyWRcHrEyviPzwinxsRJmRYM73oRJS6mdJz4ukCcPth16WAXNP1egAexCr2sJFuRM5uuqHEcDbVkqv",
  "key16": "128tw7yskBPKsihSAfXfooj2dmk7j9vcyDZKXHYNadihGrzMKbq7pnxVuUxwBZGooWup6YMdj1msFk9Q2hbSxM4C",
  "key17": "2kfveyF7p9pu7fZrXe3ui3JnzTDnV6HpgZH8sCm87QJDqChd1hPLfjMUu5C7DZBYcd5mqrAykKSWiCNxUMmpJXyN",
  "key18": "5DVnk9hA1TBgBxxzwagM31R9SUQVpGQgGsXM8CuygXWrucow3KH27fGHL81tnERVPjPmE31KZVDbxH7gsS7QGoFT",
  "key19": "WiaNZ1np1vxfW48UKXeDAK4KTbC5seA5B4BjYYqW3gkUUeStmX4AZcidH9mVf4uWZZUjdsnPdZvaN9F2nN5oB9s",
  "key20": "5TXyJiS7zS5Tnv6gpcyfWffC2MRLhdBNDQpCqdcomE2mSY3wGhyiHA6oTu45qryKUwhRCxqpK172fjdRVfZocrBV",
  "key21": "3deSJhm982oAP1Jxh4biSR7SNtCdm1bBMkyuNKEqSRbmXPYLFywu9qcj6n5Cc3L8v4BjovUX7XqBDUb2pj7AjKcy",
  "key22": "46yW5NLR5rjTMasNRhCdcXQt2LRun46YoFMqkmK8CYMEye6ho7sRPv5Ld5WAbjy44mQEKNsjLFqsKh8vn49brUpa",
  "key23": "6oYnmk13XEz5cUGFZgLCDN1jNygL6YDZP5rfbB1EMrukerLxHQ3zMP2n9X9kBcG73gfCpXfbMmCBDUFwzbq7Bbw",
  "key24": "4szDw7vEJdENtyE2QNgv26FUsRh7i7ywpC7Hs4r8nSstuqPcXgBtpkNrdGYAH4CUzELKGzDoonJVu4wVvLbnz1RT",
  "key25": "2Sa3pKMCFCZSYVwccxn484KX42FV69sxm6LHupkNeXfA8bPUPnnKd4q9rs9Gf3rVfTQLHHALCxdG74H7i9aWJ1Fb",
  "key26": "5bHKSUwZ92pM6Evxsz1c4ZHgp7fpF8EdFFfuhGoBVv6a94Rfj3qm6dGuz2zAumnM8CuKAAW6d57A6E7R6tTNZaYf",
  "key27": "53meQmJi6jX1Ub1s87t2sA31XgBShQTZur2MFoEUao9GnzUaveGmuXwEag7FnG4BEep974c5iCaKfiBdUT2dDMUd",
  "key28": "5W5MhVe5p4XZv78cuhRYuZBfE2aozxcTAQn5DsVeMMp14UzFrkfuxt1Ega85bKw9xfLEt9svy4xZmEKEzsRfBe2T",
  "key29": "2ufcycytvrMWMfVcmeg5fGwYh2Yh1Y3Nop3FE3ii5gvdm67Z9buTj1GiBDRH4AVJ7YzfuWRUoY4XL7jnLGLYnGCs",
  "key30": "2KFFRQ67YFeQE2NZ4LeSMqCSP3WcAfiRqR6mRfjgk2HfboCRGj433ikW5MG1eHrf2WnGEssuGFXy3xdqdUZdVyZV",
  "key31": "4WorCkNU4odUxDLuCU8ShqGAdfFpJih9CujrAnybWb9CkjSV7GRuFNYKfYrEQNctvGZJyDaq1FfezbbeBFb6M6KC",
  "key32": "4nsfXvdfwsWUWpsnenua29Zmqn6qNS6jxw8vemTqr1L7LiQH8w3BH5Xu57hbdWJDmU6yCn9QZQVWoixWTEdEE68j",
  "key33": "Vx9mrGS9NdmvdptTdo6SPL7tLaERuXAwouyR3aMpDmyi1Bmf7E1ZuKcn4jJahueUvjxggDwNnQ37oLrcbqSkLQw",
  "key34": "3gDpTdAoNM4P441Tie5W2TYXcrmz18yv1Dr5RzvpKwCAjoDJxhQgD7xSEqdbzAtRBMi8uFWC5ZXYtu6VJpeuYNtZ"
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
