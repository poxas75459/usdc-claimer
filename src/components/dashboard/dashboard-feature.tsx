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
    "4NxWneoJodirDdPHroCTCCij7jS8zmvfWFHNLYMJDju7kbVRA6UKkdQ3gnymF3kmcy7WhHybaA5787sHTaduHNMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1AH4HNK9h3zdfJjMHbZiNQt6N94SiWWd7MvAkN4KJtDRNP51zbNWuWKhqUd2Jc9dvysgTtR9ZhLNzzq77rDd7X",
  "key1": "2LXstK11w2nRNhoTJ56vDpuahHvekMiZxPZ1kagiLr9RkSAwaXF2J1EGenzSWm79nSQKstrgSuFjRjDDLsjEDiGt",
  "key2": "xgBSYVGot3qSuFaetWMMZqyKRUnibb1qa4AhQBiq73QnTYERjREQ53Fp115UQdxdTxnnBAXbQKbjNkfyjpYvzH5",
  "key3": "3jeHitwyPRqGrHycveExqEZ8YtDUEjFtj74zhBXrSdt9K6nSmrde9KANUQCJGscMBLnczDn3oW55fn4Xc8tGPFJV",
  "key4": "2KJBAb48MWLt6cpM1ZR227hUTi6GbiLm1iXCoCuwMcQp9ot2ArojCyYtbegU7sqP18FsSzAVPxKt4TyoeJRQyYf7",
  "key5": "3VdfQLoyzER8xFCNgDdTRRbwXvYpdN66cziBGwXSE17HEtbM4UrPdmyDkHDmU8gvAzBL1wKU3ZTqdLreNNsXN2x5",
  "key6": "F3MYmJKKnUMcFEGBrkckB5fCDpTRRNr5yJK7bSKkgVATeiS2crLiG9HKQRASxyUJLmmdFP9suBc9gprw9JSnVUF",
  "key7": "2e7zzpeovCSMqv57pdccadL4xP6UHVQ8otK1MgZgyoEBjXJ29oF1hWmiqvR1kKjPoGjYC5nYNGBvtZ1Nrti3N2Fq",
  "key8": "526GcV5Qhr4GXgtiBNH4CYog6EgeR6DBxFxmQ9bdGNcVNPdkHjtmTBHwhzts8nqFAyaSB8VyN66XV3EHmE5xp2y3",
  "key9": "5fAQ36S9gZVxJnC5Z87q9LPXB6CkvSsZx3HANngxdhV8bsuN34Gj2pJHukwhnTde7JwtadkMns1NtNxGYAw3tvVz",
  "key10": "Q4e5Y262u3AhKdrKX277jtAT36dQeNZEzku94ii9382HjBHy6baBXW9Wi5TdoCpAoaYg1fi8PKZ92BdqaYy2Ye6",
  "key11": "4SNFFuJJuJpY7DnQL6foZCExMwvmY6Cbe4BVhTSTHMoScntuLRFbNVL2Nuo277yJL82ddJfp1p3R47z8iYvtMfMd",
  "key12": "3pFNnFmnecC5CDSniU1Q11YpFXdTxhQzCpSZ4TzVyHCeHHQW5Gc1KFmJaqPBkFi7ZDUB5UMni83p6UcG66jyCHuB",
  "key13": "2viVvgbwGL7g6iC9SwQbZ92kYNqhVwngJW1tR4dWbsXrmpvHMUJKqzNGQjT8AxUwSCVBPEULbGz1aphfgaMfugBJ",
  "key14": "5Zexnfm9h8WvZhzuVcBK8Q7BD9HZnSE1na7sy2RekDZqm3Mj4AusGqPtea14KootbaDFTTNcgceNrGKJNYkF2a4V",
  "key15": "2FCURo4KV8mXRcpcijJ2PFuTiiybygunJQ6vovK24SXBegbDnYW3QrSWkeddKKnrcNgVQwLgEYk4yLQapfqWL8eD",
  "key16": "fhqLkivCwRwWnWFtxAebWZBV8bvov4ha9CPxv35zrMQrkPJh8chjNgcKmKp3hRGHJnve9ER4K9oX2fFyYgNQ7kx",
  "key17": "7A2Ph6pbr5kjK149sBF44euDuP5UuFMLhZWbDjoyAChhPQAN3RjzwrmKqN2tnf2L1enuhjsPvMsjBcNyYjeJ1Ty",
  "key18": "5iHfwoj5EY5z31zX5eiMwnGZE9wR9USbvyaupAykkPqfxYvdREnpKewY3mqPLhZoWYpfkgZgHarRsgnVT92Gk3GM",
  "key19": "2ERG9TmDpVESi2AqqKjRimJiWEohLzQ1fVX6GstT8cKq6h6xAyWbfazc53LQt34oUxuFUZ5iS9X3ESUgGsQh8H2q",
  "key20": "5VfrGv6i8yfKqTTgcYHNi327bX9UJUSwbu7vyHEZta4ZSkHLe2C2BKfS1bd3BA6nWXAgcZ7fqfzynF87axu51LDL",
  "key21": "5CWPzeueZktye9Geq2ERWYmTDquzVRPWT8NH9CRCA1yqrthr2HHx231cvBzbf9rksHNpQeSTmdKQCsFctTYHGN2f",
  "key22": "61JnRWifRissPUvPo3CKya5i2wdLqe8yhxNyQR3BQGAFZLuv7wn3fobcxigfnNTHeJUbAs2HjnAF7ZtFktAUBzzV",
  "key23": "UMWiahhkhpfrVXgjc1iWZApGyfX2QUESTv89cZCaxpDyNeoLSSnKeAYfER6FhdUZtnnYorwWFLkNAnycnw64L14",
  "key24": "55bY47XZ87grzcsnfbhRmVwrs8SY2hXw6aqyN4qRrMENMrd8vcU68uaN9x58hpUmcdycnGakvDJSvm6sNgFTVEqv",
  "key25": "47Wqoj1y8vRNpCG4FAYcfws8HCnrj5mFasg5AGVC7GF4yuCyF2nPHUG7KTtfChqHuNNDS85ztvP2JfiTJxJHiSnJ",
  "key26": "3et8UPdSsr9aDFCopeGvioHYP1agBK3fVX5wQW1n7cPwE2RJwe9SBovLvuhMtDKuEcU1pSjhnAkpaqFwWDWR6qCa",
  "key27": "3SyMmwxK6ShsioDLqCGrtnmFU7AqA6gSHY9BcejsJGnJufiS5cX6BvQWm73257ShYvS3mKMibwrqZ4w6pEtHexv",
  "key28": "xJ6ofGivs7QfZw7Tv2L8JwtWFYxdivx4P5HjNx8TB7N1a4Jzk3EjqyKLTAzSQ9eASYjFYd5xJQHVvsMdBx3r2kf"
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
