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
    "kBrrUEAPVYtETRL8VyQrHKscxquHrrzfQ4oYg4Rzw1vqq1Gu7BUd4nrDmW56hmbkvSJ1VXWPzv4omLXtEJxKAcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8Jnj7ZfYPYChYJ6JN85Z2Xt2iyKPrwrvj3sxtjtKcWB6qY74z937u2W1EdWd1JffsEeD2EenPqdwkEaCViy14s",
  "key1": "BCxTVPRLFDhrDf9wLDrRH8HGueR1L3LnYUqf8Kk5yT8jXiroXbPNsVbnKU8ZK2pSoVUXuNgBiGYf3TmVNcXC9iz",
  "key2": "5LhopcK4QD16hi7fZQ9bnDKXGKZrzwmv7qnrKCWTsWxUdLoXvpmpHXUfjeCSyGUY5muYsC3ZEdxS4uMVpSeHntmm",
  "key3": "4MV4fYVCDxNr28KgHi4AxHgMw1cWyQHzAKxxPUciuWp3z8bR8kRtmpStLvup4uTTZGC6jQziXQNiKub8oUwygE56",
  "key4": "27LjbB7yuZgxqACV9pEuXiWHY61cU29TwHc5Y8z38bc7xrvgwc8XZGBh1JYhXPFmT62DK2rzBFCQsCpwYuLT2gqS",
  "key5": "5bAEznAs7yMDUkxsnV8EvogYp6qb2mbnkMRBgf5ToyfJgyNbHajcioLmPDo6kVCDxwbwQ2NgST55siZ3QT4RT2rk",
  "key6": "3DZxr5pMrEMFC92VwUmaZh3o2PuZvnns2DoKCS7X9ZmNaFVDT4pdeUerjWr63DLnK1SRxBsJgYTH8ABt7PyGNE27",
  "key7": "5BZLSCwkvgXLKZVJFpyGnP3tB9xSMHDGUzKrKD2uNcLcwT1Yc68mA28PQWbcssrzyVDHqhwGry8S2T6cSWG3KA7o",
  "key8": "2Fzu6p8D7CPYsEgGvrBxwvyPhW2MpCYjWSHe4eSo7Lk6BuaYpgGXpm2shyAJBdkmdJGHAZnpHnfLSq61eCQG13SK",
  "key9": "4Jd35At29B2AcsFaaJfPcSf1rkbvKJhNkDpAK1F3vqwnS4MQVExFgWjHRcdQA8UJPA6o9cXUBixx32pBCQxd6h7W",
  "key10": "4q9iRNV3MixR1QddwMxYQQS9p9wdjXyYkMZxKcDFJhdjXV5k8wga1rKPG9TBBuGNnoD31fDcqoHwcGCQYBNMezPs",
  "key11": "2fZfkVTQ2ApzSVq1Xm95kq7cHzRKa5Uc2ZmfRgaHo2Erqgf59JRtqNtxRBeBkwpkuvg44qeF5fnRHojZT8PPDNnk",
  "key12": "4iB8fXg1QFjtcPmtzWMDfkoYbr1xCxtBSHQCb13D1ZA6NnQMMzvfxnkPWrdeq5HVZrDwe6boEs431MsT1yaQG2id",
  "key13": "2yLRz1zanAjesd6SYi5cdqhLvqpxuECxkBww89XqcR7NDQA4fHG7kySB3frEHspLpczFNjA9nV1uNjf88QfDd62A",
  "key14": "RVZ5n6H4jcEi4FvU7WjmAXK7kCvktgtAjmtDsfCTQC9zp6FwNoD9DS8NCqVBktPFY1Q1rEdhHADqkke33Pmw4zx",
  "key15": "3CBLHAb8zHvZcYcNyomxeWgbaGAzmxpitvRC5gFK8TponPViddAUygrNZHe9KwVfZEYNskuNcmtLb24EJBVfXc8G",
  "key16": "27ax9gSAcS1w53XYW4vdq55mxgZSEJSj792A17eaAfgtpmJWXkRPiX9uDgoDjpBJNmWQCPGEPd6bMhdeJPHbVQ9y",
  "key17": "RdPrJi1tdUWmdsdmR8hXpehSXWzYNZ6sRaTPu7bWV73SzutqPipjbdKaNtzxNqm6G2XB1mVooKMVd5RwFJyta5n",
  "key18": "BwGstMEEiFGDZCMVDpQStCfhXNut57HqFkSJyhJxXHEve39yiVjKpkwax1g5nk6U1bNemmt7nsbiVUNUgBAW5E6",
  "key19": "CYfBNVKWkcjsGY1iKMiAgwR7cuXJhGvPZ8cNE7yDfuXrAneM6HJZ3N3KYT3Uxup26a38AsrDgRxyPzmYN65W5dA",
  "key20": "5qDVgYAjtLRSydDMM4SQm2Ywyiv7XjLPg5frWFDRm2vsGP2xNrEoZrjfGneWZ4PhkLaGftNUgy3cqxrFSNrxqci1",
  "key21": "AwNF5cyJaGrcmFYVLCCkSaaAGtnSZge1ddyeWpQGzPsXBkPdcRNiEjGysnRL1nCAGgnKi26uAtWhDfgW1HHT39d",
  "key22": "2BWqkgLg1St99hc3UqZz9ofEPdHGWhgxciscG2dY1ENeJ66EKya2mCSXwV4rfPXo1dNDMVStC9eRujFkf1awGwTj",
  "key23": "2hkrKybuyqWCE1JEfjhywnfMAXvuELsrFXjByFVykLr7NuF4DBjKKF1KFZFSEywkyFbpQVddqnVhzCqsmvgatveh",
  "key24": "Bojnv64zNu6qUddJEUVSg8WVsUL8XsCQZukchLN1bYAJYREuag2gYMj9mdz3epPsLiA5CmfpAhzLcLQzXg4Jha5",
  "key25": "3iuu7ZnwqkU4uAkPhZTU5HWpNsL9iWSgeiRrBCLQnpC4MDdyrXCubmkjZS8ziTSXAX3KXEFCbBgdXNDgfQqjKVaA",
  "key26": "4NXnYzYa8NNtceipEE6ovCAzzFvGYQFFKjZ3q1UXwBfUmpmsk2KJj2UNee8xfqTawSuASsL7v3DTUUTViNXP5ijp",
  "key27": "4v6GxMpBEcCqeErUhVDZPDFRcwv7sWMWKM1vW8EdCWJ6yCV8HHoo2AporPLpTwdWWNQKvxhkcejrh89yZ9uGCdTN",
  "key28": "4JG3XQm1gvSZgS9JaGtQNC3E3z6ZeXEQ2H6Shh9zt7ThucKSyAr43bhSnADzbLKEuqcoW4Aq116e47QadfVDgjMF",
  "key29": "51WypNNeLsZ5MK2gYcwTPw5rnFxJsrkd4HcZiCEpgGJ6WejSTJNdmgmqo3fwQhawZtfB6CnwUMVdzTJ7mHxwq97F"
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
