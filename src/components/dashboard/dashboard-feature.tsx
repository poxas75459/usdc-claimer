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
    "4cnytxULm85m22bPTBcccdpjZh9EDT9ntJibfxteyi4fiPv8bp4h1bh8VfGYZg1NxCBoLtPNT4veAHGgSvTeWrC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuK5PksyCooZY6pyMFXUgRSVWNgn5R49iEtTPtV6TJUzaFzYCkTgGUjCPHgRR5ARp4vMg4CZsYisqLotq9KxXUS",
  "key1": "UeEh8exG7aejHcf6L7PCCC69SzXV728oygGGvR7XDQ3x5JqjFKNJS8vzAWbWTSUzRpZ4VMW2Lc1fh1KY2rY5tFD",
  "key2": "4zk8kgPgSBcENKs1uUZcrCuYrNVg1vvxqhTAn7Xz6VhuRU5sx6fGHGQqaaueaEJmqd8vvNzQkem45L6W6Na9mz6c",
  "key3": "4bNb78opLfsMSWpcFkEPFmDxfsayTyoXwms27WyJEBPfWWNThF2D5FNsMYGSM6K1EC32fJuqocj4ZyVb2UJpb35o",
  "key4": "TqrYQz8Nv35aKgaCuFDew6iuze8SMGJwGrzGW4gV1qtx5vGn8SSiFLahrgMHbwsqzrXsktAwEFG6E7dqP8h4PMQ",
  "key5": "5T4ya34cnLmfd6JGsWrvJCUFuE8Rf4Wrpw9fRQuVwEhQFmikKNiZjpqBP7rUog6ryMPcbMXzGqpVu3NxymbComkk",
  "key6": "vxQTxBe8kr2y2qCGCXiTbrgJ2DzuW6e5BW7LrQjzFAFrWaboVPfiBFjRKTmEHYQ8oQSghR9qfGWfKM38756qWBo",
  "key7": "AmdFR7fhauujs7KRzqZ2KaASiDRkTNnY9i9LpaBLKnhaxPja1vZMkxLGypiAzd4JCE6289XcmeotLBBPSCuGHfo",
  "key8": "3VaEHKe7AsAcVbKhKzXtotSguohv2r1PgzFxUY9fSxNDW2L5U8x267exRP5z7w3sG7AbWsfs6rzKmPPP3XsQ79ph",
  "key9": "StyqJ6ECy9uD1p8xVBAC9TEr6k53Yvgc3uL9CveWWcqbXaFnpKdGXbShjG2Rh1hntT2z3JPn9gazatEoVFSijUJ",
  "key10": "5jhxGawmPCFjjs57xPckAfjXPmQStJf5ka3zfZJFxsijV3ZQPwWy2QLyLm6vs6QrKbCpiZ6df7vmVwoiYgQRdZY",
  "key11": "2nfKidN7C8qsFAATsyx6aug8M3oNb28eLbK4pn6hUpRqNhcoZqtp9RuNeawoGDgtnr2fgUpRpEgzMYqaDmWSnvaN",
  "key12": "5wgEeM9bzYHW8sWqneqUhX2FKgEt6fe7Mt3EZRw5yrQi9dnyoWMyVC7nQzFp1ZEt5eRjYJrmM2fdmuWjf3tZfCi1",
  "key13": "5sALwY7z2VoWUxK9zkZXdhKUzQcrMAvUDpeGoVhxgWEfDtgHZiY1RFAnw4AEvJUTAmx71m2dwnj4FQVssCS4Jery",
  "key14": "5XnbEiJfZHfWEFNdNvdJDMzRipsZxbExGsZLadcJeE1t96TyasuRkiMU9iDm8cj8cWApv2uqvkfcqH9Q3wiB69fh",
  "key15": "4j9aDwkE6bmdeK5p14ttPiViCdLdxDq9YiXTbkgFFhyxpExKvCTquvcvsukXitdDEa5ae193E56H4eDdyMBCja6t",
  "key16": "567YEgWSHtQVPzsHz3E7EK2Ponc17i6b5h5uCV4KCsVVWDs3m1W7LyesvchakA2q3vnZgKJXSSh6v6ZHhTvp6DtR",
  "key17": "4Zc4Jq9vtgu867sg5UrjFy1Sx7XQPvn8DPjUoqLPHRwNX8k4EkTwKvURCH1e8hkxX7gvBBCgK6AxzyNuyMwyH24q",
  "key18": "49JzHFyfKsewmMDZw25HqawyvA19mLpSUxiEYGdKBvjdgsEZEtFLxgam5MoWv81sHbPhCh1grD98cafVyKUqUE4t",
  "key19": "4EZYAQX7aeycKkFhUB9qJsfZrKBt6wwWaHgY8c3wCPU91LaTEvRzTXwjxwP7YNhp6SScuKcTpkF7eyVGNgotxJG",
  "key20": "2Khs199x5hwQBdzyrDs5k3KCDRzjtYpHoMwZHxKfGSBzpJyhdoAtyyi3yDGRpe2KLe1Bqrzu5a428fvsgR73K2vr",
  "key21": "2AKpHbimJjxutNBT6sCMbSGMvbYbFQW8UNnprTEYUJWKVa2ijBHVmvCW8RmwYK6ZMMDWm53Err2LS9Ftdm2NGhV6",
  "key22": "2MYsBYg7FgUjEGx3RYKDZhTGS4F2NUsFhCPfWic3iwg2CDM3DNFtbg73kaSbbgRuZeZBsxuxp7M1yPu6c6hsGYuS",
  "key23": "TixEUmQRq6wyJggHBAFPeWNL6qpi7zsJmHdWpjwXwNikNP9KxQa2qFFzmsww2CWUMBDH7p1bQaTu4pXmSHwFjQy",
  "key24": "3NEreRTyWhv5XaWTc1opSEqUe482saUsdduKhubxgbnaA9e7Tp9PfCgQtbPNTPNPH2Ng5fZY4T83dU68NTzFYVSv",
  "key25": "7kMxXKaQUPctZBxvg2hqanK8bPFWdK2mLnsS9snszp4ougVsuTye6bzTiwgs6HX7NVGBNfkgJd7AbesVh5YtWXd",
  "key26": "5ynnydMcqHKF4DzuQzaqevcHxQ394wZysHgxBiJnrsizypRAQvVq6YFnHKN7Z2oma9rvkufM3JcaUj3SX1eUm1hn",
  "key27": "2STkUB3g2h1NLSJWihTb4pYgu7iobHGZ135QT64G1EMvSqc45FGzMeAKJTzSBzZfQyiUXgu8rnkKHpSXJ22nooFa",
  "key28": "37wqFVju9YoA1oxXju6fyiBErRAYWofTEJjyaEfxgPX4GqrCgnpFo6wEvpPkC1CVpooacj1RD2mfCD2b2HS2sixp",
  "key29": "4cwUem5z7aowxVMHtzSp3NovmLTPfEF8ymbCLzBrnCskG5wR7Tt2CmyLuMoXgiSkopdKd4cZQYPd8DCHYQqRDnJV",
  "key30": "4Bgr18U9ATVf3KiucVZSdEdF4SwXbAz5jLMFU95GzF73sL8d6pHeWfY9hK7xGnUGKNompo3uqW4n761GtnfB7dKH",
  "key31": "3sizmYXmhcevJbJXZzSSKCBs5t1cELXA9jVmKnFrRixBhty56R4rDnJxDMp5QGRvNSCFXuiuuRAE2uyRqP7hywke",
  "key32": "3XzL6SfqPpmGb4pFZBGCnsRzhrehDrFnrnnsC1WG9ZB6ybYqKgHaMhZbKvuovVt7GMUZ9Zt1HbfDFqWhUyy29pme",
  "key33": "2u47ETr1GFTQvxB4h7rBTZV4uzhB5FT7Lv38hzxqDbyrhWcprQRX45f11ELC81p2uXYRJjTVSNGpASfNELdSd7nF",
  "key34": "2CnRcVJVDqR6Z1gHCQf3CsWThhRqo4UM1Wiy8EHKFsE6hZ85oPEZiJ2bcsD4KR8h7BgMmLoVCr4bYtZhXX4umGX4",
  "key35": "3EtDyf9vtox9cZrXX7ieWVqbYUcjqSKMXmxRCP4MRgWqhMNF4q9BCa9fTcZjDVMB4EfNkBn97bRmZc1UFzTudyKM",
  "key36": "457yDJLxm1xS4QFqJADjAYCjw16qC5PRvetHGBHcyeRQnxLRoomAby7RbUmFWNqBEf6yx8nANoa93mVyBVkKdk5d",
  "key37": "4T8BXyjKi2U4XfXm2hoBZch8wtqyRNSvzGYNBv3SWFcCuFc4c9AHJjZqdfMMz4DRjzhoZtGET6xV51wJCzK2s2if",
  "key38": "3xHp8DHw4QBE2925h2KZXcru6rKETn8xs35ZECnDHhBRk2RGhiexABNqRzgQHhkJ7uuMU7WZ1dNW3vbJcphd5248",
  "key39": "52FwFDE9Y8b3mujY4Bd3GQfqeh37FGEynPNCsVh4eutGsCanaMB2rxxpNF9EEHikWLn8FVM83fPxbKcojyaKRm3L",
  "key40": "UXEXkSYJMB5yaGDdP3EoJQe2Mc8AvkR2ZUc8QefNfzikDMWUQRRpnLRGyhS6bwMfjyipKCJhN2Qww39RkeEoFVg",
  "key41": "2wopYpt7UY6a6JBTCjBYueZG2LomahxJLwQfv6MAMhr6k2CZhpP2UXztL8sqkJjg2j13BLot4pnFycUVxDBHvnHE"
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
