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
    "3RfkpzTg1w7e9ZU5mihMrh1uZKhXKD8c4auK8d3Wr38ujxukadc1zXvfKYG9yfzDCxSnGUgAEcXo5VDrWAhq8huR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLXZGfG318iepfthPUVjp12fv5sW1GF65WawTrqPj5dmXMfjZ5bfePHu1mVuSy2ffFipqUJ7yHpqFbKkKNUpMT1",
  "key1": "58iDR4mXS6rE27Km1GuiG8iwyme8vMD1fcWNPFBqsgcswPAgAxydbpPvimfY9suWahghDAkXNkX1r8rjECCq87KT",
  "key2": "3JQ6xWQ6r2QQePUUmiQF34FhdtzwEGqFkZGCF4jH4scDqDHUsa8gnfjF4MuZsdWqaXjH4hzemCRTs3vYp1jSU5Pi",
  "key3": "eFDzewTTEHF4kL2rVrsz7DRfozrrTNb7LRNMBeLJjPvBMo5k4zizmhXhSDwJ1D4SgeC7QYBUp66MLx643K3Yw6s",
  "key4": "5RHetWLoYUyJCCR9fGAgjcsCM8eSfMwQkamqS6AX2KWhob87VUnD5DqLsJRV8EqCenzueXsqb4VfaQDxf4yKXW4J",
  "key5": "5vxa2SHfFvn8rDpZU8gZLVZ53JeVp2S6gLYwYic9CK4FjPx5TJYaLZQrk5aqXnAhCCue2jsGv7zeXJ84yJ3ZsEcB",
  "key6": "5Vncd3MM5wgYQHDiLHZoxCi1Y2sbTvPDNN7XZYXry4YWEmcJ89EhWG2LgH2ALg6ZfhxJngm2QCbZXFHKSDiN1r1X",
  "key7": "5eKKaVbJyCpoW4R9dF8fUM713HCZFpnw1HdnNnr8UieQvWQn8mHnXHDHMsfib2Dj7bn3Ti86C9MhHV87qEo6nqU9",
  "key8": "4365fs9R5QhsSSWGAwNAoi5eqEuaGccbMU6esVi2nSW65oAuKoRkKtZEhfG75fDvbnojoWvQeQ2BUUrfbkj6uqah",
  "key9": "4ysJBMqNbxkZuvtkt5XF18De6KRaa8XLypavpQr6a2u6KnhFp8qKhGxsmaQcNJnscb7DHbHn6zrwkRGDc9qMz1MS",
  "key10": "rtPeQx49CnXxSLPXP8qJpjL8BPddMpA8GwXvbKEUeSnKkPtUGzH8MRwSi4W5kwqNWSb5yFbshXLkvbgnd8pTTnX",
  "key11": "4H24BVszU7M8GyhaFa8QNAqYzYdQL7WgqtsW4NM7ga9ZQmFMtMrroD5auwUTvMBp1KAUjR2GhQ7Rkuo1WU1Gfwe7",
  "key12": "3trXRAvz4rDKVFJqj7KvVbsDpdYdo4FZzjUivifhuE8wAKAWr1ujBD1iFQbFjbJHqpckYBT11njULKgQHauAehMw",
  "key13": "2QThMt7oJDPPCFPMYgKjmTWMQ2X9aWWqYR1uLfGirNULrtcGaTZA242wuJFfoSCKkRGEchsGzJZRUdybK9h5Yrvc",
  "key14": "3DtgkzBSKfykgrs5C4et8Cdsrwd9VNsvbcAmMPU4wDvDQQBYbqrPPMyKqmLppL7BnVsPapf5kw7EggNGsjhXWiVU",
  "key15": "2p3no5qdowHXCqah3HhGYEqyYwzjTrscn5Zn7jfaDgtcBLtU2gsUQt3NRAvT6LnmnVFzXkp2wvPLTJ92qB2fdqLH",
  "key16": "3vM888Uyn6XhGGBWTj8owjvwN12w11mGMX72sRqr7mpv64UdU7zygSbS8ynvXYUyBqt9dRji1CwaPQcp5oi5CD6u",
  "key17": "5gUvdjHysYZVhGXguMdV2yhYzFXJZ2Dfe2YEsYb6ukxfeNkYAMtQaiyvVjncDhksKffTbaX8mjPAPkP9wsiMqfbL",
  "key18": "24gcN6WqAVaHrN6LP1fXc9KxpindUMNmLqByx4nR6Yo5DXbC6EJm4jYsVdUUbqC7LhGHt3oK2LPZ4FkMUuuanEen",
  "key19": "67EGyquMUUnna2vwchbNK4FMgmNoiCMWoHfn1KDqgjwyWJPb6gfW9MEJ8S6zARWFuoBPBrw5YoYUQqjCSoA7cjvt",
  "key20": "591vREhR9UYtwLuA3539gBYkusixMBY42RFFLWysaFGKyA5M1Dccvivcuq6QxkNkxaXVWrpUZTh2AwCAYifwodwP",
  "key21": "3MhJYq1t5n9B9BcPznzKd6s7o3QmE1kEFx2j12QXeB5WHajoSc5QLuKxL6vbkrhMADbSW21bWmAS4KPAYGt2nEEx",
  "key22": "2Ne9F4dHMhtKQJkzsVdpBkSuRL639sj4hmATHu4y5TJqWwyE87gZ5Xfnh8uhjb8uYbZbb9uyGxZxUohKcAHxCmQT",
  "key23": "2ZvVMRCnFGAQJZjxGVkJ3kxwoBR2ddCynXsCmtQJuEoS9R854BMiapNDc3vB9TADPNEedybAUgR5dh957CWasLSX",
  "key24": "3MoGiTpaWt273Rn83v5ZGu1Hz6AYZ52xy37L8i4fYTHZVRmT6rWGnAS4yU8dyyrC9FSBCnntzJ5ehbPeJ43T5n28",
  "key25": "583qpu3NZ2X1AV9T2Smub8as6o57dPD4JUk2amtQ51Sz2qQE7fkNsz6RnbhA64WX4sWbYW2FdMAJ8889icC6FHjm",
  "key26": "62qERnWiH4cW9bFykLGAA7YLKz4iq3w3sLwfmq2cLYxJQD3ydm7GJg4wggP1Wtf2eFinuRPpqjgtEoavkLxfq4YB",
  "key27": "5EDHC2Rut8aiF7zwC7ig4y9DNfmWgrAq4GeTdMhDHJzUXk7n7tnihhWRLwfYnLTZ9HJMDg4SoJWuiWDCVzSvDo7N",
  "key28": "5NvbUmPNrTNFUgDFThB7Hj8uzdSnLpZBR8zFPRNoAbPSxDUUYtA6tDGtTXUvH2Wwk4a5eey2Rjs7EcxBLjyvCbg7",
  "key29": "2zibkFVHdTpvGezjfYDfjLWmFuD2Ef4AxkCphReGCXL1nH9mPpLVknjn8XnKArMz2ztwWGnyr7ALfuF6wDxWGx5r",
  "key30": "4J3KGQofiRg33Jz4ZdVFH2tPYUAJuTrotcH2JgAzmyvhc6TfdFjadWNevme8MpuPYVM7CdjpKxLr1wG929QTqF2z",
  "key31": "2SYhpVm1UpWTHbzNWSKKs2ysUPXvnRymL3W5KyCATEpit6vaezmzXkNmKeB6tSjVgvXLMQE5QHqqoqpEutJqYonK"
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
