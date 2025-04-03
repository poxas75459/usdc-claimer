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
    "38tW2oVVCtLwKcfoKkpVyrFGqeazRaoDYsWqgWtkmrXocxZHgHhrda8D2CUv5Qods9Y7B6nhuGmCb62JEJf6ncm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeYyE8RX2wMraP5Zj5rS6e5seyjFZgL44RjLsfuQk9RSSRa5TnNsuESFkF9gyLNjTKoBqZSTbvye8VbKjuUsKDh",
  "key1": "3WLz9BPg3QNUR97zfJQkZcjhmUuNuBgPWwDUBZLNeNUSEsgf1EoKYLBcpzWSh8m4QVKaqEwfEAxJts5RrxurvMCt",
  "key2": "2gfBHnMwLWd8jRprYXnYssoNb6J1GgJckxUozRZWvY2RtqGgWK3T6hHHaM4tM1JeZL9kGfUjQaXdgx8F3VsG2aLL",
  "key3": "4xGLGiqDxaLoMNxYXbzkSV19gH1ydcywpQwLMyeZgTjrUSND5fwfX92c1iE3hhW7ZsmNcTyfM5wgHpRbvvuAggeL",
  "key4": "MYng4nnhFNhwx6RSp9Y8tco6dsAzfeXm4K5C9VPut3fLPkNmi3L71gfRPdnM77XCA3MeA24UVW5PF8PeFEEiTDD",
  "key5": "3bdV86CTSXkzi3mEv3YqdfDC5dBrqmoXRGbEcYr6pEJ3Aws9kLDefDZyh529wCFeFSryC7Lu5xg89C3CZbnMjgDj",
  "key6": "RuBmj2bYeRL4Hp6bruW9kRhtMUrz5Smyb8a9xtZWVfiBjkQ7iaBLhV6b5rc1XjZzbHYrjfjc2vk4Ah5W58EpEDc",
  "key7": "24VbFCUGZsCBug1FskgdXewG3zr4yKhyZTe77ojWxFtAn29jgwRXJDtMBdMc9z2uRyFSqZGFhyouM3p3jv6tRKgv",
  "key8": "4mUPpc7fGSGouy54u3G7Pukw8yhKqbzDpB3x5UZWAagf8oA5nXeoWaDFYE5cE6F6QS1d3TxJe6dtakQxVf1YMCdW",
  "key9": "3xoxyvQpPaAH9oLUNK5xhZtMZjQsvithiPSQDx89h5e3rW2y6xzvga7K8UfVUApEN8cg5HorooSnHdEuL3qmQEez",
  "key10": "R1HpK3PSJPFRzYfntyp83zT5zVcnFhJUCfevLgpx9fyPBYjUFZMsYZrEZsviE9uSHfbe7FBUuDFhm9unLbpeori",
  "key11": "3juj43v7FoBDfsZPhLQbibNsq2RRz9LBsGT5gc9fDQyM8QRWk5cMka2Mk5KXNiPmsR5kX9jYLNdvt6BPKi8HRAuZ",
  "key12": "ss8Hc8ddDdJNZ7xtXHm3YuUtYewdbEzCt6X5etm3ZvBr45SiGUZHKErychddKeuhGsGsgaKPdbJmWtnmoRnrdeQ",
  "key13": "5moGJJs7QraVQ5WEimed7GsqbABpCyv7FqbghC9sZ3nJgKHvcMhmdJNAi2912xBmZ6655F9RQB2duEMrucqhgDZD",
  "key14": "4uEbaJJgRp5NpHu2WhHbspGYaZAGfFrefvCn6sQc656yj8F6wGk8otTnX1hr5r846JrmsTfMfVyQoxXuDtBYyjxy",
  "key15": "75NqnQyMmakyGSWADRbCp6KHxc9aeTZyQq54pYbeq5HrxF51o3XKEGXdQuHK67bGcsm8sLL6ygjnLVNom7mEu3S",
  "key16": "x1VVvdDZzYWk4NeQndEKF6m37ncFwrsdh9JUMKPSUZTAuNw2s7ditMh9Aq55KN1ycQzzhA48mfmDjd7JmkM1tta",
  "key17": "47WDCwdtq3JH6RsUxetTLBrVDptHiScnSi3qSDCZvdtU4Jw9Kpo45SWFCoMRSXwNbGD1hqFKhjRt38QUdncxJC9e",
  "key18": "3TaPdNqQT6k37DEKymU3Z24ij8DCFPjyHnnZ6rvyEXoHU2tRWycnQNSebXpqmjmGXRAWXbHrJxkGpBnwXDyz3uCu",
  "key19": "4rKLSEm64Lv6UroUmwfHjHEaP44yZBiFVzVkVS2pdWbLNqyVPRMtV1shjxTC2KfJxPXuzCU5NJBp6XKkDaQKyD7A",
  "key20": "4QoKMiTXocKsNbuc2qZz62QTvFSM4nD5Scv8tEsCGTTC2pZMLTeqsMWZS9AMXX41UzF1NHn4RPfk3JwJL3pUF7KQ",
  "key21": "2x4KX8zopYBfLmG7wA2TNPXRtx2p89NP1fBw1QTCzT6zP3Xk86Kb12b5vd4uB3w3xLp7igE2vo2Lox3br5dvnLSd",
  "key22": "5hoj7zGWPE1KN2bYt7JY9Xajfqzbh9kg2r5v4naWp3MczM68mm9uZMaVEfgHJwgjBqsTMVAnqPjsANWmatVs3mS1",
  "key23": "2dGgYwn1p1XQksPNUQX4T2QqeqL2BzxCDFzqT5zuZ5nqtuCf8enbn2aDxbwNRTfKq21XsxoM4jTNBBUj5PofxJ3V",
  "key24": "V8GcR2KnXGV4nLNSB7SHzjrN9mQ66feoE7dQgi78fMg9rxUd7vPdGXBR9VkVLsAga4Yge8WGbgxkBDWno7Jt3C2",
  "key25": "59pEwaqrFWQRgQyrVL4Qdyg3w2suudzkEXsyBui4q5xW8WNPYAb7HEYjrWPAkrsWC7c6efBi1UDhGmckuQhRmPqF",
  "key26": "5ETP9iZYtEEiPRvELmjFnFiDMDGg7XLyfSe5QbYDfcy6zjpw276BYip2ZQATvE3JKxwaZsWfdHC8tAb8GWC3pDec",
  "key27": "62TXkkEkMc4RHDxgns1qpr3Gfz5SgfqfNLZETUYoFarjhiNGnmvJtBMYVc2f339XA6Fi75SLHbhrGyQL4VeDmptp",
  "key28": "2mW9JjUyUUncugkdKeEvanegLMmdWMA4zMA1JypQwtXSGJRXRYfu4M6nwmHyrdbh7dbUD3CrSxrHwK5UWW1d1pKJ",
  "key29": "5LDmLuY4AGycVZh22FRYCEqnvLvvjtk5uord41rN72SgpiWgtRsfV19sVMcoRESA79SiJABU4EYa8ww9gPJmzhzT",
  "key30": "5unqCN3btGK7av2H8S5PwfWHX3vfc6YdkTDcJnm9EXUwrLpi2UyqL8T8kqT6eMHAHaDRD8pbZo1tiPGj1SWhuKg6",
  "key31": "4GTUHEskxBe21o3i7Dm67U2xjnJNiMN77g92kL5oh9g6f1asiEKtZ6Aw4EGSRWbG7wWEC8SJN1QEGoLvhzmJtFkx",
  "key32": "2vptotiXnczkApb8vNA3XNh2BmpKPc4SiCPe4MpAfxaYdU7VR881zXny1tJQ7cEenwF44MzVs16pJKkD9vWTikie",
  "key33": "2G9J3oAeiF7LEwVpV9qwVzNXrUvedBXGZAQ6UpbvTk6oKCrZggdf9vhhJSrm4ciUZGMNqj3jUoLf7FJ4xqY4JVQ9",
  "key34": "4YQxEtkU24RTNnWWffUKabatxN21KNRJtKTd411p2yYX4H1YhyhZc9U14dUovCiP9vyXN5Mw1q6WojNHgBd4i67R",
  "key35": "5UZSPzvRM4DrmXYuXxX9yvnTzKfqEfTmqsV3rXF2Jq1qU64mbJFDGcK8hyk5fr1unxGCc263GrE3ZFS9xSkCGTYH",
  "key36": "EzxhUWRHisykeg5FpvnAEhAqMQrN6N5bpGVEcvjRcWE2wxy1Gf9Wi42JXAtA6QpgtsFscfTYS8rU3cTFm8KgMJa",
  "key37": "3f7DXZ3j4owtZSeB3tDvveWNgHML7WUaQ5umBjDzfCq11WzKjZTWsJ6J1RQdDM5puF6Ztak6F5tK7tmk5bwZetmB",
  "key38": "4rBMnePVafEajavzYTHngjWEQRd3UrKQWmATubTEy7aQUwEFzU8HnCGEoddFNzPELsYHKRyrj1c1QthKNE1aMevR"
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
