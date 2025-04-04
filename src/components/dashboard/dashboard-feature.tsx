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
    "2pvksUEqqjpchReC3gRPVJWjkudqTWmpcKRPetRvSgbiYidmoq5jEkFyfhUWAtufdzJiEY4hyWj7AHPiH6dZg52H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438apxN2w4MdnRKfXEu95ZRbdM2BhQVu5vgin2xjtyRWCacZFZb9fKLhnwyvNxa3fiSyYpmwoJKXPo3vEpdcYenN",
  "key1": "GrbimbkG5cgjxKG4atVe5uPDZrKoMKHKPDYvY5FEiSjzsueijn7wdm9p6rQF7RSSrgSJBzyGwjiUyC9qviejT3v",
  "key2": "3pTJxjnopHUxWyRyEDzWAaYHXChdXtzQfqTssnmXF5EiuVZuEadGQ4Wdu1NKtjrbh53NyjW9X6sbwVqKNHGa9Psm",
  "key3": "4UPqteb6dr5qJLUs89QTGU7498hUBqPf3UTJKoU8kB5onocCPc5RCtbSrNdbvf6gRrfAZXcnsXusvdMVfm38XGLt",
  "key4": "2cJ6XBWC5McM4F5LokKhDj61JCzBrc34kmQzmX6AufFg5xjAe44KM3Ja9mtnTAqWrKYN9jqxxH4itricaTH3vz63",
  "key5": "7C4M2etVp7d8N3x9CRdMC7WiK7haH4fUcGtpBUDFa8Zq4EsZrZwnHQvJgdJoBQNv1y2u76UcEVG9rS1S1eqePbf",
  "key6": "3s5hoViymctBhX65RSQMoJFyxNeihpnz57cFiWsg66qzxKXoU1P2nuf2DUsnmf13KDAh92tk5Dp9JaFhyjhzz6GE",
  "key7": "4gU4Z6ruYptZ3PrhmyjZNzThsw32eHLFhH98ZJZiBFpBEFzNHKzwvmxV2VvTWmUYkRKYzVda62cMbxNiTSRdTRgL",
  "key8": "3GxFVr75ErcKf4sUM4SAYNdA9pxZHxWCNa44vbV4w8raKdceRL4F64sCy16gWFmKwDALvvpsKcPNfDXVGAKWiRs3",
  "key9": "54AqjRsxhYUfJC7zQzmFRtEvKZAaihWJfgya2CsD47MqVLA1pzDBZn8sj97Lpie44QyxJqf7ctnrZiJbhbx7NXoe",
  "key10": "9JNuGzAymrhZrZ1NGLQ8ucDA5mpetwRTMsgBMFM2nEMrJXxSYxvcZyNLgc9bJnouEmqH6FW61isaVF1WagbTYM8",
  "key11": "3NcP1CwpZRbz1Ag6UAzQwywmnXazXPXvMFAMRNDtVg6jBK7n6yj1eaoYk96dhBeRTWRQ9UjGmFrstTVg2u5mgwLa",
  "key12": "1pgV1APPZqSRsg3zaodiYdk1deqonDxX8eEQAMLELSsoXoa5mhGTwRCMcmA3HfMkhPRiC1Dp2spGj7Uy4H6Rzq4",
  "key13": "4x4BAE6pM8PRikbsona7YsNyva8SBZEp1sFKtQRkaKS9jZxTocHpE6ZgseG6iZ6mKDunHgX9QQraZqQmspHxiGG8",
  "key14": "4mEDKjCbxN2SDNvxwceRLmUGfR7Z5P4KkBLsCWdzecA8MBTQVFCZdZAqF7qTZaNA2Jbetif7yt2s6jeGQMKayF1m",
  "key15": "5HYZa2e1pqzAs69rccM1Bz97d678kT2ysGJXvEB2k48t2XtRwRPZ6rP9oXap9dLP5gMtDEUZunFEwT9t9DsidMEw",
  "key16": "3boYsyve65Tdo6XJ6MQnGwT4yuGQickXDqGHqXrPkdo23cQXPQPQX77vfXnQM5Ws7T59kAWySNWVcijFmdZXUcbT",
  "key17": "4j6w8BBGKmg6Joj29XSu1WvPAabGnPFbDvPqdJqC2SXGgDJfPH97yRP7Vjb62XLnZ4WhBQ3uAu3METRY1BaW8zXw",
  "key18": "362Lapozv1Mc5vFpNC4Xk6oQ7Vi5Xk5n1gJS5m52QCkYr4gqNW2g4nygxWDnXLn6BBwRbpzkDABu8AgfuquPUKT7",
  "key19": "NVmRN52ZgmZxgxT7AaWyyGRGk6YeDM9LkkARjSBDVxUDhnVBDsYmL4LHRXkAV9wfKQxRPZsTDZVQTTd1g5NokB3",
  "key20": "5SzKNX6WVs8Xgj8EyWvioF1URM2ZhrrAsB9t1FwMwJpMNPJ6zEgqBY3fJ7Q4vJwfLctyVB9AT2CJ98h4hfouPEAp",
  "key21": "2uGUeimecgjcZkyg16iBEdD5Tv2GjaSmViUd889Ros65LK5ebzrcpDqXGQBxLsBkW3BEM46R2DnMicmWFA41wXRq",
  "key22": "3ZDdR9Pww9cyCpjoDPGabfwJzsP6vB5vrdkUdoRw6rPkJTVYiFGMrDRCe1e7y66Ak3shkYG52SjpoGGwD85udxgF",
  "key23": "wL29r8txTshRhLR2AMEQv23AGTcfgghxdhdd5YNHKqjWBHLpkoWZh24PsVv6JssyRF5eSDvyoNJ57MisGUTdFTD",
  "key24": "64oqQ3fmk7xn8XeEab6LyHsscedVUs3BbvF8F95D5BFQ16uBSNzFFXEk8DBrVmZxULYGnx4zqBmot1KL21pwcZb7",
  "key25": "4E8unQB4Eu6PD4qiooHuLVwVotfR18g7t6FSnGJzQcmammchxSj6xLbMiTGmJcT7omaM7TMEJfHLrSQKcuBNU7vC"
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
