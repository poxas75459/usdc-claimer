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
    "46ocssTdGgtsAeZQzjwRMTgvj2sLAk1zBNrDvRib3n9ean6zJGzZX7PBs9q1j6whjUXKVLwhKjMxiLQjHDWZoM79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54v1W5P9ADQzdTRgrnL5jdZnhe6FvLmnbkY267ReNUQVW1x4WHELUn54QhSjZVEjWGZT4ww5Gz4UrHqzuZLGixH8",
  "key1": "3iUjJsGL4go3knzCSYV34G5JRxn352WyzSYM7ddHYiHgUYGGqv8EAhhh8rUhxg17JZLsVqQwQDpTQjV4xoKxB8S3",
  "key2": "3MnmVJCPAD6N2Gh7kXuHuwi7N4DV7cCkYQe9kPUxqmdMvpVb7HSx9LXYiMFBXhPxRpqJcJk7uxWk3jqd8iAxYgdF",
  "key3": "56sEjBphquiCWmnsMRu3dJQJnGv9Bq51KJGc52AHTUYr9V29ANymkF37owh4pNCjK2Pp8KQ68oidfyG3aXAg1kt3",
  "key4": "5Bdaukoqmw6X8TkYjzGEwDLfpk4WXW6uwRaiFTjKgKo17rdCWG1ZaZke6TkxnmDaH42WAWjcXJnJuJzeWvdGTtWC",
  "key5": "5dUNCnhtFQkymhMsxRuCQ4XfVobdTuLVzKeucsSV33WuDTqJapegHcxVHo1bkfgeRdKnWnPKFZE4HsWmiKNjMPns",
  "key6": "2moTs1wEBKF8VSqZVjtockaCMUT9jhzkwmLurh3JCXrVkjRSGviGuswSb1CvYVoRwoXFsuukw96Y4kb8qaVsLzdA",
  "key7": "4Eg7BhcY8ZHaGDzzNNQoG7FwxtkUVkq21NUZatw5LSfHqKqEMcdK6G8eLAiyJboduDza1HkyzKweqZ1KVwXyPGt",
  "key8": "QJSPbGGXxTt3Qgkh5zzfwEZRQvZGxr9RPbA3kne1ENjMGHyiwXjufqiu9DfuEe1k5EpKurzjfbf1i49sAQuHrN8",
  "key9": "3opMugdogKTuH5KVa9q1ZZLcx1JrVFrGmdTxqmU8ADSzdgy1CPbxKcxQsJ1t4gXEoUgrhinPK2AWCjXXiqCofZ8p",
  "key10": "md4jsb4m54u8srzMmdpqWcXk7SYqFYqFiuaumbijzsFbscp2ftsBac71FANK7nJnQn2uH4hscWJZQeZveoUZqo9",
  "key11": "3D29Gct4iFZegdZ425JHwumyNvEToYSNsCYHb3qA17c53kcRV65ToDxMeXn3Xfs4CkTRsF5pwfQM7RMrup2UD8X1",
  "key12": "43wLZrREKCKB2M7tA6uy9u7NaGMGPsgtG1bNzv4tKnfNWRyxjHcAoqJuq2CgiDFyvPK1L1hGa3GYCyuCUM8mR9YP",
  "key13": "5ga6qd5pt8rbXJK48cbm3RPDXu1ELRMJp7mw3agqHrPfU5j1FfuDM9gzp1A7uDaaNNN688hSPCZtHPi4tcqaaPws",
  "key14": "126aKak4NPwui4w2WggogkzW843KsZJJ8T1ozHFLpZHxGo7MyHm6XQQX3A1S571TfRZweFqLdy559yRmLckkZKnp",
  "key15": "25or8gfks6aEGpZTHK47Hw6dJyg6VCeDu2ELgVgULfg5idLLheZXH3At3RTVfzshRj8VMsRBgxWuNUauSeoWuFNk",
  "key16": "4vWRF5h3jaCTUCLSg3F5HVcEzJ7ACVRCuWnH2aMJaR4UUTT9nRawgBJbUY9uGXr89StTKgDcPceFEs9j41Fm2trS",
  "key17": "2pTJqF1rDB1BkmDK3EnJwtnTqTBwwqEFgJv8QgXPFTd3uGmUcYM5ABkxQgkHZmHfBTRENUYYx5qq8TdKXTR7nYTS",
  "key18": "29ocyfZoJ5P7Vem6RTAWGvNwVLQsMpT4yDmci8yAYw4mqViPRqyjec4oZgzVYe1CZS1TL1Kniw7XMJW6LQJ2dsLX",
  "key19": "4XdfNbqzs3G58wxkMwV6AH1LhbQBCCkmVnB2S4NEvWHu4zWE9wF2MuqZvvBehBCeX1EtjtiRoT5KZaQ7nFDWRRD6",
  "key20": "5nwvSz8DLbLgTkTvh6MVDMubqpZUdWWVKE5XnjZhvkyM1xM2dqtXxDvFHW3JioyyjAeootEW3QgvBApSoy4pU5FH",
  "key21": "ucmtoPT9TTdAZfPuvw6s51CUXEHQxYNZPJkC9SEnXB7fzS37YMYDF1b9aEGdjztp59pP3r9nkUVXcbxjqzDYJRZ",
  "key22": "5yUTAFokVuqSwyJZdUBwynittrxw8e2PPZWvtNECJ2tAQpNML6Ngf2qDP4Ec9qqe4cauB8TouZjMEyVagcViVW29",
  "key23": "2afv1HYjbbPrLAn88QFEn9eTZQEaZYbjDn6yzdELnLWZrtTfnKFUsTAFfSo93V3TgvvFZBySjyvHpHCEup9PPb3Y",
  "key24": "4JZ7kndRzaynmiktnQnG3AKuZY1mKACWyhGY621Crxz2VvTard3cVisDg2BswnrYF5pavFLHFSsT38yMVPmpTRTp",
  "key25": "2NEkYKhucQePmR4tXfhQcu1XjPbAmWb4boevxMdLJt3qVg77UsCpuQn2jgYGig5VV2TcStRotfDZerB1GbD2Z8UH",
  "key26": "2k4MmaDyKJcfx7oS1GGsEsXETzz2kfnnGmxgGAxBc2zzBrvfq4aiSUforZ3f6epvmoik3yafaC7Ck8Qt7HX86vXZ",
  "key27": "3zDRy9AwQc2R1H3Zmqs7zFscheBUYPrb7CaY5mvHtfqLHsrpbL92EvuDvwqvodgSzH9s32qk86EJQVkUpoTmzxtg",
  "key28": "21kdC6Jp2BVCRToHPVDE3PXs9tdmNAs14bxreUDPUacpTZvf3CUYfA34KVjdsa6CVwkU3ZWFNgDRHmAsE3UFdiDN",
  "key29": "39k1JpoUXXjwQGBcTMz8deH4xVgAwxaWLmYdFYZgRrcJdtE2cnZkvv5mqgcC7JQwqmGoGNkZPNLy8USjT1cAYjJd",
  "key30": "5rLygsdaE75HNUeXnwCujf54TnBpBhW5NwAFxXBVN9KvLie3ukRreao5CNcPPtQHXCBGJH9ppeiJEhwC1xxqX5Vv",
  "key31": "5RdjJbrgG13humJFtzk5K7fi4eiBPKrU32YJS7yWs8xdfTSjx17MKvyWhfT3LXEr4Hn6gKvfza5EpSreNJ6KsaC7",
  "key32": "4sSitniftcg45q8WdrU2CUxKsY1Z4jQy6v7T4PNv1ZiEdAwTmWmXkYy1H1EjDiMdeH6NhFMe83Z1UZThvXpBNusg"
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
