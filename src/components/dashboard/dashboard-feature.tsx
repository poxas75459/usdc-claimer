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
    "5kYkVrfzAdnPbc4EcyzU9b2rpgz5dQFwQ66z9WPspR126yWNxpLcBZWN5Ve3dyZ7rKJuPCkrEtFJWoNeeHbo8vuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iG7v3zD1D2eai8UFfA2igfCB8riNy15PxHkVq59MybKU8VV8t1AEbCQLTNd3LqzBexDiPFb8AiAsjAitvpsbuWN",
  "key1": "3FugPwi5qx6VQYrznKSzXBMKMzpK9Zney5ajidNNo3VgR7X6p9NcmxaJcZiqe9t8W3HQ5yzvQ8mLfqUPXwvVq9kF",
  "key2": "65k1VEx5fYM3KaGTLhPATNCctnqKrA1tXCvsxjNuLqA9QgCk9XVkqUdCwGhw9H1z6JD4TSg1PT4NqUYsJ3vjhQNB",
  "key3": "45vAsEEj3WmVasrsGRmGkAJGRwz2QCy4TomGLCXuKickXPNLY22opppEbT95BYw9YLjukCaSpmRBjeCaWHcgdb7F",
  "key4": "4hWpco4BMFXiB1xvfv721tuQDc8h16GEJZmsUpAiL5S2AWp7PLWGSppcp898y1FDnyhASRifCwKQUBxfqEbENr2Z",
  "key5": "3YxnrkxznWfEFTHCqZxsbKtWxZimuULYmQ5mP9m6RED23xGzm8SsJXbLhkHWnrjeXgPPcNhfzhC8Vy5fzu1eV1jv",
  "key6": "316imFnvAnxA2vz86pnio7b2eiMrU9PxXxBwss4Br7PQjvuNxkWt2bfEoR7CowMvQ9RKFkyt58K8jUSMDUu9QecY",
  "key7": "5JPJhkSuoz6mfpaFg4E8hy49Eyu8mo9TbUV3ZNfYSVoWZXuP6HGyho98SjeiNSEL8xgFBs24dc1JdTrymofJuZ45",
  "key8": "PP383gxitmBmN9irxwXmGJ1XBMbsmcp6HWAqszkLzjrZiChVdbGCM14f42KeCirjFgw4iYzNzSiFjTpZzJmDB7y",
  "key9": "5ecJ4qjaFipHWseXXRoefPdevss53KojhVoG9akU8TfiY8bvRuXHnZnkkBtehU9LhBijSVBzzhVpY1N5icvJ81vX",
  "key10": "K5KJroBE86QM1RWz4TpcVYiGrej16hq8xnPMciu2azpQWQ9j2rtTJcC4hHrfYgEPLWmMK1DwxeAwQtCq3UBZfFH",
  "key11": "4uobuPzxos574n2i934zLR6VkypRoyCHdXSrGJouAFpRjNEoB2BF2hbndRFXJxZrZzZ4Xsh9GqMWbz4gBwbK6z2d",
  "key12": "5zHnAiKTbDCxCuj2FK5xkXYaVrV3hwXUx8pbvNec5zmJut6DjSvAx2UkkGcDyTg3bQZsQW6NWc4pXnR4wHNuRsZx",
  "key13": "52PWa3haiPnFcXA8KXZMoaV6Ks82rzYbuqd2TpJ1oZfwjKS7VB8bAsGmpPE54n3JmPREhc6ShhCQ7MTijYkLiYg3",
  "key14": "2BLSfpDpSGxN2rRfhvgdpEhr4NjgToqzMzhPKNvVmwGhEiFRrdf6yXdCdde8CvHxzXtHumN5VGVTF1Src6x1tnqo",
  "key15": "tHnSgWgUsoFcumPPuX7kNH8PrS7YgVoXZRMVrG9tCKSX2f4KvhEcADR7tXMr3zGSxyKdRUiW8HDgtahCT7QokSv",
  "key16": "5TXo6Pbwh5NQBEPPjraWuQt9xG5M7pGndFwnrHsEk1jTm4Tgy6rrghhdokcfyZHuthYcFYFxFdNBTWLcUB4EyxgR",
  "key17": "5vc57tjRtxRhdSm4HadqaKPMX1garRWaiaLR3u8NpeLQADU9CvV14J1vsPNg53y2PQrpaPWqocGMkFWCGnVargKP",
  "key18": "2ASXVypyHmD45Jnjm2PkXjR1Uo8mQAcJGsgQr5ARHa8sgdokNyg7z7DGoZxoMhKS7TkeMua35ePeLP9jY3mBuBW2",
  "key19": "5kgvtb3HmSddHuGTv45kRWsyev4Qw3ER8aAHfJkGypkT3XAb1rsEDzyyKundqZGjM1BHnBFmX5i4XacSXTopGSCb",
  "key20": "4EXwJDbZVynPA2QhNuf1h8GHiknC81q85Yg9e5ky9AZaMSTWQU2kCiMaWqWVaDg75v1U1PNJr8gcSHdgYQrdhyX",
  "key21": "4JayB3XAyoZqZ8WVuizH7epKZ2Rc5QYmfiZhsCqCarBs6pMoHD48iw4Bi2nG3pLETecx4pTroB8E8ZsK3gxhThLe",
  "key22": "4QbEfGaa6meRXFGKT47x7o2giBzz1QRs71TVUmJLg7mRFLDADKyKVAvTdjs4eKXZG3wqjhcAmF6nHwsSPgEe9riC",
  "key23": "GuMZqm3JoQTfzoKyzwxHexY8SLH4k67YK45Qr473wMmkQ47wMXMr1ZwBa419bXhfCy5YNaaAm1PJyysmy3fVavx",
  "key24": "2ctB8GaLFchY3XUpNHZs72LbqAdovsbAEe9Pzp3DSyPKyh1cFnZgPkMy1EoY3nHfaaseTsRB3EKG8Kf5j2TgKSjt",
  "key25": "3DH5r6ggfLCUGmv1tWcDuM8cjh2fV1veF4xysVGQ2EL1ott38HuSTDT2mWQptwBFSGiPHHXL9WaSaJFdJ9KixVaj",
  "key26": "4igq7wDJvtNKZcNHHLK9naqcbRUTd4TSH4P7ByjT9SNb1FdDs5ZrQDQg83o3rAvttU5LdeQeqyqQUDPgahCL2Qdo",
  "key27": "5JBPHNMRBp8mXJcFuDpXVvoThiB3KNPA5acvicLgbB4cZZtftB8zFpY4mtySBzmZMQEC8jX6b556hZzxFP15KRbt",
  "key28": "4B8e6xaF2Pq1AZtfq8vmB9iBamfkSLTVNZvmc4mo7ugGqHQUiyFmK72XyqnumF2NyBgQontP294uoBuNUzVgdfxt",
  "key29": "463YrrCHts8juErVBdyg3ZrHBQATcfXk4m3tk5LuzrSxwcSUenoJzQTxUtGcC9U3vUZkCL8M3mn7W4aLZnjfRBMP",
  "key30": "4BNmSe79c9MbdX3zVinFYJ6fwS3Ub6HAbz1aerNhAwniz9e7kPiHLtVsU21ZATUfhCh5gKS9DPaNNkwyQDnprSti",
  "key31": "2qp3nF4mA6p6uMJYebcGTfqLDTYS4nZd1G9Fry3HHWgcHdCT842LgRJTVSL5ofcPDgVMmZCThk6JqZFp85hmyvuY",
  "key32": "5VFTwYXT7X1hvvJxW4NGVj61gH9Pxudxd1m9Ddt1AesY1RWhVbjMXLCrejX6mGDEArMXpX6Ne7PY1n2VRqgQ2co1",
  "key33": "4d2DJDocWvtPPCE6mzsvSvGHN33qrZpkJe1vqyRP6LqRmWsEd9aYFn3nGXnRVLCjKD1HQpM4YUjkL9kB5gF3nYKm",
  "key34": "2XN89REf8ATgzihjSmHisH5MjbKVFnphFPVDmubxmQahiKXAvK7hWuotj6NaorhAU1nTJvVhGego7chwYPYCza1s",
  "key35": "hZBxQdU9dC141AswBeVVWUCAVyQyZHaL9ePUZ7Bjs3ztWBhJMrRdT2L2fhTkEB4x6U2pWbfP9c8Ta2ND1FvL2Qp",
  "key36": "3aVnKQMUNpEWZrPSM7UZxevxiKzUQ6EtiR2FcP2dWK1owMvez3tCbyz1xTcd1ELrS32EJgSnBASb83DtD1crGSum"
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
