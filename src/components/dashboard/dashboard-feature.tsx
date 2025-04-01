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
    "5PJwASEfMcgVvBs5q4ooJzK1owm3J82QYne1fJLW6LLgHsTsnxE2UFtNPseQDnvzVwLrcNiSrX3kcsdbyH3KC7gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhHTUYxVkQUY97Cx3CFieRXKG88tWbL1yTqtXt78fSUirVeTR2LFv8CzsTxBLmsxLL7oh22TejgeXuiV7M5XT5Z",
  "key1": "4RPQ5auLp5SaA42KnqotendCW8wvY9STC9piPZF9MCPpw8TLT2bAYYaUdwoHLSnw56Epip5dbGv5QDKJLTWkdazu",
  "key2": "2twr8ouUi3GwR7PCRVNNzUZ2GKVC2cjNcEzi3o2rdE7jSk2pTGXXnufeRpsT4DBGgXAAeJrNyyAcitC9hsA2y8Z1",
  "key3": "4XWFMvX51ah93Z5PtoKNd2oXmF7dJfoUXV8nMUSpgHVPqNgWLtijnnGLUT1zpG9FLnNWrN9zo7JdbWhMB7Rc6RVN",
  "key4": "HikspmbSQBfA7tW82vUS5H7zERG7GLNVoQoceNExRmQHmxFiPFPyRZnzWURpU2XEHau6T4dEnbd45zdbuQYMpRL",
  "key5": "2rvgDWo1a7c6tGMB9HCoUkPn4Rbe5mKVkfrqYJHnATbkpyzZBMJzcmuFkmGCrNAkXotp7y7tWKZQnhrX2kRYKgS1",
  "key6": "4GAVKWZUXLHF53DqXKA2g7ipiknPrV8TAwEiZtnLWiDdKznzG4EQ5NwivJpXYQ7hdzfXYHzryAUs5359VzpdGpxo",
  "key7": "M6XwfxTVEcrLtQjfp6FcfMcxbUSV3gVSPyesMaq8eTUXPAVVrdeByu7Gvz2NP2mLMqeJWUGhLtXNbnXQMWqqWyA",
  "key8": "4XoX434tJzxCb75TQG4TZXXLwAWRGmaR9SG2KV3FwovTpYgYuWLthHC2gHtMYyFT3FCB4DY5PDCofgoRR6QEJR4C",
  "key9": "4G97schBLoAJe5N26G2mxLF3QFm6Zyy87YHmHazgB3odeoXkikqgugspNjUZda39yddTb2nV82NHhk6ihT65TNR7",
  "key10": "2x1ZAPYrBNahMQtvvBdGTDz4EcXtmEBCJuNeyyxzZLfzsRqqb4CSsf3p9TZrR6wRBMRsyTLLy2tWbxN797JjC26K",
  "key11": "5yYQ981kCxmvh12hqC2hJYC3LytFTPmABB8Stbp5ez6fVWGFuxAihDREWU7jjPYviWhGfNjLCMfpck3qxjjzpVSp",
  "key12": "Pi7jzy1bZnaQbcBwNfW5HcyJeD5Gt16pnc9vqXqmbTxPiSEEguqHMa7nWrR5rnwAri537xs4ES4LVSTtA1iGPfW",
  "key13": "dtfwpVpZ2YX3JRetG7ToosNwWoMbDkdS5EaRf5e1VT1XdEF1j1QAEPov3ChiiFo3jZVRxHyYrrt813YpXAeNK9y",
  "key14": "54U2onPPsBDDDojZSU5A36addrDdubiLW568stTn1Jyu1PdMfPa5WtoXV1BXa2Tz1JTBYfqTXqyARfYTkGATya8A",
  "key15": "66HEh1P6AYERKpRdhBymTtB5wzgEtwY9kAZ5Rb5nMHLRceoK4fQLinXepUAv2XoMHQb7MjPHoXoCZQzAhnMpmFTd",
  "key16": "2fqyVRbPHUVcr9zMBL75jYKxZEPUiobvzY3KzyxaTU3JZF7dYsFce76FQREi4uoGv78fvDac1ehgv211KTQb286m",
  "key17": "5JJMCGC4AQYjhwESH9FHaZ55JC5BTjy7UqMMdom11Pm8uZSnyJo7JXn6JTn7eEDd1gf7voLeatwYeaQsG1AMPks1",
  "key18": "Jvg3YKRnYe48qE1czQxoSK6Utnsiq7zRXU3AYT3iNb4SazbnLCSrCdhks7WDxSfdowEcSwN2RfHkEtjYu3uodCt",
  "key19": "5g9fdTjETzFzJ9evvnGkx95vUzyzM9fCMuKxcWVwV9KjqrQUH9JTJgA8XhBmYrSTaCEFiwpgXoHjgbMVtXrN5hb5",
  "key20": "47eurL3gKYHpwfcM4wiJmbyWchKjpKhU2X9VfQ9M7ZrQ7ySEmMGSybcg6hcCfrejv3DFNLGiHcaj2q38VhCsC7Vr",
  "key21": "55x8P5N7bdqgaYp4B6KPp9Yk2GcM27gAGW8Tcpp81ySED6mraKgMU2RzmKRoeNfiscjeuLxKPXbFpgVhmq4W6umx",
  "key22": "3M5Taw52LjWxp9Vzz984vRHq4ZocUkagBrEvXF5aStAw35gPL4NxhU9iCA1SWAUUVxCcgsvcSET7LQ8Tt28oAyX2",
  "key23": "2w6ohMaKDqRVunHopw9PYtPWdCEgbEAM3PmvEQ8etYSMiSNFPoSzBRXmDZC7mgTbvZJPunQF5zfiMQ3yEX46LVb1",
  "key24": "67JBvQEAVwBVvnN9WRSYmZQHtTee8Dct5b6TpSgfLnMva6PsWJFdY1Sb1uh3MGpTTUeEgK3ZYb2ACsPRBcsBmaDv",
  "key25": "jTarFcvBvLT7w9P1ox1XGqSDtCdc5JTGfKboUsuXNKpvp3CL2cyXug1bJb7mXw4rDGqMduVxb7Xh3KZtrQek5rH",
  "key26": "5vd5tsrYWCcT9ufqDB1ppKVUNcry1ZPcb7GbCPWg65rxQ5RSvrXG4Y92GTM8zVu3DFoinq9TyTQa3SydWZmSSAnq",
  "key27": "2M39cerCjgiRejvwGndCS78D9kLqGwSQ7nrmRJdF3nYijSQFPRbs6VhKR6bcv3mQHbP9T8mB6md48BPeFjHT1MD1",
  "key28": "261mTfsxqn56yB5p45VJLPbvrXfdLC8KRUSsyvszDtr7T3B6NvAxjS9Mp1CaRyejTWbjHWMD9ndmBKUsTbAVZmNC",
  "key29": "54QMAmn3gMGGyfKMCnjnhBwPZZ1JqP43L58X7r3EE82HFzDCgXVMJeE7P1DQp5Yw3pFgqXbp1R8vMq2Tp6CVJtwe",
  "key30": "3qHZbz6U74YwWy5rhWaio8jLdx3845NamiohfDc6MyoMMy78Ynh6SJaiYhaPqYfH6a6LnUiXaBQJoLnbMVQGkv2e",
  "key31": "2pNdzeVDw5AgzetFikyTe8put1m91Rqr6d3muUoDWmMCBTo9Nf9R4aZuKrJzWrfQbM6PaPG62XSy7aHSXsjQD68r",
  "key32": "CuorkJ7D7pzSPXDfA8JZhVRannQLpuu1m9ic7ycMTWK52mNCX8HjpC65tbvdS1jVbVs7tfoS4EJ4DSPjr1MnDyG",
  "key33": "4CQehpEYGCk4Sa8tpYe6Fwxiz8X51oJDJngnaYimTCkmTztMqV4H5zrppjqXANEBJTvKh1JV87ur8Fb8CnWAsprk",
  "key34": "5CZoEi7C49E1saHS9Y29CYviKi5adRefKJgri9m4wZzokrPotGofDJq81xQSGfkVVUBBDtGFieTZdx1xX2apPTGP",
  "key35": "2CvasK2z4vCvTUgkqtovnKESwgmWxkgrWzrJSsCoYFXsChSh1un5jXbYvFa96H1tFbqTG9EYTKcm79gQLjBd812i"
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
