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
    "4KLhiXvVXDxj3ycvTdmSUDU14EZi9B62LCDoGLBhLTh8NGTqywMCZJ2UdGMAHDnQdbNbEdkXhkY2wcRPsryrBe8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGvsGMhuWm5UW9oQ6TVvfdNT1aCJ23XodYAGPK8eLrgswfpn1Y4FPdfpLPtzjmC391APD3hXNj6N8dwS1PUv69x",
  "key1": "4wWDcSYvP9EXrWxMYk7frsGNaqgdnEFbpePJhSLcvY3sPEpTS5RFpXCCwNTd4AhNvjP5VKKq1NjAeQS65bs986zP",
  "key2": "5K7zwetvx1nAczmLBMPJX66idG8tV6pN5KXiMaQ78irGe9BCN7HgvDUSCGw3Ug8T8KSkxGGXEiqRZEEwVQK4aADs",
  "key3": "4GWVUeoQCbcDREDTZbMUZFvPWMspLkUXiT9JjexgmTCBQAhuEcQYimUmpNgGoy7VvxGmfjGw2X72PMvB7fJp8hi6",
  "key4": "2JdFj575URMtDQKaS2MjZLo8LXYggubUYircnicnsGV7e4zWXNZi44rHAjNUabe8d1WGY4hCHiRBHb1g1XX6s1eh",
  "key5": "4zbi5YeMkb53723XEgCjvWhpZrPsC4cC6Z3LQv8a8kNLXtVSTDsT5DyjYiQzAnPYmLNjyGxpMijU5gepLfDF54zC",
  "key6": "3jiaYFnBUHL1M17bVSeG6faipkiP91jo4AZ5rgiusr3fFyvTph2fXukbHfsBieJekLsrYG8i9GUq6dLJWnXVA5so",
  "key7": "5BaKL7gEnuoHSLQp7hhRbkaZV8id3dSzDoXxbcUMWZLuWpNKnTCMZWn94XvKMXVwt9HeyCTmbKSYqD9kEUtg7WHp",
  "key8": "3AAmYt8YuwLu1UMjPkPAySeoNFEKxuXeakJ9gbof56J9YjntXzYcJq5ZNuNdMfxETMMRbqgFT5SnKNEvYDkaZBYg",
  "key9": "3xMyiTRBWgSPrPawVdiFM7VKgSCi4nMxVDZzECzjSSqgshbYhd9B3oTn8aDoLnbsPJnV1t4ubt5Yiiz6wRcB6dTE",
  "key10": "3gpwMye9KT9KxrzGh7oiJDAjt3PeiFdEvcVCanBj9Dw6PHqSMVXEhm9uhq2Fucs2mazT3UgRE3tPhu2seyRbWKMb",
  "key11": "44hQ8vyxXVXTkReLymScazkfZkZ8cFkmfzPiERJLVBaeHVB3QdMLaAAQSZfgSKNqC7mk4Uzbi519twWh7YsXbecq",
  "key12": "5BYhZ5CyZqzDbnTi8NVbregRnjHA1xMXwKPTuh4ByRXkzc5dFxBcvZEe54LkMC1ZdkMWPm9Pc5j2bNQsBgtM8gnX",
  "key13": "3UwpVX2fVzLNady9JtnQSpTY2hLft4xe7nPJWeiWjpG4QP3qqYYki6L7HFEV7UyqAGp4eo98B1zzH5aU9VjuuJ5e",
  "key14": "54kx5GVC8Fvt5MxUx3vXMbBDDzsAH2bntaptSrUJnSsWLJuMdsCYusXtq93QUPuUJDcmuYxbMrFm7NWEN73gaNhm",
  "key15": "5VssXvGY47stVhCdrwci8ZLhujJD1dYCyCf999yR38SUpFunZC8vxcNPLhz1jz4PYU9RiGNyiCjLdHyqCT4nDMUQ",
  "key16": "59BX3fbnUWRqB1TRQJ2TkujJDiSCmxTJ29u7ZY5NA8XQMtdCzaJah8rVfKkAAZaZv76Sut62eEzqTFjW3ihhLsNa",
  "key17": "3gDcH4cnmBRWNdC8EPK935rzbMVTARVGzZTy1xFxTd1eHj7XiX47hxSpLkhbz6iN2HZxkBQr7wmsiK76oYxZezoi",
  "key18": "xi6YQLwAfG9BDJPHegXhJYtUNsAScy7LEEdTBoXYU2TW8NDaXaLqJgs7LjCXuVNxtdstFtX2DZJNqmvXi3NELoU",
  "key19": "3Dy6nqWPBa8pFeGBZNyZGfhczUWPwSqWTLpwkCHAAPQHcet6ze44XsDEcSxYnANEnZDzq1iP8ciFG8wvigG1Mjcw",
  "key20": "4HfvSS8bgE3aY3cXoB7Tz9QNG3vpaMNnUsiwnPf8g3HKk5mdmAZUAPVxJBM4TjG3ANGnpPDduXVQbVJJCh1NyYqN",
  "key21": "5YQvw4pcKBpRAhdUjKpfzNkt5b1QmtyXQJjh3q24ELHsXfXCnW8C7b234FWTPcTcWC5vLyCJ6hrTmApwq4imUeVV",
  "key22": "5m98aRbfEuUKtWFbh7ThVonRD4gJfxgHQDpqiZeN7zqY7fjjKMyd7eRit2GGDeWyH29xqgav7Nf78QRTQsUKwGDh",
  "key23": "Xuqxu9fhmqkgrg743RtVssNhq66i5aJXoxTv4nm83gXRvypajZn64CWBCVyZ7zAjVHmq3MszT1GKF4zjpjJEHwx",
  "key24": "2hF2v1ipzMYgMqidyf8aNgbk78VoeLRbvMJbnhykkuHyYRQrGRsNFLyNt7JxRbJu5V7btcBoRq3F8y2woYkxVfbP",
  "key25": "4sc9mSfQ5Bowi6EJ6wYfWkPw7VQm935ywkm36UwsjK5pnW6cyoiMB7bL7HpoTsE5ve8FTd66d1jFaQdH7ABYu4d6",
  "key26": "3JizbD4CbPpsuv3FmioPNfobL27xVVf9MgcmZnPUVEs3c6nkgiDbJArtMvTXrPMW3A4VzYPTw4BY24K9KiH53r7e",
  "key27": "56gXwdMuwf7zsTYGYY9dtP7dVd1TDubLDXEt35y14LVKRLmhadvGpZLjFg4TmxWAqz1SpkVuDjFG11J9gv5Co8Br",
  "key28": "up8pn74FSr9fs5JqCxYu6XU5AawtmvpaDRPL3Dohe9e43mgvozzidYEMHV6VD94TYS47i5fYKHTCuwZGWo6kMcV",
  "key29": "57QKuibiktPaT47kU322Z8bK6fGrJMTmRAwNiHYeyRLnhxYG1XY7T2ek2232EWwKf2DG69ERnMg79QLvBXjjvBAP",
  "key30": "fDQxxSXa8kn59h8L472TKAy7R6a7CLLSuQncnnS31Ny5kmgrjP94fa7YWPVQRY2JRbavDLYbyEsGcdDHLCEjRoj"
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
