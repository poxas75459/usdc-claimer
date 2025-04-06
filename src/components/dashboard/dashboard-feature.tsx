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
    "5e66BiWA7xC7W3jPVDUX16Bxq2TZvkSfoP2uLsSgTpg1rVnMExJKsDjg2gRskJrKQVpZsWFHmvLJ7g8vj4Zg7QQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VF4iut16Pc61LEoZxZU4WEyBRZ9vRFQpe642ZNGyTD8qcv9HLqyPMU6LGcZi4xmqpuzQKwu75BzaCKHw8gjrTaC",
  "key1": "Rmqxy6kb8q2j9faozXXnAXFcqtT9Hg7RobQY9j3VgPHLmFWi4E8gmwexGUajgMHLTr87VnWnGhGtsjQU3xMdLUb",
  "key2": "5fYh5AnNo9J1KgvKr9eoWHufRhyN42XgBpn6xCdb51Fozy1uD37otYLTecW5k2LqwcXextPjx5kw1UtEsatRoy2f",
  "key3": "Z1fhjmMzU2P53SBBCJDaZkZSpqo7gCroKDLNyNaCWPsHaPisDNPPoRttuwGfFRU2aSNhFXtkudmV6PkbbBsW7oG",
  "key4": "3DWum5Atvc43kgSfupu8ncwuq6wsRdSPCnJty1keYpbSyHWRadChg6rrE22LYdXuxvTnP1ftc3RVH9ZK5iFMcRt5",
  "key5": "4oHjGHHQxu4VQLa3KEZZoH7Y5sRrCtJ2XZU6VkAfTKanjrGCTp99DvyG1rTPhs9UrC4KQc7UJzFdfXVnhk6z7VJS",
  "key6": "3P34Wjrmu4YgRzcWs7D6SBpsqZZQfSthJfYU2fayjYAKp8wj3PmXwGrpEiwZDfe2MDkGg3sAv4ZUMwcLDaB9oUZq",
  "key7": "42PJoXMwvgD6swodzATkenGZx5aEg8VBMAeabsqAE9rjJAVqCmHrFWX2v8ZUigGyMH7Ww9AHjAvMVEBVage9jRPG",
  "key8": "nMrsCoob11C9cJ61F3AQGGVMxivHd6QTpA3FzfYGV9Ad4QdKNmQnU2ryPfw1w2dKKtmisnabhUhaWHA1faG9EJE",
  "key9": "3QX5twG818KpBCwprzoBUwwd46DtHPrHd6V8AT6dLehCn3NhmvAWSgiz4DBCZuVTJKFU4yxdM6NkNSiDG9YbYKos",
  "key10": "31PYWQgCyUyA4Ap4pw7svLE97Tjmg1Cic5spAurrW4TWGnFnTi9VhAwNFYetDL3UKsoQXinx1R7ppqpmjbDs7mwY",
  "key11": "3ZqyJdemrF51aCNC1QYzTz4wSvBrMfNkRPJXb2KSJChBn213RGoHYhpC9yr2WGaapaLv5TYdyuPK4gDhMthswiJe",
  "key12": "DXzBcdGayToXKaa46qvq5W569e3yLVHTqNZWro6mXWAPayJp8xmLQnUmB9J6nTgLXuRNfew2cb17phD1XHpdusJ",
  "key13": "4KJjnqhjJC3ZWQz7WB8pLrgtpiD6JYvN2QRhwuyHAV4E45vvM6euD3MYw5CNbDX1zHtywc6zgHTiQFFSVDtpseyB",
  "key14": "qZQ41mNvDVse3opB3No35GkyfNQrbhH5CH2kiyfQvRFHeHmTF9rjUDfLg59EkoQSUmv7ZPUkK9DzKE9hTwxP6YA",
  "key15": "xXf2ptsUpjmSTMhFqcoTPn6JXVBde2CYYLnNJD6xgrNN2GNYgCNpca8doHkyaj6h9gL9Df6XWUkLAHFEVn4jo4V",
  "key16": "2wZg19QKEkPxVMFqw3RzhFRyw6Zot7jF6yMTzqAU5rpxXtiRnvY1oHmN327zxhEbRhWU68q2aattjW49r3ZC24PV",
  "key17": "4sddctuSCeK6WSfjaAbpaSjCwPVpih9iZuMsB8U4GUjT8xC5b2B5yNBmBwG8ZFTpBqdNuQoAqiyK2ysgaWQ7KkGg",
  "key18": "2eopoWuRftUPHkQyvkUzp95We4VSMy3ZvvSWjRfZSvhxkg9XFS2Ptof2aZisU88m2WCJqdQyqzCJQKHiWRv35BDc",
  "key19": "JcCjL7h7iSPZ4Fdk61Mat4K4w3PxfQJ9DSAPvK7ZCe2FcMgWr6Esvm8SwyF79pe4Pzj7m3Lf9ypbThpQdWe2a2a",
  "key20": "4FLz48QiRxZj1G5GLspQX7w8TLqviBY4jLMu41PCMETiWjSrtWKk2RDXmc7gRaSanzeyZf7YyQTC1v86BK4kxocD",
  "key21": "26hbEViBT36uZpcpfbYuTUskYeUdT4tjyjvTEKheEWViSSjRUBaFHxy3wabPVP3oDKunzS9FBVp1jfnMdw4vaaA6",
  "key22": "3NWnD8vF9UMTEzhYYsV15Yk9mT1HFoy3DNFcYTwMfMdNyKt3m6oFdHPsK1GCmmCUDuEnVJgF6jSXNWKbefRj8Mrg",
  "key23": "21mWAsSVXxKsWLJgMVByYjP2gFxSESmThg8JsLq2zn3DjbtwYDxxTMavD2WnG7UQmDvUvpyEhFL5PSMNyFoeVwES",
  "key24": "4bSTb9E4S9PoM1wkiycQ86jLBBJfFWXDxttBiQEtZekh9oT9QKnkA5QdpbPM4y95k3MKTAc2JjjyZQnAbFQYTvhy",
  "key25": "2JQUnzmjJ8678jPYavTxKAjtXqiT94ggVHepj5B69hZZXMsfXGJenALa6XBUPSZHAc7EZQ2XYorcN6Ad3jTjGgn3",
  "key26": "63LbmarwBQUUc4uM2ktH5kPk122FoCYwD8QMbBS1KHbtaRwdtthcbQfNRvWEZFE5JXYa7XGztTjCGZN5axA3SWde",
  "key27": "21b8PY6LFYfN1miCTX7o8gpQvtywyRBGr1riqrmfunSXkxFxSrEcyqxo8Z1SvQwG4Liy1Qyv2ctorqofFR1cMwRT",
  "key28": "3fVftGvvqa8fsqwobC1Z75tCoPMRs4Ki1SsNRRkDfSLbkmw4Z5xoDyJGmKkp75BVvhGyzJjEujDyTvSBuScnRYDr",
  "key29": "3rVUghfvu2frRS86ZbHPXefJWjVSRmtFCh1HXjAtmcaXMmqksZzh4CQ9F5eDW3U73hiBESVrNn43d94YUBEkwgwe",
  "key30": "3HrB7tcRsArFSWdqPFzbzMdNXMDwgDjcuLSDrT9dZx15VaDZXs4kA5Yf8ZNTJfnHTs9xgqFhZ2mtcbNyYDhRWAeQ",
  "key31": "5sTyCEqjrto7PaZ3Gz8Z7zkEcM4cxhj7v2VBPUh91eYPwpXPu4RYHthJW6ARuRsXk1qAMJZfoWhfF5teFDBr3bY1",
  "key32": "4pFBPohoutS1NUGC3FZmfUBCvpqa3apW5VE592Ly4CS8KTR9UqhdHWKkifz2uJioUBCLuMtD4wTEs9WcitsBdH2w",
  "key33": "5M5Vi8UACmK51spG6eoQ5YY3RBiPFqCSsAV71EEFbX7rMT4c2s5y861gfy4Wdf8AAvGMehxZRi2KFDDbCZBoAybW",
  "key34": "64JjkPJsYTfrCtAFgYo87DMw1ZQdh9UNuvNrJuGTobCaBnapp9nTkcRVmvnDcRVXhaJT2ykh1xpPeTiaiA5gjWRm",
  "key35": "MSAjMEFjpqs1dyj4SiHcCXoSUr4YFvM6hpqC8LNPtR5ByLquELRYDunbexGrB4fvMjE9B4UcAciJAGNT8AeAnjB",
  "key36": "GbaWUC1uqEo5jAFNkthe8vsHP56yFGzREQ4QdHxy5mCFY8WqovccRVB9fw3U3D4KGcXijWWQrut2qq7kWQsELy6",
  "key37": "3Je65J6GJANbMxK4s34GGmgtxRfAPdmZJkkno5USqgbxybPXAXkxdcZswH83mo2W7Aevg9wqkLpRAB6aR8jM4gH6",
  "key38": "5YaqAZRovG9Ppyj9HcUuzbgW8U94Kr4nmnFaGp6NGCD8z8D6KtnBjR4jsynvmWRhcpKafcM68pxoMhWvdPyeUJ93",
  "key39": "3tGwJgrUy5XaEHpe42L3x7ppJXNLwEVRRMyppNoKqaErDmwuqfvjxQX2phbz96N1Gft7sdvKWvpNkbGmSMW1x3s7",
  "key40": "exTWtxtjAwzhfRZBzHDagyTdqHMFMzgfrAb4UhatefoyCC3CD2NaqJPHTeiLE8VoMGoXapg1ZWZWbo8SC1UpELx"
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
