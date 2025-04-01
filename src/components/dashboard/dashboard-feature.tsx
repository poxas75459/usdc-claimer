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
    "5hgMGH7vhceAeAPHUvzjCNHaeoJ2QTqDmcevKJHfRPSAui9F6mTGfnw2EhkxvBKraC8VWDeJfofiTgpAR7KN1V6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQr7i1qcM7u4LWJSYSsnBKadVnapD4KKioNWHgEX4uMnCgxwRy1kLGwk15TUzWAWyBbER59Rd1T7yrktuR3mL4M",
  "key1": "2ixsjtFChW6t9tvcQHrBGV5DqMeJaiL95gMxdRvqQCRe4Rc2ANVX41FnJj7hdjH8sfSFLpkLhiPcqgMqyBwKQZUC",
  "key2": "o1SQV7a4DtZJuR4F1qdJ7uV415myVmwcKUv61jjfaZEfnNKVSkGKgQNE7FCy5J99gqQQ5FodTiANCApGnWRx2KY",
  "key3": "522aiLTjarrX1VDwsBCSqUabGFsBzDQ3nePT9k8GGVfgLAi4fT4aQmsjC6mn1k7Rpij3qFy3R2qgg9ijF9kqM2Fk",
  "key4": "3sevBZzBE8KBotGzk26gwCzbp2fFnj7fKEJ3koJQZzc4LSTd1LH7Mwe1Z5r7yNbFvuir7gN1vtaQGsQJBYGiQ7kj",
  "key5": "5YwhKfJ3xUnKFoAAqP4sLLQkHsqWo1AoHTzRzsPH6Tt2w29TuQjnjkg1cffteDGK4NhxveKRstkttHB1hJjEd1k5",
  "key6": "fnb2oSKczeXn92Lvi4eNbkVQNnAu6VaKxXGegFnTEuUBC3Hib24Qz9gxNeGedcPdBg966d18pJ2765TZKcuMyUE",
  "key7": "5ENA85oD6dpXZp51mWCL2RjLysD3Lz7e1e9aSDwakBjgLy2gfR8GVucyCZHKypVtFAjxHumQu4cuvc4MUW99babg",
  "key8": "5n2jHUtrJ5XZcp2yTdPPbXTcEnTxvhrQXH9YfCxaMHPMMkHdNVz1xcuxC3cawXJQoE27gBeJroUNSsRhYq4Mt5EJ",
  "key9": "4dUuhzf1XCwbkaR3gTFuKb9E1jpN9zgVA8hKfBZU7LEkV1KeBgnR5G9GvLcxhfi9ftKxkPMsAUkSumMHM8aTMJaj",
  "key10": "5KZSVqR2eAwZbUi6UiXPVgE6t6erocZxrsrUzZy68miTwMfsQW1Y6CDJooCEqxvW8Q64yLG9kFJYM2R78et9ecTu",
  "key11": "2N11GufvzDcFLc1MvQoYSBWCH9iMw3aoJHeNZAa332ZkiurQPHivRgyfaZLmYJuotaRu5fMVjRaxrhbSMud8PXdA",
  "key12": "3ZAnQNaFoKADyj3wCddsy6dwu8CfJFMphrt7RXkD7zSdeDaj3S4n3ZBZzJh3FCt3hETUkxReqfZyWK92XvxihMii",
  "key13": "249ENiDE6fk4TaTKNM1gbLyhv5fP3jA13tPqrsMDXN7ffbvdSrqMVa6boS8vSonMeABNwSXz8pKZrD7ZVMzU6LJc",
  "key14": "DhwuE9boCiJyDZv3ZqndFZa7AiV9u2fgbGTP967D3448t78tzEX3x3zQbo99VkqQHdWDrEkKafX6fjVNjqdbbaa",
  "key15": "4RpRKsnusvcZPGSjYZR2tNdCy3q7Hdjku3EbxEXQ7T4LcxEqvPub1V2D5Wf3X4jL6CRGdym4aUuHwxmJCkvnNBDP",
  "key16": "4WhZhjo8MJo48oSo7h2VP63z71135dJwrUwgHMiSJw5KSS7jYP3znPY5CxY15aEPyYDgpnxwJ6PnAKAEdevBWbrH",
  "key17": "5opjzqo6XkxXwu5trQYVR8JpAJZo6Gzun1X7BNT6ynG79UNQfYh756rWTVthJPhaThazZJfy5xaB5BVhqeBqnMQE",
  "key18": "41ojgSun87gvtN3RJ9HfeuRrQSSgv5gEcwxoBN6G99NxL7MmH7o1NRa1zsBjms3r7dpLyH7eog59VpYb31Hb8scS",
  "key19": "4afE2tLmmPVQ6cFvDQC8RSkt7ytstmxfMJsR9huY9VTXwiCN1zizD7UZ64Ev84KpuiSAU99ZPeEdDiS1MQHsbkNt",
  "key20": "3nrjL3RHFgkVprb7361Wo74WYkFaKCbQHmJjfCph9q3api42VLrwnHdybtvf9g7qCxHzxhTmQGn8T1sBgATZ14ib",
  "key21": "3R7iwTMNqt7Fz45hw7EyB6W7QdCAEwaLtTbymeRTGvVKLDAi5wbYaFwsZHrPiRjVcxjYpiWE9cLLoUnsHb67cixn",
  "key22": "5TppQx2x273oqrsMnWfRvdw4Fa1j6qkrAektm3To3i7Gf6wi5q3E6MfA4GZkTptisgdUc1rSThUPvLrBVFd1VJsu",
  "key23": "3disMiqZrdGPZ63hBzuk8UhXhBke7TEK95YsHU1u7FSrNiMELVFGjBfNytsKZZ3LMCRyHEUZ7eYv4Vn7Zu1fYCLJ",
  "key24": "2AvnD9T2wv2dY71rGhquoSHsbZZxRvGFULP1zdJDWcG6UaivN5CrDjezzs7AuMLW2GGzAsU4WrRajmpQv1QiSr15",
  "key25": "4jZ7Fm1JtETcfdsM8mfvjWaRoC6PvgU9bmW6y5pabxk1UyCJx2TX9dTuXYvnEXFiKkLcPmRmZpBMw37d1E4Cd2Y9",
  "key26": "4kzoGDofxiQuMzdFiR88rnjyhxZ8iUj4N9tkz1YpPSsBnfBm7gSWtnsgQqaFHm1JqhB44UFQTsz2PxJknuymoD7Y",
  "key27": "58WSWKdBFnvMzZWZ1o9Ru2JDtJTKhhb4xhPyWHS37VkRdisrM6cW9ctGAE2xxgYaVv8dff88ZyPyVtr2yPsbMjDT",
  "key28": "3J6zjKD2G3REUKUYUoQ2oq6jzup8kJBghQE59j3931Ze3emPwP4dHWhN2Evh5eDLe14fuyqWNpUqFSu74Mjwud7N",
  "key29": "3kgNWgSX3bPxbdZVxquywYcuKekf6BwX9kUxRqKTiHyua8Cpq2dxUhfNkMDNLyCbRNB8My1Tf6GYWPGo5agg4N2A",
  "key30": "2wLsx2Se25PiAwfQVKGzmhgZ8CfpQrqr3AnNr23xbkuEnpRywaUGmLBo7vostMP5pNNr4nuoCvRcEyDheMQPgePW",
  "key31": "2YRkgxUZQys6WMqCqLan5nnz8mGQrqwaJA3AG2zDC9mfvfQFvCky9HxpeeFaUd5GEQBoNjuymMzoXyZdnQ7hjt1x",
  "key32": "3w2n8ayYbGW3neqduDfxyQE3uDfpP79Gebw8RBnBQB2c917CbvzZDuCAeeA5JGqqrbnh63TNKWeRv6qijYNnmnRh",
  "key33": "4nNuKCombXrkTNpxKyoeCWkLrL3TMXej9Yoc6bdE3jmq5hSVLGSuJDzjenzUXQ7f9zVuVy2kB5ttnGnXXhnFaUff",
  "key34": "22LuzUUaVupHwmkGdfnTRmvNQKaYdEbymexAeEUh77m81JadVgmBipfd7vWYT63H8fq7hHKybiPyMrU3LFfuBGNv",
  "key35": "43FdkBtwF2EPHZZdJ8cwJefBziuN6wPHCiP3cYrirP4o3oBjhZzdwkBijAEDPwruEVNApNSod7vAs7qSZqQA2dRi",
  "key36": "2NtorYp1ewgykj4JhjdBdiELmMSQ7VALqmssNmQ6U4XyAAfgWtz4fqfgRbw21CokLoVcv2kNXrDEVdGkmeDMkWGT",
  "key37": "5svT3ncHKexhfa8eiP1AW1b12y9xvgKTuDSbNZuRyFCeWybwfpYUqf4BV7eMgnBo5qRaH6sUb3TpVPqUpfJTUN9G",
  "key38": "2uirr93VoXXZkmwXSMzuQHd1QyptmqHv3iivBPxXn4W1Ts3fteKaQ93B4cmHiS7EJAYiZYSMHiuyBUg76xKakbBa",
  "key39": "63Yt86r8ss7rUPpX3adF9k4jqnHRkd9DfikUo8X7KjsR5zPhXnUkDayNGDmVRgCpYvWfvcmx4muNKo8Kh9ypXouZ",
  "key40": "5wMirrMV9m9Xr66fGhGb1MJT2zjQgjfAJTGVNhHJUCjGGJwVyHYFmHhyyjrvbRutnGUdDmeD4xe5EXdiazP8JSBZ",
  "key41": "48VJw4FwBiS8VTnUzB53bhePFp6Mnr1fgnrde7PS6gmUKufaswjFcpSaXBX3rmqKdbknVmgqu5ESSVLZQryMJwSh",
  "key42": "3hZybJpmQ9eSe9Hm5ASh5RRHmXVaf8h74hoiwjTEDa4UvvH6Ed7RQ2g6bf5URu84F7YypZMbcDx3hACiKyALWKGJ",
  "key43": "5YyddxsjAMPb7xQrcTjeAoJYu8iJcMEmCJmUU3UetFJdH2rT3cpnwVzCz6n2hxyoimcMEGcxT1vwSNft7HfE1mfq",
  "key44": "5u11RTdtcGXanmWAeidmQBEqTjFH5JSE25sbUsq53Q7LZj93fVwpKBzX1n3Xbwp7E1Q78EV7DocxrrmgTLuXafiW",
  "key45": "2MPqJJkSh5dpVAdAvJYcUsRspZJtH8E5dwAm5hiZuwcH3tpF5UPrJGbCWegx74NF6casFc6YTipoctCcfKZYksRm",
  "key46": "51Hx1B41fWffGYywzFwuHzsLDZGR2NykP4nKp3TUbtkMPYbEjNA9KextA1ofRtPAsfVvhAH2ti2XcfeaPf6FBDtT",
  "key47": "676rmNoifKueeziZUfx92VLsbPe461A7njn1GHGhvSv4xmFe14FBKphjWC9KPxC6S2MVV4UAaNXRPj8SVdsd2GTk"
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
