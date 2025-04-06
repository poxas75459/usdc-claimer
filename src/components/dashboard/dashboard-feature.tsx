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
    "63XR1b5n3Vj6RSWwp9HrtBLzwQKVJTj9ejgnKDCgbtvnKFmf21L9V6pz3qfuC1e2JwyyZDFgLh64YpMpMJZgmZsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjBi47JdWfN6E7zRWwcjgs6LCQeGzhWPjPDLTB5FBSRGigxrANiYP7fwGs36SmXYBJgkpsw8HSREAh5stnufMFe",
  "key1": "45Q39DUoyGfXUdtc9S9RvhwzyWSvZRxrKjsKfu46vp2GJixorU2tsGPFde1GDZ8DRRkm14H7vq238vZK4UAM9jSV",
  "key2": "4LiVuKBodY3tQKQX6Ax3YCQoGhP2bhDdZGDKKrdxh5hnkLvn2HqKdVska8hxaqCFWyyGhWcA9AK9DLbb6naYrsaG",
  "key3": "2UzfqoCf8NMDV1bj9gWXFaBQ9cLCB9zHmq7esGh8uQQDKTwshC6zbanXDwqsJiP7UrFWdV9PqPBJDSFeu9fSTacn",
  "key4": "4XE3at8uqVSAc6qaWPyQGN8cViwkQxnFkUBj8PFSqbjk2mXx7psMTsgGBEBjhzc13t2pzciWY5ZDWgsHhDHmGhdA",
  "key5": "65wyUSdWAazpsHXQiWgtcAhLkbP5Y9jtSTdLA1LExysAiVrXm3DsixShsLsJ2rEJhSDdBtSPsmxK2k9RtGyiNYpC",
  "key6": "Cp78RHd6xaXtLCLx7MAisURarAPtMR2L4cqrbpcfH8Ga6RAkWuT4SxSN83cyioJm83VXvxfb7DrV1ZLYr8PU5uj",
  "key7": "5ohsyfnWHYKZ4DouerLdgJ8MoAUqDunMFhRMQZkLfhnnggufn7dyooSg1ZiEp5e1wGbv2bstQaSnXtVxjPev1CK9",
  "key8": "4TJVycF2FzT7bVBcu49pGskBh3BspSRN8rz4SJzFP5ZfUs4HZfUmGXS3Hqx4WjZpZjucHKRV7L9gqrmGCZNPcYW5",
  "key9": "22a4GuDzUBRMgZxjYeBuz5KP1fEiH29e6bYkRvfGkrKCHmETWWNYWbfZh4FLEcnt1cprtcsLVTQWZ6JdHW7jBP6s",
  "key10": "5zd6gSgrk59L365kd6NcN96q1wbWk2Q74tSftopKrULJ5yPKuGV8sohDXrDqHaZ2qcSYt3iT8dbD9QvLtvxSBbzL",
  "key11": "2Twqte8bFyTfXy1f8me7253W2coxoFZsRKvxWqzsNohzbgDAt5QqedfdE5UfoFCcvTGfxQLMxnvg4KUFrQwm3sGo",
  "key12": "2dye1LgtuWscAgfGF4pQBLkZJ4PjtfRdEgXzDrjy6kCuBTxysxrhxYytpPhpppp7nzqTkuR67fqgLJkkC6iMqCn2",
  "key13": "4mhx88LDNNRxFWTbX8pLUcCzNUjE3a6JFkc1NGNav6efpPh1ZjmycSiAJDxEJcz2uGVc3neFk7xGjkWoev3v1ens",
  "key14": "8wdeNVZQTedNXibk5KEgYSrjYBBYhPQNt79CtNgQKPxNU6Gs9yrrVJRBJ7aGUNbBYzSrr1QJ2uXXBavMB5ohJ6G",
  "key15": "HtycbdijfYXK27YRckxqMGV4ss4uTs5siy3WvtBVES4nZCD1Zg6x5dWedm7DgwowCMx1sW6PbdBxrNxbH81SZEP",
  "key16": "5KfUmR7mqiGZbAzEBHBgdzhRdm8YYLaXu3zA2sWEEtneCDKPQeKAtkV9wdJoqtPHG54NYEX8sxz3qDJiASLjcbep",
  "key17": "4BMRX9M3N8bQVj8Ene6tqQJ5faZjp12BhEakuSBQEsW7tMDGj7m3BmWBuGGNz66kiamnEZmebd4Dem1owv4wcvGr",
  "key18": "26ezo9AYxJr6i3VjHPjQ7wfvZKyUKmP2Q2KBuUiM8iJw5wywjSBSrxJ5EPYuuCj587YesMVdLXf4gjaiZp2YL2WM",
  "key19": "RvPGP9KP9ewi1wcJzXm3JPp1fcrync6yUu6vt2czFcJcYF93R3FxhhFoCPuGv6tuXpr6Vviu2fqt7jhMctsddqn",
  "key20": "4cn7cFQz5nT3XxEkYqpD84N21s6Rzuw3wfCLzB9q16bqnH4JNQzR1STvDdVcKR46A1WekCHDr1nNH4D82855xLhU",
  "key21": "4RCoaePhC198hcvUSgmA1dqJztkPAHprm5LfMSjerZuCBrN8aMpsQFvsgNvNrVXJqHf7nijuEfdwuaAEfQ6nrbHV",
  "key22": "3v1fp5SiDZj9eL1kSLDGp5NLMP6ho6qfe6kjRF7f2uq1MvEHxg78yDbnjCokcs54rNYR6zXvJjefp5i7ryjy1LEs",
  "key23": "5p4XuD6csPM46HetCDX4wXU3rsiCQ6x7Pmjovad2gg8DuHkCfestKaWYdkYDGGjxH8ys9n4tessQHZ3DgXFaMf74",
  "key24": "4iXrArnPT7EykenzpH9Pv9CYUYyMs17RAsygmkk8JcrQ8dUaM3SP3r3vMb6yGxFEEgDuNHpV5rit8E2ujkmrSEdd",
  "key25": "2xFbfiVbbx6GCEkdg5ZEqMtpEzyVg11qVadXXyKDDg19B8wspCjqZDdc7kkDQfWC34WBDW89uHmzKBGVgNjpT7Ra",
  "key26": "4v5FDEsfGiqh8TYQaquFmBDDCvNQ29e9gnGzCJRtMv9it6tTiouMQdjGTxfkbSbQpdLyvCvhj3SjHoCUthzWtzGQ",
  "key27": "4vRdsxbZzPB3xAHPoXwWX6UF1TdLxWcH7wRo11op2AAj8yGFJgySRhHM4AywAoDqEnUc6iUUjb4rySSXyi7oDiCu",
  "key28": "3o2zMFcWRQhJgZBj27ZWdQrogXEukjPH9mTsFJqgWHTpcCLSu31N6gret98sApxxXa2YxDqmN1kHnDN9EbZFpYg8",
  "key29": "5KEHAbPKWywyhRh9NR6SiFu94xYsEZFUnhGmFPqPcH8YbAxW2GFAoHkHvvyXCLdxqp7MP5VWPmtroQHWg5XwVPt7",
  "key30": "3mVTxCm4n9H6AJ7LqCw45GRwxau83V35SzKJbyR5spipZUgfGA1GciW7LLxRTXPzP4PeiiLccyz2wfYxWuGnmktQ",
  "key31": "25zjpeA3Pbk3TEahDVXNVKLm83MDPGLMw1ev6nwx4z9bGnAWz1AeQdWMC7UXNoxSrXbrXm6rhbRpWR4P1akBE26U",
  "key32": "2CcVAVZMx4BWy57p5pgjRK9x2YC58f5bVCaAcKpT6n1GeWQ5TpMqYsqhXzEanePRZQJCM9PH2nyYyUyAGTZB8Um9",
  "key33": "2PfwDo8gxcRbMPc4xsZ4NBWPz9PVGVJGqm8VJhNG7KCsinmF9LdRQ1U7oW8gKZCEtefFbCkTEskXszaWmrAr1rhr",
  "key34": "3ZwYAtAuy98EcQ2VXi1RpaPbxfXyyRAnubFKLVswMQG67bMbicJ9Ecohbx6bpP644dQQoQmq9RuFzYndviB6Wb5A",
  "key35": "nnim9a8Bou8mq4XxWUGDjTrnXsWNq4jbTfceQK8Fx5j26xJP9w7rJfNMbeNSLQXi9VVcVH6u4PrLomU2dhobf6X",
  "key36": "3sedVy1Ru6ciYoswU1h7Vwg8ZuwsPjbs8dPemxnVfmxxvQdrk4Zyo8fsSBgNfvavuCdaHsnDo3K2UC34mgSX4b1b",
  "key37": "5Ru2sfeUFN2e7zDBpB8DrUTWiKZC7Xa7vQ9njJTZ1HDJcdPB3pWgXvB9NoLgxmpMxTefNRVPGEBRfAACRLJE9CHG",
  "key38": "41gPyHPnDWNfPP1Avge9smGVZW7NDTU2r8P5aV4tdANAfAfPZq9xuNXsh1HPJQpq2yPAXnq9sn1UEs2MfRSwJQGt",
  "key39": "4sYheCzRYR3hFLZNo39r7HacYBhMCnBDGad3CgKd2JWucc4jmr1PKxCNDNXaYWCot4YCGMLiCXJipbg7MUCjkTHS",
  "key40": "5UtbmVnQwo8Gz8rnwkkym3uztPv52QXXD9YmE3mGhAvGuHWGYNsVbQbjBANGAcT7EPLwxz915gkj5Ux6N6zAjTSt",
  "key41": "4Z1LuCY3w5dhN7M18UkPHg8whDnGL532cZRrykuWaG2uuQK3v7w1GBFuCmd1nyRcsUct3KfkRbeH7K76fCMvgUxJ",
  "key42": "3MTmZ49EayN4vbMCk5zXS86Z3tXuDEKDZGKEXs8d95WH1jPEGyTg2c9vhSvSVtb7oqgj7fGm13dyqMcxmpJbsmbz",
  "key43": "62gBDxQNTU1wNVqhNP3saw6uUz8Ne4Kpk1EqKerqF79hcWnJbGRW52uRaDsMpttRoZuVnkvG6RiDCykh1s88csuU",
  "key44": "3S5ESFpG9taxMTnmcxqcXTg1zxqJHDMt2b85oLRR2nwf5vHmbUTPhJwR8x4tET7dAfPK5oCxE7DEcJHQMqNbnkQV",
  "key45": "7UmjEDegkrXNXB8SPN3RFEr8pHfVo1p8jPNwYmtCHEvduTqdiPAYfmAvnZGsnkdUGNKik7E6TrLVHhUNcm94Wnt",
  "key46": "JPGcU7xpzWMXTGZmpWexheE6zwScGMvZuxmtdPxMTnJbTvCBz6a9LJwUxxCgjMVGy4jRz3z2deLozc2HkaLv4YM",
  "key47": "5PQycx14F9ADqcCS5322BT3DbnApE1Eowi8VnnFXNNst4FKpn8QosdpW7EkYocP4uetu8uaDh8kHSh6DvEBFcoak",
  "key48": "khfGS1pKqEyjN9b6FTZf2NA8k2AZBT5h7QoKGEk95KTR72LTRimnHbJ64ybhB7z68ivQLmHuCUC53oErUJzS2tn"
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
