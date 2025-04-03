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
    "2Xbv1ZvtPD6TaMtw1gRAY1D5P8KE11sDvKPbUZQ3aCD9PhA4nQVcwU8BQNLyCemuC9VsxDKgkknA9MXaoyMPqmG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8Kv9pQKwpX82Wy597rjigsVpgAzDA6BAVMB7AmcKDUCrBrmUEkidHqUDFnhgrLit1P6ZVE9TgrBknFB4118ycB",
  "key1": "3MqYcFdiVMQ8qNx2Gfk64nvp1VNAjHwWMfBjTo8A8dNqJYUCFMU4jRx7tcp5pojEH1BY8yPpkdMxz9vBR7h7mhgR",
  "key2": "5nY3KKcrfogTZWSRzZpR1C9gKBU2XX7sqX86Etuwbvw4vBFKPgSc7P98hwjHtdQ2k5MPCpToegFFbkHQ1sN21r37",
  "key3": "2HSZ77bTVFkcMVyncrpuXFzVAxRBVooRRAjgNuFG7MQX1uybvJ3Pomh2LszZwRrcHyTZWoS4wNQcPn6C8snzQ7c4",
  "key4": "5zb8Eegs9BrvKq6MhpbPz42nCjRgxx8mEotCTcMJz5GgpNfbszkhChd2ZsCy65ToT9BFSrVKWjTHnwoXMgBcRzzt",
  "key5": "4PHpnvkjVMmefN2U78dwH5m2NykPrmpB7gMqDTC9yUTVkGUzz5Vy79M2Np6MQEGJC31Eurk4TmDZ38QRQqNwsN7R",
  "key6": "58npTWsjNjroKqyxAv2M8NfMqpaEvyJyKsu1RiBDUZ9njwkbUjUqLDAob8hJgiuSA8syo9Ghp8JNfXA241ma4ExY",
  "key7": "2uud6piboVdr35Tspx7cnpr45dtiGTP3gow34B2Gi8iFbLzwc9BdvKqj4yd5vtxUyNiwPFWLLe6XB68pMkxHqQpr",
  "key8": "51Za6U6gZNC5VK5CLUNf4pAaqLVepiKJek3Buz66GeNBtrmU8n5otKhNrU9WyuJiyBX3R4f1Z5VXv8eri17jFBbS",
  "key9": "EoyQcGVHy9mwRqGWUgKb2TeRnXqnSzM9nDqmH4uX6MyjYfhTdQP1DiPgjYGQPRykyN3mK8Ug7F4Q4XdLdgZK7o9",
  "key10": "YhPNbTHVVhfUa5fTUPsXADUHT9NmAF4PpYVTQ45AnWLynfi6mGScU4RLA4BRPYp5ADF1Vac6MxpkWxaXrtDfQhK",
  "key11": "3H5myT7RDaSjsWdYMceJE5wBFeAhgtSJNBX6fxJdDaLvRmrp3W5qSFQJterv16hGiegmvibfu3pDeGZU7AJoy74L",
  "key12": "2oU7KcaMH82vvGS2ptci7qASDQx8crfveWQZ4qxcEAWgC6J2tgDdqvqJSXDrUmsbF3Bd6ZdoWBagSZBiXacxw2TM",
  "key13": "5rFpjaoD8moW2hrQYRYqyuQzYgt1tYpfLJCZ4CEiBxHDUehs4QhzFHRB6d6jZDby8zwrG9fDsXQiHdN5tDE3Fn4",
  "key14": "2L47YKnmHSDavzrBEVbSWxzbbG3Lw3ktnR6gXccBEU4UTEyptkDUMm8F6i8EgozVuZUEWpJWWM2QJqKq3qVncGCa",
  "key15": "66metYPgUeebpWwaGxn6jvWDrMfPvn59Bqa1rmK2WjD6uNvzeRvTira14WbQBnuc4xyij1mQkGKEfJHdY24uNfjV",
  "key16": "5fQhGEeKnsG1esdaRKK98LGti5TjjeTrC5rMwVkXFnEQrBouH1KL1SsK4KkTb68AxsBjtuMe1oY2mnTieYLAzFRB",
  "key17": "3CG1z6AygtLcArhKVe9Bm5ewn3eNPMDpMW5GLcp9VEBFH9zACfZjLxvMkanYAMksZw4GKSyNZNtDHUeZbp7FEsL6",
  "key18": "2Gm7SpqhNftn8WqRJ9bPS4KWwpoSB3vWLfRcX4Dj2mtCLMzV7csW3LHfawvvbv5qeZSU73BdBAt8NmNXnV5wxWtc",
  "key19": "3Y3eBuoQuZwSys5a6qANqknLfrt21RwThTLSnHwj1zkjpAp6XR48PjAoPgbKnmf6wsmHYUByptzzEDpNozTNZeYg",
  "key20": "4vbKVPkZEYWqNnyRedCFbyj9UzQtLtwzXmHX5arbVD1QS9eL5HRiJEZ8SbH6BTu8F6dUqhyr2Hf33ntqdHwHt2Cm",
  "key21": "38s8bSXToQGXmRDq55j9m6bVE4ef8qniGkTRVNYskej23y4mAsHSVDPkiXCuaWsQGqRcbbQguRsL5MtGxKQRpxP8",
  "key22": "5uW9XQC4SDk2HZUu1Hg2iyHPa9XXaxD6G9UoXNjpoCNavdAicBTn22PoKuxEncTNLVtiohjRZcwZ9PHxUjD8iBtt",
  "key23": "5n51s1ot8aVi5NfBfpf6AmxdN78fKQbLbBysXvc3o3K1StW1y4QMG1aN2GN29a9DmCSZxKtQMhmDYK8dA4eqM9ZS",
  "key24": "3sRVBhxXjkMuNWvTtCCWBx8GqJDXDMiXq4ftsGy5okYLiryM6yh1GK9BsVrUEFgPaaBVDEUJZijN5QBTeeu75Azi",
  "key25": "3iF5VmbrNfoLhTqWanVFA92MrAXVc8NSrSU1vQSHtcPtBPfVNVvrfLioxPvquU3noXfzEqui4m7wDtryTtxDcGCX",
  "key26": "3Lotg6bAnTyotH5uVH6C35m2qcqKz3mfsSudyW6rvbDph3a222xCAeWGGzLa9xJZomaEk9hKcdQqStLwkTuHDbgX",
  "key27": "5zEJWvgAkn1KKXc7QamZREMXDwPMtLXHmHLkr14Acfn2VYUBSzUWeLWMi3TbAbCLxTgEHE7ucq999bgtxEZQ2SfC",
  "key28": "5xrBqGWHZ5fA2NDL5Mft8xuyZMmeCW5WsPjXMse9pZCnc6qqE9Xvp9g9ULo7ZBj3ziPBMdvyJdN2grnmU7PfVTsZ"
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
