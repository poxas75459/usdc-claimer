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
    "T95J8sZj4ZmJE1797XaoQdUP3MxSkSuu3XKGoUSgpFLAp1MhFZM8STGoX6Jbhenkz3vpMF2U5K5eo3EbiunHuyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zAwwKz8SMXU2LBPARYnMtwKBm2o4d6Z1uF6HaG9K2rH8F2cZNtiKLWjjgLKS76Jv7HhB9AyyiDxewgcvNb59ki7",
  "key1": "2g716HGbiy1FLwo7Csf4SvrngSehPx7LxvvRFithL1kGNQUQtWzh73jPiFWZk61GiffMjY2VRCFcjene7PSv4yaA",
  "key2": "35mp8sBkDq3rVTWNaDekYqMn5V8Q63JxpwFU1oEahmeRRudZgxzAybGrVCyzEbmfFCyqe7MffF5GksdHvQCTvFtZ",
  "key3": "y2EAEM59o5b8iQN7jDZHBJPwq6qPLj2BDoL56QvcJBLGNtJocuFNacNTqawKQP5nbWBMwn6XvaJnM681gUnPcUc",
  "key4": "4j2esQa5cQZ2UCPi9NM15kGTB346HpuwxUTFQYyJV24a96GgwEnQRK3pqPcLq3PxVa1d8NqUo8m1GZesJZVFKZba",
  "key5": "31dXWbyTgDpG9uQBgPJtRw81JY48mJn9bbKnqYBg28FgyFWrjFJnvGT6tTz2PsCYecxZAzf32cJrpX1V6xdAtERB",
  "key6": "5NyJVkJuDMPWQ8H6GNwT1cCHgCKVov3Ne5R3FLZpPT63MAtRrPgR1xkbWjLneQyhRgh2AT2ajFzYU1EPTB5sFDKX",
  "key7": "5SiPnLd3qb3u4GTzkR2gZZuRdjbSNx5uehz4FBu62exXBrDiCivpNDbWKXwGNmDcSFmS9iFyv6T4bdvCnen9HPH",
  "key8": "55hbMMJk5uPYSPodNemXRfzXZKoR3jRHwnq2raBp5PfqJDuLkwgsbeY1XLgEoVoAk2SXEpHiV3pdnztWVqddf7kq",
  "key9": "2aiDn6LNWNx2z9kgT3e2m4kHXFXtUEF8eVAtetcQZUwjaZtVX5nYRTYz2yJGLszREnCWbZ1Z6BqypfUmn748hkKM",
  "key10": "5QgC8fbStaEvZ6wULuLN5oVcuvKma2eNW9Ljo6XvUHB6EqYNoYSP8pnBfQH6eNSMt3rEdkTA3WmMhCzbG889vbr",
  "key11": "4d1jsN3jy1AiiindK7EQPhhf5XYbbTWq8UkKdEYkFnxSBoASCVAbAMzQGu77Jfd1ot3UE55ZdL59jETtiQJBVyzm",
  "key12": "53SUZbc8movGW6vUwBWsqfVvSsX7UzonfKVWWhTS25SPk1GN4xPU7FbXdjAP1XJftXqsu6wX9F9TBk9etdo9skLk",
  "key13": "29xojnut6RBBW9TeLxVSmFugSTXZ4fktDG7C4K1w67nmGHrCX32a2sHmBSqW76csNw8Do5ubXRVuM7VH8FuipCNx",
  "key14": "21JRgzWeMHaEfaUpkeWVUPgNC8QoERV99wcCGcCWfxwP1hgMcSCGUWyPUrGyAdR6F7okd8VmBb5ZHBCyufkgTYTi",
  "key15": "3J4qY9Q5whtJmE7y6aSrvVuCRsg3YgDX7GP18xVRGbRvG7z2n1ZmxNuJPmyJ2VEepyDdvuxwu8jKhT5MfLf4P4kS",
  "key16": "2AjsYq5JEbEhfGC5kPwpZd1EJMmQYCHJir777H3Y9dxJCfLBodDA1ELm8pFHXyd6UgZ4V6mrjbwkDfz2w4wDYTFi",
  "key17": "49FMMmL8BvUJKkEbVW8uenqCt4uygqmpHy4gFjQRJ5vBiEvffpkidaG7ofAcPy3dz9VvhxQgqAWA9wbcCEcBKvpu",
  "key18": "5SK64ggEZJ3TvxFqdwxkj3sZVxUHRBpVkqQXPCb1YU2JA8oT68FXsfL49U9LMP5qjvn1U9sTjwYVkiMziaUa91Gv",
  "key19": "5EMhF83bPmJG5YUiLjzuDqTtizEoPcTz9WWuGs1qARpRaNSHf58vzhste8cwDoWwZY1eWMtak9C7dwKmhmJVJZTh",
  "key20": "3m4E7866w2Vh42h24iMzx1hY6F2TjCpDyrFs8GsFGtGWTdXDzuuC9WzAqn38ET35cziDgNEhsY51F4dXi9pmjfx2",
  "key21": "Wt8PDCF6KyjwNAVxVFa1cXnSQiKFr6CsJZ8HAVtfv7sLM3x3eia5mhqp34cqCTcjUabnFJkJ1dc6c9wkC8HzzoC",
  "key22": "V9xHDYHs14WVfB8ePyBaatXRXF8DFiv4twjL4unDz5XYUPb72ezAorQ2b2eeUJtGi3xchn31ZA1LvgyBDuragh5",
  "key23": "2stU1A1QCfKHaMd67Bx6ggqGWUywLnE4bLYi43W1znAkr6hXeE4kGgmLvz9XYWw6LTHCEVfBd4k1YZzF81gY1JqJ",
  "key24": "613jrcs22CS9k5N8M6c2L8w9upBXUweaemEjqAhKiiddh7uMCBv5M1TPz1GsZKRt99pWti8HCbaDT4dzNS2rm9FG",
  "key25": "2mPGwdFSd65ygzayhKNUFch9ycgUxoELj8S4UBMjdNCBGoQKcJurXPEgrDwC1JV9HU2jcME47a7TV7X4NfqmpF3P",
  "key26": "5xh6bM65mL713RmZHkJpngng2JkAwco6fxhTuwusWqNxzF7j5eHRgMZrSmDhd6w2sJaCZdnYnkQtGsiuBDcJ2Hdm",
  "key27": "54Ko2CFEaRYrjpqXxGARnkVvg2QZGHLALnWnpWEnWZMtLzvXxi5qK3Ed45L9fi1a1Fep2d4PnbLiSee2m5CAE9uR",
  "key28": "4Av6N3GKsDujTkjDWsuhyv1M4q34qhVZ9NhqneRzbYm8F22PX28McHMCVtybjSb6m8DoLtwsfA2bsK5XKoJQXA9C",
  "key29": "3NKgS4dJB53SxdihazWsWvnn3pUqz9aXo1XN7qScfVGL8DRSqmRr6mS9VxN5qWeGSTHeVurejQb8XCKZt9ZnYxi7",
  "key30": "64Kb3esqRGvRLrgKxJ6RB7GESNag189bTZBBPcTMfiy4zHzuDBetz42hCPowTm7RTrQwcCagYW1cy6976WCX5ToU",
  "key31": "pfbcPSvCHiEQY4kN3WQK4taCF1w8VZTiiXQGFqrJbmgcV7NbgqoLg4sAfC92LRJw8u8HfLGXLMpAPehQLnth9Rz",
  "key32": "czpWdatxRC6THj21sKWhZhyXRMQSDjnxRCCzzrtmxS9rpGwS3jUCSAUick16qWs4nhD6NrV1qUPDJBHM1jnRDQ2",
  "key33": "2FioRofEfuvuc7sPSWC5e3ECYuDCNUaQw4sj7PdogGkB2opnF3awF7Yxz2JxDa9Dcb8q3NNKx5JCnQ2vjgaQDML4"
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
