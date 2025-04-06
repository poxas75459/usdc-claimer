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
    "hBJiPd895VZ8bnwdyDUviX6tGEj1QnbJmvRmjfa4ZWbwh3LnF9dtqdHFXx6iRuBDch9qhtpsN7JmRE6iaW3atQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwGyBSGWAbgebuwGGGCchhgdXBrJLFBne72MwBepMMnSJUCfd64wJw2hTopqZ51AxrYDCURGVHp8wUpY8GgmKXY",
  "key1": "23LFAGuTsWyErgHEvG5KnUjRgq5PqwfQcSCMFh895rk6oh1N9t2CFTtcEidtsxcj543CagqHwxXiaaE91UNQFa5i",
  "key2": "2NYQGqD9LhuFLWJ4nbB3FoRmYokJWwG7hiY42VxuqYvRbpUyVZFtHW2mDF4bk3iCsVqX3iPvoFnBzKUauysZz6DC",
  "key3": "wNGBq5Zf3og64THAktUVvki4EayY1EY8Zfi7wYDPiAKDjsWM7AXa1e1BeSqHZn8sLp1npVPXtNp7ecKFGm7A6a4",
  "key4": "2TK2RHuGbo8Mk27naqjFxF6yyeBeouchmpn6F7wa2ZZM64Qr5NdftM7j3YSzBiF8Uj3QHxgfoZeJVoKnEy3Suc5",
  "key5": "2T6BWCsrpUu6UEvpzzGCiVbSydgkU8wWGs6Gc6y95ER36cVy55r7hWWhJ9FZmt2Bir1m6NWVPfNyjuCnbuzErPzz",
  "key6": "3qU2ZEaev5gW3f5za4sezaEsmD4Netg2qC8LyV2G8HGqL1Skg5vjVJFTB9k1XJRUV91gwifAT5Pd9qdBiuQG1TqB",
  "key7": "2Jujqq3SAutf29y5pRSkzq7phRwSE67L6LXAfP3ETfqJoar6fLReXLsJEGeKGKyNpB27jYbzUfkWN133LKUP9rnY",
  "key8": "53thKdJrbtAiC6dXsgokG59iGMhmuAE7PFYfDJfQyQXGPMry7JXDFjbXfnJiq1AF2Rx1our3MQ4fCFPDCJwkPpWe",
  "key9": "3eD1EByKA6VtJy6YsVJLQZJFJbNygUEdrPjSWXJ168spA76TGPahyWRuJzUvWS4aaELVtpL5HLVTHSmyA2UWgdXB",
  "key10": "3ExMgNpbiHJ9dybC3eXPa15Hg47JqZ2LnffUMex6mGNkZxt1sQ1WzJ7FzD64w6WDgb5TkwyJH6eF6iAaS81oTSZ",
  "key11": "6M3UbfDU7hd1ELzCzWouhNMyAxSi2EGyccLXAApjtHV2fYS4i8AEpbBBPy2QvssUBL9Nk3xC41pnMBXMXgkJ4T3",
  "key12": "2HbiRB1MwevJ4nV1FDxvuDJtypymHjxLYR1BFowQ38ye6w5DQB5L6MkqnsiosDkZSLCtgqBpvFYYCLrm2netDGs",
  "key13": "51vG6PBzNVT6vNCkUJWZn7bLR2L4fM4CGB97S2FvPNDvSbqjC87eXbHUW4za49ZPkqMTUmuiH7NxvDXciWsm5T2C",
  "key14": "C4vYCbu4k9ybbt1pj7sxKTp8tvTLnCMzAkS4Fb3Pfw3m4TY4zdaC3qbTzYkuJiFXZZZXakUJjto5kth9pNDaiax",
  "key15": "3NbyqbczEKPJpvfU7iB8GfMDr3PYjNFvZHHNzGpKcUD33o3F483p5RUthrSQnm31WBZU6QJcQZgfu41SXouVqJYg",
  "key16": "3XPdgTEzn6kxmE8sRHsYLYUfsyNVrNGs1hq58HEmoStKmsZhmSbbExJ4RmK4nRqS7aHVqvnr9C4qcTvgJ3uS6TB8",
  "key17": "2NjJzmuJtPRkdrmYwBihRPLdGXTUEoNLpedtv9i8wFKKJHsYoDh6yDSw2UX8H7yRPndNmeH7CQMZRUtQJ8shcuwA",
  "key18": "D6Zw2VHtfFiryo2UDrPjwfXHqaC6gGYe254kjvjF2LLWdu8rV1xNUKEQryB4AL1LnTSCX99GCG9bPdne3NbZVEn",
  "key19": "3MYUbzp4QNbtazGobubFVHb9kPm9zahsWAjV344AQ5emhurEMejp4Eb4JKk7nq1cR9yfjyomPuAb5F3n9Q7Xaftt",
  "key20": "3sEzn9op7vSfqtsyBLNfBwSepALYvh7gipT8VfGf3Vsu383napmqGMPenvbUj4sTuqVwSCtLXd1uw6qbYj9rppjj",
  "key21": "VqLSfHb9R3DVHqz3wGJTxbJn3wTG1WMFCKgAjxGYwRQF2QGXzVvquH1q5keYM2oKeGwUcD96PUmPfpEXhM3bGta",
  "key22": "3veFUk8iVrwVSuXM79bMPGMiYjqx5yEDzXv3nwN1ZR2NmeFix6hwqM5TmYTzvGKCTtANKAmjCSZ5fjtCw5ugQXPA",
  "key23": "53XbXc53ZpUqMS3qr4zFKWgG84JxC1Yj8dQcpiUkthPt1enydWensWomjkvRkM8n8H3C7gw52hzAr8eqYgmFDdiT",
  "key24": "3w4xdFHuPPHvam6zL3QJm49XJvVMG5pqztXAqfrTeTYXHF3SeUrX3jbeKok6i75pUn8i3CLvjvwWLzxw79ccspmj",
  "key25": "xNyTrGuRk6kVBjoEepDpKp86XRJQap6HDmFVGj3Lcruq6UM9eEABZ58kD14BpMo8sL2jm3bEKiNH6QBmN2EuU7k",
  "key26": "64L3nRbGkgxbqYEvgsBEGhEcndjHyLSfXDau1mBESifJUDXT6WaEJaUWqc9AdQCawfHmzCVNKBNK63rbejermjm7",
  "key27": "kydDfn3FxAkvaxfbkjKwf2tXgeCktpJcKGuKPiT4NAVG44vn49EhnFb161gKTVwwgYyNjwKjKUNyjMrySrMXJHV",
  "key28": "4r4YzWgAma7zrxzrEXodaS7SxLhTy6eq22etV9JpSrjo9zYrvEeAv4C3tHNrvaN8FW2YBdYGrzGVFD6t1PyS9Mp",
  "key29": "5tXM4151ijT1EqoaZCQjp5b9yugzHVVTt4x6DjigXTFy9XVySgt8ZrWx7JbcB7kJDrSronGc5vJpaDpnngxQkK98",
  "key30": "2mAD2NFSE4G5ZNdL3iTNAW1vYtnmWK8KPVgeAPUUV5ukUSeduX2H95DwwkatfTmvf5Z7ASdufavDkWng4t7ekpBL",
  "key31": "35WMgyDjQ8bYTDmP2c6v23pJwCprMPFVavkoZvF8SjzcTvVmDihx9tyYaFZqUuvKzzRSNDzoHtYyFKbLvo6q3f8Z",
  "key32": "5UkQ3qpt68zX7sNBxz8TQiDZhAMJ7syc2rKvBqJ7XSH5cBroycD34J8zFueoNrSFRbHNHpzhMogjyHCRWfbMHruv",
  "key33": "3AHtDf5zkYL6nNRvFknHKQqfydkLgthRTsN9xmCNB96dYwxEyTHS3t87vr9Avjz3P9d8qFoNQok5MDfyGx67u8pJ",
  "key34": "tgYvQXxbn1LJPg89CEqEAsreqqNQMBL33QPC2Q1mLBwqV27j7oh9792ZoiRiJtCYhDUM6t98146N9TD2e2U5Vwk",
  "key35": "67YGZk7wT8nvKWBzVzzPEgxFe1AxhoYevJXMpM5Wxn9bsUqtSmr98HQeS4XcC7WeFqsxNe62wEiE4z5MWSkGw3gJ",
  "key36": "5Y6hYr9UU3pgyUz3pdC8LnAWJevNXcxXoiTxhm4ehWDAaJ657Ko2B7De5LBVmnSWokoKXgmtfAT3Tajqqta3DFMR",
  "key37": "1296wVgUnsG8fKmJFWC8fSHGaKj8EHv6ixMfuZ8D9CXQqcsGa6SHHdHwxqGtj2RYzejChFsiiVLUGJJpciRp5Uco",
  "key38": "4KQrQsGmv2VyWE3eAML3A7XmNKuzzWHuGReZPb5iitDAfVNQtkcfEicqFK1rhPbT9mA3dgECxDQG9jQfVCTmFXsm",
  "key39": "6Fs1qQAJXj8kBkyKEG6tc2Rb2jNfeEk2QamPpuEjQ57nR9Uqa8SjdjyMDZqpFnQWDkTrHpFjtJFGpU18RCABL9h",
  "key40": "4wMHBi7kWfUzo7cAzW3BBZqgpLF5xc29yZQLkWgc5HKqjyHX8RmG1wMvnNjrM2dYatVfdEw5X3tVLwBWP89DXLCS",
  "key41": "4L577tXbc7JHgh8RbPRfZXzTeS5RToWUh2HbGaPVsLgxmowsJKY6HmRbX495ziQGksYVS7mgBjBHi9cHiKdgfuS7",
  "key42": "3XUdQRc9YyXbTT73LetLxJ5JVLwuUmFhteCvyMiXNhzt2YaH2U5PyaH1k9sbLnDKfHM75qs8AWp4Dg3G7j9kUnn6",
  "key43": "2VgkG8Efg5xDCrXdSi1UqvRnqBvbpiZgrPZW2zaTTMuPRLeE8WTafxkBcRM8eX6XRhrdjzQV3J6x3hVvvQjCjzWb"
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
