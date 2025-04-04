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
    "5KsjVjK8NGG8onpf4RWwxJgQW8dx2TWo7mE15Y2scm1Ww3nr7JQszPMcdpRJrpoHi1fmvBhTwp9FUBpqqCTp1w8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBgeDFwqYkkBGVb39qo5ftEneX1y4JBnnDr13Y3FcFSJbidoMksBdMbW5Mrjq19J3NyDBXSQMsqbLvFZrtvricY",
  "key1": "4GzkJrnX1ubBLEs315moJ8on47QGtKgs84doxJB8Bqck6zQXL1cXXhx1jurWCPvqpob5o5eUhYxKwTWMzP8vNjio",
  "key2": "QKMi3B7BhVdakuxcCmCn7nJdnugmqCFL5oNdHRskNn7q65tgmwfo9ByvrG2Sdb93aoFHtn9VDJvMm3iL2evD365",
  "key3": "5P3VbNDMFJKJ2iojHEqN7VrVVDuksAdzsDrKwPxRvEPtXTPmsrQBV8VpHHZ81QhBBANmXWHWTFSGp9r5BHXYaf4z",
  "key4": "1fQzTkedSqvH3RZfKMGizft1QNTo9k9vLtqFi3MS1EEHKgvo8xxXtUpTnF6Ba1Mc6Guh83crVS5CxSudkJ5v9Be",
  "key5": "3NodYPYDcd63ur1JSr5YncpNHV4tYyGDXy9VK4tDW48bs95hGQm4kCeuEfm2nk83a5sfGXTPJ2TZnxUZSGq5VrbQ",
  "key6": "4pEmM1cfZN2ktBCB6xxDY69TvrCuAT48ehBNbZB6kMvXdPTzVD81j5kuCvDWcEKdZCqsC2Jj4DHr6o2AJK3UpKLX",
  "key7": "57ehinCC1N64QrCSoWvmZQjg77GuxYgA7pkczi6n4B9DsfCJLq24mA8M6AxPGW89XWcsY4LsC4pfh4TU6oAB6Lvn",
  "key8": "62NTrwSQw6LYxitLT3XCnq2mKtfUP3PsAPe1ZTiY8quVrvn9PL8hortHsCrA3Xs9pEPZVhKC7pXWfXLoPk4gM3Jb",
  "key9": "5g1L5RtdCFNcAZhFoZvi8b8yMgedn1xt11AW6xPnZigJWgtmPgfh3ruQzHnQgMVD6Dbd5sAAUjHKGyjUeJa8DvHM",
  "key10": "P9p3tLw6fb9qSBbYkjzYSXZXrwanSkaZfECDdHoe38PWN5HAuYa2ZPNh29E4Y9Tpoh4xR6yNCsvvAtwdUy1DT4H",
  "key11": "4dNpNqynVH5PNgJpbZ2R3DnTGYqHzUkYJ3kA4jwWfMkTN4XSrJfyJ1HE7RC2n7y5EyGWzRmY5vnDs4F5cbwjTxuP",
  "key12": "2PZq19BiyhodKXsbjxKqt6eBLm244q4MSMhZTjBR29jyzUsqJcrwS2uJZcEEXVCmBSfbLxpbFVX8SgUDaZt1YPwC",
  "key13": "LpkX8WoHVHpQUvDd8A32WjCqn89UKUDJG7HoiR6Uksz4jDt5aJpAUzBc2FyAtHKjN1CNxoQZGFm5J49YmKddAgH",
  "key14": "29EnDPgCzJ5v7VoEUm61JztW8K2uuXPAXrDVCuKKnFgLar9x2V2X7JwZmUb1nwjemYSnsKWuwcRaQhtZotUqwD59",
  "key15": "4TGR6ppfY2J74rC14P9E4Xnxwz31AjzLPuWqzGwSW29qEHAwo64acje7DWgpDw1Gk3kgLPfpdYtenKotRpZFbN2d",
  "key16": "5NZaFPdf2q5F8br9RwBgYtuf4ygDUkx92rRV8UPmsDbkKVB7SWbyXfM8ff2bNkwFXSaFL3iufda5ZuGaiCGdY19M",
  "key17": "3qdPsh3AiHNr817Rfn33ihem5hb2AZqvVria6ZaSsm5HLhp5r4LxbEsiZQYAxZ2pMHbW3gypEykxGiqfJKCdTsyG",
  "key18": "M1oXRcEEGqbmc562QdUQnXWWzej9hH7dtmAzyf9giC2DGFqRkzroYMQMRezj4BR6BvMUoQALSrFtj6ZMiSmDJFP",
  "key19": "5h5tVrvZyhy8QGbPKaKdPgsefDgCT37cRERse92Z5UhwT7GB4pAcY51ub4R4nqpeTKBXkspsJhWyLnJKbC4osVAK",
  "key20": "CN5o2RiQEPmVeeck5361QdwqXST3cyiqRWcMg2neKiTRvVBia4NkpAKq4NCS6z9mNEbu9zJT3bkEci72q9AtXLu",
  "key21": "4YcePoRDjL2Nap9o9hZCeZ4LrK3MoQT2Phcwg7TnabaWmHhVRpq6MvnjupcGbgzxxV4BrirCWs6CsUGiBsdPPGfR",
  "key22": "2ayzRZfk5m2RMQh6vJBmRPysEDxZJy1XhwDT429iAcmxME3XA62348QDDbETRSGNRorGjeinpk2Crh7e7j68VFn7",
  "key23": "5eQ1AEUWBxDHuvsygTkMah95Q1WbtmG7EFc6iYdVQQDUdU5hEkHD2PkPeuZwqxTkB9bU6hMtVMSnyq1vTRyXTXaL",
  "key24": "3o5iu8tJKCzrDnoMPbtKTFjHaa4RsuVeds7nzm2cppFDxQqycf9nreRc7dgWuUCESpDGwoirdgUpbrTMCTDJPv41",
  "key25": "54hubCijUTFa8fKn73zfUZ5dDfqBrdZqf5DhYFPFgwk5241BTCTFHjqaWRm2snNUSSF4B3Ydr4gx5SvXuDKppWu1",
  "key26": "2yvbLeM2HP3Ci1wRwkou4JzzanobS7aiCaBv2HEGyupxJX6R4TAoVUmEisX6p4Td4hpJ7yWqt6UrebYsA5muSS6p",
  "key27": "3bRvDnBTXTvkt94h2AcwfeBQhMcF6xYqZVdbSK1YA22DRGWJ6JTJEKDQD22KVLYSasVKniLvaAvSudy1pfzjF1AW",
  "key28": "4iWSs63edZD1RggjVdKVYCsXqA5i957DjrKLDRh8SByro92aFZY2X5nWCLsJVqhUeXUPjGGX8iFtzYBCApATVjsu",
  "key29": "216Ev87PhdqYmGjQ85CtSsWKVt344ZpPGZ2oW9nMsuMkvW126V6SNeuHkRcj3TjqmePd6rGqq4FCwTtpAaJfJwFd",
  "key30": "5Yn6rnLSR1RzCmFoNsGG6PDqffetJnz6yExPzL9VRY3ndML2srZwCv7GinETFN3twpHjY3BJi8uCYTr61UAR8Spw",
  "key31": "3kvYby33a8MWpnP7J2AEa3Rr6nL99ZYTijaTS7eqYGnJ9vEdoex6iv98fDn4S9so6rX1UiXnZHezXn9AYdHZwNwp",
  "key32": "9EMw3Q1VHQJpg1B8Tt1DETmVoGp7NTggfrHqssBRajzz8ycF6uePRDL1yTtSWnmjRwUhSYJRDgJJgKRJhbPgPwN",
  "key33": "3xLLiBppwWjRgwadKsirsjCsKr23z8xfDVu3qNmJUbSGoRj3x9g61hiLmSoabEEYAWNhxc7PQb6RYLSTUU2dWE6o",
  "key34": "5JwL9RBkartjDHcWqH4q7zDk2S1sLD3V8H2CK6ZA6eQRd5fxt1unoaWxiAXtfJRHRSvw75M5PAJ5ScFj9yz8mLJP",
  "key35": "5EMp5cM4swwJDV5DGWUBp5gT8QLdMFXer5jD4e55rZpeXD9XhtD3VchKLci2w5otWYjKgDBn97Y87JJ9e58xzEW6",
  "key36": "4QAaNfue8Ws3KNU93aiUKb5LKaE1iEM5wiFtJ1jhvD6kTNmooZ99Z9YyEJDTpvWYMJjg13N85HtRx4ES3oCgSfK5",
  "key37": "5YR1kQ34X6qsW9TQmxz1aPqRxEKCfaCsaUjXKaNGFEK5m9TMYoMCYa88UF7g6ZnQDDGr8LWVaja6Nm39UZnkhndv",
  "key38": "4e3ey4YjA1fgvZ5XFv4kWZYeiGukvPWg7pEnpu3UesskkidyUop8oTz7Ay6KDu4XWP5r9a7BoZmRfXLgesTdqeJL",
  "key39": "wNNqEvLJmb9hTKqc8B1Q8dvwgVeofzGzGDRs1yB2Vr6ZNvjye3VYvFFwewdi7MBoxJcTygVbvHK6Wm3n9x2NoM9",
  "key40": "5tHAMcPPNb2h7YoFMmyig3ay8rDSXUTEpg1mhZC1o7ekVzwkFX8tHJS4ydjsX5QF2rxMU5fFXvRCoRUCjeEyDfbj",
  "key41": "4QJ9NFYM1XR5QH6XuyXVtGn6VLF9FfxAMZAxhhqeYqKDzQuyXrJQr3vKw9v3sDoqH4uyrWWTncfzpbTKFKKEmvQv",
  "key42": "2zauWCEhogfHZHiZ47xAJ5JRaUtva5WtbUFECYLs26StfbMygTyR5SWdR5CWbuiXdpyZpb6tQ5iDLjKGwaPuqGKV"
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
