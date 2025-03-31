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
    "32KvRsippLV9ZqgV9zej1ig8iVjfBirLuBB98JA8JqtKRXtCnV3r2sH7nug7c8Qxo2ULDYMj6N7fU41xDGd5YdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJ3izcREWd9SK1wmBP6KZTWZ1QPsuTtFwrTTzLazmjy77vjzfozc8D5TG3cHSpB8it7f4nqVB971UB1FGkQ6nie",
  "key1": "66FADdN52t81LgLEA2VNaEJ7NSUfeA6kWuLqCV8wRB66ZzUPXWoBwucitdMPnfB1ra6W1GkvaQHqsWLU6tdAFCGB",
  "key2": "3x9HC1rkNaSbC6rLWedfEEP65eWKHDcafGBe4VEvvE87e8aHU1sthpgX8ezc2Q1oJAHdTJArrbqrWr7ayZZ54atm",
  "key3": "5unDVQBr3fGW2NKaJ3huhQG3Ss57oC6ETmohn5q1KxeoVJdZCTKkegtTZzMKtEDcjtmHdoScUb4vLC1jsoxLK4Hw",
  "key4": "oDDsAL5mw5D6yPUPAjxbQBBZXJ9mw6xQVGMvAXv2Qfv3DwvfHpT56FbydKETZPXtSfj4oTgriHA4W7PrgKmbiue",
  "key5": "5ZEAbebvME8FXSdrdX1kLkwcgXuZmAMYSHEsTKkN2RMDyesq4XzWH88t8HUx1ggk31siw2agrEopkKAJ5C18W4N2",
  "key6": "5eXMTNMACgGoT24hAreiHVQDsqSSnwZfzYQqV92fADAR1gn5oX5YZG8ngcoU6T4wzVWFVjpykjnHKj1mJfsFST2p",
  "key7": "3ASVF8d2PHZ1zFc6QA2nCE8U1LCQ5CBQ9FWM61RTABA1Qa7YwGiKs225UKy8mDCLy6pk1M7bmrat7tb6rhLDEdn1",
  "key8": "5DriM8dkSvMT95tanhbp9GaKKwYXKY2AUfHVawhxMgn2Y6d9gtN67srLZ9a7j2kMjweaJxCQV7G2kvGKyjSVJq54",
  "key9": "5ovLPRen1WF9G11LsRpzCh9GvJdnJtjGtfzNQrfgFhqFfWL1vp38hXpvZMDmgdiqDKZB9DnjoMcaLTwHH2pN1wyT",
  "key10": "5Hx6CX3AThitSAQ8AXqK5odZErM9yX6HE3mrYqrgQiQx6M3M3MxT2swCRq8qfH2G8egearQuyzmAF3ScgXJioeH1",
  "key11": "3onEreA9nxPYQbta51gZaoQmHLPPJhP9TD9cs5eMWT5yyQN4g8m866pitrjRkjAVGHUuDiyqbasB4c5w7cdwhsGX",
  "key12": "62HpPpTAduGQ3DkWFtQe5PjVBSwn9YLp1qcT5FZBkaEwyyMJ3wNmcW5bno61tEuogU36626yTMAaXFwTyPDEqCRR",
  "key13": "4QMKHzeMYJZk1qv52AhnbUUbsbh1uH5RVhipw5oroN8A1R7dYh5wAseD3QEKbfTtUqHU331L1sxGznNnkZASzWcd",
  "key14": "883yRv5GxLfobdbVyqDjpNG9TF48T7RuUJSE5DRbwMCuS2xnACsEgVD615VTqVr1iXE76xHSv5YVmiT2iAwzXcB",
  "key15": "4CByA153QRqTmnfWkD8NHcVNRk1EpxtPhC65sQhnWHdvUuU57KcGtEcs3qkLMiTpaiv4cUR6dw8Syafbr4jG1wdm",
  "key16": "5g4dB6KST9qtGRam5tsqK2nRE4YT6XQkCbUMikSsgpkMWYAVet69ZuRmcu3CDFWpHEe7CTPH342ahUq3iG824kC1",
  "key17": "2noC2CKbEeHEAUx9WUAZfSCVth5HTtaeZW2sZwftmRP5ofoj4DQpRysg6DVkmHVRjB4iJRFydFXcz2GCjdqyGB6b",
  "key18": "3ekYAm8XpioHCayDXztALTJ5XcGav4EoZ6Wi9bbDTnRnMZcQAQS8o1zVGDVrTe9PLsdd8j9p6Dj6zovNYJVBFUvR",
  "key19": "41snUUnjZuGz4975DS3J2oJdiW9FAPnK8fs2unoNVFwbKtpQcxn2JUMXJb16a355Y4NdMGKRgxXA9XempzR3iamr",
  "key20": "3i3NCJ4GKmKoyhJGMLJQ6KqpT61BFRCbEBeZoSHg1ZJdZrNktDKofBg2NWPVBUjPNRmFssPyhZnZMVZeRBfoC2wD",
  "key21": "4oSSC7uABmy9tZ6egZjK55hWywWhwodNUzjyvLnsLivEwiSZTqcju5QR3KgfprhnC4ZCJtjQxXdTQ53xKdbkuFdN",
  "key22": "5VknE7bJXJj2iCtHxfg8W5ZBN2jn9LqP4rCPNkz6ufGvsptFuzBPuR9tHXfagpUXGarA5ANRpLbUrbk7bHJ365aB",
  "key23": "qUWFRg55y5yoD832G4DS97dJLKZDsoBwiuJMSZrwGcjTgA31wiVtG6ruQY51fUMvLX5kvpoh96FkdGYBb5RXwBv",
  "key24": "3sVFXHADd6AsiiZj6aMx6nuqte314z5yr4MWcQGi6J4P3bWaNhjzWDD9D9Thzw4ALWXDrAfGHiyMdx1HP1hiQn3Z",
  "key25": "4XCSZM3ghvnG3ZxigJ1GjcpBLZYTL5BkofE9D95nb6qPePPnHP1DqZZuBs9N1KzTcpUXGNwQEUjjkSmAvXuEVG6J",
  "key26": "5QhdgiMwd1vsQ9mpNbTHs3Wxe4gfmVfSPapWtvooAhf6XPmpPku67MBu8ZtDVre8gUcojSwZ23YG2hmkDqRZwsYp",
  "key27": "5Ur9CzGybr3p3LBPtMoH12tSf2g76qJ2cBtbT888C9LLNeq1mEZ9C6Kz4wpGVQRZtWtP4A6SJFafxgUqa6XbeXix",
  "key28": "52mpmKUnrP48aYRACdHRCyvJnxgye3XTDx7WHM4FkudX3efSGxAqa8rHGTZEAC1imFtmGJ8HxiYvnAoByZo7PGTK",
  "key29": "2i55DGbpS3v2hd1DWSPeoP38z9q6KhqUj16BvNdw2BwzvwFrxVCpzTGSfTB8Xb5Mwn34Bk7FiWBqRsVJ6gaQhxKQ",
  "key30": "2Qc1q9bwXhS6u56yBbZGg4VxShqDnhysuwbk7epMuQXwf4GJJnkci4dsy5E5R7gMmXTAF7DgDUotb5dkSK5Yooeg",
  "key31": "2eCCgZY5myEEzLsDc12zC6j5xHq8KhG8fctQr3h2saxZFZkd6PggWr5hVtcWJ7oepnVw65HdXDUUx83mfvxFZgrr",
  "key32": "3Qoqz3Ewdu7L8SVYXGWfBnw78dKepNJadtn4rEFkwdi6pKTrZTQATJ6SELbMxfgvrathgKpS1Q1WK9cEJ5f8KU36",
  "key33": "B5XJqfcCbXGpDxj9GzKEoLb2zrsXKAJUyxQD8TTQyaLkkuT9UyE2kqxcqnUdxtWPmaes5KBBRQ4eQfMHDrUaXts",
  "key34": "5sWSvyzdma7dywB8qDYQHy59xuELwg6pR4KHoZZUo6we8gZnhoyZvZmjDsyBD99xRbScgqCmdrG2fSyg9AzZKZGE",
  "key35": "2Y3Hw77zuyNkKWhvJatM2mfS4Thp6hV45gsbxjZ2nZY3WBK9jWoDRr748Ym6FkKt5NGS8axGb8Zx6sxtfEnMYJiZ",
  "key36": "4EmnCqx9iEbvxc32Rw27ibfDPGhaLamgh1Vd9UsfotfSkkZjMfzxPJ758okUfthBimJkKmKTo6pPEwQnfsfkCRSo",
  "key37": "2JwoSVphMaTXmxAmThD9MwrhmcRJjzJjwfMtn2dAYeiuUpc4a6TpVMW571m3ytbg3VAjhwb8R3uPvQCitzn3eXsN",
  "key38": "3gAwEuvNuZcjTENVoq8mW1rfoFydC6rbv5FvpG1KXj7WjKWncPWeyjrgf97GDTYYkVVKAEes9qLkWY5T5CGFkBPp",
  "key39": "5pi66DpKAVsW5YBvz3mcyD5KgcUbJSez985jwpThcZYmb79f7fZsEQfwfvmLtYMB2sdoYB8KihEF66Ep7eZ8ykhf"
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
