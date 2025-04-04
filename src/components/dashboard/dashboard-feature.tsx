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
    "3nxH6cz9LLscNmgVxwxwRL63BtL23FAEx7Kop9pYpfMc5jVmNvmjfgej5yGG8ebAZE7Hfe8DZK9mUJp3oTAvjncv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vAEyD6UXoW4CdKCq4aMMuH9JkcMGyDCjtFnz64QfngArLXnjqU7gcyNMnPCf5E1LVoSr4icxRgLu1xVvd4cuTcF",
  "key1": "NKZC7t4nGcDLQSEbpBobmjdtY5Rv8g29v4k6nz1313zpARCqtd57TzUdQs3ioZDarbatgYqxTD6hjdWbae9zaoy",
  "key2": "zisCoesjrmyV1pUrZDUf4GFr5CDkPu2TkasNoYdRH2N2yNEZvB1Q2KTFWW7Msscsn7XGzG6cpurf3F2cgCQLoLC",
  "key3": "2vTRmdS7pXZm5qMvppMEigisBfq9p7dRn8wui8zYj6ZAmYLNdTrcDR2fw6U3VpzCf8EFCxfinxXvEiKENDCKmgAt",
  "key4": "29DrtEPU5rHShqmR8AQy1SyDrQrFaT1hffc6BoxvWF6LApUrgb8NsnVyu4P3ucNd33A1qnvVQCKr1jhR9nGHzE7x",
  "key5": "3iwXckrESYa6gmWev675AfLffyE3nihwPqnnEahja6HX9Bi61E9AFxYZfpHkUZv32PjJtdYD2BwePqoGqF9nejXQ",
  "key6": "4bnZMjtDZBtr1yYJjJBfiMQ9vfAYRWfVSRMor2UbwFeJUJXvpjD8EYxZk5HXB1AjLMiCXEKVG31aaEQH1RUttc8a",
  "key7": "5CmAN9cfacaQvyKA4ZBYUazeR7zwJWVgEPmqwgBCkU5mRLww8AvTizZQ6o5Lt6gSF4d8bV4UUBccTXBmzxAnmziM",
  "key8": "2RbvFwn8jhnPuMks4C6dwLxnNGXFnjRzq3e6kj92oATDE5o4sX6pVQ4DbUGwmWCZeAiYiNyeGoREsGYgFqtBk292",
  "key9": "KNJTwDnKnXxozWnPWCnjKKocW6JBvsndicEhwSobzpfpoiiy3B3b4HMYtJuVpxrRDqT8XqXDVLmD1LjergjGV7J",
  "key10": "5ARm5i3dgxeZRxPA2dk5w8vXfBm7huRpTgwbgNUhxsf7FasjFeZ1xJbr4DyUp1RqzMFMbepkN489Doq2rsXqMmBm",
  "key11": "4i8W7iZPpudtmYLaK9MicQpAF4cbU1zDXk1YhNmEWoerhHgdVfUWoCacb6CGD1yaFP4o6zQW3PiTTyxny4hCxjis",
  "key12": "2DU8LNDMgtdKNpmHQyVhioQafs67Ziv8kbzBYjmR9noA9gKp7vtZPAftLM3CfNKkPaisyGZ8hFmU7Ga2pGnVXc3G",
  "key13": "52varf3QViUw1wSQ9G82YFaAZVWXQ4Jgf23xxDSDeVsXhUyuaq8QejZAd2eD5wwQJprfAT8UtRNENs6CvfmtDpUq",
  "key14": "3RF2qts74LXEGKLzuitvC154RcgRQFo1pEW8i3hnKRmNmCg873zggH5mcHZYcdJMJymiNjJGnj26P36xhzwGFbi3",
  "key15": "2TPY5FYPKgWpPcj14pyXQZrntk5agMdbmCCfxmhbvftq7zoRikTgMid7W9gkDyjydG3n7ZAHNnraZbKvuYxgbQtL",
  "key16": "3m252YWnH7ap4kZLidgaiCat3MfFdRg5PVwqhdSPr2U1Xg5A5xRrDAn2n7qQGueQKzrCwBvhGxG8e81pbZX23NAr",
  "key17": "5t8ZpQMxXKBvwSc1GSdqrxPGGBFVcetkuJuUdshVXUFSEbZzjfQxyaP6VB1uz5VGeXy6dyDs5oMXWWE2BnDvjzJY",
  "key18": "2r9mxeh3XaYqPGYeoJbzc8kw72YRL2yTVNtdKMU2pkk98QFoLB84AVdx482cABwwg2CszmiTEdkAurh8wiYnq3z2",
  "key19": "42EjtRdGgouRHVjrLyi6vomCJKYZ6vYtoHhSEAsaLbU9CWCK9nPg5XwD52VBx94oVigx1XvBVcrkTrzSLXqM5R4P",
  "key20": "4KpaHfxEqzKTCNWZWLymt3qdsCASoWTVCi9ye8ago86p2JH1wUfWQTvU5eHmytgrsMSQBRhETi47KPBxsSzzDY2R",
  "key21": "36hp3VGs9PmyYbQ544aiYpYHQP2hP9kudpcdEXv7deYwqC66ZqC3vZ7F7PG2NR6PZicr2oDCwE7SY6fi4Qnh6tn5",
  "key22": "4gteusRqByctMWWtg35kmddCPUSLsey63AzZmaeGd6Txd8fywg5BwnBtevXmizaSpbv8vocZFNtuQfhWh5QwUsvo",
  "key23": "2ixc3SoZq5VkXwrnuNUawjTRZBvWwRDo8bBMivZrXT91eBEvTeun2WqkUfZ2ziaGjMumnL1NELyZqsGPKaRmUx7c",
  "key24": "33xv8LeTNbEvN9N5ychDnkKY8MZBiD36yxNzZzFPpzhQxtTuLE9W7pBUm2JpFhyWap2mWLhMFcpddiTp4oqiwnCv",
  "key25": "3qWzqGjUQmDgcbsDw2Tr5YRgwhmJHkhbWzgFcRKQuEUhFP1cjrFfxV7mLukDWU4oH686i61xzxWBDAvpvAxcBSQF",
  "key26": "4jod9EPaK9LxoNL3KwRidC2t58mKAroqvgQgRgCE4VxuEjVuZBWmqxmWer8fT2CRoD2TgZBqUReBemiLRXuoyEKw",
  "key27": "2pNWcCAxU4B4x1fAaEZmpxWdQU8ihPJzXkNyPqAAx8xKXCzUPW8Rc4uUhehhimVoBazuhQor72AoEd4M2JTPEHY8",
  "key28": "3uB8mxLpRaKX91SyHgZjWKhAin3vvGR69gJsHHTpg2ntaCJrWMCNXhpAkNa7Kv9vziHsfZJEEng4hRa7QnpSukSX",
  "key29": "sckDmkDgRYvsc7uPRQVW4Rqm77ixauJbLY94VSxUEmxbCvENmdWQ8mLQx692VYkB11weaRhDPC7WZMKM72Kb6wH",
  "key30": "5CfyyiWxUWj25H9TCJ4XXAgGh6tGwciWLWnWit82Cw1Eg71hmbH1vUt8sqNX3RvEBi3hRqMgASx4arBLKpbHWsa7",
  "key31": "4Yf5AnkgRtJo5wzPrUFGgH8hUB6Ea4DNKXt5KKHBzKHwxt9AoT2Q6uqcEMfau4MiNHWy3Vf2fgBG9ifT5UCwNSvM",
  "key32": "2ipvRiitpVgXvhChtdqZRDgqGQXsfmPbmWdsXTwsctFXapxZtYTJiw16XChgWDJB8eAGViEBf3PGnisNQapQPPEG",
  "key33": "49Rj8xD3zagrv2vfsU4M5YcmyRJrV8ArdZWWE4dKb2NMYYVSRJekhaMPPa68P4bK7gPcJqV1gM3sxN2HnQ2jnjXF",
  "key34": "4BWvDZTWREvr9mi2Zoi8SWTkSagAQcnNxpgzqusDcZEFADJ2UNTG3y4FRat8xWfPu2tQDaDQsk1194jBeHaWqqjZ",
  "key35": "4a2qHQH8NUR7nsPWkxznsXMXw47rEHASakJahZY78BSe9TtaLhA7HW2yTWFreFe9RpMCG22rtEwpdzPZdU5XFFdD",
  "key36": "2sT4ZC8q6TwCRCNutbn9pBQN2xy5k15tDfxdWxLHR1AkJni6Bttfk72XCtPRV9XVe8BGd1YC5bD4fQLnLpZNdeVz",
  "key37": "kekULkFMGNYP864KLXNaPD7ZJSvE4Q2wUbfScnyQz7V3kJyydggc3u5J5SyAzKbCNfgAaH6fS6wBM2RfJrpFKTy",
  "key38": "3UDCezWfHo32Jq61FhUVeMaKzNgxoU5NsSTEcZQgyk4bREZwYodCh9korgMA5bNPa33YZR1Kg4hpzgGzA6oZ5D1w",
  "key39": "5Ua23N4reaYswe3j5WauVLshD8nh996gHQW8s8hpP7DXVD9toNDGDosWmPA6xCWVooCHNHyMmNuAsYAMf4bcQVvY",
  "key40": "29YHCKd4RqnEGfPUd54hc8Um6UQZzeQCAYCYuTc4sZNrAz9yB94QAPdTEU4Rjq2DgTe815vJLbTPwNoLUfgaEx5D",
  "key41": "4tG4QEDcmNJLYGuatR7gjLvuvbq2ZeLWGPbbReyaX6RmaAi75j14KLD2oy77dGa6M3w7xvU3B5SyCjYDjTxft6BR",
  "key42": "2N5kHKCHF5peVUhzJ8oGFJPrSuXXqVupwbekMJ66yVFyaLqbPAs334zQE2P4mWvqeHk8cdV4Dk3631Df9EmeSipp"
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
