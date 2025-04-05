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
    "5FYJwZQKaf2sDd4VnWyVfVXds36gBiiLVKbG4DUxoueyGpaFFZQjAWZJr18VxcaJDFjAUWzm4WBREuk4YZHwKCwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyRnteGAEzDnLkehnJ8AJseh173LfSBnAcbgmXCfFftWdyF76ZyrMU9XvKvCXYACSJaVCW75a5AoRkjsGZL2yAM",
  "key1": "kANq8CQLFnqjxcNByi9Zp7nVgNvTDo5KaZXoDCAuvTcLmwJT1obbiUkNqE79V4i5EYizo3nfq4fiRWUQEBJDp8r",
  "key2": "8mZ5HK5ZCadaQnvzHWNfCRE7kbRrwQKTpNVeiNDA6aLSfXCsCJE63avbwAas8DjyaKgfYxDm7Fn6S2eeHYosrAj",
  "key3": "2N5ScyxBhEekGRiF4fADnrCdFNrZT8kTK4mo7PRyhZTKvtVdb13ZSNPE7xC2nRYppJw6497R7xv7KYgxxMLyzVo3",
  "key4": "2RnCPM9JDBjJyhctiMmkzRcGfYkh9ydFkBX6dXgkZGF2sE5XpUmBD5B58wnC6zyQXNAtNdkUqfpNcXyx9t1dKDxF",
  "key5": "MHkLqsThS9pt3Tot2aRJpupmx8JDDMxDt7PkG7koZzib5R8nHwxP8V35ARyKFTBG6ETiE5t2rssB9CdsVgGFBjr",
  "key6": "4spaxmE6k3JgXqPXFmXomTY78ECwE51cnySDYzoDwyR84HuT4sb3VQxNYuhDfmNVSjR1gmzKx8ULiX2RTBQW3y52",
  "key7": "4Lwz6qkmxZyvWHw35df8REtSATrAsuXAkS7RxzPxitEtc4oEnwX989UqWWABLYv9fMmHUzpafZZ62uy1vX9YoeH4",
  "key8": "6jo1jPi7dDKZkdLypLk6tuN155hckbLwpZf6srVboKCcwExtjqDqwh7Q3rZMTagC2zYHGLG11oDptHmAXaX9whR",
  "key9": "5Nm7Q4cJr4ruEbCdpPK6veJnejMBeiL9j8BxzVmUvucMQLv7yVHhw9GNt6WMx695ShtDTF7sLvbwBi3iwfVVq9MS",
  "key10": "TAFzSiawykE5Abqu6CZYnxDS3SDFqhjt6AZ3RDDV2pqvZK5ePA64oRRqZJTCu2Lo3gFJ6d1Va6M7wy2wpmMKp7k",
  "key11": "VxBRCr1YPAbg3LPnnRkKaYBQj8r9ZfoZC5sWtoXg42XKPZBESGUFfkzH994BuxvivbkN99Tr3yjREJEvd7GL3qy",
  "key12": "54WDryyw964dBN2ErsdGJwQG1fdNsAi6Ty5jxsWXsqXg1HGoKqUXpjqVHCzm2zq3WjnxW3LfY2uTrF8iBtwvorQB",
  "key13": "AKs62yMhPFERmu6awm43UbRFotLbB2nfLD8zwptZgxzJ7gzEbECwBcJus4zpzXnVnbJdQS97H1XVPKBJBPdEoZ4",
  "key14": "2nWnBDhaaXBkBCSLTZot4GJrdMvcBSfD5VhvkCoHmx16VFC1vRDTkyqL4Bj5adtHCai5yzyBczJfMixZ7YF4cijD",
  "key15": "4pL2NFMm84HeEfYHopn32ytrWuQK84n8G8UVXVDEbpTt1JD6vzi9mWgNJk3CsU7inmkHnfQaaWJML8mPZvFYdM6p",
  "key16": "2HhcvMC8qc17CsjH7jBQ7dJG5anaHVjVK45AsdAZFzSY4Jn4SDW75owyS8mMnS8aTRdwtGDUxcYqTgwkxuFTruiv",
  "key17": "5YErU5NXB34YHrfvmSkcgp3arbyoHSAHJtKZwLkKQ9HEFKbdHvLfMAxYrhhk1sq5cCxnntvCuoLWwTXcRfDMZXqo",
  "key18": "9dF95yH9JULePXGkm1Sa1bGMLF3xNJcr4jffsJqbWG8gaTfo76twCP8FF1GfrYWyv1onvxBrazoE29iGjoVNq6E",
  "key19": "6vQkMJxZhpdcKPuaAPFdRsPqdZ8rewvHGvSvR3HpHhZ8dVoCgmiyuWvtwqC39M2EKoUftt9ZHChNuHnqPESZMog",
  "key20": "4Kmk346YjqDjZMdQeFrTouVDz9zYZLCXDL8C7j4pPosBYmJS6mtKKLT6u5mdgdLvS7PxxJr5cCRGMqd5mohjMspY",
  "key21": "45KqnHZW6yEhfLMYDBzJjMRNZSXtUjz8DYMiA3iXq737ZHjEHtKnuqoHu7FNNMoLqa7rCgRAACf1voVQtvomhLBb",
  "key22": "5Ywv9agrE87McackcAfpV8HjFNiojcrKDGMc1FfhezrFPas2wTLsnKFXJrU733Hap49ghyzKQvepyeUpHZUPfy1U",
  "key23": "39nQv9wH2AwkhLavTgv1iX3nN9DnNs3DbnMg4P67eiQjzRHPzN2MR7YKmpMHMHGM7f7n6A7CfZ1EUKxGkSw6Bokv",
  "key24": "3iLzfLhQTgCMQdarzPB17jE8Zpv5qqYvcn4c35R2ZYSbXkiN8yPfEDRTLHcU8crVM3PhLjiX6ZxeysgTVi5BiFou",
  "key25": "4edXbUaEDnFTQASWKV3uyhtzNaKfgakhDN19MoodDcrzKjLdahUpFFebxZTPUYwn2ugTFwGiMhRLCShRbhMJj7K",
  "key26": "3YVS1FdmF7UMzACbC1R8cDBju5hxKptfCMwb6osETHqcQCZuiPbBSL1t4fkwPCs12ciRRrn4yQRkrSesohSwD5CG",
  "key27": "2r7yedxyCQwxeq9t71XjKBLSdinYrXUj7egmmdrt5Cj5d8CJUNTR3CbVs1kAMfi9eVTDvDAaDCCgMkkqfxaeyqkS",
  "key28": "5rPfxPFnfhzAAQeYbXysRYti5bnBhsBohJfgAiqHhomxXiAWuEMAdwha5YghszgU7X6mg2uvjFqVbMuoQdeXBC7t",
  "key29": "4nJb1wtJxdp9f3rs3J3hDA7aiiVsWqwsoHsQhy82izBJB1jxMMwLkPKFZXLHoSg231TXTfrxVGyWmNGm9tRitoUR",
  "key30": "623G286jzfBBqPbmetQRTHfTJqDrKmjRiGi8JuMq2JpgQ24jypMdEGXVWMJ2a6rzfHLJQpviqHUaiGd78Ng2NReh",
  "key31": "45inc7inyhrxJxZRA1NMNo7ocqwL36QMDRCD5Dk3drL5PoCG6y1ZakCKtLjmdj72mffBc7ChZDNccJTYBApyHaNF",
  "key32": "31hRfQ77uP5kkjk4podaSFMA9yBTee1inDVor2J731eHpnDed28XACe6usqpURLwJWtcPfZaxXUyUhcRf74P69zQ",
  "key33": "5bFo4t91iCZo1aqDuuFhozbwdkdPcydBsKkzRT8usUaaUjbCDLMvBzZNwntSAQxsb5nKG2JqZahqtFj6BzTwLeVN",
  "key34": "JYiccR9Ncy4MAjTAEJNPzToA95QBjxvcas5QDoECagMhmoAMCuuXFt2dMpnNYUw2HLUyMXui6qqFnPBbfZtUQ3H",
  "key35": "4G65D5SvDUZJy15n669KQs8prsa7gEzr9LFtXrTkRgDu9ozZ1t4Yzz9hxzKWKhf1CHZxT6L8uHXyHkKCdPZuaw6e",
  "key36": "3jJnyAYHiC8mW3RdhmZqfBvUMjik8FLZxKAU9z6hZiNAHevsKDP4fALwkLKstFyfZydsSV5p4cDyRypisKnf6aK5",
  "key37": "3tsRCAL3RXhHWHNv3dtheLwybSgyKHcnZjyMoWP48QdukiTfiid1EATE5BAkwYxeRMpEhmzHzsFcYB9nDxqKxtff",
  "key38": "VxupXuDWpgHY7YuaPt6qUZD9cdmxbeUSs2GVABn7WDhxUiyXg3K22RpEFT6bJhX3CJpB6bRPHGS8gcF3oaV2fXB",
  "key39": "3LnUsEsWotNbv4DuJWab2a22d1qGU5iU1EskFUjwg1J8KPZve8EyLED8ycmAPjU1QbxFETZ6F8auRuPvbAKyreLw",
  "key40": "4xYVqsJsU5S7j1pQBMK2xSLme1S7rNaZJvWJWHnJZ8ZT1VQwdQ1PThVUG4E5VY6a3DRhLeT5Us6GLMMU9DAA2vps",
  "key41": "2opGHmgZYdkuu6dpaV5dj26Hw5yMGBEZc6T6rW3Tt66StQFcvopkixnXDTjRyUEkpeKGEjEfUC8PAiv63hnc9dG1",
  "key42": "9C2rFDUR2VrPBHTKkyXCvFZ8Ef4nsFpLKwCE7xYQzyuMyctSpC94KZZmzvqrYN3DG9NcykBXn3QZvFewwvN1WNG"
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
