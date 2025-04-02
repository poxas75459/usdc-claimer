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
    "5mZYEQ2wfTgpDNYVrYtYrTDWYRTFKMjMLZjeAHqL41FMoryiXjfJBzqrieMEsiY5NovDJKGFZot6mqXPSnZ4W361"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2deuevUfWXQcn3EMyEvQeyZBxWtBjLA4Mc3UPSXJ3FmBZmh3JEU2w18s43fBNky24Fh5ydXhs2rrcAKBR5vbSfx3",
  "key1": "dBPvBWUWmGNR2UHhp9opvGCFeAXb5RiK9ddxPEFq4nv6EgotVGhmXQSaz6nhLvDGAvyLhxV8psM1xwvQWJd33v9",
  "key2": "38dJpw9taQV92ze8gt99J3fwu3eJRibZrPVwcjk19nixcNEiahVQMZNFpgMksnLaqzEJ6c8z2GroBMhWZbnYs5jw",
  "key3": "3C8VTUxXvbc7jyGdkJ9qYQ2jJvU5ZvH1qzx8JRp63d2bfM3sotZziUCyDB8NKYYMQ4BXW2BoWTaKXTiU7hs44wtt",
  "key4": "UHj19idZdoTxbCu1okKoyG6w4yA7WgwqSYZZ4KNde9JdqmH6Tr8UKit4omDbhmWG7EPNwUCxUdMMDYJqkcNw3nE",
  "key5": "2ZcQed1Gs9dVf8XgNV6XyAva6dMMhGF5M3uic2kVikjnr6nHMmiYv3e6WSwH55XYy7gJzbKEz4AN8eYH6abCTsGn",
  "key6": "4HntZYw5esbQDEzPY3dGN4Qzwe7VhRwHXnRyJzX7HLx9KCkjCyrwKVVH4pa2QDHdvwCcHpDC2GrBuNddcgxXCLhf",
  "key7": "66g1SDq2TfWGhL7zYBQ8ji3MWHabfgitxtp8TZtiMpqxbzt2zgZt4n4gSQVkxfobPSDmKYHqFcQGobHXmAZQtv2E",
  "key8": "5Gf2S8g5sy3iDinocPCQjmdVK8TRtcNYPJe6CHUafL71UZeicYawZj76dLANwW5DzvCcWAb49NCGYsntjBGvvFD7",
  "key9": "zsobubDyyEUdVRUPJEqft696Vj92CzgsXxJgeP263JMmLfwNVmsnR6wgqcWu5BPQ19GMQFJJL8u654agkrU391f",
  "key10": "22nJFmtzfyWep57z73CAdkkmRNAdDgpo56goydxfcHSLWyr22sqR9xdZvEh7b6FBuvtWqw1urRUuuPZmRfZGyGat",
  "key11": "2XXjzLASVhY6arcPEsT1tkRSmwGWumigthd7GYYkVZvXuKe4KFMxRgyckL9ye5Xa9YCQZZvVhgBncY6MEcN2YvKF",
  "key12": "4mBUzARqVJsE2xSXKGuR6rr4cCoJis6f8ovwR5JRmEqCiDKkrGuMCHH5Qha6oYUupt5UBDEjsU2zRA6rGrWfU69X",
  "key13": "3JfufzzU6PBAxgieaGvjUvLUDp27E6xwZ43a1gkpLDobtf4WoTxP3Jm6w1FubzxFkk7zhVEDPdEp3XWcc6WV5Rxr",
  "key14": "4sGkh7LZ3uKTX4bhaaqu3nUCrw6ai7sgWkFf8PaMSgj2pQCpEb35Gyr1kfGoNTgsSvAANoT7AVYfP3a8Q28YcNXM",
  "key15": "3JoA4SG9uhz8aNB3SDTuoxWL1cUmzr5u2fjRxagvXZUHwYZe8V9tfzh38E2vQwCYgJbQ1kAN2FfjBWnLNGvBfLuM",
  "key16": "2huTcZGFTG9McpRB7pLTk8KqEh5imvdfV2gC94nb8k3jmTFzopnnbFPZxympDgRuDLEkmYNfHkBDEenZNzPdMcrn",
  "key17": "5ufaVG9XniRwJtYBqrdwcjyivPhUNHpmw8Xksxe6p62Hc9RMPiSJn3U5NW2UUGCjDCeseKBkPt7K8jhqTSceKknp",
  "key18": "3LH4J5BMbi7ZaquktkjQuBxgFwmvotSoeNVmvEZLxXY7xdEUZbS3mGhqZkcbc1DQkGKRgFiCbWM3tHNbdCwHymz7",
  "key19": "5TZsjE6Utch2DFTfiTdmhPgHdsBX8pLoc5ZwYy5AVqeUHfzTswPkQaLzTJQqefLHKUFM68fuo1Z1fy86uacQn3GT",
  "key20": "2rLg4Bk8km6zUiqGjeXgpmmqE1swsDSNwVrKo2sm9go8p45DUiguLYFVUfHDiCMwoVt47byKWE1AK4arRBBnM2Wo",
  "key21": "5wJzk51WMhSVi5nkusYHQLfR6hLHf32N484XCAQLZwxX1jGtKqjLjNnGwyheAAgLXNeaMC4yjpA9RZhEzaxoCgXs",
  "key22": "3LBR3nbCNaUNCZV9L5NcYnaqdtjHGfUJ3BpYMfDaBqVGFGjUXKpCM7XT5sTtkCitXKo5Nwopk1Kp5pS8WmjtYVqo",
  "key23": "mpA8Gt5BgT74GkVX5WNN6yz4dxnBi4a7gaaf1SjYkB4TmZxhZobckxnkwVZqJ3djRzpvEtLKNzsQRdvjQToLwS4",
  "key24": "m8qbbxWPMd9p3b39Vc3Cr6VdKG5TB6PgMtfovmMb8s3nwCTxZuFgB2RDxAfJrVpq9FFRDpgVHcXguMugY7dtZeZ",
  "key25": "s51fvub9YZcBJbgLHmLAcaLk5V5j3svy2fKTPm8SNaCt1BoaKRoFSAaFgHNmPjPz3zFvQMTuh8sUhDTt6tzk5au",
  "key26": "2G9RreEJizRAHeattun6YmqhWka9nS1bQpE7yEAd9mmEq26DSQUoqhSHFHqe3zScu2p17QdEeohEpw79UD3P9Z2r",
  "key27": "3vMkgRrX47HKbVEdXRNQc2gWoJTN1JfFMQPfwxo5fTSQDHqMeBnRH3p6Wzyek6Q7RwojLrhUxcDEkCSztV61BTNT",
  "key28": "5d1U2KszGBN1WfQXveG2997gZbfQ8pa2ZjmfgsvheB3FCB6aZUcrcVoM4jcjiPFd3ZydLmTABMUFq2oSfxhS6DRP",
  "key29": "4VaRqH2GqT4P9SuQCeEgjb6UpaRdeeFXRM32SzCMpYdSWQZgpQWiPHjJSq1YAB5ipRNHhJwPoDQoqqGrA51t33HR",
  "key30": "3anFyxPaXkzXSH9wyPzAASYXjZ6apzjC3tikHDoUWiYH81uN8u54HDeA3w3Pk5hgcVpZzX1apT7eYdCN8LYuXRv5",
  "key31": "4nNcbHkgoBGB53VLk23rGSQUieZUBmx49Vw9796coMw8gXhJWChd9eisCPsXgE6jDCcz95kgZtxrYca7p5pWf8Ho",
  "key32": "3vAQ57wP8dyZ7TqrpdCYbpKM7Riz1RKcJiA5kdzFA8W8DurJ7pFNHrygVfAbNe5ChZZFSdEDvb6P9zmuy485VTgo",
  "key33": "75B6qVkag7zdtGFfQiz8QDVTBMWNsazpxVpMvYLkz7TNt6FmQLP7Wes7XEPiMmAi3EFRGcJbrbu155Z5PND8kG2",
  "key34": "4R9dVYzYHiqgGwxAqYdUMGfvgTGo35zHSnwJg7WtCL98kuzHw9crZQBWk2JDVuXz6f8yomk7PxTPUmtapq88N6y2",
  "key35": "3fTZc8PqwfX4S8imrf4HVhkeywXZZFdmWkk9fD4Xyrr32STUx4vwmDwRW6UjUxahpx1XnWRQHEzjRrXTdBsrPF2B",
  "key36": "43fRMLkBswNUcE8ZBb6j2BpYeK1hUVaHDFCCWWx9UUge8YLe1pMDwFFeVnRQF4Qp88pBe5reiKnMLkVhChzgudXn",
  "key37": "4sy5gHBtgPorZqhjFcFpwBXZ6pKQQqqTACCRJEoCYtGd6kQrmNaeQiYf17diLHYXhmrmsTthJfxrDQvSwbfp3Ncr",
  "key38": "3gGhuuQVSzbGys92bei6KuyKkfRyFbDBNd9Htf63q4axDbL1WiivPSRit14T8wydE5zvbdfsjMmhTZxxqwcKmNFe",
  "key39": "4Ahzycjw8khQ2Rdd9bS5ECQ1JExukcfjAqmZAw8ghy5v1BpeAhWtfETPSyTuwdeerdsHEU1UdQZtPhbBJ9Tnhu7o",
  "key40": "38UQR5HMH9uK7Vv2gDHUF4F3zanPSqui1jxkacbnNUirw4xQT2iszwn6WsZQcUd4NoCmtWakcuctxJng3hLtwmi",
  "key41": "3kWAPdQrfzDLQpKos4sCxx9XnKiftkdj4H3xb9ntGHhyrPt21w8VctWKYXGduD57PYhzYBu8dsA5FwgxKKXfdfdH",
  "key42": "2j4G63wKnSoSsezfxF475k4GWcxQcyDkCv68gGn98faHSM5EQVjbEeUVKFKpyWH8y1gEqsJWr1KXxN4Lu9EQYQtU",
  "key43": "5pNZ7Ga71EbmLS4BeebGiVDqbXzadeehTnrkm4ao458t452hoG5BGsR5cMF9CtrLTwXc3pfMnVMRDeceHuJdNGpq",
  "key44": "2J8nY4yJNtXPLRSicNiivSAGyqXyLtRB47sN4iGgZbKPGBSJRaK4bxe7vxvbDEEYCpP75hvpcWiU73dyQc25s3kP",
  "key45": "4R9MuuvJQqj87QHSjW1tYWcJk5uaPX8fYVhb2meSdWy4AKoAidW73T2VED3KMB3VEDuujYJeSJH8xnbPrjtjqkzn",
  "key46": "4ieoMqU5uPF7DgXwVk6iARaKSPWEpaRTQ6MyodcgzjBnuTFXQMHm6B9vwi8q2oYtDSTJa89CvwzsS7TyhVqkWuJ",
  "key47": "5SpifPtFC1TayfrxaabJcYjxCGSCvWsXacZbyntNyFrJHwx3yG2uAgMuLqfF6pAxBBGJSkGxS5hbNgtKwN3ymXCZ"
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
