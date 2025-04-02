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
    "zS63ERXHPchKa4ZMsKNCR98MTKGCtZtZNxZCJnzAVpfjXk2rXKwy3xiZt3gynuN7dY9eXAkp988gKALivZKX8BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4sduXTSKYTRsx2U7BC879ow5vjKomf42kyXERkYMAon87RLfLZLdnMdbuF2dDS8puvMMQerNXb3Fmw3eFkmRx8",
  "key1": "3pqx2vivzVQrN3DQnUA3iHi2wyM18RPnFzMWavxNZfMvoafQk6BYo81PQwpktHeu9t2DybLtHpHa7m1iA1JATP3c",
  "key2": "xoyqe3R3LrNt2kTsLztBm6eewRwVPDjB8WmbVXzv9wEafZvfRx67Z1PuSDWBcgrjopyqk62osEho2VT8XvnsWKz",
  "key3": "665x9gNTzLQ6pMSeM7dtDpYsBd5qN8z4p86TY8VrXs9BwYNVo37iELbfUqEjN6oYe9gk53mAcpVm4S7mqJyiSiFv",
  "key4": "DxEJPkC2uh6Ypce2CfpNjS8mfVk9AjZzns3ZtyuUxCWMFv3xxjwwRU1LLXU7Dasoxow1wsT7hJxSSxnRTVUopZP",
  "key5": "5dkL4jiyBwLbnATLoSrwtEGpcBZAKEJ9hkCnU8q7GvTUeD2wqQNGeJd7HvE5K68sDYisFNeGzqeT4MCuFks1AXYw",
  "key6": "2cgqovT9BHCrnkpWE54E5DiNhEAP3Wn82wKkSS1PPVhHwqb5jPRjPPZ4FiHUVUFyNkfMy76imNNwtRU4nrXp2aYJ",
  "key7": "UdXLrkV6NwWz6q52bufJjPdWCWDvFoDthadKzbS6BUY94hzke12CtFEkHuiW8t8rD3dBLzubnAB3Kv4TrMB6y7E",
  "key8": "4S3dgg8LqsiwK71aoxppVGt4nrYZjuk6WknJxom1b1KUaZRvWLZnMGwzS7FcxZkuUxXfRoiQsL1YpJ6U6EQF8Cpg",
  "key9": "EczxxYH8iQ7SrRkV6xvVBevgv42BgRZrvbB9DHmM1gmnsCtWRcxP5xpYV4dnWij9uN8PMcg57wn9ZWk9EmM9umf",
  "key10": "2MqTA2LsEXVRyvy3QRTYMiPAJHvWA5kD4vtiRmv9pxLjen51sKg6VAzxvKyk5E4G1kvqCmonmDTvA1LUgzT5zCeN",
  "key11": "kJy33aPoC84zy2yZQFe2DxTd6RwpzNkdMq8hD4EmaBmj6MdXDLCyhbKsqVpck8efMnsY2AsWsHfEj1JJCyV2KX9",
  "key12": "5FivFG1c4EuNTs21pLbsQyekYewpBbx73sF1mwfPSW5XcHmh8wrSD9VuB4Dno2LWkzvap2ss4KibrU2bg36PAGUE",
  "key13": "VR7dDLc9uGXV3ZA47z2kT348gRdnMhFGuQU74ouCnQ94neykepVSZcM7sxESnxE32CyLPvEywkGE3hKKLCiJT3y",
  "key14": "3KScBfDo3uY4yMcZsaiza7R7iNBXbaiWWnuLdVhSkpZq4Kc4Jxk9DyDxLLTfE667CPkcp6D2RdjFgqbBY6TsQegW",
  "key15": "54QTNYQ22jSv9UCw1Wnc2wumNk93g4SPqSpC1rEUkc2FSRmGFbagkP6SZsCSLekrU6DpHGn2JhMdxkL6ePAQZ9hT",
  "key16": "4YbhAFdD2BTW5GHsVSv3RqXn4bdphWvDEovumSB6du5v1pgkjvaQxG3xkkwtA1p7UgYVQS8hVgfVbvJAx3gari2q",
  "key17": "4e4PZkm5Yv2bxcat3pzYTjvYmhMXGP7adjVhViFfB5uSrZdKupB8txMHJ1YrMBp9NnaDfrpd92jd8MQ6EMoiDrsU",
  "key18": "CVFQodhrYX1uxiYqKspm5L42ypGWs1N9eNeJPKCoDmmnxkQe5soG2AgPATE8APfDbjgpDAC6kiPspNqjd2WuVQf",
  "key19": "bRPBvyWTqyPmzFbNNhjTeF7wuvyoXf22QDPnKJU3VjPvZAnvEgETPE2pqazjs4EiFLwPhVMP8t4j5mf353wrR6V",
  "key20": "7D943D5tTEwM7ihdJFVUn6CAuKDgktBbN4yuCm9j3fZVoMdUn8b7jgUvSwiRbzttiBViGg18X8R9H2hsW2NKxBk",
  "key21": "3cnrYT4y9z8ju2zBR43t5PfFwC2mNdYuV37SgXMTneRWKkCEKqmSCayLZD8gvSyvodX67YFY6Ymb1UQe8PVRp3pJ",
  "key22": "2cs6LZ41QyGFAs7yptHk2MD1bdaZrPtWmndd6NLRSgzypBdPiZWA1aAYvL7JB8GJcoyNkdWFLLKLuLqpEvaPGNzR",
  "key23": "4LfjJPgFo4H8QrCV3XjdfqQAAkfNXvYAsSVH4Ur2AaGUgKUM86EebcaZTX1fvBBfqrpeRiSDwNkopgXgvEwNvN5z",
  "key24": "kaWNdTaVXDQhroi6ixBaggHZGk6rxfSDLhTNpG4kCeSpnVrZzRHBQbXXjpKndpc7kDghJPkmRDAVyErUzxy5aRv",
  "key25": "4y8EVTikRPj3uD8gEnhBqRLbd4bPa1rznSYQzViuMDraVop8dHVEHKPqBpGYEREkjCqKggHjrojT8xKsPgh3QBCr",
  "key26": "4H9SmUTTnbjTnTjkriwn1362PLAockMVbqrB6ogkfkJ6n85FwvteMWsNeFVATAaoSQRuMNx4R6rcVVREUuf9ESGy",
  "key27": "675yiE9pvwHw275mvu9SqyUiJEbvCtxcJ176CQVQEE89ZChHsBHxMVWCfEgYvu8tfV76kcP9iUeNa6UTGHPyw48c",
  "key28": "2aQNbpQMb4yd4N1tefaNbC2FfWt4toBsbomfSZDLkB2y4KbDLoG4b9F8B2JtKyyF4pdoM9C5eMjipSDg3pd1eAG7",
  "key29": "51Z43GkKxEVHoD5ZrC1CxTooEWHsV6xiBvzBQqseNZTziSQrmv7ZovZcsNaiPnEgujgUfQPQhf7QZADtbjtTeKVL",
  "key30": "2h4y5tmRsCqNHfoP2ppkbrg3waszqKxakq1Jp1UAmNeDtb3iUWBVShkj4MC3ATWWY1PVcR1wjmxfqo5rk17kTFCm",
  "key31": "4TXCKAaePziMCudYUuiCgmJUVD1qgpoevAWN6nsrydKNDJTnCm3MFdqTR1Z6ivSoLzQoS9v3AhEELYikCXg9tvnG",
  "key32": "618gNQy4CkCnZ9rdfd4aGtfcquVzB7nbVWVFgQTwkFafRQuhmibZG5zZ9exvUmzx9qDJDRcnZCRu9UuxHyT3rWn2",
  "key33": "nppkEsoGYVtHS2T577oFZMG7ga2cSZ5daaLGWQBZmoPK86qB3hVmpoDGRYuqkEXJsPyFJGBqKjo7r5y89w6bwxj",
  "key34": "4D56DuRt6ZYreUZ75F2k4fPXvgT3mxrd1gN9s7PrUsaFTyoLjWab9FYNGR7XDL7bdNUTBJ9uqxbXPojKMrLgCGnN",
  "key35": "5D757NQzvHRrK8AzvLpL16YoVpSmD2qd1vxMcyFh8p41D1dnamKQVJGs8pqg1jsAaZENdwY7Um4bhVaV4DbDzSjP",
  "key36": "1U7SYimCfZ7JjQSFaGVhCciGKHcbHGxxJX6JfXTNTrdEjWCEZxUYXxpfH9UiRXscQpuhc2Wc27t9kdz7QCk83V2"
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
