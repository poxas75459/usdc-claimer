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
    "4Lt6THWBNVCPzdWjXpmvRn7gyDstoYtYEjYJiXnq7NpH3BAAhS9P6ERKnLnZJmxPybAWQdXnD2j6HmMJBaYwFMyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GeaDWjCXnfvPe4X39ByUkYiyS5u6WAVfhKtFeYtEs86fxrngcyEmZefGmQeLER9ACRtpi62MbZzA6JPeFroUNiv",
  "key1": "3w6uzZje8LJ1vWa9XHAY83m4isTKDFxLMccp57CtLoDCbuNm6s34juWv1YNV5zJgdE1dFtfG6RQmKAUrMSqze3v1",
  "key2": "2t7ND64AGg8hwyPTCNrNcsi9hDgkZRzLtAFEoi3Bt56Gcbt5cc84g14WhoZk4PPL99Ch8U66J8cXYXkR7s8Bs3XL",
  "key3": "3zxf6wuVM5ScpvySygYC4FBVoZpYxFSZasSG8vWqYt4eBS6bpYNtHkJhWavrgeTZBstgWkPKMPTRjAq86K2dvmVf",
  "key4": "4BDtLegJ4f8ApzAnWiQ53mBc6Rp7117Ar5US6g9S44Km8wspFxiVsnfXHQMrBDA6UXVzHkuWzYHVU8pCJ36qiSK3",
  "key5": "57kdT8PcMb8byLrCdZLQdw6oWtUvRCKvqKNvFgErq9qBPJWBJdBNCo16K4LhZcMenPPv2W5GYeWTeuGhXgFNJUHa",
  "key6": "3ckcpKY3RMybaXn9S7JNBmaKcEKmGEVra22Jqr8nac4GiVk5YarGwFoCU1CcMHxzacQYFRn1TW69Q74836m36ea9",
  "key7": "3e3s5shCWghSx3qWUTU7RehszdvzQnsj6r2osdWfbasJGVBDrXvHK2FrRcW7zwV6v9dcqUymoc8gFLyHL91JWUJG",
  "key8": "ojtiRn72FNRu9kNZBZqXssVir7oYmMfZj6VykTPivWDKCmESskFYvzyUzAMtdvm4NpJbAnr3ftc4vtfLMsM9dDW",
  "key9": "3Tz86vaWKcmALsNfJ5La8BEnKpfCRHMjk5mgi5Wh1jbSv7UPMFSa9fr6KkE2EKFLvw3ytHQUyRnhhs76XnmzfYzs",
  "key10": "4CvZXLsJC6ggq82Q8fQLFKpDD7nczgDrZi6jJWFYaUcpAYiHGsWWbRMoA1H7NJk5KdYgLiBB2jQcwxyNJZiVvXkV",
  "key11": "52UoaZCgJ8xMpeuxHvUjbABddF96EECqZmZpqEJQCzeF2XXnMaRVktdxcVrvRSVMbW2XgoQpHEDAYxXNiUxDkovv",
  "key12": "24fbg3QVyyHF79VAtQX4GbmX57nrcXxMFSSF4R1KEHbeTRvFZLMxBg8g9Dmo4UumMqyogwDNzEcap61nYqTfQnke",
  "key13": "4D6rpu7X9cefBtEowzagsEVN8mHjUcCQHeLh6wFDMYpgfxUL4gYbHH2BNSC9vCiWtgdDK2JAQtSWCRBSwQxYyRKx",
  "key14": "2f69gxL1WCneCNhSy99YsDjxui4AHi3YqAvE1tSmRkLzcphVdmWxhsnjLph922KmG2ByaYRVkDRsR6CNTyGkZgBM",
  "key15": "2r8g3C23BX7ycxbwy5m35FcnBLptvWv2LU7UjLjLwMQoULXHofUunani4umCNeCQLEhX34fG6kagNqhGnws51bBD",
  "key16": "2DY3ZpRdLXt2v2DNFFmLp5KJuKHakft6fJapJZmugxRHPEisL1cJagskSu1e8DHKreRLUJb5t1Jw4rxTcKELvJtB",
  "key17": "5JUZ5wPL8PbuEBQbgAhM1SFm4ymx8NoYdxqfjdB3uXJe3PQGNvUKvkiRb7EAAK6b42kAQqEB6gDvbDb2DQE8bz3h",
  "key18": "3kf9C1rqFDy127xvZkxS4Z5urFndimXVuTPF1GS2EccSKdzxkQgvNDPK8RSufREQtmLoeKTCMTCKXfHAbyifM1Cz",
  "key19": "372tEUwUZ8mnAFgWkhiWhjUBRXFp4KSkvUN3nnRSTQ72A7ucc5Mn2tWyBnaSU9JZ4mKwzpQWpZTq7JYbHGGjgn4e",
  "key20": "3WanrPSRxrGHxcak37BjxHkTo3GyLmPYmnwip9TCApXkbsGU3dhq9oLFiVMPW3FW8MKajAAhmtY6ykC7sitr47m2",
  "key21": "gyEJbg911KUGkgsBdWm3e8w8No77j22XEgoNMAmULs6Mph4AA1g8BbHvkTh13CfV8iVDhUqjE5AXwj49tAKSEiA",
  "key22": "5Qzr1yWYKRnhyZV9CRWCBicRNoRA5LYcmyJbxJEdmBytnxmbP8wTSQwRuUZfL6imPKw38FePTFd7YPQGj2WnuLFY",
  "key23": "3w8FZ7gmBVzg1mnpoj5k9VrMLseQaAuqJDDemQrrx4fMM15AfnbFawJpxoevXQAosTCV1tP1M9bPTkAxqjRM1H84",
  "key24": "34CnxHmJouRZikSWUkXYNipgijDUrvDqRWHHzcyj7nzh1im92yDR8rvYXJWZTh2iCVgDxPEJuLdmKt6Ye5uAXQfs",
  "key25": "5yfiZZ5LmMK9qRhHhQCuLzMLCCyGZMc9DR6oH6jjxUft8dNESmWfQAEbpXrKKStPK9hv5x31wbJb5q3DXwEwyXUU",
  "key26": "5Stxz5RWFNW7F4wW4gMYjH4sk2e6U2fFuY2wX3iKEjGmx4G3agKyQN2RM2xTuWQKBqa6jPRvdb3BPdhFY3NhCfNu",
  "key27": "4RdQ4vefySJnRPPeUmuThCj7p8fYUUs2TJUSgjQbBJpBPS4tSuvfBXJCEKwQSFRYKbtvD2JjoPRmU6SGptEWEEJK",
  "key28": "4bTx5hM5zhtJiokh6RmngykvR8jEbrT9VU78742d85AZBPFKqefjxzKUBTtbguwTcAEuWEnBCaSdspfigfQPiyEL",
  "key29": "5Lt7RaJjomJWoobfPwi7gwrkFP5grJP76CDLZ76P3FALG51DkfQsnGih3PCWpRPrvtoWiZZ5Li5iaiCqp11WWzjm",
  "key30": "2D1gLHRjdwVVik6XYVPpe7uUz53UuHLAjZw44L3wbkA8Nzb7ksq9vSHnQqur8Pr3EvRGEiDfz4Z7xo27HZyq9kwW",
  "key31": "eBfsxezGrMg7rr4G3nKjqGDSotqyPKzRUEXYUW51hmk4ePocd3PSJRZMESm6J9yUF9K4ktX1HqsZzQVWntvxrZJ",
  "key32": "48HfzHMAHGQyZWryyW6MvWDP3DUfioAqHiKKoVNQm2CHWA5g5UGvDT7pqqU6CrCocKKaR5cvd7SoX3jEbeZnXnCu",
  "key33": "38wjQ2DkYyGmGWtTXTE4H1UdHF11uF6D8V8WB5As8nSjktVhoQz7HKhSXxHeutJMFw4G7pHF7yvboF97xAfbxmEW",
  "key34": "2xLoUoE3PHgu7QC4A9DvdvhNRQtgqviEVi6u3nxGuzZRWfeKjr9qUWbNhqVpLmCMDULRjcUMABbonhNgKRcMzrLh",
  "key35": "S5CbLrPntZCfLvwDVfwhbNo6zfjGXZv77YRhjUK1ZG4pdEMn8iij2zf9C125QUrcajw1rSrUjoUJj2Awdia66oh",
  "key36": "kUZQkmLtBXqgR8RuezLqGCfLeyhqHoPoo2aLNcrodVxddhDroWUrpDovHpd7gcv9azMKBGef2yNTmBogE22kksa",
  "key37": "3rkmnmUeDZ7esGHpBGiFhMtE19ZuFiQgXeoBkv36KsoEQAvfRwaQh82qx3Exjesi9Mpa5rXf7ktBHGk2kRo2CBup",
  "key38": "4TJX2dpQcrRdKENGHooShfj7xvAJHxdkF9ZBd1qWkjGQM1Kp2pXzToGZmCCpUwWtzRRHYSPXjFRGDyJsYtmVddux",
  "key39": "MRZEY6K1ki7tG4fqjALCqFYQyjfjq189WaopNZb98L8qGd8Ps51GpwHPWncbXWJhQra35Wa5bxz8czAjoyf41q9"
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
