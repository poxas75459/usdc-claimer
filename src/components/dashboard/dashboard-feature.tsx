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
    "3BuDyRrqqybcPgYvYYvbj5kcaGVwtoU27iUcnv6FZuA4wzS9cUvfMbb8U9bJU66gp2BXqVX7NPZK3Xk1WAU1YRzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47UqJuif31t4v9KeT8sVFpzXFZrVNQFKw8boiFsKbRAT86S9cMv8yKv77M75KaWraWjXvhJSFZsCwmVUwucYftHB",
  "key1": "5mC5QqLpDUeht1XwxYN7pyfEYiSqgt7c6esq7dZURQFCa4yCzTLYcofxd9NrzYuePs7qyX78WdmZS6VLsHsersnU",
  "key2": "jv2etcBambKetCf51gQyJmtuEnebB9g38C2J8FoZP9Sc7enMwyrHVpsCfxdooKFqm8xGKC9xcXxyNTShPSmpAEW",
  "key3": "T7DBQwx3bE6VGgFJBkyAuCRVBbuf6DM57wzR6CV9vSCPxrdqLuAujBHZhKutENjxC3VPXfYPbEB964MCdPr5b9T",
  "key4": "LmDsxtjHaj1W188WssBWcaYcqB4ZhY48TazngTyDUBqbpA8f1icnwoRHXvEXYTX8iD9Fuh7uXZwtFnTqiYXeBt8",
  "key5": "4fVk7x54XSGUyGMDc3Cxu3ho7Y7kbUSsnW52qVcJei4uVLZhfK4ujXnGHZKcj95FrmsoAQThLi4tYDboJbe69AnT",
  "key6": "2J9gsuC2mVkXomjxhybp7jr4z3kQpWwr448yAy1i9SR7jhjHcx3moNpAZBBuLQBWtx6HAQS967nTiBiN4qHVPvVC",
  "key7": "4z5RXPoXpdGHxX1PGVGn5zbwzHL9nNfwEfuTnH5Xm7sFgh8YsXjB7eBsS7en7hNRj5GDvEBbDEEcTFsS2RbDU6Zp",
  "key8": "iaNm2x68SMd1bG3x7yXSUNgGwhL9wB2Pwt9ta3DneRdszvev45Ghr82LxiXM4WGNk1gpjEqodUq57A1sdSA2CCD",
  "key9": "4M2ysBwcmEeygRFWaTDVYnYe3wHoizQyKhbfrzcD9L9D41eWnibw3BHYhMoYiKFNN3DUZQFUTgpFwnxetse8iy59",
  "key10": "5aAQMX836UuBxzKtoHfEvivSGXJXarR59Yz4s2NGGQdsRmqVbBCfLRNADQ1am5Lqm964Y2jg4jdeUo3Fmmd1QoTr",
  "key11": "2BVpqGxqt6CmpJgAvP8hTptsELPXU6GjkmQS49feY32czg9yvZjqLBn3KNERjQGD3eoxDESdxJuVUWztBEjasuUp",
  "key12": "2dnq1VRRttF2HMoKwHYsvxA8GwwzWqk1BNr15KKr3kAyeSqWupX6tYJ5Br37M8HpeDoCN7M7XBSu2z4xt98M4Hsn",
  "key13": "4kqeqrBVLZXqniqkFqheCHse8tfVaq5y3UZ4MZw4Eu4bgsErqZ6mz5nfWhjTAYpDtEH9tjjrCTzJbprWXf48yQcY",
  "key14": "3MkL7Urz4x9RhZUKpAYnwUn3LMQ8yxHZWb7d98ZHGBCNN7Dy1fagXRnN8UkpAqNK8Bm4FBZpv8Vyam6URJv2LD7s",
  "key15": "353RJ2Ux4SmmFMSPQp5jHAzJ6G9zK2ySyTJnYyfo2Uk8RdEKawDaNohuzvrqB4xqMEJEgQiaAbVdnKvWHTBTDVqM",
  "key16": "2vpYs3jgJAerkwrgPKzWG9CuutLVuXaCK5Wfgny82Y4rypmnDL4m9Jfq89YZBeZncr2M25c57NRatAMAreDg883V",
  "key17": "3z6UGr1HU8SMqqXLJvTRiAW7oyepfNx6eupF5gb9LtKKz2S4ztBbSvmiE9iR4DuMCURYXeHBF3BLpDR7SDNhVeKq",
  "key18": "3i4q2pvNeAXQZHYWpdz69qY8Vv3uPjqc2Do7Qo9cCfN4wbWTLycDJarivu8STLATbXoEzJJdzutVcKrHxAkk5EdU",
  "key19": "4Jd99zgikj6ykXXa1Dgy6g89yQgyEovNegHpqmMmYoHN1caJF6s7X9gpEHKcoTDXYqubpwYErE3qMR2ED8WoF2wi",
  "key20": "3AW5LnRURNYxcccWPcH6ktfc9CMU8GuDoN7wuV9HN7w2fsyxTSLbz75AE6hdvBh9Uv5EX5rCgtohNmn3jG9Ax5on",
  "key21": "xFCvC6E45G6aGADYveGJ9ZB8xgya5RGtZnbgJYWj3AB19Y5x9FYVPaALydxWdYqMLHm6cpEJcouEpYqTkPTtVSY",
  "key22": "5zmhFbXtUkdSN6WsACsqNqtMP1Vf53efewknGkz67U5krjg5r3XGzvKssnK2LrKwwdYmPHNux74ixKEuAT9LDed3",
  "key23": "3JxCLVvo9cykd781eVU5n2MBYRibvwU1V9kDHenbniFKhWHQcQ4uMwgepsS1GSQ1Rgb4Ui1GR99kwyUL1AVC8m2M",
  "key24": "2oRvXX5zuhPgxcyvD5TEtiePLidePxiDy7CUiM7DAqGt6XCnhovqtbFydX8EcPY47p1ZrGDG3wDV4URj8rquP6By",
  "key25": "RjNaQChDDvRjcnWBzwRi8nibrtykFcgWqYYQtEacwfdBAAYLdUjxSRbnxEibYGL1PgUR51AHPYxGNYXrb2W9irA",
  "key26": "3CKQfWPErY2hgnp9U9JWfNAwa7XVLbT9cN7zcMATTghXQTvMWzTWkfChFhfHawmkka7e4FLTnXHKBS4idHaNeScw",
  "key27": "4Rdhpz3waTP8AR6hBZviA47AjekcGr4GX6HCPMbgJ1UhT3M1YTswB35HUBNne6BN5BgGodJDnTHQLcMcf71brj9E"
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
