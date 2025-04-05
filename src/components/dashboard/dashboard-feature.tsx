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
    "4kp2x6wpLpZ1uDhb2fAf8EJ5EpKbgAXSUFHUx42Gz45t9HUohoVWPig7my33jJqMRPdnYEUHSnwqqcSurXvswMiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BvaMauAonHNzXNokTvPqfNYmcysQofpskgTMpA5rqGsAYGzapRffbSs1SFdKJSnNuB8RD5c7xbPnftdfKk2CiBz",
  "key1": "3z6jcKxc9GFmRgnzNPKStyegYgqZvTdhkkeS48BdJwUkwXPuMmoSh9saVqJYF5VaynB5FSwkUrZENJBTN2hbiHMB",
  "key2": "54fwwLnVj24K6ezTU2qAZdxbx9YepPhL19CnMotpnacsQrNhtTSuT7qY2qsnPxiiq465o51Ruw7JEboXj6uymmuf",
  "key3": "2cmCzyg6vvRQ1dj9jCC4K3WhAKLxYzttDdZmxvRAc7NfU5P3HHiWokNVRuWA3kvm1r4ft2dgcMSQJ2cCCCoeRJVa",
  "key4": "2krCfFCcjwZBhXnNiub5iNifaAxM2WgmyQt48vWqfJEKoDrBhB2iR9QMjQV43Wd7jGJGc2K4DaGzSx21K8TtSDiQ",
  "key5": "5waUvudPk1KGbNAUqecY1L5nRJHAggEW2To3ndMBmHJFVTT89FAx4QDjeWsRhHjrCEhFphTgTb96Jwm6tQDS5o4Z",
  "key6": "3RojR9EHFyGUZiuaU2NPx1VAmPhRBULgrAXLVTaqVimCWgVdkHkToT3Y8UjNnqZzxQRrW4796eeAXv8oxXZjLZEV",
  "key7": "5MiauWY3HLDqg8ifTytAbHush4iNJvhVKM6zy9JKxTowbDRjg9YGF4xmGFMgQwGHQXo4KXzxtsLoHo3WTAhNtRwT",
  "key8": "EUY7zZiapXpY6dpaeaRFm2iAYarC25St4tD9Rft3Rk9rvAguEg72RVNY8AZPuoKGBvB6D7WAS6XVW88thRybHCa",
  "key9": "zEm8xntDGwS8CxohSfNmQyTdswnBXY1iSamRjZiqDe8hiMs9bxqCgopzLhtkg1DveseoX2A23jd9bi7Th65P8rr",
  "key10": "3ziPx2QDf9ftjPqD9CKcf1E7KetKFiBPAQTxbUmNxAz8XrLQJYb18XcFjGs9jCXA53prdoW4QWyXDq8xqmXaffWn",
  "key11": "64EeeJQe8yafkWnLWGwRPsbxXuhBweYLmQWxXbtd7Puwft1YNyRCDNqtazSyAQdMycPZgHqeKDkyDqFDxRXH6zSQ",
  "key12": "GS7dvGTi4zFe3T2Juur3YsriyEphpWiJvz3MncnVotV8rQAiBKck47k7eSfoCJhRYe1iSFeR6GHAbm6de2goEcr",
  "key13": "5JGMWJrFgQyptBksJUqrhitMaJsKNSfZ6b2WZDQbW2wW1dyKYmC2o4LX1NGHBkLmoSkArFBhi7EkKiCbzaJmXi2p",
  "key14": "5Q2vkfqBPdhEHikH7BfLStD5bVvwCGBYq3sBRDa3kGAGed8tib1mb41mGyXkq2VNmCsK3cKdxKMjedfQD8s6kuKL",
  "key15": "126Wj3YmeqBeBCz6Udvk4ei8nScp4kiDHw9hhRqvpRqtNSVnrrNbck3LuvvHSthSdHezspbwUQvg8s1ccGtAqfmt",
  "key16": "WcBWnqzJ3Ss6uAoU4xV3r7Bq5ifqAFmUt2cWJEhhtAddfYKedMDvWrmxyonYXJYTMrDWzSi97avMm9vtpVvv5zL",
  "key17": "AmVyRqgiv9JkHMBqm3bnzqdoARVUG3e1qu5s7mfcaBUQujzB5ziNS2jmJPmghmgkxgkunVihu67t3fotA9sLS9A",
  "key18": "4UskVz3RAinCYqKVVomiEow4bMmj7bNVDiiZ53jWADGqfx9EKvkeUrYPzAkgCHXVzpJfmQq5MhVpnZ31RiDZpbZ1",
  "key19": "2GSDsZvyAv15AQYPrDjyF39RwCvQM8123bAFLB9mNscCdssAmVHuTWnYgjdMtjPwx269tZVc9CxKfvHAgXJGmLpt",
  "key20": "ysgJ3pZeqTXEunmMuuhxSxVujTA7PhHGQhXs4WgfVkCf6nV8i4HSnviEcNrpGewMgEGJ6Aziq7rGLQgoG4WzAa9",
  "key21": "2JNGeRaKTpAt5CA8HYBCwPcJBTepmBgx7iyK1Ky8UjnCNcm9pQQUgRZyQ9gh9pSz8pqB91U4nPYaRDwi2Hu3Ndcx",
  "key22": "EE4BGP6aR4CUE3AtgyrjNC5ekaxB1HZyNYJSC6AP72pmQQHj7bJxX7V95ZZ7qKkQPjZJRZwjBiJB415mqMXmuFu",
  "key23": "4kvg6Hn95Gwy2TswKvk6pCgK4eEwaEk4xohiXV14z7HEQxRFZNSWGqfUzyzw4TYWL6bch2zpDGCa18B9oktUkXWc",
  "key24": "5uoY18k1hCtTDQ744VwHu642epFin8ECUXzW1tSfU7yjza5yiC7h8VSKPkvh8DqfhtC49oMGbWGfeJqtc2kKZuPB",
  "key25": "2q6AsqvuYHURimwa8edg4ptxij4hxhYfnkMYPf3Dc97hF9vS9xFzWEWRwTLdhk2WHa62SrVsQ4BXGHUqQY6w7ebX",
  "key26": "25TatDRD1RPU6tWQJY6mUSQz4NTfKsA3q93RBcU2kUbczAcPJ2XNjpFseaKXTPgowCKmd2SdjxY8QZb8XJ2wcz9V",
  "key27": "5ZbEa2aKKoRzMuqFcqSoeqhhSNay6p9M2e9LXkx2nYUTbaEExJky8becJ5FnAhPfPCikpHcMr5562VqxoPKCD38b",
  "key28": "bTZWup9pcCnCxSKkkapn15v1tiDZEfJjWF8Xr2cUD64ng5dUuwziccGyd5uiD7HzRpLtcqXucodouCb7qtqQdxg",
  "key29": "2LzK1RgGcDXfqsU8r3GFfkJDn7ShFuVQR79cRQFZYS2CBdjiZhQRPYEDghu4QipZ15tm6NhnEhSNcamu7uL9Dzni",
  "key30": "4y15Hc63bfTTQbxfbSoUu5BDUWcokiKG5jyAXZFxHWeCk71yfA8UyFE3FqCxghoevAaa25dVSQgeNWLLb6ESBqmH",
  "key31": "3nhPKJaHCWzjHCJAq7bYdNrAPvswdXZ7Pg6WFDBxpkTGQ1kv62VnsJHv42vwjRgL5UV2uLRPPaSxGeEfr229mPtV",
  "key32": "3cMVc2xS5egPSJk7FUNszA968aB2TDHUZi4aWXKFCLMepUhWa5j1v38pRnbv25obhziwMXChaYtgGn7izUahArhb",
  "key33": "25HGBRpUGUhb9GmcCMYr7zSPAoH3qAZ3i7WfDNYQ1RPhrvCehvUUg9enS2ukYt22Jd1jnPLVpcVB1aoBYgUgwxBT",
  "key34": "3UQzraQzLbgAUWKJc6BCPj5Yvk5gkUsjqcvPxp1LuWAYXUo2tpe3J1o3Cw1vP14HSoSRBYAZEoVa2cuKKSWjNgfw",
  "key35": "29xRkivoDzEmfDvxpCFvKBFFS34JXyxcvRb5RnWGrdfBn2NYQvByhrRwbRxDigh2SzivWaaAZ2iRaDRmZWbCqL5d"
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
