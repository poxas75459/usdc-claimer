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
    "8aw8sTTaKPNJMH9acvbgGs41u2Rtea5K7wbmkSfc3kRm7mEnN8zmAphngXh8BSvqqHruEdPuuUNKu3FT6J41kJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFSRsRRmhx71myryRFA8uWMSzQ86FAgYr8iSbcoNckdLqYE4fuxdkUvcepLuM69Jk74F2HiUbmiM4aSCAEADVYZ",
  "key1": "59KdTiQNvkMD8kp2sDYeXYnLypWBgpoHi5P9KnEyG6Rt38KoZSuf9taAEz6e1s3cHBh6XvG1eKKb3tetdjaP4UV7",
  "key2": "336ZmCyRxfr2YerNg2Xk95wVnCuYfbxWB39FyfMfuJrWpzjQeguWCqtJyjMVKM9rpfJb1fKuwN2GGhxPxZLmWTMy",
  "key3": "4gZiXiy1DYcsdzcu28iJ6hF68condDewgg5k7MQCt2RVNN1NAP8BPFAqZoryNDvqUbcXy2yDcUVyosq3HUewYRGb",
  "key4": "8ABVQrA79n9hoBKeVrKg4hBc4hQrJ79idoJo7iVv2ZKugN63cX2vVtA2mMkGFoD1cwkV9g4WGG2Tu6UuGL7ZivP",
  "key5": "4o3QQnLZ3gWiCucApGxvFoQtQ6a44VSwJkMpy9NXJGYVuPLCPir1eWpzZxTUtpxmJbLdSaVm5ktmQaTndPjkgzte",
  "key6": "5Bbjz27jrkQtvPUJF9E6oNoH98dhG3c3gaZNgyE21Vbuf69Hy2JkoFLsiZqr7tZruwyzsGKDz3bhQpzzZg39aQq9",
  "key7": "4NjQU1EtFDZfCkSjjkLw1mpWd2g5R5nJgTSeh6eKBwbHd6rBnWRQbm9yxhtPaqGqKy7ez4aRWs4Lmzf5X2LXj7FC",
  "key8": "56Mf2Le74K9eKAYftSvLU4EEhYo81VvAMMQb8SjZP8n8jjx1onobkCgHdxcHPaKgGz7X31wyiCGWC3knHNNNL8Du",
  "key9": "3R7hfzmRV6Ga56MqXWvV21o7cBFiUkwM4YJhdjxYktT3Wn4iutm5iK5xJ97WCWdN5ekth6ftWphXekD33qxifuj5",
  "key10": "41eGFEq38kAaGtoLqBUXdsggTDvFmZMmBPQUW6xEYdqfCkULKNZPrxyX7dWVPR2zibdc6pb2tQNdRe8ogXKSNVg7",
  "key11": "5razzNLtJzwB2XWG1ZgMw5B7hSUfH57b8Hkwr88UnAfcc7NzyzRVUh3iG8awPN8w5eNawvux2U6zLwUiSUtLhJMG",
  "key12": "37Mbf6MhWEjYKVCeBtMmndsX54ohccsaM7T8NWYzprqPa3iCb79MFFpCjzKYU15qyjVMWubaD1jZ8tawwZ1DBvuF",
  "key13": "2yWqoBgxaQoBYgDNFLkjMNrCsFZD6UxvqBmrgDoWZAELKaUFMQDuWbpeHVbKuDbm41WMYxN9zikHxvkXgKnyLwcs",
  "key14": "5dUsedbfMbrNc3uynGeH3m3bkDSVAVVs4LBQwWrjvt11SB6AMPV4B7FHsHmTwHGFtXq2tjJnJd3rxmBiVQQiXN3w",
  "key15": "2LKYpbXtK5b9SnAef5CoRNUmvmaBeJybXq3N2KNQGdjkkp6J91bxiA3ruN1arkkjwCTtaHAnjTPbm5ksxj9bs9h7",
  "key16": "2pAEZpFqQfvSAbBTQu1ktobS2DCRSDCn3AYaYv5bwf5hJxMNhuKB92FrSSkkcuFv5h9c42tSuCZYhbaZisSW5HdZ",
  "key17": "3bz89bMJMzPkyFqy2yerNJaFqcEnXBgVLgahbKXuSdPZsz5hapUXoyzJ6ptXXmfuwbbEFqN8Sz2ijhzsyRpqUTdk",
  "key18": "36afckPoAx566spp2b3PNNiVoGbSYj66iR7iiwjyaAJemHC5ZYVhZWPDc8wRzw82zEVJdpADFQJRTjWNyUkeh9y4",
  "key19": "2CaXhWULRM4as6TmnYgQg5dJeDMMWhFfGH7xem96Xc14rTeGC3BUxkB4ro3yLzsu6PhqeNjoMLMy5z1uwBpJZf5w",
  "key20": "3WfgqQZjUQEzGREpChNTvjdrBBsEJe8oESbipLCJ1r4yUEu7bLsHCevsvBpyMgQ5Wbi2bVesidVd1q3kWV4VpPs3",
  "key21": "5TnQsbuTXp5hJT9dJ6hxyJcqqh3pfnRXE1j5Pt8u9vHzEZNqkuhpDhHgsG5ew5ToeaysQduj13gcjMJdfgT4gPCb",
  "key22": "2kuYUva39es5JpRQ31piP57EjbKJC7G4Ae3A7Av984sxSSTBLCvkBpG7QMcELQxnscasuvqZtVxQmEHnmtyxcxQV",
  "key23": "3ArubNzEF3DGD5MkxYEVTuSizgxm7KkxH7ngNDLh1kngjUNkXMey5w6S6eCpXWE7dKR6CMqHxRah1UAmpbMuBABP",
  "key24": "35qfsL4aQxfr2CWTuY8pX5cRq2s1ZuZYLoRpGkGEFBZDjr1NefbvPamNjj4onMDkNQ4ErwbmKD9zX9SGiX8F5ssa",
  "key25": "D8JUDA8XwJBt51YS6nxjxjAXBf3Kyvmgq88nSm3Cu6sPsrHBHygusbhP5xLhvDRmg7vDjedvVrVUhBRcxLwhvip",
  "key26": "42xVWoopof4GatNg3upZoJwZkRQUJ6srE93MMchK2pjZ6J6eoC3EvFtQVA4RjPVeHjNLujT6cB8RbxJ1anb4Htjr",
  "key27": "41PqThYmYov5uCMAoUqQx51AJkqcVVGePVSV22w9B6YTJX8jRCewLhwvdL4FBuuf45XqkzrHntFqRMJKSiHj3kCA",
  "key28": "54B1akEm8bQtPkMdLYNDMppp65p2txSXDKFg5MV2zCLVwB9mto4E7wycu2TSLm27qA62FC3i2MSVckhWwFgjfYBq",
  "key29": "29oEjk9L8ABBECUjjqU3Vodg8Nf7gN6ifYf4JaPjDiLTqBJkbKK4mzR3dLmSQX67Nz5RvUsVLNVGuAmCg2ramTBW",
  "key30": "2DqkhGN7iqFTVhKeVDPwzxnQGX6xwZPXLZ5EMU7zGWKepNuFyhkXMcgzRmMN3J8B4VVMDxA7mjbiwfNQPpv8EXM8",
  "key31": "5uga5NKCYTsbJGwRA6mFiySP51sx3GZTDfwfWwrkJEPrTR1E4dN8PTHtZDiyycwbYkvazTT33GBL2pjUgK777571",
  "key32": "3ny8PE9HZykpMVq3N35dzjE5LDUkLT8odA8vPb3fQQEvhdrD59tUQMiGHbjJ8ZREemzwp7dtCCivva9jN5Lmo8Gt",
  "key33": "3aGjAvxaZToUiNszQxW6SDU3PmtBfE14t3Lv6bCoCPzwJpm7YcSbLURqcMT1j7YjesNtexWYQ3XWMT76bJ4SwkHR",
  "key34": "2HPSUvosK7JGY8YVTV4bTihz58RX8sDwyXtVNJ6pakvBGyRMGthuvd1eHuTKo9rVWVdE2yfMJfcjJVP3U4Y1p7JM",
  "key35": "4CDDTjrPQBPpFAx4LyJdwfVZRobQobJBH9PLv6WbAUmZxB843xerskaPYymMBBJJ5rfmnV2B6FXraYDWJgpZEi1C",
  "key36": "jeW72sN54i3aeW7ntUi5hL4MUu2gYarUQAdHqMtQn4142DK5PDUKoxJFzEPmr6e3tvPRDFHhzvACYGPXvfekQhV",
  "key37": "2ibMtoEE2W7kksnoSQNSdzUaEWQXDvCGrm4aUpKKT39xx5za2uUiEd2hTyY6ipKw2XGizDQ6C4YSzDnqe9HHtBFd",
  "key38": "27xvxuJq9mecbnx5FS4ubRafssVLDiJGw72ee1aw14FLjdUMXCvJa7Juf9G4m4kmCTH6SAWYji7pSCLr5vfG9pPu",
  "key39": "4GFki18skzuD1uq3cFiDTx9XRhjoqD2WpHxFbTTo1mPHvWfMRLv2LV8Z3psYvdkpGmddNeFwdN8QD58jCFgW6gjR",
  "key40": "3tp4BewgLdWJoZ52FVZyY193hSsHcJdCoxHaoqvKgvrmHkvqbNYPETXH5gnadxXC9mEFgRphyg8fZAjdVPYY9hCk",
  "key41": "2KJ31C1o8DhhEWfxCAjNpEJThnRAkiY1rnB6QcXbiVddmnfWeEV1jWkwbdky3beUsdVihNPhrg4qzsj4xaYET328"
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
