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
    "2qPTVwHEk8Ek3JaQGkK1UDbVrxaiZJ5GsfADzTBVdRXYdh4masqD4f9xHFVaE39HaPZggsBRycPYYz572pUTW3X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oeEreBADQW12AtiLxGRkYptTBP2LkaqnoGCn8kkTCHr2xuZSrTBpBsGdTdf84sqoDaMXFK18H1Bg9pUKi6rqnH3",
  "key1": "3jgs3EBNZWVxic172BVe5r4kdWHjJdurCYRQAeLiq6ia1FBHzQy2nGVAruknjKkJ63AwCv9fBQfM4U3xkz86Gz24",
  "key2": "3ABfn24b52JYrV1wbRGsQU4kU1L1kJXTUAas4aZL16yJ6gNwXX8YLoaWWtZFePVQSdMDqTJMHkBWLREWhmMssB6",
  "key3": "DJbJ7WrdUUgqX3dXe5tAiw973YrRzzSCBBpeH96MTnARWG9dYXvWWb23DYNCQ73euesicGLD2S7CJqajPciFck1",
  "key4": "2eT1QTTTFrHuQhcaMRNHLodXMVqfxt3DoXHEvdHKyaBo48Pv6FtYpr6dj449FqEbba1Q4cfDRug3HcVdy75kciXa",
  "key5": "3QtA6Mq5hNHtoC82NaUqaHyh7HEUTTvnw84SPXutuH78hQdDcJrjbJ4ihQpNXrj7JpGqCgDoCUtJogPTM1SECoY1",
  "key6": "4KkRioHHedrZc8VuaZ786MDuCJyZ2rKgxbPkPQ3YZjPrsPHwWz3sWQ8bn68NQRBq4TcQgeqZywjpJ7HpXqe6DJNt",
  "key7": "QV6PL6awRtoSxTDGcbnbZwofQxsTZUw2TkrCnvu5drE5vgSGEqZ2vKDZKV3EjKfedT7JzbuXe6kUC7wYW3WZaLN",
  "key8": "5oHNGXiuP57f8oWDyWNDqJdnbjx9zFThxdQeisKXF64nB9oj3yvcJuXcvPRWk4aCamRZ4m8yPqBkXqw1zYPYNw8D",
  "key9": "3txUn2uL6SL4XHng84JqJySDEM6yGRwXXwDFFsSdFktCu3mWb1wBQ9z6HKixqKQkUKrSihQP8wNRq3MxNfYZE7H4",
  "key10": "4D7P6wkNoEUwBP3Smvjrbq93iSyE4UREhPfXxKpv4UnkgWvc2QfDdomsadZ8CJ8h5bRL5MdNQJA2R7T58tr2BLzH",
  "key11": "mRih5dGZWpHXgAU2JRgyYsR7hYoZaookfX7udPai2cJdCmeP7JxMBanM9x6KtVKMcTfgGTYQuzNHYarD5C3LTmW",
  "key12": "EKPTqS7RmijJZdjSBKBtfA4MXoZ67BZNoAxLfyLQzGxv9vFq5tHN9ErrLt3cxQBMEmPGVEy6rpEhnq441wmuskH",
  "key13": "2yFheSEs3EZBUpT27rF4xEN7AiH7qz9eYud5typzL8JUoaAGxtqf265TNRFtmQK7eVrd8knoe7j7vvfEFQuLRKux",
  "key14": "4sve7j1fSJ56VKUeDxjCWx7cK7tPagzPQSfE3bjsstqG1VQMZ7noi7Zjh62jEeHDt9UZ8u98T48MpR8C6iNEKthi",
  "key15": "3S3EWZnM3hPwCiRv9zXsnX41VWtk2RJKE1QCgma9SXm7ZxVpVDKAsA7rt7RC7ms5y9rJ1UL25GGSrxK47Uoe1fe5",
  "key16": "4ou2FZ7ENovrRhwfKf1WmwyHiLoEj6BUcMTMzge5iqBnFfHmsB2AsooYijDvWgtKKm1dfVkcFCFHvLW9UHvasPtz",
  "key17": "3Djv9f9bBjJ735ZdTyT5qH85tBbsP2rt6hxFagM2YLKzyFkfxTWVbKApKXDQbamkFwoKMVqQjs3Lwd1cSp1GzxNP",
  "key18": "3aCPKBtDuv5sPKdX1uvGbMZDaQr2QZdiGLu3g9rYpGPuPvFTnZQesdAwdu6nBUM9kinfhFgYn3Cm48wjBu8M5BQ5",
  "key19": "4D6g1JQsneMDNS1cWxBjHeiXd4xKqq9vFb4fgg938RzSGcjKdAqv7duESvPGPdZUmjQLFzbgzMuX7KM5J3kw2K8S",
  "key20": "3gMAaKQPuP1w8g4YK1im1grTPEAKknaMgDZ5tRDLyWSJkMoB8W9gKTs6RMHVKCP2jYPwz7zGsfgEfUpgTSi58xcZ",
  "key21": "v4Q6s97FEopYYGgQfz9EvzqitQA9rnJMGecexDo1Nj7vm2MVNwXxKGagPCH5uQZ2Wi18FVVxFYyvxEm927JJ3k3",
  "key22": "3Eg8GzsnUpzi4HcfSqLsEayoTcUZGwi7L3faR71B4gqPe2oytdK5ymv1zaKPmBdQpYau7s1YWCYqtGhBvy9qd51F",
  "key23": "3xQy4GKJ2Cy78BEbSdeYKkGANcmhf2wm4E62KvEnjXCut4sVC4d6rKQS3VrLqvKKVV6KZpHKn8ZS9PhaxhNFvdR1",
  "key24": "64fbtfSewGLijrW8WqsF7hQqEjX2Zf5hNHdTXiXLUXB1SZmMgBKkPgjcuQXmP4inSYqd31DPm1ZLtdXQzdj2i2r5",
  "key25": "3gBTwPvEjUVYaaPiyLaXSwXg6t9hmMo6fzRubErjFWsGwCVqgk3G99f9BAgXRFzsA5Zfij91PFSFsXHvEbUphb4F",
  "key26": "5eGHhAcsSa8rtnUMtKrhr2mqQbr3d3WrYdwDAZKFiVpNSrMLXbh6ZnuCYMdn1FzucumvQwgyUQHL1hyzpcBAhNRZ",
  "key27": "3rVdGJ5wXPHW5gF1B7vEorCQHZsVbyAvqVcZiA8Z9HBf4862EpLuypu5hTYsMydG8g3a828jbCtjE33YahWCAvWb",
  "key28": "3hW6erVEnr66ULgR4195Dd9SRyGoASwJpWMGcRnEv4eX7BjxLqLX6d8pD7tkV3WvCUK6yqH12uaDi4VyHrnwySgn",
  "key29": "54YPPvCo8YqtKnNtESWm3TznVVCf1rsgRHQNLtbEQi8zS55MNRHHBdgy5tTx3QgpQ5PHcWWvXRiAZYHNpFATgAjL",
  "key30": "gqzrairhpEVXGw13JhZuWxmtPMN4h6vj4RSjwaFBn6UguDnZ7LDvjxxwKrXxUfefVv9GXmDPJSuRLzwWmUQXEtf",
  "key31": "1MaAM1BzMVLTqs4QkR2xSdjdNsjkMejdv9frGh225VJe6QUXQS1UFLRd1wbkXdFdBcQ1373XepYEyBrWBqh8uwj",
  "key32": "4SXv7Sssif1v3MZTT4PRxae3Vrgc9vX4ubZWjJ2EXSCQ5AQmkMibrkGwEysmYsKCQWPfm3cN3Z7CFqbJHigf6hg2",
  "key33": "3A46rEtZQVd2Y3oAHnSaScekT8t5qu5J4CzzNYQuvG57R42dnXsTBRm68ZxfewierTTTPW71senUZjvoLLrC6cfN",
  "key34": "aJqw7bg2eDeZPqcaxt4m2sTSUm3xnZ6eZ9nNyn5ZHFDU2XVpoTCoGs4pDTcem8vX7xw5oApGULQjeGMf5TAoAXp",
  "key35": "4SLN3hQsnLhAM6ZhT4nMyG6EabN9VJ9NtdihpvVaWE4sHRq1JC4QzvJWKGaU9gnVTutZVB8oUJ3YcBoQ59qRToSU",
  "key36": "2rPQtkN3nfVxp696cQ5Ez8DcDxHiMqWVMtkecMphWEF2hJgF3D6Grf2H3bJJYNpJ7ApPMUeuSFTH61Q7JVN5oiM5",
  "key37": "2oHqqqXxBgiRdXwXfjjHEnQb4ZMJ6qtuwaQD53u9zMfEogbxcCRqTksEZz12ywwBfved1ypgiBo6QKpTZFh3fHTJ",
  "key38": "36iHEDWQ33TFEafyDUpNXLHQrrV3MKC4Q7BpkqnCVaeNwMSrBKAPZAjfkcz8iv78TXvyKVvWK3fbLZe6f2kNce8o",
  "key39": "CiRmCrfenNEtPkszTrn4k2sgMNsFyXKsjk8p7WjBvC3GkGgPZt71VAg7PVTV5PUhQeiSRM2GYMDeKHMu6vd5PTH",
  "key40": "2tKxqgtSYC5JQ27SwK3adYPHfn76RLbUoyQo5dm4zmdKKbjMeX227jkhGsk4zv7kFFKbLSU59PS7ykMaF8VyBkFe",
  "key41": "32Av3fatvVDm1bfvcsKorTmMZb2FM5kUgLk1vmBT1R6SamHv3fNZdb46VtZQBF7tN2nAbD9RGRSxm63y7vCVM7PR",
  "key42": "CHLoNWYTce8rpJ3GjTxz3bszSS4zRMGKJSj527vB7mb2D4te3ZGzTwThh8MphhT7Yti5y2Uk9vN41njLUYUMu1v"
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
