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
    "4Cbj8d5yEFoPgVuerr3x8hCYQWvz9DHNa5fqrLx6em5h6S11ZDxrzmx9Ar7nbjZL7WKMWPPQeKahS7kpiAWXvrFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5Cki6cfp9K2j8RDGxWkDKtadAuxdB4Fmew8s52X3447aKoJuFYNTjXvoWeBJ87rrKL6YxmSViVURP6vUbERqhh",
  "key1": "2r9pDNZowZ1gCZNps8nwRWUr8D58sHp16F6dXXAsiYLvM54jFo2w47FXZCfzufwi6WNsPp1Ces93uq3SNFMp24Dj",
  "key2": "123GwA6BtvM7ZadUR2kpXZD6C5CW4SofAgEee4ET7EtVYvBPAtKFH1sZgqm9ydKktXnj47nqDVPuCpXAqnLuQxcZ",
  "key3": "4d2T6563CK9UJqeLabubQNCbGrcRmLSAwgEjKWFrGuBmY692zVkCS5MX4kjaeJ9aiCGAGToFJXw9vgCm16CJY3YE",
  "key4": "1hDEuQGjaYUeg24jVBHdNJ14FRVwmFCAnHX3i4wYTtJPduHL9ebbELUjGVoExLyXYJ84MYqVUAty8N1FFP5ssd7",
  "key5": "34WPQmPnLwJKmF7qxZirTSupMUCJ85dCW2LxqsgZhKLk6HfbPz451eGSvK6TLw3d89kc6bZmpkeimTLooVhkrdqd",
  "key6": "2Wvni4GZP1TJu6Ns8hCRzx74HR6wrybU6U9RDJFnAtZPiXpcpQjh235W7cbZis5pgHRVLxfYEFov73wXFyxvzZtm",
  "key7": "5Cnjqk1ZFnJn5TR72MjnDDhg5jLtHKcSFScKJ3wjC7XAzuemjBEoDgQcAkbvMwwXcAEsVrpGjbdvV2GHQxgTM6t2",
  "key8": "4yyJEWSqz1zg92YecyzrKSSusWYLpkGTutDesmi3xNbMA4VXY4ytbY12DTxcMvAjnTF7FY9w2QKYCgbqLoGNw5Ja",
  "key9": "i46Sbe3NmQHwPyF9EMg3yAJic8xbtsD293fBP8C4JYjZN5s95FG2V1Ao6hDFNgTNpD5ENrsmmZaJ5Jd7FcMYhrN",
  "key10": "4YC4QBFo5ZDBaWr9zgqQ9vhh9hy4hnygvowwDiMmPtVBjLJ1qezAxaXeRBGcPMY19p4ymukZH59PEZkmvZZ3Uc5i",
  "key11": "2Rouyi6SBKHSXNaw4uAnkEEQhdjDcW2nYgn4CKcSiC4SnDiZQCE1X3cKHWjoJW9ETtMr2U845DNiT2gMvCJ9QrGj",
  "key12": "4poxzXDXATDxpdY2XNWsQUhJgxfMQ2ixTEWHsSwe6X6W1XHh9xQrFp5Csk1FYW3NyVMHo1mG3in1M2q9RkPqiaoc",
  "key13": "2ydadUhVXK7RTK7mhgHNhfPXK9kRGkYQuUXcshc75bE45oANEGVNCcVAm2ovAQ3igg7YkpTiiPXGT2RW1rCHyKhW",
  "key14": "kRM9vAMuBtqA82LUNenH1KrssD8NdZRu8Vw9tytj7QGzJaGxqSUGUxQoGAaDfCXrZxvn6RzgfzyZvPbGPQLS2UM",
  "key15": "24s6FyuAKUvcRtH1ZLGk5hv5UL2JA1TL4bKLoqGmSDA2RZZJDQH5p4mFKywRzgaHkLfgf6Tr6xTvc2qHHzpGCu9P",
  "key16": "5c4dEa63WEjgC2TNnhLwAAziccjfUNQeohgLpZewYjaG7ev9S54NT1stR3VGzqgNfqNnfCbxFANmtaEFAVzpU1SY",
  "key17": "GRwQQddWDpvPxiGAnN6oZ7g6vTMyeN5sb2aTWe4NhC2k8LVAPCjCjC74iJN58qqBFWqEGM6wqJTDcg8GQvgPG8u",
  "key18": "2dApToHsvG4GQu84ZYhnzLWzskNVkebU7VZvt7fN6WCpcSmQkmZp56ZUT3UJBdjAMxBv1RA9CBCcvEYoMFdMRC5r",
  "key19": "YqTbXBiDWBmS6V2aobr1iQPzpcpiSjMfD5rgVoBuiWASaZXjF2NB7QzivpCZv1KFoNjpQYqMfXHKkCfWNybaJSE",
  "key20": "2uxaeNUhTQHWYF1frydzQsFBecMX6Nh4ZXP8bzZ6Bknjk5mrd8iuf5kQCT13QwieFNHPeDm9ETztgFYxQwB988Wd",
  "key21": "4D8p2Vr1RNPo9eqqnmfDn4WeeAoeW6srZVE1SXdd1kZtaFayXS1PSQhvmoNcHqQfhrbrtcRfzDRqFrpPV5kG2kcg",
  "key22": "36nQ1Z5X3ei6auYLhx3SEFwv56CAe7YDPyvmUuW93vnpUaXrvuVmGaY1YHnJKknTRnxc6MXy6nnNwC9B7rEdgMZJ",
  "key23": "5RdmWAtKJpvtCSjX2EHkAAGRkUwDtmXscaiTRgaxEUwGn9J3NRtTvYGSeaSzbUDH6PJedTLwNNwwBxfBW1Q2sRpw",
  "key24": "4ykgRsMqSXCwwF97Mpw974Dv1yvSbwZjdSfS86tYaGcoz3EstVpLnHqMbQfN5nLDwwwomtncY8eDsfsaifin1v1p",
  "key25": "5HRwHecU718M889CSFCZ6ct16NgYzwSXCr8L4Hk7gMUeN9sRxqAftQiYbStRvzRhRBmLMpQMH1K7yV69Ra3A9sTA",
  "key26": "28hVhHMyao3YKHduL2M3S9p243tQg4JhoXkLizu527FJQk8RzLPC3wSaNWhErwkV46uauCdbCBvJXzyngF6NRHtr",
  "key27": "2KrbSBk8Bzs1MASkS71u1YVd4DDM8bKybEuotnVvhebHHTMpaGbCZKz7v5Lhq3Ma1HzfVon4ytMS4acwX5EBV8MK",
  "key28": "5Pcn9vhEq31AsRzwyBYGBVtyPzgszkTfpnJ4WNhX4EU3QSmSwM1mj4Tch23eTFZHJNhj3FmtEyYs1zjQ4tsD7nZN",
  "key29": "54K93HKo72B6yE22kPgkJyiauqG1ogNWtKGQdW1m97mQWcErcDoCjJUGcMowcnyBbCNTdBnVLF473G1tJmNgXTSZ",
  "key30": "42o2PBVTe8iePQmESdNFexSJcu44epCetkuNVNHDr8xaxKfReRrcFCBCmPWtMW7nCLSH6h38ug6bvf7fqxPK3h1y",
  "key31": "2Bb3REdEfbTGo43iwTZmuE3ykbuWQp2uWiMkFJwHoR3rb3u4JnxqbBbYiH54z4BmL3xGGBgHf6TRcdw9kgoqKiLN",
  "key32": "5zYgZCAqAD9PZyw2sWgR55aufoP83b2JV4v44aqgRtEYBLeQaXhHzo5nUjpWPYasWUXd6fPCP3rXozaQE4DiRrjH",
  "key33": "2PHFVfAt1VuAeaAdKg3pN49zzwnN1AfpCNXGp9caY4SsfTp2pudNBzFy5x3Cgsh4tdFHxzsPkRwmWA8DasE8jFBf",
  "key34": "129P68AxEqh8AEWmbV51TbLiRRVpBrrKLuKw7XMcCMYFevUCaFYhJAucPhq16zNMUfHu6NbQZ5KFZbK7y5YYV8Rn",
  "key35": "9WanSw8wxwKQ2r4uU9U3YMhApWSrL4QWv7fjqi3JJrHbkzJbzXHQaB2spity32P1X4dFCcwn5bASSgdzwWB7vNK",
  "key36": "3BB2Lhy8bBfParMABQ8r8p2fFmeERE1FTNBtrNKSFvqkXtdtQ9m8wBgyGzeJg1cb1TbCefg8DSAFWLfJ4Tb5w9s6",
  "key37": "4zWEzA6YawrERTpG2St6ZwVBzAgWBQAVueHGDu3jUW9iyXopDoqqDKnMnzLT6LB6qPar3aqz6NyM4zRvhPWbRhx9"
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
