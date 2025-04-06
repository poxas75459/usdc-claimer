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
    "KRbQMP5hvMbL2rbezCCLrRXSV8D4EuFTKswLUtjMaJnanBaovj9DeQHYXLL71ViHvPpg2EpwnYJcHU3F7DWptPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xp2EV3dtEr6Ch4gm7MrJ3fUEWCrx7tHymTPsEhnhdRHSiQtRfqv5ibWALJTsHdBF9Lzfb4WDjMPnBypzRMAfNdY",
  "key1": "2FjMs7zDG5iAVAvS8CCGq2zyimKkbmahT4HMtkAcymBRYWbHSncR5K81dSoMbijzB3ZmtPBhdWkvfU45BkaGTJ3",
  "key2": "33yzi3qohjQxWcNrgRB3Z4bEJy8JhvBkWgscWNWu64nnbZwgtxBgYHoW8TppEiKtMVe69TEhu2ArXwJe6hamtWmj",
  "key3": "5pQPC7iMLWp1Z8nHoLvuVCBFnxyFWUEqCTwjRW6yrcKpQkPBHa4yroQ2Wef4bRu9RpmM1cDaYJBP3NrD56T3Cv1b",
  "key4": "4yspddjCFrxvPzgk1Yi8WwZUDs4HS9VdtMeZzXWUzSPXSs5pBXLHAVJruKFwaxMRaKuSDaDedMbSZWZhVgRVZgUj",
  "key5": "3A8FsMuw5wGrQSzvM5LLBvrqDpZBWBz1CSiNUQ8mk3WevkV7LQvvtrKsDJFWJgGu8wzCs6w6XDkBrK8ff4s5hw4Z",
  "key6": "3i6LnKQ7jWuF4nwwRqTa2PyY2E662YwHqU8Ms7pYzqQb9oe19F9vEbazCJAfbXoQQsFSAq6cpWfszp1JT6Ptk4fV",
  "key7": "3pySBKn6RY81kBWYeN8Y4mxNoTKm4zH3RpZQfF2q2BtPjpJSC55VLTY5VzPYK53RxZxAM3cQ9YgGMogV1odzjWcD",
  "key8": "5ajKxfA7tDb2tuAr96DZztmHcD8yrrkruavxUoacdPTqJm23ZosCDk81mtsnUpnyScULqAEr1mPyCvKBXuzXbuSU",
  "key9": "43q3wpJtnLjfHagwpZRdxvbSEg2gihnHY2MtgnEBCkusdesWVwa3oTTosvUeUK9er76172VK6JHvKQsGfpiAcCLZ",
  "key10": "5LRwfBeq3Msntiu9E71D4tirr1c1ZEPfiVxGFtCSVKcdwNiErq6iBbNV3kbxgQu1erg4oRncZ55VC3XVAM9kSM1t",
  "key11": "3HSH7KTtUTa2o5y5S29XzVbhFVuBshPgPZWBQZJMP6PQYGrCnpaCp5Ha9vbywj2ETpDMNhgNkczw1vzK4GAhHm5c",
  "key12": "2FTEDoo3zmtmCjs8q24p7q2kpzzdSBuQ1NYjXcTKzDqUGAH8rcbnSHKx85RbywPmTwaK39jHaQhBQT1zejFCStFL",
  "key13": "14cmhAPm7cEjo3GMyJfbhBbwMSrMR3VQ9kBipSdSgKF5aD7qVrrMaLCHURzzJecL6KQzHWySnYNR7xTRDm5Gf6t",
  "key14": "5gFpyzfNWdiBhkiij5jr6FfzwTGs8pxwyREbEHXVYTKEBs1KuQM1wRqZZDgxWE5zHwUX3dBxypmC2osGKKx7Uxs1",
  "key15": "36ivd4mtgyVbdjfwn1PgN4P6Knpin5Ux2qXxGBssAawo6fhWYm1m8RboyHNZ1XxehD3frRFjAnYfL8hNmAbFBvBo",
  "key16": "41TZJg54suJMwFuzF5nECGD6wamwJ1vuRx6DNBxPYRttLd9Lku11MBHiSoq8eD24KWrS1qd93hP4T715G33vv3Lm",
  "key17": "58nds7aEsxzojgp7cUcA6tvNqgEb8YXaQwRrYFMxGayiQVHvRdYrmgmyMq7UoNKHxTnbU1k63QsYhiDUa1RU1h18",
  "key18": "2izqwXbT3Cnn1riQMtzpAKM7NF9TnSDVnAu2k5fJDaHEvtSXApDprNsd9dMu4PaZcKSpjeRD1ngiMsikVe2awsXP",
  "key19": "P33Sbe1913WzvH3pWL8PLGu4HqFhTm89ivU1yToUeTXJPc6iuAhk44zLbu3KywCECUrDMpkjpcB3Q6A8ytLpm5W",
  "key20": "2ibxjfWw1HNNgRhJzb19GAS5Nvct9gjnYAxGD8pGmpPGmL15KxQJBHppxuy8oStjy5aym7X6gcah78pTBVAiYV9w",
  "key21": "5jN7hejQxAzeKG8x7XyS5rMZD9kWQKyTqN1jsZnmvj19UveDuTBRV1ASo5P7GSTYQ4FA9HUpJG7TxJ2FTZ2MaDnV",
  "key22": "3CtdSGCkCh8V9xyDCgWpH4NJQNe3aqr5yGjBgHLqwjYFVg2tGEmCccShpiVrfR45xmv9mo7UiEXTZcog2kaaxW12",
  "key23": "2C1th66dJtpVA2ZaQ3GLHiHRcCyPNBAoVPrs4h3UbgGrG8HtxNMJZNeQyRBf57oLWc6Pn81qKPDLvCrMC6p9ARxo",
  "key24": "2SaVue3NUwCBDYTH2zPQWVDtuKwkwLXxHkZEzxqX2H976ZR6SjwGYsMZopH94zCVQPmUt1EWFUzLa19F3B2JUVXb",
  "key25": "kxKPSK31JezHJ2uZvbvU2akwifoGfXCaxfF74NXX7e1dBEQyZEVqYRsUfbMCrSYxAnFHkyn1yk7CabiUnZj286h",
  "key26": "XKGt5jXa1ahkvQXSKhALuQyy7YArWmMeX2xwjfqfui4UynPt3gxoQM2i6VsSrsBWgckr8GPtQRhkgLDKJrY7br7",
  "key27": "2iMQiFuy4tzcXDPiyt3MazxLj9yCsTPzAwR6LG72XT8Mf8hbdQfHG9W1pVTjnBjZcasBaR3syapARpseN1xFnxNX",
  "key28": "3Rjkwc117nMKJVcLsyH3MYCmdXnj9RoGHAStBy3hMjmotQLMhrQCqQjPrAjWuZhF9auxV77GxWoPtbRkrJVRD4eK",
  "key29": "2YASR4vxApH7zToU1M4UsXk15QdUdB5yaXLSe5V5FBcQSZP11eyftp21HdDsqCexQK42mmw3C3iyr5ZNUTYB3rKG",
  "key30": "4kB1bSDK3Q1xHKsz5ydPkysvfjeS6yttpn7V6Z8MPvLiMDiPUcvEqSyBUPNoW6HrhoEvAT3x5mc9jPnxuF4xidUS",
  "key31": "62Y2KBvHYFaDCqy7CPc3C2snfVnKf7rGaEMMdzGDkTWyjZtTnsu2YH6cJuZ5yhWAzyMpTC6XHWy2qvfVzsvWnyZB",
  "key32": "9kCmhCLn4zKQRi9HoY5HTGMm97o4g1EaQM7h3spwbRNpscESDUExBBL1it2RftisDkHqNxuZGnYsBMsoFiUTx4z",
  "key33": "kZ6YkMggZWhXocHfMuc3uXTXuKCVVdjXJVBX6QiXhvEsBzvLcsHHogqTDgpbQjUdwmKsP6kEPAqE3SnXxN866Ny",
  "key34": "9U54RXH2ycdDVzL1b7qN5jBwmg5xR861X8qAs7oZZidi2FkuwD1jZNi324wvqBAn5jNuW7MxLWNuqP6YNUa99NS",
  "key35": "5ZFBPCPUK1x1TiV74hdEdPPbViDdE3uw78bNKbtMV4kBrhLUcYZgAwgfikuL5ma2TfxQ1XjW21xk6s3F7HMPQUhF",
  "key36": "5jAM5wCM4UiFRuwk9HEfhs844FLUTcx9wRLSBbDb7MGjShCpd1AGJQRdLrZAwKyz93ZoadH4Ka3i11mw8a9yY8DW",
  "key37": "4RFpcdfqhSRtFUvsKXkd8Rtir92Q13HG9hkTgDFcTwGea4t8M8Z2XssdbeC9FxxbRzrtxJxePPCJLS3rDg5KxU6X",
  "key38": "25gFvNL9dJdHj7fgPcvS9L6fd7JqKMbTVfCAe3BFSYKCP8X3weMP6vJ9YRfQLqjW3QvyrEBtEvDpaUEGHnRqcQVv",
  "key39": "Ue5Hb4ppRoy2o9XatNGcUk1kkMjxA9Xxv4yfgLDYSpFNeMTbYVqBo73mEqQV6nnnXf4zVpG7MUsM9eXiBj2QDwa",
  "key40": "4amt2GcPGAjXu5MZgLYZzy7twiAdzHuxzjfR84CvNq2M3A5XxiWD1y6SZ2TxF7gUSuXqDaoW6yfqMizRnR4hEd3d",
  "key41": "qSCv3p3xs2x97LZ6sdWqq1VeDcrfmJq5YpnGXVLU7gWK2Jv98nVXB8iYZ9GAgMTTDoNA7fK11USyGwRD5zjMnxM",
  "key42": "3ZqN14BQiwss4pqdd5VzrFAXayyAYxUFpJHC7qF5NAriqGm2c6NWFYFifRFMjcCzm6M731Kq9xdzRVghrMXk3ohL",
  "key43": "5hnVVZMqrARjzArVuwuJmf2UJeS5oTGUuiDjj3oo23AWCFXmGePuT544JfvK3PZyFsyKcDHLn93jc2NVnduSFPV3",
  "key44": "5QJt1bHwNxbxg4iGrRrRPdHQttw5Bp61JEJ7TLSyqCP3gSuGqGeUAkTs4tsfmFvTNPfoZq5S7T8Jv4uZkU4ff474",
  "key45": "2XnNxpteBzgBJVy8C5beqTB6bAUhTzju5BtsEaF7FDnEgnNkCi6AhyDefCc1QS4F3DN5esUcmhGtyJV54BNCc3Fk"
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
