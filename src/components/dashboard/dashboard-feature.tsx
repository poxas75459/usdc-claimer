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
    "5b7mxiXV2E8qkxEeB7bPTefz8y9QTLnRccjpThtMRE9Air3vmV3M4qdQ49bzJoqj8BTbSzViwAyXVMPuAcquUXDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rV9j2U7LHsGFTBU7hQEGLVxr6Gjh2dSFBdamnL491Mgkx1hnofiD9fTzfWrS2S77UFJRL2dqBMY2iZV2hVDEyP3",
  "key1": "uDFJTWQSAKDrgL6544BcfQzDSf3yfQxTxY1p8gCyD2pzHL16jEeW7jY723hAEMz5VZWKVK3HVaUVVSB2WX8GSq9",
  "key2": "4MoxUKnV8NJgh4hre5T2wHWFpTR2iaMkAFPMmTHLUzeA8MeUEcyTzRSiDvjXMQBieLdk9GYdiqLYsJ8fGyvQLL4z",
  "key3": "ZyLLH2p3u9rh5LEnw8HyaP2dJ2rRBhHQutaX3vC6AaUNYHJp1rDJygHb4sTQNTMTsihX7LcMtm3kVtodbFqWGMr",
  "key4": "nXbCbTyD68HocmetqSJpL9yLvsFKRdfJmjtTWRJpWaZnrQrRcTjSg6EcigA8EyvjhssmGqmzevqhJqdXS9JwyWd",
  "key5": "42fnnimBEtbH1tFabn88HeqCwcrZRabUNsNbYjQK8eHhkG2xwtA8vBUngraof5YigGS7qe2vdEQJjhYQXkYtfzP5",
  "key6": "2PyugnC8kbzYYZ7iMHwcE8umRm1MVpAmUiedqmApjP5uz1pUPxejbgdC9NNtx21smx7WQjAUn6KUV3NrsV6cqWF2",
  "key7": "45B7d3bFsUAgGYcQh8BzDVM3uit9FghSwSxKojoKYHaWr6TDocahiz5NbsGoZMpv1EgZs6a4cehEWF63XJtFaSwB",
  "key8": "xYtYDfryNYpV139WhXAHMgKk7PtMMEorSJiCitNs4LTcNKEiR3pCTfQEkjsNQtdXjr92Hv1YKALALTmNvzxs6VS",
  "key9": "2gKFWLqexbvoCcTZSKAeGi8adhJnkyf1URvZQP7SsFTpfKcxJRyoTb63NBajB5CreBQixpD6XmatCHCGwjRMQB1S",
  "key10": "5Avjumzu4nNPumxXNj9TcY2BBRikUoM79XJAnFeQCyrrsnPNy3rqNGzcx9zCVb3bi5k52AKBJx8ocJB9yJ5jpPsy",
  "key11": "2YkYzoP6S4azygZEvgRL7pSE8jivJhe1jL7P7ruvmhTz6RwuwbFAnazzhfyqzu67qC82n7LNTn3UzVCVd89xpPmY",
  "key12": "5vRgDYJS4S1PoeRkobVmGzF2xh487EgnND8wAx6ru9FMTmQgfUe9Uc8ZococVBxCsjPRuhZchfGNjDnzHq5oSg9d",
  "key13": "5qKafaGdNPYRWh2d73oFsoENWQVfULCeoHEbT8tGs48pijz8HqgiB3nDxkhRnj849QJU7sMS28DKdY4jdtMarhiD",
  "key14": "5bdFgFxdXi6JSKw9qtsniacgCoGHkF2EKEqEBzZD5Kt12qt4JyqhxWYMSrqgCTE746EHCdYmvMDdNmMQDeuCUmbo",
  "key15": "4b6b94kiBRG3L4HnCd21Lt5LGJwPuyrWWCDRZgxnDWqjwP1jE1fQg3Uje6pAXdZwKcE999RYVXDzW28zVu6GsurR",
  "key16": "2TrUDBAzx7stMVmTt3QS5EM6jXTkjiGLaHxZUVSAd83H5WpScFuKWi9cExWW952Dq2mbCqmddPik6LN7hfF3ZAge",
  "key17": "65xFcS8FPqUA98fJdnmMDfnU35bE2orExskruyL2PKhVSCZfCVaZGnVuXGCS6J2zMdUjAmoUVRw5cqRGXvQcGyhR",
  "key18": "5TJEz9sas5SfLDijj6uB8n6CiywAMA61ziXZubit3NueogrWr9FKkM5PTcRmoESwnccQJxc8sffaqVZMRTuajnrq",
  "key19": "sqhQeCxdBAWPrQ1hQ1QcwXCyQYv1DTV3v87R6Jc9ieu12psx7Y3Z7JZco7YihugnswqFyuoSb8LeX3y9WcptDyo",
  "key20": "4jKRRmBP8TKcQLzEzwUs1rTaf2vkrL5Y6DNEc8HhfWGHGB6Spnx7AGviadBB8WFTPbrvRdj7i5qcA6q8VKrRX9zY",
  "key21": "21TzW4Q3dbvYp9TwKke63XQBJY7jXVWugaJAxui3pGfM1LPnYJSkQiaCXLEhBT7vqF56pKYoyxKkN7aSnaPftQ4V",
  "key22": "59tz2vVH73BDHhGfVBHX6JfSJbNQ2ywzySzfc4xdGSHqGQVcqLqiEsSjU94XFLFnD6JeCMJUZ4nJej7itMFFcooZ",
  "key23": "3opk1jKsvPGmdfA778mHAtnRuViCZET23vyWn7pfJh43oh1vznzWs5yA2qbS3tBoRFFVYjFUtzF6XVHAMyXS6DEX",
  "key24": "5tPcw3qqtEWWb8ZHm9ziKRQcANNARE9WqRyS5Qey8SZGLmswHmd7ixr73hR43zLXExkctHoBxZLzgf7hfu8zyJKn",
  "key25": "eB9T211BGVftyM4mWMijxDewVLCRG8gLGJgZYm2c312wv3UGhyRfg7wacu5nMiJHnJPkNBw2NPrjj4g7QP3oDL5",
  "key26": "3ejhZjJ9Khvu2i4hd7hfJJ2ZxxTJ2XuvWkXKEzmAJcydqiaZ1znEFW9HbN57ohjVV4dHBwPLG55gzm84Rtn1yYBJ",
  "key27": "4DfWgGUM7BKbkqX4jSbYzUiX6Qfka3iiUFwodUFP2e5Gzx6FARt4bs6j3edQcHbGDzMekqxtKrEMAB4rzncNvkEn",
  "key28": "1r1LzrWycHnzVEjqY9bP8DGJt4QD3zE6hvRpLWSwTyDV65A2GkDNQrLKxfRThw8DeE7XLHDLTf628ggByKEgQVc",
  "key29": "PHY5UHi1UTEtfcr14CMVguXYBi9EgWJw8ATNFv6yhXMPWJspCcrnB6ow49GxANvehue3zAtJVUT731YhQQM3c2y",
  "key30": "3DV7XaGGZ6fJvtw2VBCnmFp7JiC5LGwMixDR87H8XYzbEG9BXngfKTMnfESQY3TR22AS4dwCisiYH8QmcXs2GdyA",
  "key31": "3ps1QvyHPfW6sBVg1nyLwmZnVmcyvmLxU3oXCHeygYNVRwPADfoKwydeBifcrxLGyE1e1gk9b2SQiyivtpzPVQc1",
  "key32": "55BV787Sendwo3R93t2vyYMcsoSJ9N6EzCp3AkGPj43fyqB1e6qFcuuMVYHHioh1Nt4u4Bi8cAdjpjS7oQ6ehtp8",
  "key33": "4NLKeHhVMBcHqz7HxFe3PF7fWBVPuSfTAa7MMBiWZxt2cT6Uqd1wD8jeMGTxJM8MBG4Hp2m6QvdG2gpAc745AiaV",
  "key34": "JESBpu3rn1pE2XDWWa4D2xPmFhgw2cUWmhBopvsDQra3kBV9DvjWN6onNomEPmzKNpsFKjqx3SphFLXZn7T8Aop",
  "key35": "2qDBWZ6CYg1DAZ71W3KaLgkquhg4cTdsBTD94Q5eTmACbNJvW2GqcEBgsp5h11EEibGFee5ERu14CGTPLY4yEXek",
  "key36": "2iAZmRZqSK7hRmMM97phpxfV9QHKRUdgAfMQoGRu2hDJG7XtqpKKjuf3ppacJnPP9BuKnoWqRaiF6eeyRyvqizia"
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
