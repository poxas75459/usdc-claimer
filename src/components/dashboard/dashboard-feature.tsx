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
    "TmE2EAehZGXmZxLocZTCaHmvoGX8SMW2wqAajbZzcg9GGLvWSj6enPeJzvh3p3okgvejebAcBcm55gQaW5JBKDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24sZ7bEFpc7REjA9NkAbbTrHAhc9yYmZZt5Fke3QvV2Yy3hWL9QLDkzgwsbjUvhAYu9kLF434ravFPcR1xy5LuCQ",
  "key1": "23hT67dZtDvCsMdPT7PrvyLc79aDrhtXjQGRnj5AVWxPHcEBpSTtHZne1zMaxrXCWaH7SSotHJhoSVUqdzGjeuJ7",
  "key2": "hpTnbzwJXbka2PS4nqGdCF5SsUCViVMvtCPRcA4Vck3ddupKHYDhzwnqSGBHpkvcVKLWf3zQsiucY9wmSwmYTuj",
  "key3": "2Mgv78LqGGXer9savm9vehaXT5ACguE7MUgfAUdB4qBpoKjkYQbRqQ5WWVcAMKWfGY3vULDv7WNe2h9QPsAjEyNF",
  "key4": "tHfuPBHyg2XhiyXEzbAu6sqFynFQ4uDiFWTN7hmcsPqFaNoUUcLNfgbJwdewCHJ8qt77wbzNT3Yb7FdWFXYnyGL",
  "key5": "3nVfqEaueJw3VbCh7GdUEWJgCXGZogJZrjEo5eur3YsEJoZLNoz5AbvRv2tJ86TXXFobbhY6DNs83jB1sMSjCa7g",
  "key6": "2A5DxEf9VwmUwJ2ZfEQAczWHCHEYvfb3yw1NJwZoUwopjnvgKdp3MtuRw78gz399TRu9pRjLi8yc9JCCnkQWRqPD",
  "key7": "5xTJWLA1Ks1QCrRSwnzUxzVZuYL2k6WYJbF2DgCjB5iwriFqqNsB5rLBLaryhe9Ku41EKwzzugqBvpSDtsnzhRKD",
  "key8": "4P1cHLjnE55mXr3133iKy5m3nHN7jDyvRcGMZA5f9Smv9bySPfJ4CZ1fmDw7X3aEvqjyTQgvP6YrjNbMAuN17kqg",
  "key9": "Gr8SLk9YWdhYThtmTXBsFCKLmHSHbAs7M4QzjacAbZyP1m81Whxs7Kc449UzuFCzazMRwkzz8HgdYhScsu66pUx",
  "key10": "4xPgqyv6PZhTkVPRnr4Tmfa4ReesJzNsqsUBMyW66ixqmgLk2tqZqWstZ1CdTKWL8LhDbWKN26mxkykG4s5uKaXA",
  "key11": "3WBzSR2xiYDtkdTpnVDjfLw16T9nh1FFJAyp1tA57zSTonCevhX644cXx6j1hbWtVwkcAqAN46jp1ocSA1D5jjsk",
  "key12": "21d149jfcVSicNqi9axvHAfhXWqW4vhXZHByJ2xeVmthfmJC1UcxYUEaRssANf6tvYWFaQbn9rD4n3vHCnKbzMRp",
  "key13": "SFCKbyNvKfrhXtAmEyun7Cuy2tjFszW8c7cHzUPY7t12NKxR6Qf1VV62syLoKbf4nDzcv1Vb73XyUqVYnDJiz3G",
  "key14": "GcqyLyZgj2Ahk3LY5peLU63aemrKLMpK3kNtG8R1n3HwtbQu9RKXwyJDfwvwpgvYSc6n8C4A5YsMFpaz4xQbQDx",
  "key15": "2sjmPWWrajrLN5AZ2hdQxGLsJbmrFBg4pMo4iD47DnfvNy3GCGe3DgHwvh5BuDChTQ363WLeexei5LtgCu96p6pm",
  "key16": "TY1kAqtrSVFcZqT9iFtLxJBG8icf538TKCbsA2yLZ6JPjcjHD4YemjYmXA2wzxZmg2S6wtW3Cqq78NnN4zbDdT8",
  "key17": "66BRDdwf9d9Co7vUuxbuy4doKsftF2Nth8o45pKd49WkiiM6waCJQZPsrJLwAVFTQhY7fCdByEDqnkHcRp93UocY",
  "key18": "4ZmNDDWaSbiNFhFFfPtBW5zwzXPU9gWLoqMz2q4RYRjL8i4iumdGyxr4VVYjXVerL9wSaJEnZiWhACae8zNd9Qs7",
  "key19": "2wHq8mfZDcWRCU77dABeobzAhJEJQsmdivQBErEaXoK3qn8kdikrznRycmjhBVdQZbT6VXpziZtNmdGiNFnzfXWG",
  "key20": "3pMzJiuV1UJgikxogwMsksZ1riCvyzazwSV7qpZfz62n6m7asXeQAyxjt5zmsWkCnCai7mSBHqMF1r7q5VAs5yJL",
  "key21": "24qLmQTEdtadxLEgYvM7E5tL3tFQMP2gzusYWx6TWg2kFL2Cb8CvnSQhsz7fQbXWSXSvMbV6Yryyph5JwvYAsbkH",
  "key22": "3nB9ZkD2w25KH5jr1avPwC7KBGaVdtHx7Xj3g5MshywYekqxAnbDZ2pj5yLSWMAxnprQ7kHg9eiD13hmD1QfRvWd",
  "key23": "2nvbBT3NoNCySNHttgPXkGbeZxb4WsVCyXgFM3CvoGBD5sPPDjxcSuAWvU3V8kmFBAYLc6RVGERjBbGYZQqz7TTt",
  "key24": "537h6npFPwVxYKnRwG91wfNgQkTRmYPbiacz1LtGVwUn5kAm8dFuUfJUjtoH9VKDZnGR2g51SCnub6zn5M3c8kMR",
  "key25": "7hBSaHYMo3dCnaaCAZ8uNx4s8BASXqQmocBS3nedSuBGBZ3Tib9wvrRoQRYGi6vMWNL8gVyJyUARcAuKb7a3DU9",
  "key26": "5F9McK9DXJZamY54Qh8fTKXUZEcyiNUSbu8avn1j4PwoAFmf71jSjsxcNypKQiZnLFsRs5m7hKcaQ1rnBc3csVkT",
  "key27": "6657BPrne72A7XSNKWRABDLeiJmsQ7pxm7y4zC6JDHf4RbtZujsqdSnHVtT9q53hwS5VnpMXKH2DHp1nPVVfkvHd",
  "key28": "bwrTWtKqKwMKzAfAz3Q4X7SJPxek3bAEqEcuExkdvcfWqBbnuM49W8nGWjh5pJFLq237kXCDjiD7pBzeTiEJP2t",
  "key29": "3DVU5gbtzoF2A9VzgQtPMdmW1uXAQvPdTMa6PBin62F529x9yFgBRy6PU42XvyRbBt5KUjvpkBkexT3rsbubjroq",
  "key30": "3oYG1ED5tdeFZaNUDfeovZccRNCTPjDovfncXvhzuwGB3ncwcUEfbETrYfQaqd2hgYFdGyeW5A8bAm8on1xRM59B",
  "key31": "4zAXZfqbJAL7oLR31eHh14rfXKcR45t412wjbWUczAxgvidow5HMzi5ojEQkLiVK8f72ereqzLSMmphcJRvLA77g",
  "key32": "2QiPprrQGZYnLiUWJUyzDhVtniYCEpxnxtTioAyMMfU1Yz1CS3VgvH2uUWj2AbYAj3xZ6UxjpawKUVMPtikX4KZm"
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
