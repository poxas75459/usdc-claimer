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
    "3eScsaV5gQCmvkrSzJqy5kNmGuzMbU8Di1Se68Ghpr88YPGNZQMavqb17iDAqkLkUS3DqUbDfgDXHDi3L2mocixp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWxoJnuvVYxENGEiFJrt29nhiJzu2E7oT4tFrELPJ5RFusyRrqKGKg5TBgBcYiahbKg99k3vhN8Mgqht2qAKBh1",
  "key1": "4XSXzAC7D2yGmuC3Yn88zHvkr5NHcUEamJEXvVCDPNtQtQzL9sE4YFdxdaTDHQc7Lrqp87y7RhFUKMP8S9jux6Wu",
  "key2": "3HaxDhECoHKePwJJGXrqbCPnswz723XdHxYMxvGNbyuJ6wuczNLuFukL64aTgC1UEXj2jVaZ8kiTzJYUTaKEKV4n",
  "key3": "64vfaJhnh8pUH7T9vaR4Fwm9AmV91ry5o1NUGHHN2cHC6SgVS6oa6vaAKoybXiVFvCB14Wvw46ps3FA1qjh58htP",
  "key4": "2nX96PvktoCiewRxp4d5UxLMyK2qd2JLbTVua6AqfBLV4fniiB6KYKFXQvnagaoVw8kco5gp96ERfE7MXnef2QEQ",
  "key5": "5nWyh3MFxwp5c4JhehD4Kz7kuqQio6HZrTWvXGbzpghVJ8PgH6rU22w3gEbnwYACLPhtH9g9Y1gkTHcK2arhGC27",
  "key6": "3pRfGupbZy7CKZ9dSEAycFFAykwdc5DPJ9mNKbEBsXE5dvdbof1Mxn934EciyTMuEQK6T77G6johhapeUn54sVFh",
  "key7": "2uAdEamexUKoJMMqTD5cqcH6Cqwwq23aXLHWFftew3jXc5B7NXTe1hhaNr9rQNP8DbbyZNaRTq19VjaramReN9pX",
  "key8": "5rfH6SthhrDYwrAoc9Br4jpgomwCaqw5NFtPBaa597NtsQ5Mo2yEUkPHzpgGEJPLraFCnAKYPQWieCHiBeT66XJr",
  "key9": "4i2rTwwD3AcGFowuvgRNEVY9PXr7suFXkq5JA13ebcdWZZysj7xJjizjGyj7TrEazEVe1p1gSK4CRE2HWy73rBeo",
  "key10": "3t2kdppz6bUacfRkESjgAuZMGh6X99KyLWEmsRm3LZGsWw3hqRPZsrne2qMnSyagLsoGxQG8ghdS9RNNPPZmPXU8",
  "key11": "3xmnXzPdookFdjCEai9x3XhvspZ8MG7ijrLV5rzu8D9HbYxjjedmoUuHdPMrq6etjYWgyS4f8XacKLhUL5MK4ofa",
  "key12": "3eigps5i7TMWPVuyvpbDdgi7TSimHNg9AVuufQSTi9FDmSwA48FUhGDSAdZDBb47QSUxpGzab3Cu8c4PtoXpqGWX",
  "key13": "3m9PtxZ3dMcZM8oKxZNfy4RbwDGSwbn6VSioPpQkHMjXxcg8pvEF7aUNb1LvufBv8rAVemrg8BvnTieJ2fVGiHXu",
  "key14": "GNKUJJTci3JmLLMV24fT2NoMpw6FtL4og9eovmtk1sowwQUkZ6vQQA1cHdm1xaAKXxnWy9dJEVcx9e3fwMFuGh3",
  "key15": "3Y3CRVWz5Ck655LFuFd8QFwpZ3dMDrLgJ81NqYATn2WTngpR4WqerJ3nj4Kc1JXrP8Whg31sspveJWyoSQ8VmR6H",
  "key16": "2y8zsmhE3wFspQETZKtcrDjwFDqKmXJMypsjzxiY9LDgBzHrLuhRvSeRqgLMshoyZZB99CGnip2rafGwLcaQh7hF",
  "key17": "4UaJLs8NGjokZTRswLgNyppcRXWR7Wc8bf2FFi1MvvGT8hFCEAGTtWTTPXR1qzLtFpRMreR6iVk29TbtfJt6L4Yt",
  "key18": "5hRi2JRebVk52TNxMvLN243NRQM4abcE125x39MEhfwFDh7Ck8XnVU9YVCHoPegqh6nvArykfYsaY3Rcuz4NhiYa",
  "key19": "4cZG2TcYnFXQykHUCzJemBfivGCu8Gtcny7H9fQBXJ5k1JNbPMiCy8bYgd7QKU8wQtUfFLyYivrfeNjVYhgs1BpZ",
  "key20": "5kf5MoaEmXPY4pXriZt3Qd6KyQXomn6RWA3M8bEFgnvsSA4MgMXGPAwtAptJ66DkN8k8YLmJwYXKSeHFnHRtVZ7o",
  "key21": "zVxzg3VW6z8xgHkEntrk2nMHFTKUGFV7xErJZZEsPkupFSHcLHanHatAEiG6urVxCm15JjWuHfxWqzau8MxSfci",
  "key22": "NvyAwXNjjRXfqNjzLMWmwgJU8Jqqxkjc8soXFisY66UZd41cRShgtL15WL64vzqyqfUMhCXZ2P2xq59Pfg9FiYX",
  "key23": "5umpxuP5Ets1jkUrrN6S5WbZa424ZbG5Fe52aKCuewbGcNhwmEav1a12nSwwCjZ6CxufyUBbEF8GMZZL2hvSPDnN",
  "key24": "oGX5HyxSRgwAfm3UdjweKUDJGBWCkEJkEG2hxQK3NhUPgZtQxWnwr6aQ6ct5PtLMHpPxwRnG4bnXnLyHgWjsFCq",
  "key25": "Kua8WS95bsPmMZDVZKDd274JzTC7m4nbpWGRRE6d9rjLC1j7o3LD5uMxdwpDagoyZYRz7ZDC6pLQHMF2tPunRq2",
  "key26": "YfBaY2F8acBqrvAYDYifs1XWpKanfqaX9BVP6aLt1Zb6tZWkvNUKPLNYPDiFZDwpnHSbVmYo9ghK1cGLTHDZhx7",
  "key27": "4LZV38jUsoBLoXSjM4Ti9D6jhEitvWUXr6Rw5gYJpMLvLXgqA3SzspRdoj3mPFEic7XS7wB2NYHWX6cd5MyxWuvP",
  "key28": "YhUdhU85DSMBw86SSb1NhyAQcqBFRPpNXDwS1LMrgnB6wNiiXZwhTDVs6f77rcJAJY9PASb2M5THEdDvYxpDDyZ",
  "key29": "4XbP9hcVBSYAUyVVNfwY65KTbYhykbEyLDjFj7Jn6kRWokWGAEdKrqeWzoabygqoXSvQkvaeUtXJyi8PBPfMCV73",
  "key30": "5C4ZxqRREMTbBVA4Y8NgAAFr7z8HYeP2A2z9FFsPmUEELxwPsSzwicwkf2r9vFuE7qDHMRqAoR4bzrvj5g4E4fRf",
  "key31": "3AqKpR8vEFDVHSi95VhGtZu3qNqGR63pkkHjtTQn145NAAc4j7SZxZ7dyEm3abGEjoXgHSkXRuFQ7mo3GjToFU6U",
  "key32": "2NHzM8YcP9dZcL8pAzQwtBUecyWe8bgBZ5K5rGatLr8difwpbuLx5Ep5xq4rjPLKBk1D9FDuK9BDReBtmixgwPeF",
  "key33": "4M2u8qXyrurQegRALCvG8X8dh1bvSKtDzDF7fGz2ERVRkSwdoiFiV1Gs4tKMjsu9zbcuoYXsDiDMBySqfXgYSGZu",
  "key34": "STQmCLczPRpnHBqNqL5ahrf6sboPhC4Gv1wVeceouzw6fTTpncW5LYBr2enZgefetNBnY3g3G2FumDDhFpPQqte",
  "key35": "6RwmCCLezssWanEVJPNNrg7Vxn65HqCbpaFPHsAWb1R7ZFiPUUHSLFgVMt1QcVK3DHvwoFFxbJeBjq89CauCN2V",
  "key36": "Pgw7UVgBo8x8YvACd56qpxWismM9jU4pZ9q8EjHUmxAsmg7wQSVDNn7ZW7c1Z6ErSS1rbsZupp9pgzAHhrC5W4J"
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
