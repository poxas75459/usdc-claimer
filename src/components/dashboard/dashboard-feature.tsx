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
    "4ZyY2Ch6GgsBurq9G9gMGXANejwAGxiMr8pggU9GxBYDJBkUzdLaB8jyyBQ3pn41pRamNyqHWi8pspT9awvseGJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmkegg5XrXXiTjR7T1RttPjV4iG1xyro1t1DNpmEeSyGTPZSVxajGAgZEQ2yqKip3tcJZVxzwjJZvDL1HD1W88n",
  "key1": "4RR9p3Ngp4DARFgt7pur6JBnNTazoHpGeLsgE9XeLmU2uhKDQRdezmCo8mLh9aW6xmyTWxRoEfh7UjszgG1qBmoH",
  "key2": "3M2XM6gBJFfibvUnEc1jKfdiN3Hn8babwRE8HGLqsw4GZrfcX3L5zSVxt1goXJZzRehmTzrLtPLcwnuLdinwSkTH",
  "key3": "2ZPCQ751VLDkhwrJATJREN4UcuiHFMAamDTdE2D2tNt1i2jaU6HkprmdHQmuQZGNxkhqJy2KpgivcrgiT6i3hsLG",
  "key4": "4GTbdpZi7cY6KAnMtDHHhuSoC45C5BRAP4RbJmCT5eUmCBuJ4VgtwQ6QD2zWnkSu6YPVNqGgBWwTaVtC9Caq152H",
  "key5": "2SCQVpNoQ9WFDxJNvodBu8wUEsPsaueYHE4f44c7R3pRHbPwTVdX7haJERvGWDkCz4hEWxr98txVPT4XvuLnrNCG",
  "key6": "AMHCSUPtAy95CyLrL524FMyu8JExQ4QFhtAfjfPtR1sBuuwKnRWbLcYQjV24ru3kRzyXZUxoNp2BqNU2GBAbrN6",
  "key7": "3Hh3bpnhpe4g26Ha6vLdZjyVyxhrSsUiSPHKChBncxVxoGjmXxNZNeKmLcFnhPr43R9KqYfmchjMFpcdhZChkCCh",
  "key8": "3iPs1tkq3ccitutxWRh4VTqSXA5TSbBTnPzBKunc6bqUB5R9KwQMMbivif3Wz7vATV7ciPSaarivjz3G3AToZQyx",
  "key9": "3AkGxXL9Viv28i8Vc9UdKuvRbmeGrREDYam47LTzhakTgCJ7YLCioUYPctxFiFhHjJtHWiYXg1qvDWKcF8f9YkpF",
  "key10": "4hnbf9CfkuxSUXGFLntfcsELJtNFXTTYFZaHHzxKKiqTLm9QwVrCkCZ2tYMGqcYsLZFQUyfEjZCp1icnvWMrob6k",
  "key11": "29eXmPQ263JRyAdPw81chrF8hY4GWKMU4ZYYEipfSnjDBbTJ8E5FwdKb61RbhXayQh2vUfKDvvYKmjqX1dDe9XRE",
  "key12": "3yss5Dof5n5p98PTDAdLfmttCT44VvuhfarHtnHw6ZGMkDaDTkdnBmxQzQSMpiu2tYi6udfHNjWpMHEVLAZ2MVBf",
  "key13": "5qarRcgd8gYXhY1Ps8bsznYuHEPosVz67SyKqiSwgLDSTQWQez6GbS7NgVNensGCjjZN4tFSBTkGBr8JhGLaKVJ1",
  "key14": "222X4nv55zyiiwhHeJjExn4LuSLsqHQPQdsu1NenCTJAPhDQxGW4FihTKckXrvMfn9Tm9rEWnFPRXPCrQp6HsbBt",
  "key15": "5KzcXPEsyKX1rzxBjzG1rizkRBzF9ard3mg63Q1sbYvLj9DjqcyqMhRtdNVzxXwCWz478ghgHpnS4PwsD4WmsPe2",
  "key16": "5JDUueg7LuY55xtrBs92jbi8ssuyGbn9TUE3HXwKmAZQfDXqfrknNHaHjZ6UiH6pMGUHevgTMTzYx7VCAPprk5e2",
  "key17": "2rTLVDsyztGh21K1BAbyW7xFnw7cQWaV9dvkZ4CKCCdPYAcT7CB1Dn8n1DT4N9dwmJGLr9oaKTCfCDF5i4kdP5kC",
  "key18": "4oFafkqBgf6sWwqanuj3curXRLwT41Hup8ZcQ7LKuaDSbfwp1xQD8tnWvrrkMogNeECm7cKbsZweAh7BQgVN5eCF",
  "key19": "3qSgztiqXtN4EdC71Fs1RVbg43SV9SQZ2AFtU3Lv46oSQW2fB4GGsGh21gbe8ArhdhzXsSEyADK9hofTiGaR6vnv",
  "key20": "5R9oQqy3E9EUfh6erykS6R4jvci1iREwjspkxqQ8Y3xCVdqPspoRKqB6VMAEM7MTjvzcdJj27H9rxmtx2e4FgbcY",
  "key21": "2Kj9o7unikKb8pV3oihaDu4hiPAbVUeKm4fwHh8c2BzD4xwBUx12itfbfbaqm2vDDMc5cXpS83UJaZhdP4AiGT9M",
  "key22": "59xB7c6jZcWRbPBY1dtyBsjFZ7M3hPzJCpM2bhmnwh6NBkc6f3KvbZzR1ZEd5muPoE7Pn2uwkxVQC7GsutKxs3ga",
  "key23": "2x2UE1e9jPqXENsNkDDxsaNQSdjuWxqVnpSuEXSSH3sVe5u8YbrTJs4gJ9MQtnNUNENw6rA8UkyA5mvUtuAMxkkd",
  "key24": "3WNqx2eKgw3gz7t7umhwdwHKmwajxMd67MZ6ikPugGzPWWhihSzk6cMEaPPjREgn3w4ehBcNb1UiGVJGwbRmEixj",
  "key25": "8zCLC8UzjeHgXA7TEhA2Q6iuEYiyufenLHpaRxLRRWxGevctFG7suoZ3RbnenbToPg7LtVXBjA9wTD8mrDi6iz4",
  "key26": "4i2sBmrqvuKzSSyo44dYAtrSMEEys6WWwJ85WRxvwegAN58unKj7YcQEvX1XjkxQo6vgUheVKmYcE3exGkBqwspM",
  "key27": "5K6sFD76WHnw63Q1zeXtLJvVzuKsUzBZRoNC3y96LDb3T6AySBEvRPyYEoskKuMXRVyg61FBjfLgzKrmo64jcbaq",
  "key28": "4A8KnJUGLUfgmq2JEgKWiLiagiGbrFZxhWwF19t6n4auAH9Sks97cTGLPcGMwzW8RYej5PGiZQrgDi5Uay7d73LT",
  "key29": "5pbB2XrJwkEZCkf2KgaseShGbWUiYg2ZoHqXWvgwZPs4ZSjXvRtb1cCtvS1vrGm7T3vkicwy6bmZprYNwKPJLVxc",
  "key30": "ypXEu3o34TMce3D5yST9X86oAAczCk7WbQ9iL3Gzdcm8viToGbPpduWocUjSpJnhDrKzRqgAFjZVQbsWSuUuQ5k",
  "key31": "4vdnDQHj9v7NHt9MQTLDGHZn2Rh4htNoiULco3tr1KQLpo17LK51k74MKQRbiqpEsjak8xhEU4bqJRxYp2DVYUcZ"
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
