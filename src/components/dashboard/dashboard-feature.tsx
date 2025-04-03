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
    "4m7vquMsKjC1XFW7rWjaeXxDAFk43bAGmeZUGeeyhqzH6G2PVfNsyFWEbhhLnHMW8Z1DBLC1LszEsPeEAG9hHaB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHJsWKhHimptBnjcCNNkR7PYJUfttZWvmzXfqzDXRW1xR5nzKpMddjdwdLp35RbGtimbxQ9hq1SrtsyedheJRyZ",
  "key1": "5iGeZZm3LVYHkEX8yEXWRuUhrBNXHkSTfRQHUkzRwQB3a6uKkE8kvSdC5ZCq7wLCQPgwG7KTaG54oet2NDfMDuUR",
  "key2": "2SscK87xsdfnsXMiEaosj3mN5Ho9XMDoHMzi8fHzLpg6jqBBvZhpN1FtNdpgQsGV89MCqZgtenTsZ4ftauRGzMZA",
  "key3": "3PZiSwF2HssAnvwE1ZV5jhAi6souRhkNtuUbd6mHT2Nk5zuP3b6S9QfvhVjWpks4XsLc6X3jWRNEcVRJZGA4BPEe",
  "key4": "4QrKqiLBXuKmB7hy8HmfLZdQAca4a8BR8zJvSpFG2nmXZGDjNeiMj76zkHmi7yFwfhypHCzbMtxSdAPDxfN4ExbA",
  "key5": "2T5FqZV8PzFWh51YTJrmeSAskCRbJvD7VBQQPo3DPwhMS5fY6QXAFLtEBLqeKnKMbMJqqdzBUw75V7S25LQBTq9M",
  "key6": "PJYsdpTFdLtijzhZk36fucShbJQRXea9LuDeoVNeQofPgF8FCkp7aAQoLdgtznfyVCbK1ucxnACWPqCuZ2Hayfb",
  "key7": "4EAjx1ZH9YAFTdNY7EGgksuYQ4yKnZBetpBVkZJyGdATX3qozUPzdbv6eCHbLvkB6fSYaaVPvDbVyzjiPBGFw9BZ",
  "key8": "4TtSk39x3Tgj3CKHMyPkFxeRaN8ts8jia4wqBBrfSTWHC6qYPYvbiBKHS9ugJ9dgvRjkB1RC7Yz2WB4Za1QJKQWH",
  "key9": "3J7ZxWihfry6rjPtZ6uLJ99HMqz6ZY7yLT8oNNryr55wfN2gc2L4SfZQnJMi2z4gWaBja7cMstRfiaG8rsAdrts5",
  "key10": "2Nx9NgjT4u7D27Qr1vS4XY1XbTbtdN9jXGRChJLjUBUD7T7BA3BuHhAfxZHjDq9CFCdngmi6Byhc32jJUmr8ZX9P",
  "key11": "324WhyhuUEo6b4VjdYP7cL4vVg4GyRobgajjmn2GyJCDtu4zKp8ioFY6rGxzJ5QbpYrHXTDcGuv5byG33Y5UeMnU",
  "key12": "5aacUdtCTcivgD8oSNFUxnM8AtHWbWDCjAWq9xnsyWX6SMDo7xNi79X17E5QpQTqeDSnsEP8w5WY5mywyrbQnSwr",
  "key13": "2wf2pAEzs1ZMYvDcrYmLA9unYLibfkNGwhRUXPuBFDE5vFRpdusUJfST25RhBw5hBrrRVrKjJD8pjofseY3pFtpx",
  "key14": "2ivfWRSm6VYqDVATRpY9k733bYYyZAE8TiCyAVtkmdMFRKeUzRPSDfT3stxH5i6WUMQF23m2cszMSQgPjd6pJEfi",
  "key15": "7SeFGiFkcd95JVyFPDRE99x1AGkmagBtdTshgSccN73FnDyKB6PH3U6TZtvsDNyWNeDtWKCg7Hg337EMBLMPrwm",
  "key16": "4kwSY5Fc6FD3CxLZqmMa5Xz72UKRfMK2FK8BA7RgUb3m6aYPe8NzuNgojWvgQ67arPVFrAykCHc9bZujm3Dt7aob",
  "key17": "4mUqh7UDP6HVSdDwkWmVmUij2uBcGkT1zCbcchNMAFV7QkhmDenuzQsj1RZByrXPEXgNK3FKQKLSSoXay88DhWao",
  "key18": "3yxYSssBXhvndcyhJmUcEkcemgWWnb2sJ2QwRzjgARfjc2XETnASZeD4JjR6kekSfSc4ezkyggoSVY6VPL7XQ7tW",
  "key19": "2nYDgi8UBRZQsS1qogyes3YxJrTdvTnVb12fbMTeVfhkWCrduVaehPz7xYsfkzoSY1ReBLTnKxxEEEGMVg45J7BM",
  "key20": "5Vq4qzxJCnD6yxtYpVGiGZXCS846itJsFZiKdAGctXMnQxSEShSoff19svwgfNLX6Hauiv5FXQxcHFWp4pXV86Fu",
  "key21": "4VWJHE4eSW3AanLfdXHZwEiC4AoYRdvHi73yBo1xm9S3BChkU731GqxjNADS2NUWqqfdkLE468d6rDM1ww2tmK6V",
  "key22": "4qN53VsTkhGr3m8D2trEcRkPRo9tWpJGeHsfo6C5iSJKb1vG5V26xyBnVkwfBngz5dAeEGC6WZ4hQJXmRXaQfCoQ",
  "key23": "4tu89n1MkxkMHH8MPTHuMoPpYvkNVpoGy7p1bFwwwBorcW7CyF69RirfT5Pz9haoWC2h5FS45Viha31zWmyesopX",
  "key24": "6kyRyxVr9XssZvaQscg6t4aEawAfnwr9k3uNfkdWUTXKRX2pPo6cdVUqW7FL4tsFRSnUGtcPC2VePdzijjZHoki",
  "key25": "5p8jqcm4o1s6T5ZUBdTfqr43bErssLkD1iv5AcLoMvN3f4Cw9LKNVfL219KYKYGMyXhkJinSKXnqMDuoAhCajAJV",
  "key26": "5YWqGPGkBrwooTaVx7UeNsiQHc5hABTJbcDQhXq8S7D5CKk3bM14JSjCQQmH1sCn1notgRDe7vdSji569WTgdec4",
  "key27": "5SUgurKwX5hDuvLFeTE5VWQBKApa42qFtnu7ifdocwqfe4s38aL7iGXsRPxXqYePJPNeZbp3fajDkTFWVVtP4Pn1"
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
