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
    "48j1BRfDGfms73DKrQC9HbxTNwD5as8QmjpNnGnSAw1tFRnVdmX8RfcX3KUtaRwvWjg6F2esX7aUBukVCYnXJm8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M83Vt9Xi9XE9hFnxGvm2u6d6h87qkwrhghhbmUHrx83ABq5qURwXRMK6cs9235TFJokmLPmNqYpMPMP8W4AabPM",
  "key1": "4s6tdwx2UQK2Bc7d7aKf1jizbTVBjcB1pqLUhFpZPM5c3RDvGuBjygapdDDLAjDGf5zGE2wVMttbuZaJLrjW4R16",
  "key2": "5TD7ahSSDa4FcvfZH1Qs7FsCCxoW3Nb9xSPp22tocZs7BMX74Fw4dBtT6oSDGiPxVLWJ4TmAy4bTixEG2jxcyg6x",
  "key3": "3cgWTNVCEfsg5hXNBd7RGdoeE5B77e9BhVEqynLJurw6MEzZ5D3kpm9KiXs9aYg6qkCoz6rAWmDcgWz2b83RFUYU",
  "key4": "VKrmfQqmSmZnKJ82Fa8T3R3EMhyQ9gEEMQTVm1n72VYXf65hsaH5vm2UcZDHHPsrZC7nqENPPZY3BAKJpYkfPrz",
  "key5": "4qL6Qy521g6z1GH6enXe2iVyopsuGL9AMiZggiKZugnMZQKMdFAwyjMJC5umHJCMGtQBximDGFbcY8YU9gt7Evw2",
  "key6": "3th7Kd92yrtgVGBGLpC7Kf6yxztdMzH5L7YS2ShK5P1BLsPzQ7C7Y3jFfNNyGfhw85gEkGGk7N9LX8a16oWsWey6",
  "key7": "3UNTCoiPZCWCHt9wUVf1X4nZhtk2rhc3cMkJAmkaN9gGmax4qKCGUwH9xKao5PjNZmXdSHnpL4QtMbL2utMtSoJf",
  "key8": "3fbU62v8BrR4oXFMJCc9mtSLFccgNCpYYj4wn766VbTiLsRwx3vCe4R6ivSCgPcPTB85F3JaSEBDyXnpBobwtUwo",
  "key9": "61xV67JcbzkhZGDw6YVZZitryo4rFeYyArjwdS4KYH9D4HSf9H8K5fNehaH8YPEUqy7QFwN6YZY1geKpZcdETuVn",
  "key10": "5UqHE8n4CgHnNGMQrtmjTBxmFUdW3Ri152ck8g1scLRe9CHuyfYRYoWfrYmf38Uf2ZHJmZSpdBVAZ81cHMHQ3PyS",
  "key11": "2NxABEyaStwXzwb6DsS7n1Xwu6EmoGk5GRYU7QDiksAM1XHqmtFs9PJ2rJ3HYCh1vtWgUqRJSyNKbTzQHhcCGfbG",
  "key12": "4wfgCP9PwZaTEvUB4FeLo2EZzcbKixTwPqYkj8rNsvWhVDR9YggHgbL3mBLNuDXbHVtJaLs7fgwF9RyBD6AR66Gn",
  "key13": "3T8kta1xpWMxvFa2ZsQFnButtrXosg2fSsJMiTK1ESSDUCXcgWaxjVhZZ2X6i41iouzo4upiHAL39GhQYBmYFtU2",
  "key14": "62hZGPGVi5pd1ZYpp5o1LcRPEfmu3VpJpNS4JKQrD8Rd6h7c5noGPm6BBUaqr1EnKYMW8fYVXQzaf78bPae48ve3",
  "key15": "4jdw5ACV22orwWwXT8orbNVgL4v5kYDoaxoQ4sdFhQC2KK3fbnBHKhzWo6KsTi8LJw6oGaLBoY2u7Mw1piPvHf8a",
  "key16": "2rTntNKiCgNJh2kevD9evTNNqfp4EownJP1GAQsE7cU98SeTzDBYX7pzoUwaF4rFVY2wNCNmGvb8oXj68RRZFVck",
  "key17": "2DyR9zSxYTtTqe9NFwMAQCnxELV3z8Wfs49eyhjmiH6QJ577AYBfw7SudWpYwTbSjpVesz5aAhf8L9xVQscHDgyV",
  "key18": "4jc9ih8vQhJVPM75b9Hv2ynC1UY6GSGAApfjfEjyfxoXgn6hLvdobg8VM4FGiQhVmh4hBV168kfUZJR5BxC7WFpq",
  "key19": "49m3Js1Jqqdw78K761FpzPQoJZvtziphn3PQvYCcsif8WMNpkJ5FYyWHbpQhiHLt8GDHGRMtcNs4bH1XC1Nf67YR",
  "key20": "2v6NWkvGNTsg3e1D35dfKn4Cj6325zhfATFzDioSKcD6UjGoQ9CxrxLrDaZjzMfxUvtRiAgyKxRcbDZKxc5AyPwg",
  "key21": "4vzQjnfrjQLfCeTUVY7iwBLbDkw5k9PUPZxdaczDqAtkk8mZfqjaAGd2Wc5QcgEFHmXEUi3pcRQxLDW4pZWAptMR",
  "key22": "xbCamNynN18VApAtuaSpgPy26BNBnY6ksxr4ikybGW1toBzdBxsdxDheVDGmY5VrJUkHizjH64JkSaoq9gyA5r4",
  "key23": "4PkrfPcJXj1pXqQp5zYyBFo2VBb2t2p4QwzFQ1gZBv7i44U1PUmvw4LosFLQ5NcwCpuPCBky9gkNebtGnVHoN16j",
  "key24": "m79daDn3fMyforwduYGLbVcMxJXQADQaMmZXwMtRjKZxgkEEhEFrGyD1aarG2zE26BLt3KN2Biuu61HGiH2jCeD",
  "key25": "3U66HSmtJe4LkcNUpZvjk1vsdH1YxA282sCugc7uVabsvryBqReehooks1yY45U9Xsrs5nwYVfcdRZtdiNSfqMMG"
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
