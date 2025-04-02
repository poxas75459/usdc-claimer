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
    "NLRwGU2baHLxuimocNoP9Fqhb6aUZYaaAvnHVcMEHRYHeoUi2GiVR2AvLVWm4CgNj6i1eouKs6YcZaVeHAuyuBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5veQ4kdc1pHkiLV7mkkBhXGTwwt6GKkGEkNbw6uPWvpBmdbF4kMP5qg5BUvBKVNvQ8hTYXw6F8rJ4aBnkQMht15j",
  "key1": "3XfBS7rrJJXcwrNkvGG9ey2rE1o4ZAC1717yKGXLyUGZH8HGEsxC1nYVfUNzpoUNCk9s5nEb6i2TB189tsoR5AVw",
  "key2": "24pA33tJC7N6KerRNqUFHJPB4WfGLA156VBJMjZ6xv67pWVB3MXeN6Q2AQCk4EFLczFi9Sn3TWLrYumDUiXYBL31",
  "key3": "2Sn6PLPxQQVDRQ1ndtvBMG1nVa1ZagYtm5Mh4BzKeAdf2SyZUsJ8GYrJLPN7tPiPAdyJgEiuHAeqNzkKQndvPB6t",
  "key4": "37XzXcgYVx4VpvXWE3LMyAcLHjgib8fy2CzY528b6YszVG3L1VSUYrsUw13uto9PVtsFuEcqevr7eifnPbanV7ta",
  "key5": "4b5fys6mn39i4Bg4C2eP96TdKoSmFnzUtuaeMd8rGqvjffDnBUFELkncTnip9ZdFLDRsb7rvqfxQg8g5KRXRwao2",
  "key6": "4QfZatPcGJs2DuCgCK5Bhupty2kE46xTGfbfhGhzGcQ24zrFPVLp17tH3f4tBd1t8HQvoKEKU6ND6QNavETpn5L",
  "key7": "2bMGiJihEnr9wdriVCXadVmMq2kSQ2Fm6UghtGdeBLVDWaU9FCo7xMTdgvrA7E75nG6ssrrfLBysN5Sfb1EBpU8g",
  "key8": "2K84e51Yjqt3TAQHES6LFXnm2z6zeWVw5aGQrizRXi92YXCwwh2PCJod4awqGgAiJFjDognhU5JERV4NW4NDvn1y",
  "key9": "2DeZasssUYBVhDmM63T3vbhL4tuuMqRCCjyngRVEhNzE8es9fDtVeG15wfxcjgmY9MjPWkjsbPRsaTMqFVu6kDCv",
  "key10": "37yPa98Xf9AbGFTb2EHCzpoNQcedMiLEZ1y5prtc3CfiUAwR2hgLWbbmQJSrjVEjiGMPy9fKJDeZaAhN1JErXGMx",
  "key11": "eQ2h924ENEDuEHo12t4m74DjXn25M1c3AQVsjP41LANxc2LMoD4dMRY8Tyr2HTkKEeESd9f42mjSKtAw3EW9G6X",
  "key12": "2MLVzjPR4XRqtG2fhZY9PFUYG6QaP6qgGWPj9rBNnzYQry2DmREwaEXCPgreVkGR9HpW85kvty557L5ujpUJVWLW",
  "key13": "28mScMa3dXteCzPiERuJdPrYeXk56LUPdGQ4WpsvdU8YGZwuHmjRSnxobCL3fE4yh5Q7Ahdzs1TxEmdBc9tpYfRS",
  "key14": "3Wm9qzwVXzy2hhQtPeFevQWGKDxWpLokoQBZGdVGQSqt2uRXhHXQf1dshJH1G2fNAizVVoRjbHJH2jmssEy93pah",
  "key15": "3eEDb9NdfS8UHZ5w6KwEoWhkGbnQjasUVocNdv7uQJDtZvg5uGrLCB9txK9xX7At3kH42Qjnpg9suXnhsAdvfMmD",
  "key16": "235WVqPkTppbHadSe846nhpFH5zTYiNK7RGrgUE7SjSfpQ1H3JeXkNTPhr68dskaExTXAthNHK9CKU5RmpKhbdR1",
  "key17": "29RY1hByByTDfgUxbLrV8MZtQVPnGcibkMb3cqUT1xRCzcgz1v5ZMkhTsvKNqWYBt8FY4CPoZK1CmC7knzPSKhcf",
  "key18": "4YtJShJVhtuiaG3KxfRqhjMjfgRRNcLoc3ogYSEfyEv71TYAEDahuUG7P1Cm3hqFK9jmQQ14B6TRbuJY6P9VMjaY",
  "key19": "24iWPMWiAkZSDhDZuhLA8A9V7VpaVNBVUGqjjEW7auTAME7vjHEuTG4TPLCCVwome3bipdKx8ERmDEq8NSEX6UYF",
  "key20": "49pDfcTEQBnU39exovGLwKRF3o8sDkzgCka655tkoJ5vSyFaSt8TUv6mV85wSUrEnKU413vvCqZVxj8UsQWn5cvN",
  "key21": "mQnPpEkt1woTyG8kAJzBp6gPNsf19Pb2WPZBRhyu5inWwhiMojsD4YHwFnSQxEFLaTAv7Th4FPVkNp2vTrpFe5H",
  "key22": "tZdQKNdonEso1qfwwd8wWVvkgSEGkQZvZrPeg98dgrwrKZCCsxCDdtUuG8gpzZ7hx9PVBRrEveWBeF4U4XmQ7G9",
  "key23": "3N1hPNkBYNXeEhX69yTrjWvKGgRTDHeUCUNfwvUQzYcwAUQfzcWwMkJGhfvWAmrgYFwgfSFpCGmnrrwvhqpXPm7k",
  "key24": "457xGXVyVnXXeGFJdkYxxGHKWY5Fwtd14PfGy5BBjiVxd3BVgX2rGXGNbWHzdrHDVeYrzTr7rt75xDnxprUSnmaZ",
  "key25": "2dpXdTR2gpyn7imb6mDDAsryZ7pdUFcwGSc85dZgJAafme8VS4EXGYzjx7TV6tf9TW7aYpXpmtn3xkHQJ1Sgfcjz",
  "key26": "UH4YjBzLTvCLniBC5ruQbT9GPUttsm2k9BFproCFWwEZwF5ervyuiMzQ6LWbgcp86qmYL6QndsiiwtU8nvRH3LE",
  "key27": "3kpu2WTsWWmXrvXdbeCHQ6anoLvo8FwdfFNy3NopBwx7GBwRAvr3pvBwV27Ao7vrvxBcZnCp3XrBigmzot8xfPRx",
  "key28": "4FnxxdsAuCo2WTFJxniVUT8eUrPT26hrhb4M5WLAKQ9uF8iG3w26sx8k8CRCv6daf6yy3ihvyXUedPSpYoJYq6FT",
  "key29": "3mrQrDCVqzV2ruR71rpBFMN4qF5LosU8W1zBCUL862wWzpEST8T2kgs4Yo2yLnoCdaG6rLCzQfJSKoPQkKXve1Ao",
  "key30": "6MSvUmPKicSCz2g1FTePdaDwQE8bMDgT6GPD6TPiT2jzkX6NG5dmDVwKSAXLCt8R9nvA2EfB4kWFJH6po6qDxtN",
  "key31": "2GQ7HaY98PQbHiFEKcijwXUX3w8MNUxxa2yd1pXguPsDZRZXWdSiFZZFvnyEEpUpd9j5x5H1AoQuYJh2jZsaY2Yw",
  "key32": "53KHijUPrE2Rtfsz7BRHP2zs75sn9XDMhyEJZyXsAKjow3LdwRyGUbzqPdWFVPf3oWXtfH7p2mN5ALngJdsGmTnd",
  "key33": "3Yo51ZyPucHEHWii4p9GNCzS4A17fmyhA2da7b6oT3AuER7VYvsjQ4qJ8n9h7dtiZC3zoTMzzWE9ceHVph9fm55",
  "key34": "afvFxCnirgxB7Q3mKJQmqNknrVuwFXFAdZ3r8Hwysgjzf4PhDRJ9tUpD5Gohm7XomgpHnqMEC6MBK3RXEe2yDrW"
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
