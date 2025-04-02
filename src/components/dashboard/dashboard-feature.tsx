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
    "5MHRwv3PrFSJLiRFTvqo8ay7qtpqoA5ebmNzH1v9wXg4GWBqtRLCdMgbEWfjaR48fS1oaBxBd3JM52k3Ei9sxEeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTkjv7rrj7PqRjwLDMbazizFmUs4mvTBiB55kbr3pd5RaCTv2qyFtdwZXJnyoTM8yRV139GvDgDnBhrCgf7hv6i",
  "key1": "4PznQYHgBdpQSCyeg2MWcHSVweRa2bCo5huPpcpyvFryVnGh4eSJbukSBsJAMgXNVhEa6G4BKUWEWJeKMMSR6AFk",
  "key2": "3Cv2rW4K7sQ8DoUDWvWMpeiRGouWi1ELr8PP3iNp6v4Z2zC7TKMBnP1zqAP4cPeD1g9cUpyScHrSKb4FR5YMkcNz",
  "key3": "5P4N6PDmo6QcyKqYus9woDviwnooMRLUSvPq7iJTTWdCArgBzgUnEaBVGRtTR5KApDGMR3ohe811CLXzxMaG9Pgx",
  "key4": "5FRGjt1dYj4JPHufyYzNn3KEC349cHSUKzzWX9yVo759wJuxvnafNfmWNa2RE5kBM4vghqGjXKbNH6ToerGRc4B6",
  "key5": "2xje3gYkTm6LLveYvUvu6WJHJs9sVtsEVzKgyPM28utxze5Py2PL4ojWJewM3xZrdxwQvofCmkGYrwZrvcfqWhAD",
  "key6": "4AJ5zTGEq4wXWYP7H18dC1758bGyWx85H34p3w5bdAZFzCq27HyjoJgR4sEpbV5kBoLYCDuwwqdiwpgR1DoJLXaK",
  "key7": "5XWtR8PjaDk32cSPBPQ82QKj4ip7wRFDjcmfpwVdy1vyoD7W6kq3f9jQ2eUYZd2odVLKiytVt2fJVnipezWEUkA3",
  "key8": "doGgo4s5EZbXatqyPg8YYyMZNmBvDAhdQ8hgqvRixSMsuParpqJWbRW9wxrgbKU6CubLvknPqAEzrP18GaJGEnQ",
  "key9": "5ckwDdysApCJJUkrSWHRCocAwxs1t3NvpsW3t7heYT6Zoyf9kK3ZymZmXmEE6gXZDDHogBZbKmcri5DBsaeNywvq",
  "key10": "3yTTZdgXF3BGjQKmhgLAFD85B2G3Tyv6DR9AvXrJSEA2vDkkYgetmuUmsMki6CrLeavcDugNPGNBTrAtbximouhp",
  "key11": "4qDM2awE2GhzN9aqBJ4AVBHDoQN8Rp47qQeMUaMWGUoXvBQn6upEWUo756xX5yoMzpj1wmE7iC3tWozxfEzxCA93",
  "key12": "24iqAGWVJMNHLAzeFtygQkehRn4AboCHjkhWXrwCZi1G5LfwmN3DWBWsCbN66k6cfeSnBubCHzBaePrMWoPv1wfM",
  "key13": "2QQTQJugQuNPf14Wagj6LshKmXq2DdDEQyKDZ9hwpCaeypPM8zKkgVt3BntxKtsJrDCVBXfK2wwxMPPkWZ3CNGfV",
  "key14": "53Hyr4s9K15Y2aNJMsEe2J1DSxqrqcScjTuA37wkGHrvMUheqKdYaSULMGE3P1TvWgob7FzmBfMz1yQpsCsLAMsF",
  "key15": "TWrbSeVBLQg6mTWRK3MqqWXaaDKeqY3HLUPxVNAqb7FQ8P5bKrmevtvo89r1iGAo7ivoxZHLQ2cijQfjPYSBkrC",
  "key16": "ozTKkTc89K1hYhSNxnpwRoBjABckxWtpzSEDgvxgFTYXxnZ6Eym5Mhz26AhFfGJjAaS1xoRCgExvGtoYan9kMHT",
  "key17": "2TQGPD2yHoJU4fik7cmh2ocfuELHeHagRhfF1gfpjRyrU4KUqatAVCpQCuWnrLeXT3b2DJXiasKAw1iSkG16vzLu",
  "key18": "3Wmo4Kw94bkfq2obomUvmxF7QwVssfJb79XyivqwNCxZWa8y8c8YBTrCASGUc3hkmduEKKgV7k2LvzLYhENNLKjz",
  "key19": "2saqM24pve9ZPvcMKPKJipTddEREQhHB7TDgyC6rohxHGw57Eed8Sx9fCbgACprLFS5yBrxR1uP2cuZ8e2rXNVvQ",
  "key20": "3jpocoew4fWpVtiEqafJfBzM5KVNse9LedvSe93E5R1KNWiVFDP8aFq4fCPdvenFsc19RuxRZZuwdLyMUXCd2Q3v",
  "key21": "ZCDNtuwc4Et6oi9uQTDgczaZgUmCNzZbSEQzT9X6JiAu2yTzHnLTGHDAUzwDnXJ9r2pVK2ozKMkGb2DJjsSweic",
  "key22": "4qateM3W7HBpEYtmfXoVBKaN3sxWsde7dCsECRQaquRmvtZav2fo6bEBkfKCRkh8ZRFPXy2MBCKTz6GRg5KLP6Ui",
  "key23": "6ZZXk21z1WH5jfNmFztcdKLqBuP25LZ8eEu4Mgyn36RvZzbajrdHCzSniPktDE4wogvMiiEbvaL1XWQWYgd3q5p",
  "key24": "3EsDkfbUodb8ZmWbtFCiZxrHrntXiHfzgtAQxG1NGwQdhwQyqeGVMeuYWM5SALQnENaW1hoR89GmPSQdSJ3DBrnx",
  "key25": "5Z1TbPAwDZZ6bw2KMfBPp5jNMZ4bKwhroZKes7AgoQjHiVF3QrfMXupnG4wyGEy6yrbKeUKppaqo1yAhMCEeCF3H",
  "key26": "46QtsqLGQr9TpjskWqjsqmc6EZVoW4GqhsBoH1HAtu5znrFNmJk85EC3LV5W3XGp3J33ubjT9wm26TLjX8oFUp11",
  "key27": "4Qgy3tGzZk6JRY4M2XPhKosYXUbAbsd29EivgE6xrGNUNQmMZA491Npuo4RPzLjJEQisYo7cJr9FDE66HUtLfDSw",
  "key28": "8vLHXsdYTT4bZUdP8QVNd2VJY8AvekrhDegZg5PATTUyXEES2vU2LJ8H9i9U2TvrLWgQfDp1jxxwLcv92p1d62u"
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
