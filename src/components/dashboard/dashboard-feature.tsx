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
    "4hXHpcywfvauvpvS3kQjLFKKqJAjXjigwG6Ertb44k1h71QPFhQvwR3qYnJQVmpoQzixuzigoKCQQfPYHC9o4puM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agG5nQiFv7NEwX3e6iUpN7PUBENJM1mE1xYQDjU2SKQSoWfzfqnCAxfrogmfMAAJLQBvqhphUDP3EVKUS1ipbLb",
  "key1": "xwYGaiebFgWxzTKT2bz2kcpUyJwQFhs9pP4fvwm9XymFxhWQCmtJMzSoHT5GRS6dCiRj9sNnwvPnNqQNGFeuMBP",
  "key2": "5kVwYS87AsPS5GFgBTyXuDZS1ngdwETEiyq8YwYK3iYHU9ExK541eABtfWvrSiyebteN73nJxqSC8gQv3aXsxypf",
  "key3": "JEa14yp7zE1QQ6SZKU7rfv1dH3EiVnbeZrNcwpKhecNpJPEScBiKRpzJ1ff3Rov573NYmuvpVaiB2JJWDw1Uk3L",
  "key4": "393izPcoKKzYSb7k1BJ5RKz3QVPLAs4xXLTTZ7AZzxXT6n6tH6i7Nw7Cp7PW5CrNBGNF3hruxZb8U3W6Y9xNZ1GD",
  "key5": "j2V5Tf75kCWDT5ZS5wRUoBCYYqS6ByQKtw5DVUzKKhhGJRUu2ZEtJB8B11darPrg9uPDKhCom3sLzcAoWGkdKJW",
  "key6": "3NgwFawTR4zmFREKmsRyhGUJd63Pj2Cq8fqPcLqHgpvj1kRDzM9jLsKGzMFD6hUVygJPAWkciVDKaYzsatyzdbQN",
  "key7": "BoEt1QGzMJSnZ7rM8cKYakzpxb4iKAMk5pMWbZUUKqNV6ForaqZSQmPYAuQD2wrA9Yafb4BFfLz7eoJ7LZPjJYQ",
  "key8": "4x7rJk9W4R6Wdv9GbAWJd5VxMuLR95gS6eqFyHnjAyjnDsEskx9MshP5kjHwBAP1KYqtWRecbj1A6B6D9Ftw6pBa",
  "key9": "3X7zbLKpJXtZmR4PanrqeRszNuemhMtzzYVTF2yL2azZwUGA2JqmJVLY9asDd7e2zW5Jqm8gLFw9YWnQNZi4bT8e",
  "key10": "3maafVd1A6KQwJSfEfR18mM1ETqAVCihfX7GEUxEQeLNVivtsptUqq2Sstz9k4p3aDnXJvxB12G5Nam3euCqpT17",
  "key11": "5qy9Gpx1t5YyPmr5wEanpsTZHvcJFVZo1m2A7rexxNpCWkyb79MdyTtf4C36Qf2bw8TnNSLGEw4MuBefaFwo82im",
  "key12": "3xydBkdueeHdaoVeEau7NvbhmF3NrZ7sFK4PKrwPPvmjPcYrUxfQAb1iVAN6oPQNefG5TXFbJLEPTrPsw9MJGyWx",
  "key13": "4X56Uv9BmYTAHfT6NByaoW5tJEVdhXajJMrHPhQ3kDBPiLVMeP1XK1CUMqMiXHLop2vXD3q1Gg2rfdbcMVcyyacM",
  "key14": "geDEUodQeQpvqYsvBSTwHabZ48MeqHLncNbesgV5xbmM8PwP9Kdp3rSnD5KvM9UxA3oEfZVGLBWPy7LShs2dk8k",
  "key15": "2A5aJF7JuMGqQSaGYqXvTafwhVCyf5Huv9MLJbE97scsMsBWQWEzeDXQ6FaktS6k3qtTzurWij3F3jmey6uRoXPP",
  "key16": "5aCsMeupupdAT912BBJpbGgsXBPduzMFe3Wf6Pi3TSpUf4wzXXfji48gPdqSFBMa6VbjFYyQNrLKQwUvwXA1MAqg",
  "key17": "28nnkxyLTjX2aZfARQPFACu7b1MNJuNs5BL8abVJPt2Qvhc7Auiuzb4UuM8ZNJSLT8a9b68Rthnqf4R5ZSZptoqi",
  "key18": "2bLxBCGMT5qgu7EokawYFzrpxvi3agoHR41nhLiefeE3xYC3jA7zA4LSXZ6UqbMPGr7dtNcZEUrRRt7bo2ri8BoN",
  "key19": "5SvjMu6vv4jPJuqoGzKd4Vt2rNjWHmaPu16RfzPsa8xmcC7wkb6fee62N3hJHJdwkZEAXRK1SAk2Wv5ifPGg9j3b",
  "key20": "2puLjxb2HfPSv32LBFh9fNrRgoMknBTSh5tM6XgdnoogWXyH7wFRSYZsKhAu64ntDPJKaeygEgDcuBM6hKS1QFYF",
  "key21": "2M8N1C8vm9izgXfV6bS6gsHhBSCtqXQVmaMrp4ZDsBjnqEayCFExHebvH8euee8PrX6EkDtPeLMoyWK1M9cpPqxV",
  "key22": "21RVqnj6PBf35vcxRiVXJy6Hsa6DbU2RpsC9x3NobrL4SryExE3z78UJ4BQBo1VBa7bss2sHARE2q7Vf8KFqGr4p",
  "key23": "4HSRVNF4dmXLUKGP13YNComFjJkvt3r6LGnUhwnLKgEJKPnyG9NX7bHxnLpGaL2HM2o5M3ahbLffh7EkvSmkipzY",
  "key24": "3pCuip3c7mUU4idrMGThmroFGAeuLvhpqhZ6Y38KM5b6EvnWev9MUUXqXH2GZ2PnPNLFW1aPS2WNNrffWaqEbKBu",
  "key25": "4orWJxyWUdPyLVHuoxHLJmhu3Zruo5KxcLQMEVVdhz6ZaBAFpK7Pnhwnuq7A6WByMCWxpvCLW9VvugPWmHN4KxNd",
  "key26": "5SedyAE5fksFxgB1qSA4LMsGJdCuSSPtT9ULonFhB5qRXMorbNqF12yGyzBMP532k6bSxiyhMWFymMhGs1pqkAeb",
  "key27": "3exQG2mZBBcjQRvLkNCoXwkR2xYg1gFe993JVZRHvWvVRvnV2Qa6yuPNVmWHqPiP5jiTwVreWKGNevaEc7gNFBDJ",
  "key28": "UAgFQV1t6dYUigD1fGHK1USEtXmf48vhZeWQ93MRYcxgc78SNSXF31V7VNdyL9A621zQEMG3isEnTcxoWtmhYkF"
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
