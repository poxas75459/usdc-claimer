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
    "2Wy6QJZEid1sCMxc8XBKq1xy5J1fEKnXkoEPKvbW1SEPwLurBi1TAa8nFgyP5x5adVzzYJARKVByC2fMmWhazmZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gVq6fMowRg2yM6wB8MAz919G8hvPMk2cZFYESYsTcNRnWu9MpKdg6aeXkkUWtEjNX6VtNgpEYMpJKpbjUBZmGf",
  "key1": "2At8UBkZ2JqNhkw9dtSogMsQ8626hGwE9S83bjAfd2rZryWVHRAitKhhSaaCbxSBtWnEPqATMCpLqUVAHycf8Tzk",
  "key2": "5WGCuK9J4MnN5zxPJnhyM8JJ2gzeX4ecJXDMHpGQEyvanC1UR2Ed94ZDVW6BNLB5GHcEL8jhJcT6B2hmZNbKnQZP",
  "key3": "3CkqzVaMDWSQ64wPMHzH7fgYLFYJTmc4umZt1CAX3DMjHGZVQnx3adRZJvi7ANCQX3SGEL8e33D1An4n9q21tHPH",
  "key4": "3Ge9nYMbbgVEHXbY3PPR2m6wRmrTNj85CtsPZpkLEf3nL9jDpRCX2R1zdbqdoWeXGd6VfYPUCPXRB9yE7MLVJ6ga",
  "key5": "3hAork2h2mfpHfrwsr7ZhshGEQtKzCswb2GAFKZxfEM7MDcnqw4nRtGbnpVPBCeFABoh9u2qNCaVYQTerk1kmdhr",
  "key6": "2ZHHAUuHdyRg5632nhR1AC69hHC6Zv86izBtdC7jnpGN6ksfXKcbATvNxsMTt5Zw4gNDu61WyS8XdkDQmY2YssdQ",
  "key7": "43EqkMn2wkQe8iunuHrnp2bobUqEddLqNWQDwTHJXEwjJsvsfXscrqH5GSUTxg56dXPNCqk8jkEZRoziDFe8YsaY",
  "key8": "4zRz8XCVaTmPyQYpWgPqzNyuTPxvgQC8Nocgd2FsEqPo9wVBHGbnnoKNYVA78KKUsTQbiFRY7F8DFGNiTcSCr6LD",
  "key9": "4nacDykGEuYQfvCLNrk9JZq8vMZd7A7jCCAqqz93HcxWY8SoFCvcCnZ7U7Jx59uEKN3WK4i18swD6C8bW7Q7RSmV",
  "key10": "2zhekRE6yxN3TGjTTy42MmNULd6BoJwaEahFFbLoho8oY1VaWe8WsLLHQv1zPLkeRKd2KRzcmW7GPmtN19v7qJ29",
  "key11": "SQN9MntLjitGHodr9GiAaXm1FS3S1U4B9urwEHBvBztFiLnXyoPceASLwao9RMXR5AWFttGHb4ScwTs6aTWcdLf",
  "key12": "62tUPzMJAxrtnDNybckY2mPhGt6u5p48zMyYgLevQYkfJGS9o9K6YsbJvCZG9nv6fuBnfPnGniTE536B1bS3ECmw",
  "key13": "3VUvn5vVnFsnvxhujq8w6yZrQmZZosyzNULAAyWLZnykMzxs7cvWLfi46HPXXsJQ1TKjr9g5WRth4JMKtsJuG1MP",
  "key14": "269wMyouYGcUVu5Aa6ajpTQtLeRWenmi8Fee1PvvimyCt8RytWMZjswKi4NS4e2E7DSSQBf8d7AaJGS9dCZHVycF",
  "key15": "Vbw1UuohStcTVoujd2amLbHVnxdMM9d6e1dGeJgzMWDKS6Y6cSqTCGSfAVecFZZHfS5orT4fyaCxawLSps8xxTp",
  "key16": "4DK7tatZGhwc6nvKQAUTKzMmsvtmtUEu3Q8DF3oAVmeqiHbE54r7sjYCnBi3s7Y8Rxsm3WXJnwok2b2FqLvHAHYG",
  "key17": "4UCcNvanZK9Yu9oZ2XWi2FRD5vDithB41HsdkcH78qe3RQdHvMgDwosB8ScsVK5HtgH9KcwYo9G6cPryeXJHEhq6",
  "key18": "3L2DyrTJXqRUEVc5RamaJpgqFnXxshPYgHhAEs11j7MYcyUY5Zp6bkvwHQJ5Gro51BZeL8BXwGEVrVpQFTewEtPS",
  "key19": "5WuWosombENeoJzqwomSFMibAysxsaWL8PtFXSkiDB2yrbkmNU1LVmaa1rLAzP5sZ6YT63MGwPp5XHRwCC1KkaTj",
  "key20": "QNfoj4gVGDzY6MHVbQhgXhLCbReXpLVtCAn21Q1UVFyxqg7Xnb4eDcAAHs5G8j1gco9Bo9GE41TcGEvL2m8oXP2",
  "key21": "wRjMrGKBHa6yUCA2vzWYHtbbh9Btedh5VuvhyWfsaLuUv5WDVEgvuwqfVnzUgH3XeVztonMbQiMVwFNXUuB82rQ",
  "key22": "2bkj3TU8mGfrbTfBraJyd7Vpm4aa2rgJ7TPKX5WnuGcrL1mzzQnc4TZS1c73yvUm8RwPQC1AxYnxn5EzDmgHUDff",
  "key23": "5EJ5s1TDqPb4R8qJKWGJ4P2RLTPRbLLwuviWemxTo8p9q4NnqVwRaaSgTMa2yxQKFFSbQgt88uLRkDB8VPdNxY7K",
  "key24": "51McJnQL3Yfk7Y4F4CCFasrno8VsGHeKxda5FE8MZzPy9reRjB8aegXg1oDMPFAghRuih4aXVwVhbfdv81rHTo9C",
  "key25": "3JdwAxtd6ujPgXbDLvEz8g7HQHdLzUtRqbT1V4i5v1yXBqYSMjtez1DfkUx5RqcYyGJvKKQLGw4Hn7Bdvs7PRZyV",
  "key26": "3sWyq5t1dXKj7GxC2wmd6z4dRTn56HztCC6kfg2Zur3LWmV7GcRDQzFZy3zzcWEawmtbDf2zqCue7h9fDGKmgFtb",
  "key27": "5ZzUAHHjJBU2DFaWHcvqDYpRKm6UA1qzPFS3vpXJxRQaPgxGShLGNbZQjFqRxNYTQPAcZQNNoQHG5scWt4jcQ8xo",
  "key28": "61xuWtP67rjh6htLQSXfyMWCLyAQs7upUZKVkNLjsXqdVpFe3eSgatKFNKrreUop7AHC79K8m51NUNqkNPo3AUqh",
  "key29": "2CeM16QnAGZEa46G78stbRgoVaB81kzymWyuRFhUyuuQF4w7os4GKcTTZ8cVW5WFah6xFfroHRo5oEGvUoCr7twr",
  "key30": "4eu8oSdE2CWFFhPXoJ1w7yo854mqtuQh1xT78rN8u4UMvNFe9eirW1jyneeSfhNxnjKzvyV2REJdh9WF7XpXheBK",
  "key31": "51SrgQWrpTPB6ovuRiRnUahbt116VzCovgqu9Bu316nwfLT9URbTfTe51Y3Q8ZHYqvwqHA1m8awfxfWRr7HbPXGi",
  "key32": "4w2t4t2EAAzmv93qySoE23171RT8WLxmL9XrDsxqDuHFtk6Y4kTSpmKTTByDvfYaLxmSvPBppqPqaxRvv5RjmAci",
  "key33": "3EL2AEtPq6M6y8H5Swpii7MhgCdU5z2Sq8XZhPAvxLtQBj51wtYXqNfC8YhS4opB4kVr28bUTKFyAdGZdek6GGkT",
  "key34": "23jWNL6Wr8bSoZkrDnF234ufjb23K49qpjZAXRxz4fFtqei5c8JMTDEBAAqbpoumdVdgtEL7Qy2J339bU6aTbaBJ",
  "key35": "4N9UguZpRXchN618C9993nRdN89LZkXbmwzvaCV14B626sibE5bxJzV44mM8aioryYvHCAnDqP3NqwjkMHfkzUsk",
  "key36": "S5BTLLads2tA6VCrc1mUBPBc3zNKGBsVViZMmUmNsNttD267LpDmR8Tb5t3UGaGn99wSTbPuZhGLHtkMWhGsnJS",
  "key37": "2gqZxfhqi647eEYXUhRs4kbEab2G51ZVShdwmrq1NgXkR7QuiCyAC2P6QXC9cetp636ovuaLjukHYo8x2HPVv7Z9",
  "key38": "5NKtJ6WnJ6AUzRvnp7aNuepzXSqdjoEoRfkk6ycTwW1Nup3pWyhHZnQEL5WtcMGAzTcG7T3tmUSqGa8S32ntnoa1",
  "key39": "4qFj4ZoFZiHHFE17XMJHi9JeV5jeueHD4FEg7nt1QepqRwV8UtfdZ8vQV5Ccvw5dzU5b9jywobWV1M8pGp8aLzza",
  "key40": "2Vgqxwva91LfWN3ec5FppSKLa3kPnCJ4Fgamhueq5oe6RU95JmnCCwVhJScVNBofAAX4fCBGnXEjjbxF9DeLximN",
  "key41": "4z85m6noJAdzmVGvw9f2Y6rZwtXiUWMZhkWtpkX1Uy6A85sUyVkpFkSWw3DDrkjz1imLEGkDmGnPedpvqCs1N7MT",
  "key42": "1eWALtaoqcWW1fAw5SSDb1x3VgDsy7HLiq1RYaEw8ALD568mtTTw7WimrpNhjo5iiMfS1Ec3NBcnVM21Kvgytox",
  "key43": "5ao9pRoT62nkoritsEmAtx7h4yVXi66pLwuve5KATpdE54us5VKfTUCLSmTNRLpusCx7vSBnNCSdhdoYpJKhpNse",
  "key44": "2NiQVmzxYvWMrTV7NNonncqqux3FuXCioXbdyShY9Dev6EXHTADprwycu5UtyyA3HqTeb3YxL6kEDW6YkZHYm8Rt",
  "key45": "2Nw5P5F9BVm16BqnL4pRsa6iDUME99c2TBB7nPZfH3d3bJ3ZphsK6gXFcqJL91eNwse2GXdRNh4tKqjY6KxacN4s",
  "key46": "3pnFkjDLgP6vxztn4RY56TyzYvepjbxpc7b4yTNNpChSM5BxWrfALet7P6pxqK5cSSoaxaMfyw8MNjun2mpz2knJ",
  "key47": "4Ao6dwHHyPBeEfMw4k7XFXpHFph7FiE6edMRYdiytfMBBqm45FpHRoEtFtKLUjwBtEN5pyuPdeT4yUSVwJu12TxP",
  "key48": "5w4Eo8RWGWBayoLg87jRqrU3GHTf78euYy34GbY12QXzcmm6xTJbravjtJvMqoCbhBhG6EC1Y6VMX7R7sDtZLQBF"
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
