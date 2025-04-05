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
    "2xXKW2oup5XMNV9GhctgPL7y5N5Ld42CZEwdqZnJNdUgtCtANgzV6n9s5eeyZSPtsWzv6uXKcpV6BXXLPTudtncz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdyYFai1G7t2Qy43N72NtMN8cxgcBi2cLPrzyPaHjEqTuAPXT32L9pxcSwxarjUBRuqoQxUey9S3zkFELk43Yqw",
  "key1": "2zs1jny5XFdfabej2cUo2MJKrA8naZiFtXPWLdSf2rurFdqsp3Aa81o8ZGeXUkiAmkj9ageN5gBYLr9yzzkoKAQB",
  "key2": "67jmet1oR1qdhWoV1UiTx3yewmfwwhUbjb9mwpo2wbu55o2VnjiW1YKq3AsEp6nCuXESyinZubiJs5eb4c4bw4t9",
  "key3": "5JSBpTRsduWT9rfWXukfrPBeonRKMRQ1XqdTTE8qf7xuaCCUSDyrnxpPijsfyxNmiYxycK7HzfVoSj2iRBgSuyPC",
  "key4": "4r3kCfFrtyL45kf1icoHg18VWjzSZ9kPCE6FQ4A7rTgZfr7Tfh3UVPuw1322sYZ3G3cvyTb87iAtizWdur95exkd",
  "key5": "5R5yJ2H9nTWUQfE4bPxPtArhp6ZBwFrkccEqWFNCB55fSTKnqigMqvPuzUCpzMbHQEYrX4t875UxMMaYace9syKZ",
  "key6": "4HAcdSXvt7HW38wGvHr65TeZFXzaVRfshr7R3wJn4XqEjTNUUSRYqxLfdfJj65LozHStWuCaBen1i25TT9EyBrhP",
  "key7": "2aCnLdZ1gpfJCXP4EsecD6Q6xcHrAneAUxoM2xoGBTA6kJJ8zKpH2VsrtTfoMV3gJmASoKscMVzjZ81fByYpkdaj",
  "key8": "3QuKY6GCWcWbDiuGgRSK9MNTRgkAkjkNYKm6q1GygzPEC3gmNcNMJ16Qp63AQKpZTVHjddpVZJBXrzBJ1KRHpRXR",
  "key9": "5dBGxvAUkLKr4EFb5B232DYurVBqqDHzJVDXznJHB1pDZRduF9ndTfs1usg8kqJEPU7Vi6wXRxcL7rNEsXJ4LSzx",
  "key10": "3uPzqGm6AGP4aMbP6oTN46Zje3PDdh4AmSWcorw92RRfS2Qeaewm89V3A6mGhR5RotmAMwyh4F1cg9cWVidRsoNw",
  "key11": "nKDBNVCoGzg8W7GdD3HhCajEbezCU7gkcwYvSEHo3eyEGB7L4b37ku8fHqSyKVoFDpd9sMbNdYmEMeRvVMBTSxb",
  "key12": "4Aq7U4L9R3vWjk9Em3aYntfN55afWoZJu1HfsXJxtkB5cdGP3vTkjJb3tonHbtvwEhxnsLBEwJqkX8kkHyu6N8VQ",
  "key13": "55asF5hw3hLdZjNF252cxXhP7g17viedkgZVRmthuxYx6EjSFDHX1TtJCQGGJyPwnoHBHVbp7LhL7QYAUEt15QNR",
  "key14": "5PCrR5MfGMLWov3ZWWVh49W6ryXDXJQiuzc1HiDZGddR1LABZCt4x7TLj9Zb2YVJw9aj6Z92KLqwGoBUQaVZSm4c",
  "key15": "2fU9qAiebGrtBLN6tZiwv7nw678giTAZhdFWhCFzProKCoed8m9rsvbKknwNiSmpGtKpPws42o8jf9FGUdKwk7My",
  "key16": "5FrnqRDf6NNTgZhse1bw5dtQbf7Fo2BR7kkz1pmU51BbpCMFeJ8UZjt7qevz1fPJeEmFv8h7ti7HaRmAnE2pn8Hj",
  "key17": "5pLpiW41E5AsYkxh9govZ3jZLFxVuUKCA3xmKEtpMtuqcq1Yo5tatdDhYDomD374cXUc1juJvLb2HkTKiHJceXjk",
  "key18": "2QoYgchyTUso9i8bNHCs1unTaPJaEgfqkR2uCrCaVZWw1ftGNVg7y6RWNuvLrudF2LzJCXDFxm9A5M4CBuAbp6Fy",
  "key19": "4traCEuoyDYijGzHYzQeb6PTbBp6njBpwEfEQCpFH4Bdj2QiPPsiV2MM7TnuPqRRF2BGSrXxZQZwbUHd7AEsXKtd",
  "key20": "46KY7oWRV6xRjSFaWXv3VQ1WVVHzwjqPUMAU262gGxQqHtQAz8DdYW2f7jpGFp4NR4j24r6FxekEnTkmRJJ7nKyE",
  "key21": "5uvuYtGEBFAi2THLH6NV4hY2gRB9Maoyn52G4zLpknCH4kUSGHvc7GXSmvRf1VtirQZ8QF3Yftgcf4YBrfLoWz33",
  "key22": "9sUqAto8X5uLDSjnQ57GsKSkqtpNQyQ6GqViJ9UkSvicduCkgECWqt22TKsDogyYrFEZJDxzJpiKxEmhpAtCwZi",
  "key23": "2aUnQLqsdXaA5k4gR4x9UH5FX4gP3jsW8U88L9vx4ZTWeUscMGinnGhkcKbqVTLpfzR7VNipMuf5fzyGh4X8EKJY",
  "key24": "sDp1L1c8Hby1K7PHN8XqiZ6HMGDTzZDJHRQdcK4RuCdpbr8gukLaKSQRMHeUPWwY2gSCctset6JuaWz7g1MkPhX",
  "key25": "Zfe13RtPEENBWmNbeAvaqPwZZ5AABnfqaqewcighYt1ADh6y3RkEqA2NzTbPGNj2murbWVU1WCu8ajhrq3NqFKo",
  "key26": "4GAzhAf6a6Xd8V6uafxYC8yzdH4Kvs9eVXqANXrVvr41sD64GD9T6gxjx2YPmRR5UJ8kHn5WEEuNs1CnYCV35DTr",
  "key27": "3wj8zwieBkoDaQXZXwmAA6WyREfzFHoyzk6VnSM6ZMHn5uHBKtPKsDycqJKt8ftxQCjV5s3gzsvzatevipWdNka8",
  "key28": "5VJmWcuHSTJRXrmDox34pbuGPQo8hr6Bvxmr6Q7SSn5oat4PacYojkZvss8Ust6z5cWkZ7iEoKFvM8VcHC8h8joM",
  "key29": "2XGx8crXnCU2N4uuJy1QCTC8GbwrQVvL4nW4nGbfzWFZDRJ9UaRUHMrv4xYUV5xhBpmgJLmxWL8de3bGArwQHaSp",
  "key30": "JRrPHrZTYh2JStJQDxpL42KYudp5PTkAbr3YcoSH8cYM7SkT6MRK9seZzH5t9hgm1BuirvhanufqeWgiSPTiiBq",
  "key31": "5wy4J8KfKPyoAs1qx52fuj7reuFYQe6gPGn2A87skaKmW1BUuEgq9AgcucPBY7DdbGCPJURc34VqpFsJrD6zrC88",
  "key32": "ygMdwfRWticDS5T5YXpAw4Rc6xyzYABb1X9PXwveuK7GKXy61N9cntU1fgGU4mVrfzC7wondeRLKgZjovKajhcw",
  "key33": "3eddbPVX8DCeWRwrKEn3DQx5ie2dCQU4URACZWNZ4wgskB5moK5LE6EjPyJDtwuxwz6w8u3Pp21vcBgAGjjDmbBV",
  "key34": "4HWN5yVbfAXVYtWiGGHJxpuxoHP286SZsjySbpzuZExPuRhyoAjwF74tdXzkJHSfoEse2dM2aFDA8PieN2eKee8V",
  "key35": "3AauJuW1rEtg3RBWgJmCEU5NTMjJDZ7PDg49kNPgyeqXVkX9iwg62wmvZCwVChrnvjw6XZ123fgncZ5fjPaCQ1Kj",
  "key36": "5KccCV8KcrjTmUq1n87vVCq6ebxsxm7x5PWWvw7dB5RHrbC9LRwxjsnbTduLBER55Fn8B1EdkjeArZPwiJuEygWV",
  "key37": "2PeDmb21Gh1H74UYdzHJj1vJ5QcoBSL5HdoopiYh3cvLXNqRMvjbsMFA1zwVh6inYXdeJp7hSB1CUVcmcGLgShjq",
  "key38": "2ntAmTQ4k7Ubhp56hSEccWtRVPSATnR2VNkgtFd7sPHkjAHoyWxRYoahqrENpSrLYLBeWYXRyw1W3SL15SiNUCR5"
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
