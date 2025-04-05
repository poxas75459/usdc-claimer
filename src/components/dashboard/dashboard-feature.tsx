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
    "33FoAfYqs6DVzQj9oBtc1DoBmsKnKi5Ss9dQ75h34mwJzz2gYUFKwn7A4skUxpXhuD28PCdBpKbXVdG7utDc6rLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6gm6RKnL8cm9w8JVHrtYx7kcQuqZZ9VLU27yh2ecJgweehV8LezZMq33fW1rFL1VKiY2D9kt9xdmEhk9mkY9aG",
  "key1": "4jgMTLhwTJ5qWfa9CLnUtvdEg4kseNAbQKiUcowoyrnqihJrdotFYD9aKyhgoquXcSA2ZKAyNbgou5Lqomgf7jJP",
  "key2": "5sjguMMUAn43FKjRHVRUpEXwXnMccCYXEyDzDX3q4ZYDDnKyN88Xz36UyRfbcbD4om5zyeXfnae1hZmsSvFfZCiz",
  "key3": "372dCp6K6fFPf5QKRCPUifp5rHq2Yx5r8x1hnssqUM53vBicEHZgCJT8H6NVGmthqigCDmJzRhXPgMEb3wNWJhaw",
  "key4": "5SptezKwMW1twZGxBNmVxpNKrwt12ZdrJ74Z3CVhpbHkhZF1vpnrSd36vseB5a2HZP3LBosE6KgXRb1SAY3PodA5",
  "key5": "4egzjRFiRhEMD4robKAMwaJoiM1LeDGkv2rQAyz3iwtgwb7u5NHo521qgjW1TVSMajUQvbRtdZihpH5KDQLGdJo",
  "key6": "4YzYUUxAtZu7dJMFymSLsmpyJXnjBj6L96KhLRYzb6ReJPSJUNnayv6uSYgr5YK6qXvExfnwyt9AaCHB1GAwvJyK",
  "key7": "28BDYrYRr6yA4VFhC5bfBxQMrSECxS62puueXWPtKQgCYbG8fa7GbDk9FungVvgGWUACH1RKBEMb1ZmRU5LSsH9Y",
  "key8": "27pgATuhu4oRHMbs9mxJvuaVcjVw4oPQWZTqZvFnhsKrFKEy9ssXHrpRSczZ79qSCc8FNrv7um1iXfCSSfdQvopn",
  "key9": "5u2TsJcPhqmGC3Gfs6jgNqTWsb69ApmoTXvnWEL8K9usrSyxpMqiY6iAsVtDj2QJ7K3DH3x1yVXFRNSWqD1WX38h",
  "key10": "3Gi8okaZfUCGXEHuPKYj3afonmoSXboM68gduxUATYeYsPrUYPFUtazLqdahY4MDQCPKUdQR4zx6TboWKmH6EkiC",
  "key11": "SgM3WeG92hWRMPnnEJNkCuspgkfJNU9Q8fECXKCJmuDoWwW22VFKT5JSZS18AfCBxx3CRkpkFQmAWBabBhzsWeV",
  "key12": "5wSsSEpy63ZmEZWcRKgGzp4kB8YAx1edzjeHsr4yjZi735qUmQixcSyoWTfrcnx1fnLJnmG5RGEBXAkrZvxNdthu",
  "key13": "4TjfKNEi6AG8oZzwkWjeTZEV4rf8ZeWHMWoQDEVDZaRrtmsiHBRzuFf8eXBAWsVnecZPhDwJsqJbha9suBDbAewZ",
  "key14": "2YDMoVXz96zRVJZu5wVDq31FyAuEWowXw6s6WS2W97GbFYjZharRksYaP33EZYD3zeY8LRaev7Uy7V5KyRtqBz4q",
  "key15": "MVfGExgLgC8FrnWURxZYD2TMfwi634uGVDEGfcN4nReaLZJu595WWXhubgGGpa5EyE3wvYwECqwYe6kq34Htoug",
  "key16": "3E2yEqBZDQMEuQxSVKRNq2WHHtDwk8KBdHMadS3d1mAWYobFVqmxNd6xn1hGAATTka3qTfskmq9rqVCzZBCr62HB",
  "key17": "RLJMaFCMQVjvWaGiCedWZ5FT85hZ9rkA27S9X48mVLKEAZwUNLM1SF4Mkv2iuUZmb69d1Xi7MdSrr9spQHPrbXL",
  "key18": "4Xj2BzGLen8VwiX6Mh1Vuzz7YbfMJvt4mFqvFoaWKY5khwL3q1MdFnGhC5JaoKcZK1L4ZTdEmhzZnJ4Sa4P4kPTD",
  "key19": "pCRNEMPr8XuguMjG1qZ3vuWDgWZTrrSjBvJEng2nnzkq9zPeavXHfR7ukGAL1ij8KQu5pwFwKNSrBK8DQb7DACE",
  "key20": "Zec1MXPSgpvk1rJBGxHhXvekpwUQqJPJpHDPB5ynjdzteVcooijrpMsoHRdjutAUfJuHrxEdGrBDpscwaV2326H",
  "key21": "wdb4GvozSjt7Ws6i9zGqiBZQb6CNjxtRcjXQPhZNzXi1rqRk3Vd2CjH8tUDoZGip8ryEmopnu1WmqfexCwCm8j2",
  "key22": "32LYSTi3oo9qKnytSyGYrcryxD1RsBZcTPtqnXaciyTaXqta7NiVLYC6vvyiKtbR1TiE4nmAKKqahVFXt9gPGDn3",
  "key23": "3Hj2BqvFvWgNNnpqnUH6YDuuKnDs8vhvpo9AdGmmy92yXUKN3UWRmg5RnGkqJZbJtyRZgV9YawefbuftXwuN5QVz",
  "key24": "5LXMH1nWrAt1GYWisEW1etKnq97E1R2NXXg98j5rAYJBRGdPJ67YXG5Jpww661dkxxWaSjmT15yK14HqkKepE2hL",
  "key25": "3dKPrubvt5aFLo1hKGYJpxSmWjYU2dntttKkAEf91tFe952Qpj3u7L7pEMjy4jhZEMNgtHDsWjQhUkReJomxLVQ7",
  "key26": "VpkzyHZ2pgGeAaXZJs75JckyyBNEqHt3gfFMPpKa7cQLW9iZxedWgau3WCM3ud7gLUzq5RT4Cw1iLhrk5VJvtZp",
  "key27": "3zARCCQoNBTZtdmLaa3wUqJ5FxJCHZ7Fr85Ep1ZDj4jZSsxRWHjKqgNrb1ZKQjDFjQWYUjn1Yw3YLf6KZXCfxZzL",
  "key28": "4PrtP3yipNo7gKi9GRdeYtj7tWxAmvZSP47UnGAGXCz88KGvHfAkT8TnpajvqPJa9Agc6ZD9Mmo8j8i5aCLw5LqH",
  "key29": "61qPNtdRHN4MzBi5R4yCPnZy1gzF6jWyDJxm6DoS5FPabRF2GapR3wx8day4bYXFhkJ2xj6CoiDCpa54aDHSVcvL",
  "key30": "VSVKMWi9c6J1ukxL4vFuqMhkD1VXzYNuGctmtxZWmbZ69k7jzu8VT5WuisHXLCMbwuzpWbojK78vnZXWXW3r9gz",
  "key31": "538yaXsnpL9M3kvN8jVsx1zyjnzhXYcL4oTTZdx7GCAzy5vEgSA6GkEFSJJ4d8Fy1wx9JVs1HfMn9dQ6TNT51nrN",
  "key32": "4np2xnpwQqsGKnHRxBj5TX1gNuy3SXs9JNg39QEzCymwRfbqhHAhyWsWEjTQWko14KCgP6Zz9PpER5JuKQ7QKEcW",
  "key33": "GeLLXQasGJWdcKYeoPBmdocnDUKB3XQdAUWB9nHXf13fxgLGUaBPo6G1SwShRWUMvrnuSqsTvj44J7H2aWvTNqg",
  "key34": "J6DbdvSTyPy6eheNo8tLWinzLw9bUChDP9xKANSJ7PbWvy7UF8e95kBgvUt1gaFtShDhLH39M8N6cV6atu39ifn",
  "key35": "4HCV4x65upxKAG6Bbn2MxrcxvK5M8Xc7RMUVGHnu6rZBU6fUhcR4NVcJG9HoQJrPgf4o3zjRu7gH9sh2a2C8v8Bk",
  "key36": "mcqkTBd7rEpth7Wi1DawsMGBNeK7CfFuP6fnDryu9kiixLdFfcQ9DzJbCz25tQenM7fe4Kti5Gd7ARA7QeWHByu",
  "key37": "5Qvci3nBWTbG3tutyhd72AoFPCTm28W7Tv3dQkS3MUraVezK1bnyhHfoXEx4Y5nm1Q686J2gShbchpyjdNmBjkJT",
  "key38": "8Mgh6QeggQky7wXp2z1odPQA48pGjP4L1EWF3cZXT1Josh88PFLLRe3rSJ929cJgtNuCB3eoJya6PLHNTMbkk3q",
  "key39": "9FdgkwxgoBrWoZjB4QrA3erc4ZQhdhkcvYg9Gwk9BDvHtdmhYmMh7Nhk4brLLoyNHaPQ9B4rxmzcHw7zMqm4B7w",
  "key40": "4gKe4Rpzh6y9xUmQLPRZZc5X3Em5DWBJY4a29QZgJnm2QeBNQt2poF4JjtouED4eBLH7Qbi1ztuv8RD9xFxmvaiG",
  "key41": "5SVcoyhcYYpnH3NeHSwCCBHBTZw5RtqHdQJ6KMHkGZUCmyxBH5TiA3hbkRDvbXF8EFyof2brHdMBswVHY4DqemGA",
  "key42": "4tze8SLR1MVM5gcZjrHcQ6uqEb1UZSsFcyhXzxxNsTuUY6MDMuvG9tsBbEpM8bFVKorkYxy1prZ9o63tq68Q6CyC",
  "key43": "4zjLtNM9tRKTFpDecJxJ6BhNAWJHs9M8EpvyKzpY7d1XJuHTLbPngu4sovhZT6yKR6Ra1q9beB6PXSZXaKeQJUmN",
  "key44": "2hoB72YHgk89PnTLHXwj6zhT77NcRsVqNkBNmo4GFLSwm3pdbPXuMsATU3zUo3f4icohkH95t8f1p4cVGPSgdYzL",
  "key45": "2gc5cnGj7hHykayjhqKf5BHT7He2QrL5fzKXoqcAyrLEHRkEe4jrLVEx8rjVByvmAcpCUSCXdTSm2DKHXJsNG7BF",
  "key46": "KVtgEnNPHPp58zVicREmou2CzgnWWr7AnMwqfqm26WojZ2U8iAao2LgBLZYcJtsCCbLVbnxkkzsiwDqwxJeHNkU",
  "key47": "4DwncZ4WBVqGWSowKWjnaQ3zw2vFmMCCJBQ7kCkWTEYfzw3hD2jtywAmNUJZZRSoYZGbVajc3xWbAngoupKQSzpj",
  "key48": "e1SJ51SLXZoWJsyWipY9WWqqa8zMTfMetrUt7WJSkA1BHRfhU7NAePZFK6FKvaqEJ7WuoX5EL7SKfyQbkd9neC8"
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
