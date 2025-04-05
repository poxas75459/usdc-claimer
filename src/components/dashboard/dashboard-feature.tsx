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
    "2YhtCDW6uquESueRFVCcCn4kwG9yhuF2nBzF4epoJyqv88Y74wbtEEu94EiJ9KVgidRt79mhMDUMtBdmLjYCws3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Kd2jVH6zrQh4DxAof7UQH1TbzhWAFwoFhmALhJ7BC97awJetZDdPPFNkNAwvnGHDB6wKQRRWCniF5y5zQxuuZE",
  "key1": "4rBkDQsesMuNVpgHicwnB2P2Za8hRFKXDMaS9kRnTnoXegzNEt41ES6EWzsfjcb3nhzuDTzhXyT3zAiuHb8Z7biC",
  "key2": "N5jzBx7jayQzEnwGZVaTJish7v6imdXgWhP4b4S9f9AeQ1KuvMvmhxPacbPGy7hfdKz7XfxgfRzcMBymujkkErf",
  "key3": "4EE2FtBz5Kvn2prdZdQtR3cNN6ZmzGWbfgjFi29SmpVJG5b3y2nVypMuzNkFE3Str6zcwTaETMvTxcnUgtsjbNFt",
  "key4": "5mjdRtH1ee9qtMMQEMHfzfXqVAcgzECX5ayxVVSDtS2tS8iocTEFbr2ipjMVxzzjNEpa88ZKDmL5PHxRAFBqVBST",
  "key5": "5n9LX4PSnubWhv3o5yuB8LqGnfrkxbAAqEx5dHsd4VjSQ46jkyQc5uqc1oDgLb7GXkkD9982q9o3wPBG5zwFGVW6",
  "key6": "2FqZCwGU8HdgVSYpwmYkVQ7HU4oHgwWSufN5oj9zBCKV8iggFmnJfX7wajZd1KSRqQZuqwYqKUcAdCLBCJJ2oRPe",
  "key7": "29JeQzjQ1AirEaVUtSdseUqZ1UtRaqqdHu89S5F4JDMm2WDwfXK5UwvEMWTnE6MK5Fu5sab3VZTyCGeHP7n47BVW",
  "key8": "3oFAKoxHDudPxm6m2qHCVEQGxzeeyAakd1D3MPFgiy4iMdn8kV3TKkQfEdrEUc1d1P3ApDfYJtqApHoQFsfwjVCD",
  "key9": "esYb5wk52W9bebduv8UufTcRziUr7oGHEXoS2RSEMuiux1LRmMDS7iYi2Wv4D1z8iVqHrLHSu2vrRXFdxRByCZC",
  "key10": "4fXFaidRjD2gvE8m15qKpe2Jsr5rGatEC3jpys4iwSdkL7g74Z49QG18QYiw2t9WNU6f9eYTGpPxv1p1k69zW8i4",
  "key11": "4whb93QJywtB69Yk1Mdv5uVD5Qzm2jmwZXRC7uvHUbbKm98ngNVwg9uc8w1ULY1Jpj7gashHTHgMjYoghs8Hw73L",
  "key12": "2aGF1J4ikbMyZx39vdDKHASyFvEAd6YX2yoj6ZTDXtqqJkDNL5sseVDMjQNk16kVjDrKukiCdEFDjaSojMsq1bdj",
  "key13": "43xmBwNNQZ2X6vqxuNgNA4NLAwE6XErFSw5iLWSqyYbNupB2bVdsXWCEcfJtxzWHLqXJVVDNcfhnkDjZFpUgtkeC",
  "key14": "C9q6KXCeVmwxDbKJoFVhCsjWxhjZqNtwLqYAEoxE4qX3gfq4YxWN3SPtgDXS3jZTbmyzvwehaFpkgYoX6Z1J3Hj",
  "key15": "5DJTzonZbVxXbKU25Vo7sg9sx2LJrndndE9f3cxWwPJeG2hCCZ5xxstQTQk85X1w9WdbHPdoFsZxYKq5FdnDLZmE",
  "key16": "HrPR5uGxWcS3jJTh6aZcLU1xfgqYX6RL6CwXr7Ft8qoCTYkzkSTP4chW5JPG9wMQa8bBMGweFavqJK3e35Tuw2m",
  "key17": "5fBMsqAQmypGbkRWKhNiChq9Ma4HqtKLx2mPH6d25wxMoHNCKuE4Wzx6QgpU39ZMRCtoKZio7eZU82gnCL8cyQ2V",
  "key18": "5BHiCMWp45qFb2jGQtRyS6LBqmkNg52gYAELfAhtdK1rhTjojCRdGnKAP4bBPwatP3i9QxSYZaQRrkm7YA1e2SgJ",
  "key19": "3zj5mfREAToaX6DULzji86EcE7ADErFfokdGan7s7tnzS54e7fvC32aMzYC3AeRRTD6GckaMbZAbyHFWkUWjMRXF",
  "key20": "4YG2XZXPw8ZyaUNCt6fLB5EYW74DJcqCAVsZPM4Ch6w7VmbYdMs9VYFGskAcQVD6N2vH243EVEP4qRoDQ5JKkJUF",
  "key21": "2ekcdYxkp9smEC1dX3gPMFyJecuFJi2LPbiASD3wQ65WzUkJZtc8hkMSTXbfzPte4M2GXVTJhbP4aMPpF3xDyU4F",
  "key22": "34DPxghrowvhgfyfR78XS1vvxdKr63qfkazwqjz7gav9kF63M46BiPr3WzywvhmBcPDugxAS5PU2U7Tjxz2ab5R8",
  "key23": "dxZ8vE15PjkxdjxSHsSrWMTQ6umT7Qomc3SmryPFbRKtUZSYT1F23Hg8kRgcVdviRZh9a7dNVKWNQCfB2NXqZV8",
  "key24": "27kDH34jGxG82jtmQ5ehizXTtikok3ezbT6mzMKkmQK2DkpBAGVVMJFq6h4x5FG6BbTbLcBoyXYshL5g18tWiFq6"
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
