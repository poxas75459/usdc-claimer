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
    "2nbDDBWiEa2GzaSkWCdyMH9cR7tgDWr4hKtfbqjv1he72rfzbX3gMjzshZBr68yX9jnW9Y8PhLVTV1dmNvccfSys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3KpK7bUJLkMLg2AZbUuMZ5k8uepp1hVrEJ8e3gEuqwKd8KVmiBzdauBCLAujhDofivfy5mcHE1rCTsncq2Rji9",
  "key1": "5UntGgtgWEBiBNU5ut7LJCjBEq5dB1oAmesk2vpg98GLK8hvfpqb8WyN6Ho5HJs6W6MJXxZYqVrKUyimhkaeKr2s",
  "key2": "32B7kTs6XcbpBS2brhgVfmKT37STPWAzD7o9hY3nrwGWqCsnSaJjbaX8bouKM9WJzwhH7nRanYN1UKHFCJzosPfh",
  "key3": "4FCzgBz3Ci9fjkakkJq8ufmh4jMT8W3JhrYYQYJjm7WCyYRZoDmWZvDxf2KPR9sMMfKDg9hScseMq9R8USiso1fh",
  "key4": "4L3wWF6LVUMzhwRvNdaBjxiydDSU7aeLfZBerC2Edo2v59tJ215LsfrZoqvnWdotoVQMySAuqCs93aq4vcamyaU8",
  "key5": "4J7wR5CeYzxaxXRCB9DVncgfNcBBzc4vYCDr9PnZYrCht7GUA6Az6XdZA4viZRVLdsFJs4WAPXo3pd6WFd2r3Bar",
  "key6": "XisUNXagWZuXA3MkPLEJ6bTn6yfx8LB98Q8BSdKGWEoBgmECw43oMLuaXvALDVoz89bWtYYN6XvjG8cJkMsGAXe",
  "key7": "5Z9ds1cEmzxsgA4RwSEuXUVoAC4vbH58kmm4qCbHhkXSecQ9c8K1EPFzr2EKJ2zXEicdn6UBEtnhQPx969FBEK9N",
  "key8": "5c3dE3nxQDmzhyYEW4uwxYY22RZs5BFThN6wC1JNcPAGkHhi2coKybHotViB8i9yiAYA7in4WNEm7AptoWQim9hd",
  "key9": "3RjjzeJe2WvArb4meJyE2Mz8iLXwDHJWeCbxcVbmHAMooEEcS8PDmgPNKdVYy7F1ok3rWyyaanaBW9MCmCZ3ZTdb",
  "key10": "515kyGK2qAZW1o8aDnDFpn1vtCxsPULDocKeMoiFsNWf8r76WFXz8GgAYx1hXqQcxGbprmLdhdAUYPqyVi1o3Hpv",
  "key11": "3zncpnBtPBJbAgmCxoEYNWSzHtTLQefRDR57nCUyrzd2jYhGsVnGuCkWko9SPc46tY8JEvzt6k7DhYknVFuXTxFy",
  "key12": "rieAHZmKcAsjrMhUUPyXccLrqNePndycRn6GKQju61dqmGqVARLR7C9WZk8K4DNr7NjSLpWaf2jZnBEi8gZNHiq",
  "key13": "2Mn1KdoN6yGkxkSFUrTZZXpXzhPWLLXK7BCZWGvdXiU3iDu8NjYSyQniSUsx9JLqS6smSnXAyMDnxznYfGsqJrZ2",
  "key14": "3Dr7AwBmNQ6NXPjqG7TRkbPkhNKArWctEBTjfRq8V6tRrJubGZe64bwCsPwG8mBVRxp8smSQsxmiRe7fmzt8Eoov",
  "key15": "5m7Po5VDk7KyvLZo1V7wr8W2W87Uo4tweYMPbAdn9YrDUu9zAPsaBKsBNJ5SinEXPdvG4Bxyh9rk5Tzpb9iKgGcW",
  "key16": "2VBYGUQXiFytuU8SPU9oYsRL2A8jyjArFbgyf7nbR1MW7V2ccwJSWWtYaxCZLCtXWwjgh3MfDkiKeLn17JrUW7Qt",
  "key17": "2feB9Yaw7vH9VeCUiz1dPpFuogFHfGcymSJRUe2XFXsmQn5aLeVjmHpmHw1q6CPUbEwWv7vdqbrjEKnm6beAGJ8r",
  "key18": "5ox5xeQq72wj4qR5nwuBoWbunWU251hBudvi25EnrKAevx2HfvrUtFdKjcttoaAtTxHTXGk6QQnZxZ74Wd4xhrwk",
  "key19": "3sC4VWvPSZdPX2bBNrxUN8AGTyW7EXnB9HNTLzpzCse4KnovQFFw1eSZc8Wa7JoGjezTeNH4gxjtpNrQM8zNXbDz",
  "key20": "2Exf63Vc9Z9JYXcq44xojTQdTz9wXgDQLjKJhk74bXw2Tu89LeVdLFsi4eL8TdX2jQsugX27sGUDycnP1WaNFBT4",
  "key21": "n2dNDJJgqb7XcuDmRAAv3jjZopRFU5fCYT3vwJRFwD19qDYm3YJnGtgRvDZZQz3rSWZ13AD6MfxBMvmvKLF6ad2",
  "key22": "4xMgMrnybmkj6LrdyezDpX2qEznWX9MDAUaaVCFURMxv99A25KjreqQVy17Tj6VTYd1CV1voHzL7FS16ovrcfj7e",
  "key23": "KxvLVuaSruUDHqvooHq2d2pq9KZA3hcZ2dKLCuHdEfT2HeQVzxQ3ZkvBgSjeoV1nYrCqSjGJ6DPKtDMgnhsYQsD",
  "key24": "4tLwQ5ijjiBeGGJULssGyr7F8GYVcP1XCZa7EwE5n7wnbzXwxhcGQ253C3ZoyceGY1JvdjatJ3ZakMD1L1BRaqqT",
  "key25": "2gG3WFbzSBHgvjNuiXjQSY2JydDs2cnzQQwPcM1X6XEXhHe824YgNsWzKcafDStioCvFy6VAvhS6heBVn9hRns1A",
  "key26": "5RHJYWwGLQkips16ghjEvTZcjB9PuXPLc5ZAxCv4jdDLASuTW7qFQobVZcMQMS7HK72RhihP5MimpJJw8VMWsStD",
  "key27": "3SH41uEGe9miFXGafoZeVEPdtk2nu1CiW7LpeShej1qa2dFUcrxybPUovEr6kY2tQNByN8Y4d1YPw3L8PRm9zHcm",
  "key28": "2RGkLdvhF5uttYRqHH32pe3QNmtthy5AnBBcrFdQvGQjN8xbTf3acpoDGMUR3ggEP7RbvaFTVrst7i6gXBwgft8w",
  "key29": "5nvmoUkNppiUEKUUCTJ5MhGoZ9nwbHyjHeFW7qL7yy42McYzWi3R42FiNjgFaKCUomTn4DJjNacsfTR8kS36Uhqn",
  "key30": "TT1pZjuxcymfXnEeZMPmtGFVc6X6VGMZhC1aQyaxa3PNKZn49KqiBSyiTfgrngEM8jmRWWyMTqmQLvszcPW3Cc2",
  "key31": "5KQaFUMVgm6EYpW6DWM8pMxMHtwmMfaZEP1HAYHjLs5jnHerYQYiPLtwbJEVsQsACxqM7nxdgfNk368j3CE2Qo38",
  "key32": "4nmm6GEBXmgikzoW8gNcNmWBbtqvQmGegazTAs3KK4oNq2XNC737CWJL9urDdXaxN2TV7bcRTxQ5pmruJWpzx534",
  "key33": "o3yCz243tU7nepFgehEafAWSmsj3RtSbkBgAk3Syqe77WvwVGX5jJ3ff72iWvkdaVvadEUzuvMdVDCot7NQQNsn",
  "key34": "2691SoRhtF77SqWLGtVxSYVwKzNSVKce7Jc3r9QReM3f7hqWegdcNeaAHgEP26Mog7EZ3kD3k2gn72cALQQ7iQNm",
  "key35": "pX7jySDPwsVbukFDSTSEeYJJvySJh4uJSjjj8HpW4aTqJqfBKAxJQt3s6HCxycE43vE4ADyGDoqsDMCRNmpjBfX",
  "key36": "4PpzkG33GoFFvi28n1KYYo8X7vHMNjtrVncAyaDgoGorGQnkmX3nP68yhZn9Zraei92TpSpwnqNDZh9LShdnZ3VH",
  "key37": "2YokUEef9RcYG733v1rZRkDf4JM87KVsNz97hZ9tZR9uSVGCnc3PtGcH8EQcpi5o6wEKeMvKiVZNQzDf6TYpgwdi",
  "key38": "2bfCgz6UvyJWs9YPG6HGAYiNxGiCJuD6JMCQuUQ8dKhiPLprnTUCRsra2Eo8gVqdHcdEACJrVX3XfAU7QeDxsyTy",
  "key39": "3o3F4TxNK4oYQaoppGB7fFrmrRydtweVVA6ifC8XYCoxWDyq9E7cajw8bsBdej9nwrT2WwDSKqSEaKnKWkqbQxNa",
  "key40": "27XCaryM2qFUuguBdGWYtrXcdqXEzgNNnjLdSELtRZvgmpD64x2Av9dBw12LiHMtzK82kk5wfAJwzCwMnM7Pjhxu",
  "key41": "2ekSBMw4HV6tQtsEvdg2p8rDzAAsv26e7dfX8eAh2cvVXnxvcRw5qVMRL4SG6PFnoUyVqaRdsftEtKKqnuBP1VpF",
  "key42": "5k86M18zezwnht6Li8u8qJckBjez69kFLwWYoRuVz4KLoye3bjyXZ8azCF2CxnGiSwRwbe8fme9yk1YHrKujNgGB",
  "key43": "gUtTWfVTqJCYu5zGgPBQnyKaguy9ade59GoHhguS1wUYL1Ww28dKxS8rMT11TsVjsD48QnBEhQ9KUr45C2GMuJD",
  "key44": "3cn7dY1JAafm4uuYe3JyBM2k8CUr8u2UFgHs4SA3Cs5fiei7zXeey2Q7yfXR5sc2HieULwsYxUQ5PiFZqtmgX573"
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
