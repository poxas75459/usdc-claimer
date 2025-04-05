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
    "5RSeZkDjCAchsrtevvaZ6W6E9eqrkvnazcJnp41v3WHtQgXEgCWtUEe64MUvVQxc1Y7xaYSqPrsi3ha8fhZJ8pVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gP1fYuZj8UWpmaRCGyxaL3CBzy8iaUtsG96mGdFFsWYNWodFeT6DLLtKZkNaJfKYfuVnVc3g4QEVLs5gWHvLKxQ",
  "key1": "4kqtAsenkbkv7uSYFBtUzjDweTfAoS3vM49urznGY3hjHXKdKGRtayaH6dziJrbEGLPsLFPVc1eQ6sBbswPserh3",
  "key2": "29P1Cu38eYwXutxzgDGppox1jmvGunEgzAW8G1hPwSyz3DJR5zuyNBAneCMK4RuwaAFLvp7nnudBMsUTXev2qbEY",
  "key3": "2LcEiZoDDwCm7YvWaDufC8VTu9XGEZu8j2VnqrL9FkQYZ5CjpkNsxZtVMaFN25JFzxnqitXCMgC6hAYh2dDbnpSw",
  "key4": "642qs5tdn1KC3dAVgNMKSD4pBJk1SC3V3rfmkjcFBZrvCREE6VJciUJB2F7VKi7gzkSUsMh2x21zCCTJJnHPSmD9",
  "key5": "Bea7XrSf62hkxqchvqKE4Ch3E9hLpAezr9zpc4r5nfpnCrYdFoSXW7gEv5uabg1fRP2S9k8Ayp6g2wXrcxhtR4U",
  "key6": "4V2GEyvaxpxGe6sL9U6n6M9e7ZwpwNKJPdjpV6nReT1UXMzeFkQQCuugBbaQcRLvuZMihUY5U7A5AECKuNV7j9u5",
  "key7": "48Miq5noEV2iqPd3V1uC7bvmrJwUsbuf7MrNMGYwG7LtKXawvUfXkW8PZoqeYMQi7NqyuYHjskosq2URqhkUSZiy",
  "key8": "3kpZi6jfPbHAkTRVgYoDbiomQ9w16sM3raq5K5gP8NVcugsam13ibi1rp2uuXqFjTr3iahbHiJHCruq2AKaN3W7K",
  "key9": "4FvRvC29gKXVat3Bd3EngkgW1qMTVx8hcV7YttBibi2Z7hHsfkXv9C3VtuHWJ6AGW6jSboRy6ZwYSqA2D5KiGcoM",
  "key10": "Co2SVNUKEJBkaj69sw7qHtTUfgSwoUyGM23g3KKpE1r314AQmVQZz86CxvFkAMezeZP9qeCPJy6UfaaeX1MrHA3",
  "key11": "3qtJpi1w71rxZpxeW4p6JK4xLGqafJiM8MycZretaEHM9KDNP8AV6w6M1Vssf3kEt3XCDA9iB3JpQFv4mPgs1h2w",
  "key12": "4ipbDvVSEU8Y4JpvRTMKzq3SYxtY8CvoJdr9skKpHMP1nADjpwwuQoVez54GnTCS8FLed46EpgiyW7DeGYkdED7V",
  "key13": "5nKYL2aNL2yRtPGRbn4o9RHXcMm9zwkJBbQV4YHh9arL6SRKfTdcmze7R55bis7RkYvEzbsVv83bec24BPvTsZ81",
  "key14": "3TrF8k2QWpQkW5cbyTKPQu9XJ4U3DPCTA3mmNm2jMTr8Jsp535NWBQbpdNGKVuCeXJS4HuoSf8vQiahNXCHVRq4v",
  "key15": "5uM5HBbiq9CD48BswDbt7QVjE7rPNCjz8qdDLm6GJBNJNA3TjrsFe74ZxJfEEqEDSQYX9bxG6bePVr3DbEhEJtUe",
  "key16": "4LqSspwX1dme7AELcgeWMzZR8QfCCUFPGeYXqtDK1sKSMpEgAZWmRzqnAQxq9674AiJHJg4fqsUhBUGsV53NDn43",
  "key17": "5hQKXvtSwfTWGAzBGpZk8xuxURJacC45SXmGYAzXnd1wWA9FagcGQMDVM9jYBhbSYkS1YscXs21tDoVgXPiqpFHW",
  "key18": "5uskdzcZXCEngxgCxZRJizGtG8r8ovLZBkntemoMfpqi2UUJkS9iv2tMPDWcA78vuDmmLrnvqqj8tzAeeoyXrdF7",
  "key19": "5hmDYbNbvoAfZiXZe9jUzjnJerY9jLUo2kaQ245PyKATX3qFpWXj52rrbzmA8K8ieKGdHfaAfAYuhhMEYLQeTgFc",
  "key20": "ryV269ATB3pFh7u2j7e4WMMzBtiMZ2vViB2eKHCy1Y8ncmwrAp9CogLHH8onae1EH1mGMceuqzmpmhbcswVChTM",
  "key21": "yU8HvWFuvLUgduU63fVdxZT2dwLi7xSpjFtPy6tYnEzikDeJwTSMhHLTt46kFqPFZyWknYs1Y8WiQ7muqvFWpVb",
  "key22": "29aQrMPqAP3n6uzUKFZj2iQTNeeFDuiruh2vhnYD5Fh7QtdMbzepYTzLDXXhKLzGcXD39pLrHdinBBhS8HPYwdoZ",
  "key23": "8HiwWPNAmDtmD31K5JFoVp718ox5pvTLXb15jGnPchseRRiimX2EnzeukEusnp74Y55EaP9ndGqKSZdQsa8Bs3N",
  "key24": "5fW22K2eKZAWks1Eu9QgndBxPc2jaAs6ePBC7PG7PiPFxp7gDXZXbKvQp7bo36jJhwhDUdUNAmVbBUCrfqcJKB4J",
  "key25": "53HL1LNxxnaULXrDd4qfbLW2fRJ3uiGYb5fHqQNQRrRzMvgCo9aJAzmuDywB3b9AuaWrwENUBf4QeE98mjXNLdpK",
  "key26": "36VgBJo2cxmnTPbC7gyCTW24seFVXYEWEtrrwuomUfXEK4wpJbUhhheizpRerqA6k15cYt6tbfrDp5KxewKUCaS5",
  "key27": "2KcFDwXyMgKokhwxepDDa99gjarWhLW9rs6zXjvi89oquTcuNX8NVDXUR9DLMiaiWjkzDVDJDnfdTnq66FFkuCii",
  "key28": "25a7AMbaP7VpkPoNp7owxyrv9uvK51FWeB8yRpyziMJo8PsWJ8Ka7jukwNNgNrMU79imZK1kYfZVR777bbdmwdA9",
  "key29": "5VK3dhWL9rrL8ENQbcfArrox4BoeKqu7ATfX44DiyWY6ZKMrdgjKDc3UTjjuyk5fZW6KBPYVXXAtBrGP6Y3n4mLR",
  "key30": "2GpW62Nt3P4yZnRsgajAZDGsgWnjz2T17zSPy8xhqBKWrFHKDLjkCcaBeW3UsHHRZaFhGGF1RjYp7wgdCRGzdaQy",
  "key31": "7VeBw6cqtFNPpNMmEgZGHi47LhMvayH3KjLo4SvwR7RyYJVtApPP5qrnLC78ATWQeokB9vrecVViSNxwh7niasa",
  "key32": "DkSSvfducEvA1x6ScTm3RDPpSBvaedzR477v73F99JDi9aiv3x9axHAXWK1ZuF2nhtFSx7GA773Hp7rDYiwMpeW",
  "key33": "C2kGKM4HJGk7QVYC8jJVUxC3QQusfoiSZvswQeL7dvvwPzk6AszHg3XLQ3VgcJ27B16qqGSzBBpNQTXaK86A13P",
  "key34": "5cMTwH6Fg3CbQ5feVztGg31bFhWwhRNuxkDUiGVrpWkUu66xSKY3umDTSWrxnPAx3GSnRY4Y6bbmaNAcpyceuWih",
  "key35": "QtxMjeVWFzhC4zuhzg8abKYcAnfQBkWEAr2azXVHzoo4czLCzyLmpcFxr8iJyvqu6jCn1DEEErYjXa72MCxK4ga"
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
