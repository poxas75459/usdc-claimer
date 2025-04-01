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
    "61xnG64ZCnytvp6baLgmCDAvNYw2Xr3WAS6iYvqa2GRRMsRHjuuw2vbuAWZq9k9HX1GfjWioCoicTxU8nuw1LBVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F7qAbytFXPKT5Ss6YkGwDrUPYbrdmTdH5h7bcVaZ1Szdw6LhjrryRzeaeYbKbmjPtMzRMEPfyRNHkUZn6qAWcpP",
  "key1": "4sjQao3TSVebMjRrU41zikx4QBLSfFZosM7nrjBQbpvWSgTQ7cZ3XCRpS2C52yG7teoiTGX4BvyFkvgyJGh731B9",
  "key2": "cwcLQvFZPVfoMLTfnwzHMrDmuX4a9CbshnZM3eydgBFBsZATzUttuqpVmetp82hQ6Y4yLe9YGJb8tGJu3SpP2oF",
  "key3": "3B5BCJhKDJJrDtCPxMwgE5G5jjY8erzuYJNR4jwEKP5b3LwpEwJP4zVocYGkbcgwt3QwnmotodJdNTirVB19Qfjw",
  "key4": "276Bu9grAe3HYq1pHgu1xRuSV7doqoJxoiC9MLXoMX6ikQ6LiDQcgha4E4uSQvFgaEzyco91GWjPtD3JJdpiJ1fU",
  "key5": "4Jn72Ro9Thgnyprfd85b3hHKXLpo6cvXe3vj8BDMtamPMLtpFNVowy5HyGaPFxzP5z2gqh4DJyZnS9UTikASq4yF",
  "key6": "4dBVWW8qKMJ1hEvjpUfj11Dii6VSmZt69u1UfEE93gBzEiF9NcuaEQtf5vYXiqJkHPqGo3wrXvQR7rSrDZfbWJ1i",
  "key7": "4qUKfCbdTX5Jr1E4wwGnzJnc9LGuRstPFxB59hKbDXhsmmLqiDkYwH24jG4Dpwpyn2ZqWytsTNwTC87gPnLWXDDD",
  "key8": "5iKJPW2gLZhj8mcWC5ZW4WrQqR2grT3ETSQdxub2sMW2sY4TqebzKT6CZW6AE5Wo3DjxhNGkAhdMdVvsrV9WBaeJ",
  "key9": "Yaiy2aA4PgYgpqJPxZ27enHis2FrWxScW2zU2tvHQFn9dgXbg2a8TQGjnbGmKzU5SUKVicMofwuMyexqSffc628",
  "key10": "3oRU2cz9Y9srZuj8CQHMc3L92V3TDHJgDZbx4p2fnTMZPe3Kgz6Pa6TkMQcCjYYPs2mYQZ6NsKnSsnAoSV8WKbqE",
  "key11": "594AyUy47edtTQesWuooBkVLeNUhsh5hui4QodCKmPr9UNuk6ZQqUjkWqbz4sWbh6U8qw8pcURCQVVmSZAs6FhYG",
  "key12": "5r3nBAw48SPrqAjFJh1RDPYPn66kkNRkfSxJntxWHCJENhemZH9J4o2SCTuZZppQ78utCdgMQAZCLoHkaaBXfkq4",
  "key13": "2iRLopSqZEru8MLWUPJnaqMmMecTu3Hy92CbaPLve7hFdUdupbrPuxphKnLdRSReUFx6JqupmMq5j7k2gsPoPj52",
  "key14": "4j3XhAhdwGbuhd3TVVXBevJFsBH1RnmpXXn12bNrqJaKiHDUZonscq1TgVDWSgw61ymbduoUWFgkK82BoLBaiz6S",
  "key15": "gYxuimrUzMHsQZSmin1kC8WSDaBhLChKZx5DeboGSEM5xxC15T2sUhrPVbG2MWEPAR9uTsD27TrWXCnP2qVHzDT",
  "key16": "3Df1kBzhgCzyBtr3HgjLi2ibpWXwPpQ29q3SMqWFGasaXdZxnyLrZp2fzWE7TVzTwLZXxcBuiSUoE7kA4WQwKnV6",
  "key17": "3jgqT2dsNmTdZsGqEewPi69C7ymEVQGX22MixYbpEZ9Y338AE4k6Mu75HDwR88jVAJS9W9sew7eJ39fu1wg6hAju",
  "key18": "8okuHqCL1m7Bipu5KcmGgR4L5vyUwGkYKy7Y7xWUpaMhWhfgXkepr79e9ZuQ3omGBsKZFofpd7ZzFb1eyvFkM9y",
  "key19": "2u4rgbippSJoAtVKNaaUnL2D6cjEUX9oowSGxNhJWej6ykr827DC5WdSrp3GWjrupdMPCtgTksSJZdDymM8WshKY",
  "key20": "37GXUZcxkgwfBoef6EkJk77Mnpb4CTDGsyzcckw8MCjVJwhbdqKdkzdWPvS3kgrWWbuQULe3nKT9X7aExVCmaGk7",
  "key21": "2EVr78TkUMMAdLwzkgC1qcN5NVqYFNB9ckT7q3XhFbKfP7nH5rNXTxLoSnYrgcxgV4mkyFzTFkEwjFrvMZzfiSkm",
  "key22": "64nNBQTCjzgn4DAfxZji1CdLaFUhKJajinwtHMHgUNGBmNv2ZxEYnFNANfKGfnYkKc19WqpSaYk1S4Q4TJQrsisL",
  "key23": "Jm6kGfQSvtaKnk8uwzVxPcaSXZbqbD5qsHMJ4QSWRjW1kydJPYLBo4bDXF8LjZrPddfcK4pM9V2gQ1tqaic61mY",
  "key24": "67RcouCUskN57Bfk7oqCs2gqRVvGh7iVkTtyGXRR71kbvYv4qzYjgPJF2Nph6LY2sQjVKeYkfFcYFTq3H2iDGAM7",
  "key25": "9Pv77LqkTGYVsW4uRJEqTPyE6gMzeeNbWemSw1JAocwJ6TbyLiMtF7b78WjheS2gGwttW975QmH8VhbciJsqU5Y",
  "key26": "2SfpR8NPaRk42VRyD8QmqFZd2VNYx2vGW3p93kARUYGzMw1FE7bEHjUiicpsKQa8qsuYTywa7dicKeorLCr7sTRZ",
  "key27": "4WNr75h1mZtMQnF3J6mjRYzbDHJhMPeiC4p31J8aqQEme5SbpMgNPVhc2LX4LqNUy8vRCTraLzQ7P5pymFW3611Q",
  "key28": "2Bd8Dhgc9UQiARYXJgbKUUoPTeCqMuTDDgaVdypNn7GVibBGUdfLtai7ZC5iwt4NJk4Tmnqo74fWsejGFCY3xLgF",
  "key29": "2M146JnDHJivNthWWisxWhcrwCcsvPLwXrUqinHJkd6HKFCRZV6z4Pd6AP43Ey7YK7etNLnAV1ScSVMUbQzRTnKz",
  "key30": "ENqLCu3FTx1Zrba1LDdWtQAh1dD38S4HM8uyJBc7WDs2PpAD9jyABca6JFCEmBQQB7vm36wtSAdqkK7Cj3G153X"
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
