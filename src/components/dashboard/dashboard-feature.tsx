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
    "3FTywfuzckXqnZLVrLsYPMhZdZWfRJo6cRAZ3ctwVbGTfXGoporkrpU5krGowgUyQzBmmZy15F8gLjaCWVScJGgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuU3waCL4ARPjVHaaUdZ2BvXXAGcsXxrpaVPnQBFVT3kMP5iNaY6D3An3Q6dUBfiVAU3Vbm36Fkuy1SuFowU13M",
  "key1": "2sgBP98kE8ACwk9Bc6iTWgXXcoZ7fKrJ1fUk6cun4sYSo6uhhtwStFhSmkLM4kupzjbEW6AkGZ9Cv7654FUsiRzY",
  "key2": "5tPpHwKE3sUXC1Sia1MWZhuBBq9h5738nxUtusHJhPs7ubHsrbDi3SXwZYPngui9K4P5jRY1a8X5rqL9qcdrFCbb",
  "key3": "5qyY76tBJeMpE7UkaAmWEQx1beVdDeQaJbo3HzmWGqBfEXduume82QC4LnCN6YodzKhwh9C146avkgPmuMM6Rh1q",
  "key4": "64cMAK5pt2vfDuJBGZZuKc8YgD37ZgyhTn5Lf8tbdHyB88VpsymRmygrX1TH2rCXsknPVcU9j9g2mgBDHrMqViNf",
  "key5": "2PrnZJhc6HK3rRGVuRcGH33Y8kavs1idD4FGWArbPgSLbcaN7FBFaHdx7JwC16f3rLGuEamffdnprbs44HCGXMGk",
  "key6": "3Q2c7fFS9J1CFPedeVEwwytGXdZTrEcdesgRnpbebzzVPNL5UJTpCEm41t3fKGZM7ENsXrKp3jmrnT72CJVJ1YRF",
  "key7": "5y7WnpNjpkF6u4WPAtLhV7uZt1ZWGFg4Xd5a3w5ywbSVsYYhpjy29dBu2nrhVwTNgZ5xQnQEGvDb6HwGfbvN6ifU",
  "key8": "55TRfndRSeqH1XXMW98mHcnojATcjCy6JPFJmGRXGzqA3XRgjoh4WiLixbPXQPEyWonFTo9GQE13ZifrosMM8KYt",
  "key9": "5jChJy9EPftqsR84qdb3DuaUmYvXE9mXsn2md4feV4G9UDPSPydBdmMHuXoHhGbaEH69qCUDjdU42ztDv9kY9Enz",
  "key10": "nLuHb5k4VT4Q6LCAfmeXmnNPZWdrCcxhp7ophKRdE4KsF7KNQDTc6SqoPdsxQ9MWSXhHcMdesfLsNr1CvNPcvbg",
  "key11": "2UyhJRpM6xWZQsRyZ3WmyfwSg8CKM3TGdZH9LzGy1cCMebcnpr5KvmXxGvem6exFKZTuT8puseoJoEvbupTBbfWF",
  "key12": "3NZS5yLcQ65yrJcBLHnhqtKvCqJrpxJcQNWp5pEcSxKWjpsrsoVQepfqREjvJzqDXKgQ68DyfdpWgTvcuXFa5j13",
  "key13": "5wzFm57ytsHikL5ywtcUBrNgkJHuCJSuDfYbCjUZ9dYqKyxa42mcUbxUZzXQNY8ALzWHyzyER4JurGExfykW7Z5m",
  "key14": "4RQodhoohMJoJ6u8WLVAtCzkMdiBz4tQCGLcGBzwFSDRQ1ybjmZBiWZXEcarkdG4EJTHpqr9SHb4dcwE8zJ2foZD",
  "key15": "59dVwzAK4gbzFn6sMHB25nsT4MGT5fD5dMUaq7Rm8hRdHiqvtCPqbxfiX4XTP3npPg7cURLv9kTYN41ENCcbvmi6",
  "key16": "bBRdqjArS9VgWoX4YGVu9dazqjNEurHHwEKahzDVd7toL6vvpQjJmnEitx9oTVyBdu86WQM5be9C97MHDF9HHHn",
  "key17": "2tuKdtgjcakUE8MqaS5Gi92GNvY1YsyN1FB6yLTRKiLgumMgeNQeq3zoqGbwKYV1cdozCNWjb7Kpyi3753js8SCj",
  "key18": "5pPau7S9yF8H9Q1FQ3V1rahCzQ5uYAHgsJixN135ZSS2YMxnV6z8Tw9kCDqz6L9ReR2oH9FgkeYu7zuuYviBjASA",
  "key19": "4FsaXg1naisNfxDV5HLd92BtAhXaGyCJNcTU5ZGBrzAtSVcx3n2FqAzLWFbMYSggsFbLdUSU8rpyg6kFFB2nj3zF",
  "key20": "3HfDxjRKWfAYh9f3bP9jtYN3B4umV18MdRVWTxvgxkn85bU9zCvnpRxzZNYeiMsLsaczJnonPTPQuQEY3zgCP53R",
  "key21": "rUFx4X6p37DbPLv9HdWk4hNGL1c6gAkfC4M2KREJQEyC6ZEAm68tsRoEEyrtQUpjN2LsuVPuuDSjeXBnprfTkif",
  "key22": "3zDf1BFf5JQSzHTxGwVsgcjMC3Q4BYiQWc9RtPCMxfj7iNmtB6kUCuMpvwtcgXaz6mLMVgGT8pdFmnasLGTntj6K",
  "key23": "ozfdYyGTqmVfh9GTBuyaXtwfSfCPo4z3R5jQyhR5SH1XcDsKVkbidJiqbKGNd8iTrhxizn1ZyLECc7DiLN94udo",
  "key24": "2YPX5PMJmXeEpTq8jTEw1BXz8R7EsFxLzzxV1brSXZrG4eV9FdqHN99t8M2SxNQ6GcsSMmra1fEARVMS3hrjn3PC",
  "key25": "5Yb5Q39QnbAL54JbyMN3o5DbfEJymd7Dnnmdhy14YGxGkYamKnZQcPCMZ44RKwytVCA3MRH3iA6uCdrjrLRwFhwv",
  "key26": "3HTr28obdvnj2K4mvRms2ues4kSS6tr79AetdMqa89WrVncUrFviUFPaxqQUWdt7DNMMZ8ehsQHAW747EE5XbsMo",
  "key27": "41HXVVjSJxXc5WXesNggtq84EnaQLNAL9BLzn33LFQN3G99HjNt4snBSH7XEZe6CemE9sfcP4NNBknSEtZU5deZY",
  "key28": "3EGCYxuDXX2TWhvzFSPvX3KhQmmYgNdspVdQ2NvWyZJdVrgrBZC9Qsaymz1AgDDEz8MYBiBKpnHmVqRaPxg6zdZw",
  "key29": "TRWv8bZxk6vmeqQMYrpLWUxm9huWNVXARVUHYzFixAW6ygVa5eAVKW4mpGW98tWnknBBGbQtre7ZWckh3wb16U4"
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
