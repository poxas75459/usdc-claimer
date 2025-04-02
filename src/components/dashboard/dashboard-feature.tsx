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
    "eCH6BY8a8mo4dXjLjmRZCrAg4JRzJKQRaQxHDo1GZqD71ct64r1bK234CEReX4nGfvESNBNmNY4ERdffH1iDi6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNFbFxjxmTnxXXTiC9BfhK5ZcGG9f1a9BDPkx6RjeJiws3pEDfUvWHLiHDecc9wZvQJtCF1kF1oc2LVWC1FbUzg",
  "key1": "5siQdcDd7y49xAo1WYfVMsvPBxm2n7nqhA34YKXTTRN8Ln8x6cDX8jygpyWaN48pqzPycyh6Ti3TC51gbhWLTSUD",
  "key2": "64nRZMCuj96qwaR5HC8DKoLZmyJH2BVAthdSneWesGVVC53bvYCBek2taAPPN92U5PdjHfA3tcN16KnoCkaFgWkn",
  "key3": "2efn24GgUZPeMk6nGogjcognYEzg7eiWk5hR2sy1sa8RJhQEaWBwLtoJopsNHPje4gSPyNMY597Pt9Rq5xERs9Lk",
  "key4": "4TXjve7gu3dKB3yPx5GshVJ14yfW2okspX2QW1zzPW2bUhTbHkLdW36c32x69heguj3wKpFhp4dTeSJABbYKdxws",
  "key5": "3ouVQ6XPbU1dyaott8KmMSVjz9m3QJVDVCncdxE6ttetggGNXUcbotC9McAuvPSJFx2fhwk4AKt4TJ5Vxg9e2zRW",
  "key6": "5yyB61jz5M93Xev6Sxc7w8VpUwmcV3EHk6ekJQZXwET7D5CsmjVx88rN18n1gNV4mChyqzQ1GXC7n75Mwspr4SJ7",
  "key7": "2M2ouaeWWvYZhjWUCyUa2RsmHYied1KZNFdgb1L9tRhtdJkiDH4sDdspz1uNtyaFrcFFkFcyQXk4xrx4eTMoo982",
  "key8": "42j7m3nh1aAqHCYasRNPYvUXbmMpn4oGWCgHszfXCuQ4WWtqHvempDxR6a5eadKvkpHrydZAgNrqS2N1nWVDaBYs",
  "key9": "563thEq85GjYtQqhWyJaqeEyDR9xhGm2aoYSdq5SYWz7RVD62KFcrARXR8Pnkekc8Vfe7aP1ZMSKAeBNVSS7hLkw",
  "key10": "4hFekMhKAReVam3XEsJXjQD2niyJSJNwXmtN7YgzAHXJ3dH1LkrQ6QW5eBbmKREHx1mGgbE8cxvdARDV387xc8n2",
  "key11": "kqCRMKfBtJLjSGVJSkJRybUe4huGMvKH7NFg6iDjVLfgG4ZYHFYY4r5Sm7SmcBsvtY2Yr7tAQWN5MSmQohcybDs",
  "key12": "7yqhxgqaPCkCrwqTQUYxJ512TxCfhVjtsoYgjoARU2kZau7ycmz4FwGi9zA94jPyy3rahNVuzRkyArcTs7iVqWU",
  "key13": "3EVpFqGbgwjpU1TXL4tzke62VXFvpY1UQzSewR9cNTCTtaYDoCkD9ehRz4BMUkeGasi6hJuNmhvouskATJu9XTG6",
  "key14": "4Y2Re4rTkJ1z2awGgtFocvjxMktiFGbbSC5puXaddC9NEQFEGzFkbghmu4yBowQtbK7ypatj1oyiTeykNQsCYJS8",
  "key15": "2pzbn2VKDwFAhWpqMjhNudk61Mab9uRaJAHfw4siExnme8eA6xPQ3Dm2zc2jJCNRpnLsjqNgyMMTZJhYbUMmQ697",
  "key16": "kMvyC3kPEhGzrc5hF4h7dM7UHmnenA5Qv3J686x4mGHeSujyUxDsVtt4RCMjzFpRdkXMddot67ztjZ3iPmmkUr4",
  "key17": "56MmfUNoqNWKu6Y1hjqJ52LaKyeFXhTHbZsSEdtMsXeDgawtcJv26CPjbFjAjjnFjqNpiHqBnf3NRbFw6dYrxeMv",
  "key18": "5Ss8UpGCyhADV2UFGBZS4Fns9Hc7ce629KozsnjnmCnAHFA5qzCinX9vR35cEsKZx9fETkUBPTwVcYhv7LsQ1wFN",
  "key19": "3pm6R93gYzd68KQTdL2JX2BCepmQeSppzWGZsbeeome7Zm8TiQG9Qb1KfGG8Lak419orKuoVkkFWqHPhjj5LUX2c",
  "key20": "3tiPHM1b3J2TgEbKBtgZ2T5jfMfvijLGkUgzbHZ1MzCikdsx4d3takr4KCuoafWYYBhpvUjhkBArVqztejAbbfs9",
  "key21": "482wUZgo5bXFFLPKSzRFTUT56DB2Fr3VHhkbPtRDhUA1X6wQmFUr1633JTrEZLyuE8aPNUoq8giVME1EaxfhZN17",
  "key22": "63yUS2uhH2X8TYaDtpUvUCSWaLNXJk5HAPUS18q9oVhUjx6wYDocYPJF1wi6nxrKQCtWMrVEYpQX7WtMUCEFpEe9",
  "key23": "3vQ6reMdQP273aF1ayuXjWr9VKc91xbUvGmjvCPgS4d62QRrnXbArzeVLFiF1UQyhGYMrdEfayhyDZkkMjqEm7Pw",
  "key24": "4YsSX8DMzdDumebxk2xbXGeuSvUJCwrhMSC2QTxz5w38WLh9WGA1vsz9wRp3ASSE2odTzTt2iwN9epFRgBs5aTbL",
  "key25": "QzPs5TnUBAQkTPxiZgCX4tnqhC7ywt1n6E9riBSfz92RapLnc5zdiYqMXLCkM1ULYxMUR9EfSfsLGPFVCw55Rcs"
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
