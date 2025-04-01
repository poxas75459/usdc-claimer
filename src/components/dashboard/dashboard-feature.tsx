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
    "5ARHqpNo4HwwcLNxU3m1bGQ6serGjVq3XGfGyM7GPdpzoVwqbkhAanCc6qPcUmWYjcYh8pS4nnMjZeQbY8Z2bYLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHUtKQJgd9exZipV34fQhUufoFCGX8BvLM4MT14DbXN8zAzfKGhWhMAMdZW1zUAtvygA344FT3XeGQJsUJamd48",
  "key1": "3FuQ8PnoHGfMqByBiZ46LEqKQvTuXjWNkiu2Wc2pyVHVTgfz6fY6Twau5x3nw43DJrwT4mnPUQUm94yhCZjKeB5Z",
  "key2": "5Z65HF1wfaXB9MndVCwyaNm6i2Y4Y76euMohKTd76fzN7R5MpxWaEp9VYssarRwji3MBZ9bpMRNmFyq5XWjT7y9N",
  "key3": "3nRnFNuWdPDwU66eBhobRJ7u9xQJB69rPzc5hdKSDWxje1f1VgFf5rZarMDuWe3M42kimbsioxKi4C31u5Pagjqa",
  "key4": "3mKd7ZRHjefVpmQc2bR14zeSc4CkgaoPg4Zcp9WSBXsZ46kpVwGbFMuvNTiqXZq2ZCqF4nJE49cayv79Pevhozsg",
  "key5": "2ZNYdHLtk4byByfDSCF8WaSBEV39ssyfsq5pzZdK4vku5RD35jqrXzWcePG2CAUmFV1ajMLL8aez19HRVAPCwVD3",
  "key6": "LJkowDperX8Re9Hk7FMAWzyW1h3zx9qV55dNr3JCefRvfK6yEoE55dqVutFhoUBPWMszzxZPkbp5d1reYjaCwxX",
  "key7": "4jUcrKTfoDoQs7FdqH4nbhGHXQYDPwANhpWNcTgkPVfUWmB1k8nvEwBPD2a5FJvBndibi8cURBLHY6kjB8Ch3ku2",
  "key8": "RpqNUskuxLa1UWm6zTJmPRJ5C2iHzp95BB337DhLj8mCsBJ73bwuXgenFJu8Ne87EDvfZXUNR9trXjzLCAGsPvW",
  "key9": "5Q8apPMjTtZTs8247EDEwC5xSLUbww2ttw81Z6DSKNRUMsA4MfZbd6bL5unJBmVpmaQSVCXD1jaUHikUGnqJL1gy",
  "key10": "P6RBU3ZuhVNDw7oY4bUazLNWyRShP5mpnV3MdPLYsQZKeuyej6GSmNsRHv6Kq9FKDjDuQ8FFFtQ96UzbnA9g9cx",
  "key11": "3iNBJ16pGNQHFgh8DMcazFcD8yaj5ohmKjNMu6pMsz6guvRqw3uoHX4s2KkXLq5iDctPgyGrHighDFgatPC1HwJb",
  "key12": "F5QjNbfa4u1whVws4rH2wndbcWEHZdsajCTrMuUBepSkqFR8XW9zSwwqdYYBh5SvWswofmWdtWEfomCb14f9cM4",
  "key13": "5Ew5qApVsViQbdYiHoFbrw6ePruNSfyd76nzfd2EvP8uhop4y13xZn5EHAnE4G9kPJJN7c1hSeTZ1FxeP2mXC9ao",
  "key14": "242J3Gg7fq44v8BAr44mmegqVpvqf5vUySkzM8HS1RCHpCpzRVeKpMR3haNtN6xqbH14YNh3ahRQhZnMqmJu72ay",
  "key15": "8gDtCje5Wa31fUBHNP17YaG3k4rYRV3stB4B4fkXJGQ2bBbSa2XaUHNNu1bZd51SktLxUX7VXNmbHkkBrSseY1q",
  "key16": "Pui9ZquiVa9hRr1sXRJgnquc5YJs3irzw6Z8Z4evv3iQtdwhNEFcg7H71rY2Ujtqx852pDUYBqdun3eWcR7ve7y",
  "key17": "5qhnNzcKdwzDYFEvhaWEC1V9SpaAHPhn8x3Xgyct2nnrTjmun329kZJuewoJMRDqiUkTSCKBWhjNKk53n6YZhgZC",
  "key18": "CraWKGFiYexzSRibH6n1yiXe9VzRQRh6buvyNYBknc7f5HCZUZH278xagYsFuXCL3bPuWgVKWHREBUGMqyN1j14",
  "key19": "4TY9gXbc6SMV5TE6QG3qhBkLTKUGNNC7c1DStPv5p9YtL4j83gxbpni8H8BGQf4PRWf2xVV65AdjehahuyWGdCw",
  "key20": "2dpHPrnEEjbc8FBCZGrFZKVrvcJgrvRRLcH8zAQxUHgAedQeu3idq4AKrdbTQV8j4Qk74YwZMKFU5ZftKb2KSNbp",
  "key21": "4oviGrywByauHTKFqWQP7Nf6BDaXansXzEWfgX1m1QFWDyq1gAAWK3mcQ7aumUQeSFuQXndGiJrqa8zjSYv9PVAF",
  "key22": "nHkMkEMkD9waa6RYDVJoCooShNmNpGR7wj9Z5UmsdRWfT5KuCJhH1TerT6Ee2SpNuqeEHhEvSsKMnDWZLmJZs2a",
  "key23": "3Vn6y6K2RnNc4aAgCst53kMjDXrgXNCkYXv8GtZv3JZH3VPDxEsBWiBemSeYJX3kGZjhZZtCKaueZJzQ2vxPjPLi",
  "key24": "oApqGbpafi5xsZTHyAWGGiphCAttW8VG1tEFjtPAGCgRAVB8znMfcyQVwVfdBuVSHpKXJFL9YM8GvFrXFHQtrLD",
  "key25": "279cxb2mLqJCNzzHX3RC7n3fVEsBXL7zTZsYMJmZS1A7bhEeGYTPBaNVJoLjJ14NQXhzQPmkQfcyc12jrogL2hGH",
  "key26": "36T69qLT1e57UiuYDEjUMNrM7fgp4d5pbCDobtN4cjLoFrhLU5zuGYvWGXukUXGRN3a35geUTenpTxGG63ue1pnh",
  "key27": "4mJSxMVUudmgqh5rMpkU24yqGEfEhFx9PSazsmxfaGkApuBoxPfvRweBEA5XUT92qKwhKoyHQGspvQPZySFzQtu3",
  "key28": "3qDnWdXNL6QeKom5J7TV9Y6juq1XzLajKBnw4F5LQhfcXzaR6G76TRn6A69VJTGB1gYg4qMQh5AWSvwPRw4ofaQE",
  "key29": "evbgs7XQDeH7VC3CfeZL9u8rWchA2WZ5CHnCZzhyeQYEJPY329WEw6jWK84trJHFAa68Mi8T9vqD19r6jJBffgR",
  "key30": "2qV4UZ9TiGGxkqCmJxuouscN1pHcYBMaWCG6zQVbmUMudiriUPEajmYyDDhwZXr6rYxe9pGjhrkBaRJAPP52L16u",
  "key31": "25pKcLgR7qLNhPVtVum3bTMP424x26gPtGQPzmymbTgYm6HMreTcgLVQedM9XR2sQr7Pev8gDhKJZQWg9eCCFCyR",
  "key32": "uWNet9wZDETcaDoYU5LU8c3vJQwKxFSBPAEg7TbTJX1tcGD9fz3M7d7kz5cY8ZNJGWyYG3fcxLvKy1UJBZc3tCw",
  "key33": "5FWJ5xLkpYKZd7Wd9tLedbiJAyxTYTatgBfAsjL9mGrBsdcBguKVtVxJYZs8SS3iPTuv1EDYPqgEarEkEhmRqYsG",
  "key34": "4VzLh6i7coK79WGSZzJBEoDYJoNUxk4yfFnF9VbLzsU5Bkj3fe5XPQ2DX87nH1R4VgWXyrHV1dKTxbCrBGSd7thj",
  "key35": "2oYGrzhfpWXMKWmAZZ4bEkSEQ4hmKoKUfqtJnouuVVdwZFMAQLEric9bs1iAxHodGaHFc1K1Y1JCZ4T66qCgCDo4",
  "key36": "521i9LDV81LR11s526B11Ey4PPiEFXNJmJeX3wHTSHkjXaM88GhZ17kL7gvMRZP7EWeZkhZsF5CirGoHCdbkorvz",
  "key37": "2DZeKtCQYyg97D1PxNTocBwCB1p1mS4oSXuJG4c2TKwfKivn3jyupAE3sSRtddkT9YjnPmWk72KvFu8vbKpQeKzb",
  "key38": "37RfHYeBe1fUdwDWSJVsx1ZN8pdTyuNzchY37STNiXvNE7BBj3d9JFsPts1tUJu4rLPk4yvyLJBXz4MycmZeA1Gi",
  "key39": "2VRdbQaDMWmn3LDH7xBQe39mkqsgx5JzGJzUQzTxJaUrStbJneydkUEbCjwbEUJ1ADh2D34eWCwGLwZopUqLgbc4",
  "key40": "4BEVmZvKqmhnuHLutHKw7XygnQoCxdCZkhBzrdD2r3rZBWZypAnDyujNQHL3cp5wWGrHyjua8gzYkfK8m3vdeBFs",
  "key41": "5Nz6QTs9qxr2XsVetYuugksbRkty1oeVbMoQizLsH6EjpDp4VifF8NXKYpy8k7Sf1KQntSVzaZ9fpUxGXUD9zyxG",
  "key42": "4eicQTSFTY4rA9voPuJpyQ9TUvrhST8RZASMjA5xZ1zNmkY27vDngVYug3p2A5Yc3R6bjqg5XQYgx1YAQPWVsfFe",
  "key43": "CNhSqrjD32PHzsbjgbi9yCR1dbZkRvUYqek51v4nDjDELqzGxhKYfo3LC3CUU7c3e4bPhrwZcsvEd7rY99zYVip",
  "key44": "3QmzxbHnek6QVnETWLyRZhEcfnpdNVBQLPjbUpzN877uiTAC8SVfqgrHF1AuDzVdCUjfVF78awCGJsoHjKZRkYcT",
  "key45": "2WDo2ftqF6NG2n6QgH4FvFo28E5pcTjCevhYNzuTWzbW7ocfvzE2LYUxWz4grP8tsggNqt38jUWA1kKLQ7MtPUvB",
  "key46": "5JfYCeTaaKzLQuJ5nRDFMAs1uyuPCqK6BxXwDSkkih5RJ1aEg8y3XctKUfoiUZT8h4jjNpt3DDd5QVgBWzks5m5s",
  "key47": "3tQCTZrZy3pXJT4PwNuZjF1KNfs3DuF9vU7jvSAPrx1FNWVYqBTDe4rQpQN31QK4oaMLqgg99Pg6CAUTYV9NUoKe",
  "key48": "5w9JEgJD2iZST7roxo6VVPjd5udWnzxK1vDLvrWGcJvGfsoyGrUDxLz7K1JspEEoZ3agmJQkrtm8tP7ghM6TTR3b"
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
