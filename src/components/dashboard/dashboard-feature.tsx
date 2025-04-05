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
    "3Jthn6b3aT5knSbAcsJuiNzS2QBkhb2BZ9KNAcDSqx5fh2Sbscj9JXYfXV3pf2YvDkxRETzvwy8xcokmegvUL577"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrVPz1PocvMzzvsEoijpR4sXHAzwBWqZ6Bf3X1JWzD11tWJECQT4uLKhrf6q8mSya8WRhb8bdKKH1QCJoANpZCi",
  "key1": "3d6g5XYerijxWziz11yQ9MV2YXABynu79LQrdGhwAKdWzbnYUN5PHMAk5nZLCsbJSxMoMsh4fYKFLeFcstgZzUYP",
  "key2": "yUQNSJh4FCpp7FZynhongqoJF6x3JeJngf71kxbNBVhGwybet9ocd9FcDnjLKmS67Fug8miaEvRQ8xKTzoFST3o",
  "key3": "4M1Ff5xymzGcpqNEW9eKVL9kf477Ru4beEy92ACKhoYxqBfj2hz7GBwrbHXn5PBbZELoDDipDt9FJtGzAdeV8Ae4",
  "key4": "5en8ELNM6frhX7BHoLuPHbnL6yTDgRaFGZox92spJjr2KiadvfQ8QD2amhHAwhSFRHXLMS8h7UYQpmEwjGBQULfk",
  "key5": "pvUUqBFnWexWjej8iBv7XzEHY7LwbXhExPjAwL1RNdUDaXHZR433ingDbBEqhBosN8JQJYKdFSCXDx2gD7ft9eb",
  "key6": "2rg3KhVWXPCr1BMC396BopgC4g6kncNtrE4rrPGTAxRnsiwWtVHbF7TaVZ9nCnKyju82cP32Kh5tGfDQkCWtFLNw",
  "key7": "4RKHCc4sMuLr1Tma69KfuRQG1LW4tdKT2EBn7ckiE6UKC5PjkzmRTUEwY5yNZQDqBriDe6W267HqUTqSfhoEY4SK",
  "key8": "5pC97AHLatCAnLW3Ghw6czsYreMc9tHeS7AR4Lm5eugAheCoFNHCPUsaBysjZnB4vXJ7gJLt5Vnsf5GRGSF7VX9N",
  "key9": "4ZxE6Mnu9uEUYu8P7PVWnhYwC5N7NhCGa26Hbvzzk5AyN7sU32TTWSLnsCPHqia5TxqihFmaVkuuuzBgGzN8vYXn",
  "key10": "3wVzSPKmuAHqTtn5LNwgXuiGFAXxe9hg56FY7gxAVnYier4FgsAcytTskEGWd2BUP6UGKLxgyuRP5RsS223NRe18",
  "key11": "25kfSnYdZhhr2EWPQPLUD8ZfmhEssMcgL8XW2hxKcwzedwFfGHhNwgnsP6dkB2TqohqHJNEoCnx8cNfnjdBQCqm9",
  "key12": "5hnmxFQxutSt9qHTB4dgiBNAHCPE7gJ4r8iD8ZVo8wXfUmwxRdpxdYydQsedRFR4gZWf6NrrQmmhVUKeH72F4B4E",
  "key13": "6YFunKgZiarHTbXuVN2z3KAEqY2au6zCEBsSw4smJygRRnnfDFS1fUWcviCpE6df9YxGGp9s4LjdFkLCecWZnzq",
  "key14": "5AhBjPw7af44BWXd5ZoKRUWKoVLJ3rUPa5zBxUnAkh2GwxGCDxLJCpsMFLmvx7WnoigPKWJmyQYZBwzFoUNWxZCX",
  "key15": "2oVrM8rrjMwe1PJaHmQkihLaNRPw7rQkh5wHAmLBwmw3jyAWWMbMYiLuSyw8MUqh1zPcYsxp4MJ1nDNaQTuagroM",
  "key16": "4fkVGBEtjBvJkYz3aAsBh8GhpY29edgm3HuwyMWtmiCCS95cuSseW5P2bKFRKn18tD9SxirfyqKQU2ZAWd7B4qcr",
  "key17": "62RGF4F9ZjbqikQdz7SR43VXd5qtZHxGXH3D3faSXdvRPU7Nov2juQMfxsX2EL3g4h6T3PdHKtMBZkw2hyvyk8b",
  "key18": "57HCEdVE4h2K7DB5Q8D1qhPz2vzGcsVt3hiB6LkL6JFYR7fjB7Mtrakyhhse6CwBbtnVgEE8dJfZFr2Gx28kCwSp",
  "key19": "yN45PcDskUNKQDhcKHnmhkFCqJDsnpkdBuWt3HHg4pTAu9gopLXdsgFYE7j8YKj7QKa1HP7yBVwwsgUXcMNjURE",
  "key20": "pZVPrSSzoyxyxsR64G4y2GaQuhWZFjx3u6HbZNom2AAYoA1ST2sc93yEHBj2uM2Y6sUYxicUDrXP9V15TnkPSN6",
  "key21": "4enQoGMgYd8FQUr3vn3dezHC5VA7ZCaqfi6dHdg4k8YxnhC9uz5BUt3mgmHCig6wLcgdPhubLoBShUCHDMTyydU",
  "key22": "2CftWFuCxZC9Wy7SM94Jnq9gf1c4UEMqgFNoN7HdNkgBfJngyR9FUwVptB4SfoSYs9r8ahv8px9d62tzRCFZa9CF",
  "key23": "DatiEtLpwDegErzGRYZnC4ovTsLFC9XwnhhdtyMjyEZiAy4uhJXHbAbLspW9LV51Gy6xhaq4nsukaQhXZfiZ1G8",
  "key24": "3TueN1tb4QV5h9FedqG8V4vPj9W8vBoZpZzXgd6Ep1RYKkg1sr28w7xTRyTJtNdeQ33tPVbmmgTtf9FY9W6fYb74",
  "key25": "3caajiGqpyZgr6ehzsB3RCxfphU37jN3cr9rqDJjQsW52N4s6QFovnLuxPJmTrZ18tQNBW4ZHxH2e5nvy1FMAUWU",
  "key26": "4WEi2nx41TeCEVsC4mNmtCNDMPFVbKuAc5n9S315hdz9j3hf4Mhh23C3kAki1FDUcsCnQbdmFENav4PEpJiyPZyw",
  "key27": "3fNbu4XFWnLMMw6bAPzBMpeWpiGEtQK4PijG32Y9LzoGgqx4pnWZPWFoZ8Gim93TK8ErFM4Wb8zTT815v5ES7spm",
  "key28": "4YsVZZ4aSZX5FSivgmeZRbZT8ATxqPUdNpakP3g9mPcuRFFJoseKgavHeXBJfcHWxg9JrsPgP77Jy1raVA8AfVZg",
  "key29": "2H2Px8uxjLgNaZ6X78Fx9AYFrLHqGSMBJ2qDjeiBei7CkoiDs4dzDbk2D3MtSZA2AKu6pwrtuRPrM3vVgMHbrR3h",
  "key30": "4PxQy2dx5RexXgWpDTvh8kRYYNkdYjpKLVgZDvYBMPsU4C67nhEbKn8Dujhe6sryaTcyntcSWzKnwhHUX6Xv6CXV",
  "key31": "qAn91jhrD58vnmVUPhXz5aQsjmYePJyC8nTUd978ii4QbeL7Vf4U7A3iCPazYDccJistPMRRbRJWFuZ5mekf6aJ",
  "key32": "2sH8Bh3mSTk9PXew413Y5VtvyzP3vbe8s6DMj5dFicevEEKr5Z6z3RJfKegTdTYvpVLaWf1JVg9oh2Ectac5LUcb",
  "key33": "JqW7iuP5mLjPqSq53FA5em74zbnAXFQWXVY5pBmUYtTpUgLqVRLGuWjFXCbeyxiPvQSpWTBxeDK4YvtZ2CwBquV"
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
