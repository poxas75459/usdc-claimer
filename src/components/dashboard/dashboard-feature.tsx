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
    "2cR8TzcysLzyRZSpMRA8wLXupXEacuHUXE8xFzffjTCv6QGmv3NgZKwWfNTN98SxYp7JcU2nYYVv5WDUDDgm6gM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8bPBffCdzUVhoQpxj3uux6ngFF31chxDtTdRWkRCdo7Wgp6Z91Tcz1mmNWzKEoz5P61PjRZLLUTZ6tvNGPDTpa",
  "key1": "4VexuKw2mZHEU613JeniVriXqgeDsLsAogQk6G55rAAYBxcowbCFMvLvWf14gVcNr6SDFQCJut1GRvHacDUS87TN",
  "key2": "2GSQKzmcUQ5bcHHsHkQEo6u9XKzYAGfSkjeZob7H5YcvHsRvCZHUimd39SVo7nQGkFY5xGzVzxcTbp1ReUeCFu1m",
  "key3": "5PmuxwQ7aWAg4GT21AqifUNCJJFVnA6jWR3ThukyNnAK5jtryzzmzepT7VkZxXChoAAYoWaxqXh4WTzY7M3S3znm",
  "key4": "4eV1d7qchAbnmmoT3LNnK2sx4bZgWafJJnBo6MYRfcFg5gRPJhpEtBcSfr6SMZvDMPabY34BCh2Kbe3VC8MWhYAw",
  "key5": "47KGnyDTsp7ppZfjdiykFKnJ3WyqtLxqB31bVFDuns157c9o4k5Qd41y2JqJZjUTzocEncNNN6rqLMVTvQKivpgk",
  "key6": "3aGFWzmYBzi9cHm19m7HPAEGhjXvEJ6vizMyRrHmiss1Rw4aM48X8LKjwL1rhaGgUZSwYKGc7hk36JCTsm53DiS2",
  "key7": "2M9xzNCVGDisTNzGfB3iNUkjy76ZTnaLjdgNKU6u4NSSsaHCmw26BWxV8tzUyKWVH78tZ1tKev1Z3v5SUKfiBXG2",
  "key8": "4Dj4FNXBUmBKQvNV12Ntq4a6QJzaNQxc4BVe4C1EVuNWJ3MXn9n3i5DbRbKPBBfaQx3BcXbMzkDSRL4JQSskZfzK",
  "key9": "3P7gxJ3Q6jrtkNcWXDnQF5Tg1Q5jAWYY9jDZLWtgMwjs8iTWG55UkhpHYcCjERnE6cX28cwDMGp5akN8XRvAUB33",
  "key10": "5KZERnAYCSvxaJPtTH2nY8Mcn834amYJrAn8wKuEXGv25gLFHFLU1tzGYg2xPAv3phmGH2q4sNdEp2oobwbsMXee",
  "key11": "R52bZHqJAUMMUWYos5F8W2gKeAxtnCnJiVAz9hcdrapRGrSk6YRb4wBDnCH3edqsNsQDidYqxpanVGLTqQ2tFZx",
  "key12": "26MGnrPm1iGgv4bbq11nD8Cizxf12EvDoNzJALk9VaKiUNQLPNsr5D5EUpUdpQzzc6CXbiWRzdqnvj4YfYiEzxF5",
  "key13": "ZbV2Kkk676ruSZ3K5YmHER2kftbw8dD6PQrEtAASzP7gX5DaewJvtdfQekiSRRJK6F2aeMX9csefaaRGnRa3QPQ",
  "key14": "5fJyqsJZ9osiG4f32TJhhozN6z7GEuiBNSHxABDU62JQeFd2FDiA3riRuFYF4qxjCnQsfWt7jCcG1Myq8vVDYVTP",
  "key15": "4ZaovW5xYEJrkn29TDcS8YBocY6Ti1wFtfKugThZnSjJn4fm5Jz3GfdT4PdbGMFDu3xWdsnboRmJhqQbhgWYK4TA",
  "key16": "71dCsJaVdihjJQkSjfTNDqiENR1tKdXn8CT84EdhkBxNS2roejXDu7vid3H9ss7uJFXeJbbMT2gUwXTDzA8GCnB",
  "key17": "5iTuX6SgLX95KRZymkwsqA7dgS9nFNLpEFpV6zuYgbUEj1RZGxNyk5gms3196pQHK9hGs5mfTGo3ETnaokRB3cd7",
  "key18": "47HnDy83rkeGWsjWnu6zANgKjMRBsaQv4nR3DvKqRZH6f7Zr715woiupJh6rBj7kG9dqx8dc3JvmpG9FuJq7AhfY",
  "key19": "2s5KUVMHMbkL6fHpzG7JAJTy3CwPRkhQNqGjxRhLNghSYmCpt4kJHnR3oZMgZwpdVHMc5QC2HAvpfajoBwQsBh9T",
  "key20": "iJTXjfSXSennbSSEoZSJww7Nd93va7aytngHvwRHcjr5cmLfPurnQf3jNfTWTXZ2W5JfKNBnonxF4P8uZwvbiRJ",
  "key21": "5TdSnj3hJ4ovB2PTdQ9qLnoq8QziqvtbaRY5xEx8V7NEjizwZSJTxwSQDvGzXfh8QPBKt5XRr3NupEoSEmqnKRdB",
  "key22": "31BkLYXQkniBKwR4LF2SaDvBSAbWoWCB7f75S9MCU1V7qZfM5iLxh7J85Jk2B4HJ2DhaSN4Jdw1if5W8yZsSNGzB",
  "key23": "5L6AKdUAkdRv8XQ9Szzv5DN5HyvA6g84KqxLtgZ32o6EJ9X6ojJC5UmwEq589ML5GGc9AEgmoYskYdR96fuCRgKv",
  "key24": "bdKZoMGRDbfYusBLrzdwyf5rEV3UbY7AmKxcpT7No11PJEzze6VA23ZDNepKQx3nNz3Twwqqvr5Zarq7Yg1n6mu",
  "key25": "2H7XCBcwjrBb7mqtZiwkoprxWNBQqaxipPSdNvwhjiXaRJSjraKxpZTE63JkMYfxY35NfTBsH16aLuY567qS2STf",
  "key26": "28CyJqGy8qLanzTQKaks3LFNPyJLXKYoCvQmCVm9duD7SRyGfYd43BbUhYNaXtmv834rMEnZrHew2Ue6FRWpjsWC",
  "key27": "3qDXghiyBp5zkS5BjP4ee3uEjMjKFQCsMCVkMJiX2f6FPCKx2DskeM8vN3MfN2MBWFntFxmZFyMMCuyks83FkYgg",
  "key28": "64pw7YWa6qG6J34x8gVMpqkQV2C6No2LFYBnSNsp7eJrXLMwqqKMHnA9G5T71KEEYztCcDHPjqTmSoXGcddgtCaC",
  "key29": "5LRjKS1x5J6Qz2cWaNEbjvhNjpX82A9DyibKrXanj7UEhVbRgnmdEf7qfytZocW7rUudMaTSYFri1v2D44K6NW37",
  "key30": "2dV2S5rrSrFJnW9zszU3DNneT9VW5PFbZkTJhycbTJ8ycmuobJt9cQbbVcDMMEauJAZbnVk3NMLUqavPruQJ9UJn",
  "key31": "rDjjp9NCuBP2tQq5pihheoNZq2KT4Keup2SyafS16Ph3nuCr88fMr2xcS9vzuGFnaxd3yAQjiSbekr2Y4ivpULb",
  "key32": "4i23Ro8qYEHWzorYKrg8KYoLQnNJMYdUoNgTu1xhgXEAgE8BjDeRxv2WQQ75CSziNjTmXorfHym6QSVUj4aXZGTX",
  "key33": "3MtwNQrkkHUw2LXWd6wEFQJk7r7e65n4daZwqAex5SFph3wiELExXJKuGQFuZV1CHHF3b7oYKYiHxdeZu45N2yE4",
  "key34": "BP2ioUkVE7RUP7o3Ac99Xo8riWNwvM9TbQMh99ga6bQgbketsvTaYUTHK2KM1bWFLzqeXjq88suywBR4p9YVbYR",
  "key35": "4S4dncD6KBgZn5vLYwqkvC7ucYtaeAdV8dJhVoHiteyVVSD4sk3iCXxbDQbmeHDtz8s8u4fxLKJTdWzcTSBqkDxr",
  "key36": "fe1berCK3DdoNENzzw1FviC4z2aAgk9T3ESnQUehLpisk9PP6V1SKkjympP3niP2FmZpDGMpnJ5U7pSQeayucZE",
  "key37": "2oD5jnxjKPexy38y1H1se4Wx2u8yKLAZwRgVg5qCBNemPc6VxdH5acF6NkeJsx1UFoGDrPKTfuZ2CMtQYEruNg4d"
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
