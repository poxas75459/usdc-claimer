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
    "TLMtcNmDmrXphbzv9z1aMvntCiznhSMvBS3bpYHLmUPqfkSidNtegoEjGijuBeXKdTy7XPPqHc63Aogsqm8K9ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wkViMZZdv4z2MHUmRJospX8NyGy57NbZaFjWrehjHimRHFmEK7yENdVpPsseAZfQZeWSoWhyroNrU6BwgBB1AdB",
  "key1": "3sfGB9WEL8YneACgSeuAf3mG4y6AWnY3b8vd9iEzF993U98LLPLJfN6gPWCjbSPKGgF2fSueexxA8q4ALc2aErgz",
  "key2": "uquo4Hb8chskS9arB6PHJQhsZLaL9AYwxN9YSfT6GLdDQBn9wrDwwaYAaSRQWzfbbY6xfrYVie2oRCJXnoywo1j",
  "key3": "3hFYJgtzjbziGeUANEjy4fC6nkQbJ6L4DqkADChDtan1EUm7vB3Ji5f5Vq2jD56UXzyzTMJJYdw5kCKQaVNkoCEJ",
  "key4": "mTbKqYLEWwMjatgCShnFib1tXEe9dHadGSwu8q852QousVtws2nmV1LZ2ETq3WC8StcdntpkuHLQrRHhWZhMvLs",
  "key5": "b7v932YcdBEJ4eratBvcHCtPQ9GT8g1VRLHa4ZogGg2gE4K29duijoKU5eigUCnwoqtmPqx8PRNtLbDmFdTDFfX",
  "key6": "2V3XNLHCZoy9KR4JEqp5NKFoMbhtb9ckJJmBEYK2iwvLKBGM5uobqYD9knLSRtmkK4nPs6xSP9f9UKjHb8fpnjQS",
  "key7": "5NCdJaaLsEMbQ2LkUZDVuKkPnjwq1YyfSAyBkMkr1Rk5ncK8DhQhmoo81phB6H6ysZodu2Z7zNWm1QiamMXCTc2z",
  "key8": "2rWW9XVYvMsG6aygiiRPd6Yu3NfzRExBES91xK8CgaA4R41UrbWKgiqmAL32xBjio9zGBysqRKjXBhELLU5FU5mY",
  "key9": "3pJU9CEXvvMn9Jb3dPnkmyxsQJCarc8ei5WJcX8GT8EB15zKBwSDVd6iYjypd9w43QmEoAGLQkuJCa7bqpJfTnbV",
  "key10": "54iJpTMGxTN4nHsQrTxrwcScsCmWpV7PJDXhUUWM94AypSFQQb6ybZEf2Y7k7wz36abTS6sDeqBE7jYBvsMrYimA",
  "key11": "gxB6dyd2iam5Te5gLGaDwtcJWRu3GC4jG7N2rKdwaBb9Lfiwjob2vzfeoFRnZNDUGnDaYqryG7B2knoqvUe7jPE",
  "key12": "5kAhWr98PPRBkGTmMuBTEsJpSJhrTjErdHsyBn4J8Y8huTfovkPkTcsKMS3ac9t2QQUh77nutJ4oAmN3gHoDoeAs",
  "key13": "65hPfohWqXsapqbJ7m56m42mG2LfWEp3JHMUzY67pSqPPUw593Mx8wbztiKGT3FFWFhX5QsuAVjwEuuMYtqcg55T",
  "key14": "5uTzgdzzCbgD3zSpeBSA11u9JKR7QrWvEUY5UARD7KEQNA8jPMUyLFLmY2rw78CUwcA98UkdANocDYVBmH5UHbaE",
  "key15": "2dkzGBqZf6A1cGSAcV6bZnxPGhmx2QnPDjnRCT2se4bd1ELhxS7CPCGUX7Tp9DYNDWgmWBL4RXNkCPtXrsn7w6Eh",
  "key16": "84BoaNK542vfYy2fbVwopDikbWyLVNGMVDjJTwQkksBwnMnA4egcLfKKzQgsF7KGFABtbc7Lmz8LXM3rPy79haT",
  "key17": "u8bUoHwDTuYdWExruZC3HV9jvNbXLS7ByNerYJs5nQGh9RNqFSMiaaW7NQ8kEaZcZ5cg4QQHPS2kC3hr5K2yd4p",
  "key18": "5FVd2VMkJGQaDwoTAMBdSitanPQxrSsPqSgFZ2yLhrSqGLbecpXu8WLF9diUWhA3Gc93jCE9RzBrvivi2GRuVSw9",
  "key19": "3ZxQojvJPYjKP5ghy1xM6B7E7PDHdSJA57DJMtQ8EMNfdDp3RhCYnxRmksqi2wzYTEvnqqg5PvjAYdnkE4XQhYr7",
  "key20": "yBig8vAojhYJDkY3fH3Bxf2vW4LAMdMSJ3CV9GTtpdScnE4LJihFSHHjRETgmLmgPYprmVQqc94hpbrxKEQnrrg",
  "key21": "5KChKRY2ardC1jQYPBANh5MPa3RSJRgUxPMz6VpFJcer62iDwb4L6MYmyYwtnXMEfCRX2Agagj4FuuLXZvTKnV9x",
  "key22": "62CDsYs8Dc8KvCWj3isQYpPkjmeT1X3HGQTu6FqBYXvsQc3LWbVLLZf87XGj3g8kGhrRdqz6nLyLmRFQYwX61y94",
  "key23": "4UVVpKczaw5EaU7MVNTK5aSRNbVXbAnspJn1ujgd319LsXe1GXWjLGkjNfcuDymMpNCPAnzEkirHvP23aQ7jJdrP",
  "key24": "5Fp9tHbsscgMxG4s1qhQzrhYaY1dipZ9FSTXPZd8NdaxoNN6Wz4ubo786oQurr3A2voRgKnpmrr2vwvUG2LJvx2Z",
  "key25": "48XNXygUaNW1gexxQCaNASrmN8NCmHzFThbDCWkxukjpJXMBq7WBPjehJMPwSJJeuVK1XZ1MhkKdcF34gyz5EhNw",
  "key26": "3qbib8243w1yJkpGUufrhEccEuVaozC1pyB1MLDNvzL9wGY2DfAEU64Rw5AY2iijDZxTr1GUcpmaDRXYNjTsYUvK",
  "key27": "4o3LqMzKVaM7jfxvdZAduJjhCaXXx2ghnHtbPEKSNhFAvpRwbWhyrYDsSry7svKf7J89SZdEYUWetyyf7aF8TVWf",
  "key28": "1K4ebsd1MDuD9DsCCZHxdeux25Vr9sBqZFqVTK4ptudsHzPRe4xxtdELLRg2wp68gpnvBhvJpmKYsB1DWctRzBM",
  "key29": "5Lw4tocQjjPJpskpbAMyLnGf8ekR5jai7qdqWMDVWFJQMyd94JvyB7tnwDNHNoMDPtA6kEGtgxaPjSNz26N35faz",
  "key30": "4iqjf5cpfePCAZP4G78pHUzYLzu1jPELghfwcHuCAN752T7vHbRxhfocF2CNSXoDhM1cY9VWzyrtfSFjZgKUCZX4",
  "key31": "5n83WLVbierFw37uFPzQyWnFrRyb15JjY7qiSBJRy9zDVXhaGhZHnQXTQKDZLgXYFC84xA5g3pqsx7Lsv6mx3MMv",
  "key32": "5mtKGXqbJXpcUCbKEgG7mvX3CWScFyS2XYvfPj1vGx3ScQVEJUELb14aHX3nCfvV7QLHqmxVCpuHC5bHJqp7f1A4"
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
