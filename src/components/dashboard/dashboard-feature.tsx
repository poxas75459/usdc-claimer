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
    "24CDW4BJvYUkY9pbbMK5Ry34P6NbWpcVccDkDgM5i79J3f5bKwEwxL3M4XeNBvzCd8PY4mgzuYnVrDcw3crbzs5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BoSiJhHL5F2c3mJmhdxLb4VCWVKr6nBQED8Pngy1hQtWwZK6PzS132HcCFYxugqRGGudSteUgBmBSjGuT1sQZVu",
  "key1": "5fW6mP2iShmt3pkgXZJbis4eiDUA7oQSi5BZuCnod7gjxoV9pCFPmQunG5Ymf5CS2pMMMQeiir4oNwLXhMiH3Z8Z",
  "key2": "2PQATJqSuGC9LU2UwrtJsDhp6fSNqjrY8dLXYRirozQs4P3bdxxSn1RsrPHUicm3wCyhDUvkNvQktzWNL5fugfpM",
  "key3": "53CU8j2uSfzWtWK8tkfsAF14VP9j8BgkBsr3WcPSrUSUBwTFutRM8koV75be34GP7dxsPKCh7jGtNcc3oSJBTFmC",
  "key4": "2NkuJj6jCWB1xfxKonsc11AknqnjgaP73nuhri8eCtPyskm3FSsY6WUuUVWgAUEKMKB4ek5rLmnm6WhAiPTX7qe",
  "key5": "5VBvNPC4vMUfjSL3ZwS4wAw7RfEtZFveD9yq3k3Dvgb4LZ77qS2mDEAqiqrEuCZgpuV1u3tY8DodHD4HuTADGVqc",
  "key6": "5VW1uQ7CSo13aSkNPhpnXGKjhuyGJnFbBXLoF5NHreF8crvBdyu9P4TfmP6z6rnrtuhFcUboi4ZdtqCom6s3RYTU",
  "key7": "4inEjmMNqhW9PANuiD8MehxDRZs9qevHK9B8ihGdtQNtiASgUEaZxHMcUxaTgS7LYevCi6jLh464YUXD7fofkctd",
  "key8": "5srFkNtBiYSVLhtFSkDQeAkhepahUXVw1FpzXj5QRVFypVX42FEVdjYsPYSrYsfFNS5CkGE9iGBbHae3oG7BmCT8",
  "key9": "zB1vqZ75bvZTWVaX2mQVtNG35222aJrzBaob4TAwXJW5MJcjgAH7Mj6Qka14uhobAEbDcRXG9b5CwSh7YwX6pt5",
  "key10": "5QFVGminaGmQhmTf2vuLznA8JD3bedJPKx6P9pf4ff1XX6wgzam7B97e2EJ36FLx7mHcXQnHfPWkqUBMhApnqdiU",
  "key11": "W9qtS8JxbSDWwABXaLHWX8YPC3yJU59D6g2yxzq8ook2Qqr7z1HqqqfKKNLr8ah8qr2rxAz1xLJhbg8xnPLzJCY",
  "key12": "yw6cjqs6VNkATh9RURwRZtH8RtybFNuwAvQU1dK5RRVRoSUCfftFoGBDCyFR2NZU6edZnWY83gKwxzxFCEp3YDc",
  "key13": "5JDpcC27JnJCTUdZ8HHMkutYVKKfVMCZPJfVgfoX4SE6abrtWn7a7eUiHTPxqD53Lo3ombyF15xC6hCE45skv8hB",
  "key14": "51dAzWC7SDKkfPruj9ep3Yedajsa9CHKXBHDq4Tk4C3xcSS9kr3Q4YSmvecEURD9sqNQe8fL3d1H5vnJiL79iscN",
  "key15": "5St3k7UiRmF1WYCU19HFZtSg2wtqx5Fbe5fAzb56vM1gj75rg1w6pGXEMDV29YG6hkXRR2mZKLe466bCZb3cztyg",
  "key16": "3ejQZQuUnfe7pMJxLMMZWzT2ERcgPkFqKhRe3SktcuPA9CSFJ4m6MxLF6PC8mxEaA5oMSbqFoKB5FT2koRWqMfRD",
  "key17": "35QKrYD6ToJpu7RtuMxQ9etVVXxPzwey6Mhx18m9gh9wNGFCYg3PXheB9zYGzf99SZioE7vu7BCTfKjd1uXmaRop",
  "key18": "PAFJRx7if4xYXon2fcpEJtka79NoEdP6zA4Tf5H3qy4khPzewJysRDCkrX71WSNHsN39aRwz78s7BFDpCsS8CZw",
  "key19": "3ajxFtNypjZNiyvWbseWLftdGkwnordkhcoJk85k2GQR8oqwqVdR3ZUhqeSxeWQK3pguMewEZWLgHkLmP59ykYSg",
  "key20": "42eq1ciNgVsoP12nsJjXSSy4Hki9AcaSv3vbbf1tg9WWaD6Ezgr1zonj3pJxfnCS8fUD8oD21xB4D6aTrJs6Gho",
  "key21": "3QiTFQhWdoCbqq1auzirzsN7gQbR7uJt9Q5ADG6fbkwWMV6fTe7NoodPQ2tck1MYgZAUQJrY4J2bVnBzYA2umNGX",
  "key22": "2g66XTjcFFFtdrt1oS7Yb4Pj6fWyPokeGRjxbbMHekFwCuiBcufwL9LfDkrrd5AW3rE5buF3YAQzcFZkdjbiMSSQ",
  "key23": "55evSMjveewQx8fNqRXUfKGazEk5TpGtfChA67pQ1xbnL62KNbKJCwtYLTRBxURoLux1X1NNNxSYao2hFSCHApQE",
  "key24": "5SXgbSdCkiDJ5ftAySbi8EateVjqXJimW9tjGzHgW6f71DfsDKrRHN2tBYThvpB2Ldi8pExmFgXUDh7DWB2cZqMV",
  "key25": "4dcFNePR3tPzGduU7d8zrej9go4YyEcR1suih5X2WsMspQvLNPK6TTF5ShPk5FHJ9Zoht1jLfVsMSsHzSaV65pgQ",
  "key26": "3XRhCiX9GNz89PsezvQ6BU3h3WBk6WTTK8o6yKf4E5ikXJ97UkALGbHB6hMvuXQrdWCcmtLbB5m3Yvy2y9cXcVoN",
  "key27": "BqeAccBSLpSUMbvRu9YzqGqhpayS3Fy5rpjve8ZMtxs4ikyJCnc5aCuPBwYMcx4a8tAUQRPXiiXPUrnr1qHbzQK",
  "key28": "4AaMMEJGtumFXbjxdea9uPBr98MCgpPVcZJPsWDbsBLMadjVDyv95jjLuosupdR7YmccDNgf84iuCiw9dSgurmHW",
  "key29": "DezpAqtY8ARtL9Cg3f1BbpemBW2TTwcKjVWmYBqKJwtcK3CjFTYbzgKbEtdqvZkmYUERnFNHxUC8nMQgWcx4YT6",
  "key30": "5fLgzuCkThzbirWEmWycLd7mo8FrSFNaDEFCvpjgkYN12WffeoQ7jKEz1vNNPd6Fk5mcRqD5rSN4MZ6yy3pWozUD",
  "key31": "2d9YviUD89C57FMnYEBGNWwLfG2mydXCWPVDqR7c88qZLHVeQ1xMtnfcwxaBXkc7VRYfiQ1EqpPBpWqVVd357tck",
  "key32": "5uUsuPzT9TD9s5DNeHc9qsNch2JyK8RqEWnzcHJ4jDGjxLa9etMogDmxHkBjQZng6ej9zdEuaqDPHKxtyRbZYjXV",
  "key33": "2Br7uvFjjne2bT7ZCq6R1VN8vp7GBKUkLRN5mBCgbDmGaATu7H359fS2tLSz8Kirchko6xSF5MFJvbTcM6mrjpSM",
  "key34": "467UTdDMmi5pbhGDXLN5mV2LbjfBvXUt4caBARKsK4ZuzpaiivyRgZU5BcY75JCWcKi9AqEA8NtB1GBrEgMFvig1",
  "key35": "2znt5mvCbZe6AajnaRLz5XH2ZRvmYXzofxEfLH3x1iN4b41c5wTQasUdALEYhNZGSFVxH7doC3GmMpW5HcQihuhF",
  "key36": "4jYe9HT9tihzuT1yhbnrQsiAyLHEiuWkjksjza3JDirm13B5WfJCyeRC3M5Anwrs7r1Q9z7zC4yCpEdH7PnxwrmB",
  "key37": "pHfJHhNpamDhD1kYnG6TcBpNyws1kge5JdsMVSjuzhVV93ZKGuMDjheNJWxLLJgh2sKtKnge8sDCLDhPJd4FCaS",
  "key38": "4e9c6JvYtjgQKZmzkRGrM3SHrGGuJBbtnhDKRNveYXVfJPUDUMAWHxE4NgJxLi5PZbexmonNNofMsgb98vWxpLd3"
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
