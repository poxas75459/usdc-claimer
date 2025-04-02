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
    "5EsdzbRcuwvTFnd9eked2kUVybpcc6ZGzr4ZEoaD3C9DcQahoamFLFSCpGsVYGAyi1agaCQGmEyH5iU942vR2Krk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCkqwsENrtZiMuTPTDKZm3iEUoFTtdzonVrUBJdWdu2sj2JnbHXWgoxkPUBAqbgJ5okP1XkLG33yDvcgs8LQLVW",
  "key1": "4Ye42QY79mRcso46p4tzFvQVHhz1WGEKFF9QxonGS9VpP9zSA65nQWRZfhi41G22KkaMiAhL9R2coQJY33V9u6GR",
  "key2": "4Ubx3LcN9xuaZBEJDzA8H23128BMyNG77CtuJhUbvSc12jBVFj2qrxHBhS22byUAq1zCscqyyq85Rgqay8tj4LhE",
  "key3": "3MFwYTw4YiF8G64NQpSSvnYk2qhN1trGQWvq3Jjo33UCg515C5UnkLr88GMVUjC64WVbq2wcqBewAgMXGGWT8raw",
  "key4": "6mx7VJZp3NKwAvC8nVSEZ79sC6539RUAQRAKdnd5DvPLW4ufPmpLVVLN9scWKvQjQY6CKbFa61vBvKHukc7QSfk",
  "key5": "4JhLZFmoRRwhPZVZPxHVcwndQPa4Fr4G8D2dW3KNChh3ZqUedZx4goFDkPatBNgBCWrKTV2ygMZB8vi49Hx51rji",
  "key6": "4PQofKSpgVGD4QDy7m17MDfsZKPMAxZPAyuT3ASge7zcBqVd72FywKyX6sCrFRMGsM9coHEu25G6U6i5HV46MbkR",
  "key7": "2UBQUFqSAJwJQDbUeNUvrMF8SRTSiPJXngccmkcNLJuxQZknwFQb7a7Kp6Ub49bN4yfaiJpeoVt2chmmQ4fxAPSd",
  "key8": "5oEud2DKLR31UKwR5Du9gw8bymKuibqs1XyyFLpry1oAnR1ywVZd5nGnRp4X8vA5BqYNhcnB28xjieh194Qdgire",
  "key9": "zfLqffk4JQqWK4Y2LRDWR4n5PyiSrVSgYGm2pqDQ6Uhaz7xuYooqMKeX6GCcuJwkAhYo2oMgiKFqiFh1NiPLWRW",
  "key10": "i4aUrvRz7iyfJnhLDvyCPHoFjeAmTMZho4tCVEME3bm2Vm77wwqRWdUpbUSyEgBx5F61MYpNr49vE44GQAmuJng",
  "key11": "2wzqcjinyr3t6D1GDpS58TsZeYZTQTPVphM8ccc9LXY8irXy2YnrDwfJX1VmG6Crr1hToCppherimnEPkNo97KP1",
  "key12": "5rNwi54FsmnHwjjc9GgKGwwYBJG9eQaNp6yyLkUv9QbAugYPv8HnULZyub1dLPeRnGU2D6TC57iyuiNKpUkqHtmc",
  "key13": "332D3MggkGiQ69vj4BfuoFCcW4efpgmk3P8nTp6LMs2oNsQXiybYtWjAsmBiuHiUANUpdWaiMKjwiJ3YSSNxx4Q8",
  "key14": "466uVdJWN7v9B7Uqj3MEozpJNZw2Q8s3fifnKTCxpcRGf1SeJhfeuPSazRn5eQ3CyEWndzVHxiZqKC2bBcygcA5D",
  "key15": "31Qu7avBHgBX52apiyp583qPBazx3LRbAa4zHCYAxa1dMkfvGDpPqA1fTj4P5ghhvPsRsAGZxiddh2jbnpJapLU8",
  "key16": "5qiDTM8qePvRdaWkyqCmcX1bbN6eAkBrVzMtLn3DpEU6bDCKrn29Qkx7vZ7U7K5qfECkmrxmZyZXE8rGLo6zvYsN",
  "key17": "5QCvMok37igyfUYUGrCctTjLeRiG7dY2XvPdkUQZ5nvBLSfe9QPHiJPzM4QQiNWmCxBJW2qUVi79Mbx1skJNNGjf",
  "key18": "5ia8RYvLtV9domyyx6Hibzca9W86z5SPaaCswwAEP2swGHXsdzR2NvE9FTxBRugs6QQnur2EpuLpWAMtMXsyzpU",
  "key19": "3bCh29C44idmkjdtdqCgTbjBzcUspG6sort81p72TdxEQztisVtSwD2HkGekRaBXh1c4eo5SziekhRwD9cjn79hs",
  "key20": "4x7ukEMkcNnPYi2vQjnnAty4LhD4crUMuRyLd3CPdGRnPyFawtwUmmGd9BiHoQ3xsmvk4J2VvCrb6R11o6AFbYeb",
  "key21": "5NR3T7iQPPwXxDSbtUD4AuvuD793nB93kEn14ixW7tfTNkuobQrsmoxskkcZcKbqr3G239PTphUe5acWN7D34XZz",
  "key22": "4xuoqiG7JwAPdvGC1DjinZxcpnLsneUYvQAfZy7VwjPZQWzsFZv1QZe96vwWWzHLb5bFzgA1pQpXC8Sc92RaRbWF",
  "key23": "4M621ph5uiNoG2ZawNvC6GyWTEEyGKZNwb9x7SmGvjcxbJf72TUym5v3x1zD5D3SkXUrGwW2BzRvfdk2mPyckpts",
  "key24": "3x4HxfARL6svXfePQdcF9NqgCgbQrqDmfQrviSWSW4AhMPCKUtULnRH1rpQJRgW44hCZD5qYTLgzSkkZ4zyvdGvA",
  "key25": "4g5HRqiLC3WsDdjg8LJKHdyb8FwNpXjBJkGJ4P8yWvRGp8QbK4PgjmGQvBQATS2bxvhVZbABpJrcU1aZKQnhxB42",
  "key26": "3u9huR9QJsmUVMKhVLvEyBdRLn668w3TotDmj7gyLXYh82bn2WUdgQG5CGUhTct3rrsZL6idXmHFdxVhBGwDXFsA",
  "key27": "65o9rnsDhmPsWRzLRwHVWdSSa8xZMPA1dFhzSimnXPX7EDiHA4q4aNYAeV3X92qoZAH48PccSKCwzL8wKcsCPMhX",
  "key28": "AZqDG479UdfQrz2TnhgT3ARHxYe4pHnTu17vhVGqw1QpaNe35yhbCrVR6BvmXNf8xLAx9o12YXonxfJFZYs2xeQ"
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
