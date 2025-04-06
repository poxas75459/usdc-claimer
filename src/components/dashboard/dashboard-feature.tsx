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
    "2HsipLRWZSgkgLUS5XUuhGqoXMvNKYox7MRdNGM4s6V87JhHoc4JmN42Fmw5y24Nz7rXDQ5ApQsUUymXdAypAzHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaD3mzDayEnuWyyaL3XNgnVwtNYkrvFsSTcNc8CEQyxkoBLvnoHGm9MiFma3y1sKiwoqjkrfBjomkgHMBr7cEK5",
  "key1": "2ZZpc9EvooLL8yMVxYZhM8BwY6gAd9sKKXQh4RCFzCHsWmzq4ud2dCwEgejRxHftSH7gQ7NvbttopbgtEhYPCTBS",
  "key2": "41maG2p9D4Zp197LERLwJCwnaJqeGhT9bxWCNXNWXmPAjACknrwgv61QgY7WSEbe7R4zcnkte7tLKSfKC6z8SbFa",
  "key3": "5TecRp9SrAp7u6BaqqvN2nDCnHvJmMBCBn4oEejevf9Q5X1E7awMC17cuK9whkK6hcsvk2mGDxU5kzbjwYLirai7",
  "key4": "YAQmXxceGjLiPvPUptEJwvC4kkGCG2zwHRKFMSHgbYNrUiQW3LgnTuJf6oFSwY3zwkzQgyg1KtMLqMqzi5Qproq",
  "key5": "3v2G4LcAWSK8GprZtUNKD7hJzrjNE8Joi5aDkfWUgVaLWtCtqeHU7KYsG7g31b841W2KLaL3HanE7YqttfCAJrHG",
  "key6": "2hYMMuJjZXFXdhNWoWR3RjN66XLMERj44H3AJZpgKAkaqi5Pimps9Ro8UJUrtnwnPfjz1MknUnrWXKuAXdBoBpig",
  "key7": "6dxa9uecUXuNAvv3sAcDfoqW1y9yvmwZ1GGE76FJmNjgCL4ksJvXRQ1K9LNpGrR9cBrLdgqL4R24KMGYyUtSFSe",
  "key8": "3YPZ8kVY5DM14tiFcGQXTVuf8pWmEHdQmxoU9iK5gyEAZUDwEPhQkkNM6KcTc1cd71AyLZpsX3LPy9P7ucJfTA33",
  "key9": "2aJWYmKYGfDRaopCcZqdnbu7cJevE3ujYai4YGxaybjkKDiBE21BWyxRLXezRxLgpskJgze8awqXWNd71CPD5iZa",
  "key10": "5SN2Xwjkghg84w45Dtjc92kLSvf9rnjMtH4EhaQcZZjFpKP9m2JtFAaJXdtX6atXEYtLXcCRA1VEDxiyJP8yfz47",
  "key11": "4TetoyXodTX5vJVe7GXB1WZz43rru42roQHhQkLVMFojWFqtq2z1HNvTQWJaLG1CCuJ3hD131SDZ9JPBLMAGUYBd",
  "key12": "4USikSLiKHSyBrMfpZXXBUigFZo4kdW7LBdZBYrSUExDkXK1YS3zWEV7g1cDLEGQXJqEH8jidaZhrZYHQFJeUPE9",
  "key13": "3oiY23SpRm7YrKpQ4ScUXXv9qRRh6bhRoSkSAo842VHGWKzQuc3aSZZtic1dVhqRJz1mBWgT4NBHUxc3ZRiUv6st",
  "key14": "5ZvXpy5mp5dNJ8RYnrCqDy6nJJ6VWdwLeM4kFS9B8Hu9sAYtegjhM15bw296pUCwqJhN4gjntwz8bctad3NpABPp",
  "key15": "4TnMxYS65L385wtZzdgobNw8rsuqJvzRRy2zNcWzxaVXBK73cuuKBzZ7eU6J3h2mhmCt4gn6Jzs1uGGRNLaQJMY4",
  "key16": "4HFEfbrZuqiar8QAZLteUvWyZJ3AYhWoiYtQJVTuqLM2mpk2twzdt1f5fm4LKpmZhuxCqLBxPovZZ31DWu8tZcGr",
  "key17": "3Gmrrpmefj2HkM5iSW1HRdN6cNJyxWqQSNEYK78RJ45sJrApwu64baGfs7NAg2ovUhFXxkT9fYLuS3CpHQgaPFSq",
  "key18": "63wSrFFDcg2iGRHP77iLT184wZCDwVZxUDkqs84UX6NeEhZ2j9KY1bNk7mmPzYoGmoS8t4XCXKgMLTHtHTaHc28b",
  "key19": "EGkccnj2iCKrUt8mjFxHRCC9Vs365pJigBPGaSZpDWTL666sg6okekVipKby8HMJiQA92EKoUgGYY8V2XzvXAkv",
  "key20": "5a4wFA3bUuMqPKTWuvGfR8Qp7k7msx8fmH3p3UR1PTUsNNrC7pJExCcPiRNnsBKsLnTpPL9Vk5EvM9W5uH6syNi1",
  "key21": "2pmEv9z37hNFgGyU2n85bVmNexoRhLuhZKKAHaubJeMxq6Rxxhx4htBFxhxm3BcnE4tnurqpAKZ573eZuEU2ALCv",
  "key22": "bfjKcaa1L4fQkAJhEVoJd42iQJP2h8q4o5AGjtr7avnBtGCRZH98Pi592341VXFfEbAYzWQjvGcQvcsEMAGA97A",
  "key23": "4tmt6gpu53MZ1stHaqLCkUCuZn3qayUP6Y6sRdxVjygk1MhotRQgdMFayUswHZfBNBmjU7AxHybnjh3ypyrXBiWu",
  "key24": "Z8EJR8SB9VZdatH31n7tdCyG435JA73WNK79KGHNom4Hy39aSUsv1HjG9NpFhBPoZYNazLUrt1BR1bcpL7N1AN1",
  "key25": "2M3ThL6Z18bZeQE239me3fMfhMdkCidB9giMXQWLmX6L48C2pDmiyZJJWg5wgGCeF4CmvrnpGntXHyQhpUPRGSLC",
  "key26": "PnfBdpP3smUNcTCbSpyNdBJgCUvmdn8wDoBWg59qiWBA6d9xWcuGDTYLTTLyTE3NbeQ13oD8XRnY1ELRNE5aEhB"
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
