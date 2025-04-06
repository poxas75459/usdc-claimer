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
    "y27fckvKyUVnhZV4wbswk7YMUpdgyvFU7FBd1aspPSdc34jqQVZWNGwDmPvXz4Bo8KGhXWDi7CJNMSaVEgPKYkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCrxgGpxmJgXb68SEcZYMAVN9Y1SN95PuxP1se7axjzqvSuuHgY3dhfoQKfm8EEkEUPUTW4xYoc7fEvBLBwrzyz",
  "key1": "P8WBd3EwRKKyyPstgd8E7zNCcui7xBYnftE19zgJDFXCSc8qv7eMstEC6sWzwy61KLd8XpZvY3c7rYqJucE8bnA",
  "key2": "3KsEEtSsHy7AETou9zvzA7w5vQyf8x7RQ8AE54yNgkpZrwJCPAmMYzhnqtSRThpgseuvb9TWAsbzFn1Re8dLPNnz",
  "key3": "3xGP5P5y1y4PQmtSjGH1xfVCCQ6a7nDCqRxgoBxb2zLMw2MQ7XZqv1p2hknUGgdjADgU9sPDND6oENKUHjQVhaAR",
  "key4": "4hB343y1rxDBDR7FCjYxxjXUmCLi7bM12eo1FhaXFFPqRu7pgMak7T6xJFjrbDicJDc4ibsk3Q3Aizuo8UKiNJLE",
  "key5": "8jgnq45RWzoBRhGFymEwMRNPE16HYdhDNFWBUExX1kZ6CBVsciuWKjk6hG95wqWxfgr9rSKG1o3smVCZwZpnwtp",
  "key6": "4UCaBb51stTGMcdC8E49DzaV6UZPQAuJzQQMnr2vqiNmoRgi4953mALcbQmTX2TVmbZWLTD6owNejG2TUqexYuPL",
  "key7": "2cQfPYudkGpHhWZGdp2xmPDY4jz3saxoa5PusVcPy8UBxTWXAXG1ewHRsMpwA4ZbZfK3qusrtJpPf9rp2fVZFSAf",
  "key8": "5tGQgAKSFHHedZixa3yAudtCqAp1QCPbMesu6jf3U4MHu7buQvRQM8uurYxqWpajwjPRWExpYQ6w6GdDLAjQVojZ",
  "key9": "5YyaQH6hgBrL7ekXauYYduURqoDFSbHpKtA8VRXmtANkbJzjaboGyDeKYusxSQBLtYX1PoAnyEYWok3nyv28GBVL",
  "key10": "2FyXEofyqmcfKSbuv7M3gzoYshkvUnqXiJcEHLmGpV7LuKTRoq7umr3S7ktsGjvpeysZnP1q9MqBttvFeZpfb29T",
  "key11": "3DrGYj2ExJnLzG274c7yfSGjfF6MLuZdn7UX51QF2txbj6jGyuQekwZijHDmfGHdXwCxPLfusttZFCQtZsq2LBEM",
  "key12": "5DyEoTbThMFQwDyUf7wpeom5CUswVKXX9t7XtSVSNrwdFqdLSJo1xD75bJs2qjTP3xuEL11X1Pfo2Zyfs37CEsFk",
  "key13": "dw2CexgWvtEYhfgs4W2MkRoSpZfxyzzePsNK9wQCcybHFDC93RhbUkUquQVRgUfQsKsXzutUC7j6p6NgMq2jdMi",
  "key14": "2mJ9WUxpucPRVdLn87MBWYx4xeTY6f6cEbop7UAEjyQQboqLhqZyHU4xdNobYcxqtaaik65iz7sCiE1QHpWwJjkz",
  "key15": "3ekqvrgvQrt8ZQjsaK2Ga2LwPFK9aKU3PBfYhD7CNzcPoMC5QemWTHc1VtEkE4JvjffEkQ7yQ1rzv7JD4KWnNqhK",
  "key16": "5xb2MtgfaTLGWNWiVJVpbnyMkbHrvgbJXMiwGEUsxPNnyi2Z6v6kzEc2JsnAoTj2FhaWsBv6BqxFKLjFiTrhLJmK",
  "key17": "2Lp5EBTNiSNrbMddTaH8xSYKQbqogihfPLVMZfLDafyuU83ME9RkHwJTnm3hEpLPTHE5WQhJtBRsPGGVGMuPjpNs",
  "key18": "5iMXF3bnNeuWprPR52DduMn9ToKHJsS93FhRVFBLqWUfEAAaDibEQU8xYts5QeLrPiQ28iF5AsEhmFKMgwrj9Neo",
  "key19": "52g1Nmgup61zA4zZdfyQCaP31zzVLZhxCAqWG7bqt1Y4AoYsxNFAyhJnYHjbk9ewH1EeoKYmggqbSD6zYuRwsRx2",
  "key20": "2d2LWffQwBernGyNhZAyUY3AGm9YABxN6E2cqcUc9qqk3Ebhbxnz9JnkMcCbSJcCCRwKuTRuu9HyMP1kHdyJagD2",
  "key21": "5BdTLzEVHrojjSLku6veTg7XM1v6R1R215R1wX1MJxHmAUyKkk1rP9rJbavWfxLKDbBo2Cvfy5abFGsUceVczonF",
  "key22": "gKjf9gsXagemE1rvFNG3GyJh1kK5ZbJNJ5Ti3d1PpVcGy2CKGpqHpvwaeu9UUGF2swBuJqAQRFkMoyiGpxZEaN9",
  "key23": "2e8sC6BGbMbDa4TeCba5fAr1tEeH8uKi7fsoWHbebk9wbfGjEUMxQf6h9aYZxTNmReUrvt74nocKBgDYtE1yD6yo",
  "key24": "5yhWiE5Szjt2BemkUkY9NwagQJCRN3Y8rZ3439WJE54am28irfYj9tG8RT9VVZRs5Mn92RUvuVdSHYL51Uug97DX",
  "key25": "2jCeb8CEQbtVk2ysiNqzzzakqv8JRUSbphkQizk7FAsFMCvi53hKmb4AyHExFjWJATu4FisMs7ifKu35N3TzNaNU",
  "key26": "4tbWrViQy9CzxWgxmyXG3kggy33UBKhko9ksR2PBviWBTWcA8FM59D5X8xetC7ar5nQp3hJ8ZXbNaWSjQSqBhHev",
  "key27": "2EKQ8TPJZGCTRb4XJb4XA3E5yYqN3sBhH2bRCAJP7suLxWjTo1nPwgmBgVeDJnFTjkX66RidedpA2voG5ANBASBM",
  "key28": "hyKQxFikkgds9AnmUkTjYLQ9oxrZYMTm2Z2NzEmh8jB3s2KLcYnjwSBSgxwUqVYjtFYAtyAh28AtrA6bCC9mceZ",
  "key29": "2qWw2PPeJ7CfTfB4LwvKnTe6Z7ASEq4acPXEjx9a5BraxzGTyyoDghtpZHC5NvbysajeMPo99SDhi3ob5jdwFZoJ",
  "key30": "5ZZdx9E4CaPVStWRjhgjCXEnwRjsnmXvaYQYLL49bqJ6RXAWBDKZ363r7JqcMDGMfvjDiJKcUzesN3zRGpJAzVv6",
  "key31": "5qqfuRLVtbKUJykdc7WWUYbmSpRuNU1sWC7sza8N87aViKTMNRuT8UuWW4ReJy6TsneyTx3YSYmKzBSf9b8cEJSD",
  "key32": "5oKN8U7TNBg7iwzdKtiEEkJTHty7EsE2w5zXh5Gj4nZntjsw9A61QwgsQCCMHTeFJUGuFQm2nx89Eao2xbjMHtyP",
  "key33": "4ftMepZnY37dj4DL9KrSnvcmpnwcqgsTh1v76UnMN7XbCQHnKVnjhEfVsQ3gT2bkBPP1nPSrB3vzpcfPGss6JZWb",
  "key34": "2jvibB3uPHjEssiZ9Qq5rM53c1UnPvaY5VUWdeVNK3UELtvodajoRWhJu9DKfHzeqSj3pmaKGjVVxwdwnEfsuiwP",
  "key35": "4o2rfsEtEujthZEVpCn3pvwj7A2MtNTBEopEDvtyzqwhdf1GtPTZUgBKnDXvvrrkv3W8ytRNfYNF7aGnefUn4ynB",
  "key36": "44oqYvT5MiMJshj5CBNB3dGzsoC5sHfQVQiTmqmWen5R4G6YUv4KdvjCZ3asnnH7MuLe8QrTTCVTKrNfwpPCBoTc",
  "key37": "5hJvhXC2QMmhfr37uzw9TA92yNv9ENpRPrXGC4pPUxmGcu5WssgrD2u6vfa2JerjddboU4arF6bKkQmcSVLkyZXA",
  "key38": "346JTZbyM9DmSju4s2gfe9bHhCEJZWsgJwcKmAnEn2CLhbc15xKE13NmBGgbBRi1y74L2tSWWwpNPuHk5XQV7Cq5",
  "key39": "jCkLQFFf12vTD4pHbL8JwdqDcSeJajhf79GdcAhLHmhjUZP2fmKLPSGFKfiYdKipMJucJ7ZH4cN7NaNP2g9ShXJ",
  "key40": "653L4t545yy9KcXoRwnSVnczXgCgEpyKC2vAUjGf2boPkVTdcY1EYqysvRUpHK22x3v6xDUNGieCAgMunEMDgyLL",
  "key41": "5C9M1n1f233Ft4vwaVeBp8E2pnULDotqfGe8XYnroYK8VRWVa3FWUGncnowY2TB1UAJZ6UfkuP9tsY3njMW8ovTa",
  "key42": "2UB7i3p3V4f8boDXvGV5JkMNXF3usvcyypzmWtLNutHEoNPeK3M1ohs8hkTLpE1RCdmE23xVdJMzCzaTiUzdamjS",
  "key43": "2UoYRGy9BvuMYNNstA8odWcYxp7mM27Mg76gh2EUtACUB4UrbTqj46hh2AMB2rXM4zVJf7jMvUXCqVUQ7jWvUnaG",
  "key44": "4rZcC3zZogkggnpfDwbcVxjdtXZM7pS2HSMmcfAZHwux6nvmDMArwhKjCEgCWwjNZhzudHdeDg3Y5218vHjQntmR",
  "key45": "25pVJBjZRZTnjZ25zDrDAaNj8XceZNowwTAhcxhbT7bqVydE8S83mwcrmP9dyBWLzvaeqn5QC37VwsvGJUDjKUPR",
  "key46": "5TDYuNam6QeMRyH2NhKbZ5qqX4nZvzaadPGJVwXpoYNkbya7GvAaSQTt4wyqHNHVo3EU4cE8ecPWHQc6pyDPiuuQ",
  "key47": "4fktM5sTdkt87NeyAffgWNzso1t3jY1JEPktpSSB4UJpMxRXXvFrrjeEVGg4XboX9CpjQAjNmyxkoyhg17vQ4tMb"
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
