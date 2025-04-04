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
    "2sR7vQDqoXSHdyDT5ysVnNMumPFHQ53cz8UmkCMhZguV1b7hKwe4gDpZJM8pQxoZoqcyi4mnh3P5daqDqucM8iKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZTXJ8A1CZCJrmwTfefiKbnMQo73roto3PW9Pn91UCwpaEv48HEJhVfda8rf9P6b3d8Js6Cxm5esZZ7QzEAkDUM",
  "key1": "2HSg84Lw1VgVbic4STp4ZrjWamNMXkCrCEgbBUyCvLufoKryXjxnDCKaC6YXfrNchbM2F3mP1PgC2swGddSZWAer",
  "key2": "UVY93RgAzha6WAJWEh82BLUWmWqtRxNCBDFY49XbT6U5Ww9dYMNC7LHmMSZZVSuSRvUZ9scYLZyYHY5cJ7VuBJL",
  "key3": "5AYDuDS4kCZVH6xUWozSMraDYqSr4eWBNEtpMCzgwh1aKNfMp1q1T1aPETwa8ap7CYGE7umm8kuQrYJ5D53vAmXZ",
  "key4": "2MgyyUeARXV9cb7VmbS7wjCWLiCVtNWD5e3NGcKAqYjLMHbjEJBRqk2z69BaMzhRNHKM4jLk4KkEVHFTzSr87nKX",
  "key5": "dky52fXPjoNdqipCk6JAd2VGFUiRjRqg8VQyKz6xZ8boTRNwbmVWtY2Uz9soGNLvRrG39QC6CmPoBtfBJi3QoUt",
  "key6": "1gAuXDnU5grGKF6tofix8cAQZf9R9FhvpH15ECqdyGyHDbJM25whqfd9QownZu2cpd6gBSM9TGZjfRv3ikSpWXJ",
  "key7": "3bhcqPM56a4XrVTcy2pAVz5ZQdaZCcWTKyavepyf3JXYNFSddEV2iywhRA5oq9QLfK6FHbUxXi4iqA1AHQzHoLjs",
  "key8": "quLnCdX93tj6sqK4Ci4Umc8p5bfes57ZkTGRiHcp9ox2QKeUiEpcFPizn6DkyzxyhfZwT3kFLDQoDQyKCLTCBU2",
  "key9": "2Ah26MzrnwEysYZSRJ9EiwnfgvucX7o5XAaHvMsvqjBHKLewXZU5CDVKKc9XvMa2CvbuGczEVcm5NimrhNjhkYp2",
  "key10": "xnmicLo8j7FGvbDgBXntGtf3qmq8nLE7zAsiApvqyce4qko7q56hfF7SifaQt7PcMTAJSoX9XKAvH4UZjVTcAzh",
  "key11": "V1MKkAvyADGnxatozSHnNQUrdvUs2cCQHHQnxJbt61dfmDcEQbpBCN1VwaKfxpeVS6EYcsrGUHkx2g3HwPUZNcT",
  "key12": "2Fs627ELHnTyh9aJCRew9AadW6N7443yWmwkWP4KgCsEUYsCfY39JhzKNhZnt1r2VkXN4gaK4hriVNqbBDT4potc",
  "key13": "4gZvS94ncoCcen8QL1ci1GCfqgsnT2sKHAuedSvtnagQqyA2PjVShFyCuUqyb3odQSrwkfNKsqmJny4ptH8CA7G9",
  "key14": "2AQDZM9h7PL7gCFRcbCcF61EMACeKSScqkDWXeQXv6qCkjupaKqWA2vJffPyQwmiAN2bPoxLx5RGPrmrJRWaWDvo",
  "key15": "3sAzn511MM2xgtKTRtZJQ52tsWaB1GDN2mjs66EauYTwnqdt6VULJzX2ERc4qvGjRGQzveFMUZkXFvUzmKBf1nQW",
  "key16": "3ZZ485xZRaXUHRsjCmW8foBzWx6aP6NZ7WiVDWWbeW6hvhuXgbunYJzM4WQn1e87osKWzjJLA86mf3ubbcjnq2WC",
  "key17": "3GFibrR7TBEmV3X7g3bCkTXVJaWmJtYdWW3iaMMJzE4FjdpKk7PKuP73Z4cKZgQBAEJeBX378mif7CZCNeJqxL2T",
  "key18": "hUHuh1UpqtEQDfHB1iBVQVNpBvgiazmXbdCaBCrXie3qAZ1hhCLRqUiAyAiUZtdPyXWACZECFztxfdvvrV9BuZb",
  "key19": "JernE7koPNocZMJB7argrQgHjdvzDRE75vReMscCv1u2hFUPiropSaKre1bNFkc54hhbT5qTNkdyyzxwUgjBjLF",
  "key20": "5rBc2nAXqx2TmtmZiRsufzhfbmpoVcdFUAaZd2CCRwSgiWuuc7jak8Ah3CFzFMX55twz8xFzm1CZdAfhuU6YQzsg",
  "key21": "neVe4knm5cUFJuzRW8bovEmqdDX4y8y7CKhQzwA7ks4nZpQKiNpYcb7evxoG2tRtM2fbumTbGSHk9HMaHEoCpxa",
  "key22": "2aGBaBnr73QgsKfz1jvewrphScbhWuLxTBELQgdE8ZFbpAvahFcVDhDxRs3fxyjzLgzK795iaKzcsTsHPxRv23Xm",
  "key23": "3AgLtmz71FpcPCQFpVKaSK5zyT2K4Pa3GGSs8KZeynJttDN2WpEbHPNVnSjR768NgUhqCiPfqQyFpdi12UaJYv6z",
  "key24": "4FFguusiUP9Q35LbrQDKVR21Z3U386QRqycoxTk3r5V3C6y2GNnt9KAyCpunGA3hyzdTS7e7xKaKBDgXeHxooTQs",
  "key25": "5dG1bUV1mUn1ovczjQMzgtKzipWmZHuyasK6uENCCikUp9UBitkedFes1DunACuAHt45V6PLAzbuZKKsb2spsmfz",
  "key26": "5FNx2Cs2eWz4uZKAmqZv5bjpa7sRsmKP9C2zDVG8Ckr3KsL2CpzP56BCaGzyRuvSAp5Uo7TfwAUzbxHsYFMV1rxK",
  "key27": "sZqFPC3icA1fQoRYbgxSVU2mSKmKjvtvkjP3DmSuE8wykMQVp1Y3dp3pSy2uqD1zmuFP9XC2nSNaqMjwiedBekR",
  "key28": "rZ5TaAurGNXe8rkWGxn69X1DJfjRNFuNU86bJUP5ey7sh1pQm4HNtUhC83EqfvUetenV8FkBvVCD8GVfdx7mjmH",
  "key29": "3qkkN9MghtExRfsUYKVakZvg3PaVEG6AXVrkeNApYEAFAtc8R3dHwpMTYPspqKnep8wiSvmPYU3JnkTLCgreSt55",
  "key30": "5CYJ1H4SDTgQg47qPxbei2CB5qGGorqbYqRbvYgYjhwCVa9Vi6xUeYsHSAwAHem6L8kEkxnQMwjugGV95M69Z3Fx",
  "key31": "21zzhSP9MpeKjaCqGMjKFZi8TwmF9GBsvNyDYTK4zgNvHFHrMtvFVpKBv1f4an4hRkgHgbBh7sLQdR8U4keauJHU",
  "key32": "3J4sCG8pdZLjpBYQ3SDpkdx7pe2bn3jnqURPDY93WpbFPY1snxSaqyan5wNPS35T6cVLmTsMkrnAsq6ZPyFkPat",
  "key33": "4qnbnchy2eg1zLx32xVBXWLiPUJAxYF4nYh8pyqtcV8o9FrK8tReNNyBZLPtUGbaMcms9BMRB3eXVxdL4GXyfHR2",
  "key34": "5V5gGTA3qn7UoPGN1TuPrgZppSJn1nXgtRmzkAfyGqiVXrfMH488RoUnJ7ot3B2ct1npqrsA8ZfqMWYKnHx9qaJ9",
  "key35": "5cymvbYGyfyXovgoBdbuMF6YPrN4yRqn2EpaTRbfD4NnUN82t4M7RAVeUkjnT6X9N4CoDrm7CWfZPzVP4MUvZoXQ",
  "key36": "4Xf8kWrUsU8tW2u1wUdkZbVzGqvK5YMEFeDig4UZKUfLBPYkbGXBfxvSgHhTokRfeJahbTgARx4Nm13jSbj56wV3",
  "key37": "3MYTkYwnJjau2txzWMGZkdPu5erSLaCnKRdHvVMCTUqgohRnZu2RgBxP5uBSPoXYDMcbSQjtYrUZ8ZmhEtwcbQk"
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
