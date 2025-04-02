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
    "4pt7wA52vn5VSnzDiK9R5L8vVLBBS2jhn3d7ANmz86gVLSJ3Ba8T754fCqhwj16dYb49zKLHonVrx6wNZRnJFD8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zAo6bkt6WkUxjS6njaSE9Zy4CZzuEXqgTmtaRowYwWLSatQyrADSXWm3ToQwYxBtCEUBVXurVJUtPaZvdAgfVcX",
  "key1": "2QtEjMM6JP97w3nL2BEZuGUcnNAYN8XzH49bKGPtUBCHqST98EJR1ARaKbRHZcMscZxoRMSzjYmjBtpJvNqJQLn8",
  "key2": "4H15yHTxJkWnk1pzVbxR8CevM9GDgSC8yKfBwXi5coX25UkKFM67UTAgjat6LEosNFkKKF2sLD2abMTHRpNWBjA8",
  "key3": "3TiV1rUfdqbj3gBkj6QwPgpHeGSSnKSfHnAYE3Evt5zFw9QCdaCXAnkwMUJYnLE5mtR3NwnuYbrnTE6dcJd2Bxtg",
  "key4": "3LZsGG1nBwX1ngLYRNaLfQmRxJX7joLkyNVfyYFDLpuPWQCh3QKj14S7e4bpsd7TJJwAkVrY5VEb7XTWtBS7BAUE",
  "key5": "Ny49Y5QhKWEifzG9QaopmoMc4fnFZcLMZvfwpQkucxqo6MWqHZTv2p2foaBGMLBs91Q53zJNPyg4j6As1Huj21g",
  "key6": "z4cnWhSMArfwd7arCEt737V2bgX7LALHTFUTzgHwztzuqVSWpjTbKk5Btzk8L7MJS5VpMSZWS3bSvNtvs8jqYze",
  "key7": "2ShGqGmCQEgwQpdD8NxSVTuDK5snD3qK853he5YDZWdyv3qHkLeJrsGUfyekuZC9xh63wNMMFL5ydydsSQxigJPJ",
  "key8": "4T8uyM4kSnyT2W5eQmyYf2MbXhzraM1WBicEquMs5viTxGWBJoWD4ksBqbryF38f6SXTdneKD3RHVrktsGHDfLMQ",
  "key9": "4XHDRdAqpd7zh6Px3gFwJLJ2gqk78iW8dX3YaSy1jjfiSASMTh5fMasBqrrDPVGy6FmYfH2mjU5HZy99ELqDBEyh",
  "key10": "5xmFSWHk3eQj1CQw6Ajx5YToXzEVZkqhayQaniQfXoE3BamX1pQsYx2Tn68PUnrcyBMMz1HQ38cB32sSScz2sftS",
  "key11": "KsxMtKx4dzL6txFKHmsRRyajqD1DmMVWgqi7n8UsoTnzd33HKnyPQ1Dx6AJsR1ii58U6X4C5G7vWyFCrWZQUsyC",
  "key12": "2mcoBdNX8MeriLGFaFNABkvNLWb17qN19pCJHfirEoy4n5Ls5g5AoapKketWPnD7gLPNzqXh8aqJ9qHsqibGWvRT",
  "key13": "3vCk3VgLzvbH789FYM4tGMrgPuzQGLi4pDK8ygrLxahdft9gDmiwhktao7KzMZmuGseRDftNYqkAjUb66FxXtngm",
  "key14": "3MNGaAJdM9zivyvZiuxryncS1tuei6EPkoUhtKkUDC5SasLKZeoBcqhhoRziC5gzePjZ328v9i9ALsQ82yxVeyGs",
  "key15": "49SxgD7vpixN7o8UvAEY55MWTwdhpB5j7eURRgbdz4BDb23fJcZWei5sBiRk5W8Ye9oeHUBZnxyg3uryDkgP7NrJ",
  "key16": "4kZskaPePkjhB4ybp6FJTvns35WmdnH8oeXzEf2af5YSTUuGdQCMMw7RYoopaobvBuPKtsDG49LYJDNy6s4zxPqn",
  "key17": "3ptQP2NLnu6prgLtj29YXyqasf2kXBTZGcBnFVQ5BHiuNTqjPFRcwdBSJ2kvNFidkArhaCy7eNegK7EFnpWgxJqT",
  "key18": "2SvC8Yoh4MfS8cKZi2cEh4znqKHRrUgs63GQSAC235N13SXBivwqHsQrJdFrZQ5vz1bRLpSxydVPkgxoK4PATo1o",
  "key19": "3QTLeQM7qYpBa3Xn9RrsJHZcTstGa6dPWgFreqmH8RPZUgGdcrGHgj6K1NKJeqnES9KxntvaJdQn1mBGKrTaWj37",
  "key20": "ZhPgPbXHFJv7b9GrPWYxUHpeqVCaqgJEGVeJdWwAZStnR3vjH6r7vHbZfsGVPZ3TzrS8Mk2GLityr7pxhPwsDsy",
  "key21": "3CFJfzN3E3qQ4t5ZVobbvpTPihWZ7CkCA4vuVuDvGWnh81YpXdeqdgHczRV9b6ejeRktPPcidQPJ3Gzb7cqicYxu",
  "key22": "4m3ncAFKTP4cCSZAM3ptAcoiGAALBV3orucjnaoKxE94FQPoLXp2dpq955sBQBmbmJc9X5eh7xKEp8cRtwqPboUB",
  "key23": "WJfMqAgbAkmGxUvTbF7tHjKsNKnjYJaTMTitJZ2E2Y27sKEbh3Yg1VTcyn9GCL2UQABiYcJScqKMXT43Hd2YJms",
  "key24": "5CLrDGqFcAPfEejF1VaquKEBvc2Frn9XpukqwPw5WRhoJPULt52dDuGvdtFj7pYrkbZRBoFkwAUp9x6hMYg1jzMR",
  "key25": "5tWUq2xEu5H9rGo4J8sdTBf5LSJ6JN2ujLtx9hMdAbNgf4RxhkGGjXHivctzV13evaXfLF67jQoXZTRX52U1dfwB",
  "key26": "5X4hGLfxoZuRCgXW1Ec3h5EeLJzHjnD2oYGFF4VvBxfSzYUcxbGS664mCD5CkY4b7GupsUwEpvMFET8DsNCWNSQG",
  "key27": "5n1vCfLyrYLA4woARiLmejAS9hQzsdDKiXH29xRAorVTwijWkCec6tT5UHToshbpHzF7HVBPiJKdXnzXVj9nSi2c",
  "key28": "5H1rfwM8EaxmPrazsdjgDAnThs82M3ervax3p4YGXbFUCb1hMWcozre8jpz9wedQpPU5NjUC57eFfDaGm9zJqf4d",
  "key29": "4GCCNoUXkJwu9hQuYa77jgL6vwrkQUhcw9SBuBRqKas7f9XZoFFz5LevbdBzKf3x7PNDpfWsLMQTZpWdAkBs4R2i",
  "key30": "5fDpXETzgGp2qPtyJrUzcQd9b8hvQxfPeFdP535wAjGL8Pfp5FSMp5beStcFG13qC3JcMgmuvQ3nJ273rt5qKZRh",
  "key31": "3GF8cBMq8u4Hh1Tm5fQ3tQ6fs1XMdLNJmUtqwAruup6BFNDJaDfnBfxJzXRwjBUWHvykh8xTsKmoww6CMhNuMAz9",
  "key32": "65Q6oLp1kZ47oJAsrHZGdq1kEcmoqNXRDSXZCFJKQhTN1JzF1AsM4YJAY4cjZugT3tveFScMViHP8pKVWv7U93xV"
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
