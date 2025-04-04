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
    "2RF2X2jvVqgA9TV4n9Wm5yevjCJZwkHTMVXnt4YgtAV1djkkJTShFSWfzd2meuzMsZWitP2ebHTvAWGoAmRAMduP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJUe3iF14Qb6GH5VXD2s7wbz4GeAtXosm2m6oXXEu7K7H73kjcPcTPymrvRzzu2H2M5HycWpZRUrzhyVJ6gETak",
  "key1": "45avbBj3ThjSaNuuGvkCxL13sx1T2853kxBFfA5RWihZRuZfC1GYkWWGvQhGPLjUz394USd7UZacY1V1FvBszhUo",
  "key2": "4b5rSzstMXkSCF3ywKjXkoBDLfqniHSV5C1CTEJSpH5FMAW41qoY2Kk3ptRv6bYdJ9xtik9ZNcP5KQYk6D5Hv25A",
  "key3": "28KqK8nVC1ehFYJHUtAEPL8UnvmArzt7mWSv4B3SmMcodiUwhMpX2JaWJrjmCCetPFM4tTqwMBLA8Wn88hnKob7i",
  "key4": "3ywW1UFHfx9VE8P85CvSkmkCiBpwa6i7CmwB7Zju8HxMQ9Ea6aBpKL1tBb36qxM29yZXfqhPStG8oicpXDi7xdhB",
  "key5": "4xpG8HNQaqvKcQZnYkmGj9LzqAPYbZqGNmDFcUvNgvQWHUd6X7d8cg1EofTLN4YibGGCRckjiYoguC35xNLQhvj",
  "key6": "5k5vRU3Ej4drv1KpB4z4naHvjehPqPmHG3KiAHZETb33d933m6JMWCJ7p4KSV1kzYbck9QAQdQbUAceZNkpa7JWF",
  "key7": "tAFhpiPcZuTqpq2hL4s52TnaYgqSmFk8NnvFQWZbKFCev2X6wrvYSpqYfoUp3mDyp6WwUoKXa6oEQnwyUuqPBr4",
  "key8": "sibDq3hG6KCTXafNyXhVBn78omRahP94XvVk86XWiNMnH2dBP7DNdfU1U2yEPhgNWGmv4hhBagiUkk72xaJMt5D",
  "key9": "3dLvx1oe9y1nuqRTjdzCfjnZFRtGegB4917sa4PkngRdTCg6VpA4UGaeo3f8Y7hhELgbtZC8DoDwgf2VphT2kPsV",
  "key10": "4uAD2WzQX4Nt6ZDJTAhiPMeTsAV6amnR1AuD2Y2L6FFU4QzVPzKXHo1Roxyk8C2x4M2uFmKNGRysf2AVvP1Bk8bq",
  "key11": "3foXqQZrrq6UDNpXJwQ5PNsDPsHfk7TJaNTqASV9dm81UayLuSUoYM259nGzu4b74KBChZU7pYdJLB9HKdiw8Wi9",
  "key12": "4NVHmjgSyfVKgQLYCqY2GfDDkYwBy1B6FGk15sY9RCV2mJ94rGmUrvBJiqe4KkxP2pDPfYsnCbBN3iChFyMsPxxd",
  "key13": "2cELYYCpzVXWLj9GDfXioCRzGoPjvFmQRscGUyrizsHPFTt9RXbCfYJghNbFBrHBFwSJ5PiPXbhdQjYuPeChzoA8",
  "key14": "xWBQ11Jq2hnKRoepezmPVLtreGrehgz4hsuY9pRYdddBzeGPNHJVfatWDRH5Uo4F3HCodAotkApT52pRqGCUYDn",
  "key15": "2v9gaEgiutpALRDevBv2eTEZCDMqQZDk7xVs4MTkMAQ7AykkEgvvLESj5NmRtMithpkFZiPPGfEaVFAUmEpRZDrz",
  "key16": "47W2XHDEnjZe1ncC4ehwTmpPJqngwwfgToP1n2Vev5AyR2tv9mZY4PgU9XCZr7U7dkZGpKL942bAoqFwuv86kCyv",
  "key17": "4orVCvyCkZShvAxK46PwHyFLRCT25Z3xHENAKYbEoTGJzuAnWSB9MexDWZLgt2bpBWf98Lh88FUSr6Tnw4KJ8nfe",
  "key18": "nHcPNPrbWQkrSaEVSFy25gQniDM5vW8UUmWXbahZ4Mxhxr3HuWwEkQabNYycMU8ZkYbXgibQWTN21jcGZRND1YJ",
  "key19": "5b4xprbfdvJWQaZxEGqNCeUivZSJ4pFa8GvHVrJRKfEKzYPC6roBwRWmVDppjamLjo6xU5nqQbaEDJjPEpotrDJh",
  "key20": "4uCvdSWt9x3dj4Me239WJhoMVLUCogVi6mDqMQfDXtP6gxt4n8FTTtwimhrWPTKSqkw3kqzJD6jHMMoyVkc3XM7P",
  "key21": "5r6335RwH2UsDtpHC7JLg7S5gkN8SMN3RUMVZ4bsemiijEPVGZJ1x1hYz9A6V5X3XaeuMmjnqkWhZL5gQG1VnhYL",
  "key22": "5NBdavv6FRfjDfZ3u9rUAWG4nYei7ApiH3GZJc411C4d8XgEPYMuYjBszkL7dsfZHChYWyms6VKekASSSDYSfgyX",
  "key23": "3DNEitnE3i38s4qhWnfsNyu85g7ijbYZgr2qMPxmdqk8xGDBM7x8DZai2XEWCtb1ogH9Au5PN3qzx5QRssGNf8Fh",
  "key24": "3BCupxqiUm1TZhJp6hJFupCZLBoXt9bg9s79LkR8t3Sm7JVc3CGoia8i6JWYNeZK5BmGU87Fg3dQvuzVmkffZheE",
  "key25": "2t6cTd96Efm8q6jagkK2RFjp6dPum9wLY7X3C6UY5qgrtf37Z59t25SQZEv4gYinTRWzVSMaPcNizYER6qstwAAR",
  "key26": "2tYbJ9escTbZ2vcBx6rCbrXsgpfPsrWWKoywF9ormaeU1kBNkPSJitvsHrZbvopJVH75rphEAkCwJ5zdNxF5wgZX",
  "key27": "2YDASG7meCw2YJ9xhGmMGast1epB5ZmBMu6aXTmuFrEhDjeWvTkmreTKKD2iNT85uzfa6wnyxsEP1qtfV2z4nuwb",
  "key28": "qiYHp9JutjfZiGPtV5W4ws1CTpAHHzvgjr5vP89w5YMw4vPYexztoH9eWNBRNpW2UdTSW98cLiqs5T6h9McwG35",
  "key29": "5tQEm4bP8Dw5P5ZKUiZa4jnCzrWMd2MGpFtDPWBcFb2SCnn5kf33ECr9sab6cSbVGFch3arCdoe7WN17b4cJbKsk",
  "key30": "2n2WUoZUC7RtVzrJfUT3HUMJpBwuPGvAQNGJZfrqDtghXJZKQcBWx57qoSsgLQzoEu7FMj5sZePVqoj5UkrZge98",
  "key31": "41679iL6UF4ZRDSSi1sAz46DjwCp5dtkLZ1LDAMZym4diQ5WiA3e5mNCJzXN8AsbKmrVk7yRgqnfNpXiLRekHpoC",
  "key32": "jsoZCVBSCdpUHNhjhwaEXseqQej9bK3arWCBmGqmcLjdi5gG7CSzzgjkovi22UrTLqNXxxrUwQTx2zyhTVM5ubD",
  "key33": "56gGLpZAbZqbZFczEhfizi8sfmLb5vet2zzP3fyANrPoxEsmGq4pbNWkEMfiUN3zAumWWMa2ZS92AQhNdcnFhVe2",
  "key34": "qBQowHBS2nA5PURx6uE68an5649foQUVBytJaPETs2kxPohBgmhyifpor4Z5sYFxKzDYRJ49FwbsVQzjyLUjzK1",
  "key35": "363W1aeujziSVqXyHRuC1kt7ARhVPhBqCTLXmC69YEuTiHGjMoujEYcw8cVib1Mrs9sc98QcFKMrTav4K2GtR7RY",
  "key36": "39YZpW5pZ7Si984AnDaGRfZYNMpm7iELnSZFCCy5bsRjFMpgPWByTvMNzdP5fV2wTsv29XE5N89d5K6mV2BXzoLx",
  "key37": "5WCqKa6eKTH8Fptp6efAxqENKwNfkrTthk4GFsvzyNYLcPU5u65PA5LsomUk6oH3MvNP95R1V2q5ZyRKyYnkzLaA",
  "key38": "51C2Dd6WkPe51gihFLcPEC4RshXBHY6Sxrzz1YQHrE5QL7skf8oxTS1qWs6UWBQmRsE57xBkGQ9KnVi96952vrVa",
  "key39": "QgCpnBLkxKQkgListtwjD28dGEYdAmdzYcSMVA8y2VudYbBuCcDgf13hKgaj82Tcr59wjioNRi1cgTBjAcRpE8E",
  "key40": "4JqBJZcMvzdWPBEZdsSF1AQuUBk8PkjmN2ivTmD3UVy4ga7bUumAzKhcK9dfq8i6AghmgxyaVXzYPMZW2282iNWq",
  "key41": "dmNZHcCNXhriQFSdN4irD1iJhcnRX4jkvaY8qFDV9tmMqe5YUgf6yF3y8mD7y5VTjpJWYFtv2HR2HbUiN4PXpmY",
  "key42": "5yqgFjpYmT5h5g6btkGKX4foV7CMioZiQtu9RdfzmquqzDpMbak8QMkAZCyQDv9N5ZXELoUQbkwER5931tu4JUtc",
  "key43": "4BZgdSyTHwAdZi5c8Myds4Ph3zvMwwAs384NxEJLgP8VkWSp3zPagUdN1E4tCo1mkEeFkJmr4Mud4M4xHKCw7Zgm",
  "key44": "3B6kyHBF5vo8uTuTB3oBARUSmMSU7k4AUaXXy5AiDL7MeATwAS2DiPhnbe5x9NMozTh62pXUL37AvWrpH1emWLXQ",
  "key45": "3GwkN9EKdmMfM1stYFJiYx1KhXS6x7wYRPXixbdVhuc9somzsNoUZYZ3DiEMsHk5rt2tZTuQcdN4kTfAbytwVC8V",
  "key46": "5krekQQBPgfTab2FJFx9Bfb2AnnSYuSZGJJ3seSnreLJcqerV7zbVbYqCkQhNY7wXdpVnNw8Sb5mEDr1fB61M3uN",
  "key47": "3mCEVPtKXf9gUHqwqyarcEDXkg7QqbG2PRm6jcFC1KDmwaYSRZ9iN6nXGgnoNHbrYtkvasGDGhDSh1zBUCgnhrj5",
  "key48": "2tEcxi35sHEwqmmP7D5U2KMMrc1vegRjtUYgoLQyWeMKZj76dRTiuPNM5z3MJDjQYug3LQd8BLAgPyhtKGQeSHc3"
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
