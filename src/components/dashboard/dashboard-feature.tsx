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
    "6516HevQjYHbHK9f1P6LZxX5AASSa55xTyT6mzjwGFLJPhdyXqgbz8gkmDgQdGoRZyXVLRkB41HSXuf3N6bpY64N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iTcscntdWiiStiXvPvMhngvJeBZYay9RZQZjHTumGc7SXSpZSRXsCBBvRTaSHMGUh3opinGiFYPTYWfcNBwtzjk",
  "key1": "2oKMRpGquKq8smRYk6di4Zs8iNXJpLRaJjkCSKxsx9K6PRk7ctgpvgipHKwXeCbQjKtG1ztxb4NvsdA6R1uJk32E",
  "key2": "3Mj6UgJnKAc4q46B1Zkh6cPEPKPbyayAANhiC15YmryVe8TV9EUyTUVALhZWPzT3rtHgC8VPD2GEsnMLypBFYFeN",
  "key3": "2QGByK1Jhmowhg63KJadsrLiDDzb5n3Sfm14KqueJqjd47xdfpUKx2cbkfWZDJhr8EqvasbuTyq5xbR6KxaBBmx3",
  "key4": "2PiTwWLJ5tkFFTp33YddDrkSDCqPiN3YNH6eADJ2cTo81K5SWL8ZQLWJnUYwjC7zx3C8BYueW9MqPzBftFSj9eyr",
  "key5": "4UqH91bPpcmjtnsEP6vFu9Hy1bi8U1Y7Epe73kkefjgAFZwKunuEoYUerdjdAdEYbbhLWBtEkf2Qq8WNDzrsToUo",
  "key6": "2386caHSanQo1FGMDD1BqnYsB2772zUpaSz8A9R4B5GjQvVW8yc1K15B37dZrdms5oGiFuVoDLctw1exza9X5thE",
  "key7": "5wruyKCdKHqEbaQ2NbNjgTHjdx3e6r4By26nYQjXgtjsaQGWMe3fNWMjPV639tXLfZpd7giRx9Cdr3JzVwhq3Z62",
  "key8": "TDFCrRwYubZuM1TNoXr9QkK4cZ5ea4mMu1keu74p1wfp7uZwWqQDXWnxoGF38KCJYmyCRk8ax6bDMhhfupYM49G",
  "key9": "3qd8aGambkwsQKrczLq26S61Dhx8ENqEwAMDFXZzNPSmYxCgoiGdYocszKhQ2qDXJdGbDUKGJftsxqbTJVjieYYw",
  "key10": "34yL2YJ8qsiw711qXyQVwgrkYCutSdbtXXfWYJgff5qtTzcVJvjMk83cPQ5QC9gW4ug9v4mVeLyCqPPVvj1FYWwj",
  "key11": "39zGDGhEW3hXCWkFSrwsUxmS4MufsmJFRqSYFe8xsgcufxFBQwLCa1cea7eECPTYk7WcU9fYKgEKqMgSvur9ay3Z",
  "key12": "2eMMJ1gBbikqthqEJZWDPEmyojN8w8DizZsEqCHJGEDJ9GCNriUSnzLew5PvHgstwBxPRsfXS8jYMChHHoUfeXPV",
  "key13": "wcB3Y1UBPgYC5owXcUC9SZXcKyNUdTWREwxw3kkdBchKAnqMkztD38Yq5chagrZgv7FeeyUyW4KFvrRL4QrGCpW",
  "key14": "4Tti3Gby4pJ7Q2QWo82nfBVb83rK2TH2QjeUX4Pf3yZXZH4enhr9ZYgajc1mRu7WLH34BMqANUV7qNW1dgS2mMT5",
  "key15": "38dwXmWXReK9hpDJEECXnSwAUbY48pTveheLJkgwo2RPQbojfBc4KDfwgA6ygucf8Zn3vkkwdhUK8bhZYtDQ1D9V",
  "key16": "T9wMDuFDXqWvgFyZEKuLL9kXXTG4K7311T6zfj63pCuEvbcB8f5m1udRfpVxLNbNvLQoT15evrQfgJ2BWTrjU3R",
  "key17": "2Gv6AxQKi8dRL3B7wQxjCMmYTjRYjCXF36PQoeWsgbwewgnzsKDnEjnNM19Lboqpr384agqoPFpL56V9Baq2onfP",
  "key18": "4qHDSGzNGarVbAn4mg83bU7yZeKm8vupx7A7rCVjNLQWvm3aaXnmGo6JpJ1XLhgyLSF2TTzLVaSx8KiECjmGdHSp",
  "key19": "zvGM8z6gZJfnPiweWAV8DyLFDxiy5XS2dcCZU2qg8EPaDwfzXZnbyGZkDrjX9yNLKZsZ2LstbooKpJbkBHK5BAQ",
  "key20": "3NGxhireXWNFgA3AMgFYCtps5N91DFgS68EUFEV3bNqH33A6pSJ9LbLsaMBhnhJyFFX6giM4LYP4PVnHijKRqz4b",
  "key21": "dvbpfjCk4hg9w6JjW1pDtXK1LR7nrGDnDQ4oGjvyRBPV8eEuwxpLkTLXpbbU4MZFi34Xj5m25CqYqnTF6TBM3Et",
  "key22": "32imkK5H5BxtkkSJepBBqb6FBaME5oXZytnYS3Pn6DCQCSzokkfkhox9sDZfU8Xwpe6w9ynxbtuo3S3wqH3ZmrSy",
  "key23": "3ZH3AVStY68rmKQ7A9tm3ZdXwndWTf2DbVcPi6DomGwVGdcGw7vrt6E2ctPPoNyGY7nQx14T1afDiNNXM1iUKms7",
  "key24": "2d3Ggb64jPezc7nAKPRoW6y2WJKkqSisCtBQLfYHKHNC7Pk21Ca3xQsgX9mFgmQJP53wejRJdxctuNAzzD4fj8Bq",
  "key25": "oh6eXaAGrnFg6bHqj8PcHpvn8zrbPVvoTFuG3STZwtdFago6bUQ5d7KKyESszemwdRzqQjykYprUt5XpxuXz7rv",
  "key26": "3RMeL2MgJPxX1oUSFhQJyjBcakR7Q5MJ4RE6EeGMUNX4yQsTYmuCqymzUK1mw3fMQCfV9gwQPpuF7cHw9kHSFpPe",
  "key27": "3i4cSCsnuqCfXgAkWrXhxMmTKu2w4Hbjc1TxNS1vc4JfizkL24mrAU7PGFTxdWzZsxUaC4dYMsvvNAwzMiFR1QWj",
  "key28": "3272bZkx5kKnvSbVvtwnHtFLdCmEpeG2HA4XvKEHEjNyEjhezK7HnrxS4Q6ghhF65A1G1gMoLHo64B8cqo5bXKTF",
  "key29": "66b8rFfpaktLWe8b6arjMP7WdXmpikAjhW6ySDm6HdKZMmncbUfkJUAZGgQ7XvNu3wvLgyqyC5H6ZThYcqNqNMDB",
  "key30": "TqZe6g6rCFT7usT1T1yow2nvfhS4NknQCUbFZetKQR1mevgYPs7CjC5Gt7gaxtNw6GnNskjKbwNcDerrKiY7cnh",
  "key31": "G5hFiXGSW7tvMHRLNswCcDQnjDSsAoiai2PjmR3X8Yxu6EpEyHRRq4ta1MYj4w5PYHUYLaVXZsz5nQVu5euBmMu",
  "key32": "4gtb3xBEUaRkngxumKhZEFXeu59W1AwbMaSH6tVUuDZUTui7PztCEzb3xzRpiWSpD47iTtWtnLwf6yLXZYUF2QAv"
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
