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
    "5vKHwYYC9gyg5BqdAtZGhh37JftjV2yJUALsx93n5jzzZddtGVbtCXtQNfb4pqMH85VFtQ9gZN76QF14pWfg2fRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyki2P5gk2SjfDEyAqXGB2qAgcTKUQLpoV1MaSiJovWwAoMTA5QH9hnmMiAWNTCuiazjv289nTdDyfBn4M9SEXj",
  "key1": "5ephQkUHgCMaVdUFFDaJMbezzxSoeiTJjmxvixadmWpRdDnjL9jhrjYrdDMCTYSaUBNfpvWEduiZ5uk5v659JDVW",
  "key2": "5VC2jpJCYLch4JejeUJUyUCtNTxXQNDCb2rTqNxkU2NQGaMVVWdUMcFQr7m9iKhCcgR8hs3xF73pamkRaWe8xyAn",
  "key3": "5oU841GTEki4Di2W85u5KYwiYHvv83veFhoq53zuSBBcNNHMAiUPtWXf58w4L8rNCirymPE5zksqwkwnmTYr7mhh",
  "key4": "28AyxczGzEn2gqBpeg4RbzJZBHB9RdFT1ZsUa85UoGHcES9GGDuPEWRp4SS3yDfw3oBtBkcEiKycSJK86XQBFXTo",
  "key5": "4tNsNH3Hkc8LN6UZdDn3EqeA4cMnsofZuxdXicgaTQDTTrnXqC8totbh182puJZysqdeSoZeTAHtPidhu1KrUjU2",
  "key6": "4WjojwJNHPvNoyXmWoZS7Li6kJZWNthUqtSF9h48VeQJAF17E2iuPiq5eAcqbcmkxraJYJivZaGnDm3q89XZ77cG",
  "key7": "3tDUxKUbExFqedCKEYBEp41GFrav97GTRK5jPHGG41D9fogzZMzQc4UDurGvHPZphqkHShuwD6wZCJTeQ7JoAaLa",
  "key8": "4rs1322p8p8YBgijGgzAbdy3QFzPyX2YJbWAePh6JPgJQNtsytQoZTbzyVptCxyHwr62p3LJzLnsnC8djPpsaS4X",
  "key9": "oehJdqEyo5PKnQmz6DyQ95RJWdaBQQJ5pppXB5BpZuZc9fx3byKaNNFWDGUX4BALhdg4qc67XNXQEAA4fFwCAEw",
  "key10": "PPevfWxSanpzk64YchYTEKKfoAhFgrf9ogVknScRiFvVwwZMc9p71ZhUyT13JzQbbsxeqRzk7DX2JMxUSJEreLP",
  "key11": "3YEPZB135ktxv4AuGKRABiieyehrgS9XPMzfyw5CjFjMbCTwELGpzt6RYYVM7Gxvscua1xsJ4GpNKKhPAYNkRk3v",
  "key12": "4gAzWCxUeAhLYuH1a3uHaNDG1jGNv8pMn3vPCuc7UsQXZYkD3vgvVKM8evRkFcp4BtHDpNFch1DJHWRiMwvYkaF",
  "key13": "t1SDw4kM5h1JY2vsJYzoNxH3GtBjHQz8PbQRK15sRs8Tdfn4fyhq4MKBoVnSe6J3sqPEHmX64Fbmv3aQkM8JTm8",
  "key14": "56DB4s6SLbWTz46KRfnWNEcWgh58RnUJSNSuhTqvFbfzjH8KTCwjBtRJo2Jdj5hrrtjoJ2fPNNicFbCeK4VFoeHE",
  "key15": "a72CnxCUhHJrW8ivu5VxrpejmWYSVfRdm5R4RFrRNcCP9CxY7jnJ1E9hx3iSzYq4goNz3KHFuip9s4zM12bL6Nm",
  "key16": "4df3dvvTtdZ3Zc624hyEyM292sotb8K55B9rwbYURHZGeDjaB4XzaBYxoDWqiTXhfN9K6E9iJ9P2NnjAsKL6BvT6",
  "key17": "5RfGASNHiF19TzWmokcV6sKVt9M9vr3w95fhJRLq4XUqFvXTr4gpBfyxyF315qqQf3s5VmMLq6DEZgiRrWQAg977",
  "key18": "552E6dKVNW2o4PYZV1dNJBvx63qFBUpwLfhPxTPYA6ksFUCbdAC3VRREMwcrNYR4LFQZvKpLEXhj5EFGvvErDLdy",
  "key19": "34smdgVJHXEnQHSYsbNQuDqNnqreSL8aHmL8A3urtqifEve2uCVvSf9i1Gao7Ymuc3gQZZ71sXSkuP7pe5FaCjto",
  "key20": "3ASxaUwKhDqG2RccJf3RKZQc2iHyB666z5GCR9DVvPnBfyTjFumV6CMQiQpGth4t9DXSb7EePHyfdCvbFatqsjXc",
  "key21": "2oMe3ZorWRYQGB5j9NDtavcYYyfqazfJmqUh6N7hjJGgjZukFw5bNRjdTEM5Q8CbEjkSpUevJAY68qKQ23kQmXHt",
  "key22": "53taM1y4tkXgbMNbjcPk54c699ZQGDRXcwVFyXcazJXYZy5PXFxYK8AGT9pQjURgGMEv26kFq6mxbxfPSiAmZQ3A",
  "key23": "4EPLb18CkHbjFXAyJs6ShBHLRP7UkDh8euBDUvCaxYHMuRpiDCf24gBbPq4pEAgmz5UCCtNekhXupj3udUTNSuDv",
  "key24": "3eT6g3Pxd5H9nEw5FrSbKBN7dcohhiFZD8gEbsxKApyGrPuzAj6VkJQ9jFJW41o6XEpxUtNLWDYyBpZHiJUAt2U8"
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
