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
    "5pLZqXbjva3dL2Y2yoKd6pEbvYkhArSvztLkU7ub4xCJcQMK5rr6TXeT76MYwwNouSTYGgPBfGjSG6L1tLKWVdgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyZ85yF5vDCdBAov6vy7QFF1AzJvmQAP1QjZM1Nt4a4kV5gNyFCZWVEzQbCEqUnTro23DtMnH8M1jsiHAohkeFp",
  "key1": "4198nAGQpCm5e2aZy943VS9yKmSCCtrjoy5zHAQPJHHczmbbm9BdcGbP2K87gBZaicfYyye3Q6nwGNsEb8Tim8Hc",
  "key2": "3KvkzUySVcdDYiiy7xT7AD9tz8v6oq71Ynhvec7XE5FohKtDKYEM6JeUYBQuKbPoNGEqcjRRgxHQhRtaeu3546Am",
  "key3": "58HtvwtmiCHppqUC1QFgbPuiVwz24uKCFf9tbYKqdyt3DoMya6ojib1KpQmmnke1oPFQNUHULkDrMc8K4kDcCC66",
  "key4": "4ikzrPnihCGMSKC8sk5uBKZXcdcoxtcMBFans7q5QL8MNBJHRL9jVNmvDXb8GwvMT9trVsox3bQC7unmASbtH19w",
  "key5": "51W6CWKiN6zjiaBwoUgxEWXtW3TyUiyV1oJQA9SE2FZNvHYud2u6kVbb8pxCjiyNwcquLaffezLp5Y4KkG2saE7M",
  "key6": "H6UuCoAvuTELKFvVZF8ZTohmcgZiYDwZrUyr62fWJMmrvTKPbuoLaRPiP7nZBLEZKXhUJow4rWDkKeYLYV4ZjN6",
  "key7": "DJ9qy1JS86wz82coHZbhMGccgGwj2kjr16k9qhwxxtKprVrWgCMgULfEEefGWJwoVNruAgJU54tnEozc8MJGGfA",
  "key8": "24y95oDf1qd87UGimm1GSxsrFnjQB3brZriTyotuxDzgpzkuDJ3U4AR1UoeBwsHa7zg8V6wJ9nsFfM7A9Zu6wKqW",
  "key9": "619a28AXfB172JEBzTXbaJsoCyo1FqxJ4JMj79j5QtDUnT2fuynfzdSUvvFBPYXdhYd8XWW9einQrPUTWmcPY8tm",
  "key10": "3WcosBUn41numEZtQ5YpN5Ba4tzrLFH2r6o53XC9CVsYauRSVtx9dcxQXwJgs8uzw1MGDcVoH3u14kxPLuseb7Ft",
  "key11": "zXNkqjZWDY1TLTZWY5jogFjVtEqpYMt8RVLjstBBvKkwz7jRHxmdKyiFvLwQd4tVNsjJ13aPoVGehavchuvTSXm",
  "key12": "2U1ns2TcZ7py5xFWUsNF5xAZc5BTU4TAiTjHXD8ZGbHJZ3EGMPNvWvA6nGoJLJfFTQBkZpfmrcKarEJtwWh4w5u5",
  "key13": "3XWEs73UECZhTaqR9Z2ACoxggeCV5yEVVWqbhcyaifT6VodYrUeNgT3qdSKd2xzv4gi3HYSbgjTK8SGNcN871j9e",
  "key14": "3gTTTj3V9ikKUdPchbKGVNhKXrsGyWubvvGtHLMkQhWmUKVFDgZw7qP4M62sqJgAQoLea9ma7fKe2gnCNPH7CrVi",
  "key15": "42dzZjdPQzbHhn9SY5hgLGqUfcwVPb6UW5kL7QJKceRVFBfjydXb2ZqpAasvH2fa9WCUVXCNGYuP7aXwp4D3URF4",
  "key16": "4Zb1QZ2xivFVmWrBZmTZfZiq9tAjy2Pyptarf7R4tiFuQKu55vHuL32VWyL5FHRbBA6KFUtKwfWBWTt3GwVfn75S",
  "key17": "2eh4GemoHr7vVuVBudq5BQ5hN6Rmg4Q3dqUdqdPmT1WNmwHFsL6U3esKPjBkdQZ1yzLwwCrdZ91agGGiwGCmLtk1",
  "key18": "4ZtajiguYeJ2ze9RRL5XmRM5L56Tx2U5eidgbYQWxXQP4aLCPgiawP88tYrZoYcuQPPD97eX6uYi4S9YQ7fgu8ip",
  "key19": "5LrFgntuhfWG2BL5TdaQSXBc2iLXV3PuSACnbeg1t4xY5EQVAMzTgtF9gbWnuJZsoFT3J3rYrPFck3zAG65SmYaz",
  "key20": "Xa9dMwokuvqC4ETk5ztS92w2TdhwdnVXLYG2bn86s6nNPB1Co1j1eaVPUNYSYYuwwbzc1KoaD62E4Z1uDyKexeb",
  "key21": "49ZjYCTZaEPgeq93W5GHvRKeeWAq8xVeNNDx9kGQC7VHcMGjZmKFZ1KPStfhHYioxdkjMUk88CTcdoYqguQuxW28",
  "key22": "4M6fxwEiYD4oWZMaQh8KAThyHBhXwK4yRU8RgR61hc4KxWQcwLxHFMJx5xXqM92ioMCgaa1biM1rkHAcRtHsp7pf",
  "key23": "2fzaRq1W9PDZ2seM4cY8NxUb4a3zU5EAqtpWC2j6kPbGHyY51ZwYF7Gn1QMrJFLQFTmudLgZ9dsDRPk4j64JoGaD",
  "key24": "4PA7iuddp9oMFHpRtq8e2t3mL9sP1McqnmZF4PkmiV7EH7EEqSUXgeUa7NaYKNUiekA7V8vN3N8Cyw8u5jxgQqMg",
  "key25": "2iKSbFJ451gWYELRikL2Wf8hd7dfrfhLq5k58ZZ3WNdi4KzurptzGutKnKbGqb2XPCNfPpdB18aPs5LJxKgWsERU",
  "key26": "3Fk18NRC89EQHNektHdVqLcgNrAGZu3Rs4a3a2hnpy9e1m2rR9dAjAmmunnhG9Q4DEjbF3CDsoPz824mRVueeBmw",
  "key27": "21CZ3AQRQphuVeSsjPeHoJ4F6fQK5P1Mc58izo4S3127YPHTWwEvC999eyzHpAqPRFqHXTNw7XQ4S5fQMyXDdDMm",
  "key28": "2vHHmXRnFi6AAhzu9yycboXCscVBrq2Yu4AvJHpAY892oaJcDr9eoJhY1DcPtn44k61fb58459QWwur93fwkrwno",
  "key29": "79z9vgUN4buAo8pKLeKxfAzoxNCBgmDpuf92RU1ZeREWjqKKVuHhrjPtMxbqUafpvtnrfjEufx8LPtUtEhFZXri",
  "key30": "4XfxFNSjkvxoXrNDGopuL8oWUqbCWFugY6rfuBoMda175Ac3Pk52otU3pcQ3Vjsz8oqP7nPcbJZLP5dCL1mbbGRT",
  "key31": "3NC2UkJi8NdBVDwFQkBy1vi7pzZSCM6CAvWQy11g1ocLptvbkNF22mNxvZWuKqG4sJvxd7hNJeMZ8PvaENnjXCt",
  "key32": "gFRGrQaCtUxQ9LKchkaXxQATa4czY5mESSZafBAshGFnYcxEFD2TJZwKbMPR4ewqnbo2i5Q5JogdAuNCWTVJYWk",
  "key33": "2SroTwhguF1pDds87ab8PjJigd7wBsc4W5Nk2A9pWedM3BJcyHXGKZPBDc5jhqEsYVZg72GBvAmWCSrmpwMsiG8p",
  "key34": "5ewWhtRCMbzUxPXjerxs8Dx3hDsQV7ADT2zqPqW88ByW3SWKHUPA2C6fobYMuXroP3PyU5zzG4dvhsCH6FdAzsSM",
  "key35": "5BkPi7zcRjM7yM7iTgHyDbEK72RcfzoBnNcRTXWSyNBE19gXTUxtTDpR66fy3XEf8NpPXQtaVEdE7Td55fpVsqqg",
  "key36": "eQ75b3KvCSvtEH6h1yJkG8xy6Ns9NcwVFdnkNHSxU5Vvjh1FfrFhuSbbC9pgEYHkVRhd8WqChAULY6hqwqsPazv",
  "key37": "447VDSpdouavsPs31NXiiaHmmqRWrdKA1GpPgpzzGDWvnrus7yiBgKgGD61pa9g3GLSk1sQsE9XZGdRqY5MQEv7F",
  "key38": "59TyyeJV7x7kxzYM1x8ZFMScWcwVm6oRN2KYph1rGfEYi9N8YpVVCUoX45gpZfBrJUpZttF2Nrv89qQ8ResXS4JW",
  "key39": "3z8ZGnES6X9vuetqgoxKuaKXH5HysxHEnSKQJcTpXBsBLf9CRiLvnu5r6Hp5ukEEf1yUpXaCHt4y1RXwXcWyV8nE"
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
