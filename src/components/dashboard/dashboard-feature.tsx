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
    "3eUTgPgg1jLWhmx8LZZNsTDJkog6JGt799fyAooAmUqpXEov7J2an9RvHAGzdYw1LDLYcLZjm6Le5sy42MJBBJap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdBHYKTFtaRirutgG53iP7mhVcXVAP18pbXrbTmN7se22EKRHfHYBhwsLPxQsQB83patXW5xyyvEySWr2PdpA24",
  "key1": "3fbJsu1TBP3yduJ3fu3y9Z2D5HQZyyvjnC9UufK6iuKrWBn3xk1Ky4RDxeigCF4FqEFo8xnFrBusozLVihWCZ7bm",
  "key2": "58Zj1mbTQBEaD7woqP57NCQneYURfpZZkEhsKRW5xw5BQNm7xKXWG3oknW3oK55Tuouejjg9zDbNPsen8JmwgC1a",
  "key3": "5sFYg8Wy8beKi9ETmHarZy7csvcqrGDXJRg35qwjc9jqYTfWsSfFCzvo1vro12acENV3v5u3drJR6PPtDAXU7vLC",
  "key4": "5XnffAARt3YjsyG2wp9kSVBBGQaP8qJ7aLZmB1p5aBbLnqTMCpSCDUPStgMeH6CYqjyJuwxQkKVWYCUj1vLj4Wuh",
  "key5": "5HkcSDnHSn95h2tTwF19mNMmPB2ZWxhxfJxPmhLnogiG1i7NssyazaUE3Vr4fw9o7L9HxkbRAsFQk8ZwHK5q6hK9",
  "key6": "VNEGCde2nyw7d62C22Z9icZqYRRn778F4oyNhvTegz1APhAxEPWb6T5kwEAUrw1xKYJRdxZkmtK5EUUwFvbYRGx",
  "key7": "4iZJuSMYCjWqrA7qwdHzxKQzMm7MTBZVX8yRHMM8R8rkKzTuFzw68BKye8krziXdSsRGSECUzFthm7AvRYEthpT8",
  "key8": "5yvNcjEtsABwo2DNUYnCT1rKkrNiMvGxr6sXSSQNtUVUjhqKgULsr3QQ6821wQdtvnEUto4AW7bYAc9gbsq814uV",
  "key9": "27EyRjX2VfjgBU2ewgsbPPXejrdD7AYDKHFWG7oFFWnauLH9QeA1QsMqv5pcbKsRTbxc3VfUtsdw6mp849eNp4TD",
  "key10": "w1FZPAWeV2ATCoseVXgvvAPHN2aS2bKA6Qt3uLiE7CA1EcqcZDhJ3UjxpVNkToq1LQUnD499M9FxRZd4GQ7uLzw",
  "key11": "zVdBwAZ7QRaQnh2ZJkk9QxpZsJWdtP5JChux27mwnXWJaQwbVTWi1NW4Kk9NTW8PSireFX5GgiVVYNQGV8gkrs8",
  "key12": "wUhLjx396Ek9ZHRn449HMhukKwWNVMktBrKeXgNhRfnZWtT48n36MwQFT3P8TYFqK2LFkAysoedNNBfoKiqd3Sr",
  "key13": "zNZzGTwRQa5zuMBA6usLZJhBVS6cmWGi2S9XBL21ogh8d9CNrjjYHMSi4BdgcUZKB5FGMpR2QUr1xcf3JaAWmUX",
  "key14": "Km7ZHyY64pwCVxNGozQqFz54zu9SwvRvEWZ3ATLAvCeq7NYJdf1ZVgRisMA3AvUYrSFU8JbvEdG3Zjnd9KoS5k1",
  "key15": "5dQn6R5uTDyKaoTQP11osUNr4243Rk553VuC7nXjwDia9q9aBv49kQ6xbDpY3VEvdQ5Vrf1viZFtdLQCJyER85Xa",
  "key16": "utcUUEoaTbYL5qistp8CqhUjdcE9NvyKDgmD61qVtzH7ej8gJvbqawTkA8RbsMxm1Vg42dk9H7Rsb2fThMrhbfM",
  "key17": "2V5i11BojfGLvW79LkAJx1UbXnUEfFLuyqe8wQB32qsQfxqYsyeKNXWwzYEx1kvGimV6PW9J6sk3gLQFS39C2hyC",
  "key18": "2AVkK8ex9kdHSLzwcCvtZiDrJsriAGiP9T6Pt8rUtss9zrho13GfW11eorgaPSkXx9nR9xnQoS7Km1RLbnEY8wHf",
  "key19": "468Vu3Wh5q3wXWnu46sBojdWGzMWQm1KHL2JJtRz7m6V6AnsHL3PMHYCn5BSJDtiJVkb1XNmRxjJN37JPuY5JTP5",
  "key20": "5mU9aL3PcssDzouPsCNm2vUruniNNZUKpWEBAuBsR4DJaSeg2CVa5LUiXUUvdH4RSsNqYihWPPpw7VbPudUonLdG",
  "key21": "4tUoNXDBYznkJD8phXgVdXNSCtGZwAQS4tMxKYHWaTFKSiiTnW7nq3mE1W2pcGjGMuYytdUeunZoWAUSuWSKCCte",
  "key22": "5rcoQvTypEXzNNVPqZsow6eAv2SG8teTbbdephox7KxchsR2djUWJfxRkZt5vPHGTCoHrha4aoRtWqDHg3eSF9X6",
  "key23": "3WLZDK1izX9S7gStQfyHUgAcnyw1KZjMKCNagpbAXzky8EMcQ2qmoDm8fjuYffkzPgczBu7S4sPYLXaJi7vpSB9p",
  "key24": "4B93pjCKhfoyksY4AkxQSKux82Hg7Hg8NvR1DFBwJhyj3DjqYdeJmTzx2nVAFQz5v5X9uekrnQ7dci1Q6eRJMiRE",
  "key25": "2tEe2r4FGuPMo7LwFi2Hp43iHS8ZMJB4FmEr5UShsfrBCpLHHbWuX85wNQZvzkkq61rJS3zqpRgG9QiTwx6h4jq2",
  "key26": "55okPFSsphPGPiEMsrodCnWtP2RVkCB6sZcJKQe9HasS5yr9UGMK3omdRB2xbLvnSkBpJrMVdC5cTiQLiu6oBmyu",
  "key27": "54Lv5A7LehJzfESZwBz7MTpWaSCc9oUAEs5NQ11LGnfKjDwRxP99ZDpiw4v5qcXsoPnEPsrPY8kXn5k9feWSKU5v",
  "key28": "5gpN9ckfVjXpUjxseBbLS7KJRptwRbrdChNiyCtCLF7HemhVDj7qZ7JJNh3MggM92gDT95fX5RDMaeCd5jixxX6g",
  "key29": "2v1BUkLyoDYb9XKSuL7jZxJqXdz97RsrSoa9hgd8LaVCNJoRwc42UB6mpcwHzMCMW3AnPeb3Zkka1585iy6myh7K",
  "key30": "7vrUvb8CyFog56xNqGG7BVhmtUrmqWmYX8kTWSa9jRrJ9MddAHVLcyDrkqtj35gFTCTCK1syYHmZWddi11ujxSb",
  "key31": "5RXPZFAVsUqvodP9NFLLhiEYMqN8BE7pS42YisRfx1ektKAiKEutoFzJ4bPVgZtFSc5c8tHyTxfayjWvi5bBU6Qp",
  "key32": "5Fxbh7r6awY2xFanCTDYB2EX6ppJAbruigCg38ZMD6ToaUjTL2TCxCiUAuQEKDpb5EsRKEZ9yXR7Nej1Ggpx9XqM",
  "key33": "52GocX4AQZBx7VEkx4eJAvcnp7GPHkWZq11vW1PCMihGQ2LaTmvWo4AxE5dRexDcMbzj7VNUVjBvCUmDgWHxYEHc",
  "key34": "67VWM5w3ZjJmQrkahWspre7ZHBJPkRdXJjr79pnRvZy7uDhTMFpL9kqX5AtYQK2jmu3JN2wj4DhudScH2Rr32kmR",
  "key35": "25waLKhcHQWMUaVdDarhMjSkgHZenNWLa1qZzEsMBuVSDb6USufUo1ZcBP42BCjPJcyZkMih4pKXgwMmNsf16BEX",
  "key36": "ih92rNJj5rmqojEw4UEmAVVD8jHEHiJxV1aTiuGVwEdGBHr3SVLm5fFi8tcWEC5dr9QBQ2WJ2Mb63ABJxFMW94W",
  "key37": "2jtfR1qGzKTYYM4dHtGXG41bMjxtP9MG87HjHNgMGPXuNduLNZJxiRgMkJXsstriMmZsaviezDYHT8NEJ7Fd92Mx",
  "key38": "26hwQrGbGpjzqkATwSPHjytZ8cDWeX1CiGJiuYK7MJsbhdi7hu739duFHct6tCXkLgzekUaLFMJhGoGQheXZSCXN",
  "key39": "3Lw2a4on5ZirNb1HDG1V2kqjYmgN13vMLwKTtatKJFd3Qjpy5wo2R7BwwLzixww7FEhyCt7Fq5X8MksVQSYtnjfG",
  "key40": "3cGEHy7Z1bZHKVNuhEG2jVkiFK9t4Fo7pquzmV9uVgRK2FiQ8Gtasxdy1rSZw5ZS2AghUH2B9tbF8i8pbZGgeWGu",
  "key41": "2MhmqWBcKpgPyso784RSY5bNCfK7ZPuSgG5WL8CeUkfYXaXw9Vg4awMK3q2TgiZNHF8LHM2b1F5czwU8jEJb85U7",
  "key42": "3K67C1xvAv6UTS7rcbr155E3b79C39gxAwpMQCpqYknjpKSuCYy4zLhgXAGJXZ8XyB5Kkb4BwYteMNspz6XvfAGP",
  "key43": "4Z75tk7tnf6Gbi5dQFvPgGZygxmLadnoGfu3NqxrJexMskD64qZX5dGQ11eTiM6QYEsFHqTD4tfaZ3ZcZpzZ7DB3",
  "key44": "2ML36Rw7sJ585U8YqzrftgUPL8dR9jEZqNZja4wTucUNGEcYquw8eVd2CuxWKvxxFdSiePfw3kHGBmkTDycF7oAY"
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
