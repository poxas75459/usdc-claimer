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
    "5CgF3RfsAuSsT4VgibajDPAkALFgRNMUFStH2JH4BdgYqsoaLNS8BgmMX1GSbWbTifLyFPLUAYdHKM9ZF88FFiEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwXRS4QZNUj79qSaHPaZN3KzQHQXbeSVLEoHLvXxX3M8KuRr2P1cXYyEcjdkJuLrZ3hRVPE5obdAPjsXwpAipKw",
  "key1": "oTMvDcjbrNNTRc1cvvBmTZbC7Vtfzg1riE7fmD6JKdijSid5969Mq4y6sz5Euc4jjqW3CbJ9cRApobXYJSG83N7",
  "key2": "951mpUSRWCvzWZyV2un5eKcaB9CVLovo9j46UHQSBeEzCkAMwEhVBgPtLAQpLHNFtJr4WnGpAYz3LmGx9AGqzm1",
  "key3": "2MhskhF1DkxiofYZ4ggwCv2kdrYAVNDmaa62vfNZKuB4ygCSrEA82UCuwXUFwGhaNJobRJr1Cuo5gZMFhoQfCost",
  "key4": "4xoF1PxtyKiFudLFz4fpPfJzWuaZiZJwQdxrSAuWiDAhoemZpi7FiSRtCQ1rPLFxTkHbZK7C4PGx7aAuhycvAaRk",
  "key5": "5iHLJZZGHpFUcuWy5JBfpAf7TzrXPWS5CZcAuspfAsKBVoG1dcg9XVMsmvGRstumKSL4m5jPjMoGaBs7DyUjGKL2",
  "key6": "5VDGnP2URDpK3gBE7vTAvhXRRYy1zhGYiHj4YNfng14p4G5QJWHPG446rQuycyMzevucwmp9A5cpRNUxfnNi52PL",
  "key7": "4wCHpnwwKCxzz4vAuE1D18Jbw38oiCeVgih7U6R8TX4r76ST8YhAn6iu3tucBrqSc2cofykxdJedAoMy3yiVF2qJ",
  "key8": "3UaCmY4bz74zuQuPvLqbESd5K5fTcrkwWGr1JvZRS2ogGQtuyR7KB57kNMBvSsxRXnPLrdZHvVXi57gArk9GpMia",
  "key9": "3Uw84StqynXBc9VQPt3sHdD88midhaU3FQveJmUB9USzBzuRyacXvuuF3w8FT5FegztSXgsoaKFpoLPmygxHNHZS",
  "key10": "5JMdUC27tAScowCr9SN8Pqm4qsFt5XhKpu9dECqAMutfbjadVzmWntQjHUSBevR4vkaTsFbG1udzj8o1QRqhkku3",
  "key11": "3mDMmDME8J2azx1dTtAUhCfsC61BFRLctc2wnQJ5W5MaWGGwACGk4ixeBFBvoxmnMmDwNtxsXcmuURbnLKUayhd2",
  "key12": "3YtPffPvbmEQAv3hkGP9GqDf4RackNSJBs9d9edTeEVW7waoB7TyS8hWXEyW5eJKrnrn8vMK44uWiH34LYLa16Ra",
  "key13": "ZBnWWW3RVaTtqVzQxWttkiD6V7nCUZvLTp98wG8h4pdGVt4uKnocPRUJUVJTTm4SuwiT8dvCfJofJe8k3HGki1U",
  "key14": "3c4e1wQW6XrCXfvkQCEeup1inEybpiAH8U5eJrbuU7wovqbWq36WikPoGV7SxBdkJ5aiwVUXfL9TzPPZNVWZAyjc",
  "key15": "4Adq4FMYsSM78hUmRjhSLTTKTaFApMW5Y6GrrDXEVEozeS2AkwxNiSnNHvybXXU46AjFMDwwH9eyifWn2mwsLv1b",
  "key16": "4AVBvjGmHwm624uHByG4hXwFYsMrxaWPdB3B3X17twPRrHva8MEyrr2CwvaVaB7WwTVg2PDFcXAuhF35ong1Pn3a",
  "key17": "2SStX4VqNoszpYq3utLeMDKUw9Bp3GLEs37ZiyVBVNfFTpuykLEv7CNxN2hBcXzzninzEJH59U6PM3zXdRdk3zs4",
  "key18": "Syawb8T8PYbeZ8mwoheGVhXyWuTFKKyjxEi2sPJzU1RKFbPuNuz6iUVswmvPFWTCrf8iVDBi3smUdXZkdg1wTL2",
  "key19": "mZTwXBAB4LbRqTgVtEuviQmrG1XbyM4KEUcevBoFACUe5shu7UqkK9tyuYoCAtt4oKPg2t7M2v7ukfGGSGx3UXk",
  "key20": "54dgT4GjrJAyhYGcsQ6JEePzpWhkFahNbqRou6zFarxcW282KdLBJh7ascWXAnUcReJxKoRoprm73sBWC3iXoynw",
  "key21": "5r4PcSfF5ubjtTEbaqc8w8CQDDZedHZ3SvmFcxM7Kc7HN5pksj1qgN6J43MLvHP9wX5CsEqBF6rPVy1EgRPRfw8s",
  "key22": "4bWWcovAX5d5BiDbMsGggDL46XXbMRRRkXRehto5HX1LPbLy4Z7wRPPXrheDrm6Ycqkf5j1tA3qsdxMQqrjvkakf",
  "key23": "3HqwMw8mPvDQVmHTSTRVK4uZxmJzKnw97K2dR9Vks2VBfoAX6txm71fVnHKMsrFHFWgPFUj5XjxSk4ePzB6K9Czu",
  "key24": "5zVnehsgCjZrbQ1VYofySg9RL4mhmTE8VzEkh8ZuXTYk3CrbQqFHER8W2pQJTU4BabYyAQx4kB8pedzX65oVfvdr",
  "key25": "5Gw5DSN5gdDEJncyEEuqULkUHCLXosPpWaoq9TeR7KBisvDDDaoLnrY31tJG6iyrTDApvqpcuqXVx2SMTUssnQym",
  "key26": "5ZoYRgApwgmkPCRBEftv6VG9MZ4A7chPAPvVsKKochkcuumJwC8P8scV3u3kkimEoNVKYAUzBjbox1wxk7sogfeB",
  "key27": "2rJgqrXLNbr3KhCNCqJGTdemNsY6zjEbup6TGSu3LAJP5dN2X42aZdWtmBs9GafLFG4NcR2d9pELr4UeBgDdAYJh",
  "key28": "5cAS97EE6a683631Lga31x9MJqP1iCzA1waqpEhYt8CKvEEmNCoCxQn1e2V2kffGwLZMAt6RwmXHXVuLAbu1s2PT",
  "key29": "5Hw21ndGgfBdZ4mDSzrAEuhbRmrKehDrJBas8sz7T3W2nUDLcC4MetcMXqxedF7M4idmDvcxkpttzPayxQooyCZ2",
  "key30": "c6PGGScu2EQgfwvVTBNiCa91dnPtysVWsi5znatKiRsNLxhJZfJhBwku3EMwUsan4uGMYQ3SbtQoFejB3oRk2ur"
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
