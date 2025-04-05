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
    "5yBCDepWQReheZgEXbVFGPw7GHxkBwK7bEG94uDKX63wrRdE1y8Le9fpbWR52pbnfzwSx6TupaXqfvb3a8fiuMcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YnfizpwHxfQSE6JRKsbrDzd65voWjMYWrFKTnKnwUrmrHUsDqFLmnxhzRHjhYpfVoqQVVC1bG6wXSPaG6YWPTHU",
  "key1": "2WgLp4zfC74rA5Qzf9enF5RjkKF5qg4jxDrtq6xCgpc6DgPaJNj6Um7fDHWwyboDDrxdzCE3jXdCAovEGDFtntrA",
  "key2": "eEUNXhN6D56fvJ3oMxcLxQnjRt89C7svp6pUAvdoeu8UqQphCn8mQzhprU9q6zbSmkWDDdkTG2C8ofCPCTFCC27",
  "key3": "5eriUC6AJbe7enh1bKs9vnYfUHMHjBXRfAnX99fbnFnaRoo17YYFukiwK2TtyqTVQfPWohCEZ6GzGMfo4gi385EY",
  "key4": "5xRPHphMXavac1VwZLQLR8Mribjdd19CQfqqxFf8b6NAjvkRV5ULEiPUs9g9279ZC9yWqv8weCbMdjyKh61YedpG",
  "key5": "5M4is64key5fmszVzu2c6fqCw5MUid83uWEP65A9n3UA21m6R9hgYapkfv6rbheJqMYufsBkFyb4yjGRbMpDjdiA",
  "key6": "5rqnuoemspbwdCd4trCXLG9hb94KcZupQu2kCZdV39fGmM9SwzC5ksvpMSn52Q7BwdTFR3xppt3CQkaJTF3cGeFA",
  "key7": "47XBNQghBwxJ8RHHaVoEVxxYbxaR5HD5f7G6rwhxH7WuV8cvm2qkG5g6iWuJ44Uo1Wd75Z7m4UzRatzMtowxHSPF",
  "key8": "2bFyY4c41vSDn9wJFMXrtFdnxLptXknV9Mi7oKfdedUieNvxAdLNN9L2oriTdpUpmk4hdBFb3AhXYTzrkuvSXp33",
  "key9": "3WQdUzUxijpPaPKaU7hNeu9jVDQjg4AiNrVenA3dzhoAnRYtv8CaEae2nXX4Kxw32kCCKPV6E1HXowKMMiE5uryn",
  "key10": "tW1kQVSM4RW67FjYdrtLhvCp3SXQwY58atRPq618mHEKv7J8FszQvipYvajmJd2s1SYXwuoiDybyyRdM5zbv1tZ",
  "key11": "2M8W9dVdmbPFHB8RmXPBkJLKhKtc5vsKA37Dt3AaEbYoUuafptJ5FZC3xYkcj5bFnLmVbQg9rFgGRobmVxxLtRsx",
  "key12": "MKD5GBAMPbZpfoA7KiWcHYYLXPrrcwkanoSLwU69EvugNiPgtwLVgcYrn27CABSYPqhbd3qNhhRTPSoehFKSJkZ",
  "key13": "2iTptJsFjKAf46vs2czAEysGQG5j7ow5e3uhFvh6PS8hjX1z3kVx1M3G7XPtvYz3LuU9hXAkiiMRwrRS7yuHfT3K",
  "key14": "2MGp2mpJFirUuFFDsvSzxmn9QJqBiqbwJRbGSJQf3RjTJq1cmHAKEKJncNpczueFG2qjJkG91WP2APALtoZ5jN1r",
  "key15": "4Lv8GyFKjmoLLLX1TrogUefggyB5QB41iAgmDVyCirE1ywhxMYkqFbMp5rL37R8va3B4e4H5VqWjm9ru8NvZr8Jh",
  "key16": "2NHCTffouCXapnCGCiC1FgVXnH36xGzJ4b2eB9PcYwi3nimFhv6hbnXwe4sENLAHaAnnmdPoUFkyNTCYSdV2F6G5",
  "key17": "2BRWmBNyCxjy8339YRatV82HGTHyVjWdgTUuXpVpmSqUQt62UvpfJWhW9F9oVQofgPrBpBpqN4JkDuBcosEuesEq",
  "key18": "36C8qYEePGVAM2XV4ktxrFeHZTp5p5Ft4AYfSPgcVMnxg19T4WEb7WCRxMKsvXN2eP3jxfH79RTZbWDTA6EEjrXF",
  "key19": "2RLsauZypR8u6oXrgjCbchYwsk6AWwoRnheeTJVU7ASyzThtGN9XSxKF1adjRGFHnR1MWUq3dm1k7zhp4Pg1JzMG",
  "key20": "4qdEzxz9Goh87icpLNf1JzCo1ECQ7jteVpdbrk3uLHHg4RgUBN5hJ6CUk6cbvhuUMCwKFhDMW895Mco2ZcY7Ff6f",
  "key21": "2gprJ1LytKmhcFHhApbD5wmxc95gWVCAhTLCnrnMd3uGScSyLSSPjVS1qXrUF5pqy9jwTZzyegwxZA5VwxQzxmsr",
  "key22": "2PLw5fV3dB3yWXAamRk4v3sYWh3VUCfDLPCLXaULRLxmgeAq1CVnzeEYnsKmTiFF8Fj1nzn3syCeQCdYBRJCxMR6",
  "key23": "2T93QJmbQfPFL4nWjaPH7C13Gp7UUYN5LXLKJ4Dv3YVjFoEzN7godp3CRsnATFRxuctMWSKSTpmyMsivCgv54GkN",
  "key24": "UneYYBCai6R4LAsYDijwd9uveP9uSmW4z6rVb7mkmPyt3hKdC8rQMpBAwarfwDshBWC7oTRo6F7JyX71Cv4my9A",
  "key25": "558d4mJTAsZrHtWwKh6f1fpHpBuAxe4HDdDD47mdBNRFK3i4fnvnWuF43GHJMC2vvesEa7TYvdoLgZoMutXZu9Ka",
  "key26": "45xgMxXxJgLhzMEuvYKNKdJYC3VfZVsQ4P9HjCKNfC2THkwqPqADqJAEFtBm1pjVLCnddPJnLJ1DK7p4pq4eu1We",
  "key27": "5Cs9w4Lmq3k4Ngm9zajgfRUzVBpVbN88Dx4hJtD6t9P9f9FJ6QtoXVPYZ6hEsafZu41JVCER5yyP81Vyc3xKejim",
  "key28": "5RZnB3YyVUJNLUyY3JX8g8pZi3VXGHTxojrFA3FPiU6QfMDo1XCb23QGTGPxqifJXAJhteLHrvH3VVabF7tyJJtU",
  "key29": "Lwthkbc4viuYqqkPMsLZUMttmimkg6eLiEc1avDkaqBur6u8fxRHmMAUvCpbMi1edDoujwtcSX6NQWMz3og8xCr",
  "key30": "vkXFgEh9ru2drTUiMEh2g4a5KxXDjvBcS3h1QrJtLr7GNX8zBt9DYZA8scJz287bvasV69R6bSdTLhoL3Ykgcvd",
  "key31": "4T5GL3x5Wn28HLnCHBsMZntXhhWfAwSWLL8u9x8M4KUDK56qjwxzq3U5YLoc7y22rfFtfLuxw8aAGEUNEeqUQ8XV",
  "key32": "3dLovSQXTWzF5EA19xgaBb4pwurE2rUQ3114eopuY8d865u8QqM88nCmMEo1PTbZRERY5Y1DgpJCsGQhNX1xUTg5",
  "key33": "53vzWKS3mEFzwGcmU1ceGjZKmdrjQLdrvrsWFMD24ghcnfv1n8zZwzuQpPCdcboAbkWwbiaySjoYYdbTtWmsaBzH",
  "key34": "4pZ1h7PcMqsTBPQYMMz8FtbUZAQqyGhGtrqfMS597zjHrd5d87A7PG7u8aAXCyKmSksRZ6oDVWeTpLuCsv8Bdqhb",
  "key35": "5kfnzxDjKnVwLhaSgB3Uyxh7txvC4nSYTGGqniLEkm79e4D1veiDTrBUn7SH7oePeqoDMEaVFWXxhjefLT43ECz9",
  "key36": "4BWeitMRDnFmYpdMFgBDRLtC9pXDdyF3oxP8J3pj7eTNMyLee3WGu4E7Go95aDvT3yo2S3hV9QF3XGj7yJQ2UJba",
  "key37": "65VgQ2DGhotgWrfP6QMkQRN2ehwLTgkTPXzGj9rzNPRDhyGragkDXb9EyxL3C3jmFj5xx6hX7aczjKVNagnAfnBR",
  "key38": "5R5JYTwrBvbXMJS2gTr2HAKzQFCTpdq89ZpydXPnzLQcpj6CvkdTYM6uo4aqgPcaDqj1buR4tCr8KtvdeBoHMEMo",
  "key39": "21DD9EyifRxPsEXKf1EZmUAR5XF6W9VssmfVP3Hht5CUhGwsoP5Z9HBaCyPfuTE9kcRAbn7NLVYmk5GjZ1obGFUf",
  "key40": "3ppeuvii2KuLKxXNSTNDi5pFJFt8GiFRzMWf6VQxvtwJMfe5AU9fVqsXTtxAMQV8ujZTqDPJRaUwAf9DVCabX6PF",
  "key41": "vmFWJwFCtoZsb96DZqpL1wm3WHrFACLv6gRDLTNQmLrQFQKyXrtpJLFyqbbnuxicVmhzKx1ChwDpRbbb696q91w",
  "key42": "2RkTL3uQMG8NQos6urVzrfTJxFk7SipvAd6FY3xMcWNRTKyCLNNxov1A1x7kKKfAYD1KMKotzdXvDVvWjZ1Aw3oE",
  "key43": "4CwxHQy7ZKXJ9JGFte7g5bQ5nPh2GUhE4a27b2rFTYDE9mheqLXPioxXJTufnqc5jzoH74RQQ7veWgvWNwhbc4ow",
  "key44": "2YPTwK82ewaKATx2RpZjmDychJJeh26AkkNpB4A57d6JuzbTtR4uD9WP9kkwj7G2BzBMNQFUvYcVU7wKS7L5Dicz"
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
