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
    "6n7vozMq4XVf3h5YvegqEbWb35gzoNugJGC7kiRwUzvesHthDNHuDD6GKfz2iTNaYZA3sYUU5CzFqfEysacXyCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDgmpHXXQdHEnhy1JZHpRSYGnoo7dbdMh47N2q5RJPnb9m2atX2prjj6FwmZ3bPGtvzReDkq8x9iFqtw54ab3H3",
  "key1": "2cxmTCZc3cZfJAJtoUDQwnYNxQehDC9C97WS4W5wf4VYT2kD6REUsvJjpM64vTm4DXN5WEiHFEEdyFnrH6mhWBEi",
  "key2": "2mDuz42n5r4gfLYXRxzcvMmXB5EiqFgz7fyVW6NASFv4HzNE7cfs63TMk4Bs95LbByLGEwZMCFaGj1JAeNSv2pgj",
  "key3": "547xyeZqbRtgcFZ6A3osv5ACDcrcnSTVMs8kUJVzsRozW3Rm2ScpJmqEpTdYiRB8UDi1wFoV6REdmAQkYqx7W4Wz",
  "key4": "54ywt8EF7hEsDRVne9s2ZnKwHgNX8pp5K9VW5bUUpLbsLXBUvFx2v1U5DPACtcvNZcgrFzrthjsvAewVE1rVrDGh",
  "key5": "5Nc3rok49zfjT31wzjYoQeTpdmGeK6P39b8hpJSYXeD7sFnr6ve1KFhgD3KZBPw6P5z6CWgyjFbWoh4MvLw9p6sJ",
  "key6": "5pcV9u3b49HnySuwzn3qxd2Fbq6HBMryU3fYTZMeWfTf39BjeLL4PX4wc12pZoN3gcQxTtKc8YYdHZA78kQp5Ztf",
  "key7": "64nxhy1axoMAj9ZKTfPvwK693PxxdzPDJLhyz8RW1a6WwjkEth4VS9XadyTwWK9triH3EsbJttrC9bic7rpgHHhR",
  "key8": "3EgcMs8jhNwFGxE2Q29cy9Y2CrjiNyTVaiLJFuPfEJbe6fkcrUgowVozSspLctAmQPKwWwDCVochtYQnZGhnVbHJ",
  "key9": "4ET4jeq5aB9HuB78Cf2db8UuGo1Ej7GLDHdPDZFQaLZLrM1FCpJ9m5fxK15dbZHefrwdqtkRMjRcaakDpcxf2Rra",
  "key10": "Nwx9xPxsg7C6ds9PwYfyUcGcxDgp1NH7zCpuSDWh6jNbcJzdGK4N8YEFHvAp1NtvQHRzVFLN2MfW43xd7S5sHi1",
  "key11": "36Zm4Gkw6azhNrDZ5ED9FHPi367TfjWyUPBh5AzXeQNtbrAhc3iEJSW9JggyQCRKsrw6gh6yBijPn1b9YS6GmYze",
  "key12": "4wDJyrHN7mN3xNNJ8Khge2bMiuoytezYnWkwF4AmWhcZbYE5kbHbCaqxx3ikq67ptPjmKv5ubhZJKtbaubhAAGE8",
  "key13": "5PPf8zyUEFoDMcigSHEWUomN5ahCwnZ83jZvBXhmajokQpSWFfvqqA3PSVn5gcbWgAQUozJQV2QjCixo2FmMVToT",
  "key14": "5mCTm1mK2vaYy7KsJLVmQDszRVHY1cxqt8JPiYW35Vjgx9zv733Xwy1GXcTE8kWsgkJ2SdndKzgo1Nf5YXNbt9n4",
  "key15": "3c6NPe43XekYCfG4DznNEqmaTdagez5UYPLf92RawcnwMsMDn3edweYzhf4ju7ME1Kgb4DnwuT4R2E3fhcwFJSSW",
  "key16": "3AMM91PxJg4LuufcNxFgzVApPyCBtc81Szrc3fv3RVabHYnY1TG5noRvsSfC1dMdzwxpnqdjqN8hCHtGuqghXcNP",
  "key17": "4sP1kD6hPuB9pzKxZ9UxcoH9W4uhzAYzPjNQkz8cvcfGhtCqbqaXEH1HDJ32dnX6Bxi3UjurZe1wTMcqqHnVzPSo",
  "key18": "j8rh1BWr35Q21NZtgxZ3TRY2FMTxQHt5TqTBGm7kdkGoSXULkAtje8QQbQS9jqYnAJziJC2HmExyYB4UGVDfuDn",
  "key19": "3xg4e3VJRdJEqcCBnLhgSwHR2uuy61QiELZf4ivBFJx5FJ8ip1tppk1GYGLusMCUiaap4reZekoYjGHmghxfP4qP",
  "key20": "55fS4WqurJAK8rjW7xs6D4ky6jNucHNJm2tZZt51nBQSAVQa5tdnPuZPaxXbknvRR51c8VUuyTGG1cgdWv95g6Rx",
  "key21": "AXaHA6nQPwW4qNjhLYcVaGUSaHYiQCYZL6dwTNky9ZvMPHYSFp7rGSEZ2wgBZZvnc5uqGyYWLNF6NhhQSbkjKLo",
  "key22": "3LMBUty7t1Ves4bmhC8zgiwGZeP4TWVwexp5tb7VzxyUCShmpULEDgsnZNb8gXY3vMB7uc4QjBdJr8ZcvgP4GDAw",
  "key23": "4awE54jV7y9h6cPeVzweMx3zifn9tkREBD1qrHetmWcJGAbRWxFF88MxFxTRcuNPSgPJHQEk5RAPzLHpsrecWTGB",
  "key24": "dkG2GvHxnWDQ7VAsuW1GB3rYK3YX61KgPgXHkbCuFdZo8mUpRDQQfydEby8MjTRmPYVV2fdhUKEN3AyiT6oUFaH",
  "key25": "58NabGgNj5oQS58yjwp3USxeUPoJJxqJbwMc9MRG4Gn5fuqjWqMfrCwQUmDsbgxyH7Y3BD7UmNMMfquMyQVBx36k",
  "key26": "5gvxq8BCtzxjRYA4CfdBaLEXmtC12q82FT5KUV7B3MCP3nywqpTLTqDQEtpMByznYCm3Jt4RA767QAKnjBfhn2gZ",
  "key27": "2BuHMyMqpXYonUjNNBsas5Kac5nmpukeJ3SrxoDu4rbZBX3fZQoV8H4a7e9yLA1FjaA2ECx1Pn5pb8sAvYAa4eqK",
  "key28": "3fG7AYKnN3zkfFMDu7pHCYnSDuYcvAj9npXHZyijxmRtfQVJJY8r1apvNBkoQzb3FUhSfJqSwm4aGrggDXYC5jpv",
  "key29": "3QG6aEXhbK8Pt3H4UeHcvsxCn6HD5t8H8BuxfipfZzQhTcJ8NEdeAWjokwSyACsSECLoRsuSgpk3JXE9jFkxGzuG",
  "key30": "2M3bwXG2wVfyvpQn8TV2P22tXq7Vy5LehRwL5odMCJVUiFbpwg38ti8FL96ivfj51g3LVCvHgQSjgRfF5fbyJfBd",
  "key31": "4sFBqjGHNn8HFwBRjhW43JW9XC1jiSWRpESLRHReab1hvWfr16RJuHzRdT4qHE3RVuqEZ3oFtjVChnummwAUVLRk",
  "key32": "4B1R6fbS1qbz78QJTdZNdrY1PFn9TK3CKtucTRdFhHdeyFKcN5nY5rqQLcTujjoBCHuqH4sFNQ6Y2ejjq7ffQWXV",
  "key33": "2dbtBi84kq6azozzdRjF3oxckA49dnwjEW5a7NeoNDBGZ4cGwhV4Vm9kYxqkHDkXDqohdE4debmKs6nfM9mqC2Aw",
  "key34": "udfDF8UHxQWVkj4EEwC42BhvXS9xbRPpEbZBzj6jUPB5Ag8fxTjmQ97btN8dagDVQbZwSk9tJkibDTvkx3drc8L",
  "key35": "4KybLGXpZ8ehfKXKfQJsytPDj4p4kYyTkfbVyzvCyU393npZW14FWZ4SniMkbNavx6MgkmGiEFzcH327LFoAdPKu",
  "key36": "24eXRuDU3PyAr3jNhMQaW9daVSoTaw5jBi5ZqGb8rU6Y3RQZSm7v8mxCiAVbJhTk4rhDS7gDgwH8But2icnTK8d6",
  "key37": "5n9BaaaxFpzNsb68XAz7XuV4iqYXejnaeJyqLNXHsDcfwDTLtJJEyCjhcp3Et1hntrkgD64sJP4CJ7q2EWU4tfqE",
  "key38": "5HakzqRKwLd3RJkBnNmqmR64mMwW5chE5faqMg5sitBD9jr9wtk5Hozh5WuVBzUsoxdNaQ8vmRbPyJeAbwEo6qJE",
  "key39": "2fdtwpHDARNZgdYXNV8iGRMKtSEqLvGQLtmURVrrUML8xBBJJzjWe8PSFskCN3xJrAX86xvdzLBUgnzyX9WprQxn",
  "key40": "Pmas6iUg6uYV1kcTf3uiXVoi54kZjK3PAFqED7iz8eyQUmQ8MgdJLLL4K3fynaY6AVeEv4HEhrs3e1TV3TxTT1C",
  "key41": "21s9DkT2BBLDpAcACrzGX9feAhXu6FuK5bgb11T9DrFGqkbiXF2Cy4e9BtLzucNzUJZSDcKvAvLxNsGGXLbJi2qh"
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
