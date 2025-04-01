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
    "4wHRF35PsQy9sZodBN4w3UDNV7aKoWiUGXT8d5GCJBkXh3aDHfnssruqkhF7KWT4kLKeqgJQhMpzmADngSfeqwQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SE5ub2eMSX214va1V4b7Z4gyeGfuUVR4qqrzJahoD4GKdmSbrxgdDwwQFioP746yNytkj8yqBadZPPDLjQJyX1n",
  "key1": "27vEBPTc6wK4V9h2XsWf6bcVFcFovPR7bVDW4KRp2FmE8UJQNPzFkvHTP7VJhePuJYQ2sk2Ft4n6hAhj33sTS1Uz",
  "key2": "255VBovr78a2pXJzZnDA5MNLM7UJo5xbGTk9HToGNKvbasdUd1n1wXMP8ZzadwTdU6vbpux7vhRxnb6TnytKEoN6",
  "key3": "4RCRVkPNatcdsrs9sZMKLur38jEBK9ktAfxbdYpg9H58wQ3msXBewshtFEKbsTy2yVPyi6tqwCkCHwWL5LFqjVwf",
  "key4": "3oEMXHsUsegEPeHj1gLqJpK9BFxg9kXhxuPcYmSKLiPst4gGVqqeqAfaFXZ4ivrRUdf1kH5wi5owuBgaQLNM28dC",
  "key5": "VpMyECJAtNVBzNWH69k3PEcLnAokSALyBeDarjxcgooJAdZngCvbd3DtQg7r2EWuufo458Ke49nswyTxZA43cem",
  "key6": "4kcnPmsQj93QeCxEFcsAVL5MCwq4vzZukj6sVZD7nYFcQcW2aBkn3pkd6KK9RW6aJDtjknRj4nRZnpw6RhGsFmPd",
  "key7": "4D87EFhMFkfTaWxwHvz78og5mdzJQmdGNyGNwVuUE8QozGLgTqjq9PcUXWovGuZKY7NTcg6tGsbQDLvxRmFqhxBB",
  "key8": "2FcJgv6255cJDcgErScr5yzpbxZ1fRniEWi6SdMKudMaVzQeUZanYDo5jrGnUSk1JJ5Cz2hSxiPHuQvL95aLzJRD",
  "key9": "GuygGGcnGqCYz74C5jJQhiAL13FRPmwQagxpKguw1qinRQyQETH2eqsUHU2rfSRexVVZQsT7w5sJz7vNEBoUFMB",
  "key10": "65wcCrsprcXYPVc6EGmMYCqu6CXYQexMo4BsQgmQb3dFZJ1njdww736LZLTu22VDv74vcM5dh3m4LguRdTnPZy8p",
  "key11": "qBrkYrwsudQhPrMMjQCsac91CGizy4fnnsky5Y9YfV2qXziLcyvbjz52Yfgzoqu3cwU6tPFv5xdqPNfrcBRDkBL",
  "key12": "4MmnFH1uMkViVjNq4ZPFHYT1HS2QDRuJEA4yQ9gF43UZiGwZQ6HcV8mGiX5QfWRT2aew28R6CgUAiwSL7SyDRjkh",
  "key13": "63rwbTix44Ezpk6rfed4eg6CL4TieFMqCPV8HvcJMhjV79J1mE1BEJ2kzcNu7ub5uh3za7SmNDXoqPxat5ToagP8",
  "key14": "2MaeLmGqGSBHJMqK3nqY3L5pMLYUo2BcPe35GJhjRzpc1BybR2sqyjt7jNaoySSLAAi7CPWri2wseVcMY3JSgxUX",
  "key15": "3PhgPuCEVgZpas2feRDJLZeyxpmPAkkFpjMaHHiCiMGPXMxhB9oTmLjgZwQEkV3j5ziwiNRxEoKVZhB1pq4zyB1v",
  "key16": "JAWWRDSvm6CtPbi18jcjWbdqzRuV2ibGwCqEBY67MJao2qepYF8cFZZXXbUNBhp2QAvMnwhknjXYUmTx8KNMgXV",
  "key17": "4uhfWhswoJvjGa2pWZPsZycGsxeXnrkoz8RyQU5RRDCpBGTNM2jkFQycSitRKtLtZf5JL2TvN8jEQZobSyFDo61L",
  "key18": "64bQyqhPmrmxTaxFa5PrEqfhh36mMGfHcs6NPHG1uAagHPtAQPxqpCC2NWZQ9fCpiFmj6rMaUeEDaE9Wj92gsc7q",
  "key19": "4wvxgxnmLjbR8kb5qofJEYF27dD64oqugtrj8f7JZ5vsBHqDaayJoWkMcWgAdpHckzz9BpcsTGjau9CqneQXYoW7",
  "key20": "5tppQ6LjHsotdwLH36yxqXZvi7BaMvCwnsjAeZUU7TGs3psi7toRvsD7wZVkpUza9XSMyjVYEpjp7eaEmhi1QHj7",
  "key21": "K464PZ1quK6MxwjRPN6F29UkBvLauCooQoVxBr4J5vj9KtocC3fYbbnh8WyZYgeNxf6QD75m11bPczaxi8Tc3DP",
  "key22": "2btH7XkW3AXSCtS9D2ENFQpWDsPCubpyBpSVk9GAysAtjL9rL4EFaPnt7hNJwG45nVHrf1388q1e9BxQCvYZrm2b",
  "key23": "67XcN86JeCb9z7SvrQ38ZShxxFjizrGAseukUyn2vDJ27k36jcWkFkgmEmMHZU5VhnUGexywACZEZ5rshQm8spi2",
  "key24": "3S2TCJG54oaaLvA4dxXeMheoqJA9hiruhtfT9ob5vFpMEfgs1izcBUkfe518gC3KMcjyGv1qa3TQiJjh52dh6y45",
  "key25": "3wwSWQ6bm56yNCbyb2eXzGQkqvzwRSQkq66HvFgUigSh9SdnCVyx2p3u6kWHXGhckkwbHZY8i5xoVnE5pM9aP4aQ",
  "key26": "Pd4DkFWzKg7nG5ZgNYxkGjKnfeU1CGbvULEthunZQ3swkQhmvvFR99yT7xAReJo1uiEyUgx2bREHh4KtwoRoVfg",
  "key27": "sR2fptYrxw4qCScs5ATQDwrKDop9hqQ68vdbjNqPG7Gv2WXWHMwMQ3KC3y8JEuzspz1caXSDbi5roH5YTCTaSKe",
  "key28": "4QUC7ryQnyTsAARYZ4mHKXPQyQFrizzo98UqQhSwWLaHWpwGgu7aZcE5Cf6avFDEGLQXSnRi2dPs3eKcmq29xteR",
  "key29": "2H9jwHC1xAZPaoiYgqpgCqFVXedf2rMwTq4DKR2Q7oCNf2JxP9G1hob4CbSwWZLohnBSDU4dDBnnHtyefWx5yaAu",
  "key30": "46SbcJnjSFZ5CSr15fYAwvyj13V5A9nBptrUCzGfXH5dFjqZDnRnx5UthKszxWdP8AepheSgdMzYwdZrUFcaVFBN",
  "key31": "9K8nP8ZGG66PoMPugNP6mnv28TCcPHHkZqKP7nixNVpU8LXpqVzhViwenaw8cJ71Hc3wEAmu33ynXUuV4KJvHmJ",
  "key32": "5ttzcoDnTKXSmXjJZsffF8FE8pF9o3tLTbM5Psu2xVufMNaJT5aLLuLbLd4gHJMECb6bndidWggDwnvTDuU5kFvA",
  "key33": "2KnxtgAwp8qgwHhc6WdJP1thX6Zfi8BXhHHECCokapvrpsxCmsEdt8rzLFpi4YJQuitJnZPJrdNgJiqH6NnSRPn9"
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
