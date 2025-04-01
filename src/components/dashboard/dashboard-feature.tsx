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
    "5rMKMjkApLyryvy6GPoP98Pfx3ugubMP4dMbCWcZa6TScQDjeUzBJRPXUG2AWgB1ZkkhB7GYrvDKpjRys1LGZSSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dg7sBQwenRAR37Mvh1U9T3VX5KNd5q7dnjnbyhoG9sjse5FGYkS2E5WpiCGyPj6k2682bm8UZrLyuGkcxRRgzDK",
  "key1": "3VDjCNCXJ6vMziWGfzapGupyLu3jZdV7HRAaEasY5tT9NJdMDwMDLU4WvM93u3JM4VHoUvfEe3PHKcikCriiBQ83",
  "key2": "2946SJq1oEpm1sTAf4n2XVcNFr6qjs4o7edBRAu1ZasUdJ82FDbRdYVEKGQcSQfN8u9a96UQtYCXgz3Jz4KEgCPm",
  "key3": "331Cr19Lx4TjWdhGsi8Fuq37zxMV6DMciCzqDp7iBMUxVoFR5ATSDGT1hGYCafbSzuuoqwopqf1xUwMEcDgn5RaZ",
  "key4": "48vU6WCkzZugEzunjZo2WpPwm7U3iupu2aRisqCzSZayCQ5Fn2BMMMiv7Ryf1taudnDBYQYr4ZonpsFVUNZozGcK",
  "key5": "2nwWcPYUSNG5Xvp9MjKWzaKima8TTKXsxBeNvVSFmoyHoGwG4QoTm2WVoPqb6Z4fLczdWxFcQ1jbtVaFgSUeRWtD",
  "key6": "3GSsUgEXz5gNZgaQwSrfUpBbcpGxeM8ZoC5tnsorXhoH8qg9vaWfU5sHWaNH2DGEpfaA9iERSi6LQh8rV5zAfjMo",
  "key7": "3FY5X6RjMJ5geQffQ4UkkMqsBpcvs41j4XueBj12KFoiVc3dcoHZdbBH5x2zMr124GM6j9h66oAKv7oQDQbVFLnT",
  "key8": "2PNkyXTp2StpQQ9i83CsUjCaRGKx1cNKW5Wbj2fHqXzEdstpKgcAaKnpnBU6K2CF6C1rTMj1Pkq88srgY8aze4Ay",
  "key9": "38BMpgTZYtHXNcrvhT1YMaPgKx71bbnqo67k48xpbViXwcjvc2NNMA9gySm9wCUWvw1RrENGE6YdzwifiuuKqUmM",
  "key10": "3wjxxFqURNxwm5zhDPd2r7vii6xx7wMuuUogZVJs2qdLDqexUJ5HHPuZDBXZncYRHZUrstQN8479cyjKUrCYnY8w",
  "key11": "5wJcoFi8tM6TyQZDFP1Hd1P4GzH1x9Ye4VCqHh4Vg4MoV8Tdxd8KKPxU8pcCJvnzRTbrNGdmaoD23nf64zVrbsqz",
  "key12": "5B5a6UV4SmVezUWjoBhhiT5mEtDZwVPNaBiJExatxWxRvEu2CmQ4rtHfQi5DD3LQMXLVNAkR2ndU8Au29AnSxcFy",
  "key13": "4ZkY2zJuXEahkH8tbVrGcJa7px8x3oUoQqSBrYSaAHeWSn3tR5a1kZPg7RFDBYPMzwjq6UeuV8CCopAvVDjnFr1t",
  "key14": "294AR3vTetrdZnATwfn1gMU9A9A1SAM1gNEgD51t8w2dnHsE9ebWCZCVuHk8UHLWGrEyX9Rt8NxLGHzvR3FE5R43",
  "key15": "ReLHzVvSV8vG3WsWZXGrpnaSJx8fJbJVJys85CHeV2ZdJakAmnzdiof4MqgqEj1SHgmUk9pHwbjR4Ku8fHSgKHy",
  "key16": "5RdTRAHgHNEeABXnYZm8M69Y9Cq7YXgTruLtaeYuiHniWJL1HeB3gDWbkQni9QknYhqu72djBqVQfsnsBTGMUVEk",
  "key17": "4ivyZUgANacPLS713xfvH4Kzqri9ynyCh1qjRg23gcftSizFkJceJPEtQYhy3Y6f6iggLty3a5qwBYWCJaRVkqZZ",
  "key18": "2bkVht8TxgxCYj6LeV7ipqGKMtRREpedMJv3byKJBtshPnG2jEe2P75SCPdaUQTY2VJggRkYoWgsnjWe84xnZt1e",
  "key19": "3nZ6MpEpUWhn1RwtK6s6ggtBjLytM3nuhZzikjsL7VAMtGvHP9qEaXK4PCXiBwyKVn98yVqFAQeFWojaDY86jCAh",
  "key20": "3wUsq3bxnqpyeajWTx4LRWsL7SZxViLdjN3yAQJmtJvuZ2GCcqbtwcnTmfrHULhSTRi3HLuL5riA2yDcMGRVGrJy",
  "key21": "28miwbBKmS8VqmifVYVXtyGiCa2nxiKRNFRsaAtVmHBmDozYob55zdRBYawXbWioHJRbE7TmkB7NyGSaHYcc58zc",
  "key22": "2Nike3VnZfRJHDW6F7ko114aV5LKPG5jFB2wrADRdXqKTMeXAV4jkErHS3ZfdxBCUDN3nCFGQvMRjYRkJf5BbqR5",
  "key23": "YWZB836QKEHP3MWF6u5YofyVSiZzzPY5btBGXKEyo1bPFf75SbyfuG9TDGKJZXXSgmbD7RGDGvkLXUsQVwQ6WTV",
  "key24": "K2rkomgy12ZU2BFpMQ34VbEYzjUuH9EyMKZjHJff4hTndQ7umnbGYvLPE4phhZb8CbkVaYNmEtdD7iBjqNYFLG2",
  "key25": "3cFRAG2ZMeb5zhKGPBuc1uvVUEKqP7qJPDEt5oe12m4AMMTPWj7aEp3MBXc8jM7K7MStRgjCMytLe1VSb4b1SBvy",
  "key26": "5AWBB6VXoWoxGijwefg6Nn2acqWdAJwB1Qm33GG9ihLKAi5YFncW5S1bmWjqoizB7VjNA5FBLF8N3B3fcVJDLwbq",
  "key27": "5wQCBGErTidPgxv9qAu5GiQXYeXd7HJUSPeKC2diVoH4aD5xcN1BNEtvBKUpQhvJ3invr9pwweHsPPadExKK1Sgu",
  "key28": "5XaBSTSZFpyRC5BQs3AqNaufiavYCKrCHh6KaqLaAMpzRjus2WFubaYegQrgwk4ikTXLNbzQo9413XWpxjLZHUq2",
  "key29": "WS7yPJfcY2wz2Rx7J31nvXWB1KHZTpJ6hwta7DMRobeYjG5NMv6YKidFys4AEsRcnxcQqeB1ajYVqpgiFsqGVVF",
  "key30": "3Zo4uFVkGLbGhdgjE1iJE8GD1xXS1StJqoaBLTE1d6AYQDGxyetFDHRE8mTDr54xdnoLSYDPpuunE4Z2F36rwV1a",
  "key31": "2GZfmtEyU4Q1VMTZvQ7ms97eDw9fVMDFWwCeGVKE8AZwhDvwZVKHXJ9VGXqPinpCLKjwbZZMcbfH6qsbDGhUFUxY",
  "key32": "2E8fnWwMsmvKkcrPnZi6qLBayNZepdhJozSeUJSjvnsDnAQj6Bk4wnfpjdhk2mhEgVaantBCrE3Vbj116rM72qFw",
  "key33": "2GFV2NYXS5fHJgW38rQ1HMSW3etxUoPPKbUv6SPgkkcw2gtvN9Z1Ta5K4Tw7rAG3f2iRuMxSzTjUXk2AeNjtnnPs",
  "key34": "4FYJyXKWNLqbej2KVjZqkctbZhxe2WgDk7jdK9faB3LmrG6ymxdzVASEN4SRAnEPokgsEpHH9patDXkqPUd1LTPG",
  "key35": "HhmRXEVMpo4YFfJcNGyk2MzGnCeKEdibaPG1WebQZvDxcVjB4ARhHdyWnJ6dNiheb8UzT9yuGAY6xhRvLSj96Ti",
  "key36": "4PEBunetYvATZUtBMgi4TzSqq1BRJk924Tz2VdSkmHekpV3wyt4AwU1EzUdu8E2qyasfx6oCqnvkqSUH21BEjHFu",
  "key37": "kTCWQ8i2NX5yyPKaka9hGjg3nkjd4cG8xd7e5TUmefNJ5K4gEmX8x1jNYSrMrK5AwMdjYEXr12AMKVysFwsyY4w",
  "key38": "duQaPjxDko46iyAXgnfYZ6XdSTEzvFAYbjnVCaKhkzWRY7STwRAvVCjQhPM6X6yHHw6JVKP92CBXFrZQHkLCXMX",
  "key39": "27besqozmVVT2HMhwNMn7R3XtPgDefbwmZ9ysCgMx744AcqZg1a3Y4cUseyzUxAk1gu3X3aTn8z7Bfp3QwMpd95C",
  "key40": "Auq5UaUyPX5ChTxvjGUMDeMEvEPNaYYBLVzJ3pE3KcxWARdXVC6RPwmSyiTV74NfHLHRD3onEchAxg27wS3iMrq",
  "key41": "4A9LibpcjEqMjX9ZwnWMSvkMG5LMeqp8kxobKf2CsQeYBMVnoCHw5cZ3mu8oaJofe9GourwGojKTYbw7hUYy5jQK"
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
