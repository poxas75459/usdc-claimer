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
    "5ctMRQWGFMAwdtfbYHdoij26Jg6gQkskvJKakP3sUJnCT6n12NGKQyvtWcmpxqAYX1gyuUDNWYjFUXK7PRRDYg6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKWDWfBZre1v5RgnQVHxHuwK7Jr7NzaAtPeziyQoH5K9Q8E5KVnvqEbP9xFCytiTkLdmftyJMJswX1ssGs6CFQt",
  "key1": "4tz7cS1pKgxcYF72eXH5Wa5B5tvoBXHQ9qiELTyKFWXGTWexi1hf2iHANN5rtUvKEJ1bgZpfcscc7SLSCyBxFCua",
  "key2": "5NfHmW51XVJhVqZzkfPnxw3rqHFqYbQoUCfLEquNwMo33pAMgHMMD6SxZB4wA1p1U58qc4fGpSC12Cw9sL9KADzZ",
  "key3": "4jH6YVVjLhGW2onePwwudQvgrHycfzU3Jk9U5fYEXzdTg5jkoqBgMuuSJbD2kQQKEZ38u3oScb4X54TQb8d154Ns",
  "key4": "5JB1wfmhZWcJtjDEEVtBu9hMHmPo5XuWXm7hux8GMHvuv5uf3sS4zH91v1ShEJWkB1zvx9kgfnuGVocubijNbcSN",
  "key5": "5MNwakQLuADmj8xgG2xAiJhfjNQYbfw2Y1aPtqvgvFCyfEGL3uwcUD4kqZw4WZJcDfwRTFs3pKahTAmtS176bQJ7",
  "key6": "5u1DLNRQ4cNFAsbq8HvH7zrmGQxibJAbPmGtfJ7XRbua8runGtNuRWCBwmRaKfrQUMNNo524bCoUP1k2FU7wCN4K",
  "key7": "3RcYbohECxW9nVWC5AVpFbCzaTy61xiGeF6XZbqkm746LhrNFm5fH4E6DeoQtSrqcCnqP1cYNxA3xfyuXUaHwvS",
  "key8": "4ToKTDpt2yuzKFm7UjiansC5siTEtvCUXkWVxZM1cLxhzPoW3BmBj1dvkmaBgTA4XG2TfeJdS9YW7mCC6HNXwEnL",
  "key9": "23tXneECPs17fq7kq7UTk8iyCr7Rvgw3obsPfhmBGfw1D9NHVa9aTLWTLJHqW1iaLXdvRoeQ1GN9JWbP8hHsc6fM",
  "key10": "37WghPgTujCvpZaHZzLm4xbPMXLi1xTTc2c6JdGdpFKrb3BLaC7eivFMHTgGe44UKZ6mRZuF6mNqiTJoXvrhN6hF",
  "key11": "3r8ubkkJdCaZHpEx4MyJwe3euFay6ZRkqchVfSXtv4B1Xh688Lq3vaogKS6SvMg8vwuMK9qtkPU5cXeXkd4GBB4n",
  "key12": "3zUNRzR9LK7REad82AyFQzyDUvnm3bHP1RKqFKLZ53K2yta4JtFNe8P7MGkL7i33ijpWUpCKQzS4QW5fT54SYKGE",
  "key13": "51ry6YkNSfkFB3CHcZ44pa4ogpbk8s8u2v5mxaKD1jeyuBNvv3hnMtRe4NfxZ4VxrkNUVa3Pn7ZBPRHTKytv3zXQ",
  "key14": "63pyav228J3dbL8iJisk28JBqtc439uq2HwEfeAVx2YEG1hNMS1Jajrvmt1XjyusCiNxWpGMjVTYtELtQoEjwLdv",
  "key15": "2Q7BZA9azdb9869foszrfDah39SAMXML3fHbbdta1PzybAPBpF5nx35tBJ46xganfRiCgQGJbjey7BaRmCW9xzNn",
  "key16": "28GCToBbyAPb3MTkci8UwtkuBa7X4ECixcs2gsGh27C14oA9sxdmJdZiNvC6TNJxGR3QhzZNAu6yBzNCzZEv8Rx1",
  "key17": "Zv7r5XYJJiwToGG4BmxmdrycRxyLCFvim7NtKp8FErNrugGqRMVFyjRTiUQE6v2BfgxVFYGUpn2cnnRQzGBHB7A",
  "key18": "3oUtwZWRjoqb5KdiSn45JeuM5UDUgk4XSfctrNUYmjqAfCvH7RJRhYkGFXDxD5enzjU5siZH4e7YQqTHCMLRY69r",
  "key19": "BdVZJ49snzni1azBn5frU4s8jkgcnmJDoZoMgLVXF6hCWatbemAhHjNWTsVp2HHRGTtWrekUBdUZAE6W8RbbQTT",
  "key20": "669cp6g5jjeUpxDf4mcoy4DUchYtzaQUwPkMVZZGjVZ5rWPvZwufDCcpsCV3FduzxsaifHQGTfwbEd7eWzLVSNbz",
  "key21": "2Mshq4aUp53cKqVwLWMrmXYHJyBuKmaPwNQke5TS9FYXfyfTxo6riSVXn7NB1qgCNYY53RAwbAM8AxfdeyECyQk6",
  "key22": "4JVpSnY6Ybc424EiKvjFT9g9dNsdttfEgcSh7An63fpTkB7Rb3s6Ma71xBteUnJKYoHD23nEH77Kfg9uisTkWrD3",
  "key23": "3jc3HpYcGZBo5DdVEXGWbyVbCmCuefRyA68rzo5UVd39mUa6BPVJDekadqHDGzMfCESWPPp7oZMVgZAVYLUvRbY7",
  "key24": "2AaVsMUugwztv4MUavfeuVcCkB9EVrd4ojfCVUjEwEdNUq5Td9meAnpJtWrWJPfSjAevSgLQwcoQyMT72MhHc9oe"
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
