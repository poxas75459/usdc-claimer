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
    "44uc5UMUvs9cPLxqBDmCRqFnDm3AgoJGmbYH7kJmKJfS27yz3R8V8aeK7jcrYoQTwdLokUbxGSvX867hMKC7RM2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9LoWqi1eXF1QWDgXHV7DnMvxUVbETYiR576zTpcmazJBK8pdLKXQAq4Z8KqD3yoMvzFcnJfqbrnTWMR5swR7im",
  "key1": "5vvMVsKCcFDPEKyCfUqWd4XufMDKg7Aq67vR6PzmRU8iqo88YESuTvRLx6vTz5rj9SH57oyqduakX58PAhhcsL46",
  "key2": "4k5ZWdasa92LBX23ExQAibGoVvbS7dgk2G5ydkwLmwUA6Y33HDjm4u2WNNBj8ciR4wTGPdXACMgj7PrPL3R8d8LM",
  "key3": "DHRGfpeHaTGMk1dQPh9M254JgPbkFwwxYNkbuDX65J9s62DD3QkBebK3uNS55b4SoyRnyxN1qPeoNBfhv36UWtS",
  "key4": "4u5EEzfhRUbmgFjMu6JmKHvZWce4H7kFryDqzBkGfPM3zM99Er9RXzWuW9QCXQL39JubALZsT3E2VPeAuC4XrpEn",
  "key5": "4trxU32oWQm5fe44LkaMCLgMJ9y796Bx1H8XSosdDCuWg76q3Uh1FHqxvv6VhfKEne3E5GWAU8CLH96S9BtzSCrn",
  "key6": "5G3EAfyTZY7KUwz7XYNoKn4hWJgXxNd9VBUWrK8AX5C1axrLq9Y1LHvUC8ahkruCFhGvD6aN81wZpF1qHQG5dXrq",
  "key7": "48HfFWTwcN8Utsx7VCmPrNRbd5jBSVX1vkHpPyMXE1akCBiFSwFJT77ME16zJWsb3KPhL7dMysdCXUGd47AKuyXX",
  "key8": "35RFoEVEv6kaya1QcFdfwSGo2Rz5JFjahnW87ELtExu4CEBr7vxGCZaxFqYxDe6UbyVoG97TsKhEvUseyPYR3tsC",
  "key9": "5MkLFUjpDqehdKwwRn9EnGfGFcKpitFWAJV437jvwWDcKwLxPkcNQPDeU3ev84RvAeEuQLWkXtxPT8uUAFqAFmee",
  "key10": "4w95jrYjrXMuhYYtQzRoxw8E2PQT791JcjhUoak6JHkYCpCo43SgzYYDMwwiRFWWRNbdKP9GuKhpsVds6mtUS7Av",
  "key11": "cZh3P1EHPWFAg8k7ffpb27jEuw73EHT4YuwdzihU26FtkGQ4ZY2C9PBjGRHGcaWQgFVv1FZFsQEBF1hxiWqaTPM",
  "key12": "3pv2g88zi2MXRSpZf4mQQYQZTH7gy82cFxB6CMtXauDTyHs3bhzUjd9gv664F33aPEswHSNmrbJJZLVy9BJZ39ej",
  "key13": "2NYn6dguaHr7wt1aVy2niv6F1sHq1Y1tQm84deSetLp14q22FWcScNB2vQ1dPBjtRFVBeqBdZwf9gRg7nbHv8LSi",
  "key14": "rT1AHNztofNYZgoUt2MS2EuDbghxKSbNfTEu56aoL3eEwegmeVrVNMuHTuoyyYc9mbmHZWPzFbDDyqvjWrDCH5c",
  "key15": "5mprbA9bmhxRaUJq8T43qTRLmHAPFMSaTZ33kpov3oFy1XeoyT5wetKJqe6Mz858MFazkngctGg7rn7dQ3YWDxdJ",
  "key16": "4C8h4FrosisDxErNAGejKficuXeBfLJBJPt8xyNAKxWT4Ci2Mo6pxdvmeYrvX8NcPRXY3SYx6pkwZvy3xCmECkwU",
  "key17": "xifjF82mxLSVNbfDnzdq3563SYGLHRNcwfU9H8ZCSZKL846QZRyVXPGWQNWsZRsLk3f3oSkgMLYq79nMwooX7tF",
  "key18": "2TE6CfakgMoa3PHZSiMkVE7Cghosq3TYntrLUg6YDg32L4jHMrNyJTAnThETagwVsTt6MHL5StWc38VoEkHfvwRd",
  "key19": "3TKaVD6ULBoPSXFHWr9d9FP4DmnqNFZXneXfqWrsZxaySmyCGPtGkFfXLLT5oE2MinH1zXGPMSn413Ai8kvn8vbu",
  "key20": "2ykdYenmGv1cPkzEf4zyAsEvSBtg9KL4LZTVto5wdCCz5DrgEdAYh1fa7JCt5dd1DaHPzt8ggFjdHnstXvz9KTYe",
  "key21": "3zSwJasHxQPwTDPgEvnD3PGpoV8t369awkFMedm5WAdXhh5TcHXhpqEAhqoV2FcZnogcXChr1amcMwxyGXaWbQH7",
  "key22": "5rBbfJuvcsrD3pJRsphTWsk6XfNb3eBbiH213wBbjLUPdyWwjdoTKpXGo51dYW8JxmYyvmBF8Z8mQRfJeYTP4Ckg",
  "key23": "2UgHy8k7KQGfHPsnQuSJ39qavz3e95sMcwA5hAG8sCbBmtW7tCbccarovmZMgbxRHQAnazfCpy8CEu9UkZGZWTTo",
  "key24": "49bSzyB8QWYCUXV9nBWSggLg1V7MFzG9e8YnpjJcXeYN3UgUevZYFKSMjn6XwRR3BhDafuhopuSbNZaGxEt1u2CX"
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
