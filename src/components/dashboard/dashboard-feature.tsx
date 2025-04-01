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
    "3czymg256qzu6odzx5NHcQD7FdiyhunkHULqLhZCGXtsuhfahkSQrXk8kgbKDReBSUAifMxZwaWCPx4cBbAnMv5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21n4A7Ru5Fn3m21dV7xPYSJr516745jCgdU3bmg78HKDY3owcJHFuJXZRHFKVB6TKZ59t5TekhuGZpzHUrDamPGM",
  "key1": "3AasaFvqzdAySDwpuP82U4gTCTWoh8uDF56M3qF5RMeLZuYbhdzk2CXt73yVSyKry9K7eXn32WeeDbixXodbjEmP",
  "key2": "5XudtajynEpBGPnoaFGZE9AKuCVJ6rZftLp2sfUsnNd7sZuWD3xHYRh27KsYeFv4GB54GkirLx1qawT6Gfk5PbCS",
  "key3": "3WRJ2JtCLH3z4LbgLrA4j59ua7H77gLuGARendqjzdwNGfj87gQAvQ6cPfReh1ATnaPo5axHLhroKedrAipgFpVg",
  "key4": "5qSHKF56Du1w8H6CEsRyuqSTy9orq2CnSsGJPyL4Y1VsTgePjFYEXQfJHi3KFN9C6NrvxWCcMjKyS9SYkEoJeNqB",
  "key5": "tk4rW1qcsm3cC1ZXiAZEkpdywiUVubX8wyu7N6eRZRsaxeUioP4v98nJgtn9zjUZpe8wNbuWv381XS3SjGsqgbV",
  "key6": "2hSZtwVxh7j2HYCk9fj7a12dYnWhsAyhffZdFpEgnLs45yqE2F2igC5TUoRE5UwxKpokdbJEzqZbjhpQG8C3BYFC",
  "key7": "SaE5VEbTLx4tJkFqy8kXDAE1NTEqMZvsUmypS8ypfpZbj91DyXJFBVNMtsbj6iDgQSBWdYs6pUAnkUrH6y5m2s3",
  "key8": "3KtcxQEpkpL8i6eJdjtDX1Kd5A9R5aRq2fo5FoskPEAxEPLm3Ufv3YNkJxtneLwhQukYV5MLbd67urTVHasPqomN",
  "key9": "4QjZxP9emkLWJrG1q1NXWmNauJduZkyxXUsTCGUpCGw5dBKciJZPvHYKWy9FvtWiQjyugXp6io7aD6M6T9dPYSkK",
  "key10": "4zmm3dmQuKrRaxKv2pyBX2QNqi9tfiVrb3opdPatPNdyCDcr6epaE4A9f3DLYR2fbUC5roU2EcqwYMkT7R7D7xTU",
  "key11": "5ya67qp2ikLxpfUfa8sPMBritGsPjhr3jVV5xGHMnfvwALkjCChvnRZZFTc6Aat8tddR1iKSoAohvgSQ3urpG1TW",
  "key12": "2hFYa1j7ncSSz7xjvQDVG8AhP9GQjuFd2kEC1o1Gawcg7dDtpFm8TUMqSVsw78pRqNrvje2ARF5fsFPwmuM9B4cF",
  "key13": "MHLJk37PAeBFSJGWZEn2VpBFWq5YT9LuQLQr2vukYSttHtfko3Ai83pdsu2vTkLdPrvwms6zrR3mqeC55gyrpcQ",
  "key14": "2bcmXKHhnYtLUEkD2PyJZV61WFeHh9RppVPyxGDCGSR94tMVnavKHZcM4Pe3yYmw22sn3AtBorfetmZ4KX5mTmeY",
  "key15": "5r3CwrALq2SmR5EQ8NvyH8NF8gbhtRnphYekxEyVksQwAvYmJUDVQGDeRPVaP9udHJMfKCHaeNqDrKSpj1k1Uodj",
  "key16": "3PBtJ8nFhquKsUYrDoENiMcKFBrMxv2HgGWa9eMFd2BvzhNpaT4rYm9BnXn17xipKK5e1Dom1ips3rJJt62GnWcF",
  "key17": "5HFK3TbgHURuJhtsTzbfkmsyR2k8ZWhX49J5QzjdFwzCkPLwcu5q78BaWdVVvgLq4ppcuKrh2GzPey8zH29h8Rpm",
  "key18": "34HXKFACZh7w8ckPAZKLQCcWDeLvPSmwpWPSGYx7ZtxMxLwcbMdpZ4V6UideCa6HVEm41ARpX6iyaK2GXJPPxMMF",
  "key19": "23jquV79q25jDmeudbvknP6k1AmNFA51oPDUfAXjuxdUx8hyWZQR1Dsn8mgmRnbgLL9NHQm5RXeHDtEqsyV8dYgd",
  "key20": "2JYDYcRKMnDwm2uNiS9bzXBcgaqH2NBEy3GsEzY2bSAPHnFoubUnUJwFQBpWdqeUiAMRsZgfwX7s8SQMZidti5na",
  "key21": "ATy3qVJPLCaJmLww3Y2DaQH4GrrqrMGk2hE8VjRHtk45qhKWpj3N4oEifJS5w4HVke9FnhNMPUKwN3nH45jWb22",
  "key22": "FbGyY4i4T2dq3ShRQVSM1bckdqmSqmh53fBRUbKRGaAbEZaKuBnxeGo7Vpn9wm8aruX8mLwQmVVfvSwkfkheUUK",
  "key23": "3Hmxsr22kM6H1WdovsJFQbRgTTg79imTe4vcrT4xviF1kDhR9gVMZhMgSnkDaQLAeWd4LeTWNSrQLLPQ6jwS4H3C",
  "key24": "5rdtZqRs35yegX6oB8FnjFPtGrCaKyGHknPHPqNjJ4dBXyv5bYbT6kjwW4CRjCmjYWEQB8EZQkLxWDVDsaXT1K4b",
  "key25": "51TMgm1ijBYaJnb1R6xdwKiRujro2hK2zSALnhYGKpWMoFrfwHVzEbMAFdUB7r3WUj63z2ngmMC5C4ezeByp6crJ",
  "key26": "3FePnrVLFoFsDvXqEnskwntECCer4k5j2t9ffZBuDFcRy7o6Ec8pooGF6tNj3wL3Gk1bF8SH7EMQJtyB8wcdYHyq",
  "key27": "5ZvEusTYAxoBDxnynro6YNKXkPFvc655XvCD7uAHeaEmkrruGs4UsebKE35gMsSZ5kqh38wEByRrH9LwJeAhLAH9",
  "key28": "2hbHCugsQxLRtzX1roob9P5VJ1er7f9EXKm1pvDTHSpoekUPeQdgXj1CRenqwQyb99iT53hdfa5dusRPt2SCJMey",
  "key29": "4poU26ZLe9xoXGMJSkkXDvDvnWpE3sxgZxEAypUNJZq2S41CS26q1TJSMCBtQWBiYDb9uEfyU9edzzka6xHwQBZU"
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
