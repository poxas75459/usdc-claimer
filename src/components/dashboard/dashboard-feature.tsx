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
    "WfGZrfm1q6gdKPiEEWMNwHQXhPMxjqbQBGmi2YeX7QKHh5HPEJtXc4NNkzKki8ZE3drJUmYNKo2xw6JbCqXyDbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ev2XnQCG1S8wtCnGEyWFpNeC1ocMAz3hoTobTRS6Zkhw2LVwXCoDdBPY9MgCPspLEFWsR5PVbCUuE1WP4fL53KE",
  "key1": "tWY7U6LRPiizk2NKzaA5xAxT3ReHqg9j4fropq7e6ECUJaHs1uaf6rjZjB8zZYdSxfhbLU12VDuhL73ipUPzNo9",
  "key2": "56Tw8bFBjrJZdZMkCYqoEKQWwgiYFHNNBvYxyYSaxypbv3w2kaX9vdvjyg6ukQpgoo799fg3fzwfsWxGd3ghVizg",
  "key3": "2km46oKq259sjfG95M3ciAz1v2qxvajw3eKGZ1K6F5N3BAB7ATyWM3vbFTocw4Wxx9eRmtz4EyjFcWcXJ5EB1NSB",
  "key4": "jYgeKCXgn1CMVkZTmPvSWiKz1vKZ3n3mfchkTB1dpRtJJMC6sM7SvvUtATq3CTaN1WTTj4NZVMM9dJgGdp1WbZF",
  "key5": "Tc5eZUVKyFTiC1Anu6KSpeGddCmre9hqY9PnR62Zg7QFxyyZEFZm14DQNW11SwHvCF6qkDEWDZYUbF2jc1jzN9B",
  "key6": "2vLqEDMAKSNBDxhTTzbZs1auP87Dw4M5SEZqq4qMwqPxuZztCFiMhVQX6DoCccayFeQA52zPzcKPX6yDXmnX5eSQ",
  "key7": "4PmWWQbrWWDvgXooTFNqobcGvxNMScu5R9FR9T5ADCtmwZ7KJNcpY12ryiicNwD5xp2Jkegxk8v3JKJnZ1Nedeh",
  "key8": "2pkpsPNpRysatzqD7btXY8zvGfDUNLef1rLJXQ9KgiMYAU5LywmQpBG1oPnJJZWhmpccXL6zE1pAFT2HzkbWRbxT",
  "key9": "2G73NCZQm9EvRbkGgRDhEyyGtrY5zLikGbeoV677JniMfFWjEgUUz3mQbaPx3v2cHzyRMQq3YEDxezETT3fhzezZ",
  "key10": "4P1mrSd9iFNxtXgc2CXsVLG6Z5NpAuAUJ27ELG8UKjwDAQwZbU8TvssYMBV7Cc871xap9QiMYoepCxvL548zug3H",
  "key11": "2Tvykw1KNEWYVJx3NTbdPWKueTw5ZjJXUVK3ZiKBKa15oDhB3ffvm5heLXgz9sbbSPcYop5xGEXmDEBQ3vT1zner",
  "key12": "335sm6hRKEzsrhixZkL9i3uKY7kgzmueacGeAFEf3caV7zbkGadhDsfpkpFm4fwrxfSWGK9UJbvyAHe8tWn66X7f",
  "key13": "31xt5HYQCNBm5APbJGfFiZppkEHbBz2U2X3UiTMZ8eMFQC1zTDXHV7YKZTMoqEn86f3dmcZvJqdmQWgw6T3GFz7E",
  "key14": "3xLFdHJ8Pyu6APAbJ6Xim82QZkYWELemtSKxh7KwnNGZusdnERdrdt6FAhmCwo8RbU8S4Ru1rpYP9Eq2k72XtAMG",
  "key15": "63yxYJyv2PfUgqHjNGuepzJFJUhfoAfGMhesJH61ckZmJNS3RVWHYKqDDjo9UYDzKrdKZYZi8Nf9xT5RbXXF8Xh4",
  "key16": "4Qvw6Ph2BEJC2q8V2dsmLaJkCuLr8ZmR1GBYkJoCFU2cnT3HA3LfHNaCxWu1uR8P1mH9DCdqiTMZRuh3vGmf13gs",
  "key17": "5esP25e2QFjsjWVjQC8mh9bo8Bit5L5m4zeCRJ4VrUHYnwHzqesDKYTS2ni3X2bi8VP9M26Uyuzjq2cxA29R1GyV",
  "key18": "3FyF4eLdVYP4YJVsFVrcH6nCrd5S3fjyaYUB17X2Uj8mdFW8SU3BTYA2TAJGtJoxmmjf56UQSpNRa8Nyv2cZfob1",
  "key19": "5N9sq9v8FdW1x5WBqUnmwbmE8hhZDASzoZg7PZgF6LLGrEZ2dP5ZDMffcsiLo81qJHUXfyzNnKErsKRKUDKMgCMt",
  "key20": "2XAdjU1T7EkR3khvoPejrxidZF8Uhz7xLsX9DEomudE3SR9iNyM6vaEhrJ3MkRq7DP4ArpBhPvx5YEeSNtquL9aW",
  "key21": "3U5Wa2DCS5yRRGLbKVMB14KonZUMoENyZHJtJNT2TVuCXN8jFfiZBF4mmqHe8q8maWDabDhczvgVixAMdsJbRn1b",
  "key22": "5ykhVjvHzd1K4gruUpgyaKtwHdgNBwZ2tqCncrCw3Yyoa7QXEGe9vpmsbeBe7LwqohpCEYCT8jrqAqxzr83kb56H",
  "key23": "3TRWtjUfpqtdxotXq2MR6q9QxuVfKgRuB4pM5MRU3TzbrvJdM8sQnoM2AfG6Uox8W9uqhVYKS5jsB8yFJRbjiZwQ",
  "key24": "4gRpQCV3tAgTYM8oim6dxvdEdToY2NhMcGoja3z5jjpLkLKtweXGCRfT6rWjkKrNQ2kir7qBnr5GZoDE96dVEzY8",
  "key25": "3E6Xq3Rm9M86Zm1FKptgL1bmMM942S4XYQe3iQUqaBdWjdXNdoUYkmshvuP3uBqZV414hkjKbwZZSafn5ub9g4c9",
  "key26": "p3XmHWDktqe5PXecaJmgTpbnrYEaBJWzznVB7dTbyFZqUCwRvnjT3DDkBXSwFBCA5Lskqz8sXKeboDNq2L9JuGe",
  "key27": "5EVyrk5KnMNTcriiZssARLNKv3HE6VrDw6npxUNBZ3GyYj3FmawA4t9vtdKCCtVi52p5ZQfoRfVPPmK4ziiPxmC",
  "key28": "31ScqK6Mro6Y9qu6ok54cXXqEhZE91MBy1CsFB1UAF8gvAC5dod7V7HHR62npcTRQNgZnFaDRbLjaNx6U8tWNpc1",
  "key29": "5XeMK2r2za6CE6MF4P3tuc549SSVHMWn6KYovPjEs7ppy3U5J3DYALFv4a5TQGwTct6exRaDCcdeVG9QtNwX1qzC",
  "key30": "3YjAw84G1ntguE2H7k6w4BhaT63tuNNmptut9XrfQ8AVwcT1N5bUaSaTLYt1Qdd6qKumUUox1WnoojippTFAs5sz",
  "key31": "4Tvae6WcnZV1tV1cX7xaRqSib25Xi5finTnobB7iHqc2D7mitDBync9MKaQL75A15dzpCJ3qJpNo7CSXR3DfBjjn",
  "key32": "NaMzRCsu1kuknaEzAMexqy2W29GWS47LJoN9mdg4h9qMnMAXkBKntM82zGngotGR7JYL9aSFvKzDnD4V7JNpXqU",
  "key33": "2cAD5WFpNH8PECVqTWJMVyzTt1UoUZHXLDqGzne2wFm5rocGE1QkDDL9EZ3hqWwQnjL1ExjWmuYXW322Jm92cuU6",
  "key34": "5yzN3GbRQFsHCzx2yw6ABxBpYoi1DkZjemTTbhPP9Qg4jNYPPaubr5Dq87ojzWWRK29stvkEeTv5tHea6wgKKxHz",
  "key35": "21pHwCekVTZiq6HqXTrmuC55KzaArTCb6RXYa5Aa912WHkyZ45zSSE6EnayWweP7q6y4gYr8nbPdGnvu7K8FieKy",
  "key36": "3Y4Q9q4V2Dy1G3CaLzc4ETQdfaTjM4oNsvwqFiHyN6r1eaqz3fneu3K9g8UnoGjwF8gXiXGLYfVB9xhadS3hHtJv",
  "key37": "4zbk5KaSrNkeUzitEgznxB1wsB4t7a1XM245UWfSRDxpr2fqWy2wAY9CHW8264CPkmHo8pNsLKmRrmGdY5oFxj6m"
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
