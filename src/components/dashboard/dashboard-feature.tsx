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
    "426FR89hdb1xhwoHNXMWbXokFCTtK65LqRkaUQ8Tn1Hfo4GqW5Mr5zXkLJtiLvjeAzLzRVt5Ytt42PsCxqQRzdwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCDVKaQijuk6BK2sHkFzGcdb9VB6xGVJewpUySG725HRK7q4wwcgBt3Kn5RbTVCP7SfsXMBa19j4QK27NNA13c1",
  "key1": "2sPv6eXwi8ebNxznNd3o1FoSAJYsny13wJ4Ezfm4dehTSv8cuPA1bQA489uhJMRdmkpLfPvTpothwsgGFitX6aWX",
  "key2": "49Jb2CMeY8DZvZtcdGjaz5yjgRL9QkMh1yZJwFynCN2sERMRQiTwSPeeQUtDF84vR9GPdAJZLZctHJm2NJTe7DW4",
  "key3": "KZAUSEzPc4CjKDqRL249W2jsyd7nPuvVA6EAqKqGVFzesr2XfUJTkKa6TsJjLC9DLhQDS69z7u8ZTpvMTUDdvax",
  "key4": "C32sEPgsJ5SpLZ9z22WgKMCpe1wjEgLCsS2RKmLSurM2sXLoKYHHuLDLANTvobEa8DCh7krK6NN8CaRx5CsLksa",
  "key5": "5JJwHzogGCoRyxyM8A3umZdEP7Z2XDxadsZcG6oMvEgFoNWAPUWvheGCb6BcerU2yR4bBCg5UogLuJhgv1aRCQLR",
  "key6": "4BxJRnf4YHsJHNhU2vmZ35kmuM27kQqUEeLM2r3dX3PnMJCD8C2UfBBGKiTJiRxgUfsSqaacy7pBrnEiWmEMCsjC",
  "key7": "2sVta5ZYLFzcLZPiyy6GS4sEs497r2f7KNokqCCDiyrBu1pfWJCkuQz2CGsp8wL8vYdGj2L4x5XRgQYwV9HQ4mN4",
  "key8": "JZgMrhbcNnC4sbDa9v9UeDgJCF6Wsp3G94B94QtqJRWBa4gAwHP6B1iMa5dDV1iNQvBfmwc9pX9PDmHUwQugBS4",
  "key9": "jGpAjUPV9tXZWWVQPWLihf5SzpX6UgwtvywgEEevdjaQZnS8G4iGgMPuefT15zFBh3b5keEpMVeksSoEBjUSCyh",
  "key10": "5pSALtfd5kdpJQXnWZzJS5QfVC4EEin4168xTotDwup6eCrMKLPmgcLmrHAxCUDhanqXo9mhhs3DeQLaPzfJaZTU",
  "key11": "5SXPRciFRRorWwrFpDJjUPrgTYUvYZf3gH5jJpSqgS8RurEocspoZYTwoBJMTEiE5JaiuU8L5zVptd2bE7D27YWc",
  "key12": "3MNtJshpoUuoV4ykpi6VRFZahgxScXK1R6UR5Uotd7eW1rWwrPMYHD71kokxRSxiBXw7exNzZrYCioSEbppiGF7J",
  "key13": "DZoHaGGRBfXhar9EkAfBuWpmGgugCVJ2hAkW5ADiiEhrzzjdosm9DMY9oNw9P9Rvii1PP7dmUsR6kLmD9rmLuEq",
  "key14": "7521zNCBkjA8KcscwRpgTrPrD6FV1i65yVJLgPFSACqDvueqBxjiTCHtBiTdrVnMnJSLeYXM7XYDhrbWu5MaBuW",
  "key15": "3zKYELSahpsmxq5he8NtKmAYjk2Hh7fQWNdshK65PAUKtcfninbeXUkEfBYhZoCfPZ61Ad9Fh4Ryhe5kbT2BrF9o",
  "key16": "5sEvsypUXvYdfVvNLSsAc1FuMZZtyTQJ9y7TtqRPpd9Mj3ZspA9q669bNmFg2HKHLMt7UKicrC12TyynLqyQpQ7F",
  "key17": "5o1UBGEDNmxSjCpTAin7xMwcETQa36xjSQEzrwRBf63URJ7rsTcYgWoL54Tm6LM2y9QJw1VSgezP29uDouEvrsdF",
  "key18": "5E35bfq7JEUqjf2LLVQBDgAXgsmn4g3167yiAstctStX5nfwEUfmJ4v1FhHW8nM7MSDQ4zWaVvNBA6NVi63C55JV",
  "key19": "2GxpAeRPoHDqVWxQaUJY1LrQBXSN3LfrZb9UfatzwpTmBS93DwHiAM6ejWYT5nhQBRtSmhcvkNrCPEnj16Ja8Xkr",
  "key20": "2VVmMXHQUFRFLYycqrhhzyJNNV4Qf5DLaD6reKmGnTU1xB4TJTF9jsvdn7Qjfx3YbbndEtHE9FArihoEresV3EDX",
  "key21": "2qk2MdzG2eBcgdbw8BedXqur5rGgCLDUfwg9DfKBGgJ5nqZd3xWNov5SodNhKHJGrL1Xyswr2qhGfYpTopPMs7hP",
  "key22": "38dRBDgvj3frkt7cwGUX1KYLNFqizATUGnbBtcPy7n8yMZLLKDrQdgvJmghAZsZ88wmGYqvS6NoQvt9d5nnMQUgt",
  "key23": "1eDQbMraKjruCUdjR8qP63rtrmQENVbNXBX1FFSQD6qrsXEq9nRDEuBvK1gfQKGPmnbR8kEzPg5Hu9596vnVLCH",
  "key24": "4w3RZwUhG63FC6Uk5sWM54afaCH93SxuuSEj8kaAKmQNqYV3iHyyxn7yxwC6Ux5KWG9VXJm5dQkxbUCyBACLoV4a",
  "key25": "3Gt2gaf62C5XwUfvE3BYGtByXU1JDpJU7mFwdDytBrTYNuwVQeMQmRXTzeYGpYVV4dXbe4VHW1JhhTkgZFWiH7av",
  "key26": "384yf4DWLTfo4u7pW6jCK5t8M5Gxi9FsRe3KFWdrGGdC9AVzvdmAqTBApHtNSg1po8sxkpVHnDYPmgkwCFXTwGnP",
  "key27": "5kKPEJ3UozLifULRrJTe1z3CTZs4NDJJYjzCksK4dtPVsF2Jfv5aS4bxL7xFCngVmFDLGwjbJDnKaM16gAzC79Tg",
  "key28": "mEE5LBmkYfU7Lg5K3PrLCd6s8TJ1JDHYgnJZ9NtBexDPohiLJvAGqaGF1umXyWoMgSpXx4HpQD1aum81hbNGbi6",
  "key29": "4fFWtEmj3MpdeaCNmCJsN8z7VbNk3vueiaZ7SB54Cc8T29CCHNAdBGMMqiSQXrvtKkthNcvNvMXmSwFBWF23DABp",
  "key30": "3HKUSaxtTMfQwm5zdFpg74xsQ7Jwf8uAnbHA6kYg6NGygKagrkCUzCQpHCcMPKUHvG23rbNK7q2LUUu2q4Ph2vXV",
  "key31": "2MFgX2d9cLNC3CspjL4JqQygmskpF5qG9hfpbDSa27iDdCXTPP5qZ4WAmQqPyERiahwn7mDcaK8F8q2d6WfyEykb",
  "key32": "2U4vrNz6EPhDDEqSecppB4JedD7GUYTWyB6tYB1VHsNQNmgHT6G6XxnFHiUT1HwfYNvvKkLvxFjtH1aDaQ3zUeCr",
  "key33": "3ofZpzaNMLYiSuNKQcBB2twf1wjAHZJcEYrWDczNW7VkTSRX55peNsrNAWwQARan4EKrZ5UhctEGt7ioYfvVKRjo",
  "key34": "4HWEKo5eQAb5NFC3yowsXmP6JTmfUqX3JjxMcCXXpWNh1KNP5tmKahhh687KKEv6VL1F2rijmcfzd1hbHzjw5V4W",
  "key35": "5u2Z7J3zYe5bA3nHKdeyjnL8A1Fx2BGniEB5qmWwx6f69UgBpSDqgDC7ZPeFoBkQjH8Zm6yTwtLWtrm8pECcCAdE",
  "key36": "4yuiLzgTtQaWwC5f6b8fxtgStqELY3DSShmPD7K6e4Af13rYCcXqaQXYUyryPCGNznQA8BcWXGt9T4ySf7pmS1AM",
  "key37": "3eXSKxDuA7t5ccbMptAgbi3mfMS8vKBJ6LvwwjzsYEJrhjBPjaGN7xnnJAsqitCSh9z97FL53jRfrqX2YXuyLKBn",
  "key38": "aD6jkhnhiD95pSs6ecpZwvybtrFukzxpqP2mTNq1VGjcyN66FBu191e4HsQ5LaQ3pwch9TMqbnGgPKB4HMyTGGP",
  "key39": "49dM9VYGxd7BUsv5CxBwc4uPbireYrYZURqSnefpn15YmaSiyYjXm6DiT9YgQa4jUPqSBoyptpiYSrEAFCC9ducj",
  "key40": "4txD37aH6TTZkzZbnqKVYqj1SRLuiehmF687YpuVoybj2kugzavQXQ86NTnNbDxpBFoo5fLkj9unX2QNtjFXsFNp",
  "key41": "4VqFeTpfZwHpmKVtadUWJu9dbd9y1coLfgPz9Zx9gSESMnw9Yw1H15eHceSeFtp12qNdTmZP2zwWZ1YYqAvw9q9Z"
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
