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
    "42mC1uMHgj8R5fBupU1mzSWbjBoJE1KDw2FJDtQBpNtzDSGXzwXgCcCFvNrBmdgzRVZtnajkRFSYSSAB4vuf41AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24X6rHy8Ps7tF21zKVED7G24xMj6DiSuwb6WWAozboWzrRRSMopJnKng2BiJUwaG2zpBXMrFqH2paUvLxVXDFdr1",
  "key1": "3UpaycKX5w1h5eiRXt9vvu9Kyu8uKQEcJYZvRtdMk8qCgeaCJCiNSSnjeni94fitEB3Ze9yL43QWu5Mx9oBzxrex",
  "key2": "5bxJP3dj1No1dvW92RPdf7mqmJCJvZbBx8vCwadPzAuZJhrvR7v5eLTTD7FvYfuGEhupQWVvyawrUGjvZ7s7Z3BP",
  "key3": "5oc4xZk6uaA3RejVbEwDsXkG2nLGv24cMRc3V3vTNV4QUnABC1SZHSDoBD9jEK8EMPBkAchMuEvZ4hufm7dw9pTv",
  "key4": "5G8VfUc6ihPky49X5Y9cQhxohGLpihM3geLxBTdrVbQ19rmKCMzgigKeHg58NGD2gj7PbJ4fmwJjAGLxowp5YLGD",
  "key5": "rx2KRBcWRBdKKUqSWbv4LrkNYuAtYyFzhAKPxWMwxiG4sqKGxNE2VtTUwfd5U8Sb6b9c5LoxuY2TJNEyHpoYhXu",
  "key6": "432EYLTy5Y7Bwyy9Q8g3eDSSkLZe8pPwmh9E1x3iacaC9wvneqQMNuXQ2N8subsmKpgdAEXSUqkERV7ecwGQnprJ",
  "key7": "37ecGoBorNQETUN2ARsdvkvBKuJZo1wYkyupHaJdEAhqV6Gc2cSP8trJFu1WHF9uGpvDyWRBM1Xw61eV5JyBxMe3",
  "key8": "2sAJKhZ12Wsype6Dik2iFNPHgtLKBF45hZMC2u8QYLVEHU46nErPVE8MYMJz7HhFxVBnVaAPZXnEiiYVmR1QoUhu",
  "key9": "5CYTXiAQRZn9bnFL1jwB4BvZYVNxS1oTSknNKK13uNePEXS5HWLhxi6dZBXnGJBxW4BewGWQTywLkgmruDNiyr3N",
  "key10": "44F5mD7mYSDJ4cp8gjcf5oUocA4DTbjG4ijkUApg59DB14u6rL8NTogsXm1ShdhfjGHH7ptrjpxfGzL8YCEUhJ55",
  "key11": "2nxwzDrHmZd6h7cuj7Eg8LqzwiorYzXi8G5tzDXvgMWP4qmhw1zpcz5BA38gqys9Y5rdhtCCuQ93CUFmjB6XSHYn",
  "key12": "5UrQtfFm6BoVbKSwxVVroetKRxJEXJyy5TTVamv4rWuYqhASnLcbC8ZGFVzr9DcufvhrtRCNnAduK4vCj9XKiZ47",
  "key13": "4odj2Sw9sYR55Xhe4Y3B94VTkwDQrZP5bYS3R58tEvS5qdz5j2Jj21YtQXxU86kBZP8rcMDzWYMq5mAhy4Tgmwf",
  "key14": "5bt9oZ6AKKgS6NQfXqk76nb7rYbKCH8GTQWVGxPu8WHSxe5CFoiCbYwUvQo5dCM3Sxr8DE1zYCV5sF7BWCdDkQx2",
  "key15": "3vAvbAnFiaJgrAypHDQriEDexcoBSTfgntEq1DAUkoK5Zx5ji3TzU262qAc1uVtVgL9rU1Vru6V2BsUQuPd2xAQ4",
  "key16": "aghhcriP191obuRWd4G1VFELMy971s8t2p85quwaoRj9ntsoejEzZuBf2jxyey8HdR9s7FEMWuNPiQ1NJn7D8tT",
  "key17": "5fodRs874nkxDFkLGyrJ4vuibKRjGz7WJCxaLWdZwnuij3s1zgUuDBqznCKdSt1DpNhyGYkGLoAe13TGcLnPT3ks",
  "key18": "37iorZZ8NT5ppNBsbhEb4Ye4U9Yki5GXspt6dH9xSwhHifvoxhd8FYv2xZ6BZtqTN7YBrMTsCWadZ81X2amGLdEg",
  "key19": "27WTrPecoGUk8v8oQrTy4sr6bbs4YnN5r5y9bpcmGWcKF8XoHfazSouDXTxGZSxS7JL9woatiHwaouQXJ24saiWT",
  "key20": "6NA57FGr84UiwyQ9QcAWDYZWky8CTrFmeSohAhgjxPCbSge78bvtzDX7BmNDu2QR3HJg2p7y1LZNTQ4F66u9pxF",
  "key21": "3jks96PGLpRqzf8zz2wtZ7sTNtxdL35YJpQZ9zFVXPrvuAp8wM8fBM88sVuqehqFFWtqjf591iu5f5p8BSkLVe33",
  "key22": "qq1gmrwLjpXwnweTJU9tt1bQ69wKVxVDCXPehrk6LtcQ1isVDnJqe5vkuttzUqDHwfyG9auGuprzpgdmfvCwE2m",
  "key23": "2rJtaYq9EKnvJL14XiW9VH5aqQD4vFpuDQW4BrVygtQYrK5jXetSJZFrs2nCPAXAKmdhVe68zSqo27Ahpp6C4cMU",
  "key24": "3zNBdU8RmvTRGBsEQig3Fas5cbjfVuhn1fD8srn7AuigkKSzK7N5iHwJAncrSnk8rhQA2yqz1cWLyupcphdHherk",
  "key25": "4BYniinT8UyvvskQ8rUf6MM6uki2LvbFoK8jpiGT7GycNRrQDdg9cqfhYEFttCDPhznPGVSYnw4QV7yYJP78qB5U"
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
