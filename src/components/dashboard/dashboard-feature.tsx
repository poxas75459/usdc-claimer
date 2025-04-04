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
    "31F23UGdWFfVzTdfsRDGh63AAFVXMCMK5UqrjbEWwitsDF6hVmuZPpdw15AecuSX4K4CSde7wd9CUpjE9WB3Nfnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apwHKFNFizJQHTBFxSBs51Cs44xk9UrNCJXEGstmNEhdZvG4TnYqVUM7PKEuiyRjBb4cuy4hY5koJhpW8aVQTyB",
  "key1": "bXrs26D85Cw5rSQwsdFguHiLiP6peA2iSWxBKW6jHeAqwqVDiZXSof2z6oSi9utiGntgTXcRtdfkCfvAccUuikY",
  "key2": "4mDUvxbPND36QquBN5gCTCybpVL8m2kH4wgeQkMiKjzkPwvRqFD5QL6jtGKkhmNe5hPUQXb75QjLTMhYWWgjDR3j",
  "key3": "y3W8ohvZWM4SA1iULUkSQ6oNgSRM1pzVWQzdPVhsuS6iFCo4Qm7uBEMuFaLyejq5we9Z9G6sooiNsEAjmfr54m5",
  "key4": "45RCZsBnvRQHNEwfAvgijBNtYW489Q6NtBFtZL8t5DAYKp2XeMUp6PjFP1BhstXgmBieuDGoRwEpQADyQekQyL1C",
  "key5": "4FYgYtKMdSVHvYsNfo83LFDkrQGeZVWeFEz4KjiFjnweCWJGAvEm7yndeWpzobLLZDzT7QSJqBGkhe4hchnfzNPC",
  "key6": "2SEVcr7x4A5Q6R59acUk6G2vq34mDxrSAz4CTUXasSZLPqLStCGCe2RnH6unaLxDwDkm8xyGsjG6wMDQs61EiGi9",
  "key7": "5C599gMDU5xVTMgjzdBTWnekdGp1BsaHMUntB96GF8g65Wqeeapsa8jQqBpRkpwKDcvXUn5LgPt9a8mL3AJ1xCVr",
  "key8": "2NEPJvi1RNxEvnGwkshiozseqg7vQKKNo4UNEnWQqCN1mYGNtPuziYpqocUTnEC8EQY5Smkx9EAH3y33RoF19uTP",
  "key9": "3A8Z9fJzgtCqCebfQDBm5ixfsTEbEB95gVUdtq8y4TJFDbX9KTaQu4MfEsJvE8WWbdXgv8cGRbTkiDVe3XEDcAbo",
  "key10": "KRJJfVFtRcHkN5nMUUrVyXBKR7xdDaRkruMHhxjbWzV1f2Df54jLxQLMGN5YTKY2L5ah44JrMWfUqssvaGY7eHo",
  "key11": "3Tr1kGQLn52ej1Zy2314Sw9X2W48QAayYRh8rp5xzcRQwV5818XHKMgyKSAmKZVYXxtzPJxxa4e1VVoF7rgLct6R",
  "key12": "2GLw5VDvCe4CYn4h7QKnBoXScMgyaFi5bb8Z6WhhWYtYdtQdLcs9P95uxgs9xhZMi4H14qgFdEaG5pwUy7ma7Se3",
  "key13": "sm8Ar9nZSSrQpSrBv9wSQ5UE3nWajcgGusqja33AkmqFRj2WANpo7ZW1wHH4YS6H3HhYsJSEB6ut4DkAPuM7mSg",
  "key14": "3i8eFQzhRnBeM6DdPCfSnFKZumQbDcx9wr6UZqr2x2nwQJ5yGeLMBaoy3HLTi9MLKsCrZvLgRnENGZg8zeo4VFmE",
  "key15": "3XYFcjfmEXvSjbjfdYJ6NuJcaXfULxrWY9Vty6jBHAiC93whhp4SvrE6ogz1NsChJrux992uF4uwdcGBtdU7JrCQ",
  "key16": "4wgbJgDGNH7oNhXDSZQUJfaj7MoP3MzvdnxJ1URzanP6mjEH3jf64DDwEaxt3ejdgbubu7Tt9kVKB5L25uAMPMMo",
  "key17": "3rNMvTJpc95Wqmv7KoA5c2L1MRN299YSGotShpTK8PwS3FaLVbw3DhvwJiH79b3NCB6ZJtjVQUC96vVEve9vLzxs",
  "key18": "5P8jKQoaCYMYoBagxEX5Ph1Z4DM9dM6C2rJqENkASgKTQcBZPSHT8G9gPTKv4PWtUvNtQiMZWAN6uv2ihqfWKEnj",
  "key19": "3nxi7xvEnwoqWUXk7Q8zQm5M8U1se3YvQoQTkrDw4qYmGrrrLFBP2pzGEQgrwwyrBNsLbxTy94DTYcaZtatZWTeZ",
  "key20": "4gqvgoBQGgVUavqHCLP669kvDcTn2u8Y5AFV6dSZYxpY54SYw63Kz2m7xZZNLa55rdJnB8HVLJS9nVXhREktytA5",
  "key21": "2NY1Rfsk5uvGUNAshDKhe28vxqp6zFwA1qeYkGk5xEQ64L51crjjcFz8nLjg5TveZ5vW5bBNDYP6MuHvqjFLpDUB",
  "key22": "2VmrhAjBMEqobvUS4mufh7GoZ1bp2JjNB15nzw3kgHpoGLYNzn6Ha2MzBbNC7vMfpN6FS6pDdKvg1U7B6c43ca7k",
  "key23": "2xTYXHqp9uZfoZqxMNH3LkRDGyrc1EGLQBiCDFDrELjLRtSNDdsqNKnPSXnwto2CVdYz1b5qdFaEQKKQ1EZeXYrP",
  "key24": "5HdJYDmAk1gCEiaNbSaF5gNZ9VujorXrLY7THkdnMpbY1kbEtgqAPabYzzzdqjKMnczsdWJp1UvLXgRembdAGxfQ",
  "key25": "2LxRDGbKoJpGfQaxmKZE8WS2QiaL5SsaxpNXHCeoJ8BybB1fWRiS3yJnh4DbtGCMpAZCb31kMR4tSp7uwbQuJtQY",
  "key26": "2kpRDtGdKJ7kSzx5omNjtaX8Td3v9QGu4pZMAGNEaD1SW9n3wpZKUCEBPiTtU6VGVUsFETRsSTTn2co3rm9Y5rbZ",
  "key27": "5bpnuu91bjzwACCtKACCr6rrQpD7dq1gkzAKVVsfN95rroYfEVeXGRqnoY8XeNUD6XXbZN7gNLpFQNSNz7aRAUET",
  "key28": "2KwuJsGthiuMp23sWpmF7hp5iVnMvEfriQswwSkvmEvfojQmNn2M2eKFDs6kh4mEs1rRrQFKtZzG6hTewijKwdXK",
  "key29": "3FEaBAy2WiN2vwWhRN8brW16NDqFJH6rfvtsX3yAFrRVAPuVP51Nbv6iw7xxWP9u8L67KLLRTZTga7FLfjCHVXHQ",
  "key30": "36DNwdPkH1dVGCJBYdgEV7nz6WYaBFMJCKLXWAnkQhgN3guaKzt7gZVM1o8MxrdHbLLyhB3H2HeKLy615PXoXi3P",
  "key31": "5KxneVdKLpZvjAhkeunuAETjPs8FvarxLTFhcpzntUDRvBVLnm8nCqwX8DXf3oWReNLL3HNhS4NbDKXzyRKtReEV",
  "key32": "31p3Z66dcjVi9W4i1RnCjX3nR8CKe96r5ZnGyTCSF9iCd3L5rDgmMNAY9eQZTRcKKSiGkGmmLM9gynmPYmP79jKK",
  "key33": "3zY3P6B4gsBwjvywmpXBJqPThZL8Eb6owj3xnZ2mzB7TzMsL5656PQPZhe3vGRyYjwwiJkRTS5HBeUiqnbSif2YB"
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
