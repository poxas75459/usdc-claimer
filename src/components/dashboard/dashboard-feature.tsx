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
    "62JhyyNwaiFYoKhgCTRWvGFPiqoqAPx4wt9KQUpGhnRfGv4wN3krjDZYpwyonPg1gCfwgbxjSboA4y8peEWMhhBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGb2R7YV3RPNvvZCw54M5pHtfueEPZWMbJe8bKECHvxYUhTvvWCDCwgyUcYwTFqynt9Ls9vkyXF2fpcwwoU5iqf",
  "key1": "5Wox7pP7oPWVVtkwGk59daUpeSP1DyRkjvBF4AwHJsXd83AAy1ofiaUv5qhAS2rjS4mRBG8VJF7nDsH5HdPU5ezT",
  "key2": "5B2ssmGxKhRqFV5MmCJ2Ta7fBnPuJJu8NonFhWHHTaLR6M458oBzGdjNBJX8SLpgdrFCRPDhL82sUEqC2pkLxsPH",
  "key3": "3Y6RC8ggvWcVhX4bijZdPyaM5UPZvJnY5pZEQe7JvgzitRHsUt9DBsqF8cmzYPT38GsXAezvw43PtDNAaktiyuTy",
  "key4": "41TuHCZGrft4mEHHQerW7VqLUb4T6TnpERs7kCMrpXzTUcfsG7FrH1b4A4UN9boamRsG4njpJX325sN8wgcZrcVy",
  "key5": "4QgAqBPrSSsV39USfd3yotppKcZLb2cFPof19RMgS66dspD3iHdfAo4TNDCCscDeGu3d5AoGtc5ed3wuwj9LkQPF",
  "key6": "5kT6QwroivPbHPXJwqfrH9yJt8N1HM4u4x5gfqSRPXrkbhubpyqZTjZxbUtxtxjxqM3DE4jQHizmKCJzNDG2Z5yD",
  "key7": "tGRbMyCEUbYhsSh5UxXSwypXR9neZH5o5HMH8iy7rdrZDPpMAScqK9trbqPEhnPoxEFrh5qHpxFPk1ah7cV3D6B",
  "key8": "xuPQbo6r29dQKzf9mvsarFygtLwrJCGYRXKY8W3cumMwjRFTwU3Jmr2dKWfNdH7DyQfVffbHihTvWX143MQWPKC",
  "key9": "53KFkok3HxteYRi2svTeFJhQKwiDA6DaAeh4kh4WDhP3VCzjokGc5pSAQ27q4z4m9fou8YXXXnNVUXcR6ooidTH2",
  "key10": "5iFDbhQYKX6N1xbYjRxTxWe2hPzxZPssbuNYgQJahh2zmzSmA6XSSjXbt94BEUoh9b7jiRjmzfSwwk5PZBgBhhHv",
  "key11": "2zRdfNksoo7P71Xpt2jtuu8PKksRL5o8uAYDacVtDEoJ2DFfitdfRnyRZ85jm1BMtcaLJTsvhveQug3wSeW1C4Tg",
  "key12": "55KGZ7JREcz2jUNx4i1jQ96egh9PNGX6Gmq8eaKwdpKZesaVAjExDZYeLbZtiEPpmQrgYd8VjNoWhmvNSGRMpht8",
  "key13": "4jM3rBHzCzByQC984Q7RYD2pmCVkNZrrNUsYXYAzZxtAMPJwFc47AHkGriJuZURSfCKZy9ApPssGmzN1SwERkCTn",
  "key14": "HFuLe7U2BVPX7TkiRgCgeYSSCCt7zYpco8zRJ73s8CxRam6tycBWzHFkkyPQVcRUFAN7GkAZQ69ggwFFa87f22M",
  "key15": "5MqMLjejb33fkuU2mvciFhR4io1kKGZfwJ2Pk3wAmM1Zrij3cC8U5DVqB3h4W9zmNWxK9n66eXGbjeYxEvCiyhXN",
  "key16": "5meSQP1nY815icMcpE9wgCevrufD6dtnRg49tCiWKi6kQreeS25ab9N5G4E3RzSQ8F58qybd9vpF8HKNCj1QJYeF",
  "key17": "SdxGMpE8gbZ7t93UWSC6DqL81FCd67tGPRSzG7qJVjbWfeyM4ifb5pwerY6ncLd3hoxuRSZh7AYsVzyuXJNTXD3",
  "key18": "5bd56HFYSZcMHwLEL9w9pvAz8hFBLCjb2zfUEvgSEzBbtR3TZbmXvTCpEbXX76tgkRE7ybUFMmg9JXwgQoBuLoR5",
  "key19": "UTiyteB5wanajaizHCSKtvG997ZNkpXj2MSkpkjCHukxiB6hESdx5yAQdN25T3D5dhGf7uxdYMQyB8kBjH2AkYE",
  "key20": "5aHBJdndSsjshVPKaxfUUrVZ2NH2HrXUvPaZzJf2uh4wxZkTaLEHvrmvcKZxAquyXVLajj7GJNcn1kEhkCKruPbn",
  "key21": "rMVcPimynY2evZk5W2x9MPS8s7BEjWPfBXXWx3YfWMSHmKxE9PJhk6f2FcxkrbQAnT8qYp8mwFRnZWJwHScCiMT",
  "key22": "21uoWt1k7XVb4nakdAgUyyNV2p5dVzUExtAfATXq1hMsxuJ49BsqY8mU4uGersCNRv4QhdRMah8zRpiH3rgyxTY1",
  "key23": "2wJoWvAk3TN9PAhx5CQpPDtSYXKFoE2FfDB7XHXjxEJ7YD8b8GZewAMgdT84vZZNdpYgkabbM4tXtswfaG6ia1di",
  "key24": "2vAhxD7LM1Y39VsRFnCFfKGTgPNFUs55PiJeYY5UsFttkidfjSQfoyMnZuDnXBeHsHRsJFEBiHQHPhxdCmm8KFsK",
  "key25": "5PMtemFrY4HFfmZn6dCoV75GBd6rRmQoQuGZbY843K5QYrT5feRnsq4fVheVdcLt7pkEhppA5cYr2m2bfCDwkUtR",
  "key26": "2hEaKp7yekYt2tSBUh4UyJqE3Te53v8ms5ZgcdCYwRogYneGk4LpiMtyvRvdBr74rHjDb2Bvq8YkeYhan6JTg36f",
  "key27": "3yZCLmcKD12LPvxrxhYp7Fxun7WCH24thQwEQ47HtPeGFuwdHEZ7C2iiEupu8wdNBWPbXWRA6z3TFVSfVpAaAeMC",
  "key28": "4nMgnb3hrxa9gbVhYGW6NZcHcfwJwSsxuy88tCU6Ugq5B3CpEbFiqUdqKXPotJv4HrXUUzQzzr9wGtbwtW75gZA1",
  "key29": "3jDncF12B5sFKY59knZiJ1SzwwAzLPBcDHsMZeh7KQ8TNWYW3SGik1kFK5tYFQ5ZCBezj2kb4Py78u3cDG6j4Bmy",
  "key30": "YL7jCJeb9nz9eQHZE8LRsE8sRGety2MwxqNrqLq6xNnpYLFqkxvhoE5AeNgRuHtakpfji4bvojcZnLF6NMPbxKj",
  "key31": "kpsWCKsmm2BQw3rCNMmzQfVSvEow7rDjEdWLq68QMMGjeHsgH7XsquVf4Ff2Ua4Wa1CiRJUxfsqEaRHz8XjBsSt",
  "key32": "2qhdvaJRzrJRpmuTr1p8eZkADdEo9biCQWmnTciYLQb19gUVAxoPVqC83kRfZgpznoa48wXWx7ftbys8cJRH8gxc",
  "key33": "5WoEbL42nJ2AQ9a5fEZTvFYFjDxow5XBZ9WKdArvg39CxthHtnPHPbrof8kvURQMR9FjtrCLfUCe24g4Jx3yvyCM",
  "key34": "5GvM35VKCN2tnV1agTbn8bftqppSSMMXLvJvdxjJTY6LeF8PqsJ5eG52YrWJqPjLLWwRfhQapVTu5H9nSaJiNkVD",
  "key35": "4C5cjyGxE91UFahFM9Hevyi7JZx6dhYLRH2eyiWUvhkjE7FvaMifYWJa37wUQ4GbeB7wzSDn2AtEFerfserj5tqx",
  "key36": "2hDo4Uua9SMYw7G1d1piCfebKrpz3cTYGQfbf7CpczeTNrZKHByHFXkwqkXYMEbmDtdzCPKqJo7c6U6adAx6REUg",
  "key37": "TE8cmyPmuRkmAUgPC4JtVXpuaxQXUvAjYtppgD2as15JSJkpj9Ki91UJLSUoVYmrRPTKSSAeV4cNDrocTQNTi7M",
  "key38": "2D8kTnuaZDEyqo5cfwXW7P2h31o65Ju1w9cqkGZkBCac9KYpR6xyQg2BffW63rptjvRwJZvhHNRaYGfar71R1vK5",
  "key39": "3mbcRCTtCmf7yyuRZEDwWY1BS4zoLaTqLkE8gs2ZW3uCJzD4xoiyPCGe1QRv1rgsraA3DycKeFB78EuJQzYiWm7U",
  "key40": "5e2MEDyB2vmGpzSfwW4ygtQ81KQKsEtc6Jy2rJmMqTAqS2CcYDEd58qWY9hNjNAALsf3hBb4UYHWq5sCB72es27C",
  "key41": "54Qk6iBRx32tbeneNAZfQCRmaLXNL9UFBLhEKEa35Du8QvEihmYZh3TvmTGoFCJLV8MRznMoA7WL63QEuH1uxVbE"
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
