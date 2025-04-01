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
    "4z41L1wo4stqXosH2Fb4QZaGXZWC4uj5xUN2CeyXaPeU5xpRM5s2gA6rQ8dtwsG7S3VeWDuoLYVYNYmFZaspdJov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZbfxMPF5oG6pUEydMj6SuiJsQAS5XVrUZkeqwGKaEi8iRjDTySyckUsbkjDJDrLgtzKMzWc59z1F46r5PDitip",
  "key1": "2ZmR1ieRj1dxz4md2hBd3LwE9SLwAhTx33jZRhR9AweZF813RDEWNZCmxK5jgLNNmRvz6KFjhiCuMwrVbTMdGBd9",
  "key2": "4jUw7wcYx1DyRu7hFeyyzyYmGYFsCDMwq14mnCUrDhrkNqLDk2sc4kxkYRQDDxhiRHuZja4PAeZBdjTXcr3MpU87",
  "key3": "5qfkA2jzmbRTUdmpikEcbfWsbVVAJuRqbZ9pQz7h98h8jcA7zXR94W7o64PHnktQUN75BAUqYE2ZDeUhrPmgFB7y",
  "key4": "4wLZj5x5m4gsFCeZzesvkztUWjVHFjct1Vv7jJgEy9YEvqSHmr2cZDhvSzn2ufVPkViU9s8as3qubFp8z3dWkiyE",
  "key5": "4NCkwKrePd2avZBekWYbc9E13rGj4SfYoBpSuDPgbij1Jhj7dLoLMVajz5xA29CWF9qATzfg6b3hEppGEvFE45VP",
  "key6": "3Y5fAxGoH52jc6iEz8FTFs5Ex6Mbvbr81C2GUDKGmY54tQGUB2WRcsa61ZVfHeeVkSXb9nhJs8ZYnGPjW9dGWji6",
  "key7": "2m5myEVqz6kjaPzXa7DtmvNEdU8PdN4QrNMZax9ptSk9AaY1422CMwR2ERnNACQoAtjT4s3XXQ7qrSKgsTZZ2Has",
  "key8": "3R8QpF9Ci7Hz8t1dNvksGGKfUW7GvqzyDwANw45HUVUarLNZidhaoMAaf9E83wcjqtH3BmEAThh2fP9gc5B6PHQC",
  "key9": "Jzf1pHUMwSChrLTmwyJkJdGM5TafqszbAjH9ntRALQgWidHGWrh56bEXQo1ENLx4bNtYLkgHgv1dYVWRtaxMN5g",
  "key10": "3XvUr4vk6airPCoCXwqWAMD5B3B2V9QMTDDMivAvDNMXmKcnedcNudCnjEiAQE5zyCtfBkcSTa3AhPmKSjc9ZNQ2",
  "key11": "4QwK63ZBPfkpExHDhiqhcWZVJmt4yacMK5RG6MH4TCdwaDYHZULtYuVvPrtCXiSbaokbwVP2HDjDV4yy2446ARH6",
  "key12": "5T52E2nLLiFbFLNmi9AKKJKFbfZUMs3PHBUFrEEaEe2hVtUBZD4i2BjnG8v6dopGbVZMtmzPsmXbWgiy4v7fwJkU",
  "key13": "4qurLyzP2CZHAF3Wgrm8CHbXnA4RLSkjkPTNTrzrBpebX1zM1dqCAcVKPv2PJidQCUSZEpdJEpBFachZbVm2J9qV",
  "key14": "3fiwc8r5M6iVWM8nkn4sZBnNaFsp5gqmfLxr2YFj8zoEL9FjfALxEZnfJGpz5v4v4gKxAjF34cSpyWxXku3ev8Qb",
  "key15": "4eCWQ8LaWse7XxHzuNd49WzLH6bufconibbWNVubKjaRKwwmwcBguQWKaCGBNMZjQp66NiU8G4MQgfKp88LR8u7F",
  "key16": "42HV37UCu9ankXiv48Znuida3nXEsYuaKTRTfVDHsNLGE4WcQmaHntQ4RjTE32YEZvHNLVwhfWWUjN9YzcRUn5zb",
  "key17": "4rvS7c5BMsXTLDeCni9NpoFj9d2HsP8q4amojGjDxGAausqmSCfntrVWKZRJfPwsN8Kcgkh8Z9bCYYvk6P1u2v3S",
  "key18": "3ytpRSujq2ySo8BEzfNL7LFg9y1E6fKUKxs6CqnLj6UF9pq4EA8FQf21EEvoCnjgwDC3LjirW9MEQMsyM6pCiFNc",
  "key19": "64KkpjbZ9GtWZ9dtrMs9fsokMJNF6GqeMRCHgEzHiTniswHo6AAsJp7dSrjvoEYcaCyw6v3JaFzRKSohA6ojZvoP",
  "key20": "v4n3rPaLS5YUUNFcwArb7Gccz4gh2SX2nobRFas7ns8evzja76BFhJqgWUJTfs7tjFJnqU76QKJUwQZxtJAktde",
  "key21": "4BPKd7xS7FL9mA1bgKh2kp98p7tG23Jzdx4LdXqWURThcpT9JVAiYs774qCTnf1UcgYuA6bGH9mqufgmFRZypWGY",
  "key22": "2DA31RGGtwJrZbBo1HMeCoansDnkesLDCkcNcbYNK6v9AUZrVKzDQP7kQuzdh33RdFCnB2jLGx45xukfhGxGLBN8",
  "key23": "4dQ9xZHbufQr4P2YWyUTzQmpGtPmDzDt3c4A3v3Y7W16XSxSL6N1x2vpcaHfY26kZzcQEiEB6iRJUEXQnCKNC5a3",
  "key24": "4AejBMShBjT413UoV4AWhErZjLcMrz1f3B59aP6FpT5qcw4LqPek5gnb2FVocGxcVDXyXQswTJZoWcAmt7Xopg4A",
  "key25": "38NBfLwah2sZAviM7SrEJg9RLLKx4EmLj1bpRcz7V3YnpMnxCzqQzXeuwKLsXFHuo1oZ4sJXfLkSSvgUDQ4pyCiB",
  "key26": "4G4vFViUqBhHzP495RiMsPVzoJC4AnfXZBiBtfknfwLwNroUtvBUNAUeafVk4ZUccBo9ysGwMhev8Hb1pSPyGMg2",
  "key27": "CaNxeGHPguaVmwXkebVBaspmbpEF2auLbfwSd1jfzPiCoM1WyYgqsjsC2CKQoV5DE1SSd9oU7xg7QXajnQzfg2n",
  "key28": "tBmK6hp2Z8BXMuqT6zoYPCHyNHWdTQ8MGMgUVyhNmLLZjfwABQ3icPSua4htwHRwaKKiE15p3iJ9U6JH6iQEb6B",
  "key29": "3qq1fHyaQoHU7zgBcReCMh2pqu89M9zWW2CuidoWxf4N9LfxKiEgNdGh8jLnbxygc35DnPi1wkCDjoWumW5ATeGA",
  "key30": "2mKeohPFs71Qn8z8hGQxyTYoyb1zKAYfRPoakw1UFx78sh4e8Fuash3PoFiqdtkrXUnXF6RvGKiqSgXXaXpbkcdU",
  "key31": "Y9C53zTJGKjLFyS39FzmLPsfcJucJEnE3oWNLAz9qGa65zkS5oV7werSZjVyu4ZhKc3gSXEpzQRSPR6Zz1nXQtq",
  "key32": "5D5Jfg7Ex8wAwYb4zQWgP3cWCwooaGm8WyZNwcseBkYjVYC48ycJzvczQftsCCNVuhdLJJ6cV8s66GXbzz797SyN"
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
