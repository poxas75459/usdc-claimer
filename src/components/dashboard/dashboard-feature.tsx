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
    "4GS2Z4mdrs5VgYrN6SxUVous1H2ehkqvVhQeW9VVMF5jNo4LV7gAw8koREm8WCmqBz7WPxeinPSfXcb1LmuQmVyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VdtTKCfQa5fnxNukZB3DbzEnii6JZPDANRjfUJtxVv3vP3wDrjTmnwXQYWJ4yqxNn9M7nBGyLX92ERYfyg3WQwj",
  "key1": "61AqxGJ4Z2HHihbq3gZ97euWuWnMWrSzeN22g3aZ7yfwayb7e8UMUhS9kJTQHihGY2KL1cCrktXymyD6DezwKwea",
  "key2": "67qwDZenY7pFcHNB8ekN5jFZKH6AdJLe1eK2uUaPcQJ2Z95Ci3eESFxmgPSmuXgE4b3AucdGgMMM1o5WzWBTZ2wo",
  "key3": "FPfNkeBRuwqtN6QjTRjpVJ8wz6TQ1MJQPtrD8HLQDuT6VzSWnVib3c9d88H45BgzhG7t8FJfeGNgeJixLo3UYVu",
  "key4": "393LAc9rhKGp89TmgwXTKxaX4mUmzmNe74NVzLcGot13U2vxWyQvUoQ6DWwLyFZHr7txh5mGLVuRSYrPq5qD7nT5",
  "key5": "4x8SqbnsRrSkSgn72hytHErvhb364AEiUcTyvNDKKVKg93wkuzg74ym2VqKBSc9QcpyCbhev7PGBUSTqzZdRUsqt",
  "key6": "2gVBd4j6iQZUe1U9gdiTbGgNJpYD61vXw73a4wkoNt5T5dd9PRDox6DfR3iVEAtx6VY6KRreqg4VAB5NKtPiexeG",
  "key7": "LQFQhGdb7sBBnyBFvq5f953XTrkwo6qZmMk9MW3ic4cVxY8yuZxvG9UQATQbJaJsTkkocJfSHy4ktEHbeJ69QBt",
  "key8": "3C3pBjC2VmB5A7P2ej6XvgdGmSVeWVVLPg31yXdPbDh59nzFJ3z7VZztgaYjJUfknVXRz7fTtH7TvgaaFgofot4T",
  "key9": "3pGwjoaMch1vsTrQ3ddXcn39HA24DykqDfddbRdKvJmyMZDw6vMXLsxkSkfbgQ4iRmcwByWXHwuVdWGEMZLr4Kpx",
  "key10": "2AsASKeYr7uSMv1RLcKTVazm7r5gqP13LFzPnpETFqx4k8fiAoxu64j4zaCCqrRZc4DcEDLsKEz3vdRvjp7GEAFW",
  "key11": "4g7WWKVJuBoGrVC9CNDsKJEz2vPB2668FLMu6ssVTUJMfG8WQCCZ7gQs8F1nKpsMHEFa2XmGjeifG1dPt2HwfKT2",
  "key12": "BjJM6mPFVjSEXg6YVaE6mj7wTuCGWnBjxoS7yTfUUnGtifVdHeZtfZetTgN2wSqtmkWEXMzZxBrvsPAMyZEFp5T",
  "key13": "661YhvJQYVQKvSR38Em2LdXnje8qs49CVV2JXyrSzzJUWiNsQTWKdes8Bya2grfGCNqtToJ1HjoXiEh9NSKDHK38",
  "key14": "3cNWZfhQUQPUoi8hZU9yfFfmAdwRBCDuuEGeFYxdukR57ijseCBHJs7Xtyj1t8NfhubobkAN129onKfExxWqMpG",
  "key15": "4pRQKowEMTHdkE4Nmst9LFbFrGi4NmGehn73n8DrVG2pmGheSJTGM8fUhdDWUFphuLgzweDNwz4qesgsY88AqwHG",
  "key16": "4zHWryuyQXeZnXZcyHtoiwfgPpZ2yEDxADMm2qcRN5NqcUL5Jd2tM5iDtUbR35VkSf3Md8ctJV8ZmK9shxrGaNjd",
  "key17": "5g67qxk7DSm5NfFMsfGbcqmDCXJGt9Ski748ToYp5xm8AdFF8yMY1tGawoLMaJr7MuiiYQ9u6NfVBioBUq9RAz2r",
  "key18": "3CfPASFmCW8fepGCpqpFY1SavfhTo7yM77wnbkZ1utwNMrmzC1L1sHLQi7nwEJYH5o9xesRzc5oRAAdByNHmJ3Wb",
  "key19": "27yLvSUn1Ti1BHVsZnWErvfNoreHUNXWjeHKBhYy5eRFnGRJeWkYMibmwhP2gqybsJDqgh9sCxLaSu3obS9FWj4i",
  "key20": "3CZr1GhmCfErq7FUDntGQ4XyphgEPnvgC5xaRuhp2rcMftK5ahmBjNzJdPWNLVZ6Z76HmGMwFmZ596GyK87L63BC",
  "key21": "47baiTUo9u71rZutbnh5QfUXXDi1TEH9q4Gtergq7JGVbRyfctoAidTQQERmoiGuZQLeKAqJFzBo9VmF9BAFBGom",
  "key22": "kLBwyYL6cnn9CyU5QuoEDVZPey752HCyEnAeaVAoVZTroJ5pdnAGgLX7DGW9BsQS88nNGNVLL6BzGJP1eLmJ7Hj",
  "key23": "4pYPjN8ibwYHBB6QZY8JMzZZ7c1SkWkf5RtcqQAo4zbRfhgyZc2kAHp5hkXE1jQJU2Xk8ji1za9qbVzBRFJ77BHD",
  "key24": "26PCTGtQb1bzNZ2BJy3oVD44caKGAUqS89G82pBHm1LjCh7joShj6fLubsvdc9VT6rzxh6vXu9HrK4LD8NU3Pkzh",
  "key25": "5XK3s7NF5dR6CTNXdb39MJcd4tCviEH1yDiLwNAcjPtHWGtDadS1xoQrXsPScPwwdc6apW6jL4jG33b2Hed8mW6P",
  "key26": "5XqV9419mg2sSRZDbNebUAKfNYe86o5mWoH6FWKPqYNnEnYPGK4dcPzwBhhiZJiuWxNL2BvEmWemt4a6JZgiSBAi",
  "key27": "3nFLq96UaakAyNvqtFFzVCNSaquXv3LH2CAHyYpxGAB3ZZtMN2NuBoNdqeq65o3dwuuNn6F5pbhZSppPLXES3j2Z",
  "key28": "5x5KjGZjnehDncnEUHpK39k1dV4wtXzdXuMpVc2RLQpSFiGpmXoXq2q8V4ovxxr5x9VirvHgA7bTVHX6BSJvV4xo",
  "key29": "5qhBwLHt2Ly2b5jWCugGPXJVWHs2g15jLu4ThSfsz9zzAZUzWGtkDPFBU38qXqSYShXUz1xXd6XRDHT5sGHbpXu7",
  "key30": "35zGMHykQvq575oU98jeFKdFAFFsq5shyThybcnGu7e2XxXNAjBJbVV1QnxNVNzFqGDrj6MDJe1f6MFD5ykJtfj",
  "key31": "dFURehDwAq6GiUKRmcvmyCQW6TfTxG323YFtQcRHZb9aBLJ42aY1Uo6kMFHLq8MSrULMeqoDNApmaLaj19fck2y",
  "key32": "3ytQ1ZaRBdqsgHWfKZyzRiXq6ktXdgqrcTAmx1xDMykSfMpKoQhD1fpJnHgpFjV2VMMwQWEZbfTjHxq5jv2kx2mt",
  "key33": "Mgvc2DjV68vcPTAYg4t7xLn1s8kXnwbg5NEqf4PFFfUT7qnnY6tjUETYpjkVBYY7eqYQR9aY3frPbswtFsCEmaV",
  "key34": "3bjCM3VeP2QETXsY1PBsmSnhT47SAomS49jAAT2ZDWLZwwbbPEqHzydzWdNio9zcu7HiR3zxfxXiXBLhfY4FUHEF",
  "key35": "4BkBF4SzfgQ5jNhTKh2hZDCLAthGfCAEzNSJt1tWwU3bu4LfQu85enParkMdSA6R83LFajsE5SuxdDE9vXYv63P4",
  "key36": "2LeDcdxLqXm6GSzmU7s3SgXvR1iYaXJdt7HPJVoYkH7hwkPXzbRx92WKzWeVZyQEZ96DziMdvVQLBtmRs2QSSoUg",
  "key37": "4cYJnb1D1A8vupBJ1DQaC9hup4VGtPPwbskeby1bionZeRbVK6x8aN8pUYRcDsczaLktSRZytLWeU9xP1xNvzSAx",
  "key38": "DCNHAEGjtfre3ADhjZno1srnMzdbSobRZJdrCgbQZAQzTv4T11hUHKAXbqtdkz6pQo1xSZf9wGtP2E3nZwvZi9A",
  "key39": "2VHQrbr7Vx5UyGKn1NML5oEkoiR7zBVZ7tdmiYw8mV3R64auRS3eC7tEdzScdTPw5CEPQNfuyegMFsCS3sCQZLzu",
  "key40": "4kLUTTg3YKjEmedNwHFEuPybc3M7oLNximqPpUQAbirKKLco1DDLb6yAtBoWW3Sk88jsyuFXWnbsAhWP72o62Mra",
  "key41": "2cW5vpVFYj1QqivJeuMgR6rJKCrnncuobxfgW9HpaJ9Wwd4NQfMv4vYyNrcmKcq7UjJx99F3i2ijt9UbBoF52nMN",
  "key42": "3tNpeGdQXMAamPLp5ga3DQiqo8g7upaz1n3WibrAKqznQQaDVFh82htYcs4jFG9kJGJDGpVQbZJsV1fbgwsBtK9n",
  "key43": "2hP7NMeCGrTphR6JMziXGpC9gc2aX4JrSHphoWpKvdLsMGPN25PAv7oK1iDSntTwfuyTfqiYjR4Zqo6kUC5miJ56",
  "key44": "42RAmg1M2i6SvCkisMUnw2ct4wykyss5QuDs6FucVCL69vuhi1ANDhirWiY5cbjjqa8YhsyV9BVjvh7eBGVw6jrA",
  "key45": "qCHAMxSwdjHAr628XnLuNWAH5xWKP3bcqcSdm6brKJHuhqyffhCeThrBBuHV95hBpDBm451VFsBvJ76izjFu2HN",
  "key46": "4BqKgwngcb28bHVYyEpPDmUh7EAFZnCJC4gQhvCjhzZBnCP7BY97naxPL1gWsnPRN7SzFY4YGfqEHFN3SZdqxXxj",
  "key47": "39h7jQZP8VxQKhhTpnuQL2UjGKi6XEWZKT4fnpziYMNETGA1RjzcZV54zvvE53Eems69vgmncsyjcZAaMwMmZi5c"
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
