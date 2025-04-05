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
    "5ty3A1MvFLjnLaVxNvXn6BtY3ZwPhV4iuiDZ4eJoTdjRz14RFubcR1dkVAq2Vsu9hg5y9KQ6vWEcV2Q4zyXvsMzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgBziMhLPritJhLWZ5RpWpVKHPTJEbaEK87w6QJmcEttDKf6GV1Xp44AsECjDWqn8NQnjroPrx463G32KJzzo8t",
  "key1": "4tMwTnB5gJQL8Dus5m8arGrr4MSYfiMrUj78pK8GPEchLhguYAzsoQd34B7kZGuReykuHuSRzJGsQ1nDsXpvH5fa",
  "key2": "38U6edNsL9gMNACnyfhw4ED3XYLPks4UChaY5YNhVGj8EZPVSv8VokZ7GQVymAcPJ8713z3qQLjEvCoxdqGmT457",
  "key3": "5ayGMyEQuC1LcE1XSdBg5DW8bqnsu6BpezyTMSZUEHxWCsYNgzxyi8jnsgaKEiA6JGfveQRQ6Bn5JzARhnedfXp1",
  "key4": "2U4dWf5vc29ghB3mC1GQDzvmWBPksZuh7D9PeegQjJLz6aS7oACwjQ1YyeJBjTCJsJYgxzdGd8xsVBk9uNUcL2aW",
  "key5": "32bxMhRSdWbeVpxTiRPuSpRR6XqrcuzJRk1W318PkvAUC3U8p9prXCMT4kcuykADKFeHyNk6iVLoZW1p1magoAAf",
  "key6": "3bkacCNamq38zWze4fWEZyeeN9c48Fn9CrVSc6kHLZ8PPTkqxP5Q1LxZM8KY4Cj2FKtvyDoAQQHXjWTBSCBDBFj6",
  "key7": "L4vkb4nsq3ynGh9E3kNEibXLNJYxM1rMAWPenHRZyALwW72mEkEnAFo3qQEouTZhwjSzs5igWghqx4huv5YqZYb",
  "key8": "4QT5DfqZwSBPKChZBDE68pv4MadoKPzafiHRJvimhjZCPkEGQn1EnaCJL9wJteHgkzWpFMvTPBXiFvgArj8RkybB",
  "key9": "256bofrBbLw9GDMZAdZrxuEUEi9U2fnwobhd8nw1W4xTsRDeT9dZRefVRNPW8QEFZpAjYYLWSGApuXdyUgJ1m1ee",
  "key10": "3pHb6HLTCemBozWK16nBWBgpg1KTVCXSK4xhh2ZsyoZvtguuLTQiAQCui5MWVs5Jh8Cjc6EhxMAM5SQ74iSaDqL",
  "key11": "4yud3VEqRYq2tQ95hAzERnTKEyr1v7QjGtcaonuzP6jfLSQSqqPXfgwHXGrBrqYyyUQpWpGuXLx9WxZ7dLv22dHv",
  "key12": "5c54gBE88mH4iiRt1cCz3DtapFXK9kCYHqk64pZixWD8NoNhbpwM9FFzuz6odRx7S1nwLsMrfSb1efVNEjzfZ4bc",
  "key13": "281eL6JW6BRdhwdBZQjaEipEEbniMsjTdtJSaE4rujFTaGeenXfpNx9DRUuJwNuMSXtg2J7UUBREYp5B9HTvunJw",
  "key14": "2yuySo6NyZ8L2CFaLRvorgZ7PM2yZuzUqw2gntoRDkoUGXrwQMBEuJXMqGQKj31DKw2Qs2VWh2vCiRE1c2SMhAM4",
  "key15": "5Lnvi2ZWxbGrWWN16hJ43HgNyQUtDgbv7aNLU8WS5A4iToJjAcfdT7NyrivKvNRyG1ZhqZJzqrvU9seyMFnYfYJW",
  "key16": "F7X5dH5mcpdqEnrzTPjbj9eKzagdieBD7Fq3SRz3HgHTuR73ADwLEYkhiRMmLcLvk5JwrpD2BMWppkoA14L8o5Z",
  "key17": "24SXsgBAvqtvxAqui75z1jEXZYTtAaSuk74Q3TuffAGdKMvAe8MzxweGapyP55GeUAwjGokmcD1DX9eSHWbmFKaf",
  "key18": "3j8JUJHAgGm4eiBTpYZ5a2hnXVdS8GaXViYLpE8VqhRQiBTzK4hcxbF8PPaES4TZ2H9RMVb6JTTXiNZ58rxRfMcD",
  "key19": "roX4i1XZRybob3y1HB6Sa9p1eDdHDt89kFHS6yWHsJVUuhFgPjnL9CLU2cQq7dZSZbTGanE3KVnNb1KTJiEhV2E",
  "key20": "3xRtmoiemhTYLZMoaCSvdDshVvVkA8SdVDPF21DkfiP1MePqQZCoVsGyhj2o3QKpoWGe4cgcmSUbpe42fPMVrTLV",
  "key21": "4U7EvcKEjTqUsmW9PacntTrYRQonS1PVtLriP3BAmq5LqMRwE3v2U9Cgh4QA4cPE4oNah7HB7qNBHio5YqV1irsu",
  "key22": "5C9qHvHdtCBFKbd4BmJw1P9eLGiBGmXcuNeMa6ws3CXV6rpA25vA4Nre1hMkEUWRnp39rMWjBTp2BhCeX7phptEX",
  "key23": "2iuA72zZFoqKkTbYqagwdKX8FiisTPwq3okt6Lajo6t9bPG7PeQBUc5NNXqgX1mqZ3wRywSxUaFVfZ7J855g71Zz",
  "key24": "3XMXCruvMtq4iSvcU2ixW4hYbWCs2yPtF4HdsPefXPoP6vxiJzkm5p2ErDUN1ixMN3mB74ehYKYVCTdmJNeSiTYh",
  "key25": "4FUentXQsmee82dHzoBkj2bnQpMWVHcSrFHkqZeBSRH1jMeaRHTcAsFRwLN8t85n13ZfBewvGnCwsjoWJBMqmn6L",
  "key26": "3kkYdVzhLcWEVxNzfM7Qjz23A2GgRzazjNWY5BcN6YrJyvFoz8YP2dqdKaq2FBJnmiHkPzRgaVtMXwPbmhtySCoh",
  "key27": "7NoLW9aWuEx12nLZfKtniZddv1n6GiK1vqx7zPtZoqHMStmyQACZQt5AWZUaRtvzrdRMXY56qzZKZwHzweU7S31",
  "key28": "38JMhmoA1NxsgPzQniXMpqiasjPXNJS6b5ZqvrXFK2LD4mqRkF6xg3aC3fmAKdiPGRZJCF29SV5bKwXvFvsN417c",
  "key29": "39t6DbTi1yBFf3HXeD2LdzXLnru1gLgARtpx4fYo3w3N21YPQ7guHeHKPMG9GWLrKPn9QA6PwofbPXz2sG1mWRc2",
  "key30": "2p5dxLXbuRNQxSUdgrKk2SGdfsAZ1XN4i4fN29rnS1mU53sVTqmnbXpFShtoNjNKqBTpSPTSGQVpJKcCgu5MFDAD",
  "key31": "39Zi7Xi1ZCTqFZZQQf64gDkkizKomBQ2FDLQnD9QK2GrEC7AqaYM1jHug7mPzeqDeYPpTEGWE8MUcQH1KPgE8Nek",
  "key32": "2kgkrTmMJt6X8UAtymGCxQmAEywML4rBYePMF6h2ifSWFr4b87u2UnPipTEF9XKWZ4572qCYi9Q6CWfnKp2NSLz2",
  "key33": "2MkTFvo9psVn9FbLY8C4SmZoiyhU2jjPJkgbEz4EWmeopGWUR3cJLs7hy9S2GJ1eBTQBzDMpjwF3LgGGx4CRiXq3",
  "key34": "4JqXRou5Hbxq58XkSmSdkdpc6PmNPWzcEhsrxsyFV2zieff2CDynLNhciUc3XR7en7qws6HqS6ZthGWgByDhdaU1"
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
