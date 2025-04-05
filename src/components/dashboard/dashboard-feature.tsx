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
    "1PnY9nf2Yk7g46jRswRPtqf1Qp5LjHWNC9DbUdjr9GQjfhDbSxqcgGvbfnC1sv8uRTzMUVU7q9XNnJSoPs3NRz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVexgMkKQERGdNuGmWgZnYm2VtYazKTmzqHUWJKQ1dwpte5rYwXvWSV6RT5mf9Qf9ZmgSpetAUeYstvaSLP4ZEi",
  "key1": "ft8GG4bsb9shMYwzDoiPRhgykqwuc19epYKEfebnqxvvGyvz9pvRjpQqtDE5eGLMGV13Ka84KnaofA9jFb6NrT7",
  "key2": "3zgHBMdvnb3mUK62zuCVTEAZtZX5PYmVcW359wW3Z7pStSf1cha1G4Z3TaoP9H4W3QobYSKDRpzS8hX8UDijgMTX",
  "key3": "2Zos6CA3cVFYD9e4QRShobTAxTViKGmCaBG9ngMy3buSbr59SptBz55jFMJrhLvDzS2LPJqvPQhhoQpwSJSaQyTL",
  "key4": "48izDJWGjRd3J1VC7ZJpDpAZqmrFonMr9NPrrGJQ5irz8tLJ53f7cDQs4dRrCcYP4LfkRa8mAN5m97qanqsXWemv",
  "key5": "5cy28V6oj8FZwLTXYZxq9iFGEQqKQPExHvaLJHFRFPMvKLuvsfQ7QvPFfcSsSCNPvnYbYjBo9QQnxqKdSZTVDFwH",
  "key6": "RGV2vpVa7wabcJyoi4nFPDJYgixkysVTGED2syqNxPuQngZqRUPnPf1rxqRpoRw8XXdLQa5MbGtfJUhBMwgFH3A",
  "key7": "5jbq7XyQp7NWZ3g3s6qAcYcFEKqmPJKShAbPbbnzQG94ZBHG16P5PnuR9pbnVStCLs7F5P5D8zebc8sQaFNbZtVq",
  "key8": "p81HVBANyfur2WJq2qWxiFHdGufWTGdtmBXBgbzsC9BQGdNixqbhkTdT8kudpNcEUPsMKHTPJcvwdbESZorBgmh",
  "key9": "5MoSAFy1ZEn5gEvAJwnXJ1dt1kPbbqvL6E5i5HLsYr3PrXYxYzv1c2T5VyXeNsc4xqcgV9q4HA18M65Pyz4tjiQ9",
  "key10": "3tw25LqhbmavP1ndj72P5pzTEtR5J7ugrrL1gxdFp46adBm8sGFGCob75JSPH46DXAdMAB6ANjY1zCqJhZT9baen",
  "key11": "2nymMjexJA9XiQuhvYpriwyCdGum2Aoe9WXyrjWCHXn7Ykcv6NqseqwA1wpaWZL7XrxqbgU6Fs5XKNb1C2AEeGjU",
  "key12": "2PVDssp7QLc5a9scdSUN4Lu1aB8KVxsBYbPvvwpZ2fVNaLRk7snAPYeq2vED8okqGF15chGF7dvBvW4MVRBDULRt",
  "key13": "3DHBp2F2956ZWkFxYRNN5JXPoerYSstwp6ypdVMSXfY8pC7z21r8jwtRYd6WKitJSscSDBfRW2qa4Ug4P7GCGLju",
  "key14": "59EhavWJUGmuGAD4iY3WyGBR6DaJG94tWF3nEwexh2hz5NzFuzYfKmY58sTTy5ptqRZQvyWpWson1RWA2nsTGyXq",
  "key15": "37zEtWmcUTZLBnSdF1F5ims9arHhEnXnekgxoRQGKjoLueQ8jg4iv8Ay6p69vE1UiS5CPwPtoGVAmQwWpWKE2cLz",
  "key16": "2RTHmTXu5zng6TQtTyer8yh65BQmpjytdM6gHaihezzEgN6116wA5U4gZKz2TKyHaS5zQFjBJyHTYbB15dvjPYPk",
  "key17": "2m2tMjmHeGARZMkQnycUfPEJXTbKXg5USunZ1L6dSkNDjcftMLoXPT69qhkdMtoG7VDAYA4mrUKwg5hw6w62RTK1",
  "key18": "4gervbAZdhb37Wwsaokn8SXsqcgRbcqy3XmYR9NcHQLTChieZcz1LN9j76jgjqDMdhr8ri1j98JziY2djKwCQzcB",
  "key19": "2MGrWsQAtVFN9oWrzAHk7YsWGMhtL9Ke7a5fDut7hAmSYLDGNX4fegvD1ebxtKcXCDSRjuWX1C4uRSFpXjQEGZFN",
  "key20": "2jAF33Aup3t5M9fPZnSUEJGyKR3JJbrU3wury5FJkamx7RWiPi8DvEEs34JKsCW1w2LmEpkDkq6468UGBvT28iE5",
  "key21": "DDcbVLCzApY6UeHwVUoC5PNbVeia9jV3UdMaYKoxUNrkrdUaknXx6tsfCY6x6ndi8uQR1bZwahGs1ap4Z3KU76y",
  "key22": "JnFLrEGTd7sfogKSenM5WS2GnvBasCAMVk4DBeSXtDcpdDvEqgqbKJLpFPR5YnXnFqnyKam5Cghu1sA4FWWwAQr",
  "key23": "4JGoG3jNmNEEGNdPEJ1CoUhxLwZHTbhuLrvUoozRhBLyZfDtZHpF5SXSoE9NS9xvUrtBmsmWBi9STyq5hFANG91b",
  "key24": "qw6AeAZZdFxofFEaL264VKKnjbY6w5hAo55EPUQkiqXLcR2jQEqSXrV8Gph67w5XuFyccgYDdpYxVJgQWBvve72",
  "key25": "2PpkCZ1iRZjfoWvBAnw5UozENtu324ALC1dGvzvEL1QooUVDbMyoYHR52wQzAJC1ht3ZCVL5ra7mrYzJHQSNoy1x"
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
