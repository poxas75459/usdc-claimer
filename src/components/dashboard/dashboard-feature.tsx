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
    "5q7TjwoHfvwPFPojaWbfTeiZQLFj4pzjJHmKbicN7CS8Yh4z8pD69iCmtcsvHe3oWMCg7bzZytpixkWFikGAAfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uz6VTKDH3eJcUqaJEu6MkK8gncCAAGJyyaJbU3BEbAB8x26nwUVj667MxvE34SZHu8PCU1R1bGranbyaHJ3C86v",
  "key1": "2docjv5ciqFvwQzHdML4AoMePfeyEWxdbiDZ9CfmnUaxYD8ELknWXcvEdz4cyXbw86Swc7sTZ558etEWjkHDkc1H",
  "key2": "415YL4Hp6zY9aB6V5yA3yQh5s3k22B8iz61anFNPYSn9JtDpe7Aq8Rjc7yuep4VTsg4GANMxx8C8mGDbqnFqjZX1",
  "key3": "4sBzNYF6ZscdVUGMNdpUV143D86N5wscFsdMkjfBb6W1GmDy2xQE2syCkCjZnLh5PtsbY8PZp5oxLRLQZGffBGsc",
  "key4": "3S7LzXQrg2iiJJrnCbjVHq551wfKTXGxhf1Nc6wu3iGpGWRu1SVBic49V6EfeuYAfmjqtF6Ad6SP9aGM7587D7Vf",
  "key5": "4eWeDteHedKXiuMU8g9ExcFLFfGyjTXhRcsvVTWQdRnKGVBvztkVNEfPkJ44nBRB7Ck42uhAbBP8qzU99MUEQ2Td",
  "key6": "wQpYaQsgCQqSvx1K6VZ9ppgLE2XMKyLPmiLSjpXvGDtgHMiey7bC2P4jm34CZCeBAJp6rJCAeWJXVTgNwt2vEKp",
  "key7": "22GRyZbKNLfhhe8oQwtkvsVQnPJCDtQpsau2yzeYoJeQGBpNDLaZ6rMt3CCyQUUNHY3UVPmpkq1sTiwDvZzJXzam",
  "key8": "4buj3fqGtCyrNkrG3mLmQQgW26EpoNPd135DxKAGqdo4m1NjcAYGVHpHxmx4YWfnHFjLggfonvSHThRk6Jw3gkHD",
  "key9": "57moKkR6PJKrdEus2vy6c3zyWDHv5iEVYQZBDiirrWzuHsVJy1GsNzb5sXqfWTN7DEAvFxtNfxKUS8Cx33zfSrSy",
  "key10": "5wnDD73j1FCNSaWQ1FtXkLzD3P4Nfasg15AN5jm6zGVC656wN5pJ2EBGUPQ5fjfHcBSgHD2VF6mHbj8mWEqThNeS",
  "key11": "64AUocfm186pLqhdcG2xUN2kCJwsaXXWdXYS7ekcmddTVc6AnYUPKbHbe7Md4bbRKPfCFZvKgyJJ83X89tkv4cog",
  "key12": "65nzHzUerPiGKS3vS96ejngwpxf76VWgpyKzmyDPAMc6QFyNkVYdwGTZWS2fmwLi45Vcx677n47no7HReTQ15qqT",
  "key13": "2NsWiP4vma7WU13vres6UUXwq7X8nmKr6HNmTAP4Cn9f7mJ2deUW735tTsQkUh6ZjpUBXVZXavhhgvf3cySNkCmj",
  "key14": "31tNJhoCYokf2jFv9E58N6SRwjggF5vc1WWugMa2japavs83FB6Lz8gNdTin7Hf2Fc7xzqSCXZnQERhT12bBcdZg",
  "key15": "3zCvozLAaT5KyMNWmCZxZFVbPHzSbmGLszecRqWMkY2gRSGBHRwPHQahK3wruXMukV8kdUMd8hFgR4XLmeF1kZ1p",
  "key16": "4R7gYEMJ2LkZLqrWsAGt5sThR9gP9uLQFhnyYu8EXkK9WmEwvFuD3MfZ6hqaB96kHk5jExfj7P6XM5E82kkSC2Hv",
  "key17": "4yY6PBho2Sr9DF1pv87sUqF8LBGvUSRtEsxV3pc6ZvWCAo1oFddAFUrVthwa7oM6keXH1fvvgwG3tjRF5NFY9st5",
  "key18": "5jtTLdDfpJ4pk2BfSL4nSXH6rARd6oEjqCJ5ZwCtmYd1NqoSS5ehjqKa1FieqyeoA79Z51YA6LmQ88VoqkJzwj6E",
  "key19": "2F69PvmB1Apbk1TPFfGbEvpe1wE713uppQyLcKaJPKvEpa5NwB5EcC1Nd8qf6cpVYFkUvvevb7omaUf7KeZiuQEz",
  "key20": "5HRg39ps7ZGhDXBJf98LMSjDMuHGEayojTuT85knHdqe2XDJGa3di3YyBN1gGgb8cm375iRcs7PpcHcPY8f15UM8",
  "key21": "3eGw5yehXGeP3PqnQaE7uyDxjdf4HpdzRmCStKiHyrH8gMwX6gReki1bNd4VauZ1YToqKbSzmK7zdVZGR87hMhvf",
  "key22": "vC86aYLq4rehVpk7woyp5FAxtDP7dxFnj3ChQetraXq4TUtyTPRysH8xJLRcwFusGRSoryRWxUThnYAFaTdLD16",
  "key23": "55pxG2co8NbmZjNUbBfSomQdJJ9u5Dkq5nCF3eD9aViQPCx3k94BA4Yc5UdWXmkUUE8k9PrMwmSeoWvKrNSmc5WE",
  "key24": "4WejWtiZP2bBghcbCppDEQFikHNde5PZ6jXmNJZGcBWVs8LFmcn169QmuNEYTw1rWYjiftQPECJ5sM9kspPcUJuB",
  "key25": "44M1eaEURYHjrNpf96dWNCdpfwDWKgGAT5Lkw55r8wn9xG8QAnM3ohTjBnbtfi6cXS9Hkp7F6pwKZHzwCzrVUnZt",
  "key26": "4UMawKFhC1v8LBpmLYE4FGA8uNZGh6SoCDj9zYTAKfui4oEKWVAcUS33fu6mKKoQmkL147JMKsrig5xE3BfPCSux",
  "key27": "4KNiTwzX6cc2VRh4ibQBB7uXaiiogapn7fZboebPXebme257kbqonAEGRXb6D3DceFUB7GJZFym8jsWhfWb4oNJc",
  "key28": "66ajgm72k49Q2BVZj2XcToHH4ENxKEfV7gaPjvbtQeM3ZL3gf25736Nqa8i7eLqrPVYYPZLDHje1uCihqYKic679"
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
