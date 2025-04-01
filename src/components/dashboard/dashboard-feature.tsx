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
    "5sEuQXX6LuNBXrvN9tnvnMQohKd9X6nuByVRzb1LTphwzCwJ3AWwWkF5BQ8YyT3YJGVSVy2XaeJuVkWWtzNdPH3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyCo7GsLa3Sd3Y6n7rG8afD8GUTjCYifuwjN3BtWdSmnwDWcb8Heavc6QJaUWXMELNAj3Tw9skmpBGm5SybPK1t",
  "key1": "43r1iSN2n5M7PwkcLbEcLm8EJ4JTLEongiyC8dQYPDQdP5TvTuJLbBQvMGkvH7HnkGnwNew86BihT7obm9LHkXq6",
  "key2": "5omfvZ15qSsAdQAmtdTcotkzHzXmjWk31WkJMgLaPs1GUJ4N1wLNSzV3sD9JgZ1NjrgyDbL4szGxvgN82yGF7PYG",
  "key3": "2EAFSnVibFmR2UP1DbvRACY8KQ27ELcxQ9r9TifctnMBQAQd1HxU36ZGfYiqtCdQmpYUNV1wxAeUBpGUi8WjokXd",
  "key4": "z3TCGKDoQnpwNsAoUyw5zUBvDPyNMrSdPstYdb5NHUvYiEDsxdCrdHWozD1KSd1ZtaxwQFq79B4kjFyJR9oJ7rK",
  "key5": "2oz4JQoQeLGWbizYJ45WFEkDUmQcS2RtK62DkBmo7XerTR1apyeKhCCULg1jiNxMt1Pte5UqsrJoxiWM7kqjBsuX",
  "key6": "2d2EZR6Uwq4d6J7dVrgXhGoQFiVgwi6dzr4tdYEC3F9V2rzSbf774yi4vQUJbfehb4JFJo3V32yKhmLr5WoSm2iE",
  "key7": "4Ew8egYt3k49Ww3Dsu7jTYTwAzc3jdZEzkUyPHxvD8Pg48ELUebW4n5wG2LMrDgAo97hFTLyhn1p4E1JhHiRkTHq",
  "key8": "5CD8VCFao4Y4KmNAEErJJ2XdLyisjs87Hi1eyuopTVKHSmK2bfLUuNpFkBVuLCgMQNtUU3XKRaHXtSr42gjy9NkR",
  "key9": "3RzmufBvGXwBQhG2bDmKTMrwbRVzjVsn1km7UZjsCCSqr4whXJ7M8Rgfcd7oQzFmVR5sMj7mWvPtFsooanGbMqMH",
  "key10": "3KeKmeotWZGPLLYkC98fZPe2z4do5cEbUrmrfZpHDD5dmhsUwv4CkaDqx2V1nMvgzQu4bSr9wdyDifMzkki6waSW",
  "key11": "3ttKLPRGRX7cGprTWoJHkpQ25kQg2goXGPK5tsxG6K1fkyGDUwjftkdoNCG3Z3kQsJW19Wix58Uc8dbPqxz1i5Vr",
  "key12": "3HEgfEonisDTWAzCgrsaQPdAsBzTM4hAWMpATWit9LC9TALjYpiwVNoXu3Bgq7Kb4W2pEDvh4keYhF9UZDZgMYBv",
  "key13": "4Wo7hUzTSRhpjUdGzHvd2rPUSFQ2rkGjeFvnQcorcCi8xZeNcrkainWq2e25bJftazoNcYa8241dN7zB3tKLijTV",
  "key14": "5mAmoakfQLRxWkTwYbFXkRke5BBwVZQUdjZyNBQbyTwFMqcyNYPm3A9ySKFhepN91sXTxMeJaAKC5wmhyY2h25pP",
  "key15": "5NMFcq4SEQGAYnzxnvGr7BwdgPU7FeY2oaJ51oQsQfweaD6uDEfQPNkTGJjkysz1y8XDpE7nwWYVSBv2KhgNZsge",
  "key16": "5Mn2pQUojRrCBHsVRKkZgwtRjvp1QNPD6ikPMLmVdtQZ2r2WWywszEASUm2iKe4DNHv9xWpSju4PoCrK6Pv9HZxE",
  "key17": "8zDEtHEMH3WxnwERzRfrJWD1SviTKzD8dd4gHnjzxaABFvZKmLYpmZXqr5VWqc9wuBMmAT5pFd5EWXLTx5hfPpL",
  "key18": "4GVpq5XTiGYopBAHPFHmbeG5dhbdambZ15PVSkFueL7jy91MPTDhvD9XKxp8wu85phkU21L4nciBh8wE2mFkoLwy",
  "key19": "66oP85n5ADT73Bb6P7UQ7NhZYeidMMHMjgAKJGTWWAdQwscfn1nV6f1wBkvvFAoCJhNbjiS2teZKz2H4CzDhvZoX",
  "key20": "3H7baFMYCrPtEPaUhioeJ5gV9Ru1yo3jTctTdiuyqbbjmLspWQJoL2HWhXMdsbwYzDRTVnKv6gGnYibqEU3aYkio",
  "key21": "52emTof4ib9yRRwXpSTD9ApoFEKyWVgqvHp9MGJTdHe8hpo35WSAPrx5TCwkMy2gQVyYDZod9XecAFg3mSQcStWd",
  "key22": "5SjhXGH1jq1Vz4kYx18nPKobfVrDYRN5nwUk88jpmsZpY5BZHaLrQBGen99PQqGXwFRCiLcDjyGs7KknLFSYQWJG",
  "key23": "4CKfhJ9nvTjc9qKxU5EHqfFfXGgKxPoizuQnaQWDrw2Q6Smu3fwj9mDdQpqzTjx1VtTtHQb5GidB8txNtFmPupX6",
  "key24": "2Uh4Szw3LgRz2kaZrqupabNV151cGmRtCXfkz5a8A5yHPuKCaFeXHCYCwbZK2K7h783UmiJuLkeEkghAZ9uuG3E4",
  "key25": "21pCesnqAiKZTfzVGvR3Fgb3sUUEzwKbV7XqHHUtG2aDJEYm2FxdEfq6X7uzcn5r9Vv9Msa4V4pvkJtaGUsNZyGo",
  "key26": "4TryMjDBgb7KsCabtJfLRTH16MrXRteXcPvyoLX8DAoCmFGyYSMX6LHRMiNPEu4wqiEdgUds8CXjL5hJPKuGxMbF",
  "key27": "4Xfgba7y4Jkbvi5Vyjhp5RhUSELQqpdS6zaDz6s7u1rwEvJpgLkCRGr5VLTZGiS8wJAqUwuBZFfUS6RJm3M1P7RA",
  "key28": "5VfMrmpaBs5Mo3CpkhAHSwdwUe9atarWwwPLGeZtCSwUfbHyuxawJD9w6evrV8waNmKnb2Jv9xVnWoNFG8gd4B53",
  "key29": "2ietnXeSo65yPEZEMfE8cnS7cwjNbYDEA7e6Y2agciKfiuuDoBA6egso2NxxQXjyYsy9nwgyob6AZQWeU6QLLzai",
  "key30": "2Y6oxsoxm28mBLuv6zqD2JzvT4AoeKAJCqHjGRDwB8XR2mvNcut2SVBotfaFDD3UPqUN9EJa6PvGEDEBHeVd3pg3",
  "key31": "3Vyqgahh9ZjqK66ju2Xi8xb6gfrcbqNSFKx2sGXM1FzuGRto5y3C2jweKFG89TppDebrwbGgtxDJG18U1Q2ztuff",
  "key32": "5Hs6ng3Gty9gTYMEiAorQDemQKSEWV5YqMMCSScbcJVx3ACN247vEU6Cq9M7pj8RnnWuSWQ4LEMjGZ8DbTFeRJZS"
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
