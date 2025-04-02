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
    "3JdGq3u3GvbhAr7nBAgDMioYUZdebVS46r3ZBRxwZTULLyq5Y9QBqTH2ufGs3Y9eyr1Yfawz8rDyywe87feriE1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMqi2NYNpbV8cZt27xuzsR9k2ntgmymJ53FJNN8X2NzEqkUtxmAqDz8VStFSqUnN1cpPtCMdn3maYVDBuTWCkDr",
  "key1": "4Kxwb2YFC189hTt6bVamwG9aGLrdvaPnNphYSCoNfE3NpMMu1nFa1FVPC7CNHTkuHakYgRR9snENqjqbhFNdq8z4",
  "key2": "2NoPFGw7quJ32o7jqpuwQewaBia5PAGzHgJkhee4H7DSyo9ZsjXxFNNktg5wv71QVXUvKD5xDMCXwGDZXiDTznAB",
  "key3": "62jgBtXM9ez5PPQP3cAqYRYpbzXaPSfuDHNBcjHdD8wBT2DddcTyfjopfygvggeondBBQgzmoRmWA6rTLCXTQoLa",
  "key4": "5ZKBKAemRHgb3jD56xJbj6Xmj4Zc2tMzNx9Cwq51D1LmQCJ5q7W3sgqoDyJwBL2TU5AdNA8o2goZCspFJVHcachY",
  "key5": "3ieBkdomgU4GbKjmjfdzKMVEiGLPBowF7DExR3Tq4xLCULQmMNVELZPWNEyYrUn6RQnMPco9cW6aNKvGxoEF2z8Z",
  "key6": "4tNmbrLZbCA47vrozaAZUEprzzcwoRR9KkKEGqaC5dc1ndpgwnzJ27iPafLBREa1u6XmTLAeW2bAqJ4nVx1f4vmQ",
  "key7": "25DcjQUU91GtRR9fjPCL73qqbVCgY3TC8pWmMgjs8sAKoEWctQmVvUEPKGrb6pfjdW6BeyEKqDQTxFk16pNk7WfB",
  "key8": "2jYnq1MGzecWVNV9eEqiywhDiayivMxz4yHCE5VEByj9AWK2C4wd5VbNgegsjRJjaDg978YQbuXgeC6naFaRMVy",
  "key9": "xzMWojcZV2HJSHX8a5qLucoB6KZrPMwowx1vi5p9k1DkxJTiPnQVSKvwcbd83S58TAfE33WoL3JwUj3oEQLfxeb",
  "key10": "29khuwLY55C3nrb56SHmNP931wbgJUx1aXo8MhrRxVsGdr7HnqXdcqq4UAyZdf6xQNy7uf1vUbjbCcZjPsw8sjCi",
  "key11": "5XJ7a48CqW32QWcnVrzWtmGMpBRKRYpX4UpRZMU5o4bsSXvyKYNKkugziJJjuZQsT8groWpiB1JgqLicjgkMZGA6",
  "key12": "2oXMRdNPJBGSi4f6fKkVCF2daiCuzX47bWSzS21cvycnupQLN7TwL88FUvRRzEzCydq6W2u1MSnQumrCg9zEueBz",
  "key13": "4kjCHWrbUSpw4PPSAuyhmXWeJZXmq2XVKfjh1xcVre32UajxwJax8M5ggp8jWyZJs5h7udCXqAe4GigvSajQytZG",
  "key14": "47KoHzJjyDCAdoL9EXXHidfW6JWW4Sy8P5oc9tBdqvKNvTfVjpnYgjL2zFK93cSBTi682jUvwZV3ZsdQqRE6bXvg",
  "key15": "3rQ5g6HjkmkDJZu1nieCw2XFdXNUMmDAJUeyYDfQ1tQfRHTjvLTgLa8qFyuY9ZUYAwtf7QdAntPoT9xNMH3RP5TG",
  "key16": "3zaRUjB1RLkbUMyP5QomrYCgb3DvcmLfNsyrXvoAF2WwKK49XZEuN1DcnTe3dNC8ESgySHRdcgZywNQMtLJZ3pkG",
  "key17": "47uV66NcWWxervH1faiVDp8x6RkvuCW1PmmKU8fHkcz1fKp4VAvc6btCEgrhAydKrNEZkLa5vk8SwrcCQYshHzjS",
  "key18": "32EmUKnC2no5XTViH7Za6gyrVPcrQbq6uh5P7HhcGWWm4gAJHDLXMTKuoao6rEjkyvhCS6vbF6VpE2KFkkk5vmCA",
  "key19": "2Y2Vs6V1wxYBYeSuxCTSewYfiEqgY6svue1ALxGNzNuoAnzGBfx5DnxpD1RbHmMFaUNmyzxeeJ7pXQMF32x2xwSu",
  "key20": "2Z3BmjPcm8RDMhFGXQ3NNsmZu4VSHCm7YUP93dbKdcXk1orz2Zv7YHqhLpWp8sgUhZU9onX58Fm7jMmcuQTtfSes",
  "key21": "2GbRSxWSeN4GxSm2WghgfamQBdzGjCArHqb1LMr9YAq6cMYRC9XzYDaZUcS2hp8ZL2ezKqS8wX4hXE4BkASwfaBN",
  "key22": "3XTo1mTRE4AJgP2sVFpzjK3nuSqSnb9iPkzXeDeETv4SKejkQtLMtc2uFxiGFcWMyRdUdUwDnSKuJKWzTksPCM9f",
  "key23": "2zerSFE8SWNbhbo8u4DWrZgwUmGwer13ohXuESPQr4e9BgtkWWcg1LZENDgTp1brecbszsQ2fvufo463TBpyGXW8",
  "key24": "57Q2rxbnzpg92LQzvVCgcUphLFXuVXQcDFvP5oVVtacEk2Cq21Q2mxmiUkHL6pb5r9CPf8jPGscsqQfh2DSHJR97",
  "key25": "5Nxc4e878DdfjBr9s7XfSLDBXXwj9UAVVn5T1QP8VTFnjk1giuZNwR2K7ruEkeTQvc1rkqzk5R2V4M9FoukYdkv3",
  "key26": "5QjfeE8qM9ppbVqdo5Zkjct3BdjKVespaC26umAJKh1S6Gd4DvzvmW2t7WVSBQPeczTPgKLXAvSrenwiGsEqXWoT",
  "key27": "3wmXPn9u6BTbSKWtTUxnqSqfVDG6cV1uFsfAZSVu68hfsetNviMHa87cby5NxswyWE9XFHFSaEYHgVr7XFN3dFsX",
  "key28": "4iYQ9XBBwwZKcSNRFw7ejdcyxNM2fKbc3wbZXMkWtx3RqixowbLtsYxLXPyLNBcj1DuP68QXp7KcTkFYhmg9ygXp",
  "key29": "uUgMCwmnJSRmBXebC7GFHwkfroT6MpZhkDDfpVdEy2AikSGnXicbvai1Lne7nx9DwJECNUbA11afMqsFShUFw1R",
  "key30": "4D25HU8kMZxpAxEroBXMUZ5XDLwiDonQyyk1QrCLQyMUnZgvVLifiAp4KHpbx9n99p8JCkGZ6KDuBDjdj4xH1hGx",
  "key31": "kySZYATj7VchpMHKmrcr7YwvrLPqLyRL7B4eFuKcVXuozvWZh6H1HFzA7DCLxEAAXsThKwHgc5Sqy1RmYd8syUn"
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
