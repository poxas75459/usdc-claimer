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
    "3417PMxvxQq3THnFdXFkxd64is4WFQrGUjZGEZwfC7uafaegCCWVyj753FGq6myEmyhzVDK5NQ411CZFgzR8nvq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ojjaWbTE9phwcWzbv2R6eb55szcXUUD6cg2YFGejk2DBa5VjDZ8U3ep2ekYEnCBFMjwpcP2Gfdv38vCXphUBZJF",
  "key1": "4yG9yPyVmH5VYWY6AgXr4KPqsidn5zwQdL3R9XnXJj2N7TYkUUGoAxYZBK4zV9zvpE4hEqoprLuDvnwXJBqhmqx2",
  "key2": "5hiFS7hV2JKLaKx6ZjrSRPUZgwCu9c2xUBQXM8ggPvm84HKrftvBnqFM3Ve46QcwESu1iwhWmViqEATVqRnv29Le",
  "key3": "4pJDQ3SS77wWJwMCKZoC2joYq4UBHL2XHboT2pAdNQQEFkgZBcQ1uZhRdn8cPv9BqRS8invgXg4cd1XQSWQ6w86w",
  "key4": "5nJRafxd3yX8n9Y8LyR7paQV6PH7BySiEGDeDHhDcdFz2wTHguqxFMsHryPnyEYVFxjaVbH3owhwNmdHu5cqeZhB",
  "key5": "58Kck5rzjLNwNDS52RRPb6AtHvUgmgSwUXs8VCzYKmfYtp6JLPUK8LoUHujiN3CDVJMUbd7Rx17sY9bLoR7zmC6",
  "key6": "2dJ6EngdrPETA6jmxtvsYQVpPdHhWbvv8QjwWtL9ZnAYqjuvVAA97XCPbXBDo4v69sjiYD1pHuugdpbTeydoosRd",
  "key7": "2ba1GtiHUxVb4aH8d9Jqjt1MXvzgpyYDdr2T7yJL1kYqxX3WhuGPQYCqQACkSzYDvUnii4jxnMgTAPDpk1z22ptm",
  "key8": "2CPUzWNL9utQCFpxxYrERY3TLdNhpMaxurYPHSWfMRnyBHxFCs8hUn1iA7qw1f4mWSeSMwgmXz4KVHenvLn3Uc5d",
  "key9": "1o58oH3RThCbcg4AoU1oxAGmvFkmXX4VNfK7yMqeSU4rnETJyYktAqid44LDSZ6M6pfmKatq3uHpzceiF1k7mDQ",
  "key10": "4LYEeXsSD3hfFH2kfEmg5S1xBy3AQJ9kgqHiUtqqvCPhaC6qPoMyfaG6YtygJAuJxXT5FLaJjG34aNyGWCFMWspg",
  "key11": "3bb37c2j6aju2YcrkDcrkMCUhpxPaAUvKYbE8XrJwT29mBnhYcjQMQGU5rJHyS2FMqRkRAAGAbxCHzZiB1RVMVoh",
  "key12": "5JcqZ2QnWpEmbWHDshNv5QnBrzGVKPUmxEjxLZ1mS7n35Pqfny11z5GEuTqRdzuCz6u23EYtyhsBPoJP9HsDKuK8",
  "key13": "4P14oLt9Yg6yYU2QmF8C9e6TiUVdqxVFxXDnQSEPYdnh3invb4WgsumEh6tPJaK6oftWnyefYHKNCGcXfSrykTTF",
  "key14": "5zPMGmYprhCYcPnVVSYWEWu6qbR4Ngw5rZQfSEAbJfGxpWdBYiBjxhUjopeNLGErq4ZkT1qFU9PBAztd3bSJPAsK",
  "key15": "4yA55oLgeg1QgJi6DdT6nemnkfcU8wu6qHp4FX1kqjQKefAFG8dJA1mtVAPaMXmu6G5EvfqEX4cM2YYMgDYDrEE9",
  "key16": "2fd98kGk5PFgG8WUN2ciF942wgpSFMDJsPxXx8VyZLXfndMPycfJoGHvCUuqE2oC6SzTjQyRbRrbRPk6p8ZEMFwv",
  "key17": "3hqYYuNBUGMhvQcRWmj6KEaUWFt9WQyGyAAoNx2i6fNgtov5AxPG4cSgHG2Mftxs75ax2KT3VAuJSWjNs4QPRsKu",
  "key18": "3xd4jswu8etx5VB2kcxgr2ufSsMakDShaphrFxw7A3GuKWqhaAdxZAoPQpippVtiZPS3Z1JLR9Ze5TdgGwT8uY8U",
  "key19": "2Kwu2ARZyPyox3c1tDswH5EvaMB4v4jGVPxZDcJGgCbBBNpLvoyqsJt1XEQrtT5EWJXUoB3hiH8LqpUSnFaVxSak",
  "key20": "4aKqBsnmJmByHvCbbYq9pJi5fuc1TfhYBsNipoKSQh8KstAkVSswebpeY2xvQbrraFTRVxYHEKPTt9AC2gTteL88",
  "key21": "3QnDjGn4QtBfWbu1d9VLbFtSWTSBANHB66x4GcoA7zBTwGJjmE1861zmYrJHDxamEdbFsBNVQ3N81oimMQuxQKii",
  "key22": "5AUisbD6n5geVopRPgRQGGPUmUyfxLm2xRXWJrB3d4CMMCoxNNUojR4igJa9WKsk4f7mxoRGLe492zmPsWvkfMdQ",
  "key23": "4zKHLPsnicNZJB7LKLuxcfFPxuTuxL9S2NpWxUitN7wHiMF13SM4sQEAwS9vmas8dWBLH5y8kvehxrJk1C7og96m",
  "key24": "3MW3RRYhipr1jpiYAKRmSRX9BStzQDhNNwYqXMuTBdYGV6frXNN84LTrj6vumXHGc4Yfda6mnTpqCFL9fka3F7ub",
  "key25": "xascRBm6qTsSDGXpatnT21BcHPaAd86gqQ6gwrndiNHMKEZsxqPC21KANU2RwdkW3LMz9bPTWFy7Aupozq14tGM",
  "key26": "5DB4g3p3GvaTzqt8ErKd1r24z46r6LiX9JyfwNLFBba2h1jMtWMZrELCxL2KKHdkiepymrhWtGrf84vAnPKN5Xae",
  "key27": "294Sjz4BTQeFLWnRpCRmih37KjAYEy7M9y3diZQ5KrsfayaDLJ9pRrdUqj6TjWoqmHVP96yWukKVQCjCnSdu87bH"
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
