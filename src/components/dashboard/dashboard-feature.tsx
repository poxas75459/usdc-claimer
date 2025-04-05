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
    "BYNLyhPUAMXDDXR6E5AtEjC35sRdrFBUkyAynbT2Be8g8MBuiPH11a612qvi7zq2GgesCHuqRJobbS64UnuvW2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRgZiPqaC7N2b8edWPZr6WVydXJ55mpuqKvLU8PFXbxsGAy16jpiHiakVCoczNKyfpPachf648hHwQCnPGYNqxJ",
  "key1": "2LDSC5XV8dtRzrXAAww3uAko3AHyZbvwFTrQ2o3haotCKhYCvFUFLK6LhsArKSYp4eBrb9oTuxyQ6VC9gXBb1JU4",
  "key2": "25a2VShQYkEF4BajX3bVEtvUF6dCiE6VJLoT16VmL4obHYuWL7QEwXQ4KyapBetZf1hj1TaXM4mahXHUKR29J7i2",
  "key3": "3hHRqgGacFXqyzNWUxGFvNJM3SwimEgQspXrsMezbfWfscgXu2gQbdTxLv97bYj3exz4hsqrk69Yqn3zKQNYs19F",
  "key4": "5c2661uWtpxqNehrYzLbodTeiH2TpoKmWYdCkE6v7NSqkxcNauZ8UmUpvvKmDbazgTs3gsfzAn4sP2ZSoBpjaBYe",
  "key5": "5UWN7J4jcuEQo6SuTDvuPndaimyyzZxW1E2VvudwthW4MVSmuXaUz5x91yU8oc5kQyzd978NjpBTF6BrmsNYPfAM",
  "key6": "5uP7u88NHGmju4YaX7bSmhzTuxTAExB6os8TGgZE8j32bHH9V2CSddyKrLavx57PbUz65gXAXFaifLEW9FfeEbdQ",
  "key7": "hK21KigXvkqxqdc9xGW9gh487ymw65ho47zSAJeZw1yyE4DpinX4Mo9h1ciEzEyCs2axdG8eB2AJ2j7TYJBcERf",
  "key8": "331RZUCG8fnN4cHsVFhG2kQvTSXf9CLsn2TAmaffYVas92xJQ3ct3wrMbYvFGmz1ChZjH9C5bvJFoKUfYkLbrpv9",
  "key9": "3mMPBPWDYHFmChL78PbSLCFobNkVp5hVoKomummDr9pbff4RAoBwV3JeSJf2W6wnfoTm8d5wN71SJ92j7KefmtQE",
  "key10": "5NJj31QemnVgHTRy1LzPbFMwLo7MeZTHNmPvAjdevWegfhibAbYzW1NTme9g92BSpJcwMJGWun1UmovAgcR6ovAR",
  "key11": "3qvFiCifR6YLkS3zha75tZBrQckTSUw581qL27DQ5tyNpRCkp7sqPAxEnsoamAHzFYqvMQYwtFNDamMXTEVf2zZF",
  "key12": "4KYcv9ajTzfb5YKxmMWqWGGoGkAyjhgXNjHyNckL9YAoFrmGTLLnPWc9DEHJ4iDBzB23xVX3nj7tuLmj9DjwQL6t",
  "key13": "5aAWWobRHFAfy3AgWBSG5qX3yj3ZUraHw5npM6hCcujQjRG47pJtLFMUwSJ8yJbunfUEzxcwHr7DHnVTLz1YqDHw",
  "key14": "2ry68qRhZXzHSN4tPBfnjL3RdxKt9YzSoRJgWed5dYaHyamBs3LStGmkv1iB5fgq4aeH1vZLghZAaW2xFTxrF7BY",
  "key15": "5QZeF7T3h7PGNCWVtrWnFQxszS7kVjKBRhkEHQWCxDRaaf74WKjGLCsEArXN8sHagbn3tWbM6ZUomHQaxnZ5MybB",
  "key16": "5YsnKxdemjgaYiqiXG1NUZoh82SS5FtLfDXxtVNN2SKvn3KXqpM7rPU39Kk8VLrQ2MLtfjTAHW32wNUeVicxe5fq",
  "key17": "o7wubecPQ6NoK1gKRPhTZHT5o2z2A3mCo7Sbiu11nXq7QKnpys8erAW7gpdnYvuH98yky8ZmaRYoZRAkrcCtFVS",
  "key18": "5GvBuzV2rFjRaHJPwYPN483vQ7TKV4uFCLGzCPSsbxP3KBQbwX5ai1ix9ChTuoqKgMeq2wmTd7iBULvdGgyp6jyD",
  "key19": "29bRJAfpCcTY5pAbro3DY1efV69rKa6qEM6fQXxyxinkdHr3qPEVxeEtDCuPNcmq1MSMNDRgCS8o43a32E8HxZja",
  "key20": "5go6ZpAGXoh7DANMkSsfFSh2RoLCUrPb83t8VS6X94QhDe8P783kPdqrKtozmY6hSsxnuj9pQchLXm36By8RmPPW",
  "key21": "mBLnGJwmqjyhsQGqirKfvyR9HS1PZwajScneCoBaHDaEBtdwVX4N2ke4f8voKosuxWBY3d1MGnFQRpBsUhnLZ8c",
  "key22": "5QuCtRwXNKxS327dNBpp5MqUQXKtJAf8QihCMa9QEG4zcSzHUc3izo2JtM6FiM3chWeGcDxAiaHuRxn4nViSE7r4",
  "key23": "44qphPg4bVkKsyWFjGUmbFszApWPpGcnWU1nkmGDQbpsr6jGr49yoQut2ccxjX9egcNjsUaUVToagReVuFRUPgLB",
  "key24": "2ephGQVv1yqToAFp7vMxEgdP8GSYYB8iqjLXfM5VjpuWMxkE6bnnMdwkRExVq6hKadYWVo4k7JUyZeoqdRwaggtv",
  "key25": "3HXtr6QyWpJXbaLryv37bdtbRkj19ADxRcoM4kEDTtrri1LhAaQMfWxEhuMHkB1aBoErbryvb3TYeAXs57V3QCDv",
  "key26": "5QByBuFZVgdcarKL1obbTwcMD631vMLfZCBbGL2Upkmv91YChed7XVZdy33w7nf8zAXWAaPTMB3Ws9mUbtNtuByt",
  "key27": "obPHn6kQYdEdhLmJM1NrAsEwDPqfa1e155AQwXNZd3FnWccJwQwnGLkg8ptDfg3Z8fJv1z1U2ysHZsLx86hEFdk",
  "key28": "x4syt2Xrzh5P9EGDMmaKVvdU27XoRn1isGjDg6DQSr5UaHTne5RFmbAwHUcALDdU4q2k5bs8WLosmAF7T1uuRE6",
  "key29": "pNWyqMFqiMfNfYQQmcQ2Cvbz344BjYnzeqbSQg5if2oBsw4iSTY4VAhcYVYN22k67DT7CuF7LLMqVJSa1rcTZFC",
  "key30": "5dxPVvmgFrxiXKxCx1QbREX7V4CR3HV1RyN5RdP19VdNkvZvZAgmPkXnxfAComDZnC7Uw74etY5WLzB9rw2GmRg8",
  "key31": "32AnEHeFoQesudULx4mxuqmPewd2wWTdxCcjURjmNaJawqqSWuXRNK835d1eEhKbHi9xCGwFpYEMHzoAbT4B1RE7",
  "key32": "4wtDxTv5tR1BszwYLi4Kvp1GwU1oPYE5jSP4BLdjCzHwqz6sidsNHNzYDtLd2YMFHXgQYdHSv1zrHzCo5PXhwxJJ",
  "key33": "3ze2qHTXa1xZea9Ek7QKWcp35VcqLNu669iwMopz5X9gfdQzYKERPznQiSBKqFvS86gd3e4vufdyQU9yMqjAFAAH",
  "key34": "5kkZBr3DJwXMfKSxKz3PRZMu2SxxuecESDm6jNYi8dJRhzmK6T78dtvEghUrYeJ9d82iyJUMppwLfRvL6WdWqexG",
  "key35": "3BdC6mzMMAR2roMQHfNd3418QfDxL8pYozEFDejcioJFktAwZuB4jCEeTvuad1pjkj6DeAsznECdjdmMGDCZxXZk",
  "key36": "4ivgRuyYFubHjwC1AZbgtadZ6SJA33dmNa3RUsjGU9iN3vzBYpJ4dYuG6fHgwef7tQuoVNX6e3nmcyNfDbLXosjJ",
  "key37": "46frenxbTd63fU2tpb6t6M2YujJi7ZnEJGVMdscudenxGN7VZNxALsf4KstAYC94gS3383m3tWBQQDT5RCvfTEKQ",
  "key38": "7yCRu9yAR8SvkdhugTXmeNAiHP5h2zeUQ9p7j8U6xDXc2qCbgTmB41htHcBJv3MbBsvdT5SDNZDzW5FWaB4G6Nx",
  "key39": "3if4gaDRihDhqCcGmYXPYwV9ve4fbLcTAocHeUyLjZwumBygDSRX94ZciArzGkDNMWjcpMQyNoRKSzgQWgaeax3o",
  "key40": "2qejcZPo9ab1JdngWnt6D6BMQNmpDGd3bHwSNMr7sGQs87Soko4sYFKy4iAooWYg3LEMaNvP1ep5cL2DFGGkYAWz",
  "key41": "oZqDgSnr1VNPYGKoixBfrbT2AhtkrbvxCFvQyh5BSq6fL9boLJ2xJCgL7QksdmEzt4Zo5BtiXnYYtSuen6aE8iV",
  "key42": "3GqyHk2TCxHUboxvMYkDXJsLERDoEDqkNMXiyyGi2qzePUHviJYNnG3BXJTHs6o1qge8iKMJfCEH3dTMS7rt5N7v",
  "key43": "4DYZ2Z6dbx1mTyDj9Cn7GiAotddyrzDbjXYw3vsc5UXxfvTiySdA3tak81Fp6bqsJ4DWFLxsqLTYpHcoPk7zTuCN",
  "key44": "5TrgTquJ5hiSEHDCzWK4Tkvo7goXrQdb8uqYdD4dzeMSdpkPmysRa13usXPqDhnHXjYqBHMbE5mbZYWDLf4m3zxE",
  "key45": "2Bzqnejmvgf1BJmSQ6ddqHiReyXZryYTeDeAh18EFDoQYPhtefH27M7WidAMtmYhHuZ6c5my7QA1931z9pngeGEi",
  "key46": "63MxCAL5j1D77tKDDvNB1oDT52x56ouiws2S4rFSmHeaby9bqUYmkFR9TKpv1J2YGpatYcfTQnp1GvEc6EyoVxmS",
  "key47": "FePF76XhWosA6XbSvRAMHiCJVUNbsbtSK9PekmhJq7Y8AEaWULnVj6kYhEpRDyDGTRZktWjPXwAvxeJCNixQ5jS",
  "key48": "YQTyTpN5jXJyNwmng5y8qXA2FdCumAndcdSxuc7n1HgeZMQf5LPJnBXCqCfxuLznFvqE5bAgP82r9dKYn7DFMYa"
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
