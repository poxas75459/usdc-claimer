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
    "C79sfStmDBDX14pkPFoxiT9SNP1W8GGFQpVWoE4wndbhGKkS8Ntb7XRtD5GRmFrqmyg4N8UgMsCLG85z8znotxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2EJgU3anUfWyhnUnSZzafJHi1MY1ZnuDgVnxEfLBt7uUc8BpzBGk5AYTwVweJX4egj3v6DNC1EHDbXcizYWhCm",
  "key1": "2dVs8xN8F5fZuqoEHwYvUh8F69wvQryVazw5A5v8LvDUDP9dg5vbFAkEfhu68jz4JReFHJBdfab14TR47iXptHiM",
  "key2": "shvGyjz57GXQV7faWaJ4VzbTEpPBAkxaBiLfrJ1u86wLXyugcHAGQMP4tGQT7kXNtoJuEvuWYLQ9sFqPKx55Q4C",
  "key3": "NMG977hSS8FeoU1CTMHkjhk8woCzHsZZxMFxjmK5LbRBBpJ5zzYtB154yXo8aamL1mnFoxoMtp7wcxnBpxqFJsT",
  "key4": "PpZSLmQPMLNEY197B8b2wTwBfyBsruPkktsEGYPHHkDvzWNQrFm5eLW88L7uCPd3Y4gmurusoozbU1nhwGTsoN8",
  "key5": "2tgMfi917FCJiXHfNWZWjYFrMwszaV7DX4goT7zG1TurqRmGdFFBndcpqy1ixJvedAwugXVypjAo4VmebVQVS2bq",
  "key6": "2hkYnam2Jz1S2QG92CJtQHb6ZHvkndmGYBqxhBL7Q6RJAjGmHF54d4u6hLY3PcR4zoYRVksGpAVUaR5yC2Di6Gdr",
  "key7": "3rWxtAD3pbvP35FSjcxJPoh2fYsewaCSHi9nbY14tRgPNKQFueRRLyHRa9FDnmNeaj3vAGy1cTasXnuykn6tybCh",
  "key8": "3rjjAESmaQvnRJ1MDtxxFnjZTXYZ1F4koHDAV3J73RNXBYMHjyeSCWXD69dPY4xpLvpJQJ42B1r3WpG81zPeAuuq",
  "key9": "3hk1YP7MKTWrrcZSG1xd7kfdZnjErYoQp2kvBYBAKJMWH7cpamVrBUGKPsUZsGrvKajiQ2kSWc6bWqad9QXj4tb5",
  "key10": "4Kc5jpcj2UyXREPQ7EM6xuXhkGQpu23TowZCCkS8sBB9RgHqPpmAoM5u5LxAvATkF3f6oP32dBfFCEtvcHrRNrax",
  "key11": "2MWHWptWMd7999CjRvMDezcxf2zr13chxzemPwkZ41tfJggBmPUrzKGKMtKsY7Gob3u9c14BmdsZ2UNEvgEBYSDu",
  "key12": "4xBTLgYjk1Q21MKh4eWgFtEBax4R2mPfYSUAVQDw1oDzHVJiqYTJGDBbDtnNxAyH5bMYnTzxBGpqdmpuFU3nNry1",
  "key13": "2uBc7DRJGWKp7AcDxHh1ATVGs7HMzGyoe39hTDWwGz2yWhvb2P84w97gGygV4AkuidMqbfpK6R9MvBGnJsgUiUDJ",
  "key14": "4R9gMa1MHPRSFDiw7VUpbav9WvTZ2u75L8Qf6TpH8ZcsTW7CB3ESLBMDysmytuNofiiynAqq89XfSRQQkbSEJZwA",
  "key15": "2h2GGsiX1cu8AgXvXwMh8LaeBdmsduy1EFz7pUvYNYD8LzRfvTw9GyrX6RPEj6Fgd6FFVfVJqfvLeLZGDsNQQg2C",
  "key16": "4whfemXyFhh2ab4Lb768daXPCLDPeQsxDBHxzQXHsZPFxEnqZBE8mZBg5fUpwMGqy7Jrrm9AiJCXmXHFnWSRX3mf",
  "key17": "35fQUWPyTwmwPBKZMzGgC9TezwytDgyqbGiExdjSQibyQqhcW9ngVbDcbNvh4pjFXeoWTprz9Zz5r6fMTgaCyN9u",
  "key18": "2cviw4ocLezdY6BDWJG96CPZkCDFG9EznjZ5pfwY9QWdVRB992USZVhgYVwHF8Yj8K62imA5skTC22PBn2u6bPef",
  "key19": "3QqX311pppZG1jhbf9PVPgVGGDajAwamwjB9Q5BerQGXGSb8cLxE3chtAuj7N6fegm7TmUHDiyhUzonW6QYt3VW1",
  "key20": "5fJr4PFSkWN1jGqnPJVCEysd48TLwLoohJMpPJ7nNez2waFSfouaPq2qXywr3oUH6yFH7F9fUKGLw4qXBv3oduXn",
  "key21": "4d6ub9QFQHvD41KeTcdm15jKHWUbdU4ErNj12giogbXq6sqiJvbiduEfX1Pc2i1EvVPc44ezwc4thUGTSdxPaWRR",
  "key22": "KuhqsEWKHBK28EWNTNu3hWGpuLWWND6A2agUU4LjAo36YS8He1NmdWUFcX1LoFRtVMaCeSSMCmAN5iRLAQPkZ1j",
  "key23": "3G5e1FeGDNrvgQGmrexKwchCHDazJTqmdwNspYh3jRPVtZatkBsYbH6zuymcVxdj73vE1jbzS5nWCpgTYDY2ZLEt",
  "key24": "tioj7ZRJDvugBCvcaF1g3ezzmkBLLFo7oxc4BWWMVSyDk6xeNHonNX9FF29ZuGsuADhspvHMszjS3x7mLAFYBar",
  "key25": "mWi6GMA1dgQNQAmnvHzxoRGMMoahw7ucj5D62P4WRLHZNXrnZKFww9c1mnuvSBqqfn2DCzkN49VDJXUUmf5ryvj",
  "key26": "2UkYyV7dBQL44FEK3wmcD5a5LrL8ZqdjSBqocCSdqmBucaZQf9n3sDV3UXxxeM3haKEJyjUf7cz2TKNkyv8JktFC",
  "key27": "5dGyLuenEEkQkASibxXLQ3WHVKA3SiCbCu8t13ZcUFy2c5GdpjD6iyBZv6byREFeS6JVWU7aVzMuJD79kLiEoUzg",
  "key28": "qokUSuKwmWH4i1Cu5fjzqfcv8LpQxZZUfFFtCssCzoyPVyoYLToErKNnk3ETXBAAqMd1M1rPTjPQpsZd8ycT9oG"
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
