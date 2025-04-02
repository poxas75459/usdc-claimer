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
    "2n7GgTy3Cotgof82oqc9BbzbWgw5SjaGG9EewDtdhAyxESoBZ4EReSBRjPWZCRprWML3s64f8p5PPEQZfFwBitUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yJ4XBW8GcXcUFgFH69EtAWm2j1jYGSg67SKvU6Fh3K9WAXDhvTwkx1ba1yqTgbj7K22dtD5WgaiYASrch48j3e",
  "key1": "RyWDvEJXABXHZYZyjhvbBEUU1SWBwnNTnGfGeGHfHYT31ipBxmyVHo8URQHz8WMSbmMkyBsQhgb1yD3neNAoatb",
  "key2": "2AgnnAfK3ojrgq9aCFEiiYVv4aSKfXiFzvueVqET7L8ZFVywft1G6vszcxNTuuJDFaazdfWwFFKq1KJizdQAJTR",
  "key3": "42wxfLQnQofKFyhVHcQuvZXVgT9WU6kPAEyWwSECJvmH6QarLVXpatqqizbe1W7R4iwi3cXXros65pR7kQtQoKDH",
  "key4": "44oyVNHvrGuCjXJtoqU13hm1DMxZ9jZgyo4hmAyjZ9CBH12Vim5VFEBgP7NsaZZxfT7Cv8THky3SiQpEzq7bDofx",
  "key5": "45eVzP3WhqSXTWSHN1B7WHXnmTNdf4vAyWDxmG6ruzX3YxfoFQEsvLTMh9JVrvarroqj866UQoGTt9qs1K56pXDq",
  "key6": "4s7Jadrzmzf2xF7Y2B6cegba6TKYzFH8AAmDYsMvb26BBL1MnRvEkvTaYF64zy5UYacADf74yzRaH8v8cJ63uvLw",
  "key7": "5cX8Vbc1pKKW94SjEwuPXhaCvJxatNGrX2qhWgXN1hqLFnzcdN7wsEUjoFwvUVj4wbqk78ofPzXzPRcheLPMjrHZ",
  "key8": "3FxiHAdR15B236FzKBdc6TEP1FryDZAokfkdyf5P2wg8kjYo7JKNyazYtawcjeUTuU3x1QfDPKwzXcGBLi5NtSYJ",
  "key9": "2GwhxVtVGoiN3RsYfFtuf9bYs5ncvSiDXaqbYZCMhuyKTUadPHzV7225XgZFsrFamWwUbDr9bQVPwFkBez9n9ZKj",
  "key10": "2H7kBYfZnqLDLDDUHJtSGHvn5MwLnK1cVescuQqUYJh8Rxm5U3qEGmQKPB8ZXpr3K7ykv4guai2oAj87GpvVw4Zf",
  "key11": "4eLwdRQVkzfTh78RtwbfaJdfUQntUNDbaVCaRWJLFfafYa3C5rvwXM17GoYZKWZ7iXTK7Jh7ukXNq3ZoVKU68to2",
  "key12": "31UN8aaTSJ89QSuzVYRkbP4823gz32hhQT6TLP9at434rpU5rWq5y9sY3fcV3UpatZQr9cM5f4GTvbEx7WBj9URm",
  "key13": "4hHccyHsHrjHENBJXY5A5Kp28Xfy6FX7Sui1XBR9Y3Jj3V8rfW3AMaGknK6Hv2UsEvmujZ8GWdPSYAMGeZHA5skc",
  "key14": "56KFYGdkvaSi4X2F2AJXjWdR5ZTXtAP7RrGF5KHKQbaCkUuT5JraQZeBfb8v6K8ZSmkoV8V3EQHyPb46wFDrFSjp",
  "key15": "VpUDdMJw6JRX2BDpLYEwAaMzT1EmRPV3qTKGmhJTVnTQHscpFri2r4qkT12wSXFrXzDJCZ1uhLNiXYX2oBmMHqP",
  "key16": "5S8VEwF1szx8vzo8a8doizwFxvu4g33aAnWUPEnPMB5P7F3bvnzHQtXASFF2S2UBdFeqrkV89yQK92GVpoH4JQmF",
  "key17": "J5DFX22e63mXxrQJbhKP1hCxvVuTYgjg4pTPddVUMDMwV3Kkvg8KbFhARi1WJiRmWqRoyqukv5nuat49QoBBbT2",
  "key18": "2wKNMjGpopziyLaDcYsFsZBFARbVaz7djfnJ63qwM8gzP9hMau261G2GbVCUAmXvc7GUh37YvZeZbh4AjBZw6mvr",
  "key19": "8cQxSFDKDrhnrVH92qvoC62AyhmwZj7FjL9vT4JZzkzm4wEV9epkv8UnyKM1t6wBm9UQBU9gGeQXB3Cko4PrZeY",
  "key20": "3WWLkZWTzbz1upqdXw71faujhCfmG9wWVyBz5pAus4TPUac85nvWAU4GsfatUfuHRsL3YdK4Q6S2iKVth7dCsfL8",
  "key21": "2Ui2QZh2y861TmPXWyKCJQjKDR5uvYGkV9sm3zirrxrA2hy6FjgsE6RDoPfQ4qsbX7dWUNQ7ULWhuynsHuTjMniQ",
  "key22": "m9gRqBHXhwJK971djghmfA7N8pqT9CrzndKQ7ciLtYY1dRHMLxYet4DJd5nJhq7XeXv5cHEtJeGqxkMBDCwcboy",
  "key23": "5WLZWKiFiQ5N2pLcFXZmknr7S9R5Na48uJTM3VTZVA7f2pZrUr9ERhZGfxjQST16mHPhddn7kZCiQh362enYdW6D",
  "key24": "3Ncysjk9PDZZHeHQ9yH66CA4KQbLqAem8Zwfjq49syfEJto35uTmfxQrQ1Zqgdeh7fYyH7Z3eASQckAzrbnZB9U2",
  "key25": "3xemniz9ePKxkdpzscuLTBQeK25Hx6AQ8adiqXQRQa3ASQp6Bar5AEQiEZMJ2ySZNhVoaCtbs4jfUirP4uyG3LJV",
  "key26": "2uUEV9bibozBz44QNioPzpuMmAQHVppxvGY8Yht1228PD2DCLbUbPv2aAq4iPAZmrEv5CL35L1n7kKMwJpGUWUdk",
  "key27": "3ehn6LiSa3n88CVZLshMaRjqJ62y3TjcfGtpPzGbjJyCgw7SmYtYY6sdztT5BDjPTMH6Q7qojWttq82GbCKJETY",
  "key28": "2fnR71MnC5PdYMZrEGJ7LnUjiTKpFPe2YCzTFKhu4FsLYzrqfy8SahEV91GFYVw2MDFYJV7hZKwBdPg88TTRPedc",
  "key29": "6oMs2DkKbf5Fk6Rf9upWJris1ydTsq7KWTuRbcbJdoUZTW3qs6wS1uZgDNyWq6zGS8PQqkoSVsx28Frazfg2f9u",
  "key30": "cYXTrxgBJnTiTAa5BMteZ3BRkq8p3bsaCqmHvU3fgKYejamCiMtaQ9FNhiGnSPuBu2JsP9CcJqRK1rMBfo5MNGn",
  "key31": "RDcSh4HTw1Rc8XeTxgZCd8vQfb91CPtLouB9DLdem4SZXF7keZidLYz74td1TAfm77YohiWu6jWG85vp79xYQgk",
  "key32": "Mqrun6YAL58UbSK3EJpkbyQXyYDFSTJfL7fDm3MY2BwnnWQgEHZY1bQxxH8ZtkgWPtDWPpeFFUb7YPKkXxWE68t",
  "key33": "3fDa53rP7cxaenw6aoVjkAmKxPwiKo9XBwtXyLSpEJ486KHmT1Be5btsEGELQt3hTSVDuJysMkmWziTmYZZvSA1g",
  "key34": "58dBXGn93cF2eS3qF7RyjNDe9crmjrpC5mG5ThuN6enNFhrMiw3H2QQT3e8DLLRWfPcvZ9qY4a25Qns176XdbPBp",
  "key35": "peA8CycGxxf1cNeGcuqbF1J7yAJKLa6e37WYGCG8Ug7okmYMZ66oPNaabYKDTRqfRLgpKsQtwAQgX4X1qqT5qry",
  "key36": "2wa4xkCVTFCw7YViSXfBVYkzbzuGYpUL1hmJ1EbhQknNCzDjC4ihwqKYt5BsCQTaU6zQZ4Z9mPkmTVpERbLiWdY8",
  "key37": "2291J6XDLgpPSWRS2TvWeh9Rio4nYkvLBJd8eFcypJ49j6ehiLXktLbGKU5wydv5RaTZ6wQgtwKESGWxDoD3r678",
  "key38": "4ug8kFD7BSVEULtjNMx7sWSdMwPV2hv94d14Uer582MZ2eCBj67Z9EPCYsoLEHjWLJB8h7pubrDcJz9j6q5JcEoN",
  "key39": "31GbF7zrrH1WBTKNPsGXSgHQSih1JQNx3jBiVWshfkTkZTnSGfCQnLKYnKppfzMELPX4jj7SKtYfZW7N4q528Vyn",
  "key40": "5WhFYjdSKhANtSdHqGRdjomutKJVAdKcwrLe1C8tp8TnUcg3J87TgM8fuj5tQpUdEU85NnYvmAkuEZxTadzB7pDZ",
  "key41": "41qfnY9dJ2N8Y2HjdsxoZVboyvNdaQQzFpEWv7wbQEGfRMU6NMy4yGUtwCETRvCJfqSGazzmdyfGEz7smwXswCvz",
  "key42": "2LwGzpJLZ7nEqpsktMgxp9dztBkbMvddzA3p5mxBKAY1UAFzReptWUgX1zgEWDTqHvDE4wcRJGpBqvfAiNmUFFSf"
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
