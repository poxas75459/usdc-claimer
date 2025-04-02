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
    "5z2q7cKLxAkgcWcG4M55J3dejEfCyKb3GTGEMPmEwKHFq7V12kfPoTYSWkLEC3KNEmXBmja7bH4vqcJzpCpVtVdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbcscpWAjQ3fa6emT3gbt2JRLqaqY3ZeZFHqrhs1KmqfqaGBJoxfjzBAzLtog6UiW2hEQdPpyRdkjUqPhMhLdDF",
  "key1": "4dpjT53q7wnaNdgWPQ7uqaW8AucF59HyfRjAJZ7e2EFwkfN3fuSNbcWBHxqKWZuM2WFJjEYgMn1udCEwARu4gbEJ",
  "key2": "2wM9GahYwyrmQJ3qnJxysKVRVbwPrnds2JtbUaSdFCF6FDWCRtSQzqAVu3Dvxub8PAPpcMqQ9chpeTeRoBPccjjB",
  "key3": "4BsjvNY6RKVmj3GCzhKWwzhGa8yY2XgqYNi6mdhAo9znRDEZevqoB88sfxFtDF13c55c4oHzsqPt8x4qgLa7EL27",
  "key4": "5UscrcFs5QRS5768fCyncn8jHUCnFH5RmvD7v43BwZADi6RJrqw1t8rcur2SvDxoGFyMCZaQxbd3v8S3tM6QVMLg",
  "key5": "5oztZio321JCtKm7D5A9sZJxQnYfPswwUdUWbVWQVuyq3QTy727NniPo2yGEed9TSCfaW4Kt5NkQvba4SNHF8FLr",
  "key6": "27LFq6vSM4FtcxzLvwE3eL5MijbzmrCkT1yH1GrMoifCUZdNHtaJ9Y3hgBUjEatVFuMqpnY1mvY4uY8G5R4xAD3r",
  "key7": "2SX1NXSbPKvoQGfs8upAAAXHvbVGp4zgLU9aPkeAwG5yJsFuUBKJxNXETPSztCReLQU4mfKPQz1wkjAcpqLwQw1R",
  "key8": "4N689YtyCFkPgkphSwdHTuuTWVPqz22w2Q2GWnUDPbirpnSWTbohj1TxgCDPwuB5DLNj9qepKRwM2sP9vzvnBLqf",
  "key9": "co4REU3dQ45y4rHucunbrrfPG1JwXqCNNhcde912Xr8HM4MytHRJWT24LqugWZ1w2kJDmGtoLmgH6eWiHRswvAP",
  "key10": "gLa3oPxSyvoGz47vHFstNUB88xPUSKXHrjkKjYP3A2FS9KujJ1SxGFcrmQG2eUsBnCYSMfRfiwMvFhjcV18afDq",
  "key11": "ZNe525jNXpR3LEqo2eoD8PkSXUrBP6rQEb78MkHisvCqftz518rZ1Y4rurbp4UAdVSHVUq3kvgStMJ2A2ugo7Am",
  "key12": "21QCBCCxyka84v35d675DvMvfws8oNFNke9cXqPcd9QsZ8WZjRCpkqxzgTYjLrqYDyrfxuv7NVJYNds268RU1nXx",
  "key13": "218y4km9Ku6Ckh88Bi5DveiyFkm7p1V4yC2gFCLd1coPHv2M7qeBm52T7nZTED5CJFEkS8So9ytewa4T3cxD97FX",
  "key14": "JL9YYmR5WoRGJVQKPt1KGuS8MS8dDrHd1reKwUJM5yg8DbjiawsMTKmMwhHdijv5stXAvRiTKPjCnvB471fUvJB",
  "key15": "63pWfAZCMdEwDmcuitLcSVLG3nN4NNGfHcWyDarkuJXnhGmqaLCwPCnzCy1iJxif1M3rJA56h36sMwm5Aax7LqUK",
  "key16": "3ubwJBusnNvZQuv7gigdKKsWXvhbXaL2pLiWqHE7tmiZypnPi7NvAKnv51UMgaZk1K4ESiRccw6uNWdQ1TGtsf2J",
  "key17": "4xKoVSR4f29NRXuF7v3xCtLMAWF7WeoFBrHS6HVpXXC1cZf2Kc8NgCmpJRUPZJWqCJCjdr4yAF8L6e8zJ47573Tq",
  "key18": "4k39dAThB7kFdpzprB9cua5g2pfc7rdZ5qjUM3WSpdKRDCkZ5NeqhyMnxrqgBvrMSaWya8QGVtPtZLUgHjZvAB2L",
  "key19": "46p8bzd3KnXSzHozUgXtTsSgViDjFQvkz4zjhZ5CShw3S6LrZ24Rxd5GuqwD5LLQG1QeSFcimHWYwRdULrrz3DE8",
  "key20": "4jsDtd3A71M1wN6cQu13T6yDjsVuoZXT1vLqQW72T9nJ9Ju3kPDFR5m6cg2yjzs9gkR9i6EQqhRUtAWwfE6v2CLn",
  "key21": "qYDjhsmuyu1JR77UruxuRt6mbK9AfCf2e4rhCNqFqRVuNtboFNvjYJeRE7VDJ7joRkB9hpmKzqLtVWpkCr5zawb",
  "key22": "3sCxoknRX6L5EcyhxNkcyhxWtTwS8o4hDjtLhLZ6CLC2fXKLqerT24YSUQuDursXtVrDQFeqThJBFS7qQEXMzeA4",
  "key23": "APkR8c1s87enugTKG4e6na4CRvPcMF55YUdTvPqnnbGdTG4FCiVENdqZPDNREyQYQ2riYFyUDAAZ3Yw8uoyP1tc",
  "key24": "2QUis6ov42QagYeyR4q5G2bvWW4EEPcs6P1CPRHJcxHHSc7gThVWm9VfYtox9EqbC3cmmreu2w6ke5kPicfXeaHX",
  "key25": "2fH1WeJWE4V1f6cNQtjQtrnvQVv8PUtUyUQjiii92PCx4ABmG1cuiCQMyDvNM3tFTzKmL7xUviR9aEWpShtbEXux",
  "key26": "ixvBa3zpasngpZzFPEaLdLJLfbKF41xETqh2ehRgibi4obyc32cQTTitB9hQGFpJLG7hGKxRa4crYsxh7AMX177"
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
