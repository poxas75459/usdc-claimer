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
    "52afBDnRCkQUy9pGcdxwkJz9CgnkFNHREHSF8ztoQQp4wff2Yv8xzs25zWbqf8uxyd7tGeWvPKGjZ9YqtWSQsfFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHMfdVBRdKFq4WioY6v1ntheiNxaxtyvHJRbNGNgT4qM4HFJ61P7waY6GBM2BLpGokLNfV3QPrMwrgq2XkpvEnW",
  "key1": "5rNRKbpBSrEbNy5DqXs59xe1jDWcxnYjhyMcBqfhxcvaA6Ne3Dq5uS2VEH4KvaVj5UcZaejyiGgpko6ht7GuSFbp",
  "key2": "5yBT8sjzTNULxwhAexFo6pJVrCPCeksJsnSqxigroJT23PwxD3XByq7EgKcumgHViBaEakbv9YLp8wCUXzEjWnH4",
  "key3": "32ipf6ed5FQypTH8mAj92bkQNdA3URpmfXDPXxx5TqyurXjPbhpVTei9APDKrDUjkXJajSz9ZcVaetCmEiBmGzxp",
  "key4": "41dr8Lwd5pHduRXDXYrtTLadHxCFjKee3dQivGhG6mERix2gcWbhsGjmXeWHm5Na6pNiGEfMfXHfoV1i3vXVFQTp",
  "key5": "2RzfgdVsoqwrngqhm51HESQV9CCKQwFW239XzcZwtqHJ3ufqWiA2gYkZf1YHBZqpZFjuUBtUcsZxTzm9PEgdB5CD",
  "key6": "4Nv2MRxhNQunrvqgcsyxTD1q9JufxgZP1BKiKz7RS9FNyZF3YXuiUfyD8pi1upr4AHVEt76HM2uafcgmC7EUNFcb",
  "key7": "4C81ph8TFusq8iP9goqy6rgFGE3H8jhdKriZK4up5drGYWVpN3xRXzTGxnbXpG4iuHPG2nvsgxzVbDWfN5XdqVha",
  "key8": "32CTziacUUThsBp6wZwdpELwKv5SYxiwq2c8wPkrNY2EzLTPrYbMcL4FRroRWHghAp1jwJ3BQZpRBW4SLEwsLqRU",
  "key9": "3RNGqTrndSv5qSfSqQRDbazertkJBR9a1yo356PPM9qgQuz64LFTAouehGMNTHF5QT1deNCBHSSAt1LZ4FCnRnX",
  "key10": "dWPypBad84gkH2piEPqQHxhWtbxoLMooeLHn5XdnJe95svMHUShJuyEuKiDqwpKEa58W8wtGu858SC6VLEUMRC5",
  "key11": "4gf5Rpe5n5VSF9CuinyPR4bp1LkL6cY8YDjXcgabA4KT8mGjD8dpLvHBDAKZquy1W2nqTxJ6GpfQBg8euBxUJxX3",
  "key12": "1CjgSTGpz8A8Jo5bvJqaVkDM4SF3oNrgPLQ7cyu5TD1yxT818KMB3vQyHnkxmXMeZXfbZzjjN1mupdb9cqYFNmR",
  "key13": "3MyrQmQPWE6uM9DRjRZzmSyfp89Sx27sxRCSfE4q9ogJnjVmvUMPaBgH43FkH2V8WSE5EVy6tqUN3md1zHK4TGwQ",
  "key14": "233VXFMAQJnwRAiqoMh3oxPF2mhDuBduqdSfPzvpvhmLJxzZa42j4c8eXa4W8g1jtMaFRGiLXXg5QLMM3PURRCx1",
  "key15": "3XuhmXi2LickXPCgmD6GSTZ7dRxR2VxQmS3pf8M15BjywfLnxeuxpyMCVqWBBv9nXiM4GT4e4bEBtjJBJtqfMipa",
  "key16": "3xh3oyz841mkuwAxQtdiLwuULbmEbQeJ3MKGm2qfYKfkGrUTec3DiNbBu336tMgUn27rY4ZufAkPS3eZgXN1fUx5",
  "key17": "41cefpdSm1yWUbBfrzhgnV9AHPDeUkWigktHDnDZ6UyskmAcMMJdfN3CoKhyjpZUuVkDLpmKHMZ98wb75hrQvvEA",
  "key18": "2MJKzkhBJrA9NvPeBEz8soV7t3AebDqktNu7F5m2PxB8M4AuAU3N77T6e6vCV3zqDe6dvevoo9VSjtxAK7c5Tgwj",
  "key19": "5ZTaTzcUR5nNAm9gohnuaYwv9FgaTi5QaW4JWTCLPr8Zpye4zS8yyJyo9usReWTZv9LKjDLufeovohZfM5aQEfKr",
  "key20": "4Q1vocGUY4Dcn16NDXWyLuA1LzGjeadPc6svu3bttefnSmyFgYiFDDMPbqVyZZw9FRf8PSjNdej65mcGJFXHrxYV",
  "key21": "4fHKjgWRYJXpD1EqtAhpL8KeYm1bcpCgVhEyvfK5AgXUaFZ44evvoqeBdGPTJnGDQqbUUt3EzMdSfkXx1dsXdX49",
  "key22": "2K4ELwqL6rauGTm76gsDNWHCzVFkdXFR3DMQpcPsh7jpMqtby5aLYwQqPJSTbMLoeu6Gxh348QaE3gi284ntuezV",
  "key23": "o3k2iohkzjr5B4o7oVP8LuZcp759SxSMGiZcdDcGjuC6KyePM1cZh5mY4PKJyDVCubFe13uYjPBwupHj1P1P45u",
  "key24": "572i3zejN5FPrNTyMoMke3LxxnA8HJb72Yb15B21wb1xRGzEC7f4QdEWfJdC6t8Xm9q1nmaozoqg2HBLTKBoUpAR",
  "key25": "3EKrF9LzdcctjnSxjmeZkrb7hbCBQBnehkUEAgiNnCPKS8y2ph8vE8HkpHjNoHMvXtwcfYRi5GFGqoKW6zVt7Vna",
  "key26": "3a1CEmdHH1YTCnC2V4Ps8HafBJJMpDppX3cz2bFWBtZR6vXABMzJe2SmYa59qfT1Qq4qiM47zdWahbQ74GQCKGG6",
  "key27": "2qkzRwAsxFayq1W3q7zEmWPeU8KmsFp82F6wstY5eJoyLdLJHVxo8RFN9TSAwNoSnBfbUEZspvG5n3SWBujSSgFm",
  "key28": "3CWZUt3YG2hUwrMHnHanJVNjFzTnoDxzKAC18cCHq5X2NoBkXcMdZzn6REwSF3HRQbYXZZi49LoQkPmQFqeQP2m3",
  "key29": "2rMLJR2AFRFUeswpfVsk3TGb5qGNC3ebKiZGEWdqqQTnMmrUB7tf71PMDsajrKy1AARFAbP9vCyEfbi44YTXzWQh",
  "key30": "5kViTt2uAMNsfdNnPJA833tU2bk4jRLWb5BTpJUBkTpf4aqpp9oR2MfHCichAQZMnPw9bM6eCyyeinr8y4J7fZdG",
  "key31": "5ayCqvHtsjfFPNvphS4seoQnqHem9dji2QL7Kr3bBNpvdwW5GnFuBtCmSVTx9xnVfPJZ7HxK6vohWrYTs7ymPHb2",
  "key32": "LfnuXP1TXPijVqUukLFsTKsYNtjZjUMumF555WAVKVBEPnuxWHbMZAAtabhVJ4th22wrEPsNs5fH6FXVpEn4Wcm",
  "key33": "2aoEQvGSLkQP5QfUc9BcMo98Ntkr3PxVL2MZ99uYBFeL8tAE6HQrrrN8E9GKrHu9DQx6HbjgP8ajusBUXdHGn4HX",
  "key34": "VAiz57VoPiTW5eGqyFKtgDAu3n2jNLzGJjMgFEX96humpYyKpv7J21zaJC2XLycmjvnh9ycgvo1yQRxpZyVX3uU",
  "key35": "5uu4AB1MHF54roX1PLXWtmSn5TrgT7b7TQEW626meutzkY9iiiGtFFeb1W1VkGoMMNkjog85XFGmis8PNMmUALAm",
  "key36": "5TKAy8prbACvdW86jgBGjBRR91UswfCYxausD1eJoqx18i2K4gAJ8M9iS52hGij8aSW7zQvzh872gLafyhBEkwoP",
  "key37": "4ZPkSDccZ41iJFPtSKcmvMcK3teE7HLETcD4Dvxf8wiD3YBMCPgwpcJ97T9HinBNc7syHjkej7nCuUxz8ni1XQmW",
  "key38": "3q5KPJg16fQy4BZpgynQNidjr64NG7aBWTiaLAojG6Qib5FrcjyXYka6mCNbQzrmmXzduAR9WEpTYP5svbJzdaQR",
  "key39": "5ZSMkG5SpHysF82wZjcmX5KTrkEnW79bcv9jcPrfzkr64CRP7DhqxtfdrZjXibw53y5B84ejDU4xx9bmqwbeZvpV",
  "key40": "4YntbZrkXtrmuDPcnuN8MAMhxzpFpfzXKVeBL8VpYkxdhmT3pPrhENJhwFcWr5QxYuCUBE9KeTybKSz1SUCkrEPG",
  "key41": "iuXPtkxHdkAtNQqcWRw5ELMFrJWRS6zc5hhKBEPpivp7qa8hsKaWWEri4jkjkDeXqNZhvb8KiESSM7aAnKkL2xx",
  "key42": "4ZCBsCVDaWjeNmzqk2PjSYQrppotWiPHCtVwvDQkNApync861M1HLhVn4JSEDZHxV69jTws2LxZ8iLXqvFjBP6um",
  "key43": "2rXgKZbkVNtPVtQer4K3DVrVNTaYvodnhUJPG3ij3D6P7YMfCgk1S79fsSsd6uqByNGKyKAK9yLWudvV37Vsj3Xa",
  "key44": "5td4DeLoNAPHU1NCb57PmiLPPixPgpum2Q3PgcGd9sqwt3FWfhWcueBtUhbYRewYQJrgT6JbnUbZTQBhT8o6tLky",
  "key45": "5swJDvcWuh2TydNyRGyB7wK69qnAnSnXb5buYCiyCyYcGsKJ4T1Xu3Qah2RvujSMiZQ8vG7uqKmwXJUNXB1Btjt"
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
