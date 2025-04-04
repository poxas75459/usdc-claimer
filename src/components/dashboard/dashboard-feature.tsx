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
    "4NuLpxuSgJgzSgyrxUDm3Jhpy6qLyvDL7TEspdkiAwREeVKXKhYcqypfTZDRXk5WfgoCRda62SFAoBWiM84REUuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uBJdpgeRDwpczzpHUh5N5TPcUDPtPaPPpvAbAXtgFAcMDc7NvrSFrzHvpj51XDjgc9B19ZuYAcgtiGFgZr5mo7z",
  "key1": "5en7aLNjBgm9nAWsG4S7bEWH5byfzq2W5dm48vULbtkZ5EuhhFy98U3ErmDifQbmK6FFCTwwMFQVVNQAHkZxC4PU",
  "key2": "63CzJiTszDTx8ft2ZpTRJ3fScqgr17awd8G8kZZB7oEoEuemw5vfFepewnCcxFDHAiySHgVuizC9Btjf9sJ7DUwD",
  "key3": "5j6qELUPpDkyCKkwoMMjVHBuxv5GuRL6SjMMgZL8GpouhArRTPBsCwCpLu9pFepX7hxeFybPmtYRHY3YeUrVaqQR",
  "key4": "35zjzsRprDRVjZRoQryGyc7ecdSXnwm9LXAf8dHD8K9H4SdSHxLPUPzAVXCz336WgjgG2mhK7k13c72PZWEvwa8K",
  "key5": "38dUeZhqgeYxvoUTTFG9tvXpvtmY4sKHdRWtrYfgYwTax9W3nAuuWyDKZ1JyCutv93KPKLa9ctBBN2j5ijcx3hPv",
  "key6": "47wEbdgub3NCCWPTUKf7MCxr5ZWHhYTFSmccuTs4omcCRRGQJNMQDxPdB8rhnCBmd24MjuNLUZVaNMTw6ThWshdV",
  "key7": "PMcETxCinCT3H6HYXaBiCKqT16EMLPfAvopHQPffo9TZyToCf2rg7tK96W6DYYaXhHqyctNW5jWc3sRc7LJ2khN",
  "key8": "2yC4grraz7hw8ffmvRqsuBhMYQiaxmK2iM4VEnRg8JFTYCH2vXmGA4Yb6sKJZSiKAe7sFmdPnqmoCMB2s1PntTaf",
  "key9": "u8poGqJ1doUmCCx8dCEcoXMztKSRuLNY4nyyV7F5xiazfQPdqJcTkZAbWd2qvbbAhLFVRi4dLFRYFpDHHPQhoid",
  "key10": "3sQCWvnr1sDDeJpwN3CKe4mQzXmYmcfUM3MK3t5i1ceSFADDRQe1e9VBy2m2tAhj1D35Zq39TekkLjYxigF5FiWn",
  "key11": "4LdcBz8soCb9jpDj7DnH2ZrAomiVCvmprp39B76hTZWM6MEFfCCXJB3xbY7kCjD3KKFotvC122KkTkYwcQpXscP6",
  "key12": "3yAqs1D3wpKpXXCwp8XFm8viA4ZmSnhBtooWTbJVAt3jhSmjZkpsqiUNrY9FEaRwazcJGutoZEE4ZzKx9dNxvmZ3",
  "key13": "2r1hGLqv5zNWftGABMjYwUvBFSc8pPXfgWFqhhZtbJPn3k7aLpbBnfGLH1scrFVa4PirScLYuXJuVAiCUvzssGwK",
  "key14": "5dokWmqhUavc4G2VbdGyWpUzJmtBchAKScWmusw198Goyccn6PSUkjDbbDYFXZA25h33btySYNGLadiHRnWRJQJQ",
  "key15": "3vTycDUaWzwLrTeAM9Us58a9aLrdtzq528k8AbUKg6PjSKEvW69tSaNmKzETRjgwy24huZerXG5j5XsuCyejFoXn",
  "key16": "mPZPYgjg2sUmBf1H3qw7d9YMRZsvTm6ArPwb8zjn5J2TMHu6PnMopbY2PkWPQrgxdWSaYnSRchWjcgitaWZDUm5",
  "key17": "3BqFiy9Gvb17mnxTqKhrAHMS4PPJmyEpsVAm9EQ5cNZbr4PQpDmZZDnf8zZNi7ZymA1mRTAvYby5U8BL57KPM1HE",
  "key18": "zGkqcyxgSd51yYVWTPttVeTHyFbr7sVziDZvdx3NbG5G4VeJ3jHE82f2mz915dnUZEJqfSgfUYzSuaHYSdhMDyd",
  "key19": "pqsBUL8tThuF88oP78YWhapX2dGRfg2tznDpDzFmbXjtuSw1s29aRdDPhy7YMNDUQkyPWinJsENf8QycHzQiaGp",
  "key20": "3MyEqh6Pg134Y96wUFsz3yQcSXmJRgENY9idfRWxGBsoHcte553Ai1ogqRcd7MxBcmBRd6T7TnZZovPZ6FwfU3Pk",
  "key21": "2zCCrt2LoBjRhVRXQTmFcwTqZMWEhhQ6iw2Ai8Hn99pdvBzYdvJYkQrnhJi6Wz8mHmD9gxuQLdzt3o3RnsvZufZN",
  "key22": "PihUp2GJzS47EcHk8NP2bbrnoU4Tf7JJ5xH71nWVtZWph3KS4JGvk878Zmek1DZxdL1yxREmSs9zv12gejEuwsB",
  "key23": "3sU6hwBs15WJFy7Zdp8pJwPRFbTL6nz8Mo98QGs49V1PDKPuu4fyMJQh7W7z2MWpbNTZ3wFzFphgfTL4KBztXvx",
  "key24": "2znWuBvFtGh14YcxFBokFwzXdW9RHQYVbqgr6hp5bGxX37jHNLkEXh4zGAJ92tnvHqQYxQ5EX1oNNeQN6T637D7C",
  "key25": "26mhKjzWjUko4Chq65xyQfR2tbgPsAVdbmuq1N3LPjjPDf8rCngdumUEKDN2azBPDoo2UYzKCjF84888ZY4wPHgU",
  "key26": "4G4qZ5fLLYqqXRDDz4eynNCfYrbZedNaF7yXs977VpvwSEWwDjvVsPsoUghLgyccnTq1Y7yTEEYPoBjAWDLg4q9c",
  "key27": "2pJ4BctFtgraAgunbxcgFJLsoCVrLzhYkQ12MgKScgtTFoqcVYTQKqtGgKScBDwaVuX59kHoXd4sj5Jwau633gzt",
  "key28": "sdLKes5bEcJ6KVQhRJqUMfMhtF9QDMMswTXgXyDfCqgX41Rh5xRJQy4q2U2jyA4vcWbQNjtP1d52Mb9yH385pVA",
  "key29": "4XpmjKBqX84VjpDhBpkPdN5H9XLfraiYmfocFVmR9AzvEZoF4QyqctzUhFPGHRgF8hCoxZ9L8F96L5nMLpNCCyfD",
  "key30": "3xapcmf5ewWrbS9PTnMSCWRRAC62yhrddj9PqztW2dhTxYmt6Kz3hjHXBAJfKaHM54X4niosJtfRMxCf1Guo1h6i",
  "key31": "4PxCSNeYq62a4HiLCUxvYq5UihwXB1xCWBb3SK9UNCAUtDEWK8WdNcNBPhSzdQHaRjusxWtqFSeWF1qnHejU7qsa",
  "key32": "5DM42o6MxNRcAduoBPNCjcKtnWXfB4ZB7nWwLYPV4mH79D69wDzEfLgZzd7jGBMe7RmQchvCNVmzpzMKe9H15p3M",
  "key33": "2A3KoJrNmCiktHfFMznVkAoZkpRKrXnbQZr5cJSGbPEicHjHDuckfqgtnNTsoG1EhpZSTqUQ6AKtfdZ1DMDZVXXB",
  "key34": "2ziFqdrpS4Repg6vHEv94DNhn126ieBgfZxzkYa3tHYsrJi6hk8tcd6A53Gor8L4aTZNwmmxCY2ejoCE8t7EEb6e",
  "key35": "3HLHU6wyBgxwYNmSbZoi3kbzx6sx3h6k27SvxVt7EbzEEfSZVhQz22XnFgVxj8XyhPjXTiNfUNrTf3bwTJc6STNW",
  "key36": "29CVAY96MfxzJfiSVTpH52g1dx7uzz33gQqP67YQdBYcU3uJxGG5W6eXF88A1So5EvPttX3rQK3VshthSXn8LVCa",
  "key37": "5xwwmfUo62MoYaQQKiNB6RQwKh4igyc8WvhaNGTmGb63fNjQ91Ejk1yuQfrBmqZxMoUfQ8c9Hf52LnFW7mCYGG5Z",
  "key38": "4DhZAxwpJz3n8fYUhpexqKEBVNPimeqH24bdrwpbwxw8WnCw2SNtQEkjYMEg9WiZUy3mWvWnHWcLZjsSUyUXcnkT",
  "key39": "2WDPPEkg4WNewGkKetMHESsHBXrC92yGPC5FDUwaybjxLGmvFAkKYxj37PQNwQ6JMs1FzSbx77AXgfiJ1D4ebb81",
  "key40": "3KRaGuZYJC2Cf5WjJoK8ywH5s7GQkCYhoqgYQAStfjqRTgqPBsaqe6LnSvWNLzMweN7rB1uUDeuh9kPWRrzaNVCM",
  "key41": "2tADXh9eH3jtnFqJiTxr1DinDjEfeW1u9Utx5UwWSYopaWtgpJ5DbKwn9xM7XpgN3vB6ciM1bJF9J39EVpAMsopS",
  "key42": "4sWyrMfx5QTxGNWR6xsZtFegKR5WBKXp6VM6E1WLfzvVSfvU652dyfEUzQuq4SWqdSC9aQTVsJ699KURDwcqXsXR",
  "key43": "368ahtWXWmUMakNVnG67csresSgSoCVQjxnkF1fuEzfYrcTxHYWbNhegBW2hpxzMGG547yZp5bhds26G2EKxGjS1",
  "key44": "27oeNX7NEz1s7C1FkrRYA1qMUPGYSFeVMSdw3Qx3nbHqE7pJfzFGXBeZtfwT3YucvA3Gkz3vBrwWx7E67bvrxgAL",
  "key45": "3NPyKAFP31J5fSiHrPvdoMgwpxK5AKT2YhsyWoYnpV4jRmfTi3waNuT4UN2x1XVvwQAgzFKAosDPrmrG74MFrFB2",
  "key46": "5jBk4VX6gp5UT7h5dnN1f38ufnVaqXyL9ApToHmacqAiL2MYxwwFVTNPBZyoxRUe6mYJTn4J6ZANjJ1H1MuadNot",
  "key47": "2eMoX2jWFoR7hD1rykwMLuYKAnqkyVswmfFncZ8F1s6kC3dCCsmGk8yLD4rMmbQSvwvQoMC9D2nfYaZSoiWvFR1H"
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
