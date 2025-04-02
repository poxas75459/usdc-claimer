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
    "3FSiugZapB8SBabxQ6vt62f1SZ125obpfGw19CDZMZT2Xwst4gBHuWc3Mqgpz8xP6PN8kNG5kr7G4RTuYeJt8UPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSkpzNZmdjCGpSn6653iXsCiQHM4EDXzhbHjEwqGbNzhu6R6gNgoFhZGzYKQRqEupRM5EnzAz52qMtDrSEV1Ssq",
  "key1": "2sS5dR65KRi7in77a97kHU884jiKYUyFjgoeiFCs38zWRL3hzyF7qvfoNw31iATJfuy73xnYTE4iqXKm4DsjNaGn",
  "key2": "U1Cfk56bRAZWBM3UxxkuaBCjqBra9nLRHtDrgv29kZ9g8kmbNucCLsmuVDNK43Ua3rEVNkYAn3y9CMwoGk5kMfX",
  "key3": "3LXCbZ399QkmjKQqaCcEzE8rtH4jVBRvxcTbVrHxVujSU7nizXs8tKzTMcLR3vBaeZwqXPRErKNZQ61q21q9Ykjp",
  "key4": "5TonPjVdWhyVVCHLidbPTeuhxK4MiKyQs2KJi24ebod7vhnmJKy3zCiwGvgCXMcEK3j9fy2SgjGgmzunnyjV4Rbs",
  "key5": "3p4uEUyrMmHhxTYsFSxVMJGAYe7bd6qCaPG6GvmHpAwHwKuxWgMvJoQxAn3biY84QgsTPHjdygpNuQWQped3iT9B",
  "key6": "4WrthqBgMg5xirrRutw4NySguazq6HPBKiB7XzyRd1ZXebrvocA4wcNr9ABkj6dcAnQyp483KtwE2ijEfNr95XNG",
  "key7": "5FNndzbV2CFEwAAeb2oSMYbtu4tjFHEVsBZSchC155q4oWKLGEuU59nqGz4hbDiDwXmpWjvKDrSfkwzRbyWwJCwx",
  "key8": "4hYgZX9dxv1sjshAjKnzgtjHWekWcy8sxnddTtTgmGskZw9PhLgQHgsDLKPWTwzMmUYxGQNJn8ri2zT7EeJwbWAD",
  "key9": "snbmkuPmoyBynX3uVtvDjiTzu6eTXuiRqGHJXvQatSFZWRPEnmrCxi7b7wDWkuPsFcuBoUuwvhSJjJQkCLAPnUu",
  "key10": "53iWgFEpSdxvKyVfLqpu38NoxYUMvCpqHhZ4DgbaiAfSQah4Zn8Jk9cYLREatGLdy4DqKtu3q5CFg7RBUmMhwepA",
  "key11": "2WjRgvAKoJyWb3MP9wHRbzvfesAzfdYkx1EBer3aJSzdkqsqrCLf9nKAULbgAvsiswmetnsNinuzXboDqkpdSjWC",
  "key12": "3FDHUr9UjaSY9BPUeKgQSXS6WJRmLwSWRMNufMCVmebszRBDzWCGdQuZ89B8svvfZMCiMJ3zM7g32Hmyk3LQjamy",
  "key13": "5FXhfsEV7urzFCB7vCN2k6qVgLaRDHtVxbebVTDMhT1r14cX56pvDJMBq2715PGNHhvcLchvCiWixDqcGbheWv8U",
  "key14": "2PNmGRpn3DNGL9wR2BhhxTFK8ZDgbjvMxhPKgW4d78FG4AjGRbYaZpLyfKLjRQKd93TMLbCnM4tx632WJABUfCyZ",
  "key15": "31oyvptz5kA5E9ZCBxHtaG5YQVtYPJNCFTREg8ycubL5PjgfDzdftnWRtx5NDoQZSbxUuTqDA7csTMYsi7XehLCN",
  "key16": "2qgU97KcfeWMoZSiWAmZdkBYL6PWFfgMzko1VvBgctbUQZuB5HcbyYhx8y5JiUYoeAkKW2iYSvmQF4Zj3Tv7yeiL",
  "key17": "59fZ2VZb4TMPqxA8BrgTJ3HTo1ZZpNd1kKCUctqce2eCrvWyAVA3avpTgXBwT4LXgFnCsTw23mCBohA2QL79jxFC",
  "key18": "2Ekj46f3mYJouFRxJuhYt3Dd8xybjAq9J3T8Fqm9Z8WWEXZNXWRzQzHfdf5gy3qKRvVeUi2R2zgNFuFmG3ymMwem",
  "key19": "53JBdTvjWs3MJZg3KiJ5ZUP5TRLQS5QqTZfV29vXD3XNzyhZxAYkETaGL5yBJyd2buPDgrpsX7JSeLJAsQFiwFsh",
  "key20": "4xkPEkEx3jvEg7vHWxzJMbKjBtgry3Kx1ErtSBLbAmpkRq4tGeSeWVtUdZpmJY1Lo3Exw9KP9oeAn6vnmB7RccFh",
  "key21": "FnT75s1DuNbGU3oP189YUJMqFqwEhdzf1fLnARTUtCpkD2kj62Gnfd7w6XC1SaDtoB51AnPjivWxGF9rpHX9kU5",
  "key22": "29hgFCVPBnM3yHHuMWgiJ2jScZ8ReT5MY7JjhvbwmV4mxkLbxdbgDa1XwM3HzBixUND6VB1Z99q3sPBq1FonFH4U",
  "key23": "SWhyejawTzH6SbB1upR8y6Ly75BvsbrPAUfMharAGYwndTnQrxYWbM5GtaejEQSBuwjevvwA2ebnfpawaA949hj",
  "key24": "5cK4AoKwbnthQmvNgCnMqwtR1zVwHN9rbHdSUV4iLNAL5TsgjrEYvkRXpUeRTovnbkTQKxQ8yi4Psa2P98wf4EBk",
  "key25": "HSajwUv2nb1WncVA9s2zymwXKWFCV8iPNEyUmtSnsNS8WKtz6HuE6V46xyeszww9eW4wCcj7SGRdb4FR11oceM1",
  "key26": "2qPrNBwJkrNAeh48zd8JD111r9sWPAXpnnSYGU49qwCiGpdpnmN1MowfBCBcfVZqvvFNGH9mxfKyHtmP8q7j8hj2",
  "key27": "5jdrgRzUf8YvNzJzqPTgc4GCeChT3BRAHsAUwgv5FWHG49MzKFLUx8ZXt7CP2yHmtseGn1fnSE5jQNu215UKC5rM",
  "key28": "4D2QAGdK7Vcr7vL8JxWitG8Whzx78qhZs58N7TrhhxEt8bTnTgLxqj3BTAfBrrE5jxuyQtawyB19Kh6ijtVFWD5v",
  "key29": "4gJD383wtspeZpkQL8odpUZKZa2ToUJkUA9Vs6jrAJc6NZtrkDvXZqk7KAvHKL2ikwiruBXaX3MzVKJfy4SwZBKw",
  "key30": "rfEDJHdLUiRRDZ7UgkNnsQ6RK7HLxz1EedQbNWyS1TTk4zS9QnbQU4KcgMhtCcnY3mMDMHXzz8HDgSZAJfLQX7P",
  "key31": "2BZH7bQwdTC9jvVwvNTFkcsw9uZYBiwUC63uGxMUmi3iBajeVMyzYDeYhMRAucNQ1CXTozWLHFcPyURHGreg6iFz",
  "key32": "2JoeQUps4wEVy1xyG8ikg1vHR9EneJPtwsC4cnfRVuQ52HxueJP36Ubs5qG6SyViDEydrRjVYj7H3TKw4eHnvxZe",
  "key33": "3No3A8AFYbF2VhbaW52WxUNLLyCDKcVB5hEg23gu9amiE7zDSbb8oQKifwx98AyZrA8VhwPFuUtMchu14ptj67Wj",
  "key34": "4vuXs4sVg2GyhGJv3rKuTBz1R74DDkVLpcYBAhpguqQTAKmYXZEJhYQSQn9RUwwdZgacAtwCx4PcBWxocuwBLRsq",
  "key35": "3CaMxbYKS6FHHMi5LqjJZ17j3kH2fKLHzT1zJz7kV3U5rSokiSF38Wjv8ybvxa9jhcz41Syw7B2eBHPpKEgNBknv",
  "key36": "gaBR1M98psAFKyQ61EnWAF1NG6tHBzwm4w47j9mhZj1fhVbbN7ir9dR7A8j551VhZBdxsHWE22yyv9iwexfk3ar",
  "key37": "5mctuj91L4YWwh2Y9YpmbSPL78uaCwi9P9nEsXx77gTGmAdDpAhvPUiSuetnZRWwuVHYLyQwCPwchRcYSDee21Nk",
  "key38": "5pHpWLgHuT8tBKeMW7iAdASQaczEuSZjgvHMPs1EJLKQQ5Xh9PbCBpe4Rg7JdMd2gUbxWwyyzfmMrajhfbcLWQEx",
  "key39": "53XgNWYdNtVXkPoYR273eUcbTf3iH37ebG1ngW8zZ4hioeQT9TUn6S8nhwCyLm7n4h6PbFGms5BFLNiM6hwD2Uu1",
  "key40": "5Y3McnTL1Meoi9AgsgVuszGtZxhDRZx9XiHKQnrLT88fbLA6nWfgCMkupPMsChnFSuXrPhjZea8Qq2nUCCzMbhtj",
  "key41": "5r7qLJB8kLLbgAbAgDtknS7aXJMHUiFv9XZCXN9A52ruzfrLviMBaWEvncqgNtDoDPUP67MY5HNocjaApoodAmqT",
  "key42": "4e1y1TGRqWdAHNpKm97stUHNtKN9YGtBEm43N5XYN8Y9h7QWF56TD8XGLU7CZCBiKWgxEGpzXoUuXgEYM5erovH6"
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
