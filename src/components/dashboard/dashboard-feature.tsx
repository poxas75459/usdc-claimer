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
    "3dJ4p9VpX46w2Kh3xYbRwHBgs9YnnhrGgPLp7UZh5i6G6iojW9eDT2JPEaCaZWKbwCWAXXyRRgz5N64FWA2HPMnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qx3tJWvxn3ip7ZnBjCnraURedfKNwdkpvwKPtUDeKgWzvicb9VR3WiKEsTSxRC3SghziXbT7AvbEehdDwaG614",
  "key1": "36vHSLZDQjsWBCAjtzfwZJb4nEHu7Wo2r8j9sNpc2TH8XXf4WT6pQgQMTSs4UvaUtbrvu1XfJK579bZytubvHw18",
  "key2": "5WhxZVFHgU3aczkXP8v5FNPwXS6ZG1TC1TKys2tkTnc1heyRo9Wk6xNXy9hupG1nRJZiDdsNJzEMUVBhwD43fViB",
  "key3": "3xodk7u41XyoMYXRHLpPanJpg6S2D5sHhMUR9XEYnAme3q7JzdWsoBf4ArKMngD9gsWrk12AU8MDR6TNJkzdQNTv",
  "key4": "SZ2ZH9DZTb3FWN7kM8kiD4Rks12fNDvVJ8YJXRYZTDyGvsCYhkDSDQ4GxXd9TXeorHijFSfThbNyVRWVA8NqyJ9",
  "key5": "2Bc4JCG5PDDegs4rVdkhcV6p5wNDiMZQhnSS4kMvbQHMJDhsaAGqdrSTi83NzmWbVdNJS6NvpimL4YF2UMCryvn9",
  "key6": "RSmp1Qxup1LwK8dr8USK7Qyzgf4C5qZumYdcxKbkCL8EJVHCfQYp9xqMUkbGDsxihUjXQjEZJ7H3SodYDDbXwTd",
  "key7": "48dTgYBamtYWvFtQj28uNAVqEygY7gjRwBiGKKdPwiP9v4NQyW9sdVCtMWuHRVCaov8NoFpCR8JvFiaEGFG8SeGM",
  "key8": "4w9yxzxL4a18yPf2VzeXWgJXXcHP9DEGTAFeVVLNPx3PB6RsvPvrtr9ZBBccj3VNqoPbRpkFgsDiyS96eErjHmcC",
  "key9": "5ZVma9d9V87cSXbaFimoNZrdjH3AwN4cUUUQvHCdy37WjXVsc9iXV31FK4Dd3Cq7hPvpzR6EeDD9xbocjBcJeXoV",
  "key10": "5Tbh6NrW8MWgFWpyaz9QWti16nBjkQ542qs3QjHtCzLQfocY2WamzDJ4WkahVtvBL8vH1yKWn3U5JrbeNp6pzBqK",
  "key11": "3U35rkj1MWxsPi2oUATx2kRoAWcSMQe2zAa1k23mEXo4jg743h8pXhKeBcsDXXfqoZurdr6UWJgtzV8hudNqtmDb",
  "key12": "FjBxjxB87knJTF9JmoxiddGvExeggM8kJUpWMaZ2rWY6q78rEayxd4HXpD3DdEZAXC4udEGdQHZqtViFLPXoCbG",
  "key13": "2ZzRQCMcdVCv1YNr6v7FpNXUDVcPmJB2eSZAQz97gTKwFPNpyxVNybH8wH4JQrTJgjR7fhDZSpeaN2bwBTZhrntE",
  "key14": "3ks5u3tbsqYMmNMyBH7CeWHq3hUet8aZixaLy4uYX2LRnp9uipysoyH93qt4o329ncXGFDDcjG35ECQTZZLpqzhZ",
  "key15": "TKKbKX1jfmfMxZ2PkAK8AbKo3xspvpg7VS9RMK9byEXMNXcgLQuuMH3sFFUuqcMgNjNMqa83ZTJDcsvpWzHwPSL",
  "key16": "3Bi1fpE7n1uWx9ZWiHDg6AQ9X5kUs4ojetuynxrwapgLBkU6edAxaiT95dpXHuW5hdaBSVYx4kHar1NkYGgrVAMj",
  "key17": "4NyhPiBaLj6YKqwQbz3pm2QiWNa6DZa5PtDTUXT8SbXz7PBoKR3axiojfNLUmHxT5eUjHxYrvPfbkWfJXC6C45fX",
  "key18": "3CDNHpXDGrBr3i89tohPNnJGYT3a3qCyGGSGRHb3URqwLANibgqxLkVcXKFJ6kxy6Eniqa3sgFMC5sEZPUzhzXiM",
  "key19": "4CSH4AxLHhqSbp68PYQ8Fpzz1Q2LXS1dbsURPV9FhmQ5jEDZZHuyhjbUSTNF5gdx5cC3sMbfxV4Enx2rXtuG6Z6f",
  "key20": "2nR9tfSF4eWFGu7r64UNY6of3kh2e8ohYA3vVoSEu3YTddZR8rnA6kLeHv8HoW1JWWq2DzKLuH6ayZ57cUNrUJre",
  "key21": "34tg7pALjrwv49apFH8voQzTh93xBsn3eYxJhYZBHUJMJrhito3ktWmEeArgYySBQC4LetBKSjtTWMvHcY421oC2",
  "key22": "5fsunRAsZtVbqD2eXhuXph76Hp5xJApU7onL65CxGp6qoXtDV3Jg83pjB6Gzp5tqo3ZfRrtGw8imvz1KmQkEL9c7",
  "key23": "4upFrLPLLtL55ZSjN7Tt4NAtBS4hr9zHoo4Y4w5YkaYtsnS4VB4gPdLxp3RtXqVMFhQtG2h2bFheewqvcLHsiZG1",
  "key24": "4DuGvw5FoRUtaXAymvqHQ1ZxJCsezzgCVgaAB4jrWMz1ykgBZy2BtUxa1fycfZjN493KiPKFGGTZ4aS59drLD82i",
  "key25": "2pjt7HbiMbCgoRFS9eFFK3rum7W5oPH9vb69sz8n2Yv1BVrfbzi5WWxvQijSGhtNnfCfRJdUqwDkVkG32W4GXCs5",
  "key26": "2i5LmJ2oG1VQeKKgCDK4r5LYWyhKLtPDcRhnGcQj1vAyTZ17gC5xiaRDsqprUTEBnwpgrYdnfXe3WfoVX6mApv1b",
  "key27": "5tJ7BghPzqswyqwMvut2RsKVkQYRCCFNrb82V6mHUwSih3jTa1sbZHrZ2ynLrBhoKxn2xPGPVKjdwbBkPpPdPvrb",
  "key28": "2H14NUR3joY7As2aRdBeP3Ep17kvNw19RYd1KoqhXijKXoXezDEfPfY6V3PN8D8cyZkaMeTzZ9GdwypcCCv5T3HE",
  "key29": "2DSNick1AXQSthYkci2DrnVgVMACagS1vbmAQ4i8DehJEAM579LyDb32ZfeyfX2KqVViHvN9zyoFSxCfuuMGjFQ6",
  "key30": "JpXFN7mCeqR6F1qDnEmGNv3GCr8R5pjDzwnaxaysVWsf8588domgXWFtXHCtcrUSQ8p2s1J7yNbDsGo8cUkPja3",
  "key31": "27nzivYAxBV76hLdkn2sTs9ngHAAR6XiyEcw2wqosM6vBuQbx28cVvTcr7Hvhxf3C9rGgVLpWLbGYBu4czKFvydm",
  "key32": "2tQFGMfW2kjikbVAYzdf7dAk8WYYmGGtBhRJkcMF9HjguxxTKSEFsKMxRKM86vMUextmaUWn1iYghAQSkeLJmkdg",
  "key33": "dPKojYnRmWq428WfEVvo6MGU9NrWNGSZx7YC72fEvCcBvZXQUXCct3qoetDakKHAuAxSwWJ1qTVYMne75kjNhX2",
  "key34": "4WUfCQ5GKaVSz45sAuScxrxFQB8SzEe3xJCa9Ev8gCrLHGLy249iNzznQCosGBQtmdRmgxCuEcHoPLpWXt2iZaKQ",
  "key35": "3cHhoVUzz6JLGKao4GCuNHH94H8jumLGx5t6czkUTkVpH6wa3R39aQf5edSC8NPNsEAdraBEE29v9pBfDsaHvBTh",
  "key36": "2MvXwTNiY1jc2ayWvN7JYFqdfKrqughXtbuzddKgqAXgDg9RN5vPCQdGqeeBFftMwexRmft7PcHQCppYCnyhWbeJ"
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
