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
    "66JdTQuu76TeSCyWNzw3QKAwRet2h4wawLbkc1WoDhYTw3sKoCxnowMgVkgKUUFT1EtoTGwReJ8n6cjovxTwc3WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7JDLhQM8aktw5tpG3aTj8mN5vFPSh8Wy5Ph28at1pfgu7g9moBodeevQpbBZhW4Z8XQ7Pc3vCsA71YRzQdLPTwH",
  "key1": "HMdKxarqsx7ppjCZujAbaD3yeqNrUYGRUAsVMZeuuj8PtTBBMJB1ksHX7D6MkSpvVtMjJCUQEFcfbdkhfaH4C2a",
  "key2": "3oUnqW1x89TARLdeACw4TmabXH2V8ZXV8G5LTHh8VLxnJhNEB6MNuPRS67jduPNnvFHLHAQhgFfsEJRv32CMwjfJ",
  "key3": "4RH7M5v9AATrEekk8Z7YWfx2Zt3AWvUdzVCFfb7WJrG3idsqHs3d2wfvPVMmDGVArZyqRvT81abwUFygDvz3EFob",
  "key4": "4QGDwAazmuPiDj23owZtQFDYK83EfpRn2Qtr9xihT9R8GPGuhHYBMQBUErowUJMg6U1oAJAzdMK4j9JfVBPkARfE",
  "key5": "25uu3wuejV8too8u27XDVFGVhoFWThvuwGY3XPEmYfFEidHa6WcXFcfKPPdFHYiViaEf26SDVMrJuLbhK1dKL1Sv",
  "key6": "4QxXsJNaA8M6JkUV9Y4PEUHcwGRnHEAq8CkAVmakJxxwMFiwbvVi7yWQG1RLgXG2jPCZhX6s4jini9DMjQiFtVMW",
  "key7": "394V1sXW3Xfti4k3FKxRv5kaVre2UiP89fuD1hRdHL31M33veYXjM43oMkXLomFLtdeUDKQZ1AeCBF66PMVraFJe",
  "key8": "49zMtyi3g84HGMYYrMonE2R6Jvep29bEjrLKnaVvJZdiLUBwQ1Am9f7ZESUhNTsPccFc11dtjMfihVvTxAURzr9a",
  "key9": "3ryLqz4y8wpVsjQLhVYL9TfcucpdwZAHR5jtepshtNB2VqLj7x7LyUeWkosVyW8ciECBpsE2FtZw1Gmsbejjx8Jc",
  "key10": "vPxWzxqT2YA4htjzCSNuVgEDmQ7FW52gA2vU7aqPYM67hXFAGs9qyyKj8o1G7gJ5E2YbGw4dLre88NrZyZxMm5b",
  "key11": "43JvEYNU9TYoorFxxPj59yT1PS3nVioYeaep5puoy77t95Q6Gd5dEhjyZpJrW3Htup3CNLrS3j9VAQA6P6fq2wvV",
  "key12": "3AhhMqfxcPDoNxpSeyAYs3CbWEG7tm3pbtPReAmvqHD9g6qsWB4pmTD5g3mtxppBsFudMiWB1MbPprR8GnJTAQv6",
  "key13": "3NPoo1wL6LRyaEi9eLeN1G5g9kUny6yvwmDY3yEDKWBMUXpKDF8x9GDeSB72mCp4u38ePyuu5QVaer2JosnvKzbz",
  "key14": "4ehpMMzDyn2AZW1VgKW5aw7pqs6fgX4K8mzs4fpMFsbaWxX8bnby1M21XqN8vn7ruu9MFMiBNLGYESnQAq7GZuw7",
  "key15": "58VZGX3zmjcaJJSFPrLrjHTCKF6UxkmjwjC6fcutoTmJSVmQGDQoz8yS5xnjKgCj7VnEmXA2fiKzEajiwpWRzKrB",
  "key16": "3XRnDpLDg2QFXpar3A17ucjRC5zYSJUTVT3xNJMaXWhEiNtX3ZmuWY7LgfjmJvdsDCCsd7FUigrdTpoQ2wvWyyH5",
  "key17": "TynzuE6nWkS4aqNPsHytVqpt2viPsm8pLNw6VP3SeGa5g9tAPzuGtnNHSrFXfBMHes9LRVoJep8cGK6RveC7wCk",
  "key18": "4pZ6VPkJ75nSknBDd2kexyMF63ta6qyJsjZesy7j8BxuA3qA9fUo1h57y75ZGDPCsNdkovu13yPeVtZAt6WCWu25",
  "key19": "5xeqpHTQSgopko4BxAZNX3tjrZqPrCwE35PDqMqgZLwJP8G6yLXJNRx7xNrKexs8dnJDhNFLdugu5XEXg1CqJ7kR",
  "key20": "3zqaouGQzu92wGCjLRXWgLMGoLjDUH9EqYmRnSxwynP4ty4aWfPmhLP1NgRS4nBdNbo4nFzE2LuVQZVTnqVVUMRK",
  "key21": "eEUXu765Ew3MV1Drx6cH82xGsiHJXtwCNvHLWb8AaVLTef2TRZVB7KzQy3zjjyxEQP5A8fUL8ENLEcNTs9yJDV6",
  "key22": "5YkdQgSCbagZHxYLCVS7QkoBTWHQeW28TwPKxRrSSu3XVadv4EKyRbdg1Wmy8UDZijDuEqAJgm4tQRS1sZYPWa42",
  "key23": "DvNVbn5Xsim2aFptHzTBtsQpCwktVUFP7gBJ82aNDUYNEAgiWuWrhZtVFAM48sbh1FNmPFnX1frhKXbXPBdZrza",
  "key24": "aoMmSKkjNXf8uE7x5oCSPpCFDVJHtiHMArYAYN3A7AtR3fnTB7t1v64Pa4UPP2Q62QUy6eqiJ9suvf9aFT7wWsA",
  "key25": "39mga9GcykGfPnvCbDyNkH8TGWfkaLdBqJSagakHbiKzY32VmDHwHaErAqT2LY3CDgqFGsSHMGDcsDzHxCiBAQYg",
  "key26": "4ELevJbrMLuLjowJdfYjitw6HeUHyymhcKvULTRnTd884xXJmzP7CGXEKfUZpYbLtEEZ3Rr4nsQQL6FMUni47XUJ",
  "key27": "64XJcUiEHVi3egYzxVh4QF81RdkSxrmNEG73Hh1duYdMsin7BEi2tWUo5C9rGouEEvgDvt8J5fQRKUpEeE9NGcnP",
  "key28": "5vZRXskLHeXyoPuJJMoZuH2iY8JgtLSbRFKWYygLT1BZwhM4vsbZ22q7P8Gva2JGsPCDnEkHudo7K4sDnBeYnpcw",
  "key29": "B7qo9zHA8CGjr821BJ9ZW28xyFB3XW8RZeJVo9ho2men2rznzVnmKwxdRXYCb9ugTm4pW3JCzosydHZ2tyksPFX",
  "key30": "5BswxDjngR2T1wWuXeJKv9DzrHVi7HxwWSY4UxpekiYK218jmfu8pGY2vadrXgGpjfxkqvkFpSxgqEqnHfyT2wXt",
  "key31": "23aUXfHRcCcvGEG84MSXF3fkoysxmkFfjvCXVgEfMdGqceZVNwmd5MQfex4MXT9VFs839ufYRQt5o1jGGrMc4H2L",
  "key32": "DN1yrs2iY2YVNyWRQqr6BWMM9tu6ToZTSAXLtAwmmf9AM8G71YJwTHXzmyzdoyokGPFo8DMwm5QbypZRGRyHKF4",
  "key33": "VZZKfVCXDn7i9goKKrPV4yZzdBRUNBhj21izozxxwoQZGu5MiMppDGis73UTHeQKJ4ByWPf24Mc95LLeij8TEUY",
  "key34": "ABSqionytCEimiLaS8rk1bbM5oz51yfntFHAuJUnVXui3tXMyG6mzR8GkkprJftGAwkvmWwLVRmdDs1xCEm4AZ5",
  "key35": "2QW6BLJmmtBJPPso2fz8EW3hbPBpFnUMWeRRBvYAeah8ee2ehpyYFw5m2VvDfjnxZkC88jvSiLoc3kZFUnR56eKS",
  "key36": "3QY6onqFFPs6r2aKkLwLVLyg7YSJ6Pm8sznL5QP545BYo1bmaY9UvqiffnAa65tQbWKehqkVG6ksMLgX77JNfDp7",
  "key37": "8XX8kVbtv2t2ZYkB4kxoBW84dwurtqGoZ8quXJs48NckthAE9uKNKjoUyiyhJJ8zaXKbYf7ZJQwNWgZboEpiLQu"
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
