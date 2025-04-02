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
    "2F7NbVptLZjGQv1FnL1AwM2UaHnVkDSny2GycXriCP6Sgre8AAymuX1SwWyzetfHiY4rxg6yTTTXf6hNBX3CJFGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEwf5ztcKfMZs966qqmQZF54NgYzTUZ4CjsL9ccrXxdYysoMmJ3HEHLLBG75JfaEsnscKXxsbfTqgNtBTUXQCVa",
  "key1": "2hmuEN1PoBAyMQKBxXUgEMJaxfiueF9akqNhWJZSsPNJFQwRxkqYkgqMTeRgMc5pwmQwrugwGKL5RJ2knApx2Bh3",
  "key2": "2vyJz46SUSLVw2bE1W3bxNWe14oThwecjgtHTum1eTU3rL8rMucWe9NRAhU24qkwg2GWFipUThi8ReKGuhgfpGH6",
  "key3": "CTiwyAFjZPfX4EjyZ7WDuNyiMCrPwcQHmQxDjrehMdtnTJDP68Nfi5b1uVD3ezH76AepVoFfEgHuXNCZNSYUnEo",
  "key4": "2G2SxvAjxJhPWXuMEcP7DV9zYnNTRdR3Ai4s112ahHULj49nGtBUzzz11eZ1wPYGBKxwtCne55y1m5TRctSC5wNR",
  "key5": "5whXHf9DAKyvWepeZLuVZwHschgxkeVLhrRF4pY27mdp2fewZyX2kaYKZVDDr7NfAQX9TLF1AQEKUJ1g5dvikKok",
  "key6": "2jvbTxFqsA73nQzZaQ8hQ4JqfV8iQQ5RxTsiH2fRS9E7jK77zWhkaefUL2dVDEbx4t1sN976p7bqYnsY1pGyt3vH",
  "key7": "2hBzuqD8aUKmgoF3KgWGHrQxCkdWvg3Bx2LM46J7PrbdbL7CFSxjyfhnj22EG5Z1SNLdeBEGLM2R1vvxv2pZXZ2F",
  "key8": "Kcvs3fKG29jgNr3aDLfE23318H2exd2Byfjg43rSj1wf1Pum37TJCuwWWBYokeDNUqtAmRAd6FjTe2DGLFP8o8i",
  "key9": "4G6fkW7qrnGw49vpCH28VPKhvdHr5Z9YxjSM6mCFXanrEWSCRDTxHfRWjLAZsMsYuLPN1q3u5tJvJSFLKctm3akD",
  "key10": "5rzUKag6kLq3bvw4UcqxNFDMSPkUhWgkJL4fNxrCBb5PNtsQ9RTcsvQJQwQdx5Q5NfsHnS21JDBBJPSGQNubmyiJ",
  "key11": "3Y77R2ULcP78W8LWvxv9DdyBk7a5QywYBQ6MEfmR145eCpYKar4tfTWFaxkv3rk9FGy5orsiPeNvURe5a6LQnwCP",
  "key12": "5xcLA5QHPZFEjejmckdDqQjXPPCSbTzWRdEVqp5mDqFqQKrdG6WGWX4quYGvaKERYQe5DQNriC7X5bBJe4c7kZmh",
  "key13": "63E89Aa6CaWf27kteA2pPGXfvBW78eqtADe7SRijG8AcyZQDJwryd4gs5fP6wBHc5uyKxy3d2CdUwMdHLZdND4Fr",
  "key14": "5jmALmyRLj4BWMS3cMmNYU7LMEMovHqGTpEn6CthrdFQ948TNDDgsWuXgG7tgmqVjszGFGQToeUqSAZaEf1sAsMn",
  "key15": "2xkaWdC9qPCzQS8HqcAH2obzmf7MZ3HDZGvHLWhjw6cGqEKd9BmHEUvcL9WLEZeV3UFUvj55V4kVzNkiJsTKBa6C",
  "key16": "2D3rqSrwrE21RWR67VT9aigX4JoQRTdyUZcjTUQHsxuS1zCVQAeCKPWtWurWps5MAAPbJYMaFFRLaYZoaZFSGk5",
  "key17": "25271e8Cwx72dtQ3RdBugoiMfpWGeWKUypqNo4a3Y1JtdhvXnauPAgPjGu96NX8brAzEWAgyFCQLo6zxvfVvTTWW",
  "key18": "2LvGxaHwAE4vPrA7zWh2PEZHMaXGoy5b94Zgq11oTsYstfuUyYAPGFBnGQtN141zQKyX3C5UzmXyBcY8nEMFKr5X",
  "key19": "2YcdTyBQrLk2LHh7XC2sMpMA8ddjXPGVi3LRpJUeKsEfAGf6Mzk6H38CA5ar497s52TQjpYcGHRDBd1ZUBxJ56iv",
  "key20": "cXoFipTryQqTYLeVPT5DHpi3NLSk8f3SZgCothSndkZE36JLJjbM8BfupTbEk98netCvktdLrF1UoFsVCgnp17u",
  "key21": "mHsCxEYkui4pyU8L1yZW9Gf8s7Gc79zWK6bjmSnnm5YhegAZAiR83zBWryrh6NnSPuvfSPpEVMcRttBz2aQjLVC",
  "key22": "2ttmB365MPLckVo96gsU5GQ9z4M8u4rRWjzVL3MzmcQj4jeQiLX3MC9Lkx7jWKLLa9MFYH5r16c5EqBEan1nFMwL",
  "key23": "3gogSdiSXmapXJjwTefRKMTivUrPnR8wuLFaKGrNh6Voi3rZtXWqTsYy6uPFm9T7dwNDaFaD1TYu5ViJBk31Drha",
  "key24": "2CEq9t22JpnH2ndZ78UiE9QwV6fDfLvqwoMTYZZj6qD6gvs1ZjQ2YPjFk8ZLD1ZrzBcX4z8MdP2XAvtrue6aiD3J",
  "key25": "2zR4hLhWnLUUQQxaYhNz94v4u78pVJJFwcox4NLfEXACaENUpkUU3bdWodcUJv45u3Y7LsmsKxnWTMhU6ohsq3LF",
  "key26": "2PU7H5x3Qi1iiQjoYxVuqw1nV1ThSNT74qj1KDGuVEJUpJqbQx5tXWCRNfV1LwUq5cKNFxwxMV5UqSaq6NfmADfr",
  "key27": "3SywCTzeQEDL4NZ1SDk732J34FXHjZgLenkwGVZYThuCbbDcAHS7g3kyu6ouk2NZzGG6rron4FPYLHG763BMSsz8",
  "key28": "5oEx6ijopdpWEqW2abm8Zw6EC3AjWPxnU3DhCnJfZLyWK8Lc7GSD9ycTSFqWsWh491YNFx2ztB5FK5JZuFaMMicg",
  "key29": "3yyzkj3sCiETgrzjKpTKjGKVkpNNUmjh73jgonewAtJVdpunxQgYE5jnSkP83vmXFFTrHfXh9MtPtMr5mZ3cCWH7",
  "key30": "2K5yWPPJ5KZFtMGAy14vztE9gq6tb7ZQkDyqccJnThTF2yC7LwTYokBvq7GjPtaB8WqPqE9fqKPDqcNXMJuqAcig",
  "key31": "4wBzwKt1zMsnREjV9QYdaKRtuR6g2Bnwc6VWkorVo33mZLWqHLBbcpAvtEnvjjP157qbYp9yWnb491eKLZtttpVC",
  "key32": "3Pj912smaSh7ubPArebVbsjiH3XRAqVT8RuNLyrkYZeTrwuWEVrSTt25KxFX4jcdkGLWWFmPmx39Vj3KZxLeZNsK",
  "key33": "64zkVj6JEo7qNjg7HRpbAfy7Wp2Qi6MBn72Evjk9mDenrLa6UWd7R2uM1EFM6bHWc7ZVqbEAJVkgpETZJsDT4n9X",
  "key34": "3MTBSeShvPdZmm5iX2F7paejTA3bhgfukesvBoMt83h5dc8vTX5Y8SX4LsyHr51bfGYX4r2uHz8ZEdsj7uqeWyPd",
  "key35": "5aKdjfcub24QjfEfX83GAiuZQno6hEimmC7UntpE5ZnmVHzmHpuWSmEfBFhjsXHaZMVh4XHQTmAoZVjvKRp1WKEa",
  "key36": "5w75KZAeU1AEoxT2Tx3AEUYV2pbtKRNUE2QVBdKG4YbJPaFSVzVMhQT3XbRUsBE8LoSgMnrwwXh7AWJnp8ANt9dg",
  "key37": "2vWCTAdjewXyNt6sVAoZ4aJ2SgzcCADB3R3z7EPoWfVWCEXnGisoakW7Pwuk9CFGWUgcdCX3znn6yuwneeaB2P71",
  "key38": "5gdStnpmreU82AXzMjtNkctYQabMfv7WdxX7RFWKcbX3mFS9zHau7rzfktESNQKeQ4PByxmRZ3e8FRFFZLyqNMyc",
  "key39": "5crjMGFth6H3LXD6KqCpLzQNvoLnEy2Uh8mMo7JYMYct9Gs5yZBCPNNwDapzrk7ggBcJmGZ2xaaWANYF85jmvrcf",
  "key40": "3SZYC8yckNKB6RLgnSFrGAgXbS6RiUwgLkxxh1xyFpj3yZopirMTxF7xEESAiPJgABWvHEdsJjmtArgFYaxk2eu",
  "key41": "4mxTKpwzjUJe1sji9PUvzBf2jX2pDEPXWGgpQgAq3MFiEYaCBNtgm2NmFGjU5Sqx8ucVuD8NKVa3U4TVFxhegwPS",
  "key42": "5EDtQL4TDGvdrGyg1xKj54LGjMRTHHmdKg2SPxwC8sXGKbhs4nvcJGffr8V6ogt5EpLcmj6s8bPuVCTgiNSxKTqd"
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
