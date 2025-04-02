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
    "3JUwGEANetRY6HHs7Uvni57PWJjVfwXaLdMhHXHBeKKjEH7XGJHsoNMYde1AeZzgbCmfwBDcZ9evviEiU9qBbaDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eMVXsJgji68yCi4inAqkpQVrQmGPJx9BtESZ25xQMMHiXNhLFryrHxkBJCVCkHPJssuyecDZRpCFc4bu49QH9TL",
  "key1": "2oWE8fvfbNU42iK1MBogVjszAorDMEJcgp8qymjhcrto8PAKxrvsbu3FMCnPQDVMRqciGB8oQHJZdTdu1XH1XXc9",
  "key2": "2gnoLT7CoeJ772e9wJ6iW2qaSYi3t2sG5UVXfbmQKAnxE84B9GAfY7tosdtEEGWuzmaTw36xJvvRy36j49XAQBJ9",
  "key3": "5UZgdhTRtTFu3J6so6Ew8GcX3Mq9PKjwTJtJv8beyz2TXfWkJoozAEndkbjKq7s2JEDnD7HBawYsG5boVkYGiGMZ",
  "key4": "4P6fJaM8wJhtGQX56KUEiTpGidmCFLHAmcm3CvMGxaqPigda8VKyxZnybZpzFaEKHJnoxZhjfXkYmBZyAADB3bzF",
  "key5": "phRahhpZSK8LVLwoTp1ojwqJyEThszcRLGCnSgZdfnaMAwj7MGPAb3MNCeSa77eeheP9rcEH9AN53shSN9Vj45i",
  "key6": "3HTfHZYHdJRK7hcPJdwATPq8SbKiusQCTM6zPYAR7jkeayXqKjGNHiC5AcHy5QKqg9R5FZbte8ytj74RVAYuj4tk",
  "key7": "mQP3K1waEA1hS8XZrL9hDTVqHNk5xG2KcmzQ9BFFJ4bAARmVoNFvDHf4zu5RJVP1Hx32pqstodfKxxY6dtytagG",
  "key8": "4cku2cbW1ndpivSSJaaCsQ9NPvsF6rvp8gUMunJ9KBAwWNTknViHENv7PemyTmEbaJLRqhRRAK5GeJ5ubuJnk5HP",
  "key9": "2uRhp6zyU9E9sGvsZNN1q2LvmN8dAsGneGSxC1sVTNXqBWTJWGCvoeLHXiXVTYBecAJuVNm7keSvYj52sewFPcS3",
  "key10": "4tWAShuMci14xe7JWkz94sxDXyMmxPf7JGekNqg4bwvFC1QfHwMhWho9WyyUmCy4WmZ8d5TvbfGUJogbyJHGxomG",
  "key11": "2UBhfcDUecjfi6QR46T9xjSxDUMtSp18yr9oQKK9JvZK7d5oX8P2iXH1ZZUEqsyFNqykDSe3m9dnDhYwezrHxEqi",
  "key12": "N2Z7dQjLvwfjUk4j9xewsVivtRnokErwCTEZ8Kmq1VUvM42fXYaCogMRvVEUfJ1S4piim3XWi56cLXM75XeKHaF",
  "key13": "24aZuSrmbpvqjiAyn97Rxxzrb4kgS3XgTEzB1Md2X56tebpoPbUJNy1HcQxAd3jrUpb9VjmyogvRGhRoLugr1Nh3",
  "key14": "4MH8xtLyCeRfh9YqNyAWu9G26W9Kiz2rePtsiqjM9FmSb9gAEpHczZA3A7jUb8foxLcjkmsRRSbR8kdn4pUMu1hT",
  "key15": "nojeui534QdLZ29oyCohwwJpkGvkzroiVnXL5xGWb53Yjn1G6uAN7Xk5wF1iXbpAscj6QCYE44LXvZJJPhuYRB1",
  "key16": "5cf3QnpBvJL8LzvDqdQP8Zc6AdhR3nPXeHZbSProgPwV4RoRAoWUhbMRZqdcWTxcHJ8imoxnLbn1ZHSuZ2GqWPxV",
  "key17": "32ptUkJzCVsdjsR1VuVz6QKa5LqzabiknCThygLXXbwMZMGQf5vjpJvKA5PiZhtCFpyrMTju7do3N1NyxUj3Qr9L",
  "key18": "33omJMqAGafEGrBSsoTCAcj9vvhoQEa6hFbZKdJa1tTmcPrHnkZYtAS1hApt5b696QRqBdWF2naNKdS8mYVkx2pS",
  "key19": "2LKiPySPAfXQpq1Ar687YVyet44cKw7wT38XV6XaJqjVQK3XBCi7FKpnjiRtLZweDQiZwUCfjeK8GkhpKuv7psHt",
  "key20": "eHN5haJ8phYHba1ViPQcpGwvF2Q1uc7zhWhpQnBScF4K9ns5gAdfHDmrsJBn8ENeX5pxMNGNyzz65t2nw9tzat5",
  "key21": "62bd2pzmm3sr9bPzqZuzWTJVzqqv6yaisTc81s4SgNpTsxP4M8w9TsTunJqdB9WD78qTxz31GivxigjazLeP8U6f",
  "key22": "5meLCrsNSB21sSjboHCt7Q9zSXHC6qtufViA5Twfx9ZU15SFb1UWm8Nce9Sptoo74XhLEB37HWW8UYtLQDBPxW1Y",
  "key23": "gTzC1S3SEiaDk4PchTxiMsRTD2zpaDivAcp71azdZ1WHDWhtGiXJrnkPqJxpmh1HWhSkGRRH4m59WU7CcPwZSUy",
  "key24": "3kpa5TFWhGhs9DzZXoQ8cYeDuXBFeBad1R6M7gQPy7RSkhHt6A9Bdi4vYUQdvnJuJ2mpRz7TpupCmE7G2zg5qtzj",
  "key25": "3HUC3ZMB7mYcaCAuQBBZsyPQgviKfdJ6a9AKuSAssoJXAZd7oFz7FB1Lc5eWu3WT1B7CerWzDSsug3CWgdCU3WvR",
  "key26": "2xnGNZJZNTXN1SbmTFQtvHaHkPPZjEg3EPu9S1pUgBsabRcYCnPkHTrAoZpYJMso9CR6sNt6WD2v2dWYQGyzRSvn",
  "key27": "kHJfProL5pM8swNjtmuNDaJVuR56DgGYce5ZRayrJoQyKHBEFhA2G4rjCitDmQQVcVTuV7euWv4i4SaenqY8cVY",
  "key28": "3zEAJsxfBvW9EVeYUCSB5Gm5pSyGthvPCXS8gyfxhtN3oHNuTHi47x9EiQbVik55dYtRrneb9nXuTKcLVmLDCiHZ",
  "key29": "4Ug4A12Dmdqcpw2eFLApcYdqYEqFvUKaxKcCTdtHMd972DGTYA83W9vcTDayo8daTZHEr26aUKZFvrwMT124A4YH",
  "key30": "4xyNJabpmdCX4a4wF5UhpbDeVGNf7xyVQj8BY72kGjy4xDJPuF5r6f5gymQXQWUm18pBXT7NbD3WwiNZSdfAdBhH",
  "key31": "2PFTJYcKhWShFxwR2Ct5a9CRZ2PygsMDYPdBAissHJhrSyLWq2rEdG16mj6GdixBvovNMUik1bZen66RWk3NK5Hh",
  "key32": "Vu82wBuSseCNARrBt4jF4sQQEeqEGq6Tn9jaQTnHEjVEpE2GmsJCACKZT7iLEvyF8zA5sZTvSiw8qnS3Tw8b4x6",
  "key33": "2diAyLyCfKgCnhpBwmMYqV8Robjmc7QncpY1if9EvDg9JttTycBow4K7BSYpeXhrZJZGerK32XiTojkZU3hMZV2B",
  "key34": "3E4QTP9akcffALgFw6N6Swh7QbGA6ZB7YY4KGY71s2nVQyfGFufMdgLHA7jLL8nMqyqwAjfoPBuTfhMLD1SZmhBe",
  "key35": "5ZTbhMdi6XnYtormqTXQ9c7jaPU7rGVTbRtTJEyFiZ5NSNfQEAaqjZaSwTpvNNi81XLf96tBfLnGC6U4T2D6tDF6",
  "key36": "4dgYPD9QSz7r3NA8fJ81dokWWfkHsUTdfpHDvgfEDsadHrZnXkug5KhoKyD83nZrPWuTJB9hQsP5kzBxPTmLbFtp",
  "key37": "5Wioyp538MN5y7Bps71isMB65fEwjgL3u2Tr3pd5ENgXyZaMXLK8XCk9bVbvzc8anUW1QGeuA4Tki6dFjiMJpuRC",
  "key38": "3X92BVQFJ5AgJuWWPTUpWRBduqv2FNbMfyxbwpx7r8WHBketsoi46FacyUqQAKocQbg5uNCq7hWFPnuD7z3C1V1n"
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
