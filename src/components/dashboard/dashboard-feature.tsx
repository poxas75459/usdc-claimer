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
    "7jarDH2cS8HrV3H1ukzvVMs3tEpCrSnraiE1QyyKPEfoWZ7whz9YLqHKfwuJVijU1iVjUuZk15VsntJ6DkAwnhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTRxX5GGi7SdhiTKx2wviYgWqKdjTrMF5PJw8maJYZikKmxgWV3rxaqQVXUbSzqawrJzTNyFBUyqyKgpZDvfpkx",
  "key1": "2uUoEXwt8FRkRc2Q9bXp9GAYh375XezXmEcjcPGJgsy6t3Utb7K9q5mLiYs5eXJcJfvtGYAP2TJB1ZALCgL31rE8",
  "key2": "xkWn6GAhV3Mu7W1z5TNmksdJ2rdsqByC17n8PNP8mRYx8vtzuVcfz24sx2nDySaQ1vActK2cAmufPiFzaQ6a6Nb",
  "key3": "47XKk7xizWx1zR5dNkFC8RGc13ELBZWS2SHJDTjHGa6a7Q4hrhPdAL2QPfAJskjZMZadNcScBuA9GakfhzJGm65w",
  "key4": "3UBeunCMxoczW3yhGo4WsTQyiDsWmoJMKXNTk1YRZQ3jCWqEn7T8vx1yXPWNmqqSXypgGjCCTDSqQ4uP9cRCmYsg",
  "key5": "5Gq768emwb3DLA5p4UHZXKvT7zhrvJjznwJ5tzcPtPpQ1z5kcB6Zn5anVd2AKb9mhWQvSSnj9Fhcdaip2V1oGEtw",
  "key6": "3upcyDmy1FxMoc2LeBGUwJQ2Rv3vUy3xeuWBmsypm8cmBMYnJUXDU9mqyXPDAdhNapTH1kbpAwEq789kMSLkSXMc",
  "key7": "2qUvBFuA7MQbeGjfkAof1XXNSfNBCvyU4qeznunGx43SVHUGiHaueZFmC9J6XviSfipdor6JtnvAVzeDpsJPaWkW",
  "key8": "4uiriZPrChsL5pGSJhuDGitJnQ1KUufLe3mq5g4iZTTZWYpsBn3ecg3uEXtxpeHypxrX8AXTJxSeTrH56QqxCAQT",
  "key9": "67LDW7YkbM2DUsfXVgVsCH6eWBWyrBabPvyk1GscyFHwxCLXNTZsmrdpbPTLhKaVThEqkGv3Ey229knZiNLDmqJU",
  "key10": "4R3zfmJKRxmAkMKTGX2uswpSeYXQrMvDVPphqRvXzbMBx4raLhLtBJ1UQyJHXWNgVuzRVWCRgf3Q4BQTetbNhMKv",
  "key11": "2bK9Fxi3VzqAwehwgC5PVmEku7qHU6A8aA229SExWroGGUgZwMovyLnq48PCyymfWkxZ6sXKFgjvs47jgXP6hKm7",
  "key12": "2xTJeGsCNBoZH7N35PhGRi3wFjBGwXyhaBCRbdfGep7xano71pQovt7JTFvdR8Dx26qcMC6Xorpq848KUfqic3qV",
  "key13": "TVcjBjrR7aBX3hwS6dWyjAPyLJKiMxPE4cm2Q9Z9p5yWx9YVNouEcK9p5woCzJZNFir51xyXRVXZHkj3A7DY88Y",
  "key14": "52pfV8VXAXuAQKTaLaz39ZVUjq99YP27S18U9t4HsT9H72493js3Ex16Ga9jm4gkewLw9a3M8h4aTsf6fSVfTtD1",
  "key15": "5amL38EK4JgyCwRegLpWw625VvN46kLybAUoVzvMJGjr7tHuEjPt5RDdgshQkUNfKGKTYL1F8vrgGW6jznDJ3buF",
  "key16": "2H8xHhf4ATPN8qpovqEExVk3ictToFvPzeqoXkYMerMHu6qv2d4GH1vetoZkqNWvafUAy1FPDbpEPY1GfhWqcEaL",
  "key17": "5rLXc6aNgDYkeAHbwQvJGZm1v452xG4s3hYshoWgwWAf2gh7jbUAym9EzFJ1NHTjEL7xb8jk9QKaPW9uzG4mSfQd",
  "key18": "64CnQvXu7Dbpyi1TJLVhwmecWpEeLexzJu9tk22HMaNsVdYU6V3EA7Q4rDoNn9TswQDxPaLFPQEscKFjNuqPuyTG",
  "key19": "21BRNX4a4wdanTXWE2FK83BdH9a7jPYLacr7TgkGZwaj3tKnp4ivqdJrPX8fRq8fjgeRQVeM8nt6ighHRNXqHqZW",
  "key20": "UMcyQQqDWWUoMUcH1KcKKT23NNR5CVHFBHVnYfNGRTepwdjzMmGjsjA7vKmpF1S3YtD5uuj5Rno3mMLv9ztMaVB",
  "key21": "2nvtFY5u5gN62fzoQdeEgKAuf6XpU338JYZQ9mtRmfXnJkUZR6XD3AXLB1EScLQTaJKWP6upLdJQKkcw8XZzhYK7",
  "key22": "2qZD7mx1oJ6s7kyjcZe666uXJwTwkeNsm89dYftpw7A2sowUBmL4dMyx6EYXCEkVtdw8G9vBvxt8o7PdsNybg4oo",
  "key23": "B9GzfTYe2P9o3pkDhnQDvHdWhMeK8vxT8iW6C4Ucs5AK1AjMs7omWEeXKToCGqsaAc322dGKDzeJPHjqpMyiZuM",
  "key24": "458HMn4t9RrXvTedpvPMPnq39FjEmtavG8dg7QKFJFN3y4iamnaNC8sHiQ1WGBvmnNMPiNJgdzyD7nPDkXMg9Ak3",
  "key25": "3tgDib2woAvYYZHh3fMQbyKGLzrDorpyLiZtdFbyZWaNTnopQkho5ADfvpv5rS36T1UKDdqHJ3CpCEDXTTXZw2Y4",
  "key26": "48F6LJ2yPQbjJKMNjpBqwMBeCHZMYG6C4b7ruAS7w34ffdBo6GkMWnasuQ6PpRY84cE2qNe4CecdEjgfpp5RcFk5",
  "key27": "dVcPqxPR4aBx9RwM3pUiAKEhXqzHkLVcvAx4qz7Fox9eUV6Y87dhMSB9y2Qug64ZGXNGNm4Eh34bStRTMAcRDQA",
  "key28": "3g5qK7LQnkYCGUkgJBiv9fSyCe4ut6f6wi7rxuoE2X4m8QNY4VsgYzornw13bExErvzhyzFZsrHFFZF3g2NF7J7h",
  "key29": "WPMoqZDhh5KL6YgJeXphAsu5cFT7imBJZMjrLvbDdNf2WKMWPi6FbHk6PETX6z5RMuKxJvuSwynhhhhuEYajsT9",
  "key30": "mDxhnkLMK4fa7TpuLPQ84Pnxv68bjFjZDcq74rtq4heBU9syJf25YaQZSRpH7uSLbTdz1DPQb1J1AtPJiny2tHU"
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
