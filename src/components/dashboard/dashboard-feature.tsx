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
    "2biyeRAZCAddhPzUjAGJds4ErBeG3SVgLTkwhh9cnzDL6w61YM3Rsi3pxf7pcVL7jzfmvh48HdTPA1KQMe7dYSyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3JG9QN3uGkmjwr5jbs9QMghgEHdJ2VtpAB9iq69BV7mZkgVdJcCivUGoQRCYDHy7aSPMEMkPuoJuWi6XBLt8Tf",
  "key1": "3yBGyVZ4AMPY1oNgSAjxu2AbBWb3YPKALdNfwLe7fKFVgaDGvRutr2ga2t7duwrkFe2iX6QtUxvwMZUoDPzi8RMt",
  "key2": "1tCSNC9xsJLv7DxFS4ct9YqJG7tDzZ3YtBih86TX1Zn8rVREUx9kEA5j9UE4ZHj1XsSK1fWLQFCoQdn64n8twgG",
  "key3": "2Kwjk3iB3stZrLYo1RMM61QmcEtc7YHawM2ET4k4v8ExgVprVHYgC59vT2q9qPmDC965p2uiTrGokFZ3WRSTZRrp",
  "key4": "4LQYPDpLHzTx9h1duwuxFTjynARpwchQcgeoifkAgw1q7G8QKqNiXGnSyniXK9ZRHCivGsCc5HEUdVhjnf4vbot2",
  "key5": "2CiT1yVgKVERfy314H1T1GmM2NdxUWDiN3frr8rf4giBAf1ubouiiG4iFMBgM1tbsgYD64WgUVGUxa6YY6zPvUGg",
  "key6": "4hmP2fkdGmpAGpn1cTmBZ1MiX4zmNS1rze6FttqsCEAkrLS9ZXHF6NFXmupsEzboYWTc7swGBQuqRh88AtuYtZVC",
  "key7": "2yRazmtwBzxc4KV9Ma6nRehMQMTp3cnemiRgpCEcSoJRBZUMjwHgxuqNfP4tbnBBPJ813XVUjmbThaaWYmjzCuVq",
  "key8": "2ZaCBnAZJqjB4QASHSRVfgZGRMSEpY7Hgnzn5AJ4ir8TdLi9XcsUxvLgN4meNadgDPtr8GAyg6JJDWhaZE7rYM5X",
  "key9": "2ij4vpDXq6ZRTTxKp1W9hfhrPz1BATnboJxT1LD1MdzhPkFW9JYKpQGxDnmSsc8zEFbc6ZqnjKk9igfKbXUhARMM",
  "key10": "2wSpyGQ6MxajhV6V9C5sRqXZaqanaxqutSLujUrCD2tbKXvjmPSr6kMH5SopdGV15chFLFwURtQVU1bCugjZJcET",
  "key11": "GVksKFcmFMfm8xXZUXikrHRq24f9GqZrJWG1NGn1j3SyPxebnRmN8M6GgLiJ8VHoNQnhKc4T5FBG2Pxqnini6dk",
  "key12": "J1PKWm1cWPRu5ciYVLR2Ay1qZQyvpEJhkSjQGg3NVGAd8pwWWQ2rPwQ1ncvo1J99oc5qmEKNpjxvPDGBXZjmd6h",
  "key13": "2Lk31iLvQyN4P9k4DtYwd7PJzt4sQaushxs6CTpReiqRCgbG1EyQiGyh75b2RDDn3eEeqSxx68kL3Ycryvt8aHwq",
  "key14": "p3pzoNvgCc1KSnQxQLrBFNaeHBJuaEYhGGP4F8iXaduFgHpiZgjTAUqdJzoh2BffV6imPys5EBrVNNzBY37w4vh",
  "key15": "rR38NDbrDTxAQaJFYG7AFKpgi6EcaaUScoCtTPrbiPq2mowvnsvwgGme5PEpTYiQJTJQpKqbFxQT632y9QPxmry",
  "key16": "2ujCf2EgpRPFAS118rXszjFQV9Cg4hnQ3pSKP9QQMGnPa8cJ5EQunTp7zJ2MkALTdq4sHMdzxTMbMnn5mwTrYHrW",
  "key17": "55ahZ8UxtewVPnvc3HosEFJpggQMeFKhiBqE1nyNBFUwcWrrPmhonVs1mnBgthLSsZejaaiERX6EUC4tmN4YxD3a",
  "key18": "5gpigKB6VwkPpu3tNSBccRj2gLRjH5VtZbCHvFpoqP7J34vvsv29ozodaLKsTou7FKpEaodt4AXjqbupQMgYr5MA",
  "key19": "5ukf1RKA8PrGh8u1NwrDowNG47LkedGF3KypozpfN951MpAAwjNEiTvKgTtwUKwKaDQHtyT1bwc9gMDLAMN6ap2j",
  "key20": "3xP58fcwiGo8m8ejtfio7PQcNtQ8zP5c5AKZEBRt5335JQKMS8ifWwzPmUqfp7m2fsGdTnuLBrPPaNmmJucmT17N",
  "key21": "61EwuhTCAEbTcnZDsd5PnV1GbLXBQeBxh1cbngADLGa29YUrcePZZnxyccaFirNnvoLku5YJA1eJGBB2ZvHAf8Lf",
  "key22": "5mbXu7JYDTgXG32d9c8qdtgNTAhcvP1VxXcksJwNJSX6z8mD6BY2S7CtWWURRR4rVVcmU5qprPLPoU2WJDAYDu7r",
  "key23": "H93aURjen5cPzKWvR3NBcmtsU6ghk53L3tBNEm6n2MduL3MqPrS1H7uYXThjqjhvriXKTBBKFuYZkqnjZX6vfzK",
  "key24": "5qZ6CUeVygE4cARg2dvz4thTUaN13asRidoLZXbn3mKiWyZFQ9FA4dEaDovkMDSjz1LQmMSaH35hgcKpprQFpu9",
  "key25": "57JkNWwehbwtqnYHw66bAyh2TDzgDUq6inJx5F12EN8y5SikaugDvSU8JfqTxYUq8i5UUkzrnnPeaHpb4PZpRc54"
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
