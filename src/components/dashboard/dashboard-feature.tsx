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
    "3yDmpvNmhdstuNbvDQDzamTiUKpAQoerseLA1mrvvomXBUuVdmHqoWrBfdkZzZT7wm2HffVEvkzNLoPiM2oXip6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aG22HSx7NmRwaKr8W7mVTjqvS7LvzENjYeUg9YiGDHvWaz3UzUcWozHnshWseVbtAPnj1cWxAnWku8PuJK1BfSW",
  "key1": "2seAYsTAkH1K61AxeBXBm2wRw3AMbTBh1W14K7DqJbUfQ38jqptTUVpEtwmwJjPw6VbPGhTwGVzoQjnk43NWVt6D",
  "key2": "pi7K3ym3ijQw5iyidBmbDnUWxJnPSSTHtGAZj4ZoMyd3r54FqQxfx7dNepYySAExjaGQJaEoATdPX8N7PYezLSe",
  "key3": "4cXWS1Jgv7XUyfa4VmLz1HGN21BfRvv1fr4vwCt4RQBr6JtdBDv5gUBaCzB2hzs3nvDTZf7YLe3VrYWZkchoo3NL",
  "key4": "3d3i1XA7Ghe5uoy1mevFhQsRGKGU9krWr66ri8gHXd4Pbc2wHU9Fqxkkaz7sUnKeNsXc1LivpCi3ZGiSLnhvz3or",
  "key5": "5JiLDMrEfmd1BcG6JRYYwzJWqJNdSgzKXo7QApJ4ry8i1rnZWBMhjPZt5xnrBjzL2HRjzLhY5DAxAqXs5f1n94k9",
  "key6": "5wS9ykjfVgvh2mwkUTmNgGCwsh3BLruYhbjGYc95mjW7gpHd3iSw2BPw5wjrqKp8FVQZkMBwjVSf3kRwZLCBTrih",
  "key7": "5ktoFuoQ5uCUKYnXA35tN38mv8cpKX76sh9GV3ofjiT6JYRJs1G4DcMq3MCEdebrro6SUdz3bUqsKMzR35Zmrn1d",
  "key8": "2vatSYjt8Eiq19Yju9mkRPHyjjS4YF6JP2AwUk6oyUBxisYnwvRZ1uDYd63gzS1dwZAmPj6nsixaGyGpM3sJaQ3i",
  "key9": "29Dg8qPH69LurVTqk9UNcUab2sYvMtfg6pasgxqdt8LVdZ1mSUDJWq883p7eocFpL1j1BJ3BtXLrvSZTJNSoEedy",
  "key10": "4jp84vUDGRDppyJ6AHM6nnhYWA74sb8PHu32ZTF2x6a6yRagyZ4k6GCMp3ZefiFv6pS5m2h62jawxpB8M4B6UNyc",
  "key11": "2AHqGJMR1N9r7NdosYEA7fTjQ7ix3t5kAXi6tnV78KD7CYZ2WHNc14ad9URo2YRjP5MYTUy2c1cQwY4qb72LSkDJ",
  "key12": "51EE8VNe7rcMq8CjrrkcbMofQnn7U29hvb6WveTMMKXPCdHdVKZeAzYv37sS3wk6JrQWtWtNpbwZHQN1WxsxPTUY",
  "key13": "2uGLY2HrrHQFHnVeSdrauGTBLYxpLbg1Fn38ow438KCw7wNePqATfzK9pxHD2rwwnda6MWNumrVkcKkZxhCmRuPf",
  "key14": "4T1ZGJ4HQkGPwEnaE5QT5gjDJ4mQ3iXcMu8vLzj4YEttsvjKGrXtryirgdhM9PeE3ifQ7FXHk35NyWdob1Vhu4X2",
  "key15": "5AbgqC5WRLqAK4vyJXmFNUoByi7z8WPTscb2XBKNDQWWc5FKzbK6fdZor6AgMVdyR8FXpN8SGaAjey5ro9DRhH2D",
  "key16": "9LTokNTBJ3Vds9JTQCqCamNvTU2PD3wr9wJnPYmkAp13MZ8UMwSSjNEuCaEYZooH3j8gcrw5hFd2NwPfnm6Mko6",
  "key17": "32jgWpvmss3GtoMs9151vgaKeWn4XWNsNq513Yb9jeP74Y5LXfDp7KStm6yaAk1MhXDyfGL13AQRkaGfAaXvxUpU",
  "key18": "y5N642eHkMSdTXYu5LDSPt4jaQGLNayfWcjdQuMa8GZ1JQerzBNCUgp2UB3cxV4VGdatb9RWuhSKdvfkorHKD29",
  "key19": "3SqNFmFQqizs56veM9ywRCYfajkGHNfRNpCAibavREJYBStjmFaM721hKmWCNRuoLiuFyyRczC5yZ8Vu4RyAvWat",
  "key20": "5akBB3XFKTNR3a98DRHd9CD3vTrHWHLk8EHfv47TpTnxrJndej9FiiFyGwynTDehFZ1yyMYuKKQHvEwHLWXfdDwW",
  "key21": "5pyixzSgccb4TSGJGYXG4WW5qc7GXJ1SxUJ1JgVN3uSTp3UVcrexxrmLDM3jgP2d4FSrCjvKTWTnMbaYywR7Nboa",
  "key22": "3RWLjx7cvUSsvLW5kESxfWsXx1f3pLfooEej9M6cvL1wZeH99AoN5TAY4cNBity4iiP8y7mKGzDSVNKDkB3mMKLu",
  "key23": "5DCXX35JrfPgJcKqwhukoiX3c13kZPtwEi2RzJDLmEoFovTTGUYjx8XaoGTn3dADSxDPxyN7Y4oVisBm8AZWm5RW",
  "key24": "4qms5HrgsMLgwSxku9sE3M696mGo4hy9jau7cSBtLh6K4FB4bX4ezx2yfeC6bXTaAJQeZcUaiFDMr1dSCaSaR5oU",
  "key25": "4aRvGviLxUg6zFMMMpUuBd1VB9MboyGzAeQuhQs24gVVf8tHL3osC3J9WjYdwQcHFbnt6894L3WGKHp2nWuBv91D",
  "key26": "2XZgKchHJpVjCVxKnaqYyaFVTqahhyh2ZaojAc1LrA2oJTQcybdrjasLrL8jwkRECkEZMHoXt2KZnAtjuGmLR7ae",
  "key27": "2zV4bs4YoZ4KAh59z1xJS8SyV2XGWrxDoXUPBZTBULpmczteHvwVG5LkNayg41fYp6eRp8KxzkvCCPbYTW4KJ3Jg"
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
