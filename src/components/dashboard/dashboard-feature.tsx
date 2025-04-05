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
    "4vMqUFFRyhaJSjRR51MLHUDpMtW97fybVm9NEioMam26PsAMtkUhJxAtBQQejvJzsHgmSfPeLzehT8mABgMcXUNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5ggdZVoheVcL9G1qLJqM5M3P1teUAApiZ7fW9jUYRRZV6hoprPGhunbBMYqzk8avw59efTaZD5nCuV48U3wNem",
  "key1": "B2WdfxcwzCLEnUm69esz9bAQzN3XdSebD2xHWrdhGe4uHA6fwLT1XmonZCs3FyUsRppfxD7wMEUyuYx1Ad5WcCt",
  "key2": "2E2xpyadQyMiGw7W3ExizQQxJry9JztBbZbZikWBYnbckfTjhPkfaFSRvDxJpJpd2ERV8rPnDdDh8ZUTDfHJuBCe",
  "key3": "483WNCi8TrsLGC4bWzpbgSVc9ofSVe5VAZ8Q7biEYdMi4pjh693gQNsDWQubRYxCEyikXCTYZzAXYzGHgyapYB7m",
  "key4": "3NnHE5EpcEf9nhULhTK4svkD3rf49GnYMG62c3HocFYa9E3M9MzhVLvbhKSo4CUiM9GyMzRU22PrJC3pmJyxHfK7",
  "key5": "4kejVr1i78R2Aw14T1CAjhw2bcUusZYvpzuWhg4Dm2s9viiJS8td8aYNkuX1guDitzxT4HeHBu4aR6YMsdBzPj6t",
  "key6": "5TSZYmA76z39kPWG2xE3ci5Bt2qrjoitNFDUAcdNJF8SBmV94Jkzwr85DqcPLoBfyU1mm7PCS6ZWvbBAa42BLDKw",
  "key7": "Qd9BNRwrXV2UwKiaD7kR77tx9rZpt6Bhs64erRPdfR177WfPS2SDytkB7zFayzpefvX1GEyLoSmoQuqHjFq3t1s",
  "key8": "4uaqZr6ytds4bWKPpkEwYTmMPNUE67QjeQ2arvhz9hq854q8ChRyVPnMVSxqtVjMqmtYEkr6AREcyvEYhLRN8AoX",
  "key9": "3GJG1wxP7tXD2tor89UwjfyVhu4P2jHRi59zT1z9VKWNWc3FYHTuazs3SVTaHKmvXKvKpvRMDTXZ6nLoTz7fiF72",
  "key10": "LpuVu1Du5L3jgaPXhHfYr642TmZbw4GJLCrY47zkXUvzrcZPQw9Wpp6UgGfnhHxvwZu97zw8NvWTur3kjP9s4Gi",
  "key11": "2V66QLGFyVcCHXGH1gPPHweaUSwASqXonqj5RS3zg4WcAZvnGyaNVPqhFUToNSZWCMLfGGk9WWUzfnE8H9YFpRFk",
  "key12": "Uid2RaaVjtMCbRtgyaLSgiNAMVnv7tUtQ3UW3FN14iwAGoU3W2a47Knv2a8QNE1WuF2euvfbnEDefca6ZEqeveg",
  "key13": "3ZRbZaJvBdaiVX2Y1kstEas2F1ZXTs35JnRhMYv4vyvkCHFrhR34kejdwUaComjqEFZQEWyRSgKgDLK9doyN8u9m",
  "key14": "3VNiMMpzSJGh4oiR9RCFHchA5Rs8wFEbC7QcAEMZWnzb4QKXcT97nA6T2AEPhNPWSqXNskzsvhHsTeCismD4EovZ",
  "key15": "3tU6K8Bfow8rMu3UkCXWkeroJUfbmw53Z9hCG6ETDoreComHxjsRw1fjJFncX9fYivaXTu2fUXPJat4iTPiszcuv",
  "key16": "3d4ets2jFZNedhJ6xJX3SFVcHN29sMBtuNFzk3Xy6b1wFDTLwC5bjxnKxGmK3kkgNy9RQnCHFEJKeitgqWsJxfNt",
  "key17": "3CijNB67f1pRjgFhdVZPyqY95toVLYAHqoJECadWWnaiCuUTJJnbAHEqruneCAUH3MPpk1N1jGF8hCgsE8vwqPY7",
  "key18": "5r255PUcTKSSjG5LEdZDwbFDgQ75z3RrLVF9soAn4A7EnF81gxQE9wF8ZLG9KSDBNQJyLfSj1fsES8YbpDummFjS",
  "key19": "3DSJYUVDYVHEH3wEULbXfhyKvfs9MXHWdGGgh27zHrZrTTdYoJh9YADbRSxDNef1826MWk1ucn4qqkiAVQSHbrTS",
  "key20": "2ZGb2nKNsVXxSwyR2jEt29BeVuWWsHPBQT5icRGi2mYFnLiHivnVgJ7zm6bvws2nNuAmjZqReAvbAsAW2UezT9uD",
  "key21": "5HymdxBhJuM1CKE9t92aKRE1MHCjM7jjQFbQQCwfMSb9L4Co2tz2DVvNMVnYzoZRctES5tKqb8ycppJgN7hSsdrp",
  "key22": "49VpNxo3Mtj1rnJFJs7Qz9wU7FcmRsWLBovDLbv9x86qGmbU1yccXCrJyhXKKVhoyWhbb8KH1jDiFaVkoD8tDLcL",
  "key23": "64eDpWJR5EN1umrYCekxt1sCsjuFw1T4YadhkfTSq1YT97fgppcPDA9XbEiDMeRH8gKvsNuX469iMHvAKKaxYCsU",
  "key24": "DfDoeU8H9JpJhb2mb712nAEJwzsqf4ffSDc7fRe3YLN6bnustkv6q33WKEfPbgvsTU1efkb1Uxpqs2xgVcGCGib",
  "key25": "Gce6g897apphYGkgpJaVRA2yhvH6oBRLvLKmPj9tnNQi1kDoNCRjw5HaKqxHwYRcmB6uU9AbrJnPaUx5vPQEhZg",
  "key26": "RY3MUeJhtdHSH5JSrW2wCdHDRNBwUnVqW2yemiedYS5MHauVGAiUVDHWCwZaYJZKCoGjmbyuJwp8N7obU9hoGbH",
  "key27": "4t2n49w7QcxvFFzJkwefQFrLRhWQFTCvJNDtKKxpibV59NriJUtipvvLkeyeUwuVcLq1YQfPic31YAJCm4amxdP3",
  "key28": "3ThKzZvy2K7DMKA2afGHx8zsqAoRAcEv92UTbUh3C84Z1t5JBsgEEUkLvtCPcQdNyKJKURXZAjEbrFQWsQzhthQR",
  "key29": "64i9spcFQ7rZnGNf42uUWHBtyfmEr4KLYwFxA8SMBR94boycihBv57aT1Npor5vLdzbG9hJW8vtAMakpAvK1LMJe",
  "key30": "d1fXK5dAhGed3g1cgTLSUVSikVKmrWFyVgbAQMroGZXwYidPaR3CxxdugyJAAErD2TExPFAqJidgxh9NqVno7o1",
  "key31": "Hyu2sp2ZxDxhMt8EQB89Vo9vNce6624aaHYB53mfDLjBCLBEJw9UxXY2QJqcEKgRVCXQGEodmZfozvdMSWpaAni",
  "key32": "2SrHDixNYsaPjAsRoJ5F9HrZyVgYwisgsFhH52P5afMrA5i1goyAgEQyXeicypnFhFmWuZtR759ykeDaw8rciobC",
  "key33": "2YBxXaX6UxCFa9FCvoJ8cDtoTsAqLFeWhVhBXLNKJRDb7dc17rAnUoh1HF8CCcHo9RvQojDo6Tm39mo4r2YqzuZa",
  "key34": "64nSBo8jLmacxW39HHpFExaq5h54i6pNmMY8viwc6fZJMijA1ZDKbgcH7zEWqa15qmHequEF3M8wybzhs5oe6QiA",
  "key35": "2MeQ6vBH3vBigdU1fZbRLoxwT6jioG4feKtZLHEN6WGPVuKxo3Ye4tJehwjCheSoXpQB9TDXiDjrHG47w8tB1m4D"
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
