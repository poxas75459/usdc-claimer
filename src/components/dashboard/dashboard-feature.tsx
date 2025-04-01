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
    "58nAaN7rhnRJCo8inqQYyii1g5cx6BsyP45CchxCPA3f7qb4S7oAVK58X6WmFTUvbEhPL8Lze4XRcJMLizTndF8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqyEH14ndZUAAC8obiqZxYfgGiAXU5vWit67mMcrv7KGDFbZjztZxCkNc4HerodyFUf69HQyvGcLYMYbwCRNpaX",
  "key1": "29DW15QAydFGTfM7JdQXbRFkyuwLktidQSwHyeqBG8uQNQfwrhknqZaZaXRm3At6rrQVXZP1ZLTqwKRM16JkQCnM",
  "key2": "3hf1PvWb8X7fvgwc8UVKxGgc3TDnfoVagCNEwFwoQtLvvHq7MbcqLJisESfHVybgxMN6VL4YF571Bua9GfrCfwAr",
  "key3": "7u4BjEGAJu8EbEVbVJStUpmDsDPvpe9WtemzvXBxNg7RjqDdPwTYddQhiDTPQrnrm9qErt3KsbpjZ99r8W6CqtT",
  "key4": "gjXEoFgUE14BDrnM6WR6D7WxHjfjwcwCkGCd3LF6SXVEnqznsJ9DUPdBxp5kYTf5inHitwKC5C3EqzAYfhfFZGV",
  "key5": "2YF19zWcw4x35gePtvP7Eh1B2k6zXu71FZ7Q96pNR7Z5nKvPTvCiU5M8JZoeyV3cq8bnJHw3WDzbYrd17B7yZrDu",
  "key6": "kUgSmR6QgLmq9tDeWYGeQrjyxQo6e7fud4GWa1AenFHKdhKM5wYPe98wUU3ZBe11hLjt3vkmFaBZJjh7UJgVmcH",
  "key7": "53nW1UfEdMYjH4xi9Lt23c6mu96SrbUCrTSqMWazR1Ck1DXC8WDEMhjWbuzTvYq8b73aijWdPQKNRetVJD31Ngy8",
  "key8": "4b5nK6qif3nvvgas9Q5vxEzXtKgBxhptqEyxh3orxcA2HnFq4su5WZfnKpuPh7fPGg6aUnoD3LfcMDo24SATcNL7",
  "key9": "5yFWhAwSUsWqvhZZ4po9BbiEXZZnjYTqnmMbHsQUy4d8WwEBXBVTVHDtT4XajG1LQ7dMdBP93NUhJHtphi217UNA",
  "key10": "3vCd33zCb1An3RSUPRuDctb4i2vjbfyu2gP9dfgEYTMru1ANcTjbKCvtHwAcSRqsKCoESRNWJ7Z8TQAfz5wdKNSm",
  "key11": "4X8hRDQ4P7DWCxyQRxcpTum3W2Kj3N3jtq7DZ5RqHxsCgvsgAxDsboHoeGp8dfg4T3Yzwt5JeLFHuioM4niYxBRK",
  "key12": "WzNikkWZp7Q67UgWUufbgNEKGv7u6C1dCKha1HWgFYpbQPovpfwjtioduHSMNBa2tcXJTigvhRtzQLFfmMWJfpg",
  "key13": "KK7PwjUD5NtUWx5Jj3kVSDVrX11qsdFArUZde2yzDc7wccgDCkwckDqjnUgR72FagMdBWhKpZBfkMjFNdyriPkY",
  "key14": "LjHStChty2XoQ2EShjy7TKE52Ga4NUinSfTLseL4uMqtCaKNafx3CQEiQyZndMorMNVuxqsuLifSYLvSKfUWA4E",
  "key15": "431Ah1Tq1MMSU4mv13SEqDavSETh52a8reLGdeHc4bSLdfnBBJfNUwmLBNsdgDB13v5aq21EhjA7Ru3UvnR3qiUd",
  "key16": "5kXG6TMNe8io2niwmqDzmQyHBzEShcQgzakfQUe4EXtxttqqWduxvQDeeBWxsJLd16VrVosrU2EjRATmXcLHWFE9",
  "key17": "3CqXmmWiQR2Yjuno14b3fByntqC4b8G1F4CAFAxe3h3twuhjSXVpNMUUewx5EyUo2jF2AMnGD563jaJLuKmqeYw9",
  "key18": "2da2AenHwCsZVEiKJVH1Kp7XPmZhrycvQRMdFr5vd82DuNsNMsLjboqQLxLWHpLSFkC2V7KhKbyrtJVQRa5zPBfk",
  "key19": "47JoFohSc7xYEMEoTHmosfCPkj89HSioGVzvvyUMAMbcfv2CK7dqZpPKWHkin6G48HJZqdzmmuBRMQKT9UeueyDe",
  "key20": "2FamjGYd1ikWhhGWumsc6mhwPLjY2TXbzVvSxBWsCBxpYXzECXnTBoYZtBEGdA3u2B4zV5aCSSa9REAkZ6VuQcB6",
  "key21": "3p8qDZ6aEG14fqkijFxL4K22tCgjQe84NpwPCU8YXh6xNhkc5ZgXSbPtbhATNJiNc8aXRf8oy7FHhSHnBPMKpeh5",
  "key22": "28V6wmhFERmMpbfBwZmAKphfpJzoKf9F5NPK5s1CYCwPuM4j53L3oWsFQNbxWS422wSaTYvQ5uiJMq7FUtv4YsLS",
  "key23": "5qyVM7kH3LiuFdoMJXg9CebQXNDf3BLczhjwpzMoj3MPQZ4xZvn6ubsc5gspJJDXRAZvfr78B4RQD6dpMqnuN5FJ",
  "key24": "4nXFHap99NKxHJ1ZabUbeBo2RS1Fryu4nZKF9vE9s7qEREPC8WTrg4R91cztSY3bQapH58L6vyjvPLfcTHDmJQvw",
  "key25": "2yzEAj2aYfCYPqXdGp5MmkwRuNg3uTJ39vCGRE6W17kARyJZp77YiZxf3ins7Bd2JL4KcBZfqzGp3wo6J8u5qoww",
  "key26": "3CeN1akfPbrQULEe1QZPcWKvfaz7eSNRLDLL8FHScxm3UMTzmamfKgeuHasVCFMTsZAM7zjwtwoJhZVt5jaaGxMN",
  "key27": "4x6cDXfCBSCP42cj492MSWgqnghy5GArBFBsd1jGGNwTYjBUXMRLfphseQse55B16wsh3GkUVytnahRtuFMLcVUw",
  "key28": "pR1HCdbB8wTLaaFKdwbWTgtUk9M2NN4aYXuQU9zwnLHdKx9C1STZ3TSDnnc6smWrM3Pf2tnsjdrh7rLmr3aspiv",
  "key29": "3nAc1JnUjsbcXzZq874vWpit7Ar4jE5xkt5x3YiXxSep93tvMeGQroNg89ZeTJ5ZPpoo9Tbrar4mPAJTwcrKFZ7Z",
  "key30": "3fBzAnv2yi2df4VdGcymq43pTGmm8WxoK2w8LaijjLje8LBpynt7gossm6Hs55rNrVEWy3vkfZ9yxjH32XkefPFW",
  "key31": "5kBPccABADh94hrumAAAXP8PkAyexSPRvr3E6S9JZxM4pQfHfE91UvsWo3gwYDtMNAREbG7jPq5N6MfQiK7qL1kZ",
  "key32": "5kHVgkJUqxk72p58aseXToQXHQ63Cwep3SxsZZfV6JWKhiNtyU49yFxPUZEUiDsgeQ8VxWmLLXdUQY82CHvA5eor",
  "key33": "3Qrzr2nKU9jRsB26M5iTMafefKtrMYB55TyYvXsnGRfTAr8HJ5NrJC2bVa7CKUWprAKwp5V73hCtW5JSgYgtYaRh",
  "key34": "3RDEz3jrTQwvQJHeA2qg4RKCbVXXK53D98nWbidDveWj3ojoxphLfNte96QXB1Z7Rqrt2jvnwNsK8Xzqa2oezonH"
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
