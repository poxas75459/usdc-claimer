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
    "5F9y1zxiZAe2Vrjd1TUwQyafCs9zLTWu7JBTYrt2TiRRZ3viqFwDpVSNy4MgrJ9oKPrhLiUFYGTyZt3wchATodFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MuRs96McbqmY4vuM9utocRKRDMGyyDutihExZNJz7CAQpvvTofaUvUkMHGqtK6m1j4K43vhThgLKBwyq2jC4D1",
  "key1": "tgZY4H1R9AgqckEju7KQSeJ7d3HJMDNtJ5QtoWEhXwGcmbzUaiPwoLt7AJHzNVzBai3Ahkt3uLq42gKST9PRg9W",
  "key2": "2y5takodD8EehnXt2dmqicyL5mtBkhFaUmpcYHydnFvHo8VR6NpFTPSzw6JSc2fWae9tRAiL2akbde4QEnL6vaq1",
  "key3": "gfN7zck8QURUfJykrSVJuMrny9E16gXJp3jjFSkaeBr1eufvjy2mN7RcHNLxbftDvWKTH3Bdc5RRzburpMyBGaB",
  "key4": "DQGkx2xqckJw9bfs8gZGL1ttYNbTpCAjJZZt4jE2TT3o5vRKWFRtdBDaSG2GNcmw21n7LBvEpTSqNfKRsmyUcS9",
  "key5": "zj1YGcE9GRWszzNP2WqS7vexbK8wjuWoiAPDLLwUxLqkqeQj2xXk27X2nPrPb6nEjAnbxYr6FgCcbnhnNDNoKKM",
  "key6": "5D7sXWm5vjWGVXcSKdPFHtaYcrzRLVV6puLYuHssKMFebGXR7GcMwXeCT2pktXjq2HP3werBAsCaCSVhQSYFQsTs",
  "key7": "3D8hcpVHF1R3FFYvgpyNEpanP8gZyikmfpPpFzhYDsymLpmz3qdcTqCSpYBBjjWXAHKaZ2Hsyo2Q58sbSXPyxGRW",
  "key8": "3996zrZcwi5Q42R4WDh4i92rUp54UDvnn9iswJM1jQeVzqp7YB8oUau3n7kTGN93CgcjGpGKGMWp6VtfFXXr59Zb",
  "key9": "45FfaPBhn18SiiftfxTB4Jo46TeZ2S44uxDdyq6c4Rg6kCNSPbWeaALo5VSfDAavHrMPbWi8KyLJxhNzHuTgqCiy",
  "key10": "4M6fLBw3hhapU1QYnj6s5ckN7SZbW87rL8XznJ8yg6oYgJpEhRTL28gAj2PaCN6bp4SbDqkZTKdrh2zBhrurtmcK",
  "key11": "2CZfd1P6RV3PebAPDzKoCA8GBVJFsJKB15JtgJen82p4eZwU73yGag9sTSuMjfJvBqNvfebm4APS7oEXxRkRdXUQ",
  "key12": "5gouFKZZrhqe89MKuMiQ6FL8yEjSxxo8y32z22LfTEFs26gg1uD1AF1YFnxaVEjRcBbAHeMZj3GyaXTFHNVQrXav",
  "key13": "28JWp6stkfDvi1cP6DUUPrGC3qZcoWMzzvvL2Be4qGkUSmMJS4QgHQqTKsX7hKKdCVAYC1xTqAeMdNYCNB1f3vMM",
  "key14": "p6dputZfJf82c33A6JnUbXpY7wfWHZg3G4Gz2Lp9h8Zh7W5U1bop4HAsxoVXJUxtWPWHeTue6o5XVb3pLDWsCy5",
  "key15": "27cnTBPM61GM95RgcajoWGSY3BdKktzRUtQHzAnJ8jRLpt8X1VmMD6K3v5bXKFZmxXK1UmUwLapzAVQyVuyq566F",
  "key16": "xHyUDUhu7YnUVxtCyiycMvFSs9H5eTxPWo3YvCQWG1tTt7VfDZE6B2qeMydoiDntQWBkRqY6U6LMwuniMb62kiP",
  "key17": "37feTiQrS7eoYXkE3wsDPqdZyN4oMEVjWxHLVQeF9yYVnYN6dQRbRTPHPomzNxsLNpGg7oAsdJD1uuf91TeZwuj",
  "key18": "54JQdLbNEc8ZJRVaYdD6yDFy8QtPT9EJVuZNKZEqwEdZ7aSpw5NZBhpdEtjoG6fL7FtF2sdauXUHuaMC7o8Fjxga",
  "key19": "4UGunUdKqZkzwiCtwaj5UARDCKBQU3TiMMGDVJdnTF7uum3FowJr7G8jwSJwpVkV8vexaW7NcJu8AtJ85dxchCAJ",
  "key20": "4v7UeHHJbBP4pZn6hDhdVgAvNxiRi5sBUdfgxM56SKs6A3g83ZYMm7c44G8h1ZemU19USwmBafWp6jHVYpP9cyKs",
  "key21": "1shKb1ceSypn8s7EPLxGuX1AHwnVky1JWBDFHZqhFimiQxePbixmf4mv9cF2W7HV1EsYb9nNzfcieURz3W2b2q2",
  "key22": "q3du4QQjL6ME1ZrQUeSTKySvCv5fjwpu3UAvWspzwcKQ81geHt7YzKwXG8Rj5ASriuERyYW8AiQdAkuYqkNufeq",
  "key23": "5aYehLq74shHEmJY9qaeUwXgHyptk6kUzvYS2GGte9pqAirUedV6brRgXU1SZFxJGhCjdjGafiqNGHhMwJr4xUEC",
  "key24": "UWfpiRFAtdTnSy1bRJu91ik2kF4gjCPN5BTRUw3FUaxpBqqWVWCZL6k1jmf13x6F5cAe1Nes2N6XbWYshVz3Ygk",
  "key25": "4Y6s5R21D63id6ohrbWcmKLnZ6pkhe7ycC4qUcYAtSoSx3NroaD6Mo5qmw87jq4G4Te6zEN4BhFkCP6N7vACYBft",
  "key26": "3t18iwEnbKDjGWBSwKePsHqo7pLkUy8XaCeQwjqQk1UbP9y2WVsdZnyeTJ1jXt2tWiqYhUBBZLFUDZ8y5B5DTsfq",
  "key27": "3mnZBkQW86zo814UggS2iyp7jzHtDYvvm3rpViQxyNcZF5Hs3A3693yc6JohSmqKFt29rySY5iKZmRjTRJU2eSnc",
  "key28": "49E2kbk2iDgvpuJU3LrHJKvNcQYhJHf4XrDrFsDWgLf3aw1td3URJvUTMGjSUcMMTBeZaLpDThvoMFjVdY1s13tC",
  "key29": "vkgAfZdcdK3dBZqBRupmwRQkVG312146bdH4rrpNfxCD3BfnjfaEo2UkcZrAwnrW5zPuP8wvh3R8TqVHWNRu2iU",
  "key30": "2Q29pGmnpYVYZaP4BDndgJNF49uCrFrTMh76ipJKmZ5u5nUzQ6DVevMDhjx9h4Dznpk5fZYzNLPUfT4PYSgY6vPe",
  "key31": "58ZFH58195ECvYvDM1WE3eXucnt6aXPM4k7KdVGR3SDqwuDiPnphYAZWChTW8cfJyw78e2a69MoVCfJ9od54XAN4",
  "key32": "4z99QFHrzVKh4SpHJ4fiAAsfMg3rWNHX7kMRPqN8ahdh1CtGTscMUjEa4SpKetr9yh85eq8L9x6UGqzoiePjGGAN",
  "key33": "5NargYkJtwHQW9kjVNsJJvijsRf83jbR35FqFRQCv5LKpWFLdnxFJmyiKFURHjiExsA6jqaJ7DK3hs1uFpbjrGeY",
  "key34": "4RHXJm5CoUBBsMLjQwyi4Cq8MoohqXWiG83B4sFWxMnYvcEZMcDufc8htTVmcdHUWYu76L1dgcrgjAKV5e3o6cUF",
  "key35": "2yvXvMpHJyg5BXNNprrHhxd3233JHZYU7Dx7h2YH3JR5aXuzGAAm1hiDWF8L9BSjmwre9imxf3nWohK4uxApv54k",
  "key36": "23U3sUCScZy8td83SkZeg6TLq34aHs27EEDipcX7hZ12TzGYxypLpeNQL52A941anv3Ym5mjrCVHrJA9NqfFTrfS"
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
