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
    "3qY9o12JuCLwLUwcpSMymFavAKcV3yJ1aHxzQX2R64FYhoY9De3w3TnBguLceUam6kRRmfBT96zWfMdZZSVYHrc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wePPHQ61TADCGC5j5G1fy1oWxnWm9kKtnmikSduvdFcsVWhSb1U6YZzrbYYPdGZEM5mkR9EjuzVHuf9Htb1f453",
  "key1": "g4LjwzjgjF7VxyfJWnvBoXpw9iLnBpGjjcrDMoB3sVdYJoQeX9qF1pp48EorEzyDsf8QrktX8WprxhvyKmKvHAa",
  "key2": "4XtBNZC25szdJP6tXSCXBdXLQTNkTsbPjBbg5WmA9xkjKmzhDL2HxRo4AaC59uxfzrZF8sCzPyhRhu1aYRvcTmAk",
  "key3": "37mU3WL5exHpr1JGDkP4EUKKvf4zKqaWXj6QvN1ersn37D9Ei4zcFn6zTPYb16YWnD9KFvXQvSEd9VAoKoFd97Du",
  "key4": "3fnsPWeJizpXb6dRXqkMAk8KXY7LDjN16iQ7ms49DV58EAcSfNtPGM6mGHbAEyLTtXaegMhW4AUgEZdEdsea7ZpJ",
  "key5": "29jPbzSHHVfuxp7GLn12QDsQvmsbE3N9f9P7boJbcGrpik7YsB1Y9wMhKWwko363sCqF7R5mEVrDvrBrWEyvNGDi",
  "key6": "4VMAkjUhLHfAueHcXRPRKUXp6odHbie8bzXLhvwySCUsAoh3BHjFAf3Kf7VJL3KaXLrQm9c1dWqzgmLFxsoU4AZp",
  "key7": "CXEeFBgNXVkksQrJSTmjqeTJaQPMDAYA9h2ZSkvkG5tPFr9AvnrJcpKM2WGcMJZ4R81cwxPqSR4PUKnZwpxBAjZ",
  "key8": "4qSC8UBZ9ov3wnQKTK82Dnjs6ZHvYFDbPH6Xo4uo6sb2nCfChSyg6HvKGS7ARV8a6RQ3NCjRKFkRMQnKmiumhevo",
  "key9": "65rEfQAMBycwsYg3Fm8tWnb5GHsMCPtggYcKYFAsrRADuMLdxGmyPxfK2FfzhJTKDajc1VBu74QsCvLL6ZrbGtFQ",
  "key10": "5AnJiwqPAMjzGjCWRABu7gio6a92yp4q9dzPvvKEUpetLi2rGq8kvg5fgwsxtbv3hdHZ4g5niypsjEkjz1kEkSju",
  "key11": "2md4orbzJ1dNtgyDsc6eNBuoVSamiFhhUeUfKyQeGW2cvUm9QZEEvK3LBaHesKu9un1q2brCNvKR58CBSoCoaL7M",
  "key12": "viDj2B9SHQTp396p9iVPkSWFyHsQT8a7Vto7vY2mH56UtrFxxT1f6DjPTGXix1VGV6r8sYBTsxD6gt42XW5WK3B",
  "key13": "49d1LReKpfwmXQPGVt8cRBRwsH63zZddwXMH66Fe7gMUD9LV6hBsWRKuXjvMYyaDSRejmD1bFmMJXkMkrtNSYqX5",
  "key14": "4bT5hqYwHF8qwHHpt72tu1iD31tzHSFX5Tz8w64Xo5CXe5EhgTGXDTzgjrmyBYjxyHuMPetFiZEAudvYijPVm7L",
  "key15": "5Kd7WKtyWKf6ovvraZjwd2WCiYf5p7rwk6qzN5p4bqTQ4Vr488tpgqXf42C2W4i49Nu7TJjun9vRAMZ5hrwCaMkE",
  "key16": "3M4QSuHKSYVTeYyrk85iQkqFbZxgyiM6Mvv9hs8PSZwRbMA1J3dudG24N7Piu5Hn6vghDeEBVyEfjSzSwARDU1gt",
  "key17": "3LxhCxky7crFzS9Q469dLJk2xWrNKfWz5w8sJ9Aa9JghGv1AK9Nk1LSUgq3UbK1vjfReHJzdtG9ZTjSqquujbExW",
  "key18": "5THqTLMkU8L7MFUTon6AZ5RR4PJv2VbeaDhE7R63tKdnTtR9MAjYyscjEBKt8HHMU9gWmcyb1MVNEGgA1hkCHfrC",
  "key19": "5PnQiW8jhkTVDyuk99LpfyXVhc1BtsVdRBvxVvqkaED4X9feojj6WnWjPyGKgiNf8c1WSw9jYVhfHKAU2EtMKiYw",
  "key20": "Tm5QQK6ySn5JQE36DnyFd7NuLHVNVbSfiduqbi2q7tcBhiu7KNMc95RPbZ3mTSMSMCvr35fGgCuorA98fSbV2VZ",
  "key21": "M5MnF72xP3VriV7F4ecG7MhhJ8jfpCHv5w49kfyhJreh4T7dGZ1JrdxJm5odZDVkX9z5r3b1bAgiBqxvspBuhVa",
  "key22": "2ZkUH7R5cABLCYAmw9caKERLWfKHeZykUf67nXu8NWSzEjA4Xtn4cUMa46oJbaLmEAWKbvnLbMBRmGbvVB3d6szF",
  "key23": "oLFgpRnMtCFN7qrCdoFhJPSU9uBz4kHQm9ZJsaooAWAyWiDgHY228MRNvW4HbBP1utmkhUK4XEtcnsUUbR7uV6E",
  "key24": "5Lwp86p5abrbyRRUVnaGuScTEunJYBdg8i2G6hcA3NvuZK7JCsNs5xBzZNF9h6tFUxAniabzBqvkLYDZymN1MTrW",
  "key25": "2S37ujnFacpHqMgxVdreonrp2EViPJo6LkUgTV9Z2zSasUHnXvsXcSzd4P9cDP6BeFx928tA2jZHmG8JYtSUSE23",
  "key26": "2A7ZoXsN1eaUtaKWo4t9dLxtWpemJnisrnqF2hwCjtZTEBsNyeRSGVnK2652FXEbNcp3yGAFyD2SSGXt31qA9ift"
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
