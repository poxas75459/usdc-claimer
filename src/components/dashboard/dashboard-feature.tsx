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
    "2mdZRMUFnJdgxpxde8WbhoTxTKfx7Cj8Zj9Z7HfFQsX9es5nxDdjXfYhGcYq6D8jz5NntkJX9G1AgSAgZ1T1rSE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585yi66u76QywtiUbRednYAwe53nHPec6655N23TkrdibHgEQ5XvHDwSMhDUXb3eT5DkDTkYZTLaaFYi4AWgLcFq",
  "key1": "3sD2wvKt8YjKALAew6vyNMhb5wYBuxYyFMa4NNCdZeZ9ryySv1dhSvmj3To9a85pXDzizXekQNynVa3FLWuyns65",
  "key2": "Ro1ewgNddmfmnDqSdPEP9DJDPPtaeFiybVH225qAtpjfKYuBs8WDcQrMB3yzrpesLpArr3h8CEipfMU1mR24iH2",
  "key3": "F6EP3dNzGbm6tj5u8bizYYp8vx26d9B5HSBzVZxQyZ1krsZ3vaWVUvfSASzUMGJQxJV56geobXcL4ZGjWpXjn8M",
  "key4": "2H8poUKqTo2AoWrBdhF3C6YiH5LPhPLbSdk4L7McZG6EigPcJoGeTcTCEpubGoksysFq3WF3iDBa4rg9MgD5hWcg",
  "key5": "3Ta1KPZwk2p6daHXDyxGy5C9UtUnnwrSsakzgYYAzC8F4W2QLqe2MPAX8JwskjFu7dHG1jJUJSFkZN8d3sddWpPL",
  "key6": "3VsTDxqn3b86Xw9jRNDRF3CreXhvUY9ZqHnqS3FpBRYGAv8pMEpCJKudMVGkATYn8sXpMXfpmD9X4osZKo2sU9jM",
  "key7": "29FWJe7pNap7RB1BVmZhfGeRJwYJaptb8m9eD2BkgrJVSYZ3K6MGo2XAxYMPR9asAzKm8MpeQBPi9BSnL3K2HSpF",
  "key8": "qw4weSN9XypQe7CGyZA8hmDrkkikPP6DFZpkNFMoVJ3ZHhU63sKvgufUEieN1M5VRbh38ag7eZFjt14hCnPuMaL",
  "key9": "N8AQueZXnqGbDo7aT2VumPcHka9YPd2rGBpjFAVRzAR5pXfzkhQzGaSAGpXpAsAmNdGP6JqRw5NLgqrYM6aNPrH",
  "key10": "5fMnTeDZbdB7akejWitseBAx1ACQHfgLEKy5MhkCSLHuCgqSRQkhSmBzTcbYtDeSjKkKRPzqqgYsgeG5YAVbLbkB",
  "key11": "3THwTEy8CGmvYm599kQiUsHju4Qw3JAjbaRVZuxeFx4ymvNMFQrqdccBBqaNTRLDejiqmbu1bJ8zmtZR8RpU5taQ",
  "key12": "5cKWDBfuQmpLYztFKbzFwP8MqzBN5B4HHLGrgBZZ2Nh7gsLzq6bwMNV3puvQ53jDYvPHUK933ra3fvcej1dGoaQ9",
  "key13": "3q6KWmKJx4D6yMsNTwCfH92zqoWhjUs4wyKVdMczKFGohFv6t6kW9phPdCRPt9G7x5yYZX9geUFzaHKPnSxLNopT",
  "key14": "5PoDK6npq7jKUs6LAxYtYNsCW9CSu2wu1Vn5gyJ2FtMtrExRnuqnUVVbBSsV8JScHGnGjtxoD4tZVUnfAtE3qbQb",
  "key15": "34uFddCgHHVuN19mbxKbGbkZWPXbjALyi6CveiEKD2GvaaPnvgeRW3CTfcfB5thnFEqNKBvpseJ2srHZZk3Zah6P",
  "key16": "3DPoUEUFrwezfBi1GPuyHbsQ5gTyGEArLCicSjPGSy4mPBdwsq7k8Z5YxdAQR9JWNHqiRNzKnECKBFYvuee4c8Lf",
  "key17": "4ayhD7Jh8GCgwZY5vettr28RUuSo1i2Hx9UMWLtRoR63GGX6n4ZAW4SPC6gnJ42ssK5nKY5m1fDSgw1qzPzSXbmg",
  "key18": "4hPRp9biMQfAKxrVGtwkHQnXGfMfuwj6qwhzybZTp64fSJsHQL3wXKn7gtgoypfoUJXuNapmn2z9Ujp8zYEekYRZ",
  "key19": "yWUs1Uy8JPdy1jVhiuZcLGN5EvxCGgZbWSPensDoiEdpxhZcnxuxgRmy1y6F3fMqZf4QfnX2T4XYAaridV6ZxPc",
  "key20": "2rjSbsua59yE6PKUty9RgHMniFBk1JjYWKKbvmfKFKHmhkDVehGdzarwhraxZrmtbkwU3qPeDuJwv2jV81m8J9ua",
  "key21": "41SxFbamKV8VeHW4vo5rFPZHFWZHAGdjWh39ewATmfAisemGgYLugWgg5wEmFfQTVXCAd6AxfvAuWxVfkq8Q3N79",
  "key22": "rZBe44KnjCNjLi9e6UGx6AczRutWpJgL47usbNtHQFUeX1BRHfq6LfDei1nQsQrGEPjfmZwHjkxUoXeCcKmUdAE",
  "key23": "2F23kbNwYMoqKmJE9gQBHspY77ywFzgbT5jcimWHGijVWruKRxgWbutRSV69TgqsFZnrU6uCv5bJ8fbXCBycPUCK",
  "key24": "smFnuFc51By9YmX1B5PoUDtdFgo4eVXu8PoYa4RXzpPJbEdgoBtxbnyX2SGnAtuuv49qniF2YvSM3MCWRRDtqxn",
  "key25": "2wMFx2ZVZFADCt15Y2PNLFMm7gsrhmctVqAMkeoNGS2X9sT7WpH3xCXERgv9FymjEV6qkwKcmiQgLboA87Ny1xY1",
  "key26": "3htNUZLsy2hgmVc31RZ6BbbfbY2oErGa5v8fN3gc5ocBTtHVPZVtVPjrMtB1fhZGtEmqXjy6SoTyQk41t7HuXrwq",
  "key27": "2quxYeRki3dvCKg5eSBJRzZRKkiEtRtATMK3Q3nfbcX5UrFRLbfeWnyHAJL1tX7LKL9TAk5MasHwg9vZBtzB6Myo",
  "key28": "84Yaqp46LvUA4qf5aHFS1TePVivgQdpoH7SWhJUDD9anixGXTpSZfk6mv4gKMFyJ2EMWNndgbAZCfZWqe1Wstez",
  "key29": "THui5dA5VarE8qGzQcR1weALu26J5RYhhwNMEJUVDxfhWrSz9MwMaUw7uPvKMWMnnoV6TN2B4jrhyUHCsFHgWif",
  "key30": "5rXDCAt2bVwMYKemqMUkUgU1GLPyoduXLgSU7NeifeWPEQYUZYEBP67e2WUVsdtpcxZQwFcAitem9ghZ9hU3GFy5",
  "key31": "3k2ypwFYxJUNg7uMNnkjTRd6fkf9DQ3uk9J4FPp7FKqFDEKW6ZxPntFXGNfzGSxvy1Jj2ZgT59Lbzzp3ywFik8M",
  "key32": "4geaMKjQkRCKAzbXVp4qezQGJYavB3PF2PLXnYfYPBwYiRhmx7z9rCyoxouYxq66SNtZ1CRVKr5T6UvFScHqJnSn",
  "key33": "64UVnicG1k2H9gzPpJmiNXCpbve7mmEKRby4H7mWnfTZSzR4gSoDh5HUyxfrvFT8fHWhaFnprU7RPc8nhAwNohjd",
  "key34": "2FLqb154vDZpB3KJFmBrizYZ8A49HvsJ1hgTmWE17hhVFfaugAJcpayZT43gzrdVmP2dDkUZA6dtZyDnJVbZM74i",
  "key35": "4193vAJgA4QJVb6NyTDCj6vQgQGcfTh3PpwiFdCmvhzT4jEdLXpe8DuNsQ9NmRYPGcN6gseshec47zd9hzUifAXn",
  "key36": "56jfaJVMz5jLBDCXTnzBsMxQBjz7XjtSqMXXy4dQtuG4KYN32uRtvgEVnJsfQHku3NWe3MKiVHJ5wB1TKjoguGHs",
  "key37": "4eb6QCu662RnTcZfqfDaKSqzEePYr5YsmPcEWRbs8Dez893jPZiW21t39tkoxjd9mTXWoysDHdyWYhgem6fCernn"
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
