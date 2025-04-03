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
    "5L9hFGE5ZwMBehruEKFHYjqY9MeeG7PCELg88yDK3xwh9qDwVei4JWtsUYDCSTkmyrUs8yxKJjDP5Xh9Rmz3zSDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UZ17jyQL2wZ73AvqpNFPnyxzZDKibHkPGGJcbdPEy4LDb1fSBnSEKfauU1MEXmw5WiY4LM8RBkVAAPzoz2aSvi",
  "key1": "4GMHsYvFfLd24CFUHLA86Y5DLAs6Pc66XRN3m7pZf6KojfAA9WqhSBKx6K26VmFtJaSidFp8q6c8iruCgtMs46ti",
  "key2": "4C7p2o72riZjDMgab4qu4GAvxnR76NQCEoCb7cvhukER2bKDkJby6aooNbMuG7L3twMtN56gQyFkbgPJX5ZkM5sd",
  "key3": "2ouxjv94EJN9iZ6QCHV3cnB6nfHZ3pMtkAdTtiG6RKYbT1byWXZfAgpynqaNWkvcbuZyYgMBiziz7qCofud8iRfW",
  "key4": "4qucnSa8XcnmRrcvxmZrzxB29o5ZsvVC7VbxMgkXh3cPCvenwdPNxEeoKKNL3Qn6VXrRpgmU34eoeJQD1qjfKqT1",
  "key5": "24ysvkdpDV22YnZ9v2XqZX4Va251vc2D6ooysgnduQRXSzcZSFhG29R7ZxLy7KE1PiAVRjDCHXQvsZLX9xoZXWYj",
  "key6": "3fzY6WJpHxqf9STk4xDCPznEDwTR4EmghDcD56MiEeBTq56x6U3JA7rM9YoajJgejot4Jtq2MnrxJGrMcxkaUGcW",
  "key7": "5aBsJWcvRvQ6s6Q9fvpyLiP9DChwyamAvnWNsARiZ5QbPTG3sRmnb74bvWHevNFHinFqNi3LJMAHYdAV8nTgxW6E",
  "key8": "3wsXZwEsePzchQ9rsrd82wG25S5kshuzEJ3aURihZQk3oF5F177ZCoi7GqL7muXXNMvSmwBCSbXAvqb12Yxkg16m",
  "key9": "4BP38CGnbh78e9rmQDCa51vGJiurEuV8ihoXg4spnJeEZrJ7m7AbTeCog2wXzF4F2bchED7SjraffCDR645nd7mK",
  "key10": "4tATGSPNLdepcpH6T7t5U2PGPpXmVDoVmGnEbvWDRVLWHMb8uyTJe5gNxDDUBH2SwPFCD1XLTT4LJXjwRDVUhWYk",
  "key11": "2gnjFFEM3iFusg7udrMWEptvJHpPAKmmhLRhDrRuKY3ZqVsCSWByXaiYzB3THMGMGrpAw3C7NgRdQ3Be7KiaLWTj",
  "key12": "4YpbiTg9vs9oYn9p6cxNT21Fkg7AoCc8JRPppDDwGbUd6s5W8wCpeMcajmQtCNPHXJaBQCv8HvuuN9fBiavo3eyk",
  "key13": "km9sZt7AyxARBACBCr3xTHNbUjyq8H7p1a5RpFh5LWhqxvUdmK3kjH2otXChnGqGk2LatGUnFUzv9UkpSYVpiZq",
  "key14": "5VPwjua7ZqYnphWdH5FyHY1t8nG6bbFZ9VJeCDQK7VorWn1YNqXDZNSw3ghYZHALVRExBbz5PP9yqdebeMsCao1N",
  "key15": "5bvqf23gLS7h3EAmzQ4aCwDSZx4DR71wLgnqb7EzSHYwVAcUQEQ7HKHEzHkRzJTWJHKgcC6QocC9jT6fe8dNGhHd",
  "key16": "3Fy8i5848TZJvCCoEx7wGqwN66zvMiYuusk71voYjBPTFTxXD3RWfZi6sDHrmTmdXCAK9gTvHiehxNvxGx2dDuz7",
  "key17": "3fHkovkFFQR8rLpXBqZoJoW5YnkmoZ9fYxvLTDb559d89LZ2LWDP8AGKfrEE8x6ZpfiVH8tyEPDjzjyq7Hb6K2Dt",
  "key18": "2JaGvDh5gVkPGxtNzHm3QpWiKzmtMUnDmDRRHX5adY22XGX8AAp84r43XH7iQ7qdBb1iBFRsJ2x4sGN4GrmkMMvZ",
  "key19": "kHNBUmE8yn2FNA5HxXaoj1RjwTDY2Fk7EKniyrZzi3LPYJzierjD2pRjQ4KrYTKq7776EK7m5omydMDojSFcCr9",
  "key20": "2vS6hN3391eKkbEDDihxSkrLQgynEVaNHavZhpPf5rGwTqDYbLpTDXWRY82MkduobEzA7w3p3W6fZAJtHNN1jE9X",
  "key21": "5r41oHPdVStvJj6e3TCksvCPwzznWaZ4PYgSuJDkQvsPvRNVwbbTSxPZ4wiojiySLLmJRP2sqWcSYB6ZaGaqYbBV",
  "key22": "3yqqi7LaLJZbj1j4RBSWjX3ihUDqcFYd8NSPvpNCdNo8H7AGUjrY8uymumzqjMW461aB3RVaJX7ys6ZpmwBtSerc",
  "key23": "2XMDtETn76g9xNfdn6zfnPENHj3fJUP8ap4ey4LKNvjF8VGnRGsD7E5nFgwdcrKQP6KBH96eKfMb9hxYdyaa8oEm",
  "key24": "5sf8UjmX2Gqr3cgREnodCAnQzSEiGYCBoULbsW3aoHDBZwb2X2pjwXVgXS5rdNyWgPbxYdVNvAP7berJtwfVQja9",
  "key25": "4mD5UzWwgmMee1oV3fo1t6t8X3LFo9WyZAK5VTUE8iaDFQ5iqDrMCgSRBm7zQTNG3WNZxUGKpvapxBwk3hKegFRv",
  "key26": "4G3rW2nsaq8Tn84yhYik5jJRxeBSDGcQ7DdZTGMkFFQvALtAFi3ojV5xRR93Wd1JkWhRhhHTvz68jKA5J1jCxCpC",
  "key27": "42q3EBW5E9jK8UELhMr8aa5jn4DrNJP2gaqKT8xbi6ie34rUwwZPWMvQCjwzvcCe7uUoBajHrqBQjertVSBJzRZ9",
  "key28": "24r6gZBv6N9N3Pcq1pBYuVoEztkQMnerQFNiDAEsPGD5swiF2jjPRRZFTYyzGbL4w9uc7FFkmcQUso4Rzu9bYza7",
  "key29": "2ghQHESD7k28YjL8g7sBvn1g8FsdNvezUah7aTd8kEnhKuyEsPTLxyKbk3tPF4hY3Xe5gjVssLMKCNccSe9LpJvs",
  "key30": "2QMnzWKXzJ69sJYij6APsvSCERyoYjcS9btgEPmBrNSQc5r7ZQLzjb7EzVywCgmGJ72ze1L9r543XzJcxYn5F562",
  "key31": "3SAQaFrrgMu2MK5SUK9xZyLj8QB3CkpFsvbvyS7fTvVbJR5Rmudo8Cr6mFnqj9JGsYnoL5fxrNSU4Gf5LMLgDo94",
  "key32": "4qw5AmNUitqsoU543F2iXqE51314gjfnMNPBVPEK5hCzyWJgeTaBSjkDaas1jVP1caQPiRTahFpQ284jU4HsAs4S",
  "key33": "5rRzY8R4xp6qYVNRtL4KtbsQBWpP6ajhDKkmPRLeRDX179QjhhvLC9pb23GaYRC48KFTKtERinE9hZhQSW1Bv23X",
  "key34": "w3Fu7LQ4ZibDD4W1YyowFMefWUD4kVt8gmvNCXAy35pvGUwpiodky1iqyQqZm47TLm28C2FDnNfv6PqnFvfDCQ3",
  "key35": "5rhQaVke4gqtvUvGcfyLYQP1A2yRCFT9G956cjVvWRj5b21fz8MnXeGLszVe1Z9n5cR6Q1RUkzHEuiBo7MpkWJqP",
  "key36": "5RR1ZjuScq8PQ6jfSsK3UPvyP9wzFSKWFWx4jJSVi8cNZPZ3hKBzfgBB8gXW8LJP15sbMMmTQ3PFraNdL9Dkru6o",
  "key37": "3EN3yitJqh6aJe1RJPA8afYnJ8w9FFvV88fs3kfMkcYAEQP6E1xYKxCVgkQgUVq7v11se6Etn5QX56wimtSC9P81",
  "key38": "3MieAXTtgeaNByyZjXJjXDHAiKa2Fsf91phGtJGkizq6ozto6Qx9yuSNDm44enQDqVaLFtUdc8dpQqZqFCiBFXAN",
  "key39": "44rhxHSNhm19KfcH6TUPfXwoTRz5y6ygW77eccBukeJZyMzLdgdwc4fxppYahxXJtUpaLHhfRKPQT318s4pzhp3N",
  "key40": "4wuUSmSDefZHHmW8BFeKtq8kp8kDUswUtQZT4Jt4dAY35cTa9i9Ft3QhhKRwDemDEjox68Nq2rBrTJuhcXpE3rVB"
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
