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
    "3yhJ8jx4URkGWpaLDTavcGEg2o63RDjsAenHRSzUyEXJRd47o5NcLwaETFrn5dP3LusRoTFxGJ4UNKXTSxcZUSiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFqfTBWiGYRU2koQic57TUY5vooudYnU4T6z59vxuoY7CLAc3uydMjnW9xbVbGZZguVB7bkB1CNSzcNeQeQGkYU",
  "key1": "3A3ui5VgYVTX9L5RQtLAdioTDibWSVSUJcZWtrpfRrnFKbnSQwZAZe3XZnrLkMWKjXqptU5gaV1VSpLS1SZS9VQK",
  "key2": "3bjZua1v7mEKyZ7TZ6JjiuDa5zQh5thEn2thjqUh1ZQv2TDz7xtuczVvNrdPz7QfXa4FDWkUSqPeaq121sXCYzVw",
  "key3": "5V65zLyTyHup1L9DWECcQdJHBUaobaksRW4mGYMS5eEsNYuppsmQHCdgbNfgQZPgFjBkzDY8E9qEk5eiffFfWFbq",
  "key4": "3CoEfinpnRuNTAQNdQ8bbu1dG1joJaz8GZ12pS145Zgd8K8CSARLRYMpRUpAukch37RpNdaErXtb7CqmbSYdbcL8",
  "key5": "3DSVFJ8WJuUqiGfhwaSRDWgyAQ9JzRYoKhcCbAMDRDfXfZ3tw7Nde98cELRN7khHZrsnaHCXF1wA8KboBAXEopgV",
  "key6": "3nYcAVPPYwLNgbCkzA6GM7XzZ6RbtDFu5oV4dEpvRNsCobC5o1kQcpjygkVV9qGnaWgpFmkHfuBoafWxsnrSxbgS",
  "key7": "21EHTQfdYquJXPfDxf56vjWqYuEadodFNWEGFz49mmAT5v8Sp9ax6YESK9qZWK3srUzn7porQNu4C44xBYCE4H6B",
  "key8": "2gigTqWVwrR4CrtSsFJwCzcubbNgz5aAEGSbCtZgZi9QMh5oh8NksFsrG7fz3fRXwanxAvmZkC6JrgHiAw43KNmY",
  "key9": "MEuZHN3cEGNf5qCSRjbMv8nTVnkQLKZkgUaPyWyjFRwR6rN3TRrcPvHyCZzN4DegLjYCRX55p5F6YQYVtc9f5kz",
  "key10": "5eaEmhuobtfVL64zi5qMRKGeTrBakYxsHrtWeiqVqXpJrGJtcFt6zMy8gCAmbFjtWiiQDdA8CpXft5czwwWwjnav",
  "key11": "4dD2tghJixRjyYtRjMoyUV4UnmhAZ7KTmCQgEAL9wqXLpC4zwKfgqBNM8Mjgc5x4BmRBDf22tTzBsRsmtmeAu254",
  "key12": "5jjA25eis2ZaJmm7LthQ5J4Nqh7UZKWxjbWSEFsWvu7wkU7m5qr15MPy5XgmyjHVWGfrUhCZknH9AWFGyFKm5UhM",
  "key13": "3jbHcn8wibAwY888zHwgkmzuKfo3QUBo6Wwo7uTWCXsRq1vZPPn2ktAuLekF6F5dt6xswFGtYRMV6sSgBmVm1TMZ",
  "key14": "2FsbarRzt33EV5EiPgvdcSGNppcTqByPEbNnjVmV1NyvQogGQmAPmfS7rs3bHFqGw577y1wdGRUGhmUFUnFaByot",
  "key15": "1isk6XoKP8D2LmZ7id6GPC4oW3Zg83SMe4tA1qifys4RaG2guWrG7Vomf2Eo6JdwGaRU9uXni5pmeHkBfJ16mG",
  "key16": "3VnT7EC95MNnYxUgLhUqAJrng6gTFkHE1pJWXtuD1D5FAGwr7qYeFoUoGvNEiYyBQL64fnHsLCpvMVbzW2Waswp4",
  "key17": "4WNE8M2AmwdFWZpqFY2TsZsSdLsKu5u7bXu3VRUocdyjpg5s78r9DCiZW7pTxz6X7PU6nV9zLAkxBgrxKvwDZyqZ",
  "key18": "4NDSk5PtUbLfrsvjSXhYxW76WANjKuiRQKTzgyB2rddMy9UEq6AV1AqoCVTeK1nX7Rqg3LbxYE5Xr4mngX4xnX57",
  "key19": "58puNNq4MDczHEJ8kt1Lg1SrkG7ChZHSLGzetXnW59qi4ctSFfPpJcDKp8NvGUkNqVQ9cXiX2bbjmg3Tj5q8DHyE",
  "key20": "2ihGP8TgMCx7JUjGvyw6LM9tFQ4srQq9khfp6SH7rD7aHnJ1HyhtQSriNqwoq9gcBDeLRAVfsVXn8JPa9aaw4F1a",
  "key21": "5VxzthMDDpVPDKgQn7JqRcRnMoGbVeRoPy2U2mo11rvJoifka3VLpmVhC5PvDMF2sgjy7CPWAB3kiLELW7umKCuy",
  "key22": "Jp9hos8dCtXjR2ZsRhQHc12FBuKteHWhYh1Yc2sHdGqsVEDMXdonMFcq68881zqvGUDi1JUmo3wDfkk5oeprTKG",
  "key23": "2E1ATfY77LTiBMaTzhz5jNBYN6aN6F7WZevA9Ybj6u5pTE3Uk622JLrNWzFhgK6w7j98domtRAg5NKiRxSxA9vyk",
  "key24": "5sFJyTMuFy2UJuN93Nb5nXJwR6GhLMYZC2Qs9Gbb6ChTHDx8HhW8xkXex88FshFn36o4GHdBRcj7q7nbh3FnDsmL",
  "key25": "49i6onPLuWc5VEmikWCmNxNqJ2dk9Y6ekCMRdmPhMKWjBz3pvGKLdJXEs6XbCY2hnPM3j4pHTHAH7PCSCxNPAWz6",
  "key26": "37MBYFBCSv5HBMChhuKP5w6b8w9ZvWDQyhXFVJBbwMRVDWSA3GdpNeUpDubw5JLBi83eFJoQZYByboNG1W2J71cY",
  "key27": "3xFYH74EfdqjatEz2Vy43cgiRW53dDDmywpKG6EqXhNi1dfpbvWU4fvJVDJnemB5A5YHGRzhKozpC6ShbeDGrHGQ",
  "key28": "2k9nAg8s5k94MXbjJvYQkbg5SDfyPtwFJRzFfS92NhsTuGgrf7NgAvXVNqszi1PzQgEvNRKAc57CPHgmBboyFQR2",
  "key29": "NUE7JoYNxKuoD2vrzBuU4Cec5p6J2xfp9gn6fLE5Y5Z57FofTtVKkUo3TLjK4E8dMPh6JCpUYKicN6xx7N2B8N1",
  "key30": "573wyKTTQW5raxR4ggGeL3XMkt1zbJHGvv15otzWR8Wm7DRzroTECDKZmqzCA6N8v74R9oyDh4ktubFCx3ryzfYH",
  "key31": "1Lfkoq3nLDZDtwHGKtBUTTouSMCAYMcKYDcTCTWM1khWkXkEJySH7PS1NpnA9NL4pj3mbDN8a52RBxbBJtsuGbE",
  "key32": "5BSuaaZDrDnkKcVoPaXag6gAvAktGzGUpBgcwqDiQ9yuGSwaiHcRWYwXZu5GpDpPMot5yisKiFUKosG199bua7Wq",
  "key33": "4egkB2rfoduuWmra4HmDrg2Miyjd6uQ7NXDTYivA7R9udurdMXQoL6TNdRXuCjYAfKZiYCQU71SenutmRXPBaFXE",
  "key34": "3a4m1DxHMaCjZcBawxsikqbb62vBGCEgUTN7LV6zg6fNLihogxeyBvbvQuKhd1qWfDiqyRhsRyteZyrS96qUSZMY"
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
