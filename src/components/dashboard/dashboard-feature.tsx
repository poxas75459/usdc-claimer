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
    "2CSqj7eQC168Hdq5BF8jR93V4KAgBVodNRQBFmAMbqBKCdZnFrF8MgKuzbdhnxcKqoLG4vGjVA76ti1S9aQet18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxLJNBg4AJ1G2sJHTVySkAjTFvh4eBELBBTshDxDGaid26ieH66CosEj3DkygKFxpa2fkF9v79ZiyNzzViuSEji",
  "key1": "46DK36FP8E2uotVoEF5gwaVRMfuZYE1PKZ1GEfJ9KHYUUR4q6s9KnxKwoP9pu8tNdQDhkuYj53nZvrNddJ48XMnF",
  "key2": "2Vgq71eWbXj5czvfZ7c1fxyAYV6RbHih9NGdnzfn79TQjwovvuRD3SHryZufh8ZW4AuiH8cGXjEdRn54uic9KJWx",
  "key3": "3nKVwDAXWnKtrcAeQ6LdXhxYUyXgMWVDpdX7uHwJv2vBGBWiX6ntqAtgteFzFummxudXHpqHxRRCwiH8MCv6Cdab",
  "key4": "HxpWobjJXk5vTP3MHwVwLmjKEr1cYL3HiHnjqksfXpE92SRBGYcCeQ2npk959osJTXugAdXYijVZrxcwjSFHiVq",
  "key5": "3o6KZLcGaZ4U6yYncWxbr7p2ia3CpWVhCi14S6AdWcqk7n3wcHyhJJYa3FVfqTqhxXuXEQ86dp9YggzGEFX8cjaV",
  "key6": "2vdckdLkiYUE2KKinEu6TRmbYAoYgrwztgFsjd7uQDoGAdQ5NQxKVFsLJe8EW64G1A2VJ52a5KWq98N7VD9U7qJx",
  "key7": "5fyyXywPKkddMvMA4CScwzEP4UbviAFpDvBcxrptz5QW8K78seULhMDbSJqzbVuR9B7x7rWbeWccfjoV7Pkidm9P",
  "key8": "5EmwLeMgqLSiJKatp3wgf1nK5PsBhC3BMG5rB9S2T76bnSR97oevk9j6DjLpiXnTSMy1KVfNQoS8BzYH1LQS3uLc",
  "key9": "2TyhSchSHjJHSvKBjUmtJeW7tTfqYnQDj7nT1vCVHyKrCwnFHmV2S758VYR5tXTS6Mkg2PDG9X31zU73XVjivKkm",
  "key10": "2JxzUT1DEcibYwsT7JcRsq83NQoCWiYDBBV2yEcCcNnqVSDrGdeJZ62RtT5Jgvz12r4vRNsaojnPo4zXwJPgFX86",
  "key11": "5TKUA3jaWeJEJSasXg3nHWhqFJEgTkG8QittFfNVxhUpuLm6znQ8ohGxjpDu9zQ4PmYLu6sfqTtdcXY9PeSYugbf",
  "key12": "3iErrQLwnEjhdvKXQVgD1VkmS9ybEZU96qgm9aU5Me5p1Pfmpg9QmQCrk7GanLDEujxYnYD1cdqXK3R9JtYsg6sQ",
  "key13": "4NyqCjBKS2UTB6j4MBwJvP1XQAPTzN1TRaEr19dnVSBQJUXVQTPksG5qknJsqsCUzwyTu4qNN6NTxjXVYKqBNdfg",
  "key14": "4NhnvJ5vuFGEfwumvDrMsfQMnGJFe933eSsP1RetaXsxLw5GXKkp1kjnDWKy2sGSmh7PZ56dUeZ9ZWkFQLLKJk65",
  "key15": "3Pbzf5Fqnp4hZhw4Ry3fPavnGpCjJ8wY7v7vcmQvoQcKUNWZiwi539u4kLSyV9Jc9Bj4Ju1GaMKh5qr3Ui3wo1tH",
  "key16": "3suGQuS4NLT1uzhEwVDdrajniDAyoepnJZhR4BKNqSZTpD8QUhWrL4Spq79Sm6N1gDPrmigS4jGrpMFJi7sgdwNR",
  "key17": "4vLfpNx9HpQWVt1aTpKtrND6d9sjvBchkx83wTCtMUKvzuGcG32pDXAhvvpDT4YiijrHosY18pUraJ2fSzsHhQCS",
  "key18": "9yMDZiySugKve6vpWxBcuumnUfWN2UcsamyyYRpJYnCpSPrjkX7jn6EowFQ3ofdbt41MPRSG3Gtk7zGzdVTzidu",
  "key19": "xy3hesutRvXr4vLwUL1oXKqzx3urTDZ9pQf4MHzLAXzQchyZhJsyPiupF7ZpUQB76rbzmDhPXAEJ7qg6KsSgPAw",
  "key20": "3SRvnCiHs9jP3uNaad9EsPBQBg5kcvKeZUbfzSc4pUZAnorq4aCTKMXSHigFwEwyW8XFENyLitfSUTjceT9SNzgj",
  "key21": "3gpABmKZLoNTYbRNG7FKBLQLkPyaenAieGT9rvqj3NrBvxNj778K69tfikcNQXb6LCaUdHQU8zfj4cADHyyHuytj",
  "key22": "4u1b3zNKNnKHwvtAmbj1BXqDxCugTVVuWphsEVdH7ATgurMNitKiDhGM4TGAB19cBK9pgVnFTYHVLmcRVZ2mikH1",
  "key23": "5EbVhzWv9GyPBenhEb2cHHtBv6SYR8ijZhJsNVmyoLSBppa6jd79izsFmN1eHDky4AbDQf3pLCCTEaw5bFm1UcW7",
  "key24": "3kW1QVqyxP1it2KF99XLFTC4T9JbtvnMnuptwijAtbnf8XEHKwvMZomP5BH3UffQD9HXGExHgF1xRNACLuwuBqZo",
  "key25": "3vY8EW4su8ohMnbkzSnb4fjb7EXX1VtN9CcYY93aPiMx5fkGx3EvVkDKrWaDpV9KLXSMYMPVa6ssGYTP7arRGcM7"
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
