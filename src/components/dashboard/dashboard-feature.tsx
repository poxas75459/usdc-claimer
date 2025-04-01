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
    "nVT5EqbPfeN1BAeeqTcneesUME8njT32JuWMArw6T8da9CJH8DMNpmAXTjtZHjkvPn8KRfWyvWBaSnjVJmWbQxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzYkF4WVAPF8CX5eY9Y2YjPv1XWhAkBcNub598mtYRHecVSYLADwKXY74kjEYP5GKUbiXd76wugQPegk7CkXheK",
  "key1": "3p3b9f5hGPBsS5CGpeJs23BucXETfZ9Yh5ZGGxy6Yp8hSq2HtjMhL8RMGEvfFfvMnXuzuXs26dXTj5f6QT2R3P5m",
  "key2": "4E9TiRFTthxY48wFaQb4BSMCDXhWbiBqbgS1tpcDYSVRjkXeUacXwYv7863NXgvpeCkbBFvvEcFQQAtUWNp1DByy",
  "key3": "5oRE9L7QnYbBpS3aXR4CYukhDFtqWCeTGNaX7x4ECQNmSQWqpSTaEz6wvfRkZUZVnbevjSW3zaNDmcyQk7oEty7c",
  "key4": "16P5Gmka4LdXz9rwjGCFkzdkyr1MQX4BmbCY5Tz8zTtkTtdLEnN7SCNgq4dF2HTvSRfd8VqNP6pTBDFRwxxk1kj",
  "key5": "414ypj11h6BmtdPokwmBh7mJzd4VMw7ARj84RpJNkPFEtXc4en9Er1gLdzLpEX7ePEzPHwGSBJvB1d2v67LrB8ub",
  "key6": "6TydHorF5jH6apQYAFcHng29s1mmHedsgBTa4tqtsE7WM5udkKh4Ui22QD4kBoWkjYkUaosKMZrg6dXyUZnR6Bh",
  "key7": "fjRe9RzezWtBcbrn4sSxLBcnQJgeBDwE2btztDqBqcHBMF6cikG3StavkvgUFQ4yLbFGcWMwxnzgJ4Sqvt3DwVt",
  "key8": "2h1UgDhdy3aMpgqC7LqjwwpSrgTXUY92FazBckKXwGJWPB8PL2QjtdevoweoB8HP8a2k7KQTB8vWGSmZSik42Fgs",
  "key9": "5XtN2NTpBKefuBvWbjeyEVHwTaAxigq9FanEiMHTQn8fXaetPH6Q9rsyFWXMW6XGk1rfbsagbLMR7pPoG4uYemjt",
  "key10": "3HWszobHaEUQsJZ1JD6M82MwKaAfgGQi4UV7usUukQZXGUc2fhJTwi4E2uAdkNmbx2JDCerVp1xrSWEeVwV5ESiz",
  "key11": "2bXSoPaJe1BR4daR3LxphbRXAWrEqAWonLWq2cS5QoByBPBAFGZWGQzK1NGkH52J84H1HHho6hPEswDhE3BpSiQM",
  "key12": "2Rj6ANdpXW6kTiNbADoykNCngDqQqSCXr6WXEzcTfKFcNSborZvLcy8tCktAy3G3RMuG4Aayi6D34hMW8PZuWWKi",
  "key13": "2xtfQ8F49uvC3aAX4M573q9rXw4yqJEaGPZEtFsd8YhPfboaW5iYtkYf8esooM6iv5JzqNbRtKDTjy11NA4dZF24",
  "key14": "3eo1KhvbxWwgKj5Efmn4xdoJBfxLGazQtMoLLEY2d7UGNPgYtQjX79swPDFzabiACkYtA6B2Thnk9J4SpweB9BAB",
  "key15": "5up7PMogg4JP1owZQrk5f67RrMiUXATFrvUCSiP49NriG1zfA1z8EiBPubUrNgF6H7B8rQwBQrcWeuLhkvA2mgeJ",
  "key16": "5H3eJMU8vT4DfyT3ggszPKVRhdsmDWTAfQvDoACMq3WUvzatGVES6HCyJcyfKDCQi5tLyb129B5LpFc3SJh9xkMW",
  "key17": "4CSmxeVnDfWcjT28kcLfGZcWahhSNwxw1heUqejohjUZfpXZCuLBQBAdtJrUf7X8xAaV6XMP9r4tewEqt7Ar8Ysq",
  "key18": "3NtDFJcmZ2bH2aswS7GCX2exTJBskEWdBUmdPT42P5uz6W8VRmgqq2hVVNmAef2ubmGXw657yHPnhJ8XThdQbVGq",
  "key19": "2PEABoFVrdNkFY3SG2QYbHNf6ZJUHypHTDAbWaLVgWPanTZZabKzjxKVDhDVD78ShMHsWWAJpDMbzzgmZQc57Uyt",
  "key20": "2ZePvuZZ3AhdVac1WrjNAonH2sAnQLPSJcmDhKHQ8mVtFmCrEecV6dvPahHPJrPTSxJSZoVNERrfNBP2ZvUWsNTm",
  "key21": "b4NeToeMPnG9ijNNEzKkZmKodcdqzfFKkZAcyXRzmxpsBvnQhN2Nkrjcrb2H83f1LMsjAncPLhRxLwmRxJ7G9za",
  "key22": "5nNa1V7yPJ7x38wy2521SgxJ4Z8JKY6FFR1BeYBdxPwKSnFommUASq3qB9U6rtb7YrKLtUp2c2otsqq3gs35jHQC",
  "key23": "4aFgjaZk8fCd4WAgbwSm13chSMRcbZ5w1ciU2yP3xtYgKyxVpgz1bTrc3G7G1SMtqWdQYPu13zw69xHShjzGCvmU",
  "key24": "5Mk3ac5mTovzLrAUuYNn4n2L6KLaJsp4RaHvewTNBre9npxsj5K5ieYrFU4PUJS1ABay1QjgFjFAU6YYDcQeG4kw",
  "key25": "5wUJ5F6wJKmfGqVnvRAagGMebbmZyT1TBVjNzWxmoiBQHME5sUgLwJsRrmXqajiRsB6Xd3gdjrt1YAsGQZoMh18K",
  "key26": "2x9YF1NATzGhiv8fAYNzWG18bRWs75fYebsRpGGtxNA6Ca9Ve3Ey5QCWucWHJDqwGj1dGuRXSbJhEvmE3h9DNKKE",
  "key27": "598KDZnHSLvByvvbNBRUjEQPbqeNQJU9oLez4qU2kfnCXEbGMZ73iiFX2qwBLYQNjZ4gzFsuHCRkhp5UpUEZhzXW",
  "key28": "4ZdXMCDR9CX9HBJTci94kzqtBheHwMXTHFH4J93yEtDjgexrADckhLRXZfCic9MKUUjhv1KcfYjFnfw9NpjZjRPa",
  "key29": "REfGgki9nQCB43HMY17Xk7zCLZDBpqfS2vYSgPQfN9JkDroV7uWcPDRsCXLTuEsup9E48mxx17Vm3yzhH1zDa9D",
  "key30": "67MWE7oa4DftzdhPdpnsgbArr9s74onEUU1WoeeRDQe8BFHXW3FJQSqk5afaHhxZcffUjhiKdbXQxpTXdFTeaG8n"
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
