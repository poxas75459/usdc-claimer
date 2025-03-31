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
    "3T6ZpFp8YvfgtJYDGSGcmduc5MszAS8d5PbqMW9ijV9uJQhKorLPH6kdXTjNA9LTpFZHbKGEC9upf2YtCCN7AYyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MKrxTftvZ7xw5gCS6DFjecQhAfNRB1nLo33Azgiyf157KNEFnGbH9uMp2XeNfNsPkGA7EKG46skSwFBZNM2ejzG",
  "key1": "4YdXGXbAwUrjknM1TrgjXX6aWNL51bPEx4eDdHyRNS2mpf11RJqndGoXvc4eNzXDZELHyvTZ2bA9gn4ekQ3Xv7zL",
  "key2": "53NJTUnLePtDN8vmN3ZdDsGDh8vdCChgXK56rE4hiHf7nYHNUF9GA5VwJLfhfxdoDigrWnEY2rx4u3qLJiofYkoD",
  "key3": "3JQvUSmcjRp2UxABk8ZQuaTxmsPEHyfddskLrPbKSPHedLc3JfncYXMdihvdeavDWDrQNhcYBXAbhhwY6DAtXqBq",
  "key4": "GfkypHjUcoiBfC1AnyfNKdHumMWaBCw1EhBdEXcFoqsLibrD98sGAAr3D3FK3xy4Twz5AkoomB13E2xjwedBaEz",
  "key5": "dhDBuYZVXxpfnCPg3wNsk4K5HotRTrXpaSUrim5yfxVtjGcAVzXphA2nvEe8zgcHkk7ifUvCLcqcgFwxtshpEfy",
  "key6": "4xZLhJcBX91QQotF6ttahcpG8gBkNWSbofuh9iuRpCpc5S3uBEmxmY7u7XKe8U5bniNiyyjLfnwuN9DkJBDsLvej",
  "key7": "4ez4SUj8UhucqhkkjzhGz84SK7DPwJ2XfM3eTsJr4QVERUWbJWnoYmLvKxTgoYzfrcudWcR7nmd12uWKyEQXqBEN",
  "key8": "2QcabABaSdtnu9hEYJANpd4xqR9zygVSxvNvuS8CJ6mZmh71CjNEyZEj6y7wNsog1NCJwfPjfwtMTgqWH1TyDvXe",
  "key9": "6773zZ6HxEyuNZQmT54S63gdZuqrGQQrtBe2j9cgUQ9hwuSmwW4ZFmx7eeGez2XfJJg3GPDGG9dxAaemTYxuTAZD",
  "key10": "2rZqPwGSDjF2JNN47vrnH5Ug3EuARidLJUaxCteFajbALvqiGEYrqfKbWxhDLNfhiHB4sHmqhjxChGA3mC1b9vbH",
  "key11": "4jVaKztswvFMYmWuuBER8uLrgVu3NT15fWJ9GJzYxGbC7BhTMjUD5xkonAGxiq5wHLALRzZRWqhZgbNrgHXcEiHY",
  "key12": "51yFJohqVSCkWddPsAwJHdQE4MggUECJFQKDAJmD8xzADJiVnmu2buqBkeg2HTJ23hZnZMhxChnsmDzxJG5sLSXi",
  "key13": "5kVPTg66LWL42L3GxBdccMFKJskirz9GsPmpXsKq1iuWKbtnMdzZo1JYbXvnpgpAqxuooJKyBiUUovrFt1gSFMi3",
  "key14": "4XZTGgCHCQBNNXB6NXnngV7qFQPNPjYrFCKKCYGg3mtDb2j6jbKnbGVW1vK8wvg9gbW3hMRGS1M3dKdQkgDmYReF",
  "key15": "2k76UeUcB4YrUms7jFwXYgRCAuuZ8Xg8MRa1aHZSgxn7LsDdLRHAhWYBX3c8rv785BZxoCygXHRv55LEEC5RFtj7",
  "key16": "2tQnHm8x7wxgjzasXB88L747sAM8rXgjk2sjmGjKr1dDaSc4rUpWjvcpuHZMLeo5mJ4hwn7MSTzoSeu7VmemhhSC",
  "key17": "SfVB76XmtZqFX5cif3kD1L2ELSjbq4LTHjFPmZ9VteMnN7m8RtGdJ41t1FErvXDVDxEdCr1Z7zfw1nxVfSbmLJb",
  "key18": "4HFYu7qovekBBwkxFzaHcSTTq2SLLvFFy7Kf1sLbzumecUQxehMwUAE7fKTrC5kNEq4A8tQRHkjq4FbJBqMSyZnU",
  "key19": "48bKoA9QEFfEqzwqFVvsQJ2FZ5BkGYxP42Zcw3ytBoAsfdA75UgdNQY96wjJhwTu9YgAYV9gBfZYCxQ8GrgzX3xs",
  "key20": "2m4YqsJkbLsVZNFYNVs2UwniR3Sg9vbLJg5AfohygmuWoRK1zRtUTnRGDqxoS4MpPhTkjLEChWaSANPK2UBcdB2J",
  "key21": "4LRusE49SMGEzgNnNpR5gcRP3gYczVp4x93sRKsJk54E2j7skg1VrvY35fmP74ak25oapPixFvFJNbcJALDVo62L",
  "key22": "28cTWqLAwVbNCSdKf6zDQggHy4eYEprbdfKHEmBVucVSLfw9JjN97sgrWkzjzMuD1kZAzmGjnCmupXHAfRnrVXaq",
  "key23": "5bTAJ6p2kQKfwf22AgMag9BW2Z3fHcocWnUYnzpHD6Ey2zg5wZyo7zDskADGjgrq7GcDFRwA8EGqA7ATrnzGMAPH",
  "key24": "oDwvMh9AfuNcYo8jb3Ep4A1xKbuUHEBRjhyar8K7aVFwJqVuZ4SLU33FsgCq7Rm9pmQUqMymNEvu7ejGWXMyNeC",
  "key25": "2nej31zymKJfqVGxCKQwUDhW5MWCBXzQuq5yX4iZzdLRTGyvuhzpYHQR7vDxbouzzxtSnqvjjcsfw77JRpdVic2Q",
  "key26": "tqLGRQ7BE9HCJumzdZXUxjB6TxRcFxDqjqpAYdxQq6H8gPZVvBJh2vXRGdKNVhyRYoXbB333nCHpxkrCVedJ2o4",
  "key27": "5uEyR2awrRTdSPa7ZiaTCVez2zmvqsgDfjLLey1SBBTjK8QJWtTHjHDNdBnwpFcedKnFtNa3jRDGyzXZKTKQnPSJ",
  "key28": "5wGfYUgwtTjpZeVRB4RzcGWpPovgui9NawBuJ2ShzYSaQ6w4qk9ZtatcPfuagGmSmfapYN8h7BBsxmXDjmfFqgYj",
  "key29": "5R55HVdmQqxLxwADqQ1r3d2ayN2uobu22TcEBVyHKvVaJ2KW8uetNGMzK8L9fMYUyB6JsM6JWPjT7N3rxoBBJqHE",
  "key30": "4GM26kTaMoXyD3euPAF18SZA6KCsQALTWXFyeW6bN6rPA4QQLZBRg2pH2esD8ypnwCWjG9ayKLtG8GkgThwRAsQh",
  "key31": "5T8Ga4HoYMy3Lyduxvk28tdYVCZEqcEgjPUCb5ztm4hitGSvZwVkrG37f4QfLELzfJHS3JeYexeyQwGBaqpt8jRk",
  "key32": "588YYkymkk8rBh2UZRLgZWhCUyTSvCKSPtcLg1nAE1a2QiC7iqPqgYXc67zmuuJi79tqhtag4K78MPN3sdMLk9gD",
  "key33": "2F9j3eC53CSA74PnxVN9WsczZHMbeMYSTcmYRsQ1WozLmRnS9xAHgJjMaHmszHYeyNtMuQTXTus6gi1pP6b7AA3u",
  "key34": "2gcQtdm3F92hd4Rb5aLbba98teevnREeAdajoHHxLoNGx3urYLnM1TQkhVLtFiKeaQrt7g6aDoUvVmvPFftKEPKt"
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
