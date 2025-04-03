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
    "nEUkzbaKLDWfryALKwQg3Tj2MhGiw9xGM8C4Deske3Df9YiJvrMGhcnaAV2q1b4FnCyjsPWUuLT1WTc9gKKhu4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEmeZDmQpz9w6x34dd83FDM5Uzsk3qNduwTcPHNoxvgEcTAgYSC2otcg65tfATSRi3SewktqUfxCJ8DYbaozeGQ",
  "key1": "5wL7cYj3CS9rFjYwjj4xKfSkUzJC2JqEiHBLsZKvxsiGByyxc43rJ2DZPq2GYFW67jG3SeJ75biowHYtWwNoM2aw",
  "key2": "Vcd7zzrHxRYZcQKSgor9HeUDYkFm9qj1pKX79rRN3i9d6KgnwcMyRi5nnrtiUbtKnLZtHWfxZugUahtSipE3Kbc",
  "key3": "2sXfP5yCKM1gQbgAiZnD4jJEky2Qaz8rzJmdSeMMuLgXjYWQwMZfu4GCMoioGr16iqKwzzeVLV5hmE1g1194oumn",
  "key4": "54p27eJVgRCPbtc9wALvtXMZ7825YchiD5p2J5n2xyUmf8jymUBSWHZVTeNPJAHGwUwo58Yrf3vC32VA5Yiwu9yK",
  "key5": "2Zfau1rdfKbsDHFBpjiJ1NvD5ebqSg22Ar6LgQVF7hdQpgsp9VQJrCyiLsjGFjTKP52h2fvyagqnxDozppMkXA4Z",
  "key6": "3mH3DFhVoSNPTMvsYiDB2EkfiBFms6SHgFkmUskYU5qLeDde8K6GRY1wPSRnWgWmsQztZmzemX3WV8wZWf7dKWxa",
  "key7": "42oCFC96CmKYNp5297Hhj5dkve2ZdysCvThkCXncSQvurchx1s5UFivrL4ZSLFATt4WBYrWQYfapjn5KUWyC5JiZ",
  "key8": "54fcnJPysh3avsb2SuprAHW5ADhYg16G3quURMzFApW8qwd7rMm99WhdyM2sM7pfX79MpL7PYPH4H2vX5PVaANkh",
  "key9": "5zb5j5GDTQdhdbqyAEtbgEkKX2jMa9LooT5g9E8Dxj6Gbj1b7k5L9pix4F5hDeK3gBcwxr1sPJXUFsszqUVV8caQ",
  "key10": "435igoNZ5MVyPS9Q1WGCdn42S5pMwXkGkWRUJzJWeGbNSGEEpRTmn5MVL56NFEXZ1dyFJoePj3ZECnaYDvdo8MUx",
  "key11": "3VZxKrxNdv89q7Jeo5mCTNKZvVvySUDvYjGH2aYozZfL8FbUDxfLevtxdjLZtkzJL3nTPa2zrCsJNPVjRibDhVa9",
  "key12": "2mwJw1gGapRXgRWgpcWYwzMQTTfW8o9kET2D9z2xUzZe5GZNiNKNwXW3uaDV1d3EGGyocUBFe23yknUBwpy5EpRU",
  "key13": "5UYrFTdh4yAhJ27d2KhuVLtBAe7889tCB7xAZFm7KkmMjE8pjg2rEjZZ5wKiwWKQ3qnb1ZVqPg2HPNgmvJLXW5Mg",
  "key14": "3QmRrCe3gGkS8bHQtfBJ28WSR6FJjZ5Mfd8hAGACNZ2MvuUzLcANih2xiSt5n7CGdaYTQ4czoXXi5zMaZPhYswcA",
  "key15": "5ma2uMSuXt9QDRZM9vdjgDhzrxU6T9Kt9r55mqrMdw2iVzUuPzWuBwHzA9Hhg7qJDAqNqfn2iXhFt1qFBuAxAXbu",
  "key16": "2poLuavendBNThn83tGJYsBCJGpsVPrDi8P7HG1fFbv4WWvoeXTS8g27qfBCabmJYwabfCeqVhxcw2nWmDCTu5eY",
  "key17": "37CwH9KxootFUeagYM66L15ZdHfYeM9ASGmDbYNuYCvB3ebi7CFUy4HnfenLgJf38fg7EEgEyb7MKLvyeu6drFHF",
  "key18": "ZxsSRZxC5RSXjk7oB5SePHFU9W1njctoswtJQLnimdR4GE4XH2G2RUrzFt4ztBLuh2wEoaRsvhkbGr4SiCvZXcm",
  "key19": "4h5ACYiCFbEHo4uHEXTcMZyiJM8YEHzUdXYT67oCC7XtXDTCnrtyqDkUjVw3CGFFvjdRFzrkaVPCBrARFXLSRM8i",
  "key20": "4YmD5dYooFf37r2FJsZmUnJfiebvGe4QZrQKLgRH4PKpMWyde4VmJoG6VZGLFmgzdPuAAMEEUXSVLFrhB5Tx1zKW",
  "key21": "4GbKHAbKqJSoP2iYDEJ8vVaR38SnZqFjyHtuUNMP9zS5BoJAd5wLM72LKBKQPZCtFVy7mnjDzqDDxiMb2CE2wf67",
  "key22": "3vrC66eiCdtovPSauCTuHbQtHhApXqyuhgc7hZ1jheic2GCCdNG12tTHNhLmNaZorVWcqaQFu5Y48xRNt5thpRDf",
  "key23": "53PjE5CFKXRzxi4DKiN5ewFN6fHLMqd3w1XxD4umiaPL8YKcw4EgWhfb2zszwt3ZYydJmMfHbwLgnY36heh8R86n",
  "key24": "hHLi8aL8MkmeHZUUiisSA4bY2wi5vEMgnCfoRh2cepRmVfxFtLNdWQsaD4GKrNDybkULfRMV9YNuPcj1XSRMAsG",
  "key25": "4Rs9zuBU3rQJu7btfot3aXuiKZ1RhqemQTToHqwCaEQ7bL63MCxpBSt4QJyu7vKvwkgqovzAifRtSymkvzRX8hv8",
  "key26": "wtmDytrHofZzsjMHGH4SQDx5xJZPeh2ebKtgTdHB31vt95JS1WrhFe5cFu5ed7u8aU28c6rZqQcpMNACHsox37f",
  "key27": "NTyPjPbG6q42WqozcjJvFTbPgC5x6mkmGNQ8UpsvvoaJuMsbamt98vY8q41SusNScGbw9WPVDLChgJGkt8MZKGu",
  "key28": "4si3jfUNB3mSPe1vY3A9qbYxWQ1zajYoNyckFT3FcTssiSRD5PAm1cooZGDNDXfWnFjM2srEG8Hv8qHbWyQFph7p",
  "key29": "V9zmye5eebD9Sz8K4DgYgvAoRb7bzgqNsRyhWgaE7brQRh55itNBCeyqnPKU8tbdFxr5JiiqQVNu9cjzKF2MMhn",
  "key30": "aLs3oe2KiZTkiQvyjhuahB2YA1C22Lg8npXUPTjDxZ9TpM7fx9wyW7EvSYiRCLozVtubmN9snZfSJU57KFAEKsS",
  "key31": "5bpVvAymFNKYabupKG21uhUEoyHdbaTN3SJJ48zBGNyiXnvjMGnqqZobzxPiktaZZWaUGW5CAoEuTzvudcjbvfU9",
  "key32": "MLC9CMFbxUPwaWtEYKHqeZi26WoK8ZNgh8ru2TvmnejQ1fN1MGJX41cQ1tH3Uc1sxfJWQKsRwbVZH4BrM7pb5Wp",
  "key33": "5kAk5XVAsnQeNVrqZLg6jckyxwVjC6Stt5yPVFuvvpUzKPpBQ4pHbA4AXSSMpWMDEavyE2AZE6EgfaZfXBS5wDj6",
  "key34": "HJ9Qurr924GbvvwVHjb2yZxDa2aXYU2gZK6k3aW8DVR3CF72NMcFhWCjxCmJ95TS5M22jow57o6Z2CLGEDPRpqH",
  "key35": "2yTMv1MW1GDacFdNrN3b34W8UfydMfJEw8icSEx1qHRGadgRNfAVmH433GRti8oM7hAp2hjPB8ThfHuFpzmJ1DoT"
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
