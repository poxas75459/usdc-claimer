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
    "2iv7zg5Pq3kSfibnJQ4NbD6yWzM9m4BeZTeLvP3MBu56WvcB2QSSkNX5oV6fYcdUinmwoMW6dNBV9Q3C5gVx6F6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bE79h7UB6kgWjQLs4T3SBhchaStJArnB5qsoimsv5uwpjfpaxoLhZo8kZqDLKagtpsyFLjDXcNYhPKYFPrhf8xh",
  "key1": "exPYoL8JAWUw2pgSgWJvog4Ryc4aUzPiRRhfdxeVBAJ1PFHeHimku4FgsELQxt8bKQntXcqW6vDW1X3aLEXpPm3",
  "key2": "JcuW5efytRsXp2pgCbcPqTnbZ3a1XcuhA2H7SU5nt66PdZH617i558CqYic7JHqEEbYX8mMspisFpL8CXngyK1M",
  "key3": "3RJnoFVVzoS91jDdfp6TqG3aKdy3ubuAicZaHzXdLHAPB8eFbHTBdxg7qP5wTeHUPVg2HCopQ7pNMV8p2Zumhaw2",
  "key4": "5gMiRPFn4doamoE5u3xkSG3T2ZBMzw2nyskfXjX6kEy6BWTmSBQwrW4FppRa2QhnejheRonApLRZGi8drTXAuE3t",
  "key5": "2k8zrLiBJrYzuZGfkKB8qXWZk4eq97Fo2ofgdk4PopBfQzc1uhny7xHoT98WeuHgwdTLkHEXLwHNXLJsjMT1UBz1",
  "key6": "4wTRgjuLErc5KmAuhqbfM3WxxhwwB9tLYTj5SMFyZpQ3X7YKKLhA2ahW5SKREuD62knmVZ2sNiZojfaKzS56BiVu",
  "key7": "45AcDRN7Ht56nbYq1o9Xq9bFLXpbG6hXxKtAEoL5jvPJym9m1CRdsxcDrY61eTD2fVjimF4NAKMwrbuYfPXuN7JV",
  "key8": "4ED4mThXXNP7Mw2XxoP49oCttKQiVvZpyEnSW2PXBN4B8WnHi44tsoinT4xdWpgXBnmc3SJiEsDJLxgoEC6TDaq5",
  "key9": "3vEq5fG3pMyVj8ZyhJwunGbBkYTsgMuyXiaDdc8MCJRu1bPRtnLqZgbZcaviubS5rqtediAoK3b6y8gDxDAJQCwT",
  "key10": "A2Wp5hyQkFBPS7HcadFraBNAXRbv4FWPU3sJ6x1h8kupYzuVgoDvpHErwAwksLwN7oGRNtvTAnZ5H93Ftw3S9Ez",
  "key11": "LaHpLfkS85gzwgDhQuTiVLPcbPcQhVhyhnhTAgUfo9Cyi7DBM9q3PFzJQHoBAGhntLLSyDY8kq2cqakNS3eirLL",
  "key12": "wirUT9qkf1RQ19HS7kHTA58FaPSzYThANrPJWABDbD5bd9ZB268VYHRw5tvcFaiHfodn8pPZGtjsAJAr6CFEQAE",
  "key13": "5wi2dD5soUActMzecqLDBhRhDJ7Dpa8iHoiVC8SQX8wSCEZysWJQt2P4EadxSpHu61oskcN3dwL88TC3EHf8Fao5",
  "key14": "5EEGsyGVK5iLrMBQSVVAnbuXCmW4Fj2weHoHs9JV5jxz9M34EHjGS3ySWudzdRGSH7MLkW51EHwxgNdA7fWEyboJ",
  "key15": "3kgzuBbpVMoX9H6hCzJK28KGZcfxY1ZPRPAkg2RqR7GDeqCe65C9jDVbEPibwn4LijryVmbA6FgAkjKnLj1w2Rpj",
  "key16": "66MRAfkNpjV2WM58GasSa4nfadVDQo38vjubkckSQaAHknwZfUUh8vctdxw3N9KeiQ7zRTfcRxq53mC9BBDBo7vf",
  "key17": "4FcgYgDhoGm7LK7CE7XPxudSS1Rp7SYSb7UbQLeciLAppm7ZkL84UeSjioXW4oyvPBc6GYm6dvCXCiR92hv8TSaZ",
  "key18": "52gtywhAS7SPoTn2TxHKePAYLfyNgaegBePZFopXBEu6bpSvbSfUEoukTpYS48UN7YRGcE5GVmchgXK6jnhnw2FN",
  "key19": "2mnhAKdzpNkfbR3gqN9WL2YLQLsm9U9oQifQeKH5wC5EQtX96aEiQZepsYVvHL3G1AnyYkkjWbuJnbysgjLSQLd9",
  "key20": "3B3ZnHCSEWsVUqhuJXh55mHAGjwYvKfXEuP6g79y3ePMyA8Jr6gduHtm7aNW1UaTwLRaSXzs46yPT8rVvTKmk2yn",
  "key21": "DA2jmvzP8jLWvmMvArnuzh1zrgt38PsEe8u3zATwqNcruo4hjZQSNDn3iD59QLT8zYQDsdDjJPt9wReeMYbkyn3",
  "key22": "53xXgzvr49Abfisyo2waKnTk6GzxrNzvz5VGkamgMHLd9Peg7Q7Uy9aNmWg13tvaAS5uxDPjkAqXsnyAjnPEg9FV",
  "key23": "4pTM9o4Cv8hnoy3S4UNjy1JE58ey4AMy4cX1L8ghAYRCpgQb768aic47FJCRYAQyREqLS4WfbXuSC1LeVBY3EZBw",
  "key24": "2xnMsgWjyChVVMV3ct5wUcQiJPGNK3noGnGB11kZ1UtHHmduhgQudLsEFhjKWWwJaLsUAfNsjajm8jSkyDHsQKrw",
  "key25": "2djDfMXeuWfdvtLvLiQhyGmhzBphKu1NxLUS3FsjHenenZfVt155zg8J6Ha1dVg7cXHj3wqQP7oc5d8PnuanzaXX",
  "key26": "5FYW3BSAHKEiTBbN57CHvSCDh8qF8PGKnpRS7nugYjoJTYi2ddEKfASp9VWuWqsXMKZ5jSEBaZbgv4iT2zZQHnWy",
  "key27": "cjPaf7EvRomZSFHTYDDgDmt42rUthsMXC9f2n6g6weKWba7ULbteCjFw8jJBtWwrfjEUqU3ZSR747NYw9wKfYC5",
  "key28": "5bsSYq4u6mNEuYidmUTjjD7eYDPUk8JMQUT5ezkmkLyeshXggJf8wkTDJFDDhBXYXWn1ais2cMq2YKY2SRRAFUbM",
  "key29": "42Gf3WTKWob1KhZ7NNZ2Yip1zmCbVUNev4DrgtmxUkVVe5MwoWHJe4G9A8nTb8XMaNLqwh6temU5CAiLLrcsoGz9"
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
