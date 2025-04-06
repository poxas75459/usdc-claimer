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
    "3R2sTMsNEYEPp4Kt9d9XepYS3v5XBgWB5D5vFwgRuGqYyVmcF1ComJAM6WebpBHpBxnjLGtCNVg276RSk9rtqSgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQvgZrXfLdXV4FxL8qZratsDvokz58Kh82k4tEwm6b2wgh433Ao796psDgPxXZu2Vny3HJxWDkaCetshhH2J1k5",
  "key1": "5Pmdc6WxXei76XEZiPqfZkK7VwBzPzPceURScQzzQhugVNsBVrSX3CBcrQiWC9pq5QNbvAK2Qg81h2FxGcEZLH9c",
  "key2": "2gruskHQCn1yGhHUw4SoSvcVEDnYC4pE1kCLgDi4SU8rdhBZwEEtV9yfRLhPtNh9Jf23sat31XwCK6xjfR9ZF7Aa",
  "key3": "5wC4vcDBENLDe9KnP4BvTG4kyjJRwq2SHF1D2jBL6tmeDEggXkYfXdkjyw2p8nLihLY46bFrv7TS7jGoSbHFVg9A",
  "key4": "S24aGzPhqT1RuG4YcwUTCNjnD3HMgkycUyRHCKGfdSFU8Fsm2jdJWRbzPrY7xhH1ebw7vHdCXEW8aYBSnQS78Ez",
  "key5": "5QCzCwuXC7sdfErBKpjyCwykH6Z5pHwLZxe3HxUmTqK5N1jYdkRGcBtbMi729u96vzpKpDUHZwL4oT3FN9K6SwJy",
  "key6": "5EkQLyzUN6dMp1CsCLwYfdFLrGAKZLnfB6JQ3TFgj3TsqFoaac9DUzopXg4P7jsXKtjpeFBAs3j7K5tZDdnWp3DG",
  "key7": "579CmNBsu7vDU9XBuBNYFafBCLjGQSmTrbwnS4qbz5VZaK54WfqFqVwoHsvS6P7o2CrxCcCDUDkZtifpPY7571YM",
  "key8": "4TeUUdYtN6mmaebNabp23GTuqRauxr3ghwimZzKzTcKVJaEyYbGpLqGKVThmdiLR4CMxxWLeorXKGqZKCmbsFieW",
  "key9": "2H39U4Wy2RiXqppMX3Qgt3naZAtHHnqbKhoUHiMpxNXoR4kovj8XQ9XxJ2Q5hhmAwfHtGJ3JARZ83frRK5rLxp8M",
  "key10": "3R6db5c6E8qsR84qRH9WG1T6irzQxitUXomj9p7Pn2SRF1v3XkFquY4ZpfhX7iu5wM58tRGVKFXiPo3qqvEvjoZw",
  "key11": "3hG7NHZfLUFJPoMRNtyZibkA8rm7bb7qhbCqDiHY15m9E1NyPTe5pYt6xURtHCd6NkJyoDUp1pWswibosDFgGQ6x",
  "key12": "4n5jPMa54kjEUj7VzGed3mtfSB2vKY2nWjtFHmLLDvCTa1fZ3rH9d2SCqvRDqC2Jt2w2EExsgDSZRvCWVoUZRDaV",
  "key13": "5tuc6s6qwkyc2mvgbvdeyR9Lqd3UwtJmZMUADuft54MKtVK25mxTJhGMg9hChSse9qnY7ruyJruL7jy18K3rUApC",
  "key14": "4cSHxJVbmBQsNYdufmBXF5M88DUpE1MpehFizaMCbv4tdpgcrYQTjQmfEsXE4EkSoJRNmqRezCiB6fpnemprNbQe",
  "key15": "4eZyhbWwJcCfe5hHaZfTniJnvuryq85vzkbEm9nspghMSX3sbXTcS5hxmXjyq7rzaRHkLQhnRxMp6oLg43qtEvRg",
  "key16": "3wU7nN2YYwmwn4hYE9NwDcWm3gT1Bf13b2Za1RtEcCTyT5DkQ5HbbwDXYjM6A7DVP5t6LHrMi2HNEhm7yTMwTvit",
  "key17": "53TG5vsV3SwTp9cVWebbP8fNQcVHdBZuWiL1kUP6WBPrDQFnnYAFrj224hQTbQjvpyPbtZbxWmvJ39gJjifqvx9i",
  "key18": "5aQYad9qctuhhakhhCZNHuCvv8jCpzd1PKb4rnwnauWMNoxKwMwZrHFcFnC4hUw1Y4Aqaj2fcVAUYsv1gkm22HRc",
  "key19": "2HHSBbk1CP1DsU1Z6aBUUz6anM2xyxVSNXk5KUf5jLDrc1D5WAE8E3QmtBmZXxm59yKLTfSybZtzg94rtbKBnwpY",
  "key20": "22Xqb1G5FPRYKDBHiixqQb6XLPPavmhYosRxYKUUfxaUX34qkN8dJzQ69sTaNBVzodurnwX8sVECecjvZenPYJkQ",
  "key21": "48gJiaZdQEX7bzGBdpeh1sxUV7EF7UESbDvnCPnTpXp1FJsUYV44ZMobex2xpx6CruVxHHvwCXmB3umQMcYEYjpF",
  "key22": "47GPc3dkFzrQFG8gG1bHznNkFBJx4CLa8S71SqugjfnvsKdgedqTHEwjzzeDnkPNLQZKt4cjAUWxWQ7gmJHRxSJM",
  "key23": "38byWW7znkN161FsAPnDhZkEZHci89o2pJ9E7c3RpvjrTLEj4Szjd3ZV9gkJjZiwB9bU9syinQD5KLoh96wBFxAo",
  "key24": "31HDE7aoh5NyjK28UW8sdmC363QoWd2qgKA9VWtshQVqtN7yDkXSc6a6eRcn5QYE6aFSTa9tkUckuaciL65xUXQk",
  "key25": "PgR8uqnfURfacj3DpU2X4i6iEfWZ5VNXuphK96Dt1U2VacPgLRRWFUsArguFhswHnvQvP67hfJnSWHZUTA7iToC"
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
