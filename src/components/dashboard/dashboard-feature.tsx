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
    "5Zrgzds8Mqyn9PXjPcgJacw87fZ3WwPVvihnMayg8eszi4n6QUQ6sD6AiBT2eoWTgzxMoKJ3x7XCKPg8xEQQJGYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Si1DzDWd1BwcFimMvdtdctJckLsSV1NpDfnUv8AMcABbEtfivkiu5CmbBAsYhsKx2YGdS2c39cib1F7uqgUAS5i",
  "key1": "3jvAxe3AKveGYzvoFXw2ssFGgmhmCFPjC3NYrTvjWx2jigN4FaBNfUuUJyT4shpC4XkyJxKGaeEaQTDtXqQuEQR1",
  "key2": "5a4GV1q6XWWsFieouaGQM6uSspL3yrZYqMX3192c3iy1qvuKZpAjCh42AeTPE57JRCFCSZXgb9gKrK5Wqua3w4gC",
  "key3": "jnMnPpV8gHAiGyFY441tRvRDxghPA5yaQcPD5xKJy293MbCZki9uoUKqBEiVix8CNzH7YS3xnJAwHYdLeWuSokA",
  "key4": "2JMQ3iAyR2NpakZXW3MC1uaEKgg483pU6Xq9TKq2ktJuh5F3Tgf77sebaNBtivVaGX8XqUKtYrco1rztwvaDyeN6",
  "key5": "MV2J5PTwHv2b69oJiRWXMVJU8bn9aZEBDEfr1j1EpZdHDtFY2KEyGB2LmtGYeVigjDbR9CbzoTa4NMfnJ8U7z4G",
  "key6": "kqD6zKtFNpqbKDer2dUdjqzs86KSRQKZwY7ExeQu4NPxrqVKdxygZeGcfNi4YywzaZfDhNK4qmQi3wG85nm3sHG",
  "key7": "62rVtA5oRGWjbZKuEatm3uVqNnayZZmWhEyFcHfLDAZMEejMZ8KEVAwGGrNwUgxkd7PjvuuNfpGGwXhvZZoJ6Pnv",
  "key8": "2ZPgKGGQLo89yCse1QMMYZzmaHWaqSR448wcnUoHm3wS89iXquW55Pb6cKXiWCNmNgCw8V3PrQv32HutHbEYymRZ",
  "key9": "5iErHquQ57wBM6o4tdtPgtcmWSE3GrhuV1qeDmVhuWTYe4zKXFpkvh4bv8zYYHonzUUGr5F5fG7tUxswN1TUKRLc",
  "key10": "4js9fMeopChAT3zo4WDHrUy437gXvkYSZDCxAjAaFCYdVV5BaHZh3inAShQsNT7wt686dMfxbW7uEJQUVFcxXMMR",
  "key11": "2oPAoUMNZnt5SfbCUsT4WQnrjEXKFeZYFCmXmMsazsig6Vgf147XobYJebeo6b8QpK8RrTGT7EgFheMErfAi4zep",
  "key12": "2fNfF4HjrrsaDxmtmT2Bj1RQx8aejDL32g1Sef3DTx1fL3Mz9KzZmrG4Mh7AwNUy2wKhv2VupBfFRdSHAEHjrygw",
  "key13": "4PTshyE4pi1c13GXszje7Qcuo8qpBxdZBJSpnwRwAnc9jt4PLkmcUenpneicfXufjU6okayjsrb2UmZ7pTwJ17TG",
  "key14": "3CateqF3dFMG1hY6N8LJv9oApzUyNBAKhL79EiKzDxPPa6a9bvLBQ8rUuH5nFAPwYwzfpqd8EBpNuDKiPUSqYoGF",
  "key15": "2tEF6bPDG3kU785YNyiuxurZ5rgLki21Xecc7G2CemgPac5zqjyoEK2ErKb13eJhDaagrPXqtwLWXzUduRynahHS",
  "key16": "TEoTsvTTWKYBYePmN5x3J1j5cKyXz5d45sCBZTB6f7DUHpKqfN1vv3aeT4hA6LUpGuywyYp1UTGz2rLiB1msRaP",
  "key17": "4VTLvmrqpgPZCW6KNLw7fgst4qv7yKEaX53sfvrKdksannUue8s3UZD3ew6485oZ1WsSYbrv1o9WMsn1i5K1jJ9J",
  "key18": "33ccG6DgMTxkrSqBiwqAWNgTNAdp6JvGyUoM6pBHf5E7QEwctMqZX7P3PkrFhnkK8Mtj5bkXJXnrC147b1HHKxAe",
  "key19": "vwSSJDDyLeLG7QFK1D1ej5zimdd1tLTJyamodinruKWo5D99NBqro8yQYM5MQKphSDyHs1uNcxpN6NCXjgmJ5e5",
  "key20": "3Jdi4PxZYRcZaQTk8M4CLRxQpvz8xMvrG6UjiMrsmotG9ExUmRt7BEUhzseHqHfkk7PUVMgxmReR8mU6RzZKcnCy",
  "key21": "k45d2h1moASSN47L6obFFtkqaRngQvAhhnPDw6ZcSC1i7JoKeAX4kh4GJpPoynmujqNWhsaLiKSiYJniE5qpsjs",
  "key22": "2E8cnA67iHv5LymXBLs7avndkyaP3WMsG5eJXVbqzeP4iVAYSEpoBfgLu7Y925yTYcHNKsNQVBZeFjdjPiPKqLhE",
  "key23": "3k7bXJwMQqvnR1FM17Z8LKWvX1oXtsj94jHQ5nnY3jkCZPvSR9QHYGvB4RMuTtsz6xHDCpnr99o6Cpae88zpRSMH",
  "key24": "3PQMEmoUM8ALX2mNJN3ykJGiVhSHRxgEm7wu8iX395AddYXCL1fJ6GweyekRy9PAnQwySEZz2vqeEmifNbUL9TzK",
  "key25": "5WXYSRy2V8ZEtHQoSPM1Dxi2LB7CjNDk2S2UDh5nmWoNFAzah8Mz5sZsHDFGjU9g5i8a6rUUuGHWRg4Vu2kkNGZG",
  "key26": "3ytmHZTfLbb59kWHME7DkkkPooDRN6anoPbzi4qdk9xa2Z5z1VmZ1JLMqQRGdgx7HoWrpEpVDhTfQPQ4bmccEhir",
  "key27": "3HHurGtf8K1pqKY6JXi4mdQdWPhueY8Ng6aiNF9HUJtFmhPcDmHqfwaALZWpFJsjJitc1K4vyA657fqpPJnkjjRA",
  "key28": "2sAdPfeUtAWXrrTxgSCFW3DVPL8QELGUVJJnzLn79vQXVwDRGFBd4P2Lbp2heutc3pA2W31nx1qGqVLvESuo73cu",
  "key29": "niZDxoChUD5qeemDxW3U39NDETMMFQb9CzCTtC2qmmEgLPhDoQgnPu36gVrcC6nM5Fc8VKMV36RSfZaQZ7QGQMp",
  "key30": "MQ4W4drRhtMfLhs51t1k29ES4hUHNhpQGrdPR6PDjJnr7t5sfKQJsaGJZaBCQKW4jgbpW6T9B8gqAbXhuHjmbUw",
  "key31": "374cLEj5mkCNkNRK5pfsJ3qQLvtgYfru6MB7MY3PeM2RcqSqPCLHqHVpymYA4VF8gAh8WFqWRfVrDBkBx1xr2kTp",
  "key32": "4gdhJ6k7GSvV6CnSRueMZBVcFZUES24jBDbTSb5HGdCP2MupaFz62yXx68FmeQD4n9hXbXV7J66egjDMqyG7YBev",
  "key33": "3FjMh2YUqMbw9xeKgQoTN1Fmwbroc8vFxLGqvgrTZCTTqMNEWaGX63udzBRCdVoMa5ZfrbmKkVXcXxBbY3hsT1SN",
  "key34": "2zDNH22u8ugGjNQAUFe5eaK8inKfNwNN3fsaPVKn1uDBaXoTETFEDJKAehp7z2b8bra2wYPpJRsgwXdwEDpcaGyW",
  "key35": "5NyruZAZbZ5ToFJpY3tJK359nVhgicRZckU5Qmi6UGAHh9eVrc7D6pianwcZUtQvTBWn3Q5R4qwZ3AfLifos4shs",
  "key36": "xFmFn8Woa5R1aVdfVK4eTcCogCKRZeWWZediH5PLsCDwpQaVbERJT2CLu54XF6gd8GV5mgNamHHvLJcM28Z9XP9",
  "key37": "3d8PXtrjsBmCAnjTZ8RqAQxpNU3ZFEjiHW3UvtWr4xMVitBVXrrV76RTeGiNYwcJ2R1YwdBrLLbp5Jr4cuEiW3Vw",
  "key38": "2C7zvYXkpUfngkffQyUrepxrVPWxQFDd8DZnZ2zzyfm17n4z5THEjGr22XbtGdn5WRZmptUYuZ85EZCAXvzdWB9d",
  "key39": "29VicaG73BYtGNRbzi7MUgahzqSST76GGy4iEvryviDu5P2729aFjLQES8Yyvg9hoeHPmsrdyMDv8i8xx78rws8e",
  "key40": "3Xen6pSzyKQKv2isA33zndHzCbQvCL6K6ncwyD7h5qugij4ogxvoEhBhBmNFg1BsV4g6UxDTmPkiuTpQxZbBSAER",
  "key41": "44jevJnbFLyjDVruQc6Xdjk8E3YTGpAK26FJstYh8VBYctKZk7y1Gx7BGrgzaGT7rY4X7oBFv4ro9vmMTn3KfAsY",
  "key42": "L52i5bZKKoL2jtyY9Wq6mRH3mEJWUyo4tnqJK4UPuKmTAD8RvZGr5ZQMaHR6amdSZyT8jwHGnisyghpR6f2XWEX",
  "key43": "3K9EUUvqR6hocdKsiJz83xANrkYqLAjYsLoqvaYwxf8Z8vbaRsC38DBmYDsw9SPtfJzrpuwHNfCJF2hN92Qkaue4",
  "key44": "5Lo18koebn97PX9gMTcWKeQsUtFAMEnyvSYNYfpbFDx9uuHjYTXgMJx6xj1yHyrcz6kTyLuwUe7a2uL8CFJ1Ya7s",
  "key45": "5hjD5AFfH4G76P2NGNrUpDUFRF2bve64kvTPLP4ZFozenoncQK5R5Q7h1ZBaY6ATPN3EB9u4dniNFgcXYeSdvizA",
  "key46": "36KMdKcvqz66vh9davMHLzjknM8xHuLBtWuBpNB2zbVYwr17jEf9drW2rFhCfR81YMxrPLAMu8o5pJU1Jj9uHf6s"
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
