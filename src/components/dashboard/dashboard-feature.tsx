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
    "5uQtXj9Eaq6VeHVfkFeSLEwsXzn94zKcQMk4rAhPZeZ51NLcGDzGEDRCkyHaxPfaZmLRZBNo5zHQ43jik8xHp74L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eRWRHVFtHut7BWPGvs81WAwYQxCfTT8y1Juco9SvSAU79sedEDiPwt6QreSbLgC4HLyWJpTunKBBB8HaCfCRy8o",
  "key1": "4oyRFgbb4q1VoLxbk17gbmJPgfzX2i15fiNxHjLaXVSvUdmEZHbfyyRjq8aL2pcdpXqQMVzw4nY3yyfyZQaGyG4v",
  "key2": "2cmPxi6vVtxCFH3C6e7rH7tDH8tot3ge9NR1afC5Nqv2mb8meAKRFUB6ivHYiYVtgVW7DkzVBJ57ZVUvGFU1XGw",
  "key3": "5uGY6n2KYwjYd5aja2jBGidauyQBzB4zqNVMD1D6wNBwzg8jTmdad9we2psfyWoTNVj3GmvXf9YP3fSx9JMseNmV",
  "key4": "3uasbfTgBTy3JCtKbkk1xwipvGBbuEH6psFg845tJHvTZ89PxCAgo3V4PWGwBpTHQNr5SxU8gTeKi7BcuHu3cmK2",
  "key5": "Y3yQg3ydJwY34CaLtitoQCbRBGVJhSZCxDywJaKEo2DdcHPCKrmWARRSzfPqKmRGbyUFVHwBT1Nar4NpcSQaGQx",
  "key6": "65LZjqp1UwUVH4ut5jzXhctA6DaJcKShUjw3w6LVgUJ6rZRGM3dJsD247qDXCyMdE53nHzdPN4ECCkHtYgrNryMP",
  "key7": "i9y3tezQpDU9keAFNFVphasYWokmGjKCrLdNtjDQLcEd5MuKcehg17dVM6Jb1X5s2RaBPYMwSB8UwwH6FscQN2A",
  "key8": "2sMVcDYmU7NbGRCSDwwm995CUPdEneawQriabdxdDX3kN59dAyNBBkZ5nzqcEZTmYPKfWnWHMZVvTgM5Ckhmzvee",
  "key9": "3myjnn7rqnC5B6CvLRASFutoodeuEaWKmZ8YJfdTRsJGYRPbhx27G8H3fvobA1nHBgqLuM8zLWYvjh1BJnv5YpYe",
  "key10": "4D2M6nxZuURzyERdYVvZXh8sNerC6HAM3RKM9a8U2RoQy6gDzFdVFu9ej5FQQgRyJJvm14xgxo7iysY6JkspHpVU",
  "key11": "2Pi5tMeWS1SCP2KsYXzSggbjceB6w1Sx9sUGUpbyJmUWAFxGFogaEfg3NFSj9gmL9m6s3K93mZTeCXsHzmsE6SH6",
  "key12": "3YBvdnozwXoRSKyFjDVo9sG3VhU1TnC6DRvBba9YNpfKgKEcsG8ypFuN5qo1UTQCF9ktKK3kV9MsEC4BW6ZciLx8",
  "key13": "2oER8umFgimyAeQZRZgYzeDpB184yFsCpXeVt7hCaxZznc7zMxXtwjMXMcR5HV6UckgcwDFjXjkiL2zdfomTDLM6",
  "key14": "531AzNzva8oqtpj7gSJ6JCrUdrGk9KfkCSBNtAZMyDYHF542QWY9GhLM5JR9K4simH3GnesJ4kRhGP4evb5W4FQ6",
  "key15": "3b8fdS7p93NnPKvVTgNYMGVPUsrULs9PsNyHJaUwhsqopaN3cyQnontAXT8VxhNtefqkwM9rxWrPKRK5sxm1mM9E",
  "key16": "2RagF4bm1PfFNuTbWEYwYE4MCW2DS8bLtUawkR3MftdrgjQ5gvZyCQt9b1KVtMByMeapX4dbDcmFygQjZZHgXPk1",
  "key17": "2ziinHH94kUcnMijpL4YiKwNeVM5Tx3GzJ24u9RnpvVfJz7W9TjKWru4tTAAAu2aXMhpNyZzkXaarqPcF9atMS3A",
  "key18": "23MLytob6TQTGteWkqu9Lp6KDgDRZDZ2Prr6FyBVMEiz254sEknRaX7pHjT4gpr1QA3RvQFJecKtmb6tdcv5vydi",
  "key19": "2KKUMFnXXt3vA4Ukr8Qh5Edb5x8XX6oZGswvXKJygVmZMA5MQ85jGWevWNHD5JeKfRVaTj7TzgHA4oUBAdqVYyef",
  "key20": "2mJhAqKmCH4LMALUEEVBFvg8yupNC9Jq31Qnj74VZ2fQVmV4eiv6DcQzoBqeNCd2NA7oL32xSWH57aTHFvoNG82Q",
  "key21": "EaVuJQ4Egdq2nCGWjojQuScwQXc3muKuqJkXAPPnn2X6Cb3nkX19xJeY9cE3iWpE8u7GEDXkakCJ4GW9ddUAF3K",
  "key22": "266XH4y8RnyxtFFTq3yZ29HUtSRrPynYW4dEg9QnKewe2DAgBLFhu7T6j2XeVstidu6mxAbbFwf59i7TyaaWq7W3",
  "key23": "45RBd2NfL8xncDjE6RFYF3Zb3Lg26paMqh7dP6uh4VKDPCpQGT5h3dN7LDNDdPfJwJq5mYQuMG8G5WHSwHyhAXRW",
  "key24": "3cutC5xmD4Z9cd9BmyrodZepWVhbB9SdpwJhcdVyVTdogEZJJ6MYgTZEuqPrWVZ3HYZSZV8sKoDJAZjehhRsxBGN",
  "key25": "4sdNxgB9BYGnv3bhzv5nTQmiUwBM7f5ZqsH2yUjScCHLrnaGYCoUdi8DhmNobdpv4eZ1V56QRqprAeAGpwNPSoBQ"
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
