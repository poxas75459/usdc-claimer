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
    "5qw59sLkraWUZm7sxet2SNwpi4Y8agWKUJxwAvnXjotL5BpwB6PJTMwDou16GLLQonNitiayaqsrG8JemwcwHiBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKmxdoRp5HvCi4JBcMzJFUKMpLjESLbGpKvwkwuLJntWmRY2epse4DfMGJyokgXfxfzskxPxQeqqyjz8qXd45Lm",
  "key1": "bYuA1PRpDLwSjivixTSaoUVAEeKBPDE4agg2Uy2ZynHVEr4XT1jPSJHpFyBUYnsiF2YWDTBwvvtHCDug9nP3sU7",
  "key2": "3DCEsrvbkutAepk9enkDeGid9FKwTzxkDx14FFhTmQgoiGpDUdH8PboMFG9Cg7MeMNEFkrYUCXrL9swku9mBwXAL",
  "key3": "2MuGV46pZLzK77jD7gB7eawgMTVutMB7GpE5F2dyNdG4YdTM9jrxxR97eaS3qMap5VWQv6tibR8fru8KxHaNSvEU",
  "key4": "55CeDakkAsrSLZJspYhet8XepqpTTogEmgWYABs616XJu8FZonJF5MNAKRwsiKociJX6TMvzftEDaLhpVjmKqP2z",
  "key5": "3omQ9aNd9DDaaV86QtJtMHo91Fqob7HGujPco7k8ETfCUzyogQWYq6X1he18GEt4cN2J6fNHw6tRS58zdJtF7Naw",
  "key6": "9fmaFkTLfhnCd8tesUNwKpFxf11XRhMrVFgzs1ggcY2hBZLU6ax9ke9tuJSVLq2bBkX6pym32EphSCBvhTVdmzE",
  "key7": "2R9mUpkWqAQvgYCYDCJp6FausUu9nKXaSYvQqN584ZLwd78HtSGgenceXagq8PUgvZV9AFPqD5vGgQdjEuKWRFba",
  "key8": "2RbZCd629qPMxX57WSzCH65XEAE5eB5Ud7EzpHcKKTGeSBxKXMHWb9Rvr35jodC4gXas65nbMb4xFYJjiH3iuoNz",
  "key9": "4ZHhE2HJb4UVkcyAgSYPF82YxUvaXoQ5mkKm7vJCa39H1iVK7pyvxqYTdGbhF7s1NkEsGrWcHLwgpmEafAcPbbn7",
  "key10": "2uHZLrrzn9JV88Uf1hxobqEMo1DqRPGbhxEAwARDvPPNjwf1A9fpPPkNqaAyacT43coZRBU3LH4kDtBGBgWqbZHu",
  "key11": "yvnDvj6kAV11NuYfvd1gpaqgu4cjzBDVFjB5knSJjykT7TYUkP7rNPFLe46TXdcbNwc3QSdzVFzuzD8izGrpac3",
  "key12": "4MxoLzHSbMVZtd7jMJvP8Bydadi3ExUHc2zXMYYmnd4gvQuKDRGm1mWTzvCfkm5DVDcVVCaran7f9SD5qWMkaRda",
  "key13": "WM5knBSmYq8uzc1xxBt9xmwytRqAXgZnqrt3utwY5DE9DdiAKDEPhFVMeX4zDvZuouaPZvY85t7GZjtxZod3The",
  "key14": "2uNf1C1A53LR2wx4AmoEV1NGmSxMUmStKamdpAV3jozEfWpBpBoLUmztDaa6W4WmA6SU6m8E8zXXWnTHYhuavgkh",
  "key15": "2AiDR1LSEqdS3uT4Kyj7UNoQj8JwWoNSLRQ8hLkkBNGBeYkdEeCwGz6RYH3VoafbxApDTXsrpwoi3Cqg7tRhN3j",
  "key16": "3vufzLj6HqVm2gohmw4cyDzgooEyHA6Zu94XJxiHBTVHMK8heRUraQe6xuADMwSeH8bHMxFxGeJoxxYebkZT2Kap",
  "key17": "GDSFYF7e7bmMAhmnnfwuzcguh3EVx46GU7y4omnGRSFjUxNXmYD3cjbc7wb2CKM1SXVWur1GPtvnmwZB7WyvumN",
  "key18": "EBwXbnCmocQ4j1CjBDzi8bevswPWU7iPxboUfK1tGS9kD8dmHtmsyjLspVr9UvGVfzhhMUwbwCiXU8RD8vForab",
  "key19": "32wRcuyE7S3VHtpQBcg4DtoRT6pxuRq6KY8rCqhRJyZ82hgFnMqNcNTUan1zNgUTa3tvHCkfzdRVnL5rD4RmzL5g",
  "key20": "Zz1eMT2kr1a1P7xEgsdsqsH2gpCCpFmYLFuYWmtTut8NhPsAiViUcDUUi1gN2t2HjxoVu6bGYC45obkSAKo5695",
  "key21": "QTB4MGHKA94X2U1tuVoiJF2eqzxkAD4Z3HMZPLk3stCeDArgLQMM42LDxHDvhy5m2sWEzwKrbmRZRN86tW83h7W",
  "key22": "2Y3f9jQsZBRffVdBnHjA4BjNz4jgHKcUw4XndZwkWdHT4XZKb71uMuKkiL5akL3Cm7gZpiFZwE3w3yBrTsvfbZCg",
  "key23": "2zWBr1H5K4CEAMGzNPQP4wciavTeHHxQ7787GoVp5FB59u8kmhwWGnHAEQ1eXb8K6UPV7K74KqA2Ekogz99D4prb",
  "key24": "3rHGTiazCnvFdBQwSepydGZ5Jcysu8axbNJ9d11QJw9AqTjUep2aaeDj94QhGu2TQSS7v2xM2VA2FYdbmGRH8dV5",
  "key25": "3meZDd2eFgDNAu5ptDBJkSDGZJRRDLwQdrFvs3r6mTUYJgCUaJBc8jz1gfd1WJeWQDAebnWwqA3rXBHvsoXVkSEB",
  "key26": "Yq4gVN2imDyJYvqto2byR8u5GH2MAbQGLb5i5n8DQ5DEk5fq6nxfQj4QBu9KUckimBzQWnzRAfF6iesfcXBDga6",
  "key27": "34cAMwW1Cz7zaT5zpKFZEJmCu5uaMiAgTiUxqgnSJkeApyGffmDwGJFsvtmyXCUGh6omStbceE1sx3CLrMoLfZoN",
  "key28": "5n8KRk9J9w9g32eFvnK5JCH2rAuWyH2PNLGzkeLpwyBxBPYvrCFDeWJeVSeNwaw43dwqCHsmAY527MEVLMoh43P2",
  "key29": "RN4j6E1KpyJydYyzxF21bHXGoh2RHA6US5FtimSxDcoGvMzPUPXbrKFN1u3fZ27zgX3dGXFRPg9NFuLinTDsSTz",
  "key30": "3tszhxW3t73MK7coCsXxdyyfsGRH5TibtDab1qmbGjP7W9hj47FPLPyBAmhVZZDmacraTQq8wSRFXquoi23o6yxq",
  "key31": "3LkAjTibFhEwTk3CbjGnSuCyPfgpMT3wX6yg6TEqHXkicDndaPfvcAYMRyExds53qzsemJhqExyQWYp1kVmbMuSK",
  "key32": "ah6sg6yJStSunSx3JSrUca3SNqGdNtGmueduHMhJA4eJt3ykisEemMpXTMAzHjxyGxp9ndbAXGWRvsC9vs326Zc",
  "key33": "4vVguCUfo2CkdEX8BnAKBo24MnHjUoDUtiFqrvezGNuFkwYGn5HeKahoVUCxwcPaGo7vA5nKzSbuGccEtji3XRGv",
  "key34": "4EavSoeaegArdDefsupNe2vXpTS4Bm4yALx5vuXHZd3eBRKq4JzDKv8MdWFMUrsPHayNtsnaU2bryoHN2u6Y7GK3",
  "key35": "2V4PKoiYfEhJEhPkZ95ct5ADRHauc3EuBuvuBomSzjtGU1iQURN1Vd9CULkoyAbVFHuzGKRKj9yXA9ZUzHAEn58u",
  "key36": "UGK995hfkkBpiD493omrMeD7vxb4tJY1QBxqBL1F6jUSCvbHmcQACFKX3cqd3bGdb4oBgmjSHaZt9egPeoX81jW",
  "key37": "3ZHL3UF4qfi7xDSmNVm8c6LRzDrcxM6BoffPc4YdSHjc2wkhzGzRJLnVzXAmM2eciAzGZ97G6a8Mj9CQx2QSCdcb",
  "key38": "TwmwfHjqhumSrMjw8Aq32HzYgpZFJ5GLREZU7DxqxArmgVhdCNBe9xNet8YExwngz64pf8RoqBkFAKD2CmPK9yx",
  "key39": "44hrJMqUZFDYCUVQ4ZT9AyyDc5MFT8qQqaLbL3AARGqPRrJ8AR2Hbh6xcv1c3mEmvWUoAwwzCHS6DRpRBVBmBrZN",
  "key40": "5fci1Xwx1xoBXsrQia9zsvBqBDJKcKyYzG5jPghRUAEJRqEcKPAMhECawCviRTVtxsXGwiwg4f8VeAwNq3Rhwk9L"
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
