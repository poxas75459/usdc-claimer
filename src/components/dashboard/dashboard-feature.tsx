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
    "3ugQvf4mMn4HLPwLPJPE6iJrErQPzCjUHQtncLPrg76EUmSD9b6pYnnTHnb4G3k3Hi5igqPqkDMyPxzrZhEDymQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515pPvziy1zRRv3JqqFtmFoJSLZTWRdWzmzrC38soogLAqcz7hS3CpcCvCwGzeFEhr4VHx7t3RC2P4VVQ7UP3sru",
  "key1": "n7mv9jyPzfcRGv6vTgdXkUChuBFaSsZxFvZYdzi45RJdu5RZYZFdDxCcXvT6uppmwi3YBLQK3A2ywhShqBWrYDS",
  "key2": "4grBJqrV3qsHTEorjrHqCUkPf4kjRdcncXLEw2Jo5aRCHibBZ9ijxtWhGuxBtRvZBNS7AwnVSYy1U6i4ZtysjAGg",
  "key3": "mVbjarroAvrxdd8K25LZmgTXGxzsXRFmiUMEDMH6UTPpj6mtWznt5T725VQ7XEVjhLLUAik1SieeKEX6brJtqGf",
  "key4": "2x8AzGBqPw8Bi1Lua8QZ2jPb6MoUbXMSeAc8Mym8bquqnukePaATWZWCQd9pvufehCcLyz3QWiHsU4S5AAVVfW9u",
  "key5": "2f4xz3b29EGpfmvyujAP7DU4mLzas47ykZ7TfpQrwRhAHcvqTqk1J2JM7FGE7WtgfEpkHXQ94EUNR1xXK4EeEhaC",
  "key6": "5HdNt4JBH9KjyKWyxCax2ziKSykYhRS9hTXrzen8efnYeSKJ4rCwsm9tVjhW7VsnoceG6DGSqE1EAUyWQBUoJmmL",
  "key7": "79xqutnvfqSgLGjJyKM26VA33qeLEec7uxxT8EuPGRLWvq2hzP2JT485PkSie4wGW6KmEMUuyUEuymj5KBmVWUH",
  "key8": "4tR43qyWNB9hbj7FK3p5YuVjatX2m9iiEmmuzGRR7uJxb8x7Mm4rVsFS562fxWFAPk4Xpt7k6PgBPTeiSxr16utL",
  "key9": "3kXoTmjWEYvERWKiepwf2Ae2hLzUMqozFM2frB4ZiiPTVGrLHiFoTSPtKuBfEtDYNrSRK5tA1VGuzz2CDsRD2k7j",
  "key10": "67XV8KzEUztv92x3Wg2WX9gsCU1eQrD3adT1HmcoJhcvD3wEYgQV3hT86zDgLgmXb5yQ6dbmHNkGAo2qAWT2ngss",
  "key11": "5sMDrcqo1Yb47J7LqGCqQx9amsEYLVP6iBziawxupHq9DaQy2RAfpUaF7hEga355ZURwyyWGaBKASvsTSgakw8Ze",
  "key12": "5QFVU8AVpMUFLjLW7oVNQmwcSMuNxhqjCVHAqAqHxdTzuDnycT6RhVvFe7QWN6AAFydu8JhakpPcrUaHCZEC94vc",
  "key13": "4XsQryGjHXMQ1dmyYP6uuSheQ5QsRb5pqD2Nuq2TCKZYWydAaexz62G5AnRDuAi76Mv3UpSuamKU16oTyyLpNtKg",
  "key14": "53GMYqgH9GAefMg3ixAzCZcFNzX7fkjEvH3DM5FWT3GC9LrmPwE7TSVFsYwMFWyeTS7LPgAS73qoxHv2ENgwWJ89",
  "key15": "49YvEzfNyummcs4hcFUoyTBPRkPkHC6xwoUvfypDTeALrgr6rhEZopA3R14XYsiUnHZkgASp1EMhrtQPn3sK3nNk",
  "key16": "3aKSJvvtaF91uh6WrQd98g8cjjxLSp3i51RKB4xrMMaVJcM9WdByRo3oahYVY7ggc9KnbSQdtEVu4N7Fd2RhzWgH",
  "key17": "3XwK5sLc2XQ8pLiod2WYm318ux5MaZ7p7xr9oJ4qsvUFPrhwaxCeqYbDiHMpZzYRxw9mfsxesR8x4vv6hBveTz9L",
  "key18": "5va6NiXykF6btU2kQTZvGvkUhrhj3DCBcJ7VqV3dohN4FnvPhU5bfzfq66wcY1PCE6LHnzPniJrkDujptHQEFkeL",
  "key19": "3V1B8nE1QybHMhZRuB5RG12qDDTZt7Rj915ycPybSZKHvBLLqFNKYYrL18fsHRBb4H1ZqAzApgXvj7Jn9GVs7YEe",
  "key20": "4Wg2DJ39pH2vDDgq6MK6Fhs5WVJaM6bL3xc6ohApwwZ9SaKuNuA4vpxQW3ff5Ygwg7aGtNSn9wu19rYatP9ounKc",
  "key21": "645Qu6sULJ3X3koykfTtwVaAhtzkBC7mWkBR89e6aDtihEvJnTS4X5HwGdeBb5zxKNK6xHhUZerRWhpNEENdGnLu",
  "key22": "5smFxGSx4kVBfWGMvUxhTmBfYGYYikY6khmJzwin12YNSjKPbCKu5VwXaHzTDp8cCwUXE5ZdWLYieu77mpxchyiV",
  "key23": "RN8hugKwsrRrMx5JUzqghCZ2ccfPLCCeHZfYYHAhiyH1rgNZefvd4JE2uiqmjbf1RKXFfrsedVL9yTQTPk6w27j",
  "key24": "3AWSSe3Pry16WMM77w8v85dc59JHWPE9Ec1833wMtr9AgdLtxEFPFnrVUvhtuA1NYYYiY4MjC7fY2YwN9L95VG9Y",
  "key25": "3ujmeokPwwRzHvDytRc19pnJH2pGCnEGq4jLQcUJPsGDcgjEDtjvw3sUYQpmWBQDgtGpr5S4RiSVsPX9S3meVTUx",
  "key26": "5mhEYxxWuSD1R19GWkN3ppQRWD84bgBz1cDxMPi1kKURuZr3epW6e42nBBcTrNGLta5bDimGfxkfmiQ6QhfXoFoC",
  "key27": "3T11k9nKnjspD2U9ogsLhUaQ6DJ2fkHCkUL2eauMTSFCcCerqv8o7D11E8tUpKKZe3PvCjiVw1s5oLySWLpaSm6p",
  "key28": "568gGFaaCTeUZKVZ7fBz3UvwUysRguSYBVVaHYJbcJMyAa7Y37jYUSmDnucQ8G2gy5ikSuALcSPppzWY9ddJuwf4",
  "key29": "3Yq2fmCgeL7AARTJCarq1X2JoyprHVk5DHFZeWqGXjAWr9TT3Nau3db2LdVMHNmmPE4uLqofdMapQgd7uKGNVS5R",
  "key30": "eRC3Lm8RxtFTt4HmjTQ1KiDEsJpvtcTXYQ535n55u8QRn3hbRHsWNKLeLtoYesd9TEkT8FhANbF55eJ61FzGihx",
  "key31": "4utP8R9T84Y9D2awJNLdvhsqtjZSbqwv4qDDk2KC7KRCa5FQGbVrhECQeurm8q8fB7xXTgp3P3NCS1QDidCjiym2"
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
