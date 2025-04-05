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
    "3uC7ZsbGDqNyVPHmANhZYY3ajaGkECEWXfNkyWoZQUfgyYtyBg7aqHDC8vVjKtWav2LQkg99XhyNCjJuypf1Tpv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vt9KDGijjQVkVJpYfU32PgrpoehyVqNA5Yq4fKDaZ6j2CiytEaKmMssaAYtTqy1BRJ24s8evcYHK29qGoRo8juL",
  "key1": "4GpTaMGFzrSueqi8XCSr2Lra4npcDgXBgbr5qViBueoX6G4juhzsD24Q3j8TfFGqnuRNpUaXbsbYReeienWofyxh",
  "key2": "3AicKjJA5ooboBpyfU67cr3AdYW6fiB8nPGEQ2TC3KdbbLXeCDH8piqXwET3Zr5uF4iBgyzwriihs4MwKJ3g3rKM",
  "key3": "Sc91BYQdvCLUNwL3GSzLVCpn2rNQm6MDKPUktYwUDSqtQudyDfJwHenhNtkdvSTYPxQvP5wWt5CTiC9mJ4FJZ7Y",
  "key4": "4ozaYz9QtDJtYKmKtZHidx1RJS6pYpJbyw6Kxs18CX85S7q2evHkTWhMWv7Euv8Ukm7ScWyyJ7625r2dKjTivftB",
  "key5": "4tUAGCJT9eEKJY2EYMT2cGHT4uEK3RqtzS2f9AxEiTeZak2ReYRLPRfEUEyLNN7u29qUcUfwiNnM7ZFRhTwVJfLm",
  "key6": "51CPnbiPPhYrbDYsjwFtdWpDjb4SviMbY7WUJLfvpsZzw73VmqMTcB96Q3XYJujwQVQuaxDtXQ6UUoKb8x9aTU94",
  "key7": "ehHyLT8hUNwGzfSWYJ3QG9Gbp1vwhS7hDu3etyCA189S9qDr5N4PVD832GuZqRPiLozfzLYn7HSGx2jrki3658r",
  "key8": "4LaGZfT3B47KevbkWUqTxt5UeA8M6YeGWi7VfmRa1ob8TdbHTZnHqis3yAFmqsR7qqwV47X1VN8wDWRDhqC8HDvf",
  "key9": "d937uj1CgDeb7fkjHiuKSzEqAEhz4gwQG5qb7QzqkmnwxCkiXo87fATbBuE2B6ef3rphL7mZiSJ86VdoVs3iNt6",
  "key10": "2YcmKGJPfsarXv4pFrvMiaZJPZz9iGiZrqamLTMEoFnfhTZfhgnZPxYw7DjX5EMSD72yYbhQnk17ceKVvsGNgajE",
  "key11": "oCCh1xB337jMMWdNKGYYxLyoFct2GFE88mVKKcvSyK2CRvqHAj7A1wT5X9pqR3irx6fDaeefMZTDjbVgba4kRkz",
  "key12": "462RZnPv4sDpXD3q7MmmaLvg6eyhKxzyKEp7M9zWbzfr91hVPL5sXjku2SnV3W5CCNw8vbDwzMhT1rW5GU5b3YmZ",
  "key13": "5wLoRQtp1aAczumC8xJ3Q37dQPQHDuSXG2UdBUtfUqtUwzeS8CDNcb2w8qZxBVh1g32ALop5ttobgL8o4taPWYFH",
  "key14": "3bbrSf9JgUdcTE4XDcRt6HBLnPEZugKjtogajHT92Rmob77fTX16FDm51F9nowHd5YCftr3QxMRrMMVtC2AuF9zc",
  "key15": "59kYwdnMaUmvV9rPKSQvfBRVqQCp1H2A9bry44naLpVvbefcCuviUyY8W7ijG3Q5An2Xius3mVXWHqhRjiS9qDwB",
  "key16": "5pD4BXd8iuNePRKZ1vQodWnCfR4PB3QVyjJ1aZkb3uL6A3jazW1H3XPTfiFjgGnzs1k5YFK3Tyss6XCJwK4DgDXB",
  "key17": "wcsN1mQo4rttb8DoAJu9LTK86uFqu6CLaXG9avr6tYXC4hY7Lf8T3g5twnfcj6RAPiUUt6zbywriQTA44QdE8Pk",
  "key18": "2m7jBaen3Cp2TbXRbeqBWa84xnUhLDciotiVCQQZkcvsybN2tuuXCFQn3R1d9nuGkZkenEUjV9XU6z6nzFAeipK2",
  "key19": "5LAe4dz1ZmgmVh5AKGijt9MCuYAYD7M3wFEpHhG86fheie4cK6TNhyaSRKZsd3gG9nD3SotW8cAzhMHGAQQHrTfj",
  "key20": "3dNNyTcwkCu2UVR4fd69X7cQcHkbiQ56z1Fnnny838KQr9huaEAkWCjhSm7GN4p1qfEsajLSZ5fZyapifuyYSs1w",
  "key21": "2Q2GAf9hz3H8r9Tqz55UyMxTkGx6RnxBVrMxsKPn8Y1h9qEkN49vEqEf2pEjGDdrcED4Ma2abWXpUwu7BCjvYUE6",
  "key22": "3hzfz7ymBcYB9hE83exKko4Zv6MTASyuwgDyPQXCixq4HUqS6n2ajQNdJwXPNRK7z4QV2WkhAeRQFhxXhh5Mv7sv",
  "key23": "2DK8FnFm3eK8tnb1XKmv4Q43TBnwdf3jSasqceWoPAjoWtyAfMtj3Ln4DGUoAERosEoZpupMWfWGgxF3mLV8opQX",
  "key24": "3oAZqobzaG3WTGnq1sV8oEM2LwHNaJGHNkYHDuoHHeigUdLpuC3CooYmB46hwf7MVdiyx6vtdnVu5MUhXZdYXYtk",
  "key25": "4hnwcon66yMCRMrTN5TF9F3SAp5VCveeP8NrNX6a37V2Hfm93JUAUVpqvieMza9wjVrsQq1P99T76MiXmSgBAgkc",
  "key26": "2rGKhWSEzch4NeQTezHD4S2X7vEokNaA6yYaUY7zhVag34vxPP8yfGDKqaWTc8wBSRyAMJyb83pBQUMqT1sRGt3V",
  "key27": "2AB9DRuGXje1qTHVbvW2Tbjv2wfHKBfXLCmKsmwFpWV272b8aQKkSDyy7exLM5v8ybyZ4YbbFceyqJVMxUE6xZhp",
  "key28": "2NhSNGWNWidkEuQ1jci93dgnSsWFGvSe2XU94DijPdTDXaakf8xkKGjBb2prW4sbZAqNh3s9Qix1wVN6qf2S5gkJ",
  "key29": "2sDEmTZkc11NpHRGGbwfZ2mWmpQzhBH7PwcUMFYU56H9B3Bz1dsy2cKNBMUhFzSjyZ95khF6bikEnauXbimYtvyt",
  "key30": "3uaaZUjBDmAiGghpjJo32pW8ywTRWsizXq3EkTETvbzeQNgusjhAN2poZk4KhjCpPohu7EFLVbpzSw2cnkG7sDHA",
  "key31": "2VGQWXiWWQ7EmqwWAWAyWVz7nHvjbg7yKGZZEknjDgzi4gW4T58SXpbpqJotnfcudTi2r3jDTmCgivhH3WTzPDaE",
  "key32": "7FZS4eC1QipiHX9nsdv9ooDgKEMtGLLy2TPiv6rGg1RCb6o6XsEjQkAHSLza7WxXhNwE9QMvumV7yjFEYmfW3Wa",
  "key33": "6347ahtmoXGrC6DFjkr1aB3Xrb9vtBU2kwHMuFLPHbmvKU2nS4cLS6bAGdTfybwis859mMyV3uGAekMSYyubAjkD",
  "key34": "227dpriKGokXRpuWYsDP2UL2HsNFi8ptsWjBd6RsebRqGQYC35jP7zcoG9FATGYjWumrdgzHeckQKAPDY9UuvmtW",
  "key35": "2YJjrCJCuvdkusP8WhqhEqqw1WUhpB6JuEbx4CMrPcZnV8t7h33zz3UGKGkY1zEtxfTVD9445ntLJMPpT73HWFLE",
  "key36": "2DtcPWfJXoVFTJRbtsyVfB1sfmvRktyiDLz1zPL5SgAEoi4whsFVjdFTmxTcxUvLGmaf2Jgp6rBMPiM1qadLxo5E",
  "key37": "63E7gqRynwDF7ujaJtjUN3z2uF6HCjVRwX98SC46wnUR8rKBswRBpxcpNBR5MDkAyh9KT6tB9fps5Se6hLwwJmSA",
  "key38": "2ai8eVxxbEKWHmsKg9xRXJtkGQrgV6YAizvR2GgnKPFPXWVrbnHiTPkicDXDtxLGMvpQBAMNigd5fRQVL6rhcJ9m",
  "key39": "4nggjp4dTTa8yvwF5zhM9uirZ8Gc3Z6DZd2Zzt97Sy69rP9nPgf43S4CPS5EN9A6oQo6HNxQkEm1sbsX3pKL6Wdg",
  "key40": "5x3Yr6PWNiNmdvUFpfAxYiyKG9EAm1rKg9FvJkLzfafs8nB4XupvcbZcv1weqboskXgYqM8LEXe6GkPwL1weK59m",
  "key41": "2ZuHW6ZcVhDyf2h3oxnGCA4yCq4mTm8QR9vH9wvdZSDpx8yYW2d6M3pJNwQzKD1jHzY6QszTZQ3kkyxNR3RNu6f7",
  "key42": "3CUdfcEpugrtPaXYYaG9mqWP1bi7juBXGRJJCVpq5KKXnYiHRA2ymXTQFqcc6TgK1J2HzP9LGPg9b7XcwtPqf7qv",
  "key43": "2bq86Yu4f6HsPmSfNd5tosRzCGUEeyrtJT6mytqvry72zTjQPsRSgfDHVWZQAnSrD2SsgLQabcuo28f43Lz5snsS",
  "key44": "4qP93qAwbnR2WL86xswNj5oPXP23Pnu9zafzAsvqvjQzHN4dUf9P8v3WGR3YFpZojDfjqw7sQSAAM4GVqg6VMX4U",
  "key45": "638d4A2P9aMsZkwxxPqEbaTM2iPzyWF5rcfZ5dCZnLnktmwZdCYsJ8DyLSryyfN47RMsufXFtuxV6sn2PAJscSkf",
  "key46": "5ZW45L9qYYAPfQSQZDraKZLkxmjEFqVkK7PJKbFsZvYo6NVWds1nqa3yGzJgiRehNiLZsp8b4DjGWWNeK6niEq6H",
  "key47": "gCm9VV1hJJKJXyDmLttvjXAJ8HCtvCmpAvUw2N8mchb58QZSQBsfvowmMwKSh2Pwq5d3VZbTF2h4pRK9Am7tzaG"
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
