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
    "3JBkJsTsvH6qW3cZE6WCrBJZnvSzkG7Hxmr8NK1azcJdTuRTEoZoH4Z4Y847GHwWGLd6JZiEkNZ8DUwYFEa8dyMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJ6ayEHsurg2hmMpu8TBEaKkJRFPZAEH7V69E5ZCHWezjiEyvZFKddY6uyDBAsWq9LARhXXo5TWfcfgfeCABL6D",
  "key1": "4CaJoK5mgPsjYA2rGJhjYdyaZtth9PnU28JcAqqLky8wGXsNCAkBfTq6eJ9oBfsdJqs64hzCpHeLAcG5UjsoQ9CD",
  "key2": "5GvCqry3JAWeX4SrMSTGMdsoHFggJbXDDFa7NPZ8qKFB9fpZq6WrG2pMWtNJEuWciM5hAtqZQ4zTSBxAXNJW8sSZ",
  "key3": "3zEMSvCCwa6cnDKv6TPUxqcVWefmzk4qn1d4ujJhSF3m4nfp61wRMcmG54ECkTbmUETZCQAhreKbD2aUmR3Wx52X",
  "key4": "4ax3ahatQnwvMoSC5jMWT39mnnVhWcpaVftTemk13kPtU6SJrzAmGLbjLLMzKAwXYaKWqYSheAySyYGtJw8zFDYo",
  "key5": "4SgfWKWY4pqyC899zPv4hrPxe7qWHwJbRwRwvT39seehkqbFavc1k5otv2c92yo9rNGUtMK9n91S2rkwU8XwyjQJ",
  "key6": "2MR1wBToStMmaCLyjX53fABUpwLjerNj3grc7GJH5FAxg5TQJPNYGLwQ3CqXqVV54ZdkCdeFQphus4hfbjk7NeLV",
  "key7": "5JhD1kJuLkz1iT47TH7JKqhJ7cGZRPg3fYchzcFdmGaY9k3qJwTPnJqzzixtfVXzekovNnYoWKrXGTWxTsyGsvis",
  "key8": "NetoHPbGLUbbGZAJHdCUouSEjef8uSozJBxRJy7qBCwbP8hWBmvzjvDvKqHTps9RAhGNJdF5WNmGpQZ9xwHipcM",
  "key9": "Pa3pUsiwUuvVA6ZoRenVHbG4bcvy6EhEEUHjqvEHYX6wKW8R5LPhkfRmAiuZa4iaYBSeHs7USuSZAeyUWY16dTw",
  "key10": "5J8UpmdAX1C3psd1S6oXyxQT5SQvgsPYVFoKXPZVF6i1LpsnYzz588roGjN3dqoJn4yJ3msh5dxzzgbMDgSkHtPg",
  "key11": "hQGtaCpTxmDNxDZvvVJu4bcPykBn5pwQ4T9QQyUpLpvTg2PLemNQ8h8kzX49w8RnjNEfT7dcHGix5SrPF86GRCW",
  "key12": "zqZurUKh9Dys31iS8nbui96uAhG28X483GKpMYbTeK4hZQx3qMhF6N2k9HjKyWVThUzgzNwzuhfNXPx8DMQySSi",
  "key13": "MVKNzupdaiAF3VXdiZCMBZQ9pucPj7ee2rNvZ4NDocu62wzsgyy7hTfie91SFPEeKT5HoD5RtkChhHC35nmyD6L",
  "key14": "2X75bvGeeHqzdp2yzg3FF4NfzKQsu17JDeN7g6UiAb3xYqd54VJUEetiPTzmTo22y7f7mJUSHqCLoLdNFaaKCyA5",
  "key15": "5H3wi6GPSCCHtAs3VZ8fovZG72LCU8X7KpHYbroc8d9uzP1rqXCHYws9uL1AC9ENSkfn4riYNt6D4fnTpWsNbwvQ",
  "key16": "5t3zFhJfiSjNcF1nfjbYcSrmAUCfV6WqZxdpY91TCXjM17Ns6fpzDhNG1mBazZ6tfAUznq8fAF52JHeWNYjdpi7Y",
  "key17": "5kjd4ZyLsP4xbfaWt7Cg4FiZMuHJMmuk3KtU1MNNARwXYA96B1Rbj1Mq4kmDPWVy1u4QQa52bMt6pCzBNq1Zqf6o",
  "key18": "QdMAQ5aAWJqckR68y629qUjNvGtf8aRLaqi6jpBAArMDusAvL6ghfrTaYTo862QEueiji9buxUoqjmNCRg2KezT",
  "key19": "5KdpxePzcbhBQHRfxwYp4tbra3hyhYuXZz4Hr3oJAPUiprhfLffrKv4W8MgLuPMyCiG7qY7TPCQyNtTWRyjEffbA",
  "key20": "5QwDsAFYnpVHPJVpURMR6d6Tm531XrAMSVS6nagHwQVSVMEKLeYqLHcX1gmFmW69qN91eYVPwm7EoqNCttmtGiKT",
  "key21": "4u4jY3MeFhXGQFqTFNywGpcy11Wkv8P7cGfVbKeVNKTkFnWHfFMtxnZY14iWL4bRk1XvmZmiRH9hmhmjRHf9VQok",
  "key22": "4RcaMoG824hBMBKNyieUcbbH4QBA9YrEnkXmX8xY5YisxwKv7NnUYJWdUGrFFE5xM6zgwNkj4w57VJWs6RsGHrmA",
  "key23": "7xsLu2DvjinK4YvycxKvyxmTRXRX4pw5hhxJ1xDgRePkPmtvdfA2KzBaZcTXFyHrE6Jwg7C4uanCAU2ESeU4gqE",
  "key24": "5scYCHCovMyaaoaLfF4sEHQRx6H5yrXHtvVk3LskU62gcMvvcfXezbngM34M8TZynyMxsnzQukmuTdikXbEavNg",
  "key25": "24XQku8Y6akUZnvi3Yhq6dK8xRveYmmLRvyJy8jYa11TS8vb8fiSCNCox5TbiLLkeQEyB9tbFSsmP7nK3qA2bfo8",
  "key26": "NuRT2PaiaSza6u9yxk8Di9kxDBHNtNpYsaXWDhshdrXi5Wu8mXruvxWcrxJJBbUp5xqZwK75bJeoY17hoemDHUR",
  "key27": "4tBu38zLHXcDVVmMScSG7MXvkSFsebcpxnkbp1CULJLa5nqYwXn4PVFQsCZNbyVrxMgrwApsa6rAqH2xwJHYJF6u",
  "key28": "5pFJqybcCCCXGyGkgE7fJmG4Khv3wBGSJTSaLMYxkMcDxHyDeoww7WyPcw7wAeU35JYkh1FsR9JQLWEPZFxetz7y",
  "key29": "5HyJbh37ET9Nrpq1WTKP3dutytfG4fRm4eBToaAVdWmSoX6kEALsrQqA14SJXot1TRN3uneCE2e34Lc6ZJjT8HuT",
  "key30": "5MnCXb9GnuVVsJodMUagQuD3zTeyHDi4rEEmUFmApYis5FRXTAS9mww24Y4DG53qkE9qMPJFNJDDrW4d1bc83mkC",
  "key31": "1CybJEUufyucY6EnbM1eB5sBL7dq4NYV513HmoRktiMFRteY4cg5MJ5AGJj5jXWW7mkWd9R85LGbDJCcf8t6E96",
  "key32": "3DYziPS56wq8PfsZumSwARp8D22ZBKzedmV6LVPKqN2C4xmcAtUzeaZyBJcbY1P12opyxHA1Qx8dR9tjpuYk2jc5",
  "key33": "3BYxqqfwpmskgJnUqehhyHzPm4SSTBgYBZ8o42xaYHS7pnCbgMYJPQh8tB3n9Q8oKVwy3qpwmNmXCtk3F5aijX92",
  "key34": "4XQYMwyehJQsyjPucjJYUbQnENNR2mWkpGmxyQD6n1fTVQdaeeFwniiUsGGpGMpU7SRtgTTErmGZKypLwmzALBNL",
  "key35": "5XLv72VMHmSyCZY1UhiFpqw2ZDJrJXP4S2F1VY2VYbSpa1sb7CBz8dJv7RDQ9WXL11XRv3nzRxdL2d3txjWnuTXo",
  "key36": "4s4ZNMibtNnWSX8u9fPV9oC8TMFxrcTteirKx6tMArsvCwhXe2XvExp5gGXphB3S81gGVSxYSNovtjJYwkC1SWPV",
  "key37": "48G81d95i6G4XQzPZberDKkBdrLkrM6GuXrEvuNc59FSQ4wpAVksPCA3uwkRsNx8NPP965V6X68V4Wt7PhWN3ddE",
  "key38": "5Ko7D5Wh2RaMP7AdA74QS839EJEfeKhyUa2yx3Df5sVUBMR7EFbJPQrW6rET3jaEfWTjfnXQ7iuGP386f4R3ZGVT",
  "key39": "3aASuf5532qqpXPnb1MqxY15Nb9brBcUnWV8aavN6dDwKv9mH2AatTJp1tXFLifgSSFc5s1W4HnJCMqrVfYBtADZ",
  "key40": "zbCzwQ3MB6NiYBtnRaPZeToo24Y8vWouHGL5DWf8GzmJGn68yPQCxqx56bdrPCqEkfA5B5rFZnUnwJNdQ2auh55",
  "key41": "4rZDuKpDFX89ccBtLFWPbL8ScWqyEjbqzj5wkWnVdgACfM3D68cKFbRyAyBUtk4US8h11CWeWvxNe2kwWbAkgvzP",
  "key42": "4b694RgXwfVg9AmbRsXLHQJ4D9X5nrBuoB2r25NiVunHMfJ3RJKVDwE74cgjtDd2UWT9tUo64JFbQRkB9X6uYCDe",
  "key43": "39ZryHVX57NiHW1M1VkxuNSzF6UL4mkSsfrDnGnC2Eh2ctruxnqdpw7udDfc1pfJK9zQ4PFGkY4cFDVtTSyd3Zj5",
  "key44": "2HzG4gcWjpFYkChNtszVGCC1ukTfxD1PawU43EGCDfuG1N1XDK7keX84XzJ5rQT3WSWBDT2zNG6XCSx5owfSxpnx",
  "key45": "BxC2cpCbHQkq1K37Gbv8WJV5pMqF7ymvh1Eh51ygHCVtyxywPjkA3BSsPLxhp4WYr8AByNH522AffnGkjUt1GaL"
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
