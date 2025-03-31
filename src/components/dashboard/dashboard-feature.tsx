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
    "2fKdfBaKJQFTCv1wRapxfqmgdBS1a1ercB2Wd8txrsgjvjM7oee4YhH6EKdijKBY3qYnQdvGZqkRk2dmAPYmXFhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nk7GYDoXtdJHnZMqKZTyycsMGoGWPgVPkakwECCcRhb4QRdTueMM5Ljripun458Nayd71vUoFfnWSVvw639YaLk",
  "key1": "3qdHdnJfCky1DZUxVY3HseDadyVn2GsHGZN8BFTiuVCa9GivPTtQa12Aa94u9HiHVRoh5DAZc6R3G5h8CGnzRv2x",
  "key2": "288DFmuN15C6L7WpjBoNS5bxLxx9ZCUsDMray3ePQfQRGAS4JFxWbvnGQ8j1tnab3ftHrm87vE3A8AVrZgu3owY2",
  "key3": "2MYvNsk9pV7c7Ju5ysjb1xNNV6KPAFZT4aFdvEBw2phqpQwVVL7CqaHfARTvJk5PTyNCm3nN22TDgBY5x1n2jpsG",
  "key4": "48xskwRaDs3kzbBXUZrBL7D5hBR721TGD9UQsyJofRueRuoJpfUNHrKizVUQMqdRkbBYfR1LxW8q6j74EK3ut96R",
  "key5": "3sMPukDpMUFYDwaMdHAVf3GCSTxN4eYFVGkKuRDRE27sFzh6vbW4WgguZWPYV9QQnaoi7GB6k9bc3966g1M797M1",
  "key6": "527dDNJ9FGUwLGCXxXqM5Lki9uZAuHf4DM2mBdoASQGNMLfGuYDXXmHH3ydYJfcvKUuBnu4h5D6YPNvuPrNA2d4k",
  "key7": "291zppiDJgUws5c84ezq1YwrpHjV9uks9F5cESKZwMxBqKG3tbx1MmfYh4XrPmgQ4yz4LGQu9xHASU8821CmoZrn",
  "key8": "3bv5Q47nxq7WaPkkYMdrJowZAKzNtoyNzu3KjYNAwZRkbsNdoPDWZ5miP2M3rhA9f9fYs7BgGtRLit8qEiwGNa4c",
  "key9": "3ThjtQ3eAchd2Atoj6qTuSWj2zXMeeHRWKy3Q2Jcrv8gDfMNHNxftXwEQP4RY1qKxqKRiErv59UaKMHTjrCXAqug",
  "key10": "4AWjd7LBYZY3TFio9sPLE8kG7iBF1yaKviuK3AHbtKwKDeT4V1LnMadiWoeCYfaAotDhWUGS6gqCBh2ze9CGn7hF",
  "key11": "2zbZ9KqvmBiMHGdiDf2EWhZPPcryk44VCbinuzPvmaGRuA2r6ip9noy6DGx4dT2UqqGUV5E64JcggssZyQuphUYf",
  "key12": "32VfNCW2cMfH5B4mHfNM5BTCfnnYsMAXQHBb339cxb7MHiFN6MthBsBDrP3qKDmCd9yWksT9rmp7oQiMP6vyJiwj",
  "key13": "2TXbPei2zUSGaZdpADHDjFAjjq63p13zedidGVqf27sjoJ2F8Xcm8qApkL98TLGuHFxod13qb7H8ogpaZjt6qez4",
  "key14": "2m8Fwa8kXPHLuBYixTnNFTJp4iM1eLDuQ7psgu9a19azXW3HEKjGgmfsyKwzkNY4yviVKRmvZLnQ5F1MRtxFY1he",
  "key15": "5huPqEpmMeqpB1GVMnJWDcS8htNkktW2fLjpuEi33HWnPkKV1NRDxLveQ1hNN2iwJuxyVt1vYX48zSjkDTaMs5Ak",
  "key16": "4PHtHgq3MuBA8RswQFo9m8HZmt3SoXwn8oLk6izjiNvcZuiGamf4inQPnGcXPGttxZTt9dR5JGEHVBhu63swiJdZ",
  "key17": "3L7ABzAuEJUv9tC3wQk1jH4JPhxfgbEdBXhSB6iMDoRAw79fHYt93Sgqu78GJR1zcGY1FheZRZktQCsiNgVNXHxv",
  "key18": "3RGvNZxyi9WcCqHcA2g6mBXLjQzqk3wUzx86Ztz8tjTupbGX9v26hSGjSfwNzej2JhtXzJZk2ViG6iSqq7E5UqzB",
  "key19": "2NtTwDPJ3byAhjB51x3gii1yKfdnwZ5sBvm6MA453Zg7AJvPfaRQVx7EbJghjfc8qZ4v5Erut78ERviX2d3yAKkt",
  "key20": "NYccvZs799dbARvdDNYxehDKRkcSLepALkFSK31F5FmKa39TGtQfeZBpZrcoPVkPVusnj7pDaw9DgYx1KSMmhJy",
  "key21": "egqZNpHDXdasc4rxTiMETzofwXRtWVcEzeV2JuFyduwH3mRWXZSPCUqFPVtGhtuwbSqEbDLqNeNJEqGEBGkMGm7",
  "key22": "4UPVyUWQ8PYQe5nWevwHxauff8dthbMoDBfcyXWobvVyGBrpGN2hCWeT12nMXePNerzt9Lu1LsZbiZ1kuScZkGVt",
  "key23": "2Jgm6KvZ2uVvZKRgYGtZb9tSCFb7n3ymxey8EvFg8tQzjVQsJuazdRuPHkEWu44wVnv12FLHxsLggMqy3MrHKmRQ",
  "key24": "27LawP9RY6K6svdDctaVKQzDysRpxNQx8oLkhLBfZ3TRUUX1xHTKf7MmfrzCeVPow4uKcAepqVKXYiUuJCC9exUj",
  "key25": "4eeTmQLbYxw9ttnMQ3nR5jjdJXmNeZFc13QxwDQqx5jcM1qVMjEHnBVuu9KhuJzc3JKJ4xo8enRJKCpWJ6svkW3k",
  "key26": "4whiqZk4BUNSWhmKMobTWYppZ7EGoWLsNueDBc3fdKvSzFxK9GxgPTH3yFJVaqhVTVKzS1aGowh5kuucWZAriP94",
  "key27": "DTRSUWNoWiFMtr9A8NtMoiAArFbbUdvAeDGiCAQoKiHzZLJ3GYGFTW8A1VyAqsZaP4ZD1JqDQXmkiHuzbm7kL9q",
  "key28": "5LvGhufXUkTmp22NuRoheSitDxiYfn9vo7uGzjbHY5xM8pPF3NSd2V36ncDMUNfdddC36Fqkzv6s6VkSJEAzoVYe",
  "key29": "2VX2GbiyHATTP7woH1gYDJSnoaBzuMWd9ik92tUmKkP2d9A3GAfjAYgdGQo1nwVf82DL6st1VWxHVwH6ZdzLutao",
  "key30": "5vUKrvQ2ZgZdD78hDDwmDscVg9iREu86TkiRsfNoiodMjDAPpqGaorfbM8BkYAtjT8C6wjSeNhc77vkWNL44vuum",
  "key31": "5h46XCqC4mkzz3BPaGd2Fye19To6gh7fL952nMivLCJPDqMdTxbfZCoJtg9RR1wG9f3iMPFunqxV6VeCZAuwFUA9",
  "key32": "69coHHJGFM1LsFf3xNDAz2EDirf8KPAezfkAimCXW8kUXxPHCbJNhRcJjtdiNeep46wsx6UPqDbj3LpHRPQw4gR",
  "key33": "J7YXa32LwYiYrHjG84SKQneDkU9L95gaMNV3zfU8cBMpkrnc1SdDF5g1a53r5SayvpyGpM1uuCrUNFQLoabDS2M",
  "key34": "5KScGDMTjrhaHftbu2WhHsarqvBsopptYNBVzxP2o2qTkNR5PssN9ihnnyo8beS4C8S9JQhTbn8FCHhTijF69GQV",
  "key35": "3JDkLrqCYFHUb3bLc2oNRHcuq8ndpGYDochCvLGn5zRh5RyECJ6Qhpp8nbhRFCiRN4QwaXgop4EMJ6Rh9XyS2TyW",
  "key36": "4LwgT8QetvtJWc6VKFNtvxZZsDNk8Mee3odKtbNujR4M8kmknRLDThPKAuqDMfiR9e8FUEtr8GDNSQ6FmVHFa1xs",
  "key37": "3jfzFj2Fkwotppuiu53ChBqGuqZvkbdpBYjoHvtv7Hpaq36CK3sz79V3LQYwcWEmzG5h1nRYKvy2vuazjyBzAnQd",
  "key38": "4ar3uVSvWYgeBNeuJchvD5FJoEPG7Kh2ukrDaurFDn5eJ8qZHFzjRvCLDitcrNcmXMLRc2cyuWbfoj3DCaBEFAY5",
  "key39": "6i4kaPADideBfKPuQ1TX8voFnq4WZcs7H7JEfsMHNRz8WBsJyGL9P5q9YjAD7JaeXV9tbNkxbYix1LrgewcZ1Uu",
  "key40": "2Yz4mEdxGoEx4xbdcPbTgpewz4i6eNZeWfSKpoN9mxnuL3m32CUnQruQjFsVYhZuTLXErUpDm7oaLP3Pvu5HXp6D"
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
