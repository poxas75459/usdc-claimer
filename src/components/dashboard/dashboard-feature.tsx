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
    "kD2fcvA1sPU1kKiGgSbNvwK2rMRKYXN4g6LhWa8z78v3BfJCfW83vt4WYxZNSvwosxQa89HA6B3iMFeb2Td4DWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aFVAocRPMdHoNHXg7AyoocneRoys6tz3ief6NHxeiUJ3dH1KnLCpgdiLqiJtkP72mTENLNnZjBpJHQaXYG7pjf",
  "key1": "2wGM3GmRYFb9VqRgs9KvpEecd18w4e5xQey11tXN2yX6TXsP72A88mgFiXaTUfhUBfw17CgC9hdfHSsqVrvCDcPj",
  "key2": "4qioTjFYE86VJuQW3uroggYoTqb5fq37pABCmkHXE4tuUYk3PrxmDcKRz4hzJCdLSHXFQEaxsXnBYvVBrmsEU2yn",
  "key3": "4urQVjPXkEFfnGPqiMRauC5e988YhWBTe45CLSCeMAdAH34L3J6TdBsiYP6XHMa6s4obu4rnK4vt8FvnQaq7HWH5",
  "key4": "26Fm1A2ya1tU6RXQd3NGAakuUQSoWKmbMpuMfYWst3K8FUrDVmGTy8DNhLWJrAYhQJGHgB7HDopFJaNL8iT8itpw",
  "key5": "3ZtDzYp55MWwRA4W8ZK4GKc6gmjiqyaghGt6dLm7Q6839QonDR6Xx374ggHTSWKGgx3MUXESJpazBxJSSF4Fht54",
  "key6": "5SJKALAuTfJk6nhUGW5gjsNhmsdZBbXKWTC6nvgA1Vp6y4qPR8qYS7Br7u6Jgm85ohNDYFJ9vF2yVxUmsHk8vWz3",
  "key7": "tCSsR6YjruR8iHSN99khGpxpoBMF48qqwDzTuixnqKkmo6aPcrh5GZKdG9Cy4zunPHxMJ17dSAfp6rAnnJJJPq6",
  "key8": "32XdYN1tHuixt2z46aakWGUVbRrDUctxXk3hgBPT2wrkshyB9NfoRsMeZP2YvMJdUdo1KLAyHVkP5arFmMiLZDhM",
  "key9": "3Doabn3Ratiws1UZthkq1TLtWr6r7uHpxa2EZAaHAg55UsPzc3GCzL11NpPpkVNz6a4BBycQoZoW8QGcBgDavotz",
  "key10": "24JohoXgZkQzsV7CH6pznLfTJeYfk8B5jxg7FgNQg7JwmFVtrb4EjS9kgMhk7xCDUGiBTtGSfZaqhwwZDC37FCsg",
  "key11": "2zhbQMGoXoPhoZP7A8G64kUHf6ED7v4NgnCjRML4Pbyx7BDMZkWg9bKsVxvogEmKVRzBM5GuLkGJNiHnCGhqwFVU",
  "key12": "3guJJoaiHJKypHaQmyeVcxP5DDjstkwmV3TFDciwxvGNZpij9XmzYnEhYEGgwp1T3QdwdeD6RGTsoynhuPzrgzug",
  "key13": "9eECBpjpKfzJWUv8zssXrBU5QrKEYsjPRL7uqoHQaXn7fYDyxbVLSmdjc2v7ZUewHugibdCf21JqdYBe3GqWJY4",
  "key14": "5xTVaUWLR8DxGRTw5qCsp9J9mQrrG36bxsoJY6cpFcUYYxfkQMU3wym45br5AXbuVha3M6VcpxMwD8SUfpWQCCkB",
  "key15": "LQxbFJ7Gu57e6zLDsL6Cy33vdb9dKkVcKfsA7yrbVmw1zytNiXXVazVMKSxxMs4JpjSXc6K1qJWLLTYaPEnKLnG",
  "key16": "4Ujzz3uMgfEK6k8Ufgw465Lwvkmm3frLvZ3MksQ3BQviReF6FwvguHqrG8EzNssLZmSewdqkmtG2pCVDxT8GhWmB",
  "key17": "CWvYfUcGKQp5gNoUmcyYFYQvdDaKWHqU9vNY8132QNCHKSSecCfPoTW19iybD9N5taUfUKcVCLJsp252mCBKqZ6",
  "key18": "2FBYf6Ye9gTmQMkRe9bM77KkeyDGdgGQu6BdyK61N4tT7W82kguWECUBvKpbcH7MqVQ49EeoUUXBLMoyMHXsAuWV",
  "key19": "U3uHQRoNg9B1irvuyf3FVTdkteoTSc4cKqvgFq1KMGCaUkhVAjP26RExnJ7QEtYpnAoEeLYWsWkVMfFdFm16Mi9",
  "key20": "5oUhGdHb97dqqstB9khq6NCj8X3prNQuWk283qGgTCuvyD8pqhMWLnAFRfCjgjGq1cyhwoUS3KpYxZ84u3q3vzfV",
  "key21": "5fo59TzWXzscvuZqEp2K1SFoRhW4WyZtnCGYtWbwtX2sn2Ca3uUbVAFerssBfj5651VBZyueePVddHv2qdnzCnuG",
  "key22": "2qUg4M3PvaQaC5HCf2eFf2bDewxL4D3rrGqbBSTgGE5sGR5HXujaQEwyKcbHmBNdg7yeCm5xoPq1AXCDP4o2h36q",
  "key23": "2KCuPY7okugp9aeeEZ318RaZtYVxH6A7aSaByNts5XufYqPGScUZoG9CTH5gQE1LfWB7TFk3jXeB4rWimq9QfWEk",
  "key24": "2newy12UD1jMfLwBpWXsaqW1DnAPbJnQhdSQFRcmD5ZLWBT32y8Fb8gcFGZiAisVaLVWUabFYfwQFuBjwx3FV8oT",
  "key25": "u36TgnniR1iUkvDBHt7NwMuLzpkRS58Qh8n23DwS8iSHJjFqGDx4UcHVEBtRXafG6sU2u7aXadZGWJKSH6FoN2E",
  "key26": "4eEJXdSw3YKWdbhFYHfuJCZZxu7JoZEcP4FZG1Ba8kjfU5aTgUaVjDhGzLGXz4UDEzqFdBKGNkV1nQbdhWRtTJE5",
  "key27": "5kAk8ftvj14WYXotzf9ADK7iH5P3qLihyvmBhCWHyWyL3WWsKtqEqxYGWewrLeLkXHMFgYr1dHibfpdLeGSoSKiY",
  "key28": "5nfEmbocbP6UbPUoKNt8n8VYfNFW9xykvU95mmvJ5pKxtYkg6wuhgCriUmNEHhnonyiaC1TZmYCQSp3iULdbGAM8",
  "key29": "3pbS3vA1GoQv9sMJrryB3CbSfAQgxznr2iBBznRAR58ZpxExQ2LBzvvnwiGiXHQdS7PM9774zNYR97NUfbs276TX",
  "key30": "3pdYBq3VTDBssdd8NQ4jTSabBaMCKH2Lwyd7yZA8pQHBYS6CeB8zaFVPM2SqMNkyLxzDh97JCXGo4vd3Hef6x9ML",
  "key31": "2BwSfGejTtDZtaF4Zsf7TjfrsPJEjQf24JZxhaNPdcE8GvMKkArEgUK9JDYM1RL1XvH9p2AT3e3zd58uPvVmohyq",
  "key32": "5Woh6LqUqotLK4dJpDCum2qwXTucNUYMJYrJAsy41xgLDHHF2pX34V6tdyjkQmJojmyxBF1XKSKaLfqqs8CbJs9H",
  "key33": "4q8cFogJm5uThC9TSn4WxpQozXmWNy4dKXGRGz2oiuTSrXtvfvjqxoeMJ9TTAsweUAsk4MhtYDiihTnwHCsa3KWX",
  "key34": "5R4zdhBQycjSLXCyQeyVQ4Hp5TchGp4FdqgvL95tbphEi5PT9dEbDxdpGVBXsvEPQkidRsccsZ7Z55Tx3tudTUcG",
  "key35": "4dhmUvvFwZmWKUsgSHt1RxvdFoCTCxggq3y8hLNMmxhYhSLofGkKJpMSZP2q96sGuNbYLDyZ74vHq3GJ7zXytUXB",
  "key36": "2YqLQKhydNKTseQAsBgA2EA5TcVA4EaiC4dmeGwF1tWHWdJ8pEd8gY87bsHCcXsRw6Rry93G2d5GEWVsE9ddw7ty",
  "key37": "5qsR63eRov8CMZXF6LM5MyhiDvwZnw9su1n6at8DXiyaDzeEShtY2mAN1NBqTprFJ1o2ihhpH6qphG6VWWrooh7z",
  "key38": "4Tsn8QbaAz6QnS4rmtozVb31sNikaznKqGnQRndiZFG8i5ptwqBjAuy6G8ZTwKj2ezXTc85TFgxLqRFjFersGUUa",
  "key39": "2RuVbHTWDncPkJY9uqxhuCXETsSM19cWjNyNYZDWrFhZLTML8471eh5HcdESK5UN4tcwQpGWhANaccsnZF38m9nX",
  "key40": "2dTQQGqL7YHDXgJNJLQYbfj7Mm3sbgTzfTM7vxwxWxisPQwBEUEgrjZKKXg8zSgELN53jphthCv81YsvThaXjCuJ",
  "key41": "279sH61UCuGprFCPY1fRwRaRUHVqS8pFPsQN91wKzDTZxGvNbRSL5w1vTPnvpnU1XUDBsua2FQa9LfT9esdmsCgj",
  "key42": "5pimSfHFWjm1j3xv2CSx6peYKBdttMNHS3Exn9paQFXS92RDmVjXVoN9K16GUYtLuJxnrh1jBocNoKaDfP8mXg1y",
  "key43": "5SLsGE8XmXd6ymwkzA2QnMcw7PbrKUKRWoBf2UpvgDX91pdKTXFYDJaZrr3fyA2SM4HZGSEVeUgt321fHTq54VBi"
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
