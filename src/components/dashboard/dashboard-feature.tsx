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
    "2LiYQYcSWnMuzbU89b3oe4sybtnzEUi2TXDZ2Dk5ozja5rD4MyiqhL3iyhTgPtRTeFQ2RBawPLDq2XGyhbuuHa9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxVmRUURFZ7xVnHUBe8skLeG86dHmutP66Sw5qHnSPDDKyvHT43RkHQkagpdAaxwYzXBNo6LaBWzProMNNDTnxM",
  "key1": "NV9e4zYrzyjxnyDPY6W5Mismbb5ouDoTPcB6pkswfoB4XCXe7DcAjvBbsAu4S5ggEnMuanx6sFU4omo93wDeuGY",
  "key2": "5NiWgMjftMMTDs43itx5jyrTLf6YjVfrRMCSUzeobC76Z7B2N9BjcbW1M4Emq7giYSycpWGMjuppAV5U8rzqZQx9",
  "key3": "5FFGr2mqAK4RV7CLFqmPy7C7KxBydeuALcrjEHto9kdbcx95qPiwGGFdXsQG3KimYvrDhaS78BPd8w9spSbGJf7S",
  "key4": "8MjQcQSsis86DsWtmXXdf6D2NjCLVWkr28TtXRBZW1jaQZ5mCAghUKsDzPzPFK5Cs2e4a5gQpoXBkdZN83TxtJr",
  "key5": "ZpWUAg6h7QJvArqWih8pyNYdHaQD5HT673KjV9Jydvqtph7QsWgh7SR268zs8juxr9kjhPmRxmo6Vx4PMBPqVA8",
  "key6": "5NJiWudBpDBz234PtpbGurJkCcT6iZDi73YSB7BHf4EKqGNuHQ1NQkkyxPnuKcrsKfxGAExVw9YsEEqVMUDfuwH",
  "key7": "33y5M7SqY9Eg7PgU1tRMVPibSWtBcpaMpQhrsWUnb1CX3sKZZQhyvYA2VBWJuviDH3UyARPDGa2WrUGjFnb9Suxc",
  "key8": "3nn9YiXJS5Dp9MNLzdyTJKrMbwCCJhTZ4P4feZAQaaJqxp8ASPUr8PAe9ict1P3Mtd3WbhCho6pPKuCAzDtfTy88",
  "key9": "4hndCsRBBvpWHSJ2fKeNPGNWEztL1ABpaEr2cLBt7msg9U9NbgwZvUkAj6FQzjvzbEZ1KqDUy3mdEKrvaPdSABGK",
  "key10": "5FPZXRaasCvtfc2eqwyUuL5mdDegGg23qiBSY8uJv96URqdnUBGh5R7o67mQvK1DhZ2p5ZZxZpUC9HPW45BDJb6S",
  "key11": "5QTa7vYfgtpU31a5FQufkV347cKstCM2MXav5fKRrpD7PWudUeg47zmJX5DcQR2soY9u47j3c3M15eyUXfGeLbHg",
  "key12": "65W8m3cUiFVn2B2LjViZhDJrxv2cQjNJWu4NMdVJ6nztFUQqv7hhigNCXMC3P4JzUZovgxz2sCf5XzcSP2VjYLF5",
  "key13": "5FEwrGAq4Qc8qu1x9RYbchePgWi9D4qTREk1teUt64e221xrjBK3i7qss7fP9JRF4i3prSq14as6xtjxVhFHgSyq",
  "key14": "4Ap6oMquo4jUGBRYr3beWoSktATuvoT3Xr4We7djTRuQ22mzj6vyqGysReKit2TZ3Unci45Ms2iCB8W5mPNaMrqv",
  "key15": "2qd1d46g7BsVP7v7Me5ujy8ihhchkD4uUbBUHM1TSxU6GRE7Y6hME1yDJRnaq1PWEDQWNqSmHzHA4T9THG1oUmAg",
  "key16": "4YFhEhfTvG5snvNfy4RaUpwqVyUMA9dWbn6ZNJmS4RbfFsQWd4dcD8xgKxNmyxr91FH1B9RfHsA7aBA2wfCamYaC",
  "key17": "D5Jd1R3PWeLXMsSXmu4WKU2ozKu7BHAyEpUSjFB6UzpRFatADEiFZb4rbAsSGxyF3PKvygUR8bLEmfK296snrp6",
  "key18": "5wbrA1uM8fKxZZHYhzA1KQsqBwypPRtZqHY3QZK7tZNf1NNf1TVDRg6nRW9CkzTx2Fy1nuxpijfc91isi8b8PTQA",
  "key19": "26KjWWvqXohcJEvgsnnRtTyrx29DJdKYMN5xni2YiHrP6s11sa7YXwpEH1U2nbGUng6Vo5emtZusoaxnrzWgdJwq",
  "key20": "KKQm6KRpzKnAcoiJ5qFYYZGVgKvQ8AnkZfsYoyekogH3KWFNcuNbVrav6CjBv3Jvesn5zyjg9mQT7R6qjpU83kC",
  "key21": "5p7P7K13s67YspvEJfZxGb3Nsa8pMquKCUyyFudzhefBFMyWYTq2MEkf9z3gxpdCTs5RegtUbtSGcW3iG3ASNwDk",
  "key22": "2AuHL1wUgz1fAdyCTqaHYYdU7Fbp6FSFCMbrgM9FN72hfXhFkeqFkmvT6XGqhDJhchx8gi8wh67WUf5WSyeBn3wu",
  "key23": "3rg4kXq6VSnD5s95cHPHW7v8qsjZ8CnUC39sHGZEJeXCojNQDPGxwiY7Qonns8MkVSVXZ46w1nbMVrwfp4315Dc2",
  "key24": "2qNoQaS4RbGgxrMXHcd6tChzGE5DqmXWd3r7MBbSzEFwg3qrw6EEHmj33BtTUQgSkEwurUsLVhZPe1hVo4onTZKn",
  "key25": "5fpcGMmfG8xeNQQd47GtMhtb1FHm5qwdpEQ4codqKzL8kkuznZhoasMgHdMETanm2KPRM3D8tFpATtX9d3shi9Pz",
  "key26": "3RbL9gwLu2faznNLgHtV826ZZPHRccotjjFju3KCMjEf7vF8z61323gw2MZa4Kiy2MfTk6VdupJTTagWGhYiNjs2",
  "key27": "3QjBuSxUZWkDmyZKCiETe6SQF57bL56hX3WbUy1hiW5TsAcxGpHGAhT2B15uFzVjgSfDca8tzQskEXiQQe8UQQZK",
  "key28": "3JjGgTKAMdj23GL3JZUjms758L2wjfgUYU9VuiMgLw3GcLF5V11Fb6VyiyAeThzQV3aeHUGxJqymafjkb1arqRZs",
  "key29": "5aWoEwothjh9yUCZLQv67bj8ZqKczmmnVotRskFH7MbvtFoNpbP9fXoN23SovzX1btSLxkEYo4iQExND26SSFXHn",
  "key30": "27MjS6MDXJbundRvZt4TU2rZStE65a1wafDwNZneeY8UpoVhuRiSDoQ8ygH19fWmKxiAMrkjGMowGGWyiCFTTpkc",
  "key31": "4uLA4kjVPoBcZUWf4bSe3kNd6cBc2HFrbWgVcGmPqeArg4YKWisiuno3PuyE48zPmGnZ1mYr4X56BZQ2eqK884nW",
  "key32": "6PpeQ5LqvQ7ivoMsspn17cMGPKUPp7Jro2b7GEycfSpFdCf6wrMDHgTtdGhT1Y2cKN5gihXJCFZzjMyKHuuRgjb",
  "key33": "5LZKdgsyJX61WwMEFdbC7sVZE8oAnsb7zkAXm3syR8WdZYk6xdc8vZg45fVkn5vwbnTLE6abAQqtBBfxQgKyFyk3",
  "key34": "3MghDBYegkwNaD2khqhpy4BvBawQWRf6NvebhUgdygYZnwTcm14jr4qUj6LYgNCC7nStKw5J3EQGx7zUAfnAEjzf",
  "key35": "Xbi9mL6zPSP2u8jrH5jdic2jehtwC1Nsc5PLjn7YXtpuFX4eu8iVY9oteWNkxTdb1kz5aMoU9nQHTWMkyztTMNq",
  "key36": "2moCYqhb3pRurhKA2Fx24KfwMsSMVsLr53CRz4EcZJ7ZTM7g3Xxk6iRKHV7DJ6KkCXxpA3xR8PkQ68V8UY9dfyip",
  "key37": "3ye8QJ2gXjsDqkMgxg63Yok4B8funDixAzW8ZgBEXu7D3MHSKBrkpreSnWdb2eBLEkD6rGaPTn2eAF8KGiUqUXDt",
  "key38": "4Qu4EXsEeGCauawR4yuH8V7tJgdSpiSoLmdKtynH6BJfbWAihpH3vd4oETpRe6ydsJEQ5NcGd3WCknKRriKxjA49",
  "key39": "3xG6McVz9UaX4tAZNwr4wjwvvRZrnc7KYNWRnQvaqFgBG1aSfQLPrFXpGaUfvQfWfMAJwPDfXU3HNo3eusLz2gBV",
  "key40": "5KgJcF2zb7o3ZNWbBQFPnXR5hsZMZkfgiTfuZxjUCKKLgttvdWiSHitVs6Je1Cts613NkLifgKyzWnZU9bA2pptf",
  "key41": "4zYenRVqUVv3rpxkTLuuaJAXFuAeUXSmC3RoiZDYThrNry24mhqp5Awq1wXvSUmTdo4nj91FFMWTihTMKbEsF2M5",
  "key42": "U5tt3FGUsJnTbg8bPD5U3MDfg3pftxyATYdiPLTgZP28QyQdz1NteKqDAKEdPoNg2VNbfMccoWDUETcvzgMMN6f",
  "key43": "54GXJZ1rpGVS4znadRPSoDsqLSVTqfTYinMu4Qs1EJQxkt1ZZYfRPMWfhW1DRkHDeped3yxcst4WA6121nz7zjFD",
  "key44": "5yC1nrfEMmUCg9GrpgsVA5TMdtXZ3721tYMGkvNvfoX2UwsDvFFVfGmNZcVCNh2V4uti7QuVLigmwj1JpXDhFoQm",
  "key45": "3frxmDAUwVyjfpMKiHqAapCPWZ7XKHQUkUEJXzeMmGzRtdn5xhaXTFhLjdE8SGutReRDZAiNEAF9PdfZCe5w4Zyn"
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
