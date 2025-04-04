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
    "4NucQhVkLELVnQMJ9b7APhRTRi5CVzTKi8wrxwQNhBW22k42WCU1WoQTgdjQMgdXQwAt8j6yXL2A8GhqXZJX336K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q528Ruk4ETKnuyxw98vHcsEknZY16VzbZRKtjbcGgQ1ZHTg9AjHkkMDxxavZCoaJt1pQ1gGsZ8ZPGukTv46cYWr",
  "key1": "5GSNSc9YUQsurGAEYfyZSfg2GYbfFGTjxcQgBjtQtZZdKUXmWJqnxApdgBFkBrjea4JvDqKBPFDWrB9YMaCuQMhT",
  "key2": "5s4z2DRkaULsFtdZXhUyNvXPqG8fNjoQgZ2Rc7koUM9V3hRToWs7RCvSiNZWHHGrc93tznALPW7dweQb6FLoEgk4",
  "key3": "wUA1sC7EWFY9GvKnmrDhqQSvyvbMGh5Ek8aBX67t4spbxzkecZ51aWKoNb3L3AMDXLpkuDwScAsANPihhbKBev2",
  "key4": "4Ck2ibkLrvHyQRNxTjhQCTboWxjc4D2Gahp47tVdYRWERBHzA7Fh5fZsTDJEkqZFzrXJuMxtFZLjEkmued4hWLFR",
  "key5": "4dG5sYErRa1ew8nYaS4W8tqzfnJ89B7Pajy4T7XfVidPiRWc3gdkGnzQoF2hZyj17bh4gYx3BXJAWPT3PEiowW5b",
  "key6": "pxLMLv6U6YZCfFu96VSExYyhZqagL3ZG5awwsXds7iwZHnxQUz9GfT8n1YGZa3dZt7Cbmd8Kt3H6qs9mdXiKGbK",
  "key7": "2utxiyA3WHzhsqD6zULsg1dXDGK2f8fxAhKPejs5Xc9U2oBwYfvDN9T9CR5ZUn2KCWkyXXEnuJaQGr9tLZCb21UE",
  "key8": "2eGNbKAaMFuprPa6vXnwCqJsEu9hHSs6z2iJQB8Q4yQmnbiEwGrsT2v1XdJfP2hJfEohmMxryGCATKVRrNq7uAeM",
  "key9": "43jFDiLzg4BMq5VjYUv5xjT9SGNwy78xt7HeydgnCTyDZNeeRfuRHbUjkRGWwphbGR1fqoPcfZgny3PVNDbntDX4",
  "key10": "dWn9dwZWuBMTF39oqKLujz13FALDHam8yzFTChodUpNasXDZeEXy2PzERaZkL8NbEMjfpfE5Gcn3Ye7fKikmVZN",
  "key11": "2m1RRcooC463atyGHTVAGVdP4pcRuAbYVCSwZ7m5mHiKvpi6m83ST3o8dMV1E7upNcy7z2fZcdBscTM7ePZ11qC2",
  "key12": "5LunQHDHEA1KP3GsrDCm2PXRbSFbHPTe2JzFZMSon1jkV8qFEspmi7eR5yxCxP8eGQ9zeADb2tPvNunrn3KaV6Vj",
  "key13": "5j5NZsovRKv6VJY4JHTuCRnfCWaXNYUJBcHQzGyJDsFnwa9uu5w7BNWsuV3BMVvMfzWqJx7bH4DGQyxN2ezavLCB",
  "key14": "2j3MDe9Poc1shR2kTQPeVTAhDo7ZABLgbqVRBG6rqR2Umj6HkeE8ZTbFYB2MXUvMktzVF3p8BYJyTnqmxi1RWR1j",
  "key15": "4GtUu5msSRf2L7hkCQ6SadDryo7mFrLGbbsnNxibTPWkNrFAVuYWkfx7BcrBSd9MZ8GVxWEUf5HRoC1aLzP9tSCk",
  "key16": "4dd3ay6y1vp9AJo6fALPfqwsi5mDBzsacwvGEGTWEoHrTvXx4FiSGPXdU1w1Zh5XWxULUMxozrVscCbqnSKkg41a",
  "key17": "5h2f77mZNEVDazwbeBX3mnk3Sh6hedDFDJ6ZMu4ysd4F55qQhqq75QcAHHQLqm9AQBrHw4sthQRR1N2bMqWifKPT",
  "key18": "6433tt8asyiH3E3WRJPcyTAu653cxNi1Esyn2LJoggGvfhJpiZGrzi6qLUFpdivufPa632hKyUctw7urJrwCnXx1",
  "key19": "5TAEXm1sRtSq1LyRtFJZEdJEdM7CZxxddXgWwKmRa4NbHXGexrKAU3tVNgCoBWXMNmijuwBuhBAiApBGtr9NCFkE",
  "key20": "2TKwPS1hMcz9x7iRhFhA5NGs89tvzWu6vscT4vm3iLeezrCvVrt9dZU39oJ3xTXyupiwPnsahc3JPFMnfLa724oU",
  "key21": "5vRHTSYXT46c96CBVRPhs9ipDhfnGeSzxcnHHQmwda3KUtFegUxZMhiJittyBRuYFDPdAi5adX36zjf7QomVYgo4",
  "key22": "624ZgmtVCahuGjB4iavedtYDHn4uXCYxoGGMWXMiAdfmJ2a72fPwDG5FcpgmsLVL7SrKXwHXZU2dNGbM6Q5Wn52d",
  "key23": "2hHNqXzf7QuZpJE27VmbjmYAkdmiQZ7k9Hvfy1bkiLtJyKLoBcSsDm726L8RhEtAj73pSgK5yeadTVKPgWgzjq6x",
  "key24": "2RUZptjUoHzZ5DwhsiwCSuavdndfnqwXeMTb1uueqqf1mPS6wV923t76piV8cbkqXvhVuBVk22AugDiYUZPPUeeq",
  "key25": "2rt4VLwEsk1qZfN4vFU1BuPXNaTfDKmDHtTRULLwCQmnSG9jvKYFAWT5LizCo1iFTbPHUKK5o4bTbTAq1RzqCvvQ",
  "key26": "4L7WKqohLMzSC9p62HdZ7AQwehntYq5KFiWKQ99tTok2mKc4WgaAVoj9hqy7PiACzcc7DtcFXcDANpdRb7JVoXJ4",
  "key27": "5WfmpmGqR2XQDJhzgXzfTwVr44GYtsw6cj9omAdXng76FGjuehoNiBnwKUQQNzr7bZmnsTsh3EcMsNnBy7wj2neg",
  "key28": "QJStZPYdPV7Sx2kbrUuKFMMQj4Z32GpYJNV69GNZo5gMLqw17ZSoQTdoxouA5QLECCQLvdoik4oCzcwApoz2DH8",
  "key29": "QPAwYHHE1Ns7skiPPpAWdzcA3bmBjqzuMAQmoduXaVbBnL9Y79WShrKiZ1QRbAaAPC9WZp3t6enVjt6VFMhsC95",
  "key30": "4zDgKeZrJrt1kx3GmfhAtwgUw8jMSranZKg9PFmKKTjLAAMmWSqTjpSQP33Y4wgW3HZYCdgPujfYEK48h89U1FG7",
  "key31": "4uNBgczw44sWt5TUwPw7thGo5U4JiQ2zEPFVCJme3JfTRqGM5wfdSNhse4RgRqXi1563kQMfgz4miePRYEPVtdZU",
  "key32": "45nPoh1QBRnKqCZsPvhJ3fn1jpD2ZnNATS8XX94xcNJ8SXNLD8huSt9reSqiv2GmEfk67HkmNJyiD18u7ugs1Eaf",
  "key33": "cJgY8UYMucqCYRC3hRQhCRWtBHwDdFmZEYPbjYCUwawBd6wN72E4Zvoys1KcqLrckwBY9FPXy6eSQNueo1DPQAr",
  "key34": "2tTYkwdyFTcBDWCxxotPpLxE4ucMuUcrVc4CvUQDboZtt8q1ZivJ74YM2B1sQfgUFicevS1vC3UDcK8V2k9nSUyH"
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
