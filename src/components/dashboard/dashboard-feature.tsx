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
    "3utjKfCzgswifGubNPEQLxuydEx5z4pLz8VdnkjEHteudmTgMkm1yjtz3TtSeRAFUYpVKw3VfeXQzD4nAr5bmJk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PVJZ3skPcJzPzhK66Yu6hEJZAFSRimhVCMK9GxAF4Rzoss3o6D9HakK57j7p218vEyuV2MDMky6AEcCoJrrNMw",
  "key1": "2rM7FaQJVB6FXynPerK8SVWqHMDSE3Xy9g6dWtuTWCA4hdfyLqAJS3NHvvd2Ckkcr8RhvUk29Yv2b1pwzr4to3eZ",
  "key2": "oduuSMMEuxJ54E1vQX2VJUjrHo3xppLkHT78tATxq2KZ5rAx6gLuV3XjFCX6ixttxM61RWQPqX6jrT2m5jvsUHd",
  "key3": "57NUxR59hTNJR2fyu7Trf8exd1ABoGfvqCnc4DsQrUrxPkHuNBcNWWL5pFJV2EqELuCXCJwmhyDPpnqTnswATwau",
  "key4": "3jyzHDkvMGyuSXz7ws2r5AN27Kh7uGT7wmnWwGPr16VTXD2YEwf2bJQKdKxh84uvhwVaWVyroCWM1EPADZzL4nRu",
  "key5": "28h9wjkcJHap61UHqz6mrdGvxRSf6ZCEkJrXhuyFVgRc3JUUHeVzyctiYaYzSCzuBHHkqbKmh3KnbeFucY91zw7A",
  "key6": "4dpvDpe6yZPBZvRcr1RXUHVx6tTozKVDUHrV1ooXzJJQbG2WTzX6S4kHVkkT5d7ipuAGr1HeXT2pGYuNiSSYESpJ",
  "key7": "2rVPaUgL4wRgXFTmxuXNeYKqUgeXCQCEamiwzQMgPjZAnn8cj6uqSGXJ1JoAHwbRvSeyj2P5vbjYindy4EstrQWf",
  "key8": "CftAhEYKHnJ2hfE25tpHryRdsYXGRzaqdYK3FimtYnXd3hi95pjiEu7MVCS6dVUPaBFK2rkyWX8nxUBAKfq2Bfr",
  "key9": "4rzHUS956mmkB8nDAEfX7RFhRF6ddvvqfeG6G7QWvqQCMaYJVedVZGqtb3bJAwKM4QSS4werwRU6k8PwCSCzbwKx",
  "key10": "4xoZiNxw8nuKRDHT1CYAD8KFFoeDt3bar4ppm9BET6Pj97TQbdQrcwm4bqrLqPRaB2YqPrq1UDFGTt4nykkR9bYp",
  "key11": "Mtih5fVprMv6tRW2E9TVDet8rupMZyfnzZbBDTsY5Cbr9594JnXCndEkdXGrK7VtMuux6kQhcK7c3Bz84md7EXv",
  "key12": "hrmcEsFu6vNej81YTTVZoeZTKE7NNW2WQxhrQ7kamDUWXRdB4EpHXE5aTdGH7wvvVbhutTY1SwieKiuAtF52pCP",
  "key13": "3qNU8AMhxw6676hZDDmwDBEJR7n3RuzbGD7uThaTSLansUZjXm2k7NKZszSHPG172RnjpG3Uvzz5PEoFr8sk3Qk6",
  "key14": "xZ3JqiGGGFijm52jDvq6Z4JbbCxiT5F2oX5pqYGHFtf98DPJPH3PUwjBebUmicJ4UgfiJKJuAAzWtAWCM3kG1po",
  "key15": "2QZrZu4zS2SswJrFUXamWXh1cAefExG1zdrvhtsnM3Y9udfL1Xxg1gF9jMaH2F3xNj3xYntsPYfLVm5z9e2aRA41",
  "key16": "5sJZVa26NgCLNcrZniTHQr2uwcq5vjvq3XN3BxqHmzamZ4NRXoEcncnNzie86XWbPyW14Ef7yBh7fruptUW7YkG1",
  "key17": "4hcXXzQVY1aNFK43wdq3myhYGktbftEq2Vasdg3HVsvT3pkPzZ16ggdhMJKia3Z8Rbmg8urpnXjLHGnvFgyqcwXu",
  "key18": "3d8n6afX1PKbSFbLndUoowtsSMvGhPqEeXV4bdYgxGU7CEnGxkqarj88t5nusiUWLKHYnbhR2Tw4mkQaVgxtjRKZ",
  "key19": "42ZJqkym7Btb8BUxFgNyZaeGirrDGzoMkpNHSfjc2QQS49qQBCXaimrkcEuTNUT9LpffUTeUfgxGhN99jztLg5if",
  "key20": "2XbocrpRiwMBwu5NF8i3Uf8LdLyZfXGBivc6ZtRHCscRsfdYDFCpXCyf6gYZr2sriTdQ3KXdvVCPst8dLgCzoGAf",
  "key21": "5B2gd7sHbjhThw7su2nZdNeAbQL9N9RD3sh1zQcf2EoUNj4khcJerhr9zsobkLNsCzbWN1RKMEXMWGGstQ9MEzpt",
  "key22": "2JWCrD3qKVfv7HTbJeLxToFkGLbWpWK22SUKEAHz2akNENQSnh2mZAkVnkxgHXZQChnXAxHuaoYNt1b8PvNqRtja",
  "key23": "5RWTuupoyf4qw7vSmNKdSDzPJWZjDNNW7EqfheRBjp1LMjd5vCMd9noAUMSqbEx75HYfeEJFkzujEdpBJsUR2EPQ",
  "key24": "4GGtotZ2Gqk2uNnYF4tCs8HyFK69UPaiyC8BMG4k63pNdxeEQNm2zWNQ5k1nGKK8SsERNKHbn7HWv4wHZrAaKPD3",
  "key25": "2hNeTmkV8WnM3wcCZ8zogkgv3uJreCjs1o3fURDqQC91oxNkdo7TmRuSBvFSjeZPz8jDEULfqLR6T9gmnJSpGoJB",
  "key26": "5ds9n71e56HKeWYEcezM1Eg7p4X8hZYo1CyweRJNF5qVW1bY6229xBVE3FdMdscGJkhsk2a3HWQLh6SpmBDVXyVw"
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
