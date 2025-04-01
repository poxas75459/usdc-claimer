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
    "y1YRiEmFxxwbA88dDoBHR5ZBmqnf8trkwicKMyM86ZwMBDxxo4yt7K4osF2ZKqKjRSfrtQpsUj3KK6pCd4irB3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d7JbWonWjVzUXoCW4DGxpgJoDvvaL9xesCzz3NPrdFX1QjLburUrHAPAGFqrjXfGBWYx4ZQehZ9TCrpP3HS5g42",
  "key1": "4mrTuojy8Kcmxx7FU4vPXyKrQGHV3YRpZiEA7cFJPbA6QdQMvhN5JauQA16xys16VeyezNJkDujakPhzd3qJLd9R",
  "key2": "4RD7LLxke2dgECuTdpXj23zWHgEZvGMnN5BkYwPb4CqHyGVCZ2hzBgXrRz1AB1oQa8gdjZsFDtvKzSoYhbpZVpui",
  "key3": "vyZXRxCVbDC3mxpyi2A8QHvLr4LhgjpJfVh9f5MkuPwyKgoLsZGAz5s3Uc2LAUoYcGXSAyGJfAsDGmtLsbv95di",
  "key4": "21h1SL9msaj45p561zAzWVS958MSzZESQEYPMDMvh2PBUKf3sVHpKGnQHgHiwm3esdzBu1abVsyUw8U7idNcgu8r",
  "key5": "pvuSgnyzM67tA3rSNRpoVL98auoCEsZ2GzUDz6ajoBaEhU8koPegbnsCXFkvCMV6v66sf7y1TWn5kF5WAEoveUA",
  "key6": "3jw3yMzj7E5CLYNkWjvdstaiUHiewBjVUmFUxvi9v5qiyxspaXLjwxUqbqF6994nAgZy4Quyu5BKPC6rkYFquDKA",
  "key7": "5MmPh5jpbAja2cBbbcZBbNE9aoe16yunLgcrz98bV6mPUfXTjDdG3RoUTrtRjReEZ5x2Vb6MX4pAuYewxSAnpHVr",
  "key8": "5RdtCWxD8YCELdxFVtGawUJ8pcEFv2bLBSZdWT8vp9Z3GmviEveu5DMsURH8U6CnvDZoSunT44QPk9zzmdHCaVLj",
  "key9": "3cSMvpZwoJtbN8SoKuHqheoCZCYsDw6aLFDpWFfc8DWD5LTFzy9WhL78RQEWndiCwc97mrQtvVHR8p1zF9Ycc9S6",
  "key10": "ywrqcFJttkRC2QVMmPC2HHP8mByQ7ZMRyfLgE9pfcCTBX4ZXubapCqMPMyzfdcr1u1Mwntv3ReiPApe9Xze4WSa",
  "key11": "2zAn5M3b3HxiNAkoPqZEF7Z5noHs2kefQMtiJJ1Xru5ZN9KwruLP1RDWaSdc5TrzQTK4SWeGRP3rhos38v57VjCR",
  "key12": "64sGEdoxHP8n9s638mfEofLacaAyHFU7NzDMKdNXNF4TUvRaSpgGWA3TUcsPDLDKaarB3LwbbAGduwibLSaLQZUa",
  "key13": "2fAbVyBwBiZvvdEMvjiZzixwPrsjmdcDrKU9pf712DittWdzdk1LTxbhknVYsbhUmZkQfF39f9jWSB7oJAq6evds",
  "key14": "35zuENxLjZpTrGW6sw2EGyHyYEWSiE2CGfoWye6Sqb6DEoqR5Hjw2cg7Qiu5greKNf5gyabL6PPD1XxsUKCTMLqj",
  "key15": "5DZXjsp71x4fjxfiXkT3wWFCkTqBriZSSXa2JibvvHa6KMnhvhWGqR6cLA5UPb41G2jrtyhmJM6GNMZ7gSGJVyZi",
  "key16": "2bQq1LPWQjmeWdSiB7PuQGAKbocHfE6acesvAt2KnQk55d9ccGzfkD3NUa246cv2reVVka7e4w3Fgt5X4d3wFkxv",
  "key17": "4QhAT8UyXTRcjbFSf5q2nZtyvYNU1T3MJEMdBLpT6fFjuVStRCdJhA5LvpoBRBfR1MnAHgwnny94k1u6PCbSzYSP",
  "key18": "2mtCLmvQYBLZcKvw2NFzH9tzvYu4XmgPeUYq182qXphVpB5BDW4fWmKRuHihyBmYYKLn3jwL2TYFpoMdgxz6b8ec",
  "key19": "3asokRF9LfVozdiLdkERrffPtxcb8V1UpMzBhmU7SBhewiMfmN1p9ckAN1cfK6hdhij739yvpE69H6nnka2YLVQJ",
  "key20": "4kjkPWmwsjSX1pjMAqukJyi4CnxgKK9yRg7jM8TfSjFg7C5uUWWf6hBrPirSVvom16ZQMJHQz9q66PPYP3iJdi79",
  "key21": "qyakToT3wspRUnTzWeWJAxJ8eHHcpDUGNPZ1Gh1vvPkMXUmghEzEd6Aq7QeRZ8aM8EapJXp9xe7VTrnhfNi2hu9",
  "key22": "5WnYEMwhqefSwX81Aebj2K9f3sJ4qHuxdBezU1ChJbGGB3aTV1AhNSpwTjaHYYv2yciisiAJM3pk1HhGfJf2jyMA",
  "key23": "33qCZz6P8MHv5eSVP3VHXrP3kVz3MrK9bEaD3rBQiRCf8d5mG7i3TvZGk39TN412tgmWxwYKK2mL7L4YJ7xZxKdb",
  "key24": "2veugDTpkomoSkQxByPyT8aiQv7brbDWzPsZ4xhrtA9vHazh4n168C9ScDAm8XXxjM6xcNYvgw16rB6aunPjw9kS",
  "key25": "5DxxMeVoeVk7QUCh31gs9ZWctXWEk94BmRPii38SgJ2mX54TzH258KMvaHCi2ZtSJX9he184UffRBgRAXbKxiDFv",
  "key26": "3122mHUspDb3eZTSsmbdxiHHt8xKGjuJnSxkpYHncsjfDExv4Jeb9eavXCVVD9cuZZP9bi27PzAUgjPFJiz3UENh",
  "key27": "PnYMAsB1LnQV2Exg8Q8yz7JuLwTWbfNDjEP83N9DM1HiwUBmnZywxDTkyP4XvrWczMDSrHLX1LzxDFB5j7uiq4a",
  "key28": "2f6uniVNXLGsLwtDextS3oo6ViGa7peh3HcfovXmfsZK2SgLnWABoLxKaGQ5bgCigPjVBrcnf5BULyX2bZzeuh7n"
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
