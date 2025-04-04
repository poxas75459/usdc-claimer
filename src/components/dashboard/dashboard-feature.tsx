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
    "5qYxM9Lj9Pzh1WRn8iFXqE7hcMtwo9F1yz5DUSSAjxQxoqYR6acAh4p7tZtP1nVHyMkWGGv3CNN7KVLSunkmd8pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kU5QmsDKs4MGR8ffrNge9eSQjZUBBJtvdKxyqQ3DoSNVJmHP13KLaB9K5wFVHgU63dkgiBtig3TBeiJmdJGx7xD",
  "key1": "3LLCdRNfSjgh6YbVqVtFRep36mkz9ZUFq6ncsMrYZh8MwmhQHztA7j5ntZPxeq46LNDnxbNFNo36NkMJp4hJvPFP",
  "key2": "T5Zg62a6GS9ED5Luves6SnkodtvEw9rxvsRYA4hCTdPfrXM5czMPhyLNS42j775heR6A7hgQTxetK8zAvTPhoi3",
  "key3": "4o4g5NmYz1HCB2WJjB3H5BZhWnjENRpbe4GmzZoqvTsdPGudP61gUpDEZkpP3snRymvw2NaidCdt2zodJxifjCWR",
  "key4": "5mrrG1xGiHy3XEQhwZtPJXZbqamLURkta2fYqVknrsB3t15i5fW2sDbqtUk5XGUFw6zpNoKuJ7v7hzxoNecsDYDi",
  "key5": "2gVYJADPkUE6wGsR5cEqNksgZ682EFwew7XFmkykxDSJqFgXTtPfmFZZ8WMLCBFmWgW5hSvHYbj5pR3q3pUV7zcd",
  "key6": "2UJtfTcMFNjBd7U9TaGCPgQgfR2qxz29mqPE9Kq72R4freS5zwruSKLDYWCE3hipZRgt4F1oWmcRbwHAAFL9mTA1",
  "key7": "4T6RmngghxAgTZwKBTqbhNGJe2uHNGhJjjdeF9cfBK94mUGbcn65GVpmd2Z8wJxaoRHaPpMfM6bG93hdUT8FUXqz",
  "key8": "kBWaQy6VC1Qgt3sTamZnA21bjNgDTc8WjfSeu9EkS9Bm2HCabRncgJTa6RkeZzUsakpf6YLse4gweEpQ7kmu469",
  "key9": "33xf5DvGdZp49Y2799XjdKZD2n3io6r8GsrY1tZF8rZC5zthGp41y5xVqvTo5jmT7oi5vXnHYMgksjvwiEnqSa9r",
  "key10": "588A8QMnMPkPB6AJXknbD6nCLDcSKxxTQNUbtH9jAe6VdANXWjGMoUDQ42c8vuxUWL3HWQPSUPNPdA6CTFopY1fC",
  "key11": "2MAtyaQrwiJhkpX9DpAMfSEqz6YmZMoZeFWyDTJiTDQU9f7wkAJvGpbwC4UhywwzAmGXQsXxbCcKkQHtZZ1rgcYo",
  "key12": "3yDb41MQqtnteJNvr6LZen5BXxDvspKhUuYmEpjaEMCRZbTmxJc6oFnfEU2fk6SCqf8YSaJcS1sp3fgB3XGy18eF",
  "key13": "6AucQ3dRnhM5F6jgXxy9eMMJDJ71ZU4LJrtcFLWTjh2rjwTCXrv8iBsUNubib7ovA1sfd5yBwot7168aZk7c28W",
  "key14": "3exmS6r3Zn3UJWTBncP94aX1Vb3wF1P7CSSWWnAxGYToGUExit2uNtfjsYxgJJeRKEQ6AZgUDz3XRNRpVGFSSiFx",
  "key15": "5JoR2EWBQq9H9zwwDLbc14qBFrdHUbFoanB9kSeAsYP2TZ2L7GwfdDWLEj3gfXExWCsez8XHZaTjoRBwb4sQGoyb",
  "key16": "3QJV9EDYJ84s7LHcoKmt9di8KQPPVZMFQt2NvmB1R2eag3YSQ5mxcdA4SFz2nt9wUagSVKLXhaYzDmwHpqBCm2rR",
  "key17": "4kDU8w5xe8Tv3TZMCmimTZXhFXg5JXUVikLe7RNU9AW5Kc63Bi6bPik8WEoWYbwYDoUhtdGKLBPoVqopbZ1uSYDL",
  "key18": "51Ad7yXe1bwtCqYSJY42fCncGKE6YENqFA4eP6qapUUFTtyWEcGTyM6QzfQ26nkvQgTx2doAJkX1Wisbgg4FBuKS",
  "key19": "2rgdA3yzePQkkD2eGmbgdpVgi8v66CrDo4ghdQXg4BHB1P4aZdZLypJCSGqd9tjZWJJoFkQ12xSyaE27Q7ep9Rez",
  "key20": "3q87MyynoPHPWUJCHfzaoi5NtkhW2BGUCPbfzpUhxgHBSutYVGKrauReLrQb1L3sA44v2z2xWxs5VYwom15jSC5K",
  "key21": "3jJCXgcNP4PsZ4tHGS1avQ9WRTSY8UETHvAJUTHf7Xs6sWeRVjuLayQ2hU8LEWxjjNZo65EeR892HX2CiBsnZJsS",
  "key22": "2B7dvBKtjWCzosWuw9DvbvBwtsp1gK6brnMF4JP7aMYsFYpw8f2UqCyFdXDXEazWnq9WRLhEiknE2hMngCzdpf5W",
  "key23": "25GVNZNL4ApSG3dzdgakSkgamUUBMZqBB4DgfuiTF2r5p9VwkxPMrLTQn7wAxJpZfcYY4PLvjDswDZKvZ9SjtuC1",
  "key24": "obDKSwzM1JhLnSbPxMbVeLQSgKwNX69hw4Q4z7E58BgZrGuxry5NKB44DzfMxDDXt1vY8ahGZc8YhGVw63dE3JN",
  "key25": "2H9Kh9pnxrYgYM8GspBVHs4Dwjbg27PQtAym7iLHiPnV3kRtJAyn7gmdJiPZuXZJbDBhVPYNqz7wzURW49FbSfpA",
  "key26": "Gx26jFSZjETvkjUZuLSj9oa8u1LuCANrRBr8Qa21SJkLNhyRHn2kgyaAy5kNS4wDNTqYJiukkinZokaP9J7PJeQ",
  "key27": "4oDvEfEhgvVpNhDh7Fp4otVYTVjeeS5HcazHyMwY1Q9Ze4nHCMtjpfNEztwBs2efwuvh7dgrz1FkcMLnRRYmrJ2e",
  "key28": "39pdRASVhqbAA58Z5HDZhEkU8iSg4ZYWCc59N2EiDvS9ifDH56QSmq3xAbWjfcJMAwJxGyUh1YzRKbn9zaWtT459",
  "key29": "4TZvxdfx2Z5KsXpVAc9goHLk94QAq6M9R6JZrNz8PoCUJur5kmHRqjWhgXGyPVwd1BsLLXDmayPaHtjBnPkzAh1N",
  "key30": "5wwMyfkJMpq8gYuwPz4Lpowcc9izfkHbPkq68WWaEUS6g15GTsRT8DnWBeuPDvWGMH2hnR9Bk1b1Zj9jy8s87PXE",
  "key31": "3pW2t5FEHXy8uieAL2wui15wySEmQVtTys1nYshXKeEThzt9HqqWt59hxtSV7gF4VVLFCPj7fEP5Z9fYEBvkZUNx",
  "key32": "3f9WLdWvWmKaYphicB6r4aLGd2bBnqbo4rHCwQ6a3VFuetCdQDgMVssYr5cKYhjVx8n6tFET2E6pQk6fExBhVC8s"
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
