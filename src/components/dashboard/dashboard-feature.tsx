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
    "4ochZBMV3T75P8aRFwR2UGRx3b5hdJZDbPwbyEtAxiqdKMDigHayEDamdvtM36rQWBcwtFUUQ4VBcXXDgVRUb4pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYYFD7Bd2hHtYvDRfxbLECfGLGeJ71rs7XaGe3HPZJrGaHujp71FjJSKbLKSFMHZeeMPdP6caDdtit3YYdFMYPb",
  "key1": "4mAuEaeCNNxsAaEDZkcqiBgR3kQqhNhR4jJrMZZsfFsMd3KbGp5ZTbTpMP5BVCvZ8kjYgC8K325uULBwRRtgrKCj",
  "key2": "2JBzU1bwgLhM3YJzjcRcQuiBiUtKREn7nXSGgfMJWbWGTANR6qkBgJ5sy49kzEwFg77n4rLauhMebZN1bTJZcM4Y",
  "key3": "5xmxdacx3c37qs2bYeF3VHFDB59kNcb6AFd7wKcXk73nnQJjtYHDvEycsNXS5Rsgtg5gXQXim7qUTsrQPqyvkStX",
  "key4": "G1KtSYDA5UQ4EFXYTAwpYpS6qjr9KCYbyHqUb1DpbRk4nPkcdXs9CD4LDFwMkpLXnASrDErVTMBYu8Rce9Twdmo",
  "key5": "3er3Gy7Rose1sEtAiuvV5Qbp9c9faaVd6hUz6XWHTvCWkLaBTTKQPddCKrQKKSmgXFLc8gR6VSM2FMe716dGns6Z",
  "key6": "4jg51iK2cmrPN6Ej5B5sYK2pnrHuGT1pmczX5a36f6NYVjjofPdz7WGfzi3FyNATk1WKMCWZMMFWPVazuyPF4LnN",
  "key7": "5MpGrCBeygb7q8ZTFvcRZofiG9VTrHfAmM73rBZtJxGL27YbowpVxdByvKxFkreHmtgmu66GGAxoYC53byGDgo6c",
  "key8": "3dXchpsV7zvSHkWXDbzw2XtQENDYHvDiQMMggTk9AAtzk8Hqus1PLyBaVo1iUpnERw5iHiR8uLBJweHNk9c97Cby",
  "key9": "5pvqTfP886vP3yv6bLMsC5ed6XgYei5dj9zviqbP1RuAdCK6ALyNhQmiBG3DVtRGJyTd5tbZTC1dLpyTdr16xEAM",
  "key10": "4qEQM2sRnX41QYzE3PinhK9bjNwptU511AyzMgkMwra3rfCHiftx5s4rHHiWrukNBtZQRiWUDbx7MTSSybV4Te7p",
  "key11": "3PVLP9Ks9AxdhAHifSSnLj6qnBMUsz8tLMPrjcBaFe4u6ebfQaQXayZkyHqBwuhwmCz8jx1p454fc1MxCm29beZ7",
  "key12": "3D8apNSsBuFR9NUvzaSCAVMsKowUHNbuowuBB4rgqCQ96xUK1hhwjFfUxf83oPRASzA9eXNVHCn9AnYvyksSedGt",
  "key13": "3CA6cRUHRCXDqHjpfgKArxmgT8riSnnQjFEs3xh3Nx1xPFJpj1ke4AA2ULc7g9j4YtJe1FfQfvr9b57BdY9zZsYH",
  "key14": "4dAGKWjpn13ridCtNRSnkxEbVZzYFiSG9AqLGDMYMS3BARkHPgkHW9PZUGJUbmq95ytW1SVhYoy7Wn7VCv39k9im",
  "key15": "4Add1rGeDubM56eMccuDMj4BU4TWbiB5Muk2piAp3mXRxsYgy3ap84quRuCTcG22cgfrAYPpQ1Ny7c7sXFNhJbQA",
  "key16": "3x9icQkt8JBFKehUxw8PT3Qwhh3SYe3dkzDLZseRaPrmBKmX8T6trgqxhbgDYet7pYtoqnhkCyUjwc7GVV3QwZoi",
  "key17": "37SxAW9xkXk7dhT3q9n4oKtKGYbfDzRFif8KXM2nEJzdhan9CXryehydsyvA9Zre1ZcQ3LvzRwiPhXa5BFJRnvG3",
  "key18": "Z98CrPTbwxK97PX8q4J9pUXEtLmqHsBnpL4PPqsN8VU8KrBQFbtkRGXcxhXEkJ8uKQ6n7juWBWAeiHw7d8ijE5K",
  "key19": "2RNDjVQ8NvvN5xJq7QtzChvZxA5LfK7Esze9Qe9ug9MfKSRH7KxqtdUTaDcdTW1ThTrZnQWM9nVQGs5iTjktNi5R",
  "key20": "43uNPZLeitueptvobyeaiFB7M4AzAXVBugixgkgEzQvVvEB7HvU9ESgMKXdD6FTiwQmCL9Ly3UgEQpNgWCZWKnVc",
  "key21": "4w46qp5XchAagZZe2mh6U4BQkLpGmLTd4sRSCG4GqLepMUJCZstaePJow6V1qutokNnTJVAUS6My7kEzkXkdqGTf",
  "key22": "wKEjaAMT1p4vmaiFkBvZpX7GMr3Nzo8JtH74f4KvB9yzAMVUgy56wLbv1RRaywgjfeRCeiXNvP73Ua6DiDiLXQp",
  "key23": "2ZsEf6xwT2kyDpXMeYG6WNEkDWhsi6H3Q12cuysoFfiKKPv6U8kn5So4gzNko1v1kBVgJYZXCzKYbzVmagXLZy3A",
  "key24": "5TQ964FcNZSZf8i28qBaPd7G6Noyi7ywSWbWQrzQEAoNFsXWe3aseBypar4kj4CgQxNAZohwXvLyxTjWiJ4rNwCq",
  "key25": "5SCqumphF3fdbaGTp6k9wQrjN6BEWs1f79LvJq87XX1Xet8mnnR9pJGriC7kT1Z8rBNgBhqNCLrd6cFyfTiXRxkb"
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
