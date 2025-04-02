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
    "2waspr56qjitwkDTn4oHhLbD2f1wePyidHELBL2NRhppdQp1BV3YVdyWzFSg9aTSjqj6sqJhg4T99SZJWVj89Ns7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9PbHUFsHt7AiUYVunuPBBXCYqzEhn6DhZXbWRFRuFYQfo42kkRnwKEuiU7nhsKnrCJqpoyUjRgF1rVfutXcvq6",
  "key1": "3N88KkK5ssrdrRMCGWtpV9JS8nAsfaCGDVqCTe6HLzChPS3gthXsRYToagmg1p18RZDUY3yDC1TF7k3Xd5VLVHPS",
  "key2": "ZjiR1SZ8j8uhab9RbmDXdstHNbvVXnTniThKidR1qbqsPsKY4NuGXrE9fCu6d6LZfknxoU4sWJp7jAL7EVsa4zX",
  "key3": "2LP55GDJk4y7osUfUqRtEq9jVhcUw67HbrPNVyq4xr7VVUFV7x2ru6N9Vkdz9fecWqmdruvhMAbR4K2LK3DkfAYk",
  "key4": "3qnJce432vCWmq5BMkk4sFAxraLizhgJKf4GYeXGG9As4dEftNj9PTL1zmKXvi4w8cSL8JVx5oNh7U1iefmmLUV3",
  "key5": "5Hz1viSqGG3Jt88xnq5xjBe6ARCYBSTz21HVqWz114Uyt5fmseFufkCs8E5auy4ZKjUHz6vZrB5f7EVzCatuBmxS",
  "key6": "5Rexg2C1LfVcBN4NvX1GX2Riopv2fgUmhan7CAn7WttydYUTf2cvkFj48kgGKSSYfB7xuvGucBXfdfcuadDmUHt8",
  "key7": "2PEQPrNAnyNna9JK27SrwbS2XyDhjKkexX5phjkN3ZLd6ZWeVhySpwgYDGcYXwTgQKzMB4JhRrDtxzLTzcuGurL1",
  "key8": "4Rj8ARz7tPUkSFhUUcAcYP4ZXwQN5tw5r7Mod1xfQJ7TBu8pfFER5F8jncmpyJrT1d8ZaVaKyAQAauwk4vKq5Lqq",
  "key9": "5uTm6TiCTegjDDX9iCGm6WaNxBfFhhiBuhA6WGUwbXRaDf5BhYQKBGPifyudwJ9wcDAa74PSEUHsugLEUBJKTc9L",
  "key10": "5AnrmwttqB22SVJZhPLoynYaUePRHXPHoXesW9Mrn55CGWuMQ9YDDt28oTcVuAa2ZDQ1qEdLmtGcbZGBYFMoM5ii",
  "key11": "48RuDADJ4JUEKFcsy9BdrGWGLTgnoaA7BRonZn88PAFhHJ1uHWSqqoGx44zyKkP12AeYUe8Xh8AEKedGTM2CJkEX",
  "key12": "3rteyiYzNiXkr5sUpCUH7MinGQK6aNZxWq99T6sRxAZoEhFJ1t4gwEpe3BPU87KcddnNvT3M5s3rBRWKzZSkokY5",
  "key13": "221pS5Lo6Ejc5STzGEFYkgHJ1fkiCyvhetDiDk4jfNkVMK7FgT42mE5AABXK6zTr2AWzheAByuzZf3aHejAzmtKB",
  "key14": "4EsPN1Pd9TnjVtsqutd2faYZpeH4xRpnJwjmULs4rv9nwnsVXvWrkEXuVgG5TBdcjRzaosw49TC9npX1ra9RJVWo",
  "key15": "2hDH4PBfQSYW7BajY4btxYptVPGh2ssyb1DLeYcVj2BSLKPHctnuQpkDdcmsoQqZmE5BjXq9Axcpxu2vFLbV2dMj",
  "key16": "45VorUynB2TKmZrtgdwwR2Zb3jX4n4JZ7uwJJdvkYNnDbdHpLLgkZQT86yPb7REVGMEpoDSoMyZkP42R12K3vmmT",
  "key17": "5ZMNRWHSvmX3yjnAoLme51U8PfuiR3a9XiSwWs3ASzEegheGbtdh17gUWBc3zWjdbz9sbNCHCv8n5RBZhoKewWWA",
  "key18": "5jqcJvgpgPmX8UgyqcGDmpjPr4Gu8Crp8P6VMD9n6c4WALzuzgKFxT3p7fW2a4bNFtfw4KH6r7CnzVHhe1WqwzU5",
  "key19": "4Zw9ah53yYQUFS3TYBkMCvzqqRS7MqC9k4YikN3fKPnMihxWJE3qgmwGq58LfADkB7fFXgWc98MduhhgALp48Yr",
  "key20": "4UsjBy7YWfQhMGiqVfMW2DWZb9NR6VXuxuZXraCAUSVrHqb4HfigmKo62iVyhjmR6Jxz5b3VhJJXJ2pk8XZxL5Ko",
  "key21": "2LB3M4dzZc9GmeFsmbsYfrRuq57zZNwUtJNPL5JC4XLGb8Qu7zF9PY5iQq37t5XKjCoCSZ2Fhw6byCKQcuWvGDJ4",
  "key22": "5PVmf1EL5kztvnve1wJgbzo1fLAWqdVQkyMxpQZYSkKMXkrasbwAXXUw68p7CwBERX6s1FRWNi6Qf6R5yLsASF7B",
  "key23": "4znAuceyjEgvKua7Bmzo5xRJmy5PyScb47Hw9zfL7YV33uRv7jr8GWcCiBQjSBmqNB8mr9dYkGFuyEg1csn7ghTM",
  "key24": "2k88oegoYKp1rC3vLCeVv8mMxaY6G8Mm9B2J2koWrokUvSkGD85tkBq3XJ9TfHTx7J8Mo125aThruYLNywdbhZAx",
  "key25": "JKopKhtM2RnyffnQsjQPnHcUAD7TV5d8rJHAuUL98kLdFVdChN9de4RkdG69GtqdesnEtgG1XVQRFhRm42vbpJS",
  "key26": "54UtxrptXMM62e3GhquLx7EBVM37gntm95AdP66Q14XSmwytkuHAVWjCKVzQY46B1kpoXwpGHyT6bLB4yFSD1mwH",
  "key27": "5cSLBQH6RL6yHG2Quj83obY3me9RC7SxzrvusUrpZCoQzhgxbxecdES7Uqwuo7jWZrNt2bE9AJowTuW9w8UVyWZ9",
  "key28": "4rkRrE97iaKzzhK1aj8y6rJgaEA38wsYeNE9ev9ZZU2pLrJAB42YzjuBqijhr7DN579BtUjid9agAgKKpTKd9oGs",
  "key29": "3m8L9D6M3VmHgvHJsGJFJLi727yKt1FoNPt23vYeWWmCyTbvc4kFRqdb3F6TtLRGM4bQzPepKxTMGVi1Nspf1ayY",
  "key30": "4B5YVjtdw3seX4Rd72jWHtNgaHkH587kEmmu3JaAEdJoMXqZo6jmMKXY9PjyE7B1JCoX9w3kf1RXuGG45tDYAgVZ",
  "key31": "2x7ZZ15PvDiFeYXNu443hnn8WRE3hf8e77LEf88bspczJKs7uSUUWMWVTXbAeNnfEM3KC5nLw2G1JYrwfVKWifTM",
  "key32": "4yzh7WXV7QqGtAuKrrdTWPMxhmctaRHjJtYod1bdgTt3zLTn669jkq8mUD6EuwbyhZvC8h211NgSRqWnxpnpeDV4",
  "key33": "5gfmdi3tMN6NBkNaSwzLoveig1vLavdoxQTpDTTXLF57zFSVMpQ2RBpTQdUeWSBq5AAGmTQa6jLkG1w452fG77b6",
  "key34": "u1ydS96L6KaxJxGsiKUBGkSxTHgttGvsYEQ5uhRa8NV1sywsSMNJGLnApiVGHQakkBsCmcuLaD5JbF3bgMoAkoW",
  "key35": "62UNXudgxNhfmNczgWDhTKB1Yroe4ryCmHx8WY8sQz81QM1iziXbVJBwJzoZVuztzAsDHFXZajQXGyU8Min8mQ1J"
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
