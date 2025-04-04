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
    "5xyxjf8y3oou6h8mfVBriivxV9EAfLjxodTbtos58ERo4hAyRu1YGrdPAAcbEKttijog2WwWQiVR2D8oSh1FVGey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXUZbxhrVjPn6ukZkw3ckjrSfpQGpbgAJMRVNrQ96Ke5zMH4Ny8DvyGWVa1uji3irrS1zsRvqXE6sXrKovtUf19",
  "key1": "2zLPQh4bwLEzT1BtDnNu1LUQzVi7T7tXXNQqvYk5u1VW7egRifnWSCvEGqRSDMGzMRQTNopxPChkoQa4Be4ry7e4",
  "key2": "37FoQvuTJp9nwtK2UkzEu6FLcxNAR25VQRcuVBTfp69v5Ex1VdczsuyHUQNdEbbmaUoaro6shu7wRtu7vKbGwY7y",
  "key3": "2F7wN9GZp4oyatMt6xSFN4Wrgnxcxrrza3C4ajfGMYChkbGycwxQVAc82zJt4WeEuYUc75Vgwu3D84Q4E4taFGYn",
  "key4": "561UAceM7tkpg4M1To2M9E6hNKyeeAhZsNBGnwYSxtJWdhDM1jMLqB1MQyE9QBQUPUUbB6feKFSeK4DHnShuFdUy",
  "key5": "dg6uoevpmkqDnXtBAMXhDMNAENPCFdNZVDz4GBq8YbZFXLSjDiQFES3xWSo8eyDEUuw2AspgnfrnrrVGJJw4mLZ",
  "key6": "21jNFGYbEq4dEbuiwb7MwHp8tKEbsKXsSPhd8m1Va3NuoAAiFmgEY8JbjNwPzhYSGHTWDXxh16ov2SQNU7Ttj4sh",
  "key7": "EWpxVmCzubz6L1fzVPJhcH8AUs7ehdKGfHHbYpk4B95HhwbkpF99gAP7subSXzEkcS1rEpRDKKCe3tTfTRtBAm8",
  "key8": "4rueAuyrRjixsXnmx6dhDxrNcbH5Y8XMEbvzsJqyZD1qGeor6FtMg8NYAadfPPv4Be1PWd3qku8ubR462n1tzgzN",
  "key9": "3CkwvSKj22RxnMnJPByXrYt25a17xfUXbb6K9UtfFiQotnyFob4riJLJUWBYPQ3PQBh2ZJdZeKsNLYd2EKoEFRxC",
  "key10": "3xhrarr3GBHbm27xDJa6bPm9xYr1dZwJHkhCxSZyiw7SwSit81yzBoN2P4HWhZwwX5EG3VWKHBMk8TfFhwo7Nfyc",
  "key11": "5kNJ8inmgxmUxqw7jRtf5iHzBfc4LRaHqyLJUzFYCfd24UUU1Wo7BpSYY5dqD7yRsYLVrQHEwArqRxogwsNgz8pi",
  "key12": "5xocEsicoLBcxMxUxmD2WN4v4Rm9xph3mehPeMssT2psjbbJ5cxzZpM95Hvp66eRgcQzK4LUgRVqBZr3bzmiYYe5",
  "key13": "2GFDJXiWB9SLjAEykJiUFE6bzgvKSGBVLTBgjCzPoLRm6wXMwV1RcqBxJvXCpRDHCwmb5gghSRnqzMkpFxm6P9Lt",
  "key14": "NXRiNJRP7zceACQWAerShJrEMui3LxZ7MeDdAccS9oBosU1sGar6ggna8hWQT3ECKZn4RkHWHBnJVo6oe5Vas2r",
  "key15": "bXxf82TTEsB3mPZLHPFG8XFwTFGsrTVwrCnmpcGtFXyj6XEa4nVjfmUJ4Q7eyza89irkk1s1ADKHDk1ce5D4JpV",
  "key16": "5nCELg2CStWhP2L84UPaMeoyaSmA7KYwdfH6Z2S2zEQHDo2rPEZxX5faMPFR7M1ubkmpNEP88oWNjpfe6qZwPf5H",
  "key17": "5EjzWfC35jpq2UBLHHTwfEaTUyxqs5YMTjTMUy3o4H6TtVrhERhPHuNyiYmXrughapL5hQjCMs5VJERgajfhms4F",
  "key18": "4h1DS4HK9odjAdQdcmfQEctwv7qMdKGFKBbuus93pcqLyS217JFJMGKEA8WAWPu5tAKENanzpT96qqF5RvGjZhS5",
  "key19": "w298h27ekqCpd4DetoAQ7atzUN2zYbxVGajv39H9DAste4E2JuqGLg89rBm2r1fPGubqvPTKjNVhxGhkpogQ1kM",
  "key20": "4Yd57YCrfGtqWiR4Zs5eJNfo6QKgccvKkVDXnPkPCMgpQRxy8DjZUiswTKe7WPc1guGJL92pXzcVMqDWEmTihTWx",
  "key21": "NJkSiyXu1jLGRQ9Q4LdosiLBi2UG1XtvCRfz8y71Y6Jftbxb4RLPtbo5aBQXECxytuEnjyGLv3WoDFzdRERKJAo",
  "key22": "2KQ4LVC7A5ZZZbvXxTsTvgEWkCuHKDmfSrfNnLFPwMuzhXNi4D9JUSXqc96mkGbLwFF9Kd43WMbjwmk6BTnKLmKJ",
  "key23": "4z6iMNvShNU6qtL9V6X6qVyPyZaPaZq1YZS2iGpfvz297L5HHXbVyqPYGGkSde2JbJ2YzmqcXqrqBtyfFcfNHELf",
  "key24": "3i7NVd6YW81yMS1HMYdn5M6xcS5TQzBsU13KF1MBCsRYGiEzWqmGbJe7zS5r8LD2k6mRQTSyWGDVDAZn3Q3HkVDm",
  "key25": "5micaSV4qxxQ52a2YJXiq2dA3PxMgZJ88TgYQwuBc4M9vL58BtjshpuZTRERWcYQCdd6rBCv7x58d9bby5ouywi7",
  "key26": "3UoVKhrc9edwiC27RTW9kAgWdFezRvsnbdywdWZxc5zdPWWR76qBQu4ufdL94ZQfb11eBGBUsVQiMfGvLrEumZBa",
  "key27": "gutzVcfPwoWwBdoN21dQSDEFem84T1zXqsY4vQLZRVGza7anCy38vjPf4cox3ZS8eiYs6rCrkYbuWvFQPGrE6q5",
  "key28": "c7FVTVErsuZtbozC44SDV7hUGKaqoUsBtcQnUGCZ2m7Y7T73nVsDui7e7b2MofgVRH8e46kBmR3h5hb3DdEEyPk",
  "key29": "3xbRS2Rfh4jEumFWVXAmvAmmgYUNdD8MWejFWZUwYVh1VbcRKZCNymecNvAxSZ7SmqCySF7XWPhuFvj3n68KuMpt",
  "key30": "2ydNJgAdqdDq1MGh5Zbv9KzFy6rKXRR9rTi27ADfDKgNX6XKKPPnSa9RCGUyjUAF7RtCadwgXQtq7MkAr7ihG2oZ"
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
