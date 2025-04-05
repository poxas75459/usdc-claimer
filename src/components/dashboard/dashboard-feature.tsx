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
    "5UyZxknHHzY8a2Tscm775hUv9K553fmFbd8QdLW5dQrQLVGVLECGjbLDK7htCLKTpSNQwKZCBZeTNuvvWGN2gAFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1xdaGe5E8ntqqcF2vgBhNnWtDdesbjbBo4S7UgqevMWFW1sTVmtaXRjwpj8FtYYYQ7E4PvnF1qkaXUqNrPyNBL",
  "key1": "2W4d9J2odH2b5REy6mG8crW9E5rJgbzTVEtpKErtUZu7gw5XhC2yaNd8MYugQhVfN935PwYVxAxVpZSczYJSTCH7",
  "key2": "555mJ7V2Fnvrt2X1pbpdrmCBJLTc6TkbJQhQaTLXmsiAdBreqrRJFJNPj7e6trU95XYtuj3EsKF3RP7sBdiUM1gA",
  "key3": "3T2ARMqsgBRxbxAEpoRiv8wCwy9RYMqjYRuNPMf8T5Xzt3qzP5TR1st4DaTg1amk1XYRhq6AowxtGPHFd3vSjd1b",
  "key4": "4zPybTfw9yEqJC57vbNuE59RNMEEaBAXRFUWVCM4BxDe9NbAgsRor82ccvBLKPU9Tt8tw5PQ5DbnQ1zvyUeRZvCZ",
  "key5": "4w3QZNVPb9SUMzwsuNQ5VJ6dAB1jNFDCEp5UDhffj2LagcCE5HWsBSU52ssLywCKip3HKqfH4DJ2TEcBASsyVRH4",
  "key6": "4SNoyj7KePsATMr3YW3DmyjuEoqp3PrK3yrkjA5mxKwDneFD6DjkPka8N9XzGz9HZoPy89TYo7ai2iiXU4ELDXh9",
  "key7": "5Y3ZovkT1tJq5zXqyZTbDh7X3veYfnAfyZaWiLjNK92yXzFCFeKFJZiE6phCBgdKhiK97DJrnpAGyShKbNFDPaPx",
  "key8": "5rcjyFatwGL8sAKruCx2dNCynLUYNXr9WpmX8AWdGw2fk7GWeApL9CyxYMJ4vmL5w8ckyBAGU3GTri6AjWVPvAJL",
  "key9": "2LWRQKN5K4NGCZ8NHgQ8NRcGPs3oLGsHW8wpraDCqxskXXWhF6p8HU6UAoDS54bUeMmGBgJ2Br3wtJHzxn6t3evM",
  "key10": "2PkKKUB4KrfSpnjdjvJnn8873iDwTHnoW2yGeCbiMKT1LCtvv9LkeTg8WXjcn5N4cq5rTnCaExDdQeac4fw7L4UK",
  "key11": "2SKJbXkSoTWt54GmjoHDphSfRLcsFQQEqLwb6EdwqgXZrrYhp5AKaESUEVAY9EMHayPPr4kMgNbxY9LmaMKguWhg",
  "key12": "3f6kjrpVdFW6jUu2EhSY4mY8qCkYBEUoJpJUZzC5TmjwFNP3iB56sjerrLUvuDMwWq7JNA3Z3kjkd9khnY8WisUi",
  "key13": "SKpGSreHbcSCzMesengBbjeCWrnce7a5eumB7FKTRyTsWsjNiZGaNF8LVeEKFHBfCtSDddnCdsdu5CboN4jcJQz",
  "key14": "4m7nBmChDeFYSpnmpw3Pj2Y4GSn53fPCfCo21pQCcetG1jdwW84bsvbj6Q8AJAXvMRqM6yT9RkLposFWdtMueBnP",
  "key15": "33qHXEn7qE3g7fieKp73ET7iyfHvB9DbusJ8Z7NCozdkYCNLmQA2d4qSc4gAuFLbiA2Vv9siHVQW9krxLgWrvWxn",
  "key16": "4rzBhtV4ZMVLhsS7Vgh42taJKJWw24q58NCNxBeqHBrjhnEdkyM2TTVRNQdqcqbFUEMg3BX9Uf91D5grHLbGTPwp",
  "key17": "2BMXtH8V9F6QXy1fhDuJofy142dzhbeMnv9UHVjx8j1zpj4R7SHNpb1hv3mDc5ANCaXNM1XYzhkVXH3uLnFucjYj",
  "key18": "N2KzUefMNDbEiirz1aowHjspLSVQrvo9edr53YKUwbmst33VkMtzsJmFjEhactEKeWNTh2Cved8qW8hgYbrdeEf",
  "key19": "3U8LFXA8do5W23v3yTpTfcgXbkgPmRJ55aVKCymKT3vUT7oHjUgidSJPAv4hHK2xEESWJVAvA6DuRjczePMkVZMH",
  "key20": "2wSKk5rcdr7YpgYmmRMaCWekyLT6bFFn6nqrPXYYinJzkv1AdBBgmUzUecY7cnfvLBPciiwjsZs2KiyZ6PkLtNJs",
  "key21": "2Q1ytVEqgQqTzct7pD6qc4NvP1oym8AwC11RfSfU7ry6xABiVqd7hzVgrvcP5TrJYP54UyM7uPX5p64dZxFoAqtH",
  "key22": "uCMg3cBRRqLqxPHMCjUGKpz4NMehoAAWTNXVVNhSVaHitDXFDVQhV24Qqtdoe8fA4nvvPjzTyGvymMRAaQhWcyu",
  "key23": "iuovUJ9oozJHkifwLT2hihidwbfctpuJraSGscTtmubS1YVwuXdQ9WMez4U9maNS9nNvkWfg9xTPQwhTx4weAvN",
  "key24": "7MiyKntUdTsQUrfXhsWEpdpDZsteG8FT9KtBMHyAHg7jHv2UcLoYjEtJAKVKr7VZwPxpDR6NMfhJZVSd6QHrEwT",
  "key25": "5ZVjQUU6a87AhWjBo8gjs7Fc5NrDhfmUnfWVj4sfRR9fJg4KbqZ2t9gCfeW8EW7ZkdrupWCycMsY9YJUmnc9NSRn",
  "key26": "5ooZ1en17u6c6YkXdhHHQdMEP7V88Ss7E4Rei4MQ9wkqwD9dwQThLGqyr4CCSi2j9STHouhYMTHjkuyvEUdqKU8i",
  "key27": "a6Bcj95aK4VzzsSmJ9hb72c6UfCuvA4SPfS8v1D39Dsa4cgJxf7DCGBF7ApCdT1adDW7ixsFMwcYUL7TWFV53xk",
  "key28": "5meBKKgWdpLtpobE3r1tQsawW2o7LjwHv4p11xnn3XG7aW4g3t7vXo8Zs9anwhWkEcTo8wPSdBdqdu8J7hMrZUN6",
  "key29": "2736vh1ruQwXKBQ8HPK2putmrKQBXymwUwcMFrgst1Ku459n8kuSww49dt7ETrX3orku5Nxad7bgoDhNpqnSKojW",
  "key30": "27huQR2WiFUnENvt63VochX1HazituA7noqJwuZpdMmjYQszrUrjLe7qaCSf5oJamHNpPCsbP1JUTyTiJxwiWcbk",
  "key31": "4E7w2QRLEwnESLGJe9dt2goMtrBW8w5pQcTSnZQWGUGRf6XJPYHnobYmncUPUDJsPETggEaNqeCx34jQbpTcpBes",
  "key32": "2apdvGdQDBfhBCPJ7Htzt2tDNSpapF8BFankrMve6d7ZuLPbkxzV4tYroASp6EfJK7CuY5L4e2Hiuw4rah1DJ6Z4",
  "key33": "4w9txrcfpua1WgzKh8oQRY2wBGXDqD3g7tviz9ub2y33v7DjmqqSW3rxVaPLn3oGa3JDCbSTdfqRieSmoaYxFzZW",
  "key34": "2voAD1U9unbE1DXE6AEkV55i2Zv3bpJEtDBwctzWxVP8TihcWaa2bAatT5AKUavCTw4r7vRmdKuyj8s4uRWQo8pm",
  "key35": "3Fde1qugnymo1Q68zZ1YM82HMW86B4DsQ1wDUUbKzzA31Yd7Ys79zuXJJpZyW4QF2TgD1nGpdPqjUrLQDjTPFpFq",
  "key36": "3JqeuJkc6DCKwSyWopEWJ43fKAbKBPWCCG1DRUNmSeQgXc7pGVPzPzGGf1RuiqFYeyANJJmCrKL4JghBkYWn1Aon"
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
