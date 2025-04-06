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
    "jRv67wBtMWGX5nmhTjwdEztfnUhWvPKLhHCNYJHX5rfpbC2ppjywh1csUxb8eiHoMAutZqWa1yXct24W6VN4TqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HijTjUhiFPhmrRgmmwhW5kaMoBaYUB6ucJ17sq8uHjGWAQtPsvowSdtBNkbDia2PaiwCzKP9qKFHovawRpca1NV",
  "key1": "4g9iomoiCNdReAyHKbvuVBkZ3we8enYxV8rjCUb7bMau2GtarZRxfZyMJFSavYnfKk5iekz3iYuuQG7kubWoRWtH",
  "key2": "ShNmdMizdi85vD4uA92xuQZB5DFRnSJswmDow7RSY2sAtVEoy3ECEzfyKVjnoL5bufoMAGfVgfkQPi7edPdYHvt",
  "key3": "5yPnMUjt7C6GNw7z5ukr1CPhVLbLpgUGyeZEGMzPVaKPNJkTSdDotsRf28dq2yDVwgvbRR5fvfWesD12pvqEQue6",
  "key4": "YK8VgvYndrNphw4gqi63ZbzhJV8CYbT3i9JiQt6XxenYkoTtbmVv1Q2qih1vggzieTMeXgdTz6pnuHsRo2nvGfC",
  "key5": "4KZhHzqdAtwyDTY5WV4phN1kH934VtSXoQWJVsMEwyQdgagjYThnnE4DVfY5KijEpueqCpwcE6K4PX3TpaQcsxVB",
  "key6": "igLUNHPQmv4uWAA42Qmi1YEsVuRDcdBz9oeFUaXCERLtqxcQMegzSVBG292X7qboUZW1sNBAT5FtADTkAwU2t52",
  "key7": "5DVLaA6sbLbKkGA4wYhWBuvy4SZrsEFdZLpnCahihk7K9WBC6KgjkMMTK6y7sqAUZNa8tiW4pAfP7eE9EjH87spu",
  "key8": "5jqmVrdGPaBUFEeM4pzXtD3Ybs8LyUpQLMHoodYefFYJmguMW19F7SgMM6gUb5JKSiK4PEMBCyKRiVmQsCvN7ywj",
  "key9": "4J75HZ8M84S4fqd2Hyb5YWA7QZqhm77cTkRzSKPGNDDRVbpS991eiJiFyGFUktp9buFhQE2StWz7XMkxyEyRuhRt",
  "key10": "3h5cVUFai5ipdAk1qHn6MdsmKPBRzUXBdyCsNPwXKT5EjQvHjTDYXVHtbwx7fBWtpQFHQMEVb5EHcSgcP5qD3imX",
  "key11": "3ExNojM2s7keLWqbX6AqYkmYoSFSDpz7ZS6oWzY1brjavw5uHy9k3Y6qfdapQnFDY4mAU2edDwaVmJLi7bN2m2XH",
  "key12": "5NwPTos4y53jdmenNj7oQySipH3sxLsF8EkMGMD7Yxhno9NeKmdmesyTZHr54aasM4Fa29VC1tuwwtCxVVX15SWX",
  "key13": "3YCtraHDtXhys8Rg8uZJLUL5YXMSBBfkq466NvQzfnrvCF7HAZXtvpW4egKiF6KwF3LUAMGmajATzwJkCDoMARhf",
  "key14": "5DmLviMDQtE1mZUbmcwnJBh7Kghq1UxST6tMqnDENdatfZXMYJ56JoX5y5vXmgWUz1hyTs3d6PDuhWwzbCPHcwqR",
  "key15": "5vQUdkpLiWhZx1hWZxuZ39odcumnbatJAYD2HxaM1eTF4Hs3sPtqgdzE3sDaV14P27PU58Cp9Mdn5Q2zKpZiGowe",
  "key16": "4u1jnue6Df3UpZGk9XVqfCyJCAGkYA7frzNQiWxejN6qNAWmHjN9JVqmR9RAZpzobNMD3jUS2MESguad3wxTHM1M",
  "key17": "3QJYynTmb55jUoahKDzoqHT1VCYvC9bDndmMCsRrfwDWwR6FD68PfCNA2hG7eSFgwbsFkdqgZn3EFPSKBjwgiQzf",
  "key18": "36ZZ1wsC1VWzeGyTu4a9zFHcEQXDA3MYmHdLc1LviRgKjtFQr3VRDzG5Qmrg8WGU33fyEKVDgbLbbs9KsqS7Z7t7",
  "key19": "2YJ7LpkoJZHdXY3Hjk9ADBonY6brc9fyGVCoSmQHKX3Uzx58cWCvmw4rVg64Ue6P3C9wEnKFDWxEBbBoaR8NA711",
  "key20": "bgSG4qFeKWCcZbpPGLHPtPd4nWNRi4AYiTdEVBdAbhr2JnJwQURDhftQUxKzo1aVZrxpTU3nWoKqodmtvNaEMdL",
  "key21": "5QV3FQCgY7KiMfTkcbVRfrN9ABzmSjgtwHinnK2iL76sZkd362xbb3RxDBm9qNPecTgsidRuKxrNSpvjCv47vdnN",
  "key22": "W9TS9988esd9D5nhy9WPVZ8jAZWZEZcnkG2Sb6VFbmFVcXMZb7zVrueHUP4YUseVoUdAZ17anjyRiUF3sHE1uRi",
  "key23": "4S1XuhK1MMg2xh7kHRQkPFKu7DxUthPE9e1mhjyMMqK2ch4riUpEx3muDz5Dk5Fc87ATjuzC5BbwtvDWgbBTeZjr",
  "key24": "EASTpjkUy76cJf13vkxnttgShr9hkaqfterJWGTZm5pafsEgUfS8crWcoon2DSbTdTLeVTdJdRvLfwB6RR96TuS",
  "key25": "3kJH3KVmMZrDjNshSQHZ35sa5A9KXW6bHYWWtZ6GW2fL2aNysEZEJCfkyBFT9LqzBdTniTqCSZDcu3TAiUdqomSc",
  "key26": "5CtiB77kM2dWSrkuRFaNjas8VGdBTWisxD66wqHn5hyuVQyPpiQL86MMMrzx7EcPReogZGDfMcxDJWoMnvBqNMuw",
  "key27": "5mDwuRMbQFB4J84bSgdfUfb1pocDnkhyxx7MwA2GwZmq8EEcCF1cA2Y9s7PpgpzaUXnydLfWuJbQn3F4nBfFrFgV",
  "key28": "4x5PvV8VU9ELBCkESCGAuk8H6jWKgZ7HFHAvwqACCwQDydVZGBx12MJY53ESmmfQMjuJnMnJahkrsNQGw5Co1SHq",
  "key29": "4GaVFjiNDy1Vk55ugkCoVNsnCzsoTLpWNqPBQj5xwpWGGY4wBYKAMmDnXnRyaqT2s5d5pDckXrCfvziF3Mnh2HkH",
  "key30": "HRBN9sfYnBJaK786qcsh437UaJL8GSx79BWM8tLhEC7faeddsVMGHF7rLt11aDP59c92aTh7MtK6nsYAJQRus8x",
  "key31": "4rHgY4NUBfQk4vwUCvg1AYTQA38evCC4JZQagX9tEJJXgQN1qwpBN5B8Q8RvdxjPhwHHUjGq1zhoesCrUeRkkfYY",
  "key32": "23NxWnxjf15QKGudLPgK7XU1wMrrMX79Xh9UHFn4GsQ7fmtWvFpy7QjtWbSRBeJaaTaufnNxtdXNZ28aG27h24KD",
  "key33": "kByYecRoRDuUsGzDucKCfSctngUeudFMEmCZT31Pfye5bL9iKsk6p5U59LCU3sjpsELAVtrmaEGNWfPoufx9ZMq",
  "key34": "2GK1DPcpUziT1AUg4UsmtUv1By4bXdo6Bo8CxVt735AdtmMDmbNQt1UFfucTB7o4nR3VdoKQvswixxkJkkWpuHBR",
  "key35": "3CXDgxdUuUSPQW5st6nnW3ocnUBzpwaKZeETWEj9wK7abuH9auuyvVP4ehi9QrmbBSL7S2mTYDKRhLKfVJbA1DmK",
  "key36": "2XL5rH7FLtvFgR9iLCoBvJaYFibFw4HgQoo5h2qCkPBdLWb8gHSWJg515hAzDuQHeEAvAotxt6LUcP1rAzDQzB95"
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
