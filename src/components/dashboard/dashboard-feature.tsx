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
    "337YHUhnuEUzsaouup3bLFxrMpdMk1MorFdBjCfCMqoCQpyNoYoUgjoZgELiK67kzGkqnVm1Cxaar7D1ap1FY5MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7d95prwvmpHo6Ur2Chn1kejd2iVTCBZi9thX5jBoeui9Qv9M3kneLirV7vWa8YzeAB9cRcp9phhTwsBDL5XAwL",
  "key1": "rS44Vg99gMAgm6au6eewcunpBpS8JbLTtJkFk4xfzXUPTqjPRPzqm3hLYAkUuwBv4nGLaSdGzf91XzrsvfWMrZp",
  "key2": "4kLYsPir879emwNsAHT4vzUTaGqBMFg9hgXwnii1LNmk5Uc1s4amWB9MC2mSLKUnZMnjdAzYxgzJgg9qUNPzfUu4",
  "key3": "EH3m7zwiuASj8xRV3TktjRJueT5hupdYYhCnVWujeZgPe9Htz6Q6LoEKXNjUxZfNMYXEyjLZU1C4NmZusJiwnbd",
  "key4": "zSegLSUmFuT83F1uU2kZqcvKPoiRwGLcF16RVzuGRxqox6mBscRE9LfV9oj8Zygt3gBbfBpctVDvyTLzKiHsDoT",
  "key5": "5VEryS5GdAckkzwGF3rgHDZXUtYVwYoVgxCRk7GF6jycm8D9auzM5U57ohKqyPMTisM9PM6MVt8VbV1Ne22tR1WR",
  "key6": "3R6Pg2vVbUaQKHBbP22QYG6jai4QhjJQUt3X3Bjy8UqJJP3aYQrtC9C1FLpmGhq77yad19L4WiRy2hnYEEugEz1S",
  "key7": "3V2RB67qSPGvomDueWA9AeUaKU5Z3LapoEvnASf9QoXo9N48tcxEjrZ4K1rbDMrrbHLKEfqJAFM1x77EJNEcrKZc",
  "key8": "2J1sMm19RrZtqprjkXczTy5bAPFVRRU7wtQdbVgyvDmXp3guvFxjuuWiJEhYKfPXzvfeULqbdMHgp9qF6PrksSkv",
  "key9": "4MKsGUbhnW2KLs5eULYnuaGC6TNpvSdXVxaoyCBKKrXFcALAjtKKvYsvPbLeX7M6Pvkjd7usg6nAQrAjWgVDCFhg",
  "key10": "5zvq1e3fWrhmriKDi3wN7XTZo9LtFmhmQKmsFKa9D9dJHSc2iGPGMfkLa4Gn59yQoFmirWN1p1x2vAkTg5rpMMfj",
  "key11": "4sjYKr2nJ7XWkgQMzXjrVFwcv3HzD2zuaPRu8yse9DQ9jkjWrZnSs5gzht4jdQ1L1nJetjM34kB6VuGwZnWuNXCN",
  "key12": "49pg94AhEyGfsAQMH1WGhjZgyY9rAjdh5C3swNmmdcXV9pe2XMnuAK6292i9WRLBkKsRYAm7yFXQDjLZNDAG8Rmb",
  "key13": "2RmR6X9LQWrpK5iYKT3zoS6LRk3SbV4qxm1i25zhnoZ9U9zeAErH4cGyabJbV4tvEs9QcCVNhAo4wRY26FcWBh4P",
  "key14": "55jjhQMaCcwAj3ar38mrbf9HAYuhzjY9nqXeSTXrVKnMB1S3HoG7AkpkvUsZua876u99pgUvq3BuQmgqexAuRfSX",
  "key15": "BBkkDo447nxGAuishc9EB4jLgs6ABzSSyeEwm66P7kP8TdWnqiK2VGmAHgzQiya3DJX2PNk6n51T47WyPqhd6Em",
  "key16": "4RbGruHkvaPr9k4JpdhCuajFCi4ABsPjK6r4p48XKJjRSL1JA9MxK3dAmz1frEcprp5gfLzbLbVoEGV4Awjt1VWB",
  "key17": "2RCzZga3MbT9rYwvLKu33T2EJrTRKc8WBTU16hr9PDNmgyXZtjqKVyLqFH98B2XY2HoyRnR9jvQBJvH6NuPF34oB",
  "key18": "GqU4c4QaFxhcReyuUvJpUzkgiHuaKsGsCcUjpzY6mHPKxy5qcBFc1QWzzRzNhByEtLM4mWNw6eLxzmLBUNnSupc",
  "key19": "5pbd76WkqjPZDyfNjMS43uWzKrm3N5MCqg6rnrdDtQsBePMf3PQFMDtK7s3X2izHVV2K1qJvErYfCmBGH8BYXsxQ",
  "key20": "tuDeGcxLhiKJEyfgFiE1MTU4PzCKfbxmiUZeJdeDvoURjVav15zphoFvo3vdRMH6NoDV3jU2CRNrjXL8Q9EAHfC",
  "key21": "4LzoEFMXKy25BdwUiN1Z4BJDKqweNwQkrDSZR5TWmyxDjoT3KaKu86sUXezTmtdxtKhYBRMMqH3m9XqbqBD7C9Na",
  "key22": "2B7Zyx36WThbdBdFzVHBFvrks73FykMTMj4TNapFw4ph1f3tNdp3g6m2nB2J5iNpirN3466zPWFemf8UaXhxk7jG",
  "key23": "5sBmxLf4kcDUpNDyNgUXMhhMZ448BuxoVC3duRk9vJdFkU6HKzKTU5ChSdqX2TW9XPVrmdCZK2wb719hPFajqhg7",
  "key24": "3fSVDqQx7vut9jgh1b7pc5YxQWzrzH6Ra9vSyz9KpxVpXwY4REeUbSktEJYHTvB936tzpAGxq7cAQGFrYcJav3r4",
  "key25": "4osCMb2QGVbbuRcSUPbZgRUmBU2zb35W7bvrmPjunW123SjF58AsY88LzBSQHuRHRUcJGd767C5LaorPhBy37nM3",
  "key26": "3how1ipYnKuvDcyB9gifsoJJX5BrBjwAzXeJv45smPY5V3531fNyDuvpaferurCnCyshQspXwjDFMQNUvZhCThzA",
  "key27": "2nH33TMunAdq8AyxQn9Bk1abuHsmjeckMyLhp8TeSgd8qe7CanjtqCxTc1r5PZofAs5njmEUezDPfrdYbcCXWQoJ",
  "key28": "wyMLEKHfjXjEXHtQHko1TAS9gsjRDwWQFtrshH8wnn6sqUL4qomtcfirVg1GXLGCs3XDjwRcGmyyTULusMGg1GH",
  "key29": "2Z5Tm7Z78W2BJx2at1pkKCEterAAXNSX1B5JkRNgZGWfinsZW7n5AAPvrB97dSy65PHjYxLwPhGbh4M3YFMQp1C9",
  "key30": "4YSMRDMKDBB3FG2JF9YiM69YAwYY5JgFPgovTSpCwMW9iScQ63nEVYEPuDo3qVizsydmyCvX3zR8sKU6V3MY6ESn",
  "key31": "31qJdWaipwA6cE6LovBDrzAswRJGyuRGdFDjKDpaXb1uLbnyBDuAGWLC44mPks64GBEwQDd5acBR7wa3c9Pw1m7L",
  "key32": "47g37REgHe727rTuz2pkotY6dgYdnx1EvNgd9dB2sQmSLUne5VDMTsMp7sGTUPGLAPwZTwSNqepkmwDx1UyUxK95",
  "key33": "4mzGC1dMzcpbUvyd8SLdwuaVpTXnSmca7LmskQ6aSUeqrtLEqNxoAxPHQL6mLfkC9nqj6mVwFoNyLdNhrM4FMuwo",
  "key34": "37K413zuTJgRB3Q27w2X9G7RF9QSEptHhUxGVkB6KFSt4mzckHQ3kth1DxK3EnBqtyDzgNjug2UZVz5UbdL5ici2",
  "key35": "28UYGwZT2ZmM9YLUprSJBvL1f1LyWNzLY3SFsEch2avZfkkwcLjxywAFuUD1CgVXnZWvvKhtY3twBJJvLCayacK2",
  "key36": "4YaS3vx1KffdbVDzZ62NtL2UoRGKxhqqUzNWCBoeu2Y62iWeaFgUxcbMD3uLiDcBYTqoff2LbgYzUuT79UKgepN2",
  "key37": "8WAGBfJHZVbPzFpWzsMrnZLwawrp8csCbav4nepZRTo2AaiLXerNEMXy7DhHm2XEU7R1CDiHQye6gMU9GbcaBUF",
  "key38": "iHFPaA2M6ueuUVSsFWRGKN7TsRANmQsHcpiWwK9RKtidLa9y5qxvwRo7bcDFLxPkHur4r35PwKM5671pU3E3upq",
  "key39": "3VSybU6oYSabcjWtXrLVDQXgujUHRp2Kg4FNTmfLqDhCcab7qCujmeuFQ3hk2Skskzho4V7knaawsXn3fepcNhCD",
  "key40": "2x1B3kdJtdPQo5nykMKq6ezjXFfikThLwvAw7XNrA72xjJXksuFWKkBUEuivjhQsbY4FZx2NpntpLSaBQkdGKcWT",
  "key41": "5yu4fZmjstaAkeMyhwK6VJHoFfRf9kT6L697GERuBbjQfobRVYjQPWcG6usecqRfGgCMBdRVvJc9BWGttyAH6q2Z",
  "key42": "2GfSCEVAbySCv5nDwUafdV15SNDbirn1bqGmp9p1hqhqM6QyqBVeE3SdU9LZ1m8Kee5st1RV3agvFzaSsNyc8Xum",
  "key43": "hnY8pp4HAfYdPzxqePDoAQEQDjLBurmLM5YA9Qpzv8WRk1kVuHVbu4eoMNXv2XeeVS8WqLhieYJbAKZ1C3GbEwi",
  "key44": "5GS8GRGZCURWcmWpK3pfzfNQk2DT7iZe6g2x6dCR6VfmxV88QwPXfwkMW48sDi5m7Vhyrh2gWTwYBMyym67gBkXy",
  "key45": "31icF5C97pEF7rB7TX2WjmmUx14wHX9oXy6JndfncFAnatQhMim9F165q64Rokf2sbMyWa2N78fhwbzoL7xRyZHc",
  "key46": "66ZrSqiW4oY3HffsQJToEVhcraAJCvEWYcawe915xdsasVfFTksLFE1BPsguuQLwxHUfXH6kz6SRCofS5HuXWuNT",
  "key47": "2Gxd7PFEMwiK6dp5Cu5VT8DjJsAuKWyFiDbPsQ6TnHe2RF3p42wq5S5VHLNDAAwaLGsjFPL1t1AVV13JHtkqFuCu"
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
