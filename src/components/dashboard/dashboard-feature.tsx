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
    "4SzbapCZ7ptG9FgK3iUfZTHD4vYEvJypjQ6XP8VLK1cS4gDM5QBjYVmLZMoGDRat1QwDi2yJ4sW5sMvZp88BS1pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHzpwU9ZEFVPKLjAYK7z75fXo7jmuU8vncrhofbnyQjqh8dut9FcBAoB8e8cS4ivCCkveP4y722CmaLtdFHR4oM",
  "key1": "4p9QNasqbhSjK33HQ56dRgUm7q6LYbFs75ANBgadeVLU29fFUAkBLbL7naiRWudLkqfucZHWs16fst4xmbUmsUYv",
  "key2": "JysgGaLpKE72fKFpb51WPXvWycXiEEGybB7fNCfKPyh5TiNxYGodC4bVNGio7oeAGGSwvdXfvGQ3GuUuY4i9LXQ",
  "key3": "3jHVbnBsrM5jnG1jdpWtT11LwcrtVCUw2pN7CHwZ2CxWwbj5WYYfezbDJYDhHN5EVw7YVjqqiesyCsd4ZHbvEwuT",
  "key4": "2bP1R54u6VFSKMaqYnGnVTpzeoa4oQ31yBikbBB7itbfEy8ZfTxVG5zf1fUfuY2iHzcv5KDWSbs8GQ37iwDGtFjL",
  "key5": "4H4ckWQiw5DmNxuZBw6KiKfPCxacK71Mh6v8TkgYhXSiPZM7t8kyw8V7vgyum5vLVAUFUup36zJiyyAwZzJ3CWRq",
  "key6": "cn8XSkrSBPofKvcJAbu2JoyDUGREYqit6wjSstwAMwL9N4LJnbCUebNbMupkqU74RHHU3ikNhL7zsAWA9wwiPEX",
  "key7": "5UEg75JvDtFrJ472GsrtdjQU3CpNtJzV1sg5TyaHjR5jVb9m4noDsMMBKi6V1CVhYAdi8ehwPVua8KyoVee47s9w",
  "key8": "4aupHg1iTTR9rKg3nk5zue9V4TCiGo4xaZu6rovQiALKL7MA3AvrYk8CQX1DLdGJd2qq35jG435tTDhvKggJVRtU",
  "key9": "4bDhhL4MCQb8XAnWwFQWirJsL19g3tYRnGR5u7Tin75vBsfXCyR4p9PkBLATenwSd3Msx548nbULrPVDaQUjPCTj",
  "key10": "2kpZPQiawz1QEJWXoGBt8mhEHjVJ29UiDCTs1wJVyYudDupjfJiTmycmK1ZUBgDwVtTGd5KZYkXxuFjwTmEXuQdD",
  "key11": "1GyZBWctpVSZocRi2PHkQM2Lffmf65YGatxBmKMA3Wsh4MMbFvXkpmEj7QNJqnW9oF2mCZTU5JYDxVo1FWtkvdm",
  "key12": "3TN1njn7PAMsHLCtq7tHCRNtvVzN72WvgqPsaUnzukeGD46qUtkCkGfbU47zqSyusXcJWR1tgX9HsyM2diXTNLHb",
  "key13": "3NPhDJu4turPbcLYoWGrQ4zY37ixU9YSDbe1VvjgBE3BoH6xM2UDY69HAJQ5vGBhPjd4WwUm8aE3shmWa386w8FP",
  "key14": "4mJe7owLAssT1pt9JM7bJrS2jf7SLg8EiAXVXTmw6j3cbjegYE9P8daLGMXesZkm83oAVZt5312RLnbFFVTuVN8W",
  "key15": "36wtdSiBhDwEFRZSD4wKV2B6LtWTiR4jJirEuTHrHaTG5A846SuYvRv59Kb7iNSS66tAVVD7EXSbSBuQQGKeonRM",
  "key16": "NBTN9LKfwugeLozrJVX6jt9dKEtxuX4yFNoQAnCwGRFKaGDFiC3Y9EiVQUSbYHwm4ahgJFSxGwJ8P6wXGoZPR1E",
  "key17": "7MF59XBF2rB6FryjDrbDQudLDUxqcr5CJA2YHaUKLGSp98tK8FkSFzMKk9aGN75uGn5RsqXFyZmdvC42vW1kDPm",
  "key18": "3QMrT1aCTrZSedszqDWFeEbqxDtXg52ESiEqkjTjAeYx9tpkXtdRDP9Q6aYpH9JJGJxGSXtG2CthESx2UMSa33sp",
  "key19": "3q5T1nf7kvPa3fJ7gwVa7Tp8MKPpVxGMs2u9oRZRqeiUnTvrigrdktfgYJjtz7JXDEviYtovDsuE16Zb5nMAarLj",
  "key20": "2hLyHNpWWGaAedV91ybfA7KwbqqXcat7oEuGmiWWsLLDqx8oMG3J8T12nyxak7YiXDCwse3FEW8VHjtwrMabLVH7",
  "key21": "5hHDJKDMKrW9JiTdqQnbJsTz4QP2pysR1ujPF238zkFSD4KEdDaKGzBQXKEkv92B54gkqAH5G6jU5eWrU8T3v8b5",
  "key22": "4Sd3QvvwLoCsHTp3dJ7AazgN5gnsJo5rharUDHfM3jkt2mDTECGuNu1dK8adn998UZf9NzSbdDJHwCpanKArAWSp",
  "key23": "2GnbLKmpSdP2q4KQ5YQDVVWg3o21cKhiXeGEdyPxHzUpD1sMu4Rx6oDja26SgP1aRS2VhccEgkDVdTWDLDrSZYJc",
  "key24": "2TkD5FCHqQbLbiNj2BSRhVtVmQP5v5ynffkrRAsRz6uJjpo8X1bHw5nfJ8jCbYP6jQSTX5FXsG3ZYU7uexH6jQdS",
  "key25": "4i7xNx1qtA6hrbMWg9Cra9dEpSuPGcZXkFep4ki8njfdDLZ3VGVXFGz5Ni5XNZBggLSyZjSMfhSWzx9WGLQo2peV",
  "key26": "4xw2nmhwwhw3HEsuYyk59JMDky6gan682dU8sJtQKbR2A2fFpyB411YRt3f5hVMS7FrNWUVFU9cooqsRUQxm3yGM",
  "key27": "5ngmgCkskDQALp7Ys1Y1mJGNvxAqLV6cKKGib8oKfsDJpGWxpGrRr3HNvTXGdLKXGSeDcST4bNhUBLQ3A5a8PAeN",
  "key28": "fWFfatLDS3f1HkGq5yv3gZoPLvZTkbNhM7tDnDn4w23UTzBX9keAnmx1mmySEx9anGRqHvBoLskfSAkYChhZvwi",
  "key29": "2bWZZXZph78noji7NU63iJnJ2MbpfH94CTM3pVDLjRHfJMY1XnTUZBHfpo4w6zJb1vG77rgSrbmrrny4c8Lsf2ME",
  "key30": "2KPTaVM5EywBaUzPSLKcw5Bpaa5V5avSo1NCZ2evPY16jk2Dv4Z34QNyQchchsdTWujESUs2hL4mLrtvtsnyBKpa",
  "key31": "4UNjnKjKWvR8yYkFZMHMvoHkaPMtjCMwSDbFHA7qKKdZTxig1ViSpUXkQV61UfYAjdKj6VvAmbRdPCY4rNKcCvCT",
  "key32": "3aw5uG33jcuLq9hazmefXAWB7zyV9zhFyPDhxCKFa8B3KDBwRAHA5mrAVE4U5knk1FGRVwvC3S8PrTFGNcvQwqCW",
  "key33": "9a55it5Dr6w6SNQp85fQf3uLhUHeHgBXMHSKf8JF7TPPpFNVu5fhCPX5ykgrRBi98kZagTse7et9p41XzM3Mgjx",
  "key34": "4T8kSqxwoW8ZXs6XKkRirQxAnjPuoS3mr13GLVgBynAstJ1t2RypgYXMkiRsfpaAAf1QeVmabVgipUMG42SRLJx8",
  "key35": "yGwG3tY8UpLwdwyU1sKkMRbUmtJqW6TRzqXaeUHRGjTAuyYmaHgJeaBSGhDAB11HkomwgmDWPsr71HuHPWraNWo"
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
