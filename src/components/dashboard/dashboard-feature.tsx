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
    "3DBjum1TSepWrUhJH7SEPhpzcPWWmZwPZdBXLuJtFm4WND2dvNSjYknYDFa8dT3dQ2qRjvA77du4RkKbRoL45Eos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eYNkGYzCQ9turd1tQCMLNMcfFsMikkViaA8x14iuduWyHnpndyUGNRYtQMxtzQdZrXggCc1v5nME9jU8vBexMW",
  "key1": "5iQ9NawELnjoqVmj6ksexCeDBfKVSxCeRFgX1Pn1ZPP2acvoqjCPXMMrSoUsprXJSLe1ZDX7WGRpai6a5KWNBncY",
  "key2": "FUtnEmfs7BWDF4fM5zyoakHzTRu4GdUZ6w4UMGVuD6Rz7ofQHBSunqAQX75owoZqYkbe1uAmqq9NKzsbaCQJavx",
  "key3": "22RPckLDMReEEMxS1zTxFcLDWSj6dcupwQTPLPmye7opErWonqKBu1JS83Kj8uNU2me3QB8Ee4REzVDVBuR4PMW8",
  "key4": "44NUFkNFZuuyhCZJdiFU9E63AFyGsUmr6aeBDEAContzZT8fRua43jUoJF3EF6nKDh3BePd2GHtSMRD1cYbVGmVa",
  "key5": "2jFMrR1XoehBNM9sXKn89QDr8DR754Kq5AqrRyogRCsMRhATP8o9jv8tw9BXdJEt91z4oaQnjSXkebFPeVgu8ar7",
  "key6": "ACiTYmPFVNNdenb4Sqvi3cuEWxWwXJDoL4VxZ88wKKr4oafMLga5BcRkG72nmcWcivaLjn9DuyXDHQxYkMcH1yq",
  "key7": "3q9yemfCcYo1LJgaoVnYonWafJLac5r3M5rhAtU9VxgRFRaCZ7Y3Xz7H6ChbPGoak23Q21a1HwZRMjZGbLREsRRX",
  "key8": "g12ssup9AyZyKApfaVc91C1wertBr4TKZiJABVbis4EjVA1WJQPVDhbMzDeYmdSfJc2YCJMuZZPoHWEi3VoWohN",
  "key9": "5ZMhwaYHuuwxXi4jU2k1UvWhCF2V6UfSyENtarUNfWWyy8RCQwLnGmXCWEoKtSYaZJ8QDJx9H2U9Dk8GZUsNFZo7",
  "key10": "3nQkG3t6fA9LUaxj1XBnjrqQefrVFmr1CovYA4pev3foREuT3ygN19dmD4MBZ5VJxkSzV1vy8xh3LSEW4ryPTCCs",
  "key11": "UBH9p1q8WBg3wHrcGp57M8dGmdf2SuQ2Ptf7gXTigxs9mq7FuAyUDsavtXHPV2HkcwXf652T9zfQUoU35Y6ng6L",
  "key12": "cC1ikxWnDnwmU1vLZ9FG1QGEC9kQENoakoN8B2hKWPXRgQWkCjx4tN1u24rCKJcMMynYnntf4bkJGGrZhDk6YxE",
  "key13": "5v4qxN5dPmHdMvVuD9riFbM4vhFm4ZoaM9JEwyAnDSYwN9uK5BQKq1GG7fnizwu5ppWnAcEJzE4m3jaGMoekf2Zp",
  "key14": "48JMqYiQPZW8NRoQjCRTmWquwWxP518qaZY3nUb6HwsAYhAt3bjymMpqdCDChdt2FwXchvvMZUhJa8mJjsJLUSkW",
  "key15": "3Ph8tmBbNSRACNmNUar7JrpWoQtB7Bc9NdFwUWRTKroN1YabqJvZQyha1Zazpdarw6vrz7kj6g6YRMhUx9dwfhWa",
  "key16": "ypvzpGbik15KbLtHAektkiFUf6i8wkrDjDY2vF6qQKTt8PXAcThEAXF7YBHQKUyzCSUkfxL2RMjhSbNdvca5Uah",
  "key17": "2DPfK8d4CHx2axdQNsR4srEYRi127EiXdXjMkEMCSYEgibuqBticZs2nRrHFSAjc3bbAurFAxuggxj1G6otBLYRa",
  "key18": "1KSZpM2wQxmPRy8Sq9XY7uhRmtT2aYBHvmxytVxbBUUG4b7Yop8vBxZQ44JgwSUkDsRyqAhqX4wEC5iwC1zupUY",
  "key19": "Diu5JZ4aMrM5CVS3e98gi1zSq6etLZQ61GdidrF2w1gdjqXaZGstLSkbtp4LQZrkBZNT7y9bwBWnkB7BfPqcBgP",
  "key20": "2s6YKbvDQ4gNumy7M5z6hamv1XzKqNRZdYznC1zYib471zmwgEkpkBo3mMZJgAhduF9ULDj66S2FQFLofbqs2bcJ",
  "key21": "5Y2ozsi7Wek3dHonYpmaMvkcy6trenwxzpQ53J4RsHS5dX7ASJg2T5mRhicexmc7PPXmNgUKnmdhqJJh4UAMfxpf",
  "key22": "4gjTafLPRkP5stY5km7Kvch2iAkfjM9R17oF3T7bWqkpy7sD2Tyuf44Tbb37oqKwdNL51pNtWEnYyjnjZ62KdGaW",
  "key23": "5dz5iGUuzAzvRqUCe7gjG67yrR1dcboMDVMejjGESbPmj7v7WLdn7VuACTpqtxcy85sMFVUeBMSfwFqJG4Mudco5",
  "key24": "5XGCdshMxGiQboVDMXnxMHk5zP3iakPwVhZURBeAAkTx1ZceB1VFhKUChy6h8dY2k12zTA1f6111CEmTEs3GWQfm",
  "key25": "2Ho1vsPDXDzPSMCCMuSJXyrPJTnri35TfB1W2v6DN2NinduHFrUqJi1ZDEDUFzNnkUZxq2fjka369c4ieMD4K4n2",
  "key26": "4No1fi2s7ziWJspcPRk3KYaWh7Qkr7bTnRUChfKAyTbj1NVAWLfnUzSVqZQXxZn1KWMjyX8SFRUa1PUh37h1kd7f",
  "key27": "3bCwWkk28yc7p1C2HFyBnAkceYy7ryeEMzAUaoFBZhJCboWULiYP2pFVHw515sRUx3sTE6Za6Ve4N92ThaN4yHJq",
  "key28": "4o3NdyAfAKXGUZHnKyt9RE9KyPzMDEzvY2bnZq1ErAL9SfjQAnj9qZSjCEQUKZRkTUwpt2SUXEC2g8HnzTq6w6Ry",
  "key29": "3419j2ybzouyo483TnMhzZMbVJDJbbujHqKeLeG2iuS8hotZDxTvZQXyR8aTM3NiYGmdgDd33ekp2d8TEwk17n31",
  "key30": "4TVuE4gNoWrPNEZ5QTbjTD6BYaBhNeJSxenPmvapbbUQzxRAFwr6ZZfwK8ipnDWwTExgoB8eo9m7VG5sAQP3t3Ey",
  "key31": "5hojRwavgLJxjaTQ4BPGk13RJUsqVn2QeXeNvoVfFQfCMCrVepCZjU385pSB61m5NKSSkcrNEKtkKSbtgUUHo6bD",
  "key32": "mXpEHppuGt15eWQRvhqh3aTiAA29h4KTA5vyCuiTpNRSC3HitSM1evnFk3tm8SQVKf4BtYurmGfRTej5WUGj255",
  "key33": "3MsvyFXWoDU4mya4PgGv8Uj9UsoDF42AvG6u1HFRaz6NywUrFyQ8habgKwYDueM2vxURBn1bwA5kHwf97QAnkqJx",
  "key34": "jzA36jJjEUeMs7KttPYQTyKfxzDEF3XTTN2FciDGf18DZeTfmy8xfD3rjuy43GM7JhttTDPrcde21FwnKFDxXqf",
  "key35": "2EuamyWu13JDJfWwjRvpoHDbPEHFfPFqBaXB1P97KuT6AeVBZ9RB1cMq68Xd1tEjdv1XJmpTbjCF2Kw9WeBDGKDh"
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
