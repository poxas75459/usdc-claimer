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
    "2ac1ZFN3diAsxndUu3Tof3c1wb4pMyni6ktVjoRZQqTR6TX5DaLMwkcne84KWkYZXWBehoFbPq3SQ2eut19j3pBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AdsooMf83ESb6FtBXQGuedCLm9JHRKvCVxnDULWWKXWjPCTW8VetHxV8UzZY5akHVkq8oeypCpEfRmjx3Ch3cxy",
  "key1": "56v4uXg5htbAjseCjA7BD9fQEqhcCnsbRor5b7n6k4Y9awuyXr2FmLM7PgaiC2FhVqZiYjtgSy8NSH4vnYqpiwsJ",
  "key2": "5p8aLFam7o5ZPup95t747xuk5rVRReC3Pr2a2G6xTbcMDF141HVSr55Ey8iw1mBNXJUxzQcNqVnGNonNCuXfhcEK",
  "key3": "2HxGg7jP8S8r8MKodfY6asuf5prF4ZkPjwubZjjcCiFAvvqKsFTAcZHWfBZVyB2DQvEDexSvLmEiUFXpV99ed2HZ",
  "key4": "25JMKUgdrc4U3HZt2bNtVJVyFhQDzWLXDgVXEy4XQmmuzybQmufMboVfg8DV4AiQcoQ1doPQK4E9m5WptL1YSFgx",
  "key5": "RveuoXK3cDpJ3BtrPwMtKoP1pAB2a7aGAwRDCzDCNRJcHCzmVKT5syhfbbXW86uPnjhsc6fqMemBsay6aGo4XhZ",
  "key6": "4n4aJJRire9PQVkyakSrtydFxuLW8FW4sg2NFCe9KkCZiEPjsgCNRYUrDgMHWpC3s8SFNfved4b5B9bzewuvrbeE",
  "key7": "4bsegU7wXmdifRYcsWJF4JxF1SfE9VBExXqbRmFb3exU9USBjssmYr2GsSjvYPxK9v2bg5LwtPxnav9F3cgfYM9E",
  "key8": "bfdDewJ59jQV71D8cJVQ4eVF77LQ7XQnkwDiWsRCmAQCFmt3w24iXyWYQKaYQxrbGZCEE3bgkPFJtJs29tAu7E1",
  "key9": "w2cvr6zYtx3BsUxDvpdBFEuKQj6LF6ghtWHhPEahif8zdrVS9hE6vw8hcN2rWWNXCHyGmPrQD1oaUSGcRvVdGmJ",
  "key10": "4uSnaTLTVmPmjBkypyA966JRS5gmdfP396yELxK5NDacr5HVTamXb62SF5Cc4jvtT5wxS77i4aFuQLYoB7j6PupP",
  "key11": "4YcnKhE3V9UpUBkVzG8uMmsWWUhW2fKEj2jouPyZ9fUcZNeeLU1gFuVf4eGDNjP737GZLtYsr4o469wfEmgbSsDv",
  "key12": "38UzLgtN5BjxVpYm6N9MfZ1FKXXPqewwEECexHnzonSrMNQQPFaHJw4hmdrrNb6FeMQJP5n3EaSyEMq9dQq7jtXy",
  "key13": "2BN5xbmTJwTpquEVWr4AjcSfaTjow8QiDKWRYE1ve1SncykLRD83UJA6xjiTVpFaJ689wnArT8g9f6VZWVGnkbz7",
  "key14": "3yA6io3VpcoTPSBJa59RjC9uU27HB8VSVpXGTzThSyYHMrqE1rNbqXy4mFQvFAv8PzLe65cTQaQwZayQ82TtK93e",
  "key15": "oGmVNfajehLLw6mfkJVP4P1EtFisQeA3pqgWQWKhSnZrQ2gwXVTEankLYWhKFTUdxmdBTL7PceojMCoa2aXT6EM",
  "key16": "RyLj8pWyKEz41xnVB6RkGcr914TUphFVauUZW91oRN369XRaNS8GtaAUfPk7x5FPS46KvsXVsd16vb2rpoEuCzk",
  "key17": "k1XKsbvJUSmAtJGQcfz69VuUhwKdubLjnYjJY3WwEQyVmAgpio72u4gCw5pxUTYbfSCjMMdJJxgBXr93X6tdqmq",
  "key18": "5JfNyFiBjzVAeMq1iSBbnYiRizBbtKEDe6cNeEjQuxrLf4ZskCCUGVKsWmC6Bn2FcBmydiADnqoTyxycknEifXHR",
  "key19": "3z4sHbD6YXyizA4p2CmT8yMMADUdr1nfJNC9J1Mf6gYxFLDbNHAwWC2Xx5r2z4gU59WhJQjo8ygSM8sMtYm1RBru",
  "key20": "4zQnMf75HJku2vLtuRvUGu2nbscjTRqhh2PZXnidVEbFhg2PxPqe2akgAyZ5TE9yivu4tPRBuhVGWZSCQqAnYzEV",
  "key21": "4oWacsJv5LzfxKB4r8rH6c4XdgkEzV2BDBX61pLJRqhC1yeYMrG9tWBCfBhS9wMvPxFsxd2A1auQX8ir36qnLNho",
  "key22": "5n1zwgrukixuhqJE7CKorCHac8FqyvqSfAmm8UodRuMJTMVfDLhpFkybMx7pEUxT9TCh9d5DKBFekWvAs3LrvoCP",
  "key23": "3768W7wjmJQQ3LzUStNZjab6dNg5XCXJNx1x4kjRmi6C9b9quCvBFHBKNwf8KnsYTQ7iVmCVdf8GR5kSgcAqf2Q6",
  "key24": "3GkmpPfszAYc9bw3Me81XzFrpWSFRbFgJNnF4AfvRbCzbcwbvSgB3beyDFiUQqypJucfkMeP9zSFva3pE24xcjyo",
  "key25": "3APeaXNHYxo2KDS8YYZsgQ7onVJTQwrfYrdrZDzH2EiDzPVMH2gKBCnLmcDnzVovQgacacczvzUVXCG86KMUxks8",
  "key26": "3eCXrnchcVQ8EURE17qYzu8fyVWVUiyJErC7CfAUWqx7T8Kf2Hq3V6G2G8FXcTWqYci7Uv2XhXE1GMzZnCtxxUjX",
  "key27": "5y3ii7CEKqayvqjNSEUgJeYYXCEapVTkvhS7duTX5U6pQExbRZqpzG2NH28Bc3hj3ak8EoDDTkDyr5K7VJiCSgxo",
  "key28": "36BDgHQNUHvVZGxBKTF7agmSpTrqRjZwNQH3gxVB3938xTuKvgbnQHgDNmhByFQwREvE2P5Gdyxgsdw4bX7ir63h",
  "key29": "22xu3asHz6UCvDv2AdfUDkwqUuCJbUUoqnB8Pq8wYHQpxjS8sLfucx4HJzJr5rmTqkdLPNUCkVnAi1vifciVBTin",
  "key30": "5LKnWdKpenrm7RLqS9wBSiNMV9A4Qa3Sqxbw3pQqtGULc3kXZxGo8WNnbeKMbQiYWBA1y9tHWLFaf7Q6nfgTpHSz",
  "key31": "37LCpxZgvVyGTphmyaWddXpF1b2UfoY61BW17pMhD3DA6MgnNZP1fn23RLiCxfBtQw1zdJ4L4auNW7bGhcsQcX9G",
  "key32": "3tXvNsDp2Hne1EnJ14VwgHyKx8D7XKeT9mkJpQhEYyPph2JiZwt5H639Sb1Nyyh7iXvaPoRmtQtcDTwJqorVrwKV",
  "key33": "56Vaabas1ARg81PXbFnrgBdWkgUTdt3JoT8WgkD2J95TSJUMXLnvt5TQHz1tw9dnY7NiEUgNWjyazbh7KmTfg8Kv",
  "key34": "44LJksRcjbdhMfCZvXS6jW2HedrkB5TeTzTodGfhdwm6yR46JkDbZ9jpb9pYT4kwjskB3Cuy7ns3MdYPgDFhRg7Z",
  "key35": "2e1496VbijSFPzXXZFCyH24fAqJNHP1NGcbi2Qe8bYfiZtMY1doRDtCE1H4ouq7Xff3yxFqMTvuJDvmob5r3sZFv",
  "key36": "5WFgyDpB2wgN2NPMnSrj1rcjymoHH3V9pVhYdzsYFK1RYSHqcvRumAAi4SDchqC3GWxnV13LXQ5UsbkWT2mD7967",
  "key37": "4jiFzfR1GFYR4ESme49bg69oofidbMg7ZiskD4DXSWSfvMTpsAqy1UvDNWU6zSdoaYQN1B9pDWA7rodcTTLtmKPa"
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
