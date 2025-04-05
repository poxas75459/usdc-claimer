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
    "57jHavygAwi2G7acMwjzzmHHDjeb4GEVtY8XMNiWCxezntWi44ZjF4yS3NSLQricLH9RiKj1fZPwBRbAj2jgu4Nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybD6Ba6QH9gnfzTsZcaUoyxg7fQsfyhbHZu2pdugJHwWdzGFjiut6ecWa4LYVH4W4uDK35ARy98YUZVPHHNpmDs",
  "key1": "4YdSSX6faafSbsAmhf2C9kuLbSbGWsComDzUpPVFbhKDHVSzVcMmeomnY2CK4FTrQSTwDWmbNThx2UKmdtoY24G8",
  "key2": "2ksU7HfUr4wasTKFAYPrGiYz1aAyuPzP6hLg8GbAoLvwBafHuBLcYjRonkdPkNKLH825PbsfHgDP1CzFoxEfiBLk",
  "key3": "55D2pKjQfLuQDBe6BMW3oJex6guSERxVUD11eruec6wX5B2Hwa7Pw1SjkyMVgD5A2JfCQpH4Pdx4KEHeYb7WBYjw",
  "key4": "5yNQhAz1ZPuRPNFFme7jVkkTCRGiR62Y6AErp9fb2rqCC46SrYRxbhNa72XYEECsd4tZzcVwSpPokvrKGgXN4VwL",
  "key5": "yrevt4mDw1odeAMRhJJ7srn2ajAVo5Notq4TA6zbuUFfkoR4qSSCJmrw78iCSSCr2Kya981pvcBWAfS8jEAywaL",
  "key6": "4sUzsKGQV4vUr3NJQSdFUJWhb5RD1pDfJRjhJtqmFdx4mqLuy67XuJEMKfKAhdRGiQTnwhVXFZtosUPqoitYeuCz",
  "key7": "2mh3euetpbnBQLjhBaCYpg3nDnTnt2GeD5UtzYbhGAsJyukTJ1DbPLwzc9RncQRtHGU4yjgVEx65BjZtzyANWe2u",
  "key8": "52gCEnC8mUkvaDvrjcp865eKFnUetgjfcLFE5wM3Vb1R3ZFVKtphu43rJKyH1vLzYc1K7UL1UyK2cHAqSCiPNJyQ",
  "key9": "3NyUC1TspLEz5z4uKybmJNDfYJXptuUR24mWehUNFdot17Z6AyMXoyJGfgC3G6iuttBq57NvpTY6AuimGBAjhcHt",
  "key10": "gSVMX1Z7yiuFKx9U7gDkKc8R1YwUyJfFWgFacJaGs4vG6K73F7hDqNCzCNKzF4oMhvMncVqH7qEqnYdyRTruTrP",
  "key11": "2kxg3KWhYho3VwnooeCcSFpH9jm6YUeX3ud7ur7sj5me5D4S522UZAydSBR3wHTCDw1ke9ur5n7RHw9GdQfNRSYt",
  "key12": "eZ7HbrizeXUD7fmL9UfsSLm9w5M3cKc4teovyDvHqNU9YwPMpbNSTopFLoXu9rJAPpe8w87AasUXp2MhuXjENVP",
  "key13": "2EvrJBx6e9ZFVC5LicyK4fpBR7MdAFbDcDETSxzMFtqkBKHLryHgybCNqEpJ9hKGXthq9C68Z5kxPyo2TPmLqdD4",
  "key14": "5wQyg1BY7sNzYytfJ1woRugA48F5DEMuES1Cq13D2nEnFyC5GLM744dVY4n67CD2cq6Lm8gr8bTQd5zs3wmtiMaL",
  "key15": "Y6PLsRhJu7PLy7pB9RgN1mZ6Hutv57wiNYyw42ebVE9R53Af8fL5gaiXJkPprmkmtAKPmqwfUwASNiCeaqKxjPx",
  "key16": "3q8QBE6YpYc3gWPZ5Q18gyG7WVyP9giVx42kESgzPWbumyn56T9h8J62aQL6GhSZDfqtoXwW6SLMdPzvdKNKbjdK",
  "key17": "45EuankNW21umkVcdXfh7gcLbkgNjAPTAieK6T387mbBBRX82m7LrTzcMgLtBtE7GYVmGyZEX8tmPv4VdVJcABqo",
  "key18": "XDUAjtEuGPE4PzmWaKzsCkV9vEvGaXn1kQyJTMtHfgCUqPgELfPHZDR9uQt3QVSSW7ZYrFdPMNstxsZe4JdCKjg",
  "key19": "4fkh3gFtA8UNdSH3oY3spV3W7FztxKLb8HD8WLY3NmnaqyuuJmaR9W44JD6oLGNpxzF5oFaKdcG3VPsQHCZbNG6q",
  "key20": "52G4qx4BKK3CmJd88Lx1LWmwJBuQHNzJcWsfgx1pYjA22FCj7iZ19BcaFwiKm2ywSsxVfxVpDsFza3LpafjoYBRw",
  "key21": "828hcLGkfmQhFqJJNESWBTT7VRtBQCTcMUC5eooM6wPZbvXTbJc6hyEoAH8ksqMhvzGiAsftyqmuQBLuzqD8jU4",
  "key22": "BidTb7t2DpGUkL79hchQtG798RMfUA7LCPnr5YNYUHhYhQGMxG81kkhbYt11Tv8G3aasAhgm15o2vrx9E24GCnc",
  "key23": "66jfNUR5phgFo8YwZb9gf5jtKEDB9iE2BAMfDbVERwAj4Z5UZegEGzNLt2AZB6GovEQBKjbhryei8iKJrkZnKP2P",
  "key24": "2XJnRJxM1BERrP9oph3rZGr8LrNAB6WuEdihpQsQy5akjRo9fG5rAUV6yyqZVYms5UhtQ6SdKrNxYxCTpfxtPsB6",
  "key25": "3hxGLXZiFESM84WkkY9sgqNP1cK4QB2d6632Wxv61RGDPfhLwTXCszLp563dQiTyRnmigu73Qj37xBt9XBbh98fk",
  "key26": "3aZWbN9gFKRePrRsqFeND2riq3iUSaRpuwbDqoWTS7dfdaXX2asAQgzBJbLkRbwE2bJcNpuHQPTjEqP2BKJKnAdk",
  "key27": "jo48eVvV6CYYdVrzvE1qvnGYy4b2bZvADpHQoHj9WXFf41BFCbH2LiC9Y2KrueLwsxGcwwkwUv9faX2gPf4HT9Q",
  "key28": "YERZuU2RwmocDjS4jgyzkLYyteeY2d4B7Z1tJmGUv9cVjH2aqmLhdKYDeB6kmWhAGnNe9UjUBUeJKWJbmfHqxGE",
  "key29": "mLogihBrz2Z595yiTkas3XKfUFv79RhM3X6NXZxnw9r5cxDWNvrpo5NGWiPnyBfJGg2q5kiEwti7bN8wKcLPUBh",
  "key30": "42xVfxWNN3pVHuQXxmJM4weYq5sRWi2nd7MVKfEVgwMi7dyQz9KfYUHm8tdDnHExrej3ptf2gKsz4rbCbkWzhrR3",
  "key31": "43aGmFg5Nfxw334n1vaoAbKqEmXhpKec3cpvouEQPsuve3ju4m3W9DsWPgcNvHuKBX2BMwbgC2WmEKb4644NwahV",
  "key32": "4tFxTFRzJ7tv9U3FivZXuApcVEiA3P2iC1eUR4hVX6ETFDU1uaTsWjDQsBvBLqAmzAjrLwQsHE6YvZJyQ3tRGftG",
  "key33": "5UcVxC5xHpQ2iqut1Qg9Mp9niDGDDyDdUfqkYWyUYAUfZDeTRsj9rVcFjVR2vQxC85sCwgxYTFaZucHrjk7gt5LF",
  "key34": "5qCecy4PeKTSd3bCkgtrBurSLafKTA1KciMjZWpSF7RZBbL5FXVdJJsfg8Yc3pNGcSJzJ3yFz3ihscWNSXUxpVNJ",
  "key35": "p236btgBd7r3xG7x8S8T8aoFxhoZphotPpFH85QNdqC981skk5NnGiKXXbSeAaecujEZAUVGpzEFmfBwPPEhDYm",
  "key36": "41TfegG2ee1UQUBqSiDPEXXyicRV14Zkv2n99dypKoC19xCwokPpDTEFhbf62VAMi7EhAyycQ6jE5Mpq7v8fMujV",
  "key37": "25mBfReGhcESPXvfudhP96W63wyZS82M384trqRUhscac4ZX5diNt5wzHFp8LY4p8n8ub2GAbCpnAcK7n2mGr15d",
  "key38": "3Wp3EjFabM91Atpha2XWFMdnuMCqReujrwFmnNV3LTUrQ3DhqsWE4AEGtqf7xvCW3iDyokH26tdfqu4j1YYY5Tf8",
  "key39": "5UgxBxphEyuauPvqCxoVzuma2hJijnB9a3vtcq6K6vQXmDZBbwtvGAKHP99uNkSnjoFMKo2zPpduMsmLgUFxnGVo",
  "key40": "3rxzZeqh3FgCk8A3Mzr5mLJQT98xnZoyVYbyo9bKjgbWnQfU7WdZhA1B3V5mW3vb9a8TDXVvZn7mQmTspRj6u69q"
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
