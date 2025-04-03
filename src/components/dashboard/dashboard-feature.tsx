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
    "qGpzBoCHxek6i68WQLdeMAwpNA4jpvQ7XKTNMMykChoK3FyRjEJrc2APgkURkv6c13GKF59zPR28D3syhfZuwMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XUsq2ma4HX5S3twNLLTjftRPPBoeZRaYa1CSYdqkSs1dyp8kR936vF31HgdQdo3PyfDdvMwSnFjLDZoJHdA9uF",
  "key1": "gnhfLh3GCNc7JiumYtVmpYZwLgeeheVP8yFJCPF1aQsNvDDcBUvU3Dj6nJaRdxvvuyWR44CmdgJ4VTU5GYaZSZv",
  "key2": "u6vjqfYBXpJoJGiye2D2Pzpvt4k6XmtcwFrYsmG4PgoEy1rEaV7yfGtNkr7EGJ3fUfGv53a3PHBjjaSokGiBaXV",
  "key3": "3Yvh51wLBuL9yGfTCRE5JRR1HKzy2nfY9tahPiGDhETqcMstUXYjxQPTMAEJQgvBz8uucG4PDVa2MhfNW36yMnTs",
  "key4": "5iZS83m99xUbjDSaYKx1BL1rViqUdd9bKGDW9TT6vweVdxYfYG9aAmcKpnEuEPfRMMSaCWvfJaA59wV6EYZBaba5",
  "key5": "48ZqvxB1pwJqWWTbKF8h49LgcWvr9dFn33ea5BjkKvEMvEnobMT41wdujkqFySUC55HtQccJqHLstXu3U4VBeBvZ",
  "key6": "vy2nFRzGJUoB6BfbjjKwoPtebXDe9X2bd1NXNk3A1oNfDqJgX44Y3ReC1Z9gDvR69YT5vGVb4VyQnQMW3Qw41yD",
  "key7": "28PhZgMJ4DYMgUJ454QZxdFvmbFB38tNKCr88fDU3KSHgW69bgTRqhdg9MkXTvDRjZuH7VQEfTCsdWL92WnaDD9A",
  "key8": "2wVX6YQaKcNKjVu1zTgcEk9NZYwef1YYSHC1x2XegNdzj7z7ai2PSyWY6wSiBchGV8gQa2QBEVxe2EZ2U4bZyiZH",
  "key9": "3vmbMMhgLYyoPbnB2gU91RXoGCYD2dErVQZgDSkLUyNU2Y8kzUkyCBU7RqJazYMfohMR3Ksf9ZHGAaUcqoRkpKpU",
  "key10": "3vQh77af89s8Nco8k4E8r4UMa33p8KE4o25ky1uf8H13jpdyLhHhfcLWpuduqgCSX5k7sadz5bph1iCiDnXqVejY",
  "key11": "4uphxJUPwALrqjnNPzmhSnqexqE8Ly3URxWm75FaMJMvXFKGWR3tf52du19KRZMvJBRWZiLY9kJiqNP2Vd1pAyuk",
  "key12": "3VDLRYAS1Q7ArmS5kmhGo5shvtvCYkRq32x3Lkqyu3DkEhTE3rS8A5uU1W9SXjYYdxSGXxcg7Nen4uuKfWfWodQm",
  "key13": "RAouWEvYHwStHsD2CR9SveRh1MU7YzFnbBWjSi6gGS3ZpTMofTULbtpzGhgr79z1TH7fU9Caz8HiEqcgHo3n48Q",
  "key14": "4DexThqVzB3qi1JvgBBETcqZBx5hh3BkEFzToF8xNZ1dSpyYtWRLqTisQRX21TC5ot13GtdgeCjxHQz9ZKFa2H6V",
  "key15": "3n7z3pbPZ9RJi6otQU4fhcfufmNXvAJ4ekgobKKXnHbqBhbjFfCLgYWjvepWXHsPHh9GafNpR18qU6TwVBEXxxPZ",
  "key16": "5cQiyBF9gzx4UF87VbgwH4ycZqULafQbcUukmxEgLScC8GJgswJVbfjhVkeEW1GtzTEhX5G4BmP2WB5f9yK4J86L",
  "key17": "5FmtZpvsNn4BcqKug7HMnyESwRrC9Ho6NUSra5cddYgUJ19MV352NxdzKkYRxHW4KbdsWFDmibpg6c5XEjDEjXWf",
  "key18": "AMeEYXfi5kkonZzKAmME7w6HVVKbTqPXoZ4rdhq2KQLnkSyiZYUHvEZCoU8vAQVvmrcxGW87KKXfkRxRz8JDv9n",
  "key19": "4sKg322mjv4sLLReWKWQRw2e2Pits4RBUjry1zVP1b951iWAgfczjZbwcNzCb8urypY8rHB8GxkjRaaDWjvhMdU5",
  "key20": "4CcgEBcKF3BYn47uSE2nxqHYyN6xLZoTsa9Xm5DjMsKsLyHkPkbqSHqrbVzKmYfiG9dzfZ9gYoyMF6E8qtShiD6V",
  "key21": "3y3LSU85Tii4khRwx6VcjbnMFvvnvPbDJGz5xxjFmz2g4DKPfJGBcUWjpmu6G6UUhQ1Q9j4QL6SPcoKNCt8WnudK",
  "key22": "5k2GuG6uNtWVc979nkcyiiBvrF7vnLf1bAiYMuHiCZZZzHA8tv8pZT8gYtCMtJvbMdmoH9NcSQt9vzFnwpgixcL5",
  "key23": "x42FzA6UYxr5tq9fqSoGRjfFC5h5YYkus8QdUJtbT6YVWfC7k18vmhcsyKetCqYPPbmpUaU3BdskczVLzLNawD6",
  "key24": "2M1xyHru62jaXfEEUY3Cr7bWrqPqEY9z2zrAdT6yLHFtjCW1mmY1xHFMdfg9eNGAbyDxMBLtHPdy37udgJoarRES",
  "key25": "AmoNGXGDrFQZLimtxxCkQ3ETWDHRS7iuQ1oFeryK9kZNaadaGRDvuydfLXtm9s9docF7uZYam1Bpviz2NE6Y9ju",
  "key26": "3qFtgmbgeR18quuWnX78RzrQt2mHokqBqELaQGgjsB78aLoqCqaK7o46qQzRv9CvQeaiT8Wd1DGnJ3Mjh5YiioCK",
  "key27": "3E9yDVZxyc1PXyCqCxC6KJuw1jQZWgjECraiFtXQMFsNaanZPoY1o6d3EstY75x86KJrRKNmaAGpE9c8CMv3s11d",
  "key28": "3Jw6mM2Pnwqhq9nHAbUnJy6AoxQXZ6YWbDYK7sK4iDTrpBrirmzbJiRkc8BzKP5Vgm8WRX7AqWn7mto9F8tfFs8i",
  "key29": "XbR7H1aiNX6rt5hidb9vmG1aQ3NmRwVNBH9pnLDeto1qQbL3NHTXGvP8Rpqi9c7ae6bKzbW1Xm5k9i9JVoWe2Mh",
  "key30": "3sSw5sUkKHa63SKYTXh9vQdJB8KQF9VBtVTCvpnawptH579ZoMabsvEjFoJRM4CjWny4Ugda6Pjpfifjft1TdPN5",
  "key31": "2BPh9Zk7ZN8JzSkGPP7xvJv2Q4PvwoUNsaJvd9aYgexXYZLFNmrtafc4yMjq6FsoUZQGjnQiMiZoLsd1NgkGgU3g",
  "key32": "63FR3oZ7KjdS5BNjhJbHTG9CUgAwsMr76oCsoKzsBmowSf5937XnXfSxyVYEHaJvodzYZcN4fZveJJrx8bg81gyF",
  "key33": "3AaD1NT3zitxuAtREBFQHvJzKWTbaAHpq9QvEcp3ULWiK9rsHtUGnvs4KYW6crT7v8p9xeiFtKfdpL4cWiUQWREM",
  "key34": "fazx2UWDg7TKyQRNqwvjX2MJvqix3g8dgJmuAPsWu5vkazAseDj9zmsEwBzxrgLNyDQZf5cvjCVDqErDNhHngeK",
  "key35": "53B1RbWvdzT8BydNCfhBnrRFpHLbNVndvtxooCfYUWXCh9kgsV49VjJA769Lsf25kvr92b1NU9bRyxMbt95MzNmJ",
  "key36": "2TF2BxsUF2oAWFppCZvdLFAjRvaQUczUTUF7a6sWGZkKSUme1Y81G2D8bPCpgZC1UPzgf5fcnKQgzioMGEMBxyVy",
  "key37": "5nAtchfvmLn3E9JA5AnvGH88mHBzUtTkWutL84EC1PnDubu8Q9cbBpCTf5RTbHBJ9oae95Ln1hw4q5mqaKGo3z2G",
  "key38": "3cTVpphv6SBDT5ULS1AJUWKpv3Y6CtiZz58NDsss275zmatfnQZviPh5FvEGxtuFpuBL7FEuD3NspafwhTHQaikX",
  "key39": "EtwAdS6tgKXTa27vNZ24TtfE4yB22U7dRQqsSVzVFRKC3qXqt26KyhnnMJE9JkHHCespyBa3vmxRJgcME7bftoK",
  "key40": "o8MraoWwXnMoLU8pMrCsg44dZgksPbnF4oVmqDhBo8JhZXaKescEaXWysrBqcb4bWHKrMZ73vbeRSV4ciuunk6D",
  "key41": "5hQTc4s85eiZzM1X4ynfcJQNr4eXf3wKYwyDBci8iMgdfAfGUcdocMevJp4dCpKwDgiMQjAoZq4FE15fj5LKJFc1",
  "key42": "pExadkQ9Cisn95nFKukS7hdpvVEoKG7NiA5zpFNqbYWZAsWtrQQaxcjCFW59kPtmsBQBVbhwseh8Hw7oc1RSbGH"
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
