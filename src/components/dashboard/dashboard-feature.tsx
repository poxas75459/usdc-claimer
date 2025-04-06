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
    "63NeM3SLDjNucynQMEedC3kCJz18pRyz2jV1a1HXayTgwYwEVDhBEZXCZ7DHZnrgVxbhkJmQXgEiRmdWY28zhzbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdKp27NYwnwhUFSq9YeHW3eYWqLGq7F5dmBTkxCeEkJbmHqVzTRhCnJhxqQBhbkyPpLVYJSK7eJir4MpqZaYRkm",
  "key1": "3utwKbaapTZpzKoB8HffTAmragSZEToxZ4s8Lv2LbwMkNvQnjajQeZPuZgKoqrBtTm53LCSmM5FG9nfiz3cKWwxg",
  "key2": "5mwpgqx2XyvTukC8wFucR48V4GikdkqNsHFCSyoHDoebYtogzYvRETmJDsh2QeBHksqb2eJNcPQ6hXZSATKiebQn",
  "key3": "5NgCYsxWSX6kzQbXm5ECG1YPPRsUvZmXCmEJwzCShHN38y2RiHDH4fHoTZ54T6a5jkSv6vmzs6vYTFy9Zd4nQ4T",
  "key4": "2KqVVgkXhx7GPqrAYjsFwoDzfa9eaHvfVfTe3ouaiL4Ap8R66nfqSYT1v2o5EDMRyvCVnA6Ru4Ravz3iL93kYEQr",
  "key5": "57Hv2MPjxKL88j8iNwSNcdFX2M5wB7pSdZ7bngMeMT7nd89h97tSKbHkp4bfQrPuLV2z64RA5QhRibc14zWxxKwa",
  "key6": "47ykffeewdk85YV5xadgSdqfEC2oWkHZMWRD6w1oZmA77CLo4ZTWacTL6NGvty8p3Mpkr6T4NVarpkKetoqu84Ya",
  "key7": "4mSRqmQ7qaEkXBq4Mb2vtyEde27e3tKWtoqPwHgdgDq46UzRewTfSDCZSSTGy697Gifmeu38F7DSDcVDmfRoMJS4",
  "key8": "2ispMnXU9LJVYJFuUYwuQaXPDgWz4DUd2asxA1GBPbLo6CoE4LHeVz76Jw5fp7rwp6oVDgMrCihgb4Aab6VN8Je2",
  "key9": "3owjxKoRuk1pK38bepE6oihRekFgSPHBGEkuAREYCCzKBpfZ9w5dtTJCf8yJ9BkbfU9CqZQ5SM6reEzJP2GHxDtc",
  "key10": "2A588oP51e1tNjrRE9LwBknuFrCHcEMthrfsNCPDXcAGie3fzpcMYfNvSHkMgcP3Xfa616rtp5bPWKVf7Cna3USr",
  "key11": "52osu6qnQKvfC7D2PN3AK7iZDaP7QEqDPjJBi5TeZeTLpMpf7Jgb6L3ofHYnpF7g736eVV1Qj2DWYNhaVBC2wH8p",
  "key12": "3BAzaENwsUZVXiPRy64uhMQsTnqjxHXVYuzfeeQvCPAKQ1bmpA6CUbp6G9ypy2Z8B2L5icJMkAa7c2yXTbpM9oV4",
  "key13": "5sSfYBYjcvGS95Gg6QaeoBqFsQi7hK4FqiDyjwspRMXShgUD3fZZ5FjzVDURZ5kZF6RdBXnhEF9qJ8byFafeWmic",
  "key14": "4juKyyhuwCWcsKD8erj8Ro52Ws1MpuGZxUSPKRumaL6Gvgx46jizmhnFU2ChNeST53dwJMGbzpmmGPgGVEnGm44S",
  "key15": "4AEmStBA9aMU445kpTpqFBY1p6DgHE8AEmjGRP7khXMs8sGu1E7aWFUyQUjrA7X7PcjUZAStKJKXobt8bYJ5fyFz",
  "key16": "59PSMgjirb6Q1jz4p3yX9T46wmg8tHdZBsw15d2fMQMuUZuJL2noHeU8MDD4Ax7oXTpqUWCHvFjHZndHyZaaKdo6",
  "key17": "4SXQ1vh9KHvBA6yNC7qTyZHZ1X6Vk8bXsBdU2FknK3qx2wjeiPXP5KwkTAU1diR2gdbv1t7dqqfZ1QG2KHn3vYjt",
  "key18": "2jXt3Qxdn8isT5V2Fh894wb32RDa2XFyZr4HCDVgkiKqKzLJQKVGHnRCNYsqnX3yThKbMu88Wwpqt6jAndu5dzMk",
  "key19": "5k1DHa952dbvSKcq49UF53k4FGfvcRURTrHYLfy4AnLXvpwzKAgArLeUwPK3PvPiutum65apPXDnZgd2W9E7R6oG",
  "key20": "4pFV4Q3wsrrafLYyLvLvxEabvhEr3jFTK6BiFaAaJkXFCoUqiZVdqTFDQBPd9GqGdU1h37t1GoofHZftxpevbsKR",
  "key21": "iNHqh5rJz2CuLyn5j3JYwizobktL6GbepNHrgRn5ovnCFVW3pyUNtQ7DnLeh31Cft9p27dVKB47oUcCrauf4G2W",
  "key22": "3VETSZFYV4PzsHQmre1En8fJAAsAzFxXSHUZSBVBbh8jRREcB9KKH76Ax3SutYzA1xJmKQMLAcRaJsYqPCwJxg2x",
  "key23": "5aX52H89B1HYNojLDio6dj5N4XequUjrr7GemSaVaSgfuuynwf3w84L6xmuk4RuVCdMbx2PGtk29jvauTFAtbTj4",
  "key24": "3dy1ca5Fgk4Qomr1vs4oroyE6883EAaWD5dJBgJ23wViDbS58sGpPxRmQ3r6aJND9SY15DzcG88AknwUkQ3LEwMs",
  "key25": "tXH6Ed7uvpQQJgN1UZsoTh7EWiFipRsVCuUSVRm2bERRKbVmLDoJJSR53QFCFRqJphFHSKBYr3KxKrDfX1cmJSZ",
  "key26": "4j6GG3V6csNbk6K5nPVW2SQugf8yr9r2WXzRoRoEYjLwB9sL3Ax7PPZBrhePCqyaVH4u2KnEV1PMrUd9q8oMGAs4",
  "key27": "3aKjSa4TWBfVd59MhuyiYnvDgJCH8qsGpd9Z4qswdLz8evczC4QLoBJuw7AMFnsTsYKRWDRRjLEMvjeiGEAp2yU3",
  "key28": "4uFn1HtMNzgh37sGtXJfA83xBFozYbmaFB1wDxyifQmTez3oVvKovRN1BVUPyW2uP8ouUHi7AveUMYcUkF53hJgT",
  "key29": "41BkUyn12UWuue3bcQQTxTVbuiDR4J4PtMG6WKivm4izBn1P8my11uCij7dyAiUxUS2fhKKG5i9h1YcPmAcfiXYb",
  "key30": "4GC9Cyj5qzsdYA8ghwvpPX22SoxtM6dmfWYaQWLHS8djnn2sGv59erefq9MHgRzMGr77Tvj54HxiHv7thu2F7MPR",
  "key31": "65dTYYw6TGZHzt4dpFoZ75frrhK7RKv3GBYKKTu89X4jt6iQBPDEwpbqYkDVxLFCSQKwYSN5CZ7ER1YzVGVuFgav",
  "key32": "2NKaSWQPFvLNzS68Wchisp3BbHndJcXG7vvmARiZn2Ku1T5F1d9pU9h1o3xXEYCPueKujbqGa4dV7XdGL6ajmxrx",
  "key33": "2x5Um2JefvRvZJMq24u9wqeVy2j2MBK554RiQUbNYnPuvkLYC9kNKFHFesYJ1CoJbtzWQizJtpmpnZmbJJ6RhR3g",
  "key34": "2Q2TKarPpY9opt1zidniSJ1Y2yEwer9nLTGzD6VtZSiX4ovPe3NdvJ5jHSAXJEzdJxEmKUU8Gp4KyYRapMoafsUn",
  "key35": "2zYU4VU7veQPBXmhT49TcHXSPjFn1HfFHsWozMuM9GSjX1pepdFZAeb1C4eK1Av1Ah3g3DEx7LvgBFkV9ukNHSrJ"
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
