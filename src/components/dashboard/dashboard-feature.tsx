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
    "3AmDcdYNischGYpEZ5q3XAz94RZDJyML1wzrMSaKFGQGtWqTHkYVuURn92UWagC35oTHXdurRbeQmbATKemHMWpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sA3HEuktjwbXJKxeG4bNTy4ufVbzfrwMcxfCbWYEHGKnwhBGqAjvYB6BQgfUkKZRygUTxgMGLJY4LEMQ6qLmPNC",
  "key1": "56pjZS8Nk56v5QQhzjqb8JYRQDJYTyUCdny5MJEJWh15WtE1VUKGybfPjdNuJFJCbfGbNwu66DRMeShCLvBET6BG",
  "key2": "3VG7kQv2qZdQWyXx48YzKzHYjZLiGrpaXvEdNRRn5eUxmkrGJdtCCosWBZiyXwydGtrt5x53N8nw7Ks4KgPNs5UC",
  "key3": "5GWrevRiJKRKjYifCr42xnR8GYPvUFUmAn348hhhgRpC8DZ3zTCrFsxZSfQygoGxp3HkpQPHMJhurSz1vzVZA6z2",
  "key4": "5trM5D831vboTu41RLaK7n81cx3VEcQrgzGWLLRRJdR9ssoB3MJXLi7XxAaCM1tmuoL2obBq8D43RTaAKzhWD89F",
  "key5": "UVTh5XFRKmDg69V3JCeBs5yuWHKpHv2AphW8DiY4jgAnWKL5jJeSNXW1NEjEWkbkMBSrp9RwQsBEtJ7Rg1fESxT",
  "key6": "3N2FadeXkHtdttvKDutaRsx8mDdDXhX77p4AN6vuv1SkKVUSVWn5GmcNmazd2yYSufJnAVp65woHdbCFDxJsqKzN",
  "key7": "P9AmLuKRoCMPHLqGDGkjpuixdr6hMmdJU7NBJAKmR5FK31Riyc2gBZLmVD3pTy8Njn9Sd5xfKjheA3HcBbD2KpN",
  "key8": "2ZD5pSK1QwzVEzrrz3Y26G6tJHWMD6jggDsp81XSQ6JYjnADiqoqo9etWagysNaSMeH2wcjMjb5afuDqpnrdAVXJ",
  "key9": "dKM9VfkmfLUxpMps9uhzFQS7pqG4JankybYvdK26qzNS5JreFLzqr12Eto6C9JWrpSxZ3PiwZdF8qNJWccFEcqk",
  "key10": "HV5hdDzea9xHBKLB562McGoqGyn3efGCmA14FjnynX9G5r7uKJqFRtToGBh5EA8tPEUMLRbLrL5Y1SF6pCMpQZQ",
  "key11": "DhRFSJobvNeTeu99iqZSoTn4k1DjNAEMVWbZrrH3uBMKEbC2Yz72nUb7QpRZQ9bFHV7e5rrFGKXia9vhvn2uzqF",
  "key12": "3Z9ymNhy6bokcSXZ3k1WfcShZdDXEY7fJdQtTSrz5jy52v8FHUgY8J75mkdauzz6oJuxMEcMApy6fZSdb5q9HmUo",
  "key13": "64HKsMU6V5nXTej7Tt77pZpzWFHB3JZuerhh7A7ANgLNYKCfQjbcNYtQaBoHgTd3PDRym7cCMLvE8e9P83wtroiC",
  "key14": "46WTpitS1FaGqRW8ArJGgjUkNRJBLTaMo7WS944V89mPoiDBbf7wYVKLwDacS6h9DLKVGMMfFBMK3FVoTqqZq5pN",
  "key15": "29ZSDPmfLxsr8hiz2RCivERdPKmKhrQP3b2GFJ2hh4pc8QMYWrWdG4svidsmggiANr9RFHEg6s8p6gENsaeB9C5d",
  "key16": "5qGofkjZFUTwSAMwdccvuMGhXexUPKGLmWzUMzSePRL1ey61bXjV4MnvtbVAyp5GHKMhK1CwUvc7648ycfxwwKPT",
  "key17": "3WdBc1pHJJf1Gn3qoxygVfegDAPE7oENpoL13NrNhwcXzabXyMzdVYutAXLfGs1DuirxS8TvxnTKJKTZQ8dJL6uA",
  "key18": "4af76XXsLMUDBhqh7VYzzu87RCzhFzE86ANbmohmsdrnEsZZBRT36gsLVMzXrYLzTGzBV4U1PFHBFJAdWJVWBmag",
  "key19": "5SGmYhXrY18wQ9rMeh7NhbTZifWgNNYUsKSDrd1nqz7wgPwobbGMZt8nYHSj4fi9vJwJYoqQNUZGWVGGdWSvJJzy",
  "key20": "4GzjeQzAD3Gxvn9yFNuEczK8AGXa7Edazf2TohPxHMeh7qLX7uRq4TZqp6pehBgh2LoGDK2eGSjoUgi7GMtRS3L1",
  "key21": "maA6kwj3ay9qJYqNgaEigcrnBs4pd7zW2wN4BqNEAfV2z3Rz7k5ojQ87MhtS5Ee2tksfSf4DR9bkbywLyPomhze",
  "key22": "5zpanKD9dHoEHChU9W1g2mEWvB5gTmNJyhutKNqF23cHxtMzGmFoXqX4mTadECTQ1Dr3PaT7P8QNsgfF1ReG9Xjq",
  "key23": "5VYFGeEYVAFbJkQDAey2adLsqzWpPZaNUygssjs486c4yL1qc2ik9ywZNgogxkDte67UfsMcyhsvj32e4UqZHVhU",
  "key24": "66HdakbE2ZQEjEasFaMgdGCmutsvv4Uu1UYfxaXHX9keDiRUef5wdMwrfWzYHhBH12VCWSkKj5A1PwdBHsyhiiP6",
  "key25": "22YB9heDM8XjwSCMemmDy8LBtnsG611tqpukWXXBVL4Mmj8i7hYs7Hewy2GTAD227LVCyEjZKsiQ63y6CpvHLzhg",
  "key26": "jDfsTWGbDmFzMDVWU9S7nnjEpTogsLu8iem37GVUzhMwePqKusM4wBmPDfxyuWyMGgi63L6HAZZUQEHYZdccNgd",
  "key27": "SRFkA9ZRGE5KTbBJPMxw2aqLgrUbF6RnP43WiQoPGT8B9QX7JWRLBEuvLVo2ygAZRXjiDFXkbQJuKn1Pphbsj56",
  "key28": "43nHRMNamMAnerPUB5kA1k3DGW88xrhMZETnWGQgqUUtszBp9XyrmydeYJLnsaHT35ELHXv6eZony3vKrDV96Uxd",
  "key29": "52QA4k2oP5wPj7s3fJZnPb7RJtSf4Lm4arGEVFVa1MZSBhuGvnSb2Gt63HBNEYS4YexRtX2SwH6dK5zLLd86Fvrb",
  "key30": "6SUZFA5avfToBJ2sDPqQ7Fv588M3DhsdxeQAqwUTxdr9uNjuRCVasNJrvGfcDMg6ZuRgU4UzzPRroCUACrk3Sk3",
  "key31": "3NEkmLGjzREd3cpgBm6Ssq2uivXpno4XrqKNtFqPftsUL35iPsdTMAeKjah5BvPm59jqzTbtQj9TBoSN3N8AokA4",
  "key32": "5SiDxrN277ZanBDkgpPysNoZFPGCcNQNVzoBoexTPu62hX2yPKc4zB6q6iLndCGgqhVKueskBsP3aVBrkDWKnhUn",
  "key33": "4sXCJ5FdocLrtsJFWe6G5qrPSQCaQCNdr81WJVmGdX3dBxpDUY5QkVLTeZ1U4YNggKx6xZ6snX393UVVh2UsTcFC",
  "key34": "4fUM4t6JrdgGddxi47zaLbwmGt7TbTkS11Z45wvCPnrzcVWNL2wcp1kCrMh7HTpHKpNqu67CYTanKeQTBJ7aryip",
  "key35": "4hPX1U5WGZVCDULEZRLXXhXzNDsXFpt7HhBC6BRB5VuAjp3ma7g39gbVoyFm4qpCahb8n7VdeuNNja7385YGGWMj",
  "key36": "5Ep4NBpvR3kPfCde5mXTR4Uqci4SyJp5UsYtCinjDTpo1CMoPb1vDFFZfRkyzgYxddeBTRXbLemaYmcjsVQy2r3Y",
  "key37": "36U5S174GE5xkzxXDBNG2rFiSMmxMvhkM9fjadi9y85fcCA9iTMbHyuXVSwJangytxBzuewmeBvyHL1ArFUwRSah",
  "key38": "3UF2KmmCvSGxGzbXFTXzbU4U4u4ivDnXp8c94oLJNrH4nB3KJiiUB6McRoARwsSWFYvWZ933726dngau5NFpNGZA",
  "key39": "9ks26Up3P688fdRoHiKoA1SfUYq5yaKEFdDbDoYVBw7TtmbNwogKkWXFSGaUXdEdPcRzmD217MdTG2HKLs21Fve",
  "key40": "sae57DdVQnVdtKw79FjgaAZGBpENyVFFRrrymvgSobewgaBJgnBYc9HjQ5VtS6padX9jcfSR72XJbNVX5Q3hxZB",
  "key41": "2k6xtcgSyWMEBbiAQzc4qbEBeEnAjnAeS6dAfrmj2WCchURg6vhkQM4SHwXwADXP1uzpSmTfdsDNvMbWkDWnbDYq",
  "key42": "2Sy3VWLz94QC4v8bHWVo9imFqAaq47dYysyvQiyqCimqdrDpQnFhaVqdVTiD2L82LTGURp9iFvweySXLEibYubkk",
  "key43": "3p374g3LbpzTV43FyrvwcdL35JQCHmYB8uNjgDesbgz2vvJu6Qo8qDssK4qDNxC5Y8G4n97v2XhV1PLK6VbgiUDX",
  "key44": "4rMcNJaY9FBjCsatpJiJBguggKEMZjh4ukEnQETQHvtNEHKSqowLTzyTo6mqjsaHRFMTxSLRXHwsCFdDGbYvoHEc"
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
