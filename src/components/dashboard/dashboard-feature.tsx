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
    "NzJv8S2xLZQLeJv8Ym8rKKnFSs8YgM9a8obbejcr4THzai7tY8AAcUm6GTH9b3fWBvPiLyTnpWvuGJNvW81X5L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WeWvsMPo1aVCHgieZZFbkuyYcKKHueBJrFQ8Z9MMtQS8QvEDU7pUJb773F9Wu58PsEhTsb5jokXDmzqBM2rw6hQ",
  "key1": "2TqMhYhjZqZoPgaqTdHjUCwsfvMkz1ECmfLFXWTvko8WWgTp67XTVx5aU4WDPfSpKbDAuov48AnNH8HMrEMKytrx",
  "key2": "5Tbpt7sFey8VybJzkKpmUx46Fyp28JLZiQJhu73B3N2DG3J2g1ZXtoHuvJvZxw9wjBFWffLY2x3NfxrbmAZwC6hy",
  "key3": "65VsV4wkN44uncpUzEgWF1MgLzCwXzDJPoNNcp6MMujd3Uwv2HCkPGpqjAkhYVi3yKmwXRsgnuhUoVjarH8tXb6Z",
  "key4": "66xAVxNK6fPqwwpnMxQJ3WhvcwgkhwMyhEnzszTmT371RndoA94qbVWVuiBu6LFoZDVHYmZcs7y85yz1zJkqabpp",
  "key5": "6TuhBCfpDZXufSrD5sSnGUDouXjGF7mj15jGo4MXSuAfzASqhhXxN8wKSagZPXcqfqeeKws2xUYZDMtivWAUz9f",
  "key6": "4TfYxGFbjDpkup2wSnyA7QsJyzjmoAKRQgzV5KDuMLHCgEW3FoSiBkotmsGSACqqMsqwMobxHfNTjUvwt8CAWoyT",
  "key7": "3GNdrpGRNsUNz45CDsRDQzGqi6cFA4F24yZo6S2FsYBYwa2Sg6VyudxfRXFfZiqjhkz9AqBAGVLr6EfY1CXTQw6o",
  "key8": "54bDcZSRDQ669wzrTnNubHtCni7czGV28qziJA3coCwxWGWWMw1AxtVCbNneHCspcZxc5hjpP5f48gGD1x2sYVN8",
  "key9": "3zftRw5CxLWofgfpeR7sjVaAJwRz7zQFYFQyp69ozYQVyWpy8LTZPaZcPQR5d9XnTkqn5dc5uiobwmZ69KjWPP1s",
  "key10": "42ifSJQgGaYShHX6btYhPeb1SqoqqrADzHR87kCvHUHHfQdNQn4gfypxSo4P7QSLy92ez4LFpbr97Nz2dfUkfZbX",
  "key11": "yFZZ9bEakc8ERSb9ysMAUkPdVTuMG64ehVvBU5WUkDNUxydwi6jCogDrVDYFW4iQEHXRFiLhBdmQkpL48rPjppg",
  "key12": "47jDEu7wQTRE3tuC3Xgbf9k2gd2wPeRxvDEVzynMkKdk58vMwBev6ZadxdjC4mFEyGhpQB1ujwWJpbANHCLusSkS",
  "key13": "275uZdib1bQkB7UmtczRnFgmwsi2Q7ymnUjMyeY49ZR7pfoWMroP6FvrDf3TpfTWVELuXXscigES2SKw6xDujLJH",
  "key14": "4VFsznbgDqJ3ccteKHWQr7DSLvfmcjkxcrhBuyyRK3FzGL3y9oMk7S4sfXy8972Mi68KetrFMsjJBZGMDDc2AQd1",
  "key15": "4iv6Ve9BuaKcQ2tvzFTBu6kEysxDSgWxCLknK8E4TSWQdjy4QuL9ZFVgGdraRinfzuJHQHbwaf6mbSqQRnQaiaTR",
  "key16": "fr3WQ827UdE7hGsfBEvXaLVp49anGqSVfjSUHthPmC8genF7CdJnAbwdoKgzxMBYHEQPrhFtqEvvpjgZHS1E4b7",
  "key17": "5ZB5of3uWMEgzQ9eofhHBLy9wjvKpCZMDQEDunzr8Z7XXb8ppntLcctU72zQnSs3tbAJmbcn6mvjopntp6fNN8Fs",
  "key18": "4RmywEgWMUNYzcJP7hdqJ26eNtYpA6EDk1Hh2G45buxobB6bEWVuthy5CbBJRhiLpScetSeB2q5ztLkz4e4FNLYC",
  "key19": "rpC8RFzbKTfhazZ4Xvn5N4qftSVFfJYJdPMy13LaLM64UsLjUVXvqoWknPSzn2tTJ6vDCF6FyDkt9X6JGJxhWBP",
  "key20": "4xfNshG8QP2x6nu9coVyjroWo47ZMKzs3oHMvDMHNhWQ42to2nvtJx1dd3VAghuKswhxdUgiifZma3ESnjeWixDB",
  "key21": "5iz8gyhPvKNicc8tXy7tT7b6KsJAVLWbCDHDQ4J6UsfgRPy4bgZbdFopgtimX9RXtKZG4sLPi4GYicMZPr6wSXCL",
  "key22": "3rrVCW43fYa1ojCBTeFcKCNN8tGSWqo8KqVRFGqWeAnVDxf4cqjtdv9BRpsfsfr6vJ8RKBkK36Es2Pv9pz3Z7brc",
  "key23": "P1qxvDQeARNrBUxS4rpVBHTo1bTeagEg19RFTQq3uwQv7i17dHGP4KN6oWqWTn4zL2RQJLFXPmEU7YctxRhscPX",
  "key24": "NWiDyh73iZybxXb9hvB7Qwng465NMzBfvcuiHk1nMeX3RWFM9nqnsJqGRbq8V7X9CWkCu68uahkuAJFp8BTxeap",
  "key25": "453R4FBvmcKNwZSB2mdLi3Rihw1HxWye1RAYguovUbtYsFwLkTzXWKHyFhxq7YZZq1jwmJuHWzX42SGtDRDiqq39",
  "key26": "4VqLBhA1RKQUPMRR3dDSyLvzZF2iQKPxuBRDCBDQR9s4yDTLmMm3NT6v47oWVdHPTC8FSBPMKuATPwr5pfQu6h2K"
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
