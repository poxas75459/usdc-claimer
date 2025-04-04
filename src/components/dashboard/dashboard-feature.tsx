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
    "5EAJHkvGZ3sfcSp8jS4eMpHTiGeuWDg4ZnPtfpUWRhnA32QNK798cAiUyuZz1cdzuw9Gv4stjU15n1eVbj4c2qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyq7hACU8djCxAmS7zdhnvP8ZpEuSdosqpY4vhjiL9wTCYxprFPimB4HQ71mEViVStWQwBB58CuXoqUEazPAxsQ",
  "key1": "2skNPN4xGPezWmLJywzoJfdFm7qKcAhptHmdiPosTaGs9PBeKbgpqQfQ1SYbccQc673Mcc9eb5k5hgLQM1wijKCT",
  "key2": "45Bx4TMVQ9EHCM78xJFFPCaAjRryytFaH5vcJM14Je2oLApCfZNwQxW8vHVE2LGXJE6EwE49EdY5nJBS13eizW6U",
  "key3": "2eZwbq8qdey7QxeWyWyKdRgJMTFccdCogpSGipHVojETgsRBBoKQ5xmnZa4h79BokNTRFALcf8EyjFjnVPQNtc5Z",
  "key4": "4kuRpDDsjuziKZuZMaJpviQFUhg1zMCEvmWhMTtvEicqZffTtmy8suLJ39ybGSMNteBbdHuzwrmA1Dxf7WYQ7Lor",
  "key5": "ztnNYGTS7XMiXBSoT63UnKRyS7QpF3SHeyQRbjoHUfBj2rBEKxeFvkaPUuen1Xd4ZQ9DrjVei6TxHv2iAm9UA1t",
  "key6": "enYQQ5FMUfgpKgd9SQi2m9UWCLZpUPPmQqKaJA3kDKCiv6AA4HZ9rteoXMKMSx82TsrLeT5JJ5K4nYWEVsbVL6B",
  "key7": "GjRXVmcybgvnhRkC9jvUMhgtHv4H1YVbYwq1g8YLKS7iRrhKyw73sHm88FWUDL8tkuHpeXiD5dAT7otRri5zsbW",
  "key8": "3YjMpnE9Ybsfh8jU4qdBSbrtE3Avyq5Q9AJAEPWagQPPitXTbYcapuRVvwLd7hppCreDuea5WZPUhpQ1HNHzUPLm",
  "key9": "5nMhBMK8cqUnZCkRUvKJEz6rtZhn7GPy2mov8PvoDxEyaCPiBvGbWNT2PEFCDPd4HDueUj26SWLLwSPCbZCfR8Zy",
  "key10": "sE5SWM1Uc2jmKoZPek8aaW5izrh4v2YH37TgP1UCTVDAu26RtEekcHK5YDHvNtSWEiSVcKHBJ6wqJLpx8SGeG2y",
  "key11": "5Yw2b6gMiiuA8iiTP6jzbbwonvYTyUmHuani6P9AR27oGMf9Hshn3NmX9nB7vU25iBDGYKtBLszrQ2XfPFfzaoTU",
  "key12": "tgNYmMZYoZ1guS8HiLiZLLeghKpiWJdnaJUDoMuQ9tyZqQtzVxy5wfc9ihhxThZgYxL2NwTtpmtTjVR9Ef8pU8q",
  "key13": "2fEwyGzzVNGR7wPyaHMSLfwbqS3rDVZ9K9yV9b56pew2oTBGSwW9RwYezXFyUTSdK6wC1P3ThGJzvtTow7EnNsQU",
  "key14": "2SPZXmTR7NsEvN7xwkpBzkiBBhgeiQifVnJksBYgUqwC5XY2ghGQ6jgciY1Y2bFmaofG5Mi9Rhnw5CXtNcPjTLuL",
  "key15": "5vDMGWM9ZPdUeDAn7XTv6RdMxdJvvgpE195mSVGNNdtR2xnn276AWNwLNNyD6heY4YN2hR3q3k4Eb5CUk1gpbgte",
  "key16": "5m9zY8rEtLUrLVQ7iudaPH3gpMzMhBhm6bvkm8LuzcVnA8vTNjtGd2zpWxaFxDPxpqRcmytKDtnyPAC5oT5PCNsj",
  "key17": "G97f4Z88ahrSndU66buR1dFY2J9op35zyeRZCTHqT9kzatkc9iC3YJ9nYSoH8bgokTHFV76QW2WwmmFh3JMJc5N",
  "key18": "mbRPPHWGK7RrgnpPaka2TrtcxAiEkmnaZoN7sQzFvnqWrDS47CdjeHZauuxjfc598sBxYuRuTDkDMVayC29s33D",
  "key19": "3mMvoskoCbfGXY3a3kMae7SSvWzJyTE1Kzxxp6vTH1mkrkZhAGFTmBhr28B53ocD6q8aiYN4D3chsZBHVETtx4QC",
  "key20": "2bxM262w2TrGdRwKrKJwqEawtYphAPD3CecVRaxkffKLsgPw84PzwambS9KTmRt4qjq43rYWznrpETAwMtDkqvPw",
  "key21": "2tywr96rQx5gytMyREkv87CeR5Axeie31ucuVak6ss2bPkqa9ak8EfaJQwedPnk76LMqa1aCoQHC5ib2aGZ94dJP",
  "key22": "7i5sMFExDiesJ3MdJtEnF6t3ucSdw5Kwz99JgJ3hkQuzK536Neunq5TfDyEdpVTsqL5b35X8D8LcA9UZ5TiNLqt",
  "key23": "3giWMbXJUNB3wMUkioDz9cENqp1c4doU4mgDd4JRFhmENPvcKXR3iKGQxsgckRkjCxor6xPFjM4n8A7VT8bCzWpf",
  "key24": "3gEncjBNYY6Lr7AEH7FGhGd9C9CG8LdCiHuwsfi27gByLvJ16QGhezsBqm9CsfZpdUUyWcF7VpmaNMnNtFwnHRFF",
  "key25": "7TCjkzQFXHgS82qLfXwXZi8cHAxzH3JVnGC2n9qZ9cnqsQ1aNRdhqyhhagQhphGrTFYHMP4PdLjC5j3X8pMBjBn",
  "key26": "5bocNLdaxG3Z6dK3sdzPdBX4RMjKGNisqzQW7rP2AU9c3CsmT8p1a6bb8UYsWDr4dBjCgVXV7C94SsonwX4bSnQ9",
  "key27": "3DSM9eGwWxb65SM65rqbkJRdqfQEKr8oen6XfrvcytzqQX1Chaks8WG8cExR7vzbCzWDuQiLDttouFrRshH3q6uy",
  "key28": "651ZKENCaY9r84UMHjht2oN4xGC4FpMMGZcviUdfZ8gMydVwM1ceWBCao8THT8yhQX8XgnZVJeZVT7GHS5EQvGgz",
  "key29": "e4VZD5h2Zyk2oMwWPe8oKgEaJsdMZGboR1AAwwphjxSfV9CZFg9WJUpMTSVVxvhvcE5E2NBbhXrMhUJ9iNYjRXc",
  "key30": "3KZLwLTYmGRH6nLXPqgkzmVspHNDzVGzPVr1RJg9m3AgXM1ThVy9JEdGEHtd23nsSHCqQ7YPpw8ULJKKdUY3N9qw",
  "key31": "e6HsVhiMNNqPXr5KwW2FVgNVSfSR3q3ACMFcFCFgQu5BKBwn4NDydTBG1oHonW1mFdTN7Ju5Z3AVHSpJDmAH4G7",
  "key32": "5uUbocHCb2S6eXj8W1hd5j6EfgBNuPMJ5MDCrJL7kGQRRuGXfVqVsEYwbQnojG6eZWbqzAJGEoq3Bs2RG7T345a5",
  "key33": "4MiXGaFt2HeyrJo8C4JcSdFCdNo7Gw7bUSqBdEQbLcgzQENNDFn4KKA6GvXESWRA5jWLicyPPCn4DyYrtkkGLDRp",
  "key34": "3DXjssc9CLF4H1uY9atFUhaKr6ac77Nsuc1LgnaWW2iUaPLjmC5wKGwfFXbM8UpH92aAdKbJFiMB7q4DWCojmXcx"
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
