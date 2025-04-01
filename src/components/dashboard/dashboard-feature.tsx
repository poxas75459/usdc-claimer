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
    "3C2zZNwigwfhUut1LkFDFFSYpwHGWJQAkTxaUDYqcihv1RWEexofJZGjiMnUmPu8aDcF9ZG1sgAv6NrwXEKktfP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MuxbreT6MRuACxfhDHVv5RfCfyo5kzmHMQco1WHdckA6r7caLSsHBMS1rSF5YRVmdLvXTEhhzMwsLb6XWjEF14T",
  "key1": "65SCiUBjEXWNuzHAGQdhjcGaiGNcvve3tWJGgGMmkogVkU3FFBYPLYqtox2GqyWpxkotbW8J1jnbNG2Dxc8KP7Q5",
  "key2": "5sNCq8r96ysPEBqMNHaQ2mB85RWF6b51ntz1YjoMwbTkYL5q6kwdRQckANNk9tU5iUwZvNKKTgEhw84wLr4HJ8Un",
  "key3": "apkyoMg1npKbBNcrxUibb9g3CtpK4UXnuCN5bwJVxALtnpT3T8NdiXzvDebiLqMDcKSdWFVCU2rqDxMJP87uL1r",
  "key4": "5sbSDmAr85WtUttJz638YYw7wBkQMBZ2HJ8HX6D4agq6SZfwvxyQb7izUnk5oueRHzFmEso5tiMtPyGCFbWe6kBt",
  "key5": "HPh5GNswxfZdL1XaaJszEjqFnHrEQsML2GujFiVDxD2J55MRQxPbb5Nj5pg3yYCX1k8PKwuoScvDx6UFS889PTD",
  "key6": "CW1D3pnV6Y7kQLufKMrSYBUseJbSW7LpHuqUAqKjMzDjaC3952xz3gvQVmYp7BWEhFha9MB422N3jJfDeZFT1xU",
  "key7": "4gHqaCe5sKJ8FRfep9c9NB6BuBot7jSturAP6Gg4uVgETXKGUfXUV8mqMchZM9neFP5iySTDMEXTWUdj8Bfdtith",
  "key8": "4ybyLHn26Ynvb6puKPXs5ZEHZWNXqegZxoG33P2oT32vbcDba6An9zsem1U5TFrwP4NNjMUf67V1gKHi5wSpeKx1",
  "key9": "61jhF8Zta6oikiV3sZLMYN8Yi1HbCZ5CfxDEykanLqCWTmaCC4GyuReAdA9UV6cDLS4qFy8qzRVrVyy8eZSo2g2D",
  "key10": "2jMytFWvDuFHK1kozdSmmtDNhyu42NjDy62fnHBi5g3tdDugPf5Ph9mo9j8mXuLfeFKuHbY1yHMvzFCu2R674DDW",
  "key11": "55fQPMHvGXLLwN2rkbynAdUKbhQEfFgmjW1hy27ioSn1Xquf9GrESUwkj6sBpHTuwRbN4rc3fSQXrWiUfmTqeNem",
  "key12": "2S3CvLNNhTQuNLE68XnLeP4tNQjspSe4ffi3RivFSNgepYWqw3RPrts6zWDfzfE7XhZ22PAQ97gwkdoF8dapN4oD",
  "key13": "5YqTzkxiWpdQd7fWY4ZZWoi8hLVmW4iMqfk9UMCwBXnAdmb7466ACE9uzKwhXSTySpZePrFsrn65SidcsVsDEZUW",
  "key14": "596gQGMgRPGooBJUcC9t8ap3tXkUQARUxWyq2Gbkj12CuCJfsFhBxjib52v6Ra6rPnYW5eHtZPFKPge5FGjhatfU",
  "key15": "2z2p3LcinNZ2s8LNBB3f4MtZtDat73PDnVeAwfGAKW3DhuFJemjPPLULzyemABTFmt72nK38WXNSQHcFu6E5JKfX",
  "key16": "218Spmp9MwnK4gsvcGU1yJCYfR3ozkAvyRgo8AX5ZbQ63477zSHnijip7r95RMoPbKEFoTU9AV5mC42pvgdjUTXH",
  "key17": "v9F6SDpycYJPVdjWbbLmpcR4TP4aYgYSdnWxwtridhS22JpEjTYXYe6BH6Fjj735uhWGuSk82HW7Fb6Xev8NQhV",
  "key18": "2rEvc5fHGaRD6w9qrpYLoLf14e6u4yCnZ4pnfuugsBnAH7tDYKLBFzg7RgyQmWhRKWqRyCXEFopqhiL34E4xq8Zu",
  "key19": "21CrJcwZNhKwwgj7F9CAio2RiVjWQoZeShf3cRkZz3x52HbmJsu2UzeFsXYaPccFMKxV6Qj5nuXTiPqdCFm2Pj6W",
  "key20": "4Fc8ZFJGyXbnfhABXQrfJXJ2vvKnZg6cHUGEYDHHRXMXjPyrathP6yTU9tBFTTp6y6koTMhdWYgyF6Jk5jFzJ3LH",
  "key21": "4FyvvTEzWGD5Aa4HHcUR5BArFsPaFHayK98hVsT7Y4i2nrzyRhVQcw7mz2gi6qSeJ8im89hockmWBq2crNQ1cC2M",
  "key22": "5bbX42gUUZBPHzrXg63r7SFUJvo3zx1FSBWMR3dQhvADHTk1ZNMDFA6vhjP2soRMzEK5pMnmaHsyBEBhZN1nGvs3",
  "key23": "3JZeRjxDrRj2f8G6CrVywa3qFg3oU9LHz5bNTh7nT6N3fVdTYSfhUXQ8yDRb2iKsmJH4fXddpdzL9p6W3tmaqzpr",
  "key24": "2svzUEfDyAUSC99WNNjSzbV5NbnocdbkQ9Bqa4RaWs64ybefL7AyYEEteWeLsmiQwZwMvK3LubFEjXEvsf4yvjBu",
  "key25": "4F98d2oKHcfRZyFBf34PgoL3fSmhhs3JZgtYDRgkmr1ZojSBx5S4ayWAFuaZ3iR8puc8zDeK73Cd8FQWnZvGSMHS",
  "key26": "3k5h2yJjFrQQPoKDLAH7KHKa9gvJh1ESF4rSpfBS3NkRWpiQrdF8o2Nwix6XQewpoUkkH9NFx9W47qGPR58w4Lqa",
  "key27": "4JuEdF9Evpoe4PqJrtXK78TgHwSYkk9pLyy7xrxtcNkbAcwMZLHRTcLRHGM2x5oQW8wxnAE2QrwKcAyh7fDw4D67",
  "key28": "3rJ59UXpgys8f17BMjJqKZkQPFFmGrXC8NKYrVMrk23i9HSgCpDYmg5Pxvw3QwvoELFzXrENUsapxC4Sn3nYS7ZD",
  "key29": "2MjxJLYDbcuZxcYFc2zHo3QqFWuJfdZeVuhr4bKKdCK8ig3t7F6M9MzmREBhukr3Kfe4gVdvxkt22QVorzAaPq2G",
  "key30": "DjvFwwXiNCtsCEgTz6xHG9zCRFVnq5grWuwGaBmGhSC5vhCHpkRWvjNivCaFWTG8n3Mgydmo1ZmobX2xrZv6SxW",
  "key31": "P2B7mizgvcnYH7YT4f4NMprNPyayDNuDYGmKJ5SAaHAyojDE9myf5iuUTRmp4j2TW7xzK6xeYceA9KN9JDkoBhW",
  "key32": "4pV8wuqJLKEHJFftdxWG3w85DsFjY5TkYJwccsmjqYu9qQDKGF1UCBcLCjQgceWb14i3wnGcgfMUvpF7rj74dp7h",
  "key33": "2baqqqWdWpdKcY6x9vcixdcKgWF7uuL7WYbRCi6SBWSQxx6qDDiXyZkDGNuYPhFF4DQzdxc7MaSLyqRVmiuChLg4",
  "key34": "52pWngp6QNuRYpCDs6k3VNnXeJqu92bZQAf4YRwdych4qxnhgogWq9P4U4kNNqD2YgMCXjErHXG8yzuG7oFFSxjT",
  "key35": "5fpJJFwUEhC91PWkaDyt8qFUdVcw4YaXpmVahxT7MRcAyzV2szTPxg2SWrAkRhqBuKemBDNYbjA43WRpGY9TakTd",
  "key36": "3YkxGtotiKWMcYDRXFRboSHd4BYfccMHYAsgV9kQcsqf1YENnT2xktj2qFMdQfiV7LsZFr5k3cs9mCEMmivwKjUb",
  "key37": "3Y8nX8wwXWEhgPn2BmN4bzAFSCMBHLm5qPFZz5sx8MpsNGDKug3QKkg3MookZvAuJmk9qHEjtt16hyxpAB6VBtwh",
  "key38": "4v195s23vabHJNkFrLRriEoUdLhaZG5UdvvVV1xzY5Q2hPe4F4TKaZwFQi7TbxifyiakWSfQVdqDu9BKCtYgrHSm",
  "key39": "qYFTc5tnbuXTBURHtqc3B8PikAzx1JySkqCBfewXzdExVh1SLBjhi2NpemL5CdFBHsT36GKABk3SPDCSzKpVvh7",
  "key40": "4Uw2WWo9nS61XEothsruJm73pq2Q2xS9LcsETjhnC5SFeTxGTTzCWGH2EKRQBsSVKKKZ7xR5gmzJY9HztCD3vFdu",
  "key41": "4n6J1TAXxYb55zAi87QBwfPTwZBNxyCVT6HFPXKH5MqKPGi7u5UD4KA8nHnzdNLgBUUKHKDDwpKrRgCnyJJbQfQm",
  "key42": "2tBqdoaZvMZuA46pFE2odBPLPu8bJNBxTLbagfsytGj7btDXkY531YiQJL25UPLqQrtJtJS934pD4sXyJEAPZQnY",
  "key43": "S2NDWFm2hfnSbCJnUs2Z2obwjGDJaRJ4e5ZbbvDJTxVjPxL3xSZnHpH4vEv74b8fGQ891z6kANimMkV8U5umdxp",
  "key44": "5xmiP1USFwB5YVJ1BqPzGkhSbcXjggCSiQPgU1JLuQfz6DzkgB6BfFik2DZY79nrTeJcACm1j7RsPpi13DWZ3ZZK",
  "key45": "4jSaU4m94AiP54MHUVYg7vcatHp6hPihviwv6EBcAda3x3kpQKNy4Ak9q7CTXp2tDCJ2unVXF7jLtwh1w6s9WvC6",
  "key46": "fT8cRh9wTNJo6DzK6LMJBdg8J7Lenev3K9J4jC1kGbrCtdWGDqy9DYKQc6gyijgx2eaZyYzfgFADanEMRwFkeLR",
  "key47": "sETk76MWVk25viKWXeTxN4wSjuDVQWJSyMHsiWb8vjtHudehNZnN6bBHvp9Zc4Ca3aDiN4gWCLqXkNf6vXwUAHN"
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
