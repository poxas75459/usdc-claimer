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
    "34Q6hw65zvkwmxsYfsgzaFeqtk3FNiLjGCjnB5D6VZPEcK1Wo6vZhTaWbQG5T6w4x4By2HqWRofKYvJrxT6y9qid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xo8SaeVKmXfA74XYoMueSzrtjYgLrfcqSxWZJMvR269frzRR6Tr3UV12Jqq7B8vBbCr53nzz938JfFub2DwNAh3",
  "key1": "34gmfe1qTiJb76VLj5LGokuPkn6ntxi77WzhHcZf1Bb8V2QZAKvLnYeSmuGBihjoa8ZdfwNS21kNeFbfJxgGoWYc",
  "key2": "3DaMCHCwsGo9G81J1Tiv8K58PPzZbu87HfiEuaDkJWvbXV8jW7TkWM8twTcZCBJjxXupeHLngDewKHtyLmf7uYUf",
  "key3": "3MSCBNMvRaAgKMak1pmiLUrg9PTocHTkv7z1tUHD4jDdjrP8CBQN7DYQs6oVzE5ot5Ec2xy93vEz1Jqr4fvSNcZJ",
  "key4": "sW3TF2UbhoiHXEXoj5ErRbqSUjDsF6kiVYycbtVGqDp99ZvHgyENyKYzB4FnVMDq3p3W3RELoGLcu2AHanWjuaa",
  "key5": "32p6qHCQU5GTFJPS3CyLRXhk6muSdMGYapGWiNrcUVmKBgaqXK5YkuV9JtZPbrN8HMrRVq9J7ifhTwGJ6DPvZPpP",
  "key6": "Ao88qsfjug4chsFBydcvgfsrwyNnESUu3cws9gGviFH5PhEcczx6gA44JpmNU8XEgzdHkoCRVLZT5WE4fETJ8WM",
  "key7": "5G9ff7rZwoWCevhC14MhiHJ1quysKzpM6z2T9oKvyLw2Ek9sKNCXW5XULJTrco8uxvMRFLa31q5Ep3TGMw5XY2iF",
  "key8": "5Fruhy1GbUacVnMcFDab6h9yBWVcPyFYmSauPeHRgmpY9vJ3fDgwBJNM5w8bYoZai7jeehYpz67v1JEbyY7SJRD",
  "key9": "3zkH7jzKS12RhDkCoP1AqUMz8Ja4ZdhKz1HyzSuJrBkEYUHLvAWtVW4PKLRA1bHQeWfbBf6FFj3a7QdvV3G21Cye",
  "key10": "5s4asHNiXwnnf4iyAx5j5pF9YvMZ6k7zSdFfbRYn4MzCWhSoM487igiLZSCMMjVAxgEFEA6R4fkPm8dNGuUCfGwa",
  "key11": "2GJGmmxKWuq46g5TH2vK7ZKJUfLN1RyhwBH9vuetg9sFZ3kngie45pVvMjMyrs5uotv5TUrS7LDEgSFrvVg9vvsR",
  "key12": "3C9qL75F4qo1tz3vHaC6DH3k6vJRG8WSP3GRmJS2aWpQ9juofWsrNS6fsvuBEL23R3P1unvtfJzWnG1aYSGPxuo8",
  "key13": "5NPaaviLrfvTTrpSTSNUostfaQECCqK1bweHYxYYPrVn1oKKQS3bFiMPSFqYHhvfkyS558wRkBAnEb6dGmPb99kL",
  "key14": "62EGygVdgyzt3omMXmZ8indwNBwocn6zUrgPwSjdfa74GHF3B5xvidB6VLRuv5t2JN9arDG13SWh6nUPA7471eYZ",
  "key15": "3N6xYFjoMR1YBae95F3jXoTgt29TdDEvGEhhyjCGBdeawAEigv98Caow8foczNcxdnbWms2QmMegCSaHfGWgPsya",
  "key16": "3nJzFBFTfcPk5S7sDoVtdQZvALKVjvTD13xUKXtk5Xet7D8PssdRChktsgAXxcmXsK6qE8jDwgJWCohpEGmmEcF8",
  "key17": "Vu54b5Yx6nubk9yQevtHocdpsJukCGxzNrdAA2Bf4drY2tinYk4mBLVd9Redvm6g7TbevrvTuj8fiAXrZurpWnJ",
  "key18": "2VWTgBvGeN45j3cUW3TgawDHkjG7UKx5EpSo4CDAD6jSdFFuq8RcoLWvmrYGJWkQJv8AKCGuJb1LLTXoR651m2EC",
  "key19": "soZ5LSuCfeSaFkXFfxmD3qin2eCKXdkQCTT96zkboxhCkEaCRpHVR5DRLpLhpCbRh7tA3TUBztHDhFY137JkY5u",
  "key20": "2dpqoVnapUdV2sUERz9LT5mf82uZrjthW1sTdrCcRW7XVPSsQrga1uHtPH9CWfcXaTeBt3TPYXfShRiZuJBCFhVZ",
  "key21": "4mUvC9Bh9jvV9k2RmevYd3hYMjXxyjGR2iRTxnSMp6zXB29Jj7VJnGbcL2f2C6Ny5wKdFTvD1TvrbFmswhWtfFcb",
  "key22": "2mozP6mpKMoF4FHb7TaXBbxDq5AD7wqvbA5xQucHbeqiw5Rwpkb9QyeuKXipMx2mXCjc4GF6TL9GWXjRAyTnGmAo",
  "key23": "FGox2ECka9gYNpiKkkRsrpziFBzdZwhny9Tg2Yz4i1SQ1X3WVEYaAWVAVKkY8umXSSkUPYfSKoPbKQoNpcTuA9Z",
  "key24": "4JYsZBAfVd5tfVw7FAtjurjTioJM2JXx53BuKaumDL7efTkNnYdjNNyxYnHWCDS6k4Rt32GaPaqTuh4nrdG6Hzyz",
  "key25": "3fMbb6ddGtRoFqtC6qFQUa6KzZdMADSNuDBdrRKtgtNhBy9nZU1wWkwkNu8jbhZnarZw2zhbAwWtswTL4aiMqGKU",
  "key26": "581EeRrFGGkcnFdxEfHRYPTuKXVvufjees82TaESjhkS4Mvf1dodpEYwgNzDUR65vwYR2n2vFPqtRY8H2mjQCC7y",
  "key27": "2xo6jhUZUBYZdJKGmAk49yykNGcPck3gaK6quw6sd3vTyqoggqegrb8z1bvD1jpHLYNyLR9Rstbj2an34PgmkAL7",
  "key28": "2zZVZUutJ7w7DgncSb65fJ5jocybwh3zBHiUASL75aTVxmnDjnCrT9J4CrbojisUG63ZfMqkE1P8YVoJjc92uMfh",
  "key29": "5GRP2FazLBC2sm1UhPd7t64soZZ9xTSQBXFNRfMPRUskpmETqfR7dYkNRrPdU2T37JR9NCswzXQu5ZdRkeeG4EcG",
  "key30": "aUCzL9oNbky8w82Pc6q6fK7LmA7t55gJgyeXiHyHuN76ptLTzHCN9hpTp2UwpKDGtWerpqr7aprbh9Hp1CAGqfF",
  "key31": "42qerK7F8pSe1iNeFUfVDDHLSxJkfcwRNJQ3WTEiP8NXbraoMHYDeuDMStVCkE67JH55fuSY2LKopJ87xpLLJNR5",
  "key32": "4iKzuXpqAQZvQAcMadQjckCFHVWMwTn8Mp5GggNFsHdmyQYQTbTnzqyWmo1prQuj5op6qbcLsz1asYUomLZGZqce",
  "key33": "475Yku9nuhYKu2rNPFjjFErnZKD2s6t2t2jStaqks3eACmmrJAGqk5CRie7wScefkmehfL4NyYnzfn8CHtnH7q3Q",
  "key34": "4adLKxudYJB2tsTaENbaHycoP3YTAeJoJNmLMVQVUvEA7oFiUGoRP4x1KXVEzvdjRrFPmu7AS5xfqL2zNhZJg2gT",
  "key35": "4B2SbL1b7vKdQtdGFdE3yRNB82evHzjmRoPwuGrfW5xba5Wj4j4mnsSKMWbGe5ytbuEkC41w9uUgu9x4A2Cm9sem",
  "key36": "35HVtxH9j49ecuU67DWatrBFMNmT5FKhHv4mco5CJ5xTqVhW9huwrh662hTFfm72Ru7ktgo4P37QcTqUigbuobp3",
  "key37": "2QuBRvgnMN4Em483E1sdiMLgwAHCbg9rzUhyspoetyRuLKA2sp9VSstWqiNYtkx3tcWyrNNY6F6zAhBbMyNeEeHc",
  "key38": "4megSjSCd5iP1u82FuL8ZsT7tVFndKnWLQWPeUyDZJcwig42KmWJg9sy74d4nkmeMrq3fwbJ8ZNG9aMsipy8RG8n",
  "key39": "2scssG7EhmGz6i3FMAgxnnopfcqYaahjGNxk3xb34mGB8ftGjYcQWtaBUAe9i7PJRs7f1uwazT7UFGdHHb3aPjU1",
  "key40": "cAAMckvSB6Hg1iE1YSxwQn4iVGXsiStavkZU94iJh6DB3cDR6FshPh51Pw2o4jnMoWLbkwKoV7ZHa76WWfDiSQz",
  "key41": "P8juEkJk99qfJtamWpZxF4qLU2sq9sN7YVxYEnRwjCLkt9DFKhDzvQkNdVd4zgn1Zzgmdvnh5YiF3fdYVc1PjV1",
  "key42": "2TtAVpvNxNeEyCq1HBy8HcyXtjw7vVpgFkCkZWEFUBS1VScUhFGiGi9SgaAxxkpy49cMMZfWSiwvZ1V92zXpUiB",
  "key43": "2g1wgWQaY3WSMJ6UJRE7qGhhoHqx3hKoSQA6bnaiwdTuoDjWwSqQ8dfLR8UStRKUKdFA6XgAHodZXWS6yh7ujhnu",
  "key44": "5131uZRcwPi1vmmSbEM5EaC5bR6XHUyTe5sHjCYs2jwiZBYWKfuVyi31w2FTaHPbzRP9csTCUpYFsjgW6jfdac88",
  "key45": "3q7nj4T6mao5NGj18cQzNGksouM8TsMtjiv1BXUzBhHRNLTpXr2pSW3xjXsSnyFumauzUJB2jwYrme5GssxNxDCf",
  "key46": "4yiCQTpb8LW6KzjSW9Q3KKdd2DR9eAevHLoizMNnXe895g4pzsrf55Dazpspco3fEWgwLohZCBXqUKp75N4Qvkx6",
  "key47": "yF1thMomSpJ3NoHjj6RYtqHBL7dT74aKpoanUKikExqWx8GCnuj86xhuHmvdxkLupZb9KfLdekYkGXRB9LCcYdp",
  "key48": "458ZWhRduLXj4KWSJu5wqN2ogEYc4UGPDYpdSUHwCTtQvhdnRWMPt7Av5qoDR83DGotDRi1C3UqzuSmj6NkLREb7",
  "key49": "4q6ivW7nhzSF2F5xMmwpEA5jsRR4WiyYTJBwgSyuimcyLMW3ExwcUBqxuaXRks9cWoJvN4kJ3hwp4PpkVtkLmXze"
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
