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
    "58FXerGSmVYkjtsU8ci8q2abqqm8UUKKGkK5gedDdmnWV3ad5LUGqSBA9o8GoeqTBZ8dM2HeESfVrJH9rqiAX178"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i5ZhAL94WjgfbU5g2i1nX2esyUjqnnSQxzK9XAinw9u9FXc3dxmqcEZYns3CKSN6EVq8YgSqeaKsNfkfAkSHqNK",
  "key1": "4B4bGuB336hGY4ncHuBe21fa9PD4TiccV9c1NNeQEEWR3E9MDHxcLcYLVCR4YGEbrP7z3DKhn3X9aJy3PMmYBeWc",
  "key2": "58UBphM8AW8big1rBbiHzKiygMviUSPqYHeBKbXR4ydFhmZutaMfBfuRegeDGP72C2K1AfXFY4PbsQzDcHjsfYt9",
  "key3": "33aUGd2PBLtPq6r9jc7kGWSU8tdFYqimwXKKzUCdZKM7vcLVvgirtJLz8iF7ThihChUhdHJiWVRoEV4h3Yejjch2",
  "key4": "2fexrb1dJ4Avqih6mBWyDQdpSSynbSSySTfsn6zbLocaD7QQ3RqvA5q3gprY73yrF1Yp8HuA3ge5j4tzgr9NKuya",
  "key5": "3xNrfKgENU68BPoBz36whwJD9QZfcvN8NF5ZmAYgq5mYBQ5LCtbQQKBMSx7WftyHGjnbS2ib18dXzRy9r4p4Ejdx",
  "key6": "KB4ae5qa57bbtaw5grx1Gw2R4BrxL4BJVYyERWNr8ARpJEhbcuSxyi9u9wJ7m1JTmAe2vBKMVKGjEqgYZ6RuoHG",
  "key7": "3qKogSscdgt3J5UixhgesmvfVSE1PBFExLb7aP4HNcYAgwWoRHvqdQscnSAWTUHghcFVaVjtTekHGF8LPuaiHqSe",
  "key8": "3rHu5r3EQyHkmxTDEaW2iqFxhortoQ4frP3E3UXpWNxpgke5BDhnsuk6GJNKsFA2Jzj9rpp8b7UyXN9xCwhHRuSD",
  "key9": "4Dyo1NCYfibEnYn5JoRX3E3DxoVruV6DqZ2GHKAqRn6f9hMTPc8pPJUqqvUkgTN22jiS67bron8HZewvJy52NVNq",
  "key10": "2bkP3EJKciV5NFKPLaxFVdGBVGKQfuXb5fs8Lfw1NYb7UaC1xk7Jsc2f5QH2qJk7W1eoffxpPRuNdo2Yz35YA7NT",
  "key11": "57rsyWNVWVu3tbvXA9v6usVdtLWPDYJmF3MXQGLyZMfQDP3oE5NiVbfdt6Cmxq2doeebaL2mntwDNCMJvWu6od8i",
  "key12": "5PJyj6rzio3KX5X4UeMuk7xTm4p1qhv9TcE877xxTsDPsBu4aqsyzb7TpQuKCUJ2Q3fHxgbw5vJnQpPHdQPC6ExR",
  "key13": "4hjTg9t2HkPoPA3dd2oC7zrXY19A8g1tpeZ8WMg2pQDPPEgUruP7qVbHrasNtxSx17rMQhAixAEqCt2SVw8AMWqb",
  "key14": "48YPg2oRvCDe8juedAunMsNC6yGS2Do7rq1NPv7FHEGhYtdim9XRF9jkedcD8bikNUxtvrE1T7K2c4vNUKfBLziW",
  "key15": "2FpNsD7oe7oVwiZAjuVt79r2DUTZEKorLQoPnbrxng9QCYeuP1aMA8PPdyUZh8U2vmkQsVyk65n4bM9JfdNCq8xd",
  "key16": "jb7WiTVDruvABGKijCLxV2B7Uw672CdxWqLx4C1XEhZKM7ATwMz7TcGbVhiZJBZfAf9Dydbju3GKbtDenpSCuQX",
  "key17": "4ET9Rse58pScsHVPad9ZwF5rNMay4QNbR8GSovMRcBV4YhYLFPiwXyKq9skWYehVpbVieQ2FktBrXdFiQAMErM5H",
  "key18": "56Pxq5GN97HgmKNcpeHd7Xk3o6gJitFmP4jzdAaW4n6iCTbGp97t5X9wBzGcqx69yn9Su8c138CBLi9FUrRLgHTY",
  "key19": "j3fDfyWRAycMzUKnVa89wGDeNivUutsAdYoF113prFkjyDaJxMJaTbKtvQdj5dAgT7s1hF1CNAkN9K8VQFmm3dk",
  "key20": "642t9jYbZGt1FCV9ukhLPjGxy7PqKwYD6SQfiQQh6Yog1YmyrjXxKu4eND2zYW9g9Uve6FGiBpw3gqVQnL8F5nrQ",
  "key21": "67pHgnqnu9YWaKq9kjsVcAeY3HJHNjb5wtsg7hqeY8RzfkjyVJbKX73kiKoFEWiHmiQGrzQS1UTAmHMXSTwbG57d",
  "key22": "41TQxRRSiCb36QkKUdryL6MWmBNKRzUdYDXa3prLmX26c94gbtHLb7RD6vXZM4pQSxmN5VCW9oTFoey12DvkVa6d",
  "key23": "2Rvf1QFsT2cMaCDM4PgEMb2Aok9F8xDMmxWkgS5KbRrL43zwxpNCP5aK6xGwmx5Gk3yTe9iBvk4hLks7qXsHaVf5",
  "key24": "3kRM5qGPqdBKm9nBefvgNWx6eFhBn3AJdFxsv8jBD1sYmJWbE6MG2Su8LURnVUYJXg7HKhaEif2ft1zvFyBk6XxM",
  "key25": "22oUfgFFPtBkgH1ytTJ3rihmhyELN4p16ptWi9CNFLoRjUEQ2DYPU48FVajz8Wiez8hqFcvaBh4ejNwKC39TkHov",
  "key26": "49Xv3qc3W7VHmh42MDEGrty5XWVZJ5FSuvAcmdKt12iuUtckTd4XmdgAzdDu84odGeTxxbiXfZxZTXvYa9XpGfKh"
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
