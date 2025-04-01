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
    "4m7ttGrvN2jJ4gQbkkxDJatNQcbjjLua2ocfoGhqu8GmexCt8CAsUeB5T37yfo1VzkYSHnQiSsoGaRBeUwcDr7Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfkXiM8YAqJntu9g4Z6chfSwFZz7jNepWGKetTauzhtDEB4Sh8i4Zo5CAyHbFEJfpbRn38wijpG5pmQsnu27Cjd",
  "key1": "DWLH3DG1uapWMFPkcrc3LkNJUbULYn94hAyE9FGrD7eaZ8TKx2aqqAV1YkSBt5q1LvMBXCd6yAp4QkcX9SwvjR4",
  "key2": "4WVuvM5UAfvtWG4FLrpMAT1cYd776xUTbohbzwDKqdS8mf6MKkZWUSAunQP28r2VZc6znNpachKk49ccNUiRB5xE",
  "key3": "44V2KX3irJ2ecwVRezLFgWdmrCNxFgfMFTPjiK1NCUdZJT5pQVg7EMqLDQi8WjSTxaDN7pR4pGK1dtJjHEehQByD",
  "key4": "5Lc9xTnY9MyFeU8TxASQeZUJRZZFRNixBbBE12wpNrRzXe58XSKwMHAUNHMmPvUF59WguTNDFvyANpiLiMJRLmMd",
  "key5": "3M9FyspUSGKFUXfnyPKf1QbqYsL1bHbwKA5Q64TN2nCdTACo9rgUyXc46gZARX2TSzNQmFHTkQTCoJfrP5rYig82",
  "key6": "5ML2WG4SNG3p6PnFrZthn8V9AasxzQKRVrDiWiyc7NBLba9CnHCWyFjJwsYosB7xapy7YcxN4xzhPjoJ5WXHMCVi",
  "key7": "8HCqFKnLzR8aPjKopp49qc2nNDUrkQVFiYHTazQGDiipGssyh3K1LPuV1unAyBNLjYqP5kMkRTLcdpf9sFAfw8p",
  "key8": "63Tasi1r2G58pzMdZ3U3ApokKh8F39M6U5K8do42qwSPUNM45Y1PNa8SiPQu2x9bTfkjcRouRQzn5gDobgE2HTKT",
  "key9": "2jbj4i8KgQHw3meQ7UGA8oGAFDJT779GXnR2tM4ya5YHovoBVfBTviZdCHG6zrrBZ3afHq2eDFf5wAiHW2vYqf6C",
  "key10": "4oKSak9bv9URKTCe5zFVjt73BGrZZ1kLAMdamA3gwnGiHVRw95DXfyjLkExoLaCd7oCNCDUz5xPXeRy33rsUf4kR",
  "key11": "61ebWNZXJRNC1e4jNSvFauAU3qYM3tqz9ZG8c5VickCE7zYYyedxqLQE6kbMzQMhmopuXSrWRHacB58EESDCgBx5",
  "key12": "2sjbNLJ4u68m4FaJXt62ENvfzesDYxuzcfkHtVfSotsHuupuiQaVn9RdoqKAAWtiL7RFpmo6uWb2qWW4JbE1GD4G",
  "key13": "mrMHCPkFaE38TLfAuPEGJWHd5BEedwqSKuBbC6J5aKV2C3ZrNuRoEiPa6BBWm5jf4rREvD1rVKDvM3Trvwud8t9",
  "key14": "4tM5iV6CHCby6RXSnd89ij5e6PQRr5VhxHX32EfL6UXnKhk8ScKoKQ2ZUevBTqTdqtr2ndcBAno5PCrjcykHkRSX",
  "key15": "5WCr4LhKbtAckdkfK22CMDFsjFcNXtb8y8migqkZZi1Ky8G1Y5JfLP6WrjbmHGeaabcZvdCzYuG29Gf1NkbBtJkd",
  "key16": "5kvKEyBPg32F2qs8zAhb8GEDV3e668FWiQyF489nqumLYKqfWnH2vyYD4Xfh7vgy4c9TwkezDDVWtEXpLjj6M5r4",
  "key17": "361bkVDQCp24adDZjCjgWC4mQP7AHNPoJv4UMxVz9iwF4syZFpUuUL7mCLEZPsjtW68k7yy7TTViZtEjPpqSmiR3",
  "key18": "4NF8U99LeEXwsbDVeSrfdsbEgkXaNx6QFqs7j67j4jeMkrfNBzZXRLWkoJiSK5G1vwVJRo7cTxATF9BWHDSJcrEX",
  "key19": "3hZBBbEkPmKY1c8y4kDh9yn2QUTP4db9xMTJnH58JiX3Tw8p25LYQffmFoGiRQMamf3kPxkgRRtMUQckLCUqoBKj",
  "key20": "QquGxVCaszzXkdydgEwfLaEKKkvuGswVz4u6TfF4BPNLQnujXWaucoj3fE7vqzLzfXVDmFr1p5E6zoN3aFWUuok",
  "key21": "2e3S1k8TsdJkSRRH3s9YD75BF4nCUs7nMKhxdUnWs8xxz4RDyseWFwANWQUR2HN3yhJ7teQryiFLyoXFYY8mFF4X",
  "key22": "BStTERWHGfEQz3JzrmzSpdGTrA76LyL3nYY8oKZ3NQ7m9DnjWKdMWKfGwaQnWi1sv8apSJhfjagfJFqkJPUX1kS",
  "key23": "kXa2ebPoqBhgVkxRWtdu2CU54xJmzAx8iorXzfw9J1qiUWCNKwVhVXtS74H4dSD6wjbNbszGtxD6RUcd3XdhSKF",
  "key24": "3KJr1ewjFt4ZXtD5KF1zVoFjdqpHWw9Rja87K1NLqVKU3BqWNmxnVN7CFX9NXA7rFXyMybRmPP8nC5Q43FCqo6ie",
  "key25": "3edgHAvfMh1iNFmspscSoREGVFh2bgxF6sFoKrs4Z8bUXSAUzuUTRZdRjT1JUzz8BLfj4Y6WaWH8tkeseRHJAK7",
  "key26": "39PzPkJKCFwvYZsKPxNuw7uvHJeSiughcUahkDB3DkW2VAtaxGSoCATnVd3T6x28k9XKDPtX4b2DX4MHG7dNDr9L",
  "key27": "2mSMYaCkwyeLXBMafpSTZHSytoE7PCKCWu42VUhRjQwdmsAepkgWtzMpVSTAF2bqvi9M1VA8fpGfKRCFfG89aPiC",
  "key28": "YbET9QHYv1MpX3uWEGfQzur3rP6v3mqjFAvCyRLTMKvg4MxSjiKsX1bFWZXNzW2EDHGL5QbpR6zwxfNSSkg278v",
  "key29": "5KACaq8W8ZZpVcRVtmjMFhhjCJDrzBgnrMcFBt8MXmPGUpNRyD9wSZJXU2JWRpVypLmYgymFe8ygcv3K4HbhN18V"
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
