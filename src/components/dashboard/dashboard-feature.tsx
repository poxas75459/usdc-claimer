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
    "3EyeoqGPkCvQV5rjDGRGPnWCH9usgzLLU8oBcQHq9ho7tjQZ6AGWJ13U7nyVLJwkmk7gNjhuWqeHDuzMZbAi13BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2FVH4mgfeXcH1pfcdKyec4vAj3KenP5RoxgK2ypWUxCPdYYnbeoqqbTWRtjQreFivW6s12ef76fJiDSwyabeFy",
  "key1": "54Kft197e65iqySw4MzSJbG6jYmg327GX3KrEEn3fRtVJQ4QrHyHHJ3r7AWDXxJq5A1ZsSFSoC1itFn1vsFn2jSh",
  "key2": "2KcCf9t67ifxkgxmT4QaXHEf93FsqecGEYvoCifFDBXkF4Pb87YhgJcuWTpgBtXa8dTkdkhjEgPdXby3BdoeTduf",
  "key3": "2vS1wNc5PEA5t5Mb3w7bMTPdjMdUixSNwu3nhz1DQV2bGyyJwEx6JFj9wJyQW9SUmQY8tjYyEH5rwxQ1bLXmsLPJ",
  "key4": "5dUTq2AGgKYAYWaKG2qppoMFBcZwGy4peaVDT3wmweS913cvKhgyhKiWxCZ1VPMvysvGcgVGpf6wxgKTC1asmGP3",
  "key5": "4bWEz19vBPWQ3saWtvn4tdnMj8tcgi4XGu1rqLwNhJC61qEBUQrNgPjwSXkkNLpzxR66aqF7sq8v2SXDkHs9ByMH",
  "key6": "Xg47fM6W3Domk6epSU5yuWFe32JfhQRKFRPZHSTYtZ9SW7D7txKWu9skYvtg5Nfn8Xn1cmGinSESfwQCgd8CsbT",
  "key7": "2pTuFfuGE4UHfP29N2tStRZNmZvrBc6RxjfAN1GqS5hDQFFh6UjXBkb4LfAXE9cNQXwr7R5vJGZtqg1RZi5x5ykg",
  "key8": "4xFx6TzTZAcY5QnqSWoyKvhhaCm6Gmi81HzwPbC2VfBJ5EZykiv52oi4Fg1M54Qp2HmngnrN8U1TN642LHMtMEMd",
  "key9": "DeYfFhrPkuq1tN61c9H8aimdk3DNGXAv6XSPM4sb7Yfwznst6xhsKKQrPYMXENX38WSiFSZ6QtWYEaw2tZQvDbe",
  "key10": "36muktwutX18uMMLvkRFRqoMfPQQRcMS4foFna6RvyTJQ8YpUV8EjW7RBXs7pLd6m2Z6UsGkDPDejdmG3n4mnFEz",
  "key11": "4MNkXkZX7ktjLmu6EArpxaq7ffjnCjcEcRpGmYL5J88ikhoDFhBQkJKxH5sDSsDHAk8jqtno7h4Y56uTfvHQHpNN",
  "key12": "5sJoRNUQXk9amyVnVKatjAaCkTVh5hHJv9rJkDchcRCaDnurezbB8iqZHi4zS8uXiEVtFXeBV983Uz3xDo6WHmTZ",
  "key13": "2Nyv6TpeUpz1Q6hQFDH8fGyTRsb4Z9AedW4RMuj2ayNfMJJRG5xG67jcnXtZhVgDeKTbF3wdT93SiUwv7XZ6LiyL",
  "key14": "wvsxyrvzyCXCHWTfqGCYJmMFzqaFUHcN8BZJ8cPc6gfdaMj5D6ZeJZJPD8hgAuVZYUWqQiv8mmsTgmYixcxipCY",
  "key15": "4ZRTuzjYwnRmgSXhEzaEEF1VEKiAeDppXk7wnzkhhmNo1NdKZGdYgocHUoPwRdZvbeMr42hEfrDvoMQnkjsYiqhB",
  "key16": "59qbaksg1ceXcxit9RBSeFdAg6V2HwRh9EgHi4bxRh33ci2dYduzcM2GGC2GseG5v1mhSRJSrcEwjqrRn4KCyhsY",
  "key17": "4doMQ3nzf9ZRCBsEoxYsWiXS3WEuCieUjTt97pNZYwHC7y9cmoF55fCHsELinTwf7CzK6FKmiCnscky9FP69Ec58",
  "key18": "3h5aEbyy6yv4fzsj9kNjBvoLYcsiubVhJ5YE94FVsGwKzkZrV3ouGrRT7LJdXRBA82c4aY1iLbyBL29GpnNErbfQ",
  "key19": "5dpxpRyC4JHAqA5ndbVD8YCg1fWbLjq4CHKDGM2vuMHU5YDx7acVGhk9fVX4hYS27nJv1D4KxsrnwPcp17ocfohj",
  "key20": "4z7pD9WTZff3pdpHtcs9mgd4789iKUDmK7CSMiGrMkgmAroddbAzTMTSv1TPK9FATML4Wkp2mQF9XL294ZKD7vwa",
  "key21": "ww8zgwoP5hR1hNqnsZakBftAsVhAnToEJvuYRZNqhUJArSPrSAVwtXBWRF7UtUR9cszYUAXZtF9NVWiWq1MAGxi",
  "key22": "2SfERZwES1s6qbZWW123TgxBHWh4bNMc2TgESJZko7XDzmQawtociGe5SbB9FmYmZPo6tZUudnt9fN4db1oBmz5q",
  "key23": "49jH3dWsbVns8gcvVw9SPwcSXB66w6e6nLi7zGi5xyyJGtZ1cfsjXV57jbQy4UHVb8ZAC4s56ZhgtagJ4EY4Yt3c",
  "key24": "4xTrpBKVapUxdVfqtaLyb7dT3KpigdMBBYumzh7K4aFfk87dEmERrms4v3xqwBTSwmwKAADdvWQNjGTMSsxx51pf",
  "key25": "HWLec2M4ZyRUTE2n3LtFWjP4oxawnWFRCUoNKaPx6zum8P9WkL9jaMLUVr61NAVuYNUtQBQLSqRJsnZkn76L5AT",
  "key26": "46fyPyMCvZ1e1jqW8VFZmDAeSqR6SSscrtDu2W5Es7k8CC2aeYEpNN1H7YswKZDhzqgjJvsHwg54g9snrtyjfDRv",
  "key27": "3STFkfFkw75TuXUYxyKfH3SLHEdXXt4byAjM9XogsSsR7pA8V9spLp1kw7boZDZBTQuWWwTYL6LbBL4CDU5CqsRw",
  "key28": "4isniysD5angQaKGZdMU7Utket2SZCvUyNSP5LEfbvkZAtqgCfFmkDn1i3UYZzikkjj5aTpmhCrjUTq58p2R9u1c",
  "key29": "5SJYDJZ18GGex7YBVLxYNBUFNrgFx2PjLVFiwhgqvgi22zwazBxfRvTgW4gvc7MtpmEG2czdesqSGXWxCihL8VXo",
  "key30": "5NXLC395xqgycdstkzyQJrGgUgFABLhj8p9GJKcY7B6kxqkUfunnr7H172nqspcaYVjdb6wM5eFLAjGGmBtj6CEW",
  "key31": "4nqT9FXeHDvXg5zX7YzKMWdzzitUCRkWEsEsgAqpCydVHNFVwwJQbtet9pNrPi9tyoMqD6JHNw493ezUipjXm9vD",
  "key32": "59Kxn3Q7ATGdTrkK6z3rrJqDDLUfUhvttT8biHr5VVudguyTjPHpAD997dhKAQg7tuUka2aM3L8sQW1rW8mpfQyz",
  "key33": "2s1yMa3DJBSCAooeZ1RwYdDiqFAATxwmx9RzRGAYwQAgF9SMUzD5FVGjh897Xm6nG3wdykqyQA42SXZZjQ2AAtY8",
  "key34": "412bv9eoRRcCojLb39aXBpZ9dMB8JaQcM7He8GXVB9iLHp3TAY5KHfx2vNdngTqzpDkwvGj2PoxMLwYaasyRKMrg",
  "key35": "32Y16YPdX1L9zRD7nAhDUVd6HMKMb2ercJsvrvcf1gbKWKZMBSMb8LkVa2wTGcDmh7FG36fCwEQ8Hh9scAmmSkzy",
  "key36": "3uoZ2ZEKSfo3cqM4p4JzpaNGgFXSwA84hqD8XxZ4ecR3qCvoxfuu5UKiKZKg43Gk9G9Yk2HR1hgizDpXHVCHDeix",
  "key37": "26ivycnFhuWPSx8AqciASSfQeWxUYhiTVH6N9GfyF9mpWES1WJzGF1SFHQw1ifhcfxnX8iFQLjG38q3GvtC7ftb2",
  "key38": "QvT6Hyenqc33HsJABopD3qqFTuidaDbXAMUgbe54QhkFveXNctQYR8heypsY9ghJgcgQgBjx9ZcBnhZT1Qhh9pe",
  "key39": "65YWVvRQK1h6m8SPWty2fHxJc893YBEaJv2Zr95XzEBDkdeLVdvh7E6K7PxrRja4BVhVTEhkcbSYqLTeN5DQaqRq",
  "key40": "3TPdDbiRiBkUBaWJtyjtEiTMzqBR32zdicEL9Git9BZMpKLHPFHcR26i3qztadrWyxjmmqgHhG9239AzXWNofDZp",
  "key41": "uEPun31Ui6ShXTZZnte9e3F9JxHgEMC9KS95MTm6LZx648kPtATWxR3ua6hFDdXrKiCSGKcQ89Cu8R3CEyejd6M",
  "key42": "5cXe1nsXGWtrxpCnYg4rTrBCkdvgQfqU4Xqv8edoeGRgFerVZ6gMz6U6mbvxbFynQgUT7RmiWJHp7p5oguz5o7nt",
  "key43": "2F3hUNG6k1RUxbn8DfZXjqcFQbwDPm4j4pN2UinHxmnEu9zMu7Xk8vmDgJWUezW7MBRgemXJLaE8Smdsv3AaHZQQ",
  "key44": "2W2d2m9LTHCaKU4wUnyLLoWRDsTR11JLzq3U5ph9Et7cWD1PMf6b2BYqcncHb7EYaRhrjjkcNCt1P1tv7PYbjPw",
  "key45": "5sB1VSncvica2NTvywiFayyuyrqJugGu1yrUByQ5ZRFDt6uV6SmNf7yT4mc5gZ5dFsY7ebuzhRfGQjuT8ysCL4QG",
  "key46": "4AJcmqqRyoFQSBovhaPE9A2ChCMvPEeuwXKD4uRYt6f5xgqqbXyNxBHNd7dVQ3PCudgZLu9AY7mbCwputHVH2BD3",
  "key47": "3hv5MhnYoe6HfepPHhFY2LRkQyt2uRbayNhvTC7eKe1oy8vkD2BRSuJHRfVeNghWYf1XXEPWRmrLcmbzgBVKKPK1",
  "key48": "5bo8BQea7VQpjoBxZ4WzdeyGiRFZW47R8pnfyaaT42KHKNTdsUt97HDxKgPHj3UA9gBWVvApSwyBg9AH7mdLZoqo"
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
