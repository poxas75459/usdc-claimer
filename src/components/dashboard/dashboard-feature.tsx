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
    "3bY9J8PKCBKcyjBcdB2GkCnsP4RoUVUsrLm8GH247N2dgXZikBTedAwR98XUP4AnXv4KQieT3BLbk9c1ogaj1ZPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqRFMJzy3hXyhE4VegdiboNCBVUiyYu1rjPPDtYuw85ncEftzQRjRqh1Bk7iaqnu9B61gWK6sXGe62CU7ykvfnM",
  "key1": "4at8tC2ZJsPTMHiRdGXYyaJgzEaDPvAmJHVrvL5JBbTxk9RuBhgcBV6krkrM4m6aJfis4o4GL1hKaKtHbXgAw3n2",
  "key2": "2gGEH3vi8NVGcUbWYkcLoTUcpZ8LqYFAwFbouXZjP3VYWDRJ3yYXHftVE6qFhQVtYZajD37xZHiEmzGo6QUiQvs4",
  "key3": "39qRzSe1s1j579Se9yQnhkpzLserXb2fbSrD4ZYVgC43VPMCk788LP15EgSbbDAUMnj2U9JoiHPFjDgn14uE5JF5",
  "key4": "25LJiGL5nWFUmg8Ysyn4mXLxvroSGmfr9kwSBdJPnN5yYaNazkgY8oRG4FZGArB9QGDiNRcZg91Kchd1k4QxDjyM",
  "key5": "bnAPTxTXAxk7eLaYKUsVT4T5D4qASUd94P5QmEEsXvWPK6BtFHwx2TrYuiJrUZYrSh54otvGqoxuvHev1mTpmaL",
  "key6": "5pkWMyEPi8RAr47erU7XqRscXmsQCNw3daKnv4J8h6aihkpRNvp3ejhNMBNgym1BxtC2yA19p6BhGAqF1Z7yQQ4z",
  "key7": "62PJEne7WJWy1HoaSs5anSkXKWourdqwrDJ6aQwKwvmhZrANJccs8CzjEXcg2BHeQxGqY2f1siCQJ5Dtw3aSdEtE",
  "key8": "3C2jFtuGqQPoApXBj1M98ANGoNtvGgMpET7fkzGWWpduPFkqNZAgGJWeJXxkF4ukHQG64n5ZZmHYKVgiUfRbXtJr",
  "key9": "3bZwp7gaJmVeyGU2Ljw5k4nm1Rs3sWEUAANY8tisWe8eS2A5jLYL17abERpKte5f3MmxfJeQ3VgYwA4KAHq1B8Nj",
  "key10": "5QgKvzKLfbgJa2qSnqpSrp9Tyagb5DcSfgewXsVQahYFs5FMpWyHY8FdKT3CwgNYk45AjEXzkekfpPipfEST6JZB",
  "key11": "3MF4w7tUMkxyhs11mPyphpTEU2ZPHvbG1t8CGbasAYnX74iJg1DhhMoexmv6LfsC3G3qeJFeGkwWjYveuzAbAAxD",
  "key12": "5UtMyV96jzS3PsE1uGddJBjCh6wRLr3qZxmmFNJu7vb1HKPuuWMHiSdUnXKacveuSdBjnyvDWuxAtBLmYFFdaqVn",
  "key13": "4FDR9HSyx7cLJjmx2HdMhVrTDdByfQss6qenTvMFDkAHxGQE5yQzSPfbfGxuQ8C5LEs7Sqmio92whnMSGYVpCjKG",
  "key14": "msP7UTeuCF7MK7pBFqCxWLZCSaR3RHW9QXBvNbxaHhErv7jaH5jQJPQh4ZPVtY3StqFGPERZQ1BfmosC4XoJWtU",
  "key15": "51wvL3Jrqe2AghgB31JvyMbWTzVvXKfZsZaFfdD4vZjboFhx4vK2fxnWSw4xzkdQtrn7WwmvnzLWi5fNJTYmFZrh",
  "key16": "qcCae4Xe8qQT94WmR9QVMzhamW7BEwHb1dJfbXTpj2nAuTyRHq2LSG1UrnPC5kLUQ93zAnqUMDwkDMtGQgqkhjJ",
  "key17": "4GtK5DHYwm4VNeHsaTPm8KLACftnhDE3HXAWgnstt7nXTCGhzY2kZstTkfGFz8rBSNh7Yp9DpYZBynjwmyKzQdSx",
  "key18": "5fHqTrnQ7wBsqQLEGhEVAVqTa2w59pk5MCGppk3XxMaiiaC4T15m9RXHK3BLieC9fVKm6UhtpQdmhth8Ujv3f8vA",
  "key19": "2obwJd9zMshm9CJoJ4dACRBqj8Z7KYnaqDKK1YEbpq1LDW2SbGwWUqbWvzQcN3Cn4yXh1bqbMgt4zLi6AoqHtuwP",
  "key20": "41cPf8qyXSCj14VmRjs24Wz89eYndU7QFcu2qLmLn3mpaNrhWxHw9esW9VyrdhfxqNxRNR2Dk6yCESr7UAjcSca9",
  "key21": "2MLeXkz5JyaWrfPev6G1PnieBoD6W2cuPbpa7cHutxcHQzagiqGXHWaRw6oUfjHpDSPJo6eB7XrRxmAty7FaJqkP",
  "key22": "YHcyZsVqTpeEHiwTYRAjkAzSDnRWUMMkkrHS5QEmsvHAGihHvirhm98unvE6E5zB8MkuGC6TRqFAvkw7b3kroNC",
  "key23": "3fzuJzahfyiVk8ttjaceXfSNyG6bUbPTv2EZPDtKP9A4DeJFPkjFKJP5cm8xdGkkC8KeTujyLBFnw75JcohvQYrq",
  "key24": "49STxQXoPvKRbxdeNSLrgUwqsGAV5wDQCHFVRaVN8uFiZwzkaR2d1cECQQMvbHrGAvEPu84YCSfpc2NEMEjwKo7Y"
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
