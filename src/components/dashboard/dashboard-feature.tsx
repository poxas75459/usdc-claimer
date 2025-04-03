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
    "2RJHExgMxnELVKNVQccPZHLxm8zZHjqQLhr916EinJhCpPe4CWtBs87fEz8mf7UbcLr2NMg4nQPwk8FjdEVcJLUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVGuSgoq4sAdibMMgaxcibNdTsYfwkypdW5Wcfhc9hLZMhwLRRbYN1pktUviWzaHmhn4bbeq1crqf6Fvxf3ANn3",
  "key1": "5zGinN48z8vcCyw2gwBTXxNKp3beRkJsuuUQw266PvowFUfgrGUaCX9iYSzVpymtEwmu7YibMXs4Wx4rDs1KjceE",
  "key2": "3QZ2w62rk9vRm8yjYD3FToNWnh8KgvAKaqWMdB4x8iAXAJt7SmFgJEHPqJBYKEcs6dPLyMd8wQjmqEwb2GAn2aRY",
  "key3": "42Q5c9Ew5GY8nYymK2eMStD9PEfbgd9TGNxjMwqgx14PFLhdEDYqKgfhTvHXHsskHupQ9k6b83pn6jcQ46HrYrtb",
  "key4": "5SMzvNeaTNkd4Dfbr3usSr9JeKpSLLVm5Kk9tEjaKyr1ha1zWQo91Gx67X85maCJycEqdqFMmHFPhtBRpYaEE1NG",
  "key5": "4bPrHjyJtZM7EwEfjcNeijMuLw3B5CGp3MaYwahqBcWudhhHD7QwsrxD7wSozfwMSYN8HzQumP1YdFaHjwt73AKY",
  "key6": "3Htc4gppC54BCvToGDQtdCJafVKCWkjqw2UV4mA8nqi1ozk7mPNCQUgZFTdQxXfr4RUMMDccwoxkUpZrBgHrQj8o",
  "key7": "5Z8HC9zCFERgTBiT1jUBdehZPxwmb6Brfv6v8gZnFzt3AwfGKKx1KuATLGypQCc2UwVPNetxL4xfiCyHDMG9kXQq",
  "key8": "2TRUviK7UTJGyLzAcqe7KejsFd8J5z8yioPqxKzSBGSfwWvR4oT5DMCSoijdWvdLrBXTPdw7cAoYFJnrbiTyn1Rk",
  "key9": "WQXvM2ppB6uFyGbSXgPo8W7CSmcyVjqoRBRjqP6yZkeZ7KP42gfbWxfRpoKzESa6XH5VuCjHjue82agCBHFvLLb",
  "key10": "2FKGVgtDDzcZbqxSFumYRXvYWLqke6SzHnL2XEDmrYEBo7k4QNjePzxqjzKpAmkXnTbErBvBm5uCqZwr7XyrjZbx",
  "key11": "5uJZcTuu69MeSxCfA8qRNqUqmpEArEorbgzt9zyPeCMAJKj6KPLwdi1N4hUGw4ru6W3HwhSCtnWfg9f9GmBDxMBi",
  "key12": "3jVraTdfpJnXKHMmcZWudXFcRnAr8r2TzQtefTp6w7jyivdJw7Eqi8RJjhqERiXvaEJf1dYonXWyf3uZEbHPZNar",
  "key13": "4BEM7Diu82ctG9SmevgGbHWDh1k9qmc6MJ8z2qZg2KacvxaAWKdLwuUHZmUwKyzvmMYUHj6tcHCut3StYd4qDr9K",
  "key14": "2PCBtg5dwikecHSuQsMr4eQZtT2HvmE6sCmTR7ZT4ZPcNt3Zn34MphXBT8sv2vRouNuX9AZaTMHqCqaYAnbQkGVa",
  "key15": "4guDsQCAE8AN8hDZcbszMTukBRnmkGSYQZY5tLRGkA8dw6FQBR1BceQz6jcBQ8iDBTAzzK5n9JowzQni1sJPcSdL",
  "key16": "2phkoVLBNDvdtKWjF6QAeNFHS8JTnCnRqZLqQsAVjHScPZfWw6AzLSmbmrxkP44F8rzAfNoAcjPKZGs9kgKjLhKF",
  "key17": "48kh5678wquCBXf5U4DNsaVVtHwnW1AxS7xY8XLrsqxcsFHtrSV9QcQq35dVc38brjENQY1wBXSjaYtwQEM9hbas",
  "key18": "4zW68BkGun2jDDmUoUxwW2Qv85YpXugt9iFQPtaqkyZzHuUmKnKZvYYEb3jpKit6jq5aGi1j4YCMGXASr1E5Bfgg",
  "key19": "4zFL2UDapobJF1s5kgYVnxw9UCbrEQ67WtZT3tJt9LGxQrkmwUV4hef9vNAm7ju8YZcZXiu8QZkFQhxBRgNBa2AN",
  "key20": "2k5XAaYURkPsJBChGcuvPZ64v6RztnCkug5xcVUfXAXQf5XhdmgpZW2stZ4PuLsAc6u1zD6rhjMdAQpkRQsxu6aj",
  "key21": "53LDUAQcqrro7dCMP16tBJacnjucjVSjVGmpZ6XCLUZ2wVf5L9QP7coMsxrAzTMk6nhaugbq7LZ3k6zeu6M18HXK",
  "key22": "4vTyXeG4Yiooor94vrp8HrouVzryiPR2xuo49RBGS5xLrCuEvKVHBV465oPGysPVGzT2zxzV5AiGu82Xu5Pmn1E3",
  "key23": "36bAHFFBpzYNod5L5sy868efSpqqB644y3Tb3b4XifiZj4HbYJjm6R58iD7z9c4tqUAdtHM4Ey6Sn9F8twnFS26d",
  "key24": "3t5wVCjxjbhW6mpAQZmQvJW3hhpbsdC1fSU5GGMBPb5apb8vEo24nM4EpiHYkKD44JaQGTSojp32sLHJ65so2fdq",
  "key25": "5BKf2njLVo8kuUczKGtcsVvUKQBvfM6nSvV1P1rEa5SDodNVYkxKch1hXUVp1wZdviH8pSJqasmcmtPariopEa4c",
  "key26": "4gkoWQBKsMRQDwAgGn4EWQgaFruXgZtMRKBEy3S537xa3876cjUL1xMiLgvUvDQoukiwnxEHKqjfKxD4xwys6nbC",
  "key27": "5uJd6yVd73oM4N8Wp3FbpGLeehgnfT2zwqWcoxQz5qm84awvwQEQik2X1KoNHjZZSmhuTy64xQPb12TLLicSZraJ",
  "key28": "diDsLMRefBncwH7pKFJqeVPJU5SkHTFgmckM2iTrSiJ4pK65v1ePJoTUJH98jJNUHBnAqZyPbtwNvMdiN9RPjn9",
  "key29": "43LHyfvzdGhmwGkLAzWTYUV5qQKrerZHneEJzTp4mmEz4iFsR9gyLmmNH3UUQdKoMeYMHV17LGoALLdjcKqUXRhs",
  "key30": "3oy78Vamr5Nywet3hEubiRJ7f3wjNoJU5oj5rK672gBFabrgG4VtSVWhHoH34tw8vnfnK2rbZHU9iym24ABSZsiA",
  "key31": "4avZvXNGMRYvjNhuJhzycaEccadiV13ZVhVh4micAnGxoKWpeoxf82xuae9sW6TUKLqroJuaLxwSqmVppnKPiTV5",
  "key32": "5thZarCYbs85fA9qsogs1HC5qow87CDgJJiUbT2L71JWCTD3H97utJ7M8gU4gt3ScWSBbdvmoyHhe2fW3PtD9zK6",
  "key33": "2PCbDTtwY2ZV3B2gaDxcpVrD4UurvSRDD4kQR82rTVBPLMChg26batDgk1st91hBQrPXQsnsWeEbYWtrh2kR4wVt",
  "key34": "3YgrBVoaofwUXo5vjLirgBX8tnz2EWk2TaS7MpUbFF6S3wTPrnXAGoXNz7WCB5JUbuA4wxFt8TuREqztkKbsjkRJ",
  "key35": "2uY5rx7G9BGUVTa8qu1HuQdFzVmW1h6MsJFhR2nfqFcB5FpNxnpTuKfDond9kPWcjSkYhUJ2bB4VgNbBgNsTdTxD",
  "key36": "H3KpctDCii8FNAsf9ijXUZ5oVht7rRXvAXKY2h6x5QaotLTfw3QXVj9mkRhobrbiRV8fbpfuhtPbkMi5R5mmqDv",
  "key37": "UXWwjdSCHJSHhHoDmebyFnoz2dtHbk8qS4RcBFkX2R1X2MEsaEQR6g7XayPcaYnHkfWzDPa9dodV33xu6mzFw5X",
  "key38": "2SYLe6C5U4uQcKUaS1xxWk4xwDa6Qhp4fgbccKa9pdtkmjwBcL4KDvq8Vqcpxt7L6wqaqwSFs8MYat2MyTgAKe2u",
  "key39": "2zkMqZu76FDpWSN5eve8TB5TuGWN2qjuWKYdadEEQTAprYtxecoqkphpQWo2UZnU73js999GugcxT5zXPq38aKm",
  "key40": "5RMTu3uNKGPpYQPRsi9MysbdU9QaaWb4idCrodYY1QpffGbnZTKjbHZvNxgGxa7N2WWr2WYdg4AqdtiE7DHkdEKL"
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
