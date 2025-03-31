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
    "3Qkty9sYmZcNSDyMdRzE1ybweyKhiVpVxZ4AKPrGyoDd77PMSYdCktgF6ADp3fVjBgQuCsiwXYdUJz6gqZXq79z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SG7vZrTYwSSjnissf6hNbUtL8mZR7fY6adpXqMiNpyugeTNBbq98qjnZXRz8fTrrXMmX8Bcg6G4X5721MMG9vED",
  "key1": "5tsGqE1PA2TuYyuykNs6VE8Au9iNsMYt6M7QZDPKeaNPSYb31rhZyeqGGifAjAPboDrR2f84UCbCWoKwj9eTwbqA",
  "key2": "5FV8GvbwfQ5WZ8TmBmLeqrzFSQA5XcwDKFybTb1bLRadSy9nRHzGbKziBp5DLpkgZ4kLPah8gPkA6t2SrEesn95c",
  "key3": "2amf8t4hjAFxXA3jN98Esr1dMJFCJssBYY1Kx5NecSpKZMzVpNamFTGifkzvPvKs8M4uF8CnfFLDNUepaeREauN2",
  "key4": "5sweCfEU8FkkJhECDkyiJKnG49kzp99TGY2HfqnyydegRRo2LPB3QuEdjLqWe4u8XnSTFGAsvgsy9nVxLBRwFd4t",
  "key5": "4GhkPtBQbWpQZNkHCg4LPMABqqKRjSKX7jKYmvzqJBbk9Mqtu8topVN3VwWeVSuCQdd3ZN16y4JUFZ5yQBt1hp1u",
  "key6": "2yK31aFPQbUowZp8MoXnSVscAMfdducPoDQQ8ydsdVKvviRcUbwivpvrivrVA8MUhFyXJwk692PDhK1Yw5tLrXj7",
  "key7": "3eXdL8fdBCGCQvZuPTvESYbubYg6HC42gQy29UzSFPjCe4xfesHrcfcjmW8TnEiY7iErYkMC4jqKRdvUE8jsnR7G",
  "key8": "4RXJWqDP81B669PwojVNzrr95sp9sgkLWu2JZUaH4Af1rngdKk6ZCKYQxJ1CFYbS8XJj3KnSszSW9zYk8RwbxpS3",
  "key9": "35hvmNjmiywKoAAEw9Tkh2Qp2YHv858aF8aNa1QUFWBsjwpJxdwEfuLpL1tVeDtXuK9W6fMMW975vZRW6akYMERd",
  "key10": "3jmK9kspBqomy5KnbyJX9Hodfbgf5MTMRsaruxCVeVVjj9ioCSKHMd1gNekBnnxkU5NwKimVNBn3MvMdGqvahFeH",
  "key11": "5Y337oVVZXweHuXWkh2VuJ1eUktWqF4cRGwnZpxN5m865DjjDNexLuep2A846zqj7Pyn2Ez12Tn3PbfzFPWuL17U",
  "key12": "4nyj9oUFJXnRgRqXJ55XM9S8oUHsHYus4vgYPadc2YNCrHyXmQtYaRsmLGL2drg37yDxMfrPXFV15DFZuEq195qb",
  "key13": "3Td1yxzRtrZicuRjDvEn9acx7yMmVF9bx9XW7idf4pY3hyt3f2AeN6Rm5rAtcNj5383R88xyrpswnAwznoVFQVYv",
  "key14": "5TrQ8P3iQbExFm7ZbX58gYWdyqxbr3rTvHvH4z4Cdcei3wcyLbF9NV1vVdiHs7dTyrcgem5gpkhWguU2EEZHEB7i",
  "key15": "4sy9Bx2D8D9ek3EhZGqZhzeNe5EyXzrYD394cVWjKWcoVvAsu9irBs3jMdAk569Mx2mv7RMcHCjm8Gm5Ppj2pw7s",
  "key16": "GyZz2gnHTKDWDNxw52o4V3KCGyBPxCDRzSSNRWtWnAGDfXAJDF3cmso7gfVCcK4qgPCM1PPfN7rbfPGFZJ9Mnb5",
  "key17": "MPQqihnbSLU3Smyi4xPPkXf9hkCsnwKPEtRRwnrTx4Q193pHNcRAxa1eBLJvzfKJsRA3wtTtb19npZwpSfzdCto",
  "key18": "4Zyr1Cec77WywGmyXjADM2Vo3MuLedVBqSyssUV37CNiggJ5BVnQLrDLveWiVPTb4feuuN2MxNsHNEnHtuZT3Sav",
  "key19": "zyNC5ruGk1m4vQGsr2VgNoTgo1q2Cjj7zbYVN6TpYm5yQciUZyjHxV9TNnLvKtfyhhWD7DGhuECRCLuVttZhkch",
  "key20": "CkgEhYRb67pJNAQVbGoAZkD9L7ohwDkRjpryzPEi16RTVqBqGgBWxFtkD7rHzafq9oSfzhtUj2zUQQjzg2E6JUG",
  "key21": "wVpxTDzuY8qNsajXzSc9iFvf24Rzr6Wk7ac1nDtq22rsvb11CWk7kuAoivv5QZpbre2CpSF6vW3cdYjQHnx22rG",
  "key22": "3RG9k5V7s4QiiB2krMENHtGDF5fJocDsXAiCyRuzKrCgogxraHpZ5vohWVbfEbsYkjeG1f7gSBNbkqMvyCCdcd6R",
  "key23": "3d15P1JnDz14fEHjijy2hNtzGzCJwDwE89Lcrf3EM71Paa51NPh7gjaXKvo1gkp7PE21dPba4XLa73qdWriZiweS",
  "key24": "43corCX82AwnugTgSgfVwJopKpX9RCeZKe1V2BxcKZd1DWAgzGvWCeBafUj8dym3YFNH9fnMZ46R8NhyAZE65Ay4",
  "key25": "2H5Xkv1CKrhASXcJnVYi85qr84JedKcpW99ot5M5bs8EJbJenDhtE9av7DhLro1Fb3cKSc3XUQ3UFP4f3hQu4Fsc",
  "key26": "26MrWohhpR9wEgNtz4Jbzn6nRUssayqKzn8uyD5tGxJyeLB1L4wVFGLQagmccRGJoMbwBCmDDZySo3j44yV8r8nX",
  "key27": "3bh3hJKo4qbjffVu1n7i22zDCnhdDwXBeQZdbFXrDsa6RVGJwFxvfV5tdxTWLvYGiQQP9fL4w9ZQjgnYnMnja7tu",
  "key28": "2Ph8dVQKPEA6rtkoHqFMn5accbB2UmNjxsWHAjeUScpxHEJowAYa289rvZWE7bMffTCuyXqcCZSNGiefAtapS3Hd",
  "key29": "2CRbNVe7BFrYp7YDACv8az4HD5eHVfqX2WYHyETkgCc35aH5vHc5fA1MGHC9wSh9Ck666rBqdPUf19ehUjdKrpXB",
  "key30": "3WiUq2gEj8ktsSozKX2k3UtscbRjPCxQ36M5fpPHZ74UsnxoqPzGTwHN2iKCmf324ETnKBWgxAhw2eYH4eBEbdRP",
  "key31": "4DLH6wxcnHkX3gs6wRRBskXecQtWsD9up9F1dvCJk99ozNc7cxq6jzYuAKTrRBCbB3xGyHnxMf1TUhF4Ga2uY7cS",
  "key32": "5TKAx5pfk4Qsu6QZb2vJrENM23ENmFoWYrekrwJmtDnfX9esfXQqqZuJgDM9xfG7hvrChUf2q8sMRXKPYgW6BtEi",
  "key33": "2vyKCSCAtzBQViuYggobFx4GSvfnQZj8DrG4ooAvSfxNzqNzVBUxG118jnvGDdKcd5GKoqsxKcbkBLkaTwpp28At",
  "key34": "5bmozY43HDeFSR9KhxJDnQ2tA49oEbYEwgpZEezfvxANbLXXEX7kYyQxSbL1GeqR47PpJ2KE3jZHBiz7fmV2AqxG",
  "key35": "3quE58cpqcHPq2V8MFPxjncVJtwLbTgEtXm2hvpgQGMi7wBQ3uZG9vfJsTDy97BQWtAs6p4ph3KTM3cWf3wnH7td",
  "key36": "kBBXGDfU9GsHiY7ckaRBVFaj2LoPzjueev3hNZySFGEE6tkW4WnsVLH7iySnytLWSj34BNRqmUa4KTrcw6rivAh",
  "key37": "49YEpRq3EExVLzaAKoEPZcxHYzfQXncC6ge1ow7fe1NJxLpYA5HYuAAegBh8iyJFWdjchQNkh22nJSXGiYRRD2KL",
  "key38": "4Wftryo83dFyWPchpiqTsd7BrzgjbmYVHEUfEocgZtTSF8ADS8FrQd5C1ix6DusrnejfP14aCEGHi6bAnQSBWZ4L",
  "key39": "3VvCx5U9CKLujewZBMuHe7PQp9fuN9bPuL1WjKQKcCntyzPum839aUU27L3CG12zZMHsJwHGcHC157rHQREJ8dJy"
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
