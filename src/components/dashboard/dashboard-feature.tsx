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
    "FNe6WoNT6SseCFT6zJqL63dBy4qaedxR1uQV6TxFpt19jZFhhJLPgaGbas1hxtRDWxPchT6SHWWD3pazeWNpiEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPv9ZkcX6Jsf8K2ndVq4UsQZd7oAephf7duqkLoNUbSUou34ihpYXnpXmmJcmURmRAvJ8SvftMaaohXAZA5Tk4Q",
  "key1": "4dyxFr77gNutX3SpaMLWPmZ2pU6H8NMajBb9kZa9vkodj2QmjdTEJUsqXHM5WZXpPURvig8C6buuy9EwTrf8WGLe",
  "key2": "5Hr7d8CzikK5wmoXAcvisa5Y3rNC91TYvSGdZYyCwa2PfuPvayBzPWGMExVej6hqjYEjSQ4reuFCntXRxdxcDWsq",
  "key3": "5zypp2c4Rtw72NeJ2D43UaZK8XVTCbprgqQ1PSyqKd1xgFn94Yv1zs9aX1w3VuhqaLDiThp5x3PiHLVzBSKUe817",
  "key4": "5aeafRM4pEmsqKpr8TmQS3t8jgfkYjrhB1B6CNdBi8BMCFAekmKJqyMt3H1Li8i1ApzpG4bY4Na9VyHUZV9qLhnp",
  "key5": "4gPsWjjzjsTgExEV3mp1NBsZdZQrvXKcx3waPXe8L54XkVzrfmpV2wQFo3Y1hTLUSDR3GtCcYDbyG3WDaLLVPxPZ",
  "key6": "4ghrF8sMQ5tz5vmACMuoUjVEBLzZxj5vdp4K7TCvxyMre29zMLcmz88CxVYAHLxmT2tXbM3TNjTtf87Eh5nbo2rS",
  "key7": "NfLnhKc5S1XHZ3rNnGH1T4hTqU3WMd4MC2efKvd3Z2zMRwYPTUGB8etmkQ58DWhDZEZxEQciC8rAXCjJUMFopBw",
  "key8": "bLNCbZQzkhnXJiuGEHm1HJ8AopVy1aqvFzNfj1Xa1RLqHLwrw4djUujXRMB7ki495NDTHgqevgiBGX9eWfpdhgv",
  "key9": "fg7NVQdfGaTtocxsMwWpxoqrojyCWjjearch4jBrJX1oJKVJBf7h65pE28e3sBvVrhZ3JDq7NipykthrJAfmtNV",
  "key10": "2gFXtKPvSKfvbLBEURTYWuKoUV1EUK3dhAGtgxzZGrR7HK4sEowgpyzQCzna2B1EgUHYnAHbTrzC5AtseY2Dmmrj",
  "key11": "5JjJ7FfhSNwG9TYsRci3JMSAasgpQDV9TQ995BunZjwaw9na9WyByNTwiMoCHdkc82ujBfVa3kUQzYHpf9tB4D2e",
  "key12": "yEs8Q9cW7fVULD1f2DLCNTUcYAki5unwyRNpTJdcCpHwex9yjEFksNoZbHVP1LoF5YJhTkuNUgFQSefRTESvkFR",
  "key13": "5bcMNXm1VdJVo878wjeErKF64EH3XYoi13TvTCf7ZKZmhqB2syjLzTLcX4S3RBGCcpFgLrXkedTatcJuqAPR76Tg",
  "key14": "2SscMj8QqhM2EjKWe6QUK1FcxdReXDJCQ4C1uh2uLGzCkYRumqS2y8nhYufSj7qPnrAb96hVhwkqmuxHXaAsswct",
  "key15": "42jZwdenQVdcspDc6WSq8xZH8bgKFTHHM971nzKJGix5m7ECitsMJkWsPw226DBmocTAAK9qc57zHUcnWHpMGKX2",
  "key16": "4GQqB7jWoLQkj9pmUpGbmY4ijRvPoYbokzxcs4zzGWs8Drr1eivTv5RdfC5ZQjota2diKqpVtdG7hbXbxCBa7VY1",
  "key17": "3ddxgxEd8vjuM9ZAXPNSzsVuMF9Rcgjj2R8MVrUdg3NY1QEnfm8wPtxtAcetyZ243WEYRJtAJ34GFHa95o2Ftort",
  "key18": "1BCRu28jqQnWK7fPSeQGT5MubEs5fofECv14mpBA4UzPJnmZE8DZb9tTMbvN9mRRVCWaxLykavQFsf97BphTfvh",
  "key19": "2Lz8zMYRNoSMwtUapv6xgVtQR6so6uhJQecguvy2P8TJscvN7uKJR8QJKPvP73LuRpLpDPdm5MvyisSH7Zx7DYgD",
  "key20": "2mTSsJqctLcEcHMHdUVrEa8V3SSiTWzJRH1PAK1tCs8c6WpYX1Ncpf7jTFtkKqBVaK16J9r5otMvUoqkToguf8eo",
  "key21": "B3A8kLxhr73ZAvpUGio6dycb2F7WVQbecAuhtyJjNFuHesve1Q7v6zjk4yUqfwUpNMB2hPV4tYZR8EU8EnfDKDQ",
  "key22": "3CLAqTtaqYAxKQ6HquatBQsftc4PVsgGh4GzSFchABmL3pQr2B4r1kCF3Rx7n14EayR1XiS1vRaWnrE7kRYK2fCX",
  "key23": "21jCtoTfp1FgYV9Qr1nCi8ATwtXnvUcgFNMjMmsvNM341mp5aaQJAmmBCgEeDzRYR9wZMr4p3LpufdjUenreoyoi",
  "key24": "56EayPLyigybtftUTjW59fGjDVVQPHZkSKoyCro1Qvk7cPa7XKPNdRpyuqw99aXR3TxJ9ScryY5KoxVC3XqupLZX",
  "key25": "3y4LDoJPfsRYwWuwzSyFDw5eZroT2Hy2fe6FT735EQDtEXRRCiXKfcPw4aqcnHpJXyWQ9pb99DJrebdeKJFU88vp",
  "key26": "4evZ5CZrLLdvBm4QNKo9hwUiM9g7PjoY3zUVFWGMYvpTDEXfARm8h6rik2FUyWsvVBCsv3XiQjHHtV6PFU3nhDRN",
  "key27": "3G2h1yEkZy5QJjoHC245qwE47k5gv45TZY4XwNbV5gCAoeeyU6U4guotA8rsR6btCxFeuhxLV6WeTodUR8hrZg9H",
  "key28": "QTs5KhdTbTBS6mEXAttVzb6qhXc5E2qMgPLZxryS6V2uq9xpNbr4zY893xwrnBobMGALEUKD5MAVeyKSVoJhkBp",
  "key29": "5QckrDt3yuRvDKjsqYHWmaECUG4HiXZ8tGkPpETzfnJgnrtXw3UMUsirDnWpCQkPPVaCat6ZubtZhYK1VR9ebgCd",
  "key30": "5zuznGE516yUrRiTFPyJTg5BkQxzEmG7pEMcZmmYgQRZQZLz46wqN4DsUcDPzFiXiCPbRnu3pP7LKQNhYv5AKd5N",
  "key31": "5yu2fQu28TSPtTpYJJWXsFQFuYa9aiKG8qQZycGtkchp53LpqsjZFQWTEofDGBz14iyf4kgrFCUPA2zqnGqiEQqZ"
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
