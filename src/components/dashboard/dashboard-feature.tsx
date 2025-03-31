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
    "5nN8trP2JpiSP2cHqg1YEdBSaqKTdpwGogRhJgPQ7bxmh98fy4z4aAfCjrMnqscDk8rfJFbuJDwzeewQLsPitS1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ebLFXA6iJLsEWb7PX7ooMJq26UgwKqvPLY9LpdpdNEALXKkRttWSje43nakpY5FEBCb2fjbFyR3AJbwf16CBUiQ",
  "key1": "5mbhQDyh6wBStwx1VoshWXZQQp5Bbekx9gvqQwAqXmvMdfpjadwM4Bd3E6Cb7T6UCSUdCsBhGPwdXxNm943UkTSq",
  "key2": "Q5woBsLJwNQviES3VzkfxAyjVggncEJiouFBjjVUobkPu6VxxqUUNKNcXTrQzoGpsdoVfqkcYFnJg26JN1ZmW6F",
  "key3": "5jTEMZVqn13oA8rzpQGvCKwVrMi7fsC61pHdrkWNbtvRDF6c81KhNEPQkpNSHQBq9VG5e2yFaL34G5GWmppwhMj1",
  "key4": "3RwNGnzxu8dGT2X4TNcVSNGybkAvvqxgQ6dh8SKXbzwqUTRdgq68hsnx9nEGwvGWBMwbkc2V1vXU4aBPNvhdrnLn",
  "key5": "2ZiWsgp4kGAe7FwGAbaRC74PupGTasAT8vFe566a7nzExDge6QLtFnA4cH4xjuVdXibyyXCECuMKh1TxaEwp7DA2",
  "key6": "XAGmKp5qyJtMwm4MeGsZVwQRu8eBcKzvSAtKSw2H7UTofEXSgHBxjnPVjmUF6fX78FAqMq38bu5tZo4nsxtGvb1",
  "key7": "5kqwpciZVpF7VaEZsKWfTtvinbvyEuVwGQMwrPj7p3tzBHtZUVEjRaCjRM9Wb7iR21TZcfroWCgMLCudLo4y4NKa",
  "key8": "hw55TLb33PaZ5PBNo2ZHLNaDNeMUEtRr47R47XMaYGCtH5KJ2Mz4ZC76R5NLRES4HGBKfEnRcL2K7HNh5XTUNAq",
  "key9": "5igcXE4dwDLLKfQjWmU6YEzQFr39m7PMaJNERVDb7v9pugd5adiAtKPaGeTab7DgVLxyVR5LW7QgMWqX7P8DmedM",
  "key10": "4LXfLsZNYiSPf7AnHL1veiga9xF5uManHdR5unwVV5wiVfptZ5Hqc78Y47fjVbLzcCCA77bx712j89JhHZCa29zy",
  "key11": "4z3TFHYXiWcokEZc3AAGRL2TcQCQEmwTiNgecwGwvCVdfhnyKqkRA62FErySLzmm4DeuKw2e8ytPybVNzYP6r8wZ",
  "key12": "3qKNXHUWroGuMCMoGLwq5tTNCiKtgSaAtuedVBUS3hPCPYt7F7PWLCotqjapmn8wCXWj9qZKkWYgHzNBRu8DjQ7X",
  "key13": "5Q53beBpvSzB6nfcnzNCzRsfegQy68CkNLt5gUy4bWaG5DVsdMvfrVzAZ9gYcziYBUAtqL62Kt6ExdtJkg1ATahM",
  "key14": "2dGCmdrqU2dS5WyjU5rq65SRCbRNMu5vvHPQYe7b47e1enDRZFoXQj5YgC5zFoCDFa5vapxWuMMk88NmVvQLs8EM",
  "key15": "4kB6HN5faE1owu3pjSxwGUzitU6bdvp5ixdobPBnTPHLQKd557GyaQ8jTgBJkWSvX1Qgwsa8mVBksBmdMqDxYB2W",
  "key16": "R7uzxxbZoHdwJLFejBZWK1jHP5nM9v1nrGCbejjx8BuXKeDd3bQ1N1TKdKs1xn5AaYdZFMTo1MwqLj5vFLUcRdd",
  "key17": "5nYbdbCW4CYSApCJXY1LesJjAbcPDMV9ySERoi4A9b2bx4bxzZsbCgb6LmN39Qsofjjm1N3kck6f67YU46phpP4d",
  "key18": "3KfhRUCxEiYjiBKGt7FGh2ECm2WUifHf6YcLfSTsiBASopBoSGbkkCMKRnRjiv3yFqueyZ6JkLohmKxkb1JWhqD3",
  "key19": "h8Yi3T2gEGdd6C36ophGSg56SQjQbKEXJjGinMYgdS6ZR9CoLzMPxbRdQExzdRay4U3wAmhw1TNpXabjX1K9N57",
  "key20": "3zSE1vNNFXYwPBtxkY725QWb7z3Nhp63BVv4NFx1jqAdzNraeD5NmoPYMVFe8Zjfx3xaLg5pwuQWZfXTgoigT4ji",
  "key21": "iqJUub82sM8MyGdhZPBbd4hQ427XKDsjPNYwWid56eiL68Tx36JrEejJvT2Bv4sUoS8h4Tfnb6HZYDHHe2o5Hbd",
  "key22": "4iYidnbBDG9UVE9EMS8YhaYt5FE97taqWQtkqJPxnd2wYNPJvX77ymK9tJqR51CJCMUxsEDaMfsFYZ3UVcVSfb5u",
  "key23": "3mhHsL4c8F4YHfmczmwuRwxJfwJzvALKKStRu3aCY2z38TDs3A832MVqNHMQkc7dB6tfhmcJRDioS1FvLCho4APA",
  "key24": "8ddb2VxFbwipw4iG5QV97Ate9kAwEGzt17cZS4D7QG161rs974CtFFivZRXWz41pioMU1Ng8ABXCsbs1eJmQYWX",
  "key25": "5MeqQgGNu8UCqMmVs1D3ZvFwRbFiioyWiJwfimWoQu577hHXamPihvsHPt8Hex39v73BXivMZ8GaJ1FXURJqgBpk",
  "key26": "4R8QEcWsqi3kVyvRPSjrSEn3tF1XjofzyxKAkS3FakYJD1aKj275GKZhmGXUAcpDfJ2daMQGVb57oosruwQ3WXww",
  "key27": "5a5oMoqXWdxz3Mc2BD9N77NmLL2tUvx8RAMCmDBiXMA1ff9tgkxWiKgsrz7vCjNehYPpGQGq4PnNaCpomSn8WZLB",
  "key28": "5jDu3TnunfPRU9ffoojPTcayUVGUbkwKBjxwngCFYTVD6LgZ13bnHSy7tUYjHKBgtRLsp8NkTz273Q1ESzvpnNpo"
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
