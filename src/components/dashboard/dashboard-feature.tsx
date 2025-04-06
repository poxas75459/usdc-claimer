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
    "3GR7wfsMjV2EgMhsrj2daGALCqmAHFjChg8KhSfagiVAFyomb9mAkSfyL1RsgZWudU9PTAKEQABnVJg85wACk92W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWsKtYrWLZdVdPeNSYofcay13w4HSuwCW2YoyrkiaF54dn5fDxA3Quc6RWuG9oVepAtpWaBCzztu7krnUCDf9gT",
  "key1": "22pUWAADFq8BFPZHeDxtg1T8LVmrHzwQgsXDEL9JHr3A7GCLtQBriRCz1KxkhoMkWks2GocUTfEQArFXAd5D6Gvx",
  "key2": "2SD5GpyuCsgvSU1maUaZtHfKx5uZ68GRawriNWbw5GpA8ewfuXeicaYUdeftcJR5Q5guddEtKeeVXY1eWjZDTSZj",
  "key3": "41qV9SDQGfEjkx7ECV6riLotJsUY6own137m1kmne6JuhmcRvRtDbqfafBd2r7rw5a8UZXpvuPPpVmgCofWi9rTe",
  "key4": "5gTysLp7GGPxmJPFraxH7vxmCJv3cudaXfHJF1hteJ3MU4QnpyNvTyzoKhfE65pzoeiGtroqdgeQgHEmm4NWQbsb",
  "key5": "3SpEiumNzutu95ytB9SYczLj17jyKMUUE4Kjxo39pB3tXo8iCWsecGMzJXaqqFx6YMLWxEj1kb5nKATim5XdEVan",
  "key6": "3WAu6hv4UomKWDSFMRmzQtW4tQWKvcaT6oAAHS9tHa3sFFyQJmyBar3tXUKuiPZ81tzTr2MrxrLQhCcsj9LUoSuQ",
  "key7": "2J24mgCBx9pehmaHCE2wfuzWBC7Cguxa2fG1r9siEWic2ijB5DdF6Be1xsLcTDj9BZfcyyDbotFmNtt9dyYtYnR9",
  "key8": "3uNY2nVUp33TzvfmhCRxL7kAizprEMzDip54Kih5dS8PpP4LMLxNTAgfzfzX7TfQh4ydnakAnCKx4JbM3ixpCiLk",
  "key9": "5tK2SooJvEDwBipBca6HEVQVCvBwzMWnoknxy36AN7xGbjmU4J9qC8SYSDiJ3qvTKQv5Dj2PVfjXc6LbLNDw7yH1",
  "key10": "22WaeaiPJqbACD7NhMAksa7GpBUHUECuhAzBdVendTzgMkpvfP12d6SyPXv3AXnVCCgWAEW3E7RCfCFtCbaeCCxm",
  "key11": "58iTEm59a3KT9Ksjv7raafYxDYuvqNn3VteHUwzFwbKHbxSPWZhXTxSPhdfiusQFEqcfcGdcnmHBSEkpr568nmCi",
  "key12": "28GdNB2ia7VKyYMg5s2udufywA5PjHMWZfveknCdtwbR2x33Sen5arecqdXoLSxxCAstAivmUUhz3zUPatLJTE2M",
  "key13": "2LzxqAHSxhFPNmqqS2T54Rf8BYEqjSNNaorPPGEJExnh3ix98C3QXf1Hvw4dBSCzXrtJVsTH2dC717ai1FufTD1u",
  "key14": "4wthtVYg3WNZx2HxMa67DS7eHXUJ3ns2kyiovKvMuPvL7eyMuaE4b9XjQfHtFD3GcE66EqoeGc5syqm3dTfYeQEn",
  "key15": "4A6KFM16a9h6TcemXyPt1iUDCvAknLvFKAbuYqHLP6BnCVKvp8jVcdyoS35gveJVhKLHc5bYZbXxyeJTZS1XgTAL",
  "key16": "5U5oT1CwgZEEUPwy3fdjgWaLHMatVb1oavswukytsBZye2MtE9wkLhSYfJHe5T4WFRJ79ogSC9FSKWXuXtNt1UkS",
  "key17": "3iMfe3Jo2RrLXUKE4vgAWWB7K4mvvrxGSSXATXNEgXQ6ePCb8EtYkVdjPqweY7BjGecM4n9sYWSgrQLskKBLLnyk",
  "key18": "4kbzSrQZdht1RTvUkgPw7P8zGE87r1PiTg5fCAArbjChCPtUW1EJNNUkqs2ZXWEzTK8rHhj7kAhcMsdsWLj4KM6S",
  "key19": "2FbhhUo75hAixQgTJgzQ34KyjsQ35WcEvaV66Biv2fGm8MH1JMQUcv4GVFFqaMDdXwBdTTa6KqRs8z1pSXLs5Ci5",
  "key20": "64rS4NWdihABzndgvg9sKu2HN6v4CYCrJQzKsddnsrV6DRNL2uxwbzmBR4PxsJDd92tbvwhsKNscMF76bwKe8bm8",
  "key21": "4TmYwc6KXw5ayxFm3GKfDMUCtJgkddxrT92kRCoKeSp91cot2mySrcAuC2mqHbUhbwWFtJVUecr8xJS9VXKhWe3M",
  "key22": "bcjvMW4nDYLZ5bt2Pb5woD5UuLNpJpjn9kk3JUVkVndTMSGE9sU9uwqVTqGtDNAAdBqEbPUGytapHtrs56jQzYw",
  "key23": "5NJd64ipKnSULmK6f6XTKZC31B7UaNhL6sDudM7NLLDCweidQNomojZKdEd4dqR58XegChoSwt9bQxwXC4FeH8wp",
  "key24": "QY1MFrNT3BVUxaSQhMZF7fWu3XUswhPC7rVKxhE17CsB562J2BRBfVuhCKzVihYY5AhU5Z4coY9cKyTraaC1xHg",
  "key25": "dRrsKtaRoGkL8bqZururJxZwaL3PkkY1WULxvm3g81HsMnKKJzY1xrW9uK5kA9qNGVcJJouAwChvYDhBv3gy32V",
  "key26": "4ELE8Hu59qLmtYfaqgvQjXvokStbWTk22YBbWJmymB6g1cDhdkmG8NosmVQrTP17rzyCtyPaED5Xt2NyfS9Ne9Rr",
  "key27": "5JaduCS4D1pjeMpADyqGPMMhdNhHtww91tmKwfQik74uGtn9hzPbwU5fe5MtEeZKNx94mXk7tvDME1uXuTq5tcfm",
  "key28": "5jGMwzCatbuvqspD3WSs2HKQ7XLTW9tGnZZSmkt1mK5HokApyQwBGsPTKaayyAABcy7PzWAx9o2wpnaQuYfQrC9m",
  "key29": "3Ltk9KRMituwdVSVcKQQixtZRJRuxnFcjTC1F8j47DgUH434M3aMTGpdZh44vsRNcTTSZCKfuwz6Q2zXwsGtRjiT",
  "key30": "3mazF9WpTopwrddjgcPsWpmE41quPhdApoTcPSgeduYsg39xnrwGG5Zu9oRi3hHuFNRt5WD1F3crhsLVB7xeawES",
  "key31": "2FpfjZSFqr2NtCmLfhNj9znka1HP3aQzVzvQ6TAm32rgRYDaGLLVYZy5vgEa388kSfzmCJwVQN7QJrP6AAv1tjcK"
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
