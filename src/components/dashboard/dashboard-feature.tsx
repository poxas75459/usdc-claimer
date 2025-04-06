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
    "5pebmaNnFqSETFJuVti4iaUhcxQhchfzngxWfCzUm6toiMyYPqwuuMrbGtgCxSTcM6FgviiW2RfqjPg5CQ3h3sTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRVgtyFDCtQTe9zvDR7A8qmVQMnEoNtdXMyLcYDDesgbUyYsfBYFNFVc3PmK7EVx3bAio32aGA9tjNGdzvmGEY3",
  "key1": "3jktsep9k8x6F6dNcRbM39K2Gdznn57ZR1NikEytq8kGZUQXa3Mrhh1iJSCPTDUmEanKc6k77cQUdcvs7TYpsohV",
  "key2": "2bHWoBrpAgMuq5KhpFXkyPcjqPWiZoMR6iVTfjEhEGuuxc7Lh7SfDGFM1LkZffbExjtB2VQsaCYH2yo7JunkQ6LQ",
  "key3": "5NMyhBoWv42Svvq2D3xVyx2FpMPBtfGosqRhPsdhCH7tF4PzeX4doFVdykXyhqBJBV1YM52HVLvqoRwMH2zqdzRR",
  "key4": "3QrWBZCRqcrWyyM9tHuRdXGU9ZhdPxii5pn7HTpLpAAsfBXUfgTQMFwHN9B2TWzsStU6MCFMas8TXaKM3yjB9b4S",
  "key5": "2pqa2h5CgjJFfgG2zgu2mkwQbwH1kHEHNcECS8YZr9CypkZN8bi4jgGteeerPsuXN574isFJ4vKtPwkkn6f2NMfX",
  "key6": "4b4acLZ15jRDqkTR2pLuqEwaXinQ7W6hVTFmJo9HNX1vEhY2PsTXgcdNwK4coUnoH2RvgChTtVizciH9EJtyxBHD",
  "key7": "55G1VG8k74VhcMbDCnZkzzng4UxPeq5JbG1n3aKJdDyHpdJpZqzqWED2xJbaR4JKkavRZdUMgwfGZbWT5f4HVf6m",
  "key8": "4AtMfKdUbwBXA5ot4bWa1rbFqKGAV7biHGFf9wP3gJeqXLcTzd9JmMdScqS1mo1d7yJDHTSw1kNY8XJmMNpA5bW5",
  "key9": "kGTM5SRBPgi2XciJz8YcQqGuwxVqU4ZmcnKCT4XBhunAxm39o21h5bUiShi5SGtBPUNxYNK1uurBhi1dV9imsUi",
  "key10": "3XVqKBZS78WpG2M9vp16djwwwRibHatb6bVykFHNzhtHsHNPgciLhfqfEwT91ME7YGTMnzDzXbzhrbQnj7b46Wgw",
  "key11": "2RWxrQeGPbS1ke6gLbenFLZnWkYRrr9KHrU8LYxaXVon3cRKRnMQBWWXmYasA4bPTyq5opHFow93znMir68XzuxZ",
  "key12": "5wCkp3RR7JVMx2JViqCNwRNAksKiiGuu9zxaAW2gqQu3CkjUpNbzL18ATvNtG8nxTTfkj9XbDxs9Um8b8AwMhCE7",
  "key13": "4gnZzc4D6FZBgavhh4PiL8Nc4GMaR1j2TnX1YgGwU5Xy2D8ae7ZdLKdb1U3ACwWY8syDUdximxWcRK1yU1X8CQQB",
  "key14": "35KTxX6AqNcGdU9QEcNzqd3HBSjp72MrZTqqJyLh5nofEPPt9MVPx3xH8WBkfeGwX9ZpTF29kxz7HJiXmnSvmaKZ",
  "key15": "4BBhCZK7ZtirhucWQkS5Cn2ngovM2zvtU1G18kxMJTb7oA2wUQBbkpsojjYAtJYTGxCfTPoqEprWz963Lsiy2SeF",
  "key16": "UbKxR4TZtBR5eky7RAqugcG7o2Y9ZS7BeYk6kT2PmNBS51euyKKTkCPGLoFKLRVPr9AWyCKRsZA2hc1RVfG8TyV",
  "key17": "2o4Phdh6WiRLqAYdkv5QTfiDPkZw27G9AW8XhHfdVFEx5rGVkwmapGHdeH7G541aNaaQvmh4hYrm7Dn9uCdviNn3",
  "key18": "4KR1HDuN8f4C12bDGGtXRLv1NinyDbRwcC3iwpSYnswQNk5r3ab2pXo4kv4qRRNkZ4rHQQQ6KLAzDn3gqMf1aPL9",
  "key19": "2MXngWU5oVSK6KFMqHHTRynALKMSMDZNrRREABBspwTAdi2VTJhngNQBVhHyavGH4fTJbvGtBA3yQjRySZjj64qL",
  "key20": "4CHgRrDwdX6eEkiL8Y9pV3NcZLDB7aEbQqfQ26f1WRC4rp5RNkfFW8pyGNe9qYdLt2fmZduzbcM9LhkkgS6vdYRD",
  "key21": "3u2Gzd5WyxTFtpGHzuEa6cAZicJFy81818AYtUyphhYFAAcEfwiui3TDexp5HsW3ArKkBHWVdy8H92mQ36JWN4CC",
  "key22": "4vMMZ9FJLNp11XZ5KdNu1AqPiGhuBqppLR6dmx4seTtF4KikbDAT41hCpgryR2kueJnsjyQ2RgKyxDxHcEYR3MXL",
  "key23": "2xMN5okPgTGwofHxS84bTxxXMRhXJ6FS8RwvmJpTs4tG5XN7LELuN1x7e8Em55wcqtUNNcnTJbyUqKNzxpjhPcbn",
  "key24": "5YF11Bmz2XvBZgDQ3iUHNRuxQyrUTfQUkA5ie6kboeUf6aWyWWAM5NFT3FtSsQKG3jTmyoLBQddJjrTwTWhobeAj",
  "key25": "4oCecN5NpsZpjGkcLErGLTcJeRT5svY13NP3uuUeJ1tvB69WkMBFqTGe9dmJKRJfsY387hm4yCKUzreZNGgh8jXx",
  "key26": "4t33UBpREvkgjUzzbUBVyZZAqfVmCvKFD65L7kZxk1g3mam3tP9XEctqLbXDANWXgutQKvevhhKdMfLLkZagozQH"
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
