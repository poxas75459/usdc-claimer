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
    "5isGWDX9Nad2R1G2aRZkMJAyp7KxrjoBGMnWotRfzRMkYpn7aNgyBXPmoYsrR3Mm8fZ83ayrgZRFkAs2axbHCZJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5embwszhQqaTfUU9okD7CEGSB8M1h3VwmUgwj455YYu9FzK2HPFtx3af33ok5u5hGq7cTcowjPT8ezoi6feTUuH3",
  "key1": "3ayTJEuJhyEg2Yb4MHCjpaxvcmKUVfBsA3SC8PaWREtdGfnZVUYfYUmpXXiNF8Kpsj36wdTK33i6kV7p8J1Ky1DF",
  "key2": "kqFvwVAtasa2Yv1Lt4ZB7fErwHJm4C7UbYxBN99NAV9eYockzgbsxjJAz5ysJfev7KfJvyjHxQKafJPS5iv84v4",
  "key3": "2aeq5nUHR4vnpREmk4o7PTL812vXDnZigZShA754sUVuKYYAT1izsGXbr1DRZtADWxUx6r4u3Pse7ThiMdz169eq",
  "key4": "5byWDygmuA5JyxHrLrVCp1Hc4hTuQe9hq6wEP9uV12kaj3BRZWtMEa31wctU2Jt2WWYSfmY8UeL3yVovZtjzzPqu",
  "key5": "54ztStBjiGxt8eK3SGRp8RLEwiSsuQoyZT3KDvquS4UTiU86pNDWCo3DnxG3Y5yAR3eUSj4jWS9jzkzhBrmMgTSG",
  "key6": "2Bk1d7LqLjpB15LHV5DgT8g1U5ZWKYtLfKcEgoJnHCgdtqXRxavHgDwuRpM7T2Z7BraiKLy1qsuyoDLt587HoHSf",
  "key7": "4Jhak61zUPSEfCqwvELfuo66jmsh2TKxH1sAUcDViWxAkBWaaTjdmVAVqkEmrTVof7xSQLdm1y6KBGxhHFf5ywEQ",
  "key8": "ZDdYqDr3SZMRojL3FDpfrdLPjiccZKYLSF9BbA5SZ1eHcERZCbWvivgnG5K2TdteQPBvjmkTPjcHrNZwZndg3oo",
  "key9": "38fEFVZ6E9VkHf1shhYYHVQKBn3eAH4Xbcy8qGPXZBGQXW6dRHx1Ro8VMgvgHo5rG6Y1V4FNFAm6snHj9eEV5YeW",
  "key10": "ttZq1MyYzkNyrtNopDq912mBsBHijbX6UbeiUoCFMakghAi8a3fmntbqAJuJLZY6qh8M39qLg3tzAavvnyvyQ85",
  "key11": "Dnzx7zcAdHgkLnUZyTj7KC6M9YYsaAsTdFHQQYAh8h6UBYSAUXStc3QMoSPpqCoxGtmZ2dAjNaz5M58NySNY2FG",
  "key12": "3EjBH4xywb5qoNGHwYp363AGSYfKmScHYkSyuhgeW2mudXHxxwBBhq3e2owLravCmnCX313FRHzeHgXq7iqXJMZP",
  "key13": "LnL5hgU4wGLiUsMXHmxqy736uR63nhgViXCsD6HPcV1dJuqiJN59T4TnHzR9tmYZUZieVnAzQT6Cn5jVSTnyAG3",
  "key14": "4ePhEmw4ngESBVaNrYkmhJ5qVPPQyCdP9jkgNKBagHytF2Phmsg8CaBQSqiW3kn3R4CzT69KoMxK7gutyk29pyzZ",
  "key15": "5aXjN1QtUzCvx2Uy2pzEdg8QWwDZ1tm3QexwcgEaAVjavMkkytHwMuCWao3jdRpmJLigELmVMbnd2t5WSWkapKv2",
  "key16": "1QKanq5JSaHcgrjBhGRyLQeC2Bs25ScMNf2PdDnAHmTs6Zf2z6gaAkQQEfhgMUj6Lb9mgBs4TFA7eQzYujEubjY",
  "key17": "4e5hFVYZVCuj2QhJn9fdanar9qFAEY2FctN9C9SG1dZFxwcYNKCxrhcgkuX72CwcmXTT4LCn3afPnm7QzfsY7geS",
  "key18": "2aef8CSBi6Q9XEosCxU8ixzt9YwYkhNWKZMBEJoM1rhYrDcrNfwo7EDvZDTyekYXfq7DPuSncFWWdYgmSqb74Mru",
  "key19": "3TLZWSapXCBEBQwj2FVvGZ7PyAWhC3msaM2yBrCjy49nKMK5zR53wNzSCYHFxtgz7SqVy8TZPDVbv85gQ8zLTdQi",
  "key20": "42yrz9FQbXLqwjYJEj677Enh1xQTAVZa1bw6PWZmyyY31J47pDEjw1Z8mAKDuDu9CbPbboGEZJcxEdHz4jeYSVQe",
  "key21": "59ryGDEAETndqSvU1QNSdqfEDt2dKQsJDectDFUvNwKkkTM6DVHeZEyYCRh6euayWr9x5eN8McwhHg33bYC3ApFA",
  "key22": "24g7C2WMokq1KksmFymvpySrtx68TfAXEijtqq4iWJqvP6RCqXiDrxWWYNF3nBW6vEof39TK3hqyBadgMxdgydw1",
  "key23": "5Zu5P3eJuCvEJ96F9or1E7odrjiE6ekkADAJUKQpuVBbxrSV995fpRHjUCxF5Qzi5Epnu6KUjUVAoQB6tkkUtFVw",
  "key24": "apvSzueNg4BvqqR74H1tgy6adnVA8Pf33CjebvRopEQU7TVwcnDvB8vBMB1LcMVqS6K4Rufqdk1GYTGFKZjSBxz",
  "key25": "5vVTSvshDzkFUFBULWFXzjP3fxkPVhW8YESHksxz9N5vtpNCvCF5sxMbcwgc5j1jRaXG6deouBoPWugngtJ5uhex"
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
