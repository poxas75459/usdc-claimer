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
    "2QeBjdH9GVWB1AcWufV2szg9ydWdjL63bs3qbtNwfK8Mepx275aLvRynSKzywSmBn6ikDMRJejfuf2Kic7BVjvgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G58mYFx7VbAozQrDpxvuuw7cDSFuvULkLE3uZisPHwv1S6XfBtzaRGya6oWn9w89983jsyzuee4R4suqibR5ryp",
  "key1": "2H7k8wshyEH5S8JExaXcDyquBRAGr4NoXdbk55sqru65gcCLBNxPNnttcT1HGSSp61tccYEXTF9NwRuS8TMDyjYk",
  "key2": "5qFKjB2GjmZRoEDSn3BCNXesoApAUeDr72gVqt9yAAgMa42wbjrKmbKnSMRw7Rj1GmCv7qTJBH8p9rEZ2cdGR5Af",
  "key3": "DumzmVrC7iDX3ucfFiGm3eMprdm51GhWpqshX1spBo3m9zD5s836CUqWfSh235n3J2BZ3drCipSa5Nx5VAT43C1",
  "key4": "2V9isHjNgchUHFWn9vMYZaRW97ahnbPWDBrx7Uf6VvkxMwkCHdTmj5BS1udNtbxTWyP4YhX5zX3jZqtGnvFnBNbp",
  "key5": "2fPJCdCoLGhaj5d6ZkF3R13DmUjdz4YVE1YFMzmFgucteBpUAmHZChRDVynp7CUKuiJFZLnPdji8iKuwez7nbjpa",
  "key6": "YpmfKUMR6q4E2xpH1X7A49vAPHZBDaEDSiUSFHrdeWCJcMAt7hFQYd1WqQaNNUKP2D6vPxdfokmuf348PMhdF9g",
  "key7": "5kbym4DCNFTXuFLozjb32R1CLNrcVxKwMqv2i4WRAx65yRnWuA2BGNp6k8rny7duYCd1WN9gThMZegeKhq2Ea1y7",
  "key8": "5chouhZw8JMTzyD5s7mXL39tj6ccUAmBYH59ioB133HLibGNJPbhoSg9fvWDPePQRQcDdLd62csYn9VgdASsxvnA",
  "key9": "5JAqdtGR8tvuhQNCeX9UdW6QKdMcaHfKgEdmv8jsiKk8twgGWb3EhxE6aWt66fPRTzrhybRnLwq3nwwpvTmTGT2A",
  "key10": "JiMqarLy1YgiUCwUoGqXk3tYN5HYKxb11my3BdP8chFVKtXHD4b2Tc9oJ2kTHABNP63E2HpxdTPdtdfsyaLPc39",
  "key11": "52LMDHqN6YqUa5B7Aa6zjtjPGaQ6664NnmNYuSfK35zZ9DHPfpe8Kck18QTjrLfeLbjPxTNWt4DRQk8pDTcEJHst",
  "key12": "2SUAZZv2cv64LeiZu4eANRAMaGpj2Ev9CirzTiGepTcEAyWPohUwRkq2A77d72WrLXnLu3kchogogtgiMEMZ47C9",
  "key13": "32qVW5EemPQoWhPpbgdc932N9MjsPxwM6hwjN4HmbgmQyYkPsuG2iWGshUP9o6k3Z1pUuh2Lf83GqmgJUTi7xDaD",
  "key14": "2LsMDstUoFYPP5M7S866cSZ5T9y9rE37xsFJbAYP8w812Mgeot8pksTx1iKaXLiT41XPtZFpZFiUQKh9zHQLcZfc",
  "key15": "Gp5oGujexLfXUMHCqYMrVNtLZgky2andpWH32wnWq2sBvoc8Sgh8Kmx7wTVaLrhHe2aCm9JWMejv98ss5PjCVRa",
  "key16": "3emBE5MBrrrfjgU7yvL5gMiwHbqaCE2B3t1RyKV7LAPgmGJWGd5cEZre5L4XU5rYQ6DbHQDJrGvuFD3ha7V6tTBL",
  "key17": "3SFCp9xvfUmcUfkwnY1jCG69fqJHEZi6XPhme9kdyQ2ZPHVnm7jhyMenTmyAADgtHrhJphFo8exTsPmXMn5q5B2T",
  "key18": "3TEUM4rajeSNHiPLYwHk9FcDQBXauu7M8Z787edZCyMP5rGPgLUsbssHt1TZfYPD65U8XkWFZLqaC29ayJXimoWD",
  "key19": "25G4nFMCJ5epjKLQLWnaXdNARXMqTUWiLPWbSpwN4SzoHzDhNHnNiJxB9ncXL313ifHUhQLfpZXouWgFAWMwEseg",
  "key20": "3H8MZAHf8MvBA9SgbXCTTRn3gRUx5JPueNvN5EuYBiMEp5fUyJ13mxXb4xA9WpT4MCSNG5kRZWv2CA1G8uuURz27",
  "key21": "5aw4AyWxzrEDgJdbjU9XPf28R8jJDNNWtF9tfyUJyvb9KiX4vnkjseyrSAPjdGDhPLH3CSPzjD5TZGtqzHvaikMZ",
  "key22": "2FB8N2K6HEsHWminyVcHp6UqdoiimX3fq2HnjmPS9ci86upZAvqjnkPmfbiPcixyb4mF83auF8qXiAQP59tu1fow",
  "key23": "3gTy6iEs7zb86sYhh365xLybxvx8256Nfqbdpn82ZdwDXYgNSnkKrpMfHCzPGJu3RnnwxPzNagbP4sbyRPxAedEk",
  "key24": "3bA9dCNPkK99DbDqjQDWvhPACoyfZBhiwx5DqXUm8WqqqNp8kgacNv8fpfRdVBYnhWHBk1wEtvEDEumSVT2ZBxh7",
  "key25": "3ZnwnkeCKr7tWuxrssAyGZB1qdwcafu6FL8pThawqeaaYkv7tGQ2vV2TGhPiprZtDvCEYRHFYm89BCrKcF1mMPHR",
  "key26": "erTyKMpLLfBv5Q2fLr5cnUMy6R5niF4dgm6P3yFiHHpcVdfuaVe8MW1XrYUbgdDFSY1zSoKGEvqWsBMu8gdvgMR",
  "key27": "4PVkysSRQqLf85CyRpAWUxMnUUfxyZueBXZDua2pBbvLDykSG4BAcRU2Hud8yLtA3PBEPEu8nah2eSkvhxgur5kK",
  "key28": "52zhebPgNjvBEERhuHoEcvdQi9RPQQuWShe4unubSJYDRH99M7K2YjPKJ2HkiESwxTqeMhmyWCpGWFARkAhtsxfu",
  "key29": "3i9BiFycTxUSpYqaNtj8q5hCHAeE6AUyLVyxkziRn5DDxZ49GXiz5yk4hqq66LXCohBLVbHHjpYQPavs3jZNtPWB",
  "key30": "5Yt5TesgiixCoWsBXcg74AULjvPmgJtC2bnsm5w1WEnPPsTsDFQziPaf61LFf8dwY5qVzH3YhUYtGeX5qpAoBdAd",
  "key31": "9UHmqwqrd3cDqJgSZDzdFNEhagvGfgMqin2NJts1k7Xkr5PqP2s7gxW1xb33Bdk6hHTfY9dJ1PeZmhJPMWbdePm",
  "key32": "5NWdAGnz47EHdA2P8mHuyASLdwkCAtba2JCbugC7Ga3nhmnHChGrhGXmVYaVEvRcfV9pM6mhtpps81VYWQ3rscjg",
  "key33": "2k7wUhuG1j3nGpHXoXSCVDwYmkosUgFaUZr2TuUvAa1ZoEnSTHW9ioCDNnUPi2p4LbsDPVMjHHa5ZHq8Vqghe3xh",
  "key34": "2YroJZpfmGpy84s18AavuUmezDM7eRH8TH32ktbWLL714eK23WcBqzG72ZTA1U5ZNzskivE9KkYup2XgHkkLVvBs",
  "key35": "byEWsyArA9Mb1d7Z1ywrUZGsDMfearYJkbiM3WXz1BjQ6KotWqZYMqveQ6RcRofPTBMPG71CUtyrJmqW4pNuRh8",
  "key36": "5ajfATAHLfwUCFmneHx7HXrZy6DXtp7gP7voA6x6KA11BHP6KwUKyDncFK37JkSHVLcbyJoxUABmrWaWvYa3JEXY",
  "key37": "4hsYJgdhjXds962FMbTt9AMd49hjNYMsMVnLYJeVBy9zDfTRrLgcs3wWZwRDLLn3MjGXFns32Zke8aMAsL9zHRjf"
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
