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
    "AcgMuSqNYdihP6Q5mGh3TfNy7wt2pVxUfVkW4KTcETHM6cuWHEfEaoKwcug5wJcg385Ya3jmKsgdDDPpH4MgazX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAZZJcQ3XLjwDYvUKMYDP35FAESxzypRZzMpTm7wfUBp6UKoLKoaWRejHsqaLiUd27u3uqURNGC2Md8UboaMzis",
  "key1": "4CdypmStrtCj9ne7ib2LsHejMYHzcdWx4E4uf749W3S34WAG9gZccP75LBBSte1MUjJjnWdKTdvbMVdo6bBR78QD",
  "key2": "4Lxhzcipv8w48B7nGvuqbRnAGWmAQqoUECpsxoxbwTEuMz4D62mCJrXJNQqhufB78dd7sw6cuuACnhvLYWDhnYDJ",
  "key3": "4TX8nCWiZvEmzXwaXpWzSz9UvVXcgCAi8Rxwi7qVsVV4cvrz3L2F4TTCyGo7HdRQJBAteL4se6zFmUGVMerTP2Mo",
  "key4": "4mkiimp3BDgwZXxsq4Z212ELHiMxsn94hqLY7FZq3RGi5f8F6MBM59JcdiJLD4SasMz617aHTaAqoEZDi4N99ixZ",
  "key5": "48c3AwHRcqKVdAUAcZ9bqbuy47aa2EjQtjWfCf3R7RWZaqCahJWNsnG8W8eY6zJvpfN56vNrBnb7RNvARNTPKsEY",
  "key6": "hdayvEKbvCM1xS3tNZDptscy3WkG6Ve61s6NnFAUpMnpawCjgpffcc4LHA9eT5xLUoMo1sQWHDh5uRoYUqRUKP1",
  "key7": "65BKvVbGRgRrTHhFCFGEQTf6hDMxPc2ujaqjCrC8FEm1SAsA2RUwU3yi4WoGb61DmWXReVit2S6FZYApAUfccE9t",
  "key8": "5L8f1jHeBuzWSHRhNR7P6Jhoaut7wUF958Cm9GUdW5zwsdrbq4Wiw4xpJvcZBpFRfprg3akhKE9s3QzcaWUeEmyS",
  "key9": "SNoQwxkAmUjY9Z4Z4Mzvyps3ZUorJU29BWSq9TQBQ4Xyk4FjBa6VT7XzFMb8Y6nXmHFb4hwxwMejJwS9kTvnhX3",
  "key10": "56qXcuqmDtLY5Cq58BWpeywba7ZVSU2jyq1b4wXWXNBEptqFzZesMgEMAH8bfXu9nwBJAmzk8YJfGDnXFrp2sXZS",
  "key11": "FxZaDPKVMARv5JzNgVhjJ2EZJFSaFRdFaoBnRgZgFhHwyPxA9aarHnZnh5oYnZ9vSPyPz77tpKWjtHteur1CHYE",
  "key12": "2qtZcjFFUKRXFUZu83fMrSrN6LRmbKdnwLs4BMvrPXBRv4BbWnkrkkhvSpeBgXGrucfgDsJH4f1ZzMoueR8nPa1f",
  "key13": "61BrbFhJqgNLProVbCeXPs7sCDVwpyhYfXBQYhSwx6FdCaok3VidpodrBKZrhxMCfmffaocmJNkbkaTwAnNjMPDj",
  "key14": "3J2m94Jg4JUcAbA5wMB99DiZoY4WcG1NRfNmTdrrhqKqF6pp2jW6LQqLS1VCUkzhTzmqfr1pcbgJAMqsHnAZngF8",
  "key15": "2H8tz6jjayAuWC8bKPBKPSYDqxPETtNTjWPfq76nuPhPcD7xx24osHzabbcTLoCaDWue4rZhkL35dLjPo6EV6YDG",
  "key16": "3Pb9nYeHVvJ8JGsKMCgQBmo3ARY3so9soYUL4zi7Hz6aWK5WnwrzQqSPMNmeVNHZDCdhJXXoxeTN1kjuJ43FWHs3",
  "key17": "B6VsS6XUjXewb9SxvY6X1Xao2m93uvQ9eERounsmEAHtnAqPTmi8PDsBBnG13CJPzkzuAxFTeZZzaCyhYiphiQn",
  "key18": "2B4oXUnyDLMgif87eXMJnUKKdWhYAbxci87nGjL628CEQMJLKyZ9mcikxWCvCrFxzinEhNxTzj94LcFNpz7Wj4dA",
  "key19": "2gv6KcYTXk2HNwrz2QLRyTL4zcdARrLbaXPUxG1tYp8R3xK9FJMg6rBXsNPAADDMAutEesPEnFYWtHYHv2rs4hSf",
  "key20": "5wBdbztjZ5Vg24Cnz1RewjXDCn3bx5fhKp8pUfJMY4U9zEwRhuP4B8ebEve5qJsByTg4tsyTauKq465CcWxuHVB1",
  "key21": "4sQwiBwwfRWa6PWdAyVNEehns2dN7Ry7bm9Rj1DFr2mUf95eyzGHGGbz1SGEQMj6mm151YXBzoVsewpbTyB4VsFy",
  "key22": "4h1Cs8tjJgXP7xHheQ1DLd6nqWcDo8HDMxWViSpieiDeQ5rBXGsST7ocnWMuXvwD42rYm8GSEgHiPbHmRxCjZ5uc",
  "key23": "4kmrpzWakTPnUT8SrDYGcatMCyhjnm6N6LuZpfd9CJ6BLShUnF1brpNYK6VrCBaM7vtXsMRaSs7K1ZDkikkSzwHT",
  "key24": "3Zt8NSYTuU2khNQCt7NiypNc8LkYUxCa325fNQGjksjb7ZFd2BLntKHCuizS6RqWWAEHGrnQfiAP6FsxPZhy8g5q",
  "key25": "4Wnqc9agGaALHGNzwma9QdZMjh4LfEiwaTDwJAyprD2QD1s5Wh78jzP646ZGuTmwppNJ9ubFcaHrzf7Jj6iYJakA",
  "key26": "4FSSpevkS3mPSVg59G9bRmfBkKRaaKrzzYyWwv3NXUG9F5ehXP5AthGMoLuCBNe1vY27a7iy1E2Lu9GBLTa3NTbp",
  "key27": "2KZKEr9shEoE11YyEQ5PXYYXeEGukdFx61iiWWK1X6G9zeyqhfkKP6R3L9U8qeoTCsDy9U9suZPp2m4AJXJXXz7B",
  "key28": "25xU1T6E4CG6fCu1r2GEfgksWAAXjBgXebQkmkEbcXKhqb4M7nqxKDorq2PUrmHKaL2eWABwxD9wBKro7uiyhZLs",
  "key29": "2bGbPhpPasH6xGyEniCfLy4uzXYFu5fuW9jWN2EyWbni5eVvQZqPaFLNsdCZtHAa4NFfdogmDXq56P7Xb9URBqDW",
  "key30": "2CLMQofEAPtznRnddZmvq6NF14BPM7DBV8cnKS8X4PoJArvCCzpzVjDYvvrd1MpYHHDCYq1S4C661qToGMv2YTmD",
  "key31": "2sb7fzFopYi8ftvDbEbekgrzYcZQ7TekcQLJHCPRnTaC8F6QNd2mzqJAu1AJgovKdrm5uVdEpt5qusSUQvGy5eeE",
  "key32": "3idX23XdnLLhGM8WmTrJNSpfbzpXRBS8K1NmEYwy9h2wBVTgwqcMVU9dTaT4AG8VKppshxhcKEtmjZJufnLz6jp"
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
