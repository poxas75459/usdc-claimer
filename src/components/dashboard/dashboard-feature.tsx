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
    "3ADVhLR1NCWBDbPvGzTo96CJnW85vqwfCseGJSmZ4AXJb5LU2aRG3qkzqdTQYFdHt1KmGAbRqkAt8nBRmFmVqrPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jc5vPKc25C1fMKW9RqcQpwrwBp7cShLpWH4LnttNfh8kQ6dtPswe6rHRUkNLAazHwoZGu4PUrHG1c4X27jDGUDm",
  "key1": "4VBZQnSYAvBUbb3So5WAdF6GX4yEoxdc4YKoYxZAvTvcfhuW2zKi3a9QymLUojfrsXRmG8cUvHFh2bkhaHVzqaUq",
  "key2": "ubGU4XXBhZqHymNP4Umj13HxZLQT7cfuGuMZauE1RrFtH4LX3nnsx8EHL7gbhtnwVaofstekYnabbc4izk2MvA5",
  "key3": "4P2FHCLonRoLB5AFW4HHqk5rUocJTa1AK6iAc8VGtKyVFXBjKp9z9PGV5FqoW9dDrwML6HpgUKpdXr1gPiU3s4z1",
  "key4": "WNBMhMbeVPoNtXbhpynrRX4qtoJmpcYeGMjaPKrxnQhdPttD4tRFr5Tbcc8Fp43zL9DVoyc5ud2SYvkjGgU7fE8",
  "key5": "2w5L3pd9rZzqHUhvTcWom8n6AoHnLGwTzNFNnJR48EnsYfXdD5vpyzM3Tp4eFFEd9wdqhvxy5N7FC9rmYVxW1yiK",
  "key6": "fqXfjiict5W5fJQ5GuQYrLnEY9ogQnXs4BQLraqBX8UWpcvPiaqfNh2yXfE465cuZ4SEdJxsvfVuxcEPkffPEWt",
  "key7": "44Ua7k2HoK3snsAamHjS7GkpUop438sU7q9XLAPPjJHiBeJWwbUwJ6s12nahbDVpdUAZ9CJpzftu7iYuEbLiySMc",
  "key8": "5FcFnyGdRdMRyjRJMDXr4Tii6v1sDr2ahFcYSrCSwxxKvB5RvfKjtUW8VWRuXzwbD1Xsrf2onTgqtk1d8nZGLTcB",
  "key9": "2iow6CrqUcvXaK5czo96daL9KMi6X5NTpbmamc8ntTqgwd2g3bb9PmAh7YvitEz5xFJ4ve3WcTSmhoci1cy431FR",
  "key10": "3bbuMah1qUNMsj62mDbJGdFvLdEQn7Ug4H98KaTqfGQoC4uZJx6QzEucwRkFB8NaGXwbCsZyE2K9GriGyJ4stPEi",
  "key11": "TE1Kp5CDMQaoHjK1dHResUfYDR4ZJC6wVdLgQBegSmW4LKGB2jMAteBsUa9ouCPg9dznxdBWJ9tWM3cMs7XU4sx",
  "key12": "52JnvjikHdaEo6F5hCrKH6ajW8ehYP2v7fi5YxgaiB2GXHh3xB8fDqfzSvZWaFrA1S4qKFarg8Esw7zbvdB2Rkrj",
  "key13": "49hqceftG9ztwyiQNBrSeRWkGyNNDsy1ND4ByUoQz7kbJGeTKDwYDgmK1xdafHdF1GBVyTsa3qwW61nCLKomyB9K",
  "key14": "2J19Zfxc4cWzrS5bVKBUyp14dAkpHw3yxhuDHbdwi5KAGSuW5i1APdk56wR3zzreopst7iGFTs6c4crB7gvFERHT",
  "key15": "2byCDABoD3ZN28vZKfSWQNYwrkyrK2Ch1wgjjKpGec5mAYdVuSMdyiPMCh71rRnDCxfEx8obuWHUt7eCD7VsMgKX",
  "key16": "2fCTZf8ZSf5fxewVmyJx4yb1Yf89DTTnyLVBhvxuwaf3QxHCqc2KLmKX4W9atPj3Bpx6SXsxrczkz66JzoxDLjqR",
  "key17": "3Mi1Ym2cPbG8hXNxr29fjxvqnMYv2zdEDBF1g7At4ztTLAYH69ELtUShb2xz8dgS8L2tNdTLTAytrs8rMsY3CL73",
  "key18": "4FJaMYUn5KiBiLnkwbUa6hCcANYkEmvajzQqiSckL9Udj2JKxTCwLRwAPc9vHK3Mrzdv5cB9x3m9wdu3SsY5jzdf",
  "key19": "3LxARBnhWxn92PHMA6yy2r6iP4ctyVVUmrVFC7Bi7QYXu9Ukc2uFcnmdysPVaT7gJ2E2Rs4gz299m3oxShMeB63C",
  "key20": "4tTxJaaNpy68AYSrCScLA7EQETzZF5mbHngAqJ6U971euv3KkHXTrhw8YTydw1mZAeGqTk1iw7U153d57vJvac7C",
  "key21": "3Daqcisw1h9quNoMJ9fNgVeXYyhjbyVgt2kva9QFz3Vx2AysBm7cLDm4oWpMSw9GvttBrCgAQpHCZafopQrueG1e",
  "key22": "4oeLiZpnrTcU6MFWJLJKSu1x1nCbk3tnKFEDt97fkCyKHz2vNXdHpejjWZfkUQUhH5YebTqaBtzVGCMejN7ooTuB",
  "key23": "2cUjYvRdnv1cVvMmhKpBz97VuYtcGoJc5654eRgwsa96mqkgmWc4u5M1QqY52yzKc18HRY5xwbZMjRzV5RUibyzZ",
  "key24": "2Kf5BJ9YXeD8yMcZxjpR4iG53dSMH2Xj5RWJf7sFZbe8pBNnJv4NkiVa8qr8w18oyYUGjTgfRVM8EDym4fA8CcSv",
  "key25": "LdCd6E66qnHpu6WLKEQUtNkMtLMCAqkhFsmRkMigLSbQMcPm6FyiThmyz3Ma8Qbn6MiT1H5zD2yFixWVjftpNcJ",
  "key26": "3GMvgXkixE3na3t8ddqVro8cw6mQ1RMCqNwPztiWg4iszaQSEiqHTtSYwjZ8E8tHyssAkPo4iVKFFAM4DDSn2HpS",
  "key27": "5kP6W7XiuQhg32ovZ4o7aAgdvy8xDtByjAWBnsCB8abJeeFzQScs53VaBi8uoCyZMv1z72TUVjp7gnEgt3iXMfL2",
  "key28": "4iuik17A3Q6eknqwqQKzic4R4zjuxD7u2NxYC9T7Tu6HyMyacnxnAV7W36JQ4qGKDwifGduTaubigHrR1HgxUMCX",
  "key29": "2Sxm86hbesQ838sDMJpMbVYkxPyDRSbp3zyERUS561iCBiFZ98ApZh98ZyrE53tR8hGoT976eMbp6xWXu1NcKV2i",
  "key30": "5eoCte55vk1HwmbmLW9KuRveQgW1uFqPUr4y8hEqNpnU3aSok8CuRueRGbLvK67ah2sB3fAdps8a89naVyAo7f9b",
  "key31": "4tcuYG8kDYR8LuWbT91KToCNd7DAdNVtyfxHaJAk4jGyeBXAU8aChcLRJnvePSy6mXCCgPpeFBuqfzESo3nE1uSB",
  "key32": "3jnUtz3j1mezrF7yP8MGdgehzqKdeY4Mqaw2kWBcodJSSFe1uLSMYFyxDgssTDUiKBCQxacrboaFZg3jd13P6BGV",
  "key33": "iAPLAygtCBND7M3HXjCwyExjwmDvvPQmPSzQE7wPFstzrnBMoF93M5sqJ4RZyyFvR8ZhYwyypuVG46SioUgoGnb",
  "key34": "254THH2MbfYfy8Px8Vi3TneKmLr42JaS4SyPfgx3VfPFQx7y23FQxVx3QnG4FLP1j88281KDtbkWT2GA3fsjNnhr"
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
