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
    "5SWmqAKhvnD8iQnfUZtX6wzH9ZpufcsNNDYC3ckF4rFBCSbuLB2RwvpgfUPxmD2mnCUQtgTNEELBHpNN2iG5wCSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31v6nzNHmwBZ981siizVyPoTQyeqoyrhaRxZb8rtYYD8iEZUJ4BmGEi46smttypqKqqyfNefDYLaEwMCJ1UV4DJb",
  "key1": "5dAQgSWdwWmo9TGPGZCxrgLoZqjiqfq3mB2z5hRc2WZPXaP36CsuDx1oXqwyxY2MDLeb77mwq5YSBFRTp6u82g2b",
  "key2": "4M9y4Xb87e7HHomk5WMC6bc7ndMgpcqsFwVFZRuYKXZSYk9FKof234P3Vn4HXDmPhPA3JYYR7r2xP31P1SkbVSSA",
  "key3": "4NoMpqPFT97LStvRgJFkjuYSLwgMjHVVxeHgb1yrH1G5ZdTupLF9kY1uxSquW52D9UDQcbTcZv2ZSLQcB2eE85GK",
  "key4": "ParfcBGvYNueXgGjmRp3svnSxdz7HY1G5dZbT1yp9zavCDbx3exvkg4tew8YMEJ7PvP7uXj6xrFvLKuGMrjAZtu",
  "key5": "5KozcLzDthDsxbvRKqzCLnfEpFLDdbNhh4kufhy7BjGuVzWhRLAjrnTQr6SK93AwpffRA4BCHDBtkLNYdYt9owB4",
  "key6": "3tGQMz64CtfJ5GbyTEKyZTAHha3rE32pJqJyg6pzutexVDMPXKVN9EjWZFEWzN7xRBZtRuq1W7at6nbTU3HVDGQo",
  "key7": "32RWDmczCrPYgBwFjqRyRjAL9UP2XQyYGRRde4Mbi1anTwxHDamrXaECHrYWK4Dq7pbV3genhm2MBtHkiwsAeSnL",
  "key8": "3obe1jM8tNVmd8vZ5cPW2hwKKVNW5yu17bL7VrssBJReiDRyh5W1RGUmReLM4NRxLyb92LBkB3u4qfCyUB8n3bZZ",
  "key9": "dQvMQYXBWPxb3NfQMYXdHC3R8oevhXXVeQnjUXWF8C7xHogLjnUA1eFad95SvwRREYTZi52auTXPB3LyRcLMCRJ",
  "key10": "5XvsARZn4URLfidBQiSkhC7EecDkCkMMAXtnv22oDxEQ9gAEG8DKPg5V7eR8w1D4U5F1hndbAJh8vGKbe7mxwMWc",
  "key11": "4F9fvaXBdL9kegY1an9mvGZ9dXiEk3RBoG6kB5CCeH2y8v4kSum9UYnqp7Lffvuu5KzcvHLFHG624XQXdjfygWSK",
  "key12": "3YgHVkjMnH4kb82PJXBAiHkL6f16VKTQHbz2k4J3VyV3PNCeJdP98G55a5d3xnrcUEHutTeuZqpVFHHJki5rfKXW",
  "key13": "2hfa52vKjgUQXzNidwQ9CQpFzBzpkpwPEp2fNCu3RMZijJh8BTvvNgx2ueG6kPiTp54ZZcEFVFGYn1FcSdngBjkE",
  "key14": "5sGfiv3RVCMauDdxncauZcNAuoFe1atj3oR65NtQmCgekFUD5NwXSzUWwN4QvmMAWnvUNas1wEjuAVsS6C4YrJjv",
  "key15": "3PqeMGpQiHXfLS15LuPbRRBYHKHGz1XTr8WoftGVfbFRzzVGNGWzBQkdePGsoRfSK3HBADRzjbjmaKMktCqtWTKs",
  "key16": "3s87W1Z8fgA7tBs5txMG92gvfRmRBioYn8MJRrXaf6FMro4zg5ycfrqyq5LiqJvrCa2V8vT7ea8KDKowPYNcQ4se",
  "key17": "5vivtPKUz81TcRusKi5YT36Z66DdoUnyGfDThZHUazdgBbvJdb4thjeP1LQBVnFrtANzXMGQdKHM8b41NbHJcT9b",
  "key18": "3efzBcGUjPebyjVhRXUW9e2n7uq9TsaYXPqfW5kz1UkqShb1deMBzy8y3cjKMQG97o89R6auxYTrGCGjg5BBo4Ao",
  "key19": "3hhP9Ka3kPagJeGK7Jdmc82DojxMDTX4pu27o7GHjDo2wzrnV25WSKTx6g75jvvU8MQqRPHibj8hitGMxNgeeXYs",
  "key20": "2LCSH7FBboVUoi8LorqhutVaKVwfc2Q1yVv3ZJDQgorTxX2yiaXayDugEmWCdeY9KvF67sku4Nfh9ZvVhUdXud6f",
  "key21": "n5X7Eu6Z1wwQVzj3gKHypdHutmWRGdjcgKf2FoCu6nfAMaSz5fsCmLsZWSo6rUgs78rPL6d9tLTN96zctRDiiUP",
  "key22": "23J1wQReCC1nmiamJqsBg4Aap4mX2M8ipC6RWNLJyi3j87QyxGCdcyFh1kiQ6Naer8v5m23381SMkp7h7ehURMv6",
  "key23": "4Y9Y5aBYcNMdxLZTEKKiCJwPdQDr2eGQX6beMXB4KypXZi5HFET8FvmQ8wSScWp3Rq9u9QHDTStkAbZZMMDZS9pK",
  "key24": "d6fo5yY6G3iPLEgMNisbvixYbZ9n1so8VTFqZJDZET8CaF2RjnMBgnLou8Nqf1Ag84wkjsETnc58htUbbifyAHn",
  "key25": "5qxux9wYvSLdZhRzi7BobUUMaacPN2UK51J9vTURaZwp8paoS8rr2K3gviQvFSydtaPNWoG3mga5fBXvBaCoHaet"
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
