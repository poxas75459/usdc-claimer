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
    "5D9YkQ9oKRyjW3rR5zQX1sYsAjer2pMZHGAs7UCY7r7fpaQZNcXQHsQCZZ4jW8c6dezinjPJ36SbFQ66KrEDMkjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRnfZXtSmSwje6iAbJpBbeA58NLyLJgv3DTrwgodPUzR5RxB44nbqmzJD1ndqvFyRf3ocvsrCgwCPf92kepqtQW",
  "key1": "8xwoTTj24qecrj9ixZrVEZT4D4vRFbcLods7DHDmQeBNoGHDa7dSAE4zifncjLK9PYSsqZhcyX6F8QWtMCahB3q",
  "key2": "3mxQyVgjthPUAMbZcmG5UET7hPcKyHecfiQm5XfPJQKx1wuxL1X3ConcxCgV5SXvPtwUVoGAzxUueS2hMsbmUJ8B",
  "key3": "5rk1UnvbBdBTcBHtHRfKb4UhHkHEQKEYFK5ronZvDrPEu2yGrxBC8n9UynfzPNH1a5qUbdFDKkkKtXLgMnd2KQzX",
  "key4": "5PooYCjJUhz7aAFbQEEVuWAi2hcMNme1nVxTzLKh4sU3E3QqNrcAyKBEFoMQtKaTaDBw6tAwnisjGjonmhdbbQn1",
  "key5": "PBHZyEzYMzGF2fcybwrhkbS5eRd8ufyY2Vg9PD3nvTz5coFcA5pyYajcoTFuwAuE3vzU25TPws9Q3WWujV756us",
  "key6": "33Z4rvRhgNhZRnvCUwQqoDSm1sKYt5YA52H8kJZtEjyvUqgt1y9PkE5L4mzZUigwVavkkzYJKXyddCyyEBjdSE1Q",
  "key7": "5Ux7pRnh4axjEqZzZXuNkvwigDVjisjnw63kdS6pjrkQW6UDpmPz5pa7PbjPFP3MmeotgSjVxsntVQPm6iSeDxUH",
  "key8": "4MAiMqFduCapCVR49ygkbh3tFDa3PbCXkXFAZnAR3HaHwnDWTwjywjox45BakLB3UZnw7HN369t1gQowcY8jiwzD",
  "key9": "3cHTTT1BNHoQCkdU1MbjDGu4QVQAQDEfYHsY5bQP8kjtxFkYSXQa45giN4R9vfhwFgSRf6PCDxnQ9y7bF7T3TqFB",
  "key10": "FnM61uXtLNEn92mx2mcYtRWPeEhp8Z4FwS3XRGr1GhbwL3EJbVsftpHPMXmXeXwNxT7qRxY8DySonDzKwnufftP",
  "key11": "4APRvmQC7aaC6wRXvRG8MxPmhCsKxpMXoN3u9xEd2Tou3jdNmy8aukv7cTsj23vspUrZHvXGmH168pCL6HKsNDMv",
  "key12": "2ozs8NEuHFGgmgPUBPFkrmnaxRGYv1puoywZ9ANZtAabBD2ZHhNHyybPPpMkuLGhsR5h2nm96sx1BNQFfpvyEaGf",
  "key13": "cXeyFZZe5ENYRwzLBQfF1abvBw43VBSGnJmK1L6LNSsDFTcyBqwcAQsjxwCYBe9Vpwo8Jx2SshVYDbvnknQJUYb",
  "key14": "UdCK6MjKRam3ypxs4fpdP6516MSzNAstvRizwJN5mSR72xzgRgNuSXj4SWYYPwdbMRWGLbckNuwAfkiW1ayFEtm",
  "key15": "2awMLCXQZjx4iNf9S2vpV9bpdSzMEg6qQB5TCxJauwVeF3tTnutxd49e73wcmrCQUEAJCaXCtcDHAYKEcT5Ki7KA",
  "key16": "2CNXF8rfkfDCYLrUZ1BLmdiC5GfHiuwKgmnonKpcwahtfXzEn6GhBFWmSbWsr8N5w9G9kWHNT2n24RSnmt8sx8P9",
  "key17": "4NorWzPS2g5jPoe5S8r1vpipjK4NaC5eDNETDQczAuPDNbkmo86SKE28WSN2aeE37yCLotxG5HWNL8Zh8fY6BEYD",
  "key18": "4y4cuB9c1V8HgkmXmHXNsXtbtikZHi4W4VTcSX6ajvrvCiSVXAptkpQzYKPDBCvZqpnetx5wgoEwxaE6EQdu1885",
  "key19": "4p9NxMF1sYpk3CWJu8gE1uyerdMPaJk96oDHKGrJjqeMGsDQDhZCRBx58cQaMj2mXAZEzfSbHowwrBTVv1AjaFrN",
  "key20": "2PD2yHBkXnEjme8UgqtXFfGNHc74VMJNjXvdbQyPVkG974Gu2Hc9JCHXcJJ5KBkyvBPdiXte9L8b9xzB6kCWLn7H",
  "key21": "7UetphxZDv1AcvHztBLrxqLSACgEMLggGvNF1Es2aPPmPNsPB6RCXuoqHygeS9g3CYh7NKJoaxyu1g5J32A2m6R",
  "key22": "5VMsn5RVEgM4vcWPbKw3c5bVZ9dhcvByVDpzPwANp4fUVe9ipbTReRkM3oa11kiMW3fTFUoRMwGPHbt9ZDcMC1b6",
  "key23": "2baJPvLiG1AizXha5rGAo6nLgXYTUqXvhirtApeXE9D8WVgMnA5EKdZaPmRaANzi5pK9y5Rt9Pc8dxtH8k4vxZZ",
  "key24": "5TJQZ6DPuiQr2U1zLNWRz5UxgKgbeq6Vpn36xEJ7RKWBcMJ1a1s3TkLwnYEgwebtYNCQpEwSTjbkBMBQoTcxfgww",
  "key25": "32dkncWZhpoAmKKXYFif5fJ2hAxv9PGCqjCBuU5pAx9XCYX5JfJTJjuDvfvfDeemPTbZbM7iAsvcgkcaBMCsKvsV",
  "key26": "3GBGLx2mSBEL5qQxkzu1vvmVAaWtWm5Hp7vJk9v4AyS4EVDpEqzLEUCvXLAR3ctWAHckyYHe6JquMjF5JKSXwyf3",
  "key27": "2nNGaxVQxFNwV7hi37ua65RPgxfsfnhDNSZ5gLZM6PpoeM4TSL1FutjLzba32Ckms4QpNZHX3AWLt6vRnzhRSmTw",
  "key28": "23cSnK1SMrdPqLAdjmWwxUC9H8yLUUxPwS5DkmEVSXT1kSabPMhpp4xmfBbuiTzrNeTrB1uTabc1J1Bws4WPhPgx",
  "key29": "3Q7TGSiywmYPGjR3J8Mkw93acRcAXthbyXoa5TwzMgYUJwGqBC9Xy5RcKuEv47eorJd4xVjo8HTthqoHtSD4P1CA",
  "key30": "3a9t4vWmx6TuNvR7m1BJB9enhxYt17GR5p839CT7WcacCpxSQwLdqUhmqGEftVvziAzMCnTbBXBNxJHJiderwbri",
  "key31": "5yY5xh8gYFPNqYjfSCLWmjUEM1SLvaHX6k7ZGGSVKNsYauELtCWoBgfdvuzw248KZMDndyxEywFawPAvo9Y6EvfE",
  "key32": "3J1mYizg35vBw5ayNuMFA52U8Qrhu3xMfTVPrNVDCtcFuhuVZvsQuFnzuFM72imB3xX56Aryap2jQ2ixrp8ME4h7",
  "key33": "2aySservLm5oDyoJ74gTdABZeDBxp2Dr4PSaxn8TWzcPzKbU7rsSv2NkxycMUx4auoDmjPuTYaeZZD3x6YeaorPc",
  "key34": "VgkMJZVATpkirirS4mVhAbJ5ZehsfmE2ikaCvkKBuV7PQ2mCygsX7VPV3PnkuvXFdbTRpTsy1c7qEXT5cahsNM8",
  "key35": "4qGvpendgjvouFqQcBHMjhTcWYeYWZ4g9BLqU8BMDxkinnt8nQSf8vBpGCWAmq1vCrHqDtDa2h8bpE46BtDts92V",
  "key36": "3Jdt6242F1cNsXVweDib3oFs3th9chkjcEEKyQsEKWHPjcKeTwT1YvgnQxwfwSHgf2JtbXCKyo5Shw26ZAmuL4QK",
  "key37": "474aji5MSWzTL8SQDgF7HYmjiRYzTTiohn51iwgnvwL7yMagEsZyqJqnSgKarBjQ4WjAi9dQLggFzCgCU3NX557D",
  "key38": "5eCrzFkZGEos2UuFSEXD1GixvqMUR3Jx2xYsoJEqCSZJBFToJzob2xmH2FUvtYVgS61FNeuNA2Hd3NHdVnASSKm9",
  "key39": "2zFBAnGKbP2BAHoaYUPCigpuvexDPVBCNkRomekPFNYoytUPXfLPpNdFyqRmk8qWJWvsJAtuCB579K8dttE6r9GX",
  "key40": "4Giv7d1ZGU4nrNbnWL9rGJov7hP76AMoeGhSQCXUh6EkkjMkReT4bu1q84F1FCC57LQJbmYcDnx1y5itvjhWB1Pr",
  "key41": "3c1AirepdJo8cVbwu1B645D8JEruRnFGUdGXC2QGei56JRMRw9rEEg5uySaXW47ACsvQfVBX7nomihdaCE6cbazo",
  "key42": "ykbbidohxkQHdNCYYgFnnExM6BPwE2TimZT4um5Vr3TTbYutVoEaEQLV12mctsALt5qJdpRpKW8Ru9snuudUQMM",
  "key43": "3AdzC7RqrehfYpyz79QwS4YgvetpCsvX7m4LPZ7J8cH8dKKiCKiByKWdtjNDXqCMQ6UCMeky2h9178MCBUHRHwKk",
  "key44": "5yde1nBjB7YGJYZAfKfbGNpFL3X78T9hAKRi1SkmYL43ErrYhRpuHwW2xfdmi3SWf359KWDcXNfC96C77G8Lzjnu",
  "key45": "4wGxYLSgrRrofPSfmtAuo8MpVJmY7DmXogPt9Q86PCbJrhumQNJnZFANc3kBUjX9ns31G7BJjcfwR3WL7ngDJtz9"
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
