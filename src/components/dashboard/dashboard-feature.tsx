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
    "3q8W8Fgw6xc8Qymj4KiB1dQbejCezDzFxagv932ckr5wu6FGo6zNCkDkZM1RCokCuHHhtawr6G3c4WnGHUe1ATWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7sznv58X8QgPZAb92UTn4H5YN19epTFPB1chedjzNWaKeZr32tqqRv7MprKzFibjQzCtB1YAfgPQvmzaaCiAT4",
  "key1": "2RBM5gqtPpL4KFiCv4hwJHZzmCy8JzvxQY2QU7xdbdCnZ4g5iHwbF7cNZwrt7uTVEGtfF87trc8ZhhvTzPbth5Ec",
  "key2": "626mx57LBd49UeeXquX3jdMVWxnCeHVkbVkCevPQXz3r3fbBXhwNEMWmPvRonYvWM3TPvS7pk7sMs8ch93ckU8xe",
  "key3": "4uSausgviBNjnoRaejxBMCDVaHBeozW6ZvjLAa7gRv6wNUCLqytH2jQHYpc8Y7MnyauxxUVTFms2ykDR4EnM18zq",
  "key4": "4SqLMM2NPLKeAgdHwcYEoCTemVhVRz5yESVvGRB15jgreaXJBNGZcr5Q1WH7HeBWuJ1g1jc6p5TrCN9VpPF8xuMd",
  "key5": "oUvfUJDEWj7RfJch9wPEqAcW7a23V3tb9XXtzDMR3dimwGenLiykgM6GURf417b4YoKJN6xEEK6CpWKWTL76uTz",
  "key6": "61ZqCYbCU3TAN9ntovUJrmU5GhTuPA7vfnaJm2GBFhGBAFNR2WHPhS147KeAGU3brLcYByQWaMVMjDXfM2pZBKPf",
  "key7": "3azkm6D6v84p7UwwWW8Pz8XqeosWc1KitG6tn2DqDCrBJjBkrvxQ6Mvq8AszaTCQUNubbZBh3Q93F2RG49A2K4oG",
  "key8": "3v7y1ij7iEWz7FCWLxtz3kL1XsPPz67sKgf2As9nDDr3VvJDgxkHgnZP8GEdk3Xm6anhWgY1GdaJMMAA1SU67qyK",
  "key9": "5kyur7y9WLRW39qpkF2VL1T1ZeQ2jknvTdfYwNT5bDB93S1UeKtEq6jziUEHrR5MTQq377JWh1k88kWoFzpKk6Vp",
  "key10": "3qUeKodD31TaVbQDqyrMSxaZpfiNDPX2F9833Kkf2atUDK6qVaShDTfZexqrKt9WwpmQ4FB1hQADUe322vwmJLtR",
  "key11": "2ExMuDiRvTh95zJ711zzDo8134iD62fyTqV4fFSuBfUDCAGQ8vZantkoaFxth64rjSTJa1tGdN5GX6f7g6SX6XPp",
  "key12": "5ZrVpRtK31sQdcQxDZ1T2h8hkzUhHGJSUXJ8zxVbxw3pLzYkJHKWvxabxD6QQpjH5UvHYn9BpBmZJs16KiZ7ZSQ7",
  "key13": "85BHmPsqPEVC9K1wvNtbZ8ApvMndWL2t5FQ9LNTAtMviQQgTaeBvb7BQ1pzC4LucM97nTVePB2V98mm8BTQnxKY",
  "key14": "42676gv21TU2Ca1imUD9QTZpbHAS7niiZRXWuQDYuZXmkLDsVs8GkVdH2tgNqeggFhazWyPpC15k2estsuojywSF",
  "key15": "2JbRxecZx7MZ2VsVLnKewpmX8LiJhMsntSjDCLkHcTbwMHR3K44te4L4gSG4FyXEGhZtmdrxvt3DThCaqZGe9c4e",
  "key16": "5nEuRewQAdd8iU4ee6Ug4CaPxG5WNPJvZpCbpZ95boc8i5rxnu7gbeiUm5YkYs8WW9aiXScByPKVLaReCq2Vqs5e",
  "key17": "5MWQc4c38yPkQAvgiAmeJWxXZr1hsEwUX8A3AVfw6XmxQcSK6GeGqfRU7VLTZZLAQ62LSAfdLsHKuW7S6XknNtwp",
  "key18": "5j6Q22xKED8yLYZT1swcx8PFzBxbp5jYE4fR5v3SkcfW1EhpheA7pSkXqbPvPiL2zzcpUuMaSf5RLgBVT52Fb83F",
  "key19": "2ZpKEaRzhKCj921Hng56py4bbYEr4wVtDmRDLfsij45Ax9ieZvUgQ31czUR81ga79P4kWr6jTAKL9PJNkJFeZDW3",
  "key20": "4d677CS5Yudi6RXZoD3Z4PtSdo1Nbsz89JkgtgtnbSZAM6u3YHrj2pr5szQ1e4dyTNfSk3ZrbejfNtqBEM2s1wvZ",
  "key21": "2XdxRkmDaWsHADpb8uBWA38VjdDMwchW1Bohi9trq2VzMbWaaV3X3JKvqNZg9RjNJSSLDRwRLXtAy9RiSBcUoz6m",
  "key22": "2C7n6oGUgD5yJebL6CXPe2JA6QGWVg7fUrsXDPbWa6M24jJdo14CaVXhHMWSRnvmMg6BFe9Hs7HftQ5yeWMikaCv",
  "key23": "59R4HiaDW3PV4aSrAcUDb8X3mTT8haQYKC1KnuJQBkvy2qcaZMehdsV3xzBSUexJxFFvdshMmASpN8YYTbNhWmVD",
  "key24": "4f4VaAdc8Wi4rz61QmtNrCv8fZHpJ5HuT32F2v49yvhd5jgzA7No1j1T2sTzm7PVNbcN3GxDgczuBazhKcdXK9Bx",
  "key25": "brJAkHAELyUWUEGEBrqzZMhZy71N3JBzAmNVa6nDC4oaXwMA6cTXBnqD6m1EWSzYfeiSKoASyzaUhaT2cWeHUEX",
  "key26": "4Wy3E1N5QJDiRGQUt81SV9ryS1FRm5pJp7X8bfVuFripvVbv4VsoeJQR3myKnt77NLf9Bqg7p9rZotjuvq6v5cFy",
  "key27": "4TYopEo1NTis2bdby7LhSwXRDebnxmCaR9W61iV7ZvpGy9pqmXMq3xQJ5fP9duWQU8GDbEeJQbYzqLzS9RTMbapt",
  "key28": "4gXG7X57Qxtr4WBJJQ5YbeCV4LUuW1ddJ81racaARogB4DK29x3iiwcu7f3Km9v7dCod427J5vh1op6vcuP5aMBV",
  "key29": "5qg68PbYh5ED3tpEFAxjBvcaChmU52PTSUqYEoYHMZZGMp3pafCn1Eg3jpMvrgTYXfjkpZXhz1cAyQDWAV2Za22c",
  "key30": "3APfQGwXSLTmnnnhDmPvmBDmYkX3M78KZnaDorALxZ4Hh6Tv3uRtECodqZZ2scKuYjMSpc43W8vwXr8b367hqoeX",
  "key31": "5zbrdAV5kMDsT8AFq5wXCctbNkJaR5rQoQjkMJg3Xd9KQw43CKqeHyqL3Zpts2Dj7WpTB4Dpz8xmHzcVosSH6fkR"
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
