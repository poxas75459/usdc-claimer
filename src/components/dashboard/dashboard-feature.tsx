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
    "367VRk3bw5kr4Ve6ZYGyNrKgegXEN944T7gXxfWn6je4jKwPNxrKae6YpNccZgoqKekDcULPJGTjrRE3tFUiMuVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i34xbLe4izZX8Mp9ZUHAtvzvhDSw248MNfRQgYema1BjEyJqMkAkfjm9hGVgnvnHVdjFJsKJWSG6t3XBfZNDgJV",
  "key1": "5BtD77TmbB6LqQ5TeW6zzzd72cVgHneVGVTVoXNFNYv1DUJ6346p8P8KCrWkFvWLnoGWV9CnHJRSCQfwSS8MVndg",
  "key2": "DXJEekDoh9RWqpeJLuFbE8NVjK18rdKqrwmBjr72mdJLzjfbvkC28hW8P57RL6o9JANEikdt3BwYS696gVgfMma",
  "key3": "U1NU3DJzDTbRRAUe17PTMd1kb6z5ZyreQ6BsjMPDYJ4Qba2N3i1MSmSB2tD3TrrrVbEwN6iBAV1e2gCpQEC4G3w",
  "key4": "Umqyp6zdNttV158WNYV1zP73kiWfCxvvGRUyhrbtWAwskTya87gGeAigAez4cpL9vWw2aRTUnN2EW34UwCdWQ9j",
  "key5": "2mG1tXYpZSjfimCF7JfNzkHEfdMJc6L4JaZ5UwRF52wwXyJWY1PSTSxUyai4Zv3xymrkxEVQT3cZFBsxMSXwPiLH",
  "key6": "36BAo2SYVdYzZh2KYBAiFFqbH7ULVjkfa36dsjCSDixDZem9uFuKmBxD54t7aAjQtXKJb56ZcNV4CZa1sNdg5YBz",
  "key7": "2dKnLJDvma9yRyeGPe18GqqFfrLScVc5TpHdzrQrt5Z5V2EMXuBqQ6vowiR9aXdVShu8iDSA8nEwZ3fb8Nz4By34",
  "key8": "583dvj9uLCVCkqCmegzsQ6fCaHrU48ZpemY9hfgacme875o6LUZWPxLfeiwacuLe89nD6geT263TpEhYidPtc6V5",
  "key9": "3QHJKaDGCsr4zHzT8BNrEQhoZUfqQ3Jn724nGcYgmP91LZWzqAgXSFzvksj3g1znZhZYzkqJhf3JmPeuunQ1WCvh",
  "key10": "24wEJBbPmpecoqZe9yRfxocwT7W9RUYC8JdZWbK5EQiVf5M3n2PcgLz2BMieG3x8kNRpqFwLEMRrCPiavDU7cvrZ",
  "key11": "yTeUKHNbWVeHNqsGLeXStF814hASXrX6X8jqArXVS2cQSkuARRib8Uo5KKzB2ToFyTvrCSbZzUEPSnb9s6shVYN",
  "key12": "dADyXJnH3Y3m2puagaKJa3wpeiM68jQLL7beaecAitbBL6EkWXZpGRrARzv5gYzuRD7UUgSoNSbDTEqr3xVmKE4",
  "key13": "5XeonXyNodLnNUGFntGgeZi79bq6zNKnnu4xVyDpJp8i7hg5DTj8FMXpqaGmGicFL6yVwiQN3cTFuHGtPwwD39K",
  "key14": "2qBsN6B4QBPrjm63tAGnDxZNZTYL9gARxAXhnpmkxzad1jd58QM9tWVGXm12Lb7xKkZSL1yTLJnvPBANM8zgmtzu",
  "key15": "5rmnaffJ9xXYnqgFLVXv8dBTtkTkvNzaTEEGCpmkLpZ4FnrGSW63Nf6CrXaHjjgvcht8tjh8v6hsawoM5QjhshSa",
  "key16": "ST6P9DKTZLJbxVrsHVYLsVA4yVmHgxNyshfNoK2P84oCdSHaCSKKjinPyiooHwkYjwPtzsb5epRzqk814u2qbK3",
  "key17": "5MABN4jogoPA2ccsamntgARP92w1XUBDzLKcCLgwFqxdTd9GPz4B74f98g3Ppd1NMzf8Vsc1pSRpP9UitjkMUFpM",
  "key18": "26p3xGnqmssZppcHPL4qRvY6X5iiG7oi7hSyBK6WoGMHEnozCjkYB5re5tXgWGmUVtJgtWk7xtavxafTGvmTQY5B",
  "key19": "3a3RxZkAFeKbDrGhJg8ffCpPTo5X94wpF8pyYNpNNt5SKH7rEC9gWgw1oQYnDoRwnLvVGMeZNp24HpV5PP2FyVmP",
  "key20": "5rey3Zr5eoXFk1FQJco76NcEMH1s16hSeQemjq5SsichaX1ACRxXMz8w6mqpzdyEghXpFx8TxCH6mfsykJbkjMnK",
  "key21": "pAnwtmAWSrW627UU5xknHrkHvntArzsvNsj9dajRvvwShXQRUu7YDQfho48myTiqa8rzhgTLmSHx4bskJm6kox4",
  "key22": "mDf1npnftbuPtaJc1zeWFTUjY1oX4k36w8nqq9sg5VW7y3vYxm2tdo7hqFBqdtWnY7GFwUekBeKExS7gzutU6Gp",
  "key23": "i9MWnXNcAX4myoLf4v5ggoDo5DqyG5nMjHChxfN2G7nYJQHASjQhx51zcR4AihzGB271WPCBTT9k7tF6tZaMGUU",
  "key24": "mjBCRPuEHKxZA6jDBVT49Zr21bADTNdpRCNYL5vbctqxGVtugf49uZ5JhVfZxmjUTjFFEn5jc46sz5sGxP1xFKZ",
  "key25": "4sKgzg2xca7f29KjmwpCij3PK9jLD15gSKhhGKxp8wwE4rTgs4esTVNi7c3qi9Q5VifB5XpChqmj2npzgAE2nRzg",
  "key26": "RrjmgpgYJgRczBgckTX3SwW6yBDBedGXitMzW1pSWR3o7uPT7bTJs3R4wDVp7ahZCVnqYFFMU4Yh5JS22WiX9KK",
  "key27": "fTDC7BUtwmPSNYkMVvoJTngBbUHTsLcQVPoD6KUnePT8E3ydYwixswa7YkWy12aEbMQHZsTB8jQytpnLZGZ5dhU",
  "key28": "EmH6E7pPmXwbMTnyFu23VqDADfADt6dY88gtQTVcHzYcd51Ushw33AvqHEJvukUjVqLEAz1k1n9YT2EQiBPfZcd",
  "key29": "5FFgVYN8X2jGN6KVxmLgwUEBecXUhbnFzwKTf5EtZnj9BwUFD3ys9CXTtY3q3H8Lrmef4qH7s8ktPSuCRb3N81iH",
  "key30": "3d4Acz5sztRbTQab53VYwDp41Swbrd3MfkH1mvDp3cc9AdN8ycJZAWpzxzHdYDF6p4HwCHendDfJiFk9vUfQAnNi",
  "key31": "3nNQbhMhfXBMWGHF4XWF3TsCKwWPmdF92wHvfLzzV2y66mWxAscp7KiaiN37Gr1vPTubPM9i1EoBrWw2h3BbHQVk",
  "key32": "3vi2urh5KbgvD9Sd4RS8Z9Tgkt27g53D7upBS4WkFLgYWLMotnYF6BYRnGD4PBRbCNEUv98u12ufGBULmGEnT7JN",
  "key33": "3Qzemi1RktkTL93Aut6LxwAPQsf8VmQEv4dzrEN1Ktcdm1Z6EpxWv8TwS1ueHHJLz92rXKih5bWUAPSR2D9LDWx1",
  "key34": "4WucbPK6BWG1uXWiDhbaPUvkveLAfDSRm6eA8fzdjKjQeTVTj6ihSc5gxE9E6kUZk35wKNS55pRsbXGUgFdTPjwH",
  "key35": "3ZkfXaFwaYGVBGiDaVkPdY2fUCfHnC6jezWiDMpetjY922PXHekD4iPfJBDnvF15RzZsqTJAoEoPBWDjYc5Wr7bQ",
  "key36": "3s9uTbRo2EG8wVDSfY6DkSaRHwJWuUj39NEGVUnzvtMsZi36oZ1gkvT2tdEkgaSMn4tMTDfNC6pwF5cctL7ev2aF"
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
