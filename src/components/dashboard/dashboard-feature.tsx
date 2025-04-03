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
    "3pxwe7B5ANFosSqvgYFDpBf5qSUYKmQK6UrKGLuy6JQLd8GVH2Gz7eA1wPkv2kLZCHb2MquZQSLYZCfhXH7r7CEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c918QJse2hHMydqWk9f9yzdrZM9U5SZ4U84m13gKKCbU4PhZUDtBaCZEce4VWksPUvwHg4x4RxG5jZsvVR2UkxJ",
  "key1": "3Red4xFcesfefu7tRijEF7EmcMxUFF1HsSAsFdvixXvxfF2UozTTT2y8U14NUzg5zc4YtkqxLQtpJhza68SYvxay",
  "key2": "24XmVeXPfyfkLyGCimdXHJbGCJGYQesbkFycMUKS1KbMJLSaZJ9aeHCC92em28qNGnvmB1XfJR9Pb6sYpiRrkGcb",
  "key3": "387h8TBaNxVAT1vEFv61uNdwzB1wxMV6h6MazxMYXVimjpqZoKZix6pSQfLHvUEvVvXWgAWYPzKFNVE3th3qAcvG",
  "key4": "ovz33GyM9hqZ4irKRNaFToYtRkfctW8q5G1UMeAxv9CDbg2zbcWUL2Qp6PT2VLKPPRnzYRSDD7YTFmeq7YjoVwW",
  "key5": "TLpTNWnUmKS2FKZ4Z2XH2AqkqRNAGG7dvTkFfVdXkVfHXGGS2xoWQxDvXaCukLbGBbpepfxMCCodQSQSCSVE6Ym",
  "key6": "4sCwqtLAxzPCRhfeDXX8tuHULELBBchJAgZjVjixRxjTTDD3ZMHAa8BsLbFPazDpBvVMXhRgZiF8o2TsnWfQyg7g",
  "key7": "5mLyBW8PoJPyXwDvRZrgSeU9fpxGgHzsqqbNPsZCTL59XkhAKdTCp4TQPcGrkxamNE2gNrBJBjNmRTHVo3gu9D5r",
  "key8": "52N1oCvL7SqdYjmUarB269atvhbhCMEUkx93ot4QcLb6hfne1aAXdZnLdCh9LibsLuUXncRf7MYhB17Fuhx3k1Fj",
  "key9": "3XGT6QfYqdxvUvQu1EdCTjKcbXyetqWeSHAqCG4A4fqoGd6qYWHWPitUppC5XQQ8ieqRPD4KFPAkHATTzdvFWyQC",
  "key10": "4EyjbcsUZbPggmkV6kuKnmaUJDjj8RMpWhVi63dfFHMayvN6c9hKS87s9v6N4g5UQN2uufv6RpLe2YoBddqaHf1a",
  "key11": "4CtGLTJXR6ZDTtRUzzr7uT2Sa69qV1PRJ7Da5MxwmtUFPcwi3PGJtDcM4SsmsDFPtkitHxpaGt5PEXAtADt6wW4U",
  "key12": "4QAtSapQzvFyLJ3KhoxkGHdnqhUF8pwQyNPSbPdRRQDnbBruC64kMLC7RBtCTxbbhP3TD249ubRYcnQR4LSKhFe7",
  "key13": "5nk7hpWUuiwNfSTNcpFkKBuM9mKXG3AWHn3x529WUwjWjneh8f2JYkBTdPVr3zzTGe1AVrnzkUzVZJ7ehXuivx2B",
  "key14": "4QVC4ueVDP9RHjUUxmQdV1MSofAigTiG9AEUxN4PkQ2dtH3iyK7bdfzCBTKUTkrWMjj9twL2PHUytCaJEDmMoFoJ",
  "key15": "2t5f5FUWpXeNQvR9mXx52wSPsCk67635HbkyUqrQK2q7Ma9vD75Q3cDVdmRrGAd9c7yeLDSQBQ2DWghUuz5VjTY9",
  "key16": "49wWDanmQveGM7a7VCfE8JH1X6ocFzSza2CRAGBSt9TaXq78L53rpuQsYddS59bnbGBDY1TH3NsMj4B46atLT9ta",
  "key17": "4cxsKTpfYhn5H6vWgSHYXbTureWYJEMv2pt43Zvqj7LavnzVXm6WY8cPrKtKaY2CsfUMXiVTNxz9CoZdN8TFRBSU",
  "key18": "3moDvMfgCHrbaevAax6Agkq5P6RBkhFvfZfuXkcQSmqXsBW4BzHsRAMtGCdyHvnqS5UgnpauCCxmo59AtDtrgrct",
  "key19": "gVYQKNjBPrDsLzzVkNBgNPyV7m24tPPko4mtZtdYVoyQgJnhHwX1S1KnRUaZ1BsWKJFvsetyZqdzTDUthgE8q8x",
  "key20": "5JrwX7bWuPZWYn7ZcruSR19p868Hhomh2ok3koLcQRn5MnJdYbxo2GKV7fNCxRykS4bz3CNSF9RCsC1ehPGxXnPX",
  "key21": "5xLcQC7H1o67s9kGXa9cFs13Kw3K62xN1vfYMoTfz48VAiCjSAfvWt2KC8kC8FSUbehvNSH6K2ndfVZebULezssT",
  "key22": "4KU6tqNtKVx6Nrn2fpvGEspvtt2TZ7o8UVGeoZrwnbx7uhhhJEFavo9w4vwVMvL2VejLEnRmNoAp3c8PBBr22TDc",
  "key23": "2Lq6D59nScYujpUByvMpbdynKJk5bB33ybf3cqYCqWcKghftt1rVu76KrKc8xkd4uyraznmGMSS4txaiokoa1LLH",
  "key24": "4wBnd4EWLgHe8QS8ZiWUTM1G6qkYe6FQ23W8qpU1iwwA96An8HyrfuFmG6akbkE8GSxcWQzCUzr4NNUzdzutZpe9",
  "key25": "QWs1z91Eg91fqpDMcQgJGMugVjbPPTVjyk1ZQ54e154N7M6vvrLnqVJU2cyB24Njww9A4mLs1AHBJ963C1C1jja",
  "key26": "2X6Vbdex1gH5az85gj15e4hnnLbzUwEbdpkR2VVzc6Yfu9xzCV3huhVtq5XnsZP8Y8GyhCzE3pP4N69nUwfwXi6f",
  "key27": "37XetTL8i3Q5PmYw4YzkZudhU68ZDDusHrrEej6PLq9m7DkZnVYbo9ZvfZEbcn5EprfAzaMGQeH6ZpXDxf4ywNuE",
  "key28": "4j6CP43tjvyZK5C9N2NALRW8MHfMSUeckpHSri5eVmfuLYkWhB5vbbkw75EMyJA1d62kPma8Ms3Sia6A4qZeXnSm",
  "key29": "4pusiGHzdjWMeEbYByriNwedzzcisDgfTdYzJj8Ex7xnq5vzp2R4JFjhSM5zwGY9sXvh5D4PXk6sN9Z8MVi7F2GP",
  "key30": "3UjcujA9siWdL4tEUV3fWrbwK5GUnoaUABifKKgH5bfJWX1duy5ZrqKYpgRZEgqR5xXMisFvZyF8dpGrtPWKSe2G",
  "key31": "2WWmZadfSY7Y4R66kZUd3FQxRs1cJmXpbpAEYMt24za37f6ThLhjsCYvrr4eBL6Qw3FG1Qck1QTkDP9EG6Xen4LB",
  "key32": "3ymHUZEjEoviAtD46Lk7QY81kqtPFuR53DgVoZFdifP2Trmafo9CaXNCrShbW6vHhFUEDrPjizuWL34nqt8DBwiP",
  "key33": "5ngMkmgDE6cwwq4CkACxDMNWb1kc2F3ckU95uhEcMpSwyLg2c4QKJYjJUwvuVV6bGNfNtenK9GmAmMjzU65DdSoP",
  "key34": "skPCsTSyVxXLHreSgRWqWh8MFxPWXPddxXbEsmTxAGP7qadaHFXmeBZ61mvLH4jpPFY3QsQpxwPCaV8ERExPYz6",
  "key35": "3DP8GyFtTjr1BdmBhLbEDo7qsSiXWxYefWa7sHjuGw1bcbiopL9gRSTrJueLkUV93HDCHW7GmMhChEHhVVQbf4HB",
  "key36": "4y2BD4LYwZq5aYKrLKAuvtp436rt7qByHKRvMfUSKt7iTFJhw1Uy2fhRqvUQwimzHJTujQ8hbmcJb94v77NUXq19"
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
