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
    "Fkuk8QUxz2FsDbo498Mx8pEYnQ4gF6VUxx6LeSQrz6XRqSEhNf3c1G5ny5jcMtNaHBmcXGAKYuZPB8XzkagQpHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aKYjDt5SVqUSZJA6HKj8XaKgk1er77di1Da2c6ife9ePggMBvKmPzrjyPySmDn3s53ySXHWVSCRyahFC8jn3HPH",
  "key1": "4qUxMzggvphUwQHho5dnbDSLky79KLccZHU5yRC39rwPBLAYHqKw3DHiw7qu7YMVMmgdFPWj2tb8JoPjFW52rfbo",
  "key2": "4J8z2iXfu6T8Hw4VqU76PWcRU42LvEKchbpgaVuzpf5wziSpMiKCWwbqPN13vwnSSsfLXqn9U1Be4pLHUCW7bt5y",
  "key3": "4eeeaymc2fFCgc27kgA9s144ko62CN3PcHUnasw85WmCCfHEZMWaSkgmQtTdyLPQtMppfpQqGSEFwpQvEPzLioti",
  "key4": "2yEKagTavTNmBod5DduSLk77NSeTaBf1GB4mrvMUd4Gqf7qpaD3wH7U2ev32f3f3YRSQxmgCBh6keAia86Fzt54G",
  "key5": "2E2KhFC2LsYU411536mYPuVfcQi7bkmoVnRmViARNQEUU67UBJB5ZhRmv5xWwBDEGjqprUUURTKq6NSdYVGpqfXa",
  "key6": "4YrgwWTFtqNWD4cG1C8oLdNvmDNQQWZrf8hy8Y2oY4UMvMNLqrr4b43N5P1CsPb3STQBhyvhYtUiSFd4QF52uxBE",
  "key7": "5am2bXd1jowE8t8zaYiRngvrp6QzUusQ2v5BHwx4xys9XrwzZJuqpNhVPgEnatKHb15cwfB99Cee3Pv5H2ZvUZuF",
  "key8": "5mFBzHmGXGaRD6Ek4UUdjKh9ywP4nBgjELo4PK3DP4c1frM9Uu1zJdSM7BiTSE5vG4Pdu86PAG8eQVaJYRTEdiHW",
  "key9": "tpPyeZ79UStxTC3LS6UWeqhC4F59EnvD1H32kzSzRCEq4yaKAtPSmXUittTvQMCnumF7fdysbPibHFFgofAfrRP",
  "key10": "N2iTaC5GF4Swj5S74WrV4FqAqgfbuybyX2ZFDBMjZ28C5RahMEqwVH5vSwDq6QfRc9K7S3tM1eqfdkLbWNRaRaa",
  "key11": "5dfXfGcR8bGxkz7MgtDGXWvseosWG9dbuGdLtmGjDx7vTvAS76T6iuZGxQMVLvjVhfDYuuiU1ezAHv4UpuveBKZV",
  "key12": "3JkaLGZiaqVHjisGpLoA2vdnKjpigc6rkLvJkvUEmau6GAGa3Vw7RPBrF9tRongrdwYXY7bXL3D1mNpVuJxSguVX",
  "key13": "UtqpVLfhvCKLBHgHwGqMCFxH8XFQoVdFrs3MQDLNqMDo2DZXpmuxLT1YaQrqEyHufdFLGWQfD1M2d8KUVwxFUzJ",
  "key14": "4APYvFK25eYaXoSMftYb9JNFXs9gH2YGcQBwfNsoH8M4H9E6eN1sqWSpqomd1YWr91N9WaqXvFoiyNpbnBYKLLxU",
  "key15": "32RrY1qsrMGfJHGWmshejPCM3QgvkegqT5yPrRQfyQ3M75yrt8G9YN9t1hPoKssATNhLEB2PBSMD9jiSosyPyjSF",
  "key16": "2ExnQervuZBrtdvB25TB9JNcUTTdsE7oVSrMPKebvAY3yw1zt2pRVDTc5C9zkPS15VZRxPi9LrXXG6nF5WVsnNse",
  "key17": "4EjGe5PYFStCx6Bim9AzDNSZcae27Y7h8f85sBtSMsXHaREescVC7RW4cAfamjZUFmnUVk2xvezCj4E2HhxXPoAg",
  "key18": "4oHD39SHMgRVR9MKNEpHYMBjLie2zzhaPCAnrTkhMUMqQ6hcEVAXPeP6va5FyaARvfrygbz7vsvA2DiXGDeQyrZY",
  "key19": "4a54vhREJGGNDMT6Zu4CTTQF9r1Jnajb2E46pFjR7Z3tQdmXaDq4mjnhS5No19i3fy9qyYZRz2hUbnc2tSPZq3xB",
  "key20": "62QDbJi7iwPzuPMJqWVVAy9xxcZY7nzRQoUKS1VgpFZ7rFmXqBMqXfVMiudkkBRx4AEaaW9x1sKZVVwmh9czznKR",
  "key21": "4sbgKYDvcRgHZP2tLgJ5JUX6uChNb2cdnkKgbphAeD3UWVrWkoWcURLC3EShVyDMVrAN5aAhzLfvxEUAjn51a3w3",
  "key22": "2nuATbhd64S8KjkQAMCNHxwyC2bn67FHG3ytukeEEekGJv6Ri7ciQF1PKM7GWWhEsheXCrZZwiCn2ZSj2KrhhKL6",
  "key23": "3phkYCae8TexethBU76XsKwqQKH6rbEnHENRxrCvR9gM8g1tZxzA935AWt12Wf2RM15JGg6VPyqdS1CKJNcTbdpK",
  "key24": "2gUohrj8GuSbYwDn1MTPajK8ampHtykTtagxWQyejUzgfnjL9W9cu5Go7maGopGdebza7JPcaJfS2EG3DrPpKS7X",
  "key25": "3GcXuePVdX5x7E4V62g2FJUiA8GNJftWfn6mUR2wXwg2YHeHtoivuUdptNfFqe3pFrcEy6oAa1trfgac167Z1zQH",
  "key26": "dNrwUEgMytQTuU16XpGh2zZsqiTTPrM4HHM8N78V8yDg1K4LuCoCaAMm2DjdgDg5HC9Yr2LHYzrJ3bAJBnM5ptn",
  "key27": "2xQ14bEHzncv2A1Y4bbv2PYhEDfSzNqRiz6r9T16Y1STFAcUPouXYnpX86nftY7fN3Gcm9wAmr3wKVmGVHvZL4kd",
  "key28": "4erDxJ9X31636cctwP132NrjkEBiJcG5EG4zRdNMeKp3aG56sCfnWRdGasVovfidBiWhpJqSNCfbKhMRbJArE7xY",
  "key29": "3nudoRjoFAYHQzakfqXMbD2GUbY9m5vjcVuQLL5oqhg1Gd2nr9R5zRJD7giWEJTU7kAD8BekqXFfr7skQP4gRxTX"
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
