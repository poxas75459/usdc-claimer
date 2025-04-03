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
    "4wqUyE7C3U3Fnraax67tK3qvRDeDCjPKLNc2R9JorSERuf3K82uVEUiv1y4n2jSztQgLAzzePyE5RUzUFnqXKM7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXvzBQ8G7ckyX86fwwoJ8XkFL3CvSPRGFzHKfEMX4sThA8GSZkL8gFVB8BoBeBM4cAQai7bQ99Du4dqopfEuFET",
  "key1": "4caKchgoqtoR68QaDEvA9dguQpMfhzTrLFTWP4dNUurL85XRZJGb6XFfg7wUzTYBowqUyQTWotogeEeMGTeevQV3",
  "key2": "35hks8yNsVoVVoysm8cBUtMuHdNT7chztyWMEm1gS9CTbB5CRBtUcLCwuD7x2K2dNWk4FfmWECPa3fEVfJSfMeKi",
  "key3": "TcK1wgSTDF9SHW955SMSxZrQ2mwf1vbgxyD2eqPtKM3hvtsHHhG64SuwNcX2arWpC6J6f6SRXfRwQvpjTvo1o9f",
  "key4": "64v45iTz6QovwCHfE7c6iXb2guYPuugGbrnCQcwoFCLgxjE57XrXNibQFkhFLyqZjmj8qbh9RdWqJ5GY4Pqi9b1e",
  "key5": "4vQthsHe8D2CLBC1Y3HZECzZvo5nQxUhkDm6vQaU8jQwG27zjC1xcy7q8t1NTM63x1eWH1Ccr32ZropJxsr4pHJZ",
  "key6": "3UxD6Jzs8t3EX61BeLcXaMJTwPtZyDBVCcFxcnqaV53Ka833LhmazvTPSkzGfbEYghnw7EXmDg3zsAEzRYG9bBey",
  "key7": "3J7STkPFpx7LSmU3muXH86uKMwBj6cJb363oYR7hDLF4NbwmMUrk1urGT8mwfz2gME18JGQv1BMRkmLTe2xWrR2U",
  "key8": "4rj3ncdf39H6BctsAhfMQTNNAtbLoZJbkngv86s7ymFMZQUSnNtpkDNKp3ctj7UcE6idr4NfzJfNxNqMAQgcfhuJ",
  "key9": "59E6Eoo2gPtBnpGRQ8fQ6Lk1TCgRWf7oKTpeomEm3ME72Sg75CNUtaBLQTXcSoFwA8AgMjqDKTXkYM1U2iV4oT8t",
  "key10": "5ViZsrst4GUCQ7TceTgFaSSNxAVLiDWmrcjWveNtox3Ek5cDeReZmET73BoRA2CUj6hon3W2SUX8kJ2BAiRL3t46",
  "key11": "pSNeM8pxs1UUMz4CY4qCqyLCSNwqva87yimEUUhZeYefs8jVRaGfgmnH5fRZmeeCZ7YnVVXcFXNbehMKgQYdSwc",
  "key12": "2E6PQC8B9BFNYaNBMWz6or5a4g6pDArhnBecY9HFqvg2mApMJm1cxRG1VNECL3iXpP2QVXFo88Y77gmomUamcqSw",
  "key13": "3kANmUtzLxQaK3XGZknY3hGGLEXMHfj17ybXUC7vrDe39FuK15LuYCJpfAo8on4ZECAdTrUT4HBNAKpqVxdPQ3yz",
  "key14": "5Mms2PTuyWrrYYrUpwWsUMgCJxNFEAcRBiqoc8jSZjq6aK9pMPoTfAPSA8X4NyuJMsNtksRMAE2tsh8wHPRb91Cp",
  "key15": "fpu9moLrR8nzw4huq75hVnGjSaR7Us35MLag2csKQCC9FWaog21d6ABZpQA4BmYXKP8jfgkmwkZmaqKa2z661Kv",
  "key16": "4U5D6Rhzde64nhYNmNeSk2yJFcfNAGci9S448TLeQLXzdz8WJjaf3yu3Jy4M2Ghx19enHhtnnG67JZ3UQko8EKnF",
  "key17": "5t3qhrDPj8fVwLkUUnRqRBAPhWWFJRYaqkVmJHB32CwcYrh6C2ZGgg9d6BBUphxhFW1fQhCB9kPptokMD1D3v6LC",
  "key18": "3aHGehj6ZT3hYCTyKoB9vxGLXb4xMdc6mP1A14erumeDTHnRQzs6Uam5wWqLY2irnfKrXzQMj7KXrmusYX3Cm3vy",
  "key19": "2AoWB5aEgZRrTksxELEvcDdmH2GJzfESuecBQRHSrfJXVdryu2a38Cbb5TfMnx91tV2ikyuSi6seqPmXrukAsJkp",
  "key20": "3DaAmQBXmHF86jR61iF9DLhtbAfK1UafGDLuq7hgqryzehbvK5wnkLuAZLenMPH1B3ruEgNnHYpcSyLbmPQTgcMc",
  "key21": "5581LSDpivxzhZ5WpoYEmkhai8KiF9K1pee7R8fkk2RssiRydXuf1bxLddgcMJzwEA1VN1dbKcdWbWvtNanUpQvc",
  "key22": "9zmTNZYHY5rsxSCoypFr11ab4dpBhsqiz168pyz7oifbNLbeoaQrnxY3cWPgHmgrm9qcE3ZHDZMMX1JLAKNgJbZ",
  "key23": "J5oYGx1e21mWaE6pNAMbyY3EZBzz2SU8v5iqAJ17SM6jyKpUystkfMtmBQmuThYRQj8EgcrkzkniNraQ3wu5rA4",
  "key24": "548P8wbGJKnRp1xhHjUEVSvNRPWjpT1ZHioiPQ3Uw8RbawJAyvF5LHeyyYWoLjfUdQYpgBNM63Z58bv2ygULpjQ9",
  "key25": "2JiL6dFxgCJMCAKmcjCGiTeaCmFigAJbcETYqXCYzog7kZxEzxLBFDCSCAL3e9ibAqjyn1G4vcPNutVEBPAGERJj",
  "key26": "3fBYvy3Fv4A9eqwiEQ1dDXCZN3V8UMWJ6eX5UijesFkPmjq8mkams5VjhD5qVACt1YmXdnKTYStLeAMTGGws4oEW",
  "key27": "upa8YK59xpJRx4v43H7gEiA7Cda3S6BHE4LzhBkZ5BCUNz7GHY5vruP9CMPNMnFEdnx83LvDJ9TtpHA87f9Jbam",
  "key28": "E1gNrw7C6QuMiayFBAr5h9rptPPBE3V9hys5e4BSZqSWFDQ6XEjhBLmhiFXQeF929AYHmGV9D2UxsJqkyxo6ARe",
  "key29": "4W6CxjrbPciCsfqPUwCeHHkuP2i3JkVqW1JDneRVhjVx7qecm4XuzPzNPKs3Q2eygk1dYk9VHxFoC7jGWbhxf3QL",
  "key30": "3yhFuWtRtAUvp7U2fUQA7KbTKLJxL1wJPJf7EE7rWGqn25X8Ux6u7wxs73XANX5o5QLvQ7kP8wDeMTrixqsjpKQ2",
  "key31": "2mubADVcSY6HjL3n9WUN7MbwPYJADpJd4Ac38VnXBs35WkD3grTA8k9u7JtPoqZa3czbpxChrJ4DaX3zUybiLGfD",
  "key32": "5a1dfjZSRNy5PvQy4HtFFG4wCqJUfAprqwvxuN6qXYomHu7Xhtk6mrNWHhTzKTtkruDir8GYW8vzeMZzgHePnZcS",
  "key33": "32yvcTGiRTtwvLT37eLBz2iunKdHxpv7WZKJXv3kbd443h96jFY1czsWsPHpVaXHmDcsfB5mmiNYmMVnpSVYQ8DS"
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
