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
    "8rjESMQUh2H8XkpZ15b9bFuMdCq4YrgLaK5q6t8QXh7SBJFSYeq7UVFTvDenq8xx3z1Sn5GHC3SE1HWQCR3Sdqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WAbGPDS1X27jPVp7ttdL5s1hThjbAGpbRurL4oAj8tE7EsYX2SRew7nQmwqi2iciqj3o3uuPukKuSvi1kQEnvb6",
  "key1": "5D2wexQLkP5Fypf6mqysJVoLZhUunW2BeRfWJUosLn1ug6NZgSUtwJvABgJUbUzoQF8wEYaY1XGA9Kxyt4cvSjYT",
  "key2": "LMwSwcQZoqSSuqmbPCVzCLN3AiTySyjENLHCtgbapFZRgjtmK2V9HENrbDDoSmBzhsi8TJMUPt6ErUZ3m2nPNjd",
  "key3": "3xxYvBffPnYNWArhGYY5ez9vXE7UZ89FW8Db8jiEU5oWtX6zmXA31GC2GbpFPVDHcVssHs4y7y5sFZ3MdN83MyZu",
  "key4": "3CifnFiGaeSKTNRL1HkumciyBAQsbGhrpQ1aG2uP6h4MWEbb1STkS13vnmBKazbJhYtXZcsJHcwqTmXqsa4cCaVL",
  "key5": "2Gv15t3Y7u5iGWyF97gvpNGnDCFYEc5cDVzK91LJDewXaYuCGkrPV9qewbyoHPrBtMk6cukJLSryHFTn8qBXjqBa",
  "key6": "3pTABttcM7L84G15WPCY88udJP6AfgeakXgoLZhUKLGZ8NUx5TZbJ2ARVfL6RAm4XXV9YwZNJ7552BaCnoZW3V1W",
  "key7": "4G78EYjszTW5RbpmHjL7QokFmy3PS1srWaqFibm7MNLvCDThaJcfehheVE7QQ6B4zZDFzXhjPTFHFRWuxo8HhEKh",
  "key8": "2pTmjZQLR1Z3g46P74BB8xM2pMs4sMTYrwZFLiJZptUdecqEotvA4mzuHDBa5ttttLWBjT5LEnT7Hr7c9NQcY6M2",
  "key9": "4QAiS7uny9ndyJcS21UyhHhvqzYCZYyi9YoVNoaWcLsYgtyGZKhf8jkADe6VFLapdi4R7V4Rj5kkyHFbmMYu8Xd7",
  "key10": "4CuY4qpveGnWHpBZvkNudFwMhnLJNqXuqnqo1gvQwL2K7P1gnSeDFA2tBK96dsYwneoDxmHasRy4YC9t6crwJ4Uq",
  "key11": "58x8PBS7hLew8HNEKUDxe7h5YbgTQWzhE73iPXVj6EaKenmYF73aobzMGWH4ptPPFfu1KyipY4d8b8ziERH3cepg",
  "key12": "5vw5fncdmqbm1yM6XSuTMj8m5KP8vuTXzkm6natRMts2iHsN2Vw45CP6yRNHqSG7s1S1HTGs3ZrcUNYjj8iWptf1",
  "key13": "5aARWThWqYbQw6Jtx8eWLZVBSGHqJf8XmqQEcGcBrb1BurnBBkHyhFxxzATdtjkdTWwNrDj2NyoBAksAuqJFmZ3f",
  "key14": "3r1RLtXkM4Vr9GeaMLeYMaGRJU4gr68Yb9HDqV7R9WqPvxoKYeHMMNduuNu3PCmb4dBSAoKUT66kUXc7QpumJPe",
  "key15": "2E1b5czjNbMZikwdhXaRrwdZsPdJJ7WjYiak72MuytN4Vm3nURESKeBcGv8ctMkqpe5Bgcve9U4mGkihADa6NCVn",
  "key16": "4PFyxNAJHChkjAJ2mx5UnNeKPwFBgg7Q3SqifodjDcFPuFX6Dcbf9M6PGNAybuZAxkDx4w17ZHDvQSjePRzCec41",
  "key17": "2SE8RTXf3MTncBRkMaqVbBbBTvj2GbgYHxLY26L3WRc4wCdeq71i3qux5pB7hjS8eUWkrfxGiw36VKuTgoThjHjx",
  "key18": "2Rh4Fg8GXe7uvNuyooxt41SFmwd8H6FeM4w8uMmaSeb6yCnNfNQ5UzJNTNz4yYpk7h2jeW8hSaiRdt7kqYJcczyr",
  "key19": "gq94BRAyU73cNqLS8R81GxLDjHLxG2yJUGAG4HfQWuYtr9YuDRNyguR5fMjmeXESNyH64EaiqyqnF2EywawULeT",
  "key20": "2ewBJUbWMxFWxbG42NAqBjGKs5igLjJD3yReWan9Ka7U12HPnkQY76Y1ANEjffWQNHoKxwBn7qTxSCMcGgmzYbD2",
  "key21": "5haYnRBAaEeiGD3Y4W6vYWxyFxKpCee4VhtKcf3yR9GN7fBtByt2ZNaLYSAfWbs76x5hXfj8atHxMV8op4SorgZJ",
  "key22": "5qJn5XfSNPKPptu8KHQLHgPAZrfoC3cnpApbLUVhZbKbvTLnjbQWPXGdRFmgPhurBwyLBBc9TTw8pz1ddLwrgSzE",
  "key23": "2CSGvQyEkz1GVVQGx74VEFtS33Rd1v9jxfATNRvq8f5BVP2bKky8V4h15vgqeEkpeN7x9Cv5BJutri1hEYiCSGaq",
  "key24": "5McBu7b7n5uAoqo72eBKc9HrWhad7gpxXoaMY6DXs3iS4wcvL8x3X1iUwe1dT39Hjbrvu4MKakHdKmttLNuRyd84",
  "key25": "384FqpbTPkvRPRMm7CQA88bGRNJgDV9BxYMW5i3bFTBYknSmabiH4WN2GbY8ZuSTBgmb5UqHiW8Hh9bsS7smEMQa",
  "key26": "Sk9J9Tn6rwU1yKam67pfE57y2NH6b6YBzQPfKUjLaiWVg1UXT5ks1o6pxQUw7VoRECiC771zRdg8xNRBkqA4vsN",
  "key27": "2MUxnmzDXvW2CkD4Q6dRmwNH8TcMmiuGwE1gAFKAPErMJdwgBdvWU6hyJXbDtAgteXfmy7QNWbzkpxfXCgk49tgq",
  "key28": "3aZvjVDJ6yRXPTXhCAmJVWwPpoh2CSFe3FVmBKYDDXuBKWUjt6KLtEj9tH5yRM5VrBdqpUCDTbXgwDmDdoZuB7jy",
  "key29": "58gyYXCea6Zyo9We9AXusfJyC8uWRxNRriCG8MT4YjHE97seMJPbmAe8eoaLF6bCcWWesmQzdsFaHLpGGqRuVBzJ",
  "key30": "5etC3FbzmYx3JZzGH7QgbsCtS7chos5KCvZhVXmnnVENAzAWxZWhmvd6CyzhpteipLQYcPAgZJRAmq75Kf7un1Hr",
  "key31": "45rji1VsXwkHRdXRyj4AhYXTisyvHfdRZE7Pe2dTirXPuMa4KXsaWWXcH5z8rRGhaK7dNAk9ifDvRbrhhc2Rs8EQ",
  "key32": "4fNRYT4JZfEahUpoE93Rxpz6vQJRHxra3EuyyJRKrQsW5TefnuDA3VSRqLVHhys6entnnhakvYAbuMGaWWJStXq1",
  "key33": "5nBkTAf269qYaXt3kgFmxRQc2ey4wt98rFPn2hEZK8T4Hk7HBvX3kJ8FKVJvTBDSRZ4dHK4AaaV7EpBDDUDnqzqN",
  "key34": "62WZw2GLbxPNnStVDc7H1ypmYSS6zg5aK1eSgb2iwQ2PryCdwZSwFkp1GfgyCzJ1Pya62Gn135i5u22SPhdUSxuY",
  "key35": "2oKQm71dQkpkZsQRhVKmi5AsVbEZeKwE94ip5ydVLnmhEwTW9DMHC1Nc13YpvePuVtdzyTBGFndH1uJ8Pqp9RK8i",
  "key36": "cbUErKQkg5XkYqAmBh6FQq7QsGUP2DX7g8GEMuB7ocTRgZuXzk6GEc93BegAaA7Nff3XQu2gJHnq7smf5WV4s9G",
  "key37": "57HXSrYn7tKHRfRqx9BaTiXfiJPY9GV53q1zHDsTxL4gagniwEvrVBCmtgdFaZQfutgM2HcJDMwAUoWGw3pdyfKZ",
  "key38": "2aWRCFPn3q4L1neyHryVfvkTYwVzqagEPk3SRFU8ZzyJDd3iLU8aTjJw8gNy5mEfu7GSUqrstMii3GJ6FToKgoSu",
  "key39": "4EPTbUTkJbxDZPa1iECbmQKNdQ7XYLc8rD8uEJoR4VeBeXsDLqE6Taq8Q9e3VvcyYFQjpm955WqBKnTvvEfTRGwf",
  "key40": "pmbsCJSgrm3JwxvtP35PiReA4Vf8fFZKESpUKLhnKy96t9K7xaMzGRJ6xP4G4gkzSyCofrnm4nKLFC2RFUtdusA",
  "key41": "4zGzEQXj2Jd5kyF5EGfua79MF1oWXaPga62xUS8LN8DPa99HFaWqthRzbRM5eiUbR7GLSV2GyP73ASqPGddvDkPo",
  "key42": "3XDMYcu2YXz1vUU8dqvNLUTJkXbkCSn7vkVad7GHjFkDegiR5a7Lgbc5GWGJGD6nHdjXU3yY9UJyn1wLduYoZjae",
  "key43": "23AQ6WKFeP6nMwk3qY6x1P7ExK7hMKSUNtkcNyvh6qcJ9uy5z2QEAnDf47AFjmhjjFeVBArPxy6VLhdcHYNR75WG",
  "key44": "4rLzcg1sSL4Cf2PViWzVw5yQauugwEmrLwwKCtsPJ4tnveJbxXeaXAkjcp2USFbLMRTAvQSRaJV3hWULKmDDc5Kx",
  "key45": "45f5ScebcPCAvHt426nZp78yq9ngyA5XxvMis9v5XfNreV5PHWBfcXp8DbS92pcvZtVSJsdpAqAg6PYeVcw44iHw",
  "key46": "2ELMUMk3BKFXiih355svqyqT6PmDAkEjRh8iSY8LmDe9M9CZ7JrHKcFyX4tdSKcHoiH2S3PfvsDBt7ZBNuT6ACiX",
  "key47": "2F4ts5BYA1NsRDiDVLfTVWhiJn5nYVoWsSR9YWxqn6ugrmo71CuSgwFpgYfLDrze3XvuqXw7kG66nybAZKK2d5R2"
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
