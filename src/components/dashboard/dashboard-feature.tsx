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
    "5ihNLaUD9NnB2gp4YG5PTiC2Cd7CLgLEHd5EaNueDDbfjKYzgFfjoA3mRwHch57Bt2XC76vfMFHQWhwhFK4CZt5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjK67Z28hfx1dqnyf731asZf4qqwUUrHy3u2zZpiEQFtnvJ8r6aVLy7nzXwahWsRfdx1eJa5JtJMnYXk2ZqgkQt",
  "key1": "5qCHSYCATxZHrom4d6BXeA2cL3LjYJPKP9nPPPJ3ibZphWuq25TmMBDYs1bR8fwN7hHj9fae7k8ZmaxhVFqyFyap",
  "key2": "4LMRgCoGY4FBE9ZiSNW4HhVFUDUh1ChvB6mZcB2zafAgC6noCo26KiwyfiECdA3FoDg99cx7nkqDDW6DZkJ6tomq",
  "key3": "4ngzxQsftoqkoNiJuo4KbWzt9ndCFrn6cFTzxiKQde6EALyvhzhF1iz1bEgTaWCMgnFzjbjdgac9Vn67PS97epoW",
  "key4": "2dKX34YNrbiXLrBeJ5HFntrVkU4zGHZ37TyuksDF2hrFRaXgsKc7KRc8Fqn47sWqxMZcoKMvhrnKcN1fhHCEYH8N",
  "key5": "5ZnmMbmCHEio62VgzepZruJGUzNxNdUARkm5wsfyV6zjQxPrSBY5JzCTogEUf2HALcLTNHZQhc8Ab8smk63EKgE4",
  "key6": "5dBYTFLe69cWB55xuArktwUVT37XzusrGGdgkGaWyRLFSwzHXdd6hxCR5HAFDWwpat5LS5xQ9J1Jkrwa6adYYmmT",
  "key7": "4LXcjzwBcK6dkzMrssdnFJhzXqWERZaGzR3XG2bTgRziKKiarDt14w2VnDkD6MkP5JPV8bXAXhaozFmHRka8JSrn",
  "key8": "3HUHdKqpo46Tg4ExT2dvK6W1nY67Z2odWUuhUvP2Y2LUKgW71f6hsPUyZVurAtvnNMBPSFY4jHCYPJafRHZta5Lp",
  "key9": "3iq9Yy41DAFcvqckkoGYgTmWxGSBviv5UBzF6sL8E3XEcDg2EoAzWwkdfFWHqGQbjNrPjf7DrJRQw3hgJdp91Ebp",
  "key10": "4uvSshunwLCCqqyJhqudaC8fXmDrHbsXpJe7AWe55msA9mYy58RZMHkFsVq1ak5xGmFxwtC2CoLVWgbQfVmVutHp",
  "key11": "51Z2GWEyrkBWztTPmbjcbZJYq4MCSGvaB1ghz3h2EVLxLqDbr5SFMkhPB91EG8RMVcgyYHxRBNeeguayscNNz6cS",
  "key12": "2GjBbGV3pUdNrC6PXYC3THdHzcVmQUUrGJEw596E5b2Lwm98QjZpmtYa4KBZ8s7ybvjTBdqnScPqdvktCUppksK8",
  "key13": "5skzaXuCEAz36Qz86kNMbDQ9QjBj7Aw3pRk6DmyRJBnxL1dE3Ev8ZUy1XhqoD6dbvCvBJJ46cJupG7MT7M72Ddwj",
  "key14": "3XPsEcQ8wJYMeckQXuX1TsGd5UVGxeUCqiEQ6UnXHQs7juMSHaZwXpNzLPdWpCNhUu7VCABstcz9DZMxMrTRNEc4",
  "key15": "5Q1TnL5pHDiAxUMPTvX61NoofbAMzmpS3VhQuLvYDoUHNakrzq86WLf7YykU88GvDoNHYeQPr3vbZ3b9Kd7nedmz",
  "key16": "b8gUmre1gxjPZcYgvMMRdUvNCn9AQgLcVEoky4REAhbq1qJ9M25YMSgMdeKJCRnQLoPu8vfMoq5SesgUBZ3jqZr",
  "key17": "67nQZNQRar8pevjrYReuTxwpMxwHgPhWcLjsANT52Euqi54vXbhnAvJCAVrw6nkKrNtkxb84bQ8xM2TD5eKLJAtM",
  "key18": "4eYk37upTT3ivQ6UAuv9SLrbi1ZWjZSVmYsdxVyCcZ5hpcsCz4mMnBZqtrMZYV4kyttLDtr29KcZz1DRdUi5iyu5",
  "key19": "5mxQesuDFzXZzXpdzVXhxy6nfQ6VD76bjnbbqsGwun4eeya3jx9PJu6h672s4nzZtDUv88gWJvpkzkNEHXfwe5cx",
  "key20": "3m6M3ybnudWcyWpN5u2ooPD8voig7nrDLKwQDfe5nnkPHv1hGWmLGrscbBam8QrdyQFVr87s2HzrmARqig1d1fuS",
  "key21": "Hkx7c9zm7h7r6DdCMBgFTZgFuWrj1B8Du3TzYVtn1o4M42ZxLhJcbcpu6C1mdLdfrJioy2R7SsaiCDc48TfSSHL",
  "key22": "3WTQkjerfvpRXiLwTeT4TZ7gHK4m6aTKgC4Z4vNhVLFDvkjFUEcBBmobf687V99KWZvTcCt76mmuG4gc6WjSxqLt",
  "key23": "zkUfd4xQoU9DQCmXtrowJAsYz38bvJox7djD9wCQ5hSiSYFnaTdgteSPJLoowXo3DvoGK3aFaAvKBedEQHE9pug",
  "key24": "3ZGfyWn6tZHMhKAzWB5tMa4FGroh2KK7mvR77QAXkN8baQ6nRb6xCbD9Hpctm4vVubGbpv3sdfA4UdVeyqhGG4Gt",
  "key25": "49DvZRisFeTgXRehAinFZhjVMSQNLqcKwApfUZjrR2bD4ymQ8xQZNppVCnhyjnimuABvBWcLbbWpuMZ5Coir1ozZ",
  "key26": "4zbYHSAFcbUwXgCW5x9Bbj9gKJbaMESj3C8WWNfvNPMgUhTq2uXRKRA4Nm8QFjoTQcDVYr88wZ87RjdpsJoHCyPE",
  "key27": "3PDRFoefUbY8DBTrE9cTswuJUaWjomaZhxzE1wifQMcvYXD64XqEySiFXPxko9j3kzgwi2m7FAArdLja36KraSe1",
  "key28": "5jCteMgrkVV1LGc8G9mY2LA5ZFz6SDMdpcaYUrPjVGGd9ytTEMYLX8bDgiaJobsZWE3cWqQRpoFTEtRr9Sjubezk",
  "key29": "YeL5vSfDTMaFnHx9f4fCaJSTiYKeQA7ptFfvXFgGZLpWAovS3b871o2By7SiZjxBYr4CqQEjRFfGE6mrsHZ2HA6",
  "key30": "3rc1woK8u6GzEe57hfEqGnYGuZSHGm6BnrRymyvY6TPG6bas2uYwYAdqKgt94tHrptDCLmBZUb5rqbVa2uhx8zAt",
  "key31": "RxMWLQu1isEMezexxhJuP3Nr2LghQvCtdPBiK28Ms65dxDVDcDcysw6mq2GsYbbkR1Uqcnrppot3bSLWic2wa1j",
  "key32": "5SjJp8LHGEnojgrxLs9MhyXwgXX1wuD3Jb6EjBxv3o1d3VcMcWg9JGftgqrqBDvCBu9TdQTjwVbuTDc4woHoMjpZ",
  "key33": "3dM7yhbTGLoF88TkUViifXQ3RGMbgcenhg58bDpjG3Nn5fGEtYL8WYbq1bTZtkiFAHS6rr3erV9QoneCG6YwXuPB",
  "key34": "ZVudLLWNMZXKTgya5gMzo9cmW3hkNMAM9xsGdzRwE1jSMrMBV1v5iKracikYSpmbWqy8hLA1W5fSk8ZWwDHxG69",
  "key35": "4ALA6MqQbEavfE2MbztLemWUCQUmD2XHQiNaAMBDMJjSuShqkyH8v9SgxhBo8PABvFJR9s6cNZGHnG3fYsrxxRPz",
  "key36": "2p6sLAisNebk3hbRZNmtVW2xbQi7XqzqTQzkTUE3ynhswnZ4mgrQ1f5kwjej5aMT8osiqWYLAbHnP3uvAS2nW584"
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
