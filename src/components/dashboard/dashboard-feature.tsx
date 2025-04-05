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
    "5wZZrATvxnzWTgL1JhKxgMWjKSvDvS3bhzbFvNo4h8FaT5MgB4yWtf4YRJ7oDZ54zXQqHw6R4P9TC7nyGPQm39gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22UKiu1MrCPiuxNkyn1gUrDeFFD2CDqkhBJb5k4MozsbtPrZbyFuCHcB9R1XgbRbpSbikFucxFMUuroa6iBhoaEL",
  "key1": "37o51s3DjKvzJfL4mvSLQufPGYC5B2v1E9GEbhXB7KPpdLGRiBoSurq8VxH9Dd88Maqp9CYSh5BgVbacreycWUCS",
  "key2": "5jXoVbBYCxHoZjDfUVJZcoG9oGQzX2moj3vAhEqf693Zv8y72wXz6Tz1JkwX9t1Wj1diy3eWgzP1CJVDuvvWsuZH",
  "key3": "27SCr6HxY2LUuaag4W18172CDUvjxMqXj9o1t7nzS4S65WLNgPESjcBAyYf8wwkJzMfQMUhJZP5KfPKKkvbgRESK",
  "key4": "PXyNY6dooUg6XFKDYSo4kKUPjRn89i9FpEwhRXLnDGbVEAgHoCZC4stAYpyPywtU65FddgM3kUpkvkxMEHo6u39",
  "key5": "2E9b6dCKsgHjHPX5gvV6Dtbnb9tanFiuwMkXQw4TRZoA5BeJBwBpuaFFai8XDJWHgT59DkxGHYgf5SKUNHnBHcDG",
  "key6": "3bWNonRopruVD2YRmzQPtKMWiiFKF2qWobdNGDrV7bFk4fvtSHM5n1EKkWi8VPkroVBYhYfgtmbEdRUgUemXj82q",
  "key7": "3TKCaHtmd5DhTd9duaRYnxauMrLxEx1MYz3sHEjRDMoEKQZcW6qtFi8eev74wRSwh1kY2VvTgMzDv9V56FZaFTLR",
  "key8": "2UyyqpTyL1zLQZWAA1DDpYSGV8QbrREVCDJPF7DQHTFhi1P2EWA9EQu4Yj5BfSdjT1QJxEKTSA2zL8uB4KQkPtWA",
  "key9": "41ZmVDRvFEouYCGSPQyLcLVcBD6Q7P3x7dMrDhqBGp3CpfMVvMrVJnnrhYmucSGkAb2fKhYS9TABQJySNPS9u7EL",
  "key10": "43YU1XZ7zN9QriADBfGDpdRofi8tkKvi7cy8A6BaBBGb1aj6X1C9kgFTsxEDAF5GqepuPweRHaSKrQmznqq6puBq",
  "key11": "5oPvCjXpjmAvhZCVyDmT2aXkXtvSfwa8AtJuv2W1NgodEfssufrp8fkd3R9F12NMKpZynSVA2R3Mjrj2HQWDQptG",
  "key12": "2XXmo694LKmVFixWMbCXV4EN44K1tvYUiySdBGBi8LRfQyWWsyiYEtrBZ5NMrTbHUtf9ia83Ri4LaSwW3Hfd5caw",
  "key13": "3DdV1Qy2LmLU4xoKZ5hdTWNs4KngKRAnGBdj48yRg5UECaQxTa6jpauQ34MFttwRsurN6jKtxaoy4Ldg8FJDWmAe",
  "key14": "2pK3SgDjfV7ws3GSMoKDQ9hXcpoDdnkzeMbCEkMeucoCpARG5pdMbTdiasCi1SmVjZRiUSJhMCVthWZCWL6mjVuC",
  "key15": "5SHdtPm6A2vG3PXp18KupCaPyehXQ3rFxK1vssNjSVJ7G4YpHVq8vXPPnETLCcArFFZFeBFHNuPY4XQC56D3dBn9",
  "key16": "5XDdVgQAb4bzv8bun4AfLALejTmsswdLe5sbj6Ygn8bR76iP75HAHJhSSJJWiERA5mnSdqWgJZY8fVLe4UhZGdXs",
  "key17": "44smjU67ayLcENzWGpvCwtnpWnMvmoR51J9KdzdP9JEtYvW3GNZ8AaZ6b3ep8omu8EYFKr1KqaKBmdSFwUdhYU9t",
  "key18": "4R1Y7dufS3cTqJxg3kiCaf6PvVDTGgrvbzxoPT2HrsPZmMhfEWQJrkf8XNdBSJdtYxiDdEPTK29cncXTqgmkgCkz",
  "key19": "3GDemnXU1WvTyiuzSkxc4Tvry9QP79hXdYfTYLk815Ze6dFTttMqfZMaig1R7yxWLJKuN6iYapHN9Qn99KbPHzQ",
  "key20": "4qLSzRFbeEZUdazdVTqRV8g65Fmm17ju5WZEAtojheEMCFQRebrwmCw6AkYy4HxUGgG7iH3wuw5uZnjzu2AVnaEc",
  "key21": "ETXLCz8VHM9qZiVCz2eaF2P1nZ8QjMsDg5W8NTNw5bQLyD2ey4LXw8YMH5SwGVTuRThFXFjSBcwnCJ6ERcUTf2s",
  "key22": "5hnf6M3Wmjqc4yyxN9RGMEZQXcYJiAXHwHETFGw5RjcLkJGGQwxmUCrUWDTuHsXCTX1LeeRKiRi3cRZuvBZpDVau",
  "key23": "23eNeiqMxwAbYRY637bQVWPrXtMAz6HNzf1bRE8po2GtrNVV8RGwiTMMsGACNDtSH9k8TeVv8JfJYazs1MKcdDfR",
  "key24": "3LzzsfnXazaaW5LEzrvvSpi2xCe8rFoFV7tavtSbDbykVN7aHgK8B7JJJqXsVazuFAu5ApRuqZVwDrwokWKsRNMo",
  "key25": "3NR779emnEJKEp8FENU9ebpMAP5W13jRvbJUXiF2eYmxHNgdRdpWVhD8rzJvdsA1RCRWLLWE1Eh3CWAfE73PRDyY",
  "key26": "4XXWVsJnNjcbWRMMBBNzW23Y1Hfoxc8hnCuWZTb8REx1Mho5a3ah4Vk9voDSa1RjDsEcWNB471hqt9kZsDimzQUm",
  "key27": "3kbFgvdj6J3ANy2jv66dqNjR2sF2MaNAPuXdzjX9o6pJHXU4zhkWSZJJMDSB7KubvHJLeBBFY1Jr7w5W1py4QBjr",
  "key28": "miGh6QTUGbye3ear4g8kuG3Z7ujXU2no1pw7tTcbpKjF9uaBAugzhtHjU4rrBAJ5Z85gaJbokpofVv9gycwBtPH",
  "key29": "5d98HgbB8fmgT1YueRyjgswdcrCPMWrKaUG5VSnLqztJyQ8oscxsmFEreWXbDu8gvY3i6M96Pefcsm3XUQWDEjmM",
  "key30": "41Wjh1BqA3hxTjmN3JVnTNcB2TEySapDddGEAewSvaMQd3o52Bd9aYzFQurswo3mK7vtGsKVKVXJf2g4S9Q4G9zL",
  "key31": "Pw232BiShttGfER7eCcGsEdvSDVEjiXeB64pmG2w9jiWn8ARwX6ibmpL6ZWpdbqH1XZMqACRezVjp3H7pWKecr7",
  "key32": "2YikS48QbGbcaD8BVdw2zTurKvNpnYN5yka95utiHnxeDNt8XFUugwQajuEXP2ga5LjHUpYx4bnCAGob1ATz3UiG"
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
