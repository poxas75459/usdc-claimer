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
    "4t7obQmhTuGZbX59SzYRcV62fxF76oCUvFRSYyNcU6F2tDsT6AK3LQ32t3u6Zdk7PHH1GZtgt6PUXMXmaNhS8JD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ah9g9G5PAhULFHjdoeE5E5e3fpmvL27swN9nE8SB3g4oaQjYKH7dToQECBy7B32RJG1DUSjrEn7Es9Epkd8cLPt",
  "key1": "5hrQMjAbVpfxTz7wQW2jhkkutkhe7CW4KFnGSTr8MmMiH1DVf4MeJJQMpPemMJbkdQoDBAsQtsDZWa2vr5r2juQN",
  "key2": "32YzBEWBp45BEb3pUgYCrEnT6bUQAgJ1i7vMKBEjw5URTkV9GzPdeT5fw93uadWkUfURMuJhGUntnfsFuof37KqZ",
  "key3": "5uBGKAfE4KDshkU1UrktcfS8SJCYsvDXqYxH5TtvanwLqgJAPh4aQW17Beq73jc1g4nX25UDd3GXJzjvwnuCkHh3",
  "key4": "5JERvR3CnucDT8r1TaqgZKAREnViLBvfxmrLfwZpBaDzwnhN2kKd6p4HRZVKeaX5dKZ2VxSvUdxWq1LkNYyAuzkB",
  "key5": "5uetKWe5pDP3ZLaZVnwL3vhdY5rzYFfg8RTZCLzT1tQEdVU8MorWErJFn2yDM6Zo9FaCKCryniPgHJ8wbzgZEnbk",
  "key6": "2BhaebECknD3zwpZ4DRPeG3xChmVtSLeckbTBTTm3SviWQ9LBDJSKFh57sCMdBBt1aSxXSz8qajRKCtgvsVzhAzy",
  "key7": "HcFsZxq32u34KsifS6YKzqUDU9R1eJddQ2zkebNa9ssfUbdE9SrLMwMLv81NFiYTJJyYNMn9Rib3Y1p48ms94Mk",
  "key8": "651JtMhnWkWVxBevX28yyHLeZYk3FoCN9ovsxR7LMVuKxUJBSzoU9xnAbcx7P2imyY3Mq56QASrPoYKjV41o2Rdw",
  "key9": "2W746qJ38orBnTSvYfvULY5Sn2xo1R9XqGGLN239oCRVQptofUxw7ttnPaWp59hewDT8sStDFg7ieijhCh3crHYF",
  "key10": "43GLNeqFWnASvXBsEbdsvL4cdpQgLTQG2BurEpAZ46BFMScouHpobi9uUBaoQa84TakZvSeVJh9JQYVpcb61tXex",
  "key11": "5THeM37MdQLMRS4ey1SHm3pZMXgPsLzk3MqJWtmWMAtS7iebnFSyh67GeQRAT8SjJtwj5nd5xgtSED4EhZunRUvJ",
  "key12": "4ghiAqAzuYvSpk3Sry8hkyAkhNZSi1cPVcGSfbk296TwK5AJhFZeT2shTGEvMLsotiCttkX5XwhmNG7i6HJB1nu7",
  "key13": "325ddooTctnf9oB4WBYqKEGFRKZNqzVjttzmYxkjqqKMCQ9PXqyk9iNxvj2X974MrzRjzHR9oys4MDYW6qdHsDzT",
  "key14": "4FZcRpCW3DBDvRKygkbLzsE4z4DSg2WCtA2rnSCmys5wYzksbfMnGxzooPnmN9GFhYiG5UGJR6Be9gxH6DK27wpL",
  "key15": "41vy3KW3yb9NH1acvuVmc6qDUB68bXDahX8AJkcg56XcSSXvqxsApCMNTrW5xQDhaSfseUMoPa48hfJxormuW7LG",
  "key16": "WmQ1N7n7Pz1RCwhT6BobWmYSEKTAwqYfkHXz1yFo4JFcBScCSgLpusEJuJLFcz1E8FYhySkNjtGGyos4Sq6Z37Z",
  "key17": "3qYV73tNzNtkH9NTyWfYvYmsygUQzWFEpp4XuPRbptn25YoL2VsHzUTCg3SsxfdcoMf3MfJF8PrXhMkiFbc5iYzS",
  "key18": "2uWYdrm2zSUiMgV7pwYJjUpxLAKzJ2f3DTr17U7RJTbkMfpME4anXwNyJvuSBArwbDbxCdAVza92KvmvUaZyWEez",
  "key19": "5ABXXPw34mFXGky8MRkCgzoEKmkutWtT9RHnuLcXinD5HxiA4phAvADbRsvthdiQswZYyTZ19Ft8VmB81JvkAXy9",
  "key20": "5edkTTDfxbPajsm79kTNcBH3qT4AB3K5aorVrqvXf6kbrYVKwwuQ8LYKuqyyLzE6DS7svS1V7t1uWi8VPcwtzqtc",
  "key21": "LnXXpRU83vn71rAtxfw7bGqrAbnS8WTSAoYjtaLr3Z6VAX9rAFWttxMg619FHjPWM1cGHjBpoqQNvA5yEari1rx",
  "key22": "2KhPJBVpWeVhLPjsAc4rse9EzjeQgPEZd4DQjW7VJjwZJd2ifJBprA8Dg8hLfUWzTa3Zvy3VTiav1GshLQAqjPkw",
  "key23": "52vLAAMfAoytRcUABxxs8J9VrZ38pxDzDtdt7hm8MEbjFchHXMJRYzSRsa1sgSPAmZvVqXzCJGy114pKPaYEyR1e",
  "key24": "1DgSdecrD2egGd5NuZBMKR2sWRHgnhKyWM8GG9sUGR1gd6DGVEpS4QpcK3yFvXudCEbWijYCLQWsSoY72MxESYa",
  "key25": "5SCndVnZdidn6oLmFJnyzEcsmeEsAH4baf3yDPW2746uJRptLSNWd1VL8Pz1hdcCojhFLCPqeg1v3V3dVPq1AskZ",
  "key26": "64rSr5pVKUmfxpycpoeFp2BYRTfuXca8yun7yU2NDU58VJSd1FiJCDN4D1EGU3p6jhGaj9mcTAWsYpEXidVsFhxR",
  "key27": "3FgaXBMsX8AEJj2AcDXWQ8rguXCqTC87kk6eXyasJDz29un6AjZoTUbuPRuWvy9rfEQDqoUghsNY26w5Dah7EFwm",
  "key28": "5RRLgs6v6ZxM13TwrmPmuRSiGRQy8z3BXBHEUXEJXyFpgdaQumN9gKh4y7rswtPLpohqEz9JSjCjZJyVkyG9baQP"
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
