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
    "55dWNMCugH4isF6hwfd3uyBdqmpJKjPT2w9uYQvig3Aw8xyejzj4NbBHVyWsw6DG7USTT3RTo42mzxb89Ggjz8qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8kR2k2LfXcjBnSX8FPpqFTCwy448Tv3QsePmoKBMri8599kNnAhEnEZKvTzZTMdLu5sTfBCoQFgPavkhYBJErr",
  "key1": "2efEq2pAdvNtX8A1f8zeXMGbDhfr7FGzgrMnvjgn5sjS4NKYa5yfk3fwEQMeazDyobMozkGfsfcQC7WY1Q11ugbE",
  "key2": "57isKZ2bNwuFA3p4y2tDg5XW4ZmZnoDnqrpbe4rNa8VGUsfF6vRA5NXimLxW7xJpPoWDBAsuqKchFTHbWSf2xW2",
  "key3": "cUyYW9gYHkkcTGGxQL8AGk9R81WmuJNy84ZG3XPUHggGgDCGSysVYfn54L7yqgYnwFLXcaDrLVb9d3NtJdETHTN",
  "key4": "3DZYKCyVj2VD2umrpjCmF8XoWR6FNKFRSQgoRGUFijTuCdgeBfXkuDft9uSAn3s46Ggb3XAEpLXv8YGedYjViifs",
  "key5": "4dGku7gxsNzf2nhxdVe1huk8xcoNaFQMqfAy2YSBpnsJR9wSJvvfjkE1qArmJQBiqtqdoUQayquQoDWQgNe5GLFo",
  "key6": "314n5gVaHJsdfXXf84Mu1ZshiZW1m4ZXLSFTMt6QDRpaZ5Ju1RKgrDyheYzxF1HrKFkm2sTythtVThbhn7jvN5V",
  "key7": "3LSqSHegu4tJwoez837tfRNxotaNipngfFsegizwiaWXxmXCge9xWNtffCjypBiQL2k7UP1zwMvGRgYGUt8oEewF",
  "key8": "24x2xNhsW6QrgCTdCzMWR9bcCJVmQv7oMusWP2E4d2NijSBwufg69ZUeYrhEM4o6vyHe97kyDFpGgP5j7b4yJiwQ",
  "key9": "fw4ruLUimaeKxhjy6izHiU1bKwJoncCK3JH3sY3bqDmsEHBQYAnhgUdUbpVXpd8CVQMK2T4g9ZSWDaLcFUbTc7e",
  "key10": "3BuJwHjNUZdZC3tWs5dYn1Be4feq1CuS1dHt4GNcN6DyFd3vBB3WpGJENGDdWW162G4yGctJGzVyXNX9HrTwzuta",
  "key11": "4payTaTmpZEZgp2wwoiomCLeUwDRmU6pE8EbT4ERoR8jAS6kAXNYNAzx39MUkFpEkZLYAkyPeLXbxF7KYWeDQPYe",
  "key12": "3i6ebyyJqCuNamPGkrmghP3NR5TqQFMSTGMzvK3ACQpPSmqH5wbxZLxfXF72eubtgXyKin1ZHxLEvbLYn6xM5ZJ4",
  "key13": "66152gREGUhYg8eRrev21Q1AGdtSzG2Zbif3dduWGvj1cZ7PDdjdnRUrnenxcStuiYDDQ5EEDDndmo6sEWPcKjcu",
  "key14": "65DdV4xv5Jwf7gQd9Nf5hiB69sct9WLrgyJHc5W8NAFBmMU2cxN6fiT4JSWxCRHp24zuwZUMbSZEPb5MwaShn1Le",
  "key15": "31U8m9HVhiYLDkAziC1kS9GpWJQTEU1n6enSrHf9wtHcRLqZEZZzmgoGdwieGWMvV67sHRTjoHkW1jsLzj9gwzu5",
  "key16": "2PJPdwAWWRzM9SkT6TtKdHi3QPKgKP3swsJob3DmmQwRc1qzg7Vc559NXHoxvawyWswFG1JigNnyTYjzDiYQw4uS",
  "key17": "2NFPVtbnL3JS8ywxJaPvYRSudqfezfKioGUVUREvQgmm2QhLH75XTYhZpExsnrw4fq8NEDWM2XRSSmuCv6LWN4gC",
  "key18": "4RiTjbu3p1ia5fXazBKHWtHNoPkCvScqaqxqXxboGUdwcgZCqjAUacUyBv73ne1xED3WzpgWyaJMHqW3fULtkR15",
  "key19": "4HFDr2DZPBUod9Duh4nrFpNLYSvVSaDg431BGgtR9yXcuyr7ys783MPZtXaJzAVYmXFR4DMcjBwTERpTv39KBmaM",
  "key20": "4BRMeH1BBz3KAgDHPBbNfprm2enu6UYJ8cEwgn8kkesu2JF5jsTAUXCR4RqCGBoscDEbhukky6qZtxMooqVeSBSo",
  "key21": "5JTaCqCjuMxmxdzRjLGAbMzQJSGEufnPMLwaYsGCQGM5SNThbgz6JtDUuoQzWwGbQh2AQmn2TT2KxtQSSiWgsvEM",
  "key22": "2JVSrAC6vvd8R2FnBy7J5GApjnKN98aaxHaWLzi4zfRmrpxMMaPEeZ45yK69dS2m5XNXfaTmimASGuCvPEP3faXd",
  "key23": "BPFcPXS9zEKtBo6oXkwjsczGNMTRgvEv7YCJ4C1NGizHBv3grjznaqGK6oqU9Kp628Xp6xfe4FZ5MYDzRzu1o12",
  "key24": "9XVeiKVX4UxtmuSeTV9Fw7aDGnGVxL5GGw5xfHdYoxVjzjQzkbBGQkkPKifHjc9F9jVkSrusXcHaSnZCSKcmSSi",
  "key25": "3cHkHUgpkqSHyMTBWmooF2itHEZykgVs7GJUkitPSqpbZWdUWQ9adjo5VLBiSQmZV5M6FxykRoVLyenj8fADv2gX",
  "key26": "4PA5Fa4NHdeAsiaHqwbavB1ebde4U5eZXEo5zyKUv6FW8q5rDYrV6LGfQa2oUnP1b4aDh3JiGige47FvFsstZv1d",
  "key27": "4c1p57M64Jx4b9YWMwc13APX8WeppfZ6vU96SAMDPTHo2P1mfzSFXUnCnFcUvDycWS2i9eWUiFGkhi7tePYLnNWn",
  "key28": "2K1irkMpq45ibxCDrmtbcEDiwjf6YtRfEZV7VRbRhZG6qakYvBhub2hpDs8DTGinXXbznqY8RmpFhFyczTe2TFCh",
  "key29": "3UeuZQuf1Xpo3HtXimAU1kX2yhCAdkADL649dWZFMXfAsdBpmjEcnEtBNtvu5GTykCUbeMuXHivXcJLCDNSGCFBY"
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
