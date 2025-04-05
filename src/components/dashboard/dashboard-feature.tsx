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
    "3YQx7aCa322KZFurT1rDwHyz8kKcQ2JtCbDg97rW6KhCtPcmvbaSqfyi1oWggTLRpmypVEwGHFeLQaRs8YyRL2L9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FoqML4MhTK8Z9Y72bunoLrCu99zRpJYiFWkCX4aTM6a1kS2dL37f69v683XmqztHzktuyuUvAsvpoyY4DeB6Jvv",
  "key1": "5MzsqFnRdp9hzqa3GJNZ9wfs38wdmStDQBf7xdMqheyXgDVHT7uJRY5B3HbKbqW7nfSKBssRuVysJ5RhE3DsdbFn",
  "key2": "Dm9r3gfyaFXSHTg3zRkDXNfSQ8D8vf69kvrkinxQFcbQ6AAb5ZvDF3fF8hK1yaBinh4SuJW9ZprNkc2B31wvgiN",
  "key3": "jzCGcBtpJ2pyMvxN2DFoDTobYAnegTr23bz2AH4eA6qos2PNmUUk1AmvZgYuKZoFHKYgheSozhXrTw5q6zJcsDw",
  "key4": "4vBWfpYwLFVMs5mkz2fMATBZ1uBYmgLuYaxuPMQRQUpZL77tBSzrJzimkk9B3AYEd6T6SnuyneBfA7exb9ttuAyM",
  "key5": "3KWeJURRHXv1mi3QBypxdVT2urdcjzDG1w6FXDCxHrYffmZL92QaeHsy2S8hxDaVcaeYPRkq2BtZC2yiUm57aVGA",
  "key6": "uhGaeaXsEdpNycFT83oHN2ciwogPWWbTNYwSyKkVXAxeUkXnTGBWbvdVuL6dttVvnBnhVQ1p4ziUuQrJUtT54oJ",
  "key7": "2H45eF5WqhQ389zJYjZEULF6q21fWwhoFnTLMvYPyaSwrByJs4xGVnx7M94AZN2Fne3pr3xWKuENEjwW14bYEBc9",
  "key8": "2EfNDafYDZhDtTScHmAU8hCCPy59FRhs2bbUPJ97L3Hcf2kcPxWRi7H8ougVSe6L7N6khXKtkqRZcZdQspQvjpSr",
  "key9": "2EQeTtcvBmJAzcf1zjRnZzQJafg4Abwtytk1RTRiPoGNwco77T2yG4wkZDdvCvkicvoLA8rxQsE2Xc1m7b78LhkE",
  "key10": "4PU5nMG5Y7kPyh4aVjsBLhxZx7Ad1yU7gXzTebnNvgjfG5JQpVgMfrJ6CEnNB4Xz63MkDUVAvjMoiX8S6TfLZRXP",
  "key11": "2DaStqawg8v11qQDDg8KvXDQqj3fpd2WoWfsogPQDfL2JVF2pTGvVWjF6zoCPrZ1kezonGUpCzribMhL9ArHhUZ5",
  "key12": "4R91rNxAkjyb3g1Vxq57Q8xkRVz37v8uauFBxMGa4vjJGspNowarMXBQ3QcPVmCpGcEghVyEPbsgx9MwhcpHrZ7o",
  "key13": "2agzcmcAKQppqakYPgNRT6sRnzo1UKUqmS5Vqo6KTaoUhxpEw8v1QzB65hcF1oS57TJAzmPKBQSjdexM3BQHz64H",
  "key14": "2YXgtFxyv9ULdCkiyv5G6pj3M5AR4PzzdRsYmywB8B337zAxC1oFsx7YjuRifd3GSovzH8byBKFimMurM3VoJYHL",
  "key15": "38233ubCLyBvxB9pAsabZuBnRPMZvLU48GfQfeA62RwZjGDaUpPPTrnpVFMDFdug9Nrw4MEQHUAqPaE4Uh8mgEiD",
  "key16": "2jHQiFAtEWR99PWTndL3NyupofSSJAwCoqxoZZsrBxGQtE6d2pjbGwS8pTPe8c9EziFEy9HCJ3fawuDvJBtes3uy",
  "key17": "2XabkvuLCymPj8XJZETCucxqDAhLPQhE7PXJFEE2Nasa5Vv7hS5PRxhY47rbLUyzev7yTnxrkd4pzN5dzwAhCz44",
  "key18": "5BVCi3VubtpSYzU5qhpncn9GDLLU1piqxd42EcRkDFotZVLonkJxdHx3kG8SnExJMcLcndHcHUax8EpMjiZAiiBS",
  "key19": "6256XZ6s1CETE7JE283NMSesdzvE6MfAPCnaM7QNnbqkuugiif2CmWxSLY2omQkmoaiXeCetLbmZ9C4QLeH5uRSv",
  "key20": "64YVgoCRqtskFhYDtdCkC7Zc8cLe88aX9tMarVRX1yydpvLAKgizuiTraq5gdteAGRB9nmfVaRLY2qjJJiUwPzPp",
  "key21": "51FH2eeb1RCYjr1VtUPd5Un3mrcBw8KPYW3Zdp4NmYnQNdbibrZoPawLcsggmHRA6BUKQTsKux1SS8Xqbz9ns4Dx",
  "key22": "9kDaKRfK5gjrjp3vvbNUm9WXkVveGugrpi1Z3C8dadvxQmdwRAzcPmNrm18eVQyfUdzPhWShiTxGqFoSk118KxE",
  "key23": "5KVWKZBXCasggW7rYKeZrH4M8QBspV5gKFxAw9spPEuQkgy1uitPageTXFeT3jp1jRuctoseZMKk21cYmoKdaSof",
  "key24": "VcobU6gCULr3eJRchMRBBSnjtHF82wR33e6GZLcNYWxsaHe1v7ToAaofK1Cs7KdhAyHtH3XqN3GBNPoPAch3WN2",
  "key25": "3z6t6KhL54Kvqdz3C5dPAB1xz6tuqf6ykDKzE5oWP956ezzS5PV7K9DqNYpHrsKQhhV3KLaeQyYVUyENavPRtvqH",
  "key26": "3x1jN23SayWjLaoChDm84xYsWL4FMAfby4zAmWdaXTQ2iadHvVW7X4MoPvEBL22hviSy1RLF7yR7eaVCeirGpCdp",
  "key27": "my24hxLsAGMNMzSAxMGYFctgoN6vuUnBFUZV5ZSnPhqbp4jWtsBdaHczk2G1cG2QSsTkoPWUo3Rgxb92hNs2aRV",
  "key28": "24Sivs8C5FkXUDeAncshxEyyVzR4M3EMSw6c6A454E9LyWVMiJuCVAcXnEBQ2uVikcVRpp1p4qB6E1G1uWa69eNf",
  "key29": "5rqxD4iGP8bXaeCqt1R4xKUkLkgavMygELjHzzU7RDq4P6bZWo9xfbRKCMyFPqY67EVWUKiKUbwSJbPTjKmHRpsU",
  "key30": "5vPaTSKLXqXKwXRSzfKEtnmDTLxqvSHgtyASwkNV2FqX6EG2oeuzWriRK4KgWPCqmbuaQCJFbGgUnuQnHMioCEyo",
  "key31": "3o82sg1i2hLecdRHTePaDCcooG7mLZprwe2xfUsACimW1ncMKXoue8Tow1gr5YF9ZC1NCiy51EDArUyrf4Sf7934",
  "key32": "3QvXKRQwXJyPPE4oBnCwtxqfFawf6QAXKeWDXZYZPdpf8exiV72tVajEjUsvhj598HAJUW4xCxhyTwmk7QX7f4jS",
  "key33": "4UFWCPFj2NgJuJx4SS92pyU4YrkVowQJapRr9QMtQQkqRN2sTFX3uAZfjp3PiFKS8hdXCiYDxR5dXhuYuPLpQCd1",
  "key34": "4BFwkR4SCbR73kiqVa39CLwwLhjeSnQSYvyFUFC3edLfQ6qdzMc22uACPUzPWqLf7q3ZJSBcfATbuhQusYwP8k3N",
  "key35": "5YiRXXU3LBSxuSNouuc1icC6nBNVazNvvbmeJVvqVkyfiZGaJqabqjjd9dFmziztaScSuM3aLCSUxFNEqwQvyPHd",
  "key36": "479fX4qgTMWLtQupEwuaC9ZDUYXgT5B9WSzrjZWzCUubkaDe7KqEcS6WpPRw5ki3DGC3dqbQhw54e535DjHGygkS",
  "key37": "2txV93rjZj68tZRsqXFhrwDZ2QFhdYaMNU337fMqavV4SUNarxreVL8rMm8Qu9zcAYs6BqwkWAcR86DG67mCspXD",
  "key38": "3PuAYbQef8LsFEJkKTzYW2aZ7C4FUZrfFo9f22rV5fbn44ggMnGBaqU1XwDkSFJXJmvwq9VyGbQqMP1dUEKN1wmo",
  "key39": "3cY3TigaR3WngeKpB75GLAjF5bFjybrm33LcJyr8gi6enLnhCMNv1EJk1oRNfPn6b1GVZ3YjwrE23EC86o96RzTe",
  "key40": "45rogsNYeLkFqYVdSuK1wXBrpKQ1Hfqoa1sxweYWkdzJMo3B2q8graw3Nweaby4kN7C9616bAM398ujACjUG7r4L",
  "key41": "3EJ1dH1Qe7i1AGr2ARW6cvyhXgYg9ffnxgGQeLzZMhuiZ7GQGpCak8rNy34HLLNBAaNNxvVZHtc2nZm1Na1hxJhm",
  "key42": "5xfrnSYYdAPxvV7e1R6H9tFgWcXfk428nhXB5aMgbkDzwWDdJ2yGCpUTZ6FxcWgXkjng6YHLemDU8hsYBVY6HCRL",
  "key43": "5TgcMiZHmcx7aeqvfFo5RL2gavduS6Z4AfFuWmiz1vFT7CGVZJcqWYo7dqGiz4jBiK2hhs61wqVPxuEPtYMUTa6t",
  "key44": "53f3qRbyDLSAGJMDncFrJoEK8FGPddCnnHeSw9fQixHV9KXu71V2i5X8FHL6Znjz171fGSh9ZdG1eiPrVUJ4wDuo"
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
