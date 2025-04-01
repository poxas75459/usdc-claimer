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
    "5fQ4XCzihTJNyLXxsBJuFxXFMpJzAgc5p4ACcv7GJym6XNHqbTVWrM4gPiEiE762Vx8zN5DzzgpgBwT5LJmvMgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L3DX4XziwXMTLPSNHTWf2kvyi3rWBFqDPfxbQVYzSBXxfudqDtxCUBRxDmodDs5vd9j6h7KFHxGxiH2gv3mvntT",
  "key1": "26vD1ePTEAomtt2gMYTkksg54hcatPXT7WAsFGvdgFGFuixwJvWpyY1JQFebfpRU1HHTQ92DyKZesqyHTvRMfGkH",
  "key2": "2ncrcvwbT7Fw4vbE1nWykBrQcyEgh8zNa9L9LRvvmckG1TuZXcjvrLoJZPeZww8grJh3vdRU1AV8ghyQ6MzxKWvq",
  "key3": "2xxpahZoiapaAsYXqjb9U8df6dMVJPj86b4SLDk3gsjSQMFQ1bGWBDtdtmhRdTPJQToxQzSMS7dQxAT9frf2sKcb",
  "key4": "5XjWH1266qc749JTpCCVTkpfjZdbr6FADcZgF4Md7x2RoXXEz42D5H7bKXMy2vV1a1VtTnqxC4VMmb6KTLeYWYEz",
  "key5": "K47F9qVJ4JvKN3ghskaq2tveC3UBh7m1b2A5nzCr4wd5WVVcr5JbSBsPWRB6rZvGHpQsDtdgYtJSWiD3AsGtgbn",
  "key6": "35n4CGVzroYPnAJ6Ss9qpKPW9oZkY7oTj6EWTW6DLuKDahvg4raW4hjJgVtpWPQatxTtPaQAc1tjMaNGKSg6qMKH",
  "key7": "4wF8L29PmmjuTviNdFfsdWEgtRK1VT1XZyxeWQLUBdH8EQAo7zWJAZwHno23WkTG7kwzdhKWDUiQYXu8KKtZLrxC",
  "key8": "2GDFpqAEMFqKsbkupCVtJQPGaRHo5Bd7fZHLfz3uDPqcz9fasMzYNU9YZkELYwVDU9KSEgNJ3oDPoas8adJYpTWn",
  "key9": "5Uxom922toDkDrTXxLsA1NcGnqoV7U5ZqDYUS8qJWsd8xDw6stXkDLFr1TEUDbm2mey9u6UH6hnq86kHJHaCqo4R",
  "key10": "4Atsqzn99TYFbTJeNjUrpdDwWRdAQwrZteYg85g1XnkooKqqXnCJT4dV7nZ1Er7PmB2b1a8hpakRjWRzcsbHfAJE",
  "key11": "5spfGY2ZcxJ3Bd6C5asEEGC1StcwocbZM991uvJbw2ND3zSFhgcL3Nm1ZrUhTS8W1mwMBSYQe5ffyMr4QjsELFnF",
  "key12": "3u918ggdgcyqu74w9JWRG3hT716hq9Uarj7s5tYxdmi3n3hksUboSBdZPVcPCjNYBTc12ojyeHtrGSfQDU1RAae7",
  "key13": "5x6yUzpTWYko175JmsYP9KmaKWDKjsVhppp6i5m7zyVH6Coq2Uc6PBTMEn6oj97hjY6n3ys9SiSMp2gTsFNZKBY1",
  "key14": "3AXBU8N2vJefdgtW3NHBBp2wKAuban1nrUfkt9ScVm1umYKTB8xxQuGA9eGSkyj8n9AxtCakJQ95gETFNamXireG",
  "key15": "2i88zNftoNeNxUWhJXtWVrV8f6KB9jEDdHtaXL4v6JK8suugP6CR16FJVo7X8Mrm22ehkJf2pKgd9S1VLH5LTkMD",
  "key16": "4t6HmFQbKhSZZFu7hTDkDE8ja9FJjJtGid9Vc9zjvy4djVr6feV3fErdPYZjFPofXtHbkj8beuowRyS1KaWEwvqo",
  "key17": "7A2JwMxMEeMJr9f7gyW4Yee9soQTexzck9Qvn2fGLB2c3fU9aoJxkPSqH8yThF2G4iEzczWsrjuCu5gTK8po2Md",
  "key18": "3bffoZLq3Fz81QyS98FxRvr68ecakcEbmeunrGu77xVqgPakmgZbBQcH3Nhq47FHgTYcqDWw5iBzPNXZguThR4dZ",
  "key19": "5pBq95hzCSkyGyM2YeWkLngLG3UELjUD6SWJivPG1mujaQvHGhdJjc6Th1sxK4dCBDfBLHNY8nEDiVzb57uhgytF",
  "key20": "2tTaTdVG2YBs7F4jpZgGuCXLZBmporGQJi4Uuz611RRxyHvfgrHEYaeTJhPK42GcGxeCkxvEotHjeEETBTiBoT62",
  "key21": "2H9KswqJHJLomfDKquSHDuiMfPUHFn8Qw8XttYs6k4JsVJSEHXDJFNenfqJTTRkxs2ZPh8VkkM748d2uE3Exzbhs",
  "key22": "6yf4paXQ8WyTrgbzNTYuFRNz36ovqLrDPiNiBtfEPW8pKBB9StzRu2vmnsYWG3XR5RYf4Mw8vZ3SjAbh46Yaz5j",
  "key23": "R3AQ7f5hBKchRxPLtEzQcxNWigvr1AjYgBLpJ4uUnaq2gSPvk54wTym7BsMea2G2ws7e1BnUpQwMoavnYhCUeYL",
  "key24": "2dBm7aBF26gHpC8TiKQA5YKiRvXveUwZLkDAMfoZtiMzA7FWaCZxXjFjm11b9hfdkHccKyhkAaX6bfhzW1mD5zvn",
  "key25": "2hb7jH4gg34X5jWcunArygPeM9WAjNq6kvhXm7vvHQw14JMhYzSM2mXUDfcc4wfRbYzAWkpMg3VKbMHqbXZ3HS5t",
  "key26": "22CiMZveiKzN2W52rERTVkyjUZXCFjGNt9UFRY9f7ySFeggir4PQkWVu9h2FhydQYdkKgNqXXiEsbKtvmHaY9J9F",
  "key27": "4Cjt2hW3RXPdJ6m2VLfxTkEwCposUMcMhYbSbeJA71ah5KJkhqiQQbTdUdpugLHbCyi4QnP8BtteLT3fbWPdqvWM",
  "key28": "5CFrcUG98RrGQcDXtWSprZ2oihc8VLV9iW2nXDTfZqxqKBGjaAeJK9sseb6g1MDNx6zmjMMEEsNq7Cjvzy6wPnaq",
  "key29": "3mADPvVioEjGgkd9DptoGw9K328dnjQ9huDwMVs7LURAX5QLbvsJXBoUaKqLpr7F2aHsuduDdirhydu5mVb1UHcF",
  "key30": "3ojJ6AfpGSrycUxv5Lrm3D5qNupHuypqLdcLG55QzzHwBopP4RwiHfgsQ4vWjSuGYHUfr6NFCu8Rc6m3KXnt4wSN",
  "key31": "3SdQWmmCcXAorm2R42V1N615MgZDxZfTowHVrTzYxNrR69atYWpKsJ72JgLqfCWAtBnwybe9m1uSxFw6AesuEvUn",
  "key32": "5JS5Zwau4pAWQsT2d6a9MKXhxpM875CkofXEovCb33tJw5kReR3DKGsH7GNzfCJEqhmaeVy93RHYmaXgDEQMYdp",
  "key33": "2ncDFUATBV9FUAhTsSzuSdwimUtyrNaVXW2nrSzbYfkjHE2k8LRvReL77RKzYgdinZdXXo4zCaJ2K3nJFLEgrmCw",
  "key34": "4tsTd6y7Ye7d8B9ThCLwZLhNbFthUUNrHx5D96845VVU8whGsdg1eijhYwKurgGj1VFW6CZCGc7LVdHPaskdFwBA",
  "key35": "Gx5iVXUDBZVKWiokFQtQLaqP8yUeSWbjZsE44vSxrv1ocM3Y2V3cKtygRKMQnXdLSSmQRY7FyE4UPCaHqkcUmcB",
  "key36": "52od3x3TVcrQpTQMxhFKsui4qeAWesZWp6SnW7bLGmkT3Nd7pe5TXjrkR3Rcb8XbtFFYZojX8gpoxFy5jwjphYtB",
  "key37": "fYFvZ7Ba4BWXA7FTvwuH7WaquxKv27KDpf96hW2c2cCWdfirURf2JAeBBR7XeqFNSJC6u1Go9KcCZpgv9ni9hQQ",
  "key38": "JYVsFVF7xFkekJu6xfAPNs7stcrnXthYxDer8r3V7AGDwNSKHjpmJpCjhtcgSGAFi31C8n292gWWpvkAwjRXGvQ",
  "key39": "5gYfpfbyuWxyhwXm6j3CN7A6cVtCVYTSXPatUqFGoYYJnnBoRdJHtthXwkdt6PKCYjpVhKSy733pKdH2USFGRicH",
  "key40": "4wajYUYb15DoCyFmzEPTs6fNseonjhxHWUjJZZ7WKGgczSXeqMKHbGMRzamphmsJLaSr8GWGjuKHWVWt2bhnYyVn",
  "key41": "P4RyRtyWE48oK6uSTWD75dcKN5kdZp6Ryw5eKtnHYHfoQuL7RCNqup6Tqtt8MvHjuNuG78BwdTpQZJZSfUCTrR5",
  "key42": "58ymonyxUwKpqjUVX85mCMtwvaY9eMdBr5dpjYx8tDMKnnigai2XXZmw4GhEt47GsCE5Zva5uCZKpiZSmvBeGEZi",
  "key43": "432YXFBALi5NpRSsD9eY211ddvtTYQxo5QCRC7eLUhi6h9zuPJu7vhZ6BqTh48boZ2gCDMGWScdJZhP3uQiasBmR",
  "key44": "2us5yPcu4BemtLZTDvv4ZRBUz81uVaNvYi1Q3F9339My3Dh2zG83x9Qxjvvpse7xorzgGeS4kg5SRox7yWJgqW9g",
  "key45": "DMEU4Gq8bVCEacybmeVX1ju56ReQX9dSFELANUdHnK7s1Znu2YQxEKXFJZ5XXRMG6jfQ9w7FfSeSvXXLBJaaGf8"
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
