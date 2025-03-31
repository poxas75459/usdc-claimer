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
    "2uPQG3DfkUeToomi4GmCM5LHG9cQtecT9Nf9d361uEipzW47po4wDtVRK8tSBY2WPSu4tqyNyNYqt6WMvjP5CzEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3E51Kfe1hWUj4M1LMsEUfNmya1znG1MC9er7MLC7pw2SQQxfe9FkAmNu6aDZap9G4GtBCjqt6DG8B6xSTiAHeA",
  "key1": "jaP8Kr2ZG5LjVMsvaNGDxXmaEKeVBX4yi5NM7z9q7ej2xmUaKe7rNxJYipdZjwyyxnYc9dgYEqm2HGfm5jjLH6N",
  "key2": "KYBeyTVXCcHkArZSR4mhw9GJLr8cCDhf1hEhZN75nB8VSHfuCNGrpb3em8buff1BZKRe7Lrz74JNZowwJTUgbKb",
  "key3": "3d4rHEtmLJoCW2x1nsuJ6m8yFf1qPwcrdPggpD6FTsj42qkEEauUCyZSw4rKB9h9V4N1jyfHdcCPnRkm5vD9uokX",
  "key4": "24i1A93kNDgVQowv1scowxcAdj6CPA2wRRaptba1g9K7t22DcpGSXsdf1uKjitgZG9Yh3YLhx1ibtYKYkMfrojcA",
  "key5": "5S4Lg2gmeRifdtZH4KoBeaGVpzx2ubLVgywZz2Mm9uttjiBjizQrJ3TmHo9FceEr7sJXVDmo72uXjyAYsMWpBded",
  "key6": "3SsZ13fTnGJZ6C1ZrEGF1dZUygoas6DPq75zERJ8mDXuYRdavAr7CG82LiCNih9v8Mq77HFWhJqj72wdWkNpbGrH",
  "key7": "49Zwv8u3qvviiCjzXokb2fiYJK7WedZnpcmVdAgF2iphKhKvWxr3rCjQc2UNkSwctzGBRdpSBWrJYp1THD1nGYhB",
  "key8": "2RkoYRe7KwKNomByUBHnqZUF2DwAnpF1rS3uKVj7LGWdGy6ARgZfcnRoz211rimRQxALZ916mzsKv84skEGdyQWB",
  "key9": "5v7Rden7y7FrWFGbyRPDSEj4b1YZTpHWmwyo7oKhqU7NE1duNgTp5fs8CoGRELR9MzYJN3dEbiSHPP16vKfASKDf",
  "key10": "5TekJ3mwKMZHgc7oQreb9nGMQqLAtidvZKyMAfvJxhu6kr6RMQdqcNY7CTzApopNWErM6UZXDFDi8aNMJ5TH8Xs",
  "key11": "4ckjsT9Z3xgkFtyfGCTHZogeccpbi8FTdRA96iyJ5w4J18P5UggAVbNoWGf9hmWr698jhjj8WXLtV9fjUe6Ytmue",
  "key12": "5ojUK7ijAqUUT19cPMYY1BsK3Wvk39pjVm1HiAgEtSfLPfJXhWyHarR4fBhJbZTFWVMkMvBkzPve3yX2KD9WEUsQ",
  "key13": "5V5UWVkJgMWJXMrsaYSBRTAtXpGVeVny4MunNRX2RgrdAAPNa8egFfBuwMVmuRA34SBJQL4JFWc8BuQien25QSAy",
  "key14": "2i7KjzGeqXMq4yjyMPV8Wgsj7ibsZiZsDQQyyqHx3aB8f3AhW19WhPh1AuuPWLup8DsU41dPDwhQEfaAMhnNoeFy",
  "key15": "5K6xjNS8HZmqUfRnt8ayAms1uhTUSj2oNW7cxesxRMKDe3KsyhP7kT8u1niVANGzxGnJ8txabrmBVqdrPZjq5aPw",
  "key16": "5hBeeJQzWqVdU5buQPDzMfSudEzWMeC14C35ueF4E6JRdDB29DFmQVNvrKDpNcyL5FJmYV2oREvE9kQLnPAMmXgQ",
  "key17": "2157eM9ajxCtXq6sx8gNksLY4TFp5bddhaSb4VJXaibfeXyh5GvrsQ2BPUxvNqnvWer58McfzBFcphAbzxN1zmaw",
  "key18": "kQQHnueGXDfiVmjQix4ceb6fSZtzm55eEDzo7HA54Qs4D8vVbpY3W511f7e4Jh6ASMhBeGyGmiySPN4pgFtHrCA",
  "key19": "5Y1FvmJmwiN9Z94jGWTbH23HjgY1UpBmRTrzwD1K3iQmovv3tJU96Ew4egdPfLz9BJaA6LrwAbuF5BpmGkEUgd9z",
  "key20": "2vYXBnhTFWW8Mz7u1e9MPApva2CM5vAxhgPzEBiHrHMJbxNzVqcWLQsrXPsANnDcUjqvozmVQBhitiKWay7bRN8m",
  "key21": "2XPwMk1pkR5DMMm45v7keksg32NzsPmtaGDupjKk8eQfAv5eu3K2dS2fX25b1mVMMyTbureFv2TMacvopJpJSkWQ",
  "key22": "LfziLzoRmNtKAEdZ5LhZeCgb1hTzBLdE7iTnZSjiDK2BnXquWoGv116aA8qE9298eFaeYjNwsQv6FttcKWixZsJ",
  "key23": "3AfP9RE9bPvKJNpqKAMJZCYVoe64DW4QHTAT1AahGdnvFSUpQwXR8D9nruy7xxQZs4Trkcg41fMeRcKPq8BJQqJ6",
  "key24": "2aHyFAwN8NSVpA59PzLcqa2rJRTfBo6e6iQH73f4ZZqwUqi58FPFomPjtDdjsTCHP5N8E9VYqdWmtwHfSuDgSmHT",
  "key25": "4g8Mt5nwuEKERLJwwb18xnibArgKHWVcSvNC7swKKPR1zX8tV5XpVHTLUuYmKzSd3kmZP3ayDBhUzzLAuFPifMBL",
  "key26": "4xcH3LruptTN5qzgyjB23QmaNPj5pFGnnr5GyYGJRG14Bgrawjh7DGTu8Ct9Cv6Wdxh6PGFatbZmpFi722JxbqNb",
  "key27": "5yNymmPJzTGPjdrURANYKPY7dMKMGAU6H1dXHhphs986mm3QBzy3nv4X5H32F75m3Yxe8yBFKgynZXzgtyBg5ZWT",
  "key28": "3sr55zLJ4TqSLf1Gq5FzBAWvG5Ac9ePZ6WnbaGyg2mS8z5XWiDSmcHFhQ7YiHEXJvnRTa2S5dihXuQpZMYgQrZeV",
  "key29": "2S44dx8aet8LheHayujeVmbtT6rHa9k1i9Wr8QdgNAcVZSgBEU3i1kWwB1xZL1hV7YpqtZ5DtyxoGwFuNgQnGGBS",
  "key30": "5Sg4DUrMA7PN7KtxkbEqANPv4oyn8jvaZjqXJy1WgQvEKSnHm3MXCviWXRfejP79BUvxk4uM1wMuoJpHpeY53m8z",
  "key31": "4HgQaY9qDfQqCjbt66khrb4nsqX7yh7Zanz27pn1YvZ21s1WcUeDCia1zb1YaBoyPG3Njdz4XvnTFhNjJ74q6pPG",
  "key32": "E8vEaGTKmJicuUoSiMxfERsKhZBM1UmBYYsZdJXobfZ5gby5yjPg4QS6zdGfu9c3CMknW4jk9GMdivLBQdJnsdw",
  "key33": "3Cds1UMMtHzxQbaZoVZ9Z5oHSWtprjCaU26Aatb3CiFNRX9hiNzx1gjXyAbenw9ehya1B7QkFKRZgKFGvmPbAVVw",
  "key34": "5QkC3Q4TXgRYYqfYwJoCXUJRps2XFQaXkpzTM2Bv7CxSknPrJBd84U7qC12tEj9tYPDyPzrLvEBYYyTNqKvgMktD",
  "key35": "3SPq2VLoW9FAELya2pRSTcdCxtWTP6d8GQTdcKvRjciEcq2B3a9xEph9LgWF9cbSQ8VZ5ng9VGR8YWrqTvZWg7dw",
  "key36": "64RRw4yiy7eXfYfcyVkFp9av1VV6SGJgrDkfcwQXbV2z2jBc147cNs2JijxVrAYFuuF7DzEEEqpn8mUm8Fh6aibe",
  "key37": "4LWRAtpAqNtZ74vLqdjB2CTs2hfo24c6KjawpGgvGEk31Uoz2ggyqq7VX6WSNWLYUQtBJLfMwUjj79sxm2DeC7b1",
  "key38": "p2cs1FwHijioKuiycAZ2t7aL9QogVW3oaqsys5Uod7jPnEauku1afpKoStFnGeRtU9Vo9TUbMiCk44VhFxDQCNU",
  "key39": "4pFWxUKDaeBsQd2DGj3mCvudzj1eYAfyYWCMLKb5aettRNNFWUUv8KdSoi98qZydkMfNqauWknivMXjpXQ18Dk7S"
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
