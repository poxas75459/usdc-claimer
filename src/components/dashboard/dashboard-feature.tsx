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
    "3soGeKc3y7Z8E6uK412W3aoAsJPD6eMpzo29ysWMxn1PxP3SE6ZB8JQFyy6xDYXiKm1omCDy9eduuuxfYCXLntcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2w5PbDJ65KgweWpHSB84YT3zFXs5XQRkw9YSAbcadCEEZzpbdGTjPEfZNN6Auo3qxKQKNrwHSQ3P7oQqfLacJa",
  "key1": "61KLgPKuCupjQ7RCFprcuAh3VY8LtcQ6zmRZ8EJyyymVMfmLmVXWEWAXXyaf6tx65tCK1wUqHrDScCMVBLuBkyYx",
  "key2": "3JL9w6gjdEK5TjP71xgGCMGb7SWrtLhkarTCUmi418c5TsYSfqnquTHshZxaq1KBSkHNbgeLHJ2aeTTvL5nFeHov",
  "key3": "3LFV2iNuojKJKBPqw1yocRcibyweKsYags2gpMgGwuHxqFhemcV9WxRAb86zBb3tWq1JWmUhsKQfQTpN27DUh52A",
  "key4": "3p88ws6nDxqVRDwXfWNS5od3M7RjcLJTEiYQzeKTeiy9yRT1zwwtUXPcmRv32AhPxvUjWELKiVudfoBp1EiayJee",
  "key5": "366EuW89fq4GhKoDzqsYrqUfdh9sbq25Je3iQx8gEa6dKpTCJp6BzcVafoigjvbCWTuXHizRzUfHfsKQEzT2h7iV",
  "key6": "DJTLBNkXwLzGidug8Snvnp9nB1S54RuM9dPrcctba3nEqffw6ohzwEihJYCWb3GJhz837sW4PN9U3nDSMyAKron",
  "key7": "5pZnF8PJeTNnBFcQe9WHpdhKL68NLVc3fNgQDFVmua8J1BcjK5A1SfdQR2a5Eupvs8zPdWFFZJAvVeszQBuZNN23",
  "key8": "WtuYZCpVDBUXxtJJqJZ8h9UPJY5k55hhKKrRoXrTZb32jCkfXDoR923pFnTJME3q3q3NPqd85fqqYbeqUeGjHnr",
  "key9": "5LuAfQVwmPkwmT8FCJMr2UhMeVSSKDcs2guWnhHLiyWfKHGxjQbpq711yHco16TpvPiqzeWXvpWUP9dtXqjwQ5kn",
  "key10": "3JjcT6W2bSoeosahfuAvDnDgBhNuymt9sqf54nJPfs78RuEYioeZQRZpbpeEdJrr6NAiaDHD5ELsNEzGkMnezJsm",
  "key11": "3XMot8HMDkumypaBPTdbupjfArmchhDyQvAjrgYDjdij5ndMCaUTNGaMaenuoEtFfLmvekEsJFygNAQ4JqMbEZds",
  "key12": "xiDuNMoGKegSXtgBYRhwUpnsrsghZFFpS3m71zBYPE8zogfWUzG48RvYHoQCgubqLx9o8RciqPaegaQxJKwkb6Y",
  "key13": "5YB8vNA3VYdV3Nx6xMRiZ27BLinrnBfgPauY2JuUFaotXthrbvTtNa6bgxosDnYcQ4S8sVnBJyyxaw9Hgq6h9BtS",
  "key14": "2thzrGZujpHUk7Kt8c9iLn1c8mvwQD4RrPHM2SD9dqSda7BhCxmjYq4ysTDc3vRkqjQdKRjuPVqyQ97ixpSwxdnt",
  "key15": "4o8Wva95bkv5FMoXvdWUc8zxBK9wxE6p5E8TVj8vcRXN1Jk5DAuMCPTW3pGEzfGPSrs1uCZ6Div6XhAVSqqzvjk7",
  "key16": "4xAfkLCP14NeNzeLrmbUbefFtnQFZUZ4fMyDhrJdorAjsJJcUAQLHgndrP69gJkJhAwdMkzgSeBpjYDdaTsQJg6y",
  "key17": "2B2UqSqjcDx2tiVfzPW4Uu73QfN6avhCWDiTw3RGLpfVymaKo5R3ebjZ2cG3aZGvRHTvvwXLQ45SyyxGm5xgcgLT",
  "key18": "Z8M5p9hn1sJn8t3D8orpVk2khrRMK6uTwjdYhmQq73DnrG2LNgNXfRxpd5HVHoLL2iJo6hnnWfGS8zJZcA77DJd",
  "key19": "65qunS4U3LmdW3hZQ3e4Pa4uK3QbngvtF9SUNJpLRwwDbgMncHYWBHwvq86W55ue3ws94uHLtDMHwRmBtGaoYgMz",
  "key20": "3uNXRcTz6qpB3cdEDbnow6pV4b8dN7qWu1r8RiyfveStWKECNt8Y6ajnFLyLGNvdfai4t6a8hBUwLreVUvfoKfNr",
  "key21": "qc2hvvphbMGPLawV2RvJxvpA6vDUMDwksThBJAFJigB8DpsF3F1TuyV5iDu5aHzpH9cGzzJtT2hwirq5tNx6DAT",
  "key22": "NkTfeEYRYLBzDDRA4y4Y4mVKoDPiQbgWg3ApADzmQoTN4BYX6YXgyx9TGMhMNFpy8KEZZ2SkZBqBPcVeFSdWizD",
  "key23": "53GqvsXKStairyPywh4FM14YdNjW9gzoje7CrqeVPyCBosM4QZJnAfMUcVCjNmbkvSJ8Mc7Zq1PGYZFDaUj4YHHt",
  "key24": "45vNPQVZByZKatJyHRyypewuZsNHZixBibECSqMb4RrBNPnNQJYFChL6vytmhH7ESEPoxzZ7rcVG6xBiWotZ7uh5",
  "key25": "3mbU7pk32KdfmoPNQ7AJFrEsz7bHkArMFFh86f6YxTmAC31wHhGnMyZVjJMnU3QYKgaLspwY8kJfj5smWhpRVfaT",
  "key26": "2cjd7Eco9geycNxkXLQCqs6SuuaydzkzmPuHYLBRNctmnBu1hofH5WfMbw15zdfGLxspVFz6knWsh8EKhVoX6Nyz",
  "key27": "66DGHULvk2oWfBoov6TBcgVKf7jrTYSjfAxW7GgW9MThKtuR2HUjKR2y7F8jMh5BwdgvKiyfmerJ4JsTWfj1J4EG",
  "key28": "5yRNMcNEe6QdYrmkYHBYs9VADwk5Wgj41aSZ458nBuW4zGbzqW9L81CsmffQf5Z9uFRP113Pe4fofFgtBF8zWCXz",
  "key29": "4E7gzmJEdE8i3duXgKoyP6shkspaB9GYZGNok7qmyGyTJcpEAswbW2UbrRQu2cHoL3EQ3Pxttu1BSpHZKtE9yDio",
  "key30": "47bnsPeKSTbK2aUKhxSsoh3M6Ctp7GMewMESJEueRPdPM4jvkU4vXVJ7yhja13i3bXg6LcqHCWNZ2srFPmm2qsXy",
  "key31": "4vND2EL5CeLsZ1p2wLWyEpWyAYkgNXx6H6Kp1mEc1u4p5QQs5dDBNoGunCP4An9SzegGJg9vM4AEqmjHyjcoe5dd",
  "key32": "4crRFDRJaYoiXqNBiRJNjC6t7441aMsT8R7mJBvkYm1DbccTkVSNS5fZW416GnkpYGGk6L7PUtxwEikhs13gmNMw",
  "key33": "4Eoxxf59HPtQVhmYdZ66aJFTgBcVLmb65a4tMVmFn24RZwFkYNckxRtJb6SFGeZ8X7rzABU1Ky1uagovQKjdMXC7",
  "key34": "mfhA5ST6MSUwhFFQ237FG5PZzfRX1RX7rtuCqBgUchChv4WGhjNh3tXiYii5j6eKTaebp1nYeVTTqmQVWz6EE11",
  "key35": "58SLXxwuxkV1jPhWWGXgcNXwNwb6gUVFA8DS4Y4uSmmLj7PtKp8Jzyu4ctod9rGCCPDgjk5ZchAvu4cvgTJKPZWk"
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
