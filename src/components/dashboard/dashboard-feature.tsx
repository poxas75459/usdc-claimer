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
    "3vUJ2rAPJfY7jmREG9fSQGNZiWnLf38UWpjwQzYdYKBa4TYz6TGLbE3skVmwRRaLURLAWhK9atfZ5tYHYZXUKCQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwDRSZsZmNzKracRDypVZxz6Yk1w3Sw37uHLpGXitKAtvWpLS1MiYmHQmr6L26p8btyqB4oAF9cQeRr9UrMHkWg",
  "key1": "5AyPFbsghG4RnysPE3xJDnTVzd9XG1djYEjcBqNwqVTW76uXPUEyNoCwKgtGv1V8QjNmDThP1Q8jvdSh7TXxeGok",
  "key2": "SxP4Mb7NJKnmcwkZSyTscuxcqqRqoB8bE2ZgMxq2C2r34tLvKBsFWyChKN4TXS9BCKeXzetJmuBavtZJjc7M5ti",
  "key3": "ushEDZYjGsmxRxJhWKpvAn7wCXqprTNFbxdwvvtnHJSV3yPHzYoheSGNHGSCnJiMppcxrpgpPCgzkKEhLkgreBc",
  "key4": "5bW8krEj53H3THLfMRVieM8pz9CN6Ke9nGdRd3yXxT8wBYngydURUkWZwKGcFBJv969khi8GZRYH6woQJXNqdBw8",
  "key5": "3ZLsWCXtVAMJx24hSdfbBSUmekdFFJPhu55yqZCsydUDsocfYSe7S39LwfaxtqEfhgNiEzY3No3d6yMP3zyRXCYh",
  "key6": "47h2PRVYg3Ur3PS98QtKMNENKiEKYpBbRyQ92qxQfCFqWbHLbdDp9LvJPAKSi5XXKVLcx1K2a1ogwC6o7HRuBdff",
  "key7": "4sJReS99DtMGZSyySxZnojNiMBuQLQQBD31p3hfgTmLW5MjTBmPX2qYYhbqMYG9cNtNMf3JzdWYwcETZQhiQSq2L",
  "key8": "4RAx8sBKtuZPh5bmeHwYvwMY38dQQHAaUgoumNivEM2o7DBsMRs47Kko367VW6Uu2ivqat5PJLikax9mrxkuLU3C",
  "key9": "5ZHWohNXHbLkooEucrXaPfpkYoLK79eq1R3qmkmFgPxaXgUSPTniKsLezgVYPxdHjNxqLEzQB9UMcwJUsF2XDr78",
  "key10": "3qsiuYi3nStoqDYTTLXNvrBoc48PKHxM2Fy9xvy51ZK9bRQQWWtccMizVLH4kW1SaQBhaVAqNnAJpp7NbweN2YXB",
  "key11": "2xpf9W2gQXjoNa6fXjG3ZhoWeAbiXhRkBp5AhtxhiKgHR1nvwFypK6MP11xbGZHz5v3wSWrPb5CcVeTHWVLKGqLh",
  "key12": "2CBnrwhsCkygiPUNDaiKJ2w8zTRkmPYHMnbkCeaSjbnnehNdQX4LPdTFKoZHf8y5wHpmwo7s1r1ZSyuGJDXi8JdC",
  "key13": "4FTVptHT64mXvxgQNQpXBLgEsXRFAJjwD9j6DW1EVTQ1gERPJg2FWoBUoHoGDWMPBknrGTKidG3orez2Efegfs8V",
  "key14": "4g41bLmFHMKpTnLzhLmCDNrtUD2i6CeTBB7XWKJyGg3LpdmJ5gfWcD1KWCce1PksNeF8EDkhkXToNAxaYbEqJA6Q",
  "key15": "47fZYj3GM8WmRZDMvkAjrzzi4gd77p2Lect6aDRjnvqqCP4zURakjqVxF2mEucoWLVHgn1McbR5nzmqw9jcBiSYh",
  "key16": "GEXAGToQ8NqUnnbA9UUL2gPUgrbD77htU9qK4GYdRiV6V6WtXAHqL4Aw3jzi51cTJioHFVWjfbPUq3W1sy16m4t",
  "key17": "hWCPnoKVbUvdaZMzLS5EALapv48vyJiTk6E19GxMrVTYdXPXktxvUtd7DEgxZ3BZMX6YvYZzzV99YLJrAXQbcSX",
  "key18": "v4WyZ4vXTKpWTSg4tTnyypgBrjuj9Nz8rNcXfGnpLa1xK1KbC5XvSsjRe1w4hxZZy4u99iDsx34tcpPMyY1Ar5F",
  "key19": "27N7Mai5g6xbi7bqU7BVZz6xHeou2n2yoCNVet9meGtkwYBo7SxDceAj13yceMpsD3vYQDiuF1NQzcLSX9KnbTVA",
  "key20": "3pxorxuRiui1acJpaZhpuAQYDd3q1symAemmtzzGBjz2VupFFxM1RqaGXGC6ts1nohoByHHUbfrzk6PJWEHaSYrL",
  "key21": "4rRoqrMMWDW7tdeVpkyETJKdgCvuU9zFoMqxT4oyJawDig8ayrsAL9QxifwUufg6aRAtxiVn6YDL9CL3vqaMjFqs",
  "key22": "5hdvAzZ4mdnSEcrnYt54MFky5p2eUXdfVS4mtuipp99oNmggxqXQrtpgM8DFWqKworVTM3Dpu7sn2yQLQHnTTc67",
  "key23": "ciUSJwsHjT3wcmjFU2E1QvzpCvc1RQJ2zKUfx2kbFDyi6EJXgRVrm8azR2C8ATTHG3sWncP5w2Cr1mXmRedTwtv",
  "key24": "4SoLUgk4tLr1DyRbrBemKUSuWSjzWG84oatuUvEYkNQk9ZhFASwrU7yFhv8drQ8ZTSbTm8ntnMDsBdhYGH7qSJLj",
  "key25": "37EjmFhrCP4MrBG6KxvweDbr9PpL69DRMAxkFYtwekr8GdG2dVToWFKFTwMiEtn77VJqmNvSdgJHRU69kSVBMAef",
  "key26": "2LiG3CWYTpycHZoaQBxjwUeNEuyVxNtVjQMYfhxmKu9faRg1uQkKBGhgykLEFmKumtCfsx5QfDzb7EtPB77YhCzU",
  "key27": "5GKcLb9uKCmpE9AGPUjHVKen727SWqGEpx5834GQZo3zFstbKSYaHRocgxNW6frsEaUBKWNBaR3vQiUBqxBZpdSh",
  "key28": "v1EMXtBgvvZNHfYjcFiJTjyvKYManzt35ZV4dNsi1C22yNstSFbzQAFJjPV8sR1tZ3qXW7fXLQVpW2gExmLCUB4",
  "key29": "3gqYmBUogmZ7kKjLtpAxKW1Y6VwaGUx5cSNxaqLjwTaVkzqV4WJzMtMxx5hEuQHWjbD133P1mnmLn3JeRXnfYdhH",
  "key30": "3a7neWWSAvbbj5BHBsUxLxEeiuYB8C4UF32N7o8bT79RQJJ3GLqFimhGD3rZJiuvnKt4UN3EkCxN3DM2Fiv7ExaJ",
  "key31": "4bmJCbSiyfHCp43r5bBMxSEFjNt9sexHcKnbcXB17aU6p6yrAjATyPnTeYqMgXDH8qNJ5T16FPuQuZ2dbsWJe8hc",
  "key32": "2Gh47eUj7AxZTtZgdHedAg8jUgqJz7EyG184RrpFC3NmzFBKUzh7zMnTRPdUY3RLvXd4sJYsVWvaXPVyPkagrbH1",
  "key33": "3MsAysfPvRAUNXb148xMp84cn7tfLqkoBjbGN3CmgsZcmPMsnnbNjHDu6ja4vBiChrAqRM9cuFtG8fMzWoebbWEp",
  "key34": "44z4yk3dbcAL55YQfYkevX38HdunG56ZsKuzjWXBZA3y8q5vRTAcs7tpW4mCBzfKZePTZ2tFf8oafRSDzQNXwBep",
  "key35": "5StQVLt4TXHrKPGePDMfhguBLSbuuPaZcZKbUSmaTfZxEkSrjDjCe4dBQ1DqGedqAkwUUifk9tKjPXTh4MiSudBH",
  "key36": "4EFaHWWt8sD75FR7hfoZXNDxbBvSDrYHJoxyTSeTQzSqR2sJfWusMfz2qcFeTY5qS2P8YLyQQLWyUQaGDaGrs4dF",
  "key37": "3GgdRkNMcJ86oSed84LSybNznot8yJJsWmmTXX6re5nhgQN4eEDDGtpXrNyqYRks2vyCMNJG66CFExEYvJJeN9E4",
  "key38": "cNkpQceScKqigY1RL3UJbT1cxvvuAPDUqBYXqszxhVyFVs3Y3E5q4GY9hTQ6U8gThin7pk2rXVjKUqpWujqntrd",
  "key39": "fCCuN6cvGrFi6BkL3Sv2KbVmzTCXQtQwto9uuo8kczWN5K8vY6eAakzEFknywTGmjqeksbqduPJrfFHc4xG69kX",
  "key40": "jAkL47fH2yrKD4vVPBBDMeyMKQe1s9HMgMsBZq6VKchapWxUyDb7Cjw2GaCiEJZAyYbcSUYMhYRvGnj6yWkiK7f",
  "key41": "5G72sSTihWR1ZxRMhSj5df2Ey8pBK2f3Ld7g71QKsWrFeh7Hj7eksNH7FQFjCqY2x6XDVyifpKTZBxBCHQMn4Jj2",
  "key42": "2wcwhqwMYbZvzX7FvFpdY9NPeMGWaXg7hxamUCd5BdvMx8JuEHdEngtFpjgsF2g3Arp39Cvhdjj5M74T4CUACrEb",
  "key43": "3SA6iu4m2GwictfU3uJMxFMUg6Z2GLeb5JtHRUXUFJ3xyGD9dbobMLNDy8yQ3LXPUpTW4hGisvQXUCKxcvCDyKVG",
  "key44": "2zesv3KEioN7LeBBmGNBBQZMLVMX6JktQfFbc61GRg4eho58BznbmbhKgQZppD4W1HyNBfwj3fz9Ue49WE6gg42u",
  "key45": "JL18neAJuXvvwpvnKe9Q969kmQKgC64ijLL9SxuLBCMz3WrKbUVSME8JMe2vT6ABt8rBrZGPt7kQYUukESAX9uF"
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
