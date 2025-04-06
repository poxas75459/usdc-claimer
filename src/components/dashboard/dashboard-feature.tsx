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
    "rN9XjShESbb2L6TbgToKRAWVErkb1S6H8NbchfwwYG5D6HcvdC7sWH47mAbMueUeikhaFtCqXLJnjcEVJQhKhYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ubha5P9NCoSmSoVnqdvgb84x3t7NRYbVDNRsE4t31L2BDLRc67TjLTWqhrAKetx5Wh4AvLPHNBiivJj9tH3iUJR",
  "key1": "2ZT8eZMox6wyB37KkWDGRw55ZiHTXHgKt9MQN4myurwoQr64MrPQULsyXCJP6MXdvUPQtyVQBAouaWPiGp5sFUDZ",
  "key2": "5VpTVYLYCDBYPBNDZN1xsGA25dYmZbwFZemJvLjmG5mX7jAeBiF2gxAGrYpnt8gaiciKZVCa47bmBkDgpgU47G18",
  "key3": "34aNxGbxjoD1uuvQwQeaPE6qKzLNtXsYQshyDFdpdienmbsBcpZXQi7e1CqhTibytTiFoVFnNmYiihex8JWqeC4e",
  "key4": "5KWu6HfNqndGkbvLnDH6hPjvm2bLb3zBTDegzTxcXQfGV49uVQN2i6xw1v2yjHe23zwdbyMXDLYsbBqCUgwozW2m",
  "key5": "45ufPJ9n8kYjkb1PtQMGbhRvVsdmb2PK2jeim3MyWWBTVyw4W7cpZB4KqAYS6b6bKCTGZzpSCP9bwKXYiVeQcbEp",
  "key6": "WemZve6QkJ6sbT8FFnBi8fQooAEc7jVEYH1qxyUpvwZFTWvGK6U6UDh3xdpP9VtpG9JVroKfFfZSJDfgc7CDSKX",
  "key7": "2xb7cn4qwEvgVhZoy2SjadVjqFq725ZyiEj9rJuwAfBEQVSRv5ghgXpd7cxMYctpzjmbEgwcorxqBCpaXzMAwibA",
  "key8": "mfSdSBuwh7zSUsMyZ3Aa5pFhG4gLJBo1tUrV7LAYojG1YEZ6WyXN1qBpYhDvQhLRVCHkXB8Z1E6HNGkomZvRgKR",
  "key9": "28dpwrKcGHqoN44Mbo7ph2oSXZdN26qd6sKdCptfMrib2sFSBHetEJGDADsah75b4CtRUo7QTbEykQc7MsHFFDA9",
  "key10": "21aEZCxoME4Rkwd1k9F28aQjRk2Pj8gHCyudE5mLJbSg1BzJELDD8PoK3eE9Wvv2zXT9Zp1GQacLh6rVh1gDZWBf",
  "key11": "2X5Qac8JYa7M3dAK4t5ND3vag9sn3cvidwqboavZ5sr3HgGM9L9zX6bJ1GCcLtoSFbZwrZvFgVGSbTTRtfDcZUVN",
  "key12": "d2VPcWexUPMLgNEVrNdy8r6a33B8CepskWzeQGiXqfMELKApBwgwaJ3L2pHuWwjcAR7G9TkNXyqfwLQcjpsXce2",
  "key13": "4tbuuVW1VHGn9hmnFSPVMqUhoj958mAEoxbNpDFPqVrkfNufaXhUtGz1f1vdDQb7zckCq3RJMLG6fuuaQCZnrJrV",
  "key14": "2TgrKRLZzsYbL4ihDVdDM9eTJqZNRbQnKnVz6gWH9fxVNsHYw9G7hZcrXDP5XsNqXDUohNdpHwabgPg6aJG72j2y",
  "key15": "4zUYPoqWntWCDAjXaPTaMYTvGUpY24tJPuWZiGse3d631pntZjNZy6Jf4veL5AkJm1r1ViidqnXyqAJpfTpm6rH9",
  "key16": "4enhu5UoQGXdV85tESbi2JYE2Hpt8pLaPYayN3mj7q2aGfmiMFNWibPwUUCfskDKz74azhHLxzA5QS9P3qiptDVR",
  "key17": "2sErnD3aSH4AnegtuK6NCFx2M1NivTqaU98DZszLFA4LW2dsrE3nSpzZGEjsJhSuNNjemCoHumN6EF4Q2jFjWTvv",
  "key18": "UEBNJwQpSA3hpjgEUcRjRMT6dJjkVV253bqCgyF5Nt1TmRRSGoVQwkwK8ucZUL2ou9L6DfxVdc9qJAKjv8Tpi5Y",
  "key19": "2B1qqzU8HC2qK89zcBWZ1rCmGKqnQ4buwKy248bLPzLfYroK8QUppK19G66sHGVKfMCjoK9SQTdbjpEfsmHuMTGF",
  "key20": "5eyhnQTM3hzCUwuNqPMfvGHGk7wVYGephgYdYvmjAmMNpL49QYJpJpQdvXF4ZHzRxdiaWaCpSisBJwcQDQXiyU6W",
  "key21": "5eLkSdUTE3QzsmCEYkFdLejsLq87vFFG5YvomRM8yPoPgUbMQCnPHmTfvMqXX1MRHBYS6mcHMQFdc4xXFEujxHXj",
  "key22": "2JgpskemaSf7tdNkYyWLyAaK3qA63SNBqd8RWkLBmJT4RoHwEG6oV3J6o6q1GEkBzAvTch3pAryoiCn2AohP5mQ9",
  "key23": "6782ebhnHPbpzLaGbFAsnVGZNu8G7E1V6GVMLrh6rvTH65Dbc7FkZKpwU89BtHjFYmTiHc6ntWRbXSM3HQqQQAwT",
  "key24": "5gJVptF8xzvh9FmmTF3RLq9DndVkqkv2MbHfenQhZiAtKKx6NS6aKnPoEAeaBBPkcT4WY38jhSjUyVxz7TVre5b2",
  "key25": "22t6tx3PVwSrCbS1KFWQp8aftgTVcTN4abLuAxny7tGs2k973LtSo8Ea9iZ3heBV7mfCGGDV3V25CBf8xacaVscN",
  "key26": "5iZYb9EJAMwdJEBxmatMWgmu5wArHdsCKNDDzq4KX9DMe3hbrcwH4pZ5yZyb4KfythcAqw2dpGgMsbDWz7ocRkpu",
  "key27": "5c63peyXBaP9GZHB9gFrLc2UHSZPyeCXnFauP14LbKJjks9UWcrnWzRPgQkpcVHCgyGSR4haQ3XuQkRYAV1uU1cr",
  "key28": "3j7kstDvFQzp7id3vj8cAVqnwq2WB5Hp7QjL59fESZLksrt64NhXg2uXToh9jEkEKbk1kE1XNnTRzysrMkmR9cvJ",
  "key29": "2HMJR4kmr5LvydKsyPEK6gJK7UWx6wgBqQADnArH9aCx8WPpkRjiMRZM3DdxPTWgskdtmWMXUUNEf1CqDHkSidBW",
  "key30": "2g7BBCPMp1PQusLFV3keKPFH7d2iv84tdVz5pcjrER7qs3NqX1ugvF86rEJHsJNyxhCiaZMkXNFJ2x4NuWJDjqK5",
  "key31": "3WK4gY8wgegGqLur2J9oM23HwuQhc3ocoHq8632oUdnDBJVfytCotyMDgowgRiZK6JR39rfktGMbhWavGhrsdzfH",
  "key32": "3fGMFPmFoJTLsLn8TaJLD2hsRqoKJaw9pphwXsXtHVWGfZZY5upBn3brRupvxCbyvDJEEHQoX5bGWh44nMMsvRxs",
  "key33": "qi3xsM5ocgF1oUmdVz7iLfgHsD1xqco45XfjPDpnBnwFTJfdfeucTjuhzjSDtbRZKEiG35cN4cf9hmtdX5oSgDA",
  "key34": "25SLYDGPP2uhs9qmbMgZ1vwPLv3SY1eNtNqbJtDBio4uNfxFTVa1LQzwtjX1z6RGxWAXJrJmQ6FtU2fs4zFkyBso",
  "key35": "228Qk5KmREC5D5KpLmJ3expdkCxsUzeo4EYmdGu2oCHYMo1svXByMBEHoTaJXBLPwbJkkutcG6sDdDfhAnJzinyU",
  "key36": "hBzpU1rNMXTYptgzR6TERobTa4DtUoBm4CF1wptWkWffYmhYSpcAgVQhJQZ1FjDZbUceXEm9XmBZbwEjcQ6DhMc",
  "key37": "5cXZfT8k2AQ2FVhp8NTosGNo5ecasfb1JcdvmYP4bAfQW3nb7fZBRtVJFsx1GqHYS9UbDDuvonZxQrqbjm6Y15K1",
  "key38": "56MEcif2cZN3hf5VMd6pambBNV8LYGvkJGeaBNExREZrh3bCvXXFBysUEKsYLGz9xo7WcbEC8AgovPCSPNVLKt82",
  "key39": "2HaiQNXpniyA9djBuDTTWuuVN9wF7s18LHZNdsuPZeoAct57JnTk8Cv3RptNxaDeQ2f64dtpoChmbuAzVrD1DQwP",
  "key40": "5jC6QNF6bPEh7PDMMmdaPWHgGS9p6tpP3Nhrek9SPoMgnDGgPfyYSAPuZ4yjSg92wp6rikWBcW7uadmJ96kn7QS1",
  "key41": "47srsMoUx6pok6up4YqTK31e9BFmAthU2mrQSHj3gELoZv5m3EyAtwSb3N8X5yBKHvFGYWJhCeGrniaVyya5ASdv",
  "key42": "TeWiqbhBfssMScfQ8F4HXoaF4hnsV75UNLB15LArcHwjk9Wo4LkuD2r5KtzU2dR1zSDUsyfpgLDxXmnooF5oD8f",
  "key43": "Xu9QZzYb8pTnq18gHqKpVEGkEpDfH6ZvUpuKf43zUXabBR66WACXZW2d3mQfdKmLtsAQetrwFmjtCZ6XZwyx11t",
  "key44": "5iYdsZm1oTA2Gx7LHiyf5DZ3RFUoQCTjERyEsDoEUFYkuQ7KAvP7nxWN9oQWsq8WFdgKWPnXbWxZuNaYLeEruh6c"
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
