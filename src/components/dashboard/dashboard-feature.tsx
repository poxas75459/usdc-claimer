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
    "4CCuHEcirqtEJozK9aSv8azBtQRxkQEGiLRHSsvSgcMrH8FLivMGY57CUkAz8LWwgNKKYGuWEJh4fMfhsfehRtVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ta9vTBnxmx35GJZnMucZU3foVi7NJtj1G61kKhkdNg32FSZvxfgo85uZaCwKTpLPiSc7eTkHZdpaq8i97cjW5sx",
  "key1": "jpsVL5ce69dYSZvEeAsp8KYVujWeq1QgUNDMEMx8VNeH4sUKCCqDKtMJHvBy6KFfbgKK3nCLXikmVYxjWh9gy8L",
  "key2": "3MMX1yWAnrNUoAFe8N2Eq729aeyXeessCwnTL8sMAhtXY4JPRZJSAcyiDagCM4DCLKUjYKWSdk8HNSKMheqVarKq",
  "key3": "icWzUtfmpZWJttfvCTmH7PhJ95n6FQZ9S1r7Boz5sm4kPU4zu2jMij9F5QS2VdWhdUDVwN7RvbvCRWGt6ib2r71",
  "key4": "2HgYoFkbYxDPK9Dcf2Jcg38uSh3Af9zLGMjC1eYcB8hdr13T4YPusdaH19u8aUjT4h6mbGkCyVBomm2TpaYRko7Y",
  "key5": "jkdheqLBS6ysP35v7kNupaQZyMSZ9VAinnKKnbYce9gXLVjYexEiuivaWniMUArMnSkpTy9wiUQianKYTSFFG8S",
  "key6": "Vu9hWdptic7phzWdzcMQgY8wmCKxh4W589SteR4BtWa4PTtUbD9qKxbk2uWBrMd6g6RQRBejrLStLVAn2irnLsu",
  "key7": "3e5JMi2xK75heYkwTPseq1i2ceTZBV5RbJfPA7W39PnwmmveYJdFVMxADZVgETMWX8MYxFTXsNE83wF33oW3KGwz",
  "key8": "4JPMVsCcm1vQAs5gkAZbf6hhUGR9GojA6MBkeqq2fGnTucUkfD4s69kg7RjzmGKkW8H1TtZctzdccWcF994gZTas",
  "key9": "35rEM3EKntkg6fKAk3Jd47ZU71rmLaYMR7tPjWnnAedo7SvPs1r9eo6bLozHoJDnnLXw32nNLSujuTCaHyMJF7LU",
  "key10": "2oiJNw67vX38QaEoWFRgJMFMgtBGjM6zd3yb5cY61ucN93FNjj8TaWD73mThJM6HsS2FvGSfGmXHoYEMYfStQbEa",
  "key11": "5Ybny1Q9BLVBpGbXKvkeQDY6J72FwRdVJAGDqafG2BibaJBjx1DxFBsgtLHeNtjes42R6P39FYVv6XfJxR2dYwtv",
  "key12": "439txupZuWJq8Ljg7KY1Q7zzmMuyXaU75kaiYTUNBVdxpB8Mi3Nz2ubwVQRbum8216BtSihL8EaXLx181AeXTNa3",
  "key13": "8erYYFPVd8LYdFJE1WeWwshY4u4uhADhWt1XWoBNoRAGcg7aT8b2PqR82pKLSibjifnTXfSxhWm5wFq2eZZ9xYh",
  "key14": "4RmyJ2gaA35zCsZQKv8EKYaTh5SDno3dJz4RLoV2dzg8JxSHqrCqagodYoimaoRK8G6GUziHRJLDGJqHqQqwVz28",
  "key15": "4VT6rDr6mtyBy1NEyrzjVaZaqHhQANpuyZ5T7Jmkx7YSaf35vtuoyFTcqYNuY2SeCyJmhbj2Pkqj134x9ruYwGy7",
  "key16": "26YCuQJoDccFxrdqUtmryY2ioNDThC72KXBBkAj3Trt3ujaVSJFTRq5UVrXZmsp8PMtMeu87BMusjSRHDFQ7gzc4",
  "key17": "5X9Zhauf5tXN8fJJoiWwuzjUr9i3hv6tuNGyCy3aqqmmkj5V2G9bbUZnswYRw7rKnBrcRjszLDUbegfiPuCGJ6ug",
  "key18": "3dc5okhD9K82DYWDmTDb65HYY31YJvoMurhoMS3BHk9mT4ZCJU3zStY5mChkMYGnfzTGwa3AobZkFJRvFNk5kkuG",
  "key19": "s2VKggp5Sfu66sdV4r5pw69Xomjcfv6XSSVKwtaDTJi77HduQmewxgi6ayRVM2g2TkkxHsYXgZoiGRZorhq1LhV",
  "key20": "31hunCfhSQzFsHJUeAtLPoTcQuUjvigMLpM1pSweySZiLeJrfztRbvFxx36MBRW5ncanDy1gqfFpBYS55hL4K5Hs",
  "key21": "442jhPJ6jTsNcecn7S5szTcpbf19Y6B3SQtB7JeGetaLhPZrZpc4WnSyUjEkMQccJdPC3R32Ag3sDAfKzx9JS3Dp",
  "key22": "54mPxsvDXTSzfp7QCnrLBzk1Yo9ibedDzWMnryWdEJe3356Vj7NBpQyNjd6Ri6iQa72n8Teu7VWJpjs1pqzSNZDe",
  "key23": "S3v5fwF4xEuVH28eKB8Xv3Kvbp7ku3qXk7ua9n5AiYU8VHNMXMECW439p1WMq9Ww25XaFmrVLNRiwWtc49941Md",
  "key24": "57o12WynBWx4effXTrNYytati3aXRrdrqCWJnDea7k4ajMNZe4djgg43LqHz63375G78c5qHr3cF9JHnk7eCYLuc",
  "key25": "2Aw1tiZWKgCkj2JFfKMwj5HxAUBdxaBxTvjZPCwPfHhcwb4Jj82LFwjVRxxK5xhLXyzyiyRsTncdia1RA6XQqzDB",
  "key26": "yJ9GprTZyVPDJYE5vasuexzgdXKraRGY497qbkFseWMAAxmu8xcpvmCB8TgNtoqYco1caSTDdpKq15JvdRdJJCG",
  "key27": "2yh9W3rJ5bhNxExmdxzEL8u3cxSUWarxpszCRyXYvr6gKJzKHsoFT6Z6gUyaNecpSLGeogQRoSEU8xwQSG8qm6nj",
  "key28": "2CdFoVUzKWjvq9J2GQ3EHMMPnb3KBso256um9XGbrVwg4FHifvnXmooUomh6udLBV7bKz5WEYVWy4BJVwYhw1BWx",
  "key29": "Y6qk4wYssoAqrbrRDuFwQjSTFFsHuRFJys56TnV5A1pFSkFcMitE9Xw8JzEJb5yaVrGn53eihWbDeF2ZrsXeMDz",
  "key30": "4aQrQgqAinmZjuVL71K3ZZbVmpQh3drL1ko3LDNQqsMayoodt7P9JNuEfsM7VQMCKLnLZfVWYnGKbD4u2Uyudbrt"
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
