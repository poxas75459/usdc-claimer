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
    "4aQv728KMTxushd9JccVj5NpiczaqBzAuoAYxe62CYJ3FYQGX6Uz2ziiByUPbemaUyCJ6DqyLQg2aVqtDWmnN58M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Dy2gFDQW6SKLXfE1w6Kdw3E5FtTRaG8jHHHtwtzae6r73SoK6Pw8VzwZ338iSw8pZBTSLbZJeFA6eNjDsiwe3S",
  "key1": "5qAGw5Jz7UmNfd1LFUpEkiR6jsUa2GG4iJSNLQfTS4HaQ6htRoiYyJAeprcqnfgHDuRJK11sgtx5o9XpHy2Pzsep",
  "key2": "5Zfq1hp2kAFcMuk89RExG28R9am7x3VpHSrXAoqP9BGi6UicJUtVsPQBebpKZjh4pDiZNeRr3BsmC7gbvbQGpjiL",
  "key3": "5FCjY3d3MBJz1JJwPRY6feSp9JtzHTB5JKDQWwQpZ5NipGdWFbLSjW4yPKFih67wL18eYzzgRbv2aWjzE4LNs2vd",
  "key4": "4AEAcB686khXRecQub7DVVTrVqnB9o5DaWmJgs7wsD7WYnqX4f7f3mvcWQyq4NA6NYyLGDWUVvqVJN4VBi4DKefW",
  "key5": "2XJ2Wyd8mxWpDQHBy1iKeNYsyFtZpLnxiUvcq3gKodztqmnDkZgn3FHJt5vQK786be4uHzho7UtTXvhj1Kik64iW",
  "key6": "5f9eL645bXV34zPmZuGnqV39SUaPFR2o8Nk5qEKDut8ZEKXvWQwuFBrGqsU8Yw44P8QMjBety2o9Edo1yi6MZLkR",
  "key7": "2kbES9GeYNNZHmXo2Am1moSDjqiTQL2t7e7RuieArv3ogTdjUbDbW6gf8ySFeYzDdFRLHtchJpZ7DLDVoTcQw5Pr",
  "key8": "4mmyMx38YbnMTdMytE78rXzG22QEst5HmnM7XqQAo9eKeNKwdk1LDnMdUy3pwErxsoTzY9dXB9qonZFuQ9QWDncd",
  "key9": "3WAWg6fedgtuzo1Mqk8yrMDqRz2cvLRQkGCmNaj97pfA3D5z3AFPu1y3fQy4kHpseA2kQM8SYXHEUrqjhY7JvDUq",
  "key10": "2qKTVAyRKBLHFxQkFxApwrxYyZGV4tkWHLtDi3apSHCghvuvtXB31yczzfd39x8Zh8egkW8Zxa8Nv7q6eY6nVW8Z",
  "key11": "3WBDDbotgdAHJ3RWC2JFksE8MoPgkWyJfMvcWuwKmJ6aBzXFvp77UgGkHww7eAxyE7JF29w7uuJapwM7bLx2Atek",
  "key12": "51fhfD9JhCBqAsgWQV8PDeSFcNG1vVgYeMeYy1KvRN8n3P2iVB2qVkf4zYjwnrRzrpr3rswb2WGq7PJr9EsYbva",
  "key13": "2R1AwSP7sU9j58ooZRzhD4sNUg22Lz8WoPLTAmvKvVw5pbXHTibDfQ85Unqc3twtnS6Pw3tc5Xns25MLbdi3SWba",
  "key14": "2jC1HXqk2Djyr7mAspdx4egWe1pRL3G1LwoWYiYqi3dfdE1jqibPBqbJRas3NCxaSzP6WLFhNCTUMSyqAc5qL45E",
  "key15": "mJfwnUKFdRkCpU5wTsesSoJ5b4XgAFbxhC1P3NJwuMFnWTrWDtRLoZk734nVNTQtneaewYy5DsNa85qFFAkDXgH",
  "key16": "w3aLinDScupDEwbCwVYn8pf3CJMPM1Cm2jBgzxVLAuDj4pp9wovrHopApBQVGjDb7MgN4APUXiXvfGLVM7ZHz7a",
  "key17": "5VRn77WUhJXw3hE7qyhb12mdiURThZ5qGstWiySCz92YCB7mJxJ7dExbbpxKhCDYXMPHpPq6vcei4eihnzSYMqjA",
  "key18": "4LnkKh12xA6iBMt89uMgCzp2Pw8m7CcDy7DTjPa3EfWMMQNvLxh26Puvfb84mnURcEFCqr1aq2XoXwMZhQCcDu55",
  "key19": "517YrxahjbhY77BThW7u32UcZQN8KM862zMx5du488dPMmtCx6vzWpJdaCrsxXeBcBVogRM1DY6zwBThh8xi654Q",
  "key20": "3ntS8pH2v6izuAJY1e9UoRSvzNxcJcsS3evvJTs7zh1jU1uHUNKoUPnkLAUXoaE4YjvezuGazKWTFjySP87NzaHS",
  "key21": "5ZQe9Hug5CZNg6FJdxthYUqVrjMZ3tqgpH5QkzzrFL3bBU2SxpYSjnCvk8vNWBU5jqzUw7onXexovhsRPiy1vZEJ",
  "key22": "c83u5rkjWtS8r9cpgZP3ZPPvS7VUrNkJLXpSn7wKcRJCZ5qb4EeGViXVzVgmZ6Zmdmre5j4oagFs9LQL1ps2Xgm",
  "key23": "2jgJkDiP7XAnnWXHSCswbzbtp857j7baLuxM6CRhgNiQPCfBidsgS8KJyvLGwPx2YVqPE8BZbFkxiuaxRHi4T4WG",
  "key24": "2Eh6S5oQAQVTpZhBAe8SLx5bnvY8SgJAtvrhLeLRYdVPmP73w23Zf1evZoX14FwzqF1VRXe8zzvKhMa4VxLA9GiK",
  "key25": "3thgLnvymxoZW7DrScqoPQfm3i68tmpTUtoqxDK7ec55EtoAWy9iNsJnFChZRJyAMtR28ri1N42fJxJ9siWga58y",
  "key26": "28uG85BXxPFUnoDHnBX9tywm1k4bZMG6yRQu4JspyV73JzQPpqyM9jPW2E6rBCW2abFBQmHdgHgHBsH6BkXjuzDV",
  "key27": "3ZUA5xxK5d9ffFDHkAQNwH4Bcf6cTr5bfv1MZ2q1WdiTBZ231e9x7LjbEvGcCTFb4rS8TgXrBcWvF88s8BKqtr1h",
  "key28": "5AnmQwrAa286Pa3k6mHV3H6tvm72TizHByRQTe5iDsNR4Mnjru9cVBstebyTyVwMe24hQ5oBJf5oViu8acq7oWzM",
  "key29": "5AF7cZDCE5Epear25jRY5q4VAn3LgBNuFJrnVw6a9odYhnvJ9Lt56sTU8WfgnQETt3rexqQXan27BneXCfESRNd4",
  "key30": "44hfCfrb3gDR3Duum6xx64uSKBBVUAi4w4nohB4f3K1bx5htHmu5ojrz83iuNg2S9A8HovBywDaGGFf83CNMGDWs",
  "key31": "2weGJhmJAz6EmqMT64EZTgJ2ZHLoA1UNdgcG8Ux5ChgQe1wLUeH2Nreaf4MzgEo3qB485rAg71TYGYVRZuej2hdx"
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
