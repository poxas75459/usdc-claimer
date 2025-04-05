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
    "3HKJjLJ4tyD9qHxnau6vLLEAR2iTc932fZFNNFEVjSzLk2w4RWk4AQXYWgMAECMAiSQ8LTtmM5ucuwgKPPfjSQMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31krmpzQSBoMhmd27k5b1tsHdTrtzsXk96WKV5mEHcDXd4SYyiaXyWqgKQod9NaEzhSmBRH72g6ofdMtT9MD7vpt",
  "key1": "21EhqceYhbyuFYvdCibrpe24o8ywgj9ZoadPmB66j8g7bo32qcFbqT9sMTdDBeM2L1iRCxNN6CFnFccT3uLcBWfT",
  "key2": "4QqTA6SXJb4DE3NhHBEEVF1LVT2jmi7uiGgAuDo9MeGnXdJ3VYU9x2h8nchhpYcJus8x4yPAnFoetewGYXt95jgU",
  "key3": "5qVcjtizb9X4ycRMcSNN6xoFaZRo6qJeva5oFC5vwPYrc9bvdrk2kjatSNj9HuaJpi5wMyTpw45xXFiBnsFwdihq",
  "key4": "iNu54w2sjzKAUfW7NdWezUDEpwJW2kettU115QR7tN3ByUK5v5LPMSPWguLg115cPzpG41K3yoDSNQDkvkjubqz",
  "key5": "4NffcoXeye1oyNGgKwwds4etZ9GSiYCAoxsyfcMAtU5o8cTow1fwRAFGuMCGCi595hauoU3epvku5VihqFYJgn11",
  "key6": "ApjhCxDxZcag4WUKHWwT9SpFTCQqfVV5A9sQcji9TMn8td1PsVBheRz3gzJ5LcPJh6kSDvhKpN85abUBXyMx5bj",
  "key7": "55L57vk4QExvhACXqVs1EDKQmSTZZsCyMEG641YSyEgJjKfVEGdvE7WvkCChfueYXSc15hX6crd1gyqCHUxMrqVJ",
  "key8": "5v1hSPEnGbZQRzVuvmyNDzfGKaFcjk8mzGocoK1GvjMx7PHtg4VPgW7m9uoMLZrqEGur6Xc7JWPa7VjkQAXy99Rn",
  "key9": "hfRWrVkb1d35aHLkCUfA1YeB2H7WKRPxv55tF4a1SyWjza5rbncjerPwmX64dJduwyivSHKPeag4n5ppng3zQsq",
  "key10": "cvhjayXRQSBWK89wdQ2QCcRFyYNjcKSL4oRbDsMQJMdsdDkptBKiTL7VVsD3kh8nv6jSw6bFfBAy283xv88yTx3",
  "key11": "5x85rXfXGr33z2wKyHVNZbZM17zRVhpEzyu9oUiq3ZALdPRiHqW8wucJQctfsADQyreK33p51pQ7q8PibVzz8ayM",
  "key12": "4gnH5bTAhcDZqZbqRXtsE9K2RoMyLagjB6hhhTs2mrCgmnNLSnnn2gpjKAYvwqWbD4dTMm84JRrswXnBWug3GSKu",
  "key13": "4xdR6ihp23RtM3EXxszrJjzZzF3xBnsxePKC9FDAhsJVNYLJQ9tLEZkK9rVFN9S23aVCZZeKkRENS985zvhWMS3Z",
  "key14": "33QLnvrJf5JbZEXakfjDKjSLd4NWxoRSy18n8tbCHemEH343WV3z5tTDpnARSTWWE1JEpLPy1oft3cnJammBAWMM",
  "key15": "4Po1FWNVo7JWJrZBLiysLdPeY64dSmEBhAM8ji3VeX64NGz9tfBDuxH433EiV9eYJLESM87HiNGi5aMqCtgtTtuG",
  "key16": "21QZt8SSSe3XHsryNzB3yfZJAGa3DMbmhonvBFgQEdJvyc5TovFZAgUi3ZDxAurGBxSZTyHyPutY7V5Yi7zB6WUy",
  "key17": "4QhCg7X7bYTKw29iRWvSsAAMe1m2qRRMthvcRPMrWbqcKas2Csx7YH9i7GHxGWEkaFk5veyMN3ZjUx5nU1U161Yx",
  "key18": "5WXwKzynBViDssqDmH8LV5HLoXuPV7hmKq3tEMHkkGbbaDmLuBAr5GRGwyK1eybEs4AZUxYxDsUXKetMLACVMWMV",
  "key19": "4Lg6Let7WHSmLFEsru2kkRxJxpN6W7ShBGrXHEtQC9fd9aGpXEJm5mxpWrnGYFu88VNoq7iQsyrtt6UjQLDhyLLV",
  "key20": "2BTPuthMPTC6UhDQprFzhSzQ6vhcAAqEkvUL5wE2TsLw7NwVzn3Hrt44xBuiZb9764ST88kYW6N9VL6ULPbUb3dA",
  "key21": "3TxLY38uyR5RR5SvfygPNrJjXdxfWhxC1RoqZ2AQ9CtT9yKWxR1z3KiefYwys9RTgfKdEa22DevnpdSBR4Y7Ykm3",
  "key22": "23fL3A8n3M5Nz73c4os5YNygv8ZxohSE8Fo9qZb5PMe7swD44SGnmrgeWMps9UFcggtguVxr4tKEgXMrNBnRYdjx",
  "key23": "4iE5qTGx6ZH7HpqyoYTarSh1HgKdRSacVcotNGsSLAfmq6THDTqj4sMzp2vb2GBggg9wpnUCMJtzpmMaBamhuz1V",
  "key24": "4HJmrT9JUmwKTWxZubRe8FsJoaCTGn9TSucPERNhxsVR6yVvEhT7LjSEycPizUcdhN7PfgL5N6t5fkJkL89mrcnA",
  "key25": "2sTFLvwuQKH215m1SEt9nN7DxSFxcAJAD63GBbYAEJLEpXjeSqVy5Q87GNxTuAmX58ZodT5qCmSzJ7QzuVKx8GbJ",
  "key26": "2vSGsPM794y75vq2PvnwbDjnACJ7xdXrhXzS5kzzAfCaHs7vcP8qfKCxyG69ZTDvxmh8xQVTcoD3v3dp5ojfN4K7"
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
