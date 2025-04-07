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
    "4YsbG1duxdqQ9VrhhEcc8ndgKWZ87S6PeHzBxA2ZshqmsCpfEbVN7viWzvXdZ8k5RWFZLpMB8vSQiWCgVJamy3Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pESQAgSipTZJDcffZLnJAcJPnXtRb4xCdCzFQwgvNquNocMkYzZ8VvRGSfiXv5ccQifisGrP8y9934WZfXnV4sV",
  "key1": "3qCXEuYPSpg8B4cC95vXZz5ViaanNx3vigCYfw8yVpmLwvMeiex8smGraHVRZ1AbCuPxS2fUW6uLhQFz7S21B8zs",
  "key2": "2tTxuxtNYtEFBXF8PzsrvnyJUp9GdYkcpDPboxGxPkh2FCaiDwXN4D1hgQ7G4JncJ9aXDsAVGTbLFrDQNjJG6CSj",
  "key3": "295L4uvX5aCLJopEAiNZxWvPiSMvk2zCG6YaPg9Sfy16Pj8npDcdAv3GxBRKFXM1XwT7dKEkQRew6Y4KUKzsyGzx",
  "key4": "MHfgjLfx6ny99kbHzw8bXViYnqLzdKnNZxtZS1zST7n8w2PT968sov6kDhr6XsjH6mVQLyPkaUFxH6h4npaLzFV",
  "key5": "3VYjThP9S1yhZXTAVaaGqwSoY9V3CzY61ZCwV48CiXx8n6xYyqsJUGnQZ5NutcUQkNHXkJjL8zVkAqyqDwtweqff",
  "key6": "4ZmcAf9YjD4j4xiep4NWPxUnYLRZXd2S3kti53ki5Kv8fMbwGB31H9SvpizrZ3FsxDiBTBFfpPXcroePvVuXqYFu",
  "key7": "KKvohMrTkjVuaN935voCepwahkBWgjU31HtxBy5R5gz8BwuF6ugiLCgRLg2Mhs5urUt98Zw7BdwhL6rF594H2d1",
  "key8": "kyDf8ghfAn1HTdtS4Syxffo64jMzmd37ukWbncUkjHUihvEhqxj7Y1eRtaNFr9yupvWHrPtjKCiDXfqkb4tWP6V",
  "key9": "WR7hKtwF64ABhx8wLVkh3Sx2WFCUyEqDEcGz19gtaEeUKwKBPhsk8X84TGCQwmTVyb8NwX7rpmMGCGsK9hWsxUB",
  "key10": "4wSXrr6cbzneeHZjKqSNQU3FswMCan6CbgvveEi6khESNfo9ArLYH8e677yUJH45YbLYwgu77Lor1TUGs7fjEXKN",
  "key11": "WYx6sWWvpfgEm2enRwsfA4qC2dkLw7s63njGDvbpJpUYyTd5N6mZocmo3Me7Dm4bjfsSdxrXNkDoSBnEaE78rR4",
  "key12": "5djeRofF21mW1dRkKvBxp8yDohrzLwLHdtzVUQwgT6gy6FzoAqSBM11jKH4LPMEAXPKXhWk72vvVs8KcMX9peYVg",
  "key13": "4uZ79BcbzhNLviqGS2MjAfLSx5WeCVejnpZLnHT99tmzt7UT6cXzoazKiEjwiDFq8xvFSazKcsGrJJX8iBP1kCMC",
  "key14": "2JZiQesmt4kNTxPCtNfFMqRG6AuK24MDn6fJsTkHaS2PnFazSjYT2t8GkTc1Xo4mR4irF2a7TTP83k3w4fZPzfC6",
  "key15": "3WBFtiZLrqKt1B1cAZ2jiswKUSxLDcZsANisys12xHh2Hj6sdGw1NtMXTbnEdoUVw8hrT47XTeJevC2Crc6LSPHv",
  "key16": "3Ee7RAZoVLGwoG76vtkb8uDbTyHedU5jx1xK5u7rekNdeeQmaMJJLySEAszWbymv28K9BX9RAvRT2ANxHzCb4HUP",
  "key17": "2wmtCb2vUkzir5qjmgHAv6QcXzXKDfsiDEhcNTbxYiDVMUVuDFvjHHPjzzss4b9dfvWSFXUsJruYk8vdr1QQC932",
  "key18": "41XvvqgwPeaNBJESj51ybr7X6Paq4UsVkVg1xNeGFavDCf9qopd5b5cF8WimrNjYegrC4YATCQEH717XN6RrkC2t",
  "key19": "53fnVEDNP19KyXLKRrXfabHnXTNtAUchb7YDD9wLLKi1TxRYbtTdqnwzfHStgbek5mzwDUioMXPhe5ADyB6Yh4Ba",
  "key20": "vjgaSw3QB6FT2seyux1xV7GBsHTLfYrRaAtAkPopBYPk7swxrxcX2EHRCqoFAasc5de6LQLniTrRdMpH8KBFDsn",
  "key21": "2wiM1a56v2iiJV26WibM6V4yofp6UPGY2BMAHKAxPdHu7KzYyoKcKnEXpgiirgqSB1E15fWWc9rFaugkp8CXfmFp",
  "key22": "WrMKkgrB7Fi9LQSF69x7UkyTrKKM9WhNfKWjxY7kDpyGJJK73sucLVFu44QqYiJJRgo48HA1qJfcsw6uAbzjBAy",
  "key23": "3tA9i8hvsfQsqFcwQ5iu3GtobfJY9UrhDSJ8tpgzNzfo1AtyZFVk4c8JcmLvZ1AWKqpLV9KqqXtHfZKvcpyiEW1",
  "key24": "34bRSzWhRazuf5a2ZSCHpdoJCwcL7T4oekvNDc7yWDxUvBHTuKk2PHVezW4KKLpg8QUSyxAAChsrRVpxo82rqDNg",
  "key25": "5iqahuja7fNUwiRDmVyBma2xFrWbQgFdQJTyZJn9qPS1u8taJNpvreS37XGEBDhx4xHxvVRATQZ6Tca5fkwY5svN",
  "key26": "4EVMsWXuYGWrJkDPr2S3y6aocRutrYctG8my5rueKJc2WzbYJ56P2fj1vMG1dNCQg1zHwRiPFpjuo36WMBJJhxRH",
  "key27": "2uuL36nCmtrE6NagVpNkAYhGmu4NuGCgPqo5uQ4k767C8JKg9eDerKQUwzhrEECCQwnMz2MNzfNB4j1QYMBRgVwT",
  "key28": "4M3CP7b4YZ56vZNzQWKxDn5WPcwz1UM3SyJfT1c23BtjF48eNQ3k4xPRyJ3q1CgzwAzYJJfoiV34czXRqUKxAf2X",
  "key29": "x9NQo6tKfxDV6zxRRPcv7cPmd6rRCe1SsS6QTJrEMJXoQ9n1AvR5au9kt7y3AS5JDZHdUCYXDxHudXBfsuNhKGa",
  "key30": "wZJs1nq49zmhGCd44NkNWmMM2cXyCPoHG6LB4Rsn34dKUzU8guiCS7VMrMhBXKcVDso1cu7NYYttwQbHHjhrWEo",
  "key31": "66XQx6VtEEMfjCWrVfeRhwbKjZH8MNTKPmisBYa7YNbEoJ18eUAwhVLQ2fCuMTd2xBCAotvmPdbiLpaNMXPM6166",
  "key32": "2WrF2pt5Dv4kYxqJ9zpq2nmEnKwfFrUySJA9RiGoQVgHUAYEGaT6cnvsYiSbPuUs5e2taupo7mJsFjviASSZuRg6",
  "key33": "3tjbr22Sep9mcQbMGK9rasdTB5iF1kSY5Cb8eCrqaEvPi9z2UfubyGoJJyRE4DQkvYwTpwK2G2Kf9rEW4in5VdfY",
  "key34": "2rtLDMJtnpj9khuLAwJ4tKqQjPWWU69AydrXcgDEFkifpXPkpPsAZCgJAsXvyAYksb4hJ8iC6PepAvyNTYFfBcs7",
  "key35": "21rrNjV8tRbanGbYv2GgSUWcko6r3BEu6zq6e5xVKvFGy8LgGAGibJXqkw7f4hETqfJGTgyv11GJe5JvHZXwkwmL",
  "key36": "3gC3rwTS2DypBqJbeAMUBuu1U1JLr3ENTHLYSRjF6ZCQHvtDdz7tV4QkErC1XXxj4c2k64BtuWnTPacRg6szMiui",
  "key37": "3YtKGHGqiaNsYGTbTqBgbe2pDLQC1cwAQ6tQ5XP6VGg3dCsjwuJ7JeExTYPtR64bWNQu55WAgQPLiwbvvhuy2Sps",
  "key38": "4aAz9L6aXzPWkKbyiNYLPMu5X8i1Gi1M9gHqNjCtwnmPUswn8k6YPb7pb9X6HwuDBZWaMsJEFQDp1si5bhTrjc6R",
  "key39": "xTB49qx8QNfLgGTi9pQLYpZzScgu2dn9ycRRdsfA9ycd1ejVzK3LrJK68oGeWD1h5JDT1oWBzkXifgcFP7VLXeF",
  "key40": "29iZAUCRh7gHmcUfv8CjNL6e4Zb87reAC3sWy2GUUJjZdpGwF5tkXxtFxfhU4bG4tqQh8hHyCQL1r2KA86jztuBq",
  "key41": "5HkjfBYmuKDcbauzZjt7pYLPa4WRq9JUX7GAo5NesSDXeDxhA3dqJw4wHpfjihVanKy8BjuEYkgwseuy6eLQW9WT"
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
