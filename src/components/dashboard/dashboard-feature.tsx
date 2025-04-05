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
    "iDavjgtjM4BfZXen6DzqVxxWdiKbxTK7PCw4e3Ry298WiGRNQMzFmEiyjUPpWB4r2GSsmNYA1yq45JVKisVyL17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2vAVMHkbWN2JCDxvyft13gXgsWUnfSoyt7MYiWhsc4ybFYYvoCB37bswpDfdcLAYcYzSVe9AUtSxhQM7hsuQNj",
  "key1": "4VHjujhK7LDJ3PcL6jPjKPyrVCVPVp7a2nR5srkC8JvFYyL9kBNfHKmn4xUP5iPgx31am846aiouS23kLLvVLH1W",
  "key2": "5z3Yn5Eqvc6SU1bT6JUYr9XdQGajWFw1Hhe7nRPVgatgqZxowV7dY1TA9XW4LN6pQuWTDfVMmmZD7AA3zV2Gktv6",
  "key3": "4rsiYBfe5GUT7GbQj3jtvtmtpN8mtmSJPRpfv9XUaf9SEsJHMxwRdDJkTEHrTGFyfej3Xiskj2gKRmLTKgkZdczE",
  "key4": "5SyWamq7jkUBJhdU78SWuzSQv4u9yR96MdvJXsss61mDuHkPC13rZb1ccGReGGdnB3WUSWJcWy9fXdBdioBivU1D",
  "key5": "4uVRnUF9gzapmpV4ySgEcd76XQyfnDAxHa86H9sKnRjo5kX7GgXFFgrRQmiLb96i3a2u4QKbBZdGX56k6dgXuVap",
  "key6": "2eKU2zNakMaVAitZkL7YsKbzVHE3k5of5gyANp3VxRwec6zYRx8UmfSGsVWfQiRHTvdoSWioA6XuVa1vNPp4rv7R",
  "key7": "4TZDtJNNog4v1hKUEazixsnfmHn5DbRtPD382XTvHokRXyPG5NQam85ksWRJ1btT9ohuveMweKXuY7QjbuudggXL",
  "key8": "4SKmiqSErvSjR1o5j4Q7rNY5ToVg2bhvCFqmUi6286WSVksyizUwH2MZhVerYNCQSBkTRGLBjujTTFN6D1J7djTn",
  "key9": "5fPkuHWA4HyUdzkuhZQ4owfmg7akaZmChfrsxKySSNNxHypLmMJnkunW8SsEYUgqVZayXRZmuysW5wge8ECNJKC8",
  "key10": "3UKySAJFL7DjfejNxXtYaFfyKqDTbbnqBAaQdNcyoaymumyjxVJ3k4Uyze94Kz8YNeHeR1hecsk3u6DHWMmtFQ9v",
  "key11": "v8m5BJWMazpfgj7bEitDuXRLdwsxiULdZebKtc3X1ytVdqVf3MHNDjmhSAmr6aqcVhRc8PGxPY9HCiXMzoQWMT2",
  "key12": "5QKnXM2miLrRrKzaRsLCeMWn2kkWNybpNaupa7SSAcUN1xKYy7F4GaYLgGcmiRhgJ4sBPrWqQzyhnFU6xbRH3SQr",
  "key13": "3QvJ5xvWcn4amQqdSwNiFo59vrSvNi5p2x9kRK8YishN4MrTMnR2ieRjs4RcFNdS5ifVMLcCknCguSiP8CiVW4PA",
  "key14": "298pnHMsbTFtcfQ4N6bPzGJfMipxoVqhXSPZtbfvuZwJseBEQRywXNnVQKxPBv9NhAB9zkesA2E7KdEfNKQrhqAC",
  "key15": "ht1A5wZJxnLskAWpY992u7vMEfZKP2DbrpqRN2w8RZspzMWvB2zLAJmxcswgR4sazwmVFD2hwXuwyrBECCsbufH",
  "key16": "2LeZxYLXH5YmyAP7M5obrPgnMwqK7YvSFcPavRSqKnxZxpGGMdjtW9ptfT5iSSduKebZLMk4Gyt1PRPZvE1uCLZF",
  "key17": "4p8wNyyrEK7CdJBKHAnaomm8mUCPs8t2ih9BcnkPhkw3oKACEPGUxiQsGMUGtCogn94vg98XNF3KU6PoKQ6tFmNh",
  "key18": "7ZhNkGkBumLXNGk7oHAvMM56NizFADqvdTRX8jGqQaB28i2GZphYXhi8Aj7DeCFx2SUkAKGRuCf2AbZexv95EE9",
  "key19": "6228YJM79Y6uzuMVZt65CsYyXAwpxdoSBWk3ZHCop5N4RsBs85RQ8QcDrdYTyRPo7scS1WwVGCtUY6GpPU1PnPCQ",
  "key20": "2ynNBR7oLbsQZaku4oZrDTFUrzZKijnbrrjWkZWurv4aNKByeHNKLYrHPHbWdbTspiFsDNHjh5qeBUKaWsJVAo13",
  "key21": "4cDFghf5kjo84mYeKWhQ2SFUBNFgCTPyqV3RWghyDiYW59bCH6WEyX4LqZbZDL7khDFuGzSLgzUeGN6qgkpLB3Xp",
  "key22": "6UdQkVjNXZKddDDCH8n8RyAS3FZ9eJ942JawHxP3EtsjZbMh6moyQrVjNbtKxaH1pWJR6niCGyqp32ABuTpsrmK",
  "key23": "5rmQy8wEovqKFf3VhcbUjGKCey58TLBhQ6VApXD9R2wXVwqF8XLbxVFc3UAKhCrerxYYtZgdJXqpHsAHBGssi2zw",
  "key24": "49fD1mm9Dq5vrBkvwHmfWMrC1Nj17xcdPb3DUCbs7CbW7UZvwJYFHUAnwkucJCqrmEuxGuaZ8RJQtyT4QpKNT7N3",
  "key25": "4J2pSefhYRm1JBKqv9hKNszwBqFcddHu43Q1GJyLoifo2Kr5jjRePnKnYruGwot6MzroCj9DUAFNa8DJRfcVvRE7",
  "key26": "3athY85B4YBCK1zdKv2JCZzZQNjpdi8bjxdWizRumjfCteuLjqz4FCpHrmdju3fjyDHip7LiVNNT1g2z4H2AEzmS",
  "key27": "4Uj4F2DNqAnr4dzRYKfXphXx5vvrjxPpr83m7dRNhhnnSnNUSXX5ZMJJvPLCfnxjYZtc4Pv1GzosYmLZX9uCQrzx",
  "key28": "2Gc3Pzf5krAFf9CKS6pyScavn4t6nauULkfRGHwXLntUvN9fifp33vttvckEJeF8AZuaVAkofuqySACuQuoFicKV"
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
