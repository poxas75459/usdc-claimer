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
    "AFVNQbRZU14ZZn9NnxPZBE8S62xGN5FqN8X9AH7kmW2fHPnno7sVmCA8iTzQ2i8YReUEazkT5jZeMUJxEREZtwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qdCTxDenjLGzmWwAeqj85CdnFXsKHcmUeC1ax9S18ZeoWAtMvuwJVjkGyrqUTj14o4bnay2EhAzSftUTQq5wRaj",
  "key1": "4JkBSi1wo69ucx1eU7MpJ2QyFrrE4EpX2XT7rVtnhbwEnYvDP8BphJk6GAyJ8oF59GnnajnG55yU22ZDTYPjMtTL",
  "key2": "32FfwB8UU556STnewS3RgovrfVnH8121fNRAvHuD9cnbjKJNV99jCwDQ4oKkrET4WeDxdpQGFKP4hb7PSRQkHn5h",
  "key3": "2oPU22UTgAfjhvNmaM1xEbPjqPaFL8HFUYNyGSeVNU5gkV25vmy84zm6YTeKbAMtdjeWqc54BfdzzAS1tjtHWCKS",
  "key4": "3U1gReqrGDMKdGr3s27z7WxTkJF1Y8kmqPwpKdTw6QfGsXEFpAYKqayhGD19YdRC2QxWqDrYffVWeQh7kcnU9X79",
  "key5": "6LqTR1KHK79XVbHyAA5PjenwgBAjd7TSezwWfnFfEPf4ShifAQUbdL4oZb8NtKmMMtNQYUsB86kDiRRsWHUHmhP",
  "key6": "diKpS8cnEkh722c5ggzheXydWEK3KyBsQBPXHVNpR7racEJFFmK93tYBABEvGM9zaRXLoPM2uJyEM5uaXSWFkMX",
  "key7": "3fxDJA6MYN7At1Vb9chRzZ2U6sHJ8eJE94dQj8Gt1J9einRB9sEhJAh5Q5VXxrh9VP1pfgMdZPfvsavAWSVrXRTT",
  "key8": "yDufhW5sHq2FxBmzMe4f3GdXmv58d4bABtXiRKcchh7gbAKnrhymBPM9rt2FQuFRBn54xpxxs4QtVEJatUQoGhq",
  "key9": "2YbPKTdpe1dsc1dkTj6ZuUGSKw8XAHtGRKp3S6DPrDDeCotbeGqgkpeQ1jbSB7tLvDM14QEkJvHrgcpRUAByEM2H",
  "key10": "1ySeyJ4fbMTroRTcfNyPMj5GqGKXSEAADqs5qzoose5HrUaMAmvgfLemMTk1DLLHi2HJ2aS7nqGo3jMzuzDHTm5",
  "key11": "5XdV4rqr2mqbEv17Cju7L5i1TN2LjHrdLuDsL2AtoBS9StQFyj8AZHCf5kRurKcVobqWQULmms2fQqX1gFncfrzf",
  "key12": "4y7yddqcVTKciyAYaPFS9cRJWAWHD1iXMFoWdfajYiBBDt7xvQyCUbqT2vY42jURLrfSFiJ5WfUhyeppbdj2HhzK",
  "key13": "4ZdvKL9gsZ1mhBNmJvDX6oGtQLS8BxWn6aNNXXJjb42KD1VjnSUT4Z6ZiE9J4fWds1ETNABrjj4wqzDAA9Gd8QQV",
  "key14": "5qqGJDn2cKbhG1sweGPta2hz3z1fxh7J8wm6x1Sn5gy5WTnvH2X878KL2UjFXMj1fBcPjS1KFTEaNsu3miwPp1Rw",
  "key15": "4fWx7nEABJgMXNMpusPVkZwHDFPCydvKSJriBpoCs9VEHfzY2sHMrZ63a3eTYTHTC8thgGXj3zyjjD4t7gsxFqsv",
  "key16": "4kNch7uvZ85sYZVmtTFeoARMPFRpv1zTMuqADLuBq5SyvoJbGUttSkVYBmewTLbvJYKfo8emjd7xqs28zkeomxkF",
  "key17": "5f6b7ofMmsDSAzp8Vx5YgShwyvakJDePTvRDfMfkH6Jwqibvc3gTv7ktdPZds1Y7L4GdUGmBSDHyVzzj6NCC85Ta",
  "key18": "3zZ25Tfj8rWVdsfmMtqdLkFoXshKVu6CJvQBaij5kQRHDnALs71UT7fpaDWmGdC3Qz1ovSxpvzdSyDuuzquBFgVt",
  "key19": "3m8oYCRAg6HwTa7XVtpeZPaBzKQasQyEN4Fdg5kDigwtDgiizLQT8dxGBnHZopiG7Gi1XDVg4hDJbcZ4HSY6SEVe",
  "key20": "21tTJRQ1Reza4Nur2NMUwm8pGHdt8Lmo9moAgWNv3LCDYG6aycyW7xE8gbjqMZufK1joYyDbxyriEozi4YZDgwP2",
  "key21": "36P4RHiz92pgiimFPuRvAKdyGwMncrvodXtbMzA1AcipBGABik9vWXRWXJrUQpi2PPKPeZUkGVuZhnFVL9TwQPzK",
  "key22": "rfYUYkNnj9ubwFuN87VFkAfue1Fg3Cqy7CysiSJuoX1u8w4RPReiCSskyoQo5DTHM6fnEDPqzjde9rimpjhLWMW",
  "key23": "2WSV63nx3uss78198ihsguqJcDa7ZRSv5TVgbpezqbDBkE6nLyzrvoJg2pmWpBrwxBfd5WPzH2cCioU8MuatEubD",
  "key24": "5XkcyrHLYj4xyGJ6c7FAVU5pD6ZvrFWbLrcXSVq2mpYR63aFNvLNgv4TJPRLtVKJeGBwc7iT4cLvGrsFK82XUxYk",
  "key25": "5aiwndqZnPBrpBJMuU8bMWnofziHGx82YChf3uWd42FZuK6DzRQobatNjqdyroS57vJuxTtaL5TuAPywNLbdd3rH",
  "key26": "5wKqSV6PQ8tKsYYrizaaLBSp3rZAu25JEUZFQT1pXwAAoDKFtgN5ofk4ySCsKESQmC1JM7K9RDE6JqfQ8koUtwgX",
  "key27": "5tmHfKBQ9AWcP4ittU1k7dGfJpJAVPbNUayiYf2s6gvDTJh1zqzAmpGVCquMZb2h7D9hxCNAvXodsHaRXPe5nm5k",
  "key28": "36gqZpzScNdzMc3dpNhziV68xywpU7HhgVYAGBeBNcAvU3XaHR4k6PSaXPfFggTSyMpfpgeEhu57s8i9xHQEJbJg",
  "key29": "2pERGe3N3T7Qjg3YY76seB4Ym6nS4Nrzkq5oxLJrhdkF7bMGoorw2pnxdvY4PdRPMZKuD28oD6MB8SKZVBBgL6Em",
  "key30": "3TKSPRP544j9fCZVa52kg3unp6QbqroyZix1DjC5pWH77GYjyEoh3UaMkw6zocMRZU3DPe7Wtci7SpzwqQ7fGoUS",
  "key31": "4HXYAT4gXLCqvt72xdCJxzQVNJ4vkDd9FxE1GXB6ZzB7bVTXPJ9BfB8igJV6kGcBk5gQX7DihQTwbfg4R38R2CGn",
  "key32": "4cboyzFnNmQRQL7VM2gUA1C5NgPm93oMG8XipYkL5k4twYnGfXstLfgk3VzyUMgKYqhH722hHRdMFtwqsaysJZYt",
  "key33": "4E73TnAbgBysokWf1shqybUYkjBGkCGLx3kAWsTfsPguwG1GbvEwu6dHoD1FpffVvPi4RrVMMvVMv5wgrXCbAGi2",
  "key34": "3seoaiMUCDc5BEo3LmLLtt7iYMFH8FPcxZR58poscE4RYbqpqtKj1RGsNk4RrtmtkXjrTZPGUkM1jHoMNu5CmL8c",
  "key35": "5x2YVQ36R1Zdvv2Kg2VZKmtpFkmdE5EbYCcF9HgzvW5Hu2go8wBRrC6YqM9LnB5kfFsji9oNcMbn9AEvbxMcx4U7",
  "key36": "3vkJTw1hs5LU592GRrdV6CiwqVQUjjztbf7ePdCMzjjLukPSYebJxWXQky5vDVeAco7MfQB5vQDkPYwqXBbfTwN1",
  "key37": "3oD3WzSnLSSBNXJDFnFtz32FrnUfFoSXURsSSPhtpnqKALgsVukRyAU4a7EYUHA8uVK61WoSvGYi6peKiNCZ8iAb",
  "key38": "3HGBxS4B9axtbvsxSaYpD4kj1tEdoMWBEGzNUvokk1C9R1oG9JWY65GMDRVfn3Y4JbM8pXBGHMG7SGpqa6NpxKK",
  "key39": "4UBUzUYypVry9ZZfQFt6M3KZcq5MFQWhxx3eSEhNrY3Z7EsQVkQkJp9Z5atjQZwry8aJ66YTkV1eiiDQSqiZWRh5"
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
