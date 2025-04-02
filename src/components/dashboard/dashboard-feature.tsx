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
    "34qL8fuDoe8LHMWc9giXFNMGcmqesKfQ7JZwLVyzbbjsD14RSCXFKuPKCFfCpwXVvp7w1VHxRKh3qfqamj48THrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vy8VfFpk9a2snCJH6tvWooA2HauGu2ysdP1kJfnLzmujvp6GpgiqnRHxTntzejPudUxNMqDqSpYdpKXVGiS3Vei",
  "key1": "2iZgmea9waM912Gx2HFjJe3rM2b5Vd8eSos3gmaK3BMkE3Udid4Dw2MFf7E7cwysLi4eTKRHJoruMeNeaejdp1UY",
  "key2": "fP7edxiBS6W4249HkgDS5ude6UiByCmbXSGxHmrE6MM9oKvcp9DYqzitoPyJyvG5MCzcDfFjKgR6bef68W2rLxD",
  "key3": "2yotpp3vq7E2DXJVCDk7hqeHFtEi8mci53KWnff7oTKqsfbuzJNxv8nypkbJdkty94pyrV8HB7AmY4AoU6osHLcj",
  "key4": "5m1M8P62AkyF46Tz9WAaR7nTCemGHX7cQtK4pbHZYWGm8e2feUVzz7ds9eKaDGEoAmgdEshSU7x2MmsnZ4iks7tN",
  "key5": "3JNfxHKk8sareVKFQK5bZMVSoHjXcvBQxLUb8wzSt152NUMjqY42y3jw1dH2Rto5TjLm5pDhBK4zTxCYix3a7Un8",
  "key6": "4HzZSSH9Vc5H7N8oZW1EQB1FUsqLjUWYrw8rTKMWaCqXyBtjMZRLMPbzw3QgycFN8TBMU5k7g32TQefHTmVTCBMs",
  "key7": "4uthfixdPSLBckDJ8njgfRzew8mqpdgRnpa9thChStZ7VwKkb8TwakPCwyetfVmTr5PAk2H3ad6gPApr4vo9GvFP",
  "key8": "2CFCskGcs46v897KhausqX41SztVDXbQBSmgFZKaK1bSj2eEiK6Jx1mAELAvKpJq7zb6AcobUQQikrrxiRNsGJND",
  "key9": "hWcmtncW5nVN1H9H3xo3xqwgQx6ZogF8XGq1bMrZjoD19UaL2inVYduouRyuw2pKKkMr1BCKvHAF6R76GRvWYRF",
  "key10": "36cEfTtLotsCVYzLi4XqWUuPNnFKTrt2x6b2hQADAsJHWz2xr72m75xvX6YUPwbSNYoZEEmtQv7kue4fQUJMkVCu",
  "key11": "5BNqFdrtv9EGkWLDcxofjULDX6T1Pw1aWHXAkhesJ4sdH9Uqf1higVswK3UuGapyUk1xMQgPoZAYrgUJRj7xLLyr",
  "key12": "33q1gRX6iwRhjC2esW9gJcdNPsgqxiyCVnsZ83gtfmU1VTCwZrb7NyMn1rxtXNuntoNo8rcaAwh6LxWJzKe12puX",
  "key13": "3W53yZcyfVNkyJ9yWzFvBi9C5YUxxrRKKX6kgHMQ5eivWLCoSyf3f8HjcpRukx5ayoGM2dKweHsVTN3tD9U3bPZ5",
  "key14": "2JWNjiGej9z8NCbJ1vmT4qEuak71Gexu7Pt98uRMqiKXYH6mDtTNuRuwe4TGfkyQcmvMjMwUWAbQKNABVWQDZum2",
  "key15": "5FL95LKnuLTcKTuY76GFPXeEwrzjLHUTCTVEfLdVksbxgaXCvStax6V7Yss3qEh5tL6pXZrxhLTTErmiaUHX4V9t",
  "key16": "5sSvc99Dvus3zztm2jUc3PmYTK3LkXk48eEqi7nuSg3wf9DRG2maP6Pg41PMceYyTzt6romUSmgZMFfNCN77pkU5",
  "key17": "423dJ9cND3pyTKHHZGffd287t6GJPCHRpWsapgufiGghj8Ug4sWkzMEo1zUFTGZRpGjgtEbzYGjeibJFvrozvELB",
  "key18": "2N8ifELKrSm54M8uVruCZP8pww5zNaPYzp8j9Xm1RuVbEnPKZiviH2i1rw5tvnXRMtwHi7rEQxhJNb7MzNxfeTt1",
  "key19": "4GuzYEyma3n5wb1WZATnLDdfYGk9ewWD2cduJADWHan4Frp3VL3PWJKZnFgFskzy3pG445PZ94uPA9szELBEx1g8",
  "key20": "4LHDWTHLbBA6Nn8cvZgMfg4zBoH7qJu4ubxbFyVBtEmj77WdzPxqDd14GECE2kyu6RdTWAb75C9BKgyh5VYFLWCi",
  "key21": "4E4wCJxkqJtngUMvWEF2KgncknGNH52zYsDS4Da35vnnLE2PBAudbzYrLWm7PXyjSVJbrZZ7cSphaxZMmHkU9CfY",
  "key22": "iekq9GyeNmdHogKqAGyPnE3o43Zh9VDkkyswMGeVFCTksYsiSCTMzsZNojTzkBheGPaSbJgrpPcRz4mCs6MFyy1",
  "key23": "5vJWTuZVcpXELcbBbuDug7QuMTiPne13aFv4BG9zT5mSTXbmDswf2UMyS1gngRMNP81eDZ3BY8QdEBQyxScW1iNk",
  "key24": "3qtnRER4wkzqKRrkPPYmYYqqBpeDvuDTmeFNRbWdrp3HYCmx7HXs1CjeyzMVYwvFDE9Ap5iCTZuBYUaa5PyfjguP",
  "key25": "31f9Ge92tzfYEbax6S2wGYjzRmZYPcoM9yNKCARpTxSHcjyxXNjrobwkZ7bL7ccnKcmM7MmHaQjqyQ99vFxR8ias",
  "key26": "3MVCib1den8JSZUzkCLVSAPmKKmMzdEdv9G8CtXGAMiSPeGGqP55Wxpx24Ng5EAvUK5k2HLExCgQYnNvfgEdaUMA",
  "key27": "4gjxAN8azbicCEVxY66iq2D9fNC96yRGmjRCwuH2hsraUYaHB7xHfjvpejwTk25b46KKhj4D9jN65NNYdVaDjxhh",
  "key28": "3FT9RbLb3b9b7NE3gZJcvQEm64VHoVMiMRj3pNcogBDgMmrZpr9NDn1LnjFQEmU484NhuYNuc5iSPCUbbA3LaDCd"
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
