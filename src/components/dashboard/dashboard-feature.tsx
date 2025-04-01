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
    "5nsJUtek1VWHyZmPd49ebeUshC57tJ2sjiNbk66iouuJr7Vxe53psnKzGu7KQKiQZBesHdVrshe7HbRz76TST3R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2zeytMezWqw71QSNMuVBdzW5LC2KtJwyh2ND4ca8Jvo6N49jjKYxuf9r4yVBwgzpEkoyrdmpPjJgWr8hQywjL6",
  "key1": "CHKsbNymiiwtMttmrkHTg2Fwe1zaxLBj2eLG2sPbLusLq55ZHZHSdvzAAwfoHfr3RXZWw7g9sYCjb2mWBmuGhz2",
  "key2": "28VSDxP3o6qyZ2wK4aei6CgZQBM8pUqiUHHuVrMZHbgn5bVp4CA8cnGgR55X2NRUVyXw8sa7xcj1YtiARF4Y5vPt",
  "key3": "3urBHXTZ46iX11tLDRXeh7FvU6aYn2HavaeTcdKov3HnvrcpUkMuRKYdsJuEyHU7g2WukBDmL1HtoLDTLswwUmA6",
  "key4": "4E6usj68XXeF6idzCqCBdBtHrBthCuu9iSg8UWqrG1PzgVBm1oYnMhJtZhmE4pznxreoP3HTKE5VajTBZePF5JBg",
  "key5": "4i9Pcrczw46bVB6rrYuaZQs7XpRZu1LkYxYqCEs8sXcegkV5JxnMcUKkxsnwxXuRTgSX1YHqRvhSeGuWmV71uW3d",
  "key6": "3bQfnqE3vDB7imr8o5JLyTYz5wA3qmHbnsqsjpxSB8fnjtJvt7WEQ1RSMhrSMpwboQkd7mXiaeCfTD58ZWGmAENo",
  "key7": "5Hn7WVUDxBed4XwUaLnpgZTFbAg9AxHf47ViWH4WpmcnGdAQEE3uLxazVUZmMNjgKrHAZJP2LpxBdM5umicfXyg9",
  "key8": "443Q927fwdpfCXSWZY6uuFGzcKNGGo5YZs3CpFXBukQhevja6U1QkKdAEdmvyUBQe2kw4KBBbdEj9wKFz3hpZ5Th",
  "key9": "3gmH2GBqXxAVRMeqQg1fQxMBu5Ty4VraL6gSQaBD7JyXjoDqkSXfiZZsUSqz3s931xckFRmS9rABVwaTeGod6fMo",
  "key10": "533kkSjDsGxk67oca43Z9ZvevHucmrrk8K4wcYpAymCsfnp1LervwAvuXVSv193ripYMn8PsE8V5i8jhgmN4vRbo",
  "key11": "TDsTyg7p4NVtYrb22q8f75JP84vKVkcCKqN9p8GZtXD88QaFfH1Pvk6Lro66HwXEYw88JDa3FRPdU93bHbPAQqB",
  "key12": "252xGTrBxTXfzkKreeMGvwRsb9HkdUZ5NbwLXuvzFxeNBFvE9r9eBZi8m7Uk9M4Ddh4gyCgw3QXsSNv7Y43sj8Z2",
  "key13": "fAqu4Q8z7tZRpfgBV8ANhnusnh6Ys3N1xfNtwWrbUGAKA7pExt5bVu5StmSPk6TQR2iMCyMvrn312q1iUnQ9849",
  "key14": "3pdHAAT6Tvu9PDgKKJ5RkjHttuZCYSfCekcjoRriNyArU957koQbHaK9WjP5Da3yh961QY3gTRDvASKq4XHQ4qLC",
  "key15": "4oavagc1w3BrSpqMksANqzoJkjRNgt5x5zPZ2DnCk9RCvh6LuEqaw7nhosjQgfKrXRTYpPszqgyQvkiY3wajDhQe",
  "key16": "8cP9BdgtGP8e4QhzosvtZgN8PgBuVXbWf75hDbbthttNgUQJ3WirBv5Cim6ge4Gc6AxeuRLCLfwFsJT7qfwgZA6",
  "key17": "3ayqYcNgXpVchz6moRohPv5VEEEueXg7aopXX5rwx25mTEsErGp4PGhxM25GUHsfjD5pqs4tEcBHmbSSmMe6RopG",
  "key18": "2yUNFTp2uCRaXaJH35Yauz3mHwU2J9x1PpUUooyABvWSnXMfrVsw5n9fXspCEWrwVZVYMYWSpxYAdEUEJjwLbT8r",
  "key19": "4fv2exwz87HH99MZtwcLcWuHk2xJYiL7KkMt4ajoQqKpmMCe5gdRJfviA4yEc6VhogfhoWS3skMBUZvpG6hRF4vy",
  "key20": "5HXkqBsdDfiKLNVuxqVpHRAB9TvEVgz4z5DmKZkpko8X5Qn1jQx8BZg9TACHQhQSJDSGRxbj27yRgmqkom5TpaEK",
  "key21": "3s2ocAuvRSNUVoj2K4LByFFuYWiu2XHRVzJooz5Bt6CscLYQ9K7UcqQra4Qmat4WYZhdSWuLj9FygsPNHNeqm3gg",
  "key22": "3LsijYpp4J1aKsouAZa5Q78vMxnMc2aMgDf5WAgYihJWcKh254eS8kJEm4rENdqiWNzMu7GVaKm6FF3cqTfiwK97",
  "key23": "54obj1ojGvYY8RuB5xFXFHa1dY2eD2McTqeHc81cnhxNdZ3C43TdqFS8maimvoihYwYDJbtZv4iLEfwWbG5Acek2",
  "key24": "4GxJ7d5dpMjRi2ppS4ceawYBj33uxvGK2C8Zka14wtMpv6XpL9hNK28rfg6EGaNmcuuyViaVcKLcedrQmBJYL8Zs",
  "key25": "3JttfTUhpTPGWayQQFY82ssLPREMUpVFTVtAxPQGuCLmsyaywpCqLecWQhyz3H7LqBDEx4qwmjomhvVMUUr13k2D",
  "key26": "5fWDkHUDzz4Ld7YmayLNwdxvQhaUaU72tDVZfasJuA5EvpXfzyfgRZaf8w5JofCT6sTAw3JD8ionBcH1qvQF7Hg9",
  "key27": "5TJh58LnMZrUgmnNysSaVzYTJtTYCVicp17drv7BaHfaCb8iTmvn9mPs14yY4vcVRUwPbSFXYEJycT37oHJoivYH",
  "key28": "3JsGSKnycfhatnYrQ3t4aXJ5YJ31bHsr6BardYcC483yJ4ZKgZ2gXAaTJYn5mqA9gF7XP75gCgm1uaQ9Ch8qXsko",
  "key29": "26v4hnWQp9B9XVZnnYWxC3i8UgdDXr3sypVGgNUZeksyi9UG5N7jtGYeM81fUcdwSH9EYeqFN6i1pzJ1Nkz8kGDv",
  "key30": "5k4n1x79zGdN5324qYHPSgL4xqdtYH7HgJ7hJb6Yxds8qeHu7FP95FU7D2Dy6tt5XaqhDfFzxXZczF8erz3FuGdx",
  "key31": "5DAFAj5HucDdwRjLGk6cYewQTA4tAPCjAtY8xs97Bom6QdBG8VWUVnsMKmjyJUBDdmqiELbrqkYUBDCugKPrgg4P",
  "key32": "34yUhzkKcHL1oLpcc2d9PgQ9ovzMfSV61VKFPByNwN7RwXY3wv7KTFYeusssC4tMZePAjy5zJ14UY2RQwDzt2DRV",
  "key33": "5AWjDuVJfsoBfECrk9R9hMRniixHY9c431UVHWEKQKa1SFVnpJYFTu2MSow6DM76bnkPFEQS5hBWz6GVCDXNn5Sx",
  "key34": "5SwZUFtQ4ck7dAZdrs7fPbriES8j9LaSuwD43BBmRe39tWxF77yZdceYEzRVLbSbcqwuHN556pS9P2Swo5t7hDYQ",
  "key35": "d7yotcGZaPQC3cw5GoSoLDsr7upUtPpWhAWfkaNEuvrXSJ7Wb1ZTDPMguQnzmaTLtDdj3hBYksHRBqPDRXBrzSo",
  "key36": "23RJRg5ARNXyAjw6civyPrh6bwVfZHGsCmHvVpCq4NGdPSgKU9Va8WkiGX7inb1PnYTUHpewTWFqjGNwaMLYnP3j",
  "key37": "3d5znMHXBwX419w11VbUcYKGidnYN3io4QbWwwaRwkkrWJ5xHLr43X1YgkSZYuzmGDmkoBpX7mZ9Sa8kbQhRDJca",
  "key38": "5NSAai3KnDWJQmxEY4akTHtBF27PjkPWdbQ3MLyQjoGq5B56WSpcMuqaEri1Sm11MDS3QZywM1SWnjX6LAj5jHN7",
  "key39": "3Aon59TsoddmSAofa2DZRKLQvNR6zWCkeyAc4xj3reAARMSTwP64WW9d43NAVqTaB5jEP1Qf67SDeYythBaaGzy4",
  "key40": "4ome7BBgX3nY62NTqaVum5L9JcwZXxSswAS4vQCpSkprMyi1Njqun85Bu8YsZTL5NQjAHK6KzguDfc3rBiL846HP",
  "key41": "Wpp6Ezgnzh53ns9CpoXF8LLvHR6T1yS2cm8icrTKP5NV9BmLxmXtHTSLsgCAJmPQ4h19QMs7nT1t1Yk5g2RtCCP",
  "key42": "mv2RXJPh9gwA5b7sW3HvSsdm5vUDCTXhqKvmVGnJQu8NB7ziLaPmkq5mt3MuWtoi3kkQrfujfjwipmpogUhC9KB",
  "key43": "5tU11JKYwHxFE8Wo3BgCRZ2sjz3qnVKyGefWsQPgiL2LCbfK9xzZ2NsBu8FFdc2sts2PJJqR7gQFkkaS16ytXE98",
  "key44": "3xf4c4KcTdLYF7ffk3VhUCNFCQ9kp2oiUvWqtuThm4GYk2rVnhLNjFrMMtLqcDyHU5bBvtv5s9RC6HF7Y3kamsy4",
  "key45": "3AzmDqePx5v2jJMjctsRi9vm3kr64fcmXbQWeMHacNrBpyUzGD3wws8WK1gEWLAwLxjoQQjumUVxCdEi6Wxrfuz3",
  "key46": "5GKYsz9eq935p5hZuUoeKFjHMtE8V7VhJEAVqNmDo489D8KMZ1ZRcmu89D5SdvH7EEk91VypBn3LjPkPA6D3HzfJ",
  "key47": "4ApKhnkyGedeHV6NfHdfCptMEWUz1ivoKvh2L338pwdajRxzH7AoHEj4B8Wby51hQkjgXqdmL6o4Zvfb1q2ttuAM",
  "key48": "2oCeY2f7Av7vfZ3faauK9Y2tsB9pmMFpweM9jvizKtAv8PAZFiwuxhgrGDtL9X6Nk6PgFnkbPt6nXhogJjVPsQJP",
  "key49": "58sXArhXNDPVqM2dKbGberNBb6YyTDpwAuqWuLF7SXgr41FT2Yb2BsSgbEuqnCGT6uVp3Ddc6SDiy3QJqba7pToa"
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
