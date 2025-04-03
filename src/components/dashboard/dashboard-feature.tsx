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
    "2VQTVwzPBgW4PoCg8ia7NhtR2JGm2cgSBvYwxdtewACz7jy283X4XnX5CNThh8qoPU2pyYJxhUhiyZWzktJ1P55T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTRe8a4THVoogZr5ftvkuBrKFjEQjF78giKn6jNpNFHXuvjooLWuFpLLo57wfNMPcLRBVpGd9QtVqmKBEnvfeyU",
  "key1": "66DJKYBR356UEywvAMf3GMWApC4QfrkLYbMX2ocKjBg3hXhXVaYbVntRnNfFnxTJdiCudsqY1MKCc5dtji8nN2yL",
  "key2": "3MXTd4bZG6mykJgKSgbdryzYu9RrHBbV2ifn25Re2UabdUZo3Gr7ngyvRZf6H1J6PXyk1YxajXQnYn8wnf5dXWFw",
  "key3": "3ywVCu2KHMbwiH78crBHXx9616G66esffSPasxWQngDS1Zb5PabJD6DaWsUxk2bZ9tvsaUukeYdcMAvzyf5JGf2z",
  "key4": "3Vg9tjykS3s3Qa9oNuXYHA4sa5KCeAnUKk2ieZC9QVJRGAr2cwdDAMFe1rLNDXccwHfa5ZoGwvzYdg9Cxq6uG7ax",
  "key5": "3Akq4L4LKJ2EdfqtTQ6cPE9V2N1j7F4s2iydPTJPbcnMLVipEmKgHhjcLpaY55ppcoBEaAHGoVhEpuicfvivkEMa",
  "key6": "43AFRD2JiQ1c14gDx2aSfZBnCMEKDBRJ74SYnquFnrRqW5nrZoE59hNgiRAqHY3TTAruJBv7YJA3YjFP4VYvZBki",
  "key7": "33oGg8wdKPcdQK1Kstn3N4SWuY8Ezi3HAu6MYo6UThZWfaAZyrCKVfBKzGpMFFCkeWRTFRFeviuGwHcLo4h7EjsG",
  "key8": "61pwxw9CQkJXKnb3Fx6q2Z8HnFj6STYeAYs3orCLWrFg9seN8zjHeVzVsrumG7gSU8WoSz2yHifntvy2TyaUiEJe",
  "key9": "5LcAsVFNTTzx2ft6LjyQCSLnLosoP528ibg3hc7p8xSa2dqSHFbHW3wLAQ8FnkCHF46KrdhNEqGHoh1ErPXDa269",
  "key10": "42A426fwQTFwCGza8ATM3Zt787oV81dUP4rreJaMqDAUXp7Fb5XLp22hY5zVmCc538ZPFaT69k2hssEc4Lcqfx56",
  "key11": "5HUGAv7Qhwh9khAvEZWoNUmyKncGn9R25JPqDByN7XADuuoe4tjzTLnuiNFv5vA9md5mb2eaDPNuzM67fW8UKJUG",
  "key12": "5sNjJCwd3ykqxYvkv1Bc6EXP9BtVeXuLzgdxASRw3rbgWBic5nwTTYHt8qKtYLZbF4bSyfwDEXodp1cJEMTRZMRH",
  "key13": "soKncF16zY1xdW7fkTcCZzEfP8bepf3pgVBeixFpyfY3pxNsqbZ4cfMes6eunGGxgDuTxWjxENCoJYm82uVpYUB",
  "key14": "3p13ofh9kMLvAPS61uvXnmBG89YeYSEWtikqUf6TFkNssADPY6qZDdQXw1iV4iXQ1Q62yhf2P4bGdd3bg9P2Zdge",
  "key15": "3x8ZpMtZRDVYza4kprhsRSgqkMtFEFnnyqay3Hyn75p4qc8Brxxv7g4XkswFTJhnfT26SSDJrRZAfFfBxP5FaGPw",
  "key16": "Jum7aQ4yjrX8vcJDbZz7CpEgzEkZZm63cvchRadcKjgfP62jHax8dspnGamwQAH4ZMZFswmNeDF7U61Fwmk9TW4",
  "key17": "3wcTa6JijrN3rdzLLxYFiGjYYN6swk2vRhAjFojeVzKcJCwUCTKPNc2Cz1fw4MBEc95B4oQFzyFLNoJDQ2wBjdqr",
  "key18": "4taBGZnSAeWHgHvoGYQRdpAzzd9bZ3SHkATB3Qqo9Xj5QrbGFZ7eeAdGguzxpr2STNynXhQGUgi5pAUVsbK1P4ZP",
  "key19": "DHKo9Hhcm4FcN9uiPUsAJoq3Fgmjzyj5yd2aTtuAqzoyfUhtdbBtux3rmcsPYqDRWHBUShNexaQpr1WDS8CukjJ",
  "key20": "3rGp1raN3uuRo4uhyQ6XoKZYNRkePueqUoSYQ2PRiobDUFRQKAtBEhgrxaixfQxLHgD3WWycbr1jPUreBGU998gY",
  "key21": "5EexgNXhvjWyYa2Jomf7JNNH2ijxTN3oXPg7psZqvneEfWVZeRa9r32mo52RfpVEcxBiXgEWpMM15gHPbGwjj9Ez",
  "key22": "4aiGjBrXhbW4gamWZz6E4mwpUbSNtfutPMtMwmHCgDcU1ufXsYhkYe9ZPg1WvcaTRdUXbuB8vMpXqrtCgPkj8ffU",
  "key23": "211u4kuTM4Wua7gVMfd494UUZk4hjFvMfLsm4zPAazbLf6ezWRicbBmXo3a9bh8gqLGxUarmYe5jMw4XhUuzqjMR",
  "key24": "34WS9rLzprcvFRszE9EVc3oTgUYbgT9t464A9Q1giv2UibMqfUkpNi7a5JXRh9mg5M324MEbpBg3XCjKGEC6mAk3",
  "key25": "VRTVzGkDuZ7pyYvtEeG8FFN8c3vbkmyWrkFLm2sBGFXY5KiRuzpfzHxaqydDuQJABevrHkFwzkaYVv8bFZHdiRw",
  "key26": "2pK2EMUPQ3xXKZKKystxAnPiwA5fqsmyU9ENxPEZS4pLmcbEntakLRSfniHd2snxdwEsQ9eCHQmaSwcfbWrHY98Q",
  "key27": "2sdksTaFNv6ymGWeDZzUQsix34LNA28KpnLR6GEWuQMzEZqGCfhsm8Hq8SL6fKzM8guzGUgbPe2dAVLqrZ8sgydX",
  "key28": "3Gd2wwG9HjDtQkzGLNp9bgCWJRDxxby6cZGsLGrXPm3XRJSew363iDVSPQbbsLTbQ5xRS9R8YqNFV4u3w2KUAejA",
  "key29": "LxymH6egnxqr7BTLbby2brxd95ApgmyoLc4oUwRtEMfioajcwwPNjZEswJtDMFdmV1PVf2vHVb4X67zNxtnsVtk",
  "key30": "JBeVgc4BLApeGnUy4hZHSRS2yxdkwwxG8eh6ZSUaUyaYARC74jMYGRewFwMZjkQamQEHCmw2SdfEsqafjLxWeW9",
  "key31": "3zJZMk3hneYcNxFDawjBt6wqsXPoNtyK9h88YARPcmHQHzgJtKZZwN8oagN42YCXEUZjPW784Uohk43XJejjG1UJ",
  "key32": "3YjpC756DwgYGHw4wS1nS6D54jXpxqiFivX8JFAgd6mCRqooezRDBxE4Sk2JHSmZWZdJ9L446C7wxv8cWBQ11CQz",
  "key33": "3rh5n25DXodWiVDfiLZuMhTGVHkj4LRSzkA4bJgXa7RfH8KStiMWMUub5Zcr5R2ekcGcQNs8tqNpogbr9kC8o2GF",
  "key34": "4T1XemgNBskx4HNZkZ9DHKK54dBWLUGJ4MHEVsrb5GG5mXZdQcfUfnAxJ7b1EiVQRatm9SE8HwYmuooVup975phz",
  "key35": "2hFZt6bEsfx67CfM5y3oamxKebRBrrwPS9eU4cL7XGRaoSwvjiU2g3scjLpLtdo9DbZ2qWjpnmAQkQ2uUYeL8odq",
  "key36": "64oZ9jHRKYTR1hsYnHcUjUNWEkjuLzH9phhNmpfbEwQURa2aesRpeMVCk79pnRZAwpZG6sCMg6F5PpZxazPinchi",
  "key37": "3pNqArpgX6GoL74icguozwYy6oh96zKw6q3BCWWK7xRP6MKvQtN1uWtkwhc2aZLgs3b1enwuU5XMRmVWA6GQFMDq",
  "key38": "3X4pxJv7GfaNpyoDX9ufyT6PcEzCF9qfhnMXMR3ZFjjRjkFzxVhGUH7PndJVUc7Q67UFssLVZta7FmeuKRTvo42R",
  "key39": "3o7SBRdXwsnhbKCMdvNZ9mYX9ZoP2isUDHTNtMTfN7r5ARamAS8kexNdWwKD2KPFJWzKWtp2GEsQ5n7yfHhyZshN",
  "key40": "3AVPZqXRvYhiVLbg3NFt2Ayumr1viSN2AyGkpFE2rPPu5Dka18d7rVdm19kLsywvSS6fs5FVmDW4ht4k1EPLdhWQ",
  "key41": "3Z6SRrJxDHUSqVUkdmQet4SuXJXrvfDJNg7gGh9EgMxyhSsqqHDZUuTZMNmHu4sLJaJ6RyiXx6181aWG3vwNBjQk",
  "key42": "54mpWPpFe2VpPnaBs1Daov6P9o1NV28wA33oEAEd9YEermcMCEqABV5skREKfDbgSE4rnCG3z7dTcwUV5zaeC58m"
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
